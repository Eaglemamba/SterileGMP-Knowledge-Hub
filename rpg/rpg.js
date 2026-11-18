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

  /* ---------- language: 'zh' (default) or 'en'. Picked on the invite, the prologue, or the character page;
     switching reloads the page, so every T(zh, en) below is evaluated once with the right language. ---------- */
  var LANG_KEY = 'sgk_rpg_lang';
  var LANG = lsGet(LANG_KEY) === 'en' ? 'en' : 'zh';
  var EN = LANG === 'en';
  function T(zh, en) { return EN ? en : zh; }
  function setLang(l) { lsSet(LANG_KEY, l === 'en' ? 'en' : 'zh'); }
  var LIST = T('、', ', '), SEP = T('　', ' · ');
  function langSwitch() {
    if (document.getElementById('rpg-lang')) return;
    var b = document.createElement('button');
    b.id = 'rpg-lang'; b.type = 'button';
    b.textContent = EN ? '中文' : 'EN';
    b.title = EN ? '切換為繁體中文' : 'Switch to English';
    b.setAttribute('aria-label', b.title);
    b.style.cssText = 'position:fixed;top:12px;right:12px;z-index:980;min-width:44px;padding:6px 12px;border-radius:999px;border:1px solid rgba(15,23,42,.18);background:rgba(255,255,255,.92);color:#0f172a;font:700 13px/1.2 system-ui,-apple-system,"Noto Sans TC",sans-serif;box-shadow:0 2px 8px rgba(15,23,42,.12);cursor:pointer;backdrop-filter:blur(6px)';
    if (window.innerWidth < 640) b.style.cssText += ';position:absolute;top:4px;right:8px;min-width:0;padding:3px 10px;font-size:12px';
    b.onclick = function () { setLang(EN ? 'zh' : 'en'); location.reload(); };
    document.body.appendChild(b);
  }
  function L(o) { return o ? (EN && o.en ? o.en : o.zh) : ''; }                // {zh, en} records: RANKS, ZONES, ...
  function dName(d) { return d ? (EN ? d.name : d.nameZh || d.name) : ''; }        // curriculum departments
  function docT(d) { return d ? (EN ? d.title : d.titleZh || d.title) : ''; }       // manifest docs
  function tierL(t) { return t ? (EN ? t.label : t.labelZh || t.label) : ''; }      // curriculum tiers

  /* ---------- on/off switch ---------- */
  try {
    var flag = new URLSearchParams(location.search).get('rpg');
    if (flag === '1') lsSet(FLAG_KEY, '1');
    if (flag === '0') lsSet(FLAG_KEY, '0');
  } catch (e) {}
  var stored = lsGet(FLAG_KEY);
  if (!(stored === '1' || (DEFAULT_ON && stored !== '0'))) {
    // Off: the dashboard still offers a one-click way in (no rpg.css loaded, so styles are inline).
    var invite = function () {
      var mount = document.getElementById('rpg-quest');
      if (!mount || mount.firstChild) return;
      var box = document.createElement('div');
      box.style.cssText = 'display:flex;flex-wrap:wrap;align-items:center;gap:12px 16px;margin:12px 0;padding:14px 18px;border:2px solid #14151a;border-radius:12px;box-shadow:4px 4px 0 #14151a;font-size:.92rem;line-height:1.6;color:#14151a;background:#fff';
      var tag = document.createElement('span');
      tag.textContent = 'ADVENTURE';
      tag.style.cssText = 'font-size:11px;font-weight:800;font-style:italic;letter-spacing:.14em;background:#ffd23f;padding:2px 12px 2px 10px;clip-path:polygon(0 0,100% 0,calc(100% - 8px) 100%,0 100%)';
      box.appendChild(tag);
      var txt = document.createElement('span');
      txt.style.flex = '1 1 240px';
      txt.textContent = stored === '0' ? T('冒險模式已關閉。', 'Adventure mode is off.') : T('想把閱讀變成闖關？冒險模式會幫你選職業、排路線，讀完章節打小怪、通關打魔王。成績照常計算。', 'Want to turn reading into a quest? Adventure mode gives you a class and a route: finish a section to fight a minion, clear a zone to face its boss. Scores count as usual.');
      var btn = document.createElement('button');
      btn.type = 'button';
      btn.textContent = T('開啟冒險模式', 'Start adventure mode');
      btn.style.cssText = 'padding:8px 18px;border-radius:8px;border:2px solid #14151a;box-shadow:3px 3px 0 #14151a;background:#ff3d81;color:#fff;font-weight:700;font-size:14px;cursor:pointer';
      btn.onclick = function () { lsSet(FLAG_KEY, '1'); location.reload(); };
      box.appendChild(txt); box.appendChild(btn); mount.appendChild(box);
      mount.style.cssText = 'max-width:72rem;margin:20px auto 0;padding:0 ' + (innerWidth < 640 ? 16 : 24) + 'px';   // same frame as the quest card (rpg.css is not loaded here)
      langSwitch();
    };
    if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', invite); else invite();
    return;
  }

  /* ---------- static game data ---------- */
  var CLASS_META = {
    qa: { job: T('守護者', 'Guardian') }, qc: { job: T('鑑定師', 'Assessor') }, production: { job: T('充填師', 'Filler') },
    engineering: { job: T('機工', 'Machinist') }, ra: { job: T('書記官', 'Scribe') }, warehouse: { job: T('補給官', 'Quartermaster') },
    techservice: { job: T('調律師', 'Tuner') }, bt: { job: T('資料術士', 'Datamancer') }
  };
  var RANKS = [
    { zh: '見習', en: 'Trainee' }, { zh: '初階', en: 'Foundation' },
    { zh: '中堅', en: 'Core' }, { zh: '專家', en: 'Advanced' }
  ];
  var PETS = {
    a: { color: '#38bdf8', voice: T('咕嚕', 'Bloop'), stages: T(['水滴精靈', '霧氣精靈', '蒸氣小龍', '雲海龍王'], ['Droplet Sprite', 'Mist Sprite', 'Steam Drake', 'Cloudsea Dragon']) },
    b: { color: '#34d399', voice: T('呼呼', 'Hoo-hoo'), stages: T(['雛梟', '風梟', '層流大梟', '無塵天梟'], ['Owlet', 'Breeze Owl', 'Laminar Owl', 'Cleanroom Sky Owl']) },
    c: { color: '#a78bfa', voice: T('啵', 'Plink'), stages: T(['玻瓶史萊姆', '晶體獸', '琉璃守衛獸', '琉璃聖獸'], ['Vial Slime', 'Crystal Beast', 'Glass Warden', 'Glass Sentinel']) }
  };
  var CLUSTER_ZH = T(['無菌製程', '滅菌過濾', '容器密封', '品質系統', '環境監測', '檢驗方法', '廠房設備', '先進療法', '法規遵循', '新興技術'],
    ['Aseptic Processing', 'Sterile Filtration', 'Container Closure', 'Quality Systems', 'Environmental Monitoring', 'Test Methods', 'Facilities & Equipment', 'Advanced Therapies', 'Regulatory Compliance', 'Emerging Technologies']);
  var RARITY = ['N', 'R', 'SR', 'SSR'];
  // One crafting material per topic cluster ('c<i>'), plus 魔王結晶 ('boss') from each boss's first defeat.
  var MATS = T(['無菌結晶', '濾膜碎片', '硼矽玻片', '簽核印記', '培養皿之塵', '試劑滴', '不鏽鋼鉚釘', '細胞微光', '法典書頁', '電路晶片'],
    ['Aseptic Crystal', 'Membrane Shard', 'Borosilicate Chip', 'Approval Seal', 'Petri Dish Dust', 'Reagent Drop', 'Steel Rivet', 'Cell Glimmer', 'Codex Page', 'Circuit Chip']);
  var BOSS_MAT = T('魔王結晶', 'Boss Crystal'), CONVERT = 3;          // workshop: CONVERT of one material -> 1 of another (not boss crystals)
  var XP_REVIEW = 15, REVIEW_GAP = 7 * 24 * 3600 * 1000;
  /* Equipment, crafted once each from materials, one item per slot. Effects help you
     stay in a fight or find the source again; none of them changes how a fight is
     scored (80 % right is still the pass mark). Art: rpg/assets/gear-<id>.webp. */
  var SLOTS = { head: T('頭部', 'Head'), body: T('身體', 'Body'), hand: T('手', 'Hands'), charm: T('飾品', 'Charm'), pet: T('夥伴', 'Companion'), frame: T('外框', 'Frame') };
  var GEAR = [
    { id: 'gloves', slot: 'hand', zh: T('無菌手套', 'Sterile Gloves'), eff: T('每場戰鬥第一次答錯不扣心（仍算答錯）', 'The first wrong answer in each fight costs no heart (it still counts as wrong)'), need: { c0: 2, c6: 1 } },
    { id: 'goggles', slot: 'head', zh: T('防霧護目鏡', 'Anti-Fog Goggles'), eff: T('作答前先顯示這題的出處章節', 'Shows the source section of each question before you answer'), need: { c2: 2, c5: 1 } },
    { id: 'cape', slot: 'body', zh: T('層流披風', 'Laminar Cape'), eff: T('魔王戰多 1 顆心：更容易撐完 10 題，多看新題、拿撐完素材', '+1 heart in boss fights: easier to last all 10 questions, see new ones and earn the finish material'), need: { c1: 2, c0: 1, c4: 1 } },
    { id: 'bookmark', slot: 'charm', zh: T('法典書籤', 'Codex Bookmark'), eff: T('答錯時出現「回原文」，直接跳到那一節', 'After a wrong answer, a "Back to source" link jumps straight to that section'), need: { c8: 2, c3: 1 } },
    { id: 'amulet', slot: 'charm', zh: T('培養皿護符', 'Petri Dish Amulet'), eff: T('複習突擊答對多 +5 XP', '+5 XP for each right answer in a review ambush'), need: { c4: 2, c7: 1 } },
    { id: 'watch', slot: 'charm', zh: T('晶片懷錶', 'Chip Pocket Watch'), eff: T('複習突擊提早到 5 天後出現', 'Review ambushes come back after 5 days instead of 7'), need: { c9: 2, c6: 1 } },
    { id: 'ribbon', slot: 'pet', zh: T('夥伴領巾', 'Companion Scarf'), eff: T('夥伴戴上領巾，閱讀時會多說幾句', 'Your companion wears a scarf and chats a little more while you read'), need: { c7: 2, c2: 1 } },
    { id: 'gemframe', slot: 'frame', zh: T('結晶外框', 'Crystal Frame'), eff: T('頭像換成會發光的結晶外框', 'Your portrait gets a glowing crystal frame'), need: { c0: 3, boss: 1 } },
    { id: 'armor', slot: 'body', zh: T('無塵聖甲', 'Cleanroom Armor'), eff: T('魔王戰多 2 顆心，小怪戰多 1 顆心：更容易撐完全場，多拿新題 XP 和撐完素材', '+2 hearts in boss fights, +1 in minion fights: easier to finish, so more new-question XP and finish materials'), need: { boss: 2, c1: 2, c6: 2 } }
  ];
  function gearById(id) { for (var i = 0; i < GEAR.length; i++) if (GEAR[i].id === id) return GEAR[i]; return null; }
  function wearing(id) { var g = gearById(id); return !!(g && S && S.gear && S.gear.on[g.slot] === id); }
  function matName(k) { return k === 'boss' ? BOSS_MAT : (MATS[+k.slice(1)] || k); }
  function reviewGap() { return wearing('watch') ? 5 * 24 * 3600 * 1000 : REVIEW_GAP; }
  function reviewXp() { return XP_REVIEW + (wearing('amulet') ? 5 : 0); }
  /* Second specialty. Finishing every required document (必讀) of another department teaches
     that department's skill. Each boss is weak to some departments' skills: bringing one into the
     fight is a 弱點擊破 (+1 heart, +1 shield, a heavier hit, and a one-time bonus on the first such
     win). Like gear, it never changes scoring — 80 % right is still the pass mark. */
  /* qa/ra also counter a zone-0/1 boss so every class has at least one counter on the main path. */
  /* 屬性相剋 for status effects. Each skill has a status specialty; each boss / elite resists or is
     weak to some statuses. Hearts and shields only, never the score. Mob and guardian fights use the
     learner's main skill against a plain foe. */
  var STATUS_SKILL = {
    qc: { psn: 1, zh: T('毒專長：答對 1 題就讓對手中毒', 'Poison specialty: 1 right answer poisons the foe') },
    bt: { psn: 1, zh: T('毒專長：答對 1 題就讓對手中毒', 'Poison specialty: 1 right answer poisons the foe') },
    engineering: { par: 1, zh: T('麻痺專長：連對 2 題就麻痺，動不了的機率更高', 'Paralysis specialty: 2 right in a row paralyzes, with a higher chance the foe cannot move') },
    techservice: { par: 1, zh: T('麻痺專長：連對 2 題就麻痺，動不了的機率更高', 'Paralysis specialty: 2 right in a row paralyzes, with a higher chance the foe cannot move') },
    production: { slp: 1, zh: T('催眠專長：開場就讓對手睡著，但睡得淺（醒來機率加倍）', 'Sleep specialty: the foe starts the fight asleep, but sleeps lightly (twice the chance to wake)') },
    ra: { slp: 1, zh: T('催眠專長：開場就讓對手睡著，但睡得淺（條文太長，對手讀到打瞌睡）', 'Sleep specialty: the foe starts the fight asleep, but sleeps lightly (the clauses are so long it nods off)') },
    qa: { guard: 1, zh: T('封印護體：你不會中毒；第一次連錯 2 題時改得 1 面護盾', 'Sealed Guard: you cannot be poisoned; your first 2-wrong streak gives you 1 shield instead') },
    warehouse: { aid: 1, zh: T('急救補給：第一次連對 3 題回 1 顆心，解毒時也回 1 顆心', 'First Aid: your first 3-right streak restores 1 heart, and curing poison restores 1 heart') }
  };
  var FOE_TRAIT = {
    z0: { psn: 'immune', par: 'weak', why: T('微粒不是活的，毒對牠無效；靜電一吸就動彈不得', 'particles are not alive, so poison does nothing; static cling pins them in place') },
    z1: { psn: 'resist', slp: 'resist', why: T('生物膜的基質擋住藥劑，毒效減弱；菌群輪班，很難睡著', 'the biofilm matrix blocks agents, weakening poison; the colony works in shifts and hardly sleeps') },
    z2: { psn: 'immune', par: 'resist', why: T('內毒素不是活菌，毒殺不了；耐熱又耐操，不太會麻痺', 'endotoxin is not a living cell, so poison cannot kill it; heat-stable and tough, it rarely freezes up') },
    spore: { psn: 'resist', slp: 'weak', why: T('芽孢殼耐消毒劑，毒效減弱；本來就愛休眠，一睡就很久', 'the spore coat resists disinfectants, weakening poison; it loves dormancy and sleeps long') },
    crack: { par: 'immune', why: T('幽靈沒有實體，麻痺不了', 'a phantom has no body to paralyze') },
    forge: { par: 'weak', why: T('稽核軌跡一開，牠就被釘在原地', 'switch on the audit trail and it is pinned in place') },
    mixup: { psn: 'weak', slp: 'resist', why: T('身分一亂就自己中毒；到處換標籤，睡不著', 'confused identities poison it from inside; too busy swapping labels to sleep') },
    leach: { psn: 'immune', par: 'weak', why: T('牠自己就是化學物質，毒對牠無效；碰到萃取研究就僵住', 'it is a chemical itself, so poison does nothing; an extraction study freezes it') },
    frost: { slp: 'weak', par: 'weak', why: T('低溫讓牠冬眠又凍僵', 'the cold makes it hibernate and go stiff') }
  };
  var TRAIT_ZH = T({ psn: '中毒', par: '麻痺', slp: '睡眠' }, { psn: 'poison', par: 'paralysis', slp: 'sleep' });
  function traitText(target) {
    var t = FOE_TRAIT[target];
    if (!t) return '';
    return ['psn', 'par', 'slp'].filter(function (k) { return t[k]; }).map(function (k) {
      return t[k] === 'immune' ? T('免疫', 'immune to ') + TRAIT_ZH[k] : t[k] === 'weak' ? T('容易', 'weak to ') + TRAIT_ZH[k] : T('抗', 'resists ') + TRAIT_ZH[k];
    }).join(LIST) + T('（' + t.why + '）', ' (' + t.why + ')');
  }
  var WEAK = [
    { production: T('無菌操作與更衣紀律，從源頭擋住落塵', 'aseptic technique and gowning discipline stop fallout at the source'), engineering: T('HVAC 與 HEPA 把微粒抽走', 'HVAC and HEPA filters pull particles away'), warehouse: T('物料進出潔淨區的除污與傳遞，不把微粒帶進來', 'decontaminating and transferring materials into the clean area keeps particles out'),
      qa: T('可見異物檢查與批次放行，有微粒的產品出不了廠', 'visible particle inspection and batch release keep particulate product from leaving the site') },
    { qc: T('微生物鑑定與環境監測，抓出生物膜的蹤跡', 'microbial identification and environmental monitoring track the biofilm down'), techservice: T('清潔確效與 CIP／SIP，刷掉築好的膜', 'cleaning validation and CIP/SIP scrub off the established film'), bt: T('水系統與監測數據的趨勢，提早看見生物膜成形', 'trending water system and monitoring data spots biofilm forming early'),
      ra: T('藥典製藥用水規格與微生物限值，劃清水質紅線', 'pharmacopoeial water specifications and microbial limits draw the red line for water quality') },
    { qa: T('去熱原確效與放行把關，熱原出不了廠', 'depyrogenation validation and release control keep pyrogens from leaving the site'), ra: T('藥典內毒素限值與法規要求，劃清紅線', 'pharmacopoeial endotoxin limits and regulatory requirements draw the red line'),
      qc: T('細菌內毒素試驗與熱原試驗，量出牠藏了多少', 'bacterial endotoxin and pyrogen tests measure how much it hides'), techservice: T('除熱原確效與內毒素指標物挑戰，證明降了 3 log', 'depyrogenation validation with endotoxin indicator challenges proves a 3-log reduction') }
  ];
  var XP_WEAK = 50;
  /* Elite bosses: optional fights about other injectable failure modes (the zone bosses cover what
     gets into the product; these cover where the process breaks). Questions come from every bank
     that covers the topic, whatever the player's class, so classes without zone bosses can fight
     too. They never gate rank-up. src: { key, secs: [section ids], ids: [question ids] } — a doc
     with neither takes its whole bank. Art: rpg/assets/elite-<id>.webp (silhouette until then). */
  var ELITES = [
    { id: 'spore', name: T('孢子騎士', 'Spore Knight'), risk: T('滅菌不足：耐熱芽孢、BI 存活、F0 不夠', 'Inadequate sterilization: heat-resistant spores, surviving BIs, too little F0'),
      fx: { el: T('芽孢系', 'Spore'), skill: T('耐熱芽孢槍', 'Heat-Proof Spore Lance'), c: '#b45309', m: 'fly', g: 'spore', n: 6, size: 26, spin: 1, imp: { dots: 14, tint: 'burn', quake: 1 } },
      src: [{ key: 'TR1' }, { key: 'pda-guide-no1', secs: ['sec10', 'sec11'] }],
      srcText: T('PDA TR1 濕熱滅菌確效、PDA Guide No.1 滅菌與無菌流路', 'PDA TR1 moist heat sterilization validation; PDA Guide No.1 sterilization and sterile fluid paths'),
      weak: { engineering: T('滅菌器設計與熱分布，讓每個冷點都達到 F0', 'sterilizer design and heat distribution bring every cold spot up to F0'), techservice: T('滅菌確效與生物指示劑挑戰，證明孢子活不下來', 'sterilization validation with biological indicator challenges proves spores cannot survive'), qc: T('BI 培養與無菌試驗，抓出漏網的芽孢', 'BI incubation and sterility testing catch spores that slipped through') },
      needTag: 'sporicide', needName: T('殺孢劑', 'sporicide'), needText: T('芽孢殼太硬：75% 酒精和季銨鹽只殺得死營養型細菌，殺不死芽孢。帶一瓶殺孢劑才進得了這場戰鬥', 'The spore coat is too tough: 70-75% alcohol and quats kill vegetative bacteria, not spores. Bring a sporicide to enter this fight'),
      line: T('「121 °C 才 15 分鐘？我的芽孢殼耐得住。」', '"121 °C for just 15 minutes? My spore coat can take it."'), rage: T('「冷點在哪你找得到嗎？我就躲在那裡！」', '"Can you even find the cold spot? That is where I hide!"'), title: T('孢子獵人', 'Spore Hunter') },
    { id: 'crack', name: T('裂隙幽靈', 'Crack Phantom'), risk: T('容器密封失效：微漏、膠塞、軋蓋', 'Container closure failure: micro-leaks, stoppers, crimping'),
      fx: { el: T('裂隙系', 'Breach'), skill: T('微漏穿隙', 'Micro-Leak Seep'), c: '#0ea5e9', m: 'swarm', g: 'ghost', n: 3, size: 40, imp: { mark: 'crack', dots: 10, dc: '#bae6fd', quake: 1 } },
      src: [{ key: 'pda-guide-no1', secs: ['sec6', 'sec7', 'sec9'], ids: [2, 9, 93] }, { key: 'FDA-Aseptic', ids: [13, 15] },
            { key: 'PICS-Annex1', ids: [37] }, { key: 'TR22', ids: [12, 18, 25] }],
      srcText: T('PDA Guide No.1 容器密封與封蓋、Annex 1、FDA 無菌製程、TR22 的密封相關題', 'PDA Guide No.1 container closure and capping, Annex 1, FDA aseptic processing, and the closure questions in TR22'),
      weak: { production: T('加塞與軋蓋的製程管控，每一瓶都蓋好封緊', 'stoppering and crimping process controls seal every vial tight'), qc: T('容器密封完整性測試，找出看不見的微漏', 'container closure integrity testing finds the invisible micro-leaks'), warehouse: T('包材進料檢驗與搬運保護，裂瓶和變形膠塞上不了線', 'incoming inspection and careful handling keep cracked vials and warped stoppers off the line') },
      line: T('「只要一道你看不見的縫，我就進得去。」', '"One gap you cannot see is all I need."'), rage: T('「膠塞歪一點、軋蓋鬆一點，就夠了！」', '"A stopper a bit crooked, a crimp a bit loose, that is enough!"'), title: T('封緘守門人', 'Seal Keeper') },
    { id: 'forge', name: T('竄改魅影', 'Tamper Wraith'), risk: T('資料完整性失效：共用帳號、補登、改數據、關稽核軌跡', 'Data integrity failure: shared accounts, back-dating, altered data, audit trail switched off'),
      fx: { el: T('竄改系', 'Tamper'), skill: T('數據改寫', 'Data Rewrite'), c: '#e11d48', m: 'stream', g: 'bits', n: 12, size: 18, imp: { tint: 'glitch', dots: 10, flash: 1 } },
      src: [{ key: 'TR84', ids: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40] }],
      srcText: T('PDA TR84 資料完整性：ALCOA+、資料 criticality 與 vulnerability、9-Box、稽核軌跡', 'PDA TR84 data integrity: ALCOA+, data criticality and vulnerability, the 9-box, audit trails'),
      weak: { bt: T('個人帳號、權限分級與稽核軌跡設定，每筆修改都留下誰、何時、改了什麼', 'personal accounts, role-based access and audit trail settings record who changed what, and when'), qa: T('ALCOA+ 與批紀錄審查，放行前看過稽核軌跡', 'ALCOA+ and batch record review, with the audit trail checked before release'),
              qc: T('實驗室數據審查，層析圖重積分與重複測試逃不過', 'laboratory data review catches chromatogram reintegration and test-into-compliance') },
      needTag: 'trace', needName: T('追溯工具', 'traceability tool'), needText: T('竄改魅影躲在共用帳號和關掉的稽核軌跡後面：看不出是誰、何時、改了什麼，你連牠在哪都找不到。帶一件能追溯修改的道具才進得了這場戰鬥', 'The Tamper Wraith hides behind shared accounts and a disabled audit trail: with no record of who changed what and when, you cannot even find it. Bring an item that traces changes to enter this fight'),
      line: T('「數字改一下就好，反正沒人看得出來。」', '"Just tweak the number. Nobody will ever notice."'), rage: T('「群組帳號登入，誰改的？你查不到！」', '"Logged in on a group account. Who changed it? You will never know!"'), title: T('數據守誓者', 'Data Oathkeeper') },
    { id: 'mixup', name: T('混淆魔', 'Mix-up Fiend'), risk: T('混淆與錯標：貼錯標籤、混批、清線不徹底、狀態標示不清', 'Mix-ups and mislabeling: wrong labels, mixed batches, incomplete line clearance, unclear status labels'),
      fx: { el: T('混淆系', 'Mix-up'), skill: T('標籤調包', 'Label Swap'), c: '#d946ef', m: 'swarm', g: 'page', n: 6, size: 28, spin: 1, imp: { mark: 'cross', dots: 10, flash: 1 } },
      src: [{ key: 'FDA-21CFR-211', secs: ['sec4'] }, { key: 'FDA-ProcessInspection', ids: [21] }, { key: 'PICS-PE011', ids: [16] },
            { key: 'TR52', ids: [11, 15] }, { key: 'ISPE-Vol3', ids: [7, 18] }, { key: 'ISPE-Vol6', ids: [9, 21, 27] }, { key: 'pda-guide-no1', ids: [75] }],
      srcText: T('21 CFR 211 包裝與標示管制、FDA 無菌製程檢查未貼標容器、PIC/S PE011 與 TR52 的隔離與狀態管制、ISPE Vol.3/Vol.6 混淆與多產品隔離、PDA Guide No.1 清場', '21 CFR 211 packaging and labeling control, unlabeled containers in FDA inspections, segregation and status control in PIC/S PE011 and TR52, mix-ups and multi-product segregation in ISPE Vol.3/Vol.6, line clearance in PDA Guide No.1'),
      weak: { production: T('清場、換線與貼標核對，每一瓶都貼對、每條線都清空', 'line clearance, changeover and label checks: every vial labeled right, every line cleared'), warehouse: T('物料狀態標示與隔離，待驗、合格、退貨各歸其位', 'material status labels and segregation keep quarantined, released and returned goods apart'),
              qa: T('清場覆核、標籤發放與數量核算，放行前最後把關', 'line clearance checks, label issuance and reconciliation as the last gate before release') },
      needTag: 'ident', needName: T('辨識工具', 'identification tool'), needText: T('混淆魔和正確的產品長得一模一樣，光靠肉眼核對分不出來。帶一件能逐一辨識標籤與物料的道具才進得了這場戰鬥', 'The Mix-up Fiend looks exactly like the right product, and a visual check cannot tell them apart. Bring an item that identifies each label and material to enter this fight'),
      line: T('「兩個品項標籤長得一樣，換一下誰會發現？」', '"Two products, two labels that look the same. Who would notice a swap?"'), rage: T('「清場沒做完，上一批的標籤還留在線上！」', '"Line clearance was skipped. Last batch\'s labels are still on the line!"'), title: T('辨識之眼', 'Eye of Identity') },
    { id: 'leach', name: T('溶出妖', 'Leachable Imp'), risk: T('萃取物與溶出物：膠塞、管路、容器的化學物質溶進藥液', 'Extractables and leachables: chemicals from stoppers, tubing and containers migrating into the drug'),
      fx: { el: T('溶出系', 'Leachable'), skill: T('析出毒滴', 'Leaching Drip'), c: '#65a30d', m: 'drop', g: 'drop', n: 4, size: 26, imp: { tint: 'stain', dots: 12, ring: 1 } },
      src: [{ key: 'USP-1663' }, { key: 'USP-1664' }, { key: 'USP-381' }, { key: 'TR66', ids: [2, 10] }, { key: 'TR26', ids: [8] }],
      srcText: T('USP 〈1663〉 萃取物評估、〈1664〉 溶出物評估、〈381〉 彈性體組件，以及 TR66、TR26 的 E&L 題', 'USP <1663> extractables assessment, <1664> leachables assessment, <381> elastomeric components, and the E&L questions in TR66 and TR26'),
      weak: { qc: T('萃取與溶出物的分析篩檢，找出並鑑定溶進來的化合物', 'analytical screening of extractables and leachables finds and identifies migrated compounds'), techservice: T('材料與組件評估，依接觸條件設計萃取研究', 'material and component assessment designs extraction studies around contact conditions'),
              ra: T('安全閾值與毒理評估，判斷溶出量是否可接受', 'safety thresholds and toxicological assessment decide whether leachable levels are acceptable') },
      line: T('「我藏在膠塞和管路裡，跟著藥液一起上架。」', '"I hide in stoppers and tubing, and ship out with the drug."'), rage: T('「接觸越久、溫度越高，我溶得越多！」', '"The longer the contact and the hotter it gets, the more of me leaches out!"'), title: T('溶出鑑識者', 'Leachables Sleuth') },
    { id: 'frost', name: T('溫度巨人', 'Temperature Giant'), risk: T('冷鏈失效：運輸與倉儲的溫度偏離、未確效的保溫箱、沒有溫度紀錄', 'Cold chain failure: temperature excursions in transport and storage, unqualified shippers, no temperature records'),
      fx: { el: T('溫控系', 'Thermal'), skill: T('溫度偏離衝擊', 'Excursion Shock'), c: '#f97316', m: 'cone', g: 'shard', n: 8, size: 22, imp: { tint: 'burn', dots: 12, quake: 1 } },
      src: [{ key: 'TR39', ids: [1, 3, 4, 6, 7, 10, 11, 12, 14, 18] }, { key: 'TR46', ids: [3, 9, 14, 17, 18, 19, 23] },
            { key: 'TR52', ids: [6, 7, 8, 9, 10, 14, 21, 22] }, { key: 'USP-1079', ids: [3, 4, 5] }, { key: 'PICS-PE011', ids: [17, 33, 47, 49, 50] }],
      srcText: T('PDA TR39 溫控運輸確效、TR46 最後一哩與 MKT、TR52 GDP 儲運溫控、USP 〈1079〉 溫度偏離與 mapping、PIC/S PE011 冷藏運輸與倉儲', 'PDA TR39 temperature-controlled transport qualification, TR46 last mile and MKT, TR52 GDP temperature control, USP <1079> excursions and mapping, PIC/S PE011 cold storage and transport'),
      weak: { warehouse: T('冷庫 mapping、收發與退貨管控，偏離當下第一線把關', 'cold room mapping and control of receipt, dispatch and returns catch excursions first-hand'), techservice: T('保溫箱確效與季節挑戰，證明運輸撐得住', 'shipper qualification with seasonal challenges proves the shipment holds up'),
              qa: T('偏離調查與 MKT、穩定性評估，決定產品能不能放行', 'excursion investigation, MKT and stability assessment decide whether the product can be released') },
      needTag: 'cold', needName: T('溫度紀錄工具', 'temperature recording tool'), needText: T('溫度巨人只在運輸途中出沒：沒有全程溫度紀錄，你連牠來過都證明不了。帶一件能記錄或守住運輸溫度的道具才進得了這場戰鬥', 'The Temperature Giant only appears in transit: without a full temperature record you cannot even prove it was there. Bring an item that records or holds the shipping temperature to enter this fight'),
      line: T('「2–8 °C？卡車在大太陽下停兩個小時，看你怎麼辦。」', '"2-8 °C? The truck just sat in the sun for two hours. Now what?"'), rage: T('「沒有溫度紀錄，你證明不了我沒來過！」', '"No temperature record, no proof I was never here!"'), title: T('冷鏈守護者', 'Cold Chain Warden') }
  ];
  /* Special items (道具): crafted once in the workshop, one brought into each boss fight from the
     skill picker. vs: targets ('z<zone>' for zone bosses, elite ids) — against a target the item
     adds shields; tags let a boss demand a kind of item (孢子騎士 needs a sporicide, 竄改魅影 a trace tool,
     混淆魔 an ident tool, 溫度巨人 a cold-chain tool).
     Like gear: never changes scoring. Art: rpg/assets/item-<id>.webp (drawn badge until then). */
  var ITEMS = [
    { id: 'paa', zh: T('過氧乙酸殺孢劑', 'Peracetic Acid Sporicide'), cat: T('殺孢劑', 'Sporicide'), c: '#84cc16', vs: ['spore'], tags: ['sporicide'], shield: 1, need: { c5: 2, c4: 1 },
      use: T('噴灑過氧乙酸，芽孢殼開始崩解', 'A spray of peracetic acid, and the spore coat starts to break down'),
      eff: T('進入孢子騎士戰的通行證，戰鬥中多 1 面護盾。過氧乙酸加過氧化氫，是殺得死芽孢的消毒劑；Annex 1 要求消毒計畫定期輪用殺孢劑。', 'Your pass into the Spore Knight fight, plus 1 shield in battle. Peracetic acid with hydrogen peroxide is a disinfectant that kills spores; Annex 1 expects the disinfection program to include a sporicide used regularly.') },
    { id: 'vhp', zh: T('汽化過氧化氫產生器', 'VHP Generator'), cat: T('殺孢劑', 'Sporicide'), c: '#22d3ee', vs: ['spore'], tags: ['sporicide'], shield: 2, need: { boss: 1, c6: 2, c5: 1 },
      use: T('VHP 灌滿隔離器，芽孢無處可躲', 'VHP fills the isolator, and the spores have nowhere to hide'),
      eff: T('高階殺孢道具，也能進入孢子騎士戰，戰鬥中多 2 面護盾。隔離器和 RABS 的表面除污多半用 VHP，要用生物指示劑證明 6 log 的殺滅。', 'A higher-tier sporicide: also gets you into the Spore Knight fight, with 2 shields in battle. Isolator and RABS surfaces are usually decontaminated with VHP, and biological indicators must show a 6-log kill.') },
    { id: 'cip', zh: T('鹼性 CIP 清潔劑', 'Alkaline CIP Detergent'), cat: T('清潔劑', 'Detergent'), c: '#a78bfa', vs: ['z1'], shield: 1, need: { c5: 2, c6: 1 },
      use: T('熱鹼循環沖洗，剝掉生物膜的基質', 'A hot caustic cycle strips away the biofilm matrix'),
      eff: T('生物膜王戰多 1 面護盾。生物膜要先用清潔劑和流速剝掉基質，消毒劑才碰得到裡面的菌：先清潔，再消毒。', '+1 shield against the Biofilm King. Detergent and flow must strip the matrix before a disinfectant can reach the cells inside: clean first, then disinfect.') },
    { id: 'counter', zh: T('手持粒子計數器', 'Handheld Particle Counter'), cat: T('監測儀器', 'Monitoring instrument'), c: '#94a3b8', vs: ['z0'], shield: 1, need: { c9: 1, c0: 2 },
      use: T('粒子計數器鎖定落塵來源', 'The particle counter locks onto the source of fallout'),
      eff: T('微粒魔戰多 1 面護盾。≥0.5 µm 與 ≥5 µm 分開計數，A 級區要連續監測，才抓得到短暫的微粒爆量。', '+1 shield against the Particle Fiend. Count ≥0.5 µm and ≥5 µm separately, and monitor Grade A continuously, or short particle bursts will be missed.') },
    { id: 'oven', zh: T('去熱原隧道烘箱', 'Depyrogenation Tunnel'), cat: T('設備', 'Equipment'), c: '#f97316', vs: ['z2'], shield: 1, need: { c6: 2, c2: 1 },
      use: T('250 °C 乾熱，內毒素降 3 個 log', '250 °C dry heat cuts endotoxin by 3 logs'),
      eff: T('內毒素龍戰多 1 面護盾。濕熱滅菌殺得死菌，卻去不掉內毒素；乾熱去熱原要證明內毒素至少降低 3 log。', '+1 shield against the Endotoxin Dragon. Moist heat kills bacteria but does not remove endotoxin; dry-heat depyrogenation must show at least a 3-log endotoxin reduction.') },
    { id: 'ccit', zh: T('真空衰減測漏儀', 'Vacuum Decay Leak Tester'), cat: T('檢測儀器', 'Test instrument'), c: '#0ea5e9', vs: ['crack'], shield: 1, need: { c2: 2, c9: 1 },
      use: T('真空衰減測試，微漏無所遁形', 'A vacuum decay test leaves micro-leaks nowhere to hide'),
      eff: T('裂隙幽靈戰多 1 面護盾。真空衰減是確定性的 CCI 測試方法（USP <1207>），比染色入侵法更靈敏、可重複。', '+1 shield against the Crack Phantom. Vacuum decay is a deterministic CCI test method (USP <1207>), more sensitive and repeatable than dye ingress.') },
    { id: 'atr', zh: T('稽核軌跡審查工具', 'Audit Trail Review Tool'), cat: T('追溯工具', 'Traceability tool'), c: '#f43f5e', vs: ['forge'], tags: ['trace'], shield: 1, need: { c9: 2, c3: 1 },
      use: T('展開稽核軌跡，每一筆修改都現形', 'Open the audit trail and every change shows itself'),
      eff: T('進入竄改魅影戰的通行證，戰鬥中多 1 面護盾。稽核軌跡要記下誰、何時、改了什麼、為什麼改，而且要依資料 criticality 定期審查，不是開了就算數。', 'Your pass into the Tamper Wraith fight, plus 1 shield in battle. An audit trail must record who changed what, when and why, and be reviewed on a schedule set by data criticality; switching it on is not enough.') },
    { id: 'uam', zh: T('個人帳號權限矩陣', 'User Access Matrix'), cat: T('追溯工具', 'Traceability tool'), c: '#14b8a6', vs: ['forge'], tags: ['trace'], shield: 2, need: { boss: 1, c9: 1, c3: 2 },
      use: T('收回群組帳號，每個人只能用自己的身分', 'Shared accounts revoked: everyone works under their own identity'),
      eff: T('高階追溯道具，也能進入竄改魅影戰，戰鬥中多 2 面護盾。共用帳號讓稽核軌跡失去意義；一人一帳號、權限分級、操作員不能改 recipe 和警報範圍。', 'A higher-tier traceability tool: also gets you into the Tamper Wraith fight, with 2 shields in battle. Shared accounts make an audit trail meaningless; one person per account, role-based access, and operators cannot change recipes or alarm limits.') },
    { id: 'scan', zh: T('條碼核對掃描器', 'Barcode Verification Scanner'), cat: T('辨識工具', 'Identification tool'), c: '#d946ef', vs: ['mixup'], tags: ['ident'], shield: 1, need: { c3: 2, c2: 1 },
      use: T('逐一掃碼核對，錯標的那一瓶當場現形', 'Scan every code and the mislabeled vial is caught on the spot'),
      eff: T('進入混淆魔戰的通行證，戰鬥中多 1 面護盾。標籤和物料在每個交接點核對身分；標籤的發放、使用、退回要做數量核算，對不上就要調查。', 'Your pass into the Mix-up Fiend fight, plus 1 shield in battle. Verify the identity of labels and materials at every handover; reconcile labels issued, used and returned, and investigate any discrepancy.') },
    { id: 'vision', zh: T('線上視覺檢測系統', 'Inline Vision System'), cat: T('辨識工具', 'Identification tool'), c: '#a855f7', vs: ['mixup'], tags: ['ident'], shield: 2, need: { boss: 1, c9: 2, c3: 1 },
      use: T('相機逐瓶比對標籤、批號與效期', 'Cameras check the label, lot number and expiry on every vial'),
      eff: T('高階辨識道具，也能進入混淆魔戰，戰鬥中多 2 面護盾。電子或自動化的標籤檢查設備本身也要驗證運作正常；換批前仍要清場並覆核。', 'A higher-tier identification tool: also gets you into the Mix-up Fiend fight, with 2 shields in battle. Electronic or automated label checkers must themselves be verified to work; line clearance and a second check are still required between batches.') },
    { id: 'elscreen', zh: T('萃取物篩檢分析組', 'Extractables Screening Kit'), cat: T('檢測儀器', 'Test instrument'), c: '#65a30d', vs: ['leach'], shield: 1, need: { c5: 2, c2: 1 },
      use: T('篩檢萃取液，把可能溶出的化合物一一標出', 'Screen the extract and flag every compound that could leach'),
      eff: T('溶出妖戰多 1 面護盾。先用萃取研究找出材料可能釋出的化合物，再用溶出物研究確認實際進入藥品的量，兩者對照才能判斷風險。', '+1 shield against the Leachable Imp. An extraction study finds what a material could release; a leachables study confirms what actually reaches the drug. Compare the two to judge the risk.') },
    { id: 'logger', zh: T('溫度記錄器', 'Temperature Data Logger'), cat: T('監測儀器', 'Monitoring instrument'), c: '#f97316', vs: ['frost'], tags: ['cold'], shield: 1, need: { c4: 2, c6: 1 },
      use: T('全程記錄溫度，偏離的那一段無所遁形', 'A full temperature record leaves no excursion unseen'),
      eff: T('進入溫度巨人戰的通行證，戰鬥中多 1 面護盾。記錄器要校正，放在 mapping 找出的冷熱點；有了全程數據，偏離時才能評估對產品的影響。', 'Your pass into the Temperature Giant fight, plus 1 shield in battle. Loggers must be calibrated and placed at the hot and cold spots found by mapping; only a full record lets you assess an excursion\'s impact on the product.') },
    { id: 'shipper', zh: T('已確效保溫運輸箱', 'Qualified Insulated Shipper'), cat: T('包材', 'Packaging'), c: '#fb923c', vs: ['frost'], tags: ['cold'], shield: 2, need: { boss: 1, c6: 2, c4: 1 },
      use: T('確效過的裝箱方式，夏冬兩季都撐得住', 'A qualified pack-out that holds through summer and winter'),
      eff: T('高階溫控道具，也能進入溫度巨人戰，戰鬥中多 2 面護盾。保溫箱要依路線的極端溫度與最長運輸時間確效，冷媒不可直接接觸產品，以免凍傷。', 'A higher-tier cold chain item: also gets you into the Temperature Giant fight, with 2 shields in battle. Shippers are qualified against the lane\'s temperature extremes and longest transit time, and coolant must never touch the product directly, or it may freeze.') }
  ];
  function itemById(id) { return ITEMS.filter(function (x) { return x.id === id; })[0] || null; }
  function itemVs(it, target) { return !!(it && it.vs.indexOf(target) >= 0); }
  function itemTag(it, tag) { return !!(it && it.tags && it.tags.indexOf(tag) >= 0); }
  var XP_ELITE = 80, ELITE_RANK = 1;      // first-win XP; class rank at which elites appear
  function eliteById(id) { return ELITES.filter(function (e) { return e.id === id; })[0]; }
  function weakTo(ti) { return Object.keys(WEAK[ti] || {}); }
  function isWeak(ti, cls) { return !!(WEAK[ti] && WEAK[ti][cls]); }
  function elName(cls) { return (FX_YOU[cls] || {}).el || cls; }
  function canCounter(ti) { return learnedSkills().some(function (id) { return isWeak(ti, id); }); }
  function weakText(ti) { return weakTo(ti).map(elName).join(LIST); }
  /* Skills the player can bring: the main class first, then every learned second specialty. */
  function learnedSkills() {
    var main = S.profile.cls;
    return [main].concat(DEPTS.map(function (d) { return d.id; }).filter(function (id) { return id !== main && G.skills[id] && G.skills[id].learned; }));
  }
  var PATROL_Q = 5;                  // daily patrol: questions per day (mistakes first, then sections due for review)
  /* Level milestones: levels used to be a bare number. Each one here gives something to craft with,
     and some give a level title shown when there is no topic title yet. Never touches scoring. */
  var LEVEL_MILES = [
    { lv: 3, mats: 2 },
    { lv: 5, boss: 1, title: T('勤學者', 'Diligent Learner') },
    { lv: 7, mats: 2 },
    { lv: 10, boss: 1, title: T('博覽者', 'Well-Read') },
    { lv: 13, mats: 3 },
    { lv: 15, boss: 1, title: T('百科行者', 'Walking Encyclopedia') },
    { lv: 20, boss: 2, title: T('活字典', 'Living Reference') }
  ];
  function mileText(m) {
    return [m.mats ? m.mats + T(' 個素材', m.mats > 1 ? ' materials' : ' material') : '', m.boss ? m.boss + T(' 顆魔王結晶', m.boss > 1 ? ' Boss Crystals' : ' Boss Crystal') : '', m.title ? T('稱號「' + m.title + '」', 'the title "' + m.title + '"') : ''].filter(Boolean).join(LIST);
  }
  var XP_FRESH = 3;                  // boss / elite / guard fights: each question answered right for the first time ever
  var XP_GUARD = 40, GUARD_Q = 5;     // document guardian: first-win XP, questions per fight
  var XP_BOSS = 100, BOSS_Q = 10;     // boss battle: bonus XP on the first win, questions per fight
  var BOSS_LINES = [
    T('「一粒灰塵就夠了。你的無菌區守得住嗎？」', '"One speck of dust is all it takes. Can you hold your aseptic zone?"'),
    T('「我在管線死角住得很舒服，你清不掉我的。」', '"I live comfortably in your dead legs. You will never clean me out."'),
    T('「就算把菌全滅了，我也還在。看你擋不擋得住熱原。」', '"Kill every bacterium and I am still here. Let us see you stop a pyrogen."')
  ];
  var BOSS_RAGE = [
    T('「這點程度就想清場？我還有整個高壓區的落塵！」', '"You call that clearance? I have a whole high-pressure zone of fallout left!"'),
    T('「刷得掉表面，刷不掉我築好的膜！」', '"You can scrub the surface, but not the film I have built!"'),
    T('「滅菌又怎樣？我是死了也還在的熱原！」', '"Sterilized? So what. I am the pyrogen that stays even after death!"')
  ];
  // Small monsters met in section challenges, one per topic cluster (art: rpg/assets/mob-<cluster>.webp).
  var MOBS = T(['破洞手套鬼', '芽孢彈', '裂瓶蟹', '漏簽幽靈', '落菌菇', '混濁史萊姆', '死角鰻', '混種雙子', '缺失紙蝠', '當機機器人'],
    ['Torn Glove Ghoul', 'Spore Bomb', 'Cracked Vial Crab', 'Missing Signature Ghost', 'Fallout Mushroom', 'Turbid Slime', 'Dead-Leg Eel', 'Crossbred Twins', 'Finding Bat', 'Crashed Robot']);
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
  function avatarImg(id) { return asset('avatar-' + id) || classImg(id.split('-')[0]); }   // square head crop if the artwork exists
  /* Every avatar the visitor can pick: one per class, plus alternate looks (avatar-<class>-2.webp, ...) that have artwork. */
  function avatarChoices() {
    var ids = DEPTS.map(function (d) { return d.id; });
    (M.assets || []).forEach(function (f) {
      var m = /^avatar-(.+)\.webp$/.exec(f);
      if (m && ids.indexOf(m[1]) < 0) ids.push(m[1]);
    });
    var rank = DEPTS.map(function (d) { return d.id; });
    return ids.slice(0, rank.length).concat(ids.slice(rank.length).sort(function (a, b) {
      return rank.indexOf(a.split('-')[0]) - rank.indexOf(b.split('-')[0]) || (a < b ? -1 : 1);
    }));
  }
  /* Look gender. Base art (class-<id>) is female; alternates (-2, ...) are male unless listed here. */
  var FEMALE_ALT = { 'production-2': 1 };
  function sexOf(id) { return id.indexOf('-') < 0 || FEMALE_ALT[id] ? 'f' : 'm'; }
  function profileSex() { return S.profile.sex || sexOf(S.profile.avatar); }
  /* The class look that matches a gender: base or alternate. Falls back to the base art when that gender has none. */
  function artFor(cls, sex) {
    var ids = [cls];
    (M.assets || []).forEach(function (f) {
      var m = /^class-(.+)\.webp$/.exec(f);
      if (m && m[1].indexOf(cls + '-') === 0) ids.push(m[1]);
    });
    for (var i = 0; i < ids.length; i++) if (sexOf(ids[i]) === sex) return ids[i];
    return cls;
  }
  /* Full portrait for the character: the chosen avatar's look if it belongs to the current class,
     otherwise the current class drawn in the character's gender. */
  function heroFor(cls, a, sex) {
    return (a !== cls && a.indexOf(cls + '-') === 0 && asset('class-' + a)) || classImg(artFor(cls, sex));
  }
  function heroImg() { return heroFor(S.profile.cls, S.profile.avatar, profileSex()); }
  /* Pet artwork for a stage. If that stage has no artwork yet, use the nearest earlier stage
     (then a later one) so the companion never falls back to a blank shape mid-evolution. */
  function petImg(line, stage) {
    var order = [stage];
    for (var a = stage - 1; a >= 1; a--) order.push(a);
    for (var b = stage + 1; b <= 4; b++) order.push(b);
    for (var i = 0; i < order.length; i++) { var src = asset('pet-' + line + '-' + order[i]); if (src) return src; }
    return placeholderPet(PETS[line].color, stage);
  }
  function eggImg() { return asset('egg') || placeholderEgg(); }
  function gearImg(g) {
    return asset('gear-' + g.id) || svgUri('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><path d="M32 4l24 14v28L32 60 8 46V18z" fill="#e0f2fe" stroke="#38bdf8" stroke-width="3"/>' +
      '<text x="32" y="41" font-size="22" text-anchor="middle" font-family="sans-serif" font-weight="700" fill="#0369a1">' + (EN ? g.zh.charAt(0) : g.zh.charAt(g.zh.length - 1)) + '</text></svg>');
  }
  function matImg(k) { return asset(k === 'boss' ? 'mat-boss' : 'mat-' + k.slice(1)); }
  function petCls(base) { return base + (S.pet && S.pet.shiny ? ' rpg-shiny' : ''); }

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
    // Highest rank / pet stage / title level ever reached. These never go back
    // down, e.g. when a question bank is later added to a document that was
    // cleared by reading alone.
    s.earned = s.earned || {};
    s.earned.rank = s.earned.rank || {};
    s.earned.titles = s.earned.titles || {};
    s.earned.pet = s.earned.pet || 0;
    s.secrets = s.secrets || {};                              // hidden titles: id -> timestamp
    s.mats = s.mats || {};                                    // crafting materials: 'c<cluster>' -> count
    s.bonus = s.bonus || 0;                                   // XP from review ambushes
    s.review = s.review || { last: {}, day: '', ok: 0 };
    s.today = s.today || { d: '', docs: [] };                 // documents with a challenge passed today
    s.flags = s.flags || {};
    s.mapSeen = s.mapSeen || {};
    s.bossWin = s.bossWin || {};                              // '<class>:<zone>' -> { best, total, ts }
    s.bossTry = s.bossTry || {};
    s.weakWin = s.weakWin || {};                              // '<class>:<zone>' -> time of the first 弱點擊破 win
    s.eliteWin = s.eliteWin || {};
    if (!s.eliteSeen) { s.eliteSeen = {}; Object.keys(s.eliteWin).forEach(function (k) { s.eliteSeen[k] = 1; }); }   // elite id -> silhouette reveal played
    s.items = s.items || {};                                  // item id -> time crafted
    s.itemPick = s.itemPick || {};                            // boss key -> item id last brought ('' = none)                            // elite id -> { best, total, ts }
    s.skillPick = s.skillPick || {};                          // '<class>:<zone>' -> skill last brought to that boss
    s.gear = s.gear || {};
    s.gear.own = s.gear.own || {};                            // gear id -> time crafted
    s.gear.on = s.gear.on || {};                              // slot -> gear id
    s.bossSeen = s.bossSeen || {};                            // '<key>#<qid>' answered right in a boss / elite / guard fight
    s.runDay = s.runDay || {};                                // boss or elite target -> day its finish-all-10 material dropped
    s.intel = s.intel || {};                                  // boss / elite target -> first-fight ts: status traits revealed
    s.guardWin = s.guardWin || {};                            // doc key -> { best, total, ts }: document guardian beaten
    s.patrol = s.patrol || { d: '', n: 0, ok: 0 };             // daily patrol done on day d
    s.earned.lvl = s.earned.lvl || {};                        // level milestone -> time granted
    s.weak = s.weak || {};                                    // mistake book: '<key>#<qid>' -> { s: section, n: times wrong, t: last wrong }                              // '<class>:<zone>' -> attempts                              // class id -> stages revealed on the 3D map last time
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
    var passed = 0, tried = 0, perfect = 0, clearedAt = 0;
    secs.forEach(function (sid) {
      var r = q[sid];
      if (!r) return;
      if (r.pt > clearedAt) clearedAt = r.pt;
      tried++;
      if (r.total > 0 && r.best / r.total >= PASS) passed++;
      if (r.total > 0 && r.first === r.total) perfect++;      // full marks on the very first attempt
    });
    var shiny = secs.length > 0 && perfect === secs.length;
    var cleared = !d.shell && (secs.length ? passed === secs.length : all);
    var n = d.top.length;
    return {
      key: key, doc: d, maxIdx: maxIdx, started: !!p, readAll: all, read: read, total: n,
      quizSecs: secs, passed: passed, tried: tried, cleared: cleared, perfect: perfect, shiny: shiny,
      // Document guardian: a 5-question mixed fight over the whole document, from the day AFTER it was cleared
      // (recall after a night's gap, not right after reading). Old saves without pass times count as long ago.
      clearedAt: secs.length && cleared ? clearedAt : 0, guardWon: !!S.guardWin[key],
      guard: !secs.length || !cleared ? '' : S.guardWin[key] ? 'won' : clearedAt && dayKey(new Date(clearedAt)) === dayKey(new Date()) ? 'wait' : 'ready',
      xp: read * XP_READ + passed * XP_QUIZ + (cleared ? XP_DOC : 0),
      card: (all || cleared) ? { rarity: n >= 10 ? 3 : n >= 6 ? 2 : n >= 3 ? 1 : 0, awakened: secs.length > 0 && cleared, shiny: shiny } : null
    };
  }

  function compute() {
    var docs = {}, xp = S.bonus || 0, activity = 0, cards = 0, perfect = 0;
    Object.keys(M.docs).forEach(function (k) {
      var st = docState(k);
      docs[k] = st; xp += st.xp; activity += st.read + st.passed; perfect += st.perfect;
      if (st.card) cards++;
    });
    var level = 1;
    while (xp >= needXp(level + 1)) level++;

    var classes = {}, maxRank = 0;
    DEPTS.forEach(function (dep) {
      var rank = 0, open = true;
      var tiers = dep.tiers.map(function (t, ti) {
        var list = t.docs.filter(function (x) { return M.docs[x.key] && !M.docs[x.key].shell; });
        var req = list.filter(function (x) { return x.required; });
        var pool = req.length ? req : list;
        var need = req.length ? req.length : Math.min(3, list.length);
        var got = pool.filter(function (x) { return docs[x.key].cleared; }).length;
        var ready = got >= need;
        // A zone whose documents have question banks ends in a boss battle; the rank-up waits for the win.
        // Zones without banks rank up on reading alone, as before.
        var banked = list.filter(function (x) { return M.docs[x.key].quiz; });
        var win = S.bossWin[dep.id + ':' + ti] || null;
        var done = ready && (!banked.length || !!win);
        // "Pick any N" zones: recommend N documents so a long optional list has a clear route.
        // Already-cleared ones count first, then documents with a question bank, in curriculum order.
        var rec = [];
        if (!req.length) {
          var byCleared = list.filter(function (x) { return docs[x.key].cleared; });
          var byBank = list.filter(function (x) { return !docs[x.key].cleared && M.docs[x.key].quiz; });
          var rest = list.filter(function (x) { return !docs[x.key].cleared && !M.docs[x.key].quiz; });
          rec = byCleared.concat(byBank, rest).slice(0, need).map(function (x) { return x.key; });
        }
        if (open && done) rank++; else open = false;
        return { tier: t, idx: ti, list: list, req: req, need: need, got: Math.min(got, need), ready: ready, done: done, anyOf: !req.length, rec: rec,
          banked: banked, hasBoss: banked.length > 0, beaten: !!win, win: win };
      });
      rank = Math.max(rank, S.earned.rank[dep.id] || 0);
      classes[dep.id] = { dep: dep, rank: rank, tiers: tiers };
      if (rank > maxRank) maxRank = rank;
    });

    var skills = {};
    DEPTS.forEach(function (dep) {
      var req = [];
      dep.tiers.forEach(function (t) { t.docs.forEach(function (x) { if (x.required && M.docs[x.key] && !M.docs[x.key].shell && req.indexOf(x.key) < 0) req.push(x.key); }); });
      var got = req.filter(function (k) { return docs[k].cleared; }).length;
      skills[dep.id] = { req: req, got: got, need: req.length, learned: req.length > 0 && got === req.length };
    });

    var titles = CLUSTERS.map(function (c, i) {
      var keys = Object.keys(M.docs).filter(function (k) {
        var d = M.docs[k];
        return !d.shell && d.tags.some(function (t) { return c.tags.indexOf(t) >= 0; });
      });
      var got = keys.filter(function (k) { return docs[k].cleared; }).length;
      var lv = keys.length && got === keys.length ? 2 : (keys.length && got >= Math.min(5, keys.length) ? 1 : 0);
      lv = Math.max(lv, S.earned.titles['c' + i] || 0);
      return { id: 'c' + i, zh: CLUSTER_ZH[i] || c.name, en: c.name, color: c.color, n: keys.length, got: got, lv: lv };
    });

    return {
      docs: docs, xp: xp, level: level, lo: needXp(level), hi: needXp(level + 1),
      activity: activity, cards: cards, perfect: perfect, classes: classes, maxRank: maxRank, titles: titles, skills: skills,
      petStage: S.pet ? Math.max(1 + Math.min(maxRank, 3), S.earned.pet) : 0,   // hatch, then one stage per rank
      sectionsRead: Object.keys(docs).reduce(function (a, k) { return a + docs[k].read; }, 0)
    };
  }

  function snapshot(g) {
    var cards = {}, titles = {}, rank = {};
    Object.keys(g.docs).forEach(function (k) { var c = g.docs[k].card; if (c) cards[k] = c.shiny ? 3 : c.awakened ? 2 : 1; });
    g.titles.forEach(function (t) { if (t.lv) titles[t.id] = t.lv; });
    Object.keys(g.classes).forEach(function (id) { rank[id] = g.classes[id].rank; });
    return { xp: g.xp, level: g.level, activity: g.activity, cards: cards, titles: titles, rank: rank, pet: g.petStage };
  }

  /* A pet turns shiny when, at the moment of a rank-up, at least half of that
     tier's challenge documents were cleared with full marks on the first try. */
  function shinyTier(cls, idx) {
    var t = G.classes[cls] && G.classes[cls].tiers[idx];
    if (!t) return false;
    var pool = (t.req.length ? t.req : t.list).filter(function (x) { return M.docs[x.key].quiz; });
    if (!pool.length) return false;
    return pool.filter(function (x) { return G.docs[x.key].shiny; }).length >= Math.ceil(pool.length / 2);
  }

  /* Hidden titles. The conditions are not shown until earned. */
  function anyDoc(g, fn) { return Object.keys(g.docs).some(function (k) { return fn(g.docs[k]); }); }
  var SECRETS = [
    { id: 'tome', zh: T('大部頭征服者', 'Tome Conqueror'), how: T('通關一份 200 頁以上的文件', 'Clear a document of 200+ pages'),
      test: function (g) { return anyDoc(g, function (st) { return st.cleared && (st.doc.pages || 0) >= 200; }); } },
    { id: 'streak7', zh: T('七日修行', 'Seven-Day Discipline'), how: T('連續學習 7 天', 'Study 7 days in a row'), test: function () { return liveStreak() >= 7; } },
    { id: 'streak30', zh: T('三十日不滅', 'Thirty-Day Flame'), how: T('連續學習 30 天', 'Study 30 days in a row'), test: function () { return liveStreak() >= 30; } },
    { id: 'trio', zh: T('一日三修', 'Triple Session'), how: T('同一天通過三份不同文件的章節挑戰', 'Pass section challenges in three different documents on the same day'),
      test: function () { return S.today.d === dayKey(new Date()) && S.today.docs.length >= 3; } },
    { id: 'dawn', zh: T('晨型人', 'Early Bird'), how: T('清晨 4 點到 6 點之間完成學習', 'Study between 4 and 6 a.m.'),
      test: function (g, grew) { var hr = new Date().getHours(); return grew && hr >= 4 && hr < 6; } },
    { id: 'night', zh: T('夜貓子', 'Night Owl'), how: T('午夜到凌晨 4 點之間完成學習', 'Study between midnight and 4 a.m.'),
      test: function (g, grew) { return grew && new Date().getHours() < 4; } },
    { id: 'perfect5', zh: T('一發入魂', 'First-Try Ace'), how: T('累計 5 節第一次挑戰就全對', 'Ace 5 sections on the first try'), test: function (g) { return g.perfect >= 5; } },
    { id: 'comeback', zh: T('不屈', 'Unbowed'), how: T('同一節失敗兩次以上後通過', 'Pass a section after failing it twice or more'), test: function () { return !!S.flags.comeback; } },
    { id: 'sources', zh: T('博覽群籍', 'Widely Read'), how: T('八個來源各通關至少一份文件', 'Clear at least one document from each of the eight sources'),
      test: function (g) { return Object.keys(GROUP_LABEL).every(function (grp) { return anyDoc(g, function (st) { return st.cleared && st.doc.group === grp; }); }); } },
    { id: 'dual', zh: T('雙修', 'Dual Class'), how: T('兩個職業達到初階', 'Reach Foundation in two classes'),
      test: function (g) { return Object.keys(g.classes).filter(function (id) { return g.classes[id].rank >= 1; }).length >= 2; } },
    { id: 'allclass', zh: T('全職制霸', 'Master of All Trades'), how: T('八個職業全部達到專家', 'Reach Advanced in all eight classes'),
      test: function (g) { return Object.keys(g.classes).every(function (id) { return g.classes[id].rank >= 3; }); } },
    { id: 'cards50', zh: T('收藏家', 'Collector'), how: T('收集 50 張文件卡', 'Collect 50 document cards'), test: function (g) { return g.cards >= 50; } },
    { id: 'review10', zh: T('溫故知新', 'Lessons Retained'), how: T('複習突擊答對 10 次', 'Win 10 review ambushes'), test: function () { return S.review.ok >= 10; } }
  ].concat(ELITES.map(function (e) {
    return { id: 'elite-' + e.id, zh: e.title, how: T('擊敗精英魔王' + e.name, 'Defeat the elite boss ' + e.name), test: function () { return !!(S.eliteWin || {})[e.id]; } };
  }));

  /* Materials: one per topic cluster, dropped when a section challenge is passed
     for the first time or a review ambush is answered correctly. */
  function clusterOf(doc) {
    for (var t = 0; t < doc.tags.length; t++)
      for (var i = 0; i < CLUSTERS.length; i++)
        if (CLUSTERS[i].tags.indexOf(doc.tags[t]) >= 0) return i;
    return -1;
  }
  function dropMat(key) {
    var i = clusterOf(M.docs[key]);
    if (i < 0) return;
    S.mats['c' + i] = (S.mats['c' + i] || 0) + 1;
    toast(T('獲得素材：', 'Material found: ') + (MATS[i] || CLUSTERS[i].name));
  }

  /* ---------- mistake book ----------
     A question answered wrong in any battle or review stays in S.weak until it
     is answered right on a LATER day than the last miss (re-answering right after
     reading the explanation does not count). Clearing one drops a material. */
  function weakKey(id) { return id.slice(0, id.lastIndexOf('#')); }
  function noteAnswer(key, q, ok) {
    if (!key || q.id == null || !M.docs[key]) return false;
    var id = key + '#' + q.id, w = S.weak[id];
    if (!ok) { S.weak[id] = { s: q.section, n: (w ? w.n : 0) + 1, t: Date.now() }; saveState(); return false; }
    if (!w || dayKey(new Date(w.t)) === dayKey(new Date())) return false;
    delete S.weak[id];
    S.flags.cleansed = (S.flags.cleansed || 0) + 1;
    dropMat(key);
    saveState();
    return true;
  }
  function weakIds(key) {
    return Object.keys(S.weak).filter(function (id) { return M.docs[weakKey(id)] && (!key || weakKey(id) === key); });
  }
  function weakDue(id) { return dayKey(new Date(S.weak[id].t)) !== dayKey(new Date()); }

  /* Compare with what the learner has already been shown and queue rewards. */
  function refresh(silent) {
    G = compute();
    if (!S.profile) { renderAll(); return; }
    var prev = S.seen, now = snapshot(G), events = [];
    if (prev && !silent) {
      if (now.activity > (prev.activity || 0)) touchStreak();
      if (now.xp > prev.xp) events.push({ kind: 'xp', n: now.xp - prev.xp });
      if (now.level > prev.level) events.push({ kind: 'level', n: now.level });
      grantMiles(now.level, events);
      Object.keys(now.cards).forEach(function (k) {
        if (!prev.cards[k]) events.push({ kind: 'card', key: k, awakened: now.cards[k] >= 2, shiny: now.cards[k] === 3 });
        else if (now.cards[k] > prev.cards[k]) events.push({ kind: 'card', key: k, awakened: true, upgrade: true, shiny: now.cards[k] === 3 });
      });
      Object.keys(now.titles).forEach(function (id) {
        if ((prev.titles[id] || 0) < now.titles[id]) events.push({ kind: 'title', id: id, lv: now.titles[id] });
      });
      var cls = S.profile.cls;
      if ((now.rank[cls] || 0) > (prev.rank[cls] || 0)) {
        events.push({ kind: 'rank', n: now.rank[cls] });
        if (S.pet && !S.pet.shiny && shinyTier(cls, now.rank[cls] - 1)) { S.pet.shiny = true; events.push({ kind: 'shinypet' }); }
      }
      if (prev.pet && now.pet > prev.pet) events.push({ kind: 'pet', n: now.pet });
    }
    var grew = !!prev && now.activity > (prev.activity || 0);
    SECRETS.forEach(function (sec) {
      if (S.secrets[sec.id] || !sec.test(G, grew && !silent)) return;
      S.secrets[sec.id] = Date.now();
      if (prev && !silent) events.push({ kind: 'secret', id: sec.id });
    });
    grantMiles(now.level, null);                              // silent refresh / first load: still granted, no pop-up
    S.seen = now;
    Object.keys(now.rank).forEach(function (id) { S.earned.rank[id] = Math.max(S.earned.rank[id] || 0, now.rank[id]); });
    Object.keys(now.titles).forEach(function (id) { S.earned.titles[id] = Math.max(S.earned.titles[id] || 0, now.titles[id]); });
    S.earned.pet = Math.max(S.earned.pet, now.pet);
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
        if (requiredOnly && !pick && t.ready && t.hasBoss && !t.beaten) pick = { boss: true, tier: t, tierIdx: i };
        if (requiredOnly && !t.done && !pick && t.anyOf) {
          var route = t.list.filter(function (x) { return t.rec.indexOf(x.key) >= 0; }).concat(t.list.filter(function (x) { return t.rec.indexOf(x.key) < 0; }));
          for (var k = 0; k < route.length; k++) {
            var s2 = G.docs[route[k].key];
            if (!s2.cleared) { pick = { st: s2, tier: t, tierIdx: i, entry: route[k] }; break; }
          }
        }
      }
    }
    // A guardian that showed up for a document cleared in the last two weeks goes first: it is short,
    // and it is the spaced recall of something just finished. Older ones wait on the map.
    var gPick = null;
    c.tiers.forEach(function (t, i) {
      t.list.forEach(function (x) {
        var g = G.docs[x.key];
        if (g.guard === 'ready' && g.clearedAt && Date.now() - g.clearedAt < 14 * 864e5 && (!gPick || g.clearedAt > gPick.st.clearedAt))
          gPick = { guard: true, st: g, tier: t, tierIdx: i, entry: x, cls: c, mode: 'guard', href: ROOT + 'map.html?guard=' + encodeURIComponent(x.key) };
      });
    });
    if (gPick) return gPick;
    scan(true);
    if (!pick) scan(false);
    if (!pick) return { done: true, cls: c };
    if (pick.boss) { pick.cls = c; pick.mode = 'boss'; pick.href = ROOT + 'map.html?boss=' + pick.tierIdx; return pick; }

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
    return 'rpg-frame rpg-frame-' + r + (s >= 30 ? ' rpg-frame-s30' : s >= 7 ? ' rpg-frame-s7' : '') + (wearing('gemframe') ? ' rpg-frame-gem' : '');
  }
  function avatarEl(size) {
    return h('span', { class: frameClass() + ' rpg-avatar' + (size ? ' rpg-avatar-' + size : '') }, [
      h('img', { src: avatarImg(S.profile.avatar), alt: '', loading: 'lazy' })
    ]);
  }
  function bestTitle() {
    var t = G.titles.filter(function (x) { return x.lv; }).sort(function (a, b) { return b.lv - a.lv; })[0];
    if (t) return EN ? t.zh + (t.lv === 2 ? ' Master' : ' Adept') : t.zh + (t.lv === 2 ? '大師' : '修習者');
    var lt = LEVEL_MILES.filter(function (m) { return m.title && S.earned.lvl[m.lv]; }).pop();
    return lt ? lt.title : '';
  }
  /* Grant every level milestone reached and not yet given (old saves get theirs on first load). */
  function grantMiles(level, events) {
    LEVEL_MILES.forEach(function (m) {
      if (level < m.lv || S.earned.lvl[m.lv]) return;
      S.earned.lvl[m.lv] = Date.now();
      if (m.boss) S.mats.boss = (S.mats.boss || 0) + m.boss;
      for (var k = 0; k < (m.mats || 0); k++) {                // the materials the learner has least of
        var low = 0;
        for (var c = 1; c < MATS.length; c++) if ((S.mats['c' + c] || 0) < (S.mats['c' + low] || 0)) low = c;
        S.mats['c' + low] = (S.mats['c' + low] || 0) + 1;
      }
      if (events) events.push({ kind: 'mile', lv: m.lv, text: mileText(m) });
    });
  }
  function nextMile() { return LEVEL_MILES.filter(function (m) { return G.level < m.lv; })[0] || null; }
  function xpBar() {
    var pct = Math.max(0, Math.min(100, Math.round((G.xp - G.lo) / (G.hi - G.lo) * 100)));
    return h('span', { class: 'rpg-xp', role: 'progressbar', 'aria-valuenow': pct, 'aria-valuemin': 0, 'aria-valuemax': 100, 'aria-label': T('經驗值', 'Experience') }, [
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
    var sig = !S.profile ? 'new' : [S.profile.nick, S.profile.cls, S.profile.avatar, G.classes[S.profile.cls].rank, bestTitle(),
      G.level, G.xp, liveStreak(), S.pet ? S.pet.line + G.petStage + (S.pet.shiny ? 's' : '') : ''].join('|');
    if (bar.getAttribute('data-sig') === sig) return;
    bar.setAttribute('data-sig', sig);
    clear(bar);
    if (!S.profile) {
      bar.appendChild(h('button', { class: 'rpg-bar-cta', type: 'button', onclick: openOnboarding }, [
        h('span', { class: 'rpg-bar-cta-tag', text: 'NEW' }), T('建立你的角色，開始學習冒險', 'Create your character and start the learning quest')
      ]));
      return;
    }
    var c = G.classes[S.profile.cls], dep = c.dep, title = bestTitle(), streak = liveStreak();
    var link = h('a', { class: 'rpg-bar-main', href: ROOT + 'character.html', 'aria-label': T('開啟角色頁', 'Open character page') }, [
      avatarEl(),
      h('span', { class: 'rpg-bar-id' }, [
        h('span', { class: 'rpg-bar-name', text: S.profile.nick }),
        h('span', { class: 'rpg-bar-job', text: (title ? title + T('・', ' · ') : '') + L(RANKS[c.rank]) + (EN ? ' ' : '') + CLASS_META[dep.id].job })
      ]),
      h('span', { class: 'rpg-bar-lv' }, [h('small', { text: 'Lv' }), String(G.level)]),
      h('span', { class: 'rpg-bar-xp' }, [xpBar(), h('small', { text: G.xp + ' / ' + G.hi + ' XP' })]),
      streak ? h('span', { class: 'rpg-bar-streak', title: T('連續學習天數', 'Study streak (days)') }, [h('b', { text: String(streak) }), h('small', { text: T('天連續', '-day streak') })]) : null,
      S.pet ? h('img', { class: petCls('rpg-bar-pet rpg-idle'), src: petImg(S.pet.line, G.petStage), alt: PETS[S.pet.line].stages[G.petStage - 1] }) : null
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
          h('h2', { text: T('選一個職業，從第一個任務開始', 'Pick a class and start your first quest') }),
          h('p', { text: T('184 份文件不知道從哪裡讀起？建立角色後，這裡會告訴你下一步。', 'Not sure where to start among 184 documents? Create a character and this panel will show your next step.') }),
          h('button', { class: 'rpg-btn', type: 'button', onclick: openOnboarding, text: T('建立角色', 'Create character') }),
          h('a', { class: 'rpg-btn rpg-btn-ghost rpg-guide-link', href: ROOT + T('rpg-guide.html', 'rpg-guide-en.html'), text: T('新手指南', 'Beginner\'s guide') })
        ])
      ]));
      return;
    }
    var q = nextQuest();
    var c = G.classes[S.profile.cls];
    var portrait = h('img', { class: 'rpg-quest-portrait', src: heroImg(), alt: '' });
    if (!q || q.done) {
      mount.appendChild(h('div', { class: 'rpg-quest' }, [portrait, h('div', { class: 'rpg-quest-body' }, [
        h('span', { class: 'rpg-tag', text: 'COMPLETE' }),
        h('h2', { text: T(c.dep.nameZh + '的任務全部完成', 'All ' + dName(c.dep) + ' quests complete') }),
        h('p', { text: T('可以到角色頁轉職，挑戰另一個部門的主線。', 'Switch class on the character page to take on another department\'s main quest.') }),
        h('a', { class: 'rpg-btn', href: ROOT + 'character.html', text: T('前往角色頁', 'Go to character page') })
      ])]));
      return;
    }
    if (q.guard) {
      var gd = q.st.doc, gmi = clusterOf(gd), gimg = gmi >= 0 ? asset('mob-' + gmi) : null;
      mount.appendChild(h('div', { class: 'rpg-quest rpg-quest-guard' }, [
        gimg ? h('img', { class: 'rpg-quest-portrait rpg-quest-bossimg', src: gimg, alt: '' }) : portrait,
        h('div', { class: 'rpg-quest-body' }, [
          h('span', { class: 'rpg-tag', text: T('守關者', 'Gatekeeper') }),
          h('h2', { text: T('「' + (gd.titleZh || gd.title) + '」的守關者現身了', 'The Gatekeeper of "' + docT(gd) + '" has appeared') }),
          h('p', { class: 'rpg-quest-sec', text: T('昨天以前通關的文件，今天來驗收：跨章節 ' + GUARD_Q + ' 題，答對 80% 擊敗牠，得 ' + XP_GUARD + ' XP、2 個素材和地圖上的一顆守關星。選打，不影響升階。', 'Time to prove what you cleared before today: ' + GUARD_Q + ' questions across sections. Score 80% to win ' + XP_GUARD + ' XP, 2 materials and a Gatekeeper star on the map. Optional; it does not affect rank-ups.') }),
          h('div', { class: 'rpg-quest-foot' }, [
            h('a', { class: 'rpg-btn', href: q.href, text: T('挑戰守關者', 'Challenge the Gatekeeper') }),
            h('a', { class: 'rpg-quest-map', href: ROOT + 'map.html', text: T('闖關地圖', 'Quest map') })
          ])
        ])
      ]));
      return;
    }
    if (q.boss) {
      var bz = ZONES[q.tierIdx] || ZONES[ZONES.length - 1], bimg = asset('boss-' + (q.tierIdx + 1));
      mount.appendChild(h('div', { class: 'rpg-quest rpg-quest-boss' }, [
        bimg ? h('img', { class: 'rpg-quest-portrait rpg-quest-bossimg', src: bimg, alt: bz.boss }) : portrait,
        h('div', { class: 'rpg-quest-body' }, [
          h('span', { class: 'rpg-tag', text: T('魔王戰', 'Boss fight') }),
          h('h2', { text: T(bz.zh + '的魔王　' + bz.boss, L(bz) + ' boss · ' + bz.boss) }),
          h('p', { class: 'rpg-quest-sec', text: T('升階試煉：' + RANKS[q.tierIdx + 1].zh + CLASS_META[c.dep.id].job + '。從這一區讀過的文件隨機出 ' + Math.min(BOSS_Q, bossCount(q.tier)) + ' 題，答對 80% 擊敗牠。', 'Rank trial: ' + L(RANKS[q.tierIdx + 1]) + ' ' + CLASS_META[c.dep.id].job + '. ' + Math.min(BOSS_Q, bossCount(q.tier)) + ' random questions from the documents you read in this zone; score 80% to win.') }),
          h('p', { class: 'rpg-quest-why', text: BOSS_LINES[q.tierIdx] || '' }),
          h('div', { class: 'rpg-quest-foot' }, [
            h('a', { class: 'rpg-btn', href: q.href, text: T('挑戰魔王', 'Challenge the boss') }),
            h('a', { class: 'rpg-quest-map', href: ROOT + 'map.html', text: T('闖關地圖', 'Quest map') })
          ])
        ])
      ]));
      return;
    }
    var d = q.st.doc, main = q.entry.required || q.tier.anyOf;
    var tierText = tierL(q.tier.tier) + SEP + q.tier.got + ' / ' + q.tier.need;
    var a = h('a', {
      class: 'rpg-btn track-open', href: q.href,
      'data-track-file': d.file, 'data-track-title': d.title, 'data-track-zh': d.titleZh,
      text: q.mode === 'quiz' ? T('前往挑戰', 'Take the challenge') : (q.st.started ? T('繼續閱讀', 'Keep reading') : T('出發', 'Set out'))
    });
    mount.appendChild(h('div', { class: 'rpg-quest' }, [
      portrait,
      h('div', { class: 'rpg-quest-body' }, [
        h('span', { class: 'rpg-tag', text: main ? T('主線任務', 'Main quest') : T('支線任務', 'Side quest') }),
        h('h2', { text: docT(d) }),
        h('p', { class: 'rpg-quest-sec', text: (q.mode === 'quiz' ? T('章節挑戰：', 'Section challenge: ') : T('閱讀：', 'Read: ')) + 'Section ' + q.target.num + SEP + (EN ? (q.target.en || q.target.zh) : (q.target.zh || q.target.en)) }),
        q.entry.why ? h('p', { class: 'rpg-quest-why', text: q.entry.why }) : null,
        h('div', { class: 'rpg-quest-foot' }, [
          a,
          h('a', { class: 'rpg-quest-map', href: ROOT + 'map.html', text: T('闖關地圖', 'Quest map') }),
          h('span', { class: 'rpg-quest-meta', text: tierText }),
          h('span', { class: 'rpg-quest-meta', text: T('本文件 ' + q.st.read + ' / ' + q.st.total + ' 節', q.st.read + ' / ' + q.st.total + ' sections read') })
        ])
      ])
    ]));
  }

  /* ---------- rendering: cards ---------- */
  function cardEl(st, locked) {
    var d = st.doc, c = st.card;
    var cls = 'rpg-card' + (locked ? ' rpg-card-locked' : ' rpg-card-r' + c.rarity + (c.awakened ? ' rpg-card-awakened' : '') + (c.shiny ? ' rpg-card-shiny' : ''));
    return h('a', { class: cls, href: ROOT + d.file, style: '--bar:' + d.bar, title: d.title }, [
      h('span', { class: 'rpg-card-top' }, [
        h('span', { class: 'rpg-card-short', text: GROUP_LABEL[d.group] || d.group }),
        locked ? null : h('span', { class: 'rpg-card-rarity', text: RARITY[c.rarity] })
      ]),
      !locked && asset('card-' + d.group) ? h('img', { class: 'rpg-card-art', src: asset('card-' + d.group), alt: '', loading: 'lazy' }) : null,
      h('span', { class: 'rpg-card-code', text: d.code || d.short }),
      h('span', { class: 'rpg-card-title', text: locked ? '？？？' : docT(d) }),
      h('span', { class: 'rpg-card-foot', text: locked ? T('未收集', 'Not collected') : (c.shiny ? T('異色', 'Shiny') : c.awakened ? T('覺醒', 'Awakened') : (d.quiz ? T('可挑戰', 'Challenge ready') : T('已讀完', 'Read'))) })
    ]);
  }

  /* ---------- modal plumbing ---------- */
  function modal(kids, opts) {
    var wrap = h('div', { class: 'rpg-modal' + (opts && opts.cls ? ' ' + opts.cls : ''), role: 'dialog', 'aria-modal': 'true' });
    var box = h('div', { class: 'rpg-modal-box' }, kids);
    wrap.appendChild(box);
    if (!(opts && opts.sticky)) {
      wrap.addEventListener('click', function (e) { if (e.target === wrap) close(); });
      box.insertBefore(h('button', { class: 'rpg-modal-x', type: 'button', 'aria-label': T('關閉', 'Close'), text: '×', onclick: close }), box.firstChild);
    }
    function onKey(e) { if (e.key === 'Escape' && !(opts && opts.sticky)) close(); }
    function close() {
      document.removeEventListener('keydown', onKey);
      if (wrap.parentNode) wrap.parentNode.removeChild(wrap);
    }
    document.addEventListener('keydown', onKey);
    document.body.appendChild(wrap);
    return { el: wrap, close: close };
  }

  /* ---------- save file: download / restore every key the game reads ---------- */
  function saveKey(k) { return k === STATE_KEY || k === QUIZ_KEY || k === 'gmp-learning-progress' || k.indexOf('sgk_progress_') === 0; }
  function exportSave() {
    var data = {};
    try { for (var i = 0; i < localStorage.length; i++) { var k = localStorage.key(i); if (saveKey(k)) data[k] = localStorage.getItem(k); } } catch (e) {}
    var blob = new Blob([JSON.stringify({ app: 'sgk-rpg', v: 1, at: new Date().toISOString(), data: data })], { type: 'application/json' });
    var a = h('a', { href: URL.createObjectURL(blob), download: 'sgk-rpg-save-' + dayKey(new Date()) + '.json' });
    document.body.appendChild(a); a.click(); document.body.removeChild(a);
    setTimeout(function () { URL.revokeObjectURL(a.href); }, 1000);
    toast(T('存檔已下載。換電腦時用「讀取存檔」放回來。', 'Save file downloaded. On another computer, use "Load save" to restore it.'));
  }
  // Imported values are only accepted when they parse to the shape that key normally holds.
  // The pages that read these keys escape what they render; this is the second line of defence.
  function saveValueOk(k, raw) {
    var v; try { v = JSON.parse(raw); } catch (e) { return false; }
    if (k === QUIZ_KEY) return Array.isArray(v);
    if (!v || typeof v !== 'object' || Array.isArray(v)) return false;
    if (k === STATE_KEY) return v.v === 1 && (v.profile == null || typeof v.profile === 'object');
    return true;
  }
  function importSave() {
    var inp = h('input', { type: 'file', accept: '.json,application/json', style: 'display:none' });
    inp.addEventListener('change', function () {
      var f = inp.files && inp.files[0]; if (!f) return;
      var rd = new FileReader();
      rd.onload = function () {
        var pack = null;
        try { pack = JSON.parse(rd.result); } catch (e) {}
        var keys = pack && pack.app === 'sgk-rpg' && pack.data && typeof pack.data === 'object'
          ? Object.keys(pack.data).filter(function (k) { return saveKey(k) && typeof pack.data[k] === 'string' && saveValueOk(k, pack.data[k]); }) : [];
        if (!keys.length) { toast(T('這不是有效的存檔檔案。', 'This is not a valid save file.')); return; }
        var st = null; try { st = JSON.parse(pack.data[STATE_KEY] || 'null'); } catch (e) {}
        var m = modal([
          h('h2', { text: T('讀取存檔', 'Load save') }),
          h('p', { class: 'rpg-modal-lead', text: T('存檔時間 ' + String(pack.at || '').slice(0, 10) + (st && st.profile ? '，角色「' + st.profile.nick + '」' : '') +
            '。讀取後會取代這個瀏覽器目前的冒險進度與閱讀紀錄，建議先下載一份目前的存檔。', 'Saved on ' + String(pack.at || '').slice(0, 10) + (st && st.profile ? ', character "' + st.profile.nick + '"' : '') +
            '. Loading replaces the adventure progress and reading history in this browser, so download a save of your current progress first.') }),
          h('div', { class: 'rpg-modal-actions' }, [
            h('button', { class: 'rpg-btn', type: 'button', text: T('取代並讀取', 'Replace and load'), onclick: function () {
              try { for (var i = localStorage.length - 1; i >= 0; i--) { var k = localStorage.key(i); if (saveKey(k)) localStorage.removeItem(k); } } catch (e) {}
              keys.forEach(function (k) { lsSet(k, pack.data[k]); });
              m.close(); location.reload();
            } }),
            h('button', { class: 'rpg-btn rpg-btn-ghost', type: 'button', text: T('取消', 'Cancel'), onclick: function () { m.close(); } })
          ])
        ]);
      };
      rd.readAsText(f);
    });
    document.body.appendChild(inp); inp.click(); setTimeout(function () { if (inp.parentNode) inp.parentNode.removeChild(inp); }, 60000);
  }

  /* ---------- prologue: a short storyboard before the first character sheet ---------- */
  var CALM = (function () { try { return matchMedia('(prefers-reduced-motion: reduce)').matches; } catch (e) { return false; } })();
  /* Types `text` into `el` one character at a time; returns a function that finishes it at once. */
  function typewrite(el, text, done) {
    var k = 0, timer = null;
    function stop() { if (timer) clearInterval(timer); timer = null; el.textContent = text; el.classList.remove('is-typing'); if (done) { var d = done; done = null; d(); } }
    if (CALM) { stop(); return function () {}; }
    el.textContent = ''; el.classList.add('is-typing');
    timer = setInterval(function () { k++; el.textContent = text.slice(0, k); if (k >= text.length) stop(); }, 38);
    return stop;
  }
  function storyArt(kind) {
    function imgs(list, cls) {
      return h('div', { class: 'rpg-story-row ' + (cls || '') }, list.filter(Boolean).map(function (src, j) {
        return h('img', { src: src, alt: '', style: '--d:' + (j * 0.18) + 's' });
      }));
    }
    if (kind === 'plant') return h('div', { class: 'rpg-story-plant', 'aria-hidden': 'true' }, [h('i'), h('i'), h('i'), h('i')]);
    if (kind === 'mobs') return imgs([asset('mob-0'), asset('mob-4'), asset('mob-1'), asset('mob-6'), asset('mob-3')], 'is-mobs');
    if (kind === 'bosses') return imgs([asset('boss-1'), asset('boss-2'), asset('boss-3')], 'is-bosses');
    if (kind === 'heroes') return imgs(DEPTS.slice(0, 8).map(function (d) { return asset('avatar-' + d.id); }), 'is-heroes');
    if (kind === 'egg') return h('img', { class: 'rpg-egg rpg-wobble rpg-story-egg', src: eggImg(), alt: '' });
    return null;
  }
  /* ---------- sound: chiptune music + jingles, synthesized with Web Audio (no audio files) ----------
     Plays only around the animated moments (prologue, scenes, cut-ins, battle intros). S.sound === 0 mutes.
     Browsers allow audio only after a tap, which every one of these moments follows. Never touches scoring. */
  var AC = null, master = null, seq = null, wantTheme = null;
  var THEMES = {   // 8th-note steps; 0 = rest. MIDI numbers (60 = middle C)
    plant: { bpm: 84, lw: 'triangle', lv: 0.13, bw: 'triangle', bv: 0.16,
      lead: [72,0,76,0,79,0,76,0, 74,0,77,0,81,0,77,0, 72,0,76,0,79,0,84,0, 83,0,79,0,74,0,0,0],
      bass: [48,0,0,0,55,0,0,0, 50,0,0,0,57,0,0,0, 48,0,0,0,55,0,0,0, 43,0,0,0,50,0,0,0] },
    alarm: { bpm: 150, lw: 'square', lv: 0.06, bw: 'square', bv: 0.05, siren: 16,
      lead: [69,69,0,69,72,0,71,0, 69,69,0,69,76,0,75,0],
      bass: [45,45,45,45,45,45,45,45, 41,41,41,41,40,40,40,40] },
    bosses: { bpm: 92, lw: 'square', lv: 0.05, bw: 'triangle', bv: 0.2,
      lead: [69,0,72,0,71,0,68,0, 69,0,0,0,64,0,0,0, 65,0,69,0,68,0,64,0, 63,0,0,0,64,0,0,0],
      bass: [33,0,33,0,33,0,33,0, 32,0,32,0,32,0,32,0, 29,0,29,0,29,0,29,0, 28,0,28,0,28,0,28,0] },
    heroes: { bpm: 120, lw: 'square', lv: 0.055, bw: 'triangle', bv: 0.17,
      lead: [67,0,72,0,76,0,79,0, 77,76,74,0,72,0,0,0, 69,0,74,0,77,0,81,0, 79,77,76,0,79,0,0,0],
      bass: [48,0,55,0,48,0,55,0, 53,0,60,0,53,0,60,0, 50,0,57,0,50,0,57,0, 55,0,62,0,55,0,62,0] },
    egg: { bpm: 100, lw: 'triangle', lv: 0.11, bw: 'triangle', bv: 0.13, short: true,
      lead: [84,0,88,0,91,88,84,0, 86,0,89,0,93,89,86,0, 84,0,88,0,91,0,96,0, 95,0,91,0,86,0,0,0],
      bass: [60,0,0,0,67,0,0,0, 62,0,0,0,65,0,0,0, 60,0,0,0,67,0,0,0, 55,0,0,0,59,0,0,0] }
  };
  var JINGLES = {   // [start (s), midi, length (s), wave]
    appear: [[0,72,.09,'square'],[.08,76,.09,'square'],[.16,79,.09,'square'],[.24,84,.25,'square']],
    warning: [[0,45,.5,'square'],[.55,44,.7,'square']],
    poison: [[0,62,.1,'triangle'],[.1,58,.1,'triangle'],[.2,55,.22,'triangle']],
    zap: [[0,96,.05,'square'],[.06,91,.05,'square'],[.12,96,.05,'square'],[.18,91,.08,'square']],
    sleep: [[0,79,.25,'triangle'],[.3,74,.25,'triangle'],[.6,67,.4,'triangle']],
    cure: [[0,76,.08,'triangle'],[.08,81,.08,'triangle'],[.16,88,.2,'triangle']],
    item: [[0,84,.12,'triangle'],[.07,88,.12,'triangle'],[.14,91,.12,'triangle'],[.21,96,.35,'triangle']],
    rage: [[0,57,.18,'square'],[.18,56,.18,'square'],[.36,55,.5,'square']],
    victory: [[0,72,.1,'square'],[.1,72,.1,'square'],[.2,72,.1,'square'],[.3,72,.3,'square'],[.62,68,.3,'square'],[.94,70,.3,'square'],[1.26,72,.7,'square']],
    defeat: [[0,67,.3,'triangle'],[.3,64,.3,'triangle'],[.6,60,.3,'triangle'],[.9,55,.8,'triangle']],
    level: [[0,72,.08,'square'],[.08,76,.08,'square'],[.16,79,.08,'square'],[.24,84,.12,'square'],[.38,79,.08,'square'],[.46,84,.4,'square']],
    rank: [[0,67,.12,'square'],[.14,67,.12,'square'],[.28,67,.12,'square'],[.42,72,.5,'square'],[.42,76,.5,'triangle'],[.95,79,.6,'square'],[.95,84,.6,'triangle']],
    card: [[0,88,.15,'triangle'],[.1,93,.4,'triangle']],
    evolve: [[0,60,.1,'triangle'],[.08,64,.1,'triangle'],[.16,67,.1,'triangle'],[.24,72,.1,'triangle'],[.32,76,.1,'triangle'],[.4,79,.1,'triangle'],[.48,84,.5,'square']]
  };
  function soundOn() { return !!S && S.sound !== 0; }
  function audio() {
    if (!soundOn()) return null;
    if (!AC) {
      var C = window.AudioContext || window.webkitAudioContext;
      if (!C) return null;
      try { AC = new C(); } catch (e) { return null; }
      master = AC.createGain(); master.gain.value = 0.9; master.connect(AC.destination);
      document.addEventListener('visibilitychange', function () { if (AC) { if (document.hidden) AC.suspend(); else if (seq) AC.resume(); } });
    }
    if (AC.state === 'suspended') AC.resume();
    return AC;
  }
  function tone(t, midi, dur, wave, vol, out) {
    var o = AC.createOscillator(), g = AC.createGain();
    o.type = wave; o.frequency.value = 440 * Math.pow(2, (midi - 69) / 12);
    g.gain.setValueAtTime(0.0001, t);
    g.gain.exponentialRampToValueAtTime(vol, t + 0.012);
    g.gain.exponentialRampToValueAtTime(0.0001, t + dur);
    o.connect(g); g.connect(out || master);
    o.start(t); o.stop(t + dur + 0.03);
  }
  function siren(t, out) {   // two rising-falling sweeps
    var o = AC.createOscillator(), g = AC.createGain();
    o.type = 'sawtooth';
    o.frequency.setValueAtTime(520, t);
    o.frequency.linearRampToValueAtTime(880, t + 0.45); o.frequency.linearRampToValueAtTime(520, t + 0.9);
    o.frequency.linearRampToValueAtTime(880, t + 1.35); o.frequency.linearRampToValueAtTime(520, t + 1.8);
    g.gain.setValueAtTime(0.0001, t); g.gain.exponentialRampToValueAtTime(0.03, t + 0.05);
    g.gain.setValueAtTime(0.03, t + 1.7); g.gain.exponentialRampToValueAtTime(0.0001, t + 1.85);
    o.connect(g); g.connect(out || master); o.start(t); o.stop(t + 1.9);
  }
  function bgm(name) {
    wantTheme = name;
    if (!audio() || (seq && seq.name === name)) return;
    bgmFade();
    var th = THEMES[name], bus = AC.createGain(), step = 60 / th.bpm / 2;
    bus.gain.setValueAtTime(0.0001, AC.currentTime);
    bus.gain.exponentialRampToValueAtTime(1, AC.currentTime + 0.4);
    bus.connect(master);
    var s = seq = { name: name, bus: bus, n: 0, next: AC.currentTime + 0.08 };
    s.timer = setInterval(function () {
      while (s.next < AC.currentTime + 0.2) {
        var L = th.lead[s.n % th.lead.length], B = th.bass[s.n % th.bass.length];
        if (L) tone(s.next, L, th.short ? step * 1.6 : step * 0.9, th.lw, th.lv, bus);
        if (B) tone(s.next, B, step * 1.8, th.bw, th.bv, bus);
        if (th.siren && s.n % th.siren === 0) siren(s.next, bus);
        s.next += step; s.n++;
      }
    }, 50);
  }
  function bgmFade() {
    if (!seq) return;
    var s = seq; seq = null;
    clearInterval(s.timer);
    try { s.bus.gain.cancelScheduledValues(AC.currentTime); s.bus.gain.setValueAtTime(s.bus.gain.value || 0.5, AC.currentTime);
      s.bus.gain.exponentialRampToValueAtTime(0.0001, AC.currentTime + 0.6); } catch (e) {}
    setTimeout(function () { try { s.bus.disconnect(); } catch (e) {} }, 800);
  }
  function bgmStop() { wantTheme = null; bgmFade(); }
  function sfx(name) {
    var j = JINGLES[name];
    if (!j || !audio()) return;
    var t0 = AC.currentTime + 0.03;
    j.forEach(function (n) { tone(t0 + n[0], n[1], n[2], n[3], n[3] === 'square' ? 0.07 : 0.14); });
    if (name === 'warning' || name === 'rage') siren(t0);
  }
  function soundBtn(cls) {
    var b = h('button', { class: 'rpg-sound' + (cls ? ' ' + cls : ''), type: 'button' });
    function paint() { var on = soundOn(); b.textContent = on ? T('♪ 音樂開', '♪ Music on') : T('♪ 靜音', '♪ Muted'); b.setAttribute('aria-pressed', on ? 'true' : 'false'); b.title = on ? T('關掉音樂和音效', 'Turn off music and sound') : T('打開音樂和音效', 'Turn on music and sound'); }
    b.addEventListener('click', function (ev) {
      ev.stopPropagation();
      S.sound = soundOn() ? 0 : 1; saveState(); paint();
      if (!soundOn()) { var keep = wantTheme; bgmFade(); wantTheme = keep; }
      else if (wantTheme) bgm(wantTheme);
    });
    paint();
    return b;
  }

  var STORY = [
    { art: 'plant', kicker: 'PROLOGUE', text: T('這裡是一座無菌藥廠。潔淨室日夜運轉，每一瓶藥都要在看不見的戰場上，守住「無菌」兩個字。', 'This is a sterile drug plant. Its cleanrooms run day and night, and every vial must hold one word on an invisible battlefield: sterile.') },
    { art: 'mobs', kicker: 'ALERT', alarm: true, text: T('某天夜裡，警報響起。破洞手套、落菌、漏簽……污染魔物從每一個被忽略的細節裡爬了出來。', 'One night, the alarms went off. Torn gloves, settling microbes, missing signatures... contamination monsters crawled out of every detail anyone had ignored.') },
    { art: 'bosses', kicker: 'THREE ISLES', text: T('牠們的首領盤據在三座島上：微粒魔、生物膜王、內毒素龍。不打倒牠們，廠區就無法放行任何一批產品。', 'Their leaders hold three islands: the Particle Fiend, the Biofilm King and the Endotoxin Dragon. Until they fall, the plant cannot release a single batch.') },
    { art: 'heroes', kicker: 'YOU', text: T('你是剛報到的新進人員。武器不是劍，是法規和指引：讀懂一份文件，就多一份收復廠區的力量。', 'You are the new hire, just reporting for duty. Your weapons are not swords but regulations and guidance: every document you understand is more power to take the plant back.') },
    { art: 'egg', kicker: 'PARTNER', text: T('報到第一天，有人塞給你一顆蛋。「讀完第一節，牠就會孵化，陪你一路打上去。」', 'On your first day, someone hands you an egg. "Finish your first section and it will hatch. It will fight beside you all the way."') }
  ];
  function openPrologue(done) {
    var i = 0, finishType = null, ended = false;
    var art = h('div', { class: 'rpg-story-art' });
    var kicker = h('span', { class: 'rpg-story-kicker' });
    var text = h('p', { class: 'rpg-story-text', 'aria-live': 'polite' });
    var dots = h('div', { class: 'rpg-story-dots', 'aria-hidden': 'true' });
    var hint = h('span', { class: 'rpg-story-hint', text: T('點一下繼續', 'Tap to continue') });
    var skip = h('button', { class: 'rpg-story-skip', type: 'button', text: T('跳過 ▸▸', 'Skip ▸▸'), onclick: function (e) { e.stopPropagation(); end(); } });
    var wrap = h('div', { class: 'rpg-story', role: 'dialog', 'aria-modal': 'true', 'aria-label': T('序章', 'Prologue') }, [
      skip, soundBtn(), h('div', { class: 'rpg-story-panel' }, [art, h('div', { class: 'rpg-story-box' }, [kicker, text, h('div', { class: 'rpg-story-foot' }, [dots, hint])])])
    ]);
    function show() {
      var p = STORY[i];
      clear(art); clear(dots);
      var a = storyArt(p.art); if (a) art.appendChild(a);
      kicker.textContent = p.kicker;
      bgm(p.art === 'mobs' ? 'alarm' : p.art);   // one theme per page: plant, alarm, bosses, heroes, egg
      wrap.classList.toggle('is-alarm', !!p.alarm);
      wrap.classList.remove('is-in'); void wrap.offsetWidth; wrap.classList.add('is-in');
      STORY.forEach(function (_, k) { dots.appendChild(h('i', { class: k === i ? 'is-on' : '' })); });
      hint.textContent = i === STORY.length - 1 ? T('點一下建立角色', 'Tap to create your character') : T('點一下繼續', 'Tap to continue');
      finishType = typewrite(text, p.text);
    }
    function advance() {
      if (text.classList.contains('is-typing')) { finishType(); return; }   // first tap finishes the line
      if (++i >= STORY.length) end(); else show();
    }
    function onKey(e) {
      if (e.key === 'Escape') end();
      else if (e.key === 'Enter' || e.key === ' ' || e.key === 'ArrowRight') { e.preventDefault(); advance(); }
    }
    function end() {
      if (ended) return; ended = true;
      if (finishType) finishType();
      bgmStop();
      document.removeEventListener('keydown', onKey);
      wrap.classList.add('is-out');
      setTimeout(function () { if (wrap.parentNode) wrap.parentNode.removeChild(wrap); if (done) done(); }, CALM ? 0 : 380);
    }
    wrap.addEventListener('click', advance);
    document.addEventListener('keydown', onKey);
    document.body.appendChild(wrap);
    show();
    try { skip.focus({ preventScroll: true }); } catch (e) {}
  }

  /* ---------- language picker: shown once, before the prologue ---------- */
  function openLangPicker(next) {
    var m;
    function pick(l) {
      setLang(l);
      if ((l === 'en') !== EN) { location.reload(); return; }
      m.close(); next();
    }
    m = modal([
      h('span', { class: 'rpg-tag', text: 'LANGUAGE' }),
      h('h2', {}, ['選擇語言', h('small', { class: 'rpg-lang-sub', text: 'Choose your language' })]),
      h('div', { class: 'rpg-lang-grid' }, [
        h('button', { class: 'rpg-lang-pick', type: 'button', onclick: function () { pick('zh'); } }, [h('b', { text: '繁體中文' }), h('span', { text: '介面、劇情和題目都用中文' })]),
        h('button', { class: 'rpg-lang-pick', type: 'button', onclick: function () { pick('en'); } }, [h('b', { text: 'English' }), h('span', { text: 'Interface, story and questions in English' })])
      ]),
      h('p', { class: 'rpg-note', text: '之後可以按右上角的按鈕切換。 You can switch later with the button in the top-right corner.' })
    ], { sticky: true });
  }

  /* ---------- onboarding / edit character ---------- */
  function openOnboarding() {
    if (!S.profile && !S.flags.prologue && lsGet(LANG_KEY) == null) {
      openLangPicker(openOnboarding);
      return;
    }
    if (!S.profile && !S.flags.prologue) {
      openPrologue(function () { S.flags.prologue = 1; saveState(); openOnboarding(); });
      return;
    }
    var editing = !!S.profile;
    var pick = { cls: editing ? S.profile.cls : 'production', avatar: editing ? S.profile.avatar : 'production', sex: editing ? profileSex() : 'f' };
    var nick = h('input', { class: 'rpg-input', type: 'text', maxlength: '16', placeholder: T('暱稱（最多 16 字）', 'Nickname (up to 16 characters)'), value: editing ? S.profile.nick : '' });
    var classGrid = h('div', { class: 'rpg-pick-grid' });
    var avatarGrid = h('div', { class: 'rpg-pick-grid rpg-pick-avatars' });
    var sexRow = h('div', { class: 'rpg-modal-actions rpg-pick-sex' });
    var sexNote = h('p', { class: 'rpg-note' });
    var hint = h('p', { class: 'rpg-hint' });
    var preview = h('img', { class: 'rpg-pick-hero', alt: '' });
    var avatarTouched = editing;

    function draw() {
      clear(classGrid); clear(avatarGrid); clear(sexRow);
      [['f', T('女性', 'Female')], ['m', T('男性', 'Male')]].forEach(function (o) {
        sexRow.appendChild(h('button', {
          type: 'button', class: 'rpg-btn' + (pick.sex === o[0] ? '' : ' rpg-btn-ghost'), 'aria-pressed': pick.sex === o[0] ? 'true' : 'false',
          onclick: function () { if (pick.sex === o[0]) return; pick.sex = o[0]; pick.avatar = artFor(pick.cls, o[0]); avatarTouched = false; draw(); }
        }, [o[1]]));
      });
      DEPTS.forEach(function (dep) {
        classGrid.appendChild(h('button', {
          type: 'button', class: 'rpg-pick' + (pick.cls === dep.id ? ' is-on' : ''), style: '--c:' + dep.color,
          onclick: function () { pick.cls = dep.id; if (!avatarTouched) pick.avatar = artFor(dep.id, pick.sex); draw(); }
        }, [
          h('b', { text: CLASS_META[dep.id].job }),
          h('span', { text: dName(dep) }),
          h('small', { text: M.docs && hasQuiz(dep) ? T('有章節挑戰', 'Section challenges') : T('閱讀通關', 'Reading only') })
        ]));
      });
      avatarChoices().filter(function (id) { return sexOf(id) === pick.sex; }).forEach(function (id) {
        var base = deptById(id.split('-')[0]);
        avatarGrid.appendChild(h('button', {
          type: 'button', class: 'rpg-pick-avatar' + (pick.avatar === id ? ' is-on' : ''), 'aria-label': (base ? CLASS_META[base.id].job : '') + T('頭像', ' avatar'),
          onclick: function () { pick.avatar = id; avatarTouched = true; draw(); }
        }, [h('img', { src: avatarImg(id), alt: '' })]));
      });
      var dep = deptById(pick.cls);
      sexNote.hidden = sexOf(artFor(pick.cls, pick.sex)) === pick.sex;
      sexNote.textContent = CLASS_META[dep.id].job + T('還沒有男性立繪，角色頁暫時顯示女性版本。', ' has no male artwork yet; the character page shows the female look for now.');
      hint.textContent = dName(dep) + T('：', ': ') + (EN ? dep.description : dep.descriptionZh || dep.description);
      preview.src = heroFor(pick.cls, pick.avatar, pick.sex);
      preview.alt = CLASS_META[dep.id].job + T('立繪預覽', ' portrait preview');
    }
    function hasQuiz(dep) {
      return dep.tiers.some(function (t) { return t.docs.some(function (x) { return M.docs[x.key] && M.docs[x.key].quiz; }); });
    }
    draw();

    var m = modal([
      h('span', { class: 'rpg-tag', text: editing ? 'CHARACTER' : 'WELCOME' }),
      h('h2', { text: editing ? T('編輯角色', 'Edit character') : T('建立你的角色', 'Create your character') }),
      h('p', { class: 'rpg-modal-lead', text: editing ? T('轉職不會清掉進度，只會換主線任務。', 'Changing class keeps your progress; only the main quest changes.') : T('選一個職業決定主線任務，之後可以隨時轉職。讀完章節、通過章節挑戰都會得到經驗值、文件卡和寵物進化。', 'Your class sets your main quest, and you can switch any time. Reading sections and passing section challenges earn XP, document cards and companion evolutions.') }),
      h('h3', { text: T('1. 職業', '1. Class') }), classGrid, hint,
      h('div', { class: 'rpg-pick-split' }, [
        h('div', { class: 'rpg-pick-main' }, [
          h('h3', { text: T('2. 性別', '2. Gender') }), sexRow, sexNote,
          h('h3', { text: T('3. 頭像', '3. Avatar') }), avatarGrid,
          h('h3', { text: T('4. 暱稱', '4. Nickname') }), nick
        ]),
        h('figure', { class: 'rpg-pick-preview' }, [preview, h('figcaption', { text: T('角色頁立繪', 'Character portrait') })])
      ]),
      h('p', { class: 'rpg-note', text: T('角色和進度只存在這台裝置的瀏覽器裡，不會上傳。清除瀏覽器資料會一併清掉。', 'Your character and progress live only in this device\'s browser and are never uploaded. Clearing browser data erases them too.') }),
      h('button', {
        class: 'rpg-btn rpg-btn-wide', type: 'button', text: editing ? T('儲存', 'Save') : T('開始冒險', 'Start adventure'),
        onclick: function () {
          var name = (nick.value || '').trim().slice(0, 16) || T('見習生', 'Trainee');
          var first = !S.profile;
          S.profile = { nick: name, cls: pick.cls, avatar: pick.avatar, sex: pick.sex };
          saveState();
          m.close();
          refresh(first);   // first time: adopt existing history without a flood of rewards
          if (first && G.xp > 0) toast(T('已帶入你之前的閱讀紀錄：', 'Imported your earlier reading history: ') + G.xp + ' XP');
        }
      })
    ], { cls: 'rpg-modal-wide rpg-modal-top' });
    if (editing || !matchMedia('(max-width: 560px)').matches) nick.focus({ preventScroll: true });   // no keyboard pop-up on a phone's first screen
    var box = document.querySelector('.rpg-modal-top .rpg-modal-box'); if (box) box.scrollTop = 0;
  }

  /* ---------- pet hatch ---------- */
  function openHatch() {
    var grid = h('div', { class: 'rpg-pet-grid' });
    var m = modal([
      h('span', { class: 'rpg-tag', text: 'HATCH' }),
      h('h2', { text: T('蛋有動靜了', 'The egg is stirring') }),
      h('p', { class: 'rpg-modal-lead', text: T('你讀完了第一節。選一隻夥伴，牠會隨著你升階而進化。', 'You finished your first section. Choose a companion; it evolves as you rank up.') }),
      h('img', { class: 'rpg-egg rpg-wobble', src: eggImg(), alt: T('蛋', 'Egg') }),
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
        h('small', { text: '→ ' + PETS[line].stages.slice(1).join(' → ') })]));
    });
  }

  /* ---------- rewards: toast + cut-in ---------- */
  function toast(text) {
    var host = document.getElementById('rpg-toasts') || document.body.appendChild(h('div', { id: 'rpg-toasts', class: 'rpg-toasts', 'aria-live': 'polite' }));
    var t = h('div', { class: 'rpg-toast', text: text });
    host.appendChild(t);
    setTimeout(function () { t.classList.add('is-out'); setTimeout(function () { if (t.parentNode) t.parentNode.removeChild(t); }, 400); }, 2600);
  }

  /* ---------- full-screen scenes for the two big moments: pet evolution, rank-up ---------- */
  var RANK_LINES = [
    '',
    T('你不再是只會照著 SOP 做的新人了。啟程之島的霧散開，修練之島在前方等你。', 'You are no longer the new hire who just follows the SOP. The mist over the Isle of Beginnings lifts, and the Isle of Training waits ahead.'),
    T('同事開始拿問題來問你。偏差、變更、稽核，你都知道該翻哪一份文件。核心之島浮現了。', 'Colleagues start bringing you their questions. Deviations, changes, audits: you know which document to open. The Core Isle rises into view.'),
    T('你成了大家口中「那個專家」。整座廠區的無菌防線，有一段是你守住的。', 'You have become "the expert" everyone mentions. Part of the plant\'s sterile defense line is yours to hold.')
  ];
  function scene(e, done) {
    var steps = [], timers = [], over = false;
    var art = h('div', { class: 'rpg-scene-art' });
    var kicker = h('span', { class: 'rpg-story-kicker' });
    var title = h('strong', { class: 'rpg-scene-title' });
    var text = h('p', { class: 'rpg-story-text' });
    var hint = h('span', { class: 'rpg-story-hint', text: T('點一下繼續', 'Tap to continue') });
    var wrap = h('div', { class: 'rpg-story rpg-scene is-' + e.kind, role: 'dialog', 'aria-modal': 'true', 'aria-live': 'polite' }, [
      h('button', { class: 'rpg-story-skip', type: 'button', text: T('跳過 ▸▸', 'Skip ▸▸'), onclick: function (ev) { ev.stopPropagation(); end(); } }),
      soundBtn(),
      h('div', { class: 'rpg-story-panel' }, [art, h('div', { class: 'rpg-story-box' }, [kicker, title, text, h('div', { class: 'rpg-story-foot' }, [h('span'), hint])])])
    ]);
    var finishType = function () {};
    function say(k, t, line) { kicker.textContent = k; title.textContent = t; finishType = typewrite(text, line); }

    if (e.kind === 'pet') {
      var pet = PETS[S.pet.line], from = pet.stages[e.n - 2] || pet.stages[0], to = pet.stages[e.n - 1];
      var oldImg = h('img', { class: 'rpg-scene-old', src: petImg(S.pet.line, Math.max(1, e.n - 1)), alt: '' });
      var newImg = h('img', { class: petCls('rpg-scene-new'), src: petImg(S.pet.line, e.n), alt: to });
      art.appendChild(h('div', { class: 'rpg-scene-evo', style: '--c:' + pet.color }, [h('i', { class: 'rpg-scene-ring' }), oldImg, newImg, h('i', { class: 'rpg-scene-flash' })]));
      steps = [
        function () { say(T('……？', '...?'), from, T('「' + pet.voice + '……」' + from + '的身體開始發光了。', '"' + pet.voice + '..." ' + from + ' begins to glow.')); },
        function () { wrap.classList.add('is-glow'); say('EVOLVING', from, T('光越來越亮——', 'The light grows brighter...')); },
        function () { wrap.classList.add('is-burst'); sfx('evolve'); say('EVOLUTION', to, T(from + '進化成了' + to + '！「' + pet.voice + pet.voice + '！」', from + ' evolved into ' + to + '! "' + pet.voice + ' ' + pet.voice + '!"')); burstIn(art); }
      ];
    } else {
      var dep = deptById(S.profile.cls), job = CLASS_META[S.profile.cls].job, zone = ZONES[Math.min(e.n, ZONES.length - 1)];
      art.appendChild(h('div', { class: 'rpg-scene-rank', style: '--c:' + (dep ? dep.color : '#fbbf24') }, [
        h('i', { class: 'rpg-scene-rays' }),
        h('img', { class: 'rpg-scene-hero', src: classImg(S.profile.avatar), alt: '' }),
        h('span', { class: 'rpg-scene-badge' }, [h('b', { text: L(RANKS[e.n]) }), h('small', { text: EN ? RANKS[e.n].zh : RANKS[e.n].en })])
      ]));
      steps = [
        function () { say('RANK UP', T(RANKS[e.n - 1].zh + job + '　→', L(RANKS[e.n - 1]) + ' ' + job + ' →'), T(S.profile.nick + '，你的努力被看見了。', S.profile.nick + ', your hard work has been noticed.')); },
        function () { wrap.classList.add('is-stamp'); sfx('rank'); say('RANK UP', L(RANKS[e.n]) + (EN ? ' ' : '') + job, RANK_LINES[e.n] || ''); burstIn(art); },
        function () { say('NEXT', L(zone), e.n < ZONES.length ? T('下一站：' + zone.zh + '。守在那裡的是「' + zone.boss + '」。', 'Next stop: ' + L(zone) + '. Guarding it is the ' + zone.boss + '.') : T('所有島嶼都收復了。接下來，換你帶新人。', 'Every island has been reclaimed. Now it is your turn to train the new hires.')); }
      ];
    }
    steps[0].auto = 2000;
    if (e.kind === 'pet') steps[1].auto = 1700;
    var i = 0;
    function run() {
      steps[i]();
      hint.textContent = i === steps.length - 1 ? T('點一下關閉', 'Tap to close') : T('點一下繼續', 'Tap to continue');
      var me = i;
      if (steps[i].auto && !CALM) timers.push(setTimeout(function () { if (i === me && !over) { finishType(); go(); } }, steps[i].auto));
    }
    function go() { if (++i >= steps.length) end(); else run(); }
    function burstIn(host) {
      if (CALM) return;
      var box = h('span', { class: 'rpg-burst rpg-scene-burst', 'aria-hidden': 'true' });
      for (var k = 0; k < 22; k++) {
        var ang = k / 22 * Math.PI * 2, r = 90 + Math.random() * 90;
        box.appendChild(h('i', { style: '--x:' + Math.round(Math.cos(ang) * r) + 'px;--y:' + Math.round(Math.sin(ang) * r) + 'px;--d:' + (Math.random() * 0.25).toFixed(2) + 's' }));
      }
      host.appendChild(box);
      timers.push(setTimeout(function () { if (box.parentNode) box.parentNode.removeChild(box); }, 1500));
    }
    function advance() {
      if (text.classList.contains('is-typing')) { finishType(); return; }
      go();
    }
    function onKey(ev) {
      if (ev.key === 'Escape') end();
      else if (ev.key === 'Enter' || ev.key === ' ' || ev.key === 'ArrowRight') { ev.preventDefault(); advance(); }
    }
    function end() {
      if (over) return; over = true;
      finishType();
      timers.forEach(clearTimeout);
      document.removeEventListener('keydown', onKey);
      wrap.classList.add('is-out');
      setTimeout(function () { if (wrap.parentNode) wrap.parentNode.removeChild(wrap); done(); }, CALM ? 0 : 380);
    }
    wrap.addEventListener('click', advance);
    document.addEventListener('keydown', onKey);
    document.body.appendChild(wrap);
    if (CALM) wrap.classList.add('is-glow', 'is-burst', 'is-stamp');
    run();   // the transformation steps play on their own; taps only speed them up
  }

  var cutQueue = [], cutBusy = false;
  function showRewards(events) {
    var big = [];
    events.forEach(function (e) {
      if (e.kind === 'xp') { toast('+' + e.n + ' XP'); palCheer(); }
      else big.push(e);
    });
    if (big.length > 4) {   // many at once (e.g. several docs cleared elsewhere): one summary
      var cards = big.filter(function (e) { return e.kind === 'card'; }).length;
      big = big.filter(function (e) { return e.kind !== 'card'; }).slice(0, 3);
      if (cards) toast(T('獲得 ' + cards + ' 張文件卡', 'Got ' + cards + ' document card' + (cards > 1 ? 's' : '')));
    }
    big.forEach(function (e) { cutQueue.push(e); });
    if (!cutBusy) nextCut();
  }
  function nextCut() {
    var e = cutQueue.shift();
    if (!e) { cutBusy = false; return; }
    cutBusy = true;
    if ((e.kind === 'pet' || e.kind === 'shinypet' || e.kind === 'hatch') && !S.pet) { nextCut(); return; }
    if ((e.kind === 'pet' && e.n > 1) || (e.kind === 'rank' && e.n > 0)) { scene(e, nextCut); return; }
    var kicker = '', title = '', sub = '', art = null;
    if (e.kind === 'level') { kicker = 'LEVEL UP'; title = 'Lv ' + e.n; sub = T('等級提升', 'Level up'); art = h('img', { src: classImg(S.profile.avatar), alt: '' }); }
    else if (e.kind === 'mile') { kicker = 'MILESTONE'; title = 'Lv ' + e.lv + T(' 里程碑', ' milestone'); sub = T('獲得 ', 'Reward: ') + e.text; art = matImg('boss') ? h('img', { src: matImg('boss'), alt: '' }) : h('img', { src: classImg(S.profile.avatar), alt: '' }); }
    else if (e.kind === 'rank') {
      kicker = 'RANK UP'; title = L(RANKS[e.n]) + (EN ? ' ' : '') + CLASS_META[S.profile.cls].job; sub = T(RANKS[e.n].en + ' 階級達成', RANKS[e.n].en + ' rank reached');
      art = h('img', { src: heroImg(), alt: '' });
    } else if (e.kind === 'card') {
      var st = G.docs[e.key];
      kicker = e.shiny ? 'SHINY' : e.upgrade ? 'AWAKENED' : 'NEW CARD'; title = st.doc.code || st.doc.short;
      sub = e.shiny ? T('異色文件卡：每一節都一次全對', 'Shiny card: every section aced on the first try') : e.awakened ? T('文件卡覺醒', 'Card awakened') : T('獲得文件卡', 'New document card');
      art = h('div', { class: 'rpg-cut-card rpg-flip' }, [cardEl(st, false)]);
    } else if (e.kind === 'title') {
      var t = G.titles.filter(function (x) { return x.id === e.id; })[0];
      kicker = 'TITLE'; title = EN ? t.zh + (e.lv === 2 ? ' Master' : ' Adept') : t.zh + (e.lv === 2 ? '大師' : '修習者'); sub = T('獲得稱號', 'Title earned');
    } else if (e.kind === 'pet') {
      kicker = 'EVOLUTION'; title = PETS[S.pet.line].stages[e.n - 1]; sub = T('夥伴進化了', 'Your companion evolved');
      art = h('img', { class: petCls('rpg-pop'), src: petImg(S.pet.line, e.n), alt: '' });
    } else if (e.kind === 'shinypet') {
      kicker = 'SHINY'; title = PETS[S.pet.line].stages[G.petStage - 1]; sub = T('夥伴變成異色型態', 'Your companion turned shiny');
      art = h('img', { class: 'rpg-pop rpg-shiny', src: petImg(S.pet.line, G.petStage), alt: '' });
    } else if (e.kind === 'secret') {
      var sc = SECRETS.filter(function (x) { return x.id === e.id; })[0];
      kicker = 'SECRET'; title = sc.zh; sub = T('隱藏稱號：', 'Hidden title: ') + sc.how;
    } else if (e.kind === 'bossdown') {
      var dz = ZONES[e.ti] || ZONES[ZONES.length - 1], dimg = asset('boss-' + (e.ti + 1));
      kicker = 'BOSS DEFEATED'; title = dz.boss; sub = T('升階試煉通過　+', 'Rank trial passed · +') + XP_BOSS + ' XP';
      art = dimg ? h('img', { class: 'rpg-pop rpg-defeated', src: dimg, alt: '' }) : null;
    } else if (e.kind === 'craft') {
      var cg = gearById(e.id);
      kicker = 'CRAFTED'; title = cg.zh; sub = cg.eff;
      art = h('img', { class: 'rpg-pop', src: gearImg(cg), alt: '' });
    } else if (e.kind === 'hatch') {
      kicker = 'HATCHED'; title = PETS[S.pet.line].stages[0]; sub = T('新的夥伴加入', 'A new companion joins you');
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
    sfx({ level: 'level', rank: 'rank', card: 'card', title: 'card', secret: 'rank', pet: 'evolve', shinypet: 'evolve',
      hatch: 'evolve', bossdown: 'victory', craft: 'item' }[e.kind]);
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
      if (main.getBoundingClientRect().bottom - window.innerHeight < 240) {
        S.end[pageDocKey] = 1; saveState();
        palSay(T('整份讀到最後了，辛苦了！', 'You made it to the very end. Nice work!'), 1);
      }
    }
    window.addEventListener('scroll', function () {
      clearTimeout(timer);
      timer = setTimeout(function () { checkEnd(); refresh(); palTick(); }, 900);  // after the page's own 500 ms save
    }, { passive: true });

    initPal(d);

    if (d.quiz) {
      loadBank(pageDocKey).then(function (bank) {
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

  /* ---------- battles (section challenges and boss fights) ----------
     One question at a time. A right answer takes one HP off the foe, a wrong one
     takes a heart off the player. Hearts = mistakes the 80 % pass mark allows + 1,
     so running out of hearts is exactly failing the pass mark. */
  function heartsFor(n) { return n - Math.ceil(n * PASS) + 1; }
  function shuffle(a) {
    for (var i = a.length - 1; i > 0; i--) { var j = Math.floor(Math.random() * (i + 1)), t = a[i]; a[i] = a[j]; a[j] = t; }
    return a;
  }
  /* A copy of the question with its options in a fresh order, relabelled A, B, C ... so a retry
     cannot be passed by remembering letters. Questions whose options name a letter or "以上皆是", or whose
     explanation still names an option letter ("B 錯在…") after names like "Grade A" are removed, keep their order. */
  var LETTER = /(^|[^A-Za-z0-9(\-.\/§°&])[A-E](?=$|[^A-Za-z0-9)\-.\/&=])/;
  var OPT_REF = /以上|皆是|皆非|all of the above|none of the above|both [A-E]\b/i;
  /* Letters that are names, not option references: "Grade A 或 B", "Annex A", "Type C", "D 值",
     "膠塞 A 批", "B. diminuta", an English sentence starting with the article "A". */
  var LETTER_NAME = /\b(Grades?|Annex|Appendix|Type|Tests?|Level|Diagram|Fluid|Attachment|Company|Method|Process|Table|Class|Zone|Part|Category|Schedule|Site|Lot|Batch|Product|Supplier|Room|Line|Area|Phase|Stage|Step|Condition|Case|Scenario|Sample|ALCOA\s*的)\s*([A-E](\s*(\/|,|、|和|與|及|或|or|and|to)\s*)?)+|(查核表|標示為|分類為)\s*[A-E]|(^|[.。「"]\s*)A (?=[a-z])|[A-E](?=\s*[=×])|[A-E]\. [a-z]|[A-E]\s*(value|_T|值|批)|中 A =/gi;
  function loadBank(key) {
    var zh = fetch(ROOT + 'rpg/quiz/' + key + '.json').then(function (res) { return res.json(); });
    if (!EN) return zh;
    var en = fetch(ROOT + 'rpg/quiz/en/' + key + '.json').then(function (r) { return r.ok ? r.json() : null; }).catch(function () { return null; });
    return Promise.all([zh, en]).then(function (v) {
      var bank = v[0], tr = {};
      ((v[1] && v[1].questions) || []).forEach(function (t) { tr[t.id] = t; });
      bank.questions = (bank.questions || []).map(function (q) {
        var t = tr[q.id], c = {};
        for (var k in q) c[k] = q[k];
        c._keep = keepOrder(q);
        if (!t) return c;
        ['topic', 'question', 'explanation', 'reference'].forEach(function (k) { if (t[k]) c[k] = t[k]; });
        if (t.options) { c.options = {}; Object.keys(q.options || {}).forEach(function (k) { c.options[k] = t.options[k] || q.options[k]; }); }
        return c;
      });
      return bank;
    });
  }
  function keepOrder(q) {
    var keys = Object.keys(q.options || {});
    var opts = keys.map(function (k) { return q.options[k]; }).join(' ');
    return OPT_REF.test(opts) || LETTER.test(opts) || LETTER.test((q.explanation || '').replace(LETTER_NAME, ' '));
  }
  function mixOpts(q) {
    var keys = Object.keys(q.options || {});
    if (keys.length < 2 || !q.options[q.correct]) return q;
    if (q._keep !== undefined ? q._keep : keepOrder(q)) return q;
    var order = shuffle(keys.slice()), out = {}, c = {};
    for (var k in q) c[k] = q[k];
    order.forEach(function (from, i) { out[keys[i]] = q.options[from]; if (from === q.correct) c.correct = keys[i]; });
    c.options = out;
    return c;
  }
  function battleHearts(kind, n) {
    var extra = kind === 'boss' ? (wearing('armor') ? 2 : wearing('cape') ? 1 : 0) : (wearing('armor') ? 1 : 0);
    return heartsFor(n) + extra;
  }
  /* Where a question's source section lives: on this page, or on its document page. */
  function sourceHref(q) {
    var key = q.docKey || pageDocKey, d = key && M.docs[key];
    if (!d || !q.section) return null;
    return key === pageDocKey ? '#' + q.section : ROOT + d.file + '#' + q.section;
  }
  /* The questions just missed, with the right answer and the explanation. */
  function missedList(qs, open) {
    return h('details', { class: 'rpg-missed', open: open }, [
      h('summary', { text: T('這次答錯的 ' + qs.length + ' 題', qs.length + (qs.length > 1 ? ' questions' : ' question') + ' missed this time') }),
      h('ol', {}, qs.map(function (q) {
        var src = sourceHref(q);
        return h('li', {}, [
          h('p', { class: 'rpg-missed-q', text: q.question }),
          h('p', { class: 'rpg-missed-a', text: T('正解 ', 'Answer ') + q.correct + T('：', ': ') + q.options[q.correct] }),
          h('p', { class: 'rpg-missed-e', text: q.explanation || '' }),
          q.reference || src ? h('small', {}, [
            q.reference ? h('span', { text: T('出處：', 'Source: ') + q.reference + T('　', '  ') }) : null,
            src ? h('a', { href: src, text: T('回原文 →', 'Back to source →') }) : null
          ]) : null
        ]);
      }))
    ]);
  }
  /* ---------- Battle attack effects, themed by each side's attribute ----------
     Visual only: the answer is already scored when an attack starts. */
  var FXG = {   // projectile glyphs (inline SVG, painted in the attacker's colour)
    seal: '<svg viewBox="0 0 40 40"><circle cx="20" cy="20" r="17" fill="none" stroke="currentColor" stroke-width="3"/><circle cx="20" cy="20" r="12" fill="currentColor" opacity=".3"/><path d="M20 9l3.2 6.6 7.3 1-5.3 5.1 1.3 7.2L20 25.5l-6.5 3.4 1.3-7.2-5.3-5.1 7.3-1z" fill="currentColor"/></svg>',
    drop: '<svg viewBox="0 0 24 24"><path d="M12 2C8.5 7.5 5 11 5 15a7 7 0 0 0 14 0c0-4-3.5-7.5-7-13z" fill="currentColor"/><ellipse cx="9.5" cy="14" rx="1.6" ry="2.6" fill="#fff" opacity=".75"/></svg>',
    gear: '<svg viewBox="0 0 40 40"><circle cx="20" cy="20" r="15" fill="none" stroke="currentColor" stroke-width="6" stroke-dasharray="5.89 5.89"/><circle cx="20" cy="20" r="12" fill="currentColor"/><circle cx="20" cy="20" r="4.5" fill="#fff"/></svg>',
    page: '<svg viewBox="0 0 24 30"><path d="M2 2h14l6 6v20H2z" fill="#fff" stroke="currentColor" stroke-width="2"/><path d="M6 12h12M6 17h12M6 22h8" stroke="currentColor" stroke-width="2"/></svg>',
    crate: '<svg viewBox="0 0 40 40"><rect x="3" y="3" width="34" height="34" rx="3" fill="#c98a2b" stroke="#5c3d0e" stroke-width="3"/><path d="M5 5l30 30M35 5L5 35" stroke="#5c3d0e" stroke-width="3"/><rect x="1.5" y="1.5" width="37" height="37" rx="4" fill="none" stroke="currentColor" stroke-width="2"/></svg>',
    wave: '<svg viewBox="0 0 30 40"><path d="M8 6a18 18 0 0 1 0 28M16 2a24 24 0 0 1 0 36" fill="none" stroke="currentColor" stroke-width="3.5" stroke-linecap="round"/></svg>',
    bubble: '<svg viewBox="0 0 20 20"><circle cx="10" cy="10" r="8" fill="currentColor" fill-opacity=".3" stroke="currentColor" stroke-width="2"/><circle cx="7" cy="7" r="2" fill="#fff"/></svg>',
    spore: '<svg viewBox="0 0 24 24"><path d="M12 1v5M12 18v5M1 12h5M18 12h5M4 4l3.5 3.5M16.5 16.5L20 20M20 4l-3.5 3.5M7.5 16.5L4 20" stroke="currentColor" stroke-width="2.4" stroke-linecap="round"/><circle cx="12" cy="12" r="6" fill="currentColor"/></svg>',
    shard: '<svg viewBox="0 0 24 24"><path d="M3 20L10 2l11 9-8 3z" fill="currentColor" fill-opacity=".6" stroke="#fff" stroke-width="1.5" stroke-linejoin="round"/></svg>',
    ghost: '<svg viewBox="0 0 40 44"><path d="M6 42V18a14 14 0 0 1 28 0v24l-4.6-4-4.7 4-4.7-4-4.7 4-4.7-4z" fill="currentColor" fill-opacity=".85"/><circle cx="15" cy="18" r="3" fill="#1e1b4b"/><circle cx="25" cy="18" r="3" fill="#1e1b4b"/><path d="M15 28q5-4 10 0" stroke="#1e1b4b" stroke-width="2" fill="none"/></svg>',
    blob: '<svg viewBox="0 0 40 40"><path d="M20 3c9 0 16 6 16 15 0 6-3 9-2 14 1 4-4 6-7 4-3-2-5 2-9 2S9 38 7 35c-3-4 0-7-2-12C2 13 10 3 20 3z" fill="currentColor"/><circle cx="14" cy="14" r="3.5" fill="#fff" opacity=".6"/></svg>',
    orb: '<svg viewBox="0 0 20 20"><circle cx="10" cy="10" r="8.5" fill="currentColor"/><circle cx="10" cy="10" r="4" fill="#fff" opacity=".75"/></svg>',
    bat: '<svg viewBox="0 0 40 24"><path d="M20 6l3-5 1 6 6-4 10 3-6 4 2 7-7-3-4 6-5-5-5 5-4-6-7 3 2-7-6-4 10-3 6 4 1-6z" fill="#fff" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/><path d="M14 10h12" stroke="currentColor" stroke-width="1.5"/></svg>',
    dust: '<svg viewBox="0 0 10 10"><circle cx="5" cy="5" r="4" fill="currentColor"/></svg>'
  };
  var FXM = {   // marks stamped over the target on impact
    stamp: '<svg viewBox="0 0 80 80"><circle cx="40" cy="40" r="34" fill="none" stroke="currentColor" stroke-width="5"/><circle cx="40" cy="40" r="26" fill="none" stroke="currentColor" stroke-width="2"/><path d="M26 41l10 10 20-22" fill="none" stroke="currentColor" stroke-width="7" stroke-linecap="round" stroke-linejoin="round"/></svg>',
    cut: '<svg viewBox="0 0 80 80"><path d="M10 16L70 64M70 16L10 64" stroke="currentColor" stroke-width="5" stroke-linecap="round"/><path d="M10 16L70 64M70 16L10 64" stroke="#fff" stroke-width="1.5" stroke-linecap="round"/></svg>',
    claw: '<svg viewBox="0 0 80 80"><g fill="none" stroke-linecap="round"><path d="M18 8q10 30-2 64M40 4q10 34-2 72M62 8q10 30-2 64" stroke="currentColor" stroke-width="7"/><path d="M18 8q10 30-2 64M40 4q10 34-2 72M62 8q10 30-2 64" stroke="#fff" stroke-width="2"/></g></svg>',
    cross: '<svg viewBox="0 0 80 80"><rect x="6" y="6" width="68" height="68" rx="8" fill="none" stroke="currentColor" stroke-width="5"/><path d="M24 24l32 32M56 24L24 56" stroke="currentColor" stroke-width="9" stroke-linecap="round"/></svg>',
    crack: '<svg viewBox="0 0 80 80"><path d="M40 4l-6 20 10 8-14 14 8 10-6 20M44 32l18-6 10 8M30 46l-18 4-6 12" fill="none" stroke="currentColor" stroke-width="3.5" stroke-linejoin="round"/><path d="M40 4l-6 20 10 8-14 14 8 10-6 20" fill="none" stroke="#fff" stroke-width="1.2"/></svg>',
    bolt: '<svg viewBox="0 0 80 80"><path d="M46 2L18 44h18l-8 34 34-46H44l10-30z" fill="currentColor" stroke="#fff" stroke-width="2.5" stroke-linejoin="round"/></svg>',
    gear: '<svg viewBox="0 0 40 40"><circle cx="20" cy="20" r="15" fill="none" stroke="currentColor" stroke-width="6" stroke-dasharray="5.89 5.89"/><circle cx="20" cy="20" r="11" fill="none" stroke="currentColor" stroke-width="3"/></svg>',
    film: '<svg viewBox="0 0 80 80"><path d="M40 6c18 0 32 10 32 28 0 10-6 14-4 24 2 8-8 14-16 10-6-3-8 4-14 4s-10-6-16-4c-8 3-14-4-11-12 3-7-3-12-3-22C8 16 22 6 40 6z" fill="currentColor" fill-opacity=".45" stroke="currentColor" stroke-width="2.5"/><circle cx="28" cy="28" r="4" fill="#fff" opacity=".5"/><circle cx="52" cy="46" r="3" fill="#fff" opacity=".4"/></svg>',
    shield: '<svg viewBox="0 0 80 80"><path d="M40 4l32 18v36L40 76 8 58V22z" fill="#7dd3fc" fill-opacity=".35" stroke="#38bdf8" stroke-width="4"/><path d="M40 16l22 12v24L40 64 18 52V28z" fill="none" stroke="#fff" stroke-width="2" opacity=".8"/></svg>'
  };
  // m (motion): arc | fly | stream | swarm | helix | drop | beam | cone | strike
  var FX_YOU = {
    qa:          { el: T('品保系', 'Quality'), c: '#2563eb', skill: T('品質封印', 'Quality Seal'), m: 'arc', g: 'seal', n: 1, size: 48, spin: 1, imp: { mark: 'stamp', ring: 1, dots: 10 } },
    qc:          { el: T('品管系', 'Lab'), c: '#7c3aed', skill: T('試劑滴定', 'Reagent Titration'), m: 'arc', g: 'drop', n: 3, size: 28, imp: { dots: 14, ring: 1, tint: 'stain' } },
    production:  { el: T('生產系', 'Production'), c: '#059669', skill: T('無菌充填流', 'Aseptic Fill Stream'), m: 'stream', g: 'bubble', n: 12, size: 15, imp: { dots: 12, tint: 'mist', flash: 1 } },
    engineering: { el: T('工程系', 'Engineering'), c: '#d97706', skill: T('齒輪迴旋斬', 'Gear Spin Slash'), m: 'fly', g: 'gear', n: 2, size: 42, spin: 1, imp: { mark: 'gear', dots: 14, dc: '#fde047', ring: 1 } },
    ra:          { el: T('法規系', 'Regulatory'), c: '#dc2626', skill: T('法典頁刃', 'Codex Page Blade'), m: 'swarm', g: 'page', n: 6, size: 30, spin: 1, imp: { mark: 'cut', dots: 6 } },
    warehouse:   { el: T('倉儲系', 'Logistics'), c: '#0891b2', skill: T('物料空投', 'Supply Drop'), m: 'drop', g: 'crate', n: 1, size: 58, imp: { ring: 2, dots: 12, dc: '#c98a2b', quake: 1 } },
    techservice: { el: T('技服系', 'Tech Service'), c: '#8b5cf6', skill: T('調律聲波', 'Tuning Wave'), m: 'stream', g: 'wave', n: 4, size: 42, aim: 1, imp: { ring: 3, flash: 1 } },
    bt:          { el: T('數位系', 'Digital'), c: '#0f766e', skill: T('數據洪流', 'Data Flood'), m: 'stream', g: 'bits', n: 14, size: 16, imp: { tint: 'glitch', dots: 8 } }
  };
  var FX_MOB = [
    { skill: T('破洞抓擊', 'Torn Claw'), c: '#64748b', m: 'strike', imp: { mark: 'claw', dots: 6 } },
    { skill: T('芽孢連射', 'Spore Barrage'), c: '#65a30d', m: 'fly', g: 'spore', n: 5, size: 24, spin: 1, imp: { dots: 12, tint: 'stain' } },
    { skill: T('碎玻璃投擲', 'Glass Shard Toss'), c: '#0ea5e9', m: 'arc', g: 'shard', n: 4, size: 30, spin: 1, imp: { mark: 'crack', dots: 8, dc: '#bae6fd' } },
    { skill: T('漏簽詛咒', 'Unsigned Curse'), c: '#a855f7', m: 'swarm', g: 'ghost', n: 1, size: 56, imp: { mark: 'cross', dc: '#ef4444', ring: 1 } },
    { skill: T('落菌孢雨', 'Fallout Spore Rain'), c: '#d97706', m: 'drop', g: 'spore', n: 8, size: 18, imp: { dots: 10, tint: 'stain' } },
    { skill: T('混濁黏液彈', 'Turbid Slime Shot'), c: '#84cc16', m: 'arc', g: 'blob', n: 1, size: 40, imp: { mark: 'film', dots: 10 } },
    { skill: T('死角電擊', 'Dead-Leg Shock'), c: '#eab308', m: 'beam', beam: 'bolt', imp: { mark: 'bolt', tint: 'zap', flash: 1 } },
    { skill: T('交叉污染', 'Cross-Contamination'), c: '#ec4899', m: 'helix', g: 'orb', n: 2, size: 28, imp: { ring: 2, dots: 10, tint: 'stain' } },
    { skill: T('缺失通知', 'Finding Notice'), c: '#ef4444', m: 'swarm', g: 'bat', n: 5, size: 36, imp: { mark: 'cut', dots: 6 } },
    { skill: T('系統當機', 'System Crash'), c: '#06b6d4', m: 'beam', beam: 'glitch', imp: { tint: 'glitch', dots: 8 } }
  ];
  var FX_BOSS = [
    { el: T('微粒系', 'Particle'), skill: T('微粒風暴', 'Particle Storm'), c: '#94a3b8', m: 'stream', g: 'dust', n: 30, size: 7, imp: { tint: 'mist', dots: 18, quake: 1 } },
    { el: T('生物膜系', 'Biofilm'), skill: T('生物膜吞噬', 'Biofilm Engulf'), c: '#65a30d', m: 'arc', g: 'blob', n: 3, size: 36, imp: { mark: 'film', tint: 'film', dots: 12, quake: 1 } },
    { el: T('熱原系', 'Pyrogen'), skill: T('熱原吐息', 'Pyrogen Breath'), c: '#f97316', m: 'cone', imp: { tint: 'burn', dots: 18, dc: '#fde047', flash: 1, quake: 1 } }
  ];
  var FX_PLAIN = { skill: T('衝撞', 'Tackle'), c: '#64748b', m: 'strike', imp: { dots: 8 } };
  function fxYou(skill) {
    var cls = skill || (S.profile && S.profile.cls), sp = FX_YOU[cls] || FX_YOU.qa, d = deptById(cls);
    return d && d.color ? fxWith(sp, { c: d.color }) : sp;
  }
  function fxWith(a, b) { var r = {}, k; for (k in a) r[k] = a[k]; for (k in b) r[k] = b[k]; return r; }

  /* One attack: wind-up on the attacker, a projectile (or beam / breath / lunge) to the target,
     then the impact. onHit runs at impact — or straight away when motion is reduced. */
  function attackFx(f, onHit) {
    var arena = f.arena, sp = f.sp;
    if (CALM || !arena.isConnected) { onHit(); return; }
    var A = arena.getBoundingClientRect(), a = f.from.getBoundingClientRect(), b = f.to.getBoundingClientRect();
    var x0 = a.left + a.width / 2 - A.left, y0 = a.top + a.height / 2 - A.top;
    var x1 = b.left + b.width / 2 - A.left, y1 = b.top + b.height / 2 - A.top;
    var dx = x1 - x0, dy = y1 - y0, dist = Math.sqrt(dx * dx + dy * dy), ang = Math.atan2(dy, dx) * 180 / Math.PI;
    var layer = h('div', { class: 'rpg-fx', 'aria-hidden': 'true', style: '--c:' + sp.c });
    arena.appendChild(layer);
    function px(v) { return Math.round(v) + 'px'; }
    function add(el, life) { layer.appendChild(el); return el; }

    // skill name over the attacker + wind-up
    layer.appendChild(h('span', { class: 'rpg-fx-skill', style: 'left:' + px(x0) + ';top:' + px(Math.max(16, a.top - A.top + 6)), text: sp.skill }));
    var caster = f.fromBox;
    var lunge = sp.m === 'strike';
    caster.style.setProperty('--lx', px(dx * 0.42));
    caster.classList.remove('rpg-fx-cast', 'rpg-fx-lunge'); void caster.offsetWidth;
    caster.classList.add(lunge ? 'rpg-fx-lunge' : 'rpg-fx-cast');
    setTimeout(function () { caster.classList.remove('rpg-fx-cast', 'rpg-fx-lunge'); }, 700);

    var lead = lunge ? 160 : 220, travel, last = 0;
    if (sp.m === 'beam' || sp.m === 'cone') {
      travel = sp.m === 'cone' ? 420 : 260;
      var beam = h('span', { class: 'rpg-fx-beam is-' + (sp.beam || sp.m), style: 'left:' + px(x0) + ';top:' + px(y0) + ';width:' + px(dist) +
        ';--ang:' + ang.toFixed(1) + 'deg;--d:' + lead + 'ms;--t:' + travel + 'ms' });
      if (sp.beam === 'bolt') {
        var pts = [], segs = Math.max(5, Math.round(dist / 26));
        for (var s = 0; s <= segs; s++) pts.push((s / segs * 100).toFixed(1) + ',' + (s === 0 || s === segs ? 20 : 20 + (Math.random() - 0.5) * 30).toFixed(1));
        beam.innerHTML = '<svg viewBox="0 0 100 40" preserveAspectRatio="none"><polyline points="' + pts.join(' ') + '" fill="none" stroke="currentColor" stroke-width="5" vector-effect="non-scaling-stroke" stroke-linejoin="round"/><polyline points="' + pts.join(' ') + '" fill="none" stroke="#fff" stroke-width="2" vector-effect="non-scaling-stroke" stroke-linejoin="round"/></svg>';
      }
      add(beam);
    } else if (!lunge) {
      travel = sp.m === 'drop' ? 560 : sp.m === 'stream' ? 440 : 500;
      var n = sp.n || 1, gap = sp.m === 'stream' ? (n > 16 ? 22 : 45) : sp.m === 'drop' ? 70 : sp.m === 'swarm' ? 80 : 110;
      for (var k = 0; k < n; k++) {
        var d = lead + k * gap, sx = x0, sy = y0, ex = x1 + (Math.random() - 0.5) * 22, ey = y1 + (Math.random() - 0.5) * 26, hgt = -12;
        if (sp.m === 'arc') hgt = -Math.min(100, dist * 0.4) - k * 10;
        else if (sp.m === 'swarm') hgt = (Math.random() - 0.5) * 140;
        else if (sp.m === 'helix') hgt = k % 2 ? 70 : -70;
        else if (sp.m === 'stream') { hgt = (Math.random() - 0.5) * 18; sy = y0 + (Math.random() - 0.5) * 16; }
        else if (sp.m === 'drop') { ex = x1 + (Math.random() - 0.5) * (n > 1 ? 90 : 0); sx = ex + (Math.random() - 0.5) * 30; sy = -sp.size; hgt = 0; }
        if (sp.m !== 'drop') {   // keep the whole flight inside the arena
          var top = sp.size / 2 + 4, bot = A.height - sp.size / 2 - 4;
          hgt = Math.max(top - Math.min(sy, ey), Math.min(bot - Math.max(sy, ey), hgt));
        }
        var p = h('span', { class: 'rpg-fx-p' + (sp.m === 'drop' ? ' is-drop' : '') + (sp.spin ? ' is-spin' : '') + (sp.m === 'swarm' ? ' is-flap' : ''),
          style: '--x0:' + px(sx) + ';--y0:' + px(sy) + ';--x1:' + px(ex) + ';--y1:' + px(ey) + ';--h:' + px(hgt) + ';--s:' + sp.size + 'px;--t:' + travel + 'ms;--d:' + d + 'ms;--a:' + (sp.aim ? ang.toFixed(1) : 0) + 'deg' });
        var core = h('i', {});
        if (sp.g === 'bits') { core.className = 'is-bits'; core.textContent = Math.random() < 0.5 ? '1' : '0'; }
        else core.innerHTML = FXG[sp.g] || FXG.orb;
        p.appendChild(h('b', {}, [core]));
        add(p);
        last = Math.max(last, k * gap);
      }
    }
    var at = lead + (lunge ? 120 : travel) + (sp.m === 'stream' ? last * 0.5 : sp.m === 'drop' ? last * 0.5 : 0);
    setTimeout(function () { impact(); onHit(); }, at);
    setTimeout(function () { if (layer.parentNode) layer.parentNode.removeChild(layer); }, at + 1300 + last);

    function impact() {
      var imp = f.blocked ? { mark: 'shield', ring: 1, dots: 8, dc: '#7dd3fc' } : sp.imp || {};
      var size = Math.max(64, Math.min(170, b.width * 0.95)), at0 = 'left:' + px(x1) + ';top:' + px(y1);
      if (imp.flash) add(h('span', { class: 'rpg-fx-flash', style: at0 + ';--m:' + px(size * 1.6) }));
      for (var r = 0; r < (imp.ring || 0); r++) add(h('span', { class: 'rpg-fx-ring', style: at0 + ';--m:' + px(size) + ';--d:' + (r * 110) + 'ms' + (imp.dc ? ';--c:' + imp.dc : '') }));
      if (imp.mark) {
        var mk = h('span', { class: 'rpg-fx-mark is-' + imp.mark, style: at0 + ';--m:' + px(size) + (imp.dc && !f.blocked ? ';--c:' + imp.dc : '') });
        mk.innerHTML = FXM[imp.mark];
        add(mk);
      }
      for (var q = 0; q < (imp.dots || 0); q++) {
        var t = q / imp.dots * Math.PI * 2 + Math.random() * 0.4, rr = size * (0.45 + Math.random() * 0.4);
        add(h('span', { class: 'rpg-fx-dot', style: at0 + ';--x:' + px(Math.cos(t) * rr) + ';--y:' + px(Math.sin(t) * rr) + ';--d:' + Math.round(Math.random() * 90) + 'ms' + (imp.dc ? ';--c:' + imp.dc : '') }));
      }
      if (f.crit && !f.blocked) {
        for (var cr = 0; cr < 2; cr++) add(h('span', { class: 'rpg-fx-ring', style: at0 + ';--m:' + px(size * 1.3) + ';--d:' + (160 + cr * 120) + 'ms;--c:#facc15' }));
        add(h('span', { class: 'rpg-fx-crit', style: 'left:' + px(x1) + ';top:' + px(Math.max(18, y1 - size * 0.62)), text: T('弱點！效果絕佳', 'Weak point! Critical hit') }));
      }
      if (imp.tint && !f.blocked && !f.tint.closest('.is-dissolve')) {
        var te = f.tint, cl = 'rpg-fx-t-' + imp.tint;
        te.classList.remove(cl); void te.offsetWidth; te.classList.add(cl);
        setTimeout(function () { te.classList.remove(cl); }, 1300);
      }
      if (imp.quake && f.root) {
        f.root.classList.remove('rpg-fx-quake'); void f.root.offsetWidth; f.root.classList.add('rpg-fx-quake');
        setTimeout(function () { f.root.classList.remove('rpg-fx-quake'); }, 500);
      }
    }
  }

  function runBattle(host, o) {
    var n = o.questions.length, hearts = o.hearts || battleHearts(o.kind, n), i = 0, score = 0, wrong = 0, lost = 0, last = [];
    var missed = [], cleansed = 0, fresh = 0;
    // Boss, elite and guardian fights pay for every question answered right for the first time, won or lost,
    // so the extra hearts and shields from gear, skills and items mean more of the pool gets seen.
    var payFresh = o.kind === 'boss' || o.kind === 'guard';
    var weak = o.kind === 'boss' && (o.weak != null ? !!o.weak : isWeak(o.zone, o.skill));
    var shield = wearing('gloves') ? 1 : 0;
    /* Status effects (scored fights only; drills and patrol stay calm). Hearts and shields only, never the score:
       foe 中毒 (2 right in a row): each turn ticks, every 2nd tick heals you 1 heart; a wrong answer clears it.
       foe 麻痺 (3 right in a row): for the rest of the fight, 25% that a wrong answer costs nothing.
       foe 睡眠 (counter skill): wrong answers cost nothing while asleep; 1/3 chance to wake each turn.
       you 中毒 (2 wrong in a row): each turn eats a shield, else every 2nd tick 1 heart, but only spare hearts
       (never the ones you need to still reach 80%, never the last one); a right answer cures it. */
    var STAT = o.kind !== 'drill', allowed = n - Math.ceil(PASS * n);
    var ss = STATUS_SKILL[o.skill || (S.profile && S.profile.cls)] || {}, ft = FOE_TRAIT[o.target] || {};
    if (FOE_TRAIT[o.target] && !S.intel[o.target]) { S.intel[o.target] = Date.now(); saveState(); }   // first fight reveals its traits
    var psnEvery = ft.psn === 'immune' ? 0 : ft.psn === 'weak' ? 1 : ft.psn === 'resist' ? 3 : 2, psnAt = ss.psn ? 1 : 2;
    var parChance = ft.par === 'immune' ? 0 : (ss.par ? 0.4 : 0.25) + (ft.par === 'weak' ? 0.15 : ft.par === 'resist' ? -0.13 : 0);
    var parAt = ss.par ? 2 : 3, wakeChance = ft.slp === 'weak' ? 1 / 5 : ft.slp === 'resist' ? 1 / 2 : 1 / 3, told = {}, once = { guard: 1, aid: 1 };
    if (ss.slp && !weak) wakeChance = Math.min(0.75, wakeChance * 2);   // specialty sleep is light; a counter skill's sleep is not
    var st = { fp: 0, fpt: 0, par: false, slp: STAT && (weak || !!ss.slp), yp: 0, ypt: 0, runR: 0, runW: 0 };
    var foeStat = h('span', { class: 'rpg-status' }), youStat = h('span', { class: 'rpg-status' });
    if (weak) hearts++;
    var item = o.item && itemVs(o.item, o.target) ? o.item : null;
    if (item) shield += item.shield || 1;
    var foeImg = o.foeImg ? h('img', { class: 'rpg-foe-img', src: o.foeImg, alt: o.foe }) : h('span', { class: 'rpg-foe-img rpg-foe-blank', style: o.fx ? '--c:' + o.fx.c : null, text: T('？', '?') });
    var hp = h('span', { class: 'rpg-hp', role: 'meter', 'aria-label': T(o.foe + '的血量', o.foe + ' HP'), 'aria-valuemin': 0, 'aria-valuemax': n });
    var heartsEl = h('span', { class: 'rpg-hearts', 'aria-label': T('你的生命', 'Your hearts') });
    var foeFx = o.fx || (o.kind === 'boss' ? FX_BOSS[o.zone] : FX_MOB[o.cluster]) || FX_PLAIN, youFx = fxYou(o.skill);
    var foeEl = o.kind === 'boss' ? (foeFx.el || T('魔王', 'Boss')) : o.cluster >= 0 ? T(CLUSTER_ZH[o.cluster] + '系', CLUSTER_ZH[o.cluster]) : T('無屬性', 'Neutral');
    var foeBox = h('div', { class: 'rpg-foe' }, [foeImg, h('b', { text: o.foe }),
      h('span', { class: 'rpg-elem', style: '--c:' + foeFx.c, text: foeEl + T('・', ' · ') + foeFx.skill }), hp, foeStat]);
    var worn = Object.keys(SLOTS).map(function (sl) { return S.gear.on[sl] && gearById(S.gear.on[sl]); }).filter(Boolean);
    var youAv = avatarEl();
    var you = h('div', { class: 'rpg-you' }, [youAv, h('b', { text: S.profile ? S.profile.nick : T('你', 'You') }),
      h('span', { class: 'rpg-elem' + (weak ? ' is-weak' : ''), style: '--c:' + youFx.c, text: (weak ? T('弱點 ', 'Weak point · ') : '') + youFx.el + T('・', ' · ') + youFx.skill }), heartsEl, youStat,
      worn.length ? h('span', { class: 'rpg-worn' }, worn.map(function (g) { return h('img', { src: gearImg(g), alt: g.zh, title: g.zh + T('：', ': ') + g.eff }); })) : null]);
    var stage = h('div', { class: 'rpg-battle-stage' });
    var arena = h('div', { class: 'rpg-arena' + (o.kind === 'boss' ? ' is-boss' : o.kind === 'guard' ? ' is-guard' : '') }, [foeBox, h('span', { class: 'rpg-vs', text: 'VS' }), you,
      o.kind === 'drill' ? null : soundBtn('rpg-sound-arena')]);
    var raged = false, battleEl = h('div', { class: 'rpg-battle' }, [arena, stage]);
    clear(host);
    host.appendChild(battleEl);

    /* A banner across the arena: the entrance, the boss's mid-fight line. Tap to skip. */
    function banner(kicker, line, ms, then) {
      var b = h('div', { class: 'rpg-arena-banner' + (o.kind === 'boss' ? ' is-boss' : '') }, [
        h('span', { text: kicker }), line ? h('p', {}) : null
      ]);
      var over = false, finishLine = function () {};
      function out() {
        if (over) return; over = true; finishLine();
        b.classList.add('is-out');
        setTimeout(function () { if (b.parentNode) b.parentNode.removeChild(b); if (then) then(); }, CALM ? 0 : 260);
      }
      b.addEventListener('click', out);
      arena.appendChild(b);
      if (line) finishLine = typewrite(b.lastChild, line);
      setTimeout(out, CALM ? Math.min(ms, 1400) : ms);
    }
    function intro() {
      if (o.kind === 'drill') { ask(); return; }
      arena.classList.add('is-intro');
      stage.appendChild(h('p', { class: 'rpg-battle-count', text: T('戰鬥即將開始…（點橫幅可略過）', 'The battle is about to begin... (tap the banner to skip)') }));
      setTimeout(function () { arena.classList.remove('is-intro'); }, 900);
      // let the foe finish charging in before the banner covers the top of the arena
      setTimeout(function () {
        sfx(o.kind === 'boss' ? 'warning' : 'appear');
        if (o.kind === 'boss') banner(T('WARNING　魔王 ' + o.foe + ' 現身' + (weak ? '　｜　弱點擊破：' + youFx.skill + '，對手睡著了' : st.slp ? '　｜　催眠：對手睡著了' : ''), 'WARNING · Boss ' + o.foe + ' appears' + (weak ? ' | Weak-Point Break: ' + youFx.skill + ', the foe is asleep' : st.slp ? ' | Sleep: the foe is asleep' : '')), o.line || '', 3200, function () {
          if (!item) { ask(); return; }
          var fx = h('span', { class: 'rpg-item-fx', style: '--c:' + item.c }, [itemImgEl(item), h('b', { text: item.zh })]);
          arena.appendChild(fx); sfx('item');
          banner(T('使用道具：', 'Item used: ') + item.zh, item.use + T('（護盾 +' + (item.shield || 1) + '）', ' (shield +' + (item.shield || 1) + ')'), 2000, function () { if (fx.parentNode) fx.parentNode.removeChild(fx); ask(); });
        });
        else banner(T('野生的 ' + o.foe + ' 出現了！', 'A wild ' + o.foe + ' appears!'), null, 1400, ask);
      }, CALM ? 0 : 750);
    }
    function burst(el) {
      if (CALM) return;
      var box = h('span', { class: 'rpg-burst', 'aria-hidden': 'true' });
      for (var k = 0; k < 14; k++) {
        var ang = k / 14 * Math.PI * 2, r = 50 + Math.random() * 50;
        box.appendChild(h('i', { style: '--x:' + Math.round(Math.cos(ang) * r) + 'px;--y:' + Math.round(Math.sin(ang) * r - 20) + 'px;--d:' + (Math.random() * 0.2).toFixed(2) + 's' }));
      }
      el.appendChild(box);
      setTimeout(function () { if (box.parentNode) box.parentNode.removeChild(box); }, 1400);
    }

    function meters() {
      clear(hp);
      for (var k = 0; k < n; k++) hp.appendChild(h('i', { class: k < n - score ? 'is-on' : '' }));
      hp.setAttribute('aria-valuenow', String(n - score));
      clear(heartsEl);
      for (var j = 0; j < hearts; j++) heartsEl.appendChild(h('i', { class: j < hearts - lost ? 'is-on' : '', text: '♥' }));
      for (var sh = 0; sh < shield; sh++) heartsEl.appendChild(h('i', { class: 'rpg-shield', text: '◆', title: T('護盾：答錯一次不扣心（仍算答錯）', 'Shield: one wrong answer costs no heart (it still counts as wrong)') }));
      heartsEl.setAttribute('aria-label', T('你的生命 ' + (hearts - lost) + ' / ' + hearts + (shield ? '，護盾 ' + shield : ''), 'Your hearts ' + (hearts - lost) + ' / ' + hearts + (shield ? ', shields ' + shield : '')));
      if (!STAT) return;
      clear(foeStat); clear(youStat);
      if (st.fp) foeStat.appendChild(h('i', { class: 'is-psn', text: T('中毒', 'Poison'), title: T((psnEvery === 1 ? '每回合' : '每 ' + psnEvery + ' 回合') + '幫你回 1 顆心；你答錯就解毒', 'Heals you 1 heart ' + (psnEvery === 1 ? 'every turn' : 'every ' + psnEvery + ' turns') + '; a wrong answer cures it') }));
      if (st.par) foeStat.appendChild(h('i', { class: 'is-par', text: T('麻痺', 'Paralysis'), title: T('你答錯時 ' + Math.round(parChance * 100) + '% 對手動不了', 'When you answer wrong, ' + Math.round(parChance * 100) + '% chance the foe cannot move') }));
      if (st.slp) foeStat.appendChild(h('i', { class: 'is-slp', text: T('睡眠', 'Sleep'), title: T('睡著時你答錯不扣心；每回合 ' + Math.round(wakeChance * 100) + '% 機率醒來', 'While it sleeps, wrong answers cost no heart; ' + Math.round(wakeChance * 100) + '% chance to wake each turn') }));
      if (st.yp) youStat.appendChild(h('i', { class: 'is-psn', text: T('中毒', 'Poison'), title: T('每回合侵蝕護盾或多出來的心；答對 1 題解毒', 'Each turn eats a shield or a spare heart; 1 right answer cures it') }));
      foeImg.classList.toggle('st-psn', !!st.fp); foeImg.classList.toggle('st-par', st.par); foeImg.classList.toggle('st-slp', st.slp);
      youAv.classList.toggle('st-psn', !!st.yp);
    }
    /* Start of each turn after the first: statuses tick. Returns the lines to show above the question. */
    function tick() {
      var msg = [];
      if (!STAT || i === 0) return msg;
      if (st.slp && Math.random() < wakeChance) { st.slp = false; msg.push(o.foe + T(' 醒來了！', ' woke up!')); hit(foeBox, 'is-hit', T('醒來', 'Awake')); }
      else if (st.slp) { msg.push(o.foe + T(' 還在睡。', ' is still asleep.')); hit(foeBox, 'is-zz', 'Zzz'); }
      if (st.fp) {
        st.fpt++;
        if (st.fpt % psnEvery === 0 && lost > 0) { lost--; msg.push(o.foe + T(' 受到毒傷，你吸回 1 顆心！', ' is hurt by poison. You drain back 1 heart!')); hit(you, 'is-heal', '♥+1'); }
        else msg.push(o.foe + T(' 受到毒傷。', ' is hurt by poison.'));
        hit(foeBox, 'is-psn', T('毒', 'PSN'));
        sfx('poison');
      }
      if (st.yp) {
        st.ypt++;
        var spare = (hearts - lost) - Math.max(1, allowed - wrong + 1);
        if (shield) { shield--; msg.push(T('毒素侵蝕了 1 面護盾。', 'Poison ate away 1 shield.')); hit(you, 'is-psn', '◆-1'); }
        else if (st.ypt % 2 === 0 && spare > 0 && hearts - lost >= 2) { lost++; msg.push(T('你受到毒傷，失去 1 顆心。', 'Poison hurts you. You lose 1 heart.')); hit(you, 'is-psn', '♥-1'); }
        else if (st.ypt % 2 === 0) msg.push(T('你咬牙撐住了毒傷。', 'You grit your teeth through the poison.'));
        else msg.push(T('毒在你身上蔓延……答對一題就能解毒。', 'The poison spreads... One right answer will cure it.'));
        sfx('poison');
      }
      meters();
      return msg;
    }
    /* After an answer: streaks apply / clear statuses. Returns lines to add under the explanation. */
    function afterAnswer(ok) {
      var msg = [];
      if (!STAT) return msg;
      if (ok) {
        st.runR++; st.runW = 0;
        if (st.yp) {
          st.yp = 0; st.ypt = 0; msg.push(T('你解毒了！', 'You are cured!')); sfx('cure');
          if (ss.aid && lost > 0) { lost--; msg.push(T('急救補給：回 1 顆心！', 'First Aid: +1 heart!')); hit(you, 'is-heal', '♥+1'); }
        }
        if (ss.aid && st.runR === 3 && once.aid && lost > 0) { once.aid = 0; lost--; msg.push(T('急救補給：三連對，回 1 顆心！', 'First Aid: 3 in a row, +1 heart!')); hit(you, 'is-heal', '♥+1'); }
        if (st.runR === psnAt && !st.fp) {
          if (!psnEvery) { if (!told.psn) { told.psn = 1; msg.push(o.foe + T(' 免疫中毒！', ' is immune to poison!')); } }
          else { st.fp = 1; st.fpt = 0; msg.push(T((psnAt === 1 ? '毒專長！' : '連續答對！') + o.foe + ' 中毒了！' + (psnEvery === 1 ? '效果絕佳！' : psnEvery === 3 ? '效果不太好…' : ''), (psnAt === 1 ? 'Poison specialty! ' : 'Streak! ') + o.foe + ' is poisoned!' + (psnEvery === 1 ? ' Highly effective!' : psnEvery === 3 ? ' Not very effective...' : ''))); sfx('poison'); }
        }
        if (st.runR === parAt && !st.par) {
          if (parChance <= 0) { if (!told.par) { told.par = 1; msg.push(o.foe + T(' 免疫麻痺！', ' is immune to paralysis!')); } }
          else { st.par = true; msg.push(T((parAt === 2 ? '連續答對！' : '三連對！') + o.foe + ' 麻痺了，可能動不了！' + (parChance >= 0.4 ? '效果絕佳！' : parChance < 0.2 ? '效果不太好…' : ''), (parAt === 2 ? 'Streak! ' : '3 in a row! ') + o.foe + ' is paralyzed and may not move!' + (parChance >= 0.4 ? ' Highly effective!' : parChance < 0.2 ? ' Not very effective...' : ''))); sfx('zap'); }
        }
      } else {
        st.runW++; st.runR = 0;
        if (st.fp) { st.fp = 0; st.fpt = 0; msg.push(o.foe + T(' 趁機解毒了。', ' took the chance to cure itself.')); }
        if (st.runW === 2 && !st.yp) {
          if (ss.guard) {
            if (once.guard) { once.guard = 0; shield++; msg.push(T('封印護體：毒對你無效，還化成 1 面護盾！', 'Sealed Guard: poison has no effect and turns into 1 shield!')); hit(you, 'is-heal', '◆+1'); meters(); }
            else if (!told.yp) { told.yp = 1; msg.push(T('封印護體：毒對你無效！', 'Sealed Guard: poison has no effect on you!')); }
          }
          else { st.yp = 1; st.ypt = 0; msg.push(T('連續答錯，你中毒了！答對一題就能解毒。', 'Two wrong in a row: you are poisoned! One right answer will cure it.')); sfx('poison'); }
        }
      }
      setTimeout(meters, CALM ? 0 : 700);
      return msg;
    }
    function hit(el, cls, text) {
      if (el.classList.contains('is-dissolve')) return;
      el.classList.remove(cls); void el.offsetWidth; el.classList.add(cls);
      setTimeout(function () { el.classList.remove(cls); }, 500);
      var f = h('span', { class: 'rpg-dmg', text: text });
      el.appendChild(f);
      setTimeout(function () { if (f.parentNode) f.parentNode.removeChild(f); }, 900);
    }
    /* Both sides attack in their own attribute; the HP / heart meters drop when the blow lands. */
    function strike(mine, then, blocked) {
      attackFx({ arena: arena, root: battleEl, sp: mine ? youFx : foeFx, blocked: blocked, crit: mine && weak,
        from: mine ? youAv : foeImg, fromBox: mine ? you : foeBox,
        to: mine ? foeImg : youAv, tint: mine ? foeImg : youAv }, function () { then(); meters(); });
    }
    function ask() {
      var q = mixOpts(o.questions[i]), answered = false, tmsg = tick();
      clear(stage);
      var opts = h('div', { class: 'rpg-quiz-opts' });
      var back = wearing('bookmark') && sourceHref(q);
      var backLink = back ? h('a', { class: 'rpg-backsrc', href: back, hidden: true, text: T('法典書籤：回原文看這一節 →', 'Codex Bookmark: read this section in the source →') }) : null;
      var exp = h('div', { class: 'rpg-quiz-exp', hidden: true }, [
        h('p', { text: q.explanation || '' }),
        q.reference ? h('small', { text: T('出處：', 'Source: ') + q.reference }) : null,
        backLink
      ]);
      var next = h('button', { class: 'rpg-btn', type: 'button', hidden: true, onclick: function () {
        i++;
        if (i >= n || lost >= hearts) finish(); else ask();
      } });
      Object.keys(q.options).forEach(function (letter) {
        opts.appendChild(h('button', { type: 'button', class: 'rpg-opt', 'data-l': letter, onclick: function () {
          if (answered) return;
          answered = true;
          var ok = letter === q.correct;
          Array.prototype.forEach.call(opts.children, function (btn) {
            btn.disabled = true;
            if (btn.getAttribute('data-l') === q.correct) btn.classList.add('is-right');
            else if (btn.getAttribute('data-l') === letter) btn.classList.add('is-wrong');
          });
          last.push(ok ? 1 : 0);
          if (!ok) missed.push(q);
          var clean = noteAnswer(q.docKey || pageDocKey, q, ok);
          if (clean) cleansed++;
          if (o.onAnswer) o.onAnswer(q, ok, clean);
          var dmg = clean ? T('淨化', 'Cleansed') : weak ? T('弱點 -1', 'Weak -1') : '-1', amsg = [];
          var qk = (q.docKey || pageDocKey) + '#' + q.id;
          if (ok && payFresh && q.id != null && !S.bossSeen[qk]) { S.bossSeen[qk] = 1; fresh++; S.bonus += XP_FRESH; saveState(); dmg = T('新題 +', 'New +') + XP_FRESH + ' XP'; }
          if (ok) { score++; strike(true, function () { hit(foeBox, 'is-hit', dmg); }); }
          else if (st.slp) { wrong++; hit(foeBox, 'is-zz', 'Zzz'); amsg.push(o.foe + T(' 睡著了，沒有反擊。', ' is asleep and does not strike back.')); }
          else if (st.par && Math.random() < parChance) { wrong++; hit(foeBox, 'is-par', T('麻痺', 'Paralyzed')); sfx('zap'); amsg.push(o.foe + T(' 麻痺了，動不了！', ' is paralyzed and cannot move!')); }
          else if (shield) { wrong++; shield--; strike(false, function () { hit(you, 'is-hurt', T('護盾', 'Shield')); }, true); }
          else { wrong++; lost++; strike(false, function () { hit(you, 'is-hurt', '♥-1'); }); }
          amsg = amsg.concat(afterAnswer(ok));
          if (amsg.length) exp.insertBefore(h('p', { class: 'rpg-status-msg', text: amsg.join(T('　', ' ')) }), exp.firstChild);
          if (!ok && backLink) backLink.hidden = false;
          if (o.kind === 'boss' && !raged && score >= Math.ceil(n / 2) && score < n) {
            raged = true; arena.classList.add('is-rage'); sfx('rage');
            banner(T('魔王暴走！', 'The boss goes berserk!'), o.rage || '', 2600, null);
          }
          exp.hidden = false;
          next.textContent = i + 1 >= n || lost >= hearts ? T('看結果', 'See results') : T('下一題', 'Next question');
          next.hidden = false;
          try { next.focus({ preventScroll: true }); } catch (e) {}
        } }, [h('b', { text: letter }), h('span', { text: q.options[letter] })]));
      });
      stage.appendChild(h('p', { class: 'rpg-battle-count', text: T('第 ' + (i + 1) + ' / ' + n + ' 題' + (q.docTitle ? '　出自：' + q.docTitle : ''), 'Question ' + (i + 1) + ' / ' + n + (q.docTitle ? ' · From: ' + q.docTitle : '')) }));
      if (tmsg.length) stage.appendChild(h('p', { class: 'rpg-status-msg', text: tmsg.join(T('　', ' ')) }));
      stage.appendChild(h('p', { class: 'rpg-quiz-q', text: q.question }));
      if (wearing('goggles') && q.reference) stage.appendChild(h('p', { class: 'rpg-hint', text: T('護目鏡提示：答案在 ', 'Goggles hint: the answer is in ') + q.reference }));
      stage.appendChild(opts);
      stage.appendChild(exp);
      stage.appendChild(h('div', { class: 'rpg-quiz-foot' }, [next]));
    }
    function finish() {
      var won = score / n >= PASS, early = i < n, drill = o.kind === 'drill';
      foeBox.classList.toggle('is-down', won && drill);
      if (won && !drill) { foeBox.classList.add('is-dissolve'); burst(foeBox); }
      arena.classList.toggle('is-lost', !won && !drill);
      arena.classList.remove('is-rage');
      if (!drill) sfx(won ? 'victory' : 'defeat');
      clear(stage);
      var head = o.endHead || (drill ? T('練習結束', 'Practice over') : won ? T('擊敗' + o.foe + '！', 'You defeated ' + o.foe + '!') : T('被' + o.foe + '擊退了', o.foe + ' drove you back'));
      var line = (typeof o.endLine === 'function' ? o.endLine(score, i) : o.endLine || '') + T('答對 ' + score + ' / ' + (drill ? i : n) + (drill ? '' : won ? (score === n ? '，全對。' : '。') : early ? '。心扣完了，剩下 ' + (n - i) + ' 題下次再戰。' : '，還差一點。'),
        'Correct: ' + score + ' / ' + (drill ? i : n) + (drill ? '' : won ? (score === n ? '. A perfect run.' : '.') : early ? '. Out of hearts: ' + (n - i) + ' question' + (n - i > 1 ? 's' : '') + ' left for next time.' : '. So close.'));
      if (cleansed) line += T('　淨化了 ' + cleansed + ' 道錯題。', ' Cleansed ' + cleansed + ' past mistake' + (cleansed > 1 ? 's' : '') + '.');
      if (fresh) line += T('　新答對 ' + fresh + ' 題，+' + fresh * XP_FRESH + ' XP。', ' ' + fresh + ' new question' + (fresh > 1 ? 's' : '') + ' right, +' + fresh * XP_FRESH + ' XP.');
      // Finishing all questions of a boss / elite fight, won or lost, drops one material (once a day per foe).
      if (o.kind === 'boss' && !early && o.target != null && S.runDay[o.target] !== dayKey(new Date())) {
        var src = o.questions[Math.floor(Math.random() * n)];
        if (src && src.docKey && clusterOf(M.docs[src.docKey]) >= 0) {
          S.runDay[o.target] = dayKey(new Date()); saveState();
          dropMat(src.docKey);
          line += T('　撐完全部 ' + n + ' 題，掉落 1 個素材（每天一次）。', ' You lasted all ' + n + ' questions and found 1 material (once a day).');
        }
      }
      if (missed.length) line += T('　答錯的題已記進錯題本，明天起答對就能淨化。', ' Missed questions went into your Mistake Book. From tomorrow, answer them right to cleanse them.');
      stage.appendChild(h('div', { class: 'rpg-battle-end ' + (won || drill ? 'is-win' : 'is-lose'), role: 'status' }, [
        h('strong', { text: head }),
        h('p', { text: line }),
        missed.length ? missedList(missed, !won && !drill) : null,
        o.noAgain ? null : h('button', { class: 'rpg-btn', type: 'button', text: drill ? T('再練一次', 'Practice again') : T('再戰一次', 'Fight again'), onclick: function () { if (o.again) o.again(); else runBattle(host, o); } })
      ]));
      o.onEnd({ score: score, total: n, last: last, won: won });
    }
    meters();
    intro();
  }

  function drawQuiz(block, sid, questions, bank) {
    clear(block);
    var n = questions.length;
    var rec = (S.quiz[pageDocKey] || {})[sid];
    var passed = !!(rec && rec.total && rec.best / rec.total >= PASS);
    var mi = clusterOf(M.docs[pageDocKey]), mobSrc = mi >= 0 ? asset('mob-' + mi) : null, foe = mi >= 0 ? MOBS[mi] : T('章節守門怪', 'Section Sentry');
    var status = h('span', { class: 'rpg-quiz-best' + (passed ? ' is-pass' : ''), text: rec ? (passed ? T('已通過　', 'Passed · ') : '') + T('最佳 ', 'Best ') + rec.best + ' / ' + rec.total : T('尚未挑戰', 'Not tried yet') });
    var title = h('h3', { text: (passed ? T('已擊敗　', 'Defeated: ') : T('遭遇　', 'Encounter: ')) + foe });
    var head = h('div', { class: 'rpg-quiz-head' + (passed ? ' is-beaten' : '') }, [
      mobSrc ? h('img', { class: 'rpg-quiz-mob', src: mobSrc, alt: '' }) : null,
      h('span', { class: 'rpg-tag', text: 'CHALLENGE' }), title, status
    ]);
    var area = h('div', { class: 'rpg-quiz-area' });
    block.appendChild(head);
    block.appendChild(h('p', { class: 'rpg-quiz-lead', text: T('共 ' + n + ' 題，一題一題打：答對打掉牠一格血，答錯你扣一顆心（你有 ' + battleHearts('mob', n) + ' 顆）。答對 80% 就擊敗牠。可以重複挑戰，只記最佳成績。', n + ' questions, one at a time: a right answer knocks off one HP bar, a wrong one costs you a heart (you have ' + battleHearts('mob', n) + '). Get 80% right to win. Retry as often as you like; only your best score counts.') }));
    block.appendChild(area);
    area.appendChild(h('button', { class: 'rpg-btn', type: 'button', text: rec ? T('再戰', 'Fight again') : T('迎戰', 'Fight'), onclick: fight }));

    function fight() {
      if (!S.profile) { openOnboarding(); return; }   // battles need a character (avatar, hearts, rewards)
      runBattle(area, { kind: 'mob', foe: foe, foeImg: mobSrc, cluster: mi, questions: shuffle(questions.slice()), onEnd: save });
    }
    function save(r) {
      var score = r.score, ok = r.won;
      palSay(ok ? (score === n ? T('全對！漂亮。', 'All correct! Beautiful.') : T('打倒了！', 'Knocked it down!')) : T('被打回來了。看完解析再上，我等你。', 'It pushed us back. Read the explanations and try again. I will wait.'), 1);
      var dq = S.quiz[pageDocKey] = S.quiz[pageDocKey] || {};
      var old = dq[sid];
      var wasPass = !!(old && old.total && old.best / old.total >= PASS);
      dq[sid] = {
        best: Math.max(score, old ? old.best : 0), total: n, tries: (old ? old.tries : 0) + 1, last: r.last, ts: Date.now(),
        first: old ? old.first : score,                        // score of the very first attempt (decides shiny cards)
        pt: old && old.pt ? old.pt : (ok ? Date.now() : 0)      // when it was first passed (decides review ambushes)
      };
      if (ok && !wasPass) {
        dropMat(pageDocKey);
        var today = dayKey(new Date());
        if (S.today.d !== today) S.today = { d: today, docs: [] };
        if (S.today.docs.indexOf(pageDocKey) < 0) S.today.docs.push(pageDocKey);
        if (old && old.tries >= 2) S.flags.comeback = 1;
      }
      saveState();
      var nowPass = dq[sid].best / dq[sid].total >= PASS;
      status.textContent = (nowPass ? T('已通過　', 'Passed · ') : '') + T('最佳 ', 'Best ') + dq[sid].best + ' / ' + dq[sid].total;
      status.classList.toggle('is-pass', nowPass);
      title.textContent = (nowPass ? T('已擊敗　', 'Defeated: ') : T('遭遇　', 'Encounter: ')) + foe;
      head.classList.toggle('is-beaten', nowPass);
      recordQuizResult(bank);
      refresh();
    }
  }

  /* ---------- boss battle (map page) ---------- */
  function bossCount(t) {
    return t.banked.reduce(function (a, x) {
      var qz = M.docs[x.key].quiz || {};
      return a + Object.keys(qz).reduce(function (b, k) { return b + qz[k]; }, 0);
    }, 0);
  }
  /* Which departments this boss is weak to, and which of those the player still has to learn. */
  function weakHint(ti) { return weakHintFor(WEAK[ti] || {}); }
  function weakHintFor(map) {
    var ids = Object.keys(map), todo = ids.filter(function (id) { return learnedSkills().indexOf(id) < 0; });
    if (!ids.length) return null;
    return h('p', { class: 'rpg-weakhint' }, [
      h('b', { text: T('弱點：', 'Weak to: ') + ids.map(elName).join(LIST) }),
      todo.length ? h('span', { text: T('　修完', ' Finish ') + todo.map(function (id) {
        var k = G.skills[id]; return T(dName(deptById(id)) + '的必讀（' + k.got + ' / ' + k.need + '）', dName(deptById(id)) + ' required reading (' + k.got + ' / ' + k.need + ')');
      }).join(T('、或', ', or ')) + T('，就能習得剋制技能。', ' to learn a counter skill.') }) : null
    ]);
  }
  /* Before a boss fight: choose which learned skill and which item to bring.
     a: { cur, map (weakness reasons), foe, done, pick, go, target, item, pickItem, needTag, needText } */
  function skillPicker(box, a) {
    clear(box);
    var row = h('div', { class: 'rpg-skillpick', role: 'radiogroup', 'aria-label': T('出戰技能', 'Battle skill') });
    learnedSkills().forEach(function (id) {
      var sp = fxYou(id), w = !!a.map[id];
      row.appendChild(h('button', { type: 'button', role: 'radio', 'aria-checked': String(id === a.cur),
        class: 'rpg-skill' + (id === a.cur ? ' is-on' : '') + (w ? ' is-weak' : ''), style: '--c:' + sp.c,
        onclick: function () { a.pick(id); } }, [
        h('b', { text: sp.skill }),
        h('span', { text: sp.el + (id === S.profile.cls ? T('・主技能', ' · Main skill') : T('・第二專長', ' · Second specialty')) }),
        w ? h('em', { text: T('弱點', 'Weak point') }) : null
      ]));
    });
    var w = a.map[a.cur];
    var owned = ITEMS.filter(function (x) { return S.items[x.id]; });
    var it = itemById(a.item), gated = a.needTag && !itemTag(it, a.needTag);
    var irow = h('div', { class: 'rpg-skillpick rpg-itempick', role: 'radiogroup', 'aria-label': T('攜帶道具', 'Item to bring') });
    [null].concat(owned).forEach(function (x) {
      var on = (x ? x.id : '') === (it ? it.id : ''), hit = x && itemVs(x, a.target);
      irow.appendChild(h('button', { type: 'button', role: 'radio', 'aria-checked': String(on),
        class: 'rpg-skill' + (on ? ' is-on' : '') + (hit ? ' is-weak' : ''), style: '--c:' + (x ? x.c : '#94a3b8'),
        onclick: function () { a.pickItem(x ? x.id : ''); } }, [
        h('b', { text: x ? x.zh : T('不帶道具', 'No item') }),
        h('span', { text: x ? x.cat + (hit ? T('・護盾 +', ' · Shield +') + (x.shield || 1) : T('・對牠無效', ' · No effect on it')) : T('空手上陣', 'Going in empty-handed') }),
        hit ? h('em', { text: T('有效', 'Effective') }) : null
      ]));
    });
    box.appendChild(h('div', { class: 'rpg-skillbox' }, [
      h('h3', { class: 'rpg-sub', text: T('選擇出戰技能', 'Choose your skill') }), row,
      h('h3', { class: 'rpg-sub', text: T('攜帶道具', 'Bring an item') }), irow,
      gated ? h('p', { class: 'rpg-weakhint rpg-gate' }, [h('b', { text: T('進不了戰場：', 'Locked out: ') }), h('span', { text: a.needText + (ITEMS.some(function (x) { return itemTag(x, a.needTag) && S.items[x.id]; })
        ? T('。在上面選一個' + (a.needName || '對應道具') + '。', '. Pick a ' + (a.needName || 'matching item') + ' above.') : T('。到角色頁的工坊合成「', '. Craft "') + ITEMS.filter(function (x) { return itemTag(x, a.needTag); }).map(function (x) { return x.zh; }).join(T('」或「', '" or "')) + T('」。', '" in the Workshop on the character page.')) })]) : null,
      h('p', { class: 'rpg-note', text: w ? T('弱點擊破：' + w + '。這場多 1 顆心，魔王開場就睡著' +
        (a.done ? '。' : '；第一次用弱點技能打倒牠，再得 ' + XP_WEAK + ' XP 和 1 顆' + BOSS_MAT + '。'),
        'Weak-Point Break: ' + w + '. You get +1 heart this fight and the boss starts asleep' +
        (a.done ? '.' : '; defeat it with a weak-point skill for the first time to earn ' + XP_WEAK + ' XP and 1 ' + BOSS_MAT + '.'))
        : T('這個技能對' + a.foe + '沒有特別效果。', 'This skill has no special effect on ' + a.foe + '.') }),
      STATUS_SKILL[a.cur] ? h('p', { class: 'rpg-note', text: fxYou(a.cur).skill + T('・', ' · ') + STATUS_SKILL[a.cur].zh + T('。', '.') }) : null,
      traitText(a.target) ? h('p', { class: 'rpg-note rpg-intel' }, [h('b', { text: T('情報：', 'Intel: ') }), h('span', { text: S.intel[a.target]
        ? a.foe + ' ' + traitText(a.target) : T('未知。交手一次，就會知道' + a.foe + '怕什麼狀態，並記進角色頁的情報圖鑑。', 'Unknown. Fight ' + a.foe + ' once to learn which statuses it fears; the Intel Codex on the character page keeps the record.') })]) : null,
      weakHintFor(a.map),
      h('button', { class: 'rpg-btn', type: 'button', text: T('開戰', 'Fight'), disabled: gated, onclick: a.go })
    ]));
  }
  function bestItem(saved, target, needTag) {
    if (saved != null && (saved === '' || S.items[saved]) && !(needTag && !itemTag(itemById(saved), needTag))) return saved;
    var hit = ITEMS.filter(function (x) { return S.items[x.id] && itemVs(x, target) && (!needTag || itemTag(x, needTag)); });
    hit.sort(function (p, q) { return (q.shield || 1) - (p.shield || 1); });
    return hit.length ? hit[0].id : '';
  }
  function bestSkill(saved, map) {
    if (learnedSkills().indexOf(saved) >= 0) return saved;
    return learnedSkills().filter(function (id) { return map[id]; })[0] || S.profile.cls;
  }
  function openBoss(ti) {
    if (!S || !S.profile || !G) return;
    var c = G.classes[S.profile.cls], t = c && c.tiers[ti];
    if (!t) return;
    var zone = ZONES[ti] || ZONES[ZONES.length - 1], img = asset('boss-' + (ti + 1));
    if (!t.hasBoss) { toast(T('這一區還沒有題庫，沒有魔王戰。', 'This zone has no question bank yet, so there is no boss fight.')); return; }
    if (!t.ready) {
      modal([
        h('span', { class: 'rpg-tag', text: 'BOSS' }),
        h('h2', { text: T(zone.boss + '還沒現身', zone.boss + ' has not appeared yet') }),
        h('p', { class: 'rpg-modal-lead', text: T('先通關這一區' + (t.anyOf ? '任 ' + t.need + ' 份文件' : '的必讀文件') + '（目前 ' + t.got + ' / ' + t.need + '），魔王才會出來。',
          'Clear ' + (t.anyOf ? 'any ' + t.need + ' documents' : 'the required documents') + ' in this zone first (now ' + t.got + ' / ' + t.need + ') and the boss will come out.') }),
        weakHint(ti)
      ]);
      return;
    }
    Promise.all(t.banked.map(function (x) {
      var d = M.docs[x.key];
      return loadBank(x.key).then(function (b) {
        return (b.questions || []).map(function (q) { return Object.assign({}, q, { docTitle: docT(d), docKey: x.key }); });
      });
    })).then(function (lists) {
      var pool = [].concat.apply([], lists);
      if (!pool.length) { toast(T('題庫讀不到，請稍後再試。', 'Could not load the question bank. Please try again later.')); return; }
      var key = S.profile.cls + ':' + ti, box = h('div', { class: 'rpg-boss-fight' });
      modal([
        h('span', { class: 'rpg-tag', text: 'BOSS BATTLE' }),
        h('h2', { text: T(zone.zh + '的魔王　' + zone.boss, 'Boss of ' + zone.en + ' · ' + zone.boss) }),
        h('p', { class: 'rpg-modal-lead', text: T('從這一區的文件隨機出 ' + Math.min(BOSS_Q, pool.length) + ' 題，答對 80% 擊敗牠' + (t.beaten ? '。' : '，就能升階。'),
          Math.min(BOSS_Q, pool.length) + ' random questions from this zone\'s documents. Get 80% right to defeat it' + (t.beaten ? '.' : ' and rank up.')) }),
        box
      ], { cls: 'rpg-modal-wide rpg-modal-boss' });
      var skill = bestSkill(S.skillPick[key], WEAK[ti] || {}), item = bestItem(S.itemPick[key], 'z' + ti);
      pickSkill();
      function pickSkill() {
        skillPicker(box, { cur: skill, map: WEAK[ti] || {}, foe: zone.boss, done: !!S.weakWin[key], target: 'z' + ti, item: item,
          pick: function (id) { skill = id; pickSkill(); }, pickItem: function (id) { item = id; pickSkill(); },
          go: function () { S.skillPick[key] = skill; S.itemPick[key] = item; saveState(); go(); } });
      }
      function go() {
        var weak = isWeak(ti, skill);
        runBattle(box, {
          kind: 'boss', foe: zone.boss, foeImg: img, zone: ti, skill: skill, again: pickSkill, target: 'z' + ti, item: itemById(item), line: BOSS_LINES[ti], rage: BOSS_RAGE[ti],
          questions: shuffle(pool.slice()).slice(0, BOSS_Q),
          onEnd: function (r) {
            S.bossTry[key] = (S.bossTry[key] || 0) + 1;
            if (!r.won) { saveState(); return; }
            var first = !S.bossWin[key];
            S.bossWin[key] = { best: Math.max(r.score, first ? 0 : S.bossWin[key].best), total: r.total, ts: Date.now() };
            if (first) { S.bonus += XP_BOSS; S.mats.boss = (S.mats.boss || 0) + 1; }
            saveState();
            var weakFirst = weak && !S.weakWin[key];
            if (weakFirst) { S.weakWin[key] = Date.now(); S.bonus += XP_WEAK; S.mats.boss = (S.mats.boss || 0) + 1; }
            saveState();
            if (weakFirst) toast(T('弱點擊破！+', 'Weak-Point Break! +') + XP_WEAK + T(' XP，獲得素材：', ' XP. Material earned: ') + BOSS_MAT);
            else if (first) toast(T('獲得素材：', 'Material earned: ') + BOSS_MAT);
            if (first) showRewards([{ kind: 'bossdown', ti: ti }]);
            refresh();
          }
        });
      }
    }).catch(function (e) { console.warn('[rpg] boss battle failed to load', e); toast(T('題庫讀不到，請稍後再試。', 'Could not load the question bank. Please try again later.')); });
  }

  /* Document guardian: optional mid-boss after a document's section challenges are all passed.
     5 questions mixed across the whole document, from the next day on. Never gates rank-up. */
  function openGuard(key) {
    if (!S || !S.profile || !G) return;
    var st = G.docs[key], d = M.docs[key];
    if (!st || !d || !d.quiz) { toast(T('這份文件沒有題庫，沒有守關者。', 'This document has no question bank, so there is no Gatekeeper.')); return; }
    var mi = clusterOf(d), foe = (mi >= 0 ? MOBS[mi] : T('章節守門怪', 'Section Gate Beast')) + T('・守關者', ' · Gatekeeper'), img = mi >= 0 ? asset('mob-' + mi) : null;
    if (st.guard === '' || st.guard === 'wait') {
      modal([
        h('span', { class: 'rpg-tag', text: 'GUARDIAN' }),
        h('h2', { text: T('「' + docT(d) + '」的守關者還沒現身', 'The Gatekeeper of "' + docT(d) + '" has not appeared yet') }),
        h('p', { class: 'rpg-modal-lead', text: st.guard === 'wait'
          ? T('今天剛通關，守關者明天才會出現。隔一天再回想，才測得出真正記住了多少。', 'You cleared it today; the Gatekeeper appears tomorrow. Recalling after a day shows how much really stuck.')
          : T('先通過這份文件每一節的章節挑戰（目前 ' + st.passed + ' / ' + st.quizSecs.length + '）。', 'First pass the section challenge in every section of this document (now ' + st.passed + ' / ' + st.quizSecs.length + ').') })
      ]);
      return;
    }
    loadBank(key).then(function (b) {
      var pool = (b.questions || []).map(function (q) { return Object.assign({}, q, { docKey: key }); });
      if (!pool.length) { toast(T('題庫讀不到，請稍後再試。', 'Could not load the question bank. Please try again later.')); return; }
      var box = h('div', { class: 'rpg-boss-fight' }), won = !!S.guardWin[key];
      modal([
        h('span', { class: 'rpg-tag', text: 'GUARDIAN' }),
        h('h2', { text: foe }),
        h('p', { class: 'rpg-modal-lead', text: T('從「' + docT(d) + '」整份題庫跨章節出 ' + Math.min(GUARD_Q, pool.length) + ' 題，答對 80% 擊敗牠。選打，不影響升階' +
          (won ? '。' : '；第一次擊敗得 ' + XP_GUARD + ' XP、2 個素材，地圖上這份文件多一顆守關星。'),
          Math.min(GUARD_Q, pool.length) + ' questions drawn across all sections of "' + docT(d) + '". Get 80% right to defeat it. Optional: it does not affect ranking' +
          (won ? '.' : '; your first win earns ' + XP_GUARD + ' XP, 2 materials, and a Gatekeeper star on this document on the map.')) }),
        box
      ], { cls: 'rpg-modal-wide' });
      function go() {
        runBattle(box, {
          kind: 'guard', foe: foe, foeImg: img, cluster: mi, again: go,
          questions: shuffle(pool.slice()).slice(0, GUARD_Q),
          onEnd: function (r) {
            if (!r.won) { saveState(); return; }
            var first = !S.guardWin[key];
            S.guardWin[key] = { best: Math.max(r.score, first ? 0 : S.guardWin[key].best), total: r.total, ts: Date.now() };
            if (first) { S.bonus += XP_GUARD; saveState(); dropMat(key); dropMat(key); toast(T('擊敗守關者！+', 'Gatekeeper defeated! +') + XP_GUARD + ' XP'); }
            saveState(); refresh();
          }
        });
      }
      go();
    }).catch(function (e) { console.warn('[rpg] guardian battle failed to load', e); toast(T('題庫讀不到，請稍後再試。', 'Could not load the question bank. Please try again later.')); });
  }

  /* Elite boss: optional, cross-class, never gates rank-up. */
  function eliteOpen() { return !!(S && S.profile && G && G.classes[S.profile.cls].rank >= ELITE_RANK); }
  function canCounterMap(map) { return learnedSkills().some(function (id) { return map[id]; }); }
  function openElite(id) {
    var e = eliteById(id);
    if (!e || !S || !S.profile || !G) return;
    var img = asset('elite-' + e.id), key = 'elite:' + e.id;
    if (!eliteOpen()) {
      modal([
        h('span', { class: 'rpg-tag', text: 'ELITE' }),
        h('h2', { text: T(e.name + '還沒現身', e.name + ' has not appeared yet') }),
        h('p', { class: 'rpg-modal-lead', text: T('主職業升到' + RANKS[ELITE_RANK].zh + '後，精英魔王就會在地圖出沒。', 'Elite bosses roam the map once your main class reaches ' + RANKS[ELITE_RANK].en + '.') }),
        h('p', { class: 'rpg-note', text: T('針劑風險：' + e.risk + '。出題範圍：' + e.srcText + '。', 'Injectable risk: ' + e.risk + '. Questions from: ' + e.srcText + '.') }),
        weakHintFor(e.weak)
      ]);
      return;
    }
    Promise.all(e.src.map(function (x) {
      var d = M.docs[x.key];
      if (!d || !d.quiz) return [];
      return loadBank(x.key).then(function (b) {
        var ids = (x.ids || []).map(String), whole = !x.secs && !x.ids;
        return (b.questions || []).filter(function (q) {
          return whole || (x.secs || []).indexOf(q.section) >= 0 || ids.indexOf(String(q.id)) >= 0;
        }).map(function (q) { return Object.assign({}, q, { docTitle: docT(d), docKey: x.key }); });
      });
    })).then(function (lists) {
      var pool = [].concat.apply([], lists);
      if (!pool.length) { toast(T('題庫讀不到，請稍後再試。', 'Could not load the question bank. Please try again later.')); return; }
      var box = h('div', { class: 'rpg-boss-fight' }), won = S.eliteWin[e.id];
      modal([
        h('span', { class: 'rpg-tag rpg-tag-elite', text: 'ELITE BOSS' }),
        h('h2', { text: T('精英魔王　', 'Elite Boss · ') + e.name }),
        h('p', { class: 'rpg-modal-lead', text: T('針劑風險：' + e.risk + '。從相關文件隨機出 ' + Math.min(BOSS_Q, pool.length) +
          ' 題，答對 80% 擊敗牠。選打，不影響升階' + (won ? '。' : '；第一次擊敗得 ' + XP_ELITE + ' XP、1 顆' + BOSS_MAT + '和稱號「' + e.title + '」。'),
          'Injectable risk: ' + e.risk + '. ' + Math.min(BOSS_Q, pool.length) +
          ' random questions from related documents. Get 80% right to defeat it. Optional: it does not affect ranking' + (won ? '.' : '; your first win earns ' + XP_ELITE + ' XP, 1 ' + BOSS_MAT + ' and the title "' + e.title + '".')) }),
        h('p', { class: 'rpg-note', text: T('出題範圍：' + e.srcText + '（' + pool.length + ' 題）', 'Questions from: ' + e.srcText + ' (' + pool.length + ' questions)') }),
        box
      ], { cls: 'rpg-modal-wide rpg-modal-boss' });
      var skill = bestSkill(S.skillPick[key], e.weak), item = bestItem(S.itemPick[key], e.id, e.needTag);
      pickSkill();
      function pickSkill() {
        skillPicker(box, { cur: skill, map: e.weak, foe: e.name, done: !!S.weakWin[key], target: e.id, item: item, needTag: e.needTag, needName: e.needName, needText: e.needText,
          pick: function (id) { skill = id; pickSkill(); }, pickItem: function (id) { item = id; pickSkill(); },
          go: function () { S.skillPick[key] = skill; S.itemPick[key] = item; saveState(); go(); } });
      }
      function go() {
        var weak = !!e.weak[skill];
        runBattle(box, {
          kind: 'boss', foe: e.name, foeImg: img, zone: -1, weak: weak, fx: e.fx, skill: skill, again: pickSkill, target: e.id, item: itemById(item), line: e.line, rage: e.rage,
          questions: shuffle(pool.slice()).slice(0, BOSS_Q),
          onEnd: function (r) {
            S.bossTry[key] = (S.bossTry[key] || 0) + 1;
            if (!r.won) { saveState(); return; }
            var first = !S.eliteWin[e.id];
            S.eliteWin[e.id] = { best: Math.max(r.score, first ? 0 : S.eliteWin[e.id].best), total: r.total, ts: Date.now() };
            if (first) { S.bonus += XP_ELITE; S.mats.boss = (S.mats.boss || 0) + 1; }
            var weakFirst = weak && !S.weakWin[key];
            if (weakFirst) { S.weakWin[key] = Date.now(); S.bonus += XP_WEAK; S.mats.boss = (S.mats.boss || 0) + 1; }
            saveState();
            if (weakFirst) toast(T('弱點擊破！+', 'Weak-Point Break! +') + XP_WEAK + T(' XP，獲得素材：', ' XP. Material earned: ') + BOSS_MAT);
            else if (first) toast(T('擊敗精英魔王！+', 'Elite boss defeated! +') + XP_ELITE + T(' XP，獲得素材：', ' XP. Material earned: ') + BOSS_MAT);
            refresh();
          }
        });
      }
    }).catch(function (err) { console.warn('[rpg] elite battle failed to load', err); toast(T('題庫讀不到，請稍後再試。', 'Could not load the question bank. Please try again later.')); });
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

  /* ---------- reading companion (document pages) ----------
     The pet (or the egg, before hatching) sits in the corner while reading. It
     speaks when a new section starts (with that section's first learning
     objective), on XP, on challenge results, when idle, and when poked.
     priority: 0 = rate-limited chatter, 1 = important, 2 = asked for (click). */
  var pal = null, palImg = null, palBubble = null, palDoc = null, palSec = null;
  var palHideT = null, palIdleT = null, palSleepT = null, palLast = 0, palAwakeAt = 0, palPokes = 0;

  function initPal(d) {
    if (!S.profile || pal) return;
    palDoc = d;
    document.body.classList.add('rpg-doc');
    palBubble = h('div', { class: 'rpg-pal-bubble', role: 'status', hidden: true });
    palImg = h('img', { alt: '' });
    pal = h('div', { class: 'rpg-pal', id: 'rpg-pal' }, [
      palBubble, h('button', { type: 'button', class: 'rpg-pal-btn', 'aria-label': T('夥伴，點一下跟牠說話', 'Companion: tap to talk'), onclick: palPoke }, [palImg,
        wearing('ribbon') ? h('img', { class: 'rpg-pal-ribbon', src: gearImg(gearById('ribbon')), alt: '' }) : null])
    ]);
    document.body.appendChild(pal);
    palDraw();
    ['scroll', 'keydown', 'pointerdown'].forEach(function (ev) { window.addEventListener(ev, palAwake, { passive: true }); });
    palAwake();
    setTimeout(function () { palSay(palGreeting(), 1); }, 1500);
  }
  function palDraw() {
    if (!pal) return;
    var src = S.pet ? petImg(S.pet.line, G.petStage) : eggImg();
    if (palImg.getAttribute('src') !== src) palImg.setAttribute('src', src);
    palImg.className = 'rpg-pal-img ' + (S.pet ? petCls('rpg-idle') : 'rpg-wobble');
  }
  function palVoice() { return S.pet ? PETS[S.pet.line].voice + T('，', '! ') : ''; }
  function palSay(text, priority) {
    if (!pal || !text) return;
    var now = Date.now();
    if (S.palQuiet && priority < 2) return;
    if (!priority && now - palLast < 15000) return;
    palLast = now;
    clear(palBubble);
    palBubble.appendChild(h('span', { text: text }));
    palBubble.appendChild(h('button', { type: 'button', class: 'rpg-pal-mute', text: S.palQuiet ? T('恢復說話', 'Talk again') : T('安靜一點', 'Hush'), onclick: function (e) {
      e.stopPropagation();
      S.palQuiet = !S.palQuiet; saveState();
      palSay(S.palQuiet ? T('好，我安靜陪你。點我才會說話。', 'Okay, I will keep you quiet company. Tap me when you want to talk.') : palVoice() + T('我回來了。', 'I am back.'), 2);
    } }));
    palBubble.hidden = false;
    pal.classList.remove('is-talking'); void pal.offsetWidth; pal.classList.add('is-talking');
    clearTimeout(palHideT);
    palHideT = setTimeout(function () { palBubble.hidden = true; pal.classList.remove('is-talking'); }, 6000 + text.length * 60);
  }
  function palGreeting() {
    if (!S.pet) return T('讀完第一節，蛋就會孵化。', 'Finish your first section and the egg will hatch.');
    var hr = new Date().getHours(), st = G.docs[pageDocKey];
    var hi = hr < 5 ? T('這麼晚還在讀，辛苦了', 'Studying this late? Thank you for the effort') : hr < 11 ? T('早安', 'Good morning') : hr < 14 ? T('午安', 'Good afternoon') : hr < 18 ? T('下午好', 'Good afternoon') : T('晚上好', 'Good evening');
    var where = st.cleared ? T('這份你已經通關了，來複習嗎？', 'You already cleared this one. Here for a review?') : st.read ? T('這份讀到第 ' + st.read + ' / ' + st.total + ' 節了，接著讀吧。', 'You are on section ' + st.read + ' / ' + st.total + ' of this one. Let us keep going.') : T('這份有 ' + st.total + ' 節，我們從頭開始。', 'This one has ' + st.total + ' sections. Let us start from the top.');
    return palVoice() + hi + T('。', '. ') + where;
  }
  /* Called after each scroll pause: announce the section that just came into view. */
  function palTick() {
    if (!pal) return;
    var cur = null;
    palDoc.top.forEach(function (t) {
      var el = document.getElementById(t.id);
      if (el && el.getBoundingClientRect().top <= 170) cur = t;
    });
    if (!cur || cur.id === palSec) return;
    var first = palSec === null;
    palSec = cur.id;
    if (first) return;                                           // the greeting covers the starting section
    var li = document.getElementById(cur.id).querySelector('.learning-objectives li');
    var goal = li ? li.textContent.replace(/\s+/g, ' ').trim() : '';
    if (goal.length > 64) goal = goal.slice(0, 62) + '…';
    palSay('Section ' + cur.num + T('「' + (cur.zh || cur.en) + '」。', ' "' + (cur.en || cur.zh) + '". ') + (goal ? T('先抓這個重點：', 'Focus on this first: ') + goal : '') +
      (palDoc.quiz && palDoc.quiz[cur.id] ? T('　這節最後有挑戰。', ' This section ends with a challenge.') : ''), 1);
  }
  function palCheer() {
    if (!pal) return;
    pal.classList.remove('rpg-hop'); void pal.offsetWidth; pal.classList.add('rpg-hop');
    palSay(palVoice() + T(['又前進一點了。', '這節收下了。', '穩穩地讀。'], ['A little further.', 'Section done.', 'Steady reading.'])[Math.floor(Math.random() * 3)], 0);
  }
  function palPoke() {
    var st = G.docs[pageDocKey], lines = [
      T('這份文件讀了 ' + st.read + ' / ' + st.total + ' 節' + (st.quizSecs.length ? '，挑戰過了 ' + st.passed + ' / ' + st.quizSecs.length + ' 節。' : '。'),
        'You have read ' + st.read + ' / ' + st.total + ' sections of this document' + (st.quizSecs.length ? ' and passed ' + st.passed + ' / ' + st.quizSecs.length + ' challenges.' : '.')),
      T('離 Lv ' + (G.level + 1) + ' 還差 ' + (G.hi - G.xp) + ' XP。', (G.hi - G.xp) + ' XP to Lv ' + (G.level + 1) + '.'),
      liveStreak() ? T('已經連續 ' + liveStreak() + ' 天了，今天也算數。', liveStreak() + '-day streak, and today counts too.') : T('今天讀完一節，連續天數就開始算。', 'Finish a section today to start your streak.'),
      S.pet ? (G.petStage >= 4 ? T('我已經是最終型態了，接下來換你變強。', 'I am in my final form. Now it is your turn to grow.') : T('等你升到「' + RANKS[G.petStage].zh + '」，我就會進化。', 'When you reach ' + RANKS[G.petStage].en + ', I will evolve.')) : T('我還在蛋裡，讀完第一節就出來。', 'I am still in my egg. Finish the first section and I will come out.')
    ];
    if (wearing('ribbon') && S.pet) lines.push.apply(lines, T(['這條領巾好看嗎？是你做給我的。', '戴著領巾，覺得自己也變專業了。', '素材再多一點，工坊還能做別的裝備喔。'], ['Do you like my scarf? You made it for me.', 'With this scarf on, I feel like a professional too.', 'Gather a few more materials and the Workshop can make other gear.']));
    palAwake();
    palSay(palVoice() + lines[palPokes++ % lines.length], 2);
  }
  /* Idle handling: a nudge after 2 minutes without input, asleep after 5. */
  function palAwake() {
    var now = Date.now();
    if (now - palAwakeAt < 1000) return;
    palAwakeAt = now;
    if (pal.classList.contains('is-sleep')) { pal.classList.remove('is-sleep'); palSay(palVoice() + T('你回來了。', 'You are back.'), 1); }
    clearTimeout(palIdleT); clearTimeout(palSleepT);
    palIdleT = setTimeout(function () { palSay(T(['看累了嗎？站起來動一下再回來。', '卡住的話，先看右邊的導師解析。', '喝口水，我在這裡等。'], ['Tired? Stand up, stretch, then come back.', 'Stuck? Check the mentor notes on the right first.', 'Have some water. I will wait here.'])[Math.floor(Math.random() * 3)], 0); }, 120000);
    palSleepT = setTimeout(function () { pal.classList.add('is-sleep'); palSay('Zzz…', 1); }, 300000);
  }

  /* ---------- review ambush (spaced review of a section passed a week ago) ---------- */
  var reviewTries = 0;
  function maybeReview() {
    if (!S.profile || pageDocKey) return;                       // never interrupt reading
    if (!document.getElementById('rpg-quest') && !document.getElementById('rpg-character') && !document.getElementById('rpg-map')) return;
    var today = dayKey(new Date()), now = Date.now();
    if (S.review.day === today) return;
    // The patrol strip on this page already invites a review set: no surprise pop-up on top of it
    // (the map page has no strip, so the ambush still happens there).
    if (!patrolDone() && document.querySelector('.rpg-patrol:not(.is-done)')) return;
    if (document.querySelector('.rpg-modal, .rpg-cutin')) {    // wait for rewards / dialogs to finish
      if (reviewTries++ < 5) setTimeout(maybeReview, 3000);
      return;
    }
    // A due mistake (missed on an earlier day) comes first.
    var due = weakIds().filter(weakDue);
    if (due.length) {
      var wid = due[Math.floor(Math.random() * due.length)], wkey = weakKey(wid), qid = wid.slice(wkey.length + 1);
      loadBank(wkey).then(function (bank) {
        var q = (bank.questions || []).filter(function (x) { return String(x.id) === qid; })[0];
        if (!q) { delete S.weak[wid]; saveState(); return; }   // bank was edited; drop the stale entry
        if (document.querySelector('.rpg-modal, .rpg-cutin')) return;
        S.review.day = today; saveState();
        openReview({ key: wkey, sid: q.section, weak: true }, q);
      }).catch(function () {});
      return;
    }
    var pool = [];
    Object.keys(S.quiz).forEach(function (key) {
      if (!M.docs[key] || !M.docs[key].quiz) return;
      Object.keys(S.quiz[key]).forEach(function (sid) {
        var r = S.quiz[key][sid];
        if (r.pt && now - r.pt >= reviewGap() && now - (S.review.last[key + '#' + sid] || 0) >= reviewGap()) pool.push({ key: key, sid: sid });
      });
    });
    if (!pool.length) return;
    var pick = pool[Math.floor(Math.random() * pool.length)];
    loadBank(pick.key).then(function (bank) {
      var qs = (bank.questions || []).filter(function (q) { return q.section === pick.sid; });
      if (!qs.length || document.querySelector('.rpg-modal, .rpg-cutin')) return;
      S.review.day = today; saveState();                        // at most one ambush a day, even if dismissed
      openReview(pick, qs[Math.floor(Math.random() * qs.length)]);
    }).catch(function () {});
  }
  function openReview(pick, q) {
    q = mixOpts(q);
    var d = M.docs[pick.key], done = false;
    var opts = h('div', { class: 'rpg-quiz-opts' });
    var exp = h('div', { class: 'rpg-quiz-exp', hidden: true }, [h('p', { text: q.explanation || '' }), q.reference ? h('small', { text: T('出處：', 'Source: ') + q.reference }) : null]);
    var result = h('p', { class: 'rpg-quiz-result', 'aria-live': 'polite' });
    Object.keys(q.options).forEach(function (letter) {
      opts.appendChild(h('button', { type: 'button', class: 'rpg-opt', 'data-l': letter, onclick: function () {
        if (done) return; done = true;
        var ok = letter === q.correct;
        Array.prototype.forEach.call(opts.children, function (b) {
          b.disabled = true;
          if (b.getAttribute('data-l') === q.correct) b.classList.add('is-right');
          else if (b.getAttribute('data-l') === letter) b.classList.add('is-wrong');
        });
        exp.hidden = false;
        S.review.last[pick.key + '#' + pick.sid] = Date.now();
        var clean = noteAnswer(pick.key, q, ok);                // clearing a mistake already drops a material
        if (ok) { S.bonus += reviewXp(); S.review.ok++; if (!clean) dropMat(pick.key); }
        result.textContent = ok ? (clean ? T('淨化了這道錯題！+', 'Mistake cleansed! +') : T('答對了，+', 'Correct! +')) + reviewXp() + ' XP'
          : pick.weak ? T('還是錯了。看一下解析，它會留在錯題本裡。', 'Still wrong. Read the explanation; it stays in your Mistake Book.')
          : T('這題忘了。看一下解析，已記進錯題本，' + (wearing('watch') ? '5 天' : '一週') + '後也還會再遇到。', 'Forgotten. Read the explanation; it is now in your Mistake Book and will come back in ' + (wearing('watch') ? '5 days' : 'a week') + '.');
        result.className = 'rpg-quiz-result ' + (ok ? 'is-pass' : 'is-fail');
        saveState(); refresh();
      } }, [h('b', { text: letter }), h('span', { text: q.options[letter] })]));
    });
    modal([
      h('span', { class: 'rpg-tag', text: 'REVIEW' }),
      h('h2', { text: T('複習突擊', 'Review Ambush') }),
      h('p', { class: 'rpg-modal-lead', text: pick.weak
        ? T('錯題本裡的一題，出自「' + docT(d) + '」。這次答對就能淨化它。答錯不扣分。', 'A question from your Mistake Book, from "' + docT(d) + '". Get it right to cleanse it. A wrong answer costs nothing.')
        : T('你之前通過了「' + docT(d) + '」的章節挑戰，還記得嗎？答錯不扣分。', 'You passed a section challenge in "' + docT(d) + '" earlier. Do you still remember? A wrong answer costs nothing.') }),
      h('p', { class: 'rpg-quiz-q rpg-review-q', text: q.question }), opts, exp, result
    ], { cls: 'rpg-modal-wide rpg-modal-alarm' });
  }

  /* ---------- workshop (character page) ---------- */
  function canCraft(g) { return Object.keys(g.need).every(function (k) { return (S.mats[k] || 0) >= g.need[k]; }); }
  function craft(g) {
    if (S.gear.own[g.id] || !canCraft(g)) return;
    Object.keys(g.need).forEach(function (k) { S.mats[k] -= g.need[k]; });
    S.gear.own[g.id] = Date.now();
    if (!S.gear.on[g.slot]) S.gear.on[g.slot] = g.id;        // wear it right away if the slot is free
    saveState();
    renderAll();
    showRewards([{ kind: 'craft', id: g.id }]);
  }
  function equip(g) {
    S.gear.on[g.slot] = S.gear.on[g.slot] === g.id ? null : g.id;
    if (!S.gear.on[g.slot]) delete S.gear.on[g.slot];
    saveState();
    renderAll();
    toast(S.gear.on[g.slot] ? T('裝備：', 'Equipped: ') + g.zh : T('卸下：', 'Removed: ') + g.zh);
  }
  /* Turn CONVERT of a material you have plenty of into one you are missing. */
  function convertRow() {
    var have = Object.keys(S.mats).filter(function (k) { return k !== 'boss' && S.mats[k] >= CONVERT; });
    var from = h('select', { class: 'rpg-select', 'aria-label': T('拿哪一種素材去換', 'Material to trade in') });
    var to = h('select', { class: 'rpg-select', 'aria-label': T('換成哪一種素材', 'Material to receive') });
    have.forEach(function (k) { from.appendChild(h('option', { value: k, text: matName(k) + T('（' + S.mats[k] + '）', ' (' + S.mats[k] + ')') })); });
    MATS.forEach(function (m, i) { to.appendChild(h('option', { value: 'c' + i, text: m })); });
    var go = h('button', { class: 'rpg-btn rpg-btn-ghost', type: 'button', text: T('煉成', 'Transmute'), disabled: !have.length, onclick: function () {
      var a = from.value, b = to.value;
      if (!a || a === b || (S.mats[a] || 0) < CONVERT) { toast(a === b ? T('換成同一種素材沒有意義。', 'Trading for the same material does nothing.') : T('素材不夠。', 'Not enough materials.')); return; }
      S.mats[a] -= CONVERT; S.mats[b] = (S.mats[b] || 0) + 1;
      saveState(); renderAll();
      toast(T(CONVERT + ' 個' + matName(a) + ' → 1 個' + matName(b), CONVERT + ' ' + matName(a) + ' → 1 ' + matName(b)));
    } });
    return h('div', { class: 'rpg-convert' }, [
      h('b', { text: T('煉成陣', 'Transmutation Circle') }),
      h('span', { class: 'rpg-note', text: have.length ? T(CONVERT + ' 個同種素材換 1 個別的素材（魔王結晶不能換）：', 'Trade ' + CONVERT + ' of one material for 1 of another (Boss Crystals cannot be traded):') : T('同一種素材有 ' + CONVERT + ' 個以上時，可以換成別的素材。', 'Once you have ' + CONVERT + ' or more of one material, you can trade it for another.') }),
      have.length ? from : null, have.length ? h('span', { text: '→' }) : null, have.length ? to : null, go
    ]);
  }
  function itemImgEl(it) {
    var src = asset('item-' + it.id);
    return src ? h('img', { class: 'rpg-item-img', src: src, alt: '' }) : h('span', { class: 'rpg-item-img rpg-item-badge', style: '--c:' + it.c, 'aria-hidden': 'true', text: it.zh.charAt(0) });
  }
  function craftItem(it) {
    if (S.items[it.id] || !canCraft(it)) return;
    Object.keys(it.need).forEach(function (k) { S.mats[k] -= it.need[k]; });
    S.items[it.id] = Date.now();
    saveState(); renderAll();
    toast(T('合成道具：' + it.zh + '。魔王戰前可以選它帶上場。', 'Item crafted: ' + it.zh + '. Choose it before a boss fight to bring it along.'));
  }
  function targetName(t) {
    if (t.charAt(0) === 'z') return (ZONES[+t.slice(1)] || {}).boss || t;
    var e = eliteById(t); return e ? e.name : t;
  }
  function itemPanel() {
    var list = h('ul', { class: 'rpg-gear rpg-items' });
    ITEMS.forEach(function (it) {
      var own = !!S.items[it.id];
      var need = h('span', { class: 'rpg-need' }, Object.keys(it.need).map(function (k) {
        var have = S.mats[k] || 0, src = matImg(k);
        return h('span', { class: have >= it.need[k] ? 'is-ok' : 'is-short' }, [src ? h('img', { src: src, alt: '' }) : null, matName(k) + ' ' + Math.min(have, it.need[k]) + '/' + it.need[k]]);
      }));
      list.appendChild(h('li', { class: own ? 'is-own' : '' }, [
        itemImgEl(it),
        h('div', { class: 'rpg-gear-body' }, [
          h('b', { text: it.zh }), h('small', { class: 'rpg-chip', text: it.cat + T('・對 ', ' · vs ') + it.vs.map(targetName).join(LIST) }),
          h('p', { text: it.eff }),
          own ? null : need
        ]),
        own ? h('span', { class: 'rpg-chip rpg-item-own', text: T('已持有', 'Owned') })
          : h('button', { class: 'rpg-btn', type: 'button', text: T('合成', 'Craft'), disabled: !canCraft(it), onclick: function () { craftItem(it); } })
      ]));
    });
    return h('div', { class: 'rpg-itembox' }, [
      h('h3', { class: 'rpg-sub', text: T('特殊道具　', 'Special Items · ') + ITEMS.filter(function (x) { return S.items[x.id]; }).length + ' / ' + ITEMS.length }),
      h('p', { class: 'rpg-note', text: T('道具不用穿戴，魔王戰前從背包選一個帶上場。用對魔王，護盾就會變多；有些魔王沒帶對的道具根本打不進去。', 'Items are not worn: pick one from your bag before a boss fight. Use the right one for the boss and you get more shields; some bosses cannot be fought at all without the right item.') }),
      list
    ]);
  }
  function workshop() {
    var owned = GEAR.filter(function (g) { return S.gear.own[g.id]; }).length;
    var slots = h('ul', { class: 'rpg-slots' });
    Object.keys(SLOTS).forEach(function (sl) {
      var g = S.gear.on[sl] && gearById(S.gear.on[sl]);
      slots.appendChild(h('li', { class: g ? 'is-on' : '' }, [
        h('small', { text: SLOTS[sl] }),
        g ? h('img', { src: gearImg(g), alt: '' }) : h('span', { class: 'rpg-slot-empty', text: T('空', 'Empty') }),
        h('b', { text: g ? g.zh : '—' })
      ]));
    });
    var list = h('ul', { class: 'rpg-gear' });
    GEAR.forEach(function (g) {
      var own = !!S.gear.own[g.id], on = S.gear.on[g.slot] === g.id, ok = canCraft(g);
      var need = h('span', { class: 'rpg-need' }, Object.keys(g.need).map(function (k) {
        var have = S.mats[k] || 0, src = matImg(k);
        return h('span', { class: have >= g.need[k] || own ? 'is-ok' : 'is-short' }, [
          src ? h('img', { src: src, alt: '' }) : null, matName(k) + ' ' + Math.min(have, g.need[k]) + '/' + g.need[k]
        ]);
      }));
      list.appendChild(h('li', { class: (own ? 'is-own' : '') + (on ? ' is-worn' : '') }, [
        h('img', { class: 'rpg-gear-img' + (own ? '' : ' is-locked'), src: gearImg(g), alt: '' }),
        h('div', { class: 'rpg-gear-body' }, [
          h('b', { text: g.zh }), h('small', { class: 'rpg-chip', text: SLOTS[g.slot] }),
          h('p', { text: g.eff }),
          own ? null : need
        ]),
        own ? h('button', { class: 'rpg-btn' + (on ? ' rpg-btn-ghost' : ''), type: 'button', text: on ? T('卸下', 'Remove') : T('裝備', 'Equip'), onclick: function () { equip(g); } })
          : h('button', { class: 'rpg-btn', type: 'button', text: T('合成', 'Craft'), disabled: !ok, onclick: function () { craft(g); } })
      ]));
    });
    return h('section', { class: 'rpg-panel rpg-workshop' }, [
      h('h2', { text: T('工坊　', 'Workshop · ') + owned + ' / ' + GEAR.length }),
      h('p', { class: 'rpg-note', text: T('每件裝備合成一次，同一個部位一次穿一件。裝備只幫你多撐一下、或更快找回原文；過關標準一樣是答對 80%。', 'Each piece of gear is crafted once, and you wear one per slot. Gear only helps you last longer or find the source faster; the pass mark is still 80%.') }),
      slots, list, itemPanel()
    ]);
  }

  /* ---------- mistake book panel (character page) ---------- */
  function mistakeBook() {
    var ids = weakIds(), byDoc = {};
    ids.forEach(function (id) { (byDoc[weakKey(id)] = byDoc[weakKey(id)] || []).push(id); });
    var keys = Object.keys(byDoc).sort(function (a, b) { return byDoc[b].length - byDoc[a].length; });
    var list = h('div', { class: 'rpg-weak-list' });
    keys.forEach(function (key) {
      var d = M.docs[key], all = byDoc[key], due = all.filter(weakDue).length;
      list.appendChild(h('div', { class: 'rpg-weak-row' }, [
        h('div', { class: 'rpg-weak-info' }, [
          h('b', { text: docT(d) }),
          h('span', { text: d.code + SEP + all.length + T(' 題', all.length === 1 ? ' question' : ' questions') + (due < all.length ? T('（今天答錯 ' + (all.length - due) + ' 題，明天起可淨化）', ' (' + (all.length - due) + ' missed today, cleansable from tomorrow)') : '') })
        ]),
        h('button', { class: 'rpg-btn', type: 'button', text: T('練習', 'Practice'), onclick: function () { openDrill(key); } })
      ]));
    });
    var cleared = S.flags.cleansed || 0;
    return h('section', { class: 'rpg-panel rpg-weakbook' }, [
      h('h2', { text: T('錯題本　', 'Mistake Book · ') + ids.length }),
      h('p', { class: 'rpg-note', text: ids.length
        ? T('戰鬥或複習突擊答錯的題都會記在這裡。隔天以後再答對就能淨化，每淨化一題掉一份素材。複習突擊會優先出這裡的題。', 'Questions you miss in battles or review ambushes are kept here. Answer one correctly on a later day to cleanse it; each cleanse drops a material. Review ambushes draw from here first.')
        : (cleared ? T('錯題本是空的，累計淨化 ' + cleared + ' 題。', 'Your Mistake Book is empty. ' + cleared + ' cleansed so far.') : T('目前沒有錯題。戰鬥中答錯的題會記在這裡，隔天再來淨化。', 'No mistakes yet. Questions you miss in battle land here; come back the next day to cleanse them.')) }),
      ids.length ? list : null
    ]);
  }
  function openDrill(key) {
    var d = M.docs[key];
    loadBank(key).then(function (bank) {
      var want = {};
      weakIds(key).forEach(function (id) { want[id.slice(key.length + 1)] = id; });
      var qs = (bank.questions || []).filter(function (q) { return want[String(q.id)]; }).map(function (q) {
        delete want[String(q.id)];
        return Object.assign({}, q, { docKey: key, docTitle: docT(d) });
      });
      Object.keys(want).forEach(function (k) { delete S.weak[want[k]]; });   // bank was edited; drop stale entries
      saveState();
      if (!qs.length) { renderAll(); toast(T('這份文件沒有錯題了。', 'No mistakes left in this document.')); return; }
      var mi = clusterOf(d), box = h('div', { class: 'rpg-boss-fight' });
      modal([
        h('span', { class: 'rpg-tag', text: 'MISTAKE BOOK' }),
        h('h2', { text: T('錯題練習　', 'Mistake Practice · ') + docT(d) }),
        h('p', { class: 'rpg-modal-lead', text: T('共 ' + qs.length + ' 題，不扣分、不會被擊退。昨天以前答錯的題，這次答對就淨化。', qs.length + ' questions. No penalty and no knockout. Questions missed before today are cleansed when you get them right.') }),
        box
      ], { cls: 'rpg-modal-wide' });
      function go() {
        runBattle(box, {
          kind: 'drill', foe: mi >= 0 ? MOBS[mi] : T('錯題幽靈', 'Mistake Ghost'), foeImg: mi >= 0 ? asset('mob-' + mi) : null, cluster: mi,
          hearts: qs.length + 1, questions: shuffle(qs.slice()), again: function () {
            qs = qs.filter(function (q) { return S.weak[key + '#' + q.id]; });
            if (qs.length) go(); else toast(T('這份文件的錯題都淨化了！', 'Every mistake in this document is cleansed!'));
          },
          onEnd: function () { saveState(); refresh(); }
        });
      }
      go();
    }).catch(function (e) { console.warn('[rpg] mistake drill failed to load', e); toast(T('題庫讀不到，請稍後再試。', 'Could not load the question bank. Please try again later.')); });
  }

  /* ---------- daily patrol: a short, deliberate review set ----------
     Up to PATROL_Q questions a day: due mistakes first (up to 3), then passed sections, the ones due for
     review and least recently reviewed first, then more mistakes if still short. Never knocks you out.
     Each right answer pays like a review ambush; finishing counts toward the streak and drops a material. */
  function patrolPlan() {
    var today = dayKey(new Date()), now = Date.now(), plan = [];
    var weak = weakIds().filter(weakDue).sort(function (a, b) { return S.weak[a].t - S.weak[b].t; });
    var secs = [];
    Object.keys(S.quiz).forEach(function (key) {
      if (!M.docs[key] || !M.docs[key].quiz) return;
      Object.keys(S.quiz[key]).forEach(function (sid) {
        var r = S.quiz[key][sid];
        if (!M.docs[key].quiz[sid] || !r.pt || dayKey(new Date(r.pt)) === today) return;
        var last = Math.max(r.pt, S.review.last[key + '#' + sid] || 0);
        secs.push({ key: key, sid: sid, last: last, due: now - last >= reviewGap() });
      });
    });
    secs.sort(function (a, b) { return (b.due - a.due) || (a.last - b.last); });
    weak.slice(0, 3).forEach(function (id) { plan.push({ key: weakKey(id), qid: id.slice(weakKey(id).length + 1) }); });
    secs.forEach(function (x) { if (plan.length < PATROL_Q) plan.push({ key: x.key, sid: x.sid }); });
    weak.slice(3).forEach(function (id) { if (plan.length < PATROL_Q) plan.push({ key: weakKey(id), qid: id.slice(weakKey(id).length + 1) }); });
    return plan;
  }
  function patrolDone() { return S.patrol.d === dayKey(new Date()); }
  function patrolStrip() {
    if (!S.profile) return null;
    if (patrolDone()) return h('div', { class: 'rpg-patrol is-done' }, [
      h('span', { class: 'rpg-tag', text: T('每日巡邏', 'Daily Patrol') }),
      h('span', { class: 'rpg-patrol-text', text: T('今天的巡邏完成了：答對 ' + S.patrol.ok + ' / ' + S.patrol.n + '。明天再來。', 'Today\'s patrol is done: ' + S.patrol.ok + ' / ' + S.patrol.n + ' correct. Come back tomorrow.') })
    ]);
    var plan = patrolPlan();
    if (!plan.length) return null;
    var nw = plan.filter(function (x) { return x.qid; }).length;
    return h('div', { class: 'rpg-patrol' }, [
      h('span', { class: 'rpg-tag', text: T('每日巡邏', 'Daily Patrol') }),
      h('span', { class: 'rpg-patrol-text', text: T('今天 ' + plan.length + ' 題' + (nw ? '（錯題 ' + nw + '、複習 ' + (plan.length - nw) + '）' : '（複習讀過的章節）') +
        '。每題答對 +' + reviewXp() + ' XP，不會被擊退；完成算進連續天數，再掉 1 個素材。',
        plan.length + ' questions today' + (nw ? ' (' + nw + ' mistakes, ' + (plan.length - nw) + ' review)' : ' (review of sections you have read)') +
        '. +' + reviewXp() + ' XP per right answer and no knockout; finishing counts toward your streak and drops 1 material.') }),
      h('button', { class: 'rpg-btn rpg-btn-sm', type: 'button', text: T('出發巡邏', 'Start patrol'), onclick: openPatrol })
    ]);
  }
  function openPatrol() {
    if (!S.profile || patrolDone()) return;
    var plan = patrolPlan();
    if (!plan.length) { toast(T('還沒有可以複習的章節。先通過一節章節挑戰吧。', 'Nothing to review yet. Pass a section challenge first.')); return; }
    var keys = plan.map(function (x) { return x.key; }).filter(function (k, i, a) { return a.indexOf(k) === i; });
    Promise.all(keys.map(function (k) {
      return loadBank(k).then(function (b) { return [k, b.questions || []]; });
    })).then(function (pairs) {
      var banks = {}; pairs.forEach(function (p) { banks[p[0]] = p[1]; });
      var qs = [];
      plan.forEach(function (x) {
        var d = M.docs[x.key], bank = banks[x.key], q;
        if (x.qid != null) {
          q = bank.filter(function (y) { return String(y.id) === x.qid; })[0];
          if (!q) { delete S.weak[x.key + '#' + x.qid]; return; }   // bank was edited; drop the stale entry
        } else {
          var pool = bank.filter(function (y) { return y.section === x.sid; });
          q = pool[Math.floor(Math.random() * pool.length)];
        }
        if (q) qs.push(Object.assign({}, q, { docKey: x.key, docTitle: docT(d) }));
      });
      saveState();
      if (!qs.length) { toast(T('題庫讀不到，請稍後再試。', 'Could not load the question bank. Please try again later.')); return; }
      var box = h('div', { class: 'rpg-boss-fight' }), xp = 0;
      modal([
        h('span', { class: 'rpg-tag', text: 'PATROL' }),
        h('h2', { text: T('每日巡邏', 'Daily Patrol') }),
        h('p', { class: 'rpg-modal-lead', text: T('共 ' + qs.length + ' 題，來自你讀過的文件。答錯不扣分，會留在錯題本，明天起答對就能淨化。', qs.length + (qs.length > 1 ? ' questions' : ' question') + ' from documents you have read. Wrong answers cost nothing; they go to the Mistake Book, and answering them right from tomorrow on clears them.') }),
        box
      ], { cls: 'rpg-modal-wide' });
      runBattle(box, {
        kind: 'drill', foe: T('巡邏中的遺忘霧', 'Fog of Forgetting'), foeImg: null, cluster: -1, hearts: qs.length + 1, questions: qs, noAgain: true,
        endHead: T('今日巡邏完成', 'Patrol complete for today'),
        endLine: function () { return '+' + xp + T(' XP。', ' XP.'); },
        onAnswer: function (q, ok) {
          if (q.section) S.review.last[q.docKey + '#' + q.section] = Date.now();
          if (ok) { S.bonus += reviewXp(); S.review.ok++; xp += reviewXp(); }
          saveState();
        },
        onEnd: function (r) {
          S.patrol = { d: dayKey(new Date()), n: r.total, ok: r.score };
          S.review.day = dayKey(new Date());                     // no surprise ambush on a day already patrolled
          touchStreak();
          var src = qs[Math.floor(Math.random() * qs.length)];
          saveState();
          if (src && clusterOf(M.docs[src.docKey]) >= 0) dropMat(src.docKey);
          saveState(); refresh();
        }
      });
    }).catch(function (e) { console.warn('[rpg] patrol failed to load', e); toast(T('題庫讀不到，請稍後再試。', 'Could not load the question bank. Please try again later.')); });
  }

  /* ---------- character page ---------- */
  var cardFilter = 'ALL';
  /* 情報圖鑑: status traits of every boss / elite, revealed by the first fight against it (S.intel). */
  function intelPanel() {
    var foes = ZONES.map(function (z, i) { return { id: 'z' + i, name: z.boss, img: asset('boss-' + (i + 1)), where: T(z.zh + '魔王', z.en + ' boss') }; })
      .concat(ELITES.map(function (e) { return { id: e.id, name: e.name, img: asset('elite-' + e.id), where: T('精英', 'Elite'), elite: 1 }; }));
    var seen = foes.filter(function (f) { return S.intel[f.id]; }).length, open = eliteOpen();
    var list = h('ul', { class: 'rpg-intel-list' });
    foes.forEach(function (f) {
      var known = !!S.intel[f.id], named = known || !f.elite || open;
      list.appendChild(h('li', { class: known ? 'is-known' : '' }, [
        f.img && named ? h('img', { src: f.img, alt: '', loading: 'lazy' }) : h('span', { class: 'rpg-intel-q', text: '?' }),
        h('div', {}, [
          h('b', { text: named ? f.name : T('？？？', '???') }), h('small', { text: f.where }),
          h('p', { text: known ? traitText(f.id) : named ? T('尚未交手。打一次就會記下牠的狀態抗性。', 'Not fought yet. One fight records its status resistances.') : T('主職業升到「' + RANKS[ELITE_RANK].zh + '」後現身。', 'Appears once your main class reaches ' + RANKS[ELITE_RANK].en + '.') })
        ])
      ]));
    });
    return h('section', { class: 'rpg-panel rpg-intelpanel' }, [
      h('h2', { text: T('情報圖鑑　', 'Intel Codex · ') + seen + ' / ' + foes.length }),
      h('p', { class: 'rpg-note', text: T('每個部門技能有一項狀態專長，每隻魔王對中毒、麻痺、睡眠各有抗性。開戰前對照這裡挑技能。', 'Each department skill has one status specialty, and every boss has its own resistances to poison, paralysis and sleep. Check here before a fight to pick your skill.') }),
      list
    ]);
  }
  /* Title screen shown before a character exists (character page and map). */
  var CAST = ['qc-2', 'qa', 'production-3', 'engineering', 'warehouse-2'];
  function titleScreen(o) {
    return h('div', { class: 'rpg-title' }, [
      h('div', { class: 'rpg-title-cast', 'aria-hidden': 'true' }, CAST.map(function (id, i) {
        return h('img', { class: 'rpg-title-hero is-' + i, src: asset('class-' + id) || classImg(id.split('-')[0]), alt: '' });
      })),
      h('div', { class: 'rpg-title-body' }, [
        h('span', { class: 'rpg-tag', text: 'NEW GAME' }),
        h('h2', { text: o.title }),
        h('p', { class: 'rpg-title-lead', text: o.lead }),
        h('ul', { class: 'rpg-title-feats' }, o.feats.map(function (f) { return h('li', {}, [h('b', { text: f[0] }), f[1]]); })),
        h('div', { class: 'rpg-title-actions' }, [
          h('button', { class: 'rpg-btn', type: 'button', onclick: openOnboarding, text: T('建立角色', 'Create character') }),
          o.load ? h('button', { class: 'rpg-btn rpg-btn-ghost', type: 'button', onclick: importSave, text: T('讀取存檔', 'Load save') }) : null,
          h('a', { class: 'rpg-title-link', href: ROOT + T('rpg-guide.html', 'rpg-guide-en.html'), text: T('新手指南 →', 'Beginner\'s guide →') })
        ]),
        o.note ? h('p', { class: 'rpg-title-note', text: o.note }) : null
      ])
    ]);
  }
  function renderCharacter() {
    var mount = document.getElementById('rpg-character');
    if (!mount) return;
    clear(mount);
    if (!S.profile) {
      mount.appendChild(titleScreen({
        title: T('你的無菌廠冒險還沒開始', 'Your cleanroom quest hasn\'t started'),
        lead: T('選一個部門當職業，讀章節賺經驗值，通過章節挑戰升階。這一頁會變成你的角色卡。', 'Pick your department as a class, earn XP by reading sections, and rank up by passing section challenges. This page becomes your character sheet.'),
        feats: [[String(DEPTS.length), T(' 個職業，男女立繪任選', ' classes, male or female look')], [T('文件卡', 'Document cards'), T('：每讀完一份就收進圖鑑', ': one for every document you finish')], [T('夥伴', 'Companion'), T('：跟著你升階一起進化', ': evolves as you rank up')]],
        load: true,
        note: T('在別台電腦玩過？按「讀取存檔」把下載的存檔放回來。', 'Played on another computer? Use "Load save" to bring back the save file you downloaded.')
      }));
      return;
    }
    var c = G.classes[S.profile.cls], dep = c.dep, streak = liveStreak();

    /* hero */
    mount.appendChild(h('section', { class: 'rpg-hero', style: '--c:' + dep.color }, [
      h('img', { class: 'rpg-hero-art', src: heroImg(), alt: CLASS_META[dep.id].job }),
      h('div', { class: 'rpg-hero-info' }, [
        h('span', { class: 'rpg-tag', text: RANKS[c.rank].en.toUpperCase() }),
        h('h1', {}, [avatarEl('lg'), h('span', { text: S.profile.nick })]),
        h('p', { class: 'rpg-hero-job', text: T(RANKS[c.rank].zh + CLASS_META[dep.id].job + '　' + dep.nameZh + (bestTitle() ? '　｜　' + bestTitle() : ''), RANKS[c.rank].en + ' ' + CLASS_META[dep.id].job + SEP + dName(dep) + (bestTitle() ? ' | ' + bestTitle() : '')) }),
        h('div', { class: 'rpg-stats' }, [
          stat('Lv ' + G.level, T('等級', 'Level')), stat(String(G.xp), T('經驗值', 'XP')), stat(String(streak), T('連續天數', 'Day streak')),
          stat(G.cards + ' / ' + Object.keys(G.docs).filter(function (k) { return !G.docs[k].doc.shell; }).length, T('文件卡', 'Cards'))
        ]),
        h('div', { class: 'rpg-hero-xp' }, [xpBar(), h('small', { text: T('距離 Lv ' + (G.level + 1) + ' 還差 ' + (G.hi - G.xp) + ' XP' +
          (nextMile() ? '　｜　Lv ' + nextMile().lv + ' 里程碑：' + mileText(nextMile()) : ''),
          (G.hi - G.xp) + ' XP to Lv ' + (G.level + 1) + (nextMile() ? ' | Lv ' + nextMile().lv + ' milestone: ' + mileText(nextMile()) : '')) })]),
        h('button', { class: 'rpg-btn rpg-btn-ghost', type: 'button', onclick: openOnboarding, text: T('編輯角色／轉職', 'Edit character / change class') }),
        h('a', { class: 'rpg-btn rpg-btn-ghost rpg-hero-map', href: ROOT + 'map.html', text: T('闖關地圖', 'Quest Map') }),
        h('a', { class: 'rpg-btn rpg-btn-ghost rpg-guide-link', href: ROOT + T('rpg-guide.html', 'rpg-guide-en.html'), text: T('新手指南', 'Guide') }),
        h('button', { class: 'rpg-btn rpg-btn-ghost', type: 'button', onclick: function () { openPrologue(null); }, text: T('重看序章', 'Replay prologue') }),
        h('button', { class: 'rpg-btn rpg-btn-ghost', type: 'button', onclick: exportSave, text: T('下載存檔', 'Download save') }),
        h('button', { class: 'rpg-btn rpg-btn-ghost', type: 'button', onclick: importSave, text: T('讀取存檔', 'Load save') }),
        h('button', { class: 'rpg-btn rpg-btn-ghost', type: 'button', text: T('關閉冒險模式', 'Turn off adventure mode'), onclick: function () { lsSet(FLAG_KEY, '0'); location.href = ROOT + 'index.html'; } })
      ])
    ]));

    var pst = patrolStrip();
    if (pst) mount.appendChild(pst);
    mount.appendChild(intelPanel());

    /* pet */
    var petPanel = h('section', { class: 'rpg-panel rpg-petpanel' }, [h('h2', { text: T('夥伴', 'Companion') })]);
    if (S.pet) {
      var line = PETS[S.pet.line];
      petPanel.appendChild(h('div', { class: 'rpg-pet-now' }, [
        h('img', { class: petCls('rpg-idle'), src: petImg(S.pet.line, G.petStage), alt: line.stages[G.petStage - 1] }),
        h('div', {}, [
          h('b', { text: line.stages[G.petStage - 1] + (S.pet.shiny ? T('（異色）', ' (shiny)') : '') }),
          h('p', { text: G.petStage >= 4 ? T('已經是最終型態。', 'Already at its final form.') : T('下一次進化：任一職業升到「' + RANKS[G.petStage].zh + '」階級，進化為' + line.stages[G.petStage] + '。', 'Next evolution: when any class reaches ' + RANKS[G.petStage].en + ', it evolves into ' + line.stages[G.petStage] + '.') })
        ])
      ]));
    } else {
      petPanel.appendChild(h('div', { class: 'rpg-pet-now' }, [
        h('img', { class: 'rpg-wobble', src: eggImg(), alt: T('蛋', 'Egg') }),
        h('div', {}, [h('b', { text: T('還沒孵化', 'Not hatched yet') }), h('p', { text: T('讀完任何一節，蛋就會孵化。', 'Finish reading any section and the egg will hatch.') })])
      ]));
    }
    mount.appendChild(petPanel);

    /* main line */
    var main = h('section', { class: 'rpg-panel' }, [h('h2', { text: T('主線：' + dep.nameZh, 'Main quest: ' + dName(dep)) })]);
    c.tiers.forEach(function (t, i) {
      var rows = h('ul', { class: 'rpg-docrows' });
      t.tier.docs.forEach(function (x) {
        var d = M.docs[x.key], st = G.docs[x.key];
        var state, cls = '';
        if (!d || d.shell) { state = T('內容準備中', 'Coming soon'); cls = 'is-na'; }
        else if (st.cleared) { state = T('通關', 'Cleared'); cls = 'is-done'; }
        else if (st.quizSecs.length && st.readAll) state = T('挑戰 ', 'Challenges ') + st.passed + ' / ' + st.quizSecs.length;
        else state = st.started ? T('閱讀 ', 'Read ') + st.read + ' / ' + st.total : T('未開始', 'Not started');
        rows.appendChild(h('li', { class: cls }, [
          h('span', { class: 'rpg-chip' + (x.required ? ' is-req' : ''), text: x.required ? T('必讀', 'Required') : T('選讀', 'Optional') }),
          d ? h('a', { href: ROOT + d.file, text: docT(d) }) : h('span', { text: x.key }),
          d && d.quiz ? h('span', { class: 'rpg-chip is-quiz', text: T('有挑戰', 'Challenge') }) : null,
          h('span', { class: 'rpg-docstate', text: state })
        ]));
      });
      main.appendChild(h('details', { class: 'rpg-tier' + (t.done ? ' is-done' : ''), open: i === Math.min(c.rank, c.tiers.length - 1) }, [
        h('summary', {}, [
          h('b', { text: T(t.tier.labelZh + '　' + t.tier.label, t.tier.label) }),
          h('span', { text: T((t.anyOf ? '任選 ' : '必讀 ') + t.got + ' / ' + t.need + (t.done ? '　完成' : t.ready && t.hasBoss ? '　魔王待挑戰' : ''), (t.anyOf ? 'Any ' : 'Required ') + t.got + ' / ' + t.need + (t.done ? ' · Complete' : t.ready && t.hasBoss ? ' · Boss awaits' : '')) })
        ]), rows
      ]));
    });
    mount.appendChild(main);
    mount.appendChild(skillPanel(dep));

    /* titles */
    var titles = h('section', { class: 'rpg-panel' }, [h('h2', { text: T('稱號', 'Titles') })]);
    var tl = h('ul', { class: 'rpg-titles' });
    G.titles.forEach(function (t) {
      if (!t.n) return;
      tl.appendChild(h('li', { class: t.lv ? 'is-on' : '', style: '--c:' + t.color }, [
        h('b', { text: T(t.zh + (t.lv === 2 ? '大師' : '修習者'), t.zh + (t.lv === 2 ? ' Master' : ' Adept')) }),
        h('span', { text: T(t.got + ' / ' + t.n + ' 份通關' + (t.lv === 0 ? '（' + Math.min(5, t.n) + ' 份取得）' : t.lv === 1 ? '（全部通關升為大師）' : ''), t.got + ' / ' + t.n + ' cleared' + (t.lv === 0 ? ' (clear ' + Math.min(5, t.n) + ' to earn)' : t.lv === 1 ? ' (clear all to become Master)' : '')) })
      ]));
    });
    titles.appendChild(tl);
    var gotSecrets = SECRETS.filter(function (x) { return S.secrets[x.id]; }).length;
    titles.appendChild(h('h3', { class: 'rpg-sub', text: T('隱藏稱號　', 'Hidden Titles · ') + gotSecrets + ' / ' + SECRETS.length }));
    var sl = h('ul', { class: 'rpg-titles' });
    SECRETS.forEach(function (x) {
      var on = !!S.secrets[x.id];
      sl.appendChild(h('li', { class: on ? 'is-on' : '', style: '--c:#ff3d81' }, [
        h('b', { text: on ? x.zh : T('？？？', '???') }), h('span', { text: on ? x.how : T('條件未知', 'Unknown condition') })
      ]));
    });
    titles.appendChild(sl);
    mount.appendChild(titles);

    /* materials */
    var ml = h('ul', { class: 'rpg-mats' });
    CLUSTERS.forEach(function (c2, i) {
      var n = S.mats['c' + i] || 0;
      ml.appendChild(h('li', { class: n ? 'is-on' : '', style: '--c:' + c2.color }, [
        asset('mat-' + i) ? h('img', { class: 'rpg-mat-img', src: asset('mat-' + i), alt: '' }) : null,
        h('b', { text: String(n) }), h('span', { text: MATS[i] || c2.name }), h('small', { text: CLUSTER_ZH[i] || '' })
      ]));
    });
    var nb = S.mats.boss || 0;
    ml.appendChild(h('li', { class: 'rpg-mat-boss' + (nb ? ' is-on' : ''), style: '--c:#ff3d81' }, [
      matImg('boss') ? h('img', { class: 'rpg-mat-img', src: matImg('boss'), alt: '' }) : null,
      h('b', { text: String(nb) }), h('span', { text: BOSS_MAT }), h('small', { text: T('第一次打倒魔王', 'First win against each boss') })
    ]));
    mount.appendChild(h('section', { class: 'rpg-panel' }, [
      h('h2', { text: T('素材', 'Materials') }),
      h('p', { class: 'rpg-note', text: T('第一次通過章節挑戰、或答對複習突擊時，會得到該文件主題的素材；第一次打倒每個魔王，得到一顆魔王結晶。素材拿到下面的工坊合成裝備。', 'Pass a section challenge for the first time, or answer a review ambush right, to earn a material from that document\'s topic. Your first win against each boss gives a Boss Crystal. Take materials to the Workshop below to craft gear.') }),
      ml, convertRow()
    ]));
    mount.appendChild(workshop());
    mount.appendChild(mistakeBook());

    /* collection */
    var groups = ['ALL'].concat(Object.keys(GROUP_LABEL));
    var filt = h('div', { class: 'rpg-filter', role: 'tablist' });
    groups.forEach(function (g) {
      filt.appendChild(h('button', { type: 'button', class: cardFilter === g ? 'is-on' : '', text: g === 'ALL' ? T('全部', 'All') : GROUP_LABEL[g],
        onclick: function () { cardFilter = g; renderCharacter(); } }));
    });
    var grid = h('div', { class: 'rpg-cards' });
    var keys = Object.keys(G.docs).filter(function (k) { var d = G.docs[k].doc; return !d.shell && (cardFilter === 'ALL' || d.group === cardFilter); });
    keys.sort(function (a, b) { return (G.docs[b].card ? 1 : 0) - (G.docs[a].card ? 1 : 0) || a.localeCompare(b); });
    keys.forEach(function (k) { grid.appendChild(cardEl(G.docs[k], !G.docs[k].card)); });
    mount.appendChild(h('section', { class: 'rpg-panel' }, [
      h('h2', { text: T('文件卡圖鑑　', 'Document Cards · ') + keys.filter(function (k) { return G.docs[k].card; }).length + ' / ' + keys.length }),
      h('p', { class: 'rpg-note', text: T('讀完一份文件得到文件卡；有章節挑戰的文件全部過關後，卡片會覺醒；每一節都第一次挑戰就全對，會變成異色卡。稀有度依文件的章節數決定。', 'Finish reading a document to get its card. Pass every section challenge of a document and the card awakens; get every section right on the first try and it turns shiny. Rarity depends on how many sections the document has.') }),
      filt, grid
    ]));

    /* other classes + reset */
    var others = h('ul', { class: 'rpg-classes' });
    DEPTS.forEach(function (d2) {
      var r = G.classes[d2.id].rank;
      others.appendChild(h('li', { class: d2.id === dep.id ? 'is-on' : '', style: '--c:' + d2.color }, [
        h('b', { text: CLASS_META[d2.id].job }), h('span', { text: dName(d2) }), h('small', { text: L(RANKS[r]) })
      ]));
    });
    mount.appendChild(h('section', { class: 'rpg-panel' }, [
      h('h2', { text: T('各職業階級', 'Class ranks') }), others,
      h('button', { class: 'rpg-link-danger', type: 'button', text: T('清除角色資料（不影響閱讀紀錄與測驗紀錄）', 'Delete character data (reading progress and quiz records are kept)'), onclick: function () {
        var m = modal([
          h('h2', { text: T('清除角色資料？', 'Delete character data?') }),
          h('p', { class: 'rpg-modal-lead', text: T('會清掉暱稱、職業、夥伴、章節挑戰成績和連續天數，無法復原。閱讀進度和 Quiz Tracker 的紀錄會保留。', 'This erases your nickname, class, companion, section challenge scores and streak, and cannot be undone. Reading progress and Quiz Tracker records are kept.') }),
          h('button', { class: 'rpg-btn rpg-btn-danger', type: 'button', text: T('清除', 'Delete'), onclick: function () { lsDel(STATE_KEY); S = loadState(); m.close(); refresh(true); } })
        ]);
      } })
    ]));
  }
  /* ---------- stage map ----------
     One zone per tier, one stage per document, a boss gate at the end of each
     zone (the rank-up). Stages snake left-to-right then right-to-left. Nothing
     is hard-locked: later zones are fogged but every document stays readable. */
  var ZONES = [
    { zh: '啟程之島', en: 'Isle of Beginnings', cls: 'rpg-z0', boss: T('微粒魔', 'Particle Fiend') },
    { zh: '修練之島', en: 'Isle of Practice', cls: 'rpg-z1', boss: T('生物膜王', 'Biofilm King') },
    { zh: '核心之島', en: 'Isle of Mastery', cls: 'rpg-z2', boss: T('內毒素龍', 'Endotoxin Dragon') }
  ];
  var mapCols = 0;
  function mapColsFor(w) { return w < 520 ? 3 : w < 820 ? 4 : 5; }
  function renderMap() {
    var mount = document.getElementById('rpg-map');
    if (!mount) return;
    clear(mount);
    if (!S.profile) {
      mount.appendChild(titleScreen({
        title: T('地圖還在雲霧裡', 'The map is still under cloud'),
        lead: T('建立角色、選一個職業，這裡就會展開那個職業的闖關路線，從入口一路打到核心區。', 'Create a character and pick a class, and its route opens here, from the entrance all the way to the core.'),
        feats: [[T('小怪', 'Minions'), T('：每讀完一節打一隻', ': one per section you finish')], [T('區域魔王', 'Zone bosses'), T('：通關後現身', ': appear when you clear a zone')], [String(ELITES.length), T(' 隻精英魔王，選打不影響升階', ' optional elite bosses')]]
      }));
      return;
    }
    var c = G.classes[S.profile.cls], dep = c.dep, q = nextQuest();
    var curKey = q && !q.done && q.st ? q.st.key : null;
    var cols = mapCols = mapColsFor(mount.clientWidth || window.innerWidth);

    mount.appendChild(h('header', { class: 'rpg-map-head', style: '--c:' + dep.color }, [
      h('span', { class: 'rpg-tag', text: 'WORLD MAP' }),
      h('h1', { text: T(dep.nameZh + '　闖關地圖', dName(dep) + ' Quest Map') }),
      h('p', { text: T('目前階級：' + RANKS[c.rank].zh + CLASS_META[dep.id].job + '。每一關是一份文件，走到區域盡頭通過升階試煉就能進下一區。', 'Current rank: ' + RANKS[c.rank].en + ' ' + CLASS_META[dep.id].job + '. Each stage is one document; pass the rank trial at the end of a zone to move on to the next.') }),
      h('button', { class: 'rpg-btn rpg-btn-ghost', type: 'button', onclick: openOnboarding, text: T('換職業看別的地圖', 'Switch class to see another map') }),
      h('a', { class: 'rpg-btn rpg-btn-ghost rpg-guide-link', href: ROOT + T('rpg-guide.html', 'rpg-guide-en.html'), text: T('新手指南', 'Guide') })
    ]));

    c.tiers.forEach(function (t, ti) {
      var zone = ZONES[ti] || ZONES[ZONES.length - 1];
      var stages = t.tier.docs.filter(function (x) { return M.docs[x.key]; });
      var isRec = function (x) { return t.rec.indexOf(x.key) >= 0; };
      stages = stages.filter(function (x) { return x.required; })
        .concat(stages.filter(function (x) { return !x.required && isRec(x); }), stages.filter(function (x) { return !x.required && !isRec(x); }));
      var fog = ti > c.rank;
      var list = h('ol', { class: 'rpg-stages', style: '--cols:' + cols });
      var total = stages.length + 1;                              // + boss gate

      function place(li, i) {
        var row = Math.floor(i / cols), col = i % cols, last = i === total - 1;
        var dir = last ? '' : (col === cols - 1 ? ' to-down' : (row % 2 ? ' to-left' : ' to-right'));
        if (row % 2) col = cols - 1 - col;
        li.style.gridRow = String(row + 1);
        li.style.gridColumn = String(col + 1);
        li.className += dir;
        list.appendChild(li);
      }

      stages.forEach(function (x, i) {
        var d = M.docs[x.key], st = G.docs[x.key], here = x.key === curKey;
        var pct = d.shell ? 0 : Math.round(st.read / Math.max(1, st.total) * 100);
        var maxStars = d.quiz ? 4 : 1;
        var stars = (st.readAll || st.cleared ? 1 : 0) + (d.quiz && st.cleared ? 1 : 0) + (st.shiny ? 1 : 0) + (st.guardWon ? 1 : 0);
        var starText = '';
        for (var k = 0; k < maxStars; k++) starText += k < stars ? '★' : '☆';
        var cls = 'rpg-stage' + (st.cleared ? ' is-clear' : '') + (here ? ' is-here' : '') + (x.required || isRec(x) ? '' : ' is-side') + (d.shell ? ' is-shell' : '');
        var inner = [
          here ? h('span', { class: 'rpg-stage-you' }, [avatarEl(), S.pet ? h('img', { class: petCls('rpg-idle'), src: petImg(S.pet.line, G.petStage), alt: '' }) : null]) : null,
          h('span', { class: 'rpg-stage-dot', style: '--p:' + pct + '%;--bar:' + d.bar }, [h('b', { text: st.cleared ? '✓' : String(i + 1) })]),
          h('span', { class: 'rpg-stage-stars', 'aria-label': stars + ' / ' + maxStars + T(' 星', ' stars'), text: d.shell ? T('準備中', 'Coming soon') : starText }),
          h('span', { class: 'rpg-stage-name', text: docT(d) }),
          h('span', { class: 'rpg-stage-meta', text: d.shell ? '' : T((x.required ? '' : isRec(x) ? '推薦・' : '支線・') + (st.cleared ? '通關' : st.started ? st.read + ' / ' + st.total + ' 節' : st.total + ' 節') + (d.quiz ? '・有挑戰' : ''),
            (x.required ? '' : isRec(x) ? 'Recommended · ' : 'Side · ') + (st.cleared ? 'Cleared' : st.started ? st.read + ' / ' + st.total + ' sections' : st.total + ' sections') + (d.quiz ? ' · Challenge' : '')) })
        ];
        var node = d.shell ? h('span', { class: 'rpg-stage-link' }, inner)
          : h('a', { class: 'rpg-stage-link', href: here ? q.href : ROOT + d.file, title: d.title }, inner);
        var gBtn = st.guard === 'ready' ? h('button', { type: 'button', class: 'rpg-btn rpg-btn-sm rpg-guard-btn', text: T('守關者現身', 'Gatekeeper is here'), onclick: function () { openGuard(x.key); } })
          : st.guard === 'wait' ? h('span', { class: 'rpg-stage-meta rpg-guard-wait', text: T('守關者明天現身', 'Gatekeeper appears tomorrow') })
          : st.guard === 'won' ? h('span', { class: 'rpg-stage-meta', text: T('守關者已擊敗', 'Gatekeeper defeated') }) : null;
        place(h('li', { class: cls + (st.cleared ? ' path-done' : '') }, [node, gBtn]), i);
      });

      var canFight = t.ready && t.hasBoss && !t.beaten;
      var canWeak = t.hasBoss && t.beaten && !S.weakWin[dep.id + ':' + ti] && canCounter(ti);   // already beaten: come back with a counter skill
      var bossInner = [
        asset('boss-' + (ti + 1))
          ? h('img', { class: 'rpg-boss-img', src: asset('boss-' + (ti + 1)), alt: zone.boss })
          : h('span', { class: 'rpg-stage-dot' }, [h('b', { text: t.done ? '✓' : 'BOSS' })]),
        h('span', { class: 'rpg-stage-name', text: T((t.done ? '已擊敗　' : '魔王　') + zone.boss, (t.done ? 'Defeated · ' : 'Boss · ') + zone.boss) }),
        h('span', { class: 'rpg-stage-meta', text: T('升階試煉：' + RANKS[ti + 1].zh + CLASS_META[dep.id].job, 'Rank trial: ' + RANKS[ti + 1].en + ' ' + CLASS_META[dep.id].job) }),
        h('span', { class: 'rpg-stage-meta', text: T((t.anyOf ? '任選通關 ' : '必讀通關 ') + t.got + ' / ' + t.need +
          (!t.hasBoss ? '・本區沒有魔王戰' : t.beaten ? '・魔王已擊敗' : t.ready ? '・魔王現身了' : '・通關後魔王現身'),
          (t.anyOf ? 'Cleared (any) ' : 'Required cleared ') + t.got + ' / ' + t.need +
          (!t.hasBoss ? ' · No boss fight in this zone' : t.beaten ? ' · Boss defeated' : t.ready ? ' · The boss has appeared' : ' · The boss appears once these are cleared')) }),
        t.hasBoss ? h('span', { class: 'rpg-stage-meta rpg-weak-meta', text: T('弱點：', 'Weak to: ') + weakText(ti) + (S.weakWin[dep.id + ':' + ti] ? T('・已弱點擊破', ' · Weak point broken') : '') }) : null,
        canFight ? h('span', { class: 'rpg-btn rpg-btn-sm', text: T('挑戰', 'Fight') }) : canWeak ? h('span', { class: 'rpg-btn rpg-btn-sm rpg-btn-ghost', text: T('弱點擊破', 'Weak-Point Break') }) : null
      ];
      place(h('li', { class: 'rpg-stage rpg-boss' + (t.done ? ' is-clear' : '') + (canFight ? ' is-ready' : '') }, [
        canFight || canWeak ? h('button', { type: 'button', class: 'rpg-stage-link', onclick: function () { openBoss(ti); } }, bossInner)
          : h('span', { class: 'rpg-stage-link' }, bossInner)
      ]), total - 1);

      mount.appendChild(h('section', { class: 'rpg-zone ' + zone.cls + (t.done ? ' is-done' : '') + (fog ? ' is-fog' : '') }, [
        h('div', { class: 'rpg-zone-head' }, [
          h('span', { class: 'rpg-zone-no', text: 'ZONE ' + (ti + 1) }),
          h('h2', {}, [L(zone), h('small', { text: T(zone.en + '　' + t.tier.labelZh + ' ' + t.tier.label, t.tier.label) })]),
          h('span', { class: 'rpg-zone-state', text: t.done ? T('已攻略', 'Conquered') : t.ready && t.hasBoss ? T('魔王現身了，擊敗牠就能升階', 'The boss has appeared. Defeat it to rank up') : fog ? T('完成前一區的升階試煉後正式開放（文件仍可先讀）', 'Opens after the previous zone\'s rank trial (you can still read the documents)') : T('攻略中 ', 'In progress ') + t.got + ' / ' + t.need })
        ]),
        list
      ]));
    });
    mount.appendChild(eliteSection());
  }
  /* Elite bosses below the zones: optional, open to every class from ELITE_RANK. */
  function eliteSection() {
    var open = eliteOpen();
    return h('section', { class: 'rpg-elites' + (open ? '' : ' is-fog') }, [
      h('div', { class: 'rpg-zone-head' }, [
        h('span', { class: 'rpg-zone-no', text: 'ELITE' }),
        h('h2', {}, [T('精英魔王', 'Elite Bosses'), h('small', { text: T('Elite Bosses　針劑的其他失敗模式', 'Other ways an injectable can fail') })]),
        h('span', { class: 'rpg-zone-state', text: open ? T('選打，不影響升階；題目來自全站相關文件', 'Optional and not needed to rank up; questions come from related documents across the site') : T('主職業升到' + RANKS[ELITE_RANK].zh + '後出沒', 'Appear once your main class reaches ' + RANKS[ELITE_RANK].en) })
      ]),
      h('ul', { class: 'rpg-elite-list' }, ELITES.map(function (e) {
        var won = S.eliteWin[e.id], wk = S.weakWin['elite:' + e.id], img = asset('elite-' + e.id);
        var act = !open ? 'view' : !won ? 'fight' : !wk && canCounterMap(e.weak) ? 'weak' : 'again';   // key, not display text
        var actL = { view: T('查看', 'View'), fight: T('挑戰', 'Fight'), weak: T('弱點擊破', 'Weak-Point Break'), again: T('再戰', 'Rematch') };
        var li = h('li', { class: 'rpg-elite' + (won ? ' is-clear' : '') + (won && img && !S.eliteSeen[e.id] ? ' is-reveal' : '') + (open && !won ? ' is-ready' : ''), style: '--c:' + e.fx.c }, [
          h('button', { type: 'button', class: 'rpg-elite-btn', onclick: function () { openElite(e.id); } }, [
            img ? h('img', { class: 'rpg-boss-img', src: img, alt: e.name }) : h('span', { class: 'rpg-elite-sil', 'aria-hidden': 'true', text: '？' }),
            h('span', { class: 'rpg-elite-body' }, [
              h('b', { text: (won ? T('已擊敗　', 'Defeated · ') : '') + e.name }),
              h('span', { class: 'rpg-stage-meta', text: e.risk }),
              h('span', { class: 'rpg-stage-meta rpg-weak-meta', text: T('弱點：', 'Weak to: ') + Object.keys(e.weak).map(elName).join(LIST) + (wk ? T('・已弱點擊破', ' · Weak point broken') : '') }),
              e.needTag ? h('span', { class: 'rpg-stage-meta rpg-weak-meta', text: T('入場條件：攜帶', 'Entry requires: ') + (e.needName || T('對應道具', 'the matching item')) + (ITEMS.some(function (x) { return itemTag(x, e.needTag) && S.items[x.id]; }) ? T('（已持有）', ' (owned)') : T('（到工坊合成）', ' (craft it in the Workshop)')) }) : null,
              h('span', { class: 'rpg-stage-meta', text: won ? T('稱號：' + e.title + '・最佳 ' + won.best + ' / ' + won.total, 'Title: ' + e.title + ' · Best ' + won.best + ' / ' + won.total) : T('擊敗得稱號「' + e.title + '」', 'Defeat it to earn the title "' + e.title + '"') })
            ]),
            h('span', { class: 'rpg-btn rpg-btn-sm' + (act === 'fight' ? '' : ' rpg-btn-ghost'), text: actL[act] })
          ])
        ]);
        if (/ is-reveal/.test(li.className)) playReveal(li, e);
        return li;
      }))
    ]);
  }
  /* First defeat of an elite: the silhouette turns to full colour once, when the card is on screen
     and no battle window covers it. eliteSeen keeps it from replaying. */
  function playReveal(li, e) {
    function go() {
      if (!li.isConnected || S.eliteSeen[e.id]) return;
      if (document.querySelector('.rpg-modal')) { setTimeout(go, 400); return; }
      S.eliteSeen[e.id] = 1; saveState();
      li.classList.add('is-go');
      setTimeout(function () { li.classList.remove('is-reveal', 'is-go'); toast(T('圖鑑收錄：', 'Added to the codex: ') + e.name); }, 1000);
    }
    if (!('IntersectionObserver' in window)) { setTimeout(go, 0); return; }
    var io = new IntersectionObserver(function (en) {
      if (en.some(function (x) { return x.isIntersecting; })) { io.disconnect(); go(); }
    }, { threshold: 0.6 });
    setTimeout(function () { io.observe(li); }, 0);
  }
  window.addEventListener('resize', function () {
    var mount = document.getElementById('rpg-map');
    if (mount && G && mapColsFor(mount.clientWidth) !== mapCols) renderMap();
  });

  /* Skills: the main class's, plus one per other department, learned by finishing its required documents. */
  function skillPanel(dep) {
    var ul = h('ul', { class: 'rpg-skills' });
    var ids = [dep.id].concat(DEPTS.map(function (d) { return d.id; }).filter(function (id) { return id !== dep.id; }));
    ids.forEach(function (id) {
      var d = deptById(id), sp = fxYou(id), k = G.skills[id], main = id === dep.id, on = main || k.learned;
      var beats = ZONES.map(function (z, ti) { return isWeak(ti, id) ? z.boss : null; })
        .concat(ELITES.map(function (e) { return e.weak[id] ? e.name : null; })).filter(Boolean);
      ul.appendChild(h('li', { class: on ? 'is-on' : '', style: '--c:' + sp.c }, [
        h('b', { text: sp.skill }),
        h('span', { text: sp.el + SEP + dName(d) }),
        h('span', { class: 'rpg-skill-beats', text: beats.length ? T('剋 ', 'Beats ') + beats.join(LIST) : '' }),
        h('small', { text: main ? T('主技能', 'Main skill') : k.learned ? T('已習得', 'Learned') : k.need ? T('必讀 ', 'Required ') + k.got + ' / ' + k.need : T('尚無必讀文件', 'No required documents yet') }),
        !on && k.need ? h('i', { class: 'rpg-skill-bar', style: '--p:' + Math.round(k.got / k.need * 100) + '%' }) : null
      ]));
    });
    return h('section', { class: 'rpg-panel' }, [
      h('h2', { text: T('技能與第二專長', 'Skills and second specialties') }),
      h('p', { class: 'rpg-note', text: T('讀完其他部門的全部必讀文件（有挑戰的要過關），就能習得該部門的技能。魔王戰前可以選一個技能出戰；' +
        '帶著魔王怕的技能是「弱點擊破」：多 1 顆心，魔王開場睡著（睡著時答錯不扣心，每回合 1/3 機率醒來），第一次用弱點技能打倒牠再得 ' + XP_WEAK + ' XP 和 1 顆' + BOSS_MAT + '。及格線一樣是 80%。',
        'Finish all required documents of another department (passing any challenges) to learn its skill. Before a boss fight you pick one skill to bring. ' +
        'Bringing a skill the boss fears is a "Weak-Point Break": +1 heart, and the boss starts asleep (wrong answers cost no heart while it sleeps; it has a 1/3 chance to wake each turn). Your first win with a weak-point skill gives another ' + XP_WEAK + ' XP and 1 ' + BOSS_MAT + '. The pass mark is still 80%.') }),
      ul
    ]);
  }
  function stat(v, l) { return h('div', { class: 'rpg-stat' }, [h('b', { text: v }), h('span', { text: l })]); }

  function renderAll() {
    renderBar(); renderQuest(); renderCharacter(); renderMap(); palDraw();
    var qm = document.getElementById('rpg-quest');
    if (qm && S.profile) { var ps = patrolStrip(); if (ps) qm.appendChild(ps); }
    listeners.forEach(function (cb) { try { cb(); } catch (e) { console.warn('[rpg] listener failed', e); } });
  }

  /* ---------- API for rpg/map3d.js ---------- */
  var listeners = [];
  function mapData() {
    if (!S || !S.profile || !G) return null;
    var c = G.classes[S.profile.cls], dep = c.dep, q = nextQuest();
    var curKey = q && !q.done && q.st ? q.st.key : null;
    return {
      cls: dep.id, name: dName(dep), color: dep.color, rank: c.rank,
      avatar: avatarImg(S.profile.avatar),
      pet: S.pet ? petImg(S.pet.line, G.petStage) : null,
      zones: c.tiers.map(function (t, ti) {
        var zone = ZONES[ti] || ZONES[ZONES.length - 1];
        return {
          zh: L(zone), boss: zone.boss, bossImg: asset('boss-' + (ti + 1)), rankName: T(RANKS[ti + 1].zh + CLASS_META[dep.id].job, RANKS[ti + 1].en + ' ' + CLASS_META[dep.id].job),
          ti: ti, unlocked: ti <= c.rank, done: t.done, ready: t.ready, hasBoss: t.hasBoss, beaten: t.beaten, weak: weakText(ti), weakWon: !!S.weakWin[c.dep.id + ':' + ti], canCounter: canCounter(ti),
          got: t.got, need: t.need, anyOf: t.anyOf,
          stages: t.tier.docs.filter(function (x) { return M.docs[x.key]; }).map(function (x) {
            var d = M.docs[x.key], st = G.docs[x.key], here = x.key === curKey;
            return {
              key: x.key, title: docT(d), main: x.required || t.rec.indexOf(x.key) >= 0, rec: t.rec.indexOf(x.key) >= 0, shell: d.shell, quiz: !!d.quiz,
              cleared: st.cleared, started: st.started, read: st.read, total: st.total, shiny: st.shiny, here: here,
              guard: st.guard, guardHref: ROOT + 'map.html?guard=' + encodeURIComponent(x.key),
              stars: (st.guardWon ? 1 : 0) + (st.readAll || st.cleared ? 1 : 0) + (d.quiz && st.cleared ? 1 : 0) + (st.shiny ? 1 : 0), maxStars: d.quiz ? 4 : 1,
              href: here ? q.href : ROOT + d.file
            };
          })
        };
      }),
      elites: ELITES.map(function (e) {
        return {
          id: e.id, name: e.name, risk: e.risk, color: e.fx.c, img: asset('elite-' + e.id), open: eliteOpen(),
          won: !!S.eliteWin[e.id], weakWon: !!S.weakWin['elite:' + e.id], canCounter: canCounterMap(e.weak),
          weak: Object.keys(e.weak).map(elName).join(LIST), title: e.title, unlock: T(RANKS[ELITE_RANK].zh + CLASS_META[dep.id].job, RANKS[ELITE_RANK].en + ' ' + CLASS_META[dep.id].job),
          needName: e.needName || '', hasItem: !e.needTag || ITEMS.some(function (x) { return itemTag(x, e.needTag) && S.items[x.id]; })
        };
      })
    };
  }
  window.SGKRpg = {
    ready: false,
    mapData: mapData,
    fightBoss: function (ti) { openBoss(ti); },
    fightElite: function (id) { openElite(id); },
    onChange: function (cb) { listeners.push(cb); },
    /* Remember how many stages the 3D map showed; returns the previous count (null on the first visit). */
    mapSeen: function (n) {
      var id = S.profile.cls, prev = id in S.mapSeen ? S.mapSeen[id] : null;
      if (prev !== n) { S.mapSeen[id] = n; saveState(); }
      return prev;
    }
  };

  /* ---------- boot ---------- */
  function loadScript(src) {
    return new Promise(function (res, rej) {
      var s = document.createElement('script');
      s.src = src; s.onload = res; s.onerror = rej;
      document.head.appendChild(s);
    });
  }
  function boot() {
    langSwitch();
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
      window.SGKRpg.ready = true;
      document.dispatchEvent(new Event('sgk-rpg-ready'));
      setTimeout(maybeReview, 1200);
      try {
        var bq = new URLSearchParams(location.search).get('boss');
        if (bq !== null && document.getElementById('rpg-map')) setTimeout(function () { openBoss(parseInt(bq, 10) || 0); }, 300);
        var eq = new URLSearchParams(location.search).get('elite');
        if (eq && document.getElementById('rpg-map')) setTimeout(function () { openElite(eq); }, 300);
        var gq = new URLSearchParams(location.search).get('guard');
        if (gq && document.getElementById('rpg-map') && M.docs[gq]) setTimeout(function () { openGuard(gq); }, 300);
      } catch (e) {}
      window.addEventListener('storage', function (e) {
        if (e.key && (e.key === STATE_KEY || e.key.indexOf('sgk_progress_') === 0)) { S = loadState(); refresh(); }
      });
      window.addEventListener('pageshow', function (e) { if (e.persisted) { S = loadState(); refresh(); } });
    }).catch(function (e) { console.warn('[rpg] failed to start', e); });
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', boot); else boot();
})();
