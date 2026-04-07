# USP General Chapters — Sterile GMP Inventory

> Comprehensive inventory of all USP General Chapters relevant to sterile pharmaceutical GMP manufacturing (aseptic fill-finish focus).
> Last updated: 2026-04-05

## Reading Guide

- **Chapter \<1–999\>**: Mandatory when referenced in a monograph or General Chapter
- **Chapter \<1000–1999\>**: Informational / advisory (best practices, guidance)
- **Repo Status**: Whether the chapter already has a folder scaffold in this repo
- **Priority**: P0 = already scaffolded; P1 = high relevance to aseptic fill-finish; P2 = supporting; P3 = niche/optional

---

## 1. Sterility & Microbiology Testing

| Chapter | Title | Type | Scope | Repo Status | Priority |
|---------|-------|------|-------|-------------|----------|
| \<61\> | Microbiological Examination of Nonsterile Products: Microbial Enumeration Tests | Mandatory | Bioburden enumeration methods (pour plate, membrane filtration). Used for raw material, packaging component, and in-process bioburden testing. | -- | P2 |
| \<62\> | Microbiological Examination of Nonsterile Products: Tests for Specified Microorganisms | Mandatory | Detection of objectionable organisms (e.g., *Pseudomonas*, *S. aureus*, *Burkholderia cepacia*). Applied to bioburden screening of non-sterile components entering aseptic areas. | -- | P2 |
| \<63\> | Mycoplasma Tests | Mandatory | Detection methods for mycoplasma contamination — critical for biologic and cell therapy products. | -- | P3 |
| \<71\> | Sterility Tests | Mandatory | THE definitive sterility test method: membrane filtration and direct inoculation. Defines media, incubation conditions, sample sizes, and test validation (bacteriostasis/fungistasis). The single most critical release test for sterile drug products. | Scaffolded | P0 |
| \<1071\> | Rapid Sterility Testing of Short-Life Products | Informational | Alternative/rapid sterility test methods for radiopharmaceuticals and other short-expiry products. Niche but relevant for rapid methods adoption. | -- | P3 |
| \<1072\> | Disinfectants and Antiseptics | Informational | Selection, qualification, and rotation of disinfectants for cleanroom and aseptic environments. Directly supports EM programs and contamination control strategies (CCS). | -- | P1 |
| \<1115\> | Bioburden Control of Nonsterile Drug Substances and Products | Informational | Bioburden control strategies upstream of aseptic processing — incoming raw materials and components. Links to \<1229.3\>. | -- | P2 |
| \<1116\> | Microbiological Control and Monitoring of Aseptic Processing Environments | Informational | Comprehensive guidance on EM program design: sampling methods (active air, settle plates, surface), alert/action limits, trending, personnel monitoring, and Grade A/B/C/D classification correlation. THE reference for EM program design. | Scaffolded | P0 |
| \<1117\> | Microbiological Best Laboratory Practices | Informational | Laboratory practices for pharmaceutical microbiology labs — media prep, incubation, identification methods, contamination prevention. Supporting chapter for labs performing \<61\>, \<62\>, \<71\>, \<85\> tests. | -- | P2 |

---

## 2. Endotoxin & Pyrogen Testing

| Chapter | Title | Type | Scope | Repo Status | Priority |
|---------|-------|------|-------|-------------|----------|
| \<85\> | Bacterial Endotoxins Test (BET) | Mandatory | LAL (Limulus Amebocyte Lysate) and recombinant Factor C (rFC) test methods: gel-clot, turbidimetric, chromogenic. Defines endotoxin limits (5 EU/kg for most parenterals), method validation (inhibition/enhancement), and positive product controls. Critical release test for all injectable products. | Scaffolded | P0 |
| \<151\> | Pyrogen Test | Mandatory | Rabbit pyrogen test (RPT) — the original in vivo pyrogen detection method. Being progressively replaced by \<85\> BET and \<1085\> MAT but still compendial. Applied when BET is not feasible (interfering products). | -- | P2 |
| \<161\> | Medical Devices — Bacterial Endotoxin and Pyrogen Testing | Mandatory | BET and pyrogen testing specific to medical devices and combination product device constituents. Relevant for PFS, autoinjector components, and RTU container systems. | -- | P2 |
| \<1085\> | Bacterial Endotoxins — Process Validation and Routine Monitoring | Informational | Guidance on hold-time studies, endotoxin recovery validation, routine monitoring strategies, and investigation of OOS endotoxin results. Practical companion to \<85\>. | -- | P2 |

---

## 3. Particulate Matter

| Chapter | Title | Type | Scope | Repo Status | Priority |
|---------|-------|------|-------|-------------|----------|
| \<787\> | Subvisible Particulate Matter in Therapeutic Protein Injections | Mandatory | Particle counting specific to protein-based injectables (mAbs, biologics). Supplements \<788\> with additional size ranges (2 µm, 5 µm) and flow imaging microscopy (FIM). Critical for biologic CDMO clients. | -- | P1 |
| \<788\> | Particulate Matter in Injections | Mandatory | THE subvisible particle test for injectable products: light obscuration (LO) and microscopic methods. Defines limits: ≤6000 particles ≥10 µm and ≤600 particles ≥25 µm per container. Required release test for all SVP/LVP. | Scaffolded | P0 |
| \<789\> | Particulate Matter in Ophthalmic Solutions | Mandatory | Particle testing for ophthalmic preparations — similar to \<788\> but with ophthalmic-specific limits. Relevant if facility handles ophthalmic sterile products. | -- | P3 |
| \<790\> | Visible Particulates in Injections | Mandatory | Visual inspection requirements for injectable products — 100% inspection methods, defect classification, inspector qualification, and lighting/background specifications. Directly governs AQL inspection on the filling line. | -- | P1 |
| \<1788\> | Methods for the Determination of Sub-Visible Particulate Matter | Informational | Extended guidance on alternative particle characterization methods (flow imaging microscopy, Coulter counter, dynamic light scattering) beyond \<788\>. | -- | P2 |
| \<1790\> | Visual Inspection of Injections | Informational | Detailed guidance on manual and automated visual inspection programs — inspector qualification, Knapp testing, defect classification, inspection environment design. Practical companion to \<790\>. | -- | P1 |

---

## 4. Sterilization Methods — \<1229.x\> Family

| Chapter | Title | Type | Scope | Repo Status | Priority |
|---------|-------|------|-------|-------------|----------|
| \<1229\> | Sterilization of Compendial Articles | Informational | Parent chapter — overview of all sterilization methods, SAL (Sterility Assurance Level) concept (10⁻⁶), method selection decision tree, and parametric release principles. Foundation for the entire 1229 sub-series. | -- | P1 |
| \<1229.1\> | Steam Sterilization by Direct Contact | Informational | Moist heat / autoclave sterilization for equipment, components, and containers. Covers F₀ calculations, cycle development, load configuration, and biological indicator placement. THE most common sterilization method in aseptic manufacturing. | -- | P1 |
| \<1229.2\> | Moist Heat Sterilization of Aqueous Liquids | Informational | Terminal sterilization of liquid products in sealed containers. F₀ ≥ 8 min requirement, overkill vs. bioburden-based approaches, heat penetration studies. | -- | P1 |
| \<1229.3\> | Monitoring of Bioburden | Informational | Bioburden monitoring as part of sterilization validation — sampling, enumeration, species identification, trending. Links to \<61\>/\<62\> test methods. | -- | P2 |
| \<1229.4\> | Sterilizing Filtration of Liquids | Informational | 0.2 µm membrane filtration for heat-sensitive products. Filter validation (bacterial challenge with *B. diminuta*), integrity testing (bubble point, diffusion, water intrusion), PUPSIT, and filter compatibility. THE method for aseptic fill-finish of biologics. | -- | P1 |
| \<1229.5\> | Biological Indicators for Sterilization | Informational | Selection, use, and qualification of BIs for sterilization processes. Organism selection per sterilization method (*G. stearothermophilus* for steam, *B. atrophaeus* for dry heat/EtO). | -- | P2 |
| \<1229.6\> | Liquid-Phase Sterilization | Informational | Chemical sterilization of liquid-contact surfaces (e.g., peracetic acid). Niche but relevant for certain SUS and closed system sterilization. | -- | P3 |
| \<1229.7\> | Gaseous Sterilization | Informational | EtO (ethylene oxide) and other gaseous sterilants. Primarily medical device; limited pharma injectable relevance unless device constituent parts are gas-sterilized. | -- | P3 |
| \<1229.8\> | Dry Heat Sterilization | Informational | Dry heat sterilization and depyrogenation of glassware, metal equipment, and components. Overlaps with \<1228.1\> for depyrogenation. Common for vial/syringe component preparation. | -- | P1 |
| \<1229.9\> | Physicochemical Integrators and Indicators for Sterilization | Informational | Chemical indicators (CIs) and integrators — Class 1 through Class 6 per ISO 11140. Used alongside BIs for sterilization monitoring. | -- | P3 |
| \<1229.10\> | Radiation Sterilization | Informational | Gamma, e-beam, and X-ray sterilization. Primarily for medical devices and single-use components. Relevant for RTU tub sterilization. | -- | P2 |
| \<1229.11\> | Vapor Phase Sterilization | Informational | VPHP (Vaporized Hydrogen Peroxide) and other vapor-phase sterilants. THE method for isolator and RABS surface decontamination in modern aseptic manufacturing. | -- | P1 |
| \<1229.12\> | New Sterilization Methods | Informational | Emerging technologies — supercritical CO₂, pulsed light, cold plasma. Forward-looking chapter for technology assessment. | -- | P3 |
| \<1229.13\> | Sterilization-in-Place (SIP) | Informational | SIP systems for process equipment, vessels, and fluid pathways. Covers steam trap management, condensate removal, cold spots, and SIP cycle development. Critical for filling machine sterilization. | -- | P1 |
| \<1229.14\> | Sterilization Cycle Development | Informational | General framework for developing and validating sterilization cycles — any method. Covers D-value, z-value, F₀, half-cycle approach, and bracketing strategies. | -- | P1 |
| \<1229.15\> | Sterilizing Filtration of Gases | Informational | Filtration of compressed air, nitrogen, and other process gases entering Grade A/B areas. Integrity testing of hydrophobic vent filters. | -- | P2 |

---

## 5. Depyrogenation — \<1228.x\> Family

| Chapter | Title | Type | Scope | Repo Status | Priority |
|---------|-------|------|-------|-------------|----------|
| \<1228\> | Depyrogenation | Informational | Parent chapter — overview of endotoxin removal/inactivation methods, depyrogenation validation principles, and 3-log endotoxin reduction requirement. | -- | P1 |
| \<1228.1\> | Dry Heat Depyrogenation | Informational | Tunnel and oven depyrogenation of glass containers/components — ≥250°C processes. FH calculations, endotoxin challenge studies with *E. coli* endotoxin indicators. THE method for vial depyrogenation in aseptic fill-finish. | -- | P1 |
| \<1228.2\> | Depyrogenation by Filtration | Informational | Endotoxin removal via charge-modified or ultrafiltration membranes. Applied to WFI systems, buffers, and heat-sensitive solutions. | -- | P2 |
| \<1228.3\> | Depyrogenation by Inactivation | Informational | Chemical (NaOH, acid wash) and other inactivation methods for endotoxin destruction on surfaces and in solutions. Covers cleaning validation for endotoxin removal. | -- | P2 |
| \<1228.4\> | Depyrogenation by Rinsing | Informational | Rinsing-based endotoxin removal from components and equipment surfaces. WFI rinse validation and endotoxin recovery studies. | -- | P2 |
| \<1228.5\> | Endotoxin Indicators for Depyrogenation | Informational | Preparation and use of endotoxin indicators (EIs) — spiked endotoxin challenges for depyrogenation validation. Equivalent role to BIs in sterilization. | -- | P2 |

---

## 6. Sterility Assurance

| Chapter | Title | Type | Scope | Repo Status | Priority |
|---------|-------|------|-------|-------------|----------|
| \<1211\> | Sterilization and Sterility Assurance | Informational | Overarching guidance: sterility assurance concepts, SAL 10⁻⁶, relationship between sterilization methods and sterility testing, parametric release, and process simulation (media fill) principles. THE conceptual foundation tying \<71\>, \<1229.x\>, and \<1228.x\> together. | Scaffolded | P0 |

---

## 7. Biological Indicators

| Chapter | Title | Type | Scope | Repo Status | Priority |
|---------|-------|------|-------|-------------|----------|
| \<55\> | Biological Indicators — Resistance Performance Tests | Mandatory | Methods for determining D-value, z-value, and survival/kill time of biological indicator organisms. QC testing of BI lots before use in sterilization validation. | -- | P2 |
| \<1035\> | Biological Indicators for Sterilization | Informational | Selection, handling, storage, and use of BIs. Organism selection per sterilization method (*G. stearothermophilus* for steam, *B. atrophaeus* for dry heat/EtO). Complements \<55\> and \<1229.5\>. | -- | P2 |

---

## 8. Dosage Form Requirements

| Chapter | Title | Type | Scope | Repo Status | Priority |
|---------|-------|------|-------|-------------|----------|
| \<1\> | Injections and Implanted Drug Products | Mandatory | Master chapter for injectable dosage forms — defines SVP/LVP, required tests (sterility, endotoxin, particulate, pH, osmolality), labeling requirements, and container specifications. THE chapter that triggers all other sterile-related test chapters. | -- | P1 |
| \<51\> | Antimicrobial Effectiveness Testing (AET) | Mandatory | Preservative effectiveness testing for multi-dose injectable products. Defines challenge organisms, pass criteria, and retest intervals. | -- | P2 |
| \<729\> | Globule Size Distribution in Lipid Injectable Emulsions | Mandatory | PFAT5 (Percent Fat ≥ 5 µm) and mean droplet size testing for lipid emulsions (e.g., TPN, propofol). Niche but mandatory if facility handles emulsion products. | -- | P3 |
| \<755\> | Minimum Fill | Mandatory | Ensures containers deliver the labeled volume. Defines test procedures and acceptance criteria for SVP/LVP. Directly relevant to fill-weight verification on the line. | -- | P2 |
| \<771\> | Ophthalmic Products — Quality Tests | Mandatory | Sterility, particulate, and other quality tests for ophthalmic dosage forms. Include if facility handles ophthalmic products. | -- | P3 |
| \<785\> | Osmolality and Osmolarity | Mandatory | Osmolality testing by freezing point depression or vapor pressure methods. Required test for most parenteral products. | -- | P2 |
| \<791\> | pH | Mandatory | pH determination methods. Basic but compendial — required for virtually all injectable product release testing. | -- | P3 |
| \<797\> | Pharmaceutical Compounding — Sterile Preparations | Mandatory | Comprehensive requirements for sterile compounding: facility design, personnel training/qualification, BUD assignment, environmental monitoring, and quality assurance. Major 2023 revision (effective Nov 2023, phased enforcement). While focused on compounding pharmacies, its cleanroom and aseptic technique requirements align with and inform GMP manufacturing practices. | -- | P2 |
| \<1797\> | Pharmaceutical Compounding — Sterile Preparations: Good Compounding Practices | Informational | Supplementary guidance to \<797\> — best practices for sterile compounding operations. | -- | P3 |

---

## 9. Container / Closure & Packaging

| Chapter | Title | Type | Scope | Repo Status | Priority |
|---------|-------|------|-------|-------------|----------|
| \<381\> | Elastomeric Closures for Injections | Mandatory | Physical, chemical, and biological testing of rubber stoppers, plunger tips, and other elastomeric components for parenteral products. Covers extractables baseline, fragmentation, self-sealing, and coring tests. | -- | P1 |
| \<382\> | Elastomeric Component Functional Suitability in Parenteral Product Packaging/Delivery Systems | Mandatory | Functional performance testing of elastomeric components — break-loose/glide forces (syringes), penetrability, self-sealing, and compatibility under intended use conditions. | -- | P2 |
| \<660\> | Containers — Glass | Mandatory | Glass type classification (Type I borosilicate, Type II soda-lime, Type III) and chemical resistance testing (powdered glass test, water attack test). Foundation for vial/syringe barrel material selection. | -- | P1 |
| \<661\> | Plastic Packaging Systems and Their Materials of Construction | Mandatory | Parent chapter for plastic container testing. Superseded in practice by \<661.1\> and \<661.2\> sub-chapters. | -- | P1 |
| \<661.1\> | Plastic Materials of Construction | Mandatory | Material characterization and extractables testing of plastic materials used in pharmaceutical packaging (identification, physicochemical tests, biological reactivity). | -- | P1 |
| \<661.2\> | Plastic Packaging Systems for Pharmaceutical Use | Mandatory | System-level suitability testing of plastic packaging — extractables profiling, total organic carbon, heavy metals, buffering capacity. Applied to plastic syringes, bags, blow-fill-seal containers. | -- | P1 |
| \<670\> | Auxiliary Packaging Components | Mandatory | Testing requirements for secondary packaging components that may contact product (e.g., desiccants, cotton, labels with adhesive). | -- | P3 |
| \<671\> | Containers — Performance Testing | Mandatory | Mechanical performance tests: light transmission, water vapor permeation, and collapsibility for plastic containers. | -- | P2 |
| \<1207\> | Package Integrity Evaluation — Sterile Products | Informational | Parent chapter — overview of CCI (Container Closure Integrity) testing concepts, risk-based approach, and method categories (deterministic vs. probabilistic). Complements PDA TR27. | -- | P1 |
| \<1207.1\> | Package Integrity Testing in the Product Life Cycle — Test Method Selection and Validation | Informational | Guidance on selecting and validating CCI test methods across development, manufacturing release, and stability programs. Decision framework for method suitability. | -- | P1 |
| \<1207.2\> | Package Integrity Leak Test Technologies | Informational | Detailed overview of leak test methods: helium leak, vacuum decay, pressure decay, high-voltage leak detection (HVLD), headspace gas analysis, tracer gas, and mass extraction. | -- | P1 |
| \<1207.3\> | Package Seal Quality Test Technologies | Informational | Seal strength and quality test methods: dye ingress, seal force/peel testing, visual inspection, and X-ray/CT. Applied to heat-sealed bags, crimp-sealed vials, and luer-lock closures. | -- | P2 |
| \<1660\> | Evaluation of the Inner Surface Durability of Glass Containers | Informational | Delamination and glass surface degradation testing — relevant for Type I glass vials storing high-pH or chelating formulations. | -- | P2 |
| \<1663\> | Assessment of Extractables Associated with Pharmaceutical Packaging/Delivery Systems | Informational | Extractables study design: extraction conditions, analytical methods (GC-MS, LC-MS, ICP), reporting thresholds, and safety evaluation. Foundation for E&L programs. | -- | P1 |
| \<1664\> | Assessment of Drug Product Leachables Associated with Pharmaceutical Packaging/Delivery Systems | Informational | Leachables study design: correlation to extractables, analytical method development, safety qualification using TTC/PDE, and routine monitoring strategies. | -- | P1 |

---

## 10. Water Systems

| Chapter | Title | Type | Scope | Repo Status | Priority |
|---------|-------|------|-------|-------------|----------|
| \<643\> | Total Organic Carbon | Mandatory | TOC measurement methods for pharmaceutical water systems and cleaning validation. Required in-process and release test for WFI and PW. | -- | P2 |
| \<645\> | Water Conductivity | Mandatory | Three-stage conductivity testing of pharmaceutical waters. Required in-process test for WFI and PW purity verification. | -- | P2 |
| \<1231\> | Water for Pharmaceutical Purposes | Informational | Comprehensive guidance: water quality grades (PW, HPW, WFI), generation systems (distillation, RO, membrane-based WFI), distribution loop design, microbiological monitoring, chemical testing, and alert/action limits. THE reference for pharmaceutical water systems. Now accommodates membrane-based WFI generation. | -- | P1 |

---

## 11. Biological Reactivity & Biocompatibility

| Chapter | Title | Type | Scope | Repo Status | Priority |
|---------|-------|------|-------|-------------|----------|
| \<87\> | Biological Reactivity Tests, In Vitro | Mandatory | Cell culture cytotoxicity testing (elution, direct contact, agar overlay) for plastic and elastomeric materials contacting parenteral products. | -- | P2 |
| \<88\> | Biological Reactivity Tests, In Vivo | Mandatory | USP Class I–VI biocompatibility classification via implantation, systemic injection, and intracutaneous tests in animals. Class VI is required for most injectable contact materials. | -- | P2 |

---

## 12. Additional Testing & Dosage Form

| Chapter | Title | Type | Scope | Repo Status | Priority |
|---------|-------|------|-------|-------------|----------|
| \<631\> | Color and Achromicity | Mandatory | Visual assessment of color in solutions — relevant to parenteral appearance testing and stability. | -- | P3 |
| \<659\> | Packaging and Storage Requirements | Mandatory | Definitions of container types (tight, well-closed, hermetic, light-resistant) and storage conditions. Cross-cutting relevance to sterile product packaging specifications. | -- | P2 |
| \<698\> | Deliverable Volume | Mandatory | Measurement of deliverable volume from containers — applicable to fill volume verification for SVP/LVP. | -- | P2 |
| \<921\> | Water Determination (Karl Fischer) | Mandatory | Residual moisture measurement for lyophilized products — coulometric and volumetric Karl Fischer methods. Critical release test for lyo products. | -- | P2 |

---

## 13. Quality Systems, Validation & Documentation

| Chapter | Title | Type | Scope | Repo Status | Priority |
|---------|-------|------|-------|-------------|----------|
| \<1029\> | Good Documentation Practices | Informational | GDP principles: contemporaneous recording, data integrity, ALCOA+ attributes, electronic records, and error correction. Cross-cutting relevance to all GMP activities. | -- | P2 |
| \<1058\> | Analytical Instrument Qualification (AIQ) | Informational | Four-stage qualification model: DQ → IQ → OQ → PQ for analytical instruments. Applied to all QC lab equipment used in release testing. | -- | P2 |
| \<1079\> | Good Storage and Distribution Practices for Drug Products | Informational | Supply chain and warehouse temperature control relevant to sterile product cold chain and stability. | -- | P3 |
| \<1113\> | Compressed Gases | Informational | Quality requirements for compressed gases (nitrogen, air, CO₂) used in sterile manufacturing — purity, particulate, microbial contamination. Directly relevant to headspace gas and process gas systems. | -- | P2 |
| \<1225\> | Validation of Compendial Procedures | Informational | Method validation parameters (accuracy, precision, specificity, LOD/LOQ, linearity, range, robustness) for compendial test methods. Applied to all QC release methods. | -- | P2 |
| \<1226\> | Verification of Compendial Procedures | Informational | Verification (vs. full validation) of compendial methods when implemented in a new laboratory. | -- | P3 |

---

## Summary Statistics

| Category | Total Chapters | Mandatory (\<1000) | Informational (≥1000) |
|----------|---------------|--------------------|-----------------------|
| Sterility & Microbiology | 9 | 4 | 5 |
| Endotoxin & Pyrogen | 4 | 2 | 2 |
| Particulate Matter | 6 | 4 | 2 |
| Sterilization \<1229.x\> | 16 | 0 | 16 |
| Depyrogenation \<1228.x\> | 6 | 0 | 6 |
| Sterility Assurance | 1 | 0 | 1 |
| Biological Indicators | 2 | 1 | 1 |
| Dosage Form Requirements | 9 | 8 | 1 |
| Container/Closure/Packaging | 16 | 9 | 7 |
| Water Systems | 3 | 2 | 1 |
| Biological Reactivity | 2 | 2 | 0 |
| Additional Testing & Dosage Form | 4 | 4 | 0 |
| Quality Systems & Validation | 6 | 0 | 6 |
| **TOTAL** | **84** | **36** | **48** |

---

## Current Repo Coverage vs. Full Scope

| Status | Count | Chapters |
|--------|-------|----------|
| **Scaffolded (P0)** | 5 | \<71\>, \<85\>, \<788\>, \<1116\>, \<1211\> |
| **High Priority (P1)** | 26 | \<1\>, \<787\>, \<790\>, \<1790\>, \<381\>, \<660\>, \<661\>, \<661.1\>, \<661.2\>, \<1072\>, \<1207\>, \<1207.1\>, \<1207.2\>, \<1228\>, \<1228.1\>, \<1229\>, \<1229.1\>, \<1229.2\>, \<1229.4\>, \<1229.8\>, \<1229.11\>, \<1229.13\>, \<1229.14\>, \<1231\>, \<1663\>, \<1664\> |
| **Supporting (P2)** | 35 | \<51\>, \<55\>, \<61\>, \<62\>, \<87\>, \<88\>, \<151\>, \<161\>, \<382\>, \<643\>, \<645\>, \<659\>, \<671\>, \<698\>, \<755\>, \<785\>, \<797\>, \<921\>, \<1029\>, \<1035\>, \<1058\>, \<1085\>, \<1113\>, \<1115\>, \<1117\>, \<1207.3\>, \<1225\>, \<1228.2\>, \<1228.3\>, \<1228.4\>, \<1228.5\>, \<1229.3\>, \<1229.5\>, \<1229.10\>, \<1229.15\>, \<1660\>, \<1788\> |
| **Niche/Optional (P3)** | 18 | \<63\>, \<631\>, \<670\>, \<729\>, \<771\>, \<789\>, \<791\>, \<1071\>, \<1079\>, \<1226\>, \<1229.6\>, \<1229.7\>, \<1229.9\>, \<1229.12\>, \<1797\> |

---

## Recommended Build Order (for this repo)

### Wave 1 — Already Scaffolded (Phase 3 in ROADMAP)
\<71\>, \<85\>, \<788\>, \<1116\>, \<1211\>

### Wave 2 — Core Aseptic Fill-Finish
\<1\>, \<790\>, \<1790\>, \<1229\>, \<1229.1\>, \<1229.4\>, \<1229.8\>, \<1229.11\>, \<1229.13\>, \<1229.14\>, \<1228\>, \<1228.1\>

### Wave 3 — Container/Closure & E&L
\<381\>, \<660\>, \<661\>, \<661.1\>, \<661.2\>, \<1207\>, \<1207.1\>, \<1207.2\>, \<1663\>, \<1664\>

### Wave 4 — Supporting Testing & Water
\<787\>, \<1072\>, \<1229.2\>, \<1231\>, \<643\>, \<645\>

### Wave 5 — Remaining P2/P3 as needed
All remaining chapters — build on demand based on client requirements or audit findings.

---

## Notes

1. **USP chapter numbers with angle brackets** (\<71\>) is the standard citation format. In folder names, use hyphens: `USP-71/`, `USP-1229-4/`.
2. **Sub-chapter families** (\<1228.x\>, \<1229.x\>, \<1207.x\>, \<661.x\>) should each get their own folder but can share a combined knowledge MD if content is closely related.
3. **Copyright**: USP content is copyrighted. This repo should contain structured summaries, cross-references, and educational content — not reproduced compendial text.
4. **USP revision cycle**: USP-NF is updated twice annually (May and December supplements). Chapter content should note the USP-NF version referenced.
5. **EP/JP harmonization**: Many chapters (\<71\>, \<85\>, \<788\>) are harmonized with European Pharmacopoeia (EP) and Japanese Pharmacopoeia (JP) through PDG (Pharmacopoeial Discussion Group). Noting harmonization status helps for multi-market submissions.
6. **\<1\> Injections** underwent a major revision (effective Dec 2024) — consolidates many parenteral requirements into a single chapter.
7. **\<85\> BET** now officially accepts recombinant Factor C (rFC) as an alternative to horseshoe crab-derived LAL — relevant for supply chain resilience and sustainability.
8. **\<1229.15\>** may overlap with \<1229.4\> — the agent research suggests \<1229.15\> provides expanded guidance on redundant filtration, pre-filtration, filter reuse, and E&L from filters.
9. **\<1207\> CCIT** family strongly favors deterministic methods (HVLD, vacuum decay, headspace analysis) over probabilistic (dye ingress) — aligns with FDA 2008 guidance and Annex 1 (2022).
10. **\<1231\> Water** now accommodates membrane-based WFI generation (non-distillation), consistent with Ph. Eur. and WHO positions.
