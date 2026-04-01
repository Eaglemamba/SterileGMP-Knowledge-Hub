# VPHP Cycle Development — Comprehensive Summary Report

**Sources:** PDA TR70, TR22, TR60, TR66, PtC-Isolators, PtC-12, PtC-14, Guide-No1 | FDA Process Inspection | ISPE HVAC
**Topic:** Vaporized Hydrogen Peroxide (VPHP) Cycle Development for Aseptic Processing
**Generated:** 2026-04-01

---

## 1. Definition & Purpose

VPHP is a decontamination system in which **35% hydrogen peroxide** is vaporized and applied to inactivate microorganisms on all exposed surfaces within an isolator, RABS, or transfer chamber — including fixed equipment, glove exteriors, and materials introduced for processing. `[PDA TR70 §Definitions; PDA TR22 §Definitions]`

It is the predominant agent for isolator bio-decontamination, alongside peracetic acid vapor. Selection must be based on equipment condition, process requirements, and regulatory expectations. `[PDA Guide No.1 Q7-2; PDA PtC-12]`

---

## 2. Prerequisite: Cleaning Before Decontamination

VPHP does **not** remove product residue, foreign material, grease, or biological soil. Cleaning is a hard prerequisite. `[PDA TR70 Q7-1; PDA Guide No.1 Q7-1; PDA PtC-12; FDA Process Inspection]`

| Step | Requirement | Reference |
|------|-------------|-----------|
| Initial cleaning | Remove product spills, broken glass, torn stoppers, foreign matter | PDA TR70 Q7-1; PDA PtC-Isolators |
| Surface prep | Remove grease, oily substances, skin particles, sebum | PDA PtC-Isolators |
| Post-cleaning disinfection | Establishes baseline bioburden before VPHP cycle | PDA TR70 Q7-1; PDA Guide No.1 Q7-1 |
| Hold times | Validate: (a) cleaning → disinfection start; (b) disinfection end → VPHP cycle start | PDA TR70 Q7-1 |
| Risk assessment | If bioburden > spore log reduction of validated cycle, add extra disinfection step | PDA TR70 Q7-1; PDA Guide No.1 Q7-1 |

> **Critical:** At start-up and after shutdowns, use surfactant-based cleaning agents to remove bonded soiling layers. Residues may require a follow-up IPA wipe step before decontamination. `[PDA PtC-12; FDA Process Inspection]`

---

## 3. Cycle Development vs. Cycle Qualification

These are two distinct, sequential activities. `[PDA TR70 Q7-5; PDA Guide No.1 Q7-5]`

| Attribute | Cycle Development | Cycle Qualification (PQ) | Reference |
|-----------|-------------------|--------------------------|-----------|
| Purpose | Establish effective parameters and settings | Provide documented evidence of reliability | PDA TR70 Q7-5 |
| Protocol flexibility | Flexible; adjustments allowed after failures | Fixed; parameters do not change | PDA TR70 Q7-5; PDA Guide No.1 Q7-5 |
| Acceptable runs | Single confirmation run | **Triplicate runs** required | PDA TR70 Q7-5 |
| Failure handling | Investigate, adjust, re-run | Investigate, corrective action, re-qualify | PDA TR70 Q7-5 |
| BI failures | Expected; used to refine | Must not occur; triggers full investigation | PDA Guide No.1 Q7-5 |

---

## 4. Cycle Phases & Key Parameters

### Phase 1 — Conditioning
- Pre-condition temperature and humidity inside the chamber `[PDA TR70; PDA PtC-12]`
- Humidity directly affects VPHP saturation and surface absorption efficacy `[PDA TR70]`

### Phase 2 — Gassing / Injection
- 35% H₂O₂ vaporized and injected `[PDA TR22 §Definitions; PDA TR70]`
- Increasing atmospheric saturation increases efficacy `[PDA TR70]`
- **Overdosing risk:** boiling of VHP reduces efficacy and risks explosion `[PDA TR70; PDA Guide No.1 Q7-2]`
- Nozzle/nebulizer optimization critical for even distribution `[PDA TR70]`
- Air circulation fan speed and configuration control uniformity `[PDA TR70 Q7-4]`

### Phase 3 — Dwell / Exposure
- Defined exposure time at target concentration `[PDA TR70; PDA Guide No.1 Q7-5]`
- Clutter, piled materials, wrapped items, occluded surfaces = common failure modes `[PDA TR70 Q7-4; PDA Guide No.1 Q7-4]`
- Fan and blower placement must ensure agent reaches all zones `[PDA TR70 Q7-4]`

### Phase 4 — Aeration
- Remove residual H₂O₂ to safe levels before personnel entry or product exposure `[PDA PtC-14; FDA Process Inspection]`
- Aeration time varies with: water concentration, air pressure, H₂O₂ deposition levels `[PDA TR70]`
- **HVAC note:** air removed during aeration is not returned to the room; dedicated air handlers reduce VPHP escape risk `[ISPE HVAC]`

---

## 5. Biological Indicators (BIs) — Selection & Use

**Reference organism:** *Geobacillus stearothermophilus* `[PDA TR70 Q7-6; PDA Guide No.1 Q7-6; PDA PtC-12; PDA PtC-14]`

| Parameter | Specification | Reference |
|-----------|---------------|-----------|
| Spore population | ≥ 10⁶ spores per carrier | PDA TR70 Q7-6; PDA PtC-14 |
| Microbial recovery (control) | 50% – 300% | PDA TR70 Q7-6 |
| Spore form | Monolayer — critical for direct VHP contact | PDA TR70 Q7-6; PDA Guide No.1 Q7-6 |
| Carrier material | Typically stainless steel | PDA TR70 Q7-6 |
| Packaging | Must be permeable to H₂O₂ | PDA TR70 Q7-6 |
| Storage | Per vendor specification (temperature + humidity) | PDA TR70 Q7-6 |

**D-value requirements:** `[PDA TR70 Q7-6; PDA Guide No.1 Q7-6; PDA PtC-Isolators]`
- Must be **determined in your specific isolator system** — do not rely solely on supplier-assigned values
- D-value depends on atmospheric H₂O₂ saturation and cycle consistency
- If saturation is inconsistent, D-value varies greatly across locations
- Must be comparable across validation campaigns to detect efficacy drift
- Fractional approach acceptable for initial characterization
- Maintain one BI supplier and consistent lot within a development/qualification campaign

> **BI standard reference:** PDA TR No. 51 — *Biological Indicators for Gas and Vapor-Phase Decontamination Processes* `[PDA PtC-12]`

> **Enzymatic indicators (EIs):** Increasingly used during cycle development to improve efficiency and assess location-to-location efficacy. Initial BI/EI correlation studies required; final qualification still requires BI challenge. `[PDA PtC-12]`

**BI Placement:** `[PDA TR70 Q7-7; PDA Guide No.1 Q7-7; PDA PtC-Isolators]`
- 3 BIs per location (triplicate)
- Placement driven by risk assessment: isolator geometry, airflow, known shadow zones
- Prioritize difficult-to-decontaminate and low-circulation locations

---

## 6. Efficacy Target & SAL

| Context | Requirement | Reference |
|---------|-------------|-----------|
| Critical aseptic processing areas (isolators) | **6-log reduction** of *G. stearothermophilus* | PDA TR70 Q7-5; PDA PtC-14; PDA PtC-12 |
| Transfer airlocks (nested vials/syringes) | 6-log reduction, cycle time < 30 min | PDA PtC-Isolators |
| Lower SAL | Acceptable only with documented risk assessment | PDA TR70 Q7-5 |
| E-beam alternative | 25 kGy = equivalent 6-log reduction | PDA PtC-Isolators; PDA PtC-12 |

---

## 7. Worst-Case Condition Determination

Risk assessment must identify worst-case configurations for both development and qualification runs. `[PDA TR70 Q7-4; PDA Guide No.1 Q7-4]`

**Variables to assess:** `[PDA TR70 Q7-4; PDA TR70 Q7-5; PDA Guide No.1 Q7-4]`
- Load configuration: placement, orientation, quantity of items
- Materials touching = occluded surfaces (prohibited) `[PDA TR70 Q7-4; PDA PtC-Isolators]`
- Wrapping/packaging that absorbs H₂O₂ or blocks airflow `[PDA PtC-Isolators; PDA TR70 Q7-4]`
- Fan/blower position and speed settings `[PDA TR70 Q7-4]`
- Temperature and humidity distribution throughout chamber `[PDA TR70 Q7-4]`
- Interior bioburden and cleanliness level `[PDA TR70 Q7-4; PDA Guide No.1 Q7-4]`
- HEPA filter integrity agent type: oil-based agents **degrade VHP efficacy** `[PDA TR70 Q7-8; PDA Guide No.1 Q7-8]`

---

## 8. BI Failure Investigation Protocol

If one or more BIs are not deactivated, investigate the following systematically: `[PDA TR70 Q7-7; PDA Guide No.1 Q7-7]`

1. Confirm organism growth (rule out false positive)
2. BI lot/batch variation
3. D-value, population, and resistance characteristics
4. BI preparation and handling errors
5. Spore clumping or occlusion (rogue spores)
6. BI placement configuration and location
7. Cycle parameters (concentration, temperature, humidity, time)
8. Agent application / injection method
9. Instrumentation and sensor calibration
10. Temperature or humidity deviations during cycle
11. Interior bioburden or surface contamination state
12. Residual H₂O₂ retention effects
13. Insufficient agent exposure at specific location

---

## 9. Material Compatibility Considerations

| Material / Component | Consideration | Reference |
|----------------------|---------------|-----------|
| Gloves (isolator) | Prolonged VPHP exposure → delamination risk; assess integrity post-cycle | PDA PtC-12 |
| Wrapped equipment | Absorbs H₂O₂; alters cycle parameters; impacts airflow → occluded surfaces | PDA PtC-Isolators; PDA TR70 Q7-4 |
| Single-use filling systems | Must qualify for shadowing, material compatibility, H₂O₂ permeability | PDA TR66; PDA TR60 |
| Stopper bowls / chutes | Residual VHP may affect product; monitor residual concentration after aeration | PDA PtC-14 |
| HEPA filters | Oil-based DOP/PAO integrity test agents interact with VHP, reduce efficacy | PDA TR70 Q7-8; PDA Guide No.1 Q7-8 |
| Indirect product contact parts | Sterilize before introduction, or transfer via RTP into pre-decontaminated isolator | PDA PtC-Isolators |

---

## 10. Residual H₂O₂ Monitoring

Residual VHP is a **Critical Process Parameter** for filling and stoppering operations. `[PDA PtC-14; FDA Process Inspection]`

- Validate residual removal using trace-level detection methods `[FDA Process Inspection]`
- Monitor residual concentration profile over time following aeration `[PDA PtC-14]`
- Demonstrate removal to acceptable limits before product contact `[FDA Process Inspection]`
- Particular concern: stopper bowls, chutes, and areas with limited air exchange `[PDA PtC-14]`

---

## 11. Application to Transfer Systems

| Transfer System | VPHP Role | Reference |
|-----------------|-----------|-----------|
| Rapid Transfer Port (RTP) | Decontaminated prior to transfer; minimise agent contact with transferred material | FDA Process Inspection; PDA PtC-Isolators |
| Material Airlock (MAL) | Automated VPHP cycle; assess agent exposure to transferred material (chemical penetration) | FDA Process Inspection |
| VHP Airlock (nested tubs) | Outer surface decontamination; H₂O₂ must NOT ingress into tubs — product damage risk | PDA PtC-14 |
| cRABS (without inflatable gaskets) | VPHP not recommended without safety precautions; leakage = health/safety risk | PDA PtC-12 |

---

## 12. HVAC & Facility Integration

- **Dedicated air handlers** preferred: reduce VPHP escape risk, simplify pressure balancing `[ISPE HVAC]`
- VPHP sensors required in: room surrounding isolator + mechanical spaces `[ISPE HVAC]`
- Aeration phase removes air from room — not returned; account for in pressure balance design `[ISPE HVAC]`
- HVAC control system must accommodate all isolator operating modes: open setup, CIP, closed operation, VPHP gassing, aeration `[ISPE HVAC]`
- Transitions between modes affect surrounding room pressure — design must handle this `[ISPE HVAC]`

---

## 13. Safety Requirements

| Requirement | Detail | Reference |
|-------------|--------|-----------|
| O₂ sensor | Visual + audible alarm during gassing operations | PDA Guide No.1 Q7-2; FDA Process Inspection |
| Room monitoring | Continuous O₂ level monitoring system | FDA Process Inspection |
| Personnel monitoring | Personal O₂ monitoring instruments | FDA Process Inspection |
| Operational controls | Buddy system and/or man-down system | FDA Process Inspection |
| Re-entry | Only after aeration validated complete and residual H₂O₂ within limits | PDA PtC-14; FDA Process Inspection |

---

## 14. Regulatory & Standards References

| Document | Relevance |
|----------|-----------|
| **PDA TR No. 70** | Isolator systems — primary VPHP cycle development/qualification framework (Q7-1 to Q7-9) |
| **PDA TR No. 51** | Biological indicators for gas/vapor-phase decontamination (cited in PDA PtC-12) |
| **PDA TR No. 34** | Isolator design and validation |
| **PDA TR No. 22** | VPHP in cleaning, disinfection, equipment transfer into APA |
| **PDA TR No. 60** | Process validation lifecycle; SUS/VPHP compatibility |
| **PDA TR No. 66** | Single-use filling system VPHP compatibility (shadowing, permeability) |
| **PDA Guide No. 1** | Q&A on aseptic processing — decontamination Q7-1 through Q7-9 |
| **PDA PtC-12** | RABS bio-decontamination; cRABS VPHP limitations; EI use |
| **PDA PtC-14** | ATMP isolator; residual VHP as CPP; H₂O₂ ingress risk |
| **PDA PtC-Isolators** | Indirect product contact equipment transfer; VHP airlock cycle time |
| **FDA Aseptic Processing Guidance** | Automated H₂O₂ systems, residual validation, MAL/RTP transfer |
| **ISPE HVAC Baseline Guide** | VPHP escape, aeration challenges, isolator HVAC integration |

---

## Key Takeaways for Cycle Development

1. **Clean first** — no decontamination shortcut around surface preparation `[PDA TR70 Q7-1; PDA Guide No.1 Q7-1]`
2. **Develop, then qualify** — separate phases with different protocol flexibility `[PDA TR70 Q7-5]`
3. **6-log reduction** is the target; justify anything lower with documented risk assessment `[PDA TR70 Q7-5; PDA PtC-12]`
4. **D-value must be system-specific** — don't trust supplier numbers alone `[PDA TR70 Q7-6; PDA Guide No.1 Q7-6]`
5. **Worst-case loading** is the core of the risk assessment; shadow zones kill cycles `[PDA TR70 Q7-4; PDA Guide No.1 Q7-4]`
6. **Residual VHP** is a product safety issue, not just an access issue — validate removal `[PDA PtC-14; FDA Process Inspection]`
7. **HEPA filter compatibility** is a commonly overlooked failure mode `[PDA TR70 Q7-8]`
8. **Triplicate BI runs** at qualification; any failure requires full investigation `[PDA TR70 Q7-5; PDA Guide No.1 Q7-7]`
