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
├── pda_engine.py           # Unified CLI: scaffold, md, merge
├── merge_engine.py         # Shared HTML merge library (imported by pda_engine.py)
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
│       └── pda-ask.md      # /pda-ask legacy alias (PDA-only queries)
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
> `pda_engine.py` uses this field to resolve all paths. `index.html` uses it to build the Open button link.
> Use `python pda_engine.py scaffold ISPE-Vol5 --source ISPE` to auto-populate `folder` for new reports.

## Naming Conventions

**PDA documents** — under `PDA/`:
- Folders: `PDA/TR26/`, `PDA/TR01/`, `PDA/PtC-14/`, `PDA/pda-guide-no1/`

**ISPE documents** — under `ISPE/`:
- Folders: `ISPE/ISPE-Vol3/`, `ISPE/ISPE-Vol5/`, `ISPE/ISPE-GAMP5/`, `ISPE/ISPE-HVAC/`, `ISPE/ISPE-TechTransfer/`

**FDA / Regulatory documents** — under their own top-level folder (future):
- Folders: `FDA/FDA-Aseptic/`, `PICS/PICS-Annex1/`, etc.

**All sources:**
- Section files: `section-XX-short-name.html`
- Split sections: `section-XXa-name.html`, `section-XXb-name.html`
- Merged output: `[FOLDER_ID]-Complete.html`
- Source text: `section-X.0-text.txt` or `[FOLDER_ID]-full-text.txt`
- Knowledge MD: `knowledge/<SOURCE>/[FOLDER_ID]-Complete.md` (English only, auto-generated)

**Source colors in reports.json** — use consistent palette per source body:
- PDA: blue family (`#1e3a5f` / `#3498db`)
- ISPE: green family (`#1a3a2a` / `#27ae60`)
- FDA: red family (`#3a1a1a` / `#e74c3c`)
- PIC/S: orange family (`#3a2a1a` / `#e67e22`)
- ISO: purple family (`#2a1a3a` / `#9b59b6`)
- ECA: teal family (`#1a3a3a` / `#1abc9c`)
- USP: gold family (`#3a3a1a` / `#f39c12`)

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
python pda_engine.py scaffold TRXX
#    ISPE reports:
python pda_engine.py scaffold ISPE-Vol5 --source ISPE

# 2. Edit reports.json — fill in TRXX entry (title, tags, colors, section_map)

# 3. Extract PDF text into PDA/TRXX/source/
#    Use any external tool (e.g., pdftotext, PyMuPDF, or manual copy-paste)

# 4. Generate knowledge MD — review hierarchy before proceeding
python pda_engine.py md TRXX
#    Review knowledge/PDA/TRXX-Complete.md — confirm sections/headings match PDF

# 5. Generate bilingual HTML sections (Claude agents, parallel dispatch)
#    Use PROMPT.md template. For sections likely >1000 lines, plan A/B split upfront.

# 6. Merge HTML → PDA/TRXX/output/TRXX-Complete.html
python pda_engine.py merge TRXX

# 7. Update knowledge/INDEX.md (new block using "PDA/TRXX-Complete.md" header + routing table row + cross-report topics)

# 8. Move source PDF to processed
mv "Raw pdfs/PDA_TRXX_....pdf" "Raw pdfs/processed/"

# 9. Verify in browser, then commit + push
git add PDA/TRXX/ reports.json knowledge/ "Raw pdfs/processed/" && git commit -m "Add TRXX: [title]"
```

---

## Current Reports Inventory

Report metadata is in `reports.json`. Current reports:

| Folder | Report | Sections | Status |
|--------|--------|----------|--------|
| `PDA/pda-guide-no1/` | PDA Guide No.1: Aseptic Filling, Engineering & Operation (2025) | 20 | Complete |
| `PDA/TR22/` | PDA TR22: Process Simulation for Aseptically Filled Products | 9 | Complete |
| `PDA/TR26/` | PDA TR26: Sterilizing Filtration of Liquids | 11 | Complete |
| `PDA/TR52/` | PDA TR52: Good Distribution Practices (GDPs) | 6 | Complete |
| `PDA/TR60/` | PDA TR60: Process Validation — A Lifecycle Approach | 8 | Complete |
| `PDA/TR66/` | PDA TR66: Single-Use Systems in Pharma Manufacturing | 9 | Complete |
| `PDA/TR73/` | PDA TR73: Prefilled Syringe (Sections 12-18, p74-p102) | 4 | Complete |
| `PDA/TR73-2/` | PDA TR73-2: MDR Annex I for Staked Needle Systems | 5 | Complete |
| `PDA/TR85/` | PDA TR85: Enhanced Test Methods for Visible Particle Detection | 6 | Complete |
| `PDA/TR87/` | PDA TR87: Current Best Practices for Glass Vial Handling and Processing | 7 | Complete |
| `PDA/TR88/` | PDA TR88: Microbial Data Deviation Investigations | 6 | Complete |
| `PDA/TR90/` | PDA TR90: CCS Development in Pharmaceutical Manufacturing | 15 | Complete |
| `PDA/TR91/` | PDA TR91: Post-Approval Change Management | 7 | Complete |
| `PDA/PtC-9/` | PDA PtC-9: Lessons Learned from COVID-19 Pandemic | 6 | Complete |
| `PDA/PtC-12/` | PDA PtC-12: Restricted Access Barrier Systems | 10 | Complete |
| `PDA/PtC-14/` | PDA PtC-14: Manufacturing of ATMPs – Facility Design | 6 | Complete |
| `PDA/PtC-15/` | PDA PtC-15: Mobile Manufacturing | 3 | Complete |
| `PDA/PtC-Isolators/` | PDA PtC-Isolators: Aseptic Processing in Isolators | 7 | Complete |
| `PDA/TR39/` | PDA TR39: Temperature-Controlled Medicinal Products | 4 | Complete |
| `PDA/TR70/` | PDA TR70: Cleaning and Disinfection for Aseptic Facilities | 9 | Complete |
| `PDA/TR13/` | PDA TR13: Fundamentals of an Environmental Monitoring Program (Revised 2022) | 9 | Complete |
| `PDA/TR13-2/` | PDA TR13-2: EM for Low Bioburden Products — Annex 1 (2020) | 3 | Complete |
| `PDA/TR46/` | PDA TR46: Last Mile GDP for Pharma Products to End Users (Revised 2024) | 6 | Complete |
| `PDA/TR54-6/` | PDA TR54-6: Formalized Risk Assessment for Excipients (2019) | 6 | Complete |
| `PDA/TR62/` | PDA TR62: Recommended Practices for Manual Aseptic Processes (2013) | 4 | Complete |
| `PDA/TR43/` | PDA TR43: Identification and Classification of Nonconformities in Glass Containers (Revised 2023) | 6 | Complete |
| `PDA/TR68/` | PDA TR68: Risk-Based Approach for Prevention and Management of Drug Shortages (Revised 2024) | 6 | Complete |
| **ISPE** | | | |
| `ISPE/ISPE-Vol3/` | ISPE Baseline Vol.3: Sterile Manufacturing Facilities | — | Planned |
| `ISPE/ISPE-Vol4/` | ISPE Baseline Vol.4: Water & Steam Systems | — | Planned |
| `ISPE/ISPE-Vol5/` | ISPE Baseline Vol.5: Commissioning & Qualification (2nd Ed.) | 11 | Complete |
| `ISPE/ISPE-Vol6/` | ISPE Baseline Vol.6: Biopharmaceutical Manufacturing Facilities | — | Planned |
| `ISPE/ISPE-Vol7/` | ISPE Baseline Vol.7: Risk-Based Manufacture of Pharmaceutical Products | — | Planned |
| `ISPE/ISPE-GAMP5/` | ISPE GAMP 5 (2nd Ed.): Computerized Systems Validation | — | Planned |
| `ISPE/ISPE-HVAC/` | ISPE GPG HVAC: Heating, Ventilation and Air Conditioning | — | Planned |
| `ISPE/ISPE-SUT/` | ISPE GPG Single-Use Technology: Single-Use Systems | — | Planned |
| `ISPE/ISPE-Sampling/` | ISPE GPG Sampling: Pharmaceutical Water, Steam & Process Gases | — | Planned |
| `ISPE/ISPE-CTC/` | ISPE GPG CTC: Mapping and Monitoring | — | Planned |
| `ISPE/ISPE-TechTransfer/` | ISPE GPG Technology Transfer (3rd Ed.) | — | Planned |
| `ISPE/ISPE-GEP/` | ISPE Good Engineering Practice: GEP Framework | — | Planned |
| `ISPE/ISPE-ProcessGas/` | ISPE Process Gases: Process Gas Systems | — | Planned |
| `ISPE/ISPE-IT/` | ISPE IT Infrastructure: Control and Compliance | — | Planned |
| `ISPE/ISPE-QualityCulture/` | ISPE-PDA Quality Culture: Guide to Improving Quality Culture | — | Planned |

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
To regenerate all knowledge MDs at once (e.g. after updating `pda_engine.py` heading detection):
```bash
python pda_engine.py md --all
```
Note: `pda-guide-no1` has no source text — its MD is generated via HTML-stripping fallback in `merge_engine.generate_markdown()`.

### Knowledge MDs — English Only
Knowledge MDs in `knowledge/` must contain **only original English text** from the PDF. No Chinese translations or commentary. The `pda_engine.py md` command generates these from `source/*.txt` files. The `merge_engine.generate_markdown()` fallback strips CJK from HTML sections.

### Heading Detection Rules (`pda_engine.py`)
When generating MDs from source text, `source_to_markdown()` auto-detects section headings. A line like `3.1 Pore Size Rating` becomes `### 3.1 Pore Size Rating`. The rules reject false positives:

| Pattern | Example | Action |
|---------|---------|--------|
| Must have a dot in number | `1.0`, `3.1.2` = valid; bare `1`, `10` = rejected |
| First number > 0 | `0.2 µm`, `0.45 μm` = rejected |
| Title starts uppercase | `3.1 pore size` = rejected |
| Not a TOC entry | Lines with `...` or trailing page number = rejected |
| Not a unit/value | `10 L/min`, `35 L`, `15 PSIG` = rejected |
| Not a sentence | `Table 4.2-2 provides examples...` = rejected |
| Not a cross-reference | `5.4.1 for additional information).` = rejected |
| Length < 150 chars | Paragraph-length lines = rejected |

If a new PDF introduces false headings, update `UNIT_WORDS` or the rejection rules in `pda_engine.py`'s `source_to_markdown()` function, then run `python pda_engine.py md --all` to regenerate.

### PDF Noise Stripping Rules (`pda_engine.py`)
`PDF_NOISE_PATTERNS` strips these artifacts from source text before generating MDs:

| Pattern | Example |
|---------|---------|
| Standalone page numbers | `1`, `42`, `155` (1-3 digit number alone on a line) |
| License lines | `Licensed to Kuo, Li-Hung/...: Copying and Distribution Prohibited.` |
| Copyright lines | `© 2025 Parenteral Drug Association, Inc.` |
| Page headers | `Technical Report No. 26`, `Points to Consider No. 12` |
| Numbered headers | `42 Technical Report No. 60` (page number + report name) |

If a new PDF has different header/footer patterns, add them to `PDF_NOISE_PATTERNS` in `pda_engine.py`.

### Knowledge MD Table Formatting (future improvement)
Current `pda_engine.py md` generates MDs from raw source text, so PDF tables lose their structure and appear as fragmented lines. For future new reports, use Claude to generate the structured MD instead of pure programmatic extraction:

```bash
# Step 3 (MD-first): Instead of just running pda_engine.py md,
# use Claude to read the source text + original PDF and produce
# a structured MD with proper Markdown tables.
#
# This costs ~30-60K tokens per section but produces:
# - Proper | pipe | table | formatting
# - Verified heading hierarchy
# - Clean paragraph flow (no mid-paragraph page breaks)
```

Existing 12 reports have unformatted tables in their knowledge MDs. These can be upgraded incrementally by re-generating individual report MDs via Claude when time permits.
