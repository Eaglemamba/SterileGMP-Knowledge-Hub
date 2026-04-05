# SterileGMP Knowledge Hub — Skills Roadmap

Planned Claude Code skills (slash commands) for the SterileGMP Knowledge Hub. Each skill is designed to apply the knowledge base in the `knowledge/` folder to produce structured, actionable outputs.

**Status:** Brainstorm / Planning — not yet built  
**Existing:** `/gmp-ask` (see `.claude/commands/gmp-ask.md`)  
**Last updated:** 2026-04-01

**Department codes:** QA=品保 | QC=品管 | MG=生產 | EN=工程 | TS=技術 | WH=倉儲 | RA=法規 | BD=業務開發 | BT=資訊

**Column notes:**
- **Initiating Dept** — who typically starts the workflow (discovers the event, submits the request, writes the first draft)
- **QA role** — how QA participates (Lead = owns and drives; Review = approves/oversees; Support = provides input)

---

## Full Skills List

| # | Skill | Category | Usage Scenario | Initiating Dept | QA Role |
|---|-------|----------|---------------|-----------------|---------|
| 0 | `/gmp-ask` | General | Daily GMP knowledge queries, self-learning, quick regulatory lookups | All | — |
| **Investigation** ||||||
| 1 | `/deviation` | Investigation | Deviation discovered in production — classify, investigate, write report (full cycle including CAPA) | All depts (whoever discovers it) | Lead |
| 2 | `/oos-investigate` | Investigation | Chemical or microbiological test result out of specification (OOS/OOT) | QC | Lead |
| 3 | `/complaint` | Investigation | Customer complaint or market feedback received — assess safety signal and regulatory notification | QA, BD | Lead |
| 4 | `/em-excursion` | Investigation | EM monitoring data exceeds alert/action level — immediate response and batch impact assessment | QC, TS | Lead |
| **Change Management** ||||||
| 5 | `/change-control` | Change Mgmt | Before submitting a change request — classify, risk assess, list required documentation and validation activities | All depts (whoever owns the change) | Review |
| 6 | `/cc-sop-impact` | Change Mgmt | After change approval — identify which SOPs and documents need synchronous revision | All depts (SOP owners) | Lead |
| **SOP** ||||||
| 7 | `/sop-new` | SOP | New equipment / process / regulatory requirement — draft new SOP from scratch with full chapter structure and regulatory basis | All depts (for their own area) | Review |
| 8 | `/sop-revision` | SOP | CAPA-driven revision, periodic review trigger, or post-regulatory-update revision of existing SOP | All depts (for their own area) | Review |
| **Compliance** ||||||
| 9 | `/reg-gap` | Compliance | New Annex 1 / FDA guidance published — systematically assess which SOPs and practices need updating | QA, RA | Lead |
| 10 | `/annex1-check` | Compliance | Before audit — spot-check whether a specific practice complies with Annex 1 requirements | All depts (for their own area) | Lead |
| 11 | `/di-check` | Compliance | Before new system go-live or before audit — data integrity gap assessment (TR84 9-Box framework) | BT, QC | Lead |
| **Audit** ||||||
| 12 | `/inspection-prep` | Audit | Before FDA/EMA regulatory inspection — area-specific readiness checklist and document preparation | All depts (per their area) | Lead |
| 13 | `/client-audit` | Audit | Before existing client audit — prepare data room and facility tour from the client's perspective (CDMO-specific) | QA, BD, MG | Lead |
| **Quality Review** ||||||
| 14 | `/pqr-framework` | Quality Review | Annual PQR/APR writing — structured framework, required sections, statistical analysis direction | QA, RA | Lead |
| 15 | `/cpv-review` | Quality Review | Process validation Stage 3 annual statistical review — trend monitoring and signal identification | QA, TS | Lead |
| **CDMO Business** ||||||
| 16 | `/feasibility` | CDMO Biz | New client enquiry for contract manufacturing — rapid initial feasibility assessment (cross-contamination, facility fit, TT, regulatory) | BD, MG | Review |
| 17 | `/hbel-screen` | CDMO Biz | Before introducing new product — assess whether it can share facility/equipment with existing products (HBEL/ADE/MACO) | EN, RA | Lead |
| 18 | `/bd-qa` | CDMO Biz | During business development — answer prospective client technical questions safely without disclosing existing client information | BD | Support |
| **Projects** ||||||
| 19 | `/tech-transfer` | Projects | New client product transferring from R&D or another site into CDMO — 6-stage checklist and critical parameter verification | EN, TS, BD | Lead |
| **Systems / CSV** ||||||
| 20 | `/csv-plan` | Systems | Implementing new system (LIMS/MES/ERP) — determine GAMP category, validation approach, required documents | BT | Review |
| **Validation** ||||||
| 21 | `/qualification-plan` | Validation | New equipment purchase or post-major-repair — plan IQ/OQ/PQ qualification scope and key acceptance criteria | EN | Review |
| 22 | `/validation-xref` | Validation | Equipment or SOP change — identify which validation protocols and reports reference this item and need re-evaluation | EN, BT | Lead |
| **Training** ||||||
| 23 | `/training-content` | Training | New hire onboarding or annual retraining — generate training objectives, key content with regulatory basis, and quiz questions | All depts (for their own area) | Lead |
| **Risk** ||||||
| 24 | `/risk-assess` | Risk | Before introducing new process / equipment / supplier — draft FMEA risk assessment with ICH Q9 framework | All depts (for their own scope) | Lead |
| **Suppliers** ||||||
| 25 | `/supplier-qual` | Suppliers | New supplier onboarding or annual supplier review — assessment type, audit checklist, required documents | WH, QA | Lead |
| **Operations** ||||||
| 26 | `/batch-release` | Operations | Batch in question (EM excursion, particulate found, deviation during fill) — structured release/reject/quarantine decision framework | QA | Lead |

---

## Skill Design Principles

Each skill is designed to:
1. **Read the knowledge base** — pull from relevant `knowledge/` markdown files, not general LLM knowledge
2. **Produce structured output** — not a chat answer, but a usable document section or checklist
3. **Cite sources** — every key requirement references a specific document and section
4. **Be CDMO-specific** — examples and context tailored to aseptic fill-finish CDMO operations
5. **Be bilingual** — outputs in Traditional Chinese with English technical terms preserved

---

## Primary Knowledge Sources by Category

| Category | Primary Knowledge Files |
|----------|------------------------|
| Investigation | TR88, TR90, TR13, TR13-2, TR84, PICS-Annex1 |
| Change Management | TR91, ISPE-Vol5, TR60, ISPE-GAMP5 |
| SOP | TR84 (GDocP), ISPE-Vol5, ISPE-GAMP5 (M9), PICS-Annex1 |
| Compliance | PICS-Annex1, TR90, TR22, TR84, ISPE-GAMP5 |
| Audit | PICS-Annex1, TR90, TR13, ISPE-Vol3, ISPE-Vol4, ISPE-Vol5 |
| Quality Review | TR60, TR91, TR90, TR84, PICS-Annex1 |
| CDMO Business | ISPE-Vol7, TR65, TR60, ISPE-Vol3, TR91, TR90 |
| Systems / CSV | ISPE-GAMP5, TR84 |
| Validation | ISPE-Vol5, TR60, ISPE-GAMP5, PICS-Annex1 |
| Training | Topic-dependent (e.g. TR22 + PICS-Annex1 for aseptic technique) |
| Risk | ISPE-Vol7, TR54, TR90, TR60 |
| Suppliers | TR52, TR39, ISPE-SUT, ISPE-GAMP5, ISPE-Vol7 |
| Operations | TR88, TR90, TR13, PICS-Annex1, TR84 |

---

## Department Usage Summary

Skills where each department is typically the **initiating user** (not just a participant):

| Dept | Typically Initiates | QA oversight on all of these |
|------|--------------------|-----------------------------|
| **All depts** | deviation, change-control, sop-new, sop-revision, training-content, risk-assess, annex1-check, inspection-prep | Lead / Review |
| **QA** | oos-investigate (co-leads), complaint, em-excursion, cc-sop-impact, reg-gap, di-check, client-audit, pqr-framework, cpv-review, hbel-screen, batch-release, supplier-qual | Lead (owns process) |
| **QC** | oos-investigate, em-excursion, di-check | QA leads, QC initiates |
| **EN** | change-control (equipment), qualification-plan, validation-xref, hbel-screen, tech-transfer | QA reviews |
| **TS** | deviation (production), change-control (process), cpv-review, tech-transfer | QA leads investigation |
| **BT** | csv-plan, di-check, validation-xref | QA reviews |
| **WH** | supplier-qual, deviation (materials) | QA leads |
| **BD** | feasibility, bd-qa, client-audit, tech-transfer | QA supports BD |
| **RA** | reg-gap, complaint (regulatory notification), pqr-framework | QA co-leads |
| **MG** | inspection-prep, client-audit, batch-release, risk-assess (strategic) | QA leads, MG decides |

---

## Build Priority

| Priority | Skills | Rationale |
|----------|--------|-----------|
| **P0** | `/deviation`, `/change-control` | Highest daily frequency, immediate operational value |
| **P1** | `/em-excursion`, `/sop-new`, `/sop-revision`, `/annex1-check`, `/inspection-prep`, `/client-audit`, `/oos-investigate`, `/cc-sop-impact` | Core quality system activities |
| **P2** | `/complaint`, `/reg-gap`, `/di-check`, `/pqr-framework`, `/feasibility`, `/hbel-screen`, `/bd-qa`, `/batch-release`, `/training-content`, `/csv-plan` | Periodic or scenario-specific |
| **P3** | `/cpv-review`, `/tech-transfer`, `/qualification-plan`, `/validation-xref`, `/risk-assess`, `/supplier-qual` | Project-level or complex design |

---

## File Location

When built, all skills go in:
```
.claude/skills/<skill-name>.md
```

Per CLAUDE.md project rules: custom skills must be stored in `.claude/skills/` relative to project root.
