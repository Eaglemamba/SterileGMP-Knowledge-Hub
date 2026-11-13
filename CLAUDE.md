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
(`DEFAULT_ON` in `rpg/rpg.js` flips the default).

- `rpg/rpg.js` + `rpg/rpg.css` — the whole feature. Loaded by `index.html`, `learning-path.html`,
  `quiz.html`, `character.html`, `map.html`, and every merged page (one `<script>` line emitted by `merge_engine.py`).
- `rpg/map3d.js` — 3D stage map on `map.html` only (three.js r128 from cdnjs). Reads everything through `window.SGKRpg`; the flat list rendered by `rpg.js` below it is the fallback.
- `rpg/manifest.json` — **generated**. Rebuild after adding/merging a document or editing a question bank:
  `python scripts/build_rpg_manifest.py` (`--check` verifies it is current).
- `rpg/quiz/<KEY>.json` — in-page question bank (MCQ only). Same per-question fields as
  `knowledge/exams/*.json` plus `"section": "<section_map id>"`. Aim for 5 questions per section; pass mark is 80%.
  Kept out of `knowledge/exams/` on purpose so `/quiz` behaviour is unchanged.
- `rpg/assets/*.webp` — class portraits (`class-<deptId>`), head crops (`avatar-<deptId>`), alternate looks (`class-<deptId>-2`, `avatar-<deptId>-2`), NPCs (`npc-<name>`), pets (`pet-<a|b|c>-<1..4>`), zone bosses (`boss-<1..3>`), section-challenge monsters (`mob-<0..9>`, one per topic cluster), `egg`.
  Missing files fall back to silhouettes.
- Storage: reads `sgk_progress_*`, `gmp-quiz-results`; writes only `sgk_rpg_v1` and one
  `source: "inpage"` record per document in `gmp-quiz-results`.
- Never edit `*-Complete.html` for this — change `merge_engine.py` / `rpg/` and re-merge.

---

## Current Inventory

```bash
python3 -c "import json; d=json.load(open('reports.json')); [print(f'{k}: {v.get(\"folder\",k)}') for k,v in d['reports'].items() if v.get('section_map')]"
```
