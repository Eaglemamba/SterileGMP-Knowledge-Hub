# Naming Conventions & File Structure

## File Structure

```
/
├── reports.json            # SINGLE SOURCE OF TRUTH — all report metadata, section maps
├── gmp_engine.py           # Unified CLI: scaffold, md, merge
├── merge_engine.py         # Shared HTML merge library
├── index.html              # Dashboard — reads from reports.json (no hardcoded data)
├── learning-path.html      # Department curriculum tracker with quiz badges
├── mindmap.html            # Knowledge mind map (D3.js + Markmap)
├── quiz.html               # Quiz score tracker
├── template.css            # Shared CSS (do not modify per-report)
├── docs/
│   ├── PROMPT.md           # Master generation instructions
│   ├── ROADMAP.md          # Coverage status and expansion roadmap
│   └── SKILLS.md           # Planned Claude Code skills list
├── Raw pdfs/               # Source PDFs (unprocessed in root, processed in processed/)
├── knowledge/              # Chatbot knowledge base — English-only original content
│   ├── INDEX.md            # Master routing index
│   ├── INDEX-router.md     # Compact topic router (★★★/★★ ratings)
│   ├── exams/              # Pre-written question banks (JSON) for /quiz
│   ├── topics/             # Cross-document topic synthesis MDs
│   ├── PDA/                # PDA Technical Reports
│   ├── ISPE/               # ISPE Guidelines
│   ├── FDA/                # FDA Guidance
│   └── ...
├── .claude/
│   └── rules/
│       ├── workflow-checklist.md   # Post-completion + git push checklists
│       ├── naming-conventions.md   # This file
│       └── pitfalls.md             # Known pitfalls catalog
├── PDA/                    # PDA documents (each: source/ + sections/ + output/)
├── ISPE/                   # ISPE documents (same structure)
├── FDA/                    # FDA documents
├── PICS/                   # PIC/S documents
├── ICH/                    # ICH guidelines
├── USP/                    # USP chapters
├── ISO/                    # ISO standards
└── PHEUR/                  # Ph.Eur. monographs
```

> **`reports.json` `folder` field**: Must include `"folder": "PDA/TR26"` etc.
> `gmp_engine.py` uses this to resolve all paths. Use `python gmp_engine.py scaffold ISPE-Vol5 --source ISPE` to auto-populate.

## Source Folder Names

| Source | Folder prefix | Example |
|--------|--------------|---------|
| PDA | `PDA/` | `PDA/TR26/`, `PDA/PtC-14/`, `PDA/pda-guide-no1/` |
| ISPE | `ISPE/` | `ISPE/ISPE-Vol3/`, `ISPE/ISPE-Vol5/`, `ISPE/ISPE-GAMP5/` |
| FDA | `FDA/` | `FDA/FDA-Aseptic/`, `FDA/FDA-Process-Val/` |
| PIC/S | `PICS/` | `PICS/PICS-Annex1/`, `PICS/PICS-GMP-Part1/` |
| ICH | `ICH/` | `ICH/ICH-Q9/`, `ICH/ICH-Q10/` |
| USP | `USP/` | `USP/USP-1072/`, `USP/USP-1231/` |
| ISO | `ISO/` | `ISO/ISO-14644-1/`, `ISO/ISO-14644-3/` |
| Ph.Eur. | `PHEUR/` | `PHEUR/PhEur-261/`, `PHEUR/PhEur-321/` |

## File Naming (within each report folder)

| Type | Pattern | Example |
|------|---------|---------|
| Section HTML | `section-XX-short-name.html` | `section-04-filtration.html` |
| Split section | `section-XXa-name.html` | `section-04a-filtration.html` |
| Merged output | `[FOLDER_ID]-Complete.html` | `TR26-Complete.html` |
| Source text | `section-X.0-text.txt` or `[FOLDER_ID]-full-text.txt` | |
| Knowledge MD | `knowledge/<SOURCE>/[FOLDER_ID]-Complete.md` | `knowledge/PDA/TR26-Complete.md` |

## Source Colors (reports.json `source_color`)

| Source | bg | text/bar |
|--------|-----|---------|
| PDA | `#1e3a5f` | `#3498db` |
| ISPE | `#1a3a2a` | `#27ae60` |
| FDA | `#3a1a1a` | `#e74c3c` |
| PIC/S | `#3a2a1a` | `#e67e22` |
| ISO | `#2a1a3a` | `#9b59b6` |
| USP | `#3a3a1a` | `#f39c12` |
| ICH | `#1a3a3a` | `#1abc9c` |
| Ph.Eur. | `#3a2a1a` | `#d4a017` |
| ECA | `#1a3a3a` | `#1abc9c` |
