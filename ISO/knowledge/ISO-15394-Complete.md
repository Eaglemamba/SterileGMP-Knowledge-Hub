# ISO 15394:2017 — Packaging: Bar Code and Two-Dimensional Symbols for Shipping, Transport and Receiving Labels: Bar code and 2D symbols for shipping and transport labels — Third edition

## Section 1: Foreword, Introduction, Clauses 1–5 (Scope, References, Terms, Concepts, Data Content) (p1-p25)

# ISO 15394:2017 — Packaging: Bar Code & Two-Dimensional Symbols for Shipping, Transport and Receiving Labels

    

Section 1 — Foreword · Introduction · Clauses 1–5: Scope, Normative References, Terms, Concepts & Data Content

    

Pages 1–25  |  Third Edition (2017-11)  |  ISO/TC 122

    
    

        

## Foreword

                

ISO/TC 122 Packaging — Third Edition (2017), cancels and replaces ISO 15394:2009

            

        

        

            

                

                    

### Foreword

                    

ISO (the International Organization for Standardization) is a worldwide federation of national standards bodies (ISO member bodies). The work of preparing International Standards is normally carried out through ISO technical committees. Each member body interested in a subject for which a technical committee has been established has the right to be represented on that committee.

                    

This document was prepared by Technical Committee ISO/TC 122, *Packaging*.

                    

This **third edition** cancels and replaces the second edition (ISO 15394:2009), which has been technically revised. The main changes compared to the previous edition are as follows:

                    

                        
- Clause 5.4 has been restructured

                        
- Clause 5.5 (Data area identification) has been added

                        
- Additional information on label design has been added in 7.1

                        
- A new Figure E.7 has been added and succeeding figures have been renumbered accordingly

                        
- E.3, Figures E.11, E.12, E.13, and Tables E.1 and E.2 have been added

                    

                

                

                    

### 

                    

                        

#### ISO 15394

                        

                        

                            

                            

                            

                        

                    

                    

                        

#### ISO 15394

                        

                    

                

            

        

    

    
    

        

            

I

            

                

## Introduction — Why Standardized Barcodes on Shipping Labels?

                

EDI integration, global traceability, and multi-industry automation

            

        

        

            

                

                    

### Introduction

                    

The use of electronic data interchange (EDI) in association with the physical transport and handling of packages — and when traceability is appropriate, such as that described in ISO 9000 — requires a **clear and unique identifier** linking the electronic data and the transport unit.

                    

Bar code-marked transport labels are in widespread use in global industries. Several different standards exist, each designed to meet the requirements of the specific industry sector. For effective and economic use within and between industry sectors, **one common multi-industry standard is a necessity.**

                    

                        A bar code-marked transport label is designed to facilitate the automation of shipping and handling of administrative operations. The bar code information on the transport label may be used as a key to access the appropriate database that contains detailed information about the transport unit, including information transmitted using EDI.
                    

                    

Two-dimensional symbols may be included to assist in moving large amounts of shipping label or EDI data from sender to recipient and to assist the transportation carrier automated sortation and tracking systems.

                    

This document incorporates the technology, data structure and conformance standards of ISO/IEC JTC 1/SC 31 with the user requirements for shipping labels into a single application standard.

                    

**Related standards:**

                    

                        
- **ISO 22742** — Product packaging (complementary to ISO 15394)

                        
- **ISO 17365** — RF tags on shipping/transport units (same TC 122)

                    

                

                

                    

### 

                    

                        

#### 

                        

                        

                    

                    

                        

#### 

                        

                        

                        

                    

                    

                        

#### 

                        

                    

                

            

        

    

    
    

        

            

1

            

                

## Clause 1 — Scope

                

Shipping, transport and receiving labels at all packaging levels

            

        

        

            

                

                    

### 1 Scope

                    

This document:

                    

                        
- Specifies the **minimum requirements** for the design of labels containing linear bar code and two-dimensional symbols on transport units to convey data between trading partners

                        
- Provides for **traceability of transported units** using a unique transport unit identifier (licence plate)

                        
- Provides guidance on the formatting on the label of data presented in linear bar code, two-dimensional symbol or human-readable form

                        
- Provides specific recommendations regarding the **choice of bar code symbologies**, and specifies quality requirements

                        
- Provides recommendations as to label placement, size and the inclusion of free text and any appropriate graphics

                        
- Provides guidance on the selection of the label material

                    

                    

                        This document is **not applicable** to the direct printing on to kraft coloured corrugated surfaces.
                          
  

                        NOTE: Guidance on direct printing of bar code symbols on to kraft coloured corrugated surfaces is provided in references such as *The Fibre Box Handbook*.
                    

                

                

                    

## Clause 2 — Normative References

                

ISO/IEC 15417 Code 128 · ISO/IEC 15438 PDF417 · ISO/IEC 16022 DataMatrix · GS1 General Specifications

            

        

        

            

                

                    

### 2 Normative References

                    

The following documents constitute requirements of this standard. For dated references, only the edition cited applies; for undated references, the latest edition applies.

                    

                

                    

### 

                    

                        

#### GS1 General Specifications

                        

                    

                    

                        

#### Code 39 vs Code 128 vs GS1-128

                        

                        

                        

                    

                

            

        

    

    
    

        

            

3

            

                

## Clause 3 — Terms and Definitions

                

SSCC · GTIN · AI · HRI · Data Carrier · Quiet Zone and more

            

        

        

            

                

                    

### 3 Terms and Definitions

                    

For the purposes of this document, the terms and definitions given in **ISO/IEC 19762** (Harmonized vocabulary — AIDC techniques) and **ISO 21067** (Packaging — Vocabulary) apply.

                    

Key definitions referenced throughout the standard:

                    

                

                    

### 

                    

                        

#### SSCC vs GTIN vs SGTIN —

                        

                    

                    

                        

#### HRI vs vs

                        

                        

                        

                    

                    

                        

#### Quiet Zone

                        

                    

                

            

        

    

    
    

        

            

4

            

                

## Clause 4 — Concepts

                

Two-layer approach · Transport unit hierarchy · Unique transport unit identifier · Label formats

            

        

        

            

                

                    

### 4.1 Principles — Two-Layer Approach

                    

The purpose of a bar code label is to facilitate the **automatic exchange of data among all members within a channel of distribution**, i.e., supplier, carrier, purchaser and other intermediaries.

                    

Where a bar code label is used in conjunction with electronic databases and/or EDI systems, the amount of data may be significantly reduced and may consist of only **one piece of data: the unique identifier for the transport unit**.

                    

Trading partners have different information requirements. Some information may be common to two or more trading partners, while other information may be specific to a single trading partner. Information becomes available at different times:

                    

                        
- **Product-specific information** at the point of manufacture or packaging

                        
- **Order processing information** at the time of processing the order

                        
- **Transport information** at the time of shipment

                    

                    

### 4.2 Transport Unit Hierarchy

                    

**4.2.1 Transport Package** — A package intended for transportation and handling of one or more articles, smaller packages, or bulk material.

                    

**4.2.2 Unit Load** — One or more transport packages held together by means such as pallet, slip sheet, strapping, interlocking, glue, shrink wrap or net wrap.

                    

**4.2.3 Transport Unit** — Both unit loads and transport packages are referred to as transport units in this document.

                    

### 4.3 Unique Transport Unit Identifier

                    

One unique transport unit identifier **shall be assigned** and applied to each transport unit prior to shipment. The identifier ("licence plate") is the key providing access to information stored in computer files and may be transmitted electronically.

                    

The identifier may be used by all trading partners to retrieve information about the transport unit or about the status of its physical movement along the supply chain. **It enables systems to track and trace individual transport units.**

                    

### 4.4 Label Formats

                    

**4.4.1 Base Label** — Includes the *minimum set of data* that fulfils requirements of all trading partners when data is exchanged electronically. A unique transport unit identifier **shall be**, and a "Ship to" name and address **should be**, included. Additional recommended data: Ship from, key to carrier's database, key to customer's database.

                    

**4.4.2 Extended Label** — Used when base label data does not satisfy all trading partner requirements. Organized in three segments:

                    

                        
- **Carrier segment**: Key to carrier's database + shipment ID, delivery instructions

                        
- **Customer segment**: Key to customer's database + customer part number

                        
- **Supplier segment**: Product identification, batch number, dimensions

                    

                

                

                    

### 

                    

                        

#### vs

                        

                        

                    

                    

                        

#### 

                        

                            

                            

▼

                            

                            

▼

                            

                        

                    

                    

                        

#### Base Label vs Extended Label

                        

                        

                    

                

            

        

    

    
    

        

            

5

            

                

## Clause 5 — Data Content

                

SSCC · GTIN · GS1 Application Identifiers · Data representation · Structured data files

            

        

        

            
            

                

                    

### 5.1 Data Representation

                    

**5.1.1 Data in Linear Bar Code Symbols** — Three permissible combinations:

                    

                        
1. GS1 Application Identifiers (AIs) per ISO/IEC 15418 — **only in GS1-128** (subset of Code 128)

                        
2. ASC MH10 Data Identifiers (DIs) per ISO/IEC 15418 — with Code 39 (ISO/IEC 16388)

                        
3. ASC MH10 Data Identifiers (DIs) per ISO/IEC 15418 — with Code 128 (ISO/IEC 15417)

                    

                    

**5.1.2 Data in Two-Dimensional Symbols** — May be used as mutually agreed by trading partners. Data syntax shall conform to ISO/IEC 15434.

                    

**5.1.3 Data in Human-Readable Form** — HRI of linear bar code *should* be provided adjacent to the symbol. Some data may be in human-readable form only.

                    

### 5.2 Data Elements

                    

**5.2.1 Unique Transport Unit Identifier**

                    

Shall be encoded in a linear bar code, preceded by the appropriate GS1 AI or ANSI DI. Structure defined in ISO/IEC 15459-1. It:

                    

                        
- Starts with issuing agency code (IAC)

                        
- Is unique — no issuer re-issues a number until sufficient time has passed

                        
- Contains only numeric and upper-case alphabetic characters

                        
- Does not contain more than 20 characters (including the AI or DI)

                    

                    

The unique transport unit identifier shall be either:

                    

                        
- The **SSCC** using AI "00" in GS1-128, or

                        
- The unique transport unit identifier using ANSI MH10.8.2 Category 10 Data Identifiers for Licence Plates (J–999J) in Code 39 or Code 128

                    

                    

**5.2.2 Ship To** — Address of delivery party. Up to 5 lines, max 35 alphanumeric characters each, or a location number in bar code.

                    

**5.2.3 Ship From** — Address for returns. Same format as Ship To. *Shall be located in the left, upper-most area of the label.*

                    

**5.2.4 Key to Carrier's Database** — Mutually agreed with carrier. May include: carrier tracking number, carrier code for shipment/transport unit.

                    

**5.2.5 Key to Customer's Database** — Mutually agreed with customer. May include: purchase order number, part number, KANBAN/pull signal number, shipment ID.

                    

**5.2.6 Other Data Elements** — As much additional data as required may be included in the extended label.

                

                

                    

### GS1 Application Identifier

                    

            

            
            

                

                    

### 5.3 Concatenating Data Fields in Linear Bar Code Symbols

                    

**5.3.1 Using GS1 Application Identifiers (AI)** — When several AIs and their data are concatenated into one GS1-128 symbol, each *variable-length* field shall be followed by the FNC1 (Function 1) character, unless it is the last field encoded in the symbol. The FNC1 character is transmitted as **GS** (ASCII 29) by the decoder.

                    

**5.3.2 Using ANSI MH10.8.2 Data Identifiers (DI)** — When DIs are concatenated into one Code 39 or Code 128 symbol, each field shall be followed by a plus symbol "**+**", unless it is the last field.

                    

### 5.4 Structured Data Files

                    

**5.4.1 General** — Structured data files (documentation, EDI messages, delivery notes, quality certificates, insurance certificates) may be included in high-capacity 2D symbols. Shall comply with ISO/IEC 15434 syntax or GS1 General Specifications.

                    

**5.4.2 Shipping and Receiving Data** — All linear bar code data may be combined into one single 2D symbol to facilitate more efficient data capture. May also incorporate additional data not represented in linear bar codes.

                    

**5.4.3 Supporting Documentation** — Bill of lading, manifest, packing slip, customs data, or EDI message formats may be encoded in an item-attendant 2D symbol. Structure shall conform to ISO/IEC 15434.

                    

**5.4.4 Carrier Sorting and Tracking** — Sortation data includes routing data, location data, and other tracking support data. Structure shall conform to ISO/IEC 15434.

                    

### 5.5 Data Area Identification

                    

Data areas (whether bar code or human-readable) **shall be identified with the corresponding data area title**. The title may include the relevant AI or DI. Examples from the standard:

                    

                        
- `SSCC:`

                        
- `(400) CUST P O:`

                        
- `(J) LICENCE PLATE:`

                        
- `SHIP FROM:` / `SHIP TO:`

                        
- `GLN:`

                        
- `(Q) QTY:`

                    

                

                

                    

### AI

                    

                        

#### CDMO

                        

                        

                        

                            [FNC1](00)001234567000000015
                        

                        

                        

                            [FNC1](01)07612345678900  

                            (10)TW-2601A[FNC1]  

                            (17)271231  

                            (21)SN0000001[FNC1]
                        

                        

                    

                    

                        

#### FNC1

                        

                        

                            

                            

                        

                        

                    

                

            

        

                        

#### DSCSA / EU FMD AI

                        

                    

                    

    

    
    

        

            

?

## Section 2: Clauses 6–8 (Data Carriers, Label Design, Label Placement) + Annexes A & B (p26-p50)

# Clauses 6–8 & Annexes A–B: Data Carriers, Label Design, Placement & 2D Symbols

  

  

ISO 15394:2017 — Bar Code and Two-Dimensional Symbols for Shipping, Transport and Receiving Labels | p26–p50

  ISO

  
  

    

## Annex A: Linear Bar Code Specifications

      

### A.1 Introduction — Three Options

      

ISO 15394 defines three data-encoding options for linear bar codes on shipping and transport labels:

      

        
- **Option a)** — GS1 Application Identifiers (AIs) with GS1-128 symbology

        
- **Option b)** — ANSI MH10.8.2 Data Identifiers with Code 39 symbology

        
- **Option c)** — ANSI MH10.8.2 Data Identifiers with Code 128 symbology

      

      

Organizations may choose to support a single option or multiple options. Where multiple options are present in a scanning system, **symbology identifiers** (per ISO/IEC 15424) shall be used by host systems to distinguish them.

      

### A.2 Symbology Identifiers

      

The symbology identifier is a prefix transmitted by the decoder but not encoded in the symbol:

      

        
- `]C1` — GS1-128 (FNC1 in first position after start code)

        
- `]A0` — Code 39 with Data Identifiers

        
- `]C0` — Code 128 with Data Identifiers

      

      

For single-option environments: decoders supporting symbology identifiers shall validate the appropriate identifier. Decoders that do not support identifiers cannot automatically distinguish option a) from option c).

      

### A.4 Approved Symbologies

      

Linear bar code symbologies shall be one of:

      

        
- Code 39 — in accordance with ISO/IEC 16388

        
- Code 128 — in accordance with ISO/IEC 15417

      

      

*NOTE: GS1-128 is a subset of Code 128.*

      

### A.5 Symbol Height

      

Minimum bar height of a linear symbol: **12.7 mm**, and should be at least **15%** of the total symbol length including quiet zones.

      

### A.6 X-Dimension (Narrow Element Dimension)

      

        
- Minimum X-dimension: **0.25 mm** (shall not be less)

        
- Code 39 and Code 128: recommended range **0.25 mm – 0.43 mm**

        
- GS1-128 general: recommended range **0.25 mm – 0.81 mm**

        
- GS1-128 SSCC: recommended range **0.50 mm – 0.81 mm** (Serial Shipping Container Code)

      

      

If fewer characters are required, a larger X-dimension may be used provided print quality per A.11 and label width per Table 2 are met. Symbols at 0.25–0.33 mm require special care.

      

### A.7 Wide-to-Narrow Ratio (Code 39)

      

Should be **3.0:1**; measured ratio shall be between **2.4:1** and **3.2:1**.

      

### A.8 Quiet Zones

      

Leading and trailing quiet zones:

      

        
- Should be **≥6.4 mm**

        
- Where X-dimension >0.64 mm: quiet zones shall be **≥10× the X-dimension**

      

      

Printer registration parameters shall be considered to ensure minimum quiet zones are maintained.

      

### A.9 Orientation

      

        
- Flat/slightly curved surfaces: bars vertical — **picket fence orientation** (preferred)

        
- Tightly curved surfaces (tubes, rods, cylinders): bars perpendicular to longitudinal axis — **ladder orientation**

        
- Horizontal (ladder) orientation on flat surfaces: by trading partner agreement only

      

      

### A.10 Placement

      

No more than **two linear symbols** shall appear side by side on a label. If two symbols are placed side by side, they shall not share the same horizontal scan path to prevent scanning interference.

      

### A.11 Print Quality

      

ISO/IEC 15416 determines print quality. Grade format: `grade/aperture/wavelength`.

      

Minimum linear bar code quality: **1.5/10/660**, meaning:

      

        
- Overall symbol grade ≥1.5 (C) at point of production

        
- Measurement aperture: 0.250 mm diameter (reference #10)

        
- Light source: 660 nm ±10 nm

      

      

Environmental effects (shipping, handling, moisture) can degrade symbols. Labellers are not responsible for damage after leaving their facilities. Unattended scanning may require higher print quality grades — agree with trading partners.

    

    

      

## Bar Code Selection Decision Tree

      

        

        

↓

        

        

        

          

**Option a)**  
GS1-128  
X-dim: 0.25–0.81 mm

          

        

        

↓

        

          

          

            

**Option b)**  
Code 39  
X-dim: 0.25–0.43 mm

            

**Option c)**  
Code 128  
X-dim: 0.25–0.43 mm

          

        

      

      

        

#### SSCC SSCC Special Requirement

        

      

      

### X vs

      

      

        

#### 10× Quiet Zone 10× Rule

        

        

        

      

      

        

## B.1 General — Three 2D Application Categories

      

Annex B defines rules for 2D symbol use in three application categories:

      

        
- **B.2** — Shipping and receiving

        
- **B.3** — Supporting documentation

        
- **B.4** — Carrier sortation and tracking

      

      

### B.2 Shipping and Receiving — PDF417

      

Recommended symbologies: PDF417 (ISO/IEC 15438) or QR Code (ISO/IEC 18004). Macro PDF417 and Micro PDF417 shall NOT be used for shipping/receiving applications.

      

### B.2.3 PDF417 Technical Requirements

      

        
- **Error correction:** Minimum level **5**

        
- **X-dimension:** 0.254 mm – 0.432 mm (0.254–0.330 mm requires special care)

        
- **Row height:** Minimum **3× X-dimension**

        
- **Quiet zone:** Minimum **1 mm** on all four sides (included in symbol size calculation)

        
- **Maximum height:** **61 mm**

        
- **Data columns:** Recommended ≤12; maximum 18 columns (13–18 by trading partner agreement)

        
- **Print quality:** Minimum **2.5/10/660** (grade B; ISO/IEC 15415)

        
- **Orientation:** Bars perpendicular to the natural bottom of the label

      

      

### B.2.3.5 PDF417 Symbol Size — Table B.1

      

Maximum PDF417 symbol width using 12 data columns (including quiet zones):

      

### B.2.4 QR Code — Shipping and Receiving

      

        
- **Model:** QR Code Model 2 (ISO/IEC 18004); coupling structure shall NOT be used

        
- **Error correction:** Level M (~15%)

        
- **Module dimension:** 0.33 mm – 0.42 mm

        
- **Quiet zone:** Minimum **4× module size** (4X) on all sides

        
- **Symbol size:** Should be ≤5 cm

        
- **Print quality:** Grade ≥3.0 (B) at point of printing; 660 nm ±10 nm

        
- **Placement:** Within the customer segment of the label

      

      

### B.3 Supporting Documentation — PDF417 & QR Code

      

Supporting data includes bills of lading, manifests, packing slips, customs data. These are NOT on shipping labels and are NOT scanned in the same environment as label symbols.

      

### B.3.3 PDF417 for Supporting Documentation

      

        
- **Error correction:** Variable by data size (Table B.11):
          

            
    - <100 characters → Level 3

            
    - 100–399 characters → Level 4

            
    - ≥400 characters → Level 5 (preferred)

          

        

        
- **X-dimension:** Recommended 0.254 mm

        
- **Row height:** 3× X-dimension

        
- **Quiet zone:** 1 mm all sides

        
- **Print quality:** Minimum 2.5/10/660

        
- **Macro PDF417:** May be used (for concatenation of large data sets >1,200 characters)

        
- **Symbol skew:** Shall not exceed ±5°

        
- **Placement:** Clear of any folds or creases in the document

      

      

### B.4 Carrier Sortation and Tracking

      

Three symbologies are capable of high-speed scanning for carrier applications:

      

        
- MaxiCode (ISO/IEC 16023) — Mode 2 or 3 recommended

        
- PDF417 (ISO/IEC 15438)

        
- QR Code (ISO/IEC 18004)

      

      

### B.4.3 MaxiCode Specifications

      

        
- **Mode:** Mode 2 (numeric postal code) or Mode 3 (alphanumeric postal code)

        
- **Fixed size:** ~28.14 mm × 26.91 mm (not scalable)

        
- **Error correction:** Fixed standard level per ISO/IEC 16023

        
- **Quiet zone:** 1 mm all sides

        
- **Print quality:** Minimum 2.5/10/W (W = broadband light source)

        
- **Placement:** In the carrier segment of the label; labels on top of transport units

        
- **Concatenation:** Two Structured Append symbols maximum; symbols printed side by side

      

      

### B.4.4 QR Code for Carrier Sortation and Tracking

      

        
- **Model:** QR Code Model 2 (concatenation structure shall NOT be used)

        
- **Error correction:** Level M, Q, or H

        
- **Module dimension:** 0.85 mm – 1.5 mm (larger than shipping labels — for high-speed scanning)

        
- **Quiet zone:** 4 modules minimum on all sides

      

    

    

      

## DataMatrix DPM GS1 Digital Link

      

        

#### DataMatrix ECC200 DPM

        

        

          

          

          

          

          

        

      

      

        

#### GS1 Digital Link QR Code —

        

        

          

          

        

        

        

      

      

        

#### PDF417

        

        

          

          

          

          

        

        

        

      

      

        

#### MaxiCode —

        

      

      

        

#### Macro PDF417 —

        

        

          

          

          

          

        

      

      

        

#### 1 — PDF417

        

        

          

          

          

        

      

    

  

  
  
  
  

  

    

      

## 6. Data Carriers — Selection and Requirements

      

### 6.1 General

      

The primary data carrier on a shipping, transport, and receiving label shall be a GS1-128 bar code symbol. This is the mandatory baseline for all labels conforming to ISO 15394.

      

In addition to the primary GS1-128 carrier, supplementary 2D symbols may be included on the label to carry additional data or to serve specific applications such as carrier sorting or supporting documentation.

      

### 6.2 GS1-128 as Primary Data Carrier

      

GS1-128 shall encode all mandatory data elements using GS1 Application Identifiers (AIs). The symbol shall comply with:

      

        
- GS1 General Specifications for GS1-128 encoding rules

        
- ISO/IEC 15417 (Code 128 specification)

        
- X-dimension and print quality requirements per Annex A

      

      

### 6.3 Supplementary 2D Symbols

      

Where supplementary 2D symbols are used, the applicable symbology and its technical requirements shall be as specified in Annex B:

      

        
- **PDF417** — for additional shipping data or supporting documentation

        
- **DataMatrix ECC200** — for specific applications (particularly DPM)

        
- **QR Code Model 2** — for shipping, receiving, or digital link applications

        
- **MaxiCode** — for carrier sortation and tracking (high-speed environments)

      

      

### 6.4 Selection Criteria

      

Selection of the appropriate supplementary 2D symbol depends on:

      

        
- **Data volume:** Total characters to be encoded

        
- **Scanning environment:** Hand-held vs. automated tunnel scanners vs. high-speed sortation

        
- **Label area available:** Label dimensions constraining symbol footprint

        
- **Trading partner requirements:** Carrier, customer, or regulatory mandates

        
- **Printing technology:** Thermal transfer, inkjet, or direct part marking

      

    

    

      

## Four Mandatory Label Zones

      

      

        

        

          

1

          

        

        

          

2

          

        

        

          

3

          

        

        

          

4

          

        

      

      

        

#### GS1-128

        

          

          

          

          

        

      

      

        

#### vs

        

      

      

        

#### 

        

        

          

          

          

          

        

      

    

  

  
  
  
  

  

    

      

## 7. Label Design — Mandatory Requirements

      

### 7.1 Mandatory Data Zones

      

A label conforming to ISO 15394 shall contain the following mandatory zones:

      

        
- **Ship To Zone:** Destination address, postal code, GS1-128 SSCC or routing bar code

        
- **Carrier Zone:** Carrier-specific data; MaxiCode symbol (if using carrier sortation)

        
- **Customer/Product Zone:** GTIN (AI 01), Lot/Batch (AI 10), Expiry Date (AI 17), Quantity (AI 37) encoded in GS1-128; optional QR Code

        
- **Human Readable Information (HRI):** Plain text of encoded AI data, placed directly adjacent to the corresponding bar code symbol

      

      

### 7.2 Minimum Label Sizes

      

Label dimensions shall be sufficient to accommodate all mandatory symbols with required quiet zones. For labels using all mandatory data elements:

      

        
- Minimum label width: **102 mm** (for standard label configuration)

        
- Minimum label height: determined by symbol heights and HRI text

        
- SSCC label (pallet): typically **102 mm × 152 mm** or larger

      

      

### 7.3 X-Dimension and Scanning Distance

      

The X-dimension shall be selected based on the expected scanning distance in the application environment. Key principles:

      

        
- Larger X-dimension → readable at greater distance, but fewer characters per unit area

        
- Smaller X-dimension → higher data density, but requires closer scanning

        
- For automated systems: agree X-dimension with scanner equipment capabilities

      

      

### 7.4 Human Readable Interpretation (HRI)

      

HRI text requirements:

      

        
- Shall be placed immediately above or below the corresponding bar code symbol

        
- Shall display the AI number in parentheses followed by the data: e.g., `(01) 09521234543213`

        
- Minimum font size: sufficient to be read by human operators without magnification

        
- Application Identifiers are shown in parentheses in HRI but are NOT encoded with parentheses in the bar code

      

      

### 7.5 Bearer Bars

      

Bearer bars are horizontal bars running the full width of a linear bar code symbol. They help:

      

        
- Maintain consistent scanning path across the full symbol

        
- Protect symbol from top/bottom edge damage

        
- Improve reading performance on corrugated substrates

      

      

Bearer bars are recommended for linear symbols where the bar code edges may be subject to physical damage or scanning path interference.

      

### 7.6 Color and Contrast

      

Bar code symbols shall meet minimum contrast requirements:

      

        
- Dark bars on light background (black on white is optimal)

        
- Minimum print contrast signal (PCS): per ISO/IEC 15416 measurement

        
- Colored substrates require verification that the contrast meets minimum grade at 660 nm wavelength

        
- Kraft corrugated (brown): may not meet quality requirements — verify with actual scanning tests

        
- Red ink on white background: typically unreadable at 660 nm (red light absorbed by red ink)

      

    

    

      

## Label Design Practice

      

        

#### HRI — AI

        

        

          

          

          

          

        

      

      

        

#### 

        

        

          

          

          

          

        

      

      

        

#### Bearer Bars

        

      

      

        

#### 

        

        

          

          

          

        

        

      

      

        

#### 2 —

        

        

          

          

          

          

          

        

      

    

  

  
  
  
  

  

    

      

## 8. Label Placement — Packaging Hierarchy

      

### 8.1 Primary Packaging

      

For primary packaging (innermost package in direct contact with product), label placement shall ensure:

      

        
- Labels are positioned to be accessible for scanning without removing from secondary packaging, where possible

        
- Labels shall not obscure any safety warnings or mandatory regulatory information

        
- For small primary packages (vials, ampoules, syringes): labels wrap around the container; bar code area should be on the flat-facing surface

      

      

### 8.2 Secondary Packaging (Cartons / Cases)

      

Labels shall be applied to secondary packaging in accordance with trading partner agreements. Requirements:

      

        
- Labels should be applied to the side of the package most likely to face outward during transit

        
- Labels shall be placed so that they are fully visible when the package is in normal shipping orientation

        
- Labels shall not be placed across package edges, seams, or closures where deformation may occur

        
- Minimum placement: one label on one face, per trading partner requirements; multiple faces may be required

      

      

### 8.3 Tertiary Packaging (Pallets)

      

Pallet (transport unit) labeling shall ensure 4-side visibility:

      

        
- Labels shall be applied to **all four sides** of the pallet load OR at minimum two adjacent sides if agreed by trading partners

        
- Labels shall be placed at a height of **400 mm – 800 mm** from the floor (optimal scanning height for forklift-mounted scanners)

        
- Labels shall be applied **adjacent to, but not crossing**, the corner of the pallet

        
- SSCC (Serial Shipping Container Code) is mandatory for each pallet unit

      

      

### 8.4 Placement — Avoidance Rules

      

Labels shall NOT be placed:

      

        
- Across corners, edges, or seams where they may wrinkle or fold

        
- On surfaces subject to condensation, abrasion, or chemical exposure that would degrade readability

        
- Where adhesive failure due to surface characteristics (porous, oily, textured) would cause label loss

        
- In locations blocked by strapping, shrink wrap seams, or other packaging materials

      

      

### 8.5 Environmental and Physical Considerations

      

Labelers shall consider environmental effects during the entire distribution chain:

      

        
- Temperature extremes (cold chain products): adhesive performance at low temperature

        
- Moisture and humidity: label face stock and adhesive water resistance

        
- UV exposure for outdoor storage: ink fading and substrate degradation

        
- Physical abrasion from neighboring packages in transit

      

      

Labelers are not responsible for damage to labels incurred during shipping after leaving the supplier's facility. Every effort should be made to protect and place labels to minimize transit damage.

    

    

      

## Pallet 4-Side Visibility

      

        

#### 4

        

          

            

            

📦

            

          

          

            

            

📦

            

          

          

            

            

📦

            

          

          

            

            

📦

            

          

        

        

      

      

        

#### 4 vs

        

      

      

        

#### 

        

        

          

          

          

          

          

        

      

      

        

#### 3 —

        

        

          

          

          

          

        

      

      

        

#### 4 —

        

        

          

          

          

        

      

      

        

#### 5 — 2D

        

        

          

          

          

          

          

        

      

    

  

⇧

## Section 3: Annexes C–G (Label Examples, Placement Diagrams, Multi-Symbology) + Bibliography (p51-p76)

# ISO 15394:2017 — Section 3: Annexes C–G & Bibliography

    

    

Pages p51–p76 | Bar code and two-dimensional symbols for shipping, transport and receiving labels

    
    

        

### Section Navigator

        

            Bibliography
        

    

    
    

        

## Annex C — Designing compliant labels using a building block approach

                

            

        

        

            

                
                

                    

### C.1–C.2

                    

                    

                    

                        

                        

                        

                    

                    

                    

### C.3–C.4 LPB &

                    

                    

                        

                        

                        

                    

                    

### C.5–C.6

                    

                    

                        

                    

                    

                

                
                

                    

### Pharma CDMO

                    

                        

#### =

                        

                        

                    

                    

                        

#### LPB — CDMO

                        

                            

                            

                            

                            

                        

                        

                    

                    

### Pharma SSCC → GTIN → Serial

                    

                        

                        

                        

                        

                        

↓

                        

                        

                        

                        

                        

↓

                        

                        

                        

                        

                    

                    

                        

#### 

                        

                    

                

            

        

    

    
    

        

            

D

            

                

## Annex D — Industry-specific application guidelines

                

            

        

        

            

                
                

                    

### D.1

                    

                    

### D.2–D.12 12

                    

                        

#### D.10 crossover

                        

                    

                

                
                

                    

### Pharma vs. Automotive AIAG —

                    

                        

#### =

                        

                    

                    

                        

#### CDMO AI vs. DI

                        

                            

                            

                            

                            

                        

                    

                

            

        

    

    
    

        

            

E

            

                

## Annex E — Label examples

                

            

        

        

            

                
                

                    

### E.1 Base label

                    

                    

                        

                        

                    

                    

                    

### E.1.2 Pointers

                    

                    

                        

                        

                        

                        

                    

                    

### E.2 Extended label

                    

                    

                        

                        

                        

                        

                    

                    

                    

### E.3

                    

                    

                    

                        "The packaging label (a) should not be replaced during the life cycle of the package."  

                    

                

                
                

                    

### HTML Mockups

                    

                    
                    

                        

                        

                            

CARRIER SEGMENT

                            

                                

                                    SHIP FROM
                                    ABC Pharma CDMO
                                    123 GMP Way, NJ 07001 USA
                                

                                

                                    SHIP TO
                                    XYZ Pharma Distributor
                                    456 Supply Chain Ave, IL 60601
                                

                            

                            

SUPPLIER SEGMENT — GS1 Healthcare

                            

                                

                                    GTIN (AI 01)
                                    00312345678901
                                

                                

                                    LOT (AI 10)
                                    LOT2026A01
                                

                                

                                    EXP (AI 17)
                                    260930
                                

                            

                            

                                

                                    SERIAL No. (AI 21) — DSCSA
                                    SN20261234567
                                

                                

                                    QTY (AI 37)
                                    100 TAB
                                

                            

                            

                                

                                    

                                    

                                        

                                        (01)00312345678901(10)LOT2026A01(17)260930(21)SN20261234567
                                    

                                

                            

                            

CARRIER SEGMENT — SSCC

                            

                                

                                (00) 0 0312345 000012345 6 — SSCC-18
                            

                        

                    

                    
                    

                        

                        

                            

UDI LABEL — EU MDR / FDA UDI

                            

                                

                                    PRODUCT NAME
                                    Sterile Prefilled Syringe 1 mL
                                    STERILE / SINGLE USE
                                

                                

                                    

                                    DataMatrix
                                

                            

                            

                                

                                    UDI-DI (GTIN)
                                    08806512345678
                                

                                

                                    LOT
                                    MD2026B03
                                

                                

                                    EXP
                                    2027-06
                                

                            

                            

                                

                                    SERIAL (UDI-PI)
                                    SN-20261101-A
                                

                                

                                    REF / Cat. No.
                                    PFS-1ML-26G
                                

                            

                            

                                

                                    Manufacturer: ABC Medical Devices Ltd. | CE 0123 | Notified Body: BSI | EUDAMED: SRN EU-MF-12345678
                                

                            

                        

                    

                    
                    

                        

                        

                            

CARRIER SEGMENT — TOP PRIORITY

                            

                                

                                (00) 0 0999888 000067890 3 — SSCC-18 (AI 00)
                            

                            

CONSIGNEE SEGMENT

                            

                                

                                    SHIP TO NAME
                                    Regional DC — Boston
                                

                                

                                    SHIP TO LOC (AI 410)
                                    0312345000006
                                

                            

                            

SHIPPER SEGMENT

                            

                                

                                    GTIN (AI 02)
                                    00312345678901
                                

                                

                                    BATCH (AI 10)
                                    LOT2026A01
                                

                                

                                    COUNT (AI 37)
                                    2400 EA
                                

                            

                            

                                

                                    BEST BEFORE (AI 15)
                                    2026-09-30
                                

                                

                                    GROSS WT (AI 3302)
                                    48.50 kg
                                

                            

                        

                    

                    
                    

                        

                        

                            

❄ COLD CHAIN LABEL — STORE AT -20°C ± 5°C

                            

                                

                                    KEEP FROZEN  

                                

                            

                            

                                

                                    PRODUCT
                                    Lyophilized mRNA Vaccine
                                

                                

                                    LOT (AI 10)
                                    mRNA2026C01
                                

                                

                                    EXP (AI 17)
                                    261231
                                

                            

                            

                                

                                    GTIN (AI 01)
                                    00380123456781
                                

                                

                                    SERIAL (AI 21)
                                    CC20261100001
                                

                            

                            

                                

                                    STORAGE (AI 7003)
                                    -25°C to -15°C
                                

                                

                                    EXCURSION INDICATOR
                                    WarmMark™ Attached
                                

                            

                            

                                

                                    

                                    

                                        

                                        (01)00380123456781(10)mRNA2026C01(17)261231(21)CC20261100001
                                    

                                

                            

                            

                                

                                    Label material: Cryogenic-grade synthetic paper | Adhesive: Acrylic cold-resistant | Tested to -80°C
                                

                            

                        

                    

                

            

        

    

    
    

        

            

F

            

                

## Annex F — Recommended label locations on various containers

                

            

        

        

            

                
                

                    

### Figure F.1 —

                    

                    

### Figure F.2 — vs.

                    

                    

                        

                        

                    

                    

                

                
                

                    

### Pharma

                    

                        

#### Pallet —

                        

                        

                            

                            

                            

                            

                        

                    

                    

                        

#### Vial / Syringe / Ampule

                        

                        

                    

                        

#### =

                        

                    

                    

                        

#### CDMO SOP

                        

                            

                            

                            

                            

                        

                    

                

            

        

    

    
    

        

            

G

            

                

## Annex G — The impact of systems confronted with multiple symbologies and formats

                

            

        

        

            

                
                

                    

### G.1 —

                    

                    

                        

                        

                        

                    

                    

                    

### G.2

                    

                    

### G.3

                    

                    

### G.4 Migration choices

                    

                    

                        
1. Code 39 + DI → GS1-128 (AI)

                        
2. Code 39 + DI → Code 128 + DI

                        
3. Code 128 + DI → GS1-128 (AI)

                    

                    

                    

                        

#### G.4.3

                        

                            

                            

                            

                        

                    

                    

### G.5

                    

                    

                    

                

                
                

                    

### — CDMO

                    

                        

#### =

                        

                    

                    

                        

#### GS1 + GS1

                        

                        

                            

                            

                            

                            

                        

                    

                    

                        

#### CDMO

                        

                            

                            

                            

                            

                            

                            

                        

                    

                

            

        

                        

#### AI vs. DI

                        

                    

                    

    

    
    

        

            

Bib

            

                

## Bibliography —

                

            

        

        

            

                

                    

### Bibliography

                    

                

                    

### — Pharma

                    

                        

                        

                        

                        

                        

                        

                        

                        

                        

                        

                    

                

            

        

    

    
    

        

            

            

                

## GS1 AI — Pharma & Medical Device

                

            

        

        

            

                

                    

### AIIdentity

                    

### AIMeasurement

                    

                

                    

### / AILocation

                    

### / AI

                    

                        

#### DSCSA T3

                        

                        

                            
- AI 01 — Product Identifier (GTIN)

                            
- AI 10 — Lot Number

                            
- AI 17 — Expiration Date

                            
- AI 21 — Serial Number

                        

                        

                    

                

            

        

    

    
    

        

            

            

                

## 

                

            

        

        

            

                

                    

#### CDMO

                    

                        

                        

                        

                        

                    

                

                

                    

#### **** unit-level 2026

                    

                        

                        

                        

                        

                        

                    

                    

                

            

        

    

    
    

        

            

Check

            

                

## CDMO

                

            

        

        

            

                

                    

### Label Design Phase

                    

                        

                        

                        

                        

                        

                        

                        

                        

                        

                    

                    

### Printing & Verification

                    

                        

                        

                        

                        

                        

                        

                        

                        

                    

                    

### Labelling Operation

                    

                        

                        

                        

                        

                        

                        

                    

                

                

                    

### Serialization / T3 / EMVS

                    

                        

                        

                        

                        

                        

                        

                    

                    

### Documentation

                    

                        

                        

                        

                        

                        

                        

                    

                    

                        

#### CDMO AI 21

                        

```

  TW2026097001234

        
```

                    

                

            

        

    

    
    

        

            

Q&A

            

                

## — ISO 15394 Annex C–G & GS1

                

            

        

        

            

                

### Q1 —

                

                

                    

                    

                        

                        

                        

                    

                

            

            

                

### Q2 —

                

                

                    

                    

                        

                        

                        

                        

                            

                            

                            

                        

                    

                

            

            

                

### Q3 — LPB

                

                

                    

                    

                        

                        

                        

                            

                            

                            

                            

                            

                        

                    

                

            

            

                

### Q4 —

                

                

                    

                    

                        

                        

                        

                    

                

            

            

                

### Q5 —

                

                

                    

                    

                        

                        

                            

                            

                            

                        

                        

                        

                            

                            

                            

                        

                        

                    

                

            

        

    

↑