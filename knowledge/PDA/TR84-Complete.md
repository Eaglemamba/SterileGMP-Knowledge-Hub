# PDA Technical Report No. 84 (2020): Integrating Data Integrity into Manufacturing and Packaging Operations

## 1.0 Technical Report No. 84

## 1.0 Introduction and Scope

Data integrity is the cornerstone of establishing and maintaining confidence in the reliability of the
data that assures product quality and patient safety. The reliability of manufacturing production
and control data depends on the procedures, systems, processes, and controls in place to ensure data
integrity. In production, these controls start at the point of data creation and continue through the
entire data lifecycle, including the storage of data and the ability to retrieve it later to support the
quality of the products manufactured.
The term “data integrity” has evolved to denote the degree to which data are complete, consistent,
enduring, and available (ALCOA+) as well as the degree to which the characteristics of the data are
maintained for all operations throughout the data lifecycle. Pharmaceutical manufacturers need to
ensure that relevant data are available to document and provide traceability to what occurred, that
the data are attributable to the person who performed the activity and entered the data, and that the
data cannot be deleted, omitted, or in any way modified to misrepresent what occurred. All breaches
of data integrity, whether intentional or unintentional, must be investigated.
Advances in information technology and in-process monitoring sensors, coupled with lower costs of
computer memory and better processors, has resulted in explosive growth in electronic data generation,
acquisition, and storage. Applying a one-size-fits-all approach to data integrity controls established on
principles developed decades ago may be neither valuable nor, in certain instances, feasible. Therefore,
the use of a risk-based approach is essential to developing a robust data integrity program, considering
the requirements from a data-lifecycle perspective. Risk-based concepts apply even as industry transitions
from manual documentation systems to fully electronic or hybrid (manual and electronic) systems.
This technical report addresses data integrity from the perspective of manufacturing operations. It
discusses regulatory trends, risk management concepts, and recommendations for implementing ap-
propriate data integrity controls in manufacturing operations applicable to paper-based, electronic-
based and hybrid systems. The case studies included in this technical report provide examples of how
to assess current data integrity risks and implement the concepts presented here.

### 1.1 Purpose

The continuous and rapid advances in automation and information technology, availability of
economical data storage, and superiority of electronic audit trail capabilities over paper records have
compelled the pharmaceutical industry to rethink good manufacturing practices (GMP) controls.
Among the consequences is a heightened awareness of the need to establish and maintain effec-
tive data integrity controls at every stage of the manufacturing process for drug products. While
the requirement to maintain accurate and complete data is well recognized by industry, what is not
universally understood is the level of data integrity control needed at each step to comply with GMP
regulations. Many companies continue to struggle when deciding what controls are appropriate for
each manufacturing operation and what levels of review and verification are necessary to ensure reli-
able manufacturing control data. This technical report describes an approach using quality risk man-
agement (QRM) for establishing and assessing the appropriateness of data integrity controls for each
manufacturing operation based on the criticality and vulnerability of the data for its intended use.
Developed by subject matter experts from global industry and regulatory agencies, this technical
report summarizes manufacturing data integrity risks and identifies best practices that can be used to
develop and sustain robust documentation as well as data integrity management procedures, systems,
processes, and controls. Employing these practices will help users achieve compliance with applicable
laws, regulations, and directives for pharmaceutical products such as active pharmaceutical ingredi-
ents (APIs), solid oral dosage forms, sterile injectables, biologics, and vaccines.
Assuring data integrity is an organizational responsibility. Employees at any facility that manufac-
tures, processes, packages, or holds a finished pharmaceutical, intermediate ingredient, or API are
responsible for ensuring that data collected throughout the manufacturing process are accurate and
reliable. Managers, quality assurance personnel, operators, technicians, and support staff alike must

remain aware of the significance of maintaining and documenting data integrity for the quality and
safety of their products.

### 1.2 Scope

The information in this technical report applies to the management of data at pharmaceutical facili-
ties that manufacture, process, package, or hold a finished pharmaceutical, API, or intermediate.
Specifically, it addresses data pertaining to manufacturing operations, materials, facilities and equip-
ment, production, and packaging and labeling, including in-process controls and process analytical
testing. It also applies to the procedures, systems, processes, and controls used at a drug facility to
ensure that the drugs conform to applicable laws, regulations, and directives and that the data sup-
port the drug’s identity, strength, quality, and purity.
The methods and processes described here can be applied to facilities that manufacture drugs intend-
ed for use both in clinical trials and for commercial distribution. The principles may be extended to
facilities engaged in other activities (such as distribution of finished products to customers) or prod-
ucts (such as components, raw materials, medical devices, and combination products), though these
were not a principal consideration. This technical report is not intended to apply to data integrity
management in clinical practice and the implementation of clinical trials. Data integrity manage-
ment in laboratory systems is discussed in PDA Technical Report No. 80: Data Integrity Management
System for Pharmaceutical Laboratories (1), and data integrity management in quality management
systems will be discussed in a future technical report.

## 2.0 Glossary and Abbreviations

Audit Trail
FDA
A secure, computer-generated, time-
stamped electronic record that allows for
reconstruction of the course of events relating
to the creation, modification, or deletion of
an electronic record (2).
MHRA
Metadata containing information associated
with actions that relate to the creation,
modification or deletion of GXP records. An
audit trail provides for secure recording of
life-cycle details such as creation, additions,
deletions or alterations of information in a
record, either paper or electronic, without
obscuring or overwriting the original record.
An audit trail facilitates the reconstruction
of the history of such events relating to the
record regardless of its medium, including the
“who, what, when and why” of the action (3).
WHO
The audit trail is a form of metadata that
contains information associated with actions
that relate to the creation, modification
or deletion of GXP records. An audit trail
provides for secure recording of life-cycle
details such as creation, additions, deletions,
or alterations of information in a record,
either paper or electronic, without obscuring
or overwriting the original record (4).
Audit Trail Review Assessment (ATRA)
A tool that can be used to help determine
what elements within the audit trail should be
reviewed, and the frequency at which the review
should take place for each part of the audit trail
where a review is required.
ALCOA+
Attributable
It should be possible to identify the individual
or computerized system that performed the
recorded task. The need to document who
performed the task / function is, in part, to
demonstrate that the function was performed
by trained and qualified personnel. This
applies to changes made to records as well:
corrections, deletions, changes, etc.
Legible
All records must be legible – the information
must be readable in order for it to be of any use.

This applies to all information that would be
required to be considered Complete, including
all Original records or entries. Where the
‘dynamic’ nature of electronic data (the ability
to search, query, trend, etc.) is important to the
content and meaning of the record, the ability to
interact with the data using a suitable application
is important to the ‘availability’ of the record.
Contemporaneous
The evidence of actions, events or decisions
should be recorded as they take place. This
documentation should serve as an accurate
attestation of what was done, or what was
decided and why, i.e., what influenced the
decision at that time.
Original
The original record can be described as the
first-capture of information, whether recorded
on paper (static) or electronically (usually
dynamic, depending on the complexity of
the system). Information that is originally
captured in a dynamic state should remain
available in that state.
Accurate
Ensuring results and records are accurate is
achieved through many elements of a robust
pharmaceutical quality system. This can be
composed of:
–
equipment-related factors such as quali-
fication, calibration, maintenance and
computer validation.
–
policies and procedures to control actions
and behaviors, including data review pro-
cedures to verify adherence to procedural
requirements
–
deviation management including root
cause analysis, impact assessments and
CAPA
–
trained and qualified personnel who
understand the importance of following
established procedures and documenting
their actions and decisions.
Together, these elements aim to ensure the
accuracy of information, including scientific
data that is used to make critical decisions
about the quality of products.
Complete
All information that would be critical to
recreating an event is important when
trying to understand the event. The level of
detail required for an information set to be
considered complete would depend on the
criticality of the information. A complete
record of data generated electronically
includes relevant metadata.
Consistent
Good Documentation Practices should be
applied throughout any process, without
exception, including deviations that may
occur during the process. This includes
capturing all changes made to data.
Enduring
Records must be kept in a manner such that
they exist for the entire period during which
they might be needed. This means they need
to remain intact and accessible as an indelible/
durable record throughout the record
retention period.
Available
Records must be available for review at any
time during the required retention period,
accessible in a readable format to all applicable
personnel who are responsible for their
review whether for routine release decisions,
investigations, trending, annual reports, audits
or inspections (5).
Critical Process (CP)
A process that impacts a critical quality at-
tribute of the intermediate, drug substance or
drug product being manufactured and therefore
should have established critical process param-
eters that can be monitored or controlled to
ensure that the process produces the desired
quality.
Critical Process Parameter (CPP)
A process parameter whose variability has
an impact on a critical quality attribute and
therefore should be monitored or controlled to
ensure the process produces the desired quality.
Critical Quality Attribute (CQA)
A physical, chemical, biological or microbio-
logical property or characteristic that should be
within an appropriate limit, range, or distribu-
tion to ensure the desired product quality.
Data Integrity
FDA
Refers to the completeness, consistency, and
accuracy of data. Complete, consistent, and

accurate data should be attributable, legible,
contemporaneously recorded, original or a
true copy, and accurate (ALCOA) (2).
MHRA
The degree to which data are complete,
consistent, accurate, trustworthy, reliable
and that these characteristics of the data are
maintained throughout the data life cycle. The
data should be collected and maintained in a
secure manner, so that they are attributable,
legible, contemporaneously recorded, original
(or a true copy) and accurate. Assuring data
integrity requires appropriate quality and risk
management systems, including adherence
to sound scientific principles and good
documentation practices (3).
WHO
The degree to which data are complete,
consistent, accurate, trustworthy and reliable
and that these characteristics of the data are
maintained throughout the data life cycle. The
data should be collected and maintained in a
secure manner, such that they are attributable,
legible, contemporaneously recorded, original
or a true copy and accurate. Assuring data
integrity requires appropriate quality and risk
management systems, including adherence
to sound scientific principles and good
documentation practices (4).
Data Integrity Controls
Controls put in place to either minimize the po-
tential for a data integrity issue to occur or, if an
issue does occur, the controls applied to increase
the probability of detection.
Data Lake
A storage repository that holds, in a structured
way, a vast amount of raw data, including meta-
data, in its native format until it is needed.
Data Lifecycle
MHRA
All phases in the life of the data (including raw
data) from initial generation and recording
through processing (including transformation
or migration), use, data retention, archive/re-
trieval and destruction (3).
WHO
All phases of the process by which data is cre-
ated, processed, reviewed, analyzed and re-
ported, transferred, stored and retrieved and
monitored until retirement or disposal. There
should be a planned approach to assessing,
monitoring and managing the data and the
risks to those data in a manner commensurate
with potential impact on patient safety, prod-
uct quality and/or the reliability of the deci-
sions made throughout all phases of the data
life cycle (4).
Data Process Flow Map
A flow map that uses a baseline process flow
map and overlays the data flow.
Data Vulnerability
An indicator of data’s level of exposure to data
integrity failures due to intrinsic weaknesses in
manufacturing processes, data-capture tech-
nology, and human factors or a combination
thereof.
Detectability
The ability to discover or determine the exis-
tence, presence, or fact of a hazard (6). For pur-
poses of this technical report, a hazard typically
would be a data integrity breach.
Gemba Walk
A method of walking through and personally
observing processes.
Historian
A database/software program that archives auto-
mation and process data.
Looped Memory
An electronic system with limited storage capac-
ity that overwrites older data when it reaches
that capacity.
Mitigation
Systematic steps taken or in place to reduce or
limit the identified risk.
Peer Review
A review of data by a colleague who has a simi-
lar level of responsibilities as the person per-
forming the activity or capturing the data.
Quality Unit
An independent quality unit/structure with au-
thority to fulfill certain pharmaceutical quality
system responsibilities (7).
Risk Control
Actions implementing risk management deci-
sions (8).

True Copy
FDA
21 CFR 211.180(d) requires records to be
retained “either as original records or true
copies such as photocopies, microfilm, micro-
fiche, or other accurate reproductions of the
original records” (9). Electronic copies can
be used as true copies of paper or electronic
records, provided the copies preserve the
content and meaning of the original or raw
data, which includes metadata required to
reconstruct the CGMP activity and the static
or dynamic nature of the original records (2).
MHRA
A copy (irrespective of the type of media used)
of the original record that has been verified (i.e.,
by a dated signature or by generation through
a validated process) to have the same informa-
tion, including data that describe the context,
content, and structure, as the original (3).
WHO
A copy of an original recording of data that
has been verified and certified to confirm it is
an exact and complete copy that preserves the
entire content and meaning of the original re-
cord including, in the case of electronic data,
all essential metadata and the original record
format as appropriate (4).

### 2.1 Abbreviations

AHU/HVAC  Air Handling Unit/Heating,
Ventilation, and Air Conditioning
ALCOA	 Attributable, Legible, Contemporaneous,
Original, and Accurate
API
Active Pharmaceutical Ingredient
APIC	 Active Pharmaceutical Ingredients
Committee
APR
Annual Product Review
BMS
Building Management System
BPR
Batch Processing Record
CAPA	 Corrective Action, Preventive Action
CFR
Code of Federal Regulations
CP
Critical Process
EBR
Electronic Batch Recording
FDA
U.S. Food and Drug Administration
GAMP	Good Automated Manufacturing Practice
GMP	 Good Manufacturing Practices
GxP
Good practice quality guidelines for
various fields
HMI
Human machine interface
ICH
International Conference on Harmonization
IS/IT
Information Security/Information
Technology
ISPE
International Society for
Pharmaceutical Engineering
MES
Manufacturing Execution System
MHRA	Medicines and Healthcare products
Regulatory Agency
NCR
Noncompliance Report
NMPA	National Medical Products Administra-
tion (China)
OOS
Out of specification
PIC/S	 Pharmaceutical Inspection Convention
and Pharmaceutical Inspection Co-
operation Scheme
PLC
Programmable Logic Controller
QMS	 Quality Management Systems
QRM	 Quality Risk Management
SID&GP	 Russian State Institute of Drugs and
Good Practices
SOP
Standard Operating Procedure
TGA
Australian Therapeutic Goods
Administration
WHO	 World Health Organization
WL
Warning Letter

## 3.0 Data Integrity Trends at International Drug Manufacturers

### 3.1 Historical Perspective

In 1963, the U.S. Food and Drug Administration (FDA) issued its current good manufacturing
practices (GMP) regulations for processing, packing, or holding drugs and its major revision in 1978
under 21 CFR Part 211 (10-11). Since that time, the FDA has acted upon data integrity violations
detected during its GMP inspections of pharmaceutical manufacturers. Unique skill sets are required
to detect data integrity problems and collect evidence to establish GMP violations. These skill sets
can be acquired through focused training on prevailing good documentation practices, including
the technology, or lack thereof, used for documenting GMP activities and the associated data and
human behavior.
The assessment of data integrity procedures, processes, systems, and controls using a consistent,
structured approach and forensic techniques was not always a primary focus during FDA inspec-
tions. Periodically, the detection of egregious and unethical events causes FDA to redouble its
efforts and refocus its attention on lapses in data integrity. For example, during the late 1980s and
early 1990s, FDA uncovered data integrity violations at a large number of U.S.-based generic drug
manufacturers (and some innovator companies) in what was later dubbed the “generic drug scandal.”
The FDA discovered widespread falsification of production and control records and found that many
abbreviated new drug applications contained falsified data and other serious data integrity violations.
Several individuals from the industry and the FDA were criminally prosecuted, and the scandal
prompted FDA to establish in 1990 a pre-approval inspection program (12) that remains in effect
today. That program requires successful FDA pre-approval inspections as a condition of approval for
drugs and biologics; subsequently, other major health authorities established similar pre-approval
inspection programs. Then, in 1997, the FDA promulgated a regulation related to computer system
electronic records and signatures for digital data in 21 CFR Part 11 (13).
These developments impacted industry practices, too. Data integrity became a focus of companies,
industry conferences, and industry best practice documents such as the International Society for
Pharmaceutical Engineering (ISPE) good automated manufacturing practice (GAMP) guides and
PDA technical reports. Data integrity awareness and expertise increased among pharmaceutical
professionals, and the incidence of data integrity problems reported by FDA during its GMP inspec-
tions of domestic and international pharmaceutical manufacturers declined. Egregious data integrity
violations, however, still resulted in sanctions.
Starting in the late 1990s, the advent of the internet and growth in information technology fueled
increased globalization of pharmaceutical supply chains. This rapid expansion roused regulators’
concerns about data integrity. In 2007, FDA reported that it had found objectionable data integrity
issues at 3 of the 10 companies it had recently inspected on this topic (14). In the years immedi-
ately following, FDA again refocused its attention on data integrity practices. Since then, FDA has
included data integrity citations in more than 200 warning letters sent to companies in more than 20
countries.
Since 2012, inspections by the FDA, European Medicines Agency (EMA), Medicines and Health-
care products Regulatory Agency (MHRA), World Health Organization (WHO), and other health
authorities have revealed a notable increase in the incidence of data integrity issues at international
manufacturers of APIs and finished pharmaceuticals worldwide. The prevalence and significance of
the data integrity lapses discovered in recent years has led regulators to make data integrity a primary
focus during inspections, and regulators are detecting data integrity lapses with increasing frequency.
Pharmaceutical regulators continue to find conditions and practices that compromise data integrity,
among them human errors, inadequate management oversight, insufficient employee training, sys-
tem failures, inappropriate qualification or configuration of systems, poor procedures or not follow-
ing procedures, and intentional acts of falsification.

## 3.0 Data Integrity Trends at International Drug Manufacturers

### 3.1 Historical Perspective

In 1963, the U.S. Food and Drug Administration (FDA) issued its current good manufacturing
practices (GMP) regulations for processing, packing, or holding drugs and its major revision in 1978
under 21 CFR Part 211 (10-11). Since that time, the FDA has acted upon data integrity violations
detected during its GMP inspections of pharmaceutical manufacturers. Unique skill sets are required
to detect data integrity problems and collect evidence to establish GMP violations. These skill sets
can be acquired through focused training on prevailing good documentation practices, including
the technology, or lack thereof, used for documenting GMP activities and the associated data and
human behavior.
The assessment of data integrity procedures, processes, systems, and controls using a consistent,
structured approach and forensic techniques was not always a primary focus during FDA inspec-
tions. Periodically, the detection of egregious and unethical events causes FDA to redouble its
efforts and refocus its attention on lapses in data integrity. For example, during the late 1980s and
early 1990s, FDA uncovered data integrity violations at a large number of U.S.-based generic drug
manufacturers (and some innovator companies) in what was later dubbed the “generic drug scandal.”
The FDA discovered widespread falsification of production and control records and found that many
abbreviated new drug applications contained falsified data and other serious data integrity violations.
Several individuals from the industry and the FDA were criminally prosecuted, and the scandal
prompted FDA to establish in 1990 a pre-approval inspection program (12) that remains in effect
today. That program requires successful FDA pre-approval inspections as a condition of approval for
drugs and biologics; subsequently, other major health authorities established similar pre-approval
inspection programs. Then, in 1997, the FDA promulgated a regulation related to computer system
electronic records and signatures for digital data in 21 CFR Part 11 (13).
These developments impacted industry practices, too. Data integrity became a focus of companies,
industry conferences, and industry best practice documents such as the International Society for
Pharmaceutical Engineering (ISPE) good automated manufacturing practice (GAMP) guides and
PDA technical reports. Data integrity awareness and expertise increased among pharmaceutical
professionals, and the incidence of data integrity problems reported by FDA during its GMP inspec-
tions of domestic and international pharmaceutical manufacturers declined. Egregious data integrity
violations, however, still resulted in sanctions.
Starting in the late 1990s, the advent of the internet and growth in information technology fueled
increased globalization of pharmaceutical supply chains. This rapid expansion roused regulators’
concerns about data integrity. In 2007, FDA reported that it had found objectionable data integrity
issues at 3 of the 10 companies it had recently inspected on this topic (14). In the years immedi-
ately following, FDA again refocused its attention on data integrity practices. Since then, FDA has
included data integrity citations in more than 200 warning letters sent to companies in more than 20
countries.
Since 2012, inspections by the FDA, European Medicines Agency (EMA), Medicines and Health-
care products Regulatory Agency (MHRA), World Health Organization (WHO), and other health
authorities have revealed a notable increase in the incidence of data integrity issues at international
manufacturers of APIs and finished pharmaceuticals worldwide. The prevalence and significance of
the data integrity lapses discovered in recent years has led regulators to make data integrity a primary
focus during inspections, and regulators are detecting data integrity lapses with increasing frequency.
Pharmaceutical regulators continue to find conditions and practices that compromise data integrity,
among them human errors, inadequate management oversight, insufficient employee training, sys-
tem failures, inappropriate qualification or configuration of systems, poor procedures or not follow-
ing procedures, and intentional acts of falsification.

#### 3.1.1 U.S. FDA Warning Letters

A review of approximately 393 FDA warning letters (WLs) issued by the FDA from February 2012
through mid-August 2019, revealed a total of 212 that referenced data integrity-related citations,
amounting to more than half (53%) of the WLs (Figure 3.1.1-1). Of the 212 WLs that included
citations related to data integrity issues, 96 (45%) were related to production operations (Figure
3.1.1-2), and 116 (55%) pertained to laboratory and quality operations. Approximately 36% of
the WLs for data integrity citations were for API manufacturing facilities (35 of 96), about 60%
involved finished drug product manufacturing sites (58 of 96), and about 3% included sites that
produced both APIs and finished pharmaceuticals (3 of 96).
FDA has cited in recent warning letters questionable data integrity practices in manufacturing opera-
tions. For example, a warning letter issued in July 2019 cited that batch records included handwrit-
ten values routinely within process parameters while the values recorded by the programmable logic
controller (PLC) of the compression machine were frequently outside of the established process
parameters (15). A second example issued in December 2019 cited multiple discrepancies between
the human machine interface (HMI) data and the entries made by operators into batch records (16).
n	 India (37)
n	 China (21)
n	 United States (13)
n	 Canada (5)
n	 Japan (3)
n	 Mexico (3)
n	 Spain (2)
n	 Hong Kong (2)
n	 Italy (2)
n	 Taiwan (2)
n	 United Arab Emirates (1)
n	 Austria (1)
n	 Denmark (1)
n	 Germany (1)
n	 Hungary (1)
n	 Korea (1)
WLs with Production Related Data Integrity Citations by Country of Inspected Location
(22 Feb 2012 – 15 Aug 2019)
Figure 3.1.1-1
FDA Warning Letters–DI Issues Related to Production Activities by Country of Inspected Location

3.1.2	 EU Non-Compliance Reports (NCR)
A review of approximately 163 EU non-compliance reports (NCRs) for the period between January
2012 and August 2018 found that 82 of the 163 NCRs (50%) include citations of data integrity-
related observations (Figure 3.1.2-1). Review of the 82 NCRs that include data integrity citations
found that approximately 46% involved some sort of falsification issues in the production system,
22% included falsification issues in the laboratory system, and 32% of the NCRs included falsifica-
tion-related practices related to both the production and laboratory systems.

*[Figure 3.1.1-2	 Incidence of Warning Letters Citing Production Activities by Product Type (API vs Finished]*

Pharmaceuticals)
WLs with Production Related Data Integrity Citations by
Product Type [API or Finished Dosage Form (FDF)]
(22 Feb 2012 – 15 Aug 2019)
n	 API (35)
n	 FDF (58)
n	 Both (3)

*[Figure 3.1.2-1	 EU Non-Compliance Reports–DI Citations by Country of Inspected Location]*

n	 Bangladesh (1%)
n	 Brazil (1%)
n	 China (23%)
n	 Denmark (3%)
n	 France (1%)
n	 India (49%)
n	 Italy (4%)
n	 Japan (1%)
n	 Korea, Republic of (3%)
n	 Monaco (1%)
n	 Romania (1%)
n	 Saudi Arabia (1%)
n	 Spain (4%)
n	 United Kingdom (6%)
n	 United States (1%)
EU Non-compliance reports with Data Integrity Citations by Country of Inspected Location
(Jan 2012 – Aug 2018)

#### 3.1.3 Production-Related Data Integrity Trends by Category

The review of data integrity citations in FDA WLs and EU NCRs between 2012 and 2019 found
the citations that affect the manufacturing process tend to fall into four broad themes: poor docu-
mentation practices, insufficient data review, ineffective oversight, and ineffective system control.
The data in Table 3.1.3-1 is based on observations by FDA and EU inspectors during their inspections
of quality management systems for production operations between February 2012 and August 2019.

**Table 3.1.3-1**

Examples of Data Integrity Issues in Production Operations cited by FDA and EU, 2012–2019
Examples of Data Integrity Issues Cited in Production Operations
Category
Falsification/Fabrication of Records (e.g., visual inspection data, cleaning validation
records, batch records, annual product reviews, glove integrity testing)
False Entries
False or Misleading Statements (Made to FDA investigators about the practice of
blending failing and passing API batches)
False Statements
Delaying, Denying, Limiting or Refusing Inspection (Failure to allow access
to facilities, records, documents, or responsible individuals that interferes with
investigator’s ability to complete an inspection, such as hiding manufacturing-related
records or dumping unlabeled vials when contents were questioned by FDA)
Delay/Deny/Limit/
Refuse Inspection
Computer Access Controls (Unprotected spreadsheets for performing calculations and
statistical evaluations of production data; shared login credentials that did not permit
identification of a specific person using the shared login to link specific actions to a specific
operator; password shared by multiple individuals to gain access to each individual piece
of equipment and access level; inadequate controls to assure that changes in master
production and control records or other records are instituted only by authorized personnel)
Computer Access
Controls
Lack of Contemporaneous Data Entries (Pre-dated and backdated batch records;
batch records signed by persons who had not performed the activities; uncontrolled
spreadsheets used to record in-process quality data that were then transcribed and
backdated in the production record; cleaning records that did not match video recordings;
batch production data entered on “mock sheets” for later transcription to official records
that were backdated)
Contemporaneous
Data Entries
Unexplained Data Discrepancies (Production equipment labeled as clean but found to be
dirty; batch records missing critical information and signatures; erroneous calculations and
use of incorrect amounts of starting materials during production; inaccurate quantities for
quality defects; AHU/HVAC filter-cleaning records with discrepant entries)
Data
Discrepancies
Batch Data Traceability (Programmable logic controllers (PLCs) and manufacturing
equipment with shared login credentials that did not permit identification of a specific
person using the shared login)
Data Traceability
Data Deleted, Destroyed, or Missing/Unavailable (e.g., batch production records,
cleaning records, sanitization records, annual product reviews, change controls,
filter integrity testing, media fill data, sterilizer data, in-process weight checks, yield
calculations, undocumented deviations)
Data Deleted/
Destroyed/
Unavailable
Audit Trails Unavailable/Disabled (Lack of audit trail to document who accessed each
of the PLC and man-machine interface equipment (equipment operating parameters);
disabled electronic audit trail function for nonviable particle-monitoring system)
Audit Trails
Inaccurate/Incomplete Data or Records (Inaccurate entries in batch records; incorrect
quantities of active ingredients/raw materials; inaccurate media-fill records; inaccurate
CAPA and APR entries)
Inaccurate/
Incomplete
Records
Illegible Data Entries (Batch records with data changes in pencil)
Legibility
Unofficial Records (Use of unofficial records/rough notes/loose paper)
Unofficial Records

### 3.2 Regulatory Guidance

Data integrity throughout the product lifecycle has always been of concern to global regulatory
authorities. During the past 40+ years, multiple worldwide GxP regulations, such as the FDA’s 1978
Good Laboratory Practice for Nonclinical Laboratory Studies (17), have included requirements indi-
cating that data need to be attributable, legible, contemporaneous, original, and accurate (ALCOA).
Recently, the resurgence of detected data integrity problems has prompted regulators to release a
series of guidance documents that emphasize the importance of data integrity. The FDA, MHRA,
WHO, Pharmaceutical Inspection Convention and Pharmaceutical Inspection Convention Co-
operation Scheme (PIC/S), China National Medical Products Administration (NMPA), Australian
Therapeutic Goods Administration (TGA), and Russian State Institute of Drugs and Good Practices
(SID&GP) have all released documents that provide the current thinking of regulators related to
data integrity concepts and expectations including the following:
•
MHRA: GxP Data Integrity Guidance and Definitions (March 2018) (3)
•
FDA: Data Integrity and Compliance with Drug CGMP Questions and Answers Guidance for
Industry, (December 2018) (2)
•
WHO: Guidance on Good Data and Record Management Practices, WHO Technical Report Series,
No. 996, Annex 5 (2016) (4)
•
WHO: Good Chromatography Practices, Draft for Comments (July 2019) (18)
•
PIC/S: Draft PIC/S Guidance: Good Practices for Data Management and Integrity in Regulated
GMP/GDP Environments (November 2018) (5)
•
NMPA: Draft Drug Data Management Standard (Oct 2016) (19)
•
TGA: Data Management and Data Integrity (DMDI) webpage (April 2017) (20)
•
SID&GP: Guidelines: Data Integrity and Validation of Computerized Systems (August 2018) (21)

### 3.3 Industry Best Practices

Several associations, including PDA, ISPE, and the Active Pharmaceutical Ingredients Committee
(APIC), also have issued best practice documents related to data integrity:
•
PDA: Elements of a Code of Conduct for Data Integrity (February 2016) (22)
•
PDA: Technical Report No. 80: Data Integrity Management System for Pharmaceutical Laboratories
(August 2018) (1)
•
ISPE: Records and Data Integrity Guide (March 2017) (23)
•
ISPE: Good Practice Guide: Data Integrity – Key Concepts, GAMP Records and Data Integrity
(October 2018) (24)
•
ISPE: Good Practice Guide: Data Integrity – Manufacturing Records (April 2019)
•
APIC: Practical Risk-Based Guide for Managing Data Integrity (March 2019) (25)

## 4.0 Quality Risk Management Applied to Data Integrity

The principles of QRM apply to the data lifecycle, which includes the capture, recording, transcrip-
tion, archiving, and other aspects of data management. This section uses examples to describe how
certain elements could pose a risk to the integrity of pharmaceutical and biopharmaceutical data.
Risk should be controlled regardless of whether the data are managed using a manual system or an
automated electronic system. Any potential breach related to data integrity—particularly the loss,
omission, deletion, or alteration of data—must be investigated, addressed, and accounted for in the
quality system and, as necessary, reflected in the risk management documentation. Given that data
may be managed and/or transferred between different formats or systems, efforts should be made to
mitigate the risk to the integrity of the data during these transfers. Therefore, judicious application
of these concepts and targeted application of data integrity principles is warranted as the industry
transitions from paper to hybrid (manual and electronic) and, eventually, to fully electronic systems.
Data integrity risk also should be addressed during the transfer of data between electronic systems.
The PDA Technical Report No. 54 series describes QRM more broadly, including how to conduct
an appropriate risk assessment and formulate a mitigation strategy to reduce the risks identified. For
more information on QRM generally and other important elements, such as risk communication,
please see the TR 54 series and ICH Quality Guideline Q9: Quality Risk Management (8,26).

### 4.1 Considerations in Assessing Risk

Risk assessments should be conducted proactively at the time any new data management system is
implemented and should be captured by the overarching change control. At this stage in the process,
risk assessments can serve as preventive measures to ensure that data integrity is maintained through-
out the system lifecycle. When performed on existing data management systems, the assessments
should identify potential data vulnerabilities based on the existing level of controls and the criticality
of the data for its intended use.
Organizations also should consider performing a risk assessment after a deviation or incident to
identify potential gaps in the data management system. Assessment of data integrity risks also should
be done in conjunction with the change management process of a data management system to avoid
creating new or additional risks. This will enable informed decision-making regarding the extent
of the issue and the potential impact. Key objectives of this assessment are to determine if the root
cause is related to a gap in data management and, if so, to identify the extent of the gap and the
impact to the data.
Data integrity controls should be considered from both the behavioral and technical perspectives.
From a behavioral perspective, the overall quality culture, including communications and training, is
intimately related to the effectiveness of the data integrity program.

## 11.0 Technical Report No. 84

## 4.0 Quality Risk Management Applied to Data Integrity

The principles of QRM apply to the data lifecycle, which includes the capture, recording, transcrip-
tion, archiving, and other aspects of data management. This section uses examples to describe how
certain elements could pose a risk to the integrity of pharmaceutical and biopharmaceutical data.
Risk should be controlled regardless of whether the data are managed using a manual system or an
automated electronic system. Any potential breach related to data integrity—particularly the loss,
omission, deletion, or alteration of data—must be investigated, addressed, and accounted for in the
quality system and, as necessary, reflected in the risk management documentation. Given that data
may be managed and/or transferred between different formats or systems, efforts should be made to
mitigate the risk to the integrity of the data during these transfers. Therefore, judicious application
of these concepts and targeted application of data integrity principles is warranted as the industry
transitions from paper to hybrid (manual and electronic) and, eventually, to fully electronic systems.
Data integrity risk also should be addressed during the transfer of data between electronic systems.
The PDA Technical Report No. 54 series describes QRM more broadly, including how to conduct
an appropriate risk assessment and formulate a mitigation strategy to reduce the risks identified. For
more information on QRM generally and other important elements, such as risk communication,
please see the TR 54 series and ICH Quality Guideline Q9: Quality Risk Management (8,26).

### 4.1 Considerations in Assessing Risk

Risk assessments should be conducted proactively at the time any new data management system is
implemented and should be captured by the overarching change control. At this stage in the process,
risk assessments can serve as preventive measures to ensure that data integrity is maintained through-
out the system lifecycle. When performed on existing data management systems, the assessments
should identify potential data vulnerabilities based on the existing level of controls and the criticality
of the data for its intended use.
Organizations also should consider performing a risk assessment after a deviation or incident to
identify potential gaps in the data management system. Assessment of data integrity risks also should
be done in conjunction with the change management process of a data management system to avoid
creating new or additional risks. This will enable informed decision-making regarding the extent
of the issue and the potential impact. Key objectives of this assessment are to determine if the root
cause is related to a gap in data management and, if so, to identify the extent of the gap and the
impact to the data.
Data integrity controls should be considered from both the behavioral and technical perspectives.
From a behavioral perspective, the overall quality culture, including communications and training, is
intimately related to the effectiveness of the data integrity program.

#### 4.1.1 Considering Human Factors in Assessing Risk

In considering the human behavioral influence when examining the elements that pose risk to data
integrity, two categories need to be examined: unintentional and intentional acts (see Table 4.1.1-1):

**Table 4.1.1-1**

Human Factors Matrix
Unintentional Act
Intentional Act
Thinking Errors
Procedure Gap
Error caused by gaps in rules stating
what tasks should be performed and by
whom, e.g., lack of or inadequate stan-
dard operating procedures (SOPs)
Knowledge Gap
Error caused by knowledge gaps in how
to perform a task, e.g., lack of or inad-
equate training
Fraud
Violations caused by malicious intent to
perform a fraudulent act, e.g., falsifying
data for personal gain or avoid personal
pain
Action Errors
Attention Failure
Error caused by taking the wrong action,
e.g., unfocused state of mind or a fre-
quently performed action goes wrong
or multitasking or aggressive deadlines
Memory Failure
Error caused by taking no action, e.g.,
failure to perform a routine task due to
forgetting its place in the sequence
Misconduct
Violations caused by knowingly ignoring
procedures or controls due to misplaced
priority, e.g., ignoring established controls
to compensate for aggressive target or
time pressure
One category is the unintentional act. Risk may be unintentionally introduced in a variety of ways.
The unintentional act may take the form of an “action error” caused by a slip in attention or lapse
of memory, or a “thinking error” caused by gaps in governing procedures (knowing what or who) or
knowledge (knowing how). For instance, numbers might be reversed in an entry or entered in the
wrong spot due to a slip in attention. A bar code might have been applied incorrectly to materials
that are brought into the processing room, and the operation started before operators realize that the
materials were for a different batch. Another example could be that one operator sets up the equip-
ment believing it will be used for one product, but a different product is brought in and processed.
Appropriate procedures should be in place to require a documented investigation in the event of
any mishandling or misuse of the data generated through such unintentional acts. The investigation
should identify the root cause, determine the impact and criticality of the deviation, and assign ap-
propriate CAPAs. Where human error is suspected or identified as the cause, this should be justified,
having taken care to ensure that process, procedural, or system-based errors or problems have not
been overlooked, if present.
The other category is the intentional act. Risk may be introduced intentionally through misconduct,
by failing to follow established procedures and controls due to misplaced priorities or through mali-
cious acts. For example, to personally benefit or to avoid personal consequences associated with hav-
ing made the mistake, an employee may cover up a mistake by creating false entries showing that the
desired activity or result occurred. In one misconduct scenario, the operator was not paying attention
to the mixing or blending operation and allowed it to run for longer than the validated time, but
entered a value within the required range. Another example could be an overworked operator who is
struggling to keep up with the manufacturing schedule and, in an effort to catch up, reprints the last
acceptable in-process test result with the batch number of the new sample. Determining the reason
for an intentional or malicious act may not always be possible.

When a data integrity incident is identified, the most important information to learn is the what
(event and systems affected), when (timelines), who (persons involved), why (gaps that contributed
to the events occurring), how (specifics, step-by-step explanation of occurrence), where (systems af-
fected) and impact (product quality and patient safety). These elements are essential to determine the
need for market action and, ultimately, lead to implementing corrective actions, which will assist in
mitigating a recurrence of the data integrity issues.
In the case of unintentional risks to data integrity, it will suffice to follow the process described for
risk assessment in this section. Provided the “right” people are in the room—whether operators,
technicians, mechanics, programmers, and/or supervisors—the risk assessment is likely to identify
the areas in which an accident in data capture and recording is possible. The purpose of the risk as-
sessment is to determine the probability of that accidental error occurring.
When the risk to data integrity is the result of an intentional action, a comprehensive investigation
is needed. Intentional manipulation of data is hard to detect and may require the use of forensic
detection techniques. The risk assessment process may uncover some of the circumstances in which
deliberate acts have occurred, but solid assurances that no repercussions will occur for contributing
such information during a risk assessment requires a great deal of trust.

#### 4.1.2 Risk Control Strategies

The potential impact on data must be determined and documented and, following the risk assess-
ment, mitigations must be determined to reduce risk. For risks that have been identified as having a
high probability of occurrence and a high impact on product quality or patient safety, a balanced risk
control strategy will need to be implemented. Understanding the manufacturing process and data
lifecycle processes is crucial to developing successful risk control strategies.
Although automation is not the solution to every problem, it can be a useful tool as part of a risk
control strategy. Intelligent barcodes can be used to confirm product and component identity and
can prevent a process from proceeding until the error is rechecked and corrected. The time-honored
use of a second person checking or a supervisor reviewing is also important, provided that it is time-
ly. Frequently, the supervisory review takes place too long after an event to confirm that it occurred
as recorded. Moving further into the digital age, electronic automation will replace such reviews
when implemented and qualified appropriately.

### 4.2 Data Integrity Risk Management Model

All data, whether recorded electronically or on paper, requires a risk management approach to deter-
mine what controls are important to assure data integrity.
In order to estimate the level of exposure to potential data integrity issues, the following elements
must be considered, as illustrated in Figure 4.2-1:
•
Data criticality
•
Current (existing) level of data controls, including:
–	 Data management – how data is recorded (manual or automated)
–	 Human factors – the amount of human intervention involved in the manufacturing process
(manual or automated)
–	 GMP process – including written procedures, training, validation, etc.
Thus, data criticality and current level of data controls, taken together, can aid in identifying the risk
of data vulnerability. Data vulnerability can indicate the level of exposure to data integrity issues due
to intrinsic weaknesses in the control of three key elements: data capture technology (data manage-
ment), human factors, manufacturing processes, or a combination of all three.

*[Figure 4.2-1 also identifies the sections in this technical report that further describe the key elements]*

of the risk management model.

#### 4.2.1 Classification of Data Criticality

Data criticality is a function of the relationship between the specific data and product quality. It
is based on knowledge of the product gained from process development, validation, and quality
processes throughout the product lifecycle and is facilitated by a set of relevant questions leading to a
classification of data criticality as High, Medium, or Low (see Table 4.2.1-1).1
All data related to manufacturing is critical as it is necessary to allow for the reconstruction of actual
events; however, the criticality level may differ due to the data’s use and the controls under which it
was generated. Data that is related to product quality (or supports a disposition decision) and patient
safety would generally be classified as High criticality. Critical quality attributes (CQAs) and criti-
cal process parameters (CPPs) would be classified as High criticality. Data that is related to process
robustness and consistency would be considered Medium criticality. Process robustness is discussed
in detail in PDA Technical Report No. 54 and the other technical reports in the TR 54 series (26).
Data that is related to neither would be considered general GMP and of Low criticality.
Data criticality is a measure of the significance of a data point or data set in supporting the safety,
quality, identity, purity, potency, and/or effectiveness of the product being manufactured. The
manufacturer can best determine the criticality of the data generated by its own processes since it
knows the quality target product profile, CQAs, critical processes, and CPPs for the product being
manufactured (27). This concept also applies to clinical trial manufacturing. While CPPs and CQAs
may not be fully established in that context, initial information should be available to determine the
critical aspects of the manufacturing processes and existing controls.
1	 While this technical report uses high/medium/low risk ranking levels, organizations may use dif-
ferent risk ranking levels and adjust their approach accordingly. Users would need to be mindful
not to compromise the intent of this framework.
Determine
Data Criticality
(Section 4.2.1)
Map Data
Vulnerability to 9-Box
(Section 4.3)
Determine current level
of Data Controls
(Section 4.2.2)
Identify a GMP process
in a unit operation
needing DI assessment
GEMBA
Walk
Data Process Flow
Mapping
Data
Magmt.
GMP
Process
Human
Factors
Define risk control
strategy to avoid Red/
Orange zones
(Sections 4.1.2 & 4.5)
In
Red/Orange
zones
Yes
No
Level of Controls in place ensures
inadvertent data integrity issues are unlikely
to occur but may not prevent intentional
falsification. See Section 5.2 for potential
differentiated controls.
Figure 4.2-1
Data Integrity Risk Management Model

**Table 4.2.1-1 Classification of Data Criticality**

Data Criticality
Definition
High
When the intended use of the data directly impacts product quality and/or product safety:
• Product quality monitoring and control of processes that may be responsible for causing
variability during manufacturing, release, or distribution impacting critical quality attributes,
critical material attributes, critical process parameters, or critical process controls, including
those that may be linked with the product registration dossier (where applicable)
• Product safety monitoring and control of processes that ensure effective management of
field alerts, recalls, complaints, or adverse events
Medium
When the intended use of the data relates to quality attributes, material attributes, process
parameters, key process parameters, or process controls that are not CQAs/Critical Processes
(CPs)/CPPs and may or may not be in the product registration dossier; this includes parameters of
the manufacturing process that “may not be directly linked to critical product quality attributes but
need to be tightly controlled to assure process consistency” (28)
Low
When the intended use of the data is to provide evidence of GMP compliance relating to
monitoring and control of processes that do not fall into the High or Medium category

#### 4.2.2 Data Control Levels

An assessment must be performed to determine the existing level of data controls (Table 4.2.2-1). High-
level data controls are those associated with validated automated processes and minimal human intervention
throughout the data lifecycle, whereas low-level data controls are those that involve manual processes with
a high degree of human intervention throughout the data lifecycle. Section 5.0 provides some examples of
high-, medium-, and low-level data controls that may be appropriate for the criticality of the activity.

**Table 4.2.2-1**

Data Control Levels
Control Level
Definition/Examples
High
High degree of validated process automation; electronic data lifecycle (e.g., capture, analysis,
reporting); minimal human intervention
Medium
Hybrid—some manual processes; semi-automated data lifecycle processes; partial or lack of
system interfaces
Low
Manual data lifecycle (e.g., capture, transcription, second-person witnessing); manual process
measurements and testing; manual processes with a high degree of human intervention
4.3 Data Vulnerability (9-Box)
Data vulnerability is an indicator of the level of exposure to data integrity issues due to intrinsic
weaknesses in three key elements: data management technology, human factors, GMP manufactur-
ing processes, or a combination thereof.
To determine the vulnerability of the data being collected, the user first must assess the level of data
criticality and the existing level of data control. Each will be assessed as High, Medium, or Low, us-
ing the definitions in Tables 4.2.1-1 and 4.2.2-1.
Subsequently, a 9-Box grid can be created by mapping the data criticality level with the data control
level. The 9-Box grid helps visualize how data criticality and data controls interact to rank levels of
risk. The criticality of the data will determine the row of the vulnerability grid, while the level of
control associated with the data will dictate the appropriate column.2
2	 While this grid is based on the high/medium/low risk ranking levels, organizations may adapt it
to reflect local needs and to use different risk ranking criteria for data criticality and level of data
controls. The resulting grading of data vulnerability would likewise need to be adapted.

This grid includes nine unique combinations (pairs) of data criticality and data control levels, as il-
lustrated in Table 4.3-1, that can be grouped into four different categories:
• Red: Significant data vulnerability—the level of data controls is Low for High criticality data.
• Orange: Moderate data vulnerability—the level of controls is not commensurate with the
criticality of the data.
• Green: Acceptable data vulnerability—the level of controls is commensurate with the criticality of the data.
• Blue: Negligible data vulnerability—there may be more controls in place than the minimum
required; this applies only for data that is not High criticality.
The objective is to have the right level of controls in place based on the criticality of the data, and
avoid being in the red or orange boxes. The goal of mitigation strategies, then, is to move from right
to left by increasing the level of data control. In this assessment, all data relevant to GMP is critical,
even if it relates to routine operations.
The 9-Box grid in Table 4.3-1 provides a visual depiction of the vulnerability of data given the
current level of data management controls and the criticality of the data. The 9-Box grid does not
provide any opportunity or cover for falsification of data.

**Table 4.3-1 depicts only the data controls relating to data management technology. For a holistic assess-**

ment of vulnerability, the data controls relating to human factors and the GMP process should be similarly
assessed. Appendix 1 provides further instructions for using the 9-Box grid, with illustrative examples.

**Table 4.3-1	 Data Vulnerability Grid (9-Box) – Example for Data Management Technology Controls**

DATA CONTROL LEVELS
High
Medium
Low
DATA CRITICALITY LEVELS
(H/H)
Criticality
• CQA/CP/CPP impacting quality &
safety
Data Controls
• Validated & effective automated
or hybrid data capture & analysis
system in place
(H/M)
Criticality
• CQA/CP/CPP impacting quality &
safety
Data Controls
• Hybrid systems or manual data
capture, limited automated
data analysis, manual data
transcription
(H/L)
Criticality
• CQA/CP/CPP impacting quality &
safety
Data Controls
• Manual data capture, no
automated data analysis,
manual data transcription, heavy
reliance on second-person
witnessing of data entries
(M/H)
Criticality
• Processes & process parameters
that are not CQA/CP/CPP but
need to be tightly controlled
Data Controls
• Validated & effective automated
data capture & analysis system
in place
• More controls than may be
required based on data criticality
(M/M)
Criticality
• Processes & process parameters
that are not CQA/CP/CPP but
need to be tightly controlled
Data Controls
• Hybrid systems or manual data
capture, limited automated
data analysis, manual data
transcription
(M/L)
Criticality
• Processes & process parameters
that are not CQA/CP/CPP but
need to be tightly controlled
Data Controls
• Manual data capture, no
automated data analysis, manual
data transcription, heavy reliance
on second-person witnessing of
data entries
(L/H)
Criticality
• GMP compliance data that do
not fall into high or medium
criticality
Data Controls
• Validated & effective automated
data capture & analysis system
in place
• More controls than may be
required based on data criticality
(L/M)
Criticality
• GMP compliance data that do
not fall into high or medium
criticality
Data Controls
• Hybrid systems or manual data
capture, limited automated
data analysis, manual data
transcription
• More controls than may be
required based on data criticality
(L/L)
Criticality
• GMP compliance data that do
not fall into high or medium
criticality
Data Controls
• Manual data capture, no
automated data analysis,
manual data transcription, heavy
reliance on second-person
witnessing of data entries

### 4.4 Using the Data Vulnerability Grid

The data vulnerability grid (9-Box), as depicted in the flowchart in Figure 4.2-1, will not provide
one overall categorization of a company’s data vulnerability, but offers a tool to use for each process
and subprocess of operations that involve GMP data. The 9-Box is a holistic approach that allows
users to categorize the risk to the data in their current manufacturing processes and data lifecycle
processes using internal data criticality and data control assessments. Companies can leverage the
information captured in previous risk assessments and data flow maps to provide information on
the manufacturing process, methods of data capture, data migration, transfer of data from produc-
tion to analysis tools, and archiving. The 9-Box can also be used before implementing new or revised
processes. The outcome of the assessments will be only as good as the completeness and objectivity
of the internal assessments. Underestimating risk factors and overestimating current data integrity
controls will diminish the effectiveness of the outcome.
The 9-Box also allows users to identify controls that could be implemented to decrease the risk to
data in the manufacturing process. Implementation of those controls could decrease data vulnerabil-
ity from a high level to a lower level (from right to left in the grid). Examples for implementing the
9-Box in specific scenarios are included in Appendix I.
This technical report recommends, as the first step, selecting a product and identifying the data that
is critical for that product to meet its approved specifications and its intended use (see Section 4.2.1.)
The critical data for the product should have been identified already as part of the product develop-
ment process and included in corresponding documentation. After identifying the data that impacts
the product CQAs and the processes that are critical in its manufacture, the user can prioritize internal
assessments, identify risk factors, and categorize the data vulnerability for these critical processes.
Because three main elements impact data vulnerability—data management technology, human fac-
tors, and GMP process—the next step is to consider these three categories when assessing the specific
data management process for the operation being evaluated. After completing this analysis for a
specific process or unit operation, the completed information may be leveraged for the same process
or unit operation used for another product, giving due consideration to potential differences.
For data management, the full lifecycle of the data needs to be considered to determine areas of
vulnerability. This includes how the data is captured (manual/automated/hybrid system), frequency
of collection, validation of any automated systems used to capture the data, migration of produc-
tion data to data analysis tools, data transcription, and data archiving. Here, again, existing data flow
maps from previous assessments can be leveraged.
For human factors, points of human intervention in the data lifecycle need to be considered to
determine data vulnerability. As people are prone to error, processes that rely heavily on manual data
capture and review are considered inherently more vulnerable than those that are automated. To deter-
mine the reliability of the current processes, the assessment should consider trends related to data tran-
scription errors and poor application of good documentation practices. Conversely, automated data
collection, properly validated, will be less prone to error and more likely to yield high quality data.
For GMP process, the complexity and robustness of the manufacturing process being evaluated
should be considered to determine areas of data vulnerability. More complex processes are likely to
produce a larger volume of data, which could increase the number of factors that impact the data
vulnerability. The assessment needs to look at all aspects of the manufacturing process and evaluate
each process on a case-by-case basis. A newer manufacturing process that has been validated recently
and that lacks a history of robustness will have greater data vulnerability than an established process
with a high-process capability. Trends related to change control, out of specification (OOS) results,
alarms, and out-of-calibration instances can also illustrate the vulnerability of data being collected
for the manufacturing process. Once identified, the trends should be investigated to determine their
relationship to data vulnerability.

Additional examples of potential areas of vulnerability associated with each of these three risk catego-
ries are presented in Table 4.4-1.

**Table 4.4-1	 Potential Areas of Data Integrity Vulnerability**

Categories
Example Areas of Consideration
Data Management
Technology
(consider the full
data lifecycle)
• Data transcription
• Frequency of periodic reviews and change management based on intended use
• Hybrid systems (e.g., discrepancies between paper printout and corresponding
electronic record, data duplication)
• New or complex manufacturing technology (causing repeat errors)
• Overwriting existing electronic data
• System validation age
• System controls related to data export, calculation, reporting, transfer, archiving
and retrieval
• Appropriate access level
• Technologies with inadequate data integrity elements such as unique access, audit
trail, data backup & restore, electronic data review, date & time stamp, among
others (e.g., spreadsheets, LIMS)
• Unexplained discrepancies between electronic raw data and reported data
Human Factors
• Lack of supervisory review
• Manual observations or measurements (e.g., weighing)
• Repeat human errors (e.g., due to multitasking, high personnel turnover, inadequate
training, time pressures)
• Training and procedures (complex, long, unclear, incomplete, or difficult-to-access
instructions)
• Unclear role definition or segregation of duties
• Culture (fear, frustration, intent, unacceptable local documentation practices)
GMP Process
• Aborted runs (e.g., due to lack of planning, understanding system operation,
suitability of equipment and process)
• Complex process (e.g., many interfaces, high level of human intervention, high
levels of manual data entry)
• Data flows and ownership not well defined
• Inadequate line clearance checks
• Negative trends related to changes, deviations, out of specification, alarms, out of
calibration
• New or complex processes (causing repeat errors)
• Operation switching (GMP vs. non-GMP)
• Unavailability of quality-related data requested during regulatory inspections
Once the risk factors have been identified, the third step is to assess the existing controls as described
in Section 4.2.2. The controls in place should have been identified, for instance, by using a data flow
map as discussed in Section 4.5. A historical review of the information related to data integrity issues
contained in the quality management system (QMS) can be valuable in determining the adequacy of
the existing data integrity controls.

After identifying the manufacturing process being evaluated and the criticality of the data; the data
management, human, and GMP process risk factors associated with the process; and the data con-
trols in place, the user can evaluate this information to determine where in the 9-Box grid the unit
operation best fits, then mitigate the risks deemed unacceptable.
If the operation being evaluated fits into a red box (H/L) as shown in Table 4.3-1, the controls in
place are insufficient for the highly critical data and risk factors that have been identified. If it fits
into one of the two orange boxes (H/M or M/L), the data integrity controls in place for that opera-
tion could be improved, based on the criticality of the data and the risk factors identified. If the op-
eration fits into one of the green boxes (H/H, M/M, L/L), the controls in place are sufficient for the
criticality of the data and identified risk factors. If the process fits into one of the blue boxes (M/H,
L/H, L/M, L/L), the controls in place may be more than required for the criticality of the data and
the minimal risk factors identified. This does not imply that the controls for these processes should
be decreased, but that resources potentially could be shifted to other processes, such as those in the
orange and red boxes.

### 4.5 Data Process Flow Maps

Data process flow maps, a GMP requirement in certain parts of the world (29), are an extremely
useful tool for visualizing the movement of data through a given operation and can facilitate the
identification of areas of high risk to the data. Every step from start to end of a given process (e.g.,
from order creation to release of finished product) should be identified and documented in order to
obtain a complete picture of the data flow in the process. For each step, the data process flow map
should identify the activity performed, how the activity is performed, the systems used to perform
the activity, the data created, the method of recording the activity, and the decisions made from the
data. It also should include details on how data flows between systems or process steps and the means
used to transfer data, taking the data lifecycle into consideration as part of the supporting documen-
tation. The data process flow map should start with the point of origin of the data and include the
systems (e.g., equipment, devices, applications) used in the process. Documenting the data flows
related to manufacturing processes and systems through personal observation, such as through a
Gemba walk, can prove helpful in this process.
Points in the process where data integrity could be compromised should be identified. Asking a series
of critical-thinking questions at each stage of the data flow throughout the lifecycle can facilitate the
process, for example:
•
Are unique accounts assigned to each user?
•
Is an audit trail available that demonstrates if and when data is manipulated in any way, and
does it identify who has performed the operation?
•
Is data held in temporary memory? What happens if there is no power to this unit?
For instance, unauthorized access to a system could potentially allow for manipulation of batch-re-
lated data. These points where data integrity could be compromised represent areas of risk. For each,
a risk assessment should be conducted, and mitigations to reduce risk identified and implemented.
Differences in detectability (including elements related to electronic vs. manual processes) should be
considered as part of the risk assessment.

#### 4.5.1 Examples of Process and Data Flow Mapping

The following examples show process or data flow maps for solid oral dosage granulation operations.
The three main steps in developing and using these tools are:
1.	 Identify the key stakeholders involved in the process and hold a brief interview to obtain an
overview of the process.
2.	 Create a process data flow map to determine:
–
If the data is captured in paper or electronic format,
–
If the data flow takes place in real-time (solid line) or later (dashed lines),
–
If automated printed outputs are available with out-of-validated-range alert, and
–
If procedural controls are already in place or in use (red ovals in Figure 4.5.1-2).
3.	 Once the process/data flow is graphed, areas of data integrity vulnerabilities can be highlighted
and used as input to build a remediation plan.
Case 1 (Figure 4.5.1-1) depicts a paper-based, manually controlled granulation process with an end-
point of total granulation time that has been derived from process validation work, included in the
master batch record, and approved by the quality unit. Case 1 relies on the data being captured by
the operator, with second-operator verification, by wet ink recordings directly into the paper batch
production record in real time. In this example, the endpoint of the granulation operation is a CPP
that impacts the CQA of the finished product and would therefore be considered High-criticality
data. The existing level of controls would be considered Low because of the total manual operation
(see Section 4.2.2.). The only controls in this case are the second-person verification and a review by
the quality unit.
In Case 2 (Figure 4.5.1-2), the same validated granulation process has been automated. The total
granulation time has been included in a recipe, approved by the quality unit, and programmed into
a PLC that controls the process. This programming includes an automated alert when the validated
range is exceeded. The control level is now considered High because the validated PLC automated-
data collection system does not depend on any human intervention. With this level of control and
the PLC’s printout of the granulation process, which includes the data on the total granulation time
and an out-of-range alert, second-person verification is not necessary. The automated data collection
further protects the integrity of this High-criticality data by preventing changes to the total granula-
tion-time data in the system. The full batch production record is still reviewed by the quality unit as
part of the release process.
Automated data capture of the granulation time, printouts of the data, and automated alerts when
the total granulation time exceeds the validated range can reduce the procedural burden as well as
improve data integrity assurance. This becomes obvious when comparing the data flow of Case 1 to
that of Case 2. In Case 2, where the PLC controls the process, captures and stores the data, and gen-
erates a printout with automated alerts that is attached to the paper batch production record, there is
no need for peer review of the data on a per-batch basis.

## 5.0 Data Integrity Controls

Many events during manufacturing may compromise the integrity of the data. Any number of fac-
tors may cause these events, including human error, insufficient training, system failure, inappropri-
ate qualification or configuration of systems, poor procedures, or people not following procedures, as
well as intentional acts of falsification.
PDA recognizes that quality culture is critically important in the prevention and detection of data
integrity breaches; however, this technical report is designed to identify risk and potential mitigation
of a data integrity breach regardless of where on the spectrum of data integrity (system error, indi-
vidual error, individual or institutional malfeasance) that breach occurs. Of course, intentional fraud
and intentional manipulation of data are unacceptable under any circumstances, regardless of data
criticality, vulnerability, or existing level of controls.
In supporting and communicating expectations around a culture of quality for data integrity, PDA
recommends that entities use the PDA publication, Elements of a Code of Conduct for Data Integrity
in the Pharmaceutical Industry (22, 21), which outlines key elements necessary to help ensure the
reliability and integrity of data throughout all aspects of a product’s lifecycle. It can be used, in whole
or in part, as a control approach to guide a company’s internal practices, to create or modify an

*[Figure 4.5.1-1	 Case 1: Granulation Operation (Paper-Based Manual Process without Automated Alerts)]*

*[Figure 4.5.1-2	 Case 2: Granulation Operation (PLC-Controlled Process with Automated Alerts)]*

Quality Unit
Production
Operator 1
Production
Operator 2
Approve Validated
Process
(CPP / CQA)
Confirm
Components
Peer Review
Total time
within VAL
range?
Perform
Deviation
Investigation
Confirm process
parameters in MBR
(paper based)
Yes
BPR – Batch Production Record
MBR – Master Batch Record
After the fact
Real-time
No
Enter Start & End
Times
(start granulation)
Initiate Deviation
Review BPR for
total granulation
time
No
Yes
Full BPR
Review
Product
Impact?
Pass
Fail
Reject
Batch
Release
Batch
Quality Unit
Production
Operator 1
Approve Validated
Process
(CPP / CQA)
Confirm
Components
printout shows
out of VAL range
alert
Perform
Deviation
Investigation
No
Yes
No
Yes
Full BPR
Review
Perform
Granulation
Initiate Deviation
Product
Impact?
Confirm process
parameters in MBR
(PLC recipe)
PLC printout of total
granulation time
BPR – Batch Production Record
MBR – Master Batch Record
After the fact
Real-time
Pass
Fail
Reject
Batch
Release
Batch

## 5.0 Data Integrity Controls

Many events during manufacturing may compromise the integrity of the data. Any number of fac-
tors may cause these events, including human error, insufficient training, system failure, inappropri-
ate qualification or configuration of systems, poor procedures, or people not following procedures, as
well as intentional acts of falsification.
PDA recognizes that quality culture is critically important in the prevention and detection of data
integrity breaches; however, this technical report is designed to identify risk and potential mitigation
of a data integrity breach regardless of where on the spectrum of data integrity (system error, indi-
vidual error, individual or institutional malfeasance) that breach occurs. Of course, intentional fraud
and intentional manipulation of data are unacceptable under any circumstances, regardless of data
criticality, vulnerability, or existing level of controls.
In supporting and communicating expectations around a culture of quality for data integrity, PDA
recommends that entities use the PDA publication, Elements of a Code of Conduct for Data Integrity
in the Pharmaceutical Industry (22, 21), which outlines key elements necessary to help ensure the
reliability and integrity of data throughout all aspects of a product’s lifecycle. It can be used, in whole
or in part, as a control approach to guide a company’s internal practices, to create or modify an

*[Figure 4.5.1-1	 Case 1: Granulation Operation (Paper-Based Manual Process without Automated Alerts)]*

*[Figure 4.5.1-2	 Case 2: Granulation Operation (PLC-Controlled Process with Automated Alerts)]*

Quality Unit
Production
Operator 1
Production
Operator 2
Approve Validated
Process
(CPP / CQA)
Confirm
Components
Peer Review
Total time
within VAL
range?
Perform
Deviation
Investigation
Confirm process
parameters in MBR
(paper based)
Yes
BPR – Batch Production Record
MBR – Master Batch Record
After the fact
Real-time
No
Enter Start & End
Times
(start granulation)
Initiate Deviation
Review BPR for
total granulation
time
No
Yes
Full BPR
Review
Product
Impact?
Pass
Fail
Reject
Batch
Release
Batch
Quality Unit
Production
Operator 1
Approve Validated
Process
(CPP / CQA)
Confirm
Components
printout shows
out of VAL range
alert
Perform
Deviation
Investigation
No
Yes
No
Yes
Full BPR
Review
Perform
Granulation
Initiate Deviation
Product
Impact?
Confirm process
parameters in MBR
(PLC recipe)
PLC printout of total
granulation time
BPR – Batch Production Record
MBR – Master Batch Record
After the fact
Real-time
Pass
Fail
Reject
Batch
Release
Batch

existing data integrity code of conduct, or to develop agreements with outsourcing partners or other
suppliers. The elements identified throughout that document are intended to reinforce a culture of
quality and trust within the pharmaceutical industry (22).
An important part of preventing data integrity breaches is identifying, establishing, and maintaining
proper controls, whether the data elements are electronic, paper-based, or a combination of the two.
Ensuring data integrity means protecting the original data from accidental or intentional modifica-
tion, falsification, and deletion. Requirements specifying that data need to be ALCOA+ throughout
the data lifecycle have been included in regulations around the world for several decades. The WHO,
FDA, MHRA, and PIC/S have all released documents to reeducate the industry on current data integ-
rity concepts and expectations. These are the “what”—what is required to ensure the integrity of data.
Data integrity controls can be embedded in working procedures and practices or included as part
of computer system validation and equipment qualification or usage. These controls may be used to
minimize the potential that a data integrity issue will occur and to increase the probability of detect-
ing an issue that does occur. The data integrity controls are the “how”—how to ensure that these
requirements are implemented in practice.
Regulations convey the core elements that must be in place to ensure data integrity and a robust
QMS, including some of the following examples:
•
Standard operating procedures (SOPs) are in place for completion and retention of records.
•
People are suitably trained for their intended job purpose.
•
Systems are validated or qualified for their intended purpose.
•
People have access to the records required to perform their activities.
•
If electronic signatures will be used, they should be attributable to an individual, unable to be
altered, permanently linked to the document, and have a time and date stamp.
•
Data integrity risks should be identified as part of the QRM process and dealt with accordingly.
•
A management review process allows data integrity issues to be elevated to the highest levels of
the organization.
•
The data governance policy is endorsed at the highest levels of the organization, empowering a
strong data integrity culture at all levels of the organization.
•
An anonymous reporting program, supported by company policy, encourages personnel to bring
breaches in data integrity to the attention of management.
•
Routine data verification and periodic surveillance checks should be performed.
•
Self-inspections should include verification of the effectiveness of the data integrity controls.
•
A strong change management system is required.

### 5.1 Potential Differentiation of Controls

While there are many requirements to ensure a robust QMS, Section 5.0 only focuses on data
integrity controls where it is acceptable to differentiate the level of controls that may be applied. This
means that the levels of controls applied (e.g., frequency of review, number of items to check, who
performs the review) may differ depending on the criticality of the data, system, or activity. Consis-
tent with ICH Q9, which promotes a risk-based approach, highly critical data, systems, or activities
require more controls, while less critical data or activities require fewer controls.
This portion of the technical report focuses on only a small part of all data integrity controls required
by regulations. Most data integrity controls required by health authority regulations apply in the
same manner for any GMP data, that is, the controls do not differ based on the criticality of the
processes performed by the organization. Such controls are not discussed further in this technical

report. The following examples illustrate why the same level of controls may be applied, regardless of
the criticality of the activity.
•
GMP regulations require that entries in records should be indelible, made in the appropriate spaces,
identify the person making the entry and, if different, identify the person who performed the task(s).
Corrections, if required, should be dated and signed, leaving the original entry still readable, with a
comment added to explain the correction. Envision two different scenarios in which a person makes
a correction because of a typographical error: One person has recorded a critical parameter during
aseptic filling, while another has documented a training, a less critical activity. In both circumstanc-
es, the individuals involved should make the necessary correction, explain why the correction was
made, and sign with the time the correction was made, leaving the original entry still legible.
•
GMP regulations also require that, in electronic systems, a user’s privileges should be limited to allow
the employee to perform the work, without any additional unnecessary privileges. Access to change
the date or time of the system, for example, should be limited to a very small group of people, ideal-
ly independent administrators. Regardless of whether the system is highly critical (e.g., granulation)
or less critical (e.g., secondary packaging systems that do not store data relating to quality attributes
or parameters such as expiry dates), the same controls should be in place to restrict access.
Any given system may have some controls for which it is possible to differentiate the level of controls
applied, and some controls that will be the same regardless of the criticality of the activity.

### 5.2 Methodology Used to Determine Differentiated Controls

To determine the controls required for data, records, or systems, existing regulations and guidelines
for data integrity were reviewed (2-5,22,27). The recommended controls were categorized against
the type of document control system being employed: paper-based, electronic-based, and a hybrid.
Some of the controls identified apply to paper-only systems and some apply to electronic-only sys-
tems. Hybrid systems incorporated many of the controls for paper- and electronic-based systems.
Figure 5.2-1
Methodology Used to Determine Differentiated Controls
Data Integrity requirements
for which controls can be
differentiated based on criticality
Data Integrity requirements for
which controls are the same for all
criticalities
7 Categories identified where
controls can be differentiated
No differentiation possible, basic
controls that should be part of a
robust QMS
Data Integrity
Requirements

The data integrity requirements specifically relating to controls required for paper, electronic, and
hybrid systems were further identified and analyzed. Only requirements where it is acceptable to
differentiate the level of control applied, proportional to the criticality, were selected (Figure 5.2-1).
Where the level of control cannot not be differentiated, the controls are considered core elements in
ensuring a robust QMS and out of scope for this technical report.
The authors identified seven categories of controls for which it is acceptable to differentiate the level
of control applied, as shown in Table 5.2-1. Each category was assessed to determine whether the
data, record, or system was being controlled and then was further scrutinized to determine which
controls within that category may be differentiated. For example, based on criticality, the technical
report team considered whether it is acceptable to differentiate between the frequency of control
(daily vs. monthly), who performs the control (manufacturing vs. quality unit), or what needs to be
controlled (more-detailed vs. less-detailed review).
Where differentiation is acceptable, details of how the controls differ based on criticality are dis-
cussed in detail in Section 5.3. The level of controls required may be applied at the data, record,
or system level, depending on which of the seven categories are being discussed. Any requirements
within a category that remain consistent across the criticality levels are considered basic elements in
ensuring a robust QMS and are out of scope for this technical report.

**Table 5.2-1	 Categories Where Different Levels of Data Integrity Controls are Acceptable based on Criticality**

Type of
System
Category of Control
Short Description of Category
Paper
Storage of and access to
completed/archived paper records
Controls associated with storage of and access to
completed / archived paper records, and who has
access to these documents
Generation and reconciliation of
documents
Guidance on controls associated with generation and
reconciliation of documents to prevent potential misuse.
Hybrid
Manual activities when recording
or transferring data between paper
and electronic formats
Data accuracy associated with manually recording data
without a controlled second format, transcription of
manually recorded data into an electronic system, and
controls around True Copy (paper to electronic)
Electronic
Access controls for electronic
systems
Different levels of controls to ensure the right level of
access to electronic records and systems is applied.
Audit trail review
Discusses taking a risk-based approach to identify which
items to review as part of the manufacturing batch data
and setting parameter / configuration settings audit trail
reviews, and how frequently to perform the review.
Backup of electronic data
Discussing the controls to ensure electronic raw data is
backed up to ensure a copy of the data remains available
so it can easily be retrieved in its original format.
7 Use of electronic data
Data integrity controls associated with using electronic
raw data to generate system reports / records and the
controls associated with the transfer / migration of the
raw data to another location
Sections 5.3.1–5.3.7 have been developed with manufacturing operations in mind; however, many
of the concepts discussed can also be applied to other functional areas (e.g., analytical laboratories).

### 5.3 Areas of Differentiated Data Integrity Controls

While all data potentially impacts the quality of the product, the impact to the manufacturing
processes governing product quality and patient safety varies depending on the type of data, record,
or system being used to govern the process. For the seven categories identified where different levels
of data integrity controls are acceptable, a criticality rating of High, Medium, or Low was used. (See
Section 4.2.1 for definitions of criticality.)
Sections 5.3.1–5.3.7 detail how differentiated controls may be applied for different levels of criticality.
Most of the controls discussed are prevention controls, but a few detection controls are included as well.
Some of the differentiated data integrity controls should be applied at the system level, others relate to
records, and some are relevant to data points. Each table provides the necessary details concerning detec-
tion vs. prevention and the level where the control should be applied (data point, record, or system).
Those sections provide examples of critical activities designated as High, Medium, and Low for il-
lustrative purposes and are not prescriptive; the examples are intended to stimulate thinking. Each
entity should assess its own data and apply the concepts in this technical report to determine the
controls necessary for their operations. In addition, suggestions are provided throughout, illustrative
only, regarding the frequencies at which certain activities should take place. Organizations should
determine the frequencies that are most applicable to their operations using a risk-based approach to
ensure that the periodicity of activities is commensurate with the risks identified.
Sections 4.3 and 4.4 discuss that, in the data vulnerability model, the risks associated with data
management, human factors, and GMP process must be identified, and the controls in place must
be assessed to confirm they are sufficient for the risks identified. Sections 5.3.1–5.3.7 primarily
discuss data management controls.
The controls discussed below would result in data being placed in one of the green boxes (H/H;
M/M; L/L) of the 9-Box grid (Table 4.3-1). That is, the controls would be adequate for the critical-
ity of the data and the identified risk factors. If fewer controls are in place than those recommended
in Sections 5.3.1–5.3.7, the level of data management controls is not adequate for that level of data
criticality. On the other hand, if more controls than required are in place, the data vulnerability in
these specific areas is very low.
The controls discussed in Sections 5.3.1–5.3.7 are only one part of the controls that need to be
considered to assess the overall data vulnerability. Organizations also must consider the data manage-
ment controls, human factor controls, and GMP process controls that apply without any possible
differentiation in level of control. Whether the levels of control required are differentiated or not, all
controls must be described in SOPs.

#### 5.3.1 Storage of and Access to Completed and Archived Paper Records

**Table 5.3.1-1 identifies several prevention controls related to the storage of and access to completed**

or archived paper records. These controls are applied at the record or system level and are meant to
prevent a potential data integrity issue from occurring.
All documents should be stored in a medium that will not degrade the readability of the records
upon storage. Documents of High and Medium criticality, including batch records and validation
protocols, should be stored in a climate-controlled environment with a card key or restricted access
and a logbook recording the removal and return of records. An annual review of who has access to
the room is recommended.
For documents with Low criticality, such as completed user-access authorization forms where evi-
dence of training exists in another system, storage in an office retention location, such as a local file
cabinet with limited access to the file cabinet keys, would suffice. Who has access to the keys should
be reviewed on a bi-annual basis.

**Table 5.3.1-1**

Data Integrity Control Grid for Storage of and Access to Completed and Archived Paper Records
Storage of and Access
to Completed & Archived
Paper Records
High Data Criticality
Medium Data Criticality
Low Data Criticality
Prevention Control
Where Stored
Climate-controlled room
Climate-controlled room
Office retention location
How Removed &
Returned
Access control to room
and logbook recording of
removal and return of the
record
Access control to room
and logbook recording of
removal and return of the
record
Logbook recording of
documents checked-in/
checked-out
Access Control
Card Key access or
limited key access with
entry documented in
logbook
Card Key access or
limited key access with
entry documented in
logbook
Limited key access
Periodic User Access
Review
Annually
Annually
Every 2 years

#### 5.3.2 Generation and Reconciliation of Documents

**Table 5.3.2-1 identifies several prevention controls related to the issuance and reconciliation of**

paper records. The controls described are applied at the record or system level.
Highly critical records, such as batch records, should be issued by a designated unit and have a
unique identifier. The printing of these records should be controlled, i.e., a specified number of
people authorized by the quality unit to print, with full traceability of the number of copies printed,
when they were printed, and by whom. Full reconciliation of the record, including extra sheets or
additional pages, is required after use. Destruction procedures for unexecuted (blank) forms should
be in place and may be performed by the issuing unit.
For Medium-critical documents, like the form used for calibration, a unique identifier for the record
is not required. Controlled printing should ensure that the templates are printed by a limited num-
ber of people authorized by the quality unit. While an unlimited number of copies of the template
is allowed, a process should be in place to avoid misuse, including use of expired or outdated forms.
Full reconciliation of records and pages based on the quantity issued is warranted. Destruction
procedures for unexecuted (blank) forms should be in place and may be performed by the operating
unit or issuing unit.
Low-critical documents, for example, the blank forms used for recording training activities, may be
printed by the end-user without a unique identifier, and no reconciliation activities are required after
use. The number of copies that can be printed is not limited, and any unexecuted (blank) forms may
be discarded by the user without the quality unit being directly present in the process.
Even though the quality unit does not need to be present for the destruction of unexecuted (blank)
forms, it must maintain oversight to ensure that procedures are followed (e.g., through approval of
relevant SOPs and/or audit).
Acceptable quality unit oversight may constitute all or part of the following:
•
Quality unit is responsible for approving the procedure,
•
Processes are reviewed in practice as part of the self-inspection program, and/or
•
Processes are reviewed in practice as part of the routine quality unit walkthrough of manufacturing.

**Table 5.3.2-1**

Data Integrity Control Grid for Issuance and Reconciliation of Paper Records
Generation and
Reconciliation of Documents
High Data Criticality
Medium Data
Criticality
Low Data Criticality
Prevention Control
Controlled issuance – How
Unique identification for each
record (including additional
pages/sheets needed to
complete the activity)
No unique
identification needed
No unique
identification needed
Controlled issuance – Who
Designated unit; individuals
authorized by quality unit
Limited number of
individuals authorized
by quality unit
Anyone
Reconciliation
Full reconciliation of records
and pages based on unique
identifier
Full reconciliation of
records and pages
based on quantity
issued
No reconciliation
Controlled Print
Required
Required
Not required
Bulk printing allowed?
No
Yes, with process
in place to avoid
misuse
Yes
Destruction of blank forms
Performed by the issuing
unit, quality unit oversight
required
Performed by the
operating or issuing
unit, quality unit
oversight required
Performed by the
individual, quality
unit oversight
required

#### 5.3.3 Manual Activities when Recording or Transferring Data between Paper and

Electronic Formats
Hybrid data or records are used in many manufacturing operations. An example of this is a system
that captures and stores electronic raw data and generates a printed report that is used during the
documentation review and approval process. When this happens, the data in the electronic system and
the printed report (e.g., times, temperatures, critical parameters, pass/fail results) must be the same.
In some situations where hybrid systems are employed, it is acceptable to differentiate the levels of
controls required based on the criticality of the activity. For manual activities, when recording or
transferring data between paper and electronic formats, three scenarios were identified:

##### 5.3.3.1 Data Accuracy when Manually Recording Data without a Controlled Second

Format

##### 5.3.3.2 Transcription of Manually Recorded Data into an Electronic System

5.3.3.3 True Copy (Paper to Electronic)
The controls are applied at the data level for the first and second scenarios, and at the record level
for the true copy scenario. All controls are designed to prevent a potential data integrity issue from
occurring.

##### 5.3.3.1 Data Accuracy when Manually Recording Data without a Controlled Second Format

**Table 5.3.3.1-1 applies when a manual recording (recording on paper or direct manual recording**

into an electronic system, like a manufacturing execution system (MES)) is made without a con-
trolled second format available. This means that a reading, measurement, or result is observed from a
display or another source, and no audit trail, printout, photo, or other media is available to corrobo-
rate the data recorded. These recommendations are intended for use while an organization is mov-
ing toward technological improvements that allow for a controlled second format such as electronic
audit trail, printout, photo, or other media.

For all situations, the recording of the data by the first person must be performed contemporane-
ously. For Highly critical data, the recording of the data should also employ real-time verification by
a peer (“four-eye approach”). A downstream quality unit verification is also required. For example,
when charging a raw material to the equipment, if the weight is not captured electronically and
no printer is attached to the balance, one person must record the data and a second person must
confirm at the time of charging that the correct quantity was added to the equipment and that the
quantity was documented accurately. The quality unit then must review the recorded information
within a timeframe defined by written procedures.
For Medium-critical data points, for example a reading of temperature and humidity data for a
compression operation, downstream verification by a peer is recommended to ensure that the
requirements are met.
Low-critical data points, for example the start time of a secondary packaging operation for
products not time- or temperature-sensitive, only require a general check by a peer to en-
sure adherence to good documentation practices. A second-person check for accuracy is not
required.

**Table 5.3.3.1-1	 Data Integrity Control Grid for Data Accuracy when Manually Recording without a Controlled**

Second Format
Data Accuracy when
Manually Recording Data
without a Controlled Second
Format
High Data Criticality
Medium Data
Criticality
Low Data Criticality
Prevention Control
Second check for data
recording – What
action?
Four-eyes and
downstream quality
unit review to ensure
requirements are met
Downstream verification
that raw data meets
requirements
General check of
adherence to good
documentation
practices, but no check
for accuracy required
Second check for data
recording – Who?
Real time by peer.
Downstream quality unit
review
Peer review
Peer review
Second check for data
recording – When?
Real-time by peer.
Quality unit review
before batch release
Before the next critical
process step or before
batch release, as
appropriate
Before batch release
or within timeframe
specified in procedures

##### 5.3.3.2 Transcription of Manually Recorded Data into an Electronic System

**Table 5.3.3.2-1 applies to transcription of data manually recorded in paper format into an electronic**

system. This may occur, for instance, when data must be entered manually into an MES from a
printout because equipment is unable to connect to the MES.
For High-criticality data, like a CPP, second-person verification against the initial recorded data must
be performed by a supervisor or the quality unit, as described by quality oversight procedures. The
second-person review should ensure that the data entered manually into the electronic system cor-
responds to the original raw data. As original raw data is available (print out/manual recording), the
second-person review need not be performed at the time of the activity but must be completed prior
to batch disposition.
For Medium-criticality data, like a reading of environmental data for a compression operation, the
second-person verification may be performed by a peer. For Low-critical data, like the time of start-
ing manufacturing, no second verification is needed.

**Table 5.3.3.2-1	 Data Integrity Control Grid for Data Accuracy when Transcribing Manually Recorded Data into an**

Electronic System
Transcription of Manually Recorded
Data into an Electronic System
High Data
Criticality
Medium Data
Criticality
Low Data
Criticality
Prevention Control
Second review required for data
transcription – Who?
Supervisor or Quality
Unit
Peer
None
5.3.3.3	 True Copy (Paper to Electronic)

**Table 5.3.3.3-1 illustrates the controls needed for creation of a true copy, going from a paper record**

to an electronic record. True copies must be maintained using the same controls that applied to the
original paper record.
For High-criticality records, such as paper batch records that may be needed for downstream use by
a sister site or another department, a trained user can make the true copy, but a second person from
the quality unit must perform a documented review. The review must ensure the scan is legible, ac-
curate, and complete (all pages, all entries) and confirm that all entries on the true copy provide all
information and data that are contained on the original record. For example, if data is color-coded
or highlighted, the true copy must reflect the same color-coding or highlighting, with the intent of
capturing the context and meaning. In addition, the original record may be discarded with quality
unit oversight, unless the original document has a seal, watermark, or similar identifying mark that
cannot be accurately reproduced electronically, in which case it cannot be discarded. The quality unit
should determine the level of oversight required for destruction, which may range from quality unit
presence during destruction to periodic confirmation of compliance with procedures.
For Medium-criticality records, like a validation protocol, a trained user can make the true copy. A
documented second-person review is required, though the second person need not be from the qual-
ity unit. The original record may be discarded by the operating unit unless the original document has
a seal, watermark, or identifying mark. While the quality unit does not need to be directly involved
in the destruction process, it must retain a suitable level of oversight to ensure the procedures are
followed.
For Low-criticality records, such as completed user access authorization forms where evidence of
training exists in another system, the person making the true copy must document that they re-
viewed the scan for legibility, accuracy, and completeness. The original may be discarded by the
individual, with quality unit oversight to ensure that procedures are followed.
As with all controls relating to data integrity, processes relating to true copies, regardless of critical-
ity, must be documented in SOPs. A record must be maintained to reflect when each document was
destroyed and who destroyed it.

**Table 5.3.3.2-1	 Data Integrity Control Grid for Data Accuracy when Transcribing Manually Recorded Data into an**

Electronic System
Transcription of Manually Recorded
Data into an Electronic System
High Data
Criticality
Medium Data
Criticality
Low Data
Criticality
Prevention Control
Second review required for data
transcription – Who?
Supervisor or Quality
Unit
Peer
None
5.3.3.3	 True Copy (Paper to Electronic)

**Table 5.3.3.3-1 illustrates the controls needed for creation of a true copy, going from a paper record**

to an electronic record. True copies must be maintained using the same controls that applied to the
original paper record.
For High-criticality records, such as paper batch records that may be needed for downstream use by
a sister site or another department, a trained user can make the true copy, but a second person from
the quality unit must perform a documented review. The review must ensure the scan is legible, ac-
curate, and complete (all pages, all entries) and confirm that all entries on the true copy provide all
information and data that are contained on the original record. For example, if data is color-coded
or highlighted, the true copy must reflect the same color-coding or highlighting, with the intent of
capturing the context and meaning. In addition, the original record may be discarded with quality
unit oversight, unless the original document has a seal, watermark, or similar identifying mark that
cannot be accurately reproduced electronically, in which case it cannot be discarded. The quality unit
should determine the level of oversight required for destruction, which may range from quality unit
presence during destruction to periodic confirmation of compliance with procedures.
For Medium-criticality records, like a validation protocol, a trained user can make the true copy. A
documented second-person review is required, though the second person need not be from the qual-
ity unit. The original record may be discarded by the operating unit unless the original document has
a seal, watermark, or identifying mark. While the quality unit does not need to be directly involved
in the destruction process, it must retain a suitable level of oversight to ensure the procedures are
followed.
For Low-criticality records, such as completed user access authorization forms where evidence of
training exists in another system, the person making the true copy must document that they re-
viewed the scan for legibility, accuracy, and completeness. The original may be discarded by the
individual, with quality unit oversight to ensure that procedures are followed.
As with all controls relating to data integrity, processes relating to true copies, regardless of critical-
ity, must be documented in SOPs. A record must be maintained to reflect when each document was
destroyed and who destroyed it.

**Table 5.2.3.3-1	 Data Integrity Control Grid for True Copy (Paper to Electronic)**

True Copy (Paper to
Electronic)
High Data Criticality
Medium Data
Criticality
Low Data Criticality
Prevention Control
Review requirements
Documented review
by second person from
the quality unit for
legibility, accuracy, and
completeness
Documented review
by second person
(not necessarily from
the quality unit) for
legibility, accuracy, and
completeness
Documented verification
by person performing
the scan for legibility,
accuracy, and
completeness
Discard of original
allowed
Yes, as defined by
quality unit oversight,
unless there is a seal,
watermark, or other
identifier that can’t be
accurately reproduced
electronically.
Yes, performed by
the operating unit,
unless there is a seal,
watermark, or other
identifier that can’t be
accurately reproduced
electronically.
Quality unit oversight
required
Yes, individual can
discard original
Quality unit oversight
required

#### 5.3.4 Access Controls for Electronic Systems

Access controls to electronic systems are required to prevent potential data integrity issues from oc-
curring. Table 5.3.4-1 describes several differentiable controls related to access to electronic systems.
For systems storing High-criticality data, such as an MES, historian, or filter integrity tester used
during sterile filling, unique identification and authentication controls should be in place for each
individual user. Other features also should be available for use, such as mandatory password changes
every 90 days, lock-out after five failed attempts, password recycling only allowed after 10 cycles, and
an annual review of user accounts.
For systems storing Medium-criticality data, like parameter-setting or executed run files for a wash-
ing machine, many of the controls for systems storing Highly critical data likewise should be ap-
plied. Certain measures can be less stringent: mandatory password changes can occur every 180 days
(instead of 90), passwords can be recycled after 5 cycles (instead of 10), and users locked-out after 10
incorrect tries (instead of 5).
For Low-critical systems, for example, an HMI on a secondary packaging line that controls conveyor
speed but does not store data, the access controls may be far less rigorous. For these types of systems,
a passcode or group accounts are acceptable. Controls must be in place, however, to ensure segre-
gation of duties between user levels (i.e., administrator vs. engineer vs. operator). The passcode or
group accounts should be changed annually. These controls may also be used for other Low-critical
activities that do not require the action to be attributable. For example, a group account may be used
to press the start/stop button on a packaging line when the system requires a log-in to activate the
stop/start function.
Automatic log-out is not discussed as a differentiated control but should be considered as an overall
control factor. The amount of time that should be allowed to pass before an inactive user is automati-
cally logged-out should be commensurate with the risks identified, and documented accordingly
As stated above, the suggested frequencies at which certain activities should take place are illustra-
tive only. Organizations should determine the frequencies that are most applicable to their opera-
tions using a risk-based approach to ensure that the periodicity of activities is commensurate with
the risks identified. This assessment should consider the overall system architecture, the interfaces
between systems, criticality of access by unauthorized persons, and the potential for network security
breaches.

**Table 5.3.4-1**

Data Integrity Control Grid for Access Controls for Electronic Systems
Access Controls for
Electronic Systems
High Data Criticality
Medium Data
Criticality
Low Data Criticality
Prevention Control
Access to Electronic
systems – HOW
Identification and
authentication (User ID
+ Password)
Identification and
authentication (User ID
+ Password)
Passcode/group
account based on role &
information access
Password change
frequency
Every 90 days
Every 180 days
Annually
Periodic user account
access review
Annually
Annually
Every 2 years
Account lock-out after
repeated incorrect
password entries
5 incorrect password
entries
10 incorrect password
entries
Never
Password recycling
– Reuse of previously
used passwords
10 cycles
5 cycles
N/A

#### 5.3.5 Electronic Audit Trail Review

Audit trails are a form of metadata that records details such as the creation, addition, deletion, or
alteration of data within a system. An audit trail provides controls for secure recording of lifecycle
details, without overwriting the original record. Where equipment (e.g., instruments, devices) are
used to capture, create, process, report, store, or archive relevant GMP data electronically, the system
design must always include the provision and retention of a suitable audit trail.
Secure, computer-generated, time-stamped audit trails must allow for reconstruction of the history
of events relating to the record, including the “who, what, and when” of the action. Where techni-
cally possible, comments should be added, in the case of modifications or corrections, so that the
why of the activity also is recorded as part of the audit trail. Where not technically possible to record
in the audit trail the reasons for changes or deletions to GMP-relevant data, alternate documentation
should be used.
The electronic audit trail may comprise multiple sources related to the equipment; that is, the infor-
mation may be held in files called something other than “Audit Trail,” for example, event log, alarm
log, system log, history file, trends, or reports. Understanding where the information is recorded
within the system, at both the operating system and application level, is important to help protect
the data and understand where in the system to look when performing an audit trail review.
In the following sections, audit trail review is discussed for three different types of data contained
within the electronic audit trails:
•
Data associated with batch setup, for example, the recipe used, and the set-points or times
planned for specific activities during the batch
•
Batch run data, which is data from the manufacturing process, for example, temperatures, dura-
tion of activities, who performed the activities
•
System configuration data, which are not batch-relevant data but the data associated with the
configuration of the system, for example, user-account information, privileges granted to users,
where data is stored
Reviewing audit trails enables detection of potential data integrity issues. Some regulations require
that audit trails be reviewed on a periodic basis (2-3). There is no expectation that every part of the
audit trail will be reviewed for every batch; rather, it is expected that a risk-based approach will be
taken to identify the appropriate level of review to conduct.

The person performing the audit trail review must be independent and technically capable of under-
standing the audit trail. The person should not have been involved in the creation or verification of
the data being reviewed.

##### 5.3.5.1 Audit Trail Review Assessment

An audit trail review assessment (ATRA) is a risk-based tool that can help determine which elements
within the audit trail should be reviewed, and the appropriate frequency. The tool may be used for
any system that has an electronic audit trail, for example, systems directly used in manufacturing as
well as supporting systems such as building automation and water for injection.
The ATRA focuses on the detectability of changes to the data, the criticality of the data (in terms of
patient safety or product quality), and the probability or capability for changes to the data to occur.
A cross-functional team should be assembled to conduct the ATRA. The team should comprise
people who fully understand the technical capabilities and limitations of the system, how the system
is set up (from a user management perspective), where the data is stored, what type of data is part of
the audit trail. The team also should include users who are familiar with operating the system.
The first step in the process is to score each of the three factors—detectability, severity, and prob-
ability—that may require review based on the system controls in place for each element in the audit
trail. For each factor, a lower score represents lower risk. Examples of scores that may be used are
provided in this section, although each entity may modify the scoring based on its own analysis and
risk tolerance.
•
Detectability Score is based upon the likelihood that modification or deletion of data will be de-
tected. There are two possible Detectability Scores: 1 or zero.
If it is possible to detect any modifications or deletions to the data contained within the audit
trail, and this data is already reviewed as part of an existing review as required by SOP, perform-
ing additional review of the audit trail to detect potential data integrity issues is not required.
For example, if the batch report lists the critical parameters used during manufacturing and
shows any changes made to these parameters during batch manufacturing, an audit trail review
of the same information need not be conducted. (This assumes that the batch report is generated
automatically from the equipment and cannot be manipulated.) Score = 0.
If the data has not already been reviewed or has only been partially reviewed (i.e., not all criti-
cal data is in scope of the batch-wise data review), further assessment of the audit trail may be
required. Score = 1.
•
Severity Score is based upon the data criticality; it assesses the potential impact if data is modified
or deleted. There are three possible Severity Scores: 10, 4, or 1.
If the data is considered Highly critical or has a direct impact on patient safety or product qual-
ity (e.g., changing the temperature to make it appear it was within the validated range, despite
being outside the range), the potential impact is of high severity. Score = 10.
If the data has an indirect impact on patient safety or product quality, i.e., changes to data that
result in a compliance risk only, with indirect impact to only product quality or patient safety
(e.g., changes to time zone where the raw data and batch-related data is not affected), it is of
medium potential severity. Score = 4.
If the data has negligible or no impact on patient safety or product quality (e.g., the start time of
an operation, provided that this is not a CPP and does not affect duration), it is of low potential
severity. Score = 1.
•
Probability Score is based on the capability of the data to be modified or deleted by system users
and administrators. There are three possible Probability Scores: 10, 2, or 1.

If the data can be modified or deleted by a user, the chance that such changes will happen is
higher. “User” refers to any person not identified as an independent administrator; “power users”
are considered users. Score = 10.
If the data cannot be modified or deleted by a user but can be modified or deleted by an inde-
pendent administrator (i.e., an individual with no direct interest in the data), the chance that
such changes will occur is lower. Score = 2.
If the data cannot be modified or deleted by any user or administrator, it is considered a very low
probability. Score = 1.
Next, the three scores (Detectability, Severity, and Probability) are multiplied to provide the ATRA
final score. The lower the score, the lower the risk.

**Table 5.3.5.1-1 illustrates how the final score can be used to determine the needed frequency of**

review. Some examples are provided in Section 5.3.5.2 that highlight how this can be used together
with different elements of the audit trail to determine the full audit trail review requirements for a
system.

**Table 5.3.5.1-1	 ATRA Final Score and Frequency Review**

Frequency of
System Use
Needed Frequency of Audit Trail Review
0–10 Score
11–20 Score
40 Score
100 Score
Daily / Weekly
Event-based
Twice per year
Weekly
Batch-wise
Monthly
Event-based
Yearly
Monthly
Batch-wise
Less Than Monthly
Event-based
Every 2 years
Quarterly
Batch-wise
The timeframes indicated are illustrative only. Organizations should assess their systems and apply
critical thinking when considering the criticality of the activity being performed as well as the poten-
tial for impact on product quality and patient safety. Using a risk-based approach, the periodicity of
reviews should be commensurate with the risks identified.
If during periodic review a number of data integrity breaches are discovered, the controls that are
(or should be) in place and/or the frequency of the review should be reevaluated to prevent future
breaches or to detect breaches sooner.

##### 5.3.5.2 Practical Examples of ATRA

An audit trail contains data from (1) batch setup data, (2) batch run data, and (3) system configura-
tion data. Each of these parts of the audit trail have a number of elements that could be considered
for audit trail review. Hence, the ATRA tool should be used for each individual element to deter-
mine the final score.
Elements for the batch setup data and batch run data parts of the audit trail, where data controls
may be vulnerable and may have an impact on critical batch data, might include:
•
Were any of the recipe parameters modified outside the validated range during the execution of
the batch?
•
Were changes made to CPPs (set points or allowed tolerance ranges) during manufacturing?
Were these within the validated ranges?
•
Were the calculation parameters edited or modified?
•
Were changes to the time made that impact the duration of (time-sensitive) parts of manufactur-
ing, i.e., an operation ran longer or shorter than was expected?

•
Were segregation of duties in place where required and was the person who performed the activ-
ity authorized to perform it (e.g., different reviewer and approver)?
•
Were there GMP-relevant incidents, for example, GMP critical alarms?
•
Was any data relevant to batch quality modified or deleted?
Similarly, for the system configuration data, a number of elements may be vulnerable and should be
considered when using the ATRA tool, such as:
•
Were changes made to the system date or time?
•
Was the report template or any batch report modified, edited, deleted, or renamed?
•
What changes have been made to user access accounts or the privileges assigned at the user level?
Do these changes still ensure segregation of duties?
•
Were any edits, modifications, or deletions made to the system configuration (e.g., administra-
tion changes, database settings, change of data storage location, system settings or functionality)?
•
Were there changes, edits, or deletions of audit trails, history logs, or files? Were any renamed?
•
Was any unusual activity recorded in the user activities log (login, logoff, unauthorized logins)?
Systems with high technical capabilities that are being fully utilized (e.g., strong access control, segre-
gation of duties) are less vulnerable, therefore, a significantly reduced frequency of audit trail review
is acceptable. On the other hand, if the system has limited technical capabilities (e.g., no difference
between administrator and operator privileges), the system is more vulnerable, and a more extensive
review of the audit trail would be appropriate.
Table 5.3.5.2-1 contains a few examples of how the ATRA tool can be used for a filter integrity
tester. The example does not represent a full ATRA review for a filter integrity tester but covers a few
audit trail elements for demonstrative purposes to clarify the use of an ATRA.
The scores in these examples are based on the definitions in Section 5.3.5.1. A brief explanation is
added to justify the scoring. The scores for detectability, severity, and probability are multiplied, giv-
ing a Final Score. Then, the data in Table 5.3.5.1-1 is used to determine the frequency of audit trail
review for that element (Outcome).

**Table 5.3.5.2-1	 Example of How ATRA Tool is Used to Score a Filter Integrity Tester**

Audit Trail Element
Detectability
Score
Severity
Score
Probability
Score
Final Score
Comments
Batch Setup Data
element: Changes to recipes
Detectability = 1. Will not be detected by any other review during batch review process.
Severity = 10. If the recipe is modified, it can impact the result obtained, and potentially product
quality.
Probability = 2. Operators do not have access to change set-points in recipes.
Outcome – Audit trail review twice per year for changes to recipes is required, as the equipment is
used daily.
Batch Run Data element:
Changes to test result
Detectability = 0. The pass / fail result is part of the printout.
Severity = 10. If the result is modified this can have a direct impact on product quality.
Probability = 1. The result is generated automatically and it is not possible for any user to modify
the result obtained.
Outcome – An audit trail review is not required to check for changes to test results as it is not
possible to change test results, and the data is part of the batch report.
Batch Run Data element:
Repeated or aborted tests
Detectability = 1. The operator can hide a printout from an aborted or rerun test which will not be
detected.
Severity = 10. Failure to disclose all test results may have an impact on product quality.
Probability = 10. This is a manual operation, so a score of 10 is assigned.
Outcome – A batchwise audit trail review is required to check for repeat tests or aborted runs not
included as part of the batch data package.
System Configuration
Data element: Changes to
user access / permissions
Detectability = 1. Will not be detected by any other review during batch review process.
Severity = 10. If the user access or privileges are modified, users may have access to perform
activities that can potentially impact product quality.
Probability = 2. Operators do not have access to change user privileges or grant new user access,
only administrators have the required access
Outcome – Audit trail review twice per year for changes to user accounts and privilege levels is
required, as the equipment is used daily.
System Configuration
Data element: Changes to
data storage location
Detectability = 1. Will not be detected by any other review during batch review process.
Severity = 4. A potential compliance issue may arise should the change of location not be setup
correctly.
Probability = 2. Only administrators have the required access
Outcome – Despite the equipment being used daily, the ATRA indicates that a review of the audit
trail to check for changes to the data storage location is only required if there is a triggering event, such
as a deviation.

Conclusions that can be drawn from the examples in Table 5.3.5.1-1 are:
•
An audit trail review should be performed batchwise to check for any aborted or repeat tests or
aborted runs not included as part of the batch data package.
•
An audit trail review should be performed every six months to check for changes made by the
administrator to recipes, user accounts, or privilege levels assigned to users.
•
A review of the audit trail for changes to pass/fail results is not required.
•
A review of the audit trail to check the storage location for data is only required should a trigger-
ing event prompt a specific review of this data.
Completing the ATRA for the other elements of the audit trail will allow the user to more fully un-
derstand the parts of the audit trail that require review and the necessary frequency of that review.

#### 5.3.6 Backup of Electronic Data

The next category relates to preventive controls associated with the backup of electronic data. Two
different scenarios have been identified where it is acceptable to differentiate the controls applied
based on criticality.
The first scenario relates to the frequency of performing the backup of the manufacturing data stored
electronically. Companies should consider developing a principle-based backup strategy in order to
differentiate the frequency of backups. This strategy should take into account the company’s risk
tolerance, i.e., how manufacturing activities can be recreated in the event of a system failure when
data has not been backed up. If the only evidence of an activity that impacts the safety and/or quality
of the product is through the lost electronic data, the company must be prepared to reject the batch,
and a more frequent backup may be warranted. On the other hand, if the major activities can be
recreated using other means (e.g., printouts, manually recorded information), that may be used to
justify a less-frequent backup of electronic data.
In addition, the volume of data being generated within a given time period and the capability of
the electronic system to store that volume of data without overwriting existing data should also be
considered. This situation will be further discussed in the second scenario.
If the equipment is capable of automated backups, backups are recommended at the same frequency
at which data is generated. If new data is being generated daily (e.g., using an MES or historian), a
daily backup is warranted.
The second scenario is associated with looped memory. For the purposes of this technical report,
looped memory is used in an electronic system with a limited storage capacity. Once the capacity
limit is reached, new data automatically overwrites older data. For example, in a compression ma-
chine capable of storing 10 batches worth of data, the data for Batch 11 automatically overwrites the
data for Batch 1.
Table 5.3.6-1 describes controls for systems with a looped memory. For systems storing Highly
critical data, like certain makes or models of filter integrity testers used in sterile filling operations,
the backup should occur before the data is overwritten. A similar expectation should be in place for
systems storing Medium-critical data, such as a pH meter used on the shop floor. For systems storing
Low-critical data, like secondary packaging systems that do not store data relating to quality attri-
butes or such parameters as expiry dates, the backup should ensure that the data will not be overwrit-
ten before batch disposition has occurred.

**Table 5.3.6-1**

Data Integrity Control Grid for Data Backup for System with Limited Storage Capacity
Backup of Electronic Data
High Data Criticality
Medium Data Criticality
Low Data Criticality
Prevention Control
Looped Memory
Perform backup before
data is overwritten
Perform backup before
data is overwritten
Ensure availability until
batch disposition is
complete

#### 5.3.7 Use of Electronic Data

Once electronic data is generated, the information may be further processed in numerous ways. In
the two scenarios described in Sections 5.3.7.1 and 5.3.7.2, the controls to be applied may be dif-
ferentiated based on criticality: when electronic data is exported to generate reports or records, and
when data is transferred or migrated between electronic systems. These controls are targeted at the
data and record levels to help prevent a data integrity incident from occurring.

##### 5.3.7.1 Exporting Electronic Data to Generate Reports and Records

**Table 5.3.7.1-1 identifies prevention controls related to reports and records generation. For reports**

and records used to display High-critical data, such as a batch record from an MES used for making
release decisions, validation with change control and appropriate test plans is required for changes
to the report template. The validation should ensure that the report or record is accurate, and that
all data displayed will remain unchanged from the electronic raw data. IT or automation personnel
should perform these changes to the template and ensure that the content of the reports and records
are static and cannot be altered in any way.
For reports and records related to Medium-critical data, such as a building management system
monitoring temperature and humidity, IT or automation personnel should perform an initial valida-
tion. Any changes to the report template should be performed following SOPs, but revalidation of
the template would not be required. That the report contains limited flexibility (via filters or drop
downs) and is working as intended is acceptable, so the user may run these reports based on a pre-
defined set of filters or criteria.
For reports and records displaying Low-critical data, verification governed by work instructions
should suffice. The business unit creates these reports and records, and their content may be flexible
in nature, for example, exporting data into a data lake for future non-GMP analysis.
Regardless of the criticality, the quality unit should review and approve changes to report templates,
especially for any changes that could impact the information displayed.

**Table 5.3.7.1-1	 Data Integrity Control Grid for Data Export for Generation of Reports and Records**

Data Export or Generation of
Report and Records
High Data Criticality
Medium Data
Criticality
Low Data Criticality
Prevention Control
Report validation,
verification
Validation, revalidation if
changed
Initial validation only
Verification
Documentation of
changes in reports
Change control and test
plan
Procedural control
Work instructions
Modification of template
performed by
IT/Automation unit
IT/Automation unit
Business unit
Report content flexibility
Static/fixed
Limited flexibility, drop-
downs or predefined
selection criteria
Flexible, based on criteria
defined in the work
instructions

##### 5.3.7.2 Data Transfer and Migration Between Electronic Systems

The technical report team also identified different levels of control that may be applicable for the
transfer or migration of electronic data based on criticality, as illustrated in Table 5.3.7.2-1.
For High- or Medium-critical data transfers and migrations, the transfer of the electronic data should
be prepared using full change control, with a test plan in place to ensure that all data is transferred.
It also is advisable to use a verification tool, such as a checksum, to confirm that all data sent was
received. Two examples of this type of transfer are presented in this section.
One example is the migration of data from one platform to another as part of a software or hard-
ware upgrade, for example, when moving from one software version to another, moving from an old
server to a new server, or moving to the cloud is one type of transfer. This is generally considered a
once-off activity specifically associated with the upgrade.
A second example is the transfer of High- and Medium-critical batch data (e.g., CPPs, calibration
records, environmental monitoring data) from a standalone system to an upper-level system like an
MES or data historian. This type of data transfer occurs on a defined periodic basis (e.g., once a day,
once a week, after each batch) based on how the data transfer has been set up. For both examples,
the transfer or migration of the data should be safeguarded by change control, a test plan, and a tool
to verify that all the data have been transferred or migrated.
Data of varying criticalities are regularly transferred into different formats for making continuous
process verification conclusions, for example, transferring data into a data lake for further trending or
analysis. These are considered Low-critical transfers, so a procedural control is adequate for describ-
ing the steps to be taken to transfer the data.

**Table 5.3.7.2-1	 Data Integrity Control Grid for Data Transfer and Migration Between Electronic Systems**

Data Transfer and Migration
High Data Criticality
Medium Data Criticality
Low Data Criticality
Prevention Control
Data migration – How
executed to ensure
complete transfer of data
Under change control
with test plan
Under change control
with test plan
Under procedural
control
Verification of data
migration
Checksum, or
equivalent tool, that
confirms all data sent
was received
Checksum, or equivalent
tool, that confirms all
data sent was received
N/A

## 6.0 Controls for Big Data as it Relates to Data Integrity

Pharmaceutical manufacturing data is being collected at an accelerated rate, beyond human processing
capability using traditional mechanisms. These challenges increasingly drive the need for governance and
active controls of data and information. Processes, roles, and standards must be created to allow the effec-
tive and efficient use of information and technology tools to enable an organization to achieve its goals.
A forthcoming PDA technical report will provide additional guidance on governance and controls
for big data in manufacturing. That technical report will address topics such as data classification,
data ownership, access management, source data, results and data insights, and change management,
within the framework of governance and controls of big data in manufacturing.
Collectively, these two technical reports will provide guidance on the management of data and big
data in a regulated pharmaceutical or biopharmaceutical facility.

## 7.0 References

1.
Parenteral Drug Association. Technical Report
No. 80: Data Integrity Management System for
Pharmaceutical Laboratories; PDA: Bethesda,
Md., 2018; p 63.
2.
U.S. Food and Drug Administration. Data
Integrity and Compliance with cGMP: Questions
and Answers, Guidance for Industry; U.S. De-
partment of Health and Human Services: Silver
Spring, Md., 2018.
3.
Medicines and Healthcare products Regula-
tory Agency. ‘GXP’ Data Integrity Guidance and
Definitions, Rev. 1; MHRA: London, 2018.
4.
World Health Organization. Annex 5: Draft
Guidance on Good Data and Record Manage-
ment Practices; WHO: Geneva, 2016 p46.
5.
Pharmaceutical Inspection Convention/Co-
operation Scheme (PIC/S). Draft PIC/S Good
Practices for Data Management and Integrity in
Regulated GMP/GDP Environments; PIC/S:
Geneva, 2018.
6.
Parenteral Drug Association. Technical Report
No. 54-2: Implementation of Quality Risk Man-
agement for Pharmaceutical and Biotechnology
Manufacturing Operations, Annex 1: Case Study
Examples for Quality Risk Management in Pack-
aging and Labeling; PDA: Bethesda, Md., 2013.
7.
International Conference for Harmonisation.
Quality Guideline Q10: Pharmaceutical Quality
System; ICH: Geneva, 2008.
8.
International Conference for Harmonisation.
Quality Guideline Q9: Quality Risk Manage-
ment; ICH: Geneva, 2005.
9.
U.S. Food and Drug Administration. 21 CFR
Part 211–Current Good Manufacturing Practice
for Finished Pharmaceuticals, Subpart J–Records
and Reports; Government Publishing Office:
Washington, D.C., 2005.
10.	 U.S. Food and Drug Administration. PART
133—Drugs; Current Good Manufacturing
Practice in Manufacture, Processing, Packing,
or Holding. Fed Regist 1963, 28 (120, Part II),
6385-87.
11.	 U.S. Food and Drug Administration. Current
Good Manufacturing Practice in Manufacture,
Processing, PackIng, or Holding. Fed Regist
1978, 43 (44813 (Sept. 29, 1978), Book 2),
45014-336.
12.	 U.S. Food and Drug Administration. FDA
Compliance Program Guidance Manual;
7346.832 (5/12/2010), Pre-Approval Inspec-
tions. U.S. Department of Health and Human
Services: Silver Spring, Md., 2010.
13.	 U.S. Food and Drug Administration. 21 CFR
Part 11, Electronic Records; Electronic Signa-
tures—Scope and Application; Pharmaceuti-
cal CGMPs. Government Publishing Office:
Washington, D.C., 2003.
14.	 F-D-C Reports, Inc. Data Manipulation is
Being Uncovered and Referred for Criminal
Investigation. The Gold Sheet 2007, 41 (4).
15.	 U.S. Food and Drug Administration. Warn-
ing Letter No. 320-19-29 to Indoco Remedies
Limited, dated 7/9/2019; Office of Compliance,
Center for Drug Evaluation and Research. U.S.
Department of Health and Human Services:
Silver Spring, Md., 2019.
16.	 U.S. Food and Drug Administration. Warn-
ing Letter No. 320-20-15 to Apollo Health and
Beauty Care, Inc., dated 12/23/2019; Office of
Compliance, Center for Drug Evaluation and
Research. U.S. Department of Health and Hu-
man Services: Silver Spring, Md., 2019.
17.	 U.S. Food and Drug Administration. 21 CFR
58 Good Laboratory Practice for Nonclinical
Laboratory Studies; U.S. Department of Health
& Human Services: Washington, DC, 1978.
18.	 World Health Organization. Good Chromatog-
raphy Practices, Draft for Comments (July 2019)
WHO: Geneva, 2019.
19.	 China National Medical Products Administra-
tion. Draft Drug Data Management Standard;
NMPA: Beijing, 2016.
20.	 Australian Therapeutic Goods Administration.
Data Management and Data Integrity (DMDI);
TGA: Symonston ACT, Australia, 2017.
21.	 Federal State Institute of Drugs and Good
Practices. Guidelines: Data Integrity & Computer
System Validation; SID&GP: Moscow, 2018.
22.	 Parenteral Drug Association. Elements of a Code
of Conduct for Data Integrity in the Pharma-
ceutical Industry; PDA. PDA: Bethesda, Md.,
2016. https://www.pda.org/scientific-and-
regulatory-affairs/regulatory-resources/code-of-
conduct/elements-of-a-code-of-conduct-for-
data-integrity-in-the-pharmaceutical-industry
(accessed Aug 15 2019).
23.	 International Society for Pharmaceutical
Engineering. GAMP Guide: Records & Data

Integrity; ISPE: Bethesda, Md., 2017.
24.	 International Society for Pharmaceutical Engi-
neering. Good Practice Guide: Data Integrity -
Key Concepts; ISPE: Bethesda, Md., 2018.
25.	 Active Pharmaceutical Ingredients Committee
(APIC). Practical Risk-Based Guide for Manag-
ing Data Integrity APIC/Cefic: Online, 2019.
26.	 Parenteral Drug Association. Technical Report
No. 54: Implementation of Quality Risk Man-
agement for Pharmaceutical and Biotechnology
Manufacturing Operations; PDA: Bethesda,
Md., 2012; p 60.
27.	 International Conference for Harmonisation.
Quality Guideline Q8(R2): Pharmaceutical
Development; ICH Geneva, 2009.
28.	 International Conference for Harmonisation.
Quality Guideline Q12: Technical and Regula-
tory Considerations for Pharmaceutical Product
Lifecycle Management, Draft Version; ICH:
Geneva, 2017.
29.	 European Commission. Annex 11: Comput-
erised Systems, EudraLex – Volume 4 – Good
Manufacturing Practice for Medicinal Products
for Human and Veterinary Use; European Com-
mission: Brussels, 2011.

## 8.0 Appendix I: Examples — How to Use the 9-Box

Vulnerability Grid

### 8.1 API Process Examples

The following examples demonstrate how High, Medium, and Low criticality data from various
API manufacturing processes reside in the 9-Box vulnerability grid based on the level of controls in
place. The vulnerability of data from each unit operation must be considered separately, because the
data-capture features of various manufacturing equipment is different, the method of recording data
varies, and the data integrity controls in place will vary. Once evaluated, however, data vulnerability
of similar manufacturing operations can be leveraged.
For each unit operation of the manufacturing processes, the user must assess the criticality of the
data and the existing data integrity controls in place. The criticality of the data will be either High,
Medium, or Low as defined in Section 4.2.1 Classification of Data Criticality. Table 4.2.1-1 con-
tains definitions of the classes of data criticality. The criticality of the data determines the row of the
9-Box vulnerability grid in which the data will reside. As shown in Table 4.3-1, High-critical data is
in the top row, Medium-critical data in the middle row, and Low-critical data in the bottom row.
For the purposes of this technical report, the existing data integrity controls will be considered as
High, Medium, or Low based on the definitions in Table 4.2.2-1. The level of existing data in-
tegrity controls associated with the manufacturing process will determine in which column of the
9-Box vulnerability grid the data belongs. Manufacturing processes with a High level of data integ-
rity controls in the form of computerized controls reside in the first column (moving from left to
right); manufacturing processes with a Medium level of data integrity controls in the form of hybrid
systems reside in the second column; and manufacturing processes with a Low level of data integrity
controls in the form of manual records reside in the third column.
As the user moves down the grid from top to bottom, the criticality of the data decreases. As a user
moves across the grid from left to right, the level of control decreases. The goal of decreasing the
vulnerability of the data is not impacted by the criticality of the data; instead, the goal of decreasing
the vulnerability of the data is achieved by increasing the controls.
Example 1 involves a reactor in an API manufacturing process (Table 8.1-1). The reaction needs
to be precisely controlled to maximize the production of the API intermediate while controlling an
unwanted and difficult-to-remove impurity that will impact a critical quality attribute (CQA) of the

final product. The reaction is controlled to minimize the impurity and maximize the yield by ensur-
ing that the critical process parameters (CPP) remain in their validated range during this critical
process step. Therefore, the data regarding the control of the reactor is Highly critical. Using Table
4.3-1 as a guide, this data would reside in the top row of the 9Box vulnerability grid.
Example 1a illustrates High-criticality data with manual operation of the reactor, manual capture
of data, and manual transcription of data by the operator into a paper manufacturing record. In
addition, the data controls for this process are a Low level, as they rely on second-person witnessing
of the manufacturing operation, human oversight of the manufacturing process, and human review
release process. The High criticality of the data combined with the Low level of controls yields a
Significant data vulnerability risk (Red), as defined in Section 4.3.
Example 1b illustrates the same High-criticality data but with the reactor better controlled using a
validated programmable logic controller (PLC). The data integrity controls are increased with the
PLC printouts included with the batch processing record (BPR) for the review and release process,
rather than relying on the manual transcription of data from the human machine interface (HMI) of
the PLC into a paper batch production record. Therefore, Example 1b yields Moderate risk of data
vulnerability (Orange).
Example 1c illustrates the same High-criticality data but with the use of additional controls: a vali-
dated electronic batch recording (EBR) with automatic data capture; the inability to erase any data;
the use of access controls, activated audit trails, and automated data archiving; and the ability to
trend the electronically stored production data. With these additional controls employed, the vulner-
ability of the High-criticality data has reached an Acceptable level (Green).

Integrity; ISPE: Bethesda, Md., 2017.
24.	 International Society for Pharmaceutical Engi-
neering. Good Practice Guide: Data Integrity -
Key Concepts; ISPE: Bethesda, Md., 2018.
25.	 Active Pharmaceutical Ingredients Committee
(APIC). Practical Risk-Based Guide for Manag-
ing Data Integrity APIC/Cefic: Online, 2019.
26.	 Parenteral Drug Association. Technical Report
No. 54: Implementation of Quality Risk Man-
agement for Pharmaceutical and Biotechnology
Manufacturing Operations; PDA: Bethesda,
Md., 2012; p 60.
27.	 International Conference for Harmonisation.
Quality Guideline Q8(R2): Pharmaceutical
Development; ICH Geneva, 2009.
28.	 International Conference for Harmonisation.
Quality Guideline Q12: Technical and Regula-
tory Considerations for Pharmaceutical Product
Lifecycle Management, Draft Version; ICH:
Geneva, 2017.
29.	 European Commission. Annex 11: Comput-
erised Systems, EudraLex – Volume 4 – Good
Manufacturing Practice for Medicinal Products
for Human and Veterinary Use; European Com-
mission: Brussels, 2011.

## 8.0 Appendix I: Examples — How to Use the 9-Box

Vulnerability Grid

### 8.1 API Process Examples

The following examples demonstrate how High, Medium, and Low criticality data from various
API manufacturing processes reside in the 9-Box vulnerability grid based on the level of controls in
place. The vulnerability of data from each unit operation must be considered separately, because the
data-capture features of various manufacturing equipment is different, the method of recording data
varies, and the data integrity controls in place will vary. Once evaluated, however, data vulnerability
of similar manufacturing operations can be leveraged.
For each unit operation of the manufacturing processes, the user must assess the criticality of the
data and the existing data integrity controls in place. The criticality of the data will be either High,
Medium, or Low as defined in Section 4.2.1 Classification of Data Criticality. Table 4.2.1-1 con-
tains definitions of the classes of data criticality. The criticality of the data determines the row of the
9-Box vulnerability grid in which the data will reside. As shown in Table 4.3-1, High-critical data is
in the top row, Medium-critical data in the middle row, and Low-critical data in the bottom row.
For the purposes of this technical report, the existing data integrity controls will be considered as
High, Medium, or Low based on the definitions in Table 4.2.2-1. The level of existing data in-
tegrity controls associated with the manufacturing process will determine in which column of the
9-Box vulnerability grid the data belongs. Manufacturing processes with a High level of data integ-
rity controls in the form of computerized controls reside in the first column (moving from left to
right); manufacturing processes with a Medium level of data integrity controls in the form of hybrid
systems reside in the second column; and manufacturing processes with a Low level of data integrity
controls in the form of manual records reside in the third column.
As the user moves down the grid from top to bottom, the criticality of the data decreases. As a user
moves across the grid from left to right, the level of control decreases. The goal of decreasing the
vulnerability of the data is not impacted by the criticality of the data; instead, the goal of decreasing
the vulnerability of the data is achieved by increasing the controls.
Example 1 involves a reactor in an API manufacturing process (Table 8.1-1). The reaction needs
to be precisely controlled to maximize the production of the API intermediate while controlling an
unwanted and difficult-to-remove impurity that will impact a critical quality attribute (CQA) of the

final product. The reaction is controlled to minimize the impurity and maximize the yield by ensur-
ing that the critical process parameters (CPP) remain in their validated range during this critical
process step. Therefore, the data regarding the control of the reactor is Highly critical. Using Table
4.3-1 as a guide, this data would reside in the top row of the 9Box vulnerability grid.
Example 1a illustrates High-criticality data with manual operation of the reactor, manual capture
of data, and manual transcription of data by the operator into a paper manufacturing record. In
addition, the data controls for this process are a Low level, as they rely on second-person witnessing
of the manufacturing operation, human oversight of the manufacturing process, and human review
release process. The High criticality of the data combined with the Low level of controls yields a
Significant data vulnerability risk (Red), as defined in Section 4.3.
Example 1b illustrates the same High-criticality data but with the reactor better controlled using a
validated programmable logic controller (PLC). The data integrity controls are increased with the
PLC printouts included with the batch processing record (BPR) for the review and release process,
rather than relying on the manual transcription of data from the human machine interface (HMI) of
the PLC into a paper batch production record. Therefore, Example 1b yields Moderate risk of data
vulnerability (Orange).
Example 1c illustrates the same High-criticality data but with the use of additional controls: a vali-
dated electronic batch recording (EBR) with automatic data capture; the inability to erase any data;
the use of access controls, activated audit trails, and automated data archiving; and the ability to
trend the electronically stored production data. With these additional controls employed, the vulner-
ability of the High-criticality data has reached an Acceptable level (Green).

**Table 8.1-1	 Example 1: High Criticality API Reaction Controls Impurity Level**

Ex
Mfg Operation
Data Criticality
Data Vulnerability Factors
Data Controls in Place
Data Vulnerability Level
1a
Manually controlled reactor and
paper BPR
High: Impacts CQA & is a CPP that
controls impurity formation
Human Factor: Manual transfer
of CPP data from production
instrumentation & gauges into paper
BPR.
GMP Process: Reactor is manually
controlled by operator
Data Mgmt: Paper BPR
Low:
Human Factor: Supervisory review &
quantity unit review at release
GMP Process: Controlled with
written procedures and training
Data Mgmt: Reliance on second-
person witnessing of data entries &
quality unit review at release
Significant
1b
PLC-controlled reactor and paper
BPR
High: Impacts CQA & is a CPP that
controls impurity formation
Human Factor: Manual transfer of
CPP data from HMI into BPR
GMP Process: PLC-controlled
reactor of new or complex process
Data Mgmt: Manual data entry into
paper BPR from HMI; no audit trail
or electronic analysis of data in PLC
Medium:
Human Factor: Supervisory review &
quality unit review at release
GMP Process: PLC validated with
printout attached to paper BPR
Data Mgmt: Reliance on second-
person witnessing of data entries;
quality unit review of BPR & PLC
printout at release
Moderate
1c
PLC-controlled reactor & electronic
BPR
High: Impacts CQA & is a CPP that
controls impurity formation
Human Factor: Electronic BPR
mitigates human error to a residual
level
GMP Process: PLC-controlled
reactor of robust process
Data Mgmt: Data automatically
captured in EBR & data mgmt
lifecycle is controlled
High:
Human Factor: EBR reviewed by
quality unit at release
GMP Process: PLC validated
& production data captured
automatically
Data Mgmt: Access controls on
PLC; electronic analysis of data;
automatic data storage & audit trail
Acceptable
Example 2 covers the oven drying of an API (Table 8.1-2). The loss on drying (LOD) of the API is not a CQA and the drying operation is not a CPP, but the
LOD does impact the flow characteristics of the API, which affects the downstream processing of the API into the finished product. Therefore, the data regarding
the drying of the API is of Medium criticality and belongs in the middle row of the 9-Box vulnerability grid.
Example 2a describes Medium-criticality data with the manual operation of the drying oven, manual data capture, and manual transcription of data into a paper
manufacturing record. In addition, the existing data integrity controls are Low-level, with reliance on second-person witnessing of the manufacturing operation,
human oversight of the manufacturing process, and human review at release. The Medium criticality of the data plus the Low level of controls yields Moderate data
vulnerability (Orange), as described in Section 4.3.

Example 2b considers the same Medium-criticality data. Here, though, the data integrity controls have increased with the addition of a validated PLC, and the
inclusion of the PLC printouts with the BPR for the review and release process. The additional controls yield an Acceptable level of data vulnerability (Green).
Example 2c illustrates the same Medium-criticality data but with more than the required controls in place: a validated EBR with automatic data capture, the in-
ability to erase any data, activated audit trails, automated data archiving, and the ability to trend the electronically stored production data. These controls yield a
Negligible level of data vulnerability (Blue).

**Table 8.1-2	 Example 2: Medium Criticality – Drying of API (LOD not a CQA)**

Ex
Mfg. Operation
Data Criticality
Data Vulnerability Factors
Data Controls in Place
Data Vulnerability Level
2a
Manually controlled oven drying of
API & paper BPR
Medium: Moisture (LOD) is not
a CQA or CPP but impacts flow
characteristics of API during
downstream processing
Human Factor: Manual transfer of
oven temperature into paper BPR
GMP Process: Oven is manually
controlled by operator
Data Mgmt: Paper BPR
Low:
Human Factor: Supervisory review &
quality unit review at release
GMP Process: Controlled with
written procedures and training
Data Mgmt: Reliance on second-
person witnessing of data entries &
quality unit review at release
Moderate
2b
PLC-controlled oven drying of API &
paper BPR
Medium: Moisture (LOD) is not
a CQA or CPP but impacts flow
characteristics of API during
downstream processing
Human Factor: Manual transfer of
oven temperature data from HMI
into BPR
GMP Process: PLC-controlled oven
Data Mgmt: Manual data entry into
paper BPR from HMI; no audit trail or
electronic analysis of data in PLC
Medium:
Human Factor: Supervisory review &
quality unit review at release
GMP Process: PLC validated with
printout attached to paper BPR
Data Mgmt: Reliance on second-
person witnessing of data entries;
quality unit review BPR & PLC
printout at release
Acceptable
2c
PLC-controlled oven drying &
electronic BPR
Medium: Moisture (LOD) is not
a CQA or CPP but impacts flow
characteristics of API during
downstream processing
Human Factor: EBR mitigates human
error to a residual level
GMP Process: PLC-controlled oven
of robust process
Data Mgmt: Data automatically
captured in EBR & data mgmt
lifecycle is controlled
High:
Human Factor: EBR reviewed by
quality unit at release
GMP Process: PLC validated
& production data captured
automatically
Data Mgmt: Access controls on
PLC, electronic analysis of data,
automatic data storage & audit trail
Negligible

**Table 8.1-1	 Example 1: High Criticality API Reaction Controls Impurity Level**

Ex
Mfg Operation
Data Criticality
Data Vulnerability Factors
Data Controls in Place
Data Vulnerability Level
1a
Manually controlled reactor and
paper BPR
High: Impacts CQA & is a CPP that
controls impurity formation
Human Factor: Manual transfer
of CPP data from production
instrumentation & gauges into paper
BPR.
GMP Process: Reactor is manually
controlled by operator
Data Mgmt: Paper BPR
Low:
Human Factor: Supervisory review &
quantity unit review at release
GMP Process: Controlled with
written procedures and training
Data Mgmt: Reliance on second-
person witnessing of data entries &
quality unit review at release
Significant
1b
PLC-controlled reactor and paper
BPR
High: Impacts CQA & is a CPP that
controls impurity formation
Human Factor: Manual transfer of
CPP data from HMI into BPR
GMP Process: PLC-controlled
reactor of new or complex process
Data Mgmt: Manual data entry into
paper BPR from HMI; no audit trail
or electronic analysis of data in PLC
Medium:
Human Factor: Supervisory review &
quality unit review at release
GMP Process: PLC validated with
printout attached to paper BPR
Data Mgmt: Reliance on second-
person witnessing of data entries;
quality unit review of BPR & PLC
printout at release
Moderate
1c
PLC-controlled reactor & electronic
BPR
High: Impacts CQA & is a CPP that
controls impurity formation
Human Factor: Electronic BPR
mitigates human error to a residual
level
GMP Process: PLC-controlled
reactor of robust process
Data Mgmt: Data automatically
captured in EBR & data mgmt
lifecycle is controlled
High:
Human Factor: EBR reviewed by
quality unit at release
GMP Process: PLC validated
& production data captured
automatically
Data Mgmt: Access controls on
PLC; electronic analysis of data;
automatic data storage & audit trail
Acceptable
Example 2 covers the oven drying of an API (Table 8.1-2). The loss on drying (LOD) of the API is not a CQA and the drying operation is not a CPP, but the
LOD does impact the flow characteristics of the API, which affects the downstream processing of the API into the finished product. Therefore, the data regarding
the drying of the API is of Medium criticality and belongs in the middle row of the 9-Box vulnerability grid.
Example 2a describes Medium-criticality data with the manual operation of the drying oven, manual data capture, and manual transcription of data into a paper
manufacturing record. In addition, the existing data integrity controls are Low-level, with reliance on second-person witnessing of the manufacturing operation,
human oversight of the manufacturing process, and human review at release. The Medium criticality of the data plus the Low level of controls yields Moderate data
vulnerability (Orange), as described in Section 4.3.

Example 2b considers the same Medium-criticality data. Here, though, the data integrity controls have increased with the addition of a validated PLC, and the
inclusion of the PLC printouts with the BPR for the review and release process. The additional controls yield an Acceptable level of data vulnerability (Green).
Example 2c illustrates the same Medium-criticality data but with more than the required controls in place: a validated EBR with automatic data capture, the in-
ability to erase any data, activated audit trails, automated data archiving, and the ability to trend the electronically stored production data. These controls yield a
Negligible level of data vulnerability (Blue).

**Table 8.1-2	 Example 2: Medium Criticality – Drying of API (LOD not a CQA)**

Ex
Mfg. Operation
Data Criticality
Data Vulnerability Factors
Data Controls in Place
Data Vulnerability Level
2a
Manually controlled oven drying of
API & paper BPR
Medium: Moisture (LOD) is not
a CQA or CPP but impacts flow
characteristics of API during
downstream processing
Human Factor: Manual transfer of
oven temperature into paper BPR
GMP Process: Oven is manually
controlled by operator
Data Mgmt: Paper BPR
Low:
Human Factor: Supervisory review &
quality unit review at release
GMP Process: Controlled with
written procedures and training
Data Mgmt: Reliance on second-
person witnessing of data entries &
quality unit review at release
Moderate
2b
PLC-controlled oven drying of API &
paper BPR
Medium: Moisture (LOD) is not
a CQA or CPP but impacts flow
characteristics of API during
downstream processing
Human Factor: Manual transfer of
oven temperature data from HMI
into BPR
GMP Process: PLC-controlled oven
Data Mgmt: Manual data entry into
paper BPR from HMI; no audit trail or
electronic analysis of data in PLC
Medium:
Human Factor: Supervisory review &
quality unit review at release
GMP Process: PLC validated with
printout attached to paper BPR
Data Mgmt: Reliance on second-
person witnessing of data entries;
quality unit review BPR & PLC
printout at release
Acceptable
2c
PLC-controlled oven drying &
electronic BPR
Medium: Moisture (LOD) is not
a CQA or CPP but impacts flow
characteristics of API during
downstream processing
Human Factor: EBR mitigates human
error to a residual level
GMP Process: PLC-controlled oven
of robust process
Data Mgmt: Data automatically
captured in EBR & data mgmt
lifecycle is controlled
High:
Human Factor: EBR reviewed by
quality unit at release
GMP Process: PLC validated
& production data captured
automatically
Data Mgmt: Access controls on
PLC, electronic analysis of data,
automatic data storage & audit trail
Negligible

Example 3 depicts the batch-to-batch cleaning of API manufacturing equipment of a small molecule
during a product campaign within the validated campaign length (Table 8.1-3). Since this type of
data is neither directly nor indirectly related to a CQA or CPP, it is considered routine GMP data
and of Low criticality, according to the definitions in Section 4.2.1. Therefore, this data resides in
the bottom row of the 9-Box vulnerability grid (Table 4.3-1).
In Example 3a, the cleaning is performed manually, then the Low-critical data is captured by the
operator who transcribes it into the paper manufacturing record. The reliance on second-person wit-
nessing, human oversight of the manufacturing process, and human review at release provide a Low
level of data integrity controls. The Low criticality of the data plus the Low level of controls yields
Acceptable data vulnerability (Green).
Example 3b illustrates the same Low-critical data but the level of controls in place are more than
required. The process is better controlled through a validated clean-in-place (CIP) process. The data
integrity controls have increased with the PLC printouts from the CIP system, which are included
with the BPR for the review and release process. The additional controls yield Negligible data vulner-
ability (Blue)
Example 3c illustrates the same Low-critical data but with the addition of a validated EBR with
automatic data capture, inability to erase any data, activated audit trails, automated data archiving,
and ability to trend the electronically stored production data. The vulnerability of the data remains
unchanged, and the vulnerability remains at a Negligible level (Blue). In this example, there are
significantly more controls in place than are required.

**Table 8.1-3	 Example 3: Low Criticality – Small Molecule API Batch-to-Batch Cleaning of Equipment within a Campaign**

Ex
Mfg. Operation
Data Criticality
Data Vulnerability Factors
Data Controls in Place
Data
Vulnerability
Level
3a
Manual batch-to-batch cleaning
of equipment within a campaign
Low: Batch-to-batch carryover
will not impact the quality of the
final API for validated campaign
length
Human Factor: Manual recording of
cleaning into paper BPR
GMP Process: Equipment cleaning
manually performed by operator
Data Mgmt: Paper BPR
Low:
Human Factor: Supervisory review &
quality unit review at release
GMP Process: Controlled with written
procedures and training
Data Mgmt: Reliance on second-person
witnessing of data entries & quality
unit review at release
Acceptable
3b
CIP batch-to-batch cleaning of
equipment within a campaign
Low: Batch-to-batch carryover
will not impact the quality of the
final API for validated campaign
length
Human Factor: Manual transfer of
cleaning data from HMI into BPR
GMP Process: PLC-controlled CIP
cleaning process
Data Mgmt: Manual data entry into
paper BPR from HMI; no audit trail or
electronic analysis of data in PLC
Medium:
Human Factor: Supervisory review &
quality unit review at release
GMP Process: PLC validated with
printout attached to paper BPR
Data Mgmt: Reliance on second-person
witnessing of data entries; quality unit
review BPR & PLC printout at release
Negligible
3c
PLC-controlled CIP batch-to-
batch cleaning & electronic BPR
Low: Batch-to-batch carryover
will not impact the quality of the
final API for validated campaign
length
Human Factor: EBR mitigates human
error to a residual level
GMP Process: PLC-controlled CIP
cleaning process is robust
Data Mgmt: Data automatically
captured in EBR & data mgmt lifecycle
is controlled
High:
Human Factor: EBR reviewed by
quality unit at release
GMP Process: PLC validated & cleaning
data captured automatically
Data Mgmt: Access controls on PLC,
electronic analysis of data, automatic data
storage & audit trail
Negligible

### 8.2 Finished Dosage Form Examples

Examples 4–6 demonstrate where High-, Medium-, and Low-criticality data from a sieving opera-
tion are placed in the 9-Box vulnerability grid, based on the level of controls in place. The examples
are for humidity monitoring during sieving of a drug substance, prior to blending and compression.
In Example 4, humidity is a CPP that will impact CQA (Table 8.2-1). The drug substance is hygro-
scopic and will degrade with elevated levels of moisture. Therefore, the High-criticality data goes in
the top row of the 9-Box vulnerability grid (Table 4.3-1).
Example 4a illustrates High-criticality data with the operator manually inserting analog humidity
data from a chart recorder and transcribing this data to a paper manufacturing record. A Low level
of data controls exist, relying on a second person to verify the data. The High criticality of the data
combined with the Low level of controls creates Significant data vulnerability (Red), as defined in
Section 4.3.
Example 4b illustrates the same High-criticality data. In this example, the data controls have in-
creased compared to Example 4a. The humidity data is now digitized and captured using a validated
building management system (BMS), using audit trail and access controls. Also, a printout of the
humidity data is attached to the manufacturing record. The additional controls yield Moderate data
vulnerability (Orange).
Example 4c illustrates the same High-criticality data with the additional controls of a validated
electronic manufacturing record with automated data capture, audit trail, and access controls. These
additional controls yield Acceptable vulnerability (Green).

**Table 8.2-1	 Example 4: High Criticality – Humidity Monitoring During Sieving of a Drug Substance**

Ex
Mfg. Operation
Data Criticality
Data Vulnerability Factors
Data Controls in Place
Data Vulnerability Level
4a
Humidity data is displayed and
recorded on a paper chart and
a paper manufacturing record is
used
High: Humidity is a CPP that
impacts CQA; drug substance
is hygroscopic and will degrade
with elevated moisture levels
Human Factor: Analogue
humidity data is added from
chart recording, and data is
transcribed to paper record
GMP Process: Humidity data is
captured manually
Data Mgmt: Periodic manual
entry of data into BPR
Low:
Human Factor: Supervisor review
and quality unit review at release
GMP Process: Chart paper is
attached to paper record
Data Mgmt: Second-person
verification of data entry and
quality unit review at release.
Significant
4b
Humidity data is displayed and
recorded using BMS, and a
paper manufacturing record is
used
High: Humidity is a CPP that
impacts CQA; drug substance
is hygroscopic and will degrade
with elevated moisture levels
Human Factor: Digital humidity
data is printed out from HMI,
and data is transcribed to paper
record
GMP Process: Humidity data
is captured both manually and
electronically
Data Mgmt: Periodic manual
data entry into paper BPR
Medium:
Human Factor: Supervisor
review and quality unit review at
release
GMP Process: HMI printout
is attached to paper record;
validated BMS with audit trail
and access controls
Data Mgmt: Second-person
verification of printout and
quality unit review at release
Moderate
4c
Humidity data is displayed and
recorded using BMS, and a
paper manufacturing record is
used
High: Humidity is a CPP that
impacts CQA; drug substance
is hygroscopic and will degrade
with elevated moisture levels
Human Factor: An electronic
manufacturing record mitigates
human error to a residual level
GMP Process: Humidity data is
captured electronically
Data Mgmt: Humidity data is
automatically uploaded into
electronic manufacturing record
High:
Human Factor: Use of electronic
record minimizes manual entry
of data
GMP Process: Validated BMS
with audit trail and access
controls; automated data
capture in electronic record
Data Mgmt: Humidity data
is managed per Part 11
requirements
Acceptable

Example 5, shown in Table 8.2-2, uses the same sieving operation, the same vulnerability factors, and the same data controls as Example 4, except the humidity is
Medium-criticality data. At elevated humidity levels, the drug substance will become sticky, giving poor flow properties, which will impact manufacturing consis-
tency. Humidity, however, is not a CPP. As a result, this Medium-criticality data resides in the middle row of the 9-Box vulnerability grid (Table 4.3-1).
Example 5a illustrates Medium-criticality data with the operator manually interpolating analogue humidity data from a chart recorder and transcribing the data
to a paper manufacturing record. In addition, a Low level of data controls exist, relying on a second person to verify the data. The Medium criticality of the data
combined with a Low level of control creates Moderate data vulnerability (Orange).
Example 5b illustrates the same Medium-critical data, but the data controls have increased compared to Example 5a. The humidity data is now digitized and
captured using a validated BMS, with audit trail and access controls. Also, a printout of the humidity data is attached to the manufacturing record. The additional
controls yield Acceptable data vulnerability (Green).
Example 5c illustrates the same Medium-criticality data with the added controls of a validated electronic manufacturing record with automated data capture, audit
trail, and access controls. The additional controls yield Negligible vulnerability (Blue).

**Table 8.2-2	 Example 5: Medium Criticality – Humidity Monitoring During Sieving of a Drug Substance**

Ex
Mfg. Operation
Data Criticality
Data Vulnerability Factors
Data Controls in Place
Data Vulnerability Level
5a
Humidity data is displayed and
recorded on a paper chart; a paper
manufacturing record is used
Medium: Humidity is not a CPP;
at elevated humidity levels, drug
substance will become sticky, giving
poor flow properties
Human Factor: Analogue humidity data
is interpolated from chart recording,
and data is transcribed to paper record
GMP Process: Humidity data is
captured manually
Data Mgmt.: Periodic manual entry
of data into BPR
Low:
Human Factor: Supervisor review and quality
unit review at release
GMP Process: Chart paper is attached to
paper record
Data Mgmt: second-person verification of
data entry. Quality unit review at release
Moderate
5b
Humidity data is displayed and
recorded using BMS; a paper
manufacturing record is used
Medium: Humidity is not a CPP;
at elevated humidity levels, drug
substance will become sticky, giving
poor flow properties
Human Factor: Digital humidity data
is printed out from HMI, and data is
transcribed to paper record
GMP Process: Humidity data
is captured both manually and
electronically
Data Mgmt: Periodic manual data
entry into paper BPR
Medium:
Human Factor: Supervisor review and quality
unit review at release
GMP Process: HMI printout is attached to
paper record; validated BMS with audit trail
and access controls
Data Mgmt: Second-person verification of
printout and quality unit review at release
Acceptable
5c
Humidity data is displayed and
recorded using BMS; an electronic
manufacturing record is used
Medium: Humidity is not a CPP;
at elevated humidity levels, drug
substance will become sticky, giving
poor flow properties
Human Factor: An electronic
manufacturing record mitigates
human error to a residual level
GMP Process: Humidity data is
captured electronically
Data Mgmt: Humidity data is
automatically uploaded into
electronic manufacturing record
High:
Human Factor: Use of electronic record
minimizes manual entry of data
GMP Process: Validated BMS with audit trail
and access controls; automated data capture
in electronic record
Data Mgmt: Humidity data is managed per
Part 11 requirements.
Negligible

Example 6 uses the same sieving operation, the same vulnerability factors, and the same data controls as Examples 4 and 5; however, the humidity is Low-critical
data (Table 8.2-3). The drug substance is not hygroscopic and is very stable, with good flow properties over a wide humidity range. Humidity is not a CPP. The
data will reside in in the bottom row of the 9-Box vulnerability grid (Table 4.3-1).
Example 6a illustrates Low-critical data with the operator manually adding analogue humidity data from a chart recorder and transcribing this data to a paper
manufacturing record. In addition, a Low level of existing data controls exist, and a second person must verify the data. The Low criticality of the data combined
with a Low level of controls creates an Acceptable data vulnerability risk (Green).
Example 6b illustrates the same Low-critical data; however, the data controls have increased compared to Example 6a. The humidity data is now digitized and
captured using a validated BMS, with audit trail and access controls. Also, a printout of the humidity data is attached to the manufacturing record. The additional
controls yield a Negligible data vulnerability risk (Blue).
Example 6c illustrates the same Low-critical data with the added controls of a validated electronic manufacturing record with automated data capture, audit trail, and
access controls. The vulnerability of the data remains unchanged at a Negligible level (Blue). In this example, significantly more controls are in place than are required.

**Table 8.2-3	Example 6: Low Criticality – Humidity Monitoring During Sieving of a Drug Substance**

Ex
Mfg Operation
Data Criticality
Data Vulnerability Factors
Data Controls in Place
Data Vulnerability Level
6a
Humidity data is displayed and
recorded on a paper chart; a paper
manufacturing record is used.
Low: Humidity is not a CPP; drug
substance is not hygroscopic
and is very stable with good flow
properties over a wide humidity
range
Human Factor: Analogue humidity data
is interpolated from chart recording, and
data is transcribed to paper record
GMP Process: Humidity Data is captured
manually
Data Mgmt: Periodic manual entry of data
into BPR
Low:
Human Factor: Supervisor review and
quality unit review at release
GMP Process: Chart paper is attached to
paper record
Data Mgmt: Second-person verification of
data entry; quality unit review at release
Acceptable
6b
Humidity data is displayed and
recorded using BMS; a paper
manufacturing record is used
Low: Humidity is not a CPP; drug
substance is not hygroscopic
and is very stable with good flow
properties over a wide humidity
range
Human Factor: Digital humidity data
is printed out from HMI, and data is
transcribed to paper record
GMP Process: Humidity data is captured
both manually and electronically
Data Mgmt: Periodic manual data entry
into paper BPR
Medium:
Human Factor: Supervisor review and
quality unit review at release
GMP Process: HMI printout is attached to
paper record; validated BMS with audit
trail and access controls
Data Mgmt: Second-person verification of
printout; quality unit review at release
Negligible
6c
Humidity data is displayed and
recorded using BMS; an electronic
manufacturing record is used
Low: Humidity is not a CPP; drug
substance is not hygroscopic
and is very stable with good flow
properties over a wide humidity
range
Human Factor: An electronic
manufacturing record mitigates human
error to a residual level
GMP Process: Humidity data is captured
electronically
Data Mgmt: Humidity data is
automatically uploaded into electronic
manufacturing record
High:
Human Factor: Use of electronic record
minimizes manual entry of data
GMP Process: Validated BMS with audit
trail and access controls; automated data
capture in electronic record
Data Mgmt: Humidity data is managed per
Part 11 requirements
Negligible

### 8.3 Sterility Assurance Examples

The following examples demonstrate how High-, Medium-, and Low-criticality data from an aseptic
filling process is mapped in the 9-Box vulnerability grid. Sterility is achieved through filtration
at the point of fill. The sterility assurance at the point of fill impacts a CQA of the final product.
Integrity of the sterilizing filter is a CPP that is verified before use and confirmed after use by filter
integrity testing (Figure 8.3.1). According to the FDA Guidance for Industry: Sterile Drug Products
Produced by Aseptic Processing, “Integrity testing of the filter(s) can be performed prior to processing
and should be routinely performed post-use” (1). Although filter integrity testing can be performed
to verify filter identity before sterilizing filtration, there is no regulatory requirement in the U.S. to
perform such a test. In the EU, the regulatory requirements may differ, as Annex 1 states that “The
integrity of the sterilised filter should be verified before use and should be confirmed immediately
after use by an appropriate method….” (2). These examples are intended to clarify the application of
the 9-Box grid; care should be taken to conform to local regulatory requirements.
Examples 7–9 demonstrate data integrity risk levels for filter integrity testing with three potential
scenarios.
In Example 7, the data is considered to be of High criticality because the filter integrity testing im-
pacts CQA (sterility) and it is a CPP that confirms the absence of viable microorganisms after aseptic
filling, which is a regulatory expectation (Table 8.3-1).
In Example 7a, the data vulnerability level is Significant, as defined in Section 4.3, due to the high
level of human intervention and because the legacy filter integrity tester has either no ability or a lim-
ited ability to store electronic data; a paper printout is used in lieu of electronic data (Red).
In Example 7b, the data vulnerability becomes Moderate when the potential for human errors is
reduced by using newer technology that features improved functionality to ensure automated data
capture, secure storage, and audit trail capabilities (Orange).
Example 7c shows that the data vulnerability is Acceptable when human intervention is reduced to
a minimum with the filter testing performed in-line, without the operator having to initiate the test
manually, and the test results are automatically transferred to a secure data storage module (Green).
Figure 8.3-1
Simplified Illustration of Aseptic Filling Process
Forumulation
Tank
Pre Filter
Bioburden
Filter
Sterilizing
Filter
Aseptic Filling
Filter Integrity
Tester

**Table 8.3-1	 Example 7: High Criticality – Filter Integrity Testing at the Point of Fill (Post-Use)**

Ex
Mfg. Operation
Data Criticality
Data Vulnerability Factors
Data Controls in Place
Data Vulnerability Level
7a
Aseptic Filling:
Filter integrity tester with paper print-out
test results
High: Impacts CQA (sterility) and is a CPP that
confirms absence of viable microorganisms
after aseptic filling
Human Factor: Manual transcription of set-up data
by operator
GMP Process: Filter integrity tester is manually
controlled by the operator
Data Mgmt: Legacy filter integrity tester used with
no/limited ability to store electronic data; paper
printout used in lieu of electronic data
Low:
Human Factor: Supervisor reviews test results prior to
batch release
GMP Process: Controlled with written procedures and
training
Data Mgmt: Reliance on peer review of data entries
and test results
Significant
7b
Aseptic Filling:
Filter integrity tester with automated data
entry and storage and electronic test results
High: Impacts CQA (sterility) and is a CPP that
confirms absence of viable microorganisms
after aseptic filling
Human Factor: Automated data entry and data back-
up mitigates human error to a residual level
GMP Process: Filter integrity tester is manually
controlled by the operator
Data Mgmt: Latest filter integrity tester is used, has
ability to interface with bar code readers to capture
set-up data, has secure data storage module, and can
record operator’s actions, including number of test
runs, electronically and also on the paper printout
Medium:
Human Factor: Supervisor checks test run alert data
prior to batch release
GMP Process: Test equipment and associated
automation interfaces validated, and process
robustness monitored regularly
Data Mgmt: Reliance on automation, validation, and
robust monitoring process
Moderate
7c
Aseptic Filling:
Filter integrity tester with end-to-end
automation
High: Impacts CQA (sterility) and is a CPP that
confirms absence of viable microorganisms
after aseptic filling
Human Factor: End-to-end automation mitigates
human error to a residual level
GMP Process: Filter integrity testing instruments
integrated into the unit operation
Data Mgmt: Filter is tested in-line without operator
having to initiate the test manually; test results are
automatically transferred to a secure data storage
module
High:
Human Factor: Supervisory review is limited to only
investigation of failed test
GMP Process: In-line test equipment and associated
interfaces validated, and process robustness
monitored regularly
Data Mgmt: Reliance on automation, validation, and
the robust monitoring process
Acceptable

The data in Example 8 would be considered Medium criticality under U.S. regulation because the test is a regulatory recommendation intended to verify filter integrity after
sterilizing filtration but before aseptic filling (Table 8.3-2). The data may have a different criticality level in other regions of the world due to different regulatory requirements.
In Example 8a, the data vulnerability level is Moderate (Orange) due to the high level of human intervention and because the legacy filter integrity tester has either
no, or a limited ability, to store electronic data; a paper printout is used in lieu of electronic data.
In Example 8b, the data vulnerability becomes Acceptable (Green) when human errors are reduced by using newer technology that features improved functionality
to ensure automated data capture, secure storage, and audit trail capabilities.
Example 8c shows that the data vulnerability becomes Negligible (Blue) when human intervention is reduced to a minimum with the filter testing performed in-
line, without the operator having to initiate the test manually, and test results are automatically transferred to a secure data storage module.

**Table 8.3-2	Example 8: Medium Criticality – Filter Integrity Testing at the Point of Fill (Pre-Use–Post-Sterilization)**

Ex
Mfg. Operation
Data Criticality
Data Vulnerability Factors
Data Controls in Place
Data Vulnerability Levels
8a
Aseptic Filling:
Filter integrity tester with paper
printout test results
Medium: Verifies filter integrity
after sterilizing filtration but
before aseptic filling
Human Factor: Manual transcription of set-up
data by the operator
GMP Process: Filter integrity tester is manually
controlled by the operator
Data Mgmt: Legacy filter integrity tester used
with no/limited ability to store electronic data;
paper printout is used in lieu of electronic data
Medium:
Human Factor: Supervisor reviews test
results prior initiating aseptic filling process
GMP Process: Controlled with written
procedures and training
Data Mgmt: Reliance on peer review of
data entries and test results
Moderate
8b
Aseptic Filling:
Filter integrity tester with
automated data entry and
storage and electronic test
results
Medium: Verifies filter integrity
after sterilizing filtration but
before aseptic filling
Human Factor: Automated data entry and data
back-up mitigates human error to a residual level
GMP Process: Filter integrity tester is manually
controlled by the operator
Data Mgmt: Latest filter integrity tester is used
that has the ability to interface with bar code
readers to capture set-up data, secure data
storage module, and record operator’s actions,
including number of tests runs electronically and
also on the paper printout
High:
Human Factor: Supervisor checks test run
alert data prior to aseptic filling process
GMP Process: Test equipment and
associated automation interfaces
validated, and process robustness
monitored regularly
Data Mgmt: Reliance on automation,
validation, and robustness monitoring
process
Acceptable
8c
Aseptic Filling:
Filter integrity tester with end-
to-end automation
Medium: Verifies filter integrity
after sterilizing filtration but
before aseptic filling
Human Factor: End-to-end automation mitigates
human error to a residual level
GMP Process: Process robustness assured by
automation, validation, and monitoring practices;
redundant sterilizing filters installed
Data Mgmt: Filter is tested in line without the
operator having to initiate the test manually, and
test results are automatically transferred to a
secure data storage module
High:
Human Factor: Supervisory review is limited
to only investigation of failed test runs
GMP Process: Test equipment and
associated automation interfaces validated,
and process robustness monitored regularly
Data Mgmt: Reliance on automation,
validation, and robustness of monitoring
process
Negligible

The data in Example 9 is considered Low criticality because the test is not a regulatory requirement but is intended to verify filter identity to ensure correct filter
installation (Table 8.3-3).
In Example 9a, the data vulnerability level is Acceptable (Green) due to Low data criticality and the fact that high levels of human intervention with legacy filter
integrity tester are adequately managed through procedural controls.
In Example 9b, the data vulnerability becomes Negligible (Blue) when human errors are reduced by using newer technology that feature improved functionality to
ensure automated data capture, secure storage, and audit trail capabilities.
Example 9c shows that the data vulnerability is reduced significantly and remains Negligible (Blue) when human intervention is reduced to a minimum with the
filter testing performed in-line, without the operator having to initiate the test manually, and the test results are automatically transferred to a secure data storage
module. While this example is theoretically possible to put into practice, it is operationally unlikely at the current time.

**Table 8.3-3	Example 9: Low Criticality – Filter Identity Verification at the Point of Fill (Pre-Use Pre-Sterilization)**

Ex
Mfg. Operation
Data Criticality
Data Vulnerability Factors
Data Controls in Place
Data Vulnerability Level
9a
Aseptic Filling:
Filter integrity tester with
paper print-out test results
Low: Verifies filter identity
to support correct filter
installation
Human Factor: Manual transcription of set-up data by
the operator
GMP Process: Filter integrity tester is manually
controlled by the operator
Data Mgmt: Legacy filter integrity tester used with
no/limited ability to store electronic data; paper
printout is used in lieu of electronic data
High:
Human Factor: Supervisory review is limited to only
investigation of failed tests
GMP Process: Controlled with written procedures
and training
Data Mgmt: Reliance on peer review of test results
Acceptable
9b
Aseptic Filling:
Filter integrity tester with
automated data entry and
storage and electronic
test results
Low: Verifies filter identity
to support correct filter
installation
Human Factor: Automated data entry and data back-
up mitigates human error to a residual level
GMP Process: Filter integrity tester is manually
controlled by the operator
Data Mgmt: Latest filter integrity tester is used that
has the ability to interface with bar code readers to
capture set-up data, secure data storage module, and
record operator’s actions, including number of tests
runs electronically and on the paper printout
High:
Human Factor: Supervisory review is limited to only
investigation of failed tests
GMP Process: Test equipment and associated
automation interfaces validated, and process
robustness monitored regularly
Data Mgmt: Reliance on automation, validation, and
the robustness of monitoring process
Negligible
9c
Aseptic Filling:
Filter integrity tester with
end-to-end automation
Low: Verifies filter identity
to support correct filter
installation
Human Factor: End-to-end automation mitigates
human error to a residual level
GMP Process: Process robustness assured by
automation, validation, and monitoring practices;
redundant sterilizing filters installed
Data Mgmt: Filter is tested in line without operator
having to initiate the test manually, and test results are
automatically transferred to a secure data storage module
High:
Human Factor: Supervisory review is limited to only
investigation of failed tests
GMP Process: Test equipment and associated
automation interfaces validated, and process
robustness monitored regularly
Data Mgmt: Reliance on automation, validation, and
the robustness of monitoring process
Negligible

### 8.4 Tablet Packaging Process Examples

Example 10 demonstrates how the 9-Box grid can be used to assess the data vulnerability of the tab-
let packaging process depicted in Figure 8.4-1. In this example, the 9-Box grid can be used to help
determine if the controls in place at different stages of the packaging process are adequate.
As shown in Table 8.4-1, this example leads to the conclusion that the controls in place are adequate
for planning, line clearance, and in-process control (IPC) testing, while Significant or Moderate vul-
nerabilities exist in dispensing, equipment set-up, packaging operation, and batch reconciliation.
Where the vulnerability is Significant or Moderate, steps should be taken to mitigate the vulner-
abilities. The dispensing process, for example, could be improved by avoiding the use of spreadsheets,
using a barcode/scanning/enterprise resource planning interface to confirm the correct identify of
materials, or adding a real-time double-check that the correct quantity of the materials has been
dispensed. Both the equipment set-up and packaging operation could be improved by increasing
the access controls, so each user has a unique account, or by adding minimum–maximum product-
specific limits to the tolerance ranges for sensors that cannot be modified by the operator.
For the batch reconciliation, using a barcode/scanning/validated electronic system interface could
replace the manual logbook for identifying when a new component is required.
Planning
Planning
Line Clearance
Equipment Setup
Packaging
Batch Reconciliation
In Process Control
Testing
Figure 8.4-1
Overview of the Packaging Process

**Table 8.4-1	 Example 10: High & Medium Criticality – Tablet Packaging**

Ex
Mfg. Operation
Data Criticality
Data Vulnerability Factors
Data Controls in Place
Data Vulnerability Level
10a
Planning: Creation of the process
order in a validated electronic
system (such as SAP). Once
created, the batch-specific data
in the validated electronic system
(batch number, maternal number,
etc.) is automatically added to the
master batch record template and
printed for use in production
Medium: Ensures unique batch
number assigned, and correct
master templates are used
Human Factor: Procedure allows, if
the validated electronic system is
inaccessible, to print the master template
and add a batch number manually,
potentially adding an incorrect batch
number
GMP Process: Process robustness
assured by validation
Data Mgmt: Limited risks as process and
transfer of batch specific information to
the master batch record is controlled by a
validated system
High:
Human Factor: Documentation team prints
the batch record only after the process
order is created, allowing automatic
transfer of batch number
GMP Process: The electronic system
and associated automatic transfer of
batch number to an approved master
manufacturing template is validated
Data Mgmt: Reliance on validation and
user access to the validated electronic
system and documentation control system.
Negligible
10b
Dispensing: A spreadsheet
is printed from the validated
electronic system process order
and given to the dispensing team
detailing what to dispense and
what quantity; materials are
prepared and dispensed, and
quantities are manually recorded
directly into a master batch record
High:
Need to ensure correct materials
and batch numbers are selected
and used; potential for product
mix-up or packaging material
mix-up, which can impact product
quality or patient safety
Human Factor: Single operator records
by manual entry into the master
manufacturing record actual quantities of
dispensed materials
GMP Process: Dispensing is a completely
manual process, barcodes or labels are
not used; no second format to confirm
the quantity dispensed (e.g., printout from
weigh scales or scales connected to an
upper-level system recording quantities
dispensed)
Data Mgmt: Data in the spreadsheet can
be easily modified before printing, creating
errors during dispensing process
Low:
Human Factor: Supervisor review only at
end of packaging
GMP Process: Controlled with written
procedures and training
Data Mgmt: Reliance on converting
data in validated electronic system to a
spreadsheet, which is printed and given to
the dispensing team
Significant
10c
Line Clearance: Performed before
dispensed materials are brought
to the packaging line; documented
directly into master manufacturing
template; sensors installed in hard-
to-clean parts of the equipment
High:
If not performed robustly,
packaging components or finished
product from the previous run may
be mixed into the new packaging
order
Human Factor: Reliance on manual
confirmation that line clearance was
performed correctly; chance of both
operators missing the difficult-to-clean
parts of the equipment, but sensors
installed in these areas reduce the risk
GMP Process: Sensors in place only in parts
of the line; reliance on human confirmation
of line clearance in other parts of the line
Data Mgmt: Limited risks as process is
controlled by validated systems; user
access is well controlled so only limited
number of trained personnel have access
to change settings
High:
Human Factor: Real-time four-eyes check
performed by certified peer; quality unit
review at release
GMP Process: Controlled with written
procedures, training of first operator, and
certification of a peer performing four-eyes
review
Data Mgmt: Reliance on validation and
user access to the validated electronic
system, documentation control system,
and sensors.
Acceptable

Ex
Mfg. Operation
Data Criticality
Data Vulnerability Factors
Data Controls in Place
Data Vulnerability Level
10d
Equipment Setup: Recipe (for
CPPs)/ tolerance ranges (balances,
cameras, sensors) and other
adjustable settings are configured;
packaging equipment uses group
accounts for operators, who have
access to choose any recipe, and
edit set-up parameters
High:
Incorrect settings could potentially
result in impact to product quality
or patient safety
Human Factor: Operator could select
an incorrect recipe, impacting CPPs,
or change tolerance ranges (balances,
cameras, sensors) outside of required
range to ensure higher pass rate (fewer
rejects); possible to change CPPs outside
of the validated range
GMP Process: Set-up is manually
controlled by the operator; no double-
check before starting packaging
Data Mgmt: Operators use group accounts
to make the adjustments and are able to
change set-up parameters
Low:
Human Factor: Peer and quality unit
review of batch report to confirm the
correct recipes and tolerance ranges were
used
GMP Process: Controlled with written
procedures and training
Data Mgmt: Different user groups for
operator, maintenance, and administrator;
batch report automatically records set-up
parameters/recipe used
Significant
10e
Packaging: Bulk tablets are
packed in blisters, added to the
carton together with the patient
information leaflet, before being
bundled
Medium:
Once the set-up is completed
correctly, potential to impact
product quality is reduced
Human Factor: Operator can add rejects
back to packaging process or adjust the
tolerance ranges during processing to
reduce the rejects
GMP Process: Operator controls the
packaging process manually and
can edit the CPP setpoint and sensor
tolerance ranges; no double-check during
processing of any edits made
Data Mgmt: Operators use group accounts
to make setting adjustments
Low:
Human Factor: Peer and quality unit review
of batch report to confirm the correct
recipes and tolerance ranges were used
GMP Process: Controlled with written
procedures and training
Data Mgmt: Different user groups,
operator, maintenance, and administrator;
audit trail automatically records all
changes to setpoints or tolerance ranges
and includes in the batch report
Moderate
10f
In-Process Control testing: IPC
testing is performed by trained
personnel; periodicity of IPC
testing is part of batch record,
with space to record all IPC results
and attach all equipment printouts
Medium:
IPC tests are used to adjust during
the packaging process, but all
parameters are also part of release
testing
Human Factor: Recording can be done
without performing the activity, but
missing equipment printout will show
testing never took place
GMP Process: Test results are transcribed
into the batch record, and all printouts
are manually added to the batch record;
possible transcription errors
Data Mgmt: Testing equipment allows
reprinting of previous tests; printout does
not have the batch-specific information or
the user’s name; only date, time and result
are captured; equipment does not store
the data electronically
Medium:
Human Factor: Double verification by a peer
for each new IPC test; quality unit review
that a new test was performed according to
periodicity defined in the batch record
GMP Process: Controlled with written
procedures and training; operator adds
equipment printout to the batch record,
overlaying their signature
Data Mgmt: Testing equipment generates
a printout, with time and date of the
test performed; operators do not have
access to change the time or date on the
equipment—reserved for administrators
Acceptable
(Table 8.4-1 Continued)

Ex
Mfg. Operation
Data Criticality
Data Vulnerability Factors
Data Controls in Place
Data Vulnerability Level
10g
Batch reconciliation: Batch
yield is calculated, along with
reconciliation of unused packaging
materials
High:
If not performed correctly,
potential to impact patient safety
Human Factor: Operators can stop the
batch early, or add rejected materials back
into the line, impacting the reconciliation
process
GMP Process: Batch yield is calculated
using counters (pass/reject information),
that are part of the batch report;
reconciliation of packaging components is
completely manual process
Data Mgmt: Operators use logbooks to
record the use of packaging components
during the batch; possible to miscalculate
the quantity of packaging materials used
Medium:
Human Factor: Double verification by a
peer for each packaging component used,
and quality unit review of reconciliation
process
GMP Process: Controlled with written
procedures and training; operators need
to complete a logbook each time a new
package component is required, making
a use history of packaging components
available
Data Mgmt: Equipment automatically
generates a report at the end of
packaging; report template and data are
locked and no one can edit the contents
Moderate

### 8.5 References for Appendix I

1.	 U.S. Food and Drug Administration. Guidance for Industry: Sterile Drug Products Produced by Aseptic Processing—Current Good Manufacturing Practice; U.S.
Department of Health and Human Services: Rockville, Md., 2004.
2.	 European Commission. Annex 1: Manufacture of Sterile Medicinal Products, EudraLex – Volume 4 – Good Manufacturing Practice for Medicinal Products for
Human and Veterinary Use Consultation Document. European Commission: Brussels, 2017.
(Table 8.4-1 Continued)

Terms of Usage for PDA Electronic Publications (Technical Reports, Books, etc.)
An Authorized User of this electronic publication is the purchaser.
Authorized Users are permitted to do the following:
• Search and view the content of the PDA Electronic Publication
• Download the PDA Electronic Publication for the individual use of an Authorized User
• Print the PDA Electronic Publication for the individual use of an Authorized User
• Make a reasonable number of photocopies of a printed PDA Electronic Publication for the individual use of an
Authorized User
Authorized Users are not permitted to do the following:
• Allow anyone other than an Authorized User to use or access the PDA Electronic Publication
• Display or otherwise make any information from the PDA Electronic Publication available to anyone other
than an Authorized User
• Post the PDA Electronic Publication or portions of the PDA Electronic Publication on websites, either available
on the Internet or an Intranet, or in any form of online publications without a license from PDA, Inc.
• Transmit electronically, via e-mail or any other file transfer protocols, any portion of the PDA Electronic
Publication
• Create a searchable archive of any portion of the PDA Electronic Publication
• Use robots or intelligent agents to access, search and/or systematically download any portion of the PDA
Electronic Publication
• Sell, re-sell, rent, lease, license, sublicense, assign or otherwise transfer the use of the PDA Electronic Publication
or its content
• Use or copy the PDA Electronic Publication for document delivery, fee-for-service use, or bulk reproduction or
distribution of materials in any form, or any substantially similar commercial purpose
• Alter, modify, repackage or adapt any portion of the PDA Electronic Publication
• Make any edits or derivative works with respect to any portion of the PDA Electronic Publication including any
text or graphics
• Delete or remove in any form or format, including on a printed article or photocopy, any copyright information
or notice contained in the PDA Electronic Publication
• Combine any portion of the PDA Electronic Publication with any other material
To License or purchase Reprints
• Licensing: Site licenses and licenses to distribute PDA Electronic Publication can be obtained for a fee.
To learn more about licensing options and rates, please contact:
Janny Chua, Publications Manager, +1 (301) 656-5900,
ext. 133. Written correspondence can be sent to: PDA, Inc. Attn: Janny Chua, 4350 East West Highway,
Suite 150, Bethesda, MD 20814.
• Reprints: Reprints of PDA Electronic Publication can be purchased for a fee.
To order reprints, please contact:
Janny Chua, Publications Manager, +1 (301) 656-5900, ext. 133.
Written correspondence can be sent to: PDA, Inc. Attn: Janny Chua, 4350 East West Highway, Suite 150,

Integrating Data Integrity Requirements into Manufacturing & Packaging Operations
About PDA Technical Reports
PDA Technical Reports are global consensus documents, prepared by member-driven Task Forces (listed on inside
front cover) comprised of content experts, including scientists and engineers working in the pharmaceutical/bio-
pharmaceutical industry, regulatory authorities and academia. While in development, PDA Technical Reports are
subjected to a global review of PDA members and other topic-specific experts, often including regulatory officials.
Comments from the global review are then considered by the authoring Task Force during the preparation of the
final working draft. The level of expertise of the Task Force and those participating in the global review ensure a
broad perspective reflecting best thinking and practices currently available.
The final working draft is next reviewed by the PDA Advisory Board or Boards that sanctioned the project. PDA’s
Advisory Boards are: Science Advisory Board, Biotechnology Advisory Board, and Regulatory Affairs and Quality
Advisory Board. Following this stage of review, the PDA Board of Directors conducts the final review and deter-
mines whether to publish or not publish the document as an official PDA Technical Report.
While PDA goes to great lengths to ensure each Technical Report is of the highest quality, all readers are encouraged
to contact PDA about any scientific, technical, or regulatory inaccuracies, discrepancies, or mistakes that might be
found in any of the documents. Readers can email PDA at: TRfeedback@pda.org.
PDA Officers and Directors
Officers
Chair: Jette Christensen, Novo Nordisk
Chair-Elect: Susan Schniepp, RCA
Treasurer: Melissa Seymour, Biogen, Inc.
Secretary: Emma Ramnarine, Genentech/Roche
Immediate Past-Chair: Rebecca Devine, Consultant
President: Richard Johnson
Directors
Masahiro Akimoto, Otsuka Pharmaceutical Factory, Inc.
Barbara Allen, Eli Lilly and Company
Michael Blackton, Adaptimmune
Bettine Boltres, West Pharmaceutical Services
Tia Bush, Amgen
Ghada Haddad, Merck & Co.
Joyce Hansen, Johnson & Johnson
Stephan Krause, AstraZeneca Biologics
Mary Oates, Lachman Consultants
Emma Ramnarine, Genentech/Roche
Mathias Romacker, Pfizer (ret.)
Stephan Rönninger, Amgen
Anil Sawant, Merck & Co.
PDA Publication Production and Editing
Ruth K. Miller, JD, Director, Regulatory Affairs
Glenn Wright, VP, Scientific & Regulatory Affairs
Walter Morris, Senior Director of Publishing and Press Relations
Katja Yount, Publication Designer
Marilyn Foster, Technical Editor/Writer
Sanctioning Advisory Board: RAQAB
Jacqueline Veivia-Panter, Hitachi Chemical (Chair)
Jeff Broadfoot, Emergent BioSolutions Inc
(Immediate Past Chair)
Anette Yan Marcussen, NNE (Vice Chair)
Karin Baer, Boeringer Ingelheim
Cylia Chen-Ooi, Amgen
Marcello Colao, GlaxoSmithKline Biologicals
Mirko Gabriele, Thermofisher Scientific
Aaron Goerke, Ph.D., Roche
Tor Gråberg, AstraZeneca
Jane Halpern, Ph.D., Consultant
Frithjof Holtz, Merck KGaA, Darmstadt, Germany
Beth Kirschenheiter, ICU Medical
Steven Lynn, Lynn Consulting
Demetra Macheras, AbbVie, Inc.
Luciana Mansolelli, Novartis
Shin-ichiro Mohri, Kyowa Kirin Co., Ltd.
Catriona Murphy, Eli Lilly and Company
Scott Nickerson, Moderna
Lorianne Richter, Ultragenyx Pharmaceutical Inc.
Janeen Skutnik-Wilkinson, Biogen
Eva Urban, CSL Behring
Gopi Vudathala,	Ph.D., Incyte Corporation
Martin Wisher, Ph.D., Merck KGaA, Darmstadt,
Germany

Bethesda Towers
4350 East West Highway
Suite 600
Tel: +1 (301) 656-5900
Fax: +1 (301) 986-0296
E-mail: info@pda.org
Web site: www.pda.org

**Table 8.1-1	 Example 1: High Criticality API Reaction Controls Impurity Level**

Ex
Mfg Operation
Data Criticality
Data Vulnerability Factors
Data Controls in Place
Data Vulnerability Level
1a
Manually controlled reactor and
paper BPR
High: Impacts CQA & is a CPP that
controls impurity formation
Human Factor: Manual transfer
of CPP data from production
instrumentation & gauges into paper
BPR.
GMP Process: Reactor is manually
controlled by operator
Data Mgmt: Paper BPR
Low:
Human Factor: Supervisory review &
quantity unit review at release
GMP Process: Controlled with
written procedures and training
Data Mgmt: Reliance on second-
person witnessing of data entries &
quality unit review at release
Significant
1b
PLC-controlled reactor and paper
BPR
High: Impacts CQA & is a CPP that
controls impurity formation
Human Factor: Manual transfer of
CPP data from HMI into BPR
GMP Process: PLC-controlled
reactor of new or complex process
Data Mgmt: Manual data entry into
paper BPR from HMI; no audit trail
or electronic analysis of data in PLC
Medium:
Human Factor: Supervisory review &
quality unit review at release
GMP Process: PLC validated with
printout attached to paper BPR
Data Mgmt: Reliance on second-
person witnessing of data entries;
quality unit review of BPR & PLC
printout at release
Moderate
1c
PLC-controlled reactor & electronic
BPR
High: Impacts CQA & is a CPP that
controls impurity formation
Human Factor: Electronic BPR
mitigates human error to a residual
level
GMP Process: PLC-controlled
reactor of robust process
Data Mgmt: Data automatically
captured in EBR & data mgmt
lifecycle is controlled
High:
Human Factor: EBR reviewed by
quality unit at release
GMP Process: PLC validated
& production data captured
automatically
Data Mgmt: Access controls on
PLC; electronic analysis of data;
automatic data storage & audit trail
Acceptable
Example 2 covers the oven drying of an API (Table 8.1-2). The loss on drying (LOD) of the API is not a CQA and the drying operation is not a CPP, but the
LOD does impact the flow characteristics of the API, which affects the downstream processing of the API into the finished product. Therefore, the data regarding
the drying of the API is of Medium criticality and belongs in the middle row of the 9-Box vulnerability grid.
Example 2a describes Medium-criticality data with the manual operation of the drying oven, manual data capture, and manual transcription of data into a paper
manufacturing record. In addition, the existing data integrity controls are Low-level, with reliance on second-person witnessing of the manufacturing operation,
human oversight of the manufacturing process, and human review at release. The Medium criticality of the data plus the Low level of controls yields Moderate data
vulnerability (Orange), as described in Section 4.3.

Example 2b considers the same Medium-criticality data. Here, though, the data integrity controls have increased with the addition of a validated PLC, and the
inclusion of the PLC printouts with the BPR for the review and release process. The additional controls yield an Acceptable level of data vulnerability (Green).
Example 2c illustrates the same Medium-criticality data but with more than the required controls in place: a validated EBR with automatic data capture, the in-
ability to erase any data, activated audit trails, automated data archiving, and the ability to trend the electronically stored production data. These controls yield a
Negligible level of data vulnerability (Blue).

**Table 8.1-2	 Example 2: Medium Criticality – Drying of API (LOD not a CQA)**

Ex
Mfg. Operation
Data Criticality
Data Vulnerability Factors
Data Controls in Place
Data Vulnerability Level
2a
Manually controlled oven drying of
API & paper BPR
Medium: Moisture (LOD) is not
a CQA or CPP but impacts flow
characteristics of API during
downstream processing
Human Factor: Manual transfer of
oven temperature into paper BPR
GMP Process: Oven is manually
controlled by operator
Data Mgmt: Paper BPR
Low:
Human Factor: Supervisory review &
quality unit review at release
GMP Process: Controlled with
written procedures and training
Data Mgmt: Reliance on second-
person witnessing of data entries &
quality unit review at release
Moderate
2b
PLC-controlled oven drying of API &
paper BPR
Medium: Moisture (LOD) is not
a CQA or CPP but impacts flow
characteristics of API during
downstream processing
Human Factor: Manual transfer of
oven temperature data from HMI
into BPR
GMP Process: PLC-controlled oven
Data Mgmt: Manual data entry into
paper BPR from HMI; no audit trail or
electronic analysis of data in PLC
Medium:
Human Factor: Supervisory review &
quality unit review at release
GMP Process: PLC validated with
printout attached to paper BPR
Data Mgmt: Reliance on second-
person witnessing of data entries;
quality unit review BPR & PLC
printout at release
Acceptable
2c
PLC-controlled oven drying &
electronic BPR
Medium: Moisture (LOD) is not
a CQA or CPP but impacts flow
characteristics of API during
downstream processing
Human Factor: EBR mitigates human
error to a residual level
GMP Process: PLC-controlled oven
of robust process
Data Mgmt: Data automatically
captured in EBR & data mgmt
lifecycle is controlled
High:
Human Factor: EBR reviewed by
quality unit at release
GMP Process: PLC validated
& production data captured
automatically
Data Mgmt: Access controls on
PLC, electronic analysis of data,
automatic data storage & audit trail
Negligible

Example 3 depicts the batch-to-batch cleaning of API manufacturing equipment of a small molecule
during a product campaign within the validated campaign length (Table 8.1-3). Since this type of
data is neither directly nor indirectly related to a CQA or CPP, it is considered routine GMP data
and of Low criticality, according to the definitions in Section 4.2.1. Therefore, this data resides in
the bottom row of the 9-Box vulnerability grid (Table 4.3-1).
In Example 3a, the cleaning is performed manually, then the Low-critical data is captured by the
operator who transcribes it into the paper manufacturing record. The reliance on second-person wit-
nessing, human oversight of the manufacturing process, and human review at release provide a Low
level of data integrity controls. The Low criticality of the data plus the Low level of controls yields
Acceptable data vulnerability (Green).
Example 3b illustrates the same Low-critical data but the level of controls in place are more than
required. The process is better controlled through a validated clean-in-place (CIP) process. The data
integrity controls have increased with the PLC printouts from the CIP system, which are included
with the BPR for the review and release process. The additional controls yield Negligible data vulner-
ability (Blue)
Example 3c illustrates the same Low-critical data but with the addition of a validated EBR with
automatic data capture, inability to erase any data, activated audit trails, automated data archiving,
and ability to trend the electronically stored production data. The vulnerability of the data remains
unchanged, and the vulnerability remains at a Negligible level (Blue). In this example, there are
significantly more controls in place than are required.

**Table 8.1-3	 Example 3: Low Criticality – Small Molecule API Batch-to-Batch Cleaning of Equipment within a Campaign**

Ex
Mfg. Operation
Data Criticality
Data Vulnerability Factors
Data Controls in Place
Data
Vulnerability
Level
3a
Manual batch-to-batch cleaning
of equipment within a campaign
Low: Batch-to-batch carryover
will not impact the quality of the
final API for validated campaign
length
Human Factor: Manual recording of
cleaning into paper BPR
GMP Process: Equipment cleaning
manually performed by operator
Data Mgmt: Paper BPR
Low:
Human Factor: Supervisory review &
quality unit review at release
GMP Process: Controlled with written
procedures and training
Data Mgmt: Reliance on second-person
witnessing of data entries & quality
unit review at release
Acceptable
3b
CIP batch-to-batch cleaning of
equipment within a campaign
Low: Batch-to-batch carryover
will not impact the quality of the
final API for validated campaign
length
Human Factor: Manual transfer of
cleaning data from HMI into BPR
GMP Process: PLC-controlled CIP
cleaning process
Data Mgmt: Manual data entry into
paper BPR from HMI; no audit trail or
electronic analysis of data in PLC
Medium:
Human Factor: Supervisory review &
quality unit review at release
GMP Process: PLC validated with
printout attached to paper BPR
Data Mgmt: Reliance on second-person
witnessing of data entries; quality unit
review BPR & PLC printout at release
Negligible
3c
PLC-controlled CIP batch-to-
batch cleaning & electronic BPR
Low: Batch-to-batch carryover
will not impact the quality of the
final API for validated campaign
length
Human Factor: EBR mitigates human
error to a residual level
GMP Process: PLC-controlled CIP
cleaning process is robust
Data Mgmt: Data automatically
captured in EBR & data mgmt lifecycle
is controlled
High:
Human Factor: EBR reviewed by
quality unit at release
GMP Process: PLC validated & cleaning
data captured automatically
Data Mgmt: Access controls on PLC,
electronic analysis of data, automatic data
storage & audit trail
Negligible

### 8.2 Finished Dosage Form Examples

Examples 4–6 demonstrate where High-, Medium-, and Low-criticality data from a sieving opera-
tion are placed in the 9-Box vulnerability grid, based on the level of controls in place. The examples
are for humidity monitoring during sieving of a drug substance, prior to blending and compression.
In Example 4, humidity is a CPP that will impact CQA (Table 8.2-1). The drug substance is hygro-
scopic and will degrade with elevated levels of moisture. Therefore, the High-criticality data goes in
the top row of the 9-Box vulnerability grid (Table 4.3-1).
Example 4a illustrates High-criticality data with the operator manually inserting analog humidity
data from a chart recorder and transcribing this data to a paper manufacturing record. A Low level
of data controls exist, relying on a second person to verify the data. The High criticality of the data
combined with the Low level of controls creates Significant data vulnerability (Red), as defined in
Section 4.3.
Example 4b illustrates the same High-criticality data. In this example, the data controls have in-
creased compared to Example 4a. The humidity data is now digitized and captured using a validated
building management system (BMS), using audit trail and access controls. Also, a printout of the
humidity data is attached to the manufacturing record. The additional controls yield Moderate data
vulnerability (Orange).
Example 4c illustrates the same High-criticality data with the additional controls of a validated
electronic manufacturing record with automated data capture, audit trail, and access controls. These
additional controls yield Acceptable vulnerability (Green).

**Table 8.2-1	 Example 4: High Criticality – Humidity Monitoring During Sieving of a Drug Substance**

Ex
Mfg. Operation
Data Criticality
Data Vulnerability Factors
Data Controls in Place
Data Vulnerability Level
4a
Humidity data is displayed and
recorded on a paper chart and
a paper manufacturing record is
used
High: Humidity is a CPP that
impacts CQA; drug substance
is hygroscopic and will degrade
with elevated moisture levels
Human Factor: Analogue
humidity data is added from
chart recording, and data is
transcribed to paper record
GMP Process: Humidity data is
captured manually
Data Mgmt: Periodic manual
entry of data into BPR
Low:
Human Factor: Supervisor review
and quality unit review at release
GMP Process: Chart paper is
attached to paper record
Data Mgmt: Second-person
verification of data entry and
quality unit review at release.
Significant
4b
Humidity data is displayed and
recorded using BMS, and a
paper manufacturing record is
used
High: Humidity is a CPP that
impacts CQA; drug substance
is hygroscopic and will degrade
with elevated moisture levels
Human Factor: Digital humidity
data is printed out from HMI,
and data is transcribed to paper
record
GMP Process: Humidity data
is captured both manually and
electronically
Data Mgmt: Periodic manual
data entry into paper BPR
Medium:
Human Factor: Supervisor
review and quality unit review at
release
GMP Process: HMI printout
is attached to paper record;
validated BMS with audit trail
and access controls
Data Mgmt: Second-person
verification of printout and
quality unit review at release
Moderate
4c
Humidity data is displayed and
recorded using BMS, and a
paper manufacturing record is
used
High: Humidity is a CPP that
impacts CQA; drug substance
is hygroscopic and will degrade
with elevated moisture levels
Human Factor: An electronic
manufacturing record mitigates
human error to a residual level
GMP Process: Humidity data is
captured electronically
Data Mgmt: Humidity data is
automatically uploaded into
electronic manufacturing record
High:
Human Factor: Use of electronic
record minimizes manual entry
of data
GMP Process: Validated BMS
with audit trail and access
controls; automated data
capture in electronic record
Data Mgmt: Humidity data
is managed per Part 11
requirements
Acceptable

Example 5, shown in Table 8.2-2, uses the same sieving operation, the same vulnerability factors, and the same data controls as Example 4, except the humidity is
Medium-criticality data. At elevated humidity levels, the drug substance will become sticky, giving poor flow properties, which will impact manufacturing consis-
tency. Humidity, however, is not a CPP. As a result, this Medium-criticality data resides in the middle row of the 9-Box vulnerability grid (Table 4.3-1).
Example 5a illustrates Medium-criticality data with the operator manually interpolating analogue humidity data from a chart recorder and transcribing the data
to a paper manufacturing record. In addition, a Low level of data controls exist, relying on a second person to verify the data. The Medium criticality of the data
combined with a Low level of control creates Moderate data vulnerability (Orange).
Example 5b illustrates the same Medium-critical data, but the data controls have increased compared to Example 5a. The humidity data is now digitized and
captured using a validated BMS, with audit trail and access controls. Also, a printout of the humidity data is attached to the manufacturing record. The additional
controls yield Acceptable data vulnerability (Green).
Example 5c illustrates the same Medium-criticality data with the added controls of a validated electronic manufacturing record with automated data capture, audit
trail, and access controls. The additional controls yield Negligible vulnerability (Blue).

**Table 8.2-2	 Example 5: Medium Criticality – Humidity Monitoring During Sieving of a Drug Substance**

Ex
Mfg. Operation
Data Criticality
Data Vulnerability Factors
Data Controls in Place
Data Vulnerability Level
5a
Humidity data is displayed and
recorded on a paper chart; a paper
manufacturing record is used
Medium: Humidity is not a CPP;
at elevated humidity levels, drug
substance will become sticky, giving
poor flow properties
Human Factor: Analogue humidity data
is interpolated from chart recording,
and data is transcribed to paper record
GMP Process: Humidity data is
captured manually
Data Mgmt.: Periodic manual entry
of data into BPR
Low:
Human Factor: Supervisor review and quality
unit review at release
GMP Process: Chart paper is attached to
paper record
Data Mgmt: second-person verification of
data entry. Quality unit review at release
Moderate
5b
Humidity data is displayed and
recorded using BMS; a paper
manufacturing record is used
Medium: Humidity is not a CPP;
at elevated humidity levels, drug
substance will become sticky, giving
poor flow properties
Human Factor: Digital humidity data
is printed out from HMI, and data is
transcribed to paper record
GMP Process: Humidity data
is captured both manually and
electronically
Data Mgmt: Periodic manual data
entry into paper BPR
Medium:
Human Factor: Supervisor review and quality
unit review at release
GMP Process: HMI printout is attached to
paper record; validated BMS with audit trail
and access controls
Data Mgmt: Second-person verification of
printout and quality unit review at release
Acceptable
5c
Humidity data is displayed and
recorded using BMS; an electronic
manufacturing record is used
Medium: Humidity is not a CPP;
at elevated humidity levels, drug
substance will become sticky, giving
poor flow properties
Human Factor: An electronic
manufacturing record mitigates
human error to a residual level
GMP Process: Humidity data is
captured electronically
Data Mgmt: Humidity data is
automatically uploaded into
electronic manufacturing record
High:
Human Factor: Use of electronic record
minimizes manual entry of data
GMP Process: Validated BMS with audit trail
and access controls; automated data capture
in electronic record
Data Mgmt: Humidity data is managed per
Part 11 requirements.
Negligible

Example 6 uses the same sieving operation, the same vulnerability factors, and the same data controls as Examples 4 and 5; however, the humidity is Low-critical
data (Table 8.2-3). The drug substance is not hygroscopic and is very stable, with good flow properties over a wide humidity range. Humidity is not a CPP. The
data will reside in in the bottom row of the 9-Box vulnerability grid (Table 4.3-1).
Example 6a illustrates Low-critical data with the operator manually adding analogue humidity data from a chart recorder and transcribing this data to a paper
manufacturing record. In addition, a Low level of existing data controls exist, and a second person must verify the data. The Low criticality of the data combined
with a Low level of controls creates an Acceptable data vulnerability risk (Green).
Example 6b illustrates the same Low-critical data; however, the data controls have increased compared to Example 6a. The humidity data is now digitized and
captured using a validated BMS, with audit trail and access controls. Also, a printout of the humidity data is attached to the manufacturing record. The additional
controls yield a Negligible data vulnerability risk (Blue).
Example 6c illustrates the same Low-critical data with the added controls of a validated electronic manufacturing record with automated data capture, audit trail, and
access controls. The vulnerability of the data remains unchanged at a Negligible level (Blue). In this example, significantly more controls are in place than are required.

**Table 8.2-3	Example 6: Low Criticality – Humidity Monitoring During Sieving of a Drug Substance**

Ex
Mfg Operation
Data Criticality
Data Vulnerability Factors
Data Controls in Place
Data Vulnerability Level
6a
Humidity data is displayed and
recorded on a paper chart; a paper
manufacturing record is used.
Low: Humidity is not a CPP; drug
substance is not hygroscopic
and is very stable with good flow
properties over a wide humidity
range
Human Factor: Analogue humidity data
is interpolated from chart recording, and
data is transcribed to paper record
GMP Process: Humidity Data is captured
manually
Data Mgmt: Periodic manual entry of data
into BPR
Low:
Human Factor: Supervisor review and
quality unit review at release
GMP Process: Chart paper is attached to
paper record
Data Mgmt: Second-person verification of
data entry; quality unit review at release
Acceptable
6b
Humidity data is displayed and
recorded using BMS; a paper
manufacturing record is used
Low: Humidity is not a CPP; drug
substance is not hygroscopic
and is very stable with good flow
properties over a wide humidity
range
Human Factor: Digital humidity data
is printed out from HMI, and data is
transcribed to paper record
GMP Process: Humidity data is captured
both manually and electronically
Data Mgmt: Periodic manual data entry
into paper BPR
Medium:
Human Factor: Supervisor review and
quality unit review at release
GMP Process: HMI printout is attached to
paper record; validated BMS with audit
trail and access controls
Data Mgmt: Second-person verification of
printout; quality unit review at release
Negligible
6c
Humidity data is displayed and
recorded using BMS; an electronic
manufacturing record is used
Low: Humidity is not a CPP; drug
substance is not hygroscopic
and is very stable with good flow
properties over a wide humidity
range
Human Factor: An electronic
manufacturing record mitigates human
error to a residual level
GMP Process: Humidity data is captured
electronically
Data Mgmt: Humidity data is
automatically uploaded into electronic
manufacturing record
High:
Human Factor: Use of electronic record
minimizes manual entry of data
GMP Process: Validated BMS with audit
trail and access controls; automated data
capture in electronic record
Data Mgmt: Humidity data is managed per
Part 11 requirements
Negligible

### 8.3 Sterility Assurance Examples

The following examples demonstrate how High-, Medium-, and Low-criticality data from an aseptic
filling process is mapped in the 9-Box vulnerability grid. Sterility is achieved through filtration
at the point of fill. The sterility assurance at the point of fill impacts a CQA of the final product.
Integrity of the sterilizing filter is a CPP that is verified before use and confirmed after use by filter
integrity testing (Figure 8.3.1). According to the FDA Guidance for Industry: Sterile Drug Products
Produced by Aseptic Processing, “Integrity testing of the filter(s) can be performed prior to processing
and should be routinely performed post-use” (1). Although filter integrity testing can be performed
to verify filter identity before sterilizing filtration, there is no regulatory requirement in the U.S. to
perform such a test. In the EU, the regulatory requirements may differ, as Annex 1 states that “The
integrity of the sterilised filter should be verified before use and should be confirmed immediately
after use by an appropriate method….” (2). These examples are intended to clarify the application of
the 9-Box grid; care should be taken to conform to local regulatory requirements.
Examples 7–9 demonstrate data integrity risk levels for filter integrity testing with three potential
scenarios.
In Example 7, the data is considered to be of High criticality because the filter integrity testing im-
pacts CQA (sterility) and it is a CPP that confirms the absence of viable microorganisms after aseptic
filling, which is a regulatory expectation (Table 8.3-1).
In Example 7a, the data vulnerability level is Significant, as defined in Section 4.3, due to the high
level of human intervention and because the legacy filter integrity tester has either no ability or a lim-
ited ability to store electronic data; a paper printout is used in lieu of electronic data (Red).
In Example 7b, the data vulnerability becomes Moderate when the potential for human errors is
reduced by using newer technology that features improved functionality to ensure automated data
capture, secure storage, and audit trail capabilities (Orange).
Example 7c shows that the data vulnerability is Acceptable when human intervention is reduced to
a minimum with the filter testing performed in-line, without the operator having to initiate the test
manually, and the test results are automatically transferred to a secure data storage module (Green).
Figure 8.3-1
Simplified Illustration of Aseptic Filling Process
Forumulation
Tank
Pre Filter
Bioburden
Filter
Sterilizing
Filter
Aseptic Filling
Filter Integrity
Tester

**Table 8.3-1	 Example 7: High Criticality – Filter Integrity Testing at the Point of Fill (Post-Use)**

Ex
Mfg. Operation
Data Criticality
Data Vulnerability Factors
Data Controls in Place
Data Vulnerability Level
7a
Aseptic Filling:
Filter integrity tester with paper print-out
test results
High: Impacts CQA (sterility) and is a CPP that
confirms absence of viable microorganisms
after aseptic filling
Human Factor: Manual transcription of set-up data
by operator
GMP Process: Filter integrity tester is manually
controlled by the operator
Data Mgmt: Legacy filter integrity tester used with
no/limited ability to store electronic data; paper
printout used in lieu of electronic data
Low:
Human Factor: Supervisor reviews test results prior to
batch release
GMP Process: Controlled with written procedures and
training
Data Mgmt: Reliance on peer review of data entries
and test results
Significant
7b
Aseptic Filling:
Filter integrity tester with automated data
entry and storage and electronic test results
High: Impacts CQA (sterility) and is a CPP that
confirms absence of viable microorganisms
after aseptic filling
Human Factor: Automated data entry and data back-
up mitigates human error to a residual level
GMP Process: Filter integrity tester is manually
controlled by the operator
Data Mgmt: Latest filter integrity tester is used, has
ability to interface with bar code readers to capture
set-up data, has secure data storage module, and can
record operator’s actions, including number of test
runs, electronically and also on the paper printout
Medium:
Human Factor: Supervisor checks test run alert data
prior to batch release
GMP Process: Test equipment and associated
automation interfaces validated, and process
robustness monitored regularly
Data Mgmt: Reliance on automation, validation, and
robust monitoring process
Moderate
7c
Aseptic Filling:
Filter integrity tester with end-to-end
automation
High: Impacts CQA (sterility) and is a CPP that
confirms absence of viable microorganisms
after aseptic filling
Human Factor: End-to-end automation mitigates
human error to a residual level
GMP Process: Filter integrity testing instruments
integrated into the unit operation
Data Mgmt: Filter is tested in-line without operator
having to initiate the test manually; test results are
automatically transferred to a secure data storage
module
High:
Human Factor: Supervisory review is limited to only
investigation of failed test
GMP Process: In-line test equipment and associated
interfaces validated, and process robustness
monitored regularly
Data Mgmt: Reliance on automation, validation, and
the robust monitoring process
Acceptable

The data in Example 8 would be considered Medium criticality under U.S. regulation because the test is a regulatory recommendation intended to verify filter integrity after
sterilizing filtration but before aseptic filling (Table 8.3-2). The data may have a different criticality level in other regions of the world due to different regulatory requirements.
In Example 8a, the data vulnerability level is Moderate (Orange) due to the high level of human intervention and because the legacy filter integrity tester has either
no, or a limited ability, to store electronic data; a paper printout is used in lieu of electronic data.
In Example 8b, the data vulnerability becomes Acceptable (Green) when human errors are reduced by using newer technology that features improved functionality
to ensure automated data capture, secure storage, and audit trail capabilities.
Example 8c shows that the data vulnerability becomes Negligible (Blue) when human intervention is reduced to a minimum with the filter testing performed in-
line, without the operator having to initiate the test manually, and test results are automatically transferred to a secure data storage module.

**Table 8.3-2	Example 8: Medium Criticality – Filter Integrity Testing at the Point of Fill (Pre-Use–Post-Sterilization)**

Ex
Mfg. Operation
Data Criticality
Data Vulnerability Factors
Data Controls in Place
Data Vulnerability Levels
8a
Aseptic Filling:
Filter integrity tester with paper
printout test results
Medium: Verifies filter integrity
after sterilizing filtration but
before aseptic filling
Human Factor: Manual transcription of set-up
data by the operator
GMP Process: Filter integrity tester is manually
controlled by the operator
Data Mgmt: Legacy filter integrity tester used
with no/limited ability to store electronic data;
paper printout is used in lieu of electronic data
Medium:
Human Factor: Supervisor reviews test
results prior initiating aseptic filling process
GMP Process: Controlled with written
procedures and training
Data Mgmt: Reliance on peer review of
data entries and test results
Moderate
8b
Aseptic Filling:
Filter integrity tester with
automated data entry and
storage and electronic test
results
Medium: Verifies filter integrity
after sterilizing filtration but
before aseptic filling
Human Factor: Automated data entry and data
back-up mitigates human error to a residual level
GMP Process: Filter integrity tester is manually
controlled by the operator
Data Mgmt: Latest filter integrity tester is used
that has the ability to interface with bar code
readers to capture set-up data, secure data
storage module, and record operator’s actions,
including number of tests runs electronically and
also on the paper printout
High:
Human Factor: Supervisor checks test run
alert data prior to aseptic filling process
GMP Process: Test equipment and
associated automation interfaces
validated, and process robustness
monitored regularly
Data Mgmt: Reliance on automation,
validation, and robustness monitoring
process
Acceptable
8c
Aseptic Filling:
Filter integrity tester with end-
to-end automation
Medium: Verifies filter integrity
after sterilizing filtration but
before aseptic filling
Human Factor: End-to-end automation mitigates
human error to a residual level
GMP Process: Process robustness assured by
automation, validation, and monitoring practices;
redundant sterilizing filters installed
Data Mgmt: Filter is tested in line without the
operator having to initiate the test manually, and
test results are automatically transferred to a
secure data storage module
High:
Human Factor: Supervisory review is limited
to only investigation of failed test runs
GMP Process: Test equipment and
associated automation interfaces validated,
and process robustness monitored regularly
Data Mgmt: Reliance on automation,
validation, and robustness of monitoring
process
Negligible

The data in Example 9 is considered Low criticality because the test is not a regulatory requirement but is intended to verify filter identity to ensure correct filter
installation (Table 8.3-3).
In Example 9a, the data vulnerability level is Acceptable (Green) due to Low data criticality and the fact that high levels of human intervention with legacy filter
integrity tester are adequately managed through procedural controls.
In Example 9b, the data vulnerability becomes Negligible (Blue) when human errors are reduced by using newer technology that feature improved functionality to
ensure automated data capture, secure storage, and audit trail capabilities.
Example 9c shows that the data vulnerability is reduced significantly and remains Negligible (Blue) when human intervention is reduced to a minimum with the
filter testing performed in-line, without the operator having to initiate the test manually, and the test results are automatically transferred to a secure data storage
module. While this example is theoretically possible to put into practice, it is operationally unlikely at the current time.

**Table 8.3-3	Example 9: Low Criticality – Filter Identity Verification at the Point of Fill (Pre-Use Pre-Sterilization)**

Ex
Mfg. Operation
Data Criticality
Data Vulnerability Factors
Data Controls in Place
Data Vulnerability Level
9a
Aseptic Filling:
Filter integrity tester with
paper print-out test results
Low: Verifies filter identity
to support correct filter
installation
Human Factor: Manual transcription of set-up data by
the operator
GMP Process: Filter integrity tester is manually
controlled by the operator
Data Mgmt: Legacy filter integrity tester used with
no/limited ability to store electronic data; paper
printout is used in lieu of electronic data
High:
Human Factor: Supervisory review is limited to only
investigation of failed tests
GMP Process: Controlled with written procedures
and training
Data Mgmt: Reliance on peer review of test results
Acceptable
9b
Aseptic Filling:
Filter integrity tester with
automated data entry and
storage and electronic
test results
Low: Verifies filter identity
to support correct filter
installation
Human Factor: Automated data entry and data back-
up mitigates human error to a residual level
GMP Process: Filter integrity tester is manually
controlled by the operator
Data Mgmt: Latest filter integrity tester is used that
has the ability to interface with bar code readers to
capture set-up data, secure data storage module, and
record operator’s actions, including number of tests
runs electronically and on the paper printout
High:
Human Factor: Supervisory review is limited to only
investigation of failed tests
GMP Process: Test equipment and associated
automation interfaces validated, and process
robustness monitored regularly
Data Mgmt: Reliance on automation, validation, and
the robustness of monitoring process
Negligible
9c
Aseptic Filling:
Filter integrity tester with
end-to-end automation
Low: Verifies filter identity
to support correct filter
installation
Human Factor: End-to-end automation mitigates
human error to a residual level
GMP Process: Process robustness assured by
automation, validation, and monitoring practices;
redundant sterilizing filters installed
Data Mgmt: Filter is tested in line without operator
having to initiate the test manually, and test results are
automatically transferred to a secure data storage module
High:
Human Factor: Supervisory review is limited to only
investigation of failed tests
GMP Process: Test equipment and associated
automation interfaces validated, and process
robustness monitored regularly
Data Mgmt: Reliance on automation, validation, and
the robustness of monitoring process
Negligible

### 8.4 Tablet Packaging Process Examples

Example 10 demonstrates how the 9-Box grid can be used to assess the data vulnerability of the tab-
let packaging process depicted in Figure 8.4-1. In this example, the 9-Box grid can be used to help
determine if the controls in place at different stages of the packaging process are adequate.
As shown in Table 8.4-1, this example leads to the conclusion that the controls in place are adequate
for planning, line clearance, and in-process control (IPC) testing, while Significant or Moderate vul-
nerabilities exist in dispensing, equipment set-up, packaging operation, and batch reconciliation.
Where the vulnerability is Significant or Moderate, steps should be taken to mitigate the vulner-
abilities. The dispensing process, for example, could be improved by avoiding the use of spreadsheets,
using a barcode/scanning/enterprise resource planning interface to confirm the correct identify of
materials, or adding a real-time double-check that the correct quantity of the materials has been
dispensed. Both the equipment set-up and packaging operation could be improved by increasing
the access controls, so each user has a unique account, or by adding minimum–maximum product-
specific limits to the tolerance ranges for sensors that cannot be modified by the operator.
For the batch reconciliation, using a barcode/scanning/validated electronic system interface could
replace the manual logbook for identifying when a new component is required.
Planning
Planning
Line Clearance
Equipment Setup
Packaging
Batch Reconciliation
In Process Control
Testing
Figure 8.4-1
Overview of the Packaging Process

**Table 8.4-1	 Example 10: High & Medium Criticality – Tablet Packaging**

Ex
Mfg. Operation
Data Criticality
Data Vulnerability Factors
Data Controls in Place
Data Vulnerability Level
10a
Planning: Creation of the process
order in a validated electronic
system (such as SAP). Once
created, the batch-specific data
in the validated electronic system
(batch number, maternal number,
etc.) is automatically added to the
master batch record template and
printed for use in production
Medium: Ensures unique batch
number assigned, and correct
master templates are used
Human Factor: Procedure allows, if
the validated electronic system is
inaccessible, to print the master template
and add a batch number manually,
potentially adding an incorrect batch
number
GMP Process: Process robustness
assured by validation
Data Mgmt: Limited risks as process and
transfer of batch specific information to
the master batch record is controlled by a
validated system
High:
Human Factor: Documentation team prints
the batch record only after the process
order is created, allowing automatic
transfer of batch number
GMP Process: The electronic system
and associated automatic transfer of
batch number to an approved master
manufacturing template is validated
Data Mgmt: Reliance on validation and
user access to the validated electronic
system and documentation control system.
Negligible
10b
Dispensing: A spreadsheet
is printed from the validated
electronic system process order
and given to the dispensing team
detailing what to dispense and
what quantity; materials are
prepared and dispensed, and
quantities are manually recorded
directly into a master batch record
High:
Need to ensure correct materials
and batch numbers are selected
and used; potential for product
mix-up or packaging material
mix-up, which can impact product
quality or patient safety
Human Factor: Single operator records
by manual entry into the master
manufacturing record actual quantities of
dispensed materials
GMP Process: Dispensing is a completely
manual process, barcodes or labels are
not used; no second format to confirm
the quantity dispensed (e.g., printout from
weigh scales or scales connected to an
upper-level system recording quantities
dispensed)
Data Mgmt: Data in the spreadsheet can
be easily modified before printing, creating
errors during dispensing process
Low:
Human Factor: Supervisor review only at
end of packaging
GMP Process: Controlled with written
procedures and training
Data Mgmt: Reliance on converting
data in validated electronic system to a
spreadsheet, which is printed and given to
the dispensing team
Significant
10c
Line Clearance: Performed before
dispensed materials are brought
to the packaging line; documented
directly into master manufacturing
template; sensors installed in hard-
to-clean parts of the equipment
High:
If not performed robustly,
packaging components or finished
product from the previous run may
be mixed into the new packaging
order
Human Factor: Reliance on manual
confirmation that line clearance was
performed correctly; chance of both
operators missing the difficult-to-clean
parts of the equipment, but sensors
installed in these areas reduce the risk
GMP Process: Sensors in place only in parts
of the line; reliance on human confirmation
of line clearance in other parts of the line
Data Mgmt: Limited risks as process is
controlled by validated systems; user
access is well controlled so only limited
number of trained personnel have access
to change settings
High:
Human Factor: Real-time four-eyes check
performed by certified peer; quality unit
review at release
GMP Process: Controlled with written
procedures, training of first operator, and
certification of a peer performing four-eyes
review
Data Mgmt: Reliance on validation and
user access to the validated electronic
system, documentation control system,
and sensors.
Acceptable

Ex
Mfg. Operation
Data Criticality
Data Vulnerability Factors
Data Controls in Place
Data Vulnerability Level
10d
Equipment Setup: Recipe (for
CPPs)/ tolerance ranges (balances,
cameras, sensors) and other
adjustable settings are configured;
packaging equipment uses group
accounts for operators, who have
access to choose any recipe, and
edit set-up parameters
High:
Incorrect settings could potentially
result in impact to product quality
or patient safety
Human Factor: Operator could select
an incorrect recipe, impacting CPPs,
or change tolerance ranges (balances,
cameras, sensors) outside of required
range to ensure higher pass rate (fewer
rejects); possible to change CPPs outside
of the validated range
GMP Process: Set-up is manually
controlled by the operator; no double-
check before starting packaging
Data Mgmt: Operators use group accounts
to make the adjustments and are able to
change set-up parameters
Low:
Human Factor: Peer and quality unit
review of batch report to confirm the
correct recipes and tolerance ranges were
used
GMP Process: Controlled with written
procedures and training
Data Mgmt: Different user groups for
operator, maintenance, and administrator;
batch report automatically records set-up
parameters/recipe used
Significant
10e
Packaging: Bulk tablets are
packed in blisters, added to the
carton together with the patient
information leaflet, before being
bundled
Medium:
Once the set-up is completed
correctly, potential to impact
product quality is reduced
Human Factor: Operator can add rejects
back to packaging process or adjust the
tolerance ranges during processing to
reduce the rejects
GMP Process: Operator controls the
packaging process manually and
can edit the CPP setpoint and sensor
tolerance ranges; no double-check during
processing of any edits made
Data Mgmt: Operators use group accounts
to make setting adjustments
Low:
Human Factor: Peer and quality unit review
of batch report to confirm the correct
recipes and tolerance ranges were used
GMP Process: Controlled with written
procedures and training
Data Mgmt: Different user groups,
operator, maintenance, and administrator;
audit trail automatically records all
changes to setpoints or tolerance ranges
and includes in the batch report
Moderate
10f
In-Process Control testing: IPC
testing is performed by trained
personnel; periodicity of IPC
testing is part of batch record,
with space to record all IPC results
and attach all equipment printouts
Medium:
IPC tests are used to adjust during
the packaging process, but all
parameters are also part of release
testing
Human Factor: Recording can be done
without performing the activity, but
missing equipment printout will show
testing never took place
GMP Process: Test results are transcribed
into the batch record, and all printouts
are manually added to the batch record;
possible transcription errors
Data Mgmt: Testing equipment allows
reprinting of previous tests; printout does
not have the batch-specific information or
the user’s name; only date, time and result
are captured; equipment does not store
the data electronically
Medium:
Human Factor: Double verification by a peer
for each new IPC test; quality unit review
that a new test was performed according to
periodicity defined in the batch record
GMP Process: Controlled with written
procedures and training; operator adds
equipment printout to the batch record,
overlaying their signature
Data Mgmt: Testing equipment generates
a printout, with time and date of the
test performed; operators do not have
access to change the time or date on the
equipment—reserved for administrators
Acceptable
(Table 8.4-1 Continued)

Ex
Mfg. Operation
Data Criticality
Data Vulnerability Factors
Data Controls in Place
Data Vulnerability Level
10g
Batch reconciliation: Batch
yield is calculated, along with
reconciliation of unused packaging
materials
High:
If not performed correctly,
potential to impact patient safety
Human Factor: Operators can stop the
batch early, or add rejected materials back
into the line, impacting the reconciliation
process
GMP Process: Batch yield is calculated
using counters (pass/reject information),
that are part of the batch report;
reconciliation of packaging components is
completely manual process
Data Mgmt: Operators use logbooks to
record the use of packaging components
during the batch; possible to miscalculate
the quantity of packaging materials used
Medium:
Human Factor: Double verification by a
peer for each packaging component used,
and quality unit review of reconciliation
process
GMP Process: Controlled with written
procedures and training; operators need
to complete a logbook each time a new
package component is required, making
a use history of packaging components
available
Data Mgmt: Equipment automatically
generates a report at the end of
packaging; report template and data are
locked and no one can edit the contents
Moderate

### 8.5 References for Appendix I

1.	 U.S. Food and Drug Administration. Guidance for Industry: Sterile Drug Products Produced by Aseptic Processing—Current Good Manufacturing Practice; U.S.
Department of Health and Human Services: Rockville, Md., 2004.
2.	 European Commission. Annex 1: Manufacture of Sterile Medicinal Products, EudraLex – Volume 4 – Good Manufacturing Practice for Medicinal Products for
Human and Veterinary Use Consultation Document. European Commission: Brussels, 2017.
(Table 8.4-1 Continued)

Terms of Usage for PDA Electronic Publications (Technical Reports, Books, etc.)
An Authorized User of this electronic publication is the purchaser.
Authorized Users are permitted to do the following:
• Search and view the content of the PDA Electronic Publication
• Download the PDA Electronic Publication for the individual use of an Authorized User
• Print the PDA Electronic Publication for the individual use of an Authorized User
• Make a reasonable number of photocopies of a printed PDA Electronic Publication for the individual use of an
Authorized User
Authorized Users are not permitted to do the following:
• Allow anyone other than an Authorized User to use or access the PDA Electronic Publication
• Display or otherwise make any information from the PDA Electronic Publication available to anyone other
than an Authorized User
• Post the PDA Electronic Publication or portions of the PDA Electronic Publication on websites, either available
on the Internet or an Intranet, or in any form of online publications without a license from PDA, Inc.
• Transmit electronically, via e-mail or any other file transfer protocols, any portion of the PDA Electronic
Publication
• Create a searchable archive of any portion of the PDA Electronic Publication
• Use robots or intelligent agents to access, search and/or systematically download any portion of the PDA
Electronic Publication
• Sell, re-sell, rent, lease, license, sublicense, assign or otherwise transfer the use of the PDA Electronic Publication
or its content
• Use or copy the PDA Electronic Publication for document delivery, fee-for-service use, or bulk reproduction or
distribution of materials in any form, or any substantially similar commercial purpose
• Alter, modify, repackage or adapt any portion of the PDA Electronic Publication
• Make any edits or derivative works with respect to any portion of the PDA Electronic Publication including any
text or graphics
• Delete or remove in any form or format, including on a printed article or photocopy, any copyright information
or notice contained in the PDA Electronic Publication
• Combine any portion of the PDA Electronic Publication with any other material
To License or purchase Reprints
• Licensing: Site licenses and licenses to distribute PDA Electronic Publication can be obtained for a fee.
To learn more about licensing options and rates, please contact:
Janny Chua, Publications Manager, +1 (301) 656-5900,
ext. 133. Written correspondence can be sent to: PDA, Inc. Attn: Janny Chua, 4350 East West Highway,
Suite 150, Bethesda, MD 20814.
• Reprints: Reprints of PDA Electronic Publication can be purchased for a fee.
To order reprints, please contact:
Janny Chua, Publications Manager, +1 (301) 656-5900, ext. 133.
Written correspondence can be sent to: PDA, Inc. Attn: Janny Chua, 4350 East West Highway, Suite 150,

Integrating Data Integrity Requirements into Manufacturing & Packaging Operations
About PDA Technical Reports
PDA Technical Reports are global consensus documents, prepared by member-driven Task Forces (listed on inside
front cover) comprised of content experts, including scientists and engineers working in the pharmaceutical/bio-
pharmaceutical industry, regulatory authorities and academia. While in development, PDA Technical Reports are
subjected to a global review of PDA members and other topic-specific experts, often including regulatory officials.
Comments from the global review are then considered by the authoring Task Force during the preparation of the
final working draft. The level of expertise of the Task Force and those participating in the global review ensure a
broad perspective reflecting best thinking and practices currently available.
The final working draft is next reviewed by the PDA Advisory Board or Boards that sanctioned the project. PDA’s
Advisory Boards are: Science Advisory Board, Biotechnology Advisory Board, and Regulatory Affairs and Quality
Advisory Board. Following this stage of review, the PDA Board of Directors conducts the final review and deter-
mines whether to publish or not publish the document as an official PDA Technical Report.
While PDA goes to great lengths to ensure each Technical Report is of the highest quality, all readers are encouraged
to contact PDA about any scientific, technical, or regulatory inaccuracies, discrepancies, or mistakes that might be
found in any of the documents. Readers can email PDA at: TRfeedback@pda.org.
PDA Officers and Directors
Officers
Chair: Jette Christensen, Novo Nordisk
Chair-Elect: Susan Schniepp, RCA
Treasurer: Melissa Seymour, Biogen, Inc.
Secretary: Emma Ramnarine, Genentech/Roche
Immediate Past-Chair: Rebecca Devine, Consultant
President: Richard Johnson
Directors
Masahiro Akimoto, Otsuka Pharmaceutical Factory, Inc.
Barbara Allen, Eli Lilly and Company
Michael Blackton, Adaptimmune
Bettine Boltres, West Pharmaceutical Services
Tia Bush, Amgen
Ghada Haddad, Merck & Co.
Joyce Hansen, Johnson & Johnson
Stephan Krause, AstraZeneca Biologics
Mary Oates, Lachman Consultants
Emma Ramnarine, Genentech/Roche
Mathias Romacker, Pfizer (ret.)
Stephan Rönninger, Amgen
Anil Sawant, Merck & Co.
PDA Publication Production and Editing
Ruth K. Miller, JD, Director, Regulatory Affairs
Glenn Wright, VP, Scientific & Regulatory Affairs
Walter Morris, Senior Director of Publishing and Press Relations
Katja Yount, Publication Designer
Marilyn Foster, Technical Editor/Writer
Sanctioning Advisory Board: RAQAB
Jacqueline Veivia-Panter, Hitachi Chemical (Chair)
Jeff Broadfoot, Emergent BioSolutions Inc
(Immediate Past Chair)
Anette Yan Marcussen, NNE (Vice Chair)
Karin Baer, Boeringer Ingelheim
Cylia Chen-Ooi, Amgen
Marcello Colao, GlaxoSmithKline Biologicals
Mirko Gabriele, Thermofisher Scientific
Aaron Goerke, Ph.D., Roche
Tor Gråberg, AstraZeneca
Jane Halpern, Ph.D., Consultant
Frithjof Holtz, Merck KGaA, Darmstadt, Germany
Beth Kirschenheiter, ICU Medical
Steven Lynn, Lynn Consulting
Demetra Macheras, AbbVie, Inc.
Luciana Mansolelli, Novartis
Shin-ichiro Mohri, Kyowa Kirin Co., Ltd.
Catriona Murphy, Eli Lilly and Company
Scott Nickerson, Moderna
Lorianne Richter, Ultragenyx Pharmaceutical Inc.
Janeen Skutnik-Wilkinson, Biogen
Eva Urban, CSL Behring
Gopi Vudathala,	Ph.D., Incyte Corporation
Martin Wisher, Ph.D., Merck KGaA, Darmstadt,
Germany

Bethesda Towers
4350 East West Highway
Suite 600
Tel: +1 (301) 656-5900
Fax: +1 (301) 986-0296
E-mail: info@pda.org
Web site: www.pda.org