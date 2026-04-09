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
    description: 'GMP foundations, quality systems, risk management, validation lifecycle, and regulatory compliance.',
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
          { key: 'PICS-Annex20', required: true,  why: 'PIC/S Annex 20 — QRM regulatory perspective' },
          { key: 'ISPE-Vol5',    required: true,  why: 'Commissioning & Qualification — IQ/OQ/PQ lifecycle' },
          { key: 'TR22',         required: false, why: 'Process Simulation / Media Fills — APS oversight' },
          { key: 'ISPE-GAMP5',   required: false, why: 'Computerized System Validation & data integrity' },
        ]
      },
      {
        level: 3, label: 'Advanced', labelZh: '進階專業',
        docs: [
          { key: 'TR65',         required: false, why: 'Technology Transfer — QA role in site transfers' },
          { key: 'TR88',         required: false, why: 'AI/ML in Pharma Manufacturing — emerging QA considerations' },
          { key: 'PICS-Annex2',  required: false, why: 'ATMPs & Biologics — QA for advanced therapies' },
          { key: 'TR86',         required: false, why: 'Blockchain in Supply Chain — traceability & integrity' },
          { key: 'FDA-ProcessInspection', required: false, why: 'FDA Process Inspection Guide — preparing for regulatory audits' },
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
    description: 'Laboratory testing methods, pharmacopoeial chapters, microbiology, endotoxin, particulates, and EM programs.',
    tiers: [
      {
        level: 1, label: 'Foundation', labelZh: '基礎必讀',
        docs: [
          { key: 'USP-71',      required: true,  why: 'Sterility Tests — the definitive compendial method' },
          { key: 'USP-85',      required: true,  why: 'Bacterial Endotoxin Test (BET) — LAL/rFC methods' },
          { key: 'USP-788',     required: true,  why: 'Particulate Matter in Injections — sub-visible particles' },
          { key: 'USP-1116',    required: true,  why: 'Microbiological Control of Aseptic Environments' },
          { key: 'USP-1225',    required: true,  why: 'Validation of Compendial Procedures' },
        ]
      },
      {
        level: 2, label: 'Core Competency', labelZh: '核心能力',
        docs: [
          { key: 'USP-61',      required: true,  why: 'Microbial Enumeration Tests' },
          { key: 'USP-62',      required: true,  why: 'Tests for Specified Microorganisms' },
          { key: 'USP-790',     required: true,  why: 'Visible Particulates in Injections' },
          { key: 'USP-1211',    required: true,  why: 'Sterilization and Sterility Assurance' },
          { key: 'USP-1058',    required: false, why: 'Analytical Instrument Qualification' },
          { key: 'USP-1226',    required: false, why: 'Verification of Compendial Procedures' },
          { key: 'TR39',        required: false, why: 'Bioburden Recovery Validation' },
          { key: 'PhEur-261',   required: false, why: 'Ph.Eur. 2.6.1 — Sterility Test (European method)' },
          { key: 'PhEur-2614',  required: false, why: 'Ph.Eur. 2.6.14 — Bacterial Endotoxins (European method)' },
        ]
      },
      {
        level: 3, label: 'Advanced', labelZh: '進階專業',
        docs: [
          { key: 'USP-1231',    required: false, why: 'Water for Pharmaceutical Purposes — testing & specs' },
          { key: 'USP-1113',    required: false, why: 'Microbial Characterization, Identification, Strain Typing' },
          { key: 'USP-1029',    required: false, why: 'Good Documentation Practices' },
          { key: 'USP-1079',    required: false, why: 'Good Storage and Distribution Practices' },
          { key: 'USP-1228',    required: false, why: 'Depyrogenation — methods overview' },
          { key: 'USP-1788',    required: false, why: 'Methods for the Determination of Sub-visible Particulates' },
          { key: 'USP-1790',    required: false, why: 'Visual Inspection of Injections — advanced methods' },
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
          { key: 'TR13',          required: false, why: 'EtO Sterilization Technology' },
          { key: 'PtC-1',         required: false, why: 'Isolator Technology for Aseptic Processing' },
          { key: 'TR85',          required: false, why: 'Single-Use Systems — integration in aseptic manufacturing' },
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
        ]
      },
      {
        level: 3, label: 'Advanced', labelZh: '進階專業',
        docs: [
          { key: 'ISO-13485',      required: false, why: 'ISO 13485 — Medical Device QMS (combo product context)' },
          { key: 'ISO-14971',      required: false, why: 'ISO 14971 — Risk Management for Medical Devices' },
          { key: 'TR88',           required: false, why: 'AI/ML in Pharma — emerging regulatory landscape' },
          { key: 'TR86',           required: false, why: 'Blockchain in Supply Chain — regulatory implications' },
          { key: 'ISPE-TechTransfer', required: false, why: 'Technology Transfer — regulatory submission support' },
        ]
      }
    ]
  },
  {
    id: 'scm',
    name: 'Supply Chain & Procurement',
    nameZh: '供應鏈與採購部',
    icon: '📦',
    color: '#0891b2',
    description: 'Component qualification, supplier management, container closure systems, cold chain, and supply chain integrity.',
    tiers: [
      {
        level: 1, label: 'Foundation', labelZh: '基礎必讀',
        docs: [
          { key: 'TR27',          required: true,  why: 'Pharmaceutical Package Integrity — CCS fundamentals' },
          { key: 'USP-1207',      required: true,  why: 'USP <1207> Package Integrity Evaluation' },
          { key: 'TR73',          required: true,  why: 'Prefilled Syringe System — component lifecycle' },
          { key: 'USP-661',       required: true,  why: 'Plastic Packaging Systems — E&L testing' },
          { key: 'USP-660',       required: true,  why: 'Glass Containers — specifications & testing' },
        ]
      },
      {
        level: 2, label: 'Core Competency', labelZh: '核心能力',
        docs: [
          { key: 'TR73-2',        required: true,  why: 'Prefilled Syringe Materials & Performance' },
          { key: 'USP-381',       required: false, why: 'Elastomeric Closures for Injections' },
          { key: 'TR85',          required: false, why: 'Single-Use Systems — procurement & vendor management' },
          { key: 'TR66',          required: false, why: 'Cold Chain Distribution — temperature-sensitive supply' },
          { key: 'ISO-15378',     required: false, why: 'Primary Packaging for Medicinal Products — GMP' },
          { key: 'USP-1079',      required: false, why: 'Good Storage & Distribution Practices' },
        ]
      },
      {
        level: 3, label: 'Advanced', labelZh: '進階專業',
        docs: [
          { key: 'TR86',          required: false, why: 'Blockchain for Pharma Supply Chain — traceability' },
          { key: 'TR91',          required: false, why: 'Mobile Manufacturing Units — decentralized supply' },
          { key: 'ISPE-SUT',      required: false, why: 'ISPE Single-Use Technology — supply chain considerations' },
          { key: 'ISO-11040',     required: false, why: 'ISO 11040 — Prefilled Syringe Standards (procurement specs)' },
        ]
      }
    ]
  },
  {
    id: 'rd',
    name: 'R&D / Process Development',
    nameZh: '研發與製程開發部',
    icon: '🧪',
    color: '#8b5cf6',
    description: 'Process design, QbD, scale-up, technology transfer, and development of sterile manufacturing processes.',
    tiers: [
      {
        level: 1, label: 'Foundation', labelZh: '基礎必讀',
        docs: [
          { key: 'ICH-Q8R2',        required: true,  why: 'Pharmaceutical Development — QbD, design space, CQAs' },
          { key: 'ICH-Q9R1',        required: true,  why: 'Quality Risk Management — risk-based process design' },
          { key: 'FDA-ProcessVal',   required: true,  why: 'Process Validation — Stage 1 Process Design' },
          { key: 'pda-guide-no1',    required: true,  why: 'Aseptic Filling — process design fundamentals' },
          { key: 'TR26',             required: true,  why: 'Sterilizing Filtration — process design & validation' },
        ]
      },
      {
        level: 2, label: 'Core Competency', labelZh: '核心能力',
        docs: [
          { key: 'TR65',            required: true,  why: 'Technology Transfer — sending site responsibilities' },
          { key: 'ISPE-TechTransfer', required: true, why: 'ISPE Technology Transfer — structured methodology' },
          { key: 'TR62',            required: false, why: 'Lyophilization — process development & cycle design' },
          { key: 'TR22',            required: false, why: 'Media Fills — process simulation design' },
          { key: 'TR84',            required: false, why: 'PUPSIT — integrity testing for process design' },
        ]
      },
      {
        level: 3, label: 'Advanced', labelZh: '進階專業',
        docs: [
          { key: 'PtC-14',          required: false, why: 'ATMP Manufacturing — process development for cell/gene therapy' },
          { key: 'PICS-Annex2',      required: false, why: 'Biologics GMP — development to commercial' },
          { key: 'TR88',            required: false, why: 'AI/ML — process optimization & predictive modeling' },
          { key: 'TR91',            required: false, why: 'Mobile Manufacturing — agile process design' },
          { key: 'ISPE-Vol6',       required: false, why: 'Biopharma Facility design for process development' },
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
