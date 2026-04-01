# ISPE Good Practice Guide: Controlled Temperature Chamber Mapping and Monitoring (2016): Controlled Temperature Chamber Mapping and Monitoring

[PAGE 2]
[PAGE 3]
Controlled Temperature
Chamber Mapping and
Monitoring
Disclaimer:
The ISPE Good Practice Guide on Controlled Temperature Chamber Mapping and Monitoring provides necessary
guidance in light of the growing number of products requiring controlled temperature shipping and storage. This
Guide is solely created and owned by ISPE. It is not a regulation, standard or regulatory guideline document. ISPE
cannot ensure and does not warrant that a system managed in accordance with this Guide will be acceptable to
regulatory authorities. Further, this Guide does not replace the need for hiring professional engineers or technicians.
Limitation of Liability
In no event shall ISPE or any of its affiliates, or the officers, directors, employees, members, or agents of each
of them, or the authors, be liable for any damages of any kind, including without limitation any special, incidental,
indirect, or consequential damages, whether or not advised of the possibility of such damages, and on any theory of
liability whatsoever, arising out of or in connection with the use of this information.
All rights reserved. No part of this document may be reproduced or copied in any form or by any means – graphic,
electronic, or mechanical, including photocopying, taping, or information storage and retrieval systems – without
written permission of ISPE.
All trademarks used are acknowledged.
ISBN 978-1-936379-86-6
GOOD PRACTICE GUIDE:
[PAGE 4]
Controlled Temperature Chamber Mapping and Monitoring
Preface
The ISPE Good Practice Guide on Controlled Temperature Chamber Mapping and Monitoring provides guidance on
the definition of the requirements (producing a user requirements document), design, purchasing, commissioning
(including temperature mapping), qualification and maintenance of controlled temperature chambers operating under
current Good Manufacturing Practices.
Types of Controlled Temperature Chambers considered by this guide range from purchased Commercial Off the
Shelf items, such as freezers and incubators, walk-in cold rooms and walk-in freezers, to custom built units, such as
warehouses.
This ISPE Good Practice Guide provides industry good practice for the temperature mapping of controlled
temperature chambers, development of test acceptance criteria and a risk based approach to practices for periodic
review of system performance.
[PAGE 5]
Controlled Temperature Chamber Mapping and Monitoring
Acknowledgements
The Guide was produced by a Task Team led by Nick Haycocks (Amgen Inc.).
Core Team
The following individuals took lead roles in the preparation of this Guide:
Luca Arrighi
Amec Foster Wheeler
Italy
Denise Bender
DBender Consulting, LLC
USA
Mike Bradley
Amgen Inc.
USA
Paul Daniel
Vaisala Inc.
USA
Geoffrey Glauser
Health & Human Services
USA
Paul Harber
Modality Solutions, LLC
USA
Randolph Leinhauser
Merck & Co., Inc.
USA
Elizabeth Martinez Flores, CPIP	 Terra Farma SA de CV
Mexico
Matthew McMenamin
GlaxoSmithKline
USA
Derek Moss
FUJIFILM Diosynth Biotechnologies
USA
Mark E. Newton
Eli Lilly & Co.
USA
Brian W. Saxton
Compliance Risk Management
USA
Jean Vezina
Salvus Inc.
Canada
Christopher B. Weaver
Elanco
USA
Mark Zemler
FUJIFILM Diosynth Biotechnologies
USA
Special Thanks
ISPE wish to thank Mary White and Dubhaltach Mac Lochlainn of the National Standards Authority of Ireland (NSAI)
who provided valuable discussion, advice, and review comments.
Particular thanks also go to Peter Diebold (Thermo Fisher Scientific) for his review and comment.
Many other individuals reviewed and provided comments during the preparation of this Guide; although they are too
numerous to list here, their input and patience in supporting this guide is greatly appreciated.
The Team also would like to express their gratitude to Gail Evans and Lynda Goldbach of ISPE for their patience,
guidance, and support during the development of this document.
Company affiliations are as of the final draft of the Guide.
Cover photo: courtesy of Vaisala Inc., www.vaisala.com
[PAGE 6]
600 N. Westshore Blvd., Suite 900, Tampa, Florida 33609 USA
Tel: +1-813-960-2105, Fax: +1-813-264-2816
www.ISPE.org
[PAGE 7]
Controlled Temperature Chamber Mapping and Monitoring
Table of Contents
Introduction.......................................................................................................................7
1.1
Purpose and Objectives...............................................................................................................................7
1.2
Scope...........................................................................................................................................................7
1.3
Benefits.........................................................................................................................................................8
1.4
Regulatory Guidance....................................................................................................................................8
1.5
Key Concepts/Key Terms.............................................................................................................................9
2	 Related Standards...........................................................................................................11
2.1
Standards................................................................................................................................................... 11
3	 User Requirements Specification................................................................................. 13
4	 Types of Controlled Temperature Chamber............................................................... 15
4.1
Freezers.....................................................................................................................................................15
4.2
Refrigerators...............................................................................................................................................16
4.3
Cold Rooms................................................................................................................................................16
4.4
Stability Chambers, Incubators/Incubator Shakers....................................................................................17
5	 Commissioning................................................................................................................19
5.1
Scope of the Commissioning......................................................................................................................19
5.2
The Commissioning Strategy.....................................................................................................................20
5.3
Commissioning Activities at the Design Phase...........................................................................................22
5.4
Commissioning Activities during the Installation Phase..............................................................................23
5.5
Handover, the System Manual, and Training..............................................................................................26
5.6
Safety.........................................................................................................................................................26
6	 Testing Strategy............................................................................................................. 27
6.1
Outcomes...................................................................................................................................................27
6.2
Risk Assessment........................................................................................................................................27
6.3
When to Perform Temperature Mapping....................................................................................................28
6.4
Factors Influencing the Mapping Strategy..................................................................................................29
7	 Qualification................................................................................................................... 35
7.1
Qualification Considerations.......................................................................................................................35
7.2
Qualification Science and Risk-Based Approach.......................................................................................36
8	 System Monitoring......................................................................................................... 37
8.1
Temperature Sensors.................................................................................................................................37
8.2
Number Required and Location of Monitoring Probes...............................................................................38
8.3
Considerations for Permanent Sensor Placement.....................................................................................39
8.4
Thermal Dampening Fluids for Temperature Monitoring Probes................................................................40
8.5
Determining Alarm Set Points and Alarm Delay Settings...........................................................................41
9	 Periodic Evaluation and Frequency of Thermal Mapping Studies......................... 43
9.1
Handling Excursion Documentation...........................................................................................................48
10	 Operational Issues.........................................................................................................49
10.1
Challenging the Area with Operational Activities........................................................................................49
10.2
Open Door Recovery Test..........................................................................................................................49
10.3
Power Outage/Thermal Degradation Test (recovery from power failure or power interruption)................. 49
[PAGE 8]
Controlled Temperature Chamber Mapping and Monitoring
11	 Packaged Transport Systems........................................................................................ 51
11.1
Active Shipping Containers: Unit Load Devices.........................................................................................51
11.2
Temperature Controlled Trailers.................................................................................................................54
11.3
Trailer Design.............................................................................................................................................54
11.4
Insulation Degradation................................................................................................................................55
11.5
Trailer Validation Approach.........................................................................................................................55
11.6
Trailer Loading Patterns.............................................................................................................................56
12	 Maintenance.................................................................................................................... 57
12.1
Cleaning of the Coils..................................................................................................................................57
12.2
Check the Condensate Pipework...............................................................................................................57
12.3
Functional Testing of the Unit Coolers/Defrost Elements...........................................................................57
12.4
Leak Testing...............................................................................................................................................57
12.5
Thermal Scanning......................................................................................................................................58
12.6
System Alarms............................................................................................................................................58
13	 Appendix 1 – Example User Requirements Specification.........................................61
13.1
URS Typical Content..................................................................................................................................61
13.2
Sample URS...............................................................................................................................................65
14	 Appendix 2 – Sample Document: Number and Location of Mapping Sensors.... 73
14.1
Introduction.................................................................................................................................................73
14.2
Approach....................................................................................................................................................73
14.3
Sensor Placement......................................................................................................................................74
14.4
Monitoring System Sensor Placement.......................................................................................................74
15	 Appendix 3 – Example Use of Measurement Uncertainty....................................... 77
16	 Appendix 4 – Sample Report Recommending the Location for Freezer.............. 83
16.1
Introduction.................................................................................................................................................83
16.2
Product Temperature..................................................................................................................................83
16.3
Discussion..................................................................................................................................................86
17	 Appendix 5 – Science and Risk-Based Development and
Use of the Risk Assessment......................................................................................... 87
17.1
Defining the Risk Assessment Process......................................................................................................87
17.2
Scoring the Risk Assessment.....................................................................................................................89
18	 Appendix 6 – Example Testing Strategies..................................................................91
18.1
Example 1: Mapping Strategy for a Walk-in Conditioned Space................................................................91
18.2
Example 2: Mapping Strategy for a Refrigerator........................................................................................93
18.3
Example 3: Warehouse Mapping Layout and Rationale............................................................................95
18.4
Example 4: Test Document/Protocol..........................................................................................................98
19	 Appendix 7 – Templates and Attachments................................................................ 99
19.1 Example Science and Risk-Based Approach for Periodic Review of a Controlled Temperate Chamber... 99
19.2
Example Job Hazard Analysis Worksheet................................................................................................103
20	Appendix 8 – References.............................................................................................107
21	 Appendix 9 – Glossary................................................................................................ 109
21.1
Acronyms and Abbreviations....................................................................................................................109
21.2
Definitions................................................................................................................................................. 110
[PAGE 9]
Controlled Temperature Chamber Mapping and Monitoring
Introduction
A Controlled Temperature Chamber is defined as a system, unit, equipment, or room in which the environmental
conditions (usually temperature) of a chamber are controlled/maintained/regulated to meet specific user
requirements.
The ISPE Good Practice Guide: Controlled Temperature Chamber Mapping and Monitoring expands on the ISPE
Concept Paper on Controlled Temperature Chamber Mapping [1] to include topics such as:
•
Commissioning
•
Testing strategies
•
Acceptance criteria
•
Qualification approaches
•
System monitoring
•
Operational issues
•
Periodic review

### 1.1 Purpose and Objectives

With the increasing complexity of global distribution for medicines requiring controlled temperatures and the
recently introduced regulations, the ISPE Good Practice Guide: Controlled Temperature Chamber Mapping and
Monitoring was developed by an industry team in order to provide guidance on good practices for the definition of the
requirements (producing a user requirements document), design, purchasing, commissioning (including temperature
mapping), qualification and maintenance of controlled temperature chambers, warehouses, and refrigerated storage
areas used to store raw material, work in progress, or finished product, and which operate under current Good
Manufacturing Practice. The approach described is consistent with that described in the ISPE Good Practice Guide:
Cold Chain Management [2].

### 1.2 Scope

This Guide provides guidance on Controlled Temperature Chambers operating under Current Good Manufacturing
Practices (CGMPs). Types of Controlled Temperature Chambers considered by this guide include purchased
“commercial off the shelf” items (such as freezers, refrigerators, and incubators), warm rooms designed to maintain
consistent temperatures, ovens, and custom built units, such as controlled room temperature environments, e.g.,
warehouses, walk-in cold rooms and freezers. This Guide does not include systems designed for heating/cooling
of material such as blast freezers, although some of the concepts described may be useful when commissioning/
qualifying these systems.
[PAGE 10]
Controlled Temperature Chamber Mapping and Monitoring

### 1.3 Benefits

There is an increased regulatory interest in cold chain driven by the growing number of products requiring controlled
temperature shipping and storage, the complexity of the distribution network for the products and governmental
requirements for distribution of vaccines.
This is reflected in the recent revisions to the related regulatory guidance (see Section 1.4). Utilizing this Guide
provides a number of benefits in an area where there is little authoritative guidance, including:
•
Provision of industry good practice for the temperature mapping of controlled temperature chambers, considering
the impact of load, and the use of the data to determine the location and number of monitoring sensors
•
Development of test acceptance criteria
•
A risk based approach to practices for periodic review of system performance

### 1.4 Regulatory Guidance

Regulatory guidance covering Controlled Temperature Chambers issued or updated at time of publication includes:
1.
Health Products Regulatory Authority (HPRA) (previously the IMB): Guide to Good Distribution Practice of
Medicinal Products for Human Use [3]
2.
Health Products Regulatory Authority (HPRA) (previously the IMB): Guide to Control and Monitoring of Storage
and Transportation Temperature Conditions for Medicinal Products and Active Substances [4]
3.
European Medicines Agency (EMA), Guidelines of 7 March 2013 on Good Distribution Practice of Medicinal
Products for Human Use [5]
4.
PIC/S Guide PE 011-1 to Good Distribution Practice for Medicinal Products [6]
Also see:
1.
European Commission, Guidelines of 5 November 2013 on Good Distribution Practice of Medicinal Products for
Human Use [7]
2.
Health Canada, Guidelines for Temperature Control of Drug Products during Storage and Transportation (GUI-
0069) [8]
3.
WHO Technical Report Series No. 961, Annex 9: Model Guidance for the Storage and Transport of Time- and
Temperature-Sensitive Pharmaceutical Products [9]
4.
MCA Part II, Chapter 6, Control and Monitoring of Storage and Transit Temperatures [10]
There is also guidance in the United States Pharmacopeia (USP):
5.
USP <659> Packaging and Storage Requirements [11]
[PAGE 11]
Controlled Temperature Chamber Mapping and Monitoring

### 1.5 Key Concepts/Key Terms

Commissioning
A well planned, documented, and managed engineering approach to the start-up and turnover of facilities, systems,
and equipment to the End-User, that results in a safe and functional environment that meets established design
requirements and stakeholder expectations [12].
Qualification
Activities undertaken to demonstrate that utilities and equipment are suitable for their intended use and perform
properly. (FDA)
Rounding of Temperature Values
This Guide follows USP <32> Section 7.20 Rounding Rules when considering temperature values:
“When rounding is required, consider only one digit in the decimal place to the right of the last place in the limit
expression. If this digit is smaller than 5, it is eliminated and the preceding digit is unchanged. If this digit is equal
to or greater than 5, it is eliminated and the preceding digit is increased by 1.” [13]
[PAGE 12]
[PAGE 13]
Controlled Temperature Chamber Mapping and Monitoring
2	 Related Standards
Regulatory guidance for Good Distribution Practice (GDP)1 is updated on a regular basis. There is normally a
requirement to demonstrate that product is being stored in the appropriate conditions. This can be accomplished
through the mapping that all storage locations used in the Controlled Temperature Chamber remain within the defined
conditions.

### 2.1 Standards

There are no Standards written specifically for Controlled Temperature Chambers as used in the Pharmaceutical and
Biotechnology industry. Available Standards are written for Environmental Test Chambers and Stability Chambers.
Although the same principles may be applied, the details of how the systems are to be used in an operational
environment should also be considered.
A list of the applicable Standards known at the time of publication is provided below for reference:
Japan
•
JTM K 01 Temperature and Humidity Chambers – Test and Indication Method for Performance [14]
•
JTM K 03 Environmental Temperature and Humidity Rooms – Test and Indication Method for Performance [15]
•
JTM K 05 High Temperature Chambers – Test and Indication Method for Performance [16]
France
•
FD X15-140 Measurement of Air Moisture – Climatic and Thermostatic Chambers – Characterization and
Verification [17]
Germany
•
DIN 12880 Electrical Laboratory Devices – Heating Ovens and Incubators [18]
Australia
•
AS 2853 Enclosures – Temperature Controlled Performance Testing and Grading [19]
IEC
•
IEC 60068 Environmental Testing Series [20]
Controlled Temperature Chambers used in the Pharmaceutical and Biotechnology industry are usually used for either
long term storage (stability) or for short term storage Work in Progress (WIP)/distribution warehousing storage.
1	 China (PRC) and South Korea use Good Supply Practice (GSP) rather than GDP.
[PAGE 14]
[PAGE 15]
Controlled Temperature Chamber Mapping and Monitoring
3	 User Requirements Specification
A User Requirements Specification (URS) is a document that defines the user’s functional requirements for
equipment or systems. By defining specific requirements in the URS, and not how those requirements are met, the
designer is given freedom to provide the optimum design solution to meet the requirements.
Aspects to be considered in relation to stored material include:
•
Unit capacity (i.e., quantity and nature of the material to be stored)
•
Whether the unit is providing cooling or heating (i.e., preconditioning) of the stored material, and if so:
-
What criteria have to be met, e.g., maximum load size, specific heat capacity supply, temperature, heating/
cooling time?
-
How long and how frequently is the door to load/unload the unit open?
-
Which environmental conditions are critical, e.g., light/temperature/humidity?
Qualification is intended to demonstrate through testing (verification) that the requirements specified in the URS
have been met. Confirmation that the user requirements have been met should be traceable in the qualification
documentation.
Appendix 1 provides discussion of typical content and an example of a URS for a cold room.
Note: information included in specifications or the purchase order general requirements (such as manuals, training,
spare parts) are not included in the URS to avoid duplication; the URS should be a simple concise definition of the
user requirements.
For a standard “catalogue” item, the URS may be developed in the form of the purchase order.
[PAGE 16]
[PAGE 17]
Controlled Temperature Chamber Mapping and Monitoring
4	 Types of Controlled Temperature Chamber

### 4.1 Freezers

Freezers are used for short to long term preservation of pharmaceutical and biopharmaceutical materials, e.g.:
•
Active Pharmaceutical Ingredients (APIs)
•
Process intermediates
•
Stability samples
•
Laboratory materials
•
Cell banks
Temperature uniformity is maintained within a qualified range to ensure product quality is preserved. Freezers with
set points ranging from -20°C to -80°C (-4°F to -112°F) are frequently used.
Operation can be controlled via a temperature controller that is used to maintain the locally configured temperature
set point and also provides a local alarm.
Manual defrost chambers are usually equipped with the general freezer refrigeration components of:
•
Compressor
•
Receiver
•
Condenser
•
Evaporator
•
Tubing
•
Insulation
•
Structural support
The refrigerant compressors are usually hermetically sealed for integrity. The evaporator is typically a tube and fin
design. The chamber control monitors interior temperature using a permanently installed thermocouple or Resistance
Temperature Detector (RTD) (referred to within this guide as the control probe). Typically, the control probe is
calibrated at the factory based on the temperature at the geometric center of the chamber. The evaporator is usually
located within the upper portion of the chamber interior and chamber temperature uniformity is obtained through
natural air circulation. There are several different designs available, as well as units cooled by a Stirling engine.
For units with an automatic defrost, the control actuates an automatic defrost cycle at a predetermined frequency
(typically 6 to 24 hours) to minimize ice accumulation. The evaporator defrost generally occurs by re-directing the hot
refrigerant gas into the evaporator coil for a short time to melt any ice/frost accumulation. Depending on manufacturer
and model, the defrost cycle is terminated by:
•
Elapsed time
[PAGE 18]
Controlled Temperature Chamber Mapping and Monitoring
•
Evaporator coil temperature set point
•
A combination of time and temperature
The frequency of defrost is adjustable to allow for the conditions of use (frequency of door openings, length of time for
door openings, and exterior air humidity level at time of door opening). The defrost cycle can usually be adjusted.
For GMP applications these systems should be monitored by an independent system. It can be difficult to calibrate
the system control sensor, and the use of an independent system allows routine calibration, and the flexibility to place
the sensor in a location that measures the “worst case” temperature.2 This system is used as the quality “system of
record” to provide the data used to demonstrate that materials are being stored at the specified conditions.
4.1.1 Conditioning/Blast Freezers
Facilities may process large quantities of bulk product that needs to be frozen from ambient conditions to a specified
temperate, e.g., -70°C (-94°F) prior to transfer into -70°C (-94°F) storage locations. Dedicated conditioning freezers
are needed to perform this function, as storage freezers are not capable of handling the large volume of product and
significant temperature disparity, without potentially compromising the temperature of the stored material. This type of
equipment is outside the scope of this guide.

#### 4.1.2 Liquid Nitrogen Freezers

Used for storage of material below -120°C (-184°F), e.g., cell banks. If materials are immersed into liquid nitrogen,
they eventually assume the temperature of the liquid (-196°C (-321°F)). Materials stored in the vapor above the liquid
become warmer as they are moved away from the liquid (up to -120°C (-184°F)). The temperature of the vapor can
be changed by varying the amount of liquid nitrogen in the chamber.

### 4.2 Refrigerators

Refrigerators are typically used to store material and vaccines within a qualified range of 2°C to 8°C (36°F to 46°F).
The capability of the equipment to achieve temperature uniformity should be considered when assigning the chamber
set point.
Operation is typically controlled via a temperature controller that is used to maintain the locally configured
temperature set point, and may also provide a local alarm. Refrigerators may be equipped with fans which cool via
forced air circulation and utilize a hermetically sealed compressor and refrigeration system. Alternatively, refrigerators
may use a heat exchanger located in the storage space, relying on convection to maintain an even temperature.
Refrigerators should have wire shelving to improve air circulation.
Refrigerators will usually automatically defrost the evaporator to maintain system performance. Evaporator
defrost occurs by re-directing the hot refrigerant gas into the evaporator coil for a short time to melt any ice/frost
accumulation.

### 4.3 Cold Rooms

Cold rooms are typically used for storage of material within a qualified range of 2°C to 8°C (36°F to 46°F). Cold
rooms should be equipped with a refrigeration compressor/condensing unit. The air-cooled condensing unit is usually
located outside, e.g., on the roof of the building. Cold rooms may be provided with redundant condensing systems,
each capable of handling the total system load.
2 That which is closest to the acceptable operating limits/the acceptance criteria.
[PAGE 19]
Controlled Temperature Chamber Mapping and Monitoring
Walk-in cold rooms may be prefabricated, metal-clad structures, furnished and installed as self-contained units.
These may include all essential refrigeration equipment, controls, air circulation, and other equipment necessary to
reach the specified environmental conditions.
Cold room control systems usually consist of a local Programmable Logic Controller (PLC) to monitor and control
the temperature within the cold room. Within the main chamber, the temperature may be measured by temperature
sensors placed in different locations. One sensor should be routed to the main controller for controlling interior
temperature. The second sensor should be connected to a monitoring system for temperature trending and alarm; for
larger units there may be multiple monitoring sensors.

### 4.4 Stability Chambers, Incubators/Incubator Shakers

Stability chambers are chambers that are designed to maintain a stable environment for incubating materials or
holding samples. These may include cultures for microorganisms or cell culture and hybridization in production or
Quality Control laboratories. The incubator may accommodate cell culture vessels from small tissue culture flasks to
roller bottles and small spinner flasks.
A local controller should control system operation for process parameters such as temperature, humidity, and CO2.
Incubator shakers can also control shaker speed (Revolutions Per Minute (RPM) of the drive).
[PAGE 20]
[PAGE 21]
Controlled Temperature Chamber Mapping and Monitoring
5	 Commissioning

### 5.1 Scope of the Commissioning

The commissioning process should be a well-planned, documented, and managed engineering approach to the start-
up and turnover of both the system and the equipment to the End User. Commissioning should result in a safe and
functional environment that meets established design requirements and stakeholder expectations (see also the ISPE
Baseline® Guide: Commissioning and Qualification [12]. The complexity of commissioning can vary, depending on the
type of system.
If a risk-based approach is being used, the commissioning documentation may be used to provide evidence of the
installation and operation. The commissioning documentation needs to be of an acceptable standard.
Typical expectations for the commissioning documentation are provided (see Section 6).
Units used for stability testing or laboratory storage are usually Standard “Catalogue” Systems.

#### 5.1.1 Standard “Catalogue” Systems

Standard “Catalogue” Systems are comprised of mechanical components assembled and/or produced by a
manufacturer for general industry applications. There is a limited standard menu of options with respect to hardware
and/or software. A manufacturer normally provides a standard operations manual that applies to the operation and
maintenance of the system. Standard “Catalogue” Systems are usually set to work following the manufacturer’s
instructions. Examples of Standard “Catalogue” Systems include freestanding freezers and refrigerators.
Commissioning is usually simpler for standard catalogue equipment, as the control system is an integrated part of the
standard catalogue system, with data on all the components contained within the supplier documentation. A typical
commissioning approach could follow the steps listed below:
•
Recording of system data
•
Verification of correct installation (installation verification)
•
Confirmation of satisfactory operation/temperature mapping (operational verification)
Note: the approach described assumes that the unit is to be used to store GMP material.
Generally, Standard “Catalogue” Systems have been set up in a factory by the manufacturer; typically, the scope of
work does not include mapping, this is usually added to the vendor’s requirements.

#### 5.1.2 Site (Custom) Built Systems

Site (Custom) Built Systems normally require additional verification to ensure that operation is as specified, usually
with more adjustment (set up and tuning) of the refrigeration and associated control systems, in order to ensure that
performance meets the user requirements and design specifications.
[PAGE 22]
Controlled Temperature Chamber Mapping and Monitoring

### 5.2 The Commissioning Strategy

#### 5.2.1 Execution Process

The testing strategy and the acceptance criteria should be documented in a Commissioning Plan prior to test
execution. The objective is to:
•
Show that the work will meet Owner and regulatory agency expectations
•
Provide clear and early definition of deliverables and handover requirements
•
Define roles and responsibilities
•
Define the Engineering Change Management System
•
Define the approach to be used for training of the maintenance department and End Users
•
Ensure consistency of approach and testing across the project
•
Ensure full transparency on progress metrics (test execution and productivity)
•
Scope the testing required
•
Provide review and approval of test method statements
•
Provide progress reporting
•
Provide reporting and handling of test discrepancies
•
Define the location and marking (identification) of mapping points
•
Define the acceptance criteria/expected results3
•
Witnessing requirements and notification procedures
•
Handling/retention of raw data
•
Format and content of the commissioning report (e.g., is a particular documentation practice required?)
•
Defined responsibilities for operating and maintaining a facility during commissioning, until it is handed over to
the End User
•
Identify who is responsible for maintaining the operating log for the system from start-up to handover
•
Define how is handover to be managed
The Commissioning Plan should also define how safety is considered. When executing the plan, Commissioning and
Qualification may be performed in two distinct phases, or the phases can be combined. For more information, see
Chapter 7 on Qualification.
3	 Note: acceptance criteria are “non-negotiable” test results, expected results may be acceptable across a broader range, or are results taken for
reference purposes.
[PAGE 23]
Controlled Temperature Chamber Mapping and Monitoring

#### 5.2.2 Roles and Coordination

The Commissioning Plan should contain a section which clearly states required roles and responsibilities. The roles
should be designated and authorized in the Commissioning Protocol. Typical roles and responsibilities of parties
involved include:
•
Commissioning Lead
•
System Owner
•
Commissioning Team Member
•
Engineering/Technical Services and Validation Group
Appropriate training for each role should be provided prior to participation in commissioning where necessary.
Commissioning Lead
Party responsible for coordinating and managing commissioning activities and allocating resources. The
Commissioning Lead takes ownership of the activity, writes and/or executes the activity, and is responsible for the
accuracy of the content.
System Owner
Party that reviews the content of the document, and by signing the Commissioning Plan and Test Report, agrees to
the content. The System Owner has decision making authority and is accountable for the compliance to the URS.
During the design phase, the System Owner should be in charge of design activities and, during construction, they
should determine acceptance of the “as built” system at mechanical completion.
The System Owner may be a representative of the project team, or the role may be delegated to a Subject Matter
Expert (SME).
Commissioning Team Member
Party involved in the activity (execution, documentation, and expertise). Commissioning Team Members may be
organization employees or contractors. The work can be divided into two categories:
•
Site activities: verification of completion of the systems presented by the construction team or manufacturer,
performance of job safety analysis, execution of protocols, compiling of protocols, submission of punch items,
and training of the maintenance team
•
Office activities: preparation of the commissioning test documents, updating of construction documents as red
marked during the commissioning phase, communication of executed protocols to the team, performance of
archiving
Engineering/Technical Services and Validation Group
Party copied on the official distribution list of the document, but not considered to take any action in relation to the
commissioning document; they may review as SMEs.
[PAGE 24]
Controlled Temperature Chamber Mapping and Monitoring

### 5.3 Commissioning Activities at the Design Phase

#### 5.3.1 The Design Review

From the commissioning perspective, the Design Review is intended for the commissioning team to become
familiar with the project and to verify that the design has adequate provision for the tests required, as defined in the
equipment specification and URS.
Requirements in the URS should be clarified with attendees. Key design documents should then be reviewed. Issues
relevant to continuous operation of the Chamber are critical aspects to consider and include:
•
Chamber loading scenarios
•
Loading and unloading of products
•
External/adjacent environmental conditions
Typical documents for verification include:
•
Layout a Heating, Ventilation, and Air Conditioning (HVAC) zoning lay out
•
Room environmental parameter schedule
•
Piping and Instrumentation Diagram (P&ID)
•
Functional specifications
During the Design Review phase, documents relevant to the areas surrounding the chamber and to the utilities
serving it (e.g., hot water, chilled/glycol water (heat transfer fluids), electricity) should be included in the review in
order to properly understand the interaction between the Controlled Temperature Chamber and the rest of the facility.
The Commissioning Team should define the list and sequence of at site activities and verifications needed, and
complete the Commissioning Plan.
A tailored approach is usually required as the sequence and activities are dependent upon the specific site conditions,
utilities available, operating conditions and type of Controlled Temperature Chamber.
In this phase or in the detail design phase, the Commissioning Team should be given opportunity to provide
suggestions to the designer, in order to obtain a design that will facilitate Commissioning Tests and activities.
Suggestions may include availability of access to regulation points, provision of testing points in an appropriate
location, or access ports to the room for installation of cabling, if required during temperature mapping.

#### 5.3.2 Design Risk Assessment

A risk assessment may be used to help critique and develop a robust design.
A Failure Mode Effects Analysis (FMEA) risk assessment can be used to identify possible failures that could lead to
the loss of the required performance and may be identified by review of design and vendor documentation.
Risks should be evaluated as to their probability and severity, in order to determine the impact to process variation
and effect.
Unacceptable risks should be mitigated following the preferred hierarchy of:
•
Elimination by design
[PAGE 25]
Controlled Temperature Chamber Mapping and Monitoring
•
Elimination by automated control
•
Elimination by procedural controls
The risk management requirements identified should be designated as critical and include all components, functions,
and features of the design that serve, collectively or singly, to control risks. These functions and features should be
tested during commissioning.

### 5.4 Commissioning Activities during the Installation Phase

Commissioning activities may be divided into four broad categories:
1.
Inspection of the physical installation (e.g., field verification of installation drawings) and documentation (test)
verification (e.g., pipework pressure and evacuation tests) to ensure compliance with design specifications
2.
Pre-operational safety checks
3.
Setting to Work, defined as setting a static system into motion or “shake down” and regulation and adjustment
4.
Functional testing: regulation, adjustment, and functional testing may be iterative activities within fine tuning of
the system

#### 5.4.1 Inspection of the Physical Installation

The Commissioning Team scope should include confirmation that:
•
The equipment and materials are checked to ensure compliance with design data sheet and specifications
•
Installation has been completed in accordance with the design specifications and manufacturer instructions
•
As-built documentation is available and correct
The approach to inspection of the physical installation may vary depending on the type of Controlled Temperature
Chamber. Usually, 100% of the installation is verified (packaged units (such as the compressor) would be considered
as a single system component).
It is usually a duty of the Commissioning Team to maintain a “red line”4 copy of the construction record documents.
Comments and changes should be marked on the document following a defined procedure, to be turned over to the
responsible party for updating the record documents to be provided to the System Owner.
Some of these activities may be performed at the vendor’s factory and documented within specific Factory
Acceptance Test (FAT) protocols/reports.
Completion of this stage should verify that the installation meets specifications.

#### 5.4.2 Pre-operational Safety Checks

This phase is intended to eliminate as many risks as possible in regard to the safety of personnel during the
commissioning and also during operation.
A section of the Commissioning Protocol (or site acceptance test) will describe and document appropriate procedures.
4	 These mark ups are traditionally done using a red pen, hence the term “red line”.
[PAGE 26]
Controlled Temperature Chamber Mapping and Monitoring
Procedures such as the “Lock Out/Tag Out” procedure can determine that utilities, e.g., chilled water/gas/steam and
electrical power, are provided to the system once the following are available and documented:
•
Conformity of electrical system included in the Controlled Temperature Chamber system and correct settings
e.g., overloads/fuse ratings
•
Evidence of pressure test of utilities lines
•
Presence of pressure/temperature safety release devices (with right set)

#### 5.4.3 Setting to Work

This is the initial startup and tuning of the system. This may include:
•
Energizing the system
•
Filling with fluids
•
Check motor drives – mechanically electrically (fuse/overload rating insulation) and direction of rotation checks
•
Internal Layout of the Chamber verification and as-built dimension measurements
•
Chamber and doors tightness verification
•
Input/Output (I/O) check of the control system
•
Alarms check
•
Calibration of the instruments
•
Balancing and fine tuning

#### 5.4.4 Functional Testing

Checks performed in previous phases should have been executed successfully as a prerequisite to functional tests.
The system should be tested to confirm that the design performance is achieved within the acceptance ranges
specified in all working modes.
Where feasible, the worst case5 conditions for the surrounding environment should be simulated during testing.
Alternatively, the conditions during testing for the surrounding environment should be recorded and the performance
of the system should be assessed to ensure that it meets expectations for those conditions. For example, external
conditions can impact the performance of a condenser or cooling tower; this data should be reviewed to ensure that it
aligns with the user requirements in relation to the temperature/humidity.
Where the area being tested has duty/standby conditioning units (systems), these should both be tested to ensure
that they will perform adequately.
Studies of trends of the transition phase between the stop of the main system and the full operation of the standby
system should be included in testing.
5 The most extreme conditions defined in the URS and which will provide the worst case challenge for the conditioning system.
[PAGE 27]
Controlled Temperature Chamber Mapping and Monitoring
The operation and influence of the surrounding environment on defrosting systems should be verified and
documented during the Commissioning and Qualification Phase.

#### 5.4.5 Engineering Change Management

It is a good practice to manage changes, in order to ensure that:
1.
During Design
•
Cumulative changes do not influence the ability of the design to meet the user requirements
•
User comments are addressed so that:
-
The user experience and knowledge of the equipment is considered during design development to
improve the operability, reliability, or efficiency of the design
-
Lessons learnt from previous equivalent systems are incorporated
-
Risks specific to the way the system will be used are mitigated to an acceptable level through the design
-
The user corporate and GMP requirements have been met.
2.
During Construction and Commissioning
Changes proposed during construction or commissioning should be agreed with by the engineer of record, clarifying
the design intent (through RFI’s or requests for information), and through change requests – from any interested
party who has noted issues with the proposed design, or can suggest an improvement. It is common practice for the
Construction Manager to have a system for managing both of these processes – this process is usually robust, as it
relates to cost and schedule.
From the client perspective it is important to:
•
Ensure that the as built record is correct
•
Changes are not agreed that would conflict with the “approved” status of the design.
Proposed changes should be identified and tracked to completion, including changes to system components, or
changes in functionality. During commissioning it is usual to experience test failures – or use iterative tests to obtain
the desired performance, e.g., when tuning a control loop.
There should be a clear definition of acceptable documentation practices, e.g.:
•
If a test fails and it can be repeated after making adjustments, then it is acceptable to annotate the test sheet with
the adjustments made and repeat the test; where changes are required an engineering change control should be
used to gain approval of the proposed changes prior to execution and repeating the tests.
An appropriate procedure to achieve this should be established with a tracking system. The process should consider
proposed changes:
•
Is the proposed change acceptable to the design authority?
•
Is the cost/impact on the schedule of implementing the change acceptable to the project?
•
Does the proposed change impact quality approval of the design for a qualified system?
[PAGE 28]
Controlled Temperature Chamber Mapping and Monitoring
•
Does implementing the change impact and documentation and or previous tests that have been completed?
Changes accepted by the project should be tracked to ensure implementation is completed with all of the supporting
changes to supporting documentation and test records. Modifications to designs should be approved by the design
authority/suitably qualified persons before they are implemented. The impact on the URS (if any) should be evaluated.
Once Qualification is complete, change should be managed through the site GMP change control system.

### 5.5 Handover, the System Manual, and Training

Handover usually represents turnover of the system to the user, with handover of operation and maintenance.
Commissioning and Qualification activities are usually completed. (The timing of handover may be defined differently
on a case-by-case basis according to specific contract stipulations).
There should be a documented record confirming that the functionality and operation of the system is considered
acceptable and Commissioning can be considered complete. This may be the Commissioning or Qualification
Summary Report, or a separate handover certificate, depending on site practices.
A punch list (snag list) is typically used to manage completion of the system to meet the specifications. Major items on
this list would prohibit handover, other items that can be resolved following handover are generally accepted. These
items should be included on an action list to facilitate tracking their completion after handover. Typical categories
used for a punch list include:
1.
Items that affect performance – to be addressed prior to handover
2.
Items that affect safe operation of the equipment – to be addressed prior to handover
3.
Items that block next activities/verifications – to be addressed prior to handover
4.
Minor items that do not impact operation – to be addressed after handover
5.
Desirable changes/improvements – to be addressed after handover through the change control system
Following handover, responsibility for operation and maintenance of the system should be transferred to End Users
and the maintenance team. Appropriate operation and maintenance procedures should be established.

### 5.6 Safety

A job safety analysis covering all the phases of commissioning should be prepared by the personnel who will execute
the site activities.
The analysis should describe the potential risks, their probability, and should identify protection devices.
Operators or technical personnel should be informed about the outcome of this analysis when receiving permission to
execute commissioning activities. Information about scheduled activities and related risks should be provided to other
personnel that may be in the area at the same time.
The job safety analysis should be reviewed by the personnel responsible for safety. An example job hazard analysis
template is provided in Appendix 7.
When judged appropriate, the testing area or room should have signs informing personnel of risks or forbidding access.
[PAGE 29]
Controlled Temperature Chamber Mapping and Monitoring
6	 Testing Strategy

### 6.1 Outcomes

Testing is intended to:
1.
Confirm that the space that will be used for storage remains within defined limits with respect to temperature
uniformity and stability over time across usable space
2.
Determine locations representing operating temperature extremes to establish the strategy for monitoring and
alarming the space used for storage and/or processing
The operational temperature limits should be defined, together with any allowable excursions (time periods,
acceptable limits).

### 6.2 Risk Assessment

Prior to developing the test strategy, evaluate potential sources of excursions taking into account the following factors.
(Note: a company may use Computational Fluid Dynamics (CFD) modeling to evaluate impact of these factors but
still needs some level of confirmation of the results through actual testing.)
1.
Purpose of the facility: storage, process cooling, transportation preconditioning
2.
Size: speed and magnitude of changes impacted by the footprint as well as the height with attention to potential
stratification with heights over 15 ft (457 cm)
3.
Layout/configuration: wall and obstructions, fixed racks, temporary racks, pallets on floors, duct supply and return
locations
4.
Location of facility: geographic with respect to external climate exposures, physical location within temperature
controlled facility, windows, doors, traffic and access frequency
5.
Operating characteristics of the HVAC system: defrost cycles, redundant systems, number of units supporting
storage space and how they interact with each other

#### 6.2.1 Risk-based Approach

With the advent of ASTM-E2500 “Standard Guide for Specification, Design, and Verification of Pharmaceutical and
Biopharmaceutical Manufacturing Systems and Equipment” [21] an organization may use a risk-based approach, with
the equipment installation and operation being verified. For further information, see:
1.
The ISPE Good Practice Guide: Cold Chain Management [2]
2.
The ISPE Guide: Science and Risk-Based Approach for the Delivery of Facilities, Systems and Equipment [22]
Also see Section 7.
There should be a clear definition of the acceptance criteria; typically, this is provided in the URS or equivalent
document.
Temperature mapping is used to confirm that the system is operating to meet specifications i.e., the temperature
range within the unit is acceptable.
[PAGE 30]
Controlled Temperature Chamber Mapping and Monitoring
It is a standard practice in the pharmaceutical industry to provide monitoring of critical parameters using an
independent system. Advantages of this practice include:
•
Calibration of the monitoring sensors can be carried out without impacting the system operation
•
The independent system becomes the quality “system of record”
•
The data can be used to provide continuous verification of acceptable system performance
Mapping results may be used to define the number and location of monitoring sensors for a warehouse, cold room, or
chamber.

### 6.3 When to Perform Temperature Mapping

Temperature mapping should start as early as possible during commissioning. This allows the early detection and
resolution of any performance issues. It also allows potential operational constraints to be identified and discussed
with End Users, to determine if the constraints are acceptable or require resolution.
Where there are systems that support operation of a system e.g., the warehouse, HVAC system, or a condenser
water cooling system, these systems should be identified and be commissioned or in a known (and monitored) state
prior to temperature mapping, to help ensure complete and representative testing, and facilitate investigation in the
event of performance problems. For example:
It can be acceptable to temperature map an area served by an HVAC system where a chilled water system which
supports HVAC system operation has not been fully balanced, if:
•
the chilled water system is known to provide an adequate supply of chilled water at a constant temperature
Note: the Building Management System (BMS)/Building Automation System (BAS) could be used to provide
supporting data that:
•
the chilled water supply temperature remains within the operating limits
•
the HVAC system cooling control valve does not open completely – indicating that an adequate supply of
chilled water has been available for the duration of the test [1]

#### 6.3.1 Prior to Temperature Mapping

Before temperature mapping commences, the commissioning plan/temperature mapping strategy should be
approved by the Quality Unit.
The level of detail, number of personnel, or number of suppliers involved in temperature mapping can vary depending
on the type of project. For example, commissioning of an air conditioned warehouse in a new facility can involve
several groups (e.g., construction manager, system installation contractors, commissioning contractors). For a
custom built refrigerated storage room purchased through a design/build qualify contract, the requirements and
responsibilities may lie with one company.
Temperature mapping equipment should be calibrated.
Documents which should be available from the supplier/construction company (as applicable), include:
•
Control System I/O list
[PAGE 31]
Controlled Temperature Chamber Mapping and Monitoring
•
Control System Drawings (e.g., control panel layout, wiring diagram)
•
Equipment and instrument lists
•
Materials receiving and inspection reports/material certifications
•
Equipment receipt and/or installation verification records
•
Cable tests (continuity, insulation)
•
Grounding (earth) tests
•
Motor insulation “megger” and direction of rotation tests
•
Fuse and breaker ratings/overload settings
•
Control loop wiring checks
•
Piping leak (hydrostatic) and evacuation tests
•
Pipework cleaning/flushing records
•
Record of cleaning for ductwork
•
Ductwork and Air Handling Unit (AHU) leakage tests
•
Operation and Maintenance manuals
•
As built drawings/specifications
The test requirements will depend on the type of system, and how critical performance is to the product and/or
business. Project specifications should define documentation and test requirements.

### 6.4 Factors Influencing the Mapping Strategy

•
Purpose: storage, processing, transportation, conditioning
•
Type of facility: general warehouse, Controlled Room Temperature (CRT) warehouse, cold storage, freezer,
refrigerator, incubator, stability chamber
•
Size of facility: span (air change rates and flow patterns), height (potential stratification)
•
Number of conditioning units controlling environment
•
Layout/configuration: open space versus walls, racks, obstructions; fixed racks with variable loads; duct supply/
return (hi/low, perpendicular to racks, distributed around obstacles); variable obstructions (moveable pallets,
racks leading to changes in air flow patterns)
•
Location: geographic with impact of external climate conditions; physical relationship within facility (surrounded
by conditioned space, windows, doors, exposed walls, high traffic areas, frequency and duration of access)
•
Contents of facility: motors, coils, lights, people; exothermic/endothermic reactive substances; hot material being
cooled within facility
[PAGE 32]
Controlled Temperature Chamber Mapping and Monitoring
•
Operating characteristics of HVAC system: defrost cycles, redundancies, interactions between system
components such as evaporators, Fan Coil Units (FCUs), Direct Expansion (refrigeration) coils (cycling, parallel,
series, consecutive); failure modes; hysteresis and time lags
•
Empty versus Full state: This Guide suggests that:
-
The potential impact of the load in the chamber should be addressed
-
Testing using a simulation of fully loaded conditions should be performed (Note: this may not require fully
loading the unit, see Section 9)
This means that testing with a partial load can be considered unnecessary, as the system has been tested at the
operating extremes.
Note: typically, chambers are tested empty.
•
When defining mapping locations:
-
The potential storage locations should be considered
-
Do not use the floor as a location for a fixed load, it needs to be possible to clean the area
-
Adequate space should be provided for cleaning for walk-in cold rooms, freezers, and warehouses, but a
mobile load may be stored in the space
•
Storage locations for standalone units should follow manufacturers’ recommendations to ensure adequate space
inside for air movement
•
Buffered probes may be used for monitoring if the performance relationship is known compared to the
characteristics of the stored product characteristics
•
Buffered probes should not be used as controlling probes; the buffer provides a response delay usually of a short
duration to allow for temperature upsets due to defrost, door openings, etc.
•
Buffered probes should not be used for mapping when the goal is to see the actual room temperatures
•
Type of probes: accuracy, reliability, ease of use and calibration (all impact measurement uncertainty which must
be incorporated in mapping and monitoring/alarming practices
•
Probe locations: number of probes, distance between probes, usable space, direct path of air stream, proximity
to coils (during cooling/defrost), doors, windows, heat sources (motors, lights, product being cooled)
•
Sample rate: at least once every 5 minutes; may need to be more frequent if spikes in temperature anticipated
due to cycling of defrost, cooling, access that cannot be tolerated by the material stored
•
Operational requirements: how long doors open, how many people, traffic patterns, equipment
•
Operation of an aspirating smoke detection system

#### 6.4.1 Selection of Mapping Equipment

Selection of the equipment to be used for mapping should consider the required accuracy and repeatability related to
the predefined acceptance criteria, e.g.:
[PAGE 33]
Controlled Temperature Chamber Mapping and Monitoring
A unit may have acceptance criteria of 2°C to 8°C (35.6°F to 46.4°F), (standard storage conditions per USP). If
the mapping system has an accuracy of ± 0.5 °C these provide results (allowing for rounding of the results) to
meet the acceptance criteria of 2°C to 8°C (35.6°F to 46.4°F).
The user requirements may have a tighter design specification, i.e., expected results of 3 to 7°C
Some low cost mapping dataloggers have accuracy specifications of ± 2°C. Use of these devices would not be
appropriate for this application unless the acceptance criteria or expected results were revised to allow for the
potential error.
Temperature sensors with a rapid response time are typically used for temperature mapping, to help to provide
accurate information on system performance:
•
If humidity has been defined as a critical quality attribute
•
If there are no significant sources of humidity in the warehouse, it may be assumed that absolute humidity will
equalize within the warehouse – use of a small number of sensors may be all that is required to provide the
required data – one at a low level and one at a high level (in case of stratification)
•
If there are significant sources of moisture, then the humidity could vary significantly within the conditioned
space, and a greater number of humidity mapping sensors will be required – the number and location can be
developed using similar concepts to those used for the temperature mapping
Where Relative Humidity (RH) is the criteria, the levels should be checked based on temperature variations using the
measured RH at the local temperature from the mapping sensors to determine the RH in the rest of the space. Using
duplex sensors (where available) can simplify the data analysis.
Mapping sensor locations should be documented, to allow a test to be repeated if necessary. The proposed load test
strategy should be reviewed and approved by the Quality Unit and the System Owner.

#### 6.4.2 Determining the Number and Locations for the Mapping Sensors

The diagram on the left of Figure 6.1shows the suggested minimum number of mapping sensor locations to be used
for a system with a chamber volume up to approximately 70 cubic feet (2 cubic meters).
The diagram on the right of Figure 6.1 shows the minimum number of mapping sensor locations suggested for a
system with a chamber volume of up to 700 cubic feet (20 cubic meters).

*[Figure 6.1: Example Sensor Locations]*

Note: the inner box represents the working area (where product is stored), the circles represent the sensor locations.
[PAGE 34]
Controlled Temperature Chamber Mapping and Monitoring
The sensor locations used for mapping should be defined based on:
•
Where product will be stored
•
The potential major influences on the internal conditions during use
•
The number and location of heating/cooling units
•
For units used for conditioning, the unit should have the capacity to condition components within the desired time
and temperature per the user requirements – sensors should be in the load
•
Defrost cycles should be considered when outlining test procedures. Defrost temperature ranges and alarms
should be defined according to user requirements or chamber profile
Table 6.1: Recommended Placement of Measuring Devices
Location
Rationale
Adjacent to temperature sensor used for
Controlled Temperature Chamber monitoring
Ensures that the Controlled Temperature Chambers monitoring
probe is correctly monitoring the set parameters
Storage rack corners including geometric
center of rack
Ensures that the furthest locations can maintain temperature
and that the distribution temperature is met and maintained
Storage locations adjacent to ingresses/
egresses (Door)
A potential area for temperature deviation
Storage locations near Air Supply and Return
Outlets
To monitor air temperature within proximity to air inlets and
outlets
Storage locations near Air Distributors (i.e.,
fans, blowers, etc.)
Ensures that the air distributors do not create temperature
excursions or dead air pockets that may impact component
temperature, or cold spots where they blow onto stored material
Shelving
Ensures that the type of shelving structure does not create dead
air pockets leading to temperature deviations
Storage locations adjacent to physical or
structural obstructions
Ensures that the structures within the Controlled Temperature
Chamber do not create dead air pockets leading to temperature
deviations
Height of component storage
Ensures that the intended height of component storage is
monitored at the maximum height of any potential material to be
stored
Storage locations adjacent to physical or
structural obstructions
Ensures that the light does not create warm spots, when turned
on that may impact component temperature
There should be a scientifically based rationale developed for the number and location of the sensors; however, there
are some basic requirements:
•
For a system with external walls (e.g., a warehouse) or where the system performance can be influenced by
external conditions (e.g., where the refrigeration system uses an air cooled condenser), data should be available
on the external conditions. This data may originate from another calibrated reference source e.g., the Building
Management System (BMS)/Building Automation System (BAS) (not the mapping system). This is to show the
relationship of the conditions at the time of testing with the design temperature range, allowing the designer to
evaluate the data.
[PAGE 35]
Controlled Temperature Chamber Mapping and Monitoring
•
For a conditioned room or Standard “Catalogue” System within a facility/room, there should be data on
the facility/room conditions at the time of testing outside the store, to ensure that any open door tests are
representative of normal operating conditions. The data could be provided by an independent calibrated system
or a sensor included in the mapping system.
•
Where appropriate there should be a mapping sensor adjacent to the system control sensor (this may not be
practical if the control is from a number of sensors that are being used to calculate an average temperature).
When defining the number of sensors and their locations, factors to consider include:
•
The mapping sensor locations should be increased as necessary to monitor areas where changes in the
conditions are likely to be found during use, e.g., conditions for product located near a conditioned air discharge.
•
Where there are multiple air conditioning units or HVAC outlets which operate consistently, the area treated by
each unit may be treated as a zone, with the mapping sensor layout developed to suit those zones.
•
An area may be laid out so that it can be divided into zones that will perform similarly e.g., there may be end
zones, and internal zones. Temperature mapping a representative zone may provide adequate data to represent
performance of the whole area.
•
Where appropriate, there should be a mapping sensor adjacent to the system control sensor. This allows
interpretation of the system performance compared to the temperature experienced by the control sensor
(Note: this may not always be practical, e.g., if the control signal is obtained from a number of sensors located
throughout the space that is being used to determine the unit average temperature)
A rationale that describes the location and number of sensors to be used should be developed. This should be
reviewed and approved by the Quality Unit and the area/System Owner.
Note: general guidance should not be used without a supporting rationale e.g., there should be a sensor every 4 m.
If the area being mapped has no factor that could cause a change in the temperature, multiple sensors to monitor the
same effects would be redundant.
[PAGE 36]
[PAGE 37]
Controlled Temperature Chamber Mapping and Monitoring
7	 Qualification
Systems considered to have the potential to impact product quality require Qualification. This will include systems
used to store GMP raw materials, intermediate, and finished product.
Where the temperature of individual gel packs used for shipping is verified before they are used (confirming
system performance/adequate pack conditioning time), the systems used for conditioning and storing them may be
categorized as engineering systems (i.e., commissioned systems).
The decision to Commission or Commission and Qualify is a judgment based on a comprehensive understanding
of the product, process, and the nature of the system by appropriately qualified personnel. See the ISPE Baseline®
Guide: Commissioning and Qualification [12].
The traditional approach used for Qualification uses separate protocols to provide documented evidence that
the installation (Installation Qualification (IQ)) and operation (Operational Qualification (OQ)) meets the user
requirements/system specifications after commissioning has been completed. IQ and OQ may be combined
into a single document and reference (leverage) the commissioning tests that demonstrate compliance with the
requirements.
Typically, a system Performance Qualification is not required, any operational testing required may be addressed in OQ.

### 7.1 Qualification Considerations

•
IQ should include a record of the major components, confirmation that calibration has been conducted as
required by the specifications, confirmation that the specified utilities have been correctly connected
•
OQ testing should provide evidence that the system temperature ranges meet the specifications during simulated
operations. Quality related alarms should be tested
•
Perform open door testing where applicable
•
Perform Power Loss Temperature Rise testing where applicable
•
Temperature mapping should be conducted on an empty chamber for no less than 24 hours
•
Temperature study shall be conducted on the specified load for no less than 24 hours
•
Mapping sensors should be located as defined in the test strategy document
•
The Protocol should include a diagram showing the mapping sensor placement
•
The level of liquid nitrogen or CO2 is maintained at its set-point (liquid N2 or CO2 freezers)
[PAGE 38]
Controlled Temperature Chamber Mapping and Monitoring

### 7.2 Qualification Science and Risk-Based Approach

There are many ways of applying a science and risk based approach to the qualification of a controlled temperature
chamber.
Examples are provided in Appendix 5. The concept is based on definition of a test strategy, and conducting testing
once, with “Qualification” confirming that there is documented evidence that the installation and operation meet the
specifications, typically through the engineering documents installation verification and operational verification can be
documented through the commissioning/ FAT/Site Acceptance Testing (SAT). For further information, see the ISPE
Baseline® Guide: Commissioning and Qualification [12].
[PAGE 39]
Controlled Temperature Chamber Mapping and Monitoring
8	 System Monitoring
It is considered a good practice to use an independent system to monitor the critical parameters. Calibration of
the monitoring probes can be performed without impacting system operation. The location of the probes can be
determined during mapping.
The system used will depend on the customer and may include:
•
Conventional chart recorders
•
Datalogging chart recorders
•
BMS/BAS systems
•
Supervisory Control and Data Acquisition (SCADA) systems

### 8.1 Temperature Sensors

There are three main types of temperature sensor:
1.
Thermocouples
2.
Resistance Temperature Detectors (RTDs) and thermistors
3.
Chemical

#### 8.1.1 Thermocouples

Thermocouples work due to the Seebeck effect – when a conductor is subjected to a temperature gradient, it will
generate a voltage. Measuring this voltage involves connecting another conductor to the “hot” end, the joint is usually
a weld between the two metals, often protected by a thin wall polytetrafluoroethylene (PTFE) sleeve. This additional
conductor will then also experience the temperature gradient and develop a voltage of its own which will oppose the
original. The magnitude of the effect depends on the metal in use and the extent of the temperature gradient. Using
a dissimilar metal to complete the circuit creates a circuit in which the two legs generate different voltages, leaving
a small difference in voltage available for measurement. The difference is typically between 1 and 70 µV per degree
Celsius (µV/°C) for standard metal combinations and varies according to the temperature difference.
The cables and joints can be prone to damage. During validation and commissioning, provision may be made in a
test protocol to prevent any effect on the validity of a test (1% is a figure commonly used) by the failure of a sensor
or a failure in the recalibrating of a sensor. Care should be taken to ensure that, if a sensor fails, and it is located in a
region where results may be unpredictable, it may be advisable to repeat a test run.
Thermocouple Accuracy
The accuracy of a thermocouple is affected by its type and the operating temperature. See Table 8.1 for the
maximum permitted error (in degree Celsius) for various common thermocouples that comply with the International
Electrotechnical Commission (IEC) Publication 584 [31].
[PAGE 40]
Controlled Temperature Chamber Mapping and Monitoring
Table 8.1: Maximum Permitted Errors (in Degree Celsius) for Thermocouples

#### 8.1.2 Resistance Temperature Detectors and Thermisters

Resistance Temperature Detectors (RTDs) and Thermisters are available to various grades and manufactured in
a variety of housings. The operating principle considers the change in resistance of the sensor as the temperature
changes. The change in resistance is measured by passing a small current through the device, measuring the voltage
drop using a Wheatstone bridge.
An RTD is constructed from metal with the resistance of the device increasing with the temperature. A thermister is
made using a ceramic material with the resistance decreasing as the temperature increases.
High quality sensors are considered reliable and accurate and may last more than eight years in accelerated life
tests, while maintaining the specified accuracy. Various wiring configurations are used to minimize the impact of the
cable between the instrument and the sensor, e.g., 3-wire or 4-wire configurations.
Accuracies
The accuracy of an RTD is defined by its class according to the International Electrotechnical Commission (IEC)
Publication 751 [32]; it is affected by the operating temperature:
A class A device will be within ± 0.15 degrees C at 0°C (± 0.27 degrees F at 32°F)
A class B device will be within ± 0.3 degrees C at 0°C (± 0.54 degrees F at 32°F)
There are no international standards for thermisters, but they typically are similar in accuracy to a class B RTD.

#### 8.1.3 Chemical

There are chemicals that change in color depending on the temperature. These indicators can be used to record
the minimum and maximum temperatures. These devices are not considered accurate and normally there is no time
record associated with temperature change.

### 8.2 Number Required and Location of Monitoring Probes

Monitoring sensors should be placed where stored product will experience the maximum and minimum temperatures
and, where applicable, more extreme humidity during normal Controlled Temperature Chamber operation. Those at-
risk (worst-case) locations should be identified during mapping of the Controlled Temperature Chamber.
Temperature °C
J Type
K Type
-200
-
3.0
-100
-
2.5
1.5
1.5
1.5
1.5
1.6
1.6
[PAGE 41]
Controlled Temperature Chamber Mapping and Monitoring

### 8.3 Considerations for Permanent Sensor Placement

Once mapping is complete, the test data should be reviewed to determine the number of permanent monitoring
sensors and where they should be located.
For small units (less than 2 cubic meters) it may be considered acceptable to use one monitoring sensor located in
the worst case location (typically the hottest location for a Controlled Temperature Chamber operating below room
temperature), as a single sensor will provide robust detection of any operational or performance issues.
For larger systems, or where there are multiple cooling systems, more sensors may be justified to ensure that an
adequate record is available for the positions where stored product will experience the maximum and minimum
temperatures (and/or maximum or minimum humidity, where applicable) during normal operation.
The optimum locations can be determined by reviewing the monitoring data considering periods or tests that
represent normal use, e.g.:
•
Operation in working hours
•
Operation outside working hours
•
Loading
•
Unloading
The mapping results and the data analysis can be interpreted and summarized in a report recommending the
optimum locations for approval by the Quality Unit and the area/System Owner.
Where testing has demonstrated that equipment failure can have a significant impact on local conditions (e.g., where
conditioning is provided by a number of independent HVAC units), the data can be used to recommend actions to be
taken in the case of such an event, e.g., putting a defined rack out of use.
It is considered normal to experience short term temperature excursions due to door opening or personnel and truck
movement. There are two approaches normally used to minimize nuisance alarms from these events:
•
Putting time delays into the alarm system so that an alarm is given only if the temperature has been outside the
alarm set point for more than a pre-defined time
•
Putting the sensor into a container of thermal fluid or equivalent (i.e., buffering).
Both of these approaches are intended to provide a simulation of the thermal response time experienced by the
stored product due to the packaging acting as an insulator, significantly damping out any short term temperature
excursion on the temperature of the stored product. Where this approach is used it should be documented, and
include a supporting rationale.
Considerations for placement of permanent sensors include:
•
The results of the mapping of the Controlled Temperature Chamber should determine the number of permanent
monitoring sensors and their locations
•
Risk-based worst-case storage locations
•
Coverage based upon single and/or dual temperature control unit placement
•
Volume of space to be controlled
[PAGE 42]
Controlled Temperature Chamber Mapping and Monitoring
•
Density of materials storage and potential obstructions
•
Loaded and empty space air circulation temperature results derived from OQ testing
•
Mass of materials that enter the Controlled Temperature Chamber vault at higher-than-operating temperatures
which add to the heat load of the space. This decreases the ability for the cooling units to bring those products
quickly to long-term storage temperature. This issue is inclusive of shipping gels which frequently arrive at
location at controlled room temperature and will add significantly to the heat load
•
Ability of the circulating fans or diffusers to adequately move cooling air
•
High and low storage locations where warmer air rises
•
Any independent heat sources in the Controlled Temperature Chamber such as supporting production
equipment, where applicable
•
Open door temperature or storage locations near Controlled Temperature Chamber ingresses and egresses
•
Frequency of personnel and lift truck ingress/egress operation during working hours
•
Operations outside working hours
•
Minimization of nuisance alarms
•
Air conditioning, or lack thereof, of the Controlled Temperature Chamber loading area where pre-conditioning of
the air can limit humidity and consequent frost on evaporator coils
•
Although there is no formula for the number of sensors in any particular Controlled Temperature Chamber, the
distribution must be satisfactory to evaluate the uniformity of temperature within the Controlled Temperature
Chamber. The risk areas, doors, airflow, volume load, total volume dimension (size), 3-dimensionality of the
space, internal and external heat sources, and obstructions should be taken into account
•
Sensor(s) should not interfere with normal product movement or storage or be subject to damage from those
movements
•
Sensor(s) should be positioned in multiple geometric planes to accurately convey the temperature of the
Controlled Temperature Chamber
•
The temperature control unit control sensor(s) should be placed in a position such that refrigerated systems
respond quickly and effectively to temperature changes in the Controlled Temperature Chamber
Data used to determine the number and location of the monitoring sensors may be interpreted in several ways. Two
example interpretations are provided in Appendices 2 and 3.

### 8.4 Thermal Dampening Fluids for Temperature Monitoring Probes

Monitoring probes may have alarm delay times or be placed in thermal dampening fluids to avoid nuisance alarms,
allowing for short term temperature variances due to operational activities such as loading and unloading chambers.
Air Probes: time delays should be justified as having no product impact. The justification should consider the
impact of the sample frequency of the monitoring system on the time delay set point. If a product has an acceptable
excursion limit of 30 minutes and the monitoring system has a sample rate of 15 minutes, then every alarm is
potentially an Out of Specification (OOS) situation.
[PAGE 43]
Controlled Temperature Chamber Mapping and Monitoring
Probes in Thermal Dampening Fluid: probes in dampening fluid allow for short term temperature variance. The
dampening fluid must simulate the storage of product in their primary containers. The dampening fluid should react to
Controlled Temperature Chamber temperature changes quicker than the primary container/packaging:
•
Justification for the use of Thermal Dampening Fluids should be documented
•
Justification should consider:
-
Container size and material of construction
-
Fluid selection (e.g., glycol, glycerin, ParathermTM)
-
Location of probe within the container
Note: probes should be specified to be suitable for immersion in liquid, with procedures to confirm the liquid level is
as specified, with the probe location in the liquid correct, e.g., centrally located in the container. If the fluid is likely to
evaporate, procedures should ensure that the liquid level is maintained.
•
Account for primary containers and secondary packaging:
-
The thermal dampening fluid should take into account the thermal mass of the product being stored
-
If a variety of containers with commensurate mass are to be stored in the same Controlled Temperature
Chamber, then a conservative approach should be taken when designing the probe medium and its own
container

### 8.5 Determining Alarm Set Points and Alarm Delay Settings

It is considered good practice to define the alarm strategy for the Controlled Temperature Chamber. A frequently used
approach is provided here as an example:

#### 8.5.1 Engineering Alarms

These are all the alarms generated from the temperature conditioning system and the associated control system.
These alarms include system fault, system high or low pressure, high or low temperature, and temperature sensor
fault (open or closed circuit). These alarms require an engineering action.
Temperature alarm set points are defined on the basis of the system “as commissioned” performance, typically set
just outside the three standard deviation range to avoid nuisance alarms, but ensure indication of potential problems
as early as possible.
Note: if the data from an operational period (at least 24 hours to encompass normal operations) is analyzed then the
mean and standard deviation can be calculated. For a normal distribution of data, 99.7% of the results lie within plus
or minus three standard deviations of the mean. Therefore, if these set points are used to define normal operating
alarms there will be a very small number of false alarms, but only a very small chance that a change in operational
performance remains undetected.

#### 8.5.2 Quality Alarms

These are the alarms from the independent monitoring system, usually configured based on the defined temperature
storage limits.
[PAGE 44]
Controlled Temperature Chamber Mapping and Monitoring
For example, a unit with the operational range 2°C to 8°C (36°F to 46°F) may have alarm set points of 3°C and 7°C
(37°F and 45°F) as alert limits, with action alarm set points of 2°C and 8°C (36°F and 46°F).
Note: this assumes that the calibration accuracy of the sensors is ± 0.5°C, allowing for the permissible rounding error
from the specified operational range.

#### 8.5.3 Alarm Delays

The open door test can be used to determine alarm delay settings. For a probe mounted in air then the delay time
allows for the air temperature to recover, avoiding nuisance alarms i.e., alarms that are not indicative of abnormal
system operation.
For probes mounted in a thermal fluid, the same concepts apply. However, the delay time, if obtained through the
thermal mass of the sensor “system”, takes time to respond to air temperature changes. These arrangements of
a sensor in a container of thermal fluid (used to avid risk of freezing or evaporation) are designed to represent the
“worst case” stored material. This is usually the smallest container in the minimum packaging stored in that Controlled
Temperature Chamber. Where this approach is used, there should be a document providing the rationale for the
system design.
Standard systems are often found with an alarm delay setting of 15 minutes. The rationale for this is as follows:
The units usually have a wide range of operational loads, but what is appropriate for one load may not be for
another.
The units, particularly the lower temperature units, take time to recover from being accessed, particularly if they
have very little in them i.e., no stored thermal mass. The systems require time to recover physically (the cold
air in the unit is denser than the surrounding ambient air, hence it will flow from the chamber, being replaced by
warmer ambient air, which will take time to cool to the operating temperature of the chamber. For warm units the
reverse effect can be observed)
Adopting a “standard” delay time will reduce the risk of setting an incorrect delay time that would exist if units
have individual settings, while still providing reliable indication if there are operational issues with the system,
either due to the conditioning system, or an operator inadvertently leaving the door open
The impact of the time to recover and the overall ability of these standard systems to maintain temperatures
within limits must be considered when determining the applicability of this type of unit for storage
[PAGE 45]
Controlled Temperature Chamber Mapping and Monitoring
9	 Periodic Evaluation and Frequency of
Thermal Mapping Studies
The Controlled Temperature Chambers should be periodically assessed to determine the need for re-validation (re-
mapping). The control systems, equipment, monitoring and procedures for Controlled Temperature Chambers should
be part of this periodic evaluation to ensure the unit still operates in a verified/qualified manner. The evaluation should
include, but is not necessarily limited to, a review of:
•
Changes made to the system
•
Changes made to the storage locations (i.e., rack/bin configuration)
•
Calibration history
•
Equipment use logs
•
Deviation investigations
•
Maintenance and repair history
•
Temperature mapping studies
•
Operational procedures
•
Existing verification/Qualification documentation
•
Ambient Temperature profiles
Data collected and summarized from Controlled Temperature Chambers equipped with multiple permanently installed
monitoring probes may be an acceptable substitute for requalification temperature mapping studies, provided the
probes have a demonstrated history of successful operation that includes calibration and maintenance.
It is recommended that a Risk Assessment be used to determine the frequency of periodic review and the need for
repeating the mapping of the Controlled Temperature Chamber. The frequency for assessing the need for repeating
thermal mapping of the Controlled Temperature Chamber should be aligned with a site’s Validation Master Plan and
be based upon various risk factors including but not limited to:
•
Local regulations/regulatory expectations for maintaining a validated state and periodically repeating the
validation studies
•
Regulatory inspection observations and/or internal audit observations
•
History of performance in maintaining the desired temperature range
•
Number of temperature deviations i.e., number of alerts, number of alarms
•
Number of Standard Operating Procedure (SOP) changes
•
Number of change controls to the area, to the temperature controlling system, to the temperature monitoring system
Note: that the impact of any changes to the system e.g., to the configuration of the building, doors, racking system,
de-stratification fans, etc. will be assessed through the change control system.
[PAGE 46]
Controlled Temperature Chamber Mapping and Monitoring
Mapping exercises should be repeated according to the results of a risk assessment exercise or whenever
significant modifications are made to the facility or the temperature controlling equipment. Mapping exercises should
demonstrate that there has been no degradation of temperature control. For example, facilities with a high risk of
failure to maintain uniform temperature (e.g., a refrigerated storage facility directly exposed to extreme temperature
fluctuations) versus a low risk of failure to maintain uniform temperature (e.g., ambient warehouse enclosed within
a facility controlled to moderate temperature fluctuations) would require more frequent mapping to identify areas of
potential insulation or other building construction degradation. Typical industry practice for remapping has been every
3 to 5 years, with critical product storage performed annually. The rationale for this frequency should be documented
for the facility and/or equipment.
The storage of high value products and/or temperature sensitive products may warrant more frequent re-verification/
re-qualification of the Controlled Temperature Chamber. Although protection of investment (e.g., financial
considerations) may be a primary driver, maintaining availability of product in the supply chain is also a critical quality
and customer focused consideration.
For re-verification/re-qualification, chamber mapping may be performed with a material-loaded unit, utilizing sensor
locations from the initial chamber mapping, if possible.
An alternative approach that may be considered for new systems is the provision of sufficient monitoring sensors to
consider the system to be continuously mapped.
If this approach is to be adopted, the number and location of the sensors needs to be determined based on the ability
to monitor the impact of the conditioning system performance, and the system construction.
The storage locations are defined, and any revisions are addressed through change control, allowing reassessment
of the number/location of the monitoring probes.
The current practices vary from organization to organization, typical approaches can be as follows:
•
Assessing the system performance on a periodic basis to ensure that it is operating as commissioned
This can be through review of performance data and the system maintenance history, or through a maintenance
routine that is specified to verify performance/check potential sources of problems. The method used will depend on
the type of system e.g.:
•
For a CRT storage area (warehouse with a conventional HVAC system):
-
The building envelope will be inspected to ensure that there is no visible degradation of the materials of
construction, or of seals/curtains that would impact ingress of unconditioned air
-
The system alarm history for the period since the last periodic maintenance (temperature monitoring system,
HVAC system temperature/humidity, and airflow volume sensors as applicable) will be reviewed to see if
there are any negative performance trends indicated, observations will be noted in the maintenance record
-
The HVAC system will be visually checked to ensure that the system balance remains as commissioned;
through verification that balancing dampers remain in their as commissioned/ marked settings
-
Heating/cooling coils are checked and cleaned if necessary
-
The control system records will be checked to confirm that control valves are not operating at 100%
(indicating that system performance limits are being reached or that there are utility system issues), unless
the control algorithms require that e.g. dehumidification
[PAGE 47]
Controlled Temperature Chamber Mapping and Monitoring
•
For walk-in refrigerators/freezers:
-
The system envelope will be inspected to ensure that there is no visible degradation of the materials of
construction, door or window seals, door curtains, or air leakage paths, as indicated by moisture or ice
buildup, or thermal image scan
-
The system alarm history (temperature monitoring system, refrigeration system, and general alarms) will
be reviewed for the period since the last periodic maintenance to see if there are any negative performance
trends indicated, observations will be noted in the maintenance record
-
The system will be checked to ensure that the refrigeration system set point is being maintained e.g.,
compressor suction pressure
-
The maintenance history will be checked to ensure that:
>
Coils have been cleaned, if needed and applicable
>
Fan operation has been checked
>
Operation of the unit cooler control valves and thermal expansion valves has been checked
>
Defrost settings and operation of the defrost system have been verified, if applicable
•
For standard standalone refrigerators and freezers:
-
The system envelope will be inspected to ensure that there is no degradation of the materials of
construction, door seals, or air leakage paths, as indicated by moisture or ice buildup
-
The system alarm history (temperature monitoring system, refrigeration system, and general alarms) will
be reviewed for the period since the last periodic maintenance to see if there are any negative performance
trends indicated, observations will be noted in the maintenance record
-
The system will be checked to ensure that the refrigeration system set point is being maintained e.g.,
compressor suction pressure
-
The maintenance history will be checked to ensure that:
>
Coils have been cleaned, if needed and applicable
>
Fan operation has been checked
>
Operation of the unit cooler control valves and thermal expansion valves has been checked
>
Defrost settings and operation of the defrost system have been verified, if applicable
System performance as commissioned/qualified can be evaluated against the current data from the monitoring
system to ensure that the system performance remains unchanged.
Controlled Temperature Chambers can be remapped on a periodic basis. For a walk-in unit this is typically done with
the unit in use. There may not be an available alternative storage location, with the mapping data evaluated against
the original commissioning or qualification mapping data.
A risk based approach may be developed to apply varying degrees of rigor depending on the material stored, and the
system operating ranges (units operating with a close temperature range can be considered higher risk than those
with a wider operating range).
[PAGE 48]
Controlled Temperature Chamber Mapping and Monitoring
Another option is now available: continuous performance verification.
The cost of installing and maintaining/calibrating temperature sensors has reduced with the advent of radio
transmitters. Similarly, the cost of requalification is a factor to consider. A strategy can be developed utilizing
additional sensors to provide reliable confirmation that a system is operating to meet specifications.
Three examples of an approach that may be used to provide this assurance are shown in Figures 9.1, 9.2, and 9.3.

*[Figure 9.1: Cold Room Layout Example Showing Mapping Sensor Locations and Location of Test Load]*

*[Figure 9.1 shows a plan of the unit with the sensor locations used for the mapping of the unit. The design is]*

symmetrical about a vertical axis, so load testing was carried out by placing a simulated load in the areas shown
inside the blue box marked “loaded area”.
The load included thermal mass, as the mass of the load may impact the load temperatures in locations adjacent to
the outside walls.

*[Figure 9.2 shows the locations proposed for a monitoring system to provide continuous verification that the system]*

is performing to meet the specifications, to be confirmed from the initial mapping. Note that the impact of reduced
performance from a unit cooler or significant degradation of the cold room structure would be detected by the sensors
in the locations shown.
[PAGE 49]
Controlled Temperature Chamber Mapping and Monitoring

*[Figure 9.2: Proposed Sensor Locations to Provide Continuous Evidence of System Operation to Meet]*

Requirements

*[Figure 9.3: Cold Room Layout Example Showing Mapping Sensor Locations and Location of Test Load]*

*[Figure 9.3 shows a plan of the unit with the sensor locations used for the mapping of the unit. Load testing was]*

carried out by placing a simulated load in the areas shown inside the blue box marked “loaded area”.
[PAGE 50]
Controlled Temperature Chamber Mapping and Monitoring
The load did not include thermal mass, as the mass of the load may not impact the temperatures adjacent to the
outside walls, but an empty box with external dimensions matching the size of the largest stored volume will be used
to provide a “worst case” disruption of airflow.

*[Figure 9.4 shows the locations proposed for a monitoring system to provide continuous verification that the system]*

is performing to meet the specifications, to be confirmed from the initial mapping. Note that the impact of reduced
performance from a unit cooler or significant degradation of the cold room structure would be detected by the sensors
in the locations shown.

*[Figure 9.4: Proposed Sensor Locations to Provide Continuous Evidence of System Operation to Meet]*

Requirements

### 9.1 Handling Excursion Documentation

A point person or department should be formally identified to coordinate the response to temperature excursions
outside the specified limits.
[PAGE 51]
Controlled Temperature Chamber Mapping and Monitoring
10	 Operational Issues

### 10.1 Challenging the Area with Operational Activities

The area being mapped should be challenged with specific known operational activities during the thermal mapping
process. These activities should simulate normal processes and functions that would occur for routine operations,
such as opening interior doors, opening exterior doors (Receiving Dock Doors, Shipping Dock Doors) running of
equipment (e.g., thermo-formers, stretch wrappers, forklifts, conveyors) etc. where there is a potential impact to the
conditions. By performing these functions and operating equipment during the execution of the mapping studies,
cause and effect relationships can be identified for the thermal profile.

### 10.2 Open Door Recovery Test

An example of a typical operational activity is to examine recovery time for the internal chamber temperature after
opening the access door and simulating loading/unloading. It is recommended to determine the time that the chamber
door may remain fully open before the monitoring sensors are no longer within the acceptable range. This test can
also help to determine how quickly the monitoring sensor recovers and returns to the normal operating temperature
range. For an open door recovery test for a new Controlled Temperature Chamber, it is recommended to:
•
Use a minimum (simulated) load or no load in the storage unit (i.e., no thermal mass stored so the worst case)
•
Locate temperature sensors as recommended for thermal mapping (with special attention to the sensors located
in proximity to the storage locations nearest the door being tested)
It is recommended to set the data acquisition rate to 1 minute intervals on the mapping system for this test, because
of uncertainty in the time that the test may take.
Generally, there are no specific acceptance criteria for this test unless a recovery time is specified in the unit
manufacturer’s specifications.
It is recommended that the Open Door Recovery Test is performed as an integral part of the mapping study to enable
acquisition of the mapping data showing the potential impact of the loading/unloading activities.
Note: for larger walk-in Controlled Temperature Chambers fitted with vinyl curtains, the units may be able to maintain
the internal conditions (temperatures) indefinitely, as the impact of passing through the curtains is short term and has
a negligible impact on the temperature. Vinyl curtains should be well-fitted, rest on the unit walls, and sit just clear of
the floor.

### 10.3 Power Outage/Thermal Degradation Test (recovery from power failure or power

interruption)
Another type of test that may be helpful from a business continuity, disaster recovery, and operational perspective
is a simulated Power Outage Test. This type of test would measure the amount of time the Controlled Temperature
Chamber remained within the desired temperature range once electrical power was turned off.
Note: although it is expected the Controlled Temperature Chamber will have redundant and backup power supplies,
the results from this test would provide data to define how quickly materials need to be moved to another location if
the backup power systems failed. Doors to the storage chamber should remain closed during this test.
[PAGE 52]
Controlled Temperature Chamber Mapping and Monitoring
For a power outage/thermal degradation (and subsequent recovery) test for a Controlled Temperature Chamber, it is
recommended to:
•
Use a minimum (simulated) load or with no load in the Controlled Temperature Chamber. This is another test that
is recommended as commissioning activity referenced in OQ before the storage unit is put into use, if possible.
Proofer question: should this instead be Controlled Temperature Chamber?
•
Locate temperature sensors as recommended for thermal mapping
It is recommended to set the data acquisition rate to 1 minute intervals for this test, because of uncertainty in the time
that the test may take.
Generally, there are no specific acceptance criteria for this test unless a recovery time is specified in the unit’s
manufacturer’s specifications.
In addition, once power is restored to the Controlled Temperature Chamber, the amount of time required to have the
area return to the appropriate required temperature can be of value for operational considerations for recovery from
a disaster, or after a maintenance activity (i.e., elapsed time for recovery of temperature sensor(s) from the time from
when power is restored until the last temperature sensor(s) return to acceptable range).
Note: this test was previously included in the USP, but has subsequently been removed.
Calibration and Calibration Strategies
There are benefits to be derived from a considered calibration strategy:
•
Many of the instruments on the refrigeration system can only be calibrated when the system is emptied for major
maintenance: therefore, they are calibrated following the manufactures recommendations
•
The control sensor can be verified at a single point, as the control functions are usually based on whether the
system is above or below the operating set point
•
The monitoring sensors should be calibrated across the operating range, as they provide the data to support the
quality determinations in support of product quality
Access Control
Areas where product is stored should have a system to prevent unauthorized access. This system can be part of a
site keycard system, or use a lock and key with procedural controls which identify who holds, and is entitled to use,
the key.
Dehumidification
Dehumidification should be considered for a cold room or freezer. The life of the equipment can be extended where
there are fewer defrost cycles required (reduced expansion/contraction). Dehumidification can also reduce the risk
of ice forming on a freezer floor, which presents a safety hazard. For large distribution facilities it may be worth
considering the layout, and providing access to a walk-in freezer through a cold room, in order to reduce moisture in
the freezer.
Equipment Durability
When specifying a new facility, it is worthwhile defining the system design life i.e., the expected operating lifespan
without significant maintenance. High quality refrigeration systems can have an expected life of 12 to 15 years.
Standby systems are usually installed for an installation holding material of a significant commercial value.
[PAGE 53]
Controlled Temperature Chamber Mapping and Monitoring
11	 Packaged Transport Systems

### 11.1 Active Shipping Containers: Unit Load Devices

Currently there are two types of Unit Load Devices (ULD) systems suitable for the shipping of temperature sensitive
product, designed for use in aircraft. They are powered to either cool or heat the air within the container. A general system
description of two systems which are commercially available at the time of publication is provided below for reference.

#### 11.1.1 System 1 Description

The Temperature Controlled Cargo Unit (TCCU) is designed for air and ground transport of temperature sensitive
pharmaceutical products at 5°C (41°F) (The TCCU is designed to maintain the 5°C (41°F) storage temperature in
transport mode for 72 hours when the ambient temperature is 30°C (86°F)). The TCCU is also designed to maintain
5°C (41°F) during brief ambient temperature excursion events ranging from -40°C (-40ºF) to +60°C (+140°F).
For air transport, the TCCU is secured to a ULD that meets the requirements of TSO-C90c [23], allowing for use of a
fork lift truck for relocating the system, but not a pallet jack.
The interior storage space is designed for the foot print of a 40 in × 48 in (102 cm × 122 cm) pallet containing 1100 lb
(500 Kg) of product.
Interior dimensions of the storage space are 46 in high × 44 in wide × 51.5 in deep (117 cm high × 112 cm wide × 131
cm deep). Access to the storage space is through a hinged door on the front of the TCCU.
The exterior dimensions of the TCCU are 58.5 in high × 80.0 in wide × 52.5 in deep (149 cm high × 203 cm wide ×
133 cm deep).

##### 11.1.1.1 Description of System 1 Controls

Cooling of the storage space is accomplished by fans circulating air over a “cold” plate. When the ambient
temperature drops below the storage temperature, the fans circulate air across a “warm” plate. The fans are
controlled by electronics that monitor the temperature of the storage space. The electronics includes a status panel to
communicate the condition of the TCCU to the End User. A data logger monitors and records the temperature in the
storage space. The TCCU includes a Global Positioning System (GPS)/Global System for Mobile (GSM) module that
is used to transmit the TCCU’s location, the temperature in the storage area, and the charge status of the cold plate,
the warm plate, and the 24 Volts of Direct Current (VDC) battery.
The TCCU has two modes of operation: the “recharge mode” and the “transport mode”.
In the recharge mode, the TCCU is connected to an Alternating Current (AC) power source between 100-240V, 50 or
60Hz. A refrigeration system cools the cold plate, and a heater in the warm plate recharges the warm plate. The 24V
Direct Current (DC) battery is also recharged while the TCCU is connected to AC power. The status panel indicates
when the cold plate, the warm plate and the battery have been charged to full capacity.
In transport mode, the cargo is loaded into the TCCU and AC power is disconnected. The TCCU is in transport mode
any time the AC power is disconnected from the unit. The 24VDC battery supplies power to the fans to circulate air
across the “cold” plate or the “warm” plate to maintain 5°C (41°F) in the storage space. The electronic controls and
status panel are also powered by the 24VDC battery during transport mode.
The control system indicators are described below:
•
Power indicator: Illuminates when power is applied to the TCCU; when the battery switch/breaker is in the “on”
position or when the TCCU is connected to AC power and the AC switch/breaker is in the “on” position
[PAGE 54]
Controlled Temperature Chamber Mapping and Monitoring
•
Battery Charge indicator: applicable only in recharge mode; flashes while the battery is charging; continuously on
when the battery is charged
•
Battery Charge Low indicator: turns on for 2 seconds when switching to transport mode; flashes when the battery
is low on charge when in transport mode; continuously on when on AC power and battery switch/circuit breaker
is off
•
Warm/Cool Plate Charge indicator: applicable only in recharge mode; flashes while the warm and cool plates are
charging; continuously on when both the warm and cool plates are charged
•
Warm/Cool Plate Low indicator: applicable only in transport mode; turns on for 2 seconds when switching to
transport mode; flashes when the TCCU is low on warming or cooling capacity
•
Warming indicator: illuminates when the warming fans are on
•
Cooling indicator: illuminates when the cooling fans are on
The system is fitted with a data logger, and GSM module, that allows data on the system status, alarm status, and
location to be transmitted.

#### 11.1.2 System 2 Description

This Temperature Controlled Container is designed for air and ground transport of temperature sensitive
pharmaceutical products in the refrigerated or controlled room temperature ranges. The unit is designed to maintain
the 5°C (41°F) storage temperature in transport mode for 30 hours when the ambient temperature is between -10°C
(14°F) and 30°C (86°F). (Note: the unit is designed to be loaded with product at the storage temperature, it is not
intended to warm or cool the load). The unit will also maintain 5°C (41°F) during brief ambient temperature excursion
events ranging from -20°C to +40°C (-4°F to -40ºF).
The interior storage space is designed for a US 40 in × 48 in (102 cm × 122 cm) or EURO 47.3 in × 31.5 in (120 cm ×
80 cm) by pallet containing up to 2100 lb (953 Kg) of product.
Interior dimensions of the storage space are 51.7 in high × 51.9 in wide × 52.7 in deep (131 cm high × 132 cm wide ×
134 cm deep). Access to the storage space is through a hinged door on the front of the unit.
The exterior dimensions are 63.8 in high × 78.7 in wide × 60.4 in deep (162 cm high × 200 cm wide × 153 cm deep).

##### 11.1.2.1 Description of System 2 Controls

Cooling of the storage space is accomplished by an air circulation system that passes the air over two electrical
heaters and an evaporator, powered by three cooling compressors. The air return temperature is monitored to control
the supply air temperature.
The control has four incremental steps for cooling, and two for heating.
The unit uses two rechargeable Nickel-Metal Hydride (NiMH) batteries for powering the heating and cooling unit of
the container. When the heating and cooling unit is not being used, the batteries are only used to power the control
unit. When the container is plugged in for charging, the heating and cooling unit uses external power instead of
battery power.
The control system indicators are:
•
System on indicator: green Light Emitting Diode (LED)
[PAGE 55]
Controlled Temperature Chamber Mapping and Monitoring
•
Charge indicator: blue LED (flashes during charging; fixed when the unit is fully charged)
•
Alarm indicator: red LED
•
Alert indicator: yellow LED
•
Display: showing battery charge level, unit set point and operating temperature/alarm messages
Alerts are:
•
Batteries at 30% charge level
•
Inside temperature outside specification
•
Ambient temperature outside specification
•
Compressor “x” out of order or compressor “x” not starting
Alarms are:
•
Failure of a refrigeration system

#### 11.1.3 Approaches for the Use of an Active Shipping Container

There are two possible approaches:
•
Unit Qualification
•
Supplier Assessment

##### 11.1.3.1 Unit Qualification

It is possible to map each individual unit, to confirm its satisfactory operation and to qualify the service supplier
to ensure that their maintenance and calibration quality systems are robust, as this type of equipment is usually
provided by a service supplier. The pharmaceutical or biopharmaceutical organization should specify use of the
mapped units.

##### 11.1.3.2 Supplier Assessment

1.
Qualification of the manufacturer of the units: the design and factory testing should be reviewed to ensure that it
is robust
2.
Qualification of the service supplier: the maintenance and calibration quality systems of service suppliers should
be reviewed in order to ensure that they are robust
The second approach can provide a more flexible system. Usually the pharmaceutical or biopharmaceutical
organization will include a temperature logger with the shipment, to provide independent assurance that the specified
conditions were maintained during shipping.
Regardless of the approach, the method for loading and unloading the unit should be qualified and procedurally
defined. Usually the unit arrives on site at temperature, the End User should confirm that the TCCU is visually clean,
and load the unit. Loading may take place in CRT or cooled conditions.
[PAGE 56]
Controlled Temperature Chamber Mapping and Monitoring
When the unit is unloaded the shipment should be placed into quarantine until the information from the data logger
is checked to confirm that the shipment was within the defined limits for the duration of the shipment. If the shipment
was not within the defined limits for the duration of the shipment, a Non-Conformance should be raised and the
implications of the out of conditions incident should be investigated.

### 11.2 Temperature Controlled Trailers

Temperature controlled over-the-road trailers can be used to move significant amounts of temperature sensitive
pharmaceutical product. An approach offered in North America and Europe that takes into account the fact that trucks
in most jurisdictions are manufactured to specifications that allow the End Users of these trucks to leverage accepted,
voluntary industry standards and focus on the Critical Process Parameters (CPPs) that affect the operational
performance of every load carried.
Trailers have a different set of environmental and usage profiles when compared to in situ custom-built Controlled
Temperature Chambers which are owned and controlled by each pharmaceutical or biopharmaceutical organization
e.g.:
•
Loading and unloading operations
•
Defrost cycles
•
Loading patterns
Moisture, as a degradation element, is much more prevalent in trailers due to the operational profile i.e., continuous
running for a several days, followed by periods of downtime when the trailer is empty. Rigorous inspection of each
trailer should be performed prior to loading to account for potential damage by moisture along with potential damage
to the sidewalls by forklifts. An approach that takes these differences into account while leveraging the construction
standards is presented in this Section of this Guide.
These considerations apply to trailers used for long distance transport, as well as those used for local delivery
purposes.
Distribution of temperature sensitive pharmaceutical or biopharmaceutical product via a temperature controlled trailer
is a unit operation that requires Qualification. The mapping of every trailer is not considered a substitute for adopting
a defined methodology that identifies suitable equipment and applies a control strategy to the day-to-day operations
in order to maintain suitable temperature ranges for pharmaceuticals.
Intermodal containers have unique usage patterns, including power interruptions, during loading and unloading
operations from the ship. These represent additional considerations to what is presented here and should be included
in the qualification of ISO containers.
Manufacturers who build temperature controlled vehicles for the food and pharmaceutical/biopharmaceutical
industry adhere to voluntary standards that allow the End User to take a “family” approach (i.e., several units of the
same make and model) to performance qualification. The focus of activities should be on the key operational and
maintenance elements. This can help to establish a high confidence for this distribution unit operation.

### 11.3 Trailer Design

Trailers are designed to maintain product temperature. Product loaded into the trailer should be equilibrated to the
appropriate temperature before loading. During transit, as heat or cold penetrates the walls, roof, and floor of the
trailer, circulating airflows capture the environmental heat or cold. This environmental heat or cold is then conditioned
to the desired temperature in the HVAC unit on the front of the trailer.
[PAGE 57]
Controlled Temperature Chamber Mapping and Monitoring
Note: fresh fruits and vegetables produce heat from respiration; this adds load and an allowance for normal
degradation of the insulation is a design consideration factored into the sizing of the HVAC unit. Pharmaceutical and
biopharmaceutical products do not give off respiration heat; therefore, the HVAC units have additional reserve cooling
capacity when the trailers are used for hauling these products.
Depending on the geographical area, manufactures build and test trailers to meet the standards of one of two
organizations:
1.
In North America, the governing body is the American Trucking Association (ATA) Technology & Maintenance
Council (TMC)
2.
In Europe the standards are part of the Agreement on the International Carriage of Perishable Foodstuffs and on
the Special Equipment to be Used for such Carriage (ATP)
The TMC specifies four general temperature ranges for perishable goods. These ranges coincide with the general
storage ranges of many pharmaceutical drug products. The ATP recognizes three temperature ranges. Both the TMC
and the ATP evaluate the insulation and HVAC unit in order to certify a unit.
In North America, manufacturers can voluntarily certify the capability to one of the performance criteria shown in Table
11.1. Most trailers sold in North America are built to correspond to the F classification.
A stamped metal plate providing details of the certification of these trailers should be requested when the order is
placed with the trailer manufacturer. Trailer manufactures may issue a plate with the certification post-manufacturing
if the vehicle identification number is provided. A quality agreement with the carrier should confirm that the trailer,
delivered as new, was either F or DF rated, regardless of the presence or absence of a stamped metal plate.
Table 11.1: TMC and ATP Trailer Classification Categories

### 11.4 Insulation Degradation

The trailer floor, roof, walls, and doors are insulated with polyurethane. Polyurethane is a general term used to refer
to a family of two part plastics. A blowing agent i.e., CO2 with other gases, provides the foamed characteristic of
the material along with a very high insulation value. Over time the blowing agent gas migrates out of the substrate
and it is replaced with air and water vapor. This transition occurs slowly over a period of years and is normal. The
temperature control unit is sized accordingly to assure a useful life of 15 years with timely maintenance to protect the
core insulation of the trailer.

### 11.5 Trailer Validation Approach

A user requirement for this unit operation is straightforward; the product must be maintained at its designated storage
condition and arrive at the destination in acceptable physical condition.
Certifying Organization
Application
TMC North America
ATP Europe
C65
FRA
Controlled Room Temperature
C35
FRB
Refrigerated
F
FRC
Frozen
DF
Deep Frozen
[PAGE 58]
Controlled Temperature Chamber Mapping and Monitoring
As the industry standards ensure that there is a minimal trailer-to-trailer difference for each classification as built, the
validation approach falls to the firm to consider the impact of loading patterns, inspectional criteria, maintenance,
as well as the specification of trailer classification for a matrix approach to assure suitability. The validation exercise
is focused on the loading patterns and assuring that proper airflow can be achieved under conditions of heat and
cold to maintain the product within acceptable temperature ranges. Even temperature distribution within the trailer
is dependent on airflow. Loading practices that block airflow impede the addition or removal of heat and result in
product temperature that may not be controlled within the required range.
A written protocol should be prepared to document temperatures nearest the product during seasonal extremes. The
loading method should be documented. An alternative to actual over-the-road shipments may be the use of thermal
chambers in which the loaded trailer can be placed to gather both hot and cold conditions.
The validation would utilize a typical trailer type available to the firm. As mentioned above, the F rated trailer is the
most common. A successful study on an F rated trailer would also imply that a DF rated trailer would also be suitable
because of additional insulation and conditioning capacity. The study should include a demonstration of the effects
likely to occur, such as loading practices and defrost cycling that may briefly affect the internal air temperature of the
trailer, but will not have an impact on packaged product.

### 11.6 Trailer Loading Patterns

Loading patterns in a well maintained truck are the key determinate in assuring even product temperature within the
trailer. The product should be loaded on pallets that allow free airflow the length of the trailer and the product should
not be in contact with the walls of the trailer. Double stacking of refrigerated goods should be carefully considered,
as airflow distribution in the rear of the trailer may not be sufficient to maintain uniform temperature under extreme
conditions.

#### 11.6.1 Inspectional Criteria

The Quality Agreement between the carrier and the company should define the shared responsibilities of inspection.
The following items should be inspected for each use as they have direct impact on suitability and function of the
trailer:
•
Air distribution chute intact
•
Air supply, air returns and floor drains clear of debris
•
Repairs to interior and exterior surfaces
•
Door seals intact
•
General cleanliness (visual inspection)
[PAGE 59]
Controlled Temperature Chamber Mapping and Monitoring
12	 Maintenance
The supplier of the refrigeration equipment should provide general recommendations for the maintenance of the
equipment, in regard to the specific application. These recommendations may not recognize the high value of the
stored goods in this application. The potential impact on the maintenance program should be assessed.
This Chapter discusses factors which should be considered in a maintenance program. For further information on
maintenance programs see the ISPE Good Practice Guide on Maintenance [24].

### 12.1 Cleaning of the Coils

The coils (unit cooler and air cooled condenser) should be cleaned regularly and checked for any damage to ensure
that the performance levels are maintained. Damaged or distorted fins should be straightened with a suitable comb.
This inspection should also ensure that there is no corrosion of the fins.
Regular inspection should also confirm that the defrost cycle is effective (where applicable), especially if the cycle is
adjusted to account for seasonal variation.
General Cleaning
The approach to cleaning should be considered. Dry cleaning is preferred, in order to minimize risk of contamination.
Regular inspection is recommended to ensure that there is no unseen microbial/fungicidal growth. Any growth
detected should be addressed.

### 12.2 Check the Condensate Pipework

The condensate pipework should be checked to ensure that it is not damaged and that it has the correct fall and flows
freely. Trace heating or insulation also should be checked.
Periodic verification during operation is also recommended; this should ensure that the pipe supports are adequate
and have not loosened.

### 12.3 Functional Testing of the Unit Coolers/Defrost Elements

There is usually no feedback from the solenoid valve on the unit coolers, so the only way of checking their correct
operation is to carry out, periodically, a functional check to verify the performance of each unit cooler.

### 12.4 Leak Testing

It is considered a good practice to periodically check the pipe runs, as well as the equipment for leaks, using one of
the electronic test devices now available. This may be a mandatory requirement, depending on region.
•
The system refrigerant fluid level and pressure against the system specification should be periodically checked
and documented. Early detection may help avoid system failure
•
It may be necessary to keep a record of the refrigerant used for the system
[PAGE 60]
Controlled Temperature Chamber Mapping and Monitoring
•
Equipment rooms may be fitted with leakage detectors/alarms; these should be calibrated and checked regularly
•
End Users should be aware of the local regulatory requirements

### 12.5 Thermal Scanning

The panels, doors, door seals, and sealing of utility penetrations can degrade over time (foamed panels may be
better in this respect than panels filled with mineral wool). A thermal scan of the installation will allow any degradation
to be seen and appropriate action taken. As a minimum, the penetrations should be visually inspected to ensure that
they are sound with no leakage/ingress of condensation. For conduit penetrations, the internal sealing also should be
checked to ensure that condensation is not leaking inside the conduit.

### 12.6 System Alarms

The entire alarm system should be periodically tested by direct or simulated temperature change against the specified
alarm set points and proper functionality of audible and visual alarms at local and/or remote alarm stations (e.g.,
emails, phone calls, or text based alerts) should be confirmed and documented.
Regardless of the root cause, product losses from cold storage-related failures can be prevented with the proper
design and operation of the alarm system, and proper End User response to an alarm event. Periodic testing of the
alarm system should help to ensure that it will work when needed.
The system maintenance procedures can be used to provide a confirmation that the system performance remains
satisfactory, supporting a reduced requirement for remapping where appropriate. The data from the monitoring
system should be reviewed periodically, to look for any negative performance trends. Suggested maintenance
procedures for different system types are suggested.
CRT Storage Area (Warehouse)
1.
The building envelope should be inspected to ensure that there is no visible degradation of the materials of
construction, or of seals/curtains that would impact ingress of unconditioned air.
2.
The system alarm history for the period since the last system maintenance (temperature monitoring system,
HVAC system temperature/humidity, and airflow volume sensors as applicable) should be reviewed to see if
there are any negative performance trends indicated, observations should be noted in the maintenance record.
3.
The HVAC system should be visually checked to ensure that the system balance remains as commissioned;
through verification that balancing dampers remain in their as commissioned/ marked settings.
4.
Heating/cooling coils are checked and cleaned, if necessary.
5.
The control system records should be checked to confirm that control valves are not operating at 100%
(indicating that system performance limits are being reached, or that there are utility system issues), unless the
control algorithms require that this is what the control valves should do e.g., for dehumidification.
[PAGE 61]
Controlled Temperature Chamber Mapping and Monitoring
Walk-in Refrigerators/Freezers
1.
The system envelope should be inspected to ensure that there is no visible degradation of the materials of
construction, door or window seals, door curtains, or air leakage paths, as indicated by moisture or ice buildup.
2.
The system alarm history (temperature monitoring system and refrigeration system general alarms) should be
reviewed for the period since the last maintenance to see if there any negative performance trends are indicated;
observations should be noted in the maintenance record.
3.
The system should be checked to ensure that the refrigeration system set point is being maintained e.g.,
compressor suction pressure.
4.
The maintenance history should be checked to ensure that:
•
Coils have been cleaned, if needed and applicable
•
Fan operation has been checked
•
Operation of the unit cooler control valves and thermal expansion valves has been checked
•
Defrost settings and operation of the defrost system have been verified, if applicable
Standalone Refrigerators and Freezers
1.
The system envelope should be inspected to ensure that there is no degradation of the materials of construction,
door seals, or air leakage paths, as indicated by moisture or ice buildup.
2.
The system alarm history (temperature monitoring system and refrigeration system general alarms) should be
reviewed for the period since the last maintenance to see if there any negative performance trends are indicated;
observations should be noted in the maintenance record.
3.
The system should be checked to ensure that the refrigeration system set point is being maintained e.g.
compressor suction pressure.
4.
The maintenance history should be checked to ensure that:
•
Coils have been cleaned, if needed and applicable
•
Fan operation has been checked
•
Operation of the unit cooler control valves and thermal expansion valves has been checked
•
Defrost settings and operation of the defrost system have been verified, if applicable
Where a system has multiple monitoring locations e.g., the control sensor, and an independent temperature monitor
located to monitor the hot/cold locations in the unit, the preventive maintenance is not required to confirm satisfactory
unit operation. The review of current system performance data against the as Qualified data by an SME can be used
to confirm consistent system performance.
This review should assess the thermal performance of the unit insulation and the conditioning system, allowing
a suitably experienced SME to determine if there has been a significant change in performance that may require
maintenance activities to improve or if the system is still performing acceptably.
[PAGE 62]
[PAGE 63]
Controlled Temperature Chamber Mapping and Monitoring
Appendix 1
Appendix 1
13	 Appendix 1 – Example User Requirements
Specification

### 13.1 URS Typical Content

#### 13.1.1 Purpose

The purpose of this document is to provide the system developer with the user’s requirements for the x°C freezer.
Overview
Text goes here
Background
Text goes here
Key Objectives
The system will store GMP material at x°C to x°C.
Main Functions
The system shall be capable of storing material at x°C to x°C and provide a general system fault alarm and high and
low alarm set points that can interface with the monitoring system. The monitoring system will provide the quality
system alarms and provide operator paging.
Applicable GMP Requirements and Regulations
•
21 CFR Part 11 Compliance (if the system provides an electronic record)
•
Relevant regulations see Section 1.4
Note: that the specific application may have requirements defined related to the regulations, rather than defining the
regulation e.g., “each storage location must have a bar code label defining the location for the inventory management
system”.

#### 13.1.2 Operational Requirements

Capacity
•
12 Euro pallets (X by Y by Z)
•
System maximum single shipment loaded into the unit is 4 pallets (Note: product is at storage temperature)
•
System load removed in single pallet units
Pallet Racking
•
Racking is to be GMP grade cleanable crevice free with a finish that is resistant to cleaning, sanitizing, and
sporicidal agents
[PAGE 64]
Appendix 1
Controlled Temperature Chamber Mapping and Monitoring
Process Requirements
•
Include allowable excursions (e.g., specific product may be exposed to high temps up to x°C for y minutes if
Mean Kinetic Temperature (MKT) does not exceed z°C, et.al.)
•
Maintain operating rate of x°C to x°C expected results
•
Maintain operating range of x°C to x°C acceptance criteria
•
Factory installed access port for installation of temperature mapping sensors
Note: MKT is not generally used for cold rooms or freezers, but is commonly applied to controlled room temperature
storage, based on the stored product requirements.
Independent Temperature Monitoring System
•
Providing a high and low temperature alarm and paging to alert staff in the event of an excursion. Note: the
temperature alarms are part of the supervisory quality system, paging is not.
Fire/Smoke Detection System
•
Internal pre-action sprinkler system
•
Smoke detection system (aspirating)
Automation System Functions
•
Local display of operational status, temperature, and alarm conditions
•
Access control security to the panel and set points
•
Local audible/visual alarms for high, low, high high, and low low temperatures and general system fault
•
Factory installed access port for installation of temperature mapping sensors
Note: consideration should be given to how connections will be made to sensors inside the Controlled Temperature
Chamber; wireless sensors, or data loggers do not require any special considerations, but thermocouples which
may be used for mapping or RTDs which may be used for monitoring require an entry port that may be sealed using
a suitable material e.g., PTFE packing. When installing sensors how calibration will be carried out should also be
considered. It may be worth leaving surplus cable to allow a sensor to be dropped to a local hot block
•
Critical alarms will be displayed at X. Non-critical alarms will be displayed at Y.
Safety
The unit must be fitted with:
•
Internal emergency lighting
•
A mechanism to allow door opening from the inside of the unit regardless of the lock status
•
An internal alarm button connected to a suitable alarm system
[PAGE 65]
Controlled Temperature Chamber Mapping and Monitoring
Appendix 1
Alarms and Warnings
•
Critical and Non-Critical Alarms
Alarm Temperature
Critical Alarm
Non-critical Alarm
Alarm Display
Local Display and
Distributed Control
System (DCS)
DCS
DCS
Local Display and DCS
Data and Security
•
Data storage capacity requirements
•
Security access requirements
•
Archive requirements
Archiving and trending of temperature (Usually from an independent monitoring system. This system would have its
own URS).
•
Data Security and Integrity i.e., recorded data cannot be modified
Interfaces
•
Interface with Users (Human Machine Interface (HMI))
•
Interface with site monitoring/alarm systems, e.g., BMS
Environment
•
Design conditions
Layout
The system will be placed in area that will allow sufficient air circulation for a standard unit, for a walk-in unit this
requirement may be incorporated for the cooling system, in order to ensure no short circuiting of air from adjacent units
•
Physical conditions
-
Room explosion classification
-
Ratings of enclosures
•
Intended operating environment

#### 13.1.3 Constraints

•
Equipment Constraints
[PAGE 66]
Appendix 1
Controlled Temperature Chamber Mapping and Monitoring
•
Compatibility/Support:
-
Control Platform Controllers
-
Utilities:
>
Power Supply
>
Electricity:
○
Voltage VAC Hz
○
Amperage
○
Phases
○
Power supply:
˜
Hard wired or cord and plug
˜
Battery backup
˜
Emergency power
•
Availability:
-
The (equipment/system) is intended to be operated continuously
•
Procedural Constraints
•
Product Contact Materials:
-
Product in contact with materials
•
Noise Level Constraints:
-
The noise made by (any part of) the installation must not exceed 85 dB(A) in operating state, at 1 m (3 ft)
from the source
•
Labeling:
-
All equipment, control wiring, and instruments shall be labeled and identified
•
System Life Expectancy
•
Maintenance:
-
The system is to be provided with plug and socket connections to facilitate maintenance for internal unit
cooler components
-
Refrigerant pipework is to be provided with isolation valves for major equipment items to facilitate maintenance
[PAGE 67]
Controlled Temperature Chamber Mapping and Monitoring
Appendix 1

### 13.2 Sample URS

User Requirements Specification
Sample Walk-in Cold Room System: Storage Requirements
Building {x}
This document is the property of:
Table of Contents
General: Purpose and Scope................................................................................................................................
Definitions and Abbreviations...............................................................................................................................
References..............................................................................................................................................................
System Description................................................................................................................................................
User Requirements.................................................................................................................................................
5.1 Process Requirements: Capacity......................................................................................................................
5.2 Process Requirements: Product Physical Properties........................................................................................
5.3 Process Requirements: System Quality Attributes and System Process Parameters......................................
Automation and Records.......................................................................................................................................
Design and Construction: Material Compatibility...............................................................................................
Design and Construction: Mechanical.................................................................................................................
Design and Construction: Utilities........................................................................................................................
10	 Design and Construction: Electrical.....................................................................................................................
11	 Design and Construction: Environmental Health and Safety............................................................................
12	 Design and Construction: Code Compliance – N/A............................................................................................
13	 Operations and Maintenance................................................................................................................................
14	 Miscellaneous – N/A...............................................................................................................................................
15	 Change Summary...................................................................................................................................................
[PAGE 68]
Appendix 1
Controlled Temperature Chamber Mapping and Monitoring
General: Purpose and Scope
The purpose of this document is to define the user requirements for a walk-in Cold Room to be installed at the XYZ
facility.
The user requirements stated herein describe what must be achieved for the system to serve its intended purpose.
This document is not intended to be prescriptive as to how those user requirements are met. Revise this document
to reflect changes that occur throughout the system life cycle and update it to document the current system
requirements.
Definitions and Abbreviations
Term
Definition
European Conformity (CE)
With the CE marking on a product, the manufacturer declares that the
product conforms with the essential requirements of the applicable EC
directives for environmental, health, and safety.
National Electric Code (NEC)
Code which sets the standard for electrical systems design and materials of
construction.
National Electrical Manufacturers
Association (NEMA)
Association that sets the industry standards in the US for electrical
equipment enclosures.
Subject Matter Expert (SME)
Individuals with specific expertise and responsibility in a particular area or
field (e.g., quality unit, engineering, automation, validation, manufacturing,
process development).
Underwriters Laboratories (UL)
A global independent safety science company offering expertise across five
key strategic businesses: Product Safety, Environment, Life and Health,
Verification and Knowledge Services.
Abbreviation
Definition
BMS
Building Management System
CE
European Conformity
dB(A)
Unit of measurement for sound intensity, decibels on the “A” scale
MCC
Motor Control Center
OSHA
Occupational Safety and Health Administration (US)
PI
Plant Information
RTD
Resistance Temperature Detector
SCBD
System Classification Boundary Diagram
SME
Subject Matter Expert
SOP
Standard Operating Procedure
UPS
Uninterruptible Power Supply
URS
User Requirements Specification
VAC
Voltage Alternating Current
[PAGE 69]
Controlled Temperature Chamber Mapping and Monitoring
Appendix 1
References
Document Identifier
Title
System Description
The walk-in Cold Room units provide refrigerated storage for XX that support production.
This system encompasses the equipment items listed below, as illustrated by referenced P&ID’s:
Type
Equipment
Description
P&ID
Cold Room (2°C to 8°C)
TBA
Cold Room
TBA
The Cold Room will comprise of:
•
Prefabricated insulated wall panels and roof
•
Insulated floor slab
•
Lights, emergency lights, automated door, emergency exit door (actuated by a manual push bar)
•
Evaporators
•
Refrigeration skids
•
Refrigeration piping between refrigeration skids and evaporators
•
Piping, instruments, controls, and safety features required for operation
The Cold Room unit will be controlled locally with the vendor supplied control system, interfacing with operations
personnel via the vendor supplied Operator Interface (OIT) and hand switches. It is integrated with the site BMS to
allow for performance monitoring, data archiving, and alarming.
User Requirements

### 5.1 Process Requirements: Capacity

ID No.
Requirement
Type
Source

### 5.1 The Cold Room must be sized to XX. Shelves must be provided

for XX. Cold Room interior dimensions must be approximately W
× D × 3 H. Note: material will not be stored on the floor; access for
cleaning must be provided for all racking.
Business
Operations

### 5.2 The system should be designed to operate with external design

conditions of -2.8°C to 36.7°C (27°F to 98°F).
Business
ASHRAE/
Operations

### 5.3 The Cold Room will be located in a room maintained at controlled

room temperature.
Business
Operations
[PAGE 70]
Appendix 1
Controlled Temperature Chamber Mapping and Monitoring

### 5.2 Process Requirements: Product Physical Properties

ID No.
Requirement
Type
Source

### 5.4 The Cold Room is not used for cooling the stored material, but must

maintain it at temperature.
Business
Operations

### 5.3 Process Requirements: System Quality Attributes and System Process Parameters

ID No.
Requirement
Type
Source

### 5.5 The control unit shall maintain the storage location temperature

between 2oC to 8°C (acceptance criteria), with a design
performance of 3°C to 7°C (expected results)
Quality
SME

### 5.6 The system must retain the temperature in empty, partially and fully

loaded states
Quality
SME

### 5.7 The Cold Room must have access control, such as a card reader

Quality
SME

### 5.8 Note: Relative humidity, lighting and UV levels are non-critical

Quality
SME
Automation and Records
ID No.
Requirement
Type
Source

### 6.1 The control unit must be provided with two temperature monitors

dedicated for monitoring cold room temperature (in addition to, and
independent from, the unit’s control system). One must measure
the localized high temperature zone and one must measure the
localized low temperature zone as determined by temperature
mapping.
Quality
SME

### 6.2 The installation of the monitoring sensors must facilitate routine

calibration e.g., using long cable/radio transmitters.
Quality
SME

### 6.3 The unit’s temperature loops that sense Cold Room temperature

and are dedicated for monitoring must be accurate to within 0.5°C
accuracy.
Quality
SME
6.4
The unit must achieve set point from ambient in 12 hours or less.
Business
SME

### 6.5 The unit must be provided with a vendor standard control system

that must control and monitor all aspects of operation, and provide
operator interface capability and records of the key aspects of
operation. The system must provide redundancy such that either
the duty or standby system can operate while the standby system
and controls are maintained/repaired.
Business
SME

### 6.6 A user must be logged in and have the proper security privileges

in order to issue commands, or change set points/values, or there
must be access control to prevent accidental changes to system
set points (Note: the refrigeration control system is not required
to comply with 21 CFR Part 11 [25] as it provides no records; the
independent monitoring system will be compliant).
Business
SME
[PAGE 71]
Controlled Temperature Chamber Mapping and Monitoring
Appendix 1
ID No.
Requirement
Type
Source

### 6.7 The system must have an automatic log off feature with a

configurable time out where applicable.
Business
SME

### 6.8 The room temperature data must be recorded/archived in the plant

BMS system.
Quality
SME

### 6.9 The unit must be capable of resuming operation in a safe

manner without loss of configuration or data after power loss and
restoration.
Business
SME

### 6.10 The unit must operate refrigeration skids in lead-lag mode, with

alternating designation to ensure even run time, and provide
system redundancy.
Business
SME

### 6.11 Alarms must be provided for the following conditions:

• Fan failure
• Door open beyond established time limit
• Refrigeration system failure
Quality
SME

### 6.12 Alarms must be configured so that they are easily distinguishable

based on their present condition i.e., unacknowledged/
acknowledged etc.
Business
SME

### 6.13 All alarms shall be provided with an individual delay timer which

must complete (i.e., time out) before the alarm becomes active.
Business
SME

### 6.14 Alarm annunciation shall be audible and visual, acknowledging the

alarm will silence the local annunciation.
Business
SME

### 6.15 There must be an engineering alarm (e.g., from the system control

panel) if the system temperature exceeds pre-defined limits, outside
the normal operating range.
Business
SME

### 6.16 The system must automatically switch control to the redundant unit

if the temperature exceeds normal operating high or low conditions,
or the duty system fails.
Business
SME
Design and Construction: Material Compatibility
ID No.
Requirement
Type
Source

### 7.1 All internal and external surfaces must resist corrosion from

cleaning and sanitizing chemicals, including bleach and Spor-
Klenz®
Quality
SME

### 7.2 Design must ensure that the forming of voids or other spaces

capable of harboring vermin colonies is avoided in detail and
construction. All junctions must be sealed with appropriate fillers
and mastic beading to prevent insect and rodent ingress to Cold
Room construction and materials used in construction and finishing
must not be capable of supporting vermin colonies
Quality
SME
[PAGE 72]
Appendix 1
Controlled Temperature Chamber Mapping and Monitoring
Design and Construction: Mechanical
ID No.
Requirement
Type
Source

### 8.1 The unit’s temperature sensors used for control must be accurate to

within 0.25°C (measurement uncertainty) 0.5°C accuracy
Business
SME

### 8.2 The unit must be provided with RTD(s) that must be placed in

the discharge air stream of each evaporator for troubleshooting
(separate to RTDs used for control)
Business
SME

### 8.3 The unit must be provided with external and internal fire protection

in line with the insurer’s (Factory Mutual (FM)) requirements
Business
SME
8.4 The system materials of construction must meet the insurer’s (FM)
requirements.
Business
SME

### 8.5 The Cold Room must be provided with bollards to protect door

openings from forklifts and pallet jacks.
Business
SME

### 8.6 The Cold Room must be provided with door height indicators for

reference by operators using forklifts and pallet jacks.
Business
SME

### 8.7 System design must prevent the possibility of condensed moisture

dripping on stored material.
Quality
SME

### 8.8 The system provided must impede warm air infiltration when doors

are open by using a vinyl curtain or other inhibiting device or
method.
Quality
SME

### 8.9 The internal fixtures and fittings must be designed in accordance

with GMP to facilitate cleaning.
Quality
SME
Design and Construction: Utilities
ID No.
Requirement
Type
Source

### 9.1 The system must be able to operate from the utility supplies as

follows:
• Condenser Water – 1.4 bar delta/6°C
Utilities must be live to the unit unless it is down for maintenance.
Business
SME
[PAGE 73]
Controlled Temperature Chamber Mapping and Monitoring
Appendix 1
Design and Construction: Electrical
ID No.
Requirement
Type
Source

### 10.1 All electrical equipment must be designed and installed in

accordance with National Electrical Code (NEC), Underwriters
Laboratories (UL) or European Conformity (CE). Engineering
Standard exceptions require XYZ Company approval.
Business
SME
10.2
Control panels must be labeled per applicable testing organization.
Business
SME

### 10.3 Electrical power components and equipment must be designed for

use at 230VAC, 400VAC, or a combination of both.
Electrical power components and equipment must be designed,
chosen, and labeled for use on a 50Hz power distribution system.
Frequency conversion equipment must not be used to adapt
frequency without prior approval.
Circuit and plug sizing and types must be determined based on
available standard sizes identified in the applicable specification.
Business
SME

### 10.4 The Cold Room must be connected to generator power. Its control

system must be designed for operation with a central UPS system
(although it must be connected to generator power, not central UPS
power).
Business
SME

### 10.5 The redundant refrigeration skids must receive power from different

MCCs.
Business
SME
10.6
Power > 50V must be segregated from power < 50V.
EHS
SME
Design and Construction: Environmental Health and Safety
ID No.
Requirement
Type
Source

### 11.1 The noise made by (any part of) the installation must not exceed

85dB(A) in operating state, at 1 m (3 ft) from the source (externally
and internally).
EHS
SME

### 11.2 The door must be provided with hardware to allow egress from the

Cold Room in an emergency.
EHS
SME

### 11.3 An emergency button must be provided inside the cold room to

activate an external light and initiate a common trouble alarm in an
emergency.
EHS
SME

### 11.4 Refrigerant monitoring must be provided near the refrigeration

skids, with connection to the fire alarm (life safety) system.
EHS
SME
Design and Construction: Code Compliance
Not Applicable (N/A)
[PAGE 74]
Appendix 1
Controlled Temperature Chamber Mapping and Monitoring
Operations and Maintenance
ID No.
Requirement
Type
Source

### 13.1 Maintain accessibility for service. The system must be serviceable

with required clearances and proper access provided for
equipment, components, and instruments. Where necessary,
provide access panels or doors as required for replacement or
maintenance access. Do not place products requiring regular
maintenance at locations that will be inaccessible after construction
is completed.
Business
SME

### 13.2 Standard operating procedures must define acceptable storage

locations and the maximum quantity of material allowed to be
stored.
Quality
SME

### 13.3 Standard operating procedures must identify actions and

temperature alarms and equipment alarms.
Quality
SME

### 13.4 Door gaskets for all doors should be designed for easy replacement

to facilitate maintenance.
Business
SME
Miscellaneous
Not Applicable (N/A)
Change Summary
Change
Justification
[PAGE 75]
Controlled Temperature Chamber Mapping and Monitoring
Appendix 2
Appendix 2
14	 Appendix 2 – Sample Document:
Number and Location of Mapping Sensors
This sample document defines the number and location of temperature mapping sensors to be used and the Load
Test rationale.

### 14.1 Introduction

This document is intended to provide a record of the rationale used to select the sensor locations for the temperature
mapping of the Client’s Warehouse, and the associated Load Test strategy.
The mapping will be used to determine the number and location for the permanent monitoring sensors, based on the
product storage locations that experience maximum and minimum temperature conditions during simulated normal
use.
It should be noted that the product stored has no critical humidity requirements; therefore, humidity will be neither
mapped nor monitored.

### 14.2 Approach

The following points were considered:
•
External heat gains and losses
•
Internal heat gains and losses
External Heat Gains and Losses
The major heat gains and losses to the warehouse are due to the influences of the external environment, with the
most significant being through the north wall and ceiling.
All other influences will be consistent; areas within the warehouse which are adjacent to the temperature controlled
storage room, will be air conditioned. During normal use the doors will be opened for loading and unloading,
influencing the internal conditions.
Vinyl curtains are placed at each entrance, with inflatable seals to seal onto the truck sides for loading and unloading.
Internal Heat Gains and Losses
•
Lighting: the lighting is from low energy fluorescent lamps; these are left on during the working day
•
Product: the product stored in the warehouse is supplied at the storage temperature, so will not put a significant
heating or cooling load onto the space
•
Equipment: the equipment used comprises a stacking forklift truck; this is a relatively small intermittent load
•
Personnel: on average there are approximately two people working in the area – the heat gains are, therefore,
small and transient
[PAGE 76]
Appendix 2
Controlled Temperature Chamber Mapping and Monitoring
•
Air conditioning is by a single system with outlets equally spaced in the aisles as shown on the attached
drawing.6

### 14.3 Sensor Placement

The areas considered during the mapping are those areas where product will be stored.
The sensor locations proposed have been generated using the French Standard “NF X15-140 October 2002
Measurement of air moisture – Climatic and thermostatic chambers – Characterization and verification” [17] for
guidance.
The chamber has been divided into zones, with each zone supplied by an air conditioning vent.
The end zones are different to the center zones in that they have the end wall/door influences. However, the
symmetrical nature of the design of the central zones has allowed the number of mapping sensors proposed to be
reduced.
A temperature sensor should be placed on the lowest and highest product storage points, and at each corner of the
room on the racking/product nearest the perimeter.
One temperature sensor will be located in the center of these locations at mid-level.

### 14.4 Monitoring System Sensor Placement

The mapping will be used to define the number and location of the permanent locations that will be used for mounting
the system monitoring sensors.
Load Testing
The warehouse will be mapped using two “load” scenarios. In both cases there will be a minimum amount of thermal
mass so that the impact of the change is seen quickly:
•
“Empty”
-
The warehouse will be mapped empty, so that there are no constraints on air flow, with the lowest average
air flow velocity in the room.
•
 “Full”
-
The unit is considered as a number of zones that operate independently; the front (i.e., nearest the door)
zone and a half will be filled with empty boxes simulating the largest stored product case. This scenario will
give minimum thermal mass, but maximum interruption of airflow, allowing the effect on the temperature
distribution to be seen in the filled zones.
Note: the area selected was based on the fact that the warehouse is symmetrical.
6	 A drawing could be attached for clarity.
[PAGE 77]
Controlled Temperature Chamber Mapping and Monitoring
Appendix 2
Summer/Winter Conditions
The mapping sensor layout is uniform when the data is analyzed the following will be considered:
•
The North wall of the warehouse and the roof are exposed to external conditions, potentially influencing the
temperature at high level and along that wall
•
Local weather data from the Meteorological Office provided weather data showing the 90% and 95% summer/
winter conditions to be:
-
Summer x
-
Winter y
The design is specified to maintain internal conditions in all conditions up to and including the 95% limits.
The initial mapping is to be in summer, the data obtained from this may be used to recommend a reduced number
of sensors to be maintained through to the winter season. The mapping will be considered complete when seasonal
variation has been experienced that exceeds the 90% design conditions.
[PAGE 78]
[PAGE 79]
Controlled Temperature Chamber Mapping and Monitoring
Appendix 3
Appendix 3
15	 Appendix 3 – Example Use of Measurement
Uncertainty
This example describes the use of measurement uncertainty to determine the monitoring sensor locations from the
mapping data. For further information on measurement uncertainty see the NSAI – National Metrology Laboratory
(NML) [26].7
The maximum temperature and minimum temperature should be found during the mapping activity. This data can be
analyzed to determine the locations representing temperature extremes.
•
Where monitoring sensors can be located at the maximum and minimum temperature spots, alarm limits can be
determined based on Critical Operational Data (COD)/Measurement Uncertainty (MU) of sensor and calibration
standards
•
Where monitoring sensors cannot be located at the maximum and minimum temperature spots, an offset should
be added to the COD/MU to account for the offset between the maximum and minimum temperature spots and
the monitoring sensor(s)
1.
For alarm sensor(s) installed at the locations of maximum and minimum temperature as determined in mapping,
the COD/MU for each device should be included when establishing upper and lower limits for the alarm range
2.
For alarm sensors permanently mounted at a location other than the maximum and minimum temperature
locations as determined in mapping, the offset between the maximum and minimum temperature spots and the
monitoring sensor(s) should be determined. When establishing upper and lower limits for the alarm range, any
offsets due to the sensor location should be included in addition to the COD/MU for each device
In addition, the measurement uncertainty of both types of sensors (i.e., the sensors used during temperature
mapping and the permanently installed monitoring sensors) should be considered in establishing the alarm limits.
Measurement Uncertainty calculation and application:
For the low limit: DL ≥ Limit + [GB – Usr]
For the high limit: DL ≤ Limit – [GB – Usr]
Where:
DL = Decision Limit
Limit = PAR (Proven Acceptable Range), Action or Safe Operating Limits
Guard Band (GB) = k * usystem
k = coverage factor which must be ≥ 2.00
usystem = calculated measurement uncertainty
Usr = Required Uncertainty of Limits (usually = 0 to indicate no allowable excursion from the alarm value)
7 Dubhaltach Mac Lochlainn of the National Standards Authority of Ireland (NSAI) has kindly provided further guidance on the use of measurement
uncertainty please see the ISPE website for further information.
[PAGE 80]
Appendix 3
Controlled Temperature Chamber Mapping and Monitoring
Examples
Figure 15.1
Given:  uT1 = uT2 = uT3 = uT4 = uT5 = uT6 = 0.125°C
Usr for each sensor = 0°C (no data available to allow for temperatures above or below the Proven Acceptable Range
(PAR))
k = 2 (corresponds to confidence ≥ 97.7% for single sided alarm; 2 σ)
PAR = 2°C to 8°C (35.6°F to 46.4°F)
GB = us * k = 0.125°C * 2 = 0.25°C
Example A
If all sensors are within GB = 0.25°C of each other, the differences in temperature can be attributed to the
measurement uncertainty of the sensors and the location of the monitoring sensor can be at any one of the locations
of the mapping sensors. The alarm limits are:
DLH = 8 – (GB – Usr) = 7.75°C
DLL = 2 + (GB – Usr) = 2.25°C
Example B
If sensor 1 shows highest temperature at 7.0°C and sensor 4 shows lowest temperature of 6.5°C at that same time,
the following applies:
a.
If you leave the monitoring sensor 5 in the existing location (same as sensor 4), include 0.5°C offset and
measurement uncertainty for sensors 1 and 4 in calculation (i) for the high alarm limit. The low alarm limit
calculation (ii) remains the same as in Example A:
i.
DLH = 8 – (0.5 + 2√ (uT1
2 + uT4
2) – Usr) = 8 – (0.5 + 2 (0.177) – 0 = 7.15°C
ii.
DLL = 2 + (GB – Usr) = 2.25°C
[PAGE 81]
Controlled Temperature Chamber Mapping and Monitoring
Appendix 3
b.
If you relocate the monitoring sensor 5 to the location of the high temperature (position 1), include 0.5°C offset
and measurement uncertainty for sensors 1 and 4 in calculation (ii) for the low alarm limit. The high alarm limit
calculation (i) remains the same as in Example A:
i.
DLH = 8 – (GB – Usr) = 7.75°C
ii.
DLL = 2 + (0.5 + 2√ (uT1
2 + uT4
2) – Usr) = 2.85°C
Example C
If sensor 1 shows highest temperature at 7.0°C and sensor 2 shows lowest temperature of 6.0°C and sensor 4 shows
value of 6.5°C at the same time as the sensor 1’s high and sensor 2’s low, the following applies:
a.
If you leave the monitoring sensor 5 in the existing location, include 0.5°C offset and measurement uncertainty
for sensors 1 and 4 in calculation (i) for the high alarm limit and the 0.5°C offset and measurement uncertainty for
sensors 2 and 4 in calculation (ii) for the low alarm limit:
i.
DLH = 8 – (0.5 + 2√ (uT1
2 + uT4
2) – Usr) = 7.15°C
ii.
DLL = 2 + (0.5 + 2√ (uT2
2 + uT4
2) – Usr) = 2.85°C
b.
If you relocate the monitoring sensor to the location of the high temperature, include 1.0°C offset (difference
between the high and low temperature locations) and measurement uncertainty for sensors 1 and 2 in calculation
(ii) for the low alarm limit. The high alarm limit calculation (i) remains the same as in Example A:
i.
DLH = 8 – (GB – Usr) = 7.75°C
ii.
DLL = 2 + (1.0 + 2√ (uT2
2 + uT1
2) – Usr) = 3.35°C
c.
If you relocate the monitoring sensor 5 to the location of the low temperature (position 2), include 1.0°C offset
(difference between the high and low temperature locations) and measurement uncertainty for sensors 1 and 2 in
calculation (i) for the high alarm limit. The low alarm limit calculation (ii) remains the same as in Example A:
i.
DLH = 8 – (1.0 + 2√ (uT1
2 + uT2
2) – Usr) = 6.65°C
ii.
DLL = 2 + (GB – Usr) = 2.25°C
d.
If you place monitoring sensors at each of the high and low temperature locations, then there is no offset and
only the single device measurement uncertainty is included in the calculation. The monitoring sensor in the high
temperature location will only alarm for high temperature excursions (i) and the monitoring sensor in the low
temperature location will only alarm for the low temperature excursions (ii):
i.
DLH = 8 – (GB – Usr) = 7.75°C
ii.
DLL = 2 + (GB – Usr) = 2.25°C
[PAGE 82]
Appendix 3
Controlled Temperature Chamber Mapping and Monitoring
Example Protocol
1.
Define system
a.
Description: -20°C freezer, 20 ft × 20 ft × 10 ft with redundant compressor/evaporator systems located in
CRT warehouse with single door opening to warehouse and one wall exposed to external temperatures
b.
Process Parameters (Acceptance Criteria): -17°C to -3°C. Usr is considered “0” because the product will be
considered unacceptable if the temperature goes outside of these parameters as defined instability studies
2.
Establish rationale for sensor locations. Using the guidance in Section 6 of this Guide, identify sensor locations
and document them as follows (this example shows an excessive number of sensors for the space only to
demonstrate various rationales):
a.
Sensors 1 to 9: Basic layout: high and low at each corner plus one in middle of room
b.
Sensors 10 to 25: high, middle and low on fixed racks due to restriction of air flow and temperature
stratification
c.
Sensor 26: external door to unconditioned space with potential impact on room condition
d.
Sensors 27, 28, and 29: external wall due to temperature extremes greater than 10oC from room set point
e.
Sensor 30: potential exposure to heat from defrost cycles of the system
f.
Sensor 31: monitoring external conditions (for information only; not subject to acceptance criteria)
g.
Sensor 32: control and/or monitoring sensor location
3.
Define Equipment
a.
Model – Validator 2000 Data Logger and Sensor Input Modules with T Type Thermocouples
b.
Description
i.
Validator 2000 S/N 590030
ii.
Sensor Input Modules (SIMs)
•
940030
•
940031
•
940032
c.
Calibration information
i.
Validator 2000 last calibration 11/15/2010; calibration due 11/15/2011
ii.
Sims last calibration 11/15/2010; calibration due 11/15/2011
iii. Sensor calibration initiated on 12/14/2010 using temperature standard MK 15/65 Kaye 03/14/2010 with
temperature reference MKR-80
[PAGE 83]
Controlled Temperature Chamber Mapping and Monitoring
Appendix 3
•
Identify measurement uncertainty of sensors and data collector (from Calibration Report)
-
Accuracy = ± 0.125°C
iv. Calculate GB for system
•
GB = k * us = 2 * 0.125 = 0.25°C
d.
Define Acceptance Criteria
i.
For the low limit: DL ≥ Limit + (GB – Usr) = (-17) + 0.25 = -16.75°C
ii.
For the high limit: DL ≤ Limit – (GB – Usr) = (-3) – 0.25 = -3.25°C
e.
Set-up parameters
i.
Sample rate: once every 5 minutes
ii.
Test time: at least 24 hours (include time to capture defrost cycles and switchover of redundant
systems)
4.
Place equipment in space
5.
Verify that values are being recorded
6.
Start Time: _____
7.
End Time: _____
8.
Evaluate data for temperature uniformity for each sensor
a.
Minimum reading with time and sensor number
b.
Maximum reading with time and sensor number
c.
If minimum and maximum readings are within the Acceptance Criteria for the room, then the uniformity is
acceptable for this system
d.
Compare minimums and maximums to the monitoring device values and determine if relocation of the
monitoring sensor is required or an offset in the alarm strategy is required or other action is necessary
e.
Mean kinetic temperature (for CRT warehouse with areas allowing specified temperature excursions over
specified periods of time only)
[PAGE 84]
[PAGE 85]
Controlled Temperature Chamber Mapping and Monitoring
Appendix 4
Appendix 4
16	 Appendix 4 – Sample Report
Recommending the Location for Freezer
Note: this is a sample document. The number and location of the sensors should be defined based on the unit; the
storage temperatures are based on the product requirements, with the sensors located in thermal fluid as this is the
preference of the System Owner who kindly provided this example.

### 16.1 Introduction

The freezer was mapped using 36 independent sensors connected to a temperature mapping system during
commissioning, with the mapping sensors located as shown in Figure 16.1. A series of tests were performed to
ensure that the system met performance specifications during simulated use.
The freezer performance will be monitored by the BMS, with an independent chart recorder used as a backup
system. The mapping data obtained during the commissioning tests was used to determine the BMS and chart
recorder sensor locations.

### 16.2 Product Temperature

The monitored room air temperatures are intended to be kept between -15°C (5°F) and -25°C (-13°F). The product
is placed in the room at temperatures within this range; so it is not considered necessary to separately monitor the
product temperature.
Temperature monitoring sensors will be located in a small container of glycerin, to simulate the thermal response of
the product packaging.
Note: in this example the site had data confirming that this was equivalent to the material to be stored in the unit.
Monitoring System
The BMS and chart recorder sensor elements will be placed in the room and monitor worst case air temperature
based on the conclusion contained in this report. There are six temperature sensors for use as freezer temperature
monitors.
Approach
The following test results were used as the basis for determining the BMS and chart recorder sensor locations, so
that they represent the worst case conditions (minimum and maximum temperatures) during simulated normal use
of the freezer. The sensors are intended to be placed in a location that will see the most rapid changes in the air
temperature, in order to achieve the earliest possible alarm in case of an out of limit operation.
[PAGE 86]
Appendix 4
Controlled Temperature Chamber Mapping and Monitoring

*[Figure 16.1: Mapping Sensor Locations]*

Commissioning Test 1 – Baseline Readings
This test was used to confirm the proper operation of the refrigeration systems by monitoring system operational
parameters. The freezer operation was monitored for a minimum of 24 hours, in steady state conditions with no door
opening.
Commissioning Test 2 – Open Door Test Empty
This test was used to determine the effect on the freezer temperature while the freezer sliding door was left open.
The test was conducted with the system furthest from the door (Cooling System A) operating, to provide worst case
conditions i.e., minimum forced air mixing adjacent to the door). The door was opened for a one-hour period with the
internal vinyl curtains closed; the test period was adequate to indicate the conditions that the system would maintain if
the door was left open.
Commissioning Test 3 – Open Door Test Loaded
This test was used to demonstrate the system performance loaded, using empty boxes to simulate the load
(maximum volume, minimum thermal mass).
The test was conducted with the system furthest from the door (Cooling System A operating, to provide worst case
conditions i.e., minimum forced air mixing adjacent to the door). For each load, an open door test was conducted.
The door was opened for a one-hour period with the internal vinyl curtains closed; the test period was adequate to
indicate the conditions the system would maintain if the door was left open.
[PAGE 87]
Controlled Temperature Chamber Mapping and Monitoring
Appendix 4
Table 16.1: Test Results
Considerations
The locations recommended for the BMS sensors are those generally representing the minimum and maximum
temperatures during the tests, considering the following:
•
The sensor should ideally be accessible for ease of calibration
•
The sensor should provide a reading reasonably representative of the minimum and maximum temperatures
product will be exposed to during normal operation of the freezer
•
The highest risks of temperature excursions are during door opening. During operation, normal traffic into the
room is performed with the opened door through the curtains of the cold room
•
The sensors should be distributed, as much as possible, to try to represent the whole freezer
•
The central area of the freezer is considered to be more stable in terms of temperature than the perimeter zones,
as there are no doors and the external environmental influences are significantly less
•
The accuracy of the mapping sensors used is ± 0.5°C (± 0.9°F)
Minimum Temperature Locations
The location experiencing the minimum average temperature and minimum temperature during test 1 was location x.
The minimum value recorded during testing was x°C/x°F, recorded at sensor x during test 1 and at location x during
test 2.
1.	 Baseline Readings, Empty
Temperature (°C)
Location
Minimum average temperature
Maximum average temperature
Minimum temperature
Maximum temperature
2.	 Open Door Empty
Temperature (°C)
Location
Minimum average temperature
Maximum average temperature
Minimum temperature
Maximum temperature
3.	 Open Door Loaded
Temperature (°C)
Location
Minimum average temperature
Maximum average temperature
Minimum temperature
Maximum temperature
[PAGE 88]
Appendix 4
Controlled Temperature Chamber Mapping and Monitoring
Maximum Temperature Locations
The maximum temperature locations are influenced by the defrosting of the unit coolers and the door opening. This
creates a heat gain as the dense cooled air leaves the freezer and warm air enters the room to replace it, continuing
to enter after the door is closed through the vents to ensure that the freezer is not under pressure or vacuum.
The locations showing the maximum temperature during test 1 was x. The maximum average temperature x°C/x°F.
During test 2 the maximum average of x°C/x°F was obtained at location x with the maximum of x°Cx/°F obtained at
location x.

### 16.3 Discussion

Based on the data the following locations were considered for the BMS sensors.
Conclusions
The locations selected for the temperature monitoring sensors are:
•
The locations for the minimum temperature are: _________
•
The locations for the maximum temperature are: _________
Note: The following graphs showing the mapping data for each test were attached to the example:
•
Data from all mapping sensors
•
Data the sensors selected to provide the monitoring data
These showed that the monitoring locations selected provided a reasonable record of the worst case locations (i.e.,
hottest and coldest).
[PAGE 89]
Controlled Temperature Chamber Mapping and Monitoring
Appendix 5
Appendix 5
17	 Appendix 5 – Science and Risk-
Based Development and Use of the
Risk Assessment
The process described in this Appendix uses a risk assessment to determine the risks to system product quality due
to the equipment and defines the associated risk controls that must be in place in order to provide an acceptable risk
profile for a system.

### 17.1 Defining the Risk Assessment Process

In order to define the scope, and align it to that of traditional Installation Qualification/Operational Qualification (IQ/
OQ) or combined Installation and Operational Qualification (IOQ), this Guide uses the following assumptions:
•
The output of the system is considered to be the Product
•
The inputs to the system are considered to be Qualified i.e., meet specification
•
The aspects that are reviewed are those within the system boundary
•
The focus is on product quality (patient safety)
•
To avoid the assessment becoming a very detailed FMEA, which would not achieve the program goal, the
maintenance and calibration quality systems are considered to be in place and effective
Information used for the risk assessment includes:
•
Critical Quality Attributes (CQAs)
•
Critical Process Parameters (CPPs)
•
Potential risk to product quality
•
Source of the risk
•
Risk controls (design/procedural)
•
Means of detection of the risk should the controls fail
An initial draft risk assessment may be generated by a small number of SMEs in order to make the process more
efficient. The information generated should include a system description and control strategy, to ensure that there is a
clear definition of the scope of the assessment and a clear understanding of how the system operates.
The initial draft risk assessment and supporting information can be reviewed and scored by a larger team of SMEs
led by an experienced facilitator, to help to ensure that the operating knowledge and experience of site personnel is
captured. The larger team should be composed of the small number of SMEs and additional representatives from
quality/validation, operations, and engineering groups/departments.
[PAGE 90]
Appendix 5
Controlled Temperature Chamber Mapping and Monitoring
The following actions are usually predefined:
•
Low risks are accepted
•
Medium risks can be accepted by the team, or the team can elect to add additional controls to reduce the risk
•
High risks should have additional controls added to become medium or low risks (Tables provided in this Section
of the Guide show recommended scoring values). The risks are scored using the Tables below based on the
design and the planned content of the operational and maintenance procedures.
Note: these Tables are examples and are not exclusive. Various high risk assessment gauges and tables are
available.
Table 17.1: Risk Assessment Chart
Rating
SEVERITY of the Effect of
Failure
Likelihood of OCCURRENCE
Ability to DETECT the Failure
Severe: Serious impact to a
critical quality attribute of the
output of the system/equipment
Impact to final product critical
quality attribute
Frequent: Failure is almost
inevitable
Consistent failures observed
(e.g., once a week or several
times a month)
Absolutely uncertain: Existing
controls cannot detect the failure
No controls are in place
Major: Significant impact to a
critical quality attribute of the
output of the System/equipment
Possible impact to final product
critical quality attribute
Likely: Failure is likely and will
occur in most circumstances
Repeated failures observed
(e.g., once a month or several
times a year)
Remote: Remote chance that
controls will detect the failure
A control may be in place but is
untested or unreliable
Moderate: Possible impact to
a critical quality attribute of the
output of the system/equipment
No impact to final product critical
quality attribute
Occasional: Failure is probable
at some time and has been
observed (e.g., once every 1 to
2 years)
Moderate: A moderate chance
that the control will detect the
failure
Minor: Minor impact to a critical
quality attribute of the output of
the system/equipment
No impact to final product critical
quality attribute
Unlikely: Failure could occur at
some time
Only isolated incidents observed
(e.g., once every 3 to 5 years)
High: Very likely that the control
will detect the failure (e.g., a
procedural control)
Insignificant: No impact to
QA of the output of the system/
equipment
No impact to final product critical
quality attribute
Remote: Failure is extremely
unlikely
No history of failure
Almost certain: The control
will detect the failure in almost
every instance (e.g., an alarm or
automated function)
Note: that detection must be accomplished internally to be valid.
[PAGE 91]
Controlled Temperature Chamber Mapping and Monitoring
Appendix 5

### 17.2 Scoring the Risk Assessment

Table 17.2: Scoring for Severity and Likelihood of Occurrence
Severity of Risk
Insignificant
Minor
Moderate
Major
Severe
Likelihood of
Occurrence
9	 Frequent
Medium
Medium
High
High
High
7	 Likely
Low
Medium
High
High
High
5	 Occasional
Low
Medium
Medium
High
High
3	 Unlikely
Low
Low
Medium
Medium
High
1	 Remote
Low
Low
Low
Low
Medium
Table 17.3: Scoring for Detection
Note: an interim result can be determined, based on severity and occurrence, using Table 17.2. That result and the
detectability rating are then used in Table 17.3 to determine the final risk level.
The initial draft risk assessment may be performed once the conceptual design is available; this can provide a risk
profile for the proposed design.
If the profile is acceptable, the design may be developed as proposed. If the profile is not acceptable e.g., where
there are high risks, the design should be revised and reassessed, to determine whether it is acceptable.
To finalize the risk assessment, the design should be reviewed against that issued for construction design
specification, and completed with a brief summary report.
The risk assessment provides:
•
A tool to determine the overall risk profile for the proposed system design
•
A vehicle to identify the aspects of the design that are “critical to quality”
Risk Level
from
Table 17.2
Detection
Almost Certain
High
Moderate
Remote
Absolutely
Uncertain
Risk
Classification
High
Low
Medium
High
High
High
Medium
Low
Low
Medium
High
High
Low
Low
Low
Low
Medium
Medium
[PAGE 92]
Appendix 5
Controlled Temperature Chamber Mapping and Monitoring
A risk assessment report usually contains the following sections:
•
A summary, including:
-
System Description and Control Strategy
-
CQAs
-
CPPs
-
Critical Aspects (CAs), where applicable
-
Risk assessment methodology
-
Risk assessment scope
•
Results, including:
-
A summary of the results of each assessment, confirming any medium level risks that have been accepted
by the team
•
Mitigation Plans:
-
Where applicable
•
Communication:
-
Defines where high risks were communicated to senior management for review and acceptance
•
Conclusions
[PAGE 93]
Controlled Temperature Chamber Mapping and Monitoring
Appendix 6
Appendix 6
18	 Appendix 6 – Example Testing Strategies

### 18.1 Example 1: Mapping Strategy for a Walk-in Conditioned Space

This Appendix presents an example of developing the mapping strategy for a 20 ft × 20 ft × 10 ft (6 m × 6 m × 3 m)
space for storage of up to ten double stacked pallets of materials at a controlled room temperature.
1.
The purpose of the facility should be identified. This example facility is to be used for storage of up to ten double
stacked pallets of materials at a controlled room temperature. There are no process steps (e.g., rolling heated
material into the space) that could cause variable heat loads or impact the temperature of other materials located
nearby. Additional mapping probes to detect potential impact on the spaces temperature profile are, therefore,
not needed
2.
The size of the facility is given as 20 ft × 20 ft × 10 ft (6 m × 6 m × 3 m). In general, the three dimensional space
should be divided into at least three planes:
•
Upper level of space
•
Middle level of space
•
Lower level of space
3.
Using the concepts described for spaces up to 70 cubic ft (2 m3), probes should be located on the upper and
lower levels at the four corners of the space and a single probe in the center of the box (see Figure 18.1).

*[Figure 18.1: Mapping Locations for a CRT Space up to 70 cubic feet (2 cubic meters)]*

4.
For spaces up to 700 cubic ft (20 m3), add a probe in the center of each face of the spaces walls, ceiling and floor
(see Figure 18.2).
[PAGE 94]
Appendix 6
Controlled Temperature Chamber Mapping and Monitoring

*[Figure 18.2: Mapping Locations for a CRT Space up to 700 cubic feet (20 cubic meters)]*

5.
For spaces greater than 700 cubic ft (20 m³), the configuration given in Figure 18.2 should be used and
supplementary probes should be added, as appropriate, to demonstrate uniformity of temperature and
conformance with product requirements. There is no definitive standard or regulatory guidance to define the
number of thermocouples or temperature recording devices used in mapping a space. A rule of thumb based
on review of existing facilities is to allow a distance no greater than 30 ft (9 m) between both the horizontal
and vertical direction of sensors. For this example, the volume is 4000 cubic ft (113 m3), so the configuration in

*[Figure 18.2 is appropriate as a starting point. Vertical and horizontal distances are not greater than 30 ft (9 m) so]*

additional probes are not suggested beyond the probes identified in Figure 18.2.
6.
The air supply for the space is a ceiling diffuser with four returns located in each of the corners. There are no
racks, shelves, or other obstructions to air flow within the space. The pallets have the potential to be stacked to
a height of 6 ft (1.8 m), so will not create significant obstruction to air flow. Material will not be stored near the
ceiling along the walls, so there is no concern for “hotspots” in these locations that would not already be detected
by the probes mounted at the middle plane along each of the walls. No additional probes would be suggested
beyond the probes identified in Figure 18.2.
7.
The room is inside a general purpose building that is conditioned throughout the year to 20°C (68°F) so there is
no concern for external temperature extremes compared to the controlled environment that could penetrate the
walls/ceilings/floors, nor create temperature control issues when the door is opened to move material or people.
No additional probes would be suggested (such as near windows, doors, walls, etc.) beyond the probes identified
in Figure 18.2.
8.
There are lights in the facility; however, there is no product to be stored near the fixtures that might be impacted
by heat generated during operation. There are no motors, compressors, computers, or other heat generating
equipment located in the space that might impact temperatures in the immediate vicinity. There are no materials
being stored in the facility that have the potential for exothermic/endothermic reactions that might impact
temperatures in the immediate vicinity. No additional probes would be suggested beyond the probes identified in
Figure 18.2.
9.
The HVAC system consists of a dedicated single air unit which is a recirculation system with a supply fan,
cooling and heating coils. It is located remotely from the space. There is no redundancy which might prescribe
the need to test conditions for each unit or during switchover. There are no defrost cycles that would need to be
identified and included in the testing cycle, and with no defrost cycles, or significantly colder/hotter temperatures
of supply air, there is no need for additional probes to define potential impact on product stored in the immediate
[PAGE 95]
Controlled Temperature Chamber Mapping and Monitoring
Appendix 6
path of supply air. Failure of the air system could have an impact on environmental conditions in the space. This
potential impact should be identified and accounted for in the design of the system. Appropriate testing would
then be performed to demonstrate capability during Commissioning. For this system, the facility is located inside
an environment already controlled to conditions within the limits of the facility; therefore, failure of the air system
would not impact the temperature of the space. If there were a potential, the testing strategy would include
testing under failure conditions to demonstrate how long the facility can maintain conditions appropriate for
storage.

### 18.2 Example 2: Mapping Strategy for a Refrigerator

*[Figure 18.3: Mapping Locations for a Refrigerator]*

A mapping strategy for standard unit refrigerators and walk-in units follows the same development steps as described
in Example 1 for a walk-in unit. Due to the potential for air flow blockage from the shelves and/or material stored on
the shelves, each level should be considered a mapping zone with a complement of probes assigned to each level.
The strategy should consider the unit and potential to relocate intermediate shelves, ideally defining the lower and
upper limits, with the test load designed so that shelving may be moved as required during operation. One concept
that has been successfully used is to define the limiting parameters for the load on a self-adhesive label attached to
the unit door e.g., allow 3in (75 mm) clearance on the side front and rear of the unit, lowest shelf position 4 in (100
mm) from the bottom of the unit, minimum top clearance 4 in (100 mm), maximum room temperature load 20 lb (9
Kg).

*[Figure 18.3 shows a typical layout using five probes per shelf. If shelves allow circulation, the intermediate shelf]*

probes may be replaced with a probe in the center of the refrigerator. Another option is to place three probes per
shelf, alternating corners (front and back) on each level Figure 18.4. An assessment of the potential circulation will
dictate the density option, five per shelf for the poorest circulation (solid shelves densely packed), three per shelf for
intermediate circulation (wire shelves packed very full), and probes in four corners and middle of refrigerator for good
circulation (wire shelves with lots of space for air circulation between contents).
[PAGE 96]
Appendix 6
Controlled Temperature Chamber Mapping and Monitoring

*[Figure 18.4: Alternative Mapping Locations for a Refrigerator]*

Temperatures may be monitored in the load or a suitable buffer to record the load temperature rather than the air
temperature if there is concern for short temporary fluctuations outside of the acceptable ranges due to defrost
cycles, door openings, or other predictable occurrences. The air temperature is affected more by repeatedly opening
and closing the door for smaller systems, due to the temperature differences between the internal space and the
surrounding environment. The volume of stored material can act as a “heat sink” to maintain the temperature of
the space. These loads can be either actual product or simulated product with similar thermal properties. If using
simulated product, what is being used and how it is comparable (e.g., 20 ml of water is being used instead of insulin
because the thermal properties of water are identical to insulin and will behave in the same manner as insulin
stored in this facility and the smallest container stored in the facility is 20 ml) should be documented. The internal air
temperature distribution should be mapped in the empty and full state to demonstrate operating capability throughout
all states of content. Full state is defined as the maximum amount anticipated being stored in the unit (this should
follow manufacturer’s recommendations and be aligned with the requirements in the URS) provided the rationale
and control over operational conditions is documented. Afterwards temperature distribution should be checked under
conditions of normal use.
[PAGE 97]
Controlled Temperature Chamber Mapping and Monitoring
Appendix 6

### 18.3 Example 3: Warehouse Mapping Layout and Rationale

The development of a mapping strategy for a warehouse should follow the steps identified above. For example, start
with the basic room configuration identified in Figure 18.5. Temperature probes are positioned so that there is not
more than 30 ft (9 m) vertical separation or 30 ft (9 m) of horizontal separation.

*[Figure 18.5: Mapping Locations for a Warehouse (basic configuration)]*

Identify air flow restrictions based on the location of the air supply and location/orientation of full pallet racks, drums,
tanks etc. Additional temperature probes should then be added in areas of restricted airflow. In the case of full racks
and/or shelves, the restricted air flow may impact the temperature profile so additional probes should be added based
on expected air flow pattern.

*[Figure 18.6 shows how the locations for additional monitoring probes could be added if the area conditioning air]*

supply is from one direction as indicated in the drawings.

*[Figure 18.6: Mapping Locations for a Warehouse (where HVAC is from one direction)]*

[PAGE 98]
Appendix 6
Controlled Temperature Chamber Mapping and Monitoring
Mapping of warehouses requires both empty and full state (again, full is defined as the maximum amount anticipated
being stored in the facility). In the case of warehouses, the mass of the material is not as significant a factor as the
volume, in terms of altering air flow patterns. The full state may be met by simulating the rack loads with empty
storage containers (cartons, boxes, pallet boxes, etc.) to obstruct the air flow patterns, as they would when holding
actual product. However, if the heating/cooling is provided centrally, the racking nearest the walls may be considered
as a layer of insulation; therefore, thermal mass would influence performance. This should be considered when
developing the strategy and defining the test strategy. It may be achieved by loading a representative section of
racking with a simulated load incorporating thermal mass.
Mapping of controlled room temperature warehouses has the same requirements.
With this mapping strategy outlined, the probe locations should be reviewed again to verify and document the
locations critical to the facility capability.

#### 18.3.1 Warehouse Load Testing

When defining how the unit will be tested, the following should be considered:
•
Is the area used to condition the stored material, or does it arrive within the specified conditions?
•
What is the worst case condition:
-
An empty store with the maximum specified load arriving at the most extreme conditions permitted?
-
A store with the maximum load; this may be considered in terms of the impact of the thermal mass or load
volume impeding airflow?
Note: it is typically considered that testing to represent the extreme conditions, empty and fully loaded, provides
adequate assurance of operation in partially loaded conditions. Where a system is divided into zones, the load testing
may be justified on a zone basis.
•
What will be the worst case conditions in use:
-
Doors held open for the maximum specified time in extreme environmental conditions?
The area/System Owner may also want to use this opportunity to test system performance with simulated cooling
equipment component failures, to provide data that may be useful to defend continued use of the system during
operation with an equipment failure.
For more examples showing suggestions for mapping temperature sensor layout and supporting rationale for some
common cold room layouts, see Section 9.
18.3.2	 Summer/Winter Testing
An organization may use a risk assessment to determine if seasonal testing is required. Risk mitigation factors to
consider include:
•
A robust software program was used to calculate the HVAC design/predict area performance
•
The commissioning practices used for the HVAC system confirm that the components perform to meet the design
specification (e.g., fan volumes with clean and simulated dirty filters, heating and cooling coil capacities)
[PAGE 99]
Controlled Temperature Chamber Mapping and Monitoring
Appendix 6
•
The number and location of the monitoring sensors are adequate to provide evidence if the environment exceeds
the specified conditions (“continuous mapping” in effect)
•
Impact of external temperature extremes (when conditions are expected to exceed limits of normal operation by
± 6°C (± 10°F) for greater than 3 hours). Unless the warehouse is located in a temperate geographic location and
not subject to extreme temperatures, the mapping exercise should be performed both during summer and winter
in order to assess the worst case scenarios, as extremes of temperature may adversely affect the temperature
distribution within the warehouse storage area due to insulation capabilities, equipment performance, and other
factors
•
If initial mapping is performed under conditions of extreme external temperature, then one supplemental mapping
should be performed within the first year to test under the opposite season i.e., one with heating and one with
cooling. If the initial mapping cannot be performed during one of these extreme conditions, this could be allowed
for in the monitoring strategy e.g., by provision of additional sensors, or identification of the hot/cold spots during
the heating/cooling seasons. The full state could also be tested in the subsequent seasonal remapping, as:
-
Seasonal testing is required for installations that could be impacted by seasonal extremes
-
A warehouse is not typically filled to capacity in the first six months
Alternatively, organizations may perform mapping of warehouses over a full year. The external conditions are
compared to the specified design conditions, and a judgment made to determine if the results adequately represent
all seasons (likely seasonal extremes). These results are used to help define locations for the permanent monitoring
locations and to ensure that locations consider the impact of seasonal variations on the locations likely to experience
minimum/maximum temperatures. These uses should be taken into consideration during the comparison of the
results.
For controlled temperature rooms, e.g., cold rooms, it may be considered adequate to map the system once, on the
basis that the surrounding environment is controlled and the monitoring system provides adequate assurance that
the internal conditions are being maintained, any impact from the outside temperatures on the performance of the
heating/cooling system would be visible from the monitoring system, as the temperature profiles in the conditioned
space would not be affected.
The rationale for the load and seasonal testing should be defined in a document that is reviewed and approved by the
Quality Unit and the area/System Owner.
A sample document is included in Appendix 2.
It is considered good practice to review the initial monitoring data and compare the results with the defined
requirements of the URS, to ensure that the requirements have been met.
Where user requirements have not been met, the designer/supplier should be asked to review the data and make
recommendations for corrective action, to ensure that the system complies with the design specification. Depending
on the contracts in place these modifications may be at the design authority’s or equipment supplier’s expense, and
should be managed through engineering change management.
The USP provides guidance in General Chapter <659> Packaging and Storage Requirements” [11].
[PAGE 100]
Appendix 6
Controlled Temperature Chamber Mapping and Monitoring

### 18.4 Example 4: Test Document/Protocol

A. Define the system to be tested and confirm the calibration of the instrumentation to be used. The response time8
for the instrumentation IEST-RP-CC006.3 [27] recommends a 63.2% time constant of no more than 15 seconds
for areas with stricter environmental control specifications. This correlates to 75 seconds to achieve 99% (five
time constants). This response time should be taken into account when matching temperature sensors with the
analytical procedure. The system used should be selected keeping in mind the temperature accuracy required
of the facility probes, qualification requirements for the mapping instrumentation, data collection, output and
retention capabilities, and compliance with the appropriate electronic record requirements (21 CFR Part 11 [25]/
Eudralex Annex 11 [28]).
B. Define the facility operations (static versus dynamic activities to simulate operational states) and control systems
(set points, operational parameters)
C. Define acceptance criteria/expected results as appropriate
D. Probe type and locations Note the strategy defined the rationale for locations
E. Define the load test and sequence of loading/unloading
F.
Define how test issues will be resolved
G. Define pre-test requirements (commissioning, calibration, signage, training, etc.)
H. Define test steps, mapping under various operational states such as defrost cycles, switch between redundant
systems, door openings, people activity, power loss, etc.
I.
Record test start and stop times
J.
Record testers
K. Provide space for analysis of data with recommendations for actions if required
8 Instrument time response is usually quoted as: “T10-90% or T90-10%. (Referring to rise and fall times respectively) when the instrument is subject
to a step change in the input, i.e., the temperature recording system needs to respond faster that conditions are likely to change in order to get an
accurate reading – though note that the material stored will have a response time as well – but when testing the goal is to get accurate information to
get a complete understanding of how the equipment is performing.”
[PAGE 101]
Controlled Temperature Chamber Mapping and Monitoring
Appendix 7
Appendix 7
19	 Appendix 7 – Templates and Attachments

### 19.1 Example Science and Risk-Based Approach for Periodic Review of a Controlled

Temperature Chamber

#### 19.1.1 Procedure – Categorize the Controlled Temperature Chamber: Based on Material Stored and

Temperature Range
Systems are categorized for the purposes of periodic review considering the system operating temperature range,
and the material stored.
•
Stored Material Type A: for example, API, drug product, stability sample(s), cool/hot packs used to maintain
temperature during transportation (if the cool/hot pack temperature is not verified before use)
•
Stored Material Type B: for example, Work in Progress (WIP), Reference Standards, critical reagents, raw
materials
•
Stored Material Type C: for example, Environmental Monitoring (EM) supplies and reagents, media, test
materials
Table 19.1: Review Category Based on Material Stored and Temperature Range

#### 19.1.2 Periodic Review Process

The periodic review process must be carried out as follows:
•
Category 1 Controlled Temperature Chambers: periodic review not to exceed three years from the previous
review
•
Category 2 Controlled Temperature Chambers: periodic review not required; system performance verification
must be conducted through a defined maintenance job plan
•
Category 3 Controlled Temperature Chambers: system performance verification and periodic review is not
required
There are two methods that may be used to perform the periodic review of the Controlled Temperature Chamber.
Stored Material
Type
Precision Unit:
Temperature Range
≤ ± 6°C
Standard Unit:
Temperature Range
> ± 6°C
Conditioned Room:
Controlled Room
Temperature*
A
B
C
* as defined in USP
[PAGE 102]
Appendix 7
Controlled Temperature Chamber Mapping and Monitoring

##### 19.1.2.1 Method One: Periodic Review Report – Risk-Based Approach

This method considers risks to the system performance. An example for the Periodic Review Report is shown below.
Template Report for Validation Periodic Review for Controlled Temperature Chamber Summary
The Controlled Temperature Chamber is used for the storage of…
The periodic review considers the following aspects:
•
Internal layout and loading:
-
Are there any changes that could impact the system performance?
•
Insulation
-
Are there any changes, or is there any degradation of the insulation capability, of the Controlled Temperature
Chamber shell?
•
Cooling System
-
Is the cooling system still operating with performance aligned with the as commissioned/qualified state?
The following is an example of a periodic review for a Controlled Temperature Chamber. The actual review should
replace the text given in green as necessary:
Example:
The results of this review are contained in the report below.
There is nothing in the review to indicate that the original mapping results will have changed, the data from the
monitoring system still shows that the system is operating within the operating limits, it is therefore considered fit for
continued use.
[PAGE 103]
Controlled Temperature Chamber Mapping and Monitoring
Appendix 7
Example Assessment Report with Draft Content9
Reference
Aspect
Review
Conclusion
Internal Layout

### 1.1 Racking/ Storage

Locations
The racking layout and defined storage
locations remain as defined in the
commissioning and qualification file per review
of the current installation and operations SOP-
xxx with the C&Q report RPT-yyyy
The locations used to store material remain
unchanged, so the effect on the unit airflow
and temperature distribution has not changed

### 1.2 Stored Material

The size and or mass of the stored material
that was defined in the test strategy or as used
for the commissioning and qualification has not
changed
The size and mass of the material used for
the load testing of the Controlled Temperature
Chamber remains representative of the
material currently stored in the Controlled
Temperature Chamber, hence the performance
will not have changed
Insulation

### 2.1 Shell

PM number requires an annual thermal scan
of the system verifying the surface temperature
remains consistent with the as installed
readings, and there are no hot or cold spots, or
visual inspection and a review of the cycle time
of the refrigeration plant.
The thermal scan is consistent with those
taken during initial operation confirming that
there is no degradation of performance, or
a visual inspection and a review of the cycle
times show no significant degradation.

### 2.2 Utility Penetrations

Visually inspect the Controlled Temperature
Chamber penetrations looking for any leakage
or condensation.
The Controlled Temperature Chamber was
inspected – all utility penetrations are in good
repair with no sign of leakage or condensation.

### 2.3 Access Door

The door, door seals, and vinyl internal curtain
were inspected.
The door, door seals, and vinyl curtain are in
good condition. The vinyl curtain sits on the
side of the unit with no air gap and just touches
the floor so there is no friction to prevent it
closing and no significant air gap.
Cooling System

### 3.1 Operating History

Review alarm history for the refrigeration units
and determine if the frequency is normal/
acceptable.
The alarm history was reviewed, with a total of
12 engineering alarms, and no quality alarms;
all engineering alarms were resolved while
keeping the unit inside the operational limits.

### 3.2 Maintenance

Confirm that there is a PM that checks
duty standby function, and reviews system
operating settings, and that the refrigeration
system major components are as installed.
The automatic duty standby changeover
function is routinely checked, the refrigeration
system has not been changed and the system
operating parameters: suction and delivery
pressure for both systems are within the
manufacturer’s tolerances, indicating that the
system is operating normally.

### 3.3 Monitoring

The data from the independent monitoring
system shows that the system is operating
within the operating limits with no indication of
a degradation in performance.
A review of the system monitoring data
shows that the system is still operating within
the operating limits with no indication of a
degradation in performance.

### 3.4 Alarm Function

Confirm system and independent alarms
tested.
Alarms tested: all function correctly at the
defined set points, with the delay periods
assigned as noted in the attached sheet.
Note: example text is shown in green italic.
9 The draft content should be revised to suit the specific application.
[PAGE 104]
Appendix 7
Controlled Temperature Chamber Mapping and Monitoring
•
Revise the template report to reflect the findings for the Controlled Temperature Chamber under review.
•
Record the results of the review into the Periodic Review Report, recording the location of the information, and
attaching copies where appropriate
•
Define any actions required after review of the information
•
The report summary must state if the system is considered suitable for ongoing use
•
If it is concluded that the system is not suitable for ongoing use, a nonconformance shall be utilized to define the
actions required, and manage their completion
•
The Periodic Review Report be reviewed and approved by the System Owner or delegate and Quality Unit

##### 19.1.2.2 Method Two: Periodic Review Report – Remapping

As an alternative to method one, the Controlled Temperature Chamber may be remapped.
Remapping should consider the following aspects:
•
Loading/unloading of the unit
•
The impact of the load on the unit temperature distribution
•
The impact of unit defrost on the unit temperature distribution
The test plan supporting rationale and mapping acceptance criteria should be approved by the System Owner or
delegate and Quality Unit.
The results of the mapping shall be used to confirm the number and location of the monitoring probes, or provide the
rationale to support modifications to the monitoring system.
Record the results of the remapping into the Review Report. The report summary shall define if the system is
considered suitable for ongoing use, and shall be approved by the System Owner or delegate, and Quality Unit.
If it is concluded that the system is not suitable for ongoing use, a nonconformance shall be utilized to define the
actions required, and manage their completion.
[PAGE 105]
Controlled Temperature Chamber Mapping and Monitoring
Appendix 7

### 19.2 Example Job Hazard Analysis Worksheet

JHA Title:
Formaldehyde Disinfection of Enclosure Type Equipment
JHA Number:
Project Name:
Site:
Project Number:
Bldg/Rm#:
General Contractor:
Contractor Services
Prepared By:
John Smith
Contractor(s):
N/A
Date:
2/7/2016
Craft(s):
Field Service Technician
Scheduled Start
Date:
Reviewed By:
Date:
Briefly Describe
Task:
Perform formaldehyde vapor disinfection of Enclosure Type Equipment
Required PPE:
Lab coat, safety glasses
Supplemental PPE:
Tyvek suit, full face respirator with formaldehyde cartridges, gloves
Required Permits:
None
Competent
Persons(s):
John Smith
General Comments:
Contractor Services workers will set up and perform formaldehyde vapor disinfection of Equipment.
Contractor Services will follow procedures outlined in Contractor Services SOP 82 to complete this
work.
Only Contractor Services personnel will be allowed in the rooms after 5 pm on evening of generation
of formaldehyde vapor in the equipment. Disinfection will continue overnight, with neutralization and
venting occurring the following morning. Process will generally be completed by 10 am the morning
after formaldehyde generation and disinfection.
Personal Exposure Level monitors will be set up to detect any formaldehyde leakage from
the equipment during the disinfection process. Any leakage detected will be reported on the
Decontamination Report. Contractor Services will use short-term monitoring to assure formaldehyde
levels in the enclosures have fallen below 0.5 ppm before releasing units back to the client.
•
Workers shall review the Company Review Comment Record and comply.
•
Workers shall sign the JHA verifying they have reviewed and will comply with the contents.
•
A copy of the JHA will be kept at the work area available for review.
Work Operation
Potential Accidents or Hazards
Safe Job Actions Needed
1.	 Preliminary Setup
A.	 Workers not understanding job or not trained
to perform job.
A.1 Scope of work will be communicated to all
workers scheduled to perform work on the job.
A.2 All Contractor Services workers on site to
perform job are trained on appropriate SOPs
related to job.
B.	 Units not ready for disinfection.
B.1 Contractor Services will verify all units
scheduled for disinfection are cleared of all
equipment and materials.
B.2 Contractor Services will verify all units are
disconnected from wall/room outlets.
[PAGE 106]
Appendix 7
Controlled Temperature Chamber Mapping and Monitoring
JHA Title:
Formaldehyde Disinfection of Enclosure Type Equipment
JHA Number:
Project Name:
Site:
Project Number:
Bldg/Rm#:
Work Operation
Potential Accidents or Hazards
Safe Job Actions Needed
C.	 HVAC system in room not operating and/or no
power to room lights and receptacles.
C.1 Contractor Services will contact Company
facilities/JLL upon arrival on site to confirm HVAC
systems are operating normally.
C.2 Contractor Services will check that lights in
room are operating normally and wall receptacles
are powered up.
2.	 Setup
A.	 Breach of unit enclosure
A.1 Inspect entire enclosure for any damage that
would indicate a breach of containment.
A.2 Seal any suspected areas of breach of
containment with adhesive tape.
B.	 Disinfection equipment not working correctly
B.1 Perform function tests on all equipment,
including evaporator pans, extension cords and
adsorber cell filters.
C.	 Disinfection of enclosures not set up correctly
C.1 Confirm proper amounts of paraformaldehyde
and ammonium bicarbonate are distributed in the
appropriate evaporator pans.
C.2 Confirm all openings of enclosure are sealed
with plastic sheeting and/or adhesive tape.
C.3 Have enclosure under -0.005" WC to -0.01"
WC negative pressure by connecting enclosures
to exhaust via ducting to auxiliary fan or exhaust
system, with adsorber cell filter connected in-
line to filter all formaldehyde vapor leaving the
enclosure.
3.	 Formaldehyde
vapor generation
A.	 Personnel exposed to formaldehyde vapor
A.1 Hang signs on all enclosures undergoing
disinfection and on all doors entering the room to
prevent non-Contractor Services personnel from
entering the lab or modifying disinfection setup.
A.2 Contractor Services will continuously monitor
room during vapor generation in the sealed
enclosures for any formaldehyde leakage into the
room.
A.3 If concentration exceeds 0.2 ppm at any
time, Contractor Services personnel will don all
PPE and will disconnect paraformaldehyde pan
and turn on the ammonium bicarbonate pan to
neutralize the formaldehyde vapor.
[PAGE 107]
Controlled Temperature Chamber Mapping and Monitoring
Appendix 7
JHA Title:
Formaldehyde Disinfection of Enclosure Type Equipment
JHA Number:
Project Name:
Site:
Project Number:
Bldg/Rm#:
Work Operation
Potential Accidents or Hazards
Safe Job Actions Needed
4.	 Exposure/contact
period
A.	 Lab or personnel exposed to formaldehyde
vapor
A.1 Signs will be posted on all doors entering
the room overnight cautioning personnel from
entering the room or modifying disinfection in any
way.
A.2 If no formaldehyde leakage is detected during
generation (see 3 above) Contractor Services
will leave site in steady state with enclosures
completely sealed and under negative pressure.
Contractor Services will be available for contact
via cell phone # posted around the site.
B.	 Loss of power to HVAC system or loss of
electrical power
B.1 Enclosures are completely sealed with in-line
adsorber cell connected to only opening from
enclosures, preventing any formaldehyde vapor
from escaping.
5.	 Neutralization and
ventilation
A.	 Loss of power to HVAC system or loss of
electrical power
A.1 Contractor Services will be on site during
neutralization and ventilation process. Contractor
Services personnel will take steps to minimize
any exposure to lab of any residual formaldehyde
by donning all PPE and preventing any non-
Contractor Services personnel from entering the
lab in the event of power loss.
A.2 If ventilation is already in process, Contractor
Services will wait on site until restoration of power
to evacuate ammonium bicarbonate residue in
enclosures.
6.	 Re-establishment
of preexisting
conditions
A.	 Exposure to lab of formaldehyde vapor or
ammonium bicarbonate
A.1 Contractor Services personnel will clean
and wipe down all exposed surfaces exposed
to formaldehyde vapor during the disinfection
process following procedures outlined in
Contractor Services SOP 82 to eliminate chemical
residue.
A.2 Contractor Services will monitor interior of
enclosures to assure formaldehyde concentration
is below 0.5 ppm, at which time enclosures can
be released back to Company.
Note: example text is shown in green italic.
[PAGE 108]
[PAGE 109]
Controlled Temperature Chamber Mapping and Monitoring
Appendix 8
Appendix 8
20	Appendix 8 – References
1.
ISPE Concept Paper: Controlled Temperature Chamber Mapping, International Society for Pharmaceutical
Engineering (ISPE), Packaging Community of Practice (COP) April 2012, www.ispe.org.
2.
ISPE Good Practice Guide: Cold Chain Management, International Society for Pharmaceutical Engineering
(ISPE), First Edition, May 2011, www.ispe.org.
3.
IA-G0046-2 Guide to Good Distribution Practice of Medicinal Products for Human Use, Health Products
Regulatory Authority (HPRA) (previously the IMB), 10 April 2014, https://www.hpra.ie/docs/default-source/
publications-forms/guidance-documents/ia-g0046-guide-to-good-distribution-practice-of-medicinal-products-for-
human-use-v2.pdf?Status=Master&sfvrsn=8.
4.
IA-G0011-1 Guide to Control and Monitoring of Storage and Transportation Temperature Conditions for Medicinal
Products and Active Substances, Health Products Regulatory Authority (HPRA) (previously the IMB), 5 October
2011, https://www.hpra.ie/docs/default-source/publications-forms/guidance-documents/ia-g0011-guide-to-control-
and-monitoring-of-storage-and-transportation-conditions-v1.pdf?Status=Master&sfvrsn=16.
5.
Guidelines of 7 March 2013 on Good Distribution Practice of Medicinal Products for Human Use (2013/C 68/01),
European Medicines Agency (EMA), Official Journal of the European Union, http://eur-lex.europa.eu/LexUriServ/
LexUriServ.do?uri=OJ:C:2013:068:0001:0014:EN:PDF.
6.
PIC/S Guide: PE 011-1 Good Distribution Practice for Medicinal Products, Pharmaceutical Inspection Convention
Pharmaceutical Inspection Co-Operation Scheme (PIC/S), June 2014, www.picscheme.org.
7.
Guidelines of 5 November 2013 on Good Distribution Practice of Medicinal Products for Human Use (Text with
EEA relevance) (2013/C 343/01), European Commission, Official Journal of the European Union, http://eur-lex.
europa.eu/LexUriServ/LexUriServ.do?uri=OJ:C:2013:343:0001:0014:EN:PDF.
8.
Guidelines for Temperature Control of Drug Products during Storage and Transportation (GUI-0069), Health
Canada, 2011, http://www.hc-sc.gc.ca/dhp-mps/alt_formats/pdf/compli-conform/gmp-bpf/docs/GUI-0069-eng.pdf.
9.
WHO Technical Report Series, No. 961 – Forty-fifth Report, Annex 9: Model Guidance for the Storage and
Transport of Time- and Temperature-Sensitive Pharmaceutical Products (jointly with the Expert Committee
on Biological Standardization), World Health Organization (WHO) Expert Committee on Specifications for
Pharmaceutical Preparations, 2011, http://apps.who.int/medicinedocs/documents/s18652en/s18652en.pdf.
10.	 MCA Part II, Chapter 6, Control and Monitoring of Storage and Transit Temperatures, http://temptrust.mesalabs.
com/wp-content/uploads/sites/47/2012/05/MHRAcon007569.pdf.
11.	 USP <659> Packaging and Storage Requirements, US Pharmacopeial Convention, www.usp.org.
12.	 ISPE Baseline® Pharmaceutical Engineering Guide, Volume 5 – Commissioning and Qualification, International
Society for Pharmaceutical Engineering (ISPE), First Edition, March 2001, www.ispe.org.
13.	 USP <32> General Notices and Requirements: Applying to Standards, Test, Assays, and Other Specifications, of
the United States Pharmacopeia, Section 7.20 Rounding Rules, US Pharmacopeial Convention, www.usp.org.
14.	 JTM K 01 Temperature and Humidity Chambers – Test and Indication Method for Performance, Japan Testing
Machinery Association (JTM), http://www.jtma.jp/.
[PAGE 110]
Appendix 8
Controlled Temperature Chamber Mapping and Monitoring
15.	 JTM K 03 Environmental Temperature and Humidity Rooms – Test and Indication Method for Performance,
Japan Testing Machinery Association (JTM), http://www.jtma.jp/.
16.	 JTM K 05 High Temperature Chambers – Test and Indication Method for Performance, Japan Testing Machinery
Association (JTM), http://www.jtma.jp/.
17.	 FD X15-140 Measurement of Air Moisture – Climatic and Thermostatic Chambers – Characterization and
Verification, Association Francaise de Normalisation, 2013, http://infostore.saiglobal.com/emea/details.
aspx?ProductID=1639789.
18.	 DIN 12880 Electrical Laboratory Devices – Heating Ovens and Incubators, Deutsches Institut für Normung e.V.
(DIN), 2007, http://www.din.de/en/standards/din-12880/97210882.
19.	 AS 2853 Enclosures – Temperature Controlled – Performance Testing and Grading, Australian Standard®, http://
infostore.saiglobal.com/store/details.aspx?ProductID=286887.
20.	 IEC 60068 Environmental Testing Series, International Electrotechnical Commission (IEC), http://www.iec.ch/.
21.	 ASTM Standard E2500-13, “Standard Guide for Specification, Design, and Verification of Pharmaceutical and
Biopharmaceutical Manufacturing Systems and Equipment,” ASTM International, West Conshohocken, PA, www.
astm.org.
22.	 ISPE Guide: Science and Risk-Based Approach for the Delivery of Facilities, Systems, and Equipment,
International Society for Pharmaceutical Engineering (ISPE), First Edition, June 2011, www.ispe.org.
23.	 TSO-C90c Cargo Pallets, Nets, and Containers, Technical Standard Order (TSO), Department of Transportation,
Federal Aviation Administration (FAA), http://www.caa.gov.tw/BIG5/download/fsd/C90c.pdf.
24.	 ISPE Good Practice Guide: Maintenance, International Society for Pharmaceutical Engineering (ISPE), First
Edition, May 2009, www.ispe.org.
25.	 21 CFR Part 11 – Electronic Records; Electronic Signatures, Code of Federal Regulations, US Food and Drug
Administration (FDA), www.fda.gov.
26.	 National Standards Authority of Ireland (NSAI) – National Metrology Laboratory (NML), http://www.nsai.ie/nml.
aspx.
27.	 IEST-RP-CC006.3 Testing Cleanrooms, Institute of Environmental Sciences and Technology (IEST), http://www.
iest.org/Standards-RPs/Recommended-Practices/IEST-RP-CC006.
28.	 EudraLex Volume 4 – Guidelines for Good Manu39facturing Practices for Medicinal Products for Human and
Veterinary Use, Annex 11 – Computerized Systems, June 2011, http://ec.europa.eu/health/documents/eudralex/
vol-4/index_en.htm.
29.	 Technical Report No. 52, Guidance for Good Distribution Practices (GDPs) for the Pharmaceutical Supply Chain,
2011, Parenteral Drug Association (PDA), www.pda.org.
30.	 Technical Report No. 64, Active Temperature-Controlled Systems: Qualification Guidance, 2013, Parenteral Drug
Association (PDA), www.pda.org.
31.	 IEC Publication 584: Thermocouples, International Electrotechnical Commission (IEC), www.iec.ch.
32.	 IEC Publication 751: Resistance Temperature Detectors, International Electrotechnical Commission (IEC), www.
iec.ch.
[PAGE 111]
Controlled Temperature Chamber Mapping and Monitoring
Appendix 9
Appendix 9
21	 Appendix 9 – Glossary

### 21.1 Acronyms and Abbreviations

AL
Alternating Current
API
Active Pharmaceutical Ingredient
ASHRAE
American Society of Heating, Refrigerating and Air-Conditioning Engineers
ATP
Agreement on the International Carriage of Perishable Foodstuffs and on the Special Equipment
to be Used for such Carriage (EU)
BAS
Building Automation System
BMS
Building Management System
CRT
Controlled Room Temperature
COD
Critical Operational Data
CPP
Critical Process Parameter
CQA
Critical Quality Attribute
DC
Direct Current
EHS
Environment, Health, and Safety
FAT
Factory Acceptance Test
FMEA
Failure Mode Effects Analysis
GDP
Good Distribution Practice
GSM
Global System for Mobile
HMI
Human Machine Interface
HVAC
I/O
Input/Output
IQ
Installation Qualification
OQ
Operational Qualification
MCC
Motor Control Center
MU
Measurement Uncertainty
OQ
Operational Qualification
[PAGE 112]
Appendix 9
Controlled Temperature Chamber Mapping and Monitoring
P&ID
Piping and Instrumentation Diagram
RH
Relative Humidity
RTD
Resistance Temperature Detector
SME
Subject Matter Expert
SOP
Standard Operating Procedure
TCCU
Temperature Controlled Cargo Unit
TMC
Technology & Maintenance Council (US)
ULD
Unit Load Devices
UPS
Uninterruptible Power Supply
URS
User Requirements Specification
USP
United States Pharmacopeia
VDC
Volts of Direct Current
WIP
Work in Progress

### 21.2 Definitions

Building Management System (BMS)
A computerized system that controls, monitors, and optimizes building services, this may include environmental
conditions, heating and cooling systems, elevator systems, lighting, and security.
Cold
Any temperature not exceeding 8°C (46°F) is cold. A refrigerator is a cold place in which the temperature is
maintained thermostatically between 2° and 8°C (36° and 46°F).
Cool
Any temperature between 8° and 15°C (46° and 59°F) is cool. An article for which storage in a cool place is directed
may, alternatively, be stored and distributed in a refrigerator, unless otherwise specified by the individual monograph.
Commissioning
A well planned, documented, and managed engineering approach to the start-up and turnover of facilities, systems,
and equipment to the end-user, that results in a safe and functional environment that meets established design
requirements and stakeholder expectations
[PAGE 113]
Controlled Temperature Chamber Mapping and Monitoring
Appendix 9
Controlled Cold Temperature (CCT)
Temperature maintained thermostatically between 2° and 8°C (36° and 46°F), that allows for excursions in
temperature between 0° and 15°C (32° and 59°F) that may be experienced during storage, shipping, and distribution
such that the allowable calculated mean kinetic temperature is not more than 8°C (46°F).
Controlled Room Temperature (CRT)
Temperature maintained thermostatically that encompasses the usual and customary working environment of 20° to
25°C (68° to 77°F); that results in a mean kinetic temperature calculated to be not more than 25°C; and that allows for
excursions between 15° and 30°C (59° and 86°F) that are experienced in pharmacies, hospitals, and warehouses.
Dry Place
A place that does not exceed 40% average relative humidity at Controlled Room Temperature or the equivalent water
vapor pressure at other temperatures.
Engineering Change Management (ECM) (ASTM E2500)
Prior to system or facility acceptance, changes managed by an approved through SMEs. Changes affecting Critical
Aspects should be communicated to the Quality Unit.
Excessive Heat
Any temperature above 40°C (104°F).
Equipment Qualification
Confirming that there is adequate documentation to confirm that equipment is installed and operates according to its
specifications, and is fit for its intended use.
Freezer
A place in which the temperature is maintained thermostatically between -25° and -10°C (-13° and 14°F).
Note: the freezing point is defined as the temperature at which a liquid substance turns to a solid. The term frozen is
applied to the solid product.
Good Engineering Practice (GEP)
A system whereby individual design decisions are performed by qualified personnel and documented so that they
can be traced from user requirements through final design. GEP documentation considers purpose, responsible
party, references, assumptions, calculation method, conclusions, and impact upon other facets of design. GEPs take
industry practices, constructability, economics, regulatory requirements, and safety into account.
Mean Kinetic Temperature (MKT)
The single calculated temperature at which the total amount of degradation over a particular period is equal to the
sum of the individual degradations that would occur at various temperatures.
[PAGE 114]
Appendix 9
Controlled Temperature Chamber Mapping and Monitoring
Periodic Review
A documented assessment of documentation, procedures, records, and performance to ensure that facilities,
equipment, and systems continue to be fit for purpose and safety regulatory compliance requirements. The frequency
of periodic review is dependent upon the complexity, criticality, and rate of change.
Protection from Freezing
Where, in addition to the risk of breakage of the container, freezing subjects an article to loss of strength or potency
or to destructive alteration of its characteristics, the container label bears an appropriate instruction to protect the
article from freezing.
Qualification (FDA)
Activities undertaken to demonstrate that utilities and equipment are suitable for their intended use and perform
properly.
Quality Unit (QU)
The Quality Unit has a key role within the quality management system governing facilities, systems, and equipment.
In addition to acting as a Subject Matter Expert (SME), the Quality Unit is responsible for overseeing quality and
compliance.
Sensor (FDA)
A peripheral input device which senses some variable in the system environment, such as temperature, and converts
it to an electrical signal which can be further converted to a digital signal for processing by the computer. Publication
Source: FDA Glossary of Computerized System and Software Development Technology.
Warm
Any temperature between 30° and 40°C (86° and 104°F).
[PAGE 115]
[PAGE 116]
600 N. West Shore Blvd., Suite 900, Tampa, Florida 33609 USA
Tel: +1-813-960-2105, Fax: +1-813-264-2816
www.ISPE.org