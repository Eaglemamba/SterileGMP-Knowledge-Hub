# SterileGMP Knowledge Hub — Comprehensive Scope & Roadmap

This document summarizes the current coverage status, gap analysis, and expansion roadmap for building a comprehensive sterile pharmaceutical manufacturing knowledge hub suitable for COO-level operational decision-making.

Last updated: 2026-04-09 — 164 documents complete (PDA 41, USP 76, ISPE 14, FDA 5, ICH 3, PIC/S 1, ISO 17, Ph.Eur. 7); Ph.Eur. 5.1.1 Methods of Preparation of Sterile Products complete; next: USP 〈381〉 Elastomeric Components, CEN EN ISO 15225

---

## System Architecture

The hub is designed as a layered knowledge system. Skills (slash commands) read from all layers to produce site-grounded, regulation-backed outputs.

```
Layer 1: Regulatory / Technical Reference    knowledge/
  PDA, ISPE, PIC/S, FDA, ICH, USP, ISO      ← This repo (public)  ✅ COMPLETE

Expert Knowledge Base                        knowledge/EXPERT/
  Practitioner insights, case experience,   ← This repo (public)  ⬜ IN PROGRESS
  real-world implementation notes
  (bridges Layer 1 theory → Layer 2 practice)

Layer 2: Operational Frameworks              .claude/skills/_shared/
  Templates, decision frameworks,            ← This repo (public)  ⬜ TO BUILD
  checklists, reference tables

Layer 3: Site-Specific Documents             ~/Amaran-Site-Knowledge/
  Desensitized SOPs, WIs,                   ← Separate private repo ⬜ IN PROGRESS
  IQ/OQ/PQ reports, validation reports
```

**Why separate repos for Layer 3:** This repo is public. Site SOPs contain proprietary process logic and may reflect client product information. Even after desensitization, the document structure itself carries IP risk. Layer 3 lives in a private repo, read locally by skills.

---

## Current Status at a Glance

| Component | Status | Count |
|-----------|--------|-------|
| Layer 1 — Regulatory Reference | ✅ Complete | 164 documents |
| Expert Knowledge Base | ⬜ Not started | 9 files planned |
| Layer 2 — Operational Frameworks | ⬜ Not started | ~27 files planned |
| Layer 2 — Skills System | ⬜ Not started | 26 slash commands planned |
| Layer 3 — Site Documents | 🔄 In progress | 9 pilot SOPs converted |

## Active Priorities

**In order:**

1. **Expert Knowledge Base** — start with SA25 lifecycle (`#1`) or Lyo ANDA end-to-end (`#2`); see full plan below
2. **Layer 2 Operational Frameworks** — P0 skills first (`/deviation`, `/change-control`) with supporting templates
3. **Layer 1 additions** — ISO 14644-1/2/3 (cleanrooms), ISPE GEP (OCR required), remaining USP `<1229>` sub-series
4. **Layer 3** — resume SOP desensitization via `~/Amaran-AI-SOP/`; human review required per document

---

## Layer 1: Regulatory Reference — ✅ COMPLETE (143 documents)

### Completion Summary

| Source | Count | Scope | Status |
|--------|-------|-------|--------|
| **PDA** | 41 | Technical Reports, Points to Consider, Guides | ✅ Complete |
| **USP** | 76 | General Chapters — sterility, endotoxin, particulates, microbial, CCI, E&L, water, validation, analytical | ✅ Complete |
| **ISPE** | 14 | Baseline Guides, Good Practice Guides, GAMP | ✅ Complete (1 pending OCR) |
| **FDA** | 5 | Aseptic Processing, Process Validation, Process Inspection, Combination Products CGMP, HF for Combo Products | ✅ Complete |
| **ICH** | 3 | Q8(R2), Q9(R1), Q10 | ✅ Complete |
| **PIC/S** | 1 | Annex 1 (2022) | ✅ Complete |
| **ISO** | 17 | ISO 11040 (Prefilled Syringes Parts 1–8), ISO 13408 (Aseptic Processing Parts 1–7), ISO 14644 (Cleanrooms Parts 1/5/7), ISO 11608-1 (NIS), ISO 13485 (Medical Device QMS), ISO 10993-1 (Biological Evaluation), ISO TR 24971 (Risk Management Guidance), ISO 15378 (Primary Packaging GMP), ISO 9001, ISO 2859-1, ISO 9000, ISO 15223-1, ISO 15223-2, ISO 15394, ISO 13926-1, ISO 13926-2, ISO 13926-3 — ISO 14971 blocked (scanned PDF) | 🔄 In progress |
| **Ph.Eur.** | 7 | 2.6.1 Sterility ✅, 2.6.14 Bacterial Endotoxins ✅, 2.9.19 Sub-visible Particles ✅, 2.9.20 Visible Particles ✅, 3.2.1 Glass Containers ✅, 3.3.8 Sterile Single-Use Syringes ✅, 5.1.1 Methods of Preparation ✅ | ✅ Complete |
| **IEC** | 0 | 62366-1 (usability engineering) | ⬜ Not started |
| **EU GMP** | 0 | Annex 15, Annex 2, Annex 20 | ⬜ Future (Phase 6) |
| **WHO GMP** | 0 | TRS 961 Annex 6, TRS 1010 | ⬜ Future (Phase 6) |
| **Total** | **164** | | |

### USP Batch History

- Batch 1 (2026-04-04): 〈71〉 〈85〉 〈151〉 〈161〉 〈788〉 〈1116〉 〈1211〉 + initial set
- Batch 2 (2026-04-05): 〈1228〉 series (×5), 〈55〉 〈381〉 〈660〉 〈661〉 〈670〉 〈671〉 〈729〉 〈755〉 〈771〉 〈785〉 〈787〉 〈789〉 〈791〉 〈797〉 〈1207〉 〈1660〉 〈1788〉 〈1790〉 (23 chapters)
- Batch 3 (2026-04-06): 〈87〉 〈88〉 〈631〉 〈643〉 〈645〉 〈659〉 〈698〉 〈921〉 〈1029〉 〈1058〉 〈1079〉 〈1113〉 〈1207.1〉 〈1207.2〉 〈1207.3〉 〈1225〉 〈1226〉 〈1231〉 〈1663〉 〈1664〉 (20 chapters)

### Remaining Layer 1 Additions

| Document | Phase | Priority | Effort |
|----------|-------|----------|--------|
| ISO 14644-1/2/3 — Cleanroom classification | Phase 4 | High | Medium |
| ISPE GEP — Good Engineering Practice (scanned, OCR required) | Phase 4 | Low | Medium |
| USP `<1229>` sub-series (16 entries), `<151>`, `<790>` | Phase 4 | Medium | Small |
| PDA TR36 — Lyophilization | Phase 4 | Medium | Medium |
| ISO 17665 — Steam sterilization | Phase 4 | Medium | Medium |
| FDA — Container Closure Guidance, Terminal Sterilization Guidance | Phase 4 | Medium | Medium |
| ISO 14971 — Risk Management for Medical Devices | Phase 5 | High | Medium |
| ~~ISO 11608-1 — Needle-Based Injection Systems~~ | ✅ Done 2026-04-08 | — | — |
| ISO 11608-3 — Finished containers for injection systems | Phase 5 | Medium | Small |
| ~~ISO 13485 — Medical Devices QMS~~ | ✅ Done 2026-04-08 | — | — |
| IEC 62366-1 — Usability Engineering / Human Factors | Phase 5 | Medium | Medium |
| FDA — Design Considerations for Combination Products (2019 Draft) | Phase 5 | Medium | Small |
| PDA TR76 — CCI Testing Technology | Phase 5 | Medium | Medium |
| PDA TR74 — Prefilled Syringe User Requirement Specifications | Phase 5 | Medium | Medium |
| EU GMP Annex 15 — Qualification and Validation | Phase 6 | High | Small |
| EU GMP Annex 2 — Biological Medicinal Products | Phase 6 | Medium | Small |
| EU GMP Annex 20 — Quality Risk Management | Phase 6 | Medium | Small |
| Ph. Eur. 5.1.1, 2.6.1, 2.6.14, 2.9.19/20 | Phase 6 | Medium | Small each |
| WHO TRS 961 Annex 6, TRS 1010 | Phase 6 | Medium | Small each |

---

## Expert Knowledge Base — Practitioner Layer

> **Session note — 2026-04-07:** This layer was planned to capture David Kuo's 10 years of sterile manufacturing experience as a structured knowledge layer. It sits alongside Layer 1 (regulatory reference) as interpretive, experiential content — the "what it actually means in practice" companion to official guidelines.

### What This Layer Is

Layer 1 documents what regulations *say*. This layer documents what a practitioner *knows from doing it* — the failure modes, judgment calls, shortcuts that backfire, and decisions that aren't documented anywhere. Knowledge of this type is:
- Tacit (in someone's head, not in any guideline)
- Rare (very few people have the same cross-functional exposure)
- Perishable (gets lost when people move on or organizations change)
- High-leverage (saves weeks of trial and error for the next person)

### Practitioner Background — David Kuo

| Period | Role | Organization | Key Domain |
|--------|------|-------------|------------|
| 2014–2016 | Assistant Scientist | TWi Pharmaceuticals | Parenteral lyo ANDA formulation development |
| 2016–2018 | Manager | Noratech Pharmaceuticals | US ANDA tech transfer, CMO/CRO management, CTD filing → FDA approval |
| 2018–2019 | Production Specialist | Pfizer | Aseptic processing (antibiotic injectables), deviation handling |
| 2019–2021 | Senior Technology Development Specialist | Amaran Biotech | DP line expansion (conceptual → construction → C&Q), DS scale-up tech transfer |
| 2021–2025 | Assistant Manufacturing Manager | Amaran Biotech | Vanrx SA25 robotic filling (full lifecycle), VPHP validation, APS, new format integration |
| 2025–now | Plant Operations Director | Amaran Biotech | 4-dept CDMO operations, 6 customer tech transfers, AI integration into GMP ops |

**Proof points:**
- ANDA 211463 — US FDA approved 2019-09-13 (parenteral lyo + diluent, first end-to-end ANDA managed as PM)
- Vanrx SA25 — virtual installation through annual requalification, VPHP cycle dev & validation, new format integration
- DP line built from zero — HAZOP, value engineering, construction supervision, C&Q completion
- 6 customer products — 100% on-spec commercial batches delivered on schedule as CDMO

### Ownable Knowledge Areas (Priority-Ranked)

These are topics where David's experience is rare enough to constitute a knowledge moat — few practitioners have documented these from direct execution, and no public regulatory document covers the "how it actually went" dimension.

| Priority | Topic | Why It's Ownable | Target File |
|----------|-------|-----------------|-------------|
| **#1** | Vanrx SA25 robotic aseptic filling — full lifecycle | Few SA25 sites globally; no public case documentation for virtual install → VPHP → APS → new format integration as a continuous narrative | `knowledge/EXPERT/vanrx-SA25-lifecycle.md` |
| **#2** | Lyo ANDA end-to-end: bench → FDA approval | Formulation dev (TWi) + tech transfer + CMO mgmt + full CTD authorship + FDA discipline review response + approval — entire arc owned, ANDA 211463 as evidence | `knowledge/EXPERT/lyo-ANDA-end-to-end.md` |
| **#3** | AI in GMP operations — live implementation | Deviation report agent, change control agent, BD evaluation tool — already running in GMP environment 2025; regulatory frameworks haven't caught up yet | `knowledge/EXPERT/ai-in-gmp-operations.md` |
| **#4** | CDMO DP line: zero to commercial | Facility expansion (HAZOP to construction) → C&Q → first commercial batches for external clients — the "build and run" perspective | `knowledge/EXPERT/cdmo-line-build-to-commercial.md` |
| **#5** | Sponsor ↔ CMO dual perspective | Managed CMOs as sponsor (Noratech); operated as CMO being managed (Amaran) — rare bilateral view of tech transfer negotiations, audit dynamics, quality agreements | `knowledge/EXPERT/sponsor-cmo-bilateral-view.md` |
| **#6** | VPHP cycle development & validation | Cycle parameter rationale, failure modes, bioindicator placement — minimal public documentation on the decision process behind validated cycles | `knowledge/EXPERT/vphp-cycle-development.md` |
| **#7** | Aseptic filling deviation patterns | 23 deviation reports written at Pfizer + ongoing CDMO deviation handling — pattern recognition across deviation types, investigation pitfalls, CAPA design | `knowledge/EXPERT/aseptic-deviation-patterns.md` |
| **#8** | US ANDA CTD authorship (parenteral) | Sections 2.3.P, 3.2.P.2/3/7/8, M1 (labeling/packaging) — practical authorship decisions, FDA discipline review letter dynamics | `knowledge/EXPERT/anda-ctd-authorship.md` |
| **#9** | CDMO business operations | Cost reduction (IPC frequency, RTP bags, filter redesign — 15–20% savings), energy load-shedding, BD at exhibitions, client audit preparation | `knowledge/EXPERT/cdmo-operations-economics.md` |

### Capture Method

Each file will be built using one of three inputs — whichever is available:

| Input Type | Method |
|-----------|--------|
| Existing Word/PDF documents | Extract + restructure into knowledge MD format |
| Partial notes + recall | Structured interview (topic-by-topic guided Q&A) |
| Pure recall | Guided oral dictation with follow-up questions |

**Format:** Each knowledge MD uses the same conventions as `knowledge/PDA/*.md` and `knowledge/ISPE/*.md` — but content is original practitioner knowledge, not extracted from a regulatory document. Source attribution: `Source: David Kuo, direct experience [year range]`.

### Status

| File | Status | Input Available |
|------|--------|----------------|
| `vanrx-SA25-lifecycle.md` | ⬜ Not started | Recall + possible internal docs |
| `lyo-ANDA-end-to-end.md` | ⬜ Not started | Recall (ANDA 211463 as anchor) |
| `ai-in-gmp-operations.md` | ⬜ Not started | Recall + AI tool artifacts |
| `cdmo-line-build-to-commercial.md` | ⬜ Not started | Recall + possible C&Q docs |
| `sponsor-cmo-bilateral-view.md` | ⬜ Not started | Recall |
| `vphp-cycle-development.md` | ⬜ Not started | Recall + possible validation report |
| `aseptic-deviation-patterns.md` | ⬜ Not started | Recall |
| `anda-ctd-authorship.md` | ⬜ Not started | Recall |
| `cdmo-operations-economics.md` | ⬜ Not started | Recall |

---

## Layer 2: Operational Frameworks

### Operational MD Files to Build (~27 files)

| Type | Files | Used by |
|------|-------|---------|
| Output templates | deviation report, CAPA, OOS worksheet, CC form, SOP structure, PQR chapter, FMEA, IQ/OQ/PQ scope, tech transfer checklist, supplier audit | All major skills |
| Decision frameworks | deviation classification, change classification, batch disposition, HBEL/MACO calc, GAMP category, supplier type matrix | deviation, change-control, batch-release, hbel-screen, csv-plan |
| Checklists | EM excursion response, inspection filling area, inspection QC lab, inspection warehouse, client audit data room, tech transfer 6-stage | em-excursion, inspection-prep, client-audit, tech-transfer |
| Reference tables | Annex 1 section map, FDA 483 common observations, validation trigger matrix, DI 9-Box framework, CPV statistical guide | annex1-check, inspection-prep, validation-xref, di-check, cpv-review |

### Skills System — 26 Slash Commands

See `SKILLS.md` for the full skill list with usage scenarios, initiating departments, and QA roles.

**Build priority:**

| Priority | Skills | Rationale |
|----------|--------|-----------|
| P0 | `/deviation`, `/change-control` | Highest daily frequency |
| P1 | `/em-excursion`, `/sop-new`, `/sop-revision`, `/annex1-check`, `/inspection-prep`, `/client-audit`, `/oos-investigate`, `/cc-sop-impact` | Core quality system activities |
| P2 | `/complaint`, `/reg-gap`, `/di-check`, `/pqr-framework`, `/feasibility`, `/hbel-screen`, `/bd-qa`, `/batch-release`, `/training-content`, `/csv-plan` | Periodic or scenario-specific |
| P3 | `/cpv-review`, `/tech-transfer`, `/qualification-plan`, `/validation-xref`, `/risk-assess`, `/supplier-qual` | Project-level or complex |

**Skills with supporting files use a folder structure:**

```
.claude/skills/
├── _shared/               ← cross-skill templates and frameworks
├── deviation/
│   ├── deviation.md       ← skill prompt (the slash command)
│   ├── template-deviation-report.md
│   └── template-capa.md
├── change-control/
│   ├── change-control.md
│   ├── template-cc-form.md
│   └── framework-change-classification.md
└── gmp-ask.md             ← simple skills: single file, no folder
```

**Bottlenecks:**
- Skills iteration — first version always needs 2–3 real-case test cycles before stable

---

## Layer 3: Site-Specific Documents

Layer 3 is fed by the Amaran AI SOP project (`~/Amaran-AI-SOP/`), which already has:
- `sop_to_markdown.py` — SOP → Markdown conversion (v3.7)
- `amaran_redact.py` — desensitization script
- 9 pilot SOPs converted and verified

**Human review is required for every desensitized document before it enters Layer 3.** This step cannot be automated (~20 min/SOP).

---

## Coverage by Domain

### Well Covered

| Domain | Key Documents | Assessment |
|--------|--------------|------------|
| Aseptic Processing | TR22, TR62, PtC-1, PtC-12, PtC-Isolators, Guide No.1 | Excellent |
| Environmental Monitoring | TR13, TR13-2, TR88 | Excellent |
| Contamination Control (CCS) | TR90, TR70 | Excellent |
| Container/Closure & Packaging | TR73, TR73-2, TR85, TR87, TR43 | Excellent |
| Container Closure Integrity (CCI) | TR27, USP 〈1207〉 trilogy | Excellent |
| Sterilizing Filtration | TR26 | Good |
| Process Validation | TR60, FDA Process Val | Good |
| Single-Use Systems | TR66 | Good |
| Facility Design | ISPE Vol.3, PtC-14 | Good |
| C&Q / Qualification | ISPE Vol.5 | Good |
| ATMP / Cell & Gene Therapy | PtC-13, PtC-14 | Good |
| Data Integrity | TR84 | Covered |
| Technology Transfer | TR65, ISPE TechTransfer | Good |
| Quality Culture | ISPE-QC | Covered |
| Combination Products (drug side) | TR73, TR73-2, TR27, TR85, TR87, FDA CGMP Combo | Good |
| E&L / Container Materials | USP 〈661〉 〈660〉 〈1663〉 〈1664〉 | Good |
| Regulatory QMS Framework | ICH Q8/Q9/Q10 | Excellent |
| Supply Chain & GDP | TR39, TR46, TR52, TR68 | Good (over-represented) |

### Remaining Gaps

| Gap | Why It Matters | Target |
|-----|---------------|--------|
| **Cleanroom Standards** | Referenced by every facility document | ISO 14644-1/2/3 — Phase 4 |
| **Lyophilization** | Major sterile dosage form | PDA TR36 — Phase 4 |
| **Steam sterilization** | Terminal sterilization method | ISO 17665 — Phase 4 |
| **Combination Products — device side** | Autoinjectors, PFS — device constituent standards | ISO 14971, 11608-1, 13485, IEC 62366-1 — Phase 5 |
| **EU regulatory anchor** | Binding EU GMP law; required for EU-MAA clients | EU GMP Annex 15, Annex 2, Annex 20 — Phase 6 |
| **European Pharmacopoeia** | EU batch release test methods | Ph. Eur. 5.1.1, 2.6.1, 2.6.14, 2.9.19/20 — Phase 6 |
| **WHO GMP** | WHO prequalification supply chains | TRS 961 Annex 6, TRS 1010 — Phase 6 |

### COO-Specific Decision Gaps

| Gap | Description | Covered by |
|-----|------------|-----------|
| **Inspection readiness** | Common FDA 483 observations for sterile facilities | Layer 2 reference table (to build) |
| **Deviation / CAPA triage** | Investigation resource allocation, CAPA timelines | Layer 2 framework (to build) |
| **Batch disposition** | When to release, reject, or reprocess — risk-based decision trees | Layer 2 framework (to build) |
| **Operational KPI benchmarks** | OEE, batch success rate, right-first-time, cycle time | Layer 2 reference table (to build) |

---

## Expansion Roadmap

### Phases 1–3: COMPLETE (archived 2026-04)

All PDA TRs (41), top ISPE guides (14), PIC/S Annex 1, FDA Aseptic/Process Val/Process Inspection/Combo Products guidances, ICH Q8/Q9/Q10, and USP 76 chapters are fully processed (bilingual HTML + knowledge MD). Infrastructure (dashboard, tooling, workflow) is complete and stable.

### Phase 4: Active — Topic Gap-Fillers + ISO

**Goal:** Fill remaining Layer 1 content gaps.

| Task | Document | Effort |
|------|----------|--------|
| **New source: ISO** | ISO 14644-1/2/3 — Cleanroom classification | Medium |
| PDA addition | TR36 — Lyophilization | Medium |
| ISO addition | ISO 17665 — Steam sterilization | Medium |
| ISPE completion | GEP — Good Engineering Practice (OCR required) | Medium |
| FDA additions | Container Closure Guidance, Terminal Sterilization Guidance | Medium |
| USP completion | `<1229>` sub-series (pending entries), `<151>`, `<790>` | Small |

### Phase 5: Active — Combination Products Device Layer

**Goal:** Add device-side standards for PFS, autoinjector, pen injector clients.

| Task | Document | Effort |
|------|----------|--------|
| New source: ISO | ISO 14971 — Risk Management for Medical Devices | Medium |
| New source: ISO | ISO 11608-1 — Needle-Based Injection Systems | Medium |
| New source: ISO | ISO 11608-3 — Finished containers | Small |
| New source: ISO | ISO 13485 — Medical Devices QMS | Medium |
| New source: IEC | IEC 62366-1 — Usability Engineering / Human Factors | Medium |
| FDA addition | Design Considerations for Combination Products (2019 Draft) | Small |
| PDA addition | TR76 — CCI Testing Technology | Medium |
| PDA addition | TR74 — Prefilled Syringe User Requirement Specifications | Medium |

### Phase 6: Future — EU + Global Market Expansion

**Trigger:** Add when EU-client volume justifies the effort, or when an EU inspection is scheduled.

| Task | Document | Effort |
|------|----------|--------|
| New source: EU GMP | Annex 15 — Qualification and Validation (2015) | Small |
| New source: EU GMP | Annex 2 — Biological Medicinal Products (2012) | Small |
| New source: EU GMP | Annex 20 — Quality Risk Management | Small |
| New source: Ph. Eur. | 5.1.1 / 2.6.1 / 2.6.14 / 2.9.19+20 | Small each |
| New source: WHO | TRS 961 Annex 6 — Sterile Products | Small |
| New source: WHO | TRS 1010 — Biological Products | Small |

### Phase 7: Future — COO Decision Support Layer

**Goal:** Synthesize cross-document knowledge into decision-oriented resources. These are also candidates for Layer 2 operational frameworks.

| Task | Description |
|------|------------|
| FDA 483 analysis | Common sterile manufacturing observations — cross-referenced to hub documents |
| Deviation triage framework | Synthesized from ICH Q9, Q10, TR88, TR90 |
| Batch disposition decision trees | Risk-based release/reject/reprocess guidance |
| Inspection readiness checklists | Per-area checklists mapped to Annex 1, FDA guidance |
| Operational KPI benchmarks | Industry benchmarks for sterile manufacturing metrics |

---

## Low Priority / Market-Specific Sources

Add only when client mix justifies:

| Source | Scope | When to Add |
|--------|-------|------------|
| **PMDA + JP** | Japanese regulatory guidance + Japanese Pharmacopoeia | If Japan MAA clients increase |
| **NMPA + ChP** | China GMP + Chinese Pharmacopoeia | If China market entry planned |
| **EMA product-specific** | Biologics, lyophilization, ATMP guidelines | When ATMP or EU biologics clients onboard |
| **ICH Q5 series** | Q5A–E: viral safety, stability for biologics | If biologics API clients increase |
| **ICH Q11 / Q12** | Drug substance dev + lifecycle management | When regulatory submission support expands |

> **ICH scope note:** Only Q8/Q9/Q10 belong in this hub. The full ICH set (Q1-Q14, S-series, E-series, M-series) is not sterile-manufacturing-specific.

> **IEC scope note:** IEC 62366-1 is included only for combination product human factors validation. Other IEC standards are out of scope.

---

## Documents NOT in Scope

| Document | Why Excluded |
|----------|-------------|
| ICH Q1–Q7, Q13–Q14 | General pharma — not sterile-specific |
| ICH S-series, E-series, M-series | Safety, efficacy, multidisciplinary — not manufacturing-focused |
| ASTM standards | ASTM E2500 (verification) is influential but too niche for this hub |
| ISO 11135 (EtO sterilization) | Rarely used for sterile injectables |
| ISO 11137 (Radiation sterilization) | Niche; for devices not primary pharma injectables |
| ISO 11608-4/5 (Electronic/automated injection systems) | Advanced device electronics — out of scope |
| ISO 11608-4/5 only (Electronic/automated injection systems) | Advanced device electronics — out of scope (ISO 11608-1/3 in Phase 5) |
| IEC standards other than 62366-1 | Electrical safety, EMC, cybersecurity — outside GMP scope |
| Full PDA TR catalog | Many TRs cover non-sterile topics. Only sterile-relevant TRs included |
| BP (British Pharmacopoeia) | ~95% harmonized with Ph. Eur. post-Brexit. Add Ph. Eur. first |
| ChP (Chinese Pharmacopoeia) | Add only if China in-market manufacturing is in scope |
| ANVISA / LatAm regulations | Region-specific; add only if Latin America supply is strategic |

---

## Folder Structure (Target State)

```
/
├── PDA/                    # PDA Technical Reports, Points to Consider, Guides
│   ├── TR13/
│   ├── TR22/
│   ├── TR26/
│   ├── TR36/               # Phase 4: Lyophilization
│   └── ...
├── ISPE/                   # ISPE Baseline Guides & Good Practice Guides
│   ├── ISPE-Vol3/
│   ├── ISPE-Vol4/
│   ├── ISPE-Vol5/
│   ├── ISPE-HVAC/
│   └── ...
├── PICS/
│   └── PICS-Annex1/
├── FDA/
│   ├── FDA-Aseptic/
│   ├── FDA-ProcessVal/
│   └── FDA-ProcessInspection/
├── ICH/
│   ├── ICH-Q8R2/
│   ├── ICH-Q9R1/
│   └── ICH-Q10/
├── USP/                    # 76 chapters complete
│   ├── USP-71/
│   ├── USP-85/
│   └── ...
├── ISO/                    # Phase 4–5: cleanrooms + device standards
│   ├── ISO-11040/          # ✅ Complete — Prefilled Syringes Parts 1–8
│   ├── ISO-13408/          # ✅ Complete — Aseptic Processing Parts 1–7
│   └── ISO-14644/          # Phase 4: Cleanroom classification (pending)
├── knowledge/              # Chatbot knowledge base (English-only)
│   ├── INDEX.md
│   ├── PDA/
│   ├── ISPE/
│   ├── PICS/
│   ├── FDA/
│   ├── ICH/
│   ├── USP/
│   ├── ISO/                # Phase 4
│   └── EXPERT/             # Practitioner knowledge base (Phase active)
├── reports.json            # Single source of truth
├── index.html              # Dashboard
└── docs/
    ├── ROADMAP.md          # This file
    ├── SKILLS.md           # Skills list
    └── PROMPT.md           # Generation instructions
```

---

## Estimated Target: ~148–157 Documents (full scope)

| Source | Current | Phase 4–5 Target | Phase 6 Target | Notes |
|--------|---------|-----------------|----------------|-------|
| PDA | ✅ 41 | ~44 | — | Add TR36, TR74, TR76 |
| ISPE | ✅ 14 | 15 | — | GEP pending OCR |
| PIC/S | ✅ 1 | 1 | — | Complete |
| FDA | ✅ 5 | 7–8 | — | Container Closure, Terminal Sterilization, Design Considerations |
| ICH | ✅ 3 | 3 | 5–7 | Q11, Q12 + Q5A-E if client mix warrants |
| USP | ✅ 76 | 79 | — | `<1229>` sub-series + `<151>` + `<790>` |
| ISO | 0 | 5–6 | — | 14644-1/2/3, 17665 (Phase 4) + 14971, 11608-1, 13485 (Phase 5) |
| IEC | 0 | 1 | — | 62366-1 (Phase 5) |
| EU GMP | 0 | — | 3 | Annex 15, Annex 2, Annex 20 |
| Ph. Eur. | 0 | — | 4–5 | 5.1.1, 2.6.1, 2.6.14, 2.9.19/20 |
| WHO GMP | 0 | — | 2 | TRS 961 Annex 6, TRS 1010 |
| **Total** | **140** | **~156** | **~166** | |

The infrastructure (tooling, workflow, dashboard, chatbot) is built and serving 140 documents. All remaining Layer 1 work is content processing. Active focus shifts to Expert Knowledge Base and Layer 2 Operational Frameworks.
