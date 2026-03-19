# PDA Technical Report No. 60 (Revised 2026): Process Validation: A Lifecycle Approach

> 製程驗證：生命週期方法 完整教學版

## Section 0: Introduction & Glossary 導論與術語 (p1-p10)

# Section 0: Introduction & Glossary

    

導論與術語表 (Sections 1.0 - 2.0)

    

PDA Technical Report No. 60 (Revised 2026): Process Validation: A Lifecycle Approach | p1 - p10

    

### 本章學習目標

    

        
- 理解 Process Validation (製程確效) 生命週期方法的核心理念及其監管背景

        
- 掌握 FDA 三階段製程確效框架 (Stage 1 - Process Design, Stage 2 - Process Qualification, Stage 3 - Continued Process Verification) 的基本架構

        
- 了解 TR60 的適用範圍：涵蓋哪些產品類別、排除哪些類別

        
- 認識 ICH 品質指引 (Q8, Q9, Q10, Q12, Q13, Q14) 與 PV 生命週期的關聯

        
- 區分 Continuous Process Verification (持續製程驗證) 與 Continued Process Verification (持續製程確認) 的差異

        
- 熟悉 TR60 中使用的關鍵術語及其定義

    

    

### 本節目錄 Section Contents

    

        1.0 Introduction
        1.1 Purpose and Scope
        1.2 Background
        1.2.1 Review of Guidances
        2.0 Glossary
    

## 1.0 Introduction 導論

    

        

### 原文內容 Original Text

        

The United States Food and Drug Administration (FDA) and European Medicines Association (EMA) consider process validation (PV) an essential element in the assurance of drug quality and include both general and specific requirements in their current good manufacturing practice (GMP) guidelines (1-3).

        

The PV lifecycle concept links product and process development, qualification of commercial manufacturing processes, and maintenance of the commercial production process in a coordinated effort (1). When based on sound process understanding and used with quality risk management (QRM) principles and change control, the lifecycle approach allows manufacturers to use continuous process verification (enhanced approach, e.g., real-time release) in addition to, or instead of, traditional PV (1, 2, 4, 5). The lifecycle approach may not be linear or sequential. As the product/process knowledge becomes available, the changes could be initiated at any part of the process. These changes may include all areas of validation, such as PV, the physical equipment requalification, control hardware, and software changes and qualification, as all of these systems are subject to GMP controls and the lifecycle approach.

    

    

        

### 導師解析 Tutorial Commentary

        

            

#### 核心概念解析 Key Concepts

            

**Process Validation, PV (製程確效)：**透過科學證據證明一個製造過程能持續生產出符合預定品質標準的產品。FDA 和 EMA 都將其視為藥品品質保證中不可或缺的要素。

            

**PV Lifecycle Concept (PV 生命週期概念)：**將產品從開發到商業化生產再到上市後維護，視為一個完整、協調的整體過程，而非一次性的測試事件。

            

**Quality Risk Management, QRM (品質風險管理)：**系統性地識別、評估和控制可能影響產品品質的風險因子。

        

        

            

#### 比喻說明 Analogy

            

想像你開一家連鎖餐廳。製程確效就像確保每家分店都能穩定做出相同品質的料理。這不只是開幕前試做幾次就好（傳統方式），而是從研發菜單（Stage 1）、到正式營運前的驗收測試（Stage 2）、再到營運後的持續品質監控（Stage 3），形成一個完整的品質保證循環。

        

        

            

#### 重點提示 Key Notes

            

TR60 開篇就強調：PV 生命週期方法「可能不是線性或循序的」(may not be linear or sequential)。這是一個非常重要的觀點 -- 當新的產品/製程知識出現時，可以在製程的任何部分啟動變更。這與傳統「先做完開發，再做確效，最後維護」的線性思維截然不同。

        

    

## 1.1 Purpose and Scope 目的與範圍

    

        

### 原文內容 Original Text

        

Depending on the context, process, and product history, PV activities can differ. The information in this technical report applies to the manufacturing processes for drug substances (DSs) and drug products (DPs), including:

        

            
- Pharmaceuticals, sterile and nonsterile

            
- Biological/biotechnological products, including vaccines, blood-derivative products, advanced therapy medicinal products (ATMP), and regenerative medicine advanced therapy (RMAT) products

            
- Active pharmaceutical ingredients (APIs)

            
- Radiopharmaceuticals

            
- Veterinary medicines

            
- Drug constituents of combination products (e.g., a combination of drug plus a medical device)

        

        

This technical report was prepared for global use and applies to both new and existing commercial manufacturing processes; however, its scope does not include manufacturing processes for:

        

            
- Medical devices, except when part of a combination product

            
- Dietary supplements

            
- Medicated feed

            
- Human tissues, except human-tissue engineering when part of an ATMP

        

        

Although these product categories are outside the scope of this technical report, regulatory guidance documents require the manufacturer to develop their validation programs. As such, the Parenteral Drug Association's (PDA) Technical Report No. 60 (Revised): Process Validation: A Lifecycle Approach would be a useful reference in the development of PV lifecycle approaches for other product categories. While the validation of ancillary supporting operations used in pharmaceutical manufacturing processes is not discussed in TR 60, separate PDA technical reports are available that provide specific guidance for such procedures as cleaning, aseptic process simulation (APS), moist-heat sterilization, and dry-heat sterilization (6-9).

    

    

        

### 導師解析 Tutorial Commentary

        

            

#### 核心概念解析 Key Concepts

            

**Drug Substance, DS (原料藥)：**在藥品製造中使用的活性成分物質，後續會與賦形劑配製成最終藥品。

            

**Drug Product, DP (藥品成品)：**最終包裝中的劑型產品，即供上市銷售的成品。

            

**ATMP (先進治療醫藥產品)：**包括基因治療、細胞治療及組織工程產品，是近年藥品開發的前沿領域。

            

**RMAT (再生醫學先進治療)：**FDA 針對再生醫學產品的特殊加速審查路徑。

        

        

            

#### 重點提示 Key Notes

            

TR60 的適用範圍非常廣泛，幾乎涵蓋所有藥品類型。特別注意以下重點：

            

                
- 適用於**新產品**和**既有商業產品**的製程

                
- 適用於**全球**使用場景

                
- 醫療器材「單獨時」不在範圍內，但**組合產品中的藥品成分**則納入

                
- 清潔驗證、無菌製程模擬 (APS)、滅菌驗證等輔助操作有各自專屬的 PDA 技術報告

            

        

        

            

#### 比喻說明 Analogy

            

TR60 就像一本「烹飪總則」，適用於中餐、西餐、日料、甜點等各種料理類型。但像是「如何正確清洗刀具」（清潔驗證）或「如何消毒砧板」（滅菌驗證）這些專門操作，另有各自的專用手冊。同樣地，膳食補充品（保健食品）和動物飼料有自己的法規體系，不在這本總則的管轄範圍。

        

        

            

#### 練習思考 Practice Questions

            

                
1. 你的公司若同時生產生物製劑和組合產品（藥品+器材），TR60 的指引如何分別適用？

                
2. 為什麼 TR60 強調對既有商業產品也適用生命週期方法？這對一家已經生產多年的藥廠意味著什麼？

                
3. ATMP 和傳統小分子藥品的製程確效，在實務上可能有哪些差異？

            

        

    

## 1.2 Background 背景

    

        

### 原文內容 Original Text

        

The lifecycle concept includes all phases in the life of a product from initial development and registration through commercial production, including post-approval changes and product discontinuation. The use of a lifecycle approach to pharmaceutical product quality is widely thought to facilitate innovation and continual improvement as well as strengthen the link between pharmaceutical development and manufacturing. The lifecycle philosophy is fundamental to the quality guidelines developed by the International Council of Harmonisation (ICH) that cover pharmaceutical development, QRM, pharmaceutical quality systems (PQS), development and manufacture of DSs, and technical and regulatory considerations for pharmaceutical product lifecycle management. Additional ICH guidelines have been issued for continuous manufacturing and method validation analytics (10-12).

        

These ICH principles provide the product lifecycle framework and quality-system enablers that have been used in pharmaceutical PV guidance documents. These documents advise that PV is not a one-time event, but an activity that spans the product lifecycle, linking process development to the commercial manufacturing process and its maintenance during routine commercial production.

        

ICH Quality Guideline Q8(R2): Pharmaceutical Development defines procedures for linking product- and process-development planning to the final commercial-process control strategy and quality system. It describes an enhanced scientific- and risk-based approach to product and process development that emphasizes statistical analysis and design of experiments (DoE), as well as the incorporation of knowledge gained from similar products and processes. Manufacturing capabilities and the quality system must be integrated into the process development plan to ensure effective and compliant commercial operations. The functionality and limitations of commercial manufacturing equipment are primary considerations in the process design.

        

ICH Quality Guideline Q9(R1): Quality Risk Management describes the use of a risk-based approach to pharmaceutical development and manufacturing quality. These approaches identify and prioritize those process parameters and product quality attributes with the greatest potential to affect product quality. Specific guidance on the application of ICH Q9(R1) concepts can be found in PDA Technical Report No. 54: Implementation of Quality Risk Management for Pharmaceutical and Biotechnology Manufacturing Operations, PDA Technical Report No. 54-5: Quality Risk Management for the Design, Qualification, and Operation of Manufacturing Systems, and PDA Technical Report No. 59: Utilization of Statistical Methods for Production and Business Processes. The FDA Guidance for Industry: Process Validation: General Principles and Practices stresses using a risk-based approach to develop criteria and process performance indicators and improve the design and execution of other validation-related activities (1).

        

The FDA and EMA PV guidances follow the principles of ICH Quality Guideline Q10: Pharmaceutical Quality System, which conveys the essential need to integrate process design into the quality system. Throughout the development effort, the input and alignment of product and process development from a firm's Quality Unit are required to ensure compatibility with the quality system. Key considerations in product and process design include knowledge management (KM), development of a commercial control strategy, and use of modern QRM practices. Quality and regulatory organizational components should be part of the cross-functional team from the beginning of the PV study design to ensure that it is compatible with the firm's quality system and that it will meet regulatory agency expectations.

        

The Quality Unit provides the appropriate oversight of the PV studies required under GMP guidelines. Although not all lifecycle activities are required to be performed under GMPs (e.g., some Stage 1–Process Design studies), including representatives from the Quality and Regulatory Units on the cross-functional team is a wise decision (5). Documentation is an important element at all stages of lifecycle validation and, though the degree and type required varies throughout, documentation requirements are greatest during the process qualification and verification stages. Studies during these stages should conform to GMPs and should be approved by the Quality Unit.

        

The process validation master plan (PVMP) should describe the overall rationale, validation strategy, and list of specific studies and should reside within the firm's quality documentation system. A successful validation program is one that is initiated early in the product lifecycle and is kept current through change control throughout the lifecycle. A comprehensive corporate policy that defines the expectations and commitment to PV lifecycle principles is the foundation of a successful validation program. This policy should define the quality management philosophy, components of validation, change control, documentation requirements (including a PVMP), validation protocols and reports, and responsibilities of key stakeholders within the organization (13).

        

This document follows the principles and general recommendations presented in the current FDA validation guidance document and uses the traditional and nontraditional (enhanced) PV terminology employed by EMA. In this context, nontraditional or enhanced PV may use continuous process verification as an alternative approach to traditional PV. With the enhanced approach, manufacturing process performance is continuously monitored and evaluated. The enhanced approach is a science- and risk-based, real-time approach to verify and demonstrate that a process operates within specified parameters and consistently produces material that meets quality and process performance requirements (14).

        

The three-stage PV lifecycle nomenclature used by FDA—Stage 1–Process Design, Stage 2–Process Qualification, and Stage 3–Continued Process Verification (CPV)—is also used in this technical report (1). Section 3.0, Section 4.0, and Section 5.0 discuss implementation of these stages in detail. Figure 1.2-1 shows the relationship between the relevant ICH guidance documents and the FDA stage approach to PV across the product lifecycle.

        

            "Continuous process verification and continued process verification are distinct terms and have different meanings. Continuous process verification refers to validating manufacturing processes that use advanced manufacturing and analytical technologies (e.g., process analytical technology (PAT) systems). FDA uses the term continued process verification generally to mean those activities that maintain the process in a state of control, and it encompasses all manufacturing scenarios."
        

        

A variety of regulatory guidances combined with the experience and knowledge of a cross-section of industry professionals covering products within the scope of this document (e.g., large and small molecules, sterile and nonsterile products) provide the basis for this revision. It presents approaches to best practices that are scientifically sound, represent good business, and are designed to meet current regulatory requirements and expectations.

    

    

        

### 導師解析 Tutorial Commentary

        

            

#### 核心概念解析 - ICH 品質指引體系

            

ICH 品質指引是全球藥品監管的基石。以下是與 PV 最直接相關的指引：

            

                
- **ICH Q8(R2) (藥品開發)：**從開發階段就規劃商業製程的控制策略，強調 Design of Experiments (實驗設計) 和統計分析

                
- **ICH Q9(R1) (品質風險管理)：**以風險為基礎，識別和優先處理最可能影響產品品質的製程參數和品質屬性

                
- **ICH Q10 (藥品品質系統)：**將製程設計整合到品質系統中，確保開發到商業化的無縫銜接

                
- **ICH Q12 (產品生命週期管理)：**上市後變更的技術和法規考量

                
- **ICH Q13 (連續製造)：**針對連續製造的新指引

                
- **ICH Q14 (分析方法開發)：**分析方法的生命週期方法

            

        

        

            

#### 核心概念 - FDA 三階段框架

            

                

                    

Stage 1: Process Design 製程設計

                

                

▼

                

                    

Stage 2: Process Qualification 製程確認

                

                

▼

                

                    

Stage 3: Continued Process Verification (CPV) 持續製程確認

                

            

            

這三個階段構成了 PV 生命週期的骨幹，後續章節 (3.0, 4.0, 5.0) 將分別深入討論。

        

        

            

#### 重點提示 - Continuous vs. Continued

            

這兩個易混淆的術語必須區分清楚：

            
                
                    
                    
                    
                
| 術語 | 含義 | 應用場景 |
| --- | --- | --- |
                
                    ****
                    
                    
                
| Continuous Process Verification (持續製程驗證) | 使用先進製造和分析技術（如 PAT）來驗證製程的替代方法 | Enhanced approach (增強方法)，如即時放行 |
                
                    ****
                    
                    
                
| Continued Process Verification, CPV (持續製程確認) | 確保常規生產中製程維持在受控狀態的各項活動 | 所有製造情境，對應 FDA Stage 3 |
            

        

        

            

#### 重點提示 - PVMP 與品質體系

            

**Process Validation Master Plan, PVMP (製程確效主計畫)：**描述整體確效理由、驗證策略和具體研究清單的總綱文件，應存放在企業的品質文件系統中。

            

成功的確效計畫有三個關鍵特徵：

            

                
- **及早啟動** -- 在產品生命週期的早期就開始規劃

                
- **持續更新** -- 透過變更管控在整個生命週期中保持最新

                
- **跨功能合作** -- Quality Unit 和法規單位從一開始就參與

            

        

        

            

#### 比喻說明 Analogy

            

PVMP 就像建築師在動工前繪製的「施工總規劃圖」。它不是一張固定不變的藍圖，而是隨著工程進展（產品生命週期）持續更新的動態文件。就像蓋一棟大樓需要結構工程師、水電師傅、消防安全人員從設計階段就共同參與一樣，PV 也需要品質、法規、製造等跨功能團隊從一開始就協同合作。

        

        

            

#### 練習思考 Practice Questions

            

                
1. 為什麼 ICH Q8 強調在開發階段就要考慮商業製造設備的功能和限制？如果忽略這一點會有什麼後果？

                
2. 假設你是一個 CDMO 的品質主管，如何向客戶解釯 "enhanced PV approach" 與 "traditional PV" 的差異和優勢？

                
3. 為什麼即使 Stage 1 的某些研究不要求在 GMP 下執行，仍建議品質和法規人員參與？

            

        

    

## 1.2.1 Review of Guidances Issued after Technical Report No. 60 First Published in 2013

    

        

### 原文內容 Original Text

        

There are multiple guidance documents, standards, and regulations that are related in some way to PV. Though not all of them can be listed here, the authors of this revision encourage PV practitioners to study them on their own. Furthermore, continually tracking guidances issued by ICH, EMA, FDA, the United Kingdom's Medicines and Healthcare products Regulatory Agency, Pharmaceutical Inspection Co-Operation Scheme (PIC/S), and World Health Organization (WHO), is recommended as they provide the most up-to-date direction of pharmaceutical GMP. In addition, other jurisdictions, such as the China Food and Drug Administration, Korea Food & Drug Administration, Pharmaceuticals and Medical Devices Agency (Japan), Health Canada, Therapeutic Goods Administration (Australia), Agência Nacional de Vigilância Sanitária (Brazil), and other ministries and agencies issue their own guideline documentation that typically take global trends into consideration and should be consulted for local manufacturing and distribution.

        

One of the main objectives of revising TR 60 was to align its discussions and ultimate recommendations with the most relevant and current regulatory guidances available at the time it was drafted. There may be more regulatory guidances that could prove useful to a PV practitioner, but the authors decided to focus on those documents that, in their professional opinion, would prove especially influential. The guidance documents the task group considered are:

        

            
- EU Annex 1: Manufacture of Sterile Medicinal Products, EudraLex – Volume 4 – Good Manufacturing Practice for Medicinal Products for Human and Veterinary Use

            
- EU Annex 11: Computerised Systems, EudraLex – Volume 4

            
- EU Annex 14: Manufacture of Products derived from Human Blood or Human Plasma, EudraLex – Volume 4

            
- EU Annex 15: Qualification and Validation, EudraLex – Volume 4

            
- FDA Guidance for Industry: Data Integrity and Compliance with Drug cGMP: Questions and Answers

            
- FDA Guidance for Industry: Part 11, Electronic Records; Electronic Signatures — Scope and Application

            
- U.S. Code of Federal Regulations, Title 21, Part 640–Additional Standards for Human Blood and Blood Products

            
- ICH Quality Guideline Q12: Technical and Regulatory Considerations for Pharmaceutical Product Lifecycle Management

            
- ICH Quality Guideline Q13: Continuous Manufacturing of Drug Substances and Drug Products

            
- ICH Quality Guideline Q14: Analytical Procedure Development

        

    

    

        

### 導師解析 Tutorial Commentary

        

            

#### 核心概念 - 全球監管地圖

            

製程確效不是單一國家的要求，而是全球監管的共識。以下是主要的監管機構和指引來源：

            

                
- **ICH：**國際協調組織，制定全球通用的品質指引

                
- **FDA：**美國食品藥物管理局

                
- **EMA：**歐洲藥品管理局

                
- **PIC/S：**藥品稽查合作計畫，建立 GMP 稽查的國際一致標準

                
- **WHO：**世界衛生組織

                
- **PMDA（日本）、NMPA（中國）、KFDA（韓國）、TGA（澳洲）、Health Canada（加拿大）、ANVISA（巴西）**等區域性機構

            

        

        

            

#### 重點提示 - 2013年後的關鍵法規更新

            

TR60 修訂版特別關注 2013 年初版之後發布的指引。以下是最具影響力的文件：

            

                
- **EU Annex 1 (2022 修訂)：**無菌藥品製造的全面更新，對無菌製程確效有深遠影響

                
- **EU Annex 15：**歐盟 GMP 中最直接涉及確認與確效的附錄

                
- **ICH Q12：**為上市後變更管理提供了框架，與 Stage 3 CPV 密切相關

                
- **ICH Q13：**連續製造的出現帶來全新的確效挑戰

                
- **ICH Q14：**將生命週期方法延伸到分析方法開發

                
- **FDA 資料完整性指引：**強調確效數據的 ALCOA+ 原則

            

        

        

            

#### 比喻說明 Analogy

            

全球法規體系就像聯合國的多層架構：ICH 就像聯合國制定國際公約，各國（FDA、EMA、PMDA 等）再根據公約制定自己的國內法。作為一個全球營運的藥廠或 CDMO，你不能只看一個國家的規定，而要了解整個「國際公約」體系。TR60 就是將這些分散的指引整合成一份實用的參考文件。

        

        

            

#### 實務應用 Practical Application

            

作為 CDMO，你可能同時為美國、歐洲和日本市場生產藥品。這意味著你的製程確效計畫必須同時滿足 FDA Guidance、EU Annex 15 和 PMDA 的要求。TR60 的價值在於它整合了這些不同來源的最佳實踐，讓你可以建立一套「一次確效，多國適用」的策略。

        

        

            

#### 練習思考 Practice Questions

            

                
1. EU Annex 1 (2022) 的修訂對無菌產品的製程確效帶來了哪些新要求？

                
2. ICH Q13 針對連續製造提出了哪些獨特的確效挑戰？與傳統批次製造有何不同？

            

        

    

## 2.0 Glossary 術語表

    

        

### 原文內容 Original Text

        

Definitions have been provided to help clarify the concepts discussed in this document. While some definitions used vary among companies, geographic location, etc., the definitions described below are consistently used within this Technical Report document. Where a definition is based on another published source, the source is cited.

        
        

            

#### Active Pharmaceutical Ingredient (API)

            

Any substance or mixture of substances intended to be used in the manufacture of a drug (medicinal) product and that, when used in the production of a drug, becomes an active ingredient of the drug product. Such substances are intended to furnish pharmacological activity or other direct effect in the diagnosis, cure, mitigation, treatment, or prevention of disease or to affect the structure and function of the body (15).

            

*Note: The significant structural component of APIs is called "API Starting Material".*

            

*Note: Equivalent to drug substance (DS).*

        

        
        

            

#### Attribute

            

A physical, chemical or microbiological property or characteristic of an input or output material (16).

        

        
        

            

#### Critical Quality Attribute (CQA)

            

A physical, chemical, biological, or microbiological property or characteristic that should be within an appropriate limit, range, or distribution to ensure the desired product quality (17).

        

        
        

            

#### Quality Attribute

            

A molecular or product characteristic that is selected for its ability to help indicate the quality of the product. Collectively, the quality attributes define identity, purity, potency and stability of the product, and safety with respect to adventitious agents. Specifications measure a selected subset of the quality attributes (18).

        

        
        

            

#### Component

            

Component means any ingredient intended for use in the manufacture of a drug product, including those that may not appear in such drug product (19).

        

        
        

            

#### Continued Process Verification (CPV)

            

Assuring that during routine production the process remains in a state of control (1).

        

        
        

            

#### Continuous Process Verification

            

An alternative approach to process validation in which manufacturing process performance is continuously monitored and evaluated (17).

        

        
        

            

#### Control Strategy

            

A planned set of controls, derived from current product and process understanding, that assures process performance and product quality. The controls can include parameters and attributes related to drug substance and drug product materials and components, facility and equipment operating conditions, in-process controls, finished product specifications, and the associated methods and frequency of monitoring and control (5).

        

        
        

            

#### Data Integrity

            

The assurance that the data remains complete, consistent, accurate, trustworthy, and reliable throughout its life cycle. Maintaining data integrity is crucial for ensuring the validity of AI-driven insights, supporting regulatory compliance, and enabling reliable decision-making in pharmaceutical manufacturing (20).

        

        
        

            

#### Design of Experiments (DoE)

            

A structured, organized method for determining the relationship between factors affecting a process and the output of that process (17).

            

*Note: This is typically referred to as "Formal Experimental Design".*

        

        
        

            

#### Design Space

            

The multidimensional combination and interaction of input variables (e.g., material attributes) and process parameters have been demonstrated to provide assurance of quality. Working within the design space is not considered as a change. Movement out of the design space is a change and would normally initiate a regulatory post approval change process. Design space is proposed by the applicant and is subject to regulatory assessment and approval (17).

        

        
        

            

#### Drug Product (DP)

            

The dosage form in the final immediate packaging intended for marketing (15).

        

        
        

            

#### Drug Substance (DS)

            

The material which is subsequently formulated with excipients to produce the drug product. It can be composed of the desired product, product-related substances, and product- and process-related impurities. It may also contain excipients including other components such as buffers (21).

        

        
        

            

#### Good Engineering Practice

            

Established engineering methods and standards applied throughout the lifecycle to deliver appropriate and cost-effective solutions (22).

        

        
        

            

#### Intermediate

            

A material produced during the steps of the processing of an API that undergoes further molecular change or purification before it becomes an API. Intermediates may or may not be isolated (15).

        

        
        

            

#### Knowledge Management (KM)

            

Knowledge management is a systematic approach to acquiring, analyzing, storing and disseminating information related to products, manufacturing processes and components. Sources of knowledge include, but are not limited to, prior knowledge (public domain or internally documented); pharmaceutical development studies; technology transfer activities; process validation studies over the product lifecycle; manufacturing experience; innovation; continual improvement; and change management activities.

        

        
        

            

#### Lifecycle

            

All phases in the life of a product, from the initial development through marketing until the product's discontinuation (17).

        

        
        

            

#### Normal Operating Range (NOR)

            

A defined range, within the Proven Acceptable Range, specified in the manufacturing instructions as the target and range at which a process parameter is controlled, while producing unit operation material or final product meeting release criteria and Critical Quality Attributes (23).

        

        
        

            

#### Materials

            

A general term used to denote raw materials (starting materials, reagents, solvents), process aids, intermediates, APIs, and packaging and labeling materials.

        

        
        

            

#### In-Process Material

            

In-process material means any material fabricated, compounded, blended, or derived by chemical reaction that is produced for, and used in, the preparation of the drug product (19).

        

        
        

            

#### Raw Material

            

A general term used to denote starting materials, reagents, and solvents intended for use in the production of intermediates or APIs (12).

        

        
        

            

#### Operating Characteristic Curve

            

Depicts the discriminatory power of an acceptance sampling plan. The operating characteristic curve plots the probabilities of accepting a lot versus the fraction defective.

        

        
        

            

#### Critical Process Parameter (CPP)

            

A process parameter whose variability has an impact on a critical quality attribute and therefore should be monitored or controlled to ensure the process produces the desired quality (17).

        

        
        

            

#### Noncritical Process Parameter

            

A noncritical parameter has no impact on quality at the process step in question. Note: It may have an impact on the performance of the next process step and so may be monitored for process control purposes.

        

        
        

            

#### Process Parameter

            

An input variable or condition of the manufacturing process that can be directly controlled in the process. Typically, these parameters are physical or chemical (e.g., temperature, process time, column flow rate, column wash volume, reagent concentration, or buffer pH) (24).

            

*Note: This is typically referred to as "Operational Parameter".*

        

        
        

            

#### Performance Qualification (PQ)

            

The documented verification that systems and equipment can perform effectively and reproducibly based on the approved process method and product specifications.

        

        
        

            

#### Platform Manufacturing

            

The approach of developing a production strategy for a new drug starting from manufacturing processes similar to those used by the same manufacturer to manufacture other drugs of the same type (25).

        

        
        

            

#### Process Analytical Technology (PAT)

            

A system for designing, analyzing, and controlling manufacturing through timely measurements (i.e., during processing) of critical quality and performance attributes of raw and in-process materials and processes with the goal of ensuring final product quality (17).

        

        
        

            

#### Process Capability Index (CpK)

            

A statistical tool, to measure the ability of a process to produce output within a customer's specification limits. In simple words, it measures the producer's capability to produce a product within the customer's tolerance range. Cpk is used to estimate how close a given target is and how consistent it is with the average performance. Cpk provides the best-case scenario for the existing process. It can also estimate future process performance, assuming performance is consistent over time.

        

        
        

            

#### Process Performance Index (PpK)

            

A statistical tool to verify if the sample that has been generated from the process is capable of meeting the customer's requirements. It measures the performance of the process related to both dispersion and centeredness. In simple words, Ppk is an index of process performance that tells how well a system is meeting specifications and how well the process is centered within the specification limits.

        

    

    

        

### 導師解析 Tutorial Commentary

        

            

#### 核心概念 - 術語層級關係

            

TR60 的術語表不只是字典，它反映了製程確效的核心邏輯架構。讓我們按照邏輯關係來理解這些術語：

            

**品質屬性的層級：**

            

                
- **Attribute (屬性)：**輸入或輸出物料的物理、化學或微生物特性 -- 最廣泛的概念

                
- **Quality Attribute (品質屬性)：**被選定用於指示產品品質的分子或產品特性 -- 所有與品質有關的屬性

                
- **Critical Quality Attribute, CQA (關鍵品質屬性)：**必須在適當的限度、範圍或分佈內以確保所需產品品質的屬性 -- 最關鍵的子集

            

        

        

            

#### 核心概念 - 製程參數的分類

            

**製程參數的層級：**

            

                
- **Process Parameter (製程參數)：**可以直接控制的製造過程輸入變數或條件（如溫度、時間、流速）

                
- **Critical Process Parameter, CPP (關鍵製程參數)：**其變異性會影響 CQA 的製程參數，因此必須監控或控制

                
- **Noncritical Process Parameter (非關鍵製程參數)：**在該製程步驟中對品質無影響的參數，但可能影響下一步驟的性能

            

            

**操作範圍的層級：**

            

                
- **Design Space (設計空間)：**已被證明能確保品質的多維度輸入變數和製程參數的組合 -- 最外層

                
- **Proven Acceptable Range, PAR (已證明可接受範圍)：**已被驗證為可接受的參數範圍 -- 中間層

                
- **Normal Operating Range, NOR (正常操作範圍)：**製造指令中指定的目標和範圍 -- 最內層，日常操作的實際目標

            

        

        

            

#### 比喻說明 - Design Space vs NOR vs PAR

            

想像你開車在高速公路上：

            

                
- **Design Space** = 整條道路的邊界護欄，超出就「出事」（品質風險）

                
- **PAR (已證明可接受範圍)** = 車道標線，在標線內行駛已被證明是安全的

                
- **NOR (正常操作範圍)** = 你的方向盤實際瞄準的車道中心位置，日常操作的目標

            

            

重要的是：在 Design Space 內操作不算「變更」，但超出 Design Space 就是變更，需要啟動法規上市後變更程序。

        

        

            

#### 重點提示 - CpK vs PpK 的區別

            

這兩個統計指標經常被混淆，但它們有重要區別：

            

                
- **CpK (製程能力指數)：**衡量製程在「穩定狀態」下的固有能力，使用**組內變異**計算。代表製程的「最佳情境」表現。

                
- **PpK (製程績效指數)：**衡量製程的「實際表現」，使用**總變異**（包含組內和組間變異）計算。反映製程的真實績效。

            

            

實務判斷：若 CpK >> PpK，表示製程存在顯著的批次間變異（特殊原因變異），需要調查。

        

        

            

#### 核心概念 - 其他重要術語

            

**Control Strategy (控制策略)：**基於當前產品和製程理解所規劃的一組控制措施，包含參數控制、物料屬性、設施設備條件、製程中管控、成品規格等。這是整個 PV 生命週期的核心產出之一。

            

**Data Integrity (資料完整性)：**確保資料在整個生命週期中保持完整、一致、準確、可信和可靠。TR60 (2026修訂版) 特別提到了「AI 驅動洞察的有效性」，反映了數位化轉型的趨勢。

            

**Knowledge Management, KM (知識管理)：**系統性地獲取、分析、儲存和傳播與產品、製程和組件相關的資訊。知識來源包括先驗知識、開發研究、技術轉移、確效研究、製造經驗等。

            

**Platform Manufacturing (平台製造)：**從同一製造商已用於生產同類藥品的類似製程出發，為新藥開發生產策略。這對 CDMO 特別重要，可大幅縮短開發時間。

        

        

            

#### 比喻說明 - Platform Manufacturing

            

Platform Manufacturing 就像汽車製造商的「共用底盤平台」策略。Toyota 的 TNGA 平台可以衍生出 Camry、RAV4、Lexus ES 等不同車型。同樣地，一個生物製藥 CDMO 的單株抗體生產平台可以快速適配不同客戶的 mAb 產品，只需調整少數特定參數，大幅縮短開發和確效時間。

        

        

            

#### 重點提示 - PAT 與 Enhanced Approach

            

**Process Analytical Technology, PAT (製程分析技術)：**透過即時量測（在製程進行中）來設計、分析和控制製造的系統。PAT 是實現 enhanced approach（增強方法）和 continuous process verification（持續製程驗證）的技術基礎。

            

PAT 的實際應用範例：

            

                
- 近紅外光譜 (NIR) 即時監測混合均勻度

                
- 拉曼光譜即時監測結晶過程

                
- 多變量資料分析 (MVDA) 即時預測 CQA

            

        

        

            

#### 練習思考 Practice Questions

            

                
1. 如果一個製程參數被歸類為 CPP，這對你的確效策略（取樣計畫、監控頻率）有什麼具體影響？

                
2. Design Space 內的操作不算「變更」，這對法規申報有什麼實際優勢？為什麼監管機構要求 Design Space 需經核准？

                
3. CpK = 1.33 而 PpK = 0.8 的情況代表什麼？你會建議採取什麼行動？

                
4. 為什麼 TR60 (2026修訂版) 在 Data Integrity 定義中特別提到 AI？這反映了產業的什麼趨勢？

            

        

    

    

### 本節重點回顧 Section Summary

    

        
- **PV 是生命週期活動：**製程確效不是一次性事件，而是貫穿產品從開發到停產整個生命週期的持續活動

        
- **FDA 三階段框架：**Stage 1 (Process Design) → Stage 2 (Process Qualification) → Stage 3 (Continued Process Verification)，構成 PV 生命週期的骨幹

        
- **全球適用：**TR60 整合了 ICH、FDA、EMA 等全球主要監管機構的指引，適用於幾乎所有藥品類型

        
- **Continuous vs. Continued：**Continuous Process Verification 是使用 PAT 等先進技術的驗證替代方法；Continued Process Verification (CPV) 是確保常規生產維持受控狀態的 Stage 3 活動

        
- **關鍵術語關係：**Attribute → Quality Attribute → CQA 形成品質屬性的層級；Process Parameter → CPP 形成參數的關鍵性分類；Design Space → PAR → NOR 形成操作範圍的嵌套結構

        
- **跨功能協作：**品質單位、法規單位應從 PV 研究設計之初就參與，確保與品質系統和法規期望相容

        
- **PVMP 是基石：**製程確效主計畫應描述整體理由、確效策略和具體研究清單，並透過變更管控持續更新

    

    

PDA Technical Report No. 60 (Revised 2026): Process Validation: A Lifecycle Approach

    

Section 0: Introduction & Glossary | Sections 1.0 - 2.0 | Pages 1-10

    

Educational Material for CDMO Professionals

▲

## Section 1: Process Design (Stage 1) 製程設計（第一階段） (p11-p38)

# Section 3.0-3.3 Process Development / Process Design (Stage 1) - Part 1

    

製程開發／製程設計（階段一）- 第一部分

    

PDA Technical Report No. 60 (Revised 2026): Process Validation: A Lifecycle Approach | p11 - p20

    

### 本章學習目標

    

        
- 理解 Process Validation (製程確效) 三階段架構中 Stage 1 (製程設計) 的定位與目標

        
- 掌握 Quality Target Product Profile (QTPP，品質目標產品概況) 的建立原則與應用方式

        
- 學習如何辨識與評估 Critical Quality Attributes (CQAs，關鍵品質屬性)

        
- 了解製造製程描述文件 (Process Description) 的組成要素與生命週期管理

        
- 認識風險評估工具在製程開發中的應用，以及 CQA 與製程參數之間的關聯

    

3.0 Process Development / Process Design (Stage 1)

    

        

### 原文內容 Original Text

        

Section 3.0 focuses on approaches used during process development through process performance qualification (PPQ) of robust commercial manufacturing. It addresses the first stage of PV in which product and process knowledge are explored to establish the control strategy. Risk assessment and management are used to focus the development effort. The knowledge evolves through the course of the pharmaceutical development program. Stage 1 aims at building the basis to apply a science-based approach with the objective of enhancing the effectiveness and success of Stage 2, PPQ. It also establishes a foundation for CPV in Stage 3. Figure 3.0-1 depicts the sequence of activities involved in PV and illustrates interactivities and interdependencies between and within all three stages. As knowledge of the product and process grows, the control strategy may be re-examined, and changes can be made.

        

            

#### Figure 3.0-1 Overall Sequence of Process Validation Activities

            

[Figure depicts the sequence of activities involved in PV and illustrates interactivities and interdependencies between and within all three stages: Stage 1 (Process Design), Stage 2 (Process Qualification), and Stage 3 (Continued Process Verification).]

        

    

    

        

### 導師解析 Tutorial Commentary

        

            

#### 核心概念解析 Key Concepts

            

**Process Validation (製程確效)** 是一個貫穿產品生命週期的系統性方法，分為三個階段：

            

                
- **Stage 1 - Process Design (製程設計)：**透過產品與製程知識的探索，建立控制策略

                
- **Stage 2 - Process Qualification (製程確認)：**確認製程能夠穩定重現商業化生產

                
- **Stage 3 - Continued Process Verification (持續製程驗證)：**持續監控以確保製程維持受控狀態

            

            

Stage 1 的核心目的是**為後續兩個階段打下科學基礎**。此階段所建立的知識體系，直接決定了 PPQ 方案的有效性以及 CPV 監控計畫的適切性。

        

        

            

#### 比喻說明 Analogy

            

想像你要開一間新餐廳。Stage 1 就像是**研發菜單和標準食譜**的階段：你需要確定每道菜的品質標準（QTPP）、找出影響口味的關鍵食材和烹調參數（CQA/CPP），並建立標準作業流程。如果這個階段做得不紮實，之後的試營運（Stage 2）就會問題百出，正式營業後（Stage 3）也難以維持品質穩定。

        

        

            

#### 重點提示 Key Notes

            

注意原文強調的**「interactivities and interdependencies」（交互活動與相互依存性）**。三個階段不是線性的「做完一個再做下一個」，而是存在回饋迴路。例如：

            

                
- Stage 2 中發現的新知識可能需要回頭修改 Stage 1 的控制策略

                
- Stage 3 的趨勢數據可能觸發重新評估製程參數範圍

            

            

這反映了 ICH Q8-Q12 強調的**知識管理 (Knowledge Management, KM)** 精神：製程驗證是動態的、持續演進的。

        

        

            

#### 圖表解讀 Figure Analysis

            

**Figure 3.0-1** 呈現了製程確效三階段的活動序列與相互關係。關鍵觀察：

            

                
- 三個階段之間有**雙向箭頭**，表示知識回饋機制

                
- 控制策略 (Control Strategy) 是貫穿三階段的核心線索

                
- 隨著產品與製程知識的增長，控制策略會被重新審視與調整

            

        

        

            

#### 練習思考 Practice Questions

            

                
1. 為什麼 TR60 強調 Stage 1 是「建立科學基礎」而非僅僅「執行實驗」？這對 CDMO 的研發策略有什麼影響？

                
2. 如果一家公司在 Stage 1 投入不足，可能在 Stage 2 和 Stage 3 面臨哪些具體風險？

            

        

    

3.1 Establish Quality Target Product Profile

    

        

### 原文內容 Original Text

        

The aim of Stage 1 – Process Design is to design a quality product with a manufacturing process that consistently delivers the intended performance of the DP. Pharmaceutical development begins with the establishment of predefined objectives, ensuring the desired quality while considering product safety and efficacy. These objectives are described in the quality target product profile (QTPP). ICH Q8(R2) defines QTPP as a prospective summary of the quality characteristics of a DP that ideally will be achieved to ensure the desired quality of the DP, considering safety and efficacy. The QTPP is determined at the initiation of Stage 1 and is referenced throughout the product lifecycle (17).

        

The QTPP captures the high-level quality characteristics relevant for the DP, in addition to such characteristics as route of administration, dosage form, and strength, that should be derived from risk-based tools and should follow the principles outlined in ICH Q9(R1). The severity of harm, that is, the potential impact of the attributes on safety and efficacy, should be considered to identify and document the critical quality attributes (CQA). Various risk assessment tools referred to in ICH Q9(R1) can be used to evaluate the criticality of individual quality attributes. PDA Technical Report No. 81: Cell-Based Therapy Control Strategy provides examples of suitable risk assessment tools with low variability.

        

The initial manufacturing process used in GMP production for early clinical stages should be based on the knowledge obtained from early process-development activities and should be designed to ensure consistent product quality focusing on quality attributes related to patient safety. When defining the manufacturing process during development (and prior to the definition of a mature, comprehensive control strategy), a process description can be used to assist in implementing risk assessments and developing the control strategy. At this early stage, the manufacturing process could be heavily influenced by the need to quickly generate clinical-trial material where leveraging existing equipment and container–closure systems would be advantageous (as described further in bulleted listing below). The initial manufacturing process may be changed in consideration of the patient's needs, clinical trial outcomes, manufacturing constraints, and learnings from process development. Changes could come in equipment, product strength, product composition, or final pharmaceutical or biochemical form.

        

The manufacturing process is described as a series of constituent operations, which may be visualized in many formats including, but not limited to, a block or process-flow diagram that describes each unit operation. The following information should be included in the description of each item:

        

            
- Process requirements, including raw materials, scale, and order of operations

            
- Equipment train (make and model)

            
- Set points and ranges (proven acceptable range (PAR), normal operating range (NOR), residence time distribution) for the process parameters

            
- Identification and quantity of all material flows (additions or inputs, wastes, product streams)

            
- Testing, sampling, and in-process controls

            
- Hold times and hold conditions for product or process intermediates and additional solutions

            
- Estimated step yields and processing durations

            
- Sizing for equipment, including such items as chromatography columns and filtration units

            
- Specific identification (e.g., manufacturer, part number) for manufacturing (e.g., filters) and product components (e.g., vials, stoppers)

            
- Other information necessary to successfully reproduce the process

        

        

Process descriptions and scale-up effects, if any, are documented in reports and may be incorporated into the technology transfer (TT) package for the product. The process may change during Stage 1 for many reasons, for example, increases in material demand (i.e., process and analytical development, clinical needs), improved product understanding that leads to changes to CQAs, improved process understanding that results in the addition, elimination, or adjustment of unit operations and the corresponding process controls and in-process analytical tests. Documentation should capture these changes, and the supporting justifications for this information should be archived in the KM system.

        

The Process Description is a lifecycle document that is initiated in Stage 1 to support early clinical manufacturing, maintained, and appropriately updated to support Stages 2 and 3. Increased knowledge gained during process characterization studies may require additional changes to the process description. All changes to the process should be approved through change control procedures as defined by the organization's quality system.

    

    

        

### 導師解析 Tutorial Commentary

        

            

#### 核心概念解析 Key Concepts

            

**QTPP (Quality Target Product Profile，品質目標產品概況)** 是 ICH Q8(R2) 定義的核心概念。它是一份**前瞻性文件**，在產品開發初期就設定好「最終產品應該長什麼樣子」的品質目標。

            

QTPP 通常包含以下要素：

            

                
- **給藥途徑** (Route of Administration)：例如靜脈注射、皮下注射

                
- **劑型** (Dosage Form)：例如凍晶粉末、注射液

                
- **劑量強度** (Strength)：例如 100 mg/vial

                
- **品質屬性**：純度、無菌性、內毒素、顆粒物等

                
- **穩定性**：保存條件與有效期限

                
- **容器密封系統**：西林瓶/預充填注射器等

            

        

        

            

#### 比喻說明 Analogy

            

QTPP 就像是蓋房子之前的**建築藍圖與規格書**。在開始施工（製程開發）前，你必須先明確定義：這棟房子要幾層樓、什麼結構、要能承受多大的風力和地震。同樣地，QTPP 在開發初期就界定了產品必須達到的品質目標。如果不先設定這些目標，後續所有的設計決策都缺乏依據。

        

        

            

#### 重點提示 Key Notes

            

**Process Description (製程描述) 是一份生命週期文件**，這一點非常重要。原文清楚指出它從 Stage 1 啟動，持續更新以支撐 Stage 2 和 Stage 3。

            

原文列出的十項必要資訊（原料、設備、製程參數範圍、物料流、取樣計畫等），本質上就是一份**完整的製程知識摘要**。對 CDMO 而言，這份文件就是技術移轉 (Technology Transfer) 套件的核心。

        

        

            

#### PAR vs NOR 辨析

            

原文提及兩個關鍵範圍概念：

            

                
- **PAR (Proven Acceptable Range，經證實可接受範圍)：**透過實驗證明，在此範圍內操作不會影響產品品質的參數範圍

                
- **NOR (Normal Operating Range，正常操作範圍)：**日常生產中實際使用的操作範圍，通常窄於 PAR

            

            

PAR 提供安全邊際，NOR 則是日常操作的「最佳實踐區間」。設計控制策略時，NOR 落在 PAR 之內，而法規核准的規格限度則可能更寬或等於 PAR。

        

        

            

#### 實務應用 Practical Application

            

對 CDMO 而言，接收客戶技術移轉時，Process Description 的完整性直接影響專案成敗。一份好的製程描述應包含：

            

                
- 完整的單元操作清單與操作順序

                
- 每個步驟的 PAR 和 NOR 數據

                
- 關鍵原料和組件的詳細規格（供應商、料號）

                
- 設備尺寸規格（如層析管柱、過濾器面積）

            

            

如果客戶僅提供模糊的製程描述，CDMO 應要求補充資料，否則會在放大生產時遇到重大挑戰。

        

        

            

#### 練習思考 Practice Questions

            

                
1. QTPP 應該在產品開發的什麼時間點建立？為什麼不能等到 Stage 2 再定義？

                
2. 原文提到早期臨床製造階段「可能大量利用現有設備和容器密封系統」，這對後續商業化製程變更管理有何影響？

                
3. 請列舉三個在 Process Description 中經常被遺漏但極為重要的資訊項目。

            

        

    

3.2 Identify Critical Quality Attributes

    

        

### 原文內容 Original Text

        

The QTPP provides an understanding of what will ensure the quality, safety, and efficacy of a specific product for the patient. Once the QTPP has been determined, its content can be used to establish the quality attributes. A quality attribute is a characteristic of a product that relates to quality; and is considered critical when those attributes are likely or certain to impact the safety and efficacy of a product.

        

As defined in ICH Quality Guideline Q8(R2): Pharmaceutical Development, a CQA is a "physical, chemical, biological or microbiological property or characteristic that should be within an appropriate limit, range, or distribution to ensure the desired product quality" (17).

        

            "A CQA is a physical, chemical, biological or microbiological property or characteristic that should be within an appropriate limit, range, or distribution to ensure the desired product quality." — ICH Q8(R2)
        

        

Identifying CQAs is an integral part of manufacturing process development. At an early stage of process development, the information available on product attributes may be limited. For this reason, the first set of CQAs may come from prior knowledge obtained during early development or from similar products rather than from extensive product characterization. The degree of criticality assigned to quality attributes should be derived from risk-based tools following the principles outlined in ICH Q9(R1). The severity of harm, that is, the potential impact of the attributes on safety and efficacy, should be considered to identify and document the CQAs (28). Various risk assessment tools referred to in ICH Q9(R1) can be used to evaluate the criticality of individual quality attributes.

        

Following comprehensive assessments of scientific evidence and risk, quality attributes are ranked according to the degree of criticality. This may be a continuum that more accurately reflects the complexity of structure–function relationships and varying levels of uncertainty around attribute classification.

        

The identification of potential CQAs is an ongoing activity initiated early in product development. It makes use of general knowledge about the product and its application, as well as available clinical and nonclinical data. CQAs are subject to change in the early stages of product development and, thus, require a QRM approach that evolves as knowledge about the product and process is generated (refer to Section 6.1). CQAs for commercial products should be defined prior to the initiation of Stage 2 activities via a subsequent risk assessment.

    

    

        

### 導師解析 Tutorial Commentary

        

            

#### 核心概念解析 Key Concepts

            

**CQA (Critical Quality Attribute，關鍵品質屬性)** 是 QbD (Quality by Design) 架構中的核心概念。ICH Q8(R2) 定義 CQA 為：

            

「應在適當的限度、範圍或分佈內，以確保所需產品品質的物理、化學、生物或微生物特性。」

            

關鍵字是**「應在適當範圍內」**：不是所有品質屬性都是 CQA。只有那些**對安全性和有效性有可能或確定影響**的屬性才被歸類為 CQA。

            

常見的 CQA 範例：

            

                
- **生物藥品：**醣基化模式、聚集體含量、電荷異構體分佈、效價

                
- **小分子藥品：**溶離率、含量均勻度、雜質含量、晶型

                
- **無菌製劑：**無菌性、內毒素含量、微粒物含量、容器密封完整性

            

        

        

            

#### 比喻說明 Analogy

            

把 CQA 想像成飛機飛行前的**安全檢查清單**。飛機有數千個零件和參數，但不是每一個都會直接影響飛行安全。引擎推力、燃油量、操控系統——這些是「關鍵」的（CQA）。而座椅椅套的顏色、機上雜誌的擺放位置——這些雖然也是「品質屬性」，但不是「關鍵」品質屬性。風險評估的目的就是區分哪些參數真正影響「飛行安全」（patient safety），哪些只是「乘客體驗」。

        

        

            

#### 重點提示 Key Notes

            

原文有兩個非常重要的觀點：

            

                
1. **CQA 的「關鍵程度」是一個連續光譜 (continuum)，不是非黑即白**。這反映了 ICH Q8-Q12 的現代觀點——品質屬性的關鍵性應該是漸進的評級，而非簡單的「關鍵/非關鍵」二分法。

                
2. **CQA 是動態的，會隨知識增長而改變**。早期可能基於先驗知識 (prior knowledge) 或類似產品經驗來設定初始 CQA 清單，但隨著開發進展和更多數據累積，CQA 的清單和等級應持續更新。

            

            

實務上，這意味著你的風險評估不是「做一次就結束」，而是需要在每個開發里程碑重新審視。

        

        

            

#### 法規要求 Regulatory Emphasis

            

原文明確指出：**商業產品的 CQA 應在啟動 Stage 2 活動之前，透過後續風險評估來定義。**

            

這是一個關鍵的時間節點要求。進入 PPQ 之前，你必須已經完成：

            

                
- 完整的品質屬性風險評估

                
- CQA 的最終確認與文件化

                
- 基於 CQA 的控制策略設計

            

            

如果這些工作沒有在 Stage 2 之前完成，PPQ 方案的設計將缺乏科學依據，可能導致確效失敗或法規審查缺失。

        

        

            

#### 實務應用 Practical Application

            

在 CDMO 環境中，CQA 的辨識流程通常如下：

            

                
1. **初步評估：**基於產品類型、給藥途徑和類似產品經驗，建立初始 CQA 清單

                
2. **風險排序：**使用 FMEA (Failure Mode Effects Analysis) 或其他工具，根據嚴重性 (Severity)、發生可能性 (Occurrence)、可偵測性 (Detectability) 進行評分

                
3. **實驗驗證：**透過製程特性化研究 (Process Characterization) 確認哪些品質屬性真正受製程參數影響

                
4. **定期審查：**隨著臨床數據和製造經驗的累積，持續更新 CQA 清單

            

        

        

            

#### 練習思考 Practice Questions

            

                
1. 為什麼 TR60 建議 CQA 的關鍵程度應被視為「連續光譜」而非二分法？這對控制策略的設計有什麼影響？

                
2. 如果你負責一個 biosimilar（生物相似藥）的 CQA 辨識，你可以從哪些來源獲取「prior knowledge」？

                
3. 在什麼情況下，原本被判定為非關鍵的品質屬性可能需要重新歸類為 CQA？

            

        

    

3.3 Define the Manufacturing Process

    

        

### 原文內容 Original Text

        

A manufacturing process is designed to consistently provide a product that will meet its required quality attributes. Table 3.3-1 presents an example of process parameters for the single-unit operation and provides a sample description table. Figure 3.3-1 presents a diagram of a single-unit operation (29). The evolution of process knowledge and understanding is reflected in clinical-batch records; these are an important source of information for defining the manufacturing process in the process description. Data collected from the manufacture of clinical-trial material can be useful in defining elements of the control strategy and determining process capabilities, set specifications, and design PPQ protocols and acceptance criteria, as well as evaluating laboratory models and transfer processes. Strategies and fundamentals of KM are discussed further in Section 6.5.

        

### Table 3.3-1 Example Process Parameter Table for a Tangential Flow Filtration Step

        

        
            
                
                    
                    
                    
                    
                    
                    
                    
                    
                
| Process Variable | Process Parameters | Set Point | PAR* | Parameter Designation** | Rationale | Product/Process Attribute | Expected Range |
| --- | --- | --- | --- | --- | --- | --- | --- |
            
            
                
| General |
                
                    
                
| Membrane Area | — | 2 m² | N/A | — | — | — | — |
                
                    
                
| Molecular Weight Cut-Off | — | 30 kDa | N/A | — | — | — | — |
                
                    
                
| Membrane Polymer | — | Polysulfone | N/A | — | — | — | — |

                
| Pre-Use Cleaning & Flushing |
                
                    
                
| Cleaning Solution: Concentration | — | 0.4 to 0.6 N NaOH | — | Non-Key | Low risk of product or process impact | N/A | — |
                
                    
                
| Recirculation Rate | — | 10 L/min | 8 – 12 L/min | Non-Key | Adequate recirculation is needed to ensure proper cleaning, but acceptable results are achieved over a wide range | N/A | — |
                
                    
                
| Transmembrane Pressure (TMP) | — | 10 PSI | 5 – 15 PSI | Non-Key | Low risk of product or process impact over a wide range | N/A | — |
                
                    
                
| Temperature | — | 30 °C | 25 – 35 °C | Non-Key | May impact cleaning effectiveness if far out of range; procedural controls in place | N/A | — |
                
                    
                
| Time | — | 60 min | 60 – 90 min | Non-Key | Wide range, directly controlled to prevent running outside of the validated range | N/A | — |
                
                    
                
| WFI Flush Volume | — | 20 L/m² | ≥20 L/m² | Non-Key | Wide range, directly controlled | N/A | — |

                
| Pre-Use Qualification |
                
                    
                
| Integrity Test Pressure | — | 15 PSIG | 15 – 18 PSIG | Critical | If test pressure is incorrect, the test result is invalid | N/A | — |
                
                    
                
| Water Flux TMP | — | 10 PSIG | 8 – 12 PSIG | Non-Key | Water flux can be corrected for actual pressure | N/A | — |
                
                    
                
| Water Flux Temperature | — | 20 °C | 18 – 22 °C | Non-Key | Water flux can be corrected for actual temperature | N/A | — |
                
                    
                
| Filter Integrity | — | Manufacturer Specifications | Pass | Critical | Verification of filter integrity is crucial to ensure process effectiveness; filter-integrity testing is an output of the prequalification, but an input to processing the feed stream | N/A | — |

                
| System Priming |
                
                    
                
| Buffer Conductivity & pH | — | Solution Acceptance Criteria | — | Critical | All process buffer specifications categorized as critical, even though procedural controls are in place to prevent release of nonconforming buffers to production; buffers outside of established ranges may impact product quality during processing | N/A | — |
                
                    
                
| Buffer Volume | — | 35 L | 25 – 50 L | Non-Key | Unlikely to affect product or process; directly controllable | N/A | — |
                
                    
                
| Recirculation Rate | — | 8 L/min | 4 – 12 L/min | Non-Key | Unlikely to affect product or process; directly controllable | N/A | — |
                
                    
                
| Transmembrane Pressure (TMP) | — | 12 PSI | 10 – 15 PSI | Non-Key | Unlikely to affect product or process; directly controllable | N/A | — |
                
                    
                
| Temperature | — | 20 °C | 15 – 25 °C | Non-Key | Unlikely to affect product or process; directly controllable | N/A | — |
            
        

        

        

* PAR = Proven Acceptable Range; ** Parameter designation based on risk assessment

    

    

        

### 導師解析 Tutorial Commentary

        

            

#### 核心概念解析 Key Concepts

            

**製程參數表 (Process Parameter Table)** 是將製程知識結構化呈現的關鍵工具。Table 3.3-1 以切向流過濾 (Tangential Flow Filtration, TFF) 步驟為例，展示了一個完整的參數描述框架：

            

                
- **Set Point (設定點)：**操作的目標值

                
- **PAR (經證實可接受範圍)：**經實驗證明在此範圍內操作可接受

                
- **Parameter Designation (參數等級)：**根據風險評估結果分為 Critical（關鍵）或 Non-Key（非關鍵）

                
- **Rationale (理由)：**為何這樣分類的科學依據

            

        

        

            

#### 比喻說明 Analogy

            

這張表格就像一部汽車的**儀表板設計文件**。每個儀表（參數）都有：正常值（Set Point）、安全範圍（PAR）、以及重要性等級。引擎溫度表是「Critical」——超出範圍可能導致引擎損壞；而車內溫度則是「Non-Key」——不舒適但不影響行車安全。製程參數表用同樣的邏輯，幫助操作人員理解哪些參數需要嚴格監控，哪些有更大的操作彈性。

        

        

            

#### 重點提示 Key Notes

            

從 Table 3.3-1 可以觀察到幾個關鍵模式：

            

                
1. **被標記為 Critical 的參數數量很少**（僅 Integrity Test Pressure、Filter Integrity、Buffer Conductivity & pH），這反映了風險分級的精髓——不是什麼都重要，而是找出真正重要的

                
2. **Non-Key 的理由通常包含「wide range」或「directly controllable」**——表示這些參數即使偏移，對產品品質的影響也很低，或者可以透過直接控制手段輕易校正

                
3. **Critical 的理由都與產品品質直接相關**——如 buffer pH 影響蛋白質穩定性、filter integrity 影響製程有效性

            

        

        

            

#### 臨床批次記錄的價值 Clinical Batch Records

            

原文特別強調**臨床批次記錄 (Clinical-Batch Records)** 是定義商業製程的重要資訊來源。這些記錄包含：

            

                
- 實際操作數據（而非理論值）

                
- 過程中遇到的偏差和解決方案

                
- 設備效能和製程能力的初步評估

                
- 用於設計 PPQ 方案和驗收標準的基礎數據

            

            

CDMO 在接受技術移轉時，應主動要求客戶提供臨床批次的完整生產記錄，而不僅僅是最終的分析報告。

        

        

            

#### 實務應用 Practical Application

            

當你要為自己的製程建立類似 Table 3.3-1 的參數表時，建議遵循以下步驟：

            

                
1. **列出所有參數：**從每個單元操作中辨識出所有可控的輸入參數

                
2. **進行風險評估：**使用 FMEA 或類似工具，評估每個參數對 CQA 的潛在影響

                
3. **設定初始範圍：**基於先驗知識和早期實驗數據設定 Set Point 和初始 PAR

                
4. **透過 DoE 驗證：**使用實驗設計 (Design of Experiments) 確認參數交互作用並精確化 PAR

                
5. **記錄理由：**每個分類決策都必須有書面的科學理由

            

        

        

            

#### 練習思考 Practice Questions

            

                
1. 在 Table 3.3-1 中，為什麼「Buffer Conductivity & pH」被標記為 Critical，即使已有程序控制措施防止不合格 buffer 進入生產？

                
2. 如果你在審查一份製程參數表，發現所有參數都被標記為 Critical，這可能暗示什麼問題？

                
3. 臨床批次通常規模較小（如 200 L），商業規模可能是 2000 L。在使用臨床批次數據設定 PAR 時，應注意哪些放大效應？

# Section 1b: Process Design — Stage 1 Part 2 (3.3–3.6)

    

製程設計 — 第一階段 第二部分：TFF 參數範例、分析方法、風險評估與製程特性化

    

PDA Technical Report No. 60 (Revised 2026) — Process Validation: A Lifecycle Approach | p19 – p29

    

### 本章學習目標

    

        
- 理解 TFF（切向流過濾）製程參數分類範例，包含 Critical、Key 與 Non-Key 參數的區分邏輯

        
- 掌握分析方法在製程驗證生命週期中的角色，以及 Analytical Quality by Design (AQbD) 的應用

        
- 學會使用風險評估工具進行參數關鍵性分級（Parameter Criticality Designation），並理解 ICH Q12 分類體系

        
- 瞭解 Process Characterization（製程特性化）研究的目的、方法與 Proven Acceptable Range (PAR) 的建立

    

    

### 本節目錄 Section Contents

    

        3.3 TFF Parameter Example (cont.)
        3.4 Analytical Methods
        3.5 Risk Assessment & Parameter Criticality
        3.6 Process Characterization
    

3.3 Example: TFF Process Parameters & Attributes (continued)

    

        

### Original Text

        

The following table continues the example of process parameter classification for a Tangential-Flow Filtration (TFF) unit operation, covering Initial Concentration, Diafiltration, Final Concentration & Product Recovery, and System Cleaning & Storage steps.

        

        
            
                
                
                
                
                
                
            
| Process Variable | Set Point | PAR* | Designation** | Rationale | Attribute / Expected Range |
| --- | --- | --- | --- | --- | --- |
            
| Process – Initial Concentration Step |
            
                
                
                
                
                
                
            
| Initial Product Total Mass | 1225 g | 900 – 1600 g | Critical | Initial product concentrations and volumes (total mass) may be critical due to relationship with system volume constraints and the ability to reach DF and final concentration targets | N/A |
            
                
                
                
                
                
                
            
| Initial Product Volume | 75 L | 50 – 100 L | Key | In some circumstances, initial product concentrations and volumes (total mass) may be critical; may be related to system volume constraints and ability to reach DF and final concentration targets. The initial volume may affect process time and/or yield | N/A |
            
                
                
                
                
                
                
            
| Recirculation Rate | 8 L/min | 6 – 10 L/min | Key | Crossflow rate can impact flux; however, only processing time is impacted unless rate is excessively low (causing significant membrane polarization of protein); depends on impact of TMP on flux | N/A |
            
                
                
                
                
                
                
            
| Trans-membrane Pressure (TMP) | 12 PSI | 10 – 15 PSI | Key | Minor impact on flux unless operated excessively high or low (outside of PAR); at low values, TMP may have a significant impact on flux | N/A |
            
                
                
                
                
                
                
            
| Temperature | 20 °C | 15 – 25 °C | Non-Key | Minor impact on flux (~2% per degree) | N/A |
            
                
                
                
                
                
                
            
| Process Flux (Average) | N/A | — | — | Output of process conditions including TMP, recirculation rate, product concentration; may be used to track batch-to-batch consistency | Process Performance Attribute: 20 – 30 LMH |
            
                
                
                
                
                
                
            
| Product Concentration | N/A | — | — | Output of initial concentration stage, input to DF | CQA: 30–40 g/L |
            
                
                
                
                
                
                
            
| Product (Retentate) Volume | 35 L | 30 – 40 L | Critical | Volume must be in range and validated for proper volume control within the system during DF and within equipment/tankage constraints for total volume of DF buffer needed | N/A |

            
| Process – Diafiltration Step (Constant Volume) |
            
                
                
                
                
                
            
| DF Buffer pH and Conductivity | Solution Acceptance Criteria | Critical | DF buffer directly impacts the formulation of final bulk drug substance (DS) and ultimately drug product (DP) | N/A |
            
                
                
                
                
                
                
            
| Recirculation Rate | 8 L/min | 6 – 10 L/min | Key | Crossflow rate can impact flux; however, processing time is impacted if rate is excessively low (outside of PAR) causing significant membrane polarization of protein | N/A |
            
                
                
                
                
                
                
            
| TMP | 12 PSI | 10 – 15 PSI | Key | Minor impact on flux unless operated excessively high or low; operating outside of PAR will impact process time | N/A |
            
                
                
                
                
                
                
            
| Temperature | 20 °C | 15 – 25 °C | Non-Key | Minor effect on flux; assume no effect on product quality over a fairly wide range | N/A |
            
                
                
                
                
                
                
            
| System Volume During DF | 35 L | 30 – 40 L | Critical | Potential to under-diafilter if variability or uncertainty in this parameter | N/A |
            
                
                
                
                
                
                
            
| Number of Diavolumes | 7 | 7 – 10 | Critical | Extent of buffer exchange is dependent on number of diavolumes | N/A |
            
                
                
                
                
                
                
            
| Process Flux (Average) | N/A | — | — | Output of process conditions including TMP, recirculation rate, product concentration; may be used to track batch-to-batch consistency | Process Performance Attribute: 25 – 30 LMH |
            
                
                
                
                
                
                
            
| Retentate pH and Conductivity at End of Step | N/A | — | — | Direct impact to product quality | CQA: To Specification |

            
| Process – Final Concentration & Product Recovery |
            
                
                
                
                
                
            
| Chase Buffer pH and Conductivity | Per solution specification | Critical | Direct impact to product quality | N/A |
            
                
                
                
                
                
                
            
| Recirculation Rate | 8 L/min | 6 – 10 L/min | Key | More likely to significantly affect flux at higher product concentrations | N/A |
            
                
                
                
                
                
                
            
| TMP | 10 PSI | 5 – 15 PSI | Key | Impacts flux | N/A |
            
                
                
                
                
                
                
            
| Temperature | 20 °C | 15 – 25 °C | Non-Key | Minor effect on flux, assume no effect on product quality over fairly wide range | N/A |
            
                
                
                
                
                
                
            
| Process Flux (Average) | N/A | — | — | — | Process Performance Attribute: 15 – 20 LMH |
            
                
                
                
                
                
            
| Chase Buffer Volume | Determined by in-process measurement | — | Procedural controls | N/A |
            
                
                
                
                
                
                
            
| Product Concentration After Recovery & Chase | N/A | — | — | Must be in range to facilitate next process step; if final step in DS manufacture, must be consistent with requirements for formulating DP | CQA: To Specification |

            
| System Cleaning & Storage |
            
                
                
                
                
                
            
| Cleaning Solution | 0.4 to 0.6 N NaOH | Non-Key | Directly controllable and unlikely to affect product or process | N/A |
            
                
                
                
                
                
                
            
| Recirculation Rate | 10 L/min | 8 – 12 L/min | Non-Key | Adequate recirculation is needed to ensure proper cleaning, but range is wide | N/A |
            
                
                
                
                
                
                
            
| TMP | 10 PSI | 5 – 15 PSI | Non-Key | No impact to cleaning effectiveness over a wide range | N/A |
            
                
                
                
                
                
                
            
| Temperature | 30 °C | 25 – 35 °C | Non-Key | May impact cleaning effectiveness if far out of range; procedural controls in place such that the risk of running outside the range is unlikely | N/A |
            
                
                
                
                
                
                
            
| Time | 60 min | 60 – 90 min | Non-Key | Wide range, directly controlled to prevent running outside of the validated range | N/A |
            
                
                
                
                
                
            
| Storage Solution Normality | 0.09 to 0.10 N NaOH | Non-Key | Directly controllable, unlikely to affect product or process | N/A |
        

        

        

*Refer to Section 3.6 for additional information on proven acceptable range (PAR).

        

**Refer to ICH Q12 for additional clarification on critical, key, and non-key parameters. Refer to Figure 3.5-3 for additional information.

        

Figure 3.3-1: Example of Process Diagram for a Tangential-Flow Filtration Step (refer to source document for diagram).

    

    

        

### Tutorial Commentary

        

            

#### 核心概念解析 Key Concepts

            

**Proven Acceptable Range, PAR（已證實可接受範圍）：**經由實驗數據證明，在此操作範圍內，製程能持續產出符合品質規格的產品。PAR 是製程特性化（Process Characterization）研究的主要產出之一。

            

**Parameter Designation（參數分級）：**根據 ICH Q12 的框架，製程參數可分為三級：

            

                
- **Critical（關鍵）：**其變異直接影響 CQA，必須嚴格控制與監控

                
- **Key（重要）：**影響製程效能或一致性，但不直接衝擊產品品質

                
- **Non-Key（非關鍵）：**在寬範圍內操作皆可接受，風險低

            

        

        

            

#### 比喻說明 Analogy

            

想像你在烘焙麵包：

            

                
- **Critical 參數** = 酵母用量和水溫 — 稍有偏差，麵包就發不起來或過度發酵

                
- **Key 參數** = 揉麵時間 — 太短或太長會影響口感，但不至於讓麵包完全失敗

                
- **Non-Key 參數** = 擺放在烤盤上的位置 — 幾乎不影響最終成品

            

            

在 TFF 中，Diavolumes（透析倍數）是 Critical 的，因為它直接決定了緩衝液交換是否充分，就像酵母決定了麵包能不能膨脹一樣。

        

        

            

#### 重點提示 Key Notes

            

**注意分辨「輸入」與「輸出」：**表格中 Process Flux 和 Product Concentration 是**製程輸出**（outputs），不是可直接控制的參數。它們被歸類為 Process Performance Attribute 或 CQA，用於監測而非設定。

            

清洗與儲存步驟的參數全部為 Non-Key，這是因為這些步驟不直接接觸最終產品，且操作範圍寬廣，風險極低。但這不代表可以忽略 — 清洗驗證仍然是法規要求的重要環節。

        

        

            

#### 實務應用 Practical Application

            

**CDMO 情境：**假設你正在為客戶的抗體藥物建立 TFF UF/DF 製程。客戶要求你在 PAR 範圍內驗證，但你的系統體積（System Volume）在不同批次間存在 ±5L 的偏差。

            

由於 System Volume During DF 被評為 Critical，你必須確認此偏差是否落在 PAR（30-40 L）內，並評估其對 diavolume 計算的連鎖影響。若系統體積偏高（如 40L），實際交換效率可能不足，需要增加 diavolume 數量來補償。

        

        

            

#### 練習思考 Practice Questions

            

                
1. 為什麼 Initial Product Total Mass 被列為 Critical，而 Initial Product Volume 僅為 Key？兩者之間有什麼關係？

                
2. 如果 Recirculation Rate 降到 4 L/min（低於 PAR 下限 6 L/min），最可能發生什麼製程問題？

                
3. 清洗步驟的參數全部是 Non-Key，是否代表清洗失敗不會影響產品品質？請說明你的推理。

            

        

    

3.4 Analytical Methods

    

        

### Original Text

        

Analyses of raw materials, in-process samples, DS, and DP are important aspects of the control strategy and process characterization studies (refer to Section 3.8). Analytical methods used for such studies should be appropriate for their intended use, scientifically sound, reliable, and reproducible. Early-stage analytical method development may be optimized further down the lifecycle as appropriate, both on the improvement of the analytical technique as well as integrating different sample preparation processes to ensure meaningful test results (30). Strategies for qualification or validation of the analytical methods used during development have been published and provide approaches for evaluating tests used at this stage of the lifecycle (31).

        

The analytical method qualification should establish the expected performance of the method throughout the range of variation of the attribute experienced in quality control activities (e.g., range experienced at release, in-process controls, during stability studies). Guidance on expectations for the analytical methods is also outlined in the FDA's Guidance for Industry: Process Validation: General Principles and Practices. The process characterization plan and the associated study reports should document information on the analytical methods used during process characterization studies and the qualification of the methods. Methods should be targeted not only to assess the product-specific characteristics but also to ensure the correct monitoring of additional aspects with potential impact (e.g., bioburden, endotoxins in contamination controls).

        

The equipment utilized for process characterization studies (typically performed in development laboratories) must be adequately calibrated and maintained, and also satisfy the basic requirements for data integrity (DI).

        

The analytical test methods used to support PV programs must be developed in accordance with the analytical quality-by-design (AQbD) concepts, qualified, and subsequently monitored for continuous improvement adhering to a lifecycle approach. Test methods can be a significant contributing factor to the variability in reported results. ICH Quality Guideline Q14: Analytical Procedure Development incorporates the application of quality by design (QbD) principles into analytical method development (32). An analytical target profile (ATP), similar to a QTPP, provides a predefined objective that specifies the performance requirements for the analytical methods. ATPs include quality data attributes of the reportable result, such as accuracy and measurement uncertainty. The heightened understanding of the critical test method attributes and the development of an analytical control strategy can ensure reliable test results throughout the lifecycle. The assessment of the risk level of each method variable and determination of its impact on the reportable results is identified based on sound science, prior knowledge, and the design of analytical experiments. Method development activities design strategies to minimize input variables such that their impact on the test results is minimal. The development strategy considers aspects including preparation, measurement, instrumentation, and sampling strategy. Analytical lifecycle stages can be summarized into three stages as depicted in Figure 3.4-1 and in Figure 3.0-1 (33, 34).

        

Figure 3.4-1: Analytical Lifecycle Stages (refer to source document for figure).

        

With the adoption of the lifecycle concepts outlined in ICH Q14, the initial identification of CQAs is followed by a quality risk assessment (QRA) in Stage 1. This is a cause-and-effect analysis (e.g., fishbone or Ishikawa diagram) to identify process input parameters where variability is likely to have the greatest impact on product quality or process performance. This assessment is based primarily on prior knowledge or early development work, and the outcome provides the foundation for the process characterization studies that will follow (refer to Section 3.7).

        

Understanding the impact of process parameter variability and applying the appropriate controls is a fundamental element in the definition and development of the commercial control strategy. The analytical method development should take into consideration the inherent variability of the process and known impact of critical process parameters (CPP) onto CQAs. The overall process variability may include variance due to the process, as well as variance posed by the analytical method. ICH Q8(R2) defines a CPP as one "whose variability has an impact on a CQA and therefore should be monitored or controlled to ensure the process produces the desired quality" (35).

    

    

        

### Tutorial Commentary

        

            

#### 核心概念解析 Key Concepts

            

**Analytical Quality by Design, AQbD（分析品質源於設計）：**將 QbD 原則應用到分析方法開發中。就像製程有 QTPP 一樣，分析方法有 **Analytical Target Profile, ATP（分析目標概況）**，預先定義分析方法的效能要求（如準確度、測量不確定度）。

            

**ICH Q14（分析程序開發指引）：**2023 年正式發布的新指引，將分析方法開發正式納入生命週期管理架構。它強調分析方法不僅要「驗證通過」，更要在整個產品生命週期中持續監控和改進。

            

**Data Integrity, DI（資料完整性）：**確保數據在整個生命週期中保持準確、完整、一致和可靠。即使在開發階段的實驗室設備，也必須滿足 DI 的基本要求。

        

        

            

#### 比喻說明 Analogy

            

分析方法就像一把**量尺**：

            

                
- 如果量尺本身就有 ±2 cm 的誤差，那即使你用它測量了 100 次，你得到的數據也無法真正反映實際尺寸

                
- AQbD 就是要先確認「這把尺準不準」，然後在整個使用壽命中持續校正

                
- ATP 就像你先宣告：「我需要一把能精確到 ±0.5 mm 的尺」— 這是你的目標規格

            

            

如果你不考慮分析方法的變異，你可能會把「測量的噪音」誤判為「製程的變異」，導致錯誤的參數分類決策。

        

        

            

#### 重點提示 Key Notes

            

**總變異 = 製程變異 + 分析方法變異**

            

這是一個非常重要但常被忽略的概念。當你在製程特性化研究中觀察到某個 CQA 的變異時，你必須問自己：「這個變異有多少來自製程本身，有多少來自測試方法的不精確？」

            

如果分析方法的變異佔了觀察到的總變異的 30% 以上，那麼你對製程參數影響力的評估可能會被嚴重扭曲。這就是為什麼 TR60 強調分析方法也要走生命週期管理。

        

        

            

#### 公式與計算 Formula

            

```

Total Observed Variance = Process Variance + Method Variance

Var(total) = Var(process) + Var(method)

目標：Var(method) / Var(total) < 0.3 (通常規則)

若分析方法的變異係數 (CV) > 製程 CV 的 1/3，
則應優先改善分析方法，再進行製程特性化研究。
            
```

        

        

            

#### 圖表解讀 Figure Analysis

            

**Figure 3.4-1 分析生命週期三階段：**

            

                
- **Stage 1 — 方法設計（Method Design）：**定義 ATP、風險評估、方法開發與最佳化

                
- **Stage 2 — 方法確認（Method Qualification/Validation）：**驗證方法在預期範圍內的效能

                
- **Stage 3 — 持續方法驗證（Continued Method Verification）：**監控方法在日常使用中的表現，必要時進行改進

            

            

這三個階段與製程驗證的三階段（Process Design, Process Qualification, Continued Process Verification）完美對應，體現了 ICH 將「生命週期」思維貫穿整個品質體系的精神。

        

        

            

#### 練習思考 Practice Questions

            

                
1. 為什麼 TR60 強調即使在開發階段的實驗室設備也必須滿足 Data Integrity 要求？如果不滿足，會產生什麼後果？

                
2. ATP 和 QTPP 之間有什麼相似之處？請舉一個具體的 ATP 範例。

                
3. 如果你的分析方法 CV 是 8%，而製程 CV 是 5%，你認為應該先改善什麼？為什麼？

            

        

    

3.5 Risk Assessment and Parameter Criticality Designation

    

        

### Original Text

        

Risk assessment plays an important role in the development of a commercial control strategy. Risk assessments are performed by interdisciplinary teams at several points during Stage 1 of the lifecycle and serve several purposes (refer to Section 6.1). Risk assessment tools provide a structured means for documenting the data and rationale associated with the risk assessment outcome, which becomes part of the documented process development history. The Stage 1 risk assessment will identify and confirm the CQAs, CPPs, and critical material attributes (CMA).

        

Understanding the impact of variability and applying the appropriate controls is a fundamental element in the definition and development of the commercial control strategy. ICH Q8(R2) defines a CPP as "whose variability has an impact on a CQA and therefore should be monitored or controlled to ensure the process produces the desired quality" (35). Similarly, ICH Q8(R2) and ICH Quality Guideline Q11: Development and Manufacture of Drug Substances (Chemical Entities and Biotechnological/Biological Entities) also define the material attributes whose variability has an impact on a CQA, as illustrated in Figure 3.5-1. CMAs may be derived from the review of raw materials, media, solutions, starting or in-process material, DS CQA (physical, chemical, biological, or microbiological property), an excipient attribute, a DP primary packaging, or an incoming component attribute.

        

Beyond the generally recognized definition of a CPP from ICH Q8(R2), process parameter designations are not standardized, and approaches may vary. For this reason, definitions for parameter designations must be clearly documented and understood within the organization. Definitions should remain consistent throughout the process-validation lifecycle.

        

A process element may be an output for one process step (i.e., process intermediate from unit operation 1 in Figure 3.5-1 or DS material) yet be an input for the next process step (i.e., unit operation 2 in Figure 3.5-1 or DP).

        

Figure 3.5-1: Process Control Elements, Unit Operations, and Relations to Critical Quality Attributes (refer to source document for figure).

        

Figure 3.5-2 provides an example of a decision tree developed to guide the assignment of parameter designations in conjunction with the QRAs. The decision tree facilitates categorization of process parameters as critical, key, or operational. Decision-making tools can facilitate a common understanding among participants and offer the advantage of increasing consistency in the decision-making process as well as consistent documentation of rationales as part of the risk assessment process.

        

The decision tree can be used for iterative risk assessments both before and after the supporting data from process characterization studies are available.

        

Refer to Figure 3.5-2 for the Parameter Criticality Decision Tree. Figure depicts the inputs and outputs of the process as well as process parameter evaluation:

        

            
- **Input or Output:** Process variables can be inputs or outputs to a unit operation. For a given unit operation, each variable is initially established as an input or output based on direct controllability.
                

                    
    - **Yes:** Directly controllable process input parameters can contribute to process variability.

                    
    - **No:** Process outputs that are not directly controllable are attributes that are monitored and may be indicative of product quality or a quality attribute and/or process performance or performance attribute (PA).

                

            

            
- **Process Parameters:** Evaluation of potential impact to CQAs.
                

                    
    - **Yes:** If impact is suspected, or if data show that variability in a parameter could impact a CQA, the parameter is designated as a CPP. Although a parameter may be initially classified as a CPP, data from robustness studies conducted during process characterization may show that CQAs are not impacted, despite wide variations in the parameter. In these cases, the subsequent risk assessment serves to reevaluate the parameter classification.

                    
    - **No:** The process parameter is further evaluated for its potential impact on process performance or consistency if run outside of the defined range.

                

            

        

        

            "Where data from Stage 1 is leveraged in later stages (e.g., Stage 2 or 3), then the data generation and recording will require the same level of rigor as that used for Stage 2 and onwards."
        

        

Figure 3.5-2: Decision Tree for Designating Parameter Criticality (4) (refer to source document for figure).

    

    

        

### Tutorial Commentary

        

            

#### 核心概念解析 Key Concepts

            

**Critical Material Attribute, CMA（關鍵物料屬性）：**原料、培養基、溶液、起始物料或製程中間體的某個屬性，其變異會影響 CQA。CMA 的概念將品質控制的範圍從「製程參數」擴展到「輸入物料」。

            

**Parameter Criticality Decision Tree（參數關鍵性決策樹）：**一種結構化的決策工具，用於系統性地將製程變數分類為 Critical、Key 或 Operational。決策樹的第一步是判斷該變數是「可控輸入」還是「監測輸出」，這是最基本的分類邏輯。

            

**迭代式風險評估（Iterative Risk Assessment）：**風險評估不是一次性的活動。在製程特性化研究之前，先根據先驗知識做初步評估；研究完成後，再根據實驗數據更新評估結果。參數的分級可能會因新數據而改變。

        

        

            

#### 比喻說明 Analogy

            

參數分級決策樹就像**急診分流（Triage）**：

            

                
- 急診室收到病人時，護理師會先用標準化的分流協議（如 ESI 量表）快速評估：生命危險？需要緊急處置？還是可以等待？

                
- 決策樹的邏輯也是如此：先問「這是輸入還是輸出？」→ 再問「它影響 CQA 嗎？」→ 再問「它影響製程效能嗎？」

                
- 就像急診分流可能在病情變化後重新評估，參數分級也會在獲得新數據後迭代更新

            

        

        

            

#### 重點提示 Key Notes

            

**非標準化的挑戰：**TR60 明確指出，除了 ICH Q8(R2) 定義的 CPP 之外，參數分級的方法「並未標準化，各公司的做法可能不同」。這意味著：

            

                
- 你的公司必須建立**內部統一的定義**，並確保所有團隊成員理解一致

                
- 這些定義必須在整個產品生命週期中**保持一致**，不能因人而異或因時而變

                
- 在 CDMO 環境中，這尤其重要 — 因為你可能需要與不同客戶對齊各自的參數分類體系

            

        

        

            

#### 圖表解讀 Figure Analysis

            

**Figure 3.5-1 製程控制元素關係圖：**這張圖展示了一個關鍵概念 — **上一個單元操作的輸出可能是下一個單元操作的輸入**。

            

例如：UF/DF 步驟的輸出（蛋白質濃度、pH、導電度）會成為配方步驟的輸入物料屬性。因此，同一個參數在不同的單元操作中可能有不同的角色和分類。

            

**Figure 3.5-2 參數關鍵性決策樹：**這是一個實用的風險評估工具。其核心邏輯為：

            

                
1. 是輸入（可控）還是輸出（監測）？→ 輸出歸為品質或效能屬性

                
2. 對 CQA 有影響嗎？→ 有影響 = CPP（Critical）

                
3. 對製程效能有影響嗎？→ 有影響 = Key；無影響 = Non-Key / Operational

            

        

        

            

#### 實務應用 Practical Application

            

**CDMO 跨客戶管理：**假設客戶 A 將 pH 在特定步驟定義為 Critical，而客戶 B 將同一步驟的 pH 定義為 Key。作為 CDMO，你不能自行統一分類 — 必須尊重每個客戶的定義，但你可以使用標準化的決策樹工具來促進對話，釐清分類背後的科學依據。

            

這也是為什麼 TR60 強調決策樹的價值：它不僅幫助內部團隊達成共識，也是與外部合作夥伴溝通的通用語言。

        

        

            

#### 練習思考 Practice Questions

            

                
1. 在 Figure 3.5-2 的決策樹中，為什麼第一步是區分「輸入」和「輸出」而不是直接評估對 CQA 的影響？

                
2. 一個參數在製程特性化之前被列為 CPP，但研究後發現即使在 PAR 的極端值操作，CQA 也不受影響。根據 TR60，你應該怎麼做？

                
3. 引用框中的話「Stage 1 數據若用於後續階段，則需達到 Stage 2 的嚴謹程度」對你的開發實驗室有什麼實際意義？

            

        

    

3.6 Process Characterization

    

        

### Original Text

        

Process characterization is a set of documented studies in which process parameters are purposely varied to determine their effect on product quality attributes and process performance. The approach uses the knowledge and information from process risk assessments to determine a set of process characterization studies to examine the main effect and the interaction effect of process parameters on proposed ranges of variation on CQAs. The resulting information is used to determine the parameter criticality and to define the PAR for the process parameters. If using an enhanced approach (i.e., incorporating advanced analytical and/or manufacturing control technologies), it can also be used to set the final parameter ranges and develop a design space to process development. Experiments can be designed to examine proposed ranges and explore ranges wider than those that would normally be used in operation (refer to Section 4.3).

    

    

        

### Tutorial Commentary

        

            

#### 核心概念解析 Key Concepts

            

**Process Characterization（製程特性化）：**這是 Stage 1 的核心實驗活動。研究人員刻意改變製程參數，系統性地探索這些變化對產品品質和製程效能的影響。這不是「試誤法」— 而是基於風險評估的有計畫實驗。

            

**Main Effect vs. Interaction Effect（主效應 vs. 交互效應）：**

            

                
- **主效應：**單一參數變化對品質屬性的影響（如：溫度從 20°C 變到 25°C，收率降低 3%）

                
- **交互效應：**兩個或多個參數同時變化時產生的複合影響（如：溫度升高 + pH 降低時，收率降低 15% — 比各自單獨影響的總和更大）

            

            

**Design Space（設計空間）：**ICH Q8(R2) 定義的概念 — 多維的參數組合空間，在此空間內操作可以確保產品品質。若採用「增強方法（Enhanced Approach）」，製程特性化數據可用來建立設計空間，這是最高層次的製程理解。

        

        

            

#### 比喻說明 Analogy

            

製程特性化就像**地圖繪製探險**：

            

                
- 你知道大概的目的地（產品品質目標），但你不知道這片土地的地形

                
- 你派出探險隊（DOE 實驗）從不同路線出發，記錄哪些路線安全（PAR 內）、哪些路線危險（超出規格）

                
- 最終，你繪製出一張「安全區域地圖」（PAR 或 Design Space），告訴未來的旅行者：「只要在這片區域內行走，你一定能安全到達目的地」

            

            

增強方法（Enhanced Approach）就是不僅畫出安全路線，還用數學模型預測整片區域的地形，讓你有更大的操作彈性。

        

        

            

#### 重點提示 Key Notes

            

**探索範圍可以比操作範圍更寬：**TR60 明確指出，製程特性化實驗可以「探索比正常操作更寬的範圍」。這不是在製造不合格品 — 而是為了真正理解製程的邊界在哪裡。

            

只有知道「在哪裡會失敗」，你才能有信心地說「在這個範圍內一定會成功」。這就是 PAR 建立的科學基礎。

            

**兩種方法路徑：**

            

                
- **Traditional Approach：**建立 PAR，定義固定的操作範圍

                
- **Enhanced Approach：**建立 Design Space，允許在多維空間內靈活操作。需要更多的數據和更深的理解，但提供更大的製程彈性。

            

        

        

            

#### 練習思考 Practice Questions

            

                
1. 為什麼製程特性化要基於風險評估結果來設計實驗，而不是對所有參數都進行研究？

                
2. 舉一個具體的例子說明交互效應（Interaction Effect）可能導致比主效應更嚴重的品質影響。

                
3. Traditional Approach（建立 PAR）和 Enhanced Approach（建立 Design Space）各適合什麼樣的產品或製程？

            

        

    

    

### 本節重點回顧 Section Summary

    

        
- **TFF 參數分類範例（Section 3.3 續）：**完整展示了 TFF 製程中 Initial Concentration、Diafiltration、Final Concentration 和 System Cleaning 四個步驟的參數分級（Critical / Key / Non-Key），以及 CQA 和 Process Performance Attribute 的識別。清洗步驟的參數全部為 Non-Key，反映了其對產品品質的間接影響。

        
- **分析方法的生命週期管理（Section 3.4）：**ICH Q14 將分析方法納入生命週期管理，引入 AQbD 概念和 ATP。分析方法的變異是總觀察變異的一部分，必須在製程特性化之前充分理解和控制。開發階段的設備也必須滿足數據完整性（DI）要求。

        
- **風險評估與參數分級（Section 3.5）：**風險評估是識別 CQA、CPP 和 CMA 的核心工具。參數分級決策樹（Decision Tree）提供結構化方法，從「輸入/輸出」→「CQA 影響」→「效能影響」逐步分類。參數分級是迭代過程，會隨著新數據更新。各組織的分級定義未標準化，需建立內部一致性。

        
- **製程特性化（Section 3.6）：**基於風險評估結果，系統性地刻意改變製程參數，研究主效應和交互效應對 CQA 的影響。目標是建立 PAR 或 Design Space，為商業製造提供科學化的操作範圍依據。實驗可探索比正常操作更寬的範圍，以真正理解製程邊界。

        
- **Stage 1 數據的法規意義：**若 Stage 1 產生的數據將在 Stage 2 或 Stage 3 中使用，則這些數據的產生和記錄必須達到與 Stage 2 相同的嚴謹程度 — 這對開發實驗室的 GMP 管理有重要啟示。

    

    

PDA Technical Report No. 60 (Revised 2026): Process Validation — A Lifecycle Approach

    

Section 1b: Process Design Stage 1 Part 2 (Sections 3.3–3.6) | Pages 19–29

    

Educational Material — For training and reference purposes

⇧

## Section 2: Performance Qualification (Stage 2) 效能確認（第二階段） (p39-p66)

# Section 4.0-4.3 Performance Qualification (Stage 2) Part 1

    

績效確認（第二階段）第一部分 — 系統設計與確認、PQ、PPQ、PPQ 就緒性

    

PDA Technical Report No. 60 (Revised 2026) | p39 - p48

    

### 本章學習目標

    

        
- 理解 Stage 2 績效確認 (Performance Qualification) 的兩大核心組成要素：系統確認與 PPQ

        
- 掌握設施、設備、公用設施的設計、安裝與確認 (DQ/IQ/OQ/PQ) 流程與風險導向方法

        
- 認識維持系統受控狀態 (State of Control) 的週期性評估與事件驅動再確認機制

        
- 瞭解 Performance Qualification (PQ) 與 Process Performance Qualification (PPQ) 的區別與關聯

        
- 掌握 PPQ Readiness Assessment（就緒性評估）所需的完整交付項目清單

    

## 4.0 Performance Qualification (Stage 2)

    

        

### Original Text

        

Performance qualification (PQ) during Stage 2 demonstrates that the process, as designed, works as intended and yields reproducible commercial product. It should be successfully completed before the release of commercial product lots and consists of two elements:

        

            
- Design and qualification of the facility, equipment, and utilities, which should be completed prior to PQ

            
- PPQ, which confirms the process design and demonstrates the ability of the process to manufacture product that meets predetermined quality attributes

        

    

    

        

### 導師解析 Tutorial Commentary

        

            

#### 核心概念解析 Key Concepts

            

**Performance Qualification, PQ（績效確認）：**Stage 2 的核心目標是證明「設計好的製程在商業規模下確實能如預期運作」。這不只是跑幾批成功而已，而是要系統性地展示製程的可重複性 (reproducibility)。

            

**Stage 2 的兩大支柱：**

            

                
- **系統確認 (System Qualification)：**設施、設備、公用設施必須先被確認適合用途 — 這是地基

                
- **PPQ (Process Performance Qualification)：**在已確認的系統上，用商業製程實際生產 — 這是蓋房子

            

            

兩者有嚴格的先後順序：系統確認必須在 PPQ 之前完成。

        

        

            

#### 比喻說明 Analogy

            

想像你要開一家新餐廳。Stage 2 就像是「試營運」階段：

            

                
- **系統確認** = 確認廚房設備（烤箱、冰箱、排油煙機）都安裝正確且運作正常

                
- **PPQ** = 實際用這些設備按照菜單做出完整的餐點，確認品質穩定

            

            

你不會在烤箱還沒通過驗收時就開始烤蛋糕賣給客人 — 同理，設備未確認就不該做 PPQ。

        

        

            

#### 重點提示 Key Notes

            

PQ 必須在商業產品放行之前成功完成 — 這是監管機構的底線要求。FDA 2011 年 Process Validation Guidance 和 EU GMP Annex 15 都明確要求這一點。任何在 PQ 完成前放行的批次，都可能面臨監管風險。

        

    

## 4.1 Strategies for System Design and Qualification

    

        

### Original Text

        

Facilities, equipment, utilities, and instruments (collectively referred to as systems) used in the manufacturing process should be suitable and capable for their intended process use, and their performance during the operation should be robust and reliable. Systems that affect product quality should be qualified to reduce the equipment performance as a process variable. The review and qualification of these systems should be performed according to a predefined project plan. System qualification should precede Stage 2 PPQ activities. Qualification studies should be completed, reviewed, and approved, with all deviations addressed, prior to the start of PPQ studies.

        

Section 4.0 provides considerations for the preparation and performance of system qualification. More information on approaches to planning and performing system qualification may be found in several sources (27, 47-49). Figure 4.1-1 presents a typical sequence of activities that support the system qualification effort.

        

*Figure 4.1-1 Typical System Qualification Sequence*

    

    

        

### 導師解析 Tutorial Commentary

        

            

#### 核心概念解析 Key Concepts

            

**Systems（系統）：**TR60 將設施 (facilities)、設備 (equipment)、公用設施 (utilities) 和儀器 (instruments) 統稱為「系統」。這個統一用語強調的是：這些硬體不是孤立的個體，而是一個整合的製造平台。

            

**為什麼要確認系統？**確認的目的是「消除設備性能作為製程變數」。換句話說，當你的設備性能穩定可靠，製程中觀察到的變異就可以歸因於真正的製程參數，而不是設備的不穩定。

        

        

            

#### 重點提示 Key Notes

            

**關鍵時序要求：**

            

                
- 系統確認必須按照預先定義的專案計畫 (project plan) 執行

                
- 確認研究必須完成、審查、核准，且所有偏差已解決 — **全部在 PPQ 開始之前**

                
- 這是一個「門檻條件」(gate criterion)：未完成確認就不能進入 PPQ

            

        

        

            

#### 比喻說明 Analogy

            

這就像蓋房子的邏輯：你必須先完成地基驗收（系統確認），才能開始砌牆和裝修（PPQ）。如果地基有裂縫（偏差未解決），你不會急著蓋上去 — 因為那只會讓問題更難修復、成本更高。

        

        

            

#### 練習思考 Practice Questions

            

                
1. 為什麼 TR60 強調系統確認中的「偏差必須在 PPQ 之前全部解決」？如果帶著未關閉的偏差進入 PPQ，可能產生什麼後果？

                
2. 在 CDMO 場景中，如果客戶要求縮短時程，系統確認與 PPQ 是否可以平行進行？風險為何？

            

        

    

## 4.1.1 Engineering and Design

    

        

### Original Text

        

Facility, equipment, and utilities should be designed to meet process requirements. All qualification and validation activities should be planned, taking the lifecycle of facilities, equipment, utilities, process and product into consideration. The design of the facility and commissioning of the equipment and utilities should ensure the capability of operating as required for routine manufacturing. These activities and all commissioning-related tasks should be conducted according to good engineering practices and recorded according to good documentation practices, with oversight by the Quality Unit. A risk-based approach should be used, as appropriate, to evaluate the risks to product quality and patient safety related to the manufacturing system and the corresponding design solution to assure adequate controls and verification.

        

Specification and design activities should include a focus on those aspects that have been identified as being critical to product quality and patient safety. System design should be based on process parameters, control strategies, and performance requirements developed or identified during Stage 1. This information is transferred to those designing the engineering requirements for facility and manufacturing systems. Design qualification involves a review of the system design to assure that it is aligned with process control strategy and performance requirements. Specifications for equipment, facilities, utilities, or systems should be defined in User Requirements Specifications (URS) and/or a functional specification. The essential elements of quality need to be built in at this stage, and GMP risks should be mitigated to an acceptable level. The URS should be a point of reference throughout the validation lifecycle.

        

In situations where the process is being transferred to an operational facility with qualified equipment, a risk assessment should be performed to identify any equipment control gaps (36). These can be addressed through equipment modifications (which may require requalification) or through operational controls. Applying a life-cycle model to these situations is best practice.

        

A risk-based and science-based approach to the specification, design, verification, and qualification ensure that the manufacturing systems and equipment are fit for intended use (27).

        

### 4.1.1.1 Risk Assessment

        

Risk assessments determine which systems and system components have an impact on the establishment and maintenance of process parameters and conditions that affect product quality and patient safety. This information helps develop system qualification plans, protocols, test functions, and acceptance criteria. The process steps and systems that affect the product quality, mode of effects, and correlation between system performance and the control of process variables should be studied and understood. For more information on risk assessments, refer to Section 6.1.

    

    

        

### 導師解析 Tutorial Commentary

        

            

#### 核心概念解析 Key Concepts

            

**Design Qualification, DQ（設計確認）：**DQ 是確認流程的第一步 — 審查系統設計是否與製程控制策略和績效要求一致。DQ 不是在設備到貨後才做，而是在設計階段就要完成。

            

**User Requirements Specifications, URS（使用者需求規格）：**URS 是整個確認生命週期的參考基準點。它定義了設備/設施/公用設施必須滿足的功能需求，是從 Stage 1 的製程知識轉化而來。

            

**Good Engineering Practices（良好工程實務）：**試運轉 (commissioning) 活動應遵循良好工程實務，並以良好文件管理規範記錄 — Quality Unit 必須有監督角色。

        

        

            

#### 比喻說明 Analogy

            

URS 就像你裝修新家時寫給設計師的「需求清單」：「廚房需要雙槽洗碗台、抽油煙機排風量至少 X CFM、瓦斯爐要四口」。這份清單是後續驗收（確認）的依據 — 如果交屋時發現只有兩口瓦斯爐，那就是「偏差」需要處理。

        

        

            

#### 重點提示 Key Notes

            

**技術轉移場景的特殊考量：**當製程轉移到已有合格設備的營運設施時，不代表可以跳過確認。TR60 明確要求執行風險評估以找出「設備控制缺口」(equipment control gaps)。缺口可透過設備修改（可能需要再確認）或操作控制來彌補。

            

這對 CDMO 特別重要 — 因為 CDMO 經常將不同客戶的製程轉移到現有產線上。

        

        

            

#### 實務應用 Practical Application

            

**CDMO 情境：**某 CDMO 接到新客戶的蛋白質藥物充填專案，需要使用現有的隔離器充填線。雖然該充填線已通過確認，但新產品的黏度明顯高於先前產品。此時應：

            

                
- 執行風險評估，評估高黏度對充填泵性能、充填精度的影響

                
- 確認現有 URS 是否涵蓋新的製程需求

                
- 如需修改設備（如更換泵頭），則需要部分再確認

                
- 所有評估結果記錄於技術轉移文件中

            

        

        

            

#### 練習思考 Practice Questions

            

                
1. DQ 在確認序列中扮演什麼角色？為什麼它必須在 IQ/OQ/PQ 之前完成？

                
2. 如果 URS 在 commissioning 過程中發現需要修改，應該如何處理？這會影響後續哪些步驟？

            

        

    

## 4.1.2 Installation

    

        

### Original Text

        

Upon completion of a setup, system testing and inspection should be used to verify that the systems have been fabricated, constructed, and installed to engineering and process specifications. The information from this verification should be accurate, reliable, and useful and may be leveraged or used to support qualification testing.

        

The start-up and commissioning of systems should confirm that they are in good working order and operate as designed. Engineering studies can provide confidence that the systems will perform under process conditions and will keep performing regardless of seasonal variations. Adjustments to the systems to achieve the specified level of performance and operation may be needed. Information on modifications or adjustments should be documented and transferred to the team preparing the qualification plans and protocols.

    

    

        

### 導師解析 Tutorial Commentary

        

            

#### 核心概念解析 Key Concepts

            

**Commissioning（試運轉）：**確認系統處於良好工作狀態並按設計運作。試運轉的數據可以被「借用」(leveraged) 來支持正式確認測試 — 這是一個提高效率的重要機會。

            

**Installation（安裝）：**驗證系統已按照工程和製程規格正確製造、建造和安裝。重點是資訊必須準確、可靠、有用。

        

        

            

#### 重點提示 Key Notes

            

**季節性變異的考量：**TR60 特別提到工程研究應確認系統在不同季節條件下都能正常運作。例如，夏季的高溫高濕可能影響 HVAC 系統的除濕能力，冬季的低溫可能影響注射用水 (WFI) 迴路的溫度維持。這些必須在 commissioning 階段就被評估。

            

**資訊傳遞：**任何在試運轉中所做的修改或調整，都必須記錄並傳遞給準備確認計畫和方案的團隊。這確保了確認測試反映系統的真實狀態。

        

        

            

#### 比喻說明 Analogy

            

Commissioning 就像新車交車前的路試 (test drive)：業務員帶你開一圈確認車子可以正常啟動、轉向、煞車。如果路試中發現方向盤偏了一點（需要調整），這個資訊必須記錄在交車報告裡，而不是口頭說「已經調好了」就算數。

        

    

## 4.1.3 Qualification Plan

    

        

### Original Text

        

The qualification plan may be developed once the process requirements and correlation to process systems are understood. Early development of the qualification plans may provide valuable guidance to the design, installation, and commissioning efforts. To capture changes that result from start-up and commissioning, however, it may be prudent to complete the qualification plans and protocols after all the information from the commissioning has been transferred. This approach also enables a better understanding of the type and amount of information that can be leveraged from prequalification activities. This approach means that Stage 2 activities may be underway during and prior to completion of all Stage 1 activities.

        

### 4.1.3.1 Test Functions and Acceptance Criteria

        

System qualification tests or studies should be based on knowledge gained from previous activities, including Stage 1 and engineering studies. Test functions should be based on good scientific and engineering principles designed to demonstrate and assure that anticipated operating parameters will be met throughout the manufacturing process in a consistent and predictable manner. Acceptance criteria should be based on sound scientific rationale; the criteria should be useful, attainable, and where appropriate, quantifiable.

        

If sufficient process understanding is not available, or the scale-up effect is unknown, existing knowledge may be used during design and commissioning to define user requirements.

        

Formal system operating and maintenance procedures or instructions should be in place prior to the execution of test functions. Operators and those conducting studies should be trained in the operation of the systems and conduct of the tests. The training should be conducted under GMP conditions and documented according to good documentation practices (GDPs). All measuring and test instruments should be calibrated and traceable to appropriate standards.

        

When developing systems PQ studies, an effort should be made to design them as close to being representative of the future process as possible. Formulated placebos that possess major or critical qualities of the product being planned to run on the equipment could be used for this purpose. PQ studies conducted with such materials may help in future process understanding without using actual product. Deviations in the execution of qualification testing should be documented, investigated, and addressed. Conclusions should be based on the suitability and capability of the system to meet the process requirements. When necessary, systems may be modified, and studies may be repeated.

    

    

        

### 導師解析 Tutorial Commentary

        

            

#### 核心概念解析 Key Concepts

            

**Qualification Plan（確認計畫）：**確認計畫是連結「製程需求」與「系統能力」的橋樑文件。TR60 提出一個務實的觀點：雖然早期制定確認計畫對設計和安裝有指導價值，但最終版本最好在 commissioning 完成後才定稿 — 因為 commissioning 過程中的調整和變更都需要反映在確認計畫中。

            

**Acceptance Criteria（接受標準）：**必須基於合理的科學基礎，且要：

            

                
- **Useful（有用的）：**能真正衡量系統的適用性

                
- **Attainable（可達到的）：**不是不切實際的理想值

                
- **Quantifiable（可量化的）：**盡量用數字表達

            

        

        

            

#### 重點提示 Key Notes

            

**Stage 1 與 Stage 2 的重疊：**TR60 在此明確指出 Stage 2 活動可能在 Stage 1 完成之前就已經開始。這不是「跳過步驟」，而是合理的平行作業。關鍵是要確保必要的 Stage 1 資訊（如製程參數、控制策略）已經到位。

            

**安慰劑在 PQ 中的應用：**使用配方安慰劑 (formulated placebos) 進行系統 PQ 研究，可以在不使用實際產品的情況下獲得製程理解。安慰劑應具備產品的主要或關鍵特性（如黏度、密度）。

        

        

            

#### 比喻說明 Analogy

            

確認計畫就像考試大綱 — 你需要先知道要考什麼（製程需求），才能設計考題（測試項目）和評分標準（接受標準）。如果大綱出得太早，後來教材有修改（commissioning 調整），考題就可能與實際內容脫節。所以最好等教材定稿後，再最終確定考試大綱。

        

        

            

#### 練習思考 Practice Questions

            

                
1. TR60 為什麼建議在 commissioning 完成後才定稿確認計畫？這對專案時程管理有什麼影響？

                
2. 在設計 PQ 測試時使用安慰劑有什麼優點和限制？什麼情況下必須使用實際產品？

                
3. 接受標準要求「可達到的」— 這是否意味著標準可以設得很寬鬆？請討論合理設定接受標準的原則。

            

        

    

## 4.1.4 Maintaining Systems in a State of Control

    

        

### Original Text

        

Qualification studies ensure that the manufacturing systems, as designed and operated, are in a state of control throughout the lifecycle of products being manufactured. For the process to remain valid and controlled, the systems must be maintained to operate within the parameters established during qualification.

        

Periodic assessment and evaluation of the system to determine its control status is important. The assessment should include a review of information that indicates or supports assurance of control. This information may include, but is not limited to, such items as:

        

            
- Calibration records

            
- Preventive and corrective maintenance records

            
- Equipment logs

            
- Critical process alarms

            
- Equipment (filters, compressed gasses, water) testing data

            
- Training records

            
- Standard operating procedures

            
- Utilities standards

            
- URS repositories

            
- Change requests

            
- Work orders

            
- Monitoring results and trends

            
- Nonconformance reports and deviations and their trending

            
- Failure investigations and their trending

            
- Periodic requalification assessments and studies

        

        

Periodic assessment of systems may lead to additional qualification-related activities or testing. In addition to periodic assessments, event-driven assessments and requalifications may arise from process-related changes, out-of-specification (OOS) results and trends, and investigations. The system assessments and the events that trigger event-driven assessments should be recorded in a formal procedure that also addresses the mechanism for deciding when requalification is warranted, the criteria for doing so, and those responsible for it. It is recommended that subject matter experts and the Quality Unit should also be involved in these decisions. Maintenance trending should be benchmarked and periodically reviewed at a quality council forum to assess a state of qualification at the facility that helps in determining PPQ readiness from an equipment, utilities, and facilities perspective. In case of an emergency, such as sudden novel disease outbreaks arising, submitting the proof of the manufacturing equipment qualification, as well as a list of critical equipment for a products' manufacturing, is especially important (27).

    

    

        

### 導師解析 Tutorial Commentary

        

            

#### 核心概念解析 Key Concepts

            

**State of Control（受控狀態）：**確認不是一次性活動 — 系統必須在產品生命週期的整個期間持續維持在受控狀態。這需要兩種機制的配合：

            

                
- **週期性評估 (Periodic Assessment)：**定期審查各項記錄和數據，確認系統仍在確認範圍內運作

                
- **事件驅動評估 (Event-Driven Assessment)：**當發生變更、OOS 結果或調查時，觸發再確認評估

            

        

        

            

#### 重點提示 Key Notes

            

**維護趨勢的品質審議：**TR60 特別要求維護趨勢應在品質委員會 (quality council) 論壇上定期審議 — 這不只是工程部門的事，品質部門必須參與。這種跨部門審議有助於從設備/公用設施/設施角度判斷 PPQ 就緒性。

            

**緊急情況的考量：**在突發的新型疾病爆發等緊急情況下，提交製造設備確認證明以及關鍵設備清單特別重要 — 這呼應了 COVID-19 疫情期間的實際經驗。

        

        

            

#### 比喻說明 Analogy

            

維持受控狀態就像保養汽車：你不能只在買車時做檢查（初始確認），然後就再也不管了。你需要：

            

                
- **定期保養**（週期性評估）：每 10,000 公里換機油、檢查煞車

                
- **事件驅動維修**（事件驅動再確認）：引擎燈亮了、異常噪音出現時，立即檢修

            

            

更關鍵的是，這些保養紀錄不只是技師看 — 車廠的品質部門也要定期審查趨勢（類似品質委員會審議）。

        

        

            

#### 實務應用 Practical Application

            

**CDMO 實務：**建立設備確認狀態的數位儀表板 (dashboard)，整合以下資訊：

            

                
- 校驗到期日和完成率

                
- 預防性維護完成率與逾期項目

                
- 偏差和 OOS 事件的趨勢

                
- 變更請求的影響評估狀態

            

            

這個儀表板可以在品質委員會會議上作為「設備就緒性」的即時報告工具，加速 PPQ 就緒性決策。

        

        

            

#### 練習思考 Practice Questions

            

                
1. 週期性評估和事件驅動評估有什麼區別？請各舉一個觸發再確認的具體場景。

                
2. 為什麼維護趨勢需要在品質委員會層級審議，而不只是工程部門內部管理？

            

        

    

## 4.2 Performance Qualification

    

        

### Original Text

        

Performance qualification (PQ) must be performed at the end of the operational qualification (OQ) or in conjunction with the OQ or the PPQ. The following statements from EU GMP Annex 15 contains an accurate definition that PQ should include, but is not limited to, the following (50):

        

            
- Testing using production materials, qualified substitutes or simulated product proven to have equivalent behavior under normal operating conditions with worst-case batch sizes. The frequency of sampling used to confirm process control should be justified.

            
- Testing should cover the operating range of the intended process, unless documented evidence from the development phases confirming the operational ranges is available.

        

        

For parenteral products, the type of PQs to be performed can vary substantially and are designed to verify the ability to:

        

            
- Clean components and equipment parts

            
- Sterilize loads using steam or EtO (ethylene oxide), for example, and decontaminate via vapor phase hydrogen peroxide (VPHP) or other sterilants

            
- Depyrogenate containers

            
- Fill a placebo and fill media-filled units (APS)

            
- Inspect placebo units

            
- Ensure an environment meets microbiological and total-particle requirements

            
- Perform clean-air projector use and unidirectional flows to protect from a possible contamination (air-flow pattern tests)

        

        

Usually, during the PQ, possible risks can be identified more precisely before going into the PPQ, because it is the first time that equipment, facility, components, and process come together. The fact that PQ is a partial simulation cannot rule out the possibility that some unexpected surprise could come up during the PPQ.

        

There is another potential activity, called Line PQ, that should be considered. Depending on the complexity of the system, there might be instances where the overall PQ of the system needs to be assessed following the successful PQ of specific components of the system. Therefore, the Line PQ is targeted to prove that a combination of individually qualified systems can interact successfully, yielding satisfactory performance. The Line PQ is focused on verifying the functionality of the system in its entirety with regard to real working conditions, including the use of manufacturing instructions. This can also test the full functionality and integration between the instructions, the process automation, and the equipment. If a product trial or APS is performed, the final report from these studies can fulfill the requirement of the Line PQ.

        

For this reason, it is also prudent to manufacture demonstration lots or engineering lots. These manufacture demonstration lots or engineering lots reflect the proposed process to be qualified, and may be manufactured with rejected DS or with non-commercial DS, such as material from engineering runs.

    

    

        

### 導師解析 Tutorial Commentary

        

            

#### 核心概念解析 Key Concepts

            

**PQ vs PPQ — 關鍵區別：**

            

                
- **PQ (Performance Qualification)：**驗證個別系統或系統組件的性能 — 可使用安慰劑、替代品或模擬產品。重點是「設備/系統能不能做到」。

                
- **PPQ (Process Performance Qualification)：**驗證整個製程在商業規模下的一致性 — 使用實際商業製程和物料。重點是「整個製程能不能穩定產出合格產品」。

            

            

**Line PQ（產線 PQ）：**一個重要但常被忽略的概念。當個別系統都通過 PQ 後，還需要確認這些系統「組合在一起」能否順利運作。這就像音樂會中每個樂器都調音完畢，但還需要全體合奏一次才知道是否協調。

        

        

            

#### 重點提示 Key Notes

            

**注射劑 PQ 的多元面向：**TR60 列出了注射劑 PQ 涵蓋的廣泛領域 — 從清潔、滅菌、除熱原、充填到環境監測。這凸顯了無菌製造的複雜性：不只是「充填」這一步，而是整個無菌製造系統都需要確認。

            

**Demo/Engineering Lots 的價值：**在正式 PPQ 之前製造示範批或工程批，可以：

            

                
- 在不影響 PPQ 數據完整性的情況下發現問題

                
- 訓練操作人員

                
- 驗證批次紀錄的可操作性

                
- 可使用不合格 DS 或非商業 DS，降低成本

            

        

        

            

#### 比喻說明 Analogy

            

**PQ vs PPQ 的餐廳比喻：**

            

                
- **PQ** = 分別測試每台廚房設備：烤箱能不能達到指定溫度、冰箱能不能維持冷藏溫度、洗碗機能不能洗乾淨

                
- **Line PQ** = 讓整個廚房團隊用這些設備完成一整套模擬出餐流程

                
- **PPQ** = 正式試營運，用真正的食材、按真正的菜單、服務真正的客人

                
- **Demo lots** = 在試營運前，先用便宜的食材練習整個流程

            

        

        

            

#### 練習思考 Practice Questions

            

                
1. EU GMP Annex 15 要求 PQ 測試應涵蓋「worst-case batch sizes」。為什麼最差情況批量很重要？請舉例說明。

                
2. Line PQ 與 APS (Aseptic Process Simulation) 有什麼關聯？APS 的結果是否可以替代 Line PQ？

                
3. 工程批 (engineering lots) 使用不合格 DS 的做法，在法規上有什麼注意事項？

            

        

    

## 4.3 Process Performance Qualification

    

        

### Original Text

        

PPQ marks the transition from development and clinical manufacturing to routine commercial production. The PPQ combines the actual facility, utilities, equipment (each now qualified), and trained personnel with the commercial manufacturing process, control procedures, and components to produce commercial batches. PPQ confirms the process design and the success of the process control strategy to produce batches at the commercial manufacturing scale, as expected. PPQ provides confidence that the systems of monitoring, control, and procedures in routine manufacturing are capable of detecting and compensating for potential sources of process variability over the product lifecycle.

        

The number of successful batches executed during the PPQ study should not be viewed as the primary objective of a PPQ campaign. While successful runs of commercial-scale batches can indicate overall operational proficiency and sound process design, these batches should also be viewed as a means to collect the data needed to demonstrate that the process control strategy is effective. The type and amount of data should be based on the understanding of the process, the impact of process variables on product quality, and the process control strategy developed during Stage 1. Prior knowledge should be used as well. For instance, in the cases of emergencies when the accelerated development and validation of products are desired, the data to support the formulation may differ depending on the platform but, at a minimum, should include the critical aspects of product characterization, a potency assay, and the data on stability generated, as well as the qualification state of the manufacturing equipment being used (27). The number of batches needed to acquire this information and data may be mainly based on a statistically sound sampling plan that supports the desired confidence level. It may also be influenced by the approach selected to demonstrate that the within-batch and batch-to-batch variabilities of CQAs are acceptable.

        

The entirety of Section 4.3 discusses design strategy for the PPQ, recommended content for the protocol and report, and transition to Stage 3 of the PV lifecycle.

    

    

        

### 導師解析 Tutorial Commentary

        

            

#### 核心概念解析 Key Concepts

            

**PPQ — Process Performance Qualification（製程績效確認）：**PPQ 是從開發/臨床製造到例行商業生產的轉折點。它的本質是將所有已確認的元素整合在一起：

            

                
- 已確認的設施、公用設施、設備

                
- 經訓練的人員

                
- 商業製程、控制程序和組件

            

            

目的是證明製程控制策略在商業規模下有效，並能偵測和補償製程變異性。

        

        

            

#### 重點提示 Key Notes

            

**PPQ 不只是「跑幾批成功」：**TR60 明確指出，PPQ 的主要目標**不是**成功生產的批次數量。成功的批次是收集數據的「手段」，真正的目標是證明製程控制策略的有效性。這個觀念的轉變非常重要 — 過去業界常把「三批成功」當成 PPQ 的終極目標，但現代生命週期方法強調的是數據驅動的信心。

            

**緊急情況的彈性：**TR60 也承認在緊急情況（如疫情）下，加速開發和驗證時，數據要求可以有所不同，但至少要包括：

            

                
- 產品表徵的關鍵面向

                
- 效力分析 (potency assay)

                
- 穩定性數據

                
- 製造設備的確認狀態

            

        

        

            

#### 比喻說明 Analogy

            

PPQ 就像正式的駕照路考：

            

                
- 車輛已通過驗車（設備確認）

                
- 你已在駕訓班受訓（人員訓練）

                
- 路考路線已規劃好（製程和控制程序）

                
- 路考的目的不只是「到達終點」（成功批次），而是要展示你在整個過程中都遵守交通規則、處理突發狀況的能力（製程控制策略的有效性）

            

        

        

            

#### PPQ 數據需求決策邏輯

            

```

PPQ 批次數量的決定因素：
  ├─ 製程理解程度（Stage 1 知識）
  ├─ 製程變數對品質的影響
  ├─ 製程控制策略的完整性
  ├─ 先前知識的可用性
  └─ 統計抽樣計畫（支持所需的信心水準）

變異性評估維度：
  ├─ Within-batch variability（批內變異）
  └─ Batch-to-batch variability（批間變異）
            
```

        

        

            

#### 練習思考 Practice Questions

            

                
1. 為什麼 TR60 強調 PPQ 的主要目標「不是成功批次數量」？這與傳統「三批驗證」的方法有什麼根本差異？

                
2. 在緊急情況下的 PPQ，最低限度要包含哪些數據？為什麼效力分析 (potency assay) 是不可或缺的？

            

        

    

## 4.3.1 Process Performance Qualification Readiness

    

        

### Original Text

        

The transition from Stage 1 to Stage 2 of the PV lifecycle may not be strictly sequential. Completion of some Stage 1 activities may overlap with those from Stage 2 and may include parallel studies, such as mixing and/or hold studies. Likewise, some preparative Stage 2 activities will be initiated in parallel with those from later Stage 1 activities. Components of Stage 2 PPQ readiness activities (refer to Section 3.1) include, among others:

        

            
- Drafting PV master plan

            
- Drafting project plan

            
- Qualifying facilities, utilities, and equipment

            
- Completing successfully the required PQ studies, including APS

            
- Training personnel

            
- Drafting the initial CPV plan

        

        

Although the initiation of PPQ activities is not contingent upon completion of all Stage 1 activities, a readiness assessment should be conducted to determine the timing of sufficient information and completion of activities to support moving forward with PPQ batch manufacture. The readiness assessment should include deliverables from Stage 1, as outlined starting from Section 3.1, and other elements as required:

        

            
- **Quality Target Product Profile (QTPP):** Initiated at the start of Stage 1, it should be updated to reflect the knowledge obtained from Stage 1 prior to initiating PPQ (17).

            
- **Critical Quality Attributes (CQAs) with Criticality Assessment:** CQAs are identified early in Stage 1. They are confirmed to account for additional analytical characterization, clinical and/or nonclinical data, and information gathered during Stage 1. CPPs that impact CQAs are reviewed and updated based on detectability and occurrence (17, 27).

            
- **Material Attributes with Criticality Assessment:** Material attributes are identified early in Stage 1. They are confirmed to account for additional analytical characterization, clinical and/or nonclinical data, and information gathered during Stage 1. CPPs that impact material quality attributes are reviewed and updated based on detectability and occurrence (17, 27).

            
- **Commercial Manufacturing Process Description:** This is started in Stage 1 and updated to reflect the finalized commercial process supported by Stage 1 studies and data. These include elements outlined in Section 3.4 and any changes resulting from the qualification of the facilities, utilities, and equipment as outlined in Section 4.1.

            
- **Analytical Methods:** Appropriately validated or suitably qualified methods should be identified. Methods for product release and stability should be fully validated according to ICH requirements prior to initiating PPQ batch testing. Any additional tests beyond normal release testing used to support PPQ should be identified and suitably qualified/validated prior to being used to test PPQ batches (33, 34, 51). The justification of the status for use in the PPQ studies (qualified and/or validated) should be fully documented for each analytical method.

            
- **Approved Commercial Batch Production and Control Records:** Changes may be made to batch records during Stage 1 to enhance, clarify, or optimize manufacturing instructions and/or reflect knowledge gained during process characterization. Master batch records reflecting the final commercial process to be studied in PPQ should be approved prior to PPQ batch execution.

            
- **Process Design and Development Report:** This report (refer to Section 3.7) is documentation for the process design and development justifications, which includes risk-ranking of parameters and ranges for the process that will undergo PPQ study. This information should be finalized prior to the PPQ study design since it provides the scientific support to justify the PPQ acceptance criteria.

            
- **PPQ Risk Assessment Report Prior to Stage 2:** This report documents risk assessment exercise(s) based on the knowledge summarized in the Process Design and Development Report. This activity summarizes decisions regarding the type and extent of process controls of the process being qualified. These risk management events should be conducted by an interdisciplinary team that includes experts from a variety of disciplines (e.g., process engineering, industrial pharmacy, analytical chemistry, microbiology, statistics, manufacturing, and quality assurance).

            
- **Process Validation Master Plan (PVMP):** Drafting of the PVMP should begin in Stage 1 and should be finalized prior to initiation of the PPQ study. Elements of the PVMP are outlined in Section 3.8.

            
- **Quality System and Training:** Qualified and trained personnel are essential to PPQ studies. Detailed, documented training specific to the PPQ is required for functional groups directly involved in the execution of each study. To minimize the risk of human error, personnel should understand their role in protocol execution. Quality Unit approval of PPQ activities should be completed prior to initiation of every PPQ study, and all PPQ studies should be conducted within the quality system.

            
- **Approved Protocols for PPQ Studies:** Protocols for each study should be approved, including Quality Unit approval, and finalized prior to initiation of PPQ studies. Refer to Section 4.4 for the design and content of PPQ protocols.

        

    

    

        

### 導師解析 Tutorial Commentary

        

            

#### 核心概念解析 Key Concepts

            

**PPQ Readiness Assessment（PPQ 就緒性評估）：**這是 Stage 1 到 Stage 2 的關鍵「閘門」(gate)。就緒性評估不要求所有 Stage 1 活動都已完成 — 而是要確認「足夠的資訊和活動已完成」以支持開始 PPQ 批次製造。

            

TR60 列出的就緒性檢查項目構成了一份完整的交付項目清單，涵蓋了從產品定義到人員訓練的方方面面。

        

        

            

#### 重點提示 Key Notes

            

**PPQ 就緒性的 11 項關鍵交付項目：**

            

                
1. **QTPP** — 必須更新以反映 Stage 1 的知識

                
2. **CQAs + 關鍵性評估** — 基於偵測性和發生率更新

                
3. **物料屬性 + 關鍵性評估** — 同上邏輯

                
4. **商業製程描述** — 反映最終的商業製程

                
5. **分析方法** — 放行和穩定性方法必須完全驗證

                
6. **核准的批次紀錄** — 反映最終商業製程

                
7. **製程設計與開發報告** — 提供 PPQ 接受標準的科學支持

                
8. **PPQ 風險評估報告** — 跨部門團隊執行

                
9. **PVMP** — 在 PPQ 開始前定稿

                
10. **品質系統和訓練** — PPQ 專屬的詳細訓練

                
11. **核准的 PPQ 方案** — Quality Unit 核准

            

        

        

            

#### 比喻說明 Analogy

            

PPQ Readiness 就像一架飛機起飛前的 preflight checklist（起飛前檢查表）：

            

                
- 燃油量充足？（QTPP 和 CQAs 已更新）

                
- 儀表板正常？（分析方法已驗證）

                
- 飛行計畫已提交？（PVMP 已定稿）

                
- 機組人員已就位且完成簡報？（人員訓練完成）

                
- 塔台已許可？（Quality Unit 已核准方案）

            

            

少了任何一項就不該起飛 — 即使天氣很好、乘客已經上機。

        

        

            

#### 實務應用 Practical Application

            

**CDMO PPQ 就緒性評估實務：**建議使用結構化的就緒性檢查矩陣 (readiness matrix)，包含以下欄位：

            
                
| 交付項目 | 負責部門 | 狀態 | 備註 |
| --- | --- | --- | --- |
                
| QTPP 更新 | 製程開發 | Complete / In Progress / Not Started | -- |
                
| CQA 評估 | 品質 / 分析 | Complete / In Progress / Not Started | -- |
                
| 分析方法驗證 | QC | Complete / In Progress / Not Started | 各方法逐一記錄 |
                
| 設備確認 | 工程 / 驗證 | Complete / In Progress / Not Started | 包含偏差狀態 |
                
| 人員訓練 | 各部門 | Complete / In Progress / Not Started | PPQ 專屬訓練 |
            

            

此矩陣應由跨部門團隊定期審議（建議每週），並在所有項目為「Complete」時才正式開始 PPQ。

        

        

            

#### 重點提示 Key Notes

            

**分析方法的就緒要求：**TR60 對分析方法有明確的層次要求：

            

                
- **放行和穩定性方法：**必須按 ICH 要求「完全驗證」(fully validated)

                
- **PPQ 額外測試方法：**至少需要「適當確認/驗證」(suitably qualified/validated)

                
- 每個分析方法的確認/驗證狀態和使用理由都必須完整記錄

            

            

這對 CDMO 來說是常見的挑戰，因為新產品的分析方法轉移和驗證往往是 PPQ 就緒性的瓶頸。

        

        

            

#### 練習思考 Practice Questions

            

                
1. 為什麼 PPQ 就緒性評估不要求所有 Stage 1 活動都已完成？這在實務中如何平衡效率與風險？

                
2. PPQ 風險評估報告要求跨部門團隊（製程工程、工業藥學、分析化學、微生物學、統計學、製造和品質保證）參與。為什麼每個專業領域的參與都很重要？

                
3. 在 CDMO 場景中，如果客戶提供的 Stage 1 數據不完整，應該如何處理 PPQ 就緒性評估？

# Section 4.4 Design Strategy for Process Performance Qualification

    

製程性能確認之設計策略

    

PDA Technical Report No. 60 (Revised 2026): Process Validation — A Lifecycle Approach | p49 - p56

    

### 本章學習目標

    

        
- 理解 PPQ 設計策略的整體框架，以及為何需要系統性方法來確認製程性能

        
- 掌握如何運用先驗知識 (Prior Knowledge) 與 Stage 1 數據支持 PPQ 研究設計

        
- 瞭解 PPQ 研究設計的關鍵要素，包括批次數量、操作條件、取樣計畫與統計評估

        
- 學習風險導向的 PPQ 取樣大小論證方法，包括 FDA 對取樣的法規要求

        
- 認識 PPQ 計畫 (PPQ Master Plan) 的架構與其在 QTPP 到 QRM 到 PPQ Protocol 之間的橋樑角色

    

## 4.4 Design Strategy for Process Performance Qualification

    

        

### 原文內容 Original Text

        

Design Strategy for PPQ refers to a systematic approach used in the pharmaceutical and biopharmaceutical industries to ensure that a manufacturing process is capable of consistently producing products that meet predefined specifications and quality attributes. The strategy focuses on validating the manufacturing process through testing and gathering data under normal operating conditions. This strategy should be internally evaluated by a multi-department team, including quality assurance and regulatory affairs personnel.

    

    

        

### 導師解析 Tutorial Commentary

        

            

#### 核心概念解析 Key Concepts

            

**PPQ Design Strategy (PPQ 設計策略)：**這不是單純「跑三批就好」的傳統思維。PPQ 設計策略是一套系統性方法，從製程理解出發，透過科學化的試驗設計來證明商業化製程具備一致性生產合格產品的能力。

            

關鍵在於「**predefined specifications**」——所有接受標準必須在執行 PPQ 之前就已定義完成，而非事後回頭修改。這體現了 ICH Q8/Q9/Q10 所強調的品質源於設計 (Quality by Design, QbD) 理念。

        

        

            

#### 比喻說明 Analogy

            

PPQ 設計策略就像規劃一場**大規模的期末考**：你不能等到考試當天才決定考哪些範圍。老師（製程開發團隊）必須根據整學期教的內容（Stage 1 數據），決定考試題目（PPQ 測試項目）、評分標準（接受標準）、以及需要多少題目才能全面評估學生能力（批次數量與取樣策略）。

        

        

            

#### 重點提示 Key Notes

            

TR60 特別強調 PPQ 設計策略需要**跨部門團隊**（multi-department team）共同評估，包含 QA 與 RA 人員。這意味著 PPQ 不僅是製造部門的事，品質保證與法規事務的早期參與對於確保策略的合規性至關重要。

        

    

## 4.4.1 Use of Prior Knowledge and Stage 1 Data to Support PPQ

    

        

### 原文內容 Original Text

        

In a lifecycle approach to PV, sources of data and information outside of the PPQ batches may be used to support a high degree of confidence in an ongoing state of process control. Prior knowledge is that which has been gained from similar products and processes. It may come from experience with a portfolio of similar molecules, where platform manufacturing strategies have been developed using existing facilities and equipment (e.g., platform manufacturing processes for monoclonal antibodies) or from similar process and unit operations. Leveraging the data from similar products and processes may provide an additional level of confidence in the process control of a product and process that uses a similar control strategy and unit operations. However, the situation could change in the case of molecule-specific sensitivity (e.g., sensitivity to gamma-irradiated critical consumables or VPHP) resulting in the need to apply changes to the platform manufacturing strategies (e.g., switching from gamma-sterilized to steam-sterilized consumables) and to consider additional aspects of the control strategy.

        

By contrast, likely first-in-class molecules and/or products manufactured in new facilities or with new equipment will probably require increased emphasis on data-gathering in Stage 1 to support PPQ readiness. To gather sufficient data to demonstrate an acceptable level of confidence in the commercial manufacturing process when little prior knowledge or Stage 1 data are available, the scope and extent of PPQ may need to be increased. This increased scope can both be translated in the need to run demo or engineering lots prior to official PPQ lots and/or by increasing the number of PPQ lots. Demo lots or engineering lots may be manufactured to gain knowledge into the process while also exploring operational ranges for CPPs. Successful demo or engineering lots can be used as a gateway to proceed into PPQ. In addition, successful completion of demo or engineering lots could be used to justify the number of lots needed for PPQ.

        

The rationale and scientific justification for the use of existing data (prior knowledge) to support Stage 2 should be documented in the PV master plan. All prior knowledge and Stage 1 data used to support PPQ must be retrievable, traceable, verified, and generated using good scientific practices.

        

Where there is greater prior knowledge or process design for a new product or process, that knowledge and data is used in a scientific, statistical, and risk-based manner to determine the appropriate size of PPQ studies. Limited prior knowledge will require proportionally more Stage 1 and/or PPQ knowledge.

        

Some examples of cases where prior knowledge may be useful for PPQ include:

        

            
- Setting acceptance criteria in PPQ studies, for example, bioburden and endotoxin in-process acceptance criteria, in cases where facility history and limits for other processes can be applied to similar processes that employ the same facility and equipment. (Assumes the limits for the previous product are appropriate for the quality of the new product.)

            
- Using data from other product PPQ supportive studies, for example, in platform purification operations where the same or similar buffer formulations will be used in the same vessels, buffer hold-studies already performed for a different product can be used to support the PPQ for buffers used for the new product (52).

        

        

            Note: For more information regarding solid and semi-solid dosage forms, refer to TR 60-2 (53).
        

    

    

        

### 導師解析 Tutorial Commentary

        

            

#### 核心概念解析 Key Concepts

            

**Prior Knowledge (先驗知識)：**指從類似產品與製程中獲得的知識與數據。在生物製藥領域，這通常來自**平台製造策略** (Platform Manufacturing Strategies)，例如以單株抗體 (mAb) 為基礎的平台製程。

            

TR60 明確指出先驗知識與 PPQ 範圍之間存在**反比關係**：

            

                
- **先驗知識充足** → PPQ 範圍可適度精簡

                
- **先驗知識有限** → 需增加 Stage 1 研究和/或 PPQ 批次數量

            

            

**Demo / Engineering Lots (示範批/工程批)：**在正式 PPQ 批次前製造的非商業批次，用於探索 CPP 操作範圍、累積製程知識，並作為進入 PPQ 的門檻評估。

        

        

            

#### 比喻說明 Analogy

            

先驗知識就像你搬到**新廚房**做菜的經驗累積。如果你在同一品牌的烤箱上已經烤了上百個蛋糕（平台製程），你大概知道溫度和時間怎麼設定。但如果是你從未用過的全新品牌烤箱（first-in-class），你需要先做幾次試烤（demo lots）來熟悉新設備，才能有信心正式出貨。

            

而「molecule-specific sensitivity」就像發現某些食材對特定烤盤材質會產生意外反應（例如酸性水果碰到鋁箔），即使你對烤箱操作很熟悉，仍需要針對特殊材料調整策略。

        

        

            

#### 重點提示 Key Notes

            

**先驗知識使用的四大要求：**所有用於支持 PPQ 的先驗知識必須滿足：

            

                
- **Retrievable (可檢索)：**能找得到原始資料

                
- **Traceable (可追溯)：**能追溯資料來源與生成過程

                
- **Verified (已驗證)：**資料的準確性已經確認

                
- **Generated using good scientific practices (依良好科學實務生成)：**研究設計與執行符合科學原則

            

            

這些要求確保先驗知識不是「拍腦袋」的經驗談，而是有科學根據的可靠數據。

        

        

            

#### 實務應用 Practical Application

            

**CDMO 場景：**假設你的 CDMO 有三個已完成 PPQ 的 mAb 產品，都使用相同的 Protein A 層析管柱和相同的 CIP 程序。當第四個 mAb 產品進來時，你可以引用前三個產品的層析管柱清洗驗證數據作為先驗知識，減少第四個產品在這個單元操作上的 PPQ 測試範圍。但必須在 PVMP 中詳細記錄科學論證。

        

        

            

#### 練習思考 Practice Questions

            

                
1. 如果你的公司正在開發一個 first-in-class 的基因治療產品，而公司過去只有 mAb 製造經驗，哪些方面的先驗知識仍然可以適用？哪些需要從頭建立？

                
2. Demo lots 與正式 PPQ 批次的主要區別是什麼？Demo lots 的數據可以直接用來取代 PPQ 數據嗎？

            

        

    

## 4.4.1.1 Use of Stage 1 Data for Process Performance Qualification

    

        

### 原文內容 Original Text

        

Processes and products for which there is little or no prior knowledge may require a greater emphasis on Stage 1 and PPQ activities to demonstrate an acceptable level of confidence in the process control strategy. Data from Stage 1 process characterization studies and clinical manufacturing are generally used to support the establishment of the control strategy for new products (refer to Section 3.0). Stage 1 data may be used to support PPQ if sufficient scientific evidence for its use is available. At a minimum, the studies claimed to support PPQ should represent the commercial-manufacturing scale (e.g., be scale-independent) or derived from qualified small-scale model(s) proven to represent the full-scale process. In some cases, data from clinical-manufacturing batches may be used in conjunction with data gathered during PPQ to increase the amount of data that can be used to achieve an acceptable level of confidence in the process. For example, the use of Stage 1 data to support the PPQ might include (1, 50):

        

            
- In some cases, Stage 1 data that supports PPQ may be supported by adding stricter testing for a defined number of batches to confirm the results obtained in the Stage 1 studies and the PPQ batches. For example, small-scale column lifetime studies may be used to support column reuse limits. These are then confirmed with a heightened level of impurity-monitoring until the reuse period has been reached at full scale.

        

    

    

        

### 導師解析 Tutorial Commentary

        

            

#### 核心概念解析 Key Concepts

            

**Stage 1 數據用於支持 PPQ 的條件：**

            

                
- **規模代表性 (Scale Representativeness)：**Stage 1 數據必須能代表商業化規模的製程，或來自已**確認合格的小規模模型** (Qualified Small-Scale Model)。這是使用小規模數據支持大規模 PPQ 的先決條件。

                
- **科學證據充分 (Sufficient Scientific Evidence)：**不能僅因為「有數據」就直接引用；必須有科學論據說明為何該數據適用於商業規模。

            

            

**Qualified Small-Scale Model (合格小規模模型)：**這是製程開發中的重要工具。小規模模型的「合格」意味著已經科學化地證明它能忠實反映大規模製程的行為，包括 CQA 的趨勢與變異性。

        

        

            

#### 比喻說明 Analogy

            

Stage 1 數據支持 PPQ，就像用**建築模型測試**支持實際建築的安全評估。建築師可以用風洞測試的小型模型數據來預測實際大樓的風力承受能力，但前提是這個模型必須經過嚴格的「比例驗證」（即 qualified small-scale model），確認縮小版的行為能夠可靠地推算到實際尺寸。

        

        

            

#### 重點提示 Key Notes

            

**確認策略 (Confirmation Strategy)：**即使 Stage 1 數據可用於支持 PPQ，TR60 仍建議在商業規模中進行**加嚴測試**（stricter testing）來確認小規模結果。例如：

            

                
- 小規模層析管柱壽命研究 → 商業規模加強雜質監控直到達到重複使用上限

                
- 這種做法既利用了小規模數據的效率，又在大規模中提供了安全保障

            

            

這體現了「**Trust but verify**（信任但驗證）」的製程驗證哲學。

        

        

            

#### 練習思考 Practice Questions

            

                
1. 如果你的小規模模型尚未經過正式確認合格 (qualification)，但手上有大量小規模數據。在法規上，這些數據能否直接用來支持 PPQ？為什麼？

                
2. 臨床生產批次 (clinical manufacturing batches) 的數據在什麼條件下可以與 PPQ 數據合併使用？

            

        

    

## 4.4.2 Process Performance Qualification Study Design

    

        

### 原文內容 Original Text

        

PPQ is a means to demonstrate that all critical and other process parameters of unit operations are under the appropriate degree of control, and that all important variables and elements of the unit operation have been considered, that is, facility, utilities, equipment, personnel, process, control procedures, and components (refer to Figure 4.4.2-1).

        

*Figure 4.4.2-1 Stage 2 Activities*

        

Typically, a PPQ Master Plan would be developed as required, based on the complexity of the PPQ study. The plan would include the summary of the design of the study as well as previous knowledge that aided in implementation of the study. The PPQ Master Plan should serve as a bridge between the QTPP and the QRM and PPQ protocols (refer to Table 3.8-1). In other words, starting with QTPP, you would perform your risk assessment and, based on that, determine the PPQ study design, which would result in a PPQ plan. Based on the complexity of the PPQ study, the information that would typically comprise the PPQ plan could reside in the PPQ protocol.

        

It should be noted that the complexity and effort of the PPQ master plan should be commensurate with the complexity and criticality of the PPQ studies.

        

Typical aspects covered by the PPQ plan are:

        

            
- Process flow, including possible variations

            
- Number of batches and rationale

            
- Operating conditions

            
- Variability in the reagents, excipients, and primary containers

            
- Individual unit operations validation

            
- Justification behind selection of bracketing, matrixing, and/or family approach

            
- Sampling plans and justification

            
- Stability studies, including comparison with development or tech-transfer product

            
- Combination-product assembly and packaging requirements

            
- Shipping requirements

            
- Statistical analysis and evaluation requirements

            
- Environmental monitoring

        

        

During PPQ, CPPs and CQAs are monitored along with process performance parameters. Their evaluation is useful in demonstrating consistency and can enhance confidence in the overall process control strategy when included in the PPQ. All parameters and attributes intended for ongoing CPV in Stage 3 should be included in the PPQ.

        

Prior to entering commercial PPQ batches, it would be advisable to run demo, engineering, or trial batches. This would be representative of the initial PPQ batches and would constitute a general trial for the commercial facility and proposed commercial process. It is also possible to leverage these engineering batches to confirm the PARs for given parameters, thus confirming the robustness of the process.

    

    

        

### 導師解析 Tutorial Commentary

        

            

#### 核心概念解析 Key Concepts

            

**PPQ Master Plan (PPQ 主計畫)：**扮演從 QTPP（目標產品品質概況）到 QRM（品質風險管理）到 PPQ Protocol（PPQ 方案書）之間的**橋樑角色**。其核心邏輯鏈為：

            

**QTPP → Risk Assessment → PPQ Study Design → PPQ Plan**

            

PPQ Master Plan 的複雜度應與 PPQ 研究本身的複雜度和關鍵性相稱。對於較簡單的產品和製程，PPQ 計畫的內容可以直接納入 PPQ Protocol 中。

        

        

            

#### 重點提示 Key Notes

            

**PPQ 計畫的 12 項關鍵涵蓋面向：**

            
                
| 面向 | 說明 |
| --- | --- |
                
| 製程流程與變異 | 包括所有可能的製程變化情境 |
                
| 批次數量與論證 | 基於科學和統計的批次數理由 |
                
| 操作條件 | 正常操作範圍內的參數設定 |
                
| 原料變異性 | 試劑、賦形劑、主要容器的變異 |
                
| 單元操作驗證 | 各個別單元操作的驗證策略 |
                
| Bracketing / Matrixing | 分組和矩陣設計的科學論證 |
                
| 取樣計畫 | 取樣位置、頻率與統計論證 |
                
| 安定性研究 | 與開發或技轉產品的比較 |
                
| 組合產品組裝 | 組合產品的組裝與包裝要求 |
                
| 運輸要求 | 運輸條件的驗證需求 |
                
| 統計分析 | 統計方法與評估要求 |
                
| 環境監控 | PPQ 期間的環境監測計畫 |
            

        

        

            

#### 比喻說明 Analogy

            

PPQ Master Plan 就像籌備一場**大型演唱會的總企劃書**。你需要涵蓋場地（facility）、音響設備（equipment）、樂團排練（personnel training）、節目流程（process flow）、票務管理（sampling plan）、以及天候備案（process variations）。每個環節都需要事前規劃，而不是到了現場才即興處理。

            

Demo lots 就像**彩排**——在正式演出前先完整跑一次流程，確認所有環節銜接順暢。

        

        

            

#### CPV 銜接概念

            

**Stage 3 的銜接設計：**TR60 強調一個非常重要的原則——所有預計在 Stage 3 持續製程確認 (Continued Process Verification, CPV) 中監控的參數和品質屬性，都應該在 PPQ 中包含。這確保了：

            

                
- PPQ 數據可作為 CPV 的**基線** (baseline)

                
- Stage 2 到 Stage 3 的過渡**無縫接軌**

                
- CPV 計畫有足夠的初始數據支持管制限的設定

            

        

        

            

#### 重點提示 Key Notes

            

**PAR (Proven Acceptable Range，已證明可接受範圍)：**工程批可用於確認特定參數的 PAR，進而驗證製程的穩健性 (robustness)。PAR 是透過 Stage 1 製程特性化研究所建立的操作空間，在 PPQ 前用工程批確認 PAR 可以增強對製程設計空間的信心。

        

        

            

#### 練習思考 Practice Questions

            

                
1. 在什麼情況下，PPQ Master Plan 的內容可以簡化並直接併入 PPQ Protocol？請舉出至少兩個考量因素。

                
2. 為什麼 TR60 建議所有 Stage 3 CPV 監控項目都應納入 PPQ？如果某個參數在 PPQ 中未被監控，對 Stage 3 會造成什麼影響？

                
3. Demo lots 和 PPQ 批次使用相同的商業化設備和製程。那麼，它們最根本的區別在哪裡？

            

        

    

## 4.4.2.1 Risk-Based Process Performance Qualification Sample-Size Justification

    

        

### 原文內容 Original Text

        

QRM or risk-based approaches are used to assist in demonstrating control and capability throughout the PV lifecycle activities. Risk-based rationales are used to justify the number of batches manufactured and the number of samples taken during PPQ. It should be noted that there is no set number of expected batches prescribed in regulatory expectations or industry standard practice because the number of batches will be unique to a given product and process based upon the variability. The rationales assure sufficient data is available for the evaluation to demonstrate, with a high level of assurance, a process is capable of consistently delivering quality product, allowing the normal range of variation and trends to be established and providing sufficient data for evaluation. The evaluation of data should include objective measures (e.g., statistical metrics), wherever feasible and meaningful, to achieve adequate assurance.

        

Additionally, FDA's GMP regulations regarding sampling set forth a number of requirements for validation:

        

            
- Samples must represent the batch under analysis (54)

            
- Sampling plan must result in statistical confidence (55)

            
- Batch(es) must meet its predetermined specifications (55)

        

    

    

        

### 導師解析 Tutorial Commentary

        

            

#### 核心概念解析 Key Concepts

            

**Risk-Based Sample-Size Justification (風險導向的取樣大小論證)：**這是 PPQ 設計中最具挑戰性也最常被法規審查的部分。核心原則包括：

            

                
- **沒有固定批次數：**法規和業界標準都不規定一個「正確」的 PPQ 批次數。傳統的「三批驗證」概念已被淘汰。

                
- **基於變異性：**批次數量取決於特定產品和製程的變異特性。變異性越大，通常需要越多批次來建立信心。

                
- **客觀量測：**數據評估應盡可能使用統計指標等客觀方法，而非僅靠主觀判斷。

            

        

        

            

#### 比喻說明 Analogy

            

決定 PPQ 需要多少批次，就像決定你需要**試吃多少道菜**才能評價一家餐廳的品質。如果是連鎖餐廳（平台製程），你可能只需要試幾道招牌菜就能下判斷；但如果是全新的創意料理餐廳（first-in-class），你可能需要多次造訪、品嚐更多菜色，才能確信品質是穩定的。

            

而取樣的代表性就像你不能只嚐湯的表面，要攪拌後從不同深度取樣，才能代表整鍋湯的味道。

        

        

            

#### 重點提示 Key Notes

            

**FDA GMP 取樣三大要求：**

            

                
1. **代表性 (Representativeness)：**取樣必須能代表被分析的批次——這意味著取樣點的選擇（位置、時間）必須有科學根據

                
2. **統計信心 (Statistical Confidence)：**取樣計畫必須能產生統計上有意義的結論——這要求取樣數量必須經過統計學論證

                
3. **符合預定規格 (Meet Predetermined Specifications)：**批次必須符合事前設定的規格——接受標準不能在看到結果後才修改

            

            

這三個要求共同構成了 PPQ 取樣策略的法規基石，每一份 PPQ Protocol 都必須清楚回應。

        

        

            

#### 統計考量 Statistical Considerations

            

雖然 TR60 未在此章節給出特定公式，但取樣大小論證通常涉及以下統計概念：

            

```

信心水準 (Confidence Level) = 通常 95% 或 99%
覆蓋率 (Coverage) = 通常 95% 或 99%
容許區間 (Tolerance Interval) = 用於評估批內和批間變異

例如：95% 信心水準 / 95% 覆蓋率
= 至少 95% 的信心認為至少 95% 的產品符合規格

取樣數量 n 取決於：
- 已知的製程變異性 (process variability)
- 所需的信心水準 (confidence level)
- 所需的覆蓋率 (coverage)
- 可接受的風險水準 (acceptable risk level)
            
```

        

        

            

#### 實務應用 Practical Application

            

**CDMO 場景：**客戶要求你的 CDMO 進行 PPQ，但只願意支付三批的費用。作為驗證團隊，你應該如何處理？

            

                
- 首先評估先驗知識和 Stage 1 數據的充分程度

                
- 進行風險評估以確定所需的批次數量

                
- 如果科學論證支持三批即可提供足夠信心，則記錄完整的統計論據

                
- 如果三批不足以建立充分信心，應向客戶說明法規風險並建議增加批次

                
- 考慮是否可以利用先驗知識來減少 PPQ 範圍

            

        

        

            

#### 練習思考 Practice Questions

            

                
1. 為什麼 FDA 不規定一個固定的 PPQ 批次數量？這對於業界來說是好事還是壞事？

                
2. 「取樣計畫必須產生統計信心」這一要求對取樣策略的設計有什麼具體影響？請列舉至少三個需要考慮的統計要素。

                
3. 如何在 PPQ Protocol 中同時滿足 FDA 的三大取樣要求？請為一個充填製程設計一個概念性的取樣策略。

# Section 4.4.2: PPQ Protocol & Report — Enhanced Sampling, Batch Justification & Study Design

    

PPQ 方案與報告 — 加強取樣計畫、批次數量論證與研究設計

    

PDA Technical Report No. 60 (Revised 2026) — Process Validation: A Lifecycle Approach | p49 - p57

    

### 本章學習目標

    

        
- 理解 PPQ 加強取樣計畫 (Enhanced Sampling Plan) 的設計邏輯，包括三大統計工具：Individual Value Plots、Tolerance Intervals、Variance Components

        
- 掌握取樣數量如何依據 CQA 關鍵性等級 (criticality) 進行風險分層設定

        
- 學習 PPQ 批次數量的風險評估決策樹方法，以及 N=3 基線的科學依據

        
- 了解 PPQ 在正常操作條件下執行的原則，以及個別單元操作研究與分組 (bracketing/matrix/family) 策略

        
- 認識 PPQ 數據分析報告的結構化呈現方式，以及無法執行統計分析時的替代策略

    

    

### 本節目錄 Section Contents

    

        4.4.2.1 Enhanced Sampling Plans
        4.4.2.1.1 Sample-Size Selection
        4.4.2.1.2 Sample Size Methods
        4.4.2.1.3 PPQ Analysis of Enhanced Samples
        4.4.2.2 Risk-Based Batch Justification
        4.4.2.2.1 Justification of Baseline
        4.4.2.2.2 High-Level Approach
        4.4.2.3 PPQ at Normal Operating Conditions
        4.4.2.4 Individual Operation Studies
        4.4.2.5 Bracketing, Matrix & Family
    

## 4.4.2.1 Enhanced Sampling Plans & Statistical Tools for PPQ

    

        

### Original Text

        

Finally, the number of samples should:

        

            
- Be adequate to provide sufficient statistical confidence of quality both within a batch and between batches

            
- Have risk-based statistical testing levels tied to the relative criticality of the particular attribute under examination

            
- Allow the normal range of variation and trends to be established

            
- Provide sufficient data for evaluation

        

        

Sampling during this stage should be more extensive than is typical during routine production; this can be called an enhanced sampling plan. The plan has risk-based components, uses general prior knowledge, and allows for statistically based confidence statements regarding the firm's understanding of within- and between-batch variability.

        

There are three basic components or tools commonly used to demonstrate statistical confidence and understanding of variation for enhanced sampling plans both within a batch and between batches for aseptically filled products. The basic components included in the PPQ data analysis of each attribute are (refer to Section 6.2):

        

            
- **Individual Value Plots:** General or basic analysis and graphing, preferably using individual value plots; visually describes inter- and intra-batch variation.

            
- **Tolerance Intervals:** Tolerance interval is one of the most commonly used tools applied during PV; it provides a method to measure the control and capability of product attributes. The tolerance interval level being tested ties back to the relative criticality of the product attributes and compares the variation seen for each product attribute (by batch) to the product specification. This comparison is an objective measure that allows for a capability statement to be provided as part of PV for each attribute tested.

            
- **Variance Components:** In the case of an aseptically filled DP, variance components describe the percentage of variance that can be attributed to within-batch or batch-to-batch variability meeting guidance requirements.

        

        

Enhanced sampling plans for aseptically filled products (e.g., vaccines, biologics, small-molecule parenterals) take samples that align with three time periods: beginning, middle, and end positions (B/M/E). The minimum number of reportable value samples taken per timepoint should be n = 2 (6 total–2B/2M/2E), to allow for variance component calculations. Replicates at each point are needed for the analysis to be performed. This may increase (typically up to n = 5, or 15 total–5B/5M/5E), depending on the relative criticality of the attribute and its variability estimate. Examples are presented in Table 4.4.2.1-1, Table 4.4.2.1-2, and Figure 4.4.2.1-1.

        
        

**Table 4.4.2.1-1 Sampling Requirement**

        
            
                
                
                
            
| Critical Quality Attribute (CQA) | Severity of Potential Harms (Effects) | Statistical Sampling Requirements |
| --- | --- | --- |
            
                
                
                
            
| Potency | High | +++ |
            
                
                
                
            
| Osmolality | Medium | ++ |
            
                
                
                
            
| pH | Low | + |
        

        
        

**Table 4.4.2.1-2 Confidence**

        
            
                
                
                
            
| Critical Quality Attribute (CQA) | Severity of Potential Harms (Effects) | Example Confidence and Proportion Requirements |
| --- | --- | --- |
            
                
                
                
            
| Potency | High | 95/99 |
            
                
                
                
            
| Osmolality | Medium | 95/95 |
            
                
                
                
            
| pH | Low | 95/90 |
        

    

    

        

### 導師解析 Tutorial Commentary

        

            

#### 核心概念：加強取樣計畫 Enhanced Sampling Plan

            

**Enhanced Sampling Plan (加強取樣計畫)** 是 PPQ 階段的核心設計要素。與日常生產的常規取樣不同，PPQ 階段需要收集更多樣本，目的是建立對製程變異性的統計信心。

            

PPQ 使用三大統計工具來分析數據：

            

                
- **Individual Value Plots (個別值圖)：**最直覺的視覺化工具，將每個數據點繪製在圖上，同時展示批內和批間的變異分布

                
- **Tolerance Intervals (容許區間)：**PPQ 中最常用的統計工具，用來衡量製程的管控能力和能力指標，將觀察到的變異與規格進行客觀比較

                
- **Variance Components (變異成分分析)：**將總變異拆解為「批內變異」和「批間變異」，幫助理解變異的來源

            

        

        

            

#### 比喻說明 Analogy

            

想像你是一位餐廳品管經理，要確認新廚師團隊的出品是否穩定。你不會只在開業當天嚐一道菜就下結論（常規取樣），而是會在開業前幾天，每天的早、中、晚各多嚐幾道菜（加強取樣），這樣才能判斷：

            

                
- **個別值圖** = 把每道菜的評分畫在圖上，一眼看出整體分布

                
- **容許區間** = 計算「95% 的菜品評分會落在哪個範圍」，看是否都在及格線以上

                
- **變異成分** = 分析評分差異是來自「同一天不同時段」還是「不同天之間」

            

        

        

            

#### 重點提示 Key Notes

            

**B/M/E 取樣策略：**無菌充填產品的取樣必須對齊充填過程的三個時間點 — 開始 (Beginning)、中間 (Middle)、結束 (End)。這不是隨意設計的，而是為了捕捉充填過程中可能的時間相關變異（例如：設備磨損、溫度漂移、操作員疲勞等）。

            

**最低取樣量：**每個時間點最少 n=2（共 6 個樣本），才能進行變異成分計算。根據屬性的關鍵性，可增加到 n=5（共 15 個樣本）。

        

        

            

#### 風險分層取樣邏輯

            

```

CQA 關鍵性     嚴重度     信心/涵蓋度     取樣需求
─────────────────────────────────────────────
Potency        High       95/99          +++（最多樣本）
Osmolality     Medium     95/95          ++
pH             Low        95/90          +（最少樣本）

「95/99」意義：
  95% 信心度下，至少 99% 的未來量測值
  將落在規格範圍內

最低取樣量公式：
  n_min = 2 per timepoint × 3 timepoints = 6
  n_max = 5 per timepoint × 3 timepoints = 15
            
```

        

        

            

#### 練習思考 Practice Questions

            

                
1. 為什麼加強取樣計畫要求每個時間點至少 n=2 的重複？如果只取 n=1 會有什麼統計限制？

                
2. 如果某個 CQA 被評為高關鍵性但歷史變異極小，你會如何調整取樣策略？

                
3. 95/99 與 95/90 容許區間在實務中的差異是什麼？對取樣數量有何影響？

            

        

    

## 4.4.2.1.1 Sample-Size Selection Considerations

    

        

### Original Text

        

Generally, enhanced sample-size selection is based on a combination of prior knowledge and the relative criticality of the attributes. Prior knowledge may come from legacy PPQ batches or pre-PPQ batches (e.g., engineering, clinical), while the relative criticality of the attribute is derived during Stage 1 CQA determination. The approach uses the same analysis tool that will be applied during the PPQ analysis, the tolerance interval. Normal tolerance intervals are constructed and compared to the release-acceptance criteria for each evaluated attribute to provide confidence that all current and future measurements will fall within a percentage of the required coverage (based on criticality).

        

The enhanced plan has risk-based components, uses general prior knowledge, and allows for statistically based confidence statements regarding the firm's understanding of within- and between-batch variability.

        

Occasionally, due to a number of considerations, such as in a pandemic response, prior knowledge is not available to construct these intervals. As such, each attribute selected for enhanced sampling can be sampled at the minimum, that is, n = 6 (2 each for B/M/E), at a calculated, uniform 95/95 confidence level and coverage. The minimum n = 6 sample size is appropriate as it will allow statements of confidence and of inter- and intra-batch variability using variance components for each attribute within the enhanced sampling plan.

    

    

        

### 導師解析 Tutorial Commentary

        

            

#### 核心概念：取樣數量決定邏輯

            

取樣數量的決定不是拍腦袋，而是基於兩個輸入：

            

                
- **Prior Knowledge (先驗知識)：**來自 Stage 1 的開發數據，包括臨床批次、特性化研究或工程批次的歷史數據

                
- **CQA Criticality (CQA 關鍵性)：**在 Stage 1 的風險評估中已確定的屬性關鍵性等級

            

            

核心方法是用 Stage 1 的數據來預估所需取樣量，使用與 PPQ 分析相同的工具 — Tolerance Interval (容許區間) — 來反推需要多少樣本才能達到目標信心水準。

        

        

            

#### 重點提示：緊急情境下的最低取樣策略

            

TR60 特別提到**疫情緊急應變 (pandemic response)** 等特殊情境。當沒有足夠的先驗知識時，可以採用統一的最低取樣策略：

            

                
- 每個屬性均取 n=6（B/M/E 各 2 個）

                
- 統一使用 95/95 信心/涵蓋度水準

                
- 雖然取樣量最少，但仍足以進行變異成分分析和信心度聲明

            

            

這是一種「安全底線」設計 — 確保即使在最緊急的情況下，仍能獲得有意義的統計結論。

        

        

            

#### 比喻說明 Analogy

            

就像醫生的體檢方案：如果你有完整的病歷（先驗知識），醫生可以針對你的風險因素設計客製化檢查項目（風險分層取樣）。但如果你是第一次來看診、沒有任何病歷（無先驗知識），醫生會安排一套標準的基本檢查套餐（95/95 統一最低取樣），確保至少能發現主要問題。

        

    

## 4.4.2.1.2 Sample Size Methods

    

        

### Original Text

        

The tolerance interval method for selection of samples for PPQ requires a few pieces of Stage 1 information for its use:

        

            
- Criticality level of the CQA being evaluated

            
- Stage 1 development data to get point estimates and confidence intervals for average and standard deviation of the CQA being evaluated
                

                    
    - Development data can come from clinical runs, characterization, or engineering runs

                    
    - Stage 1 is not limited to new products; it can be an historical evaluation of commercial batches as part of a TT (36)

                

            

            
- Procedure or work instruction to tie CQA criticality to a risk level

        

        

Table 4.4.2.1.2-1 lists some examples of product attributes, but please note it is not an exhaustive listing.

        
        

**Table 4.4.2.1.2-1 Example Sample Plan**

        

        
            
                
                
            
| Product Attribute | Minimum Enhanced PPQ Samples per Batch (n) |
| --- | --- |
            
                
                
            
| Container Closure Integrity (CCI) | n = 12 (USP <671>) |
            
                
                
            
| pH | n = 3 for B/M/E — 9 total results |
            
                
                
            
| Osmolality | n = 3 for B/M/E — 9 total results |
            
                
                
            
| Total protein | n = 3 for B/M/E — 9 total results |
            
                
                
            
| High performance size exclusion chromatography (HPSEC) | n = 3 for B/M/E — 9 total results |
            
                
                
            
| Reducing capillary gel electrophoresis | n = 3 for B/M/E — 9 total results |
            
                
                
            
| Nonreducing capillary gel electrophoresis | n = 3 for B/M/E — 9 total results |
            
                
                
            
| Bioassay | n = 1 for release |
            
                
                
            
| Subvisible particles (≥10 µm: ≤6000; ≥25 µm: ≤600) | n = 3 for B/M/E — 9 total results (each) |
        

        

    

    

        

### 導師解析 Tutorial Commentary

        

            

#### 核心概念：容許區間法的三個輸入

            

使用 **Tolerance Interval Method (容許區間法)** 決定取樣量需要三個來自 Stage 1 的資訊：

            

                
1. **CQA 關鍵性等級** — 決定目標信心/涵蓋度（如 95/99 vs 95/90）

                
2. **Stage 1 開發數據** — 提供平均值和標準差的點估計和信賴區間，這些數據可來自臨床批、特性化研究或工程批次

                
3. **CQA 關鍵性與風險等級的對應程序** — 一份正式的程序文件，將關鍵性分級對應到具體的取樣需求

            

        

        

            

#### 重點提示：技術轉移也是 Stage 1

            

TR60 明確指出：Stage 1 不限於新產品。對於 Technology Transfer (技術轉移, TT)，歷史商業批次的回顧性評估同樣可以作為 Stage 1 的數據基礎。這意味著接收 CDMO 可以利用原廠的歷史數據來設計 PPQ 取樣計畫，而不需要從零開始。

        

        

            

#### 比喻說明 Analogy

            

取樣計畫表就像一份「體檢套餐菜單」：

            

                
- **CCI** 像心電圖 — 需要較多量測點 (n=12) 才能確認完整性

                
- **pH/Osmolality** 像血壓 — B/M/E 各 3 次足以反映穩定性

                
- **Bioassay** 像基因檢測 — 一次即可，因為方法本身已有高靈敏度且檢測成本高

            

            

每項檢查的次數不是越多越好，而是要根據該項目的臨床重要性和方法特性來合理設定。

        

        

            

#### 實務應用 Practical Application

            

**CDMO 情境：**當你的公司承接一個生物製劑的技術轉移專案時，應該：

            

                
1. 向原廠索取完整的 Stage 1 數據包（臨床批/商業批的分析結果）

                
2. 利用原廠數據的平均值和標準差，反推每個 CQA 在目標信心水準下所需的最低取樣量

                
3. 如果原廠數據不足以計算，則採用 n=6 的最低標準

                
4. 將這些決策和依據記錄在 PVMP 中

            

        

    

## 4.4.2.1.3 Drug Product PPQ Analysis of Enhanced Samples

    

        

### Original Text

        

If possible, the drug-product enhanced sample analysis should be structured in the PPQ in the following manner:

        

            
- Summary table for all attributes provides summary statistics as well the tolerance intervals and variance components, as appropriate, per batch.

            
- Summary analysis for each attribute, including:
                

                    
    - Graphical analysis using individual value plots per attribute. All batches should be plotted on the graph for maximum effect. Reference lines denoting specification limits should be used to show the data in context.

                    
    - Tolerance interval charts per attribute per batch.

                    
    - Variance component analysis table per batch.

                    
    - Summary statement per attribute regarding achieved-control and capability-based upon the analysis presented.

                

            

        

        

There are cases when analysis cannot be executed, for instance when:

        

            
- Values are below a limit of detection, which means there are no values to report, in which case, neither graphical nor statistical analysis can be performed.

            
- There are not enough unique values to perform the analysis either due to the rounding of the data, precision of the method, or very little variation in the process. This can be minimized by requesting raw analytical data (full recorded values) rather than reported data (which may be truncated). In the case of not-enough unique values, graphical analysis can be performed, but the tolerance interval and variance component cannot. Graphical analysis in this situation can still provide powerful visual support for control and capability within and between batches.

        

        

The samples must be tested and analyzed using statistical tools and graphing, as appropriate, to provide sufficient statistical confidence of quality within and between batches as well as evidence the product and process are ready for commercial manufacturing. Minimum acceptance requires that the test results are within release specification based on the release criteria.

    

    

        

### 導師解析 Tutorial Commentary

        

            

#### 核心概念：PPQ 報告的結構化分析架構

            

TR60 建議 PPQ 報告應包含層次分明的分析結構：

            

                
1. **總覽摘要表：**所有屬性的摘要統計量、容許區間和變異成分，按批次呈現

                
2. **逐屬性詳細分析：**
                    

                        
    - 個別值圖（所有批次繪製在同一圖上）

                        
    - 容許區間圖表

                        
    - 變異成分分析表

                        
    - 每個屬性的管控與能力總結聲明

                    

                

            

            

這種結構化方法確保審查者能快速掌握整體狀況，同時也能深入檢視個別屬性。

        

        

            

#### 重點提示：無法執行統計分析的情境

            

實務上有兩種常見情況會導致無法執行統計分析：

            

                
- **低於偵測極限 (LOD)：**所有數值都是「<LOD」，沒有可報告的數值 — 此時圖形和統計分析都無法進行

                
- **不夠多的獨特值：**由於數據四捨五入、方法精密度限制或製程變異極小，導致大多數結果相同 — 此時容許區間和變異成分無法計算，但圖形分析仍可提供有力的視覺證據

            

            

**實務建議：**向分析實驗室索取未經截斷的原始分析數據 (raw analytical data)，而非四捨五入後的報告數據，可以大幅減少「不夠多獨特值」的問題。

        

        

            

#### 比喻說明 Analogy

            

PPQ 報告的結構就像一份投資分析報告：

            

                
- **摘要表** = 投資組合總覽頁，快速看到所有持股的績效

                
- **個別值圖** = 各支股票的走勢圖

                
- **容許區間** = 各股票的風險評估（波動率分析）

                
- **管控聲明** = 各股票的投資建議總結

            

            

審查者（如同投資委員會）需要同時看到全局和個別細節才能做出決策。

        

        

            

#### 練習思考 Practice Questions

            

                
1. 在 PPQ 報告中，為什麼建議將所有批次的數據繪製在同一張個別值圖上？這對審查者的判斷有什麼幫助？

                
2. 如果某個 CQA 的測試結果全部為「<LOD」，你會在 PPQ 報告中如何處理和說明？

                
3. 「管控與能力總結聲明」應該包含哪些要素？如何區分「受控」和「具能力」？

            

        

    

## 4.4.2.2 Risk-Based Justification for Number of PPQ Batches

    

        

### Original Text

        

An effective PPQ should evaluate a sound process design, an effective control strategy, and operational proficiency at commercial scale (56). The number of batches in the PPQ study(ies) will be influenced by many factors such as the:

        

            
- Study(ies) performance and acceptance criteria

            
- Analyses to be performed and the type and amount of data necessary to perform those analyses

            
- Level of process knowledge and understanding gained from Stage 1, as well as from the engineering runs in the commercial facility

            
- Type and complexity of manufacturing technology employed in the various unit operations

            
- Knowledge from previous experience with similar well-controlled processes

            
- Inherent or known variability of the process resulting from raw materials, age of the equipment, or operator experience

        

        

Using risk-based approaches allows a balance between the number of batches studied and the risk of the process. They can also be used in conjunction with objective approaches to determine the number of batches to include.

        

Where practical, statistical methods are recommended to guide the determination of the number of PPQ batches needed to achieve a desired level of statistical confidence (refer to Section 6.1.1 and Section 8.0). However, this approach alone may not always be feasible or meaningful. One such example is PPQ studies of a protein DS process with a limited number of clinical batches. This limited output could be due to such factors as manufacturing scale or product indications (e.g., orphan drug) where infrequent future manufacturing campaigns are to be performed. In addition to limitations on manufacturing batch production, the nature of protein drug-substance manufacturing makes increased number of samples of the process streams of limited usefulness to achieve a statistically significant sample size.

        

When it is not feasible or meaningful to use conventional statistical approaches, a practical, scientifically based, holistic approach may be more appropriate. In this case, the following factors may be used to support the rationale for the number of PPQ batches selected based on knowledge accumulation:

        

            
- Prior knowledge (e.g., development/clinical batches) and platform manufacturing information or data

            
- Risk analysis of the process to factor the level of risk into the batch number selection

            
- Increased reliance on Stage 1 data to support that the process is under control and to add to the dataset

            
- Continuation of heightened sampling or testing plans during CPV until a sufficient dataset to achieve statistical confidence has been accumulated

            
- For very expensive products, understanding of the probability of product approval for release-to-market versus the demonstrated shelf life (i.e., a late approval could mean wasting PPQ lots)

        

        

When a combination of approaches and data are used, the rationale and justification should be clearly documented in the PVMP. Also, references to all supporting source data should be included.

        

The risk-based assessment method for the selection of an acceptable number of PPQ batches is based upon process, product, business needs and site knowledge. As knowledge increases, the potential starting point for the number of batches decreases.

        

The approach described here makes use of a decision-tree or checklist approach. These approaches employ Yes or No questions to guide the decision-making process, which reduces the approach/assessment subjectivity bias. A risk-evaluation table is used to guide the determination (refer to Table 4.4.2.2-1).

        

There are three basic steps to the selection process:

        

            
- **Step 1:** Determine the baseline number of batches using product and process knowledge.
                

                    
    - The level of product and process knowledge are used to determine the minimum number of batches (or baseline) that need to be produced during PPQ.

                    
    - Answers to the questions provide guidance on one of three risk-based evaluation starting points for N batches. As product and process knowledge increases, the potential starting point for the selection of the number of batches decreases.

                

            

            
- **Step 2:** Determine if any additional controls, activities, or technical rationales are required.
                

                    
    - This step helps to confirm the selection of the number of batches from Step 1 and determines specific site-level knowledge.

                    
    - Risk control activities determine if additional studies or batches need to be performed/executed.

                

            

            
- **Step 3:** Determine if there are any non-GMP-related risks, such as business, technical, or strategic justifications, for the addition or reduction of batches.
                

                    
    - This is a non-quality risk-based step.

                    
    - After Step 3, the number of batches, N, is provisionally set.

                

            

        

        
        

**Table 4.4.2.2-1 Generic Risk Evaluation Table**

        
            
                
                
                
            
| Knowledge | Risk | Example |
| --- | --- | --- |
            
                
                
                
- 
- 

            
| Low Level of Knowledge | High Risk | Consider additional development or preparation activities. Leadership approval to start PPQ with risks detailed prior to proceeding to PPQ.                                              New formulation/equipment                         Technology transfer of poorly known platform technology |
            
                
                
                
- 
- 

            
| Typical / Average Level of Knowledge | Moderate Risk | PPQ: N = Baseline. Note: Justification for Baseline required. See Section 4.4.2.2.2.                                              Existing formulation/equipment                         Technology transfer of moderately known platform technology |
            
                
                
                
- 

            
| High / Very High Level of Knowledge | Low Risk | PPQ: N ≤ Baseline                                              Technology transfer of known platform technology |
        

    

    

        

### 導師解析 Tutorial Commentary

        

            

#### 核心概念：PPQ 批次數量決定的三步驟法

            

PPQ 需要幾批？這是每個驗證專案最常被問到的問題。TR60 提供了一個系統化的三步驟決策框架：

            

                
1. **Step 1 - 確定基線批次數：**根據產品和製程知識水準，確定最低批次數（基線 N）。知識越多，起始批次數越少。

                
2. **Step 2 - 評估是否需要追加：**確認現場特定知識和控制措施，判斷是否需要追加研究或批次。

                
3. **Step 3 - 考量非 GMP 因素：**商業、技術和策略性的考量，可能增加或減少批次數。

            

            

關鍵原則：**知識與風險反向相關** — 掌握的知識越多，風險越低，所需的 PPQ 批次數越少。

        

        

            

#### 比喻說明 Analogy

            

PPQ 批次數的決策就像駕照考試：

            

                
- **低知識/高風險** = 第一次學開車的新手，需要更多路考練習（更多 PPQ 批次），甚至需要先去駕訓班（追加開發活動）

                
- **中等知識/中等風險** = 有其他車款駕照的駕駛人，基本路考次數即可（N = Baseline）

                
- **高知識/低風險** = 經驗豐富的職業駕駛，可能只需一次路考就能通過（N ≤ Baseline）

            

        

        

            

#### 重點提示：孤兒藥與昂貴產品的特殊考量

            

TR60 明確承認統計方法並非萬能。對於以下情境，傳統統計方法可能不可行：

            

                
- **Orphan Drug (孤兒藥)：**生產頻率極低，無法累積足夠的統計數據

                
- **蛋白質 DS 製程：**製程流的取樣增加對統計樣本量的貢獻有限

                
- **昂貴產品：**需考慮產品獲批概率與效期之間的商業風險（晚批准可能浪費 PPQ 批次）

            

            

此時可採用**整體性科學方法 (holistic approach)**，結合先驗知識、風險分析、Stage 1 數據和延伸到 CPV 的加強取樣，來支持批次數的選擇。

        

        

            

#### 知識-風險-批次數對應矩陣

            

```

知識水準         風險等級      PPQ 批次數策略
──────────────────────────────────────────
低知識           高風險        N > Baseline
                              + 追加開發/準備活動
                              + 高層核准才可啟動 PPQ

中等知識         中等風險      N = Baseline (通常 N=3)
                              + 需提供 Baseline 論證

高/極高知識      低風險        N ≤ Baseline
                              可使用平台知識簡化

決策樹方法特點：
  - 使用 Yes/No 問題引導
  - 降低主觀偏差
  - 三步驟依序執行
  - 最終 N 為暫定值
            
```

        

        

            

#### 實務應用 Practical Application

            

**CDMO 情境：**一家 CDMO 同時承接兩個技術轉移專案：

            

                
- **專案 A：**已知平台技術的單株抗體，原廠提供了 50 批商業數據 → 高知識/低風險 → 可考慮 N ≤ 3

                
- **專案 B：**新型 mRNA 疫苗，僅有 3 批臨床數據 → 低知識/高風險 → N > 3，且需追加工程研究

            

            

兩個專案的 PPQ 策略可以完全不同，但都必須在 PVMP 中清楚記錄決策依據和支持數據來源。

        

        

            

#### 練習思考 Practice Questions

            

                
1. 為什麼 TR60 建議使用決策樹/檢查表方法而非開放式討論來決定 PPQ 批次數？

                
2. Step 3 提到「非 GMP 相關風險」，請舉出三個可能導致增加或減少 PPQ 批次數的商業考量。

                
3. 如果你的 CDMO 同時為三個不同客戶生產相同的平台產品，這些知識如何影響後續客戶的 PPQ 設計？

            

        

    

## 4.4.2.2.1 Justification of Baseline

    

        

### Original Text

        

Risk-based approaches and application of QRM to the PV lifecycle are noted in health authority guidance(s), including those of the FDA and EU.

        

The determination of the number of batches should be based upon risk-based principles as well as product and process knowledge. The more knowledge one possesses (with proof), the relative risk to move into commercial production is reduced, and the number of batches required within a PPQ campaign may be lessened.

        

While all the guidances state that a risk-based approach must be used, EU GMP Annex 15 provides additional support for the use of N = 3 as a starting point for the evaluation table used in this approach.

        

            
- The number of batches manufactured and the number of samples taken should be based on QRM principles, should allow the normal range of variation and trends to be established, and should provide sufficient data for evaluation within the PPQ report.

            
- It is generally considered acceptable that a minimum of three consecutive batches manufactured under routine conditions could constitute a validation of the process.

            
- An alternative number of batches may be justified, taking into account whether standard methods of manufacture are used and whether similar products or processes are already used at the site (50).

        

    

    

        

### 導師解析 Tutorial Commentary

        

            

#### 核心概念：N=3 的法規依據

            

**N=3 基線**是業界最常使用的 PPQ 批次數量起點。TR60 引用 EU GMP Annex 15 來提供科學與法規依據：

            

                
- 「一般認為，在例行條件下連續製造至少三批，可構成製程驗證」

                
- 但 N=3 不是固定答案 — 可以根據標準方法的使用和現場類似產品/製程的經驗來調整

            

            

關鍵訊息：N=3 是**起點**而非**答案**。你必須透過風險評估和知識累積來論證你的選擇是否合理。

        

        

            

#### 重點提示：法規機構的期望

            

FDA 和 EU 的法規指引都要求使用風險方法。但要注意：

            

                
- FDA 2011 Process Validation Guidance 未明確規定批次數量，強調的是「足夠的統計信心」

                
- EU GMP Annex 15 明確提到 N=3 為起點，但也允許替代方案

                
- 無論選擇幾批，**論證依據 (justification)** 的品質比批次數量本身更重要

            

            

查核員會問的不是「為什麼做三批」，而是「你的論證是否完整、科學、可追溯」。

        

        

            

#### 比喻說明 Analogy

            

N=3 就像學校的「及格分數 60 分」— 它是一個被廣泛接受的最低標準，但：

            

                
- 對於高風險科目（高關鍵性產品），老師可能要求 80 分才通過（N > 3）

                
- 對於已經有相關免修資格的學生（平台知識豐富），可以申請部分免考（N < 3）

                
- 無論如何，你都需要提供成績單和學習記錄（論證文件）

            

        

    

## 4.4.2.2.2 High-Level Approach (Decision Tree)

    

        

### Original Text

        

The approach provided in Figure 4.4.2.2.2-1 is an example of a high-level view of what can be a very detailed decision tree and multipage risk-based checklist (refer to Table 4.4.2.2.2-1).

        

*Figure 4.4.2.2.2-1 Decision Tree for Determination of Number of Process Performance Qualification Lots*

        

[Refer to original document for full decision tree diagram]

    

    

        

### 導師解析 Tutorial Commentary

        

            

#### 核心概念：決策樹的結構

            

TR60 建議的決策樹 (Decision Tree) 是一個結構化的問答流程，用 Yes/No 問題引導使用者逐步確定 PPQ 批次數。其核心設計理念是：

            

                
- **消除主觀性：**透過預定義的問題和答案選項，避免「拍腦袋」式決策

                
- **可追溯性：**每個決策節點都有明確的輸入和輸出，方便審查和追蹤

                
- **靈活性：**高層次的決策樹可以細化為多頁的風險檢查表，適應不同產品和製程的需求

            

        

        

            

#### 重點提示：決策樹的實施建議

            

在建立公司內部的 PPQ 批次數決策樹時，建議：

            

                
- 將決策樹嵌入公司的 PVMP 模板或 SOP 中，確保一致性

                
- 每個決策節點應有明確的評估標準和證據要求

                
- 決策結果應經過跨功能團隊（品質、製造、法規）審查

                
- 定期回顧和更新決策樹，納入新的平台知識和經驗教訓

            

        

        

            

#### 練習思考 Practice Questions

            

                
1. 設計一個簡化的 3 題決策樹，幫助判斷某個產品的 PPQ 批次數應該是 N=2、N=3 還是 N>3。

                
2. 決策樹方法與開放式風險評估（如 FMEA）相比，各有什麼優缺點？

            

        

    

## 4.4.2.3 PPQ at Normal Operating Conditions

    

        

### Original Text

        

PPQ studies are typically conducted in a manner that demonstrates a state of control under normal operating conditions to assess the process variability expected during routine production. Process characterization (robustness) studies conducted during Stage 1 serve as the foundation for establishing NOR, PAR, and design space, if appropriate. Effects-of-scale should also be considered if scaled-down models are suitably qualified, well-planned, and executed. Study data on robustness should support conducting commercial-scale PPQ under routine manufacturing conditions. Supplemental engineering studies at scale may be appropriate to evaluate extremes of the NOR (e.g., line speed or compression speed). In most cases, available Stage 1 data makes it unnecessary to execute PPQ over the entire operating range during the commercial manufacturing process. The PVMP should provide the justification for the approach used and reference all source data.

    

    

        

### 導師解析 Tutorial Commentary

        

            

#### 核心概念：PPQ 在正常操作條件下執行

            

PPQ 通常在**正常操作條件 (Normal Operating Conditions)** 下執行，而非在極端條件下。這是因為：

            

                
- **NOR (Normal Operating Range, 正常操作範圍)：**日常生產實際使用的參數範圍

                
- **PAR (Proven Acceptable Range, 已證可接受範圍)：**在 Stage 1 已證明可接受的更寬範圍

                
- **Design Space (設計空間)：**ICH Q8 定義的多維度參數組合範圍

            

            

Stage 1 的製程特性化/穩健性研究已經探索了參數的極端值，因此 PPQ 不需要重複這些工作。

        

        

            

#### 重點提示：何時需要補充工程研究

            

雖然 PPQ 在正常條件下執行，但在某些情況下可能需要**補充性的工程研究 (supplemental engineering studies)** 來評估 NOR 的極端值：

            

                
- 充填線速度的最快和最慢設定

                
- 壓錠速度的極端值

                
- 規模效應的評估（如果縮小模型已適當確認）

            

            

這些工程研究可以在 PPQ 之前或同時進行，但不需要作為正式 PPQ 的一部分。

        

        

            

#### 比喻說明 Analogy

            

PPQ 就像新飛機的認證試飛：試飛員在**正常飛行條件**下測試飛機的性能，而不是在颱風中試飛。極端條件的測試（失速、極端高度等）已經在之前的地面模擬和工程測試中完成了（Stage 1）。但如果有些地面模擬無法完全代表實際情況，可能需要在正式試飛前補充一些邊界條件的飛行測試（補充工程研究）。

        

    

## 4.4.2.4 PPQ Using Individual Operation Studies

    

        

### Original Text

        

The PPQ of a manufacturing process can be achieved by performing PPQ studies on each individual unit operation (or related groups of operations). This approach calls for the writing of individual protocols that outline the studies to be conducted on each unit operation to achieve PPQ for the entire process. Protocols should define the testing performed and acceptance criteria for the output of the unit operation (intermediate) as prescribed by GMP. They may also require that the final DS or DP meets all specifications and predefined acceptance criteria.

    

    

        

### 導師解析 Tutorial Commentary

        

            

#### 核心概念：逐單元操作 PPQ

            

**Individual Unit Operation PPQ (逐單元操作 PPQ)** 是將整個製造流程拆分為個別的單元操作，分別撰寫 PPQ 方案並執行驗證。

            

這種方法的優勢：

            

                
- 每個單元操作有獨立的測試和接受標準

                
- 可以針對中間體 (intermediate) 設定 GMP 規定的品質標準

                
- 出現偏差時更容易定位問題來源

                
- 特別適合長流程或複雜的生物製劑 DS 製程

            

        

        

            

#### 重點提示 Key Notes

            

使用逐單元操作 PPQ 時，不要忽略**整體製程**的驗證。個別單元操作的 PPQ 通過，不代表整個製程一定符合要求。最終的 DS 或 DP 仍然必須符合所有規格和預定義的接受標準。

            

這種方法常見於蛋白質藥物原料藥 (protein DS) 的製程，因為其製程步驟多且各有獨特的關鍵參數。

        

        

            

#### 比喻說明 Analogy

            

逐單元操作 PPQ 就像組裝一輛汽車：你可以分別測試引擎、變速箱、煞車系統各自的性能（單元操作 PPQ），但最終還是要做一次完整的路測（最終 DS/DP 規格確認），確保所有零件組裝在一起後的整體表現符合標準。

        

    

## 4.4.2.5 PPQ Using Bracketing, Matrix, and Family Approaches

    

        

### Original Text

        

Many operations involve similar or identical process operations or equipment. In these cases, designs where grouping is used may be considered (57). Some process variables that might be amenable to approaches using bracketing, matrix, or family grouping PPQ include:

        

            
- Batch sizes

            
- DP dosage strength

            
- Identical equipment

            
- Different size vessels, tanks, or similar configurations of the same design and operating principle or in-kind equipment

            
- Various vial sizes and/or fill volumes of the same DP (e.g., smallest and largest vial size)

            
- Filling line speeds (e.g., fastest and slowest line speed)

            
- Product packaging (e.g., bottle heights or dosage counts)

            
- Transport validation for biological products

        

    

    

        

### 導師解析 Tutorial Commentary

        

            

#### 核心概念：分組驗證策略

            

當多個產品或配置共用相似的製程和設備時，可以使用分組策略來減少 PPQ 的總工作量：

            

                
- **Bracketing (括弧法)：**只驗證極端值（如最小和最大批量），假設中間值的表現也可接受。適用於連續變數（批量、線速度、充填量）。

                
- **Matrix (矩陣法)：**在多個因子的所有組合中選擇代表性的子集進行驗證。適用於有多個獨立變數的情況。

                
- **Family Grouping (家族分組)：**將使用相同製程/設備的產品歸為一族，選擇代表性成員進行驗證。適用於相同平台的多個產品。

            

        

        

            

#### 比喻說明 Analogy

            

分組驗證就像買鞋試穿：

            

                
- **Bracketing** = 你只試穿最大號和最小號，確認都合腳後，就相信中間尺碼也沒問題

                
- **Matrix** = 你有三種顏色和三種尺碼共九雙，但只挑幾雙有代表性的組合來試穿

                
- **Family** = 同品牌同系列的不同款式，你知道它們的楦型一樣，只需試穿一款就能預測其他款的合腳程度

            

        

        

            

#### 重點提示 Key Notes

            

使用分組策略時必須注意：

            

                
- 必須有科學論證支持為什麼這些產品/條件可以被歸為同一組

                
- 如果組內某個條件的結果不符合預期，可能需要擴大驗證範圍

                
- 分組策略特別適合 CDMO，因為 CDMO 通常在相同設備上生產多個客戶的產品

                
- 運輸驗證 (transport validation) 也可使用分組策略，特別適合有多條運輸路線的生物製品

            

        

        

            

#### 實務應用 Practical Application

            

**CDMO 情境：**你的充填線可以處理 2R 到 50R 的西林瓶。與其對每種瓶型都做完整 PPQ，你可以：

            

                
1. 使用 **Bracketing**：只對最小 (2R) 和最大 (50R) 瓶型做完整 PPQ

                
2. 使用 **Matrix**：結合瓶型和充填量，選擇代表性組合

                
3. 論證中間瓶型的行為可以從極端值結果推斷

                
4. 在 PVMP 中記錄分組策略的科學依據

            

            

這可以將 PPQ 工作量從十幾批減少到數批，同時保持科學嚴謹性。

        

        

            

#### 練習思考 Practice Questions

            

                
1. 在哪些情況下，Bracketing 策略不適用？請舉出至少兩個例子。

                
2. 如果你使用 Family Grouping 來驗證三個不同劑量強度的產品，但最低劑量強度的結果不符合預期，你會如何處理？

                
3. Transport Validation 使用 Bracketing 時，「極端值」應該包含哪些因素？

            

        

    

    

### 本節重點回顧 Section Summary

    

        
- **加強取樣計畫 (Enhanced Sampling Plan)：**PPQ 階段的取樣必須比日常生產更廣泛，使用三大統計工具 — Individual Value Plots（視覺化）、Tolerance Intervals（能力衡量）、Variance Components（變異來源分析）— 來提供批內和批間品質的統計信心。

        
- **風險分層取樣：**取樣數量依 CQA 關鍵性分級（高/中/低），對應不同的信心/涵蓋度要求（95/99、95/95、95/90）。無菌充填產品使用 B/M/E 時間點取樣，最低 n=6（各 2），最高可達 n=15（各 5）。

        
- **取樣數量決定邏輯：**基於先驗知識（Stage 1 數據）和 CQA 關鍵性的組合，使用容許區間法反推所需取樣量。無先驗知識時（如疫情緊急應變），可採用統一的 95/95 最低取樣標準。

        
- **PPQ 批次數的三步驟決策法：**Step 1 確定基線批次數（知識越多，起始批次越少）；Step 2 評估是否需要追加控制或研究；Step 3 考量非 GMP 商業因素。N=3 依據 EU GMP Annex 15 為常用起點，但必須有完整的風險評估論證。

        
- **PPQ 報告結構：**應包含所有屬性的摘要統計表、逐屬性的圖形分析（個別值圖）、容許區間圖表、變異成分表，以及每個屬性的管控與能力總結聲明。無法執行統計分析時（如低於 LOD 或獨特值不足），應說明原因並使用替代方法。

        
- **PPQ 執行策略的靈活性：**PPQ 通常在正常操作條件下執行（極端條件已在 Stage 1 探索）；可按個別單元操作分別執行 PPQ；多產品/多配置可使用 Bracketing、Matrix 或 Family Grouping 策略來提升效率。

        
- **所有決策和論證必須記錄在 PVMP 中，**包括取樣策略、批次數選擇依據、分組策略的科學依據，以及所有支持數據來源的引用。

    

 

    

PDA Technical Report No. 60 (Revised 2026): Process Validation — A Lifecycle Approach

    

Section 4.4.2: PPQ Enhanced Sampling, Batch Justification & Study Design (p49–p57)

    

Educational Material — For Training Purposes Only

## Section 3: Continued Process Verification (Stage 3) 持續製程確認（第三階段） (p67-p83)

# Section 5.0-5.2: Continued Process Verification (Stage 3) - Part 1

    

持續製程驗證（第三階段）- 第一部分：監控計畫、策略與職責

    

PDA Technical Report No. 60 (Revised 2026) | p67 - p76 | Sections 5.0 - 5.2

    

### 本章學習目標

    

        
- 理解 Continued Process Verification (CPV) 的定義、目的及其在製程驗證生命週期中的角色

        
- 掌握 CPV 監控計畫的建立步驟，包括 Stage 3a 與 Stage 3b 的差異

        
- 認識 CPV 策略中的統計製程管制 (SPC)、數據科學及數位雙生 (Digital Twin) 的應用

        
- 了解 CPV 的職責分工，包括跨功能團隊的角色與文件要求

        
- 學習 Legacy Product（既有產品）如何建立 CPV 計畫的特殊考量

        
- 探討人工智慧 (AI) 與機器學習 (ML) 在 CPV 中的前沿應用與監管期望

    

    

### 本節內容導覽 Section Navigation

    

        5.0 CPV 概述
        5.1 建立監控計畫
        5.1.1 目的與策略
        5.1.2 職責
        5.1.3 文件與知識管理
        5.1.4 Legacy Products
        5.2 數據科學與先進工具
        5.2.1 SPC 統計製程管制
        5.2.2 Digital Twins 數位雙生
        5.2.3 AI/ML 應用
    

## 5.0 Continued Process Verification (Stage 3)

    

        

### 原文內容 Original Text

        

Continued process verification (CPV) is a regulatory and quality assurance approach used in the pharmaceutical and manufacturing industries. It involves ongoing monitoring, assessment, and validation of processes throughout the lifecycle of a product. CPV aims to ensure that the processes remain in a state of control, consistently producing products that meet predefined quality standards and regulatory requirements.

        

Unlike traditional batch validation, which focuses on verifying processes at specific intervals, CPV involves continuous monitoring, data collection, and analysis over time. This allows firms to detect deviations, make adjustments, and ensure that any changes in the process do not negatively impact product quality or safety.

        

The primary goals of CPV are:

        

            
- **To ensure consistent product quality:**
                
    - By verifying that the manufacturing processes remain stable and within specified limits over time.

            

            
- **To identify potential risks early:**
                
    - Through continuous data analysis, potential issues can be detected before they become major problems.

            

            
- **To improve operational efficiency:**
                
    - Continuous monitoring can help optimize processes and reduce waste, leading to cost savings.

            

            
- **To comply with regulatory expectations:**
                
    - Regulatory agencies, like the FDA, often require CPV as part of GMPs.

            

        

    

    

        

### 導師解析 Tutorial Commentary

        

            

#### 核心概念解析 Key Concepts

            

**Continued Process Verification, CPV（持續製程驗證）：**這是製程驗證生命週期的第三階段（Stage 3），是從 PPQ（Stage 2）成功完成後開始的持續性活動。與傳統的「三批驗證」不同，CPV 強調的是「製程不是驗證完就結束」，而是需要在整個產品生命週期中持續監控、收集數據並分析，確保製程始終維持在受控狀態。

            

**State of Control（受控狀態）：**指製程在預先定義的參數範圍內穩定運行，持續產出符合品質標準的產品。這不是一個靜態的結論，而是需要持續證明的動態狀態。

            

**Batch Validation vs. CPV：**傳統批次驗證是在特定時間點對特定批次進行的「快照式」確認；CPV 則是「錄影式」的持續觀察，能夠捕捉到隨時間變化的趨勢和偏移。

        

        

            

#### 比喻說明 Analogy

            

想像你買了一輛新車（PPQ 完成）。你不會因為通過了出廠檢驗就永遠不再保養它。CPV 就像是車輛的**定期保養與行車電腦監控**：引擎溫度、油耗、輪胎壓力等參數持續被監測。如果某個數值開始異常上升（趨勢偏移），你會在車子真正拋錨之前就發現問題並採取行動。傳統批次驗證則像是每年一次的車輛年檢 — 只能看到某一天的狀態，無法捕捉到漸進式的劣化。

        

        

            

#### 重點提示 Key Notes

            

**CPV 的四大目標背後的邏輯：**

            

                
- **品質一致性：**這是最基本的要求 — 確保每一批產品都符合規格

                
- **早期風險識別：**這是 CPV 最大的附加價值 — 在問題變成 OOS 之前就發現趨勢

                
- **營運效率提升：**數據驅動的決策可以減少浪費、降低偏差率，直接影響 CDMO 的利潤

                
- **法規合規：**FDA PV Guidance (2011)、EU GMP Annex 15 都明確要求 CPV

            

            

對 CDMO 而言，一個成熟的 CPV 計畫不僅是法規要求，更是展現技術能力、贏得客戶信任的重要工具。

        

        

            

#### 實務應用 Practical Application

            

**CDMO 場景：**你的公司剛完成一個生物製劑產品的 PPQ（3 批次 PPQ 成功）。客戶要求看到你的 CPV 計畫。這時你需要：

            

                
- 明確說明 CPV 監控哪些 CQA 和 CPP

                
- 定義數據收集的頻率和統計分析方法

                
- 建立趨勢偏移的警戒限和行動限

                
- 說明誰負責分析數據、多久檢視一次

            

            

一個結構完善的 CPV 計畫可以成為商業提案中的亮點，展現你的品質管理成熟度。

        

        

            

#### 練習思考 Practice Questions

            

                
1. 為什麼 TR60 強調 CPV 與傳統批次驗證的根本差異？這反映了怎樣的品質理念轉變？

                
2. 如果一個 CPV 計畫只監控最終產品的放行檢驗結果，你認為這樣足夠嗎？為什麼？

                
3. CPV 的「早期風險識別」目標如何具體實現？試舉一個製程參數漂移的例子。

            

        

    

## 5.1 Establishing a Monitoring Program

    

        

### 原文內容 Original Text

        

Establishing a monitoring program for CPV is a critical step in ensuring that manufacturing processes remain in control and consistently produce products that meet quality standards. A CPV monitoring program involves systematically collecting, analyzing, and interpreting data throughout the lifecycle of a product to verify that the process is consistently operating within its defined parameters (4, 59, 60).

    

    

        

### 導師解析 Tutorial Commentary

        

            

#### 核心概念解析 Key Concepts

            

**Monitoring Program（監控計畫）：**CPV 的骨幹架構。它不是簡單的「收集數據」，而是一個系統性的計畫，涵蓋三個核心活動：

            

                
- **收集（Collecting）：**確定監控哪些參數、取樣頻率、數據來源

                
- **分析（Analyzing）：**使用統計方法（如 SPC）處理數據、識別趨勢

                
- **解讀（Interpreting）：**將統計結果轉化為可操作的決策（例如是否需要調查、是否需要修改製程）

            

            

這三個活動構成了一個持續的 PDCA 循環，從產品上市開始一直延續到產品退市。

        

        

            

#### 比喻說明 Analogy

            

把 CPV 監控計畫想像成一個**智慧型健康手錶**。它不只是在你生病時才量體溫（被動反應），而是 24 小時持續追蹤你的心率、血氧、睡眠品質（主動監控）。當它偵測到你的靜息心率連續三天異常升高時，會提醒你「可能需要休息或看醫生」— 這就是在問題變嚴重之前的早期預警。CPV 對製程做的，就是健康手錶對你身體做的事。

        

        

            

#### 重點提示 Key Notes

            

注意原文引用了三個參考文獻 (4, 59, 60)，這些通常對應 FDA PV Guidance、ISPE 指南和 PDA 自身的技術報告。監控計畫的設計必須基於：

            

                
- Stage 1（製程設計）中建立的製程知識

                
- Stage 2（PPQ）中確認的關鍵參數和屬性

                
- 風險評估的結果（哪些參數最需要持續監控）

            

            

這意味著 CPV 不是從零開始設計的 — 它是 Stage 1 和 Stage 2 工作的自然延伸。

        

    

## 5.1.1 Purpose and Strategy

    

        

### 原文內容 Original Text

        

The FDA PV guidance defines CPV as the assurance that the process remains in a state of control during routine production (1). EU GMP Annex 15 defines "Ongoing Process Verification," also known as CPV, as documented evidence that the process remains controlled during commercial manufacture (50).

        

Maintenance of a validated state requires having a robust quality system in place encompassing aspects such as change control, training, auditing, and periodic review (4, 60). A CPV program (Stage 3a and 3b) provides a means to ensure that processes remain in a state of control following successful PPQ (Stage 2). The information and data collected during Stages 1 and 2 set the stage for an effective control strategy in routine manufacturing and a meaningful CPV program. Understanding functional relationships between process inputs and corresponding outputs established in earlier stages are fundamental to the success of the CPV program. The program minimizes process failures through early detection of adverse trends and a quick reaction by applying data analysis and scientific methods for better decision-making. Figure 5.1.1-1 is a conceptual chart depicting a high level of sampling at Stage 3a, the strategies applied when a lifecycle change is proposed, and the achieving of process stability.

        

            "Continued monitoring of process variables enables adjustments to inputs covered in the scope of the CPV plan and detects the potential for process variability, ensuring that outputs remain consistent."
        

        

Since all sources of potential variability may not be anticipated and defined in Stages 1 and 2, unanticipated events or trends identified from CPV may indicate process control issues and/or highlight opportunities for process improvement. Science- and risk-based tools help achieve high levels of process understanding during the development phase, and subsequent knowledge management (KM) across the product life stages facilitates implementing CPV (refer to Section 3.0 and Section 4.0).

    

    

        

### 導師解析 Tutorial Commentary

        

            

#### 核心概念解析 Key Concepts

            

**Stage 3a vs. Stage 3b 的關鍵區分：**

            

                
- **Stage 3a（加強監控期）：**緊接在 PPQ 完成後的初期階段。此時取樣頻率較高（通常接近 PPQ 水平），目的是在商業生產的早期批次中建立足夠的數據基線。這是從「驗證模式」過渡到「常規監控」的橋樑。

                
- **Stage 3b（常規監控期）：**當 Stage 3a 累積了足夠的數據，證明製程穩定後，可以將取樣降低至常規水平。這是長期持續的監控活動。

            

            

**Knowledge Management, KM（知識管理）：**TR60 特別強調從 Stage 1 到 Stage 3 的知識傳遞。CPV 計畫的品質直接取決於前兩個階段累積的製程知識 — 如果你不知道哪些輸入會影響哪些輸出，你就無法設計有意義的監控計畫。

        

        

            

#### 重點提示 Key Notes

            

**FDA vs. EU 的定義差異：**

            
                
| 面向 | FDA PV Guidance | EU GMP Annex 15 |
| --- | --- | --- |
                
| 術語 | Continued Process Verification | Ongoing Process Verification |
                
| 核心定義 | 確保製程在常規生產中保持受控 | 製程在商業製造中保持受控的書面證據 |
                
| 重點差異 | 強調「保證」(assurance) | 強調「書面證據」(documented evidence) |
            

            

EU 更強調文件化的證據，這對 CDMO 意味著你的 CPV 報告必須有完整的數據追蹤和統計分析記錄。單純說「製程運行正常」是不夠的。

        

        

            

#### 比喻說明 Analogy

            

**Stage 3a 與 3b 的過渡**就像新手駕駛剛拿到駕照的過程。Stage 3a 是「實習期」— 你開車時特別小心，可能會裝行車記錄器、讓教練陪同幾次（加強監控）。經過幾個月的安全駕駛記錄後，你進入 Stage 3b「正式駕駛期」— 不再需要教練，但仍然定期保養車輛、注意儀錶板（常規監控）。如果中途發生事故或車輛改裝（製程變更），你可能需要暫時回到加強監控模式。

        

        

            

#### 圖表解讀 Figure 5.1.1-1 Analysis

            

**Figure 5.1.1-1 Sampling Levels 概念圖解讀：**

            

此圖呈現了 CPV 生命週期中取樣水平的變化趨勢：

            

                
- **Stage 3a 區域：**取樣量高，接近 PPQ 水平。這是為了在商業製造初期建立統計基線

                
- **過渡區域：**隨著累積數據增加，統計信心提升，取樣量逐步降低

                
- **Stage 3b 區域：**達到穩態後的常規取樣水平

                
- **生命週期變更點：**當提出製程變更時，取樣量可能需要暫時回升（像是一個「小型 Stage 3a」），直到變更後的製程穩定性得到確認

            

            

這個概念非常重要：CPV 的取樣策略不是固定不變的，而是**動態調整**的。

        

        

            

#### 實務應用 Practical Application

            

**從 Stage 3a 過渡到 Stage 3b 的判定標準：**

            

在實務中，如何決定何時可以從加強監控降級為常規監控？通常需要：

            

                
- 累積至少 20-30 批的商業生產數據

                
- 所有 CQA 和 CPP 的 SPC 圖顯示製程處於統計受控狀態

                
- 製程能力指數（Cpk/Ppk）達到預定目標（通常 ≥ 1.33）

                
- 無重大偏差或趨勢警告

                
- 經跨功能團隊評審並批准

            

        

        

            

#### 練習思考 Practice Questions

            

                
1. 為什麼原文強調 CPV 的成功取決於 Stage 1 和 Stage 2 建立的「功能性關係」？如果這些關係不清楚會怎樣？

                
2. Stage 3a 期間如果發現某個 CPP 出現趨勢偏移，你會建議採取什麼行動？

                
3. Knowledge Management 在 CPV 中扮演什麼角色？如果一個 CDMO 的製程開發團隊和生產團隊資訊不互通，會對 CPV 產生什麼影響？

            

        

    

## 5.1.2 Responsibilities

    

        

### 原文內容 Original Text

        

Effective CPV with variability detection methods, via sampling and statistical assessment, results in identification of continuous improvement opportunities. Along with the process subject matter expert, the determination of the sampling plan adequacy and statistical assessment should also be reviewed by personnel trained in statistical methods and data science, along with the use of appropriate statistical software. The list of process data to be collected and how it will be analyzed should be stated and the roles and responsibilities for various functional groups as they relate to collection, analysis, and review of CPV data, and the documentation requirements identified. Technical Operations, Manufacturing Science and Technology, Quality Unit, or Development groups are typically responsible for the CPV program.

    

    

        

### 導師解析 Tutorial Commentary

        

            

#### 核心概念解析 Key Concepts

            

**CPV 的跨功能職責架構：**TR60 明確指出 CPV 不是單一部門的工作，而是需要多個功能團隊協作：

            
                
| 功能團隊 | 主要角色 | CPV 中的職責 |
| --- | --- | --- |
                  
| Technical Operations（技術營運） | 製程執行者 | 數據收集、取樣執行、即時異常通報 |
                  
| MSAT（製造科學與技術） | 技術橋樑 | 統計分析、趨勢評估、製程改善建議 |
                  
| Quality Unit（品質單位） | 監督與審核 | CPV 報告審核、偏差關聯分析、法規合規確認 |
                  
| Development（開發團隊） | 知識提供者 | 提供 Stage 1 製程知識、支援異常調查 |
                  
| Data Science（數據科學） | 分析專家 | 統計方法開發、高階分析工具維護 |
            

        

        

            

#### 重點提示 Key Notes

            

**TR60 (Revised 2026) 的新亮點：Data Science 的明確納入**

            

值得注意的是，本修訂版首次明確要求 CPV 的統計評估應由**受過統計方法和數據科學訓練的人員**參與審查。這反映了產業趨勢：

            

                
- 傳統的品質工程師可能不具備高階統計分析能力

                
- 現代 CPV 越來越依賴多變量統計分析、時間序列分析等進階方法

                
- 數據科學團隊的角色從「可選的支援」變成了「必要的參與者」

            

            

對 CDMO 來說，這意味著可能需要投資培訓或招聘具備數據科學技能的人才。

        

        

            

#### 比喻說明 Analogy

            

把 CPV 團隊想像成一支**醫院的健康管理團隊**：

            

                
- **護理師（Technical Operations）：**每天量血壓、測血糖，收集基礎數據

                
- **主治醫師（MSAT）：**分析數據趨勢，判斷是否需要調整用藥

                
- **醫務主任（Quality Unit）：**確保所有診療都符合醫療規範，審核醫療紀錄

                
- **專科醫師（Development）：**當出現罕見狀況時，提供專業諮詢

                
- **生物統計師（Data Science）：**運用進階分析工具，從大量數據中找出隱藏的模式

            

            

沒有任何一個角色能獨立完成所有工作 — 這就是為什麼 CPV 需要「跨功能團隊」。

        

        

            

#### 文件化要求架構 Documentation Framework

            

CPV 的文件化需求可以分為三個層次：

            

```

Level 1: CPV Master Plan (CPV 主計畫)
  ├── 監控策略概述
  ├── 納入的產品/製程清單
  └── 職責矩陣 (RACI)

Level 2: Product-Specific CPV Plan (產品 CPV 計畫)
  ├── 監控的 CQA / CPP 清單
  ├── 取樣計畫與頻率
  ├── 統計方法與管制圖類型
  ├── 警戒限 / 行動限定義
  └── 報告頻率與審核流程

Level 3: CPV Reports & Trend Analysis (CPV 報告)
  ├── 定期趨勢分析報告
  ├── 製程能力計算結果
  ├── 異常事件調查摘要
  └── 持續改善行動追蹤
            
```

        

        

            

#### 練習思考 Practice Questions

            

                
1. 如果你的公司沒有專職的數據科學團隊，你會如何滿足 TR60 對統計專業能力的要求？

                
2. 在 CPV 的 RACI 矩陣中，誰應該是 CPV 報告的「Accountable」（當責者）？為什麼？

                
3. 「適當的統計軟體」(appropriate statistical software) 意味著什麼？Excel 是否足夠？

            

        

    

## 5.1.3 Documentation and Knowledge Management

    

        

### 原文內容 Original Text

        

The CPV program requires comprehensive documentation to ensure traceability, consistency, and regulatory compliance. This documentation supports the knowledge management (KM) framework that enables effective transfer of process understanding across the product lifecycle.

        

Key documentation elements include:

        

            
- A CPV Master Plan or equivalent document that defines the overall program strategy, scope, and governance structure

            
- Product-specific CPV plans that identify the parameters, attributes, and statistical methods to be used for ongoing monitoring

            
- Periodic CPV reports summarizing trends, process capability assessments, and any identified corrective actions

            
- Integration with existing quality system documents including Annual Product Reviews (APR) / Product Quality Reviews (PQR)

        

        

The documentation should establish clear linkages between Stage 1 process characterization data, Stage 2 PPQ results, and Stage 3 ongoing monitoring data, enabling a holistic view of process performance across its lifecycle.

    

    

        

### 導師解析 Tutorial Commentary

        

            

#### 核心概念解析 Key Concepts

            

**APR / PQR 與 CPV 的關係：**

            

**Annual Product Review, APR（年度產品回顧）**是 FDA 要求（21 CFR 211.180(e)）的年度性評估，而 **Product Quality Review, PQR（產品品質回顧）**是 EU GMP 的對應要求。CPV 報告與 APR/PQR 的關係是：

            

                
- CPV 提供**即時性**的數據監控（可能是每月或每季）

                
- APR/PQR 是**彙總性**的年度評估

                
- CPV 數據是 APR/PQR 中製程趨勢分析的**主要來源**

                
- 兩者不能互相取代，但應該保持一致和互相引用

            

        

        

            

#### 重點提示 Key Notes

            

**知識管理的「黃金線」：**

            

TR60 強調文件應建立 Stage 1 → Stage 2 → Stage 3 之間的**清晰連結**。這條「黃金線」確保：

            

                
- Stage 3 的監控項目可以追溯到 Stage 1 的風險評估

                
- CPV 中發現的新趨勢可以與 Stage 1 的製程特性化數據進行對比

                
- 製程變更的影響可以從歷史數據中評估

            

            

在實務中，許多公司的問題是這條「黃金線」斷裂 — 開發團隊的知識沒有有效傳遞到生產團隊，導致 CPV 計畫與實際製程知識脫節。

        

        

            

#### 比喻說明 Analogy

            

知識管理就像**病歷紀錄**。如果你更換主治醫師（從開發轉移到生產），新醫師必須能夠閱讀完整的病歷（Stage 1-2 數據），了解你過去做過什麼檢查、有什麼發現、對什麼藥物敏感。如果病歷缺失或不完整，新醫師就只能從零開始摸索，可能錯過關鍵的健康風險因子。CPV 的文件就是製程的「完整病歷」。

        

        

            

#### 練習思考 Practice Questions

            

                
1. CPV 報告的審核頻率應該是多久一次？為什麼不能只靠年度的 APR/PQR？

                
2. 如果 Stage 1 的製程特性化報告遺失或不完整，這會對 CPV 計畫的建立產生什麼影響？你會如何補救？

            

        

    

## 5.1.4 Legacy Products

    

        

### 原文內容 Original Text

        

Legacy products are those that were validated using older approaches (e.g., traditional three-batch validation) prior to the introduction of the lifecycle-based process validation framework. These products present unique challenges for CPV implementation because the depth of process understanding from Stage 1 characterization may not exist.

        

For legacy products, the CPV program should:

        

            
- Leverage available historical batch data to establish baseline process performance

            
- Use risk assessment to identify which process parameters and quality attributes warrant ongoing monitoring

            
- Consider the product's compliance history, including deviations, OOS results, and CAPA history

            
- Build process knowledge retrospectively using accumulated manufacturing data

            
- Prioritize products based on risk, complexity, and regulatory visibility

        

        

The goal is not to repeat Stage 1 and Stage 2 activities retroactively, but rather to develop a monitoring strategy that reflects the current state of process understanding and progressively builds process knowledge over time.

    

    

        

### 導師解析 Tutorial Commentary

        

            

#### 核心概念解析 Key Concepts

            

**Legacy Products（既有產品/遺留產品）：**這些是在 2011 年 FDA PV Guidance 發布之前（或之後不久）使用傳統「三批驗證」方法驗證的產品。它們面臨的核心挑戰是：

            

                
- **缺乏 Stage 1 數據：**當時可能沒有做過系統性的製程特性化研究（DoE 等）

                
- **CPP/CQA 關係不明確：**功能性關係可能沒有被科學性地建立

                
- **有大量歷史數據：**好消息是這些產品已經生產多年，累積了豐富的批次數據

            

            

TR60 的務實做法是：不需要「回頭補做」Stage 1 和 Stage 2，而是利用歷史數據**回顧性地建構**製程知識。

        

        

            

#### 比喻說明 Analogy

            

Legacy product 的 CPV 就像你搬進一棟**沒有建築藍圖的老房子**。你無法回到建造時重新做結構分析（Stage 1），但你可以：

            

                
- 查看過去的維修紀錄（歷史批次數據）

                
- 請結構技師現場評估（風險評估）

                
- 安裝感測器監控結構健康（CPV 監控計畫）

                
- 優先處理最高風險的區域（基於風險的優先排序）

            

            

你不需要拆掉重建（重做 Stage 1-2），但需要建立一個務實的監控體系。

        

        

            

#### 重點提示 Key Notes

            

**Legacy CPV 的優先排序策略：**

            

CDMO 通常有數十甚至數百個產品需要建立 CPV。務實的做法是按風險排序：

            

                
- **高優先：**高風險產品（無菌注射劑、生物製劑）、有合規歷史問題的產品、監管重點關注的產品

                
- **中優先：**中等複雜度的產品、有穩定合規歷史但缺乏 CPV 的產品

                
- **低優先：**低風險產品（口服固體劑型、歷史表現良好的產品）

            

            

一個分階段的推行計畫比試圖一次性為所有產品建立 CPV 更實際、更有效。

        

        

            

#### 實務應用 Practical Application

            

**回顧性數據分析的實務步驟：**

            

                
1. **數據收集：**從 ERP/MES 系統提取過去 3-5 年的批次紀錄

                
2. **數據清理：**識別並處理缺失值、異常值、數據格式不一致

                
3. **初步分析：**建立每個參數的描述性統計（均值、標準差、分布）

                
4. **SPC 分析：**建立管制圖，回顧性地評估製程是否處於統計受控狀態

                
5. **製程能力評估：**計算 Cpk/Ppk，確認製程能力是否滿足要求

                
6. **建立基線：**使用分析結果定義 CPV 的監控限

            

        

        

            

#### 練習思考 Practice Questions

            

                
1. 一個已經生產 15 年的口服固體劑型產品，從未做過正式的 CPV。你會如何開始建立其 CPV 計畫？

                
2. 使用歷史數據建立 CPV 基線時，最大的風險是什麼？（提示：想想數據品質和製程變更的影響）

                
3. 如果歷史數據顯示某個參數的管制圖有多次超出管制限，但都有偏差報告解釋原因，你會如何處理這些數據點？

            

        

    

## 5.2 Data Science and Advanced Tools for CPV

    

        

### 原文內容 Original Text

        

The evolving landscape of pharmaceutical manufacturing increasingly leverages advanced analytical tools and data science methodologies to enhance CPV programs. The integration of modern technologies with traditional process monitoring represents a significant advancement in ensuring product quality and process control.

        

Key technological enablers for modern CPV include:

        

            
- Statistical Process Control (SPC) for systematic monitoring and trend detection

            
- Multivariate Data Analysis (MVDA) for understanding complex process relationships

            
- Digital twins for process simulation and predictive analysis

            
- Artificial Intelligence (AI) and Machine Learning (ML) for pattern recognition and predictive modeling

            
- Process Analytical Technology (PAT) for real-time process monitoring

        

        

These tools complement rather than replace traditional CPV approaches, providing deeper insights into process behavior and enabling more proactive quality management.

    

    

        

### 導師解析 Tutorial Commentary

        

            

#### 核心概念解析 Key Concepts

            

**CPV 的技術演進光譜：**

            

從傳統到先進，CPV 的分析工具可以排列在一個成熟度光譜上：

            

                
- **Level 1 - 描述性分析：**管制圖、製程能力指數（我們看到了什麼？）

                
- **Level 2 - 診斷性分析：**多變量分析、根本原因分析（為什麼會發生？）

                
- **Level 3 - 預測性分析：**趨勢預測、機器學習模型（接下來會發生什麼？）

                
- **Level 4 - 規範性分析：**AI 驅動的製程優化（我們應該怎麼做？）

            

            

大多數公司目前處於 Level 1-2，TR60 (2026) 鼓勵產業邁向 Level 3-4。

        

        

            

#### 重點提示 Key Notes

            

**「互補而非取代」的重要性：**

            

TR60 明確指出先進工具是**補充**傳統 CPV 方法的，不是取代。這意味著：

            

                
- 你仍然需要基礎的 SPC 管制圖和製程能力分析

                
- AI/ML 模型的輸出需要經過人工審核和驗證

                
- 數位雙生的預測結果需要與實際生產數據對照確認

                
- 法規機構目前對純 AI 驅動的品質決策仍持謹慎態度

            

            

這是一個分層的方法：先打好基礎（SPC），再逐步導入先進工具。

        

        

            

#### 比喻說明 Analogy

            

這四個分析層級就像**天氣預報的演進**：

            

                
- **Level 1：**看溫度計和雨量計 —「昨天下了 20mm 的雨」（描述性）

                
- **Level 2：**分析氣壓和濕度變化 —「因為低氣壓系統移入所以下雨」（診斷性）

                
- **Level 3：**氣象模型預測 —「明天有 80% 的降雨機率」（預測性）

                
- **Level 4：**AI 驅動的極端天氣預警系統 —「建議提前 48 小時啟動防洪措施」（規範性）

            

        

        

            

#### 練習思考 Practice Questions

            

                
1. 你的 CDMO 工廠目前使用 Excel 製作管制圖進行 CPV。如果要升級到下一個分析層級，你認為應該先導入什麼工具？為什麼？

                
2. 為什麼法規機構對純 AI 驅動的品質決策持謹慎態度？你認為需要什麼條件才能讓 AI 在 CPV 中被更廣泛接受？

            

        

    

## 5.2.1 Statistical Process Control (SPC)

    

        

### 原文內容 Original Text

        

Statistical Process Control (SPC) is the foundational analytical method for CPV monitoring programs. SPC uses control charts and statistical techniques to monitor process behavior over time, distinguishing between common cause variation (inherent to the process) and special cause variation (assignable to specific events).

        

Key SPC elements in CPV include:

        

            
- Control charts (e.g., X-bar/R, X-bar/S, Individual/Moving Range) for monitoring process central tendency and variability

            
- Process capability indices (Cp, Cpk, Pp, Ppk) for quantifying process performance relative to specification limits

            
- Western Electric rules and Nelson rules for detecting non-random patterns in control chart data

            
- Trend analysis using CUSUM (Cumulative Sum) and EWMA (Exponentially Weighted Moving Average) charts for detecting small, sustained shifts

        

        

The selection of appropriate SPC tools should be based on the type of data (variable vs. attribute), the process characteristic being monitored, and the sensitivity required for detecting changes. Establishing meaningful control limits is critical and should be derived from process data rather than specification limits.

    

    

        

### 導師解析 Tutorial Commentary

        

            

#### 核心概念解析 Key Concepts

            

**SPC 的核心原理 — 兩種變異：**

            

**Common Cause Variation（共同原因變異/普通變異）：**製程固有的、隨機的、預期中的變異。例如原料批次間的微小差異、環境溫濕度的自然波動。這類變異是「正常的噪音」。

            

**Special Cause Variation（特殊原因變異/異常變異）：**由特定、可識別的原因造成的非隨機變異。例如設備故障、操作錯誤、原料品質異常。這類變異是「需要調查的信號」。

            

SPC 的核心價值在於：幫助你區分這兩種變異，避免**過度反應**（對普通變異採取不必要的行動）或**反應不足**（忽略真正的特殊原因）。

        

        

            

#### 公式與計算 Formula & Key Indices

            

**製程能力指數的意義：**

            

```

Cp  = (USL - LSL) / (6 x sigma)
    → 衡量製程的「潛在能力」（不考慮偏移）

Cpk = min[(USL - mean) / (3 x sigma),
          (mean - LSL) / (3 x sigma)]
    → 衡量製程的「實際能力」（考慮偏移）

Pp / Ppk → 使用整體標準差，反映長期表現
Cp / Cpk → 使用組內標準差，反映短期能力

實務判定標準：
  Cpk ≥ 1.33  → 製程能力良好（一般要求）
  Cpk ≥ 1.67  → 製程能力優良
  Cpk < 1.00  → 製程能力不足，需要改善
            
```

        

        

            

#### 重點提示 Key Notes

            

**管制限 vs. 規格限 — 最常見的錯誤：**

            

TR60 明確指出管制限 (Control Limits) 應該**來自製程數據**，而不是來自規格限 (Specification Limits)。這是 CPV 中最常見的錯誤之一：

            

                
- **規格限 (Spec Limits)：**由產品需求決定 —「產品必須在這個範圍內才合格」

                
- **管制限 (Control Limits)：**由製程數據計算 —「製程正常運行時應該在這個範圍內」

            

            

如果你用規格限當管制限，管制圖會失去偵測趨勢偏移的能力 — 因為範圍太寬了。一個 Cpk = 2.0 的製程，其管制限會比規格限窄得多，這才能讓你在產品超出規格之前就發現問題。

        

        

            

#### 比喻說明 Analogy

            

**CUSUM 和 EWMA 圖的價值：**

            

傳統的 X-bar 管制圖就像一個**反應遲鈍的溫度計** — 只有溫度大幅變化時才會觸發警報。CUSUM 圖就像一個**高敏感度的溫度記錄器** — 它會累積每次微小的偏移，當累積量超過閾值時觸發警報。EWMA 圖則像一個**有記憶功能的溫度計** — 它對最近的數據給予更大的權重，能夠平滑地追蹤趨勢。

            

想像你每天量體溫：36.5, 36.6, 36.7, 36.6, 36.8, 36.7, 36.9... 每一天的變化都很小，X-bar 圖可能不會觸發警報。但 CUSUM 會注意到「體溫在持續上升」，在你真正發燒之前就發出預警。

        

        

            

#### Western Electric / Nelson Rules 速覽

            

這些規則用於識別管制圖中的非隨機模式：

            
                
| 規則 | 描述 | 意義 |
| --- | --- | --- |
                
| Rule 1 | 1 點超出 3 sigma | 明確的特殊原因 |
                
| Rule 2 | 連續 9 點在中心線同側 | 製程偏移（shift） |
                
| Rule 3 | 連續 6 點持續上升或下降 | 趨勢（trend） |
                
| Rule 4 | 連續 14 點交替上下 | 過度調整或混合分布 |
                
| Rule 5 | 3 點中有 2 點超出 2 sigma | 變異增大的預警 |
            

            

在 CPV 計畫中，應明確定義使用哪些規則，以及觸發後的處理流程。

        

        

            

#### 練習思考 Practice Questions

            

                
1. 一個無菌製劑的充填體積 Cpk = 1.8，但 Ppk = 1.1。這告訴你什麼？（提示：思考短期 vs. 長期變異的差異）

                
2. 為什麼 CUSUM 圖特別適合偵測製程的「小幅持續偏移」？在什麼樣的 CPV 場景中你會選擇 CUSUM 而不是傳統管制圖？

                
3. 如果你的管制圖觸發了 Rule 2（連續 9 點在中心線同側），但所有點都在管制限內，你需要調查嗎？為什麼？

            

        

    

## 5.2.2 Digital Twins

    

        

### 原文內容 Original Text

        

A digital twin is a virtual representation of a physical manufacturing process that mirrors real-time operations using data integration, simulation models, and machine learning algorithms. In the context of CPV, digital twins provide a powerful tool for:

        

            
- **Process prediction:** Simulating the impact of process parameter changes before implementation

            
- **Root cause analysis:** Isolating the most likely causes of observed deviations by running virtual experiments

            
- **Optimization:** Identifying optimal operating conditions within the validated design space

            
- **What-if analysis:** Evaluating the potential impact of proposed changes without disrupting production

        

        

The digital twin model is continuously updated with real-time process data, creating a living model that evolves with the process. This enables predictive capabilities that go beyond traditional statistical analysis, supporting more proactive and informed decision-making in CPV.

        

Implementation of digital twins requires:

        

            
- Robust data infrastructure and integration with manufacturing execution systems (MES)

            
- Validated mechanistic or hybrid models of the process

            
- Clear governance for model maintenance, updating, and version control

            
- Qualified personnel with expertise in process modeling and data science

        

    

    

        

### 導師解析 Tutorial Commentary

        

            

#### 核心概念解析 Key Concepts

            

**Digital Twin（數位雙生）：**簡單來說，就是在電腦中建立一個製造製程的「虛擬複製品」。這個虛擬模型會持續接收實際生產的即時數據，讓它能夠：

            

                
- **鏡像反映**實際製程的當前狀態

                
- **模擬預測**如果改變某個參數會發生什麼

                
- **回顧分析**過去的偏差可能是什麼原因造成的

            

            

**Living Model（活模型）：**這是 Digital Twin 的關鍵特性 — 它不是一個建立後就固定不變的模型，而是持續用新數據更新、校正的動態模型。

            

**Design Space（設計空間）：**ICH Q8 定義的概念，指已被證明能產出可接受品質產品的多維度參數組合空間。Digital Twin 可以幫助在這個空間內找到最佳操作點。

        

        

            

#### 比喻說明 Analogy

            

Digital Twin 就像**飛行模擬器**。航空公司不會讓飛行員在真實飛機上練習各種緊急情況（成本太高、風險太大）。他們使用飛行模擬器 — 一個精確複製真實飛機行為的虛擬系統。飛行員可以在模擬器中：

            

                
- 練習引擎失效時的應對（= 模擬製程偏差的影響）

                
- 測試不同的飛行路線（= What-if 分析）

                
- 了解飛機在極端天氣中的表現（= 設計空間邊界探索）

            

            

而且模擬器會根據飛機的最新維修紀錄和性能數據不斷更新（= Living Model）。製藥的 Digital Twin 做的是完全一樣的事，只是對象從飛機變成了你的製造製程。

        

        

            

#### 重點提示 Key Notes

            

**Digital Twin 的導入門檻：**

            

雖然概念很吸引人，但 Digital Twin 的導入面臨不小的挑戰：

            

                
- **數據基礎設施：**需要 MES/SCADA 系統的即時數據接口，許多老舊廠房可能不具備

                
- **模型驗證：**Digital Twin 的模型本身需要被驗證 — 你怎麼證明你的虛擬模型確實反映了真實製程？

                
- **模型維護：**製程會隨時間變化（設備老化、原料供應商變更等），模型需要定期更新和重新校正

                
- **人才需求：**需要同時懂製藥製程和數據科學的跨領域人才

            

            

建議策略：從一個關鍵單元操作開始試點，證明價值後再逐步擴展。

        

        

            

#### 實務應用 Practical Application

            

**Digital Twin 在生物製劑 CPV 中的應用場景：**

            

假設你的 CDMO 工廠生產單株抗體，其中細胞培養是最關鍵的單元操作。你可以建立一個細胞培養的 Digital Twin：

            

                
- 即時接收生物反應器的溫度、pH、DO、攪拌速度、補料速率等數據

                
- 模型預測未來 24-48 小時的細胞密度和活性趨勢

                
- 如果預測趨勢偏離預期，提前發出警報

                
- 當需要調整補料策略時，先在 Digital Twin 中模擬不同方案的效果

            

            

這不僅提升了 CPV 的預測能力，也為製程優化提供了安全的「虛擬實驗室」。

        

        

            

#### 練習思考 Practice Questions

            

                
1. Digital Twin 的模型需要被「驗證」，但這與傳統的製程驗證有什麼不同？你認為應該如何驗證一個 Digital Twin 模型？

                
2. 如果 Digital Twin 預測某批次的 CQA 將超出規格，但實際生產數據顯示該批次合格，你會怎麼處理？這對模型意味著什麼？

            

        

    

## 5.2.3 AI and Machine Learning Applications

    

        

### 原文內容 Original Text

        

The application of Artificial Intelligence (AI) and Machine Learning (ML) in CPV represents an emerging frontier in pharmaceutical manufacturing. These technologies offer capabilities that extend beyond traditional statistical methods:

        

            
- **Pattern recognition:** ML algorithms can identify complex, multivariate patterns in process data that may not be apparent through conventional analysis

            
- **Predictive modeling:** AI models can forecast process performance and product quality based on input parameters and historical data

            
- **Anomaly detection:** Unsupervised learning methods can identify unusual process behavior without predefined rules

            
- **Process optimization:** Reinforcement learning and optimization algorithms can suggest optimal process settings within the validated design space

        

        

However, the use of AI/ML in CPV requires careful consideration of:

        

            
- Model interpretability: The ability to explain model predictions and decisions is critical for regulatory acceptance and quality decision-making

            
- Data quality: AI/ML models are only as reliable as the data used to train them

            
- Validation and qualification: AI/ML models used in GxP-regulated contexts require appropriate validation, including performance monitoring and revalidation triggers

            
- Change management: Model updates and retraining must be managed through formal change control processes

            
- Regulatory landscape: FDA and other agencies are developing frameworks for AI/ML in pharmaceutical manufacturing, and alignment with evolving guidance is essential

        

        

Organizations should adopt a phased approach, starting with AI/ML as supplementary analytical tools to augment human decision-making, rather than as autonomous decision systems.

    

    

        

### 導師解析 Tutorial Commentary

        

            

#### 核心概念解析 Key Concepts

            

**AI/ML 在 CPV 中的四大應用領域：**

            

                
- **Pattern Recognition（模式識別）：**利用 ML 從高維度數據中發現人類難以察覺的複雜關聯。例如，同時分析 50 個製程參數，找出影響最終產品品質的隱藏組合。

                
- **Predictive Modeling（預測建模）：**基於歷史數據訓練模型，預測未來批次的品質表現。這讓 CPV 從「回顧分析」進化為「前瞻預測」。

                
- **Anomaly Detection（異常偵測）：**無監督學習方法不需要預先定義「什麼是異常」，它自動學習「正常」的模式，然後標記任何偏離正常的數據 — 這比傳統的固定規則更靈活。

                
- **Process Optimization（製程優化）：**在已驗證的設計空間內，AI 可以找到最佳操作點，平衡品質、效率和成本。

            

        

        

            

#### 重點提示 Key Notes

            

**Model Interpretability（模型可解釋性）— AI 在 GxP 環境中最大的挑戰：**

            

在製藥業，「為什麼」比「是什麼」更重要。如果一個 AI 模型說「這批產品可能會超出規格」，品質主管的第一個問題一定是「為什麼？」如果模型是一個「黑箱」（如深度神經網路），無法解釋預測背後的原因，這在 GxP 環境中是不被接受的。

            

因此，TR60 強調「可解釋性」是 AI/ML 在 CPV 中被監管接受的**前提條件**。建議優先使用可解釋的 ML 模型：

            

                
- **推薦：**決策樹、隨機森林、LASSO 回歸、PLS（偏最小二乘法）

                
- **謹慎使用：**深度學習、複雜的神經網路（除非搭配可解釋性工具如 SHAP 或 LIME）

            

        

        

            

#### 比喻說明 Analogy

            

**AI 的「分階段導入」策略：**

            

想像你要教一個新員工獨立操作一條生產線：

            

                
- **Phase 1 — 觀察學習：**AI 只是「看」數據，輔助人類分析，不做任何決策（= 補充分析工具）

                
- **Phase 2 — 建議模式：**AI 提供建議，但所有決策仍由人類做出並記錄理由（= 輔助決策）

                
- **Phase 3 — 監督自主：**AI 可以在預定義的範圍內自動執行某些動作，但人類持續監督（= 有限自主）

                
- **Phase 4 — 完全自主：**AI 在驗證過的場景中完全自主操作（= 未來目標，目前法規框架尚未完善）

            

            

TR60 建議產業目前應停留在 Phase 1-2，逐步向 Phase 3 推進。

        

        

            

#### 重點提示 — 法規動態 Regulatory Landscape

            

**FDA 對 AI/ML 在製藥製造中的態度：**

            

                
- **2023：**FDA 發布「AI/ML in Drug Manufacturing」討論文件，確立了透明度、可解釋性、人類監督的基本原則

                
- **2024-2025：**FDA 的 CDER 和 CBER 開始在 PAI（Pre-Approval Inspection）中詢問 AI/ML 的使用情況

                
- **2026 前瞻：**預期 FDA 將發布更具體的 AI/ML 指南，涵蓋模型驗證、變更管理和持續監控的要求

            

            

EU EMA 也在發展類似的框架。對 CDMO 來說，現在開始建立 AI/ML 的治理架構（governance framework）是明智的投資。

        

        

            

#### AI/ML 模型生命週期管理 Model Lifecycle

            

```

AI/ML Model Lifecycle in GxP Context:

1. Problem Definition (問題定義)
   └── 明確 CPV 中要解決什麼問題

2. Data Preparation (數據準備)
   ├── 數據收集、清理、特徵工程
   └── 訓練集 / 驗證集 / 測試集分割

3. Model Development (模型開發)
   ├── 演算法選擇（考慮可解釋性）
   ├── 超參數調整
   └── 交叉驗證

4. Model Validation (模型驗證)     ← GxP 關鍵步驟
   ├── 性能指標評估（準確度、精確度等）
   ├── 穩健性測試
   └── 可解釋性驗證

5. Deployment (部署)
   ├── 與現有系統整合
   └── 使用者培訓

6. Monitoring & Maintenance (監控與維護)
   ├── 模型性能持續監控（Model Drift 偵測）
   ├── 定期重新驗證
   └── 變更管理（模型更新走 Change Control）
            
```

        

        

            

#### 實務應用 Practical Application

            

**CDMO 的 AI/ML 導入路線圖建議：**

            
                
| 時間框架 | 行動項目 | 預期成果 |
| --- | --- | --- |
                  
  
| 0-6 個月 | 建立數據治理框架評估數據基礎設施培訓核心團隊 | 組織準備度評估完成 |
                  
  
| 6-12 個月 | 選擇一個試點產品/製程開發第一個 ML 模型（如異常偵測）建立模型驗證 SOP | 第一個 AI/ML 試點完成 |
                  
  
| 12-24 個月 | 將試點成果推廣到其他產品整合 AI 工具到 CPV 工作流程建立模型生命週期管理體系 | AI/ML 成為 CPV 常規工具 |
                  
| 24+ 個月 | 探索預測性品質和即時放行與監管機構溝通 AI/ML 策略 | 邁向 Pharma 4.0 |
            

        

        

            

#### 練習思考 Practice Questions

            

                
1. 一個 AI 模型在訓練數據上表現優異（準確度 99%），但在新數據上表現下降（準確度 75%）。這種現象叫什麼？在 CPV 的應用中會造成什麼後果？

                
2. 如果你的 AI 異常偵測模型誤報率 (false positive rate) 很高，這會對生產營運造成什麼影響？你會如何平衡靈敏度和誤報率？

                
3. 為什麼 TR60 建議 AI/ML 模型的更新要走正式的變更管制流程？如果不這樣做可能會發生什麼問題？

                
4. 一個 CDMO 客戶要求你使用 AI 來預測其產品的 CQA。你會在合約和技術轉移文件中加入什麼條款來管理 AI 模型的知識產權和驗證責任？

            

        

    

    

PDA Technical Report No. 60 (Revised 2026) - Process Validation: A Lifecycle Approach

    

Section 3a: Continued Process Verification Part 1 (5.0-5.2) | p67-p76

    

Educational Material for CDMO Professionals | For training purposes only

↑

# Section 5.3-5.5: Continued Process Verification Part 2 — Reacting, Change Management & Reporting

    

持續製程確認 第二部分 — 回應 CPV 數據信號、變更管理與報告

    

PDA Technical Report No. 60 (Revised 2026): Process Validation — A Lifecycle Approach | p77 - p83

    

### 本章學習目標

    

        
- 理解 CPV 數據信號 (Data Signals) 的分類方式，以及如何區分可歸因變異、共同原因變異與特殊原因變異

        
- 掌握 CPV 決策樹 (Decision Tree) 的運作邏輯，避免對個別事件過度反應或反應不足

        
- 了解 CPV 如何整合品質系統以支持生命週期變更管理，包括 Established Conditions (ECs) 與 ICH Q12 框架

        
- 學習 Stage 3a 與 Stage 3b 報告的核心內容，以及 CPV 數據如何支援年度產品回顧 (APQR/YBPR)

        
- 認識即時與批次間回饋機制在持續製程改進中的角色

    

    

### 本節目錄 Section Contents

    

        5.3 Reacting to CPV Data Signals
        5.3.1 CPV Decision-Making
        5.4 Applying CPV for Lifecycle Change Management
        5.4.1 Quality Systems and CPV
        5.4.2 Regulatory Commitments and ECs
        5.5 CPV Data Review and Reporting
        5.5.1 Stage 3a Reporting
        5.5.2 Stage 3b Reporting
        5.5.3 Utilizing CPV for APR/YBPR
    

## 5.3 Reacting to Continued Process Verification Data Signals

    

        

### Original Text

        

The practical implementation of CPV is expected to reduce the cost of quality, provide opportunities to improve product quality, increase product and process knowledge, and reduce regulatory compliance risks. A system or systems for continually and efficiently detecting unplanned departures from the process as designed is essential to accomplish the CPV goal. Collection and evaluation of process performance data should allow detection of process drift if adequately monitored through application appropriate methodologies. These efforts can identify variability in the process, signal potential process improvements, and provide opportunities to mitigate and control those variabilities if properly carried out.

        

            "The FDA PV guidance specifically states that trending should be performed in such a way that it guards against overreaction to individual events."
        

        

An upfront approach for addressing the relevant variables and signals is therefore important in avoiding under-detection or overreaction. The CPV signals are "yellow flags" that represent the process variability and drifts and the severity of the signal is then determined.

    

    

        

### Tutorial Commentary

        

            

#### Core Concepts

            

**CPV Data Signals (CPV 數據信號):** CPV 信號並非 OOS（超出規格）或 OOT（超出趨勢）的偏差事件。它們是統計製程管制圖上出現的「黃旗」(yellow flags)，代表製程正在發生變異或漂移。信號的嚴重程度需要進一步評估，而非立即採取糾正措施。

            

**Process Drift (製程漂移):** 指製程隨時間緩慢偏離原設計中心值的現象。若不及時偵測，漂移最終可能導致 OOS 或品質失敗。

        

        

            

#### Analogy

            

想像你開車在高速公路上。**CPV 信號就像車道偏離警示系統**：車子稍微偏向車道邊緣時，系統會發出「嗶嗶」聲提醒你（黃旗）。這不代表你已經出了車禍（OOS），而是提醒你注意方向盤。如果你每次聽到「嗶」就猛打方向盤（overreaction），反而會造成危險；但如果完全忽視警示（under-detection），最終可能衝出車道。CPV 的精髓就在於「適度反應」。

        

        

            

#### Key Notes

            

**FDA 明確要求：**趨勢分析方法必須能夠防止對個別事件過度反應 (overreaction to individual events)。這意味著企業需要建立系統性的決策流程，而非讓個人判斷決定行動方案。

            

**CPV 的四大效益：**

            

                
- 降低品質成本 (cost of quality)

                
- 提供產品品質改進機會

                
- 增加產品與製程知識

                
- 降低法規合規風險

            

        

    

## 5.3.1 Continued Process Verification Decision-Making

    

        

### Original Text

        

Routine CPV trending within established alert limits, signal detection and action enables organizations to maintain an enhanced product control strategy. A CPV signal can be for a quality attribute, material attribute, process parameter defined in the control strategy, and/or performance indicator with varying degrees of severity. A risk-based categorization of signals received (e.g., CPP, CQA) is also required, as all signals are not equally significant, which leads to requiring different action plans to address the signals on a case-by-case basis. When a significant amount of data is available, the suggested action in Figure 5.3.1-1 may be applied. Paths are determined based on practical relevance and the statistical strength of the signal. For instance, taking Path 1 is proposed when the observed drift results from an assignable event extrinsic to the process and characterized by an isolated event which may or may not have been identified as a quality management system (QMS) deviation or incident.

        

            *Figure 5.3.1-1 Decision-Tree Guideline (Stage 3b)*
        

        

The CPV signal, once determined not to be an OOS/OOT/deviation, is further assessed for statistical significance. A change review step provides insights into any potential impact of the sources of variability, that is, personnel, raw material, process, test method, equipment, utilities, facility, and environmental conditions. Understanding the causes of variability allows for control at the source.

        

The preliminary assessment allows for determining the signal as either assignable, common, or special-cause variation. The proposed path of either continuing monitoring, assessment of control strategy, or a change requirement is then documented. Defined systemic decision-making steps guard against overreaction to individual events as well as against failure to act on the observed process variability.

        

The systematic steps justify the robustness of routine CPV operational decision-making process, reduces person-to-person variability, and minimizes operational delays, holds, or product loss. A CPV program with both Stage 3a and Stage 3b would need different approaches for each stage because the data set available during Stage 3a is less compared to Stage 3b. When limited data is available, a science- and statistics-driven deep dive into the available data is warranted to understand what actions can be taken until additional data are generated.

    

    

        

### Tutorial Commentary

        

            

#### Core Concepts: Signal Classification

            

**Assignable Cause Variation (可歸因變異):** 變異源自可辨識的特定原因，例如某批原料品質異常、設備校正偏差、新人員操作。這類變異可以追溯根因並加以消除。

            

**Common Cause Variation (共同原因變異):** 製程固有的隨機波動，在統計管制範圍內屬正常現象。例如環境溫溼度的自然波動、不同批次原料間的微小差異。

            

**Special-Cause Variation (特殊原因變異):** 超出正常統計範圍的非隨機變異，通常指向系統性問題。需要立即調查並可能需要修改控制策略。

        

        

            

#### Decision Tree Logic

            

決策樹的核心邏輯包含三條路徑：

            

                
- **Path 1 (繼續監控):** 信號來自可歸因的外部孤立事件（如一次性設備異常），不需要變更控制策略，繼續正常 CPV 監控即可

                
- **Path 2 (評估控制策略):** 信號顯示統計顯著性，需要深入分析控制策略是否仍然適當

                
- **Path 3 (要求變更):** 信號強烈且持續，表明現有控制策略已不足，必須執行變更

            

            

關鍵步驟：CPV 信號 → 排除 OOS/OOT → 統計顯著性評估 → Change Review（變更審查）→ 判定變異類型 → 選擇路徑

        

        

            

#### Analogy

            

CPV 決策樹就像醫院的**分級檢傷制度 (triage system)**。急診室不會對所有病人採取相同的處理方式：

            

                
- **綠色（輕微）:** 小感冒 = Path 1，觀察追蹤即可

                
- **黃色（需注意）:** 持續發燒 = Path 2，需要進一步檢查診斷

                
- **紅色（緊急）:** 心臟驟停 = Path 3，立即介入治療

            

            

同樣地，並非所有 CPV 信號都同等重要——CQA 相關信號的風險等級通常高於 KPI 相關信號。

        

        

            

#### Stage 3a vs. Stage 3b Difference

            

本文特別指出 Stage 3a 和 3b 需要不同的 CPV 方法：

            

                
- **Stage 3a:** 數據量有限（剛上市的前幾批），統計信心不足，需要更保守謹慎的科學分析

                
- **Stage 3b:** 數據量充足，可以建立穩健的統計基線與管制圖，適用完整的決策樹流程

            

            

這就像天氣預報：只有3天的數據做預測（Stage 3a）與用30年歷史數據建模（Stage 3b），所需的方法論完全不同。

        

        

            

#### Practice Questions

            

                
1. 你的 CPV 管制圖顯示某 CQA 連續 7 個批次呈上升趨勢但仍在規格內。這屬於哪種變異？應選擇 Decision Tree 的哪條路徑？

                
2. 為什麼 FDA 強調要防止「對個別事件過度反應」？在實務中，過度反應可能造成什麼後果？

                
3. Stage 3a 數據有限時，你會如何調整 CPV 信號的回應策略？

            

        

    

## 5.4 Applying Continued Process Verification for Lifecycle Change Management

    

        

### Original Text

        

Applying CPV to lifecycle change management refers to the integration of CPV principles and practices to monitor and ensure consistent product quality and process stability throughout the entire lifecycle of a product, especially during and after any changes in the process or product.

        

In regulated industries like pharmaceuticals, medical devices, or manufacturing, lifecycle changes—such as adjustments in raw materials, equipment upgrades, process optimization, or even regulatory changes—are inevitable. Applying CPV in these contexts helps ensure that these changes do not negatively impact the product's quality, safety, or compliance with regulatory requirements.

    

    

        

### Tutorial Commentary

        

            

#### Core Concept

            

**Lifecycle Change Management (生命週期變更管理):** 在產品的整個商業化生命週期中，原料、設備、製程、法規等各方面的變更是不可避免的。CPV 的角色是確保這些變更不會對產品品質、安全性或法規合規性產生負面影響。

            

CPV 不是一個靜態的「確認完畢就結束」的活動，而是一個動態的、持續性的監控框架，與企業的變更控制系統 (Change Control System) 緊密整合。

        

        

            

#### Analogy

            

將 CPV 比作汽車的**行車電腦 (ECU) 監控系統**。當你更換了新品牌的輪胎（原料變更）、升級了引擎零件（設備升級）、或調整了駕駛模式（製程優化），行車電腦會持續監測各項性能指標（油耗、排放、引擎溫度），確保這些變更不會影響整車的安全與性能。CPV 就是製藥業的「行車電腦」。

        

    

## 5.4.1 Quality Systems and Continued Process Verification

    

        

### Original Text

        

The best tools for continued confirmation and refinement of process control are the quality system elements that provide feedback and objective measures of process control. The tools are based on product and process understanding and are enabled by procedures that monitor, measure, analyze, and control the process performance. Communication of CPV signals to the manufacturing, quality, and regulatory stakeholders (for improvement and/or compliance reasons) is an iterative and essential part of the lifecycle.

        

Feedback mechanisms, where required, can vary between immediate (intra-batch or real-time), after each batch, after a series of batches, or after a defined period. Figure 5.4.1-1 depicts integration of sources of data and information for the purpose of process control to enable real-time continuous improvement decision-making.

        

            *Figure 5.4.1-1 Integration of Data Sources for Improved Process Controls*
        

    

    

        

### Tutorial Commentary

        

            

#### Feedback Mechanisms Hierarchy

            

TR60 描述了四個層級的回饋機制，由即時到長期：

            

                
- **即時 / 批內回饋 (Intra-batch / Real-time):** 如 PAT（製程分析技術）即時監控，在製造過程中即可調整參數

                
- **批次後回饋 (After each batch):** 每批完成後檢視 CPV 數據，判斷是否需要在下一批調整

                
- **系列批次後回饋 (After a series of batches):** 累積數批數據進行趨勢分析，偵測中期漂移

                
- **定期回饋 (After a defined period):** 如年度回顧 (APQR)，進行全面性製程健康評估

            

        

        

            

#### Key Stakeholder Communication

            

CPV 信號的溝通對象包括三大部門：

            

                
- **製造部門 (Manufacturing):** 負責執行實際的製程調整

                
- **品質部門 (Quality):** 評估信號對產品品質的影響，決定是否需要偏差調查

                
- **法規部門 (Regulatory):** 評估變更是否涉及 Established Conditions，是否需要向法規機構申報

            

            

三個部門的協作是一個**迭代過程 (iterative process)**——不是一次性通知就結束。

        

        

            

#### Practical Application: CDMO Scenario

            

作為 CDMO，你同時為多個客戶生產不同產品。某條產線的 CPV 監控發現充填體積的標準差在過去 20 批中逐漸增加。你的回饋策略應該是：

            

                
- **即時：**通知製造團隊加強該產線的設備檢查

                
- **批次後：**每批後比對充填泵的校正數據

                
- **系列批次後：**進行設備磨損分析，評估是否需要預防性維護排程

                
- **定期：**在下次 APQR 中納入此趨勢分析結果

            

        

    

## 5.4.2 Regulatory Commitments and Established Conditions

    

        

### Original Text

        

Although the common technical document (CTD) format has been defined for regulatory submissions, harmonized approaches to defining what changes would require a submission have yet to be determined. Established conditions (ECs) are legally binding information (or approved matters) considered necessary to assure product quality. They are contained in a regulatory submission, proposed by the applicant, and approved by the regulatory authority. Any change to ECs necessitates a submission to the regulatory authority that is consistent with regional regulations or guidances or has been agreed upon during the review and approval of the marketing application.

        

ICH Q12 provides a framework to facilitate the management of post-approval CMC changes more predictably and efficiently across the product lifecycle. It allows regulators to better understand the firm's PQS for the management of post-approval CMC changes. Incremental changes over time should also be considered, and the need for any additional actions (e.g., enhanced sampling) should be assessed.

        

The lack of harmonized requirements for lifecycle management is a disincentive for manufacturers to make improvements to increase process robustness. One post-approval change can take three to five years to implement across all regions, resulting in additional costs and potential supply disruption due to the need for multiple inventories since opportunities for "operational flexibility" offered by the science- and risk-based approaches in ICH guidelines Q8–Q11 have not been fully realized.

        

Additional information and approaches to manage process changes can be found in PDA Technical Report No. 91: Post Approval Change Management and Implementation for Biologics and Pharmaceutical Drug Products — A User's Guide.

    

    

        

### Tutorial Commentary

        

            

#### Core Concepts

            

**Established Conditions (ECs, 已建立條件):** 指法規核准文件中具有法律約束力的資訊，被視為確保產品品質所必要的條件。任何對 ECs 的變更都必須向法規機構提交申請。ECs 概念是 ICH Q12 的核心，目的在於明確界定哪些資訊具有法規約束力。

            

**ICH Q12:** 全名為「Technical and Regulatory Considerations for Pharmaceutical Product Lifecycle Management」，提供上市後 CMC 變更管理的框架，使變更流程更可預測、更有效率。

        

        

            

#### Regulatory Pain Point

            

TR60 直接點出一個產業痛點：**一項上市後變更可能需要 3-5 年才能在全球各地區實施。**這是因為：

            

                
- 各國法規對變更分類和申報要求不一致

                
- 需要同時維持多個版本的庫存（變更前後的產品）

                
- ICH Q8-Q11 提供的「操作彈性」(operational flexibility) 尚未被充分利用

            

            

這個問題對 CDMO 尤其嚴重，因為客戶的產品可能在數十個國家上市，每個國家都有不同的法規時程。

        

        

            

#### Analogy

            

Established Conditions 就像**房屋所有權狀 (property deed)** 上的資訊。如果你要改變房屋的結構（如拆除承重牆），必須向建管單位申請許可。但如果只是重新粉刷牆壁或更換家具，通常不需要申報。ICH Q12 的目的就是幫助產業和法規機構明確劃分哪些變更是「拆承重牆」（需要申報），哪些是「換家具」（不需要申報）。

        

        

            

#### Practice Questions

            

                
1. 為什麼「缺乏統一的生命週期管理要求」會成為製造商改善製程穩健性的阻礙？

                
2. 假設你的 CDMO 客戶想要將某一關鍵製程參數的操作範圍擴大 10%。請說明這是否可能涉及 Established Conditions 的變更，以及你會建議什麼樣的 CPV 策略來支持此變更。

                
3. ICH Q12 如何幫助解決上市後變更需要 3-5 年實施的問題？

            

        

    

## 5.5 Continued Process Verification Data Review and Reporting

    

        

### Original Text

        

Stage 3a is a product-specific, protocol-driven initial assessment following a new product launch that uses data from all stages of the PV lifecycle for statistical evaluation to gain deeper product understanding and is pivotal in understanding product variability. The Stage 3a protocol may be initiated upon completion of Stage 2b. The number of batches required for Stage 3a should be statistically significant to provide sufficient data, understand variation in the process, and establish limits for Stage 3b. To achieve this goal, the sampling and testing requirements may be maintained at the same level of Stage 2b, as applicable.

    

    

        

### Tutorial Commentary

        

            

#### Stage 3a Overview

            

**Stage 3a（初始持續製程確認）**是新產品上市後的第一階段強化監控。其核心特徵：

            

                
- **依循協議 (Protocol-driven):** 有明確的取樣計畫、統計分析方法和完成標準

                
- **強化取樣：** 取樣和測試要求可能維持在 Stage 2b（PPQ）的水準

                
- **目的：** 建立 Stage 3b 常規監控的統計基線和管制限

                
- **啟動時機：** Stage 2b（PPQ）完成後即可開始

            

            

Stage 3a 的批次數量必須具有統計意義，足以理解製程變異並建立 Stage 3b 的管制限。

        

        

            

#### Analogy

            

Stage 3a 就像新員工的**試用期 (probation period)**。在試用期間，主管會更密切地觀察新員工的表現（強化取樣），設定明確的評估標準（protocol），並在試用期結束時決定是否轉正以及未來的績效考核方式（Stage 3b 計畫）。試用期不是要找碴，而是要深入了解這位員工的能力和潛在風險。

        

    

## 5.5.1 Stage 3a Reporting

    

        

### Original Text

        

Stage 3a is designed to allow close monitoring of process parameters and quality attributes while detecting the undesirable process variabilities and providing an opportunity to enhance the product control strategy. Additional sampling and testing are typically conducted at Stage 3a. Confirming the Stage 3b monitoring plan is part of Stage 3a. Evaluation of data from Stage 3a and Stage 3b is a valuable resource for product development and risk mitigation of similar products and processes. The assessment demonstrates an organization's compliance in establishing an enhanced product control strategy and quality.

        

Stage 3a allows for an improved understanding of the sources of analytical and process variability which is important for acquiring further knowledge of the newly qualified commercial manufacturing process and suggesting continuous improvement or enhancement of the initial control strategy changes at the earliest opportunity.

        

The Stage 3a report may systematically summarize:

        

            
- Statistical assessment to determine the impact of material attributes

            
- Statistical assessment to determine the impact of process parameters

            
- Statistical assessment of quality attributes

            
- Multivariate correlation analysis

            
- Impact of changes, if any

            
- Product stability data analysis

            
- Inter-batch and intra-batch variability

            
- Estimating inherent process and method variability

            
- Process capability and robustness indices

            
- Verification of Stage 1 (QbD) design space with newly gathered data*

            
- Review of OOS, deviations, complaints, and field alerts; where applicable, data collated for APQR should be utilized

            
- Enhance control strategy recommendations and conclusions

            
- Ongoing CPV (Stage 3b) monitoring criteria and justification

        

        

**Note: The preliminary process capability assessment needs to be interpreted with caution considering the low number of batches.*

        

A product-specific quality dashboard may be a component of a Stage 3a assessment for determining product robustness, similar to any dashboards being used in Stage 2b. The dashboard can address the elements in FDA's Quality Metrics Reporting Program, where the Agency suggests optional metrics as evidence of manufacturing robustness and a commitment to quality. Data reported may suggest the manufacturing site and processes are of low risk. Each processing stage can be evaluated against a predetermined process capability target to provide an overall product performance synopsis.

        

The Stage 3a assessment is a resource for product development and risk mitigation activities. A trained statistician should be responsible for the selection of the statistical tools employed in this assessment. The process and product understanding gained can be applied to new, similar process or product development.

    

    

        

### Tutorial Commentary

        

            

#### Stage 3a Report Elements

            

Stage 3a 報告是一份全面性的統計評估文件，涵蓋 13 個核心要素。以下將其歸納為四大類別：

            

**1. 變異性分析：**

            

                
- 物料屬性影響評估

                
- 製程參數影響評估

                
- 品質屬性統計評估

                
- 批間 (inter-batch) 與批內 (intra-batch) 變異性

                
- 固有製程與方法變異性估計

            

            

**2. 相關性與能力分析：**

            

                
- 多變量相關性分析 (Multivariate correlation)

                
- 製程能力與穩健性指數

                
- QbD 設計空間驗證

            

            

**3. 歷史數據回顧：**

            

                
- 變更影響評估

                
- 穩定性數據分析

                
- OOS、偏差、客訴、field alert 回顧

            

            

**4. 前瞻性建議：**

            

                
- 控制策略強化建議

                
- Stage 3b 監控標準與理由

            

        

        

            

#### Quality Dashboard and FDA Quality Metrics

            

TR60 建議使用**產品品質儀表板 (Quality Dashboard)**作為 Stage 3a 評估的一部分。此儀表板可以整合 FDA 品質指標報告計畫 (Quality Metrics Reporting Program) 的要素，包括：

            

                
- 批次合格率 (Lot Acceptance Rate)

                
- 客訴率 (Complaint Rate)

                
- 產品品質偏差率 (Product Quality Deviation Rate)

            

            

透過儀表板呈現的數據，可以向 FDA 證明製造場址和製程屬於**低風險 (low risk)**等級。

        

        

            

#### Important Caveat

            

TR60 特別提醒：由於 Stage 3a 的批次數量較少，初步的**製程能力評估 (process capability assessment)** 需要謹慎解讀。統計指標如 Ppk 在小樣本下的信賴區間會很寬，不宜過度依賴單一數值。

            

此外，TR60 強調 Stage 3a 的統計工具選擇應由**受過訓練的統計學家 (trained statistician)** 負責——這不是一般品質人員可以自行決定的事項。

        

        

            

#### Practical Application: Knowledge Transfer

            

TR60 指出 Stage 3a 評估的知識可以應用於新的、類似的製程或產品開發。對 CDMO 而言，這是一個重要的**知識資產 (knowledge asset)**：

            

                
- 客戶 A 的單株抗體產品 Stage 3a 數據可以作為客戶 B 類似產品開發的參考

                
- 某平台製程的 Stage 3a 報告可以加速新產品的 Stage 1 風險評估

                
- 跨產品的趨勢比較可以識別場址層級的系統性問題

            

        

        

            

#### Practice Questions

            

                
1. 為什麼 Stage 3a 報告需要包含「QbD 設計空間驗證」？這與 Stage 1 的設計空間有什麼關係？

                
2. 如果你的 Stage 3a 評估發現某個 CPP 的實際操作範圍比 Stage 1 設計空間窄很多，這代表什麼？你會採取什麼行動？

                
3. Quality Dashboard 如何幫助 CDMO 在 FDA 檢查時展示製程的穩健性？

            

        

    

## 5.5.2 Stage 3b Reporting

    

        

### Original Text

        

SPC tools and predefined rules are primarily used in CPV to alert to potential drifts. Triggering a signal indicates with reasonable statistical confidence that something may have changed within the process that may have an impact on the product's quality, safety, process robustness, and control. While these signals should trigger a response reaction, the reaction strategy should depend on the risk level.

        

The continual Stage 3b sampling and testing requirements may be included in the master batch record and monitored batch-to-batch electronically through other controls. Systems should be in place to ensure that Stage 3b signals, if any, are addressed prior to the start of processing the next batch of the product or similar products.

        

Qualified monitoring systems with real- or near-real-time data trending integrate product information, parameters, and quality attributes, thus allowing for swift decision making on an observed signal. Section 5.3.1 discusses a decision-making process that can be followed. The assessment outcome is documented electronically or according to standard operating procedure (SOP) requirements.

    

    

        

### Tutorial Commentary

        

            

#### Stage 3b Reporting Framework

            

Stage 3b 報告與 Stage 3a 有根本性的不同：

            

                
- **Stage 3a:** 一次性的總結報告，在完成強化取樣後撰寫

                
- **Stage 3b:** 持續性的監控報告，融入日常批次生產作業中

            

            

Stage 3b 的取樣和測試要求可以直接納入**主批次紀錄 (Master Batch Record)**，這意味著 CPV 監控不是一個獨立的額外活動，而是日常生產流程的一部分。

        

        

            

#### Critical Timing Requirement

            

TR60 提出一個重要的時效性要求：**Stage 3b 信號必須在開始處理下一批產品之前得到處理。**這意味著：

            

                
- CPV 數據回顧不能等到月底或季度才進行

                
- 需要即時或近即時的數據趨勢系統

                
- 決策流程必須足夠簡潔，不會造成生產延誤

            

            

對於高頻率生產的產品（如每天多批），這對數據系統和人員效率都是很大的挑戰。

        

        

            

#### Analogy

            

Stage 3b 監控就像航空公司的**飛航安全檢查制度**。每次飛行後，機組人員都會回報任何異常（批次後數據回顧）。如果發現任何信號（如引擎振動異常），必須在下一次起飛前解決——你不能讓有潛在問題的飛機繼續載客。同樣地，CPV 信號必須在下一批產品開始之前被處理。

        

        

            

#### Practice Questions

            

                
1. 為什麼 TR60 建議將 Stage 3b 取樣要求納入主批次紀錄，而非獨立的 CPV 協議？

                
2. 在一個每天生產 3 批的高速產線上，如何確保 CPV 信號在下一批開始前被處理？需要什麼樣的系統支援？

            

        

    

## 5.5.3 Utilizing Continued Process Verification for Annual Product Review / Yearly Biologic Product Report

    

        

### Original Text

        

Ongoing monitoring allows for early detection of potential process drift. Where the corrective actions are required, they could be implemented before reaching the failure point. On-going monitoring and corrective and preventative action (CAPA) implementation should not be postponed until the next APQR season but executed for each batch manufacturing.

        

            "However, the CPV data summary should be used or referenced for completing the applicable sections of an APQR report."
        

        

Stage 3b covers many APQR components, a few of which are identified in Table 5.5.3-1. The opportunity to continually analyze process data more often than in the traditional APQR makes the CPV program critical in detecting drifts and proactively taking action (if required) on those signals to avoid potential process failures.

        

### Table 5.5.3-1: Annual Product Review or Yearly Biologic Product Report Elements Supported by CPV

        

            
                
                    
                        
                        
                    
| Report Elements / Sections | Supported by CPV Data |
| --- | --- |
                
                
                    
| Manufactured Batches Review | Yes |
                    
| Raw Material Attribute Review | Yes |
                    
| Environmental Monitoring Review | Yes |
                    
| Media Fill Review | Yes |
                    
| PM / Cal Review | No |
                    
| Yield Trend Review | Yes |
                    
| Training Review | No |
                    
| Change Trend Review (Continuous Improvement included) | Yes |
                    
| CPP Trend Review | Yes |
                    
| CQA Trend Review | Yes |
                    
| Re-Qualification / Validation Results Review | Yes |
                    
| Non-Conformance / Investigation Review | No |
                    
| Rejected Batch Review | No |
                    
| Complaint Trend Review | No |
                    
| Field Alert / Recall Review | No |
                    
| Retain Sample Review | No |
                    
| Quality Agreement Review | No |
                    
| Review of Previous APR | No |
                
            

        

    

    

        

### Tutorial Commentary

        

            

#### CPV vs. APQR: Complementary but Not Interchangeable

            

**APQR (Annual Product Quality Review, 年度產品品質回顧):** 又稱 APR，是法規要求的年度性綜合品質評估，涵蓋製造、品質、合規等多面向。

            

**YBPR (Yearly Biologic Product Report, 年度生物製品報告):** 生物製品特有的年度報告要求。

            

TR60 明確指出兩個關鍵原則：

            

                
- **CPV 不能取代 APQR**（在 Section 5.1.3 中已提及）

                
- **CAPA 不應等到 APQR 季節才執行**——應該在每批生產時就處理

            

            

CPV 提供的是持續性、即時性的數據分析，而 APQR 是一個定期的全面性回顧。兩者互補但不可互相替代。

        

        

            

#### Table Analysis: What CPV Covers

            

從表 5.5.3-1 可以觀察到一個清晰的模式：

            

**CPV 支持的要素（10 項）：**主要是與製程數據、趨勢分析直接相關的項目——批次回顧、原料屬性、環境監控、收率趨勢、CPP/CQA 趨勢等。

            

**CPV 不支持的要素（8 項）：**主要是品質管理系統層面的項目——訓練、客訴、召回、品質協議等。這些需要 QMS 其他模組的數據支持。

            

這說明 CPV 是 APQR 的**重要數據來源**，但 APQR 的範圍比 CPV 更廣，需要整合多個品質系統的資訊。

        

        

            

#### Analogy

            

CPV 與 APQR 的關係就像**月報與年報**的關係。公司的財務月報（CPV）提供即時的營運數據，讓管理層能及時發現問題並採取行動。年度財報（APQR）則是更全面的檢視，包含策略評估、公司治理、社會責任等月報不會涵蓋的內容。你不會等到年底才處理現金流問題（不應等到 APQR 才執行 CAPA），但年報仍然需要整合所有月報的數據。

        

        

            

#### Practical Application: Streamlining APQR

            

一個成熟的 CPV 計畫可以大幅提升 APQR 的效率：

            

                
- **數據就緒：**表中 10 個「Yes」的要素，CPV 系統已經持續收集和分析數據，APQR 時只需彙整引用

                
- **減少重工：**無需在 APQR 季節重新趨勢分析已經在 CPV 中完成的數據

                
- **前瞻性管理：**CPV 信號已在日常中處理，APQR 只需確認所有信號都已被適當回應

            

            

對 CDMO 而言，管理數十個產品的 APQR 是巨大的工作量。良好的 CPV 計畫可以從根本上降低 APQR 的執行負擔。

        

        

            

#### Practice Questions

            

                
1. 為什麼「PM/Cal Review」和「Training Review」不被視為 CPV 支持的 APQR 要素？這些項目的數據來源是什麼？

                
2. 如果你的 CPV 系統在第 6 個月偵測到某 CQA 的顯著漂移並已完成 CAPA，在年度 APQR 中你應該如何呈現這個事件？

                
3. 請解釋為什麼「CAPA 不應等到 APQR 季節才執行」對患者安全至關重要。

            

        

    

    

### Section Summary

    

        
- **CPV 信號是「黃旗」而非「紅旗」：**CPV 數據信號代表製程變異和漂移，需要系統性評估其嚴重程度，而非立即觸發糾正行動。FDA 明確要求防止對個別事件過度反應。

        
- **Decision Tree 三路徑模型：**CPV 信號經過 OOS/OOT 排除、統計顯著性評估和變更審查後，根據變異類型（可歸因/共同原因/特殊原因）分別導向繼續監控、評估控制策略或要求變更三條路徑。Stage 3a 和 Stage 3b 因數據量不同需要不同的決策方法。

        
- **CPV 是生命週期變更管理的核心工具：**透過品質系統的整合，CPV 提供即時到長期的多層級回饋機制（批內即時、批次後、系列批次後、定期），確保變更不會負面影響產品品質。

        
- **Established Conditions (ECs) 與 ICH Q12：**法規核准文件中具有約束力的資訊變更需要申報。目前各國法規不一致導致一項變更可能需要 3-5 年才能全球實施，ICH Q12 旨在解決此問題。

        
- **Stage 3a 報告是全面性統計評估：**涵蓋 13 個核心要素，包括變異性分析、相關性分析、歷史數據回顧和前瞻性建議。注意初步製程能力評估在小樣本下需謹慎解讀。

        
- **Stage 3b 融入日常生產：**取樣要求可納入主批次紀錄，信號必須在下一批開始前處理，需要即時或近即時的數據系統支援。

        
- **CPV 支持但不取代 APQR：**CPV 可支持 APQR 中 10 個核心要素的數據需求，但 APQR 仍需整合 QMS 其他模組的資訊。CAPA 不應延遲至 APQR 季節才執行。

    

    

PDA Technical Report No. 60 (Revised 2026): Process Validation — A Lifecycle Approach

    

Section 3b: Continued Process Verification Part 2 (5.3-5.5) | Pages 77-83

    

Educational Material for CDMO Professionals

## Section 4: Enabling Systems & Technology 賦能系統與技術 (p84-p110)

# Section 6.0-6.2: Process Validation Enabling Systems & Technology (Part 1)

    

製程確效賦能系統與技術（第一部分）：風險管理與統計分析工具

    

PDA Technical Report No. 60 (Revised 2026) | p84 - p98

    

### 本章學習目標

    

        
- 瞭解 Quality Risk Management (QRM) 如何在製程確效三階段中作為「賦能流程」發揮作用

        
- 掌握 Stage 1 關鍵性分析（Criticality Analysis）中 Severity 與 Likelihood 的評估邏輯

        
- 理解 Stage 2 風險評估如何驅動取樣策略、設備驗證優先級與統計信心水準的決定

        
- 認識 Stage 3 CPV 中製程能力與增強取樣的關聯性

        
- 掌握 Design of Experiments (DoE) 的基本步驟、篩選設計與反應曲面方法

        
- 瞭解各種統計工具在確效生命週期中的典型應用階段

    

    

### 本節目錄 Section Contents

    

        6.0 PV Enabling Systems Overview
        6.1 Application of Risk Management
        6.1.1 Risk Mgmt in Stage 1
        6.1.2 Risk Mgmt in Stage 2
        6.1.3 Risk Mgmt in Stage 3
        6.1.4 Material Risk Mgmt
        6.2 Statistical Analysis Tools
        6.2.1 Design of Experiments
    

## 6.0 Process Validation Enabling Systems and Technology

    

        

### Original Text

        

Section 6.0 presents tools and methods to assist in the planning and performance of the PV program. It includes sections on risk and KM, statistical methodology, PAT, and TT. These tools can be used to identify, capture, and communicate information needed for the design and assurance of process control. They facilitate informed decision-making, prioritization of activities, and interpretation of results related to the PV effort.

    

    

        

### 導師解析 Tutorial Commentary

        

            

#### 核心概念解析 Key Concepts

            

**Enabling Systems（賦能系統）：**TR60 將風險管理、知識管理（Knowledge Management, KM）、統計方法、製程分析技術（Process Analytical Technology, PAT）以及技術移轉（Technology Transfer, TT）定位為「賦能系統」——它們本身不是確效的步驟，而是讓確效能做得更好的工具與方法論。

            

這四大支柱貫穿 Stage 1-3 的整個生命週期，幫助團隊做出有科學基礎的決策。

        

        

            

#### 比喻說明 Analogy

            

如果確效生命週期是一場登山之旅，那麼賦能系統就像你的裝備：地圖（風險管理）、指南針（統計方法）、通訊設備（知識管理）、高度計（PAT）。沒有這些裝備你也許能走完，但行程會更危險、更沒有效率。

        

        

            

#### 重點提示 Key Notes

            

注意原文強調這些工具服務的三個功能：**識別（identify）**、**擷取（capture）**和**溝通（communicate）**資訊。這反映了 ICH Q10 品質體系對知識流動的重視——資訊不僅要產出，還要能被組織有效使用。

        

        

            

#### 練習思考 Practice Questions

            

                
1. 在你的組織中，風險管理、統計分析、PAT 和技術移轉這四項賦能工具的成熟度如何？哪一項最弱？

                
2. 為什麼 TR60 將這些工具稱為「enabling」而不是「mandatory」？這對實務應用有何啟示？

            

        

    

## 6.1 Application of Risk Management

    

        

### Original Text

        

A detailed explanation of a QRM program used to support the PV effort can be found in TR 54 in the "How to Use Quality Risk Management as an Enabler" section. Comprehensive lists of risk management tools can also be found in TR 54, including a comparison of their respective benefits, as well as in ICH Q9(R1) (37, 78).

        

QRM is an enabler or an enabling process. When correctly applied, it adds supportive elements to the product lifecycle and other systems (e.g., the PQS). The application of risk management principles and approaches is instrumental in effective decision-making in the PV lifecycle.

        

Management of variability is one example of applying risk management in the validation lifecycle. The level of control required to manage variability is directly related to the level of risk that variability imparts to the process and product. The use of risk management to address variability requires an understanding of the origin of the variability, the potential range of the variability, and the impact of the variability on the process, product and, ultimately, the patient.

        

Risk assessments should occur early in the lifecycle. Risks should be controlled appropriately to an acceptable level and effectively communicated. Risk management increases product and process knowledge, which translates into greater control of product and process variability and a lower residual risk to patients.

        

The PV lifecycle provides continued assurance that processes will manufacture product in a predictable and consistent manner. Where decisions related to product quality or process performance are made, risk should be assessed at several points throughout the PV lifecycle.

        

QRM should be applied throughout the PV lifecycle including in the following areas:

        

**Stage 1 – Process Design**

        

            
- Identification of product attributes that may affect quality and patient safety.

            
- Criticality analysis of product CQAs.

            
- Cause-and-Effect Analysis or Risk-Ranking and Filtering, which link the process steps and parameters to product quality attributes and process performance for the categorization of process parameters (e.g., CPP identification). These can be used to screen potential variables for future process characterization (e.g., DoE) and testing.

            
- Preliminary Hazards Analysis or early Failure Mode and Effects Analysis (FMEA).

        

        

**Stages 1-2 – Transition from Process Design to Process Qualification**

        

            
- Determining process control strategies that address the risk of failure for each process step.

            
- Evaluation of residual risk remaining or created as a result of risk mitigation, process improvement, and process knowledge.

            
- Risk-based gap assessments and risk assessments for TT.

        

        

**Stage 2 – Process Qualification**

        

            
- Determination of process steps and parameters to test in PPQ, including sampling plans and the confidence and coverage they provide.

            
- Facility and equipment/system impact assessments to prioritize qualification efforts.

            
- Determination of effective acceptance criteria for each test function.

            
- Analytical test results and deviations.

        

        

**Stage 3 – Continued Process Verification (CPV)**

        

            
- Determination of parameters that should be monitored as well as how they should be sampled and analyzed (e.g., sampling plans, confidence required, and length of enhanced sampling).

            
- Evaluation of commercial manufacturing data to determine the best course for process improvement.

        

        

Figure 6.1-1 depicts a QRM lifecycle approach for process development and validation (79).

    

    

        

### 導師解析 Tutorial Commentary

        

            

#### 核心概念解析 Key Concepts

            

**Quality Risk Management, QRM（品質風險管理）：**這不僅是一個工具，而是一個「賦能流程」。TR60 明確引用 ICH Q9(R1) 和 PDA TR 54 作為 QRM 的詳細參考資源。

            

**變異性管理（Variability Management）：**風險管理最核心的應用就是管理變異性。原文清楚指出三個必須理解的面向：

            

                
- **來源（Origin）**——變異從哪裡來？

                
- **範圍（Range）**——變異可能多大？

                
- **影響（Impact）**——對製程、產品、病患的影響為何？

            

        

        

            

#### 比喻說明 Analogy

            

品質風險管理就像醫院的感染管控計畫（Contamination Control Strategy）：你不可能消除所有感染風險，但你必須知道風險在哪裡（識別）、用什麼措施控制（緩解）、以及何時需要升級處理（監控）。變異管理也是同樣邏輯——不是追求零變異，而是將變異控制在不影響病患安全的水準。

        

        

            

#### 重點提示 Key Notes

            

注意 QRM 在三階段中的角色漸變：

            

                
- **Stage 1**：策略性——識別「什麼是重要的」（CQA、CPP 識別）

                
- **Stage 1-2 過渡**：控制策略定義——「怎麼控制」

                
- **Stage 2**：戰術性——「要測什麼、取多少樣」

                
- **Stage 3**：持續性——「要監控什麼、監控多久」

            

            

這體現了風險管理從「廣泛篩選」到「精確控制」再到「持續驗證」的演進。

        

        

            

#### 圖表解讀 Figure Analysis

            

**Figure 6.1-1** 描繪了 QRM 生命週期方法在製程開發與確效中的應用流程。此圖為概念性的風險管理流程圖，展示風險如何在整個產品生命週期中被反覆評估和更新。由於原文未提供圖片檔案，請參閱 TR60 原文第 86 頁。

        

        

            

#### 實務應用 Practical Application

            

**CDMO 實務場景：**當接受新客戶的技術移轉時，Stage 1-2 過渡期的 risk-based gap assessment 特別關鍵。CDMO 必須評估客戶提供的製程知識是否足以定義控制策略，缺失的知識代表殘餘風險（residual risk），可能需要額外的製程特性研究才能進入 PPQ。

        

        

            

#### 練習思考 Practice Questions

            

                
1. 原文說 QRM 是「enabler」而非「requirement」。如果沒有做風險評估就直接進行 PPQ，可能產生什麼問題？

                
2. 在 Stage 1-2 過渡期，殘餘風險（residual risk）如何影響 PPQ 方案設計？

                
3. 為什麼原文強調風險評估應該「early in the lifecycle」開始？延遲評估的代價是什麼？

            

        

    

## 6.1.1 Risk Management in Stage 1 – Process Design

    

        

### Original Text

        

Conducting risk assessments during Stage 1 lays the groundwork for variables to be controlled and monitored. It also determines the extent to which continued monitoring will ensure a state of control during routine manufacturing. This begins with a criticality analysis: An initial definition of product quality attributes and an assessment of their relative importance.

        

Inputs for the criticality analysis are:

        

            
- QTPP

            
- All relevant prior knowledge for the product being evaluated

        

        

Outputs from the criticality analysis are:

        

            
- Initial CQA list

            
- Initial relative severity listing of the CQAs

        

        

Criticality of product attributes is assessed on a quantitative scale (i.e., not only "yes" or "no"). This is accomplished by performing a risk assessment analysis that uses Severity and Likelihood, rather than the usual Severity and Occurrence. The process, which is iterative, is based on building product and process knowledge. The level of severity assigned is based on the potential patient impact, while likelihood is based on how much information (product knowledge and clinical experience) is available to determine the potential severity level for the specific attribute. Part of the output of this assessment will be further scientific studies to reduce the amount of uncertainty for higher-risk attributes (refer to Table 6.1.1-1) (79).

        

### Table 6.1.1-1 Product Attribute Criticality Risk Assessment Example

        

            
                
                    
                    
                
| Severity | Likelihood |
| --- | --- |
                
                      

                      

                      

                
| LowLarge amount of in-house knowledge, large body of knowledge in literature | MediumSome in-house knowledge and scientific literature | HighNo/little in-house knowledge, very limited information in scientific literature |
                
                    ****  

                    
                    
                    
                
| High(catastrophic patient impact) | Critical | Critical | Critical |
                
                    ****  

                    
                    
                    
                
| Medium(moderate patient impact) | Potential | Potential | Potential |
                
                    ****  

                    
                    
                    
                
| Low(marginal patient impact) | Non-Critical | Non-Critical | Potential |
            

        

    

    

        

### 導師解析 Tutorial Commentary

        

            

#### 核心概念解析 Key Concepts

            

**Criticality Analysis（關鍵性分析）：**這是 Stage 1 風險管理的核心工作。注意它使用的是 **Severity x Likelihood** 矩陣，而非傳統 FMEA 的 Severity x Occurrence x Detectability。

            

為什麼不同？因為在 Stage 1 階段，你還沒有製造數據來評估 Occurrence（發生頻率），也還沒建立檢測方法來評估 Detectability。你只有兩個維度可用：

            

                
- **Severity（嚴重度）**：基於病患影響——這不太可能改變

                
- **Likelihood（可能性）**：基於知識充足度——這可以透過研究降低

            

        

        

            

#### 比喻說明 Analogy

            

想像你是新手外科醫生正在規劃一台手術。Severity 就像「如果這一步出錯會怎樣」——切到動脈 vs 表皮傷口，嚴重度固定不變。Likelihood 則像「你對這一步了解多少」——做過 100 次 vs 只讀過教科書。當嚴重度高且經驗少時，你需要更多的準備和練習（科學研究），這就是表格中 High Severity + High Likelihood = Critical 的邏輯。

        

        

            

#### 重點提示 Key Notes

            

**量化評估而非二元判斷：**原文特別強調關鍵性必須在「quantitative scale」上評估，不能只用 yes/no。這意味著 CQA 不是「是或不是」的標籤，而是有相對嚴重度排序的連續光譜。

            

**QTPP 為起點：**關鍵性分析的輸入是 QTPP（Quality Target Product Profile）和先前知識。這再次確認 QbD 的核心邏輯——從目標產品需求出發，倒推所有設計決策。

        

        

            

#### 圖表解讀 Table Analysis

            

**Table 6.1.1-1 解讀關鍵：**

            

                
- **High Severity（全列為 Critical）：**無論知識多充足，對病患有災難性影響的屬性永遠是關鍵的。這體現了「病患安全優先」原則。

                
- **Low Severity + Low/Medium Likelihood = Non-Critical：**影響低且知識充足的屬性不需要密集管控。

                
- **Medium 行全為 Potential：**這個分類意味著需要更多數據才能最終判定——是可以透過進一步研究改變分類的「灰色地帶」。

                
- **迭代性：**隨著知識積累，Likelihood 會降低，Potential 可能被重新分類為 Non-Critical。

            

        

        

            

#### 練習思考 Practice Questions

            

                
1. 在表 6.1.1-1 中，為什麼 High Severity 不管 Likelihood 高低都是 Critical？這與 ICH Q9 的什麼原則一致？

                
2. 如果某屬性目前被歸類為 Potential，組織可以採取什麼行動來改變其分類？

                
3. QTPP 作為 Criticality Analysis 的輸入，如果 QTPP 定義不完整會如何影響後續整個確效計畫？

            

        

    

## 6.1.2 Risk Management in Stage 2 – Process Qualification

    

        

### Original Text

        

Risk management in Stage 2 is much more tactical. Assessments will assist in designing the sampling and testing strategy provided in the validation protocol (e.g., executed tests, sampling location and size). They are also used to fine-tune the control strategies drafted in the Process Design stage.

        

Risk management is also commonly applied during the facilities, utilities, and equipment qualification phase of Stage 2. Functional specifications are reviewed to help plan qualification activities. Higher-risk parameters require a higher level of performance control, while lower-risk items can be satisfied by the use of commissioning activities with appropriate risk reviews and control. Risk assessment output ratings can be applied to define a commensurate level of testing in the plan (refer to Table 6.1.2-1).

        

### Table 6.1.2-1 Risk-Based Qualification Planning

        
            
                
                
            
| Risk Assessment Output Ratings | Qualification Planning |
| --- | --- |
            
                
                
            
| High | Testing to satisfy validation requirements will occur during qualification. Documentation and sampling requirements are high. |
            
                
                
            
| Medium | A blend of Qualification and Commissioning activities can be used to satisfy validation requirements. Sampling requirements are moderate given appropriate controls and risk reviews. |
            
                
                
            
| Low | Testing to satisfy validation requirements can occur during commissioning phases. Appropriate controls and risk reviews should be in place. |
        

        

Risk assessments performed during Stage 2 not only help prioritize qualification activities but also aid in the ongoing collection of knowledge and the planning of statistical sampling. Generally, three factors—Severity, Occurrence, and Detectability (with controls in place)—are evaluated to determine the relative risk of specific failure modes. Each factor contributes to the validation plan in a different way.

        

            
- **Severity** – Determines the level of testing (or monitoring) required during Stage 2. The higher the severity rating for a particular attribute, the higher the statistical confidence required (Table 6.1.2-2).

            
- **Occurrence** – The occurrence rating is tied directly to variation (probability that an attribute/parameter goes outside acceptance criteria). Mitigation measures to reduce occurrence include further development to reduce variation (process improvements), enhanced control or maintenance of equipment, etc. Testing at this stage reduces additional and more costly testing during Stage 3. When the true occurrence rate is unknown, additional development or engineering studies may be required. When mitigation is complete, the occurrence ranking and overall risk rating for the failure mode can be updated with the new process knowledge.

            
- **Detectability** – Detectability is typically mitigated by increasing controls, testing or sampling. If the level of assessed controls is insufficient, the control strategy should be updated or new controls created. The HACCP system is an example of control, as are procedures and training. Controls are not always technology-based; increase of detectability may as well be driven by procedures and training. The HACCP is a useful QRM tool that can help in enhancing controls.

        

        

### Table 6.1.2-2 Severity Rating and Sampling Requirements Risk

        
            
                
                
                
            
| Severity Rating | Statistical and Sampling Requirements | Example Confidence Level Required |
| --- | --- | --- |
            
                
                
                
            
| High | +++ | 99% |
            
                
                
                
            
| Medium | ++ | 95% |
            
                
                
                
            
| Low | + | 90% |
        

    

    

        

### 導師解析 Tutorial Commentary

        

            

#### 核心概念解析 Key Concepts

            

**Stage 2 風險管理 = 戰術性（Tactical）：**Stage 1 的風險管理是策略性的（決定方向），Stage 2 的風險管理則是戰術性的（決定執行細節）。具體來說，Stage 2 的風險評估直接驅動：

            

                
- 確效方案中的測試項目

                
- 取樣位置與取樣數量

                
- 設備驗證的優先順序

                
- 接受標準的嚴格程度

            

            

**SOD 三因子模型：**此時已有足夠的數據使用完整的 FMEA 三因子評估——Severity（嚴重度）、Occurrence（發生率）、Detectability（可偵測性）。相較 Stage 1 的 Severity x Likelihood 二因子模型，這代表製程知識已大幅增加。

        

        

            

#### 比喻說明 Analogy

            

Stage 2 的風險管理就像機場安檢系統的設計。**Severity** 決定需要多嚴格的檢查（爆裂物 vs 一般違禁品），**Occurrence** 決定你期望多常遇到問題（高發路線 vs 低風險路線），**Detectability** 決定檢查設備的靈敏度和檢查員的訓練程度。三者共同決定了每個安檢口的資源配置。

        

        

            

#### 重點提示 Key Notes

            

**Commissioning vs Qualification 的風險分級：**Table 6.1.2-1 明確展示了一個重要的成本效益原則——不是所有設備功能都需要完整驗證（Qualification），低風險項目可以透過調試（Commissioning）活動加上適當的風險審查來滿足。這是 ASTM E2500 和 ISPE Baseline Guide 倡導的方法。

            

**信心水準與風險的關聯：**Table 6.1.2-2 直接將 Severity 對應到統計信心水準——99%、95%、90%。這為取樣計畫的設計提供了明確的量化依據，避免了「所有項目都用 95% 信心水準」的一刀切做法。

        

        

            

#### 公式與計算 Formula

            

**信心水準與取樣數量的關係：**

            

```

若使用屬性取樣（attribute sampling），
零不良品時達到特定信心水準所需最小取樣數：

n = ln(1 - C) / ln(1 - p)

其中：
C = 信心水準 (confidence level)
p = 可接受不良率

例如：
99% 信心、1% 不良率 → n = ln(0.01)/ln(0.99) ≈ 459
95% 信心、1% 不良率 → n = ln(0.05)/ln(0.99) ≈ 299
90% 信心、1% 不良率 → n = ln(0.10)/ln(0.99) ≈ 229

嚴重度越高，所需取樣數越多！
```

        

        

            

#### 實務應用 Practical Application

            

**CDMO 場景：**在設備驗證（Equipment Qualification）階段，使用 Table 6.1.2-1 的風險分級可以顯著節省驗證成本。例如，充填線的充填精度（High Risk）需要完整的 OQ/PQ 驗證，而輔助設備的壓力指示器（Low Risk）可以在調試階段完成功能確認加上適當的校正紀錄即可。這在多產品 CDMO 環境中效益特別顯著。

        

        

            

#### 練習思考 Practice Questions

            

                
1. 原文說 Stage 2 的風險管理是「tactical」，而 Stage 1 是「strategic」。請舉一個實例說明兩者在同一個製程參數上的差異。

                
2. HACCP 被提到是增加 Detectability 的工具之一。在製藥確效中，HACCP 可以在哪些環節發揮作用？

                
3. 如果某屬性的 Occurrence 未知，原文建議怎麼處理？這對確效時程有什麼影響？

            

        

    

## 6.1.3 Risk Management in Stage 3 – Continued Process Verification

    

        

### Original Text

        

The CPV stage is the longest segment of the PV lifecycle. It starts with an assessment of process capabilities and continues through a review of the output from process characterization, PPQ, and historical data. The level of enhanced sampling that may be implemented, as necessary, before commercial manufacturing starts, can be determined by a statistical review of the PPQ data. The capabilities of the processes help determine the level of enhanced sampling for an attribute and the length of time that sampling should continue at that level (refer to Section 6.2). The statistical capability of the process is usually related to the level of occurrence rating in the risk assessments (higher occurrence leading to lower capability). The more robust a process, the lower the occurrence rate for a potential failure and the lower the overall risk to the process. The level of risk can also determine the review period for certain product and process attributes (63).

    

    

        

### 導師解析 Tutorial Commentary

        

            

#### 核心概念解析 Key Concepts

            

**Enhanced Sampling（增強取樣）：**CPV 的起始階段通常會實施比例行監控更密集的取樣，這就是增強取樣。它的強度和持續時間取決於 PPQ 數據顯示的製程能力（Process Capability）。

            

**製程能力與風險的反比關係：**原文明確指出，製程能力高（即製程穩健）→ Occurrence 低 → 風險低 → 增強取樣期可以較短。反之，製程能力低則需要更長的增強取樣期來確認製程穩定性。

        

        

            

#### 比喻說明 Analogy

            

增強取樣就像新手駕駛的陪練期。剛拿到駕照（PPQ 通過）時，副駕座可能還需要教練（增強取樣）。如果你在路考中表現優異（Cpk 很高），陪練期可以較短；如果路考勉強通過（Cpk 剛好達標），陪練期就需要更長，直到你的駕駛穩定性得到充分驗證。

        

        

            

#### 重點提示 Key Notes

            

**CPV 是確效生命週期中最長的階段。**這經常被忽視——許多組織把精力集中在 PPQ 上，CPV 卻成了被動的例行公事。TR60 提醒我們，CPV 才是確保製程「持續」處於控制狀態的關鍵，且其取樣策略應由 PPQ 數據和風險評估共同驅動。

            

**Review Period（審查週期）**也受風險水準影響——高風險屬性可能需要月度審查，低風險屬性可能季度或年度審查即可。

        

        

            

#### 練習思考 Practice Questions

            

                
1. 如果 PPQ 數據顯示某參數的 Cpk = 2.5（非常好），增強取樣期的設計應與 Cpk = 1.1 的參數有何不同？

                
2. 原文提到「the level of risk can also determine the review period」。請設計一個簡單的風險等級 vs 審查頻率對照表。

            

        

    

## 6.1.4 Material Risk Management Considerations

    

        

### Original Text

        

Often subtle changes in raw materials can lead to significant and unforeseen variations in production. For example, a change in elution profile was due to lot-to-lot variation in particle size distribution in a chromatographic resin (78, 80, 81). Applications like NIR or even nuclear magnetic resonance can be used to ensure that raw materials meet their specifications and CMAs. An important risk-mitigation strategy is for drug manufacturers to work with their suppliers so that each understands the other's quality systems and demands.

    

    

        

### 導師解析 Tutorial Commentary

        

            

#### 核心概念解析 Key Concepts

            

**Critical Material Attributes, CMAs（關鍵物料屬性）：**不僅製程參數需要管控，原物料的品質屬性同樣是變異的重要來源。原文舉的例子非常經典——層析樹脂的粒徑分佈（particle size distribution）批次間差異導致沖提曲線（elution profile）改變。

            

**NIR（近紅外光譜）**和 **NMR（核磁共振）**是 PAT 工具的一部分，可以在原物料進料時快速檢測是否符合 CMA 規格。

        

        

            

#### 比喻說明 Analogy

            

原物料風險管理就像餐廳的食材供應鏈管理。即使你的廚師（製程）水準很高，如果食材（原物料）品質批次間波動很大——例如同一品種的番茄今天酸度高、明天酸度低——成品味道就無法穩定。解方是與供應商建立緊密合作，確保雙方都理解品質要求，就像高級餐廳會直接與農場合作一樣。

        

        

            

#### 重點提示 Key Notes

            

**供應商管理是風險緩解策略：**原文最後一句特別重要——風險緩解不僅是在自家工廠內部做的事，還包括與供應商的合作。這與 ICH Q10 品質體系中對供應鏈管理的要求一致，也是現代 GMP 法規（如 EU GMP Part II 和 FDA 21 CFR 211.84）的核心要求之一。

        

        

            

#### 練習思考 Practice Questions

            

                
1. 除了層析樹脂粒徑分佈外，你還能想到哪些原物料的微妙變化可能對製程產生重大影響？

                
2. CDMO 如何在技術移轉過程中管理原物料變異的風險？客戶指定供應商 vs 自主供應商各有什麼挑戰？

            

        

    

## 6.2 Statistical Analysis Tools

    

        

### Original Text

        

Successful PV depends on sound, scientific data and information. Table 6.2-1 illustrates where various statistical methods are most used in the validation lifecycle process. Three of the methods—DoE, Statistical Process Control, and Process Capability—are described in more detail in Sections 6.2.1–6.2.3, as well as in Section 9.0 (Appendix I). Additional information on statistical methods can be found in TR 59 (63).

        

### Table 6.2-1 Statistical Methods and the Typical Stages at Which They are Used

        

            
                
                    
                      

                      

                      

                
| Statistical Tool | Stage 1Process Design | Stage 2Performance Qualification (PQ) | Stage 3Continued Process Verification (CPV) |
| --- | --- | --- | --- |
                
                    
                    
                    
                    
                
| Descriptive Statistics (e.g., mean, standard deviation) | X | X | X |
                
                    
                    
                    
                    
                
| Statistical Process Control Charts | X | X | X |
                
                    
                    
                    
                    
                
| Statistical Power and Sample Size Determination | X | X | X |
                
                    
                    
                    
                    
                
| Process Capability Study and Capability Indices | X | X | X |
                
                    
                    
                    
                    
                
| Design of Experiments (DoE) | X |  |  |
                
                    
                    
                    
                    
                
| Measurement Systems Analysis (Gage R&R) | X |  |  |
                
                    
                    
                    
                    
                
| Robust Process Design / Tolerance Analysis / Taguchi Methods | X |  |  |
                
                    
                    
                    
                    
                
| Multi-Vari Chart | X |  |  |
                
                    
                    
                    
                    
                
| Regression and Correlation Analysis | X |  |  |
                
                    
                    
                    
                    
                
| Analysis of Variance (ANOVA) | X | X | X |
                
                    
                    
                    
                    
                
| Levene / Brown-Forsyth, Bartlett, Fmax tests for Variation | X | X | X |
                
                    
                    
                    
                    
                
| Hypothesis Tests / Confidence Intervals | X | X | X |
                
                    
                    
                    
                    
                
| Pareto Analysis* | X |  | X |
                
                    
                    
                    
                    
                
| Acceptance Sampling Plans |  | X | X |
                
                    
                    
                    
                    
                
| Normal and Nonparametric Tolerance Intervals |  | X | X |
            

        

        

*PPQ data is insufficient to perform a Pareto analysis in general (contrary to the large amount of development and CPV data). If Pareto analysis is attempted to be used during PPQ, it may be useful to include Stage 1 data for this kind of analysis.

    

    

        

### 導師解析 Tutorial Commentary

        

            

#### 核心概念解析 Key Concepts

            

Table 6.2-1 是整個統計方法論的「地圖」。它清楚展示了哪些統計工具用在哪個階段，有幾個關鍵觀察：

            

                
- **全階段通用工具（X-X-X）**：描述統計、SPC、檢定力與樣本數、製程能力、ANOVA、變異性檢定、假設檢定。這些是「基本功」。

                
- **Stage 1 專用工具**：DoE、Gage R&R、Taguchi、Multi-Vari、回歸分析。這些是「探索性」工具，用於理解製程。

                
- **Stage 2-3 專用工具**：驗收抽樣計畫、容許區間（Tolerance Intervals）。這些是「確認性」工具，用於證明製程能力。

            

            

TR 59 是 PDA 專門討論統計方法在製程確效中應用的技術報告，是本節的重要延伸閱讀。

        

        

            

#### 比喻說明 Analogy

            

統計工具就像醫生的診斷工具箱。Stage 1 用的是 CT、MRI（DoE、回歸分析——深度探索），Stage 2 用的是標準檢驗報告（驗收抽樣、容許區間——確認結論），Stage 3 用的是定期健檢（SPC、製程能力——持續監控）。不同階段的問題需要不同的「診斷精度」。

        

        

            

#### 重點提示 Key Notes

            

**Pareto Analysis 的特殊性：**注意腳註——Pareto 分析在 PPQ 階段通常不可行，因為 PPQ 批次數不足以進行有意義的排序分析。如果要在 PPQ 階段使用 Pareto，應納入 Stage 1 數據。這是一個常見的統計陷阱。

            

**DoE 僅在 Stage 1：**DoE 原則上在 Stage 1 進行，因為它涉及刻意改變製程參數的實驗——這在已經進入確效階段的商業製造環境中是不被允許的。

        

        

            

#### 練習思考 Practice Questions

            

                
1. 為什麼 DoE 不在 Stage 2 和 Stage 3 使用？如果在 CPV 期間發現需要重新做 DoE，這意味著什麼？

                
2. Gage R&R（量測系統分析）僅列在 Stage 1，但有人主張 Stage 2 也應該做。你怎麼看？

                
3. Table 6.2-1 中哪些工具是你的組織目前已經使用的？哪些尚未使用？缺失可能帶來什麼風險？

            

        

    

## 6.2.1 Design of Experiments (DoE)

    

        

### Original Text

        

The statistical DoE is a powerful tool often used during Stage 1 Process Design to:

        

            
- Determine which process input parameters have a significant effect on the output quality attributes

            
- Help determine the "design space" levels of the input parameters that will produce acceptable output quality attribute results

            
- Optimize the output of quality attributes, such as yield and acceptable levels of impurities

            
- Determine the levels of input parameters that will result in a robust process that reduces its sensitivity to parameter variability

        

        

DoE differs from the classical approach to experimentation, where only one parameter is varied while all others are held constant. That "one factor at a time" type of experimentation cannot determine process parameter interactions, where the effect of one parameter on a quality attribute differs depending on the level of the other parameters. The basic steps for the DoE approach are summarized below:

        

**1. Determine the input parameters and output quality attribute to study**

        

            
- This is best done as part of a team approach to identify potential CPPs and quality attribute; in many cases, the process may be well-understood and the parameters and attributes for experimentation readily determined.

            
- If there are many input parameters, an initial screening design, such as a fractional factorial or Plackett-Burman design, may be used (82). The purpose of a screening experiment is to identify the critical parameters that have the most important statistical effect on the quality attributes. Since screening designs do not always clearly identify interactions, the reduced number of parameters identified by the screening experiment will be included in further experiments.

            
- If the change is to an existing process, it is often valuable to construct a multi-variable chart or SPC chart from current process data (83). A multi-variable chart can be used to identify if the biggest sources of variation are within-batch variation, between-batch variation, or positional variation (e.g., between fill heads on a multi-head filler). Variance components can also be calculated from the data to determine the largest component of variance. Process parameters that could be causing the largest sources of variation are then identified and included in subsequent experiments.

            
- Data may also be used to create SPC charts to determine if the process is in statistical control. Since a lack of statistical control will contribute to experimental error variation, it will be more difficult to understand the results of an experiment if the process is not in statistical control. Lack of statistical control may also mean that there are "lurking variables" not on the list of process parameters that are contributing to process variation.

        

        

**2. Conduct experiment(s) to determine which parameters have a significant main or interaction effect on the quality attributes**

        

            
- This will usually be a full factorial design for two to four parameters. A full two-level factorial design has a low (-) and high (+) level selected for each factor (parameter). At least one experiment is run at each combination of the factor levels. For two factors, 22 = 4 combinations exist; for three factors, 23 = 8 combinations exist; for four factors, 24 = 16 combinations exist. Full factorial designs are seldom used for more than four factors since so many experiments are required. Fractional factorial experiments, where only one-half or one-quarter of the combinations are used, are often done for four to six parameters.

            
- If possible, control runs at the nominal midpoints (0) between the low (-) and high (+) levels of the factors should be included in the experimental design. Using control runs at the beginning and the end of the factorial experiment and, ideally, also during the factorial experiment, will allow detection of any process drift during the experiments. Control runs at the beginning and end of experiments that do not give similar results may indicate the presence of another uncontrolled variable. Replicate control runs at the nominal values also provide a true estimate of inherent process variation (called experimental error).

            
- If possible, the parameter effects on both the mean and variation of the quality attributes should be determined. Some parameters may affect the mean only, variation only, or both. This information can be used to minimize the variation while optimizing the mean, which results in a robust process. Standard DoE approaches, as well as the Taguchi method, may be used for this (84).

        

        

**3. Optimize the response surface experiments and determine design space**

        

            
- Occasionally, the science behind a process will be understood well enough to skip screening and two-level factorial experiments and start with response surface experiments. If enough information is learned from two-level factorial studies, no additional experiments will be required, and this step can be skipped. However, it is often necessary to conduct more extensive experiments at three to five levels for the parameters identified as the most important from earlier factorial experiments. The goal of response surface experiments is to develop an equation that accurately models the relationship between the input parameters and the output quality attributes. This equation is then used to determine the design space region of the input parameters where the output quality attributes will meet specifications.

            
- The most common response surface experimental designs are Box-Behnken, central composite, three-level full factorial, and computer-generated optimal designs (D-, G-, I- or, more generally, OMARS (Orthogonal Minimally Aliased Response Surface)) (82). All of these have experiments where at least three levels of the parameters are included in order to estimate curvature (quadratic) effects. The results are analyzed to determine regression equations to model the process with such computer programs as Minitab, JMP, and SAS (83).

            
- Another aspect of optimization is to develop a robust process. The regression equations already developed can be used to locate input parameter settings that are "forgiving," that is, when the process is run at these settings, variation in the input parameters will not result in unacceptable variation in the quality attributes. The idea is to stay away from boundaries or areas in the parameter design space where variation in the parameter will result in rapid quality deterioration. This is accomplished by using the quadratic and interaction effects to minimize variation. The Taguchi method of experimental design uses a slightly different approach to also develop robust processes (85, 86).

            
- The results may also be used to calculate the percent of total variation attributable to each parameter. This is called a variance components analysis. The input parameters contributing the most to the output quality attribute variation can be controlled the most tightly, made robust by running the process at a particular level of the other parameters, or improved by a process design change to reduce the impact of the parameter.

        

        

**4. Confirm DoE results**

    

    

        

### 導師解析 Tutorial Commentary

        

            

#### 核心概念解析 Key Concepts

            

**Design of Experiments, DoE（實驗設計）：**DoE 是 Stage 1 製程設計中最強大的統計工具。它與傳統的「一次一因子」（OFAT, One Factor At a Time）實驗法根本不同——DoE 可以同時改變多個參數，從而揭示參數間的**交互作用（interactions）**。

            

DoE 的四大功能：

            

                
- **篩選（Screen）**：找出哪些參數真正重要

                
- **建模（Model）**：建立輸入-輸出的數學關係

                
- **最佳化（Optimize）**：找到最佳操作條件

                
- **穩健設計（Robustness）**：確保製程對變異不敏感

            

        

        

            

#### 比喻說明 Analogy

            

**OFAT vs DoE 的差別：**想像你要調出完美的咖啡。OFAT 方法是先只調水溫（其他固定），找到最佳溫度後，再只調研磨粗細，再調水粉比⋯⋯但問題是：最佳溫度可能取決於研磨粗細！兩者有交互作用。DoE 方法則是同時測試不同溫度 x 研磨 x 水粉比的組合，一次實驗就能揭示所有主效應和交互作用。實驗次數其實更少，結論更可靠。

        

        

            

#### 重點提示 Key Notes

            

**DoE 的四步法：**

            

                
1. **Step 1 — 決定要研究的參數與品質屬性**：先做篩選（Screening Design），如果參數太多（>4個），使用 Fractional Factorial 或 Plackett-Burman 設計先縮減清單。

                
2. **Step 2 — 因子實驗（Factorial Design）**：2-4 個參數用全因子設計（Full Factorial），>4 個用部分因子設計。務必包含中心點（center points）作為控制運行。

                
3. **Step 3 — 反應曲面設計（Response Surface）**：對重要參數做 3-5 個水準的實驗，建立數學模型，確定設計空間（Design Space）。

                
4. **Step 4 — 確認結果**：驗證實驗確認模型預測與實際結果一致。

            

        

        

            

#### 公式與計算 Formula

            

**全因子設計實驗次數：**

            

```

全因子設計實驗次數 = L^k

其中：
L = 水準數 (levels)
k = 因子數 (factors)

兩水準全因子設計：
2 因子：2² = 4 次實驗
3 因子：2³ = 8 次實驗
4 因子：2⁴ = 16 次實驗
5 因子：2⁵ = 32 次實驗（通常改用半因子 = 16）

三水準反應曲面設計（中心複合設計）：
3 因子：約 15-20 次實驗
4 因子：約 24-30 次實驗

常用設計類型：
- Box-Behnken：三因子以上，不含邊角實驗
- Central Composite (CCD)：最常用，含星點
- D-Optimal：電腦生成最佳設計
- OMARS：正交最小混淆反應曲面
```

        

        

            

#### 核心概念深入 Advanced Concepts

            

**Control Runs（控制運行）**的重要性：

            

                
- 放在實驗開始和結束時，可以偵測製程漂移（process drift）

                
- 如果首尾的控制運行結果不一致，表示有「潛伏變數（lurking variables）」存在

                
- 重複的控制運行提供真正的固有製程變異估計（experimental error）

            

            

**穩健設計（Robust Design）**的核心思想：找到「forgiving」的操作點——即使輸入參數有波動，輸出品質屬性也不會顯著偏離。這通過遠離設計空間的邊界來實現，利用二次項（quadratic）和交互作用項來定位變異最小的區域。

        

        

            

#### 重點提示 Key Notes

            

**Multi-Vari Chart 的三層變異分解：**原文特別提到 Multi-Vari Chart 可以區分三種變異來源：

            

                
- **Within-batch（批內變異）**：同一批次內的差異

                
- **Between-batch（批間變異）**：不同批次間的差異

                
- **Positional（位置變異）**：如多頭充填機不同充填頭之間的差異

            

            

這在決定「該控制什麼」時非常關鍵——如果主要變異來源是位置變異，加強充填頭間的均勻性比調整製程參數更有效。

        

        

            

#### 實務應用 Practical Application

            

**CDMO 實務場景 — DoE 在充填製程中的應用：**

            

假設你正在為一個高黏度生物製劑（viscous biologic）開發充填製程。懷疑影響充填精度的關鍵參數包括：充填速度（filling speed）、管路溫度（tubing temperature）、泵壓力（pump pressure）和藥液黏度（product viscosity）。

            

**策略：**

            

                
1. 先用 24-1 半因子篩選設計（8 次實驗 + 3 次中心點 = 11 次）篩選 4 個參數

                
2. 結果可能顯示充填速度和藥液黏度有顯著交互作用

                
3. 再用 CCD 反應曲面設計（約 13 次實驗）深入研究這 2 個關鍵參數

                
4. 建立充填精度 = f(速度, 黏度) 的回歸方程式

                
5. 確定設計空間，選擇穩健的操作點

            

        

        

            

#### 練習思考 Practice Questions

            

                
1. 為什麼「一次一因子」（OFAT）實驗法無法偵測交互作用？試舉一個製程中參數交互作用的實際例子。

                
2. 原文提到在做 DoE 前應先用 SPC chart 確認製程是否在統計管控中。如果不在管控中就做 DoE，結果會如何受影響？

                
3. 在 Step 3 中，原文提到要尋找「forgiving」的操作設定。這與 ICH Q8 的 Design Space 概念有什麼關係？

                
4. Taguchi 方法與標準 DoE 方法有什麼不同？各自適用什麼場景？

# Section 6.3-6.5: Enabling Systems Part 2 — PAT, Technology Transfer, Knowledge Management

    

賦能系統（下篇）：製程分析技術、技術轉移、知識管理

    

PDA Technical Report No. 60 (Revised 2026): Process Validation — A Lifecycle Approach | p99 - p110

    

### 本章學習目標

    

        
- 理解 Process Analytical Technology (PAT) 如何支援製程驗證，以及其選擇、設計、確認與持續驗證的考量

        
- 掌握 Technology Transfer (TT) 在產品生命週期各階段的活動分佈與關鍵知識移轉要素

        
- 認識 Knowledge Management (KM) 作為製程驗證生命週期賦能工具的系統化方法

        
- 學習如何將 PAT、TT、KM 三大賦能系統整合應用於 CDMO 的商業營運場景

    

    

### 本節目錄 Section Contents

    

        6.3 Process Analytical Technology
        6.3.1 Selection of PAT
        6.3.2 PV Considerations during PAT Design
        6.3.3 Process Qualification for PAT
        6.3.4 CPV Considerations for PAT
        6.4 Technology Transfer
        6.5 Knowledge Management
    

## 6.3 Process Analytical Technology (PAT)

    

        

## 原文內容 Original Text

        

PAT is a method of process control, where the product or in-process material quality attributes are monitored and measured during processing, and the process parameters and conditions are adjusted to compensate for the variability of the quality attributes with the goal of ensuring a consistent final product quality.

        

PAT can provide high levels of product quality assurance through the analysis of material attributes and the process adjustments. In that quality attributes do not vary outside of the prescribed ranges, product and material quality is maintained (98).

        

PAT can support PV whether it is a parallel activity (concurrent with PV), reductive activity (reduces execution of existing tests), or replacement activity (alternative to traditional testing).

        

Effective use of PAT to provide process control relies on the selection of the correct quality attributes, process performance ranges, and methods for monitoring and reporting. It also relies on the proper design, use, and validation of the PAT monitoring, measurement, and control loop systems.

        

The validation of the PAT system is based in part on the following principles:

        

            
- Measurement of the correct product and in-process quality attributes

            
- Accuracy and understanding of the correlation between these quality attributes and the process parameters that will be adjusted

            
- Reliability, suitability, capability, and accuracy of the monitoring, measurement, and process control loop or adjustment systems

            
- Acceptable performance of the PAT system throughout commercial manufacturing, including the ability to identify opportunities for process improvement

        

    

    

        

## 導師解析 Tutorial Commentary

        

            

#### 核心概念解析 Key Concepts

            

**PAT (製程分析技術)：**PAT 不僅是一種「檢測技術」，更是一種製程控制哲學。其核心理念是：與其在製程結束後才檢測產品是否合格，不如在製程進行中即時監測品質屬性並動態調整製程參數，從根本上確保產品品質的一致性。

            

**三種支援 PV 的模式：**

            

                
- **平行活動 (Parallel)：**PAT 與傳統測試同時進行，累積信心

                
- **簡化活動 (Reductive)：**PAT 數據充分後，減少傳統測試頻率

                
- **替代活動 (Replacement)：**PAT 完全取代傳統測試方法

            

        

        

            

#### 比喻說明 Analogy

            

想像你在烹飪一鍋湯。傳統品管方式是煮完後才嚐味道（成品檢驗）。PAT 的方式則像是一邊煮一邊嚐，隨時調整鹽和調味料的量（即時監測與調整）。這樣做的好處是：你幾乎不可能煮出一鍋難以下嚥的湯，因為問題在發生的瞬間就被發現並修正了。

            

PAT 的「控制迴路」就像智慧型恆溫器：感測器量測溫度 → 控制器判斷是否偏離設定 → 自動調整加熱/冷卻，形成閉迴路控制。

        

        

            

#### 重點提示 Key Notes

            

PAT 驗證的四大原則環環相扣：(1) 測對東西、(2) 理解相關性、(3) 儀器可靠、(4) 持續有效。任何一環出問題，整個 PAT 系統的品質保證能力就會打折扣。對 CDMO 而言，PAT 的投資回報在於：減少批次放行時間、降低 OOS 事件、提高製程一致性，這些都直接轉化為客戶信任和商業競爭力。

        

        

            

#### 練習思考 Practice Questions

            

                
1. 在你的製造環境中，哪些品質屬性最適合導入 PAT 即時監測？為什麼？

                
2. PAT 從「平行活動」過渡到「替代活動」需要滿足哪些前提條件？

            

        

    

### 6.3.1 Selection of Process Analytical Technology

    

        

## 原文內容 Original Text

        

PAT is an enabler to product and process understanding and an element of the control strategy. Prior to the selection of the PAT system, the product and manufacturing process must be developed and well-understood. Selecting the right PAT system should be based on fitness for purpose, system ruggedness, and vendor customer service. Selection criteria should include, but are not limited to, specificity, sensitivity and accuracy, electronic integration requirements of information technology compatibility, data management, and communication.

    

    

        

## 導師解析 Tutorial Commentary

        

            

#### 核心概念解析 Key Concepts

            

**Fitness for Purpose (適用性)：**選擇 PAT 系統時，最重要的不是選最先進的技術，而是選最適合特定製程需求的技術。就像選擇量測工具：量體重不需要用到精密分析天平。

            

選擇標準涵蓋多維度：

            

                
- **分析性能：**Specificity (專一性)、Sensitivity (靈敏度)、Accuracy (準確度)

                
- **系統整合：**IT 相容性、數據管理、通訊介面

                
- **營運考量：**Ruggedness (耐用性)、供應商服務支援

            

        

        

            

#### 重點提示 Key Notes

            

TR60 特別強調「在選擇 PAT 系統之前，產品和製造製程必須已被開發且充分理解」。這意味著 PAT 不應該是製程開發的起點，而是在已有足夠製程知識的基礎上，用來強化控制策略的工具。對 CDMO 來說，這也表示在接受客戶技轉時，需要先充分理解製程，才能有效評估 PAT 的導入。

        

    

### 6.3.2 Process Validation Considerations during the PAT System Design

    

        

## 原文內容 Original Text

        

During PAT system design, information is developed to confirm that the correct product and in-process quality attributes are being measured, and that the correlation between these quality attributes and the process parameters that will be adjusted is understood and accurate. PAT system design begins in Stage 1 and is qualified in Stage 2 and continually verified in Stage 3. During PAT system design, an understanding of how process-parameter changes affect product attributes is established. Process monitoring and control systems are designed and linked to specific product attributes. Ranges of acceptable process-parameter variation are determined. PAT design efforts should include risk assessment, system feasibility and selection, in-process application development, and consideration of regulatory requirements.

        

### 6.3.2.1 Risk Assessment

        

The risk assessment should identify product and in-process quality attributes that influence final product quality. The risk assessment should identify process steps and conditions that affect these attributes and can be measured and adjusted to ensure product quality. Quality attributes and corresponding process steps and conditions that are not monitored by the PAT system may require other means to ensure or validate performance. Having PAT systems is expected to lower the risk to product quality by having additional controls, timely responses, increased detectability, increased understanding, and information (e.g., identification, measurement, control of CQAs). These features enable a more informed risk-assessment decision. Tools for the assessment and evaluation of PAT processes and systems are discussed in Section 6.1 of this technical report, as well as in ICH Q9(R1), TR 54, and the FDA PAT Framework guidance, among other publications (37, 78, 99).

        

### 6.3.2.2 In-Process Application and Method Development

        

The PAT methods for in-process product measurement and process adjustment should be selected and validated for specificity, linearity, range, accuracy, precision, repeatability, robustness, detection limit, and quantitation limit to ensure that the method is fit for purpose (37).

    

    

        

## 導師解析 Tutorial Commentary

        

            

#### 核心概念解析 Key Concepts

            

**PAT 系統設計的生命週期對應：**

            

                
- **Stage 1 (製程設計)：**設計 PAT 系統，建立製程參數與品質屬性的關聯性

                
- **Stage 2 (製程確認)：**確認 PAT 系統的性能符合要求

                
- **Stage 3 (持續製程確認)：**持續驗證 PAT 系統在商業生產中的表現

            

            

PAT 系統本身的驗證也遵循生命週期方法，與製程驗證的三階段完美對齊。

        

        

            

#### 比喻說明 Analogy

            

PAT 的風險評估就像醫院為病患建立監測計畫：先評估哪些生命徵象最關鍵（心率、血壓、血氧？），再決定監測頻率和介入閾值。不是所有指標都需要連續監測（有些定期量測即可），但遺漏關鍵指標可能導致嚴重後果。同樣地，未被 PAT 監測的品質屬性「可能需要其他手段來確保或驗證性能」。

        

        

            

#### 重點提示 Key Notes

            

**PAT 方法驗證的完整性：**TR60 明確引用了分析方法驗證的九大要素（專一性、線性、範圍、準確度、精密度、重複性、耐用性、偵測極限、定量極限），這與 ICH Q2 的要求一致。這提醒我們：PAT 方法不因為是「線上」或「即時」的就可以降低驗證標準。

            

**風險評估的雙向價值：**導入 PAT 既降低了製程品質風險（更好的控制和偵測能力），也為風險評估提供了更充分的資訊基礎，形成正向循環。

        

        

            

#### 實務應用 Practical Application

            

在 CDMO 環境中，為不同客戶產品導入 PAT 需要考慮平台化策略：是否能建立一套通用的 PAT 平台（如 NIR 含量均勻度監測），適用於多個客戶產品？這樣可以分攤設備投資和驗證成本，提高 PAT 系統的投資報酬率。但每個產品仍需進行個別的方法驗證和相關性確認。

        

    

### 6.3.3 Process Qualification Considerations for Process Analytical Technology

    

        

## 原文內容 Original Text

        

The process qualification stage is where information is developed to confirm that the monitoring, measurement, and process control or adjustment systems are suitable, capable, accurate, and reliable. One key to effective PAT process control is the reliable operation of instruments and equipment. For implementation, an implementation and validation team should be assembled to categorize the validation requirements and propose acceptance criteria for each unit of operation, based on the application or intended use of the PAT system and method. These requirements and criteria will ultimately be included in a validation protocol and described in the validation report. The acceptance criteria should be aligned with the expected specification, protocol requirements, development experience, and manufacturing practice.

        

The function and operation of the equipment and instrumentation used in the PAT system should be qualified to ensure that it will monitor and control the process parameters accurately and reliably. Equipment and instruments used during the process should be qualified to verify that they are suitable for in-process use, including compatibility with process materials and conditions, accuracy, sensitivity, security, and reliability.

    

    

        

## 導師解析 Tutorial Commentary

        

            

#### 核心概念解析 Key Concepts

            

**PAT 確認的四大要素 (SCAR)：**

            

                
- **S**uitable (適用性)：適合特定的製程應用

                
- **C**apable (能力)：能夠達到所需的測量精度

                
- **A**ccurate (準確性)：量測結果與真值一致

                
- **R**eliable (可靠性)：長期穩定運作

            

            

這四個面向是 PAT 系統從「實驗室可行」走向「商業製造可靠」的關鍵橋樑。

        

        

            

#### 重點提示 Key Notes

            

TR60 強調需要組建「實施與驗證團隊」來推動 PAT 確認。這暗示 PAT 的導入不是單一部門的事，需要跨功能團隊合作：製程開發、分析方法、設備工程、IT 系統、品質保證等。特別是在 CDMO 中，可能還需要客戶方的技術代表參與。

            

**設備適用性確認的特殊考量：**PAT 設備常需直接接觸製程物料或在嚴苛環境條件下運作，因此需要額外確認與製程物料和條件的相容性（如耐腐蝕性、無菌條件下的可靠性、清潔驗證等）。

        

        

            

#### 練習思考 Practice Questions

            

                
1. PAT 設備的驗收標準 (acceptance criteria) 應該根據哪些資訊來制定？

                
2. 如果一台 NIR 光譜儀要用於即時監測錠劑含量均勻度，需要確認哪些適用性項目？

            

        

    

### 6.3.4 Continued Process Verification Considerations for Process Analytical Technology

    

        

## 原文內容 Original Text

        

The CPV stage is where information is obtained to confirm that the PAT system performs at an acceptable level throughout commercial manufacturing. It also determines where product and in-process quality attributes, or process parameters, fall out of expected ranges; those that do are identified, investigated for cause, and addressed.

        

PAT provides continuous process and product attribute verification. Stage 3 activities should therefore focus on accuracy and reliability of control methods, possible process-control improvements, and process variables missed during process development and qualification. Evaluation of PAT and or in-process derived data should be part of the quality system and review processes (17). Where data trending shows excursions in anticipated monitoring results, an analysis of the cause of the excursion should be conducted to determine if changes to the control system are needed or what opportunities for process improvement can be identified.

        

When variables are found that are not being monitored adequately, changes to the monitoring methods may be needed. All changes should be evaluated for the impact on the process and product attributes. Changes should be evaluated, and actions should be implemented to assure that residual risks do not adversely affect process performance or product quality. These actions may include steps to qualify the changed process and equipment.

    

    

        

## 導師解析 Tutorial Commentary

        

            

#### 核心概念解析 Key Concepts

            

**PAT 在 Stage 3 的持續價值：**PAT 天然具有「持續驗證」的特性，因為它本身就在製程中不斷收集數據。Stage 3 的重點不再是證明 PAT 系統能不能用，而是：

            

                
- 確認 PAT 控制方法的準確性和可靠性是否持續維持

                
- 發現製程改善機會（PAT 的海量數據是改善的寶庫）

                
- 識別開發和確認階段遺漏的製程變數

            

        

        

            

#### 比喻說明 Analogy

            

PAT 在 Stage 3 的角色就像車輛的行車紀錄器和 OBD（車載診斷系統）。行車紀錄器持續記錄行駛狀況，OBD 即時監測引擎健康。當出現異常時，系統會提醒駕駛（偏移偵測），而累積的歷史數據可以幫助找出長期趨勢（如煞車磨損、油耗變化），提前進行維護改善。

        

        

            

#### 重點提示 Key Notes

            

**變更管理的嵌入：**TR60 特別提醒：當發現需要調整監測方法或製程時，所有變更都必須評估對製程和產品屬性的影響。這將 PAT 的持續改善活動與品質系統中的變更控制程序緊密連結，確保改善不會引入新的風險。

            

PAT 數據的趨勢分析應納入品質系統和審查流程（如年度產品品質審查 / APR），這是法規的明確期望。

        

        

            

#### 實務應用 Practical Application

            

CDMO 在 Stage 3 運用 PAT 數據的商業價值：(1) 向客戶提供製程能力的即時報告，增強信任度；(2) 利用趨勢分析主動提出製程最佳化建議，展現技術附加價值；(3) 及早偵測偏移，避免批次損失，降低客戶成本。這些都是 CDMO 差異化競爭的利器。

        

    

## 6.4 Technology Transfer

    

        

## 原文內容 Original Text

        

For a lifecycle approach to PV to be effective, all information that is available to support process understanding (i.e., including other sites and similar process knowledge), should be considered. This information should be useful, accurate, and complete. The goal of TT activities (refer to Figure 6.4-1) is to effectively communicate product and evolution of process knowledge/understanding between development and manufacturing, and within or between manufacturing sites (within the firm or to contract development and manufacturing organizations (CDMOs)) to achieve product realization. This information forms the basis for the manufacturing process, control strategy, PV approach, and ongoing continual improvement. It also provides valuable insight into the development of the process, including process variables, process performance, and process control strategies. TT is successful if the recipient of the TT (Receiving Unit) is able to demonstrate, through the validation of the process, that its outcome enables reliable manufacturing of the transferred product and process (36).

        

*Figure 6.4-1 Distribution of Technology Transfer Activities throughout the Product Lifecycle*

        

TT can occur at different stages of the PV lifecycle. If a new process is being transferred from research and development to commercial manufacturing, the TT may occur between Stages 1 and 2. If the transfer takes place after a product has been launched (product is in the commercial manufacturing phase), the transfer will generally occur during Stage 3 (or eventually between Stage 2 and Stage 3). Table 6.4-1 displays the distribution of TT activities throughout the product lifecycle, which outlines the increasing knowledge and process understanding with each transfer.

    

    

        

## 導師解析 Tutorial Commentary

        

            

#### 核心概念解析 Key Concepts

            

**Technology Transfer (技術轉移)：**在製程驗證生命週期的框架下，技術轉移不僅是「把配方和流程交給對方」，而是系統性地傳遞所有支持製程理解的知識和數據。其成功標準明確：接收單位 (Receiving Unit) 能否通過製程驗證，證明其可以可靠地生產轉移的產品。

            

**TT 在生命週期中的時機：**

            

                
- **Stage 1 → Stage 2：**研發到商業生產的首次轉移

                
- **Stage 3 中：**已上市產品轉移至新廠區或 CDMO

            

        

        

            

#### 比喻說明 Analogy

            

技術轉移就像一位資深主廚將餐廳的招牌菜食譜傳授給新廚師。不只是交一份書面食譜（SOP），還要傳授：為什麼這個步驟要用中火而不是大火（製程理解）、用不同品牌的鍋具時火候該怎麼調（設備差異評估）、客人常見的反饋和改良紀錄（歷史數據）、甚至哪些供應商的食材品質最穩定（物料知識）。成功的標準不是新廚師能背誦食譜，而是做出來的菜讓老客人吃不出差別。

        

        

            

#### 重點提示 Key Notes

            

TR60 特別提到 TT 的資訊必須「有用、準確且完整」(useful, accurate, and complete)。這三個形容詞暗示了常見的技術轉移失敗原因：

            

                
- **不有用：**給了大量數據但缺乏解讀和脈絡

                
- **不準確：**開發階段的實驗數據未經確認就直接沿用

                
- **不完整：**遺漏了關鍵的失敗經驗、偏差紀錄或非正式知識（tacit knowledge）

            

            

對 CDMO 而言，TT 品質直接決定了 PPQ 的成功率和效率。

        

    

### Table 6.4-1: Technology Transfer Activities throughout the Product Lifecycle

    

        

## 原文內容 Original Text

        

        
            
                
                
                
                
            
| PV Lifecycle Stage | Activities | Knowledge Development / Data | Application |
| --- | --- | --- | --- |
            
                ****
                
                
- 
- 
- 
- 
- 
- 
- 
- 

                
            
| Stage 1 | Process Design provides product and process development knowledge and data for TT | Development Report                         Development history, including criticality assessments                         DoE with sources of variation                         Data and knowledge development from stability studies and development batches                         Rationale for specifications and methods                         CPPs, CMAs, CQAs                         PARs, NORs                         Manufacturing process description, equipment training | TT batches manufactured during Stage 1 are intended to establish comparability of product quality between sites and develop filing/market authorization data. Development Report summarizes activities from Stage 1. |
            
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
- 

                
                
            
| Stage 2 | Most TT activities in a product lifecycle are carried out at Stage 2:                                              Development of transfer strategy                         Manufacturing of commercial-scale PPQ batches                         Site equivalency analysis                         Transfer and validation of analytical methods                         Confirming CPPs at commercial-scale                         Conducting stability studies at commercial-scale                         Confirming risk assessments, criticality analysis                         Establish sampling plans and statistical methods                         Comparability protocol and report                         Evaluation of personnel qualifications and training                         Validation of microbiology-related tests | TT Strategy; Control strategy and validation plan; Product and process description; Assessment of site change requirements; Category under SUPAC guidelines; Number of batches required; Specifications and methods transfer plan | TT batches manufactured during Stage 2 are intended to reproduce the manufacturing process at the transfer site and to execute PPQ. Equivalency between sites (gap analysis) is intended to compare equipment and facilities. |
            
                ****
                
                
- 
- 
- 
- 
- 
- 
- 
- 

                
            
| Stage 3 | TT activities at Stage 3 are most likely carried out for products that have already been validated and are on the market. Known as post-approval changes under SUPAC guidelines, ICH Q5E and ICH Q12. | Stage 2 TT and validation reports                         Annual Product Reports, including process trending and process capability                         History of investigations, CAPA, change control, OOS, complaints, field alerts, stability studies, yield variations                         Executed batch records                         Sampling and test plans                         Analytical data                         Gap analysis: scale change, equipment design, CPPs at new site, suppliers, personnel                         New site state of compliance, regulatory requirements, batch requirements, methods transfer plan | Transfer to a new location within a manufacturing site, to an alternate site, or to a contract manufacturer. Filing requirements are defined by SUPAC. Validation requirements apply equally to any of the scenarios. |
        

        

    

    

        

## 導師解析 Tutorial Commentary

        

            

#### 核心概念解析 Key Concepts

            

**知識累積的階梯模型：**Table 6.4-1 清楚展示了一個重要概念：隨著產品生命週期的推進，可用於技術轉移的知識越來越豐富。

            

                
- **Stage 1 轉移：**主要依賴開發報告、DoE 數據、CQA/CPP 定義

                
- **Stage 2 轉移：**加上 PPQ 經驗、場址等效性分析、方法驗證

                
- **Stage 3 轉移：**再加上商業生產歷史、偏差/CAPA 紀錄、APR 數據

            

            

Stage 3 的轉移擁有最完整的知識基礎，理論上成功率應該最高。

        

        

            

#### 重點提示 Key Notes

            

**關鍵術語解析：**

            

                
- **SUPAC (Scale-Up and Post-Approval Changes)：**FDA 的上市後變更指引，定義了不同類型變更的法規申報要求

                
- **Gap Analysis (差異分析)：**系統性比較發送單位與接收單位之間的差異（設備、設施、人員、供應商等）

                
- **Comparability Protocol (比較性研究方案)：**預先定義的統計判定程序，用以證明兩個廠區的產品等同性

                
- **ICH Q5E：**生物技術/生物製品的比較性研究指引

                
- **ICH Q12：**藥品生命週期管理技術與法規考量

            

        

        

            

#### 比喻說明 Analogy

            

三個階段的 TT 就像搬家到新廚房的不同情境：

            

                
- **Stage 1 轉移：**新手廚師帶著烹飪學校的筆記到第一家餐廳實習——只有理論知識

                
- **Stage 2 轉移：**主廚帶著完整的菜單和訓練手冊開分店——有系統化的操作知識

                
- **Stage 3 轉移：**老店主廚帶著十年經營心得去新店——不但有食譜，還知道哪些客訴改良了菜色、淡旺季如何調配食材

            

        

        

            

#### 實務應用 Practical Application

            

**CDMO 技術轉移實務：**作為接收單位，CDMO 應特別注意以下事項：

            

                
- 要求客戶提供完整的 Development Report，不只是批次紀錄

                
- 進行詳細的 Gap Analysis，尤其是設備操作原理和設計差異

                
- 建立明確的 Comparability Protocol，包含統計判定標準

                
- 確認分析方法的轉移和驗證計畫

                
- 評估人員培訓需求和時程

            

            

一份完善的技術轉移計畫可以顯著降低 PPQ 失敗的風險，直接節省數百萬元的重工成本。

        

        

            

#### 練習思考 Practice Questions

            

                
1. 在 Stage 3 的技術轉移中，哪些歷史數據對接收單位最有價值？為什麼？

                
2. 如果客戶只提供了批次紀錄但沒有 Development Report，作為 CDMO 你會如何應對？

                
3. Gap Analysis 中，哪些差異最可能導致 PPQ 失敗？如何預防？

            

        

    

## 6.5 Knowledge Management

    

        

## 原文內容 Original Text

        

KM for CPV refers to the systematic approach of capturing, storing, sharing, and utilizing knowledge gained from the CPV process to enhance the efficiency, consistency, and quality of manufacturing processes. It involves managing the insights, data, and experiences accumulated throughout the lifecycle of a product or process, especially in regulated industries like pharmaceuticals, where maintaining product quality and regulatory compliance is crucial.

        

In the context of CPV, KM ensures that relevant data, process performance information, lessons learned, and best practices are accessible to all stakeholders. This facilitates continuous improvement, informed decision-making, and the smooth implementation of changes, all while maintaining compliance with regulatory standards.

        

### 6.5.1 Introduction

        

KM is an enabler for the PV lifecycle (refer to Figure 6.5.1-1). ICH Q10 defines KM as a systematic approach to acquiring, analyzing, storing, and disseminating information related to products, manufacturing processes, and components. It dictates that product and process knowledge should be managed from development through the commercial life of the product, up to and including product discontinuation.

        

To ensure appropriate applicability, a systematic approach must be implemented to guarantee continuous transformation and utilization of raw data, information, knowledge, and application gathered from both tacit and explicit knowledge.

        

*Figure 6.5.1-1 Knowledge Management*

    

    

        

## 導師解析 Tutorial Commentary

        

            

#### 核心概念解析 Key Concepts

            

**Knowledge Management (知識管理)：**在製程驗證的脈絡下，KM 是將「經驗」轉化為「組織能力」的系統化方法。TR60 定義了 KM 的四大功能：

            

                
- **Capturing (擷取)：**從製程中系統性地收集數據和經驗

                
- **Storing (儲存)：**以結構化方式保存知識，確保可追溯

                
- **Sharing (分享)：**讓所有利害關係人都能取用相關知識

                
- **Utilizing (運用)：**將知識轉化為改善行動和決策依據

            

            

**Tacit vs. Explicit Knowledge：**

            

                
- **Explicit Knowledge (顯性知識)：**已文件化的知識，如 SOP、批次紀錄、驗證報告

                
- **Tacit Knowledge (隱性知識)：**存在於人員經驗中的未文件化知識，如「這台設備開機後需要暖機20分鐘量測才會穩定」

            

        

        

            

#### 比喻說明 Analogy

            

知識管理就像圖書館的管理系統。原始數據就像散落各處的書頁（raw data），經過整理變成一本本書（information），再由專業人員撰寫導讀和索引（knowledge），最終讀者能快速找到需要的知識並應用（application）。

            

而隱性知識 (tacit knowledge) 就像老館員腦中的經驗：「那本很冷門的參考書其實被分類錯了，要去某個角落才找得到。」如果這位館員退休了，這些知識就永遠消失了——除非有人把它記錄下來。這就是為什麼 KM 要特別關注隱性知識的擷取和轉化。

        

        

            

#### 重點提示 Key Notes

            

**ICH Q10 的 KM 要求：**ICH Q10 明確規定產品和製程知識的管理應從開發階段延續到產品停產。這意味著知識管理不是一次性活動，而是貫穿產品整個生命週期的持續過程。

            

**KM 對 CDMO 的特殊挑戰：**

            

                
- 多客戶產品的知識需要隔離管理（保密義務），但平台知識需要共享

                
- 人員流動率較高時，隱性知識流失的風險更大

                
- 技術轉移頻繁，每次轉移都是知識管理能力的考驗

            

        

        

            

#### 實務應用 Practical Application

            

**CDMO 知識管理實務建議：**

            

                
- **建立製程知識資料庫：**將每個產品的 CPP/CQA 關係、製程參數最佳化歷程、偏差處理經驗等系統性地記錄

                
- **隱性知識轉化機制：**定期舉辦技術分享會、製程回顧會，將資深操作員的經驗轉化為文件化知識

                
- **跨產品學習：**在保密前提下，將通用的製程平台知識（如凍乾曲線開發方法論）建立為組織共享資產

                
- **人員交接程序：**建立結構化的知識交接 checklist，降低人員異動時的知識流失

            

        

        

            

#### 練習思考 Practice Questions

            

                
1. 在你的組織中，有哪些關鍵的隱性知識 (tacit knowledge) 尚未被文件化？如果持有這些知識的人離職，會造成什麼影響？

                
2. 如何設計一個知識管理系統，既能滿足 CDMO 的多客戶保密需求，又能促進平台知識的共享？

                
3. Knowledge Management 和 Technology Transfer 之間有什麼關聯？如何讓 KM 提升 TT 的效率？

            

        

    

    

### 本節重點回顧 Section Summary

    

        
- **PAT (製程分析技術)：**PAT 是一種在製程中即時監測品質屬性並動態調整製程參數的控制方法，可作為 PV 的平行、簡化或替代活動。其驗證需涵蓋量測正確性、相關性理解、系統可靠性及持續有效性四大原則，並與 PV 三階段（設計、確認、持續驗證）完美對齊。

        
- **PAT 選擇與設計：**PAT 系統的選擇應基於 fitness for purpose，考量分析性能、系統整合和營運需求。設計階段需包含風險評估、可行性評估和方法驗證，PAT 方法的驗證標準與傳統分析方法一致（ICH Q2 九大要素）。

        
- **PAT 確認與持續驗證：**製程確認階段需確認 PAT 系統的適用性、能力、準確性和可靠性（SCAR），需要跨功能團隊合作。Stage 3 中 PAT 提供持續的製程和產品屬性驗證，數據趨勢分析應納入品質系統審查。

        
- **Technology Transfer (技術轉移)：**TT 的目標是在開發與生產之間、以及不同製造場址之間有效傳遞製程知識。資訊必須有用、準確且完整。TT 活動分布在三個 PV 階段，知識深度隨生命週期推進而累積。成功標準是接收單位能通過製程驗證實現可靠生產。

        
- **TT 活動矩陣：**Stage 1 聚焦開發知識（DoE、CQA/CPP 定義），Stage 2 執行最多 TT 活動（PPQ、場址等效性、方法轉移），Stage 3 利用最豐富的歷史數據進行上市後變更轉移，需遵循 SUPAC 和 ICH Q12 要求。

        
- **Knowledge Management (知識管理)：**KM 是 PV 生命週期的賦能工具，涵蓋知識的擷取、儲存、分享和運用。ICH Q10 要求 KM 從開發到產品停產持續進行。特別需要關注隱性知識 (tacit knowledge) 的轉化，因為它往往是製程成功的關鍵卻最容易流失的資產。

        
- **三大賦能系統的整合：**PAT 產生數據 → KM 將數據轉化為知識 → TT 將知識有效傳遞給接收單位。三者相互支撐，共同構成製程驗證生命週期的知識基礎設施。對 CDMO 而言，這三大系統的成熟度直接決定了技術轉移效率、PPQ 成功率和持續改善能力。

    

 

    

PDA Technical Report No. 60 (Revised 2026) - Process Validation: A Lifecycle Approach

    

Section 4b: Enabling Systems Part 2 (6.3-6.5) | Pages 99-110

    

Educational Material for CDMO Professionals

⇧

## Section 5: References 參考文獻 (p111-p120)

# Section 7.0: Use of Knowledge Management in Process Validation Examples

    

知識管理在製程驗證中的應用範例

    

PDA Technical Report No. 60 (Revised 2026) | p111 - p120

    

### 本章學習目標

    

        
- 理解品質風險管理 (QRM) 如何貫穿製程驗證 (PV) 生命週期的各個面向

        
- 掌握大分子生物製劑（以人源化 IgG1 為例）的三階段製程驗證策略與實務

        
- 學習 Stage 1（製程設計）中 TPP/QTPP 建立、CQA 鑑別、QRA 執行及製程表徵的系統方法

        
- 了解 Stage 2（製程確認）中技術轉移、工程運轉、PPQ 準備評估及 PPQ 執行的關鍵活動

        
- 認識知識管理 (KM) 如何整合設備維護、風險評估、控制策略以降低產品品質風險

    

    

### 本節內容導覽

    

        7.0 KM in PV Examples
        7.1 Large Molecule
        Table 7.1-1 Stage 1
        Table 7.1-2 Stage 2
    

## 7.0 Use of Knowledge Management in Process Validation Examples

    

        

## Original Text

        

Effective QRM approaches, as those described in ICH Q9(R1), can be combined throughout the PV lifecycle, covering such numerous aspects as development, equipment and utilities (qualification and maintenance), material management, production, laboratory control, stability studies, packaging and labeling, and supply chain (5). Extensive and thorough risk assessments cannot occur without an all-encompassing and well-managed KM system. Equipment maintenance is a good example: an in-depth risk assessment requires KM of different equipment aspects and on the interaction of the equipment with product and manual operations. Any gaps in information and data, tacit or explicit, translate directly into less-robust risk assessments, increasing risk to the quality of the product and potentially impacting the safety of the patient. The associated assessment and mitigation plan would be included at the design level during Stage 1.

        

In subsequent PV stages, change control, fine-tuning, and manual adjustments allowed by quality unit approval must be part of the workflow associated with the required knowledge and supported by risk management policies. Knowledge applied to equipment maintenance is a recurrent example of how crucial it is to keep the relevant KM.

    

    

        

## 導師解析 Tutorial Commentary

        

            

#### 核心概念解析 Key Concepts

            

**QRM (品質風險管理, Quality Risk Management)：**依據 ICH Q9(R1) 所述，QRM 是一套系統性的方法，用於評估、控制、溝通及回顧藥品品質相關風險。在 PV 生命週期中，QRM 不是一次性活動，而是貫穿從開發到商業化生產的持續過程。

            

**KM System (知識管理系統)：**本節強調，全面且管理良好的知識管理系統是進行深入風險評估的前提。沒有完整的知識基礎，風險評估就會有盲點。

        

        

            

#### 比喻說明 Analogy

            

想像你是一位外科醫師，要評估手術風險。如果你對病患的完整病歷（顯性知識）和同事對該病患的觀察經驗（隱性知識）都不清楚，你的風險評估必然不完整。製藥中的設備維護也是如此 -- 如果對設備與產品之間的交互作用知識不足，風險評估就會出現漏洞，最終影響產品品質甚至病患安全。

        

        

            

#### 重點提示 Key Notes

            

本段特別提出「設備維護」作為 KM 重要性的典型案例。在 CDMO 環境中，設備可能服務多個客戶的產品線，因此設備知識（如維護歷史、異常事件、與不同產品的交互影響）的系統化管理尤為關鍵。

            

                
- 隱性知識或顯性知識的任何缺口，都直接導致風險評估的穩健性降低

                
- Stage 1 設計階段即應納入評估及緩解計畫

                
- 後續階段的變更管制 (Change Control) 必須與知識管理及風險管理政策整合

            

        

        

            

#### 練習思考 Practice Questions

            

                
1. 在你的組織中，設備維護的知識是如何被記錄和傳遞的？是否存在僅靠資深技師「口耳相傳」的隱性知識？

                
2. 如果一台關鍵設備的維護歷史記錄不完整，對 PV Stage 1 的風險評估會產生什麼影響？

                
3. 變更管制流程中，如何確保相關知識被更新到 KM 系統中？

            

        

    

## 7.1 Large Molecule (Biologics (e.g., Proteins, RNA, or Larger Biological Material))

    

        

## Original Text

        

An example of the three stages of PV for a humanized IgG1 is provided in Table 7.1-1 (Stage 1), Table 7.1-2 (Stage 2), and Table 7.1-3 (Stage 3).

    

    

        

## 導師解析 Tutorial Commentary

        

            

#### 核心概念解析 Key Concepts

            

**Humanized IgG1 (人源化免疫球蛋白 G1)：**這是一種經過基因工程改造的單株抗體，保留人類抗體骨架、僅在抗原結合區域保留鼠源序列，以降低免疫原性。IgG1 亞型具有較強的效應功能（如 CDC 和 ADCC），常用於腫瘤學及免疫學適應症。

            

本節以此為範例，系統性展示大分子生物製劑如何在 PV 三階段中管理知識、控制風險，並持續優化製程。這是整份報告中最完整的實務案例之一。

        

        

            

#### 比喻說明 Analogy

            

把這個範例想像成一本「食譜開發日記」。Stage 1 就像在小廚房（實驗室規模）反覆試驗配方、找出最佳調味比例（CPP/CQA）；Stage 2 是把配方帶到大型餐廳廚房（商業規模）進行實際量產測試；Stage 3 則是餐廳正式營業後，持續監控每一道菜的品質一致性。接下來的三張表格就是這本日記的詳細記錄。

        

    

## Table 7.1-1: Stage 1 - Process Design (Large Molecule Example)

    

        

## Original Text

        
        

### Process Development - Establish TPP & QTPP

        

        
            
                
                
                
                
            
| Category | Activities | Outputs/Deliverables | Rationale/Examples |
| --- | --- | --- | --- |
            
                ****
                
                
                
            
| Process Development | Establish Target Product Profile (TPP) & Quality Target Product Profile (QTPP) | Humanized Immunoglobin: TPPs and QTPPs were established. Immunological indication: Mechanism of action (MOA) requires both complement-dependent cytotoxicity (CDC) and antibody-dependent cellular cytotoxicity (ADCC) activity; IV administration at a fixed dosage. Liquid formulation with concentration at 20 mg/mL, iso-osmolar solution; material provided in single-use vial with shelf life of at least 24 months at 2-8 °C. | Immunological indication; CDC and ADCC activities; IV at a fixed dosage |
            
                
                
                
            
| Identify CQAs | Presumptive CQAs (inherent attributes from the molecule that provide desired activity, purity, and safety) were identified based on prior knowledge. Potential process parameters that impact the CQAs were identified for each unit operation based on platform information. | Deamidation, aggregate, host-cell protein, residual DNA, etc. |
            
                
                
- 
- 
- 
- 
- 
- 
- 

                
            
| Define Manufacturing Process (Upstream and Downstream) | Prior knowledge, existing risk assessments for similar molecules, and early development data were used to define unit operations: seed train, bioreactor, harvest, Protein A, viral inactivation, column purification 2, column purification 3, viral filtration, and UFDF. In addition:                                              NORs identified                         Raw materials identified with specification                         Cell line characterized to show free from adventitious agents                         Master and working cell banks prepared and characterized                         Analytical method development started                         Initial formulation development initiated. Due to ease of control, frozen condition was initially selected while the liquid formulation was being developed in parallel.                         A Process Design Summary Report was created with preliminary process information. | Seed train, bioreactor, harvest, Protein A, viral inactivation, column purification 2, column purification 3, viral filtration, UFDF |
        

        

        
        

### Process Development - Clinical Manufacturing

        

        
            
                
                
                
                
            
| Category | Activities | Outputs/Deliverables | Rationale/Examples |
| --- | --- | --- | --- |
            
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
- 
- 

                
- 
- 

            
| Process Development | Define Manufacturing Process (Upstream and Downstream) | Clinical Phase 1 & 2 manufacturing:                                              Material was produced for First-in-Human studies, in a GMP facility in a 2000L bioreactor facility, using a scaled-down version of the intended commercial process. Samples were put on stability to establish expiration times.                         Material was produced for Phase 2 in a 2000L bioreactor process using the same GMP facility. Samples were taken and used for characterization studies in small-scale equipment (satellite studies) to define the eventual commercial process. Product was analyzed for the following (at a minimum):                                                              Appearance and identity                                 Purity (IEC, SEC, CE SDS, endotoxin, bioburden, impurities)                                 Potency                                                                               Initial product acceptance criteria based on targets were set from other molecules and early development studies. Stability studies were initiated using a subset of the release testing assays.                         Most of the analytical methods were qualified at this stage.                                          Clinical Phase 3 manufacturing was performed in a different 2000L bioreactor facility. Prior to the start of Phase 3 material manufacture, some of the following activities were performed:                                              Tech transfer process was conducted to transfer the process from the Phase 2 facility to a Phase 3 facility                         Comparability study (DS & DP) protocols were generated                         Batch records were created                         Operator training was performed                         Primary containers were finalized                                          After Phase 3 material manufacture, the Process Design Summary Report was updated (e.g., CQAs and CPPs, unit operations). Most of the analytical methods were qualified at this stage. | Due to ease of control, frozen condition was initially selected while the liquid formulation was being developed in parallel.                                              Upstream Process Parameters: Viable cell density, % Viability, Temperature, pH, Dissolved oxygen                         Downstream Process Parameters: Protein load, Protein concentration, Elution buffer pH, Viral inactivation pH, Diafiltration volumes                                          A team of scientists led the tech transfer effort by performing facility fit, generating technical reports, training operators, and transferring manufacturing process and associated scale-down models. |
        

        

        
        

### Process Development - Quality Risk Assessment

        

        
            
                
                
                
                
            
| Category | Activities | Outputs/Deliverables | Rationale/Examples |
| --- | --- | --- | --- |
            
                ****
                
                
- 
- 

                
            
| Process Development | Quality Risk Assessment (QRA) | A modified FMEA was used to perform a QRA. A template created for similar products was used as a starting material, with appropriate modifications. Using the risk assessment process:                                              Initial categorization of process parameters was performed                         Initial framework for control strategy was created based on high risks identified in the risk assessment | A template created for similar products was used as a starting material, with appropriate modifications. High and medium risks identified in the risk assessment were considered to elaborate the control strategy. |
        

        

        
        

### Process Characterization

        

        
            
                
                
                
                
            
| Category | Activities | Outputs/Deliverables | Rationale/Examples |
| --- | --- | --- | --- |
            
                ****
                
                
                
            
| Process Characterization | N/A | Process characterization studies were designed based on prioritization developed from risks identified in the QRA. Statistical methods involving DoEs (screening designs to full factorial) were used to understand interactions of high-risk parameters and a design space developed wherever possible. Scale-down models were created and tested; some required qualification (e.g., virus clearance). In these cases, protocols were created and approved by Quality. Based on characterization and small-scale model studies, operating ranges for process parameters were finalized. Acceptance ranges for performance parameters were established. | Downstream process determined that acidic variants impacted biological activity. Placed tighter controls on in-process hold times to control level of acidic variants. Updated Quality Risk Assessment and the Control Strategy. Increased the concentration of final bulk to save on storage capacity. |
            
                
                
                
            
| Finalize CQAs and CPPs | Based on process characterization and scale-down model studies, the QRA was updated, which in several cases required re-scoring. In a cross-functional team, the CQAs and CPPs were reviewed and finalized. The final CQAs and CPPs were subject to approval by the Health Authorities wherever applicable. The control strategy was updated based on the understanding of CQAs, CPPs, process controls, and detection capabilities. | N/A |
            
                
                
                
            
| Documenting Process Design | The Process Design Summary Report was updated (CQAs, CPPs, unit operations, operating ranges, specifications, and acceptance criteria and controls). A commercial manufacturing site was identified (12K bioreactor capacity), and a team of scientists and process engineers performed a facility fit analysis to identify any gaps in equipment capabilities. Tech transfer process was initiated to the commercial site. A tech transfer risk assessment was performed to understand the high risks. Scale-down model process transfer was also started in parallel. Around this time, the analytical method validation was completed. | N/A |
        

        

        
        

### Process Validation Master Plan & Equipment Qualification

        

        
            
                
                
                
                
            
| Category | Activities | Outputs/Deliverables | Rationale/Examples |
| --- | --- | --- | --- |
            
                ****
                
                
                
            
| Process Validation Master Plan (PVMP) | N/A | Specific validation protocols were identified. The process validation strategy and ancillary studies were described in the plan. | N/A |
            
                ****
                
                
                
            
| Process Qualification | Equipment, Utilities, and Facility Qualification | The facility fit assessment identified the requirement of a larger scale centrifuge. Based on user requirements and design specifications, the new centrifuge was ordered. After FAT and SAT, the equipment was commissioned and qualified. To understand the control required, a risk assessment was performed. | N/A |
        

        

    

    

        

## 導師解析 Tutorial Commentary

        

            

#### 核心概念解析 Key Concepts

            

**TPP / QTPP (目標產品概況 / 品質目標產品概況)：**TPP 描述產品的預期臨床特性（如適應症、給藥途徑、劑量），而 QTPP 則將這些臨床需求轉化為可量測的品質屬性目標。兩者是 Stage 1 的起點，決定了後續所有開發方向。

            

**CQA (關鍵品質屬性)：**本例中的推定 CQA 包括 deamidation（脫醯胺）、aggregate（聚集體）、host-cell protein (HCP, 宿主細胞蛋白)、residual DNA（殘留 DNA）等。這些屬性直接影響產品的活性、純度和安全性。

            

**DoE (實驗設計)：**從篩選設計到全因子設計，統計方法用於理解高風險參數之間的交互作用，並在可能的情況下建立設計空間 (Design Space)。

            

**FMEA (失效模式與效應分析)：**一種結構化的風險評估工具，用於識別製程中可能的失效模式、評估其嚴重性、發生機率和可偵測性。本例使用修改版的 FMEA 進行品質風險評估 (QRA)。

        

        

            

#### 重點提示 Key Notes

            

Table 7.1-1 展示了 Stage 1 的系統化方法，有幾個關鍵學習點：

            

                
- **平台知識的運用：**利用相似分子的既有風險評估和平台資訊作為起點，這正是 KM 的核心價值所在

                
- **臨床製造的演進：**從 Phase 1/2（2000L 生物反應器）到 Phase 3（不同設施的 2000L），每次轉移都需要技術轉移流程

                
- **製程表徵的發現：**下游製程發現酸性變異體影響生物活性，因此對製程中間體保持時間實施更嚴格的控制 -- 這是知識驅動決策的絕佳範例

                
- **Scale-down Model（縮小模型）：**用於製程表徵研究，某些需要確認（如病毒清除），必須有品質部門核准的方案書

                
- **從 12K 生物反應器的商業製造廠選定到設施適配性分析，展示了 Scale-up 過程中的關鍵考量**

            

        

        

            

#### 比喻說明 Analogy

            

FMEA 就像是建築師在蓋房子前的「災害模擬」-- 先想像地震、颱風、水災等各種災害（失效模式），評估每種災害的破壞力（嚴重性）、發生機會（發生機率）、以及預警系統的有效性（可偵測性），然後據此設計防護措施。在製程驗證中，我們對每個單元操作進行同樣的系統性分析。

        

        

            

#### 實務應用 Practical Application

            

**CDMO 情境：**當 CDMO 接收新客戶的單株抗體產品時，可以參考此表格建立標準化的 Stage 1 檢查清單：

            

                
- 是否已建立 TPP/QTPP？

                
- 推定 CQA 是否基於先驗知識和平台資訊？

                
- 是否使用結構化風險評估工具（如 FMEA）？

                
- 縮小模型是否已建立並經過確認？

                
- 設施適配性分析是否已完成？

            

        

        

            

#### 練習思考 Practice Questions

            

                
1. 為何本例中先選擇冷凍條件而非液體配方？這體現了什麼樣的風險管理思維？

                
2. 從 Phase 2 到 Phase 3 的技術轉移涉及哪些關鍵活動？為何比較性研究 (Comparability Study) 在此階段至關重要？

                
3. 製程表徵發現酸性變異體影響生物活性後，採取了哪些具體的控制策略調整？

            

        

    

## Table 7.1-2: Stage 2 - Process Qualification (Large Molecule Example)

    

        

## Original Text

        
        

### PPQ - Technology Transfer and Engineering Runs

        

        
            
                
                
                
                
            
| Category | Activities | Outputs/Deliverables | Rationale/Examples |
| --- | --- | --- | --- |
            
                ****
                
                
                
            
| Process Performance Qualification (PPQ) | Technology Transfer and Engineering Runs | The transfer process used engineering runs to demonstrate that the process worked and to fine-tune the operation set points. Two engineering runs were performed using GMP materials with draft batch production records. These runs enabled training on the new process for the operators. The Process Design Summary Report was updated with any changes to process parameters. | N/A |
        

        

        
        

### PPQ - Process Performance Qualification Readiness Assessment

        

        
            
                
                
                
                
            
| Category | Activities | Outputs/Deliverables | Rationale/Examples |
| --- | --- | --- | --- |
            
                ****
                
                  
  
- 
- 
- 
- 
- 
- 

                
            
| Process Performance Qualification (PPQ) | Process Performance Qualification Readiness Assessment | At a stage gate, a checklist was used to ensure that all the processes and procedures were in place to start the PPQ process. PPQ protocols were drafted and approved. A sampling plan that described the sample points, number of samples, statistical justification of parameters, frequency of reviews, and statistical and analytical methods was created and approved. A CPV plan was created to identify the parameters and attributes to be tested and monitored during PPQ and Stage 3 (CPV). Some of the elements included in the plan were justification of parameters, frequency of statistical procedures used to determine state of control, and handling of excursions.                                          A qualitative decision tool was used to determine the number of PPQ runs. Some of the factors considered were:                                              Process variability (e.g., novel and difficult scale-up unit operations)                         Raw material variability                         Age of equipment and facility                         Level of commercial manufacturing experience of operators                         Clinical manufacturing experience                         Robustness of control strategy                                          The tool suggested a range of 5-6 runs for the PPQ campaign. Discussions with the Health Authorities are helpful and, generally, a proposal is submitted for the number of runs. | PPQ batches following the first PPQ batch (full-scale) were performed at approximately 10% scale. |
        

        

    

    

        

## 導師解析 Tutorial Commentary

        

            

#### 核心概念解析 Key Concepts

            

**Engineering Runs (工程運轉)：**這是正式 PPQ 之前的試運行，目的在於驗證製程在新設備/設施中是否可行，並微調操作參數。工程運轉使用 GMP 物料和草稿版批次記錄，同時為操作人員提供培訓機會。這些批次通常不用於商業發行。

            

**PPQ Readiness Assessment (PPQ 準備度評估)：**這是一個「階段關卡」(Stage Gate) 的概念 -- 在進入 PPQ 之前，必須確認所有前置條件都已滿足。這包括方案書核准、取樣計畫建立、CPV 計畫制定等。

            

**CPV Plan (持續製程驗證計畫)：**不僅用於 Stage 3，也涵蓋 PPQ 階段的監控。計畫中應包含參數選擇依據、統計程序頻率、管制狀態判定方法及偏差處理方式。

        

        

            

#### 重點提示 Key Notes

            

**PPQ 批次數量的決定：**本例使用「定性決策工具」建議 5-6 批 PPQ 運轉。這個數字不是隨意決定的，而是基於多個風險因素的綜合評估：

            

                
- **製程變異性：**新穎或困難的放大操作單元需要更多批次

                
- **原料變異性：**原料供應商變異大則需要更多驗證

                
- **設備和設施年齡：**老舊設備可能引入額外變異

                
- **操作人員經驗：**商業製造經驗不足則需要更多批次來建立信心

                
- **控制策略的穩健性：**控制策略越完善，可能需要的批次數越少

            

            

注意：第一批 PPQ 以全規模進行，後續批次以約 10% 規模進行 -- 這是一種平衡風險和成本的策略。

        

        

            

#### 比喻說明 Analogy

            

PPQ 準備度評估就像飛機起飛前的「起飛前檢查清單」。機長不會因為引擎聽起來「似乎沒問題」就起飛，而是必須逐項確認每個系統都正常運作。同樣地，PPQ 的「階段關卡」要求所有前置條件 -- 從方案書核准到人員培訓 -- 都必須完成並記錄在案，才能開始正式的驗證批次。

        

        

            

#### 實務應用 Practical Application

            

**CDMO 情境：**對於 CDMO 而言，PPQ 批次數量的決定特別敏感，因為它直接影響：

            

                
- **成本：**每批 PPQ 的原料、人力和測試成本可能高達數百萬美元

                
- **時程：**生物製劑的生產週期長，額外批次可能延遲數月上市時間

                
- **法規溝通：**與 Health Authorities 的事前討論有助於避免申請階段的意外要求

            

            

建議 CDMO 建立標準化的 PPQ 批次數決策框架，並保留完整的決策理由記錄，以便在法規審查時提供支持。

        

        

            

#### 練習思考 Practice Questions

            

                
1. 為什麼本例選擇 5-6 批而非傳統的 3 批 PPQ？這與哪些風險因素有關？

                
2. 工程運轉與 PPQ 批次的主要區別是什麼？工程運轉的批次能否計入 PPQ？

                
3. 「第一批全規模、後續約 10% 規模」的策略背後邏輯是什麼？這種做法有哪些優缺點？

                
4. 如果 PPQ 準備度評估發現某項前置條件不滿足，應如何處理？

            

        

    

    

### 本節重點回顧 Section Summary

    

        
- **QRM 與 KM 的共生關係：**全面的品質風險管理 (QRM) 依賴完善的知識管理 (KM) 系統。資訊或數據的任何缺口都會直接削弱風險評估的穩健性，增加產品品質風險

        
- **設備維護作為 KM 典型案例：**設備與產品、手動操作之間的交互作用知識必須系統化管理，在 CDMO 多產品環境中尤為重要

        
- **Stage 1 的系統化方法：**從 TPP/QTPP 建立 → CQA 鑑別 → 製程定義 → QRA（FMEA）→ 製程表徵（DoE）→ CQA/CPP 最終確認 → 製程設計總結報告，形成完整的知識累積鏈

        
- **平台知識的槓桿效應：**利用相似分子的既有知識和風險評估模板作為起點，是加速開發同時控制風險的關鍵策略

        
- **知識驅動的製程優化：**製程表徵階段的發現（如酸性變異體影響活性）直接推動控制策略的更新，展現了 KM 的實際價值

        
- **Stage 2 的嚴謹準備：**工程運轉、PPQ 準備度評估、取樣計畫、CPV 計畫等環環相扣，PPQ 批次數基於多維度風險因素的定性決策工具確定

        
- **法規溝通的重要性：**與 Health Authorities 就 PPQ 策略進行事前討論，有助於對齊期望並避免審查階段的意外延遲

    

    

PDA Technical Report No. 60 (Revised 2026): Process Validation: A Lifecycle Approach

    

Section 7.0: Use of Knowledge Management in Process Validation Examples | p111-p120

    

© 2026 Parenteral Drug Association, Inc.

↑

## Section A1a: Practical Examples 實務範例 (p121-p135)

# Appendix I: Practical Examples & Section 8.0 References

    

附錄 I：實務範例（續）與第 8.0 節 參考文獻

    

PDA Technical Report No. 60 (Revised 2026) — Process Validation: A Lifecycle Approach | p121 - p135

    

### 本章學習目標

    

        
- 理解大分子產品 Stage 3 持續製程確認 (CPV) 的監控計畫、產品技術團隊 (PTT) 與規格檔案管理

        
- 掌握小分子（注射劑）產品 Stage 1 製程設計中 CQA/CPP 鑑別、風險評估與規模放大的實務做法

        
- 了解小分子產品 Stage 2 PPQ 執行策略，包含設備確認、技術轉移、安定性批次與 PPQ 批次管理

        
- 認識小分子產品 Stage 3 CPV 監控指標（PpK/CpK）、PTT 職責與 NDA 補充申請的實務運作

        
- 建立對 PV 生命週期法 (Lifecycle Approach) 完整參考文獻體系的認識，連結 ICH、FDA、EMA 與 PDA 標準

    

## Table 7.1-3 Stage 3: Continued Process Verification (Large Molecule Example) — Continued

    

        

### Table 7.1-3 Stage 3: Continued Process Verification (Large Molecule Example)

        

        
            
                
                    
                    
                    
                    
                
| Category | Activities | Outputs/Deliverables | Rationale/Examples |
| --- | --- | --- | --- |
            
            
                
                    ****
                    ****  
  
  
  
  
  
  

                      
  
****  
  
****
                    
                
| Continued Process Verification (CPV) | Process Monitoring                         The CPV plan that was developed prior to the start of the PPQ was submitted to the Health Authorities.                         Testing and monitoring were performed during Stage 3 according to the CPV plan.                         CPV data review was conducted as described in the CPV plan.                         The monitoring reports generated supplemented the Annual Product Review. | The CPV plan was used throughout the product lifecycle and helped to ensure that the process was in a state of control.                         Preliminary control limits were established after 15 commercial batches (including PPQ batches) were manufactured.                         Final control limits were established after 30 commercial batches had been manufactured. |  |
                
                    ****  
  
  

                    
                    
                
| Product Technical Teams (PTT)                         Each commercial product had a Product Technical Team (PTT) that helped to oversee the process for the remainder of the product's lifetime.                         The PTT was also responsible for reviewing data from multiple production sites to ensure consistent process performance and product quality. | The PTT is cross-functional, including Operations, Process Development, Technical/Engineering Groups (Manufacturing, Science, and Technology—MSAT), Analytical, Quality, and Statistics. The team is responsible for reviewing the processing data that accumulates during commercial production. The PTT can recommend process changes and helps to ensure continuous improvement. |  |
                
                    ****  
  
  

                    
                    
                
| Specification File                         A manufacturing process specifications file was generated at the time of the license submission.                         The file was updated upon approval and contained the licensed parameters that had been agreed to by the agency. | The file is maintained throughout the product's lifetime and is to be updated to include in-process and specification changes that might occur. |  |
            
        

        

    

    

        

### 導師解析 Tutorial Commentary

        

            

#### 核心概念解析 Key Concepts

            

**Continued Process Verification, CPV（持續製程確認）：**這是 PV 生命週期的 Stage 3，製程已獲得核准並進入商業化生產。CPV 的核心目標是透過**持續監控**證明製程始終維持在「受控狀態 (State of Control)」。

            

**Preliminary vs. Final Control Limits（初步 vs. 最終管制界限）：**本範例展示了一個分階段建立管制界限的策略：先以 15 批建立初步管制界限，再累積至 30 批後確立最終管制界限。這反映了統計上需要足夠的數據量才能得到可靠的製程能力估計。

            

**Product Technical Team, PTT（產品技術團隊）：**這是一個跨職能團隊，涵蓋製造、製程開發、MSAT、分析、品質與統計。PTT 負責審查商業生產的累積數據，並可建議製程變更以實現持續改善。

        

        

            

#### 比喻說明 Analogy

            

如果把 Stage 2 PPQ 比喻成「新餐廳的試營運」，那 Stage 3 CPV 就像是餐廳正式開業後的**日常品質巡查**。你需要持續監控廚師的出餐品質、客人投訴率、食材耗損等指標。開業前 15 天先建立「初步基準線」，觀察到第 30 天才確立「正式標準」。而 PTT 就像是由主廚、經理、衛生主管、會計等各部門代表組成的「品質管理委員會」，定期審查營運數據。

        

        

            

#### 重點提示 Key Notes

            

**CPV 計畫必須在 PPQ 之前就開發完成**，並提交給主管機關。這意味著在 Stage 2 啟動前，企業就必須規劃好 Stage 3 的監控策略。這體現了生命週期方法的「前瞻性思維」。

            

**規格檔案 (Specification File)** 是一份活文件 (Living Document)，從許可證送件時建立，核准後更新為官方認可的參數範圍，並在產品整個生命週期中持續維護。任何製程內或規格的變更都必須記錄在此檔案中。

        

        

            

#### 練習思考 Practice Questions

            

                
1. 為什麼要分兩階段（15 批和 30 批）來建立管制界限？如果只用 PPQ 的 3-5 批數據來設定管制界限，可能會產生什麼問題？

                
2. PTT 中為什麼需要包含統計人員？他們在 CPV 中扮演什麼角色？

                
3. 如果你的公司有多個生產據點生產同一產品，PTT 審查跨站數據時應該關注哪些方面的一致性？

            

        

    

## 7.2 Small Molecule (Parenteral)

    

        

### 原文內容 Original Text

        

An example of the three stages of PV for an organic, parenteral dosage form is provided in Table 7.2-1 (Stage 1), Table 7.2-2 (Stage 2), and Table 7.2-3 (Stage 3).

    

    

        

### 導師解析 Tutorial Commentary

        

            

#### 核心概念解析 Key Concepts

            

**小分子注射劑 (Small Molecule Parenteral)：**與前面 Section 7.1 的大分子（生物藥品）範例不同，本節聚焦於**有機小分子的注射劑型**。小分子藥品的製程驗證雖然也遵循三階段生命週期法，但在具體操作上有其特點：

            

                
- 通常不涉及細胞培養或發酵等複雜生物製程

                
- API 來自化學合成，可能有多個供應商

                
- 製程中的 CQA 更集中在溶解度、pH、含量均一性、雜質等化學特性

                
- 可能涉及無菌充填 (Aseptic Filling) 或終端滅菌 (Terminal Sterilization) 的決策

            

        

        

            

#### 重點提示 Key Notes

            

本範例涉及一個**無臨床試驗**的產品（治療強度基於生物等效性 Bioequivalence），因此臨床製造經驗相對有限。這影響了 Stage 1 的知識積累程度和風險評估策略。

        

    

## Table 7.2-1 Stage 1: Process Design (Small Molecule Example)

    

        

### Table 7.2-1 Stage 1: Process Design (Small Molecule Example)

        

        
            
                
                    
                    
                    
                    
                
| Category | Activities | Outputs/Deliverables | Rationale/Examples |
| --- | --- | --- | --- |
            
            
                
                
                    ****
                    ****
                      
  

                    
                
| Process Development | Establish TPP & QTPP | Parenteral drug solution dosage form: sterile formulation in three different strengths, intended to comply with the USP compendial requirements for injection.                         Target shelf life at least 24 months at 25 °C. | The product development process had no clinical trials; therapeutic strength relied on bioequivalence. Thus, clinical manufacturing experience was minimal compared to a new chemical entity. |
                
                
                    ****
                      
  

                    
                
| Identify Critical Quality Attributes | Active collaboration took place between R&D, development, formulators, and analytical scientists to identify potential CQAs and methods for detection. Experience with past liquid dosage form manufacturing was vital in identifying CQAs.                         Assays used to release product and test methods to release API were developed and verified at Stage 1 with the intention that they would be validated and transferred to the manufacturing site to support PPQ. | N/A |
                
                
                    ****
                      
  
  
  

                    
- 
- 
- 
- 
- 
- 
- 
- 

                
| Define Manufacturing Process | Development was based on experience with previous and existing processes, excipients, and capabilities at the firm's current manufacturing sites. The lab-scale formulation batches were produced using identical primary packaging material. All raw materials were in the firm's GMP system.                         A DoE concluded that the DP was heat-sensitive and, therefore, would be manufactured aseptically and not terminally sterilized. Followed by lab feasibility/formulation batches, the pilot-scale formulation stability batches (with at least three formulation pH levels) were prepared in an R&D pilot plant. The solution stability due to maximum temperature during compounding, filtration, and filling and its impact on the drug product (DP) degradation rate and impurity profile was established.                         At least two API supplier batches were considered. Intentions were to use standard and familiar unit operations and minimize the time to develop the process. The process for the formulation studies performed at pilot scale (at least 10% of commercial scale) established knowledge on process variability, CPP, and CQAs. The process scale-up parameters, manufacturing specification, analytical, and biological specifications were established through pilot-scale runs. | Samples from these pilot batches of 400 L were analyzed and tested to narrow down formulations based on compatibility and stability due to:                                                      Light sensitivity                             Oxygen sensitivity                             Formulation pH                             Container material incompatibility                             Manufacturing material incompatibility                             Thermal stability                             Color formation                             Any anticipated stability-limiting factors                                                  Solution temperature controls during mixing, filling, and storage were also followed as controls. |
                
                
                      
  
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
- 
- 
- 
- 

- 
- 
- 
- 

                
| Scale-up models for unit operations were developed. R&D personnel provided justification for the models and documented the limitations through design and stage-gate review processes.                         The Process Evaluation (PE) studies were initiated prior to manufacturing of the stability batch using the bracketing approach at the scale-up production GMP manufacturing site. A total of two scale-up batches of highest DP concentration using API from two different suppliers were manufactured. To establish and understand all CPP and CQA, both batches were produced at full scale. The study design was based on a risk assessment accompanied by an extended in-process control program defined in protocols and product-/batch-specific sampling plans. These studies established:                                                      Drug dissolution profile                             Degradation over the manufacturing process                             Solution–filter compatibility                             Solution hold time                             Solution closure–container compatibility                                                  Extensive sampling and specification evaluations were conducted. Characterization and comparisons among the batches for both active ingredient and finished product were performed. The data demonstrated that the DP met the finished product specification when produced using the worst-case scenario.                         Research personnel were primarily responsible for these batches, but manufacturing site personnel were also involved. | Tests of the quality attributes included:                                                      Appearance and identity                             Purity test                             Solution pH                             Osmolality                             Dissolution profiles                             Process impurities                             Particulate matter                             Microbiological attributes                             Sterility assurance levels                                                  These studies established CPPs:                                                      Mixing speed (RPM)                             Temperature                             Dissolved oxygen                             Mixing time                                                  There were 10 sampling points throughout the PE batch of 2800 L during filling. These encompassed multiple (e.g., triplicate) samples at the beginning, middle, and end of the process step. This approach is patterned after other heterogeneous-system sampling practices, such as the FDA's bulk-powder blend sampling schemes. |
                
                
                    ****
                    ****
                    
                    
                
| Process Characterization | Perform Quality Risk Assessments | Formal risk assessments were performed during development. The scope was limited to the manufacturing risks of the product and processes. An approval of this document indicated that the residual risks and associated risk scores with development DOE activities were acceptable to proceed with an entry into the stability design phase. Well after Stage 2, other formal risk assessments were conducted during Stage 3 and during a long and successful commercial manufacturing phase. This included linking the worst-case scenario for various operations, which aided in the development of the design space. | Risk Ranking and Filtering, which included severity and probability components, was used. This is a simpler tool to understand as it enables focusing on the most important factors. Other tools used were FMEAs and Cause-and-Effect diagrams. |
                
                
                    ****
                      
  

                    
                
| Perform Characterization Activities | Unit operations were optimized to improve efficiency and robustness. Using experimental and scale-up studies, scientists were able to establish scale-up process parameters and perform evaluations prior to stability runs.                         Improvements in the process included enhancing immediate dissolution through solution mixing-process optimization, in-tank solution pH, and a dissolved oxygen monitoring system. Process characterization or evaluation studies were designed using a DOE approach to minimize experiments. There were numerous research and scale-up/transfer reports, along with qualification and process understanding reports. Qualification of the most critical excipients from a different vendor was performed on the full-scale DP. | Qualified excipients were those that impacted CQAs, such as the ones that controlled pH and osmolality. |
                
                
                    ****
                      
  

                    
- 
- 
- 
- 
- 
- 
- 
- 

                
| Finalize CQAs and CPPs | Issues with respect to API dissolution occurred during development and scale-up due to variations in raw material particle size. The scale-up process parameters for agitation and solution temperature were modified and evaluated from model calculations. Manufacturing procedure specifications were modified and evaluated to confirm finished-product CQAs.                         CQAs for the solution product were identified early in development, refined during Stage 1, and implemented as final specification in the manufacturing procedure. These generally inherent attributes from the molecule and formulation provided desired activity, purity, and safety. The review and approval of the CQAs was performed by a qualified team and documented in a formal report. The process parameters that impacted the CQAs were identified in PV protocols and their criticality was determined from results of the PV studies. | CQAs were:                                                      Solution pH                             Dissolved oxygen                             Drug dissolution and homogeneity                             Process (i.e., drug) impurities                             Drug concentration (potency)                             Osmolality                             Microbiological attributes                             Sterility assurance levels |
                
                
                    ****
                    ****
                      
  
  
  

                    
- 
- 
- 

                
| Validation | Document Process Design | Analytical methods were not validated for PE/demonstration batches; however, they were validated and transferred from R&D to manufacturing sites prior to stability batch production at a GMP site. Factors included specificity, forced degradation, precision, linearity, LOD/LOQ, accuracy, and robustness.                         Scientists were encouraged to write technical reports that summarized different aspects of the process. In general, they focused on a single unit operation, describing changes and improvements. A technical review reference document was also prepared. It summarized all of the developmental reports covering methods, ranges, conditions, and knowledge of the entire process.                         These documents are updated each time significant process changes occur. The technical review reference document and associated specifications and procedures are filed in a central archiving system and are then used by manufacturing for generation of batch production records. | Analytical methods were fit-for-purpose and dependable but not validated initially because:                                                      The knowledge-gathering phase with experimental batches early in the lifecycle were carried out.                             Draft specifications were used, and case changes were made in the ranges.                             It saved on the timeline of analytical method validation at this stage.                                                  Upon site transfer, lab analysts will be present for method validation according to internal SOPs. These will also meet ICH Q2, USP, or other regulatory or compendial standards. |
                
                
                    ****
                      
  

                    
                
| Draft Process Validation Master Plan (PVMP) | A detailed PVMP was developed that identified specific studies to be performed. Individual PV protocols were written for each batch. The PPQ batches were completed just before the expected NDA approval.                         In addition to new PV studies, the plan identified studies and appropriate references that had been executed for other projects but would be used to support this product. | The PV plan was initiated prior to Stage 2 to identify supportive information needed from Stage 1. However, the formal PVMP was finalized during Stage 2, when all attributes, parameters, and systems were known. |
            
        

        

    

    

        

### 導師解析 Tutorial Commentary

        

            

#### 核心概念解析 Key Concepts

            

**Target Product Profile, TPP & Quality Target Product Profile, QTPP（目標產品概況與品質目標產品概況）：**本範例是一個三種濃度的無菌注射液劑型，目標保存期限至少 24 個月（25 °C）。QTPP 的設定是整個 Stage 1 的起點，所有後續的 CQA 鑑別、CPP 確認都圍繞著 QTPP 展開。

            

**Process Evaluation, PE（製程評估）：**這是 Stage 1 中一個關鍵步驟，在安定性批次生產之前進行。本範例使用了兩批全規模 PE 批次（使用來自兩個不同供應商的 API），以建立對 CPP 和 CQA 的全面理解。

            

**Process Validation Master Plan, PVMP（製程確效主計畫）：**一份詳細的總體計畫，列出所有需要執行的確效研究。PVMP 在 Stage 1 即開始規劃，但在 Stage 2 時才最終定案，因為此時所有屬性、參數和系統都已確定。

        

        

            

#### 比喻說明 Analogy

            

Stage 1 的製程設計就像是建造一棟大樓前的**建築設計階段**。你需要先決定大樓的用途（QTPP = 三種濃度的注射液），再進行地質勘察（CQA 鑑別），接著做小模型測試（實驗室規模），然後做結構力學計算（DoE 實驗），最後蓋一個實體模型屋（中試規模）來驗證設計可行性。PE 批次就像是在真正的建築基地上蓋一棟「示範屋」，用來驗證所有的設計參數在實際條件下是否可行。

        

        

            

#### 重點提示 Key Notes

            

**DoE 結果決定了滅菌策略：**本範例中，DoE 研究發現藥品對熱敏感，因此決定採用**無菌製程 (Aseptic Manufacturing)** 而非終端滅菌。這是一個影響深遠的決策，直接影響了設施設計、設備選擇、人員培訓和法規策略。

            

**分析方法的階段性驗證策略：**PE/示範批次階段使用的分析方法是「適用即可 (Fit-for-Purpose)」但尚未正式驗證。正式驗證在技術轉移至 GMP 生產基地時才完成。這體現了**階段適當性方法 (Phase-Appropriate Approach)** 的精神。

            

**最差情境 (Worst-Case Scenario)：**PE 批次在最差條件下生產，以證明即使在極端條件下，產品仍能符合成品規格。這是 PV 中「挑戰製程極限」的核心理念。

        

        

            

#### 批次規模與取樣策略 Batch Scale & Sampling

            

本範例的關鍵數字：

            

                
- **中試規模：**400 L（至少商業規模的 10%）

                
- **PE 批次規模：**2,800 L（全規模）

                
- **取樣點：**10 個取樣點，涵蓋製程開始、中間、結束

                
- **每點取樣：**三重複 (Triplicate) 取樣

                
- **API 供應商：**至少 2 個來源

                
- **配方 pH 水準：**至少 3 個

            

        

        

            

#### 實務應用 Practical Application

            

作為 CDMO，當客戶帶著一個小分子注射劑配方來尋求製造服務時，你應該在 Stage 1 階段就要求客戶提供以下資訊：

            

                
- API 的熱穩定性數據（決定無菌充填 vs. 終端滅菌）

                
- API 對光和氧氣的敏感性（影響製造環境控制）

                
- API 在不同 pH 下的溶解度和穩定性

                
- 已知的 API 供應商及批次間差異

                
- 容器材料相容性數據

            

            

這些資訊將直接影響你的報價、時程和設施配置規劃。

        

        

            

#### 練習思考 Practice Questions

            

                
1. 為什麼本範例選擇在 PE 批次中使用來自兩個不同供應商的 API？這對 CPP 和 CQA 的建立有什麼意義？

                
2. DoE 研究發現藥品「對熱敏感」後，決定採用無菌製程而非終端滅菌。請列出這個決策對後續 Stage 2 和 Stage 3 的至少三個影響。

                
3. 分析方法在 PE 階段「適用即可」但未正式驗證，這在法規上是否可接受？為什麼？

            

        

    

## Table 7.2-2 Stage 2: Process Qualification (Small Molecule Example)

    

        

### Table 7.2-2 Stage 2: Process Qualification (Small Molecule Example)

        

        
            
                
                    
                    
                    
                    
                
| Category | Activities | Outputs/Deliverables | Rationale/Examples |
| --- | --- | --- | --- |
            
            
                
                
                    ****
                    ****
                      
  

                    
- 
- 
- 
- 
- 
- 

                
| Process Performance Qualification (PPQ) | Perform Equipment, Utilities, and Facility Qualification | The extent of the qualification and verification of the equipment was based on risk assessment. The critical aspects (e.g., critical functions, controls, attributes) and other system components or functions were verified to be fit for their intended use. Equipment and utilities had to be in qualified states of their own for any product used. This activity was carried out according to plant procedures to maintain a state of control.                         Qualifications and calibrations were confirmed. Any system for which proper operation was fully ensured through routine calibration and/or preventive maintenance programs may not have required formal qualification. | Qualification was performed for:                                                      Agitator mixing speeds                             Sensors, such as level, volume, and temperature measurements                             In-tank pH measurements                             Oxygen measurements                             Solution filling system                             Storage chambers (frozen) |
                
                
                    ****
                      
  
  
  
  
  
  
  

                    
- 
- 
- 
- 

  
  

                
| Execute Technology Transfer and Engineering Runs | Manufacturing, analytical, and biological procedure specs were transferred to the manufacturing site based on process evaluation batch results.                         Three stability batches of drug-product strength were produced at 10-15% of commercial-batch volume.                         Three different batches from various API suppliers were factored in among all stability batches (matrix approach). One batch with the highest-strength-per-API supplier was performed using the worst-case scenario for CPP (e.g., solution hold-time). Stability studies were initiated using tank release, in-process testing, and finished-product release-testing assays.                         Analytical and microbiological methods were validated. Assays were performed by a qualified stability operations group. Long-term stability studies for the batches at 2-8 °C/60% RH; 30 °C/65% RH, and 40 °C/75% RH were initiated. For one batch of each strength, stability data were generated for the products, which were stored in an inverted orientation. A formal stability plan was prepared prior to entering stability production and was issued prior to submission. Formal stability production protocols were issued for each code prior to stability production.                         A full-scale commercial “demo” batch was followed by multiple PPQ batches at a manufacturing facility for launch quantities. | The demonstration batch included verifying:                                                      Solution mixing process                             Filling process                             Sterilization process (as applicable)                             Packaging and confirmation of finished product meeting final specifications                                                  For the registration, the different suppliers provided the API batches; everything else in the process remained the same.                         PPQ batches verified the same process parameters and quality attributes used in the demonstration (prevalidation) batch. |
                
                
                    ****
                      
  

                    
- 
- 
- 
- 
- 

                
| Perform Process Performance Qualification Readiness Assessment | Sites for the commercial production process were identified in Stage 1. Readiness for PPQ was confirmed at “Stage gate” meetings.                         PPQs runs took place under nominal, routine conditions. | Ensure finalization of:                                                      Specifications                             Previous reports (e.g., Formulation, PE)                             Equipment and facility qualifications                             Previous batches done at worst-case scenario                             Readiness of other items, (e.g., labeling) |
                
                
                    ****
                    ****  
  
  
  
  
  
  
  

                      
  
  
  
- 
- 
- 
- 
- 

  
  
  
  
  
  
  
  

                
| Manufacture PPQ Campaign Lots | Material requirements to support commercial runs determined the number of runs for the campaign. The DP PPQ campaign consisted of 5 runs, covering 3 batches with the highest strength, 1 batch with the mid-range strength, and 1 batch with the lowest strength of finished product made at commercial-production scale. Additional sampling was performed for the initial PPQ runs and constitutes a bank of samples for future use, if needed (e.g., QC needs, investigation). All runs that met commercial-release criteria could be used to support commercial supply.                         All PPQ batches were performed at nominal conditions.                         A hold study was performed on one of the three highest-strength product batches to establish and validate hold intervals for solution mix, fill, and hold prior-to-sterilization (as applicable).                         Data report of initial analysis of the variation of outputs, such as quality and performance attributes in Stages 1 and 2.                         Cleaning validation that was specific for the new process was performed concurrently with the PPQ runs. | Solution Mixing step: Time, Temp., dissolved oxygen, agitator speed, solution homogeneity by drug assay, and pH–mixing validation.                         Sterile-fill or terminally sterilized finished-product testing: finished-product assay, degradation and impurities, pH, particulate, microbial and sterility testing.                         The number of batches in the entirety of PV Stages 1 and 2 were:                                                      3-6 feasibility batches                             3-6 formulation batches                             1-2 PE batches                             3 stability batches                             5 PPQ batches                                                  Data was analyzed for the total of both stages.                         A slight variation in the number of development and PPQ batches can depend on dosage strengths, complexity of formulation and process, and results of PE and stability batches.                         Five batches provided 3 worst-case scenarios of the most concentrated conditions. Lower concentrations were confirmed with 2 batches.                         A study report was written including data analysis of the variation of outputs (i.e., quality and performance attributes) in Stages 1 and 2.                         Timing of PPQ batches was scheduled in advance of the targeted NDA submission date to allow for initial data in the application. In this case, one month of real-time and accelerated stability data was available. This led to the respective start of the DS and DP PPQ runs 12 and 9 months prior to the anticipated approval date. PPQ batches were thus able to be commercialized. |
                
                
                    ****
                    ****
                    
                    
                
| Stability | Initiate Stability | All batches of DPs from the PPQ campaign were put into the stability program. In addition to real-time testing and the designated storage temperature, stability at accelerated conditions was performed per ICH guidelines. In addition to the primary stability data obtained during the Stage 1 runs, supportive stability data acquired during PPQ runs was also used in the submission package on an as-needed basis. | N/A |
            
        

        

    

    

        

### 導師解析 Tutorial Commentary

        

            

#### 核心概念解析 Key Concepts

            

**Stage Gate Meeting（階段關口會議）：**在正式啟動 PPQ 之前，組織會召開「階段關口會議」以確認 PPQ 的準備就緒狀態。這包括確認規格已定案、先前報告已完成、設備與設施已確認、最差情境批次已完成、以及標籤等其他項目的就緒狀態。

            

**PPQ 批次策略：**本範例的 PPQ 活動包含 5 批，以濃度為基礎進行分配：最高濃度 3 批、中間濃度 1 批、最低濃度 1 批。這種「以最差情境為重點」的策略是科學化的，因為最高濃度通常代表溶解度、穩定性和均一性的最大挑戰。

            

**Matrix Approach（矩陣法）：**在安定性研究中採用矩陣法，將不同 API 供應商的批次分配在安定性批次中，以最少的批次涵蓋最多的變異來源。

        

        

            

#### 比喻說明 Analogy

            

Stage 2 PPQ 就像駕照路考。在考試之前，你需要通過一系列的「準備查核」（Stage Gate）：確認車輛檢驗合格（設備確認）、你已完成足夠的練習時數（PE 批次和安定性批次）、考試路線已確認（製程參數已定案）。正式路考（PPQ 批次）則在標準條件下進行，而不是在暴風雨天或陡峭山路上。因為你已經在練習階段證明了在極端條件下也能安全駕駛（最差情境批次）。

        

        

            

#### 重點提示 Key Notes

            

**PPQ 批次在常規條件（Nominal Conditions）下執行：**這是一個重要的原則。PPQ 的目的是證明製程在**日常正常操作**條件下能穩定生產合格產品，而不是在極端條件下。最差情境的挑戰已在 Stage 1 的 PE 批次中完成。

            

**時程規劃的關鍵：**PPQ 批次的時程必須配合 NDA 送件日期。本範例中，DS PPQ 在預計核准日前 12 個月啟動，DP PPQ 在前 9 個月啟動，以確保送件時有至少 1 個月的即時和加速穩定性數據。

            

**Stage 1 + Stage 2 的總批次數：**本範例展示了完整的批次清單：3-6 批可行性批次 + 3-6 批配方批次 + 1-2 批 PE 批次 + 3 批安定性批次 + 5 批 PPQ 批次 = 總計約 15-22 批。這是整個 PV 生命週期 Stage 1 和 Stage 2 的完整樣貌。

        

        

            

#### PPQ 時程規劃參考 Timeline Planning

            

```

預計核准日 (Approval Date)
    |
    |- 12 個月前：啟動 DS PPQ 批次
    |- 9 個月前：啟動 DP PPQ 批次
    |- 送件時：至少 1 個月即時+加速穩定性數據
    |
安定性條件：
    - 長期：2-8 °C / 60% RH
    - 加速：30 °C / 65% RH
    - 極端：40 °C / 75% RH

PPQ 批次分配（5 批）：
    - 最高濃度：3 批（含 1 批 hold study）
    - 中間濃度：1 批
    - 最低濃度：1 批
            
```

        

        

            

#### 練習思考 Practice Questions

            

                
1. 為什麼 PPQ 批次在「常規條件」下執行，而不是在最差情境下？這與 Stage 1 PE 批次的角色如何互補？

                
2. 本範例的清潔驗證是與 PPQ 批次「同時 (Concurrently)」進行的。請說明同步執行清潔驗證的優點和潛在風險。

                
3. 如果你的產品有三種濃度，為什麼最高濃度需要 3 批而較低濃度只需 1-2 批？請從科學和風險的角度解釋。

            

        

    

## Table 7.2-3 Stage 3: Continued Process Verification (Small Molecule Example)

    

        

### Table 7.2-3 Stage 3: Continued Process Verification (Small Molecule Example)

        

        
            
                
                    
                    
                    
                    
                
| Category | Activities | Outputs/Deliverables | Rationale/Examples |
| --- | --- | --- | --- |
            
            
                
                
                    ****
                    ****
                      
  

                    
                
| Continued Process Verification (CPV) | Process Monitoring | A process monitoring plan and trending were developed during the commercial phase. The monitoring plan was used during routine manufacturing to help ensure that the process remained in a state of control. The process capability metric and trend analysis were performed with positive outcomes.                         Performance metrics (e.g., yields, complaints, deviations) continued during commercial production. | Process-robustness contour plots are used when the number of data points is small (e.g., less than 20-25). Process performance capability indices, such as PpK and/or CpK, are used for 25 or more data points. |
                
                
                    ****
                      
  

                    
                
| Product Technical Teams (PTT) | Each product has a PTT that helps to oversee the process for the remainder of the product's lifetime. The PTT is cross-functional, with representatives from Manufacturing, Process Development, Analytical, Quality, and Statistics. The team is responsible for reviewing the processing data that accumulates during commercial production. It can recommend process changes and help ensure continuous improvement.                         The PTT is also responsible for reviewing data from multiple production sites to ensure consistent process performance and product quality. | Additional studies, including PAT, DOEs, continuous processing experiments, and clinical studies were carried out in a long Stage 3 to improve the product line. |
                
                
                    ****
                      
  

                    
                
| Specification File / NDA Supplements | Numerous supplements to the registrations were made to add new manufacturing and testing facilities. Transfers and PVs were carried out during Stage 3.                         Manufacturing-knowledge documentation files generated at the time of development are updated regularly with all pertinent studies. CQAs and parameters have been agreed to by the Development and Quality organizations. The process-understanding file is maintained throughout the product lifetime and is updated to include any process and/or specification changes. | N/A |
            
        

        

    

    

        

### 導師解析 Tutorial Commentary

        

            

#### 核心概念解析 Key Concepts

            

**PpK 與 CpK（製程績效指標與製程能力指標）：**

            

                
- **PpK (Process Performance Index)：**使用全部數據的標準差計算，反映製程的「整體績效」，適用於初期數據較少時

                
- **CpK (Process Capability Index)：**使用組內標準差計算，反映製程的「固有能力」，需要數據量較大（本範例建議 25 點以上）

                
- 兩者值越大，表示製程越穩定、越遠離規格界限。一般目標值為 ≥ 1.33

            

            

**Process-Robustness Contour Plots（製程穩健性等高線圖）：**當數據點少於 20-25 個時，傳統的製程能力分析可能不可靠。等高線圖提供了一種視覺化方法，展示多個製程參數與品質屬性之間的關係，幫助識別「穩健操作區域」。

        

        

            

#### 比喻說明 Analogy

            

PpK/CpK 就像是學生的考試成績分析。PpK 看的是你所有考試的「整體表現」（包含好的和差的），CpK 則看的是你在「正常發揮」情況下的能力。如果你的 CpK 很高但 PpK 偏低，表示你有能力但不穩定（可能偶爾失常）；如果兩者都高，表示你既有實力又穩定。藥廠追求的目標就是讓 PpK 和 CpK 都 ≥ 1.33，就像學生每次考試都能穩定考在 90 分以上。

        

        

            

#### 重點提示 Key Notes

            

**Stage 3 是一個「漫長且持續進化」的階段：**本範例特別提到，在長期的 Stage 3 中進行了 PAT（製程分析技術）、DOE、連續製程實驗和臨床研究，以改善產品線。這體現了 Stage 3 不僅僅是「維護」，更是「持續改善」的機會。

            

**NDA 補充申請 (NDA Supplements)：**在產品的生命週期中，可能需要新增製造和測試設施。每次新增都需要進行技術轉移和製程確效，並提交 NDA 補充申請。這意味著 Stage 2 的某些活動可能在 Stage 3 中反覆執行。

            

**製程理解檔案的持續維護：**這份檔案不是 PPQ 結束後就歸檔的靜態文件。它必須在產品整個生命週期中持續更新，納入所有新的研究結果和製程/規格變更。

        

        

            

#### 統計工具選擇指引 Statistical Tool Selection

            

```

數據點數量          推薦工具
─────────────────────────────────
< 20-25 個         製程穩健性等高線圖
                    (Contour Plots)

≥ 25 個            PpK 和/或 CpK
                    (Capability Indices)

目標值：PpK, CpK ≥ 1.33
（表示製程中心距離規格界限
  至少 4 個標準差）
            
```

        

        

            

#### 實務應用 Practical Application

            

對於 CDMO 而言，Stage 3 的多廠區管理是核心挑戰。當客戶要求在第二個生產據點生產同一產品時，你需要：

            

                
1. 準備 NDA 補充申請的文件套件

                
2. 執行完整的技術轉移程序（參考 PDA TR65）

                
3. 在新據點重新執行 PPQ（Stage 2 活動在 Stage 3 中循環）

                
4. 將新據點數據納入 PTT 的跨站比較分析

                
5. 更新製程理解檔案以反映多站生產的知識

            

        

        

            

#### 練習思考 Practice Questions

            

                
1. 為什麼在數據點少於 20-25 個時不建議直接使用 CpK？從統計學角度解釋其局限性。

                
2. PTT 在 Stage 3 中可以建議製程變更。請思考：什麼類型的變更可以在既有 NDA 框架內進行，什麼類型需要提交補充申請？

                
3. 如果你觀察到某個 CQA 的 PpK 從 1.5 逐漸下降到 1.1，你會採取什麼行動？

            

        

    

## 8.0 References / 參考文獻

    

        

### 8.0 References

        

            
1. U.S. Food and Drug Administration. *Guidance for Industry: Process Validation: General Principles and Practices*; U.S. Department of Health and Human Services: Silver Spring, Md., 2011.

            
2. European Medicines Agency. *Guideline on Process Validation for Finished Products—Information and Data to be Provided in Regulatory Submissions* [EMA/CHMP/CVMP/QWP/BWP/70278/2012-Rev1,Corr.1]; EMA: London, 2016.

            
3. European Commission. *Eudralux - Volume 4 - EU Guidelines for Good Manufacturing Practice for Medicinal Products for Human and Veterinary Use, Part I, Chapter 5 - Production*; European Commission: Brussels, 2015.

            
4. International Council for Harmonisation. *Quality Guideline Q12: Technical and Regulatory Considerations for Pharmaceutical Product Lifecycle Management*; ICH: Geneva, 2019.

            
5. International Council for Harmonisation. *Quality Guideline Q10: Pharmaceutical Quality System*; ICH: Geneva, 2008.

            
6. Parenteral Drug Association. *Technical Report No. 29 (Revised 2026): Points to Consider for Cleaning Validation*; PDA: Bethesda, Md., 2026.

            
7. Parenteral Drug Association. *Technical Report No. 22 (Revised 2025): Process Simulation for Aseptically Filled Products*; PDA: Bethesda, Md., 2025.

            
8. Parenteral Drug Association. *Technical Report No. 1 (Revised 2007): Validation of Moist Heat Sterilization Processes: Cycle Design, Development, Qualification and Ongoing Control*; PDA: Bethesda, Md., 2007.

            
9. Parenteral Drug Association. *Technical Report No. 3 (Revised 2026): Validation of Dry Heat Processes Used for Depyrogenation and Sterilization*; PDA: Bethesda, Md., 2026.

            
10. International Council for Harmonisation. *Quality Guideline Q13: Continuous Manufacturing of Drug Substances and Drug Products*; ICH: Geneva, 2022.

            
11. International Council for Harmonisation. *Quality Guideline Q2(R2): Validation of Analytical Procedures*; ICH: Geneva, 2023.

            
12. International Council for Harmonisation. *Final Concept Paper, ICH Q14: Analytical Procedure Development and Revision of Q2(R1) Analytical Validation*; ICH: Geneva, 2018.

            
13. Haider, S I. *Pharmaceutical Master Validation Plan: The Ultimate Guide to FDA, GMP, and GLP Compliance*. CRC Press: Boca Raton, Fla., 2002.

            
14. European Medicines Agency. *Concept Paper on the Revision of the Guideline on Process Validation*; EMA: London, 2010.

            
15. International Council for Harmonisation. *Quality Guideline Q7: Good Manufacturing Practice Guidance for Active Pharmaceutical Ingredients*; ICH: 2016.

            
16. ASTM International. *ASTM E2363-23 Standard Terminology Relating to Manufacturing of Pharmaceutical and Biopharmaceutical Products in the Pharmaceutical and Biopharmaceutical Industry*; ASTM: West Conshohocken, Pa., 2023.

            
17. International Council for Harmonisation. *Quality Guideline Q8(R2): Pharmaceutical Development*; ICH: Geneva, 2009.

            
18. International Council for Harmonisation. *Quality Guideline Q5E: Compatibility of Biotechnological/Biological Products*; ICH: Geneva, 2005.

            
19. U.S. Food and Drug Administration. *21 CFR 210.3(b)(9) Definitions*. Code of Federal Regulations.

            
20. Parenteral Drug Association. *Technical Report No. 84: Integrating Data Integrity Requirements into Manufacturing & Packaging Operations*; PDA: Bethesda, Md., 2020.

            
21. International Council for Harmonisation. *Quality Guideline Q6B: Specifications: Test Procedures and Acceptance Criteria for Biotechnological/Biological Products*; ICH: Geneva, 1999.

            
22. European Medicines Agency. *Questions and Answers: Improving the Understanding of NORs, PARs, DSp and Normal Variability of Process Parameters*; EMA: London, 2017.

            
23. CMC Biotech Working Group. *A-Mab: A Case Study in Bioprocess Development*, Version 2.1; ISPE/CASSS: [online], 2009.

            
24. Parenteral Drug Association. *Technical Report No. 42: Process Validation of Protein Manufacturing—Retired*; PDA: Bethesda, Md., 2005.

            
25. International Society for Pharmaceutical Engineering. *ISPE Baseline® Guide Vol. 1: Active Pharmaceutical Ingredients*, Second Edition; ISPE: Bethesda, Md., 2007.

            
26. International Council for Harmonisation. *Efficacy Guideline E6(R2): Integrated Addendum to ICH E6(R1): Guideline for Good Clinical Practice*; ICH: Geneva, 2016.

            
27. ASTM International. *ASTM E2500-25 Standard Guide for Specification, Design, and Verification of Pharmaceutical and Biopharmaceutical Manufacturing Systems and Equipment Science and Risk Based Approach*; ASTM: West Conshohocken, PA, 2025.

            
28. U.S. Food and Drug Administration. *Draft Guidance for Industry: ICH Q12: Implementation Considerations for FDA-Regulated Products*; U.S. Department of Health and Human Services: Silver Spring, Md., 2021.

            
29. Parenteral Drug Association. *Technical Report No.15 (Revised 2026): Validation of Tangential Flow Filtration in Biopharmaceutical Applications*; PDA: Bethesda, Md., 2026.

            
30. Parenteral Drug Association. *Technical Report No. 56 (Revised 2026): Application of Phase-Appropriate Quality Systems and Good Manufacturing Practice to the Development of Biological Product Drug Substance*; PDA: Bethesda, Md., 2026.

            
31. U.S. Food and Drug Administration. *Guidance for Industry and Review Staff: Target Product Profile—A Strategic Development Process Tool*, Draft Guidance; Center for Drug Evaluation and Research. U.S. Department of Health and Human Services: Silver Spring, Md., 2007.

            
32. International Council for Harmonisation. *ICH Q14: Analytical Procedure Development*; ICH: Geneva, 2023.

            
33. Parenteral Drug Association. *Technical Report No. 57: Analytical Method Validation and Transfer for Biotechnology Products*; PDA: Bethesda, Md., 2012.

            
34. Parenteral Drug Association. *Technical Report No. 57-2: Analytical Method Development and Qualification for Biotechnology Products*; PDA: Bethesda, Md., 2015.

            
35. Scott, B; Wilcock, A. Process Analytical Technology in the Pharmaceutical Industry: A Toolkit for Continuous Improvement. *PDA J Pharm Sci Technol* 2006, 60 (1), 17–53.

            
36. Parenteral Drug Association. *Technical Report No. 65 (Revised 2026): Technology Transfer*; PDA: Bethesda, Md., 2026.

            
37. Parenteral Drug Association. *Technical Report No. 54: Implementation of Quality Risk Management for Pharmaceutical and Biotechnology Manufacturing Operations*; PDA: Bethesda, Md., 2012.

            
38. Parenteral Drug Association. *Technical Report No. 54-2: Implementation of Quality Risk Management for Pharmaceutical and Biotechnology Manufacturing Operations, Annex 1: Case Study Examples for Quality Risk Management in Packaging and Labeling*; PDA: Bethesda, Md., 2013.

            
39. Parenteral Drug Association. *Technical Report No. 54-3: Implementation of Quality Risk Management for Pharmaceutical and Biotechnology Manufacturing Operations, Annex 2: Case Studies in the Manufacturing of Pharmaceutical Drug Products*; PDA: Bethesda, Md., 2013.

            
40. Parenteral Drug Association. *Technical Report No. 54-4: Implementation of Quality Risk Management for Pharmaceutical and Biotechnology Manufacturing Operations, Annex 3: Case Studies in the Manufacturing of Biotechnological Bulk Drug Substances*; PDA: Bethesda, Md., 2014.

            
41. Parenteral Drug Association. *Technical Report No. 54-5: Quality Risk Management for the Design, Qualification, and Operation of Manufacturing Systems*; PDA: Bethesda, Md., 2017.

            
42. Parenteral Drug Association. *Technical Report No. 91: Post-Approval Change Management and Implementation for Biologics and Pharmaceutical Drug Products—A User's Guide*; PDA: Bethesda, Md., 2023.

            
43. European Medicines Agency. *Questions and Answers on Variations to an Existing Pharmacovigilance System as described in the DDPS* (update, July 2013); EMA: London, 2013.

            
44. Parenteral Drug Association. *PDA Research: 2021 Post-Approval Change Issues and Impacts Survey*; PDA: Bethesda, Md., 2021; p 57.

            
45. U.S. Food and Drug Administration. *Guidance for Industry: Changes to an Approved NDA or ANDA; Specifications – Use of Enforcement Discretion for Compendial Changes*; Center for Drug Evaluation and Research. U.S. Department of Health and Human Services: Silver Spring, Md, 2004.

            
46. U.S. Food and Drug Administration. *Guidance for Industry: Comparability Protocols for Human Drugs and Biologics: Chemistry, Manufacturing, and Controls Information*, Revision 1; U.S. Department of Health and Human Services: Silver Spring, Md, 2022.

            
47. International Council for Harmonisation. *Quality Guideline Q6A: Specifications: Test Procedures and Acceptance Criteria for New Drug Substances and New Drug Products: Chemical Substances*; ICH: Geneva, 2016.

            
48. Bennan, J, et al. Evaluation of Extractables from Product-Contact Surfaces. *BioPharm International* 2002, Dec 2002, 22-34.

            
49. Norwood, D, et al. *Safety Thresholds and Best Practices for Extractables and Leachables in Orally Inhaled And Nasal Drug Products*; PQRI: Washington, DC, 2006.

            
50. European Commission. *Annex 15: Qualification and Validation, EudraLex – Volume 4 – Good Manufacturing Practice for Medicinal Products for Human and Veterinary Use*; European Commission: Brussels, 2015.

            
51. Parenteral Drug Association. *ANSI/PDA Standard 03-2025: Standard Practice for Quality Risk Management of Aseptic Processes*; PDA: Bethesda, MD, 2025.

            
52. Parenteral Drug Association. *Technical Report No. 60-3: Process Validation: A Lifecycle Approach, Annex 2: Biopharmaceutical Drug Substances Manufacturing*; PDA: Bethesda, Md., 2021.

            
53. Parenteral Drug Association. *Technical Report No. 60-2: Process Validation: A Lifecycle Approach, Annex 1: Oral Solid Dosage/Semisolid Dosage Forms*; PDA: Bethesda, Md., 2017; p 40.

            
54. U.S. Food and Drug Administration. *21 CFR 211.160 Laboratory Controls: General Requirements*; Government Publishing Office: Washington, D.C., 2017.

            
55. U.S. Food and Drug Administration. *21 CFR 211.165 Testing and Release for Distribution*; Department of Health and Human Services: Silver Spring, Md., 2020.

            
56. Vega, H, et al. Process Validation: Working Toward Harmonization of Terms Used to Identify Validation Lots. *Pharmaceutical Online* 2025.

            
57. Agalloco, J. The Importance of Equivalence in the Execution and Maintenance of Validation Activities. *Pharmaceutical Technology* 2010, 34 (12).

            
58. ASTM International. *ASTM E2363-06a. Standard Terminology Relating to Process Analytical Technology in the Pharmaceutical Industry*; ASTM: West Conshohocken, Pa., 2006.

            
59. U.S. Food and Drug Administration. *21 CFR 211.110 - Sampling and testing of in-process materials and drug products*; Government Publishing Office: Washington, D.C., 2012.

            
60. U.S. Food and Drug Administration. *21 CFR 211.100 - Written procedures; deviations*; Government Publishing Office: Washington, D.C., 2017.

            
61. Sayeed-Desta, N, et al. Assessment Methodology for Process Validation Lifecycle Stage 3A. *AAPS PharmSciTech* 2017, 18, 1881–86.

            
62. International Society for Pharmaceutical Engineering. *ISPE Good Practice Guide: Practical Implementation of the Lifecycle Approach to Process Validation*; ISPE: Bethesda, Md., 2019.

        

    

    

        

### 導師解析 Tutorial Commentary

        

            

#### 參考文獻分類解析 Reference Classification

            

TR60 的參考文獻可分為以下幾大類，反映了製程確效生命週期法的多面向知識體系：

            

**1. 法規指引 (Regulatory Guidance)：**

            

                
- **FDA**：Ref #1（Process Validation Guidance 2011）是本報告的核心參考文獻，定義了三階段生命週期法的框架

                
- **EMA**：Ref #2, #3, #50 涵蓋歐盟 GMP 和製程確效指引

                
- **ICH**：Ref #4 (Q12), #5 (Q10), #10 (Q13), #11 (Q2), #15 (Q7), #17 (Q8) 等構成品質管理的國際標準框架

            

            

**2. PDA 技術報告 (PDA Technical Reports)：**

            

                
- 清潔驗證 (TR29)、無菌製程模擬 (TR22)、滅菌確效 (TR1, TR3)

                
- 技術轉移 (TR65)、品質風險管理 (TR54 系列)

                
- 分析方法 (TR57)、核准後變更管理 (TR91)

                
- TR60 的延伸附錄 (TR60-2 口服固體、TR60-3 生物藥 DS)

            

            

**3. 業界標準 (Industry Standards)：**

            

                
- ASTM E2500、E2363：製藥設備確認和 PAT 術語標準

                
- ISPE Baseline Guide 和 Good Practice Guide

            

        

        

            

#### 比喻說明 Analogy

            

這份參考文獻清單就像是製程確效專業人員的**「必備書單」**。就像醫學院學生需要同時精通解剖學、生理學、藥理學和臨床醫學一樣，PV 專業人員需要同時掌握法規要求（FDA/EMA/ICH）、技術標準（PDA/ISPE/ASTM）、以及具體的驗證技術（滅菌、清潔、分析方法等）。這 62 篇參考文獻構成了一個完整的「知識生態系統」，每一篇都在整體框架中扮演特定角色。

        

        

            

#### 重點提示 Key Notes

            

**核心必讀文獻（優先閱讀順序）：**

            

                
1. **Ref #1 - FDA Process Validation Guidance (2011)**：三階段生命週期法的源頭文件

                
2. **Ref #5 - ICH Q10**：Pharmaceutical Quality System，所有品質活動的基礎框架

                
3. **Ref #17 - ICH Q8(R2)**：Pharmaceutical Development，QbD 方法論的核心

                
4. **Ref #4 - ICH Q12**：Lifecycle Management，連結開發與商業化的橋樑

                
5. **Ref #2 - EMA PV Guideline**：歐盟法規視角的互補

            

            

**TR60 延伸附錄的價值：**

            

                
- Ref #53 - TR60-2：口服固體劑型/半固體劑型的專門指引

                
- Ref #52 - TR60-3：生物藥品原料藥製造的專門指引

            

            

這些附錄提供了 TR60 主報告未深入涵蓋的劑型/產品類型的詳細實務指引。

        

        

            

#### 練習思考 Practice Questions

            

                
1. 如果你正在為一個新的生物藥品（單株抗體）進行製程確效，從這 62 篇參考文獻中，你會優先選擇哪 5 篇作為核心指引？請說明選擇理由。

                
2. FDA 的 Process Validation Guidance (2011) 和 EMA 的 PV Guideline (2016) 在三階段定義上有何主要差異？為什麼理解兩者的差異對國際化 CDMO 很重要？

                
3. ICH Q12 (Lifecycle Management) 與製程確效的 Stage 3 (CPV) 之間有什麼關聯？它如何影響核准後的製程變更管理？

            

        

    

    

### 本節重點回顧 Section Summary

    

        
- **大分子 Stage 3 CPV：**透過 CPV 計畫進行持續監控，以 15 批建立初步管制界限、30 批建立最終管制界限。PTT 跨職能團隊負責長期監督，規格檔案作為活文件持續維護。

        
- **小分子 Stage 1 製程設計：**從 TPP/QTPP 出發，透過 DoE 確定滅菌策略（無菌充填 vs. 終端滅菌）。PE 批次在全規模下以最差情境執行，建立 CPP 和 CQA 的完整理解。分析方法採「適用即可」策略，在技術轉移時正式驗證。

        
- **小分子 Stage 2 PPQ：**設備確認基於風險評估、安定性批次採矩陣法涵蓋多個 API 供應商、PPQ 在常規條件下執行 5 批（以最高濃度為重點）。時程必須配合 NDA 送件日期。

        
- **小分子 Stage 3 CPV：**根據數據量選擇適當的統計工具（等高線圖或 PpK/CpK）。PTT 持續監督並推動改善，NDA 補充申請支持新據點和新設施的擴展。

        
- **參考文獻體系：**62 篇參考文獻涵蓋 FDA/EMA/ICH 法規指引、PDA 技術報告、ASTM/ISPE 業界標準，構成製程確效生命週期法的完整知識框架。FDA PV Guidance (2011) 和 ICH Q8/Q10/Q12 是核心必讀文獻。

    

    

PDA Technical Report No. 60 (Revised 2026) — Process Validation: A Lifecycle Approach

    

Section 6: Appendix I Practical Examples (continued) & Section 8.0 References | p121–p135

    

Educational Material for CDMO Professionals

↑

## Section A1b-II: Statistical Methods & Control Charts 統計方法與管制圖 (p136-p155)

# 9.0 Appendix I: Statistical Methods for Determining the Number of Lots

    

附錄 I：決定批次數量的統計方法（第一部分：9.0-9.6）

    

PDA Technical Report No. 60 (Revised 2026) — Process Validation: A Lifecycle Approach | p136 - p140

    

### 本章學習目標

    

        
- 理解製程效能確認 (PPQ) 階段決定批次數量的多種統計方法

        
- 掌握 Average Run Length (ARL)、批間變異範圍、容許區間等核心概念

        
- 學會 Ppk/Cpk 製程能力指標的應用與信賴區間的解讀

        
- 理解批次合格率信心水準法 (Confidence for Reliability) 的查表與階段策略

        
- 認識窄限量測 (Narrow-Limit Gauging) 與 PRE-Control 技術降低樣本需求的原理

    

    

### 本部分章節導覽 Section Navigation (Part 7a)

    

        9.0 導論
        9.1 ARL 平均運行長度
        9.2 批間變異範圍
        9.3 容許區間
        9.4 SPC 管制圖
        9.5 Ppk/Cpk 製程能力
        9.6 批次合格率
    

## 9.0 Appendix I: Statistical Methods for Determining the Number of Lots

    

        

### 原文內容 Original Text

        

Listed below are statistical approaches used to determine the number of lots that may be required at the process performance qualification (PPQ) stage. Other approaches may also be suitable. Statistical justification of the number of lots may be particularly important when the level of risk on quality at the time of PPQ-readiness assessment remains high. In that case, it can be recommended to define the number of PPQ lots with a statistical or probabilistic rationale, guided by the mitigation of this risk and establishment of a good level of confidence about the capacity of the process to deliver batches meeting their critical quality attributes (CQAs). Involvement of a statistician or a subject matter expert skilled in this domain is recommended, when possible. As there is no standard industry approach to statistically determine the number of lots, multiple options are offered, and Section 9.0 (Appendix I) will provide applied statistical methods for determining the number of lots. It will also stimulate further discussion on this issue.

    

    

        

### 導師解析 Tutorial Commentary

        

            

#### 核心概念解析 Key Concepts

            

**PPQ 批次數的統計決定 (Statistical Determination of PPQ Lot Number)：**業界長期以來對 PPQ 應執行幾批並無統一標準。TR60 附錄 I 提供了多種統計方法，讓企業可根據風險水準與產品特性，選擇最適合的方法來「量化」決定批次數。

            

關鍵訊息：當 PPQ 準備度評估 (PPQ-Readiness Assessment) 顯示品質風險仍高時，特別需要以統計方法來定義批次數，而非僅憑「業界慣例做三批」。

        

        

            

#### 比喻說明 Analogy

            

想像你是一位駕訓班教練，要決定學生需要考幾次路考才能放心發給駕照。如果學生在練習階段就表現穩定（低風險），也許考 2-3 次就足夠；但如果練習時常出差錯（高風險），你可能需要觀察更多次考試才能確信他的駕駛能力。PPQ 批次數的決定邏輯完全相同——風險越高，需要的統計證據越多。

        

        

            

#### 重點提示 Key Notes

            

TR60 明確建議盡可能讓統計學家 (Statistician) 或具備相關專長的主題專家 (SME) 參與。這不僅是「建議」，更是當法規審查官質疑「為何只做三批？」時，能提供有說服力答案的關鍵。

            

本附錄提供的方法並非互斥，企業可以組合使用，例如先用 ARL 做初步篩選，再用 Ppk 做細部確認。

        

    

## 9.1 Average Run Length to Detect a p x 100% Lot Failure Rate

    

        

### 原文內容 Original Text

        

The average number of lots, or average run length (ARL), until the first lot failure is ARL = 1/p, where p is the lot failure rate that is important to detect.

        

            "Example: A lot failure rate of 20% is deemed unacceptable for a given process. A lot failure rate of 20% would be detected on average in 1/0.2 = once every 5 lots."
        

        

Common choices for p would be 25%, 20%, 10%, and 5%, depending on factors such as prior knowledge, risk, and production rate. Five percent (5%) would generally be the tightest value to consider since a process running right at the acceptance quality limit (AQL) is still expected to have a 5% lot rejection rate. If applicable, this approach may be particularly useful when there are many quality attributes to assess. Rather than determining the number of lots required separately for each attribute, the PPQ stage is complete when all CQAs pass their acceptance criteria for the required number of lots.

    

    

        

### 導師解析 Tutorial Commentary

        

            

#### 核心概念解析 Key Concepts

            

**Average Run Length, ARL（平均運行長度）：**這是最直觀的方法——如果批次不合格率是 p，那麼平均需要觀察 1/p 批才會「遇到」一次失敗。反過來說，如果連續 1/p 批都合格，就代表不合格率很可能低於 p。

            

                
- p = 25% → ARL = 4 批

                
- p = 20% → ARL = 5 批

                
- p = 10% → ARL = 10 批

                
- p = 5% → ARL = 20 批

            

        

        

            

#### 公式與計算 Formula

            

```

ARL = 1 / p

其中：
  p = 想要偵測的批次不合格率
  ARL = 預期在第一次失敗前的平均批次數

範例：
  不可接受的不合格率 = 20%
  ARL = 1 / 0.20 = 5 批
  意即：平均每 5 批會發生 1 次失敗
            
```

        

        

            

#### 比喻說明 Analogy

            

如果一顆骰子有 20% 機率擲到「1」，那麼平均每擲 5 次就會出現一次「1」。如果你連續擲了 5 次都沒出現「1」，你會開始懷疑這顆骰子出「1」的機率其實沒有 20% 那麼高。同理，PPQ 連續 5 批通過，就提供了「不合格率低於 20%」的間接證據。

        

        

            

#### 重點提示 Key Notes

            

**AQL 下限的考量：**即使製程完全運行在 AQL 門檻上，仍預期有 5% 的批次拒收率。因此 p = 5%（需要 20 批）通常是此方法的最嚴格考量。

            

**多屬性的優勢：**當產品有多個 CQA 需要評估時，ARL 法特別實用——不必為每個屬性分別計算批次數，只需要求所有 CQA 在規定批次數內全部合格即可。

        

        

            

#### 練習思考 Practice Questions

            

                
1. 如果某製程的風險評估認為 10% 的批次不合格率不可接受，應至少執行多少 PPQ 批次？

                
2. 為何 TR60 提到 5% 通常是 ARL 法考慮的最嚴格值？這與 AQL 有什麼關係？

                
3. 對於一個有 15 個 CQA 的產品，使用 ARL 法相比逐一計算每個 CQA 的批次數有何優勢？

            

        

    

## 9.2 Range of Expected Between-Lot Variation

    

        

### 原文內容 Original Text

        

As shown in Table 9.2-1, the range of between-lot variation to be covered by number of lots (nL) is calculated as: **100 x (nL - 1) / (nL + 1)**. This follows from the expected percentile of an order statistic. The order statistic's rank is divided by n + 1 (1). This approach does not require between-lot normality. The method may be modified to provide confidence levels of coverage instead of expected coverage. The approach may be used to determine "step-down sampling" during CPV. For example, a higher level of sampling may be used in PPQ for the first three lots until 50% coverage is reached. At that time, the PPQ is considered complete. Reduced sampling for critical characteristics may continue into Stage 3 CPV for four more lots until 75% coverage is reached, at which point, routine sampling begins (2).

        

#### Table 9.2-1 Expected Between-Lot Variation in Number of Lots

        
            
                
                    
                    
                
| Expected Coverage | Number of Lots (nL) |
| --- | --- |
            
            
                
| 33% | 2 |
                
| 50% | 3 |
                
| 60% | 4 |
                
| 67% | 5 |
                
| 75% | 7 |
                
| 80% | 9 |
                
| 85% | 12 |
                
| 90% | 19 |
                
| 95% | 39 |
            
        

    

    

        

### 導師解析 Tutorial Commentary

        

            

#### 核心概念解析 Key Concepts

            

**批間變異涵蓋率 (Between-Lot Variation Coverage)：**這個方法回答的問題是「我需要做多少批，才能觀察到批間變異的大部分範圍？」。公式基於順序統計量 (Order Statistic) 的期望百分位數，數學上優雅且不需要假設批間數據呈常態分佈。

            

**Step-Down Sampling（逐步降低取樣）：**這是一種階段性策略——在 PPQ 期間以較密集的取樣開始，達到一定覆蓋率後視為 PPQ 完成，然後在 CPV 階段繼續以較低密度取樣，直到達到目標覆蓋率後轉為常規取樣。

        

        

            

#### 公式與計算 Formula

            

```

Expected Coverage (%) = 100 x (nL - 1) / (nL + 1)

範例計算：
  nL = 3 批 → 100 x (3-1)/(3+1) = 100 x 2/4 = 50%
  nL = 5 批 → 100 x (5-1)/(5+1) = 100 x 4/6 = 67%
  nL = 7 批 → 100 x (7-1)/(7+1) = 100 x 6/8 = 75%

逆向計算：需要涵蓋 X% 時所需批次數：
  nL = (1 + X/100) / (1 - X/100)   [取整數]
            
```

        

        

            

#### 比喻說明 Analogy

            

想像你要了解一個城市的氣溫範圍。如果只看 2 天的溫度，你只能涵蓋約 33% 的變異；看一整週（7 天）可以涵蓋約 75%。要涵蓋 95% 的溫度變異，你可能需要觀察 39 天！批間變異也是如此——觀察越多批次，對變異範圍的了解越完整。

        

        

            

#### 重點提示 Key Notes

            

**表格解讀的實務意義：**

            

                
- 3 批 PPQ 只涵蓋 50% 的批間變異——這意味著另外 50% 的變異尚未被觀察到

                
- 5 批可涵蓋 67%，但仍有 1/3 的變異範圍未知

                
- 要達到 90% 涵蓋率需要 19 批，這在 PPQ 階段通常不切實際

                
- 因此，分階段策略（PPQ + CPV）是務實的做法

            

            

**不需常態假設：**此方法的一大優勢是不需要假設批間數據呈常態分佈，因為它基於非參數統計的順序統計量。

        

        

            

#### 實務應用 Practical Application

            

**CDMO 情境：**一家 CDMO 接到客戶的 PPQ 計畫審查。客戶計畫只做 3 批 PPQ。使用此表格，CDMO 可以向客戶解釋：3 批僅涵蓋 50% 的批間變異，建議在 PPQ 後的 CPV 階段繼續監控至少 4 批，達到 75% 涵蓋率（共 7 批）後才轉為常規監控。這個分階段策略既滿足法規期望，又不會造成過度的 PPQ 批次需求。

        

        

            

#### 練習思考 Practice Questions

            

                
1. 如果 PPQ 做了 5 批，剩餘的 33% 批間變異應在哪個階段繼續觀察？

                
2. 為什麼此方法「不需要常態假設」是一個重要優勢？

            

        

    

## 9.3 Within-Lot and Between-Lot Tolerance Intervals

    

        

### 原文內容 Original Text

        

Statistical tolerance intervals are commonly used in validation. Tables of normal tolerance interval factors for variable data are widely available and implemented in statistical software. Specialized software is available to optimally calculate the desired confidence statement. Normal tolerance intervals for the total process variation over time are more complicated; they include both within- and between-lot variation. Standard normal tolerance interval factors assume that there is only one population in the data. However, most PPQs contain multiple populations, since each lot is a separate population.

        

If, given quantitative attributes for which several units are tested per lot, there are no significant differences between the lots, the simplest way to deal with multiple lots is to combine the data. An Analysis of Variance (ANOVA) test may be used to compare lot means; within-lot variation may be compared with the Levene, Browne-Forsythe, Bartlett, Cochran, or Fmax statistical tests (2-4). An omnibus test may also be used. The sample size per lot and the number of lots should be statistically determined to have adequate power to detect any between-lot variation.

        

            "Example: The specification for cap-removal torque for a small-volume parenteral product is 8.0–12.0 inch-pounds. Limited data from Stage 1 showed a standard deviation of about 0.5. The production AQL for removal torque is 1.0%. The acceptance criterion for the PPQ is to show with 90% confidence that at least 99% (1 minus the AQL) of the cap torques are within specifications."
        

        

Three lots are included in the PPQ to evaluate the within-lot and between-lot variations. A sample size of 30 units per PPQ lot was tested to detect between-lot variation as large as the within-lot variation with 90% confidence (5). Samples from throughout each of the three lots were tested, and the acceptance criteria for each lot was met. An individual/moving range (I/MR) statistical process control (SPC) chart indicated that the process was in control during each lot. Normality tests for each lot did not indicate significant non-normality. Since ANOVA and Levene's tests showed no significant difference among the three lots, the data were combined.

        

The 90 test results had a mean of 9.59 and standard deviation of 0.51. This interval is within the specification limits of 8.0-12.0. Thus, the PPQ has shown with 90% confidence that at least 99% of torque results are expected to meet specifications. Those calculations may be performed using Commercial-Off-The-Shelf statistical software (e.g., JMP©, Minitab©, SAS©). If there are statistically significant differences between lots, the tolerance interval should be constructed with more advanced methods that take the between-lot variance component into account (6,7).

    

    

        

### 導師解析 Tutorial Commentary

        

            

#### 核心概念解析 Key Concepts

            

**Statistical Tolerance Interval（統計容許區間）：**不同於規格限 (Specification Limits)，容許區間是從數據計算得出的區間，用來聲明「有 X% 信心，至少 Y% 的產品會落在此範圍內」。在確效中，這是證明製程能力的重要工具。

            

**ANOVA（變異數分析）：**用來比較多批次的平均值是否存在統計顯著差異。如果 ANOVA 顯示無顯著差異，可以合併數據來計算容許區間。

            

**Levene's Test（Levene 變異數同質性檢定）：**用來檢驗各批次的批內變異是否一致。與 ANOVA 比較平均值不同，Levene 檢定比較的是「離散程度」。

        

        

            

#### 比喻說明 Analogy

            

假設你有三個班級的數學考試成績。如果三個班的平均分和成績分散程度都差不多（ANOVA 和 Levene 檢定無顯著差異），你可以把三個班的成績合在一起分析，得到更精確的「全校成績分佈」估計。但如果某個班明顯偏高或偏低，合併數據就會掩蓋這個差異，得出誤導性的結論。PPQ 批次數據的合併邏輯完全相同。

        

        

            

#### 重點提示 Key Notes

            

**範例解讀重點：**

            

                
- **規格：**8.0-12.0 inch-pounds（拆蓋扭力）

                
- **Stage 1 估計標準差：**約 0.5

                
- **接受標準：**90% 信心，至少 99% 合規

                
- **每批 30 件，共 3 批 = 90 件**合併數據後計算容許區間

                
- **結果：**均值 9.59，標準差 0.51，容許區間落在 8.0-12.0 規格內

            

            

**重要警告：**如果批間存在顯著差異，不能簡單合併數據！必須使用考慮批間變異成分的進階方法來建構容許區間。

        

        

            

#### 公式與計算 Formula

            

```

Normal Tolerance Interval:
  X-bar +/- k * s

其中：
  X-bar = 樣本平均值 (9.59)
  s     = 樣本標準差 (0.51)
  k     = 容許區間因子 (查表，取決於 n, 信心水準, 涵蓋比例)

合併前提條件 (Prerequisites for pooling):
  1. ANOVA p-value > alpha → 批次平均值無顯著差異
  2. Levene's test p-value > alpha → 批內變異無顯著差異
  3. Normality test p-value > alpha → 數據近似常態
  4. SPC chart 顯示製程受控
            
```

        

        

            

#### 練習思考 Practice Questions

            

                
1. 為什麼標準容許區間因子假設「只有一個母體」會在 PPQ 場景中造成問題？

                
2. 如果 ANOVA 顯示批次間有顯著差異，下一步應該怎麼做？

                
3. 在範例中，為何選擇每批 30 件而非更少？提示：考慮偵測批間變異的統計檢定力 (Power)。

            

        

    

## 9.4 Statistical Process Control Charts

    

        

### 原文內容 Original Text

        

Most SPC references suggest obtaining data from 20-30 time periods before calculating control limits to assess whether the process is in control. Samples could be taken at 30 time periods across three or more lots. For three lots, 10 sets of "rational subgroup" samples could be selected from each lot. The SPC chart limits are then calculated, and the process is assessed for statistical control. The number of lots to use can be based on the power of the SPC chart to detect undesirable between-lot variation.

        

A potential problem with the use of SPC charts, such as Xbar/S charts plotted across lots, is that they define a process as being in statistical control if there is no underlying lot-to-lot variation (8). This is often not the case, and some lot-to-lot variation is typical and expected, especially for lot means. In these cases, an I/MR chart for the mean and/or standard deviation or three-way between/within chart can be used to detect out-of-statistical-control between-lot variation (9).

        

If there is only one test result per lot, such as a lot assay or pH of a tank of solution, the 20-30 time periods become 20-30 lots. This is seldom feasible for PPQ. An alternative is to select a smaller number of lots, perhaps 5-10, and construct a preliminary I/MR control chart. If it shows an in-control process, the PPQ would be complete, and the control chart would extend into Stage 3 to verify longer-term statistical control during CPV.

    

    

        

### 導師解析 Tutorial Commentary

        

            

#### 核心概念解析 Key Concepts

            

**Rational Subgroup（合理子群）：**在 SPC 中，合理子群是指在短時間內、相似條件下生產的樣品。子群內的變異反映「共同原因」變異，子群間的變異則可能反映「特殊原因」。在 PPQ 中，每批抽取 10 組合理子群，跨 3 批共 30 組，符合 SPC 建立管制限所需的 20-30 個時段。

            

**I/MR Chart（個別值/移動範圍圖）：**當每批只有一個結果（如批次含量試驗、pH）時使用。與 Xbar/S 圖不同，I/MR 圖不需要子群結構。

        

        

            

#### 比喻說明 Analogy

            

Xbar/S 管制圖就像在每堂課中監控學生的「課堂測驗平均分」——如果不同課堂之間平均分有變化，圖表就會警報。但問題是：不同「學期」之間的成績波動是正常的（批間變異），Xbar/S 圖可能會把這種正常波動誤判為異常。I/MR 圖則更像在追蹤「每學期期末考的平均分」變化趨勢，能區分正常的學期間波動與真正的異常。

        

        

            

#### 重點提示 Key Notes

            

**Xbar/S 圖的陷阱：**跨批繪製 Xbar/S 圖時，管制限是基於批內變異計算的。如果存在正常的批間變異（幾乎所有製程都有），圖表會出現大量「假警報」——批次平均值偏移被錯誤標記為失控。這是驗證中常見的統計誤用。

            

**務實替代方案：**先用 5-10 批建立初步 I/MR 管制圖，PPQ 確認製程受控後，將管制圖延伸到 Stage 3 CPV 繼續監控，逐步累積更多數據點。

        

        

            

#### 練習思考 Practice Questions

            

                
1. 為什麼 SPC 教科書建議的「20-30 個時段」在 PPQ 中很難達到？

                
2. 假設你的產品每批只有一個含量結果，你會如何設計 PPQ 的 SPC 策略？

                
3. 三因子 (three-way) between/within 管制圖與普通 Xbar/S 圖的主要差異是什麼？

            

        

    

## 9.5 Process Performance Index (Ppk) & Process Capability Index (Cpk)

    

        

### 原文內容 Original Text

        

Ppk is the most common statistic used to assess long-term process capability (refer to Figure 6.2.2.3-1). Acceptable values of Ppk depend on the criticality of the characteristic, but 1.0 and 1.33 are commonly used (10). Smaller or larger values may be used depending on the risk factors involved. The Ppk acceptance criterion may be based on a point estimate or a one-sided lower-confidence interval. If there is significant between-lot variation, caution should be exercised in using confidence intervals for Ppk calculated by statistical software. Most statistical software programs do not take between-lot variation into account and may provide optimistic confidence intervals that are too narrow (11).

        

            "Example: Fill-volume specification limits for a small-volume parenteral product are 98-102. PPQ acceptance criteria are that each lot is Ppk ≥ 1.0; also, that the overall process Ppk is ≥ 1.0 with 95% confidence. To detect a between-lot standard deviation that is half of the within-lot standard deviation with 90% confidence, 33 units will need to be tested from across each of five PPQ lots."
        

        

The data from the five lots were analyzed by control charts, histograms, normality tests, Levene's test, and ANOVA. These analyses indicated that the data from the five lots could be combined. The Ppks of each of the five lots were > 1.0. The calculated Ppk from the combined data was 1.14, with a lower 95% confidence interval of 1.03. Since each lot met its Ppk requirement and the lower confidence interval for the overall process, Ppk, was above the acceptance limit of 1.0. Thus, the PPQ acceptance criteria were met.

        

An alternative to calculating a parametric confidence interval for Ppk is to require each of four or five consecutive lots in a row to meet the Ppk acceptance criteria. For example, four PPQ lots, each with Ppk ≥ 1.0, provides over 90% confidence that the process median Ppk is ≥ 1.0; five lots provide over 95% confidence.

    

    

        

### 導師解析 Tutorial Commentary

        

            

#### 核心概念解析 Key Concepts

            

**Ppk vs Cpk：**

            

                
- **Cpk (Process Capability Index，製程能力指數)：**使用批內標準差（短期變異），衡量製程在穩定狀態下的「潛力」能力

                
- **Ppk (Process Performance Index，製程效能指數)：**使用總標準差（包含批間+批內變異），衡量製程的「實際」表現

                
- Ppk 總是 ≤ Cpk，因為 Ppk 包含了更多變異來源

                
- Ppk = Cpk 的理想情況意味著沒有批間變異

            

            

**常用接受標準：**

            

                
- Ppk ≥ 1.0：製程平均值距離最近規格限至少 3 個標準差

                
- Ppk ≥ 1.33：距離至少 4 個標準差（更嚴格，常用於關鍵特性）

            

        

        

            

#### 公式與計算 Formula

            

```

Ppk = min( (USL - X-bar) / (3 * sigma_total),
           (X-bar - LSL) / (3 * sigma_total) )

Cpk = min( (USL - X-bar) / (3 * sigma_within),
           (X-bar - LSL) / (3 * sigma_within) )

範例計算（充填體積）：
  規格 = 98 - 102
  合併數據：X-bar = 某值，sigma_total = 某值
  計算的 Ppk = 1.14
  95% 信賴下限 = 1.03 > 1.0 (接受標準)
  → PPQ 接受標準通過

替代法（逐批 Ppk）：
  4 批均 Ppk ≥ 1.0 → > 90% 信心中位 Ppk ≥ 1.0
  5 批均 Ppk ≥ 1.0 → > 95% 信心中位 Ppk ≥ 1.0
            
```

        

        

            

#### 比喻說明 Analogy

            

想像高速公路的車道。規格限就像車道的邊界線，Ppk 衡量的是你的車（製程平均值）距離最近車道線的距離除以你的車寬（製程變異）。Ppk = 1.0 表示車身剛好完全在車道內；Ppk = 1.33 表示兩側還有額外的安全空間。如果你的車有時會左右偏移（批間變異），你需要更多安全餘裕——這就是為什麼 Ppk（考慮所有偏移）比 Cpk（只考慮穩態）更保守。

        

        

            

#### 重點提示 Key Notes

            

**軟體陷阱警告：**大多數統計軟體（JMP, Minitab, SAS）計算 Ppk 信賴區間時，不考慮批間變異成分。當存在顯著批間變異時，軟體會給出過於樂觀（太窄）的信賴區間，可能導致錯誤地通過 PPQ 接受標準。

            

**非參數替代法：**要求連續 4-5 批的 Ppk 都 ≥ 1.0，是一種不依賴信賴區間計算的簡單替代方案。這利用了二項分佈的性質：如果中位 Ppk < 1.0，連續 4 批都 ≥ 1.0 的機率不到 6.25%（0.5^4 = 6.25%）。

        

        

            

#### 實務應用 Practical Application

            

**CDMO 場景：**客戶要求充填體積 PPQ 的 Ppk ≥ 1.33。你的 5 批數據合併後計算得 Ppk = 1.28，但 ANOVA 顯示批間有顯著差異。此時：

            

                
1. 不能直接合併數據計算 Ppk 信賴區間

                
2. 應使用考慮批間變異成分的進階方法

                
3. 或改用逐批 Ppk 法：如果 5 批的個別 Ppk 都 ≥ 1.33，則有 > 95% 信心

                
4. 與客戶討論是否 Ppk ≥ 1.0 的接受標準在風險可接受範圍內

            

        

        

            

#### 練習思考 Practice Questions

            

                
1. 為什麼 Ppk 比 Cpk 更適合用於 PPQ 的長期製程能力評估？

                
2. 範例中，為何需要每批 33 件（而非更少）才能偵測到「批間標準差為批內標準差一半」的情況？

                
3. 如果計算出的 Ppk 點估計值為 1.14 但信賴下限為 0.97，你應該如何處理？

            

        

    

## 9.6 Assure the Lot Conformance Rate is Above an Acceptable Rate with Specified Confidence

    

        

### 原文內容 Original Text

        

An approach commonly referred to as the "confidence for reliability" method, demonstrates that the percentage of lot conformance is acceptable. It identifies unacceptable variation due to either common or special causes. Table 9.6-1 shows the required number of conforming lots. This method is sometimes called "confidence for reliability."

        

#### Table 9.6-1 Number of Lots to Demonstrate Confidence for Lot Conformance Rate

        

            
                
                    
                        
                        
                        
                    
| Confidence | Conformance Rate | Number of Successive Conforming Lots to Ensure Conformance Rate with Stated Confidence |
| --- | --- | --- |
                
                
                    
| 50% | 90% | 7 |
                    
| 95% | 14 |
                    
| 99% | 69 |
                    
| 90% | 90% | 22 |
                    
| 95% | 45 |
                    
| 99% | 230 |
                    
| 95% | 90% | 29 |
                    
| 95% | 59 |
                    
| 99% | 299 |
                
            

        

        

            "Example: To demonstrate the process is acceptable, the PPQ acceptance criterion will be to show with 90% confidence that the process-lot conformance rate (the lot pass rate) is at least 90%. A total of 22 passing lots in a row will demonstrate this."
        

        

Requiring many lots during PPQ to reach 90% or 95% confidence is difficult. An alternative is to use 50% confidence in PPQ and monitor the process further during CPV to reach the final desired confidence. Crossing the 50% confidence threshold is the point at which the selected lot conformance rate is more likely to be met. For the example above, once seven (7) passing lots are reached, it is more likely that the conformance rate is greater than 90% rather than less than 90%, and the PPQ could be considered complete. An additional 15 lots during early CPV would reach the required 22 lots. This approach may be particularly useful when there are many quality attributes to assess. Rather than determining the number of lots required separately for each attribute, the PPQ stage is complete when all attributes pass for the required number of lots.

    

    

        

### 導師解析 Tutorial Commentary

        

            

#### 核心概念解析 Key Concepts

            

**Confidence for Reliability（可靠度信心法）：**此方法的邏輯是：如果連續 n 批全部合格（零失敗），我們可以對「真實合格率 ≥ R」的聲明達到 C% 的信心水準。數學基礎是二項分佈的單側信賴區間。

            

公式推導：要使 P(0 failures in n trials | true failure rate = 1-R) ≤ 1-C

            

簡化為：Rn ≥ 1 - C，即 n ≥ ln(1-C) / ln(R)

        

        

            

#### 公式與計算 Formula

            

```

n = ln(1 - C) / ln(R)     [取上整數]

其中：
  C = 信心水準 (confidence level)
  R = 合格率 (conformance rate)
  n = 所需連續合格批次數

驗證範例：
  C = 90%, R = 90%
  n = ln(1-0.90) / ln(0.90) = ln(0.10) / ln(0.90)
    = -2.3026 / -0.10536 = 21.85 → 取整 = 22 批

50% 信心 + 90% 合格率：
  n = ln(0.50) / ln(0.90) = -0.6931 / -0.10536 = 6.58 → 7 批
            
```

        

        

            

#### 比喻說明 Analogy

            

想像你在面試一位新廚師。如果他連續 7 道菜都做得好（50% 信心），你會覺得他「大概不錯」，可以正式錄用。但要真正「很有信心」（90%）他能長期保持 90% 以上的菜品合格率，你可能需要觀察他做 22 道菜。

            

TR60 的務實建議是：先觀察 7 道菜（PPQ 期間），如果都合格就正式錄用，然後在試用期（CPV）繼續觀察剩下的 15 道菜，最終達到 22 道的高信心水準。

        

        

            

#### 重點提示 Key Notes

            

**表格使用要領：**

            

                
- **50% 信心 = 跨越損益平衡點：**超過此點後，「合格率 ≥ 目標」的可能性大於「< 目標」

                
- **階段策略的關鍵：**PPQ 達到 50% 信心 → CPV 繼續累積到 90% 信心

                
- **99% 合格率極難驗證：**即使只要求 50% 信心也需要 69 批！這說明驗證 99% 合格率在 PPQ 階段幾乎不可能

            

            

**多屬性策略：**與 ARL 法類似，此方法可以跨所有品質屬性統一應用——只要所有屬性在規定批次數內都合格即可。

        

        

            

#### 實務應用 Practical Application

            

**法規面試情境：**FDA 審查員問：「你如何證明你的製程有 90% 的信心達到 90% 的批次合格率？」

            

回答策略：「我們採用分階段方法。在 PPQ 中，7 批連續合格達到 50% 信心（即合格率 ≥ 90% 的可能性超過一半）。在 CPV 初期繼續監控，累計至 22 批連續合格時達到 90% 信心。此方法基於二項分佈，參考 TR60 Appendix I Section 9.6。」

        

        

            

#### 練習思考 Practice Questions

            

                
1. 使用公式驗算：95% 信心 + 95% 合格率 = 59 批是否正確？

                
2. 如果 PPQ 做了 7 批但第 6 批失敗了，能否重新開始計數？這對統計有效性有何影響？

                
3. 為什麼「50% 信心」被稱為「損益平衡點」？

            

        

    

    

### 接續提示 Continuation Notice

    

本部分（7a）涵蓋 Appendix I 的 Section 9.0 至 9.6。後續內容包括 Section 9.7 Narrow-Limit Gauging、9.8 Between-Lot vs Within-Lot Variation、9.9 Sample Size、9.10 Demonstrate Between-Lot SD、9.11 Demonstrating Equivalence Between Lots，將在 **Section 7b** 中繼續。

↑

# Section 7b: Appendix II — Types of Control Charts + Appendix References

    

附錄 II：管制圖類型 + 附錄參考文獻

    

PDA Technical Report No. 60 (Revised 2026) — Process Validation: A Lifecycle Approach | p144 - p155

    

### 本章學習目標

    

        
- 了解製程驗證中常用的計量型（Variables）管制圖種類及其適用場景

        
- 了解計數型（Attributes）管制圖種類及特殊大樣本情況的替代方案

        
- 理解 Average Run Length (ARL) 的概念及其在管制圖效能評估中的意義

        
- 掌握 Laney p-chart / u-chart 處理過度分散（Over-Dispersion）資料的原理

        
- 熟悉附錄參考文獻清單，了解進階統計方法的學術出處

    

    

### 本節內容導覽

    

        10.0 附錄 II 概述
        10.1 計量型管制圖
        10.2 計數型管制圖
        管制圖效能：ARL
        11.0 附錄參考文獻
    

10.0 Appendix II: Types of Control Charts

    

        

## 原文內容 Original Text

        

Section 10.0 (Appendix II) lists recommended statistical process control tools, such as control charts, that may be utilized for process validation (PV) data trending. Refer to TR 59 for additional information (16).

    

    

        

## 導師解析 Tutorial Commentary

        

            

#### 核心概念解析 Key Concepts

            

**Control Chart (管制圖)：**管制圖是 Statistical Process Control (SPC，統計製程管制) 的核心工具。它以時間序列的方式繪製製程數據，並設定管制上限 (UCL) 與管制下限 (LCL)，通常為中心線 ±3 個標準差。當數據點落在管制界限之外或出現非隨機模式時，即表示製程可能已發生偏移。

            

**TR 59 (PDA 技術報告第 59 號)：**專門探討「生產監控中統計方法的利用」，是 TR 60 管制圖議題的延伸閱讀重要資源。兩份報告應搭配使用。

        

        

            

#### 比喻說明 Analogy

            

管制圖就像汽車儀表板上的速度表和引擎溫度表。正常行駛時，指針在安全範圍內波動；一旦超出紅線區域，就表示有問題需要處理。關鍵是：你不是等到引擎冒煙才發現問題，而是透過持續監控，在小異常階段就能即時發現。

        

    

10.1 Control Charts for Variables Data

    

        

## 原文內容 Original Text

        

Commonly used control charts for variables data are (8,9):

        

            
- x̄/R or x̄/S "Shewhart" chart using ±3-sigma limits

            
- Individuals/Moving Range (I/MR) chart

            
- Levey-Jennings chart

            
- Moving average chart

            
- Exponentially weighted moving average (EWMA) chart

            
- Cumulative sum (CUSUM) chart

        

    

    

        

## 導師解析 Tutorial Commentary

        

            

#### 核心概念解析 Key Concepts

            

**Variables Data (計量型數據)：**指可以在連續尺度上量測的數據，例如充填重量 (mg)、pH 值、含量 (%)、溶離度 (%) 等。這類數據包含的資訊量較計數型數據更豐富，能更靈敏地偵測製程偏移。

        

        

        
            
                
                
                
            
| 管制圖類型 | 適用場景 | 特點 |
| --- | --- | --- |
            
                ****
                
                
            
| x̄/R 或 x̄/S (Shewhart) | 每個取樣點有多個觀測值（子組），例如每批取 5 個樣品測量 | 最經典的管制圖；x̄ 監控平均值，R 或 S 監控組內變異。使用 ±3σ 管制界限 |
            
                ****
                
                
            
| I/MR (個別值/移動全距) | 每個取樣點只有一個觀測值，例如每批只測一個複合樣品 | 適用於樣本量 n=1 的情境；移動全距 (MR) 用於估計製程變異 |
            
                ****
                
                
            
| Levey-Jennings | 實驗室 QC 常用，追蹤分析方法穩定性 | 類似 I/MR，但常搭配 Westgard 規則進行判斷；在製藥實驗室中廣泛使用 |
            
                ****
                
                
            
| Moving Average (移動平均) | 需要平滑短期波動、觀察趨勢 | 將連續 k 個觀測值取平均後繪圖，有助於偵測緩慢漂移 |
            
                ****
                
                
            
| EWMA (指數加權移動平均) | 需要偵測製程的小偏移 | 賦予近期數據較大權重，對小偏移（0.5σ ~ 2σ）比 Shewhart 圖更靈敏 |
            
                ****
                
                
            
| CUSUM (累積和) | 需要偵測製程的持續性小偏移 | 累積觀測值與目標值的偏差；對持續小偏移的偵測力最強 |
        

        

        

            

#### 重點提示 Key Notes

            

**Shewhart 圖 vs EWMA/CUSUM 的選擇邏輯：**

            

                
- Shewhart 圖對**大偏移**（≥2σ）偵測快速，但對小偏移不敏感

                
- EWMA 和 CUSUM 則對**小偏移**（0.5σ~1.5σ）有卓越的偵測能力

                
- 在 Continued Process Verification (CPV，持續製程確認) 階段，製程通常已穩定，因此**偵測小偏移**的能力更為關鍵 — 此時 EWMA/CUSUM 是更佳選擇

            

        

        

            

#### 比喻說明 Analogy

            

想像你在監控一個水塔的水位：

            

                
- **Shewhart 圖**像是每隔一段時間看一眼水位表 — 如果水位突然大幅下降你會發現，但慢慢滲漏就不容易察覺

                
- **EWMA 圖**像是一個智慧型感測器，會加權考慮最近的水位變化趨勢，即使每次只滲漏一點點也能發出預警

                
- **CUSUM 圖**則像是記帳本，持續累積偏差 — 即使每次偏差很小，累積起來就會觸發警報

            

        

        

            

#### 練習思考 Practice Questions

            

                
1. 你的工廠每批充填後取 5 支安瓿測量充填體積，應該選用哪種管制圖？為什麼？

                
2. 在 CPV 階段，如果你擔心製程的平均值緩慢漂移（例如每批偏移 0.5σ），Shewhart 圖能否有效偵測？你會推薦什麼替代方案？

                
3. Levey-Jennings 圖主要用於什麼場景？它與 I/MR 圖的主要差異為何？

            

        

    

10.2 Control Charts for Attributes Data

    

        

## 原文內容 Original Text

        

The most-used control charts for attributes data are (8,9):

        

            
- p-chart for fraction or percent nonconforming (binomial data)

            
- np-chart for number of units nonconforming (binomial data)

            
- c-chart for number of defects (Poisson data)

            
- u-chart for average number of defects (Poisson data)

        

        

In addition, the I/MR chart can be used for attributes data if most of the plotted values are not zero (0).

        

For very large sample sizes, for instance, greater than 500 or 1,000 (e.g., percent of tablets rejected across lots on a sample of 1000 or more tablets inspected per lot with an automatic metal detector) and long time periods, the assumptions of a binomial or Poisson distribution that attributes charts use is often violated. In that case, alternative approaches to the common charts for attributes data could be used:

        

            
- Laney's p-chart and u-chart deal appropriately with under- or over-dispersion in the data, which lead respectively to an increased or a decreased number of points outside the control limits with the corresponding classical charts for attributes (17)

            
- I/MR or Levey-Jennings's control chart

        

    

    

        

## 導師解析 Tutorial Commentary

        

            

#### 核心概念解析 Key Concepts

            

**Attributes Data (計數型數據)：**指只能以離散數值（合格/不合格、缺陷數）表示的數據。例如：外觀檢查的不合格數、微粒計數、容器完整性測試的通過/不通過。

            

**Binomial (二項分布) vs Poisson (卜瓦松分布)：**

            

                
- **Binomial：**每個樣品只有「合格」或「不合格」兩種結果。p-chart 和 np-chart 基於此分布

                
- **Poisson：**計算的是單位面積/體積/時間內的缺陷「次數」，每個樣品可以有 0 個或多個缺陷。c-chart 和 u-chart 基於此分布

            

        

        

        
            
                
                
                
                
            
| 管制圖 | 監控對象 | 分布假設 | 樣本量要求 |
| --- | --- | --- | --- |
            
                ****
                
                
                
            
| p-chart | 不合格品比例 | Binomial | 可變動（n 可以不同） |
            
                ****
                
                
                
            
| np-chart | 不合格品數量 | Binomial | 必須固定（n 相同） |
            
                ****
                
                
                
            
| c-chart | 缺陷數 | Poisson | 必須固定（檢查區域/體積相同） |
            
                ****
                
                
                
            
| u-chart | 平均缺陷數 | Poisson | 可變動（n 可以不同） |
        

        

        

            

#### 重點提示 Key Notes

            

**大樣本量的陷阱 — Over-Dispersion (過度分散)：**

            

這是一個非常實務且容易被忽略的問題。當樣本量非常大（例如 n > 500 或 1,000）時，傳統 p-chart 和 u-chart 的管制界限會變得極窄（因為標準差與 √n 成反比）。這導致：

            

                
- 大量數據點落在管制界限之外，產生過多**假警報 (False Alarms)**

                
- 這些「超限點」並非真正的製程偏移，而是因為實際數據的變異比 Binomial/Poisson 模型假設的更大（即**過度分散**）

                
- **Laney's p'/u' chart** 透過引入 sigma(Z) 因子來修正管制界限寬度，解決此問題

            

        

        

            

#### 比喻說明 Analogy

            

想像你在一個大城市的十字路口統計交通違規次數。如果你只觀察 10 分鐘（小樣本），偶爾多幾次違規是正常波動；但如果你觀察整整一個月、每秒都在記錄（超大樣本），「每天違規率」的微小波動在傳統管制圖上都會顯示為「異常」。Laney 的方法就是在計算管制界限時，考慮了這種「大規模觀察自然帶來的額外變異」，讓管制界限回歸合理範圍。

        

        

            

#### 實務應用 Practical Application

            

**案例：自動金屬偵測器的錠劑剔除率監控**

            

假設你的工廠每批檢查 5,000 顆錠劑，記錄被金屬偵測器剔除的數量。如果使用傳統 p-chart：

            

                
- 管制界限極窄（因 n=5,000 很大），UCL 可能只有 0.3%

                
- 批間的正常波動（例如 0.1% ~ 0.5%）會導致許多批次被標記為 OOC (Out of Control)

                
- 工廠調查團隊會疲於調查這些「假警報」，浪費大量資源

            

            

改用 **Laney's p'-chart** 或 **I/MR chart**（以每批剔除率為個別值），管制界限會更合理，真正的製程偏移才會被正確識別。

        

        

            

#### 練習思考 Practice Questions

            

                
1. 你的外觀檢查站每批抽 200 支安瓿（固定數量），記錄不合格支數。應選用 p-chart 還是 np-chart？理由為何？

                
2. 如果每批抽樣數不固定（有時 100 支、有時 300 支），此時 np-chart 還適用嗎？應改用什麼？

                
3. 為什麼 TR 60 建議對大樣本量的計數型數據考慮使用 I/MR 圖？其前提條件是什麼？

            

        

    

Performance of Control Charts: Average Run Length (ARL)

    

        

## 原文內容 Original Text

        

The ability of a control chart to detect a shift in the process is measured by the average number of sample periods before the shift is detected. This is called the Average Run Length (ARL). When the process has not changed (a shift of 0), it is desirable to have a large ARL to keep the false-alarm rate low. However, if the process has shifted, it is desirable to have a small ARL to detect the change quickly. ARL is most important in CPV, when it is desirable to detect a significant process change within a short period of time. The ARL can be used to help select the sample size and frequency of sampling. Tables of ARLs comparing different control chart types are available and can also be calculated by software.

    

    

        

## 導師解析 Tutorial Commentary

        

            

#### 核心概念解析 Key Concepts

            

**Average Run Length, ARL (平均運行長度)：**指管制圖在製程偏移發生後，平均需要觀察幾個取樣點才能偵測到偏移（即第一個點落在管制界限之外）。

            

                
- **ARL0（製程在管制狀態）：**希望此值越大越好，代表不會頻繁產生假警報。Shewhart 圖的 ARL0 = 370（即平均每 370 個取樣點才會有一次假警報）

                
- **ARL1（製程已偏移）：**希望此值越小越好，代表能快速偵測到問題。例如偏移 1σ 時，Shewhart 圖的 ARL1 ≈ 44，EWMA 的 ARL1 ≈ 10

            

        

        

            

#### 公式與計算 Formula

            

**Shewhart 管制圖的 ARL 計算概念：**

            

```

ARL = 1 / P(點落在管制界限外)

製程在管制狀態（±3σ limits）：
  P(超限) = 0.0027 (即 ±3σ 外的常態分布面積)
  ARL_0 = 1 / 0.0027 ≈ 370

製程偏移 1σ：
  P(超限) ≈ 0.0228
  ARL_1 = 1 / 0.0228 ≈ 44

製程偏移 2σ：
  P(超限) ≈ 0.1587
  ARL_1 = 1 / 0.1587 ≈ 6.3
            
```

        

        

            

#### 重點提示 Key Notes

            

**ARL 與取樣策略的關聯：**

            

                
- ARL 直接影響你的**取樣頻率**決策。如果 ARL1 = 44，表示平均要等 44 個取樣點才能偵測到 1σ 的偏移。若每月取樣一次，可能需要近 4 年才能發現！

                
- 這也是為什麼 TR 60 特別指出 ARL 在 **CPV 階段**最為重要 — CPV 的目標是及時發現製程變化，而非等到大量不合格品產出後才處理

                
- 實務上，可使用 ARL 比較表來選擇最適合的管制圖類型和取樣方案

            

        

        

            

#### 比喻說明 Analogy

            

ARL 就像一個煙霧偵測器的靈敏度設定：

            

                
- 你希望在沒有火災時不要亂響（**ARL0 越大越好** = 不要太敏感而頻繁假警報）

                
- 但你也希望在真正有火災時能迅速響起（**ARL1 越小越好** = 快速偵測到真正的問題）

                
- 不同種類的管制圖就像不同品牌的偵測器 — 有些對大火反應快但對陰燃不敏感（Shewhart），有些對小火苗就能偵測到（EWMA/CUSUM）

            

        

        

            

#### 練習思考 Practice Questions

            

                
1. 如果你的 CPV 取樣頻率是每週一次，而你使用 Shewhart 圖監控一個 CQA，當製程偏移 1σ 時，大約需要多少週（ARL1 ≈ 44）才能偵測到？這樣的延遲在實務上是否可接受？

                
2. 如何透過管制圖類型的選擇（例如改用 EWMA）來降低 ARL1，又不至於讓 ARL0 過低而產生太多假警報？

                
3. 為什麼 TR 60 說 ARL 可以幫助決定取樣大小和取樣頻率？請用自己的話解釋其中的邏輯。

            

        

    

11.0 Appendix References

    

        

## 原文內容 Original Text

        

### Appendix References

        

            
1. Meeker, W.Q., Hahn, G.J., Escobar, L.A. *Statistical Intervals: A Guide for Practitioners and Researchers.* John Wiley & Sons, 2017.

            
2. U.S. Food and Drug Administration. *Guidance for Industry: PAT — A Framework for Innovative Pharmaceutical Development, Manufacturing, and Quality Assurance;* U.S. Department of Health and Human Services: Rockville, Md., 2004.

            
3. Oliver, J. A 3-D Risk Assessment Model. *J Validation Tech* 2008, 14 (5), 70-76.

            
4. Makkonen, L. Bringing Closure to the Plotting Position Controversy. *Communications in Statistics—Theory and Methods* 2008, 37, 460–67.

            
5. Lenth, R V. Java Applets for Power and Sample Size [computer software]. http://homepage.divms.uiowa.edu/~rlenth/Power/ (accessed 20 Mar 2011).

            
6. Hoffman, D; Kringle, R. Two-Sided Tolerance Intervals for Balanced and Unbalanced Random Effects Models. *J Biopharm Stat* 2005, 15 (2), 283-93.

            
7. Vangel, M. New Methods for One-Sided Tolerance Limits for a One-Way Balanced Random-Effects ANOVA Model. *Technometrics* 1992, 34, 176-85.

            
8. Montgomery, D C. *Introduction to Statistical Quality Control, 6th Edition.* John Wiley & Sons, Inc.: Hoboken, NJ, 2009; p. 63.

            
9. Wheeler, D J, Chambers, D S. *Understanding Statistical Process Control, Third Edition.* SPC Press: Knoxville, Tenn., 2010.

            
10. Scherder, T. et al. Benefits and challenges of process capability metrics. *Pharmaceutical Engineering*, ISPE, November-December, 2023.

            
11. Burdick, R. K. & Graybill, F. A. *Confidence intervals on variance components.* CRC Press, 1992.

            
12. Farnuma, N; Stantona, L. Narrow Limit Gauging: Go or No Go? *Qual Eng* 1991, 3 (3), 293-307.

            
13. Nelson, L. Nomograph of Sample Size for Estimating Standard Deviation. *J Quality Tech* 2018, 11 (Sup1), 25-26.

            
14. Greenwood, J A; Sondomire, M M. Sample Size Required for Estimating the Standard Deviation as a Percent of its True Value. *J Am Statistical Assoc* 1950, 45 (250), 257-60.

            
15. Flight, L., and Julious, S. A. Practical guide to sample size calculations: non-inferiority and equivalence trials. *Pharmaceut. Statist.*, 2016, 15: 80–89.

            
16. Parenteral Drug Association. *Technical Report No. 59: Utilization of Statistical Methods for Production Monitoring;* PDA: Bethesda, Md., 2012.

            
17. Laney, D B. Improved Control Chart for Attributes. *Qual Eng* 2002, 14 (4), 531-37.

        

    

    

        

## 導師解析 Tutorial Commentary

        

            

#### 核心概念解析 Key Concepts

            

**參考文獻分類導讀：**這 17 篇參考文獻可依主題分為以下幾個類別，方便讀者依需求查閱：

        

        

        
            
                
                
                
            
| 主題分類 | 文獻編號 | 內容摘要 |
| --- | --- | --- |
            
                ****
                
                
            
| 統計區間與容許區間 | Ref 1, 6, 7 | Meeker 等人的經典教科書，以及 Hoffman 和 Vangel 關於容許區間 (Tolerance Intervals) 的專論，適用於製程驗證中的 acceptance criteria 設定 |
            
                ****
                
                
            
| SPC 與管制圖 | Ref 8, 9, 16, 17 | Montgomery 和 Wheeler 的 SPC 經典教科書；TR 59 為 PDA 姊妹報告；Laney 的改良計數型管制圖 |
            
                ****
                
                
            
| 樣本量與檢定力 | Ref 5, 13, 14, 15 | 樣本量計算工具、標準差估計所需樣本量、非劣性/等效性試驗的樣本量指引 |
            
                ****
                
                
            
| 製程能力指標 | Ref 10, 11 | Scherder 對製程能力指標的優缺點分析；Burdick 關於變異成分信賴區間的方法論 |
            
                ****
                
                
            
| 風險評估與 PAT | Ref 2, 3 | FDA PAT 指引（製程分析技術框架）；Oliver 的 3D 風險評估模型 |
            
                ****
                
                
            
| 其他統計方法 | Ref 4, 12 | 繪圖位置爭議的結論性文章；窄限量規 (Narrow Limit Gauging) 方法論 |
        

        

        

            

#### 重點提示 Key Notes

            

**必讀文獻推薦：**

            

                
- **Ref 8 (Montgomery)：**SPC 入門最佳教科書，涵蓋所有管制圖的數學基礎和應用案例。若你是統計製程管制的初學者，建議從此書開始

                
- **Ref 16 (TR 59)：**PDA 的姊妹報告，專門探討生產監控中的統計方法，是 TR 60 附錄內容的最佳補充

                
- **Ref 17 (Laney)：**Laney 的原始論文，若你的工廠處理大樣本量的計數型數據，務必了解其 p'/u' chart 方法

                
- **Ref 1 (Meeker)：**統計區間的權威參考書，涵蓋信賴區間、預測區間、容許區間的理論與實務

            

        

        

            

#### 比喻說明 Analogy

            

這份參考文獻清單就像一間製藥統計師的「工具箱目錄」。不是每個工具你都需要隨時使用，但你要知道：

            

                
- 需要設定規格限的容許區間時，去找 Meeker (Ref 1)

                
- 需要建立管制圖時，查 Montgomery (Ref 8) 或 Wheeler (Ref 9)

                
- 需要決定取樣數量時，參考 Ref 5, 13, 14

                
- 大樣本計數型數據出問題時，翻 Laney (Ref 17)

            

            

好的工程師不需要記住所有公式，但一定要知道遇到問題時去哪裡找答案。

        

        

            

#### 練習思考 Practice Questions

            

                
1. 如果你需要為 CPV 方案制定管制圖策略，你會優先閱讀上述哪些參考文獻？請列出前 3 名並說明原因。

                
2. FDA PAT 指引 (Ref 2) 發布於 2004 年，其核心理念如何與 TR 60 的 Lifecycle Approach 相呼應？

                
3. 你注意到 Ref 17 (Laney, 2002) 提出的改良方法至今已有 20 多年歷史，為什麼在最新版 TR 60 (2026) 中仍被推薦？這說明了什麼？

            

        

    

    

### 本節重點回顧 Section Summary

    

        
- **管制圖分類：**計量型數據（Variables）使用 x̄/R、I/MR、Levey-Jennings、Moving Average、EWMA、CUSUM 等管制圖；計數型數據（Attributes）使用 p、np、c、u 管制圖

        
- **管制圖選擇邏輯：**Shewhart 圖適合偵測大偏移；EWMA 和 CUSUM 適合偵測持續性小偏移，在 CPV 階段特別有價值

        
- **大樣本量陷阱：**當樣本量很大（n > 500~1,000）時，傳統計數型管制圖的分布假設可能被違反，導致過多假警報。Laney's p'/u' chart 或 I/MR 圖是有效的替代方案

        
- **ARL 的決策意義：**Average Run Length 衡量管制圖偵測偏移的速度。ARL0 要大（避免假警報），ARL1 要小（快速偵測真實偏移）。ARL 可作為選擇管制圖類型和取樣策略的定量依據

        
- **參考文獻活用：**17 篇附錄參考文獻涵蓋統計區間、SPC 管制圖、樣本量設計、製程能力指標、風險評估等主題，是深入學習的關鍵資源。Montgomery (Ref 8)、TR 59 (Ref 16) 和 Laney (Ref 17) 為最高優先閱讀項

    

    

PDA Technical Report No. 60 (Revised 2026) — Process Validation: A Lifecycle Approach

    

Section 7b: Appendix II Control Charts + Appendix References (10.0-11.0, p144-p155)

    

Educational Material for CDMO Professionals | Bilingual EN/繁體中文

⇧