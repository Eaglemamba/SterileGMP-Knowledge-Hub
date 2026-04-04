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

---

## Topic Router

### Aseptic & Sterile Processing

| Topic | ★★★ Primary (section hint) | ★★ Secondary |
|---|---|---|
| Media fill / APS / 培養基充填 | TR22 (§4 Elements, §5 Personnel) · TR62 (§3 APS — manual) | Guide-No1, PtC-12 §8, PtC-Isolators §8 |
| Aseptic processing / 無菌製程 | PICS-Annex1 §8 · FDA-Aseptic §01-§04 · PtC-1 (all topics) | TR22, TR62, PtC-12, PtC-Isolators |
| Sterile filtration / 除菌過濾 | TR26 (§4 Qualification, §6 Validation, §7 Integrity) | PtC-1 §6, TR90, PICS-Annex1 §8 |
| PUPSIT / filter integrity | TR26 §7 · PtC-1 §6 · PICS-Annex1 §8 | FDA-Aseptic §04 |
| Moist heat sterilization / 濕熱滅菌 | TR1 (§1 Science, §3 Design, §5 PPQ) · PICS-Annex1 §8 | TR60 |
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
| Cleanroom classification | ISPE-Vol3 §1b · PICS-Annex1 §4 · FDA-Aseptic §02 | — |
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
| Process validation / 製程驗證 | FDA-ProcessVal (§III-§V Stages 1-3) · TR60 (§1-§3 Lifecycle) | TR22, TR26, TR90 |
| C&Q / commissioning & qualification | ISPE-Vol5 (§1-§6 Framework, §7a-§7b Testing) | TR60 |
| FAT / SAT | ISPE-Vol5 §6-§7a | ISPE-CTC §1, Guide-No1 |
| System risk assessment / CDE | ISPE-Vol5 §4 | ISPE-HVAC §9 |
| CPV / continued process verification | FDA-ProcessVal §V · TR60 §3 | TR1 §6 |
| Statistical methods / SPC | TR60 §A1b · FDA-ProcessVal §V · TR13 §5a | ISPE-Sampling |
| Equipment qualification IQ/OQ/PQ | TR60 · ISPE-CTC (§2-§3 CTC-specific) · ISPE-HVAC §4 | TR26, Guide-No1 |
| CTC / thermal mapping | ISPE-CTC (§0 URS, §2 Strategy, §3 Qualification) | — |

### Containers & Packaging

| Topic | ★★★ Primary (section hint) | ★★ Secondary |
|---|---|---|
| CCI / container closure integrity | TR86 (§1-§2 Challenges, §3 Methods) · TR27 (§1-§3 Methods) | TR73 §12, TR43, TR90 |
| Prefilled syringe / 預充填注射器 | TR73 (§12-§15) · TR73-2 (EU MDR) | TR43 §4 (syringe defects), Guide-No1 |
| Glass defects / 玻璃缺陷 | TR43 (§0-§5 All five lexicons) | TR87, TR85 |
| Glass vial handling / breakage | TR87 (§3 Best practices, §4 Risk, §5 Process) | TR43, TR85 |
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
| Data integrity / ALCOA+ | TR84 (§2-§4 Framework, §6a-§6b Examples) | ISPE-GAMP5 |
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
| Remote/hybrid inspection | PtC-Remote (§1-§3 Planning to closing) | PtC-9 |

### Personnel & Training

| Topic | ★★★ Primary (section hint) | ★★ Secondary |
|---|---|---|
| Gowning / personnel qualification | TR62 §1 · TR22 §5 · TR13 §4 | TR29, TR70, TR85, TR90 |
| Aseptic operator qualification | TR62 (§1-§3) · TR22 §5 | PtC-12 §3, PtC-Isolators §2 |

### Supply Chain & Distribution

| Topic | ★★★ Primary (section hint) | ★★ Secondary |
|---|---|---|
| GDP / distribution | TR52 (§1-§4 Framework) · TR46 (§3a-§7 Global) | TR39 |
| Cold chain / temperature control | ISPE-CTC (§0-§4 Mapping & qualification) · TR39 · TR52 · TR46 | PtC-9, PtC-14 |
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
| ATMP facility / 先進療法設施 | PtC-14 (§1-§4 Risk, Facilities, Utilities, Equipment) | PtC-15 |
| ATMP raw materials | PtC-13 (§1 Categories, §3a-§3b Qualification) | — |
| Plasmid / viral vector | PtC-11 (§1 Categorization, §3 Control, §4 Filtration) | PtC-14 |
| TSE/BSE / animal-derived | PtC-13 §1 | — |
| Mobile manufacturing | PtC-15 (§1 Technology, §2-§3 Regulatory) | — |

### Change Control & Lifecycle

| Topic | ★★★ Primary (section hint) | ★★ Secondary |
|---|---|---|
| Change control / 變更管制 | TR91 §3-§4 · TR60 | TR66, TR90, TR68, PtC-9 |
| Post-approval change management | TR91 (§3 Tools: ECs, PACMP, PLCM) | TR68, ICH-Q10 §3 |

---

## Not Covered

- Specific drug formulation / chemistry
- PDA reports not in library (e.g., TR14, TR28, TR44, TR83)
- Full ICH guideline text (Q8/Q9/Q10 summaries available)
- Full FDA CFR Part 211 / EU GMP Part I/II
- API synthesis manufacturing
- Laboratory analytical methods
