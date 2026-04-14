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
- **Never** add inventory tables here — `reports.json` is the single source of truth
- Knowledge MDs in `knowledge/` must be **English-only** (no Chinese)
- Plan **A/B section splits** upfront for any source text file over ~800 lines
- `INDEX-router.md` only gets rows for ★★★ and ★★ sources — not every document

---

## Current Inventory

```bash
python3 -c "import json; d=json.load(open('reports.json')); [print(f'{k}: {v.get(\"folder\",k)}') for k,v in d['reports'].items() if v.get('section_map')]"
```
