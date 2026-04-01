# SterileGMP Knowledge Hub — Project Rules

This repo covers **multiple GMP guideline sources**: PDA Technical Reports, ISPE Guidelines, FDA Guidance, PIC/S Annex 1, ISO Standards, and ECA Guides. All workflows apply regardless of source. Use the source `id` prefix in folder naming to distinguish (e.g., `ISPE-Vol5/`, `FDA-Aseptic/`).

## Post-Completion Checklist

When any document is fully processed (all sections generated, merged, and verified in browser), you MUST complete these steps before committing:

### 1. Update `reports.json` (SINGLE source of truth)

Add a new report entry to the `reports` object. This feeds BOTH the dashboard and the merge engine — no need to edit index.html separately.

```json
{
  "TRXX": {
    "report_title_en": "PDA Technical Report No. XX (Year)",
    "report_subtitle_en": "Full English Subtitle",
    "report_subtitle_zh": "中文副標題 完整教學版",
    "output_filename": "TRXX-Complete.html",
    "footer_text": "PDA Technical Report No. XX (Year): Full English Subtitle",
    "chapter_label": "Section",
    "date": "2026-03-20",
    "title": "PDA TRXX: Short Dashboard Title",
    "titleZh": "中文標題",
    "source": "PDA TRXX",
    "source_color": { "bg": "#...", "text": "#...", "bar": "#...", "short": "TRXX" },
    "tags": ["Tag1", "Tag2", "Tag3"],
    "summary": "中文摘要（1-2句）",
    "pages": "p1-p100",
    "figures": 0,
    "section_map": [
      { "files": ["section-00-intro.html"], "id": "sec0", "num": "0", "label_en": "Introduction", "label_zh": "導論", "pages": "p1-p5" }
    ]
  }
}
```

Also add any new tags to `tagClasses` in the same file if they don't already exist.

### 2. Update `knowledge/INDEX.md`

Add an entry for the new report to THREE places in `knowledge/INDEX.md`:

1. **New report block** — copy the format of an existing entry, fill in:
   - File name, report name, pages, section count
   - "Covers questions about" — list 6–10 specific question types
   - "Key terms" — 10–15 technical terms users might search for
   - "Sections" — list the section titles

2. **Quick Topic Routing Guide table** — add a row with English + Chinese keywords → file name

3. **Cross-Report Topics** — if the new report overlaps with existing topics (e.g., APS, E&L, EM),
   add it to the relevant rows with appropriate ★ rating. If it introduces a new cross-report topic,
   add a new row.

### 3. Move Source PDF to Processed

Move the source PDF from the project root (or wherever it was uploaded) into `Raw pdfs/processed/`:

```bash
mv "Raw pdfs/PDA_TRXX_....pdf" "Raw pdfs/processed/"
```

### 4. Verify Before Commit

- [ ] Open `index.html` in browser — confirm new card appears (data comes from reports.json)
- [ ] Confirm search works for new report content
- [ ] Confirm filter buttons include the new source
- [ ] Confirm stats numbers are correct
- [ ] Confirm "Open" button links to the correct file
- [ ] Confirm `knowledge/PDA/<TRXX>-Complete.md` was generated with **English-only** content (no Chinese)
- [ ] Confirm `knowledge/INDEX.md` has been updated with the new report

## File Structure Convention

```
/
├── reports.json            # SINGLE SOURCE OF TRUTH — all report metadata, dashboard data, section maps
├── gmp_engine.py           # Unified CLI: scaffold, md, merge
├── merge_engine.py         # Shared HTML merge library (imported by gmp_engine.py)
├── index.html              # Dashboard — reads from reports.json (no hardcoded data)
├── PROMPT.md               # Master generation instructions
├── template.css            # Shared CSS (do not modify per-report)
├── README.md               # Repo readme
├── Raw pdfs/               # Source PDFs (all sources)
├── knowledge/              # Chatbot knowledge base — English-only original content
│   ├── INDEX.md            # Master routing index — update manually per new document
│   ├── PDA/                # PDA Technical Reports & Points to Consider
│   │   ├── TR26-Complete.md    # One .md per document (auto-generated, English only)
│   │   └── ...
│   └── ISPE/               # ISPE Guidelines (same structure, future)
├── .claude/
│   └── commands/
│       ├── gmp-ask.md      # /gmp-ask skill — unified chatbot Q&A via Claude Code
│       └── gmp-ask.md      # /gmp-ask skill — multi-source GMP Q&A
├── PDA/                    # All PDA documents
│   ├── TR26/               # Each subfolder: source/ + sections/ + output/
│   ├── PtC-14/
│   └── pda-guide-no1/
├── ISPE/                   # All ISPE documents (same structure as PDA/)
│   ├── ISPE-Vol3/
│   ├── ISPE-Vol5/
│   └── ...
```

> **reports.json `folder` field**: Every report entry must include `"folder": "PDA/TR26"` (or `"ISPE/ISPE-Vol5"` etc.).
> `gmp_engine.py` uses this field to resolve all paths. `index.html` uses it to build the Open button link.
> Use `python gmp_engine.py scaffold ISPE-Vol5 --source ISPE` to auto-populate `folder` for new reports.

## Naming Conventions

**PDA documents** — under `PDA/`:
- Folders: `PDA/TR26/`, `PDA/TR01/`, `PDA/PtC-14/`, `PDA/pda-guide-no1/`

**ISPE documents** — under `ISPE/`:
- Folders: `ISPE/ISPE-Vol3/`, `ISPE/ISPE-Vol5/`, `ISPE/ISPE-GAMP5/`, `ISPE/ISPE-HVAC/`, `ISPE/ISPE-TechTransfer/`

**FDA documents** — under `FDA/`:
- Folders: `FDA/FDA-Aseptic/`, `FDA/FDA-Process-Val/`, etc.

**PIC/S documents** — under `PICS/`:
- Folders: `PICS/PICS-Annex1/`, `PICS/PICS-GMP-Part1/`, etc.

**ICH guidelines** — under `ICH/`:
- Folders: `ICH/ICH-Q9/`, `ICH/ICH-Q10/`, `ICH/ICH-Q8/`, etc.

**USP chapters** — under `USP/`:
- Folders: `USP/USP-1072/`, `USP/USP-1231/`, etc.

**ISO standards** — under `ISO/`:
- Folders: `ISO/ISO-14644-1/`, `ISO/ISO-14644-3/`, etc.

**All sources:**
- Section files: `section-XX-short-name.html`
- Split sections: `section-XXa-name.html`, `section-XXb-name.html`
- Merged output: `[FOLDER_ID]-Complete.html`
- Source text: `section-X.0-text.txt` or `[FOLDER_ID]-full-text.txt`
- Knowledge MD: `knowledge/<SOURCE>/[FOLDER_ID]-Complete.md` (English only, auto-generated)

**Source colors** — follow existing palette per source org in `reports.json`:
- PDA=blue, ISPE=green, FDA=red, PIC/S=orange, ISO=purple, USP=gold, ICH=teal

## TopNav Scroll Arrow Rule

All merged documents use scroll arrow buttons (‹ ›) in the top nav. This is required whenever a report has more than ~8 sections, as tabs overflow the viewport. The nav HTML and JS are auto-generated by `merge_engine.py` — no manual setup needed.

---

## Starting a New Session — Finding Unprocessed PDFs

When the user says "continue the educational HTML work" or "process new PDFs":

1. **Always `git pull` first** — new PDFs are pushed to the remote repo, not copied locally.
2. **Unprocessed PDFs** live in `Raw pdfs/` (root level). Already-processed PDFs are moved to `Raw pdfs/processed/`.
3. **Processing order**: PDA → sort by lowest TR/PtC number first. ISPE → follow the ranked importance order (Vol.5 C&Q → GEP → Vol.7 Risk → Vol.3 Sterile → Vol.4 Water → HVAC → ...). FDA/PIC/S → process by regulatory significance.
4. **One PDF at a time** — complete the full workflow for one document before starting the next.

```bash
# Quick check for unprocessed PDFs:
ls "Raw pdfs/" | grep -v processed
```

---

## Quick Start — Adding a New Report

```bash
# 1. Scaffold the folder structure + add skeleton to reports.json
python gmp_engine.py scaffold TRXX
#    ISPE reports:
python gmp_engine.py scaffold ISPE-Vol5 --source ISPE

# 2. Edit reports.json — fill in TRXX entry (title, tags, colors, section_map)

# 3. Extract PDF text into PDA/TRXX/source/
#    Use any external tool (e.g., pdftotext, PyMuPDF, or manual copy-paste)

# 4. Generate knowledge MD — review hierarchy before proceeding
python gmp_engine.py md TRXX
#    Review knowledge/PDA/TRXX-Complete.md — confirm sections/headings match PDF

# 5. Generate bilingual HTML sections (Claude agents, parallel dispatch)
#    Use PROMPT.md template. For sections likely >1000 lines, plan A/B split upfront.

# 6. Merge HTML → PDA/TRXX/output/TRXX-Complete.html
python gmp_engine.py merge TRXX

# 7. Update knowledge/INDEX.md (new block using "PDA/TRXX-Complete.md" header + routing table row + cross-report topics)

# 8. Move source PDF to processed
mv "Raw pdfs/PDA_TRXX_....pdf" "Raw pdfs/processed/"

# 9. Verify in browser, then commit + push
git add PDA/TRXX/ reports.json knowledge/ "Raw pdfs/processed/" && git commit -m "Add TRXX: [title]"
```

---

## After Every git push — Update ROADMAP.md

**Whenever a `git push` is executed (regardless of which documents were added), immediately update `ROADMAP.md` to reflect current status.** Do this AFTER the push completes, before ending the session.

Update these fields in `ROADMAP.md` by reading the actual state from `reports.json`:

1. **Last updated** date — set to today
2. **PDA Current Status table** — recount: how many have `section_map` (complete) vs skeleton (metadata only, no section_map or empty section_map)
3. **ISPE Current Status table** — same recount per report
4. **Overall completion percentage** — complete count / total target (~65-70)
5. **Phase 1 Roadmap table** — tick off any tasks that are now done (move from pending to complete)

To get accurate counts:
```bash
python3 -c "
import json
d = json.load(open('reports.json'))
reports = d['reports']
for k, v in reports.items():
    has_sections = bool(v.get('section_map'))
    source = v.get('source', k)
    print(f'{k}: {\"COMPLETE\" if has_sections else \"skeleton\"} | {source}')
"
```

Do NOT rewrite the entire ROADMAP.md — only update the numbers and dates that have changed. Keep all strategy, gap analysis, and roadmap text intact.

---

## Current Reports Inventory

**Do NOT duplicate the full inventory here.** `reports.json` is the single source of truth.
To check current status: `python3 -c "import json; d=json.load(open('reports.json')); [print(f'{k}: {v.get(\"folder\",k)}') for k,v in d['reports'].items() if v.get('section_map')]"`

---

## Known Pitfalls

### 32K Output Token Limit
Claude agents have a 32,000 output token limit per response. Sections covering 20+ pages of dense
technical content often exceed this. **Plan A/B splits upfront** for any source text file over ~800 lines.
Name them: `section-04a-name.html`, `section-04b-name.html`.
Update section_map in reports.json to pass both files in the same entry:
```json
{ "files": ["section-04a-name.html", "section-04b-name.html"], "id": "sec4", "num": "4", "label_en": "Label", "label_zh": "中文", "pages": "p29-p41" }
```

### Nav Overflow (justify-content: center)
If `.nav-container` has `justify-content: center`, overflow is clipped symmetrically — users cannot
reach leftmost tabs. Always use `justify-content: flex-start` + scroll arrows (handled by merge_engine.py).

### Regenerating All Knowledge MDs
To regenerate all knowledge MDs at once (e.g. after updating `gmp_engine.py` heading detection):
```bash
python gmp_engine.py md --all
```
Note: `pda-guide-no1` has no source text — its MD is generated via HTML-stripping fallback in `merge_engine.generate_markdown()`.

### Knowledge MDs — English Only
Knowledge MDs in `knowledge/` must contain **only original English text** from the PDF. No Chinese translations or commentary. The `gmp_engine.py md` command generates these from `source/*.txt` files. The `merge_engine.generate_markdown()` fallback strips CJK from HTML sections.

### Heading Detection & PDF Noise Rules
Rules are documented in `gmp_engine.py` source code (`source_to_markdown()`, `HEADING_RE`, `PDF_NOISE_PATTERNS`, `UNIT_WORDS`). If a new PDF introduces false headings or noise, update the code and run `python gmp_engine.py md --all`.
