# SterileGMP Knowledge Hub — Project Rules

Multi-source GMP knowledge base covering PDA, ISPE, FDA, PIC/S, ICH, USP, ISO, and ECA. Each source uses its own folder prefix (e.g., `ISPE/ISPE-Vol5/`, `FDA/FDA-Aseptic/`).

**Detail in `.claude/rules/`:**
- `workflow-checklist.md` — post-completion steps + git push sync checklist
- `naming-conventions.md` — folder structure, file naming, source color palette
- `pitfalls.md` — known bugs and workarounds

---

## Quick Start — Adding a New Report

```bash
# 1. Scaffold folder + skeleton entry in reports.json
python gmp_engine.py scaffold TRXX
python gmp_engine.py scaffold ISPE-Vol5 --source ISPE   # ISPE variant

# 2. Fill in reports.json entry (title, tags, colors, section_map)

# 3. Extract PDF text into <SOURCE>/<ID>/source/

# 4. Generate knowledge MD — review before proceeding
python gmp_engine.py md TRXX

# 5. Generate bilingual HTML sections (Claude agents, parallel dispatch)
#    Use docs/PROMPT.md template. Plan A/B split upfront for source files > 800 lines.

# 6. Merge HTML
python gmp_engine.py merge TRXX

# 7. Update knowledge/INDEX.md + knowledge/INDEX-router.md

# 8. Move source PDF
mv "Raw pdfs/PDA_TRXX_....pdf" "Raw pdfs/processed/"

# 9. Verify in browser, then commit + push
git add <SOURCE>/TRXX/ reports.json knowledge/ "Raw pdfs/processed/"
git commit -m "Add TRXX: [title]"
```

---

## Starting a New Session

1. `git pull` first — new PDFs are pushed remotely, not copied locally.
2. Unprocessed PDFs live in `Raw pdfs/` root. Processed are in `Raw pdfs/processed/`.
3. Processing order: PDA (lowest TR# first) → ISPE (Vol.5 → GEP → Vol.7 → Vol.3 → Vol.4 → HVAC) → FDA/PIC/S by regulatory significance.
4. One PDF at a time — complete full workflow before starting next.

```bash
ls "Raw pdfs/" | grep -v processed   # check for unprocessed PDFs
```

---

## After Every `git push`

Run `/project-sync` — audits ROADMAP dates/counts, INDEX.md entries, folder integrity automatically.

After `/project-sync`, manually verify: `INDEX-router.md` new rows, and whether `CLAUDE.md` or `docs/PROMPT.md` need updating.

---

## Critical Rules

- **Never** manually edit `index.html` — it reads from `reports.json`
  (one exception already in place: the `#rpg-quest` mount and the `rpg/rpg.js` script tag — leave them)
- **Never** add inventory tables here — `reports.json` is the single source of truth
- Knowledge MDs in `knowledge/` must be **English-only** (no Chinese)
- Plan **A/B section splits** upfront for any source text file over ~800 lines
- `INDEX-router.md` only gets rows for ★★★ and ★★ sources — not every document

---

## RPG Learning Layer (`rpg/`)

Optional game layer: character, XP/level/rank, next-quest card, document cards, pet, and in-page
section challenges. Off by default; `?rpg=1` switches it on in that browser, `?rpg=0` off
(`DEFAULT_ON` in `rpg/rpg.js` flips the default). While off, the dashboard `#rpg-quest` mount shows a small inline-styled "開啟冒險模式" card; the character page has "關閉冒險模式".

- `rpg/rpg.js` + `rpg/rpg.css` — the whole feature. Loaded by `index.html`, `learning-path.html`,
  `quiz.html`, `character.html`, `map.html`, and every merged page (one `<script>` line emitted by `merge_engine.py`).
- `rpg/map3d.js` — 3D stage map on `map.html` only (three.js r128 from cdnjs). Reads everything through `window.SGKRpg`; the flat list rendered by `rpg.js` below it is the fallback.
- `rpg-guide.html` — static beginner guide (Traditional Chinese) to the game rules. Hand-written: update it when XP values, battle rules, bosses, elites, gear or items change.
- `rpg/manifest.json` — **generated**. Rebuild after adding/merging a document or editing a question bank:
  `python scripts/build_rpg_manifest.py` (`--check` verifies it is current).
- Battles: a section challenge is a turn-based fight against the topic's small monster (right answer = foe -1 HP, wrong = player -1 heart; hearts = mistakes the 80% mark allows + 1). A zone (tier) whose documents have question banks ends in a boss battle (10 random questions from those banks, `map.html?boss=<zone>`); its rank-up waits for the win. Zones without banks rank up on reading alone.
- Rewards that do not touch scoring (C): in `kind: 'boss'` (zone + elite) and `kind: 'guard'` fights every question answered right for the first time ever pays `XP_FRESH` (tracked in `S.bossSeen`, won or lost); finishing all questions of a boss / elite fight drops one material, once a day per target (`S.runDay`). This is what extra hearts / shields buy.
- Document guardian (D, `openGuard`, `map.html?guard=<docKey>`): once every section challenge of a document is passed, from the NEXT day (`docState().guard`: '' / wait / ready / won) a `GUARD_Q`-question mixed fight over the whole bank; first win `XP_GUARD` + 2 materials + a 4th map star (`S.guardWin`). Optional, never gates rank-up; the quest card puts a guardian of a document cleared in the last 14 days first. Art reuses `mob-<cluster>`.
- Daily patrol (E, `patrolPlan` / `openPatrol`, strip from `patrolStrip` on the dashboard `#rpg-quest` and the character page): up to `PATROL_Q` questions a day from due mistakes (max 3 first) and passed sections (due for review, least recently reviewed first; not ones passed today). Runs as a no-knockout `kind: 'drill'` fight; each right answer pays `reviewXp()`; finishing sets `S.patrol`, `touchStreak()`, one material, and `S.review.day` (no ambush after it).
- Level milestones (F, `LEVEL_MILES`): materials / boss crystals / a level title at Lv 3, 5, 7, 10, 13, 15, 20, granted once (`S.earned.lvl`, old saves catch up silently on load). A level title shows only when there is no topic title (`bestTitle`). The character hero shows the next milestone.
- Skills / second specialty: clearing every required doc of another department teaches its skill (`G.skills`). Each boss is weak to some departments (`WEAK` in `rpg.js`); a skill picker opens before every boss fight, and bringing a counter skill gives +1 heart, +1 shield, a crit effect, and a one-time `S.weakWin` bonus (XP + boss crystal). Same rule as gear: never changes scoring.
- Elite bosses (`ELITES` in `rpg.js`): optional cross-class fights on other injectable failure modes (孢子騎士 sterilization, 裂隙幽靈 container closure, 竄改魅影 data integrity / TR84, 混淆魔 mix-up / labeling, 溶出妖 E&L / USP 〈1663〉〈1664〉〈381〉, 溫度巨人 cold chain / TR39·TR46·TR52·USP 〈1079〉). Questions are pooled from listed banks/sections/question ids; they appear once the main class reaches `ELITE_RANK`, never gate rank-up, and the first win grants a hidden title (`SECRETS`). `map.html?elite=<id>`. Art: `rpg/assets/elite-<id>.webp` (silhouette until added). On the 3D map they sit on a dark archipelago behind zone 1 (`addElites` in `map3d.js`, data from `mapData().elites`), under cloud until unlocked.
- Special items (`ITEMS` in `rpg.js`): crafted once in the workshop from materials (`S.items`), one brought into each boss/elite fight from the pre-fight picker (`S.itemPick`). An item aimed at that boss (`vs`: `z<zone>` or elite id) adds shields; a boss with `needTag` (孢子騎士 needs a `sporicide`, 竄改魅影 a `trace` item, 混淆魔 an `ident` item, 溫度巨人 a `cold` item) cannot be started without a matching item. Generic names only (no brand names). Never changes scoring. Art: `rpg/assets/item-<id>.webp` (drawn badge until added).
- `rpg/quiz/<KEY>.json` — in-page question bank (MCQ only). Same per-question fields as
  `knowledge/exams/*.json` plus `"section": "<section_map id>"`. Aim for 5 questions per section; pass mark is 80%.
  Kept out of `knowledge/exams/` on purpose so `/quiz` behaviour is unchanged.
- `rpg/assets/*.webp` — class portraits (`class-<deptId>`), head crops (`avatar-<deptId>`), alternate looks (`class-<deptId>-2`, `avatar-<deptId>-2`), pets (`pet-<a|b|c>-<1..4>`), zone bosses (`boss-<1..3>`), section-challenge monsters (`mob-<0..9>`, one per topic cluster), material icons (`mat-<0..9>`), card illustrations per source (`card-<PDA|ISPE|FDA|PICS|ICH|USP|ISO|PHEUR>`), `egg`.
  Also `mat-boss` (boss crystal) and equipment icons `gear-<id>` (ids in `GEAR` in `rpg.js`).
  Missing files fall back to silhouettes.
- Sound (`bgm` / `sfx` / `soundBtn` in `rpg.js`): chiptune synthesized with Web Audio, no audio files. Background music only during the prologue (one theme per page in `THEMES`); short jingles (`JINGLES`) on scenes, cut-ins and battle intro / rage / result. On by default, `S.sound = 0` mutes (toggle on the story overlay and the battle arena). Never changes scoring.
- Workshop (character page): materials drop on a section's first pass, a correct review ambush, and a boss's first defeat (`mats.boss`). `GEAR` items are crafted once from materials and worn one per slot (`gear.own` / `gear.on`); 3 of one material convert to 1 of another. Gear effects must never change scoring — only hearts, hints, links back to the source, review timing/XP, and cosmetics.
- Storage: reads `sgk_progress_*`, `gmp-quiz-results`; writes only `sgk_rpg_v1` and one
  `source: "inpage"` record per document in `gmp-quiz-results`. Character page "下載存檔 / 讀取存檔" exports / restores those keys (+ `gmp-learning-progress`) as one JSON file (`exportSave` / `importSave`, whitelist in `saveKey`).
- Option order: `mixOpts` shuffles A–D per attempt and relabels; questions whose explanation or options name a letter (`LETTER_REF`, e.g. "B 錯在…", "Grade A", "以上皆是") keep their order. Write new explanations without letter references so they can shuffle.
- "Pick any N" zones (no required docs) get `tier.rec`: N recommended docs (cleared first, then banked, curriculum order); the quest card and map follow them, the rest are side stages.
- Never edit `*-Complete.html` for this — change `merge_engine.py` / `rpg/` and re-merge.

---

## Current Inventory

```bash
python3 -c "import json; d=json.load(open('reports.json')); [print(f'{k}: {v.get(\"folder\",k)}') for k,v in d['reports'].items() if v.get('section_map')]"
```
