# GMP Knowledge Router (Compact)

Read this file FIRST to identify which report(s) to search. Only read `INDEX.md` if this table doesn't match the question.

**Rating:** ★★★ = deep grep (`-C 25`), ★★ = targeted grep (`-C 8`), ★ = skip unless user asks.

---

## Synonym Table

Use these mappings to translate user questions before routing:

| User says (EN/ZH) | Search terms |
|---|---|
| filter broken / leak / 過濾器破損 | integrity test, bubble point, diffusive flow |
| media fill / 培養基充填 / 無菌模擬 | media fill, APS, aseptic process simulation |
| 製程驗證 / process validation | process validation, CPV, PPQ, design space |
| 一次性 / 拋棄式 | single-use, SUS, SUT, disposable |
| 隔離器 / 屏障 / RABS | RABS, isolator, barrier system |
| 預充填針 | prefilled syringe, PFS, CCI |
| 細胞治療 / 基因治療 / 先進療法 | ATMP, cell therapy, gene therapy, CAR-T |
| 運銷 / 配送 / 冷鏈 | GDP, cold chain, distribution |
| 污染控制策略 | CCS, contamination control strategy |
| 清潔驗證 | cleaning validation, MAC, MACO, swab, rinse |
| 煙霧測試 | smoke study, airflow visualization |
| 更衣 / 人員資格 | gowning, personnel qualification |
| 資料完整性 | data integrity, ALCOA+, audit trail |
| 電腦驗證 | CSV, GAMP, computerized system validation |
| 風險評估 | risk assessment, FMEA, QRM, ICH Q9 |
| 技術轉移 | technology transfer, TT, sending unit, receiving unit |
| 滅菌 / 高壓滅菌 | sterilization, autoclave, F0, D-value |
| 用水 / 注射用水 | WFI, PW, pharmaceutical water |
| 連續製造 / 連製 | continuous manufacturing, CM, RTD, State of Control, steady state |
| 已確立條件 / 法規彈性 | established conditions, EC, PACMP, PLCM, post-approval change |
| 分析方法開發 / 分析目標概況 | analytical procedure development, ATP, MODR, PAR, ACS, SST |
| 即時放行 / RTRT | real-time release testing, RTRT, multivariate model, PAT |

---

## Topic Router

### Aseptic & Sterile Processing

| Topic | ★★★ Primary (section hint) | ★★ Secondary |
|---|---|---|
| Media fill / APS / 培養基充填 | TR22 (§4 Elements, §5 Personnel) · TR62 (§3 APS — manual) | Guide-No1, PtC-12 §8, PtC-Isolators §8 |
| Aseptic processing / 無菌製程 | PICS-Annex1 §8 · FDA-Aseptic §01-§04 · PtC-1 (all topics) | TR22, TR62, PtC-12, PtC-Isolators |
| Sterile filtration / 除菌過濾 | TR26 (§4 Qualification, §6 Validation, §7 Integrity) | PtC-1 §6, TR90, PICS-Annex1 §8 |
| PUPSIT / filter integrity | TR26 §7 · PtC-1 §6 · PICS-Annex1 §8 | FDA-Aseptic §04 |
| CGMP requirement for sterilization §211.113(b) / regulatory basis for media fill / SAL 10⁻⁶ CGMP mandate | FDA-21CFR-211 (§3 §211.113) | FDA-Aseptic |
| Moist heat sterilization / 濕熱滅菌 | TR1 (§1 Science, §3 Design, §5 PPQ) · PICS-Annex1 §8 | FDA-ParametricRelease, TR60 |
| Parametric release / 參數放行 | FDA-ParametricRelease (§0 Background, §1 Control strategy, §2 Filing) | TR1, USP-1229, PDA TR30 |
| Lyophilization / 凍乾 | TR22 §6 (lyo APS) | TR87 (lyo glass handling) |
| BFS / blow-fill-seal | PtC-1 §1b (K.1-K.3) · PICS-Annex1 §8 | FDA-Aseptic §07 |
| Manual aseptic / 手動無菌 | TR62 (§1 Facilities, §2 Equipment, §3 APS) | PtC-1 |
| Filling machine / 充填機 | Guide-No1 (§1 Design, §2A-§2C Pumps, §4A-§4B Functionality) | TR22, PtC-12 |

### Barriers & Isolators

| Topic | ★★★ Primary (section hint) | ★★ Secondary |
|---|---|---|
| RABS vs Isolator / 屏障比較 | PtC-1 §1b · PtC-12 §1 · PtC-Isolators §1 | ISPE-Vol3 §7a-§7b |
| RABS design & operation | PtC-12 (§1 Design, §2 Environment, §5 EM, §8 APS) | ISPE-Vol3 §7a, TR90 |
| Isolator design & operation | PtC-Isolators (§1 Design, §2 Environment, §3 EM) | ISPE-Vol3 §7a-§7b |
| VHP / bio-decontamination | PtC-Isolators §7a-§7b · TR70 · ISPE-Vol3 §7b | PtC-12 §7 |
| Glove integrity / 手套完整性 | PtC-12 §4 · PtC-Isolators §2 · ISPE-Vol3 §7a | TR22, PtC-1 |
| Isolator airflow / smoke study | PtC-Isolators §2 · ISPE-Vol3 §7a | PtC-1 §1a, ISPE-HVAC |
| Isolator background room | PICS-Annex1 §4 · FDA-Aseptic §02 · ISPE-Vol3 §7a | PtC-Isolators §2 |
| Capping inside/outside isolator | ISPE-Vol3 §7b · Guide-No1 §7 | PICS-Annex1 §8, PtC-12 |
| Robotics / gloveless isolator | Guide-No1 (§1 Design) · ISPE-Vol3 §7a | PtC-Isolators |
| Interventions in isolator | TR22 §4 · PtC-Isolators §2 · Guide-No1 §4A | PtC-12, PtC-1 |
| Isolator HVAC integration | ISPE-Vol3 §7a · ISPE-HVAC §7 | PtC-Isolators |
| Isolator cleaning / changeover | PtC-Isolators §7a · ISPE-Vol3 §7b · Guide-No1 §12 | TR70 |
| Isolator leak testing | PtC-Isolators §2 · ISPE-Vol3 §7a · PtC-14 §4 | ISPE-HVAC |
| Material transfer / RTP | PtC-Isolators §3 · PtC-12 §6 · Guide-No1 §9 · ISPE-Vol3 §3a | TR87 |

### Environmental Monitoring

| Topic | ★★★ Primary (section hint) | ★★ Secondary |
|---|---|---|
| EM program / 環境監控 | TR13 (§3 Regulatory, §4 Qualification, §5a Trending) | TR90, PtC-12 §5, PtC-Isolators §3, PICS-Annex1 §9 |
| EM for low bioburden / biologics | TR13-2 (§4a Framework, §4b Worked examples) | TR13, ISPE-Vol6 |
| EM alert/action levels | TR13 §5a · PICS-Annex1 §9 (Tables 5-6) | FDA-Aseptic §02 |
| RMM / rapid microbial methods | TR13 §5b | PICS-Annex1 §9 |
| Microbial investigation / OOS | TR88 (§4a-§4b Phase I, §5a-§5b Phase II) | TR13 §5b, TR70 |

### Contamination Control

| Topic | ★★★ Primary (section hint) | ★★ Secondary |
|---|---|---|
| CCS / contamination control strategy | TR90 (§1 Elements through §10 Governance) · PICS-Annex1 §3 | ISPE-Vol3, PtC-12, TR13 |
| Cleaning & disinfection / 清潔消毒 | TR70 (§2 Qualification, §3 In-use, §4a-§4b Procedures) | PtC-Isolators §7a, PtC-12, TR90 |
| Cleaning validation / 清潔驗證 | TR29 (§1-§6) · TR49 (§1-§6 biotech) · ISPE-Vol7 §7-§8 | TR70, TR60 |
| Cross-contamination / HPAPI | ISPE-Vol7 (§3 Logic, §4-§6 Risk, §9 Reduction) | ISPE-HVAC, ISPE-Vol3, TR90 |
| HBEL / ADE / PDE | ISPE-Vol7 §3 (HBEL derivation) | TR29 §3 |
| MACO / cleaning limits | ISPE-Vol7 §7-§8 · TR29 §3 · TR49 §2 | — |
| Hold times (dirty/clean/process) | TR29 §1 · TR49 §4-§5 | TR70 §5, TR22, Guide-No1 |

### Facility & HVAC

| Topic | ★★★ Primary (section hint) | ★★ Secondary |
|---|---|---|
| Sterile facility design / 無菌設施 | ISPE-Vol3 (§1a-§1b Regulatory, §3a-§3c Architecture) | PtC-12, PtC-14, TR90 |
| HVAC / air handling / 暖通空調 | ISPE-HVAC (§1 Design Process, §2 Considerations, §6 Fundamentals) · ISPE-Vol3 §4a-§4c | TR90 |
| Cleanroom classification / ISO 14644 | ISO-14644 (§1 Classification, §5 Operations, §7 Separative devices) · ISPE-Vol3 §1b · PICS-Annex1 §4 | FDA-Aseptic §02 |
| Pressure cascade / differential pressure | ISPE-Vol3 §4a · ISPE-HVAC §2 | PtC-12 §2 |
| Smoke study / airflow visualization | ISPE-Vol3 §4b · PtC-Isolators §2 | PtC-1 §1a, ISPE-HVAC |
| Biopharmaceutical facility | ISPE-Vol6 (§4A-§4B Process closure, §6A-§6B Layout) | PtC-14 |

### Water, Steam & Utilities

| Topic | ★★★ Primary (section hint) | ★★ Secondary |
|---|---|---|
| WFI system / 注射用水 | ISPE-Vol4 (§6 WFI treatment, §8 Storage & distribution) | PtC-1 §6, ISPE-Vol3 §5 |
| Purified water / PW | ISPE-Vol4 (§5 PW treatment, §8 Storage) | TR88 (water OOS) |
| Clean steam / 潔淨蒸汽 | ISPE-Vol4 §7 | ISPE-Vol3 §5 |
| Water/steam sampling | ISPE-Sampling (§1-§4 Water, §5-§6 Steam) | ISPE-Vol4 §10 |
| Passivation / rouging | ISPE-Vol4 §A7-§A9 | — |
| Process gases / compressed air | ISPE-ProcessGas (§1-§4 Systems, §5 Risk) | ISPE-Sampling §7 |

### Validation & Qualification

| Topic | ★★★ Primary (section hint) | ★★ Secondary |
|---|---|---|
| Process validation / 製程驗證 | FDA-ProcessVal (§III-§V Stages 1-3) · TR60 (§1-§3 Lifecycle) · PICS-Annex15 (§2 Traditional/CPV/Hybrid/OPV) | TR22, TR26, TR90 |
| VMP / Validation Master Plan | PICS-Annex15 (§1 §1.4-§1.5 VMP elements) | ISPE-Vol5 §2 |
| C&Q / commissioning & qualification | ISPE-Vol5 (§1-§6 Framework, §7a-§7b Testing) | TR60 |
| URS → DQ → FAT/SAT → IQ → OQ → PQ | PICS-Annex15 (§1 §3 Qualification Stages) · ISPE-Vol5 §5-§7a | TR60, ISPE-CTC |
| FAT / SAT | ISPE-Vol5 §6-§7a · PICS-Annex15 (§1 §3.4-§3.7) | ISPE-CTC §1, Guide-No1 |
| System risk assessment / CDE | ISPE-Vol5 §4 | ISPE-HVAC §9 |
| CPV / continued process verification | FDA-ProcessVal §V · TR60 §3 · PICS-Annex15 (§2 §5.23-§5.25) | TR1 §6 |
| Statistical methods / SPC | TR60 §A1b · FDA-ProcessVal §V · TR13 §5a | ISPE-Sampling |
| Equipment qualification IQ/OQ/PQ | TR60 · ISPE-CTC (§2-§3 CTC-specific) · ISPE-HVAC §4 | TR26, Guide-No1 |
| Cleaning validation / 清潔確效 | PICS-Annex15 (§3 §10 Full framework — HBEL/ADE limits, DHT/CHT, worst case) | TR49, ISPE-Vol5 |
| Transport qualification / 運輸確效 | PICS-Annex15 (§2 §6 Route, risk assessment, monitoring) | TR39 |
| Utilities qualification / 公用系統確效 | PICS-Annex15 (§3 §8 Steam/WFI/air/gases) | ISPE-Vol4, ISPE-HVAC |
| CTC / thermal mapping | ISPE-CTC (§0 URS, §2 Strategy, §3 Qualification) | — |

### Containers & Packaging

| Topic | ★★★ Primary (section hint) | ★★ Secondary |
|---|---|---|
| CCI / container closure integrity | TR86 (§1-§2 Challenges, §3 Methods) · TR27 (§1-§3 Methods) · FDA-CCIT (§0-§1 Stability CCIT) | TR73 §12, TR43, TR90, USP-1207 |
| CCIT in stability protocol / 穩定性 CCIT 替代無菌檢驗 | FDA-CCIT (§0 Purpose, §1 Alternatives+Implementation) | USP-1207, TR86 |
| Container closure systems CMC / 容器密封 CMC 文件 | FDA-ContainerClosure (§0-§1 Qualification, §2 Injectable, §4 Post-approval) | FDA-GlassVial, USP-660, USP-661 |
| Glass vial & stopper changes / 玻璃瓶膠塞變更 | FDA-GlassVial (§0 Regulatory, §1 Common changes, §2 Tools, §3 Tables) | FDA-ContainerClosure §4 |
| Prefilled syringe / 預充填注射器 | TR73 (§12-§15) · TR73-2 (EU MDR) | TR43 §4 (syringe defects), Guide-No1 |
| Needle-based injection systems / 針筒系統 | ISO-11608-1 (§3 Requirements, §4 Dose accuracy, §5 Test matrix) | TR73, TR73-2 |
| Primary packaging GMP / 一次包材 GMP | ISO-15378 (§2 Context, §3a-§3b Operations, §4 Annex) | USP-660, USP-661, USP-381, FDA-ContainerClosure |
| Extractables & leachables (packaging) / 包材萃取物 | FDA-ContainerClosure (§1 General, §5 Attachment C) | USP-661, ISPE-SUT §1a |
| Glass defects / 玻璃缺陷 | TR43 (§0-§5 All five lexicons) | TR87, TR85, FDA-GlassVial |
| Glass vial handling / breakage | TR87 (§3 Best practices, §4 Risk, §5 Process) | TR43, TR85 |
| Drug Master File (Type III) / DMF | FDA-ContainerClosure (§4 DMF section) | — |
| Visible particle inspection | TR85 (§3-§5 Methods) | TR90, PtC-12 |

### Single-Use Systems

| Topic | ★★★ Primary (section hint) | ★★ Secondary |
|---|---|---|
| SUS / single-use systems | ISPE-SUT (§0-§3 Full guide) · TR66 (§1-§5 Strategy) | ISPE-Vol6, PtC-15, PtC-14 |
| E&L / extractables & leachables | ISPE-SUT §1a · TR26 §4 (filter E&L) · TR66 §3 | TR73 |
| SUS supplier qualification | ISPE-SUT §1c · TR66 §5 | — |

### Risk, Quality & Data

| Topic | ★★★ Primary (section hint) | ★★ Secondary |
|---|---|---|
| Risk assessment / FMEA | ICH-Q9R1 (§1-§3 Framework, §Annex I Tools) · TR60 · TR54-6 §6A-§6B | TR22, TR84, TR68 |
| Data integrity / ALCOA+ (manufacturing) | TR84 (§2-§4 Framework, §6a-§6b Examples) | ISPE-GAMP5 |
| Data integrity — QC lab / ALCS / chromatography | TR80 (§1 Intro+Glossary, §4a ALCS, §4b Audit Trails) | TR84 |
| Data integrity — microbiology lab / EM / sterility | TR80 (§2 Micro Lab) | TR88 |
| Hybrid system DI / spreadsheet validation / LDMS | TR80 (§3 Hybrid, §5 LDMS) | TR84 |
| DI breach remediation / CAPA / DI investigation | TR80 (§6 Risk+Remediation) | TR84 |
| CSV / computer validation | ISPE-GAMP5 (§0-§2 Lifecycle, §3-§4 Planning) · TR84 | ISPE-IT, ISPE-Vol5 |
| IT infrastructure / GxP IT | ISPE-IT (§0-§3 Qualification, §4-§7 Appendices) | ISPE-GAMP5 §4 |
| AI/ML in pharma | ISPE-GAMP5 §6 (App D11) | — |
| eBR / electronic batch records | ISPE-GAMP5 §8 (App S2) | TR84 |
| QbD / design space | ICH-Q8R2 (§2B Design space) · TR60 §1 · FDA-ProcessVal §III | TR26 |
| Quality culture / GMP culture | ISPE-QC §0 (maturity model, RCA tools) | — |
| RCA / human error / deviation | ISPE-QC §0 · TR88 §5a-§5b | TR84, TR13 |

### Regulatory & Compliance

| Topic | ★★★ Primary (section hint) | ★★ Secondary |
|---|---|---|
| Annex 1 (2022) | PICS-Annex1 (§1-§11 full text) · PtC-1 · TR90 | TR13, PtC-12, TR22 |
| FDA aseptic guidance | FDA-Aseptic (§01-§07) | PtC-1, TR22 |
| FDA inspection / 483 / OAI | FDA-ProcessInspection (§I-§IV all parts) | — |
| Post-approval changes / PAC | TR91 (§2-§4 Framework) | TR68, PtC-9, TR60 |
| ICH Q8/Q9/Q10 framework | ICH-Q8R2 · ICH-Q9R1 · ICH-Q10 | TR60 |
| ICH Q12 lifecycle management / EC / PACMP | ICH-Q12 (§2-§5, Annex I-II) | TR91, ICH-Q10 |
| ICH Q13 continuous manufacturing | ICH-Q13 (§0-§3 + Annexes I-V) | FDA-ProcessVal §V |
| ICH Q14 analytical procedure development | ICH-Q14 (§0-§4 + §10 CTD) | ICH-Q2 |
| Remote/hybrid inspection | PtC-Remote (§1-§3 Planning to closing) | PtC-9 |
| Biologics GMP / ATMP GMP / PIC/S Annex 2 | PICS-Annex2 (§1 Scope, §2 Principles, §3 Manufacturing) | PtC-14, ISPE-Vol6 |
| Biological product definition / BLA requirements / Subchapter F scope | FDA-21CFR-Biologics (§0 Overview, §2 Part 601) | FDA-Aseptic |
| Biological product deviation reporting 600.14 / 45-day timeline / FDA-3486 | FDA-21CFR-Biologics (§1 Part 600) | — |
| Lot release: sterility 610.12 / purity 610.13 / potency 610.10 / identity 610.14 | FDA-21CFR-Biologics (§3 Part 610 release) | USP-71, PhEur-261 |
| BLA manufacturing change management / PAS / CBE-30 | FDA-21CFR-Biologics (§2 Part 601 §601.12) | TR91, ICH-Q12 |
| Biologics container label / Part 610 labeling / expiration dating | FDA-21CFR-Biologics (§4 Part 610 labeling) | — |
| CDMO quality agreement biologics / responsibility allocation Subchapter F | FDA-21CFR-Biologics (§5 CDMO compliance matrix) | FDA-Aseptic |
| Electronic records and electronic signatures / Part 11 scope / predicate rule / eCFR §11.1 | FDA-21CFR-Part11 (§0 Overview & 2003 Guidance) | — |
| Audit trail requirements §11.10(e) / computer-generated time-stamped / old+new value / FDA 483 | FDA-21CFR-Part11 (§2 Subpart B §11.10e) | ISPE-IT |
| Computer System Validation CSV / GAMP 5 / IQ OQ PQ electronic system / §11.10(a) | FDA-21CFR-Part11 (§2 Subpart B §11.10a) | ISPE-IT |
| Closed vs open system classification / §11.30 open system encryption digital signature | FDA-21CFR-Part11 (§1 Subpart A §11.3, §2 §11.30) | — |
| Electronic signature two-component authentication / continuous session / password controls §11.200 §11.300 | FDA-21CFR-Part11 (§3 Subpart C §11.200, §11.300) | — |
| Signature manifestation §11.50 / printed name / date time / meaning approval reviewed / signature linking §11.70 | FDA-21CFR-Part11 (§3 Subpart C §11.50, §11.70) | — |
| FDA CGMP legal basis / FDCA §501(a)(2)(B) adulteration / 21 CFR 210/211 scope / Drug CGMP regulations | FDA-21CFR-211 (§0 Overview & architecture) | FDA-Aseptic |
| QCU independence §211.22 / batch release approval authority / QCU in CDMO / written procedures | FDA-21CFR-211 (§1 Subparts A–B §211.22) | FDA-ProcessInspection |
| Aseptic facility design §211.42 / sterile operations area / HEPA pressure differential / CGMP foundation | FDA-21CFR-211 (§2 Subparts C–D §211.42) | FDA-Aseptic, PICS-Annex1 |
| Aseptic processing validation regulatory basis §211.113(b) / sterilization validation hierarchy / media fill CGMP requirement | FDA-21CFR-211 (§3 Subparts E–F §211.113) | FDA-Aseptic |
| Batch production record §211.188 / 13 required items / electronic batch record eBR / ALCOA+ CGMP | FDA-21CFR-211 (§5 Subparts I–K §211.188) | — |
| Batch review §211.192 / thorough review standard / QCU batch disposition / most cited CGMP warning letter | FDA-21CFR-211 (§5 Subparts I–K §211.192) | FDA-ProcessInspection |
| OOS out-of-specification §211.194 / Phase I Phase II investigation / invalid assay criteria / Barr Laboratories | FDA-21CFR-211 (§5 Subparts I–K §211.194) | — |
| QRM regulatory perspective / PIC/S Annex 20 | PICS-Annex20 (§1-§3 QRM process, risk tools) | ICH-Q9R1, TR60 |
| Combination products CGMP / 組合產品 | FDA-ComboProd-CGMP (§1-§3 CGMP requirements) | FDA-ComboProd-HF |
| Human factors / combination products | FDA-ComboProd-HF (§1-§2 HF process, clinical) | FDA-ComboProd-CGMP |
| Medical device QMS / ISO 13485 | ISO-13485 (§2 QMS, §3 Resources/Design, §4 Purchasing) | ICH-Q10, FDA-21CFR-820 |
| QMSR 2024 final rule / QSR to QMSR transition / Part 820 effective Feb 2026 | FDA-21CFR-820 (§0 Overview & transition) | ISO-13485 |
| Part 820 scope / who must comply / Class I exemptions / combination product QMSR | FDA-21CFR-820 (§1 Scope & definitions) | FDA-ComboProd-CGMP |
| DHF vs DHR vs DMR / design history file / device master record / device history record | FDA-21CFR-820 (§1 definitions, §3 design controls) | — |
| Design controls mandatory FDA / design verification vs validation / design transfer §820 | FDA-21CFR-820 (§3 Design Controls & Realization) | FDA-ComboProd-CGMP |
| Complaint file §820.198 / complaint definition / MDR trigger 30-day decision / Part 803 | FDA-21CFR-820 (§4 CAPA & complaint files) | FDA-ProcessInspection |
| CAPA medical device / closed-loop CAPA / effectiveness check / FDA 483 CAPA deficiency | FDA-21CFR-820 (§4 CAPA §8.5) | ICH-Q10, FDA-ProcessInspection |
| Combination product definition §3.2(e) / four types: single-entity, co-packaged, cross-labeled, investigational | FDA-21CFR-Part4 (§0 Overview, §1 Definitions) | FDA-ComboProd-CGMP |
| PMOA determination / primary mode of action / 5 MOA categories / PMOA tie-breaker | FDA-21CFR-Part4 (§2 RFD & PMOA §4.8) | FDA-ComboProd-CGMP, FDA-21CFR-820 |
| RFD process / Request for Designation / OCP / 60-day clock / center assignment | FDA-21CFR-Part4 (§2 RFD & jurisdiction §4.6–4.9) | — |
| Combination product CGMP dual compliance / §4.4 streamlined / Part 211 + Part 820 both apply | FDA-21CFR-Part4 (§3 CGMP dual compliance §4.4) | FDA-21CFR-820, FDA-21CFR-211 |
| CDMO combination product responsibility / quality agreement combo product / ADE vs MDR dual reporting | FDA-21CFR-Part4 (§3 CDMO responsibilities) | FDA-ComboProd-CGMP, FDA-21CFR-820 |
| IND required when / IND exemptions / BA BE exemption §312.2 / interstate commerce trigger | FDA-21CFR-Part312 (§0 Overview & exemptions) | — |
| Phase 1 Phase 2 Phase 3 definitions §312.21 / phase-appropriate CGMP / FDA 2008 CGMP guidance | FDA-21CFR-Part312 (§1 Types & phases §312.21) | FDA-ProcessVal |
| IND CMC section §312.23 / drug substance drug product CMC requirements / sterile injectable IND CMC | FDA-21CFR-Part312 (§2 CMC section §312.23) | FDA-21CFR-211 |
| IND safety report §312.32 / SUSAR definition / 7-day report / 15-day report / clinical hold trigger | FDA-21CFR-Part312 (§3 Sponsor obligations §312.32) | — |
| CDMO investigational drug manufacturing / Form FDA 1572 / clinical hold CDMO impact / IND batch records | FDA-21CFR-Part312 (§4 Investigator & CDMO §312.60) | FDA-21CFR-211 |

### Personnel & Training

| Topic | ★★★ Primary (section hint) | ★★ Secondary |
|---|---|---|
| Gowning / personnel qualification | TR62 §1 · TR22 §5 · TR13 §4 | TR29, TR70, TR85, TR90 |
| Aseptic operator qualification | TR62 (§1-§3) · TR22 §5 | PtC-12 §3, PtC-Isolators §2 |

### Supply Chain & Distribution

| Topic | ★★★ Primary (section hint) | ★★ Secondary |
|---|---|---|
| GDP / distribution | **PICS-PE011** (§0-§10 Comprehensive GDP) · TR52 (§1-§4 Framework) · TR46 (§3a-§7 Global) | TR39 |
| Cold chain / temperature control | ISPE-CTC (§0-§4 Mapping & qualification) · TR39 · **PICS-PE011** (§9 Transportation) · TR52 · TR46 | PtC-9, PtC-14 |
| Warehouse operations / storage | **PICS-PE011** (§3 Premises, §5 Operations) · USP-1079 | TR52, TR39 |
| Returns / recalls / falsified products | **PICS-PE011** (§6 Complaints-Returns-Recalls) | TR52 |
| Drug shortage prevention | TR68 (§2-§4 Risk triage, DSPR Plan) | PtC-9, TR91 |
| Pandemic preparedness | PtC-9 (§1-§5 All domains) | TR68 |
| Supplier / vendor qualification | PtC-13 §1-§3 · TR66 §5 | TR65, TR52, TR39, TR90 |
| Excipient risk assessment | TR54-6 (§3-§6B QRM model, §10 Case studies) | — |

### Technology Transfer

| Topic | ★★★ Primary (section hint) | ★★ Secondary |
|---|---|---|
| Technology transfer / 技術轉移 | ISPE-TechTransfer (§0-§5 Full lifecycle) · TR65 (§0-§4 PDA framework) | TR60, PtC-15 |
| Analytical method transfer | ISPE-TechTransfer §3 | — |
| Biologics TT | ISPE-TechTransfer §6 | ISPE-Vol6 |
| Knowledge management / KM | TR60 · ISPE-TechTransfer · TR91 | TR65, TR90 |

### ATMP / Cell & Gene Therapy

| Topic | ★★★ Primary (section hint) | ★★ Secondary |
|---|---|---|
| ATMP facility / 先進療法設施 | PtC-14 (§1-§4 Risk, Facilities, Utilities, Equipment) | PtC-15, PICS-Annex2 |
| ATMP raw materials | PtC-13 (§1 Categories, §3a-§3b Qualification) | PICS-Annex2 |
| Plasmid / viral vector | PtC-11 (§1 Categorization, §3 Control, §4 Filtration) | PtC-14 |
| TSE/BSE / animal-derived | PtC-13 §1 | PICS-Annex2 |
| Mobile manufacturing | PtC-15 (§1 Technology, §2-§3 Regulatory) | — |

### Change Control & Lifecycle

| Topic | ★★★ Primary (section hint) | ★★ Secondary |
|---|---|---|
| Change control / 變更管制 | ICH-Q12 (§2 ECs, §4 PACMP, §5 PLCM) · TR91 §3-§4 · TR60 | TR66, TR90, TR68, PtC-9 |
| Post-approval change management | ICH-Q12 (§2-§5 full framework) · TR91 (§3 Tools: ECs, PACMP, PLCM) | TR68, ICH-Q10 §3 |
| Established conditions / ECs / 已確立條件 | ICH-Q12 (§2 EC identification, §3 Reporting categories, §Annex I examples) | TR91 §2, TR60 |
| PACMP / change management protocol | ICH-Q12 (§4 PACMP design + regulatory treatment, §Annex II examples) | TR91 §3 |
| Product lifecycle management / PLCM | ICH-Q12 (§5 PLCM document structure and contents) · ICH-Q10 (§3 Lifecycle) | TR60, TR91 |

### Continuous Manufacturing (ICH Q13)

| Topic | ★★★ Primary (section hint) | ★★ Secondary |
|---|---|---|
| Continuous manufacturing / CM overview | ICH-Q13 (§0 Intro, §1 Scientific considerations) | FDA-ProcessVal §III |
| State of Control vs Steady State / CM | ICH-Q13 (§1 §2.1 distinction table, §Annex V examples) | — |
| Material traceability / diversion strategy | ICH-Q13 (§1 §2.2 traceability requirements, design factors) | — |
| CM batch definition / batch size | ICH-Q13 (§2 §4.2 four methods, four output increase modes) | PICS-Annex15 §2 |
| CM control strategy / Active Process Controls | ICH-Q13 (§2 §4.1 five-element framework, §4.3 description) | ICH-Q8R2 |
| CPV / Continuous Process Verification for CM | ICH-Q13 (§3 §4.7 CPV replacing traditional PV, five justification elements) | FDA-ProcessVal §V |
| CM regulatory submission / CTD mapping | ICH-Q13 (§2 §4.5 Table 1 CTD sections, §4.6 conversion from batch) | — |
| CM lifecycle management / PQS for CM | ICH-Q13 (§3 §4.8 planned events vs disturbances, §4.9 Q12 integration) | ICH-Q12, ICH-Q10 |
| CM disturbances / transient events | ICH-Q13 (§3 §4.8 distinction, §Annex V three scenarios + Funnel Plot) | — |

### Analytical Procedure Development (ICH Q14)

| Topic | ★★★ Primary (section hint) | ★★ Secondary |
|---|---|---|
| Analytical Target Profile / ATP | ICH-Q14 (§0 Intro, §1 ATP definition — 3 elements, 4 lifecycle functions) | — |
| Minimal vs Enhanced analytical approach | ICH-Q14 (§0 §2.1 comparison table, commercial value logic) | — |
| PAR / Proven Acceptable Range (single parameter) | ICH-Q14 (§2 §5.2 PAR definition, set-point vs PAR vs MODR) | — |
| MODR / Method Operable Design Region | ICH-Q14 (§2 §5.2 MODR for multi-parameter, Design Space analogue) | ICH-Q8R2 |
| Analytical Control Strategy / ACS | ICH-Q14 (§2 §6 four ACS elements, ECs for analytical procedures) | — |
| System Suitability Test / SST design | ICH-Q14 (§2 §6.1 three design considerations, sample suitability for biologics) | ICH-Q2 |
| Analytical procedure lifecycle management | ICH-Q14 (§3 §7 Q12 tools: ECs, PACMP, PLCM applied to AP) | ICH-Q12, TR91 |
| AP change evaluation / Table 2 | ICH-Q14 (§3 §7 Figure 2 risk framework, Table 1 knowledge×risk matrix, Table 2 three change types) | ICH-Q2 |
| Multivariate analytical procedures / PLS NIRS | ICH-Q14 (§4 §8 latent variable models, calibration set strategy, model maintenance) | — |
| RTRT / Real-Time Release Testing | ICH-Q14 (§4 §9 RTRT definition, validation per Q2, CTD placement) | ICH-Q8R2 |
| Analytical procedure regulatory submission | ICH-Q14 (§4 §10 CTD mapping S.4.2/P.5.2, S.4.3/P.5.3, S.2.6/P.2) | ICH-Q2 |

### Ph.Eur. European Pharmacopoeia

> Use Ph.Eur. chapters when the question specifically involves EU batch release methods or European compendial requirements. For US-centric questions, prefer USP equivalents.

| Topic | ★★★ Primary (section hint) | ★★ Secondary (USP equivalent) |
|---|---|---|
| Sterility test (EU) / 無菌試驗 (歐) | PhEur-261 (§0 Methods, §1 Membrane filtration, §2 Direct inoculation) | USP-71 |
| Bacterial endotoxin (EU) / BET (歐) | PhEur-2614 (§0 Methods, §1 Validation, §2 Limits) | USP-85 |
| Sub-visible particulates (EU) / 不可見微粒 (歐) | PhEur-2919 (§0-§1 LO + microscopic, limits) | USP-788, USP-1788 |
| Visible particulates (EU) / 可見微粒 (歐) | PhEur-2920 (§0 AVI + MVI criteria) | USP-790, USP-1790 |
| Glass containers (EU) | PhEur-321 (§0 Classification, §1 Chemical tests) | USP-660 |
| Sterile single-use syringes (EU) | PhEur-338 (§0 Design, §1 Physical & biological tests) | TR73, ISO-11608-1 |
| Preparation of sterile products (EU) / 無菌製備方法 | PhEur-511 (§0-§1 Sterilization methods, SAL decision tree) | USP-1211, USP-1229 |

---

## Not Covered

- Specific drug formulation / chemistry
- PDA reports not in library (e.g., TR14, TR28, TR44, TR83)
- ICH guidelines not yet in library (Q1, Q3, Q4, Q5 series, Q6, Q7, Q11) — Q8(R2), Q9(R1), Q10, Q12, Q13, Q14 are available
- Full FDA CFR Part 211 / EU GMP Part I/II
- API synthesis manufacturing

### USP Pharmacopeial Standards

| Topic | ★★★ Primary (section hint) | ★★ Secondary |
|---|---|---|
| Sterility test / 無菌試驗 | USP-71 (§0 Intro, §1 Methods) | PICS-Annex1 §8, FDA-Aseptic §04 |
| Bacterial endotoxin / BET / LAL | USP-85 (§0 Methods, §1 Validation, §2 Limits) | USP-151 (rabbit pyrogen, MAT) |
| Depyrogenation overview | USP-1228 (§0-§2 Control strategies) | USP-1228-1, USP-1228-5 |
| Dry heat depyrogenation | USP-1228-1 (§1 Fundamentals, §2 Validation) | USP-1228 |
| Depyrogenation by filtration/rinsing | USP-1228-3 · USP-1228-4 | USP-1228 |
| Endotoxin indicators | USP-1228-5 (§0 Preparation, §1 LRV analysis) | USP-1228 |
| Sterilization methods / 滅菌方法 | USP-1211 (§0-§2 SAL, methods) · USP-1229 (§0-§1 decision tree) | TR1 (moist heat), PICS-Annex1 §8 |
| Biological indicators / BI | USP-55 (§0 Requirements, §1 D-value methods) | USP-1228-5 (endotoxin EI) |
| Particulate matter / 微粒 (injectables) | USP-788 (§0-§2 LO + microscopic, limits) | USP-787 (proteins), USP-1788 (methods ref) |
| Particulate matter / 微粒 (proteins) | USP-787 (§0-§1 protein-specific) | USP-788, USP-1788 |
| Particulate matter / 微粒 (ophthalmic) | USP-789 (§0 all methods + limits) | USP-771 |
| Subvisible particulate methods reference | USP-1788 (§0 intro, §1a-§1b LO, §2 microscopic) | USP-788, USP-787 |
| Visible particulate inspection | USP-1790 (§0-§3 MVI, AVI, Knapp, PoD) | USP-790, TR85 |
| Globule size / lipid emulsion / PFAT5 | USP-729 (§0-§1 DLS + LO, ≤0.05%) | — |
| Container closure integrity / package integrity | USP-1207 (§1 deterministic, §2 probabilistic) | TR86, TR27 |
| Glass containers / 玻璃容器 | USP-660 (§0 classification, §1 chemical tests) | USP-1660 (delamination) |
| Glass delamination / inner surface | USP-1660 (§0 mechanism, §1 ICP-MS, mitigation) | USP-660 |
| Plastic packaging / 塑膠包材 | USP-661 (§0-§2 materials, tests, biological) | USP-381 (elastomers) |
| Elastomeric components / rubber stoppers | USP-381 (§0-§2 classification, phys-chem, biological) | USP-661 |
| Container performance / 容器效能 | USP-671 (§0-§2 light, moisture, special containers) | USP-670 (auxiliary components) |
| Auxiliary packaging / desiccants | USP-670 (§0-§1 coils, desiccants, §2 acceptance) | USP-671 |
| Sterile compounding / 無菌調配 | USP-797 (§0 scope/categories, §1-§2 garbing/facilities, §3-§5 QA/BUD) | — |
| EM / microbial control / 微生物監控 | USP-1116 (§0-§1 ISO classes, action levels) | TR13, PICS-Annex1 §9 |
| Bioburden / non-sterile 微生物負荷 | USP-1115 (§0 TAMC/TYMC, limits, risk-based) | TR90 |
| Disinfectants / sporicidal agents | USP-1072 (§0 types, §1 efficacy testing) | TR70 |
| Rapid microbial methods / RMM | USP-1071 (§0 validation, equivalency) | TR13 |
| Osmolality / tonicity / 滲透壓 | USP-785 (§0 theory, §1 instruments, §2 procedures) | — |
| pH testing | USP-791 (§0-§2 electrodes, calibration, procedures) | — |
| Minimum fill / 最低裝量 | USP-755 (§0 two-stage criteria) | — |
| Ophthalmic quality tests | USP-771 (§0-§2 full test panel) | USP-789 |
| Biologics general / 生物製劑通則 | USP-1085 (§0 cell banking, impurities, viral safety) | ISPE-Vol6 |

---

## USP Synonym Table (add to main synonym table above)

| User says (EN/ZH) | Search terms |
|---|---|
| 無菌試驗 / sterility test failure | sterility test, FTM, SCDM, membrane filtration, 14-day |
| 內毒素試驗 / endotoxin / BET / LAL | bacterial endotoxin, BET, LAL, gel-clot, chromogenic, MVD |
| 除熱原 / 去熱原 | depyrogenation, LRV, endotoxin indicator, Fh value |
| 微粒 / 不可見微粒 / particulates | subvisible particulate, light obscuration, PFAT5, 10 µm |
| 可見異物 / visible particles | visible inspection, PoD, Knapp, AVI, MVI |
| 包裝完整性 / CCI test / leak test | container closure integrity, HVLD, vacuum decay, MALL, CCIT |
| 穩定性 CCIT / stability CCI | CCIT in lieu of sterility, stability protocol, bubble test, dye penetration |
| 參數放行 / parametric release | parametric release, CPG 460.800, load monitor, Class 5 indicator |
| 容器密封變更 / CCS change | glass vial change, stopper change, PAS, CBE-30, comparability protocol |
| 玻璃脫層 / 玻璃片 | delamination, glass flakes, lamellae, ICP-MS |
| 無菌調配 / CSP / BUD | compounded sterile preparation, Category 1/2/3, beyond-use date |
| 滲透壓 / osmolality | osmolality, osmolarity, mOsmol, freezing point depression |
| 膠塞 / 橡膠封蓋 | elastomeric stopper, rubber closure, penetrability, fragmentation |

---

## Topic Summaries (`knowledge/topics/`)

Cross-document synthesized summaries. Use instead of grepping individual report MDs when the question spans multiple sources on a focused workflow topic.

| Topic | File | Covers |
|-------|------|--------|
| APS in filling isolator | `topics/APS-filling-isolator.md` | Isolator-specific APS design, personnel workflow, BI placement, batch size, acceptance criteria — synthesized from TR22, PtC-Isolators, PtC-12 |
| Disinfectant efficacy study | `topics/disinfectant-efficacy-study.md` | Carrier tests, suspension tests, in-situ field studies, log-reduction targets, documentation — synthesized from TR70, USP-1072 |
| VPHP cycle development | `topics/VPHP-cycle-development.md` | Cycle parameter rationale, BI placement, H₂O₂ concentration decay, validation phases — synthesized from TR70, PtC-Isolators |

