# PDA Technical Report No. 60 (Revised 2026): Process Validation: A Lifecycle Approach

vii
Figures and Tables Index

*[Figure 1.2-1 Applicability of ICH Quality Guidelines Relative to the FDA Stage Approach to]*

Process Validation............................................................................................................................................ 4
Figure 3.0-1 Overall Sequence of Process Validation Activities .......................................................... 12
Table 3.3-1 Example Process Parameter Table for a Tangential Flow Filtration Step .................... 15
Figure 3.3-1 Example of Process Diagram for a Tangential-Flow Filtration Step ............................... 25
Figure 3.4-1 Analytical Lifecycle Stages.................................................................................................... 26

*[Figure 3.5-1 Process Control Elements, Unit Operations, and Relations to Critical Quality]*

Attributes ......................................................................................................................................................... 27
Figure 3.5-2 Decision Tree for Designating Parameter Criticality (4) ................................................. 29
Table 3.8-1 Checklist of Information Necessary for Stage 2 (PPQ) Readiness ................................. 33
Figure 4.1-1 Typical System Qualification Sequence ............................................................................. 40
Table 4.4.2.1-1 Sampling Requirement ..................................................................................................... 49
Figure 4.4.2.1-1 Sampling ............................................................................................................................ 50
Table 4.4.2.1-2 Confidence ......................................................................................................................... 50
Table 4.4.2.1.2-1 Example Sample Plan .................................................................................................... 52
Table 4.4.2.2-1 Generic Risk Evaluation Table ........................................................................................ 55

*[Figure 4.4.2.2.2-1 Decision Tree for Determination of Number of Process Performance]*

Qualification Lot ............................................................................................................................................. 56
Table 4.4.2.7-1 Matrix Design ..................................................................................................................... 59
Table 4.4.2.8-1 Equipment Family Example ............................................................................................. 60
Figure 5.1.1-1 Sampling Levels ................................................................................................................... 68
Figure 5.1.3-1 Development of a Continued Process Verification Stage 3a Plan ............................ 70
Figure 5.1.4-1 Legacy Product Assessment ............................................................................................. 71

*[Figure 5.2.3-1 Definition of Proven Acceptable Ranges (e.g., elution pH) of an Early Unit]*

Operation ......................................................................................................................................................... 74
Figure 5.3.1-1 Decision-Tree Guideline (Stage 3b) ................................................................................. 76
Figure 5.4.1-1 Integration of Data Sources for Improved Process Controls ..................................... 78

**Table 5.5.3-1 Sample of Annual Product Review or Yearly Biologic Product Report Elements**

Supported by Continued Process Verification ......................................................................................... 81

*[Figure 6.1-1 Quality Risk Management: A Lifecycle Approach for Process Development and]*

Validation ......................................................................................................................................................... 86
Table 6.1.1-1 Product Attribute Criticality Risk Assessment Example ............................................... 87
Table 6.1.2-1 Risk-Based Qualification Planning .................................................................................... 88
Table 6.1.2-2 Severity Rating and Sampling Requirements Risk.......................................................... 88

viii
Table 6.2-1 Statistical Methods and the Typical Stages at Which They are Used ........................... 90
Figure 6.2.2-1 Process in Classical Statistical Control, Common Cause Variation Only ................. 94
Figure 6.2.2-2 Process Not in Statistical Control, Special Cause Variation ....................................... 94
Figure 6.2.2-3 A Process with Both Within-Lot and Between-Lot Variations .................................. 95
Figure 6.2.2.3-1 Examples of Process Capability Statistics Cp and CpK ............................................ 97
Table 6.2.2.3-1 Relationship Between Capability and % or Per Million Nonconforming ............... 98
Figure 6.2.3-1 Example of an Operating Characteristic Curve............................................................. 99
Figure 6.4-1 Distribution of Technology Transfer Activities throughout the Product Lifecycle .... 103
Table 6.4-1 Technology Transfer Activities throughout the Product Lifecycle .............................. 104
Figure 6.5.1-1 Knowledge Management ................................................................................................ 108
Figure 6.5.3-1 Process Understanding via the Growth of Knowledge ............................................. 111
Figure 6.5.3-2 Steps Required for Transfer of Tacit Knowledge to Explicit Knowledge .............. 112
Table 7.1-1 Stage 1: Process Design (Large Molecule Example)........................................................ 114
Table 7.1-2 Stage 2: Process Qualification (Large Molecule Example) ............................................. 118
Table 7.1-3 Stage 3: Continued Process Verification (Large Molecule Example) ........................... 121
Table 7.2-1 Stage 1: Process Design (Small Molecule Example) ........................................................ 122
Table 7.2-2 Stage 2: Process Qualification (Small Molecule Example) ............................................. 126
Table 7.2-3 Stage 3: Continued Process Verification (Small Molecule Example) ........................... 130
Table 9.2-1 Expected Between-Lot Variation in Number of Lots ..................................................... 137
Table 9.6-1 Number of Lots to Demonstrate Confidence for Lot Conformance Rate ................. 140
Table 9.8-1 Effect of Between-Lot Variation on the Total Process Variance ................................. 141
Table 9.9-1 Sample Size to Estimate a Standard Deviation to Within ±x% of True Value ........... 142

1

## 1.0 Introduction

The United States Food and Drug Administration (FDA) and European Medicines Association (EMA)
consider process validation (PV) an essential element in the assurance of drug quality and include both
general and specific requirements in their current good manufacturing practice (GMP) guidelines (1-3).
The PV lifecycle concept links product and process development, qualification of commercial
manufacturing processes, and maintenance of the commercial production process in a coordinated effort (1).
When based on sound process understanding and used with quality risk management (QRM) principles and
change control, the lifecycle approach allows manufacturers to use continuous process verification
(enhanced approach, e.g., real-time release) in addition to, or instead of, traditional PV (1, 2, 4, 5). The
lifecycle approach may not be linear or sequential. As the product/process knowledge becomes available,
the changes could be initiated at any part of the process. These changes may include all areas of validation,
such as PV, the physical equipment requalification, control hardware, and software changes and
qualification, as all of these systems are subject to GMP controls and the lifecycle approach.

### 1.1 Purpose and Scope

Depending on the context, process, and product history, PV activities can differ. The information in this
technical report applies to the manufacturing processes for drug substances (DSs) and drug products (DPs),
including:
•
Pharmaceuticals, sterile and nonsterile
•
Biological/biotechnological products, including vaccines, blood-derivative products, advanced
therapy medicinal products (ATMP), and regenerative medicine advanced therapy (RMAT)
products
•
Active pharmaceutical ingredients (APIs)
•
Radiopharmaceuticals
•
Veterinary medicines
•
Drug constituents of combination products (e.g., a combination of drug plus a medical device)
This technical report was prepared for global use and applies to both new and existing commercial
manufacturing processes; however, its scope does not include manufacturing processes for:
•
Medical devices, except when part of a combination product
•
Dietary supplements
•
Medicated feed
•
Human tissues, except human-tissue engineering when part of an ATMP
Although these product categories are outside the scope of this technical report, regulatory guidance
documents require the manufacturer to develop their validation programs. As such, the Parenteral Drug

2
Association’s (PDA) Technical Report No. 60 (Revised): Process Validation: A Lifecycle Approach would
be a useful reference in the development of PV lifecycle approaches for other product categories. While the
validation of ancillary supporting operations used in pharmaceutical manufacturing processes is not
discussed in TR 60, separate PDA technical reports are available that provide specific guidance for such
procedures as cleaning, aseptic process simulation (APS), moist-heat sterilization, and dry-heat sterilization
(6-9).

### 1.2 Background

The lifecycle concept includes all phases in the life of a product from initial development and registration
through commercial production, including post-approval changes and product discontinuation. The use of a
lifecycle approach to pharmaceutical product quality is widely thought to facilitate innovation and continual
improvement as well as strengthen the link between pharmaceutical development and manufacturing. The
lifecycle philosophy is fundamental to the quality guidelines developed by the International Council of
Harmonisation (ICH) that cover pharmaceutical development, QRM, pharmaceutical quality systems (PQS),
development and manufacture of DSs, and technical and regulatory considerations for pharmaceutical
product lifecycle management. Additional ICH guidelines have been issued for continuous manufacturing
and method validation analytics (10-12).
These ICH principles provide the product lifecycle framework and quality-system enablers that have been
used in pharmaceutical PV guidance documents. These documents advise that PV is not a one-time event,
but an activity that spans the product lifecycle, linking process development to the commercial
manufacturing process and its maintenance during routine commercial production.
ICH Quality Guideline Q8(R2): Pharmaceutical Development defines procedures for linking product- and
process-development planning to the final commercial-process control strategy and quality system. It
describes an enhanced scientific- and risk-based approach to product and process development that
emphasizes statistical analysis and design of experiments (DoE), as well as the incorporation of knowledge
gained from similar products and processes. Manufacturing capabilities and the quality system must be
integrated into the process development plan to ensure effective and compliant commercial operations. The
functionality and limitations of commercial manufacturing equipment are primary considerations in the
process design.
ICH Quality Guideline Q9(R1): Quality Risk Management describes the use of a risk-based approach to
pharmaceutical development and manufacturing quality. These approaches identify and prioritize those
process parameters and product quality attributes with the greatest potential to affect product quality.
Specific guidance on the application of ICH Q9(R1) concepts can be found in PDA Technical Report No.
54: Implementation of Quality Risk Management for Pharmaceutical and Biotechnology Manufacturing
Operations, PDA Technical Report No. 54-5: Quality Risk Management for the Design, Qualification, and
Operation of Manufacturing Systems, and PDA Technical Report No. 59: Utilization of Statistical Methods
for Production and Business Processes. The FDA Guidance for Industry: Process Validation: General
Principles and Practices stresses using a risk-based approach to develop criteria and process performance
indicators and improve the design and execution of other validation-related activities (1).
The FDA and EMA PV guidances follow the principles of ICH Quality Guideline Q10: Pharmaceutical
Quality System, which conveys the essential need to integrate process design into the quality system.

3
Throughout the development effort, the input and alignment of product and process development from a
firm’s Quality Unit are required to ensure compatibility with the quality system. Key considerations in
product and process design include knowledge management (KM), development of a commercial control
strategy, and use of modern QRM practices. Quality and regulatory organizational components should be
part of the cross-functional team from the beginning of the PV study design to ensure that it is compatible
with the firm’s quality system and that it will meet regulatory agency expectations.
The Quality Unit provides the appropriate oversight of the PV studies required under GMP guidelines.
Although not all lifecycle activities are required to be performed under GMPs (e.g., some Stage 1–Process
Design studies), including representatives from the Quality and Regulatory Units on the cross-functional
team is a wise decision (5). Documentation is an important element at all stages of lifecycle validation and,
though the degree and type required varies throughout, documentation requirements are greatest during the
process qualification and verification stages. Studies during these stages should conform to GMPs and
should be approved by the Quality Unit.
The process validation master plan (PVMP) should describe the overall rationale, validation strategy, and
list of specific studies and should reside within the firm’s quality documentation system. A successful
validation program is one that is initiated early in the product lifecycle and is kept current through change
control throughout the lifecycle. A comprehensive corporate policy that defines the expectations and
commitment to PV lifecycle principles is the foundation of a successful validation program. This policy
should define the quality management philosophy, components of validation, change control, documentation
requirements (including a PVMP), validation protocols and reports, and responsibilities of key stakeholders
within the organization (13).
This document follows the principles and general recommendations presented in the current FDA validation
guidance document and uses the traditional and nontraditional (enhanced) PV terminology employed by
EMA. In this context, nontraditional or enhanced PV may use continuous process verification as an
alternative approach to traditional PV. With the enhanced approach, manufacturing process performance is
continuously monitored and evaluated. The enhanced approach is a science- and risk-based, real-time
approach to verify and demonstrate that a process operates within specified parameters and consistently
produces material that meets quality and process performance requirements (14).
The three-stage PV lifecycle nomenclature used by FDA—Stage 1–Process Design, Stage 2–Process
Qualification, and Stage 3–Continued Process Verification (CPV)—is also used in this technical report (1).
Section 3.0, Section 4.0, and Section 5.0 discuss implementation of these stages in detail. Figure 1.2-1
shows the relationship between the relevant ICH guidance documents and the FDA stage approach to PV
across the product lifecycle.

4

*[Figure 1.2-1 Applicability of ICH Quality Guidelines Relative to the FDA Stage Approach to]*

Process Validation
Continuous process verification and continued process verification are distinct terms and have different
meanings. Continuous process verification refers to validating manufacturing processes that use advanced
manufacturing and analytical technologies (e.g., process analytical technology (PAT) systems). FDA uses
the term continued process verification generally to mean those activities that maintain the process in a state
of control, and it encompasses all manufacturing scenarios, that is, traditional manufacturing, manufacturing
employing advanced technologies of any kind, and any combination thereof.
A variety of regulatory guidances combined with the experience and knowledge of a cross-section of
industry professionals covering products within the scope of this document (e.g., large and small molecules,
sterile and nonsterile products) provide the basis for this revision. It presents approaches to best practices
that are scientifically sound, represent good business, and are designed to meet current regulatory
requirements and expectations.

#### 1.2.1 Review of Guidances Issued after Technical Report No. 60 First Published in 2013

There are multiple guidance documents, standards, and regulations that are related in some way to PV.
Though not all of them can be listed here, the authors of this revision encourage PV practitioners to study
them on their own. Furthermore, continually tracking guidances issued by ICH, EMA, FDA, the United
Kingdom’s Medicines and Healthcare products Regulatory Agency, Pharmaceutical Inspection Co-
Operation Scheme (PIC/S), and World Health Organization (WHO), is recommended as they provide the
most up-to-date direction of pharmaceutical GMP. In addition, other jurisdictions, such as the China Food
and Drug Administration, Korea Food & Drug Administration, Pharmaceuticals and Medical Devices

5
Agency (Japan), Health Canada, Therapeutic Goods Administration (Australia), Agência Nacional de
Vigilância Sanitária (Brazil), and other ministries and agencies issue their own guideline documentation that
typically take global trends into consideration and should be consulted for local manufacturing and
distribution.
One of the main objectives of revising TR 60 was to align its discussions and ultimate recommendations
with the most relevant and current regulatory guidances available at the time it was drafted. There may be
more regulatory guidances that could prove useful to a PV practitioner, but the authors decided to focus on
those documents that, in their professional opinion, would prove especially influential. The guidance
documents the task group considered are:
•
EU Annex 1: Manufacture of Sterile Medicinal Products, EudraLex – Volume 4 – Good
Manufacturing Practice for Medicinal Products for Human and Veterinary Use
•
EU Annex 11: Computerised Systems, EudraLex – Volume 4 – Good Manufacturing Practice for
Medicinal Products for Human and Veterinary Use
•
EU Annex 14: Manufacture of Products derived from Human Blood or Human Plasma, EudraLex –
Volume 4 – Good Manufacturing Practice (GMP)
•
EU Annex 15: Qualification and Validation, EudraLex – Volume 4 – Good Manufacturing Practice
for Medicinal Products for Human and Veterinary Use
•
FDA Guidance for Industry: Data Integrity and Compliance with Drug cGMP: Questions and
Answers
•
FDA Guidance for Industry: Part 11, Electronic Records; Electronic Signatures — Scope and
Application
•
U.S. Code of Federal Regulations, Title 21, Part 640–Additional Standards for Human Blood and
Blood Products
•
ICH Quality Guideline Q12: Technical and Regulatory Considerations for Pharmaceutical Product
Lifecycle Management.
•
ICH Quality Guideline Q13: Continuous Manufacturing of Drug Substances and Drug Products
•
ICH Quality Guideline Q14: Analytical Procedure Development

6

## 2.0 Glossary

Definitions have been provided to help clarify
the concepts discussed in this document. While
some definitions used vary among companies,
geographic location, etc., the definitions
described below are consistently used within this
Technical Report document. Where a definition
is based on another published source, the source
is cited.

Active Pharmaceutical Ingredient (API)
Any substance or mixture of substances intended
to be used in the manufacture of a drug
(medicinal) product and that, when used in the
production of a drug, becomes an active
ingredient of the drug product. Such substances
are intended to furnish pharmacological activity
or other direct effect in the diagnosis, cure,
mitigation, treatment, or prevention of disease or
to affect the structure and function of the body
(15).
Note: The significant structural component of
APIs is called “API Starting Material”.
Note: Equivalent to drug substance (DS).
Attribute
A physical, chemical or microbiological
property or characteristic of an input or output
material (16).

Critical Quality Attribute (CQA)
A physical, chemical, biological, or
microbiological property or characteristic
that should be within an appropriate limit,
range, or distribution to ensure the desired
product quality (17).
Quality Attribute
A molecular or product characteristic that is
selected for its ability to help indicate the
quality of the product. Collectively, the
quality attributes define identity, purity,
potency and stability of the product, and
safety with respect to adventitious agents.
Specifications measure a selected subset of
the quality attributes (18).
Component
Component means any ingredient intended for
use in the manufacture of a drug product,
including those that may not appear in such drug
product (19).
Continued Process Verification (CPV)
Assuring that during routine production the
process remains in a state of control (1).
Continuous Process Verification
An alternative approach to process validation in
which manufacturing process performance is
continuously monitored and evaluated (17).
Control Strategy
A planned set of controls, derived from current
product and process understanding, that assures
process performance and product quality. The
controls can include parameters and attributes
related to drug substance and drug product
materials and components, facility and
equipment operating conditions, in-process
controls, finished product specifications, and the

7
associated methods and frequency of monitoring
and control (5).
Data Integrity
The assurance that the data remains complete,
consistent, accurate, trustworthy, and reliable
throughout its life cycle. Maintaining data
integrity is crucial for ensuring the validity of
AI-driven insights, supporting regulatory
compliance, and enabling reliable decision-
making in pharmaceutical manufacturing (20).
Design of Experiments (DoE)
A structured, organized method for determining
the relationship between factors affecting a
process and the output of that process (17).
Note: This is typically referred to as “Formal
Experimental Design”.
Design Space
The multidimensional combination and
interaction of input variables (e.g., material
attributes) and process parameters have been
demonstrated to provide assurance of quality.
Working within the design space is not
considered as a change. Movement out of the
design space is a change and would normally
initiate a regulatory post approval change
process. Design space is proposed by the
applicant and is subject to regulatory assessment
and approval (17).
Drug Product (DP)
The dosage form in the final immediate
packaging intended for marketing (15).
Drug Substance (DS)
The material which is subsequently formulated
with excipients to produce the drug product. It
can be composed of the desired product,
product-related substances, and product- and
process-related impurities. It may also contain
excipients including other components such as
buffers (21).

Good Engineering Practice
Established engineering methods and standards
applied throughout the lifecycle to deliver
appropriate and cost-effective solutions (22).
Intermediate
A material produced during the steps of the
processing of an API that undergoes further
molecular change or purification before it
becomes an API. Intermediates may or may not
be isolated (15).
Knowledge Management (KM)
Knowledge management is a systematic
approach to acquiring, analyzing, storing and
disseminating information related to products,
manufacturing processes and components.
Sources of knowledge include, but are not
limited to, prior knowledge (public domain or
internally documented); pharmaceutical
development studies; technology transfer
activities; process validation studies over the
product lifecycle; manufacturing experience;
innovation; continual improvement; and change
management activities.
Lifecycle
All phases in the life of a product, from the
initial development through marketing until the
product’s discontinuation (17).
Normal Operating Range (NOR)
A defined range, within the Proven Acceptable
Range, specified in the manufacturing
instructions as the target and range at which a
process parameter is controlled, while producing
unit operation material or final product meeting
release criteria and Critical Quality Attributes
(23).

8
Materials
A general term used to denote raw materials
(starting materials, reagents, solvents), process
aids, intermediates, APIs, and packaging and
labeling materials.
In-Process Material
In-process material means any material
fabricated, compounded, blended, or derived
by chemical reaction that is produced for,
and used in, the preparation of the drug
product (19).
Raw Material
A general term used to denote starting
materials, reagents, and solvents intended
for use in the production of intermediates or
APIs (12).
Operating Characteristic Curve
Depicts the discriminatory power of an
acceptance sampling plan. The operating
characteristic curve plots the probabilities of
accepting a lot versus the fraction defective.
Parameters
Critical Process Parameter (CPP)
A process parameter whose variability has
an impact on a critical quality attribute and
therefore should be monitored or controlled
to ensure the process produces the desired
quality (17).
Noncritical Process Parameter
A noncritical parameter has no impact on
quality at the process step in question. Note:
It may have an impact on the performance of
the next process step and so may be
monitored for process control purposes.
Process Parameter
An input variable or condition of the
manufacturing process that can be directly
controlled in the process. Typically, these
parameters are physical or chemical (e.g.,
temperature, process time, column flow rate,
column wash volume, reagent concentration,
or buffer pH) (24).
Note: This is typically referred to as
“Operational Parameter”.
Performance Qualification (PQ)
The documented verification that systems and
equipment can perform effectively and
reproducibly based on the approved process
method and product specifications.
Platform Manufacturing
The approach of developing a production
strategy for a new drug starting from
manufacturing processes similar to those used
by the same manufacturer to manufacture other
drugs of the same type (25).
Process Analytical Technology (PAT)
A system for designing, analyzing, and
controlling manufacturing through timely
measurements (i.e., during processing) of critical
quality and performance attributes of raw and in-
process materials and processes with the goal of
ensuring final product quality (17).
Process Capability Index (CpK)
A statistical tool, to measure the ability of a
process to produce output within a customer’s
specification limits. In simple words, it measures
the producer’s capability to produce a product
within the customer’s tolerance range. Cpk is
used to estimate how close a given target is and
how consistent it is with the average
performance. Cpk provides the best-case
scenario for the existing process. It can also
estimate future process performance, assuming
performance is consistent over time.
Process Performance Index (PpK)
A statistical tool to verify if the sample that has
been generated from the process is capable of
meeting the customer’s requirements. It
measures the performance of the process related
to both dispersion and centeredness. In simple
words, Ppk is an index of process performance
that tells how well a system is meeting
specifications and how well the process is
centered within the specification limits.

9
Process Performance Qualification (PPQ)
The second element of Stage 2, process
qualification, which combines the actual facility,
utilities, equipment (each now qualified), and
the trained personnel with the commercial
manufacturing process, control procedures, and
components to produce commercial batches to
confirm the process design and demonstrate that
the commercial manufacturing process performs
as expected (1).
Process Qualification
Confirming that the manufacturing process as
designed is capable of reproducible commercial
manufacturing (1).
Process Robustness
Ability of a process to tolerate variability of
materials and changes of the process and
equipment without negative impact on
quality (17).
Process Validation (PV)
U.S. FDA: The collection and evaluation of
data, from the process design stage through
commercial production, which establishes
scientific evidence that a process is capable
of consistently delivering quality products
(1).
EMA: The documented evidence that the
process, operated within established
parameters, can perform effectively and
reproducibly to produce a medicinal product
meeting its predetermined specifications and
quality attributes (2).
Process Validation Master Plan (PVMP)
A document that defines the process validation
scope and rationale and that contains the list of
process validation studies to be performed (24).
Note: Typically referred to as “Validation Master
Plan”.
Proven Acceptable Range (PAR)
A characterized range of process parameters for
which operation within this range, while keeping
other parameters constant, will result in
producing a material meeting relevant quality
criteria (11).
Quality
The suitability of either a drug substance or drug
product for its intended use. This term includes
such attributes as identity, strength, and purity
(25).
Quality Control
The operational techniques and activities
undertaken with in the quality assurance system
to verify that the requirements for quality of the
trial-related activities have been fulfilled (26).
Note: This is typically referred to as “Control of
Quality”.
Quality Unit
A group organized within an organization to
promote quality in general practice (16).
Quality by Design (QbD)
A systematic approach to development that
begins with predefined objectives and
emphasizes product and process understanding
and process control, based on sound science and
quality risk management (17).
Quality Target Product Profile (QTPP)
A prospective summary of the quality
characteristics of a drug product that ideally will
be achieved to ensure the desired quality, taking
into account safety and efficacy of the drug
product (17).
Target Product Profile (TPP)
A format for a summary of a drug development
program described in terms of labeling concepts
to facilitate communication regarding a
particular drug development program (25).

10
Verification
A systematic approach to verify that
manufacturing systems, acting alone or in
combination, are fit for intended use, have been
properly installed, and are operating correctly.
This is an umbrella term that encompasses types
of approaches to ensure the systems are fit for
such as qualification, commissioning and
qualification, verification, system validation, or
other (27).
Worst-Case
A set of conditions encompassing upper and
lower processing limits and circumstances,
including those within standard operating
procedures, that pose the greatest chance of
process or product failure (when compared to
ideal conditions). Such conditions do not
necessarily induce product or process failure (7).

### 2.1 Abbreviations

API

Active Pharmaceutical Ingredient
CAPA
Corrective and Preventative Action
CMA
Critical Material Attribute
CMC
Chemistry, Manufacturing, & Controls
Cp

Process Capability
CpK

Process Capability Index
CPP

Critical Process Parameter
CPV

Continued Process Verification
CQA
Critical Quality Attribute
DoE

Design of Experiments
FMEA
Failure Mode Effects Analysis
HACCP Hazard Analysis & Critical Control
Points
KM

Knowledge Management
NOR
Normal Operating Range
OOS

Out of Specification
PAR

Proven Acceptable Range

PAT

Process Analytical Technology
Pp

Process Performance
PpK

Process Performance Index
PPQ

Process Performance Qualification
PQ

Performance Qualification
PQS

Pharmaceutical Quality System
PV

Process Validation
PVMP
Process Validation Master Plan
QbD
     Quality by Design
QMS
Quality Management System
QRA
Quality Risk Assessment
QRM
Quality Risk Management
QTPP
Quality Target Product Profile
SPC

Statistic Process Control
TT

Technology Transfer

11
3.0 Process Development/Process Design (Stage 1)
Section 3.0 focuses on approaches used during process development through process performance
qualification (PPQ) of robust commercial manufacturing. It addresses the first stage of PV in which product
and process knowledge are explored to establish the control strategy. Risk assessment and management are
used to focus the development effort. The knowledge evolves through the course of the pharmaceutical
development program. Stage 1 aims at building the basis to apply a science-based approach with the
objective of enhancing the effectiveness and success of Stage 2, PPQ. It also establishes a foundation for
CPV in Stage 3. Figure 3.0-1 depicts the sequence of activities involved in PV and illustrates interactivities
and interdependencies between and within all three stages. As knowledge of the product and process grows,
the control strategy may be re-examined, and changes can be made.

12

*[Figure 3.0-1 Overall Sequence of Process Validation Activities]*

13

### 3.1 Establish Quality Target Product Profile

The aim of Stage 1 – Process Design is to design a quality product with a manufacturing process that
consistently delivers the intended performance of the DP. Pharmaceutical development begins with the
establishment of predefined objectives, ensuring the desired quality while considering product safety and
efficacy. These objectives are described in the quality target product profile (QTPP). ICH Q8(R2) defines
QTTP as a prospective summary of the quality characteristics of a DP that ideally will be achieved to ensure
the desired quality of the DP, considering safety and efficacy. The QTPP is determined at the initiation of
Stage 1 and is referenced throughout the product lifecycle (17).
The QTPP captures the high-level quality characteristics relevant for the DP, in addition to such
characteristics as route of administration, dosage form, and strength, that should be derived from risk-based
tools and should follow the principles outlined in ICH Q9(R1). The severity of harm, that is, the potential
impact of the attributes on safety and efficacy, should be considered to identify and document the critical
quality attributes (CQA). Various risk assessment tools referred to in ICH Q9(R1) can be used to evaluate
the criticality of individual quality attributes. PDA Technical Report No. 81: Cell-Based Therapy Control
Strategy provides examples of suitable risk assessment tools with low variability.
The initial manufacturing process used in GMP production for early clinical stages should be based on the
knowledge obtained from early process-development activities and should be designed to ensure consistent
product quality focusing on quality attributes related to patient safety. When defining the manufacturing
process during development (and prior to the definition of a mature, comprehensive control strategy), a
process description can be used to assist in implementing risk assessments and developing the control
strategy. At this early stage, the manufacturing process could be heavily influenced by the need to quickly
generate clinical-trial material where leveraging existing equipment and container–closure systems would be
advantageous (as described further in bulleted listing below). The initial manufacturing process may be
changed in consideration of the patient’s needs, clinical trial outcomes, manufacturing constraints, and
learnings from process development. Changes could come in equipment, product strength, product
composition, or final pharmaceutical or biochemical form.
The manufacturing process is described as a series of constituent operations, which may be visualized in
many formats including, but not limited to, a block or process-flow diagram that describes each unit
operation. The following information should be included in the description of each item:
•
Process requirements, including raw materials, scale, and order of operations
•
Equipment train (make and model)
•
Set points and ranges (proven acceptable range (PAR), normal operating range (NOR), residence
time distribution) for the process parameters
•
Identification and quantity of all material flows (additions or inputs, wastes, product streams)
•
Testing, sampling, and in-process controls
•
Hold times and hold conditions for product or process intermediates and additional solutions
•
Estimated step yields and processing durations
•
Sizing for equipment, including such items as chromatography columns and filtration units
•
Specific identification (e.g., manufacturer, part number) for manufacturing (e.g., filters) and product
components (e.g., vials, stoppers)
•
Other information necessary to successfully reproduce the process

14
Process descriptions and scale-up effects, if any, are documented in reports and may be incorporated into the
technology transfer (TT) package for the product. The process may change during Stage 1 for many reasons,
for example, increases in material demand (i.e., process and analytical development, clinical needs),
improved product understanding that leads to changes to CQAs, improved process understanding that results
in the addition, elimination, or adjustment of unit operations and the corresponding process controls and in-
process analytical tests. Documentation should capture these changes, and the supporting justifications for
this information should be archived in the KM system.
The Process Description is a lifecycle document that is initiated in Stage 1 to support early clinical
manufacturing, maintained, and appropriately updated to support Stages 2 and 3. Increased knowledge
gained during process characterization studies may require additional changes to the process description. All
changes to the process should be approved through change control procedures as defined by the
organization’s quality system.

### 3.2 Identify Critical Quality Attributes

The QTPP provides an understanding of what will ensure the quality, safety, and efficacy of a specific
product for the patient. Once the QTPP has been determined, its content can be used to establish the quality
attributes. A quality attribute is a characteristic of a product that relates to quality; and is considered critical
when those attributes are likely or certain to impact the safety and efficacy of a product.
As defined in ICH Quality Guideline Q8(R2): Pharmaceutical Development, a CQA is a “physical,
chemical, biological or microbiological property or characteristic that should be within an appropriate limit,
range, or distribution to ensure the desired product quality” (17).
Identifying CQAs is an integral part of manufacturing process development. At an early stage of process
development, the information available on product attributes may be limited. For this reason, the first set of
CQAs may come from prior knowledge obtained during early development or from similar products rather
than from extensive product characterization. The degree of criticality assigned to quality attributes should
be derived from risk-based tools following the principles outlined in ICH Q9(R1). The severity of harm, that
is, the potential impact of the attributes on safety and efficacy, should be considered to identify and
document the CQAs (28). Various risk assessment tools referred to in ICH Q9(R1) can be used to evaluate
the criticality of individual quality attributes.
Following comprehensive assessments of scientific evidence and risk, quality attributes are ranked
according to the degree of criticality. This may be a continuum that more accurately reflects the complexity
of structure–function relationships and varying levels of uncertainty around attribute classification.
The identification of potential CQAs is an ongoing activity initiated early in product development. It makes
use of general knowledge about the product and its application, as well as available clinical and nonclinical
data. CQAs are subject to change in the early stages of product development and, thus, require a QRM
approach that evolves as knowledge about the product and process is generated (refer to Section 6.1). CQAs
for commercial products should be defined prior to the initiation of Stage 2 activities via a subsequent risk
assessment.

15

### 3.3 Define the Manufacturing Process

A manufacturing process is designed to consistently provide a product that will meet its required quality attributes. Table 3.3-1 presents an example
of process parameters for the single-unit operation and provides a sample description table. Figure 3.3-1 presents a diagram of a single-unit operation
(29). The evolution of process knowledge and understanding is reflected in clinical-batch records; these are an important source of information for
defining the manufacturing process in the process description. Data collected from the manufacture of clinical-trial material can be useful in defining
elements of the control strategy and determining process capabilities, set specifications, and design PPQ protocols and acceptance criteria, as well as
evaluating laboratory models and transfer processes. Strategies and fundamentals of KM are discussed further in Section 6.5.

**Table 3.3-1 Example Process Parameter Table for a Tangential Flow Filtration Step**

Process
Variable
Process Parameters
Rationale
Attributes
Set Point
Proven
Acceptable
Range
(PAR)*
Parameter
Designation**
Product or
Process
Attribute
Expected Range
General
Membrane
Area
2 m2
N/A
Molecular
Weight Cut-
Off
30 kDa
N/A
Membrane
Polymer
Polysulfone
N/A

16
Process
Variable
Process Parameters
Rationale
Attributes
Set Point
Proven
Acceptable
Range
(PAR)*
Parameter
Designation**
Product or
Process
Attribute
Expected Range
Pre-Use Cleaning & Flushing
Cleaning
Solution:
Concentration
0.4 to 0.6 N NaOH
Non-Key
Low risk of product or
process impact
N/A
Recirculation
Rate
10 L/min
8 – 12
L/min
Non-Key
Adequate recirculation is
needed to ensure proper
cleaning, but acceptable
results are achieved over a
wide range
N/A
Trans-
membrane
Pressure
(TMP)
10 PSI
5 – 15 PSI
Non-Key
Low risk of product or
process impact over a wide
range
N/A
Temperature
30 °C
25 – 35 °C
Non-Key
May impact cleaning
effectiveness if far out of
range; procedural controls in
place such that the risk of
running outside the range is
unlikely
N/A
Time
60 min
60 – 90
min
Non-Key
Wide range, directly
controlled to prevent
running outside of the
validated range
N/A
WFI Flush
Volume
20 L/m2
≥20 L/m2
Non-Key
Wide range, directly
controlled
N/A

17
Process
Variable
Process Parameters
Rationale
Attributes
Set Point
Proven
Acceptable
Range
(PAR)*
Parameter
Designation**
Product or
Process
Attribute
Expected Range
Pre-Use Qualification
Integrity Test
Pressure
15 PSIG
15 – 18
PSIG
Critical
If test pressure is incorrect,
the test result is invalid
N/A
Water Flux
Trans-
membrane
Pressure
(TMP)
10 PSIG
8 – 12
PSIG
Non-Key
Water flux can be corrected
for actual pressure
N/A
Water Flux
Temperature
20 °C
18 – 22 °C
Non-Key
Water flux can be corrected
for actual temperature
N/A
Filter Integrity
Manufacturer
Specifications
Pass
Critical
Verification of filter integrity
is crucial to ensure process
effectiveness; filter-integrity
testing is an output of the
prequalification, but an input
to processing the feed
stream
N/A

18
Process
Variable
Process Parameters
Rationale
Attributes
Set Point
Proven
Acceptable
Range
(PAR)*
Parameter
Designation**
Product or
Process
Attribute
Expected Range
System Priming
Buffer
Conductivity
& pH
Solution Acceptance Criteria
Critical
All process buffer
specifications categorized as
critical, even though
procedural controls are in
place to prevent release of
nonconforming buffers to
production; buffers outside
of established ranges may
impact product quality
during processing
N/A
Buffer
Volume
35 L
25 – 50 L
Non-Key
Unlikely to affect product or
process; directly controllable
N/A
Recirculation
Rate
8 L/min
4 – 12
L/min
Non-Key
Unlikely to affect product or
process; directly controllable
N/A
Trans-
membrane
Pressure
(TMP)
12 PSI
10 – 15
PSI
Non-Key
Unlikely to affect product or
process; directly controllable
N/A
Temperature
20 °C
15 – 25 °C
Non-Key
Unlikely to affect product or
process; directly controllable
N/A

19
Process
Variable
Process Parameters
Rationale
Attributes
Set Point
Proven
Acceptable
Range
(PAR)*
Parameter
Designation**
Product or
Process
Attribute
Expected Range
Process – Initial Concentration Step
Initial Product
Total Mass
1225 g
900 –
1600 g
Critical
Initial product concentrations
and volumes (total mass)
may be critical due to
relationship with system
volume constraints and the
ability to reach diafiltration
(DF) and final concentration
targets
N/A
Initial Product
Volume
75 L
50 – 100 L
Key
In some circumstances, initial
product concentrations and
volumes (total mass) may be
critical; may be related to
system volume constraints
and ability to reach DF and
final concentration targets. In
other situations, the initial
volume may affect process
time and or yield
N/A
Recirculation
Rate
8 L/min
6 – 10
L/min
Key
Crossflow rate can impact
flux; however, only
processing time is impacted
unless rate is excessively low
(causing significant
membrane polarization of
protein); depends on impact
of TMP on flux
N/A

20
Process
Variable
Process Parameters
Rationale
Attributes
Set Point
Proven
Acceptable
Range
(PAR)*
Parameter
Designation**
Product or
Process
Attribute
Expected Range
Process – Initial Concentration Step
Trans-
membrane
Pressure
(TMP)
12 PSI
10 – 15
PSI
Key
Minor impact on flux unless
operated excessively high or
low (outside of PAR); at low
values, TMP may have a
significant impact on flux
N/A
Temperature
20 °C
15 – 25 °C
Non-Key
Minor impact on flux (~2%
per degree)
N/A
Process Flux
(Average)
N/A
Output of process conditions
including TMP, recirculation
rate, product concentration
may be used to track batch-
to-batch consistency
Process
Performance
Attribute
20 – 30 LMH
Product
Concentration
N/A
Output of initial
concentration stage, input to
DF
Critical
Quality
Attribute
30-40 g/L
Product
(Retentate)
Volume
35 L
30 – 40 L
Critical
Volume must be in range and
validated for proper volume
control within the system
during DF and within
equipment/ tankage
constraints for total volume
of DF buffer needed to
deliver required volumetric
exchange during DF
N/A

21
Process
Variable
Process Parameters
Rationale
Attributes
Set Point
Proven
Acceptable
Range
(PAR)*
Parameter
Designation**
Product or
Process
Attribute
Expected Range
Process – Diafiltration Step (Constant Volume)
Diafiltration
(DF) Buffer
pH and
Conductivity
Solution Acceptance Criteria
Critical
DF buffer directly impacts
the formulation of final bulk
drug substance (DS) and
ultimately drug product (DP)
N/A
Recirculation
Rate
8 L/min
6 – 10
L/min
Key
Crossflow rate can impact
flux; however, processing
time is impacted if rate is
excessively low (outside of
PAR) causing significant
membrane polarization of
protein
N/A
Trans-
membrane
Pressure
(TMP)
12 PSI
10 – 15
PSI
Key
Minor impact on flux unless
operated excessively high or
low; operating outside of
PAR will impact process
time
N/A
Temperature
20 °C
15 – 25 °C
Non-Key
Minor effect on flux; assume
no effect on product quality
over a fairly wide range
N/A
System
Volume
During
Diafiltration
(DF)
35 L
30 – 40 L
Critical
Potential to under-diafilter if
variability or uncertainty in
this parameter
N/A

22
Process
Variable
Process Parameters
Rationale
Attributes
Set Point
Proven
Acceptable
Range
(PAR)*
Parameter
Designation**
Product or
Process
Attribute
Expected Range
Process – Diafiltration Step (Constant Volume)
Number of
Diavolumes
7
7 – 10
Critical
Extent of buffer exchange is
dependent on number of
diavolumes
N/A
Process Flux
(Average)
N/A
Output of process conditions
including TMP, recirculation
rate, product concentration;
may be used to track batch-
to-batch consistency
Process
Performance
Attribute
25 to 30 LMH
Retentate pH
and
Conductivity
at End of Step
N/A
Direct impact to product
quality
Critical
Quality
Attribute
To Specification
Process – Final Concentration & Product Recovery
Chase Buffer
pH and
Conductivity
Per solution specification
Critical
Direct impact to product
quality
N/A
Recirculation
Rate
8 L/min
6 – 10
L/min
Key
More likely to significantly
affect flux at higher product
concentrations
N/A
Trans-
membrane
Pressure
(TMP)
10 PSI
5 – 15 PSI
Key
Impacts flux
N/A

23
Process
Variable
Process Parameters
Rationale
Attributes
Set Point
Proven
Acceptable
Range
(PAR)*
Parameter
Designation**
Product or
Process
Attribute
Expected Range
Process – Final Concentration & Product Recovery
Temperature
20 °C
15 – 25 °C
Non-Key
Minor effect on flux, assume
no effect on product quality
over fairly wide range
N/A
Process Flux
(Average)
N/A
Process
Performance
Attribute
15 to 20 LMH
Chase Buffer
Volume
Determined by in-process measurement
Procedural controls
N/A
Product
Concentration
After
Recovery &
Chase
N/A
Must be in range to facilitate
next process step; if final
step in DS manufacture,
must be consistent with
requirements for formulating
DP
Critical
Quality
Attribute
To Specification
System Cleaning & Storage
Cleaning
Solution
0.4 to 0.6 N NaOH
Non-Key
Directly controllable and
unlikely to affect product or
process
N/A
Recirculation
Rate
10 L/min
8 – 12
L/min
Non-Key
Adequate recirculation is
needed to ensure proper
cleaning, but range is wide
N/A

24
Process
Variable
Process Parameters
Rationale
Attributes
Set Point
Proven
Acceptable
Range
(PAR)*
Parameter
Designation**
Product or
Process
Attribute
Expected Range
System Cleaning & Storage
Trans-
membrane
Pressure
(TMP)
10 PSI
5 – 15 PSI
Non-Key
No impact to cleaning
effectiveness over a wide
range
N/A
Temperature
30 °C
25 – 35°C
Non-Key
May impact cleaning
effectiveness if far out of
range; procedural controls in
place such that the risk of
running outside the range is
unlikely
N/A
Time
60 min
60 – 90
min
Non-Key
Wide range, directly
controlled to prevent
running outside of the
validated range
N/A
Storage
Solution
Normality
0.09 to 0.10 N NaOH
Non-Key
Directly controllable, unlikely
to affect product or process
N/A
*Refer to Section 3.6 for additional information on proven acceptable range (PAR).
**Refer to ICH Q12 for additional clarification on critical, key, and non-key parameters. Refer to Figure 3.5.-3 for additional information.

25

*[Figure 3.3-1 Example of Process Diagram for a Tangential-Flow Filtration Step]*

### 3.4 Analytical Methods

Analyses of raw materials, in-process samples, DS, and DP are important aspects of the control strategy and
process characterization studies (refer to Section 3.8). Analytical methods used for such studies should be
appropriate for their intended use, scientifically sound, reliable, and reproducible. Early-stage analytical
method development may be optimized further down the lifecycle as appropriate, both on the improvement
of the analytical technique as well as integrating different sample preparation processes to ensure
meaningful test results (30). Strategies for qualification or validation of the analytical methods used during
development have been published and provide approaches for evaluating tests used at this stage of the
lifecycle (31).
The analytical method qualification should establish the expected performance of the method throughout the
range of variation of the attribute experienced in quality control activities (e.g., range experienced at release,
in-process controls, during stability studies). Guidance on expectations for the analytical methods is also
outlined in the FDA’s Guidance for Industry: Process Validation: General Principles and Practices. The
process characterization plan and the associated study reports should document information on the analytical
methods used during process characterization studies and the qualification of the methods. Methods should
be targeted not only to assess the product-specific characteristics but also to ensure the correct monitoring of
additional aspects with potential impact (e.g., bioburden, endotoxins in contamination controls). The

26
equipment utilized for process characterization studies (typically performed in development laboratories)
must be adequately calibrated and maintained, and also satisfy the basic requirements for data integrity (DI).
The analytical test methods used to support PV programs must be developed in accordance with the
analytical quality-by-design (AQbD) concepts, qualified, and subsequently monitored for continuous
improvement adhering to a lifecycle approach. Test methods can be a significant contributing factor to the
variability in reported results. ICH Quality Guideline Q14: Analytical Procedure Development incorporates
the application of quality by design (QbD) principles into analytical method development (32). An
analytical target profile (ATP), similar to a QTPP, provides a predefined objective that specifies the
performance requirements for the analytical methods. ATPs include quality data attributes of the reportable
result, such as accuracy and measurement uncertainty. The heightened understanding of the critical test
method attributes and the development of an analytical control strategy can ensure reliable test results
throughout the lifecycle. The assessment of the risk level of each method variable and determination of its
impact on the reportable results is identified based on sound science, prior knowledge, and the design of
analytical experiments. Method development activities design strategies to minimize input variables such
that their impact on the test results is minimal. The development strategy considers aspects including
preparation, measurement, instrumentation, and sampling strategy. Analytical lifecycle stages can be
summarized into three stages as depicted in Figure 3.4-1 and in Figure 3.0-1 (33, 34).

*[Figure 3.4-1 Analytical Lifecycle Stages]*

With the adoption of the lifecycle concepts outlined in ICH Q14, the initial identification of CQAs is
followed by a quality risk assessment (QRA) in Stage 1. This is a cause-and-effect analysis (e.g., fishbone or
Ishikawa diagram) to identify process input parameters where variability is likely to have the greatest impact
on product quality or process performance. This assessment is based primarily on prior knowledge or early
development work, and the outcome provides the foundation for the process characterization studies that
will follow (refer to Section 3.7).
Understanding the impact of process parameter variability and applying the appropriate controls is a
fundamental element in the definition and development of the commercial control strategy. The analytical
method development should take into consideration the inherent variability of the process and known impact
of critical process parameters (CPP) onto CQAs. The overall process variability may include variance due to
the process, as well as variance posed by the analytical method. ICH Q8(R2) defines a CPP as one “whose
variability has an impact on a CQA and therefore should be monitored or controlled to ensure the process
produces the desired quality” (35).

### 3.5 Risk Assessment and Parameter Criticality Designation

Risk assessment plays an important role in the development of a commercial control strategy. Risk
assessments are performed by interdisciplinary teams at several points during Stage 1 of the lifecycle and
serve several purposes (refer to Section 6.1). Risk assessment tools provide a structured means for

27
documenting the data and rationale associated with the risk assessment outcome, which becomes part of the
documented process development history. The Stage 1 risk assessment will identify and confirm the CQAs,
CPPs, and critical material attributes (CMA).
Understanding the impact of variability and applying the appropriate controls is a fundamental element in
the definition and development of the commercial control strategy. ICH Q8(R2) defines a CPP as “whose
variability has an impact on a CQA and therefore should be monitored or controlled to ensure the process
produces the desired quality” (35). Similarly, ICH Q8(R2) and ICH Quality Guideline Q11: Development
and Manufacture of Drug Substances (Chemical Entities and Biotechnological/Biological Entities) also
define the material attributes whose variability has an impact on a CQA, as illustrated in Figure 3.5-1.
CMAs may be derived from the review of raw materials, media, solutions, starting or in-process material,
DS CQA (physical, chemical, biological, or microbiological property), an excipient attribute, a DP primary
packaging, or an incoming component attribute.
Beyond the generally recognized definition of a CPP from ICH Q8(R2), process parameter designations are
not standardized, and approaches may vary. For this reason, definitions for parameter designations must be
clearly documented and understood within the organization. Definitions should remain consistent
throughout the process-validation lifecycle.
A process element may be an output for one process step (i.e., process intermediate from unit operation 1 in

*[Figure 3.5-1 or DS material) yet be an input for the next process step (i.e., unit operation 2 in Figure 3.5-1]*

or DP).

*[Figure 3.5-1 Process Control Elements, Unit Operations, and Relations to Critical Quality]*

Attributes

*[Figure 3.5-2 provides an example of a decision tree developed to guide the assignment of parameter]*

designations in conjunction with the QRAs. The decision tree facilitates categorization of process

28
parameters as critical, key, or operational. Decision-making tools can facilitate a common understanding
among participants and offer the advantage of increasing consistency in the decision-making process as well
as consistent documentation of rationales as part of the risk assessment process.
The decision tree can be used for iterative risk assessments both before and after the supporting data from
process characterizations studies are available.
Refer to Figure 3.5-2 for the Parameter Criticality Decision Tree. Figure depicts the inputs and outputs of
the process as well as process parameter evaluation:
•
Input or Output: Process variables can be inputs or outputs to a unit operation. For a given unit
operation, each variable is initially established as an input or output based on direct controllability.
̶
Yes: Directly controllable process input parameters can contribute to process variability.
̶
No: Process outputs that are not directly controllable are attributes that are monitored and
may be indicative of product quality or a quality attribute and/or process performance or
performance attribute (PA).
•
Process Parameters: Evaluation of potential impact to CQAs.
̶
Yes: If impact is suspected, or if data show that variability in a parameter could impact a
CQA, the parameter is designated as a CPP. Although a parameter may be initially
classified as a CPP, data from robustness studies conducted during process characterization
may show that CQAs are not impacted, despite wide variations in the parameter. In these
cases, the subsequent risk assessment serves to reevaluate the parameter classification.
̶
No: The process parameter is further evaluated for its potential impact on process
performance or consistency if run outside of the defined range.
Note: Where data from Stage 1 is leveraged in later stages (e.g., Stage 2 or 3), then the data generation and
recording will require the same level of rigor as that used for Stage 2 and onwards.

29

*[Figure 3.5-2 Decision Tree for Designating Parameter Criticality (4)]*

### 3.6 Process Characterization

Process characterization is a set of documented studies in which process parameters are purposely varied to
determine their effect on product quality attributes and process performance. The approach uses the
knowledge and information from process risk assessments to determine a set of process characterization
studies to examine the main effect and the interaction effect of process parameters on proposed ranges of
variation on CQAs. The resulting information is used to determine the parameter criticality and to define the
PAR for the process parameters. If using an enhanced approach (i.e., incorporating advanced analytical
and/or manufacturing control technologies), it can also be used to set the final parameter ranges and develop
a design space to process development. Experiments can be designed to examine proposed ranges and
explore ranges wider than those that would normally be used in operation (refer to Section 4.3).

30
An element of process characterization may include multivariate-designed experiments to define process
design space. While univariate approaches are appropriate for some variables to establish a PAR,
multivariate design of experiments (DoE) studies account for interactions between process parameters
and/or material and product attributes (14). Since studies designed to characterize the process and set
acceptable ranges for process parameters are usually performed at laboratory scale, the ability of laboratory-
scale studies to predict process performance is desirable. When a laboratory-scale model is used in
development, the adequacy of the model should be verified and justified. When there are differences
between actual and expected performance, laboratory models and model predictions should be appropriately
modified. In the event that the conclusions drawn from the studies are applied directly to the commercial-
scale process, the qualification of laboratory-scale models is essential. Qualification of the scaled-down
models should confirm that they perform in a manner that is representative of the full-scale process. This is
shown by comparing process parameters and inputs and outputs, including product quality attributes.

#### 3.6.1 Scale-Down Models

Scale-down models of chromatography steps for protein products can be qualified by performing multiple
runs with input parameters at set points and comparing the results to the full-scale unit operation. Parameters
evaluated should include those that affect process consistency, such as step yields, elution profile, elution
volume, and/or retention time. These should then be combined with those that represent product quality,
such as pool purity and levels of process-related and host-cell-related impurities.
Pilot-scale models of small molecules that are representative of the commercial manufacturing process may
be used for supportive PPQ data. In solid and liquid oral dosage forms, ten percent of the commercial batch
size and/or 100,000 units have been considered a representative scale (14). Scale-up effects for certain
processes, such as mixing freely soluble substances, tablet compression, or liquid filling, may be well
known. Batch sizes at ten percent of bulk size or run times of 100,000 dosage units provide a sufficient
duration to determine a degree of control and process characterization, while uncovering any preliminary
major problems. Full-scale confirmation or evaluation may be carried out when small-scale studies are used
to support PPQ.
For scale-down studies, the raw materials, component attributes, equipment, and process parameters should
be comparable to and indicative of the process intended for the commercial product.

#### 3.6.2 Clinical Manufacturing

Some product characteristics may not be tested as part of the routine-release test panel. Examples of such
product characteristics include residual deoxyribonucleic acid (DNA) levels for biotechnology products
(when DNA clearance has been established at a level that clearly exceeds safety requirements) or final-
product porosity for solid oral dosage products (when dissolution testing is performed). In addition to
release specifications, Stage 1 deliverables should include other tests on the DS, DP, or critical intermediates
that are needed in order to claim a comprehensive understanding of the product and process.
For the initial supply of clinical trial material, the pharmaceutical form may differ from the final form as the
therapeutic dose is not yet known and the clinical trials require a high level of flexibility to determine the
correct dose. In addition, the manufacturing clinical materials process may not be well understood, and the
control strategy is in its infancy; however, the data obtained from these manufacturing runs feed into the
overall process understanding to establish appropriate process controls and corresponding operating limits.

31
As clinical manufacturing continues, the process is optimized and modified based on the results of previous
manufacturing experience, in conjunction with the ongoing process characterization studies, with the goal of
developing a robust process control strategy for moving into Stage 2. This may also advance in an evolution
of the final pharmaceutical form to ensure patient compliance and ease of use. A role could also be played
by specific regulatory and marketing requirements where the product is going to be marketed.
A product to be used for human use, such as a clinical trial, cannot be a laboratory product, but it must be
manufactured to meet GMP requirements including, but not limited to, a qualified facility, qualified
equipment, trained operators, a defined process, and subject to a batch disposition. Therefore, these clinical
trial materials should anticipate what is going to be the real commercial PPQ in Stage 2.
The product attribute data obtained from clinical manufacturing runs (including product release, process
intermediate, and initial product stability analytical testing) is important for the purposes of setting
acceptance criteria for product specifications, especially for those attributes linked to the efficacy of the
product (e.g., strength, dose, purity, potency). Since this material is used in clinical studies, the product
attribute data may be correlated directly with clinical outputs. This provides a wealth of important
understanding that can be used in defining the process control strategy, including setting acceptable ranges
for the monitoring of CQAs that will be applied in the PPQ campaign (Stage 2) and then, in commercial
manufacturing (Stage 3).
The applications for use of clinical manufacturing data should be outlined within the PVMP, including how
this information and data will be used for the establishment of the process control strategy and in setting
acceptable ranges for process variables for the purposes of the PPQ. Additionally, the data from clinical
manufacturing may also be informative for the purposes of initiating the process monitoring program that
will be carried into Stage 3 of the PV lifecycle. For example, representative clinical manufacturing data can
be used to establish initial control limits for critical quality attributes in the initial stage of CPV (1, 30).

### 3.7 Process Design Report

The process design report, often referred to as a “process development report”, is also a Stage 1 output. The
process design documents should continually be consulted throughout the lifecycle of the product. Thus,
there is always the possibility of process optimization and update of the document (4). Stage 1 study data is
used to support this document and to justify the ranges and the process control strategy. Additional data and
process knowledge are gained as the process changes and are incorporated during Stage 2 and Stage 3; the
process design report should be updated to include this latest information. This comprehensive document
includes:
•
Reference to CQAs and supporting risk
assessments
•
Process flow diagrams
•
Process description tables
̶
Inputs (in-process controls)
̶
Outputs (in-process tests and
limits, in-process specifications)
•
Process parameters and ranges
•
Classification of parameters for risk of
impact to CQAs and process performance
•
Design space, as appropriate
•
Justification and data supporting all
parameter ranges (e.g., characterization
data, development studies, clinical
manufacturing history)

32
A PVMP may be initiated during Stage 1 to prepare for Stage 2 activities. It should outline the validation
strategy and supporting rationale, and typically includes:
•
Process characterization plan
•
Description of the manufacturing process and control strategy
•
Functions and responsibilities
•
Performance Qualification (PQ) or PPQ plan:
̶
PPQ strategy (e.g., single-unit operations or a combination of unit operations, bracketing,
family, or matrix approaches) and a list of individual protocols
̶
Applicable ancillary studies, (e.g., mixing, media preparation, in-process pool hold-time,
resin lifetime, transport)
•
List of equipment and facilities to be used
•
List of analytical methods and their status
•
Sampling plan
•
List of protocols to be executed under the plan
•
Proposed timeline and schedule of deliverables
•
Supportive stability studies, when applicable
•
Procedures for handling deviations and revisions
•
CPV plan
Initiating a post-approval change management protocol (PACMP) for submission is important at this stage.
The completion of Stage 1 activities and the knowledge gathered will result in an appropriate control
strategy, elements of which are established conditions. Anticipating potential post-approval changes and
developing an effective PACMP allows for seamless continuous improvement changes to the manufacturing
process during the lifecycle, as intended by ICH Quality Guideline Q12: Technical and Regulatory
Considerations for Pharmaceutical Product Lifecycle Management.

### 3.8 Stage 1 – Process Validation Summary of Activities

Table 3.8-1 provides a checklist of the information needed to transition from Stage 1 to Stage 2 in the PV
lifecycle.

33

**Table 3.8-1 Checklist of Information Necessary for Stage 2 (PPQ) Readiness**

Deliverables
TR 60 Section
Quality Target Product Profile (QTPP) – done at the initiation of Stage 1
Section 3.1 Establish Quality Target
Product Profile (QTPP)
Critical Quality Attributes (CQAs) – with corresponding criticality risk assessment and desired
confidence
Section 3.2 Identify Critical Quality
Attributes (CQAs)
Manufacturing Process Design, including:
•
Process description showing process inputs, outputs, yields, in-process tests and controls, and
process parameters (set points and ranges) for each unit operation
•
Process solution formulas, raw materials, specifications
•
Batch records and production data from laboratory- or pilot-scale production
Section 3.3 Define the Manufacturing
Process
Analytical Methods – for product, intermediates, and raw materials
Section 3.4 Analytical Methods
Initial Quality Risk Assessment – risk-based categorization of parameters and material attributes
prior to process characterization
Section 3.5 Risk Assessment and
Parameter Criticality Designation
Criticality and Risk Assessments – identification of process parameters and material attributes with
corresponding criticality and risk analysis
Section 3.5 Risk Assessment and
Parameter Criticality Designation
Process Characterization, including:
•
Process characterization plan and protocols, including selected designs of experiment
•
Study reports, including data and modeling
Section 3.6 Process Characterization
Process Analytical Technology (PAT) Applications and Algorithms – if PAT is used
Section 6.3 Process Analytical Technology
(PAT)
Product Characterization Testing Plan (i.e., tests not included in the product release test panel)
Section 3.6 Process Characterization
Scale-up/Scale-down Approach – including evaluation/qualification of laboratory models
Section 3.6 Process Characterization

34
Deliverables
TR 60 Section
Manufacturing Technology (i.e., assessment of production equipment capability and compatibility
with process requirements) (may be covered in Stage 2a)
Section 3.9 Stage 1- Manufacturing and
Technology Considerations
Development Documentation (i.e., Process Design Report)
Section 3.7 Process Design Report
Process Validation Master Plan (PVMP)
Section 3.7 Process Design Report
Commercial-Scale Process Control Strategy, including:
•
Release specifications
•
In-process controls and limits
•
Process parameter set points and ranges
•
Routine monitoring requirements (including in-process sampling and testing, environmental
monitoring)
•
Storage and time limitations for intermediates, process solutions, and process steps
•
Raw material/component specifications
•
Design space (if applicable)
Section 3.5 Risk Assessment and Parameter
Criticality Designation

35

### 3.9 Stage 1 – Manufacturing and Technology Considerations

The capability of the production equipment and procedures has a significant influence on the ability to
maintain process parameters within preset limits. The measurement and control capability of the process
equipment is one of the subjects of Stage 2 and can be found in Section 4.1. Equipment qualification
exercises should confirm the suitability of equipment for its intended use.
Compatibility of the process streams (including production, cleaning, sterilization, etc.) with the equipment
and materials that they contact (e.g., polymeric membranes, elastomers, disposable bags, other plastic parts)
is necessary to ensure product safety and efficacy. Product contact materials, as well as extractables and
leachables, need to be evaluated for compatibility. This work should begin in Stage 1, may include studies
that require long lead times, and should be completed in conjunction with Stage 2.
Establishing, maintaining, and refining a control strategy is a lifecycle activity—from development to TT to
ongoing verification during the commercial manufacturing phase—and is supported by pharmaceutical
development, QRM, and a robust PQS (36). An effective PQS strengthens the links across the stages of a
product’s lifecycle and enables the development and continuous improvement of the control strategy (28).
In general, in developing a control strategy, manufacturers should consider unexpected and expected
variations. For manufacturing processes, this is even more critical, as there may be transient disturbances in
input material attributes, process conditions, or environmental factors over time during normal operation.
An effective control strategy for the operation should place special emphasis on mitigating the risk of these
potential disturbances to product quality (37-41). To maintain a process within a state of control during
operation, detect temporary process disturbances, and segregate the resulting nonconforming materials from
the system, manufacturers should increase the use of in-process control strategy elements including but not
limited to:
•
Input material control
•
Process monitoring and control
•
Variables being monitored at appropriate locations in the process, such as:
̶
Process parameters
̶
Input and in-process material attributes
̶
Final product attribute
•
Sampling plan, including:
̶
Sampling locations
̶
Sampling or measurement frequency
̶
Sample size to be taken and measured
̶
Statistical criteria appropriate for use to evaluate the process monitoring data
•
Type of analyses for process monitoring data, such as:
̶
Univariate analysis based on control limits
̶
Multivariate or process model
̶
Inter- and intra-batch trend analysis (e.g., moving averages and variance analysis)
̶
Supporting other control strategy elements (e.g., active process control, material diversion,
real time release testing (RTRT) batch release)

36
̶
Evaluating process and equipment performance as part of process development, during
manufacturing, and to facilitate CPV
̶
Ongoing monitoring of a process to confirm that it remains under a state of control
̶
Additional elements of the PQS
̶
Material diversion (e.g., removal of any unwanted material)
The following are examples of quality attributes and considerations for RTRT implementation:
•
Identity testing of finished products.
̶
Identity test should be capable of distinguishing between other products manufactured at
the manufacturing facility.
•
Measurement location should be representative of the finished tablet and minimize the potential for
segregation to occur (e.g., feed frame of the tablet compression step or uncoated tablet). The NIR
measurement of active concentration in the tablet should account for tablet weight in calculating the
total active concentration in a tablet. Refer to PDA Technical Report 60-2: Process Validation: A
Lifecycle Approach Annex 1: Oral Solid Dosage/Semisolid Dosage Forms for additional
information on solid dosage formulations.
•
PAT tool used for RTRT should be validated against the offline analytical method (e.g., High-
Performance Liquid Chromatography).
•
Model serving as a surrogate for the release test.
•
Specification, equipment, system integration, data processing and management.
Electronic data and data systems must comply with 21 CFR Part 11, EudraLex Volume 4 Good
Manufacturing Practice; Medicinal Products for Human and Veterinary Use, Annex 11: Computerised
Systems, and applicable sections of GMPs. Considerations applicable to electronic data may include (but are
not limited to) the following:
•
Accurate reproduction of the appropriate master production or control record
•
Documentation that each significant step was accomplished, including in-process results and the
identification of the person checking the significant step performed by the automated equipment
•
Network security, system integrity/functionality checks, single-user identification, and audit trails
•
Software version control, manufacturing batch record version control, and integrity of loaded
manufacturing process during start-up
•
Computing speed and capacity, local and remote memory, and communication assurance
•
Data archiving and recall
•
Software maintenance and change controls
The automated controls system is likely to be the primary source of batch records for batch-record review of
continuous processes. Data-reporting and review considerations generated by the automated controls
systems should include (but are not limited to):
•
Manufacturing batch record – Report with initial set-points, ranges, and model versions
•
Actions performed – Audit trail (including subsystems) reports, process-parameter and in-process
material-attribute control charts, material collection report (documenting the conditions achieved
when material was collected, diverted, or when collection commenced), and any reports from any
other process-specific performance metrics
•
Deviations – Alarm reports, periods of material diversion, and corrective actions reports
•
Materials – Reconciliation and material collected, segregated and diverted report, and actual and
theoretical percent yield

37

### 3.10 Applying Stage 1 Strategy to Address Existing Products

The manufacturing considerations at Stage 1 should be based on the lifecycle approach. The changes that
may arise as the product/process knowledge becomes available may only be relevant to specific parts of the
process rather than requiring reevaluation of an entire process. Therefore, the changes may be evaluated on a
case-by-case base to embed practicality of implementation of the lifecycle principles.
The application of the Stage 1 strategy for existing or legacy products can generally take the same general
approach as that for a new product, leveraging available prior knowledge and data. These considerations can
also apply to remediation programs or technology transfer.
The focus of developing a Stage 1 for existing or legacy products is to address quality issues. Since existing
or legacy products may not have been developed using a robust Stage 1 approach, they could be subject to
some quality issues during the lifecycle. These might stem from planned or unplanned changes that are
revealed both by internal quality testing or by external quality signals (technical complaints). This requires
the reevaluation of the manufacturing process to better understand the risks and criticalities.
Process-mapping, using a cause-and-effect matrix and the risk assessment for identifying CPPs and CMAs,
may be supported by the statistical analysis of historical data using bivariate (e.g., correlation coefficients of
process parameters with CQAs and performance attributes) and multivariate unsupervised or supervised
(e.g., principal component analysis, multivariate regression, partial least squares regression) statistical
methods.
An efficient experimental strategy for the process characterization studies may be built by selecting the
experimental designs to be applied for those studies in light of the prior knowledge of relationships existing
between the CQAs and the potential CPPs and CMAs (e.g., existence of significant main effects,
interactions, and/or curvatures in the relations).

### 3.11 Post-Approval Process Change Management

Established conditions are defined as legally binding chemistry, manufacturing, and controls (CMC),
information provided in the regulatory submission necessary to ensure process performance and product
quality. Examples of established conditions include DS and DP specifications, control of critical unit
operations and intermediates, and analytical procedures. Post-approval changes to the CMC established
conditions require an update to the submission based on regional regulatory requirements (28, 42).
The reporting category for CMC post-approval changes is commensurate with the potential risks associated
with the change, and are categorized as follows:
•
High-risk changes (e.g., termed “major” changes by the FDA and/or Type II major variation by EU,
depending on filing jurisdiction) will require prior approval by regulatory authorities before the
changes are implemented.
•
Moderate- risk changes (e.g., will require CBE30 changes being effected in 30 days by the FDA
and/or Type IB by the EU (termed “Tell and Wait”)), depending on filing jurisdiction.
•
Low-risk changes (e.g., could be CBE (changes being effective) by the FDA and/or Type IA
changes (“Do and Tell”) by the EMA)). In the case of FDA, minor changes will have minimal or no
impact on product quality and safety and may be submitted to regulatory authorities in an annual
report (4, 42-45).

38
Note: If post-approval changes need to be submitted to other health authorities, their relevant
country/regional requirements must be followed.
Post-approval CMC changes may be coordinated, managed, and reported to regulatory authorities using a
PACMP, also known as a comparability protocol. The PACMP is a written management plan that describes
the changes a firm would like to implement during the product lifecycle and the assessment of these changes
regarding their impact on product quality. The PACMP will include specific acceptance criteria that must be
met for the change to be implemented and a proposed reporting category for reporting data supporting the
change. The advantages of using a PACMP are that it allows for lower reporting categories and faster
review and implementation times for anticipated changes with robust test verification strategies (4, 46).
However, PACMP development requires foresight and robust planning to document and report the
anticipated product lifecycle changes and to design suitable tests, studies, and acceptance criteria to
demonstrate continued control over process performance and product quality per ICH Q12.

39
4.0 Performance Qualification (Stage 2)
Performance qualification (PQ) during Stage 2 demonstrates that the process, as designed, works as
intended and yields reproducible commercial product. It should be successfully completed before the release
of commercial product lots and consists of two elements:
•
Design and qualification of the facility, equipment, and utilities, which should be completed prior to
PQ
•
PPQ, which confirms the process design and demonstrates the ability of the process to manufacture
product that meets predetermined quality attributes

### 4.1 Strategies for System Design and Qualification

Facilities, equipment, utilities, and instruments (collectively referred to as systems) used in the
manufacturing process should be suitable and capable for their intended process use, and their performance
during the operation should be robust and reliable. Systems that affect product quality should be qualified to
reduce the equipment performance as a process variable. The review and qualification of these systems
should be performed according to a predefined project plan. System qualification should precede Stage 2
PPQ activities. Qualification studies should be completed, reviewed, and approved, with all deviations
addressed, prior to the start of PPQ studies.
Section 4.0 provides considerations for the preparation and performance of system qualification. More
information on approaches to planning and performing system qualification may be found in several sources
(27, 47-49). Figure 4.1-1 presents a typical sequence of activities that support the system qualification
effort.

40

*[Figure 4.1-1 Typical System Qualification Sequence]*

#### 4.1.1 Engineering and Design

Facility, equipment, and utilities should be designed to meet process requirements. All qualification and
validation activities should be planned, taking the lifecycle of facilities, equipment, utilities, process and
product into consideration. The design of the facility and commissioning of the equipment and utilities
should ensure the capability of operating as required for routine manufacturing. These activities and all
commissioning-related tasks should be conducted according to good engineering practices and recorded
according to good documentation practices, with oversight by the Quality Unit. A risk-based approach
should be used, as appropriate, to evaluate the risks to product quality and patient safety related to the
manufacturing system and the corresponding design solution to assure adequate controls and verification.
Specification and design activities should include a focus on those aspects that have been identified as being
critical to product quality and patient safety. System design should be based on process parameters, control
strategies, and performance requirements developed or identified during Stage 1. This information is
transferred to those designing the engineering requirements for facility and manufacturing systems. Design
qualification involves a review of the system design to assure that it is aligned with process control strategy

41
and performance requirements. Specifications for equipment, facilities, utilities, or systems should be
defined in User Requirements Specifications (URS) and/or a functional specification. The essential elements
of quality need to be built in at this stage, and GMP risks should be mitigated to an acceptable level. The
URS should be a point of reference throughout the validation lifecycle.
In situations where the process is being transferred to an operational facility with qualified equipment, a risk
assessment should be performed to identify any equipment control gaps (36). These can be addressed
through equipment modifications (which may require requalification) or through operational controls.
Applying a life-cycle model to these situations is best practice.
A risk-based and science-based approach to the specification, design, verification, and qualification ensure
that the manufacturing systems and equipment are fit for intended use (27).

##### 4.1.1.1 Risk Assessment

Risk assessments determine which systems and system components have an impact on the establishment
and maintenance of process parameters and conditions that affect product quality and patient safety. This
information helps develop system qualification plans, protocols, test functions, and acceptance criteria. The
process steps and systems that affect the product quality, mode of effects, and correlation between system
performance and the control of process variables should be studied and understood. For more information
on risk assessments, refer to Section 6.1.

#### 4.1.2 Installation

Upon completion of a setup, system testing and inspection should be used to verify that the systems have
been fabricated, constructed, and installed to engineering and process specifications. The information from
this verification should be accurate, reliable, and useful and may be leveraged or used to support
qualification testing.
The start-up and commissioning of systems should confirm that they are in good working order and operate
as designed. Engineering studies can provide confidence that the systems will perform under process
conditions and will keep performing regardless of seasonal variations. Adjustments to the systems to
achieve the specified level of performance and operation may be needed. Information on modifications or
adjustments should be documented and transferred to the team preparing the qualification plans and
protocols.

#### 4.1.3 Qualification Plan

The qualification plan may be developed once the process requirements and correlation to process systems
are understood. Early development of the qualification plans may provide valuable guidance to the design,
installation, and commissioning efforts. To capture changes that result from start-up and commissioning,
however, it may be prudent to complete the qualification plans and protocols after all the information from
the commissioning has been transferred. This approach also enables a better understanding of the type and
amount of information that can be leveraged from prequalification activities. This approach means that
Stage 2 activities may be underway during and prior to completion of all Stage 1 activities.

42

##### 4.1.3.1 Test Functions and Acceptance Criteria

System qualification tests or studies should be based on knowledge gained from previous activities,
including Stage 1 and engineering studies. Test functions should be based on good scientific and
engineering principles designed to demonstrate and assure that anticipated operating parameters will be met
throughout the manufacturing process in a consistent and predictable manner. Acceptance criteria should be
based on sound scientific rationale; the criteria should be useful, attainable, and where appropriate,
quantifiable.
If sufficient process understanding is not available, or the scale-up effect is unknown, existing knowledge
may be used during design and commissioning to define user requirements.
Formal system operating and maintenance procedures or instructions should be in place prior to the
execution of test functions. Operators and those conducting studies should be trained in the operation of the
systems and conduct of the tests. The training should be conducted under GMP conditions and documented
according to good documentation practices (GDPs). All measuring and test instruments should be calibrated
and traceable to appropriate standards.
When developing systems PQ studies, an effort should be made to design them as close to being
representative of the future process as possible. Formulated placebos that possess major or critical qualities
of the product being planned to run on the equipment could be used for this purpose. PQ studies conducted
with such materials may help in future process understanding without using actual product. Deviations in
the execution of qualification testing should be documented, investigated, and addressed. Conclusions
should be based on the suitability and capability of the system to meet the process requirements. When
necessary, systems may be modified, and studies may be repeated.

#### 4.1.4 Maintaining Systems in a State of Control

Qualification studies ensure that the manufacturing systems, as designed and operated, are in a state of
control throughout the lifecycle of products being manufactured. For the process to remain valid and
controlled, the systems must be maintained to operate within the parameters established during qualification.
Periodic assessment and evaluation of the system to determine its control status is important. The
assessment should include a review of information that indicates or supports assurance of control. This
information may include, but is not limited to, such items as:
•
Calibration records
•
Preventive and corrective maintenance
records
•
Equipment logs
•
Critical process alarms
•
Equipment (filters, compressed gasses,
water) testing data
•
Training records
•
Standard operating procedures
•
Utilities standards
•
URS repositories
•
Change requests
•
Work orders
•
Monitoring results and trends
•
Nonconformance reports and deviations
and their trending
•
Failure investigations and their trending
•
Periodic requalification assessments and
studies

43
Periodic assessment of systems may lead to additional qualification-related activities or testing. In addition
to periodic assessments, event-driven assessments and requalifications may arise from process-related
changes, out-of-specification (OOS) results and trends, and investigations. The system assessments and the
events that trigger event-driven assessments should be recorded in a formal procedure that also addresses the
mechanism for deciding when requalification is warranted, the criteria for doing so, and those responsible
for it. It is recommended that subject matter experts and the Quality Unit should also be involved in these
decisions. Maintenance trending should be benchmarked and periodically reviewed at a quality council
forum to assess a state of qualification at the facility that helps in determining PPQ readiness from an
equipment, utilities, and facilities perspective. In case of an emergency, such as sudden novel disease
outbreaks arising, submitting the proof of the manufacturing equipment qualification, as well as a list of
critical equipment for a products’ manufacturing, is especially important (27).

### 4.2 Performance Qualification

Performance qualification (PQ) must be performed at the end of the operational qualification (OQ) or in
conjunction with the OQ or the PPQ. The following statements from EU GMP Annex 15 contains an
accurate definition that PQ should include, but is not limited to, the following (50):
•
Testing using production materials, qualified substitutes or simulated product proven to have
equivalent behavior under normal operating conditions with worst-case batch sizes. The frequency
of sampling used to confirm process control should be justified.
•
Testing should cover the operating range of the intended process, unless documented evidence from
the development phases confirming the operational ranges is available.
For parenteral products, the type of PQs to be performed can vary substantially and are designed to verify
the ability to:
•
Clean components and equipment parts
•
Sterilize loads using steam or EtO (ethylene oxide), for example, and decontaminate via vapor
phase hydrogen peroxide (VPHP) or other sterilants
•
Depyrogenate containers
•
Fill a placebo and fill media-filled units (APS)
•
Inspect placebo units
•
Ensure an environment meets microbiological and total-particle requirements
•
Perform clean-air projector use and unidirectional flows to protect from a possible contamination
(air-flow pattern tests)
Usually, during the PQ, possible risks can be identified more precisely before going into the PPQ, because it
is the first time that equipment, facility, components, and process come together. The fact that PQ is a partial
simulation cannot rule out the possibility that some unexpected surprise could come up during the PPQ.
There is another potential activity, called Line PQ, that should be considered. Depending on the complexity
of the system, there might be instances where the overall PQ of the system needs to be assessed following
the successful PQ of specific components of the system. Therefore, the Line PQ is targeted to prove that a
combination of individually qualified systems can interact successfully, yielding satisfactory performance.
The Line PQ is focused on verifying the functionality of the system in its entirety with regard to real
working conditions, including the use of manufacturing instructions. This can also test the full functionality

44
and integration between the instructions, the process automation, and the equipment. If a product trial or
APS is performed, the final report from these studies can fulfill the requirement of the Line PQ.
For this reason, it is also prudent to manufacture demonstration lots or engineering lots. These manufacture
demonstration lots or engineering lots reflect the proposed process to be qualified, and may be manufactured
with rejected DS or with non-commercial DS, such as material from engineering runs.

### 4.3 Process Performance Qualification

PPQ marks the transition from development and clinical manufacturing to routine commercial production.
The PPQ combines the actual facility, utilities, equipment (each now qualified), and trained personnel with
the commercial manufacturing process, control procedures, and components to produce commercial
batches. PPQ confirms the process design and the success of the process control strategy to produce batches
at the commercial manufacturing scale, as expected. PPQ provides confidence that the systems of
monitoring, control, and procedures in routine manufacturing are capable of detecting and compensating for
potential sources of process variability over the product lifecycle.
The number of successful batches executed during the PPQ study should not be viewed as the primary
objective of a PPQ campaign. While successful runs of commercial-scale batches can indicate overall
operational proficiency and sound process design, these batches should also be viewed as a means to collect
the data needed to demonstrate that the process control strategy is effective. The type and amount of data
should be based on the understanding of the process, the impact of process variables on product quality, and
the process control strategy developed during Stage 1. Prior knowledge should be used as well. For instance,
in the cases of emergencies when the accelerated development and validation of products are desired, the
data to support the formulation may differ depending on the platform but, at a minimum, should include the
critical aspects of product characterization, a potency assay, and the data on stability generated, as well as
the qualification state of the manufacturing equipment being used (27). The number of batches needed to
acquire this information and data may be mainly based on a statistically sound sampling plan that supports
the desired confidence level. It may also be influenced by the approach selected to demonstrate that the
within-batch and batch-to-batch variabilities of CQAs are acceptable.
The entirety of Section 4.3 discusses design strategy for the PPQ, recommended content for the protocol
and report, and transition to Stage 3 of the PV lifecycle.

#### 4.3.1 Process Performance Qualification Readiness

The transition from Stage 1 to Stage 2 of the PV lifecycle may not be strictly sequential. Completion of
some Stage 1 activities may overlap with those from Stage 2 and may include parallel studies, such as
mixing and/or hold studies. Likewise, some preparative Stage 2 activities will be initiated in parallel with
those from later Stage 1 activities. Components of Stage 2 PPQ readiness activities (refer to Section 3.1)
include, among others:
•
Drafting PV master plan
•
Drafting project plan
•
Qualifying facilities, utilities, and equipment
•
Completing successfully the required PQ studies, including APS
•
Training personnel
•
Drafting the initial CPV plan

45
Although the initiation of PPQ activities is not contingent upon completion of all Stage 1 activities, a
readiness assessment should be conducted to determine the timing of sufficient information and completion
of activities to support moving forward with PPQ batch manufacture. The readiness assessment should
include deliverables from Stage 1, as outlined starting from Section 3.1, and other elements as required:
•
Quality Target Product Profile (QTPP): Initiated at the start of Stage 1, it should be updated to
reflect the knowledge obtained from Stage 1 prior to initiating PPQ (17).
•
Critical Quality Attributes (CQAs) with Criticality Assessment: CQAs are identified early in
Stage 1. They are confirmed to account for additional analytical characterization, clinical and/or
nonclinical data, and information gathered during Stage 1. CPPs that impact CQAs are reviewed
and updated based on detectability and occurrence (17, 27).
•
Material Attributes with Criticality Assessment: Material attributes are identified early in
Stage 1. They are confirmed to account for additional analytical characterization, clinical and/or
nonclinical data, and information gathered during Stage 1. CPPs that impact material quality
attributes are reviewed and updated based on detectability and occurrence (17, 27).
•
Commercial Manufacturing Process Description: This is started in Stage 1 and updated to
reflect the finalized commercial process supported by Stage 1 studies and data. These include
elements outlined in Section 3.4 and any changes resulting from the qualification of the facilities,
utilities, and equipment as outlined in Section 4.1.
•
Analytical Methods: Appropriately validated or suitably qualified methods should be identified.
Methods for product release and stability should be fully validated according to ICH requirements
prior to initiating PPQ batch testing. Any additional tests beyond normal release testing used to
support PPQ should be identified and suitably qualified/validated prior to being used to test PPQ
batches (33, 34, 51). The justification of the status for use in the PPQ studies (qualified and/or
validated) should be fully documented for each analytical method.
•
Approved Commercial Batch Production and Control Records: Changes may be made to
batch records during Stage 1 to enhance, clarify, or optimize manufacturing instructions and/or
reflect knowledge gained during process characterization. Master batch records reflecting the final
commercial process to be studied in PPQ should be approved prior to PPQ batch execution.
•
Process Design and Development Report: This report (refer to Section 3.7) is documentation
for the process design and development justifications, which includes risk-ranking of parameters
and ranges for the process that will undergo PPQ study. This information should be finalized prior
to the PPQ study design since it provides the scientific support to justify the PPQ acceptance
criteria.
•
PPQ Risk Assessment Report Prior to Stage 2: This report documents risk assessment
exercise(s) based on the knowledge summarized in the Process Design and Development Report.
This activity summarizes decisions regarding the type and extent of process controls of the process
being qualified. These risk management events should be conducted by an interdisciplinary team
that includes experts from a variety of disciplines (e.g., process engineering, industrial pharmacy,
analytical chemistry, microbiology, statistics, manufacturing, and quality assurance).
•
Process Validation Master Plan (PVMP): Drafting of the PVMP should begin in Stage 1 and
should be finalized prior to initiation of the PPQ study. Elements of the PVMP are outlined in
Section 3.8.
•
Quality System and Training: Qualified and trained personnel are essential to PPQ studies.
Detailed, documented training specific to the PPQ is required for functional groups directly
involved in the execution of each study. To minimize the risk of human error, personnel should
understand their role in protocol execution. Quality Unit approval of PPQ activities should be
completed prior to initiation of every PPQ study, and all PPQ studies should be conducted within
the quality system.

46
•
Approved Protocols for PPQ Studies: Protocols for each study should be approved, including
Quality Unit approval, and finalized prior to initiation of PPQ studies. Refer to Section 4.4 for the
design and content of PPQ protocols.

### 4.4 Design Strategy for Process Performance Qualification

Design Strategy for PPQ refers to a systematic approach used in the pharmaceutical and biopharmaceutical
industries to ensure that a manufacturing process is capable of consistently producing products that meet
predefined specifications and quality attributes. The strategy focuses on validating the manufacturing
process through testing and gathering data under normal operating conditions. This strategy should be
internally evaluated by a multi-department team, including quality assurance and regulatory affairs
personnel.

#### 4.4.1 Use of Prior Knowledge and Stage 1 Data to Support Process Performance

Qualification
In a lifecycle approach to PV, sources of data and information outside of the PPQ batches may be used to
support a high degree of confidence in an ongoing state of process control. Prior knowledge is that which
has been gained from similar products and processes. It may come from experience with a portfolio of
similar molecules, where platform manufacturing strategies have been developed using existing facilities
and equipment (e.g., platform manufacturing processes for monoclonal antibodies) or from similar process
and unit operations. Leveraging the data from similar products and processes may provide an additional
level of confidence in the process control of a product and process that uses a similar control strategy and
unit operations. However, the situation could change in the case of molecule-specific sensitivity (e.g.,
sensitivity to gamma-irradiated critical consumables or VPHP) resulting in the need to apply changes to the
platform manufacturing strategies (e.g., switching from gamma-sterilized to steam-sterilized consumables)
and to consider additional aspects of the control strategy.
By contrast, likely first-in-class molecules and/or products manufactured in new facilities or with new
equipment will probably require increased emphasis on data-gathering in Stage 1 to support PPQ readiness.
To gather sufficient data to demonstrate an acceptable level of confidence in the commercial manufacturing
process when little prior knowledge or Stage 1 data are available, the scope and extent of PPQ may need to
be increased. This increased scope can both be translated in the need to run demo or engineering lots prior to
official PPQ lots and/or by increasing the number of PPQ lots. Demo lots or engineering lots may be
manufactured to gain knowledge into the process while also exploring operational ranges for CPPs.
Successful demo or engineering lots can be used as a gateway to proceed into PPQ. In addition, successful
completion of demo or engineering lots could be used to justify the number of lots needed for PPQ.
The rationale and scientific justification for the use of existing data (prior knowledge) to support Stage 2
should be documented in the PV master plan. All prior knowledge and Stage 1 data used to support PPQ
must be retrievable, traceable, verified, and generated using good scientific practices.
Where there is greater prior knowledge or process design for a new product or process, that knowledge and
data is used in a scientific, statistical, and risk-based manner to determine the appropriate size of PPQ
studies. Limited prior knowledge will require proportionally more Stage 1 and/or PPQ knowledge.

47
Some examples of cases where prior knowledge may be useful for PPQ include:
•
Setting acceptance criteria in PPQ studies, for example, bioburden and endotoxin in-process
acceptance criteria, in cases where facility history and limits for other processes can be applied to
similar processes that employ the same facility and equipment. (Assumes the limits for the previous
product are appropriate for the quality of the new product.)
•
Using data from other product PPQ supportive studies, for example, in platform purification
operations where the same or similar buffer formulations will be used in the same vessels, buffer
hold-studies already performed for a different product can be used to support the PPQ for buffers
used for the new product (52).

Note: For more information regarding solid and semi-solid dosage forms, refer to TR 60-2 (53).

##### 4.4.1.1 Use of Stage 1 Data for Process Performance Qualification

Processes and products for which there is little or no prior knowledge may require a greater emphasis on
Stage 1 and PPQ activities to demonstrate an acceptable level of confidence in the process control strategy.
Data from Stage 1 process characterization studies and clinical manufacturing are generally used to support
the establishment of the control strategy for new products (refer to Section 3.0). Stage 1 data may be used to
support PPQ if sufficient scientific evidence for its use is available. At a minimum, the studies claimed to
support PPQ should represent the commercial-manufacturing scale (e.g., be scale-independent) or derived
from qualified small-scale model(s) proven to represent the full-scale process. In some cases, data from
clinical-manufacturing batches may be used in conjunction with data gathered during PPQ to increase the
amount of data that can be used to achieve an acceptable level of confidence in the process. For example,
the use of Stage 1 data to support the PPQ might include (1, 50):
•
In some cases, Stage 1 data that supports PPQ may be supported by adding stricter testing for a
defined number of batches to confirm the results obtained in the Stage 1 studies and the PPQ
batches. For example, small-scale column lifetime studies may be used to support column reuse
limits. These are then confirmed with a heightened level of impurity-monitoring until the reuse
period has been reached at full scale.

#### 4.4.2 Process Performance Qualification Study Design

PPQ is a means to demonstrate that all critical and other process parameters of unit operations are under the
appropriate degree of control, and that all important variables and elements of the unit operation have been
considered, that is, facility, utilities, equipment, personnel, process, control procedures, and components
(refer to Figure 4.4.2-1).

*[Figure 4.4.2-1 Stage 2 Activities]*

Typically, a PPQ Master Plan would be developed as required, based on the complexity of the PPQ study.
The plan would include the summary of the design of the study as well as previous knowledge that aided in
implementation of the study. The PPQ Master Plan should serve as a bridge between the QTPP and the
QRM and PPQ protocols (refer to Table 3.8-1). In other words, starting with QTPP, you would perform

48
your risk assessment and, based on that, determine the PPQ study design, which would result in a PPQ plan.
Based on the complexity of the PPQ study, the information that would typically comprise the PPQ plan
could reside in the PPQ protocol.
It should be noted that the complexity and effort of the PPQ master plan should be commensurate with the
complexity and criticality of the PPQ studies.
Typical aspects covered by the PPQ plan are:
•
Process flow, including possible variations
•
Number of batches and rationale
•
Operating conditions
•
Variability in the reagents, excipients, and
primary containers
•
Individual unit operations validation
•
Justification behind selection of
bracketing, matrixing, and/or family
approach
•
Sampling plans and justification
•
Stability studies, including comparison
with development or tech-transfer product
•
Combination-product assembly and
packaging requirements
•
Shipping requirements
•
Statistical analysis and evaluation
requirements
•
Environmental monitoring
During PPQ, CPPs and CQAs are monitored along with process performance parameters. Their evaluation
is useful in demonstrating consistency and can enhance confidence in the overall process control strategy
when included in the PPQ. All parameters and attributes intended for ongoing CPV in Stage 3 should be
included in the PPQ.
Prior to entering commercial PPQ batches, it would be advisable to run demo, engineering, or trial batches.
This would be representative of the initial PPQ batches and would constitute a general trial for the
commercial facility and proposed commercial process. It is also possible to leverage these engineering
batches to confirm the PARs for given parameters, thus confirming the robustness of the process.

##### 4.4.2.1 Risk-Based Process Performance Qualification Sample-Size Justification

QRM or risk-based approaches are used to assist in demonstrating control and capability throughout the PV
lifecycle activities. Risk-based rationales are used to justify the number of batches manufactured and the
number of samples taken during PPQ. It should be noted that there is no set number of expected batches
prescribed in regulatory expectations or industry standard practice because the number of batches will be
unique to a given product and process based upon the variability. The rationales assure sufficient data is
available for the evaluation to demonstrate, with a high level of assurance, a process is capable of
consistently delivering quality product, allowing the normal range of variation and trends to be established
and providing sufficient data for evaluation. The evaluation of data should include objective measures (e.g.,
statistical metrics), wherever feasible and meaningful, to achieve adequate assurance.
Additionally, FDA’s GMP regulations regarding sampling set forth a number of requirements for validation:
•
Samples must represent the batch under analysis (54)
•
Sampling plan must result in statistical confidence (55)
•
Batch(es) must meet its predetermined specifications (55)

49
Finally, the number of samples should:
•
Be adequate to provide sufficient statistical confidence of quality both within a batch and between
batches
•
Have risk-based statistical testing levels tied to the relative criticality of the particular attribute
under examination
•
Allow the normal range of variation and trends to be established
•
Provide sufficient data for evaluation
Sampling during this stage should be more extensive than is typical during routine production; this can be
called an enhanced sampling plan. The plan has risk-based components, uses general prior knowledge, and
allows for statistically based confidence statements regarding the firm’s understanding of within- and
between-batch variability.
There are three basic components or tools commonly used to demonstrate statistical confidence and
understanding of variation for enhanced sampling plans both within a batch and between batches for
aseptically filled products. The basic components included in the PPQ data analysis of each attribute are
(refer to Section 6.2):
•
Individual Value Plots: General or basic analysis and graphing, preferably using individual value
plots; visually describes inter- and intra-batch variation.
•
Tolerance Intervals: Tolerance interval is one of the most commonly used tools applied during
PV; it provides a method to measure the control and capability of product attributes. The tolerance
interval level being tested ties back to the relative criticality of the product attributes and compares
the variation seen for each product attribute (by batch) to the product specification. This comparison
is an objective measure that allows for a capability statement to be provided as part of PV for each
attribute tested.
•
Variance Components: In the case of an aseptically filled DP, variance components describe the
percentage of variance that can be attributed to within-batch or batch-to-batch variability meeting
guidance requirements.
Enhanced sampling plans for aseptically filled products (e.g., vaccines, biologics, small-molecule
parenterals) take samples that align with three time periods: beginning, middle, and end positions (B/M/E).
The minimum number of reportable value samples taken per timepoint should be n = 2 (6 total–2B/2M/2E),
to allow for variance component calculations. Replicates at each point are needed for the analysis to be
performed. This may increase (typically up to n = 5, or 15 total–5B/5M/5E), depending on the relative
criticality of the attribute and its variability estimate. Examples are presented in Table 4.4.2.1-1, Table
4.4.2.1-2, and Figure 4.4.2.1-1.

**Table 4.4.2.1-1 Sampling Requirement**

Critical Quality Attribute
(CQA)
Severity of Potential Harms
(Effects)
Statistical Sampling
Requirements
Potency
High
+++
Osmolality
Medium
++
pH
Low
+

50

**Table 4.4.2.1-2 Confidence**

Critical Quality Attribute
(CQA)
Severity of Potential Harms
(Effects)
Example Confidence and
Proportion Requirements
Potency
High
95/99
Osmolality
Medium
95/95
pH
Low
95/90

*[Figure 4.4.2.1-1 Sampling]*

##### 4.4.2.1.1 Sample-Size Selection Considerations

Generally, enhanced sample-size selection is based on a combination of prior knowledge and the relative
criticality of the attributes. Prior knowledge may come from legacy PPQ batches or pre-PPQ batches (e.g.,
engineering, clinical), while the relative criticality of the attribute is derived during Stage 1 CQA
determination. The approach uses the same analysis tool that will be applied during the PPQ analysis, the
tolerance interval. Normal tolerance intervals are constructed and compared to the release-acceptance

51
criteria for each evaluated attribute to provide confidence that all current and future measurements will fall
within a percentage of the required coverage (based on criticality).
The enhanced plan has risk-based components, uses general prior knowledge, and allows for statistically
based confidence statements regarding the firm’s understanding of within- and between-batch variability.
Occasionally, due to a number of considerations, such as in a pandemic response, prior knowledge is not
available to construct these intervals. As such, each attribute selected for enhanced sampling can be sampled
at the minimum, that is, n = 6 (2 each for B/M/E), at a calculated, uniform 95/95 confidence level and
coverage. The minimum n = 6 sample size is appropriate as it will allow statements of confidence and of
inter- and intra-batch variability using variance components for each attribute within the enhanced sampling
plan.

##### 4.4.2.1.2 Sample Size Methods

The tolerance interval method for selection of samples for PPQ requires a few pieces of Stage 1 information
for its use:
•
Criticality level of the CQA being evaluated
•
Stage 1 development data to get point estimates and confidence intervals for average and standard
deviation of the CQA being evaluated
̶
Development data can come from clinical runs, characterization, or engineering runs
̶
Stage 1 is not limited to new products; it can be an historical evaluation of commercial
batches as part of a TT (36)
•
Procedure or work instruction to tie CQA criticality to a risk level
Table 4.4.2.1.2-1 lists some examples of product attributes, but please note it is not an exhaustive listing.

52

**Table 4.4.2.1.2-1 Example Sample Plan**

Product Attribute
Minimum Enhanced Process Performance
Qualification (PPQ) Samples per Batch (n)
Container Closure Integrity (CCI)
n = 12 (USP <671>)
pH
n = 3 for B/M/E
9 total results
Osmolality
n = 3 for B/M/E
9 total results
Total protein
n = 3 for B/M/E
9 total results
High performance size exclusion
chromatography (HPSEC)
n = 3 for B/M/E
9 total results
Reducing capillary gel electrophoresis
n = 3 for B/M/E
9 total results
Nonreducing capillary gel
electrophoresis
n = 3 for B/M/E
9 total results
Bioassay
n = 1 for release
Subvisible particles
≥10 µm: ≤6000
≥25 µm: ≤600
n = 3 for B/M/E
9 total results (each)

##### 4.4.2.1.3 Drug Product Process Performance Qualification Analysis of Enhanced Samples

If possible, the drug-product enhanced sample analysis should be structured in the PPQ in the following
manner:
•
Summary table for all attributes provides summary statistics as well the tolerance intervals and
variance components, as appropriate, per batch.
•
Summary analysis for each attribute, including:
̶
Graphical analysis using individual value plots per attribute. All batches should be plotted
on the graph for maximum effect. Reference lines denoting specification limits should be
used to show the data in context.
̶
Tolerance interval charts per attribute per batch.
̶
Variance component analysis table per batch.
̶
Summary statement per attribute regarding achieved-control and capability-based upon the
analysis presented.

53
There are cases when analysis cannot be executed, for instance when:
•
Values are below a limit of detection, which means there are no values to report, in which case,
neither graphical nor statistical analysis can be performed.
•
There are not enough unique values to perform the analysis either due to the rounding of the data,
precision of the method, or very little variation in the process. This can be minimized by requesting
raw analytical data (full recorded values) rather than reported data (which may be truncated). In the
case of not-enough unique values, graphical analysis can be performed, but the tolerance interval
and variance component cannot. Graphical analysis in this situation can still provide powerful
visual support for control and capability within and between batches.
The samples must be tested and analyzed using statistical tools and graphing, as appropriate, to provide
sufficient statistical confidence of quality within and between batches as well as evidence the product and
process are ready for commercial manufacturing. Minimum acceptance requires that the test results are
within release specification based on the release criteria.
An effective PPQ should evaluate a sound process design, an effective control strategy, and operational
proficiency at commercial scale (56). The number of batches in the PPQ study(ies) will be influenced by
many factors such as the:
•
Study(ies) performance and acceptance criteria
•
Analyses to be performed and the type and amount of data necessary to perform those analyses
•
Level of process knowledge and understanding gained from Stage 1, as well as from the
engineering runs in the commercial facility
•
Type and complexity of manufacturing technology employed in the various unit operations
•
Knowledge from previous experience with similar well-controlled processes
•
Inherent or known variability of the process resulting from raw materials, age of the equipment, or
operator experience
Using risk-based approaches allows a balance between the number of batches studied and the risk of the
process. They can also be used in conjunction with objective approaches to determine the number of batches
to include.
Where practical, statistical methods are recommended to guide the determination of the number of PPQ
batches needed to achieve a desired level of statistical confidence (refer to Section 6.1.1 and Section 8.0).
However, this approach alone may not always be feasible or meaningful. One such example is PPQ studies
of a protein DS process with a limited number of clinical batches. This limited output could be due to such
factors as manufacturing scale or product indications (e.g., orphan drug) where infrequent future
manufacturing campaigns are to be performed. In addition to limitations on manufacturing batch production,
the nature of protein drug-substance manufacturing makes increased number of samples of the process
streams of limited usefulness to achieve a statistically significant sample size.

54
When it is not feasible or meaningful to use conventional statistical approaches, a practical, scientifically
based, holistic approach may be more appropriate. In this case, the following factors may be used to support
the rationale for the number of PPQ batches selected based on knowledge accumulation:
•
Prior knowledge (e.g., development/clinical batches) and platform manufacturing information or
data
•
Risk analysis of the process to factor the level of risk into the batch number selection
•
Increased reliance on Stage 1 data to support that the process is under control and to add to the
dataset
•
Continuation of heightened sampling or testing plans during CPV until a sufficient dataset to
achieve statistical confidence has been accumulated
•
For very expensive products, understanding of the probability of product approval for release-to-
market versus the demonstrated shelf life (i.e., a late approval could mean wasting PPQ lots)
When a combination of approaches and data are used, the rationale and justification should be clearly
documented in the PVMP. Also, references to all supporting source data should be included.

##### 4.4.2.2 Risk-Based Justification for Number of Process Performance Qualification

Batches
The risk-based assessment method for the selection of an acceptable number of PPQ batches is based upon
process, product, business needs and site knowledge. As knowledge increases, the potential starting point
for the number of batches decreases.
The approach described here makes use of a decision-tree or checklist approach. These approaches employ
Yes or No questions to guide the decision-making process, which reduces the approach/assessment
subjectivity bias. A risk-evaluation table is used to guide the determination (refer to Table 4.4.2.2-1).
There are three basic steps to the selection process:
Step 1: Determine the baseline number of batches using product and process knowledge.
•
The level of product and process knowledge are used to determine the minimum number of batches
(or baseline) that need to be produced during PPQ.
•
Answers to the questions provide guidance on one of three risk-based evaluation starting points for
N batches. As product and process knowledge increases, the potential starting point for the selection
of the number of batches decreases.
Step 2: Determine if any additional controls, activities, or technical rationales are required.
•
This step helps to confirm the selection of the number of batches from Step 1 and determines
specific site-level knowledge.
•
Risk control activities determine if additional studies or batches need to be performed/executed.
Step 3: Determine if there are any non-GMP-related risks, such as business, technical, or strategic
justifications, for the addition or reduction of batches.
•
This is a non-quality risk-based step.
•
After Step 3, the number of batches, N, is provisionally set.

55

**Table 4.4.2.2-1 Generic Risk Evaluation Table**

Knowledge
Risk
Example
Low Level of
Knowledge
High Risk
Consider additional development or
preparation activities. Leadership
approval to start PPQ with risks
detailed prior to proceeding to PPQ.
•
New formulation/equipment
•
Technology transfer of poorly
known platform technology
Typical / Average
Level of
Knowledge
Moderate Risk
PPQ: N = Baseline
Note: Justification for Baseline
required. See Section 4.4.2.2.2.
•
Existing
formulation/equipment
•
Technology transfer of
moderately known platform
technology
High / Very High
Level of
Knowledge
Low Risk
PPQ: N ≤ Baseline
•
Technology transfer of known
platform technology

##### 4.4.2.2.1 Justification of Baseline

Risk-based approaches and application of QRM to the PV lifecycle are noted in health authority
guidance(s), including those of the FDA and EU.
The determination of the number of batches should be based upon risk-based principles as well as product
and process knowledge. The more knowledge one possesses (with proof), the relative risk to move into
commercial production is reduced, and the number of batches required within a PPQ campaign may be
lessened.
While all the guidances state that a risk-based approach must be used, EU GMP Annex 15 provides
additional support for the use of N = 3 as a starting point for the evaluation table used in this approach.
•
The number of batches manufactured and the number of samples taken should be based on QRM
principles, should allow the normal range of variation and trends to be established, and should
provide sufficient data for evaluation within the PPQ report.
•
It is generally considered acceptable that a minimum of three consecutive batches manufactured
under routine conditions could constitute a validation of the process.
•
An alternative number of batches may be justified, taking into account whether standard methods of
manufacture are used and whether similar products or processes are already used at the site (50).

##### 4.4.2.2.2 High-Level Approach

The approach provided in Figure 4.4.2.2.2-1 is an example of a high-level view of what can be a very
detailed decision tree and multipage risk-based checklist (refer to Table 4.4.2.2.2-1).

56

*[Figure 4.4.2.2.2-1 Decision Tree for Determination of Number of Process Performance Qualification Lot]*

57

##### 4.4.2.3 Process Performance Qualification at Normal Operating Conditions

PPQ studies are typically conducted in a manner that demonstrates a state of control under normal operating
conditions to assess the process variability expected during routine production. Process characterization
(robustness) studies conducted during Stage 1 serve as the foundation for establishing NOR, PAR, and
design space, if appropriate. Effects-of-scale should also be considered if scaled-down models are suitably
qualified, well-planned, and executed. Study data on robustness should support conducting commercial-
scale PPQ under routine manufacturing conditions. Supplemental engineering studies at scale may be
appropriate to evaluate extremes of the NOR (e.g., line speed or compression speed). In most cases,
available Stage 1 data makes it unnecessary to execute PPQ over the entire operating range during the
commercial manufacturing process. The PVMP should provide the justification for the approach used and
reference all source data.

##### 4.4.2.4 Process Performance Qualification Using Individual Operation Studies

The PPQ of a manufacturing process can be achieved by performing PPQ studies on each individual unit
operation (or related groups of operations). This approach calls for the writing of individual protocols that
outline the studies to be conducted on each unit operation to achieve PPQ for the entire process. Protocols
should define the testing performed and acceptance criteria for the output of the unit operation
(intermediate) as prescribed by GMP. They may also require that the final DS or DP meets all specifications
and predefined acceptance criteria.

##### 4.4.2.5 Process Performance Qualification Using Bracketing, Matrix, and Family

Approaches
Many operations involve similar or identical process operations or equipment. In these cases, designs where
grouping is used may be considered (57). Some process variables that might be amenable to approaches
using bracketing, matrix, or family grouping PPQ include:
•
Batch sizes
•
DP dosage strength
•
Identical equipment
•
Different size vessels, tanks, or similar configurations of the same design and operating principle or
in-kind equipment
•
Various vial sizes and/or fill volumes of the same DP (e.g., smallest and largest vial size)
•
Filling line speeds (e.g., fastest and slowest line speed)
•
Product packaging (e.g., bottle heights or dosage counts)
•
Transport validation for biological products

41
and performance requirements. Specifications for equipment, facilities, utilities, or systems should be
defined in User Requirements Specifications (URS) and/or a functional specification. The essential elements
of quality need to be built in at this stage, and GMP risks should be mitigated to an acceptable level. The
URS should be a point of reference throughout the validation lifecycle.
In situations where the process is being transferred to an operational facility with qualified equipment, a risk
assessment should be performed to identify any equipment control gaps (36). These can be addressed
through equipment modifications (which may require requalification) or through operational controls.
Applying a life-cycle model to these situations is best practice.
A risk-based and science-based approach to the specification, design, verification, and qualification ensure
that the manufacturing systems and equipment are fit for intended use (27).

##### 4.1.1.1 Risk Assessment

Risk assessments determine which systems and system components have an impact on the establishment
and maintenance of process parameters and conditions that affect product quality and patient safety. This
information helps develop system qualification plans, protocols, test functions, and acceptance criteria. The
process steps and systems that affect the product quality, mode of effects, and correlation between system
performance and the control of process variables should be studied and understood. For more information
on risk assessments, refer to Section 6.1.

#### 4.1.2 Installation

Upon completion of a setup, system testing and inspection should be used to verify that the systems have
been fabricated, constructed, and installed to engineering and process specifications. The information from
this verification should be accurate, reliable, and useful and may be leveraged or used to support
qualification testing.
The start-up and commissioning of systems should confirm that they are in good working order and operate
as designed. Engineering studies can provide confidence that the systems will perform under process
conditions and will keep performing regardless of seasonal variations. Adjustments to the systems to
achieve the specified level of performance and operation may be needed. Information on modifications or
adjustments should be documented and transferred to the team preparing the qualification plans and
protocols.

#### 4.1.3 Qualification Plan

The qualification plan may be developed once the process requirements and correlation to process systems
are understood. Early development of the qualification plans may provide valuable guidance to the design,
installation, and commissioning efforts. To capture changes that result from start-up and commissioning,
however, it may be prudent to complete the qualification plans and protocols after all the information from
the commissioning has been transferred. This approach also enables a better understanding of the type and
amount of information that can be leveraged from prequalification activities. This approach means that
Stage 2 activities may be underway during and prior to completion of all Stage 1 activities.

42

##### 4.1.3.1 Test Functions and Acceptance Criteria

System qualification tests or studies should be based on knowledge gained from previous activities,
including Stage 1 and engineering studies. Test functions should be based on good scientific and
engineering principles designed to demonstrate and assure that anticipated operating parameters will be met
throughout the manufacturing process in a consistent and predictable manner. Acceptance criteria should be
based on sound scientific rationale; the criteria should be useful, attainable, and where appropriate,
quantifiable.
If sufficient process understanding is not available, or the scale-up effect is unknown, existing knowledge
may be used during design and commissioning to define user requirements.
Formal system operating and maintenance procedures or instructions should be in place prior to the
execution of test functions. Operators and those conducting studies should be trained in the operation of the
systems and conduct of the tests. The training should be conducted under GMP conditions and documented
according to good documentation practices (GDPs). All measuring and test instruments should be calibrated
and traceable to appropriate standards.
When developing systems PQ studies, an effort should be made to design them as close to being
representative of the future process as possible. Formulated placebos that possess major or critical qualities
of the product being planned to run on the equipment could be used for this purpose. PQ studies conducted
with such materials may help in future process understanding without using actual product. Deviations in
the execution of qualification testing should be documented, investigated, and addressed. Conclusions
should be based on the suitability and capability of the system to meet the process requirements. When
necessary, systems may be modified, and studies may be repeated.

#### 4.1.4 Maintaining Systems in a State of Control

Qualification studies ensure that the manufacturing systems, as designed and operated, are in a state of
control throughout the lifecycle of products being manufactured. For the process to remain valid and
controlled, the systems must be maintained to operate within the parameters established during qualification.
Periodic assessment and evaluation of the system to determine its control status is important. The
assessment should include a review of information that indicates or supports assurance of control. This
information may include, but is not limited to, such items as:
•
Calibration records
•
Preventive and corrective maintenance
records
•
Equipment logs
•
Critical process alarms
•
Equipment (filters, compressed gasses,
water) testing data
•
Training records
•
Standard operating procedures
•
Utilities standards
•
URS repositories
•
Change requests
•
Work orders
•
Monitoring results and trends
•
Nonconformance reports and deviations
and their trending
•
Failure investigations and their trending
•
Periodic requalification assessments and
studies

43
Periodic assessment of systems may lead to additional qualification-related activities or testing. In addition
to periodic assessments, event-driven assessments and requalifications may arise from process-related
changes, out-of-specification (OOS) results and trends, and investigations. The system assessments and the
events that trigger event-driven assessments should be recorded in a formal procedure that also addresses the
mechanism for deciding when requalification is warranted, the criteria for doing so, and those responsible
for it. It is recommended that subject matter experts and the Quality Unit should also be involved in these
decisions. Maintenance trending should be benchmarked and periodically reviewed at a quality council
forum to assess a state of qualification at the facility that helps in determining PPQ readiness from an
equipment, utilities, and facilities perspective. In case of an emergency, such as sudden novel disease
outbreaks arising, submitting the proof of the manufacturing equipment qualification, as well as a list of
critical equipment for a products’ manufacturing, is especially important (27).

### 4.2 Performance Qualification

Performance qualification (PQ) must be performed at the end of the operational qualification (OQ) or in
conjunction with the OQ or the PPQ. The following statements from EU GMP Annex 15 contains an
accurate definition that PQ should include, but is not limited to, the following (50):
•
Testing using production materials, qualified substitutes or simulated product proven to have
equivalent behavior under normal operating conditions with worst-case batch sizes. The frequency
of sampling used to confirm process control should be justified.
•
Testing should cover the operating range of the intended process, unless documented evidence from
the development phases confirming the operational ranges is available.
For parenteral products, the type of PQs to be performed can vary substantially and are designed to verify
the ability to:
•
Clean components and equipment parts
•
Sterilize loads using steam or EtO (ethylene oxide), for example, and decontaminate via vapor
phase hydrogen peroxide (VPHP) or other sterilants
•
Depyrogenate containers
•
Fill a placebo and fill media-filled units (APS)
•
Inspect placebo units
•
Ensure an environment meets microbiological and total-particle requirements
•
Perform clean-air projector use and unidirectional flows to protect from a possible contamination
(air-flow pattern tests)
Usually, during the PQ, possible risks can be identified more precisely before going into the PPQ, because it
is the first time that equipment, facility, components, and process come together. The fact that PQ is a partial
simulation cannot rule out the possibility that some unexpected surprise could come up during the PPQ.
There is another potential activity, called Line PQ, that should be considered. Depending on the complexity
of the system, there might be instances where the overall PQ of the system needs to be assessed following
the successful PQ of specific components of the system. Therefore, the Line PQ is targeted to prove that a
combination of individually qualified systems can interact successfully, yielding satisfactory performance.
The Line PQ is focused on verifying the functionality of the system in its entirety with regard to real
working conditions, including the use of manufacturing instructions. This can also test the full functionality

44
and integration between the instructions, the process automation, and the equipment. If a product trial or
APS is performed, the final report from these studies can fulfill the requirement of the Line PQ.
For this reason, it is also prudent to manufacture demonstration lots or engineering lots. These manufacture
demonstration lots or engineering lots reflect the proposed process to be qualified, and may be manufactured
with rejected DS or with non-commercial DS, such as material from engineering runs.

### 4.3 Process Performance Qualification

PPQ marks the transition from development and clinical manufacturing to routine commercial production.
The PPQ combines the actual facility, utilities, equipment (each now qualified), and trained personnel with
the commercial manufacturing process, control procedures, and components to produce commercial
batches. PPQ confirms the process design and the success of the process control strategy to produce batches
at the commercial manufacturing scale, as expected. PPQ provides confidence that the systems of
monitoring, control, and procedures in routine manufacturing are capable of detecting and compensating for
potential sources of process variability over the product lifecycle.
The number of successful batches executed during the PPQ study should not be viewed as the primary
objective of a PPQ campaign. While successful runs of commercial-scale batches can indicate overall
operational proficiency and sound process design, these batches should also be viewed as a means to collect
the data needed to demonstrate that the process control strategy is effective. The type and amount of data
should be based on the understanding of the process, the impact of process variables on product quality, and
the process control strategy developed during Stage 1. Prior knowledge should be used as well. For instance,
in the cases of emergencies when the accelerated development and validation of products are desired, the
data to support the formulation may differ depending on the platform but, at a minimum, should include the
critical aspects of product characterization, a potency assay, and the data on stability generated, as well as
the qualification state of the manufacturing equipment being used (27). The number of batches needed to
acquire this information and data may be mainly based on a statistically sound sampling plan that supports
the desired confidence level. It may also be influenced by the approach selected to demonstrate that the
within-batch and batch-to-batch variabilities of CQAs are acceptable.
The entirety of Section 4.3 discusses design strategy for the PPQ, recommended content for the protocol
and report, and transition to Stage 3 of the PV lifecycle.

#### 4.3.1 Process Performance Qualification Readiness

The transition from Stage 1 to Stage 2 of the PV lifecycle may not be strictly sequential. Completion of
some Stage 1 activities may overlap with those from Stage 2 and may include parallel studies, such as
mixing and/or hold studies. Likewise, some preparative Stage 2 activities will be initiated in parallel with
those from later Stage 1 activities. Components of Stage 2 PPQ readiness activities (refer to Section 3.1)
include, among others:
•
Drafting PV master plan
•
Drafting project plan
•
Qualifying facilities, utilities, and equipment
•
Completing successfully the required PQ studies, including APS
•
Training personnel
•
Drafting the initial CPV plan

45
Although the initiation of PPQ activities is not contingent upon completion of all Stage 1 activities, a
readiness assessment should be conducted to determine the timing of sufficient information and completion
of activities to support moving forward with PPQ batch manufacture. The readiness assessment should
include deliverables from Stage 1, as outlined starting from Section 3.1, and other elements as required:
•
Quality Target Product Profile (QTPP): Initiated at the start of Stage 1, it should be updated to
reflect the knowledge obtained from Stage 1 prior to initiating PPQ (17).
•
Critical Quality Attributes (CQAs) with Criticality Assessment: CQAs are identified early in
Stage 1. They are confirmed to account for additional analytical characterization, clinical and/or
nonclinical data, and information gathered during Stage 1. CPPs that impact CQAs are reviewed
and updated based on detectability and occurrence (17, 27).
•
Material Attributes with Criticality Assessment: Material attributes are identified early in
Stage 1. They are confirmed to account for additional analytical characterization, clinical and/or
nonclinical data, and information gathered during Stage 1. CPPs that impact material quality
attributes are reviewed and updated based on detectability and occurrence (17, 27).
•
Commercial Manufacturing Process Description: This is started in Stage 1 and updated to
reflect the finalized commercial process supported by Stage 1 studies and data. These include
elements outlined in Section 3.4 and any changes resulting from the qualification of the facilities,
utilities, and equipment as outlined in Section 4.1.
•
Analytical Methods: Appropriately validated or suitably qualified methods should be identified.
Methods for product release and stability should be fully validated according to ICH requirements
prior to initiating PPQ batch testing. Any additional tests beyond normal release testing used to
support PPQ should be identified and suitably qualified/validated prior to being used to test PPQ
batches (33, 34, 51). The justification of the status for use in the PPQ studies (qualified and/or
validated) should be fully documented for each analytical method.
•
Approved Commercial Batch Production and Control Records: Changes may be made to
batch records during Stage 1 to enhance, clarify, or optimize manufacturing instructions and/or
reflect knowledge gained during process characterization. Master batch records reflecting the final
commercial process to be studied in PPQ should be approved prior to PPQ batch execution.
•
Process Design and Development Report: This report (refer to Section 3.7) is documentation
for the process design and development justifications, which includes risk-ranking of parameters
and ranges for the process that will undergo PPQ study. This information should be finalized prior
to the PPQ study design since it provides the scientific support to justify the PPQ acceptance
criteria.
•
PPQ Risk Assessment Report Prior to Stage 2: This report documents risk assessment
exercise(s) based on the knowledge summarized in the Process Design and Development Report.
This activity summarizes decisions regarding the type and extent of process controls of the process
being qualified. These risk management events should be conducted by an interdisciplinary team
that includes experts from a variety of disciplines (e.g., process engineering, industrial pharmacy,
analytical chemistry, microbiology, statistics, manufacturing, and quality assurance).
•
Process Validation Master Plan (PVMP): Drafting of the PVMP should begin in Stage 1 and
should be finalized prior to initiation of the PPQ study. Elements of the PVMP are outlined in
Section 3.8.
•
Quality System and Training: Qualified and trained personnel are essential to PPQ studies.
Detailed, documented training specific to the PPQ is required for functional groups directly
involved in the execution of each study. To minimize the risk of human error, personnel should
understand their role in protocol execution. Quality Unit approval of PPQ activities should be
completed prior to initiation of every PPQ study, and all PPQ studies should be conducted within
the quality system.

46
•
Approved Protocols for PPQ Studies: Protocols for each study should be approved, including
Quality Unit approval, and finalized prior to initiation of PPQ studies. Refer to Section 4.4 for the
design and content of PPQ protocols.

### 4.4 Design Strategy for Process Performance Qualification

Design Strategy for PPQ refers to a systematic approach used in the pharmaceutical and biopharmaceutical
industries to ensure that a manufacturing process is capable of consistently producing products that meet
predefined specifications and quality attributes. The strategy focuses on validating the manufacturing
process through testing and gathering data under normal operating conditions. This strategy should be
internally evaluated by a multi-department team, including quality assurance and regulatory affairs
personnel.

#### 4.4.1 Use of Prior Knowledge and Stage 1 Data to Support Process Performance

Qualification
In a lifecycle approach to PV, sources of data and information outside of the PPQ batches may be used to
support a high degree of confidence in an ongoing state of process control. Prior knowledge is that which
has been gained from similar products and processes. It may come from experience with a portfolio of
similar molecules, where platform manufacturing strategies have been developed using existing facilities
and equipment (e.g., platform manufacturing processes for monoclonal antibodies) or from similar process
and unit operations. Leveraging the data from similar products and processes may provide an additional
level of confidence in the process control of a product and process that uses a similar control strategy and
unit operations. However, the situation could change in the case of molecule-specific sensitivity (e.g.,
sensitivity to gamma-irradiated critical consumables or VPHP) resulting in the need to apply changes to the
platform manufacturing strategies (e.g., switching from gamma-sterilized to steam-sterilized consumables)
and to consider additional aspects of the control strategy.
By contrast, likely first-in-class molecules and/or products manufactured in new facilities or with new
equipment will probably require increased emphasis on data-gathering in Stage 1 to support PPQ readiness.
To gather sufficient data to demonstrate an acceptable level of confidence in the commercial manufacturing
process when little prior knowledge or Stage 1 data are available, the scope and extent of PPQ may need to
be increased. This increased scope can both be translated in the need to run demo or engineering lots prior to
official PPQ lots and/or by increasing the number of PPQ lots. Demo lots or engineering lots may be
manufactured to gain knowledge into the process while also exploring operational ranges for CPPs.
Successful demo or engineering lots can be used as a gateway to proceed into PPQ. In addition, successful
completion of demo or engineering lots could be used to justify the number of lots needed for PPQ.
The rationale and scientific justification for the use of existing data (prior knowledge) to support Stage 2
should be documented in the PV master plan. All prior knowledge and Stage 1 data used to support PPQ
must be retrievable, traceable, verified, and generated using good scientific practices.
Where there is greater prior knowledge or process design for a new product or process, that knowledge and
data is used in a scientific, statistical, and risk-based manner to determine the appropriate size of PPQ
studies. Limited prior knowledge will require proportionally more Stage 1 and/or PPQ knowledge.

47
Some examples of cases where prior knowledge may be useful for PPQ include:
•
Setting acceptance criteria in PPQ studies, for example, bioburden and endotoxin in-process
acceptance criteria, in cases where facility history and limits for other processes can be applied to
similar processes that employ the same facility and equipment. (Assumes the limits for the previous
product are appropriate for the quality of the new product.)
•
Using data from other product PPQ supportive studies, for example, in platform purification
operations where the same or similar buffer formulations will be used in the same vessels, buffer
hold-studies already performed for a different product can be used to support the PPQ for buffers
used for the new product (52).

Note: For more information regarding solid and semi-solid dosage forms, refer to TR 60-2 (53).

##### 4.4.1.1 Use of Stage 1 Data for Process Performance Qualification

Processes and products for which there is little or no prior knowledge may require a greater emphasis on
Stage 1 and PPQ activities to demonstrate an acceptable level of confidence in the process control strategy.
Data from Stage 1 process characterization studies and clinical manufacturing are generally used to support
the establishment of the control strategy for new products (refer to Section 3.0). Stage 1 data may be used to
support PPQ if sufficient scientific evidence for its use is available. At a minimum, the studies claimed to
support PPQ should represent the commercial-manufacturing scale (e.g., be scale-independent) or derived
from qualified small-scale model(s) proven to represent the full-scale process. In some cases, data from
clinical-manufacturing batches may be used in conjunction with data gathered during PPQ to increase the
amount of data that can be used to achieve an acceptable level of confidence in the process. For example,
the use of Stage 1 data to support the PPQ might include (1, 50):
•
In some cases, Stage 1 data that supports PPQ may be supported by adding stricter testing for a
defined number of batches to confirm the results obtained in the Stage 1 studies and the PPQ
batches. For example, small-scale column lifetime studies may be used to support column reuse
limits. These are then confirmed with a heightened level of impurity-monitoring until the reuse
period has been reached at full scale.

#### 4.4.2 Process Performance Qualification Study Design

PPQ is a means to demonstrate that all critical and other process parameters of unit operations are under the
appropriate degree of control, and that all important variables and elements of the unit operation have been
considered, that is, facility, utilities, equipment, personnel, process, control procedures, and components
(refer to Figure 4.4.2-1).

*[Figure 4.4.2-1 Stage 2 Activities]*

Typically, a PPQ Master Plan would be developed as required, based on the complexity of the PPQ study.
The plan would include the summary of the design of the study as well as previous knowledge that aided in
implementation of the study. The PPQ Master Plan should serve as a bridge between the QTPP and the
QRM and PPQ protocols (refer to Table 3.8-1). In other words, starting with QTPP, you would perform

48
your risk assessment and, based on that, determine the PPQ study design, which would result in a PPQ plan.
Based on the complexity of the PPQ study, the information that would typically comprise the PPQ plan
could reside in the PPQ protocol.
It should be noted that the complexity and effort of the PPQ master plan should be commensurate with the
complexity and criticality of the PPQ studies.
Typical aspects covered by the PPQ plan are:
•
Process flow, including possible variations
•
Number of batches and rationale
•
Operating conditions
•
Variability in the reagents, excipients, and
primary containers
•
Individual unit operations validation
•
Justification behind selection of
bracketing, matrixing, and/or family
approach
•
Sampling plans and justification
•
Stability studies, including comparison
with development or tech-transfer product
•
Combination-product assembly and
packaging requirements
•
Shipping requirements
•
Statistical analysis and evaluation
requirements
•
Environmental monitoring
During PPQ, CPPs and CQAs are monitored along with process performance parameters. Their evaluation
is useful in demonstrating consistency and can enhance confidence in the overall process control strategy
when included in the PPQ. All parameters and attributes intended for ongoing CPV in Stage 3 should be
included in the PPQ.
Prior to entering commercial PPQ batches, it would be advisable to run demo, engineering, or trial batches.
This would be representative of the initial PPQ batches and would constitute a general trial for the
commercial facility and proposed commercial process. It is also possible to leverage these engineering
batches to confirm the PARs for given parameters, thus confirming the robustness of the process.

##### 4.4.2.1 Risk-Based Process Performance Qualification Sample-Size Justification

QRM or risk-based approaches are used to assist in demonstrating control and capability throughout the PV
lifecycle activities. Risk-based rationales are used to justify the number of batches manufactured and the
number of samples taken during PPQ. It should be noted that there is no set number of expected batches
prescribed in regulatory expectations or industry standard practice because the number of batches will be
unique to a given product and process based upon the variability. The rationales assure sufficient data is
available for the evaluation to demonstrate, with a high level of assurance, a process is capable of
consistently delivering quality product, allowing the normal range of variation and trends to be established
and providing sufficient data for evaluation. The evaluation of data should include objective measures (e.g.,
statistical metrics), wherever feasible and meaningful, to achieve adequate assurance.
Additionally, FDA’s GMP regulations regarding sampling set forth a number of requirements for validation:
•
Samples must represent the batch under analysis (54)
•
Sampling plan must result in statistical confidence (55)
•
Batch(es) must meet its predetermined specifications (55)

49
Finally, the number of samples should:
•
Be adequate to provide sufficient statistical confidence of quality both within a batch and between
batches
•
Have risk-based statistical testing levels tied to the relative criticality of the particular attribute
under examination
•
Allow the normal range of variation and trends to be established
•
Provide sufficient data for evaluation
Sampling during this stage should be more extensive than is typical during routine production; this can be
called an enhanced sampling plan. The plan has risk-based components, uses general prior knowledge, and
allows for statistically based confidence statements regarding the firm’s understanding of within- and
between-batch variability.
There are three basic components or tools commonly used to demonstrate statistical confidence and
understanding of variation for enhanced sampling plans both within a batch and between batches for
aseptically filled products. The basic components included in the PPQ data analysis of each attribute are
(refer to Section 6.2):
•
Individual Value Plots: General or basic analysis and graphing, preferably using individual value
plots; visually describes inter- and intra-batch variation.
•
Tolerance Intervals: Tolerance interval is one of the most commonly used tools applied during
PV; it provides a method to measure the control and capability of product attributes. The tolerance
interval level being tested ties back to the relative criticality of the product attributes and compares
the variation seen for each product attribute (by batch) to the product specification. This comparison
is an objective measure that allows for a capability statement to be provided as part of PV for each
attribute tested.
•
Variance Components: In the case of an aseptically filled DP, variance components describe the
percentage of variance that can be attributed to within-batch or batch-to-batch variability meeting
guidance requirements.
Enhanced sampling plans for aseptically filled products (e.g., vaccines, biologics, small-molecule
parenterals) take samples that align with three time periods: beginning, middle, and end positions (B/M/E).
The minimum number of reportable value samples taken per timepoint should be n = 2 (6 total–2B/2M/2E),
to allow for variance component calculations. Replicates at each point are needed for the analysis to be
performed. This may increase (typically up to n = 5, or 15 total–5B/5M/5E), depending on the relative
criticality of the attribute and its variability estimate. Examples are presented in Table 4.4.2.1-1, Table
4.4.2.1-2, and Figure 4.4.2.1-1.

**Table 4.4.2.1-1 Sampling Requirement**

Critical Quality Attribute
(CQA)
Severity of Potential Harms
(Effects)
Statistical Sampling
Requirements
Potency
High
+++
Osmolality
Medium
++
pH
Low
+

50

**Table 4.4.2.1-2 Confidence**

Critical Quality Attribute
(CQA)
Severity of Potential Harms
(Effects)
Example Confidence and
Proportion Requirements
Potency
High
95/99
Osmolality
Medium
95/95
pH
Low
95/90

*[Figure 4.4.2.1-1 Sampling]*

##### 4.4.2.1.1 Sample-Size Selection Considerations

Generally, enhanced sample-size selection is based on a combination of prior knowledge and the relative
criticality of the attributes. Prior knowledge may come from legacy PPQ batches or pre-PPQ batches (e.g.,
engineering, clinical), while the relative criticality of the attribute is derived during Stage 1 CQA
determination. The approach uses the same analysis tool that will be applied during the PPQ analysis, the
tolerance interval. Normal tolerance intervals are constructed and compared to the release-acceptance

51
criteria for each evaluated attribute to provide confidence that all current and future measurements will fall
within a percentage of the required coverage (based on criticality).
The enhanced plan has risk-based components, uses general prior knowledge, and allows for statistically
based confidence statements regarding the firm’s understanding of within- and between-batch variability.
Occasionally, due to a number of considerations, such as in a pandemic response, prior knowledge is not
available to construct these intervals. As such, each attribute selected for enhanced sampling can be sampled
at the minimum, that is, n = 6 (2 each for B/M/E), at a calculated, uniform 95/95 confidence level and
coverage. The minimum n = 6 sample size is appropriate as it will allow statements of confidence and of
inter- and intra-batch variability using variance components for each attribute within the enhanced sampling
plan.

##### 4.4.2.1.2 Sample Size Methods

The tolerance interval method for selection of samples for PPQ requires a few pieces of Stage 1 information
for its use:
•
Criticality level of the CQA being evaluated
•
Stage 1 development data to get point estimates and confidence intervals for average and standard
deviation of the CQA being evaluated
̶
Development data can come from clinical runs, characterization, or engineering runs
̶
Stage 1 is not limited to new products; it can be an historical evaluation of commercial
batches as part of a TT (36)
•
Procedure or work instruction to tie CQA criticality to a risk level
Table 4.4.2.1.2-1 lists some examples of product attributes, but please note it is not an exhaustive listing.

52

**Table 4.4.2.1.2-1 Example Sample Plan**

Product Attribute
Minimum Enhanced Process Performance
Qualification (PPQ) Samples per Batch (n)
Container Closure Integrity (CCI)
n = 12 (USP <671>)
pH
n = 3 for B/M/E
9 total results
Osmolality
n = 3 for B/M/E
9 total results
Total protein
n = 3 for B/M/E
9 total results
High performance size exclusion
chromatography (HPSEC)
n = 3 for B/M/E
9 total results
Reducing capillary gel electrophoresis
n = 3 for B/M/E
9 total results
Nonreducing capillary gel
electrophoresis
n = 3 for B/M/E
9 total results
Bioassay
n = 1 for release
Subvisible particles
≥10 µm: ≤6000
≥25 µm: ≤600
n = 3 for B/M/E
9 total results (each)

##### 4.4.2.1.3 Drug Product Process Performance Qualification Analysis of Enhanced Samples

If possible, the drug-product enhanced sample analysis should be structured in the PPQ in the following
manner:
•
Summary table for all attributes provides summary statistics as well the tolerance intervals and
variance components, as appropriate, per batch.
•
Summary analysis for each attribute, including:
̶
Graphical analysis using individual value plots per attribute. All batches should be plotted
on the graph for maximum effect. Reference lines denoting specification limits should be
used to show the data in context.
̶
Tolerance interval charts per attribute per batch.
̶
Variance component analysis table per batch.
̶
Summary statement per attribute regarding achieved-control and capability-based upon the
analysis presented.

53
There are cases when analysis cannot be executed, for instance when:
•
Values are below a limit of detection, which means there are no values to report, in which case,
neither graphical nor statistical analysis can be performed.
•
There are not enough unique values to perform the analysis either due to the rounding of the data,
precision of the method, or very little variation in the process. This can be minimized by requesting
raw analytical data (full recorded values) rather than reported data (which may be truncated). In the
case of not-enough unique values, graphical analysis can be performed, but the tolerance interval
and variance component cannot. Graphical analysis in this situation can still provide powerful
visual support for control and capability within and between batches.
The samples must be tested and analyzed using statistical tools and graphing, as appropriate, to provide
sufficient statistical confidence of quality within and between batches as well as evidence the product and
process are ready for commercial manufacturing. Minimum acceptance requires that the test results are
within release specification based on the release criteria.
An effective PPQ should evaluate a sound process design, an effective control strategy, and operational
proficiency at commercial scale (56). The number of batches in the PPQ study(ies) will be influenced by
many factors such as the:
•
Study(ies) performance and acceptance criteria
•
Analyses to be performed and the type and amount of data necessary to perform those analyses
•
Level of process knowledge and understanding gained from Stage 1, as well as from the
engineering runs in the commercial facility
•
Type and complexity of manufacturing technology employed in the various unit operations
•
Knowledge from previous experience with similar well-controlled processes
•
Inherent or known variability of the process resulting from raw materials, age of the equipment, or
operator experience
Using risk-based approaches allows a balance between the number of batches studied and the risk of the
process. They can also be used in conjunction with objective approaches to determine the number of batches
to include.
Where practical, statistical methods are recommended to guide the determination of the number of PPQ
batches needed to achieve a desired level of statistical confidence (refer to Section 6.1.1 and Section 8.0).
However, this approach alone may not always be feasible or meaningful. One such example is PPQ studies
of a protein DS process with a limited number of clinical batches. This limited output could be due to such
factors as manufacturing scale or product indications (e.g., orphan drug) where infrequent future
manufacturing campaigns are to be performed. In addition to limitations on manufacturing batch production,
the nature of protein drug-substance manufacturing makes increased number of samples of the process
streams of limited usefulness to achieve a statistically significant sample size.

54
When it is not feasible or meaningful to use conventional statistical approaches, a practical, scientifically
based, holistic approach may be more appropriate. In this case, the following factors may be used to support
the rationale for the number of PPQ batches selected based on knowledge accumulation:
•
Prior knowledge (e.g., development/clinical batches) and platform manufacturing information or
data
•
Risk analysis of the process to factor the level of risk into the batch number selection
•
Increased reliance on Stage 1 data to support that the process is under control and to add to the
dataset
•
Continuation of heightened sampling or testing plans during CPV until a sufficient dataset to
achieve statistical confidence has been accumulated
•
For very expensive products, understanding of the probability of product approval for release-to-
market versus the demonstrated shelf life (i.e., a late approval could mean wasting PPQ lots)
When a combination of approaches and data are used, the rationale and justification should be clearly
documented in the PVMP. Also, references to all supporting source data should be included.

##### 4.4.2.2 Risk-Based Justification for Number of Process Performance Qualification

Batches
The risk-based assessment method for the selection of an acceptable number of PPQ batches is based upon
process, product, business needs and site knowledge. As knowledge increases, the potential starting point
for the number of batches decreases.
The approach described here makes use of a decision-tree or checklist approach. These approaches employ
Yes or No questions to guide the decision-making process, which reduces the approach/assessment
subjectivity bias. A risk-evaluation table is used to guide the determination (refer to Table 4.4.2.2-1).
There are three basic steps to the selection process:
Step 1: Determine the baseline number of batches using product and process knowledge.
•
The level of product and process knowledge are used to determine the minimum number of batches
(or baseline) that need to be produced during PPQ.
•
Answers to the questions provide guidance on one of three risk-based evaluation starting points for
N batches. As product and process knowledge increases, the potential starting point for the selection
of the number of batches decreases.
Step 2: Determine if any additional controls, activities, or technical rationales are required.
•
This step helps to confirm the selection of the number of batches from Step 1 and determines
specific site-level knowledge.
•
Risk control activities determine if additional studies or batches need to be performed/executed.
Step 3: Determine if there are any non-GMP-related risks, such as business, technical, or strategic
justifications, for the addition or reduction of batches.
•
This is a non-quality risk-based step.
•
After Step 3, the number of batches, N, is provisionally set.

55

**Table 4.4.2.2-1 Generic Risk Evaluation Table**

Knowledge
Risk
Example
Low Level of
Knowledge
High Risk
Consider additional development or
preparation activities. Leadership
approval to start PPQ with risks
detailed prior to proceeding to PPQ.
•
New formulation/equipment
•
Technology transfer of poorly
known platform technology
Typical / Average
Level of
Knowledge
Moderate Risk
PPQ: N = Baseline
Note: Justification for Baseline
required. See Section 4.4.2.2.2.
•
Existing
formulation/equipment
•
Technology transfer of
moderately known platform
technology
High / Very High
Level of
Knowledge
Low Risk
PPQ: N ≤ Baseline
•
Technology transfer of known
platform technology

##### 4.4.2.2.1 Justification of Baseline

Risk-based approaches and application of QRM to the PV lifecycle are noted in health authority
guidance(s), including those of the FDA and EU.
The determination of the number of batches should be based upon risk-based principles as well as product
and process knowledge. The more knowledge one possesses (with proof), the relative risk to move into
commercial production is reduced, and the number of batches required within a PPQ campaign may be
lessened.
While all the guidances state that a risk-based approach must be used, EU GMP Annex 15 provides
additional support for the use of N = 3 as a starting point for the evaluation table used in this approach.
•
The number of batches manufactured and the number of samples taken should be based on QRM
principles, should allow the normal range of variation and trends to be established, and should
provide sufficient data for evaluation within the PPQ report.
•
It is generally considered acceptable that a minimum of three consecutive batches manufactured
under routine conditions could constitute a validation of the process.
•
An alternative number of batches may be justified, taking into account whether standard methods of
manufacture are used and whether similar products or processes are already used at the site (50).

##### 4.4.2.2.2 High-Level Approach

The approach provided in Figure 4.4.2.2.2-1 is an example of a high-level view of what can be a very
detailed decision tree and multipage risk-based checklist (refer to Table 4.4.2.2.2-1).

56

*[Figure 4.4.2.2.2-1 Decision Tree for Determination of Number of Process Performance Qualification Lot]*

57

##### 4.4.2.3 Process Performance Qualification at Normal Operating Conditions

PPQ studies are typically conducted in a manner that demonstrates a state of control under normal operating
conditions to assess the process variability expected during routine production. Process characterization
(robustness) studies conducted during Stage 1 serve as the foundation for establishing NOR, PAR, and
design space, if appropriate. Effects-of-scale should also be considered if scaled-down models are suitably
qualified, well-planned, and executed. Study data on robustness should support conducting commercial-
scale PPQ under routine manufacturing conditions. Supplemental engineering studies at scale may be
appropriate to evaluate extremes of the NOR (e.g., line speed or compression speed). In most cases,
available Stage 1 data makes it unnecessary to execute PPQ over the entire operating range during the
commercial manufacturing process. The PVMP should provide the justification for the approach used and
reference all source data.

##### 4.4.2.4 Process Performance Qualification Using Individual Operation Studies

The PPQ of a manufacturing process can be achieved by performing PPQ studies on each individual unit
operation (or related groups of operations). This approach calls for the writing of individual protocols that
outline the studies to be conducted on each unit operation to achieve PPQ for the entire process. Protocols
should define the testing performed and acceptance criteria for the output of the unit operation
(intermediate) as prescribed by GMP. They may also require that the final DS or DP meets all specifications
and predefined acceptance criteria.

##### 4.4.2.5 Process Performance Qualification Using Bracketing, Matrix, and Family

Approaches
Many operations involve similar or identical process operations or equipment. In these cases, designs where
grouping is used may be considered (57). Some process variables that might be amenable to approaches
using bracketing, matrix, or family grouping PPQ include:
•
Batch sizes
•
DP dosage strength
•
Identical equipment
•
Different size vessels, tanks, or similar configurations of the same design and operating principle or
in-kind equipment
•
Various vial sizes and/or fill volumes of the same DP (e.g., smallest and largest vial size)
•
Filling line speeds (e.g., fastest and slowest line speed)
•
Product packaging (e.g., bottle heights or dosage counts)
•
Transport validation for biological products

58

##### 4.4.2.6 Bracketing Approach

Bracketing qualifies processes that represent the extremes of process variables under the premise that the
extremes are fully representative of intermediate groups. The bracketing strategy is used when a single
process element can be varied while all other variables remain fixed, for example:
•
Use of a common blend or solution, that is, identical-strength tablets or those very closely related in
composition (e.g., for a tablet range made with different compression weights of a similar basic
(common) granulation, or a capsule range made by using different fill weights of the same basic
composition into different size capsule shells).
̶
A blend concentration of 50 mg active ingredient/100 mg powder could be compressed into
a 100 mg active (per 200 mg tablet weight), 200 mg active (400 mg tablet weight), and 300
mg active (600 mg tablet weight) as the same powder blend is common to the three tablet
strengths.
̶
Capsules or liquid fills where common blends or solutions are used for filling into the final
dosage form.
•
Different container sizes or different fill volumes in the same container–closure system.
The rationale for selection of representative groups and numbers of batches should be scientifically justified,
risk-assessed, and outlined in the PVMP and PPQ protocols.

##### 4.4.2.7 Matrix Approach

A matrix approach is appropriate for commercial manufacturing PPQ when configurations of the same
process and product have more than one variable. The approach assumes that the batch configurations
selected for inclusion in the PPQ fully represent processes for all combinations. The rationale for the
selection of combinations and the number of batches representing each combination, should be scientifically
justified, risk-assessed, and documented in the PVMP and PPQ protocols. Some processes require a
comprehensive PPQ. In those cases, selecting batches or lots from all combinations is advisable.
Table 4.4.2.7-1 shows an example of a matrix design for a PPQ of a filling process where evaluation of
three variables results in multiple drug-product strengths. Variables in this example include fill volume, bulk
DP solution concentration, and final DP strength.

59

**Table 4.4.2.7-1 Matrix Design**

Fill
Volume
(mL)
Bulk Drug
Solution
Concentration
(mg/mL)
Final Drug
Product
Strength (mg)
Batch Included
in Process
Performance
Qualification?
Rationale
0.10
2.00
0.2
Yes*
Lowest DP strength
Lowest bulk DP
concentration
Lowest fill volume
4.00
0.4
No
Covered by matrix
0.15
4.00
0.6
No
Covered by matrix
8.00
1.2
Yes*
Highest drug
concentration in fill
solution
0.30
4.67
1.4
No
Covered by matrix
6.00
1.8
No
Covered by matrix
6.67
2.0
Yes*
Highest drug
concentration in final
DP
Highest fill volume
*Based on the assumption that process variability is highest at these conditions.
Rationale for selection of representative groups and number of batches should be scientifically justified and
outlined in the PVMP and PPQ protocols. Consideration should be given to product stability, as sometimes
this can vary considerably in the presence of matrixes.

##### 4.4.2.8 Family (Grouping) Approach

A family approach is appropriate when multiple related but different entities can be grouped so that a single
one represents the common characteristics or worst-case of each group. The rationale for family groups and
justification for the representative selection should be included in the PVMP and PPQ protocol. All
variations in the formulation or method of manufacture should be described and evaluated in detail. Two
examples of the use of the family approach for PPQ are provided.
Example 1: Equipment Family
Cell culture for biological product manufacturing can be performed in multiple trains using the same
equipment and process in each one. Use of a family or grouping approach may be valid for the PPQ for the
fermentation unit operations. The example depicted in Table 4.4.2.8-1 shows how such an approach, which

60
limits the number of batches for the PPQ versus repeated multiple runs from each fermenter, could be used.
In this case, each equipment train was evaluated for similarity of the equipment (identical equipment trains
with duplicated equipment of the same model and manufacturer). Identical equipment trains reduce the
number of batches needed to show that the process is reliable in each one. In this case, there is ample prior
knowledge on the performance of the process. Use of a reduced number of batches in a family approach
should take into consideration the amount of prior knowledge of the process, the number and impact of the
CPPs, and the ability to control the parameters within the ranges. For a unit operation with no critical
parameters, use of fewer batches may be appropriate. In these cases, the approach should be clearly justified
with reference to supporting data in the validation protocol.

**Table 4.4.2.8-1 Equipment Family Example**

Equipment
Family –
Production
Bioreactor
Process
Performance
Qualification
(PPQ) Runs
(Unit Operation)
Assessment
Supporting Data
Bioreactor #1
3 Batches
Compare:
•
Physical design
•
Design specs
•
Materials of
construction
•
IQ
•
Acceptance
criteria
•
Operating
principles
•
Process control
instruments and
software
Multiple small-scale
process characterization
runs available to support
ranges
Bioreactor #2
1 Batch
Bioreactor #3
1 Batch

Example 2: Buffer Family Grouping
In assessing the stability of solutions and buffers to support commercial-scale bulk-protein DS
manufacturing, buffers and solutions of similar formulations and storage-vessel types may be assigned to
family groupings. Following an analysis of concentrations, the potential for interaction with the vessel, the
susceptibility to contamination, and other appropriate factors, a worst-case representative of each family
grouping may be selected. The representative buffer is subjected to all testing described in the protocol. The
qualification of the family representative qualifies all other buffers or solutions in the family grouping. This
should be outlined in the rationale and in the PVMP and protocols.

##### 4.4.2.9 Concurrent Validation, Continuous Process Verification, and Hybrid Approach

The concepts of concurrent validation, continuous process verification, and a hybrid approach were
introduced in EU GMP Annex 15.

61
In exceptional circumstances, where there is a greater benefit verses risk to the patient, it may be acceptable
not to complete a validation program before routine production starts and concurrent validation could be
used. However, the decision to carry out concurrent validation must be justified, documented in the PVMP,
and approved. Where a concurrent validation approach has been adopted, there should be sufficient data to
support the conclusion that any given batch of product is uniform and meets the defined acceptance criteria.
The results and conclusion should be formally documented and available to the Qualified Person prior to
certification of the batch.
For products developed by a QbD approach, where it has been scientifically established that routine process
control provides a high degree of assurance of product quality, then CPV can be used as an alternative to
traditional PV. The process verification system should be defined, and there should be a science-based
control strategy for the required attributes for incoming materials, CQAs, and CPPs to confirm product
realization. This should also include regular evaluation of the control strategy. PAT and multivariate
statistical process control may be used as tools. Each manufacturer must determine and justify the number of
batches necessary to demonstrate a high level of assurance that the process is capable of consistently
delivering quality products. The same general principles—justification of approach, documentation in
PVMP, approval by authorized personnel—apply.
A hybrid approach using the traditional approach and CPV for different production steps can also be used.
Where there is a substantial amount of product and process knowledge and understanding that has been
gained from manufacturing experience and historical batch data, continuous verification may also be used
for any validation activities after changes or during ongoing process verification, even though the product
was initially validated using a traditional approach.

##### 4.4.2.10 Process Analytical Technology

After developing a control strategy that incorporates PAT, process qualification is performed to confirm that
the monitoring, measurement, and process control or adjustment systems are suitable, capable, accurate, and
reliable (refer to Section 3.4 and Section 6.3). The key to effective PAT process control is the reliable
operation of instruments and equipment.
The use of PAT controls can provide an alternate approach to PPQ. If a PAT system is used to control every
commercial batch, then the PPQ stage will have a different focus. For example, if a powder-blending or
solution-mixing operation is controlled by a PAT system, such as NIR assays, the PPQ will involve
demonstrating that the control model and system and the process model work as predicted in commercial
manufacturing.
Qualification of the equipment, measurement system, and process must demonstrate the capability to adjust
CPPs according to the established algorithm and confirm that the adjustments result in acceptable and
predictable outputs. In other words, a PAT-based control method needs to be validated (58).

##### 4.4.2.11 Sampling Strategy

During the PPQ, increased sampling and analytical testing is expected to verify that the process is under
control, and to demonstrate consistency at intermediate steps, as well as in the final product. Sampling plans
for discrete units should include the statistical rationales that underlie the plans (refer to Section 6.0).

62
For processes or individual unit operations that yield a single homogenous pool of material, statistically
based sampling plans may not be useful in ascertaining the level of intrabatch process variability. For
example, analysis of multiple samples from a homogeneous bulk solution or API provides information on
the variability of the analytical method only, not intrabatch variability of the process. In these cases,
extended characterization of intermediate pools and nonroutine sampling performed at certain points in the
process and comparison of the data between batches can demonstrate process control and reproducibility.

##### 4.4.2.12 Setting Process Performance Qualification Acceptance Criteria

The acceptance criteria for PPQ should be based on the body of data available from Stage 1, prior
knowledge, and equipment capabilities. The approach used to determine the acceptance criteria should be
outlined in the PVMP, and the justification of the individual acceptance criteria for each unit operation
should be documented in the PPQ protocols. Statistical approaches should be used where appropriate, and
each product and process variable should be evaluated individually. Process justification documented in the
Process Design Report provides the scientific basis and reference to the data supporting the acceptance
criteria for process parameter ranges, and product attributes (refer to Section 3.7). The rationale for PPQ
acceptance criteria should be clearly described in the PVMP and PPQ protocol. When sufficient data are
available and statistical methods are used, the method(s) used and the rationale for selection of that method
should be described.
When establishing acceptance criteria for PPQ, the following considerations should be considered:
•
Historical data/prior knowledge
•
Preclinical, development, clinical, and precommercial batches
•
Early analytical method suitability (if data is used from clinical lots)
•
Amount of data available (level of process understanding)
•
Sampling point in the process
•
Compendial requirements can be met with high confidence
•
Product stability
An overview of the factors considered for determining PPQ acceptance criteria should either be described or
referenced, if included in a different document. Criteria for determining inter- and intrabatch consistency
should be defined in the PVMP and the PPQ protocol. All parameters and attributes designated for tracking
and trending in Stage 3 should be included in the PPQ acceptance criteria, which may include:
•
Incoming Material: Meets designated criteria (maybe raw material or the output of a preceding
step)
•
Process Parameters: All process parameters are expected to remain within NOR, with particular
attention focused on parameters with critical designation
•
Attributes: All product quality and process performance attributes should meet predefined
acceptance criteria and include statistical criteria where appropriate:
̶
CQAs have the potential to impact safety or efficacy (e.g., impurities)
̶
Quality attributes do not necessarily impact safety or efficacy, but can be used as a
surrogate at certain process steps to demonstrate process consistency (e.g., deamidation or
oxidation that does not impact potency or safety/immunogenicity)

63

##### 4.4.2.13 Special Process Performance Qualification

Public health emergencies have a significant potential to affect the health and well-being of citizens,
allowing for the authorization of emergency use of drugs and biological products when justified. The law
empowers FDA to authorize deviations from otherwise applicable GMP requirements for eligible medicinal
products.
As per PV guidance, a concurrent release may be applied when appropriate for processes used infrequently
for some reasons, such as to manufacture drugs for which there is a limited demand (orphan drugs) or those
with a short half-life (radiopharmaceuticals). The concurrent release approach may be appropriate for drugs
which are medically necessary that are manufactured in coordination with the health regulatory agency to
avoid the short disruption of patient-critical products.

### 4.5 Process Performance Qualification Protocol

PPQ protocols are a documented plan for executing the PPQ studies. Protocols are reviewed and approved
by cross-functional groups that include the Quality Unit. Protocols must be approved prior to
commencement of PPQ activities. They typically contain the following sections:
Introduction
The introduction should include a description of the process and/or specific unit operations under
qualification, including the intended purpose of the operations in the context of the overall manufacturing
process. The introduction should provide an overview of the study(ies) and important background
information.
Purpose and Scope
Describes the objective of the study and provides an overview of the study strategy, that is, how it will be
performed, how data will be analyzed, and the expected outcome. Justifications or cross-referencing to
documents that contain justifications, such as the PVMP, should be included.
Terms and Definitions
Terms and definitions relevant to the PPQ protocol.
References
References to relevant documents related to the study should be included in the protocol:
•
Development and/or process characterization plans that provide supporting data for process
parameters and attribute ranges
•
Process Design Report (outlining CQAs and CPPs)
•
PVMP
•
Commercial manufacturing batch records
•
Related qualification documents (facilities, utilities, equipment, other PPQ studies)
•
Analytical methods
•
Specification documents
•
Approved batch records
Equipment and Materials
A list of equipment, instrumentation, and materials necessary to perform the study should be included.
References to qualification of utilities and equipment should be provided as appropriate.

64
Responsibilities
A designation of various functional groups and their responsibilities as they relate to execution of the study,
and verification that appropriate training has been conducted for all contributors.
Description of Unit Operation/Process
The objective of PPQ is to provide confidence that all elements of unit operation/process are under the
appropriate degree of control. A comprehensive discussion of the control strategy, like the level of detail
provided in the commercial manufacturing control strategy, is appropriate to demonstrate that all process
elements have been considered. Although all elements are described, only a subset of the process variables
will comprise PPQ acceptance criteria.
Methodology
The step-by-step procedure needed to perform the study—this section clearly identifies the critical and key
process parameters under qualification and the methods by which the operation will be monitored and
recorded. A brief explanation of the relevance of these parameters and their potential relationship to process
performance and quality attributes is useful to further describe the PPQ strategy. Documents containing the
detailed rationale for critical and key parameter designations should be referenced.
A discussion of the number of batches planned should be included, and the rationale should be stated (refer
to Section 4.4.2.2 for additional information). The level of confidence expected at the conclusion of the
PPQ study should be included as applicable.
Data Collection
The list of process data to be collected should be stated.
Sampling Plan
A description of a defined prospective sampling plan and its Operating Characteristic Curve should include
details on the number of samples, frequency of sampling, and sampling points supported by statistical
justification, as applicable:
•
Sampling points
•
Number of samples and statistical basis for sampling, as appropriate
•
Sample volume
•
Nonroutine sampling for additional characterization
•
Sample storage requirements
•
Analytical testing for each sample
Analytical Testing
The overall validation package includes the methods used for all analytical testing performed, from
assessment of raw materials to extended characterization of the DP. A listing of all analytical methods used
in each protocol, the validation or qualification status of each, and references to source documents should be
included. Analytical method validation should also be included as part of the PVMP.
Note: Microbiological methods may be verified concurrently for an initial PPQ.

65
Deviations
All potential deviations cannot be anticipated regardless of the level of characterization and knowledge. A
general framework for defining the boundaries of qualification is appropriate, for example:
•
OOS or out-of-limits test results
•
Failure of a CPP to remain within NOR (A CPP is designated as such due to the potential impact on
a corresponding CQA. Failure to control may indicate overconfidence in an immature control
strategy, which would be grounds for protocol failure.)
•
Missed samples or samples held under incorrect storage conditions
•
Which individual batches or lots failing to meet validation acceptance criteria will impact the study
Acceptance Criteria for PPQ
The objective of PPQ is to demonstrate that the commercial manufacturing process is in a state of control,
and the elements of the process control strategy provide confidence that a state of control will be
maintained. The expectation for PPQ is that all process variables will remain within their designated ranges
or meet acceptance criteria; subsets of these are used to define the PPQ acceptance criteria. The protocol
should clearly document the acceptance criteria to be met in order for the PPQ to be considered successful.
Acceptance criteria may be shown in tabular format in the protocol.

### 4.6 Process Performance Qualification Report

A report should be prepared for each PPQ study that will typically include the following sections:
Introduction
The introduction should include a concise description and outline of the unit operations or group of unit
operations that have been qualified. It should summarize the overall results of the study, providing
background information and explanations as necessary.
Methods and Materials
A clear and concise summary of how the study was performed. It should identify how the objectives of the
study were accomplished using both methodology and references to appropriate procedures and protocol
requirements.
Deviations
A summary of the deviations and corresponding root causes, as well as a discussion of the potential impact
on the PPQ, should be included. Corrective actions resulting from deviations should be discussed. Their
impact on the process, the PPQ, and on the affected batches should be provided.
Protocol Excursions
Protocol excursions and unexpected results should be included and fully described in the report. A reference
to the root cause analysis should be provided if documented separately from the PPQ report. Any corrective
actions and their impact on PPQ should be outlined in the report.
Discussion: PPQ Results
This section should restate the key and CPPs and give the actual range of values occurring during the PPQ.
It should include how the data were collected as well as references for analytical methods used.
Data summarized and compared with predefined acceptance criteria should be presented in tabular or
graphical format whenever possible, and data used from Stage 1 studies should be clearly identified. A

66
reference to the original study should be provided when data from outside the PPQ is used to augment the
PPQ dataset for statistical robustness or other support. The level of statistical confidence achieved should be
stated.
The discussion should provide support for all study conclusions. The impact of ranges and deviations should
be discussed if they affect the study results. Risk assessment and any follow-up conclusions, including
corrective actions, should be stated.
Findings associated with batches or lots that fail to meet the acceptance criteria in the protocol should be
referenced in the final PPQ package, likewise, with any corrective measures taken in response to the cause
of failure.
Conclusions
Conclusions as to whether the data demonstrate that the process is in a state of control should be provided.
Pass or fail results should be stated for each acceptance criteria and corresponding results.
When a unit operation approach is used, PPQ reports are prepared for each unit operation study. A summary
executive report that unifies all the study results to support the overall process PPQ should be written.

### 4.7 Transition to Continued Process Verification

Following a successful PPQ, the CPV plan can be finalized and implemented. Any adjustments to be made
based on the PPQ should be in place prior to the manufacture of post-PPQ batches and should be handled
through the change control procedures. When appropriate, enhanced PPQ-level sampling is recommended
for a period following PPQ (refer to Section 5.0). The CPV plan is developed to detect unplanned
departures during commercial manufacturing from the process as designed. The monitoring measures
should provide continual assurance that the process remains in a state of control (refer to Section 5.0).

67
5.0 Continued Process Verification (Stage 3)
Continued process verification (CPV) is a regulatory and quality assurance approach used in the
pharmaceutical and manufacturing industries. It involves ongoing monitoring, assessment, and validation of
processes throughout the lifecycle of a product. CPV aims to ensure that the processes remain in a state of
control, consistently producing products that meet predefined quality standards and regulatory requirements.
Unlike traditional batch validation, which focuses on verifying processes at specific intervals, CPV involves
continuous monitoring, data collection, and analysis over time. This allows firms to detect deviations, make
adjustments, and ensure that any changes in the process do not negatively impact product quality or safety.
The primary goals of CPV are:
•
To ensure consistent product quality:
̶
By verifying that the manufacturing processes remain stable and within specified limits
over time.
•
To identify potential risks early:
̶
Through continuous data analysis, potential issues can be detected before they become
major problems.
•
To improve operational efficiency:
̶
Continuous monitoring can help optimize processes and reduce waste, leading to cost
savings.
•
To comply with regulatory expectations:
̶
Regulatory agencies, like the FDA, often require CPV as part of GMPs.

### 5.1 Establishing a Monitoring Program

Establishing a monitoring program for CPV is a critical step in ensuring that manufacturing processes
remain in control and consistently produce products that meet quality standards. A CPV monitoring
program involves systematically collecting, analyzing, and interpreting data throughout the lifecycle of a
product to verify that the process is consistently operating within its defined parameters (4, 59, 60).

#### 5.1.1 Purpose and Strategy

The FDA PV guidance defines CPV as the assurance that the process remains in a state of control during
routine production (1). EU GMP Annex 15 defines “Ongoing Process Verification,” also known as CPV, as
documented evidence that the process remains controlled during commercial manufacture (50).

68
Maintenance of a validated state requires having a robust quality system in place encompassing aspects such
as change control, training, auditing, and periodic review (4, 60). A CPV program (Stage 3a and 3b)
provides a means to ensure that processes remain in a state of control following successful PPQ (Stage 2).
The information and data collected during Stages 1 and 2 set the stage for an effective control strategy in
routine manufacturing and a meaningful CPV program. Understanding functional relationships between
process inputs and corresponding outputs established in earlier stages are fundamental to the success of the
CPV program. The program minimizes process failures through early detection of adverse trends and a
quick reaction by applying data analysis and scientific methods for better decision-making. Figure 5.1.1-1 is
a conceptual chart depicting a high level of sampling at Stage 3a, the strategies applied when a lifecycle
change is proposed, and the achieving of process stability.
Continued monitoring of process variables enables adjustments to inputs covered in the scope of the CPV
plan and detects the potential for process variability, ensuring that outputs remain consistent. Since all
sources of potential variability may not be anticipated and defined in Stages 1 and 2, unanticipated events or
trends identified from CPV may indicate process control issues and/or highlight opportunities for process
improvement. Science- and risk-based tools help achieve high levels of process understanding during the
development phase, and subsequent KM across the product life stages facilitates implementing CPV (refer
to Section 3.0 and Section 4.0).

*[Figure 5.1.1-1 Sampling Levels]*

#### 5.1.2 Responsibilities

Effective CPV with variability detection methods, via sampling and statistical assessment, results in
identification of continuous improvement opportunities. Along with the process subject matter expert, the
determination of the sampling plan adequacy and statistical assessment should also be reviewed by
personnel trained in statistical methods and data science, along with the use of appropriate statistical
software. The list of process data to be collected and how it will be analyzed should be stated and the roles
and responsibilities for various functional groups as they relate to collection, analysis, and review of CPV
data, and the documentation requirements identified. Technical Operations, Manufacturing Science and
Technology, Quality Unit, or Development groups are typically responsible for the CPV program.

69

#### 5.1.3 Documenting the Continued Process Verification Program

Planning for CPV begins during the establishment of the commercial-scale control strategy (Stage 1). Stage
3 includes heightened sampling and testing under Stage 3a based on regulatory guidance, and routine
monitoring under Stage 3b (refer to Figure 3.0-1) (1). Trending the defined parameters and attributes of a
qualified process will ensure ongoing product lifecycle management. The Stage 3a CPV follows the
approved commercial manufacturing process and is manufactured under normal conditions by the personnel
who routinely perform each step of the operations. Normal operating conditions include the utilities,
systems, material, personnel, environment, manufacturing procedures, and approved test methods. The
number of Stage 3a batches is estimated based on the Stage 2 PPQ outcome. The manufactured commercial
batches are tested with a heightened sampling plan, as applicable. The statistically relevant sample sizes
collected at various stages are in addition to the routine commercial sampling and testing. The protocol-
driven Stage 3a monitoring will allow for developing a baseline for a data-driven, scientifically sound Stage
3b CPV program.

*[Figure 5.1.3-1 illustrates an example of the development of a Stage 3a monitoring strategy. The specifics of]*

the Stage 3a sampling and testing strategy may not be finalized until completion of PPQ. Therefore, the
PVMP may include general commitments to the planned CPV (Stages 3a and 3b) strategy. High-level
quality system policies and documents outline how various departments interact and how information is
compiled and reviewed to ensure maintenance of the validated state. Under that policy document and/or a
PVMP, a Stage 3a and Stage 3b plan considers the following elements, at a minimum (61, 62):
•
Roles and responsibilities of various functional groups
•
List of monitored process control elements (e.g., CQA, CPP, CMA)
•
Monitored trending (OOS, OOT, deviations or specific events)
•
Data collection process and data format
•
Statistical monitoring (63)
•
Tools, methods and software used for statistical analysis
•
Reassessment of process Hazard Analysis and Critical Control Points (HACCP)
•
Product-specific rules (similar to Nelson rules) of CPV signal recording and management (e.g., on
which signal to take action, what action, when, and by whom)
•
Interface strategy with annual product reviews (annual product reviews should not be used as a
replacement for CPV)
•
Frequency of evaluation and reviews (periodic or continuous, as applicable)
•
Strategy for handling OOS results and deviations, where there are true failures (this is in addition to
analysis of CPV signals)
•
Impact of change on the ongoing monitoring
•
Lifecycle management of the CPV program
•
Reference to CPV site procedures

70

*[Figure 5.1.3-1 Development of a Continued Process Verification Stage 3a Plan]*

The FDA PV guidance recommends that the number of samples should be adequate to provide sufficient
statistical confidence of quality, both within a batch and between batches. Hence, statistical risk-based
approaches are applied to determine the number of Stage 3a batches required (62). Process capability
targets, as appropriate, may be set within the Stage 3a protocol based on process performance indices, such
as Process Performance (Pp) and process performance index (PpK). The PpK estimate can diagnose
decentralization problems aside from the process variation. There are other data-driven methodologies that
can also be applied.
ICH Q10 notes that the process performance and process monitoring systems should provide the tools for
analyzing CMAs, CPPs, and CQAs that are identified in the control strategy. The fine-tuned, enhanced
control strategy may be finalized based on QbD product development data, PPQ results, and the analysis
outcome of the Stage 3a heightened sampling and testing. FDA recognizes the importance of utilizing post-
commercial manufacturing learning to enhance the product control strategy. Process parameters and
material attributes evaluated at Stage 3a provide insight into any process drifts. Statistical process control
charts and multivariate models may be used to identify the degree of impact and any observed trends would
trigger appropriate corrective actions. While CPPs are defined in Stage 1 based on QbD-based product
development, Stage 3a data enables further verification of the design space with ample datasets, while
capturing the majority of the variables encountered by a process. Finalizing a Stage 3b monitoring plan is a
component of the Stage 3a assessment outcome. The ongoing Stage 3b monitoring plan should be
developed such that the sources of variability can continue to be identified along with their impact on

71
downstream processes, materials, and product quality. The Stage 3b plan should provide an opportunity to
shift controls upstream and minimize the need for extensive product testing. Ultimately, the Stage 3 CPV
data may be used for process development of similar products.

#### 5.1.4 Introduction of Legacy Products into Continued Process Verification Stage

*[Figure 5.1.4-1 outlines one possible approach and additional measures to be followed for assessing what is]*

needed to apply the lifecycle approach to a legacy product. Legacy products developed prior to the adoption
of ICH Q8 have not undergone the same rigor during product development as newer products and thus
present a problem for organizations with a portfolio of legacy products (17). Organizations need to place the
legacy product into either Stage 1, Stage 2 or Stage 3 of the PV lifecycle in order to continue meeting
regulatory expectations (1, 2). The scenario calls for a specialized data-driven risk assessment of the legacy
products to determine the next steps.

*[Figure 5.1.4-1 Legacy Product Assessment]*

Risk assessments of legacy processes help to determine the current state of controls and gauge the overall
process design and PPQ efforts. The assessment outcome can direct the organization to place the legacy
product into one of the three possible pathways:
1. Develop a Stage 3b monitoring plan for formulations determined to be robust.
2. Develop a protocol-driven heightened sampling and monitoring plan where additional data
needs to be gathered for determination.
3. Return the product to Stage 1 based on the gaps identified.

72
A structured assessment provides insights into product compliance, sustainability, and any potential patient
risks based on available product/process data including pharmacovigilance, field alerts, etc. The heightened
sampling may result in determining the variability estimates, thus identifying the need for Stage 1
continuous improvement studies. The assessment may also result in modifying the legacy product control
strategy and include the following two aspects:
1. Comprehensive compliance review to summarize and verify compliance with PV regulatory
guidances and emerging guidance based on the available data leading to a plan to address the
gaps identified.
2. Legacy process control strategy review.
The legacy process control strategy review starts with identifying the sources of variability: materials,
methods, machine, measurement, manpower, and mother nature (commonly referred to as the “6Ms” of an
Ishikawa or fishbone diagram). In a manufacturing process, this relates to attributes of material, formulation,
and associated processing parameters including scale-up factors, processing equipment, test methods,
personnel, and facility/utilities. The overall CQA variability is a function of individual component
variability. Once the risk factors are identified through cause-and-effect techniques (e.g., Ishikawa,
pFMEA), risk-rating enables the quantification of associated risk. The criticality assignment is
commensurate with the product characteristics and whether or not the impacted CQA directly affects
patients. The assessment confirms if the current control strategy for each attribute is supported by the
cumulative documented data from relevant Stage 1 studies though the legacy product’s lifecycle. Data from
all three stages of the PV lifecycle (e.g., DOE, manufacturing trials, statistical analysis, annual product
review (APR), commercial batch data) may justify the suitability of the current control strategy. Data from
previous credible experience with sufficiently similar products and processes may also be used to support
the control strategy. If the need to gather additional data is determined, then a statistically sound, risk-based
approach protocol may be applied. A heightened sampling and testing plan can expand the body of
knowledge for a legacy process where Stage 1 studies did not previously apply QbD principles and when
data is missing throughout the product’s lifecycle. The determination of sampling, testing, and data analysis
may be determined based on a review of existing Stage 1 and Stage 2 products, process knowledge, and
product quality and compliance history.
According to the FDA PV guidance, a process is likely to encounter sources of variation that were not
previously detected or to which the process was not previously exposed, hence necessitating extensive
sampling at different manufacturing stages where required. The data collected from heightened sampling
and the historical batches are analyzed statistically to identify patterns and insights into the impact of
potential sources of variability on the CQAs.

### 5.2 Data Science

Data science plays a crucial role in CPV by leveraging advanced data analytics, machine learning, and
statistical techniques to optimize manufacturing processes and ensure consistent product quality. In CPV,
data science helps in continuous monitoring, early detection of deviations, process optimization, and
predictive modeling to improve decision-making.

73

#### 5.2.1 Continued Process Verification Data Acquisition and Management

Acquisition of manufacturing process data and centralized data management (e.g., product attributes,
process parameters, and attributes) are instrumental in the efficiency of the CPV designed to fit the
regulatory requirements in terms of DI and data security. CPV is at the heart of the current digitalization
efforts in the industry targeting continuous process improvement and productivity improvements. As much
as possible, data acquisition should be performed directly from the instruments, from which the data are
automatically acquired and parsed for subsequent use. Strong data governance and DI controls should be in
place to ensure data consistency and alignment with industry-standard ontologies and taxonomies.
Appropriate format for statistical analysis, supportive of streamlined CPV and annual product quality review
(APQR) and yearly biologic product report (YBPR) are required. Metrology checks, with their traceability,
can be embedded in the data acquisition process, ensuring the instruments are continuously fit for use and
qualified – those data can then offer a framework for their predictive and prescriptive maintenance in
relation to the CPV results. Seamless data acquisition and centralized data management (use of validated
cloud environments being the current trend) constitute the launchpad to leverage machine learning and
artificial intelligence. These activities allow continuous improvement in terms of efficiency of execution.

#### 5.2.2 Classical Statistical Process Control Assessment in Continued Process Verification

Classical statistical process control (SPC) tools are the backbone of CPV for monitoring both product and
process and for the maintenance of the validated state of the process. The choice of the control charts should
be made according to the typology of the data. More specifically, it is important to distinguish between:
•
Control charts for variable numerical data that are process control elements for which the group of
units controlled in the batch group size may be ≥ 1 and are measured on a numerical scale.
•
Control charts for qualitative attribute data that consists of the count or proportion of
nonconforming or defective units in the group of units controlled in the batch. Control charts for
attribute data are used generally on qualitative data for DP batches, which are generally composed
of discrete units of the medicinal product.
Choice of the control chart should consider elements such as the number of units in the controlled group, the
nature of the distribution of the process control (e.g., normal, other characterized distribution,
uncharacterized distribution), and the magnitude and/or the consistency of the shifts that should be detected.
For Shewhart control charts (refer to Section 10.0 (Appendix II)) with symmetric control limits around the
central line, sensitizing control rules may be added allowing earlier detection of trends or nonrandom
variations of the process (e.g., drift, shift, change in variability). The number of added rules should remain
reasonable as it comes with the risk of increasing the number of false alarms (false-positive rate)
significantly.
Multivariate control charts may be used to provide a graphical depiction of a statistic that represents more
than one process control element: the approach allows both detection of single elements but also breaking
points in the correlation of the different elements.
Practical tools or measures have been suggested for minimizing false-positives among process data plotted,
as is, on charts and for streamlining the implementation of the CPV stage (64).

74

#### 5.2.3 Digital Twins

Digital twins are a virtual replica of a process (65). They can have various applications and benefits in CPV
Stage 3 activities since CPV is more than just univariate trending to demonstrate capability. A digital twin
can be used to support justification of PARs, as well as augment information in the event of a deviation.
Integrated process modeling (IPM) is a lifecycle companion for CPV. Digital twins link process
understanding and CPP–CQA relationships of single-unit operations with the entire process chain. By
propagating distributions across the unit operations using Monte Carlo simulations, the probability of
product quality failure can be computed depending on the actual performances and variability of the
individual unit operations (66). The benefits of this approach, in terms of CPV tasks, is that intermediate
acceptance criteria for CQAs can be deduced for each step.
The digital twin assesses the quality of the CQAs of a complete process chain depending on the distributions
and set points of all CPPs of the individual process steps.
PARs can be deduced, as manufacturing data are provided from a real CPV into the digital twin which can
justify or improve the control strategy, based on the interactivity of the process unit operations and
probability of failure thresholds (refer to Figure 5.2.3-1).

*[Figure 5.2.3-1 Definition of Proven Acceptable Ranges (e.g., elution pH) of an Early Unit]*

Operation
Overall, a digital twin can act as a system that recommends suggestions supporting continuous improvement
of the control strategy to avoid batch failure. However, such systems need to be qualified.

75
The digital twin approach with process modeling can be used for integrating the product lifecycle, in line
with ICH Q12: Technical and Regulatory Considerations for Pharmaceutical Product Lifecycle
Management, within the CPV program to support (4):
•
Regulatory compliance via justification of deviations – Basing decisions on sound statistical
intermediate acceptance criteria
•
Adaptive control strategy throughout the ICH Q12 lifecycle – Use of the digital twin as a
recommended platform to provide sound science evidence of process control systems (PCS) for
continuous improvement
•
Commercial manufacturing optimization by operational flexibility – Opportunity to use complete
multivariate autoregressive models available from PCSs and control in the multivariate space
•
Real-time release – Avoiding batch failure and predicting product quality with real-time deployed
IPM

#### 5.2.4 Artificial Intelligence Applications in Continued Process Verification

Two artificial intelligence (AI) algorithms (neural networks and support vector machines) were introduced
by the European Pharmacopoeia as valid chemometric methods applied to analytical data in pharmaceutical
contexts and the FDA has described a methodology for AI application in medical devices (67, 68). There are
also strategies described to qualify AI algorithms for GxP environments or establishing the foundations for
good practices of applying AI in regulated processes such as being used for CPV-signal decision-making
process with algorithms supervised with process knowledge elements (69).
Stage 3 is typically a lengthy manufacturing phase where extensive data is accumulated, trended, and
analyzed to ensure that the process is always under control. The drug manufacturing operations and the
implemented industrial processes are verified at Stage 2, but variability can be introduced due to the huge
number of elements involved in the industrialization of the drug design.
Since AI is based on a multivariable approach that employs statistical capabilities to detect unexpected
interactions and predictability within complex interconnected factors, it can monitor complex processes with
numerous variables to make fast operational decisions, such as image recognition, multivariate prediction,
or fast classifications. One of the main root causes of issues in pharmaceutical manufacturing is variability
in human interactions in production which could otherwise have been detected by emulated human (i.e., AI)
supervision (69). AI is able to apply data intelligence to specific and repetitive tasks, like detecting
anomalies in continuous automated processes to keep the process under control via a multivariable
approach.
Note: It is the responsibility of the practitioners that utilize AI to assure that applications of AI are in
compliance with current regulatory requirements (70).

### 5.3 Reacting to Continued Process Verification Data Signals

The practical implementation of CPV is expected to reduce the cost of quality, provide opportunities to
improve product quality, increase product and process knowledge, and reduce regulatory compliance risks.
A system or systems for continually and efficiently detecting unplanned departures from the process as
designed is essential to accomplish the CPV goal. Collection and evaluation of process performance data
should allow detection of process drift if adequately monitored through application appropriate
methodologies. These efforts can identify variability in the process, signal potential process improvements,

76
and provide opportunities to mitigate and control those variabilities if properly carried out. The FDA PV
guidance specifically states that trending should be performed in such a way that it guards against
overreaction to individual events. An upfront approach for addressing the relevant variables and signals is
therefore important in avoiding under-detection or overreaction. The CPV signals are “yellow flags” that
represent the process variability and drifts and the severity of the signal is then determined (71).

#### 5.3.1 Continued Process Verification Decision-Making

Routine CPV trending within established alert limits, signal detection and action enables organizations to
maintain an enhanced product control strategy. A CPV signal can be for a quality attribute, material
attribute, process parameter defined in the control strategy, and/or performance indicator with varying
degrees of severity. A risk-based categorization of signals received (e.g., CPP, CQA) is also required, as all
signals are not equally significant, which leads to requiring different action plans to address the signals on a
case-by-case basis. When a significant amount of data is available, the suggested action in Figure 5.3.1-1
may be applied. Paths are determined based on practical relevance and the statistical strength of the signal.
For instance, taking Path 1 is proposed when the observed drift results from an assignable event extrinsic to
the process and characterized by an isolated event which may or may not have been identified as a quality
management system (QMS) deviation or incident.

*[Figure 5.3.1-1 Decision-Tree Guideline (Stage 3b)]*

77
The CPV signal, once determined not to be an OOS/OOT/deviation, is further assessed for statistical
significance. A change review step provides insights into any potential impact of the sources of
variability, that is, personnel, raw material, process, test method, equipment, utilities, facility, and
environmental conditions. Understanding the causes of variability allows for control at the source. The
preliminary assessment allows for determining the signal as either assignable, common, or special-cause
variation. The proposed path of either continuing monitoring, assessment of control strategy, or a change
requirement is then documented. Defined systemic decision-making steps guard against overreaction to
individual events as well as against failure to act on the observed process variability. The systematic steps
justify the robustness of routine CPV operational decision-making process, reduces person-to-person
variability, and minimizes operational delays, holds, or product loss. A CPV program with both Stage 3a
and Stage 3b would need different approaches for each stage because the data set available during Stage
3a is less compared to Stage 3b. When limited data is available, a science- and statistics-driven deep dive
into the available data is warranted to understand what actions can be taken until additional data are
generated.

### 5.4 Applying Continued Process Verification for Lifecycle Change

Management
Applying CPV to lifecycle change management refers to the integration of CPV principles and practices to
monitor and ensure consistent product quality and process stability throughout the entire lifecycle of a
product, especially during and after any changes in the process or product.
In regulated industries like pharmaceuticals, medical devices, or manufacturing, lifecycle changes—such as
adjustments in raw materials, equipment upgrades, process optimization, or even regulatory changes—are
inevitable. Applying CPV in these contexts helps ensure that these changes do not negatively impact the
product's quality, safety, or compliance with regulatory requirements.

#### 5.4.1 Quality Systems and Continued Process Verification

The best tools for continued confirmation and refinement of process control are the quality system elements
that provide feedback and objective measures of process control. The tools are based on product and process
understanding and are enabled by procedures that monitor, measure, analyze, and control the process
performance. Communication of CPV signals to the manufacturing, quality, and regulatory stakeholders (for
improvement and/or compliance reasons) is an iterative and essential part of the lifecycle. Feedback
mechanisms, where required, can vary between immediate (intra-batch or real-time), after each batch, after a
series of batches, or after a defined period. Figure 5.4.1-1 depicts integration of sources of data and
information for the purpose of process control to enable real-time continuous improvement decision-
making.

78

*[Figure 5.4.1-1 Integration of Data Sources for Improved Process Controls]*

#### 5.4.2 Regulatory Commitments and Established Conditions

Although the common technical document (CTD) format has been defined for regulatory submissions,
harmonized approaches to defining what changes would require a submission have yet to be determined.
Established conditions (ECs) are legally binding information (or approved matters) considered necessary to
assure product quality. They are contained in a regulatory submission, proposed by the applicant, and
approved by the regulatory authority. Any change to ECs necessitates a submission to the regulatory
authority that is consistent with regional regulations or guidances or has been agreed upon during the review
and approval of the marketing application. ICH Q12 provides a framework to facilitate the management of
post-approval CMC changes more predictably and efficiently across the product lifecycle (4). It allows
regulators to better understand the firm's PQS for the management of post-approval CMC changes (72).
Incremental changes over time should also be considered, and the need for any additional actions (e.g.,
enhanced sampling) should be assessed (50). The lack of harmonized requirements for lifecycle
management is a disincentive for manufacturers to make improvements to increase process robustness. One
post-approval change can take three to five years to implement across all regions, resulting in additional
costs and potential supply disruption due to the need for multiple inventories since opportunities for
“operational flexibility” offered by the science- and risk-based approaches in ICH guidelines Q8–Q11 have
not been fully realized. Additional information and approaches to manage process changes can be found in
PDA Technical Report No. 91: Post Approval Change Management and Implementation for Biologics and
Pharmaceutical Drug Products — A User’s Guide.

### 5.5 Continued Process Verification Data Review and Reporting

Stage 3a is a product-specific, protocol-driven initial assessment following a new product launch that uses
data from all stages of the PV lifecycle for statistical evaluation to gain deeper product understanding and is
pivotal in understanding product variability (62). The Stage 3a protocol may be initiated upon completion of

79
Stage 2b. The number of batches required for Stage 3a should be statistically significant to provide
sufficient data, understand variation in the process, and establish limits for Stage 3b. To achieve this goal,
the sampling and testing requirements may be maintained at the same level of Stage 2b, as applicable.

#### 5.5.1 Stage 3a Reporting

Stage 3a is designed to allow close monitoring of process parameters and quality attributes while detecting
the undesirable process variabilities and providing an opportunity to enhance the product control strategy.
Additional sampling and testing are typically conducted at Stage 3a. Confirming the Stage 3b monitoring
plan is part of Stage 3a. Evaluation of data from Stage 3a and Stage 3b is a valuable resource for product
development and risk mitigation of similar products and processes. The assessment demonstrates an
organization’s compliance in establishing an enhanced product control strategy and quality. Stage 3a allows
for an improved understanding of the sources of analytical and process variability which is important for
acquiring further knowledge of the newly qualified commercial manufacturing process and suggesting
continuous improvement or enhancement of the initial control strategy changes at the earliest opportunity.
The Stage 3a report may systematically summarize:
•
Statistical assessment to determine the impact of material attributes
•
Statistical assessment to determine the impact of process parameters
•
Statistical assessment of quality attributes
•
Multivariate correlation analysis
•
Impact of changes, if any
•
Product stability data analysis
•
Inter-batch and intra-batch variability
•
Estimating inherent process and method variability
•
Process capability and robustness indices
•
Verification of Stage 1 (QbD) design space with newly gathered data*
•
Review of OOS, deviations, complaints, and field alerts; where applicable, data collated for APQR
should be utilized
•
Enhance control strategy recommendations and conclusions
•
Ongoing CPV (Stage 3b) monitoring criteria and justification
*Note: The preliminary process capability assessment needs to be interpreted with caution considering the
low number of batches.
A product-specific quality dashboard may be a component of a Stage 3a assessment for determining product
robustness, similar to any dashboards being used in Stage 2b (73). The dashboard can address the elements
in FDA’s Quality Metrics Reporting Program, where the Agency suggests optional metrics as evidence of
manufacturing robustness and a commitment to quality. Data reported may suggest the manufacturing site
and processes are of low risk. Each processing stage can be evaluated against a predetermined process
capability target to provide an overall product performance synopsis. The Stage 3a assessment is a resource
for product development and risk mitigation activities (74). A trained statistician should be responsible for
the selection of the statistical tools employed in this assessment. The process and product understanding
gained can be applied to new, similar process or product development.

80

#### 5.5.2 Stage 3b Reporting

SPC tools and predefined rules are primarily used in CPV to alert to potential drifts. Triggering a signal
indicates with reasonable statistical confidence that something may have changed within the process that
may have an impact on the product's quality, safety, process robustness, and control. While these signals
should trigger a response reaction, the reaction strategy should depend on the risk level. The continual Stage
3b sampling and testing requirements may be included in the master batch record and monitored batch-to-
batch electronically through other controls. Systems should be in place to ensure that Stage 3b signals, if
any, are addressed prior to the start of processing the next batch of the product or similar products. Qualified
monitoring systems with real- or near-real-time data trending integrate product information, parameters, and
quality attributes, thus allowing for swift decision making on an observed signal. Section 5.3.1 discusses a
decision-making process that can be followed. The assessment outcome is documented electronically or
according to standard operating procedure (SOP) requirements.

#### 5.5.3 Utilizing Continued Process Verification for Annual Product Review/Yearly

Biologic Product Report
Ongoing monitoring allows for early detection of potential process drift. Where the corrective actions are
required, they could be implemented before reaching the failure point. On-going monitoring and corrective
and preventative action (CAPA) implementation should not be postponed until the next APQR season but
executed for each batch manufacturing. However, the CPV data summary should be used or referenced for
completing the applicable sections of an APQR report (75). Stage 3b covers many APQR components, a
few of which are identified in Table 5.5.3-1. The opportunity to continually analyze process data more often
than in the traditional APQR makes the CPV program critical in detecting drifts and proactively taking
action (if required) on those signals to avoid potential process failures.

81

**Table 5.5.3-1 Sample of Annual Product Review or Yearly Biologic Product Report Elements**

Supported by Continued Process Verification
Report Elements/Sections
Supported by CPV Data
Yes
No
Manufactured Batches Review
X

Raw Material Attribute Review
X

Environmental Monitoring Review
X

Media Fill Review
X

PM / Cal Review

X
Yield Trend Review
X

Training Review

X
Change Trend Review (Continuous
Improvement included)
X

CPP Trend Review
X

CQA Trend Review
X

Re-Qualification / Validation Results
Review
X

Non-Conformance / Investigation
Review

X
Rejected Batch Review

X
Complaint Trend Review

X
Field Aer / Recall Review

X
Retain Sample Review

X
Quality Agreement Review

X
Review of Previous APR

X

82

#### 5.5.4 Process Validation Considerations: Vaccines, Cell Therapies, and Combination

Products
PV for vaccines and cell therapies, in general, will follow the same principles described in this technical
report (e.g., use Stage 1 data to define process design and control strategy based on risk- and science-based
approach, use Stage 2 to finalize and qualify analytical methods for PPQ studies, transition to Stage 3 for
CPV) with the following recommended product-specific considerations providing science and risk
justifications:
•
Vaccines
̶
Fermentation or cell-culture steps and bulk purification of multivalent vaccines may
consider a family approach as long as the manufacturing process for each individual
component required for the final product is similar (e.g., similar unit operations for
purification, same media/raw materials, similar sterilization processes)
̶
Formulation and filling of bulk formulations may consider a family and/or bracketing
approach considering the range of fill volumes into vials or syringes
̶
Impact of time-out-of-refrigeration or hold times are studied and monitored*
̶
Lyophilization processes may consider family and/or bracketing approaches considering
the similarity of the freezing, drying, and back-fill steps
*Note: Biologic material stability needs special attention.
•
Cell Therapies
̶
Nature of the cell therapy, allogenic vs. autologous, may present challenges for PV
̶
Potential use of split samples (e.g., apheresis material or isolated cells) to assess within- and
across-lot variability; autologous therapies represent single lot vs. conventional
manufacturing where multiple lots can be manufactured
̶
Use of healthy donor material vs. patient material
̶
Chain of identity must be considered, especially in autologous products
̶
Availability of vector lots for cell transductions
̶
Potential extended characterization testing strategies and data evaluations, as these
therapies are still evolving due to patient-specific conditions (e.g., post-PPQ)
̶
Use of nonparametric statistics due to the nature of the assays required for these products
The following PDA technical documents may be useful in designing PV programs for vaccines and cell
therapies:
•
ANSI/PDA Standard 02-2021, Cryopreservation of Cells for Use in Cell Therapies, Gene
Therapies, and Regenerative Medicine Manufacturing: An Introduction and Best Practices
Approach on How to Prepare, Cryopreserve, and Recover Cells, Cell Lines, and Cell-Based Tissue
Products
•
•
•
Biopharmaceutical Drug Substance Manufacturing
•
•
•
Points to Consider No. 11: Development, Classification, Manufacture, Control, and Testing of
Plasmids and Vectors Used in ATMP Production

83
PV for drug-device combination products generally will follow the same principles in Stages 1–3 described
in this technical report with some product-specific considerations:
•
The design and development of the devices are confirmed as part of the qualification
•
Family and/or bracketing approaches may be considered if the device is the same across multiple
fill volumes
•
PPQ activities may be split if device assembly is fully segregated from formulation and fill
operations
PV for drug-device combination products is generally performed for the assembly and sterilization
processes with the design and development of the devices confirmed as part of the qualification.
Transportation studies with chemical (e.g., degradation under different conditions) and physical (e.g.,
vibration) aspects demonstrate stability during transportation. FDA 21 CFR 820.30 Design Controls, as well
as ISO 13485:2016 Medical Devices — Quality Management Systems — Requirements for regulatory
purposes also stipulate that each manufacturer establish and maintain procedures for validation or, where
appropriate, verification, review, and approval of design changes before implementation. The design control
validation activities include simulated-use testing, reliability testing, clinical/nonclinical evaluation, and
software validation. Some design verification (e.g., bench and/or preclinical testing) and validation (e.g.,
human factors testing) should be completed prior to the initiation of clinical studies for the combination
products (76, 77).

84

## 6.0 Process Validation Enabling Systems and Technology

Section 6.0 presents tools and methods to assist in the planning and performance of the PV program. It
includes sections on risk and KM, statistical methodology, PAT, and TT. These tools can be used to
identify, capture, and communicate information needed for the design and assurance of process control.
They facilitate informed decision-making, prioritization of activities, and interpretation of results related
to the PV effort.

### 6.1 Application of Risk Management

A detailed explanation of a QRM program used to support the PV effort can be found in TR 54 in the “How
to Use Quality Risk Management as an Enabler” section. Comprehensive lists of risk management tools can
also be found in TR 54, including a comparison of their respective benefits, as well as in ICH Q9(R1) (37,
78).
QRM is an enabler or an enabling process. When correctly applied, it adds supportive elements to the
product lifecycle and other systems (e.g., the PQS). The application of risk management principles and
approaches is instrumental in effective decision-making in the PV lifecycle.
Management of variability is one example of applying risk management in the validation lifecycle. The
level of control required to manage variability is directly related to the level of risk that variability imparts to
the process and product. The use of risk management to address variability requires an understanding of the
origin of the variability, the potential range of the variability, and the impact of the variability on the
process, product and, ultimately, the patient.
Risk assessments should occur early in the lifecycle. Risks should be controlled appropriately to an
acceptable level and effectively communicated. Risk management increases product and process
knowledge, which translates into greater control of product and process variability and a lower residual risk
to patients.
The PV lifecycle provides continued assurance that processes will manufacture product in a predictable and
consistent manner. Where decisions related to product quality or process performance are made, risk should
be assessed at several points throughout the PV lifecycle.

85
QRM should be applied throughout the PV lifecycle including in the following areas:
•
Stage 1 – Process Design
̶
Identification of product attributes that may affect quality and patient safety.
̶
Criticality analysis of product CQAs.
̶
Cause-and-Effect Analysis or Risk-Ranking and Filtering, which link the process steps and
parameters to product quality attributes and process performance for the categorization of
process parameters (e.g., CPP identification). These can be used to screen potential
variables for future process characterization (e.g., DoE) and testing.
̶
Preliminary Hazards Analysis or early Failure Mode and Effects Analysis (FMEA).
•
Stages 1-2 – Transition from Process Design to Process Qualification
̶
Determining process control strategies that address the risk of failure for each process step.
̶
Evaluation of residual risk remaining or created as a result of risk mitigation, process
improvement, and process knowledge.
̶
Risk-based gap assessments and risk assessments for TT.
•
Stage 2 – Process Qualification
̶
Determination of process steps and parameters to test in PPQ, including sampling plans and
the confidence and coverage they provide.
̶
Facility and equipment/system impact assessments to prioritize qualification efforts.
̶
Determination of effective acceptance criteria for each test function.
̶
Analytical test results and deviations.
•
Stage 3 – Continued Process Verification (CPV)
̶
Determination of parameters that should be monitored as well as how they should be
sampled and analyzed (e.g., sampling plans, confidence required, and length of enhanced
sampling).
̶
Evaluation of commercial manufacturing data to determine the best course for process
improvement.

*[Figure 6.1-1 depicts a QRM lifecycle approach for process development and validation (79).]*

86

*[Figure 6.1-1 Quality Risk Management: A Lifecycle Approach for Process Development and]*

Validation

#### 6.1.1 Risk Management in Stage 1 – Process Design

Conducting risk assessments during Stage 1 lays the groundwork for variables to be controlled and
monitored. It also determines the extent to which continued monitoring will ensure a state of control during
routine manufacturing. This begins with a criticality analysis: An initial definition of product quality
attributes and an assessment of their relative importance.
Inputs for the criticality analysis are:
•
QTPP
•
All relevant prior knowledge for the product being evaluated
Outputs from the criticality analysis are:
•
Initial CQA list
•
Initial relative severity listing of the CQAs
Criticality of product attributes is assessed on a quantitative scale (i.e., not only “yes” or “no”). This is
accomplished by performing a risk assessment analysis that uses Severity and Likelihood, rather than the
usual Severity and Occurrence. The process, which is iterative, is based on building product and process
knowledge. The level of severity assigned is based on the potential patient impact, while likelihood is based
on how much information (product knowledge and clinical experience) is available to determine the
potential severity level for the specific attribute. Part of the output of this assessment will be further
scientific studies to reduce the amount of uncertainty for higher-risk attributes (refer to Table 6.1.1-1) (79).

87

**Table 6.1.1-1 Product Attribute Criticality Risk Assessment Example**

#### 6.1.2 Risk Management in Stage 2 – Process Qualification

Risk management in Stage 2 is much more tactical. Assessments will assist in designing the sampling and
testing strategy provided in the validation protocol (e.g., executed tests, sampling location and size). They
are also used to fine-tune the control strategies drafted in the Process Design stage.
Risk management is also commonly applied during the facilities, utilities, and equipment qualification phase
of Stage 2. Functional specifications are reviewed to help plan qualification activities. Higher-risk
parameters require a higher level of performance control, while lower-risk items can be satisfied by the use
of commissioning activities with appropriate risk reviews and control. Risk assessment output ratings can be
applied to define a commensurate level of testing in the plan (refer to Table 6.1.2-1).

Likelihood
Low
Medium
High
Large amount of
in-house
knowledge, large
body of
knowledge in
literature
Some in-house
knowledge and
scientific
literature
No/little in-house
knowledge, very
limited
information in
scientific
literature
Severity
Medium
(moderate patient
impact)
Potential
Potential
Potential
Low
(marginal patient
impact)
Non-Critical
Non-Critical
Potential
High
(catastrophic
patient impact)
Critical
Critical
Critical

88

**Table 6.1.2-1 Risk-Based Qualification Planning**

Risk assessments performed during Stage 2 not only help prioritize qualification activities but also aid in the
ongoing collection of knowledge and the planning of statistical sampling. Generally, three factors—
Severity, Occurrence, and Detectability (with controls in place)—are evaluated to determine the relative risk
of specific failure modes. Each factor contributes to the validation plan in a different way.
•
Severity – Determines the level of testing (or monitoring) required during Stage 2. The higher the
severity rating for a particular attribute, the higher the statistical confidence required (Table 6.1.2-
2).
•
Occurrence – The occurrence rating is tied directly to variation (probability that an
attribute/parameter goes outside acceptance criteria). Mitigation measures to reduce occurrence
include further development to reduce variation (process improvements), enhanced control or
maintenance of equipment, etc. Testing at this stage reduces additional and more costly testing
during Stage 3. When the true occurrence rate is unknown, additional development or engineering
studies may be required. When mitigation is complete, the occurrence ranking and overall risk
rating for the failure mode can be updated with the new process knowledge.
•
Detectability – Detectability is typically mitigated by increasing controls, testing or sampling. If
the level of assessed controls is insufficient, the control strategy should be updated or new controls
created. The HACCP system is an example of control, as are procedures and training. Controls are
not always technology-based; increase of detectability may as well be driven by procedures and
training. The HACCP is a useful QRM tool that can help in enhancing controls.

**Table 6.1.2-2 Severity Rating and Sampling Requirements Risk**

Risk Assessment
Output Ratings
Qualification Planning
High
Testing to satisfy validation requirements will occur during qualification.
Documentation and sampling requirements are high.
Medium
A blend of Qualification and Commissioning activities can be used to satisfy
validation requirements. Sampling requirements are moderate given
appropriate controls and risk reviews.
Low
Testing to satisfy validation requirements can occur during commissioning
phases. Appropriate controls and risk reviews should be in place.
Severity Rating
Statistical and Sampling Requirements
Example Confidence Level Required
High
+++
99%
Medium
++
95%
Low
+
90%

89

#### 6.1.3 Risk Management in Stage 3 – Continued Process Verification

The CPV stage is the longest segment of the PV lifecycle. It starts with an assessment of process capabilities
and continues through a review of the output from process characterization, PPQ, and historical data. The
level of enhanced sampling that may be implemented, as necessary, before commercial manufacturing
starts, can be determined by a statistical review of the PPQ data. The capabilities of the processes help
determine the level of enhanced sampling for an attribute and the length of time that sampling should
continue at that level (refer to Section 6.2). The statistical capability of the process is usually related to the
level of occurrence rating in the risk assessments (higher occurrence leading to lower capability). The more
robust a process, the lower the occurrence rate for a potential failure and the lower the overall risk to the
process. The level of risk can also determine the review period for certain product and process attributes
(63).

#### 6.1.4 Material Risk Management Considerations

Often subtle changes in raw materials can lead to significant and unforeseen variations in production. For
example, a change in elution profile was due to lot-to-lot variation in particle size distribution in a
chromatographic resin (78, 80, 81). Applications like NIR or even nuclear magnetic resonance can be used
to ensure that raw materials meet their specifications and CMAs. An important risk-mitigation strategy is for
drug manufacturers to work with their suppliers so that each understands the other’s quality systems and
demands.

### 6.2 Statistical Analysis Tools

Successful PV depends on sound, scientific data and information. Table 6.2-1 illustrates where various
statistical methods are most used in the validation lifecycle process. Three of the methods—DoE, Statistical
Process Control, and Process Capability—are described in more detail in Sections 6.2.1–6.2.3, as well as in
Section 9.0 (Appendix I). Additional information on statistical methods can be found in TR 59 (63).

90

**Table 6.2-1 Statistical Methods and the Typical Stages at Which They are Used**

Statistical Tool
Stage 1
Process
Design
Stage 2
Performance
Qualification (PQ)
Stage 3
Continued Process
Verification (CPV)
Descriptive Statistics (e.g., mean, standard
deviation)
X
X
X
Statistical Process Control Charts
X
X
X
Statistical Power and Sample Size
Determination
X
X
X
Process Capability Study and Capability Indices
X
X
X
Design of Experiments (DoE)
X

Measurement Systems Analysis (Gage R&R)
X

Robust Process Design / Tolerance Analysis /
Taguchi Methods
X

Multi-Vari Chart
X

Regression and Correlation Analysis
X

Analysis of Variance (ANOVA)
X
X
X
Levene / Brown-Forsyth, Bartlett, Fmax tests for
Variation
X
X
X

91
Statistical Tool
Stage 1
Process
Design
Stage 2
Performance
Qualification (PQ)
Stage 3
Continued Process
Verification (CPV)
Hypothesis Tests / Confidence Intervals
X
X
X
Pareto Analysis*
X

X
Acceptance Sampling Plans

X
X
Normal and Nonparametric Tolerance Intervals

X
X
*PPQ data is insufficient to perform a Pareto analysis in general (contrary to the large amount of development and CPV data). If Pareto analysis is
attempted to be used during PPQ, it may be useful to include Stage 1 data for this kind of analysis.

92

#### 6.2.1 Design of Experiments

The statistical DoE is a powerful tool often used during Stage 1 Process Design to:
•
Determine which process input parameters have a significant effect on the output quality attributes
•
Help determine the "design space" levels of the input parameters that will produce acceptable
output quality attribute results
•
Optimize the output of quality attributes, such as yield and acceptable levels of impurities
•
Determine the levels of input parameters that will result in a robust process that reduces its
sensitivity to parameter variability
DoE differs from the classical approach to experimentation, where only one parameter is varied while all
others are held constant. That "one factor at a time" type of experimentation cannot determine process
parameter interactions, where the effect of one parameter on a quality attribute differs depending on the
level of the other parameters. The basic steps for the DoE approach are summarized below:
1. Determine the input parameters and output quality attribute to study
̶
This is best done as part of a team approach to identify potential CPPs and quality attribute;
in many cases, the process may be well-understood and the parameters and attributes for
experimentation readily determined.
̶
If there are many input parameters, an initial screening design, such as a fractional factorial
or Plackett-Burman design, may be used (82). The purpose of a screening experiment is to
identify the critical parameters that have the most important statistical effect on the quality
attributes. Since screening designs do not always clearly identify interactions, the reduced
number of parameters identified by the screening experiment will be included in further
experiments.
̶
If the change is to an existing process, it is often valuable to construct a multi-variable chart
or SPC chart from current process data (83). A multi-variable chart can be used to identify
if the biggest sources of variation are within-batch variation, between-batch variation, or
positional variation (e.g., between fill heads on a multi-head filler). Variance components
can also be calculated from the data to determine the largest component of variance.
Process parameters that could be causing the largest sources of variation are then identified
and included in subsequent experiments.
̶
Data may also be used to create SPC charts to determine if the process is in statistical
control. Since a lack of statistical control will contribute to experimental error variation, it
will be more difficult to understand the results of an experiment if the process is not in
statistical control. Lack of statistical control may also mean that there are "lurking
variables" not on the list of process parameters that are contributing to process variation.
2. Conduct experiment(s) to determine which parameters have a significant main or
interaction effect on the quality attributes
̶
This will usually be a full factorial design for two to four parameters. A full two-level
factorial design has a low (-) and high (+) level selected for each factor (parameter). At
least one experiment is run at each combination of the factor levels. For two factors, 22 = 4
combinations exist; for three factors, 23 = 8 combinations exist; for four factors, 24 = 16
combinations exist. Full factorial designs are seldom used for more than four factors since
so many experiments are required. Fractional factorial experiments, where only one-half or
one-quarter of the combinations are used, are often done for four to six parameters.

93
̶
If possible, control runs at the nominal midpoints (0) between the low (-) and high (+)
levels of the factors should be included in the experimental design. Using control runs at
the beginning and the end of the factorial experiment and, ideally, also during the factorial
experiment, will allow detection of any process drift during the experiments. Control runs
at the beginning and end of experiments that do not give similar results may indicate the
presence of another uncontrolled variable. Replicate control runs at the nominal values also
provide a true estimate of inherent process variation (called experimental error). In
addition, these can serve as a basic check for effect between the parameters and the quality
attributes.
̶
If possible, the parameter effects on both the mean and variation of the quality attributes
should be determined. Some parameters may affect the mean only, variation only, or both.
This information can be used to minimize the variation while optimizing the mean, which
results in a robust process. Standard DoE approaches, as well as the Taguchi method, may
be used for this (84).
3. Optimize the response surface experiments and determine design space
̶
Occasionally, the science behind a process will be understood well enough to skip
screening and two-level factorial experiments and start with response surface experiments.
If enough information is learned from two-level factorial studies, no additional experiments
will be required, and this step can be skipped. However, it is often necessary to conduct
more extensive experiments at three to five levels for the parameters identified as the most
important from earlier factorial experiments. The goal of response surface experiments is to
develop an equation that accurately models the relationship between the input parameters
and the output quality attributes. This equation is then used to determine the design space
region of the input parameters where the output quality attributes will meet specifications.
̶
The most common response surface experimental designs are Box-Behnken, central
composite, three-level full factorial, and computer-generated optimal designs (D-, G-, I- or,
more generally, OMARS (Orthogonal Minimally Aliased Response Surface) (82). All of
these have experiments where at least three levels of the parameters are included in order to
estimate curvature (quadratic) effects. The results are analyzed to determine regression
equations to model the process with such computer programs as Minitab, JMP, and SAS
(83).
̶
Another aspect of optimization is to develop a robust process. The regression equations
already developed can be used to locate input parameter settings that are "forgiving,” that
is, when the process is run at these settings, variation in the input parameters will not result
in unacceptable variation in the quality attributes. The idea is to stay away from boundaries
or areas in the parameter design space where variation in the parameter will result in rapid
quality deterioration. This is accomplished by using the quadratic and interaction effects to
minimize variation. The Taguchi method of experimental design uses a slightly different
approach to also develop robust processes (85, 86).
̶
The results may also be used to calculate the percent of total variation attributable to each
parameter. This is called a variance components analysis. The input parameters
contributing the most to the output quality attribute variation can be controlled the most
tightly, made robust by running the process at a particular level of the other parameters, or
improved by a process design change to reduce the impact of the parameter.
4. Confirm DoE results

94
Once the design space region for the input parameters that results in quality attributes that meet
specifications has been determined, additional experiments can be used to confirm the expected DoE results.
This may consist of running a few experiments at various parameter combinations to verify that the DoE
equation adequately predicts the results. In some cases, where there is already good confidence in the DoE
results, Stage 2 results may be used. For further information on DoE, refer to Introduction to Statistical
Quality Control, Empirical Model-Building and Response Surfaces, Statistics for Experimenters: Design,
Innovation, and Discovery, Second Edition and Optimal Design of Experiments: A Case Study Approach
(87-90).

#### 6.2.2 Statistical Process Control and Process Capability

SPC may be used to determine if a process is stable, predictable, and in statistical control. Process capability
is used to determine if the process is capable of consistently meeting specifications (91).
A process is considered stable or in statistical control when only random variation around a stable process
mean is observed, that is, only natural, common causes of variation are present. Figure 6.2.2-1 illustrates a
stable process that is in classical statistical control. Figure 6.2.2-2 shows a process that is not in statistical
control and had a special cause of variation occur at Lot 5.

*[Figure 6.2.2-1 Process in Classical Statistical Control, Common Cause Variation Only]*

*[Figure 6.2.2-2 Process Not in Statistical Control, Special Cause Variation]*

95

*[Figure 6.2.2-3 shows a more complex form of a process that is also stable and in control. This pattern is]*

typical of many processes where there is variation both within and between lots, but the variation between
lots is in control. One purpose of validation and CPV is to determine both within- and between-lot
variations.

*[Figure 6.2.2-3 A Process with Both Within-Lot and Between-Lot Variations]*

Statistical process control charts are used to determine if a process is stable and in statistical control, or if
there are special causes of variation present in the process (92). Values that fall outside the control limits
indicate that special cause variation is likely present, and the causes for these excursions should be
investigated. An assessment should be completed to implement the most appropriate control chart rules
(e.g., value outside 3 sigma limits, number of values defining a trend, alternating points, points above 1
sigma or 2 sigma, etc.) (64). Control charts can be used during all three validation stages for within-lot or
between-lot data. During Stages 1 and 2, they can be used to determine if the process is stable and in control
in order to commence commercial production. Control charts are particularly useful during Stage 3. Special
causes of variation affect almost every process at some point. Control charts help identify when such a
special cause has occurred and when an investigation may be needed. As special causes are identified and
corrective actions taken, process variability is reduced and quality improved. Control charts are easy to
construct and can be used by operators for ongoing process control. They also create a common language
for discussing process performance and can prevent unnecessary adjustments and investigations. They
encourage staff to be responsible for monitoring and improving their process, rather than only taking action
when quality control test results fail.

##### 6.2.2.1 Factors to Consider in Designing a Control Chart

There are many factors to take into consideration when designing control charts, including:
•
Characteristic(s) to chart
•
Type of control chart to use
•
Sample size and frequency of sampling
•
How quickly the chart will detect a problem of a given magnitude
•
Economic factors (e.g., costs of sampling and testing, costs associated with investigating out-of-
control signals, costs of allowing defective units to reach the customer)
•
Production rate
Refer to Section 10.0 (Appendix II), for additional information.

96

##### 6.2.2.2 Types of Control Charts

Control charts may be used for both variables and attributes data (92). Variables data are those that are
measured quantitatively, such as potency, weight, and pH. Attributes data are those obtained by counting,
such as the number of rejected lots per month and the percent of tablets rejected. For variables data, it is
important to control both the process mean and variation, and both should be charted. A change in either
indicates special causes acting on the process that should be investigated. For attributes data, such as the
percent of nonconforming units or the number of cosmetic flaws in 100 glass vials, only a single chart for
the variable of interest might be kept. A separate chart for variation is not necessary because the variation of
attributes data is related to the mean value; for example, the number of cosmetic flaws in 100 glass vials is
usually modeled by the Poisson distribution, where the standard deviation is the square root of the mean.
When possible, using variables data rather than attributes data is preferred. A measured value contains more
information than an attributes value, such as conforming vs. nonconforming. Control charts for variables
data have more statistical power and can use smaller sample sizes than attributes data charts. Although the
underlying theory for control charts assumes normally distributed and uncorrelated data, control charts are
robust and generally work well even when these assumptions are not met (82). One exception is for
attributes data with low values, which have a highly skewed nonnormal distribution. Bioburden monitoring
is an example of a process with low attributes data values, where many or most of the data are zeroes. Exact
probability control limits the use of the negative binomial, Poisson, or other suitable distribution that might
be used to prevent too high a false-alarm rate (84). (Additional information on control charts is provided in
Section 10.0 (Appendix 2).)

##### 6.2.2.3 Process Capability

Statistical process control charts answer the question, “Is the process stable and consistent?” Process
capability statistics answer the question, “Is the process capable of meeting specifications?” Process
capability (Cp) is the ability of a process to manufacture a product that meets predefined requirements. It
can be assessed using a variety of tools, including histograms and process-capability statistics. The two most
common process capability statistics, Cp and Process Capability Index (CpK), are shown in Equation 1 and
Equation 2 (87). Cp measures the capability of a process to meet specifications if it is centered between the
specification limits. CpK assesses if the process is meeting specifications when any lack of centering is
considered. Examples of normally distributed processes with various values of Cp and CpK are shown in
Figure 6.2.2.3-1.
Equation 1
𝐶𝐶𝐶𝐶 = 𝑈𝑈𝑈𝑈𝑈𝑈 − 𝐿𝐿𝐿𝐿𝐿𝐿
6 ∙𝑠𝑠

Equation 2
𝐶𝐶𝐶𝐶𝐶𝐶 =  𝑚𝑚𝑚𝑚𝑚𝑚 ൤𝑥𝑥̅  − 𝐿𝐿𝐿𝐿𝐿𝐿
3 ∙𝑠𝑠
; 𝑈𝑈𝑈𝑈𝑈𝑈 − 𝑥𝑥̅
3 ∙𝑠𝑠
൨
Where:
LSL
=  lower specification limit
USL
=  upper specification limit
𝑥𝑥̅

=  average of data
s
=  standard deviation of data

97

*[Figure 6.2.2.3-1 Examples of Process Capability Statistics Cp and CpK]*

If the process is in statistical control, the standard deviation (s) used to calculate Cp and CpK in Figure
6.2.2.3-1 is usually based on estimates derived from the control chart for the standard deviation or range.
These estimates of s will not include between-subgroup variation that may have occurred in the mean. For
an individual’s chart where n = 1 per subgroup, the standard deviation is usually based on the moving range,
which minimizes the effect of between-subgroup variation. If the standard deviation is calculated by the
familiar equation:
Equation 3
𝑠𝑠 = ඨ෍(𝑥𝑥𝑖𝑖−𝑥𝑥̅)2
(𝑛𝑛−1)
Where:
s

=  standard deviation of data
xi
=  first (initial) data
𝑥𝑥̅

=  average of data
n
=  number of samples
of all the data combined, this estimate will include between-subgroup variation, such as between-lot
variation, and the indices are then called Pp and PpK. For an X/MR chart (with n = 1 per subgroup), the
standard deviation is usually based on the moving range, which minimizes the effect of between-subgroup
variation (“short-term” standard deviation).
As done for the Levey-Jennings chart, this estimate (“long-term” standard deviation) will include between-
subgroup variation, such as between-lot variation, and the indices are then called Pp and PpK. If a process is
in statistical control, there will be little difference between Cp and Pp or between CpK and PpK. If a process
is not in statistical control, it is difficult to determine process capability because of the lack of process
stability (refer to Figure 6.2.2.3-1). If a process is not in statistical control, Pp and PpK are preferred as they
include variation due to lack of stability (variation related to special causes); however, this practice is
somewhat controversial (64).

98

*[Figure 6.2.2.3-1 shows the relationship between the CpK and the probability the process output will be out]*

of specification. Table 6.2.2.3-1 assumes the process is in statistical control, normally distributed, and
centered between the lower specification limits (LSL) and upper two-sided specification limits (USL). If the
process is not normally distributed, process capability methods for nonnormal distributions should be used.

**Table 6.2.2.3-1 Relationship Between Capability and % or Per Million Nonconforming**

USL – LSL
±2σ
±3σ
±4σ
±5σ
±6σ
Process Capability Index (CpK)
0.67
1.00
1.33
1.67
2.00
Nonconforming
4.55%
0.27%
63 ppm
0.6 ppm
2 ppb
% of Specification Used (±3σ limits)
150
100
75
60
50
Acceptable values for CpK depend on the criticality of the characteristic, but 1.0 and 1.33 are commonly
selected minimum values. Six-sigma quality is usually defined as Cp ≥ 2.0 and CpK ≥ 1.5 for a normally
distributed process in statistical control. Refer to Wheeler or Montgomery for more complete treatments of
SPC and process capability (84, 87).

#### 6.2.3 Statistical Acceptance Sampling

Statistical acceptance sampling is another commonly used statistical tool for validation. The general
principle is that the sampling used for validation should provide higher confidence than sampling used
during routine production. In validation, larger sample sizes, more replicates, and other such factors are
typically used. Commonly used acceptance sampling plans for validation to ensure that a high percentage of
individual units (e.g., tablets, vials) are conforming are:
•
Single sampling for attributes data
•
Double sampling for attributes data
•
Variables sampling for quantitative data
Samples should be representative of the entire population being sampled. Random, stratified, and
periodic/systematic sampling are the most used approaches. Targeted sampling to include suspected worst-
case locations within the batch or process may be used when appropriate. For example, samples from the
very beginning and end of the batch may be selected to assure that these potential trouble spots are included,
while the rest of the required samples are randomly selected from throughout the batch.
Reaching at least 90% confidence at the end of PPQ is desirable when using statistical acceptance sampling
for validation with little prior confidence. This means that the combined information from the PPQ runs
shows that there is at least 90% confidence that the validation performance level has been met; 90%
confidence is recommended as the minimum because it is the traditional confidence associated with
detecting unacceptable quality levels (called the Rejection Quality Level (RQL), Lot Tolerance Percent
Defective (LTPD), or Limiting Quality) (84). Note that this use of the term “confidence” is different from
the traditional 95% confidence of acceptance associated with the acceptance quality limit (AQL) in routine
lot acceptance sampling. The AQL relates to the Type I error of incorrectly rejecting an acceptable lot, while
the 90% minimum confidence recommended here refers to the Type II error of incorrectly accepting an
unacceptable process.

99
Single sampling for attributes is the simplest type of sampling. For example, a sampling plan of n = 388
units, accept on 1 nonconformance, reject on 2, would detect a 1% nonconformance rate with 90%
confidence. The statistical operating characteristic curve for this sampling plan is shown in Figure 6.2.3-1.

*[Figure 6.2.3-1 Example of an Operating Characteristic Curve]*

Double-sampling plans for attributes may take a second set of samples depending on the results of the first
set. For example, the double-sampling plan n1 = 250, a1 = 0, r1 = 2; n2 = 250, a2 = 1, r2 = 2 will also detect a
1% nonconformance rate with 90% confidence. The values n1 and n2 are the Stage 1 and Stage 2 sample
sizes; a1 and a2 are the accept numbers; and r1 and r2 are the reject numbers. If a1 = 0 nonconformances are
found in the first set of n1 = 250 samples, the sampling plan is passed. If exactly 1 nonconformance is found
in the first sample of n1 = 250 units, an additional n2 = 250 units are sampled. If the total number of
nonconformances found in the combined 500 samples is no more than a2 = 1, the sampling plan is passed. If
the total number of nonconformances found in the combined 500 samples is r2 = 2 or greater, the sampling
plan fails. One advantage of double-sampling plans is that they often have lower false-reject rates; that is,
good processes will not fail the sampling plan as often.
Several types of variable sampling plans may be used for validation, one of the most common being the
normal tolerance interval. For example, one normal-tolerance interval sampling plan for two-sided
specifications is n = 30, k = 3.17. If the average ±3.17 standard deviation is contained within the
specification limits, the sampling plan is passed. This plan also provides 90% confidence in detecting a 1%
nonconformance rate. Variables-sampling plans assume the data are normally distributed, and this
assumption should be confirmed with a suitable normality test. An advantage of variables-sampling plans is
that they often are able to use much smaller sample sizes than attribute plans to provide the same
confidence.
Standards ANSI/ASQ Z1.4 Sampling Procedures and Tables for Inspection by Attributes and ANSI/ASQ
Z1.9 Sampling Procedures and Tables for Inspection by Variables are commonly used sampling plans for

100
routine production. They should be used with care for validation, since they may not provide a high enough
level of confidence (93, 94). For example, one Z1.4-tightened sampling plan for AQL 0.4% is n = 315, a =
2, r = 3. If a validation lot has two (2) nonconforming units in a sample of n = 315, the validation lot would
pass the sampling plan. (However, note that 2/315 = 0.63% is substantially larger than the AQL of 0.4%.)
Finding 0.63% nonconforming units in a sample does not provide high confidence that the process is ≤ 0.4%
nonconforming, if that was the goal of the PPQ. If Z1.4 and Z1.9 are used for validation, the operating
characteristic curves in the standards should be consulted to verify that the desired confidence is achieved.
Not all sampling plans used to make accept-or-reject decisions are for percent nonconforming units. For
example, the U.S. Pharmacopeia (USP) test for content uniformity (uniformity of dosage units) is specified
in terms of a two-stage sampling plan USP provides. In this case, validation sampling should provide
confidence that the USP test can be passed with high confidence (89). For example, the sampling plan will
show with 95% confidence that the routine USP content uniformity (uniformity of dosage units) test
requirements can be met.

#### 6.2.4 Number of Lots for Stage 2 Process Performance Qualification

In the case where the amount of prior information and confidence is low at the transition of Stage 2, the
more advisable approach is to use statistical methods to support the determination of the number of PPQ
lots, where feasible and meaningful (refer to Section 4.4.2.1.4). Depending on the prior information and/or
risk involved, it may not be necessary to determine the number of PPQ lots using statistical methods. The
less information and confidence at the transition to Stage 2, the more advisable it is to use statistical methods
to help determine the number of PPQ lots, where feasible and meaningful. Section 9.0 (Appendix I),
provides statistical approaches to determine the number of lots. Regardless of the number selected and the
acceptance criteria used, the data collected during PPQ should be statistically analyzed to help understand
process stability, capability, and within (intra-) and between (inter-) lot variation.
Lots produced during Stage 1, under similar (GMP) conditions as the PPQ lots, may potentially be used to
reduce the number of lots required at PPQ. This can be done using Bayesian statistical methods or by
combining the Stage 1 data and Stage 2 PPQ results—if there are no significant differences in the data (95).
The criteria for combining Stage 1 data and PPQ data should be specified before the PPQ lots are produced.
These criteria would typically include such statistical comparisons as analysis of variance to compare lot
means, Levene/Brown-Forsythe test, or Bartlett's test to compare the lot standard deviations, SPC charts,
and equivalence tests to demonstrate that the Stage 1 and PPQ data are similar (93, 96, 97).

### 6.3 Process Analytical Technology

PAT is a method of process control, where the product or in-process material quality attributes are
monitored and measured during processing, and the process parameters and conditions are adjusted to
compensate for the variability of the quality attributes with the goal of ensuring a consistent final product
quality.
PAT can provide high levels of product quality assurance through the analysis of material attributes and the
process adjustments. In that quality attributes do not vary outside of the prescribed ranges, product and
material quality is maintained (98).

101
PAT can support PV whether it is a parallel activity (concurrent with PV), reductive activity (reduces
execution of existing tests), or replacement activity (alternative to traditional testing).
Effective use of PAT to provide process control relies on the selection of the correct quality attributes,
process performance ranges, and methods for monitoring and reporting. It also relies on the proper design,
use, and validation of the PAT monitoring, measurement, and control loop systems.
The validation of the PAT system is based in part on the following principles:
•
Measurement of the correct product and in-process quality attributes
•
Accuracy and understanding of the correlation between these quality attributes and the process
parameters that will be adjusted
•
Reliability, suitability, capability, and accuracy of the monitoring, measurement, and process
control loop or adjustment systems
•
Acceptable performance of the PAT system throughout commercial manufacturing, including the
ability to identify opportunities for process improvement

#### 6.3.1 Selection of Process Analytical Technology

PAT is an enabler to product and process understanding and an element of the control strategy. Prior to the
selection of the PAT system, the product and manufacturing process must be developed and well-
understood. Selecting the right PAT system should be based on fitness for purpose, system ruggedness, and
vendor customer service. Selection criteria should include, but are not limited to, specificity, sensitivity and
accuracy, electronic integration requirements of information technology compatibility, data management,
and communication.

#### 6.3.2 Process Validation Considerations during the Process Analytical Technology

System Design
During PAT system design, information is developed to confirm that the correct product and in-process
quality attributes are being measured, and that the correlation between these quality attributes and the
process parameters that will be adjusted is understood and accurate. PAT system design begins in Stage 1
and is qualified in Stage 2 and continually verified in Stage 3. During PAT system design, an understanding
of how process-parameter changes affect product attributes is established. Process monitoring and control
systems are designed and linked to specific product attributes. Ranges of acceptable process-parameter
variation are determined. PAT design efforts should include risk assessment, system feasibility and
selection, in-process application development, and consideration of regulatory requirements.

##### 6.3.2.1 Risk Assessment

The risk assessment should identify product and in-process quality attributes that influence final product
quality. The risk assessment should identify process steps and conditions that affect these attributes and can
be measured and adjusted to ensure product quality. Quality attributes and corresponding process steps and
conditions that are not monitored by the PAT system may require other means to ensure or validate
performance. Having PAT systems is expected to lower the risk to product quality by having additional
controls, timely responses, increased detectability, increased understanding, and information (e.g.,
identification, measurement, control of CQAs). These features enable a more informed risk-assessment
decision. Tools for the assessment and evaluation of PAT processes and systems are discussed in Section

102
6.1 of this technical report, as well as in ICH Q9(R1), TR 54, and the FDA PAT Framework guidance,
among other publications (37, 78, 99).

##### 6.3.2.2 In-Process Application and Method Development

The PAT methods for in-process product measurement and process adjustment should be selected and
validated for specificity, linearity, range, accuracy, precision, repeatability, robustness, detection limit, and
quantitation limit to ensure that the method is fit for purpose (37).

#### 6.3.3 Process Qualification Considerations for Process Analytical Technology

The process qualification stage is where information is developed to confirm that the monitoring,
measurement, and process control or adjustment systems are suitable, capable, accurate, and reliable. One
key to effective PAT process control is the reliable operation of instruments and equipment. For
implementation, an implementation and validation team should be assembled to categorize the validation
requirements and propose acceptance criteria for each unit of operation, based on the application or intended
use of the PAT system and method. These requirements and criteria will ultimately be included in a
validation protocol and described in the validation report. The acceptance criteria should be aligned with the
expected specification, protocol requirements, development experience, and manufacturing practice.
The function and operation of the equipment and instrumentation used in the PAT system should be
qualified to ensure that it will monitor and control the process parameters accurately and reliably.
Equipment and instruments used during the process should be qualified to verify that they are suitable for
in-process use, including compatibility with process materials and conditions, accuracy, sensitivity, security,
and reliability.

#### 6.3.4 Continued Process Verification Considerations for Process Analytical Technology

The CPV stage is where information is obtained to confirm that the PAT system performs at an acceptable
level throughout commercial manufacturing. It also determines where product and in-process quality
attributes, or process parameters, fall out of expected ranges; those that do are identified, investigated for
cause, and addressed.
PAT provides continuous process and product attribute verification. Stage 3 activities should therefore focus
on accuracy and reliability of control methods, possible process-control improvements, and process
variables missed during process development and qualification. Evaluation of PAT and or in-process
derived data should be part of the quality system and review processes (17). Where data trending shows
excursions in anticipated monitoring results, an analysis of the cause of the excursion should be conducted
to determine if changes to the control system are needed or what opportunities for process improvement can
be identified.
When variables are found that are not being monitored adequately, changes to the monitoring methods may
be needed. All changes should be evaluated for the impact on the process and product attributes. Changes
should be evaluated, and actions should be implemented to assure that residual risks do not adversely affect
process performance or product quality. These actions may include steps to qualify the changed process and
equipment.

103

### 6.4 Technology Transfer

For a lifecycle approach to PV to be effective, all information that is available to support process
understanding (i.e., including other sites and similar process knowledge), should be considered. This
information should be useful, accurate, and complete. The goal of TT activities (refer to Figure 6.4-1) is to
effectively communicate product and evolution of process knowledge/understanding between development
and manufacturing, and within or between manufacturing sites (within the firm or to contract development
and manufacturing organizations (CDMOs)) to achieve product realization. This information forms the basis
for the manufacturing process, control strategy, PV approach, and ongoing continual improvement. It also
provides valuable insight into the development of the process, including process variables, process
performance, and process control strategies. TT is successful if the recipient of the TT (Receiving Unit) is
able to demonstrate, through the validation of the process, that its outcome enables reliable manufacturing of
the transferred product and process (36).

*[Figure 6.4-1 Distribution of Technology Transfer Activities throughout the Product Lifecycle]*

TT can occur at different stages of the PV lifecycle. If a new process is being transferred from research and
development to commercial manufacturing, the TT may occur between Stages 1 and 2. However, if a new
process is being transferred from research and development to commercial manufacturing, the TT may
occur between Stages 1 and 2. If the transfer takes place after a product has been launched (product is in the
commercial manufacturing phase), the transfer will generally occur during Stage 3 (or eventually between
Stage 2 and Stage 3). Table 6.4-1 displays the distribution of TT activities throughout the product lifecycle,
which outlines the increasing knowledge and process understanding with each transfer.

104

**Table 6.4-1 Technology Transfer Activities throughout the Product Lifecycle**

Process
Validation
(PV) Lifecycle
Stage
Activities
Knowledge Development / Data
Application
Stage 1
Process Design provides product and
process development knowledge and
data for TT
•
Development Report
•
Development history, including criticality
assessments
•
DoE with sources of variation
•
Data and knowledge development from
stability studies and development batches
•
Rationale for specifications and methods
•
CPPs
•
CMAs
•
CQAs
•
PARs, NORs
•
Manufacturing process description, equipment
training
TT batches
manufactured during
Stage 1 are intended to
establish comparability
of product quality
between sites and
develop filing/market
authorization data.
Development Report
summarizes activities
from Stage 1.

105
Process
Validation
(PV) Lifecycle
Stage
Activities
Knowledge Development / Data
Application
Stage 2
Most TT activities in a product lifecycle
are carried out at Stage 2:
•
Development of transfer
strategy
•
Manufacturing of commercial-
scale PPQ batches
•
Site equivalency analysis (from
Receiving Unit to Sending Unit)
•
Transfer and validation of
analytical methods
•
Confirming CPPs at commercial-
scale
•
Conducting stability studies at
commercial-scale under
commercial package
configurations
•
Confirming risk assessments,
criticality analysis
•
Establish sampling plans and
statistical methods at
commercial-scale
•
Comparability protocol (with
statistical decision procedure)
and report
•
Evaluation of personnel
qualifications and training
•
Validation of microbiology-
related tests (microbial limit test,
bacterial endotoxins test,
bioburden, sterility test)

TT Strategy
Control strategy and validation plan
Product and process description (as designed from
Stage 1 and reported in the Development Report)
Assessment of site change requirements, e.g., post-
approval and prior approval with rationale.
Category under scale-up post-approval (SUPAC)
guidelines, if applicable
Number of batches required to meet transfer
requirements, including validation/PPQ
strategy/matrix approach
Specifications and methods transfer plan
TT batches
manufactured during
Stage 2 are intended to
reproduce the
manufacturing process,
including components
and composition
configurations at the
transfer site, and to
execute PPQ.
Equivalency between
sites (gap analysis) is
intended to compare
equipment and facilities
to assure that they are
equivalent and qualified
for commercial
manufacturing.

106
Process
Validation
(PV) Lifecycle
Stage
Activities
Knowledge Development / Data
Application
Stage 3
TT activities at Stage 3 are most likely
carried out for products that have
already been validated and are on the
market. These are known as post-
approval changes under the SUPAC
guidelines, ICH Q5E and ICH Q12 and
apply to changes to alternate
manufacturing sites within a firm or to
contract manufacturers.
Similar to activities in Stage 2, a TT strategy is
required. The strategy would include data listed under
Stage 2 of this table. For products at Stage 3,
additional data and knowledge will be available; care
should be taken to ensure that the Receiving Unit will
receive the maximum benefit of this background.
At Stage 3, TT activities may pose opportunities for
process improvement at the Receiving site using
historical control and quality systems data.
Data to evaluate includes:
•
Stage 2 TT and validation reports
•
Annual Product Reports, including process
trending and process capability
•
History of investigations, CAPA, change
control, OOS, complaints reports, field alerts,
stability studies, yield variations
•
Executed batch records
•
Sampling and test plans
•
Analytical data
Conduct gap analysis at current sites. Transfer site to
assess risks and variations, including:
•
Scale change
•
Manufacturing equipment train design and
operating principle, as well as qualification
status
•
Confirmation of CPPs and equipment
operating ranges at new site
•
Suppliers
•
Personnel
Transfer to a new
location within a
manufacturing site, to
an alternate site of the
firm, or to a contract
manufacturer. Filing
requirements are
defined by SUPAC, as
these have different
implications from the
regulatory standpoint.
Validation requirements
apply equally to any of
the scenarios.

107
Process
Validation
(PV) Lifecycle
Stage
Activities
Knowledge Development / Data
Application
Stage 3

New site state of compliance:
•
Product and process description (as designed
from Stage 1 and reported in Development
Data Report and Validation Reports)
•
Assessment of site change regulatory
requirements: Post-approval, with rationale
•
Number of batches required to meet transfer
requirements, including validation/PPQ
strategy/matrix approach
•
Specifications and methods transfer plan

108

### 6.5 Knowledge Management

KM for CPV refers to the systematic approach of capturing, storing, sharing, and utilizing knowledge
gained from the CPV process to enhance the efficiency, consistency, and quality of manufacturing
processes. It involves managing the insights, data, and experiences accumulated throughout the lifecycle of
a product or process, especially in regulated industries like pharmaceuticals, where maintaining product
quality and regulatory compliance is crucial.
In the context of CPV, KM ensures that relevant data, process performance information, lessons learned,
and best practices are accessible to all stakeholders. This facilitates continuous improvement, informed
decision-making, and the smooth implementation of changes, all while maintaining compliance with
regulatory standards.

#### 6.5.1 Introduction

KM is an enabler for the PV lifecycle (refer to Figure 6.5.1-1). ICH Q10 defines KM as a systematic
approach to acquiring, analyzing, storing, and disseminating information related to products, manufacturing
processes, and components. It dictates that product and process knowledge should be managed from
development through the commercial life of the product, up to and including product discontinuation.
To ensure appropriate applicability, a systematic approach must be implemented to guarantee continuous
transformation and utilization of raw data, information, knowledge, and application gathered from both tacit
and explicit knowledge.

*[Figure 6.5.1-1 Knowledge Management]*

109
As the PV lifecycle is continuous, so is the data, information, and knowledge gained from its various stages
to allow for appropriate application. From Stage 1 to Stage 3, there are multiple data sources and
information systems providing the needed elements to become knowledge that can be explicitly or implicitly
managed to apply it in the area of practice. Explicit knowledge is defined as knowledge that can be readily
articulated, codified, stored, and accessed, as it is expressed in formal and systematic language. This can be
shared in the form of data, scientific formulae, specifications, manuals, and the like. AI enables the analysis
of large volumes of process data to identify patterns and detect deviations from normal operating conditions
in continuous automated systems, thereby supporting improved process monitoring and control through a
multivariable perspective.
Regulatory authorities have recognized the role of AI and machine learning in pharmaceutical development,
manufacturing, and regulatory decision-making. Guidance and reflection documents issued by regulatory
agencies, including the FDA and the EMA, describe considerations for the use of AI models in support of
regulatory submissions and throughout the lifecycle of medicinal products (100, 101). Given the rapid
evolution of AI technologies, regulatory expectations and guidance may continue to evolve; therefore,
manufacturers remain responsible for ensuring that AI-based systems are implemented, validated, and
maintained in compliance with applicable regulatory requirements and guidance.
Knowledge comes from various sources, and the vetting and management of that knowledge is what enables
an upward continuous tangent of product and process understanding. A sustainable and continually
improved knowledge system is essential to a lifecycle PV program. The flow of data and information from
Stage 1 (Process Design) to Stage 2 (Process Qualification) and back from Stage 3 (Continued Process
Verification (CPV)) requires specific governance to obtain the expected benefit. KM is also a crucial
element for the success of TT (transfer of all key information supporting an efficient handover and a robust
mastery of the product, process, and methods at the Receiving Unit).

#### 6.5.2 Roles, Responsibilities, and Permissions

KM quality is dependent on the people, procedures, and systems employed to ensure its success. For
optimal KM, consideration must be given to the roles, responsibilities, and permissions assigned to
employees managing the system. Specific roles in KM vary greatly and are dependent on a firm’s KM
maturity. In the absence of specific roles for knowledge managers, champions, editors, analysts, and chief
knowledge officers, responsibilities aligned to these roles must find an owner to enable a robust KM system.
Responsible persons may be assigned to:
•
Acquire data/information from various sources
•
Authenticate the data and vet it for accuracy
•
Organize the data with respect to format and nomenclature for the purposes of appropriate capture
in the KM system
•
Store data in an appropriately validated system, capable of dynamic data retrieval and ease of use
•
Update the data/information as related to new knowledge procurement, obsolescence and/or
archival of data that has been superseded by new knowledge or is no longer relevant
•
Disseminate data/information/knowledge for the purposes of science-based decision-making and for
the continual propagation of knowledge
Companies should ensure employees tasked with the above responsibilities are appropriately identified
based on skills and trained in the KM system. Similarly, permissions assigned to the various users should be
defined and reviewed on an ongoing basis. As required with various systems, it is incumbent upon the firm

110
to evaluate the 21 CFR Part 11 compliance status of any electronic system employed for the purposes of
KM. The KM program should therefore be governed by approved SOPs and policies that detail its
management and enable the right information flow to be properly consumed (102).
Of top priority is the consideration given to data governance and DI. In order to organize data and
information, a systematic approach to naming conventions and nomenclature is key. Appropriate data
governance allows for high user engagement by ensuring data is consistent, usable, and easily retrievable.
DI typically refers to the completeness, consistency, and accuracy of data. As part of using a validated
electronic system, the data should therefore be unalterable once approved, and any obsolescence of data
should be reviewed through the audit trail (103).
Integration of the KM system with other electronic systems may prove to be advantageous. Integrating
systems, such as a QMS, in order to “push” information to feed the KM system allows for relevant and
complete data, when properly organized, to be quickly and easily accessed. Information from Customer
Relationship Management, Laboratory Information Management System, and equipment/instrumentation
and facility monitoring systems are all valuable sources of information, and the integration of their output
data is key to ensuring a holistic approach to KM.
Just as with the PV lifecycle, the KM lifecycle is continuous and ever-increasing in the amount of data and
information available that translates into knowledge that can be continuously applied. Therefore, the
information gathered must be securely retained and accessible to all end users.
Considering PV under the Industry 4.0 paradigm, where assets and systems are connected and producing
data during the three stages, the lifecycle applied to the transformation of data into information for decision-
making should ensure that data is findable, accessible, interoperable, and reusable (FAIR principle) (104,
105). The informational architecture must achieve DI and be aligned accordingly to FAIR principles, and
with consideration for the technological challenges brought by the huge amount of data generated
throughout pharmaceutical manufacturing. On-premises, cloud, and hybrid architectures allow the blueprint
to remain consistent. However, the inherent complexity associated with the needed storage and power-
computing necessary to deal with the high knowledge-generation demand makes the use of classic
information technologies (e.g., client-server architecture) more difficult.

#### 6.5.3 Knowledge Management Application to the Process Validation Lifecycle (Stages 1,

2, and 3)
Process understanding may be limited at the onset of development. Knowledge is perpetually being
increased from Stage 1 to Stage 3 by means of the information created during the three stages. Knowledge is
directly proportional to the number of batches produced, introduction of additional variability, planned
changes, and increased experiences. Unexpected variables and unplanned changes require thorough
investigation and may introduce additional factors whose impact must be fully assessed and
comprehensively understood. Processes are refined and can shift over time due to known or unknown
factors as well as planned changes. The changeover from Stage 1 to Stage 2 is indicative of a place in the
PV lifecycle where the process is transferred from the development to the commercialization platform
within the NOR. This point in the lifecycle, however, is typically complicated with factors of different
equipment, different batch sizes, and different personnel responsibilities, resulting in several new unknowns.
Approaches, such as, but not restricted to, the classical three consecutive acceptable batches, ensure

111
appropriate control strategies for verification in real time. The better the QRM approach, the lower the risk
of having unexpected outcomes. Evaluating and understanding the applicability of knowledge from previous
like-products/processes is a must, primarily for risk mitigation as well as for time and cost savings.
Additionally, benchmarking between lines, sites, operations, and products can enable a better understanding
for other initiatives across the full PV lifecycle. During Stage 3, increased knowledge and experience is
gained; however, the process may experience shifts and planned changes, both of which could result in
varying levels of quality and risk, requiring robust control strategies and revisiting Stage 1 and/or Stage 2.
Products and their associated manufacturing processes are not stagnant; therefore, there should be no
expectations of moving to Stage 3 and perpetually remaining in that state.
Stage 1 encompasses building and capturing process knowledge (refer to Figure 6.5.3-1). The sources of
data and information at this stage are vast and varied, from previous experience with similar processes to
clinical and preclinical activities, published literature, and DoE studies. Information from explicit
knowledge must be vetted for applicability and appropriately housed in a database for the purposes of easy
retrieval.

*[Figure 6.5.3-1 Process Understanding via the Growth of Knowledge]*

Just as important, though not typically as well structured, is tacit knowledge. A critical part of advancing
KM is the harnessing of tacit knowledge and transferring it into an explicit format by way of the KM
system. The experience and expertise of subject matter experts is invaluable; therefore, knowledge transfer
from person to person and, ultimately, person to databases is critical. TT does not reside in databases alone;
the physical presence of Stage 2 executors during engineering and demonstration trials to transfer
knowledge is a must. In cases where Stage 1 personnel may not work in the same facility as their Stage 2
counterparts, specific tacit knowledge of process/product aspects that could prove to be meaningful to the
product/process may be missed. Stage 2 processes become more complex when more than one site is
involved. In the event of multiple sites performing PPQ concurrently, or when a combined PPQ involving
two or more sites in different stages of the process is required, KM and communication between sites
becomes critical. Therefore, the conversion of tacit to explicit knowledge, via the steps outlined in Figure

112
6.5.3-2, contributes to and enhances deep process understanding. To support this knowledge, promoting a
culture of mutual confidence and trust is integral.

*[Figure 6.5.3-2 Steps Required for Transfer of Tacit Knowledge to Explicit Knowledge]*

Stage 3 is the result of the outputs produced during the previous stages; however, the production
environment, where drug manufacturing is performed, brings variability derived from equipment stress,
seasonality, shifts, different raw-material suppliers, and other variables not introduced in Stage 1 or Stage 2.
Education becomes a critical part of KM, including teaching operators the reasons why the process is
designed in each way to encourage engagement. It is crucial to develop computer-based training or other
forms of education able to transfer “how” and “why” the process, the controls, and the equipment is defined
the way it is. The ability to develop material that can be used in different contexts (such as different
countries) is key when ongoing manufacturing takes place simultaneously across multiple sites or at contract
manufacturing organizations. Therefore, KM cannot be in a form usable only by specialized personnel but
needs to be developed using different methods and media (e.g., computer-based training courses, process-
development reports, industry references, regulations and guidances, technical mentors, job rotations,
project participation, hands-on experiences, international assignments) to be understood at various levels.

#### 6.5.4 Risk Management from a Knowledge Management Perspective

PV is a long process in the drug manufacturing lifecycle, and there are many potential weak points along the
entire operation workflow. Traditionally, in order to properly implement effective risk management around
variability, the sources of variation, the range of variability, the uncertainty around its knowledge, and the
impact of variability on the critical quality attributes related to patient safety should be under control.
Therefore, risk assessments should be included in the process design and should include all the interaction
involving the product, equipment, systems, and humans with an identifiable point of variance. Mitigation
actions should be implemented along the product and process lifecycle with the goal of controlling and
reducing risks, and the risks should be efficiently informed and managed. Prevention (allowing a reduction
of the probability of occurrence) is key for risk mitigation, but an increase in detectability may be another
important axis.

113

## 7.0 Use of Knowledge Management in Process Validation

Examples
Effective QRM approaches, as those described in ICH Q9(R1), can be combined throughout the PV
lifecycle, covering such numerous aspects as development, equipment and utilities (qualification and
maintenance), material management, production, laboratory control, stability studies, packaging and
labeling, and supply chain (5). Extensive and thorough risk assessments cannot occur without an all-
encompassing and well-managed KM system. Equipment maintenance is a good example: an in-depth risk
assessment requires KM of different equipment aspects and on the interaction of the equipment with product
and manual operations. Any gaps in information and data, tacit or explicit, translate directly into less-robust
risk assessments, increasing risk to the quality of the product and potentially impacting the safety of the
patient. The associated assessment and mitigation plan would be included at the design level during Stage 1.
In subsequent PV stages, change control, fine-tuning, and manual adjustments allowed by quality unit
approval must be part of the workflow associated with the required knowledge and supported by risk
management policies. Knowledge applied to equipment maintenance is a recurrent example of how crucial
it is to keep the relevant KM.

### 7.1 Large Molecule (Biologics (e.g., Proteins, RNA, or Larger Biological

Material))
An example of the three stages of PV for a humanized IgG1 is provided in Table 7.1-1 (Stage 1), Table 7.1-
2 (Stage 2), and Table 7.1-3 (Stage 3).

114

**Table 7.1-1 Stage 1: Process Design (Large Molecule Example)**

Category
Activities
Outputs/Deliverables
Rationale/Examples
Process
Development

Establish Target
Product Profile
(TPP) & Quality
Target Product
Profile (QTPP)
Humanized Immunoglobin: TPPs and QTPPs were established.
Immunological indication: Mechanism of action (MOA) requires
both complement-dependent cytotoxicity (CDC) and antibody-
dependent cellular cytotoxicity (ADCC) activity; IV administration
at a fixed dosage.
Liquid formulation with concentration at 20 mg/mL, iso-osmolar
solution; material provided in single-use vial with shelf life of at
least 24 months at 2-8 °C.
Immunological indication; CDC and ADCC
activities; IV at a fixed dosage
Identify CQAs
Presumptive CQAs (inherent attributes from the molecule that
provide desired activity, purity, and safety) were identified based
on prior knowledge.
Potential process parameters that impact the CQAs were
identified for each unit operation based on platform information.
Deamidation, aggregate, host-cell protein,
residual DNA, etc.
Define
Manufacturing
Process
(Upstream and
Downstream)
Prior knowledge, existing risk assessments for similar molecules,
and early development data were used to define unit operations:
seed train, bioreactor, harvest, Protein A, viral inactivation,
column purification 2, column purification 3, viral filtration, and
UFDF. In addition:
•
NORs identified
•
Raw materials identified with specification
•
Cell line characterized to show free from adventitious
agents
•
Master and working cell banks prepared and characterized
•
Analytical method development started
•
Initial formulation development initiated. Due to ease of
control, frozen condition was initially selected while the
liquid formulation was being developed in parallel.
•
A Process Design Summary Report was created with
preliminary process information.
Seed train, bioreactor, harvest, Protein A, viral
inactivation column purification 2, column
purification 3, viral filtration, UFDF

115
Category
Activities
Outputs/Deliverables
Rationale/Examples
Process
Development
Define
Manufacturing
Process
(Upstream and
Downstream)
Clinical Phase 1 & 2 manufacturing:
•
Material was produced for First-in-Human studies, in a
GMP facility in a 2000L bioreactor facility, using a scaled-
down version of the intended commercial process.
Samples were put on stability to establish expiration times.
•
Material was produced for Phase 2 in a 2000L bioreactor
process using the same GMP facility. Samples were taken
and used for characterization studies in small-scale
equipment (satellite studies) to define the eventual
commercial process. Product was analyzed for the
following (at a minimum):
o
Appearance and identity
o
Purity (IEC, SEC, CE SDS, endotoxin, bioburden,
impurities)
o
Potency
•
Initial product acceptance criteria based on targets were
set from other molecules and early development studies.
Stability studies were initiated using a subset of the
release testing assays.
•
Most of the analytical methods were qualified at this
stage.
Clinical Phase 3 manufacturing was performed in a different
2000L bioreactor facility. Prior to the start of Phase 3 material
manufacture, some of the following activities were performed:
•
Tech transfer process was conducted to transfer the
process from the Phase 2 facility to a Phase 3 facility
•
Comparability study (DS & DP) protocols were generated
•
Batch records were created
•
Operator training was performed
•
Primary containers were finalized
After Phase 3 material manufacture, the Process Design
Summary Report was updated (e.g., CQAs and CPPs, unit
operations).
Most of the analytical methods were qualified at this stage.
Due to ease of control, frozen condition was
initially selected while the liquid formulation
was being developed in parallel
•
Upstream Process Parameters:
o
Viable cell density
o
% Viability
o
Temperature
o
pH
o
Dissolved oxygen
•
Downstream Process Parameters:
o
Protein load
o
Protein concentration
o
Elution buffer pH
o
Viral inactivation pH
o
Diafiltration volumes
A team of scientists led the tech transfer
effort by performing facility fit, generating
technical reports, training operators, and
transferring manufacturing process and
associated scale-down models.

116
Category
Activities
Outputs/Deliverables
Rationale/Examples
Process
Development
Quality Risk
Assessment
(QRA)
A modified FMEA was used to perform a QRA.
A template created for similar products was used as a starting
material, with appropriate modifications.
Using the risk assessment process:
•
Initial categorization of process parameters was
performed
•
Initial framework for control strategy was created based
on high risks identified in the risk assessment
A template created for similar products was
used as a starting material, with appropriate
modifications. High and medium risks
identified in the risk assessment were
considered to elaborate the control strategy.
Process
Characterization

N/A
Process characterization studies were designed based on
prioritization developed from risks identified in the QRA.
Statistical methods involving DoEs (screening designs to full
factorial) were used to understand interactions of high-risk
parameters and a design space developed wherever possible.
Scale-down models were created and tested; some required
qualification (e.g., virus clearance). In these cases, protocols were
created and approved by Quality.
Based on characterization and small-scale model studies,
operating ranges for process parameters were finalized.
Acceptance ranges for performance parameters were
established.
Downstream process determined that acidic
variants impacted biological activity.
Placed tighter controls on in-process hold
times to control level of acidic variants.
Updated Quality Risk Assessment and the
Control Strategy. Increased the concentration
of final bulk to save on storage capacity.
Finalize CQAs
and CPPs
Based on process characterization and scale-down model studies,
the QRA was updated, which in several cases required re-scoring.
In a cross-functional team, the CQAs and CPPs were reviewed
and finalized. The final CQAs and CPPs were subject to approval
by the Health Authorities wherever applicable.
The control strategy was updated based on the understanding of
CQAs, CPPs, process controls, and detection capabilities.

N/A

117
Category
Activities
Outputs/Deliverables
Rationale/Examples
Process
Characterization
Documenting
Process Design
The Process Design Summary Report was updated (CQAs, CPPs,
unit operations, operating ranges, specifications, and acceptance
criteria and controls).
A commercial manufacturing was site was identified (12K
bioreactor capacity), and a team of scientist and process
engineers performed a facility fit analysis to identify any gaps in
equipment capabilities.
Tech transfer process was initiated to the commercial site. A tech
transfer risk assessment was performed to understand the high
risks. Scale-down model process transfer was also started in
parallel.
Around this time, the analytical method validation was
completed.
N/A
Process
Validation
Master Plan
(PVMP)
Specific validation protocols were identified.
The process validation strategy and ancillary studies were
described in the plan.
N/A
Process
Qualification
Equipment,
Utilities, and
Facility
Qualification
The facility fit assessment identified the requirement of a larger
scale centrifuge.
Based on user requirements and design specifications, the new
centrifuge was ordered. After FAT and SAT, the equipment was
commissioned and qualified. To understand the control required,
a risk assessment was performed.
N/A

118

**Table 7.1-2 Stage 2: Process Qualification (Large Molecule Example)**

Category
Activities
Outputs/Deliverables
Rationale/Examples
Process
Performance
Qualification
(PPQ)
Technology
Transfer and
Engineering Runs
The transfer process used engineering runs to demonstrate that
the process worked and to fine-tune the operation set points.
Two engineering runs were performed using GMP materials
with draft batch production records. These runs enabled
training on the new process for the operators.
The Process Design Summary Report was updated with any
changes to process parameters.
N/A
Process
Performance
Qualification
Readiness
Assessment
At a stage gate, a checklist was used to ensure that all the
processes and procedures were in place to start the PPQ
process. PPQ protocols were drafted and approved.
A sampling plan that described the sample points, number of
samples, statistical justification of parameters, frequency of
reviews, and statistical and analytical methods was created and
approved. A CPV plan was created to identify the parameters
and attributes to be tested and monitored during PPQ and
Stage 3 (CPV). Some of the elements included in the plan were
justification of parameters, frequency of statistical procedures
used to determine state of control, and handling of excursions.
A qualitative decision tool was used to determine the number of
PPQ runs. Some of the factors considered were:
•
Process variability (e.g., novel and difficult scale-up unit
operations)
•
Raw material variability
•
Age of equipment and facility
•
Level of commercial manufacturing experience of
operators
•
Clinical manufacturing experience
•
Robustness of control strategy
The tool suggested a range of 5-6 runs for the PPQ campaign.
Discussions with the Health Authorities are helpful and,
generally, a proposal is submitted for the number of runs.
PPQ batches following the first PPQ batch
(full-scale) were performed at approximately
10% scale.

119
Category
Activities
Outputs/Deliverables
Rationale/Examples
Process
Performance
Qualification
(PPQ)
Process
Performance
Qualification
Readiness
Assessment
A similar approach was taken for the DP PPQ campaign.
Materials generated during the DP PPQ campaign will likely
expire before approval. Depending upon a firm’s practices, one
may perform one run at full scale and others at a reduced
(approximately 10%) scale.
Cleaning validation specific to the new process was performed
concurrently with the PPQ runs.
Product and process comparability was initiated with approved
protocols.
A comparability plan describes the actions to be taken in the
event of significant process changes (including site change). The
plan describes the testing program to be used to demonstrate
comparability between the Phase 3 and commercial processes.
A qualitative decision tool was used to determine the number of
PPQ runs.
Some of the factors considered were:
•
Process variability (e.g., novel and difficult scale-up unit
operations),
•
Raw material variability
•
Age of equipment and facility
•
Level of commercial manufacturing experience of
operators
•
Clinical manufacturing experience
•
Robustness of control strategy

PPQ batches following the first PPQ batch
(full-scale) were performed at approximately
10% scale.

120
Category
Activities
Outputs/Deliverables
Rationale/Examples
Process
Performance
Qualification
(PPQ)
PPQ Campaign
The qualification lots were scheduled in advance of the targeted
submission date to allow for sufficient real-time stability data in
the application.
The PPQ campaign was conducted as per the protocols.
The PPQ was concluded to be successful after all the
acceptance criteria were met. By meeting the statistically
derived acceptance criteria, the process was demonstrated to
be in a preliminary state of control. The demonstration of state-
of-control will continue into Stage 3.
The PPQ reports were generated and approved.
The Process Design Summary Report was updated
appropriately.
In general, Health Authorities require 6
months of real-time stability data at the time
of submission.
Any excursions were handled according to the
established procedures.
Additional sampling is performed for all the
runs in the event of an unforeseen incident,
which would have compromised the initial
PPQ runs.
Stability
Three lots of DS and DP from the PPQ campaign were put into
the stability program.
Multiple freeze-and-thaw cycles were also performed with
hold-time studies.
In addition to real-time testing and the
designated storage temperature, stability at
accelerated conditions is performed per ICH
guidelines.
The stability program also includes a
comprehensive study in which the DS is held
at its longest expiry and then used to prepare
DP vials that will be held for the entire expiry
time.
In addition to the primary stability data
obtained during the PPQ runs, supportive
stability data acquired during clinical
development is also used in the submission
package.

121

**Table 7.1-3 Stage 3: Continued Process Verification (Large Molecule Example)**

Category
Activities
Outputs/Deliverables
Rationale/Examples
Continued
Process
Verification
(CPV)
Process
Monitoring
The CPV plan that was developed prior to the start of
the PPQ was submitted to the Health Authorities.
Testing and monitoring were performed during Stage 3
according to the CPV plan.
CPV data review was conducted as described in the
CPV plan.
The monitoring reports generated supplemented the
Annual Product Review.
The CPV plan was used throughout the product
lifecycle and helped to ensure that the process was in a
state of control.
Preliminary control limits were established after 15
commercial batches (including PPQ batches) were
manufactured.
Final control limits were established after 30 commercial
batches had been manufactured.
Product
Technical Teams
(PTT)
Each commercial product had a Product Technical Team
(PTT) that helped to oversee the process for the
remainder of the product’s lifetime.
The PTT was also responsible for reviewing data from
multiple production sites to ensure consistent process
performance and product quality.
The PTT is cross-functional, including Operations,
Process Development, Technical/Engineering Groups
(Manufacturing, Science, and Technology-MSAT),
Analytical, Quality, and Statistics. The team is
responsible for reviewing the processing data that
accumulates during commercial production. The PTT
can recommend process changes and helps to ensure
continuous improvement.
Specification File
A manufacturing process specifications file was
generated at the time of the license submission.
The file was updated upon approval and contained the
licensed parameters that had been agreed to by the
agency.
The file is maintained throughout the product’s lifetime
and is to be updated to include in-process and
specification changes that might occur.

122
7.2 Small Molecule (Parenteral)
An example of the three stages of PV for an organic, parenteral dosage form is provided in Table 7.2-1 (Stage 1), Table 7.2-2 (Stage 2), and Table 7.2-3 (Stage 3).

**Table 7.2-1 Stage 1: Process Design (Small Molecule Example)**

Category
Activities
Outputs/Deliverables
Rationale/Examples
Process
Development

Establish TPP &
QTPP
Parenteral drug solution dosage form: sterile formulation in three
different strengths, intended to comply with the USP compendial
requirements for injection.
Target shelf life at least 24 months at 25 °C.
The product development process had no
clinical trials; therapeutic strength relied on
bioequivalence. Thus, clinical
manufacturing experience was minimal
compared to a new chemical entity.
Identify Critical
Quality
Attributes
Active collaboration took place between R&D, development,
formulators, and analytical scientists to identify potential CQAs and
methods for detection. Experience with past liquid dosage form
manufacturing was vital in identifying CQAs.
Assays used to release product and test methods to release API were
developed and verified at Stage 1 with the intention that they would be
validated and transferred to the manufacturing site to support PPQ.
N/A
Define
Manufacturing
Process
Development was based on experience with previous and existing
processes, excipients, and capabilities at the firm’s current
manufacturing sites. The lab-scale formulation batches were produced
using identical primary packaging material. All raw materials were in the
firm’s GMP system.
A DoE concluded that the DP was heat-sensitive and, therefore, would
be manufactured aseptically and not terminally sterilized. Followed by
lab feasibility/formulation batches, the pilot-scale formulation stability
batches (with at least three formulation pH levels) were prepared in an
R&D pilot plant. The solution stability due to maximum temperature
during compounding, filtration, and filling and its impact on the drug
product (DP) degradation rate and impurity profile was established.
At least two API supplier batches were considered. Intentions were to
use standard and familiar unit operations and minimize the time to
develop the process. The process for the formulation studies performed
at pilot scale (at least 10% of commercial scale) established knowledge
on process variability, CPP, and CQAs. The process scale-up parameters,
manufacturing specification, analytical, and biological specifications were
established through pilot-scale runs.
Samples from these pilot batches of 400 L
were analyzed and tested to narrow down
formulations based on compatibility and
stability due to:
•
Light sensitivity
•
Oxygen sensitivity
•
Formulation pH
•
Container material incompatibility
•
Manufacturing material
incompatibility
•
Thermal stability
•
Color formation
•
Any anticipated stability-limiting
factors
Solution temperature controls during
mixing, filling, and storage were also
followed as controls.

123
Category
Activities
Outputs/Deliverables
Rationale/Examples
Process
Development
Define
Manufacturing
Process
Scale-up models for unit operations were developed. R&D personnel
provided justification for the models and documented the limitations
through design and stage-gate review processes.
The Process Evaluation studies were initiated prior to manufacturing of
the stability batch using the bracketing approach at the scale-up
production GMP manufacturing site. A total of two scale-up batches of
highest DP concentration using API from two different suppliers were
manufactured. To establish and understand all CPP and CQA, both
batches were produced at full scale. The study design was based on a
risk assessment accompanied by an extended in-process control
program defined in protocols and product-/batch-specific sampling
plans. These studies established:
•
Drug dissolution profile
•
Degradation over the manufacturing process
•
Solution–filter compatibility
•
Solution hold time
•
Solution closure–container compatibility
Extensive sampling and specification evaluations were conducted.
Characterization and comparisons among the batches for both active
ingredient and finished product were performed. The data
demonstrated that the DP met the finished product specification when
produced using the worst-case scenario.
Research personnel were primarily responsible for these batches, but
manufacturing site personnel were also involved.
Tests of the quality attributes included:
•
Appearance and identity
•
Purity test
•
Solution pH
•
Osmolality
•
Dissolution profiles
•
Process impurities
•
Particulate matter
•
Microbiological attributes
•
Sterility assurance levels
These studies established CPPs:
•
Mixing speed (RPM)
•
Temperature
•
Dissolved oxygen
•
Mixing time
There were 10 sampling points throughout
the PE batch of 2800 L during filling. These
encompassed multiple (e.g., triplicate)
samples at the beginning, middle, and end
of the process step. This approach is
patterned after other heterogeneous-
system sampling practices, such as the
FDA’s bulk-powder blend sampling
schemes.
Perform Quality
Risk
Assessments
Formal risk assessments were performed during development. The
scope was limited to the manufacturing risks of the product and
processes. An approval of this document indicated that the residual risks
and associated risk scores with development DOE activities were
acceptable to proceed with an entry into the stability design phase. Well
after Stage 2, other formal risk assessments were conducted during
Stage 3 and during a long and successful commercial manufacturing
phase. This included linking the worst-case scenario for various
operations, which aided in the development of the design space.

Risk Ranking and Filtering, which included
severity and probability components, was
used. This is a simpler tool to understand as
it enables focusing on the most important
factors. Other tools used were FMEAs and
Cause-and-Effect diagrams.

124
Category
Activities
Outputs/Deliverables
Rationale/Examples
Process
Characterization

Perform
Characterization
Activities
Unit operations were optimized to improve efficiency and robustness.
Using experimental and scale-up studies, scientists were able to
establish scale-up process parameters and perform evaluations prior to
stability runs.
Improvements in the process included enhancing immediate dissolution
through solution mixing-process optimization, in-tank solution pH, and a
dissolved oxygen monitoring system. Process characterization or
evaluation studies were designed using a DOE approach to minimize
experiments. There were numerous research and scale-up/transfer
reports, along with qualification and process understanding reports.
Qualification of the most critical excipients from a different vendor was
performed on the full-scale DP.
Qualified excipients were those that
impacted CQAs, such as the ones that
controlled pH and osmolality.
Finalize CQAs
and CPPs
Issues with respect to API dissolution occurred during development and
scale-up due to variations in raw material particle size. The scale-up
process parameters for agitation and solution temperature were
modified and evaluated from model calculations. Manufacturing
procedure specifications were modified and evaluated to confirm
finished-product CQAs.
CQAs for the solution product were identified early in development,
refined during Stage 1, and implemented as final specification in the
manufacturing procedure. These generally inherent attributes from the
molecule and formulation provided desired activity, purity, and safety.
The review and approval of the CQAs was performed by a qualified
team and documented in a formal report. The process parameters that
impacted the CQAs were identified in PV protocols and their criticality
was determined from results of the PV studies.

CQAs were:
•
Solution pH
•
Dissolved oxygen
•
Drug dissolution and homogeneity
•
Process (i.e., drug) impurities
•
Drug concentration (potency)
•
Osmolality
•
Microbiological attributes
•
Sterility assurance levels

125
Category
Activities
Outputs/Deliverables
Rationale/Examples
Process
Characterization
Document
Process Design
Analytical methods were not validated for PE/demonstration batches;
however, they were validated and transferred from R&D to
manufacturing sites prior to stability batch production at a GMP site.
Factors included specificity, forced degradation, precision, linearity,
LOD/LOQ, accuracy, and robustness.
Scientists were encouraged to write technical reports that summarized
different aspects of the process. In general, they focused on a single unit
operation, describing changes and improvements. A technical review
reference document was also prepared. It summarized all of the
developmental reports covering methods, ranges, conditions, and
knowledge of the entire process.
These documents are updated each time significant process changes
occur. The technical review reference document and associated
specifications and procedures are filed in a central archiving system and
are then used by manufacturing for generation of batch production
records.
Analytical methods were fit-for-purpose
and dependable but not validated initially
because:
•
The knowledge-gathering phase
with experimental batches early in
the lifecycle were carried out.
•
Draft specifications were used, and
case changes were made in the
ranges.
•
It saved on the timeline of analytical
method validation at this stage.
Upon site transfer, lab analysts will be
present for method validation according to
internal SOPs. These will also meet ICH
Q2, USP, or other regulatory or
compendial standards.
Validation
Draft Process
Validation
Master Plan
(PVMP)
A detailed PVMP was developed that identified specific studies to be
performed. Individual PV protocols were written for each batch. The
PPQ batches were completed just before the expected NDA approval.
In addition to new PV studies, the plan identified studies and
appropriate references that had been executed for other projects but
would be used to support this product.
The PV plan was initiated prior to Stage 2
to identify supportive information needed
from Stage 1. However, the formal PVMP
was finalized during Stage 2, when all
attributes, parameters, and systems were
known.

**Table 7.2-2 Stage 2: Process Qualification (Small Molecule Example)**

Category
Activities
Outputs/Deliverables
Rationale/Examples
Process
Performance
Qualification
(PPQ)
Perform
Equipment,
Utilities, and
Facility
Qualification
The extent of the qualification and verification of the equipment was
based on risk assessment. The critical aspects (e.g., critical functions,
controls, attributes) and other system components or functions were
verified to be fit for their intended use. Equipment and utilities had to be
in qualified states of their own for any product used. This activity was
carried out according to plant procedures to maintain a state of control.
Qualifications and calibrations were confirmed. Any system for which
proper operation was fully ensured through routine calibration and/or
preventive maintenance programs may not have required formal
qualification.
Qualification was performed for:
•
Agitator mixing speeds
•
Sensors, such as level, volume, and
temperature measurements
•
In-tank pH measurements
•
Oxygen measurements
•
Solution filling system
•
Storage chambers (frozen)
Execute
Technology
Transfer and
Engineering
Runs
Manufacturing, analytical, and biological procedure specs were
transferred to the manufacturing site based on process evaluation batch
results.
Three stability batches of drug-product strength were produced at 10-
15% of commercial-batch volume.
Three different batches from various API suppliers were factored in
among all stability batches (matrix approach). One batch with the
highest-strength-per-API supplier was performed using the worst-case
scenario for CPP (e.g., solution hold-time). Stability studies were initiated
using tank release, in-process testing, and finished-product release-
testing assays.
Analytical and microbiological methods were validated. Assays were
performed by a qualified stability operations group. Long-term stability
studies for the batches at 2-8 °C/60% RH; 30 °C/65% RH, and
40 °C/75% RH were initiated. For one batch of each strength, stability
data were generated for the products, which were stored in an inverted
orientation. A formal stability plan was prepared prior to entering
stability production and was issued prior to submission. Formal stability
production protocols were issued for each code prior to stability
production.
A full-scale commercial “demo” batch was followed by multiple PPQ
batches at a manufacturing facility for launch quantities.
The demonstration batch included verifying:
•
Solution mixing process
•
Filling process
•
Sterilization process (as applicable)
•
Packaging and confirmation of finished
product meeting final specifications
For the registration, the different suppliers
provided the API batches; everything else in the
process remained the same.
PPQ batches verified the same process
parameters and quality attributes used in the
demonstration (prevalidation) batch.
126
127
Category
Activities
Outputs/Deliverables
Rationale/Examples
Process
Performance
Qualification
(PPQ)
Perform
Process
Performance
Qualification
Readiness
Assessment
Sites for the commercial production process were identified in Stage 1.
Readiness for PPQ was confirmed at “Stage gate” meetings.
PPQs runs took place under nominal, routine conditions.
Ensure finalization of:
•
Specifications
•
Previous reports (e.g., Formulation, PE)
•
Equipment and facility qualifications
•
Previous batches done at worst-case
scenario
•
Readiness of other items, (e.g., labeling)
128
Category
Activities
Outputs/Deliverables
Rationale/Examples
Process
Performance
Qualification
(PPQ)
Manufacture
PPQ
Campaign
Lots
Material requirements to support commercial runs determined the
number of runs for the campaign. The DP PPQ campaign consisted of 5
runs, covering 3 batches with the highest strength, 1 batch with the mid-
range strength, and 1 batch with the lowest strength of finished product
made at commercial-production scale. Additional sampling was
performed for the initial PPQ runs and constitutes a bank of samples for
future use, if needed (e.g., QC needs, investigation). All runs that met
commercial-release criteria could be used to support commercial supply.
All PPQ batches were performed at nominal conditions.
A hold study was performed on one of the three highest-strength
product batches to establish and validate hold intervals for solution mix,
fill, and hold prior-to-sterilization (as applicable).
Data report of initial analysis of the variation of outputs, such as quality
and performance attributes in Stages 1 and 2.
Cleaning validation that was specific for the new process was performed
concurrently with the PPQ runs.
Solution Mixing step: Time, Temp., dissolve
oxygen, agitator speed, solution homogeneity by
drug assay, and pH–mixing validation
Sterile-fill or terminally sterilized finished-
product testing: finished-product assay,
degradation and impurities, pH, particulate,
microbial and sterility testing.
The number of batches in the entirety of PV
Stages 1 and 2 were:
•
3-6 feasibility batches
•
3-6 formulation batches
•
1-2 PE batches
•
3 stability batches
•
5 PPQ batches
Data was analyzed for the total of both stages.
A slight variation in the number of development
and PPQ batches can depend on dosage
strengths, complexity of formulation and
process, and results of PE and stability batches.
Five batches provided 3 worst-case scenarios of
the most concentrated conditions. Lower
concentrations were confirmed with 2 batches.
A study report was written including data
analysis of the variation of outputs (i.e., quality
and performance attributes) in Stages 1 and 2
Timing of PPQ batches was scheduled in
advance of the targeted NDA submission date
to allow for initial data in the application. In this
case, one month of real-time and accelerated
stability data was available. This led to the
respective start of the DS and DP PPQ runs 12
and 9 months prior to the anticipated approval
date. PPQ batches were thus able to be
commercialized.
129
Category
Activities
Outputs/Deliverables
Rationale/Examples
Stability
Initiate
Stability
All batches of DPs from the PPQ campaign were put into the stability
program. In addition to real-time testing and the designated storage
temperature, stability at accelerated conditions was performed per ICH
guidelines. In addition to the primary stability data obtained during the
Stage 1 runs, supportive stability data acquired during PPQ runs was also
used in the submission package on an as-needed basis.
N/A
130

**Table 7.2-3 Stage 3: Continued Process Verification (Small Molecule Example)**

Category
Activities
Outputs/Deliverables
Rationale/Examples
Continued Process
Verification (CPV)
Process Monitoring
A process monitoring plan and trending were
developed during the commercial phase. The
monitoring plan was used during routine
manufacturing to help ensure that the process
remained in a state of control. The process capability
metric and trend analysis were performed with
positive outcomes.
Performance metrics (e.g., yields, complaints,
deviations) continued during commercial
production.
Process-robustness contour plots are used when
the number of data points is small (e.g., less than
20-25). Process performance capability indices,
such as PpK and/or CpK, are used for 25 or
more data points.
Product Technical Teams
(PTT)
Each product has a PTT that helps to oversee the
process for the remainder of the product’s lifetime.
The PTT is cross-functional, with representatives from
Manufacturing, Process Development, Analytical,
Quality, and Statistics. The team is responsible for
reviewing the processing data that accumulates during
commercial production. It can recommend process
changes and help ensure continuous improvement.
The PTT is also responsible for reviewing data from
multiple production sites to ensure consistent process
performance and product quality.
Additional studies, including PAT, DOEs,
continuous processing experiments, and clinical
studies were carried out in a long Stage 3 to
improve the product line.
Specification File/ NDA
Supplements
Numerous supplements to the registrations were
made to add new manufacturing and testing facilities.
Transfers and PVs were carried out during Stage 3.
Manufacturing-knowledge documentation files
generated at the time of development are updated
regularly with all pertinent studies. CQAs and
parameters have been agreed to by the Development
and Quality organizations. The process-understanding
file is maintained throughout the product lifetime and
is updated to include any process and/or specification
changes.
N/A
131

## 8.0 References

1.
U.S. Food and Drug Administration. Guidance for Industry: Process Validation: General
Principles and Practices; U.S. Department of Health and Human Services: Silver Spring, Md.,
2011.
2.
European Medicines Agency. Guideline on Process Validation for Finished Products—
Information and Data to be Provided in Regulatory Submissions
[EMA/CHMP/CVMP/QWP/BWP/70278/2012-Rev1,Corr.1]; EMA: London, 2016.
3.
European Commission. Eudralux - Volume 4 - EU Guidelines for Good Manufacturing Practice
for Medicinal Products for Human and Veterinary Use, Part I, Chapter 5 - Production; European
Commission: Brussels, 2015.
4.
International Council for Harmonisation. Quality Guideline Q12: Technical and Regulatory
Considerations for Pharmaceutical Product Lifecycle Management; ICH: Geneva, 2019.
5.
International Council for Harmonisation. Quality Guideline Q10: Pharmaceutical Quality
System; ICH: Geneva, 2008.
6.
Parenteral Drug Association. Technical Report No. 29 (Revised 2026): Points to Consider for
Cleaning Validation; PDA: Bethesda, Md., 2026.
7.
Parenteral Drug Association. Technical Report No. 22 (Revised 2025): Process Simulation for
Aseptically Filled Products; PDA: Bethesda, Md., 2025.
8.
Parenteral Drug Association. Technical Report No. 1 (Revised 2007): Validation of Moist Heat
Sterilization Processes: Cycle Design, Development, Qualification and Ongoing Control; PDA:
Bethesda, Md., 2007.
9.
Parenteral Drug Association. Technical Report No. 3 (Revised 2026): Validation of Dry Heat
Processes Used for Depyrogenation and Sterilization; PDA: Bethesda, Md., 2026.
10.
International Council for Harmonisation. Quality Guideline Q13: Continuous Manufacturing of
Drug Substances and Drug Products; ICH: Geneva, 2022.
11.
International Council for Harmonisation. Quality Guideline Q2(R2): Validation of Analytical
Procedures; ICH: Geneva, 2023.
12.
International Council for Harmonisation. Final Concept Paper, ICH Q14: Analytical Procedure
Development and Revision of Q2(R1) Analytical Validation; ICH: Geneva, 2018.
13.
Haider, S I. Pharmaceutical Master Validation Plan: The Ultimate Guide to FDA, GMP, and
GLP Compliance. CRC Press: Boca Raton, Fla., 2002.
14.
European Medicines Agency. Concept Paper on the Revision of the Guideline on Process
Validation; EMA: London, 2010.
15.
International Council for Harmonisation. Quality Guideline Q7: Good Manufacturing Practice
Guidance for Active Pharmaceutical Ingredients; ICH: 2016.
16.
ASTM International. ASTM E2363-23 Standard Terminology Relating to Manufacturing of
Pharmaceutical and Biopharmaceutical Products in the Pharmaceutical and Biopharmaceutical
Industry; ASTM: West Conshohocken, Pa., 2023.
17.
International Council for Harmonisation. Quality Guideline Q8(R2): Pharmaceutical
Development; ICH: Geneva, 2009.
18.
International Council for Harmonisation. Quality Guideline Q5E: Compatibility of
Biotechnological/Biological Products; ICH: Geneva, 2005.
132
19.
U.S. Food and Drug Administration. 21 CFR 210.3(b)(9) Definitions. Code of Federal
Regulations. https://www.accessdata.fda.gov/scripts/cdrh/cfdocs/cfcfr/CFRSearch.cfm?fr=210.3
(accessed 17 Feb 2023).
20.
Parenteral Drug Association. Technical Report No. 84: Integrating Data Integrity Requirements
into Manufacturing & Packaging Operations; PDA: Bethesda, Md., 2020.
21.
International Council for Harmonisation. Quality Guideline Q6B: Specifications: Test Procedures
and Acceptance Criteria for Biotechnological/Biological Products; ICH: Geneva, 1999.
22.
European Medicines Agency. Questions and Answers: Improving the Understanding of NORs,
PARs, DSp and Normal Variability of Process Parameters; EMA: London, 2017.
23.
CMC Biotech Working Group. A-Mab: A Case Study in Bioprocess Development, Version 2.1;
ISPE/CASSS: [online], 2009.
24.
Parenteral Drug Association. Technical Report No. 42: Process Validation of Protein
Manufacturing-Retired; PDA: Bethesda, Md., 2005.
25.
International Society for Pharmaceutical Engineering. ISPE Baseline® Guide Vol. 1: Active
Pharmaceutical Ingredients, Second Edition; ISPE: Bethesda, Md., 2007.
26.
International Council for Harmonisation. Efficacy Guideline E6(R2): Integrated Addendum to
ICH E6(R1): Guideline for Good Clinical Practice; ICH: Geneva, 2016.
27.
ASTM International. ASTM E2500-25 Standard Guide for Specification, Design, and Verification
of Pharmaceutical and Biopharmaceutical Manufacturing Systems and Equipment Science and
Risk Based Approach; ASTM: West Conshohocken, PA, 2025.
28.
U.S. Food and Drug Administration. Draft Guidance for Industry: ICH Q12: Implementation
Considerations for FDA-Regulated Products; U.S. Department of Health and Human Services:
Silver Spring, Md., 2021.
29.
Parenteral Drug Association. Technical Report No.15 (Revised 2026): Validation of Tangential
Flow Filtration in Biopharmaceutical Applications; PDA: Bethesda, Md., 2026.
30.
Parenteral Drug Association. Technical Report No. 56 (Revised 2026): Application of Phase-
Appropriate Quality Systems and Good Manufacturing Practice to the Development of Biological
Product Drug Substance; PDA: Bethesda, Md., 2026.
31.
U.S. Food and Drug Administration. Guidance for Industry and Review Staff: Target Product
Profile—A Strategic Development Process Tool, Draft Guidance; Center for Drug Evaluation and
Research. U.S. Department of Health and Human Services: Silver Spring, Md., 2007.
32.
International Council for Harmonisation. ICH Q14: Analytical Procedure Development; ICH:
Geneva, 2023.
33.
Parenteral Drug Association. Technical Report No. 57: Analytical Method Validation and
Transfer for Biotechnology Products; PDA: Bethesda, Md., 2012.
34.
Parenteral Drug Association. Technical Report No. 57-2: Analytical Method Development and
Qualification for Biotechnology Products; PDA: Bethesda, Md., 2015.
35.
Scott, B; Wilcock, A. Process Analytical Technology in the Pharmaceutical Industry: A Toolkit
for Continuous Improvement. PDA J Pharm Sci Technol 2006, 60 (1), 17–53.
36.
Parenteral Drug Association. Technical Report No. 65 (Revised 2026): Technology Transfer;
PDA: Bethesda, Md., 2026.
37.
Parenteral Drug Association. Technical Report No. 54: Implementation of Quality Risk
Management for Pharmaceutical and Biotechnology Manufacturing Operations; PDA: Bethesda,
Md., 2012.
38.
Parenteral Drug Association. Technical Report No. 54-2: Implementation of Quality Risk
Management for Pharmaceutical and Biotechnology Manufacturing Operations, Annex 1: Case
Study Examples for Quality Risk Management in Packaging and Labeling; PDA: Bethesda, Md.,
2013.
39.
Parenteral Drug Association. Technical Report No. 54-3: Implementation of Quality Risk
Management for Pharmaceutical and Biotechnology Manufacturing Operations, Annex 2: Case
Studies in the Manufacturing of Pharmaceutical Drug Products; PDA: Bethesda, Md., 2013.
40.
Parenteral Drug Association. Technical Report No. 54-4: Implementation of Quality Risk
Management for Pharmaceutical and Biotechnology Manufacturing Operations, Annex 3: Case
133
Studies in the Manufacturing of Biotechnological Bulk Drug Substances; PDA: Bethesda, Md.,
2014.
41.
Parenteral Drug Association. Technical Report No. 54-5: Quality Risk Management for the
Design, Qualification, and Operation of Manufacturing Systems; PDA: Bethesda, Md., 2017.
42.
Parenteral Drug Association. Technical Report No. 91: Post-Approval Change Management and
Implementation for Biologics and Pharmaceutical Drug Products--A User's Guide; PDA:
Bethesda, Md., 2023.
43.
European Medicines Agency. Questions and Answers on Variations to an Existing
Pharmacovigilance System as described in the DDPS (update, July 2013); EMA: London, 2013.
44.
Parenteral Drug Association. PDA Research: 2021 Post-Approval Change Issues and Impacts
Survey; PDA: Bethesda, Md., 2021; p 57.
45.
U.S. Food and Drug Administration. Guidance for Industry: Changes to an Approved NDA or
ANDA; Specifications – Use of Enforcement Discretion for Compendial Changes; Center for
Drug Evaluation and Research. U.S. Department of Health and Human Services: Silver Spring,
Md, 2004.
46.
U.S. Food and Drug Administration. Guidance for Industry: Comparability Protocols for Human
Drugs and Biologics: Chemistry, Manufacturing, and Controls Information, Revision 1; U.S.
Department of Health and Human Services: Silver Spring, Md, 2022.
47.
International Council for Harmonisation. Quality Guideline Q6A: Specifications: Test Procedures
and Acceptance Criteria for New Drug Substances and New Drug Products: Chemical
Substances; ICH: Geneva, 2016.
48.
Bennan, J, et al. Evaluation of Extractables from Product-Contact Surfaces. BioPharm
International 2002, Dec 2002, 22-34.
49.
Norwood, D, et al. Safety Thresholds and Best Practices for 6 Extractables and Leachables in
Orally Inhaled 7 And Nasal Drug Products; PQRI: Washington, DC, 2006.
50.
European Commission. Annex 15: Qualification and Validation, EudraLex – Volume 4 – Good
Manufacturing Practice for Medicinal Products for Human and Veterinary Use; European
Commission: Brussels, 2015.
51.
Parenteral Drug Association. ANSI/PDA Standard 03-2025: Standard Practice for Quality Risk
Management of Aseptic Processes; PDA: Bethesda, MD, 2025.
52.
Parenteral Drug Association. Technical Report No. 60-3: Process Validation: A Lifecycle
Approach, Annex 2: Biopharmaceutical Drug Substances Manufacturing; PDA: Bethesda, Md.,
2021.
53.
Parenteral Drug Association. Technical Report No. 60-2: Process Validation: A Lifecycle
Approach, Annex 1: Oral Solid Dosage/Semisolid Dosage Forms; PDA: Bethesda, Md., 2017; p
40.
54.
U.S. Food and Drug Administration. 21 CFR 211.160 Laboratory Controls: General
Requirements; Government Publishing Office: Washington, D.C., 2017.
55.
U.S. Food and Drug Administration. 21 CFR 211.165 Testing and Release for Distribution;
Department of Health and Human Services: Silver Spring, Md., 2020.
56.
Vega, H, et al. Process Validation: Working Toward Harmonization of Terms Used to Identify
Validation Lots. Pharmaceutical Online 2025.
57.
Agalloco, J. The Importance of Equivalence in the Execution and Maintenance of Validation
Activities. Pharmaceutical Technology 2010, 34 (12).
58.
ASTM International. ASTM E2363-06a. Standard Terminology Relating to Process Analytical
Technology in the Pharmaceutical Industry; ASTM: West Conshohocken, Pa., 2006.
59.
U.S. Food and Drug Administration. 21 CFR 211.110 - Sampling and testing of in-process
materials and drug products.; Government Publishing Office: Washington, D.C., 2012.
60.
U.S. Food and Drug Administration. 21 CFR 211.100 - Written procedures; deviations;
Government Publishing Office: Washington, D.C., 2017.
61.
Sayeed-Desta, N, et al. Assessment Methodology for Process Validation Lifecycle Stage 3A.
AAPS PharmSciTech 2017, 18, 1881–86.
62.
International Society for Pharmaceutical Engineering. ISPE Good Practice Guide: Practical
Implementation of the Lifecycle Approach to Process Validation; ISPE: Bethesda, Md., 2019.
134
63.
Parenteral Drug Association. Technical Report No. 59: Utilization of Statistical Methods for
Production Monitoring; PDA: Bethesda, Md., 2012.
64.
Bar, R. Practical SPC Rules in the Real World of an Ongoing Process Verification Plan: Part 2.
Practical SPC Rules to Apply on Pharmaceutical Process Data. Pharmaceutical Technology 2021,
45 (11), 46-53.
65.
Javaid, M, et al. Digital Twin Applications Toward Industry 4.0: A Review. Cognitive Robotics
2023, 3, 71-92.
66.
Abhi, H; Et. al. International Encyclopedia of Education (Third Edition). Third Edition ed.;
Peterson, P, et al., Eds. Elsevier Science: 2010.
67.
Council of Europe. European Pharmacopeia (Ph. Eur.), 11th Edition. Council of Europe:
Strasbourg, 2022.
68.
U.S. Food and Drug Administration. Artificial Intelligence/Machine Learning (AI/ML)-Based
Software as a Medical Device (SaMD) Action Plan; FDA.gov: Silver Spring, Md., 2021.
69.
Manzano, T, et al. Artificial Intelligence Algorithm Qualification: A Quality by Design Approach
to Apply Artificial Intelligence in Pharma and Erratum. PDA J Pharm Sci Technol 2020, 75 (1),
100-18.
70.
European Commission. EU GMP Annex 22 (Draft 2025): Artificial Intelligence; European
Commission: Brussels, 2025.
71.
Pazhayattil, A B. Continued Process Verification: Reacting to Data Signals. PDA Letter 2020.
72.
Pharmaceutical Inspection Convention/Cooperation Scheme (PIC/S). Recommendation: How to
Evaluate and Demonstrate the Effectiveness of a Pharmaceutical Quality System in relation to
Risk-Based Change Management; PIC/S: Geneva, 2021.
73.
Pazhayattil, A, et al. A Novel Metric for Continuous Improvement During Stage Three.
BioPharm International 2017, 30 (6), 32-35.
74.
U.S. Food and Drug Administration. Quality Metrics Reporting. Quality Metrics for Drug
Manufacturing. https://www.fda.gov/drugs/pharmaceutical-quality-resources/quality-metrics-
drug-manufacturing (accessed 1 Mar 2023).
75.
BioPhorum Operations Group (BPOG). A Guide to Integrating Continued Process Verification
(CPV) and Annual Product Review (APR); BioPhorum: Sheffield, UK, 2021.
76.
International Organization for Standardization. ISO 13485:2016 Medical Devices — Quality
Management Systems — Requirements for regulatory purposes; ISO: Geneva, 2016.
77.
U.S. Food and Drug Administration. 21 CFR 820.30 Design Controls; GPO: Washington, DC,
2018.
78.
International Council for Harmonisation. Quality Guideline Q9(R1): Quality Risk Management;
ICH: Geneva, 2023.
79.
International Society for Pharmaceutical Engineering. PQLI Guide: Part 1 - Product Realization
using QbD: Concepts & Principles; Bethesda, Md.: 2011.
80.
Kundu, A, et al. Impact of Lot-to-Lot Variability of Cation Exchange Chromatography Resin on
Process Performance. BioPharm Int 2008, 21 (5), 48-56.
81.
Rathore, A S; Low, D. Managing Raw Materials in the QbD Paradigm, Part 1: Understanding
Risks. BioPharm Int 2010, 23 (11)).
82.
International Society for Pharmaceutical Engineering. Baseline® Guide Vol. 7: Risk-Based
Manufacture of Pharmaceutical Products (2nd Edition); ISPE: Bethesda, Md., 2017.
83.
ASTM International. ASTM E2537-16: Standard Guide for Application of Continuous Process
Verification to Pharmaceutical and Biopharmaceutical Manufacturing; ASTM: West
Conshohocken, Pa., 2018.
84.
Wheeler, D J, Chambers, D S. Understanding Statistical Process Control, Third Edition. SPC
Press: Knoxville, Tenn., 2010.
85.
Ranjit, R. A Primer on the Taguchi Method, Second Edition. Society of Manufacturing Engineers:
2010; p 304.
86.
Rao, R, et al. The Taguchi methodology as a statistical tool for biotechnological applications: a
critical appraisal. Biotechnology Journal 2008, 3 (4), 510-23.
87.
Montgomery, D C. Introduction to Statistical Quality Control, 6th Edition. John Wiley & Sons,
Inc.: Hoboken, NJ, 2009.
135
88.
Box, G E P; Draper, N R. Empirical Model-Building and Response Surfaces. John Wiley & Sons,
Inc.: Hoboken, NJ, 1987.
89.
Box, G E P, et al. Statistics for Experimenters: Design, Innovation, and Discovery, Second
Edition. John Wiley & Sons, Inc.: Hoboken, NJ, 2005.
90.
Goos, P; Jones, B. Optimal Design of Experiments: A Case Study Approach. John Wiley & Sons
P&T: 2011.
91.
ASTM International. ASTM E2281-15(2020) Standard Practice for Process Capability and
Performance Measurement; ASTM: West Conshohocken, PA, 2020.
92.
ASTM International. ASTM E2587-16(2021)e1: Standard Practice for Use of Control Charts in
Statistical Process Control; ASTM International: West Conshohocken, Pa., 2021.
93.
American Society for Quality. ASQ/ANSI Z1.4-2003 (R2018): Sampling Procedures and Tables
for Inspection by Attributes; ASQ/ANSI: Milwaukee, Wisc., 2018.
94.
American Society for Quality. ASQ/ANSI Z1.9-2003 (R2018): Sampling Procedures and Tables
for Inspection by Variables for Percent Nonconforming; ASQ: Milwaukee, Wisc., 2018.
95.
M'Lan, C E, et al. Bayesian Sample Size Determination for Binomial Proportions. Bayesian
Analysis 2008, 3 (2), 269-96.
96.
DeFeo, J A; Juran, J M. Juran's Quality Handbook: The Complete Guide to Performance
Excellence, 7th Edition. McGraw-Hill: New York, 2016; p 992.
97.
Brown, M B; Forsythe, A B. Robust Tests for Equality of Variances. J Am Stat Assoc 1974, 69,
364–67.
98.
U.S. Food and Drug Administration. Guidance for Industry: PAT — A Framework for Innovative
Pharmaceutical Development, Manufacturing, and Quality Assurance; U.S. Department of
Health and Human Services: Rockville, Md., 2004.
99.
U.S. Pharmacopeial Convention. General Chapter <1220> Analytical Procedure Life Cycle. In
PF 46(5), USP: Rockville, Md., 2022; Vol. USPNF 2022 ISSUE 1 - online.
100.
U.S. Food and Drug Administration. Draft Guidance for Industry and Other Interested Parties:
Considerations for the Use of Artificial Intelligence to Support Regulatory Decision-Making for
Drug and Biological Products; U.S. Department of Health and Human Services: Silver Spring,
Md., 2025.
101.
European Medicines Agency. Reflection Paper on the Use of Artificial Intelligence (AI) in the
Medicinal Product Lifecycle; EMA: Amsterdam, Netherlands, 2024.
102.
U.S. Food and Drug Administration. 21 CFR Part 11, Electronic Records; Electronic
Signatures—Scope and Application; Pharmaceutical CGMPs. Government Publishing Office:
Washington, D.C., 2003.
103.
U.S. Food and Drug Administration. Guidance for Industry: Data Integrity and Compliance with
CGMP: Questions and Answers; U.S. Department of Health and Human Services: Silver Spring,
Md., 2018.
104.
International Society for Pharmaceutical Engineering. ISPE Baseline®Guide Vol. 8: Pharma 4.0,
First Edition; ISPE: Bethesda, Md., 2023.
105.
Wilkinson, M D, et al. The FAIR Guiding Principles for Scientific Data Management and
Stewardship. Scientific Data 2016.
136

## 9.0 Appendix I: Statistical Methods for Determining the Number

of Lots
Listed below are statistical approaches used to determine the number of lots that may be required at the
process performance qualification (PPQ) stage. Other approaches may also be suitable. Statistical
justification of the number of lots may be particularly important when the level of risk on quality at the time
of PPQ-readiness assessment remains high. In that case, it can be recommended to define the number of
PPQ lots with a statistical or probabilistic rationale, guided by the mitigation of this risk and establishment
of a good level of confidence about the capacity of the process to deliver batches meeting their critical
quality attributes (CQAs). Involvement of a statistician or a subject matter expert skilled in this domain is
recommended, when possible. As there is no standard industry approach to statistically determine the
number of lots, multiple options are offered, and Section 9.0 (Appendix I) will provide applied statistical
methods for determining the number of lots. It will also stimulate further discussion on this issue.

### 9.1 Average Run Length to Detect a p x 100% Lot Failure Rate

The average number of lots, or average run length (ARL), until the first lot failure is ARL = 1/p, where p is
the lot failure rate that is important to detect.
Example: A lot failure rate of 20% is deemed unacceptable for a given process. A lot
failure rate of 20% would be detected on average in 1/0.2 = once every 5 lots.
Common choices for p would be 25%, 20%, 10%, and 5%, depending on factors such as prior knowledge,
risk, and production rate. Five percent (5%) would generally be the tightest value to consider since a process
running right at the acceptance quality limit (AQL) is still expected to have a 5% lot rejection rate. If
applicable, this approach may be particularly useful when there are many quality attributes to assess. Rather
than determining the number of lots required separately for each attribute, the PPQ stage is complete when
all CQAs pass their acceptance criteria for the required number of lots.

### 9.2 Range of Expected Between-Lot Variation

As shown in Table 9.2-1, the range of between-lot variation to be covered by number of lots (nL) is
calculated as: 100 x (nL - 1) / (nL + 1). This follows from the expected percentile of an order statistic. The
order statistic’s rank is divided by n + 1 (1). This approach does not require between-lot normality. The
method may be modified to provide confidence levels of coverage instead of expected coverage. The
approach may be used to determine “step-down sampling” during CPV. For example, a higher level of
sampling may be used in PPQ for the first three lots until 50% coverage is reached. At that time, the PPQ is

137
considered complete. Reduced sampling for critical characteristics may continue into Stage 3 CPV for four
more lots until 75% coverage is reached, at which point, routine sampling begins (2).

**Table 9.2-1 Expected Between-Lot Variation in Number of Lots**

Expected
Coverage
Number of Lots
(nL)
33%
2
50%
3
60%
4
67%
5
75%
7
80%
9
85%
12
90%
19
95%
39

### 9.3 Within-Lot and Between-Lot Tolerance Intervals

Statistical tolerance intervals are commonly used in validation. Tables of normal tolerance interval factors
for variable data are widely available and implemented in statistical software. Specialized software is
available to optimally calculate the desired confidence statement. Normal tolerance intervals for the total
process variation over time are more complicated; they include both within- and between-lot variation.
Standard normal tolerance interval factors assume that there is only one population in the data. However,
most PPQs contain multiple populations, since each lot is a separate population.
If, given quantitative attributes for which several units are tested per lot, there are no significant differences
between the lots, the simplest way to deal with multiple lots is to combine the data. An Analysis of Variance
(ANOVA) test may be used to compare lot means; within-lot variation may be compared with the Levene,
Browne-Forsythe, Bartlett, Cochran, or Fmax statistical tests (2-4). An omnibus test may also be used. The
sample size per lot and the number of lots should be statistically determined to have adequate power to
detect any between-lot variation.

138
Example: The specification for cap-removal torque for a small-volume parenteral product
is 8.0–12.0 inch-pounds. Limited data from Stage 1 showed a standard deviation of about
0.5. The production AQL for removal torque is 1.0%. The acceptance criterion for the PPQ
is to show with 90% confidence that at least 99% (1 minus the AQL) of the cap torques are
within specifications.
Three lots are included in the PPQ to evaluate the within-lot and between-lot variations. A
sample size of 30 units per PPQ lot was tested to detect between-lot variation as large as the
within-lot variation with 90% confidence (5). Samples from throughout each of the three
lots were tested, and the acceptance criteria for each lot was met. An individual/moving
range (I/MR) statistical process control (SPC) chart indicated that the process was in
control during each lot. Normality tests for each lot did not indicate significant non-
normality. Since ANOVA and Levene's tests showed no significant difference among the
three lots, the data were combined.
The 90 test results had a mean of 9.59 and standard deviation of 0.51. This interval is
within the specification limits of 8.0-12.0. Thus, the PPQ has shown with 90% confidence
that at least 99% of torque results are expected to meet specifications. Those calculations
may be performed using Commercial-Off-The-Shelf statistical software (e.g., JMP(C),
Minitab (C), SAS(C)). If there are statistically significant differences between lots, the
tolerance interval should be constructed with more advanced methods that take the
between-lot variance component into account (6,7).

### 9.4 Statistical Process Control Charts

Most SPC references suggest obtaining data from 20-30 time periods before calculating control limits to
assess whether the process is in control. Samples could be taken at 30 time periods across three or more lots.
For three lots, 10 sets of "rational subgroup" samples could be selected from each lot. The SPC chart limits
are then calculated, and the process is assessed for statistical control. The number of lots to use can be based
on the power of the SPC chart to detect undesirable between-lot variation.
A potential problem with the use of SPC charts, such as Xbar/S charts plotted across lots, is that they define
a process as being in statistical control if there is no underlying lot-to-lot variation (8). This is often not the
case, and some lot-to-lot variation is typical and expected, especially for lot means. In these cases, an I/MR
chart for the mean and/or standard deviation or three-way between/within chart can be used to detect out-of-
statistical-control between-lot variation (9).
If there is only one test result per lot, such as a lot assay or pH of a tank of solution, the 20-30 time periods
become 20-30 lots. This is seldom feasible for PPQ. An alternative is to select a smaller number of lots,
perhaps 5-10, and construct a preliminary I/MR control chart. If it shows an in-control process, the PPQ
would be complete, and the control chart would extend into Stage 3 to verify longer-term statistical control
during CPV.

139

### 9.5 Process Performance Index & Process Capability Index Process

Capability Metrics
PpK is the most common statistic used to assess long-term process capability (refer to Figure 6.2.2.3-1).
Acceptable values of PpK depend on the criticality of the characteristic, but 1.0 and 1.33 are commonly
used (10). Smaller or larger values may be used depending on the risk factors involved. The PpK acceptance
criterion may be based on a point estimate or a one-sided lower-confidence interval. If there is significant
between-lot variation, caution should be exercised in using confidence intervals for PpK calculated by
statistical software. Most statistical software programs do not take between-lot variation into account and
may provide optimistic confidence intervals that are too narrow (11).
Example: Fill-volume specification limits for a small-volume parenteral product are 98-
102. PPQ acceptance criteria are that each lot is PpK ≥ 1.0; also, that the overall process
PpK is ≥ 1.0 with 95% confidence. To detect a between-lot standard deviation that is half of
the within-lot standard deviation with 90% confidence, 33 units will need to be tested from
across each of five PPQ lots.
The data from the five lots were analyzed by control charts, histograms, normality tests,
Levene's test, and ANOVA. These analyses indicated that the data from the five lots could
be combined. The PpKs of each of the five lots were > 1.0. The calculated PpK from the
combined data was 1.14, with a lower 95% confidence interval of 1.03. Since each lot met
its PpK requirement and the lower confidence interval for the overall process, PpK, was
above the acceptance limit of 1.0. Thus, the PPQ acceptance criteria were met.
An alternative to calculating a parametric confidence interval for PpK is to require each of four or five
consecutive lots in a row to meet the PpK acceptance criteria. For example, four PPQ lots, each with PpK ≥
1.0, provides over 90% confidence that the process median PpK is ≥ 1.0; five lots provide over 95%
confidence.

### 9.6 Assure the Lot Conformance Rate is Above an Acceptable Rate with

Specified Confidence
An approach commonly referred to as the “confidence for reliability” method, demonstrates that the
percentage of lot conformance is acceptable. It identifies unacceptable variation due to either common or
special causes. Table 9.6-1 shows the required number of conforming lots. This method is sometimes called
"confidence for reliability."

140

**Table 9.6-1 Number of Lots to Demonstrate Confidence for Lot Conformance Rate**

Confidence
Conformance
Rate
Number of Successive Conforming Lots to Ensure
Conformance Rate with Stated Confidence
50%
90%
7
95%
14
99%
69
90%
90%
22
95%
45
99%
230
95%
90%
29
95%
59
99%
299
Example: To demonstrate the process is acceptable, the PPQ acceptance criterion will be to
show with 90% confidence that the process-lot conformance rate (the lot pass rate) is at
least 90%. A total of 22 passing lots in a row will demonstrate this.
Requiring many lots during PPQ to reach 90% or 95% confidence is difficult. An alternative is to use 50%
confidence in PPQ and monitor the process further during CPV to reach the final desired confidence.
Crossing the 50% confidence threshold is the point at which the selected lot conformance rate is more likely
to be met. For the example above, once seven (7) passing lots are reached, it is more likely that the
conformance rate is greater than 90% rather than less than 90%, and the PPQ could be considered complete.
An additional 15 lots during early CPV would reach the required 22 lots. This approach may be particularly
useful when there are many quality attributes to assess. Rather than determining the number of lots required
separately for each attribute, the PPQ stage is complete when all attributes pass for the required number of
lots.

### 9.7 Narrow-Limit Gauging

Narrow-limit gauging can be used to reduce the sample size or number of lots required in PPQ. The basic
idea is to use narrowed pseudo-specification limits during PPQ to obtain more statistical power. An example
is a case in which the assay specification for an active ingredient in a solution is 95-105, and only one assay
result is determined per lot. If five lots are all within the narrowed limits of 97.5-102.5, this gives the same
confidence as a larger number of lots being within the unadjusted 95-105 specification limits in detecting the
lot nonconformance rate (12). (See Farnuma and Stantona (1991) for calculation details.)

141
One form of narrow-limit gauging is called PRE-Control. It is often used as a quality-control procedure for
fill volume. If five units in a row fall in the middle 50% of the specification limit, then the lot is qualified for
startup. This concept can be extended to quality characteristics (e.g., lot assay, pH), where there is one result
per lot. For an assay specification of 95-105 for an active ingredient, the PRE-Control narrow limits would
be 97.5-102.5. If five PPQ lots in a row meet the 50% narrow limits, then the PPQ is complete. Note that the
narrow limits are not used to determine lot acceptance, but only to determine whether the PPQ acceptance
criteria are met.

### 9.8 Demonstrate Between-Lot Variation is Less than Within-Lot Variation

Under the classical one-factor random-effects variance components model, the total process standard
deviation is calculated using the equation:
Equation 1
𝜎𝜎𝑡𝑡= ට𝜎𝜎𝑤𝑤2 + 𝜎𝜎𝑏𝑏
2
Where:
σt
=  total process standard deviation
σw
=
within-lot variation
σb
=  between-lot variation
Due to the squaring under the radical, if σb < σw, the impact of the between-lot variation σb on the total
process variation decreases rapidly the less it is compared to the within-lot variation σw. Table 9.8-1 shows
this impact.

**Table 9.8-1 Effect of Between-Lot Variation on the Total Process Variance**

Within
𝝈𝝈𝒘𝒘
Between
𝝈𝝈𝒃𝒃
Total Process
Standard
Deviation
𝝈𝝈𝒕𝒕
Total Variance
𝝈𝝈𝒕𝒕𝟐𝟐
Between as %
of Total
𝝈𝝈𝒃𝒃
𝟐𝟐
𝝈𝝈𝒕𝒕
𝟐𝟐
1.00
2.00
2.24
5.00
80%
1.00
1.50
1.80
3.25
69%
1.00
1.00
1.41
2.00
50%
1.00
0.75
1.25
1.56
36%
1.00
0.50
1.12
1.25
20%
1.00
0.25
1.03
1.06
6%

142
If the between-lot variation (σb) is half (50%) of the within-lot variation (σw), the former only accounts for
20% of the total process variance. Reasonable PPQ acceptance criteria for between-lot variation would
typically be 75%, 50%, or 25% of the within-lot variation. The sample size within lots and the number of
lots required may be determined by the statistical power to detect the differences of interest. Acceptance
criteria could be based on point-estimates of the variance components or confidence intervals.

### 9.9 Sample Size

Table 9.9-1 shows the sample size n required to estimate a standard deviation to within a specified percent
of its true value with 90% and 95% confidence (13, 14). This method does not require a previous estimate or
reference sigma since the error is expressed in relative, rather than absolute, terms.

**Table 9.9-1 Sample Size to Estimate a Standard Deviation to Within ±x% of True Value**

Confidence
± % Relative Error
n
90%
20%
35
90%
25%
23
90%
33%
14
95%
20%
49
95%
25%
32
95%
33%
18

**Table 9.9-1 indicates that a minimum of 32 lots are required for the estimated between-lot standard**

deviation to be within ±25% of its true value σb with 95% confidence. Since the table assumes the lot means
are estimated exactly, more than 32 lots may be required if the sample size per lot is small or there is
substantial within-lot variation. Table 9.9-1 shows the difficulty in estimating a standard deviation: large
sample sizes are required to obtain precise estimates. Again, a phased approach could be used where the
PPQ is based on five lots, and additional data is collected during CPV to obtain a more precise estimate.

### 9.10 Demonstrate Between-Lot Standard Deviation is Lower than an

Acceptable Value
Generally, testing enough samples to estimate the within-lot standard deviation σw with reasonable precision
is easy. Also, estimates of the within-lot variation are often available before PPQ from Stage 1 data or other
similar production processes. The total process standard deviation uses Equation 1.
The PPQ acceptance criterion for σb may be selected to show that the total process variation is acceptable
(e.g., 3-sigma capable or another desirable value). Knowing the maximum acceptable value for the between-
lot standard deviation (allowing an acceptable total standard deviation for the process), the sample size
could be chosen to ensure that the between-lot standard deviation is less than the acceptable value with a
high level of confidence (e.g., 90%).

143

### 9.11 Demonstrating Equivalence Between Lots

Differences between PPQ lots can be statistically detectable, but they might be small enough to consider the
lots equivalent. To use this method, an equivalence test using multiple two-one-sided tests (TOST) or
another extension of the equivalence concept may be used. The number of lots required would be based on
the statistical power for the equivalence procedure chosen (15). For example, assuming a true difference of
means of within-batch SD/5, the necessary sample size to demonstrate equivalence of means of two batches
with equivalence limits of ± within-batch SD with a power of 80% is equal to n = 21 per batch.

144

## 10.0 Appendix II: Types of Control Charts

Section 10.0 (Appendix II) lists recommended statistical process control tools, such as control charts, that
may be utilized for process validation (PV) data trending. Refer to TR 59 for additional information (16).

### 10.1 Control Charts for Variables Data

Commonly used control charts for variables data are (8,9):

𝑥̅/R or 𝑥̅/S "Shewhart" chart using ±3-sigma limits

Individuals/Moving Range (I/MR) chart

Levey-Jennings chart

Moving average chart

Exponentially weighted moving average (EWMA) chart

Cumulative sum (CUSUM) chart

### 10.2 Control Charts for Attributes Data

The most-used control charts for attributes data are (8,9):

p-chart for fraction or percent nonconforming (binomial data)

np-chart for number of units nonconforming (binomial data)

c-chart for number of defects (Poisson data)

u-chart for average number of defects (Poisson data)
In addition, the I/MR chart can be used for attributes data if most of the plotted values are not zero (0).
For very large sample sizes, for instance, greater than 500 or 1,000 (e.g., percent of tablets rejected across
lots on a sample of 1000 or more tablets inspected per lot with an automatic metal detector) and long time
periods, the assumptions of a binomial or Poisson distribution that attributes charts use is often violated. In
that case, alternative approaches to the common charts for attributes data could be used:

Laney’s p-chart and u-chart deal appropriately with under- or over-dispersion in the data, which
lead respectively to an increased or a decreased number of points outside the control limits with the
corresponding classical charts for attributes (17)

I/MR or Levey-Jennings’s control chart

Performance of Control Charts: Average Run Length
The ability of a control chart to detect a shift in the process is measured by the average number of sample
periods before the shift is detected. This is called the Average Run Length (ARL). When the process has not
changed (a shift of 0), it is desirable to have a large ARL to keep the false-alarm rate low. However, if the
process has shifted, it is desirable to have a small ARL to detect the change quickly. ARL is most important

145
The ability of a control chart to detect a shift in the process is measured by the average number of sample
periods before the shift is detected. This is called the Average Run Length (ARL). When the process has not
changed (a shift of 0), it is desirable to have a large ARL to keep the false-alarm rate low. However, if the
process has shifted, it is desirable to have a small ARL to detect the change quickly. ARL is most important
in CPV, when it is desirable to detect a significant process change within a short period of time. The ARL
can be used to help select the sample size and frequency of sampling. Tables of ARLs comparing different
control chart types are available and can also be calculated by software.

146

## 11.0 Appendix References

1. Meeker, W.Q., Hahn, G.J., Escobar, L.A. Statistical Intervals: A Guide for Practitioners and
Researchers. John Wiley & Sons, 2017.
2. U.S. Food and Drug Administration. Guidance for Industry: PAT — A Framework for Innovative
Pharmaceutical Development, Manufacturing, and Quality Assurance; U.S. Department of Health
and Human Services: Rockville, Md., 2004.
3. Oliver, J. A 3-D Risk Assessment Model. J Validation Tech 2008, 14 (5), 70-76.
4. Makkonen, L. Bringing Closure to the Plotting Position Controversy. Communications in
Statistics—Theory and Methods 2008, 37, 460–67.
5. Lenth, R V. Java Applets for Power and Sample Size [computer software].
http://homepage.divms.uiowa.edu/~rlenth/Power/ (accessed 20 Mar 2011).
6. Hoffman, D; Kringle, R. Two-Sided Tolerance Intervals for Balanced and Unbalanced Random
Effects Models J Biopharm Stat 2005, 15 (2), 283-93.
7. Vangel, M. New Methods for One-Sided Tolerance Limits for a One-Way Balanced Random-
Effects ANOVA Model. Technometrics 1992, 34, 176-85.
8. Montgomery, D C. Introduction to Statistical Quality Control, 6th Edition. John Wiley & Sons,
Inc.: Hoboken, NJ;, 2009; p. 63.
9. Wheeler, D J, Chambers, D S. Understanding Statistical Process Control, Third Edition. SPC
Press: Knoxville, Tenn., 2010.
10. Scherder, T. et al. Benefits and challenges of process capability metrics. Pharmaceutical
Engineering, ISPE, November-December, 2023.
11. Burdick, R. K. & Graybill, F. A. Confidence intervals on variance components. CRC Press, 1992.
12. Farnuma, N; Stantona, L. Narrow Limit Gauging: Go or No Go? Qual Eng 1991, 3 (3), 293-307.
13. Nelson, L. Nomograph of Sample Size for Estimating Standard Deviation. J Quality Tech 2018, 11
(Sup1), 25-26.
14. Greenwood, J A; Sondomire, M M. Sample Size Required for Estimating the Standard Deviation as
a Percent of its True Value. J Am Statistical Assoc 1950, 45 (250), 257-60.
15. Flight, L., and Julious, S. A. Practical guide to sample size calculations: non-inferiority and
equivalence trials. Pharmaceut. Statist., 2016, 15: 80–89.
16. Parenteral Drug Association. Technical Report No. 59: Utilization of Statistical Methods for
Production Monitoring; PDA: Bethesda, Md., 2012.
17. Laney, D B. Improved Control Chart for Attributes. Qual Eng 2002, 14 (4), 531-37.

147
Relevant Vendor and Supplier Resources
The following paid advertisement is presented to the reader as potential supplemental resources which may
aid in execution or fulfillment of the concepts, material, and information resented herein.
The inclusion of this resource does not imply any endorsement or preference on part of PDA or the authors
of this technical document.

Terms of Usage for PDA Electronic Publications (Technical Reports, Books, etc.)
An Authorized User of this electronic publication in the purchase.
Authorized Users are permitted to do the following:
•
Search and view the content of the PDA Electronic Publication
•
Download the PDA Electronic Publication for the individual use of an Authorized User
•
Print the PDA Electronic Publication for the individual use of an Authorized User
•
Make a reasonable number of photocopies of a printed PDA Electronic Publication for the
individual use of an Authorized User
Authorized Users are not permitted to do the following:
•
Allow anyone other than an Authorized User to use or access the PDA Electronic Publication
•
Display or otherwise make any information from the PDA Electronic Publication available to
anyone other than an Authorized User
•
Post the PDA Electronic Publication or portions of the PDA Electronic Publication on websites,
either available on the Internet or an Intranet, or in any form of online publications without a license
from PDA, Inc.
•
Transmit electronically, via e-mail or any other file transfer protocols, any portion of the PDA
Electronic Publication
•
Create a searchable archive of any portion of the PDA Electronic Publication
•
Use robots or intelligent agents to access, search and/or systematically download any portion of the
PDA Electronic Publication
•
Sell, re-sell, rent, lease, license, sublicense, assign or otherwise transfer the use of the PDA
Electronic Publication or its content
•
Use or copy the PDA Electronic Publication for document delivery, fee-for-service use, or bulk
reproduction or distribution of materials in any form, or any substantially similar commercial
purpose
•
Alter, modify, repackage or adapt any portion of the PDA Electronic Publication
•
Make any edits or derivative works with respect to any portion of the PDA Electronic Publication
including any texts or graphics
•
Delete or remove in any form or format, including on a printed article or photocopy, any copyright
information or notice contained in the PDA Electronic Publication
•
Combine any portion of the PDA Electronic Publication with any other material
To License or purchase Reprints
•
Licensing: Site licenses and licenses to distribute PDA Electronic Publication can be obtained for a
fee.
•
To learn more about licensing options and rates, please contact:
Whitney Alexis, Publications Manager, +1 (301) 656-5900.
Written correspondence can be sent to: PDA, Inc. Attn: Whitney Alexis, 4350 East West Highway,
Suite 150, Bethesda, MD 20814.
•
Reprints: Reprints of PDA Electronic Publication can be purchased for a fee.
To order reprints, please contact:
Whitney Alexis, Publications Manager, +1 (301) 656-5900.
Written correspondence can be sent to: PDA, Inc. Attn: Whitney Alexis, 4350 East West Highway,
Suite 150, Bethesda, MD 20814.
Technical Document No. 60: Process Validation: A Lifecycle Approach
About PDA Technical Documents
PDA Technical Documents (Technical Reports, Points to Consider, Technology Guides, etc.) are global
consensus documents, prepared by member-driven teams (listed on inside front cover) comprised of content
experts, including scientists and engineers working in the pharmaceutical/biopharmaceutical industry,
regulatory authorities and academia. The viewpoints and strategies presented in this document are those of
the authors as independent subject matter experts and do not necessarily represent the policies and practices
of their respective companies.
While in development, PDA Technical Documents are subjected to a global review by PDA members and
other topic-specific experts, often including regulatory officials. Comments from the global review are then
considered by the authoring team during the preparation of the final working draft. The level of expertise of
the team and those participating in the global review ensure a broad perspective reflecting best thinking and
practices currently available.
The final working draft is next reviewed by the PDA Advisory Board(s) that sanctioned the project. PDA’s
Advisory Boards are: Science Advisory Board, Advanced Therapy Medicinal Products Advisory Board,
Biopharmaceutical Advisory Board, and Regulatory Affairs and Quality Advisory Board. Following this
stage of review, the PDA Board of Directors conducts the final review and determines whether or not to
publish the document as an official PDA Technical Document.
While PDA goes to great lengths to ensure each Technical Document is of the highest quality, all readers are
encouraged to contact PDA about any scientific, technical, or regulatory inaccuracies, discrepancies, or
mistakes that might be found in any of the documents. Readers can email PDA at: TRfeedback@pda.org.
PDA thanks the following peer reviewers for lending their time and expertise to ensure the quality and
relevance of this technical document:
Peer Reviewers
James Agalloco
Agalloco & Associates Inc.
Nilkantha Banerjee
Nivagen Pharmaceuticals, LLC
Cornelius Conor Collins, PhD
GSK
Albrecht Gröner, PhD
PathoGuard Consult

Stacey Largent
ValSource, Inc.
Hendrick Plante, PhD
Pharmaceutical Consultant
Lalit Saxena
Samsung Biologics

Technical Document No. 60: Process Validation: A Lifecycle Approach
Sanctioning Advisory Board: SAB
Chair
Gabriele Gori
Chiesi Farmaceutici, S.p.A.
Vice-Chair
Ivy Louis
VIENNI Training & Consulting LLP
Frederic Ayers
ValSource, Inc.
Tiffany Baker
ValSource, Inc.
Gregory Bassett
Bristol Myers Squibb
Emily Cheah, PhD
Charles River Laboratories
Thomas Damratoski
CivicaRX
Cheryl Essex
Sanofi
David Exline
Gateway Analytical, LLC
Rhonda Ezell
Alkermes
Mauro Giusti
Eli Lilly Italia

Rishikesh Jaiwant
GSK
Austin Kuo
Eli Lilly & Company
Beth Kirschenheiter
Bristol Myers Squibb
Gitte Letting
Novo Nordisk A/S
Bruce Loxley
GSK
Vincent O’Shaughnessy
Amgen
Ken Paddock
Merz Therapeutics
Julian Petersen
groninger & co. gmbh
Jim Polarine Jr.
STERIS Co.
Alexander Stoll, PhD
Fresenius-Kabi
Kristin Valente
Merck & Co., Inc.
Rick Watson
Merck & Co., Inc.

Technical Document No. 60: Process Validation: A Lifecycle Approach
 PDA Officers
Chair
Anil Sawant, PhD
Chair-Elect
Melissa Seymour
Secretary
Bettine Boltres, PhD
Treasurer
Emma Ramnarine, PhD
Immediate Past-Chair
Sue Schniepp
President
Glenn E. Wright

PDA Publication
Production and Editing
Jessie Lindner
Project Manager, SAB
Danielle Bretz
Technical Designer, Scientific
& Regulatory Affairs
Josh Eaton
Senior Director, Scientific
& Regulatory Affairs
Walter Morris
Senior Director, Publishing
and Press Relations
Marilyn Foster
Technical Editor/Writer

PDA Directors
Marcia Baroni
Lisa Bennett
Cristiana Campa, PhD
Andrew Chang, PhD
Cylia Chen Ooi
Marc Glogovsky
Andrew Hopkins
Ivy Louis
Amy McDaniel, PhD
Morten Munk
Brigitte Reuter-Haerle
Osamu Shirokizawa

pda.org

PDA Global Headquarters
4350 East West Highway, Suite 600
Bethesda, MD 20814 USA
TEL +1 (301) 656-5900
FAX +1 (301) 986-0296
PDA Europe
Am Borsigturm 60
13507 Berlin, Germany
PDA Asia Pacific
20 Bendemeer Rd. #04-02  B S
Bendemeer Centre, Singapore
339914