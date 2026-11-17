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
    a: { color: '#38bdf8', voice: '咕嚕', stages: ['水滴精靈', '霧氣精靈', '蒸氣小龍', '雲海龍王'] },
    b: { color: '#34d399', voice: '呼呼', stages: ['雛梟', '風梟', '層流大梟', '無塵天梟'] },
    c: { color: '#a78bfa', voice: '啵', stages: ['玻瓶史萊姆', '晶體獸', '琉璃守衛獸', '琉璃聖獸'] }
  };
  var CLUSTER_ZH = ['無菌製程', '滅菌過濾', '容器密封', '品質系統', '環境監測', '檢驗方法', '廠房設備', '先進療法', '法規遵循', '新興技術'];
  var RARITY = ['N', 'R', 'SR', 'SSR'];
  // One crafting material per topic cluster ('c<i>'), plus 魔王結晶 ('boss') from each boss's first defeat.
  var MATS = ['無菌結晶', '濾膜碎片', '硼矽玻片', '簽核印記', '培養皿之塵', '試劑滴', '不鏽鋼鉚釘', '細胞微光', '法典書頁', '電路晶片'];
  var BOSS_MAT = '魔王結晶', CONVERT = 3;          // workshop: CONVERT of one material -> 1 of another (not boss crystals)
  var XP_REVIEW = 15, REVIEW_GAP = 7 * 24 * 3600 * 1000;
  /* Equipment, crafted once each from materials, one item per slot. Effects help you
     stay in a fight or find the source again; none of them changes how a fight is
     scored (80 % right is still the pass mark). Art: rpg/assets/gear-<id>.webp. */
  var SLOTS = { head: '頭部', body: '身體', hand: '手', charm: '飾品', pet: '夥伴', frame: '外框' };
  var GEAR = [
    { id: 'gloves', slot: 'hand', zh: '無菌手套', eff: '每場戰鬥第一次答錯不扣心（仍算答錯）', need: { c0: 2, c6: 1 } },
    { id: 'goggles', slot: 'head', zh: '防霧護目鏡', eff: '作答前先顯示這題的出處章節', need: { c2: 2, c5: 1 } },
    { id: 'cape', slot: 'body', zh: '層流披風', eff: '魔王戰多 1 顆心', need: { c1: 2, c0: 1, c4: 1 } },
    { id: 'bookmark', slot: 'charm', zh: '法典書籤', eff: '答錯時出現「回原文」，直接跳到那一節', need: { c8: 2, c3: 1 } },
    { id: 'amulet', slot: 'charm', zh: '培養皿護符', eff: '複習突擊答對多 +5 XP', need: { c4: 2, c7: 1 } },
    { id: 'watch', slot: 'charm', zh: '晶片懷錶', eff: '複習突擊提早到 5 天後出現', need: { c9: 2, c6: 1 } },
    { id: 'ribbon', slot: 'pet', zh: '夥伴領巾', eff: '夥伴戴上領巾，閱讀時會多說幾句', need: { c7: 2, c2: 1 } },
    { id: 'gemframe', slot: 'frame', zh: '結晶外框', eff: '頭像換成會發光的結晶外框', need: { c0: 3, boss: 1 } },
    { id: 'armor', slot: 'body', zh: '無塵聖甲', eff: '魔王戰多 2 顆心，小怪戰多 1 顆心', need: { boss: 2, c1: 2, c6: 2 } }
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
  var WEAK = [
    { production: '無菌操作與更衣紀律，從源頭擋住落塵', engineering: 'HVAC 與 HEPA 把微粒抽走', warehouse: '物料進出潔淨區的除污與傳遞，不把微粒帶進來',
      qa: '可見異物檢查與批次放行，有微粒的產品出不了廠' },
    { qc: '微生物鑑定與環境監測，抓出生物膜的蹤跡', techservice: '清潔確效與 CIP／SIP，刷掉築好的膜', bt: '水系統與監測數據的趨勢，提早看見生物膜成形',
      ra: '藥典製藥用水規格與微生物限值，劃清水質紅線' },
    { qa: '去熱原確效與放行把關，熱原出不了廠', ra: '藥典內毒素限值與法規要求，劃清紅線',
      qc: '細菌內毒素試驗與熱原試驗，量出牠藏了多少', techservice: '除熱原確效與內毒素指標物挑戰，證明降了 3 log' }
  ];
  var XP_WEAK = 50;
  /* Elite bosses: optional fights about other injectable failure modes (the zone bosses cover what
     gets into the product; these cover where the process breaks). Questions come from every bank
     that covers the topic, whatever the player's class, so classes without zone bosses can fight
     too. They never gate rank-up. src: { key, secs: [section ids], ids: [question ids] } — a doc
     with neither takes its whole bank. Art: rpg/assets/elite-<id>.webp (silhouette until then). */
  var ELITES = [
    { id: 'spore', name: '孢子騎士', risk: '滅菌不足：耐熱芽孢、BI 存活、F0 不夠',
      fx: { el: '芽孢系', skill: '耐熱芽孢槍', c: '#b45309', m: 'fly', g: 'spore', n: 6, size: 26, spin: 1, imp: { dots: 14, tint: 'burn', quake: 1 } },
      src: [{ key: 'TR1' }, { key: 'pda-guide-no1', secs: ['sec10', 'sec11'] }],
      srcText: 'PDA TR1 濕熱滅菌確效、PDA Guide No.1 滅菌與無菌流路',
      weak: { engineering: '滅菌器設計與熱分布，讓每個冷點都達到 F0', techservice: '滅菌確效與生物指示劑挑戰，證明孢子活不下來', qc: 'BI 培養與無菌試驗，抓出漏網的芽孢' },
      needTag: 'sporicide', needName: '殺孢劑', needText: '芽孢殼太硬：75% 酒精和季銨鹽只殺得死營養型細菌，殺不死芽孢。帶一瓶殺孢劑才進得了這場戰鬥',
      line: '「121 °C 才 15 分鐘？我的芽孢殼耐得住。」', rage: '「冷點在哪你找得到嗎？我就躲在那裡！」', title: '孢子獵人' },
    { id: 'crack', name: '裂隙幽靈', risk: '容器密封失效：微漏、膠塞、軋蓋',
      fx: { el: '裂隙系', skill: '微漏穿隙', c: '#0ea5e9', m: 'swarm', g: 'ghost', n: 3, size: 40, imp: { mark: 'crack', dots: 10, dc: '#bae6fd', quake: 1 } },
      src: [{ key: 'pda-guide-no1', secs: ['sec6', 'sec7', 'sec9'], ids: [2, 9, 93] }, { key: 'FDA-Aseptic', ids: [13, 15] },
            { key: 'PICS-Annex1', ids: [37] }, { key: 'TR22', ids: [12, 18, 25] }],
      srcText: 'PDA Guide No.1 容器密封與封蓋、Annex 1、FDA 無菌製程、TR22 的密封相關題',
      weak: { production: '加塞與軋蓋的製程管控，每一瓶都蓋好封緊', qc: '容器密封完整性測試，找出看不見的微漏', warehouse: '包材進料檢驗與搬運保護，裂瓶和變形膠塞上不了線' },
      line: '「只要一道你看不見的縫，我就進得去。」', rage: '「膠塞歪一點、軋蓋鬆一點，就夠了！」', title: '封緘守門人' },
    { id: 'forge', name: '竄改魅影', risk: '資料完整性失效：共用帳號、補登、改數據、關稽核軌跡',
      fx: { el: '竄改系', skill: '數據改寫', c: '#e11d48', m: 'stream', g: 'bits', n: 12, size: 18, imp: { tint: 'glitch', dots: 10, flash: 1 } },
      src: [{ key: 'TR84', ids: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40] }],
      srcText: 'PDA TR84 資料完整性：ALCOA+、資料 criticality 與 vulnerability、9-Box、稽核軌跡',
      weak: { bt: '個人帳號、權限分級與稽核軌跡設定，每筆修改都留下誰、何時、改了什麼', qa: 'ALCOA+ 與批紀錄審查，放行前看過稽核軌跡',
              qc: '實驗室數據審查，層析圖重積分與重複測試逃不過' },
      needTag: 'trace', needName: '追溯工具', needText: '竄改魅影躲在共用帳號和關掉的稽核軌跡後面：看不出是誰、何時、改了什麼，你連牠在哪都找不到。帶一件能追溯修改的道具才進得了這場戰鬥',
      line: '「數字改一下就好，反正沒人看得出來。」', rage: '「群組帳號登入，誰改的？你查不到！」', title: '數據守誓者' },
    { id: 'mixup', name: '混淆魔', risk: '混淆與錯標：貼錯標籤、混批、清線不徹底、狀態標示不清',
      fx: { el: '混淆系', skill: '標籤調包', c: '#d946ef', m: 'swarm', g: 'page', n: 6, size: 28, spin: 1, imp: { mark: 'cross', dots: 10, flash: 1 } },
      src: [{ key: 'FDA-21CFR-211', secs: ['sec4'] }, { key: 'FDA-ProcessInspection', ids: [21] }, { key: 'PICS-PE011', ids: [16] },
            { key: 'TR52', ids: [11, 15] }, { key: 'ISPE-Vol3', ids: [7, 18] }, { key: 'ISPE-Vol6', ids: [9, 21, 27] }, { key: 'pda-guide-no1', ids: [75] }],
      srcText: '21 CFR 211 包裝與標示管制、FDA 無菌製程檢查未貼標容器、PIC/S PE011 與 TR52 的隔離與狀態管制、ISPE Vol.3/Vol.6 混淆與多產品隔離、PDA Guide No.1 清場',
      weak: { production: '清場、換線與貼標核對，每一瓶都貼對、每條線都清空', warehouse: '物料狀態標示與隔離，待驗、合格、退貨各歸其位',
              qa: '清場覆核、標籤發放與數量核算，放行前最後把關' },
      needTag: 'ident', needName: '辨識工具', needText: '混淆魔和正確的產品長得一模一樣，光靠肉眼核對分不出來。帶一件能逐一辨識標籤與物料的道具才進得了這場戰鬥',
      line: '「兩個品項標籤長得一樣，換一下誰會發現？」', rage: '「清場沒做完，上一批的標籤還留在線上！」', title: '辨識之眼' },
    { id: 'leach', name: '溶出妖', risk: '萃取物與溶出物：膠塞、管路、容器的化學物質溶進藥液',
      fx: { el: '溶出系', skill: '析出毒滴', c: '#65a30d', m: 'drop', g: 'drop', n: 4, size: 26, imp: { tint: 'stain', dots: 12, ring: 1 } },
      src: [{ key: 'USP-1663' }, { key: 'USP-1664' }, { key: 'USP-381' }, { key: 'TR66', ids: [2, 10] }, { key: 'TR26', ids: [8] }],
      srcText: 'USP 〈1663〉 萃取物評估、〈1664〉 溶出物評估、〈381〉 彈性體組件，以及 TR66、TR26 的 E&L 題',
      weak: { qc: '萃取與溶出物的分析篩檢，找出並鑑定溶進來的化合物', techservice: '材料與組件評估，依接觸條件設計萃取研究',
              ra: '安全閾值與毒理評估，判斷溶出量是否可接受' },
      line: '「我藏在膠塞和管路裡，跟著藥液一起上架。」', rage: '「接觸越久、溫度越高，我溶得越多！」', title: '溶出鑑識者' },
    { id: 'frost', name: '溫度巨人', risk: '冷鏈失效：運輸與倉儲的溫度偏離、未確效的保溫箱、沒有溫度紀錄',
      fx: { el: '溫控系', skill: '溫度偏離衝擊', c: '#f97316', m: 'cone', g: 'shard', n: 8, size: 22, imp: { tint: 'burn', dots: 12, quake: 1 } },
      src: [{ key: 'TR39', ids: [1, 3, 4, 6, 7, 10, 11, 12, 14, 18] }, { key: 'TR46', ids: [3, 9, 14, 17, 18, 19, 23] },
            { key: 'TR52', ids: [6, 7, 8, 9, 10, 14, 21, 22] }, { key: 'USP-1079', ids: [3, 4, 5] }, { key: 'PICS-PE011', ids: [17, 33, 47, 49, 50] }],
      srcText: 'PDA TR39 溫控運輸確效、TR46 最後一哩與 MKT、TR52 GDP 儲運溫控、USP 〈1079〉 溫度偏離與 mapping、PIC/S PE011 冷藏運輸與倉儲',
      weak: { warehouse: '冷庫 mapping、收發與退貨管控，偏離當下第一線把關', techservice: '保溫箱確效與季節挑戰，證明運輸撐得住',
              qa: '偏離調查與 MKT、穩定性評估，決定產品能不能放行' },
      needTag: 'cold', needName: '溫度紀錄工具', needText: '溫度巨人只在運輸途中出沒：沒有全程溫度紀錄，你連牠來過都證明不了。帶一件能記錄或守住運輸溫度的道具才進得了這場戰鬥',
      line: '「2–8 °C？卡車在大太陽下停兩個小時，看你怎麼辦。」', rage: '「沒有溫度紀錄，你證明不了我沒來過！」', title: '冷鏈守護者' }
  ];
  /* Special items (道具): crafted once in the workshop, one brought into each boss fight from the
     skill picker. vs: targets ('z<zone>' for zone bosses, elite ids) — against a target the item
     adds shields; tags let a boss demand a kind of item (孢子騎士 needs a sporicide, 竄改魅影 a trace tool,
     混淆魔 an ident tool, 溫度巨人 a cold-chain tool).
     Like gear: never changes scoring. Art: rpg/assets/item-<id>.webp (drawn badge until then). */
  var ITEMS = [
    { id: 'paa', zh: '過氧乙酸殺孢劑', cat: '殺孢劑', c: '#84cc16', vs: ['spore'], tags: ['sporicide'], shield: 1, need: { c5: 2, c4: 1 },
      use: '噴灑過氧乙酸，芽孢殼開始崩解',
      eff: '進入孢子騎士戰的通行證，戰鬥中多 1 面護盾。過氧乙酸加過氧化氫，是殺得死芽孢的消毒劑；Annex 1 要求消毒計畫定期輪用殺孢劑。' },
    { id: 'vhp', zh: '汽化過氧化氫產生器', cat: '殺孢劑', c: '#22d3ee', vs: ['spore'], tags: ['sporicide'], shield: 2, need: { boss: 1, c6: 2, c5: 1 },
      use: 'VHP 灌滿隔離器，芽孢無處可躲',
      eff: '高階殺孢道具，也能進入孢子騎士戰，戰鬥中多 2 面護盾。隔離器和 RABS 的表面除污多半用 VHP，要用生物指示劑證明 6 log 的殺滅。' },
    { id: 'cip', zh: '鹼性 CIP 清潔劑', cat: '清潔劑', c: '#a78bfa', vs: ['z1'], shield: 1, need: { c5: 2, c6: 1 },
      use: '熱鹼循環沖洗，剝掉生物膜的基質',
      eff: '生物膜王戰多 1 面護盾。生物膜要先用清潔劑和流速剝掉基質，消毒劑才碰得到裡面的菌：先清潔，再消毒。' },
    { id: 'counter', zh: '手持粒子計數器', cat: '監測儀器', c: '#94a3b8', vs: ['z0'], shield: 1, need: { c9: 1, c0: 2 },
      use: '粒子計數器鎖定落塵來源',
      eff: '微粒魔戰多 1 面護盾。≥0.5 µm 與 ≥5 µm 分開計數，A 級區要連續監測，才抓得到短暫的微粒爆量。' },
    { id: 'oven', zh: '去熱原隧道烘箱', cat: '設備', c: '#f97316', vs: ['z2'], shield: 1, need: { c6: 2, c2: 1 },
      use: '250 °C 乾熱，內毒素降 3 個 log',
      eff: '內毒素龍戰多 1 面護盾。濕熱滅菌殺得死菌，卻去不掉內毒素；乾熱去熱原要證明內毒素至少降低 3 log。' },
    { id: 'ccit', zh: '真空衰減測漏儀', cat: '檢測儀器', c: '#0ea5e9', vs: ['crack'], shield: 1, need: { c2: 2, c9: 1 },
      use: '真空衰減測試，微漏無所遁形',
      eff: '裂隙幽靈戰多 1 面護盾。真空衰減是確定性的 CCI 測試方法（USP <1207>），比染色入侵法更靈敏、可重複。' },
    { id: 'atr', zh: '稽核軌跡審查工具', cat: '追溯工具', c: '#f43f5e', vs: ['forge'], tags: ['trace'], shield: 1, need: { c9: 2, c3: 1 },
      use: '展開稽核軌跡，每一筆修改都現形',
      eff: '進入竄改魅影戰的通行證，戰鬥中多 1 面護盾。稽核軌跡要記下誰、何時、改了什麼、為什麼改，而且要依資料 criticality 定期審查，不是開了就算數。' },
    { id: 'uam', zh: '個人帳號權限矩陣', cat: '追溯工具', c: '#14b8a6', vs: ['forge'], tags: ['trace'], shield: 2, need: { boss: 1, c9: 1, c3: 2 },
      use: '收回群組帳號，每個人只能用自己的身分',
      eff: '高階追溯道具，也能進入竄改魅影戰，戰鬥中多 2 面護盾。共用帳號讓稽核軌跡失去意義；一人一帳號、權限分級、操作員不能改 recipe 和警報範圍。' },
    { id: 'scan', zh: '條碼核對掃描器', cat: '辨識工具', c: '#d946ef', vs: ['mixup'], tags: ['ident'], shield: 1, need: { c3: 2, c2: 1 },
      use: '逐一掃碼核對，錯標的那一瓶當場現形',
      eff: '進入混淆魔戰的通行證，戰鬥中多 1 面護盾。標籤和物料在每個交接點核對身分；標籤的發放、使用、退回要做數量核算，對不上就要調查。' },
    { id: 'vision', zh: '線上視覺檢測系統', cat: '辨識工具', c: '#a855f7', vs: ['mixup'], tags: ['ident'], shield: 2, need: { boss: 1, c9: 2, c3: 1 },
      use: '相機逐瓶比對標籤、批號與效期',
      eff: '高階辨識道具，也能進入混淆魔戰，戰鬥中多 2 面護盾。電子或自動化的標籤檢查設備本身也要驗證運作正常；換批前仍要清場並覆核。' },
    { id: 'elscreen', zh: '萃取物篩檢分析組', cat: '檢測儀器', c: '#65a30d', vs: ['leach'], shield: 1, need: { c5: 2, c2: 1 },
      use: '篩檢萃取液，把可能溶出的化合物一一標出',
      eff: '溶出妖戰多 1 面護盾。先用萃取研究找出材料可能釋出的化合物，再用溶出物研究確認實際進入藥品的量，兩者對照才能判斷風險。' },
    { id: 'logger', zh: '溫度記錄器', cat: '監測儀器', c: '#f97316', vs: ['frost'], tags: ['cold'], shield: 1, need: { c4: 2, c6: 1 },
      use: '全程記錄溫度，偏離的那一段無所遁形',
      eff: '進入溫度巨人戰的通行證，戰鬥中多 1 面護盾。記錄器要校正，放在 mapping 找出的冷熱點；有了全程數據，偏離時才能評估對產品的影響。' },
    { id: 'shipper', zh: '已確效保溫運輸箱', cat: '包材', c: '#fb923c', vs: ['frost'], tags: ['cold'], shield: 2, need: { boss: 1, c6: 2, c4: 1 },
      use: '確效過的裝箱方式，夏冬兩季都撐得住',
      eff: '高階溫控道具，也能進入溫度巨人戰，戰鬥中多 2 面護盾。保溫箱要依路線的極端溫度與最長運輸時間確效，冷媒不可直接接觸產品，以免凍傷。' }
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
  function weakText(ti) { return weakTo(ti).map(elName).join('、'); }
  /* Skills the player can bring: the main class first, then every learned second specialty. */
  function learnedSkills() {
    var main = S.profile.cls;
    return [main].concat(DEPTS.map(function (d) { return d.id; }).filter(function (id) { return id !== main && G.skills[id] && G.skills[id].learned; }));
  }
  var XP_BOSS = 100, BOSS_Q = 10;     // boss battle: bonus XP on the first win, questions per fight
  var BOSS_LINES = [
    '「一粒灰塵就夠了。你的無菌區守得住嗎？」',
    '「我在管線死角住得很舒服，你清不掉我的。」',
    '「就算把菌全滅了，我也還在。看你擋不擋得住熱原。」'
  ];
  var BOSS_RAGE = [
    '「這點程度就想清場？我還有整個高壓區的落塵！」',
    '「刷得掉表面，刷不掉我築好的膜！」',
    '「滅菌又怎樣？我是死了也還在的熱原！」'
  ];
  // Small monsters met in section challenges, one per topic cluster (art: rpg/assets/mob-<cluster>.webp).
  var MOBS = ['破洞手套鬼', '芽孢彈', '裂瓶蟹', '漏簽幽靈', '落菌菇', '混濁史萊姆', '死角鰻', '混種雙子', '缺失紙蝠', '當機機器人'];
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
    return ids;
  }
  /* Full portrait for the character: the alternate look if the chosen avatar belongs to the current class. */
  function heroImg() {
    var a = S.profile.avatar, cls = S.profile.cls;
    return (a !== cls && a.indexOf(cls + '-') === 0 && asset('class-' + a)) || classImg(cls);
  }
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
      '<text x="32" y="41" font-size="22" text-anchor="middle" font-family="sans-serif" font-weight="700" fill="#0369a1">' + g.zh.charAt(g.zh.length - 1) + '</text></svg>');
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
    s.items = s.items || {};                                  // item id -> time crafted
    s.itemPick = s.itemPick || {};                            // boss key -> item id last brought ('' = none)                            // elite id -> { best, total, ts }
    s.skillPick = s.skillPick || {};                          // '<class>:<zone>' -> skill last brought to that boss
    s.gear = s.gear || {};
    s.gear.own = s.gear.own || {};                            // gear id -> time crafted
    s.gear.on = s.gear.on || {};                              // slot -> gear id
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
    var passed = 0, tried = 0, perfect = 0;
    secs.forEach(function (sid) {
      var r = q[sid];
      if (!r) return;
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
        if (open && done) rank++; else open = false;
        return { tier: t, idx: ti, list: list, req: req, need: need, got: Math.min(got, need), ready: ready, done: done, anyOf: !req.length,
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
    { id: 'tome', zh: '大部頭征服者', how: '通關一份 200 頁以上的文件',
      test: function (g) { return anyDoc(g, function (st) { return st.cleared && (st.doc.pages || 0) >= 200; }); } },
    { id: 'streak7', zh: '七日修行', how: '連續學習 7 天', test: function () { return liveStreak() >= 7; } },
    { id: 'streak30', zh: '三十日不滅', how: '連續學習 30 天', test: function () { return liveStreak() >= 30; } },
    { id: 'trio', zh: '一日三修', how: '同一天通過三份不同文件的章節挑戰',
      test: function () { return S.today.d === dayKey(new Date()) && S.today.docs.length >= 3; } },
    { id: 'dawn', zh: '晨型人', how: '清晨 4 點到 6 點之間完成學習',
      test: function (g, grew) { var hr = new Date().getHours(); return grew && hr >= 4 && hr < 6; } },
    { id: 'night', zh: '夜貓子', how: '午夜到凌晨 4 點之間完成學習',
      test: function (g, grew) { return grew && new Date().getHours() < 4; } },
    { id: 'perfect5', zh: '一發入魂', how: '累計 5 節第一次挑戰就全對', test: function (g) { return g.perfect >= 5; } },
    { id: 'comeback', zh: '不屈', how: '同一節失敗兩次以上後通過', test: function () { return !!S.flags.comeback; } },
    { id: 'sources', zh: '博覽群籍', how: '八個來源各通關至少一份文件',
      test: function (g) { return Object.keys(GROUP_LABEL).every(function (grp) { return anyDoc(g, function (st) { return st.cleared && st.doc.group === grp; }); }); } },
    { id: 'dual', zh: '雙修', how: '兩個職業達到初階',
      test: function (g) { return Object.keys(g.classes).filter(function (id) { return g.classes[id].rank >= 1; }).length >= 2; } },
    { id: 'allclass', zh: '全職制霸', how: '八個職業全部達到專家',
      test: function (g) { return Object.keys(g.classes).every(function (id) { return g.classes[id].rank >= 3; }); } },
    { id: 'cards50', zh: '收藏家', how: '收集 50 張文件卡', test: function (g) { return g.cards >= 50; } },
    { id: 'review10', zh: '溫故知新', how: '複習突擊答對 10 次', test: function () { return S.review.ok >= 10; } }
  ].concat(ELITES.map(function (e) {
    return { id: 'elite-' + e.id, zh: e.title, how: '擊敗精英魔王' + e.name, test: function () { return !!(S.eliteWin || {})[e.id]; } };
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
    toast('獲得素材：' + (MATS[i] || CLUSTERS[i].name));
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
    var sig = !S.profile ? 'new' : [S.profile.nick, S.profile.cls, S.profile.avatar, G.classes[S.profile.cls].rank, bestTitle(),
      G.level, G.xp, liveStreak(), S.pet ? S.pet.line + G.petStage + (S.pet.shiny ? 's' : '') : ''].join('|');
    if (bar.getAttribute('data-sig') === sig) return;
    bar.setAttribute('data-sig', sig);
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
          h('h2', { text: '選一個職業，從第一個任務開始' }),
          h('p', { text: '184 份文件不知道從哪裡讀起？建立角色後，這裡會告訴你下一步。' }),
          h('button', { class: 'rpg-btn', type: 'button', onclick: openOnboarding, text: '建立角色' }),
          h('a', { class: 'rpg-btn rpg-btn-ghost rpg-guide-link', href: ROOT + 'rpg-guide.html', text: '新手指南' })
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
        h('h2', { text: c.dep.nameZh + '的任務全部完成' }),
        h('p', { text: '可以到角色頁轉職，挑戰另一個部門的主線。' }),
        h('a', { class: 'rpg-btn', href: ROOT + 'character.html', text: '前往角色頁' })
      ])]));
      return;
    }
    if (q.boss) {
      var bz = ZONES[q.tierIdx] || ZONES[ZONES.length - 1], bimg = asset('boss-' + (q.tierIdx + 1));
      mount.appendChild(h('div', { class: 'rpg-quest rpg-quest-boss' }, [
        bimg ? h('img', { class: 'rpg-quest-portrait rpg-quest-bossimg', src: bimg, alt: bz.boss }) : portrait,
        h('div', { class: 'rpg-quest-body' }, [
          h('span', { class: 'rpg-tag', text: '魔王戰' }),
          h('h2', { text: bz.zh + '的魔王　' + bz.boss }),
          h('p', { class: 'rpg-quest-sec', text: '升階試煉：' + RANKS[q.tierIdx + 1].zh + CLASS_META[c.dep.id].job + '。從這一區讀過的文件隨機出 ' + Math.min(BOSS_Q, bossCount(q.tier)) + ' 題，答對 80% 擊敗牠。' }),
          h('p', { class: 'rpg-quest-why', text: BOSS_LINES[q.tierIdx] || '' }),
          h('div', { class: 'rpg-quest-foot' }, [
            h('a', { class: 'rpg-btn', href: q.href, text: '挑戰魔王' }),
            h('a', { class: 'rpg-quest-map', href: ROOT + 'map.html', text: '闖關地圖' })
          ])
        ])
      ]));
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
          h('a', { class: 'rpg-quest-map', href: ROOT + 'map.html', text: '闖關地圖' }),
          h('span', { class: 'rpg-quest-meta', text: tierText }),
          h('span', { class: 'rpg-quest-meta', text: '本文件 ' + q.st.read + ' / ' + q.st.total + ' 節' })
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
      h('span', { class: 'rpg-card-title', text: locked ? '？？？' : (d.titleZh || d.title) }),
      h('span', { class: 'rpg-card-foot', text: locked ? '未收集' : (c.shiny ? '異色' : c.awakened ? '覺醒' : (d.quiz ? '可挑戰' : '已讀完')) })
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
    function onKey(e) { if (e.key === 'Escape' && !(opts && opts.sticky)) close(); }
    function close() {
      document.removeEventListener('keydown', onKey);
      if (wrap.parentNode) wrap.parentNode.removeChild(wrap);
    }
    document.addEventListener('keydown', onKey);
    document.body.appendChild(wrap);
    return { el: wrap, close: close };
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
  var STORY = [
    { art: 'plant', kicker: 'PROLOGUE', text: '這裡是一座無菌藥廠。潔淨室日夜運轉，每一瓶藥都要在看不見的戰場上，守住「無菌」兩個字。' },
    { art: 'mobs', kicker: 'ALERT', alarm: true, text: '某天夜裡，警報響起。破洞手套、落菌、漏簽……污染魔物從每一個被忽略的細節裡爬了出來。' },
    { art: 'bosses', kicker: 'THREE ISLES', text: '牠們的首領盤據在三座島上：微粒魔、生物膜王、內毒素龍。不打倒牠們，廠區就無法放行任何一批產品。' },
    { art: 'heroes', kicker: 'YOU', text: '你是剛報到的新進人員。武器不是劍，是法規和指引：讀懂一份文件，就多一份收復廠區的力量。' },
    { art: 'egg', kicker: 'PARTNER', text: '報到第一天，有人塞給你一顆蛋。「讀完第一節，牠就會孵化，陪你一路打上去。」' }
  ];
  function openPrologue(done) {
    var i = 0, finishType = null, ended = false;
    var art = h('div', { class: 'rpg-story-art' });
    var kicker = h('span', { class: 'rpg-story-kicker' });
    var text = h('p', { class: 'rpg-story-text', 'aria-live': 'polite' });
    var dots = h('div', { class: 'rpg-story-dots', 'aria-hidden': 'true' });
    var hint = h('span', { class: 'rpg-story-hint', text: '點一下繼續' });
    var skip = h('button', { class: 'rpg-story-skip', type: 'button', text: '跳過 ▸▸', onclick: function (e) { e.stopPropagation(); end(); } });
    var wrap = h('div', { class: 'rpg-story', role: 'dialog', 'aria-modal': 'true', 'aria-label': '序章' }, [
      skip, h('div', { class: 'rpg-story-panel' }, [art, h('div', { class: 'rpg-story-box' }, [kicker, text, h('div', { class: 'rpg-story-foot' }, [dots, hint])])])
    ]);
    function show() {
      var p = STORY[i];
      clear(art); clear(dots);
      var a = storyArt(p.art); if (a) art.appendChild(a);
      kicker.textContent = p.kicker;
      wrap.classList.toggle('is-alarm', !!p.alarm);
      wrap.classList.remove('is-in'); void wrap.offsetWidth; wrap.classList.add('is-in');
      STORY.forEach(function (_, k) { dots.appendChild(h('i', { class: k === i ? 'is-on' : '' })); });
      hint.textContent = i === STORY.length - 1 ? '點一下建立角色' : '點一下繼續';
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

  /* ---------- onboarding / edit character ---------- */
  function openOnboarding() {
    if (!S.profile && !S.flags.prologue) {
      openPrologue(function () { S.flags.prologue = 1; saveState(); openOnboarding(); });
      return;
    }
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
      });
      avatarChoices().forEach(function (id) {
        var base = deptById(id.split('-')[0]);
        avatarGrid.appendChild(h('button', {
          type: 'button', class: 'rpg-pick-avatar' + (pick.avatar === id ? ' is-on' : ''), 'aria-label': (base ? CLASS_META[base.id].job : '') + '頭像',
          onclick: function () { pick.avatar = id; avatarTouched = true; draw(); }
        }, [h('img', { src: avatarImg(id), alt: '' })]));
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
      h('p', { class: 'rpg-note', text: '角色和進度只存在這台裝置的瀏覽器裡，不會上傳。清除瀏覽器資料會一併清掉。' }),
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
    ], { cls: 'rpg-modal-wide' });
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
    '你不再是只會照著 SOP 做的新人了。啟程之島的霧散開，修練之島在前方等你。',
    '同事開始拿問題來問你。偏差、變更、稽核，你都知道該翻哪一份文件。核心之島浮現了。',
    '你成了大家口中「那個專家」。整座廠區的無菌防線，有一段是你守住的。'
  ];
  function scene(e, done) {
    var steps = [], timers = [], over = false;
    var art = h('div', { class: 'rpg-scene-art' });
    var kicker = h('span', { class: 'rpg-story-kicker' });
    var title = h('strong', { class: 'rpg-scene-title' });
    var text = h('p', { class: 'rpg-story-text' });
    var hint = h('span', { class: 'rpg-story-hint', text: '點一下繼續' });
    var wrap = h('div', { class: 'rpg-story rpg-scene is-' + e.kind, role: 'dialog', 'aria-modal': 'true', 'aria-live': 'polite' }, [
      h('button', { class: 'rpg-story-skip', type: 'button', text: '跳過 ▸▸', onclick: function (ev) { ev.stopPropagation(); end(); } }),
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
        function () { say('……？', from, '「' + pet.voice + '……」' + from + '的身體開始發光了。'); },
        function () { wrap.classList.add('is-glow'); say('EVOLVING', from, '光越來越亮——'); },
        function () { wrap.classList.add('is-burst'); say('EVOLUTION', to, from + '進化成了' + to + '！「' + pet.voice + pet.voice + '！」'); burstIn(art); }
      ];
    } else {
      var dep = deptById(S.profile.cls), job = CLASS_META[S.profile.cls].job, zone = ZONES[Math.min(e.n, ZONES.length - 1)];
      art.appendChild(h('div', { class: 'rpg-scene-rank', style: '--c:' + (dep ? dep.color : '#fbbf24') }, [
        h('i', { class: 'rpg-scene-rays' }),
        h('img', { class: 'rpg-scene-hero', src: classImg(S.profile.avatar), alt: '' }),
        h('span', { class: 'rpg-scene-badge' }, [h('b', { text: RANKS[e.n].zh }), h('small', { text: RANKS[e.n].en })])
      ]));
      steps = [
        function () { say('RANK UP', RANKS[e.n - 1].zh + job + '　→', S.profile.nick + '，你的努力被看見了。'); },
        function () { wrap.classList.add('is-stamp'); say('RANK UP', RANKS[e.n].zh + job, RANK_LINES[e.n] || ''); burstIn(art); },
        function () { say('NEXT', zone.zh, e.n < ZONES.length ? '下一站：' + zone.zh + '。守在那裡的是「' + zone.boss + '」。' : '所有島嶼都收復了。接下來，換你帶新人。'); }
      ];
    }
    steps[0].auto = 2000;
    if (e.kind === 'pet') steps[1].auto = 1700;
    var i = 0;
    function run() {
      steps[i]();
      hint.textContent = i === steps.length - 1 ? '點一下關閉' : '點一下繼續';
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
      if (cards) toast('獲得 ' + cards + ' 張文件卡');
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
    if (e.kind === 'level') { kicker = 'LEVEL UP'; title = 'Lv ' + e.n; sub = '等級提升'; art = h('img', { src: classImg(S.profile.avatar), alt: '' }); }
    else if (e.kind === 'rank') {
      kicker = 'RANK UP'; title = RANKS[e.n].zh + CLASS_META[S.profile.cls].job; sub = RANKS[e.n].en + ' 階級達成';
      art = h('img', { src: classImg(S.profile.cls), alt: '' });
    } else if (e.kind === 'card') {
      var st = G.docs[e.key];
      kicker = e.shiny ? 'SHINY' : e.upgrade ? 'AWAKENED' : 'NEW CARD'; title = st.doc.code || st.doc.short;
      sub = e.shiny ? '異色文件卡：每一節都一次全對' : e.awakened ? '文件卡覺醒' : '獲得文件卡';
      art = h('div', { class: 'rpg-cut-card rpg-flip' }, [cardEl(st, false)]);
    } else if (e.kind === 'title') {
      var t = G.titles.filter(function (x) { return x.id === e.id; })[0];
      kicker = 'TITLE'; title = t.zh + (e.lv === 2 ? '大師' : '修習者'); sub = '獲得稱號';
    } else if (e.kind === 'pet') {
      kicker = 'EVOLUTION'; title = PETS[S.pet.line].stages[e.n - 1]; sub = '夥伴進化了';
      art = h('img', { class: petCls('rpg-pop'), src: petImg(S.pet.line, e.n), alt: '' });
    } else if (e.kind === 'shinypet') {
      kicker = 'SHINY'; title = PETS[S.pet.line].stages[G.petStage - 1]; sub = '夥伴變成異色型態';
      art = h('img', { class: 'rpg-pop rpg-shiny', src: petImg(S.pet.line, G.petStage), alt: '' });
    } else if (e.kind === 'secret') {
      var sc = SECRETS.filter(function (x) { return x.id === e.id; })[0];
      kicker = 'SECRET'; title = sc.zh; sub = '隱藏稱號：' + sc.how;
    } else if (e.kind === 'bossdown') {
      var dz = ZONES[e.ti] || ZONES[ZONES.length - 1], dimg = asset('boss-' + (e.ti + 1));
      kicker = 'BOSS DEFEATED'; title = dz.boss; sub = '升階試煉通過　+' + XP_BOSS + ' XP';
      art = dimg ? h('img', { class: 'rpg-pop rpg-defeated', src: dimg, alt: '' }) : null;
    } else if (e.kind === 'craft') {
      var cg = gearById(e.id);
      kicker = 'CRAFTED'; title = cg.zh; sub = cg.eff;
      art = h('img', { class: 'rpg-pop', src: gearImg(cg), alt: '' });
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
      if (main.getBoundingClientRect().bottom - window.innerHeight < 240) {
        S.end[pageDocKey] = 1; saveState();
        palSay('整份讀到最後了，辛苦了！', 1);
      }
    }
    window.addEventListener('scroll', function () {
      clearTimeout(timer);
      timer = setTimeout(function () { checkEnd(); refresh(); palTick(); }, 900);  // after the page's own 500 ms save
    }, { passive: true });

    initPal(d);

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

  /* ---------- battles (section challenges and boss fights) ----------
     One question at a time. A right answer takes one HP off the foe, a wrong one
     takes a heart off the player. Hearts = mistakes the 80 % pass mark allows + 1,
     so running out of hearts is exactly failing the pass mark. */
  function heartsFor(n) { return n - Math.ceil(n * PASS) + 1; }
  function shuffle(a) {
    for (var i = a.length - 1; i > 0; i--) { var j = Math.floor(Math.random() * (i + 1)), t = a[i]; a[i] = a[j]; a[j] = t; }
    return a;
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
      h('summary', { text: '這次答錯的 ' + qs.length + ' 題' }),
      h('ol', {}, qs.map(function (q) {
        var src = sourceHref(q);
        return h('li', {}, [
          h('p', { class: 'rpg-missed-q', text: q.question }),
          h('p', { class: 'rpg-missed-a', text: '正解 ' + q.correct + '：' + q.options[q.correct] }),
          h('p', { class: 'rpg-missed-e', text: q.explanation || '' }),
          q.reference || src ? h('small', {}, [
            q.reference ? h('span', { text: '出處：' + q.reference + '　' }) : null,
            src ? h('a', { href: src, text: '回原文 →' }) : null
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
    qa:          { el: '品保系', c: '#2563eb', skill: '品質封印', m: 'arc', g: 'seal', n: 1, size: 48, spin: 1, imp: { mark: 'stamp', ring: 1, dots: 10 } },
    qc:          { el: '品管系', c: '#7c3aed', skill: '試劑滴定', m: 'arc', g: 'drop', n: 3, size: 28, imp: { dots: 14, ring: 1, tint: 'stain' } },
    production:  { el: '生產系', c: '#059669', skill: '無菌充填流', m: 'stream', g: 'bubble', n: 12, size: 15, imp: { dots: 12, tint: 'mist', flash: 1 } },
    engineering: { el: '工程系', c: '#d97706', skill: '齒輪迴旋斬', m: 'fly', g: 'gear', n: 2, size: 42, spin: 1, imp: { mark: 'gear', dots: 14, dc: '#fde047', ring: 1 } },
    ra:          { el: '法規系', c: '#dc2626', skill: '法典頁刃', m: 'swarm', g: 'page', n: 6, size: 30, spin: 1, imp: { mark: 'cut', dots: 6 } },
    warehouse:   { el: '倉儲系', c: '#0891b2', skill: '物料空投', m: 'drop', g: 'crate', n: 1, size: 58, imp: { ring: 2, dots: 12, dc: '#c98a2b', quake: 1 } },
    techservice: { el: '技服系', c: '#8b5cf6', skill: '調律聲波', m: 'stream', g: 'wave', n: 4, size: 42, aim: 1, imp: { ring: 3, flash: 1 } },
    bt:          { el: '數位系', c: '#0f766e', skill: '數據洪流', m: 'stream', g: 'bits', n: 14, size: 16, imp: { tint: 'glitch', dots: 8 } }
  };
  var FX_MOB = [
    { skill: '破洞抓擊', c: '#64748b', m: 'strike', imp: { mark: 'claw', dots: 6 } },
    { skill: '芽孢連射', c: '#65a30d', m: 'fly', g: 'spore', n: 5, size: 24, spin: 1, imp: { dots: 12, tint: 'stain' } },
    { skill: '碎玻璃投擲', c: '#0ea5e9', m: 'arc', g: 'shard', n: 4, size: 30, spin: 1, imp: { mark: 'crack', dots: 8, dc: '#bae6fd' } },
    { skill: '漏簽詛咒', c: '#a855f7', m: 'swarm', g: 'ghost', n: 1, size: 56, imp: { mark: 'cross', dc: '#ef4444', ring: 1 } },
    { skill: '落菌孢雨', c: '#d97706', m: 'drop', g: 'spore', n: 8, size: 18, imp: { dots: 10, tint: 'stain' } },
    { skill: '混濁黏液彈', c: '#84cc16', m: 'arc', g: 'blob', n: 1, size: 40, imp: { mark: 'film', dots: 10 } },
    { skill: '死角電擊', c: '#eab308', m: 'beam', beam: 'bolt', imp: { mark: 'bolt', tint: 'zap', flash: 1 } },
    { skill: '交叉污染', c: '#ec4899', m: 'helix', g: 'orb', n: 2, size: 28, imp: { ring: 2, dots: 10, tint: 'stain' } },
    { skill: '缺失通知', c: '#ef4444', m: 'swarm', g: 'bat', n: 5, size: 36, imp: { mark: 'cut', dots: 6 } },
    { skill: '系統當機', c: '#06b6d4', m: 'beam', beam: 'glitch', imp: { tint: 'glitch', dots: 8 } }
  ];
  var FX_BOSS = [
    { el: '微粒系', skill: '微粒風暴', c: '#94a3b8', m: 'stream', g: 'dust', n: 30, size: 7, imp: { tint: 'mist', dots: 18, quake: 1 } },
    { el: '生物膜系', skill: '生物膜吞噬', c: '#65a30d', m: 'arc', g: 'blob', n: 3, size: 36, imp: { mark: 'film', tint: 'film', dots: 12, quake: 1 } },
    { el: '熱原系', skill: '熱原吐息', c: '#f97316', m: 'cone', imp: { tint: 'burn', dots: 18, dc: '#fde047', flash: 1, quake: 1 } }
  ];
  var FX_PLAIN = { skill: '衝撞', c: '#64748b', m: 'strike', imp: { dots: 8 } };
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
        add(h('span', { class: 'rpg-fx-crit', style: 'left:' + px(x1) + ';top:' + px(Math.max(18, y1 - size * 0.62)), text: '弱點！效果絕佳' }));
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
    var missed = [], cleansed = 0;
    var weak = o.kind === 'boss' && (o.weak != null ? !!o.weak : isWeak(o.zone, o.skill));
    var shield = (wearing('gloves') ? 1 : 0) + (weak ? 1 : 0);
    if (weak) hearts++;
    var item = o.item && itemVs(o.item, o.target) ? o.item : null;
    if (item) shield += item.shield || 1;
    var foeImg = o.foeImg ? h('img', { class: 'rpg-foe-img', src: o.foeImg, alt: o.foe }) : h('span', { class: 'rpg-foe-img rpg-foe-blank', style: o.fx ? '--c:' + o.fx.c : null, text: '？' });
    var hp = h('span', { class: 'rpg-hp', role: 'meter', 'aria-label': o.foe + '的血量', 'aria-valuemin': 0, 'aria-valuemax': n });
    var heartsEl = h('span', { class: 'rpg-hearts', 'aria-label': '你的生命' });
    var foeFx = o.fx || (o.kind === 'boss' ? FX_BOSS[o.zone] : FX_MOB[o.cluster]) || FX_PLAIN, youFx = fxYou(o.skill);
    var foeEl = o.kind === 'boss' ? (foeFx.el || '魔王') : o.cluster >= 0 ? CLUSTER_ZH[o.cluster] + '系' : '無屬性';
    var foeBox = h('div', { class: 'rpg-foe' }, [foeImg, h('b', { text: o.foe }),
      h('span', { class: 'rpg-elem', style: '--c:' + foeFx.c, text: foeEl + '・' + foeFx.skill }), hp]);
    var worn = Object.keys(SLOTS).map(function (sl) { return S.gear.on[sl] && gearById(S.gear.on[sl]); }).filter(Boolean);
    var youAv = avatarEl();
    var you = h('div', { class: 'rpg-you' }, [youAv, h('b', { text: S.profile ? S.profile.nick : '你' }),
      h('span', { class: 'rpg-elem' + (weak ? ' is-weak' : ''), style: '--c:' + youFx.c, text: (weak ? '弱點 ' : '') + youFx.el + '・' + youFx.skill }), heartsEl,
      worn.length ? h('span', { class: 'rpg-worn' }, worn.map(function (g) { return h('img', { src: gearImg(g), alt: g.zh, title: g.zh + '：' + g.eff }); })) : null]);
    var stage = h('div', { class: 'rpg-battle-stage' });
    var arena = h('div', { class: 'rpg-arena' + (o.kind === 'boss' ? ' is-boss' : '') }, [foeBox, h('span', { class: 'rpg-vs', text: 'VS' }), you]);
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
      stage.appendChild(h('p', { class: 'rpg-battle-count', text: '戰鬥即將開始…（點橫幅可略過）' }));
      setTimeout(function () { arena.classList.remove('is-intro'); }, 900);
      // let the foe finish charging in before the banner covers the top of the arena
      setTimeout(function () {
        if (o.kind === 'boss') banner('WARNING　魔王 ' + o.foe + ' 現身' + (weak ? '　｜　弱點擊破：' + youFx.skill : ''), o.line || '', 3200, function () {
          if (!item) { ask(); return; }
          var fx = h('span', { class: 'rpg-item-fx', style: '--c:' + item.c }, [itemImgEl(item), h('b', { text: item.zh })]);
          arena.appendChild(fx);
          banner('使用道具：' + item.zh, item.use + '（護盾 +' + (item.shield || 1) + '）', 2000, function () { if (fx.parentNode) fx.parentNode.removeChild(fx); ask(); });
        });
        else banner('野生的 ' + o.foe + ' 出現了！', null, 1400, ask);
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
      for (var sh = 0; sh < shield; sh++) heartsEl.appendChild(h('i', { class: 'rpg-shield', text: '◆', title: '護盾：答錯一次不扣心（仍算答錯）' }));
      heartsEl.setAttribute('aria-label', '你的生命 ' + (hearts - lost) + ' / ' + hearts + (shield ? '，護盾 ' + shield : ''));
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
      var q = o.questions[i], answered = false;
      clear(stage);
      var opts = h('div', { class: 'rpg-quiz-opts' });
      var back = wearing('bookmark') && sourceHref(q);
      var backLink = back ? h('a', { class: 'rpg-backsrc', href: back, hidden: true, text: '法典書籤：回原文看這一節 →' }) : null;
      var exp = h('div', { class: 'rpg-quiz-exp', hidden: true }, [
        h('p', { text: q.explanation || '' }),
        q.reference ? h('small', { text: '出處：' + q.reference }) : null,
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
          var dmg = clean ? '淨化' : weak ? '弱點 -1' : '-1';
          if (ok) { score++; strike(true, function () { hit(foeBox, 'is-hit', dmg); }); }
          else if (shield) { wrong++; shield--; strike(false, function () { hit(you, 'is-hurt', '護盾'); }, true); }
          else { wrong++; lost++; strike(false, function () { hit(you, 'is-hurt', '♥-1'); }); }
          if (!ok && backLink) backLink.hidden = false;
          if (o.kind === 'boss' && !raged && score >= Math.ceil(n / 2) && score < n) {
            raged = true; arena.classList.add('is-rage');
            banner('魔王暴走！', o.rage || '', 2600, null);
          }
          exp.hidden = false;
          next.textContent = i + 1 >= n || lost >= hearts ? '看結果' : '下一題';
          next.hidden = false;
          try { next.focus({ preventScroll: true }); } catch (e) {}
        } }, [h('b', { text: letter }), h('span', { text: q.options[letter] })]));
      });
      stage.appendChild(h('p', { class: 'rpg-battle-count', text: '第 ' + (i + 1) + ' / ' + n + ' 題' + (q.docTitle ? '　出自：' + q.docTitle : '') }));
      stage.appendChild(h('p', { class: 'rpg-quiz-q', text: q.question }));
      if (wearing('goggles') && q.reference) stage.appendChild(h('p', { class: 'rpg-hint', text: '護目鏡提示：答案在 ' + q.reference }));
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
      clear(stage);
      var head = drill ? '練習結束' : won ? '擊敗' + o.foe + '！' : '被' + o.foe + '擊退了';
      var line = '答對 ' + score + ' / ' + (drill ? i : n) + (drill ? '' : won ? (score === n ? '，全對。' : '。') : early ? '。心扣完了，剩下 ' + (n - i) + ' 題下次再戰。' : '，還差一點。');
      if (cleansed) line += '　淨化了 ' + cleansed + ' 道錯題。';
      if (missed.length) line += '　答錯的題已記進錯題本，明天起答對就能淨化。';
      stage.appendChild(h('div', { class: 'rpg-battle-end ' + (won || drill ? 'is-win' : 'is-lose'), role: 'status' }, [
        h('strong', { text: head }),
        h('p', { text: line }),
        missed.length ? missedList(missed, !won && !drill) : null,
        h('button', { class: 'rpg-btn', type: 'button', text: drill ? '再練一次' : '再戰一次', onclick: function () { if (o.again) o.again(); else runBattle(host, o); } })
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
    var mi = clusterOf(M.docs[pageDocKey]), mobSrc = mi >= 0 ? asset('mob-' + mi) : null, foe = mi >= 0 ? MOBS[mi] : '章節守門怪';
    var status = h('span', { class: 'rpg-quiz-best' + (passed ? ' is-pass' : ''), text: rec ? (passed ? '已通過　' : '') + '最佳 ' + rec.best + ' / ' + rec.total : '尚未挑戰' });
    var title = h('h3', { text: (passed ? '已擊敗　' : '遭遇　') + foe });
    var head = h('div', { class: 'rpg-quiz-head' + (passed ? ' is-beaten' : '') }, [
      mobSrc ? h('img', { class: 'rpg-quiz-mob', src: mobSrc, alt: '' }) : null,
      h('span', { class: 'rpg-tag', text: 'CHALLENGE' }), title, status
    ]);
    var area = h('div', { class: 'rpg-quiz-area' });
    block.appendChild(head);
    block.appendChild(h('p', { class: 'rpg-quiz-lead', text: '共 ' + n + ' 題，一題一題打：答對打掉牠一格血，答錯你扣一顆心（你有 ' + battleHearts('mob', n) + ' 顆）。答對 80% 就擊敗牠。可以重複挑戰，只記最佳成績。' }));
    block.appendChild(area);
    area.appendChild(h('button', { class: 'rpg-btn', type: 'button', text: rec ? '再戰' : '迎戰', onclick: fight }));

    function fight() {
      if (!S.profile) { openOnboarding(); return; }   // battles need a character (avatar, hearts, rewards)
      runBattle(area, { kind: 'mob', foe: foe, foeImg: mobSrc, cluster: mi, questions: shuffle(questions.slice()), onEnd: save });
    }
    function save(r) {
      var score = r.score, ok = r.won;
      palSay(ok ? (score === n ? '全對！漂亮。' : '打倒了！') : '被打回來了。看完解析再上，我等你。', 1);
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
      status.textContent = (nowPass ? '已通過　' : '') + '最佳 ' + dq[sid].best + ' / ' + dq[sid].total;
      status.classList.toggle('is-pass', nowPass);
      title.textContent = (nowPass ? '已擊敗　' : '遭遇　') + foe;
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
      h('b', { text: '弱點：' + ids.map(elName).join('、') }),
      todo.length ? h('span', { text: '　修完' + todo.map(function (id) {
        var k = G.skills[id]; return deptById(id).nameZh + '的必讀（' + k.got + ' / ' + k.need + '）';
      }).join('、或') + '，就能習得剋制技能。' }) : null
    ]);
  }
  /* Before a boss fight: choose which learned skill and which item to bring.
     a: { cur, map (weakness reasons), foe, done, pick, go, target, item, pickItem, needTag, needText } */
  function skillPicker(box, a) {
    clear(box);
    var row = h('div', { class: 'rpg-skillpick', role: 'radiogroup', 'aria-label': '出戰技能' });
    learnedSkills().forEach(function (id) {
      var sp = fxYou(id), w = !!a.map[id];
      row.appendChild(h('button', { type: 'button', role: 'radio', 'aria-checked': String(id === a.cur),
        class: 'rpg-skill' + (id === a.cur ? ' is-on' : '') + (w ? ' is-weak' : ''), style: '--c:' + sp.c,
        onclick: function () { a.pick(id); } }, [
        h('b', { text: sp.skill }),
        h('span', { text: sp.el + (id === S.profile.cls ? '・主技能' : '・第二專長') }),
        w ? h('em', { text: '弱點' }) : null
      ]));
    });
    var w = a.map[a.cur];
    var owned = ITEMS.filter(function (x) { return S.items[x.id]; });
    var it = itemById(a.item), gated = a.needTag && !itemTag(it, a.needTag);
    var irow = h('div', { class: 'rpg-skillpick rpg-itempick', role: 'radiogroup', 'aria-label': '攜帶道具' });
    [null].concat(owned).forEach(function (x) {
      var on = (x ? x.id : '') === (it ? it.id : ''), hit = x && itemVs(x, a.target);
      irow.appendChild(h('button', { type: 'button', role: 'radio', 'aria-checked': String(on),
        class: 'rpg-skill' + (on ? ' is-on' : '') + (hit ? ' is-weak' : ''), style: '--c:' + (x ? x.c : '#94a3b8'),
        onclick: function () { a.pickItem(x ? x.id : ''); } }, [
        h('b', { text: x ? x.zh : '不帶道具' }),
        h('span', { text: x ? x.cat + (hit ? '・護盾 +' + (x.shield || 1) : '・對牠無效') : '空手上陣' }),
        hit ? h('em', { text: '有效' }) : null
      ]));
    });
    box.appendChild(h('div', { class: 'rpg-skillbox' }, [
      h('h3', { class: 'rpg-sub', text: '選擇出戰技能' }), row,
      h('h3', { class: 'rpg-sub', text: '攜帶道具' }), irow,
      gated ? h('p', { class: 'rpg-weakhint rpg-gate' }, [h('b', { text: '進不了戰場：' }), h('span', { text: a.needText + (ITEMS.some(function (x) { return itemTag(x, a.needTag) && S.items[x.id]; })
        ? '。在上面選一個' + (a.needName || '對應道具') + '。' : '。到角色頁的工坊合成「' + ITEMS.filter(function (x) { return itemTag(x, a.needTag); }).map(function (x) { return x.zh; }).join('」或「') + '」。') })]) : null,
      h('p', { class: 'rpg-note', text: w ? '弱點擊破：' + w + '。這場多 1 顆心、多 1 面護盾' +
        (a.done ? '。' : '；第一次用弱點技能打倒牠，再得 ' + XP_WEAK + ' XP 和 1 顆' + BOSS_MAT + '。')
        : '這個技能對' + a.foe + '沒有特別效果。' }),
      weakHintFor(a.map),
      h('button', { class: 'rpg-btn', type: 'button', text: '開戰', disabled: gated, onclick: a.go })
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
    if (!t.hasBoss) { toast('這一區還沒有題庫，沒有魔王戰。'); return; }
    if (!t.ready) {
      modal([
        h('span', { class: 'rpg-tag', text: 'BOSS' }),
        h('h2', { text: zone.boss + '還沒現身' }),
        h('p', { class: 'rpg-modal-lead', text: '先通關這一區' + (t.anyOf ? '任 ' + t.need + ' 份文件' : '的必讀文件') + '（目前 ' + t.got + ' / ' + t.need + '），魔王才會出來。' }),
        weakHint(ti)
      ]);
      return;
    }
    Promise.all(t.banked.map(function (x) {
      var d = M.docs[x.key];
      return fetch(ROOT + 'rpg/quiz/' + x.key + '.json').then(function (r) { return r.json(); }).then(function (b) {
        return (b.questions || []).map(function (q) { return Object.assign({}, q, { docTitle: d.titleZh || d.title, docKey: x.key }); });
      });
    })).then(function (lists) {
      var pool = [].concat.apply([], lists);
      if (!pool.length) { toast('題庫讀不到，請稍後再試。'); return; }
      var key = S.profile.cls + ':' + ti, box = h('div', { class: 'rpg-boss-fight' });
      modal([
        h('span', { class: 'rpg-tag', text: 'BOSS BATTLE' }),
        h('h2', { text: zone.zh + '的魔王　' + zone.boss }),
        h('p', { class: 'rpg-modal-lead', text: '從這一區的文件隨機出 ' + Math.min(BOSS_Q, pool.length) + ' 題，答對 80% 擊敗牠' + (t.beaten ? '。' : '，就能升階。') }),
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
            if (weakFirst) toast('弱點擊破！+' + XP_WEAK + ' XP，獲得素材：' + BOSS_MAT);
            else if (first) toast('獲得素材：' + BOSS_MAT);
            if (first) showRewards([{ kind: 'bossdown', ti: ti }]);
            refresh();
          }
        });
      }
    }).catch(function (e) { console.warn('[rpg] boss battle failed to load', e); toast('題庫讀不到，請稍後再試。'); });
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
        h('h2', { text: e.name + '還沒現身' }),
        h('p', { class: 'rpg-modal-lead', text: '主職業升到' + RANKS[ELITE_RANK].zh + '後，精英魔王就會在地圖出沒。' }),
        h('p', { class: 'rpg-note', text: '針劑風險：' + e.risk + '。出題範圍：' + e.srcText + '。' }),
        weakHintFor(e.weak)
      ]);
      return;
    }
    Promise.all(e.src.map(function (x) {
      var d = M.docs[x.key];
      if (!d || !d.quiz) return [];
      return fetch(ROOT + 'rpg/quiz/' + x.key + '.json').then(function (r) { return r.json(); }).then(function (b) {
        var ids = (x.ids || []).map(String), whole = !x.secs && !x.ids;
        return (b.questions || []).filter(function (q) {
          return whole || (x.secs || []).indexOf(q.section) >= 0 || ids.indexOf(String(q.id)) >= 0;
        }).map(function (q) { return Object.assign({}, q, { docTitle: d.titleZh || d.title, docKey: x.key }); });
      });
    })).then(function (lists) {
      var pool = [].concat.apply([], lists);
      if (!pool.length) { toast('題庫讀不到，請稍後再試。'); return; }
      var box = h('div', { class: 'rpg-boss-fight' }), won = S.eliteWin[e.id];
      modal([
        h('span', { class: 'rpg-tag rpg-tag-elite', text: 'ELITE BOSS' }),
        h('h2', { text: '精英魔王　' + e.name }),
        h('p', { class: 'rpg-modal-lead', text: '針劑風險：' + e.risk + '。從相關文件隨機出 ' + Math.min(BOSS_Q, pool.length) +
          ' 題，答對 80% 擊敗牠。選打，不影響升階' + (won ? '。' : '；第一次擊敗得 ' + XP_ELITE + ' XP、1 顆' + BOSS_MAT + '和稱號「' + e.title + '」。') }),
        h('p', { class: 'rpg-note', text: '出題範圍：' + e.srcText + '（' + pool.length + ' 題）' }),
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
            if (weakFirst) toast('弱點擊破！+' + XP_WEAK + ' XP，獲得素材：' + BOSS_MAT);
            else if (first) toast('擊敗精英魔王！+' + XP_ELITE + ' XP，獲得素材：' + BOSS_MAT);
            refresh();
          }
        });
      }
    }).catch(function (err) { console.warn('[rpg] elite battle failed to load', err); toast('題庫讀不到，請稍後再試。'); });
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
      palBubble, h('button', { type: 'button', class: 'rpg-pal-btn', 'aria-label': '夥伴，點一下跟牠說話', onclick: palPoke }, [palImg,
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
  function palVoice() { return S.pet ? PETS[S.pet.line].voice + '，' : ''; }
  function palSay(text, priority) {
    if (!pal || !text) return;
    var now = Date.now();
    if (S.palQuiet && priority < 2) return;
    if (!priority && now - palLast < 15000) return;
    palLast = now;
    clear(palBubble);
    palBubble.appendChild(h('span', { text: text }));
    palBubble.appendChild(h('button', { type: 'button', class: 'rpg-pal-mute', text: S.palQuiet ? '恢復說話' : '安靜一點', onclick: function (e) {
      e.stopPropagation();
      S.palQuiet = !S.palQuiet; saveState();
      palSay(S.palQuiet ? '好，我安靜陪你。點我才會說話。' : palVoice() + '我回來了。', 2);
    } }));
    palBubble.hidden = false;
    pal.classList.remove('is-talking'); void pal.offsetWidth; pal.classList.add('is-talking');
    clearTimeout(palHideT);
    palHideT = setTimeout(function () { palBubble.hidden = true; pal.classList.remove('is-talking'); }, 6000 + text.length * 60);
  }
  function palGreeting() {
    if (!S.pet) return '讀完第一節，蛋就會孵化。';
    var hr = new Date().getHours(), st = G.docs[pageDocKey];
    var hi = hr < 5 ? '這麼晚還在讀，辛苦了' : hr < 11 ? '早安' : hr < 14 ? '午安' : hr < 18 ? '下午好' : '晚上好';
    var where = st.cleared ? '這份你已經通關了，來複習嗎？' : st.read ? '這份讀到第 ' + st.read + ' / ' + st.total + ' 節了，接著讀吧。' : '這份有 ' + st.total + ' 節，我們從頭開始。';
    return palVoice() + hi + '。' + where;
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
    palSay('Section ' + cur.num + '「' + (cur.zh || cur.en) + '」。' + (goal ? '先抓這個重點：' + goal : '') +
      (palDoc.quiz && palDoc.quiz[cur.id] ? '　這節最後有挑戰。' : ''), 1);
  }
  function palCheer() {
    if (!pal) return;
    pal.classList.remove('rpg-hop'); void pal.offsetWidth; pal.classList.add('rpg-hop');
    palSay(palVoice() + ['又前進一點了。', '這節收下了。', '穩穩地讀。'][Math.floor(Math.random() * 3)], 0);
  }
  function palPoke() {
    var st = G.docs[pageDocKey], lines = [
      '這份文件讀了 ' + st.read + ' / ' + st.total + ' 節' + (st.quizSecs.length ? '，挑戰過了 ' + st.passed + ' / ' + st.quizSecs.length + ' 節。' : '。'),
      '離 Lv ' + (G.level + 1) + ' 還差 ' + (G.hi - G.xp) + ' XP。',
      liveStreak() ? '已經連續 ' + liveStreak() + ' 天了，今天也算數。' : '今天讀完一節，連續天數就開始算。',
      S.pet ? (G.petStage >= 4 ? '我已經是最終型態了，接下來換你變強。' : '等你升到「' + RANKS[G.petStage].zh + '」，我就會進化。') : '我還在蛋裡，讀完第一節就出來。'
    ];
    if (wearing('ribbon') && S.pet) lines.push('這條領巾好看嗎？是你做給我的。', '戴著領巾，覺得自己也變專業了。', '素材再多一點，工坊還能做別的裝備喔。');
    palAwake();
    palSay(palVoice() + lines[palPokes++ % lines.length], 2);
  }
  /* Idle handling: a nudge after 2 minutes without input, asleep after 5. */
  function palAwake() {
    var now = Date.now();
    if (now - palAwakeAt < 1000) return;
    palAwakeAt = now;
    if (pal.classList.contains('is-sleep')) { pal.classList.remove('is-sleep'); palSay(palVoice() + '你回來了。', 1); }
    clearTimeout(palIdleT); clearTimeout(palSleepT);
    palIdleT = setTimeout(function () { palSay(['看累了嗎？站起來動一下再回來。', '卡住的話，先看右邊的導師解析。', '喝口水，我在這裡等。'][Math.floor(Math.random() * 3)], 0); }, 120000);
    palSleepT = setTimeout(function () { pal.classList.add('is-sleep'); palSay('Zzz…', 1); }, 300000);
  }

  /* ---------- review ambush (spaced review of a section passed a week ago) ---------- */
  var reviewTries = 0;
  function maybeReview() {
    if (!S.profile || pageDocKey) return;                       // never interrupt reading
    if (!document.getElementById('rpg-quest') && !document.getElementById('rpg-character') && !document.getElementById('rpg-map')) return;
    var today = dayKey(new Date()), now = Date.now();
    if (S.review.day === today) return;
    if (document.querySelector('.rpg-modal, .rpg-cutin')) {    // wait for rewards / dialogs to finish
      if (reviewTries++ < 5) setTimeout(maybeReview, 3000);
      return;
    }
    // A due mistake (missed on an earlier day) comes first.
    var due = weakIds().filter(weakDue);
    if (due.length) {
      var wid = due[Math.floor(Math.random() * due.length)], wkey = weakKey(wid), qid = wid.slice(wkey.length + 1);
      fetch(ROOT + 'rpg/quiz/' + wkey + '.json').then(function (r) { return r.json(); }).then(function (bank) {
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
    fetch(ROOT + 'rpg/quiz/' + pick.key + '.json').then(function (r) { return r.json(); }).then(function (bank) {
      var qs = (bank.questions || []).filter(function (q) { return q.section === pick.sid; });
      if (!qs.length || document.querySelector('.rpg-modal, .rpg-cutin')) return;
      S.review.day = today; saveState();                        // at most one ambush a day, even if dismissed
      openReview(pick, qs[Math.floor(Math.random() * qs.length)]);
    }).catch(function () {});
  }
  function openReview(pick, q) {
    var d = M.docs[pick.key], done = false;
    var opts = h('div', { class: 'rpg-quiz-opts' });
    var exp = h('div', { class: 'rpg-quiz-exp', hidden: true }, [h('p', { text: q.explanation || '' }), q.reference ? h('small', { text: '出處：' + q.reference }) : null]);
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
        result.textContent = ok ? (clean ? '淨化了這道錯題！+' : '答對了，+') + reviewXp() + ' XP'
          : pick.weak ? '還是錯了。看一下解析，它會留在錯題本裡。'
          : '這題忘了。看一下解析，已記進錯題本，' + (wearing('watch') ? '5 天' : '一週') + '後也還會再遇到。';
        result.className = 'rpg-quiz-result ' + (ok ? 'is-pass' : 'is-fail');
        saveState(); refresh();
      } }, [h('b', { text: letter }), h('span', { text: q.options[letter] })]));
    });
    modal([
      h('span', { class: 'rpg-tag', text: 'REVIEW' }),
      h('h2', { text: '複習突擊' }),
      h('p', { class: 'rpg-modal-lead', text: pick.weak
        ? '錯題本裡的一題，出自「' + (d.titleZh || d.title) + '」。這次答對就能淨化它。答錯不扣分。'
        : '你之前通過了「' + (d.titleZh || d.title) + '」的章節挑戰，還記得嗎？答錯不扣分。' }),
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
    toast(S.gear.on[g.slot] ? '裝備：' + g.zh : '卸下：' + g.zh);
  }
  /* Turn CONVERT of a material you have plenty of into one you are missing. */
  function convertRow() {
    var have = Object.keys(S.mats).filter(function (k) { return k !== 'boss' && S.mats[k] >= CONVERT; });
    var from = h('select', { class: 'rpg-select', 'aria-label': '拿哪一種素材去換' });
    var to = h('select', { class: 'rpg-select', 'aria-label': '換成哪一種素材' });
    have.forEach(function (k) { from.appendChild(h('option', { value: k, text: matName(k) + '（' + S.mats[k] + '）' })); });
    MATS.forEach(function (m, i) { to.appendChild(h('option', { value: 'c' + i, text: m })); });
    var go = h('button', { class: 'rpg-btn rpg-btn-ghost', type: 'button', text: '煉成', disabled: !have.length, onclick: function () {
      var a = from.value, b = to.value;
      if (!a || a === b || (S.mats[a] || 0) < CONVERT) { toast(a === b ? '換成同一種素材沒有意義。' : '素材不夠。'); return; }
      S.mats[a] -= CONVERT; S.mats[b] = (S.mats[b] || 0) + 1;
      saveState(); renderAll();
      toast(CONVERT + ' 個' + matName(a) + ' → 1 個' + matName(b));
    } });
    return h('div', { class: 'rpg-convert' }, [
      h('b', { text: '煉成陣' }),
      h('span', { class: 'rpg-note', text: have.length ? CONVERT + ' 個同種素材換 1 個別的素材（魔王結晶不能換）：' : '同一種素材有 ' + CONVERT + ' 個以上時，可以換成別的素材。' }),
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
    toast('合成道具：' + it.zh + '。魔王戰前可以選它帶上場。');
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
          h('b', { text: it.zh }), h('small', { class: 'rpg-chip', text: it.cat + '・對 ' + it.vs.map(targetName).join('、') }),
          h('p', { text: it.eff }),
          own ? null : need
        ]),
        own ? h('span', { class: 'rpg-chip rpg-item-own', text: '已持有' })
          : h('button', { class: 'rpg-btn', type: 'button', text: '合成', disabled: !canCraft(it), onclick: function () { craftItem(it); } })
      ]));
    });
    return h('div', { class: 'rpg-itembox' }, [
      h('h3', { class: 'rpg-sub', text: '特殊道具　' + ITEMS.filter(function (x) { return S.items[x.id]; }).length + ' / ' + ITEMS.length }),
      h('p', { class: 'rpg-note', text: '道具不用穿戴，魔王戰前從背包選一個帶上場。用對魔王，護盾就會變多；有些魔王沒帶對的道具根本打不進去。' }),
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
        g ? h('img', { src: gearImg(g), alt: '' }) : h('span', { class: 'rpg-slot-empty', text: '空' }),
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
        own ? h('button', { class: 'rpg-btn' + (on ? ' rpg-btn-ghost' : ''), type: 'button', text: on ? '卸下' : '裝備', onclick: function () { equip(g); } })
          : h('button', { class: 'rpg-btn', type: 'button', text: '合成', disabled: !ok, onclick: function () { craft(g); } })
      ]));
    });
    return h('section', { class: 'rpg-panel rpg-workshop' }, [
      h('h2', { text: '工坊　' + owned + ' / ' + GEAR.length }),
      h('p', { class: 'rpg-note', text: '每件裝備合成一次，同一個部位一次穿一件。裝備只幫你多撐一下、或更快找回原文；過關標準一樣是答對 80%。' }),
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
          h('b', { text: d.titleZh || d.title }),
          h('span', { text: d.code + '　' + all.length + ' 題' + (due < all.length ? '（今天答錯 ' + (all.length - due) + ' 題，明天起可淨化）' : '') })
        ]),
        h('button', { class: 'rpg-btn', type: 'button', text: '練習', onclick: function () { openDrill(key); } })
      ]));
    });
    var cleared = S.flags.cleansed || 0;
    return h('section', { class: 'rpg-panel rpg-weakbook' }, [
      h('h2', { text: '錯題本　' + ids.length }),
      h('p', { class: 'rpg-note', text: ids.length
        ? '戰鬥或複習突擊答錯的題都會記在這裡。隔天以後再答對就能淨化，每淨化一題掉一份素材。複習突擊會優先出這裡的題。'
        : (cleared ? '錯題本是空的，累計淨化 ' + cleared + ' 題。' : '目前沒有錯題。戰鬥中答錯的題會記在這裡，隔天再來淨化。') }),
      ids.length ? list : null
    ]);
  }
  function openDrill(key) {
    var d = M.docs[key];
    fetch(ROOT + 'rpg/quiz/' + key + '.json').then(function (r) { return r.json(); }).then(function (bank) {
      var want = {};
      weakIds(key).forEach(function (id) { want[id.slice(key.length + 1)] = id; });
      var qs = (bank.questions || []).filter(function (q) { return want[String(q.id)]; }).map(function (q) {
        delete want[String(q.id)];
        return Object.assign({}, q, { docKey: key, docTitle: d.titleZh || d.title });
      });
      Object.keys(want).forEach(function (k) { delete S.weak[want[k]]; });   // bank was edited; drop stale entries
      saveState();
      if (!qs.length) { renderAll(); toast('這份文件沒有錯題了。'); return; }
      var mi = clusterOf(d), box = h('div', { class: 'rpg-boss-fight' });
      modal([
        h('span', { class: 'rpg-tag', text: 'MISTAKE BOOK' }),
        h('h2', { text: '錯題練習　' + (d.titleZh || d.title) }),
        h('p', { class: 'rpg-modal-lead', text: '共 ' + qs.length + ' 題，不扣分、不會被擊退。昨天以前答錯的題，這次答對就淨化。' }),
        box
      ], { cls: 'rpg-modal-wide' });
      function go() {
        runBattle(box, {
          kind: 'drill', foe: mi >= 0 ? MOBS[mi] : '錯題幽靈', foeImg: mi >= 0 ? asset('mob-' + mi) : null, cluster: mi,
          hearts: qs.length + 1, questions: shuffle(qs.slice()), again: function () {
            qs = qs.filter(function (q) { return S.weak[key + '#' + q.id]; });
            if (qs.length) go(); else toast('這份文件的錯題都淨化了！');
          },
          onEnd: function () { saveState(); refresh(); }
        });
      }
      go();
    }).catch(function (e) { console.warn('[rpg] mistake drill failed to load', e); toast('題庫讀不到，請稍後再試。'); });
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
      h('img', { class: 'rpg-hero-art', src: heroImg(), alt: CLASS_META[dep.id].job }),
      h('div', { class: 'rpg-hero-info' }, [
        h('span', { class: 'rpg-tag', text: RANKS[c.rank].en.toUpperCase() }),
        h('h1', {}, [avatarEl('lg'), h('span', { text: S.profile.nick })]),
        h('p', { class: 'rpg-hero-job', text: RANKS[c.rank].zh + CLASS_META[dep.id].job + '　' + dep.nameZh + (bestTitle() ? '　｜　' + bestTitle() : '') }),
        h('div', { class: 'rpg-stats' }, [
          stat('Lv ' + G.level, '等級'), stat(String(G.xp), '經驗值'), stat(String(streak), '連續天數'),
          stat(G.cards + ' / ' + Object.keys(G.docs).filter(function (k) { return !G.docs[k].doc.shell; }).length, '文件卡')
        ]),
        h('div', { class: 'rpg-hero-xp' }, [xpBar(), h('small', { text: '距離 Lv ' + (G.level + 1) + ' 還差 ' + (G.hi - G.xp) + ' XP' })]),
        h('button', { class: 'rpg-btn rpg-btn-ghost', type: 'button', onclick: openOnboarding, text: '編輯角色／轉職' }),
        h('a', { class: 'rpg-btn rpg-btn-ghost rpg-hero-map', href: ROOT + 'map.html', text: '闖關地圖' }),
        h('a', { class: 'rpg-btn rpg-btn-ghost rpg-guide-link', href: ROOT + 'rpg-guide.html', text: '新手指南' }),
        h('button', { class: 'rpg-btn rpg-btn-ghost', type: 'button', onclick: function () { openPrologue(null); }, text: '重看序章' })
      ])
    ]));

    /* pet */
    var petPanel = h('section', { class: 'rpg-panel rpg-petpanel' }, [h('h2', { text: '夥伴' })]);
    if (S.pet) {
      var line = PETS[S.pet.line];
      petPanel.appendChild(h('div', { class: 'rpg-pet-now' }, [
        h('img', { class: petCls('rpg-idle'), src: petImg(S.pet.line, G.petStage), alt: line.stages[G.petStage - 1] }),
        h('div', {}, [
          h('b', { text: line.stages[G.petStage - 1] + (S.pet.shiny ? '（異色）' : '') }),
          h('p', { text: G.petStage >= 4 ? '已經是最終型態。' : '下一次進化：任一職業升到「' + RANKS[G.petStage].zh + '」階級，進化為' + line.stages[G.petStage] + '。' })
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
          h('span', { text: (t.anyOf ? '任選 ' : '必讀 ') + t.got + ' / ' + t.need + (t.done ? '　完成' : t.ready && t.hasBoss ? '　魔王待挑戰' : '') })
        ]), rows
      ]));
    });
    mount.appendChild(main);
    mount.appendChild(skillPanel(dep));

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
    var gotSecrets = SECRETS.filter(function (x) { return S.secrets[x.id]; }).length;
    titles.appendChild(h('h3', { class: 'rpg-sub', text: '隱藏稱號　' + gotSecrets + ' / ' + SECRETS.length }));
    var sl = h('ul', { class: 'rpg-titles' });
    SECRETS.forEach(function (x) {
      var on = !!S.secrets[x.id];
      sl.appendChild(h('li', { class: on ? 'is-on' : '', style: '--c:#ff3d81' }, [
        h('b', { text: on ? x.zh : '？？？' }), h('span', { text: on ? x.how : '條件未知' })
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
      h('b', { text: String(nb) }), h('span', { text: BOSS_MAT }), h('small', { text: '第一次打倒魔王' })
    ]));
    mount.appendChild(h('section', { class: 'rpg-panel' }, [
      h('h2', { text: '素材' }),
      h('p', { class: 'rpg-note', text: '第一次通過章節挑戰、或答對複習突擊時，會得到該文件主題的素材；第一次打倒每個魔王，得到一顆魔王結晶。素材拿到下面的工坊合成裝備。' }),
      ml, convertRow()
    ]));
    mount.appendChild(workshop());
    mount.appendChild(mistakeBook());

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
      h('p', { class: 'rpg-note', text: '讀完一份文件得到文件卡；有章節挑戰的文件全部過關後，卡片會覺醒；每一節都第一次挑戰就全對，會變成異色卡。稀有度依文件的章節數決定。' }),
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
  /* ---------- stage map ----------
     One zone per tier, one stage per document, a boss gate at the end of each
     zone (the rank-up). Stages snake left-to-right then right-to-left. Nothing
     is hard-locked: later zones are fogged but every document stays readable. */
  var ZONES = [
    { zh: '啟程之島', en: 'Isle of Beginnings', cls: 'rpg-z0', boss: '微粒魔' },
    { zh: '修練之島', en: 'Isle of Practice', cls: 'rpg-z1', boss: '生物膜王' },
    { zh: '核心之島', en: 'Isle of Mastery', cls: 'rpg-z2', boss: '內毒素龍' }
  ];
  var mapCols = 0;
  function mapColsFor(w) { return w < 520 ? 3 : w < 820 ? 4 : 5; }
  function renderMap() {
    var mount = document.getElementById('rpg-map');
    if (!mount) return;
    clear(mount);
    if (!S.profile) {
      mount.appendChild(h('div', { class: 'rpg-panel rpg-empty' }, [
        h('h2', { text: '還沒有角色' }),
        h('p', { text: '建立角色、選一個職業，這裡就會出現那個職業的闖關地圖。' }),
        h('button', { class: 'rpg-btn', type: 'button', onclick: openOnboarding, text: '建立角色' })
      ]));
      return;
    }
    var c = G.classes[S.profile.cls], dep = c.dep, q = nextQuest();
    var curKey = q && !q.done && q.st ? q.st.key : null;
    var cols = mapCols = mapColsFor(mount.clientWidth || window.innerWidth);

    mount.appendChild(h('header', { class: 'rpg-map-head', style: '--c:' + dep.color }, [
      h('span', { class: 'rpg-tag', text: 'WORLD MAP' }),
      h('h1', { text: dep.nameZh + '　闖關地圖' }),
      h('p', { text: '目前階級：' + RANKS[c.rank].zh + CLASS_META[dep.id].job + '。每一關是一份文件，走到區域盡頭通過升階試煉就能進下一區。' }),
      h('button', { class: 'rpg-btn rpg-btn-ghost', type: 'button', onclick: openOnboarding, text: '換職業看別的地圖' }),
      h('a', { class: 'rpg-btn rpg-btn-ghost rpg-guide-link', href: ROOT + 'rpg-guide.html', text: '新手指南' })
    ]));

    c.tiers.forEach(function (t, ti) {
      var zone = ZONES[ti] || ZONES[ZONES.length - 1];
      var stages = t.tier.docs.filter(function (x) { return M.docs[x.key]; });
      stages = stages.filter(function (x) { return x.required; }).concat(stages.filter(function (x) { return !x.required; }));
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
        var maxStars = d.quiz ? 3 : 1;
        var stars = (st.readAll || st.cleared ? 1 : 0) + (d.quiz && st.cleared ? 1 : 0) + (st.shiny ? 1 : 0);
        var starText = '';
        for (var k = 0; k < maxStars; k++) starText += k < stars ? '★' : '☆';
        var cls = 'rpg-stage' + (st.cleared ? ' is-clear' : '') + (here ? ' is-here' : '') + (x.required ? '' : ' is-side') + (d.shell ? ' is-shell' : '');
        var inner = [
          here ? h('span', { class: 'rpg-stage-you' }, [avatarEl(), S.pet ? h('img', { class: petCls('rpg-idle'), src: petImg(S.pet.line, G.petStage), alt: '' }) : null]) : null,
          h('span', { class: 'rpg-stage-dot', style: '--p:' + pct + '%;--bar:' + d.bar }, [h('b', { text: st.cleared ? '✓' : String(i + 1) })]),
          h('span', { class: 'rpg-stage-stars', 'aria-label': stars + ' / ' + maxStars + ' 星', text: d.shell ? '準備中' : starText }),
          h('span', { class: 'rpg-stage-name', text: d.titleZh || d.title }),
          h('span', { class: 'rpg-stage-meta', text: d.shell ? '' : (x.required ? '' : '支線・') + (st.cleared ? '通關' : st.started ? st.read + ' / ' + st.total + ' 節' : st.total + ' 節') + (d.quiz ? '・有挑戰' : '') })
        ];
        var node = d.shell ? h('span', { class: 'rpg-stage-link' }, inner)
          : h('a', { class: 'rpg-stage-link', href: here ? q.href : ROOT + d.file, title: d.title }, inner);
        place(h('li', { class: cls + (st.cleared ? ' path-done' : '') }, [node]), i);
      });

      var canFight = t.ready && t.hasBoss && !t.beaten;
      var canWeak = t.hasBoss && t.beaten && !S.weakWin[dep.id + ':' + ti] && canCounter(ti);   // already beaten: come back with a counter skill
      var bossInner = [
        asset('boss-' + (ti + 1))
          ? h('img', { class: 'rpg-boss-img', src: asset('boss-' + (ti + 1)), alt: zone.boss })
          : h('span', { class: 'rpg-stage-dot' }, [h('b', { text: t.done ? '✓' : 'BOSS' })]),
        h('span', { class: 'rpg-stage-name', text: (t.done ? '已擊敗　' : '魔王　') + zone.boss }),
        h('span', { class: 'rpg-stage-meta', text: '升階試煉：' + RANKS[ti + 1].zh + CLASS_META[dep.id].job }),
        h('span', { class: 'rpg-stage-meta', text: (t.anyOf ? '任選通關 ' : '必讀通關 ') + t.got + ' / ' + t.need +
          (!t.hasBoss ? '・本區沒有魔王戰' : t.beaten ? '・魔王已擊敗' : t.ready ? '・魔王現身了' : '・通關後魔王現身') }),
        t.hasBoss ? h('span', { class: 'rpg-stage-meta rpg-weak-meta', text: '弱點：' + weakText(ti) + (S.weakWin[dep.id + ':' + ti] ? '・已弱點擊破' : '') }) : null,
        canFight ? h('span', { class: 'rpg-btn rpg-btn-sm', text: '挑戰' }) : canWeak ? h('span', { class: 'rpg-btn rpg-btn-sm rpg-btn-ghost', text: '弱點擊破' }) : null
      ];
      place(h('li', { class: 'rpg-stage rpg-boss' + (t.done ? ' is-clear' : '') + (canFight ? ' is-ready' : '') }, [
        canFight || canWeak ? h('button', { type: 'button', class: 'rpg-stage-link', onclick: function () { openBoss(ti); } }, bossInner)
          : h('span', { class: 'rpg-stage-link' }, bossInner)
      ]), total - 1);

      mount.appendChild(h('section', { class: 'rpg-zone ' + zone.cls + (t.done ? ' is-done' : '') + (fog ? ' is-fog' : '') }, [
        h('div', { class: 'rpg-zone-head' }, [
          h('span', { class: 'rpg-zone-no', text: 'ZONE ' + (ti + 1) }),
          h('h2', {}, [zone.zh, h('small', { text: zone.en + '　' + t.tier.labelZh + ' ' + t.tier.label })]),
          h('span', { class: 'rpg-zone-state', text: t.done ? '已攻略' : t.ready && t.hasBoss ? '魔王現身了，擊敗牠就能升階' : fog ? '完成前一區的升階試煉後正式開放（文件仍可先讀）' : '攻略中 ' + t.got + ' / ' + t.need })
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
        h('h2', {}, ['精英魔王', h('small', { text: 'Elite Bosses　針劑的其他失敗模式' })]),
        h('span', { class: 'rpg-zone-state', text: open ? '選打，不影響升階；題目來自全站相關文件' : '主職業升到' + RANKS[ELITE_RANK].zh + '後出沒' })
      ]),
      h('ul', { class: 'rpg-elite-list' }, ELITES.map(function (e) {
        var won = S.eliteWin[e.id], wk = S.weakWin['elite:' + e.id], img = asset('elite-' + e.id);
        var act = !open ? '查看' : !won ? '挑戰' : !wk && canCounterMap(e.weak) ? '弱點擊破' : '再戰';
        return h('li', { class: 'rpg-elite' + (won ? ' is-clear' : '') + (open && !won ? ' is-ready' : ''), style: '--c:' + e.fx.c }, [
          h('button', { type: 'button', class: 'rpg-elite-btn', onclick: function () { openElite(e.id); } }, [
            img ? h('img', { class: 'rpg-boss-img', src: img, alt: e.name }) : h('span', { class: 'rpg-elite-sil', 'aria-hidden': 'true', text: '？' }),
            h('span', { class: 'rpg-elite-body' }, [
              h('b', { text: (won ? '已擊敗　' : '') + e.name }),
              h('span', { class: 'rpg-stage-meta', text: e.risk }),
              h('span', { class: 'rpg-stage-meta rpg-weak-meta', text: '弱點：' + Object.keys(e.weak).map(elName).join('、') + (wk ? '・已弱點擊破' : '') }),
              e.needTag ? h('span', { class: 'rpg-stage-meta rpg-weak-meta', text: '入場條件：攜帶' + (e.needName || '對應道具') + (ITEMS.some(function (x) { return itemTag(x, e.needTag) && S.items[x.id]; }) ? '（已持有）' : '（到工坊合成）') }) : null,
              h('span', { class: 'rpg-stage-meta', text: won ? '稱號：' + e.title + '・最佳 ' + won.best + ' / ' + won.total : '擊敗得稱號「' + e.title + '」' })
            ]),
            h('span', { class: 'rpg-btn rpg-btn-sm' + (act === '挑戰' ? '' : ' rpg-btn-ghost'), text: act })
          ])
        ]);
      }))
    ]);
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
        h('span', { text: sp.el + '　' + d.nameZh }),
        h('span', { class: 'rpg-skill-beats', text: beats.length ? '剋 ' + beats.join('、') : '' }),
        h('small', { text: main ? '主技能' : k.learned ? '已習得' : k.need ? '必讀 ' + k.got + ' / ' + k.need : '尚無必讀文件' }),
        !on && k.need ? h('i', { class: 'rpg-skill-bar', style: '--p:' + Math.round(k.got / k.need * 100) + '%' }) : null
      ]));
    });
    return h('section', { class: 'rpg-panel' }, [
      h('h2', { text: '技能與第二專長' }),
      h('p', { class: 'rpg-note', text: '讀完其他部門的全部必讀文件（有挑戰的要過關），就能習得該部門的技能。魔王戰前可以選一個技能出戰；' +
        '帶著魔王怕的技能是「弱點擊破」：多 1 顆心、多 1 面護盾，第一次用弱點技能打倒牠再得 ' + XP_WEAK + ' XP 和 1 顆' + BOSS_MAT + '。及格線一樣是 80%。' }),
      ul
    ]);
  }
  function stat(v, l) { return h('div', { class: 'rpg-stat' }, [h('b', { text: v }), h('span', { text: l })]); }

  function renderAll() {
    renderBar(); renderQuest(); renderCharacter(); renderMap(); palDraw();
    listeners.forEach(function (cb) { try { cb(); } catch (e) { console.warn('[rpg] listener failed', e); } });
  }

  /* ---------- API for rpg/map3d.js ---------- */
  var listeners = [];
  function mapData() {
    if (!S || !S.profile || !G) return null;
    var c = G.classes[S.profile.cls], dep = c.dep, q = nextQuest();
    var curKey = q && !q.done && q.st ? q.st.key : null;
    return {
      cls: dep.id, name: dep.nameZh, color: dep.color, rank: c.rank,
      avatar: avatarImg(S.profile.avatar),
      pet: S.pet ? petImg(S.pet.line, G.petStage) : null,
      zones: c.tiers.map(function (t, ti) {
        var zone = ZONES[ti] || ZONES[ZONES.length - 1];
        return {
          zh: zone.zh, boss: zone.boss, bossImg: asset('boss-' + (ti + 1)), rankName: RANKS[ti + 1].zh + CLASS_META[dep.id].job,
          ti: ti, unlocked: ti <= c.rank, done: t.done, ready: t.ready, hasBoss: t.hasBoss, beaten: t.beaten, weak: weakText(ti), weakWon: !!S.weakWin[c.dep.id + ':' + ti], canCounter: canCounter(ti),
          got: t.got, need: t.need, anyOf: t.anyOf,
          stages: t.tier.docs.filter(function (x) { return M.docs[x.key]; }).map(function (x) {
            var d = M.docs[x.key], st = G.docs[x.key], here = x.key === curKey;
            return {
              key: x.key, title: d.titleZh || d.title, main: x.required || t.anyOf, shell: d.shell, quiz: !!d.quiz,
              cleared: st.cleared, started: st.started, read: st.read, total: st.total, shiny: st.shiny, here: here,
              stars: (st.readAll || st.cleared ? 1 : 0) + (d.quiz && st.cleared ? 1 : 0) + (st.shiny ? 1 : 0), maxStars: d.quiz ? 3 : 1,
              href: here ? q.href : ROOT + d.file
            };
          })
        };
      }),
      elites: ELITES.map(function (e) {
        return {
          id: e.id, name: e.name, risk: e.risk, color: e.fx.c, img: asset('elite-' + e.id), open: eliteOpen(),
          won: !!S.eliteWin[e.id], weakWon: !!S.weakWin['elite:' + e.id], canCounter: canCounterMap(e.weak),
          weak: Object.keys(e.weak).map(elName).join('、'), title: e.title, unlock: RANKS[ELITE_RANK].zh + CLASS_META[dep.id].job,
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
      } catch (e) {}
      window.addEventListener('storage', function (e) {
        if (e.key && (e.key === STATE_KEY || e.key.indexOf('sgk_progress_') === 0)) { S = loadState(); refresh(); }
      });
      window.addEventListener('pageshow', function (e) { if (e.persisted) { S = loadState(); refresh(); } });
    }).catch(function (e) { console.warn('[rpg] failed to start', e); });
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', boot); else boot();
})();
