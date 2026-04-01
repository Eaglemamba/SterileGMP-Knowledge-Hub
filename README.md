# SterileGMP Knowledge Hub

A multi-source GMP knowledge base for sterile pharmaceutical manufacturing — combining human-readable HTML educational guides with a chatbot-ready Markdown knowledge base and a Claude Code skill for conversational access.

Covers **PDA Technical Reports**, **ISPE Guidelines**, **FDA Guidance**, **PIC/S Annex 1**, **ISO Standards**, and **ECA Guides** — all focused on sterile/injectable pharmaceutical manufacturing.

## What's in Here

| Layer | Format | Purpose |
|-------|--------|---------|
| Section HTMLs | `PDA/*/sections/*.html`, `ISPE/*/sections/*.html` | Source content — bilingual, styled, educational |
| Merged documents | `PDA/*/output/*-Complete.html` | Human reading — sticky nav, bilingual layout |
| Knowledge base | `knowledge/PDA/*.md`, `knowledge/ISPE/*.md` | Chatbot Q&A — clean Markdown, searchable |
| Dashboard | `index.html` | Browse all documents, keyword search, filter by source |
| Skill | `.claude/commands/gmp-ask.md` | `/gmp-ask` chatbot via Claude Code |

## Documents Covered

### PDA Technical Reports & Points to Consider (34 complete)

| Document | Topic |
|----------|-------|
| PDA Guide No.1 | Aseptic Filling Machine Design and Operation |
| PDA TR13 | Fundamentals of Environmental Monitoring Program (2022) |
| PDA TR13-2 | EM for Low Bioburden Products — Annex 1 (2020) |
| PDA TR22 | Process Simulation for Aseptically Filled Products |
| PDA TR26 | Sterilizing Filtration of Liquids |
| PDA TR39 | Temperature-Controlled Medicinal Products |
| PDA TR41 | Virus Retentive Filtration (2022) |
| PDA TR43 | Identification and Classification of Nonconformities in Glass Containers (2023) |
| PDA TR46 | Last Mile GDP for Pharma Products to End Users (2024) |
| PDA TR52 | Good Distribution Practices (GDPs) |
| PDA TR54-6 | Formalized Risk Assessment for Excipients (2019) |
| PDA TR56 | Phase-Appropriate Quality Systems for Biological Drug Substance (2026) |
| PDA TR60 | Process Validation — A Lifecycle Approach |
| PDA TR62 | Manual Aseptic Processes (2013) |
| PDA TR65 | Technology Transfer (2014) |
| PDA TR66 | Single-Use Systems in Pharmaceutical Manufacturing |
| PDA TR68 | Risk-Based Approach for Prevention and Management of Drug Shortages (2024) |
| PDA TR70 | Cleaning and Disinfection for Aseptic Facilities |
| PDA TR73 | Prefilled Syringe (Sections 12–18) |
| PDA TR73-2 | MDR Annex I for Staked Needle Systems |
| PDA TR84 | Data Integrity in Manufacturing and Packaging (2020) |
| PDA TR85 | Enhanced Test Methods for Visible Particle Detection |
| PDA TR87 | Current Best Practices for Glass Vial Handling and Processing |
| PDA TR88 | Microbial Data Deviation Investigations |
| PDA TR90 | Contamination Control Strategy (CCS) |
| PDA TR91 | Post-Approval Change Management |
| PDA PtC-1 | Points to Consider for Aseptic Processing Part 1 |
| PDA PtC-9 | Lessons Learned from COVID-19 Pandemic |
| PDA PtC-12 | Restricted Access Barrier Systems (RABS) |
| PDA PtC-13 | Material Qualification and Management |
| PDA PtC-14 | Manufacturing of ATMPs — Facility Design |
| PDA PtC-15 | Mobile Manufacturing |
| PDA PtC-Isolators | Aseptic Processing in Isolators |

### ISPE Guidelines (6 complete, more in progress)

| Document | Status | Topic |
|----------|--------|-------|
| ISPE Baseline Vol.3 | ✅ Complete | Sterile Manufacturing Facilities |
| ISPE Baseline Vol.4 | ✅ Complete | Water & Steam Systems |
| ISPE Baseline Vol.5 C&Q (2nd Ed.) | ✅ Complete | Commissioning & Qualification |
| ISPE Baseline Vol.7 | ✅ Complete | Risk-Based Manufacture of Pharmaceutical Products |
| ISPE GPG HVAC | ✅ Complete | Heating, Ventilation and Air Conditioning |
| ISPE GPG Single-Use Technology | ✅ Complete | Single-Use Systems |
| ISPE Baseline Vol.6 | 📋 PDF ready | Biopharmaceutical Manufacturing Facilities |
| ISPE GAMP 5 (2nd Ed.) | 📋 PDF ready | Computerized Systems Validation |
| ISPE GPG Sampling | 📋 PDF ready | Pharmaceutical Water, Steam & Process Gases |
| ISPE GPG CTC | 📋 PDF ready | Mapping and Monitoring |
| ISPE GPG Technology Transfer | 📋 PDF ready | 3rd Edition |
| ISPE Good Engineering Practice | 📋 PDF ready | GEP Framework |
| ISPE Process Gases | 📋 PDF ready | Process Gas Systems |
| ISPE IT Infrastructure | 📋 PDF ready | Control and Compliance |
| ISPE-PDA Quality Culture | 📋 PDF ready | Guide to Improving Quality Culture |

### Regulatory & Standards (planned)

| Document | Body | Topic |
|----------|------|-------|
| FDA Guidance — Aseptic Processing (2004) | FDA | Sterile drug products by aseptic processing |
| PIC/S Annex 1 (2022) | PIC/S | Manufacture of sterile medicinal products |
| ISO 13408-1 (2008) | ISO | Aseptic processing of health-care products |
| ISO 13926-1/2/3 (2018) | ISO | Aseptic processing standards |
| ECA CCS Guide (2023) | ECA | Contamination Control Strategy development |
| USP \<382\> | USP | Elastomeric component functional suitability |

## Using the Chatbot Skill

In Claude Code, from the repo directory:

```
/gmp-ask What does ISPE Vol.5 say about IQ/OQ/PQ scope?
/gmp-ask What are the filter integrity test requirements in TR26?
/gmp-ask 無菌模擬充填的判定標準是什麼？
/gmp-ask How does Annex 1 (2022) change the requirements for RABS vs isolators?
/gmp-ask Compare PDA TR90 and ISPE Annex 1 on contamination control strategy
```

The skill reads `knowledge/INDEX.md` to route your question to the right document(s), then greps the relevant Markdown for precise content. Uses your Claude Max plan — no API key needed.

> Use `/gmp-ask` for all sources — PDA, ISPE, FDA, and more.

## Adding a New Document

```bash
# 1. Scaffold folder (works for any source — PDA, ISPE, FDA, etc.)
python gmp_engine.py scaffold FOLDER_ID              # PDA (default)
python gmp_engine.py scaffold ISPE-Vol5 --source ISPE  # ISPE

# 2. Edit reports.json — fill in entry (title, tags, source, colors, section_map)

# 3. Extract PDF text into PDA/FOLDER_ID/source/  (or ISPE/FOLDER_ID/source/)

# 4. Generate knowledge MD
python gmp_engine.py md FOLDER_ID

# 5. Generate bilingual HTML sections using PROMPT.md template

# 6. Merge sections
python gmp_engine.py merge FOLDER_ID

# 7. Update knowledge/INDEX.md (new block + routing table + cross-topic rows)

# 8. Move source PDF to Raw pdfs/processed/

# 9. Verify in browser, then commit + push
git add PDA/FOLDER_ID/ reports.json knowledge/ && git commit -m "Add [SOURCE] [ID]: [title]"
```

See `CLAUDE.md` for detailed rules, naming conventions, and known pitfalls.

## Source Color Coding

Each guideline body has a distinct color in the dashboard:

| Source | Color |
|--------|-------|
| PDA | Blue |
| ISPE | Green |
| FDA | Red |
| PIC/S | Orange |
| ISO | Purple |
| ECA | Teal |
| USP | Gold |
