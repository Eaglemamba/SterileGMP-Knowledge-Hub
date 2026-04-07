# PDA Technical Report No. 84 (2020): Integrating Data Integrity into Manufacturing and Packaging Operations

## Section 0: Introduction & Glossary (p1-p5)

# Section 0: Introduction & Glossary /

    

PDA Technical Report No. 84 — Data Integrity Management System for Pharmaceutical Manufacturing and Packaging Operations

    

p1 – p5  |  Sections 1.0, 1.1, 1.2, 2.0, 2.1

    
    

        

## Introduction and Scope /

                

PDA TR84 — p1

            

        

        

            

                
                

                    

                    

Data integrity is the cornerstone of establishing and maintaining confidence in the reliability of the data that assures product quality and patient safety. The reliability of manufacturing production and control data depends on the procedures, systems, processes, and controls in place to ensure data integrity. In production, these controls start at the point of data creation and continue through the entire data lifecycle, including the storage of data and the ability to retrieve it later to support the quality of the products manufactured.

                    

The term "data integrity" has evolved to denote the degree to which data are complete, consistent, enduring, and available (ALCOA+) as well as the degree to which the characteristics of the data are maintained for all operations throughout the data lifecycle. Pharmaceutical manufacturers need to ensure that relevant data are available to document and provide traceability to what occurred, that the data are attributable to the person who performed the activity and entered the data, and that the data cannot be deleted, omitted, or in any way modified to misrepresent what occurred. All breaches of data integrity, whether intentional or unintentional, must be investigated.

                    

Advances in information technology and in-process monitoring sensors, coupled with lower costs of computer memory and better processors, has resulted in explosive growth in electronic data generation, acquisition, and storage. Applying a one-size-fits-all approach to data integrity controls established on principles developed decades ago may be neither valuable nor, in certain instances, feasible. Therefore, the use of a risk-based approach is essential to developing a robust data integrity program, considering the requirements from a data-lifecycle perspective. Risk-based concepts apply even as industry transitions from manual documentation systems to fully electronic or hybrid (manual and electronic) systems.

                    

This technical report addresses data integrity from the perspective of manufacturing operations. It discusses regulatory trends, risk management concepts, and recommendations for implementing appropriate data integrity controls in manufacturing operations applicable to paper-based, electronic-based and hybrid systems. The case studies included in this technical report provide examples of how to assess current data integrity risks and implement the concepts presented here.

                

                
                

                    

### 

                    

                        

## Purpose /

                

PDA TR84 — p1–2

            

        

        

            

                
                

                    

                    

The continuous and rapid advances in automation and information technology, availability of economical data storage, and superiority of electronic audit trail capabilities over paper records have compelled the pharmaceutical industry to rethink good manufacturing practices (GMP) controls. Among the consequences is a heightened awareness of the need to establish and maintain effective data integrity controls at every stage of the manufacturing process for drug products. While the requirement to maintain accurate and complete data is well recognized by industry, what is not universally understood is the level of data integrity control needed at each step to comply with GMP regulations. Many companies continue to struggle when deciding what controls are appropriate for each manufacturing operation and what levels of review and verification are necessary to ensure reliable manufacturing control data.

                    

This technical report describes an approach using quality risk management (QRM) for establishing and assessing the appropriateness of data integrity controls for each manufacturing operation based on the criticality and vulnerability of the data for its intended use.

                    

Developed by subject matter experts from global industry and regulatory agencies, this technical report summarizes manufacturing data integrity risks and identifies best practices that can be used to develop and sustain robust documentation as well as data integrity management procedures, systems, processes, and controls. Employing these practices will help users achieve compliance with applicable laws, regulations, and directives for pharmaceutical products such as active pharmaceutical ingredients (APIs), solid oral dosage forms, sterile injectables, biologics, and vaccines.

                    

Assuring data integrity is an organizational responsibility. Employees at any facility that manufactures, processes, packages, or holds a finished pharmaceutical, intermediate ingredient, or API are responsible for ensuring that data collected throughout the manufacturing process are accurate and reliable. Managers, quality assurance personnel, operators, technicians, and support staff alike must remain aware of the significance of maintaining and documenting data integrity for the quality and safety of their products.

                

                
                

                    

### 

                    

                        

#### TR84

                        

                            

                            

                            

                        

                    

                    

                        

#### 

                        

                        

                    

                    

                        

#### QRM

                        

                        

                    

                    

                        

#### QA

                        

                        

                            

                            

                            

                            

                            

                        

                        

                    

                    

                        

#### 

                        

                    

                    

                        

#### CDMO

                        

                    

                

            

        

    

    
    

        

            

1.2

            

                

## Scope /

                

PDA TR84 — p2

            

        

        

            

                
                

                    

                    

The information in this technical report applies to the management of data at pharmaceutical facilities that manufacture, process, package, or hold a finished pharmaceutical, API, or intermediate. Specifically, it addresses data pertaining to manufacturing operations, materials, facilities and equipment, production, and packaging and labeling, including in-process controls and process analytical testing. It also applies to the procedures, systems, processes, and controls used at a drug facility to ensure that the drugs conform to applicable laws, regulations, and directives and that the data support the drug's identity, strength, quality, and purity.

                    

The methods and processes described here can be applied to facilities that manufacture drugs intended for use both in clinical trials and for commercial distribution. The principles may be extended to facilities engaged in other activities (such as distribution of finished products to customers) or products (such as components, raw materials, medical devices, and combination products), though these were not a principal consideration.

                    

This technical report is **not intended to apply** to data integrity management in clinical practice and the implementation of clinical trials. Data integrity management in laboratory systems is discussed in *PDA Technical Report No. 80: Data Integrity Management System for Pharmaceutical Laboratories*, and data integrity management in quality management systems will be discussed in a future technical report.

                

                
                

                    

### 

                    

                        

#### TR84

                        

                        

                            

                            

                            

                            

                            

                            

                            

                        

                    

                    

                        

#### TR84

                        

                        

                            

                            

                            

                        

                        

                    

                    

                        

#### TR84

                        

                    

                    

                        

#### CDMO

                        

                        

                            

                            

                            

                            

                            

                        

                        

                    

                

            

        

    

    
    

        

            

2.0

            

                

## Glossary and Abbreviations /

                

PDA TR84 — p2–5

            

        

        

            

                
                

                    

                    
                    

                        

Audit Trail

                        

                            FDA
                            A secure, computer-generated, time-stamped electronic record that allows for reconstruction of the course of events relating to the creation, modification, or deletion of an electronic record.
                        

                        

                            MHRA
                            Metadata containing information associated with actions that relate to the creation, modification or deletion of GXP records. An audit trail provides for secure recording of life-cycle details such as creation, additions, deletions or alterations of information in a record, either paper or electronic, without obscuring or overwriting the original record. An audit trail facilitates the reconstruction of the history of such events relating to the record regardless of its medium, including the "who, what, when and why" of the action.
                        

                        

                            WHO
                            The audit trail is a form of metadata that contains information associated with actions that relate to the creation, modification or deletion of GXP records. An audit trail provides for secure recording of life-cycle details such as creation, additions, deletions, or alterations of information in a record, either paper or electronic, without obscuring or overwriting the original record.
                        

                    

                    
                    

                        

Audit Trail Review Assessment (ATRA)

                        

A tool that can be used to help determine what elements within the audit trail should be reviewed, and the frequency at which the review should take place for each part of the audit trail where a review is required.

                    

                    
                    

                        

ALCOA+

                        

**Attributable** — It should be possible to identify the individual or computerized system that performed the recorded task. The need to document who performed the task/function is, in part, to demonstrate that the function was performed by trained and qualified personnel. This applies to changes made to records as well: corrections, deletions, changes, etc.

                        

**Legible** — All records must be legible – the information must be readable in order for it to be of any use. This applies to all information that would be required to be considered Complete, including all Original records or entries. Where the 'dynamic' nature of electronic data is important to the content and meaning of the record, the ability to interact with the data using a suitable application is important to the 'availability' of the record.

                        

**Contemporaneous** — The evidence of actions, events or decisions should be recorded as they take place. This documentation should serve as an accurate attestation of what was done, or what was decided and why, i.e., what influenced the decision at that time.

                        

**Original** — The original record can be described as the first-capture of information, whether recorded on paper (static) or electronically (usually dynamic, depending on the complexity of the system). Information that is originally captured in a dynamic state should remain available in that state.

                        

**Accurate** — Ensuring results and records are accurate is achieved through many elements of a robust pharmaceutical quality system: equipment-related factors such as qualification, calibration, maintenance and computer validation; policies and procedures; deviation management including root cause analysis, impact assessments and CAPA; trained and qualified personnel.

                        

**Complete** — All information that would be critical to recreating an event is important when trying to understand the event. The level of detail required depends on the criticality of the information. A complete record of data generated electronically includes relevant metadata.

                        

**Consistent** — Good Documentation Practices should be applied throughout any process, without exception, including deviations that may occur during the process. This includes capturing all changes made to data.

                        

**Enduring** — Records must be kept in a manner such that they exist for the entire period during which they might be needed. They need to remain intact and accessible as an indelible/durable record throughout the record retention period.

                        

**Available** — Records must be available for review at any time during the required retention period, accessible in a readable format to all applicable personnel who are responsible for their review whether for routine release decisions, investigations, trending, annual reports, audits or inspections.

                    

                    
                    

                        

Critical Process (CP)

                        

A process that impacts a critical quality attribute of the intermediate, drug substance or drug product being manufactured and therefore should have established critical process parameters that can be monitored or controlled to ensure that the process produces the desired quality.

                    

                    

                        

Critical Process Parameter (CPP)

                        

A process parameter whose variability has an impact on a critical quality attribute and therefore should be monitored or controlled to ensure the process produces the desired quality.

                    

                    

                        

Critical Quality Attribute (CQA)

                        

A physical, chemical, biological or microbiological property or characteristic that should be within an appropriate limit, range, or distribution to ensure the desired product quality.

                    

                    
                    

                        

Data Integrity

                        

                            FDA
                            Refers to the completeness, consistency, and accuracy of data. Complete, consistent, and accurate data should be attributable, legible, contemporaneously recorded, original or a true copy, and accurate (ALCOA).
                        

                        

                            MHRA
                            The degree to which data are complete, consistent, accurate, trustworthy, reliable and that these characteristics of the data are maintained throughout the data life cycle. The data should be collected and maintained in a secure manner, so that they are attributable, legible, contemporaneously recorded, original (or a true copy) and accurate. Assuring data integrity requires appropriate quality and risk management systems, including adherence to sound scientific principles and good documentation practices.
                        

                        

                            WHO
                            The degree to which data are complete, consistent, accurate, trustworthy and reliable and that these characteristics of the data are maintained throughout the data life cycle. The data should be collected and maintained in a secure manner, such that they are attributable, legible, contemporaneously recorded, original or a true copy and accurate. Assuring data integrity requires appropriate quality and risk management systems, including adherence to sound scientific principles and good documentation practices.
                        

                    

                    
                    

                        

Data Integrity Controls

                        

Controls put in place to either minimize the potential for a data integrity issue to occur or, if an issue does occur, the controls applied to increase the probability of detection.

                    

                    
                    

                        

Data Lake

                        

A storage repository that holds, in a structured way, a vast amount of raw data, including metadata, in its native format until it is needed.

                    

                    
                    

                        

Data Lifecycle

                        

                            MHRA
                            All phases in the life of the data (including raw data) from initial generation and recording through processing (including transformation or migration), use, data retention, archive/retrieval and destruction.
                        

                        

                            WHO
                            All phases of the process by which data is created, processed, reviewed, analyzed and reported, transferred, stored and retrieved and monitored until retirement or disposal. There should be a planned approach to assessing, monitoring and managing the data and the risks to those data in a manner commensurate with potential impact on patient safety, product quality and/or the reliability of the decisions made throughout all phases of the data life cycle.
                        

                    

                    
                    

                        

Data Process Flow Map

                        

A flow map that uses a baseline process flow map and overlays the data flow.

                    

                    
                    

                        

Data Vulnerability

                        

An indicator of data's level of exposure to data integrity failures due to intrinsic weaknesses in manufacturing processes, data-capture technology, and human factors or a combination thereof.

                    

                    
                    

                        

Detectability

                        

The ability to discover or determine the existence, presence, or fact of a hazard. For purposes of this technical report, a hazard typically would be a data integrity breach.

                    

                    
                    

                        

Gemba Walk

                        

A method of walking through and personally observing processes.

                    

                    
                    

                        

Historian

                        

A database/software program that archives automation and process data.

                    

                    
                    

                        

Looped Memory

                        

An electronic system with limited storage capacity that overwrites older data when it reaches that capacity.

                    

                    
                    

                        

Mitigation

                        

Systematic steps taken or in place to reduce or limit the identified risk.

                    

                    
                    

                        

Peer Review

                        

A review of data by a colleague who has a similar level of responsibilities as the person performing the activity or capturing the data.

                    

                    
                    

                        

Quality Unit

                        

An independent quality unit/structure with authority to fulfill certain pharmaceutical quality system responsibilities.

                    

                    
                    

                        

Risk Control

                        

Actions implementing risk management decisions.

                    

                    
                    

                        

True Copy

                        

                            FDA
                            21 CFR 211.180(d) requires records to be retained "either as original records or true copies such as photocopies, microfilm, microfiche, or other accurate reproductions of the original records." Electronic copies can be used as true copies of paper or electronic records, provided the copies preserve the content and meaning of the original or raw data, which includes metadata required to reconstruct the CGMP activity and the static or dynamic nature of the original records.
                        

                        

                            MHRA
                            A copy (irrespective of the type of media used) of the original record that has been verified (i.e., by a dated signature or by generation through a validated process) to have the same information, including data that describe the context, content, and structure, as the original.
                        

                        

                            WHO
                            A copy of an original recording of data that has been verified and certified to confirm it is an exact and complete copy that preserves the entire content and meaning of the original record including, in the case of electronic data, all essential metadata and the original record format as appropriate.
                        

                    

                

                
                

                    

### 

                    

                        

#### (Audit Trail) —

                        

                        

                            

                            

                            

                            

                        

                        

                    

                    

                        

#### ATRA —

                        

                        

                    

                    

                        

#### ALCOA+

                        
                            
                                
                                    
                                    
                                    
                                
| --- | --- | --- |
                            
                            
                                
                                    ****
                                    
                                    
                                
| Attributable | | |
                                
                                    ****
                                    
                                    
                                
| Legible | | |
                                
                                    ****
                                    
                                    
                                
| Contemporaneous | | |
                                
                                    ****
                                    
                                    
                                
| Original | | |
                                
                                    ****
                                    
                                    
                                
| Accurate | | SOP CAPA |
                                
                                    ****
                                    
                                    
                                
| Complete | | metadata |
                                
                                    ****
                                    
                                    
                                
| Consistent | | GDocP |
                                
                                    ****
                                    
                                    
                                
| Enduring | | |
                                
                                    ****
                                    
                                    
                                
| Available | | |
                            
                        

                    

                    

                        

#### Contemporaneous

                        

                        

                    

                    

                        

#### CP / CPP / CQA —

                        

                        

                            

                            

                            

                            

                            

                            

                            

                            

                        

                        

                    

                    

                        

#### (Data Integrity) —

                        
                            
                                
                                    
                                    
                                    
                                
| --- | --- | --- |
                            
                            
                                
                                    
                                    
                                    
                                
| FDA | | ALCOA |
                                
                                    
                                    
                                    
                                
| MHRA | + | GDocP |
                                
                                    
                                    
                                    
                                
| WHO | MHRA | QRM |
                            
                        

                        

                    

                    

                        

#### (Data Integrity Controls) —

                        

                        

                            

                            

                        

                        

                    

                    

                        

#### (Data Lifecycle) —

                        

                        

                    

                    

                        

#### Looped Memory —

                        

                        

                        

                            

                            

                        

                    

                    

                        

#### True Copy—

                        

                        

                        

                            

                            

                            

                        

                    

                    

                        

#### Gemba Walk

                        

                        

                    

                    

                        

#### CDMO — Historian

                        

                        

                            

                            

                            

                        

                        

                    

                    

                        

#### 

                        

                    

                

            

        

    

    
    

        

            

2.1

            

                

## Abbreviations /

                

PDA TR84 — p5

            

        

        

            

                
                

                    

                    
                        
                            
                                
                                
                            
| Abbreviation | Full Term |
| --- | --- |
                        
                        
                            
| AHU/HVAC | Air Handling Unit / Heating, Ventilation, and Air Conditioning |
                            
| ALCOA | Attributable, Legible, Contemporaneous, Original, and Accurate |
                            
| API | Active Pharmaceutical Ingredient |
                            
| APIC | Active Pharmaceutical Ingredients Committee |
                            
| APR | Annual Product Review |
                            
| BMS | Building Management System |
                            
| BPR | Batch Processing Record |
                            
| CAPA | Corrective Action, Preventive Action |
                            
| CFR | Code of Federal Regulations |
                            
| CP | Critical Process |
                            
| EBR | Electronic Batch Recording |
                            
| FDA | U.S. Food and Drug Administration |
                            
| GAMP | Good Automated Manufacturing Practice |
                            
| GMP | Good Manufacturing Practices |
                            
| GxP | Good practice quality guidelines for various fields |
                            
| HMI | Human Machine Interface |
                            
| ICH | International Conference on Harmonization |
                            
| IS/IT | Information Security / Information Technology |
                            
| ISPE | International Society for Pharmaceutical Engineering |
                            
| MES | Manufacturing Execution System |
                            
| MHRA | Medicines and Healthcare products Regulatory Agency |
                            
| NCR | Noncompliance Report |
                            
| NMPA | National Medical Products Administration (China) |
                            
| OOS | Out of Specification |
                            
| PIC/S | Pharmaceutical Inspection Convention and Pharmaceutical Inspection Co-operation Scheme |
                            
| PLC | Programmable Logic Controller |
                            
| QMS | Quality Management Systems |
                            
| QRM | Quality Risk Management |
                            
| SOP | Standard Operating Procedure |
                            
| TGA | Australian Therapeutic Goods Administration |
                            
| WHO | World Health Organization |
                            
| WL | Warning Letter |
                        
                    

                

                
                

                    

### 

                    

                        

#### CDMO

                        

                        

                            

                            

                            

                            

                            

                            

                            

                            

                        

                    

                    

                        

#### —

                        

                        

                            

                            

                            

                            

                            

                            

                        

                        

                    

                    

                        

#### MES vs EBR vs BMS

                        

                        

                            

                            

                            

                        

                        

                    

                    

                        

#### CDMO

                        

                        

                            

                            

                            

                        

                        

                    

                

            

        

    

    
    

        

            

∑

            

                

## Section Summary /

                

            

        

        

            

                

#### 

                

                

                

                

                

            

            

                

#### 

                

                

                    

                    

                    

                    

                    

                

            

            

                

#### — CDMO

                

                    

                    

                    

                    

                

            

            

                

#### 

                

                

            

        

    

    

PDA Technical Report No. 84 — Data Integrity Management System for Pharmaceutical Manufacturing and Packaging Operations

    

Section 0: Introduction & Glossary (p1–p5) | Bilingual Educational Version

    

© 2020 Parenteral Drug Association, Inc. | Educational commentary in Traditional Chinese added for learning purposes.

⇧

## Section 1: Data Integrity Trends (p6-p10)

# Section 1: Data Integrity Regulatory Trends /

    

PDA Technical Report No. 84 — Data Integrity in Manufacturing and Packaging Operations

    

PDA Technical Report No. 84 | p6 – p10

    
    

        

## Historical Perspective /

                

From the 1963 GMP regulations to the modern era of global DI enforcement

            

        

        

            

                
                

                    

                    

In 1963, the U.S. Food and Drug Administration (FDA) issued its current good manufacturing practices (GMP) regulations for processing, packing, or holding drugs and its major revision in 1978 under 21 CFR Part 211. Since that time, the FDA has acted upon data integrity violations detected during its GMP inspections of pharmaceutical manufacturers. Unique skill sets are required to detect data integrity problems and collect evidence to establish GMP violations. These skill sets can be acquired through focused training on prevailing good documentation practices, including the technology, or lack thereof, used for documenting GMP activities and the associated data and human behavior.

                    

The assessment of data integrity procedures, processes, systems, and controls using a consistent, structured approach and forensic techniques was not always a primary focus during FDA inspections. Periodically, the detection of egregious and unethical events causes FDA to redouble its efforts and refocus its attention on lapses in data integrity. For example, during the late 1980s and early 1990s, FDA uncovered data integrity violations at a large number of U.S.-based generic drug manufacturers (and some innovator companies) in what was later dubbed the "generic drug scandal."

                    

The FDA discovered widespread falsification of production and control records and found that many abbreviated new drug applications contained falsified data and other serious data integrity violations. Several individuals from the industry and the FDA were criminally prosecuted, and the scandal prompted FDA to establish in 1990 a pre-approval inspection program that remains in effect today. That program requires successful FDA pre-approval inspections as a condition of approval for drugs and biologics; subsequently, other major health authorities established similar pre-approval inspection programs. Then, in 1997, the FDA promulgated a regulation related to computer system electronic records and signatures for digital data in 21 CFR Part 11.

                    

These developments impacted industry practices, too. Data integrity became a focus of companies, industry conferences, and industry best practice documents such as the International Society for Pharmaceutical Engineering (ISPE) good automated manufacturing practice (GAMP) guides and PDA technical reports. Data integrity awareness and expertise increased among pharmaceutical professionals, and the incidence of data integrity problems reported by FDA during its GMP inspections of domestic and international pharmaceutical manufacturers declined. Egregious data integrity violations, however, still resulted in sanctions.

                    

Starting in the late 1990s, the advent of the internet and growth in information technology fueled increased globalization of pharmaceutical supply chains. This rapid expansion roused regulators' concerns about data integrity. In 2007, FDA reported that it had found objectionable data integrity issues at 3 of the 10 companies it had recently inspected on this topic. In the years immediately following, FDA again refocused its attention on data integrity practices. Since then, FDA has included data integrity citations in more than 200 warning letters sent to companies in more than 20 countries.

                    

Since 2012, inspections by the FDA, European Medicines Agency (EMA), Medicines and Healthcare products Regulatory Agency (MHRA), World Health Organization (WHO), and other health authorities have revealed a notable increase in the incidence of data integrity issues at international manufacturers of APIs and finished pharmaceuticals worldwide. The prevalence and significance of the data integrity lapses discovered in recent years has led regulators to make data integrity a primary focus during inspections, and regulators are detecting data integrity lapses with increasing frequency.

                    

Pharmaceutical regulators continue to find conditions and practices that compromise data integrity, among them human errors, inadequate management oversight, insufficient employee training, system failures, inappropriate qualification or configuration of systems, poor procedures or not following procedures, and intentional acts of falsification.

                

                
                

                    

### 

                    

                        

## U.S. FDA Warning Letters / FDA

                

2012–2019 production-related DI citations: 212 of 393 warning letters (53%)

            

        

        

            

                
                

                    

                    

A review of approximately 393 FDA warning letters (WLs) issued by the FDA from February 2012 through mid-August 2019, revealed a total of 212 that referenced data integrity-related citations, amounting to more than half (53%) of the WLs (Figure 3.1.1-1). Of the 212 WLs that included citations related to data integrity issues, 96 (45%) were related to production operations (Figure 3.1.1-2), and 116 (55%) pertained to laboratory and quality operations. Approximately 36% of the WLs for data integrity citations were for API manufacturing facilities (35 of 96), about 60% involved finished drug product manufacturing sites (58 of 96), and about 3% included sites that produced both APIs and finished pharmaceuticals (3 of 96).

                    

FDA has cited in recent warning letters questionable data integrity practices in manufacturing operations. For example, a warning letter issued in July 2019 cited that batch records included handwritten values routinely within process parameters while the values recorded by the programmable logic controller (PLC) of the compression machine were frequently outside of the established process parameters. A second example issued in December 2019 cited multiple discrepancies between the human machine interface (HMI) data and the entries made by operators into batch records.

                    

### Figure 3.1.1-1 — WLs with Production-Related DI Citations by Country (Feb 2012 – Aug 2019)

                    
                        
                            
| Country | WL Count |
| --- | --- |
                        
                        
                            
| India | 37 |
                            
| China | 21 |
                            
| United States | 13 |
                            
| Canada | 5 |
                            
| Japan | 3 |
                            
| Mexico | 3 |
                            
| Spain | 2 |
                            
| Hong Kong | 2 |
                            
| Italy | 2 |
                            
| Taiwan | 2 |
                            
| UAE, Austria, Denmark, Germany, Hungary, Korea | 1 each |
                        
                    

                    

### Figure 3.1.1-2 — Incidence of WLs by Product Type (API vs FDF)

                    
                        
                            
| Product Type | Count | Percentage |
| --- | --- | --- |
                        
                        
                            
| API | 35 | ~36% |
                            
| FDF (Finished Drug Product) | 58 | ~60% |
                            
| Both (API + FDF) | 3 | ~3% |
                        
                    

                

                
                

                    

### 

                    

                        

#### 53% DI

                        

                        

                    

                    

                        

#### 

                        

```

```

                    

                    

                        

#### PLC vs

                        

                        

                    

                    

                        

#### CDMO

                        

                        

                    

                    

                        

## EU Non-Compliance Reports /

                

Jan 2012 – Aug 2018: 82 of 163 NCRs (50%) cited DI-related observations

            

        

        

            

                
                

                    

                    

A review of approximately 163 EU non-compliance reports (NCRs) for the period between January 2012 and August 2018 found that 82 of the 163 NCRs (50%) include citations of data integrity-related observations (Figure 3.1.2-1). Review of the 82 NCRs that include data integrity citations found that approximately:

                    

                        
- 46% involved some sort of falsification issues in the production system

                        
- 22% included falsification issues in the laboratory system

                        
- 32% of the NCRs included falsification-related practices related to both the production and laboratory systems

                    

                    

### Figure 3.1.2-1 — EU NCRs with DI Citations by Country (Jan 2012 – Aug 2018)

                    
                        
                            
| Country | Percentage |
| --- | --- |
                        
                        
                            
| India | 49% |
                            
| China | 23% |
                            
| United Kingdom | 6% |
                            
| Italy | 4% |
                            
| Spain | 4% |
                            
| Denmark | 3% |
                            
| Korea, Republic of | 3% |
                            
| Bangladesh, Brazil, France, Japan, Monaco, Romania, Saudi Arabia, United States | 1% each |
                        
                    

                

                
                

                    

### 

                    

                        

#### EU NCR

                        

                        

                    

                    

                        

#### EU NCR DI

                        

```

```

                    

                    

                        

#### FDA vs EU

                        

                    

                    

                        

## Production-Related DI Trends by Category / DI

                

Table 3.1.3-1: 13 categories of DI violations in production operations (2012–2019)

            

        

        

            

                
                

                    

                    

The review of data integrity citations in FDA WLs and EU NCRs between 2012 and 2019 found the citations that affect the manufacturing process tend to fall into four broad themes: poor documentation practices, insufficient data review, ineffective oversight, and ineffective system control. The data in Table 3.1.3-1 is based on observations by FDA and EU inspectors during their inspections of quality management systems for production operations between February 2012 and August 2019.

                    

### Table 3.1.3-1 — Examples of Data Integrity Issues in Production Operations Cited by FDA and EU, 2012–2019

                    
                        
                            
                                
                                
                            
| Examples of Data Integrity Issues Cited | Category |
| --- | --- |
                        
                        
                            
                                
                                ****
                            
| Falsification/Fabrication of Records (e.g., visual inspection data, cleaning validation records, batch records, annual product reviews, glove integrity testing) | False Entries |
                            
                                
                                ****
                            
| False or Misleading Statements (Made to FDA investigators about the practice of blending failing and passing API batches) | False Statements |
                            
                                
                                ****
                            
| Delaying, Denying, Limiting or Refusing Inspection (Failure to allow access to facilities, records, documents, or responsible individuals; hiding manufacturing-related records or dumping unlabeled vials when contents were questioned by FDA) | Delay/Deny/Limit/Refuse Inspection |
                            
                                
                                ****
                            
| Computer Access Controls (Unprotected spreadsheets; shared login credentials; password shared by multiple individuals; inadequate controls for changes to master production and control records) | Computer Access Controls |
                            
                                
                                ****
                            
| Lack of Contemporaneous Data Entries (Pre-dated and backdated batch records; batch records signed by persons who had not performed the activities; uncontrolled spreadsheets transcribed and backdated; cleaning records that did not match video recordings) | Contemporaneous Data Entries |
                            
                                
                                ****
                            
| Unexplained Data Discrepancies (Production equipment labeled as clean but found dirty; batch records missing critical information; erroneous calculations; inaccurate quantities for quality defects; AHU/HVAC filter-cleaning records with discrepant entries) | Data Discrepancies |
                            
                                
                                ****
                            
| Batch Data Traceability (PLCs and manufacturing equipment with shared login credentials that did not permit identification of a specific person) | Data Traceability |
                            
                                
                                ****
                            
| Data Deleted, Destroyed, or Missing/Unavailable (e.g., batch production records, cleaning records, sanitization records, annual product reviews, change controls, filter integrity testing, media fill data, sterilizer data) | Data Deleted/Destroyed/Unavailable |
                            
                                
                                ****
                            
| Audit Trails Unavailable/Disabled (Lack of audit trail for PLC and man-machine interface equipment; disabled electronic audit trail for nonviable particle-monitoring system) | Audit Trails |
                            
                                
                                ****
                            
| Inaccurate/Incomplete Data or Records (Inaccurate entries in batch records; incorrect quantities of active ingredients/raw materials; inaccurate media-fill records; inaccurate CAPA and APR entries) | Inaccurate/Incomplete Records |
                            
                                
                                ****
                            
| Illegible Data Entries (Batch records with data changes in pencil) | Legibility |
                            
                                
                                ****
                            
| Unofficial Records (Use of unofficial records/rough notes/loose paper) | Unofficial Records |
                        
                    

                

                
                

                    

### 

                    

                        

#### 

                        

                        

                            

                            

                            

                            

                        

                        

                    

                    

                        

#### 

                        

                        

                            

                            

                            

                            

                        

                    

                    

                        

#### 

                        

                        

                    

                    

                        

#### Audit Trail

                        

                        

                        

                            

                            

                            

                            

                        

                        

                    

                    

                        

## Regulatory Guidance /

                

Global regulators issued a wave of DI guidance documents 2016–2019

            

        

        

            

                
                

                    

                    

Data integrity throughout the product lifecycle has always been of concern to global regulatory authorities. During the past 40+ years, multiple worldwide GxP regulations, such as the FDA's 1978 Good Laboratory Practice for Nonclinical Laboratory Studies, have included requirements indicating that data need to be attributable, legible, contemporaneous, original, and accurate (ALCOA).

                    

Recently, the resurgence of detected data integrity problems has prompted regulators to release a series of guidance documents that emphasize the importance of data integrity. The FDA, MHRA, WHO, Pharmaceutical Inspection Convention and Pharmaceutical Inspection Convention Co-operation Scheme (PIC/S), China National Medical Products Administration (NMPA), Australian Therapeutic Goods Administration (TGA), and Russian State Institute of Drugs and Good Practices (SID&GP) have all released documents that provide the current thinking of regulators related to data integrity concepts and expectations including the following:

                    

                        
- MHRA: GxP Data Integrity Guidance and Definitions (March 2018)

                        
- FDA: Data Integrity and Compliance with Drug CGMP Questions and Answers Guidance for Industry (December 2018)

                        
- WHO: Guidance on Good Data and Record Management Practices, WHO Technical Report Series, No. 996, Annex 5 (2016)

                        
- WHO: Good Chromatography Practices, Draft for Comments (July 2019)

                        
- PIC/S: Draft PIC/S Guidance: Good Practices for Data Management and Integrity in Regulated GMP/GDP Environments (November 2018)

                        
- NMPA: Draft Drug Data Management Standard (Oct 2016)

                        
- TGA: Data Management and Data Integrity (DMDI) webpage (April 2017)

                        
- SID&GP: Guidelines: Data Integrity and Validation of Computerized Systems (August 2018)

                    

                

                
                

                    

### 

                    

                        

#### ALCOA

                        

                        

                            

                            

                            

                            

                            

                        

                        

                    

                    

                        

#### 

                        
                            
                                
| --- | --- | --- |
                            
                            
                                
| MHRA | GxP Data Integrity Guidance and Definitions | 2018 |
                                
| FDA | Data Integrity and Compliance Q&A Guidance | 2018 |
                                
| WHO | Good Data and Record Management Practices | 2016 |
                                
| PIC/S | Good Practices for Data Management and Integrity | 2018 |
                                
| NMPA | Drug Data Management Standard | 2016 |
                                
| TGA | Data Management and Data Integrity | 2017 |
                            
                        

                    

                    

                        

#### MHRA

                        

                        

                            

                            

                            

                            

                        

                    

                    

                        

#### 

                        

                        

                    

                    

                        

## Industry Best Practices /

                

PDA, ISPE, and APIC guidance documents for DI program implementation

            

        

        

            

                
                

                    

                    

Several associations, including PDA, ISPE, and the Active Pharmaceutical Ingredients Committee (APIC), also have issued best practice documents related to data integrity:

                    

                        
- PDA: Elements of a Code of Conduct for Data Integrity (February 2016)

                        
- PDA: Technical Report No. 80: Data Integrity Management System for Pharmaceutical Laboratories (August 2018)

                        
- ISPE: Records and Data Integrity Guide (March 2017)

                        
- ISPE: Good Practice Guide: Data Integrity – Key Concepts, GAMP Records and Data Integrity (October 2018)

                        
- ISPE: Good Practice Guide: Data Integrity – Manufacturing Records (April 2019)

                        
- APIC: Practical Risk-Based Guide for Managing Data Integrity (March 2019)

                    

                

                
                

                    

### 

                    

                        

#### 

                        

                        

                            

                            

                        

                        

                    

                    

                        

#### PDA TR80 TR84

                        

                        

                        

                            

                            

                        

                    

                    

                        

#### =

                        

                        

                    

                    

                        

#### APIC API

                        

                        

                    

                    

                        

## 
        

        

            

#### DI GMP

            

            

                

                

                

                

            

        

        

            

#### CDMO

            

                

                

                

                

            

        

        

            

#### 

            

            

        

    

    

PDA Technical Report No. 84 — Data Integrity in Manufacturing and Packaging Operations (2020)

    

Section 1: Data Integrity Regulatory Trends | p6–p10

    

Educational bilingual material. Source: PDA TR84 © 2020 Parenteral Drug Association, Inc.

⇧

## Section 2: QRM Applied to Data Integrity (p11-p20)

# Section 2: Quality Risk Management Applied to Data Integrity /

    

PDA Technical Report No. 84 — Data Integrity in Manufacturing and Packaging Operations

    

PDA Technical Report No. 84 | p11 – p21

    
    

        

## Quality Risk Management Applied to Data Integrity /

                

ICH Q9 principles applied across the full data lifecycle

            

        

        

            

                
                

                    

                    

The principles of QRM apply to the data lifecycle, which includes the capture, recording, transcription, archiving, and other aspects of data management. This section uses examples to describe how certain elements could pose a risk to the integrity of pharmaceutical and biopharmaceutical data. Risk should be controlled regardless of whether the data are managed using a manual system or an automated electronic system. Any potential breach related to data integrity—particularly the loss, omission, deletion, or alteration of data—must be investigated, addressed, and accounted for in the quality system and, as necessary, reflected in the risk management documentation. Given that data may be managed and/or transferred between different formats or systems, efforts should be made to mitigate the risk to the integrity of the data during these transfers. Therefore, judicious application of these concepts and targeted application of data integrity principles is warranted as the industry transitions from paper to hybrid (manual and electronic) and, eventually, to fully electronic systems. Data integrity risk also should be addressed during the transfer of data between electronic systems.

                    

The PDA Technical Report No. 54 series describes QRM more broadly, including how to conduct an appropriate risk assessment and formulate a mitigation strategy to reduce the risks identified. For more information on QRM generally and other important elements, such as risk communication, please see the TR 54 series and ICH Quality Guideline Q9: Quality Risk Management.

                

                
                

                    

### 

                    

                        

## Considerations in Assessing Risk /

                

Proactive and reactive risk assessments for data management systems

            

        

        

            

                
                

                    

                    

Risk assessments should be conducted proactively at the time any new data management system is implemented and should be captured by the overarching change control. At this stage in the process, risk assessments can serve as preventive measures to ensure that data integrity is maintained throughout the system lifecycle. When performed on existing data management systems, the assessments should identify potential data vulnerabilities based on the existing level of controls and the criticality of the data for its intended use.

                    

Organizations also should consider performing a risk assessment after a deviation or incident to identify potential gaps in the data management system. Assessment of data integrity risks also should be done in conjunction with the change management process of a data management system to avoid creating new or additional risks. This will enable informed decision-making regarding the extent of the issue and the potential impact. Key objectives of this assessment are to determine if the root cause is related to a gap in data management and, if so, to identify the extent of the gap and the impact to the data.

                    

Data integrity controls should be considered from both the behavioral and technical perspectives. From a behavioral perspective, the overall quality culture, including communications and training, is intimately related to the effectiveness of the data integrity program.

                

                
                

                    

### 

                    

                        

## Considering Human Factors in Assessing Risk /

                

Unintentional vs. intentional acts and the Human Factors Matrix

            

        

        

            

                
                

                    

                    

In considering the human behavioral influence when examining the elements that pose risk to data integrity, two categories need to be examined: unintentional and intentional acts (see Table 4.1.1-1):

                    

### Table 4.1.1-1: Human Factors Matrix

                    
                        
                            
                                
                                
                                
                            
|  | Unintentional Act | Intentional Act |
| --- | --- | --- |
                        
                        
                            
                                ****
                                ****  
  
****
                                ****
                            
| Thinking Errors | Procedure Gap — Error caused by gaps in rules stating what tasks should be performed and by whom, e.g., lack of or inadequate standard operating procedures (SOPs)Knowledge Gap — Error caused by knowledge gaps in how to perform a task, e.g., lack of or inadequate training | Fraud — Violations caused by malicious intent to perform a fraudulent act, e.g., falsifying data for personal gain or avoid personal pain |
                            
                                ****
                                ****  
  
****
                                ****
                            
| Action Errors | Attention Failure — Error caused by taking the wrong action, e.g., unfocused state of mind or a frequently performed action goes wrong or multitasking or aggressive deadlinesMemory Failure — Error caused by taking no action, e.g., failure to perform a routine task due to forgetting its place in the sequence | Misconduct — Violations caused by knowingly ignoring procedures or controls due to misplaced priority, e.g., ignoring established controls to compensate for aggressive target or time pressure |
                        
                    

                    

One category is the unintentional act. Risk may be unintentionally introduced in a variety of ways. The unintentional act may take the form of an "action error" caused by a slip in attention or lapse of memory, or a "thinking error" caused by gaps in governing procedures (knowing what or who) or knowledge (knowing how). For instance, numbers might be reversed in an entry or entered in the wrong spot due to a slip in attention. A bar code might have been applied incorrectly to materials that are brought into the processing room, and the operation started before operators realize that the materials were for a different batch. Another example could be that one operator sets up the equipment believing it will be used for one product, but a different product is brought in and processed.

                    

Appropriate procedures should be in place to require a documented investigation in the event of any mishandling or misuse of the data generated through such unintentional acts. The investigation should identify the root cause, determine the impact and criticality of the deviation, and assign appropriate CAPAs. Where human error is suspected or identified as the cause, this should be justified, having taken care to ensure that process, procedural, or system-based errors or problems have not been overlooked, if present.

                    

The other category is the intentional act. Risk may be introduced intentionally through misconduct, by failing to follow established procedures and controls due to misplaced priorities or through malicious acts. For example, to personally benefit or to avoid personal consequences associated with having made the mistake, an employee may cover up a mistake by creating false entries showing that the desired activity or result occurred. In one misconduct scenario, the operator was not paying attention to the mixing or blending operation and allowed it to run for longer than the validated time, but entered a value within the required range. Another example could be an overworked operator who is struggling to keep up with the manufacturing schedule and, in an effort to catch up, reprints the last acceptable in-process test result with the batch number of the new sample. Determining the reason for an intentional or malicious act may not always be possible.

                    

When a data integrity incident is identified, the most important information to learn is the what (event and systems affected), when (timelines), who (persons involved), why (gaps that contributed to the events occurring), how (specifics, step-by-step explanation of occurrence), where (systems affected) and impact (product quality and patient safety). These elements are essential to determine the need for market action and, ultimately, lead to implementing corrective actions, which will assist in mitigating a recurrence of the data integrity issues.

                    

In the case of unintentional risks to data integrity, it will suffice to follow the process described for risk assessment in this section. Provided the "right" people are in the room—whether operators, technicians, mechanics, programmers, and/or supervisors—the risk assessment is likely to identify the areas in which an accident in data capture and recording is possible. The purpose of the risk assessment is to determine the probability of that accidental error occurring.

                    

When the risk to data integrity is the result of an intentional action, a comprehensive investigation is needed. Intentional manipulation of data is hard to detect and may require the use of forensic detection techniques. The risk assessment process may uncover some of the circumstances in which deliberate acts have occurred, but solid assurances that no repercussions will occur for contributing such information during a risk assessment requires a great deal of trust.

                

                
                

                    

### 

                    

                        

## Risk Control Strategies /

                

Balancing automation, procedural controls, and supervisory review

            

        

        

            

                
                

                    

                    

The potential impact on data must be determined and documented and, following the risk assessment, mitigations must be determined to reduce risk. For risks that have been identified as having a high probability of occurrence and a high impact on product quality or patient safety, a balanced risk control strategy will need to be implemented. Understanding the manufacturing process and data lifecycle processes is crucial to developing successful risk control strategies.

                    

Although automation is not the solution to every problem, it can be a useful tool as part of a risk control strategy. Intelligent barcodes can be used to confirm product and component identity and can prevent a process from proceeding until the error is rechecked and corrected. The time-honored use of a second person checking or a supervisor reviewing is also important, provided that it is timely. Frequently, the supervisory review takes place too long after an event to confirm that it occurred as recorded. Moving further into the digital age, electronic automation will replace such reviews when implemented and qualified appropriately.

                

                
                

                    

### 

                    

                        

## Data Integrity Risk Management Model /

                

The framework connecting data criticality, data controls, and data vulnerability

            

        

        

            

                
                

                    

                    

All data, whether recorded electronically or on paper, requires a risk management approach to determine what controls are important to assure data integrity.

                    

In order to estimate the level of exposure to potential data integrity issues, the following elements must be considered, as illustrated in Figure 4.2-1:

                    

                        
- Data criticality

                        
- Current (existing) level of data controls, including:
                            

                                
    - Data management – how data is recorded (manual or automated)

                                
    - Human factors – the amount of human intervention involved in the manufacturing process (manual or automated)

                                
    - GMP process – including written procedures, training, validation, etc.

                            

                        

                    

                    

Thus, data criticality and current level of data controls, taken together, can aid in identifying the risk of data vulnerability. Data vulnerability can indicate the level of exposure to data integrity issues due to intrinsic weaknesses in the control of three key elements: data capture technology (data management), human factors, manufacturing processes, or a combination of all three.

                    

### Figure 4.2-1: Data Integrity Risk Management Model (Flowchart)

                    

                        

**Step 1:** Identify a GMP process in a unit operation needing DI assessment

                        

↓

                        

**Step 2:** GEMBA Walk + Data Process Flow Mapping

                        

↓

                        

**Step 3:** Determine Data Criticality (Section 4.2.1)

                        

↓

                        

**Step 4:** Determine current level of Data Controls (Section 4.2.2) — assess Data Management, Human Factors, GMP Process

                        

↓

                        

**Step 5:** Map Data Vulnerability to 9-Box (Section 4.3)

                        

↓

                        

**Decision:** In Red/Orange zones?

                        

  → **Yes:** Define risk control strategy to avoid Red/Orange zones (Sections 4.1.2 & 4.5)

                        

  → **No:** Level of Controls in place ensures inadvertent data integrity issues are unlikely to occur but may not prevent intentional falsification. See Section 5.2 for potential differentiated controls.

                    

                

                
                

                    

### 

                    

                        

## Classification of Data Criticality /

                

High, Medium, and Low criticality based on impact to product quality and patient safety

            

        

        

            

                
                

                    

                    

Data criticality is a function of the relationship between the specific data and product quality. It is based on knowledge of the product gained from process development, validation, and quality processes throughout the product lifecycle and is facilitated by a set of relevant questions leading to a classification of data criticality as High, Medium, or Low (see Table 4.2.1-1).

                    

All data related to manufacturing is critical as it is necessary to allow for the reconstruction of actual events; however, the criticality level may differ due to the data's use and the controls under which it was generated. Data that is related to product quality (or supports a disposition decision) and patient safety would generally be classified as High criticality. Critical quality attributes (CQAs) and critical process parameters (CPPs) would be classified as High criticality. Data that is related to process robustness and consistency would be considered Medium criticality. Data that is related to neither would be considered general GMP and of Low criticality.

                    

Data criticality is a measure of the significance of a data point or data set in supporting the safety, quality, identity, purity, potency, and/or effectiveness of the product being manufactured. The manufacturer can best determine the criticality of the data generated by its own processes since it knows the quality target product profile, CQAs, critical processes, and CPPs for the product being manufactured. This concept also applies to clinical trial manufacturing. While CPPs and CQAs may not be fully established in that context, initial information should be available to determine the critical aspects of the manufacturing processes and existing controls.

                    

### Table 4.2.1-1: Classification of Data Criticality

                    
                        
                            
                                
                                
                            
| Data Criticality | Definition |
| --- | --- |
                        
                        
                            
                                
                                
- 
- 

                            
| High | When the intended use of the data directly impacts product quality and/or product safety:                                                                              Product quality monitoring and control of processes that may be responsible for causing variability during manufacturing, release, or distribution impacting critical quality attributes, critical material attributes, critical process parameters, or critical process controls, including those that may be linked with the product registration dossier (where applicable)                                         Product safety monitoring and control of processes that ensure effective management of field alerts, recalls, complaints, or adverse events |
                            
                                
                                
                            
| Medium | When the intended use of the data relates to quality attributes, material attributes, process parameters, key process parameters, or process controls that are not CQAs/Critical Processes (CPs)/CPPs and may or may not be in the product registration dossier; this includes parameters of the manufacturing process that "may not be directly linked to critical product quality attributes but need to be tightly controlled to assure process consistency" |
                            
                                
                                
                            
| Low | When the intended use of the data is to provide evidence of GMP compliance relating to monitoring and control of processes that do not fall into the High or Medium category |
                        
                    

                

                
                

                    

### 

                    

                        

## Data Control Levels /

                

High, Medium, and Low levels of data controls based on automation and human intervention

            

        

        

            

                
                

                    

                    

An assessment must be performed to determine the existing level of data controls (Table 4.2.2-1). High-level data controls are those associated with validated automated processes and minimal human intervention throughout the data lifecycle, whereas low-level data controls are those that involve manual processes with a high degree of human intervention throughout the data lifecycle. Section 5.0 provides some examples of high-, medium-, and low-level data controls that may be appropriate for the criticality of the activity.

                    

### Table 4.2.2-1: Data Control Levels

                    
                        
                            
                                
                                
                            
| Control Level | Definition / Examples |
| --- | --- |
                        
                        
                            
                                
                                
                            
| High | High degree of validated process automation; electronic data lifecycle (e.g., capture, analysis, reporting); minimal human intervention |
                            
                                
                                
                            
| Medium | Hybrid—some manual processes; semi-automated data lifecycle processes; partial or lack of system interfaces |
                            
                                
                                
                            
| Low | Manual data lifecycle (e.g., capture, transcription, second-person witnessing); manual process measurements and testing; manual processes with a high degree of human intervention |
                        
                    

                

                
                

                    

### 

                    

                        

## Data Vulnerability (9-Box) /

                

The core vulnerability assessment grid mapping criticality vs. control levels

            

        

        

            

                
                

                    

                    

Data vulnerability is an indicator of the level of exposure to data integrity issues due to intrinsic weaknesses in three key elements: data management technology, human factors, GMP manufacturing processes, or a combination thereof.

                    

To determine the vulnerability of the data being collected, the user first must assess the level of data criticality and the existing level of data control. Each will be assessed as High, Medium, or Low, using the definitions in Tables 4.2.1-1 and 4.2.2-1.

                    

Subsequently, a 9-Box grid can be created by mapping the data criticality level with the data control level. The 9-Box grid helps visualize how data criticality and data controls interact to rank levels of risk. The criticality of the data will determine the row of the vulnerability grid, while the level of control associated with the data will dictate the appropriate column.

                    

This grid includes nine unique combinations (pairs) of data criticality and data control levels, as illustrated in Table 4.3-1, that can be grouped into four different categories:

                    

                        
- Red: Significant data vulnerability—the level of data controls is Low for High criticality data.

                        
- Orange: Moderate data vulnerability—the level of controls is not commensurate with the criticality of the data.

                        
- Green: Acceptable data vulnerability—the level of controls is commensurate with the criticality of the data.

                        
- Blue: Negligible data vulnerability—there may be more controls in place than the minimum required; this applies only for data that is not High criticality.

                    

                    

The objective is to have the right level of controls in place based on the criticality of the data, and avoid being in the red or orange boxes. The goal of mitigation strategies, then, is to move from right to left by increasing the level of data control. In this assessment, all data relevant to GMP is critical, even if it relates to routine operations.

                    

The 9-Box grid in Table 4.3-1 provides a visual depiction of the vulnerability of data given the current level of data management controls and the criticality of the data. The 9-Box grid does not provide any opportunity or cover for falsification of data.

                    

Table 4.3-1 depicts only the data controls relating to data management technology. For a holistic assessment of vulnerability, the data controls relating to human factors and the GMP process should be similarly assessed. Appendix 1 provides further instructions for using the 9-Box grid, with illustrative examples.

                    

### Table 4.3-1: Data Vulnerability Grid (9-Box)

                    
                    

                        
                        

                        

High Control

                        

Medium Control

                        

Low Control

                        
                        

High  
Criticality

                        

**(H/H)** CQA/CP/CPP impacting quality & safety. Validated & effective automated or hybrid data capture & analysis system in place.

                        

**(H/M)** CQA/CP/CPP impacting quality & safety. Hybrid systems or manual data capture, limited automated data analysis, manual data transcription.

                        

**(H/L)** CQA/CP/CPP impacting quality & safety. Manual data capture, no automated data analysis, manual data transcription, heavy reliance on second-person witnessing.

                        
                        

Medium  
Criticality

                        

**(M/H)** Processes not CQA/CP/CPP but need tight control. Validated automated system. More controls than may be required.

                        

**(M/M)** Processes not CQA/CP/CPP but need tight control. Hybrid systems or manual data capture, limited automated data analysis.

                        

**(M/L)** Processes not CQA/CP/CPP but need tight control. Manual data capture, no automated data analysis, heavy reliance on second-person witnessing.

                        
                        

Low  
Criticality

                        

**(L/H)** GMP compliance data not high or medium. Validated automated system. More controls than may be required.

                        

**(L/M)** GMP compliance data not high or medium. Hybrid systems. More controls than may be required.

                        

**(L/L)** GMP compliance data not high or medium. Manual data capture, manual transcription, heavy reliance on second-person witnessing.

                    

                

                
                

                    

### 

                    

                        

## Using the Data Vulnerability Grid /

                

Practical application of the 9-Box for each process and subprocess

            

        

        

            

                
                

                    

                    

The data vulnerability grid (9-Box), as depicted in the flowchart in Figure 4.2-1, will not provide one overall categorization of a company's data vulnerability, but offers a tool to use for each process and subprocess of operations that involve GMP data. The 9-Box is a holistic approach that allows users to categorize the risk to the data in their current manufacturing processes and data lifecycle processes using internal data criticality and data control assessments. Companies can leverage the information captured in previous risk assessments and data flow maps to provide information on the manufacturing process, methods of data capture, data migration, transfer of data from production to analysis tools, and archiving. The 9-Box can also be used before implementing new or revised processes. The outcome of the assessments will be only as good as the completeness and objectivity of the internal assessments. Underestimating risk factors and overestimating current data integrity controls will diminish the effectiveness of the outcome.

                    

The 9-Box also allows users to identify controls that could be implemented to decrease the risk to data in the manufacturing process. Implementation of those controls could decrease data vulnerability from a high level to a lower level (from right to left in the grid). Examples for implementing the 9-Box in specific scenarios are included in Appendix I.

                    

This technical report recommends, as the first step, selecting a product and identifying the data that is critical for that product to meet its approved specifications and its intended use (see Section 4.2.1.) The critical data for the product should have been identified already as part of the product development process and included in corresponding documentation. After identifying the data that impacts the product CQAs and the processes that are critical in its manufacture, the user can prioritize internal assessments, identify risk factors, and categorize the data vulnerability for these critical processes.

                    

Because three main elements impact data vulnerability—data management technology, human factors, and GMP process—the next step is to consider these three categories when assessing the specific data management process for the operation being evaluated. After completing this analysis for a specific process or unit operation, the completed information may be leveraged for the same process or unit operation used for another product, giving due consideration to potential differences.

                    

For data management, the full lifecycle of the data needs to be considered to determine areas of vulnerability. This includes how the data is captured (manual/automated/hybrid system), frequency of collection, validation of any automated systems used to capture the data, migration of production data to data analysis tools, data transcription, and data archiving. Here, again, existing data flow maps from previous assessments can be leveraged.

                    

For human factors, points of human intervention in the data lifecycle need to be considered to determine data vulnerability. As people are prone to error, processes that rely heavily on manual data capture and review are considered inherently more vulnerable than those that are automated. To determine the reliability of the current processes, the assessment should consider trends related to data transcription errors and poor application of good documentation practices. Conversely, automated data collection, properly validated, will be less prone to error and more likely to yield high quality data.

                    

For GMP process, the complexity and robustness of the manufacturing process being evaluated should be considered to determine areas of data vulnerability. More complex processes are likely to produce a larger volume of data, which could increase the number of factors that impact the data vulnerability. The assessment needs to look at all aspects of the manufacturing process and evaluate each process on a case-by-case basis. A newer manufacturing process that has been validated recently and that lacks a history of robustness will have greater data vulnerability than an established process with a high-process capability. Trends related to change control, out of specification (OOS) results, alarms, and out-of-calibration instances can also illustrate the vulnerability of data being collected for the manufacturing process. Once identified, the trends should be investigated to determine their relationship to data vulnerability.

                

                
                

                    

### 

                    

                        

### Table 4.4-1: Potential Areas of Data Integrity Vulnerability /

            

                

                    

                    

### Table 4.4-1: Potential Areas of Data Integrity Vulnerability

                    
                        
                            
                                
                                
                            
| Categories | Example Areas of Consideration |
| --- | --- |
                        
                        
                            
                                ****
                                
- 
- 
- 
- 
- 
- 
- 
- 
- 
- 

                            
| Data Management Technology (consider the full data lifecycle) | Data transcription                                         Frequency of periodic reviews and change management based on intended use                                         Hybrid systems (e.g., discrepancies between paper printout and corresponding electronic record, data duplication)                                         New or complex manufacturing technology (causing repeat errors)                                         Overwriting existing electronic data                                         System validation age                                         System controls related to data export, calculation, reporting, transfer, archiving and retrieval                                         Appropriate access level                                         Technologies with inadequate data integrity elements such as unique access, audit trail, data backup & restore, electronic data review, date & time stamp, among others (e.g., spreadsheets, LIMS)                                         Unexplained discrepancies between electronic raw data and reported data |
                            
                                ****
                                
- 
- 
- 
- 
- 
- 

                            
| Human Factors | Lack of supervisory review                                         Manual observations or measurements (e.g., weighing)                                         Repeat human errors (e.g., due to multitasking, high personnel turnover, inadequate training, time pressures)                                         Training and procedures (complex, long, unclear, incomplete, or difficult-to-access instructions)                                         Unclear role definition or segregation of duties                                         Culture (fear, frustration, intent, unacceptable local documentation practices) |
                            
                                ****
                                
- 
- 
- 
- 
- 
- 
- 
- 

                            
| GMP Process | Aborted runs (e.g., due to lack of planning, understanding system operation, suitability of equipment and process)                                         Complex process (e.g., many interfaces, high level of human intervention, high levels of manual data entry)                                         Data flows and ownership not well defined                                         Inadequate line clearance checks                                         Negative trends related to changes, deviations, out of specification, alarms, out of calibration                                         New or complex processes (causing repeat errors)                                         Operation switching (GMP vs. non-GMP)                                         Unavailability of quality-related data requested during regulatory inspections |
                        
                    

                    

Once the risk factors have been identified, the third step is to assess the existing controls as described in Section 4.2.2. The controls in place should have been identified, for instance, by using a data flow map as discussed in Section 4.5. A historical review of the information related to data integrity issues contained in the quality management system (QMS) can be valuable in determining the adequacy of the existing data integrity controls.

                    

After identifying the manufacturing process being evaluated and the criticality of the data; the data management, human, and GMP process risk factors associated with the process; and the data controls in place, the user can evaluate this information to determine where in the 9-Box grid the unit operation best fits, then mitigate the risks deemed unacceptable.

                    

If the operation being evaluated fits into a red box (H/L) as shown in Table 4.3-1, the controls in place are insufficient for the highly critical data and risk factors that have been identified. If it fits into one of the two orange boxes (H/M or M/L), the data integrity controls in place for that operation could be improved, based on the criticality of the data and the risk factors identified. If the operation fits into one of the green boxes (H/H, M/M, L/L), the controls in place are sufficient for the criticality of the data and identified risk factors. If the process fits into one of the blue boxes (M/H, L/H, L/M), the controls in place may be more than required for the criticality of the data and the minimal risk factors identified. This does not imply that the controls for these processes should be decreased, but that resources potentially could be shifted to other processes, such as those in the orange and red boxes.

                

                

                    

### 

                    

                        

#### 

                        

                        

                        

                            

                            

                            

                            

                            

                        

                        

                        

                            

                            

                            

                            

                        

                        

                        

                            

                            

                            

                            

                        

                    

                    

                        

#### 

                        

                        

                    

                    

                        

#### CDMO

                        

                        

                    

                    

                        

#### 9-Box

                        

```

```

                    

                

            

        

    

    
    

        

            

4.5

            

                

## Data Process Flow Maps / DPFM

                

Visualizing data movement through operations to identify high-risk points

            

        

        

            

                
                

                    

                    

Data process flow maps, a GMP requirement in certain parts of the world, are an extremely useful tool for visualizing the movement of data through a given operation and can facilitate the identification of areas of high risk to the data. Every step from start to end of a given process (e.g., from order creation to release of finished product) should be identified and documented in order to obtain a complete picture of the data flow in the process. For each step, the data process flow map should identify the activity performed, how the activity is performed, the systems used to perform the activity, the data created, the method of recording the activity, and the decisions made from the data. It also should include details on how data flows between systems or process steps and the means used to transfer data, taking the data lifecycle into consideration as part of the supporting documentation. The data process flow map should start with the point of origin of the data and include the systems (e.g., equipment, devices, applications) used in the process. Documenting the data flows related to manufacturing processes and systems through personal observation, such as through a Gemba walk, can prove helpful in this process.

                    

Points in the process where data integrity could be compromised should be identified. Asking a series of critical-thinking questions at each stage of the data flow throughout the lifecycle can facilitate the process, for example:

                    

                        
- Are unique accounts assigned to each user?

                        
- Is an audit trail available that demonstrates if and when data is manipulated in any way, and does it identify who has performed the operation?

                        
- Is data held in temporary memory? What happens if there is no power to this unit?

                    

                    

For instance, unauthorized access to a system could potentially allow for manipulation of batch-related data. These points where data integrity could be compromised represent areas of risk. For each, a risk assessment should be conducted, and mitigations to reduce risk identified and implemented. Differences in detectability (including elements related to electronic vs. manual processes) should be considered as part of the risk assessment.

                

                
                

                    

### 

                    

                        

## Examples of Process and Data Flow Mapping /

                

Case 1 (paper-based manual) vs. Case 2 (PLC-controlled automated) granulation operations

            

        

        

            

                
                

                    

                    

The following examples show process or data flow maps for solid oral dosage granulation operations. The three main steps in developing and using these tools are:

                    

                        
1. Identify the key stakeholders involved in the process and hold a brief interview to obtain an overview of the process.

                        
2. Create a process data flow map to determine:
                            

                                
    - If the data is captured in paper or electronic format,

                                
    - If the data flow takes place in real-time (solid line) or later (dashed lines),

                                
    - If automated printed outputs are available with out-of-validated-range alert, and

                                
    - If procedural controls are already in place or in use.

                            

                        

                        
3. Once the process/data flow is graphed, areas of data integrity vulnerabilities can be highlighted and used as input to build a remediation plan.

                    

                    

### Case 1: Paper-Based Manual Process (Figure 4.5.1-1)

                    

Case 1 depicts a paper-based, manually controlled granulation process with an endpoint of total granulation time that has been derived from process validation work, included in the master batch record, and approved by the quality unit. Case 1 relies on the data being captured by the operator, with second-operator verification, by wet ink recordings directly into the paper batch production record in real time. In this example, the endpoint of the granulation operation is a CPP that impacts the CQA of the finished product and would therefore be considered High-criticality data. The existing level of controls would be considered Low because of the total manual operation (see Section 4.2.2.). The only controls in this case are the second-person verification and a review by the quality unit.

                    

                        

**Case 1 Flowchart (Paper-Based Manual Process):**

                        

**Quality Unit:** Approve Validated Process (CPP/CQA) → Review BPR for total granulation time → Full BPR Review → Product Impact? → Pass/Fail → Release/Reject Batch

                        

**Operator 1:** Confirm Components → Confirm process parameters in MBR (paper based) → Enter Start & End Times (start granulation) → Total time within VAL range? → If No: Initiate Deviation

                        

**Operator 2:** Peer Review

                        

*All data flows are real-time (wet ink). After-the-fact review by QU only.*

                    

                    

### Case 2: PLC-Controlled Automated Process (Figure 4.5.1-2)

                    

In Case 2, the same validated granulation process has been automated. The total granulation time has been included in a recipe, approved by the quality unit, and programmed into a PLC that controls the process. This programming includes an automated alert when the validated range is exceeded. The control level is now considered High because the validated PLC automated-data collection system does not depend on any human intervention. With this level of control and the PLC's printout of the granulation process, which includes the data on the total granulation time and an out-of-range alert, second-person verification is not necessary. The automated data collection further protects the integrity of this High-criticality data by preventing changes to the total granulation-time data in the system. The full batch production record is still reviewed by the quality unit as part of the release process.

                    

                        

**Case 2 Flowchart (PLC-Controlled Automated Process):**

                        

**Quality Unit:** Approve Validated Process (CPP/CQA) → Confirm process parameters in MBR (PLC recipe) → Full BPR Review → Product Impact? → Pass/Fail → Release/Reject Batch

                        

**Operator 1:** Confirm Components → Perform Granulation → PLC printout of total granulation time → Printout shows out of VAL range alert? → If Yes: Initiate Deviation

                        

*No Operator 2 (peer review) needed. PLC captures data automatically. After-the-fact review by QU.*

                    

                    

Automated data capture of the granulation time, printouts of the data, and automated alerts when the total granulation time exceeds the validated range can reduce the procedural burden as well as improve data integrity assurance. This becomes obvious when comparing the data flow of Case 1 to that of Case 2. In Case 2, where the PLC controls the process, captures and stores the data, and generates a printout with automated alerts that is attached to the paper batch production record, there is no need for peer review of the data on a per-batch basis.

                

                
                

                    

### 

                    

                        

### 

        

        

            

            

            

        

        

        

            

            

            

        

        

        

            

            

            

            

            

        

        

        

            

            

            

            

        

        

    

    

PDA Technical Report No. 84 (2020): Data Integrity in Manufacturing and Packaging Operations

    

Section 2: Quality Risk Management Applied to Data Integrity — Bilingual Educational Material

    

For educational purposes only. Original content copyright PDA.

## Section 3: DI Controls: Framework & Methodology (p21-p25)

# Section 3: Data Integrity Controls — Framework & Methodology

    

    

PDA Technical Report No. 84 | p21 – p25

    
    

        

## Data Integrity Controls — Overview

                

            

        

        

            

                
                

                    

Original Text (English)

                    

### 5.0 Data Integrity Controls

                    

Many events during manufacturing may compromise the integrity of the data. Any number of factors may cause these events, including human error, insufficient training, system failure, inappropriate qualification or configuration of systems, poor procedures, or people not following procedures, as well as intentional acts of falsification.

                    

PDA recognizes that quality culture is critically important in the prevention and detection of data integrity breaches; however, this technical report is designed to identify risk and potential mitigation of a data integrity breach regardless of where on the spectrum of data integrity (system error, individual error, individual or institutional malfeasance) that breach occurs. Of course, intentional fraud and intentional manipulation of data are unacceptable under any circumstances, regardless of data criticality, vulnerability, or existing level of controls.

                    

In supporting and communicating expectations around a culture of quality for data integrity, PDA recommends that entities use the PDA publication, *Elements of a Code of Conduct for Data Integrity in the Pharmaceutical Industry*, which outlines key elements necessary to help ensure the reliability and integrity of data throughout all aspects of a product's lifecycle. It can be used, in whole or in part, as a control approach to guide a company's internal practices, to create or modify an existing data integrity code of conduct, or to develop agreements with outsourcing partners or other suppliers. The elements identified throughout that document are intended to reinforce a culture of quality and trust within the pharmaceutical industry.

                    

An important part of preventing data integrity breaches is identifying, establishing, and maintaining proper controls, whether the data elements are electronic, paper-based, or a combination of the two. Ensuring data integrity means protecting the original data from accidental or intentional modification, falsification, and deletion. Requirements specifying that data need to be ALCOA+ throughout the data lifecycle have been included in regulations around the world for several decades. The WHO, FDA, MHRA, and PIC/S have all released documents to reeducate the industry on current data integrity concepts and expectations. These are the "what"—what is required to ensure the integrity of data.

                    

Data integrity controls can be embedded in working procedures and practices or included as part of computer system validation and equipment qualification or usage. These controls may be used to minimize the potential that a data integrity issue will occur and to increase the probability of detecting an issue that does occur. The data integrity controls are the *"how"*—how to ensure that these requirements are implemented in practice.

                    

Regulations convey the core elements that must be in place to ensure data integrity and a robust QMS, including some of the following examples:

                    

                        
- Standard operating procedures (SOPs) are in place for completion and retention of records.

                        
- People are suitably trained for their intended job purpose.

                        
- Systems are validated or qualified for their intended purpose.

                        
- People have access to the records required to perform their activities.

                        
- If electronic signatures will be used, they should be attributable to an individual, unable to be altered, permanently linked to the document, and have a time and date stamp.

                        
- Data integrity risks should be identified as part of the QRM process and dealt with accordingly.

                        
- A management review process allows data integrity issues to be elevated to the highest levels of the organization.

                        
- The data governance policy is endorsed at the highest levels of the organization, empowering a strong data integrity culture at all levels of the organization.

                        
- An anonymous reporting program, supported by company policy, encourages personnel to bring breaches in data integrity to the attention of management.

                        
- Routine data verification and periodic surveillance checks should be performed.

                        
- Self-inspections should include verification of the effectiveness of the data integrity controls.

                        
- A strong change management system is required.

                    

                

                
                

                    

                    

                        

## Potential Differentiation of Controls

                

            

        

        

            

                
                

                    

Original Text (English)

                    

### 5.1 Potential Differentiation of Controls

                    

While there are many requirements to ensure a robust QMS, Section 5.0 only focuses on data integrity controls where it is acceptable to differentiate the level of controls that may be applied. This means that the levels of controls applied (e.g., frequency of review, number of items to check, who performs the review) may differ depending on the criticality of the data, system, or activity. Consistent with ICH Q9, which promotes a risk-based approach, highly critical data, systems, or activities require more controls, while less critical data or activities require fewer controls.

                    

This portion of the technical report focuses on only a small part of all data integrity controls required by regulations. Most data integrity controls required by health authority regulations apply in the same manner for any GMP data, that is, the controls do not differ based on the criticality of the processes performed by the organization. Such controls are not discussed further in this technical report.

                    

The following examples illustrate why the same level of controls may be applied, regardless of the criticality of the activity:

                    

                        
- GMP regulations require that entries in records should be indelible, made in the appropriate spaces, identify the person making the entry and, if different, identify the person who performed the task(s). Corrections, if required, should be dated and signed, leaving the original entry still readable, with a comment added to explain the correction. *Envision two different scenarios in which a person makes a correction because of a typographical error: One person has recorded a critical parameter during aseptic filling, while another has documented a training, a less critical activity. In both circumstances, the individuals involved should make the necessary correction, explain why the correction was made, and sign with the time the correction was made, leaving the original entry still legible.*

                        
- GMP regulations also require that, in electronic systems, a user's privileges should be limited to allow the employee to perform the work, without any additional unnecessary privileges. Access to change the date or time of the system, for example, should be limited to a very small group of people, ideally independent administrators. Regardless of whether the system is highly critical (e.g., granulation) or less critical (e.g., secondary packaging systems that do not store data relating to quality attributes or parameters such as expiry dates), the same controls should be in place to restrict access.

                    

                    

Any given system may have some controls for which it is possible to differentiate the level of controls applied, and some controls that will be the same regardless of the criticality of the activity.

                

                
                

                    

                    

                        

## Methodology Used to Determine Differentiated Controls

                

            

        

        

            

                
                

                    

Original Text (English)

                    

### 5.2 Methodology Used to Determine Differentiated Controls

                    

To determine the controls required for data, records, or systems, existing regulations and guidelines for data integrity were reviewed. The recommended controls were categorized against the type of document control system being employed: paper-based, electronic-based, and a hybrid. Some of the controls identified apply to paper-only systems and some apply to electronic-only systems. Hybrid systems incorporated many of the controls for paper- and electronic-based systems.

                    

The data integrity requirements specifically relating to controls required for paper, electronic, and hybrid systems were further identified and analyzed. Only requirements where it is acceptable to differentiate the level of control applied, proportional to the criticality, were selected. Where the level of control cannot be differentiated, the controls are considered core elements in ensuring a robust QMS and out of scope for this technical report.

                    

The authors identified seven categories of controls for which it is acceptable to differentiate the level of control applied. Each category was assessed to determine whether the data, record, or system was being controlled and then was further scrutinized to determine which controls within that category may be differentiated. For example, based on criticality, the technical report team considered whether it is acceptable to differentiate between the frequency of control (daily vs. monthly), who performs the control (manufacturing vs. quality unit), or what needs to be controlled (more-detailed vs. less-detailed review).

                    

Where differentiation is acceptable, details of how the controls differ based on criticality are discussed in detail in Section 5.3. The level of controls required may be applied at the data, record, or system level, depending on which of the seven categories are being discussed. Any requirements within a category that remain consistent across the criticality levels are considered basic elements in ensuring a robust QMS and are out of scope for this technical report.

                    

### Table 5.2-1: Categories Where Different Levels of DI Controls are Acceptable

                    
                        
                            
                                
                                
                                
                            
| Type of System | Category | Short Description |
| --- | --- | --- |
                        
                        
                            
                                ****
                                
                                
                            
| Paper | 1 — Storage of and access to completed/archived paper records | Controls associated with storage of and access to completed/archived paper records, and who has access to these documents |
                            
                                
                                
                            
| 2 — Generation and reconciliation of documents | Guidance on controls associated with generation and reconciliation of documents to prevent potential misuse |
                            
                                ****
                                
                                
                            
| Hybrid | 3 — Manual activities when recording or transferring data between paper and electronic formats | Data accuracy associated with manually recording data without a controlled second format, transcription of manually recorded data into an electronic system, and controls around True Copy (paper to electronic) |
                            
                                ****
                                
                                
                            
| Electronic | 4 — Access controls for electronic systems | Different levels of controls to ensure the right level of access to electronic records and systems is applied |
                            
                                
                                
                            
| 5 — Audit trail review | Risk-based approach to identify which items to review as part of manufacturing batch data and parameter/configuration settings audit trail reviews, and how frequently to perform the review |
                            
                                
                                
                            
| 6 — Backup of electronic data | Controls to ensure electronic raw data is backed up so a copy remains available and can be retrieved in its original format |
                            
                                
                                
                            
| 7 — Use of electronic data | Data integrity controls associated with using electronic raw data to generate system reports/records and controls associated with transfer/migration of raw data to another location |
                        
                    

                    

Sections 5.3.1–5.3.7 have been developed with manufacturing operations in mind; however, many of the concepts discussed can also be applied to other functional areas (e.g., analytical laboratories).

                

                
                

                    

                    

                        

## Areas of Differentiated Data Integrity Controls

                

            

        

        

            

                
                

                    

Original Text (English)

                    

### 5.3 Areas of Differentiated Data Integrity Controls

                    

While all data potentially impacts the quality of the product, the impact to the manufacturing processes governing product quality and patient safety varies depending on the type of data, record, or system being used to govern the process. For the seven categories identified where different levels of data integrity controls are acceptable, a criticality rating of High, Medium, or Low was used. (See Section 4.2.1 for definitions of criticality.)

                    

Sections 5.3.1–5.3.7 detail how differentiated controls may be applied for different levels of criticality. Most of the controls discussed are prevention controls, but a few detection controls are included as well. Some of the differentiated data integrity controls should be applied at the system level, others relate to records, and some are relevant to data points. Each table provides the necessary details concerning detection vs. prevention and the level where the control should be applied (data point, record, or system).

                    

Those sections provide examples of critical activities designated as High, Medium, and Low for illustrative purposes and are not prescriptive; the examples are intended to stimulate thinking. Each entity should assess its own data and apply the concepts in this technical report to determine the controls necessary for their operations. In addition, suggestions are provided throughout, illustrative only, regarding the frequencies at which certain activities should take place. Organizations should determine the frequencies that are most applicable to their operations using a risk-based approach to ensure that the periodicity of activities is commensurate with the risks identified.

                    

Sections 4.3 and 4.4 discuss that, in the data vulnerability model, the risks associated with data management, human factors, and GMP process must be identified, and the controls in place must be assessed to confirm they are sufficient for the risks identified. Sections 5.3.1–5.3.7 primarily discuss data management controls.

                    

The controls discussed below would result in data being placed in one of the green boxes (H/H; M/M; L/L) of the 9-Box grid (Table 4.3-1). That is, the controls would be adequate for the criticality of the data and the identified risk factors. If fewer controls are in place than those recommended in Sections 5.3.1–5.3.7, the level of data management controls is not adequate for that level of data criticality. On the other hand, if more controls than required are in place, the data vulnerability in these specific areas is very low.

                    

The controls discussed in Sections 5.3.1–5.3.7 are only one part of the controls that need to be considered to assess the overall data vulnerability. Organizations also must consider the data management controls, human factor controls, and GMP process controls that apply without any possible differentiation in level of control. Whether the levels of control required are differentiated or not, all controls must be described in SOPs.

                

                
                

                    

                    

                        

#### Preventive Control () vs. Detective Control ()

                        

                        

                            

                            

                        

                        

                    

                    

                        

#### vs.

                        

                        

                        

                    

                    

                        

#### 9-Box Grid

                        

                        

                            

                            

                            

                            

                        

                        

                    

                    

                        

#### 

                        

                        

                        

                            

                            

                            

                        

                        

                    

                    

                        

#### Defense in Depth ()

                        

                        

                            

                            

                            

                            

                        

                        

                    

                    

                        

## Section Summary —

                

            

        

        

            

                

#### 

                

                

                    

                    

                    

                    

                

            

            

                

#### CDMO

                

                    

                    

                    

                    

                

            

            

                

#### 

                
                    
                        
                            
                            
                            
                        
| | English | |
| --- | --- | --- |
                    
                    
                        
                            
                            
                            
                        
| | Preventive Control | 5.3 |
                        
                            
                            
                            
                        
| | Detective Control | 5.3 |
                        
                            
                            
                            
                        
| | Access Control | 5.1, 5.2 Cat.4 |
                        
                            
                            
                            
                        
| | Audit Trail | 5.2 Cat.5, 5.3 |
                        
                            
                            
                            
                        
| | Defense in Depth | 5.3 |
                        
                            
                            
                            
                        
| | Paper-based System | 5.2 |
                        
                            
                            
                            
                        
| | Electronic System | 5.2 |
                        
                            
                            
                            
                        
| | Hybrid System | 5.2 |
                        
                            
                            
                            
                        
| | Differentiated Controls | 5.1, 5.2, 5.3 |
                        
                            
                            
                            
                        
| | Data Criticality | 5.1, 5.3 |
                    
                

            

            

                

#### Section 5.3.1–5.3.7

                

                

                    

                    

                    

                

                

            

        

    

    

PDA Technical Report No. 84 — Data Integrity in Manufacturing and Packaging Operations

    

Section 3: Data Integrity Controls — Framework & Methodology | p21–p25

    

Licensed educational material. For internal training use only.

⇧

## Section 4: DI Controls: Specific Areas (p25-p39)

# Section 4: DI Controls — Specific Areas

    

    

PDA Technical Report No. 84 | p25 – p39

    
    

        

## 5.3.3.3 True Copy (Paper to Electronic)

                

            

        

        

            

                
                

                    

Original Text (English)

                    

### 5.3.3.3 True Copy (Paper to Electronic)

                    

Table 5.3.3.3-1 illustrates the controls needed for creation of a true copy, going from a paper record to an electronic record. True copies must be maintained using the same controls that applied to the original paper record.

                    

For High-criticality records, such as paper batch records that may be needed for downstream use by a sister site or another department, a trained user can make the true copy, but a second person from the quality unit must perform a documented review. The review must ensure the scan is legible, accurate, and complete (all pages, all entries) and confirm that all entries on the true copy provide all information and data that are contained on the original record. For example, if data is color-coded or highlighted, the true copy must reflect the same color-coding or highlighting, with the intent of capturing the context and meaning. In addition, the original record may be discarded with quality unit oversight, unless the original document has a seal, watermark, or similar identifying mark that cannot be accurately reproduced electronically, in which case it cannot be discarded. The quality unit should determine the level of oversight required for destruction, which may range from quality unit presence during destruction to periodic confirmation of compliance with procedures.

                    

For Medium-criticality records, like a validation protocol, a trained user can make the true copy. A documented second-person review is required, though the second person need not be from the quality unit. The original record may be discarded by the operating unit unless the original document has a seal, watermark, or identifying mark. While the quality unit does not need to be directly involved in the destruction process, it must retain a suitable level of oversight to ensure the procedures are followed.

                    

For Low-criticality records, such as completed user access authorization forms where evidence of training exists in another system, the person making the true copy must document that they reviewed the scan for legibility, accuracy, and completeness. The original may be discarded by the individual, with quality unit oversight to ensure that procedures are followed.

                    

As with all controls relating to data integrity, processes relating to true copies, regardless of criticality, must be documented in SOPs. A record must be maintained to reflect when each document was destroyed and who destroyed it.

                    
                    
                        Table 5.3.3.3-1 — Data Integrity Control Grid for True Copy (Paper to Electronic)
                        
                            
                                
                                
                                
                                
                            
| True Copy (Paper to Electronic) | High Data Criticality | Medium Data Criticality | Low Data Criticality |
| --- | --- | --- | --- |
                        
                        
                            
                                ****
                                
                            
| Prevention Control |  |
                            
                                
                                
                                
                                
                            
| Review requirements | Documented review by second person from the quality unit for legibility, accuracy, and completeness | Documented review by second person (not necessarily from the quality unit) for legibility, accuracy, and completeness | Documented verification by person performing the scan for legibility, accuracy, and completeness |
                            
                                
                                
                                
                                
                            
| Discard of original allowed | Yes, as defined by quality unit oversight, unless there is a seal, watermark, or other identifier that can't be accurately reproduced electronically | Yes, performed by the operating unit, unless there is a seal, watermark, or other identifier that can't be accurately reproduced electronically. Quality unit oversight required | Yes, individual can discard original. Quality unit oversight required |
                        
                    

                

                
                

                    

                    

                        

## 5.3.4 Access Controls for Electronic Systems

                

            

        

        

            

                
                

                    

Original Text (English)

                    

### 5.3.4 Access Controls for Electronic Systems

                    

Access controls to electronic systems are required to prevent potential data integrity issues from occurring. Table 5.3.4-1 describes several differentiable controls related to access to electronic systems.

                    

For systems storing High-criticality data, such as an MES, historian, or filter integrity tester used during sterile filling, unique identification and authentication controls should be in place for each individual user. Other features also should be available for use, such as mandatory password changes every 90 days, lock-out after five failed attempts, password recycling only allowed after 10 cycles, and an annual review of user accounts.

                    

For systems storing Medium-criticality data, like parameter-setting or executed run files for a washing machine, many of the controls for systems storing Highly critical data likewise should be applied. Certain measures can be less stringent: mandatory password changes can occur every 180 days (instead of 90), passwords can be recycled after 5 cycles (instead of 10), and users locked-out after 10 incorrect tries (instead of 5).

                    

For Low-critical systems, for example, an HMI on a secondary packaging line that controls conveyor speed but does not store data, the access controls may be far less rigorous. For these types of systems, a passcode or group accounts are acceptable. Controls must be in place, however, to ensure segregation of duties between user levels (i.e., administrator vs. engineer vs. operator). The passcode or group accounts should be changed annually. These controls may also be used for other Low-critical activities that do not require the action to be attributable. For example, a group account may be used to press the start/stop button on a packaging line when the system requires a log-in to activate the stop/start function.

                    

Automatic log-out is not discussed as a differentiated control but should be considered as an overall control factor. The amount of time that should be allowed to pass before an inactive user is automatically logged-out should be commensurate with the risks identified, and documented accordingly.

                    

As stated above, the suggested frequencies at which certain activities should take place are illustrative only. Organizations should determine the frequencies that are most applicable to their operations using a risk-based approach to ensure that the periodicity of activities is commensurate with the risks identified. This assessment should consider the overall system architecture, the interfaces between systems, criticality of access by unauthorized persons, and the potential for network security breaches.

                    
                    
                        Table 5.3.4-1 — Data Integrity Control Grid for Access Controls for Electronic Systems
                        
                            
                                
                                
                                
                                
                            
| Access Controls for Electronic Systems | High Data Criticality | Medium Data Criticality | Low Data Criticality |
| --- | --- | --- | --- |
                        
                        
                            
                                ****
                                
                            
| Prevention Control |  |
                            
                                
                                
                                
                                
                            
| Access to Electronic systems — HOW | Identification and authentication (User ID + Password) | Identification and authentication (User ID + Password) | Passcode/group account based on role & information access |
                            
                                
                                
                                
                                
                            
| Password change frequency | Every 90 days | Every 180 days | Annually |
                            
                                
                                
                                
                                
                            
| Periodic user account access review | Annually | Annually | Every 2 years |
                            
                                
                                
                                
                                
                            
| Account lock-out after repeated incorrect password entries | 5 incorrect password entries | 10 incorrect password entries | Never |
                            
                                
                                
                                
                                
                            
| Password recycling — Reuse of previously used passwords | 10 cycles | 5 cycles | N/A |
                        
                    

                

                
                

                    

                    

                        

## 5.3.5 Electronic Audit Trail Review

                

            

        

        

            

                
                

                    

Original Text (English)

                    

### 5.3.5 Electronic Audit Trail Review

                    

Audit trails are a form of metadata that records details such as the creation, addition, deletion, or alteration of data within a system. An audit trail provides controls for secure recording of lifecycle details, without overwriting the original record. Where equipment (e.g., instruments, devices) are used to capture, create, process, report, store, or archive relevant GMP data electronically, the system design must always include the provision and retention of a suitable audit trail.

                    

Secure, computer-generated, time-stamped audit trails must allow for reconstruction of the history of events relating to the record, including the "who, what, and when" of the action. Where technically possible, comments should be added, in the case of modifications or corrections, so that the why of the activity also is recorded as part of the audit trail. Where not technically possible to record in the audit trail the reasons for changes or deletions to GMP-relevant data, alternate documentation should be used.

                    

The electronic audit trail may comprise multiple sources related to the equipment; that is, the information may be held in files called something other than "Audit Trail," for example, event log, alarm log, system log, history file, trends, or reports. Understanding where the information is recorded within the system, at both the operating system and application level, is important to help protect the data and understand where in the system to look when performing an audit trail review.

                    

In the following sections, audit trail review is discussed for three different types of data contained within the electronic audit trails:

                    

                        
- Data associated with batch setup, for example, the recipe used, and the set-points or times planned for specific activities during the batch

                        
- Batch run data, which is data from the manufacturing process, for example, temperatures, duration of activities, who performed the activities

                        
- System configuration data, which are not batch-relevant data but the data associated with the configuration of the system, for example, user-account information, privileges granted to users, where data is stored

                    

                    

Reviewing audit trails enables detection of potential data integrity issues. Some regulations require that audit trails be reviewed on a periodic basis. There is no expectation that every part of the audit trail will be reviewed for every batch; rather, it is expected that a risk-based approach will be taken to identify the appropriate level of review to conduct.

                    

The person performing the audit trail review must be independent and technically capable of understanding the audit trail. The person should not have been involved in the creation or verification of the data being reviewed.

                

                
                

                    

                    

                        

## 5.3.5.1 Audit Trail Review Assessment (ATRA)

                

            

        

        

            

                
                

                    

Original Text (English)

                    

### 5.3.5.1 Audit Trail Review Assessment

                    

An audit trail review assessment (ATRA) is a risk-based tool that can help determine which elements within the audit trail should be reviewed, and the appropriate frequency. The tool may be used for any system that has an electronic audit trail, for example, systems directly used in manufacturing as well as supporting systems such as building automation and water for injection.

                    

The ATRA focuses on the detectability of changes to the data, the criticality of the data (in terms of patient safety or product quality), and the probability or capability for changes to the data to occur.

                    

A cross-functional team should be assembled to conduct the ATRA. The team should comprise people who fully understand the technical capabilities and limitations of the system, how the system is set up (from a user management perspective), where the data is stored, what type of data is part of the audit trail. The team also should include users who are familiar with operating the system.

                    

The first step in the process is to score each of the three factors—detectability, severity, and probability—that may require review based on the system controls in place for each element in the audit trail. For each factor, a lower score represents lower risk. Examples of scores that may be used are provided in this section, although each entity may modify the scoring based on its own analysis and risk tolerance.

                    

### Detectability Score

                    

Detectability Score is based upon the likelihood that modification or deletion of data will be detected. There are two possible Detectability Scores: 1 or zero.

                    

If it is possible to detect any modifications or deletions to the data contained within the audit trail, and this data is already reviewed as part of an existing review as required by SOP, performing additional review of the audit trail to detect potential data integrity issues is not required. For example, if the batch report lists the critical parameters used during manufacturing and shows any changes made to these parameters during batch manufacturing, an audit trail review of the same information need not be conducted. (This assumes that the batch report is generated automatically from the equipment and cannot be manipulated.) **Score = 0.**

                    

If the data has not already been reviewed or has only been partially reviewed (i.e., not all critical data is in scope of the batch-wise data review), further assessment of the audit trail may be required. **Score = 1.**

                    

### Severity Score

                    

Severity Score is based upon the data criticality; it assesses the potential impact if data is modified or deleted. There are three possible Severity Scores: 10, 4, or 1.

                    

If the data is considered Highly critical or has a direct impact on patient safety or product quality (e.g., changing the temperature to make it appear it was within the validated range, despite being outside the range), the potential impact is of high severity. **Score = 10.**

                    

If the data has an indirect impact on patient safety or product quality, i.e., changes to data that result in a compliance risk only, with indirect impact to only product quality or patient safety (e.g., changes to time zone where the raw data and batch-related data is not affected), it is of medium potential severity. **Score = 4.**

                    

If the data has negligible or no impact on patient safety or product quality (e.g., the start time of an operation, provided that this is not a CPP and does not affect duration), it is of low potential severity. **Score = 1.**

                    

### Probability Score

                    

Probability Score is based on the capability of the data to be modified or deleted by system users and administrators. There are three possible Probability Scores: 10, 2, or 1.

                    

If the data can be modified or deleted by a user, the chance that such changes will happen is higher. "User" refers to any person not identified as an independent administrator; "power users" are considered users. **Score = 10.**

                    

If the data cannot be modified or deleted by a user but can be modified or deleted by an independent administrator (i.e., an individual with no direct interest in the data), the chance that such changes will occur is lower. **Score = 2.**

                    

If the data cannot be modified or deleted by any user or administrator, it is considered a very low probability. **Score = 1.**

                    

Next, the three scores (Detectability, Severity, and Probability) are multiplied to provide the ATRA final score. The lower the score, the lower the risk.

                    
                    
                        Table 5.3.5.1-1 — ATRA Final Score and Frequency Review
                        
                            
                                
                                
                                
                                
                                
                            
| Frequency of System Use | 0–10 Score | 11–20 Score | 40 Score | 100 Score |
| --- | --- | --- | --- | --- |
                        
                        
                            
                                
                                
                                
                                
                                
                            
| Daily / Weekly | Event-based | Twice per year | Weekly | Batch-wise |
                            
                                
                                
                                
                                
                                
                            
| Monthly | Event-based | Yearly | Monthly | Batch-wise |
                            
                                
                                
                                
                                
                                
                            
| Less Than Monthly | Event-based | Every 2 years | Quarterly | Batch-wise |
                        
                    

                    

The timeframes indicated are illustrative only. Organizations should assess their systems and apply critical thinking when considering the criticality of the activity being performed as well as the potential for impact on product quality and patient safety. Using a risk-based approach, the periodicity of reviews should be commensurate with the risks identified.

                    

If during periodic review a number of data integrity breaches are discovered, the controls that are (or should be) in place and/or the frequency of the review should be reevaluated to prevent future breaches or to detect breaches sooner.

                

                
                

                    

                    

                        

## 5.3.5.2 Practical Examples of ATRA

                

            

        

        

            

                
                

                    

Original Text (English)

                    

### 5.3.5.2 Practical Examples of ATRA

                    

An audit trail contains data from (1) batch setup data, (2) batch run data, and (3) system configuration data. Each of these parts of the audit trail have a number of elements that could be considered for audit trail review. Hence, the ATRA tool should be used for each individual element to determine the final score.

                    

Elements for the batch setup data and batch run data parts of the audit trail, where data controls may be vulnerable and may have an impact on critical batch data, might include:

                    

                        
- Were any of the recipe parameters modified outside the validated range during the execution of the batch?

                        
- Were changes made to CPPs (set points or allowed tolerance ranges) during manufacturing? Were these within the validated ranges?

                        
- Were the calculation parameters edited or modified?

                        
- Were changes to the time made that impact the duration of (time-sensitive) parts of manufacturing, i.e., an operation ran longer or shorter than was expected?

                        
- Were segregation of duties in place where required and was the person who performed the activity authorized to perform it (e.g., different reviewer and approver)?

                        
- Were there GMP-relevant incidents, for example, GMP critical alarms?

                        
- Was any data relevant to batch quality modified or deleted?

                    

                    

Similarly, for the system configuration data, a number of elements may be vulnerable and should be considered when using the ATRA tool, such as:

                    

                        
- Were changes made to the system date or time?

                        
- Was the report template or any batch report modified, edited, deleted, or renamed?

                        
- What changes have been made to user access accounts or the privileges assigned at the user level? Do these changes still ensure segregation of duties?

                        
- Were any edits, modifications, or deletions made to the system configuration (e.g., administration changes, database settings, change of data storage location, system settings or functionality)?

                        
- Were there changes, edits, or deletions of audit trails, history logs, or files? Were any renamed?

                        
- Was any unusual activity recorded in the user activities log (login, logoff, unauthorized logins)?

                    

                    

Systems with high technical capabilities that are being fully utilized (e.g., strong access control, segregation of duties) are less vulnerable, therefore, a significantly reduced frequency of audit trail review is acceptable. On the other hand, if the system has limited technical capabilities (e.g., no difference between administrator and operator privileges), the system is more vulnerable, and a more extensive review of the audit trail would be appropriate.

                    

Table 5.3.5.2-1 contains a few examples of how the ATRA tool can be used for a filter integrity tester. The example does not represent a full ATRA review for a filter integrity tester but covers a few audit trail elements for demonstrative purposes to clarify the use of an ATRA.

                    
                    
                        Table 5.3.5.2-1 — Example of How ATRA Tool is Used to Score a Filter Integrity Tester
                        
                            
                                
                                
                                
                                
                                
                                
                            
| Audit Trail Element | D | S | P | Final | Outcome |
| --- | --- | --- | --- | --- | --- |
                        
                        
                            
                                ****
                                
                                
                                
                                
                                
                            
| Batch Setup: Changes to recipes | 1 | 10 | 2 | 20 | Twice per year |
                            
                                ****
                                
                                
                                
                                
                                
                            
| Batch Run: Changes to test result | 0 | 10 | 1 | 0 | Not required |
                            
                                ****
                                
                                
                                
                                
                                
                            
| Batch Run: Repeated or aborted tests | 1 | 10 | 10 | 100 | Batch-wise |
                            
                                ****
                                
                                
                                
                                
                                
                            
| System Config: Changes to user access/permissions | 1 | 10 | 2 | 20 | Twice per year |
                            
                                ****
                                
                                
                                
                                
                                
                            
| System Config: Changes to data storage location | 1 | 4 | 2 | 8 | Event-based |
                        
                    

                    

Conclusions that can be drawn from the examples in Table 5.3.5.2-1 are:

                    

                        
- An audit trail review should be performed batchwise to check for any aborted or repeat tests or aborted runs not included as part of the batch data package.

                        
- An audit trail review should be performed every six months to check for changes made by the administrator to recipes, user accounts, or privilege levels assigned to users.

                        
- A review of the audit trail for changes to pass/fail results is not required.

                        
- A review of the audit trail to check the storage location for data is only required should a triggering event prompt a specific review of this data.

                    

                    

Completing the ATRA for the other elements of the audit trail will allow the user to more fully understand the parts of the audit trail that require review and the necessary frequency of that review.

                

                
                

                    

                    

                        

## 5.3.6 Backup of Electronic Data

                

            

        

        

            

                
                

                    

Original Text (English)

                    

### 5.3.6 Backup of Electronic Data

                    

The next category relates to preventive controls associated with the backup of electronic data. Two different scenarios have been identified where it is acceptable to differentiate the controls applied based on criticality.

                    

The first scenario relates to the frequency of performing the backup of the manufacturing data stored electronically. Companies should consider developing a principle-based backup strategy in order to differentiate the frequency of backups. This strategy should take into account the company's risk tolerance, i.e., how manufacturing activities can be recreated in the event of a system failure when data has not been backed up. If the only evidence of an activity that impacts the safety and/or quality of the product is through the lost electronic data, the company must be prepared to reject the batch, and a more frequent backup may be warranted. On the other hand, if the major activities can be recreated using other means (e.g., printouts, manually recorded information), that may be used to justify a less-frequent backup of electronic data.

                    

In addition, the volume of data being generated within a given time period and the capability of the electronic system to store that volume of data without overwriting existing data should also be considered. This situation will be further discussed in the second scenario.

                    

If the equipment is capable of automated backups, backups are recommended at the same frequency at which data is being generated. If new data is being generated daily (e.g., using an MES or historian), a daily backup is warranted.

                    

The second scenario is associated with looped memory. For the purposes of this technical report, looped memory is used in an electronic system with a limited storage capacity. Once the capacity limit is reached, new data automatically overwrites older data. For example, in a compression machine capable of storing 10 batches worth of data, the data for Batch 11 automatically overwrites the data for Batch 1.

                    

Table 5.3.6-1 describes controls for systems with a looped memory. For systems storing Highly critical data, like certain makes or models of filter integrity testers used in sterile filling operations, the backup should occur before the data is overwritten. A similar expectation should be in place for systems storing Medium-critical data, such as a pH meter used on the shop floor. For systems storing Low-critical data, like secondary packaging systems that do not store data relating to quality attributes or such parameters as expiry dates, the backup should ensure that the data will not be overwritten before batch disposition has occurred.

                    
                    
                        Table 5.3.6-1 — Data Integrity Control Grid for Data Backup for System with Limited Storage Capacity
                        
                            
                                
                                
                                
                                
                            
| Backup of Electronic Data | High Data Criticality | Medium Data Criticality | Low Data Criticality |
| --- | --- | --- | --- |
                        
                        
                            
                                ****
                                
                            
| Prevention Control |  |
                            
                                
                                
                                
                                
                            
| Looped Memory | Perform backup before data is overwritten | Perform backup before data is overwritten | Ensure availability until batch disposition is complete |
                        
                    

                

                
                

                    

                    

                        

## 5.3.7 Use of Electronic Data

                

            

        

        

            

                
                

                    

Original Text (English)

                    

### 5.3.7 Use of Electronic Data

                    

Once electronic data is generated, the information may be further processed in numerous ways. In the two scenarios described in Sections 5.3.7.1 and 5.3.7.2, the controls to be applied may be differentiated based on criticality: when electronic data is exported to generate reports or records, and when data is transferred or migrated between electronic systems. These controls are targeted at the data and record levels to help prevent a data integrity incident from occurring.

                

                
                

                    

                    

                        

## 5.3.7.1 Exporting Electronic Data to Generate Reports and Records

                

            

        

        

            

                
                

                    

Original Text (English)

                    

### 5.3.7.1 Exporting Electronic Data to Generate Reports and Records

                    

Table 5.3.7.1-1 identifies prevention controls related to reports and records generation. For reports and records used to display High-critical data, such as a batch record from an MES used for making release decisions, validation with change control and appropriate test plans is required for changes to the report template. The validation should ensure that the report or record is accurate, and that all data displayed will remain unchanged from the electronic raw data. IT or automation personnel should perform these changes to the template and ensure that the content of the reports and records are static and cannot be altered in any way.

                    

For reports and records related to Medium-critical data, such as a building management system monitoring temperature and humidity, IT or automation personnel should perform an initial validation. Any changes to the report template should be performed following SOPs, but revalidation of the template would not be required. That the report contains limited flexibility (via filters or drop downs) and is working as intended is acceptable, so the user may run these reports based on a predefined set of filters or criteria.

                    

For reports and records displaying Low-critical data, verification governed by work instructions should suffice. The business unit creates these reports and records, and their content may be flexible in nature, for example, exporting data into a data lake for future non-GMP analysis.

                    

Regardless of the criticality, the quality unit should review and approve changes to report templates, especially for any changes that could impact the information displayed.

                    
                    
                        Table 5.3.7.1-1 — Data Integrity Control Grid for Data Export for Generation of Reports and Records
                        
                            
                                
                                
                                
                                
                            
| Data Export / Report Generation | High Data Criticality | Medium Data Criticality | Low Data Criticality |
| --- | --- | --- | --- |
                        
                        
                            
                                ****
                                
                            
| Prevention Control |  |
                            
                                
                                
                                
                                
                            
| Report validation, verification | Validation, revalidation if changed | Initial validation only | Verification |
                            
                                
                                
                                
                                
                            
| Documentation of changes in reports | Change control and test plan | Procedural control | Work instructions |
                            
                                
                                
                                
                                
                            
| Modification of template performed by | IT/Automation unit | IT/Automation unit | Business unit |
                            
                                
                                
                                
                                
                            
| Report content flexibility | Static/fixed | Limited flexibility, drop-downs or predefined selection criteria | Flexible, based on criteria defined in the work instructions |
                        
                    

                

                
                

                    

                    

                        

## 5.3.7.2 Data Transfer and Migration Between Electronic Systems

                

            

        

        

            

                
                

                    

Original Text (English)

                    

### 5.3.7.2 Data Transfer and Migration Between Electronic Systems

                    

The technical report team also identified different levels of control that may be applicable for the transfer or migration of electronic data based on criticality, as illustrated in Table 5.3.7.2-1.

                    

For High- or Medium-critical data transfers and migrations, the transfer of the electronic data should be prepared using full change control, with a test plan in place to ensure that all data is transferred. It also is advisable to use a verification tool, such as a checksum, to confirm that all data sent was received. Two examples of this type of transfer are presented in this section.

                    

One example is the migration of data from one platform to another as part of a software or hardware upgrade, for example, when moving from one software version to another, moving from an old server to a new server, or moving to the cloud is one type of transfer. This is generally considered a once-off activity specifically associated with the upgrade.

                    

A second example is the transfer of High- and Medium-critical batch data (e.g., CPPs, calibration records, environmental monitoring data) from a standalone system to an upper-level system like an MES or data historian. This type of data transfer occurs on a defined periodic basis (e.g., once a day, once a week, after each batch) based on how the data transfer has been set up. For both examples, the transfer or migration of the data should be safeguarded by change control, a test plan, and a tool to verify that all the data have been transferred or migrated.

                    

Data of varying criticalities are regularly transferred into different formats for making continuous process verification conclusions, for example, transferring data into a data lake for further trending or analysis. These are considered Low-critical transfers, so a procedural control is adequate for describing the steps to be taken to transfer the data.

                    
                    
                        Table 5.3.7.2-1 — Data Integrity Control Grid for Data Transfer and Migration Between Electronic Systems
                        
                            
                                
                                
                                
                                
                            
| Data Transfer and Migration | High Data Criticality | Medium Data Criticality | Low Data Criticality |
| --- | --- | --- | --- |
                        
                        
                            
                                ****
                                
                            
| Prevention Control |  |
                            
                                
                                
                                
                                
                            
| Data migration — How executed to ensure complete transfer of data | Under change control with test plan | Under change control with test plan | Under procedural control |
                            
                                
                                
                                
                                
                            
| Verification of data migration | Checksum, or equivalent tool, that confirms all data sent was received | Checksum, or equivalent tool, that confirms all data sent was received | N/A |
                        
                    

                

                
                

                    

                    

                        

## Section Summary

                

            

        

        

            

                

#### Section 4

                

            

            
                
                    
                        
                        
                        
                    
| | High | |
| --- | --- | --- |
                
                
                    
                        ****
                        
                        
                    
| True Copy | | / |
                    
                        ****
                        
                        
                    
| Access Control | + 90 + 5 + | CDMO |
                    
                        ****
                        
                        
                    
| Audit Trail Review | ATRA | ATRA |
                    
                        ****
                        
                        
                    
| ATRA | D x S x P = Final Score (0-100) | → Probability → |
                    
                        ****
                        
                        
                    
| Data Backup | = | + = |
                    
                        ****
                        
                        
                    
| Report/Record | + Change Control + IT + | |
                    
                        ****
                        
                        
                    
| Data Transfer/Migration | Change Control + Test Plan + Checksum | High Medium Low |
                
            

            

                

#### CDMO

                

                    

                    

                    

                

            

            

                

#### 

                

                

                    

                    

                    

                    

                    

                

                

            

        

    

 

    

PDA Technical Report No. 84 (2020): Data Integrity in Manufacturing and Packaging

    

Section 4: DI Controls — Specific Areas | Bilingual Educational Material

↑

## Section 5: Big Data & References (p38-p39)

# Section 5: Big Data & References /

    

PDA Technical Report No. 84 — Data Integrity in Manufacturing and Packaging Operations

    

PDA Technical Report No. 84 | p38 – p40

    
    

        

## Controls for Big Data as it Relates to Data Integrity

                

            

        

        

            

                
                

                    

                    

Pharmaceutical manufacturing data is being collected at an accelerated rate, beyond human processing capability using traditional mechanisms. These challenges increasingly drive the need for governance and active controls of data and information. Processes, roles, and standards must be created to allow the effective and efficient use of information and technology tools to enable an organization to achieve its goals.

                    

A forthcoming PDA technical report will provide additional guidance on governance and controls for big data in manufacturing. That technical report will address topics such as data classification, data ownership, access management, source data, results and data insights, and change management, within the framework of governance and controls of big data in manufacturing.

                    

Collectively, these two technical reports will provide guidance on the management of data and big data in a regulated pharmaceutical or biopharmaceutical facility.

                

                
                

                    

### 

                    

                        

## References

                

            

        

        

            
            

                

                    

### References Overview

                    

TR84 cites 29 references spanning regulatory guidance, international harmonization guidelines, industry standards, and PDA technical reports. The references underpin the risk-based data integrity framework presented throughout this technical report.

                

                

                    

### 

                    

                        

#### TR84

                        

                            

                            

                            

                            

                        

                    

                

            

            
            

                

                    

### Regulatory Guidance & GMP Regulations

                    

Primary DI Guidance Documents

                    

                        
1. 
                            1.
                            Parenteral Drug Association. *Technical Report No. 80: Data Integrity Management System for Pharmaceutical Laboratories*; PDA: Bethesda, Md., 2018; p 63.
                        

                        
2. 
                            2.
                            U.S. Food and Drug Administration. *Data Integrity and Compliance with cGMP: Questions and Answers, Guidance for Industry*; U.S. Department of Health and Human Services: Silver Spring, Md., 2018.
                        

                        
3. 
                            3.
                            Medicines and Healthcare products Regulatory Agency. *'GXP' Data Integrity Guidance and Definitions, Rev. 1*; MHRA: London, 2018.
                        

                        
4. 
                            4.
                            World Health Organization. *Annex 5: Draft Guidance on Good Data and Record Management Practices*; WHO: Geneva, 2016 p46.
                        

                        
5. 
                            5.
                            Pharmaceutical Inspection Convention/Co-operation Scheme (PIC/S). *Draft PIC/S Good Practices for Data Management and Integrity in Regulated GMP/GDP Environments*; PIC/S: Geneva, 2018.
                        

                        
6. 
                            6.
                            Parenteral Drug Association. *Technical Report No. 54-2: Implementation of Quality Risk Management for Pharmaceutical and Biotechnology Manufacturing Operations, Annex 1: Case Study Examples for Quality Risk Management in Packaging and Labeling*; PDA: Bethesda, Md., 2013.
                        

                    

                    

GMP Regulations (21 CFR & EU)

                    

                        
1. 
                            9.
                            U.S. Food and Drug Administration. *21 CFR Part 211 – Current Good Manufacturing Practice for Finished Pharmaceuticals, Subpart J – Records and Reports*; Government Publishing Office: Washington, D.C., 2005.
                        

                        
2. 
                            10.
                            U.S. Food and Drug Administration. PART 133—Drugs; Current Good Manufacturing Practice in Manufacture, Processing, Packing, or Holding. *Fed Regist* 1963, 28 (120, Part II), 6385-87.
                        

                        
3. 
                            11.
                            U.S. Food and Drug Administration. Current Good Manufacturing Practice in Manufacture, Processing, Packing, or Holding. *Fed Regist* 1978, 43 (44813 (Sept. 29, 1978), Book 2), 45014-336.
                        

                        
4. 
                            12.
                            U.S. Food and Drug Administration. *FDA Compliance Program Guidance Manual*; 7346.832 (5/12/2010), Pre-Approval Inspections. U.S. Department of Health and Human Services: Silver Spring, Md., 2010.
                        

                        
5. 
                            13.
                            U.S. Food and Drug Administration. *21 CFR Part 11, Electronic Records; Electronic Signatures — Scope and Application; Pharmaceutical CGMPs*. Government Publishing Office: Washington, D.C., 2003.
                        

                        
6. 
                            17.
                            U.S. Food and Drug Administration. *21 CFR 58 Good Laboratory Practice for Nonclinical Laboratory Studies*; U.S. Department of Health & Human Services: Washington, DC, 1978.
                        

                    

                    

FDA Warning Letters & Enforcement Actions

                    

                        
1. 
                            14.
                            F-D-C Reports, Inc. Data Manipulation is Being Uncovered and Referred for Criminal Investigation. *The Gold Sheet* 2007, 41 (4).
                        

                        
2. 
                            15.
                            U.S. Food and Drug Administration. Warning Letter No. 320-19-29 to Indoco Remedies Limited, dated 7/9/2019; Office of Compliance, Center for Drug Evaluation and Research. U.S. Department of Health and Human Services: Silver Spring, Md., 2019.
                        

                        
3. 
                            16.
                            U.S. Food and Drug Administration. Warning Letter No. 320-20-15 to Apollo Health and Beauty Care, Inc., dated 12/23/2019; Office of Compliance, Center for Drug Evaluation and Research. U.S. Department of Health and Human Services: Silver Spring, Md., 2019.
                        

                    

                    

International Regulatory Agencies

                    

                        
1. 
                            18.
                            World Health Organization. *Good Chromatography Practices, Draft for Comments (July 2019)*; WHO: Geneva, 2019.
                        

                        
2. 
                            19.
                            China National Medical Products Administration. *Draft Drug Data Management Standard*; NMPA: Beijing, 2016.
                        

                        
3. 
                            20.
                            Australian Therapeutic Goods Administration. *Data Management and Data Integrity (DMDI)*; TGA: Symonston ACT, Australia, 2017.
                        

                        
4. 
                            21.
                            Federal State Institute of Drugs and Good Practices. *Guidelines: Data Integrity & Computer System Validation*; SID&GP: Moscow, 2018.
                        

                    

                

                
                

                    

### 

                    

                        

#### 1PDA TR80 — DI

                        

                    

                    

                        

#### 2FDA 2018 DI Q&A —

                        

                        

                            

                            

                            

                        

                        

                    

                    

                        

#### 3MHRA GXP DI — DI

                        

                        

                            

                            

                            

                        

                    

                    

                        

#### 5PIC/S DI — GDP

                        

                    

                    

                        

#### 1321 CFR Part 11 —

                        

                        

                            

                            

                            

                        

                        

                    

                    

                        

#### 15–16FDA — DI

                        

                        

                    

                    

                        

#### DI

                        

                        

                    

                    

                        

#### 

                        

                        

                            

                            

                        

                    

                

            

            
            

                

                    

### ICH Quality Guidelines & Related Harmonization

                    

                        
1. 
                            7.
                            International Conference for Harmonisation. *Quality Guideline Q10: Pharmaceutical Quality System*; ICH: Geneva, 2008.
                        

                        
2. 
                            8.
                            International Conference for Harmonisation. *Quality Guideline Q9: Quality Risk Management*; ICH: Geneva, 2005.
                        

                        
3. 
                            27.
                            International Conference for Harmonisation. *Quality Guideline Q8(R2): Pharmaceutical Development*; ICH Geneva, 2009.
                        

                        
4. 
                            28.
                            International Conference for Harmonisation. *Quality Guideline Q12: Technical and Regulatory Considerations for Pharmaceutical Product Lifecycle Management, Draft Version*; ICH: Geneva, 2017.
                        

                    

                    

EU Computerised Systems Regulation

                    

                        
1. 
                            29.
                            European Commission. *Annex 11: Computerised Systems, EudraLex – Volume 4 – Good Manufacturing Practice for Medicinal Products for Human and Veterinary Use*; European Commission: Brussels, 2011.
                        

                    

                

                

                    

### ICH EU Annex 11

                    

                        

#### 8ICH Q9 — TR84

                        

                        

                            

                            

                            

                            

                        

                        

                    

                    

                        

#### 7ICH Q10 — DI

                        

                        

                            

                            

                            

                        

                    

                    

                        

#### 27–28ICH Q8 & Q12 — DI

                        

                        

                    

                    

                        

#### 29EU Annex 11 —

                        

                        

                            

                            

                            

                            

                        

                        

                    

                    

                        

#### CDMO ICH Q9 × TR84

                        

                        

                            

                            

                            

                        

                    

                

            

            
            

                

                    

### Industry Standards, PDA Technical Reports & Other Sources

                    

PDA Technical Reports

                    

                        
1. 
                            26.
                            Parenteral Drug Association. *Technical Report No. 54: Implementation of Quality Risk Management for Pharmaceutical and Biotechnology Manufacturing Operations*; PDA: Bethesda, Md., 2012; p 60.
                        

                    

                    

ISPE Guides

                    

                        
1. 
                            23.
                            International Society for Pharmaceutical Engineering. *GAMP Guide: Records & Data Integrity*; ISPE: Bethesda, Md., 2017.
                        

                        
2. 
                            24.
                            International Society for Pharmaceutical Engineering. *Good Practice Guide: Data Integrity — Key Concepts*; ISPE: Bethesda, Md., 2018.
                        

                    

                    

Other Industry & Academic Sources

                    

                        
1. 
                            22.
                            Parenteral Drug Association. *Elements of a Code of Conduct for Data Integrity in the Pharmaceutical Industry*; PDA: Bethesda, Md., 2016. https://www.pda.org/scientific-and-regulatory-affairs/regulatory-resources/code-of-conduct/elements-of-a-code-of-conduct-for-data-integrity-in-the-pharmaceutical-industry (accessed Aug 15 2019).
                        

                        
2. 
                            25.
                            Active Pharmaceutical Ingredients Committee (APIC). *Practical Risk-Based Guide for Managing Data Integrity*; APIC/Cefic: Online, 2019.
                        

                    

                

                

                    

### PDA

                    

                        

#### 23ISPE GAMP Guide: Records & Data Integrity —

                        

                        

                            

                            

                            

                            

                        

                        

                    

                    

                        

### Section 5

        

            

            

            

            

            

        

    

    

PDA Technical Report No. 84 — Data Integrity in Manufacturing and Packaging Operations (2020)

    

    

Educational material for internal training purposes. PDA TR84 © 2020 Parenteral Drug Association, Inc.

⇧

## Section 6a: Appendix I: API & FDF Examples (p40-p48)

# Section 6a: Appendix I — API & Finished Dosage Form Examples

  

  

PDA Technical Report No. 84 | p40 – p48

  
  

    

## API Examples — Active Pharmaceutical Ingredient

        

      

    

    

      

        

#### API

        

      

    

  

  
  

    

      

Ex1

      

        

## Example 1: High Criticality — API Reaction Controls Impurity Level

        

      

    

    

      
      

        

          

Original Text (English)

          

Table 8.1-1 provides worked examples for high-criticality data in API manufacturing. The reactor operation controls impurity levels, directly impacting a Critical Quality Attribute (CQA) through a Critical Process Parameter (CPP). Three sub-examples (1a, 1b, 1c) illustrate progressively improved data integrity controls, moving from a manually controlled reactor with paper records, to a PLC-controlled reactor with paper records, to a PLC-controlled reactor with a fully electronic batch record (EBR).

        

        

          

          

            

#### 

            

            

          

        

      

      
      

        

          

Table 8.1-1: Example 1 — High Criticality API Reaction

          
            
              
                
                
                
                
                
                
              
| Ex | Mfg Operation | Data Criticality | Data Vulnerability Factors | Data Controls in Place | Vulnerability Level |
| --- | --- | --- | --- | --- | --- |
            
            
              
                ****
                
                ****
                **  
**  
**
                ****  
**  
**  
**
                
              
| 1a | Manually controlled reactor and paper BPR | High: Impacts CQA & is a CPP that controls impurity formation | Human Factor: Manual transfer of CPP data from production instrumentation & gauges into paper BPR.                   GMP Process: Reactor is manually controlled by operator                   Data Mgmt: Paper BPR | Low:                   Human Factor: Supervisory review & quality unit review at release                   GMP Process: Controlled with written procedures and training                   Data Mgmt: Reliance on second-person witnessing of data entries & quality unit review at release | Significant |
              
                ****
                
                ****
                **  
**  
**
                ****  
**  
**  
**
                
              
| 1b | PLC-controlled reactor and paper BPR | High: Impacts CQA & is a CPP that controls impurity formation | Human Factor: Manual transfer of CPP data from HMI into BPR                   GMP Process: PLC-controlled reactor of new or complex process                   Data Mgmt: Manual data entry into paper BPR from HMI; no audit trail or electronic analysis of data in PLC | Medium:                   Human Factor: Supervisory review & quality unit review at release                   GMP Process: PLC validated with printout attached to paper BPR                   Data Mgmt: Reliance on second-person witnessing of data entries; quality unit review of BPR & PLC printout at release | Moderate |
              
                ****
                
                ****
                **  
**  
**
                ****  
**  
**  
**
                
              
| 1c | PLC-controlled reactor & electronic BPR | High: Impacts CQA & is a CPP that controls impurity formation | Human Factor: Electronic BPR mitigates human error to a residual level                   GMP Process: PLC-controlled reactor of robust process                   Data Mgmt: Data automatically captured in EBR & data mgmt lifecycle is controlled | High:                   Human Factor: EBR reviewed by quality unit at release                   GMP Process: PLC validated & production data captured automatically                   Data Mgmt: Access controls on PLC; electronic analysis of data; automatic data storage & audit trail | Acceptable |
            
          

        

        

          

          

            

#### DI

            

            

            

          

          

            

#### 

            

            

              

              

              

            

            

          

          

            

#### 1b

            

          

          

            

#### 9-Box Example 1

            

```
─────────────────────────────────────

```

          

          

            

#### 

            

              

              

            

          

          

            

#### CDMO 1b 1c

            

              

              

              

              

            

          

        

      

    

  

  
  

    

      

Ex2

      

        

## Example 2: Medium Criticality — Drying of API (LOD not a CQA)

        

      

    

    

      
      

        

          

Original Text (English)

          

Example 2 covers the oven drying of an API (Table 8.1-2). The loss on drying (LOD) of the API is not a CQA and the drying operation is not a CPP, but the LOD does impact the flow characteristics of the API, which affects the downstream processing of the API into the finished product. Therefore, the data regarding the drying of the API is of Medium criticality and belongs in the middle row of the 9-Box vulnerability grid.

          

Example 2a describes Medium-criticality data with the manual operation of the drying oven, manual data capture, and manual transcription of data into a paper manufacturing record. In addition, the existing data integrity controls are Low-level, with reliance on second-person witnessing of the manufacturing operation, human oversight of the manufacturing process, and human review at release. The Medium criticality of the data plus the Low level of controls yields Moderate data vulnerability (Orange), as described in Section 4.3.

          

Example 2b considers the same Medium-criticality data. Here, though, the data integrity controls have increased with the addition of a validated PLC, and the inclusion of the PLC printouts with the BPR for the review and release process. The additional controls yield an Acceptable level of data vulnerability (Green).

          

Example 2c illustrates the same Medium-criticality data but with more than the required controls in place: a validated EBR with automatic data capture, the inability to erase any data, activated audit trails, automated data archiving, and the ability to trend the electronically stored production data. These controls yield a Negligible level of data vulnerability (Blue).

        

        

          

          

            

#### 

            

            

          

          

            

#### 2c

            

          

        

      

      
      

        

          

Table 8.1-2: Example 2 — Medium Criticality Drying of API

          
            
              
                
                
                
                
                
                
              
| Ex | Mfg. Operation | Data Criticality | Data Vulnerability Factors | Data Controls in Place | Vulnerability Level |
| --- | --- | --- | --- | --- | --- |
            
            
              
                ****
                
                ****
                **  
**  
**
                ****  
**  
**  
**
                
              
| 2a | Manually controlled oven drying of API & paper BPR | Medium: Moisture (LOD) is not a CQA or CPP but impacts flow characteristics of API during downstream processing | Human Factor: Manual transfer of oven temperature into paper BPR                   GMP Process: Oven is manually controlled by operator                   Data Mgmt: Paper BPR | Low:                   Human Factor: Supervisory review & quality unit review at release                   GMP Process: Controlled with written procedures and training                   Data Mgmt: Reliance on second-person witnessing of data entries & quality unit review at release | Moderate |
              
                ****
                
                ****
                **  
**  
**
                ****  
**  
**  
**
                
              
| 2b | PLC-controlled oven drying of API & paper BPR | Medium: Moisture (LOD) is not a CQA or CPP but impacts flow characteristics of API during downstream processing | Human Factor: Manual transfer of oven temperature data from HMI into BPR                   GMP Process: PLC-controlled oven                   Data Mgmt: Manual data entry into paper BPR from HMI; no audit trail or electronic analysis of data in PLC | Medium:                   Human Factor: Supervisory review & quality unit review at release                   GMP Process: PLC validated with printout attached to paper BPR                   Data Mgmt: Reliance on second-person witnessing of data entries; quality unit review BPR & PLC printout at release | Acceptable |
              
                ****
                
                ****
                **  
**  
**
                ****  
**  
**  
**
                
              
| 2c | PLC-controlled oven drying & electronic BPR | Medium: Moisture (LOD) is not a CQA or CPP but impacts flow characteristics of API during downstream processing | Human Factor: EBR mitigates human error to a residual level                   GMP Process: PLC-controlled oven of robust process                   Data Mgmt: Data automatically captured in EBR & data mgmt lifecycle is controlled | High:                   Human Factor: EBR reviewed by quality unit at release                   GMP Process: PLC validated & production data captured automatically                   Data Mgmt: Access controls on PLC, electronic analysis of data, automatic data storage & audit trail | Negligible |
            
          

        

        

          

          

            

#### 

            

          

          

            

#### 9-Box Example 2

            

```
─────────────────────────────────────

```

          

          

            

#### LOD DI

            

              

              

              

            

          

          

            

#### 

            

              

              

            

          

          

            

#### CDMO

            

          

        

      

    

  

  
  

    

      

Ex3

      

        

## Example 3: Low Criticality — Small Molecule API Batch-to-Batch Cleaning

        

      

    

    

      
      

        

          

Original Text (English)

          

Example 3 depicts the batch-to-batch cleaning of API manufacturing equipment of a small molecule during a product campaign within the validated campaign length (Table 8.1-3). Since this type of data is neither directly nor indirectly related to a CQA or CPP, it is considered routine GMP data and of Low criticality, according to the definitions in Section 4.2.1. Therefore, this data resides in the bottom row of the 9-Box vulnerability grid.

          

In Example 3a, the cleaning is performed manually, then the Low-critical data is captured by the operator who transcribes it into the paper manufacturing record. The reliance on second-person witnessing, human oversight of the manufacturing process, and human review at release provide a Low level of data integrity controls. The Low criticality of the data plus the Low level of controls yields Acceptable data vulnerability (Green).

          

Example 3b illustrates the same Low-critical data but the level of controls in place are more than required. The process is better controlled through a validated clean-in-place (CIP) process. The data integrity controls have increased with the PLC printouts from the CIP system, which are included with the BPR for the review and release process. The additional controls yield Negligible data vulnerability (Blue).

          

Example 3c illustrates the same Low-critical data but with the addition of a validated EBR with automatic data capture, inability to erase any data, activated audit trails, automated data archiving, and ability to trend the electronically stored production data. The vulnerability of the data remains unchanged, and the vulnerability remains at a Negligible level (Blue). In this example, there are significantly more controls in place than are required.

        

        

          

          

            

#### 

            

            

          

          

            

#### 3a × =

            

          

        

      

      
      

        

          

Table 8.1-3: Example 3 — Low Criticality API Batch-to-Batch Cleaning

          
            
              
                
                
                
                
                
                
              
| Ex | Mfg. Operation | Data Criticality | Data Vulnerability Factors | Data Controls in Place | Vulnerability Level |
| --- | --- | --- | --- | --- | --- |
            
            
              
                ****
                
                ****
                **  
**  
**
                ****  
**  
**  
**
                
              
| 3a | Manual batch-to-batch cleaning of equipment within a campaign | Low: Batch-to-batch carryover will not impact the quality of the final API for validated campaign length | Human Factor: Manual recording of cleaning into paper BPR                   GMP Process: Equipment cleaning manually performed by operator                   Data Mgmt: Paper BPR | Low:                   Human Factor: Supervisory review & quality unit review at release                   GMP Process: Controlled with written procedures and training                   Data Mgmt: Reliance on second-person witnessing of data entries & quality unit review at release | Acceptable |
              
                ****
                
                ****
                **  
**  
**
                ****  
**  
**  
**
                
              
| 3b | CIP batch-to-batch cleaning of equipment within a campaign | Low: Batch-to-batch carryover will not impact the quality of the final API for validated campaign length | Human Factor: Manual transfer of cleaning data from HMI into BPR                   GMP Process: PLC-controlled CIP cleaning process                   Data Mgmt: Manual data entry into paper BPR from HMI; no audit trail or electronic analysis of data in PLC | Medium:                   Human Factor: Supervisory review & quality unit review at release                   GMP Process: PLC validated with printout attached to paper BPR                   Data Mgmt: Reliance on second-person witnessing of data entries; quality unit review BPR & PLC printout at release | Negligible |
              
                ****
                
                ****
                **  
**  
**
                ****  
**  
**  
**
                
              
| 3c | PLC-controlled CIP batch-to-batch cleaning & electronic BPR | Low: Batch-to-batch carryover will not impact the quality of the final API for validated campaign length | Human Factor: EBR mitigates human error to a residual level                   GMP Process: PLC-controlled CIP cleaning process is robust                   Data Mgmt: Data automatically captured in EBR & data mgmt lifecycle is controlled | High:                   Human Factor: EBR reviewed by quality unit at release                   GMP Process: PLC validated & cleaning data captured automatically                   Data Mgmt: Access controls on PLC, electronic analysis of data, automatic data storage & audit trail | Negligible |
            
          

        

        

          

          

            

#### 

            

          

          

            

#### 3b 3c Negligible

            

          

          

            

#### 9-Box Example 3

            

```
─────────────────────────────────────

```

          

          

            

#### 

            

              

              

            

          

          

            

#### CDMO

            

              

              

              

            

          

        

      

    

  

  
  

    

      

8.2

      

        

## FDF Examples — Finished Dosage Form

        

      

    

    

      

        

#### FDF

        

        

      

    

  

  
  

    

      

Ex4

      

        

## Example 4: High Criticality — Humidity Monitoring During Sieving

        

      

    

    

      
      

        

          

Original Text (English)

          

Examples 4–6 demonstrate where High-, Medium-, and Low-criticality data from a sieving operation are placed in the 9-Box vulnerability grid, based on the level of controls in place. The examples are for humidity monitoring during sieving of a drug substance, prior to blending and compression.

          

In Example 4, humidity is a CPP that will impact CQA (Table 8.2-1). The drug substance is hygroscopic and will degrade with elevated levels of moisture. Therefore, the High-criticality data goes in the top row of the 9-Box vulnerability grid.

          

Example 4a illustrates High-criticality data with the operator manually inserting analog humidity data from a chart recorder and transcribing this data to a paper manufacturing record. A Low level of data controls exist, relying on a second person to verify the data. The High criticality of the data combined with the Low level of controls creates Significant data vulnerability (Red), as defined in Section 4.3.

          

Example 4b illustrates the same High-criticality data. In this example, the data controls have increased compared to Example 4a. The humidity data is now digitized and captured using a validated building management system (BMS), using audit trail and access controls. Also, a printout of the humidity data is attached to the manufacturing record. The additional controls yield Moderate data vulnerability (Orange).

          

Example 4c illustrates the same High-criticality data with the additional controls of a validated electronic manufacturing record with automated data capture, audit trail, and access controls. These additional controls yield Acceptable vulnerability (Green).

        

        

          

          

            

#### = CPP

            

            

          

          

            

#### 4a Red

            

          

        

      

      
      

        

          

Table 8.2-1: Example 4 — High Criticality Humidity Monitoring

          
            
              
                
                
                
                
                
                
              
| Ex | Mfg. Operation | Data Criticality | Data Vulnerability Factors | Data Controls in Place | Vulnerability Level |
| --- | --- | --- | --- | --- | --- |
            
            
              
                ****
                
                ****
                **  
**  
**
                ****  
**  
**  
**
                
              
| 4a | Humidity data is displayed and recorded on a paper chart and a paper manufacturing record is used | High: Humidity is a CPP that impacts CQA; drug substance is hygroscopic and will degrade with elevated moisture levels | Human Factor: Analogue humidity data is added from chart recording, and data is transcribed to paper record                   GMP Process: Humidity data is captured manually                   Data Mgmt: Periodic manual entry of data into BPR | Low:                   Human Factor: Supervisor review and quality unit review at release                   GMP Process: Chart paper is attached to paper record                   Data Mgmt: Second-person verification of data entry and quality unit review at release | Significant |
              
                ****
                
                ****
                **  
**  
**
                ****  
**  
**  
**
                
              
| 4b | Humidity data is displayed and recorded using BMS, and a paper manufacturing record is used | High: Humidity is a CPP that impacts CQA; drug substance is hygroscopic and will degrade with elevated moisture levels | Human Factor: Digital humidity data is printed out from HMI, and data is transcribed to paper record                   GMP Process: Humidity data is captured both manually and electronically                   Data Mgmt: Periodic manual data entry into paper BPR | Medium:                   Human Factor: Supervisor review and quality unit review at release                   GMP Process: HMI printout is attached to paper record; validated BMS with audit trail and access controls                   Data Mgmt: Second-person verification of printout and quality unit review at release | Moderate |
              
                ****
                
                ****
                **  
**  
**
                ****  
**  
**  
**
                
              
| 4c | Humidity data is displayed and recorded using BMS, and a paper manufacturing record is used | High: Humidity is a CPP that impacts CQA; drug substance is hygroscopic and will degrade with elevated moisture levels | Human Factor: An electronic manufacturing record mitigates human error to a residual level                   GMP Process: Humidity data is captured electronically                   Data Mgmt: Humidity data is automatically uploaded into electronic manufacturing record | High:                   Human Factor: Use of electronic record minimizes manual entry of data                   GMP Process: Validated BMS with audit trail and access controls; automated data capture in electronic record                   Data Mgmt: Humidity data is managed per Part 11 requirements | Acceptable |
            
          

        

        

          

          

            

#### 

            

          

          

            

#### BMS DI

            

            

              

              

              

              

              

            

            

          

          

            

#### 9-Box Example 4

            

```
─────────────────────────────────────

```

          

          

            

#### 4c Part 11

            

          

          

            

#### 

            

              

              

              

            

          

          

            

#### CDMO 4a

            

              

              

              

              

            

          

        

      

    

  

  
  

    

      

Ex5

      

        

## Example 5: Medium Criticality — Humidity Monitoring During Sieving

        

      

    

    

      
      

        

          

Original Text (English)

          

Example 5, shown in Table 8.2-2, uses the same sieving operation, the same vulnerability factors, and the same data controls as Example 4, except the humidity is Medium-criticality data. At elevated humidity levels, the drug substance will become sticky, giving poor flow properties, which will impact manufacturing consistency. Humidity, however, is not a CPP. As a result, this Medium-criticality data resides in the middle row of the 9-Box vulnerability grid.

          

Example 5a illustrates Medium-criticality data with the operator manually interpolating analogue humidity data from a chart recorder and transcribing the data to a paper manufacturing record. In addition, a Low level of data controls exist, relying on a second person to verify the data. The Medium criticality of the data combined with a Low level of control creates Moderate data vulnerability (Orange).

          

Example 5b illustrates the same Medium-critical data, but the data controls have increased compared to Example 5a. The humidity data is now digitized and captured using a validated BMS, with audit trail and access controls. Also, a printout of the humidity data is attached to the manufacturing record. The additional controls yield Acceptable data vulnerability (Green).

          

Example 5c illustrates the same Medium-criticality data with the added controls of a validated electronic manufacturing record with automated data capture, audit trail, and access controls. The additional controls yield Negligible vulnerability (Blue).

        

        

          

          

            

#### Example 4 vs 5

            

            

          

          

            

#### 5a Moderate

            

          

        

      

      
      

        

          

Table 8.2-2: Example 5 — Medium Criticality Humidity Monitoring

          
            
              
                
                
                
                
                
                
              
| Ex | Mfg. Operation | Data Criticality | Data Vulnerability Factors | Data Controls in Place | Vulnerability Level |
| --- | --- | --- | --- | --- | --- |
            
            
              
                ****
                
                ****
                **  
**  
**
                ****  
**  
**  
**
                
              
| 5a | Humidity data is displayed and recorded on a paper chart; a paper manufacturing record is used | Medium: Humidity is not a CPP; at elevated humidity levels, drug substance will become sticky, giving poor flow properties | Human Factor: Analogue humidity data is interpolated from chart recording, and data is transcribed to paper record                   GMP Process: Humidity data is captured manually                   Data Mgmt: Periodic manual entry of data into BPR | Low:                   Human Factor: Supervisor review and quality unit review at release                   GMP Process: Chart paper is attached to paper record                   Data Mgmt: Second-person verification of data entry. Quality unit review at release | Moderate |
              
                ****
                
                ****
                **  
**  
**
                ****  
**  
**  
**
                
              
| 5b | Humidity data is displayed and recorded using BMS; a paper manufacturing record is used | Medium: Humidity is not a CPP; at elevated humidity levels, drug substance will become sticky, giving poor flow properties | Human Factor: Digital humidity data is printed out from HMI, and data is transcribed to paper record                   GMP Process: Humidity data is captured both manually and electronically                   Data Mgmt: Periodic manual data entry into paper BPR | Medium:                   Human Factor: Supervisor review and quality unit review at release                   GMP Process: HMI printout is attached to paper record; validated BMS with audit trail and access controls                   Data Mgmt: Second-person verification of printout and quality unit review at release | Acceptable |
              
                ****
                
                ****
                **  
**  
**
                ****  
**  
**  
**
                
              
| 5c | Humidity data is displayed and recorded using BMS; an electronic manufacturing record is used | Medium: Humidity is not a CPP; at elevated humidity levels, drug substance will become sticky, giving poor flow properties | Human Factor: An electronic manufacturing record mitigates human error to a residual level                   GMP Process: Humidity data is captured electronically                   Data Mgmt: Humidity data is automatically uploaded into electronic manufacturing record | High:                   Human Factor: Use of electronic record minimizes manual entry of data                   GMP Process: Validated BMS with audit trail and access controls; automated data capture in electronic record                   Data Mgmt: Humidity data is managed per Part 11 requirements | Negligible |
            
          

        

        

          

          

            

#### 9-Box Example 5

            

```
─────────────────────────────────────

```

          

          

            

#### 5a 4a

            

          

          

            

#### 5b

            

          

          

            

#### 

            

              

              

            

          

          

            

#### CDMO FDF DI

            

              

              

              

            

          

        

      

    

  

  
  

    

      

Ex6

      

        

## Example 6: Low Criticality — Humidity Monitoring During Sieving

        

      

    

    

      
      

        

          

Original Text (English)

          

Example 6 uses the same sieving operation, the same vulnerability factors, and the same data controls as Examples 4 and 5; however, the humidity is Low-critical data (Table 8.2-3). The drug substance is not hygroscopic and is very stable, with good flow properties over a wide humidity range. Humidity is not a CPP. The data will reside in the bottom row of the 9-Box vulnerability grid.

          

Example 6a illustrates Low-critical data with the operator manually adding analogue humidity data from a chart recorder and transcribing this data to a paper manufacturing record. In addition, a Low level of existing data controls exist, and a second person must verify the data. The Low criticality of the data combined with a Low level of controls creates an Acceptable data vulnerability risk (Green).

          

Example 6b illustrates the same Low-critical data; however, the data controls have increased compared to Example 6a. The humidity data is now digitized and captured using a validated BMS, with audit trail and access controls. Also, a printout of the humidity data is attached to the manufacturing record. The additional controls yield a Negligible data vulnerability risk (Blue).

          

Example 6c illustrates the same Low-critical data with the added controls of a validated electronic manufacturing record with automated data capture, audit trail, and access controls. The vulnerability of the data remains unchanged at a Negligible level (Blue). In this example, significantly more controls are in place than are required.

        

        

          

          

            

#### 

            

            

          

          

            

#### 6c

            

          

        

      

      
      

        

          

Table 8.2-3: Example 6 — Low Criticality Humidity Monitoring

          
            
              
                
                
                
                
                
                
              
| Ex | Mfg Operation | Data Criticality | Data Vulnerability Factors | Data Controls in Place | Vulnerability Level |
| --- | --- | --- | --- | --- | --- |
            
            
              
                ****
                
                ****
                **  
**  
**
                ****  
**  
**  
**
                
              
| 6a | Humidity data is displayed and recorded on a paper chart; a paper manufacturing record is used | Low: Humidity is not a CPP; drug substance is not hygroscopic and is very stable with good flow properties over a wide humidity range | Human Factor: Analogue humidity data is interpolated from chart recording, and data is transcribed to paper record                   GMP Process: Humidity data is captured manually                   Data Mgmt: Periodic manual entry of data into BPR | Low:                   Human Factor: Supervisor review and quality unit review at release                   GMP Process: Chart paper is attached to paper record                   Data Mgmt: Second-person verification of data entry; quality unit review at release | Acceptable |
              
                ****
                
                ****
                **  
**  
**
                ****  
**  
**  
**
                
              
| 6b | Humidity data is displayed and recorded using BMS; a paper manufacturing record is used | Low: Humidity is not a CPP; drug substance is not hygroscopic and is very stable with good flow properties over a wide humidity range | Human Factor: Digital humidity data is printed out from HMI, and data is transcribed to paper record                   GMP Process: Humidity data is captured both manually and electronically                   Data Mgmt: Periodic manual data entry into paper BPR | Medium:                   Human Factor: Supervisor review and quality unit review at release                   GMP Process: HMI printout is attached to paper record; validated BMS with audit trail and access controls                   Data Mgmt: Second-person verification of printout; quality unit review at release | Negligible |
              
                ****
                
                ****
                **  
**  
**
                ****  
**  
**  
**
                
              
| 6c | Humidity data is displayed and recorded using BMS; an electronic manufacturing record is used | Low: Humidity is not a CPP; drug substance is not hygroscopic and is very stable with good flow properties over a wide humidity range | Human Factor: An electronic manufacturing record mitigates human error to a residual level                   GMP Process: Humidity data is captured electronically                   Data Mgmt: Humidity data is automatically uploaded into electronic manufacturing record | High:                   Human Factor: Use of electronic record minimizes manual entry of data                   GMP Process: Validated BMS with audit trail and access controls; automated data capture in electronic record                   Data Mgmt: Humidity data is managed per Part 11 requirements | Negligible |
            
          

        

        

          

          

            

#### 9-Box Example 6

            

```
─────────────────────────────────────

```

          

          

            

#### 

            

            

              

              

              

            

            

          

          

            

#### FDF

            
              
                
                  
                  
                  
                  
                
| | a | bBMS+ | cEBR |
| --- | --- | --- | --- |
              
              
                
                  
                  
                  
                  
                
| | Significant | Moderate | Acceptable |
                
                  
                  
                  
                  
                
| | Moderate | Acceptable | Negligible |
                
                  
                  
                  
                  
                
| | Acceptable | Negligible | Negligible |
              
            

            

          

          

            

#### 

            

              

              

              

            

          

          

            

#### CDMO DI

            

              

              

              

              

            

          

        

      

    

  

  
  

    

      

      

        

## Section Summary —

## Section 6b: Appendix I: Sterility & Packaging Examples (p49-p57)

# Section 6b: Appendix I — Sterility Assurance & Packaging Examples

    

    

PDA Technical Report No. 84 | p49 – p57

    
    

        

## Sterility Assurance Examples — Overview /

                

Filter Integrity Testing in the 9-Box Grid | p49–50

            

        

        

            

                

                    

### 8.3 Sterility Assurance Examples

                    

The following examples demonstrate how High-, Medium-, and Low-criticality data from an aseptic filling process is mapped in the 9-Box vulnerability grid. Sterility is achieved through filtration at the point of fill. The sterility assurance at the point of fill impacts a CQA of the final product. Integrity of the sterilizing filter is a CPP that is verified before use and confirmed after use by filter integrity testing (Figure 8.3-1).

                    

According to the FDA Guidance for Industry: Sterile Drug Products Produced by Aseptic Processing, "Integrity testing of the filter(s) can be performed prior to processing and should be routinely performed post-use" (1). Although filter integrity testing can be performed to verify filter identity before sterilizing filtration, there is no regulatory requirement in the U.S. to perform such a test. In the EU, the regulatory requirements may differ, as Annex 1 states that "The integrity of the sterilised filter should be verified before use and should be confirmed immediately after use by an appropriate method…." (2). These examples are intended to clarify the application of the 9-Box grid; care should be taken to conform to local regulatory requirements.

                    

Examples 7–9 demonstrate data integrity risk levels for filter integrity testing with three potential scenarios.

                    

In **Example 7**, the data is considered to be of **High criticality** because the filter integrity testing impacts CQA (sterility) and it is a CPP that confirms the absence of viable microorganisms after aseptic filling, which is a regulatory expectation.

                    

In **Example 8**, the data is considered **Medium criticality** under U.S. regulation because the test is a regulatory recommendation intended to verify filter integrity after sterilizing filtration but before aseptic filling.

                    

In **Example 9**, the data is considered **Low criticality** because the test is not a regulatory requirement but is intended to verify filter identity to ensure correct filter installation.

                    

                        **Figure 8.3-1 — Simplified Illustration of Aseptic Filling Process:**  

                        Formulation Tank → Pre Filter → Bioburden Filter → **Sterilizing Filter** → Aseptic Filling  

                        (Filter Integrity Tester connected to Sterilizing Filter)
                    

                

                

                    

### 

                    

                        

#### DI

                        

                        

                        

                            

                            

                            

                        

                    

                    

                        

#### vs.

                        

                    

                    

                        

#### 

                        

                    

                    

                        

#### CDMO

                        

                    

                

            

        

    

    
    

        

            

Ex7

            

                

## Example 7: High Criticality – Filter Integrity Testing (Post-Use) /

                

Table 8.3-1 | p51

            

        

        

            

                

                    

### Example 7 — Table 8.3-1

                    

**Data Criticality:** High — Impacts CQA (sterility) and is a CPP that confirms absence of viable microorganisms after aseptic filling.

                    
                        
                            
                                
                                
                                
                                
                                
                            
| Ex | Mfg. Operation | Data Vulnerability Factors | Data Controls in Place | Vulnerability Level |
| --- | --- | --- | --- | --- |
                        
                        
                            
                                
                                
                                ****  
  
****  
  
****
                                ****  
  
  
  
  

                                
                            
| 7a | Aseptic Filling: Filter integrity tester with paper print-out test results | Human Factor: Manual transcription of set-up data by operator                                     GMP Process: Filter integrity tester is manually controlled by the operator                                     Data Mgmt: Legacy filter integrity tester used with no/limited ability to store electronic data; paper printout used in lieu of electronic data | Low:                                     Human Factor: Supervisor reviews test results prior to batch release                                     GMP Process: Controlled with written procedures and training                                     Data Mgmt: Reliance on peer review of data entries and test results | Significant |
                            
                                
                                
                                ****  
  
****  
  
****
                                ****  
  
  
  
  

                                
                            
| 7b | Aseptic Filling: Filter integrity tester with automated data entry and storage and electronic test results | Human Factor: Automated data entry and data back-up mitigates human error to a residual level                                     GMP Process: Filter integrity tester is manually controlled by the operator                                     Data Mgmt: Latest filter integrity tester; interfaces with bar code readers; secure data storage module; records operator's actions electronically and on paper printout | Medium:                                     Human Factor: Supervisor checks test run alert data prior to batch release                                     GMP Process: Test equipment and automation interfaces validated; process robustness monitored regularly                                     Data Mgmt: Reliance on automation, validation, and robust monitoring process | Moderate |
                            
                                
                                
                                ****  
  
****  
  
****
                                ****  
  
  
  
  

                                
                            
| 7c | Aseptic Filling: Filter integrity tester with end-to-end automation | Human Factor: End-to-end automation mitigates human error to a residual level                                     GMP Process: Filter integrity testing instruments integrated into the unit operation                                     Data Mgmt: Filter is tested in-line without operator having to initiate the test manually; test results automatically transferred to a secure data storage module | High:                                     Human Factor: Supervisory review is limited to only investigation of failed test                                     GMP Process: In-line test equipment and associated interfaces validated; process robustness monitored regularly                                     Data Mgmt: Reliance on automation, validation, and the robust monitoring process | Acceptable |
                        
                    

                

                

                    

### 

                    

                        

#### DI

                        

                        

                            

                            

                            

                        

                    

                    

                        

#### 7a DI

                        

                            

                            

                            

                        

                        

                    

                    

                        

#### vs. GPS

                        

                    

                    

                        

#### 

                        

                    

                    

                        

#### CDMO

                        

                    

                

            

        

    

    
    

        

            

Ex8

            

                

## Example 8: Medium Criticality – Filter Integrity Testing (Pre-Use, Post-Sterilization) /

                

Table 8.3-2 | p52

            

        

        

            

                

                    

### Example 8 — Table 8.3-2

                    

The data in Example 8 would be considered Medium criticality under U.S. regulation because the test is a regulatory recommendation intended to verify filter integrity after sterilizing filtration but before aseptic filling. The data may have a different criticality level in other regions of the world due to different regulatory requirements.

                    
                        
                            
                                
                                
                                
                                
                                
                            
| Ex | Mfg. Operation | Data Vulnerability Factors | Data Controls in Place | Vulnerability Level |
| --- | --- | --- | --- | --- |
                        
                        
                            
                                
                                
                                ****  
  
****  
  
****
                                ****  
  
  
  
  

                                
                            
| 8a | Aseptic Filling: Filter integrity tester with paper printout test results | Human Factor: Manual transcription of set-up data by the operator                                     GMP Process: Filter integrity tester is manually controlled by the operator                                     Data Mgmt: Legacy filter integrity tester used with no/limited ability to store electronic data; paper printout is used in lieu of electronic data | Medium:                                     Human Factor: Supervisor reviews test results prior initiating aseptic filling process                                     GMP Process: Controlled with written procedures and training                                     Data Mgmt: Reliance on peer review of data entries and test results | Moderate |
                            
                                
                                
                                ****  
  
****  
  
****
                                ****  
  
  
  
  

                                
                            
| 8b | Aseptic Filling: Filter integrity tester with automated data entry and storage and electronic test results | Human Factor: Automated data entry and data back-up mitigates human error to a residual level                                     GMP Process: Filter integrity tester is manually controlled by the operator                                     Data Mgmt: Latest filter integrity tester; interfaces with bar code readers; secure data storage module; records operator's actions electronically and on paper printout | High:                                     Human Factor: Supervisor checks test run alert data prior to aseptic filling process                                     GMP Process: Test equipment and associated automation interfaces validated; process robustness monitored regularly                                     Data Mgmt: Reliance on automation, validation, and robustness monitoring process | Acceptable |
                            
                                
                                
                                ****  
  
****  
  
****
                                ****  
  
  
  
  

                                
                            
| 8c | Aseptic Filling: Filter integrity tester with end-to-end automation | Human Factor: End-to-end automation mitigates human error to a residual level                                     GMP Process: Process robustness assured by automation, validation, and monitoring practices; redundant sterilizing filters installed                                     Data Mgmt: Filter is tested in line without the operator having to initiate the test manually; test results automatically transferred to a secure data storage module | High:                                     Human Factor: Supervisory review is limited to only investigation of failed test runs                                     GMP Process: Test equipment and associated automation interfaces validated; process robustness monitored regularly                                     Data Mgmt: Reliance on automation, validation, and robustness of monitoring process | Negligible |
                        
                    

                

                

                    

### 

                    

                        

#### 

                        

                        

                            

                            

                            

                        

                        

                    

                    

                        

#### 8c (Redundant Sterilizing Filters)

                        

                    

                    

                        

#### vs.

                        

                    

                    

                        

#### 

                        

                    

                    

                        

## Example 9: Low Criticality – Filter Identity Verification (Pre-Use, Pre-Sterilization) /

                

Table 8.3-3 | p53–54

            

        

        

            

                

                    

### Example 9 — Table 8.3-3

                    

The data in Example 9 is considered Low criticality because the test is not a regulatory requirement but is intended to verify filter identity to ensure correct filter installation.

                    

In Example 9a, the data vulnerability level is **Acceptable** (Green) due to Low data criticality and the fact that high levels of human intervention with legacy filter integrity tester are adequately managed through procedural controls.

                    

In Example 9b, the data vulnerability becomes **Negligible** (Blue) when human errors are reduced by using newer technology that feature improved functionality to ensure automated data capture, secure storage, and audit trail capabilities.

                    

Example 9c shows that the data vulnerability is reduced significantly and remains **Negligible** (Blue) when human intervention is reduced to a minimum with the filter testing performed in-line. *While this example is theoretically possible to put into practice, it is operationally unlikely at the current time.*

                    
                        
                            
                                
                                
                                
                                
                                
                            
| Ex | Mfg. Operation | Data Vulnerability Factors | Data Controls in Place | Vulnerability Level |
| --- | --- | --- | --- | --- |
                        
                        
                            
                                
                                
                                ****  
  
****  
  
****
                                ****  
  
  
  
  

                                
                            
| 9a | Aseptic Filling: Filter integrity tester with paper print-out test results | Human Factor: Manual transcription of set-up data by the operator                                     GMP Process: Filter integrity tester is manually controlled by the operator                                     Data Mgmt: Legacy filter integrity tester used with no/limited ability to store electronic data; paper printout is used in lieu of electronic data | High:                                     Human Factor: Supervisory review is limited to only investigation of failed tests                                     GMP Process: Controlled with written procedures and training                                     Data Mgmt: Reliance on peer review of test results | Acceptable |
                            
                                
                                
                                ****  
  
****  
  
****
                                ****  
  
  
  
  

                                
                            
| 9b | Aseptic Filling: Filter integrity tester with automated data entry and storage and electronic test results | Human Factor: Automated data entry and data back-up mitigates human error to a residual level                                     GMP Process: Filter integrity tester is manually controlled by the operator                                     Data Mgmt: Latest filter integrity tester; interfaces with bar code readers; secure data storage module; records operator's actions electronically and on paper printout | High:                                     Human Factor: Supervisory review is limited to only investigation of failed tests                                     GMP Process: Test equipment and associated automation interfaces validated; process robustness monitored regularly                                     Data Mgmt: Reliance on automation, validation, and the robustness of monitoring process | Negligible |
                            
                                
                                
                                ****  
  
****  
  
****
                                ****  
  
  
  
  

                                
                            
| 9c | Aseptic Filling: Filter integrity tester with end-to-end automation | Human Factor: End-to-end automation mitigates human error to a residual level                                     GMP Process: Process robustness assured by automation, validation, and monitoring practices; redundant sterilizing filters installed                                     Data Mgmt: Filter is tested in line without operator having to initiate the test manually; test results automatically transferred to a secure data storage module | High:                                     Human Factor: Supervisory review is limited to only investigation of failed tests                                     GMP Process: Test equipment and associated automation interfaces validated; process robustness monitored regularly                                     Data Mgmt: Reliance on automation, validation, and the robustness of monitoring process | Negligible |
                        
                    

                

                

                    

### 

                    

                        

#### 

                        

                        

                    

                    

                        

#### Ex7–9

                        

```

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
                        
```

                        

                    

                    

                        

#### 

                        

                    

                    

                        

#### 

                        

                    

                    

                        

## Tablet Packaging Process Examples — Overview /

                

Figure 8.4-1 | p54–55

            

        

        

            

                

                    

### 8.4 Tablet Packaging Process Examples

                    

Example 10 demonstrates how the 9-Box grid can be used to assess the data vulnerability of the tablet packaging process depicted in Figure 8.4-1. In this example, the 9-Box grid can be used to help determine if the controls in place at different stages of the packaging process are adequate.

                    

As shown in Table 8.4-1, this example leads to the conclusion that the controls in place are adequate for **planning, line clearance, and in-process control (IPC) testing**, while Significant or Moderate vulnerabilities exist in **dispensing, equipment set-up, packaging operation, and batch reconciliation**.

                    

Where the vulnerability is Significant or Moderate, steps should be taken to mitigate the vulnerabilities:

                    

                        
- The **dispensing process** could be improved by avoiding the use of spreadsheets, using a barcode/scanning/enterprise resource planning interface to confirm the correct identity of materials, or adding a real-time double-check that the correct quantity of the materials has been dispensed.

                        
- Both the **equipment set-up** and **packaging operation** could be improved by increasing the access controls, so each user has a unique account, or by adding minimum–maximum product-specific limits to the tolerance ranges for sensors that cannot be modified by the operator.

                        
- For **batch reconciliation**, using a barcode/scanning/validated electronic system interface could replace the manual logbook for identifying when a new component is required.

                    

                    

                        **Figure 8.4-1 — Overview of the Packaging Process:**  

                        Planning → Dispensing → Line Clearance → Equipment Setup → Packaging → In-Process Control Testing → Batch Reconciliation
                    

                

                

                    

### 

                    

                        

#### 8.4

                        

                        

                        

                            

                            

                            

                            

                            

                            

                            

                        

                    

                    

                        

#### 

                        

                    

                    

                        

#### DI

                        

                    

                

            

        

    

    
    

        

            

Ex10

            

                

## Example 10: High & Medium Criticality – Tablet Packaging /

                

Table 8.4-1 | p55–57

            

        

        

            
            

### 10a — Planning

            

                

                    

**Mfg. Operation:** Planning — Creation of the process order in a validated electronic system (such as SAP). Once created, the batch-specific data in the validated electronic system (batch number, material number, etc.) is automatically added to the master batch record template and printed for use in production.

                    

**Data Criticality: Medium** — Ensures unique batch number assigned, and correct master templates are used.

                    

**Vulnerability Factors:**  

                    Human Factor: Procedure allows, if the validated electronic system is inaccessible, to print the master template and add a batch number manually, potentially adding an incorrect batch number.  

                    GMP Process: Process robustness assured by validation.  

                    Data Mgmt: Limited risks as process and transfer of batch specific information to the master batch record is controlled by a validated system.

                    

**Controls in Place: High**  

                    Human Factor: Documentation team prints the batch record only after the process order is created, allowing automatic transfer of batch number.  

                    GMP Process: The electronic system and associated automatic transfer of batch number to an approved master manufacturing template is validated.  

                    Data Mgmt: Reliance on validation and user access to the validated electronic system and documentation control system.

                    

**Vulnerability Level:** Negligible

                

                

                    

                        

#### 10a Negligible

                        

                    

                    

                        

#### DI

                        

                    

                

            

            
            

### 10b — Dispensing

            

                

                    

**Mfg. Operation:** Dispensing — A spreadsheet is printed from the validated electronic system process order and given to the dispensing team detailing what to dispense and what quantity; materials are prepared and dispensed, and quantities are manually recorded directly into a master batch record.

                    

**Data Criticality: High** — Need to ensure correct materials and batch numbers are selected and used; potential for product mix-up or packaging material mix-up, which can impact product quality or patient safety.

                    

**Vulnerability Factors:**  

                    Human Factor: Single operator records by manual entry into the master manufacturing record actual quantities of dispensed materials.  

                    GMP Process: Dispensing is a completely manual process; barcodes or labels are not used; no second format to confirm the quantity dispensed.  

                    Data Mgmt: Data in the spreadsheet can be easily modified before printing, creating errors during dispensing process.

                    

**Controls in Place: Low**  

                    Human Factor: Supervisor review only at end of packaging.  

                    GMP Process: Controlled with written procedures and training.  

                    Data Mgmt: Reliance on converting data in validated electronic system to a spreadsheet, which is printed and given to the dispensing team.

                    

**Vulnerability Level:** Significant

                

                

                    

                        

#### 10b DI

                        

                    

                    

                        

#### 

                        

                    

                    

                        

#### CDMO

                        

                    

                

            

            
            

### 10c — Line Clearance

            

                

                    

**Mfg. Operation:** Line Clearance — Performed before dispensed materials are brought to the packaging line; documented directly into master manufacturing template; sensors installed in hard-to-clean parts of the equipment.

                    

**Data Criticality: High** — If not performed robustly, packaging components or finished product from the previous run may be mixed into the new packaging order.

                    

**Vulnerability Factors:**  

                    Human Factor: Reliance on manual confirmation that line clearance was performed correctly; chance of both operators missing the difficult-to-clean parts of the equipment, but sensors installed in these areas reduce the risk.  

                    GMP Process: Sensors in place only in parts of the line; reliance on human confirmation of line clearance in other parts.  

                    Data Mgmt: Limited risks as process is controlled by validated systems; user access is well controlled.

                    

**Controls in Place: High**  

                    Human Factor: Real-time four-eyes check performed by certified peer; quality unit review at release.  

                    GMP Process: Controlled with written procedures, training of first operator, and certification of a peer performing four-eyes review.  

                    Data Mgmt: Reliance on validation and user access to the validated electronic system, documentation control system, and sensors.

                    

**Vulnerability Level:** Acceptable

                

                

                    

                        

#### 10c (Four-Eyes Check) DI

                        

                        

                    

                    

                        

#### DI

                        

                            

                            

                            

                            

                        

                    

                    

                        

#### 

                        

                    

                

            

            
            

### 10d — Equipment Setup

            

                

                    

**Mfg. Operation:** Equipment Setup — Recipe (for CPPs) / tolerance ranges (balances, cameras, sensors) and other adjustable settings are configured; packaging equipment uses group accounts for operators, who have access to choose any recipe, and edit set-up parameters.

                    

**Data Criticality: High** — Incorrect settings could potentially result in impact to product quality or patient safety.

                    

**Vulnerability Factors:**  

                    Human Factor: Operator could select an incorrect recipe, impacting CPPs, or change tolerance ranges outside of required range to ensure higher pass rate (fewer rejects); possible to change CPPs outside of the validated range.  

                    GMP Process: Set-up is manually controlled by the operator; no double-check before starting packaging.  

                    Data Mgmt: Operators use group accounts to make the adjustments and are able to change set-up parameters.

                    

**Controls in Place: Low**  

                    Human Factor: Peer and quality unit review of batch report to confirm the correct recipes and tolerance ranges were used.  

                    GMP Process: Controlled with written procedures and training.  

                    Data Mgmt: Different user groups for operator, maintenance, and administrator; batch report automatically records set-up parameters/recipe used.

                    

**Vulnerability Level:** Significant

                

                

                    

                        

#### 10d DI

                        

                        

                    

                    

                        

#### 

                        

                    

                    

                        

#### CDMO

                        

                    

                

            

            
            

### 10e — Packaging Operation

            

                

                    

**Mfg. Operation:** Packaging — Bulk tablets are packed in blisters, added to the carton together with the patient information leaflet, before being bundled.

                    

**Data Criticality: Medium** — Once the set-up is completed correctly, potential to impact product quality is reduced.

                    

**Vulnerability Factors:**  

                    Human Factor: Operator can add rejects back to packaging process or adjust the tolerance ranges during processing to reduce the rejects.  

                    GMP Process: Operator controls the packaging process manually and can edit the CPP setpoint and sensor tolerance ranges; no double-check during processing of any edits made.  

                    Data Mgmt: Operators use group accounts to make setting adjustments.

                    

**Controls in Place: Low**  

                    Human Factor: Peer and quality unit review of batch report to confirm the correct recipes and tolerance ranges were used.  

                    GMP Process: Controlled with written procedures and training.  

                    Data Mgmt: Different user groups; audit trail automatically records all changes to setpoints or tolerance ranges and includes in the batch report.

                    

**Vulnerability Level:** Moderate

                

                

                    

                        

#### 10e Significant Moderate

                        

                        

                    

                    

                        

#### DI

                        

                    

                    

                        

#### 

                        

                    

                

            

            
            

### 10f — In-Process Control Testing

            

                

                    

**Mfg. Operation:** In-Process Control (IPC) testing — performed by trained personnel; periodicity of IPC testing is part of batch record, with space to record all IPC results and attach all equipment printouts.

                    

**Data Criticality: Medium** — IPC tests are used to adjust during the packaging process, but all parameters are also part of release testing.

                    

**Vulnerability Factors:**  

                    Human Factor: Recording can be done without performing the activity, but missing equipment printout will show testing never took place.  

                    GMP Process: Test results are transcribed into the batch record, and all printouts are manually added; possible transcription errors.  

                    Data Mgmt: Testing equipment allows reprinting of previous tests; printout does not have the batch-specific information or the user's name; only date, time and result are captured; equipment does not store the data electronically.

                    

**Controls in Place: Medium**  

                    Human Factor: Double verification by a peer for each new IPC test; quality unit review that a new test was performed according to periodicity defined in the batch record.  

                    GMP Process: Controlled with written procedures and training; operator adds equipment printout to the batch record, overlaying their signature.  

                    Data Mgmt: Testing equipment generates a printout, with time and date of the test performed; operators do not have access to change the time or date on the equipment—reserved for administrators.

                    

**Vulnerability Level:** Acceptable

                

                

                    

                        

#### 10f

                        

                        

                    

                    

                        

#### DI

                        

                    

                    

                        

### 10g — Batch Reconciliation

            

                

                    

**Mfg. Operation:** Batch Reconciliation — Batch yield is calculated, along with reconciliation of unused packaging materials.

                    

**Data Criticality: High** — If not performed correctly, potential to impact patient safety.

                    

**Vulnerability Factors:**  

                    Human Factor: Operators can stop the batch early, or add rejected materials back into the line, impacting the reconciliation process.  

                    GMP Process: Batch yield is calculated using counters (pass/reject information), that are part of the batch report; reconciliation of packaging components is completely manual process.  

                    Data Mgmt: Operators use logbooks to record the use of packaging components during the batch; possible to miscalculate the quantity of packaging materials used.

                    

**Controls in Place: Medium**  

                    Human Factor: Double verification by a peer for each packaging component used, and quality unit review of reconciliation process.  

                    GMP Process: Controlled with written procedures and training; operators need to complete a logbook each time a new package component is required.  

                    Data Mgmt: Equipment automatically generates a report at the end of packaging; report template and data are locked and no one can edit the contents.

                    

**Vulnerability Level:** Moderate

                

                

                    

                        

#### 10g DI

                        

                        

                    

                    

                        

#### 

                        

                    

                    

                        

#### 

                        

                    

                    

                        

#### CDMO

                        

                    

                

            

        

    

    
    

        

            

8.5

            

                

## References for Appendix I /

                

p57

            

        

        

            

                

                    

### 8.5 References for Appendix I

                    

                        
1. U.S. Food and Drug Administration. *Guidance for Industry: Sterile Drug Products Produced by Aseptic Processing—Current Good Manufacturing Practice*; U.S. Department of Health and Human Services: Rockville, Md., 2004.

                        
2. European Commission. *Annex 1: Manufacture of Sterile Medicinal Products*, EudraLex – Volume 4 – Good Manufacturing Practice for Medicinal Products for Human and Veterinary Use Consultation Document. European Commission: Brussels, 2017.

                    

                

                

                    

                        

#### 

                        

                            

                            

                        

                        

                    

                    

                        

#### 

                        

                    

                

            

        

    

    
    

        

            

            

                

## — Section 6b Summary

                

            

        

        

            

                

#### 

                

            

            

                

#### DI

                

            

            

                

#### DI

                

            

            

                

#### CDMO

                

                    

                    

                    

                    

                    

                

            

            

                

#### 

                

            

        

    

    

PDA Technical Report No. 84 — Data Integrity in Manufacturing & Packaging Operations

    

Section 6b: Appendix I — Sterility Assurance & Packaging Examples (p49–p57)

    

Educational bilingual HTML — SterileGMP Knowledge Hub

⇧