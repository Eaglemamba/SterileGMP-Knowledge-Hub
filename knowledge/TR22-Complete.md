# PDA Technical Report No. 22 (Revised 2025): Process Simulation for Aseptically Filled Products

> 無菌充填產品製程模擬 完整教學版

## Section 0: Introduction & Glossary 導論與術語 (p1-p8)

# Section 0: Introduction & Glossary

    

前言與術語表 (1.0 - 2.0)

    

PDA Technical Report No. 22 (Revised 2025): Process Simulation for Aseptically Filled Products | p1 - p8

    

### 本章學習目標

    

        
- 理解 PDA TR22 (Revised 2025) 的修訂背景、目的與適用範圍

        
- 掌握 Aseptic Process Simulation (APS) 在無菌製程驗證中的定位與角色

        
- 了解 APS 與 Contamination Control Strategy (CCS) 之間的關聯

        
- 熟悉本報告中所使用的關鍵術語及其定義

        
- 認識風險導向 (risk-based) 方法在 APS 設計與執行中的核心地位

    

    

### 本節內容導覽

    

        1.0 Introduction 前言
        1.1 Purpose 目的
        1.1 Scope 範圍
        2.0 Glossary 術語表
    

## 1.0 Introduction 前言

    

        

### 原文內容 Original Text

        

This document replaces the previous revision of PDA Technical Report No. 22: Process Simulation Testing for Aseptically Filled Products published in 2011 and represents a significant update of the content. The intent of the current effort is to provide updates that reflect changes in aseptic processing that have occurred within the global industry and regulatory landscape and, specifically, to support a manufacturing site's holistic contamination control strategy (CCS). The authors have attempted to address the subject as fully as possible, recognizing the notable contributions made by other organizations, regulators, compendia, and individuals who have worked in this area. In addition, the report provides guidance on and supports sound risk-based approaches in the design and execution of aseptic process simulation (APS).

        

Insights from the discussion between industry experts and regulatory agencies on the latest revision of the European Union (EU) GMP Annex 1: Manufacture of Sterile Medicinal Products (issued August 25, 2022)1 concerning APS have been considered in this document to present the current thinking and guidance on this topic.

        

            1 The PIC/S GMP Annex 1 is identical to the EU Annex 1 and, hereafter, EU Annex 1 means EU-PIC/S Annex 1.
        

    

    

        

### 導師解析 Tutorial Commentary

        

            

#### 核心概念解析 Key Concepts

            

**Aseptic Process Simulation, APS (無菌製程模擬)：**又稱 Media Fill (培養基充填)，是使用微生物培養基來模擬整個無菌製造流程，以驗證該製程是否能確保產品的無菌性。這是無菌製程驗證的最終展示 (final demonstration)，而非唯一手段。

            

**Contamination Control Strategy, CCS (污染控制策略)：**2022年 EU GMP Annex 1 強制要求的整體策略文件，涵蓋對微生物、內毒素/熱原、及外來微粒污染風險的識別、評估、控制與監測。TR22 (2025) 的修訂正是為了支持 CCS 的整體架構。

        

        

            

#### 比喻說明 Analogy

            

把 APS 想像成**醫院的感染管控演習**。醫院不會只靠一次消防演練就宣稱「我們永遠不會發生院內感染」。真正的感染管控需要：設施設計、空調過濾、人員培訓、消毒 SOP、環境監測等所有措施的整合。APS 就像年度消防演練 —— 它是所有控制措施的「總驗收」，但不能取代日常的感染管控工作。

        

        

            

#### 重點提示 Key Notes

            

**2025 修訂的三大驅動力：**

            

                
- **EU GMP Annex 1 (2022)：**這是自 2008 年以來最大幅度的修訂，對 APS 提出了更明確、更嚴格的要求，包括 CCS 的強制性框架

                
- **全球法規趨同：**PIC/S Annex 1 與 EU Annex 1 完全一致，意味著更多國家採用相同標準

                
- **風險導向思維：**從「一刀切」的 APS 設計轉向基於科學評估與風險分析的設計方法

            

        

        

            

#### 練習思考 Practice Questions

            

                
1. 為什麼 TR22 強調 APS 不應被視為驗證無菌製程的「主要手段」？如果不是 APS，那什麼才是？

                
2. EU GMP Annex 1 (2022) 的發布如何影響了這份技術報告的修訂方向？

            

        

    

## 1.1 Purpose 目的

    

        

### 原文內容 Original Text

        

PDA Technical Report No. 22: Process Simulation Testing for Aseptically Filled Products (Revised 2025) (TR 22) should be considered a guide; it is not intended to establish any mandatory or implied standard. Readers should recognize that there may be additional requirements imposed because of new or localized regulatory expectations that are not included in this document. This technical report does not provide a universally appropriate template for the execution of APS studies. Each company must determine the appropriate rationale and approaches applicable to their unique operations. While this document presents an approach that can be widely used, it is not possible to ensure that it meets every specific requirement from every country. Companies need to ensure that any country-specific requirements are addressed for their products.

        

The recurring theme in this report is the consideration of risk to product sterility and patient safety as criteria for the design of APS studies. Regulatory authorities have issued guidelines and regulations for aseptic process study design, and companies should be aware of and account for these requirements when planning their studies. The use of relative risk and scientific evaluation can provide useful information to help inform design decisions and are essential elements to improving understanding of the aseptic process and its capabilities.

        

            "Validation of an aseptic process is an exhaustive process that includes at a minimum appropriate process design, equipment qualification, adherence to an adequate pharmaceutical quality system, well-defined process controls, process monitoring and data evaluation, personnel training and includes the APS. The APS alone should not be considered as the primary means to validate the aseptic process or aspects of the aseptic process; it is simply a final demonstration of the sum of the controls."
        

        

The effectiveness of the aseptic process should be determined through process design, adherence to the pharmaceutical quality system and process controls, training, and evaluation of monitoring data (1).

    

    

        

### 導師解析 Tutorial Commentary

        

            

#### 核心概念解析 Key Concepts

            

**「指引」(Guide) vs.「標準」(Standard)：**TR22 明確聲明它是一份指引，不是強制性標準。這是 PDA 技術報告的一貫定位：提供業界最佳實踐的參考，但每家公司需根據自身情況進行調整。

            

**無菌製程驗證的完整拼圖：**原文列出了完整的驗證要素，APS 只是其中之一：

            

                
- Process Design (製程設計)

                
- Equipment Qualification (設備確效)

                
- Pharmaceutical Quality System (藥品品質系統)

                
- Process Controls (製程管控)

                
- Process Monitoring & Data Evaluation (製程監測與數據評估)

                
- Personnel Training (人員培訓)

                
- APS (無菌製程模擬) — 最終展示

            

        

        

            

#### 比喻說明 Analogy

            

APS 就像學生的**期末考試**。考試成績好不等於你真的學好了；真正的學習來自平時的聽課、作業、實驗、討論。同理，APS 通過不代表無菌製程就沒問題 —— 真正的保證來自日常的設計、管控、培訓和監測。反過來說，如果期末考不及格（APS 失敗），那顯然日常學習（製程管控）出了嚴重問題。

        

        

            

#### 重點提示 Key Notes

            

**CDMO 特別注意：**作為委託開發暨製造組織，您可能面對來自不同國家客戶的不同法規要求。TR22 的這段聲明暗示：

            

                
- 不能只依賴一份 APS protocol 打天下 — 需要考慮客戶所在市場的特定要求

                
- 美國 FDA、EU/PIC/S、日本 PMDA、中國 NMPA 等各有細微差異

                
- 風險導向的 APS 設計能提供更靈活的框架來適應不同法規需求

            

        

        

            

#### 實務應用 Practical Application

            

假設您的 CDMO 同時為美國和歐盟市場生產無菌注射劑。美國 FDA Guidance (2004) 與 EU GMP Annex 1 (2022) 在 APS 設計上有些差異（例如充填數量、頻率要求）。您的 APS protocol 應如何設計，才能同時滿足兩個市場的要求？答案通常是：採用較嚴格的要求作為基準，並用風險評估來合理化設計決策。

        

        

            

#### 練習思考 Practice Questions

            

                
1. 原文中的 "final demonstration of the sum of the controls" 這句話的含義是什麼？為什麼 APS 是「總和」而非「替代」？

                
2. 如果一家公司的 APS 連續三次全數通過（零污染），但環境監測數據顯示出不良趨勢，這代表什麼？應該如何處理？

            

        

    

## 1.1 Scope 範圍

    

        

### 原文內容 Original Text

        

This technical report addresses process capability assessment for aseptic processing. Such assessments consist of one or more APS during pharmaceutical and biopharmaceutical aseptic formulation and filling activities of products for human and veterinary use. Aseptic operations required in the preparation of sterile bulk materials and biotechnology inoculums and feed materials are not a part of this document.

        

While the focus of this document is on aseptic processing in the pharmaceutical and biopharmaceutical industry, application of the concepts and principles to the preparation of sterile medical devices and diagnostics may be appropriate. Readers are encouraged to review PDA's Points to Consider No 1: Aseptic Processing (Revised 2023) for a more detailed discussion on aseptic processing related topics that could have an impact on the APS exercise.

    

    

        

### 導師解析 Tutorial Commentary

        

            

#### 核心概念解析 Key Concepts

            

**適用範圍 (In Scope)：**

            

                
- 藥品與生物製藥的無菌配方及充填活動

                
- 人用及動物用產品

                
- 可延伸應用至無菌醫療器材與體外診斷產品

            

            

**不適用範圍 (Out of Scope)：**

            

                
- 無菌原料藥 (sterile bulk materials) 的製備

                
- 生技製程中的菌種培養與進料 (inoculums and feed materials)

            

        

        

            

#### 重點提示 Key Notes

            

**交叉參考：**原文特別推薦讀者參閱 PDA Points to Consider No. 1: Aseptic Processing (Revised 2023)。這份文件涵蓋了無菌製程的更廣泛議題，而 TR22 則專注於 APS 這個特定環節。兩份文件互為補充，在實務上應一起參考。

        

        

            

#### 比喻說明 Analogy

            

想像一條河流：上游（原料藥製備、菌種培養）的水質當然重要，但 TR22 的焦點是**下游的充填站** — 也就是把已經準備好的無菌產品裝入容器並密封的那段製程。上游的管控另有其他指引負責。

        

        

            

#### 練習思考 Practice Questions

            

                
1. 為什麼 TR22 將無菌原料藥的製備排除在範圍之外？這類操作的 APS 會由哪些其他文件來指導？

                
2. 一家同時生產無菌注射劑和無菌醫療器材的工廠，是否可以用相同的 APS 方法論來驗證兩條產線？

            

        

    

## 2.0 Glossary 術語表

    

        

### 原文內容 Original Text

        

Definitions have been provided to help clarify the concepts discussed in this document. While some definitions used may vary among companies, geographic location, etc., the definitions described below are consistently used within this document. Where a definition is based on another published source, the source is cited.

        

### Environmental Monitoring Terms 環境監測相關

        

**Action Limit (Environmental Monitoring)**  

        An established relevant measure (e.g., microbial or airborne particle limits) that, when exceeded, should trigger appropriate investigation and corrective action based on the investigation.

        

**Alert Level (Environmental Monitoring)**  

        Established microbial or total particulate values giving early warning of potential drift from normal operating conditions, which is not necessarily grounds for definitive corrective action but typically requires follow-up action to address the potential problem. Alert levels are established based on routine and qualification trend data and are periodically reviewed. The alert level can be based on a number of parameters including adverse trends, individual excursions above a set value, and repeat events.

        

### Microbiology Terms 微生物學相關

        

**Aerobic Microorganism**  

        A microorganism that will grow primarily in the presence of oxygen.  

        *Note: For the purpose of this technical report, this definition encompasses facultative anaerobes.*

        

**Anaerobic Microorganism**  

        A microorganism that will grow only in the absence of oxygen.

        

**Bioburden**  

        The number of viable microorganisms associated with a specific item such as personnel, manufacturing environments (air and surfaces), equipment, product packaging, raw materials (including water), in-process materials, or finished products.

        

**Colony Forming Unit (CFU)**  

        A microbiological term that describes a single detectable colony that originates from one or more microorganisms. Colony forming units are typically expressed as CFU per ml for liquid samples, CFU per m3 for active air samples, CFU/time exposure for passive air samples and CFU per sample for touch samples captured on a solid medium (whether settle or contact plates).

        

**Facility Isolates**  

        Suitably representative microorganisms of a site that are frequently recovered through environmental monitoring within the classified zone/areas, including Grade A and Grade B areas, personnel monitoring; utilities; in process bioburden, or positive sterility test results.

        

**Growth Promotion Test**  

        A test performed on the growth media to demonstrate that it will support microbial growth for the selected challenge microorganisms.

        

### Aseptic Processing Terms 無菌製程相關

        

**Aseptic Filling**  

        The part of aseptic processing where a presterilized or aseptically manufactured product is filled and sealed into sterile containers in an environment of suitable quality, such as a cleanroom (with appropriate physical separation), a restricted access barrier system (RABS), isolator, or equivalent.

        

**Aseptic Processing**  

        Handling of sterile products and materials in a controlled environment, in which the air supply, facility, materials, equipment and personnel are regulated to prevent microbial, endotoxin/pyrogen and particulate contamination (1).  

        *Note: Manual aseptic processing is when aseptic processing is performed manually by an operator.*

        

**Aseptic Processing Area (APA)**  

        A controlled environment, consisting of several zones, in which the air supply, facility, materials, equipment, and personnel are regulated to control microbial and particulate contamination.

        

**Aseptic Process Simulation (APS)**  

        A simulation of the entire aseptic manufacturing process in order to demonstrate the capability of the process to assure product sterility. Includes all aseptic operations associated with routine manufacturing, e.g., equipment assembly, formulation, filling, lyophilization, and sealing processes, as necessary.  

        *Note: Also referred to as "Media Fill".*

        

**Compounding**  

        A process in which a bulk drug substance is combined with one or more excipients and/or another bulk drug substance to produce a drug product.  

        *Note: Commonly referred to as "formulation".*

        

**First Air**  

        Refers to air exiting a HEPA filter in a unidirectional airstream, that is essentially particle free and has not been interrupted (potential to add contamination) prior to reaching exposed product and product contact surfaces.

        

**Grade A Air Supply**  

        Air which is passed through a filter qualified as capable of producing grade A total particle quality air, but where there is no requirement to perform continuous total particle monitoring or meet grade A viable monitoring limits. Specifically used for the protection of fully stoppered vials where the cap has not yet been crimped (1).

        

### Process & Quality Terms 製程與品質相關

        

**Bracket**  

        A demonstration of process performance at two different values of a given parameter (e.g., extremes of container closure size, line speed, etc.) allowing the use of any values of that parameter falling within this range.

        

**Campaign**  

        Campaigns are the manufacture of a series of batches of the same product (or product family) in sequence in a given period, with strict adherence to established and validated control measures but without the need for cleaning, disinfection, or decontamination of the Grade A environment.

        

**Change Control**  

        A formal program that describes evaluation and actions to be taken if a change to facilities, materials, equipment, and/or processes used in the fabrication, packaging, and testing of drugs, is proposed or completed that may affect the operation of the quality or support systems.

        

**Cleaning**  

        A process for removing contamination (e.g., product residues or disinfectant residues).

        

**Contamination Control Strategy (CCS)**  

        A summary of the processes and measures for identification, assessment, control, and monitoring of contamination risks that include microorganisms, pyrogens/endotoxins, and foreign particulates derived from current product and process understanding, that assures process performance and product quality.

        

**Contamination Rate**  

        The percentage of units filled in an aseptic process simulation that are positive for microbial growth after incubation.

        

**Contaminated Unit**  

        Unit filled in an APS that exhibits presence of microbial growth after incubation.

        

### Barrier & Containment Systems 屏障與隔離系統

        

**Closed System**  

        A system used for the manufacture of sterile products or the handling of sterile materials that maintains physical separation and microbiological integrity, required to isolate and prevent exposure of the product, materials, or interior surfaces from the surrounding environment and operators, throughout the use of the system.

        

**ISO 5**  

        Environmental operating conditions defined in ISO 14644-1:2015 Cleanrooms and Associated Controlled Environments — Part 1: Classification of air Cleanliness by Particle Concentration (3).  

        *Note: For total particulates, ISO 5 is roughly comparable to Grade A (total particulates limits) as defined in EU GMP Annex 1. The ISO classification as described in ISO 14644-1:2015 is not applicable for viable particulate measures.*

        

**Isolator**  

        A contained, decontaminated environment meeting Grade A/ISO 5 conditions used for aseptic process manufacturing, that provides an uncompromised, continuous isolation of its interior from the external environment. Once decontaminated by a validated cycle, an isolator prevents the microbiological contamination of sterile products and product contact surfaces of the interior by enclosures and the supply of continuous, controlled overpressure of HEPA-filtered air (4).  

        *Note: Isolators are typically categorized as being "closed" or "open".*

        

**Closed Isolator Systems:** Excludes external contamination from the isolator's interior by transfer material via aseptic connection to auxiliary equipment, rather than using openings to the surrounding environment. Closed systems remain sealed throughout operations (4).

        

**Open Isolator Systems:** Designed to allow for the continuous or semicontinuous ingress and/or egress of materials during operations through one or more openings. Openings are engineered (e.g., using continuous overpressure) to exclude the entry of external contamination into the isolator (4).

        

### Interventions 介入操作

        

**Intervention**  

        Activities, manipulations, and tasks in Grade A during aseptic operations.

        

**Corrective Intervention:** An intervention that is performed to correct or adjust an aseptic process during its execution. Examples include activities such as: clearing component misfeed, adjusting sensors, and replacing equipment components. These may not occur at a set frequency in the routine aseptic process.

        

**Inherent Intervention:** An intervention that is an integral part of the aseptic process and is required for setup or routine operation and/or monitoring, for example, aseptic assembly, container replenishment, or environmental sampling. Inherent interventions are required by batch record, procedure, or work instruction for the proper conduct of the aseptic process.

        

**Critical Intervention**  

        An intervention (corrective or inherent) into the critical zone (1).

        

**Critical Zone**  

        A location within aseptic processing area in which product and critical surfaces are exposed to the environment.

        

### Other Terms 其他

        

**Disinfection**  

        The process by which the reduction of the number of microorganisms is achieved by the irreversible action of a product on their structure or metabolism, to a level deemed to be appropriate for a defined purpose.

        

**Dynamic (Operational) Environmental Monitoring**  

        The condition where production operations are actively occurring as defined by the individual firm. Personnel may or may not be present at this time (2).

        

**Environmental Monitoring Program**  

        Describes the processes and activities that need to take place to characterize and monitor the quality of the environment.

        

**Integrity Test**  

        Test to determine the integrity of a system supposed to be integral, e.g. sterilizing grade filters (incl. PUPSIT), SUS, container-closure systems, barrier system gloves.

        

**Intervention Risk Evaluation & Management Model (IREM)**  

        Risk assessment method used to identify, evaluate, and rank aseptic process interventions in an objective and logical manner.

        

**Matrix**  

        Describes the key variables that need to be considered in the APS program, it captures all products produced on a line and clearly shows how the overall APS program challenges each of those key variables.

        

**Media Fill**  

        See Aseptic Processing Simulation.

        

**Observer**  

        Individuals designated by the Quality Unit to observe, record, and address the performance and activities of the APS and routine aseptic operations.

        

**Process Validation**  

        The collection and evaluation of data, from the process design stage through commercial production, which establishes scientific evidence that a process is capable of consistently delivering quality product (5).

        

**Quality Unit**  

        A group organized within an organization to promote quality in general practice (6).

    

    

        

### 導師解析 Tutorial Commentary

        

            

#### 核心概念解析 Key Concepts

            

這份術語表涵蓋了 TR22 全文使用的關鍵定義。以下將最重要的術語分組解析，幫助您建立系統性的理解框架。

        

        
        

            

#### 重點提示：Alert vs. Action Limits

            

**Alert Level (警戒限度)** 與 **Action Limit (行動限度)** 是環境監測的兩道防線：

            

                
- **Alert Level：**「黃燈」— 提示可能偏離正常狀態，需要跟進調查但不一定要停產

                
- **Action Limit：**「紅燈」— 必須立即啟動調查和矯正行動

            

            

這兩個限度應基於歷史趨勢數據和確效數據來設定，並定期檢討。

        

        
        

            

#### APS 的完整定義解析

            

注意 APS 的定義中提到模擬範圍包含：

            

                
- **Equipment assembly (設備組裝)**

                
- **Formulation (配方調配)**

                
- **Filling (充填)**

                
- **Lyophilization (凍乾)** — 如適用

                
- **Sealing (密封)**

            

            

關鍵詞是「entire aseptic manufacturing process」— 不是只模擬充填這一步，而是模擬所有無菌操作環節。

        

        
        

            

#### 重點提示：Intervention 分類體系

            

介入操作 (Intervention) 的分類是 APS 設計的核心議題之一：

            
                
                    
                    
                    
                    
                
| 分類 | 中文 | 特徵 | 範例 |
| --- | --- | --- | --- |
                
                    ****
                    
                    
                    
                
| Inherent | 固有介入 | 計劃性、SOP 規定的 | 容器補充、環境取樣、設備組裝 |
                
                    ****
                    
                    
                    
                
| Corrective | 矯正介入 | 非計劃性、糾錯用的 | 清除卡瓶、調整感測器、更換零件 |
                
                    ****
                    
                    
                    
                
| Critical | 關鍵介入 | 進入 Critical Zone 的任何介入 | 上述兩類中涉及暴露區域的操作 |
            

            

在設計 APS 時，必須確保所有類型的介入操作都被納入模擬中。後續章節會介紹 IREM 模型來系統性地評估介入風險。

        

        
        

            

#### 比喻說明：Isolator 的開放與封閉

            

把 **Isolator (隔離器)** 想像成兩種太空站：

            

                
- **Closed Isolator (封閉式)：**就像國際太空站的對接艙 — 物料透過密封接口傳入傳出，內部完全不與外界接觸

                
- **Open Isolator (開放式)：**就像有氣閘門的太空站 — 設計了特殊的開口讓物料進出，但透過正壓氣流確保外界空氣不會倒灌進來

            

            

兩種設計都能提供 Grade A/ISO 5 的環境，但對 APS 設計的挑戰不同 — 開放式因為有物料進出口，需要更多關注開口處的污染風險。

        

        
        

            

#### CCS 的核心地位

            

**Contamination Control Strategy (污染控制策略)** 是 EU GMP Annex 1 (2022) 引入的最重要概念之一。其定義涵蓋了三大污染類型的識別、評估、控制與監測：

            

                
- **Microorganisms (微生物)**

                
- **Pyrogens/Endotoxins (熱原/內毒素)**

                
- **Foreign Particulates (外來微粒)**

            

            

APS 是 CCS 架構中的一個關鍵驗證工具，但不是 CCS 的全部。

        

        
        

            

#### 比喻說明：Bracket 策略

            

**Bracket (包夾法/極端值驗證)** 就像測試一座橋的承重能力：如果最輕的小客車和最重的貨車都能安全通過，那中間重量的車輛也沒問題。在 APS 中，如果最小和最大的容器規格都能通過，中間規格就不需要逐一測試。這是一種聰明的風險導向策略，可以顯著減少 APS 的執行次數。

        

        
        

            

#### IREM 模型簡介

            

**Intervention Risk Evaluation & Management Model (介入風險評估與管理模型)** 是 TR22 提出的系統性方法，用於：

            

                
- 識別所有無菌製程中的介入操作

                
- 評估每個介入操作對無菌性的風險等級

                
- 排定優先順序並決定哪些必須在 APS 中模擬

            

            

這個模型將在後續章節（第 15 章）詳細展開。

        

        

            

#### 練習思考 Practice Questions

            

                
1. 在 APS 中，為什麼需要同時考慮 Inherent Intervention 和 Corrective Intervention？如果只模擬 Inherent Intervention 會遺漏什麼風險？

                
2. Alert Level 和 Action Limit 的設定依據是什麼？為什麼不能直接套用法規中的限度值？

                
3. 「封閉式隔離器」和「開放式隔離器」在 APS 設計上會有什麼不同的考量？

                
4. Campaign manufacturing (連續生產) 對 APS 模擬的持續時間有什麼影響？

            

        

        

            

#### 實務應用 Practical Application

            

假設您正在建立新廠的 APS 方案。術語表中的每個定義都對應了一個您需要在 APS protocol 中明確定義的要素。建議在撰寫 APS 協議時，將這些術語作為「定義」章節的基礎，確保團隊內部對所有關鍵概念有一致的理解。特別注意：不同客戶可能對同一個術語有不同的解讀，因此在 protocol 中明確定義可以避免後續爭議。

        

    

    

### 本節重點回顧 Section Summary

    

        
- **TR22 (2025) 定位：**這是一份指引而非強制標準，旨在反映 EU GMP Annex 1 (2022) 後的最新業界思維，並強調風險導向的 APS 設計方法

        
- **APS 的角色：**APS 是無菌製程驗證的「最終展示」，但不能取代製程設計、設備確效、品質系統、製程管控、監測和人員培訓等基礎要素

        
- **CCS 整合：**APS 應納入製造場所整體污染控制策略 (CCS) 的框架中，而非獨立運作

        
- **適用範圍：**聚焦於藥品/生物製藥的無菌配方與充填活動，不涵蓋無菌原料藥製備或生技菌種培養

        
- **Intervention 分類：**固有介入 (Inherent)、矯正介入 (Corrective)、關鍵介入 (Critical) 的三層分類體系是 APS 設計的基礎

        
- **術語一致性：**跨團隊、跨客戶的術語一致理解是成功執行 APS 的前提條件

    

    

PDA Technical Report No. 22 (Revised 2025): Process Simulation for Aseptically Filled Products

    

Section 0: Introduction & Glossary (1.0 - 2.0) | Educational Material

    

This is an educational commentary for CDMO professionals. Refer to the original PDA document for official guidance.

⇧

## Section 1: APS Concepts & Principles APS概念與原則 (p9-p13)

# Section 3.0 Aseptic Process Simulation Concepts and Principles

    

無菌製程模擬概念與原則

    

PDA Technical Report No. 22 (Revised 2025) — Process Simulation for Aseptically Filled Products | p9 – p13

    

### 本章學習目標

    

        
- 理解 Aseptic Process Simulation (APS) 的核心目的與基本原則

        
- 掌握 APS 的先決條件 (Prerequisites)，了解何時才適合執行 APS

        
- 了解 APS 的頻率與次數要求，以及法規對初始與定期再確認的期望

        
- 學會如何定義與選擇 Worst-Case 情境，避免過度或不足的挑戰設計

        
- 掌握風險評估 (Risk Assessment) 在 APS 設計中的關鍵角色與應用方法

    

    

### 本節目錄 Section Contents

    

        3.0 APS Concepts
        3.1 Prerequisites
        3.2 Number & Frequency
        3.3 Worst-Case Scenarios
        3.4 Risk Assessment for APS Design
    

3.0 Aseptic Process Simulation Concepts and Principles

    

        

## Original Text

        

The validation of an aseptic process should include simulation using a microbial growth media and where necessary the use of a surrogate/placebo in place of the product (e.g., for powder filling processes). An APS normally includes exposing the microbiological growth medium to product-contact surfaces of equipment, container–closure systems, critical areas, as well as process interventions and manufacturing environment to closely simulate the same exposure that the product itself will undergo. Results are then interpreted (i.e., whether the filled media after incubation indicate absence or presence of microbial growth). CCS should be developed and implemented before executing an APS.

    

    

        

## 導師解析 Tutorial Commentary

        

            

#### 核心概念解析 Key Concepts

            

**Aseptic Process Simulation, APS (無菌製程模擬)：**又稱為 Media Fill，是無菌製程確效 (Validation) 中最核心的一環。其基本邏輯是：用微生物培養基取代實際產品，經過與正式生產完全相同的操作流程，再將充填好的培養基進行培養。若培養後無微生物生長，便可佐證該無菌製程具備足夠的無菌保證能力。

            

**Contamination Control Strategy, CCS (污染控制策略)：**TR22 特別強調 CCS 必須在執行 APS「之前」就已建立並實施。這代表 APS 不是從零開始驗證無菌能力，而是驗證一套已完整規劃的污染控制體系是否有效運作。

        

        

            

#### 比喻說明 Analogy

            

想像你是一家手術室的管理者，想驗證手術室的無菌環境是否合格。你不會直接讓病人進來做手術來「測試」，而是先用培養皿模擬手術過程中的所有接觸，然後把培養皿送去培養。如果培養皿上長出細菌，就代表手術室的無菌控制有問題 — 這正是 APS 的核心邏輯。

        

        

            

#### 重點提示 Key Notes

            

APS 的價值在於它是一個「整合性測試」，一次性檢驗了設備、環境、人員操作、物料傳遞等所有環節。單獨的環境監測或設備確認只能驗證局部，但 APS 將所有要素串聯起來，驗證整體系統的無菌保證能力。

            

對於粉末充填 (Powder Filling) 製程，因為培養基無法以粉末形式充填，必須使用 Surrogate/Placebo（替代物）。這時需要額外評估替代物是否能真正代表實際製程的風險暴露。

        

    

3.1 Prerequisites

    

        

## Original Text

        

For a new facility or production process, APSs are performed as part of the overall validation activities. Initial APSs are generally conducted after completion of:

        

            
- Equipment qualification

            
- Facility, heating, ventilation, and air conditioning (HVAC), and utilities qualification

            
- Sterilization process validation

            
- Implementation of environmental decontamination procedures (cleaning, disinfection and Isolator decontamination)

            
- Personnel training and gowning certification

            
- Environmental monitoring (EM) program should be established

            
- Standard operating procedures (SOPs) are available and personnel is trained on the applicable procedures

            
- Aseptic process and associated intervention risk assessment

        

        

Prior to performing APS; engineering batches and/or water trials should be performed to understand any handling issues and the interventions required for the process.

    

    

        

## 導師解析 Tutorial Commentary

        

            

#### 核心概念解析 Key Concepts

            

**Prerequisites (先決條件)：**APS 不是驗證活動的「起點」，而是接近「終點」的整合測試。在執行 APS 之前，必須確認所有基礎建設都已到位 — 設備已確認合格、HVAC 系統已驗證、滅菌製程已確效、人員已通過培訓與穿衣認證。

            

**Engineering Batches / Water Trials (工程批次/水試運轉)：**在正式 APS 之前，先用水或其他非微生物媒介進行試運轉，目的是發現機械操作問題、確認介入操作 (Interventions) 的類型與頻率。這一步可以避免在正式 APS 時因機械故障而導致無謂的失敗。

        

        

            

#### 比喻說明 Analogy

            

APS 就像是一場正式的舞台演出。你不會在演員還沒排練、燈光還沒調好、舞台還沒搭完的時候就開演。Engineering Batches 就是「彩排」— 先確認所有技術環節都沒問題，才進入正式演出 (APS)。如果彩排時發現麥克風有雜音，你可以先修好再演出；但如果直接開演才發現問題，代價就大得多了。

        

        

            

#### 重點提示 Key Notes

            

這份先決條件清單實際上是一個「確效成熟度檢核表」(Validation Readiness Checklist)。在法規稽查時，查核員經常會檢視 APS 執行的時間點，確認是否在所有先決條件完成之後才進行。如果在 HVAC 確效尚未完成就執行了 APS，即使結果合格也可能被質疑其效力。

            

                
- 設備確認 (IQ/OQ/PQ) 必須完成

                
- 滅菌製程 (如高壓蒸氣、VHP) 必須已確效

                
- 環境監測 (EM) 計畫必須已建立並運行

                
- 所有相關 SOP 必須已就緒且人員已受訓

            

        

        

            

#### 實務應用 Practical Application

            

在 CDMO 情境中，當客戶要求啟動新產品的無菌充填時，專案經理必須確認所有先決條件是否到位。常見的延遲原因包括：HVAC 再確認逾期、人員穿衣認證過期、新設備的 PQ 尚未完成等。建議建立一份標準化的「APS Readiness Checklist」，在每次 APS 前逐項確認，避免因疏忽而導致 APS 無效。

        

    

3.2 Number and Frequency of Simulations

    

        

## Original Text

        

The number and frequency of APS performed should be based on an assessment of the risks posed by the process. The initial APS supports that a new facility, line, or process is operating under the desired state of control. There is a regulatory expectation that at least three consecutive successful APSs are performed when qualifying a new facility, filling line, or process (1, 4). Using quality risk management (QRM) risk-based approaches is important as the exact number may depend on the complexity and variety of processes and may require more than 3.

        

While it is allowed by regulations to combine dynamic environmental qualification with APS, this is not recommended for new facilities or in general when the reliability of the controls to ensure proper environmental conditions during operation is not yet known. APS (periodic requalification) should be repeated twice per year (approximately every six months) for each aseptic process, each filling line, and each shift. Each operator should participate in at least one successful APS annually. Consideration should be given to performing an APS after the last batch prior to shut down, before long periods of inactivity, or before decommissioning or relocation of a line (1, 4). Additional APSs may be required based on a risk assessment to help evaluate any major changes to procedures, practices, or equipment configuration. (See Section 11.0) Based on risk assessment, flexibility in APS design (e.g., duration, etc.) may be appropriate for barrier systems that offer robust separation (built in by design) and a consistently heightened level of product protection; however, the underlying principles for aseptic manufacturing remain the same. (See Section 4.3.3)

        

For lines producing different container sizes, the total run number may be decided by risk assessment, bracketing, and matrix approaches. Care should be taken to make sure all container sizes and all container–closure configurations are considered in the risk assessment. It is also required to have an equivalent process and the same container–closure configuration in order to apply bracketing or matrix approaches. (See Section 13.4).

    

    

        

## 導師解析 Tutorial Commentary

        

            

#### 核心概念解析 Key Concepts

            

**初始確認 — 至少連續 3 批成功 APS：**這是法規的基本期望。「連續」(consecutive) 是關鍵字 — 如果第 2 批失敗，計數必須重新開始。實務上，部分複雜製程可能需要超過 3 批來涵蓋所有變數組合。

            

**定期再確認 — 每半年一次：**每條充填線、每個無菌製程、每個班次都必須每半年執行一次 APS。同時，每位操作員每年至少須參與一次成功的 APS。

            

**Bracketing & Matrix (括弧法與矩陣法)：**當同一條充填線生產多種容器規格時，可以利用風險評估選擇代表性的極端條件進行 APS，而非逐一對每種規格都做。但前提是製程等效且容器密封配置相同。

        

        

            

#### 比喻說明 Analogy

            

把 APS 的頻率想像成汽車的定期保養。新車交車時要做全面檢查 (Initial APS = 連續 3 批)，之後每半年做一次例行保養 (Periodic APS = 每半年)。每位駕駛都必須每年至少通過一次路考 (Operator Qualification)。如果你改裝了引擎或換了輪胎 (重大變更)，就需要額外做檢查。而 Bracketing 就像測試最大和最小的輪胎尺寸，如果兩個極端都合格，中間的尺寸通常也沒問題。

        

        

            

#### 重點提示 Key Notes

            

**特殊時機的 APS 考量：**TR22 特別提到幾個容易被忽略的時機：

            

                
- **停機前最後一批之後：**在設備長期停用前做 APS，留下「最後狀態」的紀錄

                
- **長期閒置前/後：**確認設備在閒置期間未發生變化

                
- **產線拆遷或搬遷前：**記錄搬遷前的基準狀態

            

            

**屏障系統的彈性：**對於 Isolator 等提供強健隔離的屏障系統，APS 設計（如持續時間）可適度調整，但基本原則不變。這反映了法規對「基於風險的靈活性」的認可。

        

        

            

#### 頻率計算範例 Frequency Calculation

            

```

假設：1 條充填線，2 個班次，1 個無菌製程
最低年度 APS 次數 = 2 次/年 x 1 線 x 2 班 = 4 次/年

假設：2 條充填線，3 個班次，各有 1 個製程
最低年度 APS 次數 = 2 次/年 x 2 線 x 3 班 = 12 次/年

注意：每位操作員每年至少參與 1 次成功 APS
若有 20 位操作員，需確保排班覆蓋所有人員
```

        

        

            

#### 練習思考 Practice Questions

            

                
1. 某工廠有 2 條充填線、3 個班次，計畫進行年度 APS。若其中一條線在第 2 批 APS 失敗，接下來應如何處理？重新開始計數的範圍是什麼？

                
2. 一條充填線生產 2 mL、10 mL、20 mL 三種規格的小瓶。在什麼條件下可以使用 Bracketing 只測試 2 mL 和 20 mL？如果容器密封 (Closure) 不同，還能用 Bracketing 嗎？

            

        

    

3.3 Worst-Case Scenarios

    

        

## Original Text

        

The inclusion of "worst-case" situations within the APS is intended to provide assurance that sterile product will be produced when the permitted extremes of the routine process are present, specifically those conditions that pose the greatest contamination risk to the product. Examples include the maximum sterile hold times, the maximum permitted number of people present, etc. Worst-case does not include situations that should be the subject of process deviations such as equipment failure, or the inclusion of interventions that pose unacceptable risk to the process.

        

Worst-case conditions vary depending on the operations or risk being considered. For example, executing the APS using the maximum number of personnel is often considered the worst-case, as personnel are the greatest source of microbial contamination in an aseptic process. However, in some situations, the worst-case may include executing the process with fewer people if this results in excessive movement by the process operators, or if it complicates the process steps. Therefore, only the number of people used for the routine process should be considered for the APS for their longest duration of activities.

        

The worst-case approach, if used, should be duly justified, and its rationale should be documented in the APS protocol or procedure. Other examples of worst-case practices may include (but not be limited to):

        

            
- Using equipment of the longest permitted duration

            
- Using the slowest fill speed for the largest container (maximum exposure of vial opening to the environment)

            
- Using the highest fill speed for the most difficult to handle container

        

        

The worst-case conditions selected for inclusion in an APS should be predefined based on characteristics of the operation. Operational experience from routine production can provide opportunities to utilize intervention rates from different configurations, components, etc. to identify the appropriate 'worst-case' conditions for selection of the periodic APS study. Identifying appropriate worst-case conditions should be done by assessing the APS covering the relevant variables and their microbiological impact on the process. Such assessments can benefit from the application of QRM principles. The assessment conclusion should outline the variables selected as worst-case and the considerations or rationale for their selection. The risk assessment may also identify CAPA for reducing the "worst-case" situation such as improved operability leading to less interventions.

        

            "Note: In cases where it may not be possible to define one or two worst-case scenarios, it may be necessary to include several (or even all) scenarios in the APS program."
        

    

    

        

## 導師解析 Tutorial Commentary

        

            

#### 核心概念解析 Key Concepts

            

**Worst-Case (最壞情境)：**指的是在正常操作參數的允許範圍內，對產品無菌性構成最大風險的條件組合。重要的是，Worst-Case 不等於「異常情境」 — 設備故障、嚴重偏差等應作為 Deviation 處理，不應納入 APS 的 Worst-Case 設計。

            

**人員數量的雙面性：**TR22 提出了一個反直覺的觀點：最多人員不一定是 Worst-Case。如果人數過少導致操作員需要過度移動或操作流程變得複雜，反而可能增加污染風險。關鍵在於評估「哪種人員配置會帶來最大的微生物污染風險」。

        

        

            

#### 比喻說明 Analogy

            

Worst-Case 就像壓力測試一輛車：你要測試它在「最高允許速度」和「最大載重」下是否仍然安全。你不會測試輪胎爆胎時能否安全行駛 (那是事故情境，不是 Worst-Case)。同樣地，你也不會只在風和日麗的路上測試 — 你要選擇最具挑戰性的合法駕駛條件。

            

人員數量的邏輯就像餐廳廚房：太多人可能互相碰撞弄髒食物，但太少人可能導致一個廚師要同時顧好幾個鍋，反而更容易出錯。

        

        

            

#### 重點提示 Key Notes

            

**Worst-Case 必須有書面理由 (Justification)：**這是法規稽查的常見查核點。不能簡單地說「我們選最多人」就算 Worst-Case，必須說明為何這個條件代表最高風險。

            

**充填速度的雙重邏輯：**

            

                
- **最慢速度 + 最大容器：**瓶口暴露在環境中的時間最長，微生物落入的機率最高

                
- **最快速度 + 最難操控的容器：**機械操作可能不穩定，增加介入操作的風險

            

            

這兩種情境代表不同類型的風險，需要根據實際製程特性選擇最相關的 Worst-Case。

        

        

            

#### 實務應用 Practical Application

            

在 CDMO 環境中，Worst-Case 的選擇經常需要跨部門討論。建議組建包含生產、品保、工程和微生物學專家的團隊，使用風險評估工具 (如 FMEA) 系統性地識別和排序 Worst-Case 條件。評估結果應文件化，並在每次 Periodic APS 前重新審視 — 因為隨著生產經驗累積，對風險的理解可能會改變。

        

        

            

#### 練習思考 Practice Questions

            

                
1. 某工廠的無菌充填線在正常生產時有 4-6 名操作員。設計 APS 時應如何決定人員數量是 4 人還是 6 人為 Worst-Case？需要考慮哪些因素？

                
2. 如果風險評估顯示無法明確定義單一 Worst-Case 情境，TR22 建議怎麼辦？這對 APS 執行計畫有什麼影響？

            

        

    

3.4 Risk Assessment for Aseptic Process Simulation Design

    

        

## Original Text

        

Risk assessment is a systematic process of organizing information to support a risk decision to be made within a risk-management process. It consists of identifying hazards and analyzing and evaluating risks associated with exposure to them (8). In the context of this technical report, hazards or hazard situations associated with aseptic processing are any flaws, failures, or conditions that could compromise the sterility assurance of aseptically manufactured sterile products.

        

The principles of risk assessment should be considered in designing the APS. A risk assessment should be performed to determine, identify, and evaluate hazards or hazardous situations associated with the aseptic process steps and interventions that may adversely affect product sterility (9-11). Container size, configuration, line speed, batch size, and operating conditions provide an important insight into APS design. Risk assessments can also be used to determine the worst-case manufacturing scenarios related to these elements. This will be tied to the CCS where hazards are identified and the residual risk either considered acceptable or the process modified to remove/reduce the risk. It is important to consider risk to product quality and patient safety when confirming the design of the APS study.

        

The purpose of a risk assessment for an APS is to evaluate the process that the APS simulates and to inform the design of the resultant APS study. Only after hazards and risks associated with the aseptic process are evaluated can the APS design be deemed both representative and appropriate. Using a multifunctional team with a good knowledge of process, equipment and facility design, review the aseptic process in detail with respect to the potential for contamination ingress with attention to intervention frequency, proximity of any intervention to sterile materials and surfaces, and duration of the intervention as appropriate factors in the evaluation of aseptic risk.

        

The outputs of the aseptic process risk assessment used to inform the APS design should answer the following questions:

        

            
- Is your APS design appropriately representative of all stages of the manufacturing process (including assessing/providing justification as to where the APS begins) without masking any important risk factors (e.g., usage of inert gas during APS or freezing the media during lyophilization simulation might compromise the detection of contamination)?

            
- Is the APS mimicking the complete manufacturing process including the handling of materials, handling of media-filled units, operating equipment, and aseptic interventions from one subprocess to another?

            
- Is your APS design able to "challenge process capabilities" of an aseptic process and identify previously unaddressed variables?

            
- Are your selected and simulated worst-case manufacturing scenarios related to container size, configuration, line speed, batch size, and operating conditions appropriate, and are they able to best represent the risk to the aseptic product without adding an unnecessary risk to the APS?

            
- Is your APS design meeting regulatory and industry guidance requirements?

        

        

A critical success factor for such an exercise is sponsorship by the senior management of the organization to support resource allocation, appropriate team formation, any financial needs for managing the risk-assessment outcome and, most importantly, motivating the team towards the ultimate objective of protecting product quality and patient safety.

    

    

        

## 導師解析 Tutorial Commentary

        

            

#### 核心概念解析 Key Concepts

            

**Risk Assessment for APS Design (APS 設計的風險評估)：**風險評估不只是選擇 Worst-Case 的工具，更是確保 APS 設計「具代表性且適當」(representative and appropriate) 的核心方法論。它的輸出直接決定了 APS 的範圍、條件和成功標準。

            

**Multifunctional Team (跨功能團隊)：**TR22 強調 APS 的風險評估需要跨領域團隊，包括製程專家、設備工程師、設施設計師、微生物學家和品質人員。這反映了 APS 設計不是單一部門的工作，而是需要整合多方專業知識。

            

**Intervention 評估三要素：**頻率 (Frequency)、與無菌物料/表面的接近程度 (Proximity)、持續時間 (Duration) — 這三個維度共同決定了每個介入操作的風險等級。

        

        

            

#### 比喻說明 Analogy

            

風險評估就像醫院的感染管控計畫 (Contamination Control Strategy, CCS)。在規劃手術室的感染控制措施時，你需要組建一個包含外科醫師、護理師、院感專家和設備工程師的團隊。每個人從自己的專業角度識別風險：外科醫師知道哪些手術步驟最容易暴露傷口，護理師知道器械傳遞的風險，院感專家知道環境微生物的來源，工程師知道空調系統的薄弱點。只有整合所有觀點，才能設計出真正有效的感染控制方案。

        

        

            

#### 重點提示 Key Notes

            

**APS 設計的五大關鍵問題：**TR22 列出了五個風險評估必須回答的問題，這些問題本質上是在檢驗 APS 設計的「完整性」和「有效性」：

            

                
- **代表性 (Representativeness)：**APS 是否涵蓋了所有製程階段？特別注意某些操作（如惰性氣體使用、冷凍乾燥）可能「掩蓋」微生物污染

                
- **完整性 (Completeness)：**是否模擬了完整的製造流程，包括物料傳遞和跨子製程的操作？

                
- **挑戰性 (Challenge)：**APS 是否能夠「挑戰」製程能力，而非只是走過場？

                
- **適當性 (Appropriateness)：**Worst-Case 條件是否適當，既能代表風險又不會對 APS 本身造成不必要的風險？

                
- **合規性 (Compliance)：**設計是否符合法規和行業指南要求？

            

        

        

            

#### 高層管理的角色 Senior Management Role

            

TR22 特別強調高層管理對 APS 風險評估的「Sponsorship」（支持）。這不是空話 — 風險評估的結果可能需要額外的資源投入（如增加 APS 次數、改善設備、增加人員培訓）。沒有高層的支持，風險評估很容易流於形式，團隊可能傾向於「最小化」風險結論以避免增加工作量。這是 Quality Culture (品質文化) 的直接體現。

        

        

            

#### 實務應用 Practical Application

            

在 CDMO 中，APS 風險評估是一項高價值的品質活動。建議使用以下架構：

            

                
1. **流程圖分析：**繪製完整的無菌製程流程圖，標記每個可能引入污染的步驟

                
2. **Intervention 清單：**列出所有預期和非預期的介入操作，並按頻率、接近度、持續時間評分

                
3. **CCS 連結：**將風險評估結果與 CCS 對照，確認每個已識別的風險都有相應的控制措施

                
4. **APS 設計矩陣：**將評估結果轉化為 APS 的具體設計參數（時間、速度、人員、介入操作等）

            

        

        

            

#### 練習思考 Practice Questions

            

                
1. 在冷凍乾燥 (Lyophilization) 製程的 APS 中，為何「凍結培養基」可能是一個問題？如何在不妨礙微生物偵測的前提下模擬冷凍乾燥步驟？

                
2. TR22 提到 APS 不應「掩蓋重要風險因素」。請舉一個例子，說明在 APS 中使用惰性氣體 (Inert Gas) 如何可能掩蓋污染風險，以及如何應對。

                
3. 如果你是 CDMO 的品質主管，如何向高層管理證明投入更多資源在 APS 風險評估上是值得的？你會用什麼數據或論述來說服他們？

            

        

    

    

### 本節重點回顧 Section Summary

    

        
- **APS 是整合性驗證：**Aseptic Process Simulation (無菌製程模擬) 使用微生物培養基模擬完整製程，驗證設備、環境、人員操作與物料傳遞的整體無菌保證能力

        
- **先決條件缺一不可：**設備確認、HVAC 驗證、滅菌確效、EM 計畫、人員培訓、SOP 等必須全部就緒後才能執行 APS；Engineering Batches / Water Trials 應在正式 APS 前完成

        
- **頻率與次數有明確要求：**初始至少連續 3 批成功；定期再確認每半年一次（每線、每製程、每班次）；每位操作員每年至少參與一次成功 APS

        
- **Worst-Case 需基於科學理由：**不是簡單地選擇「最極端」條件，而是識別對無菌性構成最大風險的條件組合，且必須書面文件化其選擇理由

        
- **風險評估驅動 APS 設計：**使用跨功能團隊，系統性評估製程風險，確保 APS 設計具代表性、完整性和挑戰性；評估結果應與 CCS 連結

        
- **Bracketing/Matrix 可降低負擔：**對多規格容器可使用括弧法/矩陣法，但前提是製程等效且容器密封配置相同

    

 

    

PDA Technical Report No. 22 (Revised 2025): Process Simulation for Aseptically Filled Products

    

Section 3.0: APS Concepts & Principles | Educational Material

    

For training purposes only. Refer to the original PDA TR22 document for official guidance.

⇧

## Section 2: APS Overview & Design APS概述與設計 (p14-p37)

# Section 4.0-4.2: Overview of APS for Aseptically Produced Products

    

無菌製程模擬概述：一般要求與產品相關設計 (Part A)

    

PDA Technical Report No. 22 (Revised 2025) | p14 - p23

    

### 本章學習目標

    

        
- 理解 Aseptic Process Simulation (APS) 的範圍 — 從滅菌點到容器密封的完整模擬

        
- 掌握 APS 設計的核心原則：模擬必須忠實反映常規製程，不得人為降低或增加風險

        
- 區分 Inherent Interventions (固有介入) 與 Corrective Interventions (矯正介入) 的定義、風險評估與頻率設計

        
- 了解介入操作的確認 (Qualification)、未經確認介入的處理流程，以及禁止介入的管理

        
- 學習 APS 中介入相關單位 (intervention-related units) 的處理原則與培養判定邏輯

    

    

### 本節目錄 Section Contents

    

        4.0 Overview
        4.1 General Requirements
        4.1.1 Scope of APS
        4.1.2 Design of APS
        4.1.3 Interventions
        4.1.3.1 Identifying Interventions
        4.1.3.2 Procedures & Qualification
        4.1.3.3 APS Study Design
        4.1.3.4 Handling Units
        4.1.4 Sterile Bulk APS
        4.2 APS Design for Products
    

## 4.0 Overview of Aseptic Process Simulation for Aseptically Produced Products

    

        

### 原文內容 Original Text

        

This section summarizes general APS design requirements as well as considerations related to APS design with regard to products and aseptic processing technologies.

    

    

        

### 導師解析 Tutorial Commentary

        

            

#### 核心概念解析 Key Concepts

            

**Aseptic Process Simulation, APS (無菌製程模擬)：**APS 是以無菌培養基 (growth medium) 取代實際產品，在與常規生產盡可能相同的條件下執行充填操作的一種驗證活動。其目的不是「測試培養基是否汙染」，而是**評估整個無菌製程的能力 (process capability)**，確認人員、設備、環境、操作程序的整體配合能否持續產出無菌產品。

        

        

            

#### 比喻說明 Analogy

            

想像你經營一間手術室等級的餐廳。APS 就像一次「彩排」：你不用真的食材（因為浪費且無法看出汙染），而是用培養基來代替——如果最終培養基長菌了，就表示這套流程有破口。這場彩排必須盡可能模擬真實營業日的所有環節，包括換盤子、補食材、處理掉落的餐具等「介入操作」。

        

        

            

#### 重點提示 Key Notes

            

Section 4 是 TR22 的核心骨幹，涵蓋 APS 的一般要求 (4.1) 與針對不同產品劑型的特殊考量 (4.2)。本節 (2a) 涵蓋 4.0 至 4.2 開頭，後續 4.2 的各劑型細節將在 Section 2b 中繼續。

        

    

## 4.1 General Requirements

    

        

### 原文內容 Original Text

        

This section provides an overview of the various products manufactured aseptically in the pharmaceutical industry and how to perform adequate APS studies in respect to these products.

    

    

        

### 導師解析 Tutorial Commentary

        

            

#### 核心概念解析 Key Concepts

            

4.1 節建立了 APS 的「通用框架」，適用於所有無菌充填產品。無論你的產品是液態注射劑、凍乾產品、懸浮液還是預充填針筒，4.1 節的原則都必須遵守。產品特有的差異則在 4.2 節中處理。

        

    

## 4.1.1 Scope of Aseptic Process Simulation

    

        

### 原文內容 Original Text

        

The APS should imitate the routine aseptic manufacturing process as closely as possible and include all critical manufacturing steps. The APS for aseptically produced sterile dosage forms and products starts at the point of sterilization of the product, for example, the sterile filtration of product solutions and the sterilization of product contact surfaces, including containers and closures, through sealing of the filled containers (e.g., vials, syringes) or other packaging units. Any aseptic activities performed during dosage-form compounding (e.g., the aseptic addition of ingredients for the preparation of a suspension), are a necessary part of the APS.

    

    

        

### 導師解析 Tutorial Commentary

        

            

#### 核心概念解析 Key Concepts

            

**APS 的範圍 (Scope)：**APS 的起點是產品的「滅菌點」(point of sterilization)，例如：

            

                
- **液態產品** → 從 Sterile Filtration (除菌過濾) 開始

                
- **容器/膠塞** → 從其滅菌處理完成後開始

                
- **懸浮液** → 包含無菌添加成分的調配步驟

            

            

APS 的終點是「容器密封完成」(sealing of filled containers)。也就是說，APS 涵蓋了從無菌狀態開始到密封完成為止的所有暴露步驟。

        

        

            

#### 比喻說明 Analogy

            

就像醫院感染管控的稽核範圍：從「器械完成消毒離開高壓鍋」那一刻起，到「手術完成縫合傷口」為止的所有步驟都必須納入檢視。在此之前的消毒效果由別的驗證 (如 filter validation) 來證明，不是 APS 的責任。

        

        

            

#### 重點提示 Key Notes

            

特別注意：若產品配方中有「無菌添加」步驟（如懸浮液的粉末加入），這些步驟也必須包含在 APS 中。很多公司容易忽略上游的調配步驟，只模擬充填段——這是不完整的。

        

        

            

#### 練習思考 Practice Questions

            

                
1. 你的工廠生產一款含有無菌粉末添加的懸浮液注射劑。APS 應該從哪個步驟開始模擬？為什麼？

                
2. 如果 APS 只模擬充填段而跳過上游的無菌調配，可能會遺漏哪些汙染風險？

            

        

    

## 4.1.2 Design of Aseptic Process Simulation

    

        

### 原文內容 Original Text

        

The aseptic process is simulated through the use of production operations in which a sterile growth medium and/or placebo is handled in a manner that resembles the methods used in routine production as closely as possible. The application of this principle to a specific aseptic process or procedure may require adaptation of the methods described in this technical report to that process or procedure. However, any such adaptations should not reduce the risk (i.e., APS should not be a "best case" in comparison to routine manufacturing), or increase risk beyond normal operating parameters.

        

Where growth media and/or placebo is added or utilized in the APS, its sterilization need not be performed in a manner identical to that used for the product being simulated. For example, an APS does not support the validation of the sterilizing filter used in the product or process being simulated; this will be accomplished by other studies. So, differences in the filter area and filter media, for example, are acceptable providing these changes do not enhance the aseptic process or eliminate a process step that could adversely affect the sterility assurance of the product.

        

A company must determine the appropriate rationale and approaches applicable to their unique operations and APS design based on a sound risk assessment. Process-flow diagrams showing the routine manufacturing process and steps in parallel with the APS steps are very useful for an APS illustration and design assessment and to explicitly highlight the potential differences between both processes.

    

    

        

### 導師解析 Tutorial Commentary

        

            

#### 核心概念解析 Key Concepts

            

**APS 設計的黃金原則：**

            

                
- **忠實模擬 (Faithful Simulation)：**APS 必須盡可能地模仿常規生產操作

                
- **不得降低風險：**APS 不能成為「最佳情境」(best case)，例如不能只在最乾淨的時段、由最資深的操作員來執行

                
- **不得超出常規參數：**也不能人為製造超出正常操作範圍的極端挑戰

            

            

簡言之：APS 應該是常規製程的「鏡像」，不美化也不醜化。

        

        

            

#### 重點提示 Key Notes

            

**培養基滅菌 vs. 產品滅菌的差異是允許的：**APS 使用的培養基不需要用與產品完全相同的方式滅菌。例如，培養基的除菌過濾可以用不同面積的濾膜，因為 APS 的目的不是驗證過濾器——那是 Filter Validation (參見 PDA TR26) 的職責。但這些差異不能讓無菌操作變得更簡單或省略任何可能影響無菌保證的步驟。

        

        

            

#### 比喻說明 Analogy

            

想像消防演習：你必須模擬真實火災的逃生流程，但不需要真的放火。演習中用煙霧彈代替真火是可以的（培養基代替產品），但你不能因此省略某些逃生路線的測試，或是在白天人少時才演練——那就失去了模擬的意義。

        

        

            

#### 實務應用 Practical Application

            

**Process-Flow Diagram 的實務價值：**TR22 建議製作「常規製程 vs. APS」的並排流程圖。這在法規查廠時極有價值——稽查員可以一目了然地看到兩個流程的對應關係，以及任何差異的合理性。建議 CDMO 在 APS Protocol 中加入此並排圖作為標準附件。

        

        

            

#### 練習思考 Practice Questions

            

                
1. 你的 APS 使用 0.1 m² 的濾膜來過濾培養基，但常規生產使用 0.5 m²。這是否可接受？為什麼？

                
2. 如果 APS 省略了常規生產中的「更換膠塞料斗」步驟，可能帶來什麼合規風險？

            

        

    

## 4.1.3 Interventions

    

        

### 原文內容 Original Text

        

Personnel are a significant source of microbial contamination during aseptic processes. Consequently, activities performed by personnel within the critical area, also called interventions, must be carefully designed, qualified, and controlled to ensure they do not compromise the sterility of the materials being produced. (See Section 4.1.3.2). Each company should have a list of "qualified interventions" for each aseptic process type.

        

The execution of interventions during the APS is critical to the process-capability demonstration. To demonstrate that capability, APSs should include representative interventions that occur during an aseptic filling process. While there are no truly risk-free interventions, when absolutely necessary, interventions can be considered acceptable if demonstrated to carry acceptable residual risk as evidenced by the application of appropriate aseptic technique, air-flow studies and successful APS.

        

It is essential to include the interventions that are known to occur during normal production runs in an APS. Interventions that are permitted in a production operation should be specifically documented and included in APSs at a similar frequency and of a similar duration based on their potential risk to product sterility. Nonqualified interventions that must be performed should be handled with the quality management system, and new interventions to be added to the intervention program should be managed through the change management system, as defined by the company. The details of the intervention conducted should be subject to risk assessment, recorded, and fully investigated under the manufacturer's pharmaceutical quality system, including a real-time assessment of the acceptance of the intervention from a risk to product/patient perspective. They should also be thoroughly assessed by the Quality Unit and considered for inclusion in the next APS based on the needs of the process or for investigational purposes. While interventions and/or stoppages are normally recorded in the batch record, the manner of documenting these occurrences varies. Line stoppages and corrective interventions should be sufficiently documented in batch records with the associated time, duration, and repetition of the event.

        

A thorough risk assessment of the aseptic manufacturing process is necessary to evaluate the process risk associated with each intervention. Factors such as the proximity of the intervention to critical surfaces or open containers, the duration of the intervention, the complexity of the intervention, and other parameters determined by each company may be used to evaluate the risk of each intervention. Rating the intervention risks based on objective criteria will help determine if additional actions or controls are needed to mitigate each risk and will also help determine the frequency with which each intervention should be performed during the APS. (See Section 13.4).

    

    

        

### 導師解析 Tutorial Commentary

        

            

#### 核心概念解析 Key Concepts

            

**Interventions (介入操作)：**指人員在無菌關鍵區域 (Critical Area) 內執行的所有活動。人員是無菌製程中微生物汙染的**最主要來源**，因此介入操作的設計、確認和控制是 APS 的核心議題。

            

每家公司都必須為每種無菌製程建立一份**「合格介入清單」(Qualified Interventions List)**。只有經過以下程序的介入才能被允許：

            

                
- 風險評估 (Risk Assessment)

                
- 書面程序 (Written Procedures)

                
- 人員訓練 (Personnel Training)

                
- APS 中成功挑戰 (Successful APS Challenge)

            

        

        

            

#### 重點提示 Key Notes

            

**介入操作的風險評估因素：**

            

                
- **接近度 (Proximity)：**介入操作與關鍵表面或開放容器的距離

                
- **持續時間 (Duration)：**介入操作持續多久

                
- **複雜度 (Complexity)：**操作步驟的繁複程度

            

            

這三個因素決定了介入操作在 APS 中應被模擬的**頻率**。高風險介入需要更頻繁地挑戰。

        

        

            

#### 比喻說明 Analogy

            

想像手術室中的規定：每位護理師只能執行經過核准的動作清單上的操作。如果手術中出現清單外的狀況（例如需要用一種新工具），必須即時通知主治醫師（品質單位），記錄事件，評估風險，事後還要決定是否將此操作加入未來的核准清單。這就是 TR22 對介入操作的管理邏輯。

        

        

            

                

Proximity to Open Product 接近開放產品

            

            

+

            

                

Duration of Intervention 介入持續時間

            

            

+

            

                

Complexity of Operation 操作複雜度

            

            

= Intervention Risk Level 介入風險等級

        

        

            

#### 練習思考 Practice Questions

            

                
1. 為什麼 TR22 強調「沒有真正零風險的介入操作」？這對 APS 設計有什麼影響？

                
2. 如果一項介入操作在生產中每批發生 2 次，但在 APS 中被模擬了 10 次，可能產生什麼問題？

            

        

    

## 4.1.3.1 Identifying Interventions Associated with an Aseptic Process

    

        

### 原文內容 Original Text

        

Companies should develop and maintain an approved list of allowed and qualified interventions that may occur during production and in the APS. Companies should also establish clear instructions for the performance of each aseptic intervention with inputs from operators, line mechanics, supervisory staff, microbiology, engineering, and quality assurance. These instructions can be in the form of written procedures, visual aids, videos, other media such as virtual reality, or any combination thereof. The instructions must be periodically reviewed and updated to reflect the current processes and interventions. This ensures consistency for operators and the interventions they are required to perform.

        

Companies should identify interventions and determine their frequency and duration of inclusion in the APS based on process design and historical performance documentation, such as completed batch records, batch-related documentation, SOPs, and discussions with operating personnel. The goal of this activity is to list all interventions for each product, process, container, closure, or filling line configuration. For firms with multiple aseptic operations, interventions may vary from one fill line to another, even if both are filling similar products and containers. Variations in product type may add activities that are specific to individual situations. The basis and number of the required simulated interventions must be documented.

        

Operators must demonstrate their ability to perform the aseptic interventions on the filling line prior to taking part in an APS or participating in a product fill (see Section 8.0). If multiple filling lines of comparable design are utilized for the manufacture of a product, application of a matrix approach to operator qualification might be considered. In the case of multiple primary-packaging configurations, it is technically not feasible to run every possible configuration on every filling line. Qualification of the operator on a different filling line can be done using a matrix approach only when equivalency of the intervention conducted on the other line has been established and well documented. This enables operators to simulate interventions on one filling line as part of the matrix approach in an APS, which is suitable for participation on other filling lines in routine production. The definition of worst-case configurations and matrixing therefore is a suitable alternative. For more information on qualification, please see Section 8.0.

        

Similar logic can be applied to interventions of very similar type, or interventions that could be seen as a subset of more complex operations. It is not necessary to perform every intervention individually during an APS. Depending on a risk assessment of the individual interventions and solid rationale for why a certain operation can be seen as a subset of, or sufficiently similar to, another intervention, a matrixing approach might be applicable. For example, during the removal of varying numbers of vials from a turntable due to overturned vials or glass-breakage events, the performance of the highest-risk vial-removal activity may be sufficient to demonstrate proficiency in performing lower-risk vial-removal activities.

        

### 4.1.3.1.1 Inherent Interventions

        

Inherent interventions are an integral part of the aseptic process and are required for setup or routine operation and/or monitoring (e.g., equipment installation/assembly, weight adjustments, closure resupply, container resupply, EM sampling). Inherent interventions are not corrections to events that occur on the filling line; rather, they are a planned and necessary part of the overall process and are performed during the APS at a defined frequency or point of the filling operation. Inherent interventions are required by batch record, procedure, or work instructions and should be executed in full during APS in accordance with the normal production process or, in part, just simulated (e.g., loading of packaging components).

        

Depending on the process design, the inherent interventions may pose different risks to the product. Therefore, the risk of the inherent interventions should be assessed and ranked for criticality (e.g., major, moderate, or minor). The criticality of an inherent intervention can be used to determine the frequency of its inclusion in the APS. That being said, higher-risk inherent interventions expected to take place at a relatively high frequency during production should be avoided to the extent possible, or the criticality of these interventions should be reduced by improved process, facility, or equipment design. Examples of inherent interventions are:

        

            
- Setup of direct and indirect product-contact parts vs. nonproduct-contact parts

            
- Change of EM plates preferably via manipulation through a glove port

            
- Addition of components

            
- Closure resupply requiring manual handling when opening the container/bag and during loading

            
- For isolators and restricted access barrier systems (RABS):
                

                    
    - Proximity of gloves to critical surfaces or open product during placement of hands in gloves

                    
    - Docking and movement of materials in areas of the line with critical surfaces and/or open product

                

            

        

        

### 4.1.3.1.2 Corrective Interventions

        

Corrective interventions are performed to correct or adjust an aseptic process during its execution. There should be a list of permitted corrective interventions, each of which is fully characterized, that is, supported with a step-by-step written description, a contamination-focused risk assessment, comprehensive operator training, and detailed airflow visualization studies to confirm their suitability "by design." (See Section 4.1.3.2)

        

Corrective interventions should be challenged during the APS at a frequency (rate) similar to that in which they occur during routine manufacturing. To achieve this, the approximate rate that each permitted intervention occurs during product manufacture should be evaluated and used to inform the APS process design. For the APS to remain representative of the routine aseptic process, the cumulative rate that all corrective interventions occur during product manufacturing should also be known; the total number of corrective interventions challenged in each APS should align with this cumulative rate. The frequency with which interventions are performed during the APS should be representative of that used for production and may be adjusted periodically based on recent manufacturing data.

        

In practice, there are likely to be multiple permitted corrective interventions that may not occur during each production run and challenging each of them in every APS will lead to the APS becoming an un-representative challenge. Because some interventions will occur infrequently (e.g., in less than 50% of batches), the use of frequency to determine how often these interventions are challenged during APS will lead to them being overchallenged (e.g., once during each APS) and push the overall intervention rate for the APS beyond what is representative. The suggested approach is to deal with infrequent interventions in order of the risk they pose and the frequency they occur, while ensuring that each permitted intervention is included at least annually. This will mean that lower-risk infrequent interventions may be challenged annually rather than every six months.

        

Replicate interventions should not be performed at the same time but should be distributed throughout the APS to simulate production activities. Repeating the intervention multiple times during an APS may not represent an improved sterility assurance challenge to the process. Therefore, it should not be necessary to perform the same intervention multiple times during an APS to determine the maximum number of times an intervention may be performed in production. For example, if an intervention occurs ten times during production, it may not be necessary to replicate that number during the APS. The frequency should be representative, but does not need to equal the maximum number, especially for lower-risk interventions. The decision on the number of replicate interventions to include in the APS should be based on relative risk criteria. The inclusion of an unrealistically higher number and frequency of interventions during the APS than during the aseptic process may no longer be a true representation and simulation of the aseptic process.

        

Where a lower-risk intervention has an established rate, leading to it potentially being challenged multiple times during an APS, one or more replicates could be dropped to allow additional higher-risk interventions to be included more frequently (although care should be taken to ensure that the APS design does not become artificially such a worst-case that it is no longer representative of the process). The selection of interventions and frequency that each intervention is performed during APS should be fully justified.

        

Where the need to perform a new corrective intervention arises during product manufacture, a proactive assessment of risk should be performed to determine whether the intervention should be permitted and, if permitted, the risk-mitigating steps to be taken before and after it. Until that point and inclusion in a successful APS, any new intervention should be treated as a deviation from the established process with the potential for the batch to be stopped in the worst-case scenario.

    

    

        

### 導師解析 Tutorial Commentary

        

            

#### 核心概念解析 Key Concepts

            

**Matrix Approach (矩陣法)：**當公司擁有多條類似設計的充填線時，不需要每條線都獨立做所有介入操作的確認。只要能證明不同充填線上的同類介入操作具有等效性 (equivalency)，就可以用矩陣法來管理操作員的資格確認。

            

同樣的邏輯也適用於「相似介入操作的分組」：如果一個複雜介入操作包含了另一個簡單介入操作的所有動作，那麼成功執行複雜版本即可涵蓋簡單版本。

        

        

            

#### 重點提示 Key Notes

            

**兩類介入操作的關鍵區別：**

            
                
                    
                    
                    
                
| 特性 | Inherent (固有介入) | Corrective (矯正介入) |
| --- | --- | --- |
                
                    
                    
                    
                
| 性質 | 計畫性、製程必需 | 因異常而產生的糾正動作 |
                
                    
                    
                    
                
| 範例 | 膠塞補充、重量調整、EM 取樣 | 移除倒瓶、維修設備故障、更換零件 |
                
                    
                    
                    
                
| APS 中的處理 | 依批次記錄按時間點完整執行 | 依歷史頻率代表性地模擬 |
                
                    
                    
                    
                
| 風險分級 | Major / Moderate / Minor | 依風險與頻率排序 |
            

        

        

            

#### 比喻說明 Analogy

            

**Inherent (固有介入)** 就像開車時的「定期動作」——加油、調後視鏡、開雨刷——這些是正常駕駛的一部分，每次開車都會做。**Corrective (矯正介入)** 則像「臨時排除故障」——爆胎換胎、擋風玻璃破裂處理——不是每次都發生，但一旦發生就必須有標準程序處理。

        

        

            

#### 重點提示 — 過度挑戰的陷阱 Overchallenging Trap

            

TR22 在此處提出一個非常重要且常被忽視的觀點：**APS 中的介入操作不能過多**。如果把所有允許的矯正介入都塞進每次 APS，總介入頻率將遠超常規生產，使 APS 不再具有代表性。

            

建議做法：

            

                
- 高風險且頻繁的介入 → 每次 APS 都模擬

                
- 低風險且不頻繁的介入 → 至少每年挑戰一次，可輪流納入

                
- 用省下的「介入配額」來增加高風險介入的模擬頻率

            

        

        

            

#### 重點提示 — 新介入操作的處理

            

在常規生產中首次出現的新矯正介入，在被正式納入合格清單並在 APS 中成功挑戰之前，**必須被視為偏差 (Deviation)**。最壞的情況下，可能需要停止該批次。這體現了「先證明安全，再允許執行」的原則。

        

        

            

#### 實務應用 Practical Application

            

**CDMO 的介入操作管理策略：**對 CDMO 而言，由於客戶產品多樣，介入操作清單的管理尤其重要。建議：

            

                
- 建立「通用介入清單」(Common Interventions List) 適用於所有產品/充填線

                
- 針對特定產品/充填線的獨特介入，建立「產品特定附錄」

                
- 每次新客戶導入時，進行差異分析 (Gap Analysis) 確認是否有新的介入需求

                
- 利用矩陣法減少操作員在多條線之間的重複確認工作

            

        

        

            

#### 練習思考 Practice Questions

            

                
1. 某矯正介入在過去一年 200 批生產中只發生過 3 次。在半年一次的 APS 中，應如何決定此介入的模擬頻率？

                
2. 為什麼 TR22 說「不需要在 APS 中模擬介入的最大次數」？請用具體例子說明。

                
3. 一位新操作員需要在 3 條類似設計的充填線上作業。如何使用矩陣法來簡化其介入操作的確認流程？

            

        

    

## 4.1.3.2 Intervention Procedures and Qualification

    

        

### 原文內容 Original Text

        

In aseptic processing, the qualification of interventions is a critical aspect that ensures the maintenance of product sterility and overall process integrity. This section delves into the essential procedures and considerations for qualifying interventions, as well as the protocols for handling unqualified, unapproved, and disallowed interventions.

        

### 4.1.3.2.1 Intervention Qualification

        

Interventions should be properly qualified before they are performed in aseptic processes. The APS alone does not qualify the intervention, and it should not be considered the sole means to, or a substitute for, more-focused and effective methods to qualify an intervention. However, all interventions (inherent or corrective), after meeting other qualification criteria, should be included in the APS to evaluate whether any weakness or under-addressed variable in the process adversely affects product sterility.

        

The qualification of an intervention should include the following considerations:

        

            
- Risk assessment to determine the risks posed by the intervention and if those risks are adequately controlled

            
- Sound process design of the intervention, as well as qualification of any control measures designed to address risks posed by the intervention

            
- Approved procedures (as noted in formal SOPs, batch records, or other documents) describing the performance of the intervention

            
- Personnel training in the performance of the intervention

            
- Evidence that adequately trained and qualified personnel can properly perform the intervention within a consistent duration

            
- Evidence, inclusive of air-visualization studies, that personnel performing interventions in the critical area and in proximity to sterile product or contact surfaces can do so following good aseptic working techniques, without disrupting first air or compromising adjacent critical surfaces, e.g., by causing external "dirtier" air to enter the critical area by generating significant turbulences

            
- Use of ergonomics, rest periods (e.g., breaks), and other means to minimize the effects of human fatigue on aseptic process performance and risks posed to product quality (see Section 7.9.2).

            
- Oversight of intervention performance to evaluate proper execution of the intervention

        

        

A clear decision as to whether the intervention is acceptable risk, if further actions such as engineering is required or if the intervention poses an unacceptable risk.

        

### 4.1.3.2.2 Unqualified or Unapproved Interventions

        

Interventions that are required in a production run to continue manufacturing and have not been previously qualified should be considered unqualified and unapproved. Procedures should be in place to address unqualified and unapproved interventions, including personnel and departments responsible for input and approval and actions required to perform the intervention if it is possible to do it with an acceptable risk. If such interventions are required or are contemplated, the company should do one or more of the following:

        

            
- Immediately contact the Quality Unit (before the intervention, if possible)

            
- Disallow the intervention and immediately stop production, pending corrective actions that are not normally performed during the aseptic process (through a deviation or temporary change control)

            
- Assess the intervention to determine the risk to product sterility posed by the intervention and control steps needed to mitigate such risk. If the assessment supports the execution of the intervention, consider whether the intervention should become part of the established process.

            
- Incorporate special precautions, risk mitigation, controls, and monitoring to limit the risk of product contamination, including removal of potential compromised units and disinfection or decontamination of affected areas

            
- Segregate and contain the affected units and define disposition criteria for the product filled after the performance of the intervention

            
- Evaluate the similarity of the interventions to qualified and approved interventions and activities. If the intervention has occurred before or is reasonably likely to occur again, consideration should be given to adding it to the established process as a permitted intervention once it is fully qualified (i.e., assessed and successfully challenged during the APS).

            
- If it is determined that the unqualified intervention will be necessary, operators should be coached on how to perform the intervention. Additionally, should the intervention be added to the qualified interventions, formal training of operators should be undertaken. Document the intervention and decision criteria, including steps required to qualify the new intervention and its inclusion in future APS runs, if applicable

            
- Arrange for the Quality Unit to oversee the proper execution of the intervention

            
- Additional samples (e.g., sterility and EM taken after critical interventions) should be considered based on risk

        

        

### 4.1.3.2.3 Disallowed Interventions

        

Disallowed interventions are those that pose an unacceptable level of risk of contamination to sterile product, those that are no longer relevant or performed in production (not simulated in APS, "just in case" interventions), or those that for some other reason are no longer allowed in the production process. Disallowed interventions should be removed from the list of approved interventions, and procedures should be modified to remove these interventions from APS and normal production.

    

    

        

### 導師解析 Tutorial Commentary

        

            

#### 核心概念解析 Key Concepts

            

**介入操作的三層分類體系：**

            

                
- Qualified 合格 — 已完成風險評估、程序建立、人員訓練、氣流可視化驗證，並在 APS 中成功挑戰

                
- Unqualified 未確認 — 生產中必須執行但尚未經過正式確認程序的介入

                
- Disallowed 禁止 — 風險不可接受、已不相關、或基於其他原因被禁止的介入

            

            

**關鍵洞察：**APS 本身**不能**單獨作為介入操作確認的手段。介入操作的確認是一個多層次的過程，APS 只是最終的「整合挑戰」，用來發現其他確認步驟可能遺漏的問題。

        

        

            

#### 重點提示 — 介入確認的八大要素

            

TR22 列出的介入確認要素可歸納為以下八項，形成一個完整的確認框架：

            

                
1. **風險評估** — 識別並評估介入帶來的風險

                
2. **製程設計** — 介入本身及其控制措施的設計合理性

                
3. **書面程序** — SOP / 批次記錄中的正式記載

                
4. **人員訓練** — 操作員的訓練與能力展示

                
5. **一致性證據** — 證明操作員能在一致的時間內正確執行

                
6. **氣流可視化** — 煙霧試驗確認介入不會破壞 First Air (初級氣流)

                
7. **人因工程** — 考量疲勞、休息時間等人因因素

                
8. **監督機制** — 評估介入執行正確性的監控

            

        

        

            

#### 比喻說明 Analogy

            

這就像飛行員的操作授權體系：

            

                
- **Qualified** = 取得特定機型飛行執照的飛行員，可以正常執行所有該機型允許的操作

                
- **Unqualified** = 緊急情況下飛行員需要執行一個未受訓練的操作（如緊急迫降在未鋪設跑道上），必須即時通報塔台（品質單位），並由塔台評估是否允許

                
- **Disallowed** = 無論何種情況都絕對禁止的飛行操作（如超過結構限制的機動動作），因為風險完全不可接受

            

        

        

            

#### 重點提示 — 未確認介入的應急流程

            

當生產中遇到未確認的介入需求時，TR22 提供了一套完整的應急決策流程：

            

                
1. 優先聯繫品質單位 (Quality Unit)

                
2. 評估是否可以不執行 → 若不可避免則停線

                
3. 若必須執行 → 即時風險評估

                
4. 執行時加強防護措施（隔離受影響產品、消毒區域、增加取樣）

                
5. 品質單位全程監督

                
6. 事後評估是否應納入合格介入清單

            

            

這套流程的核心精神是：**寧可停線，也不可冒然執行未確認的操作**。

        

        

            

#### 練習思考 Practice Questions

            

                
1. 為什麼 TR22 強調「APS 不能作為介入確認的唯一手段」？如果只依賴 APS 來確認介入，可能遺漏什麼？

                
2. 一項「以防萬一」(just in case) 的介入操作已經三年沒有在生產中執行過。根據 TR22，這項介入應該如何處理？

                
3. 在氣流可視化研究中，如何判斷一項介入操作是否會「破壞 First Air」？

            

        

    

## 4.1.3.3 Aseptic Processing Simulation Study Design

    

        

### 原文內容 Original Text

        

The number, type, and complexity of inherent interventions that occur with each filling process, as well as corrective interventions and events (e.g., maintenance, stoppages, equipment adjustments) should be incorporated into the APS study design (12). When the APS procedures are consistent with those used for routine production, the simulation will be a more authentic representation of the routine process.

        

The purpose of the APS is to evaluate the capability of executing a process, interventions included, under specific conditions to produce units devoid of microbial contamination. During the design of the APS, it's crucial to take into account the quantity, variety, and intricacy of both inherent and corrective interventions, backed by robust scientific reasoning. Filling lines with comparable equipment setups might adopt a "worst-case" strategy for equipment arrangement and intervention to mimic the risks associated with each filling-line configuration. For example, two sets of filling parts of similar design sourced from different vendors may present a similar overall processing risk and may not require a separate APS to demonstrate the acceptability of the interventions associated with the use of each filling set.

        

Interventions to be included in the APS protocol should be considered in terms of the expected frequency and duration with which they are performed during production based on process design, production logs, batch records, observations of the aseptic filling process, and the microbiological risk to the product and process as determined by a thorough risk assessment. In general, interventions that commonly occur should be routinely simulated, while those occurring rarely can be simulated periodically (e.g., annually, depending on their risk, complexity, and the frequency with which they are performed during production fills). It should be noted that rarely performed interventions may have an additional risk factor due to lower familiarity of the operator with the intervention (if it is sufficiently different from other more routine interventions). The APS should consider the anticipated number of interventions required to run and accurately simulate the aseptic process.

        

Proper intervention performance is dependent upon the operator training and qualification program and predicated on sound intervention design, airflow-visualization studies, procedures, and evidence supporting operator training and execution of interventions (see Section 9.0). Qualification studies on higher-risk complex interventions may be used to demonstrate adequate aseptic training proficiency and the ability to execute less-complex interventions during production without the operator having to perform the less-complex intervention during the APS. The execution of interventions during the APS, although important, should not be the sole indicator of an intervention's suitability or proper performance. Likewise, the ability to perform a particular intervention should not be based on the number of times it is performed during the APS, but rather the qualification and training of operators to perform these interventions. On-the-job training of higher-risk interventions using placebo (production environment) or growth promoting media (training environment), airflow visualization studies of intervention execution, virtual-reality training, and enhanced supervision of inexperienced operators may be used to ensure that operators are proficient at performing their assigned interventions.

        

The performance of interventions should be accomplished by qualified personnel, including those involved in maintenance activities, EM, and support personnel according to defined procedures. The ability of the operator or mechanic to intervene in the process to address mechanical failures or other infrequent interventions that may pose a significant risk to the process should be reflected in the APS. Certain corrective interventions that occur infrequently during product manufacture should be performed periodically to simulate their performance during routine operations. These include events such as equipment breakdown, part replacement, or other infrequent nonroutine corrective interventions.

        

Defined intervention procedures ensure controlled process activities and help avoid unintended, personnel-dependent activities that may not conform to appropriate aseptic behavior. A matrix approach (grouping interventions by similarity of execution and risk) for certain types of aseptic processing interventions may be considered for the simulation of similar interventions of comparable complexity and risk, where risk-related variables have been assessed and found to be captured in this approach. It should be noted that although some interventions may be considered within a matrix equivalent to each other, and in any one APS only a single intervention is executed the interventions should be rotated, so that over time all are included. Interventions that are demonstrated to be acceptable can normally be performed by other trained and qualified individuals.

        

Note: This may not be the case for highly complex specialized activities where only individuals who have performed that activity successfully (as supported by acceptable APS results) are considered qualified (see Section 8.0).

    

    

        

### 導師解析 Tutorial Commentary

        

            

#### 核心概念解析 Key Concepts

            

**APS Study Design 的核心邏輯：**

            

APS 研究設計需要回答四個關鍵問題：

            

                
1. **What (哪些)：**哪些介入操作需要納入本次 APS？

                
2. **How many (多少次)：**每項介入操作模擬幾次？

                
3. **When (何時)：**在 APS 的哪個時間點執行？

                
4. **Who (誰)：**由哪些合格人員執行？

            

            

所有決定都必須有**科學根據**，包括歷史生產數據、風險評估結果、製程設計特性。

        

        

            

#### 重點提示 — Worst-Case Strategy 的正確應用

            

「最壞情境策略」不等於「堆疊所有風險」。TR22 舉例：兩套來自不同供應商但設計類似的充填零件，如果整體製程風險相似，可以不需要分別做 APS。Worst-case 的真正意義是**選擇最能代表風險的配置**，而非人為製造不切實際的極端情境。

        

        

            

#### 比喻說明 Analogy

            

APS 的研究設計就像編排一齣「寫實劇」：劇本（Protocol）必須包含所有常見的場景（固有介入），偶爾穿插一些意外事件（矯正介入），演員（操作員）必須經過充分排練（訓練與確認）。但如果你把所有可能的意外事件都塞進一集，觀眾（稽查員）會說：「這也太不真實了。」關鍵在於**代表性 (representativeness)**，不是「越多越好」。

        

        

            

#### 重點提示 — 不常見介入的額外風險

            

TR22 特別指出：**不常執行的介入操作可能帶有額外風險**，因為操作員對這些操作的熟悉度較低。這一點在設計 APS 時容易被忽略。建議：

            

                
- 對不常見介入操作加強模擬前的複習訓練

                
- 考慮使用 Virtual Reality (VR) 訓練來維持操作員的熟練度

                
- 在 APS Protocol 中標註哪些介入是「低頻高風險」類型

            

        

        

            

#### 重點提示 — 矩陣法的輪替原則

            

使用矩陣法分組介入操作時，雖然每次 APS 只需執行組內的一項代表性介入，但**必須隨時間輪替**，確保所有介入操作最終都被涵蓋。這與前述「每項允許的介入至少每年挑戰一次」的要求一致。

        

        

            

#### 練習思考 Practice Questions

            

                
1. 某充填線有 15 項允許的矯正介入，其中 5 項經常發生（每批 1-3 次），10 項很少發生（每年不到 5 次）。如何設計半年一次的 APS 中的介入計畫？

                
2. TR22 提到「高風險複雜介入的確認研究可用來證明操作員執行較簡單介入的能力」。請舉一個具體例子。

            

        

    

## 4.1.3.4 Handling of Intervention-Related Units

    

        

### 原文內容 Original Text

        

It is common for a predefined number of units to be discarded during production runs as a risk reduction or mitigation activity following interventions, particularly after initial aseptic line setup. If the intervention procedure and batch documentation call for a minimum number of units (from specified location(s)) to be removed during or after an intervention, then those units are considered rejects associated with the intervention. Procedures should be in place to ensure that these rejected units are properly removed and discarded during production without compromising the adjacent aseptic environment and that the same procedure can be followed during the APS without incubation of rejected units.

        

Units rejected in response to an APS intervention, however, may provide valuable information to help the manufacturer better understand the risk that each intervention poses and may drive further risk reduction or mitigation. For this reason, manufacturers should consider incubating any integral filled and closed units (e.g., a vial with a fully inserted stopper) for informational purposes. The incubation of these units during an APS should be considered (1) if there is scientific value that can be obtained from the evaluation of these incubated units, and (2) where the operation and automation of the filling line permits collection of these units. Otherwise, the intervention rejects may be removed and noted in the APS. Rejects from higher-risk operations, for example, first-filled units following setup operations or units filled following significant interventions should be incubated if their inclusion does not introduce an artificially greater challenge to aseptic control than commercial operation (e.g., units removed and sealed by a manual vs. an automated process). In no case should more units be removed, or a larger zone be cleared during an APS intervention than would be cleared during a production run.

        

Where such units are incubated, they should be incubated separately. They are not to be considered part of the acceptance criteria for the APS; however, any contaminated unit should trigger an investigation for potential root cause, its impact on the overall process evaluation, and any associated corrective action. The exclusion of any units from incubation requires justification and documentation. Procedurally defined nonintegral units (e.g., cracked or unsealed containers) that are detected and discarded as part of the routine operation should not be incubated. The incubation of nonintegral units will not provide any meaningful measure of the aseptic process, since these units do not represent either acceptable production practices or acceptable container-closure integrity. Any integral units found to be contaminated should be considered in the context of potential improvement.

    

    

        

### 導師解析 Tutorial Commentary

        

            

#### 核心概念解析 Key Concepts

            

**Intervention-Related Units (介入相關單位) 的處理邏輯：**

            

在常規生產中，介入操作後通常會丟棄一定數量的產品單位作為風險緩解措施（例如：設備組裝後的前 N 瓶、矯正介入後受影響區域的產品）。在 APS 中，這些「棄置單位」的處理需要特別考量：

            
                
                    
                    
                    
                
| 單位類型 | APS 中的處理 | 是否納入判定標準 |
| --- | --- | --- |
                
                    
                    
                    
                
| 完整密封的棄置單位 (Integral rejects) | 建議單獨培養以獲取資訊 | 否 — 僅供參考用 |
                
                    
                    
                    
                
| 非完整單位 (Non-integral, e.g., cracked) | 不培養，直接丟棄 | 不適用 |
                
                    
                    
                    
                
| 常規充填的正常單位 | 全部培養 | 是 — 納入 APS 接受標準 |
            

        

        

            

#### 重點提示 Key Notes

            

**APS 棄置量的鐵律：**APS 中介入後的棄置量**絕不可超過**常規生產中的棄置量。如果生產中只棄置 5 瓶，APS 中也只能棄置 5 瓶。這確保 APS 不會因為丟棄更多「可能有問題」的單位而人為美化結果。

        

        

            

#### 比喻說明 Analogy

            

想像你在做食品安全檢查：廚師切菜時刀子掉到地上（矯正介入），按照規定要丟掉刀子碰到的那幾片菜（棄置單位）。在「模擬檢查」中，你也只能丟掉同樣數量的菜。如果你丟掉更多，那這次檢查的結果就不能真正代表日常狀況了。而那些被丟掉的菜，雖然不算在合格率裡，但如果送去化驗發現有問題，仍然需要調查原因。

        

        

            

#### 重點提示 — 「培養但不計分」的智慧

            

TR22 對介入棄置單位的處理建議體現了一種巧妙的平衡：

            

                
- **培養**它們 — 因為這些單位能提供寶貴的製程資訊，幫助理解每項介入的實際風險

                
- **不計入判定標準** — 因為在生產中這些單位也會被丟棄，計入判定會使 APS 比生產更嚴格

                
- **但若發現汙染必須調查** — 因為即使不計分，汙染仍然是一個警訊，需要找出根本原因

            

        

        

            

#### 練習思考 Practice Questions

            

                
1. 為什麼非完整單位（如破裂容器）不需要在 APS 中培養？如果培養了會產生什麼問題？

                
2. 某 APS 中，介入後棄置的 10 瓶單位中有 2 瓶發現微生物生長。雖然這些不計入 APS 判定標準，品質單位應該如何處理？

            

        

    

## 4.1.4 Sterile Bulk Aseptic Process Simulation

    

        

### 原文內容 Original Text

        

Technical Report 22 does not address APS for sterile bulk products (i.e., liquids, solids, suspensions) or for drug product, however they are described in PDA Technical Report No. 28 (Revised 2006): Process Simulation Testing for Sterile Bulk Pharmaceutical Chemicals (TR 28). Special considerations for the inclusion in the APS of sterile-material additions during the preparation of suspension drug products, however, is covered in Section 4.2.3.

    

    

        

### 導師解析 Tutorial Commentary

        

            

#### 核心概念解析 Key Concepts

            

**TR22 與 TR28 的分工：**

            

                
- **TR22** — 針對最終劑型 (Finished Dosage Forms) 的無菌充填製程模擬

                
- **TR28** — 針對無菌原料藥 (Sterile Bulk Pharmaceutical Chemicals) 的製程模擬測試

            

            

但注意：懸浮液產品在調配過程中涉及無菌物料添加的特殊考量，仍在 TR22 的 Section 4.2.3 中討論。

        

        

            

#### 重點提示 Key Notes

            

對 CDMO 而言，如果同時承接原料藥和成品藥的無菌製造，需要同時參考 TR22 和 TR28 兩份技術報告。兩者在基本原則上一致，但在具體操作細節上有所不同。

        

    

## 4.2 Aseptic Process Simulation Design with Regard to Products

    

        

### 原文內容 Original Text

        

The following are aspects to consider in the design of the APS which are specific to the simulated product dosage form.

    

    

        

### 導師解析 Tutorial Commentary

        

            

#### 核心概念解析 Key Concepts

            

**產品劑型特定的 APS 設計考量：**Section 4.2 將針對不同產品劑型（如溶液、凍乾、懸浮液、預充填針筒等）討論各自的 APS 設計要點。由於每種劑型有不同的無菌操作步驟和風險特性，APS 的設計也必須相應調整。

            

此部分的詳細內容將在 **Section 2b** 中繼續。

        

        

            

#### 重點提示 Key Notes

            

Section 4.2 是 TR22 中非常重要的一節，因為它將通用原則 (4.1) 轉化為針對特定劑型的具體指引。在實際作業中，品質人員和製程工程師需要同時參考 4.1 的通用要求和 4.2 中適用於自身產品的特定要求。

# Section 4.2-4.3: Powders, Other Dosage Forms & Equipment Technologies

    

粉劑、其他劑型與設備技術之無菌製程模擬

    

PDA Technical Report No. 22 (Revised 2025) | p24 - p37

    

### 本章學習目標

    

        
- 了解凍乾產品 APS 的獨特製程步驟（包含部分加塞、裝載、真空模擬）及其特殊考量

        
- 掌握懸浮液、半固體、粉劑等不同劑型的 APS 設計策略與替代物選擇原則

        
- 理解粉劑充填的五種 APS 方法及各自的優缺點比較

        
- 認識基於設備技術（FFS/BFS、RABS、隔離器、封閉系統、SUS）的 APS 設計差異

        
- 掌握 ATMP 製造中手動操作 APS 設計的特殊要求

    

    

### 本節目錄 Section Contents

    

        4.2.2 Lyophilized Products
        4.2.3 Suspensions
        4.2.4 Semisolids
        4.2.5 Powders
        4.2.6 Other Dosage Forms
        4.3 Equipment Technologies
        4.3.1 FFS/BFS
        4.3.2 RABS
        4.3.3 Isolator
        4.3.4 Closed Systems
        4.3.5 SUS
        4.3.6 PUPSIT
        4.3.7 ATMP
    

## 4.2.2 Lyophilized Products

    

        

### Original Text

        

The lyophilization APS should include and mimic all process steps, activities, interventions, and conditions used or present during routine production, unless those process steps, activities, interventions, and conditions inhibit or alter the microbiological growth properties of the media. The lyophilization process includes several unique process steps that are different from liquid fill and should be simulated to the extent feasible. Some of the steps may be performed manually, some may be performed using automated or semiautomated systems, some are performed in or through open controlled environments, some are performed using closed-environment systems, and some cannot be fully performed due to media-growth inhibition.

        

The conditions, interventions, and activities that pose a risk to product sterility, including shelf-loading, cycle-dwell activities and conditions, condenser operation, vacuum activation, pulsing, venting and introduction of gas overlay, and shelf movement should be considered for inclusion within the APS. A risk assessment should be used to determine the worst-case conditions to be used in the simulation for each of the lyophilization process steps and to decide whether to include the step, the extent of inclusion, and the need to modify any of the following steps and conditions in the APS:

        

            
- **Filling Step:** There are various container-closure systems used, including vials with fluted stoppers, vials with a combination stopper and crimp, multichambered vials, and prefilled multichambered syringes. The containers are filled with media and partially stoppered, where required, and transferred to sterilized lyophilization chambers after filling.

            
- **Sterilization Hold Time:** The simulation should include the maximum holding time for all sterilized equipment and components. For the lyophilizer this is the time between the lyophilizer chamber sterilization and loading of the lyophilizer.

            
- **Transfer Step:** The filled and partially stoppered units are transferred from the filling line to the lyophilizer. The units are only partially stoppered or open within a sealed box with the interior of the containers and media/product exposed to the environment. The transfer is performed manually by using barrier technologies and mobile unidirectional air flow (UDAF) carriers or using an automated loading and transfer system. The environment where the transfer occurs, whether open or closed, should be controlled to Grade A conditions.

            
- **Loading Step:** The containers are loaded into the lyophilizer chamber at ambient temperature, either manually or using an automated loading system. Barrier systems are required or a mobile UDAF Grade A unit for manual transfer. The environment where the loading occurs should be controlled and should be Grade A anywhere the partially stoppered units are exposed.

            
- **Cycle Vacuum Step:** A partial vacuum is drawn on the chamber, and this level is held for a predetermined time. A full-cycle vacuum should not be used because it could result in media boilover.

            
- **Freezing Step:** The freezing step can be simulated through the activation of the condenser, the opening of valves, and other activities that occur during the freezing step. It is important not to freeze the media because that can inhibit microbiological growth.

            
- **Cycle Dwell Step:** Activities that occur during the cycle dwell should be included in the simulation. The duration of the dwell simulated in the APS does not necessarily have to represent the full production dwell time. The APS dwell activities and time should be determined by risk assessment and should be sufficient to include simulation of the conditions and activities that occur during the dwell time.

            
- **Full Stopper Insertion:** After the dwell period, the filled vial units are stoppered by chamber shelf compression.

            
- **Unit Unloading:** The units are removed from the lyophilizer and transported to the capping station or area. The environment through which the units are transferred should be closed or in the case of stoppered vials controlled (Grade A air supply as minimum requirement). The units are not considered to be fully sealed until they are capped.

        

        

### 4.2.2.1 Special Considerations Unique to the Production of Lyophilized Products

        

            
- **Freezing of Media:** In order to maximize microbial recovery, freezing or cooling of media that inhibits microbiological growth should be avoided.

            
- **Vacuum Levels and Duration for Traditional Lyophilization:** In the simulation of a lyophilization process, the depth of vacuum drawn on the chamber and the period of time for which this vacuum is held are important considerations. The vacuum level must not be so low as to permit the medium in the container to boil out, thereby invalidating the simulation. To avoid boiling the media, the chamber pressure during APS must not drop below the equilibrium vapor-pressure of the media (e.g., water, 32 mbar at 25 °C) at the loading temperature. The best practice is to maintain the chamber pressure between approximately 100 mbar and 200 mbar during sublimation and secondary drying simulation. Factors to consider include:
                

                    
    - Using air to break the vacuum instead of nitrogen or other process gases

                    
    - Replicating the maximum interval between sterilization of the lyophilizer and its use

                    
    - Replicating the maximum period of time between filtration and lyophilization

                    
    - Considering quantitative aspects of worst-case situations

                

            

            
- **Inert Gas Simulations:** In the production of lyophilized products, it is common practice to use sterile inert gases to break the vacuum on the chamber. The use of inert gases, such as nitrogen, in the lyophilization process does not necessarily constitute an anaerobic condition that warrants the use of anaerobic media. The use of an inert gas and anaerobic medium (e.g., alternate fluid thioglycollate medium) would be appropriate where the persistent presence of strict anaerobic microorganisms has been confirmed either through EM or, more likely, during product sterility testing or when the entire process is conducted under anaerobic conditions. Where strict anaerobes have not been detected, lyophilizer APSs should be conducted under fully aerobic conditions (i.e., utilizing soybean casein digest medium (SCDM) and air in place of an inert gas to break the vacuum).

        

    

    

        

### Tutorial Commentary

        

            

#### 核心概念解析 Key Concepts

            

**Lyophilization APS (凍乾製程模擬)：**凍乾製程涉及充填、部分加塞 (partial stoppering)、轉移、裝載、真空抽氣、駐留、完全加塞與卸載等多個獨特步驟，每個步驟都可能暴露產品於污染風險中。APS 必須模擬這些步驟，但要避免凍結或過度抽真空導致培養基失去微生物生長能力。

            

**Partial Stoppering (部分加塞)：**凍乾製程中，瓶塞僅部分插入瓶口，讓水蒸氣在冷凍乾燥過程中能夠逸出。這意味著容器在整個凍乾週期中並非完全密封，增加了污染風險。

        

        

            

#### 比喻說明 Analogy

            

凍乾 APS 就像模擬一場複雜的「搬家演習」：你需要將貴重易碎品（部分封蓋的瓶子）從包裝區（充填線）搬到特殊儲藏室（凍乾機），整個過程中貨物處於「半開」狀態。演習重點不是真的搬貨，而是確認搬運路線、開門動作、放置順序等每個環節都不會讓灰塵（微生物）進入。

        

        

            

#### 重點提示 Key Notes

            

**真空控制是關鍵陷阱：**APS 期間腔室壓力**不可低於培養基在裝載溫度下的平衡蒸氣壓**（例如水在 25°C 時為 32 mbar），否則培養基會沸騰溢出，導致模擬無效。最佳實踐是維持在 100-200 mbar。

            

**氮氣 vs 空氣：**除非環境監測或無菌試驗中已確認存在嚴格厭氧菌，否則凍乾 APS 應使用空氣（而非氮氣）破真空，並使用 SCDM 好氧培養基。這是一個常見的法規審查重點。

        

        

            

#### 凍乾 APS 步驟速查表

            
                
| 步驟 | APS 模擬重點 | 注意事項 |
| --- | --- | --- |
                
| 充填 | 部分加塞後轉移 | 與液體充填分開模擬可能較佳 |
                
| 滅菌保持時間 | 模擬最大保持時間 | 凍乾機滅菌至裝載的間隔 |
                
| 轉移/裝載 | Grade A 環境控制 | 使用屏障系統或移動式 UDAF |
                
| 真空 | 部分真空，100-200 mbar | 避免培養基沸騰溢出 |
                
| 冷凍 | 啟動冷凝器等動作 | 不可實際冷凍培養基 |
                
| 駐留 | 模擬活動，非全程時間 | 風險評估決定駐留時長 |
                
| 完全加塞 | 壓板壓塞 | 確認密封完整性 |
                
| 卸載 | Grade A 環境至壓蓋站 | 未壓蓋前不視為完全密封 |
            

        

        

            

#### 練習思考 Practice Questions

            

                
1. 為什麼凍乾 APS 中不能使用全真空？如果誤用全真空會發生什麼後果？

                
2. 在什麼條件下才需要在凍乾 APS 中使用厭氧培養基（如硫醇酸鹽培養基）？

                
3. 凍乾 APS 的駐留時間不一定要等於生產批次的完整駐留時間，這是基於什麼邏輯？

            

        

    

## 4.2.3 Suspensions

    

        

### Original Text

        

Sterile suspensions are used for the administration of insoluble sterile materials such as some antibiotics, vaccines, and corticosteroids. Because suspensions contain insoluble materials, sterilization through filtration may not be possible. Additionally, suspensions may contain heat-sensitive materials and ingredients, therefore heat sterilization may not be possible. For those reasons, sterile suspensions may involve the aseptic addition of sterilized components and ingredients as part of the compounding procedure. The APS for the filling of suspensions requires the simulation of these aseptic additions and other aseptic procedures in addition to the simulation of the aseptic filling process.

        

In aseptic compounding operations, the APS procedures should include the aspects of suspension manufacturing including sterilization of the vehicle, addition of the sterile component, and homogenization of the suspension. The most basic adaptation of the standard liquid APS is the addition of a sterile placebo powder or sterile media (instead of sterile product powder) to a tank of medium. If a sterile liquid component is added to the suspension, adding media is recommended so as not to alter the final media composition and its growth-promoting capabilities. While replacing the sterile product powder with sterile nutrient media, care should be taken to avoid excess powder in the area. A granular media helps in reducing dust formation and improving the flow. This simulates the critical difference in the production of suspensions: addition of a sterile component under aseptic conditions.

        

Filling operations should be carried out in a manner similar to that described for solution fills, with the introduction of any routine changes in the filling setup to accommodate suspension filling. Where recirculation lines, surge tanks, agitators, and other modifications are employed to fill suspensions, they should be employed in the simulated fill.

        

To effectively simulate the manufacturing process, it is crucial to follow it completely from the preparation of the sterile suspension to the end of the filling. Avoid breaking down or separating individual process operations, such as the compounding process or the aseptic addition of the suspension material. This is important because segmenting the process might lead to the omission of key process variables in the simulation. Be cautious when not formulating and filling the APS end-to-end in one continuous process, as additional steps not part of the simulated process may be required.

        

The one exception may be a suspension APS, where having separate simulations for the aseptic compounding procedure and the aseptic filling procedure can be beneficial. This approach can help evaluate specific aseptic process steps involved in the preparation of suspensions, identify sources of process weaknesses, and investigate process-simulation failures. While a segmented APS may be beneficial initially or during a failure investigation, there should be no need for routine separate APS for suspension products.

        

The need for or benefit of segmenting the suspension APS into individual process simulations should be supported by documented justification, stating why the end-to-end process cannot occur, including a risk-based assessment that ensures all aseptic processing steps and conditions are included in the simulations, and that the combined APS runs cover the entire aseptic manufacturing process.

    

    

        

### Tutorial Commentary

        

            

#### 核心概念解析 Key Concepts

            

**Suspension APS (懸浮液製程模擬)：**懸浮液含有不溶性物質，可能無法進行過濾除菌或熱滅菌，因此製造過程中需要在無菌條件下添加已滅菌的組分。APS 必須模擬這些無菌添加操作。

            

**End-to-End Process (端到端製程)：**TR22 強調 APS 應從懸浮液配製一路模擬到充填結束，避免將製程分段。分段模擬可能導致遺漏關鍵製程變數。

        

        

            

#### 比喻說明 Analogy

            

懸浮液 APS 就像排練一場完整的料理過程：你不能只演練「炒菜」不演練「備料」。因為在高級無菌廚房（Grade A 環境）中打開容器加入預先消毒的香料粉（無菌組分添加）本身就是最大的污染風險點。只有完整走一遍從備料到上菜的全流程，才能確保每個環節的無菌操作都受到驗證。

        

        

            

#### 重點提示 Key Notes

            

**分段 vs 端到端：**常規操作應採用端到端模擬。只有在故障調查或初始驗證階段，才可考慮將配製和充填分開模擬，且必須有書面理由和風險評估來確保所有步驟都被涵蓋。

            

**顆粒狀培養基：**使用顆粒狀培養基替代粉末可減少粉塵污染，改善流動性。這是實務上的重要技巧。

        

        

            

#### 實務應用 Practical Application

            

某 CDMO 同時生產抗生素懸浮液和疫苗懸浮液。兩者的配製過程不同（一個是在無菌環境中添加滅菌粉末，另一個是添加滅菌佐劑），但共用同一條充填線。在這種情況下，每個產品的 APS 都應端到端模擬其獨特的配製+充填流程，包括使用替代物模擬無菌組分添加步驟。

        

        

            

#### 練習思考 Practice Questions

            

                
1. 為什麼懸浮液 APS 強調「端到端」模擬比溶液 APS 更重要？

                
2. 在什麼情況下可以將懸浮液 APS 分段進行？需要哪些文件支持？

            

        

    

## 4.2.4 Semisolids — Ointments, Creams, and Gels

    

        

### Original Text

        

For the purpose of this technical report, sterile ointments, creams, gels, and other semisolids will be referred to collectively as ointments. Producing sterile ointments involves unique manufacturing conditions and steps that may require special consideration in the APS design. The aseptic manufacturing processes can resemble either solution or suspension product processes, depending on the solubility of the active and inactive materials in the bases. The simulation should mimic the actual procedures used by the firm in their operations. This may involve the use of surrogate materials, including agents to increase the viscosity of the media needed to simulate the filling properties of the product. Where drug product processing steps and conditions may adversely affect the growth of microbiological contamination, modification of the steps or use of alternative steps may need to be incorporated in place of those steps in the APS.

        

### 4.2.4.1 Compounding

        

Where the manufacturing process includes aseptic compounding (also known as formulation) operations, the procedures previously described for either solution or suspension compounding should be followed using whichever method more closely simulates the actual compounding procedure used for the product being simulated.

        

The product manufacturing process may also include heating steps that could reduce the growth of microbiological contamination. These heating steps should not be included in the APS if they will significantly reduce the ability to detect contamination. If heating will impact that ability, it may be necessary to modify the viscosity of the media to accommodate filling. If heating is required for the routine process, whether it will impact the growth promotion properties of the media must be evaluated and determined. It is important to ensure that the media maintains appropriate growth-promoting capabilities through all processing and handling steps, supported by the growth-promotion test after incubation.

        

### 4.2.4.2 Filling

        

Filling of sterile ointments generally is performed on a filling machine quite different from one employed for vials, syringes, or ampoules. The differences in equipment design and operation aside, the basic approach to conducting the fill is similar to that employed for other dosage forms. Increasing the viscosity of the media (e.g., adding agar to media) in the APS to simulate a process is not required, if the fill time of the media is the same as for the viscous product and the filler can properly operate at lower viscosities.

        

Depending on the capabilities of the filling equipment, increasing the viscosity may be required to enable the media to be processed without difficulty and allow an aseptic filling of media. However, the use of thickening agents should not impact the viability of the media.

        

### 4.2.4.3 Inspection

        

Ointments are often filled into opaque containers, tubes, and applicators. The post-incubation inspection of filled process-simulation tubes may require additional steps to view evidence of contamination. If possible, opaque containers can be replaced with similarly sized and shaped clear containers, with similar sealing systems. Where clear substitute containers are used, those containers should not run, fill, or be handled in a manner that is better than the opaque containers nor should they have properties that reduce the ability for growth of microbiological contamination.

        

If it is not possible to substitute clear containers, then the media-filled opaque containers should be incubated in their containers. After incubation, the media should be transferred from the opaque container to an individual glass or other suitably clear and sterile container for inspection. Care should be taken to avoid contamination from this transfer of media. It is important to culture any suspected contaminated unit as soon as practical to determine if the source of that contamination is microbiological, chemical, or from another source.

    

    

        

### Tutorial Commentary

        

            

#### 核心概念解析 Key Concepts

            

**Semisolid APS (半固體製程模擬)：**軟膏、乳膏、凝膠等半固體產品的無菌製造可能類似溶液或懸浮液製程。APS 的核心挑戰在於：(1) 是否需要增加培養基黏度以模擬實際充填特性；(2) 加熱步驟是否影響培養基的微生物生長能力；(3) 不透明容器如何進行培養後檢查。

        

        

            

#### 比喻說明 Analogy

            

半固體 APS 就像用水代替蜂蜜來測試擠壓瓶包裝線：如果包裝線可以正常運作（充填時間相同），用水就夠了；但如果設備必須依賴液體的高黏度才能正常運轉，你就需要加入增稠劑讓水「表現得像蜂蜜」。但無論如何，增稠劑不能讓水變質（即不能抑制微生物生長）。

        

        

            

#### 重點提示 Key Notes

            

**不透明容器的檢查策略（二選一）：**

            

                
- **方案 A（優先）：**使用透明替代容器，但其尺寸、形狀、密封系統必須相似，且不能比正式容器更有利。

                
- **方案 B：**使用不透明容器培養後，無菌轉移培養基至透明容器檢查，但需避免轉移過程中的污染。

            

            

**加熱步驟原則：**若常規製程需要加熱，APS 設計需評估加熱是否會影響培養基生長促進能力。如會影響，則不應在 APS 中包含加熱步驟，但可能需要調整培養基黏度來配合充填。

        

        

            

#### 練習思考 Practice Questions

            

                
1. 如果軟膏充填設備在低黏度下仍能正常運作，APS 是否需要添加瓊脂增加培養基黏度？為什麼？

                
2. 使用透明替代容器進行半固體 APS 時，有哪些必須確認的條件？

            

        

    

## 4.2.5 Powders

    

        

### Original Text

        

Aseptically produced sterile dry drug products, such as powders, microspheres, liposomes, or other solid materials, are dry nonliquid materials that are typically filled into vials, syringe cartridges, or other types of sterilized containers. These products will be collectively referred to here as "sterile powders."

        

Section 4.2.5 covers simulation of the handling, transfer, filling, and sealing of sterile powders. Some options and approaches for performing the APS will be presented, along with their respective advantages and disadvantages. Unless otherwise noted, the steps and precautions noted in the APS of solution products will be relevant to the APS of sterile-powder handling, filling, and sealing. (See Section 4.2.1 for solution products.)

        

The production of sterile powders requires aseptic processes and equipment that may be quite different from those used to produce other aseptically produced liquid or lyophilized sterile dosage forms. While the filling of dry powders and materials utilizes equipment different from that used for filling liquids the APS of sterile powder-filling still involves the evaluation of sterile growth media filled in place of the powder product or in addition to a powder placebo.

        

The APS for sterile powders may require special processing steps for the replacement of the product and the evaluation of the media. Similarly, during the performance of the APS for a powder-filling procedure, adaptations to the filling practices may need to be employed.

        

Aseptic handling, filling, and sealing processes can be simulated using an appropriate placebo powder or other suitable surrogate powder material, such as sterilized Tryptic Soy Agar (TSA), mannitol, lactose, or polyethylene glycol, that mimics the sterile-powder drug product. The following bullet points need to be considered:

        

            
- Any placebo or surrogate material used should be filled and sealed in the same containers as those used in the aseptic process under evaluation.

            
- The placebo or surrogate material should exhibit or imitate physical characteristics similar to those of the sterile drug powder that pose a risk to product sterility.

            
- The placebo or surrogate material and the necessary modified process steps should not inhibit microbiological growth, impact growth-promoting properties of the media, or interfere with the ability to visualize turbidity.

            
- The impact of the placebo or surrogate material to inhibit the growth of microbiological contamination in the nutrient media should be assessed in microbiological growth and recovery studies.

            
- The placebo or surrogate material should not adversely affect the ability of the media to exhibit or show microbiological contamination.

            
- Where the processing steps and conditions may adversely affect the growth of microbiological contamination, steps may need to be modified or alternative steps may need to be used. Modified processing steps should not exclude processing steps that have been determined to pose a risk to product sterility.

            
- The APS will require two individual filling operations - one for filling of the liquid nutrient medium and one for the filling of the placebo powder or surrogate material.

            
- The individual contamination contribution from each of these individual filling steps may increase the overall risks of process-simulation contamination, and the process controls during the APS must take these risks into account.

            
- The placebo or surrogate material should be compatible with the production handling and filling systems.

            
- Separate simulations of individual unit operations should be avoided but, if used, they should be documented and supported by scientific or technical justification.

            
- Inspectors should be trained to inspect filled media-containing placebo or surrogate material, since the material could create the appearance of turbidity that resembles microbial growth. Ideally, the material used should not create the appearance of turbidity; however, if that is not possible, it should be clearly distinguished from microbial turbidity, and inspectors should be specifically trained to recognize the difference between product precipitation (from the placebo) and microbial turbidity.

        

    

    

        

### Tutorial Commentary

        

            

#### 核心概念解析 Key Concepts

            

**Sterile Powder APS (無菌粉劑製程模擬)：**粉劑 APS 是所有劑型中最具挑戰性的，因為粉末充填設備與液體充填完全不同，而微生物回收仍然需要液體培養基。這導致了一個根本矛盾：需要用液體培養基來評估粉末充填的無菌性。

            

**Placebo Powder (安慰劑粉末)：**常用的替代物包括滅菌 TSA、甘露醇 (mannitol)、乳糖 (lactose) 或聚乙二醇 (PEG)。選擇替代物時必須確保其物理特性接近實際產品粉末，且不會抑制微生物生長或影響濁度觀察。

            

**Two Filling Operations (雙重充填操作)：**粉劑 APS 本質上需要兩次充填：一次充填液體培養基，一次充填安慰劑粉末。這增加了額外的污染風險，必須在 APS 設計中納入考量。

        

        

            

#### 比喻說明 Analogy

            

粉劑 APS 就像要在麵粉工廠做食品安全測試：你不能用水來測試麵粉包裝線（設備不同），但你又需要液體培養基才能檢測微生物。所以你必須想辦法把「乾的測試」和「濕的測試」結合在一起。這就像既要測試麵粉會不會被灰塵污染（粉末充填），又要在灌好麵粉的袋子裡加入營養液來培養看看（液體培養基），兩個步驟缺一不可。

        

        

            

#### 重點提示 Key Notes

            

**檢查人員訓練：**安慰劑粉末在培養基中可能產生沉澱或渾濁外觀，容易與微生物生長混淆。檢查人員必須經過專門訓練，能區分「產品沉澱」和「微生物濁度」。任何疑似生長的樣品都需進一步隔離和檢測。

            

**風險累積：**由於需要兩次充填操作，粉劑 APS 的污染風險本質上高於單次充填的溶液 APS。APS 結果評估時必須考慮這一額外風險來源。

        

        

            

#### 練習思考 Practice Questions

            

                
1. 為什麼粉劑 APS 需要兩次充填操作？這與溶液 APS 有什麼根本差異？

                
2. 選擇安慰劑粉末時，有哪些關鍵考量因素？為什麼不能隨便選一種惰性粉末？

                
3. 粉劑 APS 中「兩次充填」帶來的額外污染風險應如何管理？

            

        

    

## 4.2.5.1 - 4.2.5.5 Approaches for Sterile-Powder APS

    

        

### Original Text

        

### 4.2.5.1 Liquid Media Filled by Powder Filling Equipment

        

Some sterile-powder filling machines can fill liquid with little or no modification. In this procedure, the liquid medium is introduced as a direct substitute for the sterile powder in the fill hopper. The conduct of the APS is essentially the same as that described in Section 4.2, which notes the importance of integrating all the fill-line activities during the simulation.

        
            
| Table 4.2.5.1-1: Advantages and Disadvantages of Liquid Medium Filled by Powder Filling Equipment |
| --- |
            
| Advantages | Disadvantages |
            
                
- 
- 
- 
- 

                
- 
- 
- 
- 
- 

            
| Only a single filling machine is required.                         Simplifies the execution of the APS.                         Avoids the risk of contamination from a new system.                         Additional media controls for a separate liquid-fill machine are not required. | Setup may differ from that used for powder fill.                         Any variables or risks posed by the handling and filling of dry material may not be captured.                         The powder-filler may be capable, but it may not be well-suited for filling liquid.                         Liquid media leakage may occur.                         Cleaning liquid media may be difficult. |
        

        

### 4.2.5.2 Liquid Media Filled on Dry-Powder Filler with Supplementary Liquid-Fill Capability

        

Some dry powder fillers may be adapted to add a supplementary liquid-filling capability. The liquid-filling capability of these machines is not equivalent to conventional liquid fillers and is used only in APSs. In this manner, the same filling machine could be used for both the liquid- and solid-filling operation during APS.

        
            
| Table 4.2.5.2-1: Advantages and Disadvantages of Liquid Media Filled on Dry-Powder Filler with Supplementary Liquid-Fill Capability |
| --- |
            
| Advantages | Disadvantages |
            
                
- 

                
- 
- 
- 
- 
- 
- 
- 
- 

            
| A single filler is used, and no additional line modifications are required. | The filler may need to be operated at lower speeds due to its design.                         Some designs may not fill liquid into every vial that receives powder.                         Requires additional processing or handling steps that are not part of regular process which may add risk.                         The setup may differ from that used for powder fill.                         Any variables or risks posed by the handling and filling of dry material may not be captured.                         The powder filler may be capable but not well-suited for filling liquid.                         Liquid media leakage may occur.                         Cleaning liquid media may be difficult. |
        

        

### 4.2.5.3 On-Line Liquid Media Fill followed by On-Line Placebo Powder Fill

        

In this scenario, a liquid-filling machine is added to the filling line prior to the powder filler. For the APS, a volume of medium in the range appropriate for a liquid fill is added to the container, followed by a fill of sterile placebo material to the same container. When a powder and a liquid are combined, then the dispersion and dissolution of powder through the media should be confirmed. This can be achieved manually by inverting the container several times during the pre-inspection of containers prior to incubation.

        
            
| Table 4.2.5.3-1: On-Line Liquid Media Fill Followed by On-Line Placebo Powder Fill |
| --- |
            
| Advantages | Disadvantages |
            
                
- 

                
- 
- 
- 
- 

            
| All processes on-line, with no additional handling of containers. | A second filler will need to be set up and qualified.                         The process subjects the open units to additional exposure time.                         Additional processing or handling steps that are not part of regular process are added due to liquid filling which may add risks.                         Limited space in the container may result in powder collecting on the rim of the container and affecting the seal. |
        

        

### 4.2.5.4 On-line Placebo Powder Fill Followed by On-Line Liquid Media Fill

        

This method is used when the physical addition of a liquid media before the powder filler is not possible. As with the process above, when a powder and a liquid are combined, then the dispersion and dissolution of powder through the media should be confirmed.

        
            
| Table 4.2.5.4-1: On-Line Placebo Powder Fill Followed by On-Line Liquid Media Fill |
| --- |
            
| Advantages | Disadvantages |
            
                
- 

                
- 
- 
- 
- 
- 
- 

            
| All processes are on-line, with no additional handling of containers. | A second filler will need to be set up and qualified.                         The process subjects the open units to additional exposure time.                         Additional processing or handling steps that are not part of regular process are added which may add risks.                         Limited space in the container may result in media overfill or in splash collecting on the rim of the container and affecting the seal.                         There is a potential for powder aspiration from the container when the liquid is filled last.                         There may be an increased risk for particles impacting the inspection after incubation. |
        

        

### 4.2.5.5 Dry Media Filled as a Powder and Reconstituted to a Liquid Form After the Fill

        

In this method, dry media is filled into the units using a powder filler. Sterile water is added under Grade A conditions.

        
            
| Table 4.2.5.5-1: Advantages and Disadvantages of Dry Media Filled as a Powder and Reconstituted to a Liquid Form After the Fill |
| --- |
            
| Advantages | Disadvantages |
            
                
- 

                
- ****

            
| No additional equipment is needed. | Additional steps to add water are burdensome and will add significant, and potentially unacceptable, risk to the simulation, which is why this is not a recommended practice. |
        

    

    

        

### Tutorial Commentary

        

            

#### 核心概念解析 Key Concepts

            

TR22 提供了五種粉劑 APS 執行方法，從最簡單到最複雜，每種方法都在「模擬真實性」與「操作可行性」之間取捨：

            

                
- **方法 1（4.2.5.1）：**直接用粉末充填機灌液體培養基 — 最簡單但最不真實

                
- **方法 2（4.2.5.2）：**粉末充填機加裝液體充填功能 — 單一設備但需改裝

                
- **方法 3（4.2.5.3）：**先灌液體再灌粉末（線上雙充填）— 更真實但增加暴露

                
- **方法 4（4.2.5.4）：**先灌粉末再灌液體（線上雙充填）— 更真實但有粉末飛濺風險

                
- **方法 5（4.2.5.5）：**灌乾燥培養基粉末後加水復原 — 不推薦

            

        

        

            

#### 比喻說明 Analogy

            

五種方法就像測試速食麵包裝線的不同策略：

            

                
- **方法 1：**直接用湯包裝線灌水測試 — 快但沒測到裝麵的過程

                
- **方法 2：**在麵條包裝機上加個小水龍頭 — 湊合但不太順手

                
- **方法 3：**先灌水再灌麵 — 都測到了但碗裡先有水

                
- **方法 4：**先灌麵再灌水 — 都測到了但水可能濺出麵粉

                
- **方法 5：**灌完麵後手動一碗碗加水 — 太麻煩且風險太高

            

        

        

            

#### 重點提示 Key Notes

            

**方法 5 明確不推薦：**因為充填後手動逐瓶添加無菌水的額外操作會帶來顯著且可能不可接受的污染風險。

            

**共同風險：**無論使用哪種方法，當粉末和液體合併時，必須確認粉末能在培養基中適當分散和溶解。實務上通常在培養前將容器倒轉數次來實現。

            

**選擇考量：**方法的選擇取決於設備能力、空間限制、和風險評估。沒有「一體適用」的最佳方案，關鍵是充分評估每種方法帶來的額外風險。

        

        

            

#### 粉劑 APS 方法比較總覽

            
                
| 方法 | 設備需求 | 模擬真實性 | 額外風險 | 推薦程度 |
| --- | --- | --- | --- | --- |
                
| 4.2.5.1 | 低（單機） | 低 | 低 | 可用 |
                
| 4.2.5.2 | 低（單機改裝） | 中低 | 中 | 可用 |
                
| 4.2.5.3 | 高（雙機） | 高 | 中高 | 較佳 |
                
| 4.2.5.4 | 高（雙機） | 高 | 中高 | 較佳 |
                
| 4.2.5.5 | 低（單機+手動） | 最高 | 最高 | 不推薦 |
            

        

        

            

#### 練習思考 Practice Questions

            

                
1. 你的工廠使用螺桿式粉末充填機，該設備無法灌液體。你會選擇哪種粉劑 APS 方法？為什麼？

                
2. 方法 3 和方法 4 的主要差異是什麼？在什麼情況下你會選擇方法 4 而非方法 3？

                
3. 為什麼方法 5 被明確標示為「不推薦」？它的「額外風險」具體指什麼？

            

        

    

## 4.2.6 Other Dosage Forms and Drug/Device Combinations

    

        

### Original Text

        

Aseptic processing may be used for sterile drug dosage forms or healthcare products other than those addressed in Sections 4.2.1-4.2.5. These may include healthcare products such as inhalants, aerosols, drug/device combinations, implants, advanced therapy medicinal products (ATMPs), and other novel sterile drug or healthcare products manufactured using aseptic processing. The methods and approaches presented in this technical report apply to these products, with consideration and modification to accommodate unique features of the products or processes.

        

### 4.2.6.1 Terminally Sterilized Products

        

Products that are terminally sterilized or otherwise treated to destroy microbiological contamination after filling typically do not require APS because the process does not primarily rely on aseptic processing to ensure product sterility. While the use of APS may not be required for the terminal sterilization cycle, it may still be useful as a tool to evaluate the effectiveness in case any aseptic process steps are applied.

        

### 4.2.6.2 Combination Products

        

Sterile product combinations involving more than one aseptic process may require a separate APS for each aseptic process, as well as for the process of combining the products.

        

### 4.2.6.3 Aseptic Packaging and Assembly Operations

        

For products that are aseptically assembled and packaged, APSs may be required to evaluate the packaging and assembly processes and procedures. These simulations may include the immersion or placement of packaged or assembled products in media as part of the simulation.

        

### 4.2.6.4 Propelled Inhalants and Aerosols

        

These products often are packaged in metal containers that do not allow visual inspection for microbiological contamination. Unlike solutions for other liquid products, it may not be easy to completely empty the aerosol container or transfer the solution (or liquid) from the aerosol containers to a clear container. Propellants may also hamper the growth of microbiologic contamination. Growth-promotion testing and studies should be conducted to ensure that the filling conditions do not adversely affect the growth potential of the media. It may be necessary to modify the filling process and conditions, including the substitution or addition of sterilized air to the propellant to allow for adequate growth.

        

### 4.2.6.5 Implants and Aseptically Formed Products

        

Sterile products that are molded, created, or formed during an aseptic process may also require APS. The formation of these products may use solvents that hamper and adversely affect the microbiological growth of media. In this case, it may be necessary to substitute other surrogate materials for the formed materials to allow for simulation of the aseptic processes.

        

### 4.2.6.6 Advanced Therapy Medicinal Products

        

ATMPs are therapies that encompass gene therapy, somatic-cell therapy, and tissue-engineered products from animals and human origin. These products are often produced aseptically in small batch sizes. In many cases, ATMPs are prepared and filled in individual Grade A laminar flow units or biosafety cabinets (BSC) that are placed in a surrounding Grade B environment. The processes usually involve manual activities and certain processing steps may be performed in a barrier system such as an isolator.

        

APS is an important element in validation of the ATMP manufacturing process and associated aseptic processes. A risk assessment should be used to determine the steps, conditions, duration, personnel participation, and other aspects of the ATMP aseptic manufacturing process that pose a risk to product sterility and should be evaluated in the APS. Key considerations include:

        

            
- Unless otherwise justified, the design, performance, and evaluation of the APS should follow the same steps and principles for other drug product APS.

            
- The process simulation should be designed to resemble the routine manufacturing process associated with open-processing steps and any other steps and conditions that pose a risk to product sterility.

            
- Processing activities that are closed, such as incubation or centrifuge, do not need to be simulated provided there is no open manipulation, interventions, aseptic connections, or contact with sterile product or product-contact surfaces.

            
- Aseptic connections to closed systems should be evaluated in the APS.

            
- Open addition, manipulation, or withdrawal of sterile materials associated with the process should be evaluated in the APS.

            
- If multiple operations are carried out together in a single room, the APS should include the worst-case area occupancy and activity levels.

            
- A risk assessment should be used to determine the extent of operator participation in all aseptic interventions.

            
- Where manual aseptic filling is performed, the principles and requirements for manual filling discussed in PDA's Technical Report No. 62 should be followed.

            
- Placebo/growth promoting media should contact all sterile surfaces of materials and equipment used during the manufacturing process, including waste lines and collection containers.

            
- The incubation of intermediate containers may be necessary if the APS is divided into sections to simulate the entire process.

        

    

    

        

### Tutorial Commentary

        

            

#### 核心概念解析 Key Concepts

            

**Special Dosage Forms (特殊劑型)：**除了溶液、凍乾、懸浮液、半固體和粉劑之外，還有許多獨特的無菌產品需要 APS。每種產品都有其獨特的挑戰，但核心原則不變：模擬所有對無菌性構成風險的製程步驟。

            

**Terminal Sterilization (最終滅菌)：**最終滅菌產品通常**不需要 APS**，因為其無菌保證並不依賴無菌製程。但如果製程中包含任何無菌操作步驟，APS 仍可作為評估工具。

            

**ATMP (先進治療藥品)：**包括基因治療、細胞治療和組織工程產品。特點是批量小、手動操作多、通常在 BSC (Grade A) + Grade B 環境中製造。

        

        

            

#### 比喻說明 Analogy

            

ATMP 的 APS 就像為一家手工訂製巧克力店做食品安全驗證：每批只做幾盒（小批量），由師傅手工操作（手動製程），在一個小型無塵操作台（BSC）上完成。你不能用大工廠的自動化標準來要求它，但食品安全（無菌保證）的底線是一樣的。驗證重點放在師傅的操作技術、打開容器的每個瞬間、以及小空間中多人同時工作的最壞情境。

        

        

            

#### 重點提示 Key Notes

            

**ATMP APS 設計的核心邏輯：**

            

                
- 封閉步驟（培養、離心）不需模擬 — 前提是沒有開放操作

                
- 所有開放操作、無菌連接、物料添加/取出必須模擬

                
- 多人同室作業時，APS 應包含最壞情境的人員密度

                
- 廢液管線和收集容器也需要接觸培養基並培養

                
- 若 APS 分段進行，中間容器也必須培養

            

            

**參考文件：**手動無菌操作應遵循 PDA TR62 的要求。

        

        

            

#### 實務應用 Practical Application

            

某 CDMO 正為客戶開發 CAR-T 細胞治療產品（一種 ATMP）。製程包含：細胞解凍(開放) → 基因修飾(封閉) → 擴增培養(封閉) → 收穫洗滌(半開放) → 手動充填至冷凍袋(開放)。APS 設計應聚焦在解凍、收穫洗滌和手動充填步驟，而基因修飾和擴增培養（完全封閉）可不模擬。每位操作員都必須通過 APS 資格認定。

        

        

            

#### 練習思考 Practice Questions

            

                
1. 最終滅菌產品為什麼通常不需要 APS？在什麼情況下仍然有價值進行 APS？

                
2. 氣霧劑產品的 APS 面臨哪些特殊挑戰？推進劑對微生物生長有什麼影響？

                
3. 設計 ATMP 的 APS 時，為什麼封閉的離心步驟可以不模擬，但無菌連接必須模擬？

            

        

    

## 4.3 APS Design Based on Aseptic Processing Technologies

    

        

### Original Text

        

RABS, form-fill-seal (FFS), blow-fill-seal (BFS), isolation technology, and automated systems can provide a lower risk of contamination. Use of isolators and automated processes with lower-risk interventions during processing mitigate contamination risk and may allow for greater flexibility in APS design (e.g., number of vials needed, duration of fill, personnel participation, and accounting for multiple shift changes). Relative risk and unique aspects of these technologies should be taken into consideration when assessing the design of APS and the design of barrier-system studies. In general, the same criteria for a traditional APS are applicable for all aseptic filing technologies. However, the design and scope/range of the APS might be narrowed for restricted-access filling technologies based on the lower potential for contamination established by the CCS.

    

    

        

### Tutorial Commentary

        

            

#### 核心概念解析 Key Concepts

            

**Technology-Based APS Design (基於技術的 APS 設計)：**這是 TR22 的一個重要概念 — APS 設計不是「一刀切」的。使用更先進的屏障技術（如隔離器）時，由於其本身提供了更高的無菌保障，APS 的設計可以有更大的靈活性。但基本原則不變：所有對無菌性構成風險的步驟仍必須模擬。

            

**Contamination Control Strategy (CCS，污染控制策略)：**APS 範圍的調整必須基於經過驗證的 CCS。不能僅因為「設備比較先進」就任意縮減 APS 範圍。

        

        

            

#### 重點提示 Key Notes

            

這段開場白設定了一個關鍵框架：**技術越先進，APS 彈性越大，但底線不變。**以下各小節將分別討論每種技術的具體考量。

        

    

## 4.3.1 Form-Fill-Seal and Blow-Fill-Seal

    

        

### Original Text

        

FFS and BFS aseptic processes involve some unique process conditions, which should be considered in the design of the APS including:

        

            
- Ability to view contamination in translucent or opaque plastic containers

            
- Interventions or activities within the Grade A critical fill zone or activities in the lower classified space (Grade B or C) surrounding the critical fill zone and FFS/BFS machine. Interventions involving manual manipulation in the forming, cutting, and adjustment/removal area, fill-nozzle exposure area, aseptic connections, and manipulations post-filtration

            
- Foaming characteristics of media that could affect the sealing of containers

            
- Fill volume, including lower-than-normal volume, that may affect the formation of the container

            
- Media exposure to heat and open-container dwell time

            
- Longer campaign (usually)

            
- EM sampling within Grade A, if appropriate

        

    

    

        

### Tutorial Commentary

        

            

#### 核心概念解析 Key Concepts

            

**FFS/BFS (吹灌封/成灌封)：**這些技術在同一台設備上完成容器成型、充填和密封，減少了容器暴露於環境的時間。但 APS 設計需要考慮：培養基的發泡特性可能影響密封、容器成型需要特定的充填量、以及半透明/不透明塑膠容器的檢查困難。

        

        

            

#### 重點提示 Key Notes

            

**BFS/FFS 特有考量：**培養基的發泡性可能導致容器密封不良；充填量過低可能影響容器成型品質。此外，BFS/FFS 通常以較長的 campaign 模式運行，APS 設計需要反映這一特點。

        

        

            

#### 練習思考 Practice Questions

            

                
1. BFS 製程中培養基的發泡特性為什麼需要特別關注？可能導致什麼後果？

            

        

    

## 4.3.2 Restricted Access Barrier Systems

    

        

### Original Text

        

For an APS involving a RABS, the same criteria must be applied as for other aseptic filling lines. The inherent advantage of using a RABS is to lower the risk of contamination due to the presence of physical barriers that functionally separate the product and process from operators. Opening the doors on a RABS unit should be conducted only when necessary (i.e., rare occurrence) and can only be allowed after confirmation (via airflow visualization studies) that the intervention is not allowing the intrusion of lower-grade air into the RABS enclosure. All permitted interventions are required to be simulated in the APS and based on a risk assessment. The APS should not be used to justify frequent opening of the RABS doors e.g. due to ineffective equipment design, as this would add unnecessary risk. See PDA's Points to Consider No. 12: Restricted Access Barrier Systems document for more information.

    

    

        

### Tutorial Commentary

        

            

#### 核心概念解析 Key Concepts

            

**RABS (限制進出屏障系統)：**RABS 通過物理屏障將產品與操作人員分離，但並非完全隔絕。開門操作需經氣流可視化研究確認不會引入低級別空氣。APS 中必須模擬所有允許的干預操作。

        

        

            

#### 重點提示 Key Notes

            

**重要警告：**APS 不應被用來「合理化」頻繁開門操作。如果設備設計導致需要頻繁開門干預，這本身就是設計缺陷，不能通過 APS 來掩蓋。這是法規稽查時的常見關注點。

        

        

            

#### 比喻說明 Analogy

            

RABS 就像手術室的玻璃隔間：外科醫生透過手套口操作，通常不需要打開門。如果手術中經常需要打開門來拿工具，問題不在於「是否能安全開門」，而在於「為什麼手術室設計得需要常開門」。

        

        

            

#### 練習思考 Practice Questions

            

                
1. RABS 開門干預需要滿足什麼前提條件？為什麼不能頻繁開門？

            

        

    

## 4.3.3 Isolator Technology

    

        

### Original Text

        

Isolators eliminate direct access of personnel into the critical environment by defined mechanical and barrier systems and are intended to eliminate human-borne contamination within the aseptic environment where sterile products, containers, closures, and equipment are exposed. Whereas glove ports are still the most common design to reduce contamination risk during interventions, gloveless isolators eliminate risks associated with human interventions. Isolators are decontaminated and material entry is accomplished using validated transfer systems.

        

Although the same principles of APS design apply for isolators, when evaluating worst-case conditions to simulate, the relative risk may vary, and this can lead to a different design. For example, because the aseptic process space is completely separated from the surrounding room and operators during filling, the maximum number of people allowed in the room where the isolator is located or the impact of activities occurring in those areas from operational shift changes are not relevant worst-case conditions. However, if multiple operators interact with the isolator simultaneously (using glove ports), it could represent a worst-case scenario related to pressure or air flow.

        

Also, while isolators should still maintain a semiannual APS frequency for the line, shift structure is not a consideration, because the maximum batch size is larger, and the total filling time is often much longer than in a traditional aseptic filling line. Additionally, due to an isolator's advanced controls, it is possible to have a lower percentage of units filled with media, compared to what would be performed in a traditional aseptic line however, filling fewer than 10,000 filled integral units is not recommended, unless the commercial batch size is smaller. For small-batch sizes, the number of units should adequately represent the production run.

        

For an APS of large commercial batches, it can be useful to periodically process empty vials through the system to more closely simulate the appropriate number of additions and the level of line activity. In this manner, the mechanical and environmental challenges to the isolator environment more closely resemble normal operations, and the ability to recover is not compromised, but the size of the APS does not become excessive.

        

If empty vials are deemed necessary, then:

        

            
- Interventions that take place during the filling of empty vials should not count toward those required for simulation of the process during media-filled conditions.

            
- Any interventions that take place during this period should be executed appropriately, documented, and assessed for impact to the process.

            
- Reconciliation of all units should clearly identify those filled with media and those that are empty.

            
- Only the media-filled units count towards the total acceptance requirements of the APS.

        

        

Processing empty vials occurs with isolators due to their larger campaign-style filling, but this is also applicable to other technologies or filling lines. All decisions to process empty vials during an APS should be justified.

        

In recent years, the use of a "piggyback" APS (i.e., one conducted at the end of a fill or campaign) has become more widespread. Initially, piggyback APS were utilized to support the validation of an increase of campaign length in isolators. A piggyback APS can only be considered as part of the APS strategy and not a standalone APS validation. The use of the piggyback model must be supplemented by other simulations capturing the beginning of the fill, the setup of the line, etc. (see Sections 7.9 and 7.11).

    

    

        

### Tutorial Commentary

        

            

#### 核心概念解析 Key Concepts

            

**Isolator APS (隔離器 APS)：**隔離器完全隔絕人員與無菌環境，因此某些傳統 APS 的最壞情境（如房間人數、換班影響）不再適用。但同時充填量可能非常大（campaign 模式），帶來新的挑戰。

            

**Empty Vials (空瓶處理)：**大批量 APS 時可穿插處理空瓶，以模擬正常生產的機械和環境挑戰，同時避免 APS 培養和檢查量過於龐大。但空瓶期間的干預不計入 APS 的模擬要求。

            

**Piggyback APS (搭載式 APS)：**在正常生產批次結束後緊接著進行的 APS。這不能作為獨立驗證，必須搭配涵蓋製程起始和設備設置的其他 APS 一起使用。

        

        

            

#### 比喻說明 Analogy

            

隔離器 APS 就像測試太空站的無菌操作：太空站（隔離器）與外部環境完全隔絕，所以外面有多少人走動根本不重要（不像普通無塵室）。但如果多位太空人同時伸手進實驗手套箱操作，可能影響內部氣壓平衡。而「搭載式 APS」就像在太空任務結束前做最後一次無菌測試 — 它測試了「長時間運行後」的狀態，但不能替代「發射前」的完整測試。

        

        

            

#### 重點提示 Key Notes

            

**10,000 瓶最低門檻：**即使隔離器的污染風險較低，APS 仍建議不少於 10,000 個完整充填單位（除非商業批量本身更小）。這確保了統計上足夠的檢測靈敏度。

            

**Piggyback APS 限制：**

            

                
- 不能單獨作為 APS 驗證策略

                
- 必須搭配涵蓋「充填起始、產線設置」的完整 APS

                
- 主要用於驗證 campaign 長度的延伸

                
- 已從隔離器擴展到其他技術平台

            

        

        

            

#### 實務應用 Practical Application

            

某 CDMO 使用隔離器充填注射劑，商業批量為 50,000 瓶。APS 策略可以是：充填 15,000 瓶培養基 + 35,000 瓶空瓶穿插處理，以模擬完整批量的機械活動。另外每年至少進行一次涵蓋產線啟動的完整 APS，搭配一次 piggyback APS（接在商業批次後面）來驗證 campaign 後期的無菌保持能力。

        

        

            

#### 練習思考 Practice Questions

            

                
1. 為什麼隔離器 APS 中「房間最大人數」不再是相關的最壞情境？

                
2. 空瓶期間進行的干預為什麼不能計入 APS 的模擬要求？

                
3. Piggyback APS 為什麼不能作為獨立的 APS 驗證策略？

            

        

    

## 4.3.4 Closed Systems

    

        

### Original Text

        

Closed systems are more commonly used for manufacturing sterile bulk products, which is covered in TR 28. A closed system is a system designed to prevent exposure of the product to the surrounding environment by maintaining physical separation and ensuring microbiological integrity throughout its use. In bulk processing, this is achieved through the use of interconnected bulk product holders, such as tanks or bags, which are linked by pipes or tubing and remain closed throughout the process. In sterile manufacturing, closed systems are sterilized in place or while sealed using a validated procedure before use.

        

They are constructed, installed, and qualified to maintain integrity across all operating conditions and the expected duration of use. Fluid transfers can occur within a closed system while maintaining asepsis, and connections to other closed systems can be made without compromising integrity through methods such as rapid transfer ports or steamed connections and other appropriate techniques. These systems are safeguarded by scheduled preventive maintenance and, where applicable, utilize sterilizing filters that are integrity tested and traceable to each product lot.

        

Closed systems have an advantage in that aseptic processing is possible within a background of a lower-classified environment, for example, Grade C environment. Precautions must be taken to ensure that the integrity of the closed system does not become compromised after the sterilization of product-contact surfaces is achieved. Appropriate system-integrity tests should be considered when there is a risk of compromising the integrity due to transportation, sterilization, assembly, or usage. To prevent any contamination of the interior of the sterile closed system by an ingress from the environment, closed connectors/disconnectors (e.g., rapid transfer ports (RTP)) and continuous controlled overpressure should be considered.

        

The APS in a closed system should simulate process flow and aseptic filling into sterile containers, either by using closed connectors (e.g., single-use system (SUS)) or by direct connections, when the containers are sterilized together with the closed system. Instead of product, a solution tryptic soy broth (TSB) is filled and later incubated within the containers.

        

The term "closed system" does not apply to RABS or isolators.

        

**Note:** Closed systems are also addressed in Section 1.4.1 of TR 28; however, that section of TR 28 should be considered different from Section 3.4.4 in this technical report, because no aseptic filling of bulk pharmaceutical chemicals from closed systems into connected containers is intended in TR 28. Consequently, rinsing the closed system with a sterile placebo liquid to demonstrate the interior sterility of the closed system (as described in TR 28) is not sufficient. The contamination risk of aseptic filling into connected containers within a lower-classified environment than Grade A is much higher than operating a closed and well-controlled, integrity-tested sterile bulk pharmaceutical chemical system.

    

    

        

### Tutorial Commentary

        

            

#### 核心概念解析 Key Concepts

            

**Closed System (封閉系統)：**通過物理隔離和微生物完整性維護來防止產品暴露於環境中。其優勢是可在較低級別環境（如 Grade C）中進行無菌操作。但注意：**封閉系統 ≠ RABS 或隔離器**。

            

**TR22 vs TR28 的區別：**TR28 中的封閉系統指的是無菌原料藥的封閉處理（用無菌安慰劑沖洗即可證明內部無菌）。TR22 中的封閉系統涉及從封閉系統向容器進行無菌充填，污染風險更高，因此 TR28 的方法不夠充分。

        

        

            

#### 比喻說明 Analogy

            

封閉系統就像城市的自來水管網：水從水廠（滅菌後）到你家水龍頭（充填），整個過程都在密封管路中。只要管路完整（integrity tested）、接頭安全（RTP），就算管路經過地下（Grade C 環境）也不會被污染。但如果你要從水龍頭倒水到杯子裡（充填到容器），這個「開口」瞬間就需要額外保護。

        

        

            

#### 重點提示 Key Notes

            

**封閉系統 APS 的關鍵要素：**

            

                
- 模擬製程流程和無菌充填到容器中

                
- 使用 TSB 替代產品進行充填和培養

                
- 系統完整性測試必須在有風險的時間點進行（運輸後、滅菌後、組裝後）

                
- 使用正壓控制防止環境侵入

                
- 所有無菌連接（如 RTP）必須在 APS 中模擬

            

        

        

            

#### 練習思考 Practice Questions

            

                
1. 為什麼 TR28 中的封閉系統沖洗方法對 TR22 來說不夠充分？兩者的風險差異是什麼？

                
2. 封閉系統可以在 Grade C 環境中進行無菌操作，但需要哪些保障措施？

            

        

    

## 4.3.5 Single-Use Systems Technologies

    

        

### Original Text

        

SUS technologies are being used more commonly within the industry because, depending on the type of technology and its application, they may offer several advantages, such as a reduced need for aseptic manipulations, sterilization of components, and prevention of product cross-contamination. SUS are typically integrity-tested and sterilized prior to use; however, the APS can be a useful exercise to demonstrate the suitability of the entire system, including the aseptic connections to one or multiple SUS systems utilized in the process.

        

The same SUS should be used for the APS as those for the aseptic filling, except where a different system (e.g., a smaller size, different filter, etc.) is assessed and accepted through risk assessment.

    

    

        

### Tutorial Commentary

        

            

#### 核心概念解析 Key Concepts

            

**Single-Use Systems (一次性使用系統)：**SUS 在業界日益普遍，因為它們減少了無菌操作需求、免除了 CIP/SIP 步驟、並防止交叉污染。APS 中應使用與生產相同的 SUS，重點模擬所有無菌連接操作。

        

        

            

#### 重點提示 Key Notes

            

**APS 使用相同 SUS：**除非經過風險評估確認替代品（如更小尺寸或不同濾器）可接受，否則 APS 必須使用與生產相同的 SUS 組件。這確保模擬的真實性。

        

    

## 4.3.6 Pre-Use Post-Sterilization Integrity Test Assembly

    

        

### Original Text

        

The objective of the APS is not to validate PUPSIT, as this is addressed within the filter Bacterial Challenge validation (refer to PDA's Technical Report No. 26 (Revised 2025)). All aspects of the PUPSIT procedure occurring within the aseptic process downstream of the sterile filter connection (e.g., aseptic connections, valve manipulations, integrity test conditions) shall be performed as part of the APS (refer to PDA's Points to Consider for Implementation of Pre-Use Post-Sterilization Integrity Testing (2020)).

        

Processes involving materials that come into contact with product contact surfaces but are then discarded (e.g., product flushes) and should be simulated with nutrient media and incubated as part of the APS. This requirement may be waived only if it is clearly demonstrated that the waste process does not impact product sterility.

    

    

        

### Tutorial Commentary

        

            

#### 核心概念解析 Key Concepts

            

**PUPSIT in APS (使用前滅菌後完整性測試)：**APS 的目的不是驗證 PUPSIT 本身（那是 TR26 的範疇），而是模擬 PUPSIT 操作過程中發生在無菌過濾器下游的所有無菌操作（連接、閥門操作、測試條件等）。

        

        

            

#### 重點提示 Key Notes

            

**廢液也需培養：**接觸產品接觸面但被丟棄的物料（如產品沖洗液）也必須用培養基模擬並培養。只有在能明確證明廢棄流程不影響產品無菌性的情況下，才可免除此要求。這是容易被忽略的合規重點。

        

        

            

#### 比喻說明 Analogy

            

PUPSIT 和 APS 的關係就像「出門前檢查瓦斯」和「消防演習」的區別：PUPSIT 是確認過濾器本身沒問題（瓦斯沒漏），而 APS 是確認執行 PUPSIT 時的所有操作（開關閥門、連接管路）不會引入污染（消防演習中測試所有逃生路線）。

        

        

            

#### 練習思考 Practice Questions

            

                
1. APS 不驗證 PUPSIT 本身，那它模擬 PUPSIT 的哪些方面？

                
2. 為什麼 APS 中的產品沖洗液也需要用培養基替代並培養？

            

        

    

## 4.3.7 Considerations for Advanced Therapy Medicinal Products

    

        

### Original Text

        

Considerations for the design and execution of an APS for manufacturing processes that employ manual operations are provided within this section. Different types of products are manufactured utilizing manual aseptic operations including many of those defined and regulated as advanced therapy medicinal products (ATMPs) which is a broad class of therapies inclusive of somatic cell therapies, gene therapies, and tissue-engineered medicinal products. While the considerations for manual operations discussed within this section are focused to ATMPs, these may also be applied to other product types that utilize manual aseptic processing. In addition, recommended practices for manual aseptic processes are detailed in TR 62.

        

Many ATMPs cannot be terminally sterilized (e.g., autologous cellular-based therapies) thus requiring aseptic processing at many steps (unit operations) of the overall manufacturing process. Additionally, these products may be produced in low batch volumes to meet specific patient needs with limitations in the application of closed, automated manufacturing systems, and thus these manufacturing processes are designed with multiple manual aseptic operations.

        

Production of ATMPs is at a minimum done in a BSC (Grade A environment surrounded by a Grade B environment), although preferentially in a barrier system (RABS or Isolator). A risk-based design of the facility, manufacturing process, and their qualification is crucial for ensuring the final quality of the products and the safety of the operators while handling these products.

        

APS is an essential element of validation of the aseptic processes in this case. The design of simulation criteria should be based on the risk assessment done on the entire process. Key considerations for designing simulation studies:

        

            
- The APS shall be designed to resemble, as closely as possible, the routine manufacturing process associated with open-processing steps. Extended closed-processing activities, such as incubation, do not need to be simulated for the duration of the activities, provided there is no manipulation of the closed containers. All transfer steps must be included in the APS design.

            
- Where open product-handling is involved, the APS should simulate the entire process and should include all the interventions performed by the operators.

            
- Where closed systems are used, the APS must focus on the aseptic connections and system integrity.

            
- If there are requirements for addition and/or withdrawal of materials from the system, such processes shall be covered as a part of APS.

            
- A risk-based approach should be used to determine the need for operator participation in certain aseptic interventions during the APS. Appropriate aseptic-intervention training may qualify operators for multiple aseptic interventions during production, if they have been bracketed as similar interventions.

            
- Simulation with anaerobic conditions is not systematically required, as most cell and gene therapies are manufactured entirely in the presence of atmospheric oxygen.

            
- In the case of a multiproduct facility, if a bracketing approach is used for APS, strategies like risk-based worst-case challenge combining the common processing steps or intervention types, could be adopted.

            
- Placebo/growth promoting media should contact all sterile surfaces of materials and equipment used during the manufacturing process. The incubation of intermediate containers (e.g., bioreactor bags) may be necessary if the APS is divided into sections to simulate the entire process.

            
- Where there are different manufacturing steps involved for different products, a risk-based approach should be applied in the design of the matrix for APS to ensure coverage of all relevant practices.

            
- The number, size, and type of containers to be used in the APS need to be considered during the APS design process, and adequate incubation space needs to be planned to meet these needs.

        

        

**Compounding Operations:** Where the final product has no sterilization step for the compounded bulk before filling, the simulation study should include the compounding operations involving aseptic addition of the sterile input materials using sterile media and/or placebo.

        

**Filling Operations:** The risk involved in the filling operation is directly proportionate to the number of operator interventions involved in the process and design (open or closed line). Hence, in the case of manual filling operations, the APS should be more thorough to cover all the operations of an actual product and should be performed for a duration similar to the actual production process. Specifically, it is not unusual for ATMPs to be manually filled or pipetted into the final product unit (vial) by the manufacturing operator. In such cases where the operator serves as the "filling machine," the operator must be initially qualified to perform this activity following the requirements for qualification (at least three times for initial qualification) and requalification of manual filling (two times per year). These requirements should be isolated from the filling process and should not require that all upstream inoculation or expansion activities have the same requirements applied.

        

For very small batches, it may be necessary to fill more APS units than is normally done for manufacturing in order to ensure there are sufficient units for growth promotion post-incubation.

        

During execution of the APS, each operator working at a BSC must perform simulated aseptic manipulations; however, the APS may be performed in one or more representative BSCs as determined by a risk assessment.

        

A case study for the design of an APS for an ATMP (autologous gene-modified cellular therapy such as a CAR-T product) is provided in Example 8.

    

    

        

### Tutorial Commentary

        

            

#### 核心概念解析 Key Concepts

            

**ATMP Manual Operations APS (ATMP 手動操作 APS)：**這是 TR22 最具前瞻性的內容之一。ATMP（如 CAR-T 療法）的製造特點：

            

                
- 無法最終滅菌 — 活細胞不耐受

                
- 小批量、患者專屬 — 可能每批只有 1-3 瓶

                
- 大量手動操作 — 操作員就是「充填機」

                
- 在 BSC 中進行 — 空間受限

            

            

**Operator Qualification (操作員資格認定)：**手動充填的操作員必須初次通過至少 3 次 APS 資格認定，之後每年 2 次再認定。這比自動化充填線的人員要求更嚴格。

        

        

            

#### 比喻說明 Analogy

            

ATMP 操作員就像外科醫生：每位醫生必須獨立完成足夠次數的手術模擬（至少 3 次初始認定），才能獨立執刀。之後每年還需要定期考核（每年 2 次再認定）。因為在這個情境下，操作員的雙手就是「手術刀」（充填設備），無菌技術完全取決於個人。

        

        

            

#### 重點提示 Key Notes

            

**ATMP APS 設計要點速查：**

            
                
| 考量項目 | 要求 |
| --- | --- |
                
| 開放步驟 | 完全模擬，包含所有操作員干預 |
                
| 封閉步驟 | 不需模擬持續時間，但需模擬無菌連接 |
                
| 操作員資格 | 初始 ≥ 3 次 APS，再認定每年 2 次 |
                
| 厭氧條件 | 通常不需要（大多數在好氧條件下製造） |
                
| 多產品設施 | 可使用 bracketing（分組）策略 |
                
| 培養空間 | 需提前規劃（可能有大體積中間容器） |
                
| 小批量 | 可能需充填比生產更多的 APS 單位 |
            

            

**Bracketing 策略：**多產品設施中，如果不同產品的手動操作類似，可以將類似操作分組，用最具挑戰性的操作來代表整組，減少 APS 次數但確保涵蓋所有風險。

        

        

            

#### 實務應用 Practical Application

            

某醫院附設細胞治療實驗室同時生產 CAR-T（自體基因修飾細胞治療）和幹細胞治療產品。兩者都在 BSC 中手動操作，共用同一間 Grade B 背景環境的無菌室。

            

**APS 策略建議：**

            

                
- 識別兩個產品的共同手動操作步驟（如無菌管路連接、手動移液）

                
- 選擇操作步驟最多、最複雜的產品作為 worst-case APS

                
- 每位操作員在代表性 BSC 中完成 APS 資格認定

                
- APS 包含同室最大人員密度的模擬

                
- 中間容器（如生物反應器袋）也需培養

            

        

        

            

#### 練習思考 Practice Questions

            

                
1. 為什麼 ATMP 手動充填操作員的初始資格認定要求至少 3 次 APS？這比自動化充填的要求更嚴格嗎？

                
2. ATMP 的小批量製造可能需要充填比實際生產更多的 APS 單位，原因是什麼？

                
3. 在多產品 ATMP 設施中使用 bracketing 策略設計 APS 時，需要注意哪些風險？

            

        

    

    

### 本節重點回顧 Section Summary

    

        
- **凍乾 APS（4.2.2）：**需模擬充填、部分加塞、轉移、裝載、真空、駐留、完全加塞和卸載等步驟。真空壓力必須維持在 100-200 mbar 以避免培養基沸騰。除非已確認存在嚴格厭氧菌，否則使用好氧條件（SCDM + 空氣破真空）。

        
- **懸浮液 APS（4.2.3）：**必須模擬無菌組分的添加操作。原則上採用端到端模擬；分段模擬需有書面理由和風險評估支持。

        
- **半固體 APS（4.2.4）：**可能需要增加培養基黏度以配合設備操作；不透明容器需使用透明替代容器或培養後無菌轉移至透明容器檢查。

        
- **粉劑 APS（4.2.5）：**五種方法各有優缺點，核心挑戰是結合液體培養基和粉末充填。方法 5（乾燥培養基充填後加水復原）不推薦。安慰劑粉末不得抑制微生物生長，檢查人員需經專門訓練。

        
- **其他劑型（4.2.6）：**最終滅菌產品通常不需 APS；組合產品可能需多個 APS；ATMP 重點在手動操作和開放步驟的模擬。

        
- **設備技術 APS（4.3）：**技術越先進（RABS → 隔離器 → 封閉系統），APS 設計彈性越大，但基本原則不變。隔離器建議至少 10,000 瓶、可穿插空瓶、Piggyback APS 不能獨立使用。封閉系統的 APS 比 TR28 要求更嚴格。SUS 應使用與生產相同的組件。

        
- **ATMP APS（4.3.7）：**操作員即「充填機」，初始資格認定 ≥ 3 次 APS，每年再認定 2 次。封閉步驟可省略時長但須模擬連接操作。小批量可能需充填超過實際生產量的 APS 單位。

    

⇧

## Section 3: Documentation & EM 文件與環境監控 (p38-p43)

# Section 5.0-6.0: APS Documentation & Environmental Monitoring

    

無菌製程模擬文件管理與環境監控

    

PDA Technical Report No. 22 (Revised 2025) | p38 - p43

    

### 本章學習目標

    

        
- 了解 APS 文件系統的完整架構，包括程序書、批次記錄、最終報告等各層級文件的功能與要求

        
- 掌握 APS 協議書 (Protocol) 應涵蓋的關鍵要素與審核流程

        
- 理解 APS 觀察 (Observation) 與錄影 (Video Recording) 在確保模擬品質中的角色

        
- 認識 Environmental Monitoring (EM) 在 APS 期間的執行原則及結果判讀邏輯

    

    

### 本節內容導覽

    

        5.0 APS Documentation
        5.1 Process Definition
        5.2 Protocol & Procedure
        5.3 Execution Record
        5.4 Final Report
        5.5 Observation
        5.5.1 Video Recording
        6.0 Environmental Monitoring
    

## 5.0 Aseptic Process Simulation Documentation

    

        

## Original Text

        

Documentation is an important element of an APS program, since it serves as a record of the simulation's rationale and performance. Subsequently, this record can be of assistance in sterility-failure investigations as well as for review of the adequacy of the simulation by regulatory bodies (17).

        

Documentation provides instructions for performance of the study, criteria for acceptance of the study, historical references, study results, and proof that the studies were conducted. The documentation should be reviewed and approved by the Quality Unit and include such items as procedures, batch instructions, risk assessments, EM results, unit acceptance and rejection criteria, incubation conditions, protocol deviation investigations, final report, acceptance criteria, and positive unit investigations that are reviewed and approved by the Quality Unit.

        

An overall APS policy or procedure presents the requirements for scheduling, conducting, and documenting APS studies. This will include the rationale for worst-case container and line configuration (as applicable), intervention and process-step inclusion, and reevaluation frequency. A master plan may also be developed to present the requirements and rationale for conducting APS studies for a specific product, facility, or manufacturing line.

    

    

        

## Tutorial Commentary

        

            

#### 核心概念解析 Key Concepts

            

**APS Documentation (APS 文件管理)：**APS 不只是「做一次充填模擬」，它需要一套完整的文件體系來支撐。文件系統的目的有三：

            

                
- **指導執行：**提供明確的操作指引，確保每次 APS 都按照相同標準執行

                
- **記錄證據：**留下可追溯的執行記錄，作為驗證完成的證明

                
- **支援調查：**當發生無菌失敗時，文件是回溯分析的重要依據

            

            

**Quality Unit (品質單位)：**所有 APS 文件必須經品質單位審核與核准，這是 GMP 的基本要求。品質單位需確認 APS 設計合理、執行合規、結果可接受。

        

        

            

#### 比喻說明 Analogy

            

APS 文件體系就像一場**法庭審判的完整記錄**：你需要有「起訴書」(Protocol/協議書) 說明為什麼要做、怎麼做；需要有「庭審紀錄」(Batch Record/批次紀錄) 詳細記下每個步驟；最後還要有「判決書」(Final Report/最終報告) 做出結論。如果未來案件被「上訴」(法規審查)，這些文件就是你能提出的全部證據。

        

        

            

#### 重點提示 Key Notes

            

TR22 特別強調 APS 文件需包含 **Master Plan (總體計畫)**，這在許多公司容易被忽略。Master Plan 不是單次 APS 的文件，而是針對整個廠區或產品線的 APS 策略全覽，涵蓋：

            

                
- 所有需要執行 APS 的產線清單

                
- 各產線的 worst-case 配置邏輯

                
- 執行頻率與輪替策略的理由

                
- 與 Contamination Control Strategy (CCS) 的銜接

            

        

    

## 5.1 Process Definition

    

        

## Original Text

        

The processes, steps, activities, and conditions of the production process to be evaluated during the APS should be defined and documented. These are defined as any and all manufacturing steps that occur after product, equipment, and container-closure sterilization and which can adversely affect the sterility assurance of the product. In some cases, this may include process or handling steps subsequent to the sealing of the container (e.g., leak detection, automated inspection) where damage from handling can adversely affect product container integrity.

        

Processes may include (but are not limited to) the post-sterilization handling of drug product, transfer and holding of sterile drug product, transfer and handling of sterilized container and closure, loading and removal of product from a lyophilizer, filling of product to the point the drug product is sealed and capped, and any subsequent inspection or handling steps that may affect sterility assurance of the product.

    

    

        

## Tutorial Commentary

        

            

#### 核心概念解析 Key Concepts

            

**Process Definition (製程定義)：**這是 APS 設計的第一步 -- 你必須先清楚定義「哪些製程步驟需要被模擬」。關鍵判斷原則是：**滅菌之後、密封之前**所有可能影響無菌保證 (Sterility Assurance) 的步驟都應被納入。

            

值得注意的是，TR22 擴展了傳統的範圍認知：即便容器已密封，如果後續的處理（如洩漏檢測、自動化檢查）可能損傷容器完整性，這些步驟也應被考慮。

        

        

            

#### 重點提示 Key Notes

            

許多公司在定義 APS 範圍時容易遺漏的步驟包括：

            

                
- 凍乾機 (Lyophilizer) 的裝載與卸載 -- 這是一個高風險的無菌操作

                
- 無菌藥液的轉移與暫存 -- 管路連接和保存期間都有污染風險

                
- 密封後的檢查步驟 -- 如果搬運不當可能破壞密封完整性

            

            

完整的 Process Definition 文件應該結合製程流程圖 (Process Flow Diagram)，標註每個步驟的風險等級。

        

    

## 5.2 Protocol and Procedure Preparation

    

        

## Original Text

        

A formal written protocol, procedure(s), and/or batch instruction(s) describing the activities and conditions for the APS must be prepared, approved, and issued prior to the start of the study. The document must be identified for traceability and approved prior to execution by Quality Unit representatives. Other stakeholders may review and approve the document at the discretion of the company. The document should include, but not be limited to, the following information:

        

            
- Groups responsible for execution, microbial testing, and approval of the study

            
- Rationale for the worst-case parameters chosen as appropriate simulation of routine operations

            
- Identification of the process to be simulated

            
- Identification of the room or rooms to be used

            
- Identification of the filling line and equipment to be used, including fluid-path configuration details if multiple configurations are available

            
- Type of container-closure to be used

            
- Line speed(s)

            
- Minimum number of units to be filled

            
- Number and type of interventions and stoppages

            
- Identification of units to be excluded from incubation and rationale

            
- Number, identity, and specific roles of people participating

            
- Media to be used

            
- Volume of medium to be filled into the containers

            
- Incubation time, temperature, and duration for the filled units

            
- EM to be performed

            
- Copy of the batch record to be used

            
- Accountability requirements

            
- Acceptance criteria for all activities

            
- Description of the documentation required for the final report

            
- Duration of the APS

            
- Directions on when an APS can be aborted or deemed invalid

            
- Duration of routine production fills being simulated

            
- Definition of conditions that may cause the simulations to be invalidated and decision-making authority

            
- Any differences between the production process and the process performed during the simulation, which may include any changes or modification to the production process or equipment required to perform the APS and the reason for the change (e.g., the replacement of an inert gas with air)

            
- Parameters (in the case of lyophilized products) that will be used for the simulation, including vacuum, process temperature, and dwell time

        

        

Other factors may need to be considered due to the nature of the process to be simulated. The protocol should require that, prior to execution of the APS study, critical support-system qualifications and process validations have been verified to be successfully completed and approved. The protocol should include or reference risk assessments used to support the design, performance, and evaluation of the APS.

    

    

        

## Tutorial Commentary

        

            

#### 核心概念解析 Key Concepts

            

**APS Protocol (APS 協議書)：**這是整個 APS 研究的「藍圖」。它必須在研究開始前經品質單位核准，並且具備可追溯性。TR22 列出了超過 20 項應包含的內容，顯示這份文件的重要性與複雜度。

            

協議書的核心精神是：**在動手之前，先把所有的「為什麼」和「怎麼做」都想清楚並記錄下來。**

        

        

            

#### 比喻說明 Analogy

            

APS 協議書就像建築的**施工藍圖**：蓋房子之前，你不會說「開始蓋了再看著辦」。你需要先畫好圖紙，標明用什麼材料 (培養基)、多大面積 (充填數量)、哪些工人參與 (操作人員)、怎麼檢查品質 (接受標準)。藍圖必須先過「建管處審核」(品質單位核准) 才能開工。

        

        

            

#### 重點提示 Key Notes

            

協議書中有幾項特別容易被忽略但非常重要的要素：

            

                
- **Worst-case rationale (最差條件理由)：**不能只列出條件，必須說明「為什麼這是最差條件」

                
- **Differences from production (與生產的差異)：**APS 與實際生產有任何不同之處都必須載明並說明理由，例如以空氣取代惰性氣體

                
- **Invalidation criteria (判定無效的條件)：**必須事先定義在什麼情況下可以宣告 APS 無效，避免事後「量身訂做」規則

                
- **Pre-requisites (前提條件)：**關鍵支援系統的確認 (qualification) 和製程驗證必須在 APS 執行前完成

            

        

        

            

#### 實務應用 Practical Application

            

在 CDMO 營運中，不同客戶產品可能使用同一條充填線。一份好的 APS Protocol 需要考慮：

            

                
- 是否可以用 bracketing approach 來涵蓋不同容器規格？

                
- 不同產品的充填速度差異是否需要分別模擬？

                
- 客戶的特殊要求 (如特定介入操作) 是否已被納入？

            

            

妥善設計協議書可以減少重複執行 APS 的次數，節省數十萬元的驗證成本。

        

    

## 5.3 Aseptic Process Simulation Execution Record

    

        

## Original Text

        

Execution of the protocol may be performed through the instructions noted in a batch record. The batch record gives detailed instructions on how to perform the APS. It should be written in the same format as a normal production batch record and contain all the routine data and sign-off requirements. All information applicable to the APS that would normally be attached to a batch record should also be attached to the simulation batch record, for example, cleaning and sterilization records for pieces of equipment used and release stickers for the containers and closures.

        

All interventions, whether inherent (an integral component of the process) or corrective (required to maintain operation), and stoppages should be documented in the batch record as to the type of intervention, time the intervention occurred, aseptic operators involved, duration of the intervention or stoppage, and the number of the box or tray being filled.

        

The batch record should include information relevant to the performance and completion of the study. The protocol and report should be properly filled out following appropriate good manufacturing practice (GMP) documentation practices. This record should include, but is not limited to:

        

            
- Names of individuals participating in the simulation

            
- Number of units filled

            
- Number of units incubated

            
- Filled-unit incubation time, temperature, and duration

            
- Number of positive units and box or tray number of any positive unit(s)

            
- Number of units rejected for cause during pre-incubation inspection (e.g., damaged container, defective seal)

            
- Growth promotion of medium (after incubation), see Section 7.17

            
- Filled-unit accountability

            
- Media sterilization method

            
- Filter identification and membrane integrity-test results

            
- Environmental and personnel monitoring results

            
- Record or log of all inherent and corrective interventions/occurrences which may influence the outcome of the study with the time, duration and other details as available (including personnel in the filling room)

            
- Observation logs, records, and video recordings (if applicable)

            
- Description and resolution of any discrepancies or deviations to the protocol

            
- Executed batch record reviewed, signed, and dated per GMP requirements for batch production records

        

    

    

        

## Tutorial Commentary

        

            

#### 核心概念解析 Key Concepts

            

**APS Batch Record (APS 批次紀錄)：**這是 APS 執行時的「即時戰場日誌」，記錄所有實際發生的事情。關鍵要求：

            

                
- 格式必須與正式生產批次紀錄相同 -- 因為 APS 的目的就是模擬真實生產

                
- 所有附件（清潔記錄、滅菌記錄、放行標籤）都必須附上

                
- 必須遵循 Good Documentation Practice (GDocP，良好文件管理規範)

            

        

        

            

#### 重點提示 Key Notes

            

**Intervention 記錄是調查成敗的關鍵。**每一個介入操作都必須詳細記載：

            

                
- **類型** -- 是 Inherent (固有介入，如設備組裝) 或 Corrective (矯正介入，如更換零件)？

                
- **時間** -- 精確到分鐘，何時發生？

                
- **人員** -- 誰執行了這個介入？

                
- **持續時間** -- 開放時間有多長？

                
- **位置** -- 當時充填到第幾箱/第幾盤？

            

            

這些資訊在 APS 失敗調查時是不可或缺的：可以將陽性單位與特定介入操作進行時間比對，縮小根本原因的搜尋範圍。

        

        

            

#### 比喻說明 Analogy

            

APS 批次紀錄就像飛機的**黑盒子 (Flight Data Recorder)**：在正常情況下它只是一份記錄，但當「事故」(APS 失敗) 發生時，這些詳細的時間戳、操作記錄、人員資訊就成為還原事故現場的唯一依據。記錄越完整，調查就越有方向。

        

        

            

#### 練習思考 Practice Questions

            

                
1. 為什麼 APS 批次紀錄要求「與正式生產批次紀錄格式相同」？如果格式不同，會有什麼風險？

                
2. 一個 Corrective Intervention 發生在充填第 5,000 瓶時，但最終第 4,800-5,200 瓶中有一瓶陽性。你會如何利用批次紀錄中的資訊來進行調查？

                
3. 為什麼需要記錄「充填室內的所有人員」，而不只是直接操作的人員？

            

        

    

## 5.4 Final Report

    

        

## Original Text

        

The final report is an evaluation of the data from the batch record and environmental-control records. Based on this information, a conclusion is formulated regarding the acceptability of the APS as an adequate simulation of the manufacturing process.

        

The final report should note the results of the study, whether the study met the acceptance criteria, the resolution of discrepancies or deviations to the protocol, the conclusion of the study (e.g., success of study), and any follow-up actions (see Section 9.0).

        

Any APS run presenting one or more contaminated units should be investigated as positive and all efforts should be made to determine the root cause. This investigation and cause should be documented (see Section 11.0). Any aborted or discontinued APSs conducted for that line or conducted during the overall APS study should be clearly justified (see Section 9.3).

        

            "Note: Contaminated units that are not integral should be carefully investigated and appropriately documented to justify the determination of the root cause of the integrity failure. If the root cause is determined not to be related to the routine process, it may not necessarily indicate a failure."
        

        

The final report and completed documents should be approved by representatives of the Quality Unit. The protocol, batch record, final report, investigations, and all relevant support documentation should be retained in accordance with the firm's policies and regulatory requirements.

    

    

        

## Tutorial Commentary

        

            

#### 核心概念解析 Key Concepts

            

**Final Report (最終報告)：**這是 APS 文件體系的「總結論文」，整合批次紀錄與環境監控資料，做出「通過/失敗」的最終判定。其核心內容包含：

            

                
- 研究結果的彙整

                
- 是否符合接受標準的判定

                
- 所有偏差或異常的處理結論

                
- 後續行動事項

            

        

        

            

#### 重點提示 Key Notes

            

TR22 在此處提出一個重要的細微差別：**非完整容器 (non-integral units) 中的污染不一定代表 APS 失敗。**

            

舉例：如果一瓶培養基出現混濁，但該瓶的瓶蓋有明顯缺陷（密封不良），且調查確認此缺陷與日常製程無關（例如是 APS 特有的操作造成），則可以判定這不是無菌製程的失敗。

            

但這個判定**必須有充分的調查證據支持**，不能隨意排除陽性結果。

        

        

            

#### 實務應用 Practical Application

            

在 CDMO 環境中，APS Final Report 通常是客戶審計和法規查廠的重點檢查對象。一份高品質的 Final Report 應該：

            

                
- 能讓審計員在 30 分鐘內了解 APS 的全貌

                
- 所有數據都有明確的來源和追溯路徑

                
- 偏差處理有邏輯嚴謹的調查結論

                
- 與 CCS 的整體策略保持一致

            

        

    

## 5.5 Aseptic Process Simulation Observation

    

        

## Original Text

        

The APS should be observed to ensure that all planned activities are properly executed and represent an appropriate challenge to process capability. Observations may also be used to augment training for aseptic practices and can be a valuable tool during the investigation of an APS failure. Observation should commence upon initiation of the APS, including equipment setup (and loading for isolators), and continue until the entire aseptic process has been completed (see Section 4.1.1).

        

Observation of the simulation should be performed by individuals who have the knowledge and competence to assess whether participants have used proper aseptic practices, executed activities according to procedures (e.g., SOPs, batch records and protocols), and assured that aseptic interventions have been executed properly. These assessments should be documented to provide confirmation that all activities were carried out as they would be during routine production. Any observed deviation should be routed through the deviation management system.

        

There are several ways in which observations can take place during an APS:

        

            
- Observations may take place inside the cleanroom area as long as the person observing does not interfere with the process or the operator performing any activities, interventions, or documentation and does not provide guidance to the operator.

            
- Observations may take place from a window that provides unobstructed views of the filling line and aseptic process, thus reducing the number of personnel in the cleanroom area.

            
- Observations may be performed using a live video feed from cleanroom-compatible cameras that are strategically placed inside the cleanroom, as long as they provide clear, continuous, and unobstructed view of the aseptic activities.

            
- Any combination of these methods can be used for observation at different times throughout the simulation provided that the entire process is observed. Regardless of the method used to make the observations, all APS observations should be well documented. Note that this observation should not interfere with the APS procedure itself or add unnecessary risk of contamination to the process.

        

    

    

        

## Tutorial Commentary

        

            

#### 核心概念解析 Key Concepts

            

**APS Observation (APS 觀察)：**APS 不是「做完就好」，必須有合格的觀察員全程監看。觀察的三重目的：

            

                
- **確認合規：**所有計畫中的活動是否正確執行？

                
- **訓練價值：**觀察紀錄可用於加強無菌操作訓練

                
- **調查支援：**如果 APS 失敗，觀察紀錄是重建事件的關鍵

            

            

觀察員必須具備**無菌操作專業知識**，能判斷操作是否符合 SOP、批次紀錄和協議書的要求。

        

        

            

#### 比喻說明 Analogy

            

APS 觀察員就像足球比賽的**VAR (Video Assistant Referee，影像輔助裁判)**：他們不參與比賽（不干預製程），但全程監看每個動作，確保規則被遵守。如果出了問題，他們的紀錄就是「回放判定」的依據。關鍵是：觀察員**不能指導操作員**，就像 VAR 不能告訴球員怎麼踢球。

        

        

            

#### 重點提示 Key Notes

            

三種觀察方式各有優缺點：

            
                
| 觀察方式 | 優點 | 注意事項 |
| --- | --- | --- |
                
| 潔淨室內觀察 | 最直接、能觀察細節 | 增加室內人員數、不可干擾操作 |
                
| 觀景窗觀察 | 不增加室內人數 | 視角可能受限、無法觀察所有區域 |
                
| 攝影機即時監看 | 多角度、可回放 | 需確保畫面清晰且不中斷 |
            

            

最佳做法是**組合使用**多種方式，確保全程無死角覆蓋。

        

    

## 5.5.1 Video Recording of Aseptic Process Simulations

    

        

## Original Text

        

Video recording of the APS is recommended, although it is not currently an U.S. Food and Drug Administration (FDA) or European Medicines Agency (EMA) regulatory requirement. The decision to record an APS should align with a manufacturer's internal procedures, policies, and privacy restrictions and must include a description of the method, intended use, and retention parameters for the recording. The quality of the viewing angles, fidelity of the recording, and accuracy of date and time stamps must be evaluated to ensure they provide the best opportunity for effective evaluation.

        

Internal policies may differ from company to company or from country to country, so it is important to comply with all local laws when recording personnel operations.

        

The use of video recording during an APS has several advantages:

        

            
- The process-simulation activity can be reviewed in detail after the simulation is complete to determine if lapses in technique or practice occurred. The recording should be reviewed to ensure compliance with procedures and aseptic techniques, regardless of the outcome of the APS.

            
- During an investigation of a process simulation failure, information from the recording can help determine or eliminate potential causes of contamination.

            
- The recording can be used to determine the potential for process improvements and incorporation of new or improved interventions and to assist with aseptic training programs.

            
- The use of cameras can be beneficial as it allows for less-restricted viewing. The implementation of cameras to avoid risk of contamination.

        

        

If used, video recording should be combined with people performing real-time observations. If used as part of an investigation, the applicable sections of the video recording should be retained just as any other GMP documentation.

        

Each manufacturer should have a procedure that defines the purpose of the video recording, how it is to be used, and its retention period. Artificial intelligence (machine learning/deep learning) may also be used to analyze, detect, and classify interventions, and then to indicate whether or not the intervention was performed correctly.

    

    

        

## Tutorial Commentary

        

            

#### 核心概念解析 Key Concepts

            

**Video Recording (錄影)：**TR22 明確表示錄影「推薦但非法規強制要求」。然而，這是一個日益成為行業最佳實踐 (Best Practice) 的做法。

            

**AI 應用於 APS：**TR22 (2025版) 首次提及利用人工智慧 (AI) / 機器學習 (Machine Learning) 來分析錄影內容，自動偵測和分類介入操作，並判斷操作是否正確。這反映了製藥業正在積極擁抱數位化轉型。

        

        

            

#### 重點提示 Key Notes

            

導入 APS 錄影時必須注意的事項：

            

                
- **隱私合規：**各國對工作場所錄影有不同法規要求，特別是歐盟 GDPR 下可能需要員工同意

                
- **GMP 文件管理：**如果錄影被用於調查，該段影片必須按照 GMP 文件要求保存和管理

                
- **時間戳準確性：**錄影的時間戳必須與批次紀錄的時間同步，否則在調查時無法進行有效的時間比對

                
- **不能取代人員觀察：**即使有錄影，仍需要有人進行即時觀察

            

        

        

            

#### 比喻說明 Analogy

            

APS 錄影就像高速公路上的**行車記錄器 (Dashcam)**：平常你不太會去看它，但一旦發生「事故」(APS 失敗)，它就成了還原真相的最佳證據。而 AI 分析錄影就像「智慧行車記錄器」自動標記出急煞車或異常變換車道 -- 幫助你從數小時的影片中快速定位關鍵事件。

        

        

            

#### 練習思考 Practice Questions

            

                
1. 為什麼 TR22 建議錄影但不將其列為法規強制要求？你認為未來這是否可能變成強制要求？

                
2. AI 自動分析介入操作的技術可以如何幫助改善 APS 品質？你能想到哪些可能的應用場景？

                
3. 如果一家位於歐洲的 CDMO 想要導入 APS 錄影，在 GDPR 合規方面需要考慮什麼？

            

        

    

## 6.0 Environmental Monitoring

    

        

## Original Text

        

Determining and understanding the environmental conditions present during the APS study is very important. A properly defined, controlled, and executed EM program provides increased assurance of sterility by demonstrating that environmental conditions conducive to the production of sterile product are being met over the duration of the aseptic process and that appropriate systems and utilities are functioning as intended. The environmental monitoring program includes appropriately set alert levels and action limits and requires an investigation and a corrective action plan in cases where action limits are exceeded.

        

The elements and processes that define and detail the establishment and maintenance of an effective EM program, including sample-site selection, sampling frequency, alert and action levels, methodology and interpretation of data, can be found in PDA Technical Report No. 13: Fundamentals of an Environmental Monitoring Program.

        

APS should be carried out using the routine EM operating procedures and sampling requirements. This should include the setup period, setup interventions, setup personnel, transfer of EM materials and samples, and performance of EM sampling. Any changes to the routine EM requirements during APS, including additional sampling or change in sampling location, should be justified.

        

The routine monitoring program should be sufficiently robust to support commercial manufacturing and, thus, the APS. If an excursion results from a nonroutine sampling location during an APS, it should be assessed for inclusion as part of the routine EM during production. Performing less sampling than what is routine should be avoided as sampling is a routine intervention, and an APS is expected to be representative of routine manufacturing regarding interventions.

        

The results of the environmental and personnel monitoring are used to assess whether aseptic processing conditions were maintained and suitably simulated during an APS. Additionally, environmental and personnel monitoring results obtained during APS can aid in the identification of root cause if the APS yields any positives (see Section 11.0).

        

            "EM excursion investigations should be completed and approved before approving the APS report. Failure to meet established routine monitoring levels should be addressed according to routine monitoring investigation procedures, and actions should be taken according to those procedures. EM excursions are not an automatic cause to reject the results of an APS; rather, any decision should be based on the investigation results."
        

        

            "'Passing' an APS with EM results that exceed action limits does not mean that the aseptic process may be routinely performed in such an environment and should not be used as justification for doing so. Similarly, passing an APS simulation with EM results significantly below production limits does not establish those lower levels as the new production limits."
        

    

    

        

## Tutorial Commentary

        

            

#### 核心概念解析 Key Concepts

            

**Environmental Monitoring, EM (環境監控)：**EM 是 APS 期間評估無菌製程環境狀態的關鍵工具。它透過空氣微粒計數、浮游菌取樣、落菌計數、表面接觸取樣等方法，證明潔淨環境在整個無菌製程期間維持在可接受的水準。

            

**Alert Level (警示水準) vs Action Limit (行動限度)：**

            

                
- **Alert Level：**早期預警，表示環境有偏離趨勢的跡象，需要加強關注

                
- **Action Limit：**必須立即採取行動的閾值，超過即需調查和矯正

            

        

        

            

#### 比喻說明 Analogy

            

EM 就像手術室的**生命體徵監護儀**：在手術（APS）進行時，它持續監測環境的「健康狀態」。Alert Level 就像心率偏快的提醒 -- 需要關注但不必立即停止手術；Action Limit 就像心律不整的警報 -- 必須立即採取措施。但關鍵是：即使監護儀一度響了警報，只要手術（APS）最終成功完成，不代表以後手術都可以在警報狀態下進行。

        

        

            

#### 重點提示 Key Notes

            

TR22 對 EM 在 APS 中的應用有三個**至關重要**的原則：

            

                
1. **使用常規 EM 程序：**APS 期間的 EM 必須與日常生產完全相同。不可減少取樣（因為取樣本身就是一種 routine intervention），增加取樣則需要有正當理由。

                
2. **EM 偏差不等於 APS 失敗：**EM 超出行動限度不會自動導致 APS 被拒絕，但必須完成調查並在 APS 報告核准前解決。

                
3. **EM 結果不可反向「設定」標準：**
                    

                        
    - APS 通過 + EM 超標 ≠ 日常生產可以在超標環境下進行

                        
    - APS 通過 + EM 特別好 ≠ 需要把日常限度降到更嚴格的水準

                    

                

            

        

        

            

#### 實務應用 Practical Application

            

CDMO 日常營運中常見的 EM 相關困境：

            

                
- **情境 1：**APS 執行中，一個空氣活菌取樣點超出 Action Limit。應繼續執行 APS 還是停止？-- 答案：通常繼續執行，但必須立即啟動調查，且在 APS 報告核准前完成調查。

                
- **情境 2：**客戶審計時質疑「為什麼 APS 通過但 EM 有超標？」-- 答案：出示完整的調查報告，證明超標原因已查明、矯正措施已到位、且不影響無菌製程的整體控制。

                
- **情境 3：**新客戶要求 APS 期間增加 EM 取樣點。-- 答案：需評估額外取樣對製程的影響，並在協議書中載明理由。

            

        

        

            

#### 練習思考 Practice Questions

            

                
1. 為什麼 TR22 強調「APS 期間的 EM 不可少於日常生產」？如果 EM 取樣是一種介入操作，減少取樣對 APS 模擬的代表性有什麼影響？

                
2. 如果 APS 期間某個非常規取樣點出現超標，TR22 建議應如何處理？為什麼？

                
3. 請解釋為什麼「APS 通過 + EM 特別好」不應被用來設定更嚴格的日常限度。從統計學和實務面各說明一個理由。

            

        

    

    

### 本節重點回顧 Section Summary

    

        
- **文件體系層次：**APS 文件包含 Master Plan (總體計畫)、Protocol (協議書)、Batch Record (批次紀錄)、Final Report (最終報告) 四個層級，每一層都有明確的角色和品質單位審核要求。

        
- **Process Definition 範圍：**APS 必須涵蓋滅菌後到密封前（甚至密封後可能影響完整性的）所有步驟，不可遺漏凍乾裝卸載、藥液轉移等高風險操作。

        
- **Protocol 完整性：**APS 協議書應包含超過 20 項關鍵要素，特別是 worst-case 理由、與生產的差異說明、以及判定無效的預設條件。

        
- **Intervention 記錄：**每個介入操作必須記錄類型、時間、人員、持續時間、位置，這些資訊在失敗調查時至關重要。

        
- **觀察與錄影：**APS 必須全程由具備專業知識的人員觀察；錄影雖非強制但強烈推薦，AI 技術正開始被應用於分析。

        
- **EM 三大原則：**使用常規 EM 程序（不可減少取樣）、EM 偏差不自動等於 APS 失敗（但須完成調查）、EM 結果不可反向設定日常標準。

        
- **決策優先序：**所有文件設計和 EM 判讀都必須以 Sterility Assurance (無菌保證) 為最高優先，不可因商業壓力而妥協文件品質或忽略 EM 偏差。

## Section 4: Elements of APS APS要素 (p44-p57)

# Section 7.0 - 7.4: Elements of Aseptic Process Simulations (Part 1)

    

無菌製程模擬要素（第一部分）

    

PDA Technical Report No. 22 (Revised 2025) | p44 - p53

    

### 本章學習目標

    

        
- 瞭解 APS 設計時須考量的關鍵參數與其對模擬有效性的影響

        
- 掌握設施與充填機台評估的頻率及涵蓋範圍要求

        
- 理解設備組裝 (Equipment Setup) 在 APS 中的重要性及其作為固有干預的角色

        
- 學習培養基選擇原則，包含 SCDM (TSB) 的適用場景及厭氧條件的特殊考量

        
- 認識惰性氣體 (Inert Gassing) 對 APS 培養基微生物回收能力的影響及替代方案

    

    

### 本部分章節導覽

    

        7.0 總論
        7.1 設施與充填機台
        7.2 設備組裝
        7.3 培養基選擇與製備
        7.4 惰性氣體
    

7.0 Elements of Aseptic Process Simulations

    

        

### Original Text

        

This section contains general information to consider when conducting any type of APS. Issues such as operator intervention, fill volumes, line speeds, container sizes, and run duration play a key role in effectively simulating the production process.

        

Careful consideration should be given to each of the parameters discussed in Section 7.1-7.18 for inclusion in the APS study design. Parameter selection and justification should be well documented and approved by the organization's Quality Unit.

    

    

        

### 導師解析 Tutorial Commentary

        

            

#### 核心概念解析 Key Concepts

            

**Elements of APS (APS 要素)：**本章是 TR22 的核心實務章節之一，涵蓋了從 7.1 到 7.18 共計 18 個關鍵參數。每一個參數都直接影響 APS 能否真正反映實際生產條件。

            

TR22 特別強調：參數的選擇與合理性論述（justification）必須有完整的書面文件，並經品質單位（Quality Unit）批准。這意味著 APS 的設計不能「拍腦袋決定」，而是要有系統性的風險評估支撐。

        

        

            

#### 比喻說明 Analogy

            

想像你要為一棟大樓做消防演練。你不能只測試一層樓、一種情境——你需要考慮每層樓的人數、逃生路線、電梯故障情境、特殊區域（如地下室）等。APS 的 18 個要素就像消防演練的檢查清單：每一項都是確保「模擬夠真實」的必要條件。

        

        

            

#### 重點提示 Key Notes

            

本節（Section 4a）涵蓋 7.0 至 7.4，後續 Section 4b 將繼續涵蓋 7.5 以後的要素。兩部分合併後才是完整的 APS 要素全貌。

            

請特別注意：Quality Unit 的批准是法規監管機構（如 FDA、EMA）查核 APS 時的第一個檢查點——沒有 QU 簽核的 APS 設計文件，在稽查時幾乎等同於「未執行」。

        

        

            

#### 練習思考 Practice Questions

            

                
1. 為什麼 TR22 將 APS 要素細分為 18 個參數，而不是僅給出一個通用指導原則？這樣的細分對 CDMO 有什麼實務好處？

                
2. 如果 Quality Unit 未參與 APS 設計的審批，在稽查中可能引發哪些風險？

            

        

    

7.1 Facility and Filling Machine Considerations

    

        

### Original Text

        

APS programs should ensure that each aseptic process that takes place on aseptic-processing equipment, in filling lines or rooms, or any combination thereof are evaluated every six months. Multiple APSs may be needed to address the aseptic processing that takes place on those lines and in those rooms. Where multiple container closure configurations are run on a given filling line, a bracketing or a matrix approach may be considered (see Section 7.5.1.1). The key consideration is that the aseptic filling or manufacturing process is being evaluated, not a specific product.

    

    

        

### 導師解析 Tutorial Commentary

        

            

#### 核心概念解析 Key Concepts

            

**Semi-annual APS (每半年執行 APS)：**這是全球法規的基本要求——每條無菌充填線至少每六個月須執行一次 APS。但請注意，TR22 的用語是「each aseptic process...are evaluated every six months」，意味著如果一條線有多個不同的無菌製程，每個製程都需要被涵蓋。

            

**Bracketing / Matrix Approach (分群/矩陣方法)：**當同一充填線可運行多種容器密封配置時，不一定每種都要獨立做完整 APS。可以透過 bracketing（選最大最小兩端）或 matrix（輪替涵蓋）來合理減少 APS 次數，但這需要風險評估支持。

            

**評估對象是「製程」而非「產品」：**這是一個關鍵觀念。APS 驗證的是無菌充填的操作能力，不是特定藥品的品質。因此同一條線生產的不同產品可以共用 APS 結果，前提是製程條件相似。

        

        

            

#### 比喻說明 Analogy

            

就像餐廳的衛生檢查，稽查員檢查的是「廚房的衛生操作能力」，而不是針對「每一道菜」做獨立檢查。只要你的廚房環境、操作人員、清潔流程都合格，不同菜色都可以在合格的環境中製作。同理，APS 驗證的是你的無菌操作「廚房」，而不是某一支「菜」（藥品）。

        

        

            

#### 重點提示 Key Notes

            

**CDMO 特別注意：**對於 CDMO 而言，一條充填線可能服務多個客戶、多種容器規格。合理運用 bracketing/matrix 策略可以大幅降低 APS 的執行頻率與成本。但這需要：

            

                
- 完整的風險評估文件

                
- 清楚的 worst-case 定義

                
- Quality Unit 的事先批准

            

            

若分群策略設計不當，一次 APS 失敗可能同時影響所有被涵蓋的產品/配置，造成更大的商業衝擊。

        

        

            

#### 實務應用 Practical Application

            

假設你的 CDMO 有一條充填線，可使用 2mL、5mL、10mL、20mL 四種西林瓶。在 bracketing 策略下，你可以選擇 2mL（最小）和 20mL（最大）進行 APS，以涵蓋中間規格。但需確保中間規格的設備變更（如充填針頭、瓶塞規格）不會引入 worst case 未被涵蓋的風險。

        

        

            

#### 練習思考 Practice Questions

            

                
1. 如果一條充填線在六個月內有三次重大設備變更，APS 的執行頻率是否仍然只需每半年一次？為什麼？

                
2. 「評估製程而非產品」的原則下，若某客戶要求其產品有獨立的 APS 結果，CDMO 應如何處理？

            

        

    

7.2 Equipment Setup

    

        

### Original Text

        

The setup for an aseptic process usually entails some manual assembly of the sterilized equipment, including items that directly or indirectly contact product, such as filler parts, closure placement and insertion systems, filter housings, stopper hopper-/bowl, and other assemblies. Because equipment setup activities may require more manipulation of critical surfaces than subsequent processing operations, the steps involved are considered inherent interventions and must be included in the APS.* The allowable adjustment or replacement of these parts during a production run should be considered as a corrective intervention and should also be included in APS runs. Personnel performing setup operations during routine manufacturing operations should perform these inherent and corrective interventions during APS studies.

        

            "*Note: In many aseptic processing facilities, this is the most operator intensive part of the aseptic process. Greater emphasis and observation should be placed on its execution including details of transfer, handling, connection, placement, connection of parts and addition of components."
        

        

Equipment setups, including filler parts that are similar (e.g., filling needles, nozzles, pumps, valves, other spare parts) and involve the same activities or interventions, should not require inclusion in separate APS studies. However, where there are potential differences in the use or condition of these parts, for example, parts from different supplier sources or evidence of differences from process performance records, a risk assessment should be used to help determine if additional or separate APS studies are required.

        

Consideration should be given to parts that are used in routine production rather than for APS studies alone, if risk related characteristics such as wear or condition vary.

        

Where there are differences in variables, such as the size of filler parts and closure placement and insertion systems, a risk assessment should be used to determine if an APS bracketing approach or matrix is applicable. This approach should not be based solely on the physical dimensions of the parts or lines. It should consider process variables that may or may not be included because of the bracketing approach (see Section 7.5.1.1). Where it is determined that not all relevant variables are captured by a bracketing approach, it will be necessary to capture such sizes and variables in multiple APS runs.

    

    

        

### 導師解析 Tutorial Commentary

        

            

#### 核心概念解析 Key Concepts

            

**Inherent Intervention (固有干預)：**指製程中不可避免的操作步驟，如設備組裝、管路連接等。這些是生產過程的一部分，每次都會發生。

            

**Corrective Intervention (矯正干預)：**指生產過程中為了維持運作而進行的非計畫性操作，如更換故障零件、調整充填量等。

            

TR22 明確指出：設備組裝（Equipment Setup）是大多數無菌製程中「操作人員操作強度最高」的環節。因此它在 APS 中被歸類為固有干預，必須納入模擬。這不是可選的——是「must」。

        

        

            

#### 比喻說明 Analogy

            

想像外科手術前的器械準備。護理師打開無菌包、擺放手術器械的過程，就是「固有干預」——每次手術都必須做。而手術中發現某把鉗子不好用需要更換，就是「矯正干預」。兩種情境都可能破壞無菌環境，因此消防演練（APS）必須同時模擬這兩種場景。

        

        

            

#### 重點提示 Key Notes

            

**關鍵觀察點：**TR22 的腳註特別強調了設備組裝階段的重要性。在稽查中，這一階段往往是被特別關注的。建議：

            

                
- APS 觀察員應對設備組裝階段給予**最高關注度**

                
- 需記錄每一步的傳遞、處理、連接、放置細節

                
- 操作人員在 APS 中執行的組裝動作必須與日常生產一致

            

            

**零件差異的處理：**相似的零件（如同類型充填針頭）不需要分別做 APS，但如果來自不同供應商或有磨損差異，需要透過風險評估來判斷是否需要額外的 APS。這對 CDMO 來說是一個成本優化的機會點。

        

        

            

#### 重點提示 — 零件磨損考量

            

TR22 特別提到要注意「實際生產中使用的零件」而非「僅在 APS 時使用的零件」。言下之意：有些工廠會為 APS 專門準備全新零件，但真正的風險來自日常生產中已有磨損的零件。APS 應盡量使用與實際生產條件一致的零件狀態。

        

        

            

#### 練習思考 Practice Questions

            

                
1. 為什麼 TR22 要求 APS 中的設備組裝由「日常負責該操作的人員」執行，而不是由最有經驗的人員執行？

                
2. 如果你的工廠有來自 A、B 兩家供應商的充填針頭，在什麼條件下可以只用其中一家的針頭做 APS？在什麼條件下必須兩家都做？

                
3. 「Bracketing 不應僅基於物理尺寸」這句話的言外之意是什麼？請舉出一個除了尺寸之外需要考慮的製程變數。

            

        

    

7.3 Media Selection and Preparation

    

        

### Original Text

        

The most common medium for APS is SCDM, also referred to as TSB. SCDM is a general-purpose growth medium well-suited for the recovery of aerobic microorganisms of the types commonly associated with human-borne and environmental contamination. It is identical to SCDM agar (although without the agar), which is widely used for microbial recovery in aseptic areas for the same reason. Replacement of the products, diluents, and buffer solutions with SCDM is customary when performing APS studies.

        

Where there is evidence that the process or environment may have anaerobic microorganism contamination that provides a risk of product contamination, the APS studies should include filling of an alternate media, such as fluid thioglycolate medium (FTM) or another suitable medium in addition to conducting an aerobic evaluation. This evidence may include aseptic processing conducted in a strict anaerobic environment, for an aerobic process if anaerobic microorganisms are consistently recovered during periodic EM (for anaerobes), or if facultative anaerobes are detected exclusively in a FTM sterility-test medium. If oxygen is excluded from processing, then such parameters as container fill-volume and inert gassing may require modification to provide a true anaerobic environment for the APS study. In the case of a purely anaerobic environment, the use of SCDM is not recommended and a purely anaerobic APS can be conducted.

        

Media containing animal-derived components should be sourced from non-bovine spongiform encephalopathy/-transmissible spongiform encephalopathies (BSE/TSE) origin. Alternatively, vegetable options (e.g., vegetable peptone broth) are a viable alternative. Manufacturing processes with a risk of mycoplasma or prion transmission should always utilize a vegetable-based growth medium. These media are often very similar in composition to SCDM, but with the casein component being replaced with a plant peptone (see Section 13.2).

    

    

        

### 導師解析 Tutorial Commentary

        

            

#### 核心概念解析 Key Concepts

            

**SCDM / TSB (大豆酪蛋白消化液體培養基)：**全名為 Soybean-Casein Digest Medium，也稱為 Tryptic Soy Broth (TSB)。這是 APS 最常用的培養基，因為它能廣泛回收好氧微生物，特別是人體和環境來源的常見污染菌。

            

**FTM (液體硫代乙醇酸培養基)：**Fluid Thioglycolate Medium，專用於厭氧微生物的培養。只有在有證據顯示製程環境可能有厭氧菌污染風險時才需要使用。

            

**BSE/TSE 風險考量：**動物來源的培養基成分（如酪蛋白）必須確認不來自 BSE/TSE 風險區域。更安全的替代方案是使用植物性蛋白腖培養基。

        

        

            

#### 比喻說明 Analogy

            

選擇 APS 培養基就像選擇「餌」去釣魚。SCDM/TSB 就像萬用餌——能吸引大多數常見的魚（好氧菌）。但如果你的池塘（製程環境）裡已知有深水魚（厭氧菌），你就需要加掛深水專用餌（FTM）。如果整個池塘都是深水區（純厭氧環境），那就只用深水餌就好了。

        

        

            

#### 重點提示 Key Notes

            

**何時需要加做厭氧 APS？**TR22 列出了三個觸發條件：

            

                
1. 製程在嚴格厭氧環境下進行

                
2. 定期環境監測中持續回收到厭氧菌

                
3. 在無菌試驗的 FTM 管中**專一性地**檢出兼性厭氧菌

            

            

關鍵字是「consistently」和「exclusively」——偶爾檢出不構成觸發條件，但持續性或專一性的檢出就必須認真對待。

        

        

            

#### 重點提示 — BSE/TSE 與植物性培養基

            

對於 ATMP（先進治療醫藥產品）和細胞治療產品，BSE/TSE 風險是法規特別關注的議題。TR22 建議：凡有黴漿菌（mycoplasma）或普利昂蛋白（prion）傳播風險的製程，**一律使用植物性培養基**。這不僅是 APS 的選擇，也反映了 Section 13.2 中對培養基合規性的更廣泛要求。

        

        

            

#### 實務應用 Practical Application

            

情境：你的 CDMO 同時生產傳統注射劑和 CAR-T 細胞治療產品。傳統注射劑使用標準 SCDM 做 APS 沒有問題。但 CAR-T 產品線因為涉及人源細胞，有潛在的 mycoplasma 風險——你應該選擇植物性蛋白腖培養基（如 vegetable peptone broth）來執行 APS，避免引入額外的 BSE/TSE 法規風險。

        

        

            

#### 練習思考 Practice Questions

            

                
1. 為什麼 SCDM 被稱為「通用培養基」？它與環境監測中使用的 SCDM agar 有什麼關係？

                
2. 假設你的環境監測數據在過去 12 個月中有 2 次在 settle plate 上檢出厭氧菌，你是否需要在 APS 中加入 FTM？請用 TR22 的判斷標準進行分析。

                
3. 植物性蛋白腖培養基的微生物促進生長能力是否與 SCDM 完全相同？在使用前需要確認什麼？

            

        

    

7.4 Inert Gassing

    

        

### Original Text

        

Nitrogen or other inert gases are used to provide a low-oxygen environment for oxygen-sensitive products. They are also used to provide positive pressure for solution transfer. Nitrogen (or other gases) for these uses does not provide a true anaerobic environment (less than 0.1% residual oxygen is needed for anaerobic conditions). However, the use of an inert gas with SCDM, may still inhibit growth. In these instances, filter-sterilized air should be used in lieu of an inert gas for APS studies. Air should replace the inert gas and be delivered by the same delivery system, thus assuring that the purge/transfer setup-and-delivery considerations are fully considered in the simulation. If it is necessary to use an inert gas for simulation of an oxygen-free process, testing should confirm the ability of the medium selected (e.g., an anaerobic media) to support microbial growth when the inert gas is utilized. Any replacement of gases should not result in additional risk to the equipment, process, or personnel. It is important to note that the sterility of the inert gas supply, including filters, connections, and the piping system, is being evaluated as part of the APS.

    

    

        

### 導師解析 Tutorial Commentary

        

            

#### 核心概念解析 Key Concepts

            

**Inert Gassing (惰性氣體充填)：**許多藥品（特別是蛋白質藥物）對氧氣敏感，生產時會使用氮氣或其他惰性氣體排除容器中的氧氣。惰性氣體也常用於提供正壓以推動溶液轉移。

            

**核心矛盾：**惰性氣體排氧雖然保護了產品，卻可能抑制 SCDM 中好氧微生物的生長，導致 APS 的微生物回收能力降低。這就產生了一個根本性矛盾：模擬製程的需要 vs. 培養基生長促進能力的需要。

            

**TR22 的解決方案：**用無菌過濾空氣（filter-sterilized air）替代惰性氣體，但必須通過相同的輸送系統。這樣既保證了培養基的生長促進能力，又確保了氣體輸送系統的無菌性在 APS 中被驗證。

        

        

            

#### 比喻說明 Analogy

            

這就像消防演練中的煙霧問題。真正的火災會產生濃煙（惰性氣體），但演練時如果用真正的濃煙，參與者可能看不到逃生路線（微生物無法生長）。所以演練時用「無害的可見煙霧」（過濾空氣）來替代——它仍然從相同的煙霧發生器（氣體輸送系統）釋放，確保系統路徑被測試，但不會造成真正的傷害（不會抑制生長）。

        

        

            

#### 重點提示 Key Notes

            

**三個關鍵原則：**

            

                
1. **替代不能增加風險：**用空氣替代惰性氣體時，不能對設備、製程或人員造成額外風險（例如，某些對氧氣敏感的設備材質可能與空氣不相容）

                
2. **輸送系統完整評估：**空氣必須通過與惰性氣體相同的管路、過濾器、接頭輸送，這是因為 APS 同時也在評估整個氣體供應系統的無菌性

                
3. **純厭氧製程的例外：**如果是真正的無氧製程模擬，可以使用惰性氣體，但必須事先確認所選厭氧培養基在該惰性氣體條件下仍能促進微生物生長

            

        

        

            

#### 重點提示 — 氣體系統的隱藏風險

            

TR22 最後一句話常被忽略但極為重要：「the sterility of the inert gas supply, including filters, connections, and the piping system, is being evaluated as part of the APS.」

            

這意味著 APS 不僅僅是在測試充填操作——它同時也在驗證整個氣體供應系統（氣體過濾器、管路接頭、配管系統）的無菌性。如果在 APS 中完全跳過氣體系統（例如不通氣），等於遺漏了一個重要的無菌風險來源。

        

        

            

#### 實務應用 Practical Application

            

情境：你的充填線生產一支蛋白質藥物，使用氮氣做 headspace purge。在執行 APS 時，你應該：

            

                
- 將氮氣替換為無菌過濾空氣

                
- 空氣通過相同的氮氣管路、過濾器和接頭輸送

                
- 記錄氣體替換的合理性（justification）

                
- 確認空氣的引入不會對設備材質造成問題

                
- 確保氣體過濾器的完整性測試 (integrity test) 仍在 APS 流程中執行

            

        

        

            

#### 練習思考 Practice Questions

            

                
1. 為什麼不能在 APS 中簡單地「不通氣」來避免惰性氣體對培養基的影響？這樣做會遺漏什麼驗證目的？

                
2. 假設你的製程使用的不是氮氣而是二氧化碳（CO2），CO2 對 SCDM 的影響與氮氣有何不同？你會如何設計 APS？

                
3. 如何驗證「替代不增加風險」？請列出至少三個需要評估的項目。

# Section 7.10-7.15: Elements of Aseptic Process Simulation - Part 2

    

無菌製程模擬要素（第二部分）：充填數量、持續時間策略、連續生產、培養與檢查

    

PDA Technical Report No. 22 (Revised 2025) | p52 - p57

    

### 本章學習目標

    

        
- 理解 APS 充填數量的決定依據與 EU Annex 1 對最低數量的要求（7.10）

        
- 掌握四種延長 APS 持續時間的策略方案及其各自的優缺點（7.11）

        
- 了解 Campaign Operations（連續生產模式）對 APS 設計的特殊要求（7.12）

        
- 理解培養前檢查、培養條件設定及培養後檢查的規範要求（7.13-7.15）

    

    

### 本節目錄 Section Contents

    

        7.10 Number of Units
        7.11 Means to Achieve Full/Longer Duration
        7.12 Campaign Operations
        7.13 Pre-Incubation Inspection
        7.14 Incubation Conditions
        7.15 Post-Incubation Inspection
    

7.10 Number of Units 充填數量

    

        

### Original Text

        

The number of units filled for an APS should be sufficient to adequately challenge the entire aseptic process. The number of units needed to assess aseptic process events, interventions, and activities can be based on an assessment of the relative risk of those aseptic process steps. Units should be filled with media following interventions and activities to assess the effect of variables and conditions resulting from those interventions and activities. Steps, events, activities, and interventions to be assessed for inclusion in the APS include those associated with, but not limited to:

        

            
- Transfer, assembly, and setup of direct and indirect product-contact equipment and surfaces, such as filtration, filling, and sealing systems

            
- Movement of personnel into and out of the aseptic processing area (APA), including the entry and use of operators' hands in the critical area through fixed glove ports

            
- Movement of materials into the supporting area, as well as the transfer and replenishment of containers, closures, or parts into the critical area

            
- Sanitization, disinfection, and preparation of fixed parts and areas where interventions were performed or contacted critical surfaces

            
- Performance of other aseptic process interventions, groups of interventions, or activities that occur in the critical zone and APA areas that are deemed to pose a risk to the microbiological quality of the product

            
- Execution of all routine setup, in-process, and post-process environmental and personnel monitoring

        

        

As noted in EU Annex 1, the number of units processed (filled) for APS should be sufficient to effectively simulate all activities that are representative of the aseptic manufacturing process (1). Justification for the number of units to be filled should be clearly captured in the CCS. Typically, a minimum of 5,000 to 10,000 units are filled. For smaller production batch sizes (e.g., those under 5,000 units), the number of containers for APS should at least equal the size of the production batch. However, these minimum numbers may not be appropriate for all filling operations, technologies, and APS studies. Each company should determine the rationale and approaches applicable to determine the minimum number of units to be filled during their APS.

    

    

        

### 導師解析 Tutorial Commentary

        

            

#### 核心概念解析 Key Concepts

            

**APS 充填數量 (Number of Units)：**APS 中充填的培養基數量必須足以挑戰整個無菌製程的每一個步驟。這不僅僅是「填多少瓶」的問題，而是要確保每一個可能引入微生物污染的操作步驟都有被培養基覆蓋到。

            

**CCS（污染控制策略）：**充填數量的合理性必須記錄在 CCS 中，這是 EU Annex 1 的明確要求。CCS 是將所有污染控制措施整合為一套系統性文件的核心工具。

        

        

            

#### 比喻說明 Analogy

            

想像你是消防隊的演習指揮官，要測試整棟大樓的消防系統。你不能只測試一個樓層的灑水器就說「全棟合格」。你必須確保每個樓層、每個逃生梯、每個消防栓都被演練覆蓋到。APS 的充填數量就是這個概念 -- 數量必須足以覆蓋所有可能的「火災發生點」（即污染風險點）。

        

        

            

#### 重點提示 Key Notes

            

**EU Annex 1 最低要求：**一般而言，最少充填 **5,000 至 10,000 單位**。但對於小批量生產（如 ATMP 或 Cell Therapy），若批量小於 5,000 單位，APS 的數量至少應等於生產批量。

            

**關鍵原則：**數量不是越多越好，而是要「足夠挑戰所有操作步驟」。每家公司應根據自身製程的複雜度、介入操作的種類與數量，來決定合理的充填數量。

        

        

            

#### 充填數量決策邏輯 Decision Logic

            

```

IF 生產批量 >= 5,000 units:
   APS 最少 = 5,000~10,000 units

IF 生產批量 < 5,000 units:
   APS 最少 = 生產批量數量

充填數量 = MAX(最低要求,
              覆蓋所有介入操作所需數量)
            
```

        

        

            

#### 練習思考 Practice Questions

            

                
1. 如果你的產線每批生產 3,000 支注射劑，你的 APS 應該充填多少支？為什麼？

                
2. 為什麼 TR22 強調充填數量的依據需要記錄在 CCS 中，而不是只寫在 APS Protocol 裡？

                
3. 列舉三項「必須在充填培養基期間進行」的操作活動。

            

        

    

7.11 Means to Achieve Full or Longer Duration APS Fills 延長 APS 持續時間的方法

    

        

### Original Text

        

One challenge with running long-duration APS fills is the need to incubate and inspect a large number of filled units. This can present a burden to those performing the APS due to limitations of incubation space and the resources and time needed to inspect a large number of units. The scenarios listed below present the corresponding rationale and related concerns that longer-duration APS runs are specifically designed to address, highlighting process risks that may only emerge over extended operational periods. When determining the duration of the APS, the process variables selected to challenge the conditions should be clearly identified. The chosen method should ensure that these variables are captured with a scientifically valid approach and appropriate regulatory requirements taken into consideration.

        

### Scenario 1: Alternate Between Media-Filled Units and Idle Time

        

The line first fills media intermittently throughout the run, alternating with periods of idle time. Planned interventions and other critical activities are performed during the media-filling portion only. Media is filled periodically throughout the process, including at the beginning and end of the routine process duration, as well as during and immediately after any planned interventions.

        

**Rationale:** Under this approach, the aseptic personnel, procedures, and processing environment continue to be evaluated, but the number of media-filled units produced is reduced.

        

**Caution:** The time the machine remains idle does not present the same level of challenge (to the process, personnel, or environment) as the actual production. This option is of limited benefit because only interventions and critical activities are challenged during the media-filling portion.

        

### Scenario 2: Alternate Between Media-Filled and Empty Units

        

The line first fills media for a portion of the run and empty units for another portion of the run or intermittently throughout the run. Planned interventions and other critical activities are performed during the media-filling portion only. Media is filled periodically throughout the process, including at the beginning and end of the routine process duration, as well as during and immediately after any planned interventions.

        

**Rationale:** Interventions and critical activities are challenged during the media-filling portion. The line is allowed to run for a longer duration without the need to incubate and inspect a larger number of media-filled units. Under this approach, the aseptic personnel, procedures, and processing environment continue to be evaluated, but the number of media-filled units produced is reduced. The running of those units increases the vial-handling challenge for the machine and can lead to additional interventions and increased activity and personnel presence.

        

**Caution:** This option is of limited benefit because the processing of empty units during an APS does not allow for the evaluation of those units for potential contamination. Therefore, any process variables, adverse events, or compromise of the aseptic process during the periods of time when the empty units are being processed will go undetected. The only units and period that can be evaluated will be the portion filled with media.

        

### Scenario 3: Alternate Between Water for Injection-Filled and Media-Filled Units

        

This method is similar to the approach in Scenario 2, except units are filled with water for injection (WFI) when not filling with media.

        

**Rationale:** Liquid media or WFI are filled, which may capture variables associated with actual filling otherwise missed by running empty units.

        

**Caution:** This option is of limited benefit because the filling of units with WFI rather than media still does not allow for adequate evaluation of possible contamination happening during the filling of vials with WFI. Further, the impact of media dilution with WFI, which could alter the growth-promoting characteristics, must be considered. Adequate qualification of the growth-promoting characteristics of the media should be demonstrated when alternating with WFI.

        

### Scenario 4: End of Production-Fill Aseptic Process Simulations (or Piggyback Campaigns)

        

In this case, the APS is run after a full- or longer-duration production fill in an identical configuration without intervening decontamination / sanitization of the APA.

        

**Rationale:** This is an evaluation of units filled with media, occurring at the end of an aseptic processing operation of long duration. Therefore, variables associated with the length of the filling operation may be captured and evaluated in the APS, without the necessity of running, incubating, and inspecting a large number of media-filled units.

        

**Caution:** This option is of limited benefit because running an APS after a production lot will not necessarily capture all relevant process variables associated with process start-up, including such activities as certain material transfer, fill-system setup, equipment assembly, and others occurring during the early parts of the fill. Therefore, to capture those variables, this approach should be periodically coupled or alternated with simulation of the normal production setup, start-up, and commencement of filling. Scheduling and sequencing piggyback APS studies should be supported by risk assessment.

        

In addition, the product fluid pathway should be flushed with a sufficient quantity of media to remove drug product that may dilute or otherwise affect the growth-promoting ability of the media. The flush volume should be specified and shown to result in adequate growth-promoting characteristics of the media. For inhibitory products, the product fluid pathway contact points should be changed with newly prepared and sterilized parts or equipment prior to conducting the APS. Where the process allows collection of flushed media, the flushed media should be collected and incubated for evaluation, unless it can be clearly demonstrated that this waste process would not impact the sterility of the product. Any contaminated flush material should be investigated.

    

    

        

### 導師解析 Tutorial Commentary

        

            

#### 核心概念解析 Key Concepts

            

**長時間 APS 的挑戰：**當生產批次持續時間很長（例如 24 小時或多天連續生產），APS 若完整模擬全部時間，會產生大量培養基充填瓶，造成培養箱空間不足、檢查人力負擔過重等實際問題。因此 TR22 提出四種替代策略，各有優缺點。

            

**Piggyback Campaign（搭車式 APS）：**在實際生產批次結束後，不進行消毒/清潔，直接銜接 APS。這樣可以評估長時間生產後的環境狀態，但會遺漏開機階段的風險。

        

        

            

#### 比喻說明 Analogy

            

四種策略就像馬拉松訓練的不同方法：

            

                
- **Scenario 1（間歇充填+空閒）：**跑一段、坐下休息一段 -- 沒有真正模擬連續跑步的疲勞

                
- **Scenario 2（交替充填+空瓶）：**跑一段、慢走一段 -- 腿在動但強度不同，無法評估走路段的表現

                
- **Scenario 3（交替充填+WFI）：**跑一段、騎自行車一段 -- 更接近持續運動，但不同運動間可能互相干擾

                
- **Scenario 4（搭車式）：**先跑完全程馬拉松，再立刻測體能 -- 抓到疲勞效應，但錯過了起跑階段的表現

            

        

        

            

#### 重點提示 Key Notes

            

**TR22 的立場：**四種方案都被描述為「of limited benefit」（效益有限）。這意味著沒有完美的捷徑 -- 每種方法都有盲區。實務上，公司需要結合多種方法，並透過風險評估來證明其 APS 設計的完整性。

            

**Scenario 4 特別注意事項：**

            

                
- 必須用足量培養基沖洗產品流路，以去除可能抑制微生物生長的藥品殘留

                
- 對於具有抑菌性的產品，必須更換全新滅菌部件

                
- 沖洗培養基應收集並培養檢測

            

        

        

            
                
                    
                    
                    
                    
                
| 方案 | 充填方式 | 優點 | 主要風險/限制 |
| --- | --- | --- | --- |
                
                    
                    
                    
                    
                
| Scenario 1 | 培養基 + 空閒時間 | 減少充填瓶數 | 空閒時段無法模擬生產挑戰 |
                
                    
                    
                    
                    
                
| Scenario 2 | 培養基 + 空瓶 | 產線持續運轉 | 空瓶無法評估污染 |
                
                    
                    
                    
                    
                
| Scenario 3 | 培養基 + WFI | 更接近實際充填 | WFI 可能稀釋培養基 |
                
                    
                    
                    
                    
                
| Scenario 4 | 生產後銜接 APS | 捕捉長時間效應 | 遺漏開機階段風險 |
            

        

        

            

#### 實務應用 Practical Application

            

作為 CDMO，你的客戶產品批次充填時間為 36 小時。如果完整模擬會產生超過 50,000 瓶培養基瓶，培養箱根本放不下。此時你可以考慮：

            

                
- 使用 Scenario 4（Piggyback）在客戶的實際批次後銜接 APS，同時每年至少一次使用完整模擬來覆蓋開機階段

                
- 將兩種方案交替使用，並在 CCS 中充分記錄風險評估的依據

            

        

        

            

#### 練習思考 Practice Questions

            

                
1. Scenario 3 中「WFI 稀釋培養基」為什麼是一個嚴重的問題？如果培養基的促生長能力下降，會對 APS 結果產生什麼影響？

                
2. 為什麼 TR22 建議 Scenario 4 應定期搭配「正常開機啟動」的模擬？

                
3. 如果你的產品具有抑菌性（antimicrobial），在使用 Scenario 4 時需要採取哪些額外步驟？

            

        

    

7.12 Campaign Operations 連續生產操作

    

        

### Original Text

        

The campaign approach is increasingly common with FFS, BFS, and isolation technology (primarily isolators). During a campaign, environmental conditions are essentially constant and are expected to be unchanged throughout the campaign duration. Decontamination of the isolator and disinfection of RABS and/or removal, cleaning, and sterilization of critical surfaces is not normally performed between batches within a campaign. However, clean-in-place or sterilize-in-place (CIP/SIP) of the direct product-contact parts and filter changes of the product pathway may be performed between production batches. In addition to other activities, the APS for campaigns should include, in addition to other activities, start-of-campaign and end-of-campaign studies in a manner similar to that described for large batches.

        

In campaign modes, the following situations may be possible and supportable in an appropriately designed APS:

        

            
- Manufacturing of multiple-product lots of the same formulation, product, or product family

            
- Changing configurations or fill volumes

            
- Campaign lengths substantially longer than one day

            
- Changing product formulation and/or concentration if cleaning and re-sterilization of the delivery system are performed aseptically

            
- Breaks such as days or shifts without production are acceptable (i.e., production may not need to be continuous over the campaign period)

        

        

Initial and periodic demonstration of campaign duration (total time or batches) should be based on an assessment of the operational elements which is an appropriate activity for the application of QRM approaches (see Section 3.4).

    

    

        

### 導師解析 Tutorial Commentary

        

            

#### 核心概念解析 Key Concepts

            

**Campaign Manufacturing（連續生產模式）：**在一次消毒/準備週期內，連續生產多個批次而不進行中間的全面消毒。這在隔離器（Isolator）和 BFS（吹瓶充填封蓋）技術中特別常見，因為隔離器的 H2O2 消毒週期通常需要 4-8 小時，若每批都消毒會嚴重影響產能。

            

**Campaign APS 的特殊性：**APS 需要包含「Campaign 開始」和「Campaign 結束」的模擬，因為在連續多天生產的過程中，環境、設備和人員的疲勞狀態會隨時間改變。

        

        

            

#### 比喻說明 Analogy

            

Campaign 生產就像餐廳的午餐到晚餐連續營業模式。廚房不會在午餐和晚餐之間進行全面清潔消毒（那太費時了），只會清洗鍋具、更換砧板。但你必須證明這樣的「簡易清潔」足以維持食品安全。APS 就是那個「衛生檢查員的突擊檢查」，要在營業開始和結束時都進行，確認連續營業不會導致衛生下降。

        

        

            

#### 重點提示 Key Notes

            

**Campaign 期間允許的變化：**TR22 明確指出，以下情況在適當的 APS 設計支持下是可接受的：

            

                
- 同一配方的多批次連續生產

                
- 更換容器規格或充填量

                
- Campaign 超過一天（多天連續）

                
- 更換產品配方（前提是無菌地清洗和重新滅菌傳送系統）

                
- 中間有休息日或換班間隔（不需要真正的「連續」生產）

            

            

**QRM 應用：**Campaign 持續時間的驗證應基於 QRM（品質風險管理）方法，這與 Section 3.4 的要求一致。

        

        

            

#### 練習思考 Practice Questions

            

                
1. 為什麼隔離器技術特別適合 Campaign 生產模式？從消毒效率和環境控制的角度來解釋。

                
2. 如果在 Campaign 中間更換產品配方，為什麼需要對傳送系統進行無菌清洗和重新滅菌？

                
3. Campaign 中允許「休息日」是否意味著可以開門離開潔淨區？請說明在此期間需要維持哪些條件。

            

        

    

7.13 Pre-Incubation Container Inspection 培養前容器檢查

    

        

### Original Text

        

The normal product inspection process is qualified for the removal of nonintegral containers (e.g., missing or misaligned closures, cracks in glass, poor crimps, empty containers) due to the possible breach of product sterility, and other non-container integrity related defects (e.g., presence of particulate, fill volume, cake shape in lyophilized products, cosmetic defects). The routine inspection process should be maintained for APS-filled units, with only nonintegral APS units removed during the preincubation inspection. Alternative inspection processes may also be used as long as the inspectors have been appropriately qualified to remove only nonintegral units. The removal of nonintegral units is appropriate because the evaluation of these units in the APS would yield no valuable scientific information. For the purpose of the APS, cosmetic, particulate, and fill-volume defects should be ignored, and such units should be incubated and included in the APS evaluation and contamination rate. The inspection should be conducted as soon as possible to prevent delay of incubation of the units. (See Section 4.1.3.4 for the handling of intervention-related units.)

    

    

        

### 導師解析 Tutorial Commentary

        

            

#### 核心概念解析 Key Concepts

            

**Nonintegral Containers（非完整容器）：**指密封系統已被破壞的容器，例如瓶蓋缺失、瓶蓋歪斜、玻璃裂縫、壓蓋不良等。這些容器的密封完整性已經不存在，即使被污染也無法說明無菌製程本身的問題。

            

**關鍵區分：**APS 中只能剔除「非完整容器」，不能剔除外觀不良、微粒、充填量異常等「僅影響外觀品質」的容器。這些容器必須被培養並納入污染率計算。

        

        

            

#### 比喻說明 Analogy

            

想像你在進行食品安全抽檢。如果一個罐頭的蓋子明顯沒封好（空氣可以自由進出），你把它排除在檢測之外是合理的，因為污染結果無法代表製程問題。但如果罐頭只是標籤貼歪了或外觀有刮痕，你不能因此排除它 -- 這些「醜罐頭」的內容物安全性同樣需要被驗證。

        

        

            

#### 重點提示 Key Notes

            

**常見錯誤：**有些公司在培養前檢查時，會因為「外觀不好看」或「充填量太少」而剔除 APS 瓶。這是嚴重的程序錯誤！

            

                
- 只有密封完整性受損的容器可以被剔除

                
- 外觀缺陷、微粒、充填量偏差的容器必須被培養

                
- 檢查應盡快完成，避免延遲培養開始時間

            

            

這個原則保護了 APS 的科學完整性 -- 如果隨意剔除「看起來不對」的瓶子，就可能掩蓋真正的污染問題。

        

        

            

#### 練習思考 Practice Questions

            

                
1. 為什麼「壓蓋不良」的瓶子可以被剔除，但「充填量偏低」的瓶子不能？兩者的根本差異是什麼？

                
2. 如果培養前檢查發現大量非完整容器，這本身說明了什麼問題？

            

        

    

7.14 Incubation Conditions 培養條件

    

        

### Original Text

        

Prior to incubation, filled APS units should be inverted and manipulated to ensure contact of the medium with all internal surfaces of the closure system before they are incubated. APS units should be incubated for a minimum of 14 days unless supported by another qualified duration or method.

        

The chosen temperature should be based on its ability to recover microorganisms normally found in the environment or in the product bioburden. Any incubation temperature or temperatures in the range of 20-35 °C may be used if data is available to show the suitability of the selected incubation temperature to support growth, including recovery of facility isolates and/or molds (as indicated by EM data) (19).

        

If multiple temperatures are selected, a minimum of 7 days of incubation must be done at each temperature (e.g., seven (7) days at 20-25 °C followed by another seven (7) days at 30-35 °C) (19). Data should be available to show the suitability of the selected incubation temperature to support growth, including recovery of molds. The selected temperature(s) should be controlled and monitored continuously throughout the incubation period. When more than one temperature is utilized, the lower temperature should be used first, and the time to ramp up to the second temperature should be determined and considered to allow for full incubation period at the second temperature. A maximum time limit should be considered to ensure that inspection occurs as close to completion of incubation as possible, so neither the detection of potential turbidity nor the ability to subculture the potentially contaminated unit is compromised.

        

The conditions for incubation should be qualified, including the conditions, timing and activities, such as sample inversion, after the period of processing prior to and during incubation (1). Incubation of filled units should begin without undue delay following completion of the simulated batch, to ensure that any potential contamination can be detected under conditions that reflect the true state of the process. Where the visual inspection process entails a lengthy manual operation, it should be assessed to understand if it can be considered as part of the initial ambient temperature incubation (20-25°C) or not.

    

    

        

### 導師解析 Tutorial Commentary

        

            

#### 核心概念解析 Key Concepts

            

**Inversion（翻轉）：**培養前必須將充填後的瓶子倒轉並搖動，確保培養基接觸到瓶蓋、膠塞等所有密封面。這是因為污染可能發生在瓶口/瓶蓋接合處，如果培養基只在瓶底，就無法檢測到密封面的污染。

            

**雙溫培養（Dual Temperature）：**最常見的做法是先在 20-25°C 培養 7 天（利於黴菌和低溫菌生長），再升溫至 30-35°C 培養 7 天（利於一般細菌生長），總共 14 天。先低溫是為了不讓高溫先殺死某些低溫菌。

        

        

            

#### 比喻說明 Analogy

            

培養就像「設陷阱抓小偷」。你先在瓶子裡放了美味的食物（培養基），然後在兩種不同溫度下等待：先在涼爽環境等（抓喜歡涼爽的「小偷」，即黴菌），再切換到溫暖環境（抓喜歡溫暖的「小偷」，即細菌）。翻轉瓶子就像確保「每扇門窗旁都放了食物」，不讓任何可能的入侵者被遺漏。

        

        

            

#### 重點提示 Key Notes

            

**培養條件的關鍵參數：**

            

                
- **最低培養時間：**14 天（除非有驗證數據支持更短時間）

                
- **溫度範圍：**20-35°C，可用單一溫度或雙溫

                
- **雙溫規則：**先低溫（20-25°C）後高溫（30-35°C），各至少 7 天

                
- **升溫時間：**從低溫切換到高溫的升溫時間需被計算在內，確保第二階段的培養時間不被縮短

                
- **及時培養：**批次結束後應盡快開始培養，不得有不當延遲

            

            

**新觀點：**TR22 提到，如果目視檢查是一個冗長的手動操作，可以評估是否將檢查時間視為初始常溫培養（20-25°C）的一部分。這是一個實務上的靈活安排。

        

        

            

#### 典型雙溫培養時程 Typical Dual-Temperature Schedule

            

```

Day 0:    充填完成，翻轉瓶子，開始培養
Day 1-7:  20-25°C 培養（黴菌/低溫菌）
Day 7:    升溫至 30-35°C（計算升溫時間）
Day 8-14: 30-35°C 培養（一般細菌）
Day 14:   結束培養，開始目視檢查
          （應盡快完成，避免延遲）
            
```

        

        

            

#### 練習思考 Practice Questions

            

                
1. 為什麼雙溫培養要「先低後高」而不是「先高後低」？如果顛倒順序會有什麼風險？

                
2. 你的培養箱從 25°C 升溫到 30°C 需要 4 小時。在設計培養方案時，這 4 小時應該如何處理？

                
3. 為什麼 TR22 強調培養應在批次完成後「盡快」開始？延遲會帶來什麼科學問題？

            

        

    

7.15 Post-Incubation Inspection 培養後檢查

    

        

### Original Text

        

Firms may choose to do an additional inspection of units part-way through the incubation period (often referred to as an interim read). This can be performed either by lower manipulation of the units (looking for gross contamination) or with a full inspection. Regardless of whether or how it is performed, care must be taken in handling so as not to compromise the units under incubation, and time out of the incubator should be considered in the overall incubation time.

        

At the end of the incubation period, visual inspection of all APS units for growth is performed to determine the outcome of the APS. The inspection process should be performed by qualified inspectors who have demonstrated the ability to detect both low- and high-level microbial-growth patterns. Oversight should be provided by personnel adequately trained in microbiology and quality assurance.

    

    

        

### 導師解析 Tutorial Commentary

        

            

#### 核心概念解析 Key Concepts

            

**Interim Read（中期讀數）：**在培養期間（通常是第 7 天，即溫度切換時）進行的中間檢查。目的是提前發現明顯的（gross）污染，但這不是強制要求。進行時必須小心操作，不能因搬動瓶子而造成二次污染。

            

**Qualified Inspectors（合格檢查員）：**培養後的目視檢查必須由經過資格認定的檢查員進行，他們必須能夠辨識不同程度的微生物生長模式，包括低濃度生長（如輕微混濁）和高濃度生長（如明顯渾濁、菌膜、沉澱物）。

        

        

            

#### 比喻說明 Analogy

            

培養後檢查就像烘焙完成後的品質判斷。你不能讓一個從未進過廚房的人來判斷蛋糕有沒有烤熟 -- 你需要有經驗的烘焙師，能夠分辨「正常」和「異常」之間的細微差異。同樣地，檢查員必須能分辨「清澈的培養基」和「微微混濁的培養基」之間的差別，因為後者可能意味著低濃度的微生物污染。

        

        

            

#### 重點提示 Key Notes

            

**Interim Read 的注意事項：**

            

                
- 搬出培養箱的時間要計入總培養時間

                
- 操作時要避免劇烈搖動或碰撞，防止破壞容器密封

                
- 可以選擇「低操作量檢查」（僅看明顯污染）或「完整檢查」

            

            

**最終檢查的要求：**

            

                
- 必須檢查所有 APS 單位（100% 目視檢查）

                
- 檢查員必須經過資格認定（能辨識低/高程度生長）

                
- 需要微生物學和品質保證人員的監督

            

        

        

            

#### 實務應用 Practical Application

            

在 CDMO 中，APS 的檢查員資格認定通常包括：

            

                
- 使用已知陽性和陰性樣品進行視力和辨識能力測試

                
- 記錄檢查員的判讀準確率（通常要求 ≥95%）

                
- 定期複訓（例如每年一次）

                
- 建立標準圖庫，展示不同程度微生物生長的外觀

            

        

        

            

#### 練習思考 Practice Questions

            

                
1. 如果你選擇進行 Interim Read，應該安排在培養期的哪一天？為什麼？

                
2. 為什麼培養後的目視檢查需要微生物學專業人員的監督，而不僅僅是品管檢查員？

                
3. 如果一瓶 APS 培養基呈現「輕微混濁」但不確定是否為微生物生長，應該如何處理？

            

        

    

    

### 本節重點回顧 Section Summary

    

        
- **充填數量（7.10）：**APS 最低充填 5,000-10,000 單位；小批量製程應至少等於生產批量。數量必須足以覆蓋所有操作步驟、介入和活動，依據需記錄在 CCS 中。

        
- **延長持續時間的策略（7.11）：**TR22 提出四種方案（間歇充填、空瓶替代、WFI 替代、搭車式），但每種都有局限性（"of limited benefit"）。實務上應結合多種方法並輔以風險評估。

        
- **連續生產（7.12）：**Campaign 模式在隔離器技術中日益普遍。APS 需涵蓋 Campaign 開始和結束的模擬，持續時間驗證應使用 QRM 方法。Campaign 期間允許配方更換和生產間隔。

        
- **培養前檢查（7.13）：**只能剔除密封完整性受損的容器（非完整容器）。外觀缺陷、微粒、充填量偏差的容器必須被培養並計入污染率。

        
- **培養條件（7.14）：**最低 14 天培養，溫度 20-35°C；雙溫培養須先低溫（20-25°C，7天）後高溫（30-35°C，7天）。培養前須翻轉瓶子確保培養基接觸所有密封面。

        
- **培養後檢查（7.15）：**由合格檢查員對所有 APS 單位進行 100% 目視檢查。中期讀數（Interim Read）為可選項，但操作時須注意不得破壞培養中的樣品。

    

    

PDA Technical Report No. 22 (Revised 2025) - Aseptic Process Simulation

    

Section 4b: Elements of APS Part 2 (7.10-7.15) | Educational Material

    

For educational purposes only. Refer to the original document for official guidance.

⇧

## Section 5: Personnel & Acceptance 人員與判定標準 (p58-p66)

# Section 8.0 Personnel Qualification & 9.0 Acceptance Criteria

    

人員資格確認與無菌製程模擬接受標準

    

PDA Technical Report No. 22 (Revised 2025) | p58 - p66

    

### 本章學習目標

    

        
- 了解無菌製造人員資格確認的分階段方法（Level 1 至 Level 3）及其漸進式設計邏輯

        
- 掌握各資格等級的訓練重點、評估方式與監督要求

        
- 理解持續資格確認 (Ongoing Qualification) 在維持無菌保證中的關鍵角色

        
- 明確 APS 接受標準為「零陽性」及其背後的科學與風險管理意義

        
- 掌握 APS 失敗後的調查、CAPA 與重新執行要求

    

    

### 本節目錄 Section Contents

    

        8.0 Personnel Qualification
        8.1 Qualification Level 1
        8.2 Qualification Level 2
        8.3 Qualification Level 3
        8.4 Ongoing Qualification
        9.0 Acceptance Criteria
        9.1 Recommendations
    

8.0 Personnel Qualification 人員資格確認

    

        

## 原文內容 Original Text

        

The qualification program should be risk-based and commensurate with the complexity and the level of personnel skill required for a specific role in the aseptic manufacturing process. Qualification of personnel for critical aseptic interventions (e.g., machine parts assembly, filling-nozzle adjustment, or manual aseptic compounding), might require the highest level of qualification efforts, starting with selection, training, supervised execution, demonstration and, finally, participation in a successful APS.

        

A phased approach to qualification is useful in breaking down this complex qualification process into different stages, which allows the personnel to advance from lower-risk activities to higher-risk activities, based on meeting different levels of qualification criteria. The need for direct supervision should be commensurate with these levels, with more direct supervision required initially and, when competence is demonstrated, less supervision required as they progress through levels of qualification.

        

A typical qualification program for beginners or new employees could include stages to qualify for entry into the aseptic cleanroom, followed by qualification for performing less-critical tasks under supervision and, finally, qualifying for critical interventions (see Figure 8.0-1). In every stage of qualification, there is a need for an appropriate mix of training, practicing, supervised execution, and final assessment of performance. For the existing employees in the organization, a mechanism should be established to reassess their performance at regular intervals to ensure their qualification status. This should be a formally documented qualification program to ensure that those personnel can perform their tasks effectively, reliably, using appropriate technique, methods, and behaviors that minimize the potential risk of microbiological contamination to product. Company-specific qualification acceptance criteria should be established in a phased qualification process.

        

            "Figure 8.0-1 APS Personnel Qualification Criteria — Note: The level of training and assessment may vary based on qualification, prior knowledge and experience, role to be played, and the technology in use."
        

    

    

        

## 導師解析 Tutorial Commentary

        

            

#### 核心概念解析 Key Concepts

            

**Personnel Qualification (人員資格確認)：**這是一套系統性的程序，確保在無菌環境中工作的人員具備足夠的知識、技能與行為習慣，以最小化微生物污染風險。TR22 強調此計劃應「基於風險」(risk-based)，意即不同角色承擔的風險不同，所需的資格確認深度也不同。

            

**Phased Approach (分階段方法)：**將複雜的資格確認拆分為漸進式的階段，讓人員從低風險活動逐步進階到高風險活動。這是一種以能力為基礎的培訓策略，確保每位人員在進入下一階段前已充分展現前一階段的勝任力。

            

**Critical Aseptic Interventions (關鍵無菌介入操作)：**例如機器零件組裝、充填針頭調整、手動無菌配製等——這些操作直接暴露無菌區域，風險最高，因此需要最高等級的資格確認。

        

        

            

#### 比喻說明 Analogy

            

想像醫院培養外科醫師的過程：實習醫師不會第一天就走進手術室拿起手術刀。他們先學習基礎解剖學與感染控制（Level 1），然後在資深醫師指導下執行簡單程序（Level 2），最後才能獨立主刀複雜手術（Level 3）。無菌製造人員的資格確認遵循完全相同的邏輯——從「知道規則」到「能做到」再到「獨立勝任」，每一步都有明確的考核門檻。

        

        

            

#### 重點提示 Key Notes

            

**EU GMP Annex 1 對齊：**2023年版 Annex 1 對人員資格確認提出了更嚴格的要求，強調必須有正式文件化的資格確認計劃。TR22 的分階段方法正是對此法規期望的最佳實踐回應。

            

**監督程度與等級反比：**初期需要更多直接監督，隨著人員展現能力，監督程度逐漸降低。這不是「放鬆管理」，而是「基於證據的信任」。

        

        

            

#### 圖表解讀 Figure Analysis

            

**Figure 8.0-1** 展示了 APS 人員資格確認的分階段架構。關鍵觀察：

            

                
- 每個階段都包含「訓練 → 練習 → 受監督執行 → 評估」的完整循環

                
- 訓練深度與評估嚴格度會根據人員的先前經驗、預定角色及使用技術而調整

                
- 這不是一條固定路線，而是一個可根據實際情況調整的框架

            

        

        

            

#### 實務應用 Practical Application

            

作為 CDMO，你的客戶可能會在稽核時詢問：「你們的人員資格確認計劃是什麼？」一個清晰的三階段框架（附有文件化的評估標準）能立即展示你的品質體系成熟度。此外，分階段方法也能加速新進人員的上線速度——不需要等待完整 APS 週期才能讓人員進入無菌區域執行低風險工作。

        

    

8.1 Qualification Level 1 資格確認等級一

    

        

## 原文內容 Original Text

        

Qualification Level 1 (L-1) represents the initial stage of personnel qualification and grants access and entry into the cleanroom environment to new or entry-level. This foundational training is designed for persons new to the cleanroom and focuses on:

        

            
- General health and hygiene

            
- Basic Microbiology

            
- Sterility assurance principles including contamination control (18)

            
- Gowning

            
- Cleanroom behaviors

            
- First air principles (4)

            
- Impact to patients from a potential contamination

        

        

These critical topics are required for personnel operating in an aseptic environment, which is in alignment with current regulatory expectations. To ensure comprehension at this initial stage, the program should include theoretical instruction delivered in a classroom or computer-based immersive setting, followed by proficiency-based assessments. Then, gowning qualification should adhere to a structured procedure, beginning with a visual inspection of the individual's ability to properly don sterile garments and concluding with a microbial assessment to verify compliance with aseptic standards. This comprehensive approach ensures personnel are adequately prepared for working in controlled environments while also meeting regulatory and operational requirements.

    

    

        

## 導師解析 Tutorial Commentary

        

            

#### 核心概念解析 Key Concepts

            

**Level 1 — 進入無菌區域的基本門票：**L-1 是所有後續資格的基礎。它不涉及實際操作，而是確保人員理解「為什麼」無菌環境如此重要。

            

**First Air Principles (第一氣流原則)：**無菌操作中最基本的概念之一——確保經 HEPA 過濾的潔淨空氣首先接觸關鍵表面和產品，不受人員或設備的干擾。理解這個原則是所有無菌行為的基石。

            

**Gowning Qualification (更衣資格確認)：**不僅是「會穿無菌衣」，還必須通過微生物評估來證明穿戴過程中未引入污染。這通常包括在指定身體部位進行接觸培養皿取樣。

        

        

            

#### 比喻說明 Analogy

            

Level 1 就像取得駕照之前的「筆試」——你必須先了解交通規則（衛生原則、微生物學）、認識路標（潔淨室行為規範），然後通過一個實作考試（更衣資格確認）才能獲得「上路資格」。你還不能獨立駕駛上高速公路，但你已經被允許在教練陪同下進入車內了。

        

        

            

#### 重點提示 Key Notes

            

**「患者影響」的訓練至關重要：**TR22 特別列出了「Impact to patients from a potential contamination」作為 L-1 訓練項目。這不是技術主題，而是心態建設——讓每位進入無菌區域的人員從第一天起就理解：他們的每一個動作都可能影響患者的生命安全。這種意識是所有技術訓練的靈魂。

            

**評估方式的雙軌設計：**先是知識評估（理論考試），再是技能評估（更衣操作 + 微生物驗證）。兩者都必須通過才能獲得 L-1 資格。

        

        

            

#### 練習思考 Practice Questions

            

                
1. 為什麼 TR22 將「對患者的影響」列為 Level 1 的訓練項目之一，而不是放在更高等級？

                
2. 一位通過了理論考試但更衣微生物評估未通過的人員，應該如何處理？

                
3. 「First Air Principles」如何影響無菌區域內人員的站位與移動方式？

            

        

    

8.2 Qualification Level 2 資格確認等級二

    

        

## 原文內容 Original Text

        

Qualification Level 2 (L-2) builds upon the foundational training of Qualification L-1, enabling personnel to perform less critical activities while still under supervision within the cleanroom environment. Training at this level includes role-specific on-the-job training (OJT) while working under direct supervision and with guided practice towards a specific set of technical skills, accompanied by performance feedback to ensure gradual skill development. Competency-based assessments focus on practical demonstrations of assigned activities, including water or media trials, and are designed to evaluate the trainee's ability to perform tasks accurately and consistently while maintaining proper aseptic technique. Additionally, gowning qualification is reassessed post-activity for further assurance of cleanliness and aseptic standards. This stage of qualification ensures that personnel can contribute to cleanroom operations under supervision while gaining the experience and competence required for more advanced responsibilities.

    

    

        

## 導師解析 Tutorial Commentary

        

            

#### 核心概念解析 Key Concepts

            

**Level 2 — 在監督下實際操作：**L-2 是從「知識」過渡到「實踐」的關鍵階段。人員在直接監督下執行較低風險的任務，同時接受即時的績效回饋。

            

**On-the-Job Training, OJT (在職訓練)：**不再是課堂教學，而是在實際無菌環境中、針對特定角色的技能培訓。這是「做中學」的核心理念。

            

**Water or Media Trials (水試或培養基試驗)：**在不使用實際藥品的情況下，用水或培養基模擬真實操作，評估人員的無菌操作技術。這是一種低風險的能力驗證方式。

        

        

            

#### 比喻說明 Analogy

            

Level 2 相當於駕訓班的「路考練習階段」——你已經通過筆試，現在教練坐在旁邊，帶你在真實道路上練習。你可以轉彎、變換車道（執行較低風險的任務），但教練隨時可以介入（直接監督）。每次練習結束後，教練會給你回饋，並記錄你的表現。你不能載客（獨立執行關鍵操作），但每次練習都在累積你的實戰經驗。

        

        

            

#### 重點提示 Key Notes

            

**活動後重新評估更衣：**這是 L-2 特別強調的要點。人員在執行操作「之後」需要再次評估更衣狀態，這是因為實際操作過程中的動作可能破壞無菌衣的完整性。這不僅是技術評估，更是行為評估——觀察人員是否在操作過程中維持了正確的無菌行為。

            

**「一致性」比「偶爾做對」重要：**評估重點在於人員能否「準確且一致地」(accurately and consistently) 執行任務。偶爾一次完美表現不夠，必須展現可重複的能力。

        

        

            

#### 練習思考 Practice Questions

            

                
1. 為什麼 L-2 要在操作「之後」重新評估更衣資格，而不僅是在進入無菌區域時評估？

                
2. Water trial 和 media trial 在人員資格確認中各有什麼優缺點？

            

        

    

8.3 Qualification Level 3 資格確認等級三

    

        

## 原文內容 Original Text

        

Qualification Level 3 (L-3) represents the advanced stage of personnel training and qualification, preparing individuals to independently perform critical aseptic procedures and interventions with minimal supervision. This stage builds upon the foundational and intermediate qualification levels (Qualification L-1 and L-2) and focuses on mastering high-risk tasks that need specific skills to operate. Training at this level includes role-specific, hands-on activities designed to develop competence in executing critical interventions, such as aseptic connections, equipment setup, and/or manual aseptic manipulations. Personnel are required to participate in simulated trials, such as water fills, that mimic actual production conditions. These simulations, combined with regular feedback from supervisors, enable personnel to refine their technique and bolster confidence. The qualification process at this stage involves demonstrating consistent compliance with aseptic behavior, positive trends in personnel monitoring results, and finally successful participation in an APS run in which all personnel perform the same roles as required in routine production. Qualification L-3 ensures employees are fully equipped to operate independently in high-risk aseptic environments.

    

    

        

## 導師解析 Tutorial Commentary

        

            

#### 核心概念解析 Key Concepts

            

**Level 3 — 獨立操作的最高資格：**L-3 是無菌操作人員的「畢業考」。通過此等級意味著人員可以在最低限度監督下獨立執行關鍵無菌操作。

            

**三重驗證標準：**L-3 的資格確認要求同時滿足三個條件：

            

                
- **行為一致性：**持續展現符合無菌要求的行為模式

                
- **監測趨勢正向：**人員環境監測結果呈現正向趨勢（即微生物回收量穩定且低）

                
- **APS 成功參與：**在 APS 中執行與日常生產完全相同的角色並取得成功結果

            

            

**Aseptic Connections (無菌連接)：**例如將無菌管路連接到充填設備，這是最具挑戰性的手動操作之一，因為需要在開放環境中短暫暴露無菌表面。

        

        

            

#### 比喻說明 Analogy

            

Level 3 就像飛行員取得正式飛行執照——你已經累積了足夠的飛行時數（L-1 和 L-2 的經驗），通過了模擬飛行考試（water fills），你的飛行紀錄顯示穩定的表現趨勢（人員監測），最後你必須在考官面前完成一次完整的飛行任務（APS）。只有全部通過，你才能獨立載客飛行。

        

        

            

#### 重點提示 Key Notes

            

**APS 是最終的資格門檻：**TR22 明確要求 L-3 人員必須「成功參與 APS」才能獲得最終資格。這意味著 APS 不僅是製程驗證工具，也是人員資格確認的組成部分。如果 APS 失敗，即使個人表現完美，資格確認流程也需要重新評估。

            

**「相同角色」要求：**人員在 APS 中必須執行與日常生產「完全相同」的角色。不能在 APS 中只做簡單工作，然後在正式生產中執行複雜操作。這確保了 APS 結果真正反映人員在實際生產中的表現。

        

        

            

#### 實務應用 Practical Application

            

對 CDMO 而言，L-3 資格確認是人力資源規劃的關鍵瓶頸。培養一位 L-3 合格人員可能需要數月時間（從 L-1 到 L-3），且必須等到下一次 APS 才能完成最終確認。因此，CDMO 應提前規劃人員培訓管線 (training pipeline)，確保在業務擴張或人員流動時有足夠的合格人員儲備。人員短缺可能導致被迫延後生產排程，直接影響收入。

        

        

            

#### 練習思考 Practice Questions

            

                
1. 如果一位 L-3 候選人在 APS 中執行了所有操作且個人表現完美，但該次 APS 結果出現陽性單位（原因與該人員無關），該人員的 L-3 資格是否應該被授予？為什麼？

                
2. 為什麼 TR22 要求同時滿足「行為一致性」、「監測趨勢」和「APS 成功」三個條件，而不是只要其中一個？

            

        

    

8.4 Ongoing Qualification 持續資格確認

    

        

## 原文內容 Original Text

        

Ongoing Qualification (at least annually) is a critical component that confirms maintenance of competence and readiness of personnel working in aseptic environments. It ensures that aseptic processing personnel continue to meet the high standards required for contamination control and sterility assurance. Regular refresher training sessions are essential to reinforce fundamental aseptic techniques, contamination control principles, and current regulatory requirements. Additionally, ongoing performance evaluations and feedback from supervisors and aseptic observers help identify and address any skill gaps. The assessment component of ongoing qualification involves analyzing personnel monitoring trends to identify abnormalities, determining root causes, and implementing corrective actions, as well as regular participation in APSs to ensure continued proficiency in critical aseptic techniques under production conditions. A structured ongoing qualification program ensures that aseptic processing personnel remain proficient, reliable, and compliant and contribute to product quality and patient safety.

    

    

        

## 導師解析 Tutorial Commentary

        

            

#### 核心概念解析 Key Concepts

            

**Ongoing Qualification (持續資格確認)：**資格確認不是一次性事件——即使獲得 L-3 資格後，人員仍需至少每年重新確認其能力。這反映了一個核心理念：人的表現會隨時間而變化，好的習慣可能退化，新的要求可能出現。

            

**Aseptic Observers (無菌觀察員)：**專門負責觀察和評估無菌操作行為的角色。他們的回饋是持續資格確認的重要數據來源，能捕捉到常規監測可能遺漏的行為偏差。

            

**Personnel Monitoring Trends (人員監測趨勢)：**不僅看單次結果，更要分析長期趨勢。例如，一位人員的微生物回收量雖然每次都在限度內，但如果呈上升趨勢，這是一個需要調查的異常信號。

        

        

            

#### 比喻說明 Analogy

            

持續資格確認就像職業飛行員的年度體檢和模擬器覆訓——即使你已經有二十年飛行經驗，每年仍然必須通過體能檢查（人員監測趨勢）、接受最新法規更新（refresher training），並在模擬器中完成緊急情況處理（APS 參與）。這不是質疑你的能力，而是確保你始終處於最佳狀態。任何航空公司都不會讓一位跳過年度覆訓的飛行員駕駛飛機——同樣的道理適用於無菌製造。

        

        

            

#### 重點提示 Key Notes

            

**「至少每年」是最低頻率：**TR22 明確指出持續資格確認應「至少每年」(at least annually) 進行。對於高風險操作或有不良趨勢的人員，頻率可能需要更高。

            

**趨勢分析優於單點數據：**持續資格確認的精髓在於趨勢分析，而不是單次合格/不合格的判定。這與 Contamination Control Strategy (CCS) 的理念完全一致——從數據趨勢中發現系統性問題，而不是等到單次失敗才反應。

        

        

            

#### 練習思考 Practice Questions

            

                
1. 一位 L-3 人員已經三年沒有參與 APS（因為他被調到其他產線），現在要回到原產線。需要什麼樣的重新資格確認？

                
2. 如果人員監測趨勢顯示某位操作員的微生物回收量在過去六個月內逐漸上升（但仍在限度內），應該採取什麼行動？

            

        

    

9.0 Aseptic Processing Simulation Acceptance Criteria 無菌製程模擬接受標準

    

        

## 原文內容 Original Text

        

The acceptance criteria for the number of positives in any APS should be zero, regardless of the number of units filled during the APS. Meeting the acceptance criteria alone does not definitively validate the acceptability of the aseptic process: a comprehensive evaluation of the design of the process, the robustness of the controls, and its continuous monitoring are necessary to ensure the process suitability to prevent product contamination.

        

Failure to meet the acceptance criteria requires a thorough documented investigation to determine the cause of the positive unit(s), and what steps should be taken to address the cause (see Section 10.0). However, if the outcome of the investigation concludes that the root cause is unrelated to the aseptic process being simulated, the result may be acceptable.

        

Failure to identify the cause of the positive unit(s) does not mean that the aseptic process is acceptable; in this case, a most probable root cause(s) should be identified and addressed before repeating the APS run, with considerations for impact on the production batches manufactured prior to the APS (see Section 10.0 for details).

    

    

        

## 導師解析 Tutorial Commentary

        

            

#### 核心概念解析 Key Concepts

            

**Zero Positive Acceptance Criteria (零陽性接受標準)：**這是 APS 最核心也最嚴格的要求——無論充填了多少單位（5,000 或 50,000），陽性單位數必須為零。這個標準反映了無菌製程的本質：不存在「可接受的污染率」。

            

**重要澄清——零陽性 ≠ 製程合格：**TR22 特別強調，即使 APS 達到零陽性，也不能單獨據此判定無菌製程合格。必須同時評估製程設計、控制措施的穩健性以及持續監測結果。APS 只是整體無菌保證體系的一部分。

            

**Root Cause vs. Most Probable Root Cause：**如果無法找到確切的根本原因 (root cause)，必須至少識別最可能的根本原因 (most probable root cause) 並加以處理。「找不到原因」不等於「沒有問題」。

        

        

            

#### 比喻說明 Analogy

            

想像一座核電廠的安全演練：接受標準是「零失敗」——不存在「允許一個反應爐輕微失控」的概念。但即使演練結果完美，也不代表核電廠絕對安全——你還需要檢查設備維護紀錄、操作程序、監控系統是否都正常運作。同樣地，APS 零陽性只是「必要條件」而非「充分條件」，完整的無菌保證需要整個 Contamination Control Strategy (CCS) 的支撐。

        

        

            

#### 重點提示 Key Notes

            

**調查結論的三種情境：**

            

                
- **情境 1：**找到根本原因且與無菌製程相關 → 必須實施 CAPA 並重新執行 APS

                
- **情境 2：**找到根本原因但與無菌製程無關（如實驗室污染）→ 結果可能可以被接受

                
- **情境 3：**找不到確切根本原因 → 必須識別最可能原因、實施 CAPA、評估對先前批次的影響，然後重新執行 APS

            

            

**對先前批次的影響：**情境 3 特別棘手——如果 APS 失敗且無法確定原因，必須回顧評估在此 APS 之前製造的所有批次，這可能導致產品召回風險。

        

        

            

#### 實務應用 Practical Application

            

對 CDMO 而言，APS 失敗的商業影響遠超技術層面：

            

                
- 必須暫停所有可能受影響的產品出貨

                
- 客戶可能要求額外的無菌測試或製程重新驗證

                
- 如果需要評估先前批次的影響，可能涉及產品召回

                
- 重新執行 APS 意味著額外的排程、材料和人力成本

                
- 頻繁的 APS 失敗會嚴重損害 CDMO 的市場聲譽

            

            

因此，預防 APS 失敗的投資（如人員培訓、設備維護、環境監測升級）幾乎總是比事後處理更具成本效益。

        

        

            

#### 練習思考 Practice Questions

            

                
1. 為什麼 TR22 強調「零陽性不等於製程合格」？請舉一個零陽性但製程仍有問題的假設情境。

                
2. 如果 APS 出現一個陽性單位，調查發現原因是實驗室培養箱溫度異常導致的假陽性，這個 APS 結果應該如何處理？

            

        

    

9.1 Recommendations 建議事項

    

        

## 原文內容 Original Text

        

In addition to the zero positive units acceptance criteria, several other factors should be taken into consideration when considering the overall suitability/success of an APS (25). These factors can include:

        

            
- First consideration is product and patient safety. Hold all potentially impacted product and evaluate the need for a recall based on the outcome of the investigation.

            
- Consideration should be given to the use of proper aseptic behavior and/or technique as part of the overall assessment of the suitability of the APS.

            
- APS should run as intended and follow the requirements specified in the APS protocol or procedure and should simulate the process as closely as practical.

            
- Aseptic process should run as intended, with any deviations and excursions investigated and resolved, including observation of unacceptable aseptic behavior or technique.

            
- Media should be shown to support anticipated levels of microbiological growth.

            
- Rationale for the APS study procedure, limits, and worst-case conditions should be justified, documented, and based on assessments of the relative risks to the aseptic process.

            
- The investigation must determine one or more root or plausible causes of the positive unit(s). It is not sufficient to continue performing APS runs without determination and correction of the cause of the failed APS.

            
- Following the investigation, corrective and preventive actions (CAPA) should be determined and implemented to eliminate the cause or potential causes.

            
- The investigation, conclusion, and CAPAs required to eliminate the cause of the contamination should be supported by scientific evaluation and risk assessment.

        

    

    

        

## 導師解析 Tutorial Commentary

        

            

#### 核心概念解析 Key Concepts

            

**APS 成功 = 零陽性 + 整體適切性：**9.1 節提供了評估 APS 整體成功的完整框架。零陽性只是最低門檻；真正的「成功」需要考量多維度因素。

            

**「產品與患者安全」是第一優先：**TR22 將此列為第一個考量因素——當 APS 失敗時，第一個動作不是去調查原因，而是立即扣留所有可能受影響的產品並評估召回需求。這完美體現了決策層級：無菌保證 (Sterility Assurance) 永遠是第一位。

            

**CAPA (矯正與預防措施)：**不能「重複做 APS 直到通過」——這是 TR22 明確禁止的做法。每次失敗都必須有實質性的原因調查和改正措施，然後才能重新執行。

        

        

            

#### 比喻說明 Analogy

            

想像一家航空公司的飛行安全評估：即使一架飛機成功完成了所有航班（零事故），這不代表可以忽略其他安全指標——維修紀錄是否完整？機組人員是否遵循標準程序？天氣偏差是否被妥善處理？是否有乘客投訴安全相關問題？同樣地，APS 的「零陽性」只是及格線，你還需要確保整個過程都是按照預定方式執行的，任何偏差都被妥善調查，所有人員都展現了正確的無菌操作行為。

        

        

            

#### 重點提示 Key Notes

            

**禁止「盲目重做」：**「It is not sufficient to continue performing APS runs without determination and correction of the cause of the failed APS.」這句話是 TR22 最重要的聲明之一。在實務中，某些企業傾向於在 APS 失敗後直接重做，希望下一次能通過——TR22 明確表示這是不可接受的。每次失敗都是一個必須被解決的信號。

            

**科學評估與風險評估的支撐：**調查結論和 CAPA 不能是「我們覺得可能是這個原因」——必須有科學數據和風險評估作為支撐。這將調查品質提升到了與正式驗證活動相同的標準。

        

        

            

#### 實務應用 Practical Application

            

對 CDMO 而言，建立一套完善的 APS 失敗回應流程 (APS Failure Response Procedure) 是至關重要的。建議包含以下要素：

            

                
- **即時回應（0-24小時）：**扣留受影響產品、通知客戶與法規事務團隊、保留所有 APS 證據

                
- **調查階段（1-4週）：**根本原因分析、微生物鑑定、環境數據回顧、人員操作回顧

                
- **矯正階段：**制定 CAPA、實施改善、驗證效果

                
- **重新執行：**完成所有 CAPA 後重新執行 APS、評估對先前批次的影響

            

        

        

            

#### 練習思考 Practice Questions

            

                
1. 如果一次 APS 中觀察到一位操作員的無菌操作技術不佳（例如遮擋了第一氣流），但最終結果為零陽性，這次 APS 應該被視為「成功」嗎？為什麼？

                
2. TR22 列出的九個評估因素中，哪些是「結果導向」的，哪些是「過程導向」的？為什麼兩者都重要？

                
3. 在 CDMO 環境中，APS 失敗後需要通知哪些利害關係人？各自關注的焦點是什麼？

            

        

    

    

### 本節重點回顧 Section Summary

    

        
- **分階段人員資格確認：**L-1（進入無菌區域的基礎資格）→ L-2（在監督下執行低風險操作）→ L-3（獨立執行關鍵無菌操作），每階段都包含訓練、練習、受監督執行與評估的完整循環

        
- **持續資格確認不可省略：**至少每年進行，包含複訓、績效評估、人員監測趨勢分析與 APS 參與，確保人員能力不退化

        
- **APS 接受標準 = 零陽性：**無論充填多少單位，陽性數必須為零，但零陽性僅為必要條件，非充分條件

        
- **APS 失敗處理的四個禁忌：**不可忽視失敗、不可盲目重做、不可省略調查、不可缺乏 CAPA 就重新執行

        
- **決策層級再次體現：**APS 失敗時，「產品與患者安全」永遠是第一優先——先扣留產品，後調查原因

        
- **科學化調查要求：**所有調查結論與 CAPA 必須有科學評估和風險評估的支撐，不能僅憑主觀判斷

    

 

    

PDA Technical Report No. 22 (Revised 2025) - Personnel Qualification & Acceptance Criteria

    

Educational Material for CDMO Professionals

↑

## Section 6: Lyophilization & References 凍乾與參考文獻 (p66-p70)

# Sections 10.0-12.0: Investigation, Ongoing Evaluation & References

    

調查考量、持續製程評估與參考文獻

    

PDA Technical Report No. 22 (Revised 2025) | p64 - p70

    

### 本章學習目標

    

        
- 了解 APS 失敗調查中應涵蓋的關鍵要素與調查範圍

        
- 掌握微生物鑑定在 APS 調查中的角色與回溯評估方法

        
- 理解持續性 APS 評估（時間驅動與事件驅動）的目的與頻率

        
- 認識 APS 調查報告應包含的必要內容

        
- 熟悉 TR22 引用的核心法規與 PDA 技術文件

    

    

### 本章節目錄

    

        10.0 Considerations for Investigation
        11.0 Ongoing Process Evaluation
        11.1 Role of APS
        11.2 Periodic Assessment
        11.3 Event-Driven Assessment
        11.4 Other Considerations
        12.0 References
    

10.0 Considerations for Investigation

    

        

## 原文內容 Original Text

        

Some key elements to include in the investigation for the presence of contaminated units in an APS are described below (21). Additional points to consider can be added, based on the knowledge of the manufacturing process in question:

        

            
- How far back to go to assess potential impact can depend on the individual circumstances surrounding the failure and the identified root cause. While it is common to look back to the previous successful APS, there are circumstances that can dictate a smaller or larger time frame for evaluation of potential impact. For example, if an APS failure is correlated to a mechanical malfunction of a specific piece of equipment, and the failure mode is easily detectable in routine maintenance, the time frame can be set to the previous maintenance event that demonstrated the equipment was operating within specification. Alternatively, if the failure is found to be due to an intermittent equipment fault, one that would not have been detected by maintenance or routine operation, it may be necessary to go back and evaluate all manufactured batches within expiry. In such a case, going back to the previous successful APS is not meaningful, as the fault was already determined to be intermittent and difficult to detect.

            
- When evaluating the potential impact on previously manufactured batches, not only must the time frame be defined, but also the scope. The fact that an APS failure occurred in a single line, for a specific process, does not immediately confine the evaluation of that line or process. For example, if the failure is attributed to an issue related to a lyophilizer, then it must be assumed that it could impact any product that was processed within that unit (regardless of in which line it was filled). Conversely, any products filled on the impacted line that did not utilize the lyophilizer would be excluded from potential impact. In each case, it is important to justify the time frame and the scope selected for the evaluation of impact to previous batches.

            
- A detailed history of the investigation should be maintained.

            
- When positive units are encountered, all possible sources of contamination should be investigated.
                

                    
    - All positive units should be identified at a minimum the species level (strain typing or similar is recommended). A comprehensive sampling and identification scheme is critical in the investigation and determination of the contaminant source. In cases of widespread contamination, it is not practical to identify each individual positive vial. Therefore, a statistically significant plan that is representative of the aseptic process is acceptable.

                    
    - The identification of the contaminating microorganism should be compared to the database of the microorganisms identified through the EM program (i.e., air viables, equipment surface, personnel).

                    
    - The mass spectroscopy/biochemical and/or genetic profile of the contaminating microorganisms should also be compared to that of microorganisms obtained from testing programs, including testing of sterility and bioburden (e.g., water, gases, raw materials, drug substance, drug product), as well as any prior APS recovery, to help identify the potential sources of the contaminant.

                    
    - Isolates should be checked for possible identification matches, especially from areas that exceed their limits or are trending upward.

                

            

            
- It is important not to limit the review to the immediate filling room; all airlocks and supporting areas should be included in the assessment. For this reason, it is helpful to retain any EM samples that exhibit growth until the incubation of the APS units is finalized. In addition, literature references describing possible sources of contaminating microorganisms may be helpful in locating the point of entry into the process.

            
- A batch-production record, similar to that for routine production, should exist for each APS.

            
- Deviations, downtimes, and repairs, before or during the filling, should be carefully evaluated.

            
- If available, a video recording of the APS should be carefully reviewed to identify any potential events that could have impacted the batch. If not, notes from APS observers can also yield information regarding unexpected circumstances or observed behavior that can be useful in narrowing down or eliminating potential root causes.

            
- Operations and quality assurance shop-floor personnel should be interviewed as soon as possible to determine if any unusual circumstances occurred.

            
- Maintaining traceability of APS containers, so they can be traced to approximate fill times and even bracket particular interventions, can be extremely useful during an APS failure investigation. Therefore, every effort should be made during any after-filling step (e.g., capping) and subsequent visual inspection to maintain the traceability of the container-filling order. It is important to note that the use of accumulator tables anywhere in the process can significantly impact container order, and that must be taken into account when attempting to set a time bracket for the event that could have led to the contamination.

            
- Filter integrity-testing results and all sterilization records associated with product components and equipment should be reviewed.

            
- Cleaning and sanitization records should be reviewed, including type of agent, formulation of the agent (if required), and when, where, and how it was used, ensuring contact time was met.

            
- Critical systems (e.g., HVAC, compressed air/gas, water, steam) should be reviewed for documented changes and requalification or acceptance criteria for those changes.

            
- Calibration records should be checked.

            
- HEPA filters in the filling area should be inspected and recertified, if warranted.

            
- Training and personnel qualification records for all individuals (e.g., production, maintenance, EM, cleaning) involved in the fill should be reviewed to identify any possible gaps.

            
- Change management and validation records related to the specific APS should be reviewed for any design, procedure, or process changes that have the potential to affect the aseptic process.

            
- All deviations from the original validation should have an associated justification for not performing a new validation. The justification for acceptance of initial or on-going validation deviations impacting the aseptic process should be reviewed.

            
- Based on the outcome of the investigation, an assignable plausible cause of the failure must be determined, and corrective action(s) need to be taken and documented. Where an assignable cause cannot be determined, the investigation should continue until one or more plausible causes can be determined. The aseptic process should not proceed without a cause assigned and corrected.

            
- Observers should be periodically observing routine operations, as well as APS. These observers should have specific expertise in aseptic processing and knowledge of the APS procedure to assess whether participants have used proper aseptic practices, behave as required and executed activities according to standard operating procedures, batch records, and protocols. Any inappropriate practices, if detected, should be addressed.

            
- If an APS fails, potential batch impact to previously manufactured batches must be evaluated, as well as any that may have been manufactured after the APS.

        

        

### Investigation Report Contents

        

The investigation report should contain:

        

            
- Summary of the occurrence

            
- List of all the systems investigated, not just those tied to the failure, along with a conclusion regarding whether the system contributed to the failure (with supporting documentation in each case)

            
- Identify the microorganisms to at a minimum the species level (strain typing or equivalent is recommended). Nature of the microorganism(s) identified and any relevant factors with regards to the microorganism(s) (e.g., whether it is a waterborne microorganism or a spore former)

            
- Conclusion as to root cause(s) and supporting documentation (if discovered) from an investigation completed in a timely fashion

            
- Potential impact on previous batches produced (justifying the scope and time frame for the review)

            
- Corrective action(s) taken and supporting documentation

            
- Justification for the number of additional APS to be completed after appropriate CAPA completion

            
- Outcome of additional APSs, if performed

            
- Assess the need for regulatory notification

            
- Appropriate signatures of the investigators of the individual systems and, at a minimum, the Production and Quality Units

        

        

This list is not intended to be all-inclusive. Additional elements may need to be added depending on the process. If the investigation determines that the cause of the contamination is not related to the performance of the aseptic process, for example, the contaminated units are a result of laboratory error or the use of nonsterile media, then the aseptic process has not been determined to be unacceptable. However, the APS run should be considered invalidated and replaced with a single APS.

    

    

        

## 導師解析 Tutorial Commentary

        

            

#### 核心概念解析 Key Concepts

            

**Root Cause (根本原因)：**導致 APS 失敗的最底層原因。TR22 強調，調查不能只停留在「表面原因」（例如「瓶子有菌」），必須追溯到可歸因的合理原因（Assignable Plausible Cause）。如果找不到明確根本原因，製程不得繼續運作。

            

**Scope & Time Frame (範圍與時間框架)：**回溯評估不是固定「追溯到上次成功 APS」就好。如果失敗原因是間歇性設備故障（不易被例行維護偵測），可能需要回溯所有效期內的生產批次。範圍也不侷限於單一產線 — 若問題出在冷凍乾燥機，則使用該設備的所有產品都可能受影響。

            

**Species-Level Identification (物種層級鑑定)：**所有陽性單元必須至少鑑定到物種層級，建議進行菌株分型（Strain Typing）。這些鑑定結果要與 EM 資料庫、無菌試驗、生物負荷檢測等來源進行比對，以追蹤污染來源。

        

        

            

#### 比喻說明 Analogy

            

APS 失敗調查就像**飛安事故調查**：不能只看墜機現場（陽性瓶子），還要回溯航班紀錄（批次紀錄）、檢查飛機維修歷史（設備維護）、訪談機組人員（操作員面談）、調閱黑盒子（錄影回顧）、審查天氣與航路（環境監測數據）。每一條線索都可能指向不同的根因，且必須同時排除所有非相關因素，才能確認真正的根本原因。

        

        

            

#### 重點提示 Key Notes

            

**不能在沒有歸因的情況下恢復生產：**TR22 明確要求「The aseptic process should not proceed without a cause assigned and corrected」。這是一個非常嚴格的立場 — 在實務中，有些公司可能傾向在調查未完成時就恢復生產，但這違反了本指引的精神。

            

**累積桌（Accumulator Table）會打亂瓶子順序：**這個細節非常實用。如果充填線上有累積桌，瓶子的順序會被打亂，使得「時間區間定位」變得困難。因此在 APS 設計時就要考慮如何維持容器的可追溯性。

            

**法規通報評估：**調查報告中必須評估是否需要進行法規通報。對 CDMO 而言，這不僅涉及自身的法規義務，也可能影響客戶的上市許可與場地變更通知。

        

        

            

#### 調查報告要素清單 Investigation Report Checklist

            

TR22 列出的調查報告必要內容可以歸納為以下幾個維度：

            

                
- **事件描述：**事件摘要

                
- **全面調查：**所有系統的調查結論（不僅限於與失敗相關的）

                
- **微生物鑑定：**物種層級 + 菌株特徵

                
- **根因分析：**結論與支持文件

                
- **影響評估：**對先前批次的潛在影響

                
- **矯正措施：**CAPA 及其文件

                
- **後續 APS：**額外 APS 次數的理由與結果

                
- **法規面：**是否需要法規通報

                
- **簽核：**調查人員及生產/品質單位簽名

            

        

        

            

#### 實務應用 Practical Application

            

**CDMO 情境：**假設你的 CDMO 在 A 線進行冷凍乾燥產品的 APS 時發現 2 個陽性瓶。調查發現污染菌為水源性微生物，且該菌株與冷凍乾燥機 #2 的冷凝器 EM 樣本匹配。此時你的回溯範圍不應限於 A 線，而是所有使用冷凍乾燥機 #2 的產品（包括 B 線、C 線充填後送至該設備的批次）。時間框架則取決於冷凝器上次清潔驗證通過的時間點。

        

        

            

#### 練習思考 Practice Questions

            

                
1. 為什麼 TR22 強調調查範圍不能僅限於發生失敗的那條充填線？請用冷凍乾燥機的例子說明。

                
2. 在什麼情況下，回溯時間不能只追溯到上次成功的 APS？

                
3. 如果 APS 調查確定污染是由非無菌培養基引起的，這算是 APS 失敗嗎？後續應如何處理？

                
4. 累積桌如何影響 APS 失敗調查中的「時間區間定位」？CDMO 可以採取哪些措施來降低這個風險？

            

        

    

11.0 The Use of Aseptic Process Simulation in Ongoing Process Evaluation

    

        

## 原文內容 Original Text

        

The aseptic process should be evaluated on an ongoing basis to determine if:

        

            
- The state of control for all processes and systems that impact aseptic processing has been maintained since the last assessment.

            
- Changes to or variations in the aseptic process have not adversely affected the ability of the aseptic process to prevent microbiological contamination of sterile product.

        

    

    

        

## 導師解析 Tutorial Commentary

        

            

#### 核心概念解析 Key Concepts

            

**Ongoing Process Evaluation (持續製程評估)：**無菌製程不是一次驗證就永遠有效的。TR22 強調必須持續評估兩件事：(1) 控制狀態是否維持，(2) 任何變更是否影響了無菌保證能力。這與 FDA 的 Process Validation Lifecycle（製程驗證生命週期）概念一致 — 持續的監測與再確認是確保無菌性的基礎。

        

    

11.1 The Role of Aseptic Process Simulation in Ongoing Process Evaluation

    

        

## 原文內容 Original Text

        

The performance of ongoing APS studies, in addition to periodic requalification tests, is used to help demonstrate that the aseptic process remains in a state of control. Each firm should determine the frequency of and the interval between ongoing APS for each process including consideration of regulatory requirements, additional risk-based assessments, processing-line controls, and performance, including:

        

            
- Changes to the process

            
- EM data (including utility systems, facility systems, and personnel)

            
- Sterility-test data (including increases or changes to prefiltration bioburden)

            
- Sterilization validation data

            
- Process-related failure and deviation investigations

            
- Updated risk assessments

            
- CCS

        

    

    

        

## 導師解析 Tutorial Commentary

        

            

#### 核心概念解析 Key Concepts

            

**State of Control (受控狀態)：**指無菌製程中所有關鍵系統（環境、設備、人員、物料）持續維持在驗證過的條件範圍內。APS 是驗證「受控狀態」的最終整合測試 — 如果 APS 通過，代表整個系統仍在控制中。

            

**CCS (Contamination Control Strategy, 污染控制策略)：**EU Annex 1 要求的綜合性文件，整合所有與污染控制相關的措施。APS 的頻率和範圍應與 CCS 的更新保持一致。可參考 PDA TR90 了解 CCS 的詳細開發方法。

        

        

            

#### 比喻說明 Analogy

            

持續性 APS 就像**汽車的定期保養與年檢**：即使車子每天都正常運作，你仍然需要定期做全面檢查（定期 APS）。如果中間發生了事故或更換了重要零件（事件驅動 APS），則需要額外的檢查來確認修復後的車子仍然安全。光靠日常目測（EM 監測）不夠，還需要上路測試（APS）來驗證整體性能。

        

        

            

#### 重點提示 Key Notes

            

TR22 列出的七項考量因素，本質上是在評估**「自上次 APS 以來，有什麼變了？」**：

            

                
- 製程變更 → 是否有新的風險引入？

                
- EM 數據趨勢 → 環境控制是否劣化？

                
- 無菌試驗數據 → 是否有微生物負荷升高的跡象？

                
- 滅菌確效數據 → 滅菌能力是否仍然充分？

                
- 偏差調查 → 是否有系統性問題浮現？

                
- 風險評估更新 → 是否有新識別的風險？

                
- CCS 更新 → 整體污染控制策略是否仍然適當？

            

        

    

11.2 Periodic (Time-Driven) Ongoing Aseptic Process Simulation Assessment

    

        

## 原文內容 Original Text

        

Regardless of any events that could result in the need for the performance of an event-driven APS, a semiannual interval (twice per year, approximately every six months) between APSs should be performed to help determine if process variables have adversely affected the ability of the aseptic process to control or prevent microbiological contamination. The periodic APS time-interval range and criteria and the response for any time-interval deviation should be risk-based and defined in a procedure. If no process changes are noted and unless there is evidence or reason to the contrary, a single APS run should be sufficient.

    

    

        

## 導師解析 Tutorial Commentary

        

            

#### 核心概念解析 Key Concepts

            

**Semiannual Interval (半年一次)：**這是業界標準的定期 APS 頻率，與 FDA 指引和 EU Annex 1 的要求一致。「大約每六個月」意味著有一定的彈性，但企業應在 SOP 中定義允許的時間區間範圍及超出時的應對措施。

            

**Single APS Run (單次 APS 執行)：**如果自上次 APS 以來沒有製程變更且沒有其他異常跡象，定期評估只需執行一次 APS 即可。這與初始驗證（通常需要三次）不同。

        

        

            

#### 重點提示 Key Notes

            

**時間區間偏差（Time-Interval Deviation）：**如果因為排程困難或其他原因導致定期 APS 未能在預定時間內完成，這本身就是一個偏差，需要記錄和評估風險。對 CDMO 而言，管理多條產線、多種產品的 APS 排程是一項重要的後勤挑戰。

        

        

            

#### 公式與計算 Formula

            

**CDMO 年度 APS 排程估算：**

            

```

假設 CDMO 有 3 條無菌充填線，每線有 2 種充填設定：
  每線每半年 1 次 APS = 3 線 x 2 次/年 = 6 次 APS/年（最低）
  若含人員再驗證 APS = 額外考量新進/輪調人員
  若有事件驅動 APS = 視偏差與變更數量而定

  典型 CDMO 每年可能需要 10-20 次 APS
  每次 APS 成本（培養基 + 人力 + 停線）≈ USD 15,000-50,000
  年度 APS 預算 ≈ USD 150,000-1,000,000
            
```

        

    

11.3 Event-Driven and For-Cause Ongoing Aseptic Process Simulation Assessment

    

        

## 原文內容 Original Text

        

The APS for ongoing evaluation should not be strictly driven by time. Performance of APSs prior to or in addition to the scheduled reassessment may be necessary following a process change or other event of such scope that previous simulation studies would no longer be representative or applicable, or where such events are assessed to add risk to the process. The criteria for performing event-driven APS runs should be documented in a procedure, typically part of the change-control system, including what types of changes, the extent of those changes, and the activities that necessitate the run. Examples of events that may result in additional APS studies (whether to complete validation of the changes or to confirm effectiveness of implemented corrective action) include those associated with:

        

            
- Changes to process or process controls and facility or equipment

            
- Extensive maintenance events or equipment modifications (including improvements)

            
- Before and/or after a facility shutdown, as warranted

            
- After extended periods of inactivity

            
- Prior to decommissioning or relocating a line

            
- Following APS or other process-performance failures, significant deviations, or excursions

        

        

In such cases, the number of APSs may vary, depending upon the extent of the event.

    

    

        

## 導師解析 Tutorial Commentary

        

            

#### 核心概念解析 Key Concepts

            

**Event-Driven APS (事件驅動 APS)：**與定期（時間驅動）APS 互補的另一種觸發機制。當製程發生重大變更或異常事件時，即使尚未到達半年的定期排程，也需要執行額外的 APS。這個觸發機制應整合在企業的變更管制系統（Change Control System）中。

        

        

            

#### 比喻說明 Analogy

            

定期 APS 和事件驅動 APS 的關係就像**定期健康檢查**和**因症就醫**：你每年都會做一次全身健檢（定期 APS），但如果中間突然出現異常症狀（設備故障、重大偏差），你不會等到下次年檢才去看醫生 — 你會立即就醫（事件驅動 APS）。兩者缺一不可。

        

        

            

#### 重點提示 Key Notes

            

**設施停機與長期閒置：**這兩項是 CDMO 特別需要注意的觸發因素。CDMO 的產線利用率可能不均勻 — 某條線可能因為客戶訂單排程而閒置數月。在重新啟用前，需要評估是否需要事件驅動 APS。

            

**產線搬遷或退役前：**在 decommissioning 或 relocating 之前執行 APS，目的是確認產線在最後運作期間仍處於受控狀態，這對於已出廠產品的品質保證至關重要。

            

**APS 次數依事件規模而定：**小型變更可能只需 1 次 APS，但如果涉及重大設備更換或設施改造，可能需要回到初始驗證的標準（3 次）。

        

        

            

#### 練習思考 Practice Questions

            

                
1. 你的 CDMO 有一條充填線因為客戶暫停專案而閒置了 4 個月。在恢復生產前，需要做哪些評估來決定是否需要事件驅動 APS？

                
2. TR22 提到 APS 次數「may vary, depending upon the extent of the event」。在你的變更管制 SOP 中，你會如何分級不同類型的變更以決定所需的 APS 次數？

                
3. 為什麼在產線退役前也需要執行 APS？這對已出廠的產品有什麼意義？

            

        

    

11.4 Other Considerations

    

        

## 原文內容 Original Text

        

There may be several different permutations of a filling process that take place on a given filling line. For example, if a risk assessment indicates that a bracket approach of given process aspects (e.g., speeds, container configurations, etc.) is warranted, then the inclusion of different bracketed processes or component configurations or system parts may be periodically included in APS runs. This approach may not be applicable to dissimilar equipment and systems (e.g., displacement pumps and peristaltic pumps). In such cases, one approach may be to perform APSs for these processes on a rotational basis, with each process challenged at least annually. Depending upon individual circumstances, however, more frequent APSs may be necessary. The rationale for the rotation or alternation of different permutations should be documented in the overall APS approach of the company or site, for example, in the Site Validation Master Plan.

    

    

        

## 導師解析 Tutorial Commentary

        

            

#### 核心概念解析 Key Concepts

            

**Bracket Approach (括弧法)：**當同一條充填線有多種充填設定（不同速度、不同容器尺寸等），可以選擇極端條件（最大與最小）進行 APS，以涵蓋中間的所有組合。但此方法僅適用於參數之間有連續性關係的情況。

            

**Rotational Basis (輪替基礎)：**對於不適用括弧法的情況（例如完全不同的充填泵類型），可以採用輪替方式 — 每次定期 APS 涵蓋不同的製程組合，但每種組合至少每年挑戰一次。

            

**Site Validation Master Plan (場地驗證總計畫)：**輪替或括弧策略的理由必須記錄在場地層級的文件中，確保整體 APS 策略是有系統、有依據的，而不是隨意安排。

        

        

            

#### 比喻說明 Analogy

            

括弧法就像**測試手機電池壽命**：你不需要在每一種使用模式下都測試，只要測試「最耗電模式」和「最省電模式」即可推論中間所有使用情境的表現。但如果你要測試的是 iPhone 和 Android 手機，它們是完全不同的系統，你不能用括弧法 — 必須各自獨立測試（輪替法）。

        

        

            

#### 重點提示 Key Notes

            

**CDMO 挑戰：**CDMO 通常在同一條線上執行大量不同的產品/容器/速度組合。管理所有組合的 APS 覆蓋率是一項複雜的後勤工作。建議建立一個**矩陣表**，明確記錄哪些組合已透過 APS 驗證、哪些是透過括弧法覆蓋、哪些在輪替計畫中。這個矩陣應納入 Site Validation Master Plan。

        

        

            

#### 實務應用 Practical Application

            

**情境：**你的 CDMO A 線可以充填 2mL 小瓶（20,000 瓶/小時）和 20mL 大瓶（5,000 瓶/小時），使用同一款蠕動泵。此外，A 線也可以切換為旋轉活塞泵來充填高黏度懸浮液。

            

**策略建議：**

            

                
- 2mL 與 20mL 瓶子（同款泵）：可採用**括弧法**，交替在定期 APS 中測試

                
- 蠕動泵 vs 旋轉活塞泵：必須**各自獨立驗證**，採用輪替方式確保每種至少每年一次

                
- 記錄在 Site Validation Master Plan 中，包含覆蓋率矩陣與輪替排程

            

        

    

12.0 References

    

        

## 原文內容 Original Text

        

            
1. European Commission. *Annex 1: Manufacture of Sterile Medicinal Products*, EudraLex – Volume 4 – EU Guidelines for Good Manufacturing Practice for Medicinal Products for Human and Veterinary Use; European Commission: Brussels, 2022.

            
2. Parenteral Drug Association. *Technical Report No. 13-2: Fundamentals of an Environmental Monitoring Program Annex 1: Environmental Monitoring of Facilities Manufacturing Low Bioburden Products*; PDA: Bethesda, Md., 2020.

            
3. International Organization for Standardization. *ISO 14644-1:2015 Cleanrooms and Associated Controlled Environments — Part 1: Classification of air cleanliness by particle concentration*; ISO: Geneva, 2015.

            
4. U.S. Food and Drug Administration. *Guidance for Industry: Sterile Drug Products Produced by Aseptic Processing — Current Good Manufacturing Practice*; U.S. Department of Health and Human Services: Rockville, Md., 2004.

            
5. U.S. Food and Drug Administration. *Guidance for Industry: Process Validation: General Principles and Practices*; U.S. Department of Health and Human Services: Silver Spring, Md., 2011.

            
6. U.S. Food and Drug Administration. *Guidance for Industry: Quality Systems Approach to Pharmaceutical CGMP Regulations*; U.S. Department of Health and Human Services: Silver Spring, Md., 2006.

            
7. Parenteral Drug Association. *Technical Report No. 61: Steam In Place*; PDA: Bethesda, Md., 2013.

            
8. International Council for Harmonisation. *Quality Guideline Q9(R1): Quality Risk Management*; ICH: Geneva, 2023.

            
9. Parenteral Drug Association. *Technical Report No. 44: Quality Risk Management for Aseptic Processes*; PDA: Bethesda, Md., 2008.

            
10. Parenteral Drug Association. *Technical Report No. 54: Implementation of Quality Risk Management for Pharmaceutical and Biotechnology Manufacturing Operations*; PDA: Bethesda, Md., 2012.

            
11. Parenteral Drug Association. *ANSI/PDA Standard 03-2025: Standard Practice for Quality Risk Management of Aseptic Processes*; PDA: Bethesda, MD, 2025.

            
12. Baseman, H, et al. A Line of Sight Approach for Assessing Aseptic Processing Risk: Part III. *PDA Letter* 2016.

            
13. Parenteral Drug Association. *Points to Consider No. 1: Aseptic Processing (Revised 2023)*; PDA: Bethesda, Md., 2023.

            
14. Hamilton, D, et al. A Better Approach to Aseptic Process Simulation for Lyophilized Products. *Pharmaceutical Online* 2021.

            
15. Association, P D. *Points to Consider for Microbial Control in ATMP Manufacturing*; PDA: Bethesda, MD, 2022.

            
16. Parenteral Drug Association. *Technical Report No. 66: Application of Single-Use Systems in Pharmaceutical Manufacturing*; PDA: Bethesda, Md., 2014.

            
17. Prout, G, et al. The Use of Process Simulation Tests in the Evaluation of Processes for the Manufacture of Sterile Products: No. 4: Technical Monograph. The Parenteral Society: Brazil, 1993.

            
18. Parenteral Drug Association. *Technical Report No. 90: Contamination Control Strategy Development in Pharmaceutical Manufacturing*; PDA: Bethesda, Md., 2023.

            
19. Whyte, W; Eaton, T. Microbial Risk assessment in Pharmaceutical Cleanrooms. *Eur J Paren Pharm Sci* 2004, 9, 16-23.

            
20. U.S. Pharmacopeial Convention. General Chapter <71> Sterility Tests. In *USP 41–NF 36*, USP: Rockville, Md., 2018; p 5984.

            
21. Parenteral Drug Association. *Technical Report No. 88: Microbial Data Deviation Investigations in the Pharmaceutical Industry*; PDA: Bethesda, Md., 2022.

            
22. Parenteral Drug Association. *Technical Report No. 1 (Revised 2007): Validation of Moist Heat Sterilization Processes: Cycle Design, Development, Qualification and Ongoing Control*; PDA: Bethesda, Md., 2007.

            
23. Parenteral Drug Association. *Technical Report No. 26 (Revised 2025): Sterilizing Filtration of Liquids*; PDA: Bethesda, Md., 2025.

            
24. Parenteral Drug Association. *Technical Report No. 69: Bioburden and Biofilm Management in Pharmaceutical Manufacturing Operations*; PDA: Bethesda, Md., 2015.

        

    

    

        

## 導師解析 Tutorial Commentary

        

            

#### 核心概念解析 Key Concepts

            

**參考文獻架構：**TR22 的 24 篇參考文獻可依來源分為以下幾類，幫助你理解無菌製程模擬的知識脈絡：

            

                
- **法規指引（Ref 1, 4-6）：**EU Annex 1（2022 年修訂版）與 FDA 無菌製造指引是 APS 要求的法規基礎

                
- **風險管理（Ref 8-12）：**ICH Q9(R1)、PDA TR44、TR54 及 ANSI/PDA Standard 03-2025 構成了 APS 風險評估的方法論基礎

                
- **環境監測（Ref 2, 3）：**PDA TR13-2 與 ISO 14644-1 定義了無菌環境的監測與分類標準

                
- **滅菌與過濾（Ref 7, 22-24）：**涵蓋 SIP、濕熱滅菌、除菌過濾及生物負荷管理

                
- **污染控制（Ref 18, 21）：**PDA TR90（CCS 開發）和 TR88（微生物偏差調查）直接支持 APS 失敗調查

                
- **特殊應用（Ref 14-16）：**冷凍乾燥產品 APS、ATMP 微生物控制、一次性系統

            

        

        

            

#### 重點提示 Key Notes

            

**必讀文件優先順序（針對 CDMO 從業人員）：**

            

                
- 必讀 **Ref 1 — EU Annex 1 (2022)：**所有無菌製造的法規基石，APS 的章節要求已大幅更新

                
- 必讀 **Ref 4 — FDA Aseptic Processing Guidance (2004)：**雖然較早但仍是 FDA 現行指引，內含詳細的 APS 要求

                
- 重要 **Ref 18 — PDA TR90 (CCS)：**理解 APS 如何嵌入整體污染控制策略

                
- 重要 **Ref 8 — ICH Q9(R1)：**風險管理的通用框架，適用於 APS 設計與調查

                
- 重要 **Ref 21 — PDA TR88：**APS 失敗後的微生物偏差調查方法論

                
- 建議 **Ref 14：**冷凍乾燥 APS 的改良方法，對有 lyophilizer 的 CDMO 特別重要

            

        

        

            

#### 比喻說明 Analogy

            

TR22 的參考文獻就像一張**知識地圖**：法規指引（Annex 1、FDA Guidance）是**主幹道**，定義了你必須走的方向；PDA 技術報告是**地圖上的詳細街道圖**，告訴你具體怎麼走；ICH 指引是**交通規則**，定義了風險管理的通用原則；而學術文獻則是**當地居民的經驗分享**，提供實務洞見。

        

        

            

#### 交叉引用提示 Cross-References

            

以下 TR22 參考文獻中的報告，本知識庫已有對應的教育材料：

            

                
- **Ref 18 — PDA TR90：**污染控制策略開發 → 可在本知識庫中查閱完整解析

                
- **Ref 23 — PDA TR26：**除菌過濾 → 可在本知識庫中查閱完整解析

            

            

建議在學習 TR22 後，搭配閱讀 TR90（CCS）和 TR26（除菌過濾），以建立更完整的無菌製造知識體系。

        

        

            

#### 練習思考 Practice Questions

            

                
1. EU Annex 1 (2022) 相較於 FDA 2004 年的指引，在 APS 要求上有哪些主要的差異與更新？

                
2. 為什麼 TR22 同時引用了 ICH Q9(R1)、PDA TR44 和 PDA TR54 三份風險管理文件？它們各自的側重點是什麼？

                
3. 作為 CDMO 的品質主管，你會如何利用 TR88（微生物偏差調查）來強化你的 APS 失敗調查程序？

            

        

    

    

### 本節重點回顧 Section Summary

    

        
- **APS 失敗調查必須全面且系統化：**涵蓋微生物鑑定、EM 數據比對、設備維護記錄、人員訪談、影像回顧、滅菌紀錄、清潔消毒紀錄等多個維度，並且不能在未確定可歸因原因之前恢復生產

        
- **回溯評估的範圍與時間框架必須有依據：**不能機械式地「追溯到上次成功 APS」，而要根據失敗原因的性質來決定。間歇性故障可能需要回溯所有效期內批次；共用設備問題可能影響多條產線

        
- **持續性 APS 分為時間驅動與事件驅動兩種：**時間驅動為半年一次（單次即可），事件驅動則在重大變更、設施停機、長期閒置、APS 失敗後額外執行，次數依事件規模而定

        
- **多種製程組合可透過括弧法或輪替法管理 APS 覆蓋率：**但前提是策略有文件依據，記錄在 Site Validation Master Plan 中，且每種組合至少每年挑戰一次

        
- **TR22 的 24 篇參考文獻構成了完整的知識框架：**從法規基礎（EU Annex 1、FDA Guidance）到風險管理（ICH Q9）到具體技術（TR90 CCS、TR88 微生物調查），為 APS 的設計、執行與調查提供了全方位的支持

    

    

PDA Technical Report No. 22 (Revised 2025) - Sections 10.0-12.0

    

Educational Material for CDMO Professionals

    

Based on: Process Simulation for Aseptically Filled Products

↑

## Section A1-2: Media & Performance Sequence 培養基與效能序列 (p71-p80)

# Section 7: Appendix 1 — Media & Placebo Considerations (13.0) + Appendix 2 — APS Performance Sequence (14.0)

    

附錄 1：培養基與安慰劑考量 + 附錄 2：無菌製程模擬執行順序

    

PDA Technical Report No. 22 (Revised 2025) | p71 - p80

    

### 本章學習目標

    

        
- 了解 APS 中培養基 (Media) 與安慰劑 (Placebo) 的選擇、滅菌及生長促進測試原則

        
- 掌握 Soybean-Casein Digest Medium (SCDM/TSB) 的特性及不同滅菌方式對其生長促進能力的影響

        
- 理解培養基的製備、過濾與保存管控要點，包含防止黴漿菌 (Mycoplasma) 污染的策略

        
- 熟悉 APS 執行的完整前置作業檢查清單 (Performance Sequence Checklist)，確保在模擬前已完成所有必要的確效與資格驗證

        
- 學會運用系統性方法規劃 APS 範圍、執行模擬、培養檢查及文件記錄的全流程

    

    

### 本節目錄 Section Contents

    

        13.0 Appendix 1 Overview
        13.1 Placebo Selection
        13.2 Sterilization
        13.3 Growth-Promotion Testing
        13.4 Solubility Testing
        13.5 Media Prep & Sterilization
        14.0 Appendix 2: APS Sequence
    

## 13.0 Appendix 1: Media and Placebo Considerations

    

        

### Original Text

        

In the conducting of aseptic process simulation (APS) for suspensions, ointments, creams, and dry powder fills, the use of a sterile placebo or surrogate material in addition to growth-promoting media is common. The placebo or surrogate material should closely resemble or mimic the physical characteristics of the product being simulated without appreciably adding or reducing the level of risk associated with filling or processing these materials. Surrogates or placebos may include such materials as dry powders, thickening agents, buffers, water for injection (WFI), or other materials that mimic product.

        

Material utilized as a placebo or surrogate should be packaged and handled as closely as possible to the material being simulated, and the justification for its appropriateness as a substitute for the simulation should be documented. Any differences in the packaging and handling of the placebo should be assessed for potential impact to the process and the need for additional cleaning and/or dedicated cleaning validation.

    

    

        

### 導師解析 Tutorial Commentary

        

            

#### 核心概念解析 Key Concepts

            

**Placebo / Surrogate Material (安慰劑/替代物):** 在 APS 中，並非所有劑型都能直接使用液態培養基來模擬。懸浮劑、軟膏、乳膏和乾粉充填等劑型，需要使用與產品物理特性相似的安慰劑或替代物，搭配生長促進培養基一起使用。

            

常見的替代物包括：乾粉、增稠劑、緩衝液、注射用水 (WFI) 等。關鍵原則是：替代物必須模擬產品的物理特性，但不能增加或減少無菌製程的風險。

        

        

            

#### 比喻說明 Analogy

            

想像一場消防演習 -- 你不能用真火來測試疏散流程，但也不能完全省略煙霧和警報。安慰劑就像演習中的人造煙霧：它必須讓流程「感覺起來」像真正的緊急狀況（模擬產品的流動性、黏度等），但又不能真的帶來危險。如果用的煙霧太少，演習就無法真實反映挑戰；如果用了不適當的材料，反而會引入真正的風險。

        

        

            

#### 重點提示 Key Notes

            

**文件記錄義務：**使用替代物時，必須記錄其適用性的理由 (justification)。此外，如果安慰劑的包裝和處理方式與實際產品不同，必須評估這些差異對製程的潛在影響，以及是否需要額外的清潔驗證 (cleaning validation)。

            

這在法規查廠時是高頻被查驗的項目 -- 查核員會想了解「你為什麼選這個替代物？它真的能代表你的產品嗎？」

        

    

## 13.1 Selection of Placebo or Surrogate Material

    

        

### Original Text

        

The selection of placebo material to be used in APS should consider several factors: the placebo or surrogate material must be sterile; it must be as similar as possible to the product characteristics; and it must support anticipated levels of microorganism contamination and growth.

        

Due to the poor flow properties, the selection of dry sterile media for APS has been proven to be less effective for suspensions, ointments, creams, and dry powder fill operations. The use of lactose, mannitol, polyethylene glycol 6000, and sodium chloride for APS in these operations has been found successful, providing it does not adversely affect the growth of microorganisms. The chosen material should be easily sterilizable (using a validated method), dispersible or dissolvable, not inhibit growth (at minimum), and it should be easily handled in the mock-formulation processes.

    

    

        

### 導師解析 Tutorial Commentary

        

            

#### 核心概念解析 Key Concepts

            

安慰劑選擇的三大要求：

            

                
- **無菌 (Sterile)：**替代物本身必須是無菌的，否則會引入額外的微生物污染，干擾 APS 結果判讀

                
- **物理相似性：**必須盡可能模擬產品的流動性、黏度、粒度等特性

                
- **支持微生物生長：**替代物不能抑制微生物生長，否則即使有污染也無法被偵測到

            

        

        

            

#### 重點提示 Key Notes

            

**常用安慰劑材料清單：**

            

                
- **Lactose (乳糖)：**常用於乾粉充填模擬

                
- **Mannitol (甘露醇)：**良好的流動性，適合粉末模擬

                
- **PEG 6000 (聚乙二醇)：**可模擬半固體劑型

                
- **NaCl (氯化鈉)：**容易取得、易溶解

            

            

但要注意：乾燥的無菌培養基粉末因為流動性差，已被證實不適合用於懸浮劑、軟膏、乳膏和乾粉充填操作的 APS。

        

        

            

#### 練習思考 Practice Questions

            

                
1. 你的工廠生產一種高黏度的眼藥膏，要進行 APS 時，你會選擇什麼安慰劑？為什麼？

                
2. 如果選用的安慰劑在高濃度時會抑制微生物生長，你應該如何處理？

            

        

    

## 13.2 Sterilization of Placebo or Surrogate Material

    

        

### Original Text

        

The material should be sterilized prior to the APS using a validated method. Methods usually employed include irradiation, gas, dry heat, or filtration. The sterilization process should be shown to have no significant effect on the media's growth-promotion or the surrogate's physical properties. Along with the placebo material prepared for use in the filling trial, additional material in separate containers can be used for negative-control sterility testing, if necessary.

    

    

        

### 導師解析 Tutorial Commentary

        

            

#### 核心概念解析 Key Concepts

            

**替代物滅菌方法：**常見的滅菌方法包括輻射滅菌 (irradiation)、氣體滅菌 (gas, 如 EtO)、乾熱滅菌 (dry heat) 和過濾除菌 (filtration)。選擇滅菌方法時要確認兩件事：

            

                
- 滅菌過程不能顯著影響培養基的生長促進能力

                
- 滅菌過程不能改變替代物的物理特性

            

        

        

            

#### 比喻說明 Analogy

            

就像清洗演員的戲服 -- 洗完之後，戲服必須看起來和穿起來都跟洗之前一樣（物理特性不變），同時上面的細菌也必須被清除（達到無菌）。如果用太強烈的清洗方式把布料洗壞了，那演員就無法穿著它完成排練了。

        

        

            

#### 重點提示 Key Notes

            

**負對照 (Negative Control)：**可以額外準備一批安慰劑放在獨立容器中，作為負對照組進行無菌測試。這有助於確認替代物本身確實是無菌的，排除因替代物帶菌而造成假陽性的風險。

        

    

## 13.3 Growth-Promotion Testing of the Placebo or Surrogate Material

    

        

### Original Text

        

Growth-promotion testing of the surrogate and media combination should be performed using pharmacopeial methods. Consideration should be given to include in-house isolates recovered from EM, personnel monitoring, and sterility-test failures. If the initial concentration of the growth-promoting media is different from the end concentration (i.e., double strength because of subsequent dilution steps), the initial concentration should also be challenged for growth promotion (see Section 7.17).

    

    

        

### 導師解析 Tutorial Commentary

        

            

#### 核心概念解析 Key Concepts

            

**Growth-Promotion Testing (生長促進測試)：**驗證安慰劑與培養基的組合是否能支持微生物生長的測試。必須使用藥典方法 (pharmacopeial methods) 進行。

            

**In-house Isolates (廠內分離株)：**除了使用標準菌株外，建議加入從環境監測 (EM)、人員監測和無菌測試失敗案例中回收的廠內菌株，因為這些才是你的工廠真正可能面對的微生物。

        

        

            

#### 重點提示 Key Notes

            

**濃度變化須注意：**如果培養基在製備過程中會被稀釋（例如初始使用雙倍濃度，後續稀釋到工作濃度），那麼初始的高濃度也必須進行生長促進測試。這是因為高濃度培養基可能對某些微生物產生抑制效果。

        

    

## 13.4 Solubility Testing of the Placebo or Surrogate Material

    

        

### Original Text

        

The solubility of the placebo materials at the desired concentration is determined in the test medium. The amount of agitation required to dissolve or disperse the material, as well as the time and extent of dissolution, should be noted. If the material fails to dissolve or disperse fully, it can be retested at a lower concentration or replaced.

    

    

        

### 導師解析 Tutorial Commentary

        

            

#### 核心概念解析 Key Concepts

            

**Solubility Testing (溶解度測試)：**確認安慰劑在培養基中的溶解或分散能力。需要記錄攪拌量、溶解時間和溶解程度。如果無法完全溶解或分散，可以降低濃度重新測試，或更換安慰劑材料。

        

        

            

#### 比喻說明 Analogy

            

就像做料理前先測試食材的相容性 -- 如果某種調味料無法溶解在湯底中、會沉澱結塊，那你就需要減少用量或換一種調味料。培養基的溶解度測試道理相同：如果安慰劑無法均勻分散在培養基中，微生物可能無法與培養基充分接觸，導致生長受到物理性阻礙。

        

    

## 13.5 Media Preparation and Sterilization

    

        

### Original Text

        

The three critical factors in media preparation for APSs are that the media is sterile, is growth-promoting, and does not require handling procedures that materially change (or add steps to) the aseptic process being simulated. Media formulation and sterilization are very different exercises from product compounding and filtration. Media used for APSs may be liquid or powder, depending on the type of filling process to be simulated.

        

Soybean-casein digest medium (SCDM), also referred to as tryptic soy broth (TSB), is often used to recover and promote the growth of bacteria and fungi. SCDM is a broad-spectrum medium suitable for the recovery and growth of the typical human flora that predominates in the aseptic processing environment. SCDM is also capable of recovering spore-bearing microorganisms, gram-negative bacteria, and fungi. In recent years, plant-based media (with almost identical formulations but with plant peptones in place of casein) have become increasingly popular due to the similar growth promoting capabilities and assurance of BSE/TSE free. In addition, plant based media is not a potential of mycoplasma either.

        

Media may be supplied from a vendor as presterilized and ready to use, or it may be prepared and sterilized at the manufacturing site. The sterilization of SCDM prior to filling may be accomplished through a variety of methods, most commonly, by moist heat, radiation, or filtration. The type of sterilization potentially impacts the growth properties of the media so it must be chosen and confirmed as being able to be used after the specific sterilization process is completed. Where mycoplasma is determined or suspected to be a contamination risk from the media source, the use of heat or radiation sterilization can be used to eliminate potential mycoplasma contamination that may not be eliminated by filtration. When filtration is chosen as a method, a special consideration for using mycoplasma-retentive 0.1μm filtration may be needed. The moist-heat sterilization process in autoclaves is very reliable, especially where relatively small quantities of media are required (e.g., APSs completed to evaluate clinical scale or other low-throughput operations) (22). However, in larger process-simulation batches required in support of commercial-scale manufacturing, it may be difficult to produce the required large volume of media in an autoclave. Media for such larger batches may be sterilized in place in a suitable vessel through a validated process. It is important to note the manufacturer's recommendations regarding sterilization time and temperature to ensure the sterilized media retains its requisite growth-promotion capabilities. F0 values (parameter that quantifies the lethality of a sterilization process) in the range of 15 to 20 minutes are generally sufficient. Longer or hotter sterilization cycles delivering higher levels of lethality may cause a Maillard reaction (including caramelization) of the medium and adversely affect growth promotion. It can also be useful to combine sterilization methods, for example, purchasing irradiated powder media (to ensure no mycoplasma) and generating a very low bioburden solution by dissolution in WFI, followed by a final sterile filtration prior to filling.

        

The filtration system used to produce sterile products is validated independently of the APS and does not require further validation by virtue of an APS (23). However, any post-filtration aseptic manipulation of products, such as disconnection, reconnection, and transfer (e.g., using a transfer loop) shall be covered under APS. Wherever possible, the same filtration system and vessels employed for product manufacturing should be used, even if the media is purchased ready to use; however, in many cases, this is not technically feasible or practical. The sterilizing-grade filter may not be identical to the one used for the product being simulated, but it should be sized properly for the preparation of the required volume of media. The use of prefilters may be required as media may contain a substantial number of fine particles that could clog the primary sterilizing-grade filter.

        

The hold time between compounding the media and filtration of the media into a sterile vessel should be minimized. Media held in less than fully sterile conditions will immediately begin to support the growth of any microorganisms that may be present. Bioburden issues can be mitigated to some degree by preparing the media using hot water (24). Water temperatures above 60 °C will reduce the risk of growth of vegetative bacteria and fungi and ensure that the media dissolves more completely, reducing the likelihood of filter blockage. When appropriate, use of a prefilter to remove material that does not go into solution will reduce the likelihood of clogging the final sterilizing-grade filter, which usually has a 0.2μm pore-size rating. It is preferable to sterile-filter the media into a sterile holding tank prior to the start of the fill rather than to hold nonsterile media for several hours. Media should be allowed to cool to <35 °C before use in an APS.

        

Powdered media employed to challenge powder-filling or aseptic-compounding operations is sterilized by radiation. The radiation sterilization process should be validated, and each lot should have dosimetry information included in its certificate of analysis. It may be advisable to sample and evaluate media for reconstitution and growth-promotion prior to use in an APS.

    

    

        

### 導師解析 Tutorial Commentary

        

            

#### 核心概念解析 Key Concepts

            

**SCDM / TSB (大豆酪蛋白消化培養基)：**APS 中最常用的廣譜培養基，能回收細菌和真菌，包括芽孢桿菌、革蘭氏陰性菌和黴菌。近年來，植物性培養基 (Plant-based Media) 越來越受歡迎，原因有二：

            

                
- 生長促進能力幾乎相同

                
- 確保無 BSE/TSE（牛海綿狀腦病/傳播性海綿狀腦病）風險

                
- 不會成為黴漿菌 (Mycoplasma) 的潛在來源

            

        

        

            

#### 重點提示 Key Notes

            

**滅菌方法對培養基的影響 -- 核心要點：**

            

                
- **濕熱滅菌 (Moist Heat)：**最可靠，但 F0 值應控制在 15-20 分鐘。過度滅菌會引發 Maillard Reaction (梅納反應)，導致培養基焦糖化，降低生長促進能力

                
- **輻射滅菌 (Radiation)：**適合粉末培養基，可有效消除黴漿菌

                
- **過濾除菌 (Filtration)：**標準 0.2μm 過濾可能無法攔截黴漿菌，若有黴漿菌風險需考慮 0.1μm 過濾

            

        

        

            

#### 公式與計算 Formula

            

**F0 值 (殺菌致死力參數)：**

            

```

F0 = 量化滅菌過程致死力的參數
建議範圍：15-20 分鐘（對培養基而言）
過高 F0 → Maillard Reaction → 焦糖化 → 生長抑制
            
```

            

這與產品滅菌通常追求更高 F0 值的邏輯不同！培養基需要在「足夠殺菌」和「保留生長促進能力」之間取得平衡。

        

        

            

#### 比喻說明 Analogy

            

培養基的滅菌就像烤麵包 -- 你需要足夠的溫度和時間來殺死酵母（達到無菌），但如果烤太久、溫度太高，麵包就會燒焦（Maillard Reaction），變得又硬又黑，失去食用價值。F0 值就像烤箱的時間-溫度設定，15-20 分鐘恰到好處。

        

        

            

#### 重點提示 Key Notes

            

**培養基配製與保存的時間管控：**

            

                
- 配製後到過濾進無菌容器的時間應盡量縮短 -- 因為培養基一旦配製完成，會立即支持任何存在微生物的生長

                
- 建議使用 >60°C 的熱水配製，減少微生物負荷 (bioburden) 並提高溶解度

                
- 考慮使用預過濾器 (prefilter) 去除未溶解的顆粒，防止堵塞 0.2μm 終端過濾器

                
- 優先將培養基過濾至無菌儲罐中待用，而非長時間保存非無菌培養基

                
- 使用前培養基溫度必須降至 <35°C

            

        

        

            

#### 重點提示 Key Notes

            

**黴漿菌 (Mycoplasma) 控制策略：**這是 APS 培養基管理中常被忽略的風險。可考慮組合式滅菌策略：

            

                
1. 購買已輻射滅菌的粉末培養基（確保無黴漿菌）

                
2. 用 WFI 溶解產生極低生物負荷的溶液

                
3. 最後進行無菌過濾

            

            

這種組合方式在 ATMP (先進療法醫藥產品) 製造領域尤其重要，因為黴漿菌污染是細胞治療產品的重大風險。

        

        

            

#### 實務應用 Practical Application

            

**CDMO 商業規模情境：**當你的 CDMO 需要支援商業規模充填時，高壓蒸氣釜可能無法產出足夠的培養基量。此時需要在適當的容器中進行 SIP（就地滅菌），但必須注意控制 F0 值不要超過 20 分鐘。建議在 SIP 前確認培養基供應商的建議滅菌時間和溫度。

        

        

            

#### 練習思考 Practice Questions

            

                
1. 為什麼植物性培養基在近年來越來越受歡迎？與傳統 SCDM 相比有哪些優勢？

                
2. 如果你發現培養基在過濾時頻繁堵塞濾芯，可能的原因和解決方案是什麼？

                
3. 在 ATMP 製造中，為什麼黴漿菌控制對培養基選擇特別重要？

            

        

    

## 14.0 Appendix 2: Aseptic Process Simulation Performance Sequence

    

        

### Original Text

        

The activities in a typical APS generally occur in the order presented in Table 14.0-1.

        

### Table 14.0-1 Aseptic Process Simulation Performance Sequence Checklist

        
        

            

**1. Prior to Initiating Aseptic Process Simulation** — Confirm Satisfactory Completion of the Qualification, Validation, and Smooth Operation of the Aseptic Process and its Support Systems, including (see Section 3.1):

        

        

        
            
                
                    
                    
                    
                
| Activity | Additional Information* | ☐ |
| --- | --- | --- |
            
            
                
                    
                      

                    
                
| Sterilization Process Validation | TR No. 1: Validation of Moist Heat Sterilization ProcessesTR No. 3: Validation of Dry Heat Processes Used for Depyrogenation and Sterilization | ☐ |
                
                    
                    
                    
                
| Standard Operating Procedures (SOPs) are Available | N/A | ☐ |
                
                    
                    
                    
                
| Personnel Training on the Applicable Procedures and Qualification Status | N/A | ☐ |
                
                    
                    
                    
                
| Personnel Aseptic-Gowning Certification | Section 8.0 Personnel Qualification | ☐ |
                
                    
                    
                    
                
| Disinfectant Qualification | TR No. 70: Fundamentals of Cleaning and Disinfection Programs for Aseptic Manufacturing Facilities | ☐ |
                
                    
                      
  

                    
                
| Implementation of Environmental Decontamination Procedures (cleaning, disinfection and isolator decontamination) | PtC for the Aseptic Processing of Sterile Pharmaceutical Products in IsolatorsTR No. 34: Design and Validation of Isolator SystemsTR No. 70: Cleaning and Disinfection Programs | ☐ |
                
                    
                    
                    
                
| Facility Cleaning and Decontamination Program | TR No. 70: Cleaning and Disinfection Programs | ☐ |
                
                    
                      

                    
                
| Equipment Cleaning Validation | TR No. 29: Cleaning ValidationTR No. 49: Biotechnology Cleaning Validation | ☐ |
                
                    
                      

                    
                
| Product, Container-Closure, and Equipment Sterilization | TR No. 1: Moist Heat SterilizationTR No. 3: Dry Heat Processes | ☐ |
                
                    
                    
                    
                
| Manufacturing and Fill-System Qualification | Manufacturing Technology Guide No. 1: Aseptic Filling, Engineering, and Operation | ☐ |
                
                    
                    
                    
                
| Container-Closure Integrity | TR No. 27: Pharmaceutical Package Integrity | ☐ |
                
                    
                    
                    
                
| Environmental Controls (air flow, HEPA filtration, temperature and humidity control, viable and total particulate control (EMPQ)) | TR No. 13: Fundamentals of an Environmental Monitoring Program | ☐ |
                
                    
                    
                    
                
| Airflow Visualization Studies | N/A | ☐ |
                
                    
                    
                    
                
| Utility Gases Sterilization (product-contacting) | TR No. 40: Sterilization Filtration of Gases | ☐ |
                
                    
                    
                    
                
| Materials Disinfection and Transfer Controls | Points to Consider No. 1: Aseptic Processing | ☐ |
                
                    
                      
  

                    
                
| Filter Integrity for Sterilizing Filters as well as Vent/Gas Filters (where applicable) | PtC for Pre-Use Post-Sterilization Integrity TestingPtC for Risks Associated with Sterilizing Grade FiltersTR No. 26: Sterilizing Filtration of Liquids | ☐ |
                
                    
                    
                    
                
| Definition of Environmental Monitoring (EM) Program | TR No. 13: Fundamentals of an Environmental Monitoring Program | ☐ |
                
                    
                    
                    
                
| Equipment Qualification (especially runnability studies) | N/A | ☐ |
            
        

        

        
        

            

**2. Define the Scope of the APS** — to Include Routine Aseptic Process Conditions and Variables Such As:

        

        

        
            
                
                    
                    
                    
                
| Activity | Additional Information* | ☐ |
| --- | --- | --- |
            
            
                
                    
                    
                    
                
| Aseptic Formulation/Compounding Process, Equipment, and Operations | N/A | ☐ |
                
                    
                    
                    
                
| Aseptic Filling Process, Equipment, and Operations | Section 7.0 Aspects of Aseptic Process Simulation | ☐ |
                
                    
                      
  
  
  

                    
                
| Operation Conditions (line speed, pressure, and other critical process variables) | Section 3.4 Risk Assessment for APS DesignSection 5.2 Protocol and Procedure PreparationSection 7.6 Filling SpeedSection 7.7 Fill VolumeSection 7.10 Number of Units | ☐ |
                
                    
                    
                    
                
| Operation Hold Times Impacting Sterility Assurance | Section 7.9.4 Qualification of Maximum Hold Times | ☐ |
                
                    
                      
  
  

                    
                
| Number of Operators (maximum room occupancy) or Maximum Simultaneous Isolator-Glove Usage | Section 4.2.6 Other Dosage Forms and Drug/Device CombinationsSection 4.3.7 ATMP ConsiderationsPtC No. 12: RABSPtC for Aseptic Processing in Isolators | ☐ |
                
                    
                      
  
  

                    
                
| Process Setup, Interventions (inherent and corrective), Stoppages, and the Frequency with which they need to be executed and/or simulated | Section 4.1.4 InterventionsSection 5.2 Protocol and Procedure PreparationSection 5.3 APS Execution RecordSection 7.8 Interventions | ☐ |
                
                    
                    
                    
                
| Maximum Time Operators are in Clean Room | Section 7.9.2 Human Performance and Fatigue | ☐ |
                
                    
                    
                    
                
| Process Length (including breaks) | Section 7.9 Duration of APS | ☐ |
                
                    
                      

                    
                
| Container-Component Configuration to be Utilized and Target Fill-Volume | Section 7.5 Container-Closure ConfigurationSection 7.7 Fill Volume | ☐ |
                
                    
                    
                    
                
| Stress Conditions on the Routine Aseptic Process | Section 7.9 Duration of APS | ☐ |
                
                    
                    
                    
                
| Environmental Conditions (air flows, temperature and humidity, and pressure-differential requirements) | Section 7.9.3 Environmental and Equipment Considerations | ☐ |
                
                    
                    
                    
                
| Aseptic Process and Associated Intervention Risk Assessment | Section 7.8 Interventions | ☐ |
            
        

        

        
        

            

**3. Develop the Aseptic Process Simulation Plan**

        

        

        
            
                
                    
                    
                    
                
| Activity | Additional Information* | ☐ |
| --- | --- | --- |
            
            
                
                    
                    
                    
                
| Develop a protocol that includes the scope, rationale, justification, and acceptance criteria that establishes APS conditions necessary to qualify normal aseptic operations. The protocol is reviewed and approved by the Quality Unit. | Section 5.2 Protocol and Procedure Preparation | ☐ |
                
                    
                    
                    
                
| Develop an APS batch record that defines scope and execution requirements and captures the actual execution variables. The APS batch record is reviewed and approved by the Quality Unit. If the commercial-process batch record is electronic, the APS batch record should also be electronic. | Section 5.3 APS Execution Record | ☐ |
            
        

        

        
        

            

**4. Conduct the Aseptic Process Simulation**

        

        

        
            
                
                    
                    
                    
                
| Activity | Additional Information* | ☐ |
| --- | --- | --- |
            
            
                
                    
                      

                    
                
| Conduct and monitor the APS to ensure it is executed in compliance with the APS protocol and batch-record requirements. Filled volume should be sufficient to wet all internal container surfaces and to allow for identification of contamination, but sufficient head space must be ensured to avoid impacts on the growth of potential aerobic contaminants. | Section 5.5 APS ObservationSection 7.7 Fill Volume | ☐ |
                
                    
                    
                    
                
| Intervention-related vials may be rejected (or incubated separately), but ONLY if the same approach is taken during routine manufacturing. Additionally, the number of units rejected must also match (or be lower than) those that would be rejected during routine production. | Section 7.16 Unit Accountability and Reconciliation | ☐ |
                
                    
                      
  

                    
                
| Perform qualified container-closure integrity inspection, retain acceptable units, and initiate accountability, rejecting only those units with container-closure integrity defects. | Section 7.13 Pre-Incubation InspectionSection 7.15 Post-Incubation InspectionSection 7.16 Unit Accountability and Reconciliation | ☐ |
                
                    
                    
                    
                
| Prior to incubation, invert and swirl APS units to ensure media contact with all internal surfaces. | Section 7.14 Incubation Conditions | ☐ |
                
                    
                    
                    
                
| Incubate acceptably filled units under defined temperatures and duration. If two temperatures are used for the incubation of the media filled units, the units should be incubated for at least 7 days at each temperature (starting with the lower temperature) (1). | Section 7.14 Incubation Conditions | ☐ |
                
                    
                      
  

                    
                
| Perform inspection (utilizing qualified inspectors and validated inspection conditions) for microbial growth and reconcile the count with units placed into incubation. Segregate any units with positive microbiological growth and submit them for microbial identification. Identify any positive units to the species level and investigate to establish contamination root cause for any acceptably filled units exhibiting positive microbial growth. | Section 7.13 Pre-Incubation InspectionSection 7.15 Post-Incubation InspectionSection 7.16 Unit Accountability and Reconciliation | ☐ |
                
                    
                    
                    
                
| Perform growth-promotion tests on APS media in post-incubation media-filled units. | Section 7.17 Growth Promotion/Positive Control | ☐ |
            
        

        

        
        

            

**5. General Documentation Requirements**

        

        

        
            
                
                    
                    
                    
                
| Activity | Additional Information* | ☐ |
| --- | --- | --- |
            
            
                
                    
                    
                    
                
| Document APS results, evaluation, and conclusion in a report approved by the Quality Unit. | Section 5.4 Final Report | ☐ |
                
                    
                    
                    
                
| Identify and document operators who participated in the APS by the executed APS and the term of their qualification. | Section 5.3 APS Execution Record | ☐ |
                
                    
                    
                    
                
| Identify and document interventions that were successfully demonstrated by the executed APS. If necessary, update appropriate procedures. | Section 5.3 APS Execution Record | ☐ |
            
        

        

        

*TR 22 Section or Relevant PDA Technical Document  
N/A = no relevant PDA Technical Documents for this activity

    

    

        

### 導師解析 Tutorial Commentary

        

            

#### 核心概念解析 Key Concepts

            

**APS Performance Sequence (APS 執行順序)：**這份檢查清單是 PDA TR22 提供的最實用工具之一。它將整個 APS 流程分為五大階段：

            

                
1. **前置確認 (Pre-Initiation)：**確認所有確效、資格驗證和支持系統已就緒

                
2. **範圍定義 (Scope Definition)：**明確 APS 涵蓋的製程條件和變數

                
3. **計畫開發 (Plan Development)：**編寫方案和批次紀錄

                
4. **模擬執行 (Execution)：**實際執行 APS 並進行培養/檢查

                
5. **文件記錄 (Documentation)：**完成報告和人員資格記錄

            

        

        

            

#### 比喻說明 Analogy

            

這份檢查清單就像飛行員的起飛前檢查表 (pre-flight checklist)。即使是最有經驗的飛行員，每次起飛前都必須逐項確認：引擎、燃油、儀表、通訊、天氣......。APS 的執行也是同樣的道理 -- 在你「起飛」（開始充填培養基）之前，必須確認所有支持系統都已通過驗證並正常運作。跳過任何一項檢查，都可能導致 APS 結果無效或產生誤判。

        

        

            

#### 重點提示 Key Notes

            

**第一階段（前置確認）的關鍵：**這是最容易被忽略卻最重要的階段。清單列出了 18 項必須在 APS 開始前確認完成的項目，涵蓋：

            

                
- **滅菌製程驗證** (Sterilization Process Validation)

                
- **人員訓練與無菌衣著資格** (Personnel Training & Gowning Certification)

                
- **消毒劑確效** (Disinfectant Qualification)

                
- **環境監測計畫** (EM Program)

                
- **容器密封完整性** (Container-Closure Integrity)

                
- **氣流可視化研究** (Airflow Visualization Studies)

                
- **過濾器完整性** (Filter Integrity)

            

            

每一項都對應了具體的 PDA 技術文件，方便查閱更詳細的指引。

        

        

            

#### 重點提示 Key Notes

            

**第二階段（範圍定義）的關鍵考量：**

            

                
- **操作人員最大容納量：**必須模擬最大房間佔用人數或最大同時使用的隔離器手套數

                
- **介入操作 (Interventions)：**需涵蓋固有介入 (inherent) 和糾正介入 (corrective)，包括其頻率

                
- **壓力條件：**在常規無菌製程上施加合理的壓力條件

                
- **環境條件：**氣流、溫濕度、壓差等

            

        

        

            

#### 重點提示 Key Notes

            

**第四階段（執行）的核心規則：**

            

                
- **充填量：**必須足以潤濕所有內部容器表面，但要保留足夠頂空 (headspace) 讓好氧微生物生長

                
- **介入相關小瓶：**可以剔除（或分開培養），但僅限於常規生產中也採取同樣做法的情況。剔除的數量也不能超過常規生產的剔除量

                
- **培養條件：**使用雙溫培養時，每個溫度至少 7 天，從較低溫開始

                
- **陽性單位：**必須鑑定到種 (species level)，並調查根本原因

            

        

        

            

#### 實務應用 Practical Application

            

**CDMO 實務建議：**建議將這份 Table 14.0-1 轉化為你工廠專用的 APS 執行 SOP 附件。具體做法：

            

                
- 將每個 Activity 對應到你的內部文件編號

                
- 在「Additional Information」欄加入你的內部程序參考

                
- 在「Completed」欄加入實際簽核欄位和日期

                
- 對於客戶審計，這份完整的檢查清單能展示你的 APS 管理是系統性的、有章可循的

            

        

        

            

#### 重點提示 Key Notes

            

**第五階段（文件記錄）-- 法規查廠關注點：**

            

                
- APS 結果、評估和結論必須由品質單位 (Quality Unit) 核准的報告記錄

                
- 必須記錄所有參與 APS 的操作人員及其資格有效期

                
- 必須記錄所有已成功展示的介入操作，必要時更新相關程序

            

            

這些文件是 EU Annex 1 和 FDA 查廠時的重點審查對象。缺少任何一項都可能被開立觀察報告。

        

        

            

#### 練習思考 Practice Questions

            

                
1. 為什麼在 APS 開始之前，必須先確認氣流可視化研究 (Airflow Visualization Studies) 已完成？如果跳過這一步可能導致什麼問題？

                
2. Table 14.0-1 中提到「如果商業製程批次紀錄是電子的，APS 批次紀錄也應該是電子的」，這背後的邏輯是什麼？

                
3. APS 執行中，為什麼培養前必須將容器翻轉和旋轉 (invert and swirl)？如果沒做這一步，可能會漏掉什麼？

                
4. 假設你是 CDMO 的 QA 主管，收到一份 APS 報告，發現有一個陽性單位被歸類為「容器密封缺陷」而排除，但報告中沒有詳細說明檢查方法。你會有什麼顧慮？

            

        

    

    

### 本節重點回顧 Section Summary

    

        
- **培養基與安慰劑選擇 (13.0-13.4)：**安慰劑必須無菌、物理特性相似、不抑制微生物生長。常用材料包括乳糖、甘露醇、PEG 6000 和氯化鈉。必須進行溶解度測試和生長促進測試。

        
- **培養基配製與滅菌 (13.5)：**SCDM/TSB 是最常用的廣譜培養基。滅菌時 F0 值控制在 15-20 分鐘，避免 Maillard Reaction。植物性培養基日趨流行（無 BSE/TSE 及黴漿菌風險）。過濾除菌時注意黴漿菌可能穿透 0.2μm 濾膜。

        
- **培養基保存：**配製至過濾的保持時間應最小化，使用 >60°C 熱水配製可降低生物負荷，使用前需冷卻至 <35°C。

        
- **APS 執行順序 (14.0)：**五大階段依序為前置確認、範圍定義、計畫開發、模擬執行、文件記錄。Table 14.0-1 提供了全面的檢查清單，涵蓋 18 項前置確認、12 項範圍定義、執行細節和文件要求。

        
- **關鍵法規要求：**培養雙溫度時每溫至少 7 天（先低溫），陽性單位須鑑定到種並調查根因，介入相關單位的剔除必須與常規生產一致。

    

    

PDA Technical Report No. 22 (Revised 2025) — Process Simulation for Aseptically Filled Products

    

Section 7: Appendix 1 (13.0) Media & Placebo + Appendix 2 (14.0) Performance Sequence | p71-p80

    

Educational Material for CDMO Professionals

⇧

## Section A3: Risk Assessment Examples 風險評估範例 (p81-p115)

# Section 15.0-15.4: Appendix 3 — Risk Assessment Practical Examples 1-4

    

附錄三：風險評估實務範例 1-4

    

PDA Technical Report No. 22 (Revised 2025) | p81 - p97

    

### 本章學習目標

    

        
- 理解如何運用品質風險管理 (QRM) 工具來制定 APS 頻率與介入模擬計畫

        
- 學習 Example 1 的風險因子評分方法，決定 APS 執行頻率（每年、每半年）

        
- 掌握 Example 2 的介入風險評估與管理模型 (IREM)，了解如何透過工程與程序改善降低風險

        
- 認識 Example 3 以六項風險準則定義介入模擬頻率與次數的方法

        
- 瞭解 Example 4 如何針對不同容器尺寸使用 bracketing/matrixing 方法決定 APS 次數

    

## 15.0 Appendix 3: Practical Examples of Using Risk Assessment in Aseptic Process Simulation

    

        

### Original Text

        

The practical examples of a risk assessment provided herein are offered to stimulate thought and help those engaged in such evaluations develop and use assessment approaches. The examples are not intended to offer definitive prescriptions, establish flawless criteria and values for the industry, or to suggest a required format or approach. The examples are meant only to provide an approach or format that a company may consider.

        

These examples are not universally applicable. They may not include all aseptic process steps, APS considerations, or risk factors. They do not represent a PDA-endorsed method or the only method that can or should be used. The reader is cautioned not to dwell on the specific aseptic processing details of the assessment because the examples may not present circumstances applicable to the reader's specific aseptic process. Any actual assessment of aseptic processing risk is a combination of factors affecting aseptic process risk and must consider the specific circumstances and challenges under which the process is performed and assessed. Companies should have their own logic for selecting these criteria or risk-analysis methods based on their experience and specific process knowledge.

        

For more details and assistance on the use and development of approaches using risk assessment formats, see Section 3.4. Additional information may be attained from PDA technical documents including, Technical Report No. 54: Implementation of Quality Risk Management for Pharmaceutical and Biotechnology Manufacturing Operations series, Technical Report No. 90: Contamination Control Strategy Development in Pharmaceutical Manufacturing, Points to Consider for the Aseptic Processing of Sterile Pharmaceutical Products in Isolators and the PDA/ANSI Standard 03-2025: Standard Practice for Quality Risk Management of Aseptic Processes.

    

    

        

### 導師解析 Tutorial Commentary

        

            

#### 核心概念解析 Key Concepts

            

**Risk Assessment (風險評估)：**本附錄提供的是「實務範例」，目的在啟發思考，而非規定唯一做法。每間公司都應根據自身製程經驗與知識，發展適合的風險分析方法。

            

TR22 強調這些範例：

            

                
- 不是放之四海皆準的標準答案

                
- 不代表 PDA 認可的唯一方法

                
- 讀者不應過度糾結範例中的特定製程細節

            

        

        

            

#### 比喻說明 Analogy

            

這些風險評估範例就像「食譜參考書」：它給你做菜的思路和步驟框架，但每道菜的調味料份量、火候、食材，都要根據你自家廚房的設備和食客口味來調整。照搬食譜可能不合口味，但完全不看食譜也容易走偏。

        

        

            

#### 重點提示 Key Notes

            

TR22 特別「警告」讀者不要死板套用範例中的分數或判準。真正的風險評估必須考慮：

            

                
- 你的具體製程條件與挑戰

                
- 公司的歷史數據與經驗

                
- 影響無菌製程風險的所有因素組合

            

            

相關參考文件包括 TR54（QRM 實施）、TR90（CCS 開發）以及 PDA/ANSI 03-2025 標準。

        

        

            

#### 練習思考 Practice Questions

            

                
1. 為什麼 TR22 要反覆強調這些範例不是唯一方法？這對你建立自家風險評估工具有何啟示？

                
2. 在你的工廠中，哪些因素是範例中沒有涵蓋、但對你的無菌製程風險影響最大的？

            

        

    

## 15.1 Example 1: Applying Risk-Based Aseptic Process Simulation Frequency

    

        

### Original Text

        

This example is related to Section 3.2. It considers the overall risk of an aseptic process in terms of its complexity, novelty, frequency of operators performing it and the experience of those operators, degree of automation, degree of protection (barrier system), recent changes and history of compliance regarding EM, APS failures, sterility-test failures, deviations, and audit findings.

        

An overall risk score is then calculated and used to define the appropriate frequency of APS runs (see Table 15.1-1). In most cases, the minimum regulatory frequency (twice per year) will apply. For high risk that cannot be mitigated due to highly manual steps in ATMPs, a higher APS frequency will be required to re-qualify each operator every 6 months rather than every 12 months. This will be indirectly reflected on the total number of APS runs per year, example: a company that has two operators will be required to conduct at least 4 APS runs per year for the same process to comply with EU Annex 1 regardless of risk level obtained from the example. In other cases, when the risk is low, such as when using an isolator, a lower frequency of shift simulation can be justified.

        

### Table 15.1-1 Applying Risk-Based APS Frequency

        

        
            
                
                    
                    
                    
                    
                    
                
| Risk Factor | High (5) | Medium (3) | Low (1) | Assigned Risk Score |
| --- | --- | --- | --- | --- |
            
            
                
                    ****
                    
                    
                    
                    
                
| Process Complexity | High complexity, large number of aseptic assemblies, large number of inherent interventions | Medium complexity, medium number of aseptic assemblies, medium number of inherent interventions | Low complexity, low number of aseptic assemblies, low number of inherent interventions |  |
                
                    ****
                    
                    
                    
                    
                
| Process Novelty1 | <2 years | 2-5 years | >5 years |  |
                
                    ****
                    
                    
                    
                    
                
| Process Frequency2 | <Once every 3 months | Quarterly to Weekly | Weekly to Daily |  |
                
                    ****
                    
                    
                    
                    
                
| Process Automation | Low (e.g., high number of manual steps) | Medium (e.g., automated filling line with medium inherent interventions) | High (e.g., dependent on robotics) |  |
                
                    ****
                    
                    
                    
                    
                
| Degree of Critical Zone Protection | Low (e.g., conventional unidirectional air flow unit / biosafety cabinet) | Medium (e.g., oRABs or cRABs without VPHP decontamination cycle) | High (e.g., isolator or cRABs with VPHP decontamination cycle) |  |
                
                    ****
                    
                    
                    
                    
                
| Degree of Experience of Technicians3 | Low: <2 years | Medium: 2-5 years | High: >5 years |  |
                
                    ****
                    
                    
                    
                    
                
| Environmental Monitoring Compliance History | >1 OOL* per month | 1 OOL every 1 to 6 months | <1 OOL every 6 months |  |
                
                    ****
                    
                    
                    
                    
                
| Process Compliance History (APS Failure / Sterility Test Failures in Past 2 Years) | >1 OOS* per 6 months | 1 OOS every 6 to 12 months | <1 OOS every 12 months |  |
                
                    ****
                    
                    
                    
                    
                
| Aseptic Process Compliance History (Major Deviations/Audit Findings/483s) | >3 major deviations/audit findings/Regulatory observations per year | 1-2 major deviations/audit findings/Regulatory observations per year | <1 major deviation/audit finding/Regulatory observation per year |  |
                
                    ****
                    
                    
                    
                    
                
| Recent Major Changes in Facility/Equipment/Key Personnel | >3 per year | 1-3 per year | <1 per year |  |
            
            
                
                    ****
                    
                    
                    
                    
                
| Assigned Risk Level Total | >35 | 15-35 | <15 |  |
            
        

        

        

### Recommended APS Frequency

        

        
            
                
                    
                    
                
| Risk Level | Recommended APS Frequency |
| --- | --- |
            
            
                
                    ****
                    
                
| High (>35) | Mitigate risk level of the process. If mitigation is not feasible with current technologies, and the process is fully manual (e.g., ATMPs), personnel participation in APS should occur every 6 months (±1 month) per shift, rather than increasing the overall frequency of APS runs. |
                
                    ****
                    
                
| Medium (15-35) | Conduct APS every 6 months, ±1 month for each shift. |
                
                    ****
                    
                
| Low (<15) | Lower frequency per shift (e.g., every 12 months) may be justified, e.g., in case of well-established closed aseptic process inside gloveless isolator with no human intervention and with no history of OOS results. |
            
        

        

        

            1 Author's note: Example: A company historically aseptically filling liquid products using stainless steel systems and recently deciding to use single use systems for the first time in their facility.  

            2 Author's note: The process-frequency factor risk-scoring measures the level of proficiency that operators are expected to have with the process, given how often it is being executed.  

            3 Author's note: Reflects the overall operator proficiency in general aseptic processes (not necessarily just this one under consideration).  

            * OOL = Out-of-Limit; OOS = Out-of-Specification  

            While this example focuses on results above action limit, similar considerations should be given to significant negative trends of results above alert level.
        

    

    

        

### 導師解析 Tutorial Commentary

        

            

#### 核心概念解析 Key Concepts

            

**Risk-Based APS Frequency (風險導向 APS 頻率)：**此範例提供一個結構化的評分系統，考量十大風險因子，每個因子給予 1/3/5 分，加總後決定 APS 頻率。

            

十大風險因子涵蓋三大面向：

            

                
- **製程本身：**複雜度、新穎度、執行頻率、自動化程度、屏障保護等級

                
- **人員面向：**技術人員經驗年資

                
- **歷史合規：**EM 合規紀錄、APS/無菌測試失敗紀錄、重大偏差/稽核發現、重大變更

            

        

        

            

#### 公式與計算 Scoring Logic

            

```

總分範圍：10 項因子 x 最低 1 分 = 10（最低）
          10 項因子 x 最高 5 分 = 50（最高）

風險分級門檻：
  High   : > 35 分 → 必須降低風險或加密 APS
  Medium : 15-35 分 → 每 6 個月 ± 1 個月 / 每班次
  Low    : < 15 分 → 可能降頻至每 12 個月
            
```

        

        

            

#### 比喻說明 Analogy

            

想像一個「駕駛風險評分表」：你的車齡（製程新穎度）、駕駛經驗（操作員年資）、路況（歷史合規紀錄）、安全配備（屏障系統）都會影響你的保險費率。分數越高，保費（APS 頻率）越高；安全紀錄優良又開防碰撞車的老司機，保費自然最低。

        

        

            

#### 重點提示 Key Notes

            

                
- **EU Annex 1 底線：**不論風險評分結果如何，法規最低要求通常是每年兩次 APS。降頻必須有充分的科學依據。

                
- **ATMP 特殊考量：**高手動性 ATMP 製程若風險無法降低，則需增加操作員資格確認頻率（每 6 個月），間接增加 APS 總次數。

                
- **隔離器的優勢：**使用隔離器 (Isolator) 可大幅降低保護等級風險因子的分數，進而可能降低 APS 頻率。

                
- **趨勢也很重要：**範例聚焦在超過行動限值的結果，但超過警戒限值的負面趨勢同樣需要關注。

            

        

        

            

#### 實務應用 Practical Application

            

假設你的 CDMO 工廠有一條 oRABS 液態充填線，運作 3 年，操作員經驗約 4 年，過去一年有 1 次 OOL、無 OOS、1 次重大偏差、無重大設備變更。你可以這樣評分：

            

                
- 製程複雜度 = 3（中等）

                
- 新穎度 = 3（2-5 年）

                
- 頻率 = 3（每週至每季）

                
- 自動化 = 3（中等）

                
- 屏障保護 = 3（oRABS 無 VPHP）

                
- 人員經驗 = 3（2-5 年）

                
- EM 合規 = 3（1 OOL / 1-6 個月）

                
- 製程合規 = 1（無 OOS）

                
- 偏差/稽核 = 3（1-2 次重大偏差）

                
- 重大變更 = 1（不到 1 次）

            

            

**總分 = 26 → Medium → 每 6 個月執行 APS**

        

        

            

#### 練習思考 Practice Questions

            

                
1. 如果一家公司的 APS 曾經失敗過兩次，這會如何影響 Process Compliance History 的分數？對總分與 APS 頻率有何影響？

                
2. 為什麼 Process Frequency（製程執行頻率）越低反而風險越高？試從操作員熟練度的角度解釋。

                
3. 一間新建的隔離器廠房、全新製程、經驗豐富的團隊，你預期總分大約落在什麼範圍？

            

        

    

## 15.2 Example 2: Intervention Simulation Frequency Based on Application of Intervention Risk Evaluation & Management Model

    

        

### Original Text

        

This example is related to Section 3.4. One objective of a sound aseptic process design is to minimize the requirement to perform interventions and to reduce the risk involved as much as possible. The inclusion of a high-risk intervention in an APS does not mitigate its risk during aseptic processing. Hence, in this case study, after completing an intervention risk evaluation & management model (IREM) exercise, each intervention is assessed to determine if a procedural or engineering solution would reduce the risk level and then the process is reassessed for impact of the reworked intervention (2, 3, 4, 5). Next, the frequency and number of interventions to be included in the APS are defined based on the preceding year's trend of actual commercial production, and takes into consideration the new risk level of each intervention based on the IREM.

        

Table 15.2-1 represents a risk-based APS intervention simulation plan that was developed to help determine the frequency of the inclusion of interventions and to ensure that simulations are representative of all actual aseptic manipulations performed during regular aseptic operations (during online filtration, filling, stoppering, and sealing). Interventions that commonly occur would be routinely simulated, while those occurring rarely can be simulated periodically. A grouping logic can be established for the similar nature of interventions, provided they have similar risk factors like duration, proximity, and complexity. Interventions design aspects such as intervention location, tools used, and/or air flow effects may also be considered in establishing a grouping logic.

        

### Table 15.2-1 Intervention Simulation Frequency — Based on Application of IREM

        

*Line Type: Aseptic Vial Filling Line with open Restricted Access Barrier System placed in Grade B external environment*

        

        
            
                
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                
| No. | Intervention Description | Category | Type | Initial # / Freq. | Risk after IREM | Existing Risk / Mitigation | Final Risk | Revised # / Freq. | Rationale |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
            
            
                
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                
| 1 | Filling machine IPC calibration | Inherent | Open door | 3 / Every APS | High Risk | IPC calibration now performed before decontamination & assembly (no longer during aseptic process) | N/A | N/A | No aseptic process intervention involved; eliminated after mitigation1 |
                
                    
                    ****
                    
                    
                    
                    
                    
                    
                    
                    
                
| 2 | Group-A: Stopper lock adj. / Stopper plate adj. / Improper stoppers | Corrective | Open door | 10 / Every APS | Very High Risk | Additional glove port provided; activity now performed with closed door without breaking first air | Medium | 6 / Once per year | Number revised from 10 to 6 based on trend; risk mitigated |
                
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                
| 3 | Fill volume adjustment and initial in process checks | Inherent | Closed door | 1 / Every APS | Low Risk | No human intervention; operator enters command on machine panel | N/A | N/A | No aseptic process intervention involved; removed from APS list |
                
                    
                    ****
                    
                    
                    
                    
                    
                    
                    
                    
                
| 4 | Group-B: Filling machine setup (stoppering station, gassing station, filling station parts assembly) | Inherent | Open door | 1 / Every APS | High Risk | Product-contact surfaces wrapped & opened only after door closure; operators trained on new procedures | High Risk | 1 / Every APS | No change; filling setup is integral part of every batch (inherent intervention) |
                
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                
| 5 | Vial breakage at in-feed turntable of filling machine | Corrective | Closed door | 5 / Every APS | Low Risk2,3 | Procedure in place to remove surrounding empty vials; operators trained for aseptic handling | Low Risk | 3 / Once per year | Number & frequency changed based on trend and risk level |
                
                    
                    ****
                    
                    
                    
                    
                    
                    
                    
                    
                
| 6 | Group-C: Vial Jam / Vial overload-breakage / Sensor-format parts adj. / Star wheel adj. | Corrective | Open door | 5 / Every APS | Very High Risk | Procedural mitigation: discard exposed vials & sanitize RABS door; operators trained; EM controls in place | Medium Risk | 2 / Once per year | Number & frequency changed based on trend and mitigated risk level |
            
        

        

        

            Note: Other types of interventions that can be evaluated utilizing a similar approach are, for example, stopper-track minimum accumulation, loading of the stopper in the hopper through a rapid transfer port (RTP), an object falling on the in-feed turntable filling machine, and an empty-run machine-run check for vial transfer.  

            1 This Intervention simulation is eliminated after mitigation since this is no longer done as a part of the aseptic process in regular production.  

            2 The risk is rated low in this particular case. However, the risk level can increase depending on the frequency and extent of vial breakage and the procedure adopted to discard the adjacent empty vials.  

            3 During the evaluation, it was suggested that the installation of a physical barrier and removal of all vials in the same sector be considered as a mitigation to prevent risk of glass particles contacting open vials or other product-contact surfaces.
        

    

    

        

### 導師解析 Tutorial Commentary

        

            

#### 核心概念解析 Key Concepts

            

**IREM (Intervention Risk Evaluation & Management Model，介入風險評估與管理模型)：**這是一個兩階段評估框架：

            

                
1. **初始評估：**根據介入的本質（固有/矯正）、類型（開門/關門）、數量與頻率，評定初始風險等級

                
2. **風險降低後重新評估：**實施工程或程序改善後，重新評定風險等級，據此調整 APS 模擬計畫

            

            

**Grouping Logic (分組邏輯)：**性質相似的介入（如持續時間、接近度、複雜度相似）可以歸為一組處理，簡化管理。

        

        

            

#### 比喻說明 Analogy

            

IREM 就像醫院的「手術室感染風險評估」：每一種手術操作（介入）都有不同的感染風險，有些可以透過改用微創手術（工程改善）來降低風險。改善後要重新評估，決定這項操作需要多頻繁地做模擬訓練演練。如果某項操作已經改為自動化而不再需要人工介入，那就直接從演練清單上移除。

        

        

            

#### 重點提示 Key Notes

            

**關鍵洞察：在 APS 中模擬高風險介入，並不能降低該介入在正式生產時的風險！**

            

這是一個非常重要的觀念：APS 的目的是驗證（validate），不是緩解（mitigate）。真正的風險降低必須來自：

            

                
- **工程控制（優先）：**例如增加手套口、改為關門操作、自動化

                
- **程序控制（次之）：**例如改變操作順序、增加消毒步驟

            

            

範例中的成果非常亮眼：

            

                
- 介入 #1 和 #3：經改善後完全移除，不再需要 APS 模擬

                
- 介入 #2：從 Very High 降至 Medium，開門改為關門操作

                
- 介入 #6：從 Very High 降至 Medium，增加程序控制

            

        

        

            

#### 圖表解讀 Table Analysis

            

Table 15.2-1 的閱讀方式：從左到右追蹤每個介入的「風險旅程」：

            

                
1. **初始計畫**（第4-5欄）：起始模擬次數與頻率

                
2. **IREM 評估結果**（第6欄）：初始風險分級

                
3. **風險緩解行動**（第7欄）：採取的改善措施

                
4. **重新評估結果**（第8欄）：改善後風險分級

                
5. **修訂計畫**（第9-10欄）：根據新風險等級與歷史趨勢調整

            

        

        

            

#### 實務應用 Practical Application

            

CDMO 的實務啟示：當你在評估充填線的介入清單時，不要只是被動地列出所有介入並模擬它們。應該積極地問：

            

                
- 「這個介入能不能透過工程改善來消除？」（像介入 #1 一樣）

                
- 「這個開門操作能不能改為關門操作？」（像介入 #2 一樣）

                
- 「模擬次數是否反映了實際商業批次的趨勢？」（像介入 #5 從 5 次降為 3 次）

            

        

        

            

#### 練習思考 Practice Questions

            

                
1. 為什麼介入 #4（Group-B 機器設置）即使實施了改善措施，最終風險等級仍維持 High Risk，APS 計畫也沒有改變？

                
2. 介入 #5（玻璃瓶破碎）在 RABS 關門條件下為何被評為 Low Risk？在什麼情況下風險等級會提高？

                
3. 你的充填線上有哪些介入是目前用開門操作、但有機會改為關門操作的？

            

        

    

## 15.3 Example 3: Use of QRM to Define Inclusion and Frequency of Interventions During APS

    

        

### Original Text

        

This example is related to Section 4.1.3. The purpose of this example is to show how the risks associated with each intervention can be assessed and used to define when and how many times to simulate intervention during an APS. The risk of intervention is defined considering its complexity, duration, proximity to product and product-contact surfaces, frequency, results of air-flow visualization, and degree of protection (barrier system used) (Table 15.3-1). A score is assigned for each risk factor, and then the overall intervention risk level can be assigned and used to identify frequency of intervention simulation and the number of times it must be simulated during an APS (Table 15.3-2) with examples given (Table 15.3-3).

        

Note: The scoring assigned in Table 15.3-1 is based on specific interventions for a specific line/product. The scoring assignment can vary widely depending on the particulars of the intervention, the line design, and the process/product. The intent is not to provide examples of specific scoring, but rather to show how the tool can be used.

        

### Table 15.3-1 Intervention Risk Criteria with Scores (Example 3)

        

        
            
                
                    
                    
                    
                    
                    
                
| Intervention Risk Criteria | High (5) | Medium (3) | Low (1) | Assigned Risk Score |
| --- | --- | --- | --- | --- |
            
            
                
                    ****
                    
                    
                    
                    
                
| Complexity | High (e.g., machine setup) | Medium (e.g., removing a jammed rubber stopper) | Low (e.g., removing a toppled vial from conveyor belt) |  |
                
                    ****
                    
                    
                    
                    
                
| Duration | >10 minutes | 2-10 minutes | <2 minutes |  |
                
                    ****
                    
                    
                    
                    
                
| Proximity to Product/Contact Surfaces | <15 cm | 15-45 cm | >45 cm |  |
                
                    ****
                    
                    
                    
                    
                
| Frequency | >4 times per shift | 2-4 times per shift | ≤1 time per shift |  |
                
                    ****
                    
                    
                    
                    
                
| Air Flow Visualization (AFV) | Disruption of first air with something not in a sterile state (e.g., sleeve of gown); additional controls required | Disruption of first air with a sterilized tool or utensil | No disruption of first air |  |
                
                    ****
                    
                    
                    
                    
                
| Barrier | Conventional Filling Line* | RABS | Isolator |  |
            
            
                
                    ****
                    
                    
                    
                    
                
| Overall Intervention Risk Level Total | >20 | 11-20 | <11 |  |
            
        

        

        

*A conventional aseptic filling line is one without a RABS or isolator barrier. These are legacy systems and are in the process of being phased out.

        

### Table 15.3-2 Recommended Frequencies and Number of Interventions (Example 3)

        
            
                
                    
                    
                    
                
| Overall Intervention Risk Level | Recommended Frequency | Recommended Number per APS Run |
| --- | --- | --- |
            
            
                
                    ****
                    
                    
                
| High | Biannual* | At least the same number as in routine production |
                
                    ****
                    
                    
                
| Medium | Biannual* | May be less than the number in routine production |
                
                    ****
                    
                    
                
| Low | Yearly | May be less than the number in routine production |
            
        

        

*Biannual: twice a year (approximately every 6 months)

        

### Table 15.3-3 Risk Assessment of Possible Interventions for Vial-Filling in RABS without Built-In IPC (Example 3)

        

        
            
                
                    
                    
                    
                    
                    
                    
                    
                    
                    
                
| No. | Intervention | Complexity | Duration | Proximity | Frequency | AFV | Barrier | Total |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
            
            
                
                    
                    
                    
                    ****
                
| 1 | Equipment aseptic assembly (open-door)* | 5 | 5 | 5 | 1 | 3 | 5 | 24 |
                
                    
                    
                    
                    ****
                
| 2 | Removal of vials for IPC using glove ports | 1 | 1 | 3 | 5 | 1 | 3 | 14 |
                
                    
                    
                    
                    ****
                
| 3 | Introducing EM plates (open-door)* | 1 | 3 | 3 | 1 | 3 | 5 | 16 |
                
                    
                    
                    
                    ****
                
| 4 | Changing EM plates using glove ports | 3 | 1 | 3 | 3 | 1 | 3 | 14 |
                
                    
                    
                    
                    ****
                
| 5 | Change filling needle (open-door)* | 5 | 3 | 5 | 1 | 3 | 5 | 22 |
                
                    
                    
                    
                    ****
                
| 6 | Removing toppled open vial using glove ports | 1 | 1 | 5 | 3 | 1 | 3 | 14 |
                
                    
                    
                    
                    ****
                
| 7 | Removing jammed rubber stopper near stoppering station using glove ports | 3 | 3 | 5 | 3 | 3 | 3 | 20 |
                
                    
                    
                    
                    ****
                
| 8 | Removing toppled closed vial near exit using glove ports | 1 | 1 | 1 | 3 | 1 | 3 | 10 |
            
        

        

        

*Open-door interventions should be avoided when possible.

        
        

### Explanation of Interventions

        

            
- Interventions 1 & 5 can be simulated every 6 months with at least the same number occurring during routine production.

            
- Interventions 2, 3, 4, 6, & 7 can be simulated every 6 months; however, the number may be less than that occurring during routine production.

            
- Intervention 8 can be simulated every year, and the number may be less than that occurring during routine production.

        

        

            Note: Use of a filling line with built-in IPC within an isolator instead of oRABS (thus executing all interventions with closed doors) can lead to: eliminating Intervention 2 from routine process; reducing overall risk level of Interventions 1 & 5 from "High" to "Medium"; and other interventions will have lower overall risk scores. Such risk reduction has high value, as adding design controls is the priority risk control in EU Annex 1, followed by procedural controls. APS as a part of the monitoring system is the lowest priority in reducing aseptic processes risks.
        

    

    

        

### 導師解析 Tutorial Commentary

        

            

#### 核心概念解析 Key Concepts

            

Example 3 使用**六項風險準則**（Complexity, Duration, Proximity, Frequency, AFV, Barrier）對每個介入進行量化評分，每項 1/3/5 分，總分決定整體風險等級：

            

                
- **High (>20)：**每半年模擬，次數至少等於例行生產

                
- **Medium (11-20)：**每半年模擬，次數可少於例行生產

                
- **Low (<11)：**每年模擬，次數可少於例行生產

            

            

六項準則的分數範圍為 6（最低）到 30（最高），門檻設定為 11 和 20。

        

        

            

#### 比喻說明 Analogy

            

把每個介入想像成一場「微型手術」，六項風險準則就像手術風險評估量表：手術複雜度（Complexity）、手術時間（Duration）、離重要器官多近（Proximity）、你多常做這種手術（Frequency）、手術視野是否被遮擋（AFV）、手術室等級（Barrier）。分數越高的「手術」，你就需要更頻繁地做模擬練習，而且練習次數不能少於實際執行次數。

        

        

            

#### 重點提示 Key Notes

            

**開門操作 (Open-door Intervention) 是最大的風險放大器：**

            

觀察 Table 15.3-3 中 Barrier 欄位的分數：

            

                
- 開門操作（conventional filling line 等級）= 5 分

                
- RABS 關門操作 = 3 分

                
- 隔離器 = 1 分

            

            

介入 #1（設備組裝）和 #5（更換充填針）得分最高（24 和 22），主要因為它們結合了高複雜度 + 高接近度 + 開門操作。

            

**EU Annex 1 的風險控制優先順序：**

            

                
1. 設計控制（Design controls）- 最優先

                
2. 程序控制（Procedural controls）- 次之

                
3. 監測系統（如 APS）- 最低優先

            

        

        

            

#### 圖表解讀 Table Analysis

            

Table 15.3-3 揭示的幾個重要模式：

            

                
- **介入 #7（移除卡住的膠塞）**分數 = 20，恰好在 Medium/High 邊界。Proximity = 5（非常接近加塞站）且 AFV = 3（會干擾第一氣流），這使得它成為需要密切關注的介入。

                
- **介入 #8（移除出口處傾倒的已封瓶）**分數最低 = 10，因為瓶子已封閉（Proximity = 1），且不干擾第一氣流（AFV = 1）。

                
- **隔離器的效果：**如果改用隔離器，所有 Barrier 分數從 3 或 5 降至 1，立即降低每個介入 2-4 分。

            

        

        

            

#### 實務應用 Practical Application

            

在你的 CDMO 工廠評估介入風險時，建議以下步驟：

            

                
1. 列出所有介入（包括固有和矯正介入）

                
2. 用六項準則為每個介入評分

                
3. 重點關注 >20 分的 High Risk 介入，優先以工程改善降低風險

                
4. 根據前一年商業批次的介入趨勢數據調整模擬次數

                
5. 將性質相似的介入分組管理（如 Group-A, B, C）

            

        

        

            

#### 練習思考 Practice Questions

            

                
1. 如果介入 #3（引入 EM 培養皿）改為用 RTP 以關門方式進行，Barrier 分數從 5 降至 3，AFV 分數從 3 降至 1，新的總分是多少？風險等級會改變嗎？

                
2. 為什麼介入 #2（IPC 取瓶）的 Frequency 分數是 5（最高），但總分仍只有 14（Medium）？這告訴我們什麼？

                
3. 介入 #7 的總分為 20，剛好在 Medium 上限。如果是你，會把它歸為 Medium 還是 High？為什麼？

            

        

    

## 15.4 Example 4: Use of QRM to Define Inclusion and Frequency of Interventions during APS

    

        

### Original Text

        

This example is related to Section 3.2 and Section 7.5.1.1. It shows how to define the required number of APS for lines where different container–closure sizes with the same configuration and similar process are filled. This applies to the number of APS runs for each container size in initial validation, ongoing verification, and upon introducing a new container–closure size using bracketing and/or matrixing approach (Table 15.4-1, Table 15.4-2, and Table 15.4-3).

        

This cannot be used for different container–closure configurations, different processes, or when other factors necessitating three (3) APS runs (e.g., different machine parts such as pumps or closure sorters are used and have impact). Apart from container size, other factors that can drive worst-case selection criteria shall be considered in the risk assessment to decide the number and frequency of runs.

        

Note: The scoring assigned in Table 15.4-1 is based on specific interventions for a specific line/product. The scoring assignment can vary widely depending on the particulars of the intervention, the line design, and the process/product. The intent is not to provide examples of specific scoring, but rather to show how the tool can be used.

        

### Table 15.4-1 Intervention Risk Criteria with Scores (Example 4)

        

        
            
                
                    
                    
                    
                    
                    
                
| Intervention Risk Criteria | High (5) | Medium (3) | Low (1) | Assigned Risk Score |
| --- | --- | --- | --- | --- |
            
            
                
                    ****
                    
                    
                    
                    
                
| Complexity | High (e.g., machine setup) | Medium (e.g., removing a jammed rubber stopper) | Low (e.g., removing a toppled vial from conveyor belt) |  |
                
                    ****
                    
                    
                    
                    
                
| Duration | >10 minutes | 2-10 minutes | <2 minutes |  |
                
                    ****
                    
                    
                    
                    
                
| Proximity to Product/Contact Surfaces | <15 cm | 15-45 cm | >45 cm |  |
                
                    ****
                    
                    
                    
                    
                
| Frequency1 | >4 times per shift | 2-4 times per shift | ≤1 time per shift |  |
                
                    ****
                    
                    
                    
                    
                
| Air Flow Visualization (AFV) | Interrupt first air (must be corrected first) | Minor flaws but no ingress of less clean air | No flaws |  |
                
                    ****
                    
                    
                    
                    
                
| Barrier2 | Conventional Filling Line* | RABS | Isolator |  |
            
            
                
                    ****
                    
                    
                    
                    
                
| Overall Intervention Risk Level Total | >20 | 11-20 | <11 |  |
            
        

        

        

            1 Frequency may or may not be a risk factor. For this example, it was chosen to be a factor of consideration.  

            2 Using oRABS does not mean that all risks are the same since very few interventions are open-door interventions (e.g., during machine set-up) and they cannot have the same risk level of other interventions. Even if the assumption is that all interventions will be closed door interventions, this risk factor has to be considered because it will lead to the need for different frequencies of the same intervention when done through oRABs than the frequency needed when conducted using another line with an isolator.  

            *A conventional aseptic filling line is one without a RABS or isolator barrier. These are legacy systems and are in the process of being phased out.
        

        

### Table 15.4-2 Recommended Frequencies and Number of Interventions (Example 4)

        
            
                
                    
                    
                    
                
| Overall Intervention Risk Level | Recommended Frequency | Recommended Number per APS Run |
| --- | --- | --- |
            
            
                
                    ****
                    
                    
                
| High | Biannual* | At least the same number as in routine production |
                
                    ****
                    
                    
                
| Medium | Biannual* | May be less than the number in routine production |
                
                    ****
                    
                    
                
| Low | Yearly | May be less than the number in routine production |
            
        

        

*Biannual: twice a year (approximately every 6 months)

        

### Table 15.4-3 Risk Assessment of Possible Interventions for Vial-Filling in Open RABS without Built-In IPC (Example 4)

        

        
            
                
                    
                    
                    
                    
                    
                    
                    
                    
                    
                
| No. | Intervention | Complexity | Duration | Proximity | Frequency | AFV | Barrier | Total |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
            
            
                
                    
                    
                    
                    ****
                
| 1 | Equipment aseptic assembly (open-door intervention) | 5 | 5 | 5 | 1 | 3 | 5 | 24 |
                
                    
                    
                    
                    ****
                
| 2 | Removal of vials for IPC using glove ports | 1 | 1 | 3 | 5 | 1 | 3 | 14 |
                
                    
                    
                    
                    ****
                
| 3 | Introducing EM plates (open-door intervention) | 1 | 3 | 3 | 1 | 3 | 5 | 16 |
                
                    
                    
                    
                    ****
                
| 4 | Changing EM plates using glove ports | 3 | 1 | 3 | 3 | 1 | 3 | 14 |
                
                    
                    
                    
                    ****
                
| 5 | Change filling needle (open-door intervention) | 5 | 3 | 5 | 1 | 3 | 5 | 22 |
                
                    
                    
                    
                    ****
                
| 6 | Removing toppled open vial using glove ports | 1 | 1 | 5 | 3 | 1 | 3 | 14 |
                
                    
                    
                    
                    ****
                
| 7 | Removing jammed rubber stopper near stoppering station using glove ports | 3 | 3 | 5 | 3 | 3 | 3 | 20 |
                
                    
                    
                    
                    ****
                
| 8 | Removing toppled closed vial near exit using glove ports | 1 | 1 | 1 | 3 | 1 | 3 | 10 |
            
        

        

        

Note: See the explanation of Interventions in Table 15.3-3 for more information.

    

    

        

### 導師解析 Tutorial Commentary

        

            

#### 核心概念解析 Key Concepts

            

**Bracketing & Matrixing (括弧法與矩陣法)：**Example 4 的核心目標是解決一個常見的實務問題：同一條充填線要處理不同容器尺寸時，如何合理決定 APS 次數？

            

                
- **適用條件：**相同配置、相似製程、不同容器密封尺寸

                
- **不適用：**不同容器密封配置、不同製程、或因其他因素（如不同泵浦/分揀器）需要 3 次 APS 的情況

            

            

**與 Example 3 的差異：**Table 15.4-1 的 AFV 準則描述更為具體（「Interrupt first air」vs.「Disruption with non-sterile entity」），反映不同公司可以根據自身情況調整準則的細微定義。

        

        

            

#### 比喻說明 Analogy

            

Bracketing/Matrixing 就像汽車安全測試：同一車型的不同排量版本（2.0L、2.5L、3.0L），不需要每個版本都做完整的碰撞測試。你可以測試最大和最小排量（bracketing），或用科學分析證明某個版本代表最壞情況（worst case），其他版本則做縮減測試。但如果車身結構完全不同，就不能用這個方法了。

        

        

            

#### 重點提示 Key Notes

            

**Example 3 vs Example 4：相似但有差異**

            

Tables 15.3-3 和 15.4-3 的評分結果完全相同，但兩個範例的**應用情境不同**：

            

                
- **Example 3：**聚焦於定義介入模擬的頻率與次數

                
- **Example 4：**聚焦於不同容器尺寸時如何運用 bracketing/matrixing 決定 APS 次數

            

            

注意腳註 1 的重要提醒：Frequency 是否作為風險因子，本身就是一個需要決定的事項。在這個範例中選擇納入，但其他公司可能有不同的判斷。

            

腳註 2 也值得注意：使用 oRABS 不代表所有介入的風險都相同，因為少數介入仍需開門操作（如機器設置），這些介入的風險等級不能與關門操作等同視之。

        

        

            

#### 圖表解讀 Table Analysis

            

比較 Example 3 與 Example 4 的 AFV 準則差異：

            
                
                    
                    
                    
                
| 分數 | Example 3 AFV | Example 4 AFV |
| --- | --- | --- |
                
                    ****
                    
                    
                
| High (5) | 非無菌物質干擾第一氣流（如衣袖）；需額外控制 | 中斷第一氣流（必須先糾正） |
                
                    ****
                    
                    
                
| Medium (3) | 無菌工具干擾第一氣流 | 輕微缺陷但無較不潔淨空氣進入 |
                
                    ****
                    
                    
                
| Low (1) | 不干擾第一氣流 | 無缺陷 |
            

            

這個差異說明不同公司可以（也應該）根據自己的 AFV 研究結果來定義風險準則。

        

        

            

#### 實務應用 Practical Application

            

CDMO 經常需要在同一條線上充填不同容器規格的產品。運用 Example 4 的方法：

            

                
1. 先用六項風險準則評估所有介入的風險等級

                
2. 確認不同容器尺寸使用的是相同配置和相似製程

                
3. 識別是否存在 worst-case 容器尺寸（例如最小瓶可能更難操作）

                
4. 根據 bracketing 策略決定每個尺寸的 APS 次數

                
5. 除了容器尺寸外，也要考慮其他可能驅動 worst-case 選擇的因素

            

        

        

            

#### 練習思考 Practice Questions

            

                
1. 你的充填線同時生產 2mL、10mL、和 50mL 的小瓶。如果 2mL 被風險評估認定為 worst case（因為開口最小、充填精度要求最高），你會如何設計初始驗證的 APS 計畫？

                
2. 如果 Table 15.4-3 中的 Barrier 從 oRABS (分數 3-5) 改為 Isolator (分數 1)，介入 #1 的總分會從 24 降到多少？風險等級會改變嗎？

                
3. 為什麼 TR22 特別強調 bracketing/matrixing 方法不適用於不同的容器密封配置？試舉一個會導致風險差異的例子。

# Appendix 3: Risk Assessment Examples 5-8 (15.5-15.8)

    

附錄三：風險評估範例 5-8 — APS 設計、活動策略與先進治療藥品

    

PDA Technical Report No. 22 (Revised 2025) | p98 - p115 | Section 8b

    

### 本章學習目標

    

        
- 理解如何為單一劑型、不同充填量的產線設計 APS（無菌製程模擬）方案（範例 5）

        
- 學習如何為不同劑型／不同產品的產線評估 APS 執行次數（範例 6）

        
- 掌握隔離器條件下活動策略（Campaign Strategy）的初始驗證與定期再驗證方法（範例 7）

        
- 認識先進治療藥品 (ATMP) 的無菌製程模擬設計，包含 AREM 風險評估模型（範例 8）

        
- 了解 PDA 相關參考文獻與延伸閱讀資源

    

    

### 本節導覽 Section Navigation

    

        15.5 範例 5：單一劑型不同充填量
        15.6 範例 6：不同劑型產線
        15.7 範例 7：隔離器活動策略
        15.8 範例 8：ATMP 設計
        參考文獻與延伸資源
        本節總結
    

## 15.5 Example 5: APS Design for Lines Producing Single Dosage Form with Different Fill Volume

    

        

### Original Text

        

This example is related to Section 3.2 and Section 7.7 and provides guidance regarding lines with the same dosage form with multiple container sizes or fill volumes. In case there is a vial filling line on which 2, 4, 8, and 10 mL vials will be filled and none of them is assessed to be a worst-case, at least three (3) runs from each of minimum and maximum vial sizes should be done, in addition to at least one run from each other vial size (Table 15.5-1).

        

**Table 15.5-1** APS Design for Lines Producing Different Products/Dosage Forms (No Worst-Case Vial)

        
            
| Vial Amount (mL) | Initial Number of Runs |
| --- | --- |
            ****
| 2 | 3 |
            
| 4 | 1 |
            
| 8 | 1 |
            ****
| 10 | 3 |
        

        

However, in the event one of these vials sizes (based on a science-based risk assessment; see Section 3.4) is a worst-case (e.g., 10 mL), at least three (3) runs of this vial size plus at least one run of each of the other vial sizes should be done in the initial validation study (Table 15.5-2) (see Section 7.5.1.1 for additional information on bracketing criteria).

        

**Table 15.5-2** Aseptic Process Simulation Design for Lines Producing Different Products/Dosage Forms (Worst-Case Vial)

        
            
| Vial Amount (mL) | Initial Number of Runs |
| --- | --- |
            
| 2 | 1 |
            
| 4 | 1 |
            
| 8 | 1 |
            ****
| 10 | 3 |
        

        

In the examples in both Table 15.5-1 and Table 15.5-2, if a new vial size (e.g., 6 mL) needs to be introduced, it should be assessed as to whether it represents a worst-case condition. If so, at least three (3) runs of the new vial will be required; otherwise, at least one (1) run will be required as it lies between the minimum and maximum vials, each of which had three (3) successful consecutive runs. During ongoing (continued) process verification, rotation of all vial volumes should be represented over a risk-based schedule to cover all of them (e.g., over two years). When risk-based evaluation indicates a worst-case container size, its APS frequency should be higher than other container sizes.

    

    

        

### Tutorial Commentary

        

            

#### 核心概念解析 Key Concepts

            

**Bracketing / Matrixing（分組／矩陣方法）：**這是 ICH Q1D 中用於穩定性研究的概念，在此被延伸應用到 APS 設計。Bracketing 意味著只測試極端條件（最小與最大容器），中間容器視為被「涵蓋」。

            

**Worst-Case（最壞情況）：**基於科學風險評估判定的、對無菌保證構成最大挑戰的容器尺寸。例如：開口最大、暴露時間最長、或操作最複雜的容器。

        

        

            

#### 比喻說明 Analogy

            

想像你開一間餐廳，同一道菜可以裝在小碗、中碗、大碗、特大碗中。你不需要每種碗都做三次品質測試 -- 只需要確認最小碗（容易灑出來）和最大碗（端盤最困難）都通過三次測試，中間尺寸各做一次確認即可。但如果風險評估認為特大碗才是最難處理的，那就專注在特大碗做三次完整驗證。

        

        

            

#### 重點提示 Key Notes

            

                
- **無 worst-case 時：**最小 + 最大各 3 runs，中間每個至少 1 run（Table 15.5-1）

                
- **有 worst-case 時：**worst-case 尺寸 3 runs，其餘每個至少 1 run（Table 15.5-2）

                
- **新尺寸引進時：**必須重新評估是否為 worst-case；若是則 3 runs，否則 1 run 即可

                
- **持續性驗證 (CPV)：**所有容器尺寸應以風險為基礎的排程輪替涵蓋（例如兩年內全部覆蓋）

            

        

        

            

#### 公式與計算 APS Runs 總數比較

            

```

無 Worst-Case 情境（Table 15.5-1）:
  2 mL: 3 + 4 mL: 1 + 8 mL: 1 + 10 mL: 3 = 共 8 runs

有 Worst-Case 情境（Table 15.5-2）:
  2 mL: 1 + 4 mL: 1 + 8 mL: 1 + 10 mL: 3 = 共 6 runs

結論：正確識別 worst-case 可減少初始驗證
的總 APS 執行次數，節約時間與成本。
            
```

        

        

            

#### 練習思考 Practice Questions

            

                
1. 如果一條產線充填 1 mL、5 mL、20 mL、50 mL 的西林瓶，且 50 mL 被評估為 worst-case，初始驗證需要多少次 APS runs？

                
2. 在進行持續性驗證時，如果公司每年執行 2 次 APS，應如何安排不同容器尺寸的輪替？

                
3. 為什麼引進新容器尺寸時需要重新進行 worst-case 評估，而不能直接假設它不是 worst-case？

            

        

    

## 15.6 Example 6: APS Design for Lines Producing Different Products or Dosage Forms

    

        

### Original Text

        

This example is related to Section 3.2. Table 15.6-1 shows how to assess the number of APS runs needed for a line used to fill different dosage forms and how, in some cases, if supported by a risk assessment, it can be possible to design one APS run that simulates and covers the worst-case scenario for more than one dosage form manufactured on the same line. Understanding the process and associated risks is crucial to ensure that the APS design will represent worst-case scenarios for all dosage forms. In the example, only differences in process steps were considered with other factors fixed. When applying the concept, other factors should also be considered that could impact aseptic process and may necessitate more APS runs.

        

**Table 15.6-1** Assessing Number of Aseptic Process Simulation Requirements for a Line Used to Fill Different Dosage Forms

        

        
            
                
                
                
                
                
            
| Process Step | Vials filled with Solution | Vials filled with Suspension | Lyophilized Vials | Inclusion of APS for Line |
| --- | --- | --- | --- | --- |
            
                
                
                
                
                
            
| Preparation in Grade C | Yes | Yes | Yes | Not an aseptic process step and no need to typically simulate while preparing media |
            
                
                
                
                
                
            
| Sterile Filtration | Yes | Yes | Yes | Yes (for aseptic assembly but not necessarily using same filter) |
            
                
                
                
                
                
            
| Aseptic Addition | N/A | Yes | N/A | Yes |
            
                
                
                
                
                
            
| Homogenization | N/A | Yes | N/A | Yes |
            
                
                
                
                
                
            
| Filling | Yes | Yes (may include suspension stirring and recirculation to avoid sedimentation, and may also include automatic rejection of first-filled units after machine stoppage) | Yes | Yes (using worst-case scenarios regarding equipment configuration for suspension dosage forms) |
            
                
                
                
                
                
            
| Stopper Insertion | Yes (complete insertion) | Yes (complete insertion) | Yes (half insertion of lyophilization stopper) | Yes* |
            
                
                
                
                
                
            
| Capping after Stopper Insertion | Yes | Yes | N/A | Yes+ |
            
                
                
                
                
                
            
| Lyophilizer Loading | N/A | N/A | Yes | Yes* |
            
                
                
                
                
                
            
| Lyophilizer Cycle | N/A | N/A | Yes | Yes (exposed to partial vacuum and vacuum release)* |
            
                
                
                
                
                
            
| Lyophilizer Unloading | N/A | N/A | Yes | Yes* |
            
                
                
                
                
                
            
| Capping of Lyophilization Vials | N/A | N/A | Yes | Yes* |
        

        

        

            

*It might be possible to utilize the lyophilizer configuration as worst case for the line given that it includes all the steps for liquid fill, plus the lyophilization specific steps. If this approach is taken, it must be fully documented and justified in the APS program (specifically for the potential difference in the container-closure system). Alternatively, both configurations will need to be simulated in the APS program.

            

+The capping process, whether for liquid or lyophilized configurations should be practically identical, as in both cases fully seated stoppers are being capped.

        

        

The type of media used may also impact the number of runs and frequency of APSs. For example, if there are types of products (e.g., oxygen-sensitive) exposed to anaerobic conditions (less than 0.1% residual oxygen levels) during the entire process (e.g., nitrogen purging of WFI before preparation, nitrogen blanket in vessels, and nitrogen purging before, during, and after filling until the container is sealed) and other products filled under aerobic conditions, three (3) APSs using each type of media may be needed in the initial study, which may be followed by alternating biannual APS runs between two media types. This concept applies even if the two products share the same equipment and the same process steps.

        

For lines that handle different dosage forms using different container-closure systems (e.g., equipment used to fill different nested primary-packaging materials, such as vials, prefilled syringes, and cartridges), a separate APS will be required for each.

    

    

        

### Tutorial Commentary

        

            

#### 核心概念解析 Key Concepts

            

**多劑型產線 APS 設計：**當一條充填線可以處理溶液 (Solution)、懸浮液 (Suspension)、冷凍乾燥 (Lyophilized) 等不同劑型時，必須評估每個劑型需要多少次 APS。關鍵在於比較各劑型的製程步驟差異。

            

**Worst-Case 涵蓋策略：**冷凍乾燥劑型通常包含液體充填的所有步驟，再加上裝載、乾燥循環、卸載等額外步驟，因此可能被視為該產線的 worst-case 配置。這樣做可以用一次 APS 涵蓋多個劑型。

        

        

            

#### 比喻說明 Analogy

            

如同考駕照：如果你拿到了大型車駕照（包含倒車入庫、窄巷過彎等所有困難項目），理論上你也被視為有能力駕駛小型車。冷凍乾燥 APS 就像「大型車駕照」-- 它涵蓋了所有液體充填步驟加上額外的冷乾步驟。但前提是你必須在 APS 計畫中充分記錄與論證這個邏輯。

        

        

            

#### 重點提示 Key Notes

            

                
- **Grade C 配製：**非無菌步驟，通常不需在 APS 中模擬

                
- **懸浮液特殊考量：**需模擬攪拌、循環管路、停機後首批單位自動剔除等操作

                
- **厭氧 vs 好氧環境：**若有產品在嚴格厭氧條件（<0.1% O2）下製造，需使用**厭氧培養基**進行 APS，這是額外的 3 次驗證

                
- **不同容器密封系統 = 分別驗證：**西林瓶 vs 預填充注射器 vs 卡式瓶必須各做獨立 APS

            

        

        

            

#### 表格解讀 Table Analysis

            

Table 15.6-1 的設計精髓在於「製程步驟比較矩陣」：

            

                
- **溶液劑型：**無菌過濾 → 充填 → 完全壓塞 → 軋蓋（4 個無菌步驟）

                
- **懸浮液劑型：**增加無菌添加 + 均質化步驟（6 個無菌步驟）

                
- **冷凍乾燥劑型：**除基本步驟外增加半壓塞 + 裝載/循環/卸載/軋蓋（最多無菌步驟）

            

            

步驟越多、暴露時間越長，無菌風險就越高。

        

        

            

#### 實務應用 Practical Application

            

**CDMO 場景：**某 CDMO 的一條充填線服務三個客戶：客戶 A 的溶液注射劑、客戶 B 的懸浮液注射劑、客戶 C 的冷凍乾燥產品。如果可以論證冷凍乾燥配置為 worst-case，只需執行 3 次冷凍乾燥 APS 即可涵蓋所有劑型。但若三個產品使用不同的容器密封系統（例如客戶 A 用 2R 西林瓶、客戶 C 用 10R 西林瓶但使用不同的冷乾塞），仍需考慮容器差異對 APS 的影響。

        

        

            

#### 練習思考 Practice Questions

            

                
1. 為什麼 Grade C 環境中的配製步驟不需要在 APS 中模擬？

                
2. 如果一條產線同時充填好氧和厭氧產品，初始驗證至少需要多少次 APS？為什麼？

                
3. 如果公司決定用冷凍乾燥 APS 涵蓋所有劑型，需要在 APS 計畫中記錄哪些關鍵論證？

            

        

    

## 15.7 Example 7: Campaign Strategy Example for an Isolator Line

    

        

### Original Text

        

The following describes a manufacturing campaign that is produced under isolator conditions (Sections 4.3.3, 7.11, 7.12). Examples will be provided for the initial startup of a completely new isolator line and, upon successful initial validation, subsequent revalidation of the line under routine conditions.

        

*Note: This description is for a particular process, and it is not meant to represent the only way to run a campaign.*

        

### Initial New Line Setup with Four (4) Batches in Campaign

        

In this case, a campaign is defined as four consecutive batches of material filled following established and validated supporting processes.

        

The high-level overview of the production setup in this example is:

        

            
- The filling line is high-speed and high-volume (~600 units/min) filling high volumes (> 200,000 units per batch)

            
- Decontamination of the isolator takes place prior to the first batch and does not occur again prior to subsequent batches.

            
- Product delivery is via single-use tubing, installed through an RTP to a filling manifold.

            
- All wet parts may remain in place, with a product flush and a new product tank connected to the filling manifold between each batch.

            
- The line will be cleared only in the same manner as for commercial product fills, such as product spills or glass breakage.

            
- All indirect product contact parts are sterilized and mounted on the line before the decontamination and campaign filling.

            
- EM of air takes place continuously throughout, culminating in surface sampling at the end of the fourth batch only.

        

        

The "campaign-style" APS is repeated three times for initial validation of the aseptic process on the new isolator line. Activities that have been assessed to pose a risk to product sterility are described in Figure 15.7-1, including those that may be dependent on duration. Two approaches for the APS of this type of isolator campaign product-fill are schematically presented below:

        

### Example 1A: Initial APS Validation – The Conservative Approach

        

This approach is recommended for a facility with little to no experience or historical data for production in isolators. In this case, the APS with media is executed for the same duration of time that it takes to execute four consecutive product batches, with the same established and validated supporting processes. This means four consecutive media-filled batches. The campaign may be simulated only by the filling of media separated by batch changeovers. The interventions and activities are based on a risk assessment of presumed activities (e.g., from engineering runs, water batches, training sessions) and are fully simulated. This must be repeated three times for initial validation.

        

### Example 1B: Initial APS Validation – A Risk-Based Approach

        

The approach illustrated in Figure 13.4-2 can be applied to a facility with experience in isolator technology and campaign-filling supported by adequate historical data. The campaign may be simulated first by performing a single APS on the isolator line to capture the setup process and the complete filling process. This is followed by another campaign to fill the first four batches of the campaign with product, followed by a media-filled batch. The filling of both media batches includes interventions/activities that are representative worst-case scenarios, based on a risk assessment, in which data from similar lines can be included and assessed (e.g., type/frequency of interventions, EM data). In this way, the number of media-filled units and the time spent on filling media can be reduced. This must be repeated three times for initial validation.

        

*Note: This validation plan does not include reverting to the previous state due to irreversible changes or a completely new line. If the initial APS is triggered by a change, at least one APS for decommissioning the previous design should be completed before the design change. Product batches run in a campaign ending with media fill cannot be released until full validation (three times) is concluded.*

    

    

        

### Tutorial Commentary

        

            

#### 核心概念解析 Key Concepts

            

**Campaign Manufacturing（活動式製造）：**在一次隔離器去污 (Decontamination) 後，連續充填多個批次（本例為 4 批），期間不再重新去污。這最大化了生產效率，但也意味著無菌環境必須在整個活動期間持續維持。

            

**Conservative vs Risk-Based Approach：**

            

                
- **保守方法 (1A)：**4 批全部用培養基模擬，完整複製商業生產時間 -- 適合新設施、無歷史數據

                
- **風險導向方法 (1B)：**1 批培養基 APS + 4 批商業產品 + 1 批尾部培養基 APS -- 適合有經驗的設施

            

        

        

            

#### 比喻說明 Analogy

            

活動式製造就像馬拉松比賽：隔離器去污是起跑前的場地清理，四個批次就是四段賽程。**保守方法**像是讓替身跑完全程 42 公里來驗證路線安全；**風險導向方法**像是替身只跑頭尾各 5 公里（最可能出問題的起點和疲勞段），中間 32 公里由正式選手跑，但在最後加跑 5 公里來模擬最惡劣的疲勞狀態。

        

        

            

#### 重點提示 Key Notes

            

                
- **RTP（快速傳遞口）：**用於將單次使用管路導入隔離器內部，是活動策略中的關鍵完整性控制點

                
- **環境監測 (EM)：**空氣粒子監測全程執行，表面取樣僅在第四批結束後進行

                
- **產品批次放行限制：**以培養基充填結尾的活動中，產品批次**不能在完整驗證（三次）完成前放行**

                
- **去污後不再重複去污：**這是活動策略的核心假設，也是風險的最大來源

            

        

        

            

#### 公式與計算 Campaign APS 工作量比較

            

```

保守方法 (1A) 初始驗證：
  4 批培養基 x 3 次重複 = 12 批培養基充填
  每批 >200,000 單位 => >2,400,000 單位需培養

風險導向方法 (1B) 初始驗證：
  (1 批培養基 + 4 批產品 + 1 批培養基) x 3 次
  = 6 批培養基 + 12 批產品
  培養基量減少 50%，節約大量成本和時間

前提：必須有充分的歷史數據支持！
            
```

        

        

            

#### 練習思考 Practice Questions

            

                
1. 為什麼新隔離器產線（無歷史數據）必須使用保守方法而非風險導向方法？

                
2. 活動策略中，如果第三批產品的 EM 結果異常，應如何處理已充填的前兩批產品？

                
3. 為什麼隔離器產線比 oRABS 產線更適合採用活動策略？

            

        

    

    

        

### Concerns and Considerations

        

This campaign example presented here is intended for isolator conditions, where the risk for contamination is minimized due to (1) the decontamination process and (2) the barrier system, including exclusive use of glove ports for interventions. The following are aspects to consider in a risk assessment for selecting which approach is acceptable and the appropriate number of batches for the process being evaluated including (but not limited to):

        

            
- Size of the batch and speed of the filling technology

            
- Filling of same product/formulation (unless CIP/SIP is in place, or changeout of the filling path) and/or container size

            
- Historical data about the process and any process failures (e.g., APS, sterility testing)

            
- Intervention criticality and (expected) frequency

            
- Duration of batch and campaign size

            
- Integration of SUS and disposable tubing when batches are changed over

            
- Ongoing quality risk management (QRM) of events during the product batches to ensure the quality of the environment is maintained

            
- Experience of the staff with isolator technology, including the operators' familiarity and training in running isolator lines

            
- Integrity of the barrier technology, including gloves, as well as integrity-test results/trends, including (but not limited to):
                

                    
    - Visual inspection of glove ports during each intervention

                    
    - Glove integrity-testing at risk-based intervals, either in between batches or every other batch, depending on the total number of batches in the campaign and based on risk

                    
    - Visual inspection of RTP canisters and integrity testing of the filter

                    
    - Robustness of docking systems and transfer of product and material through relevant transfer ports

                

            

            
- Maximum time from end of VPHP treatment and end of last fill

            
- Supporting data from EM performance qualification (EMPQ) and trending from a robust, risk-based routine EM program, including:
                

                    
    - Viable- and nonviable-particulate monitoring for the entire duration of the fill (to include all batches)

                    
    - End-of-campaign surface samples

                

            

        

        

### Periodic Revalidation and Bracketing Worst-Case Conditions

        

In this case, a campaign is defined as four batches; an APS is performed as a combination of a single batch, including full setup process and end of the simulation, and a campaign with a media-batch as a piggy-back to the end of four product fills to mimic worst-case conditions with respect to duration. (see Sections 7.11, 7.12) Both APS studies are repeated every six months in the periodic revalidation (see Section 3.2), with a total of four APS studies for this line annually. In this way, the "start and end" of the campaign is simulated, and a number of units and the duration of the APS can be kept at a reasonable level. All activities, including setups and interventions normally performed, are represented in those two media batches of typically 10,000 units each.

        

Periodic revalidation will be the same regardless of how the company established their initial validation setup, as described in the initial validation setup of Example 1A and Example 1B.

        

### Concerns and Considerations for Periodic Revalidation

        

Typically, a risk assessment can determine the type of activity that may introduce the highest risk (e.g., the setup, which involves many steps, the transfer of materials into the line and through the line by use of the gloves). Corrective interventions done via glove ports and the transfer of items through RTP ports minimize the contamination risk considerably compared to an open RABS. The target size of the APS can vary and will depend on the number of units needed to perform the planned activities, interventions, etc. (Section 7.10). Should any of the media-filled campaigns yield a failed batch, then options for returning to a more conservative initial validation must be evaluated.

    

    

        

### Tutorial Commentary (cont.)

        

            

#### 核心概念解析 Key Concepts

            

**Piggy-Back APS（搭載式 APS）：**在定期再驗證中，將培養基充填「搭載」在活動的最後一批產品之後執行。這樣可以模擬活動末期最惡劣的時間條件（Duration worst-case），同時避免佔用過多產能。

            

**VPHP（汽化過氧化氫）去污：**隔離器使用 VPHP 進行表面去污，是活動開始前確保無菌環境的關鍵步驟。從 VPHP 結束到最後一批充填結束的時間間隔是重要的風險因子。

        

        

            

#### 重點提示 Key Notes

            

**定期再驗證結構（每年 4 次 APS）：**

            

                
- 每 6 個月一組，每組包含：

                
- (1) 單批 APS（模擬完整設置 + 充填 + 結束）

                
- (2) Piggy-back APS（4 批產品後接 1 批培養基）

                
- 每批培養基約 10,000 單位

                
- 共計每年 4 次 APS = 涵蓋「開始」和「結束」兩種風險情境

            

        

        

            

#### 風險評估考量清單 Risk Assessment Checklist

            

進行活動策略風險評估時，須考慮以下關鍵面向：

            

                
- **手套完整性：**每次介入時目視檢查，定期進行完整性測試

                
- **RTP 完整性：**罐體目視檢查 + 過濾器完整性測試

                
- **EM 趨勢：**連續粒子監測 + 活動末期表面取樣

                
- **SUS 整合：**批次切換時一次性管路的更換程序

                
- **人員經驗：**操作人員對隔離器技術的熟悉度和訓練程度

                
- **失敗處理：**如 APS 失敗，必須評估回歸保守驗證方法

            

        

        

            

#### 實務應用 Practical Application

            

**CDMO 商業考量：**一條高速隔離器充填線（600 units/min, >200,000 units/batch），使用保守方法進行初始驗證意味著需要犧牲 12 批產能用於培養基充填。以每批價值 $500K 計算，產能機會成本約 $6M。這就是為什麼有經驗的設施會傾向風險導向方法 -- 在保證無菌品質的前提下，將培養基批次從 12 批減半至 6 批，同時透過 Piggy-back 策略確保定期再驗證的有效性。

        

        

            

#### 練習思考 Practice Questions

            

                
1. Piggy-back APS 策略如何同時模擬活動的「開始」和「結束」風險？

                
2. 如果定期再驗證中的 APS 失敗，為什麼可能需要回到保守方法而不僅僅是重做一次 APS？

                
3. 手套完整性測試的頻率應如何根據活動批次數量進行風險評估調整？

            

        

    

## 15.8 Example 8: Design of the APS for an Advanced Therapy Medicinal Product

    

        

### Original Text

        

The scenario presented is for the risk-based approach to the design of an APS for an advanced therapy medicinal product (ATMP) (6) (see Sections 4.1.2 and 4.3.7). The product in question is an autologous gene-modified cellular therapy named "GMCT-A," a product similar to many chimeric antigen receptor T-cell (CAR-T) products as well as other cellular therapies including T-cell receptors, tumor-infiltrating lymphocytes (TILs), and regulatory T-cells. An APS should be conducted once an acceptable manufacturing process and corresponding interventions have been designed and established. In this case, the manufacturing process for GMCT-A is being transferred from the manufacturing site where early clinical trial material was produced ("sending site") to a cGMP-compliant manufacturing facility ("receiving site") for the purposes of later-stage clinical and potential commercial drug product manufacturing.

        

GMCT-A is manufactured using a process performed predominantly using aseptic processing and sterility assurance is of the utmost importance since the drug product is administered to patients by infusion. A process flow diagram of the major unit operations of the manufacturing process is shown in Figure 15.7-4.

        

### Risk Assessment of the Aseptic Process

        

As with any quality risk assessment, per ICH Quality Guideline Q9(R1): Quality Risk Management, the methodology begins at the risk initiation stage of the lifecycle by first defining the risk question. In this case, the question can be captured as simply: *"What is the relative risk of contamination from each individual manipulation performed within the aseptic boundary during the manufacture of GMCT-A?"*

        

In this case, a modified version of the IREM was applied for the assessment. The modified version is named the Aseptic Risk Evaluation Model (AREM) and has been optimized to apply to the many unique aseptic processes encountered with ATMPs (beyond fill and finish operations). The AREM, like the IREM, leverages collective product knowledge and process understanding, is compliant with the evolving global regulatory landscape, and is based on industry best practices. The steps of the AREM are detailed in Figure 15.7-5.

    

    

        

### Tutorial Commentary

        

            

#### 核心概念解析 Key Concepts

            

**ATMP (Advanced Therapy Medicinal Product / 先進治療藥品)：**包括基因治療、細胞治療、組織工程產品。與傳統充填線不同，ATMP 製程通常：

            

                
- 以手動操作為主（在 BSC 中進行）

                
- 無法終端滅菌（活細胞產品）

                
- 批量極小（autologous = 單一患者專用）

                
- 製程步驟多且複雜（解凍、選擇、活化、轉導、擴增、收穫、充填）

            

            

**AREM (Aseptic Risk Evaluation Model / 無菌風險評估模型)：**IREM 的修改版本，專為 ATMP 的獨特無菌操作優化。使用 Complexity（複雜度）、Duration（持續時間）、Proximity（接近度）三因子進行風險分級。

        

        

            

#### 比喻說明 Analogy

            

ATMP 的無菌製程模擬就像為一位外科醫師驗證其手術能力：每個手術步驟（切開、止血、縫合）都有不同的風險等級。與工業化量產充填線（像工廠流水線）不同，ATMP 更像手工藝品製作 -- 每一個操作都依賴操作員的技術，因此風險評估必須聚焦在每個「手動操作」的具體細節上。

        

        

            

#### 重點提示 Key Notes

            

                
- **技術轉移場景：**本範例的 APS 是在 GMCT-A 從送出方（早期臨床）轉移至接收方（GMP 設施）時進行

                
- **患者安全：**GMCT-A 透過輸注給藥，無菌保證至關重要 -- 無法進行終端滅菌

                
- **AREM 團隊組成：**需要生產、製造科技、製程開發、品管、品保等多領域專家

                
- **風險問題定義：**ICH Q9(R1) 強調必須先明確定義風險問題，本範例的問題核心是「每個操作的相對污染風險」

            

        

    

    

        

### AREM Steps 1-3: Team Assembly, Scope Definition, and Factor Rating

        

**Step 1:** The "AREM Team" was assembled including all relevant subject matter experts from Manufacturing/Production, Manufacturing Science & Technology, Process Development, Quality Control, and Quality Assurance. Additionally, all relevant knowledge management documentation was gathered (e.g., process description, CCS, production batch records, and SOPs).

        

**Step 2:** The scope of the AREM was determined by defining the boundaries of the aseptic process. All unit operations with aseptic processing were defined and then the individual aseptic steps within each unit operation were identified. The AREM team should perform this task by reviewing each batch record (if available) step by step to determine each individual aseptic manipulation performed.

        

**Step 3:** Each of the individual aseptic steps (i.e., manipulations) is rated based on three factors - Complexity, Duration, and Proximity - as defined in Table 15.7-1.

        

**Table 15.7-1** Definition of the Aseptic Manipulation Factors

        
            
| Factor | Definition |
| --- | --- |
            ****
| Duration | The time that it takes to perform the overall aseptic procedure when the product or product-contact surfaces are exposed to the surrounding environment. The typical or standard times for these aseptic procedures was determined to be within a range of 1-10 minutes. Any aseptic procedure less than 1 minute was considered as lower in terms of relative risk, while any aseptic procedure greater than 10 minutes was considered of greater relative risk. |
            ****
| Complexity | The more aseptic process steps within the procedure that are performed, the more complex the overall risk is. The aseptic procedure starts with the initial exposure of the product or a product-contact surface and ends with the final closure of the product within the container. Any procedure that impacts or breaks the sterile boundary or any direct product-contact surface is considered for assessment in the AREM. |
            ****
| Proximity | Proximity is determined in relation to the operation with respect to first air within the environment (e.g., biosafety cabinet). For any aseptic procedure, it is first determined whether first air is broken or not. In the case that it is, then whether first air is broken with a sterile entity or with a nonsterile entity is determined. |
        

        

**Table 15.7-2** Identification of the Risk Ranking for Each of the Factors

        
            
| Risk Ranking | Duration | Complexity | Proximity |
| --- | --- | --- | --- |
            
| High | >10 minutes | More than 5 steps; highly difficult to perform manual manipulations | Operator breaks first air with a nonsterile entity (e.g., the sanitized isolator glove) |
            
| Medium | 1-10 minutes | 2-5 steps; moderate difficulty to perform manual manipulations | Operator breaks first air with a sterile entity (e.g., the sterilized forceps) |
            
| Low | <1 minute | 1 step; easy to perform manual manipulation | Operator does not break first air |
        

    

    

        

### Tutorial Commentary

        

            

#### 核心概念解析 Key Concepts

            

**AREM 三因子模型：**

            

                
- **Duration（持續時間）：**產品或產品接觸面暴露在環境中的時間。1-10 分鐘為標準範圍，<1 分鐘為低風險，>10 分鐘為高風險

                
- **Complexity（複雜度）：**無菌操作中包含的步驟數量。步驟越多，出錯機率越高。5 步以上為高複雜度

                
- **Proximity（接近度）：**操作是否破壞 First Air（第一氣流）。最嚴重的是以非無菌物品（如消毒手套）破壞 First Air

            

        

        

            

#### 重點提示 AREM vs IREM 差異

            

相比 IREM（範例 3-4 使用的介入風險評估模型），AREM 有以下調整：

            

                
- **簡化為 3 因子：**移除了 Frequency（頻率）、AFV（氣流可視化）、Barrier（屏障）等因子

                
- **原因：**ATMP 製程通常在 BSC 中進行（屏障固定），操作頻率不高（小批量），因此這些因子的區分度不大

                
- **新增兩階段矩陣：**先用 Complexity x Duration 得出 Risk Class，再用 Risk Class x Proximity 得出最終風險等級

            

        

        

            

#### 比喻說明 Analogy

            

AREM 的兩階段矩陣就像醫院的分診系統：

            

                
- **第一階段（Complexity x Duration）：**類似評估「症狀嚴重程度」-- 越複雜、時間越長，越危急

                
- **第二階段（Risk Class x Proximity）：**類似評估「傳染風險」-- 即使症狀中等，如果高度接觸（破壞 First Air），仍可能升級為高風險

            

        

    

    

        

### AREM Steps 4-5: Risk Class Determination and Action Levels

        

**Step 4:** Upon determining the risk-ranking of each factor for an aseptic procedure, a preliminary matrix was used to determine the initial Risk Class, as shown in Table 15.7-3.

        

**Table 15.7-3** Preliminary Matrix Used in Determination of Initial Risk Class

        
            
|  | Duration |
| --- | --- |
            
|  | Low | Medium | High |
            ****
| High Complexity | Risk Class 2 | Risk Class 2 | Risk Class 1 |
            ****
| Medium Complexity | Risk Class 3 | Risk Class 2 | Risk Class 1 |
            ****
| Low Complexity | Risk Class 3 | Risk Class 3 | Risk Class 2 |
        

        

A secondary matrix is then used to determine the overall risk score using the previously determined Risk Class and the proximity, as shown in Table 15.7-4.

        

**Table 15.7-4** Secondary Matrix for Determination of the Overall Risk Score

        
            
|  | Proximity |
| --- | --- |
            
|  | Low | Medium | High |
            ****
| Risk Class 1 | Low | Medium | High |
            ****
| Risk Class 2 | Low | Medium | High |
            ****
| Risk Class 3 | Low | Low | Medium |
        

        

**Step 5:** Upon the determination of the overall risk score, the aseptic procedures are ranked by risk, and the following actions are to be taken, as shown in Table 15.7-5.

        

**Table 15.7-5** Action Level Table based on Overall Risk Score

        
            
| Risk Ranking | Action |
| --- | --- |
            
| High | Unacceptable level of risk. A high risk should be reduced through the reduction of one or more risk factors (proximity, duration, and/or complexity) taking into account the effect of residual risk or unintended consequences of action. |
            
| Medium | Actions should be taken to reduce the risk to a lower level through the reduction of one or more risk factors, taking into account the effect of residual risk or unintended consequences of action. If risk cannot be reduced practically, it may still be accepted; however, ways to reduce the risk should be considered as a part of periodic risk review. |
            
| Low | Acceptable risk. No additional action necessary. |
        

    

    

        

### Tutorial Commentary

        

            

#### 核心概念解析 風險矩陣設計邏輯

            

**兩階段矩陣的優勢：**

            

                
- **為什麼不直接用 3 因子相乘？**因為 Proximity 的影響是「放大效應」而非「加成效應」。同樣的操作，如果不破壞 First Air（Low Proximity），風險可能從 Medium 降到 Low；但如果用非無菌物品破壞 First Air（High Proximity），風險立即升級為 High

                
- **Risk Class 3 的特殊保護：**注意 Risk Class 3（Low Complexity + Low/Medium Duration）即使在 High Proximity 情況下也只升到 Medium，不會到 High。這反映了簡單快速的操作即使暴露程度高，風險仍可控

            

        

        

            

#### 重點提示 Action Level 解讀

            

                
- **High = 不可接受：**必須降低風險因子，不能直接接受。例如改用無菌工具、減少操作步驟、或縮短暴露時間

                
- **Medium = 應降低：**應嘗試降低，但如果實際上無法降低（例如操作的固有特性），可經品質單位批准後接受，但需在定期風險回顧中持續尋找改善方案

                
- **Low = 可接受：**無需額外行動

            

        

        

            

#### 公式與計算 Risk Matrix 判讀流程

            

```

Step 1: 評估 Complexity 和 Duration
        => 查 Table 15.7-3 得 Risk Class (1/2/3)

Step 2: 結合 Risk Class 和 Proximity
        => 查 Table 15.7-4 得 Overall Risk (H/M/L)

範例：
  操作：打開西林瓶並用移液管轉移
  Complexity = High (多步驟)
  Duration = Medium (1-10 min)
  => Risk Class 2

  Proximity = Medium (使用無菌鑷子)
  => Overall Risk = Medium
  => 行動：應嘗試降低風險
            
```

        

        

            

#### 練習思考 Practice Questions

            

                
1. 在 Table 15.7-3 中，為什麼 Low Complexity + High Duration 仍然得到 Risk Class 2 而非 Risk Class 3？這反映了什麼風險原則？

                
2. 如果某個操作被評為 High Risk，有哪些具體策略可以降低 Complexity、Duration 和 Proximity？

            

        

    

    

        

### AREM Step 6: Risk Assessment Output & APS Design

        

**Step 6:** The outputs from the risk assessment were documented by a risk assessment facilitator. An example of the AREM output from one of the unit operations of the GMCT-A manufacturing process, the transduction of the target cells (recovered post-selection and activation) using a viral vector for purposes of gene transfer is provided in Table 15.7-6.

        

**Table 15.7-6** Aseptic Risk Evaluation Method for the GMCT-A Process (Example: Unit Operation of Viral Vector Transduction)

        

        
            
                
                
                
                
                
                
                
            
| Description of Aseptic Steps / Manipulations | Complexity | Duration | Risk Class | Proximity | Overall Risk | Mitigation / Actions Taken |
| --- | --- | --- | --- | --- | --- | --- |
            
                
                  
**
                  
**
                
                  
**
                
                
            
| De-crimp multiple vials of the viral vector and remove the cap of each. Transfer contents of each vial to a single (pooled) conical tube using a pipet. | HighEach transfer constitutes an aseptic step with up to ten (10) vials of viral vector to be used | MediumUp to (but no more than) ten (10) minutes to pool maximum number of vials | Risk Class 1 | MediumOperator breaks first air with a sterile entity (e.g., the sterilized forceps) | High | Alternate supply of the viral vector filled in a container that can be aseptically connected to the cell suspension (to be assessed for future use). Additionally, a closed, automated transduction process (to be evaluated as a potential long-term optimization). Risk is accepted at this time based on a Risk-Benefit evaluation approved by the Quality Unit. |
            
                
                  
**
                  
**
                
                  
**
                
                
            
| Gently swirl conical tube with pooled viral vector solution. Use a syringe and needle to collect pooled viral vector solution. Remove needle from syringe and then connect syringe to product bag using Luer-lock connector. Dispense pooled viral vector into product bag. | MediumThree (3) aseptic steps are performed | Medium3-5 minutes based on simulation | Risk Class 2 | MediumOperator breaks first air with a sterile entity | Medium | The mitigation noted above is also applicable to this step. Risk is accepted. |
            
                
                  
**
                  
**
                
                  
**
                
                
            
| Gently mix the product bag now containing target cells and pooled viral vector. Remove a sample (for QC testing) using a syringe via the Luer-lock connector. | LowA single (1) aseptic step to connect the syringe via Luer-lock connector | LowLess than one (1) minute | Risk Class 3 | LowOperator does not break first air | Low | Risk is accepted. This is a common aseptic step performed throughout the manufacturing process for the purpose of obtaining a product sample. |
        

        

        

### Design of the APS Based on Outputs of the Risk Assessment

        

The outputs and learning from the AREM for the GMCT-A manufacturing process are then used to develop and focus on proper process design and on the training for the aseptic personnel/operators who will be responsible for performing and supporting this manufacturing process.

        

Based on the relative risk of the aseptic process identified for this unit operation, per the AREM, these aseptic steps will focus on the proper performance of higher-risk activities and the effectiveness of the training of aseptic operators. In addition, successful demonstration of these aseptic steps is required for the qualification of the operators prior to their participation in cGMP manufacturing.

        

APS batch records are constructed based on the output of the AREM. As part of the successful technology transfer of GMCT-A, three consecutive APS batches that meet all acceptance criteria are to be completed (and documented within an APS protocol).

        

Additional considerations in the design of the simulation for this unit operation include:

        

            
- The boundaries of the aseptic process are defined from the initial introduction of the patient-specific leukapheresis (starting material) in a single-use bag, through the subsequent unit operations, until the final fill and closure of the product container representing the drug product.

            
- Each of the unit operations have been divided into individual unit operations for the purposes of the APS. The viral vector transduction unit operation described here is performed as one subset of the overall APS.

            
- The inputs to the viral vector transduction unit operation are simulated using an appropriately qualified microbiological growth medium (MGM) supplied in both cryovials (similar to the viral vector containers) and single-use bags (similar to the target cell suspension bags). MGM volumes have been selected to be representative of the manufacturing process and sufficient to cover all internal (product-contact) surfaces of the containers. The maximum number of viral vector containers will be simulated.

            
- The interventions associated with the handling of these containers has been identified as worst-case conditions through the AREM analysis. Higher-risk activities are simulated in the APS to identify any unresolved weakness or variability in the process.

            
- The outputs to the viral vector transduction unit operation, which include the single-use bag containing the simulated transduced cell suspension and the QC sample, are collected post-simulation. These outputs are incubated and must pass acceptance criterion of "no growth" for successful simulation. No waste solution was identified for this unit operation.

            
- Upon review of process-related deviations reported from the manufacturing history (obtained from the sending site), a corrective action where the viral vector is spilled within the BSC and the cleanup procedure (per SOP) is performed, has been included in this unit operation.

        

    

    

        

### Tutorial Commentary

        

            

#### 核心概念解析 AREM 輸出應用

            

**Table 15.7-6 關鍵發現：**

            

                
- **操作 1（病毒載體轉移）= High Risk：**高複雜度（多達 10 瓶需逐一開啟並轉移）+ 中等時間（最多 10 分鐘）+ 中等接近度 = 最終 High Risk。*即使使用無菌鑷子（Medium Proximity），由於 Risk Class 1 的高基準，最終仍為 High*

                
- **操作 2（注射器分裝）= Medium Risk：**中等複雜度（3 步驟）+ 中等時間 = Risk Class 2 + Medium Proximity = Medium

                
- **操作 3（取樣）= Low Risk：**單一步驟 + <1 分鐘 + 不破壞 First Air = 最低風險

            

        

        

            

#### 重點提示 High Risk 的處理方式

            

操作 1 被評為 High Risk，但在現階段被**接受**。這看似矛盾，但原因是：

            

                
- 風險降低措施已被識別（替代容器設計、自動化轉導）

                
- 但這些措施需要時間開發，不能立即實施

                
- 因此經**品質單位批准的風險效益評估**後，暫時接受此風險

                
- 這是 ICH Q9(R1) 允許的 -- 風險管理是持續性過程，不要求零風險

            

        

        

            

#### APS 設計特殊考量（ATMP 專屬）

            

                
- **培養基替代：**用 MGM 同時裝在冷凍小瓶（模擬病毒載體）和一次性袋（模擬細胞懸浮液）中，忠實模擬實際操作

                
- **最大容器數量：**模擬使用最大數量的病毒載體瓶（10 瓶），確保 worst-case 覆蓋

                
- **歷史偏差納入：**從送出方獲得的偏差記錄（如病毒載體在 BSC 中灑出）被納入 APS 設計，模擬糾正措施程序

                
- **操作員資格認定：**APS 不僅驗證製程，還作為操作員資格確認的一部分

                
- **「No Growth」判定標準：**每個單元操作的輸出（包含培養基的袋子和 QC 樣品）必須通過培養無生長測試

            

        

        

            

#### 實務應用 Practical Application

            

**CDMO/ATMP 製造場景：**一家 CDMO 接到 CAR-T 產品的技術轉移。在設計 APS 時，應注意以下實務要點：

            

                
- APS 必須涵蓋從患者 leukapheresis 輸入到最終藥品充填的**完整無菌邊界**

                
- 每個單元操作可獨立進行 APS，但所有操作的結果必須匯總評估

                
- 操作員培訓和資格認定與 APS 緊密結合 -- 不同於傳統充填線，ATMP 的操作高度依賴人員技能

                
- 應建立從送出方獲取製程偏差歷史的標準化流程，確保 APS 設計涵蓋已知風險

            

        

        

            

#### 練習思考 Practice Questions

            

                
1. 為什麼 AREM 相比 IREM 減少了評估因子？這對 ATMP 製程的風險評估有什麼影響？

                
2. 如果操作 1（病毒載體轉移）改用密閉式無菌連接系統，三個風險因子各會如何變化？最終 Overall Risk 會是什麼等級？

                
3. ATMP 的 APS 為什麼需要將歷史偏差（如液體灑出）納入模擬，而不僅僅記錄在風險評估中？

                
4. autologous（自體）細胞治療的 APS 設計與 allogeneic（異體）細胞治療相比，有哪些關鍵差異？

            

        

    

## Appendix References & Vendor Resources

    

        

### Related PDA References

        

More detailed information on aseptic processing risk assessments is available in:

        

            
- PDA Technical Report No. 44: Quality Risk Management for Aseptic Processing

            
- PDA Technical Report No. 54: Implementation of Quality Risk Management for Pharmaceutical and Biotechnology Manufacturing Operations

            
- PDA ANSI/PDA Standard 03-2025: Standard Practice for Quality Risk Management of Aseptic Processes

        

        

### Key Regulatory References (from TR22 main text)

        

            
- EU GMP Annex 1: Manufacture of Sterile Medicinal Products (2022 revision)

            
- ICH Q9(R1): Quality Risk Management

            
- FDA Guidance: Sterile Drug Products Produced by Aseptic Processing (2004)

            
- PIC/S PI 007: Recommendation on the Validation of Aseptic Processes

        

        

### Cross-References within TR22

        

            
- Section 3.2 – Number and Frequency of APS Runs

            
- Section 3.4 – Worst-Case Conditions

            
- Section 4.1.2 – ATMPs and Cell Therapies

            
- Section 4.3.3 – Isolator Systems

            
- Section 4.3.7 – ATMP-Specific Considerations

            
- Section 7.5.1.1 – Bracketing Criteria

            
- Section 7.7 – Multiple Container Sizes

            
- Section 7.10 – APS Batch Size

            
- Section 7.11, 7.12 – Campaign Manufacturing

        

    

    

        

### Tutorial Commentary

        

            

#### 延伸閱讀建議 Recommended Reading Path

            

以下是根據不同角色建議的閱讀順序：

            

                
- **QA/QC 專業人員：**先讀 TR44（風險管理基礎）→ TR22 本體 → ANSI/PDA Standard 03-2025（最新標準）

                
- **生產/工程人員：**先讀 TR22 Section 3-7（APS 設計核心）→ 附錄範例 → EU Annex 1 相關章節

                
- **ATMP 製造人員：**先讀 TR22 Section 4.1.2 + 4.3.7 → 範例 8 (AREM) → ICH Q9(R1)

                
- **CDMO 管理層：**TR22 Section 3.2（頻率）+ 附錄範例 5-7（設計策略）+ TR54（實施指南）

            

        

        

            

#### 重點提示 法規交叉參照

            

TR22 附錄範例與法規要求的對應關係：

            

                
- **範例 5-6（容器/劑型策略）：**對應 EU Annex 1 Section 9.34-9.35 關於 APS 覆蓋範圍的要求

                
- **範例 7（活動策略）：**對應 EU Annex 1 Section 9.36 關於活動持續時間的考量

                
- **範例 8（ATMP）：**對應 EU Regulation 1394/2007 關於 ATMP 的特殊要求，以及 EMA/CAT 指南

                
- **風險管理框架：**所有範例均遵循 ICH Q9(R1) 的風險管理生命週期方法

            

        

        

            

#### 實務應用 延伸資源整合

            

**建立公司內部 APS 知識庫：**

            

                
- 將 TR22 的 8 個範例作為模板，根據公司實際產線配置進行客製化

                
- IREM/AREM 工具可用 Excel 或專用軟體實現，便於跨部門協作

                
- 定期回顧風險評估結果（至少每年一次），根據新的 APS 結果和 EM 趨勢更新

                
- 技術轉移專案中，要求送出方提供完整的 APS 歷史和偏差記錄

            

        

    

    

### 本節重點回顧 Section Summary

    

        
- **範例 5 -- 單一劑型不同充填量：**使用 Bracketing 策略，無 worst-case 時最小/最大容器各 3 runs + 中間各 1 run；有 worst-case 時集中在 worst-case 容器 3 runs + 其餘各 1 run。新容器尺寸引進需重新評估。

        
- **範例 6 -- 不同劑型產線：**比較各劑型的製程步驟差異，冷凍乾燥配置可能作為 worst-case 涵蓋其他劑型。厭氧/好氧條件需分別驗證。不同容器密封系統必須獨立 APS。

        
- **範例 7 -- 隔離器活動策略：**保守方法（全培養基）vs 風險導向方法（培養基 + 產品混合），定期再驗證使用 Piggy-back 策略（每年 4 次 APS）。手套完整性、RTP 完整性和 EM 趨勢是關鍵控制點。

        
- **範例 8 -- ATMP 設計：**AREM 模型使用 Complexity x Duration → Risk Class，再結合 Proximity 得出 Overall Risk。ATMP 製程以手動操作為主，APS 需涵蓋完整無菌邊界，且與操作員資格認定緊密結合。

        
- **參考文獻：**TR44（風險管理）、TR54（實施指南）、ANSI/PDA Standard 03-2025（最新標準）為核心延伸閱讀。所有範例均遵循 ICH Q9(R1) 風險管理生命週期。

        
- **決策層級永遠不變：**無菌保證 (Sterility Assurance) > 產品 CQA > 商業彈性。任何 APS 設計策略都不能犧牲無菌保證來換取效率。

    

 

    

PDA Technical Report No. 22 (Revised 2025) — Appendix 3: Risk Assessment Examples 5-8

    

Educational Material for CDMO Professionals | Section 8b | p98-p115

    

This document is for educational purposes only. Refer to the original PDA TR22 for official guidance.

↑