# SterileGMP Knowledge Hub — Comprehensive Scope & Roadmap

This document summarizes the current coverage status, gap analysis, and expansion roadmap for building a comprehensive sterile pharmaceutical manufacturing knowledge hub suitable for COO-level operational decision-making.

Last updated: 2026-04-06 — 140 documents complete (PDA 41, USP 76, ISPE 14, FDA 5, ICH 3, PIC/S 1); added FDA combination products CGMP guidance (2017) + FDA human factors for combo products draft guidance (2016)

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

---

## Expert Knowledge Base — Practitioner Layer

> **Session note — 2026-04-07:** This section was planned in a working session to capture David Kuo's 10 years of sterile manufacturing experience as a structured knowledge layer. It sits alongside Layer 1 (regulatory reference) as interpretive, experiential content — the "what it actually means in practice" companion to official guidelines.

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

### USP General Chapters

| Status | Count | Details |
|--------|-------|---------|
| Complete (bilingual HTML + knowledge MD) | 76 | All with full section_map |
| Skeleton (metadata only) | 0 | — |
| **Total in reports.json** | **76** | |

**Completion: 100%** (76/76 fully processed)

Batch 1 chapters (2026-04-04): 〈71〉 〈85〉 〈151〉 〈161〉 〈788〉 〈1116〉 〈1211〉 + initial set
Batch 2 chapters (2026-04-05):
- 〈1228〉 series: 1228, 1228.1, 1228.3, 1228.4, 1228.5
- Container/Closure: 〈381〉 〈660〉 〈661〉 〈670〉 〈671〉 〈729〉 〈755〉
- Quality Tests: 〈55〉 〈771〉 〈785〉 〈787〉 〈789〉 〈791〉 〈797〉 〈1207〉 〈1660〉 〈1788〉 〈1790〉
Batch 3 chapters (2026-04-06):
- Biocompatibility: 〈87〉 〈88〉
- Water/Analytical: 〈631〉 〈643〉 〈645〉 〈921〉 〈1231〉 (37 pages, 3 sections)
- Packaging/Volume: 〈659〉 〈698〉
- Quality Systems: 〈1029〉 〈1058〉 〈1079〉
- Microbial/Validation: 〈1113〉 〈1225〉 〈1226〉
- CCI Trilogy: 〈1207.1〉 〈1207.2〉 〈1207.3〉
- E&L: 〈1663〉 〈1664〉

### Other Sources

| Source | Status |
|--------|--------|
| PIC/S Annex 1 | ✅ Complete |
| FDA Guidances | Aseptic Processing 2004 ✅ · CPGM 7356.002A Process Inspections ✅ · Process Validation (Jan 2011) ✅ · Combination Products CGMP (Jan 2017) ✅ · HF Studies for Combo Products (Feb 2016 Draft) ✅ |
| ICH Guidelines | Q8(R2) ✅ Q9(R1) ✅ Q10 ✅ — all three complete |
| USP Chapters | 56 complete — all multi-section HTML generated + knowledge MD |
| ISO Standards | Not started |

**Overall: 140 of 140 documents complete (100%)** — PDA 41 + ISPE 14 + FDA 5 + ICH 3 + PIC/S 1 + USP 76 = 140 complete with full bilingual HTML + knowledge MD

---

## Source Organizations in Scope

### Active (118 documents, fully processed)

| # | Source | Scope | Color | Status |
|---|--------|-------|-------|--------|
| 1 | **PDA** | Technical Reports, Points to Consider, Guides | Blue | ✅ 41 complete |
| 2 | **ISPE** | Baseline Guides, Good Practice Guides, GAMP | Green | ✅ 14 complete (1 pending OCR) |
| 3 | **PIC/S** | Annex 1 (2022) — Manufacture of Sterile Medicinal Products | Orange | ✅ 1 complete |
| 4 | **FDA** | Selected Guidance for Industry documents (sterile-relevant only) | Red | ✅ 5 complete |
| 5 | **ICH** | Q8(R2), Q9(R1), Q10 — the "quality trinity" | Teal | ✅ 3 complete |
| 6 | **USP** | 76 General Chapters — sterility, endotoxin, particulates, microbial, container/closure, water, biocompatibility, CCI, E&L, validation, analytical | Gold | ✅ 76 complete |

### Planned — Phase 4 (Cleanrooms + ISO)

| # | Source | Scope | Color | Priority |
|---|--------|-------|-------|----------|
| 7 | **ISO** | 14644 series (cleanrooms), 17665 (steam sterilization), 11608 (injection systems), 14971 (risk mgmt), 13485 (device QMS) | Purple | High — ISO 14644 first |
| 8 | **IEC** | 62366-1 (usability engineering / human factors) — combination product device constituent | Grey | Medium |

### Planned — Phase 6 (EU + Global Market Expansion)

| # | Source | Scope | Color | Priority |
|---|--------|-------|-------|----------|
| 9 | **EU GMP** | Annex 15 (Qualification & Validation), Annex 2 (Biologics), Annex 20 (QRM) | Indigo | High — Annex 15 first |
| 10 | **Ph. Eur.** | Sterility (2.6.1), BET (2.6.14), Particulates (2.9.19/20), 5.1.1 Sterile Preparation Methods | Rose | Medium |
| 11 | **WHO GMP** | TRS 961 Annex 6 (Sterile), TRS 1010 (Biologics) | Slate | Medium — relevant for WHO prequalification clients |

### Low Priority / Market-Specific (assess based on client mix)

| # | Source | Scope | When to Add |
|---|--------|-------|------------|
| 12 | **PMDA + JP** | Japanese regulatory guidance + Japanese Pharmacopoeia | If Japan MAA clients increase |
| 13 | **NMPA + ChP** | China GMP regulations + Chinese Pharmacopoeia | If China market entry planned |
| 14 | **EMA product-specific** | EMA guideline on biological medicines, lyophilization, ATMPs | When ATMP or EU biologics clients onboard |
| 15 | **ICH Q5 series** | Q5A–E: viral safety, stability, characterization for biologics | If biologics API clients increase |
| 16 | **ICH Q11 / Q12** | Drug substance development + lifecycle management | When regulatory submission support expands |

> **ICH scope note:** Only Q8/Q9/Q10 belong in Phase 1–3. The full ICH set (Q1-Q14, S-series, E-series, M-series) is not sterile-manufacturing-specific and belongs in a separate regulatory hub.

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
| ~~**Combination Product Regulatory Framework**~~ | ~~Dual GMP requirements (drug + device) — mandatory for PFS/autoinjector CDMO clients~~ | **FDA CGMP for Combination Products Guidance (2017)** ✅ Done |
| **Injection System Device Standards** | Autoinjectors, pen injectors, wearable injectors — ISO-mandated design verification | **ISO 11608-1** — pending |
| **Medical Device Risk Management** | Device constituent part risk assessment; required for 510(k)/PMA submissions | **ISO 14971** — pending |
| **Human Factors / Usability Engineering** | FDA expects HF validation for all combination products; high inspection risk | **FDA HF for Combo Products (2016 Draft)** ✅ Done; **IEC 62366-1** — pending |
| **Medical Device QMS** | Design controls for device constituent; required alongside drug CGMPs | **ISO 13485** — pending |
| ~~**Package Integrity (USP)**~~ | ~~CCI test method selection and validation — USP equivalent to PDA TR27~~ | **USP 〈1207〉 / 〈1207.1〉 / 〈1207.2〉 / 〈1207.3〉** ✅ Done |
| ~~**Container Materials — Plastic**~~ | ~~Extractables/leachables risk from plastic primary packaging~~ | **USP 〈661〉** ✅ Done |
| ~~**Drug Product Leachables**~~ | ~~Leachable assessment methodology for plastic packaging systems~~ | **USP 〈1663〉 + 〈1664〉** ✅ Done (both extractables and leachables) |

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
| ~~**New source: USP**~~ | ~~\<71\> Sterility Tests~~ | ✅ Done |
| ~~**New source: USP**~~ | ~~\<85\> Bacterial Endotoxins Test~~ | ✅ Done |
| ~~**New source: USP**~~ | ~~\<788\> Particulate Matter in Injections~~ | ✅ Done |
| ~~**New source: USP**~~ | ~~\<1116\> Microbial Control of Aseptic Environments~~ | ✅ Done |
| ~~**New source: USP**~~ | ~~\<1211\> Sterilization and Sterility Assurance~~ | ✅ Done |
| ~~**Additional USP (Batch 2)**~~ | ~~〈1228〉 series, 〈55〉 〈381〉 〈660〉 〈661〉 〈670〉 〈671〉 〈729〉 〈755〉 〈771〉 〈785〉 〈787〉 〈789〉 〈791〉 〈797〉 〈1207〉 〈1660〉 〈1788〉 〈1790〉~~ | ✅ Done (23 chapters) |
| ~~**Additional USP (Batch 3)**~~ | ~~〈87〉 〈88〉 〈631〉 〈643〉 〈645〉 〈659〉 〈698〉 〈921〉 〈1029〉 〈1058〉 〈1079〉 〈1113〉 〈1207.1〉 〈1207.2〉 〈1207.3〉 〈1225〉 〈1226〉 〈1231〉 〈1663〉 〈1664〉~~ | ✅ Done (20 chapters) |
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
| ~~Additional USP~~ | ~~\<787\>, \<1228\>, \<661\>~~ | ✅ Done |
| **Remaining USP** | \<1229\> sub-series (16 skeleton entries), \<151\>, \<790\> | Pending |

### Phase 5: Combination Products Expansion (New)

**Goal:** Add the device-constituent and regulatory framework documents needed to support combination product (PFS, autoinjector, pen injector) manufacturing and client audits.

**Rationale:** TR73/TR73-2 already cover PFS from a pharmaceutical perspective. This phase adds the device-side standards, human factors, and leachables/extractables layer that CDMO clients increasingly require.

#### Priority 1 — Regulatory Framework

| Task | Document | Source | Effort |
|------|----------|--------|--------|
| ~~New source: FDA~~ | ~~CGMP for Combination Products Guidance (2017) — dual GMP requirements~~ | FDA | ✅ Done |
| ~~New source: FDA~~ | ~~Human Factors Studies and Related Clinical Study Considerations in Combination Product Design and Development (2016)~~ | FDA | ✅ Done |
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
| ~~New source: USP~~ | ~~**\<1207\>** — Package Integrity Evaluation (CCI methods)~~ | USP | ✅ Done (+ 1207.1/1207.2/1207.3 trilogy) |
| ~~New source: USP~~ | ~~**\<661\>** — Plastic Packaging Systems and Materials of Construction~~ | USP | ✅ Done |
| ~~New source: USP~~ | ~~**\<660\>** — Containers — Glass~~ | USP | ✅ Done |
| ~~New source: USP~~ | ~~**\<1664\>** — Assessment of Drug Product Leachables~~ | USP | ✅ Done (+ 〈1663〉 Extractables) |

#### Priority 4 — Additional PDA (if available)

| Task | Document | Source | Effort |
|------|----------|--------|--------|
| New PDA TR | **TR76** — Container Closure Integrity Testing Technology (if not yet added) | PDA | Medium |
| New PDA TR | **TR74** — Prefilled Syringe User Requirement Specifications | PDA | Medium |

---

### Phase 6: EU + Global Market Expansion

**Goal:** Add the EU regulatory layer (binding law, not just PIC/S best practice) and WHO standard to serve EU-MAA clients and WHO-prequalification supply chains.

**Trigger:** Add when EU-client volume justifies the effort, or when an EU inspection is scheduled.

#### EU GMP Annexes (European Commission — freely available PDFs)

| Task | Document | Fills This Gap | Effort |
|------|----------|---------------|--------|
| **New source: EU GMP** | **Annex 15** — Qualification and Validation (2015) | EU regulatory companion to ISPE Vol.5; defines lifecycle validation, revalidation triggers | Small |
| **New source: EU GMP** | **Annex 2** — Manufacture of Biological Active Substances and Medicinal Products (2012) | EU GMP for biologics/ATMPs; complements ISPE Vol.6 | Small |
| **New source: EU GMP** | **Annex 20** — Quality Risk Management | EU formal adoption of ICH Q9; paired with Q9(R1) | Small |

#### Ph. Eur. — European Pharmacopoeia (EDQM)

| Task | Document | USP Equivalent | Effort |
|------|----------|---------------|--------|
| **New source: Ph. Eur.** | 5.1.1 — Methods of Preparation of Sterile Products | USP 〈1211〉 | Small |
| **New source: Ph. Eur.** | 2.6.1 — Sterility (test method) | USP 〈71〉 | Small |
| **New source: Ph. Eur.** | 2.6.14 — Bacterial Endotoxins | USP 〈85〉 | Small |
| **New source: Ph. Eur.** | 2.9.19 + 2.9.20 — Particulate Contamination | USP 〈788〉 〈790〉 | Small |

#### WHO GMP (freely available from WHO website)

| Task | Document | When Needed | Effort |
|------|----------|-------------|--------|
| **New source: WHO** | TRS 961 Annex 6 — Sterile Pharmaceutical Products | WHO prequalification clients; global health supply chains | Small |
| **New source: WHO** | TRS 1010 — Biological Products | WHO biologics prequalification | Small |

---

### Phase 7: COO Decision Support Layer (Future)

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
| ICH Q1–Q7, Q13–Q14 | General pharma — not sterile-specific. Belongs in a separate regulatory hub. |
| ICH S-series, E-series, M-series | Safety, efficacy, multidisciplinary — not manufacturing-focused. |
| ASTM standards | ASTM E2500 (verification) is influential but too niche for this hub. |
| ISO 11135 (EtO sterilization) | Rarely used for sterile injectables; niche application. |
| ISO 11137 (Radiation sterilization) | Niche sterilization method for devices, not primary for pharma injectables. |
| ISO 11608-4/5 (Electronic/automated injection systems) | Advanced device electronics — out of scope unless smart device programs are added. |
| ISO 11040 series (Prefilled syringes — glass barrels) | Component-level spec; TR73 covers the finished product perspective adequately. |
| IEC standards other than 62366-1 | Electrical safety, EMC, cybersecurity — outside pharma manufacturing GMP scope. |
| Full PDA TR catalog | Many TRs cover non-sterile topics (oral solids, APIs). Only sterile-relevant TRs are included. |
| BP (British Pharmacopoeia) | Largely harmonized with Ph. Eur. post-Brexit. Add Ph. Eur. first; BP overlap is ~95%. |
| ChP (Chinese Pharmacopoeia) | Add only if China in-market manufacturing or NMPA registration is in scope. |
| ANVISA / LatAm regulations | Region-specific; add only if Latin America supply is a strategic priority. |

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

## Estimated Target: ~145-155 Documents (full scope)

| Source | Current | Phase 4–5 Target | Phase 6 Target | Notes |
|--------|---------|-----------------|----------------|-------|
| PDA | ✅ 41 | ~44 | — | Add TR36 (lyophilization), TR74 (PFS URS), TR76 (CCI technology) |
| ISPE | ✅ 14 | 15 | — | Remaining: GEP (scanned — OCR required) |
| PIC/S | ✅ 1 | 1 | — | Annex 1 complete |
| FDA | ✅ 3 | 6–7 | — | Add CGMP Combination Products, HF Guidance, Design Considerations |
| ICH | ✅ 3 | 3 | 5–7 | Q11, Q12 + Q5A-E (biologics) if client mix warrants |
| USP | ✅ 56 | 59 | — | Add 〈1229〉 sub-series completion + USP-151, USP-790 |
| ISO | 0 | 5–6 | — | 14644-1/2/3, 17665 (Phase 4) + 14971, 11608-1, 13485 (Phase 5) |
| IEC | 0 | 1 | — | 62366-1 (usability engineering) — Phase 5 |
| EU GMP | 0 | — | 3 | Annex 15, Annex 2, Annex 20 — Phase 6 |
| Ph. Eur. | 0 | — | 4–5 | 5.1.1, 2.6.1, 2.6.14, 2.9.19/20 — Phase 6 |
| WHO GMP | 0 | — | 2 | TRS 961 Annex 6, TRS 1010 — Phase 6 |
| PMDA/JP | 0 | — | TBD | Add only if Japan MAA client volume justifies |
| **Total** | **118** | **~135** | **~148–155** | Phase 6 adds EU + global coverage layer |

The infrastructure (tooling, workflow, dashboard, chatbot) is already built and serving 118 documents. All remaining work is content processing — the hardest part of the project is done.
