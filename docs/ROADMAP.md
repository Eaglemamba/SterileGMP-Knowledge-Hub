# SterileGMP Knowledge Hub — Comprehensive Scope & Roadmap

This document summarizes the current coverage status, gap analysis, and expansion roadmap for building a comprehensive sterile pharmaceutical manufacturing knowledge hub suitable for COO-level operational decision-making.

Last updated: 2026-04-27 — 183 documents complete (PDA 43, USP 76, ISPE 14, FDA 15, ICH 6, PIC/S 5, ISO 17, Ph.Eur. 7); added PDA TR74 (Revised 2026) "Reprocessing and Reworking of Biologicals" — 7 sections, 9 HTML files (sec5/sec6 A/B split), 41 figures+tables extracted; generated via parallel agent dispatch. Earlier today (2026-04-27): extract-figs clipping fixes — figure caption strip extends up to image bottom (axis labels no longer cut), table clip extends downward through note/source/footnote lines (capped 140pt). Re-extracted full corpus: 1688 figures + 1505 tables = 3193 entries (was 2632). Previously (2026-04-22): Figures & Tables Gallery revamp complete — full-corpus gap-fill audit across 132 docs recovered 73 figures (2559 → 2632 entries, 96% recovery); 4 residual not-founds accepted as precision/recall trade-offs. Renovated root folder structure (utility scripts → `scripts/`, legacy `index-v2.html` → `archive/`); TR73 expanded from Sections 12–18 partial to full 18-section complete version (+11 bilingual sections, p1–p102); added topic synthesis `knowledge/topics/depyrogenation-tunnel-validation.md`.

---

## System Architecture

The hub is designed as a layered knowledge system. Skills (slash commands) read from all layers to produce site-grounded, regulation-backed outputs.

```
Education Layer: Document Discovery & Learning   index.html / learning-path.html / mindmap.html
  Bilingual dashboard, department curriculum,    ← This repo (public)  ✅ COMPLETE
  interactive mind map — powered by reports.json
  + gmp-curriculum-data.js

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

**Design Principle — Knowledge Cycle, Not Just Stack:**
This architecture is not a one-way pipeline from reference → practice. It operates as a DIKW cycle (Data → Information → Knowledge → Application → feedback), aligned with PDA TR60 §6.5.1's model and ICH Q10 §1.6.1's KM definition. Concretely:
- **Layer 1** (regulatory MDs) supplies *information*; **Expert KB** adds *knowledge* (interpretation, judgment, failure modes)
- **Layer 2 skills** both **consume** knowledge (reading from Layer 1 + Expert KB) and **produce** knowledge (skill outputs feed back into Expert KB and Layer 3 as operational records)
- **Education Layer** serves as the KM delivery mechanism — converting specialized knowledge into forms usable by non-specialist personnel (TR60 §6.5.3: "KM cannot be in a form usable only by specialized personnel")
- System design follows **FAIR principles** (Findable, Accessible, Interoperable, Reusable) per TR60 §6.5.2: reports.json as single index (F), knowledge MDs in plain Markdown (A/I), skills as reusable frameworks (R)
- **CDMO knowledge isolation**: client product knowledge stays in Layer 3 (private repo); platform/process knowledge is shared across layers (public repo). This mirrors TR60 Ch7's PTT model adapted for multi-client CDMO context.

**Why separate repos for Layer 3:** This repo is public. Site SOPs contain proprietary process logic and may reflect client product information. Even after desensitization, the document structure itself carries IP risk. Layer 3 lives in a private repo, read locally by skills.

---

## Current Status at a Glance

| Component | Status | Count |
|-----------|--------|-------|
| Education Layer — Dashboard & Learning UI | ✅ Complete | 4 tools (index.html, learning-path.html, mindmap.html, quiz.html) |
| Education Layer — Curriculum Data | ✅ Complete | 8 departments × 3 tiers (gmp-curriculum-data.js) |
| Education Layer — Quiz System | ✅ Complete | /quiz skill + quiz.html tracker + knowledge/exams/ bank |
| Layer 1 — Regulatory Reference | ✅ Complete | 182 documents |
| Expert Knowledge Base | ⬜ Not started | 9 files planned |
| Layer 2 — Operational Frameworks | ⬜ Not started | ~27 files planned |
| Layer 2 — Skills System | ⬜ Not started | 26 slash commands planned |
| Layer 3 — Site Documents | 🔄 In progress | 9 pilot SOPs converted |

## Active Priorities

1. **Expert Knowledge Base** — start with SA25 lifecycle (`#1`) or Lyo ANDA end-to-end (`#2`); see full plan below
2. **Layer 2 Operational Frameworks** — P0 skills first (`/deviation`, `/change-control`) with supporting templates
3. **Layer 1 additions requiring new PDFs** — ISO 14644-2/3, ISO 17665, PDA TR36 (FDA Container Closure / Terminal Sterilization ✅ done)
4. **Warehouse Practice Expansion (Phase 4b)** — PIC/S PE 011 → WHO TRS 961 Annex 6 → ICH Q1A(R2); plus topic synthesis + exam bank
5. **Layer 3** — resume SOP desensitization via `~/Amaran-AI-SOP/`; human review required per document

> **Raw PDFs queue status (2026-04-14):**
> - ❌ **Blocked — scanned PDF (OCR required):** `PDA_Point to Consider for Sensitivity to Oxidation by Peroxide_2020.pdf`
> - ❌ **Blocked — OCR required:** `ISPE-Good Engineering Practice.pdf`
> - ❌ **Blocked — scanned PDF:** `N. BS EN ISO14971_2019.pdf`
> - ❌ **Blocked — font encoding failure:** `CEN EN ISO 15225.pdf`

---

## Education Layer — Document Discovery & Learning Tools ✅ COMPLETE

Three browser-based tools provide document discovery, role-based learning, and knowledge visualization. All data is driven by `reports.json` and `gmp-curriculum-data.js` — no hardcoded content.

### index.html — Document Index Dashboard

Bilingual (EN/ZH-TW) searchable document index with deep search across titles, summaries, and section content.

- Source-based filtering (PDA, ISPE, FDA, ICH, PIC/S, USP, ISO, Ph.Eur.)
- Tag-based filtering with color-coded topic pills
- Reading history with localStorage persistence
- Relevance scoring with per-field match badges
- Sort by relevance, date, or source
- Links to: `learning-path.html`, `mindmap.html`, `quiz.html`

### learning-path.html — Department Curriculum Tracker

Role-based reading tracker powered by `gmp-curriculum-data.js`. Covers 8 departments × 3 tiers.

| Department | Icon | Tier 1 Foundation | Tier 2 Core | Tier 3 Advanced |
|-----------|------|-------------------|-------------|-----------------|
| Quality Assurance | 🛡️ | 5 docs | 8 docs | 4 docs |
| Quality Control | 🔬 | 7 docs | 16 docs | 12 docs |
| Manufacturing / Production | ⚙️ | 5 docs | 7 docs | 6 docs |
| Engineering & Maintenance | 🔧 | 5 docs | 6 docs | 5 docs |
| Regulatory Affairs | 📋 | 5 docs | 6 docs | 5 docs |
| Warehouse | 🏗️ | 6 docs | 6 docs | 4 docs |
| Technical Service | 🛠️ | 5 docs | 7 docs | 5 docs |
| Biotechnology IT (BT) | 💻 | 5 docs | 6 docs | 5 docs |

Features: checkbox progress tracking, Required/Optional badges, per-department progress rings, overall completion percentage — all persisted in localStorage. Quiz score badges (🎯 95%) appear on each doc row when a quiz has been attempted.

### quiz.html — Quiz Score Tracker

Browser-based quiz history dashboard. Stores exam results in localStorage (`gmp-quiz-results`). Receives results via paste-JSON workflow from Claude Code `/quiz` skill.

| Tab | Function |
|-----|----------|
| Quiz History | All attempts grouped by doc_key, with per-question breakdown and color-coded score pills |
| Record Result | Paste JSON output from Claude → validate → save to localStorage |
| How to Use | Step-by-step instructions |

Score tiers: ≥80% = green, 60–79% = yellow, <60% = red.

### /quiz Skill — Interactive Exam Conductor

Claude Code slash command (`.claude/commands/quiz.md`). Accepts a doc key or topic path:

```
/quiz TR22
/quiz topics/APS-filling-isolator
/quiz PICS-Annex15
```

Workflow: resolve doc → read knowledge MD (or exam bank JSON from `knowledge/exams/`) → silently design 10 questions → ask one at a time → score each answer immediately → output final JSON block for pasting into `quiz.html`.

Question bank directory: `knowledge/exams/` — pre-written questions in JSON format for repeatability. First bank: `topics-APS-filling-isolator.json` (10 questions, derived from live exam 2026-04-10, score 95/100).

### mindmap.html — Knowledge Mind Map

Interactive D3.js + Markmap-powered visualization of the entire knowledge base. Three view modes:

| View | Description |
|------|-------------|
| By Department | Shows 8 department tracks with Foundation → Core → Advanced hierarchy |
| By Topic | Groups documents into 10 thematic clusters (Aseptic Processing, Sterilization & Filtration, Container Closure, Quality Systems, Environmental Monitoring, Testing Methods, Facilities & Utilities, Advanced Therapies, Regulatory & Compliance, Emerging Technologies) |
| By Source | Organizes all 182 documents by issuing organization (PDA, ISPE, FDA, ICH, PIC/S, USP, ISO, Ph.Eur.) |

### gmp-curriculum-data.js — Curriculum Data File

Single source of truth for learning path structure. Consumed by `learning-path.html` and `mindmap.html`.

- `departments[]` — 8 department objects (QA, QC, Production, Engineering, RA, Warehouse, Technical Service, BT/IT), each with `tiers[]` containing curated `docs[]` (key + required flag + rationale)
- `topicClusters[]` — 10 topic clusters with tag-based matching for mind-map "By Topic" view
- `sourceOrgs{}` — 8 source organization labels and brand colors
- Helper functions: `generateDeptMarkdown()`, `generateTopicMarkdown()`, `generateSourceMarkdown()` (used by Markmap renderer)

---

## Layer 1: Regulatory Reference — ✅ COMPLETE (182 documents)

### Completion Summary

| Source | Count | Scope | Status |
|--------|-------|-------|--------|
| **PDA** | 42 | Technical Reports, Points to Consider, Guides | ✅ Complete |
| **USP** | 76 | General Chapters — sterility, endotoxin, particulates, microbial, CCI, E&L, water, validation, analytical | ✅ Complete |
| **ISPE** | 14 | Baseline Guides, Good Practice Guides, GAMP | ✅ Complete (1 pending OCR) |
| **FDA** | 15 | Aseptic Processing, Process Validation, Process Inspection, Combination Products CGMP, HF for Combo Products, 21 CFR 600–680 Biologics, 21 CFR Parts 210/211, 21 CFR Part 11, 21 CFR Part 820 (QMSR), 21 CFR Part 4, 21 CFR Part 312 (IND), CCIT (2008), Container Closure CMC (1999), Glass Vials & Stoppers (2024), Parametric Release (2010) | ✅ Complete |
| **ICH** | 6 | Q8(R2), Q9(R1), Q10, Q12, Q13, Q14 | ✅ Complete |
| **PIC/S** | 5 | Annex 1 (2022), Annex 2 (ATMPs + Biologics), Annex 15 (Qualification 2023), Annex 20 (QRM), PE 011 (GDP 2014) | ✅ Complete |
| **ISO** | 17 | 11040 (×8), 13408 (×7), 14644 (Parts 1/5/7), 11608-1, 13485, 10993-1, TR 24971, 15378, 9001, 9000, 2859-1, 15223-1/2, 15394, 13926-1/2/3 | ✅ Complete (2 blocked: 14971 scanned, 15225 font) |
| **Ph.Eur.** | 7 | 2.6.1, 2.6.14, 2.9.19, 2.9.20, 3.2.1, 3.3.8, 5.1.1 | ✅ Complete |
| **Total** | **182** | | |

### USP Batch History

- Batch 1 (2026-04-04): 〈71〉 〈85〉 〈151〉 〈161〉 〈788〉 〈1116〉 〈1211〉 + initial set
- Batch 2 (2026-04-05): 〈1228〉 series (×5), 〈55〉 〈381〉 〈660〉 〈661〉 〈670〉 〈671〉 〈729〉 〈755〉 〈771〉 〈785〉 〈787〉 〈789〉 〈791〉 〈797〉 〈1207〉 〈1660〉 〈1788〉 〈1790〉 (23 chapters)
- Batch 3 (2026-04-06): 〈87〉 〈88〉 〈631〉 〈643〉 〈645〉 〈659〉 〈698〉 〈921〉 〈1029〉 〈1058〉 〈1079〉 〈1113〉 〈1207.1〉 〈1207.2〉 〈1207.3〉 〈1225〉 〈1226〉 〈1231〉 〈1663〉 〈1664〉 (20 chapters)

### Remaining Layer 1 Additions

| Document | Phase | Priority | Effort | Status |
|----------|-------|----------|--------|--------|
| ISO 14644-2 (monitoring), ISO 14644-3 (test methods) | Phase 4 | High | Medium | ⬜ Need PDF |
| ISPE GEP — Good Engineering Practice | Phase 4 | Low | — | ❌ Blocked (OCR) |
| PDA TR36 — Lyophilization Validation | Phase 4 | Medium | Medium | ⬜ Need PDF |
| ISO 17665 — Steam sterilization | Phase 4 | Medium | Medium | ⬜ Need PDF |
| ~~FDA — Container Closure Guidance, Terminal Sterilization Guidance~~ | Phase 4 | Medium | Medium | ✅ Done (CCIT, ContainerClosure, GlassVial, ParametricRelease) |
| ISO 14971 — Risk Management for Medical Devices | Phase 5 | High | — | ❌ Blocked (scanned PDF) |
| ISO 11608-3 — Finished containers for injection systems | Phase 5 | Medium | Small | ⬜ Need PDF |
| ISO 15225 — GMDN Nomenclature Data Structure | Phase 5 | Low | — | ❌ Blocked (font encoding) |
| IEC 62366-1 — Usability Engineering / Human Factors | Phase 5 | Medium | Medium | ⬜ Need PDF |
| FDA — Design Considerations for Combination Products (2019 Draft) | Phase 5 | Medium | Small | ⬜ Need PDF |
| PDA TR76 — CCI Testing Technology | Phase 5 | Medium | Medium | ⬜ Need PDF |
| PDA TR74 — Prefilled Syringe User Requirement Specifications | Phase 5 | Medium | Medium | ⬜ Need PDF |
| PDA TR33 (Rev 2013) — Alternative & Rapid Microbiological Methods | Phase 5 | **High** | Medium | ⬜ Need PDF |
| PDA TR57 — Analytical Method Validation & Transfer | Phase 5 | Medium | Medium | ⬜ Need PDF |
| PDA TR69 (2014) — Bioburden & Biofilm in Pharma Water Systems | Phase 5 | Medium | Medium | ⬜ Need PDF |
| EU GMP Annex 15 — Qualification and Validation | Phase 6 | High | Small | ⬜ Future |
| EU GMP Annex 2 — Biological Medicinal Products | Phase 6 | Medium | Small | ⬜ Future |
| EU GMP Annex 20 — Quality Risk Management | Phase 6 | Medium | Small | ⬜ Future |
| ~~WHO TRS 961 Annex 6~~ | ~~Phase 6~~ | — | — | ✅ Moved to Phase 4b |
| WHO TRS 1010 | Phase 6 | Medium | Small | ⬜ Future |
| ISO 11737-1 — Sterilization: Bioburden Determination | Phase 6 | Medium | Small | ⬜ Need PDF |
| ISO 11737-2 — Sterilization: Sterility Testing | Phase 6 | Medium | Small | ⬜ Need PDF |
| PDA TR81 (2020) — Cell-Based Potency Assays for Biologics | Phase 6 | Low | Medium | ⬜ Need PDF |
| PDA TR47 — Preparation of Biological Indicators | Phase 6 | Low | Small | ⬜ Need PDF |
| EP 5.1.6 — Alternative Methods for Microbiological Quality | Phase 6 | Low | Small | ⬜ Need PDF |

---

## Expert Knowledge Base — Practitioner Layer

> **Session note — 2026-04-07:** This layer was planned to capture David Kuo's 10 years of sterile manufacturing experience as a structured knowledge layer. It sits alongside Layer 1 (regulatory reference) as interpretive, experiential content — the "what it actually means in practice" companion to official guidelines.

### What This Layer Is

Layer 1 documents what regulations *say*. This layer documents what a practitioner *knows from doing it* — the failure modes, judgment calls, shortcuts that backfire, and decisions that aren't documented anywhere. In TR60's Venn diagram model, Layer 1 is **Explicit Knowledge** (regulatory guidance, published research); this layer captures **Tacit Knowledge** (industry experience, SME insights, innovation patterns) — and the critical overlap between them. Knowledge of this type is:
- Tacit (in someone's head, not in any guideline)
- Rare (very few people have the same cross-functional exposure)
- Perishable (gets lost when people move on or organizations change)
- High-leverage (saves weeks of trial and error for the next person)

**Capture Waves — Progressive Knowledge Extraction:**
- **Wave 1** (current scope): David's 9 ownable knowledge files — one-time extraction from a single practitioner's career experience. This is the **tacit → explicit conversion** that TR60 §6.5.3 identifies as the hardest but most valuable KM activity.
- **Wave 2** (organic growth): Operational decision patterns captured through Layer 2 skill usage. As skills run against real deviations, tech transfers, and batch releases, the decision rationale and outcomes accumulate as structured knowledge — analogous to TR60 Ch7's "Specification File maintained and updated throughout product lifetime."
- **Wave 3** (future): Other key personnel's domain expertise (QA, QC, engineering leads). Extends the same capture methods to build organizational rather than individual knowledge.

**CDMO-Specific Design Choices** (derived from TR60 §6.5.3 and Ch7):
- **Stage 1→2 handoff risk**: TR60 identifies this transition as the primary knowledge-loss point ("different equipment, different batch sizes, different personnel responsibilities"). For a CDMO, this happens with *every new client tech transfer* — making robust KM existential, not optional.
- **Living document principle**: Expert KB files are not write-once memoirs. Following TR60 Ch7's Product Technical Team model, they are updated when new evidence emerges (new deviation patterns, new client TT learnings, equipment lifecycle events).
- **Platform knowledge isolation**: Expert KB captures *platform knowledge* (how our SA25 behaves, how our facility operates) separate from client product knowledge (which stays in Layer 3). This enables cross-client learning without confidentiality breach.

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

| Priority | Topic | Why It's Ownable | Target File |
|----------|-------|-----------------|-------------|
| **#1** | Vanrx SA25 robotic aseptic filling — full lifecycle | Few SA25 sites globally; no public case documentation | `knowledge/EXPERT/vanrx-SA25-lifecycle.md` |
| **#2** | Lyo ANDA end-to-end: bench → FDA approval | Entire arc owned, ANDA 211463 as evidence | `knowledge/EXPERT/lyo-ANDA-end-to-end.md` |
| **#3** | AI in GMP operations — live implementation | Already running in GMP environment 2025 | `knowledge/EXPERT/ai-in-gmp-operations.md` |
| **#4** | CDMO DP line: zero to commercial | "Build and run" perspective | `knowledge/EXPERT/cdmo-line-build-to-commercial.md` |
| **#5** | Sponsor ↔ CMO dual perspective | Rare bilateral view of tech transfer dynamics | `knowledge/EXPERT/sponsor-cmo-bilateral-view.md` |
| **#6** | VPHP cycle development & validation | Minimal public documentation on decision process | `knowledge/EXPERT/vphp-cycle-development.md` |
| **#7** | Aseptic filling deviation patterns | 23 deviation reports + ongoing CDMO handling | `knowledge/EXPERT/aseptic-deviation-patterns.md` |
| **#8** | US ANDA CTD authorship (parenteral) | Practical authorship decisions, FDA review dynamics | `knowledge/EXPERT/anda-ctd-authorship.md` |
| **#9** | CDMO business operations | Cost reduction (15–20% savings), BD, client audit prep | `knowledge/EXPERT/cdmo-operations-economics.md` |

### Capture Method

| Input Type | Method |
|-----------|--------|
| Existing Word/PDF documents | Extract + restructure into knowledge MD format |
| Partial notes + recall | Structured interview (topic-by-topic guided Q&A) |
| Pure recall | Guided oral dictation with follow-up questions |

**Format:** Each knowledge MD uses the same conventions as `knowledge/PDA/*.md` — but content is original practitioner knowledge. Source attribution: `Source: David Kuo, direct experience [year range]`.

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

### Knowledge Refresh Mechanism

Expert KB files are living documents. Updates are triggered by **CDMO operational events**, not by calendar schedule — following TR60 Ch7's principle that "manufacturing-knowledge documentation files are updated regularly with all pertinent studies."

| Trigger Event | Which Files to Review | What to Add |
|--------------|----------------------|-------------|
| New client tech transfer completed | `sponsor-cmo-bilateral-view.md`, `cdmo-operations-economics.md` | TT friction points, knowledge gaps encountered, onboarding lessons |
| Annual APS campaign | `vanrx-SA25-lifecycle.md`, `aseptic-deviation-patterns.md` | Intervention patterns, media fill outcomes, equipment behavior drift |
| Critical/Major deviation closed | `aseptic-deviation-patterns.md`, relevant topic file | Root cause pattern, investigation approach, corrective action effectiveness |
| New product format integrated | `vanrx-SA25-lifecycle.md`, `cdmo-line-build-to-commercial.md` | Equipment configuration decisions, C&Q scope differences, format-specific risks |
| Client or regulatory audit completed | `cdmo-operations-economics.md`, `ai-in-gmp-operations.md` | Observations received, audit preparation insights, documentation gaps identified |
| Layer 2 skill used on real case | Relevant Expert KB file | Decision rationale and outcome — Wave 2 organic knowledge capture |

> This mechanism closes the DIKW feedback loop: operational **data** (deviation records, batch data, audit findings) is processed through Layer 2 skills into **information**, interpreted against Layer 1 references into **knowledge**, and fed back into Expert KB as **application** insights for future use.

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
| Aseptic Processing | TR22, TR62, PtC-1, PtC-12, PtC-Isolators, Guide No.1, Ph.Eur. 5.1.1 | Excellent |
| Environmental Monitoring | TR13, TR13-2, TR88 | Excellent |
| Contamination Control (CCS) | TR90, TR70 | Excellent |
| Container/Closure & Packaging | TR73, TR73-2, TR85, TR87, TR43, ISO 11040 (×8), FDA-ContainerClosure, FDA-GlassVial | Excellent |
| Container Closure Integrity (CCI) | TR27, USP 〈1207〉 trilogy, FDA-CCIT | Excellent |
| Terminal Sterilization & Parametric Release | TR1, FDA-ParametricRelease, USP 〈1222〉, USP 〈1229〉 series | Good |
| Sterilizing Filtration | TR26, ISO 13408-2 | Good |
| Process Validation | TR60, FDA Process Val | Good |
| Single-Use Systems | TR66 | Good |
| Facility Design | ISPE Vol.3, PtC-14 | Good |
| C&Q / Qualification | ISPE Vol.5 | Good |
| ATMP / Cell & Gene Therapy | PtC-13, PtC-14 | Good |
| Data Integrity | TR80, TR84 | Good |
| Technology Transfer | TR65, ISPE TechTransfer | Good |
| Quality Culture | ISPE-QC | Covered |
| Combination Products (drug+device) | TR73, TR73-2, TR27, FDA CGMP Combo, ISO 11608-1, ISO 13485, ISO 13926-1/2/3, ISO 10993-1, ISO TR 24971 | Good |
| E&L / Container Materials | USP 〈661〉 〈660〉 〈1663〉 〈1664〉, ISO 15378 | Good |
| Regulatory QMS Framework | ICH Q8/Q9/Q10/Q12/Q13/Q14, ISO 9001, ISO 13485 | Excellent |
| Sterility & Bioburden Testing | Ph.Eur. 2.6.1, Ph.Eur. 2.6.14, USP 〈71〉 〈85〉 | Excellent |
| Particulate Testing | Ph.Eur. 2.9.19, Ph.Eur. 2.9.20, USP 〈788〉 〈790〉 | Excellent |
| Glass & Container Materials | Ph.Eur. 3.2.1, USP 〈660〉, ISO 11040 | Excellent |
| Labelling & Symbols | ISO 15223-1, ISO 15223-2, ISO 15394 | Good |
| Supply Chain & GDP | PE 011, TR39, TR46, TR52, TR68 | Good — PE 011 ✅ done; TRS 961 Annex 6 + ICH Q1A(R2) remaining in Phase 4b |

### Remaining Gaps

| Gap | Why It Matters | Target |
|-----|---------------|--------|
| **Cleanroom Standards (Parts 2/3)** | Have Parts 1/5/7; Parts 2 (monitoring) and 3 (test methods) still needed | ISO 14644-2/3 — Phase 4 |
| **Lyophilization** | Major sterile dosage form | PDA TR36 — Phase 4 |
| **Steam sterilization validation** | Terminal sterilization method with F₀ detail | ISO 17665 — Phase 4 |
| **Combination Products — device side (remaining)** | IEC 62366-1 (usability) and ISO 14971 still absent | IEC 62366-1 — Phase 5; ISO 14971 ❌ blocked |
| **EU regulatory anchor** | Binding EU GMP law; required for EU-MAA clients | EU GMP Annex 15, Annex 2, Annex 20 — Phase 6 |
| **Warehouse GDP framework** | ~~PIC/S PE 011~~ ✅ done; WHO TRS 961 Annex 6 + ICH Q1A(R2) remaining | TRS 961 Annex 6 — Phase 4b; ICH Q1A(R2) — Phase 4b |
| **Storage condition upstream** | USP 〈1079〉 defines practice but ICH Q1A(R2) defines the "why" | ICH Q1A(R2) — Phase 4b |
| **WHO GMP** | WHO prequalification supply chains | TRS 1010 — Phase 6 |

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

All PDA TRs (42), top ISPE guides (14), PIC/S documents (5, incl. PE 011 Guide), FDA guidances + CFR chapters (15), ICH Q8–Q14 (6), USP 76 chapters, ISO 17 standards, and Ph.Eur. 7 chapters are fully processed (bilingual HTML + knowledge MD). Infrastructure (dashboard, tooling, workflow) is complete and stable.

### Phase 4: Active — Topic Gap-Fillers

**Goal:** Fill remaining Layer 1 content gaps. Requires sourcing new PDFs.

| Task | Document | Effort | Status |
|------|----------|--------|--------|
| ISO addition | ISO 14644-2 (monitoring), ISO 14644-3 (test methods) | Medium | ⬜ Need PDF |
| PDA addition | TR36 — Lyophilization | Medium | ⬜ Need PDF |
| ISO addition | ISO 17665 — Steam sterilization | Medium | ⬜ Need PDF |
| ISPE completion | GEP — Good Engineering Practice | Medium | ❌ Blocked (OCR) |
| ~~FDA additions~~ | ~~Container Closure Guidance, Terminal Sterilization Guidance~~ | Medium | ✅ Done (4 docs: CCIT, ContainerClosure, GlassVial, ParametricRelease) |

### Phase 5: Active — Combination Products Device Layer + Additional Standards

**Goal:** Add device-side standards for PFS, autoinjector, pen injector clients. Add remaining high-value PDA reports.

| Task | Document | Effort | Status |
|------|----------|--------|--------|
| ISO addition | ISO 14971 — Risk Management for Medical Devices | Medium | ❌ Blocked (scanned PDF) |
| ISO addition | ISO 11608-3 — Finished containers | Small | ⬜ Need PDF |
| IEC addition | IEC 62366-1 — Usability Engineering / Human Factors | Medium | ⬜ Need PDF |
| FDA addition | Design Considerations for Combination Products (2019 Draft) | Small | ⬜ Need PDF |
| PDA addition | TR76 — CCI Testing Technology | Medium | ⬜ Need PDF |
| PDA addition | TR74 — Prefilled Syringe User Requirement Specifications | Medium | ⬜ Need PDF |
| PDA addition | TR33 (Rev 2013) — Alternative & Rapid Microbiological Methods | Medium | ⬜ Need PDF |
| PDA addition | TR57 — Analytical Method Validation & Transfer | Medium | ⬜ Need PDF |
| PDA addition | TR69 (2014) — Bioburden & Biofilm in Pharma Water Systems | Medium | ⬜ Need PDF |

### Phase 4b: Active — Warehouse Practice Expansion

**Goal:** Strengthen warehouse operations coverage — GDP framework, storage condition management, material receipt. Current warehouse curriculum (27 docs) covers packaging, CCI, and cold chain well, but lacks comprehensive GDP standards and storage qualification upstream documents.

| Task | Document | Effort | Status |
|------|----------|--------|--------|
| PIC/S addition | **PIC/S PE 011 — GDP Guide** | Medium | ✅ Done (2026-04-14) |
| WHO addition | **WHO TRS 961 Annex 6 — GDP for Pharmaceutical Products** | Small | ⬜ Need PDF (moved from Phase 6) |
| ICH addition | **ICH Q1A(R2) — Stability Testing** (defines storage condition requirements) | Medium | ⬜ Need PDF |

**Priority order:** PE 011 → TRS 961 Annex 6 → ICH Q1A(R2)

**Warehouse structural deliverables** (no new PDFs required):

| Task | Output | Status |
|------|--------|--------|
| Topic synthesis | `knowledge/topics/warehouse-storage-GDP.md` — cross-document synthesis of existing 27 warehouse docs | ⬜ To build |
| Exam bank | `knowledge/exams/topics-warehouse.json` — warehouse question bank | ⬜ To build |

### Phase 6: Future — EU + Global Market Expansion

**Trigger:** Add when EU-client volume justifies the effort, or when an EU inspection is scheduled.

| Task | Document | Effort | Status |
|------|----------|--------|--------|
| EU GMP | Annex 15 — Qualification and Validation (2015) | Small | ⬜ Future |
| EU GMP | Annex 2 — Biological Medicinal Products (2012) | Small | ⬜ Future |
| EU GMP | Annex 20 — Quality Risk Management | Small | ⬜ Future |
| ~~WHO~~ | ~~TRS 961 Annex 6 — Sterile Products~~ | ~~Small~~ | ✅ Moved to Phase 4b (Warehouse) |
| WHO | TRS 1010 — Biological Products | Small | ⬜ Future |
| ISO | ISO 11737-1 — Sterilization: Bioburden Determination | Small | ⬜ Need PDF |
| ISO | ISO 11737-2 — Sterilization: Sterility Testing | Small | ⬜ Need PDF |
| PDA | TR81 (2020) — Cell-Based Potency Assays for Biologics | Medium | ⬜ Need PDF |
| PDA | TR47 — Preparation of Biological Indicators | Small | ⬜ Need PDF |
| EP | 5.1.6 — Alternative Methods for Microbiological Quality | Small | ⬜ Need PDF |

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
| **ICH Q11** | Drug substance development | When regulatory submission support expands |

> **ICH scope note:** Q8/Q9/Q10/Q12/Q13/Q14 are included in this hub (analytical + manufacturing lifecycle). The full ICH set (Q1–Q7, Q11, S-series, E-series, M-series) is not sterile-manufacturing-specific.

> **IEC scope note:** IEC 62366-1 is included only for combination product human factors validation. Other IEC standards are out of scope.

---

## Documents NOT in Scope

| Document | Why Excluded |
|----------|-------------|
| ICH Q1–Q7, Q11 | General pharma chemistry / drug substance — not sterile-manufacturing-specific |
| ICH S-series, E-series, M-series | Safety, efficacy, multidisciplinary — not manufacturing-focused |
| ASTM standards | ASTM E2500 (verification) is influential but too niche for this hub |
| ISO 11135 (EtO sterilization) | Rarely used for sterile injectables |
| ISO 11137 (Radiation sterilization) | Niche; for devices not primary pharma injectables |
| ISO 11608-4/5 (Electronic/automated injection systems) | Advanced device electronics — out of scope (ISO 11608-1/3 in Phase 5) |
| IEC standards other than 62366-1 | Electrical safety, EMC, cybersecurity — outside GMP scope |
| Full PDA TR catalog | Many TRs cover non-sterile topics. Only sterile-relevant TRs included |
| BP (British Pharmacopoeia) | ~95% harmonized with Ph. Eur. post-Brexit. Add Ph. Eur. first |
| ChP (Chinese Pharmacopoeia) | Add only if China in-market manufacturing is in scope |
| ANVISA / LatAm regulations | Region-specific; add only if Latin America supply is strategic |

---

## Folder Structure (Target State)

```
/
├── PDA/                    # 42 PDA documents complete
│   ├── TR13/, TR22/, TR26/, TR27/, TR39/, TR41/, TR43/
│   ├── TR44/, TR46/, TR49/, TR52/, TR54-6/, TR56/, TR60/
│   ├── TR62/, TR65/, TR66/, TR68/, TR70/, TR73/, TR73-2/
│   ├── TR80/, TR84/, TR85/, TR86/, TR87/, TR88/, TR90/, TR91/
│   ├── TR1/, TR29/
│   ├── PtC-1/, PtC-9/, PtC-11/, PtC-12/, PtC-13/, PtC-14/, PtC-15/
│   ├── PtC-Isolators/, PtC-Remote/
│   └── pda-guide-no1/
├── ISPE/                   # 14 ISPE documents complete
│   ├── ISPE-Vol3/, ISPE-Vol4/, ISPE-Vol5/, ISPE-Vol6/, ISPE-Vol7/
│   ├── ISPE-HVAC/, ISPE-SUT/, ISPE-GAMP5/
│   ├── ISPE-QC/, ISPE-ProcessGas/, ISPE-TechTransfer/
│   ├── ISPE-Sampling/, ISPE-CTC/, ISPE-IT/
│   └── ISPE-GEP/              # ❌ Blocked (OCR)
├── PICS/                   # 5 PIC/S documents complete
│   ├── PICS-Annex1/, PICS-Annex2/, PICS-Annex15/, PICS-Annex20/
│   └── PICS-PE011/              # GDP Guide
├── FDA/                    # 15 FDA documents complete
│   ├── FDA-Aseptic/, FDA-ProcessVal/, FDA-ProcessInspection/
│   ├── FDA-ComboProducts-CGMP/, FDA-ComboProducts-HF/
│   ├── FDA-21CFR-600-680/, FDA-21CFR-Part11/, FDA-21CFR-210-211/
│   ├── FDA-21CFR-820/, FDA-21CFR-Part4/, FDA-21CFR-312/
├── ICH/                    # 6 ICH guidelines complete
│   ├── ICH-Q8R2/, ICH-Q9R1/, ICH-Q10/, ICH-Q12/, ICH-Q13/, ICH-Q14/
├── USP/                    # 76 USP chapters complete
│   ├── USP-71/, USP-85/, USP-788/, ... (76 folders)
├── ISO/                    # 17 ISO standards complete (2 blocked)
│   ├── ISO-11040/              # Prefilled Syringes Parts 1–8
│   ├── ISO-13408/              # Aseptic Processing Parts 1–7
│   ├── ISO-14644/              # Cleanrooms Parts 1/5/7
│   ├── ISO-11608-1/, ISO-13485/, ISO-10993-1/, ISO-TR-24971/
│   ├── ISO-15378/, ISO-9001/, ISO-9000/, ISO-2859-1/
│   ├── ISO-15223-1/, ISO-15223-2/, ISO-15394/
│   ├── ISO-13926-1/, ISO-13926-2/, ISO-13926-3/
│   ├── ISO-14971/              # ❌ Blocked (scanned PDF)
│   └── ISO-15225/              # ❌ Blocked (font encoding)
├── PHEUR/                  # 7 Ph.Eur. chapters complete
│   ├── PhEur-261/, PhEur-2614/, PhEur-2919/, PhEur-2920/
│   ├── PhEur-321/, PhEur-338/, PhEur-511/
├── knowledge/              # Chatbot knowledge base (English-only)
│   ├── INDEX.md, INDEX-router.md
│   ├── PDA/, ISPE/, PICS/, FDA/, ICH/, USP/, ISO/, PHEUR/
│   ├── exams/              # Quiz question banks (JSON)
│   ├── topics/             # Cross-document topic synthesis
│   └── EXPERT/             # Practitioner knowledge base (to build)
├── reports.json            # Single source of truth for all document metadata
├── gmp-curriculum-data.js  # Department curriculum structure (8 depts × 3 tiers)
├── index.html              # Document index dashboard
├── learning-path.html      # Department learning tracker
├── mindmap.html            # Knowledge mind map — 3 views
├── quiz.html               # Quiz score tracker
└── docs/
    ├── ROADMAP.md          # This file
    ├── SKILLS.md           # Skills list
    └── PROMPT.md           # Generation instructions
```

---

## Estimated Target: ~195–205 Documents (full scope)

| Source | Current | Phase 4–5 Additions | Phase 6 Additions | Notes |
|--------|---------|--------------------|--------------------|-------|
| PDA | 42 | +5 (TR33, TR36, TR57, TR69, TR74, TR76) | +2 (TR47, TR81) | |
| ISPE | 14 | +0 | — | GEP ❌ blocked (OCR) |
| PIC/S | 5 | ~~+1 (PE 011 GDP)~~ ✅ | — | PE 011 done |
| FDA | 15 | — | — | +1 if Design Considerations |
| ICH | 6 | +1 (Q1A(R2) Stability) | — | Phase 4b warehouse |
| USP | 76 | — | — | Complete |
| ISO | 17 | +3 (14644-2/3, 17665) | +2 (11737-1/2) | 14971 ❌ blocked; 15225 ❌ blocked; +1 11608-3; +1 IEC 62366-1 |
| IEC | 0 | +1 (62366-1) | — | |
| EU GMP | 0 | — | +3 (Annex 15, 2, 20) | |
| Ph.Eur. | 7 | — | +1 (EP 5.1.6) | |
| WHO GMP | 0 | +1 (TRS 961 Annex 6) | +1 (TRS 1010) | TRS 961 moved to Phase 4b |
| **Total** | **182** | **~189** | **~199** | |

The infrastructure (tooling, workflow, dashboard, chatbot) is built and serving 182 documents. All uploaded Raw PDFs have been processed or marked blocked. Active focus shifts to Expert Knowledge Base and Layer 2 Operational Frameworks, with Phase 4–5 content additions when new PDFs are sourced.
