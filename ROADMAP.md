# SterileGMP Knowledge Hub — Comprehensive Scope & Roadmap

This document summarizes the current coverage status, gap analysis, and expansion roadmap for building a comprehensive sterile pharmaceutical manufacturing knowledge hub suitable for COO-level operational decision-making.

Last updated: 2026-04-02 (post-PtC-11 ATMP Plasmids/Vectors + PtC-Remote GMP Inspections push — 62 documents complete)

---

## System Architecture — Three Layers

The hub is designed as a three-layer knowledge system. Skills (slash commands) read from all three layers to produce site-grounded, regulation-backed outputs.

```
Layer 1: Regulatory / Technical Reference    knowledge/
  PDA, ISPE, PIC/S, FDA, ICH, USP, ISO      ← This repo (public)

Layer 2: Operational Frameworks              .claude/skills/_shared/
  Templates, decision frameworks,            ← This repo (public)
  checklists, reference tables

Layer 3: Site-Specific Documents             ~/Amaran-Site-Knowledge/
  Desensitized SOPs, WIs,                   ← Separate private repo
  IQ/OQ/PQ reports, validation reports
```

**Why separate repos for Layer 3:** This repo is public. Site SOPs contain proprietary process logic and may reflect client product information. Even after desensitization, the document structure itself carries IP risk. Layer 3 lives in a private repo, read locally by skills.

### Layer 2 — Operational MD Files to Build (~27 files)

| Type | Files | Used by |
|------|-------|---------|
| Output templates | deviation report, CAPA, OOS worksheet, CC form, SOP structure, PQR chapter, FMEA, IQ/OQ/PQ scope, tech transfer checklist, supplier audit | All major skills |
| Decision frameworks | deviation classification, change classification, batch disposition, HBEL/MACO calc, GAMP category, supplier type matrix | deviation, change-control, batch-release, hbel-screen, csv-plan |
| Checklists | EM excursion response, inspection filling area, inspection QC lab, inspection warehouse, client audit data room, tech transfer 6-stage | em-excursion, inspection-prep, client-audit, tech-transfer |
| Reference tables | Annex 1 section map, FDA 483 common observations, validation trigger matrix, DI 9-Box framework, CPV statistical guide | annex1-check, inspection-prep, validation-xref, di-check, cpv-review |

### Layer 3 — Site Documents Pipeline

Layer 3 is fed by the Amaran AI SOP project (`~/Amaran-AI-SOP/`), which already has:
- `sop_to_markdown.py` — SOP → Markdown conversion (v3.7)
- `amaran_redact.py` — desensitization script
- 9 pilot SOPs converted and verified

**Human review is required for every desensitized document before it enters Layer 3.** This step cannot be automated.

---

## Skills System — 26 Slash Commands

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

---

## Delivery Timeline (4 hrs/day)

| Month | Milestone |
|-------|-----------|
| **Week 2–3** | P0 skills live (`/deviation`, `/change-control`); Layer 2 core frameworks done |
| **Month 1–1.5** | All P1 skills live; Layer 2 complete |
| **Month 2** | Layer 1 regulatory docs complete (FDA, ICH, USP, ISO); P2 skills live |
| **Month 3–4** | All P3 skills complete; Layer 3 pilot SOPs integrated (30+ docs) |
| **Month 5–6** | Full three-layer integration; all 26 skills stable |

**Bottlenecks (time cannot be compressed):**
- Layer 3 desensitization review — human review required per document; ~20 min/SOP
- Skills iteration — first version always needs 2–3 real-case test cycles before stable

---

---

## Current Status Summary

### PDA Technical Reports & Points to Consider

| Status | Count | Details |
|--------|-------|---------|
| Complete | 39 | All sections generated, merged, verified (incl. TR1, TR27, TR29, TR49, TR86) |
| Skeleton (metadata only) | 0 | — |
| **Total in reports.json** | **39** | |

**Completion: 100%** (39/39 PDA docs complete)

### ISPE Guidelines

| Status | Count | Details |
|--------|-------|---------|
| Complete | 14 | Vol.3, Vol.4, Vol.5, Vol.6, HVAC, Vol.7, SUT, GAMP 5 (2nd Ed.), Sampling, CTC Mapping, IT Infrastructure, QualityCulture, ProcessGas, TechTransfer |
| Not yet started | 1 | GEP (scanned PDF — OCR required) |
| **Total** | **~15** | |

**Completion: 93%** (14/15)

### Other Sources

| Source | Status |
|--------|--------|
| PIC/S Annex 1 | ✅ Complete |
| FDA Guidances | Aseptic Processing 2004 ✅ | CPGM 7356.002A Process Inspections ✅ | Process Validation (Jan 2011) ✅ |
| ICH Guidelines | Q8(R2) ✅ Q9(R1) ✅ Q10 ✅ — all three complete |
| USP Chapters | Not started |
| ISO Standards | Not started |

**Overall: 60 of ~65-70 target documents complete (approx. 90%)** — PDA 39 + ISPE 14 + FDA 3 + ICH 3 + PIC/S 1 = 60

---

## Source Organizations in Scope

| # | Source | Scope | Color |
|---|--------|-------|-------|
| 1 | **PDA** | Technical Reports, Points to Consider, Guides | Blue |
| 2 | **ISPE** | Baseline Guides, Good Practice Guides, GAMP | Green |
| 3 | **PIC/S** | Annex 1 (2022) — Manufacture of Sterile Medicinal Products | Orange |
| 4 | **FDA** | Selected Guidance for Industry documents (sterile-relevant only) | Red |
| 5 | **ICH** | Q8(R2), Q9(R1), Q10 only (the "quality trinity") | Purple |
| 6 | **USP** | Selected General Chapters (sterility, endotoxin, particulates, microbial) | Gold |
| 7 | **ISO** | 14644 series (cleanrooms), 17665 (steam sterilization), 11608 (injection systems), 14971 (risk mgmt), 13485 (device QMS) | Purple |
| 8 | **IEC** | 62366-1 (usability engineering / human factors) — combination product device constituent | Grey |

> **ICH scope note:** Only Q8/Q9/Q10 belong in this hub. The full ICH guideline set (Q1-Q14, S-series, E-series, M-series) covers all pharmaceutical manufacturing and is not sterile-specific. A separate "Pharmaceutical Regulatory Knowledge Hub" would be the appropriate home for the complete ICH library.

> **IEC scope note:** IEC 62366-1 is included specifically for combination product human factors validation. Other IEC standards (electrical safety, EMC) are out of scope.

---

## Coverage by Domain

### Well Covered (strong existing content)

| Domain | Key Documents | Assessment |
|--------|--------------|------------|
| Aseptic Processing | TR22, TR62, PtC-1, PtC-12, PtC-Isolators, Guide No.1 | Excellent |
| Environmental Monitoring | TR13, TR13-2, TR88 | Excellent |
| Contamination Control (CCS) | TR90, TR70 | Excellent |
| Container/Closure & Packaging | TR73, TR73-2, TR85, TR87, TR43 | Excellent |
| Container Closure Integrity (CCI) | TR27 ✅ | Good |
| Sterilizing Filtration | TR26 | Good |
| Process Validation | TR60 | Good |
| Single-Use Systems | TR66 | Good |
| Supply Chain & GDP | TR39, TR46, TR52, TR68 | Good (over-represented) |
| Facility Design | ISPE Vol.3, PtC-14 | Good |
| C&Q / Qualification | ISPE Vol.5 | Good |
| ATMP / Cell & Gene Therapy | PtC-13, PtC-14 | Good |
| Data Integrity | TR84 | Covered |
| Regulatory / Change Control | TR91, TR73-2 | Covered |
| Technology Transfer | TR65 | Good |
| Combination Products (partial) | TR73 (PFS), TR73-2 (MDR staked needle), TR27 (CCI), TR85 (visible particle), TR87 (glass) | Partial — device/regulatory layer missing |

### Critical Gaps

| Gap | Why It Matters | Recommended Source |
|-----|---------------|-------------------|
| **Regulatory anchor (EU/PIC/S)** | Annex 1 is THE document inspectors cite globally; referenced by nearly every PDA TR in the hub | **PIC/S Annex 1 (2022)** ✅ Done |
| **Regulatory anchor (US)** | FDA equivalent; basis for 483 observations in sterile manufacturing | **FDA Aseptic Processing Guidance (2004)** ✅ Done |
| **Quality Risk Management framework** | Cited by TR90, TR22, TR60, ISPE Vol.5, ISPE Vol.7 — the methodology foundation | **ICH Q9(R1)** ✅ Done |
| **Pharmaceutical Quality System** | The PQS framework that TR91, TR84, TR60 sit inside | **ICH Q10** ✅ Done |
| **Pharmaceutical Development** | Design space / QbD foundation for TR60, TR26 | **ICH Q8(R2)** ✅ Done |
| **Water & Steam Systems** | #1 cause of batch loss and plant shutdowns | **ISPE Vol.4** ✅ Done |
| **HVAC** | Every cleanroom depends on this; capital investment decisions | **ISPE HVAC** ✅ Done |
| **Container Closure Integrity (CCI)** | Dedicated CCI testing methodology | **PDA TR27** ✅ Done |
| **Sterility Testing** | The fundamental release test for sterile products | **USP \<71\>** — pending |
| **Endotoxin / Pyrogen Testing** | Endotoxin excursions halt production lines | **USP \<85\>** — pending |
| **Particulate Matter** | Injectable release requirement | **USP \<788\>** — pending |
| **Microbial Control of Aseptic Environments** | EM program design standard | **USP \<1116\>** — pending |
| **Sterilization & Sterility Assurance** | Foundation for all sterilization methods | **USP \<1211\>** — pending |
| **Lyophilization** | Major sterile dosage form, completely absent | **PDA TR36** — pending |
| **Cleanroom Standards** | Referenced by every facility document | **ISO 14644-1/2/3** — pending |
| **Combination Product Regulatory Framework** | Dual GMP requirements (drug + device) — mandatory for PFS/autoinjector CDMO clients | **FDA CGMP for Combination Products Guidance (2017)** — pending |
| **Injection System Device Standards** | Autoinjectors, pen injectors, wearable injectors — ISO-mandated design verification | **ISO 11608-1** — pending |
| **Medical Device Risk Management** | Device constituent part risk assessment; required for 510(k)/PMA submissions | **ISO 14971** — pending |
| **Human Factors / Usability Engineering** | FDA expects HF validation for all combination products; high inspection risk | **IEC 62366-1** — pending |
| **Medical Device QMS** | Design controls for device constituent; required alongside drug CGMPs | **ISO 13485** — pending |
| **Package Integrity (USP)** | CCI test method selection and validation — USP equivalent to PDA TR27 | **USP \<1207\>** — pending |
| **Container Materials — Plastic** | Extractables/leachables risk from plastic primary packaging | **USP \<661\>** — pending |
| **Drug Product Leachables** | Leachable assessment methodology for plastic packaging systems | **USP \<1664\>** — pending |

### COO-Specific Knowledge Gaps

Beyond guidelines, a COO needs decision-oriented, synthesized knowledge:

| Gap | Description |
|-----|------------|
| **Inspection readiness** | Common FDA 483 observations for sterile facilities (publicly available from FDA database) |
| **Deviation / CAPA management** | Triage frameworks, investigation resource allocation, CAPA timelines |
| **Batch disposition decision-making** | When to release, reject, or reprocess — risk-based decision trees |
| **Operational metrics** | OEE, batch success rate, right-first-time, cycle time benchmarks |
| ~~**Quality culture**~~ | ~~ISPE-PDA Quality Culture guide~~ ✅ Done — ISPE-QC (RCA, human error taxonomy, CAPA design, maturity model) |

---

## Phased Expansion Roadmap

### Phase 1: Complete Current Sources (PDA 100% + Top ISPE)

**Goal:** Finish what's started before adding new source organizations.

| Task | Document | Effort |
|------|----------|--------|
| ~~Complete PDA skeleton~~ | ~~TR41: Virus Retentive Filtration~~ | ✅ Done |
| ~~Complete PDA skeleton~~ | ~~TR54: Formalized Risk Assessment for Excipients~~ | ✅ Done |
| ~~Complete PDA skeleton~~ | ~~TR56: Phase-Appropriate Quality Systems for Biologics~~ | ✅ Done |
| ~~Complete PDA skeleton~~ | ~~TR62: Manual Aseptic Processes~~ | ✅ Done |
| ~~Process ISPE #3~~ | ~~ISPE HVAC~~ | ✅ Done |
| ~~Process ISPE #4~~ | ~~ISPE Vol.4: Water & Steam Systems~~ | ✅ Done |
| ~~Process ISPE #5~~ | ~~ISPE Vol.7: Risk-Based Manufacture~~ | ✅ Done |
| ~~Process ISPE #6~~ | ~~ISPE SUT: Single-Use Technology~~ | ✅ Done |
| ~~Process ISPE #7~~ | ~~ISPE GAMP 5~~ | ✅ Done |

**Phase 1 complete.** Next: Phase 2 (PIC/S Annex 1 → FDA → ICH).

### Phase 2: Regulatory Anchors + ICH Foundation

**Goal:** Add the regulatory backbone that every existing document references.

| Task | Document | Effort |
|------|----------|--------|
| ~~**New source: PIC/S**~~ | ~~PIC/S Annex 1 (2022)~~ | ✅ Done |
| ~~**New source: FDA**~~ | ~~Aseptic Processing Guidance (2004)~~ | ✅ Done |
| **New source: FDA** | Process Validation Guidance (2011, Rev 2) | Medium |
| ~~**New source: FDA**~~ | ~~Process Inspection Guidance (CPGM 7356.002A)~~ | ✅ Done |
| ~~**New source: ICH**~~ | ~~Q9(R1) Quality Risk Management~~ | ✅ Done |
| ~~**New source: ICH**~~ | ~~Q10 Pharmaceutical Quality System~~ | ✅ Done |
| ~~**New source: ICH**~~ | ~~Q8(R2) Pharmaceutical Development~~ | ✅ Done |

### Phase 3: Pharmacopeial Standards + Cleanrooms

**Goal:** Add the test methods and standards that define "how you measure compliance."

| Task | Document | Effort |
|------|----------|--------|
| **New source: USP** | \<71\> Sterility Tests | Small |
| **New source: USP** | \<85\> Bacterial Endotoxins Test | Small |
| **New source: USP** | \<788\> Particulate Matter in Injections | Small |
| **New source: USP** | \<1116\> Microbial Control of Aseptic Environments | Small |
| **New source: USP** | \<1211\> Sterilization and Sterility Assurance | Medium |
| **New source: ISO** | ISO 14644-1/2/3 (Cleanroom classification) | Medium |

### Phase 4: Topic Gap-Fillers + Remaining ISPE

**Goal:** Fill remaining content gaps and complete the ISPE library.

| Task | Document | Effort |
|------|----------|--------|
| Fill lyophilization gap | PDA TR36 (or equivalent) | Medium |
| Fill CCI gap | PDA TR27 (Package Integrity) | Medium |
| Fill steam sterilization gap | ISO 17665 | Medium |
| ~~Complete ISPE #9-15~~ | ~~CTC, TechTransfer, Sampling, ProcessGas, QualityCulture, IT~~ | ✅ Done (6/7) |
| Remaining ISPE | GEP (scanned — OCR required) | Pending |
| Additional FDA | Container Closure Guidance, Terminal Sterilization Guidance | Medium |
| Additional USP | \<787\>, \<790\>, \<1228\>, \<1229\>, \<382\>, \<661\> | Medium (cumulative) |

### Phase 5: Combination Products Expansion (New)

**Goal:** Add the device-constituent and regulatory framework documents needed to support combination product (PFS, autoinjector, pen injector) manufacturing and client audits.

**Rationale:** TR73/TR73-2 already cover PFS from a pharmaceutical perspective. This phase adds the device-side standards, human factors, and leachables/extractables layer that CDMO clients increasingly require.

#### Priority 1 — Regulatory Framework

| Task | Document | Source | Effort |
|------|----------|--------|--------|
| New source: FDA | CGMP for Combination Products Guidance (2017) — dual GMP requirements | FDA | Small |
| New source: FDA | Human Factors Studies and Related Clinical Study Considerations in Combination Product Design and Development (2016) | FDA | Small |
| New source: FDA | Design Considerations for Combination Products (2019 Draft) | FDA | Small |

#### Priority 2 — Device Standards (ISO/IEC)

| Task | Document | Source | Effort |
|------|----------|--------|--------|
| New source: ISO | **ISO 14971** — Risk Management for Medical Devices | ISO | Medium |
| New source: ISO | **ISO 11608-1** — Needle-Based Injection Systems: Requirements & Test Methods | ISO | Medium |
| New source: ISO | ISO 11608-3 — Finished containers for injection systems | ISO | Small |
| New source: ISO | **ISO 13485** — Medical Devices QMS | ISO | Medium |
| New source: IEC | **IEC 62366-1** — Usability Engineering / Human Factors for Medical Devices | IEC | Medium |

#### Priority 3 — Container & Leachables (USP)

| Task | Document | Source | Effort |
|------|----------|--------|--------|
| New source: USP | **\<1207\>** — Package Integrity Evaluation (CCI methods) | USP | Small |
| New source: USP | **\<661\>** — Plastic Packaging Systems and Materials of Construction | USP | Small |
| New source: USP | **\<660\>** — Containers — Glass | USP | Small |
| New source: USP | **\<1664\>** — Assessment of Drug Product Leachables | USP | Medium |

#### Priority 4 — Additional PDA (if available)

| Task | Document | Source | Effort |
|------|----------|--------|--------|
| New PDA TR | **TR76** — Container Closure Integrity Testing Technology (if not yet added) | PDA | Medium |
| New PDA TR | **TR74** — Prefilled Syringe User Requirement Specifications | PDA | Medium |

---

### Phase 6: COO Decision Support Layer (Future)

**Goal:** Synthesize cross-document knowledge into decision-oriented resources.

| Task | Description |
|------|------------|
| FDA 483 analysis | Common sterile manufacturing observations — cross-referenced to hub documents |
| Deviation triage framework | Synthesized from ICH Q9, Q10, TR88, TR90 |
| Batch disposition decision trees | Risk-based release/reject/reprocess guidance |
| Inspection readiness checklists | Per-area checklists mapped to Annex 1, FDA guidance |
| Operational KPI benchmarks | Industry benchmarks for sterile manufacturing metrics |

---

## Documents NOT in Scope

These are explicitly excluded to keep the hub focused on sterile pharmaceutical manufacturing:

| Document | Why Excluded |
|----------|-------------|
| ICH Q1-Q7, Q11-Q14 | General pharma — not sterile-specific. Belongs in a separate regulatory hub. |
| ICH S-series, E-series, M-series | Safety, efficacy, multidisciplinary — not manufacturing-focused. |
| WHO TRS series | Only relevant if audience includes WHO-prequalified market manufacturers. |
| European Pharmacopoeia (EP) | Largely mirrors USP for sterile methods. Add only if EU-specific chapter numbers are needed. |
| ASTM standards | ASTM E2500 (verification) is influential but too niche for this hub. |
| ISO 11135 (EtO sterilization) | Rarely used for sterile injectables. |
| ISO 11137 (Radiation sterilization) | Niche sterilization method for devices, not primary for pharma injectables. |
| ISO 11608-4/5 (Electronic/automated injection systems) | Advanced device electronics — out of scope unless smart device programs are added. |
| ISO 11040 series (Prefilled syringes — glass barrels) | Component-level spec; TR73 covers the finished product perspective adequately. |
| IEC standards other than 62366-1 | Electrical safety, EMC, cybersecurity — outside pharma manufacturing GMP scope. |
| ISO 13485 full QMS implementation | May be added in Phase 5 if combination product client audit demand increases. |
| Full PDA TR catalog | Many TRs cover non-sterile topics (oral solids, APIs). Only sterile-relevant TRs are included. |

---

## Folder Structure (Target State)

```
/
├── PDA/                    # PDA Technical Reports, Points to Consider, Guides
│   ├── TR13/
│   ├── TR22/
│   ├── TR26/
│   ├── TR27/               # Future: Container Closure Integrity
│   ├── TR36/               # Future: Lyophilization
│   └── ...
├── ISPE/                   # ISPE Baseline Guides & Good Practice Guides
│   ├── ISPE-Vol3/
│   ├── ISPE-Vol4/
│   ├── ISPE-Vol5/
│   ├── ISPE-HVAC/
│   └── ...
├── PICS/                   # PIC/S (future)
│   └── PICS-Annex1/
├── FDA/                    # FDA Guidance for Industry (scaffolded, content pending)
│   ├── FDA-Aseptic/
│   ├── FDA-ProcessVal/
│   └── FDA-ProcessInspection/
├── ICH/                    # ICH Q8, Q9, Q10 only (future)
│   ├── ICH-Q8R2/
│   ├── ICH-Q9R1/
│   └── ICH-Q10/
├── USP/                    # USP General Chapters (future)
│   ├── USP-71/
│   ├── USP-85/
│   ├── USP-788/
│   ├── USP-1116/
│   └── USP-1211/
├── ISO/                    # ISO Standards (future)
│   └── ISO-14644/
├── knowledge/              # Chatbot knowledge base (English-only)
│   ├── INDEX.md
│   ├── PDA/
│   ├── ISPE/
│   ├── PICS/               # Future
│   ├── FDA/                # Future
│   ├── ICH/                # Future
│   ├── USP/                # Future
│   └── ISO/                # Future
├── reports.json            # Single source of truth
├── index.html              # Dashboard
└── ROADMAP.md              # This file
```

---

## Estimated Target: ~80-90 Documents (revised with combination products)

| Source | Current | Target | Notes |
|--------|---------|--------|-------|
| PDA | 39 | ~42 | Add TR36 (lyophilization), TR74 (PFS URS), TR76 (CCI technology); TR27 ✅ |
| ISPE | 9 | 15 | Complete GEP, CTC, TechTransfer, ProcessGas, QualityCulture, IT |
| PIC/S | 1 | 1 | Annex 1 ✅ |
| FDA | 3 | 6-7 | Aseptic ✅, Process Val ✅, Process Inspection ✅ + CGMP Combination Products, HF Guidance, Design Considerations |
| ICH | 3 | 3 | Q8(R2) ✅ Q9(R1) ✅ Q10 ✅ |
| USP | 0 | 8-10 | \<71\>, \<85\>, \<788\>, \<1116\>, \<1211\> (Phase 3) + \<1207\>, \<660\>, \<661\>, \<1664\> (Phase 5) |
| ISO | 0 | 5-6 | 14644-1/2/3, 17665 (Phase 3) + 14971, 11608-1, 11608-3, 13485 (Phase 5) |
| IEC | 0 | 1 | 62366-1 (usability engineering) — new source, Phase 5 |
| **Total** | **55 (all complete)** | **~80-90** | Combination products expansion adds ~15 documents |

The infrastructure (tooling, workflow, dashboard, chatbot) is already built. The remaining work is content processing — the hardest part of the project is done.
