# PDA Technical Report Knowledge

A structured knowledge base of PDA (Parenteral Drug Association) technical reports, combining a human-readable HTML dashboard with a chatbot-ready Markdown knowledge base.

## What's in Here

| Layer | Format | Purpose |
|-------|--------|---------|
| Section HTMLs | `*/sections/*.html` | Source content — bilingual, styled, educational |
| Merged documents | `*/output/*-Complete.html` | Human reading — sticky nav, bilingual layout |
| Knowledge base | `knowledge/*.md` | Chatbot Q&A — clean Markdown, searchable |
| Dashboard | `index.html` | Browse all reports, keyword search |
| Skill | `.claude/commands/pda-ask.md` | `/pda-ask` chatbot via Claude Code |

## Reports Covered (12 total)

| Folder | Report | Sections | MD Generated | Status |
|--------|--------|----------|--------------|--------|
| `pda-guide-no1/` | PDA Guide No.1: Filling Machine Design | 20 | ⚠️ manual* | Complete |
| `TR26/` | PDA TR26: Sterilizing Filtration of Liquids | 11 | ⚠️ manual* | Complete |
| `PtC-14/` | PDA PtC-14: Manufacturing of ATMPs – Facility Design | 6 | ⚠️ manual* | Complete |
| `PtC-15/` | PDA PtC-15: Mobile Manufacturing | 3 | ⚠️ manual* | Complete |
| `TR52/` | PDA TR52: Good Distribution Practices (GDPs) | 6 | ✅ auto | Complete |
| `TR73/` | PDA TR73: Prefilled Syringe (Sections 12-18, p74-p102) | 4 | ✅ auto | Complete |
| `TR90/` | PDA TR90: CCS Development in Pharmaceutical Manufacturing | 15 | ✅ auto | Complete |
| `PtC-12/` | PDA PtC-12: Restricted Access Barrier Systems | 10 | ✅ auto | Complete |
| `TR22/` | PDA TR22: Process Simulation for Aseptically Filled Products | 9 | ✅ auto | Complete |
| `TR66/` | PDA TR66: Single-Use Systems in Pharma Manufacturing | 9 | ✅ auto | Complete |
| `TR73-2/` | PDA TR73-2: MDR Annex I for Staked Needle Systems | 5 | ✅ auto | Complete |
| `TR60/` | PDA TR60: Process Validation — A Lifecycle Approach | 8 | ✅ auto | Complete |

\* These 4 reports use a custom `merge.py` that predates `merge_engine.py` and do not auto-generate MD.
Their `knowledge/` MD files were generated once via a manual script.

## Using the Chatbot Skill

In Claude Code, from the repo directory:

```
/pda-ask What are the filter integrity test requirements in TR26?
/pda-ask 無菌模擬充填的判定標準是什麼？
/pda-ask How does RABS APS differ from standard media fill?
```

The skill reads `knowledge/INDEX.md` to route your question to the right report(s), then greps the relevant Markdown for precise content. Uses your Claude Max plan — no API key needed.

## Adding a New Report

```bash
# 1. Scaffold folder
python3 new_report.py

# 2. Extract PDF text
python3 extract_pdf.py "Raw pdfs/TRXX.pdf" TRXX/source/

# 3. Generate section HTMLs using PROMPT.md template

# 4. Merge (auto-generates HTML + knowledge/TRXX-Complete.md)
python3 TRXX/merge.py

# 5. Update index.html — document card, sourceColors, tagCls
# 6. Update knowledge/INDEX.md — new report block, routing table, cross-report topics
# 7. Commit and push
git add TRXX/ index.html knowledge/ && git commit -m "Add TRXX: [title]"
```

See `CLAUDE.md` for detailed rules, naming conventions, and known pitfalls.
