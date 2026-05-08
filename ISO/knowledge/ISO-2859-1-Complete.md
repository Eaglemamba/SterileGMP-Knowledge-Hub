# ISO 2859-1:1999: Sampling Procedures for Inspection by Attributes — Part 1: Sampling Schemes Indexed by AQL for Lot-by-Lot Inspection

## Section 1: Foreword + Clauses 1–9: Scope, Terms, AQL, Submission, Normal/Tightened/Reduced Inspection (p1-p51)

# Foreword + Clauses 1–9: Scope, Terms, AQL, Normal/Tightened/Reduced Inspection

ISO 2859-1:1999 Sampling Procedures for Inspection by Attributes | p1 – p51

## Foreword — ISO 2859 Series Overview

International Standard ISO 2859-1 was prepared by Technical Committee ISO/TC 69, Applications of statistical methods, Subcommittee SC 5, Acceptance sampling. This second edition (1999) cancels and replaces the first edition (ISO 2859-1:1989).

**Significant changes in the 1999 edition include:**

- A new procedure for switching from normal to reduced inspection (switching score system)

- Reference to skip-lot sampling (ISO 2859-3) as an alternative to reduced inspection

- The term "limiting quality" changed to "consumer's risk quality" in Tables 6 and 7

- A new producer's risk table added (probability of rejection at the AQL)

- Optional fractional acceptance number plans added (Tables 11-A, 11-B, 11-C)

- Reduced plans changed to eliminate the gap between Ac and Re numbers

- Multiple sampling plans changed from seven stages to five stages

- Scheme operating characteristic (OC) curves added as Table 12

**ISO 2859 consists of four parts:**

- **Part 0:** Introduction to the ISO 2859 attribute sampling system

- **Part 1:** Sampling schemes indexed by AQL for lot-by-lot inspection

- **Part 2:** Sampling plans indexed by limiting quality (LQ) for isolated lot inspection

- **Part 3:** Skip-lot sampling procedures

### Commentary & Context

#### What is ISO 2859-1? ISO 2859-1

ISO 2859-1 is the global standard for **acceptance sampling by attributes** — the statistical method for deciding whether to accept or reject a lot of product based on inspection of a sample. It is the international equivalent of the US military standard MIL-STD-1916 predecessor, and is essentially identical to **ANSI/ASQ Z1.4** (the American national standard).

## Clause 1: Scope

### 1.1 System Description

This part of ISO 2859 specifies an **acceptance sampling system for inspection by attributes**. It is indexed in terms of the acceptance quality limit (AQL).

Its purpose is to induce a supplier through **economic and psychological pressure** of lot non-acceptance to maintain a process average at least as good as the specified AQL, while at the same time providing an upper limit for the risk to the consumer of accepting the occasional poor lot.

Sampling schemes designated in this part of ISO 2859 are applicable to inspection of:

- End items

- Components and raw materials

- Operations

- Materials in process

- Supplies in storage

- Maintenance operations

- Data or records

- Administrative procedures

### 1.2 Intended Use: Continuing Series of Lots

These schemes are intended primarily for a **continuing series of lots** — a series long enough to allow the switching rules (Clause 9) to be applied. These rules provide:

- **Consumer protection:** switch to tightened inspection or discontinuation if quality deteriorates

- **Producer incentive:** switch to reduced inspection if consistently good quality is maintained

Sampling plans may also be used for isolated lots, but then the user is strongly advised to consult the OC curves (Clause 12.6) and consider ISO 2859-2.

### Commentary

#### Attribute Inspection vs. Variable Inspection vs.

**Attribute inspection (this standard):** Each unit is classified as pass or fail — binary outcome. Examples: crack present/absent, label readable/unreadable, particle visible/not visible.

**Variable inspection (ISO 3951):** A measurement is recorded for each unit — continuous data. Examples: fill volume in mL, closure torque in N·cm, headspace oxygen %.

The key distinction: attributes are faster and cheaper (go/no-go gauge, visual inspection) but carry less statistical information than variables. For a given level of protection, attribute sampling requires a larger sample than variable sampling.

#### Critical Limitation: Not for All Pharma Tests

ISO 2859-1 is **NOT appropriate** for:

- **Sterility testing** — the sample sizes in ISO 2859-1 are statistically inadequate to detect low-level contamination. Sterility testing uses its own USP/Ph.Eur. sampling schedules.

- **Endotoxin (BET/LAL) testing** — each batch requires a specific number of containers per USP <85>/Ph.Eur. 2.6.14.

- **Particulate matter testing** — governed by USP <788>/<789>, not AQL.

The standard is best applied to **visual defect classification** (cosmetic, dimensional, label) in incoming inspection of packaging components.

#### Economic and Psychological Pressure

The standard is deliberately designed to create supplier behavior change — not just lot sentencing. If your lots keep getting rejected (moving you to tightened inspection), you face higher inspection costs, delays, and risk of disqualification. This is the "economic pressure." The psychological pressure: knowing your customer is watching every lot with tighter criteria.

2

## Clause 2: Normative References

### Referenced Documents

The following normative documents contain provisions which constitute provisions of this part of ISO 2859:

- **ISO 2859-3:1991** — Sampling procedures for inspection by attributes — Part 3: Skip-lot sampling procedures

- **ISO 3534-1:1993** — Statistics: Vocabulary and symbols — Part 1: Probability and general statistical terms

- **ISO 3534-2:1993** — Statistics: Vocabulary and symbols — Part 2: Statistical quality control

The most recent editions of ISO 3534-1 and ISO 3534-2 apply for undated references. ISO 2859-3 applies as specified in Clause 9.5.

### Commentary

#### ISO 3534-2: The Vocabulary Foundation

ISO 3534-2 (Statistical Quality Control vocabulary) is the foundational reference for all the statistical terminology used in ISO 2859-1. When ISO 2859-1 redefines or modifies a term, it notes the departure from ISO 3534-2 — for example, the definition of "percent nonconforming" is modified for practical use in this standard.

#### ISO 2859 vs. ANSI/ASQ Z1.4

ANSI/ASQ Z1.4 (US) and ISO 2859-1 (International) are technically equivalent — same tables, same switching rules, same philosophy. They share a common origin in the US military standard MIL-STD-105. When a supplier says their AQL program uses "Z1.4", they are using an essentially identical system to ISO 2859-1. In FDA-regulated environments, either standard is acceptable; the choice is typically based on customer or regional preference.

3

## Clause 3: Terms, Definitions and Symbols

#### Why Clause 3 Matters Most 3

Clause 3 is the conceptual foundation of the entire standard. Every other clause builds on these definitions. In pharma audits and supplier qualification, disagreements about AQL programs almost always trace back to misunderstanding of these terms — especially AQL itself, which is frequently confused with a quality target.

### 3.1 Lot and Sample Concepts

#### 3.1.13 Lot ()

A definite amount of some product, material or service, collected together. Note: An inspection lot may consist of several batches or parts of batches.

#### 3.1.14 Lot Size N ()

The number of items in a lot.

#### 3.1.15 Sample ()

A set of one or more items taken from a lot and intended to provide information on the lot.

#### 3.1.16 Sample Size n ()

The number of items in the sample. Symbol: n

### Commentary

#### Lot vs. Batch in Pharma

In pharmaceutical manufacturing, "batch" typically means a production batch (a specific manufacturing run). An "inspection lot" under ISO 2859-1 might be one production batch of glass vials received, or it might be combined from multiple deliveries to form a statistically meaningful lot.

Key rule: A lot should consist of items of a single type, grade, class, size and composition, manufactured under uniform conditions at essentially the same time (Clause 6.1). Do not mix vials of different cavity origins into one lot if they could have different defect profiles.

### **3.1.17–3.1.19: Sampling Plan, Scheme, and System 3.1.17–3.1.19**

#### 3.1.17 Sampling Plan ()

A combination of sample size(s) to be used and associated lot acceptability criteria. A single sampling plan has one sample size and acceptance/rejection numbers. A double sampling plan has two sample sizes with criteria for the first sample and for the combined sample.

Note: A sampling plan does not contain the rules on how to draw the sample.

#### 3.1.18 Sampling Scheme ()

A combination of sampling plans with rules for changing from one plan to another. The switching rules in Clause 9 define the scheme.

#### 3.1.19 Sampling System ()

A collection of sampling plans or schemes, each with rules for changing plans, together with sampling procedures including criteria by which appropriate plans or schemes may be chosen.

ISO 2859-1 is a sampling system indexed by lot-size ranges, inspection levels, and AQLs.

### Commentary

#### Plan vs. Scheme vs. System — The Hierarchy

Think of it like traffic laws:

- **Sampling Plan = Speed Limit on one road:** "Sample 80 units; if ≤2 defects, accept; if ≥3, reject."

- **Sampling Scheme = The full traffic code:** includes what happens when you get caught (tightened) or have a perfect record (reduced).

- **Sampling System = The entire legal framework:** includes all roads (lot sizes), all limits (AQLs), and all courts (responsible authority).

Most QA staff work at the plan level day-to-day, but the scheme (switching rules) is what creates the long-term incentive structure for suppliers.

#### Single vs. Double vs. Multiple Sampling

- **Single sampling:** One sample, one decision. Simplest to administrate. Most common in pharma incoming inspection.

- **Double sampling:** First small sample → if borderline, draw second sample and combine. Reduces average sample size at cost of more complexity.

- **Multiple sampling (up to 5 stages):** Smallest average sample size but most complex. Used in high-volume automated inspection scenarios.

For most pharma CDMO applications, **single sampling is recommended** — it is transparent, easy to audit, and easy to document in SOPs.

### **3.1.26–3.1.28 + 3.1.20–3.1.23: AQL, Switching States, and Risk 3.1.26–3.1.28 + 3.1.20–3.1.23AQL**

#### 3.1.26 Acceptance Quality Limit (AQL)

The quality level that is the **worst tolerable process average** when a continuing series of lots is submitted for acceptance sampling.

CAUTION (Clause 5.1): "The designation of an AQL shall not imply that the supplier has the right knowingly to supply any nonconforming item."

NOTE 2: "Although individual lots with quality as bad as the AQL may be accepted with fairly high probability, the designation of an AQL does not suggest that this is a desirable quality level."

#### 3.1.27 Consumer's Risk Quality (CRQ)

The lot or process quality level that in the sampling plan corresponds to a specified consumer's risk. Consumer's risk is usually 10% (i.e., a 10% chance of accepting a lot at this quality level).

#### 3.1.25 Process Average

Process level averaged over a defined time period or quantity of production. In ISO 2859-1, this is the quality level (percent nonconforming or number of nonconformities per hundred items) during a period when the process is in a state of statistical control.

### Commentary

#### AQL: The Most Misunderstood Term AQL

**What AQL is NOT:** AQL is not your target quality. It is not the defect rate you "accept." It is not the number of defects you allow per shipment.

**What AQL IS:** AQL is the upper boundary of your process average that you consider tolerable as an ongoing supplier — the worst long-term quality level still acceptable. If a supplier's process average equals the AQL, they will face frequent rejections.

**Restaurant analogy:** If a restaurant's AQL for "wrong order" is 1%, it doesn't mean they're happy with 1% wrong orders. It means: "If your long-term average error rate exceeds 1%, we will tighten scrutiny or stop using you." The actual target should be 0.1% or lower.

#### Producer's Risk and Consumer's Risk

```
Producer's Risk (α, Type I Error):
Probability of REJECTING a "good" lot
(a lot whose true quality equals the AQL)
Typical α = 5%

Consumer's Risk (β, Type II Error):
Probability of ACCEPTING a "bad" lot
(a lot at Consumer's Risk Quality CRQ)
Typical β = 10%

```

The OC (Operating Characteristic) curve plots P(acceptance) vs. actual lot quality — it visually shows how well a sampling plan discriminates between good and bad lots.

### 3.1.5–3.1.11: Nonconformity Concepts

#### 3.1.5 Nonconformity ()

Non-fulfilment of a specified requirement. Note: Nonconformity is classified by degree of seriousness — Class A (highest concern, smallest AQL) through Class B, C, etc.

#### 3.1.6 Defect ()

Non-fulfilment of an *intended usage requirement*. The term "defect" relates to usage (not just specification compliance). Due to legal implications, "nonconformity" is the preferred general term.

#### 3.1.7 Nonconforming Item ()

An item with one or more nonconformities. Classified by degree of seriousness: Class A item contains one or more Class A nonconformities. Class B item contains Class B but no Class A nonconformities.

### Commentary

#### Multiple Classifications Require Multiple Plans

In practice, you run multiple simultaneous sampling plans on the same sample — one for critical defects, one for major, one for minor. The sample size is typically determined by the most stringent AQL (critical), then that same sample is also evaluated against the major and minor acceptance numbers. A lot is rejected if it fails ANY classification.

#### Pharma Critical/Major/Minor Classification //

ISO 2859-1 uses "Class A, B, C" — pharma industry typically maps these to:

Note: These AQL values (0.065 / 0.65 / 2.5) are the most commonly used in pharma CDMO practice for packaging components. Your actual specification may differ — always defer to your validated SOP and customer requirement.

### 3.2 Key Symbols and Abbreviations

### Commentary

#### Ac vs. Re — The Acceptance Decision Rule Ac vs. Re——

For a single sampling plan: inspect n items. Count d = number of nonconforming items found.

- If d ≤ Ac → ACCEPT the lot

- If d ≥ Re → REJECT the lot

Note: In all standard single sampling plans, Re = Ac + 1. There is no "gray zone" — every lot is either accepted or rejected. Double sampling plans may have a zone between first-sample Ac and Re that triggers the second sample.

#### Switching Score

The switching score (3.1.23) is a running counter used to determine eligibility for reduced inspection. Think of it like a "no-claims bonus" in car insurance — each lot that passes "easily" (i.e., would have passed even with a tighter AQL) adds points. When you accumulate 30 points, you qualify for the reduced-inspection discount. Any rejection resets the score to zero.

4

## Clause 4: Expression of Nonconformity

Percent nonconforming vs. nonconformities per 100 items — when to use each

### 4.1 General

The extent of nonconformity shall be expressed either in terms of:

- **Percent nonconforming (%):** 100 × d/n (items classified as pass/fail)

- **Nonconformities per 100 items:** 100 × d/n (count of defects, multiple per item possible)

Tables 7, 8 and 10 assume nonconformities occur randomly and with statistical independence. If one nonconformity in an item could be caused by a condition also likely to cause others, items shall be considered as conforming or not (binary) and multiple nonconformities ignored.

### 4.2 Classification of Nonconformities

Since most acceptance sampling involves evaluation of more than one quality characteristic, and since they may differ in importance, it is often desirable to classify the types of nonconformities according to agreed classes.

The number of classes, the assignment into a class, and the choice of AQL for each class should be appropriate to the quality requirements of the specific situation.

### Commentary

#### Percent Nonconforming vs. Per 100 Items

For most pharma incoming inspection of primary packaging, **percent nonconforming** is used — a vial either passes or fails its inspection, regardless of how many defects it has.

#### Pharma Application: Glass Vial Inspection

For glass vials, a single unit may have multiple defects (e.g., a visible inclusion AND a dimensional deviation). Under "percent nonconforming," this counts as one nonconforming item. Under the classification system, the vial may be classified by its worst defect class — one Class A defect makes it a Class A nonconforming item regardless of other defects present.

5

## Clause 5: Acceptance Quality Limit (AQL)

### 5.1 Use and Application

The AQL, together with the sample size code letter (see Clause 10.2), is used for **indexing the sampling plans and schemes** provided in this part of ISO 2859.

The AQL is a parameter of the sampling scheme and **should not be confused with the process average** that describes the operating level of the manufacturing process. It is expected that the process average will be better than the AQL to avoid excessive rejections.

                        CAUTION: The designation of an AQL shall not imply that the supplier has the right knowingly to supply any nonconforming item.
                    

### 5.2 Specifying AQLs AQL

The AQL to be used shall be designated in the contract or by the responsible authority. Different AQLs may be designated for:

- Groups of nonconformities considered collectively

- Individual nonconformities as defined by class

When quality level is expressed as percent nonconforming, AQL values shall not exceed 10%. When expressed as nonconformities per 100 items, AQL values up to 1,000 may be used.

### 5.3 Preferred AQL Series AQL

The preferred series of AQL values (must use one of these for the tables to apply):

**0.010, 0.015, 0.025, 0.040, 0.065, 0.10, 0.15, 0.25, 0.40, 0.65, 1.0, 1.5, 2.5, 4.0, 6.5, 10**

(continued for nonconformities per 100 items: 15, 25, 40, 65, 100, 150, 250, 400, 650, 1000)

### Commentary

#### AQL Is an Index, Not a Quality Target AQL

The single most important concept in ISO 2859-1: AQL is used to *select* a sampling plan, not to define what quality you want. When you specify AQL 0.65% for major defects in glass vials, you are saying: "I want a sampling plan whose switching rules will trigger tightened inspection if the supplier's long-term defect rate approaches 0.65%." Your actual expectation of the supplier might be 0.05% or better.

#### Why These Specific AQL Values?

The preferred series is logarithmically spaced — each step is approximately 1.585× the previous. This geometric progression was chosen to provide approximately equal statistical discrimination between adjacent values across a wide range of quality levels. Using a non-preferred AQL (e.g., 0.5%) means none of the tables apply, requiring custom plan generation — a significant practical disadvantage.

#### Standard Pharma AQL Levels AQL

These values are widely used in CDMO/pharma incoming QC as industry convention. They are not mandated by ISO 2859-1 or FDA guidance — they represent accumulated industry consensus from MIL-STD-105 era through to current GMP practice. Always confirm against your quality agreement with the supplier and your internal SOP.

6

## Clause 6: Submission of Product for Sampling

### 6.1 Formation of Lots

The product shall be assembled into identifiable lots, sub-lots, or in such other manner as may be laid down. Each lot shall, as far as is practicable, consist of items of:

- A single type, grade, class, size and composition

- Manufactured under uniform conditions

- Produced at essentially the same time

### 6.2 Presentation of Lots

The formation of the lots, the lot size and the manner in which each lot shall be presented and identified by the supplier shall be designated or approved by the responsible authority.

The supplier shall provide:

- Adequate and suitable storage space for each lot

- Equipment needed for proper identification and presentation

- Personnel for all handling of product required for drawing of samples

### Commentary

#### Lot Formation in CDMO Incoming Inspection CDMO

In practice, the "lot" for incoming inspection is typically:

- **One delivery / shipment** from a supplier, OR

- **One supplier's production batch** (if the supplier provides batch data)

- **One pallet** if the delivery spans multiple supplier batches

Key decision: Do not mix vials from different mold cavities or different production days into a single lot if defect patterns might differ by cavity or shift. Stratified sampling (Clause 8.1) can address this if mixing is unavoidable.

#### Lot Size Determination

The lot size directly determines the sample size code letter (Table 1 of ISO 2859-1), which then determines n, Ac, and Re. Larger lots → larger sample sizes (though the sampling fraction decreases). Smaller lots → smaller samples but higher sampling fractions.

7

## Clause 7: Acceptance and Non-acceptance

### 7.1 Acceptability of Lots

Acceptability of a lot shall be determined by the use of a sampling plan or plans. The term "non-acceptance" is used in this context for "rejection" when it refers to the result of following the procedure. Forms of the term "reject" are retained when they refer to actions the consumer may take (e.g., "rejection number").

### 7.2 Disposition of Non-acceptable Lots

The responsible authority shall decide how lots that are not accepted will be disposed of. Such lots may be:

### 7.3 Nonconforming Items Found in Accepted Lots

If a lot has been accepted, the right is reserved to not accept any item found nonconforming during inspection. Items found nonconforming may be reworked or replaced by conforming items, and resubmitted for inspection with the approval of the responsible authority.

### 7.5 Special Reservation for Critical Classes

At the discretion of the responsible authority, every item in the lot may be required to be inspected for critical nonconformities. The right is reserved to inspect every item submitted and to not accept the lot immediately if a critical nonconformity is found.

### 7.6 Resubmitted Lots

All parties shall be immediately notified if a lot is found not acceptable. Such lots shall not be resubmitted until all items are re-examined and the supplier is satisfied that all nonconforming items have been removed or replaced.

### Commentary

#### Non-acceptance ≠ Rejection — A Subtle Distinction ≠

ISO 2859-1 uses "non-acceptance" when describing the statistical outcome of the inspection procedure, and "rejection" when describing an action taken by the consumer (e.g., rejection number Re). This distinction matters legally — a "non-accepted" lot isn't necessarily defective; it simply didn't meet the acceptance criterion of the sample. The responsible authority makes the final disposition decision.

#### Disposition Decision Tree

When a lot is non-accepted, the quality unit typically follows this sequence:

1. **Quarantine:** Segregate the lot, apply "HOLD" or "REJECTED" label

2. **Notification:** Notify supplier and procurement within 24 hours (per quality agreement)

3. **Root cause investigation:** Request 8D or CAPA from supplier

4. **Options:**

    - Return to supplier for replacement

    - 100% sort (supplier or internal) — document sorting criteria

    - Use-as-is via formal deviation/concession (only if defects are truly minor and documented)

    - Scrap

5. **Switching impact:** This rejection counts toward the switching score — document for next lot assessment

#### 100% Inspection for Critical Defects

Clause 7.5 explicitly allows 100% inspection for designated critical nonconformities. In pharmaceutical packaging, this is commonly applied to:

- Particulate contamination visible in glass vials (100% inspection by automated or semi-automated systems)

- Label text accuracy for high-risk items (e.g., narcotics, look-alike/sound-alike drugs)

When 100% inspection is used for criticals, the AQL sampling plan still applies to major and minor defects on the same sample.

8

## Clause 8: Drawing of Samples

### 8.1 Sample Selection

The items selected for the sample shall be drawn from the lot by **simple random sampling**. However, when the lot consists of sub-lots or strata identified by some rational criterion, **stratified sampling** shall be used such that the size of the subsample from each sub-lot or stratum is proportional to the size of that sub-lot or stratum.

### 8.2 Time for Drawing the Samples

Samples may be drawn after the lot has been produced, or during production of the lot. In either case, the samples shall be selected according to 8.1.

### 8.3 Double or Multiple Sampling

When double or multiple sampling is to be used, each subsequent sample shall be selected from the remainder of the same lot — not from a different lot or different shipment.

### Commentary

#### Random Sampling in Practice

True random sampling means every unit in the lot has an equal probability of being selected. In practice for large incoming shipments:

- **Systematic sampling:** Select every kth item (e.g., every 50th vial) — acceptable approximation if no periodic patterns

- **Stratified random:** Take samples from different layers/positions in the pallet — required when storage position might affect defect probability (e.g., top layer vs. bottom layer in glass)

- **Random number table:** For small lots, use actual random numbers — documented in SOP

Do NOT just sample from the top of the first box — this is the most common AQL audit finding and violates the randomness requirement.

#### Stratified vs. Simple Random — When It Matters vs. ——

If a pallet of vials was assembled from 3 different supplier batches (bottom, middle, top layers), simple random sampling might accidentally oversample one batch. Stratified sampling forces proportional representation. The analogy: if you want to poll a country's opinion, you don't just ask people in the capital — you sample proportionally from all regions.

9

## Clause 9: Normal, Tightened and Reduced Inspection — Switching Rules

### Inspection State Transition Diagram

Reduced Inspection  

⇄

Normal Inspection  

⇄

Tightened Inspection  

→

DISCONTINUE  

**Normal → Tightened**  

                        2 out of 5 consecutive lots rejected on original inspection  

                    

**Tightened → Normal**  

                        5 consecutive lots accepted on tightened inspection  

                    

**Normal → Reduced**  

                        Switching score ≥ 30 + steady production + authority approval  

                    

**Reduced → Normal**  

                        Lot rejected, OR irregular production, OR other conditions  

                    

**Tightened → DISCONTINUE:** Cumulative 5 lots rejected on original tightened inspection → Stop using this standard until supplier demonstrates improvement and responsible authority agrees to restart
                          
                    

### 9.1 Start of Inspection

Normal inspection shall be carried out at the start of inspection, unless otherwise directed by the responsible authority.

### 9.3.1 Normal → Tightened →

When normal inspection is being carried out, tightened inspection shall be implemented as soon as **two out of five (or fewer than five) consecutive lots have been non-acceptable on original inspection** (ignoring resubmitted lots for this procedure).

### 9.3.2 Tightened → Normal →

When tightened inspection is being carried out, normal inspection shall be re-instated when **five consecutive lots have been considered acceptable on original inspection**.

### 9.3.3 Normal → Reduced (Switching Score System) →

Reduced inspection shall be implemented provided ALL of the following conditions are satisfied:

- (a) Current value of the **switching score is at least 30**

- (b) Production is at a **steady rate**

- (c) Reduced inspection is considered **desirable by the responsible authority**

**Switching Score Calculation (Single Sampling):**

- When Ac ≥ 2: Add 3 if lot would have been accepted under one step tighter AQL; otherwise reset to zero

- When Ac = 0 or 1: Add 2 if lot accepted; otherwise reset to zero

### 9.3.4 Reduced → Normal →

Normal inspection shall be re-instated if any of the following occur:

- (a) A lot is not accepted

- (b) Production becomes irregular or delayed

- (c) Other conditions warrant re-instatement

### 9.4 Discontinuation of Inspection

If the cumulative number of lots not accepted in a sequence of consecutive lots on **original tightened inspection reaches 5**, the acceptance procedures shall not be resumed until action has been taken by the supplier to improve quality and the responsible authority has agreed this action is likely to be effective. Tightened inspection shall then be used as if 9.3.1 had been invoked.

### Commentary

#### Switching Rules as a Supplier Feedback Loop

The three inspection states function as a quality escalation system — like a traffic light for supplier performance:

- Green (Reduced): Proven excellent supplier → reward with reduced inspection, saving cost

- Blue (Normal): Default state — ongoing relationship with standard vigilance

- Orange (Tightened): Quality concern detected → increase scrutiny, apply pressure

- Red (Discontinue): Supplier too unreliable → stop the relationship until they fix root cause

This mirrors pharma supplier escalation SOPs: audit finding → CAPA → re-qualification. The ISO 2859-1 switching rules provide the statistical trigger points.

#### Independent Switching per Defect Class

Clause 9.2: The switching procedures shall be applied to each class of nonconformities or nonconforming items **independently**. This means:

- A supplier could be on Normal inspection for Critical defects

- AND on Tightened inspection for Major defects

- AND on Reduced inspection for Minor defects

All simultaneously. The sample is drawn once; the acceptance/rejection decision is made separately for each class. Your switching score tracking must be maintained separately per class.

#### Switching Score Example

```
Scenario: AQL 0.65%, n=80, Ac=2, Re=3 (single sampling)
One-step tighter AQL = 0.40%, which has Ac=1 for same n

Lot 1: d=1 (would pass at AQL 0.40, Ac=1)  → Score: 0+3=3
Lot 2: d=0 (would pass at AQL 0.40, Ac=1)  → Score: 3+3=6
Lot 3: d=2 (would FAIL at AQL 0.40, Ac=1) → Score: RESET to 0
Lot 4: d=0 → Score: 0+3=3
Lot 5: d=1 → Score: 3+3=6
Lot 6: d=0 → Score: 6+3=9
...
[10 lots later, score reaches ≥30]
→ Check all 3 conditions for Reduced
→ If production is steady and authority approves → switch to Reduced

```

#### Tightened Inspection in Pharma

Tightened inspection has two effects: (1) the acceptance criterion is stricter (higher sample quality required to pass), and (2) the psychological/economic pressure on the supplier increases. In a CDMO context, triggering tightened inspection should also automatically initiate a supplier quality notification, requesting a root cause analysis and CAPA. The switching rule provides the statistical trigger; the quality system provides the business response.

★

## Worked Example: Step-by-Step Sampling Plan Selection

#### Scenario

You are the incoming QC manager at a sterile fill-finish CDMO. A supplier has delivered a lot of 15,000 × 2 mL glass vials for an injectable product. You need to select an appropriate single sampling plan for AQL inspection at Normal inspection level. The supplier has been reliable — you need to establish the initial sampling plan.

### Step 1: Determine the Lot Size

**N = 15,000** vials in the lot.

This is the entire delivery from the supplier in this shipment, confirmed as a single supplier production batch.

### Step 2: Select the Inspection Level

ISO 2859-1 Table 1 offers **General Inspection Levels I, II, III** and **Special Levels S-1 to S-4**.

- General Level I: Reduced discrimination — use only when less stringency is justified

- **General Level II: Default for most applications** — standard pharma incoming inspection

- General Level III: Higher discrimination — use when extra assurance required

- Special Levels S-1 to S-4: For destructive or very expensive tests where small samples required

**Decision: Use General Level II** — this is the default and is appropriate for glass vial visual inspection.

### Step 3: Find the Sample Size Code Letter

From ISO 2859-1 **Table 1**: Sample Size Code Letters

**N = 15,000 → Code Letter = M**

### Step 4: Identify Sample Size n n

From ISO 2859-1 **Table 2-A** (Single Sampling Plans for Normal Inspection): Code Letter M corresponds to **n = 315**

### Step 5: Select AQL and Find Ac/Re AQLAc/Re

You are using three simultaneous AQL classes:

*Note: All three classes use the same sample of 315 units. The sample size is determined by the most stringent AQL; the same sample is evaluated against all three sets of acceptance criteria.*

### Step 6: Draw the Sample

Draw **315 vials** using stratified random sampling from across the lot:

- If 15,000 vials are on 5 pallets of 3,000 each: draw ~63 vials per pallet

- From each pallet: draw from top, middle, and bottom layers proportionally

- Within each layer: use systematic or random selection — do not take all from one corner

- Document the sampling procedure in the inspection record

### Step 7: Inspect and Record

Inspect each of the 315 vials against defined criteria. Example results:

**Outcome: LOT NON-ACCEPTED** — because Minor defects exceed Ac=14 (d=18 ≥ Re=15).

### Step 8: Switching Score Update

This lot is rejected (non-accepted) on original inspection. The switching score resets to **0** for all classes where rejection occurred.

Additionally: if this is the 2nd rejection in the last 5 consecutive lots for any class, that class must switch to **Tightened Inspection** for the next lot.

Rx

## Pharmaceutical & CDMO Application Guide CDMO

### Common Materials and Typical AQL Plans AQL

*Ac/Re values are approximate — always verify against the actual ISO 2859-1 Table 2-A for your specific AQL. Critical=0.065%, Major=0.65%, Minor=2.5%.*

#### Inspection Level Selection

- **General Level II:** Use for all standard incoming inspection of primary and secondary packaging

- **General Level I:** May be considered for non-critical materials (shipping cartons, outer packaging) with established suppliers

- **General Level III:** Use when heightened assurance required, e.g., new supplier qualification, after quality event, high-risk product

- **Special Levels S-1/S-2:** For destructive tests on expensive components (e.g., closure integrity by dye ingress)

### Commentary & Best Practices

#### Why NOT Use AQL for Sterility Testing AQL

This is one of the most important distinctions for pharma professionals:

- **Sterility testing** (USP <71>/Ph.Eur. 2.6.1) tests a specific number of containers to detect microbial contamination — the sample sizes (14 or 40 units) are fixed by regulation, not by AQL

- A positive sterility test renders the *entire batch* rejected — not just the lot in the AQL sense

- AQL sampling (binomial statistics) was never validated for the detection of rare microbiological events — the sample sizes required to detect even 1% contamination with 95% confidence exceed 300 units

- **The difference in principle:** AQL tests for process-level quality in a continuing series. Sterility testing detects batch contamination events. They answer different questions.

#### Supplier Qualification Integration

ISO 2859-1 switching rules can be formally embedded in supplier qualification systems:

- **New supplier / new material:** Start on General Level III (heightened discrimination) until proven

- **Tightened inspection trigger:** Automatically generate a Supplier Corrective Action Request (SCAR) + escalate to quality agreement review

- **Discontinuation trigger:** Automatic supplier disqualification / supply chain backup activation

- **Reduced inspection qualification:** Require switching score ≥30 + internal quality review approval + no open CAPA items

Document the switching history in the vendor master or supplier quality management system — this becomes part of the Annual Product Quality Review (APQR) data.

#### AQL in Quality Agreements AQL

The AQL values, inspection levels, defect classifications, and switching rules should all be specified in the Quality Agreement between CDMO and material supplier. A well-written QA section includes:

- Defect definition list (with photos where possible)

- AQL values per defect class

- Inspection level (typically General II)

- Sampling type (typically single sampling)

- Switching rule conditions and escalation triggers

- Disposition procedure for rejected lots

### Quick Reference: Switching Rules Summary

↑

## Section 2: Clauses 10–13 + Tables: Sampling Plans, Acceptability, Fractional Plans, AQL Tables (p52-p94)

# Clauses 10–13 + Tables: Sampling Plans, Acceptability & AQL Tables

    

    

ISO 2859-1:1999 Sampling Procedures for Inspection by Attributes | p52 – p94

    
    

        

## Clause 10: Sampling Plans

                

            

        

        

            

                

                    

### 10.1 Inspection Level

                    

The inspection level designates the relative amount of inspection. Three inspection levels — I, II, and III — are provided for general use. Unless otherwise specified, **Level II shall be used**. Level I may be used when less discrimination is needed; Level III when greater discrimination is required.

                    

Four additional special levels — S-1, S-2, S-3, S-4 — are also given and may be used where relatively small sample sizes are necessary and larger sampling risks can be tolerated.

                    

                    

                        

#### Key Rule: Level is Fixed During Switching

                        

The inspection level shall be kept **unchanged** when switching between normal, tightened, and reduced inspection. The choice of inspection level is entirely separate from switching severity.

                        

                    

                    

### 10.2 Sample Size Code Letters

                    

Sample sizes are designated by code letters (A through R, excluding I and O to avoid confusion with 1 and 0). **Table I** is used to find the applicable code letter for the particular lot size and prescribed inspection level.

                    

                    

### 10.3 Obtaining a Sampling Plan

                    

The AQL and the sample size code letter are used together to obtain the sampling plan from Tables 2, 3, 4, or 11. When no sampling plan is available for a given combination, the tables direct the user to a different letter using arrow conventions:

                    

                        

                        

                    

                    

The sample size is given by the *new* code letter, not the original. This means the actual sample inspected may differ from what Table I alone would suggest.

                

                

                    

### Commentary: Why Three General Levels?

                    

Think of inspection levels as a dial controlling how much statistical power you want. At Level I you take fewer samples — faster and cheaper, but you miss more borderline lots. At Level III you take more samples — slower and costlier, but you catch bad lots more reliably.

                    

                    

                        

#### When to Use Level I vs. III I vs. III

                        

                            
- **Level I**: Mature, proven supplier with years of data; very low-risk commodity item (e.g. cardboard secondary packaging)

                            
- **Level II**: Default for virtually all pharma incoming inspection

                            
- **Level III**: New supplier qualification; safety-critical component; post-CAPA verification lot

                        

                    

                    

                        

### Comparison: Single vs. Double vs. Multiple Sampling vs. vs.

            

    

    
    

        

            

T-I

            

                

## Table I — Sample Size Code Letters

                

            

        

        

            

                

                    

### Table Structure

                    

Table I is a lookup table with two dimensions:

                    

                        
- **Rows**: Lot size ranges (15 ranges from 2–8 up to 500,001+)

                        
- **Columns**: Inspection levels — 7 levels total: S-1, S-2, S-3, S-4 (special), and I, II, III (general)

                        
- **Cell contents**: A single code letter (A–R)

                    

                    

                

                

                    

### How to Read Table I I

                    

**Step 1**: Find your lot size in the left column (find the range that contains your N).

                    

**Step 2**: Move right to the column for your inspection level (usually General Level II).

                    

**Step 3**: Read the code letter in that cell. This code letter links to Tables II, III, or IV.

                    

                        

#### Example: Lot of 5,000 / General Level II

                        

Lot size 5,000 falls in range 3,201–10,000. At General Level II, the code letter is **J**. Code letter J → sample size n = 80 (from Table II-A).

                    

                

            

            

### Reconstructed Table I (Representative) I

            

            

                

#### Code Letter Sample Sizes

                

Each code letter corresponds to a specific sample size: A=2, B=3, C=5, D=8, E=13, F=20, G=32, H=50, J=80, K=125, L=200, M=315, N=500, P=800, Q=1250, R=2000. This progression follows a geometric series (approximately ×1.6 each step).

                

            

        

    

    
    

        

            

II-A

            

                

## Table II-A — Single Sampling Plans: Normal Inspection

                

            

        

        

            

                

                    

### Table Structure

                    

Table II-A has three dimensions of information:

                    

                        
- **Row**: Sample size code letter (A through R) + sample size n

                        
- **Column**: AQL values (0.010, 0.015, 0.025, 0.040, 0.065, 0.10, 0.15, 0.25, 0.40, 0.65, 1.0, 1.5, 2.5, 4.0, 6.5, 10, 15, 25, 40, 65, 100, 150, 250, 400, 650, 1000)

                        
- **Each cell**: Acceptance number Ac / Rejection number Re (displayed as a pair, e.g. "1 / 2")

                    

                    

Arrow cells (↑ or ↓) indicate that no plan exists for that combination — use the first plan in the indicated direction.

                    

                

                

                    

### How to Read Table II-A II-A

                    

**Step 1**: Find the row for your code letter (obtained from Table I).

                    

**Step 2**: Move right to the column for your AQL.

                    

**Step 3**: Read Ac and Re. Inspect exactly n items. If defects found ≤ Ac → accept. If defects ≥ Re → reject.

                    

                        

#### Arrow Rule in Practice

                        

If the cell shows ↑, move up to the next code letter with a plan. The sample size for inspection is the one shown next to that code letter — *not* the size from Table I. This is a common source of errors in SOP writing.

                        

                    

                

            

            

### Table II-A: Representative Subset (Normal Inspection) II-A

            

            

            

            

                

J row highlighted Code J (n=80) is the most common in pharma General Level II receiving inspection

                

↑ / ↓ No plan for this AQL + code letter — follow arrow to nearest valid plan

            

        

    

    
    

        

            

III-A

            

                

## Table III-A — Double Sampling Plans: Normal Inspection

                

            

        

        

            

                

                    

### Double Sampling Structure

                    

For each code letter + AQL combination, Table III-A provides four values:

                    

                        
- **n1**: First sample size (typically ≈ 0.63 × single n)

                        
- **Ac1 / Re1**: First stage accept / reject numbers

                        
- **n2**: Second sample size (cumulative total after both samples)

                        
- **Ac2 / Re2**: Second stage accept / reject numbers (based on cumulative defects from n1 + n2)

                    

                    

Key constraint: **Re1 = Ac2 + 1** is never true — Re1 is always set such that a clear early reject is possible. And typically Ac1 = Re1 − 2 (there is always an indeterminate zone for the first sample).

                    

                

                

                    

### Double Sampling Decision Tree

                    

                        

#### Decision Logic

                        

```
Inspect n1 items from the lot
  d1 = defects found in first sample

  IF d1 ≤ Ac1  → ACCEPT the lot (no second sample needed)
  IF d1 ≥ Re1  → REJECT the lot (no second sample needed)
  IF Ac1 < d1 < Re1  → INDETERMINATE → draw second sample

Inspect n2 items (second sample)
  d_cum = d1 + d2 (cumulative defects)

  IF d_cum ≤ Ac2  → ACCEPT the lot
  IF d_cum ≥ Re2  → REJECT the lot
```

                    

                    

                        

#### The Administrative Burden

                        

The second sample must be from the same lot, drawn randomly, and inspected before a final decision is made. This requires clear SOP language about sample segregation, holding area protocol, and who authorizes proceeding to Stage 2. In pharma, these logistics often make single sampling more practical despite the slightly larger average n.

                    

                

            

            

### Table III-A: Worked Examples for Code J (Normal, AQL 1.5 and AQL 2.5) J

            

                

#### Reading the Double Table: AQL 1.5, Code J Example AQL 1.5J

                

Inspect 50 items. If you find 0 or 1 defect → accept immediately. If you find 4 or more → reject immediately. If you find 2 or 3 (the "indeterminate zone") → inspect another 50 items. Now look at the cumulative total (d1 + d2): if ≤ 4 → accept; if ≥ 5 → reject. The maximum inspection is 100 items — still less than what single sampling would require on average for borderline lots.

                

            

        

    

    
    

        

            

11

            

                

## Clause 11: Determination of Acceptability

                

            

        

        

            

                

                    

### 11.1.1 Single Sampling Decision Rule

                    

The number of sample items inspected shall be equal to the sample size n given by the plan.

                    

                        

                        

                    

                    

Note: Re = Ac + 1 always (there is no gap between acceptance and rejection in single sampling).

                    

                    

### 11.1.2 Double Sampling

                    

First sample inspected (n1). Three outcomes:

                    

                        
- d1 ≤ Ac1 → accept without second sample

                        
- d1 ≥ Re1 → reject without second sample

                        
- Ac1 < d1 < Re1 → draw second sample (n2 additional items)

                    

                    

After second sample: cumulative d (d1+d2) compared to Ac2 and Re2. A decision must be reached by the second stage.

                    

### 11.1.3 Multiple Sampling

                    

Same principle as double sampling, extended up to 5 stages. A decision (accept or reject) must be reached by Stage 5 at the latest. After Stage 5 there is no further deferral — the cumulative count determines the outcome.

                    

### 11.2 Inspection for Nonconformities

                    

The same procedures apply when counting *nonconformities* (defects per unit) instead of *nonconforming items* (defective units). The term "nonconformities" is substituted wherever "nonconforming items" appears.

                

                

                    

### Commentary: The Inspection Decision in Practice

                    

                        

#### Nonconforming Items vs. Nonconformities vs.

                        

**Nonconforming item**: the entire unit fails (e.g., a vial with a crack — the whole vial is rejected and counted as one nonconforming item regardless of how many defects it has).

                        

**Nonconformity**: a single defect occurrence on a unit (e.g., a vial with both a crack AND a label error counts as two nonconformities). The AQL table values differ based on which counting method you use.

                        

In pharma, most incoming inspection uses **nonconforming item** counting — one defective unit = one count, regardless of defect multiplicity.

                    

                    

                        

## Clause 12: Further Information — OC Curves, AOQL, Process Average OCAOQL

                

            

        

        

            

                

                    

### 12.1 OC Curves — Operating Characteristic Curves

                    

The OC curve is the fundamental descriptor of any sampling plan's performance. It shows: for a given true process quality (% nonconforming), what is the probability that a lot of that quality will be accepted?

                    

                        
- **X-axis**: True proportion nonconforming in the lot (p)

                        
- **Y-axis**: Probability of acceptance Pa (0 to 1)

                        
- **Shape**: Always a descending S-curve (or near-S-curve)

                    

                    

Two key reference points on every OC curve:

                    

                        
- **AQL point**: At quality = AQL, Pa ≈ 0.95 (producer's risk α ≈ 5% — the risk of rejecting a good lot)

                        
- **LTPD/RQL point**: At quality = LTPD, Pa ≈ 0.10 (consumer's risk β ≈ 10% — the risk of accepting a bad lot)

                    

                    

                    

### 12.2 Process Average

                    

The process average is estimated as the average percent nonconforming found in samples from lots submitted for original inspection. For double/multiple sampling, only first sample results are included in this estimate. This feeds back into the switching rules: if the process average deteriorates, the switching score accumulates toward tightened inspection.

                    

### 12.3 AOQ — Average Outgoing Quality

                    

After inspection: accepted lots pass through with their remaining defects; rejected lots are 100% inspected and all defectives replaced. AOQ is the long-run average quality of product leaving inspection.

                    

Formula: AOQ ≈ Pa × p × (N−n)/N ≈ Pa × p (when n is small relative to N).

                    

### 12.4 AOQL — Average Outgoing Quality Limit AOQL

                    

The AOQL is the maximum AOQ over all possible values of incoming quality p. It is the worst-case quality of outgoing product under this inspection scheme. Approximate AOQL values are tabulated in Tables 8-A and 8-B for normal and tightened inspection respectively.

                

                

                    

### Commentary: The OC Curve as a Negotiation Tool OC

                    

                        

#### Visualizing the OC Curve OC

                        

Imagine a graph where the x-axis goes from 0% to 10% nonconforming, and the y-axis goes from 100% acceptance probability down to 0%. A steep S-curve is a "discriminating" plan — it sharply separates good lots from bad ones. A shallow curve is a "lenient" plan — even bad lots have a reasonable chance of acceptance.

                        

The steepness of the OC curve depends on sample size n. Larger n → steeper curve → better discrimination. This is why "General Level III" (larger n) gives more protection than Level I.

                        

                    

                    

                        

#### Producer's Risk vs. Consumer's Risk vs.

                        

**Producer's risk (α ≈ 5%)**: The probability of rejecting a lot whose true quality is exactly at the AQL. A "false alarm" — good material gets rejected. This creates supplier complaints and unnecessary re-inspection costs.

                        

**Consumer's risk (β ≈ 10%)**: The probability of accepting a lot whose true quality equals the LTPD/RQL. A "miss" — bad material gets through. In pharma this can mean defective product reaching patients.

                        

The ISO 2859-1 system is designed as a system (with switching rules) — not individual plans. Over a long series of lots, the switching rules provide protection to both producer and consumer simultaneously.

                    

                    

                        

#### 12.6 Consumer's Risk Quality Tables (Tables 6 & 7)

                        

Tables 6 and 7 give **Consumer's Risk Quality (CRQ)** values at 10% acceptance probability for each plan. These answer the question: "For this sampling plan, what is the worst lot quality that could slip through 10% of the time?" This is invaluable for pharma QA when justifying the minimum sample size for high-stakes receiving inspection.

                        

Example: If AQL = 1.0% is specified for a critical component, Table 6 identifies the code letter (minimum n) needed to ensure that a lot with 5% nonconforming has less than 10% chance of acceptance.

                    

                    

                        

## Clause 13: Fractional Acceptance Number Plans (Optional)

                

            

        

        

            

                

                    

### 13.1 Why Fractional Plans?

                    

At very low AQLs (0.010, 0.015, 0.025, 0.040%), the standard approach leads to two problems:

                    

                        
- The required sample size n is extremely large (e.g., AQL 0.010% → n needs to be in the thousands to detect even a few defectives)

                        
- For small lot sizes, the applicable plan has Ac=0 — meaning any single defect in the sample triggers rejection, which is very harsh

                    

                    

The fractional acceptance number approach instead uses **accumulated evidence across multiple lots**: fractions 1/5, 1/3, and 1/2 are used. These fractions represent conditional acceptance — a lot with one defective might be accepted only if the preceding lots had zero defectives.

                    

                    

### 13.2.1 Constant Sampling Plans: The Rules

                    

For constant fractional plans:

                    

                        
- **0 defects found** → accept the lot unconditionally

                        
- **2 or more defects** → reject the lot unconditionally

                        
- **Exactly 1 defect** → accept only if the required number of immediately preceding lots also had zero defects:
                            

                                
    - Ac = 1/2: the *immediately preceding lot* must have had 0 defects

                                
    - Ac = 1/3: the preceding *2 lots* must have had 0 defects

                                
    - Ac = 1/5: the preceding *4 lots* must have had 0 defects

                            

                        

                    

                    

If this is the first lot ever inspected (no preceding lots), and 1 defect is found → the lot is NOT accepted.

                

                

                    

### 13.2.1.2 Acceptance Score for Non-Constant Plans

                    

When sampling plans change lot-to-lot (due to varying lot sizes or switching between normal/tightened/reduced), a numerical **acceptance score** system is used:

                    

                        

#### Acceptance Score Rules

                        

```
At start of each phase (normal/tightened/reduced):
  Reset acceptance score to 0

Each lot, BEFORE inspecting, update score:
  If Ac = 0     → score unchanged
  If Ac = 1/5   → add 2
  If Ac = 1/3   → add 3
  If Ac = 1/2   → add 5
  If Ac = 1+    → add 7

Acceptance decision:
  If score before inspection ≤ 8:
    Accept ONLY if 0 defects found
  If score ≥ 9:
    Accept if ≤ 1 defect found (integer Ac applies)

After decision:
  If 1+ defects found → reset score to 0
  Switching score updated separately (after decision)
```

                    

                    

                        

#### When to Use Fractional Plans in Pharma

                        

Fractional plans are most relevant for **critical defects with very low AQL** (e.g., AQL 0.065% for particulates in filled vials, or AQL 0.010% for cosmetic defects that compromise container closure integrity). They require approval of the responsible authority and clear SOP documentation of the score tracking mechanism.

                        

Important: If lot sizes vary significantly from shipment to shipment (common with CMO deliveries), the **non-constant plan acceptance score** system in §13.2.1.2 must be used — not the simpler constant-plan rules.

                        

                    

                    

                        

#### 13.3 Switching Rules for Fractional Plans

                        

Normal → Tightened and Tightened → Normal: same rules as §9.3.1 and §9.3.2. For Normal → Reduced, a special switching score rule applies: if Ac = 1/3 or 1/2 and the lot is accepted, add 2 to the switching score (vs. the standard single-sample rule). Fractional plans are NOT compatible with ISO 2859-3 skip-lot sampling.

                    

                

            

        

    

    
    

        

            

V

            

                

## Tables II-B, II-C — Tightened and Reduced Inspection

                

            

        

        

            

                

                    

### Table II-B: Tightened Inspection

                    

Tightened inspection uses the same code letter (same n) but stricter acceptance numbers. Effectively, Ac decreases by one or the plan shifts to a smaller AQL column.

                    

Example: Code J, AQL 1.5 under Normal → Ac=2, Re=3, n=80. Under Tightened (Table II-B) → Ac=1, Re=2, n=80. Same sample size, much stricter acceptance criterion — you now reject with 2 defects instead of 3.

                    

                    

### Table II-C: Reduced Inspection

                    

Reduced inspection uses a **smaller sample size** (approximately 40% of normal n) but with a wider "indeterminate zone" — a third outcome where neither acceptance nor rejection is triggered and inspection returns to normal for the next lot. Example: Code J, AQL 1.5 under Reduced → n≈32, Ac=1, Re=4.

                    

Note that Re ≠ Ac+1 under reduced inspection — there is a gap (Ac+1 to Re−1) where the lot is *conditionally accepted* but inspection reverts to normal for the next lot.

                    

                

                

                    

### Commentary: The Three Severity Levels in Context

                    

                        

#### The Switching System Creates a Learning Loop

                        

The three inspection severities form an adaptive feedback loop:

                        

                            
- **Normal**: Default state — balanced risk for producer and consumer

                            
- **Tightened**: Triggered by poor performance — same work, harder to pass. Sends a signal to the supplier that something is wrong.

                            
- **Reduced**: Triggered by excellent sustained performance — less inspection work, faster throughput. A reward for consistent quality.

                        

                        

This is the intended use of ISO 2859-1 as a system, not just as a table lookup.

                    

                    

                        

## Worked Examples — Pharma Receiving Inspection

                

            

        

        

            
            

                

### Example 1: Standard Incoming Inspection of Glass Vials

                

                        

                            Supplier delivers a lot of 5,000 Type I borosilicate glass vials (20 mL) for a sterile injectable product. Your QC SOP requires General Inspection Level II. Two defect categories are defined: Major (functional defects that affect container integrity — cracks, chips at the sealing surface) at AQL 0.65%, and Minor (cosmetic defects — superficial scratches, minor cosmetic blemishes) at AQL 2.5%.
                              
  

                        

                        

                            Lot size: 5,000 → falls in range 3,201–10,000.  

                            Inspection level: General Level II.  

                            Table I lookup → Code Letter: **J**
                        

                        

                            Code Letter J → Sample size: **n = 80 vials**.  

                            Randomly select 80 vials from the lot using an approved randomization method (e.g., random number table, systematic sampling with random start).
                        

                        

                            

                        

                            Inspector examines 80 vials individually. Findings:
                            

                                
- Major defects found: **1** (one vial with chip at the sealing rim)

                                
- Minor defects found: **3** (three vials with minor cosmetic scratches)

                            

                        

                    

                    

                        

                            

                        

                            Both defect classes pass their respective criteria. The lot of 5,000 vials is accepted for use.
                              
  

                            However, the 1 major defect found represents the borderline — exactly at the acceptance limit. This result should be noted in the supplier quality record and will affect the switching score tracking.
                              
  

                            **Switching Score Impact**: A lot accepted with d = Ac does NOT contribute to the switching score for Reduced inspection (switching score only increments when d < Ac for most AQL values). The borderline acceptance means the supplier does not get credit toward Reduced status for this lot.
                              
  

                        

                        

                            

#### GMP Documentation Requirement GMP

                            

The inspection record must capture: lot number, lot size N=5000, inspection level GII, code letter J, n=80, AQL for each class, actual d values, Ac/Re for each class, decision, inspector ID, date. This record becomes part of the batch record for the finished product that will use these vials.

                        

                    

                

            
            

                

### Example 2: Tightened Inspection Trigger — Same Supplier, Same Component

                

                        

                            Over the past 10 lots of glass vials from the same supplier, 2 consecutive lots were rejected (major defects d ≥ Re = 2 in both cases). Per ISO 2859-1 §9.3.1 switching rules: 2 rejections in 5 consecutive lots on normal inspection → switch to tightened inspection.
                              
  

                        

                        

                            Same lot size: 5,000 vials. Inspection Level: General II (unchanged). Code Letter: J (unchanged — level and code letter do NOT change when switching severity).
                        

                        

                            Code Letter J, Tightened Inspection:
                            

                    

                    

                        

                            Inspector examines 80 vials. Findings:
                            

                                
- Major defects: **1** (one chipped vial)

                                
- Minor defects: **2** (two cosmetic scratches)

                            

                        

                        

                            

                        

                            The 1 major defect that would have been acceptable under Normal inspection (Normal Ac=1) is now a rejection under Tightened inspection (Tightened Ac=0).
                              
  

                            Same physical lot quality → different outcome simply because of the severity switch. This demonstrates that the switching system creates real economic consequences for suppliers who deliver inconsistent quality.
                              
  

                        

                        

                            

#### Supplier Corrective Action Requirement

                            

Under tightened inspection, the supplier remains on tightened until 5 consecutive lots are accepted. Procurement and QA should issue a Supplier Corrective Action Request (SCAR) and request an 8D report. If tightened inspection continues for 10 consecutive lots without achieving 5 consecutive passes, §9.4 discontinuation of inspection is triggered — supplier qualification is suspended.

                            

                        

                    

                

            
            

                

### Example 3: Reduced Inspection — Rewarding a High-Performing Supplier

                

                        

                            A rubber stopper supplier has delivered 12 consecutive lots, all accepted under Normal inspection, with switching scores consistently accumulating to ≥ 30. The process is declared stable by the process engineer, and QA Management has approved switching to Reduced inspection per §9.3.3.
                              
  

                        

                        

                            Lot size: 5,000 stoppers. Inspection Level: General II. Code Letter: J. AQL assignments: Major = 0.65%, Minor = 2.5%.
                        

                        

                            Code Letter J, Reduced Inspection:
                            

                    

                    

                        

                            Inspector examines 32 stoppers. Findings:
                            

                                
- Major defects: **0**

                                
- Minor defects: **3**

                            

                        

                        

                            

                        

                            For Minor defects: d=3 is above Ac=2 but below Re=5. This is the "gap zone" unique to Reduced inspection. The lot is **accepted** for this delivery, but the switching score is reset and inspection returns to Normal for the next lot.
                              
  

                            This is not a rejection — the customer receives the goods. But the supplier loses their Reduced inspection status and must re-earn it through continued good performance under Normal inspection.
                              
  

                        

                        

                            

#### Practice Question

                            

If the Minor defects found had been 5 (instead of 3), what would happen? Walk through the reduced inspection logic: d=5 ≥ Re=5 → **REJECT** the lot AND return to Normal inspection. Two simultaneous consequences: this shipment is rejected, AND all future lots return to Normal inspection immediately. Can you write the SOP decision tree that covers all three outcomes for Reduced inspection?

                        

                    

                

            
            

                

### Annex A: Non-Constant Fractional Plan Example (from ISO Standard) AISO

                

The standard includes a 25-lot worked example in Annex A demonstrating the acceptance score and switching score systems under varying lot sizes with AQL 1%, General Level II. Key observations from the data:

                

                    

                        

### Key Observations from Annex A

                        

                            
- **Lot 3**: Score was 10 before inspection (≥9, so Ac=1 applies). d=1 found → normally accepted, BUT 1 defect resets score to 0. This lot was rejected (d=1 with score indicating Ac=0 before this addition → must re-read the acceptance score logic carefully).

                            
- **Lot 6**: Triggered switch to tightened (E, Ac=0). Even 1 defect from code E → rejected. This shows how small lot sizes lead to smaller code letters and harsher plans.

                            
- **Lot 11**: Score reached 15 (≥9, fractional Ac applies as 1). d=1 accepted → acceptance score resets to 0 after the decision, but this satisfies tightened requirements — tightened ended and normal restored.

                            
- **Lots 12–24**: Gradual accumulation of switching score from 2 to 30 → qualified for Reduced at Lot 24. Demonstrates that earning Reduced status requires sustained, consistent performance across many lots.

                        

                    

                    

                        

### Lessons for SOP Writers SOP

                        

                            

#### The Acceptance Score Must Be Tracked in a Register

                            

Unlike normal/tightened/reduced status (which most QC teams already track), the **acceptance score** (for fractional plans) requires a separate running record tied to the specific AQL and supplier. This is a new documentation burden that must be explicitly built into the SOP and the incoming inspection form.

                        

                        

                            

#### Who Holds the Score?

                            

The acceptance score belongs to a *specific combination* of supplier + component + AQL. If a supplier switches to a different component (e.g., 20 mL vials → 10 mL vials), the score resets. If the AQL is renegotiated in the supplier quality agreement, the score resets. Clear scope definition in the SOP is essential.

                        

                    

                

            

        

    

    
    

        

            

Rx

            

                

## Pharma CDMO Commentary — ISO 2859-1 in Practice CDMO

                

            

        

        

            

                

                    

### Typical AQL Assignments in Pharma AQL

                    

There is no universal mandate for specific AQL values — the responsible authority (QA) must justify the chosen values. However, industry convention for sterile primary packaging typically follows:

                    

                        

#### Critical Defects Require Careful Consideration

                        

For Critical defects at AQL 0.065% with General Level II and typical lot sizes, the plan often points to large sample sizes (n=125–315) or returns an arrow (↑) requiring a larger code letter. This is why some pharma companies use *100% automated inspection* (camera systems) for critical cosmetic and functional attributes rather than statistical sampling — the required sample sizes become impractical for lot-by-lot verification at AQL 0.065%.

                        

                    

                    

### GMP Documentation Requirements GMP

                    

Simply stating "we use General Level II and AQL 0.65" in an SOP is insufficient for GMP purposes. The sampling plan must be justified in a validation or risk assessment document that addresses:

                    

                        
- Why this AQL is appropriate for this component and its intended use

                        
- What the OC curve shows for this plan (Pa at AQL and at LTPD)

                        
- How the inspection level was chosen (risk-based rationale)

                        
- How defect classifications were determined (with examples and photographs)

                        
- How switching rules are managed in practice (who tracks scores, review frequency)

                    

                

                

                    

### What ISO 2859-1 Cannot Do ISO 2859-1

                    

                        

#### ISO 2859-1 is NOT Appropriate for Sterility Testing ISO 2859-1

                        

This is the most important limitation for pharma. Sterility testing (or other microbiological tests) cannot be treated as attribute inspection for several reasons:

                        

                            
- **Fundamental assumption violation**: ISO 2859-1 assumes the lot is homogeneous enough that a random sample represents the whole. A contaminated lot typically has only a few contaminated units — the probability of a random sample catching even 10% contaminated units in a 10,000-unit lot is extremely low even with n=200.

                            
- **Destructive test**: Sterility testing destroys the sample. The sampling plan cannot be applied to the submitted lot in the traditional sense.

                            
- **USP <71> logic**: The pharmacopoeial sterility test is not an acceptance sampling plan — it is a verification test with its own OC characteristics defined by the test procedure, not by AQL tables.

                        

                    

                    

                        

#### ISO 2859-1 vs. USP <1207> ISO 2859-1USP <1207>

                        

**ISO 2859-1**: Attributes acceptance sampling — counts defective units in a sample, decision based on Ac/Re. Applicable to visual inspection, dimensional checks, physical attributes.

                        

**USP <1207>**: Container closure integrity testing — a measurement-based approach. Uses statistical methodology (confidence intervals, false-reject rates) tied to specific test methods (HVLD, dye ingress, headspace analysis). Fundamentally different statistical framework.

                        

The two should not be conflated. A pharma QA system typically needs both: ISO 2859-1 for visual/physical receiving inspection, and USP <1207>/ICH Q6A for analytical specification testing.

                    

                    

                        

#### Using the OC Curve in Supplier Negotiations OC

                        

When a supplier requests a change from AQL 0.65% to AQL 1.0% (claiming their process capability cannot meet 0.65%), you can use the OC curve objectively:

                        

                            
- Plot both OC curves (n=80, Ac=1 vs. n=80, Ac=2) on the same axes

                            
- Show the consumer's risk quality at 10% Pa for each

                            
- If the supplier's process average is known, calculate expected lot acceptance rates for both plans

                        

                        

This transforms a negotiation from opinion-based to data-based. The supplier must demonstrate that the OC curve shift does not increase consumer risk beyond acceptable limits defined in the quality agreement.

                    

                    

                        

#### The Right Tool for the Right Problem

                        

ISO 2859-1 is a manufacturing quality tool — born in an era of counting defective screws on an assembly line. It has been successfully adapted to pharma receiving inspection of components and materials. But it was never designed to replace analytical method validation, process validation, or parametric release. Confusing these frameworks is a classic GMP error — treating a sampling plan as if it provides absolute quality assurance rather than probabilistic protection.

                        

                    

                

            

            
            

### Section Summary: Key Takeaways

            

                

                    

                        

#### Technical Mastery Points

                        

                            
- Table I (lot size + level) → Code letter → Table II/III/IV (AQL) → n, Ac, Re: this three-step lookup is the core workflow

                            
- Arrow conventions: ↑/↓ change the effective code letter AND the sample size used for inspection

                            
- Re = Ac + 1 always for single and double sampling final stage (not for Reduced inspection)

                            
- Inspection level (I/II/III) never changes when switching between normal/tightened/reduced

                            
- OC curves give Pa at each quality level — use them to justify plans, not just tables alone

                            
- Fractional plans (§13) require an acceptance score register — add this to incoming inspection SOPs when adopted

                        

                    

                

                

                    

                        

#### CDMO Operational Points CDMO

                        

                            
- Document AQL justification in a risk-based sampling plan qualification document, not just in the SOP

                            
- Track switching scores in a supplier quality register — this is the mechanism that makes the system self-correcting

                            
- Never apply ISO 2859-1 to microbiological or sterility testing — use the appropriate pharmacopoeial framework

                            
- The OC curve is your negotiation tool with suppliers — use it objectively to compare plans

                            
- Reduced inspection is a reward and a risk — ensure QA management formally approves each switch to reduced status

                            
- For Critical defect AQLs < 0.10%, seriously evaluate whether 100% automated inspection is more appropriate than statistical sampling

                        

                    

                

            

        

    

⇧