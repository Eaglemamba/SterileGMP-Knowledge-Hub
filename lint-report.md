# Knowledge Lint Report
- Run date: 2026-04-03
- Reports scanned: 62
- Dashboard files (Complete.html): 61
- Issues found: 96

## Summary
| Check | Pass | Fail |
|-------|------|------|
| Required Fields | 62 | 0 |
| Date Format | 62 | 0 |
| Tags in tagClasses | 30 | 32 |
| Source Color Fields | 62 | 0 |
| Output File Exists | 61 | 1 |
| Section Files Exist | 58 | 4 |
| Section Map Fields | 62 | 0 |
| Knowledge MD Exists | 59 | 3 |
| INDEX.md Coverage | 56 | 6 |
| Folder-Source Consistency | 62 | 0 |
| Pages Format | 62 | 0 |

## Orphan tagClasses (defined but never used by any report)
- `BSC`
- `BSL`
- `Bacterial Retention`
- `Bubble Point`
- `Calibration`
- `Case Study`
- `Changeover`
- `Closing`
- `Closure`
- `Components`
- `DP`
- `Diffusion`
- `Equipment`
- `Filter`
- `Fluid Path`
- `Foam Control`
- `Functionality`
- `Glossary`
- `Grade A`
- `IPC`
- `Line Setup`
- `MMU`
- `Maintenance`
- `Mechanism`
- `Membrane`
- `Methods`
- `Mock-Up`
- `Needle`
- `Overview`
- `PDA TR`
- `PP`
- `Phase-Appropriate`
- `Powder`
- `Priming`
- `RPP`
- `RTU`
- `Reference`
- `SCM`
- `SIP`
- `Scale-Up`
- `Selection`
- `Stopper`
- `Supplier`
- `TP`
- `Technology`
- `Transfer`
- `Troubleshooting`
- `VPHP`
- `Vendor`
- `Weight Check`
- `Yield`

## Undefined Tags (used by reports but missing from tagClasses)
- `Acceptance Limits` — used by: TR29
- `Architecture` — used by: ISPE-Vol3
- `Aseptic Processing` — used by: FDA-Aseptic, PICS-Annex1, PtC-1
- `BFS` — used by: FDA-Aseptic, PtC-1
- `Biological Indicators` — used by: TR1
- `Biopharmaceutical` — used by: ISPE-Vol6
- `Bioreactor` — used by: ISPE-SUT
- `Biotechnology` — used by: TR49
- `C&Q` — used by: ISPE-Vol5
- `CGMP` — used by: FDA-Aseptic, FDA-ProcessVal
- `CIP/SIP` — used by: ISPE-Vol6
- `Cleaning` — used by: TR70
- `Comparability` — used by: PtC-11
- `Compliance` — used by: ISPE-IT
- `Container Closure` — used by: TR43
- `Container Closure Integrity` — used by: TR27
- `Control Strategy` — used by: PtC-11
- `Disinfection` — used by: TR70
- `Document Management` — used by: PtC-Remote
- `Drug Shortage` — used by: TR68
- `Extractables` — used by: ISPE-SUT
- `FDA` — used by: FDA-ProcessInspection, FDA-ProcessVal
- `FMEA` — used by: ICH-Q9R1, ISPE-QC, ISPE-TechTransfer
- `GDP Inspection` — used by: PtC-Remote
- `GMP Inspection` — used by: PtC-Remote
- `Glass Container` — used by: TR43
- `HVAC` — used by: ISPE-HVAC, ISPE-Vol3, ISPE-Vol6
- `ICH Q9` — used by: TR68
- `IT Infrastructure` — used by: ISPE-GAMP5, ISPE-IT
- `Inspection` — used by: FDA-ProcessInspection
- `Last Mile` — used by: TR46
- `Leachables` — used by: ISPE-SUT
- `Leak Testing` — used by: TR27, TR86
- `Manufacturing` — used by: TR73
- `Mapping` — used by: ISPE-CTC
- `Material Qualification` — used by: PtC-13
- `Moist Heat` — used by: TR1
- `Nonconformity` — used by: TR43
- `Package Integrity` — used by: TR86
- `Pandemic` — used by: PtC-9
- `Personnel` — used by: PtC-1
- `Physical Environment` — used by: PtC-1
- `Post-Approval Change` — used by: TR68
- `Potency` — used by: PtC-11
- `Process Closure` — used by: ISPE-Vol6
- `Quality Control` — used by: TR43
- `Quality System` — used by: FDA-ProcessInspection
- `Raw Materials` — used by: PtC-13
- `Regulatory Compliance` — used by: PtC-Remote, TR68
- `SUT` — used by: ISPE-SUT
- `Sampling` — used by: ISPE-Sampling, TR29, TR49
- `Serialization` — used by: TR46
- `Single-Use Systems` — used by: TR86
- `Software Categories` — used by: ISPE-GAMP5
- `Sterile Manufacturing` — used by: PICS-Annex1
- `Sterility Testing` — used by: FDA-Aseptic, FDA-ProcessInspection
- `Supplier Assessment` — used by: ISPE-GAMP5
- `Supplier Qualification` — used by: PtC-13
- `Temperature` — used by: ISPE-CTC
- `URS` — used by: ISPE-ProcessGas, ISPE-Vol5
- `Water System` — used by: ISPE-Sampling
- `cGMP Layout` — used by: ISPE-Vol6

## Issues

### FDA-Aseptic
- TAG_NOT_IN_CLASSES: FDA-Aseptic uses tag "Aseptic Processing" not defined in tagClasses
- TAG_NOT_IN_CLASSES: FDA-Aseptic uses tag "CGMP" not defined in tagClasses
- TAG_NOT_IN_CLASSES: FDA-Aseptic uses tag "Sterility Testing" not defined in tagClasses
- TAG_NOT_IN_CLASSES: FDA-Aseptic uses tag "BFS" not defined in tagClasses

### FDA-ProcessInspection
- TAG_NOT_IN_CLASSES: FDA-ProcessInspection uses tag "FDA" not defined in tagClasses
- TAG_NOT_IN_CLASSES: FDA-ProcessInspection uses tag "Inspection" not defined in tagClasses
- TAG_NOT_IN_CLASSES: FDA-ProcessInspection uses tag "Sterility Testing" not defined in tagClasses
- TAG_NOT_IN_CLASSES: FDA-ProcessInspection uses tag "Quality System" not defined in tagClasses

### FDA-ProcessVal
- TAG_NOT_IN_CLASSES: FDA-ProcessVal uses tag "CGMP" not defined in tagClasses
- TAG_NOT_IN_CLASSES: FDA-ProcessVal uses tag "FDA" not defined in tagClasses

### ICH-Q10
- NOT_IN_INDEX: ICH-Q10 (ICH/ICH-Q10-Complete.md) not referenced in knowledge/INDEX.md

### ICH-Q8R2
- NOT_IN_INDEX: ICH-Q8R2 (ICH/ICH-Q8R2-Complete.md) not referenced in knowledge/INDEX.md

### ICH-Q9R1
- TAG_NOT_IN_CLASSES: ICH-Q9R1 uses tag "FMEA" not defined in tagClasses
- NOT_IN_INDEX: ICH-Q9R1 (ICH/ICH-Q9R1-Complete.md) not referenced in knowledge/INDEX.md

### ISPE-CTC
- TAG_NOT_IN_CLASSES: ISPE-CTC uses tag "Mapping" not defined in tagClasses
- TAG_NOT_IN_CLASSES: ISPE-CTC uses tag "Temperature" not defined in tagClasses

### ISPE-GAMP5
- TAG_NOT_IN_CLASSES: ISPE-GAMP5 uses tag "Software Categories" not defined in tagClasses
- TAG_NOT_IN_CLASSES: ISPE-GAMP5 uses tag "IT Infrastructure" not defined in tagClasses
- TAG_NOT_IN_CLASSES: ISPE-GAMP5 uses tag "Supplier Assessment" not defined in tagClasses

### ISPE-HVAC
- TAG_NOT_IN_CLASSES: ISPE-HVAC uses tag "HVAC" not defined in tagClasses

### ISPE-IT
- TAG_NOT_IN_CLASSES: ISPE-IT uses tag "IT Infrastructure" not defined in tagClasses
- TAG_NOT_IN_CLASSES: ISPE-IT uses tag "Compliance" not defined in tagClasses

### ISPE-ProcessGas
- TAG_NOT_IN_CLASSES: ISPE-ProcessGas uses tag "URS" not defined in tagClasses

### ISPE-QC
- TAG_NOT_IN_CLASSES: ISPE-QC uses tag "FMEA" not defined in tagClasses

### ISPE-SUT
- TAG_NOT_IN_CLASSES: ISPE-SUT uses tag "SUT" not defined in tagClasses
- TAG_NOT_IN_CLASSES: ISPE-SUT uses tag "Extractables" not defined in tagClasses
- TAG_NOT_IN_CLASSES: ISPE-SUT uses tag "Leachables" not defined in tagClasses
- TAG_NOT_IN_CLASSES: ISPE-SUT uses tag "Bioreactor" not defined in tagClasses

### ISPE-Sampling
- TAG_NOT_IN_CLASSES: ISPE-Sampling uses tag "Water System" not defined in tagClasses
- TAG_NOT_IN_CLASSES: ISPE-Sampling uses tag "Sampling" not defined in tagClasses

### ISPE-TechTransfer
- TAG_NOT_IN_CLASSES: ISPE-TechTransfer uses tag "FMEA" not defined in tagClasses

### ISPE-Vol3
- TAG_NOT_IN_CLASSES: ISPE-Vol3 uses tag "HVAC" not defined in tagClasses
- TAG_NOT_IN_CLASSES: ISPE-Vol3 uses tag "Architecture" not defined in tagClasses

### ISPE-Vol5
- TAG_NOT_IN_CLASSES: ISPE-Vol5 uses tag "URS" not defined in tagClasses
- TAG_NOT_IN_CLASSES: ISPE-Vol5 uses tag "C&Q" not defined in tagClasses

### ISPE-Vol6
- TAG_NOT_IN_CLASSES: ISPE-Vol6 uses tag "Biopharmaceutical" not defined in tagClasses
- TAG_NOT_IN_CLASSES: ISPE-Vol6 uses tag "Process Closure" not defined in tagClasses
- TAG_NOT_IN_CLASSES: ISPE-Vol6 uses tag "cGMP Layout" not defined in tagClasses
- TAG_NOT_IN_CLASSES: ISPE-Vol6 uses tag "HVAC" not defined in tagClasses
- TAG_NOT_IN_CLASSES: ISPE-Vol6 uses tag "CIP/SIP" not defined in tagClasses

### PICS-Annex1
- TAG_NOT_IN_CLASSES: PICS-Annex1 uses tag "Aseptic Processing" not defined in tagClasses
- TAG_NOT_IN_CLASSES: PICS-Annex1 uses tag "Sterile Manufacturing" not defined in tagClasses

### PtC-1
- TAG_NOT_IN_CLASSES: PtC-1 uses tag "Aseptic Processing" not defined in tagClasses
- TAG_NOT_IN_CLASSES: PtC-1 uses tag "Physical Environment" not defined in tagClasses
- TAG_NOT_IN_CLASSES: PtC-1 uses tag "Personnel" not defined in tagClasses
- TAG_NOT_IN_CLASSES: PtC-1 uses tag "BFS" not defined in tagClasses

### PtC-11
- TAG_NOT_IN_CLASSES: PtC-11 uses tag "Control Strategy" not defined in tagClasses
- TAG_NOT_IN_CLASSES: PtC-11 uses tag "Comparability" not defined in tagClasses
- TAG_NOT_IN_CLASSES: PtC-11 uses tag "Potency" not defined in tagClasses

### PtC-13
- TAG_NOT_IN_CLASSES: PtC-13 uses tag "Raw Materials" not defined in tagClasses
- TAG_NOT_IN_CLASSES: PtC-13 uses tag "Material Qualification" not defined in tagClasses
- TAG_NOT_IN_CLASSES: PtC-13 uses tag "Supplier Qualification" not defined in tagClasses

### PtC-9
- TAG_NOT_IN_CLASSES: PtC-9 uses tag "Pandemic" not defined in tagClasses

### PtC-Remote
- TAG_NOT_IN_CLASSES: PtC-Remote uses tag "GMP Inspection" not defined in tagClasses
- TAG_NOT_IN_CLASSES: PtC-Remote uses tag "GDP Inspection" not defined in tagClasses
- TAG_NOT_IN_CLASSES: PtC-Remote uses tag "Regulatory Compliance" not defined in tagClasses
- TAG_NOT_IN_CLASSES: PtC-Remote uses tag "Document Management" not defined in tagClasses

### TR1
- TAG_NOT_IN_CLASSES: TR1 uses tag "Moist Heat" not defined in tagClasses
- TAG_NOT_IN_CLASSES: TR1 uses tag "Biological Indicators" not defined in tagClasses

### TR27
- TAG_NOT_IN_CLASSES: TR27 uses tag "Container Closure Integrity" not defined in tagClasses
- TAG_NOT_IN_CLASSES: TR27 uses tag "Leak Testing" not defined in tagClasses

### TR29
- TAG_NOT_IN_CLASSES: TR29 uses tag "Sampling" not defined in tagClasses
- TAG_NOT_IN_CLASSES: TR29 uses tag "Acceptance Limits" not defined in tagClasses

### TR41
- MISSING_SECTION: TR41 section file not found: PDA/TR41/sections/section-00-intro.html
- MISSING_KNOWLEDGE_MD: TR41 expected knowledge/PDA/TR41-Complete.md
- NOT_IN_INDEX: TR41 (PDA/TR41-Complete.md) not referenced in knowledge/INDEX.md

### TR43
- TAG_NOT_IN_CLASSES: TR43 uses tag "Glass Container" not defined in tagClasses
- TAG_NOT_IN_CLASSES: TR43 uses tag "Nonconformity" not defined in tagClasses
- TAG_NOT_IN_CLASSES: TR43 uses tag "Container Closure" not defined in tagClasses
- TAG_NOT_IN_CLASSES: TR43 uses tag "Quality Control" not defined in tagClasses

### TR44
- MISSING_OUTPUT: TR44 output file not found: PDA/TR44/output/TR44-Complete.html
- MISSING_SECTION: TR44 section file not found: PDA/TR44/sections/section-00-intro.html
- MISSING_KNOWLEDGE_MD: TR44 expected knowledge/PDA/TR44-Complete.md
- NOT_IN_INDEX: TR44 (PDA/TR44-Complete.md) not referenced in knowledge/INDEX.md

### TR46
- TAG_NOT_IN_CLASSES: TR46 uses tag "Last Mile" not defined in tagClasses
- TAG_NOT_IN_CLASSES: TR46 uses tag "Serialization" not defined in tagClasses

### TR49
- TAG_NOT_IN_CLASSES: TR49 uses tag "Biotechnology" not defined in tagClasses
- TAG_NOT_IN_CLASSES: TR49 uses tag "Sampling" not defined in tagClasses

### TR56
- MISSING_SECTION: TR56 section file not found: PDA/TR56/sections/section-00-intro.html
- MISSING_KNOWLEDGE_MD: TR56 expected knowledge/PDA/TR56-Complete.md
- NOT_IN_INDEX: TR56 (PDA/TR56-Complete.md) not referenced in knowledge/INDEX.md

### TR62
- MISSING_SECTION: TR62 section file not found: PDA/TR62/sections/section-00-intro-glossary.html
- MISSING_SECTION: TR62 section file not found: PDA/TR62/sections/section-01-facilities-personnel.html
- MISSING_SECTION: TR62 section file not found: PDA/TR62/sections/section-02-equipment-design.html
- MISSING_SECTION: TR62 section file not found: PDA/TR62/sections/section-03-process-simulation.html
- MISSING_SECTION: TR62 section file not found: PDA/TR62/sections/section-04-conclusion-references.html

### TR68
- TAG_NOT_IN_CLASSES: TR68 uses tag "Drug Shortage" not defined in tagClasses
- TAG_NOT_IN_CLASSES: TR68 uses tag "ICH Q9" not defined in tagClasses
- TAG_NOT_IN_CLASSES: TR68 uses tag "Post-Approval Change" not defined in tagClasses
- TAG_NOT_IN_CLASSES: TR68 uses tag "Regulatory Compliance" not defined in tagClasses

### TR70
- TAG_NOT_IN_CLASSES: TR70 uses tag "Cleaning" not defined in tagClasses
- TAG_NOT_IN_CLASSES: TR70 uses tag "Disinfection" not defined in tagClasses

### TR73
- TAG_NOT_IN_CLASSES: TR73 uses tag "Manufacturing" not defined in tagClasses

### TR86
- TAG_NOT_IN_CLASSES: TR86 uses tag "Package Integrity" not defined in tagClasses
- TAG_NOT_IN_CLASSES: TR86 uses tag "Leak Testing" not defined in tagClasses
- TAG_NOT_IN_CLASSES: TR86 uses tag "Single-Use Systems" not defined in tagClasses

## Clean Reports
- ISPE-Vol4
- ISPE-Vol7
- PtC-12
- PtC-14
- PtC-15
- PtC-Isolators
- TR13
- TR13-2
- TR22
- TR26
- TR39
- TR52
- TR54-6
- TR60
- TR65
- TR66
- TR73-2
- TR84
- TR85
- TR87
- TR88
- TR90
- TR91
- pda-guide-no1

---

# Level 2: Consistency Check (LLM Judgment)
- Reports reviewed: 62
- Issues found: 7

> Level 2 checks use LLM judgment to evaluate content quality beyond structural rules.
> Checks 10 (rating) and 13 (staleness) are N/A — this repo has no rating field and
> contains reference documents (not time-sensitive API/tool docs).

## Summary
| Check | Pass | Fail |
|-------|------|------|
| Summary vs Content (Check 8) | 4 | 3 (empty/missing) |
| Tags Completeness (Check 9) | 4 | 2 |
| doc-source-type (Check 11) | N/A | N/A |
| Duplicate Detection (Check 12) | 61 | 1 |
| Staleness Risk (Check 13) | N/A | N/A |

## Issues

### TR41
- EMPTY_METADATA: TR41 has empty summary and empty tags array — report scaffolded but not yet processed
- MISSING_FILE: TR41 section file `section-00-intro.html` does not exist

### TR44
- MISSING_FILE: TR44 has no output file, no section files on disk — skeleton entry only in reports.json
- EMPTY_METADATA: TR44 has empty summary and empty tags array

### TR56
- EMPTY_METADATA: TR56 has empty summary and empty tags array — report scaffolded but not yet processed
- MISSING_FILE: TR56 section file `section-00-intro.html` does not exist

### ICH-Q9R1
- MISSING_TAG: ICH-Q9R1 — content covers HACCP (33 mentions), HAZOP (29 mentions), FTA (30 mentions) but none are in tags array

### TR62
- MISSING_TAG: TR62 — content extensively discusses personnel training/qualification (11+ mentions), RABS (4+ mentions), and facilities design, but none are tagged

### TR65 / ISPE-TechTransfer
- POSSIBLE_DUPLICATE: TR65 and ISPE-TechTransfer — both describe the same 6-stage technology transfer lifecycle methodology from different authorities (PDA 2022 vs ISPE 3rd Ed.). While emphasis differs (PDA: 12 case studies; ISPE: APIs, formulation, QbD), the core scope overlaps substantially. This is a legitimate pair from different orgs — consider adding a cross-reference note rather than removing either.

## Recommendations

### High Priority (broken/missing files)
1. **TR44**: Complete the report processing — output file and all section files are missing. Currently a skeleton entry in reports.json only.
2. **TR41**: Generate missing `section-00-intro.html` and knowledge MD. Add to INDEX.md.
3. **TR56**: Generate missing `section-00-intro.html` and knowledge MD. Add to INDEX.md.
4. **TR62**: Regenerate 5 missing section files (section-00 through section-04).

### Medium Priority (tagClasses sync)
5. **Add 62 undefined tags to tagClasses** in reports.json — these tags are used by reports but have no CSS class defined, which may cause rendering issues on the dashboard filter buttons. Run: `python3 -c "import json; d=json.load(open('reports.json')); [print(t) for t in sorted(set(t for r in d['reports'].values() for t in r.get('tags',[])) - set(d.get('tagClasses',{}).keys()))]"`
6. **Remove 51 orphan tagClasses** that are defined but never used by any report (e.g., BSC, BSL, Calibration, Mock-Up, etc.).

### Low Priority (content quality)
7. **ICH-Q9R1**: Add tags `HACCP`, `HAZOP`, `FTA` — these are major QRM tools discussed extensively.
8. **TR62**: Add tags `Personnel Training`, `RABS`, `Facilities` to improve discoverability.
9. **ICH-Q10, ICH-Q8R2, ICH-Q9R1**: Add entries to `knowledge/INDEX.md`.
10. **TR65 vs ISPE-TechTransfer**: Add cross-reference notes in both INDEX.md entries to clarify that these cover overlapping technology transfer topics from PDA and ISPE perspectives.
