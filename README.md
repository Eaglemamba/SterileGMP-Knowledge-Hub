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

| Report | Topic |
|--------|-------|
| PDA Guide No.1 | Filling Machine Design and Operation |
| PDA TR22 | Process Simulation for Aseptically Filled Products |
| PDA TR26 | Sterilizing Filtration of Liquids |
| PDA TR52 | Good Distribution Practices (GDPs) |
| PDA TR60 | Process Validation — A Lifecycle Approach |
| PDA TR66 | Single-Use Systems in Pharmaceutical Manufacturing |
| PDA TR73 | Prefilled Syringe (Sections 12–18) |
| PDA TR73-2 | MDR Annex I for Staked Needle Systems |
| PDA TR90 | Contamination Control Strategy (CCS) |
| PDA PtC-12 | Restricted Access Barrier Systems (RABS) |
| PDA PtC-14 | Manufacturing of ATMPs — Facility Design |
| PDA PtC-15 | Mobile Manufacturing |

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
