# SterileGMP Knowledge Hub

A multi-source GMP knowledge base for sterile pharmaceutical manufacturing — combining human-readable HTML educational guides with a chatbot-ready Markdown knowledge base and a Claude Code skill for conversational access.

Covers **PDA Technical Reports**, **ISPE Guidelines**, **FDA Guidance**, **PIC/S Annexes**, **ICH Guidelines**, **USP Chapters**, **ISO Standards**, and **European Pharmacopoeia (Ph.Eur.)** — all focused on sterile/injectable pharmaceutical manufacturing. **183 documents** across 8 source organizations.

## What's in Here

| Layer | Format | Purpose |
|-------|--------|---------|
| Section HTMLs | `PDA/*/sections/*.html`, `ISPE/*/sections/*.html` | Source content — bilingual, styled, educational |
| Merged documents | `PDA/*/output/*-Complete.html` | Human reading — sticky nav, bilingual layout |
| Knowledge base | `knowledge/PDA/*.md`, `knowledge/ISPE/*.md`, `knowledge/FDA/*.md`, `knowledge/ICH/*.md`, `knowledge/PICS/*.md` | Chatbot Q&A — clean Markdown, searchable |
| Dashboard | `index.html` | Browse all documents, keyword search, filter by source |
| Skill | `.claude/commands/gmp-ask.md` | `/gmp-ask` chatbot via Claude Code |

## Documents Covered

### PDA Technical Reports & Points to Consider (43 complete)

| Document | Topic |
|----------|-------|
| PDA Guide No.1 | Aseptic Filling Machine Design and Operation |
| PDA TR1 | Validation of Moist Heat Sterilization Processes: Cycle Design, Development, Qualification and Ongoing Control (Revised 2007) |
| PDA TR13 | Fundamentals of Environmental Monitoring Program (2022) |
| PDA TR13-2 | EM for Low Bioburden Products — Annex 1 (2020) |
| PDA TR22 | Process Simulation for Aseptically Filled Products |
| PDA TR26 | Sterilizing Filtration of Liquids |
| PDA TR27 | Pharmaceutical Package Integrity |
| PDA TR29 | Points to Consider for Cleaning Validation |
| PDA TR39 | Temperature-Controlled Medicinal Products |
| PDA TR41 | Virus Retentive Filtration (2022) |
| PDA TR43 | Identification and Classification of Nonconformities in Glass Containers (2023) |
| PDA TR46 | Last Mile GDP for Pharma Products to End Users (2024) |
| PDA TR49 | Points to Consider for Biotechnology Cleaning Validation (2010) |
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
| PDA TR74 | Reprocessing and Reworking of Biologicals (Revised 2026) |
| PDA TR84 | Data Integrity in Manufacturing and Packaging (2020) |
| PDA TR85 | Enhanced Test Methods for Visible Particle Detection |
| PDA TR86 | Industry Challenges and Current Technologies for Pharmaceutical Package Integrity Testing (2021) |
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
| PDA PtC-11 | Plasmids and Vectors Used in ATMP Production (2025) |
| PDA PtC-Remote | Remote and Hybrid GMP/GDP Inspections (2021) |
| PDA PtC-Isolators | Aseptic Processing in Isolators |

### ISPE Guidelines (14 complete, 1 pending)

| Document | Status | Topic |
|----------|--------|-------|
| ISPE Baseline Vol.3 | ✅ Complete | Sterile Manufacturing Facilities |
| ISPE Baseline Vol.4 | ✅ Complete | Water & Steam Systems |
| ISPE Baseline Vol.5 C&Q (2nd Ed.) | ✅ Complete | Commissioning & Qualification |
| ISPE Baseline Vol.6 | ✅ Complete | Biopharmaceutical Manufacturing Facilities |
| ISPE Baseline Vol.7 | ✅ Complete | Risk-Based Manufacture of Pharmaceutical Products |
| ISPE GPG HVAC | ✅ Complete | Heating, Ventilation and Air Conditioning |
| ISPE GPG Single-Use Technology | ✅ Complete | Single-Use Systems |
| ISPE GAMP 5 (2nd Ed.) | ✅ Complete | Computerized Systems Validation |
| ISPE GPG Sampling | ✅ Complete | Pharmaceutical Water, Steam & Process Gases |
| ISPE GPG CTC | ✅ Complete | Mapping and Monitoring |
| ISPE GPG Technology Transfer | ✅ Complete | Technology Transfer — 3rd Edition |
| ISPE Process Gases | ✅ Complete | Process Gas Systems |
| ISPE IT Infrastructure | ✅ Complete | Control and Compliance |
| ISPE-PDA Quality Culture | ✅ Complete | Guide to Improving Quality Culture |
| ISPE Good Engineering Practice | ⏳ Pending | GEP Framework (scanned PDF — OCR required) |

### Regulatory & Standards

| Document | Body | Status | Topic |
|----------|------|--------|-------|
| Aseptic Processing Guidance (2004) | FDA | ✅ Complete | Sterile drug products by aseptic processing |
| Process Validation Guidance (2011) | FDA | ✅ Complete | Lifecycle approach to process validation |
| Process Inspection CPGM 7356.002A | FDA | ✅ Complete | Drug process inspection procedures |
| CGMP Requirements for Combination Products (Jan 2017) | FDA | ✅ Complete | GMP for combination product manufacturers |
| Human Factors Studies for Combination Products (Feb 2016) | FDA | ✅ Complete | Human factors in combination product design |
| Annex 1 (2022) | PIC/S | ✅ Complete | Manufacture of sterile medicinal products |
| Annex 2 — Biological & ATMPs | PIC/S | ✅ Complete | GMP for biological medicinal products and ATMPs |
| Annex 20 — Quality Risk Management | PIC/S | ✅ Complete | QRM methodology and implementation |
| Q8(R2) Pharmaceutical Development | ICH | ✅ Complete | Design space and quality by design |
| Q9(R1) Quality Risk Management | ICH | ✅ Complete | Risk management methodology framework |
| Q10 Pharmaceutical Quality System | ICH | ✅ Complete | Pharmaceutical quality system framework |
| 14644-1/5/7 Cleanroom Classification | ISO | ✅ Complete | Cleanroom classification, operations, and separative devices |

| Document | Status | Topic |
|----------|--------|-------|
| Aseptic Processing Guidance (2004) | ✅ Complete | Sterile drug products by aseptic processing |
| Process Validation Guidance (2011) | ✅ Complete | Lifecycle approach to process validation |
| Process Inspection CPGM 7356.002A | ✅ Complete | Drug process inspection procedures |
| Combination Products CGMP (21 CFR 4) | ✅ Complete | CGMP framework for combination products |
| Combination Products Human Factors | ✅ Complete | HF engineering and usability for combo products |

**PIC/S Annexes (4 complete)**

| Document | Status | Topic |
|----------|--------|-------|
| Annex 1 (2022) | ✅ Complete | Manufacture of sterile medicinal products |
| Annex 2 | ✅ Complete | Manufacture of biological medicinal substances and products |
| Annex 15 (2023) | ✅ Complete | Qualification and validation |
| Annex 20 | ✅ Complete | Quality risk management |

**ICH Guidelines (6 complete)**

| Document | Status | Topic |
|----------|--------|-------|
| Q8(R2) Pharmaceutical Development | ✅ Complete | Design space and quality by design |
| Q9(R1) Quality Risk Management | ✅ Complete | Risk management methodology framework |
| Q10 Pharmaceutical Quality System | ✅ Complete | Pharmaceutical quality system framework |
| Q12 Technical and Regulatory Considerations for Pharmaceutical Product Lifecycle Management | ✅ Complete | Established conditions, PACMP, PLCM |
| Q13 Continuous Manufacturing for Drug Substances and Drug Products | ✅ Complete | CM State of Control, batch definition, CPV |
| Q14 Analytical Procedure Development | ✅ Complete | ATP, MODR, ACS, multivariate procedures, RTRT |

**ISO Standards (17 complete)**

| Document | Topic |
|----------|-------|
| ISO 10993-1 | Biological evaluation of medical devices |
| ISO 11040 | Prefilled syringes |
| ISO 11608-1 | Needle injection systems for medical use |
| ISO 13408 | Aseptic processing of health care products |
| ISO 13485 | Medical devices QMS requirements |
| ISO 13926-1/2/3 | Pen injector components (glass cylinders, stoppers, seals) |
| ISO 14644 | Cleanrooms and associated controlled environments |
| ISO 14971 | Risk management for medical devices |
| ISO 15223-1/2 | Medical device symbols for labels |
| ISO 15378 | Primary packaging materials for medicinal products |
| ISO 15394 | Packaging barcodes and bar codes for shipping |
| ISO 2859-1 | AQL sampling procedures |
| ISO 9000 / 9001 | QMS fundamentals and requirements |
| ISO TR 24971 | Application guidance for ISO 14971 risk management |

**European Pharmacopoeia (Ph.Eur.) (7 complete)**

| Chapter | Topic |
|---------|-------|
| 2.6.1 | Sterility |
| 2.6.14 | Bacterial endotoxins |
| 2.9.19 | Particulate contamination — sub-visible particles |
| 2.9.20 | Particulate contamination — visible particles |
| 3.2.1 | Glass containers for pharmaceutical use |
| 3.3.8 | Sterile single-use assemblies for intravenous infusion |
| 5.1.1 | Methods of preparation of sterile products |

### USP General Chapters (76 complete)

| Chapter | Topic | Status |
|---------|-------|--------|
| 〈1〉 | Injections and Implanted Drug Products | ✅ Complete |
| 〈55〉 | Biological Indicators—Resistance Performance Tests | ✅ Complete |
| 〈71〉 | Sterility Tests | ✅ Complete |
| 〈85〉 | Bacterial Endotoxins Test | ✅ Complete |
| 〈151〉 | Pyrogen Test | ✅ Complete |
| 〈161〉 | Transfusion and Infusion Assemblies | ✅ Complete |
| 〈381〉 | Elastomeric Components in Injectable Packaging | ✅ Complete |
| 〈660〉 | Containers—Glass | ✅ Complete |
| 〈661〉 | Plastic Packaging Systems | ✅ Complete |
| 〈670〉 | Auxiliary Packaging Components | ✅ Complete |
| 〈671〉 | Containers—Performance Testing | ✅ Complete |
| 〈729〉 | Globule Size Distribution in Lipid Injectable Emulsions | ✅ Complete |
| 〈755〉 | Minimum Fill | ✅ Complete |
| 〈771〉 | Ophthalmic Products—Quality Tests | ✅ Complete |
| 〈785〉 | Osmolality and Osmolarity | ✅ Complete |
| 〈787〉 | Subvisible Particulate Matter in Therapeutic Protein Injections | ✅ Complete |
| 〈788〉 | Particulate Matter in Injections | ✅ Complete |
| 〈789〉 | Particulate Matter in Ophthalmic Solutions | ✅ Complete |
| 〈790〉 | Visible Particulates in Injections | ✅ Complete |
| 〈791〉 | pH | ✅ Complete |
| 〈797〉 | Pharmaceutical Compounding—Sterile Preparations | ✅ Complete |
| 〈1071〉 | Rapid Microbiological Methods | ✅ Complete |
| 〈1072〉 | Disinfectants and Antiseptics | ✅ Complete |
| 〈1085〉 | Guidelines on Biologics—General Considerations | ✅ Complete |
| 〈1115〉 | Bioburden Control of Non-Sterile Drug Substances | ✅ Complete |
| 〈1116〉 | Microbial Control of Aseptic Environments | ✅ Complete |
| 〈1117〉 | Microbiological Best Laboratory Practices | ✅ Complete |
| 〈1207〉 | Package Integrity Evaluation—Sterile Products | ✅ Complete |
| 〈1211〉 | Sterilization and Sterility Assurance | ✅ Complete |
| 〈1228〉 | Depyrogenation | ✅ Complete |
| 〈1228.1〉 | Dry Heat Depyrogenation | ✅ Complete |
| 〈1228.3〉 | Depyrogenation by Filtration | ✅ Complete |
| 〈1228.4〉 | Depyrogenation by Rinsing | ✅ Complete |
| 〈1228.5〉 | Endotoxin Indicators for Depyrogenation | ✅ Complete |
| 〈1229〉 | Sterilization of Compendial Articles | ✅ Complete |
| 〈1229.1〉–〈1229.15〉 | Sterilization sub-series (15 chapters) | ⏳ Skeleton |
| 〈1660〉 | Evaluation of Inner Surface Durability of Glass Containers | ✅ Complete |
| 〈1788〉 | Methods for the Determination of Subvisible Particulate Matter | ✅ Complete |
| 〈1790〉 | Visual Inspection of Injections | ✅ Complete |

> **Note:** USP chapters < 1000 are legally enforceable in the US; chapters ≥ 1000 are informational. See [SOURCES.md](SOURCES.md) for details on each source organization.

### Ph.Eur. General Chapters (7 complete)

| Chapter | Topic |
|---------|-------|
| 2.6.1 | Sterility |
| 2.6.14 | Bacterial Endotoxins |
| 2.9.19 | Particulate Contamination: Sub-visible Particles |
| 2.9.20 | Particulate Contamination: Visible Particles |
| 3.2.1 | Glass Containers for Pharmaceutical Use |
| 3.3.8 | Sterile Single-Use Plastic Syringes for Human Use |
| 5.1.1 | Methods of Preparation of Sterile Products |

### Planned Additions

| Document | Body | Priority | Fills This Gap |
|----------|------|----------|----------------|
| Annex 15 — Qualification & Validation | EU GMP | High | EU inspection standard for IQ/OQ/PQ; pairs with ISPE Vol.5 |
| Annex 2 — Biological Products | EU GMP | Medium | EU regulatory GMP for biologics/ATMPs |
| TRS 961 Annex 6 — Sterile Products | WHO GMP | Medium | WHO prequalification standard; required for global health supply chains |
| 14644-2/3 Monitoring & Test Methods | ISO | Medium | Monitoring requirements and test methods; pairs with completed 14644-1/5/7 |
| Q11 Drug Substance Development | ICH | Low | Biological/chemical API development; extends Q8 framework |

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

# 5. Generate bilingual HTML sections using docs/PROMPT.md template

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

| Source | Color | Status |
|--------|-------|--------|
| PDA | Blue | Active |
| ISPE | Green | Active |
| FDA | Red | Active |
| PIC/S | Orange | Active |
| ICH | Teal | Active |
| USP | Gold | Active |
| ISO | Purple | Active |
| EU GMP | Indigo | Planned |
| Ph. Eur. | Rose | Active |
| WHO | Slate | Planned |
