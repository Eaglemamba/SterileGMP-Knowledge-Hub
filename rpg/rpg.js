/* SterileGMP Knowledge Hub — RPG learning layer
 *
 * One script for every page. It reads the progress the site already stores
 * (sgk_progress_*, gmp-learning-progress, gmp-quiz-results), derives XP, level,
 * rank, cards, titles and pet stage from it, and renders:
 *   - a character bar on every page
 *   - a "next quest" card on the dashboard        (mount: #rpg-quest)
 *   - section challenges on document pages        (questions: rpg/quiz/<key>.json)
 *   - the character / collection page             (mount: #rpg-character)
 *
 * Storage: writes only `sgk_rpg_v1`, plus one aggregated record per document in
 * `gmp-quiz-results` (existing shape) so Learning Path badges keep working.
 *
 * Switch: off by default. `?rpg=1` turns it on for this browser, `?rpg=0` off.
 */
(function () {
  'use strict';

  var DEFAULT_ON = false;
  var STATE_KEY = 'sgk_rpg_v1';
  var FLAG_KEY = 'sgk_rpg_enabled';
  var QUIZ_KEY = 'gmp-quiz-results';
  var XP_READ = 10, XP_QUIZ = 30, XP_DOC = 50, PASS = 0.8;

  var script = document.currentScript;
  var ROOT = script && script.src ? script.src.replace(/rpg\/rpg\.js(?:[?#].*)?$/, '') : '';

  /* ---------- storage helpers ---------- */
  function lsGet(k) { try { return localStorage.getItem(k); } catch (e) { return null; } }
  function lsSet(k, v) { try { localStorage.setItem(k, v); return true; } catch (e) { return false; } }
  function lsDel(k) { try { localStorage.removeItem(k); } catch (e) {} }
  function lsJSON(k, fallback) {
    try { var v = JSON.parse(lsGet(k) || 'null'); return v === null ? fallback : v; } catch (e) { return fallback; }
  }

  /* ---------- on/off switch ---------- */
  try {
    var flag = new URLSearchParams(location.search).get('rpg');
    if (flag === '1') lsSet(FLAG_KEY, '1');
    if (flag === '0') lsSet(FLAG_KEY, '0');
  } catch (e) {}
  var stored = lsGet(FLAG_KEY);
  if (!(stored === '1' || (DEFAULT_ON && stored !== '0'))) return;

  /* ---------- static game data ---------- */
  var CLASS_META = {
    qa: { job: '守護者' }, qc: { job: '鑑定師' }, production: { job: '充填師' },
    engineering: { job: '機工' }, ra: { job: '書記官' }, warehouse: { job: '補給官' },
    techservice: { job: '調律師' }, bt: { job: '資料術士' }
  };
  var RANKS = [
    { zh: '見習', en: 'Trainee' }, { zh: '初階', en: 'Foundation' },
    { zh: '中堅', en: 'Core' }, { zh: '專家', en: 'Advanced' }
  ];
  var PETS = {
    a: { color: '#38bdf8', stages: ['水滴精靈', '霧氣精靈', '蒸氣小龍'] },
    b: { color: '#34d399', stages: ['雛梟', '風梟', '層流大梟'] },
    c: { color: '#a78bfa', stages: ['玻瓶史萊姆', '晶體獸', '琉璃守衛獸'] }
  };
  var CLUSTER_ZH = ['無菌製程', '滅菌過濾', '容器密封', '品質系統', '環境監測', '檢驗方法', '廠房設備', '先進療法', '法規遵循', '新興技術'];
  var RARITY = ['N', 'R', 'SR', 'SSR'];
  var GROUP_LABEL = { PDA: 'PDA', ISPE: 'ISPE', FDA: 'FDA', PICS: 'PIC/S', ICH: 'ICH', USP: 'USP', ISO: 'ISO', PHEUR: 'Ph.Eur.' };

  var M = null;        // manifest
  var DEPTS = [];      // departments from gmp-curriculum-data.js
  var CLUSTERS = [];   // topicClusters
  var S = null;        // sgk_rpg_v1
  var G = null;        // last computed game state
  var pageDocKey = null;

  /* ---------- tiny DOM helper (textContent only, never innerHTML) ---------- */
  function h(tag, attrs, kids) {
    var el = document.createElement(tag);
    if (attrs) Object.keys(attrs).forEach(function (k) {
      var v = attrs[k];
      if (v === null || v === undefined || v === false) return;
      if (k === 'class') el.className = v;
      else if (k === 'text') el.textContent = v;
      else if (k === 'style') el.setAttribute('style', v);
      else if (k.slice(0, 2) === 'on') el.addEventListener(k.slice(2), v);
      else el.setAttribute(k, v === true ? '' : v);
    });
    (kids || []).forEach(function (c) {
      if (c === null || c === undefined || c === false) return;
      el.appendChild(typeof c === 'string' ? document.createTextNode(c) : c);
    });
    return el;
  }
  function clear(el) { while (el.firstChild) el.removeChild(el.firstChild); }

  /* ---------- images (real asset if present, otherwise a silhouette) ---------- */
  function svgUri(svg) { return 'data:image/svg+xml;charset=utf-8,' + encodeURIComponent(svg); }
  function placeholderPortrait(color) {
    return svgUri('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 96 128"><rect width="96" height="128" fill="' + color +
      '" opacity=".14"/><circle cx="48" cy="46" r="20" fill="' + color + '"/><path d="M8 128c0-30 18-46 40-46s40 16 40 46z" fill="' + color + '"/></svg>');
  }
  function placeholderPet(color, stage) {
    var r = 22 + stage * 6;
    return svgUri('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 96 96"><ellipse cx="48" cy="' + (60 - stage * 2) + '" rx="' + r + '" ry="' + (r - 4) +
      '" fill="' + color + '"/><circle cx="40" cy="54" r="4" fill="#fff"/><circle cx="56" cy="54" r="4" fill="#fff"/>' +
      '<circle cx="41" cy="55" r="2" fill="#14151a"/><circle cx="57" cy="55" r="2" fill="#14151a"/></svg>');
  }
  function placeholderEgg() {
    return svgUri('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 96 96"><ellipse cx="48" cy="52" rx="24" ry="32" fill="#f1f5f9" stroke="#94a3b8" stroke-width="2"/>' +
      '<path d="M26 44h44M25 54h46M27 64h42" stroke="#38bdf8" stroke-width="3" opacity=".7"/></svg>');
  }
  function asset(name) {
    var f = name + '.webp';
    return M && M.assets && M.assets.indexOf(f) >= 0 ? ROOT + 'rpg/assets/' + f : null;
  }
  function deptById(id) { for (var i = 0; i < DEPTS.length; i++) if (DEPTS[i].id === id) return DEPTS[i]; return null; }
  function classImg(id) { var d = deptById(id); return asset('class-' + id) || placeholderPortrait(d ? d.color : '#64748b'); }
  function petImg(line, stage) { return asset('pet-' + line + '-' + stage) || placeholderPet(PETS[line].color, stage); }
  function eggImg() { return asset('egg') || placeholderEgg(); }

  /* ---------- state ---------- */
  function loadState() {
    var s = lsJSON(STATE_KEY, null);
    if (!s || s.v !== 1) s = { v: 1 };
    s.profile = s.profile || null;
    s.pet = s.pet || null;
    s.quiz = s.quiz || {};
    s.end = s.end || {};
    s.streak = s.streak || { last: '', count: 0, best: 0 };
    s.seen = s.seen || null;
    return s;
  }
  function saveState() { lsSet(STATE_KEY, JSON.stringify(S)); }
  function dayKey(d) {
    return d.getFullYear() + '-' + ('0' + (d.getMonth() + 1)).slice(-2) + '-' + ('0' + d.getDate()).slice(-2);
  }
  function touchStreak() {
    var today = dayKey(new Date());
    if (S.streak.last === today) return;
    var y = new Date(); y.setDate(y.getDate() - 1);
    S.streak.count = S.streak.last === dayKey(y) ? S.streak.count + 1 : 1;
    S.streak.best = Math.max(S.streak.best || 0, S.streak.count);
    S.streak.last = today;
  }
  function liveStreak() {
    var y = new Date(); y.setDate(y.getDate() - 1);
    return (S.streak.last === dayKey(new Date()) || S.streak.last === dayKey(y)) ? S.streak.count : 0;
  }

  /* ---------- game state derived from stored progress ---------- */
  function needXp(level) { return 50 * level * (level - 1); }

  function docState(key) {
    var d = M.docs[key];
    var p = lsJSON('sgk_progress_' + d.stem, null);
    var maxIdx = p ? d.dom.indexOf(p.maxId || p.id) : -1;
    var all = !d.shell && !!p && !!p.complete && (p.pct === 100 || !!S.end[key]);
    var read = 0;
    d.top.forEach(function (t) { var i = d.dom.indexOf(t.id); if (all || (i >= 0 && i < maxIdx)) read++; });

    var secs = d.quiz ? Object.keys(d.quiz) : [];
    var q = S.quiz[key] || {};
    var passed = 0, tried = 0;
    secs.forEach(function (sid) {
      var r = q[sid];
      if (!r) return;
      tried++;
      if (r.total > 0 && r.best / r.total >= PASS) passed++;
    });
    var cleared = !d.shell && (secs.length ? passed === secs.length : all);
    var n = d.top.length;
    return {
      key: key, doc: d, maxIdx: maxIdx, started: !!p, readAll: all, read: read, total: n,
      quizSecs: secs, passed: passed, tried: tried, cleared: cleared,
      xp: read * XP_READ + passed * XP_QUIZ + (cleared ? XP_DOC : 0),
      card: (all || cleared) ? { rarity: n >= 10 ? 3 : n >= 6 ? 2 : n >= 3 ? 1 : 0, awakened: secs.length > 0 && cleared } : null
    };
  }

  function compute() {
    var docs = {}, xp = 0, activity = 0, cards = 0;
    Object.keys(M.docs).forEach(function (k) {
      var st = docState(k);
      docs[k] = st; xp += st.xp; activity += st.read + st.passed;
      if (st.card) cards++;
    });
    var level = 1;
    while (xp >= needXp(level + 1)) level++;

    var classes = {}, maxRank = 0;
    DEPTS.forEach(function (dep) {
      var rank = 0, open = true;
      var tiers = dep.tiers.map(function (t) {
        var list = t.docs.filter(function (x) { return M.docs[x.key] && !M.docs[x.key].shell; });
        var req = list.filter(function (x) { return x.required; });
        var pool = req.length ? req : list;
        var need = req.length ? req.length : Math.min(3, list.length);
        var got = pool.filter(function (x) { return docs[x.key].cleared; }).length;
        var done = got >= need;
        if (open && done) rank++; else open = false;
        return { tier: t, list: list, req: req, need: need, got: Math.min(got, need), done: done, anyOf: !req.length };
      });
      classes[dep.id] = { dep: dep, rank: rank, tiers: tiers };
      if (rank > maxRank) maxRank = rank;
    });

    var titles = CLUSTERS.map(function (c, i) {
      var keys = Object.keys(M.docs).filter(function (k) {
        var d = M.docs[k];
        return !d.shell && d.tags.some(function (t) { return c.tags.indexOf(t) >= 0; });
      });
      var got = keys.filter(function (k) { return docs[k].cleared; }).length;
      var lv = keys.length && got === keys.length ? 2 : (keys.length && got >= Math.min(5, keys.length) ? 1 : 0);
      return { id: 'c' + i, zh: CLUSTER_ZH[i] || c.name, en: c.name, color: c.color, n: keys.length, got: got, lv: lv };
    });

    return {
      docs: docs, xp: xp, level: level, lo: needXp(level), hi: needXp(level + 1),
      activity: activity, cards: cards, classes: classes, maxRank: maxRank, titles: titles,
      petStage: S.pet ? 1 + (maxRank >= 1 ? 1 : 0) + (maxRank >= 2 ? 1 : 0) : 0,
      sectionsRead: Object.keys(docs).reduce(function (a, k) { return a + docs[k].read; }, 0)
    };
  }

  function snapshot(g) {
    var cards = {}, titles = {}, rank = {};
    Object.keys(g.docs).forEach(function (k) { var c = g.docs[k].card; if (c) cards[k] = c.awakened ? 2 : 1; });
    g.titles.forEach(function (t) { if (t.lv) titles[t.id] = t.lv; });
    Object.keys(g.classes).forEach(function (id) { rank[id] = g.classes[id].rank; });
    return { xp: g.xp, level: g.level, activity: g.activity, cards: cards, titles: titles, rank: rank, pet: g.petStage };
  }

  /* Compare with what the learner has already been shown and queue rewards. */
  function refresh(silent) {
    G = compute();
    if (!S.profile) { renderAll(); return; }
    var prev = S.seen, now = snapshot(G), events = [];
    if (prev && !silent) {
      if (now.activity > (prev.activity || 0)) touchStreak();
      if (now.xp > prev.xp) events.push({ kind: 'xp', n: now.xp - prev.xp });
      if (now.level > prev.level) events.push({ kind: 'level', n: now.level });
      Object.keys(now.cards).forEach(function (k) {
        if (!prev.cards[k]) events.push({ kind: 'card', key: k, awakened: now.cards[k] === 2 });
        else if (now.cards[k] > prev.cards[k]) events.push({ kind: 'card', key: k, awakened: true, upgrade: true });
      });
      Object.keys(now.titles).forEach(function (id) {
        if ((prev.titles[id] || 0) < now.titles[id]) events.push({ kind: 'title', id: id, lv: now.titles[id] });
      });
      var cls = S.profile.cls;
      if ((now.rank[cls] || 0) > (prev.rank[cls] || 0)) events.push({ kind: 'rank', n: now.rank[cls] });
      if (prev.pet && now.pet > prev.pet) events.push({ kind: 'pet', n: now.pet });
    }
    S.seen = now;
    saveState();
    renderAll();
    if (events.length) showRewards(events);
    if (!S.pet && G.sectionsRead >= 1 && !document.querySelector('.rpg-modal')) openHatch();
  }

  /* ---------- quest logic ---------- */
  function nextQuest() {
    if (!S.profile) return null;
    var c = G.classes[S.profile.cls];
    if (!c) return null;
    var pick = null;
    function scan(requiredOnly) {
      for (var i = 0; i < c.tiers.length && !pick; i++) {
        var t = c.tiers[i];
        var list = requiredOnly ? t.req : t.list;
        for (var j = 0; j < list.length; j++) {
          var st = G.docs[list[j].key];
          if (!st.cleared) { pick = { st: st, tier: t, tierIdx: i, entry: list[j] }; break; }
        }
        if (requiredOnly && !t.done && !pick && t.anyOf) {
          for (var k = 0; k < t.list.length; k++) {
            var s2 = G.docs[t.list[k].key];
            if (!s2.cleared) { pick = { st: s2, tier: t, tierIdx: i, entry: t.list[k] }; break; }
          }
        }
      }
    }
    scan(true);
    if (!pick) scan(false);
    if (!pick) return { done: true, cls: c };

    var st = pick.st, d = st.doc, target, mode;
    if (!st.readAll) {
      var sec = d.top[Math.min(st.read, d.top.length - 1)];
      target = sec; mode = 'read';
      pick.href = ROOT + d.file + '#' + sec.id;
    } else {
      var q = S.quiz[st.key] || {};
      var sid = st.quizSecs.filter(function (x) { var r = q[x]; return !(r && r.total && r.best / r.total >= PASS); })[0];
      target = d.top.filter(function (t) { return t.id === sid; })[0] || d.top[0];
      mode = 'quiz';
      pick.href = ROOT + d.file + '#rpgq-' + target.id;
    }
    pick.target = target; pick.mode = mode; pick.cls = c;
    return pick;
  }

  /* ---------- rendering: character bar ---------- */
  function frameClass() {
    var r = G.classes[S.profile.cls] ? G.classes[S.profile.cls].rank : 0;
    var s = liveStreak();
    return 'rpg-frame rpg-frame-' + r + (s >= 30 ? ' rpg-frame-s30' : s >= 7 ? ' rpg-frame-s7' : '');
  }
  function avatarEl(size) {
    return h('span', { class: frameClass() + ' rpg-avatar' + (size ? ' rpg-avatar-' + size : '') }, [
      h('img', { src: classImg(S.profile.avatar), alt: '', loading: 'lazy' })
    ]);
  }
  function bestTitle() {
    var t = G.titles.filter(function (x) { return x.lv; }).sort(function (a, b) { return b.lv - a.lv; })[0];
    return t ? t.zh + (t.lv === 2 ? '大師' : '修習者') : '';
  }
  function xpBar() {
    var pct = Math.max(0, Math.min(100, Math.round((G.xp - G.lo) / (G.hi - G.lo) * 100)));
    return h('span', { class: 'rpg-xp', role: 'progressbar', 'aria-valuenow': pct, 'aria-valuemin': 0, 'aria-valuemax': 100, 'aria-label': '經驗值' }, [
      h('span', { class: 'rpg-xp-fill', style: 'width:' + pct + '%' })
    ]);
  }

  function renderBar() {
    var bar = document.getElementById('rpg-bar');
    if (!bar) {
      bar = h('div', { id: 'rpg-bar', class: 'rpg-bar' });
      document.body.appendChild(bar);
      document.body.classList.add('rpg-on');
    }
    clear(bar);
    if (!S.profile) {
      bar.appendChild(h('button', { class: 'rpg-bar-cta', type: 'button', onclick: openOnboarding }, [
        h('span', { class: 'rpg-bar-cta-tag', text: 'NEW' }), '建立你的角色，開始學習冒險'
      ]));
      return;
    }
    var c = G.classes[S.profile.cls], dep = c.dep, title = bestTitle(), streak = liveStreak();
    var link = h('a', { class: 'rpg-bar-main', href: ROOT + 'character.html', 'aria-label': '開啟角色頁' }, [
      avatarEl(),
      h('span', { class: 'rpg-bar-id' }, [
        h('span', { class: 'rpg-bar-name', text: S.profile.nick }),
        h('span', { class: 'rpg-bar-job', text: (title ? title + '・' : '') + RANKS[c.rank].zh + CLASS_META[dep.id].job })
      ]),
      h('span', { class: 'rpg-bar-lv' }, [h('small', { text: 'Lv' }), String(G.level)]),
      h('span', { class: 'rpg-bar-xp' }, [xpBar(), h('small', { text: G.xp + ' / ' + G.hi + ' XP' })]),
      streak ? h('span', { class: 'rpg-bar-streak', title: '連續學習天數' }, [h('b', { text: String(streak) }), h('small', { text: '天連續' })]) : null,
      S.pet ? h('img', { class: 'rpg-bar-pet rpg-idle', src: petImg(S.pet.line, G.petStage), alt: PETS[S.pet.line].stages[G.petStage - 1] }) : null
    ]);
    bar.appendChild(link);
  }

  /* ---------- rendering: next quest card (dashboard) ---------- */
  function renderQuest() {
    var mount = document.getElementById('rpg-quest');
    if (!mount) return;
    clear(mount);
    if (!S.profile) {
      mount.appendChild(h('div', { class: 'rpg-quest rpg-quest-new' }, [
        h('div', { class: 'rpg-quest-body' }, [
          h('span', { class: 'rpg-tag', text: 'START' }),
          h('h2', { text: '選一個職業，從第一個任務開始' }),
          h('p', { text: '184 份文件不知道從哪裡讀起？建立角色後，這裡會告訴你下一步。' }),
          h('button', { class: 'rpg-btn', type: 'button', onclick: openOnboarding, text: '建立角色' })
        ])
      ]));
      return;
    }
    var q = nextQuest();
    var c = G.classes[S.profile.cls];
    var portrait = h('img', { class: 'rpg-quest-portrait', src: classImg(S.profile.cls), alt: '' });
    if (!q || q.done) {
      mount.appendChild(h('div', { class: 'rpg-quest' }, [portrait, h('div', { class: 'rpg-quest-body' }, [
        h('span', { class: 'rpg-tag', text: 'COMPLETE' }),
        h('h2', { text: c.dep.nameZh + '的任務全部完成' }),
        h('p', { text: '可以到角色頁轉職，挑戰另一個部門的主線。' }),
        h('a', { class: 'rpg-btn', href: ROOT + 'character.html', text: '前往角色頁' })
      ])]));
      return;
    }
    var d = q.st.doc, main = q.entry.required || q.tier.anyOf;
    var tierText = q.tier.tier.labelZh + '　' + q.tier.got + ' / ' + q.tier.need;
    var a = h('a', {
      class: 'rpg-btn track-open', href: q.href,
      'data-track-file': d.file, 'data-track-title': d.title, 'data-track-zh': d.titleZh,
      text: q.mode === 'quiz' ? '前往挑戰' : (q.st.started ? '繼續閱讀' : '出發')
    });
    mount.appendChild(h('div', { class: 'rpg-quest' }, [
      portrait,
      h('div', { class: 'rpg-quest-body' }, [
        h('span', { class: 'rpg-tag', text: main ? '主線任務' : '支線任務' }),
        h('h2', { text: d.titleZh || d.title }),
        h('p', { class: 'rpg-quest-sec', text: (q.mode === 'quiz' ? '章節挑戰：' : '閱讀：') + 'Section ' + q.target.num + '　' + (q.target.zh || q.target.en) }),
        q.entry.why ? h('p', { class: 'rpg-quest-why', text: q.entry.why }) : null,
        h('div', { class: 'rpg-quest-foot' }, [
          a,
          h('span', { class: 'rpg-quest-meta', text: tierText }),
          h('span', { class: 'rpg-quest-meta', text: '本文件 ' + q.st.read + ' / ' + q.st.total + ' 節' })
        ])
      ])
    ]));
  }

  /* ---------- rendering: cards ---------- */
  function cardEl(st, locked) {
    var d = st.doc, c = st.card;
    var cls = 'rpg-card' + (locked ? ' rpg-card-locked' : ' rpg-card-r' + c.rarity + (c.awakened ? ' rpg-card-awakened' : ''));
    return h('a', { class: cls, href: ROOT + d.file, style: '--bar:' + d.bar, title: d.title }, [
      h('span', { class: 'rpg-card-top' }, [
        h('span', { class: 'rpg-card-short', text: d.short }),
        locked ? null : h('span', { class: 'rpg-card-rarity', text: RARITY[c.rarity] })
      ]),
      h('span', { class: 'rpg-card-title', text: locked ? '？？？' : (d.titleZh || d.title) }),
      h('span', { class: 'rpg-card-foot', text: locked ? (GROUP_LABEL[d.group] || d.group) : (c.awakened ? '覺醒' : (d.quiz ? '可挑戰' : '已讀完')) })
    ]);
  }

  /* ---------- modal plumbing ---------- */
  function modal(kids, opts) {
    var wrap = h('div', { class: 'rpg-modal' + (opts && opts.cls ? ' ' + opts.cls : ''), role: 'dialog', 'aria-modal': 'true' });
    var box = h('div', { class: 'rpg-modal-box' }, kids);
    wrap.appendChild(box);
    if (!(opts && opts.sticky)) {
      wrap.addEventListener('click', function (e) { if (e.target === wrap) close(); });
      box.insertBefore(h('button', { class: 'rpg-modal-x', type: 'button', 'aria-label': '關閉', text: '×', onclick: close }), box.firstChild);
    }
    function close() { if (wrap.parentNode) wrap.parentNode.removeChild(wrap); }
    document.body.appendChild(wrap);
    return { el: wrap, close: close };
  }

  /* ---------- onboarding / edit character ---------- */
  function openOnboarding() {
    var editing = !!S.profile;
    var pick = { cls: editing ? S.profile.cls : 'production', avatar: editing ? S.profile.avatar : 'production' };
    var nick = h('input', { class: 'rpg-input', type: 'text', maxlength: '16', placeholder: '暱稱（最多 16 字）', value: editing ? S.profile.nick : '' });
    var classGrid = h('div', { class: 'rpg-pick-grid' });
    var avatarGrid = h('div', { class: 'rpg-pick-grid rpg-pick-avatars' });
    var hint = h('p', { class: 'rpg-hint' });
    var avatarTouched = editing;

    function draw() {
      clear(classGrid); clear(avatarGrid);
      DEPTS.forEach(function (dep) {
        classGrid.appendChild(h('button', {
          type: 'button', class: 'rpg-pick' + (pick.cls === dep.id ? ' is-on' : ''), style: '--c:' + dep.color,
          onclick: function () { pick.cls = dep.id; if (!avatarTouched) pick.avatar = dep.id; draw(); }
        }, [
          h('b', { text: CLASS_META[dep.id].job }),
          h('span', { text: dep.nameZh }),
          h('small', { text: M.docs && hasQuiz(dep) ? '有章節挑戰' : '閱讀通關' })
        ]));
        avatarGrid.appendChild(h('button', {
          type: 'button', class: 'rpg-pick-avatar' + (pick.avatar === dep.id ? ' is-on' : ''), 'aria-label': CLASS_META[dep.id].job + '頭像',
          onclick: function () { pick.avatar = dep.id; avatarTouched = true; draw(); }
        }, [h('img', { src: classImg(dep.id), alt: '' })]));
      });
      var dep = deptById(pick.cls);
      hint.textContent = dep.nameZh + '：' + dep.description;
    }
    function hasQuiz(dep) {
      return dep.tiers.some(function (t) { return t.docs.some(function (x) { return M.docs[x.key] && M.docs[x.key].quiz; }); });
    }
    draw();

    var m = modal([
      h('span', { class: 'rpg-tag', text: editing ? 'CHARACTER' : 'WELCOME' }),
      h('h2', { text: editing ? '編輯角色' : '建立你的角色' }),
      h('p', { class: 'rpg-modal-lead', text: editing ? '轉職不會清掉進度，只會換主線任務。' : '選一個職業決定主線任務，之後可以隨時轉職。讀完章節、通過章節挑戰都會得到經驗值、文件卡和寵物進化。' }),
      h('h3', { text: '1. 職業' }), classGrid, hint,
      h('h3', { text: '2. 頭像' }), avatarGrid,
      h('h3', { text: '3. 暱稱' }), nick,
      h('p', { class: 'rpg-note', text: '角色和進度只存在這台裝置的瀏覽器裡，不會上傳。清除瀏覽器資料會一併清掉。目前只有「生產製造部」的必讀文件有章節挑戰，其他職業先以讀完通關。' }),
      h('button', {
        class: 'rpg-btn rpg-btn-wide', type: 'button', text: editing ? '儲存' : '開始冒險',
        onclick: function () {
          var name = (nick.value || '').trim().slice(0, 16) || '見習生';
          var first = !S.profile;
          S.profile = { nick: name, cls: pick.cls, avatar: pick.avatar };
          saveState();
          m.close();
          refresh(first);   // first time: adopt existing history without a flood of rewards
          if (first && G.xp > 0) toast('已帶入你之前的閱讀紀錄：' + G.xp + ' XP');
        }
      })
    ], { sticky: !editing, cls: 'rpg-modal-wide' });
    nick.focus();
  }

  /* ---------- pet hatch ---------- */
  function openHatch() {
    var grid = h('div', { class: 'rpg-pet-grid' });
    var m = modal([
      h('span', { class: 'rpg-tag', text: 'HATCH' }),
      h('h2', { text: '蛋有動靜了' }),
      h('p', { class: 'rpg-modal-lead', text: '你讀完了第一節。選一隻夥伴，牠會隨著你升階而進化。' }),
      h('img', { class: 'rpg-egg rpg-wobble', src: eggImg(), alt: '蛋' }),
      grid
    ], { sticky: true });
    Object.keys(PETS).forEach(function (line) {
      grid.appendChild(h('button', {
        type: 'button', class: 'rpg-pet-pick', style: '--c:' + PETS[line].color,
        onclick: function () {
          S.pet = { line: line, at: Date.now() };
          saveState(); m.close(); refresh(true);
          showRewards([{ kind: 'hatch' }]);
        }
      }, [h('img', { src: petImg(line, 1), alt: '' }), h('b', { text: PETS[line].stages[0] }),
        h('small', { text: '→ ' + PETS[line].stages[1] + ' → ' + PETS[line].stages[2] })]));
    });
  }

  /* ---------- rewards: toast + cut-in ---------- */
  function toast(text) {
    var host = document.getElementById('rpg-toasts') || document.body.appendChild(h('div', { id: 'rpg-toasts', class: 'rpg-toasts', 'aria-live': 'polite' }));
    var t = h('div', { class: 'rpg-toast', text: text });
    host.appendChild(t);
    setTimeout(function () { t.classList.add('is-out'); setTimeout(function () { if (t.parentNode) t.parentNode.removeChild(t); }, 400); }, 2600);
  }

  var cutQueue = [], cutBusy = false;
  function showRewards(events) {
    var big = [];
    events.forEach(function (e) {
      if (e.kind === 'xp') toast('+' + e.n + ' XP');
      else big.push(e);
    });
    if (big.length > 4) {   // many at once (e.g. several docs cleared elsewhere): one summary
      var cards = big.filter(function (e) { return e.kind === 'card'; }).length;
      big = big.filter(function (e) { return e.kind !== 'card'; }).slice(0, 3);
      if (cards) toast('獲得 ' + cards + ' 張文件卡');
    }
    big.forEach(function (e) { cutQueue.push(e); });
    if (!cutBusy) nextCut();
  }
  function nextCut() {
    var e = cutQueue.shift();
    if (!e) { cutBusy = false; return; }
    cutBusy = true;
    var kicker = '', title = '', sub = '', art = null;
    if (e.kind === 'level') { kicker = 'LEVEL UP'; title = 'Lv ' + e.n; sub = '等級提升'; art = h('img', { src: classImg(S.profile.avatar), alt: '' }); }
    else if (e.kind === 'rank') {
      kicker = 'RANK UP'; title = RANKS[e.n].zh + CLASS_META[S.profile.cls].job; sub = RANKS[e.n].en + ' 階級達成';
      art = h('img', { src: classImg(S.profile.cls), alt: '' });
    } else if (e.kind === 'card') {
      var st = G.docs[e.key];
      kicker = e.upgrade ? 'AWAKENED' : 'NEW CARD'; title = st.doc.short; sub = e.awakened ? '文件卡覺醒' : '獲得文件卡';
      art = h('div', { class: 'rpg-cut-card rpg-flip' }, [cardEl(st, false)]);
    } else if (e.kind === 'title') {
      var t = G.titles.filter(function (x) { return x.id === e.id; })[0];
      kicker = 'TITLE'; title = t.zh + (e.lv === 2 ? '大師' : '修習者'); sub = '獲得稱號';
    } else if (e.kind === 'pet') {
      kicker = 'EVOLUTION'; title = PETS[S.pet.line].stages[e.n - 1]; sub = '夥伴進化了';
      art = h('img', { class: 'rpg-pop', src: petImg(S.pet.line, e.n), alt: '' });
    } else if (e.kind === 'hatch') {
      kicker = 'HATCHED'; title = PETS[S.pet.line].stages[0]; sub = '新的夥伴加入';
      art = h('img', { class: 'rpg-pop', src: petImg(S.pet.line, 1), alt: '' });
    }
    var cut = h('div', { class: 'rpg-cutin', role: 'status' }, [
      h('div', { class: 'rpg-cutin-band' }, [
        h('div', { class: 'rpg-cutin-lines', 'aria-hidden': 'true' }),
        art ? h('div', { class: 'rpg-cutin-art' }, [art]) : null,
        h('div', { class: 'rpg-cutin-text' }, [
          h('span', { class: 'rpg-cutin-kicker', text: kicker }),
          h('strong', { text: title }), h('span', { text: sub })
        ])
      ])
    ]);
    var done = false;
    function end() {
      if (done) return; done = true;
      cut.classList.add('is-out');
      setTimeout(function () { if (cut.parentNode) cut.parentNode.removeChild(cut); nextCut(); }, 320);
    }
    cut.addEventListener('click', end);
    document.body.appendChild(cut);
    setTimeout(end, 2400);
  }

  /* ---------- document pages: reading end + section challenges ---------- */
  function initDocPage() {
    var stem = location.pathname.split('/').pop().replace('.html', '');
    Object.keys(M.docs).forEach(function (k) { if (M.docs[k].stem === stem) pageDocKey = k; });
    if (!pageDocKey) return;
    var d = M.docs[pageDocKey];
    var timer = null;

    function checkEnd() {
      if (S.end[pageDocKey] || d.shell) return;
      var main = document.querySelector('.main-content');
      if (!main) return;
      if (main.getBoundingClientRect().bottom - window.innerHeight < 240) { S.end[pageDocKey] = 1; saveState(); }
    }
    window.addEventListener('scroll', function () {
      clearTimeout(timer);
      timer = setTimeout(function () { checkEnd(); refresh(); }, 900);  // after the page's own 500 ms save
    }, { passive: true });

    if (d.quiz) {
      fetch(ROOT + 'rpg/quiz/' + pageDocKey + '.json').then(function (r) { return r.json(); }).then(function (bank) {
        renderQuizzes(bank);
        if (location.hash.indexOf('#rpgq-') === 0) {
          var el = document.getElementById(location.hash.slice(1));
          if (el) setTimeout(function () { el.scrollIntoView({ behavior: 'smooth', block: 'start' }); }, 500);
        }
      }).catch(function (e) { console.warn('[rpg] question bank failed to load', e); });
    }
  }

  function renderQuizzes(bank) {
    var bySec = {};
    (bank.questions || []).forEach(function (q) { (bySec[q.section] = bySec[q.section] || []).push(q); });
    Object.keys(bySec).forEach(function (sid) {
      var section = document.getElementById(sid);
      if (!section) return;
      var block = h('div', { class: 'rpg-quiz', id: 'rpgq-' + sid });
      section.appendChild(block);
      drawQuiz(block, sid, bySec[sid], bank);
    });
  }

  function drawQuiz(block, sid, questions, bank) {
    clear(block);
    var rec = (S.quiz[pageDocKey] || {})[sid];
    var passed = rec && rec.total && rec.best / rec.total >= PASS;
    var answers = {};
    var status = h('span', { class: 'rpg-quiz-best' + (passed ? ' is-pass' : ''), text: rec ? (passed ? '已通過　' : '') + '最佳 ' + rec.best + ' / ' + rec.total : '尚未挑戰' });
    var result = h('p', { class: 'rpg-quiz-result', 'aria-live': 'polite' });
    var list = h('ol', { class: 'rpg-quiz-list' });
    var items = [];

    questions.forEach(function (q, qi) {
      var opts = h('div', { class: 'rpg-quiz-opts', role: 'radiogroup', 'aria-label': '第 ' + (qi + 1) + ' 題選項' });
      var buttons = {};
      Object.keys(q.options).forEach(function (letter) {
        var b = h('button', { type: 'button', class: 'rpg-opt', role: 'radio', 'aria-checked': 'false', onclick: function () {
          if (block.classList.contains('is-marked')) return;
          answers[qi] = letter;
          Object.keys(buttons).forEach(function (l) {
            buttons[l].classList.toggle('is-picked', l === letter);
            buttons[l].setAttribute('aria-checked', l === letter ? 'true' : 'false');
          });
        } }, [h('b', { text: letter }), h('span', { text: q.options[letter] })]);
        buttons[letter] = b; opts.appendChild(b);
      });
      var exp = h('div', { class: 'rpg-quiz-exp', hidden: true }, [
        h('p', { text: q.explanation || '' }),
        q.reference ? h('small', { text: '出處：' + q.reference }) : null
      ]);
      items.push({ q: q, buttons: buttons, exp: exp });
      list.appendChild(h('li', {}, [h('p', { class: 'rpg-quiz-q', text: q.question }), opts, exp]));
    });

    var submit = h('button', { class: 'rpg-btn', type: 'button', text: '交卷', onclick: function () {
      if (block.classList.contains('is-marked')) { drawQuiz(block, sid, questions, bank); return; }
      if (Object.keys(answers).length < questions.length) { result.textContent = '還有 ' + (questions.length - Object.keys(answers).length) + ' 題沒作答。'; return; }
      var score = 0, last = [];
      items.forEach(function (it, i) {
        var ok = answers[i] === it.q.correct;
        last.push(ok ? 1 : 0); if (ok) score++;
        Object.keys(it.buttons).forEach(function (l) {
          it.buttons[l].disabled = true;
          if (l === it.q.correct) it.buttons[l].classList.add('is-right');
          else if (l === answers[i]) it.buttons[l].classList.add('is-wrong');
        });
        it.exp.hidden = false;
      });
      block.classList.add('is-marked');
      var ok = score / questions.length >= PASS;
      result.textContent = '答對 ' + score + ' / ' + questions.length + (ok ? '，通過！' : '，未達 80%，看完解析可以再挑戰一次。');
      result.className = 'rpg-quiz-result ' + (ok ? 'is-pass' : 'is-fail');
      submit.textContent = '再挑戰一次';

      var dq = S.quiz[pageDocKey] = S.quiz[pageDocKey] || {};
      var old = dq[sid];
      dq[sid] = { best: Math.max(score, old ? old.best : 0), total: questions.length, tries: (old ? old.tries : 0) + 1, last: last, ts: Date.now() };
      saveState();
      status.textContent = (dq[sid].best / dq[sid].total >= PASS ? '已通過　' : '') + '最佳 ' + dq[sid].best + ' / ' + dq[sid].total;
      status.classList.toggle('is-pass', dq[sid].best / dq[sid].total >= PASS);
      recordQuizResult(bank);
      refresh();
    } });

    block.appendChild(h('div', { class: 'rpg-quiz-head' }, [
      h('span', { class: 'rpg-tag', text: 'CHALLENGE' }), h('h3', { text: '章節挑戰' }), status
    ]));
    block.appendChild(h('p', { class: 'rpg-quiz-lead', text: '共 ' + questions.length + ' 題單選，答對 80% 過關。可以重複挑戰，只記最佳成績。' }));
    block.appendChild(list);
    block.appendChild(h('div', { class: 'rpg-quiz-foot' }, [submit, result]));
  }

  /* Once every section of a document has been attempted, mirror the best
     scores into gmp-quiz-results so Learning Path / Quiz Tracker show it. */
  function recordQuizResult(bank) {
    var d = M.docs[pageDocKey], dq = S.quiz[pageDocKey] || {};
    var secs = Object.keys(d.quiz);
    if (!secs.every(function (s) { return dq[s]; })) return;
    var score = 0, total = 0, qs = [];
    secs.forEach(function (s) {
      score += dq[s].best; total += dq[s].total;
      var sec = d.top.filter(function (t) { return t.id === s; })[0];
      qs.push({ q: 'Section ' + (sec ? sec.num + ' ' + sec.en : s), type: 'mcq', topic: sec ? sec.zh : s, score: dq[s].best, max: dq[s].total });
    });
    var now = new Date();
    var rec = {
      doc_key: pageDocKey, title: bank.title || d.title, date: dayKey(now), score: score, total: total,
      duration_min: null, questions: qs, recorded_at: now.toISOString(), source: 'inpage'
    };
    var all = lsJSON(QUIZ_KEY, []);
    if (!Array.isArray(all)) all = [];
    all = all.filter(function (r) { return !(r && r.source === 'inpage' && r.doc_key === pageDocKey); });
    all.unshift(rec);
    lsSet(QUIZ_KEY, JSON.stringify(all));
  }

  /* ---------- character page ---------- */
  var cardFilter = 'ALL';
  function renderCharacter() {
    var mount = document.getElementById('rpg-character');
    if (!mount) return;
    clear(mount);
    if (!S.profile) {
      mount.appendChild(h('div', { class: 'rpg-panel rpg-empty' }, [
        h('h2', { text: '還沒有角色' }),
        h('p', { text: '建立角色後，這裡會顯示你的等級、夥伴、稱號和文件卡圖鑑。' }),
        h('button', { class: 'rpg-btn', type: 'button', onclick: openOnboarding, text: '建立角色' })
      ]));
      return;
    }
    var c = G.classes[S.profile.cls], dep = c.dep, streak = liveStreak();

    /* hero */
    mount.appendChild(h('section', { class: 'rpg-hero', style: '--c:' + dep.color }, [
      h('img', { class: 'rpg-hero-art', src: classImg(S.profile.cls), alt: CLASS_META[dep.id].job }),
      h('div', { class: 'rpg-hero-info' }, [
        h('span', { class: 'rpg-tag', text: RANKS[c.rank].en.toUpperCase() }),
        h('h1', {}, [avatarEl('lg'), h('span', { text: S.profile.nick })]),
        h('p', { class: 'rpg-hero-job', text: RANKS[c.rank].zh + CLASS_META[dep.id].job + '　' + dep.nameZh + (bestTitle() ? '　｜　' + bestTitle() : '') }),
        h('div', { class: 'rpg-stats' }, [
          stat('Lv ' + G.level, '等級'), stat(String(G.xp), '經驗值'), stat(String(streak), '連續天數'),
          stat(G.cards + ' / ' + Object.keys(G.docs).filter(function (k) { return !G.docs[k].doc.shell; }).length, '文件卡')
        ]),
        h('div', { class: 'rpg-hero-xp' }, [xpBar(), h('small', { text: '距離 Lv ' + (G.level + 1) + ' 還差 ' + (G.hi - G.xp) + ' XP' })]),
        h('button', { class: 'rpg-btn rpg-btn-ghost', type: 'button', onclick: openOnboarding, text: '編輯角色／轉職' })
      ])
    ]));

    /* pet */
    var petPanel = h('section', { class: 'rpg-panel rpg-petpanel' }, [h('h2', { text: '夥伴' })]);
    if (S.pet) {
      var line = PETS[S.pet.line];
      petPanel.appendChild(h('div', { class: 'rpg-pet-now' }, [
        h('img', { class: 'rpg-idle', src: petImg(S.pet.line, G.petStage), alt: line.stages[G.petStage - 1] }),
        h('div', {}, [
          h('b', { text: line.stages[G.petStage - 1] }),
          h('p', { text: G.petStage >= 3 ? '已經是最終型態。' : '下一次進化：任一職業升到「' + RANKS[G.petStage].zh + '」階級，進化為' + line.stages[G.petStage] + '。' })
        ])
      ]));
    } else {
      petPanel.appendChild(h('div', { class: 'rpg-pet-now' }, [
        h('img', { class: 'rpg-wobble', src: eggImg(), alt: '蛋' }),
        h('div', {}, [h('b', { text: '還沒孵化' }), h('p', { text: '讀完任何一節，蛋就會孵化。' })])
      ]));
    }
    mount.appendChild(petPanel);

    /* main line */
    var main = h('section', { class: 'rpg-panel' }, [h('h2', { text: '主線：' + dep.nameZh })]);
    c.tiers.forEach(function (t, i) {
      var rows = h('ul', { class: 'rpg-docrows' });
      t.tier.docs.forEach(function (x) {
        var d = M.docs[x.key], st = G.docs[x.key];
        var state, cls = '';
        if (!d || d.shell) { state = '內容準備中'; cls = 'is-na'; }
        else if (st.cleared) { state = '通關'; cls = 'is-done'; }
        else if (st.quizSecs.length && st.readAll) state = '挑戰 ' + st.passed + ' / ' + st.quizSecs.length;
        else state = st.started ? '閱讀 ' + st.read + ' / ' + st.total : '未開始';
        rows.appendChild(h('li', { class: cls }, [
          h('span', { class: 'rpg-chip' + (x.required ? ' is-req' : ''), text: x.required ? '必讀' : '選讀' }),
          d ? h('a', { href: ROOT + d.file, text: d.titleZh || d.title }) : h('span', { text: x.key }),
          d && d.quiz ? h('span', { class: 'rpg-chip is-quiz', text: '有挑戰' }) : null,
          h('span', { class: 'rpg-docstate', text: state })
        ]));
      });
      main.appendChild(h('details', { class: 'rpg-tier' + (t.done ? ' is-done' : ''), open: i === Math.min(c.rank, c.tiers.length - 1) }, [
        h('summary', {}, [
          h('b', { text: t.tier.labelZh + '　' + t.tier.label }),
          h('span', { text: (t.anyOf ? '任選 ' : '必讀 ') + t.got + ' / ' + t.need + (t.done ? '　完成' : '') })
        ]), rows
      ]));
    });
    mount.appendChild(main);

    /* titles */
    var titles = h('section', { class: 'rpg-panel' }, [h('h2', { text: '稱號' })]);
    var tl = h('ul', { class: 'rpg-titles' });
    G.titles.forEach(function (t) {
      if (!t.n) return;
      tl.appendChild(h('li', { class: t.lv ? 'is-on' : '', style: '--c:' + t.color }, [
        h('b', { text: t.zh + (t.lv === 2 ? '大師' : '修習者') }),
        h('span', { text: t.got + ' / ' + t.n + ' 份通關' + (t.lv === 0 ? '（' + Math.min(5, t.n) + ' 份取得）' : t.lv === 1 ? '（全部通關升為大師）' : '') })
      ]));
    });
    titles.appendChild(tl);
    mount.appendChild(titles);

    /* collection */
    var groups = ['ALL'].concat(Object.keys(GROUP_LABEL));
    var filt = h('div', { class: 'rpg-filter', role: 'tablist' });
    groups.forEach(function (g) {
      filt.appendChild(h('button', { type: 'button', class: cardFilter === g ? 'is-on' : '', text: g === 'ALL' ? '全部' : GROUP_LABEL[g],
        onclick: function () { cardFilter = g; renderCharacter(); } }));
    });
    var grid = h('div', { class: 'rpg-cards' });
    var keys = Object.keys(G.docs).filter(function (k) { var d = G.docs[k].doc; return !d.shell && (cardFilter === 'ALL' || d.group === cardFilter); });
    keys.sort(function (a, b) { return (G.docs[b].card ? 1 : 0) - (G.docs[a].card ? 1 : 0) || a.localeCompare(b); });
    keys.forEach(function (k) { grid.appendChild(cardEl(G.docs[k], !G.docs[k].card)); });
    mount.appendChild(h('section', { class: 'rpg-panel' }, [
      h('h2', { text: '文件卡圖鑑　' + keys.filter(function (k) { return G.docs[k].card; }).length + ' / ' + keys.length }),
      h('p', { class: 'rpg-note', text: '讀完一份文件得到文件卡；有章節挑戰的文件全部過關後，卡片會覺醒。稀有度依文件的章節數決定。' }),
      filt, grid
    ]));

    /* other classes + reset */
    var others = h('ul', { class: 'rpg-classes' });
    DEPTS.forEach(function (d2) {
      var r = G.classes[d2.id].rank;
      others.appendChild(h('li', { class: d2.id === dep.id ? 'is-on' : '', style: '--c:' + d2.color }, [
        h('b', { text: CLASS_META[d2.id].job }), h('span', { text: d2.nameZh }), h('small', { text: RANKS[r].zh })
      ]));
    });
    mount.appendChild(h('section', { class: 'rpg-panel' }, [
      h('h2', { text: '各職業階級' }), others,
      h('button', { class: 'rpg-link-danger', type: 'button', text: '清除角色資料（不影響閱讀紀錄與測驗紀錄）', onclick: function () {
        var m = modal([
          h('h2', { text: '清除角色資料？' }),
          h('p', { class: 'rpg-modal-lead', text: '會清掉暱稱、職業、夥伴、章節挑戰成績和連續天數，無法復原。閱讀進度和 Quiz Tracker 的紀錄會保留。' }),
          h('button', { class: 'rpg-btn rpg-btn-danger', type: 'button', text: '清除', onclick: function () { lsDel(STATE_KEY); S = loadState(); m.close(); refresh(true); } })
        ]);
      } })
    ]));
  }
  function stat(v, l) { return h('div', { class: 'rpg-stat' }, [h('b', { text: v }), h('span', { text: l })]); }

  function renderAll() { renderBar(); renderQuest(); renderCharacter(); }

  /* ---------- boot ---------- */
  function loadScript(src) {
    return new Promise(function (res, rej) {
      var s = document.createElement('script');
      s.src = src; s.onload = res; s.onerror = rej;
      document.head.appendChild(s);
    });
  }
  function boot() {
    if (!document.querySelector('link[data-rpg-css]')) {
      document.head.appendChild(h('link', { rel: 'stylesheet', href: ROOT + 'rpg/rpg.css', 'data-rpg-css': '1' }));
    }
    var needData = typeof departments === 'undefined';
    Promise.all([
      fetch(ROOT + 'rpg/manifest.json').then(function (r) { return r.json(); }),
      needData ? loadScript(ROOT + 'gmp-curriculum-data.js') : null
    ]).then(function (res) {
      M = res[0];
      DEPTS = departments;            // global bindings from gmp-curriculum-data.js
      CLUSTERS = topicClusters;
      S = loadState();
      if (S.profile && !deptById(S.profile.cls)) S.profile.cls = DEPTS[0].id;
      refresh(!S.seen);
      initDocPage();
      window.addEventListener('storage', function (e) {
        if (e.key && (e.key === STATE_KEY || e.key.indexOf('sgk_progress_') === 0)) { S = loadState(); refresh(); }
      });
      window.addEventListener('pageshow', function (e) { if (e.persisted) { S = loadState(); refresh(); } });
    }).catch(function (e) { console.warn('[rpg] failed to start', e); });
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', boot); else boot();
})();
