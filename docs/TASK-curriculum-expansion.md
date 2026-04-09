# Task: Expand Department Curriculum to 100% Coverage

> Transfer file for next session. All analysis is complete — implementation only.

## Context

`gmp-curriculum-data.js` currently assigns **90 of 166 documents** (54%) to department tracks.
This task adds the remaining **76 documents** + adds **12 missing future documents** to `docs/ROADMAP.md`.

**Branch:** work on `main` directly (or create a new feature branch).
**Files to edit:** `gmp-curriculum-data.js`, `docs/ROADMAP.md`

---

## Part 1: Add 76 Documents to `gmp-curriculum-data.js`

For each department below, add these docs to **Tier 3 (Advanced)** as `required: false` unless noted otherwise.

### QC — add 19 docs

**Tier 2 (Core):**
- `USP-1` — Injections & Parenterals — foundational QC reference
- `ISPE-QC` — Quality Culture & RCA Tools — root cause analysis for QC

**Tier 3 (Advanced):**
- `USP-55` — Biological Indicators — sterilization validation testing
- `USP-161` — Device Endotoxin & Pyrogen — combo product testing
- `USP-631` — Color & Achromicity — analytical test method
- `USP-729` — Globule Size in Lipid Emulsions — specialized QC
- `USP-755` — Minimum Fill — routine QC inspection
- `USP-771` — Ophthalmic Quality Tests
- `USP-785` — Osmolality & Osmolarity — injectable QC
- `USP-789` — Particulates in Ophthalmic Solutions
- `USP-791` — pH — routine analytical testing
- `USP-921` — Water Determination (Karl Fischer)
- `USP-1229` — Sterilization of Compendial Articles — parent chapter
- `USP-1229-3` — Bioburden Monitoring
- `USP-1229-5` — Biological Indicators
- `PhEur-2919` — Ph.Eur. Sub-Visible Particles
- `PhEur-2920` — Ph.Eur. Visible Particles
- `PhEur-511` — Ph.Eur. Methods of Sterile Preparation
- `ISPE-Sampling` — Sampling for Water/Steam/Gases

### Production — add 11 docs

**Tier 2 (Core):**
- `PtC-12` — RABS — barrier system operations
- `PtC-Isolators` — Isolator aseptic processing

**Tier 3 (Advanced):**
- `PtC-15` — Mobile Manufacturing — production models
- `USP-1229-1` — Steam Sterilization
- `USP-1229-2` — Moist Heat Liquids
- `USP-1229-4` — Sterilizing Filtration
- `USP-1229-8` — Dry Heat Sterilization
- `USP-1229-11` — VPHP Sterilization
- `USP-1229-13` — SIP — Sterilize-in-Place
- `USP-1229-14` — Cycle Development
- `USP-797` — Sterile Compounding — aseptic technique reference

### Engineering — add 8 docs

**Tier 3 (Advanced):**
- `USP-1229-6` — Liquid-Phase Sterilization
- `USP-1229-7` — EtO Sterilization
- `USP-1229-9` — Chemical Indicators
- `USP-1229-10` — Radiation Sterilization
- `USP-1229-12` — New Sterilization Methods
- `USP-1229-15` — Gas Filtration
- `ISPE-CTC` — CTC Mapping & Monitoring — cold chain qualification
- `ISPE-SUT` — Single-Use Technology — engineering integration

### Warehouse — add 6 docs

**Tier 2 (Core):**
- `USP-659` — Packaging & Storage Requirements
- `USP-698` — Deliverable Volume

**Tier 3 (Advanced):**
- `USP-670` — Auxiliary Packaging Components (desiccants etc.)
- `USP-671` — Containers Performance Testing
- `TR68` — Drug Shortage Prevention — supply risk
- `ISO-15394` — Packaging Barcodes — shipping labels & traceability

### RA — add 8 docs

**Tier 2 (Core):**
- `PtC-Remote` — Remote & Hybrid GMP Inspections
- `TR73-2` — MDR Annex I for Staked Needles — EU regulatory

**Tier 3 (Advanced):**
- `ISO-9000` — QMS Fundamentals — vocabulary & principles
- `ISO-9001` — QMS Requirements — risk-based thinking
- `ISO-10993-1` — Biological Evaluation of Medical Devices
- `ISO-15223-1` — Medical Device Label Symbols
- `ISO-15223-2` — Medical Device Symbol Validation
- `ISO-TR-24971` — Risk Management Application Guidance

### QA — add 2 docs

**Tier 3 (Advanced):**
- `TR49` — Biotech Cleaning Validation — QA oversight
- `TR68` — Drug Shortage Prevention — quality system risk

### Technical Service — add 11 docs

**Tier 2 (Core):**
- `USP-1228-1` — Dry Heat Depyrogenation
- `USP-1228-3` — Depyrogenation by Filtration

**Tier 3 (Advanced):**
- `PtC-11` — Plasmids & Vectors in ATMP — specialized process support
- `PtC-13` — Materials in ATMP Manufacturing
- `USP-1228-4` — Depyrogenation by Rinsing
- `USP-1228-5` — Endotoxin Indicators for Depyrogenation
- `ISO-11040` — Prefilled Syringe standards — process specs
- `ISO-11608-1` — Needle Injection Systems — device integration
- `ISO-13926-1` — Pen-Injector Glass Cylinders
- `ISO-13926-2` — Pen-Injector Plunger Stoppers
- `ISO-13926-3` — Pen-Injector Seals

### Shared — add to MULTIPLE departments

These 11 docs should appear in 2+ departments:

| Doc Key | Add to departments | Why |
|---------|-------------------|-----|
| `USP-87` | QC (Tier 3), RA (Tier 3) | Biocompatibility In Vitro |
| `USP-88` | QC (Tier 3), RA (Tier 3) | Biocompatibility In Vivo |
| `USP-381` | QC (Tier 3), Warehouse (Tier 2) | Elastomeric Components |
| `USP-1207-1` | QC (Tier 3), Warehouse (Tier 3) | CCI Test Method Selection |
| `USP-1207-2` | QC (Tier 3), Warehouse (Tier 3) | Leak Test Technologies |
| `USP-1207-3` | QC (Tier 3), Warehouse (Tier 3) | Seal Quality Technologies |
| `USP-1660` | QC (Tier 3), Warehouse (Tier 3) | Glass Inner Surface Durability |
| `USP-1663` | QC (Tier 3), Technical Service (Tier 3) | Extractables Assessment |
| `USP-1664` | QC (Tier 3), Technical Service (Tier 3) | Leachables Assessment |
| `PhEur-321` | QC (Tier 3), Warehouse (Tier 3) | Ph.Eur. Glass Containers |
| `PhEur-338` | QC (Tier 3), Production (Tier 3) | Ph.Eur. Sterile Syringes |

### Skipped (no content in reports.json)

- `TR41` — empty entry, no tags/title
- `TR56` — empty entry, no tags/title

---

## Part 2: Add 12 Future Documents to `docs/ROADMAP.md`

Add to the **Remaining Layer 1 Additions** table (after the existing entries, before the `---`):

```markdown
| **PDA TR30** — Parametric Release of Sterile Products | Phase 5 | Medium | Medium |
| **PDA TR35** — Flexible Microbiological Testing Programs | Phase 5 | Medium | Small |
| **PDA TR48** — Moist Heat Sterilizer Systems: Design, Validation, Operation | Phase 5 | **High** | Medium |
| **PDA TR63** — Process Simulation/APS for Sterile Powder Products | Phase 5 | Medium | Medium |
| **PDA TR77** — Manual Visual Inspection of Parenterals | Phase 5 | Medium | Medium |
| **PDA TR83** — Particulate Matter in Drug Products | Phase 5 | Medium | Medium |
| **ICH Q12** — Lifecycle Management of Pharmaceuticals | Phase 5 | **High** | Medium |
| **ICH Q13** — Continuous Manufacturing | Phase 6 | Medium | Medium |
| **ICH Q14** — Analytical Procedure Development | Phase 6 | Medium | Medium |
| **PDA TR31** — Validation of Computerized Laboratory Systems | Phase 6 | Low | Small |
| **ISO 11138 (series)** — Biological Indicators for Sterilization | Phase 6 | Medium | Medium |
| **ISO 17665-1** — Moist Heat Sterilization Development & Validation | Phase 5 | **High** | Medium |
```

### Department mapping for future docs (for reference when they're added to repo):

| Document | Primary Departments |
|----------|-------------------|
| PDA TR30 | QC, Production, RA |
| PDA TR35 | QC |
| PDA TR48 | Production, Engineering |
| PDA TR63 | Production, TechService |
| PDA TR77 | QC, Production |
| PDA TR83 | QC |
| ICH Q12 | RA, QA, TechService |
| ICH Q13 | RA, Production, TechService |
| ICH Q14 | QC, TechService |
| PDA TR31 | QC |
| ISO 11138 | QC, Production |
| ISO 17665-1 | Engineering, Production |

---

## Verification After Implementation

- [ ] All 166 documents (minus TR41/TR56) appear in at least one department
- [ ] No duplicate keys within the same tier of the same department
- [ ] `learning-path.html` renders all departments correctly (browser check)
- [ ] `mindmap.html` "By Department" view shows expanded trees
- [ ] Commit message references this task file

## Post-Implementation

After committing, run `/project-sync` to update ROADMAP counts and INDEX.md if needed.
