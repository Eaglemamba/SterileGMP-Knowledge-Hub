# Aseptic Process Simulation (APS / Media Fill) Using a Filling Isolator — Comprehensive Summary Report

**Sources:** PDA TR22 (§3–§9) | PDA PtC-Isolators (Topic 2, 8) | PDA PtC-12 (Topic 8)
**Topic:** How to Design and Execute APS / Media Fill in a Pharmaceutical Filling Isolator
**Generated:** 2026-04-10

---

## 1. Why Isolator APS is Different from Conventional APS

Isolators physically separate personnel from the aseptic environment, using validated decontamination (typically VHP) to eliminate human-borne contamination risk. Although all fundamental APS principles apply, the relative risk factors differ significantly because: `[PDA TR22 §4.3.3; PDA PtC-Isolators Introduction]`

- Personnel are never inside the critical zone during filling
- The number of people in the surrounding room is not a contamination driver
- Shift changes outside the isolator are not worst-case conditions
- Maximum batch sizes are larger and total filling time is longer
- The acceptance criteria remain **identical** to conventional lines: **zero contaminated units**

---

## 2. Prerequisites Before APS

All of the following must be completed before a filling isolator can conduct APS: `[PDA TR22 §3.1]`

- [ ] Equipment qualification complete
- [ ] Facility, HVAC, and utilities qualification complete
- [ ] Sterilization process validation complete
- [ ] **Isolator decontamination procedures implemented and validated** (VHP cycle with biological indicators — separate study, not part of APS)
- [ ] Personnel training and gowning certification complete
- [ ] Environmental monitoring (EM) program established
- [ ] SOPs available and personnel trained
- [ ] Aseptic process and intervention risk assessment complete

### VHP Decontamination — Must Be Pre-Validated `[PDA PtC-Isolators Topic 8-QS-8]`

> **Critical principle:** The APS is NOT used to qualify or validate the decontamination cycle. The VHP cycle must be validated with biological indicators (BIs) in separate studies before APS. The validated cycle is then used as preparation for the APS.

### Glove Integrity Testing `[PDA PtC-Isolators Topic 2; Topic Q4-3]`

- Glove integrity must be confirmed **before each APS**
- If a glove failure is discovered **after decontamination but before product exposure**: replace the glove AND **repeat the full decontamination cycle**
- Glove testing procedure and acceptance criteria must be defined in SOPs

---

## 3. Number of Units to Fill

`[PDA TR22 §7.10; §4.3.3]`

| Scenario | Minimum Units |
|---|---|
| Standard commercial batch | **5,000–10,000 units** |
| Commercial batch size < 5,000 | APS unit count must equal commercial batch size |
| Large Isolator batch | **≥ 10,000 filled, integral units** (not recommended to go below) |

### Empty Vials / Piggyback Strategy for Large Batches `[PDA TR22 §4.3.3]`

For large commercial batches, empty vials may be passed through the system between media-filled units to simulate appropriate line activity and the number of additions.

> **Rule:** Interventions performed during empty-vial passage do **not count** toward required simulation interventions. Only media-filled units count toward total acceptance requirements.

---

## 4. Frequency of APS Runs

`[PDA TR22 §3.2; §4.3.3]`

| Requirement | Standard |
|---|---|
| Ongoing frequency | **Twice per year (≈ every 6 months)** per filling line |
| Operator participation | **Each operator participates in at least one successful APS annually** |
| Shift-based APS | **Not applicable for isolators** — shift structure is not a frequency driver (max batch size is larger, run time longer) |

**Additional APS triggers:**
- After long periods of inactivity or before shut-down
- Before decommissioning or relocation of a line
- After major changes to procedures, practices, or equipment configuration (risk assessment required)

### Piggyback APS `[PDA TR22 §4.3.3]`

A "piggyback" APS is conducted at the end of a production fill or campaign — e.g., three product batches followed by a fourth batch using media. This approach is increasingly used for isolators.

> **Limitation:** Piggyback APS is part of the APS strategy only — it **cannot stand alone** as validation. It must be supplemented by other simulations that capture line setup and the beginning of a fill.

---

## 5. Worst-Case Scenarios

`[PDA TR22 §3.3; PDA PtC-Isolators Topic 8-QS-7]`

### Universal Worst-Case Conditions

- Equipment operating at the **longest permitted duration**
- **Slowest fill speed** for the largest container (maximizes vial opening exposure)
- **Fastest fill speed** for the most difficult-to-handle container
- Maximum sterile hold times
- Maximum number of permitted line stoppages

### Isolator-Specific: What Is NOT Worst-Case

Because of physical separation between personnel and the aseptic zone, the following conventional worst-case conditions **do not apply inside an isolator context**: `[PDA TR22 §4.3.3]`

- Maximum number of people in the room surrounding the isolator
- Shift changes or activities outside the isolator

### Isolator-Specific Worst-Case: Personnel Inside the Isolator `[PDA PtC-Isolators Topic 8-QS-7]`

- If multiple operators interact with the isolator simultaneously, and their number presents a risk factor → **include maximum number of operators**
- Note: In some cases, **fewer operators** performing the same interventions (with greater movement, higher speed) may present higher contamination risk — use risk assessment to determine true worst-case

---

## 6. Interventions

`[PDA TR22 §4.1.3.1; §4.1.3.1.2; PDA PtC-Isolators Topic 8-QS-4]`

### Type 1 — Inherent Interventions (always included)

Integral parts of routine operation:
- Setup of direct and indirect product-contact parts
- Change of EM plates via manipulation through a glove port
- Addition of components (closures, containers)
- Closure resupply requiring manual handling
- Proximity of gloves to critical surfaces during glove-port entry
- Docking and movement of materials via RTP/DPTE systems

### Type 2 — Corrective Interventions (simulate at production frequency)

Performed to correct or adjust the process:
- Must have: written step-by-step description + contamination risk assessment + comprehensive operator training + airflow visualization study
- **APS intervention frequency must match actual production frequency**
- Track cumulative corrective intervention rate in routine manufacturing; align APS total to this rate

### RTP / DPTE Transfer — Isolator-Specific Requirement `[PDA PtC-Isolators Topic 8-QS-4]`

> If RTP (Rapid Transfer Port) or DPTE systems are used to transfer decontaminated or sterile materials into the isolator **during or prior to filling**, this transfer must be **included in the APS**.

---

## 7. Incubation Requirements

`[PDA TR22 §7.13–§7.15]`

### Pre-Incubation Unit Handling

1. Conduct normal product inspection — **remove only non-integral containers** (cracked glass, missing closures, poor crimps, empty containers)
2. Do NOT remove units based on cosmetic defects, particulates, or fill-volume issues — incubate and include them in evaluation
3. Before incubation: **invert and manipulate all filled units** to ensure media contacts all internal surfaces of the closure system

### Incubation Conditions

| Parameter | Requirement |
|---|---|
| Duration | **Minimum 14 days** |
| Temperature range | 20–35°C (any temperature supported by growth data) |
| Dual-temperature protocol | ≥ 7 days at 20–25°C, then ≥ 7 days at 30–35°C |

### Post-Incubation Examination

- Visual inspection by **qualified inspectors** trained to detect both low- and high-level microbial growth patterns
- Oversight by personnel with microbiology and QA training

---

## 8. Acceptance Criteria

`[PDA TR22 §9.0; PDA PtC-Isolators Topic 8-QS-2]`

> ### Core Principle: **Zero Contaminated Units**

| System Type | Acceptance Criterion |
|---|---|
| Conventional aseptic line | 0 contaminated units |
| RABS | 0 contaminated units |
| **Filling Isolator** | **0 contaminated units** |

PtC-Isolators explicitly states: "There should be no difference in the acceptance criteria between isolator and conventional or RABS aseptic filling processes. In all cases, the target should be zero positive units, regardless of the technology or run size."

### Isolator Failure — Special Scrutiny `[PDA PtC-Isolators Topic 8-QS-2]`

Because isolators provide greater physical separation, failures involving aseptic technique lapses or EM excursions must be **especially scrutinized** to determine if they represent failure of the process, system design, or contamination control strategy — as these should rarely occur in a properly designed isolator.

### After a Failure `[PDA TR22 §9.0]`

1. Conduct thorough documented investigation (RCA)
2. If root cause is determined to be **unrelated to the aseptic process** being simulated, the result may be acceptable
3. Typically **3 additional APS runs** are required, unless clear evidence shows the positive unit did not result from aseptic process failure

---

## 9. Personnel Qualification Requirements

`[PDA TR22 §8.0–§8.4; PDA PtC-Isolators Topic 8-QS-5]`

### Three-Level Qualification Framework

| Level | Description | Key Activities |
|---|---|---|
| **L-1** | Entry into cleanroom | General health, basic microbiology, sterility assurance, gowning, cleanroom behaviors, first air principles, patient safety impact |
| **L-2** | Less critical activities under supervision | Role-specific OJT, water or media trials, practical demonstrations, gowning reassessment |
| **L-3** | Critical aseptic procedures independently | Mastering high-risk tasks, role-specific hands-on activities, water fills simulating production, participation in a successful APS |

**Annual requalification:** Regular participation in APS to confirm continued proficiency. `[PDA TR22 §8.4]`

### Isolator-Specific Personnel Considerations `[PDA PtC-Isolators Topic 8-QS-5]`

> Aseptic personnel performing isolator interventions **may not need to be initially qualified through APS participation**. If proficiency in aseptic technique is demonstrable through other training activities (e.g., media manipulation exercises), APS-based initial qualification may not be necessary.

Qualification for isolator personnel should be **risk-based**, with emphasis on:
- Ability to perform aseptic tasks in the **confined isolator space** with limited movements
- Good aseptic technique, practices, and principles under restricted conditions

---

## 10. Growth Promotion Testing (Media Qualification)

`[PDA TR22 §7.17; §7.17.3]`

- Use a **vegetable-based medium** (mycoplasma-free, BSE/TSE-free)
- Must support growth of bacteria, yeast, and molds found in the manufacturing environment
- Growth promotion testing must be performed and **must pass** (visible growth in each media sample)

### Pass/Fail Implications

| Scenario | Outcome |
|---|---|
| Growth promotion **passes**, no contamination found | APS passes |
| Growth promotion **passes**, contamination found | APS **fails** |
| Growth promotion **fails**, no contamination found | APS is **invalid** |
| Growth promotion **fails**, contamination found | APS is **a failure** |

---

## 11. Lyophilized Product APS — Special Requirements

`[PDA TR22 §4.2.2; §4.2.2.1]`

Include and mimic all process steps. Critical steps to simulate:

| Step | Requirement |
|---|---|
| Filling | With partial stoppering |
| Sterilization hold time | Simulate full duration |
| Transfer to lyophilizer | Include |
| Loading | Include |
| Cycle vacuum | Maintain chamber pressure **between 100–200 mbar** (never below equilibrium vapor pressure of media at loading temperature; e.g., water at 25°C = 32 mbar) |
| Freezing simulation | Avoid actually freezing media — freezing **inhibits microbial growth** |
| Full stopper insertion | Include |
| Unloading | Include |

---

## 12. APS Protocol — Required Elements

`[PDA TR22 §5.2]`

A complete APS protocol must include:

| Element |
|---|
| Responsible groups for execution, microbial testing, and approval |
| Rationale for worst-case parameters |
| Identification of process, room(s), filling line, equipment |
| Container–closure system type |
| Line speed(s) |
| Minimum number of units to be filled |
| Number and type of interventions and stoppages |
| Units excluded from incubation and rationale |
| Number, identity, and roles of participating personnel |
| Media type and fill volume |
| Incubation time, temperature(s), and duration |
| EM program details |
| Batch record template |
| Accountability requirements |
| Acceptance criteria for all activities |
| Documentation requirements for final report |
| Duration of APS and routine production run being simulated |
| Conditions that may cause APS invalidation |
| Any differences between production and simulation process |

---

## 13. Shift Changes and Isolator-Specific Considerations

`[PDA PtC-Isolators Topic 8-QS-9]`

Because of the barrier properties of isolators, **conditions inside the decontaminated isolator present more risk** than conditions outside.

| Activity | APS Inclusion Required? |
|---|---|
| Shift change — replacement of personnel **outside** the isolator | Not necessarily required |
| Line clearance, material removal/transfer **inside** the decontaminated isolator during shift changes | **Should be included** |
| Batch changes involving material transfer into/within the isolator | **Should be included** |

---

## 14. Summary: Conventional vs. Isolator APS Key Differences

| Parameter | Conventional Aseptic | Filling Isolator |
|---|---|---|
| Personnel in critical zone | Present (gowned operators) | Never — separated by physical barrier |
| Decontamination required before APS | Surface disinfection | **VHP cycle (validated separately)** |
| Glove integrity pre-check | Not applicable | **Required before each APS** |
| Room personnel as worst-case | Yes | **No** |
| Shift changes outside as worst-case | Yes | **No** |
| Shift changes inside (material transfer) | Not applicable | **Yes — must be included** |
| Piggyback APS | Uncommon | **Widely used strategy** |
| Initial personnel qualification via APS | Required for L-3 | **May not be required** (risk-based) |
| Acceptance criterion | 0 contaminated units | **0 contaminated units** (identical) |
