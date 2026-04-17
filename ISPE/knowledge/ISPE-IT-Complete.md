# ISPE GAMP Good Practice Guide: IT Infrastructure Control and Compliance: IT Infrastructure Control and Compliance

## Chapter 0: Introduction & IT Infrastructure Elements (p1-p16)

ISPE GAMP Good Practice Guide

    

# Chapters 1–2: Introduction & IT Infrastructure Elements | IT

    

GAMP Good Practice Guide: IT Infrastructure Control and Compliance

    

Preface · Chapter 1 (Sections 1.1–1.7) · Chapter 2 (Sections 2.1–2.3) · Pages 1–17

    

### Contents

    

        GAMP Categories
    

    

## Preface |

            

        

    

    

        

            

                

Original Text (English)

                

This document, the **GAMP® Good Practice Guide: IT Infrastructure Control and Compliance**, is intended as a supplement to the Guide for Validation of Automated Systems (GAMP® 4). It provides an approach to meeting current regulatory expectations for compliant IT Infrastructure platforms, including the need to identify, qualify, and control those aspects impacted by GxP.

                

This document has been designed so that it may be used in conjunction with guidance provided in GAMP® 4 and other ISPE publications, such as the ISPE Baseline® Guides.

                

                    

#### Disclaimer

                    

This Guide is meant to assist pharmaceutical companies in managing the validation of IT Infrastructure platforms. The GAMP Forum cannot ensure and does not warrant that a system managed in accordance with this Guide will be acceptable to regulatory authorities. This Guide does not replace the need for hiring professional engineers or technicians.

                

            

            

                

                

                    

#### 

                    

                    

                

                

                    

#### 

                    

                

                

                    

#### 

                    

                        

                        

                        

                    

                

            

        

    

    

        

1.1

        

            

## Overview |

            

        

    

    

        

            

                

Original Text (English)

                

GxP regulated companies have an ever increasing dependency on computerized systems when conducting their day-to-day businesses.

                

The validated status of GxP applications that are dependent upon an underlying IT Infrastructure is compromised if that IT Infrastructure is not maintained in a demonstrable state of control and regulatory compliance.

                

The consequences of the IT Infrastructure being out of effective control can be significant. Depending on the nature of a failure, an entire site or geographic region of operations could be brought to a standstill while the problem is resolved.

                

The infrastructure should be brought into initial conformance with the company's established standards through a planned qualification process building upon acknowledged good IT practices. Once in conformance, this state should be maintained by documented standard processes and quality assurance activities, the effectiveness of which should be periodically verified.

                

**Key aspects to consider include:**

                

                    
- Installation and operational qualification of infrastructure components

                    
- Configuration management and change control in a highly dynamic environment

                    
- Management of risks to IT Infrastructure

                    
- Involvement of service providers in critical infrastructure processes

                    
- Security management — access controls, availability of services and data integrity

                    
- Backup, restore, and disaster recovery

                    
- Archiving

                

                

                    "IT Infrastructure" and "infrastructure" are used synonymously to indicate an aggregation of platforms and services including their associated processes, procedures, and personnel.
                    — GAMP IT Infrastructure Guide, Footnote 1
                

            

            

                

                

                    

#### 

                    

                    

                        

                        

                        

                    

                

                

                    

#### CDMOIT

                    

                        

                        

                        

                        

                        

                    

                

                

                    

#### IT Infrastructure

                    

                    

                

                

                    

#### 

                    

                        

                        

                        

                    

                

            

        

    

    

        

1.2

        

            

## Purpose |

            

        

    

    

        

            

                

Original Text (English)

                

This Guide provides comprehensive guidance on meeting current regulatory expectations for compliant IT Infrastructure platforms, including the need to **identify, qualify, and control** those aspects impacted by GxP.

                

This Guide intends to satisfy the growing need for guidance on key IT Infrastructure subjects in relation to current international GxP regulations, and to align terminology and language with other GAMP® Good Practice Guides.

                

The Guide is intended primarily for regulated life science industries, including pharmaceutical, biological, and medical devices, but also provides valuable information for suppliers of systems, products, or services.

                

This Guide includes the description of a **scaleable qualification framework** which has been derived from key principles and practices. It describes how this framework can be applied to different platform types in order to determine the extent and scope of qualification efforts.

                

In addition, this Guide provides an overview of current best practices for the design, qualification, and operation of an IT Infrastructure with emphasis on the qualification requirements of the major components.

            

            

                

                

                    

#### Identify → Qualify → Control

                    

                    

                        

                        

                        

                    

                

                

                    

#### Scaleable Qualification Framework

                    

                    

                        

                        

                        

                    

                    

                

                

                    

#### 

                    

                        

                        

                        

                    

                

            

        

    

    

        

1.3

        

            

## Scope |

            

        

    

    

        

            

                

Original Text (English)

                

This Guide addresses compliance with international GxP regulations and considers:

                

                    
- The establishment of new platforms and extensions to existing ones

                    
- Existing platforms already in support of GxP applications

                

                

**GxP regulations considered:**

                

                    
- Good Manufacturing Practice (GMP)

                    
- Good Clinical Practice (GCP)

                    
- Good Laboratory Practice (GLP)

                    
- Good Distribution Practice (GDP)

                

                

**Specific regulations and guidelines considered:**

                

                    
- US FDA regulations and Compliance Policy Guides

                    
- Relevant parts of EU GMPs, e.g., Annexes 11, 15, and 18

                    
- PIC/S Guidance

                

                

This Guide covers a range of IT Infrastructures, from those found in companies operating globally to isolated or semi-isolated GxP regulated infrastructures.

                

                    

#### Out of Scope

                    

Business Continuity Planning is led by business users and application owners — it is outside the scope of this Guide. This Guide covers IT disaster recovery and contingency planning, but *not* alternative operating procedures for business processes in case of failure.

                

            

            

                

                

                    

#### CDMO

                    

                    

                        

                        

                        

                        

                        

                        

                    

                    

                    

                        

                        

                    

                

                

                    

#### vs

                    

                        

                        

                    

                    

                

                

                    

#### 

                    

                        

                        

                        

                    

                

            

        

    

    

        

1.4

        

            

## Benefits |

            

        

    

    

        

            

                

Original Text (English)

                

This Guide applies a structured approach, including Risk Management, to the qualification, management, and control of IT Infrastructure platforms supporting GxP applications.

                

A **vertical, or system based**, approach to qualification and audit of IT Infrastructure would be inefficient and impractical, as overlapping and often identical platform elements would be dealt with repeatedly. To avoid unnecessary effort, this Guide describes a **horizontal, or platform based**, approach.

                

**Benefits of a horizontal approach include:**

                

                    
- Higher level of standardization throughout the entire life cycle

                    
- Minimal overlap in documentation

                    
- Minimal overlap in qualification

                    
- Minimal overlap in audits, inspections, and assessments

                

                

The approach also builds upon:

                

                    
- The relatively **low residual risk** to GxP applications attributable to IT Infrastructure platforms (in contrast to application software designed to create and manipulate data)

                    
- Industry standard components with built-in error detection and self-correction features

                    
- Current good IT practices and international standards for reliable network performance

                    
- Efficient, automatic, standardized IT monitoring and management software tools

                    
- Many similar platform components used in similar configurations across a company

                

            

            

                

                

                    

#### vs

                    

                    

                    

                

                

                    

#### 

                    

                

                

                    

#### CDMO

                    

                        

                        

                        

                    

                

                

                    

#### 

                    

                        

                        

                        

                    

                

            

        

    

    

        

1.5

        

            

## Objectives |

            

        

    

    

        

            

                

Original Text (English)

                

IT Infrastructure Control and Compliance should target those IT related aspects that could potentially affect **product quality and public health**. In order to be effective, applicable methods also must be practical and efficient.

                

To this end, the GAMP® Council set out the following guiding principles:

                

                    
- Provide a consistent, standalone document that would guide stakeholders to take advantage of current best practices in the field to achieve compliance with applicable regulations

                    
- Define infrastructure and other key terms and concepts referenced or introduced

                    
- Provide guidance on best practice for network, client, and server qualification and management

                    
- Provide guidance on security issues in the light of BS7799/ISO17799

                    
- Address change control in light of virus signature updates and security patches

                

            

            

                

                

                    

#### GxP IT

                    

                

                

                    

#### Change ControlPatch Management

                    

                    

                        

                        

                        

                    

                

                

                    

#### ISO17799ISO 27001GxP

                    

                

                

                    

#### 

                    

                        

                        

                        

                    

                

            

        

    

    

        

1.6

        

            

## Structure of this Guide |

            

        

    

    

        

            

                

Original Text (English)

                

This Guide consists of a main body and a set of supporting appendices.

                

**Main body framework covers:**

                

                    
- IT Infrastructure elements

                    
- Using a Quality Management System

                    
- Applying Risk Management

                    
- Qualification of new platforms

                    
- Maintaining the qualified state during operation

                    
- Retirement of platforms

                    
- Qualification of legacy platforms

                

                

**Supporting appendices include:**

                

                    
- Roles and Responsibilities

                    
- Risk Assessment examples

                    
- Qualification Deliverables

                    
- Standard Operating Procedures (SOPs)

                    
- Periodic Reviews

                    
- Infrastructure Security

                    
- Upgrade and Patch Management

                    
- Outsourcing

                    
- Server, Client, and Network Management

                    
- Glossary and References

                

            

            

                

                

                    

#### 

                    

                    

                        

                        

                        

                    

                

                

                    

#### 

                    

                        

                        

                        

                    

                

            

        

    

    

        

1.7

## Chapter 1: QMS, Risk Management & Qualification Overview (p17-p35)

ISPE GAMP Good Practice Guide: IT Infrastructure Control and Compliance

    

# Chapters 3–5.3: QMS, Risk Management & Qualification Planning

    

    

Source Pages 18–30  |  Section 01 of ISPE-IT Series

    
    

        

### Table of Contents |

        

        

    

    
    

        

## Quality Management System for IT Infrastructure

                

            

        

        

            

                

                    

### Chapter Introduction |

                    

This chapter describes how a **Quality Management System (QMS)** may assist in providing evidence that the IT Infrastructure is in a controlled state, and the key requirements for the QMS to attain this goal.

                    

                    

                        

#### Why IT Needs Its Own QMS | ITQMS

                        

Traditional pharma QMS covers manufacturing processes. As IT infrastructure directly supports GxP computerised systems — which in turn manage critical product quality data — the IT function must operate within a structured quality framework of its own.

                        

                    

                

                

                    

### CDMO IT-QA Governance Model | CDMO IT-QA

                    

                        

#### Practical Structure for a CDMO IT-QA Function

                        

In a fill-finish CDMO, IT-QA governance typically sits at the interface between QA, IT Operations, and Validation. Key accountability points:

                        

                            
- **QA** — owns the IT Quality Manual, approves SOPs, conducts audits, signs off Qualification Plans

                            
- **IT Operations** — owns platform management, change control execution, backup/DR

                            
- **Validation / CSV Team** — owns IQ/OQ/PQ execution, test documentation, qualification reports

                            
- **Application/Data Owners** — define GxP criticality of systems they own; trigger risk assessments

                            
- **Regulatory Affairs** — interprets GxP obligations; informs infrastructure risk scope

                        

                    

                    

                        

### 3.1 Quality Manual |

                        

A Quality Manual should set quality objectives in line with corporate Quality Policy. A top level document relating to IT Infrastructure should cover:

                        

                            
- Identification of key IT Infrastructure processes (especially those that pertain to IT Infrastructure qualification and operational management), and how they interact

                            
- Procedures, detailed work instructions, templates, and other standards that apply

                            
- Required records and documentation to be maintained

                        

                        

Quality Manuals and top level documents should be approved by QA. For further information, see ISO 9000:2000 Quality Management Systems – Fundamentals and Vocabulary.

                        

                    

                    

                        

### QMS Elements for IT Departments | ITQMS

                        

                

            

            
            

                

---

                

                    

                        

### 3.2–3.4 Roles, Records & Documentation |

                        

**3.2 Roles and Responsibilities:** Roles and responsibilities should be defined for all important functions. Job descriptions or other documents should reflect the assignment of roles and responsibilities.

                        

**3.3 Record Management:** Appropriate controls need to be in place to ensure the retrievability, storage, and protection of records. The controls should provide evidence of quality levels of the IT platform, and compliance with regulations.

                        

**3.4 Documentation:** Documentation for platforms, processes, test results, etc., should be maintained in order to meet requirements for inspections by regulatory authorities.

                        

                            
- IT staff should ensure that documentation is readily available — this should be challenged during internal assessments and QA audits

                            
- Tools and utility systems should be available during regulatory inspections to provide displays and printouts

                            
- There should be a consistent approach to documentation across an organization

                            
- Systems and processes for the creation, review, and approval of documents should be established (e.g., standard templates, EDMS)

                        

                        

                    

                    

                        

### CDMO Practical Notes | CDMO

                        

                            

#### Common Inspection Finding: Undefined IT Roles

                            

During FDA 483 observations in pharma, a frequent finding is that IT staff perform GxP-impacting tasks (e.g., user access management, backup verification) without documented role assignments or training records. ISPE Section 3.2 directly addresses this gap.

                            

                        

                        

                            

#### Documentation Readiness for Inspections |

                            

                                
- All platform qualification records must be immediately retrievable (not archived off-site without recall procedure)

                                
- Configuration reports and system inventory printouts must be available on demand

                                
- EDMS should have a "inspector view" or read-only access mode

                                
- IT staff must be trained to generate config reports in real time

                            

                        

                        

                            

### 3.5 Testing Requirements |

                        

Test documentation generated as a result of the execution of test specifications during qualification should meet the following general requirements:

                        

                            
- Traceable to the specification that required the documentation

                            
- Reviewed and approved by required units or individuals, usually including QA

                            
- Clear and objectively verifiable acceptance criteria

                            
- Each test step or test case traceable to the pertinent section in the applicable requirement or design specifications

                            
- Accurate records of observations made by identifiable and trained personnel

                            
- Entries should reflect the actual observation and not just pass or fail, except when the criteria for pass and fail are made absolutely clear by the specification

                            
- Hardcopies of screen dumps, or collation by computerized tool, should be added to support test results where appropriate

                            
- Entries should be made in legible, permanent handwriting, or using a suitable computerized tool

                            
- Corrections should be made without obscuring the original entry — the date, reason, and identity of the person making the correction should be clear

                        

                        

The rigor with which the above requirements are met will depend upon the **impact and risks** associated with the component being tested.

                        

                    

                    

                        

### Testing Rigor vs. Risk Level |

                        

                            

#### Risk-Based Testing Principle |

                            

Not all IT components require the same level of test documentation rigor. The ISPE guide explicitly states that rigor is proportional to **impact and risk**. This allows efficient use of validation resources.

                            

                        

                        

                            

#### GAMP Comparison | GAMP

                            

GAMP 5 uses a similar risk-based approach for application CSV. ISPE GAMP IT Infrastructure extends the same philosophy to infrastructure layers — a critical alignment point for CDMO validation programs that cover both application and infrastructure.

                        

                    

                

            

            
            

                

---

                

                    

                        

### 3.6–3.9: SOPs, Training, Periodic Review & QA Audit | SOPQA

                        

**3.6 Standard Operating Procedures:** SOPs should describe critical processes and services, be reviewed for compliance with user requirements, company IT policies, and regulations. Procedures should specify the records needed for maintenance, troubleshooting, and auditable evidence.

                        

**3.7 Training:** Training should be planned and documented. Formal structured training programs (in-house or external) should be considered. Technical and regulatory training requirements for external service providers and contractors should also be determined.

                        

**3.8 Periodic Review and Evaluation:** Subject matter experts or IT Quality and Compliance members should review processes, systems, or platforms to ensure they meet specified requirements. The review also monitors QMS effectiveness and identifies improvements.

                        

                            
- Scope, depth, and frequency based on **impact and risk**

                            
- Operational history and known problems should be considered

                            
- A sampling technique typically is used when planning assessments

                            
- Periodic Reviews are an important element of **maintaining the qualification status** of IT Infrastructure throughout its operational life

                            
- May be scheduled or event-driven (e.g., following a major upgrade)

                        

                        

**3.9 Audit by QA:** Audits should be conducted by QA staff independent of the group being audited. The scope, frequency, and objective of audits should be determined by QA. External consultants or independent internal experts may assist.

                        

                    

                    

                        

### IT SOP Library Checklist | IT SOP

                        

Per ISPE Appendix 4 recommendations, a minimum IT QMS SOP library should include:

                        

                            

                            

                            

                            

                            

                            

                            

                            

                            

                            

                            

                            

                        

                        

                            

#### Periodic Review Triggers |

                            

                                
- Scheduled calendar-based review (e.g., annual)

                                
- After major hardware or platform software upgrade

                                
- Following a significant incident or near-miss

                                
- Prior to regulatory inspection

                                
- After significant organizational or supplier change

                            

                        

                    

                

                

                    

## Applying Risk Management to IT Infrastructure

                

            

        

        

            

                

                    

### Chapter Introduction |

                    

Risk Management is defined by ISO as the **systematic application of management policies, procedures, and practices** to the tasks of analyzing, evaluating, and controlling risk.

                    

                    

Risk Assessments should be performed for each major life cycle phase of an object or groups of objects (e.g., platforms, data) identified as important to a company's business.

                    

                    

                        

#### 5 Key Risk Management Activities | 5

                        

                            
1. **Identify** IT infrastructure components that may require qualification, based on analysis of applications and processes supported, and applicable regulations

                            
2. **Assess** components based upon identified hazards, vulnerabilities, and assessed impact on critical aspects — recognizing that in many cases the risk will be relatively low

                            
3. **Implement controls** commensurate with identified risks — document and justify controls with reference to identified risks

                            
4. **Assess proposed changes** to qualified components

                            
5. **Monitor effectiveness** of controls by Periodic Review

                        

                    

                    

Companies also may decide to apply this Risk Management approach to IT Infrastructure components which do **not** support GxP applications, but which are business critical.

                    

                

                

                    

### Risk-Based Qualification Scope Decision Matrix |

                    

                        

#### Key Principle |

                        

Infrastructure staff should **not** be expected to assess GxP compliance independently. Application/data owners and QA define which platform components require qualification. This division of responsibility prevents both over- and under-qualification.

                        

                    

                

            

            
            

                

---

                

                    

                        

### 4.1 Identification and Assessment of Components |

                        

Application/data owners and QA should define which platform components (or types of component) and tools require qualification. For IT Infrastructure components, the **criticality of the GxP applications they support**, along with **impact on integrity and availability of data** should be considered.

                        

Platform management groups may assign the same level of criticality to all components and data unless system/data owners specify different levels of criticality.

                        

Non-GxP applications operating on the IT Infrastructure may affect GxP applications — these should be identified within the Risk Assessment process, and suitable controls included.

                        

The risk analysis process should identify potential hazards and vulnerabilities. Hazards in the context of platform qualification may result in risks to:

                        

                            
- **Records** related to product quality or patient safety:
                                

                                    
    - Integrity — short term or long term

                                    
    - Confidentiality — if required by the company

                                    
    - Availability — at the right place and time

                                

                            

                            
- **Availability of services** — affects business and compliance if persistent

                            
- **Validity of IT Infrastructure processes**, e.g., User Access Accounting

                            
- **Availability and training of key staff**

                        

                        

Once identified, the impact and likelihood of these hazards should be assessed and documented. Risk Assessment is typically an iterative process, performed progressively during planning and specification as more information becomes available.

                        

                    

                    

                        

### IT Component Risk Classification Table | IT

                        

                            

#### The "CIA Triad" in GxP Context | GxPCIA

                            

The ISPE risk hazard categories map directly to the classic information security CIA model: **C**onfidentiality (data not exposed), **I**ntegrity (data not corrupted), **A**vailability (data accessible when needed). All three are GxP requirements — not just IT security concerns.

                        

                    

                

            

            
            

                

---

                

                    

                        

### 4.2–4.4: Controls, Change Assessment & Periodic Review |

                        

**4.2 Implementation of Controls:** A range of controls may be appropriate to mitigate the identified risks:

                        

                            
- Testing

                            
- Redesign, including incorporation of redundancy

                            
- Deployment of automatic performance, diagnostic, alarm, and security monitoring tools

                            
- Updated or new policies, guidelines, and instructions

                            
- Extra education or training

                            
- Supplier assessments and management

                            
- Identification of new or updated roles and responsibilities

                            
- Provision of extra staff, facilities, tools, and office space

                        

                        

Successful implementation of the required controls should be verified during qualification, and Periodic Review.

                        

**4.3 Assessment of Changes to Qualified Components:** The impact and risk associated with proposed changes to IT Infrastructure components should be assessed as part of the change management process, and appropriate controls implemented.

                        

**4.4 Periodic Review and Evaluation:** During Periodic Review of IT Infrastructure, the company should reconsider the risks and verify that controls established during IT Infrastructure development and qualification are still effective. The review also should consider:

                        

                            
- If previously unrecognized hazards are present

                            
- If the estimated risks arising from a hazard are no longer acceptable

                            
- If the original assessment is otherwise invalidated

                        

                        

                    

                    

                        

### Risk Control Implementation & GAMP 5 Comparison | GAMP 5

                        

                            

#### Change Control — The Critical Link |

                            

Section 4.3 establishes that **every change to a qualified IT component must go through a risk assessment**. This is the mechanism that prevents qualification from becoming a one-time event. For CDMOs with frequent infrastructure updates (OS patches, hypervisor upgrades), a mature IT change control process is non-negotiable.

                            

                        

                    

                

                

                    

## Qualification of Platforms — Overview of Process

                

            

        

        

            

                

                    

### Overview |

                    

This section describes how a platform, or a major addition to an existing platform, may be brought into compliance with the company's established standards using a planned qualification process. Minor additions are usually managed via change control.

                    

                    

A **Platform Project and Qualification Plan**, describing the life cycle activities to be undertaken to qualify each platform type, should be created. The plan should cover:

                    

                        
- The approved and effective SOPs required

                        
- Deliverables that will be the output of the qualification process

                        
- Responsibilities and approvals required

                    

                    

The qualification strategy is typically based on one of **two scenarios**:

                    

                        

#### Strategy 1: Building-Block (Generic Platform) | 1

                        

Platform specifications are **independent of any specific applications**. Developed from generic requirements, bound by company policies. Application specifications take existing, standardized platform capabilities into account. Qualification commences with little interaction with application owners — qualified platforms are considered commodities.

                        

                    

                    

                        

#### Strategy 2: Case-by-Case | 2

                        

Platform requirements are **mainly derived from system (application) specifications on a case-by-case basis**. Building-block concept not fully usable; significant interaction with application owners required; platform qualification is largely a one-off exercise.

                        

                    

                

                

                    

### Qualification Process Flow & Building-Block Strategy |

                    

                        

#### Sequential Qualification Steps |

                        

                            
1. **Risk Assessment** → determines scope and intensity of qualification, which components and configurations are required, rigor of supplier assessment

                            
2. **Procurement** → supplier evaluation based on risk outcome

                            
3. **IQ (Installation Qualification)** → evidence that all components installed and configured as specified; certification evidence may support IQ

                            
4. **OQ (Operational Qualification)** → evidence that critical features of the platform perform as specified

                            
5. **Qualification Report** → summarizes results, formally concludes the qualification process

                        

                    

                    

                        

#### The Building-Block Advantage |

                        

The preferred qualification strategy is to qualify **types** of building blocks, then run **abbreviated qualifications** of individual instances. Benefits:

                        

                            
- Reduces qualification effort for each new server or workstation

                            
- Standardizes the IT environment — reduces variability and risk

                            
- Enables faster deployment of new GxP-supporting systems

                            
- Qualification work is reusable — ROI improves over time

                        

                        

                    

                    

                        

#### GAMP 5 Parallel | GAMP 5

                        

Strategy 1 (Building Block) parallels GAMP 5's approach to Category 1 infrastructure — leveraging vendor documentation and standardized configurations. Strategy 2 parallels custom application validation where system-specific requirements drive the scope. A mature CDMO should aim for Strategy 1 wherever possible.

                    

                

            

            

                

## IT Infrastructure Life Cycle Model

                

            

        

        

            

                

                    

### Life Cycle Model Overview |

                    

The following life cycle model outlines one way to manage complex IT Infrastructure projects. Smaller additions to existing IT Infrastructures may use a model that combines phases. While indicating a general flow of life cycle phases, the model is **not intended to imply that all phases are strictly sequential** — typically, overlap and iterations will occur during the project.

                    

                    

                

                    

### IT Infrastructure V-Model Diagram | ITV

                    

                        

#### IT Infrastructure V-Model (Text-Based) | ITV

                        

Left = definition phases | Right = verification phases | Bottom = build/test

                        

                            

User/Business Requirements  

                            

━━━━━━━━━━━━━

                            

Periodic Review & Retire  

                        

                        

                            

Platform Specification & Design  

                            

✦

                            

OQ — Operational Tests  

                        

                        

                            

Risk Assessment & Test Planning  

                            

✦

                            

IQ — Installation Verification  

                        

                        

↙                              ↘

                        

                            

Procurement, Build, Install & Configure  

                        

                        

← ACHIEVING QUALIFICATION →  |  ← MAINTAINING QUALIFICATION →

                        

The left arm defines **what** the system should be. The right arm verifies **that** the system is as defined. The bottom is the implementation. Planning spans the entire V.

                    

                    

                        

#### Non-Sequential Nature |

                        

Unlike a waterfall model, the ISPE IT Infrastructure lifecycle explicitly acknowledges overlap and iteration. For example, risk assessment continues throughout planning and specification as more information becomes available — the initial risk assessment done during planning is refined as design details emerge.

                        

                    

                

            

            

                

## Planning — Platform Qualification Plan

                

            

        

        

            

                

                    

### 5.3.1 Platform Qualification Plan |

                    

Separating the qualification of platforms from the validation of GxP applications means that adding or changing an application will **not affect the qualified status of the platform** (unless the change involved modifications to the platform).

                    

                        
- GxP application validation → managed by **Validation Plans** (per GAMP 4)

                        
- Platform qualification → managed by **Platform Qualification Plans**

                    

                    

The Platform Qualification Plan should reference:

                    

                        
- Applicable company policies and requirements

                        
- Any specific requirements derived from the applications or services the platform is intended to support

                        
- Any existing pre-qualified building blocks (e.g., standard server building block qualification packages)

                        
- Required new or referenced processes

                        
- Any new or modified SOPs

                    

                    

GAMP categorization of the platform assists with developing an appropriate qualification strategy. During preparation of the plan, an **initial high level Risk Assessment** should be performed based on the platform's potential to cause harm to those records and functions that the system/data owner has identified as critical.

                    

The Platform Qualification Plan should include or refer to:

                    

                        
- Responsibilities for qualification

                        
- Life cycle activities

                        
- Deliverables — specifications, test plans, test data, and reports, preferably organized to generate building blocks

                        
- Timelines and interdependencies

                        
- Required reviews and approvals

                        
- Constraints and prerequisites

                        
- Overview of IT Infrastructure platforms, components, and boundaries

                        
- Critical records managed by the platform

                        
- Training requirements

                        
- Initial Risk Assessments

                        
- Need for verification of operational procedures

                    

                    

QA should **approve the Platform Qualification Plan and corresponding report** to ensure it addresses all expected regulatory and security-related expectations.

                    

                

                

                    

### Qualification Planning Deliverables Table |

                    

                        

#### Platform vs. Application Qualification: Separation of Concerns |

                        

The explicit separation of Platform Qualification Plans from Application Validation Plans is a strategic design that enables "horizontal" (platform-based) qualification. When a platform is pre-qualified, multiple GxP applications can leverage that qualification without re-executing the same infrastructure tests — dramatically reducing total validation effort.

                        

                    

                    

                        

#### Timeline Interdependency Example |

                        

For a new IT Infrastructure: **network qualification must complete before hardware/server/client qualification commences**. However, separate teams could perform work in parallel on a given network qualification, utilizing pre-qualified client building blocks. Planning must capture these dependencies explicitly.

                    

                

            

            

                

## Considerations for Legacy Platforms

                

            

        

        

            

                

                    

### Legacy Platform Definition & Approach |

                    

A **legacy platform**, in the context of this Guide, is a platform that has been in use for some time **without any formal qualification**.

                    

Key questions for such a platform include:

                    

                        
- What are the functional, performance, and security requirements for the platform?

                        
- What is the status of existing processes?

                        
- Is there an established QMS or a list of SOPs?

                        
- Is there an updated inventory, high level network diagram, or configuration item list?

                    

                    

                        

#### Experience Report |

                        

For a legacy platform that is running in a substantiated satisfactory manner, any intensive testing of the system may affect the continued operation. Therefore, consideration should be given to the production of an **'Experience Report'** that summarizes the inventory and operational status and history of the platform, as a basis for further planning.

                        

                    

                    

Given the often extensive nature of IT Infrastructures, **qualification of legacy platforms is likely to be a significant exercise** that should be carefully planned, budgeted, and resourced. This is further complicated by the fact that the IT Infrastructure is subject to a high degree of change.

                    

### 5.3.2.1 Determining Extent of Qualification |

                    

The legacy IT Infrastructure should be **audited against company procedures and current regulatory expectations**. Gaps should be identified and documented; Risk Assessments should be used to justify which legacy platforms require qualification to remediate identified gaps.

                    

Key regulatory and business drivers for qualifying the IT Infrastructure include:

                    

                

                    

### Legacy Qualification Strategy & Testing Priorities |

                    

                        

#### 5.3.2.2 Existing Documentation |

                        

Maximum use of existing documentation should be made to minimize timelines and rework effort. Focus should be on the **required document content being present and accurate**, rather than document formatting.

                        

It is probable that relevant information and documentation for the support of platform qualification will already exist within **application validation documentation and records**.

                        

                    

                    

                        

#### CDMO Real-World Context | CDMO

                        

Most CDMOs inheriting IT infrastructure from a parent company or previous owner face this exact scenario. A common approach: generate an Experience Report documenting the current state, perform a gap analysis against GAMP/21 CFR Part 11 requirements, and use the risk assessment to prioritize remediation — focusing first on access control, backup, and data integrity controls for GxP systems, before addressing documentation formatting issues.

                        

                    

                    

                        

### Legacy Platform Qualification Planning Checklist |

                    

                        

                        

                        

                        

                        

                        

                        

                        

                        

                        

                        

                        

                    

                

                

                    

### Comparing New vs. Legacy Qualification Approach |

                    

            

            

                

## Section Summary & Key Takeaways

                

            

        

        

            

                

                    

### Core Principles Summary |

                    

                        

#### Chapter 3 — QMS for IT | ITQMS

                        

                            
- IT infrastructure needs its own QMS with 9 defined elements

                            
- QA approves the IT Quality Manual, Qualification Plans, and audit findings

                            
- Testing rigor is proportional to impact and risk of the component

                            
- Periodic Reviews maintain qualified status throughout operational life

                            
- IT staff must not independently assess GxP compliance

                        

                    

                    

                        

#### Chapter 4 — Risk Management |

                        

                            
- 5-step process: Identify → Assess → Implement Controls → Assess Changes → Monitor

                            
- CIA triad (Confidentiality, Integrity, Availability) maps to GxP hazard categories

                            
- Non-GxP systems on GxP infrastructure must be included in risk assessment

                            
- Risk assessment is iterative — not a one-time event

                            
- Every change to a qualified component requires risk assessment

                        

                    

                    

                        

#### Chapters 5.1–5.3 — Qualification Planning |

                        

                            
- Two qualification strategies: Building-Block (preferred) vs. Case-by-Case

                            
- IT lifecycle V-model: Planning → Specification → Risk Assessment → IQ → OQ → Report → Operations → Retirement

                            
- Platform Qualification Plan must be approved by QA before any qualification activity

                            
- Platform qualification is separate from application validation — enabling horizontal reuse

                            
- Legacy platforms: gap audit → risk assessment → Experience Report → targeted IQ/OQ

                            
- Re-installation of working legacy systems for IQ docs is generally not appropriate

                        

                    

                

                

                    

### How This Section Connects to CDMO Operations | CDMO

                    

                        

#### Self-Assessment Checklist for Your Site |

                        

                            
- Does your site have an IT Quality Manual approved by QA?

                            
- Are IT roles and responsibilities formally documented?

                            
- Is there a risk assessment covering all IT components supporting GxP applications?

                            
- Do all qualified IT components have an IQ/OQ on file?

                            
- Does your change control process cover IT infrastructure changes?

                            
- Is there a Platform Qualification Plan for each qualified platform type?

                            
- Are periodic reviews of IT infrastructure scheduled and documented?

                            
- For legacy systems — is there an Experience Report or equivalent?

                        

                    

                

            

        

    

↑

## Chapter 2: Specification, Design & Installation Qualification (p36-p47)

ISPE GAMP Good Practice Guide: IT Infrastructure Control and Compliance

  

# Chapter 5.4–5.6: Specification, Design & Installation Qualification

  

  

Source Pages 31–40  |  Chapters 5.4 / 5.5 / 5.6

  
  

    

## IT Infrastructure Specification Hierarchy

        

      

    

    

      

        
        

          

### Specification Hierarchy Diagram /

          

            

              

                User Requirement Specification (URS)
              

            

            ⬇
            

              

                Functional Specification (FS)
              

            

            ⬇
            

              

                Design Specification (DS)
              

            

            ⬇
            

              

                Configuration Items List (CIL)
              

            

          

          

            

#### ⚠ Key Principle —

            

Design specifications must be produced based on **approved requirements** and must be **verified during qualification**. Traceability from URS through to IQ/OQ records is mandatory.

            

          

        

        
        

          

### Pharma IT — Why Specifications Matter /

          

            

#### URS — User Requirement Specification /

            

              
- Captures business, regulatory, and GxP requirements in plain language

              
- Inputs: company policies, application requirements (functionality, capacity, security)

              
- Output: reusable, generic requirement specs per platform component type

              

            

          

          

            

#### DS — Design Specification /

            

              
- Produced from the approved FS/URS — describes actual technical implementation

              
- Includes topology diagrams, hardware configs, OS parameters, network settings

              
- Forms the basis for procurement and IQ verification

              

            

          

          

            

## Networks — Specification and Design

        

      

    

    

      

        
        

          

### Network Design Specification Objectives /

          

Network design specifications should be established to:

          

            
- Define the topology and diagrams of the network to address segmentation, network performance, and security considerations

            
- Serve as basis for procurement of network parts

            
- Act as an overview of topology for maintenance and inspections/audits

          

          

#### OSI Model — Four-Layer Qualification Framework /

          

The GAMP IT Guide uses an abbreviated OSI model to establish common terminology for qualification activities:

          

Qualification activities on each layer verify connectivity, functionality, and conformance to design specifications **individually per layer**.

          

#### Topology Design Considerations /

          

            
- Segregation of GxP regulated networks from administrative networks

            
- Protection and control of different GxP regulated networks

            
- Need for built-in redundant networks

            
- Serviceability of the network (e.g., via SNMP)

            
- Possible interfaces between segregated networks

            
- Protocols supported in different networks

          

          

Topology diagrams should provide a **high-level representation**. Detailed configuration is kept in dedicated databases, not diagrams, due to the dynamic nature of IT infrastructures.

        

        
        

          

### Network IQ Focus Areas / IQ

          

            

#### GxP Network Segmentation / GxP

            

A critical GxP requirement: **GxP regulated networks must be segregated from administrative networks**. This prevents unauthorized access, contamination of regulated data, and ensures audit trail integrity.

            

          

          

            

#### Topology Diagram Contents /

            

              
- Primary network components

              
- Trunk cables (backbone links)

              
- Dedicated network servers (e.g., DNS servers, DHCP servers)

              
- Key network zones and their GxP classification

              
- Wide area network (WAN) connections and carrier assessment if leased

            

          

          

            

#### 💡 Think of It Like a Pharma Cleanroom Map

            

A network topology diagram is like a cleanroom classification map: it shows which zones are ISO Class 5 (GxP critical) vs. ISO Class 8 (less critical) and the physical boundaries between them. Just as you wouldn't let a visitor walk freely from a corridor into a filling room, you don't let admin traffic flow freely into a GxP network segment.

            

          

          

            

#### SNMP & Managed Networks / SNMP

            

**Simple Network Management Protocol (SNMP)** enables a "managed network" in TCP/IP environments. Network management systems using SNMP should enable computer-aided tracking of network device characteristics, installation, and configuration — critical for maintaining IQ records over time.

            

          

          

            

## Servers, Operating Systems & Storage

        

      

    

    

      

        
        

          

### Server Hardware Specification /

          

When server hardware is installed, it should be based on **supplier recommendations**, including environmental considerations. Configuration information should be included in the platform specifications and checked for compliance during IQ.

          

Redundancy in server building blocks, power supplies, and storage should be considered based on Risk Assessment results.

          

#### Operating System Parameter Categories / OS

          

Most operating systems allow a large number of parameter settings that affect server behavior. These fall into three categories:

          

#### System Time Management /

          

In global IT infrastructure, provision for effective **time synchronization traceable to an international standard** is essential. Key considerations:

          

            
- Traceability to international standard: UTC (Coordinated Universal Time) or TAI (International Atomic Time)

            
- Availability of a reliable time source and preferred dissemination method

            
- Management of summer/winter time offsets

            
- Management of local time offsets

          

          

Time management specifications must be verified during both **IQ and OQ**. Responsibilities for setting/resetting system time must be documented.

          

#### Storage Systems — SAN vs. NAS /

          

Storage specifications must be verified during IQ and OQ. OQ of storage is practical only via a connected server.

        

        
        

          

### Pharma IT Commentary /

          

            

#### Why System Time Is a GxP Critical Parameter / GxP

            

21 CFR Part 11 and EU Annex 11 require that electronic records include accurate, reliable date/time stamps. A server with incorrect time can invalidate batch records, audit trails, and electronic signatures. FDA inspectors regularly check NTP configuration and time synchronization logs.

            

          

          

            

#### Configuration Items List (CIL) /

            

For server IQ, a CIL must be prepared. **Hardware CIL includes:**

            

              
- Make and model of server

              
- Type and amount of memory (RAM)

              
- Number of CPUs and disks

              
- Disk controller type

              
- Additional rebuild information

            

            

**Software CIL includes:**

            

              
- Operating system (name + version)

              
- Service programs / middleware

              
- Service packs, hot fixes, security patches

              
- Access control settings

              
- Network settings (IP, hostname, DNS)

            

            

All CIL items must be identified by version numbers. CIL enables efficient duplication of verified servers.

          

          

            

#### 💡 The "Drug Master File" of IT / IT

            

A server's CIL is like the Drug Master File (DMF) for a pharmaceutical ingredient — it precisely documents everything about the "composition" of your server so it can be reproduced identically. Just as a DMF enables a generic drug manufacturer to reference original data, a CIL enables your team to rebuild or duplicate a server to the exact same validated configuration.

            

          

          

            

#### Peripheral Equipment /

            

Peripherals (label printers, barcode scanners, electronic signature pads, cameras) are typically standardized COTS with embedded firmware. Application specifications should **not deviate** from default factory/corporate standard settings unless specifically required, justified, and documented.

            

          

          

            

## Clients, Support Tools & Data Centers

        

      

    

    

      

        
        

          

### Client Classification Framework /

          

Clients provide users access to shared services and local GxP applications. They should be grouped into categories with different capability and management profiles:

          

Special considerations when classifying clients:

          

            
- Security based on identified risks; use technical controls (auto-lock screensavers with password)

            
- Control of local clocks when used to timestamp electronic records or control time-sensitive processes

            
- Preserving data integrity where regulated electronic records are stored

          

          

#### 5.4.4 Support and Diagnostic Tools /

          

Tools (vulnerability scanners, intrusion detectors, network diagnostics, centralized distribution software) must be carefully selected. Requirements:

          

            
- Tool satisfies company standards and policies (especially security requirements)

            
- Tool delivers required functionality and does **not modify critical records** or affect platform performance

            
- Maintain an inventory of tools used

          

          

#### 5.4.5 Data Centers / Server Rooms /

          

            
- **Location:** ease of access, backbone connectivity, protection from natural disasters

            
- **Space & environment:** adequate space, protection from contaminants, lightning, flooding, earthquakes, intrusion

            
- **Security:** camouflage, trap rooms, fences, guards, gates, access controls, audit logs, cameras, alarms

            
- **Power:** raised floors, UPS (Uninterruptible Power Supply) for required VA/duration during outages

            
- **Grounding & shielding:** planned before construction; compliant with national/international standards

            
- **Cooling:** establish desired rate of air volume changes

            
- **Fire protection:** adequate technologies with reliable detection and trigger systems

          

        

        
        

          

### Practical Commentary /

          

            

#### Image-Based Deployment /

            

For maximum control and efficiency, GAMP recommends preparing and maintaining a **verified client image or installation script**. This image represents one verified installation and is used to duplicate new clients. System-specific installation scripts should be tested on a single standard client instance before mass rollout via centralized distribution.

            

          

          

            

#### GxP Client — Special Controls / GxP

            

              
- **Thick client GxP apps:** the application must be validated per GAMP 4

              
- **Local clock control:** must be formally managed — unauthorized time changes invalidate electronic records

              
- **Data integrity:** where electronic records are stored locally, write/modify permissions must be controlled

              
- **Change management:** all changes to "controlled" clients require formal CM process

            

          

          

            

#### 💡 Data Center as a "GMP Suite" / GMP

            

Think of a data center like a sterile manufacturing suite: both require controlled access (gowning = badge + biometrics), environmental monitoring (temperature/humidity = cooling + UPS), segregation from outside contamination (airlocks = firewall + security zone), and a documented audit trail of who entered and what they did.

            

          

          

            

#### Dual/Triple Data Centers / /

            

Some companies choose to double or triple their main data centers to achieve required assurance of availability. This supports Business Continuity Planning (BCP) and Disaster Recovery (DR) requirements — particularly important for GxP systems where data loss can have product quality and patient safety implications.

            

          

          

            

## Risk Assessment & Qualification Test Planning

        

      

    

    

      

        
        

          

### Risk Assessment Process /

          

Risk assessment is typically an **iterative process**, performed during planning and specification as more information becomes available. As the specification and design is completed, it becomes possible to perform more detailed assessments to establish the appropriate level of qualification testing.

          

GAMP software and hardware categories should be taken into account during these assessments. The design review should provide:

          

            
- Assurance that a chosen design will deliver required results with an acceptable level of risk

            
- Knowledge of critical components or parameters needing special attention in maintenance procedures

            
- Guidance on the appropriate level of supplier assessment required

            
- Identification of critical aspects to be covered by the qualification process

            
- Assessment of IT infrastructure processes and their effectiveness to reduce likelihood of undetected harm

            
- Scope of required qualification testing: what to test, how much to test, test result documentation, acceptance criteria

            
- Level of QA involvement required

            
- Indication of training required

            
- List of new or changed SOPs required to mitigate identified risks

          

          

            "A benefit of using pre-qualified building blocks with standard qualification packages is that following the initial qualification only subsequent **changes** need be assessed for impact and risk."
              
  

          

        

        
        

          

### GAMP Category-Based Test Planning / GAMP

          

            

#### Building Block Qualification Strategy /

            

Once a building block (e.g., a standard Windows Server 2022 image) has been qualified, **duplicates** of this building block may be configured with the main focus being to verify that a duplicate has been produced correctly. This dramatically reduces the testing burden for identical subsequent deployments.

            

          

          

            

#### Risk Assessment Outputs /

            

              
- **Critical component list** — components requiring special IQ/OQ attention

              
- **Supplier assessment level** — which suppliers need audit vs. questionnaire

              
- **Qualification test scope** — what to test, how much, acceptance criteria

              
- **QA involvement level** — full QA sign-off vs. peer review

              
- **Training requirements** — staff who must be trained before operation

              
- **SOP changes required** — new or updated procedures

            

          

          

            

#### 💡 Risk = Probability × Impact / = ×

            

In pharma process validation, we don't test every parameter equally — we focus testing effort on critical process parameters (CPPs) that most directly affect critical quality attributes (CQAs). The same principle applies in IT: risk assessment identifies the "CPPs" of your IT infrastructure (e.g., NTP sync, access controls, audit trail settings) that need the most rigorous qualification testing.

            

          

          

            

### GAMP Testing Category Decision Table / GAMP

        

          

#### ⚠ How to Use This Table /

          

This decision table is a guide — actual categorization must be determined by your site's risk assessment. A single component may require different testing levels for different parameters (e.g., a router's physical installation = Confirmation; its GxP network segmentation configuration = Confidence or Full). Always document the rationale for your testing level selection.

          

        

      

    

  

  
  

    

      

5.6.1

      

        

## Procurement & Supplier Evaluation

        

      

    

    

      

        
        

          

### Procurement Principles /

          

Components and services should only be procured from suppliers who can demonstrate:

          

            
- An **acceptable quality level**

            
- **Effective support**, commensurate with the expected lifetime of the item

            
- Support level appropriate to the **risk associated with the failure** of the item

          

          

Upon receipt, goods should be:

          

            
- Checked for compliance with **order specifications**

            
- Labeled as needed

            
- Stored in a safe place to facilitate subsequent safe installation

          

          

Options before site installation:

          

            
- **Brief power-on tests** — verify basic operation before transporting to target site

            
- **Factory Acceptance Test (FAT)** — stage entire assemblies at supplier's premises; run formal FAT before transport

          

          

#### Supplier Classification /

          

            

##### ✅ Approved /

            

Delivery history or gathered information is satisfactory. Note: this classification is not always given following the first audit since there are often issues to rectify. Depending on the issues, such a scenario should not necessarily be seen as a problem.

            

          

          

            

##### ⚠ Conditionally Approved /

            

Delivery history or gathered information is *not fully satisfactory*. Mitigation may include closer follow-up, more intensive tests, and witnessing than otherwise justified.

            

          

          

            

##### ❌ Not Approved /

            

Information or delivery history is *inadequate or unsatisfactory*. Procurement from this supplier is not permitted for GxP-relevant items until issues are resolved.

            

          

          

On-site supplier assessments performed or overseen by QA should be considered when deliveries support **GxP regulated activities**.

        

        
        

          

### Supplier Assessment in Pharma IT Practice / IT

          

            

#### COTS vs. Custom Procurement Strategy / COTS

            

**COTS (Commercial Off-The-Shelf):** Preferred for standard infrastructure components. Lower supplier assessment burden because vendor certification, testing evidence, and market history are available. Examples: Windows Server, Oracle DB, Cisco switches, VMware.

            

**Custom/bespoke:** Higher supplier assessment required. Vendor must demonstrate development process quality, testing capability, and regulatory knowledge. Factory Acceptance Tests (FAT) are strongly recommended.

            

            

          

          

            

#### Supplier Assessment Criteria /

            

A thorough supplier evaluation for GxP IT infrastructure typically covers:

            

              
- **Quality Management System:** ISO 9001, ITIL, or equivalent; documented processes for development, testing, and change management

              
- **GxP/Regulatory knowledge:** familiarity with 21 CFR Part 11, EU Annex 11, GAMP, FDA/EMA expectations

              
- **Technical capability:** competency in the specific technology area; qualified technical staff

              
- **Delivery history:** on-time delivery, defect rates, recall history

              
- **Support capability:** SLA commitments; 24/7 support if required; patch/update frequency; end-of-life policy

              
- **Security posture:** data security practices; vulnerability disclosure process; supply chain security

              
- **Financial stability:** assurance of continued support over the product lifetime

              
- **References:** other pharmaceutical or regulated industry customers

            

          

          

            

#### 💡 Like a Drug Substance API Supplier Audit

            

Qualifying a GxP IT supplier is analogous to qualifying an API (Active Pharmaceutical Ingredient) manufacturer: you don't just buy and use — you audit their facility, review their quality system, check their batch records (equivalent to test reports), and approve them before first use. For IT suppliers, "facility" = their development and support processes; "batch records" = software development documentation and test evidence.

            

          

          

            

#### Factory Acceptance Test (FAT) /

            

FAT is performed at the supplier's premises before equipment is shipped to the pharma site. Benefits:

            

              
- Identifies issues before transport — cheaper and faster to fix at factory

              
- Supplier engineers are present — immediate technical support

              
- Reduces IQ time on site — some tests can be credited from FAT

              
- Documented FAT results become part of the IQ package

            

          

          

            

## Installation & Installation Qualification (IQ)

        

      

    

    

      

        
        

          

### IQ Scope and Principles / IQ

          

Installation and integration methods must comply with company standards, and be based on:

          

            
- Supplier recommendations

            
- Good Engineering Practice (GEP)

            
- Good workmanship

          

          

IQ verifies that the required physical hardware and software components have been **installed and configured correctly** in accordance with the platform and design specifications.

          

#### 5.6.2.1 Documentation Verification /

          

During IQ, the adequacy of the following documentation should be verified:

          

            
- Design specification

            
- Hardware and software descriptions

            
- System operation manuals

            
- Technical manuals

            
- System use SOPs (may be in draft at IQ; verified at OQ)

            
- Network topology diagram (physical layout)

            
- Network logical diagram (switching capability and resilience)

            
- Landscape overview (depiction of environments for operation and maintenance)

            
- System labeling convention (wiring closets, cables, equipment)

            
- Cable lists as appropriate

            
- Logical address lists (IP addresses, hostnames)

            
- Supplier documentation (system configuration details and installation guides)

          

          

All critical items must be managed by the **Configuration Management process**, including change management.

          

#### 5.6.2.2 Environmental Conditions /

          

            
- Temperature and humidity (especially in server rooms)

            
- Electrical power and circuit protection documentation verification

            
- Wiring, cabling, termination/connection documentation verification

            
- Normal power up/power down verifications

          

          

#### 5.6.2.5 Network IQ — Physical Layer / IQ

          

In new facilities, cables should be prepared, installed, inspected, and tested per recognized standards (e.g., ISO/IEC 11801 or ANSI/TIA/EIA 568B). Physical layer test considerations:

          

            
- Environmental factors: heat, dust, moisture, Electromagnetic Compatibility (EMC)

            
- Physical strength of fiber cables

            
- Connectors and terminations

            
- Transmission performance: attenuation, refraction

          

          

Test results must be annotated with **actual values recorded**, and signed and dated per company procedures.

        

        
        

          

### IQ Execution Commentary / IQ

          

            

#### Building Block IQ Efficiency / IQ

            

The building block concept maximizes qualification efficiency. Once a building block is qualified:

            

              
- Prepare installation scripts in advance for producing duplicates (based on images)

              
- Verify that the installation script produces an identical duplicate during initial qualification

              
- For subsequent deployments, the main IQ focus is verifying that the duplicate was produced correctly

              
- This approach is recognized by GAMP and reduces test burden without sacrificing compliance

            

            

          

          

            

#### IQ Documentation Package / IQ

            

              
- **IQ Protocol:** approved before execution; specifies what to check and acceptance criteria

              
- **CIL (Configuration Items List):** hardware and software inventory with versions

              
- **IQ Report:** completed test records with actual values; deviations logged and resolved

              
- **Network topology diagrams:** physical and logical layouts — verified at IQ

              
- **Environmental records:** temperature, humidity, power verification logs

              
- **Cable test reports:** physical layer test results (actual vs. spec)

              
- **Supplier certificates:** CoC, FAT reports, installation certificates

            

          

          

            

#### Application Connectivity Testing — OUT OF SCOPE at IQ / IQ

            

Application connectivity testing is outside the scope of infrastructure IQ. It is verified as an integral part of the **system validation effort (OQ/PQ)**. Application testing must *not commence* until formal handover of the infrastructure has been completed — typically via a formal handover certificate or acceptance/sign-off of qualification activities by the application team.

            

          

          

            

#### 💡 IQ = "New Cleanroom Commissioning" / IQ =

            

IQ for a server is like commissioning a new cleanroom: you verify that the physical structure was built to spec (dimensions, materials), that environmental systems are installed and functional (HVAC, drains), and that all required documentation is in place — before you ever introduce product or run any process in it. You're verifying the "as-built" state against the "as-designed" state.

            

          

          

            

### IQ Activities by Component Type / IQ

        

    

  

  
  

    

      

✅

      

        

## IQ Checklist — Common Pharma IT Components

        

      

    

    

      

        
        

          

### Windows Server IQ Checklist / Windows Server IQ

          

            
- Server make, model, and serial number verified against purchase order and DS

            
- Hardware components (CPU, RAM, disk) match hardware CIL

            
- RAID configuration matches DS; array status healthy (no degraded drives)

            
- Redundant power supplies present and both active

            
- Windows Server OS edition and version number match software CIL

            
- Service pack and cumulative update level match CIL

            
- Required hot fixes and security patches installed per site security patch policy

            
- Non-default OS parameters set per DS (Category 2 parameters)

            
- Blank-field parameters completed per DS (Category 3 parameters)

            
- Computer name (hostname) matches logical address list in DS

            
- IP address, subnet mask, default gateway, DNS servers match logical address list

            
- Domain membership confirmed (if applicable)

            
- NTP server configured; time synchronization active; time zone set to correct local zone

            
- System time verified against traceable standard (UTC-traceable NTP source)

            
- Local administrator accounts and password policy match security specification

            
- Account lockout policy configured per site security baseline

            
- Windows Firewall or host-based firewall configured per DS

            
- Remote Desktop / administrative access restricted to authorized personnel

            
- Anti-virus / endpoint protection installed and updated per CIL

            
- Server management software (IPMI/iDRAC/iLO) accessible and configured

            
- Physical server labeled per site labeling convention

            
- All IQ documentation (protocol, CIL, manuals, SOPs) reviewed and verified adequate

          

          

### Oracle Database IQ Checklist / Oracle IQ

          

            
- Oracle Database version and patch set match software CIL

            
- Oracle home directory location matches DS

            
- Database instance name (SID/PDB name) matches DS

            
- Character set (e.g., AL32UTF8) matches application requirements in DS

            
- Tablespace configuration (SYSTEM, SYSAUX, TEMP, UNDO, application tablespaces) matches DS

            
- Database storage allocation (datafile sizes, autoextend settings) matches DS

            
- Database parameter file (init.ora / spfile) settings match DS

            
- Oracle listener configured and operational; listener port matches DS

            
- Database-level auditing enabled per GxP requirements

            
- Audit trail log location and retention period configured per DS

            
- Oracle database user accounts created per DS; default accounts locked/expired

            
- DBA access restricted to authorized personnel only

            
- RMAN backup configuration matches backup strategy in DS

            
- Database memory allocation (SGA, PGA) matches performance specification in DS

            
- Oracle alert log accessible and showing no critical errors after installation

          

        

        
        

          

### VMware ESXi IQ Checklist / VMware ESXi IQ

          

            
- ESXi version and build number match software CIL

            
- vCenter Server version match software CIL (if applicable)

            
- Physical host hardware validated per server hardware checklist (above)

            
- ESXi hostname and management IP address match logical address list

            
- ESXi management network VLAN tag matches network DS

            
- NTP configuration on ESXi host active; time synchronized with site NTP server

            
- Storage datastores (NFS, iSCSI, local) configured per DS; accessible from host

            
- Virtual distributed switch (vDS) or standard switch configuration matches network DS

            
- VLAN configurations on virtual switches match network segmentation design

            
- High Availability (HA) and Distributed Resource Scheduler (DRS) settings match DS

            
- ESXi host firewall rules match security specification

            
- ESXi administrative access restricted; root password changed from default

            
- SSH and ESXi Shell disabled unless explicitly required by DS

            
- Each GxP VM: vCPU count, vRAM, vDisk sizes, and network adapter connections verified against individual VM DS

            
- VM snapshots policy and naming convention per DS

            
- ESXi/vCenter event and alarm monitoring configured and functional

            
- Syslog target configured for centralized log management per DS

          

          

### Network Switch IQ Checklist / IQ

          

            
- Switch make, model, serial number verified against order specifications and DS

            
- Switch firmware / IOS version matches software CIL

            
- Switch hostname matches logical naming convention in DS

            
- Management IP address matches logical address list in DS

            
- Switch placed in correct rack location per physical topology diagram

            
- Physical cable connections verified against cable list; cables labeled per convention

            
- VLAN database configured per network DS; GxP VLANs separated from admin VLANs

            
- Trunk ports configured between core/distribution/access switches per topology

            
- Spanning Tree Protocol (STP) configuration matches network design (mode, priority)

            
- Port security (MAC address filtering) enabled on access ports per security specification

            
- Unused ports disabled per security hardening baseline

            
- SNMP community strings configured per DS; SNMPv3 used if required by security policy

            
- SNMP trap destination points to network management system per DS

            
- NTP synchronization configured and active on switch; synced to site NTP server

            
- Switch management access restricted (SSH only; Telnet disabled); privileged access password changed

            
- Physical cable test reports (Layer 1) showing actual values — on file and meeting ISO/IEC 11801 / ANSI/TIA/EIA 568B standards

            
- Switch configuration file exported and stored in configuration management system

            
- Connectivity test: key endpoints on each VLAN can communicate as designed; cross-VLAN routing blocked except via firewall

          

          

            

## Section Summary & Key Takeaways

        

      

    

    

      

        

          

### Core Principles — English Summary

          

            

#### 5.4 Specification & Design

            

              
- Specification hierarchy: URS → FS → DS → CIL; all traceable through to IQ/OQ

              
- Networks: topology diagrams essential; GxP network segregation mandatory; SNMP for managed networks

              
- Servers: hardware CIL + software CIL required; OS parameter Categories 1/2/3 determine documentation scope

              
- System time: traceable to UTC; verified at IQ and OQ; responsibilities documented

              
- Storage: SAN vs. NAS design depends on load and topology; OQ via connected server

              
- Clients: three-tier classification (un-restricted / restricted / controlled); image-based deployment for GxP clients

              
- Data centers: UPS, cooling, physical security, fire protection — all must be specified and verified

            

          

          

            

#### 5.5 Risk Assessment & Test Planning

            

              
- Iterative process: starts at planning, refines as design is completed

              
- GAMP categories determine testing level: No Testing → Confirmation → Confidence → Full

              
- Building blocks: qualify once, then verify duplication — maximizes efficiency

              
- Risk assessment outputs: critical component list, supplier assessment level, test scope, QA involvement, training needs, SOP changes

            

          

          

            

#### 5.6 Procurement, Installation & IQ

            

              
- Supplier classification: Approved / Conditionally Approved / Not Approved; GxP items from approved suppliers only

              
- FAT option: verify at supplier's premises before transport — cheaper to fix issues at factory

              
- IQ scope: documentation verification + environmental conditions + server/OS/network configuration verification

              
- IQ documentation: CIL, topology diagrams, cable test reports, environmental records, supplier certificates

              
- Application testing: NOT permitted before formal infrastructure handover; must wait for IQ sign-off

              
- CIL enables efficient server/client duplication for subsequent validated deployments

            

          

        

        

          

### —

          

            

#### 5.4

            

              

              

              

              

              

              

              

            

          

          

            

#### 5.5

            

              

              

              

              

            

          

          

            

#### 5.6 IQ

            

              

              

              

              

              

              

            

          

          

            

#### 💡 The "Jigsaw Puzzle" of IT Qualification

            

IT qualification is like a jigsaw puzzle: URS defines what the completed picture looks like (patient safety + product quality); FS and DS define how the pieces are shaped; risk assessment decides which pieces need to be individually verified vs. bulk-checked; IQ confirms that each piece is in the right position; OQ and PQ confirm that the completed picture actually works. Without a complete picture of the IQ layer, you cannot reliably build the OQ and PQ layers on top.

            

          

        

      

    

  

⇧

## Chapter 3: OQ, Maintaining Qualified State & Retirement (p48-p56)

ISPE GAMP Good Practice Guide: IT Infrastructure Control and Compliance

    

# Chapters 5.7–7: OQ, Operations & Retirement

    

    

Source Pages: pp. 41–48  |  Chapters 5.7, 5.8, 6.1–6.13, 7

    

## OQ and Acceptance |

            

Operational qualification testing for IT platforms — the final stage before handover

        

    

    

        

            
            

                

                

The final stage of Qualification is to confirm that the IT Infrastructure component operates in an expected manner as defined in appropriate specifications.

                

Provided the platforms are all commercially available standard products, the focus of OQ should be to test **connectivity** and where applicable **capacity** using integrated or computerized tools, rather than core functionality.

                

At a minimum, OQ should consist of a set of instructions to be followed, which describe the necessary test steps, expected results, and evidence to be collected. OQ should be based on the outcome of the Risk Assessments already carried out to verify that the sum of requirements derived from serviced applications, if applicable, are met.

                

**Typical tests to consider would include:**

                

                    
- Verification of key Data Management Software (e.g., database connectivity)

                    
- Verification of all permanent IP-addresses, and response times under conditions specified by the Qualification Plan

                    
- Verification of the routing pattern under conditions required by the Qualification Plan (e.g., trace network packet to destination)

                    
- Verification of security settings across all platform components and checking that default passwords have been altered

                    
- Verification of critical firewall features — positive and negative testing

                    
- Verification of key Operating System (OS) functionality (e.g., accessibility to defined disk volumes)

                    
- Verification of time synchronization

                

                

Tests should be traceable to requirements where appropriate. In simple cases, IQ and OQ may be combined in one activity; however, the sequence of installation followed by operational testing should be maintained unless pre-qualified building blocks are used.

            

            
            

                

### Commentary & CDMO Application |

                

                    

#### What is OQ for IT Infrastructure? | ITOQ

                    

OQ (Operational Qualification) for IT platforms is NOT about testing software features. It proves that the **platform operates as intended** — connectivity works, security is configured, time is synchronized. Think of it as testing the "road" before allowing "cars" (applications) to drive on it.

                    

                

                

                    

#### OQ Test Categories for IT | IT OQ

                    

                

                    

#### Key OQ Principles | OQ

                    

                        
- **Risk-based scope:** OQ tests are derived from the Risk Assessment output — not everything needs testing, only what matters for GxP applications.

                        
- **Firewall negative testing:** You must prove the firewall BLOCKS what it should block, not just that it allows what it should allow.

                        
- **Traceability:** Each test should link back to a documented requirement.

                        
- **IQ+OQ combined:** Allowed for simple systems, but installation sequence must always precede operational testing.

                    

                

                

                    

### OQ Activity Summary Table | OQ

        

    

        

5.8

        

            

## Reporting and Handover |

            

Qualification report content and handover from project team to operations

        

    

    

        

            

                

                

Following the successful execution of Installation and Operational Qualification specifications and closure of any issues, a **report should be written** which confirms that all of the specified activities have been successfully completed, as well as confirming that all the critical processes are described and implemented. The report should be reviewed and approved by QA.

                

Depending on the project characteristics, this could be a single report, one per building block, one per platform, or a combination thereof.

                

The approved report enables platform owners to demonstrate compliance to auditors and inspectors, and provides assurance to application owner(s) that the platforms are in a state of control.

                

Once all these activities have been confirmed and approved, the platform is ready to load the application and any migrated data and platform qualification documentation produced should support the validation of the application(s).

            

            

                

### Commentary & Application |

                

                    

#### Qualification Report — Required Content |

                    

                        
- Reference to the Qualification Plan and applicable specifications

                        
- Summary of IQ and OQ execution results (all tests, pass/fail status)

                        
- Disposition of all deviations and issues found during testing

                        
- Confirmation that critical processes are documented and implemented

                        
- QA review and approval signatures with dates

                        
- Statement that the platform is in a qualified, controlled state

                        
- List of outstanding items (if any), with risk assessment

                    

                

                

                    

#### Handover: Project Team → Operations | →

                    

                        

IQ Complete

                        

→

                        

OQ Complete

                        

→

                        

Issues Closed

                        

→

                        

Report Approved (QA)

                        

→

                        

Handover to Ops

                        

→

                        

Application Load

                    

                    

The handover package should include: qualification documentation, SOPs for ongoing management, configuration baselines, and agreed SLAs with the operations team.

                

                

                    

#### CDMO Perspective | CDMO

                    

In a CDMO, the qualification report for IT infrastructure (e.g., LIMS server, MES platform) is a prerequisite for loading validated GxP applications. Auditors from clients (e.g., Big Pharma) will request this report during technical audits to verify that the underlying platform is controlled before they trust the application data it hosts.

                    

                

                

                    

#### Report Granularity Options |

                    

                        
- **Single report:** Suitable for simple, single-platform deployments

                        
- **Per building block:** Useful for pre-qualified component approach — reusable across projects

                        
- **Per platform:** Best for complex multi-server environments where each platform serves different applications

                        
- **Combined:** Building block summaries rolled into a platform-level report

                    

                

            

        

    

    

        

6

        

            

## Maintaining the Qualified State During Operation |

            

Overview of 13 operational management processes — the ongoing discipline after handover

        

    

    

        

            

                

                

The IT Infrastructure typically changes frequently, sometimes on a daily or hourly basis, depending on the size of the infrastructure. The IT Infrastructure should be maintained in a documented state of control by ensuring appropriate:

                

                    
- Change Management

                    
- Configuration Management

                    
- Security Management

                    
- Server Management

                    
- Client Management

                    
- Network Management

                    
- Problem Management

                    
- Help Desk Provision

                    
- Backup, Restore, and Archiving

                    
- Disaster Recovery

                    
- Performance Monitoring

                    
- Supplier Management

                    
- Periodic Review

                

                

In order to be efficient and cost-effective, the required documented state of control should be achieved and maintained in an appropriate manner, e.g., automatic tools available should be exploited wherever possible. The use of a documented QMS should address all the listed requirements.

            

            

                

### Chapter 6 Operational Management — 13 Processes Overview | 13

                

                    

#### The "Living System" Concept |

                    

Qualification is not a one-time event. IT infrastructure changes daily — patches, new users, network topology updates. The 13 processes are the quality system that keeps the platform in a "state of control" between requalification events. Each process is a gear in the machine. If one gear stops, the whole machine is at risk.

                    

                

            

        

    

    

        

6.1

        

            

## Change Management & Configuration Management |

            

Sections 6.1–6.2: The inseparable pair that controls all platform evolution

        

    

    

        

            

                

### 6.1 Change Management |

                

The change control process **cannot be separated from Configuration Management**. When changes are proposed, both change control and Configuration Management activities need to be considered in parallel, particularly when evaluating impact of changes.

                

Due to the simplicity, the frequency and occasionally the urgency of some changes (e.g., network port patching or security patching), change control procedures need to accommodate timely and effective, yet documented, updating methods.

                

Change management processes should define how changes to configuration items should be managed, and should include an assessment of the impact on supported GxP applications and the extent of re-qualification required, where applicable.

                

### 6.2 Configuration Management |

                

Configuration Management (CM) covers the identification, recording, and reporting of components, including their version, constituent components, and relationships.

                

As a minimum, all items identified as critical for maintaining the qualified state of the platforms should be kept under CM — providing an approved baseline for further evolution and allowing safe restoration of a qualified baseline in case of problems.

                

Components are typically referred to as **Configuration Items (CIs)**. CIs include hardware items, software items, critical parameter settings, documentation, and any other part of the IT Infrastructure that an organization wishes to control.

                

CIs are defined down to the lowest level at which a component can be independently installed, replaced, or modified.

            

            

                

### GxP Impact Analysis | GxP

                

                    

#### Change Control Decision Tree for IT | IT

                    

                

                    

#### Configuration Items (CIs) — Examples |

                    

                        
- **Hardware CIs:** Servers, switches, routers, UPS units, storage arrays

                        
- **Software CIs:** OS versions, application versions, firmware, drivers

                        
- **Settings CIs:** IP address tables, firewall rule sets, NTP server assignments

                        
- **Documentation CIs:** Network diagrams, configuration baseline documents, SOPs

                    

                    

**The CM baseline** = the approved "photograph" of the system at qualification. Any deviation from baseline requires change control.

                    

                

                

                    

#### CDMO Example: Security Patching Urgency | CDMO

                    

A critical vulnerability (e.g., zero-day exploit) requires immediate patching of the LIMS server. The change control process must accommodate this urgency — many regulated companies use an "emergency change" category with: (1) management approval by phone/email, (2) full documentation within 24 hours, (3) retrospective QA review within 5 business days.

                    

                

            

        

    

    

        

6.3

        

            

## Security Management |

            

CIA triad: Confidentiality, Integrity, Availability — protecting regulated data and systems

        

    

    

        

            

                

                

IT Infrastructure security is required both for business purposes and to satisfy various regulations. Lack of security may compromise availability of applications and services, record integrity and confidentiality, reputation with stakeholders, and may lead to unauthorized use of systems that ultimately would impact on product quality.

                

Information security is often characterized as the preservation of:

                

                    
- **Confidentiality** — ensuring that information is accessible only to those authorized to have access

                    
- **Integrity** — safeguarding the accuracy and completeness of information and processing methods

                    
- **Availability** — ensuring that authorized users have access to information and associated assets when required

                

                

Information security is achieved by implementing a suitable set of controls, which could include:

                

                    
- Security incident management

                    
- Intrusion detection

                    
- Server hardening (remove superfluous applications, tools, and blocking unused ports)

                    
- Virus signature updates

                    
- Considerations to origin of software (from approved suppliers only)

                    
- Disaster recovery planning

                    
- User access administration

                

            

            

                

### CIA Triad in Pharma IT | IT

                

                    

#### CIA Triad — GxP Implications | CIAGxP

                    

                

                    

#### Server Hardening Checklist |

                    

                        
- Remove all unnecessary software and services

                        
- Close all unused network ports

                        
- Change all default credentials

                        
- Enable audit logging for all privileged actions

                        
- Configure automatic session timeout

                        
- Apply OS and application security patches on schedule

                        
- Restrict admin access to named accounts only

                        
- Enable intrusion detection / alerting

                        
- Only install software from approved suppliers

                    

                

                

                    

#### Key Regulatory Connection |

                    

**21 CFR Part 11 §11.10:** Requires systems to "limit system access to authorized individuals" — directly maps to Confidentiality controls.

                    

**EU GMP Annex 11 §7.1:** Requires physical and logical access controls for computerized systems.

                    

**Data Integrity Guidance (MHRA/FDA):** Integrity of audit trails depends on security controls preventing unauthorized modification.

                

            

        

    

    

        

6.4–5

        

            

## Server Management & Client Management |

            

Ensuring availability, performance, and security of servers and client devices

        

    

    

        

            

                

### 6.4 Server Management |

                

The objective of the server management process is to ensure that specified requirements for **operational availability, performance, and security** are consistently fulfilled by the server. An important part of the process is to manage the server configuration and changes needed to meet the objectives.

                

The handling and qualification of changes depend on the potential impact that a given change may have on the served platforms and applications. If the change affects GxP applications, the extent of re-qualification required should be considered.

                

### 6.5 Client Management |

                

The objective for the Client Management process is to ensure that specified requirements for operational availability, performance, and security are consistently fulfilled by the client. An important part of the process is to manage preparation, deliveries, adaptations, patching, and security issues for the multitude of stationary and mobile units in use across the organization.

                

The Client Management Group is advised to use **computerized tools** where possible to centrally manage updates, patches, and security scans to enforce corporate policies.

            

            

                

### Practical Guidance |

                

                    

#### Server vs. Client Management — Key Differences |

                    

                

                    

## Network Management & Problem Management |

            

Maintaining network performance and proactively managing infrastructure problems

        

    

    

        

            

                

### 6.6 Network Management |

                

The objective of Network Management is to ensure that specified requirements for operational availability, performance, and security are consistently fulfilled by the network. Fulfillment of this objective involves identification and use of effective and reliable computerized tools, applications, and devices to assist network staff in monitoring and maintaining network performance in support of other platforms and services.

                

**Network diagrams should be updated when the topology changes** during maintenance and the inventory list of components should be updated to reflect the actual network configuration.

                

### 6.7 Problem Management |

                

Problem Management includes control and active management of both problems and errors. A 'problem' is an unknown underlying cause of one or more incidents, and a known error is a problem that is successfully diagnosed, and for which a workaround has been identified.

                

All filed problems should be tracked and resolved via approved channels; those that require changes should be input to the Change Management Group.

                

Problem Management should **trend problem reports** and strive to counteract escalation of problems by providing timely reports to the platform administration, e.g., to avoid severe service degradation caused by growing congestion in a given network segment.

            

            

                

### Commentary & Application |

                

                    

#### Network Management — Key Requirements |

                    

                        
- **Live network diagrams:** Topology documentation must reflect actual configuration — stale diagrams = non-compliance finding

                        
- **Inventory accuracy:** Every switch, router, cable must be tracked in the CM system

                        
- **Monitoring tools:** Use automated tools (e.g., SNMP monitoring, bandwidth analyzers)

                        
- **Alert limits:** Define thresholds; alerts trigger investigation, not just logging

                        
- **Segmentation records:** Document network zones (e.g., GxP vs. non-GxP segments) and firewall boundaries

                    

                

                

                    

#### Problem vs. Incident vs. Change | //

                    

                

                    

#### Trend Analysis — Regulatory Connection |

                    

Trending of problem reports is not just IT best practice — it directly maps to the GxP requirement for CAPA (Corrective and Preventive Action). If the LIMS server generates 15 timeout incidents in a month, trend analysis should trigger a formal CAPA, not just 15 individual tickets. This is what inspectors look for during data integrity audits.

                    

                

            

        

    

    

        

6.8–9

        

            

## Help Desk & Backup / Restore / Archiving |

            

User support infrastructure and data protection — protecting records in regulated environments

        

    

    

        

            

                

### 6.8 Help Desk |

                

The Help Desk process has the goal of providing the day-to-day support to users of the IT Infrastructure with problems, questions, and general support needs. Staff employed in the Help Desk must be **technically skilled** with respect to the actual platforms and technology used in the IT Infrastructure to support the business processes in the company.

                

The Help Desk is typically contacted via a central point (e.g., telephone or using a web application), where the Help Desk case is either solved immediately, or registered in a Help Desk system that manages the Help Desk process.

                

Where a Help Desk case requires the involvement of subject matter experts, the Help Desk service forms the liaison between the user and those experts.

                

### 6.9 Backup, Restore, and Archiving |

                

The backup, restore, and archiving capability of data on any computer platform is essential to preserve the integrity of the information in case of system failures.

                

Whether a given application requires full or incremental types of backup, a **Risk Assessment process** should be applied to achieve an appropriate frequency, commensurate with the acceptable residual risk of losing data for a given period of time, and the resulting impact on business.

                

Archiving is a process that ensures long term availability of data by provisions of safe storage, indexing, and refresh activities.

                

When a request to perform a restoration is received, consideration should be given to whether the person requesting the restoration is **authorized to do so**, and whether they are authorized to view the data being restored. Procedures also should ensure that the restore process does not inadvertently overwrite data that must not be lost.

            

            

                

### Backup/Restore for GxP — Deep Dive | GxP

                

                    

#### Backup Strategy — Risk-Based Decision Matrix |

                    

                

                    

#### Restore Authorization Control |

                    

This is a data integrity issue that inspectors probe: *Who can request a restore? Who can execute a restore? Can the restored data overwrite live production data?*

                    

                        
- Restore requests must be formally authorized (not verbal)

                        
- Restore should go to a sandbox/test environment first when possible

                        
- Prevent overwrite of current production data without explicit approval

                        
- Log all restore activities in the audit trail

                        
- Verify data integrity after restore (record count, checksums)

                    

                

                

        

    

    

        

6.10–11

        

            

## Disaster Recovery & Performance Monitoring |

            

Business continuity planning and ongoing qualification evidence through monitoring

        

    

    

        

            

                

### 6.10 Disaster Recovery |

                

Loss of vital parts of the IT Infrastructure and business applications may have serious impact on the business of a company. With the often complex configuration and interdependence of the infrastructure platforms and business applications, business becomes sensitive to even smaller incidents in the IT Infrastructure and business applications.

                

Therefore, Disaster Recovery is an important part of the company's **Business Continuity Planning**. The primary goal of Disaster Recovery is to **reduce downtime of critical business applications to an acceptable level** following an incident.

                

Disaster recovery is closely related to the identified Configuration Items (CIs) within the Configuration Management process as well as the backup, restore, and archiving process.

                

### 6.11 Performance Monitoring |

                

The objective of performance monitoring is to monitor and record satisfactory operation of the IT Infrastructure as **evidence in support of its continued qualification status**, and secondarily, to ensure fulfillment of the Service Level Agreement (SLA) and any other stated or implied expectations.

                

The review of results or alarms based on this monitoring activity will trigger maintenance, update, support, or disaster recovery activities.

                

To assure that platform performance requirements are continuously met, surveillance procedures should be developed and **alert and action limits defined**.

                

A baseline should be created at the time of installation (or during the Performance Qualification (PQ) of a supported software application), and actual values should be considered based upon those readings.

            

            

                

### DR Planning & Performance for CDMOs | CDMO

                

                    

#### CDMO Disaster Recovery Planning Framework | CDMO

                    

                

                

                    

#### Performance Monitoring — Typical Metrics |

                    

                        
- **CPU utilization:** Alert at >80%; Action at >95%

                        
- **Memory usage:** Alert at >85% of available RAM

                        
- **Disk I/O latency:** Alert when exceeds baseline + 50%

                        
- **Network bandwidth:** Alert at >70% sustained utilization

                        
- **Application response time:** Alert when >SLA threshold

                        
- **Backup job completion:** Alert on any backup failure

                        
- **Error log rate:** Alert when error frequency exceeds trend baseline

                    

                

                

                    

#### Performance Monitoring = Continued Qualification Evidence | =

                    

This is a concept many IT teams miss: performance monitoring data is not just operational — it is **qualification evidence**. When an inspector asks "how do you know your LIMS server is still operating within the qualified state?", the answer is your performance monitoring records and trend reports.

                    

                

                

                    

#### DR Testing Requirement |

                    

A DR plan that is never tested is not a plan — it is a document. Regulatory expectation (particularly for 21 CFR Part 11 and EU Annex 11) is that DR plans are periodically tested (typically annually) and results documented. Test exercises must demonstrate actual data recovery capability, not just that backup files exist.

                    

                

            

        

    

    

        

6.12–13

        

            

## Supplier Management & Periodic Review |

            

Controlling outsourced services and confirming ongoing GxP compliance

        

    

    

        

            

                

### 6.12 Supplier Management |

                

The management of services and deliveries to the IT Infrastructure typically will follow the general policies of supplier management in the regulated company including evaluation of suppliers, selection of suppliers and the management of the relationships with the suppliers. Agreements between the regulated company and the supplier should be documented in **contracts, or SLAs**, and reviewed at appropriate intervals.

                

The regulated company should maintain a **list of approved or preferred suppliers** to ensure that the suppliers meet the company requirements regarding performance, cost, and quality. To mitigate the risk of shortage or unacceptable deliveries from a supplier it may be valuable to have more than one supplier — also known as **'second sourcing'**.

                

To exploit the concept of building blocks, it may be advantageous to set up requirements related to the supplier regarding availability of qualified IT Infrastructure building blocks (e.g., servers, clients, SW-licenses).

                

### 6.13 Periodic Review |

                

Periodic Reviews should establish that procedures meeting current applicable **GxP regulatory requirements** are approved and in use. The review should establish that qualification and operational records, and review reports are complete, current, and accurate. Periodic Reviews are considered in further detail in Appendix 5 of this Guide.

            

            

                

### Supplier & Review Framework |

                

                    

#### IT Supplier Qualification Framework | IT

                    

                

                    

#### Periodic Review — What to Assess |

                    

                        
- Are all current SOPs approved and consistent with actual practice?

                        
- Have any regulatory requirements changed since the last review?

                        
- Are qualification records complete and current?

                        
- Have change controls been properly executed and closed?

                        
- Are problem management trends showing acceptable patterns?

                        
- Are all configuration items documented accurately in the CM system?

                        
- Are supplier SLAs being met? Any supplier issues to escalate?

                        
- Has DR been tested? Results documented and acceptable?

                        
- Are backup schedules being executed and verified?

                    

                

                

                    

#### Second Sourcing — Why It Matters in CDMO | CDMO

                    

Single-source dependency for critical IT components is a business risk. If your only server vendor has a 12-week lead time and a server fails, production can be impacted. CDMOs should identify critical hardware components and ensure at least one alternative qualified supplier or maintain a strategic spare inventory (especially for GxP-qualified servers and network equipment).

                    

                

            

        

    

    

        

7

        

            

## Retirement of Platforms |

            

Decommissioning, data migration, archival, and regulatory record retention requirements

        

    

    

        

            

                

                

Business applications often outlive the underlying platforms, and in such circumstances, data needs to be migrated onto the new platform(s). For example, a validated LIMS application may be operational for many years using modified versions of application software until a desirable version is released which requires a server platform update. Alternatively, the existing platform may no longer comply with company standards and become too cumbersome or even impossible to maintain, as suppliers cease providing support on economically acceptable terms.

                

When a platform is replaced, special consideration should be given to **data migration**, especially when conversion is required as part of the process.

                

**Documented assurance should be provided that:**

                

                    
- All data elements are migrated

                    
- All critical data attributes are preserved (e.g., security settings)

                    
- All supporting data are correctly transferred

                    
- No extra data elements are inadvertently introduced

                    
- Any specified conversions have consistently produced the expected results

                

                

In many cases, it may be appropriate to apply **statistical methods** to obtain the required assurance; in other cases, it may be necessary to devise computerized tools to provide a complete, automated verification. The verification method should be determined by assessing and documenting the risks involved.

            

            

                

### Retirement Planning & Data Migration |

                

                    

#### Platform Retirement Checklist |

                    

                        
- Formal retirement plan approved (project plan + timeline)

                        
- Data migration strategy documented (full migration or archival only?)

                        
- Data migration risk assessment completed

                        
- Verification method selected (100% check / statistical sampling / automated tool)

                        
- New platform IQ/OQ completed before data migration

                        
- Dry run migration executed in test environment

                        
- All data elements migrated — count verified

                        
- Critical data attributes preserved (security settings, audit trail, metadata)

                        
- No extra data elements introduced — verified by comparison

                        
- Data conversion results verified (e.g., format changes produce expected output)

                        
- Old system placed in read-only mode after migration, not immediately destroyed

                        
- Regulatory archive of old system data in compliant long-term storage

                        
- Old hardware decommissioned with data sanitization (NIST 800-88 or equivalent)

                        
- Retirement report written and approved by QA

                        
- CM system updated to remove retired components

                        
- Qualified supplier list updated (retired hardware models removed)

                    

                

            

        

        
        

            

                

### Data Migration Assurance Methods |

                

            

                

### Regulatory Record Retention Requirements |

                

                    

#### Data Sanitization at Retirement |

                    

When retiring a server that hosted GxP data, simply deleting files is not sufficient. Use a recognized standard such as **NIST SP 800-88** (Guidelines for Media Sanitization) to ensure data cannot be recovered from decommissioned hardware. Document the sanitization method and retain the certificate of destruction as part of the retirement record.

                    

                

            

        

        
        

### Common Retirement Triggers |

        

    

        

Q

## Chapter 4: Appendices 1–3: Roles, Risk Assessment & Deliverables (App 1-3)

ISPE

    

# Appendices 1–3: Roles, Risk Assessment & Qualification Deliverables

    

    

ISPE GAMP Good Practice Guide: IT Infrastructure Control and Compliance | App. 1–3 (p52–p67)

    

        

### 1 Introduction

        

Companies are organized in a variety of ways that fit each individual company's mode of operation, size, objectives, geographic layout, culture, etc.

        

Companies typically identify roles and responsibilities in a similar way; this Appendix discusses their interrelationships and a possible way of grouping them together.

        

The term 'owner' is used in this context both as a suggested title for personnel accepting ownership of a given item or process, and for the high level of accountability associated with assuming that role. Often, true ownership can be achieved only by personnel whose primary business objectives are directly dependent on the item's availability and performance.

        

The term 'independent QA' is used to denote the role of the Quality Assurance group as required by regulatory authorities.

        

Executive management is responsible for the successful implementation and qualification of the IT Infrastructure platforms, and commits and empowers resources to ensure adherence to all relevant GxP requirements, and other requirements such as those pertaining to security.

        

The key roles that a company may find useful to identify and allocate resources may include:

        

            
- Executive Management

            
- Project Manager

            
- Application (System/Data) Owner/Administrator/SMEs

            
- Data Owner, if not coincident with the Application (System) Owner

            
- IT Infrastructure Process Owner/Administrator/SMEs

            
- Platform Owner/Administrator/SMEs

            
- Independent QA

            
- IT Quality and Compliance

        

        

Roles should be organized to prevent critical objectives from being overlooked. Job descriptions should be assigned to named individuals. Such decisions should be justified and documented.

        

Technical and managerial staff with appropriate educational background and experience should be available. Provision of training should be planned to ensure the required skills are developed and maintained. Staff should be made aware of any regulatory requirements that apply to their duties, trained in those procedures that are applicable to them, and re-trained as changes occur. Records of training should be maintained.

## Chapter 5: Appendices 4–5: SOPs & Periodic Reviews (App 4-5)

# Appendix 4: Standard Operating Procedures (SOPs) Requirements

    

    

ISPE GAMP Good Practice Guide: IT Infrastructure Control and Compliance | Appendix 4 (p68–p73)

    

        

This Appendix provides guidelines on addressing the individual aspects that may need to be controlled by SOPs and the quality records that should be produced. Detailed selection and organization of documents depends on the circumstances for each company: size, complexity, geographic layout, impact on critical aspects, etc.

        

            "Detailed selection and organization of documents depends on the circumstances for each company: size, complexity, geographic layout, impact on critical aspects, etc."

# Appendix 5: Periodic Review Checklist

    

    

ISPE GAMP Good Practice Guide: IT Infrastructure Control and Compliance | Appendix 5 (p74–p83)

    

        

For the Infrastructure, a Periodic Review should establish that procedures meeting current applicable GxP regulatory requirements are approved and in use. The review also should establish that qualification and operational records and review reports are complete, current, and accurate.

        

Companies may choose, for business reasons, to address non-GxP elements of the infrastructure during Periodic Reviews.

        

Companies should define and agree in advance the topics to cover during specific Periodic Reviews, taking into account possible hazards and risks. The following example checklist may be used when drawing up such a list of topics. Depending on circumstances, companies should select which aspects to include since the complete list will not always be required or appropriate.

## Chapter 6: Appendices 6–9: Security, Patches, Outsourcing & Servers (App 6-9)

# Appendices 6–9: Security, Patch Management, Outsourcing & Server Management

    

    

ISPE GAMP Good Practice Guide: IT Infrastructure Control and Compliance | App. 6–9 (p84–p105)

    

        

### 1. Introduction

        

A defined level of infrastructure security is required to meet business purposes and to satisfy external regulations. Lack of security may compromise availability of applications and services, record integrity and confidentiality, reputation with stakeholders, and may lead to unauthorized use of systems that would impact on product quality.

        

A company should take cultural and practical aspects into consideration when defining the rigor of its approach. Companies may adopt different approaches for specific infrastructure elements, based, e.g., on criticality and risk.

        

### 2. Infrastructure Security Management

        

Infrastructure security management includes all the policies, procedures, requirements, training and audit programs, etc. that a company may define appropriate to safeguard the infrastructure, including information assets.

        

As a minimum, regulated companies need to satisfy the applicable GxP requirements. Relevant documents include the PIC/S Guide, which builds on ISO/IEC 17799:2000 Information Technology – Code of Practice for Information Security Management. The 21 CFR Part 11 contains security requirements focused on electronic records and signatures. RFC 2196, "Site Security Handbook," is another useful source.

        

Security controls, in general, are considerably cheaper and more effective if incorporated at the requirements specification and design stages.

        

### 2.1 ISO/IEC 17799 — Code of Practice for Information Security Management

        

Information security is characterized in the standard as the preservation of:

        

            
- **Confidentiality:** ensuring that information is accessible only to those authorized to have access

            
- **Integrity:** safeguarding the accuracy and completeness of information and processing methods

            
- **Availability:** ensuring that authorized users have access to information and associated assets when required

        

        

The ISO/IEC 17799:2000 is a risk-based method for assessing, evaluating, and managing risks. It provides a framework for developing a security program with 10 sections:

        

            
1. Security Policy

            
2. Organizational Security

            
3. Asset Classification and Control

            
4. Personnel Security

            
5. Physical and Environmental Security

            
6. Communications and Operations Management

            
7. Access Control

            
8. System Development and Maintenance

            
9. Business Continuity Management

            
10. Compliance

        

        

Not all controls will be relevant to all infrastructures. The use of ISO/IEC 17799 as a guide should be adapted to the circumstances of each organization.

        

### 2.2 ISO/IEC 17799 and Regulations

        

Regulatory guidance recommends consideration of these standards, but does not require organizations to be formally accredited. Companies should define a list of ISO/IEC 17799 issues relevant to their infrastructure and map existing policies against applicable sections, using internal audits to demonstrate control to regulatory authorities.

## Chapter 7: Appendices 10–13: Networks, Glossary & References (App 10-13)

# Appendices 10–13: Client Management, Network Management, Glossary & References

    

    

ISPE GAMP Good Practice Guide: IT Infrastructure Control and Compliance | App. 10–13 (p106–p126)

    

        

Personal Computers (PCs) in the form of stationary PC units, laptops, or 'hand-helds' are used by companies in a variety of roles with distinctly different risk profiles depending upon their use. Those that are connected to the company's network may be prepared and maintained according to a set of client types, e.g., unrestricted, restricted, or controlled as described in Section 5 of this Guide.

        

As part of the client preparation process, companies may choose to prepare and verify installation scripts, or use an image-generating tool, which mirrors an image of a released software configuration onto PCs.