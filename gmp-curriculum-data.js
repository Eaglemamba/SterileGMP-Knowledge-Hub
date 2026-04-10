/*  gmp-curriculum-data.js
 *  Department-based learning tracks for SterileGMP Knowledge Hub.
 *  reports.json remains the source of truth for metadata — this file adds
 *  curated learning structure by department/role.
 *  Consumed by learning-path.html & mindmap.html.
 */

/* ── Department Learning Tracks ──────────────────────────────────── */
const departments = [
  {
    id: 'qa',
    name: 'Quality Assurance',
    nameZh: '品質保證部',
    icon: '🛡️',
    color: '#2563eb',
    description: 'GMP foundations, quality systems, risk management, contamination control strategy, validation lifecycle, and regulatory compliance.',
    tiers: [
      {
        level: 1, label: 'Foundation', labelZh: '基礎必讀',
        docs: [
          { key: 'ICH-Q10',     required: true,  why: 'Pharmaceutical Quality System — the backbone of QA operations' },
          { key: 'ICH-Q9R1',    required: true,  why: 'Quality Risk Management — every QA decision starts here' },
          { key: 'PICS-Annex1', required: true,  why: 'PIC/S Annex 1 (2022) — the definitive sterile manufacturing regulation' },
          { key: 'FDA-Aseptic', required: true,  why: 'FDA Aseptic Processing Guidance — US regulatory baseline' },
          { key: 'FDA-ProcessVal', required: true, why: 'Process Validation lifecycle — Stage 1/2/3 framework' },
        ]
      },
      {
        level: 2, label: 'Core Competency', labelZh: '核心能力',
        docs: [
          { key: 'ICH-Q8R2',    required: true,  why: 'QbD / Design Space — understanding process design rationale' },
          { key: 'TR44',         required: true,  why: 'Quality Risk Management for Aseptic Processes' },
          { key: 'TR90',         required: true,  why: 'Contamination Control Strategy — QA owns CCS per Annex 1' },
          { key: 'PICS-Annex20', required: true,  why: 'PIC/S Annex 20 — QRM regulatory perspective' },
          { key: 'ISPE-Vol5',    required: true,  why: 'Commissioning & Qualification — IQ/OQ/PQ lifecycle' },
          { key: 'TR13',         required: false, why: 'EM Program Fundamentals — QA oversees EM trending & review' },
          { key: 'TR22',         required: false, why: 'Process Simulation / Media Fills — APS oversight' },
          { key: 'ISPE-GAMP5',   required: false, why: 'Computerized System Validation & data integrity' },
        ]
      },
      {
        level: 3, label: 'Advanced', labelZh: '進階專業',
        docs: [
          { key: 'FDA-ProcessInspection', required: false, why: 'FDA Process Inspection Guide — preparing for regulatory audits' },
          { key: 'TR65',         required: false, why: 'Technology Transfer — QA role in site transfers' },
          { key: 'PICS-Annex2',  required: false, why: 'ATMPs & Biologics — QA for advanced therapies' },
          { key: 'TR91',         required: false, why: 'Post-Approval Change Management — lifecycle change control' },
          { key: 'TR49',         required: false, why: 'Biotech Cleaning Validation — QA oversight of cleaning validation programs' },
          { key: 'TR68',         required: false, why: 'Drug Shortage Prevention — quality system risk and supply continuity' },
        ]
      }
    ]
  },
  {
    id: 'qc',
    name: 'Quality Control',
    nameZh: '品質控制部',
    icon: '🔬',
    color: '#7c3aed',
    description: 'Laboratory testing methods, pharmacopoeial chapters, microbiology, endotoxin, particulates, EM programs, water testing, and deviation investigations.',
    tiers: [
      {
        level: 1, label: 'Foundation', labelZh: '基礎必讀',
        docs: [
          { key: 'USP-71',      required: true,  why: 'Sterility Tests — the definitive compendial method' },
          { key: 'USP-85',      required: true,  why: 'Bacterial Endotoxin Test (BET) — LAL/rFC methods' },
          { key: 'USP-788',     required: true,  why: 'Particulate Matter in Injections — sub-visible particles' },
          { key: 'USP-1116',    required: true,  why: 'Microbiological Control of Aseptic Environments' },
          { key: 'USP-1117',    required: true,  why: 'Microbiology Lab Best Practices — general QC micro lab guide' },
          { key: 'USP-1225',    required: true,  why: 'Validation of Compendial Procedures' },
          { key: 'TR13',        required: true,  why: 'EM Program Fundamentals — sampling strategy, trending, limits' },
        ]
      },
      {
        level: 2, label: 'Core Competency', labelZh: '核心能力',
        docs: [
          { key: 'USP-61',      required: true,  why: 'Microbial Enumeration Tests' },
          { key: 'USP-62',      required: true,  why: 'Tests for Specified Microorganisms' },
          { key: 'USP-790',     required: true,  why: 'Visible Particulates in Injections' },
          { key: 'USP-1211',    required: true,  why: 'Sterilization and Sterility Assurance' },
          { key: 'USP-1115',    required: true,  why: 'Bioburden Control — pre-sterilization testing' },
          { key: 'USP-1085',    required: true,  why: 'Endotoxin Test Guidelines — deeper BET validation guidance' },
          { key: 'USP-63',      required: false, why: 'Mycoplasma Tests — essential for biologics QC' },
          { key: 'TR88',        required: false, why: 'Microbial Data Deviation Investigations — OOS/OOT root cause' },
          { key: 'ISO-2859-1',  required: false, why: 'AQL Sampling — statistical acceptance sampling for inspections' },
          { key: 'USP-643',     required: false, why: 'Total Organic Carbon — water system QC' },
          { key: 'USP-645',     required: false, why: 'Water Conductivity — water system QC' },
          { key: 'USP-1058',    required: false, why: 'Analytical Instrument Qualification' },
          { key: 'USP-1226',    required: false, why: 'Verification of Compendial Procedures' },
          { key: 'TR39',        required: false, why: 'Bioburden Recovery Validation' },
          { key: 'PhEur-261',   required: false, why: 'Ph.Eur. 2.6.1 — Sterility Test (European method)' },
          { key: 'PhEur-2614',  required: false, why: 'Ph.Eur. 2.6.14 — Bacterial Endotoxins (European method)' },
          { key: 'USP-1',       required: false, why: 'Injections & Parenterals — foundational QC reference for parenteral products' },
          { key: 'ISPE-QC',     required: false, why: 'Quality Culture & RCA Tools — root cause analysis methodology for QC' },
        ]
      },
      {
        level: 3, label: 'Advanced', labelZh: '進階專業',
        docs: [
          { key: 'USP-1071',    required: false, why: 'Rapid Microbial Tests — modern RMM replacing traditional methods' },
          { key: 'USP-1072',    required: false, why: 'Disinfectants & Antiseptics — QC validates efficacy studies' },
          { key: 'TR85',        required: false, why: 'Enhanced Visible Particle Detection — advanced ECIM methods' },
          { key: 'TR70',        required: false, why: 'Cleaning & Disinfection — QC validates C&D programs' },
          { key: 'USP-151',     required: false, why: 'Pyrogen Test (Rabbit) — alternative pyrogen method' },
          { key: 'USP-787',     required: false, why: 'Sub-visible Particles in Biologics — protein product QC' },
          { key: 'USP-1231',    required: false, why: 'Water for Pharmaceutical Purposes — testing & specs' },
          { key: 'USP-1113',    required: false, why: 'Microbial Characterization, Identification, Strain Typing' },
          { key: 'USP-1029',    required: false, why: 'Good Documentation Practices' },
          { key: 'USP-1228',    required: false, why: 'Depyrogenation — methods overview' },
          { key: 'USP-1788',    required: false, why: 'Methods for the Determination of Sub-visible Particulates' },
          { key: 'USP-1790',    required: false, why: 'Visual Inspection of Injections — advanced methods' },
          { key: 'USP-55',      required: false, why: 'Biological Indicators — sterilization validation testing' },
          { key: 'USP-161',     required: false, why: 'Device Endotoxin & Pyrogen Testing — combination product testing' },
          { key: 'USP-631',     required: false, why: 'Color & Achromicity — analytical test method for injectables' },
          { key: 'USP-729',     required: false, why: 'Globule Size in Lipid Emulsions — specialized QC for lipid-based products' },
          { key: 'USP-755',     required: false, why: 'Minimum Fill — routine QC inspection of fill volume' },
          { key: 'USP-771',     required: false, why: 'Ophthalmic Quality Tests — QC for ophthalmic preparations' },
          { key: 'USP-785',     required: false, why: 'Osmolality & Osmolarity — injectable QC testing' },
          { key: 'USP-789',     required: false, why: 'Particulates in Ophthalmic Solutions — QC testing' },
          { key: 'USP-791',     required: false, why: 'pH — routine analytical testing for injectables' },
          { key: 'USP-921',     required: false, why: 'Water Determination (Karl Fischer) — moisture testing' },
          { key: 'USP-1229',    required: false, why: 'Sterilization of Compendial Articles — parent chapter overview' },
          { key: 'USP-1229-3',  required: false, why: 'Bioburden Monitoring — pre-sterilization testing methods' },
          { key: 'USP-1229-5',  required: false, why: 'Biological Indicators for Sterilization' },
          { key: 'PhEur-2919',  required: false, why: 'Ph.Eur. 2.9.19 — Sub-Visible Particles (European method)' },
          { key: 'PhEur-2920',  required: false, why: 'Ph.Eur. 2.9.20 — Visible Particles (European method)' },
          { key: 'PhEur-511',   required: false, why: 'Ph.Eur. 5.1.1 — Methods of Preparation of Sterile Products' },
          { key: 'ISPE-Sampling', required: false, why: 'Sampling for Water/Steam/Gases — QC sampling methodology' },
          { key: 'USP-87',      required: false, why: 'Biological Reactivity In Vitro — biocompatibility testing' },
          { key: 'USP-88',      required: false, why: 'Biological Reactivity In Vivo — biocompatibility testing' },
          { key: 'USP-381',     required: false, why: 'Elastomeric Components — testing rubber closures & seals' },
          { key: 'USP-1207-1',  required: false, why: 'CCI Test Method Selection — container closure integrity strategy' },
          { key: 'USP-1207-2',  required: false, why: 'Leak Test Technologies — CCI test method comparison' },
          { key: 'USP-1207-3',  required: false, why: 'Seal Quality Technologies — closure system evaluation' },
          { key: 'USP-1660',    required: false, why: 'Glass Inner Surface Durability — glass quality testing' },
          { key: 'USP-1663',    required: false, why: 'Extractables Assessment — E&L testing for packaging' },
          { key: 'USP-1664',    required: false, why: 'Leachables Assessment — patient safety risk assessment' },
          { key: 'PhEur-321',   required: false, why: 'Ph.Eur. 3.2.1 — Glass Containers (European method)' },
          { key: 'PhEur-338',   required: false, why: 'Ph.Eur. 3.3.8 — Sterile Single-Use Syringes (European method)' },
        ]
      }
    ]
  },
  {
    id: 'production',
    name: 'Manufacturing / Production',
    nameZh: '生產製造部',
    icon: '⚙️',
    color: '#059669',
    description: 'Aseptic filling operations, sterilization, lyophilization, process controls, and day-to-day production excellence.',
    tiers: [
      {
        level: 1, label: 'Foundation', labelZh: '基礎必讀',
        docs: [
          { key: 'pda-guide-no1', required: true,  why: 'PDA Guide No.1 — Aseptic Filling Engineering & Operation (comprehensive)' },
          { key: 'PICS-Annex1',   required: true,  why: 'PIC/S Annex 1 (2022) — manufacturing requirements & CCS' },
          { key: 'TR22',          required: true,  why: 'Process Simulation Testing (Media Fills / APS)' },
          { key: 'TR1',           required: true,  why: 'Moist Heat Sterilization / Steam Sterilization' },
          { key: 'FDA-Aseptic',   required: true,  why: 'FDA Aseptic Processing Guidance — operational expectations' },
        ]
      },
      {
        level: 2, label: 'Core Competency', labelZh: '核心能力',
        docs: [
          { key: 'TR26',          required: true,  why: 'Sterilizing Filtration of Liquids — daily filter operations' },
          { key: 'TR13-2',        required: true,  why: 'Fundamentals of Sterilization (moist heat, dry heat, radiation)' },
          { key: 'TR84',          required: true,  why: 'PUPSIT — Pre-Use/Post-Sterilization Integrity Testing' },
          { key: 'TR43',          required: false, why: 'Dry Heat Sterilization & Depyrogenation' },
          { key: 'TR13',          required: false, why: 'EM Program Fundamentals — production floor monitoring' },
          { key: 'PtC-1',         required: false, why: 'Isolator Technology for Aseptic Processing' },
          { key: 'TR85',          required: false, why: 'Single-Use Systems — integration in aseptic manufacturing' },
          { key: 'PtC-12',        required: false, why: 'RABS — Restricted Access Barrier System operations' },
          { key: 'PtC-Isolators', required: false, why: 'Isolator Technology — aseptic processing in isolator systems' },
        ]
      },
      {
        level: 3, label: 'Advanced', labelZh: '進階專業',
        docs: [
          { key: 'TR62',          required: false, why: 'Lyophilization / Freeze Drying best practices' },
          { key: 'TR73',          required: false, why: 'Prefilled Syringe Systems — filling line considerations' },
          { key: 'TR65',          required: false, why: 'Technology Transfer — production readiness at receiving site' },
          { key: 'PtC-14',        required: false, why: 'ATMP Manufacturing — specialized production requirements' },
          { key: 'TR91',          required: false, why: 'Mobile Manufacturing Units — emerging production models' },
          { key: 'TR66',          required: false, why: 'Cold Chain — handling temperature-sensitive products' },
          { key: 'PtC-15',        required: false, why: 'Mobile Manufacturing — modular and mobile production models' },
          { key: 'USP-1229-1',    required: false, why: 'Steam Sterilization — cycle design and validation' },
          { key: 'USP-1229-2',    required: false, why: 'Moist Heat Sterilization of Liquids — cycle parameters' },
          { key: 'USP-1229-4',    required: false, why: 'Sterilizing Filtration — filter validation for aseptic production' },
          { key: 'USP-1229-8',    required: false, why: 'Dry Heat Sterilization — depyrogenation tunnel operations' },
          { key: 'USP-1229-11',   required: false, why: 'VPHP Sterilization — vaporized hydrogen peroxide cycles' },
          { key: 'USP-1229-13',   required: false, why: 'SIP — Sterilize-in-Place system operations' },
          { key: 'USP-1229-14',   required: false, why: 'Sterilization Cycle Development — validation strategy' },
          { key: 'USP-797',       required: false, why: 'Sterile Compounding — aseptic technique reference' },
          { key: 'PhEur-338',     required: false, why: 'Ph.Eur. 3.3.8 — Sterile Single-Use Syringes (European standard)' },
        ]
      }
    ]
  },
  {
    id: 'engineering',
    name: 'Engineering & Maintenance',
    nameZh: '工程維護部',
    icon: '🔧',
    color: '#d97706',
    description: 'Facility design, HVAC, water systems, equipment qualification, cleanroom validation, and preventive maintenance.',
    tiers: [
      {
        level: 1, label: 'Foundation', labelZh: '基礎必讀',
        docs: [
          { key: 'ISPE-Vol3',       required: true,  why: 'ISPE Baseline Guide Vol.3 — Sterile Manufacturing Facilities' },
          { key: 'ISPE-Vol5',       required: true,  why: 'Commissioning & Qualification — IQ/OQ/PQ' },
          { key: 'ISO-14644',       required: true,  why: 'ISO 14644 — Cleanroom Classification & Standards' },
          { key: 'ISPE-HVAC',       required: true,  why: 'HVAC for Pharmaceutical Facilities' },
          { key: 'ISPE-Vol4',       required: true,  why: 'Water & Steam Systems' },
        ]
      },
      {
        level: 2, label: 'Core Competency', labelZh: '核心能力',
        docs: [
          { key: 'ISPE-ProcessGas',  required: true,  why: 'Process Gas Systems — compressed gases & distribution' },
          { key: 'ISPE-Vol6',        required: true,  why: 'Biopharmaceutical Manufacturing Facilities' },
          { key: 'ISPE-GAMP5',       required: true,  why: 'GAMP 5 — Computerized System Validation' },
          { key: 'ISO-13408',        required: false, why: 'ISO 13408 — Aseptic Processing facility requirements' },
          { key: 'ISPE-IT',          required: false, why: 'IT Infrastructure for GxP systems' },
          { key: 'pda-guide-no1',    required: false, why: 'PDA Guide No.1 — filling equipment engineering aspects' },
        ]
      },
      {
        level: 3, label: 'Advanced', labelZh: '進階專業',
        docs: [
          { key: 'PtC-14',          required: false, why: 'ATMP Facility Design — biosafety containment engineering' },
          { key: 'TR91',            required: false, why: 'Mobile Manufacturing Units — modular facility design' },
          { key: 'ISPE-TechTransfer', required: false, why: 'Technology Transfer — engineering readiness' },
          { key: 'ISPE-Vol7',       required: false, why: 'Risk-Based Manufacture — engineering risk assessment' },
          { key: 'TR85',            required: false, why: 'Single-Use Systems — engineering integration' },
          { key: 'USP-1229-6',      required: false, why: 'Liquid-Phase Sterilization — engineering parameters and validation' },
          { key: 'USP-1229-7',      required: false, why: 'EtO Sterilization — ethylene oxide cycle engineering' },
          { key: 'USP-1229-9',      required: false, why: 'Chemical Indicators for Sterilization — monitoring systems' },
          { key: 'USP-1229-10',     required: false, why: 'Radiation Sterilization — dose setting and validation' },
          { key: 'USP-1229-12',     required: false, why: 'New Sterilization Methods — emerging technologies' },
          { key: 'USP-1229-15',     required: false, why: 'Gas Filtration Sterilization — compressed gas systems' },
          { key: 'ISPE-CTC',        required: false, why: 'CTC Mapping & Monitoring — cold chain qualification engineering' },
          { key: 'ISPE-SUT',        required: false, why: 'Single-Use Technology — engineering integration and qualification' },
        ]
      }
    ]
  },
  {
    id: 'ra',
    name: 'Regulatory Affairs',
    nameZh: '法規事務部',
    icon: '📋',
    color: '#dc2626',
    description: 'Regulatory expectations, global guidelines, submission requirements, and compliance strategy for sterile products.',
    tiers: [
      {
        level: 1, label: 'Foundation', labelZh: '基礎必讀',
        docs: [
          { key: 'PICS-Annex1',    required: true,  why: 'PIC/S Annex 1 (2022) — global benchmark for sterile manufacturing' },
          { key: 'ICH-Q8R2',       required: true,  why: 'Pharmaceutical Development — QbD & regulatory expectations' },
          { key: 'ICH-Q9R1',       required: true,  why: 'Quality Risk Management — regulatory risk framework' },
          { key: 'ICH-Q10',        required: true,  why: 'Pharmaceutical Quality System — global quality model' },
          { key: 'FDA-Aseptic',    required: true,  why: 'FDA Aseptic Processing Guidance' },
        ]
      },
      {
        level: 2, label: 'Core Competency', labelZh: '核心能力',
        docs: [
          { key: 'FDA-ProcessVal',       required: true,  why: 'Process Validation — FDA lifecycle approach' },
          { key: 'FDA-ProcessInspection', required: true,  why: 'Process Inspection Guide — what FDA inspectors look for' },
          { key: 'PICS-Annex2',          required: true,  why: 'PIC/S Annex 2 — ATMPs & Biological Medicinal Products GMP' },
          { key: 'PICS-Annex20',         required: true,  why: 'PIC/S Annex 20 — Quality Risk Management' },
          { key: 'FDA-ComboProd-CGMP',   required: false, why: 'CGMP Requirements for Combination Products' },
          { key: 'FDA-ComboProd-HF',     required: false, why: 'Human Factors for Combination Products' },
          { key: 'PtC-Remote',           required: false, why: 'Remote & Hybrid GMP Inspections — regulatory expectations for virtual audits' },
          { key: 'TR73-2',               required: false, why: 'MDR Annex I for Staked Needles — EU regulatory compliance for combination devices' },
        ]
      },
      {
        level: 3, label: 'Advanced', labelZh: '進階專業',
        docs: [
          { key: 'ISO-13485',      required: false, why: 'ISO 13485 — Medical Device QMS (combo product context)' },
          { key: 'ISO-14971',      required: false, why: 'ISO 14971 — Risk Management for Medical Devices' },
          { key: 'ISO-15378',      required: false, why: 'ISO 15378 — Primary Packaging GMP (regulatory submission)' },
          { key: 'TR91',           required: false, why: 'Post-Approval Change Management — ICH Q12 & PACMP' },
          { key: 'ISPE-TechTransfer', required: false, why: 'Technology Transfer — regulatory submission support' },
          { key: 'ISO-9000',       required: false, why: 'QMS Fundamentals — vocabulary and quality principles' },
          { key: 'ISO-9001',       required: false, why: 'QMS Requirements — risk-based thinking for regulatory submissions' },
          { key: 'ISO-10993-1',    required: false, why: 'Biological Evaluation of Medical Devices — biocompatibility framework' },
          { key: 'ISO-15223-1',    required: false, why: 'Medical Device Label Symbols — regulatory labelling requirements' },
          { key: 'ISO-15223-2',    required: false, why: 'Medical Device Symbol Validation — symbol testing requirements' },
          { key: 'ISO-TR-24971',   required: false, why: 'Risk Management Application Guidance — ISO 14971 implementation' },
          { key: 'USP-87',         required: false, why: 'Biological Reactivity In Vitro — biocompatibility submission data' },
          { key: 'USP-88',         required: false, why: 'Biological Reactivity In Vivo — biocompatibility submission data' },
        ]
      }
    ]
  },
  {
    id: 'warehouse',
    name: 'Warehouse',
    nameZh: '倉儲部',
    icon: '🏗️',
    color: '#0891b2',
    description: 'Material storage & handling, GDP, cold chain management, container closure integrity, and inventory management.',
    tiers: [
      {
        level: 1, label: 'Foundation', labelZh: '基礎必讀',
        docs: [
          { key: 'USP-1079',      required: true,  why: 'Good Storage & Distribution Practices — the warehouse bible' },
          { key: 'TR52',          required: true,  why: 'Good Distribution Practices — GDP for supply chain' },
          { key: 'TR39',          required: true,  why: 'Temperature-Controlled Medicinal Products — cold chain fundamentals' },
          { key: 'TR27',          required: true,  why: 'Pharmaceutical Package Integrity — handling & storage impact on CCS' },
          { key: 'TR46',          required: true,  why: 'Last Mile Distribution — from warehouse to end user' },
        ]
      },
      {
        level: 2, label: 'Core Competency', labelZh: '核心能力',
        docs: [
          { key: 'TR66',          required: true,  why: 'Cold Chain handling — temperature excursion management' },
          { key: 'USP-1207',      required: true,  why: 'USP <1207> Package Integrity — storage conditions impact' },
          { key: 'TR87',          required: false, why: 'Glass Vial Handling & Processing — damage prevention during storage' },
          { key: 'USP-660',       required: false, why: 'Glass Containers — specifications & handling precautions' },
          { key: 'USP-661',       required: false, why: 'Plastic Packaging Systems — storage compatibility' },
          { key: 'USP-1231',      required: false, why: 'Water for Pharmaceutical Purposes — storage requirements' },
          { key: 'USP-659',       required: false, why: 'Packaging & Storage Requirements — compendial storage conditions' },
          { key: 'USP-698',       required: false, why: 'Deliverable Volume — fill volume verification testing' },
          { key: 'USP-381',       required: false, why: 'Elastomeric Components — rubber stopper/closure receiving specifications' },
        ]
      },
      {
        level: 3, label: 'Advanced', labelZh: '進階專業',
        docs: [
          { key: 'TR54-6',        required: false, why: 'Excipient Risk Assessment — incoming material management' },
          { key: 'ISO-15378',     required: false, why: 'ISO 15378 — Primary Packaging GMP (receiving & storage)' },
          { key: 'PtC-9',         required: false, why: 'COVID-19 Lessons — supply chain disruption & BCP' },
          { key: 'TR86',          required: false, why: 'Blockchain in Supply Chain — traceability & serialization' },
          { key: 'USP-670',       required: false, why: 'Auxiliary Packaging Components — desiccants, oxygen scavengers' },
          { key: 'USP-671',       required: false, why: 'Containers Performance Testing — packaging material qualification' },
          { key: 'TR68',          required: false, why: 'Drug Shortage Prevention — supply risk management' },
          { key: 'ISO-15394',     required: false, why: 'Packaging Barcodes — shipping labels & traceability standards' },
          { key: 'USP-1207-1',    required: false, why: 'CCI Test Method Selection — container closure integrity strategy' },
          { key: 'USP-1207-2',    required: false, why: 'Leak Test Technologies — CCI test method comparison' },
          { key: 'USP-1207-3',    required: false, why: 'Seal Quality Technologies — closure system evaluation' },
          { key: 'USP-1660',      required: false, why: 'Glass Inner Surface Durability — glass delamination risk' },
          { key: 'PhEur-321',     required: false, why: 'Ph.Eur. 3.2.1 — Glass Containers (European standard)' },
        ]
      }
    ]
  },
  {
    id: 'techservice',
    name: 'Technical Service',
    nameZh: '技術服務部',
    icon: '🛠️',
    color: '#8b5cf6',
    description: 'Process support, troubleshooting, technology transfer (receiving site), validation execution, and continuous process improvement.',
    tiers: [
      {
        level: 1, label: 'Foundation', labelZh: '基礎必讀',
        docs: [
          { key: 'pda-guide-no1',    required: true,  why: 'Aseptic Filling — process understanding for troubleshooting' },
          { key: 'FDA-ProcessVal',   required: true,  why: 'Process Validation — Stage 2 PPQ & Stage 3 CPV execution' },
          { key: 'TR60',            required: true,  why: 'Process Validation Lifecycle — PPQ design, SPC, CPV monitoring' },
          { key: 'TR26',            required: true,  why: 'Sterilizing Filtration — process support & troubleshooting' },
          { key: 'ICH-Q8R2',        required: true,  why: 'Pharmaceutical Development — understanding CQAs & design space' },
        ]
      },
      {
        level: 2, label: 'Core Competency', labelZh: '核心能力',
        docs: [
          { key: 'TR65',            required: true,  why: 'Technology Transfer — receiving site responsibilities' },
          { key: 'ISPE-TechTransfer', required: true, why: 'ISPE Technology Transfer — structured methodology' },
          { key: 'TR22',            required: true,  why: 'Media Fills / APS — process simulation execution' },
          { key: 'TR84',            required: false, why: 'PUPSIT — integrity testing support' },
          { key: 'TR62',            required: false, why: 'Lyophilization — cycle optimization & troubleshooting' },
          { key: 'TR90',            required: false, why: 'Contamination Control Strategy — process-side CCS elements' },
          { key: 'TR29',            required: false, why: 'Cleaning Validation — process equipment cleaning support' },
          { key: 'USP-1228-1',      required: false, why: 'Dry Heat Depyrogenation — tunnel and oven cycle support' },
          { key: 'USP-1228-3',      required: false, why: 'Depyrogenation by Filtration — filter-based depyrogenation validation' },
        ]
      },
      {
        level: 3, label: 'Advanced', labelZh: '進階專業',
        docs: [
          { key: 'PtC-14',          required: false, why: 'ATMP Manufacturing — specialized process support' },
          { key: 'PICS-Annex2',      required: false, why: 'Biologics GMP — process-specific requirements' },
          { key: 'TR88',            required: false, why: 'Microbial Data Deviation Investigation — root cause methodology' },
          { key: 'TR91',            required: false, why: 'Post-Approval Change Management — ICH Q12 & PACMP support' },
          { key: 'ISPE-Vol6',       required: false, why: 'Biopharma Facility — process fit considerations' },
          { key: 'PtC-11',          required: false, why: 'Plasmids & Vectors in ATMP — specialized gene therapy process support' },
          { key: 'PtC-13',          required: false, why: 'Materials in ATMP Manufacturing — raw material qualification' },
          { key: 'USP-1228-4',      required: false, why: 'Depyrogenation by Rinsing — WFI rinsing validation' },
          { key: 'USP-1228-5',      required: false, why: 'Endotoxin Indicators for Depyrogenation — validation indicators' },
          { key: 'ISO-11040',       required: false, why: 'Prefilled Syringe Standards — process specs for PFS systems' },
          { key: 'ISO-11608-1',     required: false, why: 'Needle-Based Injection Systems — device integration support' },
          { key: 'ISO-13926-1',     required: false, why: 'Pen-Injector Glass Cylinders — component specifications' },
          { key: 'ISO-13926-2',     required: false, why: 'Pen-Injector Plunger Stoppers — component specifications' },
          { key: 'ISO-13926-3',     required: false, why: 'Pen-Injector Seals — component specifications' },
          { key: 'USP-1663',        required: false, why: 'Extractables Assessment — E&L testing for process materials' },
          { key: 'USP-1664',        required: false, why: 'Leachables Assessment — patient safety risk from process contact materials' },
        ]
      }
    ]
  },
  {
    id: 'bt',
    name: 'Biotechnology IT (BT)',
    nameZh: '資訊技術部',
    icon: '💻',
    color: '#0f766e',
    description: 'Computerized system validation (CSV/GAMP), data integrity, GxP IT infrastructure qualification, analytical instrument qualification, and emerging digital technologies in pharmaceutical manufacturing.',
    tiers: [
      {
        level: 1, label: 'Foundation', labelZh: '基礎必讀',
        docs: [
          { key: 'ISPE-GAMP5',  required: true,  why: 'GAMP 5 — definitive CSV standard; risk-based system categorization (Cat 1–5)' },
          { key: 'ICH-Q9R1',    required: true,  why: 'Quality Risk Management — risk-based approach underpins all system validation decisions' },
          { key: 'ICH-Q10',     required: true,  why: 'Pharmaceutical Quality System — IT systems support all four PQS elements (PPQMS, CAPA, change control, management review)' },
          { key: 'USP-1029',    required: true,  why: 'Good Documentation Practices — ALCOA+ data integrity requirements for all GxP systems' },
          { key: 'PICS-Annex1', required: false, why: 'PIC/S Annex 1 (2022) — environmental monitoring and process control system requirements' },
        ]
      },
      {
        level: 2, label: 'Core Competency', labelZh: '核心能力',
        docs: [
          { key: 'ISPE-IT',     required: true,  why: 'ISPE IT Infrastructure — GxP network, server, cloud, and virtualization qualification' },
          { key: 'USP-1058',    required: true,  why: 'Analytical Instrument Qualification (AIQ) — DQ/IQ/OQ/PQ for lab instruments and software' },
          { key: 'ISPE-Vol5',   required: true,  why: 'Commissioning & Qualification — IQ/OQ/PQ lifecycle methodology for systems and equipment' },
          { key: 'FDA-ProcessInspection', required: false, why: 'FDA Process Inspection — what inspectors examine for computerized systems and data integrity' },
          { key: 'ICH-Q8R2',    required: false, why: 'Pharmaceutical Development — understanding QbD and process control system design rationale' },
          { key: 'TR90',        required: false, why: 'Contamination Control Strategy — environmental monitoring system requirements and data review' },
        ]
      },
      {
        level: 3, label: 'Advanced', labelZh: '進階專業',
        docs: [
          { key: 'TR86',        required: false, why: 'Blockchain in Supply Chain — serialization, traceability, and decentralized data integrity' },
          { key: 'TR60',        required: false, why: 'Process Validation Lifecycle — Stage 3 CPV statistical tools, SPC, and digital systems integration' },
          { key: 'TR91',        required: false, why: 'Post-Approval Change Management — IT system changes within PACMP regulatory framework' },
          { key: 'ISO-13485',   required: false, why: 'ISO 13485 — QMS for medical device software (combination product IT systems)' },
          { key: 'TR65',        required: false, why: 'Technology Transfer — IT system readiness assessment and data migration at receiving site' },
        ]
      }
    ]
  }
];

/* ── Topic Clusters (for mind-map "By Topic" view) ───────────────── */
const topicClusters = [
  {
    name: 'Aseptic Processing & Sterility',
    color: '#2563eb',
    tags: ['Aseptic', 'APS', 'Media Fill', 'Sterility', 'Isolator', 'RABS', 'Interventions', 'Line Setup', 'BFS']
  },
  {
    name: 'Sterilization & Filtration',
    color: '#7c3aed',
    tags: ['Sterilization', 'Filtration', 'Filter', 'PUPSIT', 'SIP', 'VPHP', 'Autoclave', 'Integrity Test', 'Bacterial Retention', 'Membrane', 'Bubble Point', 'Diffusion']
  },
  {
    name: 'Container Closure & Packaging',
    color: '#059669',
    tags: ['Container Closure', 'Packaging', 'CCS', 'Glass', 'Elastomer', 'Stopper', 'Closure', 'RTU', 'Needle', 'PP', 'RPP', 'TP', 'DP', 'Single-Use', 'Injectables']
  },
  {
    name: 'Quality Systems & Risk Management',
    color: '#d97706',
    tags: ['GMP', 'Quality Control', 'Risk Management', 'QRM', 'Risk Assessment', 'Validation', 'Qualification', 'IQ/OQ/PQ', 'Lifecycle', 'QbD', 'Design Space', 'CQA']
  },
  {
    name: 'Environmental Monitoring & Cleanrooms',
    color: '#dc2626',
    tags: ['EM', 'Environmental Monitoring', 'Cleanroom', 'Grade A', 'Bioburden', 'Microbiology', 'Visual Inspection']
  },
  {
    name: 'Testing Methods & Pharmacopoeia',
    color: '#0891b2',
    tags: ['Endotoxin', 'Particulate', 'Analytical', 'Methods', 'Compendial', 'LAL', 'rFC', 'Turbidity', 'pH', 'Conductivity']
  },
  {
    name: 'Facilities, Equipment & Utilities',
    color: '#8b5cf6',
    tags: ['Facility Design', 'Cleanroom', 'HVAC', 'Utilities', 'Equipment', 'Maintenance', 'Calibration', 'Water Systems']
  },
  {
    name: 'Advanced Therapies & Biologics',
    color: '#ec4899',
    tags: ['ATMP', 'Cell Therapy', 'Gene Therapy', 'Biosafety', 'BSL', 'BSC', 'Biologics', 'Lyophilization', 'Powder']
  },
  {
    name: 'Regulatory & Compliance',
    color: '#f97316',
    tags: ['Regulatory', 'Annex 1', 'ICH', 'ISO Standard', 'Medical Devices', 'Supply Chain', 'Technology Transfer', 'CDMO']
  },
  {
    name: 'Emerging Technologies',
    color: '#14b8a6',
    tags: ['AI/ML', 'Blockchain', 'Mobile Manufacturing', 'Modular', 'MMU', 'Single-Use', 'Automation', 'Mock-Up']
  }
];

/* ── Source Organisation Metadata ─────────────────────────────────── */
const sourceOrgs = {
  'PDA':    { label: 'PDA Technical Reports',  color: '#1e3a5f' },
  'ISPE':   { label: 'ISPE Guidelines',         color: '#166534' },
  'FDA':    { label: 'FDA Guidance',             color: '#991b1b' },
  'ICH':    { label: 'ICH Guidelines',           color: '#0f766e' },
  'PIC/S':  { label: 'PIC/S Annexes',            color: '#c2410c' },
  'USP':    { label: 'USP Chapters',             color: '#854d0e' },
  'ISO':    { label: 'ISO Standards',            color: '#6b21a8' },
  'Ph.Eur.':{ label: 'European Pharmacopoeia',   color: '#be185d' }
};

/* ── Helper: generate markdown for markmap (department view) ─────── */
function generateDeptMarkdown(reports) {
  let md = '# SterileGMP Department Curriculum\n';
  departments.forEach(dept => {
    md += `## ${dept.icon} ${dept.name}\n`;
    dept.tiers.forEach(tier => {
      md += `### ${tier.label} ${tier.labelZh}\n`;
      tier.docs.forEach(d => {
        const r = reports[d.key];
        const title = r ? (r.title || d.key) : d.key;
        const mark = d.required ? '★' : '○';
        md += `- ${mark} ${title}\n`;
      });
    });
  });
  return md;
}

/* ── Helper: generate markdown for markmap (topic cluster view) ──── */
function generateTopicMarkdown(reports) {
  let md = '# SterileGMP by Topic\n';
  topicClusters.forEach(cluster => {
    const matched = new Map();
    Object.entries(reports).forEach(([key, r]) => {
      if (!r.section_map || !r.section_map.length) return;
      const rTags = r.tags || [];
      if (rTags.some(t => cluster.tags.includes(t))) {
        matched.set(key, r);
      }
    });
    if (matched.size === 0) return;
    md += `## ${cluster.name} (${matched.size})\n`;
    const bySource = {};
    matched.forEach((r, key) => {
      const src = (r.source || '').split(' ')[0] || 'Other';
      if (!bySource[src]) bySource[src] = [];
      bySource[src].push({ key, title: r.title || key });
    });
    Object.entries(bySource).sort((a, b) => b[1].length - a[1].length).forEach(([src, docs]) => {
      md += `### ${src}\n`;
      docs.sort((a, b) => a.title.localeCompare(b.title)).forEach(d => {
        md += `- ${d.title}\n`;
      });
    });
  });
  return md;
}

/* ── Helper: generate markdown for markmap (by source org view) ───── */
function generateSourceMarkdown(reports) {
  let md = '# SterileGMP by Source\n';
  Object.entries(sourceOrgs).forEach(([prefix, meta]) => {
    const matched = Object.entries(reports)
      .filter(([, r]) => r.section_map && r.section_map.length && (r.source || '').startsWith(prefix))
      .sort((a, b) => (a[1].title || '').localeCompare(b[1].title || ''));
    if (!matched.length) return;
    md += `## ${meta.label} (${matched.length})\n`;
    matched.forEach(([, r]) => {
      md += `- ${r.title || 'Untitled'}\n`;
    });
  });
  return md;
}

/* ── Module export for Node.js tooling ────────────────────────────── */
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { departments, topicClusters, sourceOrgs, generateDeptMarkdown, generateTopicMarkdown, generateSourceMarkdown };
}
