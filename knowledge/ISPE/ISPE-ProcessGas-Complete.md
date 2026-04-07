# ISPE Good Practice Guide: Process Gases: Design, Qualification, and Operation of Pharmaceutical Process Gas Systems

[PAGE 1]
[PAGE 2]
Find the Problem...
Before It Finds You
Compressed Air and Process Gas Testing
using the AirCheck Kit™
•
Test for Particles, Water, and Oil
using ISO 8573-1:2010 Purity Classes
or your own SOP requirements
•
Easy-to-use sampling kit combined with
independent 3rd party laboratory
analysis
•
An economical approach to document
your air and gas quality
Trace Analytics is an A2LA accredited laboratory specializing in compressed air
and gas quality analyses. With over 21 years experience and a dedication to
customer service, Trace Analytics provides customers worldwide with an excellent
solution to Risk Management and Quality Assurance.
TRACE ANALYTICS, LLC
www.AirCheckLab.com
800-247-1024 • 512-263-0000 • Fax 512-263-0002
[PAGE 3]
Process
Gases
Disclaimer:
This Guide is meant to assist pharmaceutical companies in determining accepted good processes and procedures for
gas systems used to support production. The ISPE cannot ensure and does not warrant that a system managed in
accordance with this Guide will be acceptable to regulatory authorities. Further, this Guide does not replace the need
for hiring professional engineers or technicians.
Limitation of Liability
In no event shall ISPE or any of its affiliates, or the officers, directors, employees, members, or agents of each
of them, be liable for any damages of any kind, including without limitation any special, incidental, indirect, or
consequential damages, whether or not advised of the possibility of such damages, and on any theory of liability
whatsoever, arising out of or in connection with the use of this information.
No part of this document may be reproduced or copied in any form or by any means – graphic, electronic, or
mechanical, including photocopying, taping, or information storage and retrieval systems – without written permission
of ISPE.
All trademarks used are acknowledged.
ISBN 978-1-936379-12-5
[PAGE 4]
Process Gases
Preface
The purpose of the ISPE Good Practice Guide: Process Gases is to document accepted good processes and
procedures within pharmaceutical manufacturing applications. The Guide promotes science- and risk-based methods
for the design, construction, commissioning, and qualification processes for gas systems used to support production.
This Guide considers those gases that come into direct contact with the biopharmaceutical and pharmaceutical
manufacturing process streams; these include:
•
nitrogen
•
oxygen
•
argon
•
carbon dioxide
•
compressed air
This Guide aims to define current good practices in this area, providing information to allow organizations
to benchmark their practices and improve on them. The Guide also considers some of the issues relating to
sustainability and economics.
The intended audience for this Guide is global, with particular focus on US (FDA) and European (EMA) regulated
facilities.
The information provided in this Guide reflects the cumulative knowledge and experiences of the authors, editors, and
reviewers. There is no single approach to satisfy every situation; but this Guide attempts to provide the background to
assist readers to make an educated choice.
[PAGE 5]
Process Gases
Acknowledgements
This Guide was developed by a team led by Chad Larrabee of Ingersoll Rand Industrial Technologies and Nicholas
Haycocks of Amgen.
Section Writers and Reviewers
The ISPE Good Practice Guide: Process Gases has been sponsored by engineering executives from owner
organizations, consulting firms, and ISPE senior management.
This Guide was produced by a dedicated team of subject matter experts from across the industry. The leaders of
this Guide would like to recognize the following participants who took lead roles in the authoring of this document.
(Organization affiliations are as of the final draft of the Guide.)
Katrin Åkerlindh
Linde Gas
Sweden
Tracey Coffey
Commissioning Agents, Inc.
USA
Joseph DePaul
Skye Technical Services
USA
Roger Emmett
Praxair Distribution Inc.
Canada
Michelle Gonzales
Amgen (retired)
USA
Nicholas Haycocks
Amgen
USA
Wade Johnston
Ciba Vision Corp. (A Novartis Company)
USA
Tom Larkin
Integrated Process Technologies
USA
Chad Larrabee
Ingersoll Rand Industrial Technologies
USA
Jerold Martin
Pall Corp., Life Sciences div.
USA
Bonnie Smelser
Progenics Pharmaceuticals Inc.
USA
Frank van der Steen
SynCo Bio Partners B.V.
The Netherlands
Peter Vishton, P.E.
IPS Contract Engineer, GMP Utility Systems
USA
Ian Nicholson
IDT Australia
Australia
The Team Leads would like to express their grateful thanks to Alex Konopka for his support and encouragement and
to Nick Herrig for his contribution of miscellaneous information, courtesy of Parker Hannifin.
Many other individuals reviewed and provided comments during the preparation of this Guide; although they are too
numerous to list here, their input is greatly appreciated.
The team would also like to express their gratitude to Gail Evans, for her patience, guidance, and support during the
development of this document.
Cover photo: Courtesy of Veolia Water Solutions & Technologies, www.veoliawaterst.com.
[PAGE 6]
ISPE Headquarters
600 N. Westshore Blvd., Suite 900, Tampa, Florida 33609 USA
Tel: +1-813-960-2105, Fax: +1-813-264-2816
ISPE Asia Pacific Office
73 Bukit Timah Road, #04-01 Rex House, Singapore 229832
Tel: +65-6496-5502, Fax: +65-6336-6449
ISPE China Office
Suite 2302, Wise Logic International Center
No. 66 North Shan Xi Road, Shanghai, China 200041
Tel +86-21-5116-0265, Fax +86-21-5116-0260
ISPE European Office
Avenue de Tervueren, 300, B-1150 Brussels, Belgium
Tel: +32-2-743-4422, Fax: +32-2-743-1550
www.ISPE.org
[PAGE 7]
Process Gases
Table of Contents
Introduction.......................................................................................................................... 7
1.1
Purpose........................................................................................................................................................7
1.2
Scope...........................................................................................................................................................7
1.3
Benefits.........................................................................................................................................................7
1.4
Objectives.....................................................................................................................................................8
1.5
Key Concepts...............................................................................................................................................8
1.6
Structure of this Guide................................................................................................................................ 11
Development of the User Requirements Documentation.............................................. 13
2.1
Introduction.................................................................................................................................................13
2.2
Process Requirements...............................................................................................................................13
2.3
Defining User Requirements for a Process Gas System............................................................................15
2.4
Equipment Performance/Operational and Maintenance Requirements.....................................................16
2.5
Control/Monitoring System Requirements..................................................................................................17
2.6
Facility........................................................................................................................................................17
2.7
Reference Documents................................................................................................................................18
2.8
Roles and Responsibilities.........................................................................................................................18
Design Options – Process Gas Generation/Supply Systems....................................... 21
3.1
Introduction.................................................................................................................................................21
3.2
Process Gases: Descriptions and Properties.............................................................................................22
3.3
Process Gases: Typical Applications..........................................................................................................24
3.4
Applicable Regulations, Standards, and Codes.........................................................................................25
3.5
Safe Handling and Storage of Gases.........................................................................................................27
3.6
User Requirements Considerations for Process Gases.............................................................................33
Design Options – Compressed Air Systems.................................................................. 37
4.1
Design of Generation of Compressed Air Systems....................................................................................37
4.2
Equipment Selection...................................................................................................................................38
4.3
Compressors..............................................................................................................................................38
4.4
Compressed Air System Controls...............................................................................................................42
4.5
Air Treatment..............................................................................................................................................43
4.6
Dryers.........................................................................................................................................................44
4.7
Compressed Air Filters...............................................................................................................................48
4.8
Air Receivers..............................................................................................................................................49
4.9
Traps and Drains........................................................................................................................................50
4.10	 Designing for Redundancy.........................................................................................................................51
Design Options – Distribution Systems.......................................................................... 53
5.1
Concepts....................................................................................................................................................53
5.2
Non-Return or Check Valves......................................................................................................................57
5.3
Pressure Reducing Valves.........................................................................................................................57
5.4
Mixing Valves..............................................................................................................................................58
5.5
Filtration......................................................................................................................................................59
5.6
Filters in Compressed Air Systems.............................................................................................................62
5.7
Material Selection.......................................................................................................................................63
Design Options – Control and Monitoring Systems...................................................... 69
6.1
Introduction.................................................................................................................................................69
6.2
Control Systems.........................................................................................................................................69
6.3
Monitoring...................................................................................................................................................70
[PAGE 8]
Process Gases
Risk Assessment............................................................................................................... 81
7.1
Introduction.................................................................................................................................................81
7.2
Quality Risk Management for Process Gas Systems.................................................................................82
7.3
Risk Assessment Process..........................................................................................................................83
7.4
Risk Control................................................................................................................................................85
7.5
Risk Assessment Communication..............................................................................................................86
7.6
Risk Review................................................................................................................................................86
Final Design....................................................................................................................... 89
8.1
Introduction.................................................................................................................................................89
8.2
Engineering Turnover Package..................................................................................................................89
8.3
Commissioning...........................................................................................................................................91
8.4
Installation and Operational Tests..............................................................................................................93
8.5
Performance Testing...................................................................................................................................94
8.6
Acceptance and Release............................................................................................................................94
Operation and Maintenance............................................................................................. 97
9.1
Maintenance...............................................................................................................................................97
9.2
Calibration..................................................................................................................................................98
10	 Appendix 1 –	Example of the Development of a Sampling Strategy Based on a
Risk Assessment....................................................................................... 99
10.1	 System Description...................................................................................................................................100
10.2	 Control Strategy........................................................................................................................................100
10.3	 Moisture Content......................................................................................................................................102
10.4	 Hydrocarbons/Oil......................................................................................................................................102
10.5	 Viable and Non-Viable Particulate............................................................................................................103
10.6	 Microbial Levels........................................................................................................................................103
Appendix 2 – Risk Assessment Examples.................................................................... 109
12	 Appendix 3 – Calibration Strategies...............................................................................113
13	 Appendix 4 – Sample User Requirement Specifications..............................................117
14	 Appendix 5 – The Effect of System Leakage................................................................ 121
14.1	 Minimize Leaks.........................................................................................................................................122
14.2	 Pressure/Flow Controllers........................................................................................................................122
15	 Appendix 6 – Nitrogen Gas Generation Systems......................................................... 125
16	 Appendix 7 – Miscellaneous Information...................................................................... 129
17	 Appendix 8 – References................................................................................................ 135
18	 Appendix 9 – Glossary.................................................................................................... 139
18.1	 Abbreviations and Acronyms....................................................................................................................140
18.2	 Definitions.................................................................................................................................................141
[PAGE 9]
Process Gases
Introduction

### 1.1 Purpose

The purpose of the ISPE Good Practice Guide: Process Gases is to document accepted good processes and
procedures within pharmaceutical manufacturing applications. The Guide promotes science- and risk-based methods
for the design, construction, commissioning, and qualification processes for gas systems used to support production.
The Guide is intended to align with ICH Q9 and ASTM E2500-07 (References 3 and 23, Appendix 8).

### 1.2 Scope

This Guide considers those gases that come into direct contact with the biopharmaceutical and pharmaceutical
manufacturing process streams; these include:
•
nitrogen
•
oxygen
•
argon
•
carbon dioxide
•
compressed air
Medicinal or medical gases, breathing air, and steam are outside the scope of this Guide.
Process streams include bodily contact surfaces of invasive medical devices and fluid paths of medical devices that
are used for intravenous solution, blood, or other critical applications to administer life saving or sustaining fluids.
This Guide focuses on defining cost effective engineering approaches and practices used to deliver process gas
systems for a manufacturing facility in a timely manner that will meet its intended purpose. Specifically, the Guide
addresses the process of designing, constructing, commissioning, and qualifying a process gas system regulated
by the FDA or other regulatory authorities, e.g., the EMA. The Guide also addresses international guidelines and
regulations.
The Guide is neither a standard nor a GMP. It is not intended to replace governing laws, codes, standards, or
regulations that apply to facilities of this type. These are mentioned only for completeness and where their impact
affects facility, equipment, and utility design relative to cGMPs. The use of this document for new or existing facilities,
equipment, or utilities is at the discretion of the owner or user.
This Guide is not intended to address any aspect of process/product validation. This is a subject that has been well
defined by the FDA and other authorities, and for which substantial guidance documentation exists.

### 1.3 Benefits

This Guide describes the fundamentals of process gas systems used within the GMP workplace environment and
provides:
•
guidance on accepted industry practices related to gas systems
•
the life science engineering community with a common language and understanding of gas systems
[PAGE 10]
Process Gases
•
a common resource for engineering information related to gas systems
•
quality professionals with an understanding of which system parameters are important to product quality and
patient safety
•
information on how to avoid increasing facility installation and operational costs
•
regulatory professionals with a scientific risk-based approach to demonstrate compliance

### 1.4 Objectives

The Guide aims to clarify gas system issues critical to product quality for the production of biopharmaceutical and
pharmaceutical drug substances and drug products.

### 1.5 Key Concepts

This Guide aims to promote a science- and risk-based approach to provide an effective basis for the planning, design,
and execution of gas system projects.
Five key concepts are applied throughout this Guide:
1.
Product and Process Understanding
An understanding of the supported process is fundamental to determining system requirements. Product and
process understanding is the basis for making science- and risk-based decisions to ensure that the system is fit
for its intended use. Efforts to ensure fitness for intended use should focus on those aspects that are critical to
patient safety and product quality. These critical aspects should be identified, specified, and verified.
Systems within the scope of this Guide support the manufacture and preservation of materials used in many
applications including but not limited to clinical trials, commercial production of API and final products. For some
manufacturing systems, process requirements depend on a thorough understanding of product characteristics,
identification of Critical Quality Attributes (CQAs) and related Critical Process Parameters (CPPs), which enable
process requirements to be accurately defined.
Specification of requirements should be focused on critical aspects. The extent and detail of requirement
specification should be commensurate with associated risk, complexity, and novelty of the system.
2.
Life Cycle Approach within a Quality Management System
Adopting a system life cycle approach entails defining activities in a systematic way from system conception
to retirement. This enables the optimization of the management control process. The life cycle should form a
fundamental part of the organization’s Quality Management System (QMS), which should be maintained up to
date as new ways of working are developed.
As experience is gained in system use, the QMS should enable continuous process and system improvements
based on periodic review and evaluation, operational and performance data, and root-cause analysis of failures.
Identified improvements and corrective actions should follow change management.
A suitable life cycle, properly applied, enables the continuous assurance of quality and fitness for intended use,
and achieving and maintaining compliance with regulatory requirements.
[PAGE 11]
Process Gases
3.
Scaleable Life Cycle Activities
Life cycle activities should be scaled according to:
•
system impact on patient safety, product quality, and data integrity (risk assessment)
•
system complexity and novelty (architecture and categorization of system components)
•
outcome of supplier assessment (supplier capability)
•
Compliance and inspection risk
Potential business risk also may influence the scaling of life cycle activities.
The strategy should be clearly defined in a plan and follow established and approved policies and procedures.
4.
Science-Based Quality Risk Management
Quality Risk Management is a systematic process for the assessment, control, communication, and review of
risks.
Application of Quality Risk Management enables effort to be focused on critical aspects of a system in a
controlled and justified manner.
Quality Risk Management should be based on clear process understanding and potential impact on patient
safety, product quality.
Qualitative or quantitative techniques may be used to identify and manage risks. Controls are developed to
reduce risks to an acceptable level. Implemented controls are monitored during operation to ensure ongoing
effectiveness.
5.
Utilizing Supplier Involvement
Regulated organizations should seek to maximize supplier involvement throughout the system life cycle in order
to utilize knowledge, experience, and documentation, subject to satisfactory supplier assessment.

#### 1.5.1 Key Terms and Terminology Used in this Guide

This Guide uses the term “User Requirements” according to the ISPE Good Practice Guide: Applied Risk
Management for Commissioning and Qualification (Reference 20, Appendix 8). Organizations may alternatively use
the term User Requirement Specifications or Process User Requirements for the same document type.
This Guide uses Critical Quality Attributes (CQAs) and Critical Process Parameters (CPPs) according to the definition
given below (from ICH Q8) (Reference 2, Appendix 8), which states that “CQAs are generally associated with the
drug substance, excipients, intermediates (in process materials) and drug product.” In this Guide we have applied
them to the system output (gas) considering it as an excipient; therefore having direct product contact or becoming
part of the final product formulation. This has been done to help facilitate the risk assessment process.
Companies may adapt the terminology to suit their practices, with the actual CQAs and CPPs defined based on the
application and considering company practices and standards.
[PAGE 12]
Process Gases
Critical Aspects
Are typically functions, features, abilities, and performance characteristics necessary for the manufacturing process
and systems to ensure consistent product quality and patient safety. They should be identified and documented
based on scientific product and process understanding. (ASTM E2500-07) (Reference 23, Appendix 8)
Critical Process Parameter (CPP)
A process parameter whose variability has an impact on the critical quality attribute and therefore should be
monitored or controlled to ensure the process produces the desired quality. (ICH Q8 (R2) II 4.0) (Reference 2,
Appendix 8)
Critical Quality Attribute (CQA)
A physical, chemical, biological, or microbiological property or characteristic that should be within an appropriate limit,
range, or distribution to ensure the desired product quality.
Note: CQAs are generally associated with the drug substance, excipients, intermediates (in process materials) and
drug product. (ICH Q8 (R2) II 2.2) (Reference 2, Appendix 8)
GxP Compliance
Meeting all applicable pharmaceutical and associated life-science regulatory requirements.
(Note: as the Guide is focused on production facilities Good Manufacturing Practice (GMP) is also used.)
Quality Management System (QMS)
Management system to direct and control an organization with regard to quality (e.g., ISO).
(This is equivalent to Quality System as defined in ICH Q9. (Reference 3, Appendix 8)
Subject Matter Expert (SME)
Those individuals with specific expertise in a particular area or field. SME responsibilities include planning and
defining verification strategies, defining acceptance criteria, selection of appropriate test methods, execution of
verification tests, and reviewing results. (ASTM E2500-07) (Reference 23, Appendix 8)
System Owner
The person ultimately responsible for the system performance. This person may be the head of the functional unit or
department using that system, or maintaining the system although the role should be based on specific knowledge
of the process rather than position in the organization. The system owner is responsible for ensuring that the system
and its operation is in compliance and fit for intended use with applicable Standard Operating Procedures (SOPs)
throughout its useful life. Responsibility for control of system access should be agreed between process and system
owner. In some cases, the process owner also may be the system owner.
(Note: Ownership of the data held on a system should be defined and typically belongs to the system owner.)
[PAGE 13]
Process Gases

### 1.6 Structure of this Guide

#### 1.6.1 Gases Defined

Process gases are defined as gases which can affect product quality. This Guide considers the following gases:
•
nitrogen
•
oxygen
•
argon
•
carbon dioxide
•
compressed air
The Guide aims to integrate existing standards with specific guidance related to process gases. It also recommends a
risk-based approach to system design and qualification.
As compressed air is usually generated on-site, the Guide sections are divided into compressed air and gases (i.e.,
gases other than compressed air).

#### 1.6.2 Development of the User Requirements Specifications

An explicit set of user requirements is considered key to the cost effective design of a process gas system. The user
requirements should be based on the end use of the gas and focus on the requirements for that gas, allowing a
system designer to define the optimum design solution.

#### 1.6.3 Design of Generation and Supply Systems

Discussion of the generation, storage, and supply of gas systems includes on-site generation, as well as bottles and
bulk storage and delivery systems. Discussion of the generation of compressed air includes design considerations for
compressors, filtration, air receivers, dryers, and related controls.

#### 1.6.4 Distribution of Gases

This section of the Guide considers compressed air and gases, and provides advice on selecting the appropriate
materials of construction and fabrication techniques to ensure that the purity of the gas will remain within specification
at the final point of use and to avoid the potential fire hazards associated with oxygen gas.

#### 1.6.5 Control and Monitoring Systems

Control and monitoring systems are described for compressed air and gas systems.

#### 1.6.6 Risk Assessment

Sources of risk can originate from several areas, such as system design, safety features, and the method of
generation/source of the gas.
Quality Risk Management is intended to help users define which aspects of the process gas system may impact
Critical Quality Attributes (CQAs) and Critical Process Parameters (CPPs). The overall goal is to ensure that the
system provides a cost effective solution for the reliable delivery of gas of the specified quality to the point of use and
is consistent with a risk-based approach.
[PAGE 14]
Process Gases
Sections on risk assessment, control, communication, and review aim to assist in understanding of the risk-based
approach as applied to process gases. The design is considered complete when the risk assessment is complete and
the results have been incorporated into the design specifications, as required.
Where users have not adopted a science and risk-based approach, a system and component impact assessment
process may be applied. This approach is described in the ISPE Baseline® Guide: Volume 5 – Commissioning and
Qualification (Reference 19, Appendix 8) and is not covered in detail within this Guide.

#### 1.6.7 Verification

Verification of “fitness for intended purpose” using the information contained in the Engineering Turnover Package
(ETOP) is addressed. The ETOP is considered one of the most important communication routes for the verification
phase. The ETOP for process gas systems should contain confirmation that:
•
the installation meets the specification
•
component and piping identification is complete
•
functional and performance testing process has been performed
This should demonstrate that the process gas system is suitable for its intended purpose and follows science- and
risk-based principles.

#### 1.6.8 Operation and Maintenance

Guidance on specific requirements for the successful operation and maintenance of gas systems is described in this
section.
[PAGE 15]
Process Gases
Development of the User Requirements Documentation

### 2.1 Introduction

This section describes the development of the User Requirements for a process gas system and provides guidance
on how to determine the system Critical Aspects, Critical Quality Attributes (CQAs) and Critical Process Parameters
(CPPs) within the design space of the process serviced.
This chapter follows the principles of the science- and risk-based approaches described in ICH Q9 and ASTM E2500-
07 (References 3 and 23, Appendix 8). The application of risk management and testing is extensively described
within the ISPE Guide: Science and Risk-Based Approach for the Delivery of Facilities, Systems, and Equipment
(Reference 22, Appendix 8), which should be referenced in conjunction with this Guide.
The User Requirements Specification (URS) is a foundation document which assists in the use of a Quality by Design
(QbD) approach and considers the CQAs, CPPs, and critical aspects. This process allows the designer the freedom
to optimize the design during the design and implementation of a new gas system or revisions to existing systems,
allowing the project effort to be focused.
For existing systems that are being modified, existing User Requirements will need modification to suit the proposed
change, or a user requirement for the change can be produced.

### 2.2 Process Requirements

Both existing and potential process requirements should be understood before defining user requirements.
The user requirements should describe what the system is intended to provide and how it may be used, i.e., the
requirements of the product and process it serves. Examples of requirements listed in this section include:
•
intended product per system (e.g., single versus multi-product functionality)
•
process design constraints
•
cleaning/sanitization plans per system1
•
material handling and integration within the system
•
intended functionality of system components
This Guide bases requirements on product and process needs and not on available equipment specifications or
capabilities.
Example:
The dewpoint requirements for process air should be based on needs for processing; non-condensing process air
in the coldest processing environment or on adiabatic cooling on expansion, uses of process air in a process drying
step, etc. In this example, -40°C should not automatically be chosen as a CPP simply based on the availability of
equipment and its capability to produce process air at this temperature.
Examples of process considerations related to user requirements include (see Section 3 of this Guide):
1 Cleaning, sanitization, or SIP may be required for POU filters which may or may not be defined within the system boundary for the process gas
system.
[PAGE 16]
Process Gases
Requirements related to pressure and/or flow:
•
gas required to transfer product
•
Clean in Place (CIP) air for assisting system drainage/drying requirements (typically a business attribute unless
pressure and/or flow are required to drive a reaction)
•
system instrumentation and alarms (These may be quality or business requirements, e.g., an alarm for high
moisture content would be a quality alarm. An alarm for high compressor oil temperature would be a business
issue.)
Where supply pressure (and the related flow) is critical for the equipment fed from the gas system it is common
industry practice to provide a low pressure alarm on the equipment fed – this is considered the most robust approach,
as it is impractical to monitor the pressure in an entire distribution system, and the local pressure at any point will vary
depending on the instantaneous demand on the system.
Requirements related to hydrocarbons (oil content):
•
hydrocarbons may have a toxic impact in cell culture processes (Arch Toxicol (1987) 59:402-407, see Reference
29, Appendix 8)
•
hydrocarbons in oxygen lines may pose a safety risk (ASTM G88-05) (Reference 23, Appendix 8)
•
A typical system requirement is ≤ 25 ppm or “non-detectable.” The process will determine if a lower value is
required or if this is a CQA.
Requirements related to particulate or microbial:
•
Typically the specification provided is the same as the “at rest” environmental conditions of the room into which
the gas is to be introduced. When producing the User Requirements – one question which should be asked is,
“What are the process requirements, is this an appropriate specification to apply?”
Requirements related to moisture:
•
based on potential needs for adiabatic expansion or dewpoint of exposed areas. The specification for dewpoint
should not automatically require -40°C unless the process requires it. There is guidance on moisture levels that
will minimize the risk of microbial growth within a gas system.
•
to minimize the potential for promoting corrosion
Requirements related to quality and purity:
•
pharmacopeial requirements (e.g., USP, EP, JP)
•
Purity requirements should be driven by product and process needs (as defined in regulatory filings).
•
In most cases medical grade gases are not required. Medical gases are only for direct use on people or animals
(i.e., “breathing air,” see NFPA 99 Standard (Reference 16, Appendix 8) or the local equivalent).
Other requirements:
•
What are the applicable codes and standards for safety?
•
traceability for measuring instruments to National Standards
[PAGE 17]
Process Gases
•
What are the relevant organizational standards?

### 2.3 Defining User Requirements for a Process Gas System

The User Requirements should define the requirements on which the system design will be based and the attributes
with which the system should comply.
A simple format should be used for the User Requirements, using, e.g., three categories of requirements:
•
Quality requirements (CPPs and CQAs)
•
business requirements
•
desired attributes
Example:
Specification of requirements and attributes:
•
Materials of construction should not adversely impact the defined CQAs of the process gas provided at the points
of use.
•
The external surfaces of the system must be resistant to the following chemicals used for the room cleaning and
sanitization processes:
-
cleaning agent X @ 5-6% strength
-
sanitizing agent Y @ 7-8% strength
•
Points Of Use (POU): POU 2 – POU 20 have a related Sterilize In Place (SIP) cycle and should be resistant to
clean steam at a pressure of 2 bar.
In the example, grade 316L stainless steel may be appropriate, but the designer may wish to specify a lower cost
alternative. The responsibility for producing a cost effective design lies with the designer (engineer of record). If the
User Requirements specified the use of 316L stainless steel (rather than the requirements or attributes), the designer
would either have to:
1.
ask permission to deviate from the User Requirements (an action that can incur a cost to the client)
2.
specify a sub-optimum choice
Critical Quality Attributes (CQAs) and Critical Process Parameters (CPPs) or Quality Requirements
The User Requirements should define CQAs and any related CPPs for the output of the gas system.
Examples of CPPs in gas systems may include (dependent on process requirements and the potential of the
parameter to impact product quality and/or patient safety):
1.
purity of the gas delivered at the point of use
2.
hydrocarbon levels2
2	 If, for example, hydrocarbons levels could impact cell toxicity in a bioreactor, this would be considered a Critical Process Parameter.
[PAGE 18]
Process Gases
3.
moisture content
4.
particulate/microbial levels
Business Requirements
The business requirements for a process gas system may include volume of supply/pressure required at the points of
use of the system, etc.
Organizations may also list health and safety requirements, especially if these are more stringent requirements than
the regulations (e.g., noise levels). The responsibility to identify and comply with these requirements may be left to
the designer, as they have that responsibility as the engineer of record.
Desired Attributes
Desired attributes are optional requirements. During development of the final equipment specifications, the project
team should determine whether a desired attribute remains within the project scope. Examples of a desired attribute
could include use of an organization’s preferred Programmable Logic Controller (PLC) make and model, instrument
vendor, equipment color.

### 2.4 Equipment Performance/Operational and Maintenance Requirements

These aspects of system specifications should also be addressed in the User Requirements. They may be
incorporated in one of the sections described or in an additional section.
System Capacity/Redundancy/Maintenance Strategy
The User Requirements may specify the usage pattern and requirement per Point of Use (POU). The designer may
be given the responsibility to develop this usage pattern.
An organization’s working hours and maintenance strategy should be defined. For example, is maintenance
performed outside normal working hours (when no equipment redundancy is required) or during working hours
(requiring a level of redundancy)? Items to consider include:
•
bulk storage – potential to use local canisters/generators to backup a centralized system
•
generation/evaporation
•
primary filtration
•
drying
•
final filtration
•
Is a redundant system a requirement or is failure of the system acceptable?
•
Is demand fixed or should future expansion of the system be considered?
[PAGE 19]
Process Gases
Cleaning/Sanitization Requirements3:
There may be requirements for cleaning or sanitization of parts of a system which will require Clean in Place (CIP) or
Sterilize in Place (SIP), e.g., SIP of a final filter immediately prior to the POU process step.
Clean construction requirements would be a standard expectation for a GMP system.
Redundancy/Provision for Maintenance
Redundancy is typically a business requirement. The level of required current and future redundancy should be
documented in the User Requirements for key unit operations.
Sustainability Requirements
Sustainability requirements may include energy recovery and system usage monitoring.
2.5 Control/Monitoring System Requirements
•
specific attributes of the control systems
•
define monitoring, alarming, sequencing requirements, etc.
•
operator interface requirements
•
connectivity with the existing, monitoring systems/accounting practices, alarming systems

### 2.6 Facility

Facility requirements should describe the facility area and utilities that the system is intended to operate in or with,
e.g.:
•
required utilities per system as well as units and ranges (minimum, maximum, and normal)
•
ergonomic considerations
•
operator use of system components and operator/equipment interaction
•
skid size limitations
•
system location
•
room requirements
If a utility is required but qualitative information is not known, the utility may simply be listed as required with no
further information.
Available location for equipment:
•
space requirements
3 Cleaning, sanitization, or SIP may be required for POU filters which may or may not be defined within the system boundary for the process gas
system.
[PAGE 20]
Process Gases
•
existing environmental conditions in that space

#### 2.6.1 System Segregation Requirements

The User Requirements may be used to document agreement on design segregation requirements for systems.
Additional detailed discussion should also occur at the design for impact stage:
•
Are separate headers required for process, instrument, and plant air? Can different headers be classified as
GMP or Good Engineering Practice (GEP)?
•
Are the individual gases feeding a mixed gas station GMP or GEP?
•
Which process parameters should be monitored for a GMP system and which may be monitored for a system
classified as GEP?

### 2.7 Reference Documents

•
other documents that may affect the User Requirements or related user requirement documents
•
documents referenced to be the requirements in the regulatory section
•
site drawings, company specifications, etc.

### 2.8 Roles and Responsibilities

Typical roles are described for the groups involved in the review and approval of the User Requirements.
Note: These may vary depending on the organization and organizational structure.
Operations/System (Process) Owner Function
•
responsible for the identification and specification of business area and end user needs
•
responsible for the identification and specification of intended uses of the system
Engineering Function
•
responsible for the identification and specification of technical requirements and constraints
•
ensures assets are ready for their intended use (This role may include, in part or in their entirety, system
verification requirements.)
Quality Assurance – Regulatory Compliance Function
•
responsible for ensuring that the product/process requirements and regulatory requirements are correctly
specified
•
responsible for verifying that activities and documentation follow applicable site procedures
[PAGE 21]
Process Gases
Validation Function
•
ensures that requirements cover the needs for validation testing (This role may include, in part or entirety, system
verification requirements.)
Other Subject Matter Expert Function
Subject Matter Experts, other than those listed above, may be required to help link requirements to product CQAs
and CPPs.
[PAGE 22]
[PAGE 23]
Process Gases
Design Options – Process Gas Generation/Supply Systems

### 3.1 Introduction

This chapter covers:
•
applications of process gases
•
gas definitions and properties
•
manufacturing considerations
•
applicable regulations
•
handling and safety considerations
•
user requirement considerations for process gases

#### 3.1.1 Compressed Gases

Gases under pressure are commonly referred to as “compressed gases.” A compressed gas means: A gas or mixture
of gases having, in a container, an absolute pressure exceeding 40 psi at 70°F (21.1°C); or a gas or mixture of gases
having, in a container, an absolute pressure exceeding 104 psi at 130°F (54.4°C) regardless of the pressure at 70°F
(21.1°C); or a liquid having a vapor pressure exceeding 40 psi at 100°F (37.8°C) as determined by ASTM D-323-72
(Reference 23, Appendix 8).
Compressed gases may be divided into two categories depending upon their inherent physical state under pressure
and their range of boiling points:
•
non-liquefied gases
•
liquefied gases
Non-Liquefied Gases
Non-liquefied gases are elements, or a combination of elements, that have boiling points lower than -130°F (-90°C).
Examples of non-liquefied gases include:
•
nitrogen
•
oxygen
•
argon
When specific elements become liquefied at extremely low temperatures they are referred to as “cryogenic liquids.”
Liquefied Gases
Liquefied gases are those elements or compounds that become liquid in their containers at ambient temperatures
and at specified pressures from 25 psig (172 kPa) to 1500 psig (10,340 kPa). These gases, or compounds, have
boiling points very near to atmospheric temperatures, in the range of -130°F (-90°C) to 68°F (20°C).
Gases may form an unlimited number of mixtures or compounds, air being the most common example.
[PAGE 24]
Process Gases
Carbon dioxide is an example of a liquefied gas that also has unique physical characteristics in that it may exist as a
gas, liquid, or solid simultaneously at its triple point temperature of -69.9°F (-56.6°C) and at a pressure of 60.4 psig
(416 kPa).

### 3.2 Process Gases: Descriptions and Properties

#### 3.2.1 General Properties and Characteristics of Process Gases

Table 3.1 presents the general properties and characteristics of the atmospheric gases (argon, nitrogen and oxygen),
carbon dioxide, and compressed air.
Table 3.1: General Properties and Characteristics
Note: For additional and comprehensive physical and chemical properties of atmospheric gases, carbon dioxide, and
compressed air, please refer to:
•
material safety data sheets
•
chemical directories
•
compressed gas industry publications
•
other scientific data sources
Chemical Name
Nitrogen
Oxygen
Argon
Carbon
Air,
Dioxide
Compressed
Chemical Formula
N2
O2
Ar
CO2
Mixture of N2
and O2
Appearance/Color
Colorless gas
Colorless gas
Colorless gas
Colorless gas
Colorless gas
Bluish liquid
Odor
None
None
No odor
No odor
None
warning
warning
properties
properties
Molecular Weight (g/mol) 28.01
32.00
39.95
44.01
Boiling Point °F (°C)
-320.4 (-195.8)
-297.3 (-183.0)
-302.5 (-185.9)
Not applicable
O2: -297.3
(-183.0)
N2: -320.4
(-195.8)
Sublimation Point °F (°C) Not applicable
Not applicable
Not applicable
-109.3 (-78.5)
Not applicable
Critical Temperature
-232.7 (-147.1)
-181.4 (-118.6)
-188.1 (-122.3)
87.9 (31.0)
O2: -181.4
°F (°C)
(-118.6)
N2: -232.7
(-147.1)
Relative Density, Gas
0.97
1.11
1.38
1.53 O2: 1.11
(air=1)
N2: 0.97
Solubility mg/l water
2000
O2: 39
N2: 20
[PAGE 25]
Process Gases

#### 3.2.2 Process Gas Sources and Manufacturing Considerations

Nitrogen, oxygen, and argon are naturally occurring elements. The earth’s atmosphere is composed of approximately
78.09% nitrogen; 20.95% oxygen; and 0.93% argon by volume at sea level. Oxygen supports combustion. Materials
that will burn in air e.g., polymeric filters, will do so vigorously in an oxygen-enriched atmosphere. Nitrogen and argon
are considered to be chemically inert.
Nitrogen, oxygen, and argon are most commonly manufactured by fractional distillation of liquefied air. A
manufacturing facility that processes liquefied air is commonly referred to as an air-separation unit. Other
manufacturing methods of gases may include electrolysis, molecular sieve separation, and chemical reactions.
A description of some nitrogen gas manufacturing processes is included as Appendix 5. The purity of the processed
oxygen, nitrogen, and argon by the distillation method typically meets or exceeds minimum purities stated in the
current published pharmacopoeial monographs, see Table 3.2.
Table 3.2: Typical Purity of Air Gases
Typical Cryogenic
USP/NF
EP
JP
Purity (min %)
(min %)
(min %)
(min %)
Oxygen
99.5
99.0
99.5

### 99.5 Nitrogen

99.998*
99.0
99.5

### 99.5 Argon

99.997
-
99.995
-
*Nitrogen purity includes rare gases
Liquefied atmospheric gases may be delivered to users and cylinder packaging operations in specialized vacuum-
insulated trailers. Cylinder packaging operations process the gases into returnable liquid containers and high
pressure cylinders of various sizes. The liquid containers and cylinders are delivered to users and other POUs.
Carbon dioxide occurs naturally in the atmosphere in small quantities, typically between 150 to 300 ppm. Carbon
dioxide may be found in larger concentrations as a by-product in chemical refining and fermentation processes.
Carbon dioxide feedstock is pre-purified from a variety of sources, including:
•
chemical refining processes
•
ammonia production
•
ethyl alcohol production
•
fermentation processes
•
coal powered electrical plant combustion
Carbon dioxide purity levels are typically greater than 99.5% and meet or exceed those required by the current
pharmacopoeial monographs.
Liquid carbon dioxide is normally delivered to customers and cylinder packaging operations in specialized insulated
trailers. Cylinder packaging operations process the gas into dry ice (solid carbon dioxide) and returnable liquid
containers and high pressure cylinders of various sizes. The liquid containers and cylinders are delivered to
customers and other points of use.
[PAGE 26]
Process Gases

### 3.3 Process Gases: Typical Applications

The biopharmaceutical and life science industries use compressed gases in a wide range of applications including:
•
pneumatic systems
•
chemical synthesis
•
controlled atmospheres and blanketing
•
cell cultivation
•
chilling/freezing
•
material extraction
Nitrogen is most commonly used as an inert gas for the conditioning of pharmaceutical products in storage and
transportation. In specific applications, argon or carbon dioxide may be used instead of nitrogen. These gases
(nitrogen, argon, and carbon dioxide) are also used during the manufacture of APIs and in the production of finished
pharmaceutical products.
Gases such as oxygen, compressed air, and carbon dioxide are often used for cultivation of mammalian cells and for
fermentation.
In fermentation and cell culturing processes, to improve productivity, cell growth intensity and viability, modern
aeration concepts with enriched oxygen up to 100% in the inlet air may be applied. The technical implementation
of gaseous oxygen blending in cell culture processes is usually done by mixing of gaseous oxygen and air from the
usual pressure line by means of special devices, followed by sterilizing gas filtration in front of the bioreactor. Further
exhaust and vent filters around the bioreactor may also be exposed to elevated oxygen concentrations.
Filtration of oxygen is a significant safety concern: it leads to accelerated oxidation and corrosion of plastics as well
as spontaneous combustion. Because thinner filter components such as non-woven support and drainage layers are
much more vulnerable by such oxidation effects, it is recommended to use filters that contain more oxidation resistant
materials (e.g., polyaramide nonwoven layers) instead of the relatively fast degradable and flammable polypropylene
non-wovens found in typical air sterilizing Polytetrafluoroethylene (PTFE) membrane filters.
Beside these degradation effects, oxygen flow builds up static charges on filter media surfaces that can lead to
spontaneous discharging with the risk of ignition of degraded organic traces and flammable filter components,
followed by combustion and fire generation inside pipes and filter housings. In some locales, such filter installation for
gaseous oxygen need to be approved by special authorities for plant and operator safety. Based on these facts and
the allocated risks, a single use mode of sterilizing gas filters together with a minimum oxygen concentration for the
duration of the fermentation cycle is recommended in addition to general safety guidelines about oxygen handling.
Blanketing with an inert gas, such as nitrogen, is commonly used in chemical processes, primarily to minimize the risk
of fire, dust explosions, and other explosions. It is also used to prevent undesired reactions with atmospheric oxygen.
Blanketing is a method for constantly maintaining a protective layer of gas on top of APIs or pharmaceutical solution.
The inert gas replaces humid air or explosive vapor of solvents in the headspace of contained batches. Nitrogen
is also used as a blanket in bio-reactors for oxygen replacement for anaerobic fermentation processes. On Water
for Injection or Purified Water, nitrogen blanketing may be used to reduce changes in conductivity associated with
dissolved carbon dioxide.
Oxygen is commonly used to enrich air and to enhance oxidation. In biological processes, it can also be used to
increase the rate of the process, e.g., fermentation or in the cultivation of mammalian cells.
[PAGE 27]
Process Gases
Carbon dioxide is used with incubators, in the production of biopharmaceuticals and in the cultivation of mammalian
cells.
The storage of biological materials at very low temperatures is known as “cryo-preservation.” Cryo-preservation is
used to ensure the survival of living cells and organisms. The cells can be stored either submerged in liquid nitrogen
or in contact with the cold vapor phase of nitrogen.
Supercritical Fluid Extraction (SFE) refers to a process in which a Supercritical Fluid (SF) is used as a solvent. At
critical temperatures and pressures, SFs possess the properties of both the liquid and gas, with density values similar
to those of liquids and flow properties similar to those of gases, and are thus labeled as fluids. The most widely used
SF gas is carbon dioxide (CO2).

### 3.4 Applicable Regulations, Standards, and Codes

Gas suppliers can describe the quality of gases as either “industrial” or “pharmaceutical.” Gas should be purchased
according to an agreed specification and delivered with a Certificate of Conformity (CoC) or a Certificate of Analysis
(CoA), depending on the criticality of the gas, i.e., where in the process the gas is to be used.
Gas production normally follows Good Engineering Practices (GEPs). For further information see the ISPE Good
Practice Guide: Good Engineering Practice (Reference 20, Appendix 8). Gas is not a medicinal product and does not
need to be produced following Good Manufacturing Practices (GMPs).

#### 3.4.1 Process Aids

ICH Q7 “GMP Guide for Active Pharmaceutical Ingredients,” Chapter 20 Glossary (Reference 1, Appendix 8), defines
process aids as materials, excluding solvents, used as an aid in the manufacture of an intermediate or API that do not
themselves participate in a chemical or biological reaction (e.g., filter aid, activated carbon, etc). Material is a general
term used to denote raw materials, process aids, intermediates, APIs, and packaging and labeling materials. Chapter
7, Materials Management, states that:
•
“Materials should be purchased against an agreed specification, from a supplier or suppliers approved by the
quality unit(s).”
•
“If the supplier of a critical material is not the manufacturer of that material, the name and address of that
manufacturer should be known by the intermediate and/or API manufacturer.”
When used in API production, inert process gases, e.g., nitrogen, would typically fall into the category of “process aid”
rather than raw material (as the gas does not participate in chemical or biological reactions). When used in production
of finished pharmaceuticals, nitrogen would typically be defined as an inactive ingredient.
ICH Q7 (Reference 1, Appendix 8) also suggests in chapter 7.3 that at least one test to verify the identity of each
batch of material should be conducted, with the exception of, e.g., processing aids where a supplier’s Certificate of
Analysis can be used in place of performing other tests, provided that the manufacturer has a system in place to
evaluate suppliers.
[PAGE 28]
Process Gases

#### 3.4.2 Components

As defined in the US FDA Title 21 CFR Part 210.3 Definitions (Reference 4, Appendix 8), a component means any
ingredient intended for use in the manufacture of a drug product, including those that may not appear in such drug
product; and an inactive ingredient means any component other than an active ingredient. The Part 211 Subpart
E further discusses amongst others the control of components containers and closures. Because of the special
containers and characteristics, gases can be difficult to analyze on site, and the sec. 211.84 (d) (2) suggests that
in lieu of testing for identity and conformity, a report of analysis may be accepted from the supplier of a component,
provided that at least one specific identity test is conducted on such component by the manufacturer, and provided
that the manufacturer establishes the reliability of the supplier’s analyses through appropriate validation of the
supplier’s test results at appropriate intervals.

#### 3.4.3 Gas Related Regulations

The FDA’s quality system-based inspections have a risk-management approach and focus on operating systems.
The quality system-based inspections are an initiative of the FDA intended to provide more efficient use of resources
and give more focused inspections. The inspections are based on knowledge gained from previous inspections
and on scientific and technological developments. The Compliance Program Guidance Manual for FDA Staff: Drug
Manufacturing Inspections Program 7356.002 (Implemented 2/1/2002) (Reference 5, Appendix 8) says amongst
other things that the materials system includes measures and activities to control finished products, components,
including water or gases, that are incorporated into the product, containers, and closures. Areas to be covered during
an inspection of the materials system include, e.g., the following gas-related areas:
•
identification and inventory of components
•
at least one specific identity test conducted on each lot of each component
•
testing or validation of the supplier’s test results for components
•
water and process gas supply, design, maintenance, validation, and operation
The Aide-Memoire – “Inspection of Utilities,” PI 009-3, (PIC/S) (Reference 8, Appendix 8) provides guidance for GMP
inspectors for use in training and in preparation for inspections. It is not mandatory; however, the document includes
useful checklists for Heating, Ventilation and Air Conditioning (HVAC), water, steam, and gas systems.
Other applicable regulations, standards, and codes to consider would include:
•
European Pharmacopoeia – Gases Monographs: e.g., Air, Medicinal; Synthetic Air, Medicinal; Argon; Carbon
Dioxide, Nitrogen; Nitrogen, Low Oxygen; and Oxygen
•
United States Pharmacopoeia/National Formulary – Gases Monographs: e.g., Medical Air; Carbon Dioxide;
Nitrogen; and Oxygen
•
EIGA – Comparison of European, US & Japanese Pharmacopoeia Monographs for Medicinal Gases (MGC
Document 152/08/E)
•
American Society of Mechanical Engineers (ASME) standard: BPE-2009 Bioprocessing Equipment
•
Health Canada: Guide-0031, Good Manufacturing Practices for Medical Gases (December 29, 2006); and
Medical Gas – Good Manufacturing Practices (GMP) – Questions and Answers
•
Canadian Standards Association, CAN/CSA-Z7396.1-06, Medical Gas Pipeline Systems – Part 1: Pipelines for
Medical Gases and Vacuum
[PAGE 29]
Process Gases
•
Canadian General Standards Board, CAN/CGSB-24.2-M86, Identification of Medical Gas Containers, Pipelines
and Valves
•
National Fire Protection Association, Compressed Gas Standards: NFPA 50: Bulk Oxygen System at Consumer
Sites and NFPA 55: Standard for the Storage, Use, and Handling of Compressed Gases and Cryogenic Fluids in
Portable and Stationary Containers, Cylinders, and Tanks.
•
Compressed Gas Association, Compressed Gas Standards:
-
C-9
Standard Color Marking of Compressed Gas Containers Intended for Medical Use
-
E-10
Maintenance of Medical Gas and Vacuum Systems in Healthcare Facilities
-
G-4
Oxygen: G-4.1 Cleaning Equipment for Oxygen Service; O2-DIR Directory of Cleaning Agents for
Oxygen Service; and G-4.3 Commodity Specification for Oxygen
-
G-6
Carbon Dioxide: G-6.1 Standard for Low Pressure Carbon Dioxide Systems at Consumer Sites;
and G-6.2 Commodity Specification for Carbon Dioxide
-
G-10.1 Commodity Specification for Nitrogen
-
G-11.1 Commodity Specification for Argon
-
P-1
Safe Handling of Compressed Gases in Containers
-
P-2
Characteristics and Safe Handling of Medical Gases
-
P-8.1
Safe Installation and Operation of PSA and Membrane Oxygen and Nitrogen Generators
-
P-9
The Inert Gases: Argon, Nitrogen, and Helium
-
P-12
Safe Handling of Cryogenic Liquids
-
P-18
Standard for Bulk Inert Gas Systems at Consumer Sites
See Appendix 8 for references.

### 3.5 Safe Handling and Storage of Gases

#### 3.5.1 Source Gas Distribution and Storage

##### 3.5.1.1 Liquid Argon, Nitrogen, and Oxygen Storage Vessels and Installations

Argon, nitrogen, and oxygen are typically supplied to the customer by one or more of the following means:
•
on-site liquid storage vessel
•
transportable liquid containers
•
high-pressure cylinders and manifolds
•
gas pipeline
[PAGE 30]
Process Gases
•
gas generation systems
Storage Vessels
Storage vessels for liquid argon, nitrogen, and oxygen are commercially available in capacities ranging from 350 to
13,000 US gallons (1325 to 49,210 liters) water capacity. The storage vessels may be vertical, spherical, or horizontal
depending upon the site and consumption requirements. Liquid storage vessels have three basic components:
1.
inner pressure vessel
2.
outer vessel
3.
insulation
Inner Pressure Vessel
An inner pressure vessel is usually made of stainless steel or other materials that have favorable strength
characteristics when exposed to cryogenic temperatures.
The inner vessel of the storage tank is typically designed to sustain a maximum allowable working pressure of 250
psig (1724 kPa). Vessels may be fabricated for higher or lower working pressures depending upon the required
customer gas application. The service pressure of the vessel is adjustable through the use of pressure regulators.
To protect the inner vessel from over-pressurization, the storage tank is typically equipped with dual pressure
relief valves and rupture disks. Pressure relief valves open when pressure in the inner container rises above a
predetermined level. These spring-loaded valves close automatically after relieving excess pressure and will not
operate again unless there is a further rise in pressure. Rupture disks are thin metal membranes designed to rupture
at a prescribed pressure above the pressure relief valve setting. The disks protect the inner vessel and backup the
relief valves in case the valves fail to operate properly. Unlike pressure relief valves, rupture disks, once activated, do
not close. If they burst, the pressure and entire contents of the tank may be released.
Storage tanks are normally equipped with a pressure gauge that displays the internal pressure of the tank. Any
abnormal conditions should be reported immediately. A differential pressure gauge may be used to measure the level
of the liquid in the storage tank. The gauge translates the difference in pressure between the top and bottom of the
tank into an estimated liquid level. In some installations where liquid levels are critical to the operation, liquid level
sensing technology is used. A liquid level signal is sent via telephone line or other means directly to the gas supplier,
allowing the supplier to monitor customer gas use and to schedule gas deliveries based on demand.
Outer Vessel
An outer vessel is made of carbon steel or stainless steel. Under normal operating conditions, this vessel retains the
insulation and a vacuum around the inner pressure vessel. Typically, the outer vessel is not exposed to cryogenic
temperatures.
The outer vessel of the storage tank is equipped with a vacuum break or vacuum rupture disk. This protects the outer
vessel in the unlikely event that pressurized liquid or vapour leaks into the insulation space between the two vessels.
Insulation
The space between the inner and outer vessel contains several inches of insulating material maintained in a vacuum.
The vacuum and insulating material help to reduce heat transfer and, thus, reduce the boil-off of the liquid nitrogen or
liquid argon stored within the vessel.
[PAGE 31]
Process Gases
Vaporizing Systems
Most user applications use gases in their gaseous state. This is accommodated for by converting the stored liquid to
a gas through the use of a vaporizing system. The vaporizing system may utilize heat from ambient air, hot water, or
steam. Vaporizing systems are usually equipped with a protective device downstream to prevent cryogenic liquid from
reaching the customer supply line or process, which may not be designed to withstand the exposure to cryogenic
temperatures.
Frost or ice will frequently build up on the fins of the ambient air vaporizer system during gas use. The ice forms
from the humidity present in the surrounding air. During periods of customer shutdown or low gas use, the ice may
melt or reduce in volume. In continuous gas use operations, ice may be present continuously on ambient vaporizers.
Typically, icing should not exceed three-quarters of the vaporizer’s length. Excessive ice build-up can reduce the
vaporizer efficiency. It is recommended that any excessive ice build-up conditions are reported.

*[Figure 3.1: Liquid Gas Storage Vessel and Vaporizing System]*

Used with permission from The Linde Group, www.linde-gas.com
Carbon Dioxide Storage Tank Installations
Carbon dioxide is normally maintained in its liquid phase by an integral refrigeration system and pressure control
system. Bulk carbon dioxide storage tanks are available in a variety of capacities up to approximately 50 tons. Tanks
are sized according to customer demand and delivery requirements. Tanks are usually horizontal in design and are
insulated.
Bulk Storage Tank Installation, Maintenance, Service, and Repair
Typically, gas suppliers are responsible for the bulk gas storage tanks and related controls. Gas suppliers should
install the equipment to industry standards and regulatory requirements.
[PAGE 32]
Process Gases
Customer responsibility normally begins after the vaporizing system and at the outlet of the gas supply valve or
regulator. Customers are also responsible for the downstream gas distribution system to the point of use.
Only the gas supplier, or authorized and trained personnel, should maintain, repair, or adjust liquid oxygen, argon,
nitrogen, and carbon dioxide storage tanks and their related equipment and controls.
Any deficiency or system operating concern should be reported to the gas or equipment supplier.

*[Figure 3.2: Bulk Delivery of Liquid Nitrogen]*

Used with permission from The Linde Group, www.linde-gas.com

#### 3.5.2 Transportable Liquid Containers

Liquid Argon, Nitrogen, Oxygen, and Carbon Dioxide Transportable Containers
Small quantities of liquid gases may be supplied to customers in portable or transportable containers. Containers are
available in a variety of sizes.
Liquid containers are usually double-walled and vacuum insulated, and are usually equipped with a liquid contents
gauge. They are normally set to a specified gas service pressure. Safety relief devices are normally used to protect
the inner vessel from over-pressurization. Liquid containers may be specifically designed to dispense gases in either
their liquid or gas phase, depending upon customer application requirements.
General rules for handling and storing liquid containers include:
•
Rough handling or subjecting containers to shocks, drops, or impact should be avoided.
•
Containers should be moved using carts and equipment specifically designed for the purpose.
•
Containers should be kept vertical and upright.
•
Containers should be stored in a well-ventilated area, preferably out-of-doors.
•
Regulators, hoses, and equipment should have been designed to withstand the gas service pressures.
•
Containers and connections should be properly labeled and tagged.
•
Gas/liquid supply valves should be opened slowly.
[PAGE 33]
Process Gases
•
During periods of heavy gas use, the outer surface of the container may frost. The gas use withdrawal rate
should be reduced to correct the frosting condition. (Heat should not be applied to the container to correct the
frosting condition.)
•
Gas use connections should be maintained in good condition and be gas-tight. (Connections should not be fitted
forcibly.)
•
Adaptors should not be used to circumvent gas connection standards on containers.
•
Containers should not be lifted by protection rings or top-works.

#### 3.5.3 Transportable Gas Cylinders

High Pressure Gas Cylinders
Small quantities of compressed gas or gas mixtures may be supplied in high pressure cylinders in a variety of sizes
up to 330 ft3 (10 m3) of gas contents. Cylinders may be of steel or aluminum construction and should be equipped
with a valve, gas-specific outlet connection, and a pressure relief device. Once activated, pressure relief devices do
not reset and the cylinder contents will be lost.
High pressure cylinder handling and storage recommendations include:
•
Reference should be made to Material Safety Data Sheets (MSDSs) for important gas product safety information.
•
Cylinders should be moved using handcarts and equipment specifically designed for the purpose.
•
Cylinders should be protected from being knocked or damaged.
•
Cylinders should be secured in place when in use.
•
Cylinder caps should be kept in place when not in use.
•
“Full” cylinders should be segregated from “empty” cylinders.
•
Cylinders should be segregated by hazard class.
•
When using cylinder contents, connections should be tight and leak-free.
•
Flow/pressure regulating devices should be used to withdraw cylinder contents.
•
Cylinder valves should be closed tightly when a cylinder is not in use.
•
Cylinder markings, labels, and tags should be kept complete and unmodified.
•
Cylinders should not be lifted by valves or protection caps.
•
Cylinders should not be used as rollers for moving equipment.
•
Cylinders should not be stored near heaters, open flames, or sparks.
•
Cylinders should not be placed where they may become part of an electric circuit.
•
When welding, an arc should not be struck against a cylinder.
[PAGE 34]
Process Gases

#### 3.5.4 Gas Safety Considerations

Oxygen-Deficient Atmospheres
The primary hazard of the inert gases argon, nitrogen, and carbon dioxide, is their ability to displace oxygen in the air
and create an oxygen-deficient environment. An oxygen deficient atmosphere is defined as oxygen concentration in
air of less than 19.5%.
An oxygen-deficient atmosphere is considered a serious physiological hazard. Depending on the degree of
deficiency, the effects on personnel can vary from physiological changes to illness or death by asphyxiation.
Exposure to oxygen-deficient atmospheres can also cause sudden unconsciousness, preventing personnel from
helping or protecting themselves.
Extreme caution should be exercised when entering any areas suspected as being oxygen-deficient.
Where the potential exists for an oxygen-deficient atmosphere, oxygen-level monitors should be installed to alert
personnel of the conditions before entering the controlled area.
Compression fittings and connections in gas distribution systems should be minimized to reduce potential sources
of gas leaks. It is considered good design practice to ensure that pressure relief devices, installed to protect the gas
distribution system from over-pressurization, are piped outside a facility to a point of safe discharge.
Oxygen-Enriched Atmospheres
Oxygen gas distribution systems present the potential hazard of an oxygen-enriched atmosphere. An oxygen-
enriched atmosphere is defined as oxygen concentration in air greater than 23.5%. An enriched oxygen atmosphere
can cause materials that will burn in air to do so more vigorously. Hydrocarbons and oils may react violently and
explosively when in contact with oxygen or oxygen-enriched atmospheres. Special attention should be given to
approved oxygen cleaning procedures during equipment maintenance, repair, or installation. Oxygen can saturate
organic fibers, such as clothing. This situation should be avoided, particularly where there is exposure to potential
sources of ignition, e.g., static electricity, sparks, or flames.
Liquid nitrogen and liquid argon storage vessels, and liquid piping systems, should have appropriate insulation.
Following repair, special precautions should be taken before returning these storage vessels or piping to service.
Without appropriate insulation, surfaces of storage vessels or piping containing liquid nitrogen or argon may become
extremely cold. Ambient air may condense on these extremely cold surfaces forming liquid air. Liquid air can contain
up to 50% oxygen; evaporation can increase the oxygen concentration to over 80%, therefore, creating a potential
hazard.
Cryogenic Liquid and Cold Temperature Hazards
The safe use of liquid argon, nitrogen, oxygen and requires knowledge of how materials change their behavior
at cryogenic temperatures. At cryogenic temperatures, the strength and toughness of some materials may
change, making them unsafe for their intended use. Rubber and plastics, e.g., lose their flexibility and shatter like
glass; carbon steel loses its pliability and becomes brittle. Three common strength characteristics altered by low
temperatures are:
1.
Ductility: the ability of a material to permanently change its shape or to stretch without fracturing. Materials such
as carbon steel lose ductility at low temperatures.
2.
Tensile Strength: the resistance of a material to tearing. The tensile strength of many metals increases at low
temperatures.
[PAGE 35]
Process Gases
3.
Impact Strength: the ability of materials to resist impact without shattering. The impact strength and ductility
of materials such as rubber and plastic are reduced so much under low temperatures that they can shatter like
glass. Some stainless steels, copper, nickel alloys, and aluminum do not lose significant strength at cryogenic
temperatures.
Materials used in gaseous argon, nitrogen, or oxygen service may not be suitable for handling or storing the liquid
phase of these gases.
Training and Safety Programs
Personnel should be instructed on potential hazards and safe operating procedures in the use of argon, nitrogen, and
oxygen in their liquid or vapor states.
General safety recommendations for handling liquid gas products include:
•
Liquid nitrogen and liquid argon should be handled only by personnel instructed in the properties of the material
and in the proper procedures for handling it.
•
Piping in which liquid nitrogen or liquid argon could be trapped between two valves and receptacles should be
equipped with pressure relief valves that are piped to properly designed vents.
•
Liquid nitrogen or liquid argon should be stored in open and well ventilated areas.

### 3.6 User Requirements Considerations for Process Gases

#### 3.6.1 Gas Specifications

Source gas specifications should be user-defined. Where a gas is used as an excipient, process aid, or as a
component in drug manufacturing process, users should evaluate the potential impact the gas might have on the
finished product. To evaluate the impact, a risk assessment is recommended. To identify and evaluate the Critical
Quality Attributes and Critical Process Parameters, a variety of risk analysis programs and methods may be used.
Mitigating risk may be accomplished through one or more of the following actions:
•
source gas specifications
•
detailed work instructions
•
training
•
system engineering controls
•
equipment maintenance programs
•
change-control procedures
There are financial benefits gained from using one of the “standard” specifications from a supplier – the requirements
should be evaluated against these.
Source Gas Purity
Fractional distillation and other source gas manufacturing processes produce high purity liquefied gas products. End-
users are encouraged to consider the following in developing their gas product specifications:
[PAGE 36]
Process Gases
Purity
Purity classification is usually expressed as a quality code (e.g., 4.8).
In the quality code notation, the number before the point represents the number of nines and the last number
indicates the last decimal (i.e., 4.8 = 99.998%, and 6.0 = 99.9999%).
There are two methods for determining the purity of a gas:
1.
direct measurement using specifically designed analytical instruments
2.
measuring minor components of interest and subtracting from 100%
Both the measurement uncertainty characteristics of instruments and the analytical method used can affect the
accuracy of purity measurements. Users should identify minor components of concern in a source gas specification.
Minor components of concern should be determined by the specific gas application and relevant CQAs (identified
through a process risk assessment).
Typical cryogenic purity values for the source gases are stated in Table 3.3:
Table 3.3: Purity Values for Source Gases
Water
Water content in the source gases is usually very low and inherent to the source gas manufacturing processes. See
Table 3.4.
Table 3.4: Water Content in Source Gases
Source Gas
Typical Cryogenic
(Liquid Phase)
Purity (min %)
Carbon Dioxide

### 99.5 Nitrogen

99.998*
Oxygen

### 99.5 Argon

99.997
*Nitrogen purity includes rare gases
Source Gas
Water
Dewpoint
(Liquid Phase)
ppm (v/v)
°F
°C
Carbon Dioxide
< 23
-65
-53.9
Oxygen, Nitrogen, Argon
< 5.3
-85
-65
Purging of gas delivery hoses during product transfer at user sites should maintain low-level moisture specifications.
New or re-commissioned gas distribution systems should be thoroughly dried and their installation qualified. Prior
to utilizing the gas from such systems, users should verify acceptable moisture content levels. Suitable ventilation
should be in operation during drying and qualification.
Gas distribution systems should be maintained leak-free and under positive gas pressure to prevent contamination by
atmospheric air.
[PAGE 37]
Process Gases
Oxygen
The oxygen content of argon, nitrogen, or carbon dioxide is usually low, due to the source gas manufacturing
processes, see Table 3.5.
Table 3.5: Oxygen Content in Source Gases
Purging of gas delivery hoses during product transfer at user sites should maintain low-level oxygen specifications.
New or re-commissioned gas distribution systems should be thoroughly purged and their installation qualified. Prior to
utilizing the gas from such systems, users should verify acceptable oxygen content levels.
Gas distribution systems should be maintained leak-free and under positive gas pressure to prevent contamination by
atmospheric air oxygen.
Microbial/Fungal/Bacterial Contamination
Microbes, fungal, and bacterial contamination are not typically measured in the source gas manufacturing and
delivery processes and are not included in the gas specification certifications. Due to filtration and extreme pressures
and temperatures involved in the gas manufacturing processes, these contaminants are considered by the supplier
to be low-risk. However, if the gas user has determined through risk assessment that the presence of any of these
contaminants presents a critical-to-quality concern, then appropriate system design and operational measures should
be taken.
Particulate
Particulate is not typically measured in the source gas manufacturing and delivery processes and are not included
in the gas specification certifications. Filters and strainers in the manufacturing processes remove any visible
particulate. The gas supplier considers the presence of particulate to be low-risk. However, if the gas user has
determined through risk assessment that the presence of particulate presents a critical-to-quality concern, then
appropriate system design and operation measures should be taken.
Hydrocarbons
Total hydrocarbons, measured as methane, are typically measured in the source gas manufacturing process.
Hydrocarbon content is of interest in oxygen, nitrogen, and argon manufacturing due to the natural presence of
these compounds in the atmosphere. In carbon dioxide manufacturing, the source gases for these processes may
have high hydrocarbon content. The gas manufacturing purification processes are efficient and the typical total
hydrocarbon levels are stated in Table 3.6.
Source Gas
Oxygen
(Liquid Phase)
ppm (v/v)
Carbon Dioxide
< 30
Nitrogen, Argon
< 5
[PAGE 38]
Process Gases
Table 3.6: Total Hydrocarbons Content in Source Gases
Source Gas
Total Hydrocarbons
(Liquid Phase)
(as methane) ppm (v/v)
Carbon Dioxide
< 50
Nitrogen
< 5
Oxygen
< 25
Argon
< 1
Where the presence of hydrocarbons causes a CQA related concern, it should be included in the source gas
specification and appropriate system design and operation measures should be taken.
Traceability/Pedigree/Documentation
The requirement for source gas traceability, pedigree, and documentation is a user-defined specification and
responsibility including gas receiving and acceptance procedures. These requirements may be determined through
regulatory review and CQA risk assessment.
A typical CoC should state that a supplied gas meets minimal purity specifications, but usually does not include
analytical results.
A typical CoA should state that the minimal product specification, along with the results of a specific analysis of the
batch.
[PAGE 39]
Process Gases
Design Options – Compressed Air Systems

### 4.1 Design of Generation of Compressed Air Systems

For process applications, compressed air systems should include:
•
a supply side (generation): including compressors and air treatment
•
a demand side: including distribution and storage systems, connecting the gas to the process application
The supply side and the demand side of compressed air systems should be integrated and should be considered as
a complete system to maximize overall efficiency and ensure the required air quality is delivered at the specified flow
rates and pressures required.
This section of the Guide focuses on the supply (generation) side of the compressed air system. The supply side of
the system should continuously provide clean, dry air at the correct pressure, quality, and flow.
The design of the supply side of compressed air systems should consider:
•
compressors
•
filtration
•
air receivers
•
dryers
•
system control
Possible improvements to a system’s operating efficiency should also be detailed, to help improve sustainability and
to reduce operating costs.
A single generation system may be used for both instrument (or facility) air and process air; however, additional
criteria may need to be met in order to achieve quality requirements for process air. Entire systems can be designed
to meet the additional criteria for process air. Alternatively, further treatment to meet these additional criteria can be
given only to air in a process branch.

#### 4.1.1 Arrangement of Supply Side Components

Air discharged from a compressor at pressure will usually be saturated and contain particulate (usually with a particle
size of under 10 µm, i.e., at sizes below the typical size limit of an inlet air filter). If the compressor is a lubricated
compressor, the discharge air can also contain oil as a vapor or particulate. Typically, oil content in the discharge of
a lubricated compressor is around 3 ppm. Oil removal filters (coalescing type) should be included in the sequence if
lubricated compressors are used.
When using a desiccant type dryer, the typical arrangement of equipment is:
1.
compressor
2.
general purpose filter (If placed after a lubricated compressor, this filter will need coalescing properties.)
3.
optional “wet” receiver for control storage (The wet receiver provides purge air when a desiccant tower
regenerates and prevents an artificial pressure drop in the compressor.)
[PAGE 40]
Process Gases
4.
desiccant dryer
5.
particulate filter (Desiccant beds can move during use, generating dust which can escape from the descant
tower.)
6.
dry air receiver (This receiver is responsible for controlling the system pressure during periods where there
is a high demand from a distribution system. This receiver provides “capacitance” or stored energy to control
pressure fluctuations.)
7.
optional system pressure controller (This device is responsible for controlling the pressure in a system and can
optimize the capacitance in a dry air receiver.)
Redundancy of filters or dryer with transfer valves may be necessary to allow maintenance to be performed safely
while a system is kept operational.
Filter effectiveness is dependent on maintenance and conditions. Higher temperatures reduce effective filtration
limits. Manufacturers usually rate a filter’s efficiency at 70°F (or 20°C). In addition, higher oil carryover will load a filter
more rapidly. The maintenance frequency for filters should be established in conjunction with specialist suppliers and
consider the usage pattern, system design and ambient conditions. Monitoring of air quality and periodic checks of
filter condition/air supply quality should confirm that designed filter change frequencies are appropriate.
Monitoring differential pressure across a filter for pressure build-up or spikes may not be appropriate, as a collapsed
or ruptured element could yield a very low to no pressure differential, and coalescing filters may not show an increase
in differential pressure at the end of their useful life.
Filter pressure drops can also vary depending on the throughput at the time the pressure drop is measured.

### 4.2 Equipment Selection

Equipment selection should start with a review of user requirements. Typically, a specific volume flow rate or mass
flow and pressure are required by a process.

*[Figure 4.1: Single Line Diagram of a Single Compressor System]*

### 4.3 Compressors

There are two basic types of compressors:
1.
positive-displacement
2.
dynamic
[PAGE 41]
Process Gases
In positive-displacement type compressors, a given quantity of air is squeezed or mechanically reduced to create
pressure. The volumetric flow rate is directly proportional to the size and speed of the compressor.
Dynamic compressors induce velocity using impellers and then convert the energy of the air motion into pressure
using scrolls or diffusers.

#### 4.3.1 Positive Displacement

Positive displacement compressors include:
•
reciprocating or piston type compressors
•
oil free rotary scroll compressors
•
oil (or lubricant) injected rotary screw or rotary vane compressors
•
oil (or lubricant) free rotary screw compressors
4.3.2 Large Water Cooled Piston Type Compressors (50-500 hp/37-400 kW)
Double-acting reciprocating compressors use both sides of the piston for air compression. These compressors may
be single- or multi-stage, depending on discharge pressure and size (hp/kW). They can be made for pressures from
50 psig, but are primarily used for high pressure (600 psig/40 barg) applications, such as plastic blow molding. They
may rarely be used for general process air pressures in pharmaceutical applications (i.e., 80 to 150 psig/5.5 to 10
barg). Large piston compressors usually require large foundations to minimize vibration and expensive wearable
components, but remain among the most efficient compressors at approximately 19 to 20 bhp/100 cfm at 100 psig.
Generally, piston type compressors have being replaced by rotary screw compressors, both oil free and oil injected.
4.3.3 Small Air Cooled Piston and Scroll Type Compressors (to 20 hp/15 kW)
The air cooled piston type compressors come in splash lubrication and pressure lubricated as well as oil-less designs.
Scroll compressors are oil free by design, although their wearing parts may discharge some carbon fines, which can
be removed with filtration.
Laboratories and small pharmaceutical manufacturing may use a small air cooled piston type compressor or rotary
scroll.
4.3.4 Rotary Screw or Rotary Vane – Lubricant or Oil Injected Compressors (5-600 hp/4-450 kW)
The most common type of oil injected rotary compressor is the single stage helical-twin, screw-type (also known as
rotary screw or helical-lobe). Two stage is also available in larger sizes (above 100 hp) to increase efficiency or reach
higher pressures.
Rotary screw compressors usually have a lower initial cost, more compact size, and lower weight than large piston
compressors. They are also considered relatively simple to maintain. Rotary screw compressors may be air- or water-
cooled. Less common oil injected rotary compressors include sliding-vane limited to smaller sizes, as well (under 100
hp/75 kW).
Oil injected rotary compressors typically use cleaner and longer life synthetic lubricants, which are suitable for a wider
range of operating temperatures, including:
•
diesters
[PAGE 42]
Process Gases
•
polyglycols
•
polyalphaolefins
•
polyol esters
•
silicon-based lubricants
The lubricant has three purposes:
1.
lubrication
2.
sealing
3.
cooling
The lubricant should carry away the heat generated through compression of the air. These compressors can develop
the pressure required in a single stage by using the lubricant as a sealant. Discharge air normally contains 2 to 5 ppm
of entrained lubricant; therefore, coalescing filters should be used (see Section 5 of this Guide). Other considerations
for lubricant injected compressors include the cost of lubricant, the cost of separation elements, and the need for oil
water separation systems for the condensate traps, in addition to the monitoring and maintenance of these traps.

*[Figure 4.2: Typical Lubricant Injected Rotary Screw Compressor]*

Used with permission from Ingersoll Rand Company, www.ingersollrandproducts.com
4.3.5 Lubricant-Free Rotary Screw Compressors (25-1250 hp/18-900 kW)
“Lubricant free” refers to no lubricant in the compression area or passages. Lubricant may still be used to lubricate
gearing, but it is kept separate from the air compression section by seals. Two types are available:
1.
dry
2.
water-injected
In the dry-type of lubricant-free rotary screw compressor, as there is no injected fluid to remove the heat of
compression. The lack of a sealing fluid also typically requires higher rotation speeds, timing gears, and a high
temperature coating.
[PAGE 43]
Process Gases
Single-stage lubricant-free rotary screw compressors can operate up to 50 psig.
Two stages of compression may also be used, with an intercooler between the stages and an aftercooler after the
second stage. Two-stage lubricant-free rotary screw compressors can achieve up to 150 psig.
In water-injected lubricant-free rotary screw compressors, similar timing gear construction is used, but water is
injected into the compression chamber to act as a seal and to remove the heat of compression. This allows pressures
in the 100 to 150 psig range to be achieved in a single stage.
Typically, water lubricated compressors are below 100 kW. Consideration should be given to the potential risk of
microbial contamination in water lubricated systems.

*[Figure 4.3: Lubricant Free Air End Module and Motor and Typical Full Package Lubricant Free Compressors]*

Used with permission from Ingersoll Rand Company, www.ingersollrandproducts.com

#### 4.3.6 Dynamic Compressors

Dynamic compressors raise the pressure of air or gas by producing energy as air motion and converting it to
pressure. Dynamic compressors include centrifugal and axial types and normally produce lubricant free air.
4.3.7 Centrifugal Air Compressors (200-20,000 hp/150-15,000 kW)
Centrifugal air compressors may:
•
have two to four stages for pressures in the 100 to 150 psig range
•
range from around 300 to more than 100,000 cfm, but generally occur in the 1,200 to 5,000 cfm range
These compressors can provide lubricant-free air delivery, as there is no lubricant in the compression chambers.
Lubrication for speed increasing gears and the hydrodynamic shaft bearings is separated from the compression
chambers using shaft seals. Bearings have no moving parts as the pinion (high speed shaft) rides on a thin film
of oil; therefore, built in shaft vibration monitoring is normally used to record operational trends and to protect the
equipment.
[PAGE 44]
Process Gases

*[Figure 4.4: Typical Air-end Module of a Centrifugal Compressor]*

### 4.4 Compressed Air System Controls

Compressed air system controls usually have two purposes:
1.
to meet the requirements of the demand side of a compressed air system
2.
to monitor selected parameters, providing alarms and interlocks to protect the equipment from premature failure
Controls can affect efficiency, life, and reliability of compressed air systems.
There are a number of methods used to control compressor capacity, with more sophisticated systems being
employed as a means of reducing system operating costs.
The simplest system is to use inlet valve throttling to regulate the compressor’s capacity. While mechanically, this
is a sound method to vary compressor capacity, it also has inherent inefficiencies built-in. As the compressor inlet
valve is closed to reduce compressor capacity, the air end is starved for air, thereby reducing flow. Unfortunately, as
the inlet valve closes, it creates a vacuum downstream of the inlet valve just before it enters the compressor air end.
As the valve continues to close further, the vacuum increases. The amount of work or Brake Horse Power (BHP)
to compress the air entering the compressor is in direct proportion to the differences in suction and discharge air
pressures. Throttling the intake valve all the way to 0% capacity will still have system power consumption circa 70%
of the full load power. Also, compressor operation can become unstable; typically the operating range is 50 to 60% of
the maximum capacity.
The system discharge can be throttled – this is not an efficient process and is rarely used.
System speed control may be used. This approach works for all compressor types, and improves efficiency. The
operating range will vary depending on the system type; the cost of the variable speed drive can be significant for
larger units.
The simplest form of control is stop start; improved efficiency can be from unloading the compressor, letting it idle,
usually with a time limit on the idle run time.
More complex control systems can monitor system pressure and vary the compressor speed to maintain a constant
pressure, monitoring usage to optimize the start and run times.
Used with permission from Ingersoll Rand Company, www.ingersollrandproducts.com
[PAGE 45]
Process Gases
During system design the control options should be carefully investigated to select a system that will provide the
optimum life cycle cost.

### 4.5 Air Treatment

Treating compressed air to remove contaminants such as dirt (viable and non-viable particulate), lubricant, and water,
may use equipment such as:
•
compressor aftercoolers
•
filters
•
separators
•
dryers
•
air receivers
•
traps
•
automatic drains
A variety of standards can be used to define air quality. A commonly recognized standard is ISO 8573-1:2010
(Reference 7, Appendix 8) which identifies three classes of contaminants:
1.
particulate
2.
water
3.
oil/oil vapor
ISO 8573-1:2010 does not differentiate viable and non-viable particulates. Therefore, when using ISO 8573-1:2010
to define purity class of compressed air, further definition may be required in the User Requirements. ISO 8573.2
through ISO 8573.7 define test methods for monitoring the various contaminants, but these have not been widely
accepted by the pharmaceutical industry. For further information on monitoring, see Section 6 of this Guide.
Table 4.1: ISO 8573-1:2010 Air Quality Class
Quality
Particulate
Water
Oil and
Class
Max number of particles per m3
Pressure Dewpoint (at)
Oil Vapor
atmospheric pressure)
0.1 – 0.5 micron
0.5 – 1.0 micron
1.0 – 5.0 micron
°F
°C
mg/m3
As specified by the user or equipment manufacturer and more stringent than class 1.
≤ 20,000
≤ 400
≤ 10
-100
-70
≤ 0.01
≤ 400,000
≤ 6,000
≤ 100
-40
-40
≤ 0.1
-
≤ 90,000
≤ 1,000
-4
-20
≤ 1
-
-
≤ 10,000
37.4
≤ 5
-
-
≤ 100,000
44.6
> 5
-
-
-
> 5
[PAGE 46]
Process Gases
The measurements relate to standard conditions of 20°C (68°F) 1 bar absolute pressure (14.5 psi).

#### 4.5.1 Air Inlet Filters

Air inlet filters protect compressors from atmospheric airborne particles and, typically, are supplied as part of a
compressor package. Oversized or specialized air inlet filters may be specified for less maintenance or where there
are unusual supply air conditions. Air inlet filters do not determine final air quality.
Air inlet filters with a finer degree of filtration may be used to restrict smaller particles. This may increase the amount
of changes or cleaning required, and can affect the unit efficiency if the pressure drop is too high.
Provided the air quality will not compromise the compressor reliability, it may be more cost effective to treat the air
downstream of the compressor.

#### 4.5.2 Intercooler and Aftercoolers

Intercoolers and aftercoolers are heat exchangers designed to remove heat of compression, to improve system
efficiency. Intercoolers and aftercoolers are usually an integral part of a compressor package. Moisture separators
following an intercooler or aftercooler, separate liquids entrained in the air or gas. These, typically, are supplied as
part of a compressor package.

### 4.6 Dryers

Once air leaves an aftercooler and moisture separator, its moisture content should have been reduced significantly;
however, it may still be saturated. The temperature at which this moisture condenses is called the dewpoint. The
dewpoint may be measured at line pressure or at atmospheric pressure.
Dryers are usually rated on pressure dewpoint. There are several approaches for suppressing dewpoint. Dryer ratings
may be based on the following dryer inlet conditions:
1.
100 psig, 100°F (inlet compressed air temperature), and 100°F ambient temperature
2.
7 barg, 25°C (inlet), and 35°C ambient
An increase in inlet temperature or a decrease in inlet pressure will reduce a dryer’s rated capacity. Dryer design
should anticipate worst case operating condition based on the maximum allowable dewpoint. Types of dryers include:
1.
regenerative-desiccant dryer
2.
heat-of-compression dryer
3.
refrigerant dryer

#### 4.6.1 Regenerative-Desiccant Dryers

Regenerative-desiccant dryers normally use a porous desiccant that adsorbs moisture. Desiccants include:
•
silica gel
•
activated alumina
•
molecular sieves
[PAGE 47]
Process Gases
Normally, the desiccant resides in a twin tower. Compressed air to be dried flows through one tower, while
the desiccant in the other is being regenerated with the use of hot compressed air (before being cooled by an
aftercooler). Some of the air used for regeneration will be purged and lost to atmosphere. The amount of purge
air may be reduced with the use of heaters, either within the dryer or externally. Further reduction and possible
elimination of purge air from the compressor may be accomplished with a blower, saving all air compressed for use in
a process.
There are three types of twin tower regenerative desiccant dryers, with a purge and initial cost trade-off for each:
1.
A heatless dryer requires about 15% of the dryer’s capacity to be used for purge air, but normally has lowest
initial cost.
2.
A heated dryer reduces purge to 7 or 8%, but may cost more than a heatless dryer.
3.
A blower purge dryer can reduce purge to 0 to 2%, but may cost more than a heated dryer.
Heat spikes and dewpoint spikes may occur in the downstream air with the heated dryer and should be considered
when designing the system. Blower-purge dryers may be available with a cooling cycle and use about an average of
2% of the compressed air to minimize heat spikes and maintain a relatively constant dewpoint.
Heatless dryers are typical in smaller systems, below 1000 cfm. Blower purge dryers are generally more efficient and
more common in larger systems.
Regenerative-desiccant-type dryers are commonly used in pharmaceutical manufacturing applications for process
air, as they have a dewpoint rating more than 70°F (21°C) lower than refrigerant dryers (-40°F (4.4°C) dewpoint at
standard inlet conditions).

*[Figure 4.5: Types of Regenerative Desiccant Type Air Dryer]*

#### 4.6.2 Heat-of-Compression Dryers

Heat-of-compression dryers are regenerative desiccant dryers that use the heat generated during compression to
achieve desiccant regeneration. They represent an efficient means for drying to -40°F (-40°C) dewpoint using either
no or only small amounts of purge air for regeneration.
Used with permission from Ingersoll Rand Company, www.ingersollrandproducts.com
[PAGE 48]
Process Gases
There are two types of heat-of-compression dryers:
1.
the single-vessel
2.
the twin-tower
Both require hot air from lubricant free rotary or centrifugal compressors.

##### 4.6.2.1 Single-Vessel Heat-of-Compression Dryers

The single-vessel, heat-of-compression dryer has no cycling or switching of towers. A rotating desiccant drum or
rotating inlet directs air into two separate air streams. One air stream is a portion of the hot air taken directly from the
air compressor at its discharge, prior to the aftercooler. This is the source of heated purge air for regeneration of the
desiccant cartridge. The second air stream passes through the drying section of the dryer’s desiccant cartridge.
Where load is variable, so is the dewpoint. Heat-of-compression dryers are unlikely to provide -40°F (-40°C) constant
dewpoint. A risk based assessment should be performed to determine the maximum dewpoint allowable and compare
it with the highest possible maximum dewpoint of this suppression type dryer under the various loads and conditions.
Replacement desiccant cartridges are usually proprietary and can cost up to one third to one half the initial cost of the
dryer.

*[Figure 4.6: Typical Single Vessel Heat-of-Compression Dryer]*

Used with permission from Ingersoll Rand Company, www.ingersollrandproducts.com

##### 4.6.2.2 Twin-Tower Heat-of-Compression Dryers

The twin-tower heat-of-compression dryer operation is similar to other twin-tower regenerative-desiccant dryers using
common, lower cost desiccant media. The difference is that the desiccant in the saturated tower is regenerated by
means of the heat of compression in the hot air leaving the discharge of the air compressor. The total air flow then
passes through an air aftercooler before entering the drying tower.
This dryer can be designed for constant dewpoint with varying loads. It has low to no purge air and repeatable
dewpoint. This dryer may reduce operating costs and meet required performance.
[PAGE 49]
Process Gases

*[Figure 4.7: Typical Twin Tower Heat-of-Compression Dryer]*

Used with permission from Henderson Engineering Co., www.saharahenderson.com

#### 4.6.3 Refrigerant Dryers

Refrigerant dryers have low initial and operating costs, but are not frequently used in pharmaceutical applications
for process air, as they usually require a much lower dewpoint. Refrigerated dryers provide a dewpoint in the 38°F
to 50°F (3°C to 10°C) range. Refrigerant dryers use a refrigeration system to cool the air. The cooling effect results
from the evaporation of a liquid refrigerant causing moisture in the air to condense. The moisture then is removed and
drained by a separator and drain. Where process air system generation is combined with instrument air systems, it
would not be unusual to use a refrigerated air dryer for the main generation system and a smaller desiccant dryer for
the process air branch requirements since instrument air dewpoint will likely be met with the refrigerated dryer. (See
ANSI/ISA-7.0.01-1996 (Reference 15, Appendix 8) for instrument air recommendations.)
If a refrigerant unit is selected, care should be taken to ensure that the control system will cater for the likely variation
in throughput of the unit.

*[Figure 4.8: Typical Refrigerated Type Air Dryer]*

Used with permission from ZEKS Compressed Air Solutions, www.zeks.com
[PAGE 50]
Process Gases
Table 4.2: Comparison of Dryer Technologies

### 4.7 Compressed Air Filters

Compressed air filters downstream of the air compressor are normally required for the removal of contaminants.
Filters should meet criteria defined in the User Requirements. Types of filter available include:
•
particulate filters to remove solid particles
•
coalescing filters to remove hydrocarbon droplets, moisture droplets, and particulates
•
adsorbent filters to remove hydrocarbon vapors and other aromatics (odors and tastes)
A particulate filter may be recommended after a desiccant-type dryer to remove desiccant dust. A coalescing-type
filter may be recommended before a desiccant-type dryer to prevent fouling of the desiccant bed if a lubricant injected
compressor is used upstream, or the local air quality may provide a risk of hydrocarbon in the compressor discharge.
Filter grades of 0.45 µm or 0.2 µm may be employed at POUs.
When reviewing filters for their applicability, particle size removal ratings (e.g., 0.2 µm) and the filter efficiency rating
(e.g., 99.97% efficient) should be reviewed. These ratings are normally based on defined inlet conditions, usually
70°F (21°C) at 100 psig. If the inlet conditions vary from those specified, the filter manufacturer should provide advice
regarding the performance data based on the actual system conditions.
A typical sequence of filters for a system is:
1.
Particulate Filter: typically 1 µm to 3 µm for removing rust, pipe scale, metal oxides, and desiccant particles
2.
High Temperature Particulate Filter: Temperature spikes can occur when using a heated desiccant
dryer. When the regenerated tower comes back online, heat generated during regeneration is picked up by
the compressed air. Similar ratings to standard particulates apply, but can withstand the higher operating
temperatures to 350°F to 450°F (176.7°C to 232.2°C).
3.
Coalescing Filters: Coalescing filters are rated for particle and liquid aerosol droplet removal. Liquid droplet
removal capacity is typically 0.001 ppm by weight and aerosol size rated at 0.01 µm.
4.
Final Filter: A 0.2 µm liquid rated cartridge filter (down to 0.003 µm absolute rated for particles in gases) may be
used as a final filter to obtain “sterile grade” compressed air. These filter cartridges are typically sanitary style to
minimize the risk of bypass and incorporate a hydrophobic non-volatile membrane as the filter media.
Technology
Initial Cost
Purge Air
Energy Cost
Dewpoints
Heatless
15%
-40°F to -100°F
Externally Heated
7 to 8%
-40°F to -100°F
Blower Purge
0 to 3%
-40°F
Heat of Compression – Drum
0%
0 to -20°F
Heat of Compression – Twin Tower
0 to 2%
< -20°F
[PAGE 51]
Process Gases

*[Figure 4.9: Sterilizing Filter Cartridges and Housing Assemblies for Compressed Air]*

Used with permission from Parker Purification, Dehydration and Filtration Division, www.parker.com/pdf

### 4.8 Air Receivers

Receivers can be used to provide surge capacity to meet peak process needs and minimize changes in system
pressure during periods of peak demand.
Compressed air systems require a receiver. When demand peaks are short and limited (usually less than 60 to 90
seconds), a large air receiver may allow a smaller air compressor to be specified. Additional benefits include the:
•
improved system reliability, as the load cycles on the compressor are reduced
•
increased efficiency, as the likelihood of another compressor starting is minimized
A desiccant dryer’s purge can be the temporary push to peak demand. Given the cyclical nature of purge, it creates a
temporary artificial demand on the compressor for a brief period but can be invisible to the compressor controls with a
wet air receiver (i.e., an air receiver placed before a purge type desiccant dryer).
A receiver placed downstream of air treatment equipment can be used to manage pressure variation in a distribution
system.
A rule of thumb used for sizing a receiver is to use a unit with a capacity of 6 to 10 times the compressor peak
capacity (free air delivered/second).

*[Figure 4.10: Typical Air Receiver]*

[PAGE 52]
Process Gases

### 4.9 Traps and Drains

Traps or drains allow the removal of condensate from the compressed air system to protect the equipment being
supplied by the system from the effects of a non compressible fluid. Automatic condensate traps are used to conserve
energy by preventing the loss of air through open petcocks and valves.
Methods to drain condensate include:
1.
mechanical traps
2.
solenoid actuated drain valves
3.
zero air-loss traps with reservoirs
4.
manual

#### 4.9.1 Mechanical Traps

These are usually float-type mechanical traps with inverted buckets as a secondary design feature. Float-type traps
are designed to open only as increasing condensate raises the water level and consequently, a float. Before the water
is fully evacuated, the float reseals the trap, to prevent waste of air.
These traps can easily be blocked by buildup of particulate in the condensate. The inspection and maintenance of
these traps should be incorporated into a maintenance program. Inverted bucket traps may require less maintenance.
The condensate rate should be sufficient to maintain the liquid level in the trap to prevent loss of air.

#### 4.9.2 Solenoid Actuated Drain Valves

Solenoid-actuated drain valves are electrically operated and employ a timed sequence for opening and closing.
Concerns include:
•
The open interval duration may be inadequate to evacuate all condensate.
•
The closed interval may be too long creating a back up of condensate into the compression stages.
In the absence of condensate and where equipment is lightly loaded, compressed air may be allowed to escape.
The settings on these units should be revised depending on seasonal variation in outside air supplied to a system.

#### 4.9.3 Zero-Air-Loss Traps with Reservoirs

Zero-air-loss traps can improve efficiency of a compressed air system. Types of traps include:
1.
solenoid actuated with level sensor
2.
pneumatically actuated air cylinder, which opens a ball valve through a linkage to expel the condensate in the
reservoir to the low-level point
Zero-air-loss traps combine the efficiency of no air loss and reduced maintenance with larger orifices, typically
preventing the build-up of particulate in the trap. Strainers are recommended for all traps to prevent the likelihood of
sediment blocking the passage of condensate.
[PAGE 53]
Process Gases
For systems designed with a lubricant injected compressor, condensate can be contaminated with entrained lubricant
and removal of lubricant may be required before the condensate is discharged to a sewer system.
Regional municipalities should be consulted for allowable contamination levels. An oil water separation system should
be included in the design of the system, or the facility drains as required.

#### 4.9.4 Manual Methods

Manual methods are typically ball valves which require opening to discharge condensate. Manual valves are not
recommended since they are frequently left open to drain condensate from moisture separators, intercoolers,
refrigerated dryers, and filters, allowing valuable compressed air to continually expand to atmosphere. In contrast,
leaving these valves closed for too long can be catastrophic to the equipment that the moisture removal is there to
protect.

### 4.10 Designing for Redundancy

Compressed air systems are considered critical utilities systems and designed with back up. Critical factors when
considering redundancy include load profiles throughout the day or week.
When operating a lighter shift, back up may need to include a larger multiple of compressors to prevent over sizing
a compressor of a lightly loaded shift. For generally balanced shifts or loads throughout the day or week, a common
practice is to design for three compressors each rated at 50% of maximum load. This reduces the cost of two 100%
compressors and allows one compressor to be down at any given time, while supplying the maximum demand. It also
minimizes power consumption when demand is below 50%, improving the overall efficiency of the system. One or
two 100% desiccant dryers may be designed into the system depending on the need for constant air demand during
maintenance. Multiple desiccant dryers may not be needed for redundancy, as they are usually reliable.
[PAGE 54]
Process Gases

*[Figure 4.11: Typical Multi-Compressor One Line Diagram]*

Used with permission from Ingersoll Rand Company, www.ingersollrandproducts.com
[PAGE 55]
Process Gases
Design Options – Distribution Systems

### 5.1 Concepts

The initial design of distribution systems for process gases should match the available gas quality and supply method
to the end user specifications. This forms the basis for the design, and should provide detail on the:
•
level of clean-up required for a gas prior to use
•
the pressure control and management of the supply and delivery systems
Delivery of supplies of a gas at the required specification should be consistent. The capabilities of both internal (e.g.,
compressed air or nitrogen) and external (e.g., bottled or bulk gases) supplies should be considered.
A supplier audit may be required for external suppliers. A Certificate of Analysis (CoA) should ensure that a gas is of
the required specification. Equipment used to provide the information for the CoA should be appropriately maintained
and calibrated. The scope of testing of this equipment should match specification requirements. By-products of the
method of production of a gas should be considered, along with how they are reported and any potential effect on the
process. An understanding of the frequency of testing (i.e., by batch, by delivery, or by cylinder) can assist in the risk
assessment and final system design.
Supplies of internally manufactured gases (e.g., compressed air or nitrogen) should be considered in the same way
as external supplies, including:
•
assessment of quality of supply
•
management and reporting of quality of supply
•
measurement and reporting of expected contaminants (e.g., oil carryover from a compressed air system)

#### 5.1.1 Risk Assessment

The design process should include a risk assessment to ensure that the proposed design is fit for purpose. The
assessment should consider potential systems failures and ensure that the controls in place are adequate to mitigate
risks to product quality or patient safety.
Gas suppliers may have technical support staff that can assist during the risk assessment and system design phase
of a project. Where appropriate, they may be able to assist in reviewing the system design supplying their product to
the POU.
Depending on the pharmaceutical application, the environment in which the gas lines are run, and the quality of gas
supplied, some aspects of industrial gas supply may not be required. These requirements should be considered
during a risk assessment, e.g.:
•
Gases distributed for pharmaceutical applications are usually dry and of a high quality and may not require
distribution systems to be drainable; pipe line fall, drop legs, and drain traps may not be needed.
•
Where a distribution system is clean, with a clean gas being distributed, there having gas point take-offs at the
top of a pipeline may not be required.
A risk assessment should also consider:
[PAGE 56]
Process Gases
•
how operations are made aware that there is sufficient connected capacity to undertake a batch or process, e.g.:
-
use of monitoring systems and back-up supplies for critical processes
•
Is an automatic changeover for finite supply applications (i.e., bulk or cylinders) required or can this be achieved
with a suitable low pressure/low level warning system, e.g.:
-
For bulk delivered gases, the response time for deliveries and the availability of services, such as remote
telemetry for usage and replenishment, may be considered.
•
For flammable, toxic, or corrosive gases, control of the discharge from regulators and lines during cylinder
change over, line disconnection, or in the event of line or regulator failure should be considered.
•
The effects on staff from exposure to a gas both in general operation and during potential failure modes (e.g.,
oxygen exclusion, flammability, static build-up and discharge, chemical reaction with other reagents/gases).
Additional monitoring may be required where statutory requirements are not sufficient to provide a safe work
environment.
•
High concentration of all gases (including inert) should be considered to present a risk to personnel. Potential
effects on personnel, the process, and the environment should be checked.
Document all steps as part of the design risk assessment.

#### 5.1.2 Basic System Design Concepts

Process take-off requirements should be understood to allow sizing of a distribution system. The rate of gas usage
and pressure required at critical points in the process should be quantified. These critical points should include
periods of peak take-off of gas. The distribution system should be sized to maintain an adequate supply at critical
points.
Averages should not be used, even where there is variable take-off of gas. (Experienced designers may use a system
utilization factor.)
Each process on a distribution system should be assessed in the same way to build up an overall system usage
picture. Where accurate usage figures are not available, a model may be used to perform a number of scenarios
which cover expected operating ranges. The model should allow operations personnel to study the effects of potential
usage patterns on a process. Accurate modeling will assist in ensuring that the design meets user requirements.
Errors in sizing of distribution systems can cause operational issues due to low pressure alarms for POUs, and drive
the requirement to modify the system.
Basic system design concepts include:
•
one way distribution system
•
high demand use points
•
ring main
•
splitting systems
•
use of a non-return valve/receiver to split systems
•
line sizing
[PAGE 57]
Process Gases
•
routing

##### 5.1.2.1 One Way Distribution System

The simplest distribution system design comprises a single pipeline feeding each POU.
For a small number of widely spaced delivery points, a one way distribution system from a gas source may represent
the lowest initial cost at installation. The pipeline should be sized to accommodate peak usage.
Where with the highest gas consumption POUs are positioned nearest the gas supply, it may be possible to reduce
the size of the pipeline to POUs further along the system. Intermediate receiving vessels may be used to reduce the
effects of usage variability or supply line size. They may be placed in the main branch or on critical POUs and used
where the:
•
highest gas consumption POUs cannot be sited nearest the gas supply
•
size of pipeline to provide peak loads is excessive
•
demand varies significantly
Intermediate receiving vessels can buffer the output to specific POUs (e.g., nitrogen inertion of large API reactor
systems). In addition, the main pipeline could be operated at a higher pressure between the supply and the
intermediate receiving vessels, with each POU below a receiving vessel regulated at a lower pressure. This allows
volume gains due to the expansion of the gas.
Consideration should be given to providing non-return valves at intermediate receiving vessels to ensure that the
main pipeline is not back fed if the main pipeline pressure dips below the receiver pressure at high demand periods.

##### 5.1.2.2 Ring Main

A ring main comprises two feed sources.
The ring main concept is considered a more robust distribution design when compared to a one way design, as:
•
The system will self balance due to the two feed sources of the ring main allowing line size to be optimized.
Points at the extreme of the ring may be susceptible to pressure drops but these will be reduced.
•
A considered design and placement of isolation valves will allow the line to be serviced, modified, or repaired
without shutting down the complete ring and associated POUs.
•
The ring main itself provides a level of receiver capacity which may be sufficient to buffer high demand, reducing
the need for intermediate receiving vessels receivers to act as buffers.
•
The system allows addition of multiple gas sources (e.g., multiple air compressors) in different locations
throughout the site, enhancing the redundancy of the system.
A ring main system can provide a cost effective solution relative to a one way distribution line, particularly where cost
analysis includes allowances for foreseeable future growth.

##### 5.1.2.3 High Demand Points of Use

Where there are high demand POUs, it may be more economic to provide gas from a local receiving vessel using a
smaller distribution system pipeline size at a higher supply pressure. Consideration should be given to over-sizing the
distribution pipe. This may be done locally to the POU to provide a “local receiver.”
[PAGE 58]
Process Gases
Consideration should be given to providing non-return valves at intermediate receiving vessels to ensure that the
main pipeline is not back fed particularly where several buffering receivers are attached to one supply. Pressure and
flow regulation should be considered in the distribution system design.

##### 5.1.2.4 Splitting Systems

Requirements of relevant GMP codes (e.g., system design and documentation, validation processes, ongoing
maintenance, calibration quality monitoring, and formal monitoring of the system output quality) add to the installation
and operating costs of GMP gas distribution systems.
Where end-user specifications allow, it may be feasible to split a system into non-GMP and GMP sub-systems. This
may be particularly beneficial in locations where there is a large site gas distribution system, with only a limited part of
the system used for GMP purposes. A non-GMP system can be used to feed a GMP system, providing that the GMP
system is adequately monitored and controlled (see Figure 5.1).
The risk assessment associated with a split system should consider how the integrity, purity, and quality of the
GMP take-off points is maintained under all scenarios. Redundancy in filtration and back flow prevention may
be required.
Use of a Non-Return Valve/Receiver to Split Systems

*[Figure 5.1 shows a concept that allows separation of a GMP gas sub system from an industrial system, for example,]*

allowing an instrument air supply to be split to feed a process air system.

*[Figure 5.1: How a Section of a Gas System Can Be Separated Into a Separate GMP System]*

Note: Filter set may be used on the infeed line or outfeed; if they are used as policing filters (to provide security in the
event of a failure of the main system filters) they are located as shown; otherwise they would be located at the infeed
to keep the receiver clean.

##### 5.1.2.5 Sizing of Pipes

Pipe size can be based on either a calculated design maximum use or the total connected load multiplied by a
diversity factor. Where the total connected load is used, modeling the expected peak load will assist in optimizing the
pipe size.
The pipe size may be calculated based on the maximum velocity or the allowable pressure drop. Typical figures used
are 6 – 9 m/s (18 – 27 ft/sec) or 3 – 5 psi (0.3 to 0.4 bar) depending on conditions. (Note: The filter pressure drops
and the acceptable increase in their pressure drops as they get dirty; this should be considered in calculations.)
[PAGE 59]
Process Gases
The greater the pressure drop, the greater the minimum system supply pressure needs to be to ensure that end users
receive the minimum acceptable pressure. As the pressure increases the energy requirement for the compressor
(or cost of bulk gas) increases following a square law – so small differences have a significant effect on the energy
consumption.
Where there is a single POU requiring a high pressure, locating the gas source near this POU and operating the
distribution system at a lower pressure can provide significant cost savings.

##### 5.1.2.6 Routing

The siting of pipes should facilitate regular inspection and servicing of valves. Annual checks for leaks may be
conducted as part of GEP using techniques such as ultrasonic leak detection. Statutory periodic inspections may be
required for high pressure equipment, including gas pipe work and valves in some geographical regions (e.g., UK,
Australia).
Where a process gas has a dewpoint near the local environmental limits, pipes should be insulated or sited where
they do not intrude on environments that may cause internal (or external) condensation.

### 5.2 Non-Return or Check Valves

There are several types of non-return valves. For process gases, the spring loaded wafer check valve, using an
elastomeric seal for the wafer, allows a gas tight shut off and rapid action whichever way up the valve is mounted.
Non-return valves should be suitable for both the gas supply side and for likely contaminants from the process side.
For GMP systems, cross contamination can be considered a critical risk. Risk assessments performed during the
design of a process gas system should investigate potential consequences of reverse flow under normal and system
failure modes. Where a potential risk is identified, backflow prevention and non-return valves may be required.
Non-return valves should be fitted as closely as possible to POUs to reduce potential contamination in the supply line.
Where there is a potential for cross contamination, cleaning and servicing of non-return valves should ensure that
non-return valves remain functional. Redundancy may be required for high risk critical processes.
Where the function of a non-return valve is considered critical (as a process or a safety requirement), the systems
design should facilitate testing of the non-return valve. This may be achieved either by making removal of the non-
return valve easy or by the installation of test ports on either side of the non-return valve and isolating valves in the
line either side of the non-return valve.

### 5.3 Pressure Reducing Valves

Pressure reducing valves should be selected so that the normal operating range is in the mid-point of the valve
capabilities. Operating near the extremes of the valve capabilities may give less consistent results.
Materials of construction should be selected based on the properties of the gas being supplied and anticipated
processes, e.g.:
1.
To extend the operating life of the valve where highly corrosive gases (e.g., hydrogen chloride gas) or processes
occur, purging tees may be used to allow the pressure reducing valve to be purged after use with a suitable
purging gas. For example, for hydrogen chloride gas, the purging gas could be dry nitrogen. Consideration
should be given to the treatment of the purging gas following passage through the reducing valve.
2.
For sterile operations where the gas may come into direct contact with the product (e.g., purging/headspace gas
in a freeze drying process) the materials of construction and finish can be critical.
[PAGE 60]
Process Gases

#### 5.3.1 Two-Stage Serial Reduction

The two-stage serial reduction approach uses two valves in series to reduce or eliminate extreme variations between
the inflow pressure and the final reduced outlet pressure. Two stage reduction is recommended when initial pressures
are 200 psi (14 bar) or greater, or when the desired pressure reduction ratio is greater than 4:1, e.g., from 200 psi to
50 psi, (14 to 3.5 bar), or where the inflow pressure fluctuates greatly. The advantage of two-stage serial reduction is
that neither valve is subjected to extreme pressure differentials, thus prolonging the life of the valves and delivering
more precise pressure regulation.

#### 5.3.2 Parallel Connection

Connecting two or more smaller size pressure reducing valves in parallel to serve a single supply main may be
used where there is a wide variation in demand at the reduced pressure. Parallel installations offer the advantage of
providing increased capacity where needed. In addition, the parallel configuration improves valve performance for
widely variable demands. It also permits servicing of individual valves without requiring a system to be shut down.

### 5.4 Mixing Valves

A mixture of gases may be purchased pre-mixed and supplied through a dedicated system or gases may be mixed at
the POU using a mixing valve arrangement.
Gases may be mixed using a mass flow controller on each gas line. The mass flow controller is controlled by a flow
sensor and feeds the gases into a static mixer.
Gas mixing systems can be accurate to ±1%.

*[Figure 5.2 shows an example configuration for a blending system.]*

*[Figure 5.2:	Control System for Blending Two Gases While Controlling Both the Blend Flow Rate and]*

Composition
Used with permission from CONTROL magazine, www.controlglobal.com
The blend ratio of the gases can by adjusted by varying the setpoint of the ratio setting of FY (see Figure 5.2). The
setpoints can be adjusted manually or automatically. If automatic blend composition control is needed, the blend
composition should be measured and the composition controller should be arranged to act as the cascade master
which is modulating the setpoint to FY.
[PAGE 61]
Process Gases

### 5.5 Filtration

#### 5.5.1 Gas Filtration for Sterile Applications

Pharmaceutical gas distribution systems are usually protected with filters rated 1 µm or smaller at the generation
source. Where sterile gas or sterile venting is required, this is usually provided by a 0.2 µm rated hydrophobic
sterilizing grade filter at the points of delivery or use.
Sterile gas/vent filters can either be pre-sterilized by autoclaving and aseptically installed, or sterilized in situ
by Steaming in Place (SIP). For single use bioreactors and other disposable systems filters can be sterilized
using gamma irradiation. Gas sterilizing filters usually incorporate 0.2 µm rated microporous membranes made
of hydrophobic polytetrafluoroethylene (PTFE) or hydrophobic polyvinylidenefluoride (PVDF). Filters with PTFE
membranes are not compatible with gamma irradiation. Some 0.2 µm rated membrane filters are also rated for
removal of airborne viruses down to 20 nm (0.020 µm) and airborne particles as fine as 0.003 µm. This is possible
because filters are typically rated for particle/microbial size removal from liquids, whereas additional removal
mechanisms occur in gases that enhance removal of particles finer than the liquid pore size rating.
Pharmaceutical grade gas sterilizing grade filters are normally provided with a CoA from the manufacturer. The
manufacturer may perform non-destructive (integrity) testing on filters prior to shipment to confirm that the filters
will retain critical contaminants, i.e., both bacteria and viruses in air, or bacteria when filters are wetted with liquid.
Retention of bacteria under liquid challenge conditions is considered the most stringent qualification for critical gas
sterilizing and venting applications. Manufacturers may specify appropriate integrity test methods for filter users that
have been correlated to the microbial retentive quality of the filters; i.e., non-destructive testing is representative of
the destructive bacterial or virus aerosol challenge test.
Depending on user risk assessments and intended use filters may be integrity tested:
•
prior to use
•
after use
•
at a predetermined interval
•
after events that are considered stress conditions for the filter (e.g., sterilization, high temperature air flow)
Users may accept a CoA from the supplier without additional testing if risk of damage during shipment, installation,
sterilization, and service has been suitably considered and, where appropriate, validated. Critical use filters can be
installed with POU integrity test ports that allow integrity testing in situ.

#### 5.5.2 Filter Integrity Testing

Three methods for integrity testing of sterilizing gas filters are the:
1.
Bubble Point Pressure Test
2.
Forward Flow (Diffusion) Test
3.
Water Intrusion Test
[PAGE 62]
Process Gases

##### 5.5.2.1 Bubble Point Pressure Test

The Bubble Point Pressure test determines the installation integrity of a wetted filter by determining the gas pressure
necessary to force the wetting liquid from the largest flow pathways or defects in the filter. For hydrophobic filters,
the wetting liquid is usually a 70% IPA/30% water solution. Other low surface tension solvent solutions may be
acceptable. The fully wetted filters are pressurized with air or nitrogen and the pressure is gradually increased until
bulk flow of the test gas through the filter is detected.
In a manual test, a length of tubing is connected to the downstream port of the filter assembly and the other end
of the tubing is immersed in liquid. Bulk flow of gas is indicated by rapid bubbling from the end of the tubing which
is in the liquid. The pressure at which rapid bubbling is observed is recorded as the “Bubble Point Pressure.” This
procedure is not applicable to sterilized filters prior their use, but may be utilized prior to sterilization or after use to
confirm filter integrity.
Automated instruments perform a Bubble Point Pressure test by conducting a series of incremental pressure decay
tests from the upstream side of the wetted filter and apply an algorithm to report Bubble Point Pressure based on
detection of non-linear increased gas flow versus pressure measurements. Automated tests can be performed
on sterilized filters before use, as they determine the Bubble Point Pressure from the upstream side only, without
downstream manipulations or risk of compromising downstream sterility.
For either method, a pressure reading lower than the manufacturer’s minimum recommended limit is an indication of
integrity failure.
If filters are tested before use, they should be allowed to dry prior to installation or should be “blown down” with the
pressurized gas to ensure adequate gas flow.
Bubble Point Pressure testing of hydrophobic membrane gas filters is limited by the requirement to wet the filter with
a low surface tension liquid prior to testing and to dry it before returning it to service.
Bubble Point Pressure testing is less suited to testing of high area cartridges and multi-cartridge assemblies due to
the subjectivity of the endpoint detection.

##### 5.5.2.2 Forward Flow (Diffusion) Test

The Forward Flow or “Diffusion” test determines the integrity of a wetted filter by quantitatively measuring gas flow
(diffusion plus bulk flow through any non-wetted pores) at a gas test pressure set marginally below the minimum
Bubble Point Pressure (typically at around 80%). This confirms filter integrity and that the Bubble Point Pressure is
not yet exceeded. The measured gas flow rate is empirically correlated to microbial retention.
In a manual test, a length of tubing is connected to the downstream port of the filter assembly and the other end
immersed under a graduated column of liquid. The filter is pressured with air or nitrogen to a specified test pressure
and, after a short equilibration period, flow of gas through the filter is measured by displacement of liquid volume from
the column over time. As with the manual Bubble Point Pressure test, this procedure is not applicable to sterilized
filters prior their use, but may be utilized prior to sterilization or after use to confirm filter integrity.
Automated instruments perform a Forward Flow or “Diffusion” test from the upstream side of the filter either by
pressure decay of the test gas in a measured volume upstream of the wetted filter, which is then converted to a flow
value, or by direct volumetric gas flow measurement. Automated Forward Flow (diffusion) tests can be performed on
sterilized filters before use, as they determine the pressure decay or direct flow measurement from the upstream side
only, without downstream manipulations or risk of compromising downstream sterility.
For either method, a Forward Flow rate higher than the manufacturer’s maximum allowable specification is an
indication of integrity test failure.
[PAGE 63]
Process Gases
The Forward Flow or “Diffusion” test is a quantitative measurement of stable gas flow that can be correlated to
external reference standards as well as to bacterial retention, making it suitable for high area cartridges and multi-
cartridge assemblies. Instruments that perform direct flow measurement, rather than pressure decay, do not require
prior determination of the upstream test volume, enabling a faster and potentially more accurate test.
The Forward Flow or “Diffusion” test of hydrophobic membrane gas filters is also limited by the requirement to wet the
filter with a low surface tension liquid prior to testing and to dry it before returning it to service.

##### 5.5.2.3 Water Intrusion Test

In the Water Intrusion Test, the integrity of a clean and dry hydrophobic membrane filter is determined by flooding the
filter assembly with water, applying air overpressure to overcome the hydrophobic resistance of the membrane and to
force water into or through the largest flow paths in the membrane, or defects in the filter. Water flow through the filter
is measured in an air overpressure headspace upstream of the filter either by pressure decay or by direct volumetric
flow. Integral clean and dry filters with sufficient hydrophobicity and without oversized pores or defects will show little
water flow (equivalent to evaporation from the downstream of the filter).
A flow rate higher than the manufacturer’s maximum allowable limit is an indication of integrity test failure.
Water intrusion testing avoids the use of alcohol or other low surface tension wetting liquids and does not
contaminate the downstream of integral filters, making it particularly suitable for testing of sterile hydrophobic
membrane filters in situ. As the water does not actually wet the filter, gas flow at low pressure can be reinitiated as
soon as the filter assembly is drained. Water intrusion testing of hydrophobic membrane gas filters is limited by the
requirement to introduce water into the upstream of the filter assembly and drain it after test, higher false failure rates
due to wet or contaminated filters, and sensitivity to temperature variation. It is not well suited for very small filter
assemblies due to very low flow values.

*[Figure 5.3: Schematic of a Water Intrusion Test]*

Notes for Figure 5.3:
•
The hydrophobic membrane filter assembly is flooded with water.
•
An automated integrity tester is connected to an isolated upstream air pressurization chamber to minimize
temperature fluctuation.
[PAGE 64]
Process Gases
In operation, sterilizing gas filters are usually integrity tested before sterilization or after use by the Forward Flow
(Diffusion) or Bubble Point Pressure tests, using the reference wetting liquid, test parameters, and limit values
recommended by the filter manufacturer. When testing filters in situ after sterilization, sterilizing gas filters can be
tested using a variation of the Water Intrusion Test, using an automated test instrument.
Integrity test systems of different manufacturers may report Bubble Point Pressure test results differently depending
on the proprietary algorithm applied. Manufacturers of both the filters and automated integrity test equipment should
be consulted to ensure that appropriate testing is performed. The filter manufacturer’s recommendations for testing
should be followed.

### 5.6 Filters in Compressed Air Systems

The concepts described in this section can be applied to other process gas systems, depending on the risks
associated with the gas supply source and the CQAs for a gas.
A suite of filters used in a commercial application may comprise the following filters:

#### 5.6.1 Compressor or Source Gas Pre-Filter

Reduction of particulate on the gas feed can use lower cost filter media and installation methods than in-line filtration
systems. This is, therefore, a cost effective filter and helps to prolong equipment life.

#### 5.6.2 Compressor Discharge

It is considered good practice to install a moisture separator or coalescing filter and a general purpose filter on the
discharge from the compressor. This should help to reduce the moisture and particulate build up in the receiver.
Coalescing filters remove moisture droplets condensed by the compressor after cooler.

#### 5.6.3 Pre-dryer Filtration

A general purpose filter will normally be used to remove particulate down to 1 µm and to help keep the drying media
clean. The general purpose filter is usually used in conjunction with a high efficiency oil/hydrocarbon removal filter, to
remove any atmospheric contamination and particulate down to 0.01 µm.

#### 5.6.4 Post Dryer Filtration

After the dryer, a similar suite of filters will be used to prevent any particulate migration from the dryer into the system.
For oil-lubricated compressors, the high efficiency oil/hydrocarbon coalescing filter is used here as a means of
particulate control (oil-less compressors do not require coalescing filters).
After a gas storage system (receiver), filter sets are usually provided as parallel systems. This allows for replacement
of a filter while the system is kept operational.

#### 5.6.5 Post Receiver Filters

A final filter is normally used before the distribution system to ensure that the gas entering the distribution system
meets required specifications. For sterile applications this may be a 0.2 µm rated membrane filter, which will need to be
sterilized. For oral solid dose applications, a 0.45 µm or 1 µm rated filter may be suitable. (Note: 1 µm rated absolute
filters have high efficiency for finer particles in air due to enhanced impaction/interception removal mechanisms.)
[PAGE 65]
Process Gases

#### 5.6.6 Alternative Post Dryer Filter Arrangement

For small systems, where there is a very low risk that system operation and maintenance could affect gas quality,
POU filtration may be considered unnecessary. A robust post dryer filter arrangement may be considered as an
alternative:
•
The post dryer filter set may be arranged as a “double” set of gas filters, with a second set in series acting as a
“policing” filter set. The gas quality is checked in normal operation on the pre-filter set; if a gas fails a test, the
second set of filters should ensure that the gas will be re-filtered prior to entering the system. During system
maintenance the final set of filters are used to replace the pre-filter set and new filters are installed in the final
location, minimizing operating cost.

### 5.7 Material Selection

Factors which should be considered when selecting materials of construction for a distribution system include:
•
potential impact on the desired gas quality attributes
•
local regulations
•
robustness
•
installation time
•
local custom and practice
•
insurer’s requirements
•
cost
Materials used for a process gas distribution system and associated equipment should be resistant to adverse
effects of the gas being transported. They should also comply with the necessary national and local regulations for
a gas. Equipment and pipe work should be sufficiently strong to contain the operating pressure across expected
environmental conditions (i.e., ambient conditions).
The process gas distribution system should be able to support valves and associated equipment and should be able
to resist expected failure modes and accidental damage.
The effects of the environment on the external surfaces of the distribution system (e.g., cleaning and maintenance),
should be considered. For example, copper may not be resistant to cleaning materials and may develop a surface
coating (by oxidation) which may shed particles, so copper is usually not used within a production area; however,
copper may be acceptable outside a production area.
If an installation is in a damp environment, then the risk of corrosion of external surfaces should be considered,
particularly if a distribution system is constructed of dissimilar metals. Extremes in ambient temperature may require
expansion and contraction of the distribution system to be addressed.
Where the normal range of operating parameters of a process gas may be exceeded, potential effects on the
materials used for the distribution system should be considered. For example, if failure of a compressed air dryer
could allow wet air into a distribution system, the effects on the downstream equipment and how this could be
addressed should be considered. In this example, the design may incorporate an automatic shut off valve that
operates if high pump discharge pressure is detected, preventing moist air from entering the distribution system.
[PAGE 66]
Process Gases

#### 5.7.1 Moisture Ingress

Materials used for distribution systems should provide a robust vapor barrier to prevent an increase in the moisture
levels of a gas. Vapor ingress can be a significant issue for flexible POU pipes.
Careful selection of fittings is also necessary where moisture ingress may affect critical attributes, e.g., pneumatic
push-in fittings can lead to moisture ingress.

#### 5.7.2 Particulate Generation

Once any loose material in a process gas distribution system has been blown out, particulate generation is not
usually an issue in relation to a gas, even for carbon steel. Steel does not normally corrode if the Relative Humidity
(RH) is below 35%. At the low Pressure Dewpoints (PDPs) typically used in pharmaceutical systems, carbon or
galvanized steel would not normally be a source of particulate.
Where the installation is exposed in a classified area, the risk of particulate shedding from the external surface of the
pipe work should be considered. This is especially relevant where aggressive cleaning agents are used for microbial
control.

#### 5.7.3 Ease of Assembly and Modification

Ease of assembly together with cost/installation time/robustness in use have a major impact and may give different
results depending on the application.
Copper pipe may be the material of choice for a distribution system, whereas stainless tube with compression fittings
may be used locally for a specific piece of equipment.
It is considered good practice to provide for additional outlets for a distribution system where an area is likely to be
revised or equipment modified.

#### 5.7.4 Availability of Fittings

An acceptable range of valves and fittings should be available for the material selected.
“Push fit” fittings are not usually specified as sanitary, so require careful consideration before use.
Suppliers should have a readily accessible source of fittings to ensure that a system can be maintained over its entire
lifetime. The use of “special” fittings during construction may become costly to maintain.

#### 5.7.5 Pipe Work Support Requirements

Some materials used for pipe work can require a higher number of supports, which can increase installation costs.
Additional supports also may be required where a system is subject to:
•
rapid changes in pressure
•
changes in extremes of temperature which require additional expansion points
Where ball valves are used, these can induce movement in pipe work and additional supports may be required to
compensate for this movement.
[PAGE 67]
Process Gases

#### 5.7.6 Optional Materials

Material selection is dependent on the risks the interaction between the gas and materials of construction of all
components of the distribution system presents to the end user. Decision processes should be documented and
checked.

##### 5.7.6.1 Stainless Steel

Stainless steel is usually used in production areas:
•
ASTM 304 grade stainless steel may be adequate for non-sterile manufacturing areas, but there may be a risk of
corrosion depending on the cleaning and sanitizing materials used.
•
For sterile operations, ASTM 316 grade or equivalent is normally used, as the cleaning and sanitizing materials
used are generally more corrosive.
Valves and fittings should be specified to match the piping material. Sanitary jointing methods are not usually
required, as there is slight risk of microbial growth within a dry system (see Section 6 of this Guide). Orbital welding
may be specified to ensure consistent reliable welds, with a purge gas used to prevent oxide formation inside pipe
work.
It may be cost effective to specify lower grade stainless steel (e.g., ASTM 304) for distribution systems, with the
benefit of a clean good quality internal finish, with a higher grade used in production areas where it will be subject to
more corrosive cleaning agents.
The quality of the stainless steel used for a system will depend on the end use. Suppliers/installers should be
consulted to ensure the required cleanliness can be obtained and that the correct documentation is available to
support the installation.

##### 5.7.6.2 Medical Grade Copper

Medical gas grade copper (e.g., ASTM B 280ISO n7396-1 part 4.3.6) BS EN13348, may be used in major
installations (100 ft (30.5 m) of pipe or more). Material should be specified as clean and degreased, purged during
fabrication, and jointed without flux using “hard” or silver solder. Joints to valves are usually by flange or soldered
connections. For more information, see http://www.copper.org (Reference 35, Appendix 8). Refrigeration grade
copper may be considered.
Copper pipe may used for a distribution system, with a break at a service outlet panel, or a service void, with the final
part of the pipe work in stainless steel within a production area. Copper pipe may not be recommended for use with
nitrogen, as moisture in the gas may cause internal corrosion.

##### 5.7.6.3 Plastics

Modern thermoplastic (e.g., high density polyethylene) can be used for the clean distribution of gases. Thick walled
High-Density Polyethylene (HDPE) pipe is available, suited to compressed gases up 160 psi (11 bar). HDPE systems
can be quick to install, provide a corrosion free smooth internal bore and a clean external surface. The systems can
be color coded to match codes for the gas being transported.
Disadvantages of plastic pipe work include:
•
Systems may require additional supports (compared to metal systems). Lines may be supported in a channel.
•
The material may require additional expansion requirements over those required for a metal system.
[PAGE 68]
Process Gases
•
Ultra violet stability of the material for use in external applications should be checked.
•
Plastic material cannot be used for a flammable or oxidizing gas:
-
The plastic may not present such a high quality vapor barrier as metals.
In some regions, e.g., the US Occupational Health and Safety Administration (OSHA) regulates against using brittle
plastics for compressed air distribution systems.
Plastic may be used for subsystems where pipe work is protected from mechanical damage, and the outlet valves are
mechanically supported, so that there is no stress transmitted to the pipe work, e.g., an inert gas distribution system
in a laboratory.
Where pipe work is to be routed though a hazardous area, the melting point of the material should be considered
along with the implication of a melted distribution line.

##### 5.7.6.4 Aluminum

Proprietary systems using aluminum pipe work may be limited in size and connected using plastic push in
connectors. These systems should not be used for a flammable or oxidizing gas.
Where pipe work is to be routed though a hazardous area, the melting point of the material should be considered
along with the implication of a melted distribution line.

##### 5.7.6.5 Carbon Steel

Where a gas is kept at a low Relative Humidity (RH) (below 35%), risk of internal corrosion is minimal; therefore, steel
is an option for use in a distribution system. If used, galvanized material is usually selected to provide a corrosion
resistant external finish.
Where galvanized material is used, the internal finish should be of good quality and clean, or it will require a long
blow down period to clean up the system.
Jointing has to be specified carefully, to ensure minimal risk of generating loose material or contaminating inside
a pipe with hydrocarbon, e.g., welding with a purge gas, or screwed joints made using without lubricant/sealant,
assembling the joint with non shedding material, such as PTFE tape.
For these reasons as well as the general appearance, carbon steel is not generally used.
Testing and Cleaning
Materials specified for use in a processed gas system should be specified to be free of particulates and any
hydrocarbon. They should be shipped and stored on site wrapped and sealed. Storage and release for use should be
managed to ensure that the specified material is used.
Before use on site, system fittings and components should be inspected to ensure that the internal finishes are as
specified and not marked or damaged. A GMP protocol should be used to ensure the system is kept clean during
construction, e.g.:
•
no opening left open
•
only clean tools used
•
tools marked for their purpose
[PAGE 69]
Process Gases
Systems are usually pressure tested before cleaning, as any repairs for leaks may create particulate.
National and local regulations should be followed. With a large system the stored energy within the system should be
considered and appropriate safety precautions taken during testing.
A system may be pressurized using compressed air then “topped up” with nitrogen to reduce costs. The system
should be allowed to equilibrate to match ambient air temperature, which should be recorded. The test should be
one hour as a minimum. The time allowed should be sufficient to inspect each joint. Testing may use soapy water,
gas detector to check for leaks, or monitoring the system to ensure that there is no pressure drop (temperature
compensation may be used where necessary).
A typical test pressure should be 1.5 times the maximum working pressure. If parts of the system usually operate at a
reduced pressure (e.g., through a Pressure Reducing Valve (PRV)) users may prefer to test the entire system at the
potential maximum operating pressure. Any instruments or in line equipment that cannot withstand the test pressure
should be removed for testing and replaced. After replacing equipment and re-pressurizing the line, the locations at
which equipment was replaced should be checked for leaks.
After successful completion of the test, a system may be purged with the designated compressed gas for which the
system is to be used.
If wet cleaning is specified, the system should be installed with falls and adequate low level drain points. In addition,
pipe work and supports should be designed to support the additional weight of the cleaning fluid.
Following construction finalization, (i.e., walk down and punch listing, with no major punch list items outstanding) the
distribution system should be assured as free of particulate matter before system hand over.
A system may be flushed or blown out using filtered compressed air to remove any residual particulates. This is
usually done in sections using a timed discharge through clean filter paper to demonstrate the system cleanliness.
For systems with a high specification, the initial “coarse” clean test may be followed up by tests using a particle
counter on the supply and the outlet at the “index” (or longest) pipe run, to demonstrate that the distribution system is
not a source of contamination for a process gas.
Where take offs are from the top of line, provision should be made for initial flushing and purging after construction.
Safety measures should be applied during venting of any hazardous compressed gasses, e.g., oxygen or nitrogen;
this is a particular concern in confined spaces where compressed gas concentrations may increase rapidly. Provision
to vent to the outside environment or a well ventilated area should be considered, as required.
When purging a system, the sequence should involve purging the shortest pipe run first, gradually moving towards
the outlet furthest away from the gas source.
Duration and/or volumes to be used for the flushing and purging should consider, e.g.:
•
system size
•
system lay-out
•
type of material used
•
principles applied during construction
[PAGE 70]
Process Gases
Before testing and cleaning is commenced, a method statement should describe how the process will be performed
and the testing required by the commissioning organization. Suppliers may have a “clean for oxygen service” or
similar specification. For easily accessible components, manual cleaning may be employed.
Before the system is accepted by the owner, the distributed compressed air or gas should be tested against design
criteria. Design criteria should meet the final clean compressed air or gas testing requirements. This may include
consecutive testing over time (e.g., 3-days consecutive) for particulates, moisture, and gas “identity” or purity.
[PAGE 71]
Process Gases
Design Options – Control and Monitoring Systems

### 6.1 Introduction

Control and monitoring systems may act as a risk mitigation tool in process gas systems.
Where appropriate in this chapter, a distinction is made between process gas systems and compressed air
systems based upon differences in ownership and responsibility; compressed air systems are usually owned by an
organization, whereas process gas storage/generation systems are usually rented from a specialist supplier.

### 6.2 Control Systems

There are three categories of system which are controlled:
•
Compressed Air Systems
•
Cylinder Systems
•
On Site Gas Generation and Bulk Storage Systems

#### 6.2.1 Compressed Air Systems

The compressors normally have a specific proprietary control system. This should control and monitor the
compressor, shutting it down in the event of an alarm or sensor failure in order to protect the equipment. Usually
compressor control is based on maintaining a minimum pressure at its discharge – on a basic system through
shutting down or starting up the compressor, on a more sophisticated system through regulating the compressor
output.
There is usually provision for interconnecting these control systems or linking them through a “supervisory” controller
that will manage multiple compressors, usually rotating the primary duty unit to ensure equal use of each system.
The dryers within a system typically come with a supplier’s proprietary control system. The control systems typically
operate based on a timer to control the sequence of operation between the two dryer vessels or the changeover
between vessels is controlled by the discharge pressure dewpoint. The latter system is considered more energy
efficient.
In the event of a system failure, the alarm from a dryer pressure dewpoint monitor may be used to automatically close
the valve downstream of the dryer, as this would prevent putting potentially wet air into a distribution system – where
a sudden loss of supply would create problems, this signal could also initiate a standby dryer.
The system status and any system alarms can be fed through a Building Management System (BMS) to facilitate
remote monitoring, and management of any alarms.

##### 6.2.1.1 Cylinder Systems

There are two basic types of cylinder systems:
1.
Manual Changeover
2.
Automatic Changeover
[PAGE 72]
Process Gases
Manual Changeover
These require the standby cylinder to be manually selected when the duty cylinder runs on low pressure.
These basic systems do not provide capability for remote monitoring, though a low cylinder pressure switch may be
provided for connection to either a local alarm, an alarm in the area in which the gas is used, or to a BMS.
Automatic Changeover
The system automatically changes over from a duty to a standby cylinder, and will give an alarm signal to notify the
system owner that the empty cylinder needs to be changed. This may be connected to a local alarm, an alarm in the
area in which the gas is used, or to a BMS.

#### 6.2.2 On Site Generation Systems and Bulk Storage Systems

These systems are typically supplied and maintained by a specialist supplier; with their own control and monitoring
systems.
The design and operation of these systems should be understood by the user, and alarm signals from the system
made available for connection to a monitoring system, as required. Users may duplicate monitoring instruments for
connection to their monitoring system to allow the gas system supplier to provide a standard package. This also has
the advantage that the user retains management of the calibration of the devices.
The integration and monitoring of process gas systems should be considered during the design phase to ensure that
the optimum solution is specified.
Where there are defined Lower Explosive Limits (LELs) for gas concentrations, monitoring systems and local safety
alarms may be required by local regulations.

### 6.3 Monitoring

#### 6.3.1 Operation Parameter Monitoring

Pressure is often categorized as a CPP for a process gas system, usually introducing a concomitant calibration and
monitoring regime.
The gas supply system may be controlled by the pressure, either in the system receiver or in the entry point to the
distribution system.
The distribution system should be sized so that end users receive the necessary flow and associated inlet pressure,
based on design usage diversity or calculated pressure drop under peak usage.
This Guide proposes that the pressure is usually an engineering parameter and not a CPP.
The basis for this is:
•
Any piece of equipment supplied by the gas system that has a requirement for a specific flow/pressure will have
an inlet pressure switch that monitors and alarms for that use; this is a critical location/instrument.
•
The system pressure control provides a general indication, but does not monitor at each POU, or consider any
usage, or effect at an individual POU.
It may be appropriate to review specific installations to determine if that rationale is appropriate.
[PAGE 73]
Process Gases

#### 6.3.2 Quality Monitoring

Quality monitoring is required at POUs located in controlled room environments. Regulations require that the
particulate and microbiological quality of the compressed gas be equal to or better than that of the air in the
environment into which the gas is introduced (at rest). (See Eudralex Volume 4 Annex-1, 2004; 21 CFR Part 210
(References 6 and 4, Appendix 8).)
Process gas systems may be operated at very low dewpoints or negative dewpoints, in accordance with user
requirements. A properly operated process gas system with low moisture should not support the growth or survival of
microorganisms.
The quantity of water necessary to support microbiological growth is usually expressed as water activity (aw). (It
is used as a measure for the dryness of foodstuffs; therefore, the resistance to microbiological growth.) The use
of water activity may be applied to non-sterile pharmaceutical products. (See USP/NF 31, General Chapter 1112
(Reference 14, Appendix 8).)
For gases, water activity is related to relative humidity (RH = aw × 100%) and also dewpoint which may be used to
express moisture in a compressed gas. Molds and yeasts do not grow where the aw is less than 0.6 and bacteria do
not grow where the aw is less than 0.85 (Scott et al., 2001) (Reference 32, Appendix 8).
Process gas systems are not normally designed to be sterilized. Sterilization may apply to sections of a system,
following the final filter, which are used for sterile applications. Typically these sections are outside the process gas
system boundary and are part of the connected manufacturing system used for the sterile application. Control of
microorganisms is usually accomplished at the POUs by using 0.2 μm sterilizing grade filters.
Low moisture environments may be used to preserve pharmaceutical products but may not prevent survival of
microorganisms:
1.
Desiccation has been a long recognized method for short term preservation of microbiological cultures (Potts,
1994) (Reference 31, Appendix 8). Desiccated microorganisms have a variable death rate and a sizable
population would have to be introduced into a system to be detectable downstream.
2.
Bacteria may also survive through the production of endospores. Endospores are tough, dormant non-
reproductive structures produced by bacteria with the primary function to ensure survival through periods of
environmental stress (Sonenshein, 2000) (Reference 33, Appendix 8). Endospores may persist indefinitely in a
dormant state awaiting conditions favorable for sporulation or return to vegetative growth.
Where the user requirements are particularly demanding, the requirement to ensure that a process gas system
facilitates cleaning activities may be included, and the design specified accordingly (e.g., facilitate complete
drainage).

##### 6.3.2.1 Test Method Considerations

Test method(s) normally depend on the types of microorganisms that are desired to be detected. Factors that should
be considered include the:
•
drug product(s) manufactured within the facility
•
type of process gas
•
regulatory controls
•
manufacturing processes
[PAGE 74]
Process Gases
The drug product manufacturing associated risks should be considered. Parenteral drug products are manufactured
to be sterile to a probability dependent on the manufacturing process; therefore, the process gas should be rendered
sterile prior to use in the manufacturing process. Non-sterile drug products may be manufactured using process
gases that are not rendered sterile; therefore, the introduction of objectionable microorganisms should be considered.
The designation of objectionable microorganisms should be determined based on the:
•
use of the product
•
nature of the product
•
potential hazard to the user
For further information, see USP/NF 31, General Chapter 1112; PhEur 01/2009:50104 (References 13 and 11,
Appendix 8).
A risk assessment should be used to develop a rationale for the sample point strategy. The rationale should represent
the microbiological hazard presented by the process gas used.
Process gas systems may be designed and controlled using combinations of inline and POU filters. Monitoring
strategies for inline and POU filter sample locations should be considered. Monitoring may occur upstream or
downstream of a filter, or duplex filters may be required.
Testing should confirm that a system is robust. The test plan should consider the parameter to be tested and the
potential sources of risk to that parameter, such that the test strategy addresses the potential risk.
For example, in the case of gas supply to a sterile operation (e.g., nitrogen blanketing during aseptic filling
processes), the process gas sample should be taken before the final sterile filter. As this gas is 0.2 µm filtered for
particulate, the process gas quality should be the same pre- and post- the sterile final filter.
To take a clean compressed air sample after the sterile filter requires the sampling site to follow the same level of
sterilization as the unit operation. Sampling after a final filter poses a potential risk to the unit operation each time a
sample is taken.
Examples of process gas systems with inline and point of use filtration are shown in Figure 6.1 (Parts A-C). Sterile
filters used to protect product may be pre- and post-integrity tested and should have known particulate shedding
characteristics. The decision whether to monitor before the filter or after should be based on an appropriate risk
assessment and on what the data will be used to support.
Design of sample points should avoid piping common to other utilities such as high purity waters and pure steam. An
example is provided in Figure 6.1 (Part D). The proper location of the sample point, proper valve sequencing, and the
use of a hydrophobic inline filter serve as barriers to ingress of moisture into the process gas system. In this example,
the sample point is indicated prior to the inline filter.
A sample should represent the quality at a POU; the location used should be demonstrated to represent the quality at
the POU.
[PAGE 75]
Process Gases
Note: The diagram is a schematic intended to illustrate the issues described; it does not include all the isolation
valves that may be included to facilitate operation and maintenance.
The type of process gas should be considered. Process air and O2 should be monitored for aerobic microorganisms.
Reduced oxygen content gases such as N2, CO2, and Ar should be monitored for microorganisms capable of
anaerobic growth. Consideration for monitoring aerobic microorganisms should be given during performance testing.
During the performance testing phase, once a system has been shown to be free of aerobic microorganisms and/or
spores, the routine sample strategy may require monitoring of only anaerobic microorganisms.
An organization should define a test strategy based on the use of the process gas and potential risks to the product.
The size of a sample can affect the monitoring method chosen for both particulates and microorganisms. Sample
size may be based on the sample size required for room classification (in accordance with ISO-14644, (previously in
accordance with FED209E)). For further information see K. Åkerlindh, et al and Hargroves, J., (References 30 and
31, Appendix 8). Following this approach, a sample size of 0.7 m3 would be required for ISO 5 environments (ISO
14644-1:1999E, Annex B, paragraph B4.2).
The basis to relate directly the sample volume for process gas systems to that for room classification is found in the
requirement for the particulate and microbiological quality of the process gas to be equal to or better than that of
the air in the environment into which the gas is introduced. The acceptance criteria applied are those for the at rest
environment (as a conservative approach), as the gas system is not “in use.”
Process gas distribution systems are not environmentally classified.

*[Figure 6.1:	Schematic of Inline and Point of Use Filtration (Parts A-C) and Avoid Piping Common to Other]*

Utilities (Part D)
[PAGE 76]
Process Gases
A gas generation and distribution process is a closed environment, with minimal risk of contamination from an
external source. Contaminants in pipe work are most likely to come from the process gas or the pipe work; therefore,
a sample taken from the longest pipe run is the most likely to find issues resulting from this cause of contamination.
This approach should be justified in the risk assessment supporting the qualification of the system, as there may be
unanticipated risks from equipment used in a process gas system.
Cleanliness of pipe work is typically checked as part of the commissioning process to confirm that the installation
meets specification (see Section 7 of this Guide).
Actual process conditions and requirements should also be considered. For example:
Processing within closed systems may occur in an ISO 8/EU Class D environment, while the conditions within the
process gas distribution system, and thus process gas quality, may be required to be sterile. The internal system
environment, however, is not classified in accordance with ISO-14644 (Reference 7, Appendix 8).
The nature of a contaminant and quality perception should also be considered. Where a later process stage filter may
remove a small particle of corrosion, it may not be a patient safety or product quality issue; however, a microbiological
contaminant may be an issue in such circumstances. Risk assessment approaches may be used to define an
appropriate specification for the gas, considering both the process and product. A robust specification for the process
gas may also be developed.
Inclusion of 0.2 μm sterilizing grade filters at a POU can ensure that process gas quality at a POU is equal to or
better than that of the air in the environment into which the gas is introduced. Implementing a point in the distribution
system that provides a break between non-GMP and GMP use during the design phase may provide an appropriate
alternative solution.
The particulate and microbial levels present within the distribution system pre-filtration may be increased compared to
the room environment if filter integrity can be demonstrated and levels do not exceed the certified filter retention rate.
For non-sterile applications, a filter pore size rating of 0.45 1 μm or 1.2 μm may be sufficient.
When selecting a sample size, aspects to consider include:
•
accuracy and sensitivity of the test instrument and method
•
the specified limits
•
the sample location/factors that may influence the test result
•
test frequency
Monitoring of gas for an aseptic process may justify a cubic meter sample4, alternatively initial testing may use a
larger sample, with ongoing monitoring utilizing a smaller volume of process gas, such as a cubic foot volume.
The manufacturing process should be considered when designing a program for monitoring microorganisms.
Processes using terminal sterilization will require additional monitoring rather than aseptic processes, e.g., terminal
sterilization processes, such as steam sterilization and irradiation, will require consideration for monitoring heat
resistant microorganisms, spore forming microorganisms, and radiation tolerant microorganisms.
4 The only test method standard relevant to a process gas is ISO-8573-7 for compressed air. This standard proposes a cubic meter sample, and
although this may apply to initial testing, it has not been widely adopted in the pharmaceutical industry and would not be relevant to ongoing quality
monitoring.
[PAGE 77]
Process Gases

##### 6.3.2.2 Microbial Monitoring

Methods existing for monitoring environments (Downes and Ito, 2001 (Reference 28, Appendix 8)) may be extended
to monitor process gases. The recovery medium for the microorganisms should include the growth media used
in the environmental monitoring program for room air, surfaces, and personnel (PDA Technical Report No. 13
(Reference 24, Appendix 8)), as a minimum. The medium should include the demonstrated ability to support the
growth of a variety of bacteria and fungi. Considerations should be made for additional growth media depending on
the scope of the monitoring program. The sample device should be sanitizable or sterilizable prior to collection of
each microbiological sample. Validation or performance qualification of the method should be considered prior to
implementation. Such data may be supplied by equipment manufacturers and guidance may be found in ISO-14698-
1, Annex-B (Reference 7, Appendix 8).
Impaction
Slit to Agar Sampler
This method uses a revolving agar plate located at a specified distance from a slit orifice to impinge the sample air
flow onto an agar surface. This device can sample a large volume of gas and can provide a time versus concentration
relationship. The equipment is large, requires 150 mm agar plates, and is difficult to sanitize.
Impact Sampler
There are several impact type samplers available. This type of device pulls a stream of air through a metal plate
containing many small and evenly spaced holes. The correct volume of air is directed through the holes and onto an
agar surface.
The versions of these samplers for process gases are relatively large and difficult to sanitize. The attachments for
monitoring compressed gases are large and bulky; however, the entire sample flow path and impaction plate can be
steam sterilized.
These units have the advantage of sampling a cubic meter of gas in less than ten minutes.
Centrifugal Sampler
These samplers use a fan to pull a cylinder shaped cone of air into the sample head and particles or microorganisms
are deposited by centrifugal force onto an agar strip within the sampling head. The sample head can be steam
sterilized and the units are light in weight. Special agar stripes are required. Special adapters for sampling process
gases are available.
Filtration
Filtration is a simple to use and low cost method for monitoring microorganisms in process gases, relative to methods
requiring instrumentation. When numerous sample points should be monitored on a regular basis, it may be less
costly to stock multiple filter holders than multiple sample instruments and sample heads/adapters.
The method consists of a type of filter holder (plastic or stainless steel), sterile filters, and a calibrated flow meter. The
appropriate volume of gas is filtered through the filter and the filter is aseptically transferred to an agar medium for
growth and enumeration. The membrane usually has a nominal pore size rating of 0.45 μm.
Membrane Filter
Membrane filters for environmental monitoring may be made of:
•
cellulose nitrate
[PAGE 78]
Process Gases
•
cellulose acetate
•
mixed cellulose esters
•
Polyethersulfone (PES)
•
hydrophilic PVDF
•
gelatin
•
nylon
Users should verify that the filter does not inhibit the recovery of indicator microorganisms. A cubic meter sample may
be collected in a twelve minute time period. Gelatin membrane filters are not suitable for compressed gas monitoring.
Liquid Impingement
Liquid impingement methods use a liquid to trap and collect microorganisms. The stream of gas is directed through
an orifice at high velocity into the liquid. Microorganisms are forced into the liquid and removed from the gas stream.
Disadvantages may include a glass construction resulting in a fragile device. Improper sample handling may result in
false positive data.
The advantage to the technique is that samples may be diluted prior to direct plating on an agar or by filtration
methods. The method should be qualified to demonstrate that it does not destroy vegetative microorganisms.

##### 6.3.2.3 Particulate Monitoring

Instrumentation
There are several methods and a variety of instrumentation available for detecting, sizing, and quantifying particulates
in compressed gases.
Methods include laser particle counting, condensation nucleus counting coupled with scanning mobility particle sizing,
differential mobility analysis, and membrane capture. The application of these methods is covered in ISO-8573-
4:2001 (Reference 7, Appendix 8).
The laser particle counter method is commonly used for process gases, due to the moderate sample rate, relatively low
cost, and low maintenance requirements. Care should be taken to avoid including moisture as droplets in particle counts
and to ensure that the sample hose connecting the particle counter and the sample point does not contribute to the
particle count. The tubing should be made of a smooth non-shedding material and as short as possible to avoid particle
fallout. The connection to the sample port should avoid introducing exterior air or generation of particles. Quick type
connections should not continuously generate particles or allow introduction of exterior air through the venturi effect.
Monitoring Process (high/low pressure)
Process gas systems usually supply gas at a flow or pressure that is too high for a particle counting instrument. The
flow to the instrument should be restricted to prevent damage to the particle counter, as high pressure may damage
the sensor. This is usually accomplished by using a device that supplies an appropriate flow rate to the particle
counter while allowing the excess gas to be safely vented.
The monitoring process should ensure that the compressed gas flow to the particle counter does not fall below the
point where outside air is introduced into the sample process. Sample points may supply process gas at flow or
pressure below this critical threshold and a different technique should be used.
[PAGE 79]
Process Gases
For such low flow/pressure sample points, the gas may be passed through a tube that would allow the pressure to
diffuse while allowing the particle counter to sample the airflow without the gas stream being forced into the sensor. A
qualification process should ensure that the particle counter is representatively counting particles in the gas stream.

##### 6.3.2.4 Moisture Monitoring

Moisture in process gases is usually measured as dewpoint or pressure dewpoint. Methods usually include
condensation devices, e.g.:
•
cooled mirror dewpoint hygrometers
•
electrolytic hygrometers
•
impedance hygrometers
•
polymer film relative humidity sensors
Quartz crystal microbalance and Surface Acoustic Wave (SAW) devices are usually too complex for pharmaceutical
process gas applications.
When using a hygrometer, the temperature and line pressure should be accounted for during dewpoint
measurements. The instruments may be used in line for continuous monitoring or may be used to periodically monitor
critical POUs.
The type used should be determined by the degree of accuracy required for downstream processes, maintenance
and calibration schedules, costs, and equipment reliability. For on line testing of moisture, indicator tubes may be
used. Ingress of external environmental moisture into the sample path should be avoided.
Instrumentation types include:
•
Chilled Mirror Hygrometer
•
Electrolytic Hygrometer
•
Impedance Hygrometers
•
Polymer Film Relative Humidity (RH) Sensors
Chilled Mirror Hygrometer
The chilled mirror is a widely used measurement device with an accurate field measured dewpoint over a wide
range. A surface mirror or polished surface in contact with the gas stream is cooled until condensation forms. The
temperature at which condensation is formed is the dewpoint. Chilled mirror hygrometers are negatively affected
by particulates in the air stream and by hygroscopic inorganic salts and are considered an expensive instrument
routinely used for process gases.
Electrolytic Hygrometer
This method is described in the PhEur and USP as a method for determining water in gases. The method is based
on absorption of water by diphosphorus pentoxide to produce phosphoric acid as an electrical conductor. A voltage is
applied to the water to produce electrolysis. The resulting current is proportional to the water content and based on
Faraday’s Law. The technique can provide stable and repeatable data but requires more attention to proper use to
provide accurate results than other methods.
[PAGE 80]
Process Gases
Impedance Hygrometers
These are typically ceramic, aluminum oxide, and silicon oxide based sensors. These sensors rely on a change in
electrical property such as capacitance, impedance, or resistance of a porous layer in response to moisture in the gas
stream. When properly calibrated and maintained, these instruments can provide good quality results. Calibration is
required on a regular basis.
Polymer Film Relative Humidity (RH) Sensors
These sensors are similar to impedance hygrometers. These are constructed of a polymer with a hygroscopic
dielectric material. The dielectric properties of the polymer film depend on the amount of water contained within the
film. As the water content changes, the dielectric properties change and the capacitance of the sensor changes to
provide an electrical response. Hygrometers based on this principle offer relatively low cost and good quality results.
These types of sensors are less susceptible to particulate contamination.

##### 6.3.2.5 Hydrocarbons Monitoring

Compressed air and other process gas systems intended for pharmaceutical applications should be designed and
constructed with oil free compressors and hygienic piping. The installation of systems should include the concept of
“build clean” where the equipment and piping are supplied in a clean condition and installed in a manner to prevent
contamination.
The monitoring of hydrocarbons in compressed gas systems contributes to the qualification phase to ensure the
piping is free of oils prior to use. When compressed air systems are appropriately designed and installed, the most
significant risk to the system is the introduction of diesel (auto) fumes at the air intake for the compressor. Air intake
for compressors should be considered in the design stage and care should be taken to avoid introduction of fumes
into the system.
Depending on the air quality in the vicinity of a facility, compressed air quality may need to be monitored on an
ongoing basis for high risk contaminants. For contaminants presenting a hazard, which concentration is relevant and
how often monitoring should occur should be considered.
Two distinct methods may be identified based on the type of hydrocarbon component targeted:
1.
Total Hydrocarbon (THC)
2.
Total Volatile Hydrocarbons (TVHCs)
Total Hydrocarbon (THC)
Total Hydrocarbon (oil mist) is the term for oils that can form an aerosol that will remain suspended in the air until
it impinges against a surface. These may be detected and quantified using indicator tubes. The tubes contain
chemicals that are designed to react with an introduced substance and changes color as a result. These are typically
single use only. Oil indicator tubes are designed to monitor for specific oils and mists derived from a variety of mineral
and synthetic oils. The detection limits are dependent on the volume of gas exposed to the tube medium and the
specific type of oil. These tubes are not designed to detect hydrocarbon fumes.
Total Volatile Hydrocarbons (TVHCs)
Volatile hydrocarbons are compounds that are either gases or liquids that can evaporate and act as a gas. The
method does not detect oil mists. TVHCs may comprise many different types of volatile hydrocarbons; therefore, are
measured and expressed as parts per million calculated as methane.
[PAGE 81]
Process Gases
Breathing air allowable ranges are 5 to 25 ppm depending on the standard. TVHCs can be detected and quantified
through the use of gas chromatography with flame ionization detection (GC-FID). This test will provide an indication of
TVHC in the process gas and indicate the need for follow up action if the concentration is determined to be intolerable
in the system.

##### 6.3.2.6 Oxygen

Electrochemical Detection
Oxygen in process gases may be detected and quantified by electrochemical detection. These devices are relatively
inexpensive and are easy to operate and maintain. The detection range is wide, 0 to 10,000 ppm, and is linear. The
calibration is simple and the units may be operated in-line or in a portable fashion at sample points.
Indicator Tubes
Indicator tubes can allow for quantitation of oxygen in gas streams. The use of these tubes is subject to false positive
results due to the potential exposure to the atmosphere when preparing for a test. They are best suited for testing
breathing air.

##### 6.3.2.7 Nitrogen ID and Purity

Nitrogen may be used as an overlay for oxygen sensitive or moisture sensitive pharmaceutical products. Nitrogen
should comply with pharmacopeia requirements for purity. Contaminants that have monograph limits include oxygen,
water, carbon dioxide, carbon monoxide, and argon. The purity should be established for nitrogen gas based on
percentage of the total gases in the sample. Additionally, the ID as nitrogen should be verified; this may be through
the use of the supplier Certificate of Analysis (CoA), as appropriate. Where the process gas is used for safety
purposes, nitrogen containing up to 1% oxygen is considered acceptable. On site generation using pressure swing
systems may be more economic than other sources.
Monitoring and testing may be accomplished using online testing equipment or by collecting samples under
pressure in specially designed sample cylinders for offline analysis. Where monograph limits are not required, a risk
assessment may be used to determine appropriate testing and limits.
Gas Chromatography
Gas chromatography coupled with Thermal Conductivity Detection (TCD) may be used to determine ID, total purity,
carbon monoxide concentration, and carbon dioxide concentration. Water vapor may be determined by hygrometer.
Oxygen should be determined by electrochemical detection, as oxygen is difficult to separate from argon.
The test plan should be developed considering the parameter to be tested, and the potential sources of risk to that
parameter, such that the test strategy will address the potential risk and confirm that the system is robust.
[PAGE 82]
[PAGE 83]
Process Gases
Risk Assessment

### 7.1 Introduction

A risk assessment process is normally part of the Quality Risk Management (QRM) effort. The Quality Risk
Management process, as applied to a process gas system, should ensure the reliable delivery of gas meeting the
specifications to POUs. The delivery system should not present a high risk of affecting defined quality attributes of the
process gas supplied; therefore assuring suitability for the application for which the process gas is used.
This chapter follows the science- and risk-based principles described in ICH Q9, ASTM E2500-07, and the ISPE
Guide on the Science and Risk-Based Approach for the Delivery of Facilities, Systems, and Equipment (References
3, 22, and 21, Appendix 8). These documents should be consulted in conjunction with this section.
Risk management should reduce risks to an acceptable level. Complete elimination of risk is neither practical nor
necessary. In a process gas system, sources of risks to product quality and patient safety include:
•
distribution system design
•
operation of system safety features
•
method of generation or source of a gas
In order to apply a science- and risk-based approach, a thorough understanding of the product/process requirements,
gas generation/source attributes, and the storage and distribution system are required. The utilization of process
knowledge and understanding, which considers both Critical Quality Attributes (CQAs) and Critical Process
Parameters (CPPs), will help to optimize the design of a new gas system, or revisions to existing systems. Quality
oversight effort should focus on that which is critical to product quality and patient safety.
Relevant CQAs and CPPs should be defined. They will typically be determined by the application for which a process
gas is used.
Typically, the quality attributes (depending on product/process requirements) for a gas may be defined as shown in
Table 7.1.
Table 7.1
1.	 Gas Purity
Applicable for inert gases such as Nitrogen, as per USP/EU Monograph
2.	 Moisture (Water Aerosols or
Non-sterile or sterile applications – NMT 2.5 g/kg (-40°F (-40°C) dewpoint)
Vapor)
3.	 Hydrocarbons (Oil Content)
NMT 0.5 mg/m3
4.	 Other Chemical impurities
Based on the generation technology and/or USP/EU Monograph
(Only as Applicable)
5.	 Microbial Count (Non-sterile
Guideline limits to be established based on product bioburden limits.
Applications)
Typical level NMT 5 cfu/m3
6.	 Microbial Count (Sterile
As per viable particle requirements for Grade area where the product is
Applications)
exposed to the compressed gas (e.g., Grade A, Grade A/B, Grade B or
Grade C)
7.	 Particle (Viable and Non-viable
Typically equal to the at rest condition of the area served
Count)
[PAGE 84]
Process Gases
The primary drivers of a process gas system’s design are:
1.
capacity
2.
usage
3.
output quality
Process gas systems should be engineered based on the primary drivers and have those defined in the User
Requirements. A risk assessment should be performed to help to understand and tune the design to minimize risk to
patient safety and product quality.
A risk assessment should identify risk resulting from:
•
specific aspects of a proposed design
•
critical aspects of a proposed design
Definition of the severity and likelihood of occurrence of these risks may give rise to revisions to the design to lower
the risk profile.
Identified critical aspects should be the focus of the subsequent verification effort to demonstrate fit-for-use.
System design features may consist of incorporation of additional design control or monitoring instruments with
associated alarms, or automated controls.
Procedural controls may consist of generating new or revising existing operating or maintenance procedures.
A risk assessment may be simplified for existing systems (i.e., legacy systems), where system functionality
and capacity have been demonstrated during the period of use, and the system operating range, performance
capabilities, etc., are known. This historic performance data should be used during the risk assessment, allowing an
accurate assessment of the severity and likelihood of risks.
Process gas systems are pressurized systems and may contain combustible gas or an asphyxiate which pose an
increased risk to personnel safety and health. Health and safety aspects and associated risks are outside the scope
of this Guide, but should be considered. Local laws and regulations may apply to specific aspects of these systems.

### 7.2 Quality Risk Management for Process Gas Systems

The Quality Risk Management approach should be applied throughout the life cycle of a process gas system and is
described within this Guide to support:
•
development of the User Requirements
•
development and review of the process gas system design
•
determination of the scope of verification testing activities (commissioning, installation, functional, and
performance testing)
•
determination of the optimum scope and scale of a calibration program
•
determination of appropriate preventive maintenance programs
[PAGE 85]
Process Gases
•
determination of the scope and frequency of routine monitoring programs
•
to ensure assumptions made during the risk assessment were appropriate during system operation
Risk management provides an opportunity to generate a rationale for scaling activities appropriately. Results may be
used to justify reduction, increase, or the omission or inclusion of an activity.
The risk-based approach activities should be appropriately resourced and focused. Effort and time devoted to a risk
management process should be commensurate with the potential impact on the supported business process.
The principles used for QRM may be used to review other (risk) areas such as:
•
Environment, Health, and Safety (EHS)
•
identification of revalidation scope and frequency for existing systems
•
to assess the potential impact of proposed changes
Though, there is usually a desire to keep quality related aspects separate to facilitate future audit.

### 7.3 Risk Assessment Process

#### 7.3.1 Initiating a Risk Assessment

Determining the risks associated with a process gas system requires an understanding of factors such as:
•
site/organization standards
•
site/organization specifications
•
regulatory requirements
•
project approach (contracts, methods, timelines)
•
process/product requirements:
-
This information can be used to determine the specification required, determine the potential risks to that
specification, and the effect that those risks may have.
•
Anticipated system design specifications:
-
areas served
-
layout of the distribution system
-
environmental conditions where the plant and distribution are located and at POU
•
system boundaries, i.e., what falls within the scope of the risk assessment
•
For existing process gas distribution systems (e.g., legacy systems), factors that should be considered include:
-
whether there is a single gas distribution system which is shared between different applications (e.g., GMP
and non-GMP applications)
[PAGE 86]
Process Gases
-
Are there physical boundaries in place (e.g., non-return valves, filters) segregating critical and non-critical
sections.
-
available historical data related to system performance (e.g., deviations, monitoring of trend data, or
performed changes)
-
design specifications: initial cleaning
-
commissioning specifications: initial testing
The Risk Assessment process involves:
1.
Risk Identification/Hazard Severity
2.
Risk Analysis
3.
Risk Evaluation

#### 7.3.2 Risk Identification/Hazard Severity

Risk identification involves the systematic use of data to identify hazards that could affect CPPs, CQAs, or critical
aspects of a process gas system. Risk identification should consider likely, rather than rare events such as
earthquakes. A pre-defined scale can be used to rank the severity of impact of identified hazards on a process gas
system.
Potential risks to typical product CQAs from a compressed air system include:
•
hydrocarbon (oil vapor and particulate) content
•
increased moisture levels
•
viable particulates
•
non-viable particulates (other than hydrocarbon)
•
gaseous impurities
•
process gas mix-up (e.g., connection of oxygen container to nitrogen distribution system)
•
reverse flow
Risk Controls
Mechanisms established to control the identified risks should be defined. These may include:
1.
system design features
2.
procedural controls
The likelihood of occurrence may be ranked using a pre-defined scoring system. (The likelihood of occurrence is
based on the potential occurrence of the risk when the defined controls are in place and operational.)
[PAGE 87]
Process Gases
Likelihood of Detection
Mechanisms established to detect hazards should be defined, in preparation for failure of risk controls. The likelihood
of detection of a hazard can be ranked using a pre-defined scoring system. Typically, this scoring is done without
considering the impact of elapsed time from the hazard occurring to the detection of the event. From a business
perspective, however, this aspect could influence the potential to address high severity risks that do not have a robust
means of detection of failure.

#### 7.3.3 Risk Analysis

Risk analysis is the estimation of the risk associated with identified hazards. It is the qualitative or quantitative
process of linking the severity of a hazard, likelihood of occurrence, and the ability to detect harm.
A phased approached may be employed initially using a qualitative assessment to differentiate between low risks
(which will not be evaluated further) and medium to high risks. Subsequently, hazards presenting a medium to high
risk can be further analyzed using a quantitative process based on a pre-defined scoring system.

#### 7.3.4 Risk Evaluation

Risk evaluation compares the identified and analyzed risk against given risk criteria. Risk evaluations consider the
strength of evidence for the three fundamental questions:
1.
What might go wrong?
2.
What is the likelihood (probability) it will go wrong?
3.
What are the consequences (severity)?
The outcome of the qualitative risk assessment will be typically expressed using descriptors, such as “high,”
“medium,” or “low.” These terms and how they are used should be defined in as much detail as possible. For further
information see ICH Q9, the ISPE Guide: Science and Risk-Based Approach to the delivery of Facilities, Systems,
and Equipment, and PDA Technical Report No. 44 (References 21 and 23, Appendix 8).
The outcome of the quantitative risk assessment may be expressed in a numbered ranking, such as “1,” “2,” or “3.”
Ranking systems and how they are used should be pre-defined at an appropriate level of detail.

### 7.4 Risk Control

Risk control includes decision making either to reduce risks or accept them, or both. The purpose of risk control is
to reduce the risk to an acceptable level. The amount of effort applied to risk control should be proportional to the
significance of the risk.
Risk control addresses the following questions:
•
Is the risk above an acceptable level?
•
What can be done to reduce or eliminate the risk?
•
What are the appropriate balance risk likelihood/controls?
•
Are new risks introduced as a result of the controls being applied?
[PAGE 88]
Process Gases
Risk reduction focuses on processes for mitigation or avoidance of risk when it exceeds an acceptable (specified)
level. Approaches usually follow a hierarchy, e.g.:
1.
reduction through design changes
2.
reduction through procedural change
Risk reduction may include actions taken to mitigate the severity and probability of harm. Processes that improve the
detectability of hazards and quality risks may be used as part of a risk control strategy.
Potential for New or Increased Risk
The implementation of risk reduction measures can introduce new risks into a system or increase the significance of
existing risks.
After implementation of a risk reduction process, the results of a risk assessment should be reassessed to identify
and evaluate possible changes in sources or significance of risks.
Risk acceptance is a decision to accept risk. Risk acceptance can be a formal decision to accept the residual risk or it
can be a passive decision in which residual risks are not specified.
An appropriate Quality Risk Management strategy should be applied which reduces risk to an acceptable level. The
(specified) acceptable level will depend on several parameters and should be decided on a case-by-case basis.

### 7.5 Risk Assessment Communication

Risk communication should ensure that the results of a risk assessment are shared with relevant team members, the
system owner, and senior management.
Communication can occur at any stage of the risk management process, dependent on the situation. The risk
assessment performed on the final design should be communicated, but there may be little benefit communicating
risk assessments performed as a tool to develop a robust design during design development.
The output and result of the Quality Risk Management process should be appropriately documented and
communicated to ensure that there is agreement with the decisions made by the team performing the assessment.
The risk assessment report may be used to assist in the definition of the scope of the required system verification.
The scores given in the risk assessment are normally based on the assumption that the controls defined are in place
and operational; to accept the result of the risk assessment, the operation of the design controls should be verified
and the procedural controls defined should be confirmed as being in place, with the relevant staff trained on the
procedures.

### 7.6 Risk Review

The risk assessment should be periodically reviewed to ensure that the scoring used reflects the operational
experience with the system. The period between these re-evaluations should be defined and based on potential
risk and the novelty of the system. The frequency of the periodic reviews may be increased or decreased based on
an improved understanding of the system performance. A periodic review may also be invoked by events such as
changes in the system use or system modifications.
[PAGE 89]
Process Gases
Data gathered during a risk assessment may be used to identify opportunities to decrease GMP risks.
The results of a risk assessment may be useful for other activities, e.g., product review, inspections, audits, or root
cause from failure investigations.
[PAGE 90]
[PAGE 91]
Process Gases
Final Design

### 8.1 Introduction

This section describes the installation, functional, and performance testing processes for process gas systems. These
processes should demonstrate that a process gas system is “suitable for its intended purpose.”
Local and national regulations may require additional specific tests to be performed to confirm that a pressurized
process gas system is suitable for its intended purpose.
For process gas systems supplying product or product primary containers, performance testing should demonstrate
that the supplied process gas quality meets the gas specifications required at the POUs. User requirements
specifications at POUs should consider where the gas will be used, and the purpose for which the gas will be used.
The quality attributes of the gas required based on that use should be specified.
Risk assessments (see Section 7 of this Guide) may be used to develop an initial testing and ongoing performance
monitoring strategy, as shown in the example included as Appendix 2.
Utilization of the results of a risk assessment can assist in optimizing system design, and define critical aspects of the
system performance that require verification in order to provide the documented evidence that it is suitable for use.
This section assumes that a construction manager has overall responsibility for the project, with a system installation
subcontractor, and an independent commissioning contractor. Initial performance tests (performed to confirm that the
system meets end user requirements) may be described in the commissioning scope of work, e.g., the specifications
may require that the ability of the system to provide gas meeting the specifications in terms of total particle count is
demonstrated through commissioning before the work performed under the contract is accepted from the contractor.
Gases may be generated on-site or supplied in DewarTM flasks or cylinders to be connected to the process gas
(e.g., N2, O2, and CO2) system. This section of the Guide does not make a specific distinction in this regard and tests
described may not be applicable; precise requirements will be dependent upon the specific process gas system.
This section follows the science- and risk-based principles described in ICH Q9 and ASTM E2500-7 (References 3
and 23, Appendix 8) , as well as the ISPE Guide: Science and Risk-Based Approach for the Delivery of Facilities,
Systems, and Equipment (Reference 22, Appendix 8). These documents should be consulted in conjunction with this
section of the Guide.
Process gas systems are intrinsically different from water and steam systems and any comparison with the
requirements for these systems should be avoided. (From a quality perspective it is not usually critical to test for
drainability/sloping, dead legs, Materials of Construction (MoC), or surface roughness.)

### 8.2 Engineering Turnover Package

The Engineering Turnover Package (ETOP) is considered one of the main construction deliverables. Different
approaches may used to build the ETOP. An example of one such approach is:
The ETOP is composed of three sections:
1.
Construction Manager’s Section
2.
Installation Contractor’s Section
3.
Commissioning Section
[PAGE 92]
Process Gases
1.
Construction Manager’s Section
This should contain:
•
a copy of the basis of design (User Requirements)
•
a set of issue for construction drawings
•
a set of issue for construction specifications
•
a copy of the submittals
•
a copy of any relevant permits
•
a change record history
•
a Request for Information (RFI) history (i.e., obtaining clarification for questions on the design specification
(instigated by the construction company during construction) from the system designer)
•
the construction quality check records, including any third party inspections where appropriate
•
a copy of the final (closed out) punch list
•
the formal contractors certificate of completion of the works to meet the specifications
2.
Installation Contractor’s Section
This should contain, as appropriate:
•
“red line” or “as built” record drawings and specifications
•
record drawings (paper and electronic copies)
•
equipment list
•
instrument list and copies of any calibration certificates or certificates of conformity
•
copies of any warranties
•
welders certification or equivalent
•
weld procedures or equivalent
•
calibration certificates for construction equipment used
•
system and equipment operating and maintenance manuals
•
material certification/purchase orders
•
test records
3.
Commissioning Section
[PAGE 93]
Process Gases
This should contain:
•
walk down “as built” record drawings
•
verified equipment list
•
verified instrument list
•
commissioning report for the equipment/system/controls
•
initial system test records
The requirements and responsibilities for the ETOP should be decided during the initial stages of a project and
defined in the design specifications and relevant contracts.
Monitoring the construction and completion of a project using the ETOP throughout the project to ensure timely and
competent completion can save both time and money at the end of a project.

### 8.3 Commissioning

The scope and extent of the commissioning activities for a process gas system depends on the system specifications
and design.
Process gas systems should be commissioned according to GEP and documented evidence that the system is
installed and operates in accordance with the design should be provided. As part of commissioning, calibration of
instruments should be verified (in accordance with the design specification and contractual requirements). The correct
setting and function of the system safety devices should be checked.
Following construction and before starting a system, commissioning activities should confirm that installation has
been completed to specification and ensure that it is safe to set to work. Commissioning should provide documented
evidence that a system has been installed in accordance with the design specifications and meets operational
specifications.
Commissioning documents may be pre-approved by an organization’s engineering group, i.e., the relevant SMEs. For
large projects, approvals may include a project manager (for contractual reasons). Commissioning documents do not
normally require pre-approval by the quality unit.
Where personnel with the appropriate skills and training are available, organizations may use these personnel for
commissioning activities. Commissioning activities may be performed by specialist contractors.
Pre-start up or start up readiness checks will vary depending on the system design; typical tests may include:
Compressors and Air Dryers5
•
record of all cable tests (continuity, insulation)
•
record of all grounding (earth) testing
•
record of the fuse ratings used/overload settings
•
point to point wiring tests (where applicable)
5 Given that air compressors and air dryers are typically catalogue pieces of equipment, Factory Acceptance Testing (FAT) has been omitted.
[PAGE 94]
Process Gases
•
instrument and loop calibration records as specified
Sequence of operation testing including interlocks and alarms:
•
system auto/manual operation
•
dryer switchover (if using a dual tower)
•
installation, operation, and maintenance manuals availability
•
parts list
•
recommended commissioning parts list, spare parts lists, and consumables lists as specified
•
set of specifications
•
equipment and instruments list, i.e., schedules covering components and instruments
•
“as built” drawings (E&I diagrams, P&ID, layout)
•
certification from appropriate organizations (e.g., Compressed Air and Gas Institute (CAGI))
Distribution System
•
material certification/purchase orders, inspection certificates, welding records (welder qualification, weld
procedures, weld log, purge gas certification, equipment calibration certificates, etc.) as appropriate
•
pipe work pressure testing records including insurance or inspection authority reports for receivers and dryers
•
record of pipe work cleaning and purging
•
pipe work passivation records (if applicable)
•
filter certification
•
point to point wiring tests (where applicable)
•
instrument and loop calibration records as specified
Sequence of operation testing including interlocks and alarms:
•
pressure control operation
•
economizer operation (if installed)
•
vaporizer switchover (if using dual vaporizers)
•
telemetry testing
•
installation, operation and maintenance manuals availability
•
recommended commissioning parts list, spare parts lists, and consumables lists as specified
•
set of specifications
[PAGE 95]
Process Gases
•
equipment and instruments list – i.e. schedules covering components and instruments
•
“as built” drawings (E&I diagrams, P&ID, layout)
Where FAT testing is specified, the type of tests described (or the applicable portion thereof) should be within the
scope of the FAT.
It should be noted that some tests (e.g., system capacities), can be reliably performed only during an FAT, as the
supplier will have the requisite test and measurement equipment. Any specific requirements should be included in the
specifications/purchase order.

### 8.4 Installation and Operational Tests

Installation and operational tests are usually conducted in accordance with the design specifications and contracts,
with the results documented in the commissioning document. The organization’s requirements for engineering
documentation should be specified, so that quality departments are able to use the engineering document to provide
the evidence of installation and operation to meet the design specifications. Installation and operational tests may be
performed by commissioning specialist contractors.
The procedure used to walk down a drawing will vary depending on the system design. A typical process is described,
as an indicator of the scope of the process:
•
Obtain the copy of the latest revision of the P&ID with all changes from the current Master P&ID incorporated,
usually as construction redline drawings.
•
Perform a walk down of the P&ID, red-lining it to reflect the as-built condition of the system. Use an indelible ink
pen of the following colors to document on the drawing all discrepancies between the field and the drawing used
for verification.
•
Use Red to indicate additions or corrections.
•
Use Green to indicate deletions.
•
Use Black to enter comments or notes.
•
Use a yellow highlighter to show what sections of the P&ID have been verified.
•
Highlight all equipment, valves, instruments, lines, etc., to indicate that they are installed per the latest P&ID.
•
Highlight tag numbers on the P&ID to indicate that the component is correctly tagged.
•
Highlight line numbers and insulation designations (within the line number) on the P&ID to indicate that the line is
correctly labeled and insulated.
•
Upon completion, the person performing the walk down signs and dates “Verified by” on the P&ID.
•
The system owner (or designated representative) will review the red-lined P&ID to verify that the P&ID changes
are acceptable. Acceptance is confirmed by signing and dating “Reviewed by” on the redlined P&ID. The original
red-lined P&ID is attached to the walk down drawing.
•
Place items such as missing tags, incomplete insulation, etc., on the Punch list.
[PAGE 96]
Process Gases
•
Review the changes and errors and decide if the installation is acceptable as walked down, or if the errors need
correction, in which case they become a punch list item.
Note that for compressed air systems, where the compressor/dryer capacities are critical, an independent certificate
(e.g., a CAGI certificate (Reference 26, Appendix 8)) may be required as part of the specification.

### 8.5 Performance Testing

Initial system performance testing and ongoing monitoring may be performed by an organization’s quality unit.
Performance testing should demonstrate correct system functionality under procedural control. This usually takes
place after the commissioning tests have demonstrated that the system is capable of performing to meet the design
specifications.
If these tests are not within the scope of the commissioning, organizations normally test to confirm system capabilities
before releasing the system for performance testing to ensure that the operation meets design specifications.
A test plan for verifying the system performance with a supporting rationale should be included in the performance
testing document. Performance testing is normally performed in two phases:
1.
an initial set of tests to confirm installed system performance and release the system for use
2.
An ongoing test plan to provide assurance that the critical performance parameters are being maintained. This is
typically part of the routine monitoring program (see Section 9 of this Guide).
Performance testing usually consists of sampling for the quality attributes at each POU under normal operating
conditions. Each POU should be sampled at least three consecutive times over a defined period and the data
obtained should be evaluated for compliance with predefined acceptance criteria.
Initially monitoring of the POUs may be performed at more frequent intervals, possibly as part of performance
testing, to further demonstrate adequate system performance over time. Once sufficient confidence of correct system
performance has been acquired, based upon a statistically representative data set, the monitoring frequency may be
decreased appropriately.

### 8.6 Acceptance and Release

Completion of the verification phase should include a verification (qualification) summary report which states whether
the system is fit for its intended purpose and can be released for use. This report should confirm that:
•
A system has been installed according to the design specification.
•
Instrumentation is calibrated in accordance with the design specifications.
•
The system operates in accordance with the design specifications.
•
Risk controls identified during any risk assessments are in place and operating as specified.
•
The system performance testing results complied with the acceptance criteria.
•
Operating and maintenance procedures are established.
[PAGE 97]
Process Gases
Review and approval of the report should confirm that all risk control measures defined in the risk assessment are
established and function as specified with the system performance meeting the defined CQAs.
Approval of the verification (qualification) summary report by the system owner, engineering department, and
validation/quality representative is normally considered confirmation that the system is suitable for intended use and
is released for operational use.
Ownership should be transferred from the project team to the operations/engineering departments, as appropriate.
Once the report is approved, formal Quality Assurance (QA) change and deviation management should be applied to
the system.
[PAGE 98]
[PAGE 99]
Process Gases
Operation and Maintenance
The principles described in the ISPE Good Practice Guide: Maintenance and the ISPE GAMP Good Practice Guide: A
Risk-Based Approach to Calibration Management (References 20 and 21, Appendix 8) should be applied to process
gas systems.

### 9.1 Maintenance

Equipment suppliers should provide general recommendations and training for equipment operation and
maintenance, including the change frequency for worn components.
The effect of the financial value of product and equipment failure on the maintenance program should be assessed.
The requirement for an equipment log should be considered (CFR 211.68/ Eudralex Volume 4 Annex 1) (References
4 and 6, Appendix 8).

#### 9.1.1 Factors for Consideration in a Maintenance Program

##### 9.1.1.1 Risk Assessment Results

The results of a risk assessment should be reviewed to determine their effect on the maintenance strategy. Where
maintenance is identified as a control, the scope and frequency of maintenance activities should be commensurate
with the risk.

##### 9.1.1.2 Changing of Filters

General filters are normally industrial grade; their life should be defined by the designer or equipment supplier based
on their usage. Filters should be changed regularly; the frequency change may depend on system usage.
Use of differential pressure as a solitary indication for filter changing may not be a good practice, unless the
differential pressure is monitored at a known gas flow rate.
Initial system performance monitoring should include one maintenance cycle for the filters as a minimum.
Higher grade or POU filters should have a defined change and test routine, particularly where the filter is the critical
component forming the interface between a non-GMP and GMP process gas system.

##### 9.1.1.3 Cleaning of the Equipment

Equipment should be kept clean to facilitate early recognition of any leaks and provide a visual assurance of the
degree of care provided to critical equipment.

##### 9.1.1.4 Functional Testing of the Equipment

Where equipment is provided in a duty standby configuration, the automatic switchover should be checked routinely.
Routine maintenance should be thorough, particularly of equipment that may impact on the CQAs of process gases,
e.g., automatic drain valves.
Regional regulations may require routine testing and inspection of safety equipment, pressure relief valves, and
storage vessels, etc.
[PAGE 100]
Process Gases

##### 9.1.1.5 Leak Testing and Energy and Usage Monitoring

Process gas systems should be tested for leaks. This may be performed using ultrasonic equipment during system
operation or using a pressure decay test.
Monitoring can identify significant changes in energy consumption or gas usage by a system.

#### 9.1.2 System Trending

The design of a system should be considered and any data that may yield useful information trended. Aspects that
can be recorded and trended include:
•
oil consumption of a lubricated compressor
•
power consumption of a gas system
•
gas consumption
•
system pressure
•
number of system stop/starts
•
system loading/unloading patterns
Techniques such as oil analysis and vibration monitoring should be considered. Oil should be subject to routine
analysis.
Vibration monitoring equipment may be specified as a feature of a piece of equipment. Periodic monitoring of
equipment vibration can identify significant changes that may indicate equipment wear or failure. Correct use of this
information can provide early warning of system degradation or usage issues, and prevent breakdown or system
failure.
Equipment may have the capability for online monitoring by the specialist supplier; this capability can be evaluated
compared to the owner organization capabilities.

##### 9.1.2.1 Spares Holding

A strategy for defining spare parts and consumables inventory should be established. This should consider the
availability of spare parts locally, and delivery times for key components. A stock holding and reorder level should be
defined in the inventory management. This should be reviewed periodically against usage history.

### 9.2 Calibration

A calibration strategy should be defined during the system design. This should consider the features of the specific
design, the reliability, function, and likely failure modes of sensors. Equipment suppliers usually can provide advice on
calibration methods and frequencies.
The results of a risk assessment should be reviewed to determine their effect on the calibration strategy. Where
alarms or instrumentation data are identified as a control, the scope and frequency of calibration activities should be
commensurate with the risk.
[PAGE 101]
Appendix 1
Example of the Development of a Sampling Strategy
Based on a Risk Assessment
[PAGE 102]
Appendix 1
Process Gases
10	 Appendix 1 – Example of the Development of a Sampling
Strategy Based on a Risk Assessment

### 10.1 System Description

•
Compressed air is generated to provide instrument and product contact air to a number of buildings on site.
•
Two oil free compressors supply air though a compressor mounted air cooler and separator through a set
of intermediate filters (Filters A and B). These filters are nominally rated at 0.01 ppm oil aerosol, 0.01 µm
particulate.
•
The air then goes through a dryer rated at -40°F (-40°C) atmospheric Pressure Dewpoint (PDP), and then a final
filters (Filters C and D) rated at 0.01 µm, to feed the receiver.
•
Air is then distributed to the buildings, with additional Point Of Use (POU) filters where required (i.e., where air
will contact product, product contact surfaces, or product primary containers).
•
The dryer is fitted with a high pressure dew point alarm that is fed to the Building Management System (BMS),
together with a system status and system general alarm signal.
•
The system air pressure is monitored by the BMS for engineering purposes (through a transducer located in the
receiver).

### 10.2 Control Strategy

The compressor control panels are interconnected to provide an automatic control system designed to maintain a
constant discharge pressure, and swap the duty compressor on a time schedule basis.
Each dryer has its own independent control system and pressure dewpoint monitor.

*[Figure 10.1: Schematic Drawing]*

[PAGE 103]
Process Gases
Appendix 1

#### 10.2.1 Distribution Pipe Work Specifications

The company pipework specifications for compressed air are:
•
Up to 4″ diameter – copper and brass materials of construction with soldered joints.

#### 10.2.2 Important Concepts

The air supplied by the system is -40°F (-40°C) atmospheric PDP.
As shown in Table 10.1 this may be converted to a relative humidity in the distribution system, assuming that the
pipework is typically operating circa 70°F (21°C), and the nominal pressure is 6 bar (87 PSIG);
Table 10.1: Dewpoint Temperature Conversion to Relative Humidity
Dewpoint °F (°C)
Saturated Vapor
% RH equivalent
Saturated Vapor
% RH at 6 bar, 21°C
Pressure (mb)
Pressure at 6 bar
-40 (-40)
0.2
0.8
1.2
4.8
-4 (-20)
1.3
5.2
7.8
31.2
32 (0)
6.1
24.4
36.6
146.4
68 (20)
23.3
93.2
139.8
559.2
Note: Calculation included for other PDPs for information.
Actual Vapor Pressure
RH = 100 × _______________________
Saturation Vapor Pressure
Saturation vapor pressure at 70°F (21°C) = 25 mb
The quantity of water necessary to support microbiological growth is usually expressed as water activity (aw). (It
is used as a measure for the dryness of foodstuffs; therefore, the resistance to microbiological growth.) The use
of water activity may be applied to non-sterile pharmaceutical products. (See USP/NF 31, General Chapter 1112
(Reference 14, Appendix 8).)
For gases, water activity is related to relative humidity (RH = aw × 100%) and also dewpoint which may be used to
express moisture in a compressed gas. Molds and yeasts do not grow where the aw is less than 0.6 and bacteria do
not grow where the aw is less than 0.85 (Scott et al., 2001) (Reference 32, Appendix 8).
Compressed Air Specifications
The design controls for each of the quality attributes for the system “product” (i.e., compressed air) are considered
below; in order to develop the optimum approach to the initial system testing and the ongoing monitoring test strategy.
The quality attributes are:
•
Moisture content
•
Hydrocarbon levels
•
Particle count (viable and non-viable)
[PAGE 104]
Appendix 1
Process Gases
6 Compressed air is an expensive product; routine system leak tests are considered a good engineering practice.

### 10.3 Moisture Content

The moisture contained in outside air is compressed with the air in the compressor. As the air is compressed the
temperature will rise, increasing the moisture carrying content despite the smaller volume.
As the air cools after compression, moisture will separate (condense) from the air as it goes through the compressor
after-cooler, where it drains (usually from a skid mounted post compressor filter – shown as a pre-filter/cyclonic
separator in the schematic). The air will then go through the intermediate filters (filter A and B) into the dryer.
The dryer will reduce the air moisture content of the air until it reaches a condition of at least -40°F (-40°C) dewpoint.
This is monitored by a pressure dewpoint instrument in the compressed air dryer discharge by a PDP instrument.
Note that the dewpoint is measured with the air at atmospheric pressure – a small amount of air is taken from the
outlet, and passed over the measuring sensor. A decrease in the PDP, e.g., from -41°F to -38°F (-41°C to -39°C)
(i.e., increase in the moisture content) will give an alarm that is given visually and audibly locally, and repeated to the
building management system.
The system pipework is all metallic, thus providing a very robust moisture barrier, separating the compressed air from
the atmosphere. There is, therefore, very little opportunity for moisture to be taken up by the air during distribution.
During the initial system construction, all pipework is pressure tested (typically at 1.5 times the normal maximum
operating pressure) to ensure that it is sufficiently robust to cope with the system operating pressure, and to ensure
that it does not leak. A leak test is repeated routinely as part of the system periodic maintenance to ensure the
systems integrity.6
The system integrity can be confirmed initially by checking the moisture content in the air after the dryer, then at the
outlet furthest from the dryer (i.e., the one with the longest length of pipework); therefore, testing the air that has
passed though the longest pipe run with greatest surface area, providing the maximum opportunity for moisture
ingress (see Table 10.2).
As this aspect of the system performance will not change through the life of the pipe system, routine monitoring is
not considered to be required. The PDP monitor, however, will be considered a critical instrument used to confirm
continuously the condition of the compressed air supplied to the system. Modification of the system would require
appropriate testing to be performed to confirm the integrity of the system (see Table 10.3).
10.4 Hydrocarbons/Oil
Hydrocarbon particulate and vapor contained in the outside air may be slightly reduced by the compressor air inlet
filter – a coarse filter designed primarily to protect the equipment from damage. The remaining particles/vapor will
then be compressed with the air. Depending on the type of hydrocarbon, it will remain as a vapor or form particulate;
typically, the particulate size range is in the range 0.2 to 0.3 µm. The intermediate filters (Filters A and B) will remove
particulate down to 0.01 µm; therefore, removing any hydrocarbon particulate, down to 0.01 mg/m3. Thus the air
after the filters (Filters A and B) will probably meet the required specifications, unless there is an unusually high
hydrocarbon contamination in the atmosphere.
Another potential source of hydrocarbon contamination is the pipework, with the associated jointing process used.
The engineering specifications call for degreased material, with any threaded joints in the system made without a
hydrocarbon based lubricant.
[PAGE 105]
Process Gases
Appendix 1
The other potential source of hydrocarbon contamination is the pipework, with the associated jointing process used.
The engineering specifications call for degreased material, with any threaded joints done without a hydrocarbon
based lubricant.
The life of the filter element depends on a number of factors, including the filter challenge (i.e., the feed air quality),
air temperature, and the air flow rate.
The performance qualification model proposed will consider all of these factors.
Note that the final filters (Filters C and D) are not rated for oil vapor removal.
Initial testing will be pre- and post- the intermediate and from the point of use on the index run (longest pipe run) of
each floor of the building served by the system (see Table 10.2).
The initial test will determine:
•
the challenge to Filters A and B (If the local environment is reasonable, the air delivered from the compressor
may meet the specification with no further treatment. If there is heavy pollution, then a filter will be required.)
•
the output air quality from the system intermediate filters (Filters A and B)
•
any measurable contamination from the compressed air distribution pipework to the air being distributed
Ongoing monitoring of the air will depend on the result of this test. If the system has no hydrocarbon challenge from
the air, then one strategy is proposed, if the outside air provides a hydrocarbon challenge to the system an alternative
monitoring approach is proposed (see Table 10.3).

### 10.5 Viable and Non-Viable Particulate

Coarse particulate in the outside air will be filtered out through the compressor air inlet filter, a coarse filter designed
primarily to protect the equipment from damage. The remaining particles will then be compressed with the air.
Particulate will be removed by the coalescing intermediate filters (Filters A and B) and by the commercial grade 1 µm
final system filters (Filters C and D). Product protection (in this example, the product is an oral solid dose) would be
provided by local 0.45 µm filters installed at each outlet where air will contact product, product contact surfaces, or
product primary containers.
The initial test strategy is proposed to demonstrate that the system filtration is adequate to provide air meeting the
specifications at the generation system, and that the distribution system is clean, i.e., free of particulate (see Table
10.2).
The ongoing monitoring proposed is intended to demonstrate that the system can reliably provide air meeting the
specifications from the generation system (see Table 10.3).

### 10.6 Microbial Levels

Monitoring for viable particles will be treated in the same manner as non-viable, as the risk of proliferation within the
receiver and distribution system is controlled by the low humidity (PDP) air within the system.
Assuming that the system will operate at -40°F (-40°C) DP, and at 90 psi (6 bar) with an ambient temperature of 70°F
(21°C), the air will be at approximately 5% RH, i.e., an aw of 0.05.
[PAGE 106]
Appendix 1
Process Gases
The initial test strategy is proposed to demonstrate that the system filtration is adequate to provide air meeting the
specifications at the generation system, and that the distribution system is free from microbial contamination (see
Table 10.2).
The ongoing monitoring proposed is intended to demonstrate that the system can reliably provide air meeting the
specifications from the generation system (see Table 10.3).
[PAGE 107]
Process Gases
Appendix 1
CQA
Test Locations
Test Frequency
Rationale/Acceptance Criteria
Proposed
Moisture
Test Point 1 – After the
One time each day for
To ensure that there is no moisture ingress
Content
dryer
3 days(Note 2)
through the system pipework – the test
Test Point 2 – At the
duration is to determine typical working
index(Note 1) run outlet for
range of results.
each floor of the
Acceptance criteria: Air must not contain
buildings served
more moisture than -40°F (-40°C) PDP(Note 3).
Hydrocarbon
Test Point 1 – Before the One time each day for
PQ testing here will be carried out over three
Levels
pre-filter
3 days(Note 2)
days, in order to:
Test Point 2 – After the
• Determine if there is a challenge to the
pre-filter
filter from the environment
Test Point 3 – At the
• Determine if there is a challenge due to
index(Note 1) run outlet for
contamination in the distribution pipework
each floor of the
• Acceptance criteria: air after the pre-filter
buildings served; before
≤ 0.1 mg/m3
the POU filter
• Air from the POU ≤ 0.1 mg/m3
Note: The expected result is that “the
hydrocarbon level should not exceed that
measured post the intermediate filter.”
Particulate:
Test Point 1 – After the
To confirm the quality
PQ testing here will be performed over three
Total
final filter
of the air delivered from
days to demonstrate that the system is
Test Point 2 – At the
the generation system,
clean.
index(Note 1) run outlet for
and to verify that there is Acceptance criteria: air after the final filter
each floor of the
no contamination of the
x ≥ 0.5 µm ≤ 100/ft3
buildings served
air due to the storage
and distribution system
Air from the POU x ≥ 0.5 µm ≤ 100/ft3
materials of construction, Expected result is that “the particle count
manufacturing residue,
should not exceed that measured post the
or construction activities final filter, once the system is blown out
adequately.”
Particulate:
Test Point 1 – After the
To confirm the quality
PQ testing here will be carried out over three
Viable
final filter
of the air delivered from
days to demonstrate that the system is
Test Point 2 – At the
the generation system,
clean.
index(Note 1) run outlet for
and to verify that there is Acceptance criteria: air after the final filter
each floor of the
no contamination of the
y ≤ 0.03 cfu/ft3
buildings served
air due to the storage
and distribution system
Air from the POU y ≤ 0.03 cfu/ft3
materials of construction, Expected result is that “the viable particle
manufacturing residue,
count should not exceed that measured post
or construction activities the final filter, once the system is blown out
adequately.”
Notes: 1. Index run is used to describe the longest length of pipework from the compressor to an outlet on the floor
– the concept is to give the greatest opportunity to collect any potential contaminants from the pipework.
2. The days can be consecutive (but do not need to be).
3. Note that variation in the moisture content is expected as the dryer operates on a “not to exceed”
principle, not a control set point.
Table 10.2: Initial Testing Proposed
[PAGE 108]
Appendix 1
Process Gases
CQA
Test Locations
Test Frequency
Rationale/Acceptance Criteria
Proposed
Moisture
Test Point 1 – After the
The system PDP is
To ensure that there is no system
Content
dryer
continuously monitored
degradation (primarily due to modification of
Test Point 2 – At the
by the instruments on
the system pipework)
index(Note 1) run outlet for
the dryer.
Acceptance criteria: Air must not contain
each building served
The index(Note 1) run POU more moisture than it does at -40°F (-40°C)
in each building will be
PDP.
tested after any
modifications to the
system.
Hydrocarbon
Test Point 1 – Before
If the system feed from
If there is no challenge initially to monitor and
Levels
the intermediate filter
the compressor meets
see if there are changes to the amount of
(Filters A and B)
the specification, i.e.,
environmental contamination.
Test Point 2 – After the
the compressed air from
intermediate filter
the compressor meets
To ensure that there is no system
(Filters A and B)
the specification with
degradation (primarily due to modification of
Test Point 3 – At the
no treatment:
the system pipework).
index(Note 1) run outlet for
•
Annually from point
If there is a challenge, confirm that the
each building served
1 to determine if the
filter size/change frequency is adequate for
supply still meets
the challenge. Note: The POU filter will
the limits, if the
provide protection for any hydrocarbon
challenge to the
droplets.
system exceeds the
Acceptance criteria: ≤ 0.1 mg/m3
specification then
test as described in
“initial testing
proposed.”
•
If the system has a
challenge due to the
supply air quality, i.e.,
the compressed air
from the compressor
does not meet the
specification.
•
Routine monitoring
will be performed for
three successive
changes of the
intermediate filter at
an estimated point
half way through the
filter life, just before
and just after it is
changed. After this
time the results will
be reviewed and the
test frequency
reassessed.
Table 10.3: Ongoing Monitoring Proposed
[PAGE 109]
Process Gases
Appendix 1
CQA
Test Locations
Test Frequency
Rationale/Acceptance Criteria
Proposed
Hydrocarbon
The index(Note 1) run
Levels
POU in each building
(continued)
will be tested after any
modifications to the
system.
Particulate:
Test Point 1 – After the
Routine monitoring (i.e.,  To confirm the quality of the air delivered to
Total
final filter (Filters C and
a check of the system
the system, and confirm that the final filter
D)
output) will be carried
size/change frequency is adequate for the
Test Point 2 – At the
out at point 1 for three
challenge.
index(Note 1) run outlet for
successive changes of
each building served
final filter at an
Note that the POU filter will provide
estimated point half way additional product protection.
through the filter life, just Acceptance criteria air after the final filter is
before and just after it is ≥ 0.5 µm ≥ 100/ft3
changed. After this time
the results will be
reviewed and the test
frequency reassessed.
The index(Note 1) run POU
in each building will be
tested after any
modifications to the
system.
Particulate:
Test Point 1 – After the
Routine monitoring (i.e., To confirm the quality of the air delivered to
Viable
final filter (Filters C and
a check of the system
the system, and confirm that the filter size/
D)
output) will be carried
change frequency is adequate for the
Test Point 2 – At the
out for three successive
challenge.
index(Note 1) run outlet for
changes of final filter at
each building served
an estimated point half
Note that the POU filter will provide
way through the filter
additional product protection.
life, and just before it is
Acceptance criteria air after the final filter is
changed. After this time
≥ 0.03 cfu/ft3
the results will be
reviewed and the test
frequency reassessed.
The index(Note 1) run POU
in each building will be
tested after any
modifications to the
system.
Notes: 1. Index run is used to describe the longest length of pipework from the compressor to an outlet on the floor
– the concept is to give the greatest opportunity to collect any potential contaminants from the pipework.
Table 10.3: Ongoing Monitoring Proposed (continued)
[PAGE 110]
[PAGE 111]
Appendix 2
Risk Assessment Examples
[PAGE 112]
Appendix 2
Process Gases
11	 Appendix 2 – Risk Assessment Examples
From an audit/patient safety perspective the key system performance monitoring data could be kept in a system
monitoring file to facilitate routine review of performance and analysis of any trends.
The contents of this file may include, as applicable:
•
a system as built record drawing (P&ID showing test points)
•
critical filter test data
•
particle monitoring results
•
hydrocarbon test results
•
microbial test results
•
gas identity
•
moisture content
The “package” of data produced should be reviewed to ensure that the initial performance “baseline,” established
during the performance verification is maintained and performance deterioration is absent, such that it is adequate to
demonstrate adherence to the established quality attributes.
There are a number of approaches to the system risk assessment. One approach is:
Example:
Step 1
The quality attributes/CPPs for the gas required at the POU are defined and documented together with the supporting
rationale, e.g.:
•
The compressed air is supplied to an ISPE Grade 8 area. The specified particle count and microbial limits
applied to the free air delivered are the same as the environment being supplied.
•
Moisture content is considered a critical factor as:
-
It may influence the microbial performance of the gas distribution system.
-
The product is moisture sensitive.
•
The hydrocarbon limits are defined as 0.5 mg/m3 in the organization quality standards for this application, due to
risk of taste/color influence on the product coating.
•
Note that pressure is not considered a critical parameter as far as the system is concerned; if it is critical for
the correct function of the system supplied by the gas, then that system will incorporate a pressure monitoring
device – this is considered the most robust approach considering that the system pressure cannot practically be
monitored at every outlet, and gas usage is not usually controlled by the gas system controls.
[PAGE 113]
Process Gases
Appendix 2
Step 2
Define how the CQAs/CPPs are monitored, e.g.:
•
The particle count is routinely taken at the supply point to the distribution system – reference SP1, and at the
point of use with the furthest run of distribution pipe work – reference POU28.
•
The microbial levels are routinely taken at the supply point to the distribution system – reference SP1, and at the
point of use with the furthest run of distribution pipe work – reference POU28.
•
The system PDP is monitored by a calibrated instrument on the dryer discharge, with a hard wired connection to
the dryer discharge valve operated from the PDP instrument alarm.
Step 3
Define how the CQAs/CPPs are achieved, and any associated equipment risks:
•
The system particle count is controlled by the system filters – for this application the filters are standard
commercial units within the distribution system’s system boundary, changed following a PM procedure on a time
base.
-
The system is performance verified by testing the air particle count at the point of entry into the distribution
system (SP1), and at the outlet furthest from the source (POU28) – i.e., with the maximum pipe work length.
-
These two points will be routinely monitored to confirm satisfactory system performance.
•
The system microbial levels are controlled by the system filters – for this application the filters are standard
commercial units, changed from a PM procedure on a time base. The system microbial performance is also
influenced by the Pressure Dewpoint (moisture content) of the air.
-
The system is performance verified by testing the microbial levels at the point of entry into the distribution
system (SP1), and at the outlet furthest from the compressor (POU28) – i.e., with the maximum pipe work
length.
-
These two points will be routinely monitored to confirm satisfactory system performance.
•
The system hydrocarbon content is controlled by the system filters – for this application the filters are standard
commercial units within the distribution system’s boundary, they are changed following a planned maintenance
procedure on a time base.
-
The compressor is an oil free unit, so the challenge to the system is due to atmospheric pollution and any
potential contamination of the distribution system due to the materials or construction techniques. The initial
installation performance will be verified by testing the delivered hydrocarbon content at the discharge from
the compressor – to measure the challenge to the system, at the point of entry into the distribution system
(SP1), and at the outlet furthest from the compressor (POU28) – i.e., with the maximum pipe work length.
-
The challenge to the system will then be routinely checked by monitoring the hydrocarbon content at the
discharge from the compressor.
•
The system Pressure Dewpoint (PDP) is controlled by the dryer.
•
The dewpoint is continuously monitored by a calibrated instrument on the dryer discharge, with a hard wired
connection to the dryer discharge valve operated from the PDP instrument alarm.
[PAGE 114]
Appendix 2
Process Gases
The equipment to be verified and maintained under quality change control is therefore the PDP monitor on the dryer,
the distribution system including the final filters and pipe work up to the points of use, i.e., the components in the
system that the risk assessment has identified as risk controls, and detection mechanisms.
Other aspects of the system are controlled through good engineering practices.
[PAGE 115]
Appendix 3
Calibration Strategies
[PAGE 116]
Appendix 3
Process Gases
12	 Appendix 3 – Calibration Strategies
It is considered good practice to review the instrumentation on a process gas system to determine the relative
importance of the instruments, considering the system requirements.
Doing this helps to enable users to categorize the instruments into a hierarchy:
•
product critical
•
process or system critical
•
safety or environmental critical
•
non critical or for information only
For further information refer to the ISPE GAMP Good Practice Guide: A Risk-Based Approach to Calibration
Management (Reference 21, Appendix 8).
Once the instruments are categorized so that their function is clearly defined, an appropriate calibration strategy can
be developed and applied.
The example provided is intended to show how the instruments on a simple process gas system can be categorized
and an appropriate calibration strategy defined:
System Description
The site compressed air is fed through a breathing air purifier then distributed to the use points through a medical
grade copper pipe work. Each user point is fitted with a 0.3 micron filter, pressure regulator, and gauge connected to
a female quick release coupling.
The users are all breathing air hoods – each hood is fitted with a male quick release coupling, and a variable area
flow meter.
The breathing air unit is fitted with a number of alarms, including low inlet pressure, or high inlet pressure. These will
be regularly checked as part of the equipment planned maintenance program.
The other instrumentation on the system is shown on the schematic drawing, Figure 12.1.
[PAGE 117]
Process Gases
Appendix 3
Figure 12.1
Commissioning and Calibration Proposals
1.
The air purifier discharge flow meter has been purchased as a commercial un-calibrated device; this is
considered non-critical to be used for engineering information purposes only – flow will be checked at the outlets
each time the hood is set up for use per the operating procedure reference SOP-xxxx1.
The flow meter will be checked to ensure the specified unit has been installed correctly during Installation
Verification.
Routine calibration is not required. However, the air purifier periodic maintenance will include a visual inspection
for operation and damage; the unit will be replaced if it is found to be damaged or non operational.
2.
The purifier outlet pressure gauge has been purchased as a commercial un-calibrated device; this is considered
non critical to be used for engineering information purposes only – flow should be checked at the outlets
periodically.
The pressure gauge will be checked to ensure the specified unit has been installed correctly during Installation
Verification.
[PAGE 118]
Appendix 3
Process Gases
Routine calibration is not required. However, the air purifier planned maintenance will include a visual inspection
for operation and damage; the unit will be replaced if it is found to be damaged or non operational.
3.
The low pressure switch on the air purifier discharge actuates the alarm. This is considered safety critical and will
be calibrated annually, with the associated alarm functionally checked.
4.
The outlet pressure gauges have been purchased as commercial un-calibrated devices considered non-critical to
be used for engineering information purposes only – flow will be checked at the outlets each time the breathing
air hood is used and each time the hood is set up for use per the operating procedure reference SOP-xxxx1.
The pressure gauges will be checked to ensure the specified unit has been installed correctly during Installation
Verification.
Routine calibration is not required. However, the gauge will be verified annually (i.e., calibrated at a single point)
at around the midpoint setting 40 to 50 psi required for the hood supply to ensure that it is not damaged and is
consistent to facilitate its use as a reference when setting the flow to the hood. The working range for the hood is
25 to 70 psig.
[PAGE 119]
Appendix 4
Sample User Requirement Specifications
[PAGE 120]
Appendix 4
Process Gases
13	 Appendix 4 – Sample User Requirement Specifications
Project Name__________________________________ 	 Project Number_________________________________
Document Number_____________________________ 	 Revision Number________________________________
Approval Table
Signs For
Role/Name
Date
Signature
Author:
Approval
System Owner:
Correctness and
Completeness
Review
SME Function
Correct requirements,
(Engineering):
including system CQA’s
and CPP’s
Approval
Quality Unit:
Compliance with cGMP
requirements
Revision History
Version
Prepared By
Date
Description of Change
Initial draft – issued for review and comment
Table of Contents
Document Approvals
Revision History

## 1.0 Introduction and Background

## 2.0 Purpose and Scope

## 3.0 Abbreviations, Acronyms, and Definitions

## 4.0 Responsibilities

## 5.0 Process Description

## 6.0 User Requirements

## 7.0 Reference Documents

[PAGE 121]
Process Gases
Appendix 4

## 1.0 Introduction and Background

Briefly describe what initiated the project, and any schedule requirements.

## 2.0 Purpose and Scope

Briefly describe the project scope and any related product requirements.
Briefly describe the system boundaries, i.e. what is included in the scope of the project.

## 3.0 Abbreviations, Acronyms, and Definitions

Term
Definition

## 4.0 Responsibilities

Where applicable describe any specific responsibilities related to the project, not the responsibilities of the signatories
who are described in the approvals box.

## 5.0 Process Description

High level description of the process requiring the process gas, how the process gas will be utilized, and the potential
impacts to the process.

## 6.0 User Requirements

Indicate the “type” of each User Requirement as one of the following:
•
quality related requirements
-
CQAs – Critical Quality Attributes
-
CPPs – Critical Process Parameters
•
business requirements
•
optional attributes
[PAGE 122]
Appendix 4
Process Gases
Designation
Description
Type
Minimum Pressure Requirements
Flow Requirements
Hydrocarbons Limits
Particulate/Microbial limits
Moisture Limits
Purity Requirements
Operating Hours
Maintenance Requirements (Redundancy)
Sustainability/Energy Recovery
Alarm Requirements
Monitoring Requirements
Available Utilities
Available Equipment Locations
Preferred Vendors – Equipment/Instrumentation
Other Facility Requirements

## 7.0 Reference Documents

The current revisions of the documents listed below have been consulted in the preparation of this specification
document or govern the content of this document.
[PAGE 123]
Appendix 5
The Effect of System Leakage
[PAGE 124]
Appendix 5
Process Gases
14	 Appendix 5 – The Effect of System Leakage

### 14.1 Minimize Leaks

It is very difficult to completely eliminate leaks; designs aim to minimize leaks. Pressure testing after construction and
an ongoing leak detection program may be used to minimize these potentially expensive losses from a process gas
system.
When defining the required process gas quality, it may be necessary to consider the air quality of the room the lines
will pass through or rooms where the gas may be vented after use. The gas quality should meet or exceed the air
quality of the room.
Pressurized gases are expensive; losses from quite small leaks can be considerable, as shown in Table 14.1.
Table 14.1: Flow in SCFM through Orifice Basis Pressure and Orifice Size
14.2 Pressure/Flow Controllers
System controllers, such as pressure/flow controllers, can improve the performance of systems. Their primary
function is to stabilize system pressure separate from and more precisely than compressor controls. A pressure/flow
controller does not directly control a compressor and is generally not included as part of a compressor package. A
pressure/flow controller is a device that serves to separate the supply side of a compressor system from the demand
side.
The type of control system specified for a given system is largely determined by the type of compressor being
used and the facility’s process demand profile. If a system has a single compressor with a very steady demand, a
simple control system may be appropriate. A complex system with multiple compressors and widely varying demand
will require a more sophisticated control strategy. This is the situation when the generation of compressed air
emanates from the same source for both process and instrument air applications in a pharmaceutical manufacturing
environment.
The pressure/flow controller can also be used a back pressure flow device capable of maintaining pressure on critical
applications during temporary interruptions in supply.
Pressure
Discharge Orifice Size (inches)
(psig)
1/64
1/32
1/16
1/8
1/4
3/8
0.3
1.2
4.8
19.2
76.7
0.33
1.3
5.4
21.4
85.7
0.37
1.5
5.9
23.8
94.8
0.41
1.6
6.5
26.0
0.49
2.0
7.9
31.6
[PAGE 125]
Process Gases
Appendix 5

*[Figure 14.1: System Pressure/Flow Controller]*

[PAGE 126]
[PAGE 127]
Appendix 6
Nitrogen Gas Generation Systems
[PAGE 128]
Appendix 6
Process Gases
15	 Appendix 6 – Nitrogen Gas Generation Systems
Nitrogen generation facilities operate based on one of three operating principles:
1.
membrane
2.
adsorption
3.
cryogenic
Membrane Process
The membrane process generates nitrogen purities ranging from 95% up to 99.5%. A unit would consist of an air
compressor, filters, pre-heater (if required) membrane cartridges, piping, valves, and the control system. The process
can be described as:
•
Compressed dry air enters the cartridge on one end.
•
Oxygen, carbon dioxide, and residual humidity permeate faster than nitrogen through the membrane wall, thus
enabling a side venting of those gases to the atmosphere.
•
On the other cartridge end, the nitrogen exits and, depending upon the application, leaves the unit direct to the
user’s process or to a suitably dimensioned buffer tank.
The output of a membrane cartridge is dependent upon three factors:
1.
the pressure of the feed air
2.
the temperature of the feed air
3.
the required purity level of the nitrogen
For example, if temperature increases, then selectivity decreases, but capacity increases. If pressure increases,
selectivity will increase. Pressure and temperature are adapted to the product specification by designing the air
compressor and the pre-heater. System capacities can be changed by varying the number of cartridges in the unit.
Adsorption Process
The adsorption process generates nitrogen purities ranging from 98% up to 99.99% or even higher. Each unit
contains two molecular-sieve adsorbers together with the necessary air compressor, piping, valves, and control
system. For adsorptive extraction of nitrogen from air, Carbon Molecular Sieves (CMS) are used as the adsorption
agents. Under pressurized conditions, these adsorb oxygen, water vapors, and carbon dioxide, letting the nitrogen
pass through the orifices of the sieve. To regenerate the molecular sieve after it has become loaded with oxygen, it is
necessary to blow it back down to atmospheric pressure and purge it.
Production and regeneration phases are performed alternately at regular intervals. While one adsorber is in the
production phase, adsorbing oxygen into the sieve under pressure and allowing the nitrogen to pass through, the
other is regenerated by evacuating the pressure to the atmosphere. The performance of a PSA unit depends on the
ambient temperature. The required purity and product pressure have an influence on the air demand and, of course,
on the energy consumption.
[PAGE 129]
Process Gases
Appendix 6
Cryogenic Process
The cryogenic process generates nitrogen purities from 1 to 100 ppm oxygen. The cryogenic process separates
air by means of rectification, which utilizes the different evaporation temperatures of the components of the air. A
cryogenic plant mainly consists of a warm end (with an air compressor and a molecular sieve station) and a cold part
(coldbox) with the rectification column where the actual air separation process takes place. Inlet filters remove dust
and other physical impurities from the air before it enters the air compressor, where it is compressed to the required
process pressure. It is then precooled in the after-cooler or in a refrigeration drier. After passing through a moisture
separator, the air enters one of two molecular adsorbers, where impurities (such as water, carbon dioxide, most
hydrocarbons etc.) are removed. The process air is cooled down to almost liquefaction temperature in the main heat
exchanger in counter-flow with the cold separation products and then fed into the bottom of the rectification column.
There, the feed air is rectified. The pure nitrogen fraction is withdrawn at the top of the column, heated up in counter-
flow in the main heat exchanger, and then fed into the product line. Cooling is supplied by Liquid Nitrogen (LIN) from
the back-up system or is generated using an expansion turbine.
[PAGE 130]
[PAGE 131]
Appendix 7
Miscellaneous Information
[PAGE 132]
Appendix 7
Process Gases
16	 Appendix 7 – Miscellaneous Information
Table 16.1: Components of Air
Table 16.2: Characteristic Values of Various Gases
Gases
Volume %
Weight %
Nitrogen
78.3

### 75.47 Oxygen

20.99

### 23.2 Carbon Dioxide

0.03
0.046
Hydrogen
0.01
0.001
Argon
0.933

### 1.286 Helium

0.0005
0.00007
Neon
0.0018
0.0012
Krypton
0.0001
0.0003
Xenon
0.00001
0.00004
Gas
Molv
r
r / rLuft
n
R
X
kg / kmol
kg / m3
m3 / kg
mkp / kg*K
Cp / Cv
Air
28.96
1.293
1.0
0.773
29.27

### 1.4 Nitrogen

28.02
1.25
0.967
0.8
30.26

### 1.425 Oxygen

32.0
1.429
1.105
0.7
26.5

### 1.4 Carbon Dioxide

44.01
1.977
1.529
0.506
19.27

### 1.3 Hydrogen

2.02
0.09
0.07
11.127
420.58

### 1.415 Argon

39.94
1.784
1.378
0.561
21.23

### 1.665 Helium

4.0
0.179
0.138
5.602
211.81

### 1.665 Neon

20.18
0.9
0.696
1.111

### 41.99 Krypton

83.8
3.74
2.9
0.344

### 10.09 Xenon

131.3
5.9
4.56
0.169
6.42
[PAGE 133]
Process Gases
Appendix 7
Table 16.3: Average Dust Content in Air
Table 16.4: Grain Sizes of Dust in an Industrial Area
Location
Medium Concentration
Average Particle Size
Largest Particle Size
mg/m3
µm
µm
Rural Area
During Rain
0.05
0.8
Dry Weather
0.15
Large City Area
Residential
0.40
Industrial
0.75
Industrial Area
1000
Workshops
1 – 10
-
-
Fettling Shop, Foundry
50 – 100
-
-
Cement Factory
100 – 200
-
-
Combustion Flue Gases
1000 – 15000
-
-
To establish what quantity of gaseous water vapor is contained in 1 kg of air, and which part thereof is transformed
into condensed water upon cooling, one uses the formula below. For air and water, the following is valid:
RL = 29.27 mkg/kg *K
RD = 47.1 mkg/kg *K
pD
x = 0.622 ×	 ______________
(pD + pL) = pD
Here pD is the saturation pressure obtained at a specific temperature referred to the barometric pressure pD + pL.
Size Range
Medium Size
Number per m3
Percentage Weight/
µm
µm
in 1000
Volume %
10 – 30
5 – 10
7.5
1750
3 – 5
2500
1 – 3
10700
0.5 – 1
0.75
67000
0 – 0.5
0.25
910000
[PAGE 134]
Appendix 7
Process Gases

*[Figure 16.1: Saturation Pressure (Atmospheric Pressure)]*

If the air contains more water vapor than corresponds to the degree of saturation, the surplus vapor precipitates in the
form of water mist.
The temperature at which a quantity of air is saturated by water vapor is described as saturation temperature or
dewpoint temperature.
Thus the saturation quantity is the maximum quantity of water which can be carried by the air at a given temperature.

*[Figure 16.2: Absolute Humidity (Atmospheric Air)]*

[PAGE 135]
Process Gases
Appendix 7
Table 16.5: Absolute Humidity of Saturated Air in g/m3
°C
g/m3
°C
g/m3
5.15
24.38
5.52
25.78
5.92
27.22
6.35
28.77
6.80
30.36
7.28
32.02
7.77
33.78
8.29
35.64
8.84
37.57
9.40
39.60
9.99
41.72
10.65
43.94
11.35
46.20
12.07
48.62
12.82
51.14
13.63
53.76
14.48
56.49
15.37
59.35
16.32
62.34
17.29
65.44
18.31
68.63
19.38
71.92
20.53
75.40
21.74
79.08
23.04
82.98

*[Figure 16.3: Hydrocarbon Content of Air (Median-Day Values)]*

[PAGE 136]
Appendix 7
Process Gases
Table 16.6: aw Values of Microorganism Inhibition7
Microorganism Inhibited
aW
Clostridium botulinum A, B
.97
Clostridium botulinum E
.97
Pseudomonas fluorescens
.97
Clostridium perfringens
.95
Escherichia coli
.95
Salmonella
.95
Vibrio cholerae
.95
Bacillus cereus
.93
Listeria monocytogenes
.92
Bacillus subtilis
.91
Staphylococcus aureus
.86
Most molds
.80
No microbial proliferation
.50
7	 http://en.wikipedia.org/wiki/Water_activity#cite_note-Marianski7-2
[PAGE 137]
Appendix 8
References
[PAGE 138]
Appendix 8
Process Gases
17	 Appendix 8 – References
1.
Good Manufacturing Practice Guide for Active Pharmaceutical Ingredients – Q7, International Conference on
Harmonisation of Technical Requirements for Registration of Pharmaceuticals for Human Use (ICH), www.ich.
org.
2.
Pharmaceutical Development – Q8(R2), International Conference on Harmonisation of Technical Requirements
for Registration of Pharmaceuticals for Human Use (ICH), www.ich.org.
3.
Quality Risk Management – Q9, International Conference on Harmonisation of Technical Requirements for
Registration of Pharmaceuticals for Human Use (ICH), www.ich.org.
4.
US Code of Federal Regulations, Title 21, Food and Drugs, www.fda.gov.
•
21 CFR Part 210 – Current Good Manufacturing Practice in Manufacturing, Processing, Packing, Or Holding
Of Drugs; General
•
21 CFR Part 211 – Current Good Manufacturing Practice for Finished Pharmaceuticals
5.
Compliance Program Guidance Manual for FDA Staff: Drug Manufacturing Inspections Program 7356.002
(implemented 1 February 2002), www.fda.gov.
6.
Eudralex Volume 4 Annex 1, Manufacture of Sterile Medicinal Products, November 2008; Guidance for Industry
Sterile Drug Products Produced by Aseptic Processing – Current Good Manufacturing Practice, ec.europa.eu.
7.
International Organization for Standardization (ISO), www.iso.org.
•
ISO 14644: Cleanrooms and Associated Controlled Environments
•
ISO 14698-1, Annex-B: Cleanrooms and Associated Controlled Environments -- Biocontamination Control
•
ISO 8573-1:2010, Compressed Air -- Part 1: Contaminants and Purity Classes
8.
“Inspection of Utilities,” PI 009-3, Pharmaceutical Inspection Convention and Pharmaceutical Inspection Co-
operation Scheme (PIC/S), www.picscheme.org.
9.
Guide-0031, Good Manufacturing Practices for Medical Gases (29 December 2006); and Medical Gas – Good
Manufacturing Practices (GMP) – Questions and Answers, Health Canada, www.hc-sc.gc.ca.
10. CAN/CSA-Z7396.1-06, Medical Gas Pipeline Systems – Part 1: Pipelines for Medical Gases and Vacuum,
Canadian Standards Association (CSA), www.csa.ca.
11. CAN/CGSB-24.2-M86, Identification of Medical Gas Containers, Pipelines and Valves, Canadian General
Standards Board (CGSB), www.ccohs.ca/legislation/cgsb.html
12. European Pharmacopoeia – Gases Monographs : e.g., Air, Medicinal; Synthetic Air, Medicinal; Argon; Carbon
dioxide, Nitrogen; Nitrogen, Low Oxygen; and Oxygen.
13. Japanese Pharmacopoeia Monographs for Medicinal Gases, jpdb.nihs.go.jp/jp15e/.
[PAGE 139]
Process Gases
Appendix 8
14. United States Pharmacopeia/National Formulary (USP/NF), www.usp.org
•
United States Pharmacopeia/National Formulary – Gases Monographs: e.g., Medical Air; Carbon dioxide;
Nitrogen; and Oxygen.
•
USP 34-NF 29, General Chapter <1112>
15. ANSI/ISA-7.0.01-1996 Quality Standard for Instrument Air, American National Standards Institute (ANSI), www.
ansi.org.
16. Compressed Gas Standards, National Fire Protection Association (NFPA), www.nfpa.org.
•
NFPA 50: Standard for Bulk Oxygen System at Consumer Sites
•
NFPA 55: Standard for the Storage, Use, and Handling of Compressed Gases and Cryogenic Fluids in
Portable and Stationary Containers, Cylinders, and Tanks
•
NFPA 99: Standard for Health Care Facilities
17. BPE-2009 Bioprocessing Equipment, American Society of Mechanical Engineers (ASME), www.asme.org.
18. Comparison of European, US & Japanese Pharmacopoeia Monographs for Medicinal Gases (MGC Document
152/08/E), European Industrial Gases Association (EIGA), www.eiga.org.
19. ISPE Baseline® Pharmaceutical Engineering Guide, Volume 5 – Commissioning and Qualification, International
Society for Pharmaceutical Engineering (ISPE), First Edition, March 2001, www.ispe.org.
20. ISPE Good Practice Guides, International Society for Pharmaceutical Engineering (ISPE), www.ispe.org.
•
Good Engineering Practice, First Edition, December 2008
•
Maintenance, First Edition, May 2009.
•
Applied Risk Management for Commissioning and Qualification, First Edition, under development at time of
publication.
21.	 ISPE GAMP® Good Practice Guide: A Risk-Based Approach to Calibration Management, International Society for
Pharmaceutical Engineering (ISPE), Second Edition, November 2010, www.ispe.org.
22.	 ISPE Guide: Science and Risk-Based Approach for the Delivery of Facilities, Systems, and Equipment,
International Society for Pharmaceutical Engineering (ISPE), First Edition, June 2011, www.ispe.org.
23. ASTM International, www.astm.org.
•
ASTM E2500-07 Standard Guide for Specification, Design, and Verification of Pharmaceutical and
Biopharmaceutical Manufacturing Systems and Equipment
•
ASTM G88-05 Standard Guide for Designing Systems for Oxygen Service
•
ASTM D-323-72 Standard Test Method for Vapor Pressure of Petroleum Products
24.	 Parenteral Drug Association (PDA) Technical Reports, www.pda.org.
•
•
•
[PAGE 140]
Appendix 8
Process Gases
25.	 Compressed Gas Standards, Compressed Gas Association. www.cganet.com.
•
C-9: Standard Color Marking of Compressed Gas Containers for Medical Use
•
E-10: Maintenance of Medical Gas and Vacuum Systems in Health Care Facilities
•
G-4: Oxygen: G-4.1: Cleaning Equipment for Oxygen Service; O2-DIR Directory of Cleaning Agents for
Oxygen Service; and G-4.3: Commodity Specification for Oxygen
•
G-6: Carbon Dioxide: G-6.1: Standard for Low Pressure Carbon Dioxide Systems at Consumer Sites; and
6.2: Commodity Specification for Carbon Dioxide
•
G-10.1: Commodity Specification for Nitrogen
•
G-11.1: Commodity Specification for Argon
•
P-1: Safe Handling of Compressed Gases in Containers
•
P-2: Characteristics and Safe Handling of Medical Gases
•
P-8.1: Safe Installation and Operation of PSA and Membrane Oxygen and Nitrogen Generators
•
P-9: The Inert Gases: Argon, Nitrogen and Helium
•
P-12: Safe Handling of Cryogenic Liquids
•
P-18: Standard for Bulk Inert Gas Systems
26. Compressed Air and Gas Institute (CAGI), www.cagi.org.
•
CAGI/PNEUROP PN2CPTC2, Acceptance Test Code for Electrically Driven Packaged Displacement Air
Compressors (Annex C to ISO 1217),
•
CAGI ADF 100, Refrigerated Compressed Air Dryers – Methods of Testing and Rating
28.	 Compendium of Methods for the Microbiological Examination of Foods, George American Public Health
Association, 4th Edition, Downes, F.P. and Ito, K. Eds.,15 April 2001.
•
Microbiological Monitoring of the Food Processing Environment, Chapter 3, pp. 25-36. M. Evancho, William
H. Sveum, Lloyd J. Moberg and Joseph F. Frank,
•
Measurement of water activity (aw), acidity and Brix. pp. 649-650. Scott, V. et al.,
29. Åkerlindh, K.; Vestermark, M.; Olsson, H.; Ernblad, A.; Birath, M.; Lindman, N.; Klang, Å; and Cypriansen, L.,
“Process Gases and Distribution Systems in Pharmaceutical Production,” Pharmaceutical Engineering, Jan/Feb
2008, Volume 28, Number 1, www.ispe.org/pe.
30. Hargroves, J., “Validation of Process Gas Systems,” Journal of Validation Technology, February 1998, Volume 4,
Number 2, www.gxpandjvt.com.
31.	 Petroleum hydrocarbon toxicity in vitro: Effect of n-alkanes, benzene and toluene on pulmonary alveolar
macrophages and lysosomal enzymes of the lung. S.A. Suleiman. 1987. Archives of Toxicology, 59:402-407.
32. Desiccation tolerance of prokaryotes, Malcolm Potts, Microbiological Reviews, 58(4):755-805, 1994.
33. Endospore-forming bacteria: an overview, p. 133-150, Sonenshein, 2000 – Sonenshein, Abraham. L. 2000, in
Prokaryotic Development, ASM Press Washington D.C., Yves. V. Brun and Lawrence. J. Shimkets (eds.)
34.	 Improving Compressed Air System Performance: A Sourcebook for Industry, United States Department of
Energy, www1.eere.energy.gov.
35.	 Copper Development Association, www.copper.org.
[PAGE 141]
Appendix 9
Glossary
[PAGE 142]
Appendix 9
Process Gases
18	 Appendix 9 – Glossary

### 18.1 Abbreviations and Acronyms

API
Active Pharmaceutical Ingredient
BMS
Building Management System
CAGI
Compressed Air and Gas Institute
CIP
Clean In Place
CoA
Certificate of Analysis
CoC
Certificate of Conformity
CPP
Critical Process Parameter
CQA
Critical Quality Attribute
E&I
Electrical and Instrumentation
EMA
European Medicines Agency
ETOP
Engineering Turnover Package
FAT
Factory Acceptance Testing
FDA
Food and Drug Administration
GCP
Good Clinical Practice
GDP
Good Distribution Practice
GEP
Good Engineering Practice
GLP
Good Laboratory Practice
GMP
Good Manufacturing Practice
GQP
Good Quality Practice
HDPE
High-Density Polyethylene
JP
Japanese Pharmacopoeia
LEL
Lower Explosive Limit
OSHA
Occupational Health and Safety Administration
P&ID
Process/Piping and Instrument Diagram
[PAGE 143]
Process Gases
Appendix 9
PDMA
Prescription Drug Marketing Act
PDP
Pressure Dewpoint
PhEur
European Pharmacopoeia
POU
Point Of Use
PQ
Performance Qualification
PRV
Pressure Reducing Valve
PTFE
Polytetrafluoroethylene
PVDF
Polyvinylidenefluoride
QMS
Quality Management System
RH
Relative Humidity
SIP
Sterilize In Place or Steaming In Place
SME
Subject Matter Expert
TVHC
Total Volatile Hydrocarbon
USP
United States Pharmacopeia

### 18.2 Definitions

Active Pharmaceutical Ingredient (API)
Any substance or mixture of substances intended to be used in the manufacture of a drug (medicinal) product and
that, when used in the production of a drug, becomes an active ingredient of the drug product. Such substances
are intended to furnish pharmacological activity or other direct effect in the diagnosis, cure, mitigation, treatment, or
prevention of disease, or to affect the structure and function of the body. (ICH Q7)
Blanketing
Blanketing is the term used to describe putting a layer of gas, typically nitrogen into the space in a vessel above the
product generally with the intention of preventing oxygen in the air contacting and degrading the product, though it
may also be used to maintain a low oxygen atmosphere to reduce risks of explosion.
Critical Aspects
Are typically functions, features, abilities, and performance characteristics necessary for the manufacturing process
and systems to ensure consistent product quality and patient safety. They should be identified and documented
based on scientific product and process understanding. (ASTM E2500-07)
[PAGE 144]
Appendix 9
Process Gases
Critical Process Parameter (CPP)
A process parameter whose variability has an impact on the critical quality attribute and therefore should be
monitored or controlled to ensure the process produces the desired quality. (ICH Q8 (R2) II 4.0)
Critical Quality Attribute (CQA)
A physical, chemical, biological, or microbiological property or characteristic that should be within an appropriate limit,
range, or distribution to ensure the desired product quality. CQAs are generally associated with the drug substance,
excipients, intermediates (in process materials) and drug product. (ICH Q8 (R2) II 2.2)
Dewpoint
The dewpoint is the temperature to which a given parcel of humid air must be cooled, at constant barometric
pressure, for water vapor to condense into water. The condensed water is called dew. The dewpoint is a saturation
temperature.
GxP Compliance
Meeting all applicable pharmaceutical and associated life-science regulatory requirements.
Subject Matter Expert (SME)
Those individuals with specific expertise in a particular area or field. SME responsibilities include planning and
defining verification strategies, defining acceptance criteria, selection of appropriate test methods, execution of
verification tests, and reviewing results. (ASTM E2500-07)
Supply Air
Conditioned air supplied mechanically to the space (room), measured here in cubic feet per minute (CFM). (Divide by
0.6 to get cubic meters per hour CMH.)
System Owner
The person ultimately responsible for the system performance. This person may be the head of the functional unit or
department using that system, or maintaining the system although the role should be based on specific knowledge
of the process rather than position in the organization. The system owner is responsible for ensuring that the system
and its operation is in compliance and fit for intended use with applicable Standard Operating Procedures (SOPs)
throughout its useful life. Responsibility for control of system access should be agreed between process and system
owner. In some cases, the process owner also may be the system owner.
Note: Ownership of the data held on a system should be defined and typically belongs to the system owner.
Process Gases
Process gases are defined as gases which can affect product quality.
Quality Management System (QMS)
Management system to direct and control an organization with regard to quality (e.g., ISO). (This is equivalent to
Quality System as defined in ICH Q9.)
[PAGE 145]
Process Gases
Appendix 9
Turnover Package (TOP)
A collection of pertinent design, construction, vendor, and operational documentation. This collection of
documentation is used for the qualification and process validation activity, as well as reference and single source
information for the life of any particular system, process, or piece of equipment.
Note: This term is often used interchangeably with Engineering Turnover Package (ETOP).
Non-Liquefied Gases
Non-liquefied gases are elements, or combination of elements, that have boiling points lower than -130°F (-90°C).
Examples of non-liquefied gases include:
•
nitrogen
•
oxygen
•
argon
When specific elements become liquefied at extremely low temperatures they are referred to as “cryogenic liquids.”
Liquefied Gases
Liquefied gases are those elements or compounds that become liquid in their containers at ambient temperatures
and at specified pressures from 25 psig (172 kPa) to 1500 psig (10,340 kPa). These gases, or compounds, have
boiling points very near to atmospheric temperatures, in the range of -130°F (-90°C) to 68°F (20°C).
Supercritical Fluid Extraction (SFE)
Supercritical Fluid Extraction (SFE) refers to a process in which a Supercritical Fluid (SF) is used as a solvent. At
critical temperatures and pressures, SFs possess the properties of both the liquid and gas, with density values similar
to those of liquids and flow properties similar to those of gases, and are thus labeled as fluids. The most widely used
SF gas is carbon dioxide (CO2).
[PAGE 146]
[PAGE 147]
[PAGE 148]
More and more lab managers rely on Airgas to deliver end-to-end gas management solutions
when installing new or updated laboratories.  Using comprehensive risk-based best practice
methods, we’ll help you make the right decisions so your lab performs at peak efficiency and
accuracy, and you keep your costs in line.
Only Airgas provides custom value-added solutions, including:
•  One source for all gases, equipment, cryogenics, MRO and safety supplies
•  Extensive  expertise in laboratory design, on-site gas and cryogenic
management, central gas supply, and customer service you can rely on each
and every day
•  Pure analytical gases and certified mixtures you can count on – NIST has chosen
our gases for the Standard Reference Materials (SRMs)
ENGINEERING
THE RIGHT GAS
MANAGEMENT
SOLUTIONS
Engineering the right solutions
for your lab
You’ll find it with us.
SM
Take the first step — ask us about a
FREE Power “Lunch and Learn” session.
We’ll demonstrate  how our expertise in
engineering the right solutions will pay
off for you!
Call the Airgas Engineering Solutions Team
TOLL-FREE 1-800-282-1524, Ext. 2.
...at a lower total cost