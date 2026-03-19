# PDA Manufacturing Technology Guide No. 1: Filling Machine Design and Operation

> 充填機設計與操作技術指引 完整教學版

## Topic 0: Intro & Glossary 導論與術語 (p1-p7)

# Section 0: Introduction & Glossary

    

簡介與術語表 — 無菌充填的語言基礎

    

PDA Manufacturing Technology Guide No. 1 | p1 - p7

    

### 本章學習目標

    

        
- 理解本指南的目的、範疇，以及為什麼無菌充填 (Aseptic Filling) 比最終滅菌更困難

        
- 掌握指南四大部分的結構，知道每部分的內容重點與應用場景

        
- 熟悉無菌充填的核心術語：RABS（cRABS/oRABS）、Isolator（Open/Closed）、CIP/SIP、First Air、Fill Curve 等

        
- 能夠正確使用縮寫表（AF、APS、CCI、SA、SU、RTU、PUPSIT、VPPF 等）進行專業溝通

        
- 建立決策優先序：無菌保證 (SA) > 關鍵品質屬性 (CQA) > 商業需求

    

    

### 本節內容索引

    

        Introduction 簡介
        Scope 範疇
        Glossary A–G
        Glossary G–S
        Abbreviations 縮寫表
    

Introduction — Purpose and Scope of the Guide 指南目的與範疇

    

        

## 原文內容 Original Text

        

### Introduction

        

The PDA Manufacturing Technology Guide No. 1: Aseptic Filling, Engineering, and Operation is designed to communicate the Parenteral Drug Association's thoughts on the topic and encourage further dialog among industry, health authorities, and suppliers of technology and materials, taking into consideration the changes and needs of the modern, global, sterile, healthcare product manufacturing industry. It does not represent an industry standard or regulatory guidance. This document addresses topics relating to major technologies for sterile filling and extends to the point of container closure, with the aim of discussing key considerations, risks and benefits of each technology.

        

Sterile products should be subject to terminal sterilization whenever possible. However, many drug products cannot withstand the rigors of terminal sterilization. Therefore, sterility must be achieved prior to containers being filled. Aseptic filling equipment is an essential tool in the successful filling of sterile products. Fillers are required to safeguard the sterility of the product, ensure delivery of uniform doses to each container, assure homogeneity (product dependent), and complete the fill with a closing process that prevents product and headspace loss and maintains sterility. A properly designed and closed container also prevents the ingress of microbial contaminants and/or harmful gases and generally protects the contents of the container in the intended storage conditions throughout its shelf life.

        

Many factors must be considered in the selection and use of an aseptic filling system, including the type and attributes of the product, the selected container–closure system, and the need or desire for single-use (SU) components in the filling operation itself. Considerations, such as the product pathway, integration with the sterilizing filter (as applicable), mechanisms for the introduction of components, access for interventions, and risk of exposure to the operator during these critical tasks must also be taken into account. Once selected, the filling system installation must be carefully analyzed to ensure that it is optimally integrated with the facility and utilities. All of these design attributes and considerations must prioritize microbial control and ensure sterility assurance in order to reliably and consistently deliver a sterile product to the patient.

        

The design must also reflect the firm's strategies for supporting activities, such as weight check, homogeneity, and other filling-related critical quality attributes as well as strategies for the identification and discard of units that fail to meet established criteria. After the selection, design, procurement, and installation of the filling system, the lifecycle elements of routine operations, maintenance and calibration will take precedence; therefore, these components must be adequately considered in the planning stages and incorporated into the design phase.

        

The number and variety of considerations in selecting a filling system design make it appropriate to employ a cross-functional team that includes equipment and facility engineers, operations, quality, microbiology, and validation personnel. Product and package scientists should also be consulted due to their specialty knowledge of the attributes of the product and primary packaging. When forming the team, it is also essential to ensure that personnel are sensitized to future business needs so that adequate flexibility can be built into the design.

    

    

        

## 導師解析 Tutorial Commentary

        

            

#### 核心概念：為何無菌充填比最終滅菌難？

            

無菌保證 (Sterility Assurance, SA) 的實現有兩條路：

            

                
- **最終滅菌 (Terminal Sterilization)：**先充填，再整批滅菌。無菌保證在充填之後才建立。相對容錯空間大。

                
- **無菌充填 (Aseptic Filling)：**藥品已事先滅菌，充填時若任何環節污染，無法挽救。**無菌保證必須在充填前就已建立，並在整個充填過程中持續維持。**

            

            

這就是為什麼本指南說：「凡是可以最終滅菌的，就應該最終滅菌」——無菌充填的難度本質上更高。

        

        

            

#### 比喻說明：手術室 vs 一般廚房

            

最終滅菌就像先做好食物再用微波爐加熱殺菌，最後一步能消滅前面帶入的污染。

            

無菌充填則像在手術室裡準備食物——所有食材與器具在進入前就已無菌，操作過程中的每一個動作都可能引入污染，而且沒有最後的「殺菌補救」步驟。一旦污染，整批報廢。

            

**結論：**無菌充填的每一個設計決策，都必須以「防止任何微生物進入產品」為最高優先。

        

        

            

#### 重點提示：跨職能團隊不是選項，是必須

            

本指南特別強調需要跨職能團隊 (Cross-functional team)，包含：工程、操作、品質、微生物學、驗證、產品科學家、包材科學家。

            

CDMO 的現實：客戶往往只關注充填速度和成本，但工程師必須在設計階段就把 SA、CQA、彈性（未來產品）全部納入。這份責任不能只落在一個部門。

            

**決策優先序（每次設計選擇都應回到這個框架）：**

            

                

1. 無菌保證 (Sterility Assurance)

                

▼

                

2. 關鍵品質屬性 (CQA)

                

▼

                

3. 商業與彈性需求

            

        

        

            

#### 實務應用：CDMO 的設計靈活性

            

CDMO 服務多個客戶，每個客戶的產品特性不同（黏度、凍乾需求、充填體積）。因此在設計充填線時，必須額外考慮「未來業務彈性」，例如：是否支援不同容器格式？管路切換時間多長？一次性元件 (SU) 的換型成本？

            

本指南提醒：在設計階段就要把這些商業需求「內建」進去，而不是事後改裝——但前提是永遠不能犧牲 SA。

        

        

            

#### 練習思考

            

                
1. 一個可以最終滅菌的注射劑，為什麼製藥公司仍然可能選擇無菌充填？（提示：想想蛋白質藥物的熱穩定性）

                
2. 在充填系統設計階段，如果 SA 和交期壓力發生衝突，你作為工程師應該如何回應管理層？

            

        

    

Scope — What This Guide Covers (and What It Does Not) 範疇界定

    

        

## 原文內容 Original Text

        

### The 4-Part Structure

        

This document is divided into four main parts pertaining to the design and operation of an aseptic filling system:

        

            
- **Part 1 – Technology Selection and Design** addresses the major filling technologies for liquid filling and the criteria that might influence their selection

            
- **Part 2 – Technical Engineering Considerations** addresses the desired attributes of the filling operation which might influence technology selection for the aseptic filling of liquids, suspensions, and powders

            
- **Part 3 – Operational Considerations** addresses the various aspects of microbial control and interventions during routine operations that should be included in technology selection for the aseptic filling of liquids, suspensions, and powders

            
- **Part 4 – Powder Filling Technology Selection and Design** addresses the elements of Parts 1, 2 and 3 which pertain to the filling of powders and addresses the major technologies for powder filling and the criteria that might influence their selection

        

        

### Scope

        

This guide provides an overview of the elements that should be considered in the selection of an appropriate filler technology and for the successful integration of the filling system into the broader aseptic operation. Precautions with regard to sterility assurance (SA) are paramount for both liquid and powder filling systems.

        

This document focuses on the mechanics of the filling systems and the surrounding processes (e.g., setup of fluid pathway and filtration, supply of components, weight checks) and their influence on SA. Robotics and the automation associated with gloveless isolators presents a significant opportunity for improvements in protecting the critical zone.

        

Regulators and industry consider that container-closure integrity (CCI) is not assured until the containers are fully closed, including the application of a mechanical seal (e.g., crimp seal) for those containers that use them.

        

This document does not address the use of blow-fill-seal or form-fill-seal technologies. Additional details on blow-fill-seal filling may be found in PDA Technical Report No. 77.

        

This document applies only to conventional aseptic filling, which requires a more rigorous set of controls for all process stages, from the component supply to the filled and closed container.

        

The project for the implementation of a new filling system should follow good engineering practice. The design will commonly start with a User Requirements Specification (URS) which is then responded to with a Functional Requirements Specification (FRS) and System Design Specification (SDS). Qualification and validation (e.g., Design Qualification, Traceability Matrix, Factory Acceptance Testing, Commissioning, IQ, OQ, PQ, and Process Validation) can then be executed and documented.

    

    

        

## 導師解析 Tutorial Commentary

        

            

#### 四大部分結構解析

            

把這四個部分想成蓋房子的順序：

            

                
- **Part 1（技術選擇）：**選什麼類型的充填機？蠕動泵還是旋轉活塞泵？先決定大方向。

                
- **Part 2（工程考量）：**充填線的具體工程細節——管路設計、過濾器、重量檢查、CIP/SIP。

                
- **Part 3（操作考量）：**實際批次操作中的微生物控制、干預管理、APS 模擬。

                
- **Part 4（粉末充填）：**粉末和液體不同，另外討論 Auger Filling、真空粉末充填 (VPPF)。

            

            

這四部分缺一不可——一個成功的充填系統需要同時在技術、工程、操作三個維度都做對，再針對劑型（液體/粉末）調整。

        

        

            

#### 範疇內 vs 範疇外：快速對照

            
                
| 範疇內 (In Scope) | 範疇外 (Out of Scope) |
| --- | --- |
                
| 傳統無菌充填（液體、懸浮液、粉末） | Blow-Fill-Seal / Form-Fill-Seal |
                
| 容器密封系統（至壓蓋為止） | 凍乾製程詳細處理 |
                
| Gloveless Isolator 機器人的考量 | 機器人系統完整指引 |
                
| 高黏度產品的充填考量 | 無菌軟膏/凝膠完整指引 |
                
| 最終滅菌/低生物負荷產品（設計原則通用） | 最終滅菌的完整污染控制策略 |
                
| 高活性藥物充填的基本考量 | 高活性物質完整安全指引 |
            

        

        

            

#### 比喻說明：URS → FRS → SDS 就像房屋建造合約

            

**URS（使用者需求規格）**= 業主告訴建築師「我要一棟三房兩廳、廚房要有中島、需要停兩部車」——只談需求，不談怎麼做。

            

**FRS（功能需求規格）**= 建築師回應：「廚房中島將設計為 1.5m×0.8m，有電源插座和排氣管道」——把需求轉化為功能。

            

**SDS（系統設計規格）**= 施工圖面：「採用 X 品牌花崗岩檯面，厚度 30mm，用 M8 螺絲鎖在特定位置」——具體到材料和尺寸。

            

充填機採購也是如此：客戶需求 → 設備商回應 → 詳細工程設計 → 驗證 (IQ/OQ/PQ)。

        

        

            

#### 重點提示：CCI 不到壓蓋完成不算建立

            

這是很多初學者容易忽略的點：一瓶西林瓶，就算已經完全塞好橡皮塞，只要還沒有壓上鋁蓋（crimp seal），**容器密封完整性 (CCI) 在法規上尚未建立**。

            

實務意義：凍乾產品在冷凍乾燥完成後、出艙前，橡皮塞尚未完全就位——這段時間的操作需要特別謹慎。

            

因此本指南的討論範圍延伸到「壓蓋工站」，雖然壓蓋本身不是主要焦點，但必須被納入系統設計中。

        

        

            

#### 練習思考

            

                
1. 一個凍乾針劑產品，從充填到最終 CCI 建立，中間經過哪些步驟？哪一步是 SA 最脆弱的環節？

                
2. 為什麼本指南不討論 Blow-Fill-Seal？這兩種技術在 SA 策略上有什麼根本差異？

                
3. 你的公司準備引進一台新充填機，URS 應該由哪個部門主導撰寫？哪些部門必須審閱？

            

        

    

Glossary (A–G) — Key Terms Defined 術語表（上）

    

        

## 原文內容 Original Text

        

### Glossary

        

Definitions have been provided to help clarify the concepts discussed in this document. While some definitions used vary among companies, geographic location, etc., the definitions described below are consistently used within this document. Where a definition is based on another published source, the source is cited.

        

### Biodecontamination

        

The process of reducing microbial contamination to a pre-determined acceptable level, effectively eliminating or neutralizing harmful microorganisms on surfaces or within a space. When used in this document, the term is generally applied to the high-level disinfection that can be accomplished through automated disinfection with disinfectants such as vapor phase hydrogen peroxide (VPHP) or similar agents.

        

### Corrective Intervention

        

An intervention that is performed to correct or adjust an aseptic process during its execution. These may not occur at a set frequency in the routine aseptic process. Examples include such as clearing component jams, stopping leaks, adjusting sensors, and replacing equipment components.

        

### Direct Product Contact Part

        

Direct product contact parts are those that the product passes through, such as filling needles or pumps.

        

### Fill Curve

        

The characteristic parameters that define the synchronized stroke of the filling needle and the controlled flow, velocity, acceleration, and deceleration of the product throughout the filling of a single container.

        

### Filling Line

        

The filling line is a combination of the filling machine and barrier technology which may be used with bulk or ready-to-use (RTU) containers. The filling line is inclusive of connected systems (e.g., washer, depyrogenation tunnel, e-beam system, no touch transfer (NTT), capping station, robotics).

        

### Filling System

        

The drug product pathway, dosing system, and dosing in-process control (IPC); may also be referred to as the filler. The filling system is inclusive of its utilities such as CIP and SIP.

        

### First Air

        

Refers to filtered air in the critical zone that has not been interrupted by items with the potential to add contamination to the air prior to contacting exposed product and product contact surfaces.

        

### Grade A Air Supply

        

Air which is passed through a filter qualified as capable of producing Grade A total particle quality air, but where there is no requirement to perform continuous total particle monitoring or meet Grade A viable monitoring limits and the area itself is not classified. Specifically used for the protection of fully stoppered vials where the cap has not yet been crimped.

        

### Gray Space

        

A mechanical (technical) area that supports cleanroom operations. The gray space environment or personnel operating within that area are not permitted to be in direct contact with the cleanroom as it is commonly controlled but not classified, or sometimes even less clean.

        

### Headspace

        

The volume between the surface of product and the underside of the closure. The headspace composition (i.e., percent of oxygen) may require control in order to maximize product shelf life through minimization of oxidizing agent.

    

    

        

## 導師解析 Tutorial Commentary

        

            

#### Biodecontamination（生物去污染）— 深入理解

            

「Biodecontamination」不等於一般清潔或消毒。在無菌充填的語境中，它專指能達到高水準去污染效果的自動化流程，最常見的是 **VPHP（汽相過氧化氫）**，也有使用 Chlorine Dioxide（二氧化氯）或 Peracetic Acid（過乙酸）的系統。

            

關鍵區別：

            

                
- 一般消毒（Disinfection）：降低活性微生物，但無法殺滅孢子

                
- Biodecontamination：達到 6-log 孢子殺滅（Sporicidal），通常用於 Isolator 或 cRABS 的循環處理

            

            

這是 Isolator 相比 oRABS 的關鍵優勢之一：Isolator 每批次都能執行完整 biodecontamination cycle。

        

        

            

#### Corrective vs. Inherent Intervention — 干預類型的重要性

            

**Corrective Intervention（糾正性干預）：**非預期的、因設備異常觸發。例：清除堵塞的西林瓶、修補洩漏。這類干預的 SA 風險最高——操作員在非計劃狀態下進入 critical zone。

            

**Inherent Intervention（固有干預）：**程序規定必須執行的干預，如組件補充、環境監測取樣。這些是已知且可事先風險評估的。

            

**操作重點：**兩類干預都必須記錄、評估 SA 影響，並決定是否觸發 APS 失敗判定。Corrective Intervention 一旦頻率上升，通常是設備需要維護的訊號。

        

        

            

#### Fill Curve（充填曲線）— 精準充填的核心

            

Fill Curve 是每支容器充填過程中，充填針運動（stroke）與產品流速、加速度、減速度的時序組合。設計良好的 Fill Curve 需要達到：

            

                
- 充填量的精準性（劑量均一）

                
- 液體不濺出、不起泡沫

                
- 充填針進入/退出容器時不污染瓶頸/瓶口

                
- 高黏度產品的特殊慢速退針（防止拉絲）

            

            

Fill Curve 的設定是充填機 IQ/OQ 驗證的重點，也是每次新產品導入時需要重新最佳化的參數。

        

        

            

#### 比喻：First Air 就像「開刀房的無菌空氣」

            

在手術室中，器械護士的無菌托盤必須置於層流空氣 (HEPA filtered laminar flow) 的直接覆蓋下。只要有任何物體（即使是已消毒的東西）橫跨在空氣和托盤之間——這個「已受保護的無菌空間」就被打破了。

            

First Air 的概念完全相同：只有從 HEPA 濾網直接吹到產品接觸表面、中間沒有任何障礙物的氣流，才算是 First Air。充填針、操作員的手套、取樣器、傳送帶——任何進入這個空間的物體都會打斷 First Air。

            

**設計意涵：**RABS/Isolator 的關鍵設計目標之一，就是讓充填針和敞口容器始終處於 First Air 保護下。

        

        

            

#### Grade A Air Supply vs. Classified Grade A — 細微但重要的差異

            

兩者的 HEPA 過濾等級相同，但監測要求不同：

            

                
- **Classified Grade A：**需要持續粒子監測、活性微生物監測，完整 EU GMP Annex 1 分級環境

                
- **Grade A Air Supply：**提供相同質量的氣流，但所在區域本身「未被分級」——用於已完全塞好橡皮塞但尚未壓蓋的西林瓶在輸送過程中的保護

            

            

這個區別在凍乾出艙後的壓蓋區域特別重要。

        

        

            

#### 重點提示：Headspace（頂空）的管控與氧化降解

            

許多生物製劑（mAb、蛋白質藥物）對氧化非常敏感。頂空中的氧氣殘留直接影響產品有效期。常見的頂空保護措施：

            

                
- **氮氣覆蓋/吹掃 (N₂ overlaying/sparging)：**充填前或充填中以氮氣替換頂空氧氣

                
- **真空加氮氣 (Vacuum + N₂)：**凍乾製程本身可部分達到此效果

            

            

充填機必須整合頂空氧氣控制系統，且氮氣純度和供應壓力需要驗證。這是 CQA 的一部分，不是「可選功能」。

        

        

            

#### 練習思考

            

                
1. 在你的充填線上，哪些元件屬於 Direct Product Contact Part？哪些屬於 Indirect Product Contact Part？它們分別需要什麼滅菌方式？

                
2. 如果一個 Corrective Intervention（清除卡瓶）發生在充填針旁邊10公分處，你如何評估這個干預對批次放行的影響？

                
3. Fill Curve 的哪些參數會影響高黏度產品（>50 mPa-s）的充填精度？

            

        

    

Glossary (I–S) — Barrier Technologies & Control Terms 術語表（下）：屏障技術核心術語

    

        

## 原文內容 Original Text

        

### Indirect Product Contact Part

        

Indirect product contact parts are equipment parts that do not contact the product, but may come into contact with other sterilised surfaces, the sterility of which is critical to the overall product sterility (e.g., sterilised items such as stopper bowls and guides, and sterilised components).

        

### Inherent Intervention

        

An intervention that is an integral part of the aseptic process and is required for either set-up, routine operation and/or monitoring (e.g., aseptic assembly, container replenishment, environmental sampling). Inherent interventions are required by procedure or work instruction for the execution of the aseptic process.

        

### Intrinsic Sterile Connection Device

        

A device that is designed to prevent contamination during the connection process; these can be mechanical (e.g., rotational or interlocking snap connectors with polymer sheets on each end that are removed after the connection is accomplished, exposing sterile-to-sterile surfaces to form the connection) or fusion sealing (e.g., sterile tube welders).

        

### Isolator

        

An enclosure capable of being subject to reproducible interior biodecontamination, with an internal work zone meeting Grade A conditions that provides uncompromised, continuous isolation of its interior from the external environment (e.g. surrounding cleanroom air and personnel). Operators may use integrated gloves or half suits to perform manipulations and use rapid transfer ports (RTPs) and other integrated transfer ports to convey materials within the isolator. Gloveless isolators which are fully automated (i.e., robotic) are becoming more prevalent. There are two major types of isolators:

        

**Closed Isolator:** Closed isolator systems exclude external contamination of the isolator's interior by accomplishing material transfer via aseptic connection to auxiliary equipment, rather than through the use of openings to the surrounding environment. Closed systems remain sealed throughout operations.

        

**Open Isolator:** Open isolator systems are designed to allow for the continuous or semi-continuous ingress and/or egress of materials during operations through one or more openings. Openings are engineered (e.g. using continuous overpressure) to exclude the entry of external contaminants into the isolator.

        

### Mousehole

        

A small opening through a barrier that permits the passage of individual containers or nests into the next barrier or classified room. Mouseholes are designed to be as small as possible to prevent disruptions in differential pressures and/or unidirectional airflow, while also preventing the entrainment of particulate from one area to another.

        

### Nonproduct Contact Parts

        

These are parts, such as the format parts for conveyance systems, that are not in contact with the product or product-contacting materials. They will require sterilization, biodecontamination, or disinfection when they are in the critical zone.

        

### Occlusion Bed Distance

        

Distance between the rollers and the backplate in a peristaltic pump.

        

### Restricted Access Barrier System (RABS)

        

System that provides an enclosed, but not fully sealed, environment meeting defined air quality conditions (for aseptic processing Grade A), and using a rigid-wall enclosure and integrated gloves to separate its interior from the surrounding cleanroom environment. The inner surfaces of the RABS are disinfected and decontaminated with a sporicidal agent. Operators use gloves, half suits, RTPs and other integrated transfer ports to perform manipulations or convey materials to the interior of the RABS. Depending on the design, doors are rarely opened, and only under strictly predefined conditions.

        

**Closed RABS (cRABS):** A RABS for which the barrier prevents air exchange with the surrounding environment [when closed]. Closed RABS uses a dedicated unidirectional air flow unit (UDAF) system for air supply [with a closed exhaust system that is separate from the room]. A closed RABS is still considered an open system (when compared to a closed isolator) as it typically has mouseholes, and commonly has no automated biodecontamination system.

        

*Note: Closed RABS are commonly used for handling highly potent products, where product protection and occupational safety come together.*

        

**Open RABS (oRABS):** A RABS for which the barrier permits air exchange with the surrounding environment. Passive Open RABS uses the room HVAC for supply. Active Open RABS uses a dedicated unidirectional air-flow unit (UDAF) system for air supply but exchanges the exhaust with the room.

        

*Note: Although Open RABS cannot be automatically biodecontaminated, there are some installations where the cleanroom, and all the equipment it contains, including the Open RABS, is biodecontaminated. But this is a special case.*

        

### Servo Motor

        

A rotary or linear actuator that allows for precise control of angular or linear position, velocity, and acceleration. The system includes a motor coupled with a position feedback sensor.

        

### Shift Register

        

An instruction that allows the shifting of bits through a single register or group of registers within programmable logic controller (PLC) code as it is executed. The intent for shift registers is frequently tracking, such as the tracking that would occur if a rejected unit at a weight-check station must be tracked as it travels down the conveyor to the reject station. The shift register enables accurate tracking to ensure that the correct unit is ultimately rejected.

    

    

        

## 導師解析 Tutorial Commentary

        

            

#### 三層產品接觸分類：直接、間接、非接觸

            

正確分類零件的接觸層級，直接決定滅菌/消毒策略：

            
                
| 類別 | 定義 | 例子 | 處理要求 |
| --- | --- | --- | --- |
                
| Direct Product Contact | 產品流經其中 | 充填針、泵體、管路、濾膜 | 無菌化（Sterilization） |
                
| Indirect Product Contact | 接觸已滅菌表面 | 塞碗、導軌、組件傳遞軌道 | 無菌化（Sterilization） |
                
| Nonproduct Contact | 在 critical zone 內但不接觸產品/已滅菌表面 | 輸送帶格式件、機械支架 | Biodecontamination / 消毒即可 |
            

            

**CDMO 常見錯誤：**將 Indirect Contact Part 只做表面消毒而非滅菌，或未能清楚定義各零件的分類——這在法規審查時是高頻缺陷。

        

        

            

#### 比喻：Isolator = 太空站，RABS = 無塵室加屏障

            

**Isolator（隔離器）= 太空站：**太空站與外太空之間有完全密閉的艙壁，每次太空人進出都必須通過氣閘艙（airlock），完全不讓外部環境進入。Isolator 就是這樣——內部環境與外部（cleanroom）完全隔絕，物料進出都經過 RTP（快速傳遞口）或無菌連接，每批前都用 VPHP 做完整 biodecontamination cycle。

            

**RABS（限制進出屏障系統）= 無塵室裡加了玻璃屏障的操作區：**操作員在無塵室中工作，但用玻璃牆和手套箱與產品隔開。門可以（在嚴格條件下）打開。oRABS 的空氣甚至與 cleanroom 共通。

            

**保護強度：**Closed Isolator > Open Isolator > cRABS > oRABS（Active）> oRABS（Passive）

        

        

            

#### cRABS vs oRABS — 快速對照表

            
                
| 特性 | cRABS | oRABS（Active） | oRABS（Passive） |
| --- | --- | --- | --- |
                
| 氣流來源 | 獨立 UDAF | 獨立 UDAF | 室內 HVAC |
                
| 排氣方式 | 獨立封閉排氣系統 | 回到室內 | 回到室內 |
                
| Biodecontamination | 無自動系統（通常手動孢子殺滅劑） | 否 | 否 |
                
| Mousehole | 有 | 有 | 有 |
                
| 常見應用 | 高活性藥物、高 SA 要求 | 一般無菌充填 | 舊式設施 |
                
| SA 保護等級 | 較高 | 中等 | 最低 |
            

            

**注意：**cRABS 雖然叫「Closed」，但相比 Closed Isolator 仍屬「Open System」——因為有 Mousehole 讓容器進出，沒有完全密封的 biodecontamination。

        

        

            

#### 比喻：Mousehole 就像醫院手術室的「傳遞窗」

            

手術室裡有一種「傳遞窗 (Pass-through window)」——器械護士從清潔區傳遞物品進手術室，但兩邊的門不能同時開。這設計的目的是維持差壓和防止空氣亂流。

            

Mousehole 的道理相同：讓西林瓶或注射器巢盤通過屏障進入下一區，但尺寸要盡量小，以維持兩區之間的差壓（通常 critical zone 正壓）和單向氣流，防止外部粒子被捲入。

        

        

            

#### Intrinsic Sterile Connection Device — 無菌連接的兩大技術

            

在 Isolator 系統中，液體管路的無菌連接是關鍵風險點。兩種主流方式：

            

                
- **機械式無菌連接器（Aseptic Connectors）：**如 Colder Products (CPC) 或 Pall SciLog 等品牌，連接頭兩端有膜片保護，扣合時才去除膜片，形成無菌至無菌的密封。適合一次性系統 (SUS)。

                
- **無菌管路熔接（Sterile Tube Welding）：**如 Terumo TSCD® 或 GE ReadyMate™，用高溫融合方式將兩段管路接合，完全無縫接口，完整性更高。常用於生物反應器到充填機的產品管路。

            

            

兩種方式都需要操作員培訓和程序驗證，且每次連接都應記錄以支持批次可追溯性。

        

        

            

#### Servo Motor + Shift Register — 充填機的「大腦和神經系統」

            

**Servo Motor（伺服馬達）：**充填機的精準動作來自伺服馬達，它可以精確控制充填針的位置、速度、加減速（即 Fill Curve 的執行）。相比傳統凸輪驅動，伺服馬達可以通過軟體調整 Fill Curve，無需更換機械零件。

            

**Shift Register（移位暫存器）：**PLC 程式中用來追蹤「哪一個容器需要被剔除」的機制。想像充填線上有1000個西林瓶在移動，第50個在重量檢查站被判定為不合格——但剔除站在傳送帶的下游，距離15個位置。Shift Register 就像一串「帶標記的貨物位置記錄」，確保第50個瓶子到達剔除站時被正確剔除，而不是誤剔第51個。

        

        

            

#### 重點提示：oRABS 的 biodecontamination 是特例，不是常規

            

指南特別說明：某些設施會對整個 cleanroom（包含其中的 oRABS）進行 biodecontamination——但這是特殊案例，不代表 oRABS 本身具有 biodecontamination 能力。

            

法規觀點：如果你的 oRABS 設施聲稱進行了 biodecontamination，監管機構會深入查問驗證文件、循環參數、生物指示劑位置。不能只是「用 VPHP 機器在 cleanroom 裡跑一圈」就聲稱達到 biodecontamination。

        

        

            

#### 實務應用：CDMO 選擇屏障技術的決策框架

            

CDMO 在評估要用 Isolator 還是 RABS 時，通常需要平衡以下因素：

            

                
- **SA 要求：**客戶的藥品是否高風險（例如生物製劑、凍乾、高活性）？SA 要求越高，傾向 Isolator

                
- **換型時間 (Changeover)：**Isolator 的 biodecontamination cycle 通常需要 2–4 小時；oRABS 換型較快。CDMO 如果批次小、產品多樣，TCO 計算需考慮這個時間損耗

                
- **高活性藥物 (HPAPI)：**cRABS 或 Isolator 都能提供操作員保護，但需要整合洩漏偵測和負壓設計

                
- **法規趨勢：**EU GMP Annex 1 (2022) 明確優先推薦 Isolator。選擇 RABS 需要提供 CCS 文件支持

            

        

        

            

#### 練習思考

            

                
1. 一個 Open Isolator 和一個 Closed RABS，哪個 SA 保護等級更高？各自的主要弱點是什麼？

                
2. 如果充填線的 Shift Register 邏輯出現 bug，可能導致什麼品質問題？如何在 OQ 驗證中測試 Shift Register 功能？

                
3. Mousehole 的尺寸如果設計過大，會帶來什麼 SA 風險？

                
4. 一個 CDMO 客戶希望用最低成本引進充填能力，建議選 oRABS Passive 還是 Active？理由是什麼？

            

        

    

Abbreviations — Complete Reference Table 縮寫完整參考表

    

        

## 原文內容 Original Text

        

### Abbreviations

        

        
            
                
                
            
| Abbreviation | Full Term |
| --- | --- |
            
| AF | Auger Filling |
            
| APS | Aseptic Process Simulation |
            
| AVS | Airflow Visualization Study |
            
| CCI | Container Closure Integrity |
            
| CIP | Clean-in-Place |
            
| COC | Cyclic Olefin Copolymer |
            
| cRABS | Closed Restricted Access Barrier System |
            
| DP | Diaphragm Pump |
            
| HEPA | High Efficiency Particulate Air |
            
| ID | Inner Diameter |
            
| IPC | In-Process Control |
            
| LSU | Line Setup |
            
| LVP | Large Volume Parenteral |
            
| mPa-s | milliPascal-second (viscosity unit) |
            
| OD | Outer Diameter |
            
| OEM | Original Equipment Manufacturer |
            
| oRABS | Open Restricted Access Barrier System |
            
| PLC | Programmable Logic Controller |
            
| PP | Peristaltic Pump |
            
| RABS | Restricted Access Barrier System |
            
| RPM | Revolutions per Minute |
            
| RPP | Rotary Piston Pump |
            
| RTP | Rapid Transfer Port |
            
| RTS | Ready-to-Sterilize |
            
| RTU | Ready to Use |
            
| SA | Sterility Assurance |
            
| SIP | Sterilize-in-Place |
            
| SOP | Standard Operating Procedure |
            
| SU | Single Use |
            
| SUS | Single-Use System |
            
| SVP | Small Volume Parenteral |
            
| TCO | Total Cost of Ownership |
            
| TP | Time Pressure |
            
| VPPF | Vacuum Pressure Powder Filling |
        

        

        

            **Note on COC/COP:** COP (cyclic olefin polymer), like COC, is also a transparent thermoplastic used for the manufacture of vials and syringes; to avoid confusion with the acronym for Clean-Out-of-Place, COC has been used exclusively to represent the family of cyclic olefins in this text.
        

    

    

        

## 導師解析 Tutorial Commentary

        

            

#### 縮寫分組記憶法：按功能分類

            

34個縮寫不需要死記，按功能分組理解效果更好：

            

**屏障技術類（Barrier Technologies）：**

            

                
- **RABS** — 限制進出屏障系統（總稱）

                
- **cRABS** — 封閉式 RABS（有獨立排氣）

                
- **oRABS** — 開放式 RABS（與室內空氣交換）

            

            

**無菌品質保證類（Sterility & Quality Assurance）：**

            

                
- **SA** — 無菌保證（最高優先）

                
- **APS** — 無菌製程模擬（培養基模擬灌裝）

                
- **CCI** — 容器密封完整性

                
- **IPC** — 製程中管控（重量、體積）

                
- **AVS** — 氣流視覺化研究

            

            

**充填機技術類（Filling Technologies）：**

            

                
- **PP** — 蠕動泵 (Peristaltic Pump)

                
- **RPP** — 旋轉活塞泵 (Rotary Piston Pump)

                
- **TP** — 時間壓力充填 (Time Pressure)

                
- **DP** — 膜片泵 (Diaphragm Pump)

                
- **AF** — 螺旋充填（粉末用，Auger Filling）

                
- **VPPF** — 真空壓力粉末充填

            

            

**設備/材料類：**

            

                
- **CIP** — 就地清洗（類比洗碗機）

                
- **SIP** — 就地滅菌（類比高壓滅菌）

                
- **SU / SUS** — 一次性使用 / 一次性系統

                
- **RTU** — 即用型（預滅菌容器）

                
- **RTS** — 待滅菌型

                
- **RTP** — 快速傳遞口（用於 Isolator/RABS 物料進出）

                
- **COC** — 環烯烴共聚物（透明玻璃替代材料）

                
- **HEPA** — 高效過濾空氣濾膜

                
- **PLC** — 可程式邏輯控制器

                
- **OEM** — 原始設備製造商

            

            

**產品容量類：**

            

                
- **SVP** — 小容量注射劑（<100 mL）

                
- **LVP** — 大容量注射劑（≥100 mL）

            

            

**工程/財務類：**

            

                
- **LSU** — 換線設定

                
- **TCO** — 總擁有成本

                
- **ID/OD** — 內徑/外徑（管路規格）

                
- **RPM** — 每分鐘轉速

                
- **mPa-s** — 毫帕斯卡秒（黏度單位）

                
- **SOP** — 標準作業程序

            

        

        

            

#### 比喻：CIP/SIP — 洗碗機 + 高壓滅菌鍋

            

**CIP（就地清洗）：**就像洗碗機——不需要把餐具拆下來搬到廚房外，直接在原地用熱水和清洗劑自動沖洗循環。充填機的液體管路在批次結束後，用清洗液（通常是 WFI、NaOH、酸）循環沖洗，再取樣確認殘留合格。

            

**SIP（就地滅菌）：**就像高壓滅菌鍋（Autoclave）的升級版——不需要把零件拆下來放進高壓鍋，直接用蒸氣在管路和設備原位循環加熱達到滅菌標準（通常 121°C, F₀≥15 min）。完成後管路保持無菌狀態直到充填開始。

            

**組合拳：**充填前的標準流程通常是「CIP → SIP → 完整性測試（濾膜/管路） → 充填」。CIP 負責清潔，SIP 負責無菌，兩者缺一不可。

        

        

            

#### 比喻：SU（一次性使用）— 免洗餐具 vs 瓷器

            

**SU 系統（Single-Use System）= 免洗餐具：**每次使用全新的一次性管路、泵頭、容器，用完即丟。不需要 CIP/SIP 驗證，換型快，適合多品種小批量。缺點：塑膠耗材成本高，可浸出物 (Leachables/Extractables) 需要評估，供應鏈風險。

            

**傳統不鏽鋼系統 = 瓷器：**耐用、可重複使用，但需要完整的 CIP/SIP 清潔驗證，換型慢，清潔驗證成本高。適合大批量、少品種。

            

**CDMO 的抉擇：**今日 CDMO 趨勢明顯轉向 SU，尤其是臨床批次和生物製劑。RTU（Ready-to-Use，預滅菌即用型容器）是 SU 概念延伸到初級包材的版本——免洗免滅菌的預充玻璃注射器或西林瓶，直接上線充填。

        

        

            

#### 重點提示：COC/COP — 不是 Clean-Out-of-Place！

            

這是一個容易產生混淆的縮寫陷阱。**COC** 在本指南中代表「Cyclic Olefin Copolymer（環烯烴共聚物）」，一種用於製造透明玻璃替代型西林瓶和預充針筒的熱塑性材料，特點是：

            

                
- 高透明度（媲美玻璃）

                
- 低溶出物（比普通塑膠更適合注射劑）

                
- 耐 EO 滅菌和放射線滅菌，但不耐高壓蒸氣

                
- 輕量、不易碎（適合機器人自動化充填線）

            

            

**注意：**在設備清潔語境中，「COP」代表 Clean-Out-of-Place（拆出清洗），是與 CIP 相對的概念。本指南為避免混淆，全程使用 COC 代表環烯烴材料家族。

        

        

            

#### TCO 概念計算：一次性 vs 傳統系統的 5 年總成本

            

```

傳統不鏽鋼系統（5年 TCO 概算）：
  設備採購：         $X（較高初期投資）
  CIP/SIP 驗證：     $Y（清潔驗證、殘留測試、再驗證）
  清潔耗材（5年）：  $Z（WFI、清洗劑、耗用品）
  停機換型時間成本：  小時數 × 產能損失
  ─────────────────────────────
  5年傳統系統 TCO = X + Y + Z + 停機成本

一次性系統（5年 TCO 概算）：
  設備採購：         $X'（較低，通常40-60%傳統成本）
  SU 耗材（5年）：   $Z'（批次 × 每套耗材成本，通常較高）
  E&L 研究：         $E（可浸出物/溶出物評估，一次性成本）
  供應鏈冗餘儲備：   $S（供應商風險緩衝）
  ─────────────────────────────
  5年 SU 系統 TCO = X' + Z' + E + S

TCO 分析的核心結論：
→ 批量小、品種多 → SU 通常 TCO 更低
→ 批量大、品種少 → 傳統系統通常 TCO 更低
→ 臨床階段 → SU 靈活性優先
→ 商業量產 → 需要詳細計算後再決定
            
```

        

        

            

#### 練習思考

            

                
1. 一個新客戶帶來一個 mAb 凍乾製劑項目，你需要評估用 RTU 西林瓶 + SU 管路 vs 傳統 RTS 玻璃瓶 + 不鏽鋼管路。請列出你會收集的5個關鍵數據點。

                
2. AVS（氣流視覺化研究）的目的是什麼？在 RABS 中哪個位置最需要做 AVS？

                
3. 一個充填機的 IPC（製程中管控）系統，用 100% 線上重量檢查 vs 統計抽樣重量檢查，對 SA 和批次放行各有什麼影響？

                
4. COC 材料在充填操作中有哪些優勢和潛在風險？在評估 RTU COC 西林瓶時，你會要求供應商提供哪些文件？

            

        

    

    

### 本節重點回顧 Section Summary

    

        
- **無菌充填的根本挑戰：**SA 必須在充填前建立並在整個過程中維持，沒有最終滅菌的「補救」機會——這是所有設計決策的出發點。

        
- **指南四大部分：**Part 1（技術選擇）→ Part 2（工程考量）→ Part 3（操作管控）→ Part 4（粉末充填），每部分互相關聯，缺一不可。

        
- **屏障技術光譜：**Closed Isolator（最高保護）→ Open Isolator → cRABS → oRABS Active → oRABS Passive（最低保護）；選擇應基於 SA 需求、產品特性和 TCO 分析。

        
- **一次性系統（SU）vs 傳統系統：**SU = 免洗餐具（快速換型、無 CIP/SIP 驗證需求）；傳統 = 瓷器（耐用但驗證複雜）；選擇取決於批量大小和產品多樣性。

        
- **關鍵術語操作理解：**First Air（未被打斷的 HEPA 直接氣流）、Fill Curve（充填針運動時序）、Biodecontamination（孢子級別消毒）、Shift Register（PLC 追蹤剔除邏輯）——每個術語背後都有工程意涵。

        
- **決策優先序永遠是：**無菌保證 (SA) > 關鍵品質屬性 (CQA) > 商業與彈性需求。

        
- **縮寫速記：**34個縮寫按「屏障技術、無菌品質、充填機類型、設備/材料、產品規格、工程財務」六大類分組記憶。

    

⇧

    PDA Guide No.1 | Educational Material

## Topic 1: Design Elements 設計要素 (p8-p25)

# Section 1A — Aseptic Filling System Design Elements

    

無菌充填系統設計要素：產品考量因素

    

PDA Manufacturing Technology Guide No. 1 | p8 – p16  |  Sections 1.0, 1.1.1 – 1.1.3

    

### 本章學習目標

    

        
- 理解「靶心設計哲學」——無菌保證 (SA) > 關鍵品質屬性 (CQA) > 商業彈性的決策層級，並能在實際情境中正確應用優先順序。

        
- 掌握高藥理活性產品（高毒性、高效能藥物）對充填系統的強制性要求，說明為何必須選擇 cRABS 或隔離器技術。

        
- 針對五大產品敏感性（溫度、氧氣、光線、金屬、矽油），說明每項敏感性的降解機制及對應的工程解決方案。

        
- 識別產品物理化學性質（黏度、表面張力、起泡性、懸浮液、易乾燥、易燃易爆）如何影響充填系統的技術選型，以及可能的設計對策。

        
- 從 CDMO 商業角度理解：設計階段的每一個技術決策，將鎖定未來 10 年以上的成本結構與業務彈性。

    

1.0 Aseptic Filling System Design Elements — Overview  |  無菌充填系統設計要素概述

    

        

## 原文內容 Original Text

        

When designing an aseptic filling process, there are many considerations. First, we must recognize that the product is intended to be a sterile product and that our target is an optimally designed aseptic filling system (see the red bullseye in Figure 1.0-1) that supports the goal of producing a sterile product. Therefore, the filling system must be easy to clean, biodecontaminate, and/or sterilize, minimize the need for interventions, maintain air quality within the environment during operation, and the like. Ensuring sterility assurance (SA) will govern all our decision-making as the primary consideration.

        

Next, the attributes of the product that will impact the design are evaluated. These include, but are not limited to, the product critical to quality attributes (CQAs). Only after these product attributes are fulfilled by the design, can the desired flexibility and business targets be considered. Figure 1.0-1 illustrates some of these various considerations and shows the complexity of how they might interplay to identify the optimal aseptic filling system design.

        

            "When considering all the factors depicted in Figure 1.0-1 collectively, compromises may be required. For example, some of the desired business or flexibility attributes may be waived in order to ensure that the product CQAs, including sterility, are fulfilled."
        

        

The points to consider for several of the elements to be evaluated in a mature design are provided in this topic and throughout this document. Section 21.0 contains case studies that make use of the principles described in Section 1.0 to demonstrate how design decisions and trade-offs are made.

        

It is important to note that the physical equipment selection is not the only necessary element for success in aseptic filling. The ways in which personnel interact with the filling system represent risks to microbial control and opportunities to improve sterility assurance. Therefore *Part 3: Operational Considerations Including Interventions, Component Handling, Filtration, Fluid Pathway, and Discards* should not be overlooked when identifying an appropriate design. Only as an integrated whole (engineering solutions coupled with the required operational behaviors) can an appropriate aseptic design be accomplished.

    

    

        

## 導師解析 Tutorial Commentary

        

            

#### 核心概念解析：「靶心設計哲學」

            

PDA Guide No.1 的核心是一個「靶心 (bullseye)」模型——把最終目標放在圓心，向外依序排列各層考量。

            

**第一圈（最核心）：無菌保證 (Sterility Assurance, SA)**  

            這是絕對的底線。任何設計決策，第一個問題永遠是：「這會不會損害無菌性？」若答案是「會」，則無論其他理由多充分，都不可行。

            

**第二圈：關鍵品質屬性 (CQAs)**  

            包括效價、純度、外觀、pH、可見微粒等。SA 是 CQA 的一部分，但 CQA 的範圍更廣，涵蓋所有影響病患安全與療效的屬性。

            

**第三圈（最外層）：商業彈性與業務目標**  

            如產能、多產品兼容性、換批速度、成本。只有在前兩圈需求都被滿足後，才輪到這一層考量。

            

                

1. 無菌保證 SA — 最優先，不可妥協

                

▼

                

2. 產品 CQA — 病患安全，必須滿足

                

▼

                

3. 商業彈性 — 最後考量，可以妥協

            

        

        

            

#### 比喻說明：手術室中準備食物

            

無菌充填 (Aseptic Filling) 就像在手術室裡為病患準備食物。食物（藥液）本身要安全無虞，但更重要的是，整個準備環境（充填系統）必須達到手術室等級的潔淨度。

            

你不會因為覺得「手術室太麻煩，換個普通廚房就好」而妥協——因為病患的生命安全不容妥協。這正是「SA 永遠是 #1」的精髓。

            

而且手術室的成功不只靠設備（無影燈、消毒器械），還要靠外科醫師的正確行為（洗手、穿無菌衣）。同理，無菌充填的成功需要「工程解決方案 + 操作行為」的整合，缺一不可。

        

        

            

#### 重點提示：設計決策的不可逆性

            

本章最重要的隱含訊息：**充填線設計是一個高度不可逆的決策**。一旦系統建置完成，要改變基礎架構（例如從 RABS 升級到 Isolator，或增加真空充填能力）的成本極高，停產損失更大。

            

這就是為什麼「在設計階段花足夠時間思考所有產品屬性」遠比「先建好再改」更有價值。PDA 指南的整個第一章，就是在教你「設計前該問哪些問題」。

            

對 CDMO 而言，這個設計決策往往鎖定了未來 10–15 年的客戶類型和接案能力。

        

        

            

#### 實務應用：CDMO 的設計選型邏輯

            

假設你是一個 CDMO 的工程主管，正在規劃一條新的無菌充填線。業務部門說：「我們想同時接生物製劑小瓶和預填式針筒，最好也能處理懸浮液。」

            

按照靶心模型，你的思考順序應該是：

            

                
1. **SA 層面**：每種容器形式的無菌保證方式是否相容？預填針筒和小瓶的密封完整性驗證是否都能在同一個屏障系統內實現？

                
2. **CQA 層面**：懸浮液需要攪拌和再循環，生物製劑對剪切力敏感——這兩者在同一條線上的充填系統（pump type）能同時滿足嗎？

                
3. **商業彈性層面**：換型時間多長？需要幾套換型零件？這條「多能彈性線」的實際產能是否真的能支撐業務需求？

            

            

只有前兩層都有明確可行的答案，才值得進行商業可行性計算。

        

        

            

#### 練習思考

            

                
1. 一個 CDMO 客戶要求「充填速度至少 400 vials/min 以降低成本」，但你的評估顯示這個速度下干預頻率會顯著上升。根據靶心模型，你應該如何回應這個商業需求？

                
2. 為什麼 PDA 強調「工程解決方案必須與操作行為整合」？舉一個具體例子說明「設備再好、但操作不當」如何危害無菌性。

                
3. Figure 1.0-1 描述的「bullseye」概念，與 ICH Q8 的 Quality by Design (QbD) 理念有何相似之處？

            

        

    

1.1 Product Considerations for Aseptic Filling System Selection and Design  |  無菌充填系統選型與設計的產品考量

    

        

## 原文內容 Original Text

        

The physicochemical attributes, sensitivities, and tendencies of each product may dictate special filling conditions for that material. Further, the product's attributes, or the intended administration of the product, may also designate specific final containers. In general, if there are specific physicochemical attributes associated with the product that dictate special handling, these considerations will often outweigh the desired requirements for flexibility or fulfillment of business desires.

        

Sections 1.1.1–1.1.3 discuss product attributes that may need to be taken into consideration.

    

    

        

## 導師解析 Tutorial Commentary

        

            

#### 核心概念：產品屬性如何「強迫」設計決策

            

這段文字傳達一個重要訊息：**產品的物理化學特性不是可以協商的商業條件，而是設計的硬性約束條件 (hard constraint)**。

            

舉例：如果你的產品對矽油敏感，你就沒有選擇——容器密封系統必須是無矽油的。這個約束會連鎖影響：容器類型 → 封蓋方式 → 充填方式 → 整條線的機械設計。

            

換句話說，產品屬性是「上游輸入」，充填線設計是「下游輸出」。很多 CDMO 的設計失誤，源於在不充分了解產品屬性的情況下，就倉促選定設備型號。

        

        

            

#### 重點提示：1.1.1 到 1.1.3 的地圖

            

接下來這個大章節可以分三個層次來理解：

            

                
- **1.1.1 藥理活性**：產品對「人」的危害 → 決定屏障系統選型

                
- **1.1.2 產品敏感性**：環境因素對「產品」的危害 → 決定充填環境與容器設計

                
- **1.1.3 物理化學性質**：產品本身的行為特性 → 決定充填技術與針頭設計

            

            

記住這個地圖，讀接下來的章節時就不會迷失。

        

    

1.1.1 Pharmaceutical Activity  |  藥理活性

    

        

## 原文內容 Original Text

        

Products that are hazardous (e.g., highly potent, toxic, specific designations for occupational exposure band (OEB), or occupational exposure level (OEL)) should be filled using a closed Restricted Access Barrier System (cRABS) or isolator technology with containment features (e.g., airflow, appropriate pressure cascades) designed to protect the environment, personnel, and product.

        

The enclosures also commonly include special capabilities to clean residual product, handle soiled parts, and deal with spillage or breakage. In such cases, safety of all personnel must be considered in addition to the routine considerations for product quality and safety.

    

    

        

## 導師解析 Tutorial Commentary

        

            

#### 核心概念解析

            

**OEB (Occupational Exposure Band，職業暴露區間)**：一個 1–5 分的分級系統，數字越高代表藥物毒性/效能越強，對操作人員的暴露限制越嚴格。OEB 4–5 通常要求隔離操作。

            

**OEL (Occupational Exposure Level，職業暴露限值)**：以 µg/m³ 表示的空氣中允許濃度上限。OEL 越低，代表藥物越危險，需要越嚴密的圍堵措施。

            

**cRABS (closed Restricted Access Barrier System，密閉式限制進出屏障系統)**：比開放式 RABS 提供更好的圍堵，但比隔離器略遜。適合中高危藥物。

            

**Isolator (隔離器)**：全密封環境，人員透過手套箱操作，提供最高等級的圍堵與無菌保證。高效能或高細胞毒性藥物的首選。

        

        

            

#### 比喻說明：隔離器 vs RABS — 太空站 vs 無塵室

            

想像你要在月球上工作：

            

**隔離器 = 太空站**：完全密封的人造環境，你與外界的互動只能透過特定的氣閘（RTP 快速傳遞口）。進出都有嚴格程序。月球塵埃（微生物、高效能藥物）絕對進不來，你的呼吸的空氣也不會洩漏出去。

            

**cRABS = 特殊防護無塵室**：有物理屏障和正壓保護，但不是完全密封。適合月球表面短暫作業，但不適合長期暴露在極端環境中。

            

高效能藥物（如抗癌藥物、荷爾蒙類）之所以需要隔離器，不是為了保護「藥品」不受汙染，而是為了保護「操作人員」不受藥品傷害——這是 1.1.1 與 1.1.2 最根本的區別。

        

        

            

#### 重點提示：雙向保護的概念

            

一般的無菌充填屏障系統（RABS/Isolator）主要目的是「保護產品不受外界汙染」——正壓設計，防止外界微生物進入。

            

但高藥理活性產品的充填系統必須同時具備「圍堵功能 (containment)」——**負壓設計或雙重屏障**，防止危險藥物洩漏傷害人員。

            

這兩個目標在壓力設計上有時是矛盾的（正壓 vs 負壓），因此需要精心的氣流設計（如 cascade pressure，階梯式壓力差）來同時達成兩個目標。這是高效能藥物充填線設計中最具挑戰性的工程問題之一。

        

        

            

#### 決策框架：選擇屏障系統的判斷邏輯

            

```

產品 OEB 等級評估
      │
      ├─ OEB 1-2 (低毒性)
      │     → 標準開放式 RABS 或傳統無菌室
      │
      ├─ OEB 3 (中等毒性)
      │     → 開放式 RABS 或 cRABS
      │     → 需評估：正壓充填環境 + 局部廢氣處理
      │
      ├─ OEB 4 (高毒性，如抗癌藥)
      │     → cRABS（密閉式）為最低要求
      │     → 優先考慮隔離器 (Isolator)
      │
      └─ OEB 5 (超高毒性，OEL < 1 µg/m³)
            → 隔離器為強制要求
            → 需設計負壓圍堵 + 雙手套箱
            → 清洗站、廢料處理均需特殊設計
            
```

        

        

            

#### 實務應用：CDMO 接案的成本影響

            

當一個 CDMO 接到一個 OEB 4/5 的高效能藥物充填專案時，如果現有設備是標準 RABS，可能面臨以下情況：

            

                
- 需要安裝額外的圍堵設備（成本：數百萬美元）

                
- 現有人員需要高效能藥物處理培訓

                
- 清潔驗證程序需要完全重新設計（包含殘留限值計算）

                
- 廠房空調系統可能需要改造（廢氣過濾）

            

            

這些都是「在接案報價前就應該評估」的成本，而非事後發現的驚喜。許多 CDMO 在這一點上吃過大虧。

        

        

            

#### 練習思考

            

                
1. 一個抗體藥物偶聯物 (ADC) 產品，其 OEL 為 0.1 µg/m³，你會推薦哪種屏障系統？說明理由。

                
2. 為什麼高效能藥物的充填設備「特別能夠清洗殘留產品」這個能力如此重要？從 GMP 和員工安全兩個角度分別說明。

                
3. cRABS 和傳統 RABS 在「密閉性」上的主要差異是什麼？對無菌保證的影響有何不同？

            

        

    

1.1.2 Product Sensitivities  |  產品敏感性

    

        

## 原文內容 Original Text

        

Biological or physicochemical requirements for ensuring the quality and safety of the product must be assured. Sections 1.1.2.1–1.1.2.6 provide examples of product sensitivities that need to be taken into consideration.

    

    

        

## 導師解析 Tutorial Commentary

        

            

#### 五大敏感性概覽

            

接下來的 1.1.2.1–1.1.2.5 涵蓋了最常見的產品敏感性。每一項都代表一個「如果忽略，會造成藥品降解或病患受害」的風險點。

            

學習方式建議：對每一項敏感性，記住三件事：**(1) 降解機制是什麼、(2) 主要工程對策、(3) 如果不處理的後果**。

        

    

1.1.2.1 Temperature Sensitivity  |  溫度敏感性

    

        

## 原文內容 Original Text

        

Temperature-sensitive products may require temperature-controlled conditions during filling, (e.g., temperature control may be required on the bulk vessel, product-feed pathway, intermediate vessel and/or filling system). Alternatively, or in addition, there could be a time limitation for filling to prevent excessive "time out of temperature" for any individual dose.

        

In some cases, recirculation is possible as a means to maintain the product in contact with temperature-control media (e.g., vessel jacket, temperature coils within the vessel) (see Section 4.0 and Section 4.7 for additional design options).

    

    

        

## 導師解析 Tutorial Commentary

        

            

#### 核心概念：溫度敏感性的兩種控制策略

            

**策略一：主動溫控 (Active Temperature Control)**  

            在充填路徑的每一個環節都維持目標溫度。包括：保溫桶（夾套或內置溫控盤管）、保溫輸液管路（熱保護外層）、充填機本體的溫控。典型例子：某些蛋白質藥物需要在 2–8°C 冷藏溫度下充填。

            

**策略二：時間限制 (Time Limitation)**  

            設定每個充填批次的最大允許時間（即「允許出溫控時間 time out of temperature」）。超過時間，剩餘藥液必須廢棄。這個時間限制通常來自藥品開發時的穩定性研究數據。

            

**再循環 (Recirculation)**：當充填線必須暫停時，讓藥液在溫控容器中持續循環，避免局部過熱或過冷。但要注意：再循環對剪切力敏感的蛋白質藥物可能有風險（見 1.1.2.6）。

        

        

            

#### 比喻說明：冰淇淋工廠的冷鏈

            

溫度敏感性藥品就像冰淇淋：從工廠出來到送到消費者手中，必須全程維持冷鏈。如果中間某個環節斷鏈（運送卡車沒有冷藏），冰淇淋融化又再凍結，品質就被破壞了——即使外觀看起來還好。

            

藥品也是如此。蛋白質藥物在偏高溫度下可能發生聚集 (aggregation)，即使後來放回冷藏，損害已無法逆轉。充填過程中的「溫控冷鏈」，就是確保藥品從桶槽到容器密封的整個過程，溫度從未偏離規格。

        

        

            

#### 重點提示：不只是冷藏，也有需要加熱充填的藥品

            

大多數人想到「溫度控制」就想到「冷藏」，但有些藥品（如含蠟脂質的半固態製劑）在常溫下黏度過高，必須加熱到特定溫度才能流動充填，但又不能過熱以免降解。這類藥品的充填窗口可能極窄（例如 40–45°C），對整條充填路徑的溫度均一性要求極高。

        

        

            

#### 設計考量清單：溫控充填系統的關鍵問題

            

```

設計問題清單：
1. 目標充填溫度範圍為何？（min/max）
2. 充填路徑各段（桶槽 → 管路 → 泵 → 針頭）
   的溫度均一性能否維持？
3. 允許的 "time out of temperature" 上限是多少？
   （依據穩定性研究）
4. 停線時是否需要再循環？
   若是，再循環路徑對產品有無額外剪切力風險？
5. 溫控系統故障的備援計畫為何？
   （偏差處理程序）
            
```

        

        

            

#### 練習思考

            

                
1. 一個需要 2–8°C 充填的 mRNA 疫苗，充填線因設備警報停機 30 分鐘。你的 SOP 說明允許 time out of temperature 上限為 2 小時。這批藥品應如何處置？需要哪些評估步驟？

                
2. 為什麼「再循環」可以幫助維持溫度，但對某些生物製劑來說又可能有風險？說明其中的矛盾，並提出一個可能的解決方案。

            

        

    

1.1.2.2 Oxygen Sensitivity  |  氧氣敏感性

    

        

## 原文內容 Original Text

        

Oxygen-sensitive products can experience oxidation-degradation with a loss of effectiveness of the product in the presence of oxygen over time. Steps must be taken during holding and processing to reduce the risk of such degradation. Inert gases are therefore used in the headspace of holding vessels (e.g., nitrogen overlay) during the filling and closing of the filled containers to minimize oxygen exposure.

        

Overlay in the container may be accomplished with:

        

            
- Pre-gassing — gassing of the container before filling

            
- Gassing during filling — with a special double-walled filling needle

            
- Post-gassing — gassing after filling but before closing

            
- Gassing during closing — the most important and effective method for overlay

        

        

Gassing during closing is the most important and effective method for overlay (see Section 4.0 and Section 4.9).

    

    

        

## 導師解析 Tutorial Commentary

        

            

#### 核心概念：氧化降解與惰性氣體覆蓋

            

**氧化降解 (Oxidation Degradation)**：氧分子與藥物活性成分（特別是含有雙鍵、巰基、酚基的分子）發生化學反應，導致分子結構改變，療效喪失或產生有害雜質。這是許多小分子藥物和生物製劑最重要的化學降解途徑之一。

            

**氮氣覆蓋 (Nitrogen Overlay)**：最常用的惰性氣體保護方法。氮氣（N₂）比氧氣便宜且安全，被用來「置換」容器頭空間 (headspace) 中的氧氣，阻斷氧化反應的氧氣來源。

            

**四種充氣方式的時序：**
              
Pre-gassing → 充填前先沖洗容器
              
充填中充氣 → 雙層充填針同時充填藥液和沖氣
              
Post-gassing → 充填後、封蓋前沖氣
              
封蓋時充氣 → 在封蓋的瞬間維持惰性氣體環境（最有效）
            

        

        

            

#### 比喻說明：真空包裝的咖啡豆

            

高品質咖啡豆如果暴露在空氣中，幾天內風味就會氧化流失。所以咖啡廠商使用真空包裝或充氮包裝——先抽掉氧氣，再充入氮氣密封，讓咖啡豆在惰性環境中保存。

            

藥品的惰性氣體充填原理完全相同。差別在於：咖啡豆壞掉只是浪費錢，藥品氧化可能導致患者用到無效甚至有害的藥物。

            

為什麼「封蓋時充氣」是最有效的？因為即使之前各步驟都做了，從充填完成到封蓋前這段時間，藥液表面還是暴露在空氣中。封蓋時充氣是「最後一道防線」，確保封口時頭空間已被惰性氣體占領。

        

        

            

#### 重點提示：殘留氧含量 (Residual Oxygen Content, ROC) 的量化

            

對氧氣敏感的藥品，通常在產品規格中會設定頭空間殘留氧含量的上限（如 <1%）。這個指標必須在充填工藝開發和驗證中被證明可以持續達到。

            

充氣方法的組合（pre + post + closing）通常需要通過 headspace gas analysis 驗證，確認在整個批次的充填過程中（包括開始、中間、結束），ROC 都能符合規格。

            

特別要注意：**在停線後的重新啟動**是 ROC 最容易超標的時間點，因為頭空間的惰性氣體可能在停線期間被置換。這需要專門的程序控制。

        

        

            

#### 充氣策略決策框架

            

```

產品 ROC 目標值（依穩定性研究確定）
      │
      ├─ ROC 目標 > 5%（低度敏感）
      │     → Post-gassing 通常足夠
      │
      ├─ ROC 目標 1–5%（中度敏感）
      │     → Pre-gassing + Post-gassing 組合
      │     → 驗證批次數量：≥3 批
      │
      └─ ROC 目標 < 1%（高度敏感）
            → 全程覆蓋策略：
              容器桶槽 N₂ overlay
              + Pre-gassing
              + 充填中充氣（雙層針）
              + Post-gassing
              + 封蓋時充氣
            → 可能需要評估真空充填或
              氧氣阻隔包材（barrier packaging）
            
```

        

        

            

#### 練習思考

            

                
1. 你的產品 ROC 規格是 <0.5%。在工藝驗證中發現批次結束時（大約充填了 10,000 支）ROC 開始超標，但批次開始時（前 2,000 支）都合格。最可能的原因是什麼？你會調查哪些方面？

                
2. 氮氣覆蓋保護的是「頭空間」，但藥液本身溶解的氧氣怎麼辦？如果需要降低藥液中的溶解氧，你會採取什麼措施？

                
3. 為什麼「充填中充氣（使用雙層充填針）」在技術上比「充填前後充氣」更複雜？從設備設計和驗證的角度分析。

            

        

    

1.1.2.3 Light Sensitivity  |  光線敏感性

    

        

## 原文內容 Original Text

        

Light-sensitive products must be protected from light exposure during the filling and storage process to prevent degradation. These products can be filled in a light-absorbent container, such as amber glass, or the entirety of the filling system, including the filler, capper, and any transfer systems or loading/unloading systems, can be designed with attributes such as:

        

            
- Light-protective windows

            
- Light-emitting diode (LED) lighting

            
- Wavelength diffusers

            
- Lighting of a specific wavelength

        

        

Different products may have sensitivity to different wavelengths (e.g., visible blue light and invisible ultraviolet light are more energetic than red light). Higher energy wavelengths from 300 nm to 500 nm are most often responsible for photodegradation.

        

Therefore, performing characterization studies to determine the light-mediated degradation pathway is recommended in order to ensure that the most appropriate solution, without compromising product quality, is implemented. For example, the use of light-absorbent containers may make visual inspection more difficult and may be contraindicated in some cases.

    

    

        

## 導師解析 Tutorial Commentary

        

            

#### 核心概念：光降解的物理機制

            

**光降解 (Photodegradation)**：光子能量被藥物分子吸收後，激發電子躍遷，引發化學反應（如氧化、異構化、聚合、水解）。能量越高的光（波長越短），引發的損害越大。

            

**300–500 nm 波長段最危險**：
              
UVB (280–315 nm) 和 UVA (315–400 nm)：無形的高能量紫外線
              
可見光藍紫段 (400–500 nm)：雖肉眼可見，仍有相當能量
              
黃光/紅光 (>580 nm)：能量低，通常不引發光降解
            

            

**琥珀色玻璃 (Amber Glass)**：透過吸收 <470 nm 的光，阻擋最危險的波長。但這也使得容器不透明，影響目視檢查。

        

        

            

#### 比喻說明：曬傷與防曬乳

            

人的皮膚曬傷是因為 UVB 光子能量破壞了 DNA。防曬乳的原理是吸收或反射這些高能量光子，讓它們無法傷害皮膚。

            

光敏感藥品的保護策略完全類似：
              
- 琥珀玻璃 = SPF 50 防曬乳（吸收/阻擋危險波長）
              
- LED 燈具取代螢光燈 = 選擇對皮膚友善的燈光（螢光燈含 UV 成分，LED 可精確控制波長）
              
- 波長擴散器 = 傘（散射光線、降低直接照射強度）
            

            

關鍵點：不是「暗」就是安全——關鍵是「特定危險波長是否被阻斷」。

        

        

            

#### 重點提示：琥珀玻璃的兩難困境

            

琥珀玻璃看似最簡單的解決方案，但有一個重大代價：**視覺檢查 (visual inspection) 的困難度大幅上升**。

            

無菌充填線的終點是 100% 目視檢查（或自動視覺檢查，AVI），用來篩除可見微粒、容器缺陷等問題。透過深色琥珀玻璃，很多缺陷根本看不見。

            

這是一個典型的「CQA 之間的取捨」：為了保護藥品不降解（無菌保證相關 CQA），可能犧牲了另一個 CQA（微粒控制的可檢測性）。

            

這正是為什麼 PDA 建議先做「光降解特性研究 (characterization studies)」，精確了解哪個波長段是真正的威脅，再決定最小化保護方案，而不是一律使用最深色的琥珀玻璃。

        

        

            

#### 實務應用：CDMO 的光保護充填線設計

            

當 CDMO 承接一個光敏感小分子藥物的充填合約時，需要評估以下選項（成本由低到高）：

            
                
                    
                    
                    
                
| 保護方案 | 優點 | 限制 |
| --- | --- | --- |
                
                    
                    
                    
                
| 更換充填間照明為黃光/紅光 LED | 成本低，不改變容器 | 仍需確認黃光不引發降解 |
                
                    
                    
                    
                
| 為充填機加裝遮光護罩 | 針對性保護，不影響其他區域 | 需驗證護罩覆蓋的完整性 |
                
                    
                    
                    
                
| 使用琥珀玻璃容器 | 最直接的產品保護 | 視檢困難、容器成本高 |
                
                    
                    
                    
                
| 全套光保護充填線改造 | 最全面的保護 | 成本高、改造時間長 |
            

            

最佳策略通常是「特性研究驅動的最小化保護」——找出真正危險的波長，精準阻擋，而非所有光線一刀切。

        

        

            

#### 練習思考

            

                
1. 你的客戶堅持使用透明玻璃瓶（方便視檢），但產品對 400–450 nm 光敏感。除了更換容器，你有哪些充填環境改造選項？如何驗證這些改造足夠？

                
2. 為什麼 PDA 強調先做「光降解特性研究」再決定保護方案，而不是直接採用最保守的全遮光設計？從 CDMO 商業角度分析「過度保護」的代價。

            

        

    

1.1.2.4 Metal Sensitivity  |  金屬敏感性

    

        

## 原文內容 Original Text

        

Metal-sensitive products must be protected from contact with certain metals, which may limit the alloys that can be used in the design of the product-contact surfaces.

        

Single-use (SU) disposable elastomers for the fluid pathway are often employed, and materials of construction such as ceramics are selected for the filling equipment rather than low-iron material parts such as chrome-plated stainless steel.

    

    

        

## 導師解析 Tutorial Commentary

        

            

#### 核心概念：金屬離子對藥品的危害

            

**金屬敏感性 (Metal Sensitivity)**：某些藥物（尤其是蛋白質、多肽、核酸類生物製劑）對痕量金屬離子（如 Fe²⁺、Cu²⁺、Ni²⁺、Cr³⁺）極為敏感。這些金屬離子可能：

            

                
- 催化氧化反應（金屬催化氧化，MCO），加速藥物降解

                
- 與蛋白質結合引發結構變化或聚集

                
- 作為可浸出物 (leachables) 進入藥品，超過安全閾值

            

            

**不鏽鋼的問題**：傳統 316L 不鏽鋼含有鐵、鉻、鎳。在酸性或含氯環境下，金屬離子可能從表面浸出，進入藥液。鍍鉻不鏽鋼（chrome-plated SS）更是鉻離子的潛在來源。

            

**替代方案**：
              
- 陶瓷 (Ceramics)：化學惰性極強，幾乎不溶出任何金屬
              
- 一次性使用 (SU) 彈性體管路：避開不鏽鋼，改用高純度聚合物
            

        

        

            

#### 比喻說明：免洗餐具 vs 瓷器

            

傳統充填管路（不鏽鋼）就像餐廳的金屬餐具：耐用、可重複使用、可清洗，但接觸食物後可能有微量金屬溶出（特別是在有醋/酸性食物時）。

            

一次性使用 (SU) 聚合物管路就像高級壽司店的免洗陶瓷杯：每次都是全新的，不存在「累積浸出」問題，但用完即丟。

            

陶瓷充填泵則像真正的頂級陶瓷餐具：比金屬更惰性，不會「染味」，特別適合高純度要求的場合。

        

        

            

#### 重點提示：可萃取物/可浸出物 (E&L) 研究的重要性

            

無論選擇哪種材質，與產品接觸的每一種材料都必須經過「可萃取物與可浸出物 (Extractables & Leachables, E&L)」研究，確認在藥品有效期內，從材料中浸出到藥液的痕量化學物質種類和數量均在安全限值內。

            

這不只是金屬的問題：聚合物管路也可能有有機可萃取物（增塑劑、抗氧化劑等添加劑）。E&L 研究是現代藥品法規（如 USP <661>、ICH Q3E，及 BPSA/ELSIE 指南）的強制要求。

            

對 CDMO：換用新的 SU 供應商或新批次聚合物材料，通常需要重新評估 E&L，這是一個常被忽視的供應鏈風險。

        

        

            

#### 練習思考

            

                
1. 你的一個 mAb（單株抗體）客戶要求整條充填路徑使用「金屬離子接觸最小化」設計。請列出從桶槽到充填針的完整路徑，並為每一個環節說明推薦材質和理由。

                
2. 陶瓷充填泵相較於傳統不鏽鋼旋轉活塞泵，除了金屬離子問題，還有什麼其他優缺點？（提示：想想維護、清洗、成本、耐磨性）

                
3. 一次性使用 (SU) 系統的優點是「避免清洗/滅菌驗證的複雜性」，但它自己也有 E&L 問題。你認為 SU 系統的 E&L 風險是否比可重複使用的不鏽鋼系統更低或更高？說明你的理由。

            

        

    

1.1.2.5 Silicone Sensitivity  |  矽油敏感性

    

        

## 原文內容 Original Text

        

Silicone-sensitive products must be protected from contact with silicone oils or emulsions that are commonly applied to glass containers and elastomers. To protect from silicone exposure, polymer container–closure systems (e.g., cyclic olefin copolymer (COC)) may be used as the designated silicone-free container.

        

Alternatively, there are glass containers available with lubricant that have been polymerized onto the glass either by heat or by high voltage. Elastomeric closures may be completely coated with an alternative polymeric coating, or only the product contact surface of the elastomer may have a specific coating that is silicone-free.

        

When handling silicone-free elastomers, especially for syringes, the filling line may need to be designed with vacuum stoppering as the silicone-free or coated stoppers may not withstand the mechanical friction and compression of a vent-tube closure system (see Section 7.3).

        

When employing vacuum stoppering, vacuum filling might also be required, especially for higher viscosities, to extract the air bubble from the syringe's luer channel while filling. This vacuum filling approach will also reduce the potential of splashing due to rapid air withdrawal from the luer channel during vacuum stoppering.

    

    

        

## 導師解析 Tutorial Commentary

        

            

#### 核心概念：矽油與蛋白質藥物的相互作用

            

**矽油 (Silicone Oil)**：一種廣泛用於玻璃注射器內壁潤滑的物質（dimethicone），讓活塞能夠順暢滑動。傳統預填式注射器幾乎無一例外地使用矽油潤滑。

            

**矽油的問題**：矽油微滴在蛋白質藥液中可作為「疏水核心」，誘發蛋白質聚集 (aggregation) 或顆粒形成，這是免疫原性 (immunogenicity) 的重要風險因素。對生物製劑（特別是 mAb、酶替代療法藥物）而言，這是一個嚴肅的病患安全問題。

            

**COC 容器 (Cyclic Olefin Copolymer)**：一種高純度的聚合物材料，可以做成注射器或小瓶，完全不需要矽油潤滑，且透明度接近玻璃，方便視覺檢查。缺點是成本較玻璃高，且剛性較差（對某些自動注射器可能有配合性問題）。

            

**聚合固定潤滑劑 (Polymerized Lubricant)**：通過熱處理或高壓電將矽油「燒結」固定在玻璃表面，讓矽油不再游離脫落進入藥液。這種方案可保留玻璃容器，同時大幅降低矽油遷移風險。

        

        

            

#### 比喻說明：有蠟的模具 vs 不沾鍋

            

傳統預填針筒的矽油問題，就像烘焙用的蛋糕模具：你需要在內壁塗抹奶油/麵粉（矽油），這樣蛋糕（活塞）才不會黏住，但有時候一小塊油脂會沾在蛋糕上（矽油微滴進入藥液）。

            

COC 注射器就像不沾鍋：表面塗層（聚合物本身）已經具有低摩擦特性，不需要額外潤滑劑，天然就不黏。

            

聚合固定矽油玻璃瓶則像把奶油「燒進」模具表面——油還在，但固定了，不會脫落到食物上。

        

        

            

#### 重點提示：矽油問題引發的連鎖設計變化

            

選擇無矽油容器/塞子，會像多米諾骨牌一樣引發一系列設計改變，這是本節最重要的系統性思維：

            

                
1. **無矽油膠塞 → 必須改用真空封蓋 (vacuum stoppering)**  
因為沒有矽油潤滑，傳統的排氣管封蓋（vent-tube）的機械摩擦力會損傷塞子，導致碎屑或塞子插入不完整。真空封蓋（vacuum stoppering）避開了機械插入問題，改用負壓讓塞子「被吸進去」。

                
2. **真空封蓋 → 可能需要真空充填 (vacuum filling)**  
真空封蓋時，針筒內的空氣會被快速抽走。如果藥液黏度較高，空氣從 luer 頭端快速逸出的瞬間，會導致藥液飛濺，污染封蓋區域。真空充填可以預先排除針筒內空氣，從根本上解決這個問題。

                
3. **整條充填線需要重新設計**：包括真空系統安裝、充填程序修改、重新驗證。

            

            

這是「設計決策的連鎖效應」最典型的例子：一個看似簡單的容器選擇，牽動了整條充填線的技術架構。

        

        

            

#### 矽油敏感性設計決策樹

            

```

產品是否對矽油敏感？
（依據蛋白質聚集研究、E&L 要求）
      │
      是
      │
      ├─ 步驟 1：選擇無矽油容器系統
      │     選項 A：COC 聚合物注射器/小瓶
      │     選項 B：聚合固定潤滑劑玻璃容器
      │
      ├─ 步驟 2：選擇無矽油封蓋
      │     選項 A：全塗層橡皮塞（complete polymer coat）
      │     選項 B：局部塗層（僅產品接觸面無矽油）
      │
      ├─ 步驟 3：評估封蓋方式
      │     無矽油塞 → 傳統排氣管封蓋可能損傷塞子
      │     → 改用真空封蓋 (vacuum stoppering)
      │
      └─ 步驟 4：評估充填方式
            若藥液黏度高 + 真空封蓋
            → 考慮真空充填 (vacuum filling)
            → 避免 luer 頭端飛濺問題
            
```

        

        

            

#### 實務應用：CDMO 承接 mAb 預填針充填的完整評估

            

場景：客戶帶來一個高濃度 mAb（150 mg/mL，黏度約 15 cP），要求使用 1 mL 預填式注射器，且因蛋白質對矽油極為敏感，必須無矽油。

            

你需要的設備改造清單：

            

                
- 容器：由標準矽化玻璃注射器 → COC 注射器（或聚合固定矽油玻璃注射器）

                
- 封蓋：由傳統橡皮塞 → 全塗層無矽油 Fluorotec 塞（或 NovaPure 塞）

                
- 封蓋機構：由排氣管 (vent-tube) 封蓋 → 真空封蓋系統（需新增真空幫浦和控制系統）

                
- 充填方式：評估是否需要真空充填（特別是在高黏度下）

                
- 重新驗證範圍：容器密封完整性 (CCI)、封蓋力、可見微粒、E&L、模擬運送測試

            

            

成本影響：COC 注射器成本約為標準玻璃注射器的 2–3 倍；真空封蓋系統的設備投資通常在數十萬美元以上；完整驗證可能需要 6–12 個月。

        

        

            

#### 練習思考

            

                
1. 你的生產線已有傳統排氣管封蓋系統，但新接的產品需要無矽油塞。你能否保留現有封蓋機構，只更換塞子類型？說明為什麼可以或不可以，並提出替代方案。

                
2. COC 注射器不需要矽油，但它的聚合物材質本身有沒有可能與蛋白質藥物發生其他不良交互作用？你會怎麼評估？（提示：考慮 E&L 研究和蛋白質吸附測試）

                
3. 「真空充填」解決了 luer 頭端飛濺問題，但它本身有沒有新的挑戰或限制？（提示：考慮藥液發泡傾向、含氣泡問題）

            

        

    

1.1.3 Physicochemical Properties  |  物理化學性質

    

        

## 原文內容 Original Text

        

Properties such as viscosity, surface tension, or foaming tendencies for liquids, or products that are suspensions, quick-drying, flammable, or explosive may require specialized filling technologies, special filling needles, or specific filling-process conditions for optimal, safe filling. Compatibility of the materials in contact with product should also be evaluated to ensure maintenance of the physicochemical properties of the product.

        

Powder characteristics that will influence powder filling-system selection and process control are flowability, particle size, particle morphology, bulk and tapped density, angle of repose, and surface area, among others (see Section 17.0).

        

The following are examples of physicochemical properties that may need to be taken into consideration:

        

**High Viscosity:** High viscosity products, which must be filled air-bubble-free, often need to be filled under vacuum. Depending on the surface tension and break-away behavior (e.g., likelihood to drip) during filling, a fluted filling needle (or, in some cases, a closing needle) may be considered (see Section 3.0 for additional detail on needle types).

        

**Low Surface Tension:** Products with a surface tension that is less than water must be filled with a smaller internal diameter cylindrical needle, or a needle with a crimped outlet or basketed outlet to prevent dripping (see Section 3.0 for more details on needle types).

        

**Foaming:** Products with a tendency to foam during handling often create a foam or froth when agitation occurs at the air-liquid interface. The fluid pathway and vessels must be carefully designed to minimize the opportunities for foaming, which may include but are not limited to:

        

            
- Controlling the methods of introduction to the bulk or intermediate vessel (e.g., through a J-tube or tube that extends to the bottom of the vessel)

            
- Limiting the pressure applied to the product

            
- Controlling the fill-curve for the liquid dispensing (i.e., controlled velocity, acceleration, deceleration)

            
- Use of diving needles (i.e., synchronized movement of the filling needle correlated to the liquid dispensing)

            
- Or several of these techniques together (see Section 4.0 for more details)

        

        

**Suspension:** Suspension products are a heterogeneous mixture of a liquid and finely distributed solids (particles). To ensure that there is no settling of the particles and to ensure uniform filling, the solids must be continuously suspended in the liquid. This can be accomplished by agitating the suspension using agitators and/or recirculation. In addition, it will be very important to control filling-stoppage times (see Section 4.6 for diagrams of possible designs for both agitation and recirculation). Care must be taken to ensure that the selected suspension mechanism does not impact the biological or physicochemical characteristics of the product. Another consideration for suspensions is that the solids content in the suspension can have an abrasive effect, which may influence the selection of the materials of construction of the filling equipment (e.g., using ceramic instead of chrome-plated stainless steel).

        

**Quick-Drying:** Quick-drying products or those that have a tendency to crystallize can accumulate at the points where they are exposed to air such as at the tips of filling needles. The exact characteristics of the formulation will determine the appropriate engineering solution. Therefore, it is important to evaluate the composition of the product to determine which ingredient(s) is(are) responsible for any visible residue and, when possible, formulate to limit their impact (some excipients have a tendency to form very visible residues even when the solid quantities are negligible). Data should be available on the impact of dried residue ending up within a dosage unit in order to determine risk to patients (e.g., what are the quality implications for potency? stability? particulate?). When reformulation is not possible, the filling needle design must be selected to prevent dripping or accumulation; basket needle designs may be helpful. The implementation of jacketed needles (i.e., gassing needles) may help with some products (see Section 3.0 for additional details on needle selection). Suck back may also be helpful to avoid accumulation of product at the tip of the needle.

        

The fill curve is the primary method to control splashing and accumulation of product on the outside of the needle. The fill curve should avoid any sudden acceleration or excessive velocity, the filling should be conducted from bottom up, and the needle motion should avoid touching the surface of the liquid at any point during the fill curve. Smooth flow throughout the filling cycle should be the goal.

        

With regard to the dosing system, the product-lubricated rotary piston pump (RPP) may experience drying at the interface where the piston enters. Therefore, a better choice in filling system might incorporate closed system technology such as PP, TP, or DP. Environmental conditions such as low humidity may also exacerbate rapid drying. During prolonged operation or prolonged periods of line stoppage, drying may become inevitable and may require interventions such as flushing needles and discarding units upon restart, or disabling or replacing filling stations in the worst cases. From a quality control perspective if the residue affects dosing accuracy 100% IPC may be required (see Section 5.0 for additional details on IPC for dose control).

        

**Flammable or Explosive:** Flammable or explosive products will require that influencing factors be evaluated prior to determining the appropriate filling technology, such as:

        

            
- Material properties (e.g., flash point, ignition temperature, maximum content of the flammable constituent in the formulation)

            
- Maximum volume to be filled in each container and headspace for volatile constituents

            
- Zone classification, temperature class, and explosion group

            
- Identification of external influences and ambient temperature

            
- Safety data sheet

        

    

    

        

## 導師解析 Tutorial Commentary

        

            

#### 核心概念：物理化學性質的六大充填挑戰

            

本節列出了六種最常見的特殊物理化學性質，每一種都對應不同的工程挑戰：

            
                
                    
                    
                    
                
| 性質 | 核心問題 | 主要對策 |
| --- | --- | --- |
                
                    
                    
                    
                
| 高黏度 | 難以精確充填；殘留氣泡 | 真空充填；凹槽針頭 |
                
                    
                    
                    
                
| 低表面張力 | 針頭滴液污染 | 縮口/籃形針頭 |
                
                    
                    
                    
                
| 易起泡 | 泡沫影響充填準確性和無菌性 | J 型進液管；潛水針；控制充填曲線 |
                
                    
                    
                    
                
| 懸浮液 | 粒子沉降導致充填不均一 | 持續攪拌/再循環；控制停線時間 |
                
                    
                    
                    
                
| 易乾燥/結晶 | 針頭積聚結晶影響計量和微粒 | 籃形針；回吸；封閉式泵；充填曲線優化 |
                
                    
                    
                    
                
| 易燃易爆 | 爆炸/火災安全風險 | 防爆電氣設計；區域分類；閃點評估 |
            

        

        

            

#### 比喻說明：充填問題就像廚房裡的挑戰

            

把充填系統想成一個「廚房」，不同性質的藥液就像不同的食材：

            

**高黏度** = 蜂蜜倒入小瓶：倒得太快，容器裡有氣泡；倒得太慢，每批都黏在杯口。解法：加熱降低黏度（或真空抽泡）。

            

**低表面張力** = 酒精倒入杯子：比水更容易「滴下來」，因為表面張力小，液滴容易從器皿邊緣滑落。解法：用更細的管口控制流速，或在出口設計「回縮結構」。

            

**易起泡** = 啤酒倒入杯子：從高處倒，泡沫就衝出來；沿杯壁緩慢倒，泡沫才少。「充填曲線」就是控制「倒酒的速度和角度」的程序。

            

**懸浮液** = 果粒柳橙汁：不搖動的話，果粒都沉到底，前幾杯全是水後幾杯全是渣。充填前必須持續攪拌。

            

**易結晶** = 鹽水蒸發：暴露在空氣中的邊緣會結晶。藥品在針頭出口同理——空氣接觸就結晶，久了堵塞出口。

        

        

            

#### 重點提示：充填曲線 (Fill Curve) 的重要性

            

「充填曲線 (fill curve)」是指充填過程中藥液流速隨時間的變化模式——包括加速、維持、減速三個階段。

            

一個設計良好的充填曲線應該：

            

                
- 避免突然加速（防止湍流 → 起泡/飛濺）

                
- 從容器底部開始充填（從下往上，避免自由落體衝擊）

                
- 充填針全程不接觸液面（防止針頭被液體污染或液面攪動）

                
- 結尾平滑減速（防止最後幾滴多余的滴落）

            

            

充填曲線是藥液充填工藝開發中最需要根據實際產品特性「量身定制」的參數，不能直接借用其他產品的曲線。

        

        

            

#### 重點提示：懸浮液的特殊風險——磨損性

            

很多人知道懸浮液需要攪拌以保持均一，但容易忽略另一個問題：**固體顆粒對充填設備的磨損 (abrasion)**。

            

懸浮液中的硬質顆粒（如某些無機鹽晶體、礦物質成分）在流過泵和針頭時，會像砂紙一樣逐漸磨損金屬表面。磨損的金屬碎屑會成為可見/不可見微粒，直接進入藥液——這是一個嚴重的品質風險。

            

這就是為什麼懸浮液充填通常優選陶瓷材質（硬度高、化學惰性、耐磨）的充填泵，而非傳統的鍍鉻不鏽鋼。

        

        

            

#### 易乾燥藥品的工程對策決策框架

            

```

易乾燥/結晶藥品的充填挑戰評估：
      │
      ├─ Step 1：配方評估
      │     識別「哪個成分」導致結晶/乾燥
      │     能否調整配方降低影響？
      │
      ├─ Step 2：針頭設計選擇
      │     - 籃形針 (basket needle)：減少積聚面積
      │     - 夾套針/充氣針：惰性氣體包圍針頭出口
      │     - 回吸功能 (suck back)：針頭退出後
      │       主動將殘液回抽，避免在針頭懸掛
      │
      ├─ Step 3：充填曲線優化
      │     避免急加速、急減速
      │     從底部充填 (bottom-up)
      │     針頭全程不觸液面
      │
      ├─ Step 4：充填泵選擇
      │     RPP（旋轉活塞泵）活塞入口可能乾燥
      │     → 優先考慮密封式：PP、TP、DP 泵
      │
      └─ Step 5：停線管理程序
            停線 → 預設沖洗週期
            重啟 → 棄置頭幾支、恢復充填
            長時間停線 → 停用充填站或更換針頭
            如影響劑量精度 → 啟動 100% IPC
            
```

        

        

            

#### 重點提示：易燃/易爆產品的法規框架

            

易燃/易爆藥品（如含乙醇的注射液、某些揮發性有機溶劑）在充填時必須遵循電氣防爆規範，這不是 GMP 問題，而是工業安全法規問題，涉及多套標準：

            

                
- **ATEX 指令（歐盟）**：爆炸性環境中設備和保護系統的指令

                
- **NEC（美國）**：美國國家電氣規範，定義危險區域分類

                
- **IEC 60079 系列**：防爆電氣設備的國際標準

            

            

關鍵參數：閃點 (flash point) 和引火溫度 (ignition temperature) 決定了危險區域分類（Zone 0/1/2 或 Class I Div 1/2），進而決定充填設備必須具備哪個等級的防爆認證（Ex d, Ex e, Ex i 等）。

            

這意味著充填間的**所有電氣設備**——馬達、開關、感應器、電腦控制系統——都必須符合對應的防爆認證，這對設備採購和廠房設計有重大影響。

        

        

            

#### 實務應用：CDMO 物理化學性質評估的業務流程

            

在 CDMO 承接一個新的充填業務前，技術評估階段應包含「產品特性問卷 (Product Characteristics Questionnaire)」，覆蓋以下問題：

            
                
                    
                    
                
| 問題 | 答案影響 |
| --- | --- |
                
                    
                    
                
| 藥液在充填溫度下的黏度是多少？ | 泵型選擇；充填曲線設計；是否需要真空充填 |
                
                    
                    
                
| 表面張力是否低於水（72 mN/m）？ | 針頭類型選擇 |
                
                    
                    
                
| 是否有已知的起泡傾向？ | 進料系統設計；充填曲線；是否需要潛水針 |
                
                    
                    
                
| 是溶液還是懸浮液？ | 是否需要攪拌/再循環；設備材質（陶瓷 vs SS） |
                
                    
                    
                
| 是否有已知的結晶或乾燥傾向？ | 針頭設計；泵型選擇；停線管理程序 |
                
                    
                    
                
| 是否含有易燃成分？（閃點？） | 廠房防爆認證要求；特殊設備採購 |
            

            

這份問卷的答案，直接決定了是否需要在現有設備上追加投資，或者這個業務根本不適合在現有充填線上生產。在報價前搞清楚這些問題，可以避免後期高昂的改造成本和項目延誤。

        

        

            

#### 練習思考

            

                
1. 你正在評估一個疫苗懸浮液充填合約。客戶說：「我們只需要充填設備能夠攪拌懸浮液就好。」為什麼這個要求遠遠不夠？你還需要問哪些關鍵問題，以確保充填品質？

                
2. 一個含 20% 乙醇（閃點約 16°C）的注射液需要充填，充填間環境溫度 20°C。從安全角度，這個充填操作需要哪些特殊的廠房和設備要求？

                
3. 充填曲線是「從底部充填 (bottom-up filling)」的原則。請解釋為什麼從容器底部開始充填比從頂部滴落更好，分別從「無菌性」和「充填精度」兩個角度說明。

                
4. RPP（旋轉活塞泵）對易結晶藥品特別不利，而 PP（蠕動泵）更合適——這個論述的理由是什麼？說明兩種泵的結構差異如何決定它們對易乾燥藥品的適用性。

            

        

    

    

### 本節重點回顧 Section Summary — Section 1A

    

        
- **靶心設計哲學**：SA（無菌保證）永遠是第一優先；CQA（關鍵品質屬性）第二；商業彈性最後。當三者衝突時，上層永遠優先，這個原則貫穿整個 PDA Guide No.1。

        
- **設計決策的不可逆性**：無菌充填線的設計鎖定了未來 10–15 年的技術架構和業務能力；前期充分的產品特性分析，遠比後期改造更經濟。

        
- **高藥理活性產品**：OEB 4–5 產品強制要求 cRABS 或隔離器；需同時考慮「保護產品」（正壓）和「保護人員」（圍堵/負壓）的雙重設計目標。

        
- **五大產品敏感性**：溫度（主動溫控/時間限制）、氧氣（惰性氣體覆蓋，封蓋時充氣最有效）、光線（特性研究後的最小化保護，注意視檢能力取捨）、金屬（陶瓷/SU系統，E&L評估）、矽油（COC容器 → 無矽油塞 → 真空封蓋 → 可能需真空充填，連鎖設計影響）。

        
- **六大物理化學性質**：高黏度（真空充填/特殊針頭）、低表面張力（縮口/籃形針頭）、易起泡（J管/潛水針/充填曲線控制）、懸浮液（持續攪拌/陶瓷設備防磨損）、易乾燥結晶（籃形針/回吸/密封式泵/100% IPC）、易燃易爆（防爆電氣認證/區域分類）。

        
- **工程與操作的整合**：無菌充填的成功需要「設備設計」與「操作行為」協同——任何一方的缺失都可能危害無菌性，設備選型時必須同時考慮操作程序的可行性。

    

⇧

# Section 1B: Design Elements — Capacity, Campaigning & Future-Proofing

    

設計要素：產能模型、分批生產策略與未來彈性規劃

    

PDA Manufacturing Technology Guide No. 1 | p17 - p25

    
    

        

            

1. Sterility Assurance (無菌保證) — 永遠第一優先

        

        

↓

        

            

2. Product CQAs (產品關鍵品質屬性) — 病患安全

        

        

↓

        

            

3. Business & Flexibility (商業與彈性) — 營運需求

        

    

    
    

        

### 本章學習目標

        

            
- 理解產能模型的各項輸入參數（停機率、換線時間、良率、效率），並能設定充填速度目標

            
- 掌握分批生產（Campaigning）的 SA 風險來源與對應的控制策略

            
- 比較四種液體充填技術在不同容器和產品類型的適用性

            
- 了解未來彈性規劃在充填線設計中的商業考量與風險對齊原則

        

    

    
    

        

### 本章內容索引

        

            1.4 充填速度與產能模型
            1.4.1 停機率計算
            1.4.2 分批生產策略
            1.5 分批生產的 SA 要求
            1.6 未來彈性規劃
            2.0 充填技術概覽
            Table 2.0-1 技術比較
            Table 2.0-2 容器適用性
            Table 2.0-3 產品類型比較
        

    

    
    

        

            

1.4

            

                

## Filling Speed and Volume Driving Selection and Design

                

充填速度與產量驅動設備選型與設計

            

        

        

            
            

1.4.1 Capacity Model Inputs — Shutdown Allowances & Core Factors

            

                

                    

Original Text (English)

                    

Only after creating a capacity model that takes the above factors into consideration can a filling speed target be set. The key inputs to the capacity model include:

                    

                        
- **Shutdown Allowances** – How many days per year will the line be operated, accounting for such factors as shutdowns, aseptic process simulations (APS), testing, technical studies, recapitalization, and changes?

                        
- **Campaign Strategy** – Will multiple batches be campaigned to reduce changeover time? (See Section 1.5 for additional considerations for campaigning.)

                        
- **Changeover Time** – What amount of time is required between campaigns and between batches within a campaign, measured from the last good container (current batch) to the first good container (next batch)?

                        
- **% Yield** – How much scrap can be tolerated?

                        
- **% Line Efficiency** – When filling, what is the expected line efficiency (i.e., the tolerance level for stoppages/downtime)?

                        
- **% Facility Efficiency** – Of the available hours in a year, what percentage of these will the line operate (i.e., how much allowance for unforeseen events will be built into the production plan)?

                        
- **Capacity Flexibility** – Should the initial capacity plan be established for low filling-line utilization so there is ample time to make changes, if needed (e.g., plan for staffing more shifts than needed to meet the capacity plan, select a faster line than needed to meet the plan)?

                        
- **Facility Suitability** – In an existing facility, does the facility design (e.g., footprint, cleanroom classifications, utilities) support the selected filling line?

                    

                    

Only after creating a capacity model that takes the above factors into consideration can a filling speed target be set.

                

                

                    

中文解析 Commentary

                    

                        

#### 產能模型的八大輸入參數

                        

在設定充填速度目標之前，必須先建立完整的產能模型 (Capacity Model)。這八個參數構成模型的核心輸入：

                        

                            
- **停機率 (Shutdown Allowances)**：APS 模擬、PM 保養、法規審查等非生產時間，通常每年扣除 30–60 天

                            
- **分批策略 (Campaign Strategy)**：連續生產多批次 vs. 單批模式，影響換線成本與 SA 風險

                            
- **換線時間 (Changeover Time)**：從上一批「最後一個合格容器」到下一批「第一個合格容器」所需時間

                            
- **良率 (% Yield)**：可接受的廢棄品比例，影響原料消耗與成本

                            
- **線效率 (% Line Efficiency)**：充填運行時的實際效率，含短暫停機損耗

                            
- **設施效率 (% Facility Efficiency)**：全年可用工時中實際運作的比例

                            
- **產能彈性 (Capacity Flexibility)**：預留成長空間，初期低利用率以利後續調整

                            
- **設施適用性 (Facility Suitability)**：現有廠房的潔淨室等級、公用設施是否支持所選充填線

                        

                    

                    

                        

#### 產能模型計算邏輯

                        

```
年有效工時 = 365天 × 24hr × % Facility Efficiency
          − Shutdown Days
實際充填時間 = 年有效工時 × % Line Efficiency
年產出容器數 = 充填速度 (容器/hr)
             × 實際充填時間
             × % Yield
```

                        

只有在確定這八個參數後，才能反推所需的充填速度目標。例如，年需 500 萬支、良率 98%、線效率 85%、設施效率 70%，可計算出對應的充填速度（容器/小時）。

                    

                    

                        

#### 生活比喻：餐廳排座率

                        

把充填線想成餐廳的廚房：

                        

                            
- 停機率 = 廚房每年的休息日 + 設備清洗日

                            
- 換線時間 = 更換菜單（產品）時重新備料的時間

                            
- 線效率 = 廚師實際烹飪時間 vs. 等待備料時間的比例

                            
- 設施效率 = 餐廳全年實際開門天數佔 365 天的比例

                        

                        

不建立完整的「餐廳排程模型」，就無法知道需要幾個廚師（充填速度）才能達成業績目標（年產量）。

                    

                    

                        

#### CDMO 應用情境

                        

David 的 CDMO 接到一個新客戶訂單：年需 200 萬支 2mL 凍乾粉針。在設定充填速度 RFQ 之前，必須確認：

                        

                            
- APS 每季一次，每次停線 2 天 → 年停機 8 天

                            
- 產品為孤兒藥，換線清潔驗證嚴格 → 換線時間 16 小時

                            
- 現有線效率約 78%，設施效率 65%

                        

                        

代入模型後，若所需充填速度超過現有設備上限，則需考慮增班或升級設備。**決策順序：SA 保證 → 產品品質 → 商業產能**。

                    

                

            

            
            

1.4.2 Campaign Strategy Overview

            

                

                    

Original Text (English)

                    

**Campaign Strategy** — Will multiple batches be campaigned to reduce changeover time? The intent of campaigning is to minimize the number of interventions, fine-tune and stabilize the line, and improve the cost-and-capacity utilization of the line.

                    

The changeover time is measured from the last good container of the current batch to the first good container of the next batch. This metric captures the full duration of teardown, cleaning, setup, and qualification activities between production runs.

                    

The % yield reflects how much scrap can be tolerated. The % line efficiency captures the tolerance for stoppages and downtime during active filling. The % facility efficiency accounts for the proportion of available annual hours actually used in production, including allowances for unforeseen events.

                    

The capacity flexibility question asks whether the initial plan should intentionally underutilize the line — for example, by staffing more shifts than needed or selecting a faster line — to preserve room for future adjustments. In an existing facility, facility suitability must be confirmed: the footprint, cleanroom classifications, and utilities must support the selected filling line.

                

                

                    

中文解析 Commentary

                    

                        

#### 換線時間的精確定義

                        

換線時間 (Changeover Time) 的起算點與終點極為重要：

                        

                            
- **起算點**：當前批次的最後一個「合格容器 (last good container)」充填完成

                            
- **終點**：下一批次的第一個「合格容器 (first good container)」通過品質檢驗

                        

                        

這個定義涵蓋了拆線、清潔、安裝、除菌、PUPSIT、APS（如需）等所有活動，是容量模型中最難預測的變量之一。

                    

                    

                        

#### SA 決策優先順序提醒

                        

在考量產能彈性 (Capacity Flexibility) 時，必須謹記決策層級：

                        

                            
- 選擇「更快的充填線」是商業決策（第 3 優先）

                            
- 但更快的線速可能縮短操作員反應時間，增加介入頻率 → 影響 SA（第 1 優先）

                            
- 因此，提升速度必須同步評估 SA 風險，不能單純以產能為考量

                        

                    

                    

                        

#### 理解測驗

                        

思考以下情境：一條充填線年線效率從 80% 提升至 90%，但換線時間從 8 小時縮短至 4 小時（透過快速換模技術）。這兩項改善對年產量各有多少影響？哪項改善對 SA 風險的影響更大？為什麼？

                    

                

            

        

    

    
    

        

            

1.5

            

                

## Aseptic Filling Campaign Requirements Driving Selection and Design

                

驅動設備選型與設計的分批生產 SA 要求

            

        

        

            
            

1.5.1 Campaigning 定義與適用情境

            

                

                    

Original Text (English)

                    

Campaigning is a filling strategy where multiple batches are produced back-to-back on a line without a complete teardown and setup between batches. Campaigning is most commonly encountered when the same product is filled at the same or differing fill volumes or into different primary containers and/or closures.

                    

However, there may also be circumstances where different formulations are filled into the same container and closures within a campaign if the product-contact filling pathway is fully changed. This latter approach requires assurance that there is no risk of cross-contamination from spills or splashes with appropriate control strategies and risk assessments.

                    

In either case, the intent is to minimize the number of interventions, fine-tune and stabilize the line, and improve the cost-and-capacity utilization of the line.

                    

Campaigning is the preferred operating mode when managing a high-volume product on a filling isolator line that is set up and staffed to operate on a 24/7 basis. Lines that are required to fill multiple small-volume products, which may require different primary component types and sizes, are more suited to operate in batch mode.

                    

Attributes that might differ under various campaign approaches include:

                    

                        
- Changeover of fluid pathway

                        
- Changeover of format parts

                        
- Line clearance requirements

                        
- Changeover of containers and closures (e.g., hoppers, bowls, and/or tracks, provided these changes can be accomplished under fully closed barrier conditions)

                        
- Bulk changeover

                        
- Operator shift changes

                    

                    

The specific protection offered by a fully closed and decontaminated environment means that campaigning is commonly undertaken in isolators. In this case, the expectation for the campaign would be that the isolator is not opened for equipment changes between batches.

                    

Campaigning is also possible in restricted access barrier systems (RABS) but in general the duration of the campaign is typically shorter than in isolators because of the increased risks due to the more "open" nature of RABS.

                    

With the advent of more rapid changeover technology and, for isolators rapid decontamination (and aeration) processes, the time savings that originally drove much of the focus on campaigning is reduced. All variables that influence sterility assurance (SA) should be weighed carefully when making the decision on whether to campaign.

                

                

                    

中文解析 Commentary

                    

                        

#### Campaigning（分批連續生產）定義

                        

**Campaigning**（分批生產 / 連續批次生產）是指在不完全拆線重裝的情況下，在同一充填線上連續生產多個批次的策略。

                        

常見的 Campaigning 場景：

                        

                            
- 同一產品，相同或不同充填量（如 1mL、2mL、5mL 系列）

                            
- 同一產品，不同主容器（如先充填 2mL 玻璃瓶，再充填 1mL 注射器）

                            
- 不同配方，使用相同容器，但**必須**完全更換液路 (fluid pathway)，並有嚴格的交叉污染控制策略

                        

                        

**核心目標**：減少介入次數、穩定線況、提升成本與產能利用率。

                    

                    

                        

#### 比喻：飛機的過站 vs. 大修

                        

Campaigning 就像飛機的「過站快速周轉 (quick turnaround)」：

                        

                            
- **批次模式 (Batch mode)** = 每次飛完都做全面 C 檢 → 安全但耗時

                            
- **Campaigning** = 到站後補油、換乘客就繼續飛 → 效率高，但飛行員（操作員）的疲勞管理和機況監控必須更嚴格

                        

                        

隔離器 (Isolator) 就像全密封機艙，即使引擎不停也能做部分維護；RABS 像半開放機棚，維護時必須更謹慎，且維護時間不能太長。

                    

                    

                        

#### SA 第一優先：Isolator vs. RABS 的關鍵差異

                        

在 Campaigning 決策中，屏障技術的選擇直接影響 SA 風險：

                        

                            
- **Isolator（隔離器）**：全封閉、可進行 VHP 生物去污 → 適合長時間 Campaign，可不開艙換件

                            
- **RABS（限制進出屏障系統）**：相對「開放」性質 → Campaign 時間通常較 Isolator 短，SA 風險隨時間遞增

                        

                        

隨著快速換模技術與快速除菌（快速 VHP 循環）普及，Campaign 帶來的時間優勢已縮小，**是否 Campaign 的決策應回歸 SA 風險評估，而非單純考量時間節省**。

                    

                

            

            
            

1.5.2 影響 SA 風險的變數

            

                

                    

Original Text (English)

                    

The variables that impact sterility assurance (SA) risk include, but are not limited to:

                    

                        
- Technology in use for barrier protection of the process (i.e., isolator or RABS, open or closed) and the overall expected quality of the environment throughout the intended use period

                        
- Length of processing times and the risks associated with the higher numbers of manipulations and interventions (routine and non-routine) in prolonged processing

                        
- Frequency and types of disinfection and/or biodecontamination

                        
- Waste accumulation (including packaging/wrap waste and any spills, breakage or dropped components) within the operating environment over prolonged processing times

                        
- Duration of use of sterilizing filter and/or sterile bulk hold conditions and times

                        
- Simplicity or complexity of changeover and setup including the number and complexity of the required interventions and frequency of the required changeover or setup events

                    

                    

A careful risk-benefit analysis is recommended based upon the specific technologies in use and the risks to SA. Controls should be designed to mitigate sterility assurance risks regardless of the selected mode of operation.

                

                

                    

中文解析 Commentary

                    

                        

#### 六大 SA 風險變數解析

                        

在決定 Campaigning 策略時，必須系統性評估以下六個 SA 風險維度：

                        

                            
- **屏障技術**：Isolator > cRABS > oRABS，封閉程度越高，Campaign 時間可越長

                            
- **加工時間長度**：操作時間越長 → 介入次數累積越多 → SA 風險線性增加；非例行介入 (non-routine interventions) 風險尤高

                            
- **消毒/除菌頻率**：VHP 生物去污頻率不足，微生物負荷在 Campaign 期間累積

                            
- **廢棄物累積**：碎玻璃、包裝廢料、液體濺灑等在長時間 Campaign 後堆積，成為污染源

                            
- **除菌過濾器使用時間**：過濾器持續使用時間與完整性有關，超過驗證時限即為 SA 風險

                            
- **換線複雜度**：介入步驟越多、換線越複雜，每次操作引入污染的機率越高

                        

                    

                    

                        

#### 核心原則：風險效益分析不可省略

                        

PDA Guide 明確指出：**無論選擇何種操作模式（Campaign 或 Batch），控制措施都必須設計成能有效降低 SA 風險**。

                        

這意味著：不能以「我們用的是 Isolator 所以比較安全」作為跳過風險評估的理由。每一個 Campaign 策略都需要有書面的風險效益分析 (risk-benefit analysis) 支撐。

                        

**SA 永遠是第一優先** — 即使產能壓力巨大，也不能以商業利益為由規避 SA 風險評估。

                    

                

            

            
            

1.5.3 Campaign SA 風險控制措施

            

                

                    

Original Text (English)

                    

To mitigate risks associated with prolonged processing, the intended operational approach should consider:

                    

                        
- Partial or total clean-in-place/sterilize-in-place (CIP/SIP) of fluid pathway or replacement between batches

                        
- Biodecontamination of all, or of high-risk, parts of the environment between batches

                        
- Glove integrity-testing intermittently (but regularly) throughout the processing

                        
- Inclusion of new filter setups with new pre-use post-sterilization integrity-testing (PUPSIT) test results for each batch

                    

                    

When campaigning is selected, the aseptic process should be validated under the conditions associated with the campaign, to ensure that conditions and activities that may pose a risk to producing a sterile product are challenged in the APS. For example, the maximum time between biodecontamination events, while conducting the maximum number of interventions representing a routine campaign, should be evaluated.

                    

The concept of a "piggy-back" APS — where one APS run is conducted at the beginning of the campaign and another at the end, with production batches in between — is used to validate the full duration of campaigning.

                    

If designed and executed properly, campaigning should not introduce additional SA risk when compared to conventional batch-based models.

                

                

                    

中文解析 Commentary

                    

                        

#### 四大 Campaign SA 控制措施

                        

針對長時間批次連續生產的 SA 風險，Guide 提出四項具體控制措施：

                        

                            
- **CIP/SIP（就地清洗/就地滅菌）**：在批次間對液路進行部分或全部 CIP/SIP，或直接更換液路元件。適用於高風險產品或配方切換。

                            
- **生物去污 (Biodecontamination)**：在批次間對全部或高風險區域進行 VHP（汽化過氧化氫）或其他生物去污處理，重置環境微生物負荷。

                            
- **手套完整性測試 (Glove Integrity Testing)**：在 Campaign 期間定期（不間斷地）測試隔離器手套完整性，防止手套微穿孔導致環境污染。

                            
- **每批 PUPSIT**：每個批次均使用新的無菌過濾器，並提交新的使用前除菌後完整性測試 (PUPSIT) 結果，確保過濾除菌可靠性。

                        

                    

                    

                        

#### APS 驗證設計：Piggy-Back 概念

                        

```
Campaign APS 驗證結構：

[APS Run 1] → [Batch 1] → [Batch 2] → ... → [Batch N] → [APS Run 2]
    |                                                          |
  Campaign 開始                                        Campaign 結束
  （最嚴苛條件：                                   （最嚴苛條件：
   最大介入次數）                                  最長加工時間、
                                                   最多廢棄物累積）
```

                        

**Piggy-Back APS**：首尾各一次 APS 模擬，夾住整個 Campaign 的生產批次，驗證從 Campaign 開始到結束的完整 SA 保護能力。

                        

APS 必須挑戰 Campaign 的最差條件：最長去污間隔、最多例行介入次數。

                    

                    

                        

#### CDMO 應用：Campaign 決策清單

                        

在 CDMO 環境中，每次評估 Campaigning 可行性時，應確認：

                        

                            
- 屏障技術為 Isolator（首選）還是 RABS？若為 RABS，Campaign 時間上限為何？

                            
- 每批次間是否執行 CIP/SIP 或液路更換？

                            
- 生物去污頻率是否已驗證為足夠？（最長間隔已在 APS 中挑戰？）

                            
- 手套完整性測試頻率是否寫入批次記錄？

                            
- 每批 PUPSIT 結果是否獨立記錄？

                            
- Campaign APS 是否採用 Piggy-Back 設計？

                        

                        

**重要：若任一項無法滿足，應優先修正，而非降低控制標準。SA 優先於商業考量。**

                    

                    

                        

#### 理解測驗

                        

為什麼 Campaigning 在 Isolator 中比在 RABS 中更常見且 Campaign 時間更長？請從 SA 風險的角度解釋，並說明快速 VHP 技術的普及如何改變了 Campaigning 的策略價值。

                    

                

            

        

    

    
    

        

            

1.6

            

                

## Aseptic Filling Line Future-Proofing Requirements Driving Selection and Design

                

驅動設備選型與設計的未來彈性規劃要求

            

        

        

            

                

                    

Original Text (English)

                    

Flexibility for the future is, of course, desirable and has a long history in manufacturing. Engineers and technical services staff will seek many options and design choices to plan for future changes. Project managers and financial staff may wish to avoid overly ambitious future-proofing a new filling line due to the increased project timelines and the potential additional costs.

                    

A thorough understanding of the most likely future products, capacity flexibility, and alignment of risk (including current GMP compliance risk such as the need for increased barrier protections, the greater prevalence of biodecontamination, higher degrees of automation and/or robotics that comply with First Air principles) with strategic planning and finance is the surest path to incorporating flexibility successfully.

                

                

                    

中文解析 Commentary

                    

                        

#### Future-Proofing（未來彈性規劃）的核心張力

                        

**Future-Proofing**（未來彈性規劃）是指在設計充填線時，提前納入未來可能需要的功能或彈性，以延長設備的使用壽命與適應性。

                        

這裡存在一個典型的商業張力：

                        

                            
- **工程師/技術團隊**：希望預留最大彈性 → 傾向多功能、模組化設計 → 增加初期投資

                            
- **專案經理/財務團隊**：希望控制成本與時程 → 傾向精簡設計 → 降低初期投資但可能限制未來選項

                        

                        

PDA Guide 的建議：透過深入理解「最可能的未來產品組合」來找到平衡點，而非無限制地追求彈性。

                    

                    

                        

#### 風險對齊：Future-Proofing 的 SA 維度

                        

未來彈性規劃不只是商業決策，也包含 GMP 合規風險的前瞻規劃：

                        

                            
- **屏障保護升級**：法規趨勢要求更高等級的屏障（如從 RABS 升至 Isolator）

                            
- **生物去污普及**：VHP/其他生物去污技術成為標準，設計時需預留空間與接口

                            
- **自動化/機器人**：符合 First Air 原則的自動化介入系統，可降低人員操作帶來的 SA 風險

                        

                        

**First Air 原則**：確保無菌充填區域的第一股氣流（從 HEPA 過濾器出來的）直接流經產品暴露區，不被人員或設備阻擋，維持最佳環境保護。

                    

                    

                        

#### 比喻：蓋房子時的管線預埋

                        

Future-Proofing 就像蓋房子時決定是否預埋電管、水管：

                        

                            
- 現在多花 5% 預埋管線 → 未來安裝新設備只需穿線，省 80% 成本

                            
- 現在省略 → 未來裝設時需敲牆，成本是當初的 5-10 倍

                        

                        

充填線的 Future-Proofing 類比：預留 VHP 接口、機器人介入空間、擴充產能的公用設施容量 — 這些「管線預埋」在設計階段成本低，後期改造成本極高。

                    

                    

                        

#### CDMO 策略應用

                        

在 CDMO 環境中，Future-Proofing 的難點在於客戶產品組合的不確定性。建議的策略：

                        

                            
- 分析現有客戶管線：未來 5 年最可能的容器類型（vial/syringe/cartridge）和產品類型（protein/suspension/high-viscosity）

                            
- 設計模組化充填頭，可在不大幅改動主機架的情況下切換充填技術

                            
- 預留 VHP 發生器安裝空間與接口（即使初期不購置）

                            
- 評估機器人介入系統的空間需求，並在 RABS/Isolator 設計時保留

                        

                        

**關鍵原則：Future-Proofing 的投資必須與 SA 合規要求趨勢對齊，而非單純追求商業彈性。**

                    

                

            

        

    

    
    

        

            

2.0

            

                

## Aseptic Filling Technologies

                

無菌充填技術概覽

            

        

        

            
            

2.0 Introduction — 四種主要充填技術

            

                

                    

Original Text (English)

                    

There are four commonly used filler technologies:

                    

                        
- Peristaltic Pump (PP)

                        
- Rotary Piston Pump (RPP)

                        
- Time Pressure Filler (TP)

                        
- Rolling Diaphragm Pump (DP)

                    

                    

The selection criteria for the most appropriate filling technology should include:

                    

                        
- Understanding and balancing the capabilities of each technology

                        
- Recognizing features and limitations related to primary components and product characteristics

                        
- Determining which filling system can support the required business objectives

                    

                

                

                    

中文解析 Commentary

                    

                        

#### 四大無菌充填技術簡介

                        

液體無菌充填的技術選擇直接影響產品品質（CQAs）與 SA 風險，是設計決策中的核心。四種主流技術各有其適用範圍：

                        

                            
- **蠕動泵 (Peristaltic Pump, PP)**：透過壓擠軟管產生流動，適合一次性流路 (single-use)，但對溶劑類產品相容性差

                            
- **旋轉活塞泵 (Rotary Piston Pump, RPP)**：機械容積式充填，精度高、適合高黏度產品，但不適合長鏈蛋白質（剪切力問題）

                            
- **時壓充填 (Time Pressure Filler, TP)**：以壓力和時間控制充填量，無移動部件接觸產品，但不支援一次性流路，且對溫度敏感產品（如需冷鏈）有限制

                            
- **滾動隔膜泵 (Rolling Diaphragm Pump, DP)**：以隔膜隔離產品與驅動機構，適合中黏度範圍，部分供應商提供一次性版本

                        

                    

                    

                        

#### 選型決策的三個維度

                        

選擇充填技術時，必須同時考慮三個維度，且順序反映決策層級：

                        

                            
- **第一：產品特性與容器類型**（CQAs — 患者安全） — 蛋白質的剪切敏感性、黏度範圍、產品與泵材料的相容性

                            
- **第二：SA 合規要求**（無菌保證） — 是否支援 CIP/SIP？是否支援 Campaign？是否可裝設於 RABS 外側？

                            
- **第三：商業目標**（業務需求） — 一次性流路降低交叉污染風險和換線成本、充填範圍是否覆蓋未來產品

                        

                    

                

            

            
            

Table 2.0-1: Comparison of Attributes of Four Major Filling Technologies

            

                

                    

Original Text (English) — Table 2.0-1

                    

The following table compares key technical attributes of the four filling technologies:

                    

                        
                            
                                
                                    
                                    
                                    
                                    
                                    
                                
| Attribute | PP (Peristaltic Pump) | RPP (Rotary Piston Pump) | TP (Time Pressure) | DP (Rolling Diaphragm) |
| --- | --- | --- | --- | --- |
                            
                            
                                
                                    ****
                                    
                                    
                                    
                                    
                                
| Dosing Accuracy | Very accurate | Very accurate | Very accurate | Very accurate |
                                
                                    ****
                                    
                                    
                                    
                                    
                                
| Single-Use (SU) Fluid Path | Well-suited | Possible | Not currently available | Possible with some vendors |
                                
                                    ****
                                    
                                    
                                    
                                    
                                
| CIP/SIP | Possible but rare | Possible | Possible | Possible |
                                
                                    ****
                                    
                                    
                                    
                                    
                                
| Campaign Compatibility | Hose wear limiting | Compatible | Compatible | Compatible |
                                
                                    ****
                                    
                                    
                                    
                                    
                                
| Fill Range | 0.1 – 100 mL | 0.1 – 250 mL | 0.1 – 100 mL | 0.2 – 250 mL |
                                
                                    ****
                                    
                                    
                                    
                                    
                                
| Viscosity Range | Up to 60 mPa·s | Up to 300,000 mPa·s | Up to 100 mPa·s | Up to 100 mPa·s |
                                
                                    ****
                                    
                                    
                                    
                                    
                                
| Installation Outside RABS | Possible | Not possible | Possible | Possible |
                                
                                    ****
                                    
                                    
                                    
                                    
                                
| Product Compatibility Notes | Difficult with solvents | Not for long-chain proteins | Difficult with temp-sensitive products | Difficult with highly viscous products |
                            
                        

                    

                

                

                    

中文解析 Commentary

                    

                        

#### Table 2.0-1 關鍵差異解析

                        

四種技術在充填精度上相近（均為 Very accurate），關鍵差異體現在：

                        

                            
- **一次性流路 (SU)**：PP 最佳，TP 目前不支援 → 影響交叉污染控制策略

                            
- **Campaign 相容性**：PP 受限於軟管磨損 (hose wear)，長時間 Campaign 需監控軟管壽命並定期更換

                            
- **黏度範圍**：RPP 遠高於其他三種（300,000 mPa·s），是高黏度產品（如眼用凝膠、懸浮劑）的唯一選項

                            
- **RABS 外部安裝**：RPP 無法裝設於 RABS 外部（因為機械結構複雜），這影響 First Air 合規設計

                        

                    

                    

                        

#### SA 關鍵點：RABS 外部安裝的意義

                        

「Installation Outside RABS」是 SA 設計的重要考量：

                        

                            
- 充填泵裝設於 RABS **外部** → 驅動機構在環境控制區外，只有液路進入無菌區 → 減少無菌區內的機械複雜性 → **降低 SA 風險**

                            
- RPP 必須裝設於 RABS **內部** → 增加無菌區內的機械干擾 → 可能需要更頻繁的介入 → **需額外 SA 控制措施**

                        

                        

這是 SA 優先考量影響技術選型的典型例子。

                    

                    

                        

#### Campaign 中 PP 軟管壽命管理

                        

```
軟管磨損風險評估：

監控指標：
- 充填量偏差趨勢（Control Chart）
- 軟管使用時數（vs. 驗證壽命上限）
- 目視檢查（龜裂、變形）

Campaign 中 PP 的建議做法：
- 訂定最大連續使用時數限制
- 每 N 批次強制更換軟管
- 更換後執行充填精度驗證
- 記錄於批次記錄以供追溯
```

                    

                

            

            
            

Table 2.0-2: Containers Used with Each Technology

            

                

                    

Original Text (English) — Table 2.0-2

                    

The following table shows which primary container types are compatible with each filling technology:

                    

                        
                            
                                
                                    
                                    
                                    
                                    
                                    
                                    
                                
| Container Type | PP | RPP | TP | DP | Notes |
| --- | --- | --- | --- | --- | --- |
                            
                            
                                
                                    ****
                                    
                                    
                                    
                                    
                                    
                                
| Vial (玻璃瓶) | Yes | Yes | Yes | Yes | All four compatible |
                                
                                    ****
                                    
                                    
                                    
                                    
                                    
                                
| Cartridge (卡匣) | Yes | Yes | Yes (preferred) | Yes | TP preferred for cartridge |
                                
                                    ****
                                    
                                    
                                    
                                    
                                    
                                
| Syringe (注射器) | Yes | Yes | Yes | Yes | All four compatible |
                                
                                    ****
                                    
                                    
                                    
                                    
                                    
                                
| Ampoule (安瓿) | Yes | Yes | Yes | Yes | All four compatible |
                                
                                    ****
                                    
                                    
                                    
                                    
                                    
                                
| Bag (藥袋) | Yes | Yes | Yes | Yes | All four compatible |
                                
                                    ****
                                    
                                    
                                    
                                    
                                    
                                
| Eyedrop (眼藥水瓶) | Yes | Yes | Yes | Yes | All four compatible |
                            
                        

                    

                

                

                    

中文解析 Commentary

                    

                        

#### Table 2.0-2 解析：容器相容性

                        

四種技術在容器相容性上差異不大，均能支援所有六種主流容器類型。關鍵差異點：

                        

                            
- **Cartridge（卡匣）**：TP 是首選技術。卡匣充填需要精確的壓力控制，TP 的時間-壓力機制特別適合卡匣的窄口徑充填，不易產生氣泡或液體殘留。

                            
- **CDMO 的彈性考量**：由於四種技術均能支援各類容器，容器類型通常不是技術選型的決定性因素，而是產品特性（黏度、蛋白質敏感性）才是關鍵。

                        

                    

                    

                        

#### CDMO 應用：多容器平台策略

                        

對於 CDMO 而言，能夠在同一充填線上靈活切換容器類型是核心競爭力。從 Table 2.0-2 可知，四種技術均有廣泛的容器相容性，因此 CDMO 的技術選型策略應重點考量：

                        

                            
- 客戶管線中最多的產品類型（蛋白質 → 排除 RPP；高黏度 → 選 RPP）

                            
- 是否需要一次性流路以避免交叉污染風險（PP 為首選）

                            
- 未來 Campaign 需求（PP 軟管磨損問題）

                        

                    

                

            

            
            

Table 2.0-3: Comparison Based Upon Common Product Types

            

                

                    

Original Text (English) — Table 2.0-3

                    

The following table provides technology recommendations based on common pharmaceutical product types:

                    

                        
                            
                                
                                    
                                    
                                    
                                    
                                    
                                
| Product Type | PP | RPP | TP | DP |
| --- | --- | --- | --- | --- |
                            
                            
                                
                                    ****
                                    
                                    
                                    
                                    
                                
| Proteins (蛋白質) | Yes | No (shear risk) | Yes | Yes |
                                
                                    ****
                                    
                                    
                                    
                                    
                                
| Suspensions (懸浮劑) | Yes (<60 mPa·s) | Yes | Yes | Yes (with restrictions) |
                                
                                    ****
                                    
                                    
                                    
                                    
                                
| High-Viscosity (高黏度) | No | Yes (<300,000 mPa·s) | No | No |
                                
                                    ****
                                    
                                    
                                    
                                    
                                
| Low-Viscosity (低黏度) | Yes | Yes | Yes | Yes |
                                
                                    ****
                                    
                                    
                                    
                                    
                                
| SVP (小容量注射劑) | Yes | Yes | Yes | Yes |
                            
                        

                    

                

                

                    

中文解析 Commentary

                    

                        

#### Table 2.0-3 解析：產品類型決定技術選擇

                        

產品類型是技術選型中影響最大的 CQA 因素（第 2 優先）：

                        

                            
- **蛋白質 (Proteins)**：RPP **不適用**，因旋轉活塞產生的剪切力 (shear force) 會破壞蛋白質結構（如 mAb、酶），影響生物活性 → 直接危害患者安全

                            
- **懸浮劑 (Suspensions)**：PP 受黏度上限限制（60 mPa·s）；DP 有部分限制（需確認懸浮顆粒大小與隔膜間隙相容性）；RPP 和 TP 適用

                            
- **高黏度 (High-Viscosity)**：**僅 RPP 適用**（上限 300,000 mPa·s），如眼用凝膠、高濃度抗體製劑

                            
- **低黏度 & SVP**：四種技術均適用，選型回歸 SA 設計（SU 需求、Campaign 需求、RABS 外部安裝）

                        

                    

                    

                        

#### RPP 的剪切力問題 — SA 與 CQA 的交叉影響

                        

RPP 不適用於長鏈蛋白質的原因，體現了 CQA 優先性的核心：

                        

                            
- 旋轉活塞在接縫處產生高剪切力 → 蛋白質分子高階結構 (secondary/tertiary structure) 破壞 → 聚集 (aggregation) 或降解 (degradation)

                            
- 蛋白質聚集體可能引發免疫原性 (immunogenicity) → 直接危害患者安全

                            
- 這是一個 CQA（蛋白質完整性）高於商業便利性（RPP 操作簡單）的典型決策

                        

                        

**決策原則重申：CQAs（患者安全）> 業務便利性**。

                    

                    

                        

#### 理解測驗

                        

客戶提供一個產品規格：高濃度 mAb（150 mg/mL），黏度 45 mPa·s，充填至預充填注射器，年需求 300 萬支。請根據 Table 2.0-1、2.0-2、2.0-3 的資訊，分析哪種充填技術最適合，並說明你的理由。哪種技術絕對排除？為什麼？

                    

                    

                        

#### CDMO 充填技術選型速查

                        

基於三個表格，建立 CDMO 快速選型思路：

                        

                            
- **Step 1**：確認產品類型 → 蛋白質？高黏度？懸浮劑？(Table 2.0-3)

                            
- **Step 2**：確認是否需要一次性流路（SU）以控制交叉污染 → PP 首選 (Table 2.0-1)

                            
- **Step 3**：確認是否規劃 Campaigning → PP 軟管壽命評估；RPP/TP/DP 均相容 (Table 2.0-1)

                            
- **Step 4**：確認容器類型 → 四種技術均廣泛相容 (Table 2.0-2)

                            
- **Step 5**：確認充填量範圍 → RPP/DP 範圍最廣 (0.1–250 mL) (Table 2.0-1)

                        

                        

排除不適用技術後，剩餘技術再依 SA 風險（RABS 外部安裝、CIP/SIP 能力）做最終選擇。

                    

                

            

        

    

    
    

        

            

## 
                Section 1B Summary — 本章重點總結
            

            

                

                    

### 核心概念回顧

                    

                        
- 產能模型需整合八個輸入參數，才能科學設定充填速度目標，不能單憑直覺

                        
- Campaigning 在 Isolator 中效果最佳，RABS 中時間較短；快速 VHP 技術降低了 Campaign 的時間優勢

                        
- Campaign SA 控制四支柱：CIP/SIP、批次間生物去污、手套完整性測試、每批 PUPSIT

                        
- Future-Proofing 必須與 GMP 合規趨勢（更高屏障、更多自動化）對齊，而非僅追求商業彈性

                        
- 四種充填技術在充填精度上相近，關鍵差異在黏度範圍、SU 支援、Campaign 相容性和蛋白質相容性

                    

                

                

                    

### 決策層級強化

                    

                        

**1. 無菌保證 (SA)** — 永遠第一

                        

                            
- RPP 對蛋白質的剪切風險排除其適用性

                            
- Campaign 時間受屏障技術等級制約

                            
- APS 必須驗證 Campaign 的最差條件

                        

                        

**2. 產品 CQAs** — 患者安全

                        

                            
- 黏度、蛋白質結構、懸浮均勻性決定技術選型

                            
- 蛋白質聚集體風險 > 操作便利性

                        

                        

**3. 商業與彈性** — 最後考量

                        

                            
- 產能模型、Future-Proofing、Campaign 效率均在 SA 和 CQA 滿足後才最佳化

                        

                    

                

            

        

    

⇧

## Topic 2A: Peristaltic Pump 蠕動泵 (p26-p41)

# Section 2.1 — Peristaltic Pump (PP) Technology: Design & Setup

    

蠕動泵技術：設計原理、配置與設定

    

PDA Manufacturing Technology Guide No. 1 | doc p26 – p33

    

### 本章學習目標 Learning Objectives

    

        
- 理解蠕動泵 (Peristaltic Pump, PP) 的核心運作原理：旋轉擠壓、伺服馬達控制、以及封閉流體路徑的設計邏輯

        
- 區分單管式 (single-tube) 與雙管式 (double-tube) PP 的設計差異，並能說明各自在脈動控制與連接件數量上的取捨

        
- 掌握軟管選擇的三區段概念（上游、滾輪內、下游），以及磨損導致劑量漂移的機制，從而理解為何 PP 強烈建議採用 100% IPC 製程中管控

        
- 了解 PP 系統定位的設計考量：中間容器高度、氣泡風險、以及 PP 置於隔離器外的重大優勢與限制

        
- 從 CDMO 業務視角理解 PP 作為生物製劑與一次性使用 (SU) 系統首選充填泵的戰略意義

    

    

### 本節內容導覽

    

        2.1 PP 總覽
        2.1.1 設計配置
        2.1.2 系統設定
        2.1.3 系統定位
        本節重點回顧
    

2.1 Aseptic Filling Technologies: Peristaltic Pumps — 蠕動泵無菌充填技術總覽

    

        

## 原文內容 Original Text

        

The principle of operation for the PP is the dynamic rotational squeezing of a flexible tube (in most cases, a silicone tube) placed between a backplate and rollers mounted on a rotor and driven by a servo motor to create positive displacement in the closed system (tube), thereby moving liquid products from product infeed side to product dispensing side. The pump tubes are fixed on the suction side to avoid the tubes travelling within the pump. The filling volume is governed by the number of revolutions executed by the rotor (degrees). The distance between the rollers and the backplate is called the occlusion-bed distance and is critical to minimize tubing wear for a given pump-tubing wall thickness.

        

            Note: Linear peristaltic pumps are also available which provide the compressive force on the tubing at right angles to the direction of flow. These systems can provide excellent accuracy in filling with capabilities to fill microliter quantities (5). However, these systems are less common, therefore the focus in this section will be on peristaltic pumps with rotary heads.
        

        

The rotating motion of the rotor moves the dynamic squeezing point along the tube and moves the product along, at the same time, creating a vacuum at the inlet and drawing in the product (see Figure 2.1-1). The product to be filled only comes into contact with the filling tube and the filling needle. The tube represents a closed system from the inlet of the product to the outlet through the filling needle.

        

            [Figure 2.1-1: Illustration of Progressive Rotary Motion of Rotor Along Backplate — shows how the rotor's rollers sequentially compress the silicone tube against the backplate, creating a traveling squeeze point that propels liquid forward while simultaneously drawing product from the inlet]
        

        

When the product is not viscous (typically less than 60 milliPascal-second (mPa-s); equivalent to 1 centipoise), the choice of using a PP is highly appropriate, as the cleaning and sterilization efforts needed are significantly less than with other technologies such as the RPP. PP systems are highly compatible with SU fluid pathways.

        

Figure 2.1-2 provides a schematic of a possible PP fluid pathway. Notably, this image depicts the pumps within the aseptic boundary; however, it is possible to install the pumps outside of the aseptic boundary, thereby removing the primary mechanical components from the critical zone. As discussed in Section 2.1.5, there may be reasons that installation within the boundary is preferable for potent or toxic products.

        

            [Figure 2.1-2: Peristaltic Pump Fluid Pathway Configuration — schematic showing the overall PP fluid pathway from intermediate vessel, through pump assembly, to filling needle; illustrates both the option of pump inside the aseptic boundary and the alternative outside-isolator placement]
        

    

    

        

## 導師解析 Tutorial Commentary

        

            

#### 核心概念：蠕動泵的運作原理

            

**Peristaltic Pump, PP（蠕動泵）**的名字來自生物學中「蠕動」(peristalsis) 的概念——就像腸道肌肉推送食物一樣，PP 利用旋轉的滾輪依序擠壓矽膠軟管，將液體從一端推送到另一端。

            

幾個核心術語：

            

                
- **Servo motor（伺服馬達）**：精密控制轉速與角度的馬達，充填量 = 旋轉角度，因此角度控制精度直接決定充填精度

                
- **Occlusion-bed distance（遮斷床距離）**：滾輪與背板之間的間距。間距太小 → 軟管磨損快；間距太大 → 液體回漏，影響精度

                
- **Closed system（封閉系統）**：產品僅接觸軟管與充填針，不接觸任何泵的金屬機械元件

            

        

        

            

#### 比喻說明：按摩師傅的手

            

想像一位按摩師傅用手指沿著一條裝滿水的軟管，從頭到尾依序向下按壓——每次按壓都把水往前推一點，同時後方形成負壓，自動吸入更多水。

            

PP 的滾輪就是那雙「手指」，背板就是工作台，矽膠管就是那條軟管。伺服馬達控制這雙手轉多少圈，就決定推送多少毫升的液體。

            

關鍵差異：真正的按摩師傅按久了手會累，軟管也一樣——反覆擠壓會造成材料疲勞（tubing wear），這就是 PP 最大的管理挑戰。

        

        

            

#### 為什麼 PP 可以放在隔離器「外面」？這對 SA 有什麼意義？

            

這是 PP 最重要的工程優勢之一。由於產品只接觸封閉的軟管內側，泵的機械本體（馬達、滾輪、背板）不需要在無菌區域內。因此，整個泵機構可以安裝在隔離器（Isolator）或 RABS 的外部。

            

**好處**：降低隔離器內部的機械複雜度 → 減少粒子產生源 → 簡化 IQ/OQ/PQ 驗證範圍 → 機械維修不需要破壞無菌邊界。

            

**例外**：ADC（Antibody Drug Conjugate，抗體藥物偶聯物）等高毒性產品，若軟管發生洩漏，毒性物質外漏至隔離器外會造成操作員暴露風險。這種情況下，可能選擇將泵放在隔離器內，以保持洩漏物在受控區域內。

        

        

            

#### 黏度門檻：60 mPa-s 是關鍵分水嶺

            

PP 適合低黏度產品（< 60 mPa-s，約等於 60 倍水的黏度）。超過這個範圍，滾輪擠壓效率下降，充填精度惡化，同時對高剪切力敏感的生物製劑（如蛋白質）也可能在通過泵時發生結構損傷。

            

相比之下，RPP（旋轉活塞泵）在黏度更高的場景下往往更合適——但 RPP 不能放在 SU 流體路徑中（因為活塞需要清洗驗證）。這正是 PP + SU 組合在生物製劑領域主導地位的根本原因。

        

        

            

#### 練習思考 Practice Questions

            

                
1. 為什麼 PP 的充填量是由「旋轉角度（degrees of rotation）」決定，而不是由時間決定？這與時間壓力充填（Time Pressure, TP）有何根本差異？

                
2. 如果你是一個 CDMO 的製程工程師，客戶的生物製劑黏度為 45 mPa-s，需要一次性使用系統，你會推薦 PP 還是 RPP？說明你的理由。

                
3. Occlusion-bed distance 設定過緊（太小）和過鬆（太大）分別會帶來什麼問題？

            

        

    

2.1.1 Peristaltic Pump Design Configurations — 蠕動泵設計配置

    

        

## 原文內容 Original Text

        

There are two different PP design configurations available: a single-tube PP and a double-tube PP.

        

Examples from one manufacturer of both roller configurations are depicted in Figure 2.1.1-1. In the roller set for the single-tube PP, in this particular design, the tube is threaded around the roller unit twice. In the offset rollers for double-tube PP, two separate tubes of the same diameter are wrapped around the upper and lower roller sets a single time. In the double tube configuration, the rollers on the top and on the bottom have an offset to minimize the pulsation of the system, such that the rollers in maximum compression are offset from the rollers in minimum compression. Different filling systems are equipped with more rollers than depicted below (up to six per rotor channel). The advantage of additional rollers is better control of pulsation and therefore additional filling accuracy.

        

            [Figure 2.1.1-1: Roller Configurations for Single- and Double-Tube Peristaltic Pump — shows side-by-side comparison of single-tube roller head (tube threaded twice around unit) versus double-tube roller head (two separate tubes on upper/lower offset roller sets); illustrates how offset positions of compression zones cancel out pulsation peaks]
        

        

### Single-Tube PP

        

In a single-tube PP, one silicone tube must be placed in between the backplate and the rotor (although it may be wrapped around the rollers twice). Special care has to be taken to ensure that the pulsation of the system is minimized. Pulsation is usually impacted by the number of rollers and the available space for the tube to retract. The pulsation can have an impact on the filling accuracy and may generate pulsation at the sterilizing filter if there is no sterile intermediate vessel between the filter and the PP. In rare applications, if filling speeds are low and required accuracy is not demanding, an intermediate vessel may not be necessary.

        

Single-tube pump heads provide the ability to use one complete tube from intermediate vessel to filling needle without any connection pieces installed within the rotor. This gives three advantages:

        

            
- Less handling, which means potentially less risk of contamination

            
- Fewer parts to be delivered by tube suppliers, which means reduced costs

            
- Less component integrity risk

        

        

While a single tube may be extended from the vessel through the pump to the filling needle, there are other designs for single-tube pump heads, such as that depicted in Figure 2.1.1-2, where the tubing assembly is designed to support long campaign lengths. For example, the tubing inside the pump may be of a special wear-resistant design, and the tubing between the pump and the filling needle may be of a higher rigidity than the pump tubing to prevent axial pulsation expansion of the tubing at the outlet side of the pump. To support these features, the design will result in at least one (if not two) connectors in the tubing, as shown in Figure 2.1.1-2.

        

            [Figure 2.1.1-2: Schematic of a Single-Tube Sterile Fluid Pathway with Connectors — shows a single-tube PP fluid pathway design that incorporates 1-2 connectors to allow different tubing specifications in different zones: wear-resistant tubing within the rollers, higher-rigidity tubing downstream to the filling needle; each connector is a potential contamination/integrity risk that must be managed]
        

    

    

        

## 導師解析 Tutorial Commentary

        

            

#### 核心概念：單管 vs. 雙管 PP 的設計邏輯

            

PP 有兩種基本配置，選擇哪一種，本質上是在「簡潔性」與「脈動控制」之間做取捨：

            
                
                    
                    
                    
                
| 特性 | 單管式 (Single-Tube) | 雙管式 (Double-Tube) |
| --- | --- | --- |
                
                    
                    
                    
                
| 連接件數量 | 少（最少可 0 個） | 較多（需 Y 型接頭） |
                
                    
                    
                    
                
| 污染風險 | 較低 | 略高（連接點更多） |
                
                    
                    
                    
                
| 脈動控制 | 較難控制 | 優異（上下滾輪相互抵消） |
                
                    
                    
                    
                
| 充填精度 | 依滾輪數量 | 通常更穩定 |
                
                    
                    
                    
                
| 耗材成本 | 較低 | 較高 |
            

        

        

            

#### 比喻說明：脈動就像心跳

            

想像你的心臟每次跳動，血管就感受到一次壓力波。PP 的滾輪每次「離開」一段管路，管子就因彈性回縮而產生一個壓力脈衝——這就是「pulsation（脈動）」。

            

**雙管式的設計巧思**：上方滾輪組與下方滾輪組的位置「錯開」設計——當上方的滾輪是「最大擠壓」時，下方的滾輪正好在「最小擠壓」位置，兩者的壓力波相互抵消，整體流量就趨於平穩，就像雙心室同時但交替打出更平穩的血流。

            

額外增加滾輪數量（最多 6 個）也有同樣效果——滾輪越多，每個脈衝越小，合計流量就越平穩，就像多台小心臟協同工作代替一顆大心臟。

        

        

            

#### 重點提示：脈動對下游設備的衝擊

            

脈動不只影響充填精度，還可能對**滅菌過濾器（sterilizing filter）**造成壓力衝擊。每次脈衝等於對濾膜施加一次正壓—負壓循環，長期下來可能加速濾膜疲勞，甚至影響完整性測試（integrity test）結果。

            

這就是為什麼在過濾器與 PP 之間通常需要設置一個**無菌中間容器（sterile intermediate vessel）**——它扮演緩衝器的角色，吸收脈動，保護濾膜，同時也作為充填量的穩壓源頭。

            

例外情況：填充速度極慢、精度要求不高的場合（如實驗室小批次），才可能省略中間容器。在商業規模生產中幾乎不建議省略。

        

        

            

#### CDMO 視角：連接件是「必要之惡」嗎？

            

長批次生產（如流感疫苗的 3 週連續生產）對軟管磨損要求非常嚴苛。在這種場合，泵輪內部的軟管需要採用特殊**耐磨材質**，下游的軟管則需要採用**較硬材質**來防止脈動引起的軸向膨脹（axial pulsation expansion）——兩種不同規格的軟管需要用連接件（connector）接合。

            

每增加一個連接件，就是增加一個潛在的無菌性風險點。因此，在設計流體路徑時，必須明確說明每個連接件的必要性，並在無菌製程模擬（APS）中驗證這些連接點不會成為污染漏洞。

            

**設計決策原則**：最少必要連接件 → 每個連接件都有功能性理由 → 每個連接件都要在驗證文件中有記錄。

        

        

            

#### 練習思考 Practice Questions

            

                
1. 如果你的 CDMO 客戶要求極短批次（500 mL），且充填精度要求非常高（±1%），你會推薦單管式還是雙管式 PP？理由為何？

                
2. 單管式 PP 最少可以有 0 個連接件——這在哪些情況下是真正可行的？在哪些情況下不得不增加連接件？

                
3. 滾輪數量從 2 個增加到 6 個，脈動改善了，但設備清洗和軟管安裝的複雜度如何變化？這代表什麼品質管理上的取捨？

            

        

    

2.1.2 Peristaltic Pump Setup — 蠕動泵系統設定

    

        

## 原文內容 Original Text

        

### Double-Tube PP Fluid Pathway Setup

        

The setup for the fluid pathway for a double-tube PP is shown in Figure 2.1.2-1. The suction tube is split by a Y-connector into two pump tubes, which are installed between the backplate and the rollers. Both pump tubes are joined by an identical Y-piece to one filling tube at the outlet and connected to the filling needle. The tubes may be of differing diameters (e.g., the two pump tubes may be half the volume of the upstream suction and downstream filling tubes).

        

            [Figure 2.1.2-1: Schematic for a Double-Tube Sterile Fluid Pathway — shows complete double-tube PP assembly: single suction tube from intermediate vessel → Y-connector splits into two equal pump tubes through upper and lower roller sets → second Y-connector rejoins → single filling tube to needle; tube diameter relationships shown]
        

        

Innovations are being made all the time to improve the capability of traditional technologies. For example, alternative PP designs exist that provide linear flow to reduce shear force and line losses. These designs are beyond the scope of this document, but keep in mind that any upgrades to technology should be proven and validated.

        

### Tubing Selection — Three Distinct Sections

        

When selecting tubing for PP applications it is important to think about the required attributes of three distinct sections of tubing:

        

            
1. Upstream of the pump

            
2. Within the rollers of the pump

            
3. Downstream of the pump

        

        

The factors to be considered when selecting the tubing for each section include, but are not limited to:

        

            
- **Functionality** within the distinct position of the pumping system (e.g., effective transport without deformation, required level of flexibility)

            
- **Prevention of reactivity or harm to the product** (e.g., adsorption of API or preservatives, shear forces, leachables)

            
- **Method of sterilization** of the tubing (e.g., to avoid changes in texture, adsorption of sterilant, generation of free radicals)

            
- **Performance over time** to prevent distortion (e.g., tubing integrity, wear and the formation of particulate, permanent changes in dimension)

        

        

In general, materials of construction upstream of the pump are less critical for the filling operation. Within the rollers, the tubing must be flexible to permit effective reaction to the rollers, but without distortion that can result in changes in the volume of transfer over the intended period of use. Downstream of the pump, the materials of construction should be less flexible as this section of tubing does not need to interact with the rollers. The lower flexibility will ensure that the tubing does not distort from the pressure of the transferred liquid. Distortion in the downstream section can result in changes in the delivered dose or dripping.

        

The interior diameter of the tubing and connectors throughout the entire fluid pathway should be designed to ensure that there is no back pressure or significant pressure drop along the fluid path. This includes any connectors such as the Y-connectors and the filling needle.

        

### Tubing Wear and Dose Drift

        

Due to the softening of the pump tubing due to tubing wear (Figure 2.1.2-2), the PP system will eventually show a drift in delivered dose over time, therefore, a correction value needs to be applied. The correction value (algorithm) is statistically based on the weight-check results of the inline process control scales. Therefore, using a statistical or 100% IPC check-weighing method when using PP filling systems is highly recommended (see Sections 5.1–5.1.4).

        

The usable life of PP tubing depends on fill volume, product characteristics (e.g., solvents, corrosives, abrasives), pump-tubing robustness, filling speed, and start/stop curves, as well as the general design of the pump. It is recommended to validate the filling time/filled-dose count of the tubes as, at some point, the wear and tear will generate particles that will contaminate the product.

        

The PP tubing will certainly wear on the exterior but, in extreme cases, factors such as a high number of doses or high pump acceleration or deceleration can lead to internal tubing wear, potentially releasing particles into the product. Figure 2.1.2-3 includes microscopic images of tubing with external and internal wear.

        

            [Figure 2.1.2-2: Diagrams of External Tubing Wear — cross-section diagrams showing progressive deformation of tube wall at the point of roller contact: new tube (uniform round cross-section) → used tube (flattened, asymmetric cross-section) → worn tube (permanent deformation, thinned wall); illustrates how wall geometry change alters the swept volume per revolution]
        

        

            [Figure 2.1.2-3: Microscopic Examination of Worn Tubing — scanning electron microscopy (SEM) or optical microscopy images showing: (left) external surface wear — cracking, flaking, surface erosion of silicone; (right) internal surface wear — pitting, delamination, particle generation on inner lumen surface; demonstrates the contamination risk of particulate release into product]
        

    

    

        

## 導師解析 Tutorial Commentary

        

            

#### 核心概念：三區段軟管選擇邏輯

            

PP 的流體路徑分三段，每段扮演不同角色，因此對軟管的要求完全不同：

            
                
                    
                    
                    
                
| 位置 | 功能 | 關鍵材料要求 |
| --- | --- | --- |
                
                    
                    
                    
                
| 上游 (Upstream) | 液體輸送 | 相容性、低萃出物（leachables）、滅菌耐受 |
                
                    
                    
                    ****
                
| 滾輪內 (Within rollers) | 擠壓推送 | 高彈性（能夠反覆形變後回彈）、耐磨損、尺寸穩定 |
                
                    
                    
                    ****
                
| 下游 (Downstream) | 精準輸出 | 較高硬度（防止脈動引起膨脹）、防垂滴 |
            

            

重點：下游軟管若太軟，在脈動壓力下會像氣球一樣膨脹，每次膨脹都多吐出一點液體 → 充填量偏高，且形成「滴液（dripping）」問題。

        

        

            

#### 比喻說明：橡皮筋老化

            

想像你把一條橡皮筋反覆對折再鬆開，幾千次之後，橡皮筋會變軟、失去彈性，對折的地方會出現細紋，最終可能裂開。

            

PP 軟管的磨損機制完全相同。每次滾輪壓過，就是一次「對折再鬆開」。幾萬次充填後：

            

                
- **外部磨損**：接觸滾輪的外壁出現裂紋、脫層 → 橡膠粉末可能污染生產環境

                
- **內部磨損**（更危險）：如果加速/減速過快，管內壁摩擦剪切 → 細小矽膠粒子直接進入產品 → 注射用產品不可接受

            

            

這就是為什麼每條軟管都必須驗證使用壽命（最大充填次數），不能「用到壞掉」。

        

        

            

#### 劑量漂移的修正機制

            

PP 的核心問題：軟管隨磨損逐漸「變形」，原本壓縮一次推出 1.05 mL 的管路，隨著管壁軟化，同樣壓縮可能只推出 1.02 mL 或 1.07 mL。這就是「dose drift（劑量漂移）」。

            

```

修正機制示意：

填充量 = 基準體積 × 修正係數(t)

修正係數(t) = f(即時稱重資料)
             = 統計模型持續更新

例：若連續 100 個樣品的平均值
    由 1.000 mL 漂移到 0.995 mL
    → 系統自動將轉速補償 +0.5%
    → 恢復目標充填量

這個即時反饋迴路，
就是為什麼 100% IPC 稱重
對 PP 系統至關重要。
            
```

            

相較之下，RPP（旋轉活塞泵）因為是固定排量（活塞位移），沒有磨損引起的體積變化，劑量穩定性更好，因此 RPP 不需要同等頻率的 IPC 修正。

        

        

            

#### 重點提示：為何 PP 強烈建議 100% IPC 稱重？

            

PP 是四種充填技術中，唯一因為主要耗材（軟管）本身的物理劣化而導致系統性劑量漂移的泵型。這不是偶發性誤差，而是**可預期的系統性趨勢**。

            

法規視角：EU GMP Annex 1 (2023) 明確要求製造商建立適當的 IPC 系統以確保充填量在規格範圍內。使用統計 IPC（抽樣稱重）固然可以接受，但對於 PP 系統，由於漂移是連續的，100% IPC（每個容器都稱重）是最能即時捕捉漂移並修正的方式。

            

**商業影響**：100% IPC 設備投資較高（需要高速精密天平），但可以顯著降低批次失敗率和返工成本。對於高價值生物製劑（如 mAb），這筆投資的 ROI 通常在一個批次內就能回收。

        

        

            

#### 重點提示：軟管的四大選擇標準（逐項解讀）

            

                
- **功能性（Functionality）**：滾輪區段需要高彈性，下游需要低彈性——相互矛盾，因此不同區段用不同材質

                
- **產品相容性（Product reactivity）**：矽膠可能吸附某些小分子 API 或防腐劑（如 polysorbate 80），導致劑量偏低 → 需要預先做 extractables & leachables 研究

                
- **滅菌方法（Sterilization method）**：伽瑪照射會讓矽膠產生自由基，改變硬度和彈性 → 照射劑量需要在「殺菌有效」與「材料不損壞」之間平衡

                
- **長期性能（Performance over time）**：需要驗證最大使用次數，超過限制就換管，不容妥協

            

        

        

            

#### 實務應用 Practical Application

            

**場景**：你的 CDMO 正在接一個新型 mRNA 疫苗客戶，每批次充填 500,000 支注射劑，批次時間約 8 小時，使用一次性使用系統。

            

**軟管壽命計算考量**：

            

                
- 500,000 充填次數 → 遠超過一般矽膠管 50,000–100,000 次的典型壽命 → 需要中途換管

                
- 換管 = 無菌連接操作 = 污染風險點 → 需要在驗證中包含換管程序的無菌性確認

                
- mRNA 對剪切力極度敏感 → 特別關注泵加速/減速曲線設定，避免觸發內部磨損粒子

                
- 100% IPC 是必須的 → 換管前後充填量可能有短暫波動，需要修正演算法快速響應

            

        

        

            

#### 練習思考 Practice Questions

            

                
1. 如果下游軟管的硬度不足（太軟），會導致什麼具體的充填缺陷？從物理機制解釋。

                
2. Y 型連接件的內徑如果比軟管內徑小 10%，會對充填精度和產品完整性產生什麼影響？

                
3. 某產品含有 5% 乙醇（一種有機溶劑），你在選擇滾輪區段的軟管材質時，需要特別評估哪些風險？

                
4. 為什麼「高泵加速/減速」會加速內部磨損而非只是外部磨損？請從力學角度解釋。

            

        

    

2.1.3 Peristaltic Pump System Positioning — 蠕動泵系統定位

    

        

## 原文內容 Original Text

        

During the design phase of PP systems, the position of the intermediate vessel relative height to the filling needles should be evaluated in detail so air gaps in the tube are not created. If the pump has to work to pull product from a vessel positioned lower than the filling needle, air bubbles are a common result. Likewise, other parameters such as choosing the right tube diameters for the target fills and the length of the tubes between the PP and the needle should also be considered.

        

This consideration is due to the well-appreciated fact that a PP, being a closed system, can be placed outside of the isolator or RABS, which would position it farther away from the filling needles in some cases.

        

There are different methods to prime the pump to remove air from the system and to ensure the target fill volume is achieved without air gaps at the beginning of the batch. The approach to priming should be considered depending on the application, product characteristics, and the execution of the pump (see Section 12.2 for priming discard).

    

    

        

## 導師解析 Tutorial Commentary

        

            

#### 核心概念：重力 vs. 泵吸力的平衡

            

PP 透過滾輪擠壓產生的負壓（吸力）將液體從上游拉入。但是，這個負壓的能力是有限的——它必須克服：

            

                
- 管路阻力（管長、管徑、彎折）

                
- 液柱高度差（若容器低於充填針）

                
- 液體自身重力

            

            

當上述阻力超過泵的吸力能力時，系統就無法完全填滿管路 → 氣泡進入 → 充填量不足或充填空針。

            

**設計原則**：中間容器（intermediate vessel）的液面應盡可能高於或平齊充填針的位置，讓重力輔助而非阻礙流體輸送。

        

        

            

#### 比喻說明：爬山的水管

            

想像你用一條軟管從山腳的水桶，把水抽到山頂的噴嘴。如果水桶在山腳（比噴嘴低很多），泵必須非常用力才能把水「抬」上去。一旦泵力不夠或管路有一點點漏氣，管子裡就會出現氣泡斷流。

            

反之，如果水桶放在山頂（比噴嘴高），重力自然幫助水往下流，泵只需要控制流速，不需要費力對抗重力。

            

PP 系統的中間容器定位就是這個道理。在隔離器設計時，通常將中間容器盡量抬高，甚至放置在隔離器頂部，以利用重力輔助充填。

        

        

            

#### 重點提示：PP 放在隔離器外的距離管理挑戰

            

PP 的最大優勢之一就是可以放在隔離器或 RABS 外部——但這帶來一個新問題：充填針到泵的距離更遠了。

            

距離越遠，意味著：

            

                
- 下游軟管越長 → 脈動在管路中衰減，也可能放大

                
- 管路容積越大 → 批次開始/結束的棄液量增加（priming discard）

                
- 液柱落差的設計更複雜 → 需要精確計算管路中每一段的流體靜力學

            

            

因此，PP 雖然可以放在隔離器外，但在設計階段必須明確計算管路長度、高度落差，並以充填驗證（filling validation）確認在極端條件下（如低液位、高黏度端）仍不產生氣泡。

        

        

            

#### CDMO 視角：Priming（引液排氣）的商業成本

            

批次開始前，整個流體路徑（從中間容器到充填針）充滿的是空氣，必須用產品「沖洗」出去 — 這個過程叫做 priming（引液排氣）。

            

被沖洗出去的那部分產品需要**廢棄（discard）**，不能充入容器販售。

            

**商業影響**：

            

                
- 管路越長 → priming 廢液量越多 → 成本越高（對高價生物製劑影響顯著）

                
- 批次開始和結束各有一次 discard → 每批次的有效產出率（yield）會降低

                
- 設計優化：縮短管路長度、使用最小內徑容許的管路 → 降低 priming 廢液量

            

            

Section 12.2 有更詳細的 priming discard 管理指引，包括如何在不影響無菌性的前提下最小化廢液量。

        

        

            

#### Priming 廢液量估算

            

```

Priming 廢液量（近似值）：

V_discard ≈ π × (d/2)² × L

其中：
  d = 軟管內徑（cm）
  L = 管路總長度（cm）

例：
  內徑 8 mm (0.8 cm)、管長 200 cm
  V = π × (0.4)² × 200 ≈ 100 mL

若充填量為 1 mL/瓶：
  → 100 mL ÷ 1 mL = 相當於 100 支的廢棄量
  → 若產品成本 $5,000/mL，則一次引液 = $500,000 廢棄

這說明為什麼對高價值藥品，
管路設計的精簡非常重要。
            
```

        

        

            

#### 練習思考 Practice Questions

            

                
1. 一個 PP 系統，中間容器放置比充填針低 30 cm，可能發生什麼問題？你會如何在設計中解決這個問題？

                
2. 如果 PP 必須放置在隔離器外部（距離充填針 1.5 公尺），而產品是一個高價值的 mAb（每毫升 $3,000），你在設計管路時，最優先考慮什麼因素來降低廢液成本？

                
3. Priming 的目的是「排空氣體」，但 priming 過程本身也有污染風險（產品流動、管路接觸）。如何在 APS（無菌製程模擬）中驗證 priming 程序的無菌性？

            

        

    

附錄：PP 產品適用性參考表（源自 doc p26–p27）

    

        

## 原文內容 Original Text — Product Suitability

        

The following table summarizes PP suitability across various product types, as referenced in the comparison table on doc pages 26–27:

        

            
                
                    
                        
                        
                        
                    
| Product Type | PP Suitability | Key Considerations |
| --- | --- | --- |
                
                
                    
                        ****
                        
                        
                    
| Large-Volume Parenterals (LVP) | Yes | Considerations should be given to batch size and number of revolutions per fill in order to evaluate the rate of tubing wear. |
                    
                        ****
                        
                        
                    
| Antibody Drug Conjugates (ADC) | Yes — with caution | Highly recommended, especially in SU execution; some would opt against having the pump outside the isolator in this case, to contain leakage should that occur. |
                    
                        ****
                        
                        
                    
| Solvent-Based Products | Not ideal | If the concentration of solvent leads to brittleness, weakening, swelling, or other negative effects to the hoses as this could shorten tubing life or lead to dosing inaccuracies. |
                    
                        ****
                        
                        
                    
| Vaccines / Heparins | Conditional | Depending on batch size; it may not be ideal if running long campaigns (e.g., flu vaccines with three-week long campaigns) due to frequent hose replacement. |
                    
                        ****
                        
                        
                    
| Ophthalmics | Yes | Provided the viscosity is in the suitable range. |
                
            

        

    

    

        

## 導師解析 Tutorial Commentary

        

            

#### 核心概念：PP 不是萬能充填泵

            

從上面的適用性表格可以看出，PP 的主要限制在於：

            

                
- **溶劑類產品**：有機溶劑（乙醇、DMSO）可能溶脹或使矽膠硬化，破壞軟管結構 → PP 不理想

                
- **長批次活動**（如 3 週流感疫苗生產）：軟管需要頻繁更換 → 操作成本高、無菌風險累積

                
- **LVP（大容量注射劑）**：充填量大 → 每批所需轉速多 → 軟管壽命消耗快 → 可能需要批次中換管

            

        

        

            

#### 重點提示：ADC 的特殊考量

            

ADC（抗體藥物偶聯物）是目前最熱門的腫瘤藥物平台，毒性極高（相當於強力化療藥物連接抗體）。PP 在 SU 系統中非常適合 ADC，但「是否放在隔離器外」需要特別評估。

            

一般 PP 的優勢（泵在隔離器外）在 ADC 場合反而可能需要重新考量：若軟管發生洩漏，隔離器外的環境沒有密封保護，高毒性物質外洩可能危及操作員。

            

這是為什麼安全評估（safety assessment）在 ADC 充填線設計中必須先於工程決策——「無菌保證優先」，但毒素控制同樣是第一優先級的安全考量。

        

        

            

#### CDMO 業務視角：PP + SU 是生物製劑市場的黃金組合

            

從市場趨勢看，生物製劑（mAb、基因療法、mRNA 疫苗）正以每年 10%+ 的速度增長，這些產品幾乎都具備以下特徵：

            

                
- 低黏度（多在 1–10 mPa-s）→ PP 技術適合

                
- 高剪切敏感性 → RPP 有顧慮，PP 剪切力低

                
- 高價值、小批次 → 一次性使用 (SU) 經濟效益高（省去 CIP/SIP 時間）

                
- 嚴格無菌要求 → 封閉系統 PP 完全相容 SU 流體路徑

            

            

**結論**：對任何希望承接生物製劑業務的 CDMO，掌握 PP + SU 系統的驗證與操作能力，是基本的技術門票。White Raven 等歐洲 CDMO 已在這個方向先行投資 AI 輔助充填管理——這是差距所在，也是追趕方向。

        

        

            

#### 綜合練習 Synthesis Questions

            

                
1. 一個客戶帶來一個含 15% DMSO 的小分子 API 溶液需要充填，你會建議使用 PP 還是其他技術？說明你的評估框架。

                
2. 對比 PP 和 RPP 在「100% IPC 的必要性」上，從技術原理解釋為何 PP 比 RPP 更需要高頻率的稱重管控。

                
3. 假設你的 CDMO 正在評估一條可以兼容 PP 和 RPP 的多功能充填線，從資本投資、操作彈性和客戶組合三個維度，分析這個決策的商業邏輯。

            

        

    

    

### 本節重點回顧 Section 2.1 Summary

    

        
- **PP 運作原理**：旋轉滾輪擠壓矽膠管，正排量驅動，充填量由旋轉角度控制，封閉系統讓產品只接觸軟管與充填針。

        
- **Occlusion-bed distance**：滾輪與背板間距，過緊加速磨損，過鬆導致回漏——每種軟管規格都有最佳設定值，需要驗證。

        
- **單管 vs. 雙管**：單管簡潔（少連接點、低污染風險），雙管藉由上下滾輪相位錯開有效抑制脈動；兩者各有適用場景，核心取捨是「流路簡潔性」vs.「充填精度穩定性」。

        
- **三段軟管選擇**：上游相容性為主；滾輪內高彈性耐磨；下游高硬度防脈動膨脹。四大選擇標準：功能性、產品相容性、滅菌方法、長期性能。

        
- **軟管磨損 → 劑量漂移 → 100% IPC**：PP 獨有的系統性漂移機制，修正演算法依賴即時稱重反饋，因此強烈建議 100% IPC 稱重（相較於 RPP 的劑量穩定性，PP 在 IPC 管理上的要求更高）。

        
- **系統定位**：中間容器高度必須高於或齊平充填針，避免氣泡；PP 可放在隔離器外（優勢），但帶來管路距離增加、priming 廢液量、流體靜力學設計等挑戰。

        
- **CDMO 戰略定位**：PP + SU 是現代生物製劑充填的主流配置，低黏度、高相容性、低清洗負擔使其成為 mAb、mRNA、基因療法等高增長產品的首選；ADC 場合需額外考量毒性洩漏風險來決定泵的位置。

    

⇧

    

PDA Manufacturing Technology Guide No. 1: Aseptic Filling, Engineering, and Operation (2025)

    

Section 2.1 — Peristaltic Pump (PP) Technology: Design & Setup | doc p26–p33

    

Educational bilingual material — Traditional Chinese commentary for CDMO professional training

# Section 2.1.4–2.1.12: Peristaltic Pump (PP) — Sterility Assurance, Costs & Strategy

    

蠕動泵的無菌保證、成本分析與選用策略

    

PDA Manufacturing Technology Guide No. 1 | doc p34 – p39

    

### 本章學習目標

    

        
- 理解蠕動泵 (PP) 的優缺點，並能對照 RPP 和 TP 技術做出技術選型判斷

        
- 掌握 PP 管路磨損對無菌保證 (SA) 的具體風險，以及如何透過 100% IPC 與使用時間驗證加以管控

        
- 能夠進行總擁有成本 (TCO) 分析：比較 SU 耗材費用與 CIP/SIP 可重複使用系統的全生命週期成本

        
- 了解 EU GMP Annex 1 對就地滅菌 (SIP) 的法規要求如何成為技術選型的驅動力

        
- 評估 CDMO 環境下 PP 的操作優勢與單一供應商風險，建立平衡的採購與驗證策略

    

    

### 本節內容索引

    

        2.1.4 優缺點表
        2.1.5 無菌保證
        2.1.6 效率與風險
        2.1.7 成本分析
        2.1.8 系統複雜度
        2.1.9 維護保養
        2.1.10 一次性 vs 可重複使用
        2.1.11 CIP/SIP 可行性
        2.1.12 效益與風險總表
    

2.1.4 Peristaltic Pump Advantages and Disadvantages — 蠕動泵優缺點

    

        

## 原文內容 Original Text

        

Table 2.1.4-1 identifies the advantages and disadvantages of PPs.

        

**Table 2.1.4-1 Advantages and Disadvantages of Peristaltic Pumps**

        

        
            
                
                    
                    
                    
                
| Characteristic | Advantages | Disadvantages |
| --- | --- | --- |
            
            
                
                    ****
                    
                    
                
| Viscosity | None (no disadvantage for low-viscosity products) | Not good for high viscosity products |
                
                    ****
                    
                    
                
| Durability | Product not in direct contact with moving parts; only moving parts are the rotors and rollers in the pump head | Tubing wears, so tubing longevity/particle-generation studies required |
                
                    ****
                    
                    
                
| Single Use | Designed for SU applications | Tubing may need to be changed or moved during filling due to tubing wear, especially on prolonged fills |
                
                    ****
                    
                    
                
| Changeover | Rapid changeover of filling path. Closed system design can limit product exposure when working with potent products. The use of intrinsic sterile connectors can facilitate leak prevention when tubing is removed from the vessel. | For high-dose accuracy applications, rigid tubing between the pump and needle can be hard to aseptically install |
                
                    ****
                    
                    
                
| Sterilization | Entire train can be disposable and sterilized together from intermediate bag to filling needle | System can be CIP/SIP, but tubes need to be dismounted from pump; nevertheless, CIP/SIP is rarely used for PP |
                
                    ****
                    
                    
                
| Shear Level | Very gentle low-shear technology | None |
                
                    ****
                    
                    
                
| Dosing Range | Wide dosing volumes achievable just by changing disposable tubing sets | Very wide dosing ranges may require change of pump occlusion-bed change part |
                
                    ****
                    
                    
                
| Operability | Can institute feedback control/dosing to compensate for tubing deformation. The capability to install outside of the containment simplifies operability and can improve SA by removing mechanical systems from the critical zone. | Tubing deforms over time; potentially impacts dosing for long fills. Slower filling-speed required to avoid splashing if soft tubing is used between pump and filling needle. |
            
        

        

    

    

        

## 導師解析 Tutorial Commentary

        

            

#### 核心概念：PP 技術特性全貌

            

這張優缺點表是選型決策的基礎。蠕動泵 (Peristaltic Pump, PP) 的核心工作原理是「管外壓縮推進」——液體永遠不接觸泵的金屬部件，泵頭的滾輪 (roller) 在管外擠壓矽膠管，推動液體前進。

            

這個設計帶來兩個根本優勢：

            

                
- **低剪切 (low shear)：**對蛋白質藥物、脂質體、細胞治療產品非常友善，幾乎不造成分子損傷

                
- **天然封閉系統：**泵體可放置在無菌屏障外，大幅降低 Grade A 區域的汙染源

            

            

同時也有一個根本限制：**橡膠管是唯一的耗損點**，所有的 SA 風險、成本問題、維護計畫都圍繞管路展開。

        

        

            

#### 比喻說明：洗車機的海綿滾輪

            

想像洗車機的旋轉海綿滾輪——它們接觸車身（管壁），但洗車水（液態藥品）不接觸滾輪本身。PP 的原理相同：滾輪壓縮管子外壁，車（藥液）在管道內安全通過。

            

問題在於：長時間洗車後，海綿滾輪會磨損脫落碎片——PP 的矽膠管也一樣。所以「滾輪使用壽命驗證」是這個系統的核心品質控制活動。

        

        

            

#### 重點提示：高黏度產品排除

            

PP 不適用於高黏度產品（如某些懸浮液、凝膠製劑）。高黏度會增加管路的壓縮阻力，導致劑量精準度下降，並加速管壁磨損。

            

**CDMO 接案關鍵問題：**當客戶問「你們可以充填高黏度藥液嗎？」若生產線只有 PP，答案可能是「需要先做可行性評估」。RPP 或 TP 在高黏度場景通常更可靠。

        

        

            

#### 實務應用：CDMO 多品項靈活性

            

「劑量範圍廣」是 PP 在 CDMO 場景最有商業價值的優點。只要更換不同管徑的 SU 管路，同一台泵頭可以充填從 0.01 mL 到 50 mL 的多種規格，**不需要更換泵體主機**。

            

對比 RPP：每個劑量規格通常需要專用活塞/缸體，換規格等同硬體更換。

            

CDMO 的競爭優勢因此顯現：**一條 PP 生產線可服務更多客戶品項**，資產利用率更高。

        

        

            

#### 練習思考 Practice Questions

            

                
1. PP 的「閉合系統可放置屏障外」優點，對無菌保證決策層級（SA > CQA > Business）有何影響？為什麼這是 SA 的優勢而不只是操作便利性？

                
2. 當你在充填一支脂質體奈米製劑時，PP vs RPP 哪個更合適？理由是什麼（提示：剪切力）？

                
3. 表格中「Sterilization」欄位說 CIP/SIP rarely used for PP——你認為最主要原因是什麼？（下一節會揭曉答案）

            

        

    

2.1.5 Peristaltic Pump Sterility Assurance: Microbial and Total Particles

    

        

## 原文內容 Original Text

        

A major driver in choosing a suitable dosing system is the risk of contamination that is posed during setup, handling, and production, as well as clean up or disassembly after the conclusion of the batch. Assuming there is absolute flexibility regarding the choice of the dosing system, PPs are always especially appreciated for the simplicity of the setup. Systems have minimal product contact parts (e.g., tubing and needles); this simplicity makes these systems especially suitable for SU applications. SU applications have the benefit of a reduced microbial contamination risk as the preassembled components are commonly gamma-irradiated. As a consequence, there are fewer required connections compared to other technologies. Connecting to the holding vessel or for recirculation purposes is also quite straightforward, and most of the connections can be executed outside of the Grade A area (e.g., using an RTP bag or intrinsic sterile connection device), which makes handling (including maintenance) easier.

        

Particulate in the sourced components may be identified by extractable and leachable testing as well as ongoing quality control of received components, but the disadvantage with a PP system is that the constant compression of the tubing by the rollers against the backplate will lead to further particle-generation as the tubes are subject to stretching and wear and tear. Therefore, it is crucial to always validate the use time of the tubes. This use time may need to be established in conjunction with the products being filled, as some products could potentially impact the speed of degradation (i.e., particle-generation).

        

The length of tubing used with PP is longer than with some other technologies, which can result in more product contact with elastomers. In addition, several types of tubing may be in use, as the different sections of tubing benefit from different stiffness, and there are substantial mechanical forces applied to the tubing (especially within the rollers). As a consequence, extractables and leachables testing is of particular importance for the range of materials and exposure conditions (e.g., times, temperature, friction forces).

        

Small cracks and breaks in the tube may not be immediately identified with PP technology. If a 100% IPC system is not in place for dose control, small breaks may go undetected for a period of time until the next statistical IPC (see Sections 5.1–5.1.4 for additional information on IPC strategies). The wear profile of the tubing within the rotors or the connectors that are employed for the fluid pathway can elevate this risk. As a consequence, leakage could result in contamination of this "closed system." In addition to the sterility risk, leakage will be problematic with potent or toxic products and may require reconsideration of the installation position to locate the mechanical components within the containment barrier.

        

There is no vertical movement on top of the machine table plate, therefore, machine-generated particles are minimized with PP systems. Since PPs can be placed outside of the barrier or isolator, the risk of particle-generation from the friction on the tubing can be reduced within the critical zone.

    

    

        

## 導師解析 Tutorial Commentary

        

            

#### 核心概念：PP 的 SA 優勢來源

            

PP 在無菌保證 (Sterility Assurance, SA) 上的優勢有兩個獨立來源：

            

                
- **SU 預裝伽瑪滅菌 (gamma-irradiated SU)：**管路出廠前已完成輻射滅菌，批次開始前無需進行就地滅菌，大幅減少操作步驟和無菌連接次數。這是 PP + SU 組合的核心優勢。

                
- **泵體置於屏障外：**PP 是極少數可以完全放在 Grade A 隔離器或 RABS 屏障外面的充填技術。這代表機械部件產生的微粒（金屬摩擦屑、潤滑劑）**完全不會進入關鍵區域**——只有透明的矽膠管穿過屏障進入充填區。這是 SA 的結構性優勢，不是操作技巧。

            

        

        

            

#### 重點提示：管路磨損是 PP 的核心 SA 風險

            

PP 的 SA 最大風險集中在兩個層面：

            

**1. 微粒產生 (particle generation)：**滾輪持續壓縮矽膠管 → 管壁橡膠碎片脫落 → 進入藥液。關鍵管控措施：**驗證並設定管路使用時間上限**，並在驗證中考慮不同藥品基質對矽膠降解速率的影響（如有機溶劑可能加速老化）。

            

**2. 可抽提物/可滲出物 (extractables & leachables, E&L)：**PP 的管路比其他技術更長、材料種類更多（不同硬度的管段），且長期承受摩擦力和拉伸力，因此 E&L 測試必須覆蓋**全部材料種類 × 全部曝露條件**（時間、溫度、摩擦力）的矩陣，不能只測一個代表性條件。

        

        

            

#### 重點提示：小裂縫的隱患 — 為什麼 PP 比 RPP 更需要 100% IPC

            

這是 PP 一個容易被忽略的 SA 風險：矽膠管的小裂縫或接頭微洩漏，**在外觀上可能看不出來**，劑量偏差也很小（因為裂縫只是洩漏幾滴）。

            

如果採用統計 IPC（每 N 個容器量一次重量），一個在第 1 個容器後就開始洩漏的管路，可能到第 N 個才被偵測到。這 N-1 個容器可能都是次品。

            

**結論：100% IPC 對 PP 的建議強度高於 RPP。**RPP 的活塞-缸體機構是機械精密配合，劑量非常穩定，統計 IPC 的誤差風險相對低；PP 則因為管路持續老化，「每一個容器的充填量都可能和上一個不一樣」，100% 稱重是唯一能確保每個容器都在規格內的方法。

        

        

            

#### 比喻說明：水管接頭的隱形滲漏

            

想像一條家用水管在牆內輕微滲漏。你每天用水，水壓表看起來正常，但牆壁裡已經悄悄濕了。等你發現問題，可能已經發了幾個月的霉。

            

PP 管路的小裂縫就是這樣的「隱形問題」。統計 IPC 就像每天只看一次水壓表——發現不了慢性滲漏；100% IPC 就像每個容器都有獨立的流量計——任何偏差即時可見。

        

        

            

#### 練習思考 Practice Questions

            

                
1. 你正在驗證一個 PP + SU 系統，充填批次時長為 8 小時。你打算如何設計「管路使用時間驗證」研究？哪些變數需要被納入（產品種類、溫度、轉速）？

                
2. 客戶問：「為什麼你們 PP 生產線的 E&L 測試比 RPP 貴這麼多？」請用這個章節的邏輯解釋。

                
3. 若充填劇毒產品（potent product），PP 泵放在隔離器外 vs 隔離器內，SA 風險如何變化？什麼條件下才需要放到隔離器內？

            

        

    

2.1.6 Peristaltic Pump Efficiency and Impact on Risk

    

        

## 原文內容 Original Text

        

Once personnel have been properly trained in the installation and proper functioning of PP systems, the associated risk of contamination to product is relatively low, as no direct contact by personnel with the product or product-contact parts (tube) occurs. Visibility of the equipment is also superior to some of the other systems, as a group of PPs can also be set up either vertically or horizontally to enable easy handling (e.g., improving ergonomics) and to decrease error probability (e.g., incorrect tubing placement, incorrect mounting of the wrong tube, leakage/damage to tube). The selected mounting position should take into account gravitational forces between the pump and filling needles and between the intermediate vessel and pumps to ensure consistency of dosing accuracy for all of the pump heads. Because no aseptic connections to the pump itself have to be made, the risk is considerably lower than with a manually assembled RPP. However, when the RPP is CIP/SIP-capable, the technologies are more comparable.

        

Containment is also straightforward with highly potent products if the PPs are placed within the isolator, which is necessary due to the comparatively higher potential of leaks and breakage. Detection systems for leaks can be implemented to trigger an alert should there be a breach in tubing. However, if a tube breaks, the standard operating procedure (SOP) for system operation should define whether to continue without that dosing head or to replace the tube, in addition to addressing quality implications (i.e., deviation) associated with breach and required isolation of any associated product containers. Replacement of the tube can take place easily without breaching containment of neighboring product paths.

        

The pumps run with very high efficiency due to the direct translation of servo drive to pump head (e.g., no gears as with RPP), and the pump heads show minimal wear and tear over multiple years of use. Therefore, pump heads do not normally require regular replacement.

    

    

        

## 導師解析 Tutorial Commentary

        

            

#### 核心概念：PP 的效率優勢——伺服直驅

            

PP 的機械傳動路徑極短：**伺服馬達 → 轉子 → 滾輪 → 管壁壓縮 → 液體推進**，中間沒有齒輪組、沒有機械密封、沒有複雜連桿。

            

對比 RPP：馬達 → 齒輪箱 → 凸輪 → 活塞往復 → 進/出閥切換 → 液體推進，傳動鏈更長，摩擦損耗更大，磨損點也更多。

            

PP 的結果：**泵頭幾乎沒有機械磨損，使用壽命可達數年**。真正需要管理的磨損件只有一個：矽膠管。

        

        

            

#### 比喻說明：直驅電動車 vs 傳統燃油車變速箱

            

電動車直接用馬達驅動輪子，沒有變速箱，傳動效率接近 95%；傳統燃油車的能量要經過引擎 → 變速箱 → 傳動軸 → 輪子，每個環節都有摩擦損耗，整體效率只有 30-40%。

            

PP 的伺服直驅就像電動車——轉子直接驅動管路，幾乎沒有中間損耗。RPP 的齒輪傳動就像傳統變速箱——多了轉換步驟，也多了潛在的磨損點和維護需求。

        

        

            

#### 重點提示：高毒性藥品的安裝位置決策

            

PP 通常放在屏障外，但高活性藥物 (highly potent products，HPAPI) 是例外——**這類產品要求 PP 放在隔離器內部**。

            

原因是邏輯相反：對一般藥品，我們擔心外部汙染進入藥品；對高毒性藥品，我們同時還要擔心**藥品洩漏出去傷害操作人員**。PP 管路的洩漏風險相對較高，若高毒性藥液洩漏在隔離器外，職業暴露風險難以接受。

            

**管控措施：**高毒性產品的 PP 應配備管路洩漏偵測系統（流量異常、液體感應器），一旦觸發立即停機並啟動偏差程序。

        

        

            

#### 實務應用：管路斷裂的 SOP 決策樹

            

當 PP 管路在充填過程中斷裂，SOP 必須預先回答三個問題：

            

                
- **1. 是否繼續充填？**用剩餘正常泵頭繼續，還是停線？（取決於多泵頭配置、批次尺寸影響）

                
- **2. 受影響容器如何處置？**從斷裂點往回追溯到上一個確認良品的 IPC 點，中間所有容器隔離等待調查

                
- **3. 偏差報告的範疇？**管路斷裂是否觸發批次廢棄，或只是局部隔離？

            

            

這個決策樹必須在 SOP 中明確規定，不能在批次中臨時決定，否則會導致偏差處理不一致和法規風險。

        

        

            

#### 練習思考 Practice Questions

            

                
1. 你的 PP 充填線有 8 個泵頭，第 3 號泵頭在批次 50% 時管路斷裂。100% IPC 系統已配備。請描述你的決策步驟和需要隔離的容器範圍。

                
2. 為什麼 PP 的可視性（visibility）是 SA 的優勢？不可見的設備設計（如封閉在機台內部的 RPP）會帶來什麼樣的操作風險？

            

        

    

2.1.7 Peristaltic Pump Costs: Initial and Lifecycle

    

        

## 原文內容 Original Text

        

Initial costs are comparable to initial investment costs for other systems for dedicated fill volumes. If multiple fill volumes are required, the PP becomes commercially superior, as the same pump head can cover a much higher dosing range in comparison to other technologies such as RPP. Lifecycle costs are negligible as pump heads seldom require replacement. Breakage of the servo motors can occur, but that is an infrequent failure mode. If single-use systems (SUS) are implemented, which is common with PP, the costs associated with the disposable components can be high. The total cost of ownership (TCO) calculations would take consumables into account; therefore, a TCO comparison might be made between the SU disposables and a reusable RPP system with CIP/SIP capability. Examples of considerations for the TCO calculations should be appropriate to the system design and may include, but are not limited to time, utilities, cleaning validation, maintenance, process know-how, training of operators, and downtime due to CIP/SIP cycles, and extended times in cases where parallel processing is not possible (such as not being able to run the biodecontamination cycles simultaneously with the CIP/SIP) (see Section 2.1.10 on SUS).

    

    

        

## 導師解析 Tutorial Commentary

        

            

#### 核心概念：TCO = 總擁有成本的完整視野

            

總擁有成本 (Total Cost of Ownership, TCO) 是比較不同充填技術的正確框架，而不是只看「設備採購價」。PP + SU 系統的 TCO 計算需要涵蓋：

            

                
- **初始資本支出：**設備本身（PP 與 RPP 相近）

                
- **SU 耗材費：**每批次管路組、接頭、針頭（持續發生）

                
- **驗證成本：**E&L 測試、管路使用時間驗證、IPC 系統驗證

                
- **運營成本：**清洗驗證（RPP 需要，PP SU 不需要）、WFI 消耗、潔淨蒸汽

                
- **停機成本：**CIP/SIP 週期佔用的批次間時間（RPP 較長）

                
- **人員訓練：**PP 複雜度低，訓練成本較低

            

        

        

            

#### 比喻說明：買車的全生命週期成本

            

選購汽車，你不能只看「車價」。電動車 (EV) 購買價比同級燃油車貴 20-30%，但：

            

                
- 電費 vs 油費（SU 耗材 vs 公用設施費用）

                
- 零維修 vs 定期換機油/煞車片（低維護 vs CIP/SIP 維護費）

                
- 電池壽命 vs 引擎大修（泵頭使用壽命 vs 活塞缸體替換）

            

            

PP + SU 就像電動車：**買車便宜，但電費（耗材）持續花；RPP + CIP/SIP 就像燃油車：買車便宜，但油錢和維修費也持續花**。誰划算取決於你的使用強度（批次量）和油價（耗材單價）。

            

TCO 的目的就是把這兩條成本曲線繪出來，找到「交叉點」——在哪個批次量以下 SU 更划算，以上 RPP 更划算。

        

        

            

#### 公式：PP vs RPP 的 TCO 比較框架

            

```

PP (SU) 年度 TCO =
  資本折舊（設備÷年限）
+ SU 管路組 × 批次數/年
+ E&L 驗證（攤提）
+ 管路使用時間驗證（攤提）
+ 100% IPC 系統維護
+ 操作員訓練（低）
─────────────────────────
RPP (CIP/SIP) 年度 TCO =
  資本折舊（設備÷年限，含 CIP/SIP 系統）
+ 清洗驗證（年度再確認）
+ WFI 消耗 × 批次數/年
+ 潔淨蒸汽 × 批次數/年
+ 停機時間成本（CIP/SIP 週期）
+ 活塞/缸體定期更換
+ 操作員訓練（較高）

TCO 決策點：
  批次數低 → SU PP 通常勝出（避免固定 CIP/SIP 成本）
  批次數高 → RPP 可能反轉（SU 耗材累積超過 CIP/SIP 固定成本）
            
```

        

        

            

#### 重點提示：CDMO 的 TCO 特殊考量

            

CDMO 不是單一產品生產商，TCO 計算有額外維度：

            

                
- **換品項清潔成本：**PP + SU 整個管路丟棄，交叉汙染風險幾乎為零，不需要清潔驗證；RPP 需要每次換產品做清潔驗證，法規文件成本高

                
- **單一供應商風險：**PP 的 SU 管路組往往來自特定 OEM，供應鏈斷鏈（如 COVID-19 期間）會導致整條生產線停擺。TCO 中要納入「供應中斷保險費用」（雙供應商認證、緩衝庫存）

                
- **多品項共用設備：**PP 泵頭可服務廣泛劑量範圍，CDMO 設備利用率更高，分攤的資本折舊更低

            

        

        

            

#### 練習思考 Practice Questions

            

                
1. 你的 CDMO 每年充填 50 批次某蛋白質藥物（2 mL/瓶）。SU 管路組每套 €800，RPP + CIP/SIP 系統的年運營成本（不含設備折舊）估計 €30,000。問：大約幾個批次是 SU vs RPP 的 TCO 交叉點？

                
2. 一個供應商提供的 PP SU 管路組被召回，你的生產線如何應對？TCO 分析中如何量化這個「供應鏈風險」？

            

        

    

2.1.8 Peristaltic Pump System Complexity: Setup, Handling, and Changeover

    

        

## 原文內容 Original Text

        

System complexity is very low as the pump only consists of a rotor and a housing, which can cover a large filling range (e.g., 0.01 mL to 50 mL); therefore, the pump does not need to be changed to accommodate the filling of multiple product volumes. The setup of the pump is the installation of the housing, and the rotor. Neither requires sterile connections nor sterilization as the pump has no direct product contact; biodecontamination with hydrogen peroxide or another qualified SOP-driven disinfection procedure as appropriate for cleanroom use is sufficient. The tubes require proper handling, as they need to be mounted to the pump system either as a SU gamma-irradiated component or as an in-house autoclaved component.

        

With a two-tube PP, tube clips are commonly employed, which hold the two pump tubes going into and out of the pump heads (see Figure 2.1.8-1). The tube clips are attached to the tubes, typically by pressing the tube into the corresponding slot on the clip. The tube clip is then mounted to the pump by simply clicking it into position, and the tubing that is internal to the rotary pump head is centered within the rollers. Special care must be taken so the fixed and loose sides of the clips are not confused; this is typically prevented by mistake-proofing the setup procedure (e.g., with appropriate photographs, marking of components, flow-direction indication). Tube clips are format-specific as the size of the slots within the clip are specific to the tubing outer diameter (OD) in use.

        

            [Figure 2.1.8-1: Diagram Showing the Positioning of Tube Clips used with Peristaltic Pump]
        

        

Because the pump is a closed system, it may be located outside the barrier, which would add further simplicity to the setup and handling. Changeover would be necessary if the filling volumes exceeded the limits covered by the pump head. The changeover is the same procedure as the setup, and only the housing and rotor would need to be changed if there were a large volume change on the line. It should be established whether an adapter or changeable plate will be required to accommodate the range of filling, and whether this will also require a different housing or rotor sizes.

        

There are some pumps that are designed to have small adjustment springs between the backplate and the rotor, which may be helpful in compensating for the stress effects on the tubes. However, the proper installation and adjustment of such springs typically requires expert setup knowledge.

        

Because different batches of tubes may have different geometry (e.g., inner diameter (ID), OD, thickness, length, elasticity), ensuring during setup that the fill volume is established to match the specific batch of tubing in use is important. A best practice is 100% IPC. Should a strategy for weight check other than 100% IPC be employed, maintaining a high monitoring frequency at the beginning of the batch is particularly critical, and there may be other points of criticality as well, particularly over long production durations when wear may start to affect performance. An appropriate risk assessment should be performed to justify the dose control approach if other than 100% IPC (see Sections 5.1–5.1.4 for additional content on weight-check strategies).

    

    

        

## 導師解析 Tutorial Commentary

        

            

#### 核心概念：PP 系統複雜度極低的兩個維度

            

PP 的低複雜度體現在：

            

**機械複雜度：**整個泵只有轉子 (rotor) + 外殼 (housing) 兩個主要部件。沒有閥門、沒有密封圈、沒有活塞。安裝流程可以由訓練後的操作員在幾分鐘內完成，不需要工程師。

            

**無菌管控複雜度：**泵體本身不接觸藥品，因此不需要無菌連接、不需要就地滅菌。氫氧化氫 (vaporized hydrogen peroxide, VHP) 生物去汙或標準消毒程序即已足夠。唯一需要無菌管理的是管路本身——但 SU 管路出廠前已經伽瑪滅菌，直接安裝即可。

        

        

            

#### 重點提示：管路幾何尺寸的批間變異——為什麼每次都要重新確認充填量

            

這是 PP 操作中最常被低估的風險：**同一廠牌、同一型號的矽膠管，不同批次之間可能有微小的 ID、OD、壁厚、彈性差異**。

            

PP 的劑量精確度直接來自管路的內徑（每轉一圈擠出的體積 = 管截面積 × 滾輪壓縮長度）。如果新批次管路的 ID 比上批次大 0.1 mm，每次充填量就會系統性偏高。

            

**最佳實務：**每次換新批次管路（換批次管路，不只是換批次藥品）時，都要重新執行充填量設定（gravimetric calibration），確認新管路的實際充填量符合目標值再開始生產。

        

        

            

#### 重點提示：防錯設計 (Mistake-Proofing) 的重要性

            

管夾 (tube clip) 的安裝是 PP 設定中唯一高風險的手動操作步驟。固定端 (fixed side) 和活動端 (loose side) 若裝反，管路會在充填時脫落或造成劑量偏差。

            

**防錯機制的實務標準：**

            

                
- 管夾兩端顏色不同（視覺辨識）

                
- SOP 配帶照片（正確安裝的示意圖）

                
- 管路上標示流向箭頭（防止裝反方向）

                
- 安裝後必須有第二人確認（雙人核查）

            

            

這是 GMP 中防錯 (poka-yoke) 設計原則的典型應用。

        

        

            

#### 比喻說明：F1 進站換胎 vs 普通換胎店

            

PP 的換管路操作可以像 F1 進站換胎（設計精良、步驟明確、防錯措施完備）——只需 2-3 分鐘。但若沒有良好的防錯設計（管夾方向標示、SOP 照片），同樣的操作就會像普通換胎店：靠師傅的個人經驗，每次結果不一樣。

            

CDMO 的挑戰：操作員可能在一天內換多個不同規格的管路，防錯設計的一致性直接影響批次成功率。

        

        

            

#### 100% IPC 的必要性邏輯

            

```

PP 劑量偏差的來源有三個：
  1. 管路批次間幾何變異（每批次一次性）
  2. 管路在批次內的磨損（隨時間漸進）
  3. 管路微小裂縫導致的突發洩漏（隨機）

前兩個是「漸進型」偏差，統計 IPC 可部分捕捉；
第三個是「突發型」偏差，只有 100% IPC 才能確保
每一個容器在可接受範圍內。

結論：
  PP 的推薦 IPC 策略 = 100% 稱重 (gravimetric check)
  若採用統計 IPC，需要：
    - 高頻率的批次開始監控
    - 長批次中期監控（補捉磨損影響）
    - 詳細的風險評估文件
            
```

        

        

            

#### 練習思考 Practice Questions

            

                
1. 你的 PP 充填線今天換了新批次管路（相同型號，但新批次）。SOP 上應該要求操作員做哪些步驟才能開始正式生產？

                
2. 某操作員宣稱：「上次批次用了 100% IPC，這次同一條管路繼續用，可以改成統計 IPC 嗎？」你如何評估這個請求的合理性？

            

        

    

2.1.9 Peristaltic Pump Maintenance and Aging

    

        

## 原文內容 Original Text

        

As described in the preceding sections, the focus for this system must be on the aging and replacement of tubing.

        

The pump system itself is essentially maintenance-free, although the original equipment manufacturer's recommendations for checking the operation of the roller bearings should be observed.

        

The original equipment manufacturer (OEM) should provide a replacement strategy for the servo motors (although infrequent), to avoid unnecessary downtimes or potential loss of batches.

    

    

        

## 導師解析 Tutorial Commentary

        

            

#### 核心概念：維護工作的重心轉移

            

PP 系統的維護哲學與 RPP 完全不同。RPP 需要定期維護活塞、缸體、閥門、密封件等多個機械零件；PP 的維護工作幾乎全部集中在一個地方：**管路**。

            

這個特點對 CDMO 的設備管理有實務意義：

            

                
- **預防性維護 (PM) 計畫簡化：**主要 PM 項目就是確認管路更換週期和滾輪軸承狀態檢查

                
- **備件庫存簡化：**不需要備大量機械零件，主要備品就是管路組（已有 SU 批量採購）

                
- **技術要求降低：**維護不需要專業機械工程師，訓練後的操作員即可執行大多數例行維護

            

        

        

            

#### 重點提示：伺服馬達的 OEM 替換策略

            

雖然伺服馬達故障頻率極低，但一旦在批次中途失效，後果嚴重：

            

                
- 批次中斷 → 可能廢棄（特別是高值藥品）

                
- 維修時間不確定 → 影響交貨期

                
- OEM 零件供應時間（尤其是進口設備）可能數週

            

            

**最佳實務：**向 OEM 索取「伺服馬達預防性替換週期」（通常以運轉小時數計），並在設備履歷中追蹤每個馬達的累計小時數。在替換週期到達前的計畫停機期間主動更換，避免非計畫性停機。

            

對高產量 CDMO 生產線：建議庫存 1-2 個備用伺服馬達，保持 24 小時內可更換的能力。

        

        

            

#### 比喻說明：印表機的維護哲學

            

噴墨印表機的硬體（列印頭、馬達、滾輪）設計為長期使用，幾乎不需要更換；真正需要持續補充和管理的是**墨水匣**（耗材）。

            

PP 系統就像高端噴墨印表機：機器本身近乎免維護，但墨水匣（矽膠管路）的管理才是營運的核心——及時補貨、確認規格批次、驗證使用壽命。

        

        

            

#### 練習思考 Practice Questions

            

                
1. 建立一份 PP 充填系統的年度維護計畫大綱，列出應包含的項目（管路相關、泵頭相關、馬達相關），並標示每個項目的頻率依據（OEM 建議、使用時間、批次數）。

                
2. 對一台每年充填 100 批次的 PP，如何決定「是否應該庫存備用伺服馬達」的採購策略？

            

        

    

2.1.10 Peristaltic Pump Single-Use Versus Reusable Strategy

    

        

## 原文內容 Original Text

        

Use of the SU strategy is much more common than the reusable strategy with PP due to the simplicity of the installation of presterilized components without any need for aseptic connections. The reusable strategy brings added risks to the process, for example, offline sterilization gives added complexity to the process, and cleaning for the tubing and filling needles requires validation and monitoring.

        

Regulatory guidance (e.g., European Commission Annex 1: Manufacture of Sterile Medicinal Products, EudraLex-Volume 4-EU Guidelines for Good Manufacturing Practice for Medicinal Products for Human and Veterinary Use (2022)) clearly states that any aseptic connections made for parts that come into direct product contact should be sterilized in place whenever possible (3). It is generally always possible to sterilize in place if a CIP/SIP system is designed for the filler, so the cost for reuse (and the increased costs associated with engineering and initial capital) should be weighed against the costs of SU.

        

For example, when the PPs use SU tubing (and connectors, where necessary), there are consumable costs associated with the system. These are additional ongoing costs as compared to a RPP or TP filler that might have more fixed piping, which is a greater initial capital investment. PPs are commonly used in a full SUS (e.g., disposable SU bags) due to the ease of setup. A comparison of expense between a fully disposable SU PP system and a conventional filling system with fixed piping that is CIP/SIP capable must take into account not only the initial installation and validation costs, but also the ongoing cost of utilities, manpower, time of changeover, maintenance of the validated state, and calibration, as well as the associated consumables.

    

    

        

## 導師解析 Tutorial Commentary

        

            

#### 核心概念：EU GMP Annex 1 的 SIP 要求是法規強制力

            

EU GMP Annex 1 (2022) 的核心要求：凡是直接接觸藥品的部件，只要工程上可行，都必須就地滅菌 (SIP)。

            

這條要求對 PP + 可重複使用管路的衝擊非常大：

            

                
- 若要使用可重複使用管路（reusable tubing），就必須設計 CIP/SIP 系統

                
- CIP/SIP 系統的設計、安裝、驗證費用高昂

                
- PP 的管路如本章後續所述，CIP/SIP 在 PP 上有很多工程挑戰

            

            

**法規強制力的結果：**選擇「不做 SIP」的可重複使用管路，在 EU 法規環境下幾乎是不被接受的。這使得 PP + SU（免 SIP）成為最省事的法規合規路徑。

        

        

            

#### 比喻說明：免洗餐具 vs 瓷器需要洗碗機

            

辦公室餐廳有兩種選擇：

            

                
- **免洗餐具 (SU 管路)：**每次用完直接丟掉，不需要洗碗機，不需要驗證清潔程序，但每天都要採購耗材費用

                
- **瓷器餐具 (可重複使用管路)：**初始採購貴，但需要工業洗碗機（CIP）+ 高溫消毒程序（SIP）+ 定期驗證餐具確實洗乾淨了（清潔驗證）

            

            

在 Annex 1 的世界裡，瓷器餐廳還被強制規定「洗碗機必須達到特定溫度和循環標準（SIP 要求）」——如果達不到，就只能用免洗餐具。

            

CDMO 的高頻率換產品需求（每週可能換 3-4 個品項），讓免洗餐具的「零清潔驗證」優勢更加顯著。

        

        

            

#### 重點提示：SU 的供應鏈依賴風險

            

SU 策略看似完美，但隱含一個重大的商業風險：**高度依賴單一供應商**。

            

PP 的 SU 管路組通常需要與特定泵體設備相容（管徑、接頭規格、管夾尺寸），往往只有一到兩家 OEM 供應商提供相容品。若供應商：

            

                
- 斷貨（原材料短缺）

                
- 停產某型號

                
- 品質問題導致召回

                
- 漲價（市場壟斷）

            

            

CDMO 的生產計畫可能立刻受到衝擊。

            

**風險管控：**在商業協議中要求 OEM 提供 12-18 個月的提前通知（change notification），並評估是否需要認證替代供應商或建立緩衝庫存策略。

        

        

            

#### 練習思考 Practice Questions

            

                
1. 一個新客戶詢問：「你們 PP 生產線的管路是 SU 還是可重複使用的？為什麼？」請結合 Annex 1 要求、TCO 考量和操作複雜度，給出一個完整的回答。

                
2. 你的 PP SU 管路唯一供應商宣佈因原材料短缺，將暫停供貨 3 個月。你如何應對？哪些選項是可行的，哪些會引發法規問題？

            

        

    

2.1.11 Peristaltic Pump Clean-In-Place/Sterilize-In-Place Feasibility and Pitfalls

    

        

## 原文內容 Original Text

        

CIP/SIP may be restricted to cleaning and sterilizing the intermediate vessel, tubes, and dosing needles. Because of this, the decision to implement a CIP/SIP system on a PP, and the practicality and the benefits thereof, will usually be considered to see if use of a SUS will not outweigh the CIP/SIP approach in terms of complexity.

        

In the case where CIP/SIP is applied, two main considerations apply:

        

            
- Initial CIP/SIP of the interior surfaces

            
- Subsequent biodecontamination of the exterior surfaces prior to the start of operations

        

        

For the initial CIP/SIP, the tubes cannot be mounted within the pump, as the pump rotor and rollers would restrict CIP/SIP media flow (e.g., cleaning fluid, steam). For the biodecontamination, tubes cannot be mounted within the clips or the pump as it will restrict biodecontamination (e.g., vapor phase access to surfaces that are in contact with each other). If the tubing biodecontamination is performed prior to SIP, the SIP will reduce the risk of residual absorbed biodecontamination agent (e.g., vaporized hydrogen peroxide absorbed in silicone tubing). Alternatively, after biodecontamination, a WFI flush or CIP might be applied to the tubing followed by SIP. The chosen sequence and process steps should be validated to be appropriate to ensure the residue-free, sterile condition of the tubing. During SIP the tube to needle, tube to Y-connectors, and vessel to tube connections must be fixed with a connector to ensure that the tube does not disconnect from the needle when under pressure for SIP. After SIP, manual assembly must take place, which again poses risks as a result of aseptic manipulation.

    

    

        

## 導師解析 Tutorial Commentary

        

            

#### 核心概念：PP 的 CIP/SIP 工程挑戰

            

這一節解釋了為什麼「CIP/SIP rarely used for PP」（前面優缺點表中提到）。根本原因在於 PP 的物理結構與 CIP/SIP 程序之間存在根本性矛盾：

            

**矛盾一：管路必須拆下才能 CIP/SIP**

            

CIP/SIP 需要清潔液體或蒸汽能自由流通整個管路內腔。但 PP 的滾輪在正常狀態下是壓縮在管壁上的——這個壓縮正是泵的工作原理，但也恰好阻擋了流體通過。結果：執行 CIP/SIP 前，管路必須從泵頭上拆下。

            

**矛盾二：拆下後重新安裝是手動無菌操作**

            

管路做完 CIP/SIP 後，必須重新裝回泵頭——這是一個手動操作步驟，引入了無菌操作風險。SIP 的目的（提供無菌狀態的管路）被「SIP 後的手動安裝」部分抵消。

        

        

            

#### PP CIP/SIP 的操作序列

            

```

若選擇 CIP/SIP 路徑，操作序列如下：

步驟 1: 管路拆離泵頭（必要，以確保流體暢通）
   ↓
步驟 2: 管路內腔 CIP（清洗液循環）
   ↓
步驟 3: 隔離器/RABS 外表面生物去汙（VHP 霧化）
   ↓（管路必須拆離夾具，讓 VHP 接觸所有表面）
步驟 4: WFI 沖洗 或 直接進行 SIP
   （若先做 VHP 生物去汙：SIP 可分解矽膠管內殘留 VHP）
   ↓
步驟 5: SIP（蒸汽滅菌，管路內腔達到 SAL 要求）
   ↓
步驟 6: 手動重新安裝管路至泵頭（高風險步驟！）
   ↓
步驟 7: 100% IPC 確認充填量後開始生產

風險集中點：步驟 6（手動無菌安裝）
→ 這正是 SU 路徑的核心優勢：完全省略步驟 6
            
```

        

        

            

#### 重點提示：VHP 被矽膠管吸收的問題

            

這是一個微妙但重要的化學問題：矽膠是多孔性材料，VHP（氣化過氧化氫）容易被矽膠管壁吸收。如果吸收的 VHP 沒有被完全去除，在後續的藥液充填中可能：

            

                
- 緩慢釋放 H₂O₂ 進入藥液（可浸出物問題）

                
- 對蛋白質藥物造成氧化降解

            

            

**解決方案：**在 VHP 生物去汙後，SIP（蒸汽）可有效分解殘留 VHP，降低風險。但這個去除效果必須通過驗證來確認（測量 SIP 後殘留 H₂O₂ 濃度）。

        

        

            

#### 比喻說明：洗完碗之後還要用手擦乾

            

工業洗碗機（CIP）可以把瓷器洗得一塵不染，高溫消毒（SIP）可以殺死所有細菌——但如果消毒完後，廚師要用手把碗拿出來組裝擺盤，那雙手的細菌就可能重新汙染碗盤。

            

這正是 PP CIP/SIP 的悖論：前面花了大力氣確保管路無菌，最後一步卻需要人工手動安裝——這個手動步驟把之前的努力變成了不確定因素。SU 的優勢在於：出廠已滅菌的管路，直接安裝，完全跳過這個手工步驟。

        

        

            

#### 練習思考 Practice Questions

            

                
1. 一個客戶因環保考量，堅持要求使用可重複使用管路（避免 SU 廢棄物）。你作為技術負責人，如何說明 CIP/SIP on PP 的挑戰，並提出替代方案或補充措施？

                
2. 設計一個 PP CIP/SIP 驗證計畫的大綱：需要驗證哪些關鍵參數？接受標準是什麼？

            

        

    

2.1.12 Peristaltic Pump Benefits and Risks

    

        

## 原文內容 Original Text

        

Table 2.1.12-1 highlights the common benefits-and-risks analysis that is pertinent to the use of PP systems.

        

**Table 2.1.12-1 Benefits and Risks of Peristaltic Pump Systems**

        

        
            
                
                    
                    
                
| Benefits | Risks |
| --- | --- |
            
            
                
                    
                    
                
| Highly beneficial when combined with SUS | High dependency on SUS suppliers |
                
                    
                    
                
| Closed system can be used outside aseptic barrier | Wear and tear of the tubes may limit the period of use for a single set of tubing; tubing failure conditions may be exacerbated due to specific product characteristics (e.g., solvents) |
                
                    
                    
                
| Easy assembly and handling | May have slower reaction time for sensor-filling and, therefore, is less suitable than TP for containers that require sensor-filling |
                
                    
                    
                
| Low maintenance | Consideration should be given to product viscosity |
                
                    
                    
                
| Range of filling volumes | Tube breakage is a greater risk than with other systems; leak detection systems are available, but the risk of leaks may require installation inside the aseptic barrier in order to potentially conserve a portion of the batch upon failure; installation within the barrier is especially critical for potent or toxic products |
                
                    
                    
                
| Reduced technology know-how needed due to reduced complexity and reduced setup |  |
                
                    
                
| Limited operating costs for SUS after initial investment other than consumables (e.g., no use of WFI, clean steam, cleaning validation) |
            
        

        

    

    

        

## 導師解析 Tutorial Commentary

        

            

#### 核心概念：效益與風險的矩陣解讀

            

這張表是整個 PP 章節的結構性總結。觀察這個表的模式：

            

**效益側的共同主題：「簡單」**

            

                
- 裝配簡單、維護簡單、技術要求低、操作成本低

                
- 這些簡單特性都來自同一個根源：PP 的封閉系統設計 + SU 策略的結合

            

            

**風險側的共同主題：「管路的脆弱性」**

            

                
- 供應鏈依賴、磨損、破裂、黏度限制——全部都與管路有關

                
- 這些風險也都有同一個根源：矽膠管是整個系統中唯一既是耗損件又是關鍵安全屏障的部件

            

        

        

            

#### 重點提示：PP 不適合感測器充填 (sensor-filling)

            

「感測器充填」是指依靠液位感應或重量感測器，在達到目標充填量後，即時發出停止信號的充填控制方式，常用於容器容量有限（如小瓶、眼用藥）或泡沫敏感的場景。

            

PP 的問題：軟管的彈性使管路中存在一定的流體慣性（管路壓縮後需要一小段時間才能完全停止出液），**感測器觸發停止信號到實際停止出液之間有延遲**，導致過充填。

            

TP（時間壓力充填）的感測器反應更靈敏，適合需要精確液位控制的容器類型。CDMO 在接收這類容器規格時，應優先評估 TP 而非 PP。

        

        

            

#### 實務應用：PP 技術的 CDMO 適用場景總結

            

**PP 最理想的場景：**

            

                
- 多劑量規格共線（劑量範圍廣的優勢最大化）

                
- 低到中黏度注射劑（緩衝液、生物製劑、小分子水溶液）

                
- 高頻率換品項（SU 的無清潔驗證優勢最大化）

                
- 生物製劑（低剪切的優勢最重要）

                
- 預臨床/臨床早期小批量（低資本投入、快速啟動）

            

            

**PP 應謹慎評估或避免的場景：**

            

                
- 高黏度製劑（懸浮液、脂質製劑的高黏度版本）

                
- 需要感測器充填的小容量高精度容器

                
- 含有機溶劑的製劑（加速管路降解）

                
- 超高毒性 HPAPI（需放置隔離器內，增加設計複雜度）

                
- 極高批次量 + 無法接受 SU 耗材持續費用的成本結構

            

        

        

            

#### PP 技術選型速查決策框架

            

```

問題 1: 產品黏度是否高？
  是 → 優先考慮 RPP 或 TP，PP 不推薦
  否 → 繼續評估

問題 2: 是否需要感測器充填（液位觸發停止）？
  是 → 優先 TP，PP 不推薦
  否 → 繼續評估

問題 3: 是否為生物製劑/細胞治療（低剪切需求）？
  是 → PP 是優先選擇
  否 → 繼續評估

問題 4: CDMO 是否多品項共線且高頻換線？
  是 → PP + SU 的優勢顯著（清潔驗證成本最低）
  否 → 考慮 RPP + CIP/SIP 的固定成本是否合理

問題 5: 是否為 HPAPI（高毒性藥品）？
  是 → PP 仍可用，但需設計隔離器內安裝 + 洩漏偵測
  否 → PP 可放屏障外，操作最簡單
            
```

        

        

            

#### 比喻說明：整體技術選型如同選廚房設備

            

選擇廚房設備時，你不會只買一種——你會根據料理類型選擇不同工具：

            

                
- PP = 矽膠刮刀：輕柔、多功能、一次性衛生、清洗麻煩免了；但不適合攪拌黏稠麵糊

                
- RPP = 不鏽鋼攪拌器：耐用、精準、適合多種黏度；但每次用完需要徹底清洗

                
- TP = 量杯 + 定時閥：靠壓力和時間計量，最適合需要精確感測停止的場景

            

            

一個成熟的 CDMO 廚房，應該三樣都有，根據客戶的「料理需求」（產品特性）選擇正確的工具，而不是讓所有客戶的產品都用同一種工具充填。

        

        

            

#### 練習思考 Practice Questions

            

                
1. 用這章學到的效益/風險框架，為以下三個新客戶選擇充填技術並說明理由：
                    

                        
    - 客戶 A：單株抗體，2 mL，每批 5,000 瓶，每年 12 批，低黏度

                        
    - 客戶 B：眼用製劑，0.5 mL，需要感測器停止充填，每年 50 批

                        
    - 客戶 C：高活性抗腫瘤小分子，含 DMSO 溶劑，1 mL/瓶，每年 3 批（臨床）

                    

                

                
2. 回顧本章所有子節（2.1.4 至 2.1.12），PP 技術中哪一個面向對 CDMO 的日常運營影響最大？為什麼？

            

        

    

    

### 本節重點回顧 Section Summary (2.1.4–2.1.12)

    

        
- **技術特性：**PP 是低剪切、廣劑量範圍、低系統複雜度的充填技術，最核心的優勢是「封閉系統可置於無菌屏障外」；最核心的限制是「矽膠管路是唯一耗損點，也是所有 SA 風險的集中地」

        
- **SA 管控：**管路使用時間驗證 + E&L 測試矩陣 + 100% IPC 是 PP 的三大 SA 支柱；PP 的 100% IPC 建議強度高於 RPP，因為 PP 的劑量受管路磨損和批次幾何變異影響更大

        
- **成本結構：**PP + SU 的 TCO 優勢在於：免清潔驗證、低維護費用、廣劑量範圍提高設備利用率；劣勢在於 SU 耗材的持續費用和供應鏈依賴風險

        
- **法規驅動：**EU GMP Annex 1 的 SIP 要求，使可重複使用管路必須配備 CIP/SIP 系統，工程挑戰大；這是 PP + SU 成為主流選擇的關鍵法規背景

        
- **CIP/SIP 陷阱：**PP 的 CIP/SIP 有根本性工程矛盾（管路需拆除才能清洗，但 SIP 後需手動重新安裝）；實務上 PP 極少採用 CIP/SIP，SU 是幾乎所有 PP 安裝的首選策略

        
- **選型決策：**PP 適合低黏度、多規格、生物製劑、高頻換線的 CDMO 場景；不適合高黏度、感測器充填、含溶劑製劑的場景；HPAPI 使用 PP 需要額外的洩漏防護設計

    

⇧

## Topic 2B: Rotary Piston Pump 旋轉活塞泵 (p42-p53)

# Section 2.2 — Rotary Piston Pump (RPP) Technology

    

旋轉活塞泵技術：原理、設計、效能與成本全解析

    

PDA Manufacturing Technology Guide No. 1 | doc p42 – p53 (PDF p56–p62)

    

### 本節目錄 Table of Contents

    

        2.2 RPP 概述
        2.2.1 設計配置
        2.2.2 安裝設定
        2.2.3 系統定位
        2.2.4 優缺點
        2.2.5 無菌保證
        2.2.6 效率
        2.2.7 成本
        2.2.8 複雜度
        2.2.9 維護
        2.2.10 一次性 vs 重複使用
        2.2.11 CIP/SIP 可行性
        2.2.12 效益與風險
        本節總結
    

    

### 本章學習目標 Learning Objectives

    

        
- 理解 RPP 的工作原理：活塞-汽缸結構、產品潤滑機制與四段劑量循環

        
- 掌握 RPP 與 PP 的關鍵差異：RPP **必須**置於隔離器／RABS 內部；RPP 無劑量漂移，統計性 IPC 技術上可行

        
- 了解 CIP/SIP 設計需求：兩個額外接口、清洗滅菌位置要求，以及為何比 TP 複雜

        
- 評估 RPP 的 TCO（總擁有成本）：最昂貴的充填系統，但對高黏度蛋白質製劑為最佳選擇

        
- 能夠在 CDMO 場景中判斷：何時選 RPP？何時選 PP？決策依據為何？

        
- 了解序列化活塞-汽缸配對的重要性，以及陶瓷泵的適用場景

    

    

        

2.2

        

            

## Rotary Piston Pump — Overview & Operating Principle

            

旋轉活塞泵概述與工作原理

        

    

    

        

            

                

## 原文內容 Original Text

                

The Rotary Piston Pump (RPP) is one of the oldest and most established filling technologies for aseptic liquid filling. It operates on the principle of a piston moving within a cylinder, where the product itself acts as the lubricant between the piston and cylinder surfaces — a concept known as product-lubricated operation.

                

The RPP dosing cycle proceeds through four distinct phases:

                

                    
1. **Suction phase:** The piston retracts, drawing product from the intermediate vessel into the cylinder chamber through the inlet port.

                    
2. **Rotation phase:** The cylinder (or piston) rotates to align the outlet port with the filling needle pathway, closing the inlet.

                    
3. **Dispensing phase:** The piston advances, pushing the precisely measured volume of product out through the filling needle into the container.

                    
4. **Return phase:** The cylinder rotates back to the inlet position, ready for the next suction cycle.

                

                

Because the piston-cylinder interface is open to the surrounding environment at the point where the piston inserts into the cylinder, the RPP must always be positioned inside the containment — either inside an isolator or a Restricted Access Barrier System (RABS). This is a fundamental constraint that distinguishes RPP from peristaltic pumps (PP), time-pressure (TP), and rolling diaphragm pumps (DP), some elements of which may be installed outside the aseptic barrier.

                

                    [Figure 2.2-3: Rotary Piston Pump Filler Fluid Pathway]
                

                

The dosing volume is determined purely by the stroke length of the piston within the cylinder — making it a true positive displacement device. Unlike the peristaltic pump, there is no dose drift over time, as the mechanical stroke remains constant regardless of product viscosity changes or tubing wear. This stability is a defining strength of RPP technology.

            

            

                

## 導師解析 Tutorial Commentary

                

                    

#### 核心概念：RPP 工作原理 — 正排量充填

                    

**旋轉活塞泵（Rotary Piston Pump, RPP）**屬於**正排量泵（Positive Displacement Pump）**，這表示每一次活塞行程（stroke）所排出的液體體積是固定的，不受入口壓力或產品黏度影響。

                    

四段劑量循環：

                    

                        
- **吸入（Suction）：**活塞後退，產品被抽入汽缸

                        
- **旋轉（Rotation）：**汽缸轉動，切換入口→出口通路

                        
- **分配（Dispensing）：**活塞前進，精確定量推出產品

                        
- **復位（Return）：**汽缸轉回，準備下一循環

                    

                    

**產品潤滑（product-lubricated）：**活塞與汽缸之間沒有橡膠密封件，靠產品本身的液體形成潤滑膜。這消除了因密封件磨損造成的顆粒污染，但同時也意味著活塞-汽缸界面是「開放的」。

                

                

                    

#### 比喻說明：RPP = 巨型注射器活塞

                    

想像一支醫用注射器（syringe）：你拉開活塞，藥液被吸入；你推回活塞，藥液被精準推出。RPP 的工作原理幾乎完全一樣。

                    

關鍵差別：注射器的活塞-筒管之間有橡膠墊圈密封，而 RPP **沒有密封件** — 活塞直接在汽缸內滑動，靠「產品本身」當作潤滑劑。這就是為什麼 RPP 必須在無菌屏障內工作：注射器的橡膠墊圈就是密封保護，但 RPP 的界面是開放的，環境中任何微粒或微生物都可能在此點進入流體路徑。

                

                

                    

#### 關鍵約束：RPP 必須在隔離器／RABS 內部

                    

這是 RPP 最重要的特性限制，也是最常被考試考到的知識點：

                    

                        
- **PP（蠕動泵）：**泵頭可以在隔離器外部，只有矽膠管穿入無菌區

                        
- **TP（時間壓力）：**壓力容器和夾管閥可在屏障外

                        
- **DP（滾動膜片泵）：**膜片完全隔離機械部件，屬封閉系統

                        
- **RPP：**活塞-汽缸界面在插入點「對環境開放」→ **整個泵必須在無菌屏障內**

                    

                    

這個約束有一個意外的優點：處理高毒性或高活性原料藥（HPAPI）時，所有流體路徑都在隔離器內，進一步保護操作員不受產品暴露。

                

                

                    

#### 練習思考 Practice Questions

                    

                        
1. 為什麼 RPP 沒有密封件，但 PP 的矽膠管卻等同於密封機制？這個差異如何影響兩者在系統定位上的決策？

                        
2. 「正排量」充填與「時間壓力」充填在準確性機制上有何本質差異？在哪種情境下 RPP 的正排量特性尤為重要？

                    

                

            

        

    

    

        

2.2.1

        

            

## Rotary Piston Pump Design Configurations

            

設計配置：CIP/SIP 能力與劑量穩定性

        

    

    

        

            

                

## 原文內容 Original Text

                

For inline CIP/SIP, a special design is necessary that allows the pump to be cleaned around the full circumference of the piston and cylinder. Therefore, two additional connections are required: one in the lower position and one in the upper position of the pump (see Figure 2.2.1-1). In addition, the pump is required to move to a cleaning and sterilization position to ensure that all surfaces are opened to the greatest extent for exposure to both cleaning fluids and steam, allowing more space between piston and cylinder.

                

Due to the challenges in accommodating all the connections, the CIP/SIP of RPP is much more challenging than TP. However, although RPP is more technically complex, the focus on reducing aseptic assembly operations has made CIP/SIP more common with RPP.

                

                    [Figure 2.2.1-1: Rotary Piston Pump with Clean-in-Place/Sterilize-in-Place Capability]
                

                

In contrast to the PP, the RPP has no drift in delivered dose over time and fills the same amount of volume at the beginning and at the end of the aseptic filling operation. This means that a statistical IPC is technically appropriate (see Sections 5.1–5.1.4).

            

            

                

## 導師解析 Tutorial Commentary

                

                    

#### 核心概念：CIP/SIP 的兩個額外接口設計

                    

RPP 的 CIP/SIP 設計比 TP 複雜，原因在於汽缸的幾何形狀：清洗液和蒸汽必須能夠到達活塞-汽缸界面的**全圓周**，包括上方和下方。

                    

因此需要：

                    

                        
- **上方接口（upper connection）：**讓蒸汽從頂部進入，完整接觸汽缸上半部

                        
- **下方接口（lower connection）：**排放清洗液和冷凝水，確保底部無死角

                        
- **CIP/SIP 位置（cleaning position）：**泵需移動到特殊位置，讓活塞和汽缸之間的間隙最大化，使清洗液和蒸汽能完整包圍接觸面

                    

                    

這就是為什麼 RPP 通常需要第三個驅動器（第三軸）專門負責移動到 CIP/SIP 位置。

                

                

                    

#### 關鍵對比：RPP vs PP — 劑量漂移與 IPC 策略

                    

這是本節最重要的監管考點：

                    
                        
                            
                            
                            
                        
| 特性 | PP（蠕動泵） | RPP（旋轉活塞泵） |
| --- | --- | --- |
                        
                            
                            
                            
                        
| 劑量漂移 | 有（矽膠管磨損後管徑縮小，劑量隨時間減少） | 無（機械行程固定） |
                        
                            
                            
                            
                        
| 建議 IPC 策略 | 100% IPC（每支逐一稱重） | 統計性 IPC 技術上可行 |
                        
                            
                            
                            
                        
| IPC 主因 | 偵測劑量漂移 | 偵測氣泡（air bubble）導致的欠充填 |
                    

                    

重要提醒：RPP 即使技術上允許統計性 IPC，實務上**仍建議定期進行 IPC**，主要目的是偵測管路中的氣泡。這是 Section 2.2.6 的重點。

                

                

                    

#### 比喻說明：CIP/SIP 位置 = 牙醫椅的傾斜調整

                    

想像牙醫椅：為了讓醫生能夠全面清潔你的每顆牙齒，椅子必須能調整角度，讓口腔以最佳姿態暴露。

                    

RPP 的 CIP/SIP 位置也是同樣道理：泵必須移動到一個特殊姿態，讓清洗液和蒸汽能夠「看到」並接觸到每一個汽缸內壁表面，包括最難到達的活塞-汽缸界面。這個動作需要一個專用的機械驅動器，也因此增加了設備複雜度與驗證負擔。

                

                

                    

#### 練習思考 Practice Questions

                    

                        
1. 為何 RPP 的 CIP/SIP 比 TP「挑戰性更大」？從幾何結構和連接數量兩個角度分析。

                        
2. 如果你是 QA 主任，需要驗證 RPP 的 SIP 效果，你會如何設計蒸汽穿透（steam penetration）的挑戰點？上方接口和下方接口各需要放置哪種監測器？

                    

                

            

        

    

    

        

2.2.2

        

            

## Rotary Piston Pump Setup

            

安裝設定：序列化配對、材質選擇與排氣引液

        

    

    

        

            

                

## 原文內容 Original Text

                

The tight mechanical tolerances of the piston and cylinder often require that the two parts of each pump be scribed with serial numbers (by the OEM), which will ensure that the matching parts are always assembled together to avoid binding, seizing, or having a large tolerance range that can result in changes in dosing accuracy, dripping at the needles, or leaking.

                

There may be exceptions for some materials of construction, such as ceramic, that enable the piston and cylinders to be interchangeable. Product characteristics should be considered carefully when selecting technology, as the tight mechanical tolerances cannot withstand the formation of crystals during operation that may result in blocking of the piston and cylinder. In these cases, ceramic pumps may be called for, or larger tolerances may suffice, if there is no dripping concern with the specific product.

                

The pump stroke is adjusted depending on the fill volume but, for priming, it is advantageous to use the complete stroke to exhaust the air out of the system. There are different methods to prime the pump to remove air from the system and ensure reaching target fills without air gaps at the beginning of the batch. The approach to priming should be considered depending on the application, product characteristics, and execution of the pump.

            

            

                

## 導師解析 Tutorial Commentary

                

                    

#### 核心概念：序列化配對（Serialized Piston-Cylinder Pairs）

                    

RPP 的活塞和汽缸是在 OEM 工廠中精密加工後，經過配對測試才出廠的。每對活塞-汽缸都刻有獨特序列號（serial number），代表這兩個零件是專屬配對。

                    

**為什麼不能混配？**

                    

                        
- 活塞-汽缸間隙（clearance）精度通常在微米（μm）級別

                        
- 混配後間隙過大 → 產品從活塞旁洩漏，劑量不準確

                        
- 混配後間隙過小 → 活塞卡死（binding/seizing），造成機械損傷

                        
- 任何情況都可能導致充填針頭滴液（dripping），污染無菌環境

                    

                    

**例外情況：**陶瓷（ceramic）材質因其均一性較高，部分製造商允許互換使用，但仍需確認供應商規格。

                

                

                    

#### 比喻說明：序列化配對 = 婚戒

                    

活塞和汽缸就像一對婚戒（wedding rings）——它們是專屬配對，天生一對。你永遠不會把不同對的戒指混在一起佩戴，因為那樣根本戴不上去，或者戴上去後鬆鬆的。

                    

在製藥工廠，混用序列號不匹配的活塞-汽缸對，就像強行把不同對的戒指套在一起——輕則充填劑量不準，重則設備損毀，最嚴重的後果是針頭滴液污染無菌區，導致整批產品報廢和偏差調查。

                    

**實務規則：**每次拆卸 RPP 進行清洗或維護後，再組裝時必須核對序列號，這是 SOP 中的強制驗證步驟，不可省略。

                

                

                    

#### 重點提示：陶瓷泵的適用場景

                    

不鏽鋼 RPP 的緊密公差（tight tolerance）對某些產品是風險：

                    

                        
- **容易結晶的產品（crystallizing products）：**晶體顆粒可能卡在活塞-汽缸間隙，導致泵卡死或產生顆粒污染

                        
- **研磨性懸浮液（abrasive suspensions）：**固體顆粒會磨損不鏽鋼表面，逐漸增大間隙並產生金屬碎屑

                    

                    

**陶瓷泵（ceramic pump）的優勢：**

                    

                        
- 硬度更高，耐磨性更好

                        
- 化學惰性，不與絕大多數藥物產品反應

                        
- 部分陶瓷材質的公差均一性較好，可互換使用

                    

                    

**陶瓷的弱點：**脆，容易因突然溫度變化（thermal shock）或碰撞而碎裂。需要特別小心搬運和 CIP/SIP 的溫度變化速率。

                

                

                    

#### 引液排氣（Priming）的重要性

                    

**引液（Priming）**是充填批次開始前，將管路和泵中的空氣排出、以產品充滿的過程。

                    

**為什麼要用完整行程引液？**使用完整行程（complete stroke）可以最大化每次循環的產品進出量，更有效率地將殘留空氣排出汽缸。若使用過短的行程引液，空氣可能殘留在汽缸頂部，造成批次初期的欠充填（underfill）。

                    

**注意：**引液期間泵是「乾的」（dry-start），活塞-汽缸界面暫時沒有產品潤滑，這段時間摩擦力最大，磨損風險也最高。這在 Section 2.2.5 無菌保證中是重要的顆粒風險控制點。

                

                

                    

#### 練習思考 Practice Questions

                    

                        
1. 你的 CDMO 正在充填一個高度飽和溶液（容易析出結晶）。充填速度慢（產品在汽缸內停留時間長），且充填溫度較低。你會選擇不鏽鋼泵還是陶瓷泵？請說明理由。

                        
2. 如果操作員在組裝 RPP 時忘記確認序列號，導致活塞-汽缸混配，最可能出現哪些可觀察到的充填異常？如何在批次記錄（BPR）中發現此問題？

                    

                

            

        

    

    

        

2.2.3

        

            

## Rotary Piston Pump System Positioning

            

系統定位：中間容器液位控制與頭壓一致性

        

    

    

        

            

                

## 原文內容 Original Text

                

To prevent too much pressure on the product, thereby preventing product release from between the piston and cylinder, the intermediate vessel must be ventilated and should be maintained at a consistent fill-level to maintain constant head pressure. This is especially important for low-viscosity products.

                

For higher-viscosity products, the intermediate vessel is commonly used with overpressure and might not be ventilated.

            

            

                

## 導師解析 Tutorial Commentary

                

                    

#### 核心概念：頭壓（Head Pressure）對 RPP 的影響

                    

**頭壓（head pressure）**是液柱高度所產生的重力壓力。公式：P = ρgh（密度 × 重力加速度 × 液柱高度）。

                    

對 RPP 而言，頭壓過高的後果：產品會從活塞-汽缸的微小間隙中「滲出」（product release from between piston and cylinder）。這類似於水管破裂時，水壓越高、漏水越快。

                    

**控制策略：**

                    

                        
- **低黏度產品：**中間容器通氣（ventilated）以避免過壓，並維持液位恆定（consistent fill-level）以穩定頭壓

                        
- **高黏度產品：**因流動阻力大，需施加適度正壓（overpressure）幫助產品進入汽缸，中間容器可不通氣

                    

                

                

                    

#### 比喻說明：液位控制 = 水塔的穩壓設計

                    

城市供水系統中的水塔（water tower）維持恆定液位，確保家家戶戶的水壓相同。如果水塔液位忽高忽低，你家的水壓就會時強時弱，淋浴體驗很差。

                    

RPP 的中間容器液位控制也是同樣原理：液位恆定 → 頭壓恆定 → 每次活塞吸入的阻力相同 → 劑量一致性更好。特別是對低黏度產品（例如注射用水或低濃度緩衝液），即使 5 cm 的液位差也可能產生可觀察到的充填差異。

                

                

                    

#### 重點提示：低黏度 vs 高黏度的不同策略

                    

這是設計選擇，不是操作失誤，反映了對產品特性的深刻理解：

                    

                        
- **低黏度（如生理食鹽水、緩衝液）：**流動性強，頭壓微小變化就會影響充填精度。必須通氣（不加壓），嚴格控制液位。

                        
- **高黏度（如蛋白質濃縮液，300,000 mPa-s 量級）：**流動阻力大，重力無法有效驅動流體進入泵。需要施加正壓，中間容器可密封加壓。

                    

                    

RPP 是充填高黏度生物製劑（如皮下注射用高濃度 mAb）的首選技術，正是因為其正排量機制可以在施加適度壓力下精確計量，不受黏度影響。

                

                

                    

#### 練習思考 Practice Questions

                    

                        
1. 你正在充填一個 100 mPa-s 的蛋白質溶液，批次中期因操作員誤操作，中間容器液位從 70% 降至 30%。根據頭壓原理，你預期充填重量會如何變化？（增加 / 減少 / 不變）請說明原因。

                        
2. 高黏度產品使用正壓中間容器的風險是什麼？如何在設計中控制這個風險（提示：想想過壓保護裝置和設定值）？

                    

                

            

        

    

    

        

2.2.4

        

            

## Rotary Piston Pump Advantages and Disadvantages

            

旋轉活塞泵的優點與缺點（Table 2.2.4-1）

        

    

    

        

            

                

## 原文內容 Original Text

                

Table 2.2.4-1 identifies the advantages and disadvantages of RPP systems.

                

                
                    Table 2.2.4-1 Advantages and Disadvantages of Rotary Piston Pump Systems
                    
                        
                            
                            
                            
                        
| Characteristic | Advantages | Disadvantages |
| --- | --- | --- |
                    
                    
                        
                            ****
                            
                            
                        
| Viscosity | Compatible with high-viscosity products. | May not be appropriate for shear-sensitive products due to the product lubrication of the pump. |
                        
                            ****
                            
                            
                        
| Durability | Durable, long equipment life when handled properly. | Different materials of construction may experience different handling risks (e.g., ceramic susceptible to sudden changes in temperature, stainless steel susceptible to deformation, glass subject to fracture). |
                        
                            ****
                            
                            
                        
| Single Use | None | Usually not used for SU because of price; however, some manufacturers do offer SUS RPP. |
                        
                            ****
                            
                            
                        
| Changeover | CIP/SIP capable in most designs. | When not purchased with CIP/SIP, aseptic installation requires extensive training and is not an approach that easily fulfills EU GMP Annex 1 objectives. |
                        
                            ****
                            
                            
                        
| Sterilization | SIP is an advantage for SA. | Extra connections are required for CIP/SIP for all models. Some models may require additional valving for CIP/SIP, which adds to the complexity. Whether the additional valves are present or not, it will be required to demonstrate steam penetration to all surfaces. |
                        
                            ****
                            
                            
                        
| Shear Level | None | Significant shear force is exerted on the product due to the compression of the fluid within the cylinder and piston movement. |
                        
                            ****
                            
                            
                        
| Dosing Range | 10-fold filling range for each pump size is typical. | Several pump sizes may be required if wide filling-volume ranges are required, which may restrict campaign flexibility. |
                        
                            ****
                              
  
  
  

                              
  

                        
| Operability | Dosing is stable across the batch, even for campaign manufacture (which may permit statistical weight-check control).                                 Optimized filling curves can control splashing and foaming very effectively while still filling quickly.                                 Separate drives are possible for each pump, which makes individual fine-tuning and operation simpler (including the disconnection of any individual pump mid-run). | Air entrainment in product (e.g., foam, air bubbles, air entrained from mixing or recirculation) can be detrimental to dosing control. Priming is essential for proper dosing control.                                 Separate drives are a more complex design, which is more expensive. Common drives (simpler, less expensive design) are possible but will require physical disconnection of any individual pump in case of failure (e.g., leakage, dose control failure) and does not enable product savings during priming, re-dosing, and emptying. |
                    
                

                

            

            

                

## 導師解析 Tutorial Commentary

                

                    

#### 核心概念：讀懂這張表的方法

                    

這張優缺點表是 PDA 考試的高頻考點。關鍵不是死記，而是理解背後的物理機制：

                    

                        
- **黏度兼容性：**正排量機制不依賴流體流動性 → 高黏度 OK

                        
- **剪切力：**活塞壓縮液體時產生高局部剪切 → 對剪切敏感蛋白質有風險

                        
- **劑量穩定性：**機械行程固定 → 批次始末劑量一致

                        
- **10倍充填範圍：**活塞行程可調，但汽缸容積有上限 → 大範圍需換泵

                    

                

                

                    

#### 重點提示：剪切力 — RPP 最大的產品風險

                    

RPP 在充填過程中對產品施加**顯著的剪切力（significant shear force）**，這是其最主要的產品質量風險：

                    

                        
- 活塞壓縮汽缸內液體時，液體在狹小空間內被強力擠壓

                        
- 活塞-汽缸界面的微小間隙形成高剪切速率區域

                        
- **高風險產品：**單株抗體（mAb）、聚集敏感蛋白質、脂質體

                    

                    

**決策邏輯（來自 Table 2.0-1 的選擇原則）：**

                    

                        
- 高黏度 + 非剪切敏感 → RPP 是首選

                        
- 高黏度 + 剪切敏感 → 需要更仔細的工藝評估，可能選 TP 低壓系統

                        
- 低黏度 + 剪切敏感 → PP 或 TP 低壓系統

                    

                

                

                    

#### 比喻說明：10倍充填範圍 = 同一款發動機不同排氣量

                    

汽車同一系列車款的發動機，可以通過改變汽缸行程來提供 1.5L 到 2.5L 的排氣量。但是如果你想要 5L 的大排量，就需要換一個完全不同的發動機。

                    

RPP 同理：一個泵型號通常可以覆蓋 10 倍的充填範圍（例如 0.5 mL 到 5 mL），但如果你的產品既有 0.1 mL 又有 50 mL 的規格，就需要多種尺寸的泵頭。這在 CDMO 中影響重大——需要備有多套泵，增加庫存和換產成本。

                

                

                    

#### 實務應用 CDMO Scenario

                    

你的 CDMO 客戶有一個皮下注射用高濃度 mAb（180 mg/mL），黏度約 80 mPa-s，但聚集敏感性高（高剪切會導致蛋白質聚集）。客戶要求充填量為 1 mL（固定規格）。

                    

**你的技術選擇建議：**

                    

                        
- 黏度 80 mPa-s → 超過 PP 的上限（約 40-60 mPa-s），PP 不適合

                        
- 聚集敏感 + 高剪切風險 → RPP 需謹慎評估

                        
- 最終建議：**進行剪切相容性研究（shear compatibility study）**，測試 RPP 對該蛋白的聚集影響。同時考慮 TP 低壓系統作為備選方案。

                    

                    

這正是為什麼 Table 2.0-1 中，RPP 被標記為「高黏度且非剪切敏感產品」的最佳選擇。

                

            

        

    

    

        

2.2.5

        

            

## Rotary Piston Pump Sterility Assurance: Microbial and Total Particles

            

無菌保證：微生物與總顆粒控制

        

    

    

        

            

                

## 原文內容 Original Text

                

The RPP, one of the oldest filling technologies for aseptic filling, is a system where the product has some exposure to the filling environment (even though that area is small at the point where the piston inserts in the cylinder). Therefore, the system must be inside the containment (i.e., isolator or RABS) at all times to maintain sterility, unlike TP or PP where some elements may be installed outside of the environment. This positioning is helpful when handling potent or toxic products, as all vulnerable fluid pathway components are within the containment, thereby protecting the operators and the external environment from product exposure.

                

Due to the complexity and expense of the system, RPP is rarely employed as a SUS. Consequently, to avoid product residues being carried over between batches, the RPP must be thoroughly cleaned before use, followed by sterilization and aseptic installation (when not subject to CIP/SIP). RPP systems are capable of CIP/SIP, thereby avoiding aseptic installation. Maintenance of aseptic conditions requires a validated cleaning, sterilization, and setup process as required in EU GMP Annex 1; therefore, new systems should be designed with CIP/SIP in mind.

                

Since it is a seal-free system and product-lubricated, there is limited friction of the piston and pump to form particles. However, care must be taken during priming, when the pump is first empty and then becomes lubricated with product, so that excessive friction does not occur. Shear-sensitive products may experience localized shear due to the product lubrication of the piston and pump and should be evaluated for compatibility with the technology.

                

Due to the tight mechanical tolerance of the piston and cylinder, it is essential to maintain the serialized pairings to prevent friction (unless otherwise specified by the supplier). If the product itself is abrasive (e.g., suspensions, products that tend to crystallize), a ceramic pump can be used instead of a stainless-steel pump. If damage is suspected of any pump, evaluation by the supplier is recommended to ensure that the mechanical tolerances have been maintained and the damage will not continue. Damage to the pumps could result in a loss of accuracy, leaks or drips in severe cases, and/or the formation of particulate.

                

Attention should be given to the airflow above and around the pumps. The mechanical assembly for the drive and pump stroke should be designed to prevent particulate from becoming entrained in the air that flows over the piston and cylinder to avoid it from entering the product stream.

            

            

                

## 導師解析 Tutorial Commentary

                

                    

#### 核心概念：RPP 的無菌保證三大支柱

                    

RPP 的 SA 設計邏輯基於三個相互關聯的支柱：

                    

                        
- **1. 全系統置於無菌屏障內：**因活塞-汽缸界面對環境開放，整個 RPP 必須在隔離器或 RABS 內工作，所有脆弱的流體路徑都在無菌屏障保護下

                        
- **2. CIP/SIP 為新系統設計標準：**EU GMP Annex 1 強調減少無菌環境內的人工操作，CIP/SIP 能力是 RPP 符合現代法規要求的關鍵

                        
- **3. 無密封件 = 低顆粒風險（但需管控引液期）：**穩態操作下，產品潤滑膜減少摩擦；但引液期（乾啟動）是最高顆粒風險時間窗口

                    

                

                

                    

#### 重點提示：引液期（Priming）是最高風險時刻

                    

RPP 在正常充填時，產品扮演潤滑劑角色，活塞-汽缸摩擦力低，顆粒產生量有限。

                    

**但引液期完全不同：**

                    

                        
- 管路充滿空氣，活塞在無潤滑狀態下運動（dry-start）

                        
- 不鏽鋼對不鏽鋼的乾摩擦 → 金屬微粒風險最高

                        
- 摩擦力異常大 → 也可能損傷汽缸內壁精密表面

                    

                    

**控制措施：**

                    

                        
- 在引液之前，確認產品已從中間容器順利流至泵入口

                        
- 考慮慢速引液（降低活塞速度，減少摩擦熱和顆粒）

                        
- 引液期結束後，丟棄引液廢液（不計入批次），避免引液期顆粒進入產品

                    

                

                

                    

#### 比喻說明：引液期 = 汽車冷啟動

                    

汽車在寒冷天氣冷啟動時，機油尚未充分循環潤滑引擎，這段時間引擎磨損最嚴重。有經驗的司機會在暖機後才全速行駛。

                    

RPP 的引液期完全類似：泵「冷啟動」時沒有產品潤滑，是磨損和顆粒產生的高風險期。良好的 SOP 設計應該：(1) 最小化引液所需循環次數，(2) 規定引液廢液的處理方式，(3) 避免引液速度過快。

                

                

                    

#### 氣流設計：防止機械部件顆粒污染產品流

                    

RPP 的驅動機構（齒輪箱、推桿、連接臂）在活塞-汽缸正上方運動，是一個容易被忽略的顆粒來源。

                    

**設計要求：**驅動機構的設計必須確保任何機械磨損產生的顆粒，不會隨 HEPA 層流氣流（unidirectional airflow）被帶入開放的活塞-汽缸界面並進入產品流。

                    

這通常透過以下方式實現：密封式驅動罩（sealed drive housing）、正壓惰性氣體保護、以及氣流方向設計（確保驅動部件在層流「上游」，顆粒隨氣流帶離產品區）。

                

                

                    

#### 練習思考 Practice Questions

                    

                        
1. EU GMP Annex 1 強調「減少無菌環境內的人工干預」。對比 RPP 有 CIP/SIP 和沒有 CIP/SIP 兩種情況，無菌環境內的人工操作步驟各有哪些？哪種設計更符合 Annex 1 精神？

                        
2. 假設 APS（無菌製程模擬）期間，你在 RPP 的引液廢液中發現顆粒計數超標。作為工程師，你會採取哪些調查和改善措施？

                    

                

            

        

    

    

        

2.2.6

        

            

## Rotary Piston Pump Efficiency and Impact on Risk

            

效率與風險影響：統計 IPC 的合理性

        

    

    

        

            

                

## 原文內容 Original Text

                

The RPP is a high-precision dosing system for which the accuracy remains stable throughout the filling process. Even though the system is highly accurate, a periodic IPC is recommended to detect any underfills due to possible air bubbles within the tubing over time (see Sections 5.1–5.1.4).

                

As a consequence, an appropriate rationale should be developed for the timing and frequency of the IPC that reflects the attributes of the product being filled and real-world data, when available.

            

            

                

## 導師解析 Tutorial Commentary

                

                    

#### 核心概念：為何 RPP 允許統計性 IPC？

                    

IPC（製程中管控，In-Process Control）的充填重量檢查，在不同充填技術中有不同的頻率要求：

                    
                        
                            
                            
                            
                        
| 充填技術 | IPC 策略 | 原因 |
| --- | --- | --- |
                        
                            
                            
                            
                        
| PP（蠕動泵） | 建議 100% IPC | 矽膠管磨損 → 劑量持續漂移，需逐支監控 |
                        
                            
                            
                            
                        
| RPP（旋轉活塞泵） | 統計性 IPC 技術上可行 | 機械行程固定，無劑量漂移；只需偵測偶發性氣泡 |
                        
                            
                            
                            
                        
| TP（時間壓力） | 建議定期 IPC | 溫度/壓力波動影響充填量，需定期確認 |
                    

                    

**統計性 IPC（statistical IPC）**是指：不需對每支容器稱重，而是按照統計抽樣計畫（如 AQL 或固定間隔）抽取樣品。這在高速充填線上大幅降低操作負擔。

                

                

                    

#### 重點提示：為何 RPP 仍需要定期 IPC？

                    

即使 RPP 無劑量漂移，仍應保留**定期 IPC**的原因：

                    

                        
- **氣泡（air bubbles）：**管路中偶發的氣泡會導致某一或某幾支容器欠充填（underfill）。氣泡的來源可能是：產品本身的溶解氣體、混合或再循環引入的泡沫、管路接頭的微小洩漏

                        
- **偶發性機械問題：**活塞-汽缸損傷或密封失效雖然罕見，但後果嚴重

                        
- **IPC 頻率的設計原則：**頻率應基於產品特性（起泡性、氣體溶解度）和實際生產數據，而非一刀切

                    

                    

**監管立場：**即使技術上允許統計性 IPC，公司仍需提供充分的科學依據（rationale）支持抽樣頻率設計，並持續監控趨勢。

                

                

                    

#### 比喻說明：統計 IPC vs 100% IPC = 交通監控策略

                    

想像一條高速公路的測速系統：

                    

                        
- **100% IPC（PP）**= 每輛車都拍照測速，因為你不知道哪輛車會超速（劑量漂移不可預測）

                        
- **統計性 IPC（RPP）**= 隨機抽查，因為你知道這條路上大多數司機都守規矩（機械行程固定），偶爾的違規（氣泡）會被抽查捕捉到

                    

                    

關鍵：統計性 IPC 成立的前提是「系統固有穩定性」。一旦發現 RPP 有機械損傷跡象，應立即重新評估 IPC 策略。

                

                

                    

#### 練習思考 Practice Questions

                    

                        
1. 你正在為一個新的 RPP 充填線制定 IPC 計畫。產品是一個高度起泡的蛋白質溶液（在混合和轉移過程中容易夾帶氣泡）。你會如何調整 IPC 頻率相對於一般低起泡性產品？

                        
2. RPP 充填線的統計 IPC 抽樣計畫要求每 30 分鐘抽取 10 支樣品。批次中期出現短暫的管路氣泡事件（操作員觀察到充填針有氣泡噴出，持續約 2 分鐘）。這個事件需要觸發怎樣的調查和處理？

                    

                

            

        

    

    

        

2.2.7

        

            

## Rotary Piston Pump Costs: Initial and Lifecycle

            

成本分析：初始投資與生命週期總擁有成本（TCO）

        

    

    

        

            

                

## 原文內容 Original Text

                

An RPP filler, together with CIP/SIP, is the most expensive dosing system. The CIP/SIP components drive much of the increase in cost. CIP/SIP-capable pumps have additional connections for the flow of the cleaning and sterilization media, with or without valves on each pump, depending upon the system design. There is commonly an additional mechanical drive to bring the pump into the CIP/SIP position.

                

When multiple fill volumes are required, additional pump sizes are commonly necessary, which can add to the system cost. For firms that intend to dedicate equipment to a single product, additional pumps will be required for each product, not just the tubing. Spare pumps are typically maintained to avoid downtime from pump damage.

                

Lifecycle costs are negligible as the pumps have a long lifespan, provided they are protected from damage (e.g., dropping, assembly and setup accidents, mismatch of piston and cylinder, scratching due to abrasive products).

                

Periodic revalidation of SIP will require access to difficult-to-reach locations for temperature-mapping and bioindicator placement, making the revalidation time consuming to complete.

                

TCO calculations would need to include setup, operation, and CIP/SIP as appropriate to the specific system design. Examples of considerations for the TCO calculations may include, but are not limited to, time, utilities, cleaning validation, maintenance, process know-how, training of operators, downtime due to CIP/SIP cycles, and extended times in cases where parallel processing is not possible (such as not being able to run the biodecontamination cycles simultaneously with the CIP/SIP).

            

            

                

## 導師解析 Tutorial Commentary

                

                    

#### 核心概念：RPP 為何是「最貴的充填系統」？

                    

RPP 的高成本來自多個疊加因素：

                    

                        
- **設備本體：**精密加工的不鏽鋼或陶瓷活塞-汽缸組，製造成本高

                        
- **CIP/SIP 附件：**兩個額外接口、可能的額外閥門、第三個機械驅動器（CIP/SIP 位置驅動）

                        
- **多套泵的需求：**不同充填體積需要不同尺寸的泵頭；不同產品如需專用設備，每個產品都需要獨立一套泵

                        
- **備用泵庫存：**為避免泵損傷導致的停線，需備有額外的泵組作為備份

                        
- **SIP 再驗證：**溫度分佈圖（temperature mapping）和生物指示劑（bioindicator）放置困難，驗證耗時

                    

                

                

                    

#### 比喻說明：RPP 成本 = 保時捷 vs 豐田

                    

購買 RPP 充填系統就像選擇保時捷而非豐田：

                    

                        
- **購買價格（保時捷）：**初始投資遠高於同類競爭者（PP、TP）

                        
- **維護成本（保時捷）：**專業技師、高端零件、更頻繁的深度保養

                        
- **性能（保時捷）：**在特定用途（高黏度產品、長期活動穩定性、精準計量）遠超對手

                        
- **TCO 思維：**如果你只是上下班代步（低黏度、短批次、小規模），保時捷不值得；但如果你需要賽道性能（高黏度蛋白、長活動、嚴格精度），保時捷就是正確的投資

                    

                    

**結論：**RPP 的成本只有在產品特性確實需要它的能力時才合理。CDMO 的 TCO 分析必須考量是否真的需要 RPP，還是 PP 或 TP 已經足夠。

                

                

                    

#### TCO 計算框架：RPP 總擁有成本

                    

```

RPP TCO = 初始資本支出 + 生命週期操作成本

初始資本支出：
  + 泵本體（多尺寸）× 數量
  + CIP/SIP 系統（接口、閥門、第三驅動器）
  + 備用泵庫存
  + 安裝調試（FAT + SAT）
  + 初始驗證（IQ/OQ/PQ + SIP 驗證）

生命週期操作成本（年度化）：
  + CIP/SIP 週期佔用時間（停線成本）
  + 公用設施（蒸汽、WFI、壓縮空氣）
  + 清洗驗證維護成本
  + SIP 定期再驗證（溫度映射、生物指示劑）
  + 操作員培訓成本
  + 零件更換（閥門座、墊片、伺服馬達）
  + 若無法並行：生物去污 + CIP/SIP 串聯時間損失

注意：隔離器生物去污（VHP）和 CIP/SIP
不能同時進行時，需串聯排程，顯著增加
批次準備時間，這在 CDMO 高換產環境下
是重要的排程瓶頸。
                    
```

                

                

                    

#### 重點提示：SIP 再驗證的挑戰

                    

RPP 的 SIP 再驗證是所有充填技術中最耗時的，原因：

                    

                        
- 汽缸內部、活塞-汽缸界面、上下接口等部位難以放置熱電偶（thermocouple）

                        
- 每個泵頭的蒸汽穿透性都需要獨立驗證（多泵充填線 = N 倍工作量）

                        
- 生物指示劑（如枯草桿菌孢子）的放置位置受泵結構限制

                        
- 驗證頻率：通常每年或設備重大修改後需要進行

                    

                    

**CDMO 實務建議：**在設備採購前，確認供應商能提供詳細的 SIP 驗證支持文件，並評估是否能在生產線驗證排程中預留足夠時間。

                

                

                    

#### 練習思考 Practice Questions

                    

                        
1. 你的 CDMO 正在評估是否為一個新的高黏度蛋白質客戶採購 RPP 充填線。客戶預期年產量為 50,000 支小瓶，每批 5,000 支，每年 10 批。你需要在 TCO 分析中考慮哪些主要成本項目？PP 在這個場景中是否可行？

                        
2. 如果隔離器的 VHP 生物去污週期需要 4 小時，而 RPP 的 CIP/SIP 週期需要 3 小時，且兩者無法並行，批次準備總時間至少需要多少小時？這對 CDMO 的每日產能排程有什麼影響？

                    

                

            

        

    

    

        

2.2.8

        

            

## Rotary Piston Pump System Complexity: Setup, Handling, and Changeover

            

系統複雜度：雙驅或三驅設計與換產挑戰

        

    

    

        

            

                

## 原文內容 Original Text

                

The RPP is a two- or three-drive system — hub and rotation (two drives) with CIP/SIP positioning (common third drive) — which increases the complexity compared to TP and PP single-drive systems.

                

Setup associated with CIP/SIP for the RPP is more complex due to the number of connections required to ensure flow through all portions of the cylinder chamber. Additional points on setup, operation, and changeover are described in Sections 2.2.2–2.2.7.

            

            

                

## 導師解析 Tutorial Commentary

                

                    

#### 核心概念：RPP 的驅動系統架構

                    

RPP 的機械複雜度源自其需要多個獨立的運動軸：

                    

                        
- **第一軸 — 樞軸（Hub drive）：**控制整個泵組的上下移動（活塞行程的垂直移動），決定充填體積

                        
- **第二軸 — 旋轉（Rotation drive）：**控制汽缸的旋轉，切換入口和出口通路（吸入 → 分配）

                        
- **第三軸 — CIP/SIP 定位（Positioning drive，選配）：**將泵移動到清洗滅菌位置，使活塞-汽缸間隙最大化，確保 CIP/SIP 效果

                    

                    

**對比：**PP 和 TP 基本上只需要一個驅動（馬達壓縮管路，或電磁閥開關），RPP 的三軸設計複雜度遠高於競爭技術。

                

                

                    

#### 比喻說明：三驅系統 = 三軸 CNC 加工機

                    

工廠裡的 CNC 加工機需要 X、Y、Z 三個軸同步控制才能加工複雜零件。多一個軸 = 多一個自由度 = 多一個需要校準和維護的系統。

                    

RPP 的三驅設計類似：每增加一個驅動軸，就增加了一套需要調試、驗證、維護和故障排除的子系統。這直接體現在：更長的 IQ/OQ/PQ 驗證時間、更多的預防性保養項目、更高的技術人員培訓要求，以及故障時更複雜的根本原因分析。

                

                

                    

#### 重點提示：複雜度對 CDMO 的影響

                    

在 CDMO 環境下，系統複雜度的影響尤為顯著：

                    

                        
- **換產時間：**RPP 的換產需要拆卸更多連接、驗證更多組件，換產時間顯著長於 PP

                        
- **培訓成本：**操作員和工程師需要更深入的技術培訓才能獨立操作 RPP

                        
- **故障診斷：**三個驅動系統任何一個出問題，都需要逐一排查，停線時間更長

                        
- **文件要求：**多個驅動軸的校準紀錄、維護日誌、異常記錄都需要獨立管理

                    

                    

這些複雜度因素都應該納入 TCO 計算中（「process know-how」和「training of operators」成本）。

                

                

                    

#### 練習思考 Practice Questions

                    

                        
1. 一條 RPP 充填線有 10 個泵頭，每個泵頭都有獨立的三個驅動器。在 IQ/OQ 階段，你需要驗證多少個驅動器的功能？這對驗證時間表有何影響？

                        
2. 如果你的 CDMO 需要每週換產 3 次（3 個不同客戶產品），你會更傾向於 RPP 還是 PP？從換產時間、交叉污染控制和操作員培訓三個角度分析。

                    

                

            

        

    

    

        

2.2.9

        

            

## Rotary Piston Pump Maintenance and Aging

            

維護與老化：預防性保養計畫與材質管理

        

    

    

        

            

                

## 原文內容 Original Text

                

The additional valves that are needed as part of the CIP/SIP system will require that the valve seats be replaced periodically, along with the gaskets at the CIP/SIP connection points. Lubrication of gear boxes for drivers will be required. The arm(s) that depress(es) and withdraw(s) the pistons will also require lubrication. The pumps have a long life, but they will eventually require replacement.

                

Servo motors should be tested routinely to ensure proper operation and to avoid catastrophic failures that disrupt operations; replacement should be anticipated when servo motors have reached their prescribed run-time limits.

                

There are three main types of materials used for the RPPs: stainless steel with chromium surface treatment, ceramic and glass. If the product is reactive to stainless steel, ceramic or glass pumps can be used. Independent of the type of material of the pumps, if any defect is observed on the surface of the piston, it must be thoroughly analyzed to determine if the entire pump assembly should be taken out of service for repair or replacement.

                

The replacement strategy for servo motors should be provided by the OEM, with appropriate spares kept on hand to avoid unnecessary downtime.

            

            

                

## 導師解析 Tutorial Commentary

                

                    

#### 核心概念：RPP 的預防性保養（PM）清單

                    

RPP 的維護需求比 PP 和 TP 更多，但泵本體壽命很長：

                    
                        
                            
                            
                            
                        
| 維護項目 | 頻率 | 原因 |
| --- | --- | --- |
                        
                            
                            
                            
                        
| 閥門座（valve seats）更換 | 定期（按磨損評估） | CIP/SIP 閥門反覆開關，閥座磨損後密封性降低 |
                        
                            
                            
                            
                        
| CIP/SIP 接口墊片更換 | 定期 | 高溫蒸汽和清洗液的反覆熱循環導致老化 |
                        
                            
                            
                            
                        
| 齒輪箱潤滑 | 按 OEM 規格 | 驅動齒輪潤滑不足 → 磨損加速 → 位置精度下降 |
                        
                            
                            
                            
                        
| 推桿（arm）潤滑 | 按 OEM 規格 | 活塞推拉機構的摩擦部件 |
                        
                            
                            
                            
                        
| 伺服馬達測試/更換 | 按 OEM 壽命規格 | 預防突發失效導致停線 |
                        
                            
                            
                            
                        
| 活塞表面目視檢查 | 每次拆卸清洗時 | 發現刮痕、腐蝕或形變 → 立即送評估 |
                    

                

                

                    

#### 重點提示：伺服馬達管理 — 預防勝於治療

                    

伺服馬達（servo motor）是 RPP 各驅動軸的動力來源，也是最可能突發失效的關鍵零件：

                    

                        
- **計畫性更換：**OEM 提供的馬達額定運行小時數（prescribed run-time limits）是更換的觸發條件，不要等到馬達失效再換

                        
- **備用零件庫存：**每種型號的伺服馬達至少備有一個備件，避免緊急採購的漫長等待時間

                        
- **定期測試：**在 PM 時測試馬達的扭矩輸出、位置精度和溫度，建立趨勢資料

                    

                    

**為何伺服馬達失效是「災難性」的？**充填中途伺服馬達失效 → 充填線立即停止 → 產品在無菌環境中暴露 → 可能需要廢棄整批產品 → 重大財務和客戶影響。

                

                

                    

#### 材質選擇：SS、陶瓷、玻璃的比較

                    
                        
                            
                            
                            
                            
                        
| 材質 | 優點 | 風險 | 適用場景 |
| --- | --- | --- | --- |
                        
                            
                            
                            
                            
                        
| 不鏽鋼+鉻表面處理 | 強度高，耐壓，耐熱衝擊 | 部分金屬敏感產品不適用；容易被研磨性產品刮傷 | 大多數標準藥物製劑 |
                        
                            
                            
                            
                            
                        
| 陶瓷 | 高硬度，耐磨，化學惰性，部分可互換 | 脆，熱衝擊敏感，CIP/SIP 溫度斜率需控制 | 研磨性懸浮液、容易結晶的產品 |
                        
                            
                            
                            
                            
                        
| 玻璃 | 最高化學惰性，透明可目視 | 極脆，任何碰撞風險都很高，碎裂 = 重大異物污染 | 對金屬極度敏感的特殊製劑 |
                    

                

                

                    

#### 比喻說明：活塞表面缺陷管理 = 飛機引擎葉片檢查

                    

航空工程師在每次維護時都會仔細檢查引擎渦輪葉片的每一道刮痕，因為他們知道：今天的一道小裂紋，可能是明天引擎故障的起點。

                    

RPP 活塞表面的管理完全相同：發現任何缺陷（刮傷、腐蝕斑、形變），都不能繼續使用，必須送回 OEM 評估。理由是：活塞表面損傷 → 間隙改變 → 顆粒產生 → 充填精度下降 → 最終可能導致患者安全風險。在製藥行業，「安全飛行」的成本永遠值得支付。

                

                

                    

#### 練習思考 Practice Questions

                    

                        
1. 你的 RPP 充填線有 8 個泵頭，每個泵頭有 3 個伺服馬達（樞軸、旋轉、CIP/SIP 定位），OEM 規定每個馬達的更換週期為 5,000 小時。你的充填線每年運行 2,000 小時。建立一個 5 年的馬達更換計畫，並說明你需要備有多少備用馬達。

                        
2. 充填線維護團隊報告說某個泵頭的活塞表面有一道細小刮痕（長約 2 mm，深度無法目視判斷）。你作為生產管理者，需要如何決策？這個決策需要哪些部門的參與？

                    

                

            

        

    

    

        

2.2.10

        

            

## Rotary Piston Pump Single-Use Versus Reusable Strategy

            

一次性使用 vs 重複使用策略

        

    

    

        

            

                

## 原文內容 Original Text

                

RPP is not typically operated as a SUS due to system complexity and cost. Instead, pistons and cylinders may be dedicated to given products, when required.

            

            

                

## 導師解析 Tutorial Commentary

                

                    

#### 核心概念：為什麼 RPP 幾乎不用一次性？

                    

相比 PP（蠕動泵幾乎 100% 一次性管路）、RPP 採用一次性使用策略的比例極低，原因是雙重的：

                    

                        
- **成本：**精密加工的活塞-汽缸組，製造成本遠高於矽膠管。一次性使用意味著每批都要廢棄這些昂貴的金屬部件，經濟上不可行。

                        
- **複雜度：**SUS 需要與驅動機構的無菌連接介面，RPP 的複雜幾何形狀使這種設計極其困難。

                    

                    

**例外：**部分製造商（OEM）確實提供 SUS RPP 選項，但使用率很低，通常只有在極特殊的高毒性或高價值產品場景下才考慮。

                

                

                    

#### 「產品專用」作為替代策略

                    

當產品之間存在交叉污染風險（例如高活性生物製劑、高毒性分子），不希望進行設備清洗驗證時，CDMO 或製藥廠可以選擇：

                    

                        
- 為每個產品準備一套**專用的活塞-汽缸組**（product-dedicated pistons and cylinders）

                        
- 這套組件不與其他產品共用，避免交叉污染的清洗驗證負擔

                        
- 注意：即使是「產品專用」，仍需要 CIP/SIP 或徹底清洗，只是不需要跨產品的清洗驗證

                    

                    

**與 PP 的比較：**PP 的「產品專用」只需要換一條矽膠管（成本極低），而 RPP 的「產品專用」需要備有整套活塞-汽缸組，成本顯著更高。

                

                

                    

#### 重點提示：SUS 選擇的決策框架

                    

在評估是否需要 SUS 時，問以下問題：

                    

                        
- 清洗驗證的成本是否超過 SUS 耗材的成本？ → 對 RPP 幾乎不可能

                        
- 換產時間是否是瓶頸？SUS 能否顯著縮短換產時間？

                        
- 產品是否有極高的殘留敏感性，使傳統清洗無法達到可接受標準？

                    

                    

對大多數 RPP 應用場景，答案都會指向「重複使用 + CIP/SIP + 產品專用（必要時）」的策略，而非 SUS。

                

                

                    

#### 練習思考 Practice Questions

                    

                        
1. 你的 CDMO 接到一個高活性 mAb（OEL < 1 μg/m³，高職業暴露風險）的充填訂單，且客戶要求零交叉污染風險。你會如何設計活塞-汽缸的使用策略（SUS / 產品專用 / 共用+清洗驗證）？理由是什麼？

                        
2. 某 OEM 聲稱他們的 RPP 支持一次性使用模式，但活塞-汽缸組每支成本約 NT$50,000。你的批次量為 10,000 支小瓶，使用 8 個泵頭。一次性策略下，每批次的泵頭耗材成本是多少？與清洗驗證策略相比，如何決策？

                    

                

            

        

    

    

        

2.2.11

        

            

## Rotary Piston Pump CIP/SIP Feasibility and Pitfalls

            

CIP/SIP 可行性與注意事項：法規合規與多產品靈活性

        

    

    

        

            

                

## 原文內容 Original Text

                

CIP/SIP is feasible for an RPP that is prepared with two additional connections and the ability to flush the piston (see Figure 2.2.1-1). For the two additional connections, additional valves may be required, making the CIP/SIP system more complex.

                

The advantage of the CIP/SIP is a multiuse dosing system over a wide range of product viscosities and less handling inside the containment barrier when the system is equipped with CIP/SIP capability, in compliance with EU regulatory guidance.

            

            

                

## 導師解析 Tutorial Commentary

                

                    

#### 核心概念：CIP/SIP 的三大價值主張

                    

RPP 配備 CIP/SIP 能力，帶來三個關鍵優勢：

                    

                        
- **1. 多產品使用（Multiuse）：**徹底清洗後可充填不同產品，不再需要產品專用設備（除非有特殊要求），提高設備利用率

                        
- **2. 寬黏度範圍兼容：**RPP 本身的正排量機制允許從低黏度水溶液到高黏度蛋白質濃縮液的廣泛應用，加上 CIP/SIP 能力，成為最通用的重複使用充填系統

                        
- **3. 減少無菌屏障內的人工操作：**EU GMP Annex 1 的核心原則之一是最小化無菌環境內的人工干預（interventions）。有 CIP/SIP 意味著操作員不需要進入隔離器或打開 RABS 來拆裝、清洗和重新安裝泵組

                    

                

                

                    

#### 重點提示：EU GMP Annex 1 合規角度

                    

EU GMP Annex 1（2022 年更新版）明確強調：

                    

                        
- 無菌製造應最大限度地減少人工干預

                        
- 設備設計應支持 CCS（污染控制策略）的實施

                        
- 應優先選擇能夠進行就地清洗和滅菌的設備設計

                    

                    

因此，**沒有 CIP/SIP 能力的 RPP 在 EU GMP Annex 1 的框架下難以辯護**（參見 Table 2.2.4-1 缺點欄：「aseptic installation requires extensive training and is not an approach that easily fulfills EU GMP Annex 1 objectives」）。

                    

對新設備採購，CIP/SIP 能力實際上已成為法規要求，而非可選項。

                

                

                    

#### 比喻說明：CIP/SIP RPP = 醫院的手術器械自動清洗消毒機

                    

現代醫院不再要求護士手工清洗和消毒每一把手術器械（這樣既費時又有人為誤差風險）。他們使用自動化清洗消毒機（CSSD），器械直接進機器、走程序、出來就是清潔滅菌狀態。

                    

RPP 配備 CIP/SIP 就是同樣的邏輯：充填完成後，泵不需要拆下來人工清洗，清洗液和蒸汽直接通過已設計好的管路「自動」完成清洗和滅菌。這大幅降低人為操作錯誤風險，也符合現代 GMP 對「減少人工干預」的精神。

                

                

                    

#### CIP/SIP 設計要求清單

                    

```

RPP CIP/SIP 設計要求：

必要條件：
  ✓ 上方接口（upper connection）
  ✓ 下方接口（lower connection）
  ✓ CIP/SIP 定位驅動器（第三軸）
  ✓ 能夠沖洗活塞的設計

可能需要（依設計而定）：
  ± 每個泵頭的額外閥門
  ± 獨立的 CIP 液供給管路
  ± 獨立的 SIP 蒸汽供給管路

驗證要求：
  ✓ 蒸汽穿透至所有表面的證明
  ✓ 清洗有效性驗證（TOC / 殘留分析）
  ✓ 週期性 SIP 再驗證（溫度映射 + BI）
  ✓ 無菌性保證（微生物挑戰數據）
                    
```

                

                

                    

#### 練習思考 Practice Questions

                    

                        
1. 你的 CDMO 正在更換一台老舊的 RPP 充填機（沒有 CIP/SIP 能力），新客戶的 EU 上市申請要求符合 EU GMP Annex 1。在沒有 CIP/SIP 的情況下，你需要如何為監管機構辯護目前的無菌安裝策略？這是否現實可行？

                        
2. CIP/SIP 驗證需要「證明蒸汽穿透到所有表面」。對於 RPP 的上下接口設計，你會在哪些位置放置熱電偶和生物指示劑？列出至少 5 個挑戰點。

                    

                

            

        

    

    

        

2.2.12

        

            

## Rotary Piston Pump Benefits and Risks

            

效益與風險總表（Table 2.2.12-1）

        

    

    

        

            

                

## 原文內容 Original Text

                

Table 2.2.12-1 highlights the common benefits and risks analysis that is pertinent to the use of RPP systems.

                

                
                    Table 2.2.12-1 Benefits and Risks of Rotary Piston Pumps
                    
                        
                            
                            
                        
| Benefits | Risks |
| --- | --- |
                    
                    
                        
                            
                            
                        
| Volumetric nature of the pump creates a reproducible filling accuracy. | Wide ranges of fill volumes will require additional pump sizes. |
                        
                            
                            
                        
| Very flexible system for a wide range of product attributes. | For products that are metal sensitive or that may crystalize, ceramic or glass pumps may be required. |
                        
                            
                            
                        
| Low maintenance | Training for assembly, setup, and operation is essential. |
                        
                            
                            
                        
|  | Cleaning and sterilization validation is necessary and may be more complex than for other systems. |
                    
                

                

            

            

                

## 導師解析 Tutorial Commentary

                

                    

#### 核心概念：解讀效益與風險表

                    

這張表是整個 Section 2.2 的精華濃縮，用四個效益和四個風險總結了 RPP 的核心特性：

                    

**效益側解析：**

                    

                        
- **「容積式精度」：**正排量 → 機械行程決定體積 → 不受黏度/溫度/壓力影響 → 批次始末一致性高

                        
- **「廣泛產品適應性」：**覆蓋低黏度到超高黏度（數十萬 mPa-s）的產品範圍

                        
- **「低維護」：**無密封件磨損（vs PP 的矽膠管），泵本體壽命長

                    

                    

**風險側解析：**

                    

                        
- **「需要多種泵尺寸」：**10倍範圍限制 → 廣泛充填體積需求 → 多套設備投資

                        
- **「金屬敏感/結晶風險」：**需評估產品相容性，可能需要陶瓷或玻璃泵

                        
- **「培訓要求高」：**序列化配對、引液程序、CIP/SIP 操作 → 全都需要深度培訓

                        
- **「驗證複雜」：**CIP/SIP 驗證比 TP 和 PP 更耗時耗力

                    

                

                

                    

#### 實務應用：CDMO 技術選型決策樹

                    

基於整個 Section 2.2 的學習，以下是 CDMO 在面對新產品充填技術選型時的核心決策邏輯：

                    

                        
1. **黏度 > 60 mPa-s？**
                            

                                
    - 是 → 繼續往下

                                
    - 否 → PP 或 TP 可能足夠

                            

                        

                        
2. **產品剪切敏感（如容易聚集的蛋白質）？**
                            

                                
    - 是 → 進行剪切相容性研究，謹慎選擇 RPP

                                
    - 否 → RPP 是高黏度產品的首選

                            

                        

                        
3. **需要長期活動穩定性（多批次活動不重新設定劑量）？**
                            

                                
    - 是 → RPP 優於 PP（無劑量漂移）

                            

                        

                        
4. **CDMO 有足夠資本投資和技術能力支持 RPP？**
                            

                                
    - 是 → 選擇配備 CIP/SIP 的 RPP，做完整 TCO 分析

                                
    - 否 → 重新評估產品組合或考慮技術合作

                            

                        

                    

                

                

                    

#### 重點提示：「低維護」需要正確理解

                    

Table 2.2.12-1 列出「低維護（Low maintenance）」作為效益，這個表述需要正確理解：

                    

                        
- **泵本體維護確實低：**活塞-汽缸組在正確使用下壽命很長，不需要像矽膠管那樣頻繁更換

                        
- **但 CIP/SIP 系統維護不低：**閥門座、墊片、伺服馬達都有定期更換需求

                        
- **「低維護」是相對概念：**相對於 PP 每批更換矽膠管的耗材成本，RPP 的零件更換頻率確實更低

                    

                    

這個「低維護」不應被誤解為 RPP 幾乎不需要維護——實際上，RPP 需要高水準的預防性保養計畫和訓練有素的工程師團隊。

                

                

                    

#### 練習思考 Practice Questions

                    

                        
1. 根據 Table 2.2.12-1，RPP 的「低維護」優勢和 PP 的「低初始成本」優勢，在一個每月需要換產 4 次、同時充填 3 種不同黏度產品（2 mPa-s、50 mPa-s、300 mPa-s）的 CDMO 場景中，哪種技術的 TCO 可能更低？請說明你的分析邏輯。

                        
2. Table 2.2.12-1 中提到「廣泛產品屬性的靈活系統」。列出 RPP 的靈活性邊界在哪裡（即：哪些產品特性會讓 RPP 不再靈活）？

                    

                

            

        

    

    

### 本節重點回顧 Section 2.2 Summary — Rotary Piston Pump

    

        
- **工作原理：**正排量泵，活塞-汽缸結構，產品潤滑，四段劑量循環（吸入→旋轉→分配→復位）

        
- **最關鍵約束：**活塞-汽缸界面「開放」於環境 → RPP 必須 100% 置於隔離器或 RABS 內（與 PP/TP/DP 不同）

        
- **無劑量漂移：**機械行程固定，無矽膠管磨損問題 → 統計性 IPC 技術上可行（但仍建議定期 IPC 偵測氣泡）

        
- **CIP/SIP 設計：**需要上下兩個額外接口 + CIP/SIP 位置驅動器；比 TP 更複雜；EU GMP Annex 1 合規的關鍵

        
- **序列化配對：**活塞-汽缸必須按序列號組裝，永不混配（陶瓷例外）；「婚戒原則」

        
- **最昂貴系統：**RPP + CIP/SIP 是所有充填系統中 TCO 最高的；需要全面的 TCO 分析才能判斷投資合理性

        
- **三驅動系統：**樞軸 + 旋轉 + CIP/SIP 定位（2或3個驅動），複雜度遠高於 PP/TP 的單驅設計

        
- **材質選擇：**不鏽鋼（標準）、陶瓷（研磨性/結晶產品）、玻璃（金屬敏感產品）；陶瓷脆，需防熱衝擊

        
- **CDMO 選擇時機：**高黏度（>60 mPa-s）+ 非剪切敏感 + 需要長期批次穩定性 → RPP 是不二之選

        
- **引液期風險：**乾啟動（dry-start）是最高顆粒風險時刻，需要謹慎的引液 SOP 和廢液處理

    

    

### 關鍵對比表：RPP vs PP vs TP — 選型決策摘要

    

    
        
            
                
                
                
                
            
| 特性 | RPP（旋轉活塞泵） | PP（蠕動泵） | TP（時間壓力） |
| --- | --- | --- | --- |
        
        
            
                ****
                
                
                
            
| 系統位置 | 必須在隔離器/RABS 內 | 泵頭可在屏障外 | 壓力容器可在屏障外 |
            
                ****
                
                
                
            
| 黏度上限 | 極高（300,000+ mPa-s） | 低至中（~60 mPa-s） | 低（高黏度不適合） |
            
                ****
                
                
                
            
| 劑量漂移 | 無 | 有（管路磨損） | 有（溫度/壓力波動） |
            
                ****
                
                
                
            
| 推薦 IPC 策略 | 統計性 IPC（技術可行） | 100% IPC（推薦） | 定期 IPC |
            
                ****
                
                
                
            
| 剪切力 | 高 | 中 | 低 |
            
                ****
                
                
                
            
| CIP/SIP 複雜度 | 最高（額外接口+驅動） | 低（換管即可） | 中（標準設計） |
            
                ****
                
                
                
            
| 初始成本 | 最高 | 低 | 中 |
            
                ****
                
                
                
            
| 一次性使用 | 極少（成本過高） | 非常普遍 | 不常見（壓力容器昂貴） |
            
                ****
                
                
                
            
| 最佳適用場景 | 高黏度蛋白、長期活動穩定性 | 低黏度、多品種、快速換產 | 低剪切敏感產品、廣充填範圍 |
        
    

    

    

PDA Manufacturing Technology Guide No. 1: Aseptic Filling, Engineering, and Operation (2025)

    

Section 2.2 — Rotary Piston Pump Technology | 旋轉活塞泵技術

    

Educational bilingual commentary prepared for CDMO professional development. Original content © 2025 Parenteral Drug Association, Inc.

↑

## Topic 2C: TP & DP + Needle 時壓/膜片+針頭 (p54-p70)

# Section 2C: Liquid Filling Technologies — Time Pressure & Diaphragm Pump + Needle Design

    

第2C節：液體充填技術 — 時間壓力充填、滾動膜片泵 與 針頭設計

    

PDA Manufacturing Technology Guide No. 1 | doc p54 - p70

    

### 本章學習目標

    

        
- 理解 Time Pressure (TP，時間壓力充填) 的操作原理：如何以壓力+時間控制充填量，以及其 CIP/SIP 優勢與溫度補償的必要性

        
- 掌握 Rolling Diaphragm Pump (DP，滾動膜片泵) 的獨特封閉式設計，理解膜片如何隔離機械部件與無菌液體路徑

        
- 比較 TP 與 DP 在黏度、剪切力、SU 選項、維護複雜度與 TCO 上的差異，並能應用於 CDMO 設備選型

        
- 識別各種填充針頭設計（開放式、封套式、閉合式）的適用產品特性與 SA 考量，並理解針頭安裝對無菌保證的影響

        
- 在 TP / DP / 針頭選擇中持續強化決策層級：無菌保證 > 產品 CQAs > 商業彈性

    

    

### 本節目錄

    

        2.3 Time Pressure
        2.3.1 TP Design & Setup
        2.3.2 TP Adv/Disadv
        2.3.3 TP Sterility
        2.3.4 TP Efficiency
        2.3.5 TP Costs
        2.3.6 TP Complexity
        2.3.7–2.3.10 TP Maint./SU/CIP/Benefits
        2.4 Rolling Diaphragm Pump
        2.4.1 DP Design
        2.4.2 DP Setup
        2.4.3 DP Adv/Disadv
        2.4.4 DP Sterility
        2.4.5 DP Efficiency
        2.4.6 DP Costs
        2.4.7–2.4.11 DP Complex./Maint./SU/CIP/Benefits
        3.0 Needle Design
    

2.3 Aseptic Filling Technologies: Time Pressure (時間壓力充填)

    

        

## 原文內容 Original Text

        

TP filling systems get their name because a slight overpressure is applied to the bulk or intermediate product vessel and a pinch valve is opened and closed for a specified time to control the flow of the product to the filling needle. The "pressure" that is applied to the bulk vessel makes use of air, inert gas, or gravity.

        

There are high-pressure systems where product flows through an orifice plate placed along the fluid pathway to achieve the intended accuracy. There are also low-pressure systems that operate without an orifice plate and are designed for a gentler product flow (e.g., lower shear force, lower foaming, slower). The selection of the system is best achieved through knowledge of the product attributes and the desired filling speed.

        

The TP dosing system has an independent control (typically a high-speed programmable logic controller (PLC)), that calculates the actual time required for filling from the current pressure and temperature. Without this independent control, a pure time control would lead to deviations in the filling accuracy when the pressure or temperature changes. Temperature fluctuation influences are greater with low-pressure systems.

    

    

        

## 導師解析 Tutorial Commentary

        

            

#### 核心概念解析 Key Concepts

            

**Time Pressure (時間壓力充填):** 不使用機械泵推動液體，而是對儲藥容器施加微小正壓，再以 **pinch valve（夾管閥）** 開關精確控制流出時間，以時間 × 壓力 = 充填體積的方式達到劑量控制。

            

**Orifice plate（孔徑板）:** 高壓系統中在液體路徑上設置的限流孔，透過精確的孔徑確保流量一致性，是 TP 高精度的核心元件之一。

            

**PLC（可程式邏輯控制器）:** TP 系統的「大腦」。因充填量受溫度和壓力影響，PLC 即時感測兩者並動態調整充填時間，補償任何偏差。

        

        

            

#### 比喻說明 Analogy

            

TP 充填就像用水塔供水的咖啡機：水塔保持固定水壓，你按下出水按鈕（開啟 pinch valve）並計時，固定時間後關閉即得到固定量的咖啡。高壓系統加了孔徑板就像在出水口裝了精密噴嘴，使流量更一致；低壓系統則像拿下噴嘴後以較慢速度出水。

            

PLC 是那個知道「今天天氣冷水密度稍高、昨天熱一點」而自動調整出水時間的智慧控制模組。

        

        

            

#### 重點提示 Key Notes

            

TP 系統最大的弱點是對**溫度波動敏感**——長時間充填或中途停機都可能因溫度漂移影響精度。這也是 PLC 溫度補償曲線（temperature compensation curve）必須在產品評估階段確立的原因。

            

TP 是四種充填技術中 **CIP/SIP 最容易整合**的系統，也是唯一可設計成幾乎全封閉的系統（無產品與機械件直接接觸）。這對無菌保證至關重要。

        

        

            

#### 練習思考 Practice Questions

            

                
1. TP 系統為何需要 PLC 即時計算，而不能僅靠固定時間控制充填？

                
2. 高壓 TP 與低壓 TP 各適用什麼產品特性？選擇時如何決定？

            

        

    

2.3.1 Time Pressure Design Configuration, Setup, and Positioning

    

        

## 原文內容 Original Text

        

Figure 2.3.1-1 depicts a TP filling system from the intermediate vessel to the filling needle. The TP filler may be equipped with an intermediate vessel and manifold if desired. Not shown is the proportional pressure control valve and optional orifice plate.

        

Note that the pressure vessel and pinch valve may be located outside of the aseptic barrier, but the risk of leaks at the pinch valves may make placement within the aseptic barrier advantageous.

        

            

                Figure 2.3.1-1: Diagram of a Time Pressure Filling System  

                [Intermediate vessel → manifold → proportional pressure valve → orifice plate → pinch valve → filling needle]
            

        

    

    

        

## 導師解析 Tutorial Commentary

        

            

#### 核心概念解析 Key Concepts

            

**Intermediate vessel（中間容器）:** 介於主批次容器（bulk vessel）與充填針頭之間的緩衝容器。TP 系統中它承受正壓，並透過 manifold（歧管）分配液體至各充填站。不一定每個 TP 系統都需要中間容器。

            

**Pinch valve 在屏障內外的定位:** 雖然 pinch valve 可在屏障外（降低無菌區複雜度），但洩漏風險使屏障內安裝更有 SA 優勢——這是「無菌保證 > 操作便利性」的典型應用。

        

        

            

#### 重點提示 Key Notes

            

TP 系統的另一個優勢是**系統彈性**：只需更換孔徑板、管路和針頭（換件很少），即可覆蓋很廣的充填體積範圍，相對 RPP 需要整組更換泵。這對 CDMO 多品種生產非常有價值。

        

        

            

#### 實務應用 Practical Application

            

CDMO 場景：如果你的客戶要求在同一條線上充填 0.5 mL 到 50 mL 的不同配方，TP 系統只需換不同孔徑板和針頭即可覆蓋整個範圍，而 RPP 可能需要更換整組泵頭。TP 的換規格成本（changeover cost）遠低於 RPP。

        

    

2.3.2 Time Pressure Advantages and Disadvantages

    

        

## 原文內容 Original Text

        

Table 2.3.2-1 identifies the advantages and disadvantages of TP filling systems.

        

        
            
                
                
                
            
| Characteristic | Advantages | Disadvantages |
| --- | --- | --- |
            
                
                
                
            
| Viscosity | None | Not good for high-viscosity products. |
            
                
                
                
            
| Durability | Product not in direct contact with moving parts; only moving parts are the pinch valves. | Hose transiting the pinch valve is subject to wear and must be changed. |
            
                
                
                
            
| Single Use | None | Usually not adopted for SU because bulk vessels and fluid pathway must be pressure-rated. |
            
                
                
                
            
| Changeover | CIP/SIP capable in most designs. Only tubing, orifice, and filling needle to be changed when changing filling recipe. | Only a small filling range is possible with each orifice/filling needle combination. Change parts are required for greater flexibility. |
            
                
                
                
            
| Sterilization | System is well suited for CIP/SIP. | None |
            
                
                
                
            
| Shear Level | Very gentle, low shear technology. | Compatibility of the product with the selected orifice and applied pressure should be confirmed due to the potential for shear at the orifice when one is used. |
            
                
                
                
            
| Dosing Range | Wide dosing volumes, achievable just by changing orifice, tubing, and needle. | Design should take into account any requirements for large-volume fills (which will take more time to fill). |
            
                
                
                
            
| Operability | None | Tubing at the pinch valve deforms over time, which can modify flow characteristics, potentially impacting dosing accuracy for long fills. Filling accuracy depends upon pressure and temperature variation; therefore, temperature compensation is typically necessary. Suck back capability is limited and may not be sufficient, limiting dosing accuracy for some product types. |
        

        

    

    

        

## 導師解析 Tutorial Commentary

        

            

#### 核心概念解析 Key Concepts

            

**Suck back（回吸功能）:** 充填結束時針頭迅速負壓回收末端液滴，防止滴液。TP 系統的回吸能力有限（透過快速關閉 pinch valve 模擬），且快速關閉會加速管路老化，是 TP 的固有限制。

            

**SU 不適合 TP 的原因:** TP 系統的儲壓容器（intermediate vessel）需承受正壓，使用一次性耐壓袋成本很高，且結構較複雜。PP 和 DP 才是 SU 的主要選項。

        

        

            

#### 重點提示 Key Notes

            

**TP 的核心限制：低黏度 only。** 高黏度產品流動阻力大，依賴壓力和時間的 TP 系統無法精準控制。此類產品應優先考慮 RPP 或 DP。

            

Pinch valve 管路（silicone tubing）的磨損週期必須經過**風險評估並驗證**，建立明確的更換時程，否則顆粒污染（particulate contamination）風險累積。

        

        

            

#### 公式與概念 Conceptual Formula

            

```
充填量 ≈ 壓力 × 時間 × 孔徑係數
（Volume ∝ Pressure × Time × Orifice factor）

PLC 補償邏輯：
  測量實際溫度 T 和壓力 P
  計算修正後的開閥時間 t_adj
  使充填量 = 目標體積
```

        

        

            

#### 練習思考 Practice Questions

            

                
1. 為什麼 TP 系統通常不適合 SUS（Single-Use System）？

                
2. 如果充填線在充填過程中發生溫度上升（例如房間空調故障），TP 系統會如何響應？如果沒有 PLC 補償，結果會是什麼？

            

        

    

2.3.3 Time Pressure Sterility Assurance: Microbial and Total Particles

    

        

## 原文內容 Original Text

        

TP filling systems are typically designed for CIP/SIP. The system is fully closed, therefore, there is no risk of extraneous microbial or particulate contamination; however, exercising the pinch valve during filling may generate particles in the tubing. As a consequence, knowing the wear profile of the tubing is important to ensure the replacement of the tubing before particulate-generation can occur. Regular visual inspection is required and should be based on a risk assessment.

        

Small breaks in the hose, especially at the point of the pinch valve, may not be immediately identified with TP technology, although this risk is less than PP systems because there is less mechanical stress and fewer tubing connections overall. If a 100% IPC system is not in place for dose control, small breaks may go undetected for a period of time until the next statistical IPC. As a consequence, leakage could result in contamination of this "closed system." This may be problematic with potent or toxic products and may require reconsideration of the installation position to locate the mechanical components within the containment barrier.

    

    

        

## 導師解析 Tutorial Commentary

        

            

#### 核心概念解析 Key Concepts

            

**Wear profile（磨損曲線）:** 透過實際使用數據（充填次數、清洗次數）建立的管路壽命評估曲線。必須在驗證階段確立，並訂立強制更換週期，以防止 particulate generation（顆粒產生）。

            

**封閉系統（closed system）的雙面性:** TP 是相對封閉的系統，正常操作下無菌保證良好；但一旦管路破損，洩漏本身就是污染風險，且破損前系統無警示。

        

        

            

#### 重點提示 Key Notes

            

**SA 決策要點：**高毒性/高活性（potent/toxic）產品使用 TP 時，pinch valve 必須置於隔離器（isolator）或 RABS 屏障**內部**，以防洩漏時危害操作人員或污染環境——這是監管要求，不是選項。

            

定期目視檢查管路是 TP 系統的強制 SOP 項目，應以**風險評估**確定檢查頻率，並記錄於 GDocP 文件中。

        

        

            

#### 實務應用 Practical Application

            

CDMO 場景：當客戶帶來高活性藥物（HPAPI）充填委託時，你的 TP 系統設計評估第一個問題應該是：「pinch valve 在隔離器內還是外？」若在外，需要在合約簽署前評估是否需要設備改造，這直接影響報價和交期。無菌保證永遠是第一優先。

        

    

2.3.4 Time Pressure Efficiency and Impact on Risk

    

        

## 原文內容 Original Text

        

The TP filling system is a high-precision dosing system that depends on the flow behavior. The flow is influenced by temperature and pressure inside the intermediate vessel, which is the reason for the high-speed PLC controller. Changes in temperature, such as during long fill operations or during interruptions in filling, should be avoided.

        

Even though the system is highly accurate, a periodic IPC is recommended to detect underfills due to possible air bubbles within the tubing over time (which can be exacerbated by the mandatory use of over pressure to control filling) (see Sections 5.1–5.1.4). Therefore, an appropriate rationale should be developed for the timing and frequency of the IPC that reflects the attributes of the product being filled and real-world data, when available.

        

TP systems are routinely CIP/SIP-capable, as a result there is a limited risk of contamination impacting the filling operation during the setup of the system. Containment is also simplified with TP filler for highly potent products if the pinch valves are placed within the isolator. Hose breakage with TP fillers is a greater risk than with other filling systems due to the stressors placed on the hoses within the pinch valves, though the stressors on the tubing are less than with PPs. Detection systems for leaks can be placed within the isolator to alert if a breach in tubing occurs.

    

    

        

## 導師解析 Tutorial Commentary

        

            

#### 重點提示 Key Notes

            

**空氣泡（air bubbles）是 TP 精度的隱形殺手：**正壓系統可能將微量空氣帶入管路，空泡通過充填針時導致短充（underfill）。這是 TP 即使精度高也**仍需要定期 IPC（統計式重量檢測）**的根本原因。

            

長時間充填或生產中斷後的**溫度恢復期**是 TP 精度的高風險窗口，應在製程設計中以 SOP 管控（例如中斷後必須等待溫度穩定並做 IPC 確認）。

        

        

            

#### 核心概念解析 Key Concepts

            

**IPC 頻率的風險評估：**TP 系統的 IPC 頻率應根據「產品的流動特性（viscosity、surface tension）」和「歷史充填數據」制定，並記錄合理化依據（rationale）。過於頻繁增加成本，過於稀疏增加漏充風險——這是 QRM（品質風險管理）的典型應用。

        

        

            

#### 練習思考 Practice Questions

            

                
1. 為何在 TP 系統中使用正壓（overpressure）反而可能加劇空氣泡問題？如何在系統設計上降低此風險？

                
2. TP 系統的 IPC 頻率應如何確定？影響決策的關鍵因素有哪些？

            

        

    

2.3.5 Time Pressure Costs: Initial and Lifecycle

    

        

## 原文內容 Original Text

        

The initial cost of a TP dosing system is similar to a PP or RPP for the system itself (excluding CIP/SIP that may or may not be present). The initial capital cost of a CIP/SIP is high, but comparable to the lifecycle costs associated with the SUS, such as recurring expense of the disposables with the PP.

        

TCO calculations would need to include setup, operation, and CIP/SIP as appropriate to the system design. Examples of considerations for the TCO calculations may include, but are not limited to, time, utilities, cleaning validation, maintenance, process know-how, training of operators, downtime due to CIP/SIP cycles, and extended times in cases where parallel processing is not possible (such as not being able to run the biodecontamination cycle simultaneously with the CIP/SIP).

        

If multiple fill-volumes are required, additional filling-size parts consisting of orifice, tubing, and a filling needle are necessary.

        

Lifecycle costs are negligible because the drives have a long lifespan. If dedicated equipment is necessary, for example, at a contract manufacturing organization, changing the intermediate vessel and piping may be difficult, but would be required in addition to the format-size parts (e.g., orifice, tubing, needles).

    

    

        

## 導師解析 Tutorial Commentary

        

            

#### 公式與計算 TCO Framework

            

```
TP 系統 TCO =
  初始資本成本（設備 + CIP/SIP）
  + 驗證成本（清潔驗證、SIP 驗證）
  + 年度運營成本（管路消耗品、校驗）
  + CIP/SIP 停機成本（每次週期時間 × 批次機會成本）
  + 換規格時間（orifice + needle 更換）
  + 人員培訓成本

vs. PP + SUS：
  低初始成本 + 高持續性耗材成本（每批）

結論：高產量/多批次 → TP CIP/SIP 更划算
```

        

        

            

#### 重點提示 Key Notes

            

TP 的**換型成本（changeover cost）極低**——僅需更換孔徑板、管路和針頭，通常幾十分鐘內完成。這對 CDMO 多品種少批量生產是重要優勢，可縮短設備佔用時間，提高產線利用率。

            

注意 **biodecontamination 與 CIP/SIP 無法同時進行**的問題：在隔離器環境中，兩個週期必須先後執行，這會顯著增加批次間的周轉時間（turnaround time），必須納入生產計劃。

        

    

2.3.6–2.3.10 TP System Complexity, Maintenance, SU, CIP/SIP & Benefits/Risks

    

        

## 原文內容 Original Text

        

### 2.3.6 Time Pressure System Complexity: Setup, Handling, and Changeover

        

The system design and fluid pathway are simple and straightforward with the TP; however, a fast PLC must calculate the temperature and pressure in real time as provided by sensors. The temperature compensation requires a curve for filling each product at different product temperatures. This product-dependent fill-curve must be established during product evaluation so that the system is able to fill with high accuracy.

        

Setup is simple; such format parts as the orifice, tubing, and needle must be changed, but they are typically assembled prior to CIP/SIP.

        

### 2.3.7 Time Pressure Maintenance and Aging

        

The pinch valves represent the only moving part of the dosing system requiring routine maintenance. A replacement strategy of pinch-valve motors should be provided by the OEM to avoid unnecessary downtimes or potential loss of batches. Sensors for temperature and pressure must be calibrated.

        

The system has limited wear-parts, other than the tubing. Sensors for temperature and pressure may require replacement over time. Because the system is subjected to overpressure, the gaskets and pressure relief valve will require periodic replacement.

        

### 2.3.8 Time Pressure Single-Use Versus Reusable Strategy

        

Usually, a TP dosing system is not suitable as a SUS due to the expense of the pressure-rated intermediate vessel and fluid path. As a consequence, most systems are reusable and will require cleaning as well as sterilization validation.

        

### 2.3.9 Time Pressure Clean-In-Place/Sterilize-In-Place Feasibility and Pitfalls

        

The TP dosing system is well suited for CIP/SIP, which is the typical design standard. There is limited changeover required between different filling volumes and products. When performing CIP/SIP, there is a small risk that the orifice will become obstructed, especially after the silicone tubing has been replaced. Typically, prior to the start of the CIP/SIP, a leak test will be performed, but this test will not confirm that the orifice is not obstructed. Therefore, the CIP/SIP process should be monitored to ensure no obstruction, as the sensor for conductivity and temperature are located at the combined exit flow from the needles.

        

### 2.3.10 Time Pressure Benefits and Risks

        

Table 2.3.10-1 highlights the common benefits and risks analysis that is pertinent to the use of TP filling systems.

        

        
            
| Benefits | Risks |
| --- | --- |
            
                
                
            
| System is easily integrated with CIP/SIP (more readily than with the other filling technologies). | Product characteristics must be known to establish temperature/pressure filling curve. |
            
                
                
            
| High dosing accuracy. | Training for assembly is necessary. |
            
                
                
            
| Low maintenance (limited moving parts). | Cleaning validation is necessary, and often CIP/SIP is an additional expenditure. |
            
                
                
            
| Wide range of fill volumes with limited change parts. | Rapid temperature or rapid pressure changes to the product may affect accuracy (high-speed PLC control is used to monitor the changes and dynamically adjust the fill). |
            
                
                
            
| Limited consumables waste in comparison to SUS, such as with PP. | For products requiring active cooling, exposed sections of the fluid pathway that are not actively cooled may influence filling accuracy. |
        

        

    

    

        

## 導師解析 Tutorial Commentary

        

            

#### 核心概念解析 Key Concepts

            

**溫度補償曲線（temperature compensation curve）:** 針對每個產品、在不同溫度下預先測試充填量並建立校正係數曲線。這是 TP 系統在技術轉移（tech transfer）時的關鍵交付物之一，必須在產品評估階段完成。

            

**孔徑堵塞（orifice obstruction）:** 更換矽膠管後，切割端若未對齊可能造成孔徑部分堵塞。這個微小的細節會讓整個 CIP/SIP 週期變成無效——因為洗滌液無法充分流過，監控傳感器又設在出口側（無法區分是哪個孔徑堵塞）。需要在換管後加入額外的確認步驟。

        

        

            

#### 重點提示 Key Notes

            

TP 系統的**維護簡單性**是其最大商業優勢之一：唯一的運動部件是 pinch valve。壓力容器的 gasket 和 pressure relief valve 也需定期更換，但這些都是標準耗材，成本低且可預測。

            

對於需要**主動冷卻**的低溫充填產品（如蛋白質生物製劑），TP 液體路徑中任何未冷卻的外露段都可能造成局部溫升，影響充填精度——這是系統設計時必須考量的 CPP。

        

        

            

#### 練習思考 Practice Questions

            

                
1. 為何 TP 系統是四種充填技術中 CIP/SIP「最容易整合」的？其結構特性的哪一點使其優於 RPP？

                
2. 如果你要在 CDMO 新建一條 TP 充填線，你會要求 OEM 提供哪些預防性維護計劃（preventive maintenance plan）？至少列出3個關鍵項目。

            

        

    

2.4 Aseptic Filling Technologies: Rolling Diaphragm Pump (滾動膜片泵)

    

        

## 原文內容 Original Text

        

The rolling diaphragm pump (DP) is a positive displacement pump, which generally incorporates a piston-driven pump unit that includes a piston, a fluid chamber, and a body (see Figure 2.4-1). The pump unit is used, in combination with timed pinch valves, to direct fluid travel through the pump chamber and the tubing.

        

In the case of the rolling diaphragm pump, a rolling diaphragm is used to separate the piston drive unit from the fluid chamber. This is to eliminate small but undesirable particulate contamination generated by piston and cylinder friction. In addition, the diaphragm totally separates the mechanical action of the piston and cylinder from the fluid pathway, making it a closed system.

        

            

                Figure 2.4-1: External and Cut-Away Views of a Rolling Diaphragm Pump  

                [Piston drive unit | Rolling diaphragm (separator) | Fluid chamber | Pinch valves at inlet/outlet]
            

        

    

    

        

## 導師解析 Tutorial Commentary

        

            

#### 核心概念解析 Key Concepts

            

**Positive displacement pump（正排量泵）:** 每個行程推出固定體積的液體，與流量壓力相對無關，劑量精度高。DP 透過活塞推動滾動膜片排出精確體積，屬於此類別。

            

**Rolling diaphragm（滾動膜片）:** DP 的核心創新。膜片像手套翻轉般滾動，完全隔離活塞機械部件與液體接觸面，使液體路徑沒有金屬摩擦，顆粒風險極低，同時維持系統封閉性。

            

**Pinch valve 的角色:** DP 以 pinch valve 控制進液和排液方向（與 RPP 不同，RPP 靠活塞位置切換進出口）。這使 DP 結構更簡單，清潔更容易。

        

        

            

#### 比喻說明 Analogy

            

想像擠牙膏：你的手（活塞）推動牙膏（液體），牙膏管（滾動膜片）完全隔離你的手與牙膏內容物。你的手再髒，牙膏也是乾淨的。DP 就是這樣的設計理念——機械力透過膜片傳遞，但機械部件永不接觸產品。

            

相比之下，RPP 就像把活塞直接插進液體中攪拌——雖然精度高，但有摩擦顆粒和剪切力的隱憂。

        

        

            

#### 重點提示 Key Notes

            

DP 的**最核心 SA 優勢**：完全封閉的液體路徑（closed fluid path），機械摩擦顆粒無法進入產品，是四種充填技術中顆粒風險最低的正排量系統。這對注射劑的顆粒物（particulate matter）合規至關重要。

        

    

2.4.1 Rolling Diaphragm Pump Design Configuration

    

        

## 原文內容 Original Text

        

The use of a rolling diaphragm provides a number of advantages when used in a positive displacement pump. The rolling diaphragm provides a leak-proof seal for the fluid within the pump, separating the fluid pathway from the mechanical components. It also ensures gentle handling of the fluid to be delivered by minimizing the shearing of molecules within the pump head that may otherwise occur using a product-contact piston drive unit to drive the liquid.

        

The pump includes a pneumatic port, providing an outlet for a vacuum connection that controls withdrawal of the piston drive unit, leading to high dosing accuracy. This vacuum source accomplishes the additional function of placing proper differential pressure across the diaphragm to hold it firmly in position. This feature makes the mechanical pump actuation system extremely repeatable by not using a push-pull linkage.

        

Figure 2.4.1-1 depicts the cut-away image of a DP stroke from suction to discharge. The DP suction and discharge are controlled by pinch valves (unlike the RPP, which makes use of the configuration of the piston to alternately block and expose the respective ports).

        

            

                Figure 2.4.1-1: Progression Images of a Rolling Diaphragm Pump Stroke  

                [Suction phase: inlet pinch open, outlet pinch closed, diaphragm expands → Discharge phase: inlet pinch closed, outlet pinch open, diaphragm compresses]
            

        

    

    

        

## 導師解析 Tutorial Commentary

        

            

#### 核心概念解析 Key Concepts

            

**真空控制（vacuum control）的雙重功能:**

            

                
- **功能1：**控制活塞回程（suction 階段），真空將活塞拉回，而非機械推拉，使重複精度極高。

                
- **功能2：**在膜片兩側維持適當的差壓，防止膜片位移或皺摺（wrinkling），確保膜片始終緊貼活塞。

            

            

這兩個功能合一，解釋了為何 DP **離開真空供應就不能操作**——沒有真空，膜片失去定位，充填精度立刻受損，甚至導致膜片損壞。

        

        

            

#### 重點提示 Key Notes

            

**關鍵操作警告：**DP 在安裝完成但**尚未連接真空**的狀態下（例如從準備區搬運到充填線途中），若活塞意外移動，膜片會發生皺摺（wrinkle），導致衝程不一致和充填精度下降。

            

這意味著培訓和 SOP 必須明確規定：DP 搬運期間的活塞保護措施，以及安裝後連接真空前的確認步驟。

        

        

            

#### 練習思考 Practice Questions

            

                
1. 為何 DP 在沒有真空連接的情況下不能移動活塞？真空在 DP 中同時扮演哪兩個角色？

                
2. DP 與 RPP 在控制吸液/排液方向的機制上有何根本差異？

            

        

    

2.4.2 Rolling Diaphragm Pump Setup and System Positioning

    

        

## 原文內容 Original Text

        

With the DP system, product can be fed directly from a pressurized supply vessel via manifold to the rolling diaphragm pumps. Alternatively, the pressurized supply vessel may feed an intermediate vessel or bag that uses gravity feed to supply the product to the manifold and then to the rolling DPs.

        

Figure 2.4.2-1 depicts a possible configuration for the DP fluid pathway. Notably, the pumps are depicted within the aseptic barrier, but installation outside of the barrier is possible and may be preferable.

        

            

                Figure 2.4.2-1: Fluid Pathway for Rolling Diaphragm Pump Systems  

                [Bulk vessel → (pressurized) → manifold → rolling DP pumps → filling needles. Pumps shown inside aseptic barrier; external installation also feasible.]
            

        

    

    

        

## 導師解析 Tutorial Commentary

        

            

#### 核心概念解析 Key Concepts

            

**泵在屏障外安裝的 SA 邏輯：**DP 液體路徑完全封閉（closed fluid path），機械部件在膜片外側，因此泵體可以安裝在隔離器**外部**，僅讓充填針頭和最末端的液體路徑留在無菌區內。這是 DP 相對於 RPP 的重要 SA 優勢——機械部件外置減少了無菌區的複雜度和干擾源。

        

        

            

#### 實務應用 Practical Application

            

CDMO 設計考量：將 DP 泵體安裝在隔離器外部可以顯著降低無菌區的維護複雜度（pump service 不需要進入無菌區），同時不影響 SA（因為液體路徑封閉）。這也使得泵的定期維護和 PM（預防性維護）更容易執行，降低操作人員進入無菌區的需求，符合 EU GMP Annex 1 的人員干預最小化精神。

        

    

2.4.3 Rolling Diaphragm Pump Advantages and Disadvantages

    

        

## 原文內容 Original Text

        

Table 2.4.3-1 identifies the advantages and disadvantages of rolling DPs.

        

        
            
| Characteristic | Advantages | Disadvantages |
| --- | --- | --- |
            
                
                
                
            
| Viscosity | None | Not good for high-viscosity products unless product is stable at high temperatures. |
            
                
                
                
            
| Durability | Durable, long equipment life when handled properly. Product not in direct contact with moving parts; only moving parts are piston in the pump body and pinch valves outside tubing at intake/discharge ports. | Tubing transiting the pinch valves is subject to wear and must be changed regularly. Diaphragms may be cleaned and reused but will require change-out periodically due to wear. |
            
                
                
                
            
| Single Use | Possible with some vendors. | None |
            
                
                
                
            
| Changeover | CIP/SIP-capable in some designs. | When not purchased with CIP/SIP, offline cleaning, autoclaving, and aseptic installation requires training and validation. |
            
                
                
                
            
| Sterilization | SIP is an advantage for sterility. As an alternative, the entire fluid path from product vessel to filling needle can be preassembled and sterilized with a single aseptic connection. | Variation of standard design is required for CIP/SIP models. |
            
                
                
                
            
| Shear Level | Very gentle, low-shear technology. | None |
            
                
                
                
            
| Dosing Range | Typically, 10-fold filling range for each pump. | Dosing range limited to size of pump selected. Wide dosing ranges may require changeover of pumps between batches. |
            
                
                
                
            
| Operability | Filling accuracy is highly insensitive to product temperature, but if temperature changes occur during filling, a minor change may be noted. Separate drives for each pump enable individual control. Feedback control is possible for fill weight adjustments. | Machine must not be run without the vacuum system operating or diaphragm damage will occur. |
        

        

    

    

        

## 導師解析 Tutorial Commentary

        

            

#### 核心概念解析 Key Concepts

            

**DP 的溫度不敏感性 vs TP 的溫度敏感性：**DP 作為正排量系統，每個行程推出固定物理體積，不受液體溫度影響（密度微小變化的影響可忽略）。這與 TP 形成鮮明對比——TP 的流量直接受溫度影響，必須 PLC 即時補償。對長時間充填或有溫度波動風險的產品，DP 精度更穩定。

            

**10倍充填範圍（10-fold range）:** 每個 DP 泵的行程可調，通常可覆蓋目標體積的 1/10 到 10 倍。超出此範圍需更換不同尺寸的泵，不像 TP 僅需更換孔徑板。

        

        

            

#### 重點提示 Key Notes

            

DP 的**SU 可行性是其對比 RPP 的重要差異點**：部分廠商提供 SU DP，整個液體路徑（從連接器到充填針頭）預先組裝、預滅菌，大幅降低無菌安裝的複雜度和培訓需求。這使 DP 成為少數同時支援傳統 CIP/SIP 和 SU 兩種策略的正排量泵技術。

        

        

            

#### 練習思考 Practice Questions

            

                
1. 為何 DP 的充填精度對溫度變化「高度不敏感」，而 TP 卻相反？從物理原理解釋。

                
2. 當客戶要求充填 1 mL 到 20 mL 的多個規格時，DP 系統的更換程序與 TP 系統有何不同？各有什麼優缺點？

            

        

    

2.4.4 Rolling Diaphragm Pump Sterility Assurance: Microbial and Total Particles

    

        

## 原文內容 Original Text

        

Due to the rolling diaphragm separating the fluid chamber from the piston drive, product is contained within a leak-proof chamber without risk of particle contamination from friction wear of the piston or microbial contamination from extraneous sources. Several methods are available to ensure SA following use. Rolling DPs are designed to be easily cleanable and are easy to assemble prior to sterilization. CIP/SIP designs, as well as presterilized, aseptically installed options are available, as are SU presterilized designs.

        

Small breaks in the diaphragm or tubing could result in a breach of the "closed" sterile fluid pathway, although the system will remain under negative pressure (vacuum), which minimizes the risk of microbial and particulate ingress. In order to detect any potential leak, best practice is to add a moisture-sensor on the vacuum line to detect such a breach so that it can be addressed immediately.

        

Even with the sensor in place, should the closed system be breached, this condition may be problematic for highly potent or toxic products, which require containment. As a consequence, the installation position of the pump should be reconsidered to locate the mechanical components within the containment barrier. Since the diaphragm is a wear-part, this risk of a breach reinforces the importance of monitoring the number of use-cycles for the diaphragm and replacing it before the point of failure.

    

    

        

## 導師解析 Tutorial Commentary

        

            

#### 核心概念解析 Key Concepts

            

**負壓作為被動保護屏障：**DP 系統在真空下運行，一旦膜片或管路微小破損，外界空氣可能被吸入（而非液體洩漏到外面）。這實際上降低了產品污染環境的風險，但同時引入了外界空氣（攜帶微生物和顆粒）進入液體路徑的風險——因此需要 moisture sensor 監測。

            

**Moisture sensor（濕度感測器）在真空管路上：**膜片破損時，液體會進入真空管路，moisture sensor 偵測到此變化並即時報警。這是 DP 系統 SA 監控的最佳實踐（best practice）。

        

        

            

#### 重點提示 Key Notes

            

**膜片壽命管理是 SA 的關鍵：**膜片是消耗品（wear-part），必須追蹤使用週期數（use-cycles），並在達到廠商建議上限前強制更換。這不是選項，是 SA 要求。建議建立電子批次記錄（eBR）中的膜片週期計數器，並設定自動警示。

            

對高毒性/高活性產品：泵體應安裝在**密封容器或圍護設施內**，即使有 moisture sensor，膜片破損時產品接觸外界仍需要控制——這是操作人員保護（OEB/OEL）合規要求。

        

        

            

#### 練習思考 Practice Questions

            

                
1. DP 系統在真空狀態下運行，若膜片破損，風險的方向是什麼（液體洩漏到外？還是外界污染進入液體）？兩種情況各有什麼後果？

                
2. 如何在 SOP 中設計膜片壽命管理程序？包括哪些關鍵追蹤要素？

            

        

    

2.4.5 Rolling Diaphragm Pump Efficiency and Impact on Risk

    

        

## 原文內容 Original Text

        

The rolling DP is a high-precision dosing system with stable accuracy throughout the filling process. Even with high accuracy, an IPC is recommended when using rolling DPs to detect any underfills. However, as a volumetric dosing system, 100% IPC is not commonly employed; instead, a statistical IPC is performed (see Sections 5.1–5.1.4).

        

Once properly trained in assembly and installation of rolling DPs, the associated risk is low, as no direct contact with the product or product-contacts parts occurs during production. However, aseptic assembly requires training and represents the highest risk when using the pump. To significantly reduce this risk, CIP/SIP or SU execution should be implemented.

    

    

        

## 導師解析 Tutorial Commentary

        

            

#### 核心概念解析 Key Concepts

            

**「最高風險發生在生產外，不在生產中」:** DP 系統在正式充填期間風險極低（封閉系統，無需人員干預）。但**無菌組裝（aseptic assembly）**——即將消毒後的各部件在潔淨環境中連接的步驟——是整個製程中的最高風險點。CIP/SIP 或 SU 設計正是為了消除或減少這個高風險步驟。

        

        

            

#### 重點提示 Key Notes

            

DP 選擇統計式 IPC 而非 100% IPC 的依據：正排量泵每行程充填量高度一致，批次間漂移極小，統計抽樣足以保證劑量合規。但即使如此，IPC 仍是必要的——即使系統精度高，設備故障、空泡等異常情況仍需通過 IPC 檢測。

        

    

2.4.6 Rolling Diaphragm Pump Costs: Initial and Lifecycle

    

        

## 原文內容 Original Text

        

Initial costs are comparable to initial investment costs for other systems for dedicated fill volumes. When multiple fill-volumes are required, additional pump sizes are commonly necessary, which can add to system cost. Lifecycle costs can be negligible because the pumps have a long lifespan, provided they are well maintained and protected from damage. Diaphragms can be cleaned or replaced between batches, based on user requirements defined in site SOPs.

        

Rolling DPs equipped with CIP/SIP have added costs. The CIP/SIP infrastructure systems drive much of the increase in costs; however, CIP/SIP-capable pumps have additional configurations and connections for the cleaning and sterilization media-flow as well as proper media-draining.

        

If SUS that use disposable rolling DPs are implemented, the costs for SU are high and can be compared to initial and ongoing costs of a CIP/SIP system operation and maintenance. This is often driven by total costs of ownership (TCO) calculations. TCO calculations for a CIP/SIP-capable system would need to include setup, operation, and CIP/SIP as appropriate to the system design. Examples of considerations for the TCO calculations may include, but are not limited to, time, utilities, cleaning validation, maintenance, process know-how, training of operators, downtime due to CIP/SIP cycles, and extended times in cases where parallel processing is not possible.

    

    

        

## 導師解析 Tutorial Commentary

        

            

#### 公式與計算 TCO Comparison Framework

            

```
DP 可重用 + CIP/SIP TCO：
  高初始成本（泵體 + CIP/SIP 基礎設施）
  + 驗證成本（清潔 + SIP 驗證）
  + 低耗材成本（只有管路、膜片、密封件）
  + CIP/SIP 週期停機成本
  → 高批量時最划算

DP SU TCO：
  低初始成本（無 CIP/SIP 基礎設施）
  + 高持續耗材成本（每批整組液體路徑）
  + 低停機成本（換套即用）
  → 低批量 / 高靈活度需求時更有優勢

決策觸發點：年批次數量是關鍵變數
通常 >50批/年 → CIP/SIP 更划算
<20批/年 → SU 可能更經濟
```

        

        

            

#### 重點提示 Key Notes

            

對 CDMO 而言，DP SU 系統的優勢在於**換品種速度快**（dispose and replace）、清潔驗證工作量大幅降低，對小批量多品種的 CDMO 商業模式非常有吸引力。但每批耗材成本必須明確告知客戶並納入報價模型。

        

    

2.4.7–2.4.11 DP Complexity, Maintenance, SU, CIP/SIP & Benefits/Risks

    

        

## 原文內容 Original Text

        

### 2.4.7 Rolling Diaphragm Pump System Complexity: Setup, Handling, and Changeover

        

DP is a two-drive system for piston actuation and actuation of the pinch valve. The system design and fluid pathway are simple and straightforward; however, it requires proper training for pump assembly and aseptic installation (when not CIP/SIP-capable). When assembled and not connected to vacuum supply (e.g., during transport to the line, during setup), any inadvertent movement of the piston without vacuum could result in diaphragm displacement (wrinkling) that can alter piston movement and affect dosing accuracy.

        

For CIP/SIP-configured rolling DPs, installation is different, but not significantly more complex. Rather, the primary difference is that pumps, which are normally installed vertically, are required to be installed horizontally to ensure proper draining after CIP/SIP.

        

### 2.4.8 Rolling Diaphragm Pump Maintenance and Aging

        

Rolling DPs are precisely machined to critical tolerances and must be handled gently to prevent damage and ensure accurate fills. Reusable rolling DPs are constructed of stainless steel; if any defect is observed on the pump, it must be thoroughly inspected to determine if a repair or replacement action is required to the entire pump assembly.

        

Diaphragms can be cleaned and reused or replaced after each batch, depending on user requirements. Vacuum seal and diaphragms are wear-parts that can be expected to be replaced regularly. A replacement strategy for servo motors should be provided by the OEM to avoid unnecessary downtimes or potential loss of batches.

        

### 2.4.9 Rolling Diaphragm Pump Single-Use Versus Reusable Strategy

        

The SU application of rolling DPs is gaining adoption and is available from some OEMs. All elements of the fluid path (from aseptic connector to the product vessel through intermediate product bag, manifold, pump, tubing, and filling needle) are preassembled, disposable, and easy to set up and change over, but they need to be considered as consumable costs associated with the system.

        

Reusable systems bring added risks to the process as offline cleaning and sterilization introduces added complexity since the validation for pumps and needles requires additional time, costs, and paperwork. Aseptic connections made for parts that come into direct contact with product should be sterilized in place, if possible; therefore, a rolling DP configured for CIP/SIP (or SU-presterilized) is recommended for future system designs (3, 6).

        

TCO calculations for both applications need to be evaluated according to user protocols prior to selecting a configuration.

        

### 2.4.10 Rolling Diaphragm Pump CIP/SIP Feasibility and Pitfalls

        

CIP/SIP is well-suited for rolling DPs, with an established design standard for tubing attachment (compression fitting vs. barbed fitting) and a horizontal setup for proper draining of the cleaning media. Due to the altered orientation of the CIP/SIP pump within the filler, proper care should be taken to design with cleanroom or isolator airflow in mind. The advantage with the CIP/SIP configuration is less handling and reduced aseptic installation complexity (3, 6).

        

### 2.4.11 Rolling Diaphragm Pump Benefits and Risks

        

Table 2.4.11-1 highlights the common benefits and risks analysis that is pertinent to the use of rolling DP systems.

        

        
            
| Benefits | Risks |
| --- | --- |
            
                
1. 
2. 
3. 

                
            
| Available in three configurations for maximum flexibility:                                              Reusable with offline cleaning, assembly, sterilization, and aseptic installation                         Reusable with CIP/SIP                         Presterilized, SU fluid path from aseptic connection to bulk product vessel through to filling needles | When assembled and not hooked to a vacuum supply, there is a risk of diaphragm wrinkling if the piston is actuated that can have negative effects on filling accuracy. |
            
                
                
            
| Closed system can be used outside aseptic barrier. | Consideration should be given to product viscosity. |
            
                
                
            
| Low maintenance | Large range of filling volumes possible, but will require additional pump sizes. |
            
                
                
            
| High dosing accuracy | Training for assembly, setup, and operation necessary, especially in non-CIP/SIP-capable systems where aseptic assembly is required. |
            
                
                
            
| Multiple product-contact materials available for products with metal sensitivity. |  |
        

        

    

    

        

## 導師解析 Tutorial Commentary

        

            

#### 重點提示 Key Notes

            

**水平安裝（horizontal orientation）的重要性：**DP 正常使用時垂直安裝，但 CIP/SIP 設計要求水平安裝，以確保清洗液和蒸汽能完全排出（drainage）。這個看似微小的工程設計決策影響整個清潔驗證的可行性——設計初期就必須確認。

            

**三種配置策略的決策矩陣：**
            

                
- 離線清洗再安裝（舊方式）：驗證最繁複，SA 風險最高，適合小型/早期場所

                
- CIP/SIP 可重用（推薦標準）：高初始成本，但 SA 最優、長期 TCO 最低

                
- SU 預滅菌（新趨勢）：耗材成本高，但換型最快，適合 CDMO 小批量多品種

            

            監管趨勢：EU GMP Annex 1 明確鼓勵 CIP/SIP 或 SU，不鼓勵傳統離線無菌組裝。

        

        

            

#### 核心概念解析 Key Concepts

            

**Compression fitting vs. barbed fitting：**兩種管路連接方式。Compression fitting（壓縮接頭）密封性更好，適合 CIP/SIP 高壓環境；barbed fitting（倒鉤接頭）安裝更快但密封等級較低。CIP/SIP DP 的設計標準應明確規定使用哪種方式，並作為設備規範（URS/DQ）的一部分。

        

        

            

#### 實務應用 Practical Application

            

CDMO 新線設計建議：若未來客戶組合以生物製劑（低黏度、剪切敏感）為主，DP 的低剪切特性和 SU 選項使其成為優先考慮。如果預期批次量大、品種少，投資 CIP/SIP DP 的 TCO 最佳；如果客戶多元、批量小，SU DP 的靈活度和換型效率更有競爭力。

        

        

            

#### 練習思考 Practice Questions

            

                
1. 為什麼 DP CIP/SIP 版本需要水平安裝而非垂直？這個改變對無菌區的氣流設計有什麼影響？

                
2. 一個 CDMO 正在評估是否要投資 DP CIP/SIP 系統（vs 繼續使用 DP SU 系統），請列出 TCO 計算時需要納入的至少 5 個關鍵成本項目。

            

        

    

3.0 Filling Needle Designs (充填針頭設計)

    

        

## 原文內容 Original Text

        

Filling needles can be customized to specific applications. The intent of the various designs is to provide greater control over the filling (e.g., to prevent splashing, prevent foaming, control dripping, aid in filling highly viscous products). The major needle designs are described in Table 3.0-1 and are depicted in the images that follow the table. Innovations in needle design continue to be made and variations are possible.

        

When selecting a filling needle design, consider that the:

        

            
- Filling needle should be easy to install in the right position with a tight connection to prevent movement (and the potential for splashing); installation into the needle holder is often required to be performed either with automation or with sterilized implements (e.g., forceps). Regardless of the approach to installation the design should facilitate installation without risk of contamination.

            
- Needle holders should be designed to affix needles in a manner that stabilizes needles with a tight fit and prevents risk of damage such as bending during operation.

            
- Needle holders, and any fixtures between the source of first air and critical operations, should be as minimal as possible, not be a source of particle generation, facilitate easy cleaning, sterilization and/or decontamination, and be designed to minimize turbulence.

            
- Flexible tubing used at the filling needle connection, directly above critical operations must be minimized due to the risk that flexible materials could release particles over time due to motion during the filling process.

            
- Flexible tubing should be selected to permit any necessary equipment motion; the unsupported length should be minimized to prevent sagging, bending, pinching, or any restriction of flow.

        

        

Needles should be selected to be compatible with the filling curve (e.g., synchronized needle motion and fluid start, acceleration, stop, liquid retraction when available). The filling curve is selected for the specific formulation with consideration of the distance from the surface of the liquid (taking into account the meniscus that forms based on the diameter of the vial and the surface tension of the specific formulation). When an appropriate filling curve has been identified, there should be no (limited or reduced) splashing, foaming or dripping of the product, which can cause some types of filling rejects.

    

    

        

## 導師解析 Tutorial Commentary

        

            

#### 核心概念解析 Key Concepts

            

**First air（第一道空氣）:** 從 HEPA 過濾器直接吹出、尚未接觸任何表面的潔淨空氣流。關鍵操作（如充填針頭-瓶口區域）必須始終暴露在第一道空氣覆蓋下，任何遮擋（如針頭固定架過大）都會干擾此保護。針頭固定架的最小化設計正是基於此原則。

            

**Filling curve（充填曲線）:** 描述充填針頭的運動與液體流量隨時間的同步關係——包括針頭插入速度、液體開始流出的時機、加速、減速、停止和回吸（liquid retraction）的精確時序。不同配方（表面張力、黏度不同）需要不同的充填曲線。

            

**Meniscus（彎月面）:** 液體在容器中因表面張力形成的弧形液面。充填時針頭與彎月面的距離是避免飛濺（splash）的關鍵——針頭太高液體飛濺，太低可能浸入產品。

        

        

            

#### 比喻說明 Analogy

            

選擇充填針頭就像選擇咖啡拉花的奶泡嘴：倒奶泡時（即充填）要考慮「奶的黏度（viscosity）」「杯子大小（container）」「倒的角度和速度（filling curve）」。不同的拉花嘴（needle type）讓你能控制奶泡的落點和速度——粗嘴快但可能飛濺，細嘴慢而精準。

        

        

            

#### 重點提示 Key Notes

            

**SA 視角下的針頭安裝：**針頭必須用**滅菌過的工具（如滅菌鑷子 forceps）或自動化設備**安裝，避免裸手接觸，這是無菌操作的基本要求。針頭安裝是典型的高風險操作干預（intervention），應納入 APS（無菌製程模擬）的評估範圍。

            

柔性管（flexible tubing）在針頭連接處的**長度最小化原則**不僅是機械穩定性問題，更是 SA 問題——管路運動可能產生顆粒，而顆粒在 HEPA 氣流中可能沉降到開口容器中。

        

    

3.0 Filling Needle Design Types — Table 3.0-1

    

        

## 原文內容 Original Text

        

**Open Needle Designs**

        

        
            
| Needle Type | Design Attributes | Uses | Limitations |
| --- | --- | --- | --- |
            
                ****
                
                
                
            
| Cylindrical Needles | Straight cylindrical tube with no diameter difference from inlet to outlet. | All-purpose usage. Appropriate for SUS due to simplicity of design and low cost. Employed in double needle design for gassing during filling. | May not be effective for highly viscous products or for products which have low surface tension. For large fill volumes, a large diameter needle may cause dripping; a tapered tip or diameter reduction may be indicated. |
            
                ****
                
                
                
            
| Single-Use Needles | Typically cylindrical in design (some may have a diameter reduction). Designed to withstand gamma or steam sterilization (with integrated tubing set). Can be stainless steel or polymer. | Intended for SU. | May be designed with thinner gauge stainless steel to control cost — more susceptible to damage. SU needles cannot be used for gassing during filling nor for vacuum filling. |
            
                ****
                
                
                
            
| Basket Needles | Needle is closed at the outlet; the closure is either perforated or slotted. Slotted or perforated outlet increases the surface tension by creating multiple smaller outlets. Also shown improvements for some products subject to rapid drying or crystallization. | Intended for product that has a tendency to drip. | Complex geometry at the tip may complicate cleaning (more so than cylindrical needle). Smaller orifices may create a tendency to foam (unless the filling curve is adapted). |
            
                ****
                
                
                
            
| Crimped (Reduced Diameter) Needles | Needle narrows at the tip reducing the outlet. Helps to better control products with low surface tension. Commonly prevents droplets from forming at the tip. A common design for SU needles as well. | Intended for products with low surface tension. | Pressure drop may occur at tip during cleaning. |
            
                ****
                
                
                
            
| Cut or Fluted Needles (tip at 45 degrees or crab-claw design) | Needle is chamfered at tip allowing for a larger cross-sectional area for product exit. | Intended to decrease needle exit velocity and to decrease impingement velocity of product against the bottom of the container. Effective in applications where filling speed must be maximized. | May not be effective for products with a tendency to drip, unless a liquid retraction feature is used on the filling pump. |
            
                ****
                
                
                
            
| Slotted Filling Needles | Needle has one or more narrow openings located on the sides of the needle tip. Slotted outlet increases the surface tension by creating one or more smaller openings over which the liquid must bridge. | Like basket needles, intended for product that has a tendency to drip. | Complex geometry may complicate cleaning (more so than cylindrical needle). Smaller orifices may create a tendency to foam. |
        

        

        

**Jacketed Needle Designs**

        

        
            
| Needle Type | Design Attributes | Uses | Limitations |
| --- | --- | --- | --- |
            
                ****
                
                
                
            
| Jacketed Needles (also known as Gassing Needles) | Double needle designs include a cylindrical needle surrounded by a secondary jacket for inert gas flushing or other gas to container application that encloses the filling needle. The outer jacket ends slightly higher than the filling needle. The filling needle is removable for cleaning or replacement. In some cases, jacketed needles have also been found to help with products that crystallize on the tip of the needle. | Used for oxygen sensitive products which require inert gas flushing during the filling process. | Special care has to be taken on small diameter containers such as 0.5 mL syringe due to combined diameter of needle and jacket. Generally, not compatible with CIP/SIP applications. |
        

        

        

**Closing Needle Designs**

        

        
            
| Needle Type | Design Attributes | Uses | Limitations |
| --- | --- | --- | --- |
            
                ****
                
                
                
            
| Closing Needles | Closing needles have a pneumatic drive that opens and closes the opening of the needle using a central plunger. Product flows when the needle is open and is cut off when the needle is pneumatically closed. (When no air is applied the needle fails open, which enables it to be cleaned and sterilized without pneumatic pressure.) Inside closing needles are generally for smaller volumes. Outside closing needles are generally for larger volumes and generally not for aseptic use. | Used for highly viscous products. | Closing needle designs are complex in geometry which makes CIP and SIP challenging. Relatively rare in aseptic operations as a result. |
        

        

        

            

                Figures 3.0-1, 3.0-2, and 3.0-3  

                Figure 3.0-1: Open Needle Designs (Cylindrical, Basket, Crimped, Cut/Fluted, Slotted)  

                Figure 3.0-2: Jacketed Needle Configuration (inner filling needle + outer gas jacket)  

                Figure 3.0-3: Inside Closing Needle Schematic and Cutaway
            

        

    

    

        

## 導師解析 Tutorial Commentary

        

            

#### 核心概念解析 — 針頭選型邏輯 Key Concepts

            

針頭選型的核心驅動因素是**產品特性**（遵循決策層級第2層：Product CQAs），具體分析：

            

                
- **低表面張力產品（易滴液）:** → Basket、Slotted 或 Crimped 針頭（增加出口表面張力，阻止液滴脫落）

                
- **高黏度產品:** → Closing needle（主動截斷液流）

                
- **需要充氣保護的氧敏感產品（如蛋白質生物製劑）:** → Jacketed gassing needle（同時充填 + 惰性氣體覆蓋）

                
- **高速充填 / 大容量:** → Cut/Fluted needle（增大出口截面積，降低衝擊速度）

                
- **SU 系統:** → Cylindrical 或 Single-Use 針頭（結構簡單、易滅菌）

            

        

        

            

#### 重點提示 Key Notes

            

**Jacketed needle 的 CIP/SIP 限制是重要的 SA 考量：**封套式針頭無法用標準 CIP/SIP，每次批次必須拆解清洗，增加了無菌組裝的複雜度和 SA 風險。如果產品需要氧保護，必須在設備選型時就規劃此驗證工作量。

            

**Closing needle 在無菌操作中罕見的原因：**氣動閥加中央柱塞的複雜幾何結構使 CIP/SIP 驗證極為困難——很難證明蒸汽能到達所有死角（dead leg）。SA 優先原則下，複雜 CIP/SIP 驗證失敗的風險不可接受，因此無菌充填很少使用 closing needle。

            

**「Fail open（默認開啟）」的設計智慧：**Closing needle 在無氣壓時默認開啟，確保 CIP/SIP 時清洗液能自由流過，而非卡在關閉狀態造成清潔盲點。這是以 SA 為優先的工程設計思維。

        

        

            

#### 比喻說明 Analogy

            

針頭設計就像調酒師選擇倒酒方式：
            

                
- Cylindrical → 直接從瓶口倒（最簡單，適合大多數酒）

                
- Basket/Slotted → 用分叉酒嘴（防止珍貴蒸餾酒滴落）

                
- Crimped → 用細嘴壺精確控制細流（適合高度數低表面張力的烈酒）

                
- Cut/Fluted → 用斜切嘴讓液體沿杯壁滑落（高速且衝擊小）

                
- Jacketed → 雙層管：內層倒酒，外層同時充入 N₂ 保護（氧敏感的高端葡萄酒）

                
- Closing → 精密開關閥（超高黏度蜂蜜或糖漿）

            

            

        

        

            

#### 練習思考 Practice Questions

            

                
1. 一個客戶的配方是低表面張力的蛋白質溶液（容易起泡且易滴液），同時對氧氣敏感，應選擇哪種針頭設計？理由是什麼？可能的 SA 挑戰是什麼？

                
2. 為什麼 Closing needle 在無菌充填中如此少見？從 CIP/SIP 驗證角度解釋這個設計的根本挑戰。

                
3. 在 First air 覆蓋和 SA 的視角下，針頭固定架（needle holder）的設計有哪些重要原則？

            

        

    

    

### 本節重點回顧 Section Summary

    

        
- **Time Pressure (TP):** 以壓力+時間控制充填，最適合 CIP/SIP，設備最簡（唯一動件：pinch valve）；缺點是對溫度敏感（需 PLC 即時補償）、不適合高黏度和 SU，且 suck back 能力有限。Wide range 靠換孔徑板而非換泵，是 CDMO 多品種換型的優選。

        
- **Rolling Diaphragm Pump (DP):** 滾動膜片完全隔離機械部件與液體路徑，是封閉系統中顆粒風險最低的正排量泵；精度對溫度不敏感，對生物製劑（剪切敏感）友好。三種配置（離線/CIP/SIP/SU）提供最大靈活性；核心風險：膜片是消耗品，必須追蹤使用週期；真空供應中斷即不可運行。

        
- **決策層級強化：**針頭安裝方式（forceps/自動化）、pinch valve 的屏障內外位置、DP 泵體的安裝位置——每一個設計決策都優先考慮無菌保證（SA），其次是產品 CQAs，最後才是操作便利性。

        
- **針頭設計對應產品特性：**低表面張力 → Basket/Slotted/Crimped；高黏度 → Closing；O₂敏感 → Jacketed；高速大容量 → Cut/Fluted；SU系統 → Cylindrical。針頭幾何複雜度與 CIP/SIP 驗證難度正相關——設計越複雜，SA 驗證工作量越大。

        
- **TCO 視角：**TP 和 DP 的耗材成本（管路、膜片、孔徑板）低於 PP 的 SU 耗材；但 CIP/SIP 的基礎設施成本和停機時間必須納入 TCO 計算，並與 SU 策略對比，在決策前完成用戶協議框架下的評估。

## Topic 4A: Functionality I 功能性 (上) (p71-p86)

# Section 4A: Filling System Functionality (4.0–4.4)

    

充填系統功能性需求分析 — 連續充填、換型速度、充填速度、泡沫控制與液滴控制

    

PDA Manufacturing Technology Guide No. 1 | doc p71 – p80

    

### 本章學習目標

    

        
- 理解 Table 4.0-1 的結構：如何用「功能性需求」矩陣來評估四種充填泵浦的適用性

        
- 掌握連續充填 (Continuous/Campaign Filling) 對設備設計與無菌連接數量的要求

        
- 比較四種泵浦在換型速度 (Changeover Speed) 與充填速度 (Filling Speed) 上的差異

        
- 學習泡沫控制 (Foam Prevention) 與液滴控制 (Drip Control) 的工程對策，並理解其對 CQA 的影響

        
- 建立「功能性 → 泵浦選型 → 無菌保證」的決策思維框架

    

    

### 本節內容導覽

    

        4.0 Table Overview
        4.1 Continuous/Campaign Filling
        4.2 Speed of Setup/Changeover
        4.3 Speed of Filling vs. Control
        4.4 Foam Prevention
        4.4 Drip Control
    

4.0   Table 4.0-1: Functionality Requirements Overview

    

        

## 原文內容 Original Text

        

**Table 4.0-1** presents the Functionality Requirements and their influence on liquid filling system selection. The table evaluates four pump technologies across a range of operational considerations:

        

            
- Peristaltic Pump (PP)

            
- Rotary Piston Pump (RPP)

            
- Time Pressure (TP)

            
- Diaphragm Pump (DP)

        

        

Each row in the table addresses a specific Consideration and lists the relevant Critical Attributes / Enablers — the measurable or design features that determine how well each pump technology meets the requirement.

        

The considerations evaluated across Sections 4.0–4.10 include:

        

            
- Continuous Filling / Campaign Filling Operations vs. Batch Filling

            
- Speed of Setup / Changeover

            
- Speed of Filling vs. Control Aspects

            
- Foam Prevention

            
- Drip Control

            
- Need to Maintain Homogeneity in Filling Loop and Filling Vessel

            
- Need to Control Product Temperature During Filling

            
- For Large Batches, Mechanisms to Supply the Product to the Filler

            
- Head Space Management / Head Space Replacement

        

        

            "Functionality requirements define the operational envelope within which a filling system must perform — they translate product and process needs into concrete engineering specifications."
        

    

    

        

## 導師解析 Tutorial Commentary

        

            

#### 核心概念解析 Key Concepts

            

**功能性需求矩陣 (Functionality Requirements Matrix):** Table 4.0-1 本質上是一份「選型決策工具」。它將抽象的製程需求（如「需要長時間連續充填」）轉化為具體的工程評估標準，再逐一比對四種泵浦的特性。這種結構化比較是 Quality by Design (QbD) 思維的體現。

            

**關鍵屬性 / 使能條件 (Critical Attributes / Enablers):** 每個考量項目下的「可量化特徵」或「設計特點」，例如「每分鐘轉速」、「無菌連接數量」、「是否支援 CIP/SIP」。這些是從需求到設備規格的橋接語言。

        

        

            

#### 比喻說明 Analogy

            

這張表就像餐廳評估「廚房設備選型」時用的採購矩陣：行是需求（如「能否高溫烹飪」、「清洗方便度」、「產能」），列是不同品牌設備。每格填入各設備對應的表現。選型不是看哪台「最強」，而是找哪台最符合你這家餐廳的特定菜單需求。

        

        

            

#### 重點提示 Key Notes

            

**決策階層再確認：** 在使用這張矩陣時，請記住優先順序——

            

                
- 無菌保證 (Sterility Assurance) 永遠優先

                
- 其次才是功能性（速度、靈活性、產能）

                
- 最後才是商業成本考量

            

            

矩陣中某泵浦在「速度」上表現優異，但若它增加了無菌連接數量（無菌風險點），則必須優先評估風險，再考慮速度優勢。

        

        

            

#### 練習思考 Practice Questions

            

                
1. 為什麼 PDA 要用「功能性需求矩陣」而非直接推薦某一種泵浦？這對 CDMO 的意義是什麼？

                
2. 「Critical Attributes / Enablers」這一欄在實際驗證中扮演什麼角色？它與 CPP 或 CQA 的關係是什麼？

            

        

    

4.1   Continuous Filling / Campaign Filling Operations vs. Batch Filling

    

        

## 原文內容 Original Text

        

**Consideration: Continuous Filling / Campaign Filling Operations vs. Batch Filling**

        

**Critical Attributes / Enablers:**

        

            
- Durability of setup — ability to process in a stable manner for a long time, as would be required for continuous/campaign filling

            
- Location of fill pump vs. barrier system (inside vs. outside containment)

            
- Minimal aseptic connections required between batches

            
- Minimization of number of aseptic connections required for setup

            
- Format parts (e.g., hoses, needles) accommodation for different filling volumes across individual batches within a campaign

        

        

        
            
                
                
            
| Pump | Continuous / Campaign Filling Performance |
| --- | --- |
            
                
                
            
| PP | Good, provided that tubing is shifted or replaced prior to reaching pre-determined tubing failure point. SU connections required. PPs can be located outside of containment to support the necessary handling. CIP/SIP may require numerous aseptic connections to be broken and reestablished. Format parts (hoses, needles) need to accommodate different filling volumes. |
            
                
                
            
| RPP | Good for continuous/campaign filling. Capable of CIP/SIP, which may require aseptic connections to be made and broken, but generally fewer connections than with RPPs [sic — vs. PP]. Ceramic pumps may be better for CIP/SIP (e.g., faster cycles). |
            
                
                
            
| TP | Very good for continuous/campaign filling. Location of fill pump outside of the barrier can be a benefit to campaigns. The rest of the setup (besides the pump itself) may still be retained and used. In this case, only needles have to be introduced to the aseptic environment. |
            
                
                
            
| DP | May not be very well suited if the length of the continuous/campaign filling necessitates having to replace the diaphragm mid-process/mid-campaign after its wear-and-tear time (number of cycles) has elapsed. No additional risks if critical attributes/enablers have been considered. |
        

        

    

    

        

## 導師解析 Tutorial Commentary

        

            

#### 核心概念解析 Key Concepts

            

**連續充填 / 活動充填 (Continuous / Campaign Filling):** 指在不完全拆卸設備的情況下，長時間運行充填操作——可能橫跨多批次 (batches) 或多天。對比「批次充填 (Batch Filling)」，每批結束後完全清洗並重新設置。

            

**無菌連接 (Aseptic Connections):** 在無菌保護下建立的管路連接。每一個需要「打開再接回」的連接點，都是潛在的污染風險點。連接次數越少，無菌保證越好。這正是決策矩陣中特別強調最小化無菌連接的原因。

        

        

            

#### 比喻說明 Analogy

            

想像你在辦一場 F1 賽車的連續多站賽季。蠕動泵 (PP) 像是「每隔幾圈就要換輪胎」的策略——管路到達壽命就要更換，需要在無菌環境中作業。時間壓力系統 (TP) 則像是「泵浦本體在車庫外，只需要在賽道上換針頭」——大部分設備不需要進入無菌區，大幅降低每次操作的連接次數。

        

        

            

#### 重點提示 Key Notes

            

**DP 的連續充填限制：** 隔膜泵 (DP) 的最大風險在於隔膜磨損後需要「中途更換隔膜」。若活動計畫的總週期超過隔膜設計壽命，就必須在製程中途進行元件更換——這在無菌製程中是高風險操作，需要充分驗證 (validate) 更換程序。

            

**TP 的連續充填優勢：** TP 系統的充填泵（壓力容器）位於屏障系統外部，活動充填時通常只需更換進入無菌區的針頭，大幅降低無菌操作次數。這是 TP 在連續充填場景中的核心競爭力。

        

        

            

#### 實務應用 Practical Application

            

CDMO 場景：假設你承接一個大型商業批 (commercial batch) 訂單，需要連續充填 48 小時、填充 20 萬支小瓶。評估要點：

            

                
- PP：確認管路 (tubing) 的驗證壽命是否涵蓋全程；若需中途更換，需預先驗證更換 SOP

                
- TP：評估中間容器 (intermediate vessel) 壓力控制的穩定性；長時間操作後壓力漂移是否在可接受範圍

                
- DP：確認隔膜週期壽命是否超過 20 萬次分配；若不足，需在活動計畫前解決

            

        

        

            

#### 練習思考 Practice Questions

            

                
1. 在評估連續充填適用性時，「無菌連接數量最小化」為何是最優先的考量，而非「速度最快」？

                
2. 如果你的工廠選用 PP 做連續充填，你會在哪些製程步驟設計「換管驗證」以確保無菌性？

            

        

    

4.2   Speed of Setup / Changeover

    

        

## 原文內容 Original Text

        

**Consideration: Speed of Setup / Changeover**

        

**Critical Attributes / Enablers:**

        

            
- Number and type of format parts required (fewer parts or greater range of capability, or each part is faster)

            
- SU fluid path is faster than CIP/SIP

        

        

        
            
                
                
            
| Pump | Changeover Speed |
| --- | --- |
            
                
                
            
| PP | Speedy and easy line setup for SU. For non-SU, fast setup is also common as only the intermediate vessel, manifold, and needles have to be cleaned and sterilized. |
            
                
                
            
| RPP | Slower setup at beginning of batch, more efforts to clean and sterilize, although different materials of construction may be faster for CIP/SIP (e.g., ceramic pumps). Fast setup is also common as entire fluid path may be preassembled and sterilized offline. Only aseptic connection to product vessel and mounting to machine are necessary. |
            
                
                
            
| TP | Fast setup, but CIP/SIP is recommended, which is time-consuming. |
            
                
                
            
| DP | Excellent speed of line setup for SU. For non-SU, fast setup is also common as entire fluid path may be preassembled and sterilized offline. Only aseptic connection to product vessel and mounting to machine are necessary. |
        

        

    

    

        

## 導師解析 Tutorial Commentary

        

            

#### 核心概念解析 Key Concepts

            

**換型速度 (Changeover Speed):** 指從一個批次結束到下一個批次開始充填之間的總時間，包括：拆卸、清洗、滅菌、重新組裝、連接驗證等。換型時間越短，設備使用率 (OEE) 越高，CDMO 的產能彈性越大。

            

**格式零件 (Format Parts):** 針對不同容器規格（如 2 mL vs. 20 mL 瓶）而需更換的零件，例如充填針頭、針頭間距調整板、輸液管等。格式零件越少、或更換越快，換型效率越高。

        

        

            

#### 比喻說明 Analogy

            

換型就是 F1 賽車的進站換胎 (pit stop)。PP 和 DP 的 SU 設定就像「預先備好的輪胎組合」——整套管路系統出廠時已滅菌，進站後直接換上即可。RPP 的傳統不鏽鋼設定則像「要先把舊輪胎打磨再重新硫化」——CIP/SIP 週期長，換型時間明顯增加。TP 的 CIP/SIP 推薦做法雖然確保清潔度，但也讓「進站時間」拉長。

        

        

            

#### 重點提示 Key Notes

            

**SU vs. 傳統不鏽鋼的換型對比：** 一次性使用 (SU) 流路的最大商業優勢之一就是換型速度。PP 和 DP 的 SU 配置幾乎消除了 CIP/SIP 的等待時間；相對地，RPP 和 TP 的傳統配置在換型時需要完整的清洗和滅菌週期，這在多品種生產 (multi-product) 的 CDMO 環境中會顯著影響排程。

            

**RPP/DP 離線預組裝策略：** RPP 和 DP 可將整個流體路徑預先組裝並離線滅菌 (preassembled and sterilized offline)，換型時只需做一次無菌連接。這是減少生產線停機時間的有效策略。

        

        

            

#### 換型效率思考框架

            

```

換型時間 (Changeover Time) =
  拆卸時間 + CIP 時間 + SIP 時間 + 重組時間 + 無菌連接時間 + IPC 確認時間

SU 配置：
  通常可省去 CIP / SIP 時間 (最大單項)
  典型換型時間: 1–3 小時

傳統配置 (RPP/TP non-SU):
  典型換型時間: 4–8 小時 (含 CIP/SIP)

換型時間直接影響每日可用批次數，
是 CDMO 報價與排程的關鍵參數之一。
            
```

        

        

            

#### 練習思考 Practice Questions

            

                
1. 一個 CDMO 每月需要切換 10 個不同的充填品項。在這種場景下，換型速度對泵浦選型的權重應該有多高？應如何與無菌保證需求平衡？

                
2. RPP 的「離線預組裝再連接」策略在無菌保證上有哪些需要特別驗證的風險點？

            

        

    

4.3   Speed of Filling vs. Control Aspects

    

        

## 原文內容 Original Text

        

**Consideration: Speed of Filling vs. Control Aspects**

        

**Critical Attributes / Enablers:**

        

            
- Number of cycles per minute defines speed, including conveyance (e.g., walking rake servo motion), number of pump cycles required to hit volume, and weight check

            
- Balance between required fill accuracy and speed

            
- Product characteristics (e.g., foam, dripping) may drive maximum speed limits

            
- Fill-curve profile may also influence speed (i.e., slower at the end of the cycle)

            
- Acceleration and deceleration may influence maximum speed permissible

            
- As long as fill-time is less than cycle-time, the speed is maximized

        

        

        
            
                
                
            
| Pump | Speed vs. Control |
| --- | --- |
            
                
                
            
| PP | Capable of modifying fill-curve within a single container through servo pump rate modification. May require a different fill-pump head size and/or formats for different fill volumes to achieve the necessary speeds. |
            
                
                
            
| RPP | Dedicated size pumps for the different fill volumes to achieve optimal speed with the required accuracy. |
            
                
                
            
| TP | Modifying pressure during the filling cycle (i.e., fill curve) is not performed; only modest modifications to the fill curve are available through the timing and distance of opening of the pinch valve. Therefore, product characteristics may limit rate. |
            
                
                
            
| DP | Dedicated size pumps for different fill volumes to achieve optimal speed with the required accuracy. |
        

        

    

    

        

## 導師解析 Tutorial Commentary

        

            

#### 核心概念解析 Key Concepts

            

**充填曲線 (Fill Curve):** 描述在一次充填週期中，流速隨時間的變化輪廓。典型的充填曲線可能包括「慢速啟動 → 高速主充填 → 慢速收尾」三個階段，目的是在速度與精度之間取得平衡，同時控制泡沫和液滴。

            

**週期時間 vs. 充填時間 (Cycle Time vs. Fill Time):** 週期時間是容器從進入充填站到離開的總時間，充填時間是泵浦實際分配液體的時間。只要充填時間 < 週期時間，就不會成為限速步驟 (bottleneck)。

        

        

            

#### 重點提示 Key Notes

            

**TP 的充填曲線彈性限制：** 時間壓力 (TP) 系統無法在充填過程中動態調整壓力（即無法做「充填曲線形狀」的主動修改），只能透過夾管閥 (pinch valve) 的開合時間和距離做有限調整。這意味著對起泡性強 (high-foam tendency) 或黏度高 (high-viscosity) 的產品，TP 的充填速度可能受到產品特性的嚴格限制。

            

**PP 的充填曲線彈性優勢：** PP 可透過伺服馬達即時修改泵頭速率，在單次充填過程中動態調整流速，實現靈活的充填曲線。這是 PP 對複雜製劑（如高起泡性蛋白質製劑）的重要優勢。

        

        

            

#### 比喻說明 Analogy

            

充填曲線就像你在咖啡杯中倒牛奶的手法：從高處快速倒入會起泡，最後收尾要慢慢讓液面穩定。PP 就像有精準控制的咖啡機——可以設定「前慢中快後慢」的注入曲線。TP 則像傳統重力壺——靠閥門開關時間控制，只能做粗略的「快或慢」調節，無法在充填過程中做細膩的動態調整。

        

        

            

#### 練習思考 Practice Questions

            

                
1. 一個高起泡性的生物製劑 (biologic)，在選擇充填泵浦時，充填曲線彈性應如何影響決策？TP 是否適合？

                
2. RPP 和 DP 都使用「專用尺寸泵頭」來匹配不同充填體積——這對 CDMO 的多品種生產 (multi-product) 設備管理帶來什麼挑戰？

            

        

    

4.4   Foam Prevention

    

        

## 原文內容 Original Text

        

**Consideration: Foam Prevention**

        

**Critical Attributes / Enablers:**

        

            
- Foam may be dependent on the product and, therefore, is unavoidable

            
- Placing vessel a little higher than filling pumps (ideally with bottom outlet)

            
- Optimal sizing of fill-path components to reduce overpressure

            
- Adjustment of filling curve (rate of fill at start, midpoint, end of each container) will minimize foam

            
- Minimizing distance from the outlet of filling needle to the liquid height

        

        

        
            
                
                
            
| Pump | Foam Prevention Characteristics |
| --- | --- |
            
                
                
            
| PP | Axial flow is good for foam prevention. Larger-diameter tubing may reduce foam. Dual-tube PPs minimize pulsation, which can reduce foaming (although dual-tube systems often employ smaller tubing, which may be counterproductive to foam control). Optimal sizing of fill-path components to reduce overpressure. Adjustment of filling curve. Filling formats (e.g., tube and needle diameter) and filling-curve parameters adjustable. Diving-needle designs available. |
            
                
                
            
| RPP | Placement of vessel must be balanced with head pressure to avoid pump leakage (without placing it so low that end of the aseptic fill-unit operation results in drawing in air that may enhance foaming characteristics). Filling formats (e.g., tube and needle diameter) and filling-curve parameters adjustable. Diving-needle designs available. |
            
                
                
            
| TP | TP will be less sensitive to the positioning of the vessel than other systems, but the end of the aseptic fill-unit operation may be critical for foam if gas is entrained in the product. Fluid pathway valves (e.g., pinch valve or weir) geometry and opening speed can be modified to provide a curvilinear opening and to open at an optimal rate to reduce back pressure and potential for foam. Filling formats (e.g., tube and needle diameter) and filling-curve parameters adjustable. Diving-needle designs available. |
            
                
                
            
| DP | Placement of intermediate vessel should be very close to the point of fill in order to minimize tubing lengths, while still allowing gravity feed. Filling formats (e.g., tube and needle diameter and/or tip geometry) and filling-curve parameters adjustable. Diving-needle designs available. |
        

        

    

    

        

## 導師解析 Tutorial Commentary

        

            

#### 核心概念解析 Key Concepts

            

**泡沫 (Foam) 的成因：** 充填過程中，液體與空氣的界面在高速或高壓下被攪動，會形成泡沫。泡沫的嚴重性取決於：(1) 產品本身的表面張力和起泡性（蛋白質製劑特別敏感）；(2) 充填速度和流速；(3) 落差高度（針頭出口距液面的距離）。

            

**潛針充填 (Diving-Needle Design):** 充填針頭在充填開始時先「潛入」容器底部，隨液面上升逐漸抬高，使液體沿針頭側壁平穩流出，避免液體自高處直接落入，大幅減少泡沫。四種泵浦系統均可搭配潛針設計。

        

        

            

#### 比喻說明 Analogy

            

倒啤酒的方式是泡沫控制的最佳比喻：直接從高處垂直倒入杯底，會泡沫滿溢；讓杯子傾斜、沿杯壁緩緩注入，泡沫最少。「潛針設計」就是工業版的「傾杯倒法」——讓液體沿容器壁緩緩填入，而非自高處自由落下。「充填曲線末段減速」則是「收尾時輕輕收手」，防止最後幾毫升引起的湍流起泡。

        

        

            

#### 重點提示 Key Notes

            

**TP 的泡沫特殊風險：** TP 系統在充填操作結束時，若氣體被夾帶入產品 (gas entrained in the product)，可能在充填最後階段造成額外泡沫。這是 TP 特有的風險點，需要透過夾管閥的幾何設計和開閉速度加以緩解。

            

**泡沫對 CQA 的影響：** 過度泡沫直接影響充填準確度（容積 CQA）和藥液完整性（蛋白質聚集、氧化風險）。從決策階層看，泡沫控制屬於「Product CQAs」層級的需求，必須優先於純粹的速度優化。

        

        

            

#### 練習思考 Practice Questions

            

                
1. 對於一個高起泡性的單株抗體 (mAb) 製劑，你會優先選擇哪種泵浦組合（含潛針設計）？請說明理由。

                
2. PP 的「雙管設計減少脈衝」和「較大管徑減少泡沫」兩個策略之間有潛在矛盾——如何在實際設計中取得平衡？

            

        

    

4.4 (cont.)   Drip Control

    

        

## 原文內容 Original Text

        

**Consideration: Drip Control**

        

**Critical Attributes / Enablers:**

        

            
- Matching fluid characteristics to the appropriate technical characteristics

            
- Needle design is one of the most important features

            
- Length and hardness of tubing is very critical

        

        

        
            
                
                
            
| Pump | Drip Control Mechanism |
| --- | --- |
            
                
                
            
| PP | Liquid retraction (i.e., suck back) by design: small rotation in the opposite direction of dispensing achieves the required liquid retraction to avoid dripping; however, the filling formats (needle and tubing selection) play a role. |
            
                
                
            
| RPP | Liquid retraction by design: small stroke in the opposite direction of dispensing achieves the required liquid retraction to avoid dripping; however, the filling formats (needle and tubing selection) play a role. |
            
                
                
            
| TP | No active liquid retraction possible with a reverse stroke; however, some drip control can be managed with speed of pinch-valve closure. |
            
                
                
            
| DP | Liquid retraction by design: small stroke in the opposite direction of dispensing achieves the required liquid retraction to avoid dripping; however, the filling formats (needle and tubing selection) play a role. |
        

        

    

    

        

## 導師解析 Tutorial Commentary

        

            

#### 核心概念解析 Key Concepts

            

**液滴控制 (Drip Control):** 充填完成後，針頭尖端殘留液體可能形成液滴落入容器或環境。這直接影響：(1) 充填精度（液滴導致容積超量）；(2) 環境污染（液滴落在瓶口邊緣影響密封）；(3) 無菌保證（液滴形成的液橋可能成為污染路徑）。

            

**液體回縮 (Liquid Retraction / Suck Back):** 充填結束時，泵浦做微小的「反向動作」——PP 做小角度反向旋轉、RPP/DP 做反向小行程——把針頭尖端的液體吸回針內，防止液滴形成。這是 PP、RPP、DP 共有的主動控制機制。

        

        

            

#### 重點提示 Key Notes

            

**TP 的液滴控制劣勢：** TP 系統沒有「反向行程」的機制，無法主動做液體回縮。唯一的液滴控制手段是提高夾管閥的關閉速度——但這是被動的、精度有限的方式。對於低黏度 (low-viscosity) 或高表面張力的產品，TP 的液滴控制能力相對較弱，需要在針頭設計上做更多補償。

            

**針頭設計的關鍵性：** 原文特別指出針頭設計 (needle design) 是液滴控制「最重要的特徵之一」。針頭的材質、尖端幾何形狀、內徑、針尖切割角度都影響液滴的形成。管路的長度和硬度也很關鍵——過長或過軟的管路在充填結束後的彈性回復可能導致額外的液滴形成。

        

        

            

#### 比喻說明 Analogy

            

液滴控制就像精品紅酒的「防滴嘴」設計。好的防滴嘴讓最後一滴酒精準落回瓶內（類似 PP/RPP/DP 的液體回縮）；沒有防滴嘴的瓶口只能靠你轉動酒瓶的速度來減少滴漏（類似 TP 靠夾管閥關閉速度控制）。前者是主動控制，後者是被動應對。在充填精度要求嚴格的藥品生產中，主動控制顯然更可靠。

        

        

            

#### 實務應用 Practical Application

            

CDMO 場景：高價值生物製劑 (high-value biologic)，目標充填體積 1.0 mL，允許誤差 ±1%（即 ±10 μL）。液滴控制要求極高：

            

                
- 優先選擇具備主動液體回縮機制的泵浦（PP/RPP/DP）

                
- 搭配最佳化針頭設計（適當的管徑、防滴尖端幾何）

                
- 若產品黏度低（更易滴落），考慮針頭尖端鍍疏水塗層

                
- TP 如用於此類產品，需額外驗證夾管閥動態特性並設定嚴格的 IPC

            

        

        

            

#### 練習思考 Practice Questions

            

                
1. 液滴控制失敗（液滴落在瓶口邊緣）從無菌保證的角度可能帶來哪些具體風險？如何在 Contamination Control Strategy (CCS) 中應對？

                
2. 如果客戶堅持使用 TP 系統填裝一個低黏度製劑，你會如何設計驗證方案以確認液滴控制達標？

            

        

    

    

### 本節重點回顧 Section Summary (4.0–4.4)

    

        
- **Table 4.0-1 架構：** 功能性需求矩陣是從「製程需求」到「泵浦選型」的結構化決策工具，每個考量項目都透過「關鍵屬性/使能條件」量化評估四種泵浦的適用性。

        
- **連續充填：** TP 因泵浦本體在屏障外部，無菌連接需求最少，連續充填最具優勢；DP 需注意隔膜磨損壽命是否涵蓋完整活動週期；PP 的管路壽命管理是連續充填驗證的核心。

        
- **換型速度：** SU 配置（PP / DP）大幅縮短換型時間，適合多品種 CDMO 環境；RPP 和 DP 的離線預組裝策略可有效降低生產線停機時間，但需驗證無菌連接的可靠性。

        
- **充填曲線彈性：** PP 具備最高的充填曲線動態調整能力（伺服控速）；TP 的充填曲線彈性最低，產品特性（高泡性、高黏度）可能嚴格限制其充填速度。

        
- **泡沫控制：** 潛針設計 (diving-needle) 適用於所有泵浦系統；泡沫的根本管理來自充填曲線優化、針頭設計、和適當的容器/液面高度配置；TP 需特別注意充填結束時的氣體夾帶風險。

        
- **液滴控制：** PP / RPP / DP 均具備主動液體回縮機制（反向行程），是液滴控制的可靠手段；TP 只有被動的夾管閥關閉速度控制，對低黏度產品劣勢明顯；針頭設計是所有泵浦系統液滴控制的共同關鍵。

        
- **決策階層：** 本節所有功能性考量，評估優先序永遠是：無菌保證 > 產品 CQA（精度、泡沫、液滴）> 商業靈活性（速度、換型效率）。

    

⇧

# Section 4A (cont.): Filling System Functionality (4.5–4.7)

    

充填系統功能性（續）：機器人整合、連續批次、換型與速度

    

PDA Manufacturing Technology Guide No. 1 | doc p81 - p86

    

### 本章學習目標

    

        
- 理解連續充填 (Continuous Filling) 與批次充填 (Batch Filling) 的定義差異，以及隔離器 (Isolator) 在延長生產中的核心角色。

        
- 掌握活動填充 (Campaign Filling) 設計中無菌保證 (SA) 的關鍵挑戰，包含過濾器更換、RTP 導入與 APS 設計。

        
- 了解換型功能性 (Changeover Functionality) 如何直接影響設備整體效率 (OEE) 與每單位成本，以及 SU 技術的侷限。

        
- 分析充填速度的決定因素——充填曲線 (Filling Curve)、IPC 模式選擇，以及高價值產品的保產功能如何與速度形成取捨。

    

4.0 [cont.] — Robotics Functionality Comparison Across Pump Technologies (doc p81)

    

        

## 原文內容 Original Text

        

### Robotics — Technology Comparison (continued from p80)

        

        
            
                
                
                
                
                
            
| Consideration / Critical Attributes & Enablers | Peristaltic Pump (PP) | Rotary Piston Pump (RPP) | Time Pressure (TP) | Diaphragm Pump (DP) |
| --- | --- | --- | --- | --- |
            
                ****  
  
  
  
  
  
  
  
  

                
                
                
                
            
| Robotics                 Clear design objectives for robotics functions with demonstrable advantage of replacing human intervention.                 Computational Fluid Dynamics (CFD) for modeling airflow around robotics movements during design phase.                 Design of robotic movements so that they minimize turbulence and avoid the introduction of contamination.                 Technical expertise in robotics control and calibration.                 Change parts or consumables that are not too heavy or awkward. | Easier to set up with the aid of robotics, as the PP is a closed system. Also, as the pumps can be located outside the containment, a robot would be easily able to install the preassembled filling needles within the Grade A. | Robotic fluid path setup with conventional RPP is difficult. Commonly, fluid path setup is not a requirement for systems that are CIP/SIP-enabled (unless a pump change is required as part of a campaign). | Robotic fluid path setup with conventional TP is difficult. Commonly, fluid path setup is not a requirement for systems that are CIP/SIP-enabled (unless a change is required as part of a campaign). | Robotic fluid path setup with conventional DP is difficult. Commonly, fluid path setup is not a requirement for systems that are CIP/SIP-enabled (unless a pump change is required as part of a campaign). |
        

        

    

    

        

## 導師解析 Tutorial Commentary

        

            

#### 核心概念解析 Key Concepts

            

**機器人整合 (Robotics Integration):** 在無菌充填中，機器人的首要任務是替代人工干預 (Human Intervention)，因為每一次人員進入 Grade A 環境都是污染風險。設計時需考量：CFD 氣流模擬確保機械臂動作不產生亂流；人機工程確保零件重量在機器人負載範圍內。

            

**PP 的機器人優勢：**蠕動泵 (PP) 的流體路徑（矽膠軟管）是預組裝的封閉系統，機器人只需抓取預組裝的充填針組件置入 Grade A 即可。而 RPP、TP、DP 的流體路徑需要在無菌環境內進行複雜組裝，機器人難以執行這些精密連接動作。

        

        

            

#### 比喻說明 Analogy

            

想像在手術室讓機器人協助準備手術器具。PP 就像提供一套已滅菌的一次性外科包 (Surgical Pack)——機器人只要拿進去放好即可。RPP/TP/DP 則像要求機器人在手術室內現場組裝複雜的手術器械——精密度要求極高，失敗風險大。

        

        

            

#### 重點提示 Key Notes

            

CIP/SIP 能力是一把雙刃劍：對 RPP、TP、DP 而言，CIP/SIP 可以省去每批次的流體路徑拆裝，但如果活動 (Campaign) 中途需要換泵，這個優勢就消失了。此時無 CIP/SIP 的 SU-PP 反而因可以快速無菌引入預組裝元件而佔優。

            

決策原則：**無菌保證 (SA) > 商業彈性**。機器人設計不能只看「能否執行動作」，更要確認動作不會危害 Grade A 環境的氣流完整性。

        

        

            

#### 練習思考 Practice Questions

            

                
1. 若您的 CDMO 新線計劃引入充填機器人，您會優先選擇哪種泵型？理由為何？

                
2. 為何 CFD 建模在機器人設計階段如此重要？它可以預測什麼風險？

            

        

    

4.1 — Continuous Filling / Campaign Filling Versus Batch Filling (doc p82–p83)

    

        

## 原文內容 Original Text

        

### 4.1 Continuous Filling/Campaign Filling Versus Batch Filling

        

In manufacturing, a batch is defined as the complete production procedure from compounding, product filtration, filling-line preparation, filling, and closing all the way up to final packaging (end-to-end). The batch size can typically be defined by the volume of product that is manufactured or by the number of units that are processed.

        

Some users will perform continuous filling operations where the definition of batch is volume or time-based (e.g., every ## of liters filled, one batch per ## operating shifts or ## days). As an example, continuous bulk drug substance to bulk drug product formulation systems will also make use of continuous aseptic filling. However, continuous formulation is not the only time that continuous filling may be employed. In these cases, large volumes of bulk product are filled into identical container–closure systems. The designation of a batch (or filling order or section) is primarily to facilitate quality control approval and release of the product, as well as to enable a clear initiation and conclusion of monitoring and sampling that are assigned to each batch.

        

In contrast, some users who happen to have a single bulk formulation that is filled with different fill volumes may choose to run the product in campaigns. Therefore, in a campaigned process, the same product is filled in two or more container–closure formats, where each format represents an individual batch, and the sum of batches would be considered the campaign. For example, a user may formulate a product batch of 1,000 liters, fill half of the bulk solution (500 liters) in 6R vials and, when that fill is complete, switch to fill the last 500 liters of the same product, with a different filling volume in 10R vials. Other campaign designs are also possible (e.g., production of two or more bulk solutions requiring a fluid pathway change, campaigns that require modest format part changes, etc.).

        

In the case of both continuous filling and campaign filling, the most common use case is that the user is filling the same active substance, as a different active substance would pose a risk of cross contamination. If different active substances are to be used, appropriate contamination control strategies should be employed to minimize the risk.

        

### 4.1.1 Environment for Filling

        

Isolators are the most common environment for manufacturers who intend to operate in a continuous filling or campaign mode for the production of a sterile product. The use of isolators for prolonged processing is the strongest option for SA, as the initial surface biodecontamination provides an extremely high-quality environment, and the ability to operate for long periods without opening the doors is assured by the design.

        

### 4.1.2 Sterility Assurance

        

When running a continuous or campaigned process, the major objective SA is to minimize the disruptions within the barrier between batches. Therefore, when designing filling systems for continuous/campaign production, it is crucial to plan them in a manner that allows batch completion and modest changeover (when required) to be made with closed doors. This requires that the introduction of tools, format parts, wipes, environmental monitoring supplies, and the like, are properly planned during the design phase (e.g., implementing RTPs and material transfer chambers to avoid the need to open the barrier). Careful thought should be given to whether a filter change will be needed during the prolonged production period.

        

            Annex 1 indicates that a liquid sterilizing filter should not be used for longer than one working day unless such process has been validated. See filter use considerations under Annex 1, Section 8.95.
        

        

Design of the sterile fluid pathway will determine whether a presterilized SUS can be introduced easily or whether the sterile fluid pathway will require recleaning and resterilization, as this will influence equipment layout, design, controls, and environment. Risk analysis is recommended to determine the associated risks. In some cases, parallel filtration pathways are established at the outset so that the change-over activities (which may include PUPSIT of filters) are minimized at the time the new pathway is to be connected.

        

The length or duration of the production period should be established based on production needs and the process designed to meet those needs. The process should then be qualified based on equipment/process capability and limitations. Once established, that period and duration, as well as duration-related interventions and conditions, including those associated with equipment change-over, should be taken into consideration in the design of the APS. However, the APS should not be used as the primary means to establish or validate the duration of the aseptic process. Continuous manufacturing/campaigns may be able to last multiple weeks within an isolated environment if the process is properly designed and validated.

        

### 4.1.3 Benefits and Risks

        

The most significant benefit of continuous or campaign production modes is the total production-time to turnaround-time ratio. For example, every time a line is turned around, time is needed to clean, set up, perform integrity tests on filters, perform (isolator) leak tests and glove integrity tests and, of course, to decontaminate the isolator itself (e.g., using hydrogen peroxide). Continuous and campaigning filling processes save by reducing the number of times that these activities need to be performed. Other benefits might also be realized, such as a reduction in product losses, as a proportion of the total volume filled.

        

Despite the benefits, the feasibility of running in a continuous or campaigned mode is not always straightforward as the limitations of the filling technology and changeover requirements must be weighed in the decision-making. For continuous-filling operations, there may be little to no mechanical changeover required between batches as the containers and closures will typically remain identical from batch to batch. For campaigns, the primary limitation is the size difference of the formats that need to be processed. As an example, if a manufacturer intends to run the first batch with a 2R vial with a 13 mm stopper, and then run a second batch in the campaign, filling the same product in a 10R vial with a 20 mm stopper, the transport parts, star wheels, sorting systems, product fluid-path components, and everything needed for further batches must either be placed in the barrier before beginning the campaign, or should be aseptically introduced via RTP or material transfer chambers after finishing the first batch. Due to the size and handling of some of these components (e.g., sorting systems), it may not be feasible to carry out the campaign under these constraints. Batch-wise filling would be a better option to reduce risk rather than attempting a campaign.

        

### 4.1.4 Equipment Design Options

        

Some OEMs have technologies where format parts are reduced or even eliminated. For example, some manufacturers have constructed universal feeding bowls that will feed stoppers of relevant sizes to the sorting tracks where the orientation takes place. In these cases, the large bowls need not be exchanged, thereby reducing changeover and disruption of the campaign.

    

    

        

## 導師解析 Tutorial Commentary

        

            

#### 核心概念解析 Key Concepts

            

**三種生產模式的對比：**

            

                
- **批次充填 (Batch Filling)：**每批結束後完整換型，最靈活但停機時間最長。

                
- **連續充填 (Continuous Filling)：**同一規格容器連續生產，批次定義改為體積或時間，幾乎無換型停機。

                
- **活動充填 (Campaign Filling)：**同一原料藥，不同容器規格依序充填，折衷方案——共享前置準備時間，但需在密閉狀態下換型。

            

            

活動充填的核心挑戰：如何在不開門的前提下，將下一批所需的格式零件 (Format Parts) 預先引入屏障內。

        

        

            

#### 比喻說明 Analogy

            

想像 F1 賽車維修站 (Pit Stop)：

            

                
- **連續充填** = 同一輛賽車連續跑多圈，中途只加油、不換輪胎——最省時間。

                
- **活動充填** = 同一台發動機，依序裝進兩台不同車身——事前要把第二台車身的備件全塞進維修站，才不用中途開站門取件。

                
- **批次充填** = 每場比賽後完整拆卸重組——靈活但費時最長。

            

            

隔離器的「密閉門」就是維修站的玻璃圍欄——一旦打開，無菌屏障的完整性即受威脅。

        

        

            

#### 重點提示 Key Notes

            

**SA 決策核心：**連續/活動模式的關鍵不是「效率有多高」，而是「能否在不破壞屏障的前提下完成換型」。

            

**Annex 1 過濾器限制：**除非有驗證數據，液體除菌過濾器使用時間不得超過一個工作日。這對多天期連續批次是重大限制——必須在設計階段規劃平行過濾路徑 (Parallel Filtration Pathways) 或預消毒的一次性系統 (Pre-sterilized SUS)。

            

**APS 設計注意：**無菌製程模擬 (APS) 必須納入連續生產期間的換型干預，但 APS 本身不能用來「驗證」或「決定」最大生產持續時間——這必須由製程本身的能力與驗證數據決定。

        

        

            

#### 效益計算思維 Benefit Calculation

            

```

假設每次換批停機成本：
  隔離器氫氧化氫去污 (HPV): 4 小時
  完整性測試 + 手套測試: 2 小時
  設備清洗/設定: 4 小時
  合計: ~10 小時/次換批

活動生產（5批/活動）vs 批次生產（5批獨立）：
  節省停機時間 = 10小時 × (5-1) = 40小時

若產能為 3,000 vials/小時：
  節省產量潛力 = 40小時 × 3,000 = 120,000 vials
            
```

        

        

            

#### 練習思考 Practice Questions

            

                
1. 若客戶計劃將 500L 同一原料藥分裝成 2mL 和 10mL 兩種規格，您會建議批次充填還是活動充填？評估哪些因素？

                
2. 為什麼隔離器比 RABS 更適合連續/活動生產？從 SA 決策層級分析。

            

        

    

4.1.4 (cont.) — Equipment Design for Campaign Flexibility (doc p84)

    

        

## 原文內容 Original Text

        

### 4.1.4 Equipment Design Options (continued, doc p84)

        

For varied container sizes, OEMs have introduced technologies, such as universal or adjustable rake, walking-beam systems, or transport with prismatic (i.e., triangular) carrier pockets with an adjustable rail, that enable the transport of containers of different dimensions (e.g., diameter, height, neck) without having to replace or change the transport system. An adjustment is commonly required during changeover to the next size, but this adjustment is automated as part of the recipe to enable touchless adjustments. Vendors may also implement adjustable or universal star wheels, which contain pockets for each of the pertinent diameters in adjacent positions. The automation then ensures that the containers are held within the appropriate-sized pocket. The ultimate goal of the universal star wheel is to eliminate or reduce the needed interventions for changeover. While these universal technologies are designed to accommodate a wide variety of sizes, there are practical limitations to the number of sizes that the various transport mechanisms can accommodate. Therefore, when planning for campaign production, it is important to ensure that the required sizes are known in advance and included in the system design.

        

With regard to dosing systems, the same constraints on the feasibility of changeover would apply. For example, if RPPs are used and the intention of the campaign is to fill containers with two different fill volumes of 2 mL and 14 mL, this change in volume would typically necessitate exchanging the RPPs. This campaign would not be considered feasible if the barrier has to be opened in order to exchange the pumps. Breaching sterility by opening the barrier to accommodate the larger-format RPP would jeopardize the campaign. As a consequence, if the design requirement included the ability to campaign these two disparate fill volumes, a different filling technology might need to be selected to enable the intended range of fill.

        

Where a RPP's limitation is the filling range, other technologies have different limitations. For example, a PP can only run for so many revolutions until the hoses begin shedding particles. Therefore, if the duration of the continuous process or campaign is longer than the permissible use-time of the hoses, the hoses must either be repositioned or exchanged. This procedure has to be validated and qualified.

        

For continuous manufacturing or campaigns, manual interventions associated with batch changeover represent possible contamination-control risks that should be assessed and evaluated as part of the intended control strategy for the line.

    

    

        

## 導師解析 Tutorial Commentary

        

            

#### 核心概念解析 Key Concepts

            

**Universal Transport Technologies（通用傳輸技術）的三種形式：**

            

                
- **Universal/Adjustable Rake（通用耙式）:** 傳輸爪可調整間距，適應不同容器直徑。

                
- **Walking-Beam System（步進梁系統）:** 容器在梁上步進移動，可透過配方調整節距。

                
- **Prismatic Carrier Pockets（三角形載具）:** 三角形凹槽設計，不同直徑的容器自然定位於凹槽不同深度，實現一套機構適應多尺寸。

                
- **Universal Star Wheel（通用撥瓶輪）:** 單一撥瓶輪包含多個不同直徑的凹槽，自動切換至目標尺寸。

            

            

這些技術的共同目標：**透過「食譜 (Recipe) 驅動的自動調整」替代「物理換型」**，使換型可在密閉狀態下完成。

        

        

            

#### 重點提示 Key Notes — 各泵型的活動限制

            

**RPP 的充填範圍限制：**活塞行程決定充填體積。若活動中需要跨越活塞所能涵蓋的範圍（如 2 mL vs. 14 mL），幾乎必然需要換泵，這等同於必須開屏障——活動計劃即告破局。

            

**PP 的軟管壽命限制：**蠕動泵軟管在連續運轉後因反覆擠壓而降解，可能導致微粒脫落。此使用壽命必須經過驗證，超時前必須更換或重新定位軟管。這個操作本身也需要在驗證的程序下執行。

            

**關鍵判斷：**沒有「完美」的充填技術——每種泵都有其活動模式下的侷限，設計前必須明確活動需求的完整參數範圍。

        

        

            

#### 實務應用 Practical Application

            

CDMO 接到一個活動需求：同一客戶原料藥，需在同一生產活動中充填 2 mL（2R vial）與 14 mL（10R vial）兩種規格。

            

評估：RPP 無法在密閉狀態下換泵 → 方案排除。考慮 Time-Pressure 或具備寬充填範圍的 PP（若軟管壽命在活動期間內）。同時確認傳輸系統是否支援 2R 與 10R 的通用傳輸——若採用通用撥瓶輪，需在設計時就將兩種尺寸納入設備規格。

        

    

4.2 — Changeover Functionality (doc p84–p85)

    

        

## 原文內容 Original Text

        

### 4.2 Changeover Functionality

        

For any production line, the uptime-to-downtime ratio (e.g., overall equipment effectiveness) is a critical factor in the return on investment and profitability of the line. For facilities with the ability to fill in a continuous batch or campaign mode, the speed of setup/changeover may be less of an issue as there is a significant boost in uptime with the ability to make multiple batches in a row without (or with reduced) changeover. However, for companies that produce single batches, the speed of setup/changeover can have a significant influence on efficiency and, ultimately, cost per unit. The impact of setup/changeover time is especially severe for companies that may be capacity-limited.

        

The advent of SU technology in the industry has resulted in significant gains in efficiency in all phases of the manufacturing process, including the filling operation. SU technology can reduce or eliminate the need for offline or in-place cleaning and sterilization of many critical components. However, while this approach may be useful for filling systems that make use of PP fillers, for example, the same level of benefit will not be achieved for RPPs where pump cleaning and assembly will still be required even with SU tubing sets.

        

Lines that are designed to make use of fewer format parts, or that make use of format parts with a greater range of capability, have reduced time devoted to setup/changeover. The ergonomics of the line can also facilitate or hinder rapid setup/changeover. When all parts to be changed or adjusted are within easy reach from a limited number of positions on the line, setup/changeover can be performed with less time-investment. Similarly, lines that make use of features, such as "tool-less" adjustments for guides and conveyance parts, can simplify and speed setup/changeover.

    

    

        

## 導師解析 Tutorial Commentary

        

            

#### 核心概念解析 Key Concepts

            

**OEE（Overall Equipment Effectiveness，設備整體效率）**是衡量生產線投資回報的核心指標：

            

```

OEE = 可用率 × 效能率 × 品質率

換型時間直接壓縮「可用率」(Availability)
→ 換型越長，OEE 越低，每 vial 成本越高
```

            

**SU 技術的邊界條件：**一次性使用 (Single-Use, SU) 對 PP 效益最大（完全免清洗滅菌），對 RPP 效益有限（活塞/缸體仍需清洗組裝，只有管路是 SU）。選型時不應假設「用了 SU 就解決所有問題」。

        

        

            

#### 比喻說明 Analogy

            

換型功能就像餐廳的翻桌效率 (Table Turnover)。高翻桌率餐廳的祕訣不是服務員跑得快，而是：桌椅設計簡單易清（少格式零件）、備品一伸手即得（人機工程）、不需要工具拆裝（Tool-less 調整）。

            

SU 技術就像改用免洗餐具 (Disposable Tableware)——PP 全套換，省去洗碗時間；但 RPP 的「鍋具」（活塞/缸體）是不鏽鋼的，免洗餐具只省了筷子和碗，鍋子還是得洗。

        

        

            

#### 重點提示 Key Notes

            

**容量受限設施的危機：**對於產能已達極限的 CDMO，每小時的換型停機代表的不只是「成本」，而是「失去的客戶訂單」。快速換型能力在這些設施中是直接的競爭優勢。

            

**換型設計的三個槓桿點：**

            

                
1. 減少格式零件數量（通用化設計）

                
2. 提高格式零件涵蓋尺寸範圍（避免換型）

                
3. 優化人機工程與無工具操作（加快換型速度）

            

        

        

            

#### 練習思考 Practice Questions

            

                
1. 您的充填線每批換型需要 8 小時，年換型次數 60 批。若能透過設計改善縮短至 5 小時，一年可增加多少有效產能（假設充填速度 3,000 vials/小時）？

                
2. 為何對 CDMO 而言，換型速度的重要性可能高於製藥公司自有工廠？

            

        

    

4.3 — Functionality Affecting Line Speed (doc p85)

    

        

## 原文內容 Original Text

        

### 4.3 Functionality Affecting Line Speed

        

When user requirements specifications designate the speed of filling, it is usually based on calculations that either directly or indirectly relate to production (throughput) requirements. Some examples of factors that determine (or limit) the speed of filling include:

        

            
- **Cycle-time limits (after priming)**
                

                    
    - Filling volume (e.g., number of pump cycles)

                    
    - Number of cycles per minute of the conveyance system (e.g., walking rake servo motion, weight-check cycle-time/frequency of weigh checks)

                    
    - Fill curve (e.g., end-to-end cycle-time for single-filling cycle)

                

            

            
- **Deceleration and acceleration limits**
                

                    
    - Product characteristics may affect fill curve (e.g., foaming, viscosity, flowability, dripping, temperature exposure)

                    
    - Required dosing accuracy may affect fill curve (e.g., could be influenced by factors such as container type (e.g., vial vs. prefilled syringe), contents (i.e., single-dose vs. multi-dose), overage limits (cost of product, i.e., high-volume production vs. niche high-cost products))

                

            

            
- **Other factors that affect the overall duration of fill/readiness to fill**
                

                    
    - Priming time (e.g., filling any oversized sections of fluid path, eliminating air bubbles, standardizing fill)

                    
    - Batch size

                    
    - Shift length (the time allocated to filling a batch)

                    
    - Turnaround time (the time needed to prepare the line for the next batch)

                

            

        

        

The first two categories will have an influence on the selected filling technology. The final category affects the acceptability of the speed of filling but has no significant influence on the selection of the filling technology.

        

### 4.3.1 Dosing Accuracy, Weight Verification, and Speed

        

With some high-volume applications, where dosing accuracy is only of moderate importance (e.g., conventional vaccines or heparins), the batches are typically large and the containers are usually slightly overfilled, as the product is not very expensive. In such applications, a 100% IPC, where the empty containers are weighed prior to filling and then check-weighed after filling to determine the filling volume in 100% of the containers, may not be opted for if the user decides that a statistical check is sufficient. The higher the output requirements of such lines, the bigger the possible influence the weight check would have on cycle-time. If statistical weight checking enables faster production with continuous transport machines, it would be the desired option for high-speed fills where slight over-filling is acceptable. 100% IPC weight checks, on the other hand, would typically require intermittent transport and, hence, lower filling-line speeds. In contrast, small batches of expensive products will commonly target 100% IPC (or net-weight filling) for accuracy and reduction in product losses through tighter fill-volume targets. For additional information, refer to dose control in Sections 5.1–5.1.4.

    

    

        

## 導師解析 Tutorial Commentary

        

            

#### 核心概念解析 Key Concepts

            

**充填速度的三層決定因素：**

            

**第一層（影響充填技術選型）：**

            

                
- 循環時間 (Cycle-Time)：單一充填循環需要多少時間。充填體積大、泵循環次數多，速度就慢。

                
- 充填曲線 (Fill Curve)：充填過程中流速的動態輪廓——起始加速、穩定段、末端減速。產品特性（泡沫、黏度）直接影響此曲線。

            

            

**第二層（影響充填技術選型）：**加減速限制——高黏度或易起泡產品必須放慢，不論機械速度多快。

            

**第三層（不影響技術選型，但影響排程）：**預充時間、班次長度、換批準備時間。這些是排程問題，不是機械問題。

            

**IPC 模式選擇核心邏輯：**

            

                
- **統計抽查 (Statistical IPC)：**高速連續傳輸 → 適合高量、低價、允許微量過充的產品（疫苗、肝素）。

                
- **100% IPC 逐個稱重：**間歇傳輸（停下來稱重再走）→ 速度較低，但精度極高 → 適合高價值、小批量產品。

                
- **淨重充填 (Net-Weight Filling)：**100% IPC 的升級版，不只是檢查，而是以實際稱重動態控制充填量，最大化產品保留。

            

        

        

            

#### 比喻說明 Analogy

            

充填速度 vs. IPC 的取捨就像超市結帳通道 (Checkout Counter) 的設計：

            

                
- **統計抽查** = 快速結帳通道，不掃每件商品，只抽查幾件。速度快，偶有誤差可接受（商品便宜）。

                
- **100% IPC** = 標準結帳通道，每件商品都掃描確認。速度慢，但不遺漏（商品貴重）。

                
- **淨重充填** = 高級珠寶店的精密秤量——每件都精準到小數點後三位，耗時但絕不浪費。

            

        

        

            

#### 重點提示 Key Notes

            

**充填曲線是不可壓縮的物理限制：**無論機器多快，若產品會起泡，充填曲線的末端減速段就不能省略——否則泡沫導致充填不準，直接影響 CQA。這是產品特性決定的「硬邊界」。

            

**速度規格的正確設定方式：**URS 中的速度應從「產量需求」反推（需要填多少單位/小時），再考量充填曲線和 IPC 模式的限制，而非直接指定一個「機械速度」數字。

        

        

            

#### 練習思考 Practice Questions

            

                
1. 一個高黏度生物藥，批量 5,000 vials，每 vial 售價 $5,000 USD。您會建議 100% IPC 還是統計抽查？說明理由（從 SA、CQA、商業三個層面）。

                
2. 為什麼巢式容器 (Nested Containers) 通常只能做統計抽查，而無法進行 100% IPC？

            

        

    

4.3.2 & 4.3.3 — Product-Conserving Features and Filling Curve (doc p86)

    

        

## 原文內容 Original Text

        

### 4.3.2 Product-Conserving Features Which Can Affect Speed

        

Additional controls for high-cost, small-batch products that will conserve product include, but are not limited to:

        

            
- Net-weight filling or filling on weighing scales at the beginning of the batch to ensure no product is discarded due to air bubbles during priming and batch initiation that might result in underfills.

            
- Automatic correction of underfilled containers in order to avoid having to discard them due to not reaching the target fill.

            
- Systematic emptying of the product vessel at end of the aseptic fill-unit operation by filling on load cells to ensure that the containers discarded due to underfills are kept to the minimum.

            
- Automatic checks for stopper presence and raised stopper detection (see Section 7.0).

            
- Automated re-stoppering capability in order to ensure that correctly filled containers are not discarded due to missing or raised stoppers while they are still under Grade A controls.

            
- Force and rotation control during capping-and-crimp operations and quality inspection (e.g., vision system inspections for stopper height and correct crimp seal) to ensure the container is closed correctly before leaving the line.

            
- Recapping in order to ensure that correctly filled and stoppered containers are not discarded due to missing or bad crimp seals.

            
- Component checks, such as glass breakage, empty container inspection, and cap quality, in order to ensure rejection of bad components so as, for example, not to fill good product in faulty or missing containers.

        

        

            See Section 12.0 for additional causes of routine and nonroutine product rejection such as priming and end of the aseptic filling-unit operation (along with strategies for conservation of product.)
        

        

Many of the features listed here can take additional time for the verification and correction steps, which will increase the overall duration of the filling and closing operation and, therefore, will reduce the comparative "speed" of the fill. However, they each help to ensure product quality and reduce waste, which can be an important trade-off for speed.

        

### 4.3.3 Filling Curve and Speed

        

The filling time of a single container is governed by the filling curve specific to the product being filled and the required volume to be filled in each container. The filling curves are independent of the speed of the filling machines. It could be quite possible to have a high-speed line with multiple filling needles but with a relatively slow filling curve. A typical example of this would be sensor-filling of bulk cartridges, where the filling curve is programmed to fill up to the brim of the container, which will require slowing the rate of fill as the top of the container is reached. Another example would be the filling of products that tend to foam. The filling curve is slowed intentionally to reduce the possibility of foam generation, which can arise if the containers are filled too quickly.

    

    

        

## 導師解析 Tutorial Commentary

        

            

#### 核心概念解析 Key Concepts

            

**保產功能 (Product-Conserving Features) 的八大機制：**這些功能的共同邏輯是「在 Grade A 控制下修正問題，而非拒絕產品」——代表在屏障內多花幾秒鐘修正（補充填、重加塞、重壓蓋），總比丟掉一瓶每支數千美元的藥物合算。

            

關鍵分類：

            

                
- **充填端：**淨重充填（起批）、自動補充填（欠充矯正）、批末殘液最小化（稱重感應排空）

                
- **加塞端：**塞子存在性檢測 + 自動重加塞

                
- **壓蓋端：**力矩/轉角控制 + 視覺檢測 + 自動重壓蓋

                
- **元件端：**玻璃破損、空容器、瓶蓋品質的前端篩查

            

        

        

            

#### 保產功能的 ROI 思維 Formula

            

```

假設高價值生物藥：每 vial 售價 $3,000 USD
批量：1,000 vials

若無保產功能，損耗率假設 3% = 30 vials
損失金額 = 30 × $3,000 = $90,000/批

若有保產功能（補充填 + 重加塞），損耗率降至 0.5% = 5 vials
損失金額 = 5 × $3,000 = $15,000/批

每批節省 = $75,000
設備增購成本 vs. 10年節省的總損耗 → ROI 極高
```

        

        

            

#### 比喻說明 Analogy — 充填曲線

            

充填曲線就像咖啡師手沖咖啡時的注水手法 (Pour Pattern)——不是從頭到尾倒水速度一樣。開始時先少量浸潤（預潤濕/預排氣），中段穩定注水，快滿時必須減速避免溢出。

            

「高速充填線配慢充填曲線」就像有多個咖啡師同時沖泡——每個人的手速限制是固定的（充填曲線），但可以同時開工（多針頭並行）來提升總產量。

        

        

            

#### 重點提示 Key Notes

            

**速度與品質的取捨框架：**決策層級再次體現——

            

                
1. SA（無菌保證）：保產功能的所有修正步驟必須在 Grade A 控制下執行。

                
2. CQA（充填量、容器密封完整性）：寧可慢一點確保每瓶達標，不可為了速度接受不合格品。

                
3. 商業考量（速度/產量）：在前兩者滿足後，才討論如何在保產功能下優化速度。

            

            

**充填曲線與機器速度的獨立性：**生產線速度（vials/min）可以透過多針頭並行提升，但單一容器的充填時間取決於產品特性與充填曲線，無法強行縮短。

        

        

            

#### 練習思考 Practice Questions

            

                
1. 一個基因治療產品，批量僅 200 vials，每 vial 成本 $50,000。您會在 URS 中要求哪些保產功能？請列出優先順序。

                
2. 充填曲線 (Filling Curve) 和充填機速度 (Filling Machine Speed) 是什麼關係？可以同時優化兩者嗎？

            

        

    

    

### 本節重點回顧 Section Summary (doc p81–p86)

    

        
- **機器人整合：**PP 因封閉系統設計最易於機器人化；RPP/TP/DP 的流體路徑設定複雜，機器人操作難度高。機器人動作設計須透過 CFD 驗證不破壞 Grade A 氣流。

        
- **連續/活動充填的 SA 核心：**所有換型操作應在「密閉門」原則下完成；隔離器是延長生產的最強 SA 選擇；過濾器需符合 Annex 1 限制或有驗證；APS 必須涵蓋換型干預，但不能用來「決定」生產持續時間。

        
- **換型功能與 OEE：**換型速度影響每單位成本；SU 對 PP 最有效；通用格式零件（通用撥瓶輪、步進梁）和無工具調整是加速換型的關鍵設計策略。

        
- **充填速度決定因素：**充填曲線（產品特性決定）和 IPC 模式選擇（100% vs. 統計抽查）是影響技術選型的關鍵；保產功能在高價值產品中提供極高 ROI，但會降低表觀速度——這是正確的取捨（CQA > 速度）。

        
- **決策層級貫穿全章：**無菌保證 (SA) > 產品 CQA > 商業彈性——每個功能設計選擇，都應循此層級驗證其合理性。

    

⇧

## Topic 4B: Functionality II 功能性 (下) (p87-p100)

# Section 4B: Filling System Functionality (4.4–4.6.1)

    

充填系統功能性：泡沫控制、滴漏控制與均勻性維持

    

PDA Manufacturing Technology Guide No. 1 | doc p87 - p93

    

### 本章學習目標

    

        
- 理解充填曲線（filling curve）如何因泵浦類型不同而調整，以適應不同產品特性

        
- 掌握泡沫（foam）形成的根本原因，以及潛入式針頭（diving needle）等工程對策的原理

        
- 識別滴漏（dripping）的成因鏈——從針頭幾何、軟管設計到液體回縮（liquid retraction）機制

        
- 了解懸浮液與乳劑產品的均勻性維持策略：攪拌（mixing）、再循環迴路（recirculation loop）及兩者的組合設計

    

充填曲線延伸討論 — 各泵浦類型的實作方式

    

        

## 原文內容 Original Text

        

Different products will have different filling curves depending on the characteristics of the products (e.g., viscosity, flowability, foaming, dripping). During development, an iterative approach is used to optimize the filling curve of each specific product. The filling curve consists of the synchronized control of fluid velocity and needle movement throughout four stages: **start of filling, ramping up to filling speed, filling at speed, and ramping down** until the end of fill where filling is stopped. The needle movement is an integral part of each of these filling stages, where the needle cycles through a synchronized sequence of needle dive in movement, needle movement above filling level until the fill is ended, and retraction of the filling needle from the neck of the container once filling is complete.

        

For a RPP, the filling curve is fulfilled by the speed at which the piston pushes the product out of the cavity. The rotation of the piston into the position where it will pull product out of the suction side can be programmed to be as fast as possible. Diaphragm pumps can adjust the stroke of the foot against the diaphragm, thereby adjusting the speed of fill. The filling curve of a PP is executed by the speed of rotation of the rollers (the "shoe"), while a TP filling curve is executed by speed and distance of opening the pinch valve, duration of remaining in the open position, and closing of the valve; the pressure remains constant during the filling cycle.

        

            "Of the four technologies discussed in Section 2.0 of this document, the TP filler has the fewest options to dramatically vary the fill curve. This means that the PP, RPP, and DP are better at modifying the fill curve when required to adapt to product attributes."
        

    

    

        

## 導師解析 Tutorial Commentary

        

            

#### 核心概念解析 Key Concepts

            

**充填曲線 (Filling Curve):** 充填過程中流體速度與針頭運動的同步控制程式，分為四個階段：啟動 → 加速 → 定速充填 → 減速停止。每個產品因黏度、起泡性、流動性不同，需要客製化調整。

            

**各泵浦的調整方式：**

            

                
- RPP — 活塞推出速度（伺服馬達控制）

                
- DP — 底部撥片對隔膜的行程幅度

                
- PP — 滾輪（shoe）旋轉速度

                
- TP — 夾管閥開合速度、開放時間、關閉速度（壓力固定，最少彈性）

            

        

        

            

#### 比喻說明 Analogy

            

充填曲線就像開車時的油門曲線：啟動時輕踩（避免濺灑）、上坡全速（提升效率）、快到終點前提前放油門（避免衝過頭）。TP 系統就像只能靠定速巡航行駛的車，曲線調整空間極小；PP、RPP、DP 則像有全自動變速的車，可以精細調控每個瞬間的速度。

        

        

            

#### 重點提示 Key Notes

            

TP 系統的充填曲線彈性最低，因為它依賴固定壓力 + 閥門開關時間，無法像機械泵浦那樣透過行程回縮創造液體回抽效果。這在處理容易起泡或容易滴漏的產品時是重大限制。選擇充填技術時，產品 CQA 必須優先於設備採購成本。

        

        

            

#### 練習思考 Practice Questions

            

                
1. 一個高黏度蛋白質藥物容易在充填末端形成「絲線」，你會選擇哪種泵浦？為什麼？

                
2. 充填曲線的「減速段」主要是為了防止哪兩種缺陷？

            

        

    

4.4 Functionality Affecting Foam — 影響泡沫的功能性

    

        

## 原文內容 Original Text

        

### 4.4 Functionality Affecting Foam

        

The tendency to foam is a product attribute and, therefore, may be somewhat unavoidable; however, there are handling considerations for products with a propensity to foam that can help to control foam formation. In particular, foam prevention is important at all steps of the process where the drug product is moved from one location to another, especially at product transfer and filling.

        

Products with a tendency to foam should never be allowed to drop a long distance in a transfer, for example, into a vessel from a top outlet, since the impact of the product on the bottom of the vessel or on the surface of the existing liquid within the vessel will cause agitation of the air–product interface and can cause foaming. A dip tube (sometimes called a J-tube) should be used to move the product inlet into the vessel to the lowest possible location, or the product can be filled from the bottom tangent of the vessel or from below. Every subsequent refill step must be a sub-surface addition, requiring that the vessel level is known/monitored. In addition, placing the vessel higher than the filling pumps will help to prevent entrained air, especially at the end of the aseptic fill unit operation. If agitation is required for the product, the agitation speed should be targeted just above the minimum validated agitation condition to avoid the entrainment of air.

        

Having the right size and correct geometry of the fluid pathway and filling needle is also important to avoid or minimize foaming (due to overpressure) and splashing. Careful priming of the filling or transfer tubing must be made to ensure that no air is left in the lines, since bubbles in the filling lines can cause foaming and affect dosing accuracy. A 100% IPC weight check would be beneficial to detect air bubbles in the system and to initiate countermeasures such as priming.

        

Foaming is also directly related to the filling curve, with an emphasis on the **start and end of container phases** as the points at the highest risk. Slowing the fill rate at these stages reduces agitation of the solution. Diving needles are a common adaptation for fillers to reduce splashing and foaming. The diving needle plunges to the bottom of the container just before the filling is started and is withdrawn in coordination with the rise of the fluid level within the container. This needle movement reduces the distance from the outlet of the needle to the bottom of the container or to the surface of the liquid within the container, thereby reducing foaming.

    

    

        

## 導師解析 Tutorial Commentary

        

            

#### 核心概念解析 Key Concepts

            

**泡沫 (Foam) 的形成機制：**泡沫本質上是「氣液界面被機械能破壞」的結果。任何讓藥液自由落下、撞擊液面、或與空氣快速接觸的動作，都會促進泡沫。

            

**主要防泡措施：**

            

                
- 浸入管 (dip tube / J-tube)：讓液體從最低點進入容器，消除自由落距

                
- 液面下補充 (sub-surface addition)：每次補料都必須在液面以下進行

                
- 潛入式針頭 (diving needle)：針頭隨液面上升同步退出，始終保持近距離出口

                
- 充填曲線慢啟動 / 慢結束：減少液面擾動

                
- 管路充分排氣 (priming)：消除管內氣泡

            

        

        

            

#### 比喻說明 Analogy

            

想像倒啤酒：從高處垂直倒下 = 大量泡沫；傾斜杯子讓酒沿著杯壁流下 = 幾乎無泡。潛入式針頭就像把出酒口伸入容器底部然後慢慢往上拉，完全模仿「沿壁流下」的效果。蛋白質藥物的表面活性劑往往讓它們比啤酒更容易起泡，所以這個設計在生物製劑充填中尤其關鍵。

        

        

            

#### 重點提示 Key Notes

            

泡沫對批次品質的危害是雙重的：(1) 充填量不準確（泡沫佔體積但不計重量）；(2) 若泡沫破裂導致液滴飛濺至瓶口外，可能造成容器密封失效或污染風險。100% IPC 重量檢測能即時偵測因氣泡導致的充填不足，是前端預防加後端確認的雙重保障——這符合無菌保證 (Sterility Assurance) 優先的決策層級。

        

        

            

#### 實務應用 Practical Application

            

在 CDMO 接受一個新的 mAb（單株抗體）產品時，初步配方評估顯示高度起泡性。在設備需求規格 (URS) 中應明確要求：潛入式針頭、液面偵測器、管路自動排氣程序，以及充填啟動 / 結束段的低速參數設定。這些需求應在技術轉移早期確認，否則上線後才發現需要改裝，工程成本與驗證時間將大幅增加。

        

        

            

#### 練習思考 Practice Questions

            

                
1. 為什麼容器補料時必須從液面下方進行，而非從頂部倒入？這跟泡沫的哪個形成機制有關？

                
2. 100% IPC 重量檢測如何間接偵測管路中的氣泡問題？

            

        

    

4.5 Functionality Affecting Drip Control — 影響滴漏控制的功能性

    

        

## 原文內容 Original Text

        

### 4.5 Functionality Affecting Drip Control

        

Product characteristics (e.g., rheology, elasticity, surface tension, viscosity) may result in a tendency for the product to drip during filling. For example, when surface tension is too low, there is little to inhibit a droplet from breaking free at the end of the needle. For highly viscous products, a "string" or "thread" may occur after completion of the filling cycle when there is incomplete separation of the filled quantity from the quantity remaining in the filling needle.

        

There are several design attributes that can exacerbate or prevent dripping, including but not exhaustively:

        

            
- Needle geometry (ID, length)

            
- Needle-diving movement and/or dynamic filling (e.g., fill curve parameters for retraction speed, retraction amount, adjustments to pump deceleration, distance between meniscus and needle tip at the end of filling)

            
- Hose design (diameter, material, hardness, length)

            
- Hose position

            
- Fluid pathway sizing

            
- Long interruptions in the filling process

        

        

Larger filling needles may reduce the surface tension at the opening, resulting in a drip. Adapting the needle ID and length to better match the viscosity, surface tension, and gravitational forces on the product can prevent dripping.

        

Needle-diving movement in the container (see Section 4.4) as well as needle-follow-along movement (also known as dynamic filling) can result in dripping from the motion of the needle during the filling cycle. In dynamic filling applications, the needle will dive down into the container, begin filling, and rise back up after filling while moving along with the container as the containers are transported through the machine. For these walking-beam transport machines, oscillation from the lateral follow-along needle-holder movement may result in dripping if the tubing is not of sufficient stiffness. Dripping can happen during dive-out or as the filling needles move back to fill the next containers in line.

        

Hose design can result in dripping due to various factors such as reduction in surface tension (diameter), poor fit and compression against the filling pump (material, hardness), excessively long arching of the tubing which can result in gravitational drips (length), and/or loss of liquid-retraction (i.e., suck-back) control. Liquid retraction is the process whereby the product is minutely withdrawn back into the filling needle (usually by a small stroke in the opposite direction of fill) to create a concave, rather than convex, surface in the fluid at the end of the needle, thereby assisting surface tension to retain the final drop of fluid at the end of the needle. Active liquid-retraction control by reverse stroke is not possible with TP filling; however, rapid closure of the pinch valve can disrupt the flow sufficiently to create an analogous effect at the point of fill.

        

As a consequence, TP systems may not be the most suitable for products that have dripping characteristics, because retracting product at the point of filling is not easy to achieve. For such systems, the needles may be a closeable type, meaning they are mechanically closed after filling has been executed (see Section 3.0 for a description and diagram), though such needles may be challenging to implement in an aseptic operation due to their mechanical complexity and the ability to demonstrate cleanliness and sterility.

        

RPPs, on the other hand, can be programmed to have the servo drive retract the piston upwards or push it downwards (depending on whether the filling stroke is executed from the bottom up or top down) slightly after filling. DPs can be operated similarly to coordinate the stroke of the bottom foot (piston) and the timing of the pinch valves. That will result in slightly pulling product up the needle and thus avoid dripping. PPs can also be programmed to turn slightly in the opposite direction (opposite to the filling direction) after filling, which will result in pulling product up the needle (liquid retraction) and thereby avoid dripping outside of the filling needle. Most of the PP systems available on the market today are servo-driven, so it is relatively straightforward to handle the challenge of dripping.

        

When the hose is positioned below the intermediate vessel relative to the point of fill, dripping can result due to additional head pressure on the point of fill. This could lead to "bleeding" at the opening of the pump. PPs will also "leak" at some point if the pre-pump pressure breaks the threshold point. Having the hose positioned above the point of fill provides some benefit in reducing the opportunity for entraining air and causing foaming; therefore, the **tendency to foam and the tendency to drip must be balanced** relative to their competing needs for placement of the bulk vessel and hose.

        

All components along the fluid pathway must be appropriately sized to work together properly to prevent dripping. For example, when the pumps are too large, there are limitations on how small the tubing and filling needles can be. The selection of an oversized pump may result in residual volume that is not dispensed and may drip.

        

Long downtimes of the filling machine can also result in dripping as gravitational forces continue to be applied and pressure may build up in lines.

        

            "In summary, dripping can often result when companies try to economize by trying to combine different products and dosing volumes with 'one-size fits all' setups for filling. It is important to ensure that the characteristics of each product and its intended filling-system design are evaluated for suitability."
        

    

    

        

## 導師解析 Tutorial Commentary

        

            

#### 核心概念解析 Key Concepts

            

**滴漏 (Dripping) 的兩種主要型態：**

            

                
- **低表面張力型：**液體在針頭出口無法「握住」最後一滴，自由滴落

                
- **高黏度絲線型 (string/thread)：**充填結束後，殘留在針頭內的高黏度液體被拉成細絲，無法完全切斷

            

            

**液體回縮 (Liquid Retraction / Suck-back):** 充填結束瞬間，泵浦做一個微小的反向行程，將針頭出口的液體略微往回吸，使液面由凸變凹，藉表面張力「鎖住」最後一滴，防止滴漏。

            

**各泵浦的液體回縮能力：**

            

                
- PP — 伺服馬達可反轉，回縮容易實現

                
- RPP — 活塞伺服驅動可反向行程

                
- DP — 調整底部撥片時序與夾管閥可協調回縮

                
- TP — **無法主動回縮**（只能靠快速關閥模擬，效果有限）

            

        

        

            

#### 比喻說明 Analogy

            

液體回縮就像用吸管喝飲料後，輕輕放開吸嘴讓吸管吸回最後一口，防止液體從吸管底部繼續滴落。TP 系統沒有這個「放開吸嘴」的動作，它只能快速夾住管子（快速關閥），效果類似但不如主動回縮精準。對於像蜂蜜那樣高黏度的產品，這種差異會非常明顯——快速夾管仍然無法切斷已形成的絲狀液柱。

        

        

            

#### 重點提示 Key Notes

            

**泡沫 vs. 滴漏的「蹺蹺板」困境：**軟管位置越低（低於充填點）→ 靜壓頭越大 → 越容易滴漏；軟管位置越高（高於充填點）→ 空氣越容易被捲入 → 越容易起泡。兩者是相互競爭的需求，設計時必須基於產品的主要風險（起泡優先？滴漏優先？）做出明確取捨，而非同時最佳化。

            

**「一組硬體解決所有產品」的陷阱：**本節最後的結論警告清晰——過度追求設備通用性（one-size fits all）往往是滴漏問題的根源。在 CDMO 多品種環境中，每個新產品都應重新評估針頭 ID、軟管規格與充填曲線參數的適配性。

        

        

            

#### 設計考量框架 Design Consideration Framework

            

```

滴漏風險評估矩陣：

高表面張力 → 較小針頭 ID → 液體回縮較容易
低表面張力 → 必須主動回縮 → TP 不適用
高黏度     → 針頭 ID 需放大 → 注意切斷不完全
低黏度     → 注意靜壓滴漏 → 軟管位置需謹慎

軟管長度 ↑ → 重力弧垂 ↑ → 滴漏風險 ↑
泵浦尺寸 ↑ → 針頭最小 ID ↑ → 殘留量 ↑ → 滴漏 ↑
            
```

        

        

            

#### 實務應用 Practical Application

            

CDMO 技術轉移評估時，對於任何新接收的注射產品，建議在技術轉移協議（TTA）中明確記錄：產品表面張力測量值、黏度（在充填溫度下）、起泡傾向測試結果。這三個數據可直接驅動針頭規格選型與充填曲線開發方向，避免在驗證批次才發現滴漏問題導致批次廢棄。

        

        

            

#### 練習思考 Practice Questions

            

                
1. 一個低黏度、低表面張力的眼藥水產品，你如何評估它是否適合現有的 TP 充填系統？

                
2. 走行樑傳送系統（walking-beam）為何比固定站式傳送更容易因振動導致滴漏？

                
3. 為什麼泵浦選型「偏大」會間接導致滴漏問題？

            

        

    

4.6 Functionality for Maintaining Homogeneity — 均勻性維持的功能性

    

        

## 原文內容 Original Text

        

### 4.6 Functionality for Maintaining Homogeneity

        

Maintaining homogeneity in products that tend to sediment (e.g., emulsions, suspensions, ATMPs, cell therapy products) may be achieved by keeping the product in constant movement. Typical technologies to achieve this include stirring and/or recirculation loops (see Figures 4.6.1-1–4.6.1-5). To prevent the possibility of sedimentation or inhomogeneity, these mechanical systems must be integrated with the filling mechanism to either ensure constant circulation or to circulate when stopping time approaches the validated hold time of the product.

        

Stops of the filling system may arise due to, but not limited to, the following reasons:

        

            
- Inherent machine stops (e.g., settle-plate handling after four hours)

            
- Corrective machine stoppage (e.g., broken glass, stuck stopper)

            
- Interruption in the infeed of components (e.g., nests, stoppers, caps, containers coming out of a depyrogenation tunnel)

            
- Environmental monitoring (EM)-related stops (e.g., rise in particulate count)

            
- Employee-related stops (e.g., breaks, shift change, gaps in shift coverage)

        

        

Keeping the product in motion can be performed by implementing mixers in the product vessels or by designing recirculation loops to bring the product back into the bulk product-vessel or back into the intermediate buffer-vessel or a combination of both. Recirculation may be superior to mixing when it is necessary to control sedimentation in the **connections (e.g., hosing, pipes) between the vessels** and the rest of the dosing path. If these connections are long, sedimentation may occur with mixing alone. Recirculation will keep the product in motion in both the bulk vessel and the intermediate vessel, as well as in each portion of the fluid pathway.

        

The major factors to be considered in design are the size of the product vessel and the length of the connections between the product vessel and the equipment at the filler. For some applications, due to the size of the vessels or the nature of the product, it may be necessary to include a mixer in the bulk product-vessel and/or intermediate product-vessel in addition to recirculating.

        

When considering approaches for preventing sedimentation, a number of design factors should be considered. These factors include product attributes, equipment selection, instrumentation selection, and equipment design and operation approach, as well as Quality Assurance controls such as:

        

**Product/process quality considerations:**

        

            
- Product sedimentation time and risk factors for the product

            
- Shear-force sensitivity of the product, which may limit some recirculation options, or limit the desirable duration of recirculation

        

        

**Major equipment decisions:**

        

            
- Is the system a strictly mixer-based system or a strictly recirculation-based system or a hybrid?

            
- When recirculating, will an inner loop, outer loop, or a double loop be executed?

            
- Is it sufficient to use one pump in combination with a three-way valve that will either recirculate or feed the product, or should a second pump be implemented for recirculation and run constantly, irrelevant of whether or not the product infeed is active?

        

        

**Instrumentation to be considered to confirm parameters:**

        

            
- Homogeneity

            
- Flow rates

        

        

**System design factors and operational parameters:**

        

            
- Cross section of pipes, hoses, and manifolds to ensure turbulence of flow is guaranteed

            
- Position of the product vessel in relation to the filling machine does not promote sedimentation (longer fluid paths means a greater volume encountering potential sedimentation)

            
- Approach should be determined to either employ constant recirculation (even during filling) or recirculation only after a predefined stop time

            
- Lowest volume that can be mixed or recirculated effectively should be established, based on the configuration of the vessels and length of the fluid pathway, and it should be confirmed that the volume is an acceptable loss volume.

        

        

            "Note: Systems that combine agitation and recirculation may be able to ensure homogeneity below the minimum agitable volume. Studies should be performed to validate the effectiveness of any approach identified for agitation, recirculation, or a combination of the two."
        

        

**Quality assurance considerations to ensure homogeneity:**

        

            
- Is instrumentation available (e.g., PAT) to confirm homogeneity of suspensions, and is it appropriately sensitive to determine diversion of flow to waste when inhomogeneity is detected?

            
- What action is needed after the filler restarts (e.g., discard of predefined volume or number of containers, predefined period of recirculation before resumption of fill, or proceeding to fill without any action)?

            
- How will it be ensured that the filling is stopped when the batch reaches the minimum effective volume for either mixing or recirculation?

        

    

    

        

## 導師解析 Tutorial Commentary

        

            

#### 核心概念解析 Key Concepts

            

**均勻性 (Homogeneity) 的挑戰：**乳劑 (emulsions)、懸浮液 (suspensions)、ATMP 和細胞治療產品（cell therapy products）的活性成分具有沉降傾向。在充填過程中如果靜置過久，先充填的容器與後充填的容器中活性成分的濃度可能出現顯著差異——這直接影響每個劑型的療效，是 Product CQA 的核心議題。

            

**兩種基本對策：**

            

                
- **攪拌 (Mixing)：**在槽體內安裝攪拌器，靠容器內的流動維持均勻性。優點：簡單；缺點：無法保護連接管路中的產品。

                
- **再循環迴路 (Recirculation Loop)：**讓產品持續在整個液體路徑中流動，包括管路和中間緩衝槽。優點：全路徑保護；缺點：系統複雜，剪切力風險需評估。

            

            

**剪切力敏感性 (Shear-force Sensitivity)：**某些產品（如細胞懸浮液）對機械剪切力非常敏感，過度循環會破壞細胞或蛋白質結構。因此，再循環設計必須在「保持均勻性」與「保護產品完整性」之間取得平衡。

        

        

            

#### 比喻說明 Analogy

            

維持懸浮液均勻性就像保持一杯珍珠奶茶的均勻分布：如果你靜置不動，珍珠（活性粒子）會沉到底部。你可以：(A) 持續攪拌杯中（= 槽內攪拌器），但吸管裡的珍珠還是可能沉積；(B) 持續從底部抽出再從頂部倒入循環（= 再循環迴路），讓整個系統包括吸管都保持流動。對於吸管特別長的情況（= 長管路），只用 A 是不夠的，必須用 B 或 A+B 組合。

        

        

            

#### 重點提示 Key Notes

            

**機器停機的普遍性：**充填線停機是常態，不是例外。沉降時間是關鍵的驗證參數——必須確認「機器最長允許停機時間」不超過「產品驗證的最大靜置時間」。常見停機原因包括：環境監測沉降碟更換（每4小時）、玻璃碎片清理、塞子卡住、人員換班等。這些都必須在 Hold Time Study 中被考慮到。

            

**最低有效循環體積：**當批次接近尾聲，槽體液位下降時，攪拌器可能已無法有效運作（液面低於攪拌葉片），此時必須提前停止充填並廢棄剩餘產品。廢棄體積的估算直接影響批次產率，是商業計算的重要參數。

        

        

            

#### 實務應用 Practical Application

            

在接收一個新的脂質奈米粒子 (LNP) mRNA 疫苗產品時（高沉降傾向 + 剪切力敏感），CDMO 應在工程運行前完成：(1) 沉降動力學研究以確定 Hold Time Limit；(2) 剪切力耐受性研究以設定再循環泵浦轉速上限；(3) PAT 均勻性監測系統的安裝位置評估（置於分液歧管下游更能代表實際充填狀態）。這些資料應進入 CPP 設定，而非僅作為開發參考。

        

        

            

#### 練習思考 Practice Questions

            

                
1. 為什麼「攪拌」在連接管路很長時不足以防止沉降？再循環迴路如何解決這個問題？

                
2. PAT 均勻性感測器應安裝在歧管（manifold）上游還是下游？各有什麼優缺點？

            

        

    

4.6.1 Design Options for Maintaining Homogeneity — 均勻性維持的設計選項

    

        

## 原文內容 Original Text

        

### 4.6.1 Design Options for Maintaining Homogeneity

        

Figures 4.6.1-1–4.6.1-5 represent just a few examples of common recirculation strategies, although the possibilities for system design are nearly limitless.

        

**Figure 4.6.1-1: Mixing Without Recirculation**

        

Figure 4.6.1-1 depicts the use of mixing without recirculation. In these cases, there is a mixer present in each vessel and no recirculation loops. This would be an effective approach for **true solutions** and for any product that is unlikely to settle with brief periods of low or no flow. The distance between the product vessel and the intermediate product-vessel should be considered to ensure that potential sedimentation is avoided, or that it is accounted for once the filler proceeds to pull product out of the intermediate product-vessel. The flow rate should always be defined specific to each product to ensure good functionality. When using mixers, studies should be carried out to determine the speed of the mixer relative to the volume within the container and to define at what level the mixer is no longer ensuring there is no sedimentation. If the level of product in the vessel is below the mixer, mixing may become ineffective, and often the remaining product must be discarded.

        

**Figure 4.6.1-2: Mixing with Constant Recirculation at the Filling Manifold**

        

Figure 4.6.1-2 depicts an example similar to Figure 4.6.1-1, except that instead mixing in the intermediate product-vessel, a constant recirculation approach has been selected. In this example, the product infeed pump is constantly running irrelevant of whether or not the filling pumps are dosing due to a machine stoppage. The recirculation pump in the "inner loop" is also constantly running. The revolutions per minute (rpm) of the recirculation pump is defined by the amount of product it needs to keep in motion. That amount is either the product being supplied by the product infeed pump, in case the machine has stopped, or the product being fed in, less the product being dosed if the machine is running. Here, additional elements, such as a flowmeter that ensures the flow rate is being maintained to avoid sedimentation and a PAT system for homogeneity, could also be integrated in the system. In this scenario, when the level in the product vessel falls below the agitator, this might not lead to complete disposal, if the residual product can be accommodated in the intermediate vessel and if the recirculation loop can be demonstrated to maintain homogeneity of the final product volume.

        

**Figure 4.6.1-3: External Loop Recirculation Without Mixing**

        

Figure 4.6.1-3 depicts a recirculation-only system without mixing. This may be a good solution for systems where the product vessel is **moderately sized** and where the vessel is **relatively close to the filler**. The product-infeed pump and pipes/tubes are designed to allow for larger volumes than would be needed for a system that was only feeding the filler. The product-infeed pump should be large enough to support two functions:

        

            
1. replenish the intermediate product-vessel which, in turn, feeds the dosing pumps

            
2. provide excess flow to keep the product moving through the intermediate buffer-vessel, through the manifold, and back to the product vessel via the product recirculation pump

        

        

Both pumps are constantly running, regardless of whether or not the filler is running; therefore, the amount of product and the flow rate should be selected to ensure no sedimentation takes place. The rpm of the recirculation pump increases and decreases depending on whether the product is being displaced for dosing. A flowmeter can be used to ensure that critical recirculation parameters are continuously met to ensure homogeneity.

        

**Figure 4.6.1-4: Double Recirculation Loop (External + Inner)**

        

Figure 4.6.1-4 depicts a scenario where an end user has decided to move away from implementing mixers. In this example, two recirculation loops are designed, each with their own recirculation pumps. In order to keep the product in the entire system in motion, the product-infeed pump should be able to do the following:

        

            
- Replenish the intermediate product-vessel

            
- Provide an excess to be recirculated by the recirculation pump in the "external loop" of the product vessel

            
- Provide product via the intermediate product-vessel to be dosed by the filling pumps

            
- Provide an excess of product to be recirculated by the product-recirculation pump in the "inner loop" of the intermediate product-vessel

        

        

Details regarding where to place mass flowmeters or PATs may differ according to end-user decisions and what they define as critical. For example, while some users may place a PAT sensor immediately after the intermediate product-vessels, others may conclude that the positioning of a PAT downstream from the manifold may be more beneficial to ensure there is no sedimentation in the manifold.

    

    

        

## 導師解析 Tutorial Commentary

        

            

#### 核心概念解析 — 四種設計模式比較

            

本小節介紹了從簡單到複雜的均勻性維持系統設計。以下是四種模式的系統性比較：

            
                
                    
                    
                    
                
| 設計模式 | 適用情境 | 主要風險 |
| --- | --- | --- |
                
                      

                    
                    
                
| Fig 4.6.1-1純攪拌，無再循環 | 真溶液；短管路；輕微沉降傾向 | 管路中的沉降無法防止；低液位失效 |
                
                      

                    
                    
                
| Fig 4.6.1-2攪拌 + 內迴路恆定再循環 | 中等沉降傾向；中等管路長度 | 需要額外再循環泵；系統複雜度提升 |
                
                      

                    
                    
                
| Fig 4.6.1-3純再循環，無攪拌（外迴路） | 槽體適中；管路較短；無剪切力問題 | 槽體過大或管路過長時效果有限 |
                
                      

                    
                    
                
| Fig 4.6.1-4雙迴路（外迴路 + 內迴路） | 高沉降傾向；長管路；無混合器需求 | 系統最複雜；泵浦選型與流量平衡要求高 |
            

        

        

            

#### 比喻說明 Analogy

            

四種設計就像四種不同的城市供水系統，應對「水管中雜質沉積」的問題：

            

                
- Fig 1 = 水塔有攪拌，但水管靜止（適合短距離輸送）

                
- Fig 2 = 水塔攪拌 + 末端管路持續循環（中等距離）

                
- Fig 3 = 取消水塔攪拌，讓全管路持續有水在流（管路不太長）

                
- Fig 4 = 水塔端和末端各自有獨立循環系統（最長距離、最複雜的建築物）

            

            

沒有哪一種是「最好的」——只有哪一種最適合你的產品沉降速率、管路長度和剪切力限制。

        

        

            

#### 重點提示 Key Notes

            

**PAT 感測器位置的策略選擇：**部分使用者將 PAT 置於中間緩衝槽出口，確認進入歧管前的均勻性；另一些使用者選擇置於歧管下游，能更直接確認到達充填泵浦前的最終狀態。關鍵原則：PAT 位置越靠近充填點，越能代表實際充填的均勻性，但設備整合難度也越高。應根據產品的沉降速率和管路設計來決定最佳位置。

            

**廢棄體積的商業意義：**「最低有效攪拌體積」直接決定了每批次的最大可用量。對於高價值生物製劑（如 CAR-T 細胞治療），這個廢棄量的計算精度直接影響批次經濟性。設計時應最小化廢棄體積，同時確保均勻性不受妥協。

        

        

            

#### 實務應用 Practical Application

            

當 CDMO 評估接收一個新的重組蛋白懸浮液產品時，建議在可行性評估階段即完成以下問題的答案：(1) 產品靜置後多快開始沉降（5分鐘？30分鐘？）；(2) 管路總長度和截面積是否能維持湍流狀態；(3) 現有設備是否已有再循環泵浦，還是需要追加投資；(4) 歧管設計是否存在死角（dead legs）導致局部沉積。這四個問題的答案將直接決定採用哪種圖示的設計模式。

        

        

            

#### 練習思考 Practice Questions

            

                
1. Figure 4.6.1-3（純外迴路再循環）的進料泵浦為什麼必須比純充填需求更大？多出的流量去了哪裡？

                
2. 在 Fig 4.6.1-4 的雙迴路設計中，如果內迴路再循環泵浦發生故障，中間緩衝槽中的產品會有什麼風險？你應該如何設計警報和連鎖？

                
3. 對於一個剪切力極敏感的細胞治療產品，你會如何在「防止沉降」和「保護細胞活性」之間取得平衡？

            

        

    

    

### 本節重點回顧 Section Summary (4.4–4.6.1)

    

        
- **充填曲線彈性：**TP 彈性最低（依賴固定壓力 + 閥門時序），PP / RPP / DP 具備更豐富的速度調控能力，適合複雜產品特性的適配

        
- **泡沫控制：**三大對策——液面下補料（dip tube）、潛入式針頭（diving needle）、管路充分排氣（priming）；充填曲線的啟動段與結束段是最高風險點，應降速處理

        
- **滴漏控制：**TP 因無法主動液體回縮（liquid retraction）而對低表面張力或高黏度產品適用性受限；針頭 ID、軟管規格、泵浦尺寸必須作為整體系統設計而非獨立選型；「泡沫 vs. 滴漏」是軟管位置設計的核心取捨

        
- **均勻性維持：**單純攪拌無法保護連接管路中的產品；再循環迴路是更全面的解決方案，但需評估剪切力敏感性；設計模式從簡單（純攪拌）到複雜（雙迴路）應基於產品沉降速率、管路長度和剪切力限制來選擇

        
- **決策層級確認：**以上所有功能性設計（充填曲線、泡沫、滴漏、均勻性）最終服務的是「無菌保證 (Sterility Assurance) → 產品 CQA → 商業彈性」的優先順序，不可因追求通用性或降低成本而妥協前兩項

    

⇧

# Section 4B (cont.): Filling System Functionality (4.11+)

    

充填系統功能性（續）：溫控、大批量、氧氣控制、機器人應用

    

PDA Manufacturing Technology Guide No. 1 | doc p94 - p100

    

### 本章學習目標

    

        
- 理解雙迴路再循環（double-loop recirculation）中三向閥（three-way valve）的作用機制，以及為何適合高成本產品

        
- 掌握溫度控管充填（temperature-controlled filling）的核心挑戰：溫度預算（temperature budget）、冷凝水風險與黏度影響

        
- 分析大批量（large batch）流體路徑設計的關鍵要素：中間暫存槽、液位管控、濾膜備用切換

        
- 了解氧敏感產品的充填控制策略：氮氣覆蓋順序、真空應用、殘留氧驗證方法

        
- 評估機器人技術（robotics）在無菌充填中的效益與限制，包括無手套操作線（gloveless lines）的設計原則

    

4.6.1 (cont.) — Double-Loop Recirculation Without Mixers / 無攪拌器雙迴路再循環設計

    

        

## 原文內容 Original Text

        

### Figure 4.6.1-4 Double-Loop Recirculation Without Mixing

        

**Figure 4.6.1-5** depicts a system where there are no mixers that also utilizes a double-loop design. In this scenario, there are two major differences compared to the example depicted in Figure 4.6.1-4:

        

            
- A decision has been made to use the product-infeed pump to feed product from the product vessel to the dosing system, but also to recirculate back to the vessel in case of a machine stop. This is executed by implementing a three-way valve that either feeds the product to the intermediate vessel or switches to feeding back to the product-vessel in an external loop should the filler stop for any reason (e.g., exceeding a predefined time).

            
- The recirculation of the inner loop takes place *after* the dosing pumps by using another three-way valve design. When there is no stoppage of the line, the product will flow directly through the filling needles into the containers. In case of a machine stop, the dosing pumps will continue to run, but the product will be directed via the three-way valve back to the intermediate product-vessel using the product recirculation pump in the inner loop. This is typically executed for high-cost products where avoiding product rejection, as much as possible, is required.

        

        

Figure 4.6.1-5: Use of Three-Way Valves in Recirculation Loop and at Filling Needles

    

    

        

## 導師解析 Tutorial Commentary

        

            

#### 核心概念解析 Key Concepts

            

**三向閥雙迴路（Three-Way Valve Double-Loop）：**這個設計有兩個獨立的保護層。**外迴路**（outer loop）在機器停止時讓 product-infeed pump 繼續運轉，產品從 product vessel 送出後，透過三向閥切換，直接回流至 product vessel，避免產品滯留在管路中。**內迴路**（inner loop）在充填針後方加設另一個三向閥，使 dosing pump 持續運轉，產品不流入容器而是回流至中間暫存槽（intermediate vessel）。兩個迴路共同確保在任何停機事件下，產品都能持續被推動，不形成停滯。

        

        

            

#### 比喻說明 Analogy

            

想像一條高速公路的匝道系統：平常車輛（產品）順暢進入主線行駛（充填）；一旦前方堵塞（機器停止），匝道閘門（三向閥）自動切換，讓車輛走備用繞道（recirculation loop），繞一圈後回到原點等候，而非原地停車阻塞整條道路。高成本的生技藥品就是這條路上「不能讓它乾等路邊」的名車。

        

        

            

#### 重點提示 Key Notes

            

**適用情境（決策層級）：**此設計增加系統複雜度，不是所有產品都需要。適用標準：

            

                
- **產品 CQA 層級**：對溫度、光線或剪切力敏感的高分子生物製劑

                
- **商業層級**：每批產品原料成本極高，廢棄損失不可接受（例如細胞治療、mRNA 藥物）

                
- 驗證時必須確認兩個迴路的閥門切換時間（valve switching time）不超過允許的停留時間限制

            

        

        

            

#### 練習思考 Practice Questions

            

                
1. 若 inner loop 三向閥在機器停止後 3 秒才切換，而產品的最大允許停留時間（hold time）為 2 秒，應如何處理這個差距？

                
2. 對一款 viscous 蛋白質製劑，outer loop 和 inner loop 的 recirculation 速度應如何設計，才不會對產品造成過度剪切（shear stress）？

            

        

    

4.7 — Functionality for Controlling Temperature / 溫度控制功能

    

        

## 原文內容 Original Text

        

Products that require temperature control during filling commonly have a restrictive "temperature budget," that is, a specific limited duration that the product is permitted to be outside of active temperature control during manufacturing, filling, and packaging. This ensures that the entire time out of temperature through all transport, handling, and patient administration steps (or through end of shelf life) does not adversely affect product quality. For products with a temperature-control requirement, the temperature budget (both time and temperature range) will drive the technical requirements for the filling operation.

        

Product that is affected by temperature can be cooled, in most cases, by cooling the product-vessels. For an intermediate product-bag, a cooling plate can be applied to maintain the temperature, and stainless steel intermediate product-vessels can be cooled by a vessel jacket (a double-walled vessel where cooling liquid is pumped around the outside of the "inner vessel"), or cooling coil.

        

As a consequence of the cold temperatures within a warmer external environment, condensation may form on the outside of the vessels, hoses, manifolds or, even more critically, on the filling needle, which could result in droplets that dilute the product and compromise sterility. To combat condensation, relative humidity of the environment should be closely controlled (without inducing an electrostatic charge to components due to low %RH which could have negative effects such as impact to gravimetric weighing results, dripping, component handling difficulties, etc.). Condensation is a particularly high risk for the portions of the vessel or piping that is within the Grade A environment. In an isolator, there may be the opportunity to more tightly control the relative humidity of the environment to reduce the risk of condensation. Isolators, however, will encounter a different challenge in getting cooling liquid for double-walled vessels inside and back outside of the containment.

        

If using a PP filling system, in addition to cooling the intermediate vessel, it could also be considered to cool the pumps (and therefore the fluid pathway) within a refrigerated enclosure.

        

Temperature may influence the flow of the product due to temperature-induced changes in viscosity. This may be particularly critical for TP filling systems. For these products, the temperature must be carefully managed to optimize the balance between temperature and flowability. The effects of the product temperature on filling accuracy and on weight checks should be understood and addressed within the design and controls.

    

    

        

## 導師解析 Tutorial Commentary

        

            

#### 核心概念解析 Key Concepts

            

**溫度預算（Temperature Budget）：**這是一個累積性的時間帳戶，整個產品生命週期（製造 → 充填 → 貯存 → 運輸 → 患者使用）中，「脫離溫控」的總時間不得超過上限。充填工程師的任務是在充填段只「花費」最少的溫度預算，把剩餘額度留給後段供應鏈不可控的環境。

            

**冷凝水（Condensation）的雙重威脅：**(1) 稀釋產品（濃度 CQA 受損）；(2) 攜帶微生物污染（無菌保證受損）。特別是充填針上的冷凝水滴入容器，是最嚴重的風險點。

        

        

            

#### 比喻說明 Analogy

            

溫度預算就像手機電量：出門時滿格（製造完成），整個旅程中每個環節都在耗電。充填工廠段消耗愈少，後段供應鏈的「電量」愈充裕，患者收到產品時仍有足夠效能。低濕度環境控制如同開省電模式，但若過度節電（%RH 太低）反而造成靜電問題，影響稱重準確度，這正是工程設計的兩難取捨。

        

        

            

#### 重點提示 Key Notes

            

**決策層級提示：**決定冷卻方案時，需評估三個維度：

            

                
- **無菌保證優先**：vessel jacket 的冷卻液管路穿越 isolator 隔離艙是複雜挑戰，必須確保密封完整性，不可為了便利犧牲屏障完整

                
- **產品 CQA**：PP 系統可將 pump 置於冷藏箱內，直接降低流體路徑溫度，對某些生物製劑更有效

                
- **TP 系統特別注意**：黏度隨溫度變化，直接影響充填精度；溫度控制失當等同 CPP 偏移，需在 design validation 中證明

            

        

        

            

#### 實務應用 Practical Application

            

在 CDMO 接案評估溫控充填產品時，應立即詢問客戶：(1) 溫度預算的具體數字（時間 + 溫度範圍）；(2) 客戶是否已完成充填段的溫度分布研究（temperature mapping）。若客戶尚未確立這些數據，充填線的設計規格無法定案，專案啟動將面臨重大風險。

        

    

4.7.1 — Filling Speed, Filling Time, and Temperature / 充填速度、時間與溫度管控

    

        

## 原文內容 Original Text

        

Filling speed should be designed to ensure that filled containers can be returned to refrigerated conditions within a controlled duration of time. Accumulation points that serve to buffer capacity on the line (e.g., accumulator tables before lyophilizer loaders or before cappers) should be minimized to ensure that the exposure of every unit does not exceed the maximum allowed time (keeping in mind that accumulation points are using randomized handling where individual containers are not traceable). For lyophilizer loading consider whether the filler can continuously run while the lyophilizer loader is changing shelves. Cold loading of lyophilizers may need to be accommodated with additional controls, such as low %RH, special closing doors on the lyophilizer, or nitrogen blanket, to prevent the possibility of condensation on the outside of the containers from affecting the loading.

        

For all temperature-restricted products, the validation must include demonstration that the time-out-of-temperature period is well controlled and acceptable to the product quality for all containers along the line.

    

    

        

## 導師解析 Tutorial Commentary

        

            

#### 重點提示 Key Notes

            

**積累點（Accumulation Point）的隱患：**充填線上的暫存區看似只是緩衝，但對溫控產品而言，每個容器在積累點停留的時間是*隨機且不可追溯的*（randomized, not traceable）。這意味著最壞情境（worst case）——某個容器在積累點停留最長時間——必須被涵蓋在驗證設計中，而非只取平均值。這是設計核心，非細節。

        

        

            

#### 公式與計算 Formula

            

```

溫控驗證關鍵計算：

最大允許充填時間 =
  溫度預算總額 - 配方製造時間 - 運輸時間 - 患者使用時間

充填線設計速度需滿足：
  最慢單元在充填線上的暴露時間 ≤ 充填段允許時間

冷凍乾燥裝載特殊考量：
  換架（shelf change）期間停機時間 × 暫存容器數量
  → 每個容器的最大積累等待時間需計算
```

        

        

            

#### 核心概念解析 Key Concepts

            

**冷凍乾燥裝載的冷凝水風險：**當充填完成的冷瓶在溫暖潮濕的環境中等待裝入凍乾機，瓶身外側容易結露。冷凝水可能流入半塞（half-stopper）縫隙，影響密封完整性。氮氣覆蓋（nitrogen blanket）和低濕度環境是標準對策，驗證時需包含最差條件（如生產線最慢運行、最長換架時間）。

        

        

            

#### 練習思考 Practice Questions

            

                
1. 某 mRNA 疫苗的溫度預算為 2°C~8°C 範圍內總計不超過 4 小時，若製造配製佔用 1.5 小時，充填線設計時最多允許多少暫存時間（含冷凍乾燥換架）？

                
2. 若充填線設計中刻意減少積累點，可能對生產速率造成什麼影響？如何在 SA 與生產效率之間取得平衡？

            

        

    

4.8 — Design and Functionality for Large Batch Sizes / 大批量充填設計功能

    

        

## 原文內容 Original Text

        

The fluid pathway for large batches commonly will include an intermediate holding-vessel that is a fraction of the size of the bulk vessel. This is especially true for designs where the bulk vessel is some distance away from the filler. The intermediate vessel is able to moderate the head pressure between the vessel and the pumps or pinch valves. The positioning of vessels above the filling needles is critical due to the head pressure that this provides. The deeper the vessel, the greater the head pressure. If the vessel is placed too high, relative to the fill pumps, this can induce leaks.

        

The intermediate vessel is typically located after the sterilizing filter. The bulk vessel, upstream of the intermediate vessel, will have a sterilizing-vent filter to assist in the compensation of the pressure as the vessel empties. If the headspace pressure in the intermediate vessel is too variable, dosing control can suffer. To manage that level in the intermediate vessel, a product transfer pump is sometimes employed to feed the bulk from the manufacturing vessel to the intermediate vessel. Other transfer controls are also possible, such as overpressure with pinch valves. The size of the intermediate vessel may be a consideration when determining the frequency of replenishment and to better enable a constant flow.

        

Large batches lend themselves to fixed piping systems with CIP/SIP rather than SU. The ability to switch to a new filter pathway during the batch, should the first filter become blocked with product, may be a consideration with large batches. There is no practical difference in the design of the fluid pathway(s) based on the type of filler.

    

    

        

## 導師解析 Tutorial Commentary

        

            

#### 核心概念解析 Key Concepts

            

**靜水壓（Head Pressure）的物理意義：**液面距充填針的高度差直接產生靜水壓（P = ρgh）。對於 TP（時間壓力）充填系統，靜水壓是充填體積的決定因素之一——vessel 液位下降 → 靜水壓降低 → 充填量偏低。中間暫存槽（intermediate vessel）的功能是將這個高度差穩定在小範圍內，確保充填精度。

            

**中間暫存槽的三重作用：**(1) 穩定靜水壓；(2) 緩衝上游大槽（bulk vessel）液位變化；(3) 提供充填過程中的連續供料，不因上游傳輸暫停而中斷。

        

        

            

#### 比喻說明 Analogy

            

大批量充填系統就像城市自來水網絡：大型水庫（bulk vessel）儲存大量水源，但若水庫直接連接每戶水龍頭，液位波動會造成水壓忽高忽低。因此在社區設置加壓站（intermediate vessel），維持穩定水壓，每戶居民（充填針）都能獲得一致的水流。sterilizing-vent filter 就是水庫洩壓閥，確保槽壓隨液位下降自動補氣，不造成真空。

        

        

            

#### 重點提示 Key Notes

            

**大批量 = CIP/SIP 優先：**大批量生產的洗清（CIP）和滅菌（SIP）成本，相較於一次性使用（SU）系統的材料耗材成本，在多次使用下明顯降低。但更關鍵的是：大批量充填時，若中途更換 SU 液體路徑，風險遠高於固定管路（fixed piping），因為連接作業本身就是污染風險點。

            

**備用濾膜切換：**大批量製程中，若主濾膜（primary sterilizing filter）因產品蛋白質堵塞，必須在不終止批次的情況下切換至備用濾膜路徑（redundant filter pathway）。此設計的完整性（integrity test 切換前後）必須在 process validation 中驗證。

        

        

            

#### 練習思考 Practice Questions

            

                
1. 若 intermediate vessel 容量設計過小，充填過程中需要頻繁補充（replenishment），這對充填連續性和無菌保證各造成什麼風險？

                
2. 一個採用 TP 充填系統的大批量產品，bulk vessel 在批次末尾液位下降至 10%，預期靜水壓變化多大？對充填精度影響的容忍度如何在 design spec 中定義？

            

        

    

4.9 — Functionality to Control Oxygen Exposure / 氧氣暴露控制功能

    

        

## 原文內容 Original Text

        

Additional controls are required for the filling step for oxygen-sensitive products. Products that are sensitive to oxygen are typically stored in vessels in an overpressure condition with an inert gas, such as nitrogen, prior to filling, as well as during formulation/compounding. Any intermediate vessel in the filling process is also blanketed with nitrogen. When biodecontamination of the environment is performed prior to filling, extreme care should be taken to control residual levels of the biodecontamination agent (e.g., vaporized hydrogen peroxide) in the environment and absorbed in the materials to be used during the filling operation (e.g., tubing). The former is reduced through effective aeration cycles and the latter through protective packaging, through flushing or performing CIP and/or SIP after biodecontamination. The initial flush of product through the fluid pathway is commonly discarded as the air is displaced from the lines by the liquid and steps may be taken to eliminate residual oxygen in the container after closing, as described below.

        

Since liquid will displace air, the benefits of pre-gassing of containers, as well as gassing during filling (common historically), are typically not as effective as gassing after filling during closing to reduce the residual oxygen in the headspace of the container. Studies have demonstrated that *gassing during closing is the most efficient and effective way of reducing oxygen in the headspace*. Thus, newer equipment designs have an inert gas overlay only at the closing position; however, older product registrations may have additional details that make it necessary to include gassing at other positions, and it is possible to source filling systems with any of the desired positions for gassing.

        

For hypersensitive products, it is also possible to apply vacuum to the container to augment the gassing steps through a vacuum bell at the required positions along the line. For example, a vacuum can be applied prior to filling to ensure a complete fill on containers such as cartridges and syringes to ensure complete filling at the tip. This evacuation has an added benefit of reducing atmospheric air from the tip that might remain in the product for oxygen-sensitive products. Vacuum can be applied during the fill as well, especially for viscous products, where the evacuation helps to ensure that no air is trapped within the product. Vacuum can also be applied after filling before introduction of inert gas to the headspace. The evacuation sequence depends on the product sensitivity, the oxygen-reduction target, and the viscosity of the product. Sequence of operation may include evacuation, inerting, evacuation, and then closing to completely remove the oxygen from the headspace (see Section 7.3.2 for use of a vacuum bell during closing process).

        

            "Low-viscosity products may boil under vacuum; therefore, vacuum sequences may be limited for these applications."
        

        

To enable the supply of inerting gas to the container, the gas may be supplied through a separate gassing needle or a jacketed needle (needle within a needle) (see Section 3.0). SU needles are not currently available with a jacketed design. Cleaning validation is complicated for jacketed needles. For post-filling gassing (performed between filling and stoppering), it is possible to include an inert gas tunnel above the containers. The tunnel will also provide additional protection in the headspace in case of brief-duration line stoppages. However, when considering the design of the tunnel, the potential for the tunnel to disrupt First Air must be evaluated and the approach justified.

        

For a lyophilized product, the lyophilizer chamber is typically filled with nitrogen after vacuum steps are completed to ensure low residual oxygen in the container prior to stoppering or closing.

        

Once the container is sealed (with plunger, stopper and cap, or disc seal) for headspace-controlled products, the sealed-container residual oxygen must be verified. This may be accomplished through a suitable validation and quality control sampling, or through validated instruments that provide 100% on-line or off-line verification. The approach taken must be appropriate to the CQAs of the product and justified within the product's overall control strategy.

    

    

        

## 導師解析 Tutorial Commentary

        

            

#### 核心概念解析 Key Concepts

            

**充氣順序的演進（Gassing Sequence Evolution）：**

            

                
- **傳統做法**：充填前充氣（pre-gassing）＋充填中充氣。問題：液體充填時本身就會排開大部分空氣，充填前的氣體被液體取代，效益有限

                
- **現代最佳實務**：只在封蓋位置充氣（gassing at closing only）。研究證明這是最有效降低 headspace 殘留氧的方式

                
- **超敏感產品**：加入真空步驟（vacuum bell），序列為「抽真空 → 充惰性氣體 → 再抽真空 → 封蓋」，多步驟確保接近零氧環境

            

            

**VHP 殘留問題：**隔離器使用 VHP（vaporized hydrogen peroxide）滅菌後，VHP 會被 tubing 等有機材料吸附。若充填時產品接觸含殘留 VHP 的管路，可能造成產品降解（氧化），這正與「減少氧暴露」的目標相矛盾。CIP/SIP 或充分排氣程序是必要對策。

        

        

            

#### 比喻說明 Analogy

            

容器 headspace 的除氧過程就像真空包裝食品：超市的真空包裝機先用幫浦抽空袋內空氣，再注入氮氣或直接熱封，延長保存期。藥品容器更精密——某些產品要求「抽真空 → 填氮 → 再抽真空 → 封蓋」的四步序列，就像高級咖啡豆的保鮮包裝，多一道工序換來數倍的保存期。但低黏度液體（就像汽水）在真空下會沸騰，因此不適合真空步驟，必須針對產品特性選擇對應方案。

        

        

            

#### 重點提示 Key Notes

            

**First Air 不可妥協：**惰性氣體隧道（inert gas tunnel）在充填針下方形成氮氣覆蓋，但物理結構本身可能阻擋從 HEPA 過濾器向下流動的 First Air（一級無菌氣流），在開口容器上方創造紊流區。設計時必須進行 CFD 模擬和 smoke study，確認隧道設計不影響 Grade A 環境完整性。此處無菌保證（Sterility Assurance）優先於氧氣控制。

            

**SU 針頭的限制：**一次性使用（SU）針頭目前無法製造成 jacketed design（針中針），這對需要同時充填和充氣的產品是一個實質限制。若產品需要 jacketed needle，就必須使用可清洗驗證的不鏽鋼針頭，並承擔清潔驗證的複雜度。

        

        

            

#### 實務應用 Practical Application

            

CDMO 接收一款 mRNA 脂質奈米粒（LNP）製劑，要求 headspace 殘留氧 <0.5%。評估方向：(1) 確認是否有現有的 inert gas tunnel 設備；(2) 評估現有充填針是否需升級為 jacketed design；(3) 確認隔離器 VHP 排氣程序是否足以將 VHP 殘留降至不影響 LNP 穩定性的水準；(4) 100% headspace 殘留氧在線檢測設備的採購與驗證成本。這些都是報價前必須釐清的技術風險點。

        

        

            

#### 練習思考 Practice Questions

            

                
1. 為何充填後封蓋時才充氣（gassing at closing）比充填前充氣（pre-gassing）更有效？用液體排氣原理解釋。

                
2. 一款低黏度抗氧化注射劑不適合使用真空步驟，工程師應如何設計替代方案來達到 headspace 氧含量 <1% 的目標？

            

        

    

4.10 — Enhancing Functionality with Robotics / 機器人技術的功能強化

    

        

## 原文內容 Original Text

        

People are the greatest source of contamination associated with aseptic filling. Therefore, robotics offers an enormous opportunity to improve sterility assurance (SA) when designed and implemented properly. Recent advances in robotics and isolator designs have enabled the implementation of gloveless isolators which are a significant enhancement in SA for aseptic filling. This section does not provide comprehensive design or implementation guidance for robotics (nor for gloveless isolators) but rather lists some of the points to consider for this type of installation.

        

Robots are machines capable of automatically performing complex tasks that would otherwise be performed by humans. Typical robotics designs are four- or six-axis armatures. The definition of robots may conventionally be extended to programmable rakes, X-Y tables, and other machine movement such as magnetic levitating conveyance, all of which can offer benefits to SA as they improve handling and limit the risk of contamination, disruption of unidirectional airflow, or the needed interventions of personnel. However, this section focuses on the more complex robotics associated with numerous degrees of motion.

        

When using robotics in the aseptic environment for aseptic filling, the design and operating principles must be carefully evaluated for suitability to operate within a cleanroom environment. Robotic systems, regardless of type, bring a certain risk to the unidirectional airflow due to a tendency to generate turbulence. Therefore, robots should not be used for the sake of using robotics but rather should bring a benefit for the aseptic-filling process. CFD and air flow visualization (i.e. smoke studies) should verify the impact of the robot on the unidirectional airflow and the robot's potential to create excessive turbulence or to introduce contamination.

        

Implementation of robotics adds complexity to filling system automation and motion control unless careful integration with the filling machine is executed as part of the filling-machine design. In some cases, robotics may present a limitation on the speed and accessibility (e.g., for interventions, for cleaning and disinfection) of the line, which may be an unacceptable tradeoff in the design of the aseptic operation. However, robotics may provide enhancements in reliability and reproducibility for complex tasks that provide a significant aseptic advantage. Therefore, companies should carefully and thoughtfully assess whether robotics are the right solution for process automation.

        

Contamination control strategies would require that manual aseptic assembly is to be avoided. Therefore, robotics is commonly sought as a solution; however, robotic assembly of filler components can be very difficult. For example, the geometry and design of the RPP or TP fillers make robotic setup difficult. In contrast, PPs can be set up with robots, as the tubing installation is in a fixed position with a relatively simple geometry. It is commonly not required for SA purposes, however, as it is possible to have the PPs outside of the isolator or RABS. In all cases, robotics may be useful for the installation of tubing and needles downstream of the fill pumps within the sterile boundary. This is especially appropriate when the tubing and needles are extended through a transfer port system into an isolator. The robotics can remove the needle assembly from the port and install them in the needle receptacle.

        

Companies should also be aware that additional skill sets may be required for operations and maintenance personnel that are not needed for conventional filling and conveyance.

    

    

        

## 導師解析 Tutorial Commentary

        

            

#### 核心概念解析 Key Concepts

            

**人是最大污染源（People = Greatest Contamination Risk）：**這是無菌充填的基本公設，也是機器人技術在製藥界的最強驅動力。EU GMP Annex 1 (2022) 明確要求企業建立 Contamination Control Strategy (CCS)，其核心之一就是「最小化人員干預（minimize manual interventions）」。機器人不是科技炫耀，而是 SA 戰略工具。

            

**機器人定義的廣義延伸：**本章提醒工程師，機器人不只是六軸手臂——磁浮輸送（magnetic levitating conveyance）、X-Y 定位台、可程式化推板（programmable rakes）都屬於「減少人員介入」的廣義機器人系統，在設計 CCS 時均應納入評估。

        

        

            

#### 比喻說明 Analogy

            

機器人在無菌充填中的角色，就像自動化倉儲（Amazon 倉庫的機器手臂）：在一個需要高精度且不允許錯誤的環境中，機器人取代人工進行重複性、高風險動作。但若倉庫通道（unidirectional airflow）設計不當，機器手臂來回移動反而製造氣流混亂，反效果。因此機器人設計必須先做 CFD 模擬，確認它是「安靜地工作在氣流之下」，而非「攪動整個環境」。

        

        

            

#### 重點提示 Key Notes

            

**充填系統與機器人相容性矩陣：**

            

                
- **PP（蠕動泵）**：管路幾何簡單，機器人設定相對容易；且 pump 可置於 isolator 外，降低機器人進入無菌區域的必要性

                
- **RPP（旋轉活塞泵）**：機構幾何複雜，機器人安裝困難，目前仍多為手動設定

                
- **TP（時間壓力）**：同樣幾何複雜，機器人設定具挑戰性

            

            

**共同適用：**無論使用哪種充填泵，充填針和下游 tubing 的安裝都是機器人的良好應用場景，特別是透過 RTP（Rapid Transfer Port）將組件送入 isolator 後的取出與安裝動作。

        

        

            

#### 練習思考 Practice Questions

            

                
1. 若公司決定引入六軸機器人進行充填針安裝，需要進行哪些驗證活動以確認其不影響 Grade A 的 unidirectional airflow？列出至少三項。

                
2. 為何 PP 充填系統比 RPP 更容易導入機器人自動化？這對於「選擇充填系統」的商業決策有何影響？

            

        

    

4.10 (cont.) — Robotics Design Considerations & Gloveless Lines / 機器人設計要點與無手套操作線

    

        

## 原文內容 Original Text

        

### Design Considerations

        

            
- Selection for service should be for operations where human intervention presents a greater SA risk than to the robot

            
- Robotic handling of filled containers should be designed to be smooth (i.e., minimize rapid change in acceleration, braking, and turning) and to minimize the risk of stopper displacement, sloshing, and splashing; sloshing liquids can be a more critical concern with liquid products to be freeze-dried or for containers that are filled to the brim

            
- Shape of the robotic arms should be selected to reduce turbulence

            
- Speed and smoothness of reaction of the robot to reduce airflow turbulence should be considered in the programming (e.g., rapid upward movements are to be avoided or minimized, slowest motions should be used near open containers)

            
- Placement of the robotic arms near the critical surfaces or in areas that risk reflux from "dirtier" zones should be forbidden (e.g., not above open containers or components, not near air-return openings in an open RABS (oRABS))

            
- Location of servos and cams should be outside the aseptic barrier or below the working height and must be sealed

            
- Wear parts and friction points (e.g., gaskets and seals) should be evaluated for particle generation in order to minimize total particle contamination within the aseptic operations (localized exhaust or air returns should be placed according to high-risk particle-generating operations)

            
- Lubricants must be sealed against the Grade A environment, ideally with dual lip seals that prevent leakage of lubricant out and protect the seal from intrusion of cleaning agents and disinfectants

            
- Cleaning and biodecontamination of the robotics should be considered in the design of the robot to ensure that there are no locations that might hold product or be difficult to decontaminate

            
- Coatings on the robot materials of construction (if any) should be robust to the intended cleaning and biodecontamination agents

            
- Frequency of referencing (e.g., returning to home position) and calibration should be sufficient to correct for minor positioning errors to reduce the risk of misalignment

        

        

### Examples Where Robots Support Aseptic Operations

        

            
- Opening of RTP doors (when automated opening option is not feasible)

            
- Installation of a filling path (manual setup with gloves requires roughly forty glove-touches around the filling needle)

            
- Handling of viable and total particle-monitoring (regular glove intervention brings risk, improper handling can generate false positives)

            
- Installation of indirect product-contact parts

            
- Handling of packaging materials (e.g., removal of SteriBags, introduction of nests, delidding)

            
- Handling of containers in a variety of modalities including single container and nested containers, as well as handling containers in both modes (e.g., denesting containers to enable a 100% IPC or denesting of RTU containers for capping application)

            
- Specific container(s) removal (e.g., sampling, weight check, reject removal with verification)

            
- Bulk handling of containers or trays of containers (e.g., lyophilizer loading, beginning/end-of-line tray loading, palletizing)

            
- Individualized container transport for filling and stoppering (which may have a benefit in reducing or eliminating change parts, but may result in a decrease in line speed)

        

        

### Gloveless Lines

        

Advancements in aseptic-filling technology have resulted in the development of filling systems with a reduced need for manual interventions with gloves. Gloveless (or near gloveless) lines require advanced automation such as robotics for all activities that would be performed by an operator on a conventional filling line. Progressive implementation of robotics on conventional lines can greatly reduce risk for routine activities, even when all activities are not yet designed to be robotic. In these cases, the use of gloves should be designated within SOPs for intervention procedures. Those interventions should be qualified and included in the APS design.

        

When robotics are part of the desired design for the filling line, they commonly bring a focus on how to improve the design of the underlying equipment and design of required process interventions. The aim is to process product in a simplified manner with less risk of contamination or errors in handling, which is beneficial to process robustness in more than just the direct application of the robotics solution.

    

    

        

## 導師解析 Tutorial Commentary

        

            

#### 重點提示 Key Notes

            

**「四十次手套接觸」的意義：**手動安裝充填路徑需要大約 40 次手套接觸（40 glove-touches）。每次手套接觸都是一個潛在的污染事件。機器人安裝將這個數字降至 0。這是一個非常有說服力的量化論據——在向管理層或客戶說明引入機器人的 SA 效益時，這個數字比任何定性描述都更有力。

            

**潤滑劑雙重密封（Dual Lip Seal）：**機器人的驅動機構（servos, cams）必須使用潤滑劑，但潤滑劑一旦進入 Grade A 區域，就是化學污染。雙唇密封（dual lip seal）設計：外唇防止潤滑劑洩漏至無菌區；內唇防止清潔劑和 VHP 侵入並腐蝕密封件。這是「機器人可以進入 Grade A」的先決條件之一。

        

        

            

#### 公式與計算 Formula

            

```

機器人 SA 效益評估框架：

引入機器人前：
  手動介入次數/批 × 每次介入汙染概率 = 批次污染風險指數

引入機器人後：
  機器人操作次數/批 × 機器人汙染概率（遠低於人員）
  + 殘餘手動介入次數 × 介入汙染概率

SA 改善率 = (前 - 後) / 前 × 100%

注意：機器人本身帶來的新風險
  - 顆粒產生（wear parts）
  - 氣流紊動（turbulence）
  → 這些需在 CFD + 粒子監測研究中量化
```

        

        

            

#### 核心概念解析 Key Concepts

            

**無手套操作線（Gloveless Lines）的演進路徑：**業界共識是「漸進式導入」而非一步到位。實務做法：

            

                
1. **第一階段**：識別最高風險的手動介入（如充填路徑安裝），優先機器人化

                
2. **第二階段**：次高風險介入（如容器取樣、廢棄物移除），逐步機器人化

                
3. **第三階段**：建立完整的 APS（無菌製程模擬），涵蓋所有殘餘的人工介入點，並確認其頻率在年度批次中可接受

            

            

每一個殘餘的人工介入都必須被記錄在 SOP 中，並在 APS 設計中被驗證，不能有灰色地帶。

        

        

            

#### 實務應用 Practical Application

            

CDMO 正評估為現有 isolator 充填線導入機器人。決策清單：

            

                
- 確認 CFD 研究範圍（需涵蓋機器人各工作姿態）

                
- 評估機器人臂材質對 VHP 和 IPA 的耐受性

                
- 確認 servo 和 cam 的密封設計（dual lip seal 規格）

                
- 更新 APS 設計，納入機器人操作的最壞情境模擬

                
- 評估操作和維護人員的額外培訓需求（機器人程式設定、故障排除）

                
- 確認機器人引入後的生產線速度是否符合商業產能要求

            

        

        

            

#### 練習思考 Practice Questions

            

                
1. 本節指出 RPP 和 TP 充填系統較難進行機器人自動化設定，而 PP 相對容易。若一家 CDMO 計畫新建一條以機器人為核心的「近無手套」充填線，這個資訊應如何影響充填泵系統的選型決策？

                
2. 機器人顆粒監測取樣器（viable and total particle monitoring）取代人工取樣的優勢是什麼？為何人工取樣會產生「假陽性」結果？

                
3. 漸進式引入機器人的策略中，如何判斷哪個介入點應該「最優先」機器人化？請設計一個優先級評估矩陣。

            

        

    

    

### 本節重點回顧 Section Summary

    

        
- **雙迴路再循環（4.6.1 cont.）：**三向閥設計讓 dosing pump 在機器停止時仍持續運轉，產品通過 inner loop 回流至中間暫存槽，避免高成本產品因停機而廢棄——這是「商業效益」驅動的設計，但必須在不妥協無菌保證的前提下執行

        
- **溫度控管（4.7, 4.7.1）：**溫度預算是整個產品生命週期的累積帳戶，充填端的目標是「消耗最少額度」；冷凝水（condensation）對無菌保證和產品 CQA 構成雙重威脅，相對濕度控制是關鍵；TP 系統因黏度隨溫度變化，溫控失當直接影響充填精度

        
- **大批量設計（4.8）：**中間暫存槽穩定靜水壓、緩衝液位波動、確保連續供料；大批量場合優先採用固定管路（fixed piping）搭配 CIP/SIP；備用濾膜切換能力是大批量風險管理的重要設計考量

        
- **氧氣控制（4.9）：**充填後封蓋時充氣（gassing at closing）已被研究證實是最有效的降氧方式；真空序列（vacuum-inert-vacuum-close）適用於超敏感產品但受低黏度限制；inert gas tunnel 設計需通過 CFD 驗證確認不影響 First Air；殘留氧驗證可採用 100% 在線監測（CQA 驅動選擇）

        
- **機器人技術（4.10）：**人員是最大污染源，機器人是 SA 戰略工具而非技術炫耀；CFD + smoke study 是機器人設計驗證必要工具；PP 系統最容易機器人化，RPP/TP 較難；無手套充填線（gloveless line）代表 SA 演進的最高形式，漸進式導入是業界主流路徑；每個殘餘人工介入必須納入 APS 設計

    

⇧

## Topic 5: Dose Control 劑量管控 (p101-p114)

# Section 5A: Dose Control (5.0–5.1.4)

    

劑量管控系統：設計原則與風險效益分析

    

PDA Manufacturing Technology Guide No. 1 | doc p101 – p107

    

### 本章學習目標

    

        
- 理解劑量管控系統（Dose Control System）在無菌充填中的核心地位，以及與 CQA 的直接關聯

        
- 比較 100% 重量檢測（100% Weight Check）與間歇性統計抽樣（Intermittent Statistical Weight Check）的優缺點，並掌握適用情境

        
- 掌握重力式劑量管控（Gravimetric Dose Control）的四大不確定性來源：Container Holdup、Scale Bias、sMU、sFill

        
- 理解 k 因子（k-factor）系統如何將不確定性轉化為填充機的調整限與拒絕限設定

    

5.0 Designs for Dose Control Systems

    

        

## 原文內容 Original Text

        

To ensure that the delivered parenteral dose to the patient is highly accurate, the filled volume must be controlled during the filling process. Whether filling a SU container (e.g., a prefilled syringe in an autoinjector or a vial where all the contents are fully withdrawn for injection) or a multi-use container (e.g., a cartridge in a device or a multi-use vial), the amount of drug product filled into the container is of the utmost importance.

        

To ensure this CQA for each container, the system must be designed to accommodate either 100% weight checks or intermittent (statistical) weight-check for IPC of dosing accuracy. Sections 5.1–5.1.4 explore the benefits and risks of both approaches, design options, and factors that influence system stability.

        

            Note: This section does not discuss Quality Control methods such as United States Pharmacopeia <697> Container Contents for Injections (harmonized with European and Japanese Pharmacopeia). Such methods are typically designed for off-line use, are destructive tests, and are not typically employed for in-process control purposes.
        

    

    

        

## 導師解析 Tutorial Commentary

        

            

#### 核心概念解析 Key Concepts

            

**劑量管控（Dose Control）**是充填製程的核心 CQA（關鍵品質屬性）之一。每個容器所填入的藥量必須精確，這直接影響病患收到的實際治療劑量。

            

兩種主要容器類型有不同的管控挑戰：

            

                
- **SU 容器**（一次性使用，如預充填注射器）：整支注射，填充量即為給藥量

                
- **多用途容器**（如多劑量瓶、卡匣）：每次取用量不固定，填充總量需保護每一次用藥

            

        

        

            

#### 比喻說明 Analogy

            

想像咖啡師泡一杯 espresso：客人點了雙份（double shot），要的是剛好 60ml，多或少都影響口感與咖啡因含量。充填機面對的是同樣的任務，只是精度要求更嚴格——通常在 ±2% 以內，而且每一支都要準確，不能靠「平均起來差不多」交差。

        

        

            

#### 重點提示 Key Notes

            

USP <697> 等藥典方法是**離線破壞性測試（off-line destructive）**，不能替代製程中管控（IPC）。本節只討論**線上（on-line）**管控方法。這個區分在查核時常被稽查員考核，要牢記。

        

        

            

#### 練習思考 Practice Questions

            

                
1. 為何單支預充填注射器（PFS）對填充精度的要求，比多劑量瓶更嚴格？

                
2. USP <697> 屬於 IPC 嗎？為什麼不能用它取代線上重量管控？

            

        

    

5.1 Dose Control Systems Risks and Benefits

    

        

## 原文內容 Original Text

        

Whenever possible, 100% of container doses should be checked as an integral part of the filling process, as long as line speed and line design permit this approach. If this is not possible, an intermittent statistical dose-check should be done automatically on-line. Both approaches have advantages and disadvantages that will be described in this section.

        

Quarantine buffers are required for all intermittent on-line weight check systems to ensure that the automation is accurately tracking any container between the last good weight check and a failing weight check. For filling systems that make use of nested components, part of the design approach for on-line intermittent weight checks should be to ensure the quarantine buffer enables the identification of entire nests between weight checks so that they can be easily segregated for further investigation or discard.

        

Typically, off-line IPC, which is not automated, has the disadvantage of introducing a high degree of human error either during the weight-check procedure or the documentation of the results. Off-line weight checks are commonly required to be destructively tested (e.g., emptying the product in the container for weighing on an external laboratory balance), which also makes this process undesirable.

        

Throughout the remainder of this section all check-weigh descriptors will describe on-line techniques unless specifically identified.

        

A thorough risk assessment, such as that described in the International Council for Harmonisation's Quality Guideline Q9(R1): Quality Risk Management, PDA's Technical Report No. 54: Implementation of Quality Risk Management for Pharmaceutical and Biotechnology Manufacturing Operations or PDA/ANSI Standard 03-2025, Standard Practice for Quality Risk Management of Aseptic Processes might be employed to assess the risks associated with the various weight-check approaches for a specific filling configuration (7–9). See TR 54-2 for applied examples of packaging risk assessments (10).

        

The benefits and risks of on-line intermittent and on-line 100% weight-check approaches are described in Sections 5.1.1–5.1.4.

    

    

        

## 導師解析 Tutorial Commentary

        

            

#### 核心概念解析 Key Concepts

            

**Quarantine Buffer（隔離緩衝區）**是間歇抽樣系統的必要配套。當最後一次合格量測到下一次量測之間發生問題，所有這段期間充填的容器都必須被追蹤並保留，直到確認合格才能放行。

            

這個概念在 Nest 充填線上特別重要：每個 Nest（巢盤）包含多個容器，系統必須能精確對應每個 Nest 的填充結果。

        

        

            

#### 比喻說明 Analogy

            

Quarantine buffer 就像機場的安檢等候區（airport security holding area）：每個旅客（容器）在通過安檢（重量驗證）之前，都必須被追蹤在等候區內。若發現某個時間點的問題，整個等候區的旅客都要重新審查，不能放行。間隔時間越長，等候區越大，管理成本越高。

        

        

            

#### 重點提示 Key Notes

            

ICH Q9(R1) 要求劑量管控方法的選擇必須有正式的**品質風險管理（QRM）**文件支撐。選擇間歇抽樣而非 100% 檢測，必須有充分的科學和風險理由，不能只以速度或成本為由。稽查時這個決策的文件紀錄是高頻稽查點。

        

        

            

#### 練習思考 Practice Questions

            

                
1. 你的廠區使用 Nest 充填線，採間歇抽樣。若抽樣率 1%、每 Nest 100 支注射器，需要隔離多少 Nests？

                
2. 離線 IPC 的兩個主要缺點是什麼？為何特別不適合無菌充填環境？

            

        

    

5.1.1 Benefits of Intermittent Weight Checks

    

        

## 原文內容 Original Text

        

The benefits of intermittent statistical weight-check approaches include:

        

            
- For RTU primary packaging material, the containers can remain within the nest, and no denesting process is needed.

            
- Filling lines can run at a higher speed as samples are only taken statistically, depending on the IPC rate.

        

    

    

        

## 導師解析 Tutorial Commentary

        

            

#### 核心概念解析 Key Concepts

            

**RTU（Ready-to-Use，即用型）**包材通常以 Nest 形式提供，如整盤注射器或西林瓶。間歇抽樣不需要將容器從 Nest 取出（denesting），可直接在 Nest 內完成充填與量測，維持容器排列不變，減少機械操作風險。

        

        

            

#### 比喻說明 Analogy

            

想像餐廳用同一個托盤上菜，廚師只需抽查其中幾道菜的份量，而不用把每道菜都從盤子拿出來秤重。這樣出菜速度快，但若某道菜有問題，整桌可能都需要重新確認。

        

        

            

#### 重點提示 Key Notes

            

間歇抽樣的「速度優勢」是有代價的：你的**填充目標值必須設得更保守**（偏離下限更遠），以補償未被檢測容器的不確定性。這意味著更多的 overfill，即每支容器多填一些，以防未被抽到的容器低於下限。高單價產品（如 mAb、基因療法）的 overfill 成本相當可觀。

        

    

5.1.2 Constraints of Intermittent Weight Checks

    

        

## 原文內容 Original Text

        

The risks of an intermittent (statistical) weight-check approach include:

        

            
- Potential missing detection of underfills between the IPC sampling points

            
- Quarantine handling between the IPC sampling points (e.g., with a 10-fill station RTU filling line running IPC at a 1% rate with 100 containers per nest, 1 row of 10 syringes in each of 10 nests will be weighed; in this case, 10 nests must be held in a quarantine buffer awaiting results of subsequent check-weigh results)

            
- Filling control strategy must take bias between the measurements tare and gross into account, whether two scales or a single scale are used, potentially resulting in a smaller filling range to compensate (see Section 5.2 and Section 5.3 for additional details on dose control).

        

    

    

        

## 導師解析 Tutorial Commentary

        

            

#### 核心概念解析 Key Concepts

            

**間歇抽樣的三大風險**環環相扣：

            

                
- **偵測盲區**：抽樣點之間發生的問題（如氣泡、泵浦漂移）無法即時發現

                
- **隔離成本**：需要足夠的實體緩衝空間和自動化追蹤系統，設備成本和線體長度都增加

                
- **量測偏差補償**：Tare 和 Gross 不一定用同一個秤，兩個秤之間的 Bias 必須納入填充視窗計算，壓縮可用的操作範圍

            

        

        

            

#### 公式與計算 Formula — 隔離 Nest 數量估算

            

```

範例設定：
  填充站數：10 站
  IPC 抽樣率：1%（每 100 容器抽 1 個）
  每個 Nest 容器數：100 支
  每次抽取：10 個 Nests 中各取 1 排（1×10 支）

所需隔離 Nests 數 = 抽樣間隔期間通過的 Nests 數
  = 1/1% = 100 容器間隔 ÷ 10 站 = 10 Nests

結論：系統需保留 10 個 Nests 在隔離緩衝區，
等待後續量測結果才能放行或拒絕。
            
```

        

        

            

#### 練習思考 Practice Questions

            

                
1. 若抽樣率從 1% 提高到 5%，隔離 Nests 數量如何變化？對線速有何影響？

                
2. Scale bias 如何影響填充下限的設定？為何「偏差越大，可用操作視窗越小」？

            

        

    

5.1.3 Benefits of 100% Weight Checks

    

        

## 原文內容 Original Text

        

Typically, 100% IPC weight checks are accomplished using a tare scale (which weighs the empty container prior to filling) and a gross scale (which weighs the container after filling). Tare and gross scales are provided for each filling station so that each dosing path is verified for weight. (Configurations with a single scale per dosing path are also available for low-throughput applications, where the single scale is used for both tare and gross.)

        

The benefits of 100% weight checks include:

        

            
- Possibility to dose-in, re-dose, and dose-out for maximizing product yield:
                

                    
    - *Dose-in* means the filling set is primed, where air is expelled into the container until a constant flow of product is achieved, on the gross scales until the correct filling volume is achieved. After priming is accomplished for the initial setup of the filler, this dose-in process will generally not need to be repeated, unless there is downtime where prime is lost. Normal filling operations will follow the dose-in (priming) step.

                    
    - *Re-dosing* means that there is the ability to add small increments of product to an individual container if the net weight is lower than the target to bring the container to volume before acceptance. When re-dosing is performed, it should be performed (or simulated) as a standard part of the APS, as the extended filling time has the potential to increase risk. Re-dosing is generally not practical for very small fill volumes.

                    
    - *Dose-out* means the line will be run until the filling path to each needle is completely empty on the gross scales; underfilled containers will be rejected, but any containers that achieve target weight before reaching empty may be retained. For high-value products, the increase in time to execute the dose-out is compensated with the savings achieved by minimizing scrap. The dose-out process will typically start when the intermediate vessel is below the lower replenishment level and there is no further product to be supplied. For specialty products, like suspensions, dose-out may not be advisable as mixing may no longer be sufficient.

                

            

            
- Constant final dosing is possible where two-step filling is performed; the first filling step fills more than 80–95% of the volume, with a second dose provided by the filler to provide a fine-tuned quantity of product. This conserves product by not requiring an excess fill, while providing a highly precise final volume within the container. The two-step filling approach is especially valuable for rare or expensive products, or for products where the dose must be very precise due to clinical effect.

            
- Data is available for each container, and each container can be rejected directly after the net-weighing; as a consequence, there is no quarantine handling.

            
- Detection of low or high doses due to undetected special-cause variation is possible at the filling process (e.g., an air bubble in the filling hose).

            
- Constant feedback will be provided to the filling system, which may be beneficial to systems such as PP for correcting drift (see Section 2.0).

            
- A 100% check-weigh enables the filling target to be closer to the lower limit, maximizing product yield.

        

        

Historically, mass flowmeters were used for some continuous motion, high-speed machines as a 100% IPC for dosing management; however, the mass flowmeters were poor options for low-volume fills, which resulted in the need for overfilling. Mass flowmeters are capable of withstanding CIP and SIP; however, it is difficult to verify their cleanliness and sterility, so the validation can be challenging. As a result, the gravimetric approach is by far the more common approach.

    

    

        

## 導師解析 Tutorial Commentary

        

            

#### 核心概念解析 Key Concepts

            

**100% 重量管控的三個填充操作模式**是此系統最大的彈性優勢：

            

                
- **Dose-in（導入充填）**：批次開始時的引液操作，確保管路無氣泡、流量穩定才開始正式充填。這個步驟「浪費」少量藥液，但確保後續每支都準確。

                
- **Re-dosing（補充充填）**：對個別未達標容器追加補充，補救輕微不足，提高良品率。但**必須納入 APS（無菌製程模擬）**驗證，因為多一次插針動作即多一次暴露風險。

                
- **Dose-out（耗盡充填）**：批次結束時，將管路殘留藥液盡量充填至容器，減少浪費。懸浮液（Suspension）不適用，因此時混勻可能不足。

            

        

        

            

#### 比喻說明 Analogy

            

100% 檢重就像「每台車都有倒車雷達」——每次停車（充填）系統都即時回饋距離（重量），駕駛（充填機控制器）立即修正，不需要等待事後統計分析。而間歇抽樣則像「靠目測停車距離」，技術好的師傅可以停好，但無法保證每次都準確，也無法即時修正。

        

        

            

#### 重點提示 Key Notes

            

**兩步充填（Two-step Filling）**是高價值產品的關鍵技術：第一步填 80–95%，第二步精確補至目標值。這讓填充目標可以設在幾乎緊貼下限，大幅減少 overfill。對於每毫升藥液價值數萬美元的基因療法、mAb 等產品，overfill 的節省直接影響批次 COGS（製造成本）。

            

Mass flowmeter 雖能承受 CIP/SIP，但**清潔驗證困難**，且不適合小體積充填，因此重力式（gravimetric）已成為主流。

        

        

            

#### 實務應用 Practical Application

            

CDMO 承接高價值生物製劑（如 CAR-T 細胞療法配套注射液）時，選擇 100% 重量管控 + 兩步充填的組合，可以將目標值設在下限上方僅 2–3% 處，而非間歇抽樣需要的 8–10% 保守偏移量。以每批次 5,000 支計算，每支節省 0.1ml 藥液，5000 × 0.1ml × 藥液單價，即使單價 USD 1,000/ml，節省也達 USD 500,000/批。這個計算方式在 business case 提報中非常有說服力。

        

    

5.1.4 Constraints of 100% Weight Checks

    

        

## 原文內容 Original Text

        

The risks of 100% weight checks include:

        

            
- Limited filling speed

            
- Denesting is typically required for RTU containers that are provided in nests

            
- Filling control strategy must take bias into account between the two measurements, tare and gross, whether a single scale or two scales are used, potentially resulting in a smaller filling range in order to compensate (see Section 5.2 and Section 5.3 for additional details on dose control).

            
- Depending upon system design, 100% weight checks can result in additional handling and/or exposure time prior to stoppering

        

        

Finally, concerning risks for both intermittent and 100% IPC, weight-check systems are much more robust than earlier generations of equipment, and therefore are much less likely to be damaged should mishandling of containers on the line occur. Nevertheless, care should be taken to ensure that the container transport and movement is aligned. To facilitate aligning these elements, ergonomic devices such as locating pins can be used. Confirming alignment during setup avoids incurring costly replacement or repairs or product-reject losses.

    

    

        

## 導師解析 Tutorial Commentary

        

            

#### 核心概念解析 Key Concepts

            

**100% 管控的代價**主要在設備複雜度和操作風險：

            

                
- **速度限制**：每個容器都需要在秤台上停留足夠時間讀取穩定數值，這是物理限制，無法與高速線的需求完全相容

                
- **Denesting 需求**：RTU Nest 包材需要先將容器逐一取出再稱重充填，增加機械操作步驟和相應的微粒與污染風險

                
- **額外暴露時間**：容器在 Tare 秤 → 充填 → Gross 秤的移動過程中，暴露在環境中的時間比直接充填更長，設計時需評估對無菌保證的影響

            

        

        

            

#### 重點提示 Key Notes

            

**決策階層的實際應用**：100% 管控因為 denesting 增加操作步驟，可能增加暴露時間（影響無菌保證）。這時候決策順序就很重要：

            

                

無菌保證 Sterility Assurance — 優先

                

▼

                

劑量準確性 CQA — 次優先

                

▼

                

速度與產量 Business — 末位

            

            

若 denesting 操作無法確保暴露風險可接受，**無菌保證的優先級高於劑量精度的優先級**，必須重新考慮系統設計或採用間歇抽樣。

        

        

            

#### 練習思考 Practice Questions

            

                
1. 100% 檢重系統的「速度限制」如何影響每批次產能？對 CDMO 的排程和客戶承諾有何影響？

                
2. 若客戶要求高速充填（>300 vials/min）且使用 RTU Nest 包材，你會建議 100% 還是間歇抽樣？理由為何？

                
3. Locating pins（定位銷）解決了什麼問題？它屬於哪個層面的管控措施？

            

        

    

5.2 Dose Control System Design Options — Statistical Overview

    

        

## 原文內容 Original Text

        

For some filling lines with singularized containers, especially in filling rooms with limited size and required high throughput, a 100% check-weigh is not possible. In this case, a statistical dose-control model must be used. Statistical dose-control is also used on a majority of nested filling lines. In statistical check weighing, every container fill-weight is not known, and extra protection must be incorporated to protect for the filling variability for containers not checked for dose. Typically, this results in target-fills set farther away from the lower fill-reject limit, and filling reject-limits set farther away from the maximum and minimum filling limits. Practically, this results in a smaller operating window for products with both upper and lower filling limits and in more overfill for products with only a lower filling limit.

        

The greatest disadvantage of statistical dose-control is the handling of rejects. Should a dose-check for a filling pump or needle exceed the reject limits, all filled containers from the last good dose-check to the current failing dose-check must be discarded for that pump position. In a nested line, it is relatively simple to segregate underfilled containers based on position in the nest (which correlates to the filling needle); nevertheless, a quarantine system must be in place to ensure that the "faulty" containers can be rejected, whether the nests are fully held on the line or have exited the line. For a line that handles individual containers, such as a vial line, segregation is more difficult depending on container-handling and shift-register control, and it is often simpler to discard all units filled for all pump positions back to the last good dose, resulting in more rejects.

        

Figure 5.2-1 provides an example of statistical dose-control in a nested filling-machine, where one row out of every six nests is tare-weighed, filled, and then gross-weighed. Figure 5.2-1 shows the removal of the syringes from the nest, the filling of the units, and the dose numbering-system needed to associate the units in each tub to the last good dose-check. This association is critical for handling rejects.

        

            

                

Figure 5.2-1

                

Statistical In-Process Control for Nested Containers – All Doses Within Limits

                

[Figure not available in text source — refer to original PDA Guide No.1 p104]

            

        

        

Figure 5.2-2 depicts the same nested filling process but, this time, a dose-check fails either high or low reject-limits. In this case, the filler will reenter a dose "in process" to center and control the dose for each pump, and all containers back to the last passing IPC check will be discarded (either per pump position or for all, depending on the reject control strategy).

        

            

                

Figure 5.2-2

                

Statistical In-Process Control for Nested Containers – Dose Outside of Limits

                

[Figure not available in text source — refer to original PDA Guide No.1 p105]

            

        

        

There are two main methods to control the dose in parenteral containers—gravimetric and volumetric fill—to a physical stopping point (e.g., laser-fill endpoint detection on a cartridge).

    

    

        

## 導師解析 Tutorial Commentary

        

            

#### 核心概念解析 Key Concepts

            

**統計劑量管控的核心邏輯**：因為不是每支容器都被量測，填充目標必須「偏保守」——設在遠離下限的位置，確保即使最差的未測容器也不會跌破下限。這個「保守偏移量」的大小，取決於系統的填充變異（σFill）和抽樣設計。

            

**兩種主要劑量量測方法**：

            

                
- **重力式（Gravimetric）**：用秤量測重量，計算淨重。主流方法，精度高，適用大多數液體充填

                
- **體積式（Volumetric）**：計算物理限位點（如雷射偵測卡匣液位），適用特殊容器幾何形狀

            

        

        

            

#### 圖表解讀 Figure Analysis

            

**圖 5.2-1（正常狀況）**：顯示 Nest 充填線在所有劑量都在管制限內時的操作流程。每隔固定 Nest 數抽取一排進行重量量測，量測通過後，這一批 Nests 才能放行繼續後續製程。

            

**圖 5.2-2（異常狀況）**：顯示某次量測超出拒絕限時的處理程序。系統回到「製程中」狀態重新調整，且從上次合格量測到此次不合格量測之間的所有容器，依拒絕策略決定是否全部報廢，或只報廢對應充填站的容器。

            

這兩張圖的核心訊息：**shift-register（移位暫存器）追蹤系統**的精確性決定了報廢範圍的大小，系統越精確，不必要的報廢越少。

        

        

            

#### 練習思考 Practice Questions

            

                
1. 統計劑量管控的「報廢處理」為何是最大缺點？對 CDMO 的批次良率有何衝擊？

                
2. 在 Vial 充填線（非 Nest）上，為何報廢範圍往往比 Nest 充填線更大？

            

        

    

5.2.1 Method 1: Gravimetric Dose Control Process & 5.2.1.1 Considerations

    

        

## 原文內容 Original Text

        

### 5.2.1 Method 1: Gravimetric Dose Control Process

        

The basics of gravimetric dose control are simple and well understood. An empty container is weighed on a load-cell to obtain tare weight; the container is filled, and then the filled container is weighed again on a load-cell to find gross weight. The net weight is calculated from those numbers.

        

The tare and gross load-cells can be the same, as is the case in many nested filling lines. However, on many bulk or singularized filling lines, two separate load-cells are used to measure tare and gross weight.

        

### 5.2.1.1 Gravimetric Dose Control Considerations

        

To ensure the dose delivered to the patient is correct, several sources of uncertainty need to be considered. These sources of uncertainty, when applied to the label claim and maximum- and minimum-fill weights, can be used to calculate the filling-machine's adjust and reject limits. However, some parenteral products do not have maximum-filling weight limits (e.g., a multi-use cartridge or a vial in which the patient uses a syringe to determine the dose delivered).

        

Below are the sources of uncertainty that must be taken into consideration when applying a gravimetric dose-control strategy:

        

            
1. **Container Holdup** – Container holdup is the undelivered volume that cannot be dosed to the patient due to such features as container geometry, device limitations, or plunger compliance. Container holdup can be empirically determined with a Gage Repeatability and Reproducibility Study or using the relevant U.S. Pharmacopeia estimates. Because the label claim is the mandatory lowest volume (or weight) that can be delivered to the patient, protections must be built into the dose-control strategy to account for container holdup.

            
2. **Scale Bias** – In filling machines with separate tare and gross scales, the bias between the two scales must be considered to protect the maximum and minimum fill-weight. In filling machines with only one scale for both tare and gross weights, an analogous calculation for the two measurements that are taken on the single scale is applicable. To ensure no units exceed the minimum or maximum fill-weight, the upper and lower filling-machine reject limits should be protected against scale (or measurement) bias by including guard-banding from the minimum and maximum fill-weight limits. A guard-band is an adjustment or offset to the pass/fail process limits that include known uncertainties (such as the potential bias between the two measurements).

            
3. **Scale Measurement Uncertainty (sMU)** – Measurement uncertainty of the scale must be known in the range of the weights being considered. To ensure that no units exceed the minimum or maximum fill-weight, the upper and lower filling-machine reject limits should be protected against sMU by guard-banding in from the limits by a correction factor of k1, shown in Figure 5.2.1-1. The scale calibration should be checked periodically to ensure its uncertainty does not exceed the value used for the dose limit. Checking the scale calibration before and at the end of the batch, at a minimum, is also recommended. It is also common for machines equipped with IPC to periodically tare (i.e., zero) the weighing cells at defined intervals, especially for long fills. If this feature is not included, then the scale-calibration checks should be executed more frequently.

            
4. **Filling Standard Deviation (sFill)** – The standard deviation of the fill process must be empirically determined for the dose and the container being filled. The filling standard deviation, when multiplied by correction factors k2 and k3, is used to set the target of the dose a distance away from the upper and lower reject limits. In Figure 5.2.1-1, the target is centered between the upper and lower reject limits, when the target most often is closer to the lower reject limit to minimize overfills. The filling standard deviation is also multiplied by correction factor k4 to set the adjust limits for the filler. This adjustment is discussed further in Figure 5.2.1-1.

        

    

    

        

## 導師解析 Tutorial Commentary

        

            

#### 核心概念解析 Key Concepts

            

**重力式劑量管控的四大不確定性來源**——每一項都必須在設計充填視窗時量化納入：

            

                
- **Container Holdup（容器殘留量）**：藥液填入後，仍有一部分因容器幾何形狀（如注射器柱塞空間）無法被病患抽出。標籤聲稱量（Label Claim）是必須*可送達*的最低量，所以填充量必須 = Label Claim + Holdup

                
- **Scale Bias（秤台偏差）**：Tare 秤和 Gross 秤的系統性誤差之差值。即使每台秤個別校正合格，兩台之間仍可能有固定偏差，需要 Guard-banding（保護帶）補償

                
- **sMU（Scale Measurement Uncertainty，秤台量測不確定度）**：秤台在特定量測範圍內的隨機誤差，以標準差表示，透過 k₁ 因子納入拒絕限計算

                
- **sFill（充填標準差）**：充填製程本身的批次內變異，以標準差表示，透過 k₂、k₃、k₄ 因子控制目標值位置和調整觸發點

            

        

        

            

#### 比喻說明 Analogy

            

想像你在烘焙，要求每個蛋糕剛好 500g：

            

                
- **Container Holdup** = 烤模本身會吸油，所以必須多放一點麵糊

                
- **Scale Bias** = 廚房秤和出廠秤之間的固定差異，需要校正補償

                
- **sMU** = 廚房秤每次量測的誤差範圍（±2g），要在安全範圍內操作

                
- **sFill** = 每次倒麵糊的手抖程度，有時多有時少，這個變異決定了你需要預留多少「安全邊距」

            

            

充填機設計的核心就是把這四個誤差來源同時管控，確保每支注射器送到病患手中的藥量都在規格內。

        

        

            

#### 公式與計算 Formula — Guard-band 概念

            

```

填充下限設定邏輯（概念式）：

最低填充量（Label Claim）
+ Container Holdup（容器殘留補償）
+ Guard-band for Scale Bias（秤台偏差保護帶）
+ k₁ × sMU（量測不確定度保護）
+ k₂ × sFill（充填變異保護）
= 填充機下拒絕限（Lower Reject Limit）

填充目標（Target）
= Lower Reject Limit + k₂ × sFill

[實際 k 因子的計算見 Section 5.2.1-1 圖表]

結論：每增加一個誤差來源，填充下限就向上移動，
意味著每支容器必須多填更多藥液（overfill 增加）。
            
```

        

        

            

#### 重點提示 Key Notes

            

**秤台校正（Scale Calibration）**是 GMP 關鍵操作，最少要在**批次前後各做一次**。長批次生產中還需要定期歸零（tare/zero），防止溫度漂移等因素造成累積誤差。若機台不具備自動歸零功能，需要提高手動校正頻率——這會直接影響生產效率，設計評估時必須考量。

        

    

Figure 5.2.1-1: K Factors and Standard Deviation Explanation (doc p106–p107)

    

        

## 原文內容 Original Text

        

            

                

Figure 5.2.1-1

                

Gravimetric Dose-Control Range Determination Depicting K Factors and Standard Deviation

                

[Figure not available in text source — refer to original PDA Guide No.1 p107]

            

        

        

**Key for Figure 5.2.1-1:**

        

            
- **k1** = Controls the risk that a container determined to have an acceptable weight is actually within the minimum- and maximum-fill weight requirements. Recommended that k1 is set to have a high statistical confidence of containers meeting the weight requirements.

            
- **k2** = Controls the number of containers that will fail the lower reject limit by controlling how close the average fill weight can be to the lower reject limit. The larger k2 is, the lower the risk of rejecting containers; also, a larger k2 raises the target and allows more product to be put into each container, which increases the cost. Rejection risk vs. overfill must be balanced to choose the appropriate k2.

            
- **k3** = Calculated value of the number of filler standard deviations between the target and the upper reject limit, it determines the number of containers that will fail the upper reject limit by determining how close the average fill weight is to the upper reject limit. The larger k3 is, the lower the risk of rejecting containers. If the difference between the maximum and minimum fill-weights is large compared to filler variability, then the target can be closer to the minimum fill weight requirement to minimize overfill. In this case, k3 will be larger than k2; otherwise, k3 will be equal to k2.

            
- **k4** = Controls the average container weight so it is near the target. The smaller k4 is, the more adjustment will occur to keep the filler on target; if adjustments are manual, it could slow down the line. If k4 is too large, the filler could drift significantly far from the target before an adjustment occurs.

            
- **σMU** = Scale measurement uncertainty (standard deviation). (See k1 above.)

            
- **bias** = Measurement bias between tare and gross. (See k1 above.)

            
- **σFill** = Filling standard deviation. (See k2, k3, and k4 above.)

        

    

    

        

## 導師解析 Tutorial Commentary

        

            

#### 核心概念解析 Key Concepts — k 因子系統詳解

            

k 因子系統是一套**風險與成本的平衡工具**，每個因子控制一個不同的失效模式：

            

                
- **k₁**：保護秤台量測誤差（sMU + Bias）。k₁ 越大，拒絕限離規格限越遠，誤判的風險越低，但操作視窗越窄

                
- **k₂**：保護充填目標不落入下拒絕限。k₂ 越大，目標值越高，報廢率越低，但 overfill 越多（成本越高）

                
- **k₃**：保護充填目標不超過上拒絕限。若上下限差距大，k₃ 可大於 k₂，讓目標值靠近下限以減少 overfill

                
- **k₄**：控制調整觸發點的靈敏度。k₄ 太小 = 頻繁調整 = 速度慢；k₄ 太大 = 允許漂移過大 = 良率風險增加

            

        

        

            

#### 公式與計算 Formula — k 因子的商業意義

            

```

k 因子與 overfill 的關係：

目標值（Target）相對下限的偏移量
= k₂ × σFill + k₁ × (σMU + bias) + Holdup

若 σFill 大（製程變異大）：
  → k₂ 需要更大 → 目標值更高 → overfill 更多

若 σMU 大（秤台精度差）：
  → k₁ 需要更大 → 操作視窗更窄 → 更多容器被拒絕

關鍵洞察：投資精度更高的秤台（降低 σMU），
可以減少整體 overfill，對高單價產品回報顯著。

範例試算：
  藥液單價 = USD 10,000/ml
  每支因 k 因子導致 overfill = 0.05ml
  批次量 = 10,000 支
  每批 overfill 成本 = 0.05 × 10,000 × 10,000 = USD 5,000,000
  → 改善製程精度（降低 σFill）的 ROI 極高
            
```

        

        

            

#### 重點提示 Key Notes

            

**k₄ 的設計對自動化 vs. 手動調整的影響**：若充填機依靠操作員手動調整，k₄ 設得太小會導致頻繁操作員介入，增加人為錯誤風險（違反無菌保證原則）。自動化充填機可設更小的 k₄，達到更緊密的目標控制而不增加人工介入。這是選擇自動化設備的重要技術理由之一，CDMO 在設備評估時應將此納入 TCO（總擁有成本）計算。

        

        

            

#### 練習思考 Practice Questions

            

                
1. 若你的充填製程 σFill 從 0.05ml 改善到 0.02ml，k₂ 維持不變，填充目標值會如何移動？對批次 overfill 量有何影響？

                
2. k₄ 太大（如 k₄ = 5）意味著什麼？對充填品質的長期影響是什麼？

                
3. 為何高單價生物製劑（如基因療法）更需要精確的 k 因子設計？請從商業角度計算說明。

            

        

    

    

### 本節重點回顧 Section Summary (5.0–5.1.4 + 5.2 intro + 5.2.1)

    

        
- **劑量管控是 CQA**：每個容器的填充量直接決定病患收到的治療劑量，是無菌充填中最關鍵的品質屬性之一

        
- **100% vs. 間歇抽樣**：100% 管控精度高、可無隔離緩衝、可 Re-dose/Dose-out，但速度受限且需 Denesting；間歇抽樣速度快、適合 RTU Nest，但需隔離緩衝且必須更保守的 overfill 設定

        
- **Dose-in / Re-dosing / Dose-out**：100% 管控系統獨有的三種操作模式，分別對應批次啟動、不足補充、批次結束，最大化高價值藥液的回收率

        
- **四大不確定性來源**：重力式劑量管控必須量化 Container Holdup、Scale Bias、sMU、sFill，並通過 Guard-banding 和 k 因子系統轉化為填充機操作限

        
- **k 因子的商業本質**：k₁–k₄ 每個都是風險（報廢率）與成本（overfill）的平衡點，改善製程精度（降低 σFill 和 σMU）直接轉化為每批可觀的藥液節省

        
- **決策階層的實踐**：即使 100% 管控的商業優勢明顯，若 Denesting 操作增加無法接受的無菌暴露風險，無菌保證的優先級必須居首位

    

⇧

# Section 5B: Dose Control (5.2+)

    

劑量控制：容積充填、外部影響因素與製程能力指標

    

PDA Manufacturing Technology Guide No. 1 | doc p108 - p114

    

### 本章學習目標

    

        
- 理解容積充填法 (Volumetric Filling) 的工作原理與雷射感應器的劑量控制機制

        
- 掌握不同充填泵系統（RPP、DP、PP、TP）在自動劑量修正上的策略差異

        
- 識別影響稱重系統準確性的三大類外部與機器因素，以及對應的設計補償措施

        
- 理解 IPC 生產限度、稱重誤差類型，以及如何正確定義不拒絕真正合格品的上下限

        
- 掌握製程能力指標 Cpk 的計算原理與工業標準，並能詮釋每百萬充填單位的不良率含義

    

5.2.2 Method 2: Volumetric Filling Process

    

        

## 原文內容 Original Text

        

In a volumetric filling process, the volume of product filled into the container is not controlled gravimetrically by scales, but instead relies on container geometry, plunger position (for cartridges), and residual air-bubble (air gap) size to determine sufficient filling. In the cartridge-filling example below (Figure 5.2.2-1), a laser and sensor are used to detect the filling endpoint. As filling occurs, the laser light is deflected by the empty neck of the cartridge and does not reach the sensor. As the container is filled and the neck fills with product, the laser light is transmitted through the neck of the container, signaling the control system to stop dosing.

        

            Figure 5.2.2-1: Volumetric Dosing Triggered by Laser Sensor
              
*[Figure: Cartridge filling — laser beam blocked during empty state, transmitted when neck is filled, triggering stop-dose signal to control system]*
        

        

### 5.2.2.1 Volumetric Filling Dose-Control Considerations

        

For a volumetric filling process to deliver repeatable doses to the containers, the container geometry must be well understood. This includes both the length and the ID of the container and, for cartridges, the precise placement and installed height of the plunger. In addition, the setup of the laser and sensor must be precise, as must be the presentation height of the container to the laser. In practice, each laser-sensor fill station will have an individual adjustment for delay, allowing milliseconds of additional fill after the sensor detects the laser. Operators on the line must be well trained to fill the container with an appropriate residual air bubble, guaranteeing an adequate dose is in the container. Volumetric filling is most appropriate for containers that do not have maximum-fill weight limits (e.g., a multi-use cartridge or a vial in which the patient uses a syringe to determine the dose delivered).

        

### 5.2.2.2 Adjustment of Dosing

        

Stability differs across the various filling–pumping systems (see Section 2.0). Consequently, there are also differences in philosophy on whether filling machines should automatically correct doses based on feedback from the filler. For stable systems, such as RPPs or rolling DPs for liquid filling, the doses delivered at the end of the batch will show no drift relative to the doses delivered at the beginning of the batch. For this reason, many stable fillers will require manual adjustment of the dose to prevent autocorrecting of the dose based on common-cause variability, thereby preventing overcorrection and the potential oscillation of filling weights.

        

For PP filling, stress on the pump tubing can cause a reduction of dose given the same number of rotations from the beginning of the batch to the end of the batch. To compensate for this reduction in pumping efficiency, many fillers use automatic dose-correction to compensate. The algorithm used in that automatic dose-correction can be simple or sophisticated depending on the filling-machine supplier. Most are designed, however, to not overcorrect for small changes and use a time-averaged dose to make corrections more stable.

        

For TP filling, automatic dose-correction is standard, due to the need to perform constant calculations to adjust pinch-valve timing owing to the everchanging intermediate vessel or manifold pressures as they empty and fill.

    

    

        

## 導師解析 Tutorial Commentary

        

            

#### 核心概念解析 Key Concepts

            

**容積充填法 (Volumetric Filling)：**不以重量作為充填控制依據，改用容器幾何形狀、活塞位置與殘留氣泡大小來判斷充填是否足夠。優點是速度快、設備簡單；缺點是精度依賴容器幾何的一致性。

            

**雷射感應器充填終點：**雷射光在容器頸部空白時被折射無法到達感測器；當液體填滿頸部後，雷射穿透，觸發「停止充填」指令。這是一種光學回饋（optical feedback）控制機制。

            

**殘留氣泡 (Residual Air Bubble / Air Gap)：**特別在卡匣（cartridge）充填中，需在充填後保留適量氣泡，以確保活塞推壓時不超壓、產品體積正確。氣泡大小需由受訓操作員判斷。

        

        

            

#### 比喻說明 Analogy

            

想像你用量杯量咖啡豆而不是秤重——你是靠「杯子形狀+填到某個刻度」來控制份量，而不是靠磅秤。這就是容積充填的邏輯：容器的幾何形狀本身就是「量具」。

            

雷射偵測終點就像電梯的光幕感應門——光束通了，代表門可以關了（充填可以停了）。

        

        

            

#### 重點提示 Key Notes

            

**自動修正 vs. 手動修正的選擇邏輯：**這是一個重要的設計哲學分叉點：

            

                
- **RPP / DP（穩定系統）**：劑量輸出穩定不漂移，自動修正反而可能因「共同原因變異」（common-cause variability）而過度修正，導致充填重量振盪。建議：手動調整。

                
- **PP（蠕動泵）**：管路隨時間受壓變形，效率下降，劑量會隨批次進行而漂移。需要自動修正，並採用時間加權平均避免過度反應。

                
- **TP（時間壓力）**：壓力源持續變化（隨容器排空或注入而改變），必須即時計算pinch valve開關時機，自動修正是標準配備。

            

        

        

            

#### 實務應用 Practical Application

            

在CDMO接受新客戶卡匣充填案時，驗證方案必須涵蓋容器幾何量測（長度、內徑、活塞安裝高度的批間一致性）。若容器供應商更換批次或供應商，需重新評估容積充填精度。此外，雷射感測器站位校正必須列入每批次或定期的校正計畫中。

        

        

            

#### 練習思考 Practice Questions

            

                
1. 為什麼容積充填特別適合「不設最大充填重量限制」的容器？若用於有重量上限的注射瓶，會有什麼風險？

                
2. 一家CDMO同時操作RPP和PP充填線。它們的劑量修正邏輯為何不同？若工程師把PP的設定錯誤套用到RPP上，會發生什麼事？

                
3. TP充填的壓力為什麼「持續在變化」？這對pinch valve控制有什麼挑戰？

            

        

    

5.3 External and Internal Influences on Dose Control Systems

    

        

## 原文內容 Original Text

        

On filling machines, the weighing cells are constantly being confronted with external and environmental factors that will ultimately negatively influence the ability of the weighing cells to provide accurate readings. This drives many manufacturers to cross-check the IPC readings during production using destructive methods (i.e., sampling). Therefore, in the design phase, it is crucial to ensure that good design is implemented, and risk-based methodology is used to define the steps of weighing and check-weighing.

        

Typically, these factors can be categorized into three groups:

        

            
1. **Statistical weighing sources of variability**
                

                    
    - Unidirectional airflow above weighing cells in the Grade A environment

                    
    - Release mechanism, design, and speed thereof to ensure the objects being weighed set on the weighing cells are freestanding

                    
    - "Time-settling" (the longer the time allocated for weighing, the more reliable the readings will be)

                    
    - Vibrations of the building where the line is placed

                    
    - Machine vibrations (e.g., vibratory sorting systems) can be reduced if the weighing scales are decoupled from the machine baseplate, which reduces the influence of vibrations on the accuracy of the weighing cells; alternatively, a vibration compensation system can be used (e.g., physical compensation or software compensation)

                    
    - Static charges on objects (e.g., vials coming out of the dry heat depyrogenation tunnel) can also affect the weighing performance of the cells

                

            

            
2. **Constant weighing sources of variability**
                

                    
    - Unidirectional airflow offset

                    
    - Vibrations, if constant

                    
    - Load-cell offset (from the manufacturer)

                

            

            
3. **Machine- and product-related sources of variability**
                

                    
    - Filling-line setup, nest vs. bulk, multiple filling steps

                    
    - Filling time allocated to filling individual containers

                    
    - Filling volume (smaller volumes are more difficult to weigh with the same accuracy as higher volumes)

                    
    - Product characteristics (e.g., foamy products)

                    
    - Built-in taring

                    
    - In-process calibration

                    
    - Automated vs. manual setup and in-process calibration

                    
    - Weighing cell "filters" to identify and cancel out vibrations

                

            

        

    

    

        

## 導師解析 Tutorial Commentary

        

            

#### 核心概念解析 Key Concepts

            

**三大類稱重誤差來源：**

            

                
- **統計性 (Statistical)：**隨機出現、呈常態分佈的誤差——每次量測結果都略有不同。典型例子：氣流擾動、震動、靜電、稱量沉降時間不足。可透過更長的沉降時間或更多次量測來統計平均。

                
- **恆定性 (Constant)：**每次量測都偏移同樣方向的系統誤差——如感測器出廠偏移值（load-cell offset）、恆定氣流造成的固定浮力。這類誤差可透過校正補償。

                
- **機器與產品相關性：**由充填線設計、產品特性（例如起泡）、操作方式（自動vs手動校正）等所引起的誤差。需透過良好的設計與製程驗證來最小化。

            

            

**破壞性取樣 (Destructive Sampling)：**從線上抽取充填後的容器，在離線實驗室天平上確認實際充填重量，作為IPC讀值的交叉驗證。

        

        

            

#### 比喻說明 Analogy

            

想像你在市場用一個老式磅秤賣水果。統計誤差就像風吹過來磅秤微微晃動（每次結果不同）；恆定誤差就像磅秤本身被磁鐵吸著偏向一邊（每次都低估）；機器相關誤差就像你把蘋果放上秤的速度太快，秤還在抖動就讀值了。

            

Grade A無塵室的單向氣流（unidirectional airflow）是無菌保證的核心，但它的風速與方向卻會干擾精密天平——這就是無菌充填環境的矛盾：保護微生物的措施，同時也是稱重精度的敵人。

        

        

            

#### 重點提示 Key Notes

            

**靜電是容易被忽視的誤差來源：**注射瓶從乾熱去熱原質隧道（dry heat depyrogenation tunnel）出來後，高溫冷卻過程中可能累積靜電荷，影響天平讀值。這在高速生產線上是需要刻意設計消除的問題（例如離子化空氣）。

            

**「時間沉降」(Time-settling) 的取捨：**讓瓶子在天平上靜置更久，讀值更準確，但這直接降低充填線速度（UPH）。在設計IPC時，需要在精度與速度之間明確取捨並記錄風險評估。

            

**充填量越小，稱重越難：**對於1 mL以下的小劑量製劑，稱重誤差的相對影響更大。這正是這類產品需要特別嚴格的IPC設計和驗證的原因。

        

        

            

#### 實務應用 Practical Application

            

在CDMO進行充填線資格確認（IQ/OQ/PQ）時，建議針對上述三類誤差來源分別執行測試：
            (1) 統計性：在不同氣流條件、不同震動狀態下量測同一標準砝碼的分佈；
            (2) 恆定性：比較IPC天平讀值與實驗室天平讀值的系統性偏移；
            (3) 機器/產品相關：測試不同充填速度、不同容器類型下的劑量準確性。
            這三類測試結果決定了IPC上下限的設定寬度。

        

        

            

#### 練習思考 Practice Questions

            

                
1. Grade A區域的單向氣流為何對稱重準確性造成干擾？這與它保護無菌的功能如何平衡？

                
2. 「統計性誤差」和「恆定性誤差」在管理策略上有何本質不同？各需要什麼工具來處理？

                
3. 一個起泡性產品（foamy product）會如何影響充填線的稱重系統？你會建議什麼設計對策？

            

        

    

5.3.1 In-Process Control Production Limits and Weighing Accuracy

    

        

## 原文內容 Original Text

        

Weighing cells during production, if not equipped with a defined recipe and programmable correction-factor(s) as explained in Figure 5.3.1-1, will deviate from the actual weight of the container (empty and filled or tare and gross). Therefore, it is not practical to use IPC values as parameters to depict the actual filling weight in a filled container.

        

The approach to compensate for weigh-scale measurement uncertainty compared to the actual weight of the empty and filled containers will vary slightly from end user to end user but, in principle, defining the IPC parameters will typically require an overall understanding of the deviations caused by the external factors. Some points to consider include:

        

            
- Weighing accuracy always refers to the net weight; there is no separate accuracy considered for tare-weighing and gross-weighing

            
- Weighing accuracy of the net weight consists of the sum of the two deviations (see Figure 5.3.1-1):
                

                    
    - **Statistical weighing error (σ):** Normally distributed scatter of the weighing process (multiple weighings of an identical weight on the same scale)

                    
    - **Constant weighing error:** Constant offset of the net value due to the difference between the target weight and the achieved mean value of the test quantity per digit

                

            

        

        

            Figure 5.3.1-1: In-Process Control Production Limit
              
*[Figure: Bell curve showing statistical weighing error (σ) as normally distributed scatter, plus constant weighing error as systematic offset. The IPC production limit must encompass both error types.]*
        

        

A good way to analyze the influence from external factors is to check the actual readings of several fill weights against their readings of the IPC cell. Assuming only one IPC cell is being checked against one laboratory balance, using standard-deviation(s) methods, a bell curve can be plotted that would look something like Figure 5.3.1-2. Because a laboratory balance is not affected by typical external factors on a filling line such as unidirectional air flow, it will be more accurate, and the bell curve would be narrower.

        

            Figure 5.3.1-2: Actual Weight Versus In-Process Control Balance Reading
              
*[Figure: Two bell curves plotted together — narrow curve = lab balance (accurate, unaffected by line conditions); wider/flatter curve = IPC cell reading (broader distribution due to external factors).]*
        

        

Now, if constant offset deviations of the weigh cells to the left and the right of the IPC bell curve are added, a wider and flatter bell curve will result, as seen in Figure 5.3.1-3.

        

            Figure 5.3.1-3: Actual Weight Versus In-Process Control Balance Reading including Weighing Scale Offset
              
*[Figure: The IPC bell curve becomes even wider and flatter when systematic offset deviations (constant errors) from individual weigh cells are included. Multiple cells with different offsets create a composite distribution significantly wider than the lab balance curve.]*
        

        

If one of the weights in this example is taken, and the reading of the laboratory balance and the reading of the weight of the IPC cell are compared, two different readings would result that may be significantly different from each other (see Figure 5.3.1-4).

        

            Figure 5.3.1-4: Significant Delta Between Actual Weight and In-Process Control Balance Reading
              
*[Figure: Single data point example — lab balance reads 1.001 g (actual weight, within spec); IPC cell reads 1.005 g (appears out-of-specification if limits are set too tightly around lab scale values). Illustrates danger of defining IPC limits based solely on lab balance results.]*
        

        

If the end user decides to define production limits according to lab-scale results, with the actual weight of 1.001 g, the fill weight would be acceptable since it lies in the bell curve of actual accepted weights. If, however, the end user interprets the weighing-cell reading of 1.005 g to be out-of-specification, then they would define this unit as a reject, although in reality, it fulfills the specifications.

        

A good approach would be to define the IPC limits (accepted minimum and maximum limits) according to the widest IPC bell curve (which will mean that the "true" weight of the filled container is assured to be within limits). This would represent an actual distribution if weighed on a laboratory balance of the narrow bell curve shown in Figure 5.3.1-1.

    

    

        

## 導師解析 Tutorial Commentary

        

            

#### 核心概念解析 Key Concepts

            

**IPC天平讀值 ≠ 實際充填重量：**這是本節最關鍵的認知。線上IPC天平受到氣流、震動、靜電等干擾，其讀值分佈比實驗室天平更寬、更偏移。絕對不能把IPC讀值直接等同於「真實充填重量」。

            

**兩種稱重誤差的疊加：**

            

                
- **統計誤差 (σ)：**隨機正態分佈，以標準差描述。多次稱同一重量，結果呈鐘形分佈。

                
- **恆定誤差：**系統性偏移，整個曲線向左或向右移動。不同天平感測器有不同的offset。

            

            

**IPC上下限的設定邏輯：**應依據「最寬的IPC鐘形曲線」來設定生產限度，確保落在IPC限度內的讀值，其真實重量也一定在規格內。換句話說：IPC限度要夠寬，才不會誤殺真正合格的產品。

        

        

            

#### 比喻說明 Analogy

            

想像你在一個嘈雜、有風的環境用普通磅秤量西瓜，旁邊實驗室用精密天平量同一個西瓜。普通磅秤可能顯示10.2 kg（其實是10.0 kg），但如果你的「合格標準」是依精密天平的10.0 kg ± 0.1 kg設定的，那普通磅秤的讀值10.2 kg就會「錯誤判退」這個實際上完全合格的西瓜。

            

這就是IPC限度設定過緊的危險——你不是在管控品質，你是在製造假廢品（false rejects），浪費昂貴的藥品和資源。

        

        

            

#### 重點提示 Key Notes

            

**假拒絕（False Reject）的業務影響：**在CDMO環境中，假拒絕不只是良率問題，更是客戶滿意度和合規問題。如果IPC限度設定過緊，大量合格單位被錯誤丟棄，客戶不僅損失昂貴原料，還需要調查偏差。更糟的是，如果調查不出根本原因（因為其實是設定問題），就會在品質系統中留下未解決的偏差記錄。

            

**淨重是準確性的基準：**注意原文特別強調「稱重準確性永遠指淨重（net weight）」，而非分別對空瓶（tare）和滿瓶（gross）各自評估。這意味著tare和gross的誤差疊加在一起，共同影響淨重的精度。

            

**不同IPC站位的恆定誤差可能方向相反：**多站位充填線上，各個稱重感測器的恆定偏移（offset）方向不同（有些偏高、有些偏低），這使得整體的複合分佈曲線更寬。這正是要對最寬曲線設定限度的原因。

        

        

            

#### 公式與計算 Formula

            

```

淨重稱重準確性 = 統計誤差 (σ) + 恆定誤差

設 IPC 讀值範圍 = [IPC_min, IPC_max]

正確方法：
  IPC_min = 真實可接受最低重量 - (統計σ + 最大恆定偏移)
  IPC_max = 真實可接受最高重量 + (統計σ + 最大恆定偏移)

錯誤方法（常見錯誤）：
  直接把實驗室天平的規格上下限
  套用為 IPC 生產限度
  → 後果：假拒絕大量合格品

實例（原文）：
  實際重量（lab balance）= 1.001 g → 合格 ✓
  IPC 讀值（weigh cell）  = 1.005 g → 若限度設太緊則誤判拒絕 ✗
            
```

        

        

            

#### 練習思考 Practice Questions

            

                
1. 為什麼實驗室天平的鐘形曲線比IPC天平更窄？請從誤差來源角度解釋。

                
2. 如果一條充填線有8個稱重站，每個站的恆定偏移方向和大小各不相同，這對設定統一的IPC上下限有什麼挑戰？

                
3. 假設你是CDMO品質工程師，客戶要求你把IPC限度收緊到「更接近規格限度」，你會如何用數據說服客戶這樣做反而有風險？

            

        

    

5.3.2 In-Process Control Production Limits in Relation to Process Capability Index

    

        

## 原文內容 Original Text

        

Some manufacturers will define the robustness of their design in terms of the system's capability. This is an outcome based on upper- and lower-specification limits and the dosing accuracy of the pumps built into the filling machine. Equation 5.3.2-1 describes the inversely proportional relation of the capability index to relative standard deviation (σ).

        

            **Equation 5.3.2-1:**  
  

            **Cpk = min(x̄ − LSL, USL − x̄) / 3σ**
              
  

            Cpk checked with a test where:  

            x̄ = measured average by the test  

            σ = standard deviation calculated by the test  

              

            Given limits:  

            LSL = Lower specification limit  

            USL = Upper specification limit
        

        

A process capability index (Cpk) value between **1 and 1.33** is typically accepted as the industry standard (although the exact capability of any system will be dependent upon its design). A Cpk value of 1 to 1.33 translates to a calculation of ± 3 – 4σ on the bell curve. The higher the accuracy (higher σ) that an OEM can give, the tighter the upper and lower limit specifications that can be defined. Because this is a statistical calculation, it deals with how many rejects are allowed per number of filled containers due to bad fills. For example, in the case of Cpk = 1.33, the stable process would be expected to deliver no more than **66 fills**, which are outside of the dose weight limits in every one-million filled units (see Table 5.3.2-1).

        

            
                Table 5.3.2-1: Process Capability, Parts Per Million Units Outside of the Limits, and Relative Standard Deviation for Every One-Million Units Filled in a Stable Process
                
                    
                        
                        
                        
                        
                        
                        
                    
| Process Capability Index (Cpk) | Parts Per Million (ppm) | Sigma (σ) | Process Capability Index (Cpk) | Parts Per Million (ppm) | Sigma (σ) |
| --- | --- | --- | --- | --- | --- |
                
                
                    
                        
                        
                        
                        
                        
                        
                    
| 0.50 | 133,614 | — | 1.33 | 66 | 4σ |
                    
                        
                        
                        
                        
                        
                        
                    
| 0.67 | 44,431 | — | 1.40 | 26 | — |
                    
                        
                        
                        
                        
                        
                        
                    
| 0.75 | 24,448 | — | 1.50 | 6 | — |
                    
                        
                        
                        
                        
                        
                        
                    
| 0.90 | 6,933 | — | 1.60 | 1 | — |
                    
                        
                        
                        
                        
                        
                        
                    
| 1.00 | 2,699 | 3σ | 1.67 | 0 | 5σ |
                    
                        
                        
                        
                        
                        
                        
                    
| 1.30 | 96 | — | 2.00 | 0 | 6σ |
                
            

        

    

    

        

## 導師解析 Tutorial Commentary

        

            

#### 核心概念解析 Key Concepts

            

**製程能力指標 Cpk (Process Capability Index)：**衡量一個製程在規格上下限（LSL/USL）內穩定運行的能力。Cpk越高，代表製程中心越靠近規格中間，且變異越小。

            

**公式解讀：**Cpk = min(x̄ − LSL, USL − x̄) / 3σ，取「平均值距較近規格邊界的距離」除以「3個標準差」。這確保了製程從最不利的一側計算能力，是保守且合理的。

            

**工業標準 Cpk 1.0~1.33：**
            

                
- Cpk = 1.00 → 每百萬充填2,699個超出限度（±3σ）

                
- Cpk = 1.33 → 每百萬充填66個超出限度（±4σ）

                
- Cpk ≥ 1.67 → 每百萬0個（±5σ，接近Six Sigma水準）

            

            

            

**反比關係：**Cpk與σ（標準差）成反比。σ越小（製程越精準），Cpk越高，可將規格設得更緊。

        

        

            

#### 比喻說明 Analogy

            

Cpk就像射箭比賽的「神射手指標」：LSL和USL是靶的邊界，σ是射手每次落點的散佈範圍，x̄是平均落點。

            

Cpk = 1.0代表：射手的平均落點正好在靶心，但散佈範圍大到邊界——每1000箭中大約有2-3支飛出靶外。Cpk = 1.33代表更精準的射手，每百萬次只有66次出界。

            

充填線的「神射手水準」決定了OEM設備的競爭力——Cpk越高，客戶可以用更緊的規格（更嚴格的劑量容差），這在高價值生物藥中尤其重要。

        

        

            

#### 公式與計算 Formula

            

```

製程能力指標公式：

        min( x̄ - LSL,  USL - x̄ )
Cpk =  ───────────────────────────
                  3σ

範例計算：
  目標充填重量：5.00 mL（密度1.0 g/mL → 5.00 g）
  規格：4.75 g ~ 5.25 g
  LSL = 4.75 g, USL = 5.25 g
  實測 x̄ = 5.02 g, σ = 0.03 g

  min(5.02 - 4.75, 5.25 - 5.02) = min(0.27, 0.23) = 0.23
  Cpk = 0.23 / (3 × 0.03) = 0.23 / 0.09 ≈ 2.56

  → 超過6σ水準，每百萬幾乎無超規品！

工業標準對照：
  Cpk 1.00 = 2,699 ppm  → 一般可接受最低標準
  Cpk 1.33 = 66 ppm     → 業界標準
  Cpk 1.67 = 0 ppm      → Six Sigma等級
            
```

        

        

            

#### 重點提示 Key Notes

            

**Cpk是設備驗收的量化工具：**在設備採購規格（URS）中，可要求OEM提供Cpk保證值。例如：「充填準確度要求：在5 mL充填目標下，Cpk ≥ 1.33。」這將定性要求轉化為可驗證的量化指標。

            

**Cpk適用於穩定製程：**原文特別強調「stable process（穩定製程）」。若製程存在趨勢漂移（如PP管路老化），即使瞬時σ小，累計的漂移也會使實際不良率遠超Cpk預測。這也是為什麼PP需要自動劑量修正的根本原因。

            

**決策層級提示：**設備Cpk能力是「商業與彈性」層面的選擇，但它直接影響能否達到產品CQA中的劑量準確性要求，從而影響患者安全——決策層級在此垂直貫通。

        

        

            

#### 實務應用 Practical Application

            

在CDMO評估充填設備採購時，Cpk是關鍵採購指標之一。建議在URS中明確要求：
            (1) 在特定充填體積範圍下（如0.5 mL, 1 mL, 5 mL, 10 mL）分別提供Cpk承諾值；
            (2) 提供OQ/PQ驗收測試中的實測Cpk數據；
            (3) 對高價值生物藥（如基因治療），考慮要求Cpk ≥ 1.50甚至更高，因單位成本可能高達數萬美元，假廢品代價極高。

        

        

            

#### 練習思考 Practice Questions

            

                
1. 若一台充填機在驗收測試中達到Cpk = 1.40，但在實際生產中使用PP充填且未啟用自動修正，Cpk可能如何變化？為什麼？

                
2. 客戶要求劑量規格為目標值 ± 2%，而設備供應商說可達Cpk = 1.33。請計算：每百萬支中預計有多少支超出規格？這個數字對一個年產量500萬支的CDMO意味著什麼？

                
3. Cpk公式中使用「min」函數的意義是什麼？如果製程平均值嚴重偏向USL一側，Cpk如何反映這個風險？

            

        

    

6.0 Special Considerations for Advanced Container–Closure Design and Implementation (Transition — doc p114)

    

        

## 原文內容 Original Text

        

Container–closure design is an area of intense research and development within the pharmaceutical and biopharmaceutical industries. As stated in Section 1.2, container–closure materials of construction and design will influence the design of the aseptic filling line and will also affect the selection of the closing system (see Section 7.3). When considering the use of a novel container and/or closure, it is essential to involve potential component suppliers as early as practicable with the design and selection of the equipment to ensure suitability and compatibility.

        

### 6.1 Container–Closure Design

        

Some recent examples of advanced container–closure systems in development and in the market include:

        

            
- Multi-chamber vials

            
- Multi-chamber syringes

            
- Multi-barrel, single-plunger syringes

            
- Multi-chamber cartridges

            
- Autodisable (nonreusable) polymer-pouch intramuscular (IM) delivery system

            
- Nested micro-vials

            
- Multi-container-type association (e.g., vial connected to infusion bags)

            
- Crush-proof vials

            
- Silicone-free syringes

            
- Needle-through-septum filling of presterilized, fully closed vials

            
- Press-fit vial closures

        

        

The design objectives of the more advanced containers and closures can be varied, but often include:

        

            
- Enhanced shelf life

            
- Improved ruggedness in handling, transportation, storage (e.g., extreme low-temperature storage), and use

            
- Enhanced SA at the point of filling or point of administration

            
- Simplification and improvement of accuracy of patient administration

            
- Reconstitution close to the time when the injection is to be administered

            
- Reduction of waste in the extractable volume

            
- Prevention of reuse or diversion of syringes

            
- Reduction of components and reduction of waste during manufacturing and/or administration

            
- Elimination of specific quality-attribute failures (e.g., silicone-induced protein agglomeration)

            
- Simplification and improved quality of closing operations (e.g., elimination of vibratory feed systems, reduced risk of particle generation, reduction in closing steps, reduction in non-product contact parts, all closing operations completed under Grade A immediately after fill)

        

    

    

        

## 導師解析 Tutorial Commentary

        

            

#### 核心概念解析 Key Concepts

            

**進階容器密封系統 (Advanced Container-Closure Systems)：**傳統注射劑容器（玻璃瓶+橡皮塞+鋁蓋）已無法滿足現代生物藥、基因治療和患者便利性的需求。進階系統涵蓋多腔室、自動失能（防重複使用）、無矽油等創新設計。

            

**關鍵設計驅動力：**
            

                
- **SA（無菌保證）提升：**針刺隔膜充填（needle-through-septum）在全封閉系統中充填，最大化無菌屏障。

                
- **矽油問題 (Silicone Issue)：**傳統注射器使用矽油潤滑活塞，但矽油滴入藥液可引起蛋白質聚集（protein agglomeration）——無矽油注射器應運而生。

                
- **可提取體積損失 (Extractable Volume Waste)：**減少死體積，對昂貴生物藥尤其重要。

            

            

        

        

            

#### 比喻說明 Analogy

            

傳統注射瓶就像餐廳用的普通餐具——功能完整但通用。進階容器密封系統就像米其林餐廳為特定菜品客製化的餐具——形狀、材質、密封方式都為特定需求優化，但設計複雜度和供應商協調難度也大幅提升。

            

這也是為什麼Section 6.0一開頭就強調「儘早讓供應商參與」——客製化容器不能在充填線設計完成後才想到。就像你不能等廚房蓋好了才決定要用多大的鍋。

        

        

            

#### 重點提示 Key Notes

            

**「儘早介入」原則（Early Engagement）：**進階容器/密封系統必須在設備選型和充填線設計的早期階段就讓供應商參與。容器幾何影響充填針設計、IPC設定、關蓋設備選型。若在設備採購後才換容器，可能需要全面重新驗證。

            

**決策層級（Decision Hierarchy）提示：**進階容器的設計目標中，「增強SA（無菌保證）」排在最前——這符合決策層級的第一優先。患者安全（CQA，如劑量準確性、避免蛋白質聚集）排在第二。便利性和商業考量（如防重複使用、減少廢棄物）排在最後。

            

**Section 6是過渡橋樑：**Section 5的劑量控制討論至此結束，Section 6開始進入容器密封系統的深入討論（繼續至Section 7：關閉系統設計）。容器-充填-密封這三者是不可分割的系統工程。

        

        

            

#### 實務應用 Practical Application

            

對CDMO業務發展團隊的啟示：當客戶帶著進階容器系統的新案詢問可行性時，第一個問題應是「你的容器供應商能提供哪些設備相容性數據？」而不是立刻報價。進階容器往往需要：
            (1) 特殊充填針頭設計（如針刺隔膜充填）；
            (2) 修改或客製化的關蓋設備；
            (3) 重新設計IPC系統（如多腔室需要多步驟充填驗證）；
            (4) 更長的設備驗收和製程驗證周期。
            這些都需要在技術可行性評估中明確，才能準確報價和排程。

        

        

            

#### 練習思考 Practice Questions

            

                
1. 「無矽油注射器」解決了什麼CQA問題？這個問題對哪一類藥品（小分子 vs. 生物藥）影響更大？為什麼？

                
2. 針刺隔膜充填（needle-through-septum filling）如何強化無菌保證？與傳統開口充填相比，它解決了哪個關鍵的污染風險窗口？

                
3. 如果一個客戶要求使用多腔室卡匣，請列出至少3個你需要在早期設備設計階段就確認的技術問題。

            

        

    

    

### 本節重點回顧 Section Summary (5B: doc p108-p114)

    

        
- **容積充填（5.2.2）：**以容器幾何+雷射感測器控制終點，不用天平稱重。精度依賴容器尺寸一致性，適合無最大充填重量限制的容器（如多劑卡匣）。

        
- **劑量修正哲學（5.2.2.2）：**穩定泵（RPP/DP）用手動修正，PP用自動時間加權修正，TP必須自動即時修正——對應各泵系統的本質特性差異。

        
- **三大稱重誤差類型（5.3）：**統計性（氣流/震動/靜電等隨機誤差）、恆定性（感測器偏移等系統誤差）、機器/產品相關誤差。Grade A氣流既保護無菌，也是稱重精度的挑戰。

        
- **IPC限度設定核心原則（5.3.1）：**IPC讀值 ≠ 實際重量。IPC上下限應依據「最寬IPC鐘形曲線」設定，避免因IPC天平固有誤差而誤判拒絕實際合格品（false rejects）。

        
- **製程能力指標 Cpk（5.3.2）：**Cpk 1.0~1.33為業界標準（±3σ~±4σ）。Cpk = 1.33時，每百萬充填僅66個超規。Cpk是設備採購規格（URS）的關鍵量化指標。

        
- **進階容器密封系統（6.0過渡）：**多腔室、無矽油、針刺隔膜充填等創新容器需在設備設計早期讓供應商參與。決策優先順序永遠是：無菌保證 > 產品CQA > 商業靈活性。

    

↑

## Topic 6: Container-Closure 容器封閉系統 (p114-p118)

# Section 6: Container-Closure Systems

    

容器密封系統 — 進階設計與實施考量

    

PDA Manufacturing Technology Guide No. 1 | doc p114 - p118

    

### 本章學習目標

    

        
- 了解進階容器密封系統 (Container-Closure System) 的設計趨勢與技術創新，包括多腔室、矽利康游離、針穿隔膜充填等新興設計。

        
- 掌握評估新型容器密封系統的關鍵考量因素——從供應鏈、操作處理、產品相容性到 IPC 複雜性，建立系統性風險評估框架。

        
- 理解進階容器密封設計如何在無菌保證 (Sterility Assurance)、病患安全與商業靈活性三者之間取得平衡。

        
- 能夠在 CDMO 業務場景中，針對客戶的創新容器密封需求，提出合理的技術評估流程與供應商早期介入策略。

    

6.0 Special Considerations for Advanced Container-Closure Design and Implementation

    

        

## 原文內容 Original Text

        

Container-closure design is an area of intense research and development within the pharmaceutical and biopharmaceutical industries. As stated in Section 1.2, container-closure materials of construction and design will influence the design of the aseptic filling line and will also affect the selection of the closing system (see Section 7.3). When considering the use of a novel container and/or closure, it is essential to involve potential component suppliers as early as practicable with the design and selection of the equipment to ensure suitability and compatibility.

    

    

        

## 導師解析 Tutorial Commentary

        

            

#### 核心概念解析 Key Concepts

            

**Container-Closure System（容器密封系統）：**指容器本體（如小瓶、注射器、卡匣）與密封組件（如橡膠塞、活塞、封蓋）共同組成的整體系統。兩者必須協同運作，才能保障產品在整個貨架壽命中的完整性、無菌性與品質。

            

**為什麼「設計」與「材料」如此重要？**容器密封的選擇不只影響產品保護，更直接決定充填線設備的設計——例如針頭直徑、充填速度、密封機制——這是一個牽一髮動全身的系統性決策。

        

        

            

#### 比喻說明 Analogy

            

選擇容器密封系統就像建築師選擇建材：你不能先蓋好房子再說要用哪種窗框。容器密封的設計必須與充填設備同步規劃，否則後期改動代價極高。這也是本節強調「盡早讓供應商參與」的根本原因。

        

        

            

#### 重點提示 Key Notes

            

**供應商早期介入原則（Supplier Early Involvement）：**對於新型容器密封，PDA 明確建議「盡早讓潛在組件供應商參與設備設計與選擇」。在 CDMO 環境中，若客戶帶來創新容器設計，必須第一時間啟動設備相容性評估，而非等到充填線已定型才發現問題。

        

        

            

#### 練習思考 Practice Questions

            

                
1. 為什麼容器密封的材料選擇會影響充填線設備設計？請舉一個具體例子說明。

                
2. 在 CDMO 接受新客戶委託時，若客戶要求使用從未使用過的創新容器，應在哪個專案階段啟動供應商評估？

            

        

    

6.1 Container-Closure Design — Advanced Examples & Design Objectives

    

        

## 原文內容 Original Text

        

Some recent examples of advanced container-closure systems in development and in the market include:

        

            
- Multi-chamber vials

            
- Multi-chamber syringes

            
- Multi-barrel, single-plunger syringes

            
- Multi-chamber cartridges

            
- Autodisable (nonreusable) polymer-pouch intramuscular (IM) delivery system

            
- Nested micro-vials

            
- Multi-container-type association (e.g., vial connected to infusion bags)

            
- Crush-proof vials

            
- Silicone-free syringes

            
- Needle-through-septum filling of presterilized, fully closed vials

            
- Press-fit vial closures

        

        

The design objectives of the more advanced containers and closures can be varied, but often include:

        

            
- Enhanced shelf life

            
- Improved ruggedness in handling, transportation, storage (e.g., extreme low-temperature storage), and use

            
- Enhanced SA at the point of filling or point of administration

            
- Simplification and improvement of accuracy of patient administration

            
- Reconstitution close to the time when the injection is to be administered

            
- Reduction of waste in the extractable volume

            
- Prevention of reuse or diversion of syringes

            
- Reduction of components and reduction of waste during manufacturing and/or administration

            
- Elimination of specific quality-attribute failures (e.g., silicone-induced protein agglomeration)

            
- Simplification and improved quality of closing operations (e.g., elimination of vibratory feed systems, reduced risk of particle generation, reduction in closing steps, reduction in non-product contact parts, all closing operations completed under Grade A immediately after fill)

        

    

    

        

## 導師解析 Tutorial Commentary

        

            

#### 核心概念解析 Key Concepts

            

**進階容器密封設計的三大驅動力：**

            

                
- **無菌保證升級：**如針穿隔膜充填（Needle-through-septum filling），在充填過程中保持容器完全密封，大幅降低暴露風險，是 SA 的最高等級實踐。

                
- **產品穩定性需求：**如多腔室設計，讓凍乾藥品與稀釋劑分開儲存，只在給藥前才混合，延長有效期並確保療效。

                
- **病患使用安全：**如防重複使用 (Autodisable) 系統，從容器設計層面消除注射器二次使用風險，為公衛政策提供技術支撐。

            

            

**SA（Sterility Assurance，無菌保證）：**SA 是整個決策層次的頂端。每一項進階設計的最終目的，都是要維護或提升 SA 水準。

        

        

            

#### 比喻說明 Analogy

            

**多腔室容器好比「即沖咖啡包」：**咖啡粉與熱水分隔，喝之前才混合，確保每一杯都是最佳狀態。多腔室注射器讓凍乾藥物與稀釋劑在給藥前一刻混合，既延長貨架壽命，又確保療效。

            

**矽利康游離注射器（Silicone-free syringe）：**就像改用不沾鍋塗層的餐具——傳統矽利康潤滑雖方便，但對蛋白質類藥物可能引發凝聚，矽利康游離設計從根源消除這個 CQA 風險。

        

        

            

#### 重點提示 Key Notes

            

**決策層次提示：**注意設計目標清單中，「Enhanced SA at the point of filling or point of administration（在充填或給藥點提升無菌保證）」優先於所有商業便利性目標。這完全符合本指南的決策層次：SA 永遠第一。

            

**Grade A 密封要求：**文中提到「all closing operations completed under Grade A immediately after fill」——所有密封操作必須在充填後立即於 Grade A 環境完成。這是無菌充填的核心紀律，任何進階設計都不能降低此標準。

        

        

            

#### 實務應用 Practical Application

            

假設一家 CDMO 客戶要求使用「針穿隔膜充填（Needle-through-septum filling）」方式處理其凍乾蛋白質藥品，您需要評估：

            

                
- 現有充填針頭設計是否相容？針徑、材質、穿刺力是否在規格內？

                
- 隔膜（Septum）的熔融密封（Fusion-sealing）設備是否已具備，或需要新購？

                
- APS（無菌製程模擬）設計是否需要更新，以驗證針穿後的密封完整性？

                
- 供應商是否能提供符合 RTU（即用型）規格的預滅菌密封小瓶？

            

            

這些問題應在可行性評估（Feasibility Study）階段完成，而非等到商業批才發現設備不相容。

        

    

6.1 (continued) — Design Attributes Achieving the Objectives

    

        

## 原文內容 Original Text

        

These container-closure systems accomplish those significant objectives through such design attributes as:

        

            
- Integrating filled containers with devices such as autoinjectors or bandoliers of autoinjectors to standardize and automate dosing

            
- Providing SU, disposable-dose delivery systems, thereby reducing the stability requirements for multi-dose containers

            
- Creating the ability to lyophilize active preparations and contain the lyophile separate from diluents, thereby enhancing shelf life

            
- Creating the ability to freeze the vial to cryogenic temperatures without a loss of integrity

            
- Fabricating vials, cartridges, and other systems with enhanced materials of construction or layers of different materials that assist the container in resisting crushing, cracking, or damage

            
- Using multi-chamber cartridges or syringes that reduce the number and type of containers to be handled (e.g., lyophile and diluent can be combined in a single delivery device), so two products can be maintained separate for later combination and mixing at the time of dose administration

            
- Reducing risk in contamination control by limiting the number of containers or devices subject to aseptic manipulation during manufacture

            
- Reducing risk in infection control by reducing handling by the caregiver at the point of administration

            
- Improving the dosing accuracy by filling the delivery device directly rather than requiring the caregiver to withdraw the dosage

            
- Eliminating specific processing or treatment agents (e.g., silicone)

            
- Filling through septum with small needle to enhance SA by keeping sterile container closed during filling with fusion-sealing of septums after through-septum filling to maintain integrity

            
- Integrating stopper and overseal in a single closure applied simultaneously

        

        

Since the number and types of containers and closures available on the market is increasing, and development activities are providing continuous improvement, it would be impossible in a Manufacturing Technology Guide to address each in turn. Instead, when considering the topic of aseptic filling, there are some factors about the container-closure system and its intended handling that should be assessed. These factors include, but are not limited to:

        

            
- **Supply constraints**
                

                    
    - What are the available methods of supply from the supplier (e.g., RTU or to be prepared on site, bulk packs vs. nests, oriented vs. non-oriented)?

                    
    - Are there multiple supplier sources for the chosen container (or equivalent)?

                

            

            
- **Handling requirements**
                

                    
    - What are the requirements for introduction (e.g., nesting or conveyance)?

                    
    - As to conveyance, would they be conducive to back pressure or feed mechanisms?

                

            

            
- **Orienting risks**
                

                    
    - When designing systems for orienting components that are supplied non-oriented, what are the risks associated with the orientation process (e.g., particle generation during orientation processes, risks to deformation of the component during orienting, clumping, or improper flow due to high friction)?

                

            

        

    

    

        

## 導師解析 Tutorial Commentary

        

            

#### 核心概念解析 Key Concepts

            

**SU（Single-Use，一次性使用）的戰略意義：**SU 交付系統消除多劑量容器的穩定性挑戰（開瓶後氧化、污染風險），同時簡化病患使用流程。從 CDMO 角度，SU 也減少了充填線清洗與驗證負擔。

            

**RTU（Ready-to-Use，即用型）：**供應商預先清洗、滅菌、包裝的組件，直接引入無菌區使用。相對於現場準備（on-site preparation），RTU 降低製程步驟，但依賴供應鏈穩定性。

            

**Fusion-sealing of septums（隔膜熔融密封）：**針穿充填後，用雷射或熱能將穿刺孔融合封閉，恢復完整的容器密封性。這是保障 SA 的關鍵技術步驟。

        

        

            

#### 比喻說明 Analogy

            

**多腔室容器中減少無菌操作的概念：**就像一家頂級壽司餐廳，師傅接觸食材的次數越少，食材被污染的風險就越低。進階容器設計的核心邏輯之一，是透過整合多個功能到單一容器，減少製造過程中需要無菌操作的步驟數。每少一次操作，就少一次污染風險。

        

        

            

#### 重點提示 Key Notes

            

**供應鏈風險是被低估的關鍵因素：**PDA 特別提出 "Are there multiple supplier sources?" 這個問題，原因是進階容器往往只有少數專業供應商能供應。若只有單一來源，一旦供應中斷，整條商業充填線將無法運作。

            

**RTU vs. 現場準備的取捨：**RTU 減少現場工作量，但每瓶成本更高、且高度依賴供應商。現場準備（bulk packs）成本較低，但需要完整的清洗、滅菌驗證基礎設施。這是一個與 TCO（總擁有成本）直接相關的決策。

            

**定向（Orienting）風險：**非定向供應的組件（non-oriented）需要機器自動定向，此過程可能產生微粒（particle generation）或造成組件變形。對於脆性容器（如玻璃微瓶）或表面塗層組件，定向步驟是重大的風險點。

        

        

            

#### 風險量化思考框架

            

```

供應鏈風險評分（概念模型）：

供應風險 =
  (單一供應商比重) ×
  (年需求量) ×
  (備料緩衝週數的倒數)

建議目標：
- 至少 2 家合格供應商
- 備料緩衝 ≥ 12 週（創新容器）
- 備料緩衝 ≥ 6 週（標準容器）

若只有 1 家供應商且緩衝 < 8 週，
則供應中斷風險被歸類為「高風險」，
應啟動備用供應商資格確認計畫。
            
```

        

        

            

#### 練習思考 Practice Questions

            

                
1. RTU（即用型）組件相對於現場準備組件，在無菌保證方面有何優勢？又有何潛在風險？

                
2. 若客戶要求使用非定向供應的新型多腔室小瓶，您會在可行性評估中關注哪些風險點？

            

        

    

6.1 (continued) — Comprehensive Risk Assessment Factors

    

        

## 原文內容 Original Text

        

            
- **General handling risks**
                

                    
    - What are the risks associated with the selected handling mechanisms (e.g., risks to scuffing of preprinted surfaces during processing and handling, risks to cracking, breakage or scuffing with back-pressure conveyance, inconsistencies in flatness for bottoms or dimensions if conveyed or handled with robotics)?

                

            

            
- **Product risks**
                

                    
    - What are the risks to the product in contact with the container-closure system (e.g., extractables, leachables, particulate, adsorption, absorption, oxidation, free radicals)?

                

            

            
- **Product filling risks**
                

                    
    - What are the risks to the filling process (e.g., neck size and targeting risks, container-to-container consistency, loss of container integrity)?

                

            

            
- **Closure risks**
                

                    
    - What are the risks associated with the closing processes (e.g., need to draw vacuum to eliminate air bubbles in multiple-chamber devices, positioning-accuracy requirements, closure insertion challenges and risks, such as friction forces, likelihood of displacement, likelihood of a leak by allowing mixing in a multi-chamber device, laser septum-sealing integrity)?

                

            

            
- **Transport risks**
                

                    
    - What are the atypical risks during transport that are the result of the unique design or functional specifications of the container-closure system (e.g., wandering of stoppers due to lowered cabin pressure, residual air bubbles causing stopper movement during air shipment)?

                

            

            
- **Complexity of IPC sampling, testing, and associated reject management**
                

                    
    - What are the requirements for IPC to ensure that individual units/chambers within a unit are each filled to the correct volume and sealed properly (e.g., IPC inspection points may be required after each filling action and each closure placement, necessitating different strategies for segregation and rejection at multiple IPC points)?

                

            

            
- **Aseptic process simulation complexity**
                

                    
    - What will the APS design include to ensure that the appropriate surfaces are wetted and that each portion of a multi-stage fill process is evaluated (e.g., multi-chamber containers need to ensure that each portion of the container is appropriately challenged during APS)?

                

            

            
- **Post-fill inspection complexity**
                

                    
    - What will the inspection sequence require for machine and personnel training, qualification, and performance (e.g., numbers and types of defects, number of inspections required, different inspection conditions for different portions, different inspection conditions for different elastomer positions)?

                

            

        

        

            "These factors, and more, should be carefully considered when looking to implement a novel container-closure system."
        

    

    

        

## 導師解析 Tutorial Commentary

        

            

#### 核心概念解析 Key Concepts

            

**Extractables（可萃取物）vs. Leachables（可滲出物）：**

            

                
- **Extractables：**在極端實驗室條件下（如高溫、強溶劑）從容器材料中提取出的化學物質——代表「最壞情況」的潛在污染物清單。

                
- **Leachables：**在實際儲存和使用條件下，自然遷移進入產品中的物質——是真正影響病患安全的品質風險。

                
- 兩者關係：E/L 研究是法規要求的標準程序，Leachables 永遠是 Extractables 的子集。

            

            

**IPC（In-Process Control，製程中管控）在多腔室容器的複雜性：**傳統單腔室小瓶只需在充填後做一次重量或體積檢查。多腔室容器的每個腔室都需獨立驗證充填體積與密封完整性，IPC 取樣點因此成倍增加，廢品管理策略也必須重新設計。

            

**APS（Aseptic Process Simulation，無菌製程模擬）：**俗稱「培養基灌裝（Media Fill）」，是驗證整個無菌製程的關鍵工具。多腔室容器的 APS 必須確保每個腔室的每個表面都被培養基潤濕，驗證難度遠高於傳統容器。

        

        

            

#### 比喻說明 Analogy

            

**運輸中的橡膠塞漂移問題：**想像一個裝有泡泡水的瓶子放在飛機行李艙——高空低氣壓可能讓瓶蓋膨脹鬆脫。同理，多腔室小瓶中若殘留空氣，在航空運輸的低氣壓環境下，空氣泡膨脹會推動橡膠塞移位，導致容器密封失效或不同腔室液體提前混合。這是進階容器設計者必須在工程層面解決的問題。

            

**後充填檢查的複雜性：**就像品管員需要同時檢查一個有三個夾層的精品行李箱——每個夾層都要確認無損、無異物、拉鏈正常。多腔室容器的每個腔室都有不同的外觀缺陷基準、不同的光學條件，訓練與資格認證的工作量是傳統容器的倍數。

        

        

            

#### 重點提示 Key Notes

            

**這八個風險維度是進階容器評估的標準框架：**下次當客戶帶來「創新容器」需求時，可用此八維框架系統性評估——供應、操作、定向、一般處理、產品相容、充填、密封、運輸——涵蓋從組件到貨架的完整生命週期。

            

**APS 複雜度是核心挑戰：**多腔室容器的 APS 設計沒有現成模板，必須針對容器幾何形狀客製化，且往往需要更長時間與更多批次才能建立充分的統計信心。這直接影響商業化時程與驗證成本預算。

            

**後充填檢查的人員資格：**不同腔室位置的橡膠塞，在外觀檢查時呈現不同樣態，需要針對每種缺陷模式建立獨立的訓練與資格認證程序，大幅增加品管資源投入。

        

        

            

#### 進階容器評估八維風險框架

            

```

新型容器密封系統風險評估矩陣：

維度              | 關鍵問題
-----------------|----------------------------------
1. 供應鏈         | 供應商數量、RTU vs 現場準備
2. 操作處理       | 進料方式、輸送機構相容性
3. 定向           | 微粒風險、變形風險、摩擦力
4. 一般處理       | 表面刮傷、破裂、機器人夾取精度
5. 產品相容       | Extractables/Leachables、吸附/吸收
6. 充填製程       | 瓶口定位、一致性、完整性
7. 密封製程       | 真空需求、摩擦力、洩漏風險
8. 運輸           | 氣壓變化導致塞子漂移

+ IPC 取樣策略設計
+ APS 多腔室驗證設計
+ 後充填檢查資格計畫
            
```

        

        

            

#### 實務應用 Practical Application

            

一家生技公司委託您的 CDMO 充填其「雙腔室自動注射器（Dual-chamber autoinjector）」——主藥為凍乾粉末，稀釋劑為注射用水，兩者在腔室中分隔儲存，給藥時自動混合。

            

**您的評估計畫應包含：**

            

                
- **供應鏈：**確認自動注射器供應商是否提供 RTU 格式，以及備用供應商資格。

                
- **充填：**兩個腔室分別需要不同的充填站，充填針頭與腔室幾何形狀必須相容。

                
- **密封：**兩端密封機制不同（凍乾端用凍乾塞；稀釋劑端用活塞），需要兩套密封工位。

                
- **IPC：**每個腔室充填後各需一個 IPC 取樣點，廢品隔離策略需同時考慮兩腔室結果。

                
- **APS：**培養基必須分別灌注兩個腔室，並驗證混合機構不會造成交叉污染。

                
- **運輸：**進行航空運輸模擬測試，確認低氣壓條件下兩端密封塞不漂移。

            

            

這個評估若在商業化前 18 個月啟動，才有足夠時間解決設備相容性問題，避免臨床試驗材料延遲交付。

        

        

            

#### 練習思考 Practice Questions

            

                
1. Extractables 和 Leachables 的差異是什麼？為什麼兩者都必須研究，而不能只做其中之一？

                
2. 多腔室容器的 APS 設計為什麼比傳統單腔室小瓶更複雜？請列出至少三個額外的考量點。

                
3. 航空運輸對進階容器密封系統有哪些獨特的物理挑戰？工程設計層面如何應對？

            

        

    

    

### 本節重點回顧 Section Summary

    

        
- **進階容器密封設計的核心驅動力**是「提升無菌保證（SA）」、「延長貨架壽命」與「改善病患使用安全」，而非單純的商業便利性——這完全符合本指南的決策層次：SA 第一、CQA 第二、商業便利第三。

        
- **供應商早期介入（Early Supplier Involvement）**是成功導入新型容器密封的先決條件。設備設計與組件設計必須同步進行，任何後期修改都代價高昂。

        
- **進階容器密封的複雜性是倍增的：**每增加一個腔室或一個功能，IPC 取樣點、APS 驗證設計、後充填檢查訓練，以及供應鏈管理的複雜度都成倍增加，必須在專案規劃初期充分考慮資源投入。

        
- **八維風險評估框架**（供應、操作、定向、一般處理、產品相容、充填、密封、運輸）加上 IPC/APS/後充填檢查三個製程層面，是評估任何新型容器密封系統的系統性工具，適用於 CDMO 可行性評估與客戶提案情境。

        
- **Extractables/Leachables（E/L）研究**是法規必要項目，必須在產品開發早期啟動，以免在上市申請前才發現相容性問題，導致重大時程延誤。

    

⇧

## Topic 7: Closing Systems 封閉系統 (p118-p133)

# Section 7A: Closing Systems — Elastomers & Insertion Methods

    

封閉系統：彈性體種類與插入技術

    

PDA Manufacturing Technology Guide No. 1 | p118 - p125

    
    

        

            

1. Sterility Assurance (無菌保證) — 永遠第一優先

        

        

▼

        

            

2. Product CQAs (產品關鍵品質屬性) — 病人安全

        

        

▼

        

            

3. Business & Flexibility (商業與彈性) — 操作需求

        

    

    
    

        

### 本章學習目標

        

            
- 掌握不同彈性體（stopper）類型的設計特徵與適用容器

            
- 理解壓合式封蓋（Press-fit closure）的密封機制

            
- 比較三種彈性體插入技術：通氣插入、真空插入、真空輔助通氣插入

            
- 了解矽化與無矽化彈性體對插入方法選擇的影響

        

    

    
    

        

### 本節內容導覽

        

            7.2 彈性體選擇驅動因素
            彈性體種類 A-F
            Press-fit 封蓋
            Table 7.2-1 設計屬性
            7.3.1 小瓶插入技術
            7.3.2 預填充注射器插入技術
            Table 7.3.2-1 比較表
        

    

    
    

        

            

7.2

            

                

## Elastomers — Selection Drivers & Stopper Types

                

彈性體選擇驅動因素與封蓋種類（p118-p120）

            

        

        

            

                
                

                    

### 7.2 Elastomers (Closures for Parenteral Containers)

                    

The selection of an appropriate elastomer is primarily driven by:

                    

                        
- **Shape and size** suitable to provide the necessary CCI (container closure integrity — e.g., egress or ingress of product or contaminants) for the selected container while also suitable for the process (e.g., lyophile stoppers)

                        
- **Material of construction or coating** (or absence of coatings) so the elastomer is chemically compatible with the product over its entire shelf life (i.e., stability), with minimal extractables or leachables

                        
- **Low particle burden** (upon supply, after processing including sterilization, and/or resistance to coring when penetrated by a syringe needle for multi-use vials or cartridges)

                        
- **Suitable breakaway force and glide force** for reproducible and smooth plunger actuation (syringes and cartridges only) to ensure trouble-free patient administration and, for multi-use containers, delivered dose accuracy

                    

                

                
                

                    

### 解析與注解

                    

                        

#### 彈性體選擇的四大驅動因素

                        

選擇 stopper（塞子）時，必須按照決策層級思考：

                        

                            
- **CCI（Container Closure Integrity，容器密封完整性）** — 防止微生物污染進入（無菌保證 #1）

                            
- **化學相容性** — Extractables（可萃取物）和 Leachables（可滲出物）影響產品穩定性（CQAs #2）

                            
- **低微粒負擔** — 特別是多次使用小瓶，針頭反覆穿刺會產生 coring（橡膠碎屑）風險

                            
- **Breakaway force / Glide force** — 僅適用於注射器和卡匣，影響劑量準確性與病人使用體驗（CQAs #2）

                        

                    

                    

                        

#### 名詞釐清：Extractables vs. Leachables

                        

                            
- **Extractables（可萃取物）**：在極端條件（高溫、強溶劑）下從彈性體釋出的化合物 — 實驗室受控測試

                            
- **Leachables（可滲出物）**：在實際儲存條件下遷移到產品中的物質 — 直接影響病人安全

                        

                        

法規要求：Leachables 必須低於安全閾值，並貫穿整個效期（shelf life）。

                    

                    

                        

#### Coring 風險 — 無菌保證威脅

                        

**Coring**：針頭穿刺橡膠時，切下的橡膠碎片進入藥液。這直接威脅無菌保證（#1）和產品 CQA（#2）。多次使用小瓶（multi-dose vials）的選材需特別注意抗 coring 能力。

                    

                    

                        

#### 生活比喻：Breakaway Force vs. Glide Force

                        

想像拉一個黏在牆上的橡皮塞：

                        

                            
- **Breakaway force（啟動力）**：第一下拉動所需的力 — 靜摩擦力

                            
- **Glide force（滑動力）**：之後持續移動所需的力 — 動摩擦力

                        

                        

兩者都必須在設計範圍內，才能確保自動注射器（autoinjector）精準送藥。

                    

                

            

        

    

    
    

        

            

7.2

            

                

## Key Styles of Elastomer (Figure 7.2-1) & Advanced Closures

                

彈性體種類 A–F 及進階封蓋系統（p119-p120）

            

        

        

            

                
                

                    

### Key Styles of Elastomer (Figure 7.2-1)

                    

Key styles of elastomer include (Figure 7.2-1):

                    

                        
- **A: Serum stoppers** (for SVPs — small volume parenterals)

                        
- **B: Infusion stoppers** (for LVPs — large volume parenterals)

                        
- **C: Lyophilization stoppers** — 2-legged with ribs to permit partial insertion and sublimation pathway

                        
- **D: Cartridge stoppers** (also called pistons) — sealing surface along the sides, no flange

                        
- **E: Cartridge disc seals** (also called CombiSeals) — elastomeric disc integrated with mechanical aluminum seal

                        
- **F: Syringe stoppers** (also called pistons or plungers) — threaded portion on upper surface for plunger rod or autoinjector mounting

                    

                    

Advanced container types may also have corresponding advanced closures (e.g., multi-chamber septa for in situ mixing, multi-chamber septa or plungers for separation of liquids and powders, press-fit or snap cap closures for low temperature applications).

                

                
                

                    

### 解析與注解

                    

                        

#### 六種彈性體快速對照

                        

                            
- **A — Serum stopper（血清塞）**：用於 SVP（小容量注射劑），如 2 mL / 10 mL 小瓶，最常見類型

                            
- **B — Infusion stopper（輸液塞）**：用於 LVP（大容量注射劑），如 500 mL 點滴袋瓶

                            
- **C — Lyophilization stopper（凍乾塞）**：有兩條腿（legs）+ 肋紋（ribs），允許部分插入讓水蒸氣逸出，凍乾結束後壓合密封

                            
- **D — Cartridge stopper / Piston（卡匣活塞）**：側面密封，無凸緣（flange），用於胰島素筆型注射器

                            
- **E — Cartridge disc seal / CombiSeal（卡匣碟形封蓋）**：橡膠碟 + 鋁封蓋一體化，位於卡匣出藥端

                            
- **F — Syringe stopper / Plunger（注射器活塞）**：上表面有螺紋槽，供活塞桿（plunger rod）或自動注射器（autoinjector）安裝

                        

                    

                    

                        

#### 生活比喻：凍乾塞的兩段式設計

                        

想像一個軟木塞沒有完全塞入瓶口 — 凍乾塞（Type C）就是這樣：部分插入 = 留通道讓冰昇華成水蒸氣跑出去。凍乾完成後，機器壓板把塞子完全壓入，才正式密封。這個設計直接服務無菌保證（#1）：若提早密封，殘留水分破壞凍乾品質，間接危害產品穩定性。

                    

                    

                        

#### 理解確認問題

                        

1. 為何 Cartridge stopper（D型）沒有 flange（凸緣），而 Syringe stopper（F型）有螺紋？各自的設計目的是什麼？

                        

2. CombiSeal（E型）把橡膠碟與鋁封蓋整合，從無菌保證角度看，此設計有何優缺點？

                    

                    

                        

#### CDMO 應用思考

                        

在 aseptic fill-finish CDMO，同一條線可能處理：小瓶 + 預填充注射器 + 卡匣（多產品共線）。選擇彈性體時，需同時考量商業彈性（#3）：物料 SKU 管理、供應商認證、以及不同 stopper 對灌裝速度的影響。

                    

                

            

        

    

    
    

        

            

7.2

            

                

## Press-fit Closures — Integrity by Design

                

壓合式封蓋：設計保證完整性（p120）

            

        

        

            

                
                

                    

### Press-fit Closures

                    

Press-fit closures are a special closure system where the elastomer is integrated into a polymer cap. The polymer cap has tabs that snap around the vial neck. Claims "integrity by design" because only one process parameter needs to be achieved. Available as both serum and lyophile stoppers.

                    

Lyophile press-fit closures have two seating positions:

                    

                        
- **High position** — for sublimation channel (during lyophilization)

                        
- **Fully sealed position** — for final container-closure

                    

                    

Cartridge disc seals are a specialty closure for the delivery end of the cartridge; they include an elastomeric disc integrated with a mechanical aluminum seal.

                

                
                

                    

### 解析與注解

                    

                        

#### "Integrity by Design" 的意涵

                        

傳統封蓋需要監控多個製程參數（壓合力、壓合深度、瓶口尺寸公差等），任一偏差都可能導致 CCI 失敗。

                        

Press-fit closure 的設計邏輯：聚合物卡扣（tabs）扣住瓶頸，幾乎只要「卡住」就完成密封，大幅降低製程複雜度。這將無菌保證（#1）的風險點從「多參數控制」簡化為「單一確認」。

                    

                    

                        

#### 重點警示：Press-fit 的應用場景

                        

Press-fit 封蓋特別適用於**低溫應用（low temperature applications）**，因為傳統鋁壓蓋在極低溫下可能因材料收縮造成密封失效。Press-fit 的聚合物材質在低溫下性能更穩定。

                        

選用前需確認與目標容器的幾何相容性，並完成 CCI 驗證（如 CCIT — Container Closure Integrity Testing）。

                    

                    

                        

#### 生活比喻：Press-fit vs. 傳統壓蓋

                        

傳統鋁壓蓋像用工具箱鉗子把鋁蓋捲邊固定，需要調整扭力、角度、鉗子間距。Press-fit 像樂高積木：對準、按下去，聽到「卡」聲就好了。製程控制從「多工具調校」變成「單一動作確認」。

                    

                    

                        

#### CDMO 應用思考

                        

若客戶產品需要低溫儲存（如 -70°C mRNA 疫苗），press-fit closure 是值得評估的選項。但需確認：供應商是否有凍乾版本？CCIT 方法是否已驗證（特別是 headspace oxygen / helium leak test）？這些決策同時影響 CCI（#1）和交期（#3）。

                    

                

            

        

    

    
    

        

            

7.2

            

                

## Table 7.2-1: Attributes Impacting Closing System Design

                

影響封蓋系統設計的關鍵屬性（p120）

            

        

        

            

                
                

                    

### Table 7.2-1: Attributes Impacting Closing Design

                    

                        
                            
                                
                                    
                                    
                                
| Attribute | Impact on Closing System Design |
| --- | --- |
                            
                            
                                
                                    ****
                                    
                                
| Closure Dimensions & Overall Shape | Defines sorting-system bowl/track dimensions; influences "twinning" issues (two stoppers stuck together); may require different vibration levels for orientation |
                                
                                    ****
                                    
                                
| Materials of Construction & Coatings | Influences surface of sorting components; influences insertion force due to friction (coated vs. uncoated stoppers have very different behavior) |
                                
                                    ****
                                    
                                
| Product Requirements | Inert headspace required → closing station needs inert gas provision; headspace minimized → vacuum at closing; both liquid & lyophilized products → closure station must adjust for partial insertion |
                                
                                    ****
                                    
                                
| Batch / Campaign Details | Batch size influences replenishment frequency; filling speed influences sorting-system bowl size |
                                
                                    ****
                                    
                                
| Method of Introduction to Filling Line | RTU (ready-to-use) vs. in-house processing influences connections to filling line |
                            
                        

                    

                

                
                

                    

### 解析與注解

                    

                        

#### 五大屬性對 CDMO 設計的影響

                        

                            
- **尺寸與形狀**：不同 stopper 的振動碗（bowl）參數需重新設定，"twinning"（雙塞粘連）是常見量產問題，直接影響良率

                            
- **材質與塗層**：矽化（siliconized）vs. 無矽化（silicone-free）stopper 的摩擦係數差異極大，影響插入力 — 需在設備選型時確認

                            
- **產品需求**：充氮（惰性氣體）vs. 抽真空 → 封蓋站硬體需求完全不同

                            
- **批次/活動細節**：大批次 = 更大的 stopper 料斗；高速線 = 更快的排序系統

                            
- **RTU vs. 自處理**：RTU stopper 省去清洗滅菌步驟（商業彈性 #3），但成本較高

                        

                    

                    

                        

#### Twinning 問題 — 製程風險

                        

**Twinning**：兩個 stopper 在振動碗排序時相互卡住，造成送料中斷、機器停線。發生頻率與 stopper 表面摩擦力和幾何形狀相關。在商業生產驗證（PPQ）前應充分評估。

                    

                    

                        

#### RTU vs. 自處理的決策框架

                        

```

RTU Stoppers:
  + 省去清洗/矽化/滅菌步驟
  + 減少操作員介入（無菌保證 #1）
  + 供應商持有批次紀錄
  - 成本較高
  - 供應商依賴（商業彈性 #3）

In-house Processing:
  + 成本較低（大批次）
  + 自主掌控製程參數
  - 需額外設備與驗證
  - 更多製程步驟 = 更多污染風險
        
```

                    

                

            

        

    

    
    

        

            

7.3.1

            

                

## 7.3.1 Elastomer Insertion in Vials and Bottles

                

小瓶與玻璃瓶的彈性體插入技術（p121-p122）

            

        

        

            

                
                

                    

### 7.3.1 Elastomer Insertion in Vials and Bottles

                    

The stoppering of vials, whether using serum stoppers or lyophilization stoppers, employs the same technique. After orienting the stopper with the finial or flange facing up and the shank facing down, the stopper is placed in the mouth of the container. This can be performed by vacuum transport, mechanical transport, or friction transfer. The elastomer is then depressed within the neck of the container (using a wheel or vacuum) to ensure a tight land seal.

                    

The stopper insertion technology (mechanical or vacuum) is selected based on **line speed**, **design of closure**, and **headspace**. It is at the point of stopper insertion that evacuation commonly occurs to replace headspace with inert gas.

                    

Automated re-stoppering capability can be added to ensure correctly filled containers are not discarded due to missing stoppers while still under Grade A controls. Raised stopper detection is a common sensor or vision-system integrated into filling lines to ensure correct insertion and no gap between stopper flange and vial landing seal.

                    

For lyophilization stoppers, the shank has "legs" with ribs that enable partial, yet secure, insertion to allow for sublimation. At the conclusion of lyophilization, a **vacuum is drawn**, **inert gas is flooded in**, and **shelves compress the stoppers**.

                

                
                

                    

### 解析與注解

                    

                        

#### 小瓶塞入的三個步驟

                        

                            
1. **定向（Orientation）**：Finial/flange 朝上，shank 朝下 — 振動碗負責排向

                            
2. **放置（Placement）**：真空傳送 / 機械傳送 / 摩擦傳送將 stopper 放到瓶口

                            
3. **壓合（Insertion）**：滾輪或真空將 stopper 壓入瓶頸，形成 land seal（接觸密封）

                        

                        

**Land seal**（接觸密封）：stopper 底部凸緣與瓶口頂面的環形接觸面 — 這是 CCI 的核心。

                    

                    

                        

#### Headspace 控制 — 無菌保證 + CQA 交叉點

                        

壓塞站是 headspace 管理的關鍵點：

                        

                            
- **充惰性氣體（N₂ / Ar）**：防止氧化敏感產品降解（CQA #2）

                            
- **抽真空**：減少殘留空氣，改善後續目視檢查的可見度（商業 #3）

                            
- **凍乾專用**：部分插入 → 昇華 → 最終壓合，三段式密封完整性管理

                        

                    

                    

                        

#### Raised Stopper Detection — 視覺系統整合

                        

**Raised stopper（塞子高插）**：stopper 未完全壓入，在 flange 與瓶口 landing zone 之間留有間隙，導致 CCI 失敗。

                        

偵測方式：感應器（高度偵測）或機器視覺（vision system）。配合自動重塞（re-stoppering）功能，可在 Grade A 環境下修正，避免正確灌裝品被廢棄（商業彈性 #3）。

                    

                    

                        

#### 生活比喻：凍乾塞的三段式密封

                        

想像在戶外晾濕衣服（昇華 = 水分散發），你先把晾衣架架好但不完全關閉，讓空氣流通。衣服乾了之後，再把架子完全合上鎖定。凍乾塞的邏輯完全相同：部分插入（通氣）→ 昇華完成 → 真空充氮 → 棚架壓合（完整密封）。

                    

                

            

        

    

    
    

        

            

7.3.2

            

                

## 7.3.2 Elastomer Insertion in Prefilled Syringes and Cartridges

                

預填充注射器與卡匣的彈性體插入技術（p122-p124）

            

        

        

            

                
                

                    

### 7.3.2 Elastomer Insertion in Prefilled Syringes and Cartridges

                    

Stoppers for prefilled syringes and cartridges serve **dual roles**: protection AND delivery (forced by plunger rod or autoinjector). These elastomers are often uniform in diameter with multiple ribs for leak protection and smooth gliding. Syringe plungers often have cone shape on product-facing side for full expulsion. Upper surface has threaded depression or retention-ring for plunger shaft or autoinjector mounting.

                    

### Three Primary Insertion Methods (Figure 7.3.2-1)

                    

                        
1. 
                            **Vented (or unvented) mechanical insertion** — stopper compressed through annular vent tube; central pin ensures consistent insertion depth using finger flange as reference; leaves minimal residual headspace helpful for swirling at visual inspection
                        

                        
2. 
                            **Vacuum insertion (vacuum bell)** — placement pin with stopper lowered under vacuum; effectively removes bubble between product and stopper; less precise placement than vented; less precompression (important for coated stoppers); good for viscous products
                        

                        
3. 
                            **Vacuum-assisted vented insertion** (short or long tube) — combination approach; lower vacuum level for products that cannot withstand deep vacuum; superior bubble removal with more precise elastomer placement
                        

                    

                    

Silicone and fluoropolymers (e.g., Teflon®) are common coatings. Silicone may be prohibited for some protein products as it can induce aggregation. Silicone-free elastomers are commonly inserted using vacuum insertion or short-tube vacuum-assisted vented methods.

                

                
                

                    

### 解析與注解

                    

                        

#### 注射器 Stopper 的雙重角色

                        

小瓶的 stopper 只需要「密封」。但預填充注射器和卡匣的 stopper 同時負責：

                        

                            
- **保護（Protection）**：維持 CCI，防止污染（無菌保證 #1）

                            
- **遞送（Delivery）**：在活塞桿推動下平滑移動，精準送藥（CQA #2）

                        

                        

因此，注射器 stopper 的多肋紋（multiple ribs）設計同時服務兩個目的：密封 + 低滑動力。

                    

                    

                        

#### 三種插入方法速覽

                        

                            
- **通氣式插入（Vented）**：機械壓入，速度最快，成本最低，但氣泡移除效果較差，不適合無矽化 stopper

                            
- **真空插入（Vacuum Bell）**：在真空環境下放入，氣泡移除最佳，但精確度較低，成本最高，速度較慢

                            
- **真空輔助通氣（Vacuum-Assisted Vented）**：結合兩者優點，短管版本適合大填充量/淺插入，長管版本適合小填充量/深插入

                        

                    

                    

                        

#### 矽化 vs. 無矽化 — 蛋白質產品的關鍵決策

                        

**矽油（silicone）**塗層可能誘發蛋白質藥物（如抗體、胰島素）發生**聚集（aggregation）**，形成可見或次可見微粒，直接威脅病人安全（CQA #2）。

                        

因此，高價值生物製劑通常採用：

                        

                            
- 無矽化彈性體（silicone-free）+ Teflon 塗層

                            
- 搭配真空插入或短管真空輔助通氣法（不適合通氣式）

                        

                        

此決策優先級：CQA 安全（#2）> 商業速度（#3）。

                    

                    

                        

#### 理解確認問題

                        

1. 為何通氣式插入（Vented）對無矽化 stopper「無效（Not effective）」？從摩擦力與插入機制解釋。

                        

2. Vacuum Bell 在小填充量（small fill volume）的效果較差，原因為何？

                    

                

            

        

    

    
    

        

            

7.3.2

            

                

## Table 7.3.2-1: Comparison of Vent and Vacuum Insertion Techniques

                

通氣式 vs. 真空式插入技術完整比較（p124）

            

        

        

            
            

                
                    
                        
                            
                              

                              

                              

                              

                        
| Feature / 特性 | Vented Insertion通氣式插入 | Vacuum Bell真空插入 | Vacuum-Assisted Short真空輔助（短管） | Vacuum-Assisted Long真空輔助（長管） |
| --- | --- | --- | --- | --- |
                    
                    
                        
                            ****
                            
                            
                            
                            
                        
| Application / 應用場景 | General use; not for coated stoppers | Coated/delicate stoppers, high-viscosity products | Siliconized and coated stoppers, large fill / shallow insertion | Siliconized stoppers, small fill / deep insertion |
                        
                            ****
                            
                            
                            
                            
                        
| Cost / 成本 | Least expensive | Most expensive | More expensive than vent | More expensive than vent |
                        
                            ****
                            
                            
                            
                            
                        
| Speed / 速度 | Fastest speeds | Often slower | Faster of vacuum techniques | Slowest of vacuum techniques |
                        
                            ****
                            
                            
                            
                            
                        
| Vacuum Level / 真空度 | N/A (no vacuum) | Deep vacuum possible | Moderate vacuum | Higher vacuum |
                        
                            ****
                            
                            
                            
                            
                        
| Air Bubble Removal / 氣泡移除 | Less effective | Effective | Similar to vacuum bell | Can be highly effective |
                        
                            ****
                            
                            
                            
                            
                        
| Viscous Products / 高黏度產品 | Less common | Good | Good | Good |
                        
                            ****
                            
                            
                            
                            
                        
| Small Fill Volume / 小填充量 | Effective | Less effective | Not for small fill | Designed for small fill / deep insertion |
                        
                            ****
                            
                            
                            
                            
                        
| Large Fill Volume / 大填充量 | Effective | Less effective | Effective (designed for large fill) | Less suited |
                        
                            ****
                            
                            
                            
                            
                        
| Silicone-Free Stoppers / 無矽化彈性體 | Not effective | Effective | May be possible | Not effective |
                    
                

            

            

                
                

                    

### How to Select the Insertion Method

                    

Selection is driven by the intersection of three key factors:

                    

                        
- **Stopper coating type** — siliconized vs. silicone-free determines eligibility for vented method

                        
- **Fill volume and insertion depth** — small fill with deep insertion favors long-tube vacuum-assisted; large fill with shallow insertion favors short-tube or vacuum bell

                        
- **Product characteristics** — viscosity influences vacuum technique preference; protein sensitivity to silicone drives coating and method choices simultaneously

                    

                    

Line speed requirements (commercial demand) are a secondary filter applied after the primary technical constraints are satisfied.

                

                
                

                    

### 解析與決策注解

                    

                        

#### 插入方法選擇決策樹

                        

```

Step 1: 是否為無矽化 stopper？
  YES → 排除 Vented 和 Long-tube VA
        → 選擇 Vacuum Bell 或 Short-tube VA

Step 2: 填充量大小？
  小填充量（<0.5 mL）→ Long-tube VA 或 Vacuum Bell
  大填充量（>1 mL）→ Short-tube VA 或 Vacuum Bell

Step 3: 產品黏度高嗎？
  YES → Vacuum Bell 或 VA 系列（機械式較難均勻覆蓋）

Step 4: 速度 / 產量要求？
  高速（>400 spm）→ 傾向 Vented 或 Short-tube VA
  低速可接受 → Vacuum Bell 亦可考慮
        
```

                    

                    

                        

#### 氣泡問題 — 目視檢查的痛點

                        

注射器 stopper 壓入後若殘留**氣泡（air bubble）**：

                        

                            
- 目視檢查時容易被誤判為異物微粒 → 偽陽性廢棄率上升

                            
- 氣泡體積在溫度變化時膨脹 → 影響劑量準確性（CQA #2）

                        

                        

真空插入系列的核心價值就是解決此問題（無菌保證 #1 間接受益，CQA #2 直接受益）。

                    

                    

                        

#### CDMO 應用思考：設備選型策略

                        

在 CDMO 環境中，若需同時服務多個客戶的 PFS 產品（不同填充量、不同 stopper 類型），建議設備選型時考量：

                        

                            
- 優先選 **Vacuum-Assisted Vented（短管）**：兼顧矽化/部分無矽化、大填充量、中等速度，最具彈性

                            
- 若有極小填充量 mAb 產品 + 無矽化需求 → 需評估加裝 Vacuum Bell 模組

                            
- 設備彈性（#3）不得犧牲無菌保證（#1）：每次切換插入方法都需要重新驗證

                        

                    

                

            

        

    

    
    

        

            

●

            

                

## Section 7A Summary — 本節重點總結

                

Closing Systems: Elastomers & Insertion Methods

            

        

        

            

                

                    

### Key Takeaways

                    

                        
- **Elastomer selection** is driven by CCI, chemical compatibility (extractables/leachables), particle burden (coring), and force profile (breakaway/glide)

                        
- **Six stopper types** (A–F) are each matched to specific container/delivery systems — lyophilization stoppers (C) uniquely require two-stage seating

                        
- **Press-fit closures** claim "integrity by design" by reducing multi-parameter sealing to a single snap mechanism — particularly suited to low-temperature applications

                        
- **Three syringe insertion methods** differ in cost, speed, vacuum level, and capability with silicone-free stoppers — selection must match stopper coating and fill volume

                        
- **Silicone-free stoppers** require vacuum-based insertion and are critical for protein biologics prone to silicone-induced aggregation

                    

                

                

                    

### 決策層級回顧

                    

                        

#### 本節決策層級應用

                        

                            
- **無菌保證（#1）**：CCI 是 stopper 選擇的首要驅動；raised stopper detection、凍乾兩段式密封、真空插入去氣泡 — 全部服務此目的

                            
- **產品 CQAs（#2）**：Leachables、矽化/聚集問題、Breakaway/Glide force、氣泡對劑量影響 — 直接影響病人安全

                            
- **商業彈性（#3）**：RTU vs. 自處理、插入方法速度、設備多產品相容性 — 在前兩項確保後才最佳化

                        

                    

                    

                        

#### 綜合思考題

                        

客戶帶來一支無矽化 stopper、填充量 0.3 mL、蛋白質型生物製劑的預填充注射器產品。請問：

                        

                            
1. 應選擇哪種插入方法？理由為何？

                            
2. 若客戶同時要求最高產速，你會如何與客戶溝通決策層級？

                            
3. 驗證計畫應包含哪些關鍵測試項目？

                        

                    

                

            

        

    

⇧

# Section 7B: Closing Systems — Advanced Topics (7.5+)

    

密封系統進階主題：卡匣碟封、缺陷識別與容器密封完整性驗證

    

PDA Manufacturing Technology Guide No. 1 | doc p126 - p133

    

### 本章學習目標

    

        
- 理解卡匣碟封 (Cartridge Disc Seal) 的特殊設計需求，以及為何必須置於無菌邊界內

        
- 掌握常見彈性體放置缺陷的種類及其品質管控意義

        
- 了解容器密封完整性 (Container-Closure Integrity, CCI) 驗證的整體框架與考量因素

        
- 能夠依決策層級（無菌保證 > 產品 CQA > 商業彈性）評估各種密封系統設計選擇

    

    7.3.2 (Cont.) Insertion Method Comparison & 7.3.3 Common Defects in Elastomer Placement

    

        

## 原文內容 Original Text

        

Continuation of Table 7.3.2-1 — Comparison of Insertion Methods (doc p126):

        

            
                
                    
                        
                        
                        
                        
                        
                    
| Feature | Vented Insertion | Vacuum Insertion | Vacuum-Assisted Vented — Short | Vacuum-Assisted Vented — Long |
| --- | --- | --- | --- | --- |
                
                
                    
                        ****
                        
                        
                        
                        
                    
| Consistency of Elastomer Placement | Highly consistent for elastomer placement. | Vacuum alone not highly consistent for elastomer placement. | More consistent for elastomer placement than vacuum alone, but short tube will be more variable with a deeper placement requirement. | Long vent tube permits accurate elastomer placement. |
                    
                        ****
                        
                        
                        
                        
                    
| Prevention of Wrinkling or Distortion | Higher risk of wrinkling or distortion of elastomers due to compression. | Low risk of wrinkling or distortion with vacuum alone. | Low risk of wrinkling or distortion of elastomers, similar to vacuum-bell application. | Higher risk of wrinkling or distortion of elastomers due to compression. |
                
            

        

        

Mechanical insertion may be used for the insertion of stoppers into cartridges from the bottom prior to filling, as shown in Figure 7.3.2-2. In this case, the cartridge is then filled from the top. Whether from the bottom or top, stopper insertion has the same risks and required controls as those compared and contrasted in Table 7.3.2-1.

        

### 7.3.3 Common Defects in Elastomer Placement Operations

        

There are a number of defects that routinely occur with elastomer placement, among them:

        

            
- Incomplete seating (vials) or inconsistent seating position (syringe/cartridge)

            
- Disruption or smearing of silicone or fluoropolymer coating on elastomer

            
- Wrinkling/distortion of ribs on syringe/cartridge elastomers during placement

            
- Liquid in ribs of elastomer for syringes/cartridges, or product under the stopper flange on vials and bottles

            
- Damage to plunger (e.g., bending, distortion of ribs)

            
- Insufficient control of headspace (air or inert gas)

        

        

Many of these defects can be reduced through proper selection and design of the elastomer placement system. However, careful adherence to consistent, validated setup parameters of the insertion system is necessary to maintain quality control. Quality control is also important during the incoming inspection of elastomers to ensure that dimensional tolerances and quality of coatings is maintained.

        

As a final note, elastomers are subject to an array of testing for extractables and leachables (during initial qualification), as well as chemical and particulate contaminants (with each batch). Container-closure integrity is commonly tested on every batch, with careful adherence to the validated parameters for closing the containers (both with elastomer and mechanical seal) (see Section 7.7). Visual inspection of sterile products includes inspection of the elastomer for abnormal appearance or improper insertion. As a consequence, elastomer placement is an important part of the ongoing quality of the container-closure system and for the overall integrity of the sterile product.

    

    

        

## 導師解析 Tutorial Commentary

        

            

#### 核心概念解析 Key Concepts

            

**插入方式的核心取捨：**四種方式在兩個維度上形成對角線矛盾：

            

                
- **通氣插入 (Vented)：**放置一致性高，但壓縮力大，易造成皺折

                
- **真空插入 (Vacuum)：**皺折風險低，但放置一致性差（尤其深位置）

                
- **混合式（短管）：**折衷，但深位置時仍有變異

                
- **混合式（長管）：**放置最精準，但壓縮風險與通氣式相當

            

            

選擇哪種方式，取決於特定容器的幾何尺寸與彈性體規格——沒有放諸四海皆準的最佳解。

        

        

            

#### 比喻說明 Analogy

            

彈性體放置缺陷就像替瓶子裝軟木塞：  

            — 塞得太淺（incomplete seating）：開瓶機稍一用力就漏氣  

            — 塞歪了（wrinkling/distortion）：外觀不雅，甚至密封不全  

            — 軟木塞沾到酒液（liquid in ribs）：影響藥品純度  

            差別在於葡萄酒漏氣只是浪費，藥品密封失敗卻可能危及病人生命。

        

        

            

#### 重點提示 Key Notes

            

**三層防線確保密封品質：**

            

                
1. **來料檢驗 (Incoming Inspection)：**確認彈性體尺寸公差與塗層品質

                
2. **製程中管控 (IPC)：**驗證後的設定參數嚴格執行，不得隨意調整

                
3. **成品檢驗 (Visual Inspection)：**目視篩除外觀異常或插入不當

            

            

每批均需執行 CCI 測試 — 這是決策層級中「無菌保證 (Sterility Assurance)」的直接體現。

        

        

            

#### 練習思考 Practice Questions

            

                
1. 若您的預充式注射器 (PFS) 在 CCI 批次測試中出現異常，您會從哪幾個方向追查根本原因？

                
2. 「liquid in ribs of elastomer」這個缺陷對產品的哪項 CQA 有直接影響？

            

        

    

    7.4 Mechanical Seal Application and System Design

    

        

## 原文內容 Original Text

        

Mechanical seals are inherent components in many container-closure systems. As with the primary packaging, the choice of mechanical seal will influence the design of the aseptic filling system. The use of more than one mechanical closure type on a line may require flexibility in the closing system design and use but, as with primary containers and closures, the objective is to ensure an integral seal on the container to protect its contents throughout its shelf life.

        

### 7.4.1 Mechanical Seal Application

        

There are specialty closures, such as press-fit caps or cartridge disc seals, that integrate both the elastomer and the mechanical seal in a single closure and, often, a single closing step. However, there are other processes where the mechanical seal is separate from the elastomer and is applied in a dedicated process step.

        

Mechanical seals for vials and bottles, often called overseals or crimp seals consist of a crimpable "skirt" with either a button, or dust cover (flip seal) over the top of the stopper. These mechanical seals are commonly produced of aluminum or aluminum with a polymer component.

        

Mechanical seals are specified to be slightly wider and longer than the combined dimensions of the flange or finial of the stopper plus the lip of the container. With these dimensions, they can be placed over top of the stopper, and the skirt of the seal can be folded under the lip of the container to secure them and supply sufficient downward pressure on the elastomer and glass to seal. A similar mechanical seal is commonly applied to cartridges.

        

Mechanical seals come in several common designs:

        

            
- **Flip-off** – Has a removable button (often polymer) that can be detached to expose the stopper underneath during administration while leaving the aluminum skirt in place, which continues to secure the stopper on the container; this is the most common crimp seal for vials that are intended for syringe administration

            
- **Flip-up/tear-off** – Has a button that, when flipped up, is used to help tear off the aluminum skirt so the stopper can be removed; not used for parenteral applications but may be used for ophthalmic solutions

            
- **Flip-off/tear-off** – Offers the combination of features of the first two mechanical seal types, allowing access to the stopper only to remove the aluminum skirt; this is not used for parenteral applications, but may be used for sterile fluids that are used in testing settings

            
- **Center-tear seal** – Usually all aluminum, these seals are most like the flip-off seal but, in this case, the center tab of aluminum is integrated with the aluminum skirt and can be lifted and removed for access to the center of the stopper flange while leaving the skirt in place; although intended for syringe administration, the risk of glove tears with the aluminum tab reduces the frequency that this design is used

            
- **Complete-tear crimp seal** – Like the center-tear seal, these are all aluminum, however, when the center tab is lifted, it can be used to remove the entire crimp seal from the container; like the flip-up/tear-off seal, this is not used for parenteral applications

        

        

Mechanical seals are expected to be applied under Grade A air supply (at minimum) that is contiguous with the filling line. Some systems include the mechanical seal application within the Grade A cleanroom or isolator adjacent to the filling station. Whether within the cleanroom, isolator, or supplied with Grade A air supply the intent is to ensure the protection of fully stoppered vials where the mechanical seal has not yet been crimped. The mechanical seals are not required to be sterile, although in some applications they may be rendered sterile. The process of forming the aluminum around the lip of the container may generate significant particulate (as does the rapid spinning of the sealing machine). Therefore, the sealing equipment for vials is often separated from the rest of the filling line by having a physical barrier (often with a mousehole) in between the stoppering and seal placement sections of a filling machine within a RABS or isolator.

        

            "Successful sealing station design will depend upon advanced knowledge of those elements described in Table 7.4.1-1."
        

    

    

        

## 導師解析 Tutorial Commentary

        

            

#### 核心概念解析 Key Concepts

            

**機械封蓋 (Mechanical Seal) 五種設計：**

            

                
- **Flip-off（翻開式）：**最常見，注射用小瓶主流。移除膠蓋露出stopper，鋁裙留下繼續固定

                
- **Flip-up/tear-off：**眼藥水適用，非注射用

                
- **Flip-off/tear-off（複合式）：**測試用無菌液，非注射用

                
- **Center-tear：**設計上可注射，但鋁片撕裂風險高（手套破損危險）

                
- **Complete-tear：**可移除整個鋁蓋，非注射用

            

            

關鍵判斷：凡是「注射用 (parenteral)」，幾乎只用 Flip-off。

        

        

            

#### 比喻說明 Analogy

            

鋁封蓋就像易開罐的拉環設計：不同場景需要不同開啟方式。  

            — 護士用針筒抽藥 → Flip-off（揭蓋不移鋁裙，防止污染）  

            — 眼藥水倒藥液 → tear-off（直接撕開瓶蓋）  

            設計錯誤不只是使用不便，更可能造成鋁屑汙染、needle-stick 傷害。

        

        

            

#### 重點提示 Key Notes

            

**壓蓋產生微粒 (Particulate Generation) 是高風險點：**

            

鋁封蓋壓蓋時高速旋轉，產生大量鋁屑微粒。這直接威脅充填區的 Grade A 潔淨度。解決方案：在壓蓋站與充填站之間設置 **mousehole**（小型物理隔板），讓瓶子通過但隔絕微粒擴散。這是「無菌保證 (Sterility Assurance) > 商業效率」決策的典型案例。

            

注意：機械封蓋本身不需要滅菌，但若放置在隔離器 (isolator) 內，則需要配合去污流程。

        

        

            

#### 練習思考 Practice Questions

            

                
1. 您的客戶要求同一條線可以生產兩種不同規格的 flip-off 封蓋。這對閉合系統設計有什麼額外要求？

                
2. 如果壓蓋站位於 RABS 內，mousehole 的設計需要考慮哪些因素？

            

        

    

    Table 7.4.1-1 Attributes Impacting Sealing System Design (doc p130)

    

        

## 原文內容 Original Text

        

            
                
                    
                        
                        
                    
| Attribute | Impact(s) to Closing Station Design |
| --- | --- |
                
                
                    
                        ****
                          
  
****  
  

                    
| Seal Dimensions and Overall Shape (and Features) | Will define sorting-system bowl and track dimensions and design.                             Will influence issues where one seal is inside another (i.e., twinning) which, in turn, may require different features of the sorting-system bowl or differing levels of vibration for manipulating them.                             Will influence detection-system capability, such as missing flip-seal detection, or missing elastomeric disc-seal/missing stopper detection. |
                    
                        ****
                          
  
  
  

                    
| Batch/Campaign Details | Size of the batch/campaign will influence the number of times that replenishment of the sorting system will be required, which will influence decisions such as whether a bulk hopper should be provided for feeding the sorting system.                             Filling speed will determine the required speed for the sealing system; commonly, sealing systems operate at a higher speed than the filling system does to prevent any interruption in the continuous operation of the filler.                             Filling speed will also influence the size of the sorting-system bowl to provide the best balance between continuous operation and replenishment. |
                    
                        ****
                        
                    
| Method of Introduction to the Filling Line | Location of the sealing system will dictate whether the seals require sterility (i.e., sealing system located inside of an isolator) and, in turn, the preparation of the components will dictate such elements as methods of introduction and replenishment quantities (see Sections 9.0 and 10.0). |
                
            

        

        

            "The sealing station is considered to contribute to the CCI, which is a CQA; therefore, the equipment must be qualified, calibrated, and maintained in accordance with strict standards. Routine testing during setup should be performed to ensure that completed seals deliver integral units that are shown to be defect-free (e.g., no missing caps, no wrinkles in crimped skirt, no loose seals). Visual inspection of finished pharmaceuticals will also inspect the mechanical seals to check for, and cull, any sealing defects."
        

    

    

        

## 導師解析 Tutorial Commentary

        

            

#### 核心概念解析 Key Concepts

            

**壓蓋站設計三大驅動因素：**

            

                
- **封蓋尺寸與外形：**決定振動碗 (sorting bowl) 規格；「twinning」（封蓋套在另一個裡面）是常見故障，需要特殊振動或感測設計排除

                
- **批次規模與產速：**壓蓋機速度通常高於充填機，確保不成為生產瓶頸；大批次需要大容量送料斗減少補料次數

                
- **導入方式：**位於隔離器內 → 封蓋需無菌；位於隔離器外 → 只需 Grade A 氣流保護

            

        

        

            

#### 公式與計算 Formula

            

```

壓蓋系統速度規劃：

壓蓋系統速度 > 充填速度
（通常高 10-20%，確保充填不等待壓蓋）

排序碗容量估算：
碗容量 = 目標連續運行時間（min）× 充填速度（vials/min）× 安全係數（1.2-1.5）

例：充填速度 300 vials/min，目標 30 分鐘免補料
→ 碗容量 ≥ 300 × 30 × 1.3 ≈ 11,700 個封蓋
            
```

        

        

            

#### 重點提示 Key Notes

            

**CCI 是 CQA，壓蓋站是設備而非選項：**文中明確指出「sealing station is considered to contribute to CCI, which is a CQA」。這意味著：

            

                
- 壓蓋設備必須 IQ/OQ/PQ 驗證

                
- 設定後需例行確認（no missing caps, no wrinkles, no loose seals）

                
- 成品視覺檢查 100% 篩選封蓋缺陷

            

            

任何封蓋缺陷都是批次風險，不是可忽略的外觀問題。

        

    

    7.4.2 Mechanical Seals Applied to Nested Containers

    

        

## 原文內容 Original Text

        

Nested containers may be de-nested for the application of mechanical seals. This is the traditional approach for closing nested containers.

        

Special systems are available where the mechanical sealing is conducted while the containers are within the nest. These systems can be used with press-fit caps or integrated stopper-seal combinations, which are also in a type of nest or plate that matches the configuration of the vial or syringe nest below. For these systems, the nest must remain separate from the tub to permit sufficient space between the tops of the containers, and a special sealing head descends to close all of the containers at once. The risk with this type of closure of a full nest of containers at one time is ensuring that each individual container has had sufficient force to fulfill the closing specifications, thereby assuring CCI.

        

Innovations continue to be made with both containers and closures, therefore, additional features and capabilities may also become available (see Section 6.0).

    

    

        

## 導師解析 Tutorial Commentary

        

            

#### 核心概念解析 Key Concepts

            

**巢式容器密封兩種方式：**

            

                
- **傳統方式（De-nested）：**先從巢中取出，再進行壓蓋。流程清晰，設備成熟

                
- **整批同步壓蓋（In-nest）：**特殊壓蓋頭一次封閉整盤（例如 6x4 = 24 支），效率高，但必須確保每支都受到足夠壓力

            

            

**In-nest 壓蓋的挑戰：**如果某支容器高度公差偏低，壓蓋頭施力分佈不均，可能造成部分容器密封不足（CCI 失敗）。這是製程驗證必須評估的最壞情況。

        

        

            

#### 比喻說明 Analogy

            

整批同步壓蓋就像工廠用壓床一次沖壓一排零件：效率倍增，但若其中一個零件厚度不足，壓力就會傳到旁邊的零件，導致部分過壓、部分欠壓。因此「均勻施力」是工程驗證的核心挑戰。

        

        

            

#### 重點提示 Key Notes

            

In-nest 壓蓋方式的 CCI 驗證必須考慮巢中所有位置（角落 vs 中央）的壓力均勻性。驗證樣品需涵蓋最壞位置（通常是角落或邊緣）的容器，以確保整批均達到密封規格。

        

    

    7.5 Cartridge Disc Seal Application and System Design Considerations

    

        

## 原文內容 Original Text

        

Cartridge disc seals (also called lined seals) consist of a flat elastomeric disc that is integrated with an aluminum seal (see item E of Figure 7.2-1). These combination closures are applied in a single step.

        

As the elastomer is applied at the same time as the seal, these combination closures need to be fully sterilized before application, and the location of the sealing equipment will also need to be within the aseptic boundary; it should be close to the point of fill in order to reduce the duration of exposure of the open container to the environment.

        

Different crimping processes are used, depending on the system procured; however, all systems have a high risk of particulate near the critical filling station due to the particle-generation at the crimping station. As a result, some specific precautions should be considered:

        

            
- Airflow should be designed to ensure that no air from the crimping station will move toward the filling station.

            
- Crimping technology should be designed to minimize the generation of particles (e.g., minimizing the shear of blades over the metal seal, using seals that minimize particle-generation during crimping).

        

    

    

        

## 導師解析 Tutorial Commentary

        

            

#### 核心概念解析 Key Concepts

            

**卡匣碟封 (Cartridge Disc Seal / Lined Seal) 的特殊性：**

            

與標準密封不同，卡匣碟封將彈性體碟片與鋁封蓋整合為一體，一次壓蓋即完成密封。這帶來兩個關鍵含義：

            

                
- **必須預先滅菌：**彈性體是無菌邊界的一部分，封蓋整組必須在使用前完成滅菌（不像標準鋁蓋只需 Grade A 環境保護）

                
- **設備必須在無菌邊界內：**壓蓋機本身需置於隔離器或充填站無菌區域內，離充填點越近越好

            

        

        

            

#### 比喻說明 Analogy

            

標準壓蓋流程像是先放好軟木塞、再套上鐵絲籠固定（兩個步驟）；卡匣碟封則像是「一體成型的快開蓋」——彈性墊圈已壓在金屬蓋內，一個動作完成密封。方便固然方便，但這個蓋子本身就是密封的一部分，所以必須無菌。

        

        

            

#### 重點提示 Key Notes

            

**微粒控制是卡匣碟封的核心挑戰：**壓蓋過程產生微粒（鋁屑），且壓蓋機必須位於充填站附近（甚至無菌區內）。解決方案：

            

                
- **氣流設計：**確保壓蓋站氣流方向「遠離充填站」（單向流由充填站向壓蓋站方向流）

                
- **低微粒壓蓋技術：**選用刀片剪切最小化的壓蓋機；選用壓蓋時產塵少的封蓋材料

            

            

這是「無菌保證 > 商業便利性」決策層級在硬體設計中的直接體現。

        

        

            

#### 練習思考 Practice Questions

            

                
1. 若客戶要求在現有 RABS 充填線加裝卡匣碟封壓蓋機，您需要評估哪些關鍵的環境控制修改？

                
2. 卡匣碟封的滅菌方式通常有哪幾種選擇？各有什麼限制？

            

        

    

    7.6 Container and Closure Defects

    

        

## 原文內容 Original Text

        

PDA's Technical Report No. 76: Identification and Classification of Visible Nonconformities in Elastomeric Components and Aluminum Seals for Parenteral Packaging and Technical Report No. 43 (Revised 2023): Identification and Classification of Nonconformities in Molded and Tubular Glass Containers for Pharmaceutical Manufacturing: Covering Ampoules, Bottles, Cartridges, Syringes and Vials provide more detailed information on the most common quality defects for container-closures and for glass.

        

Defects or damage that occur on the line to either component can result in failed package integrity as discussed in Section 7.7.

    

    

        

## 導師解析 Tutorial Commentary

        

            

#### 核心概念解析 Key Concepts

            

**PDA 缺陷分類技術報告：**

            

                
- **TR76：**彈性體組件與鋁封蓋的可見不合格品分類

                
- **TR43（2023年修訂）：**玻璃容器（安瓿、瓶、卡匣、注射器、小瓶）不合格品分類

            

            

這兩份技術報告是視覺檢查標準的重要外部參考依據。在 SOP 建立和稽核準備時，應確認廠內標準與 PDA 指引的一致性。

        

        

            

#### 重點提示 Key Notes

            

「線上發生的缺陷或損傷 → 可能導致包裝完整性失敗」—— 這個因果關係說明了為什麼製程中每個步驟（去除巢、傳送、壓塞、壓蓋）都需要製程管控。  

            任何容器或密封件的缺陷，都可能直接與 Section 7.7 的 CCI 失敗相連。不能將缺陷管理視為「外觀問題」而輕忽。

        

    

    7.7 Requirements for Effective Container-Closure Integrity and Validation

    

        

## 原文內容 Original Text

        

The goal of CCI validation is to ensure that integrity can first be established in packaging development studies and, subsequently, can be tested and confirmed with the actual manufacturing equipment and intended process parameters to fully demonstrate process control, thereby providing integrity assurance.

        

When performing CCI assessments, the selection of manufacturing conditions should include worst-case factors impacting CCI characteristics. Additionally, variability in the manufacture of each of the primary components must be considered and represented in such assessments.

        

The following are common considerations that may impact component characteristics, and resultant closure integrity, that should be evaluated during development studies for each supplier (as applicable to the selected container-closure system):

        

            
- **Component fit for integrity** — Stacked dimensional tolerances

            
- **Inherent-component CCI** — Ensures a container system can provide the appropriate level of tightness for the intended application, for instance, maintaining a modified headspace or vacuum throughout the shelf life

            
- **Performance with intended capping force or residual seal force**

            
- **Raised stopper threshold**

            
- **Multi-puncture closures** and limited microbial ingress and product leakage between doses

            
- **Plunger-insertion depth** and critical bubble-size to support maintenance of sterility during shipment and transportation

            
- **Utilization with semiautomatic dosing pens** that require minimal priming

            
- **Headspace maintenance** for lyophilized and inert-gas overlay product

            
- **Cold-storage performance** and maintenance of integrity under cold-storage conditions below the material properties (i.e., glass transition temperature) for elastomers

            
- **Freeze-thaw/thermal-cycling performance**, for example:
                

                    
    - Freeze-thaw impact on fragile containers (e.g., bags)

                    
    - Impact to integrity of mechanical closures (e.g., threaded caps, snap caps) upon thermal-cycling

                

            

            
- **Carbon dioxide (CO2) ingress**, if transported or stored with dry ice

            
- **Maintenance of closure over time and transport**, including relaxation over time under the proposed storage conditions, and impact of transport (e.g., shock and vibration, pressure change in headspace due to altitude/temperature)

        

    

    

        

## 導師解析 Tutorial Commentary

        

            

#### 核心概念解析 Key Concepts

            

**CCI 驗證 (Container-Closure Integrity Validation) 的兩個階段：**

            

                
1. **開發研究 (Development Studies)：**在包裝開發階段建立完整性基礎，探索各種 worst-case 因素

                
2. **製程確認 (Process Confirmation)：**使用實際量產設備與製程參數，確認線上生產能持續達到完整性要求

            

            

這兩個階段缺一不可。開發階段建立知識，製程階段轉化為管控。

        

        

            

#### 比喻說明 Analogy

            

CCI 驗證就像建造橋梁的安全測試：  

            — **開發研究** = 在試驗室用各種最壞情況荷載測試模型橋（模擬地震、颱風、超重車輛）  

            — **製程確認** = 正式建橋後，在實橋上執行載重測試，確認施工過程沒有引入新的缺陷  

            兩者一起才能確保這座橋（藥品包裝）在整個使用生命周期都不會崩潰（失去密封）。

        

        

            

#### 重點提示 Key Notes

            

**12項開發研究考量因素——覆蓋範圍廣泛：**

            

特別注意以下幾個容易被忽略的項目：

            

                
- **Stacked dimensional tolerances（堆疊尺寸公差）：**容器與密封件分別都在公差範圍內，但「最壞組合」可能導致 CCI 不足

                
- **Cold-storage / glass transition temperature：**低溫下彈性體硬化，密封力下降；冷鏈產品必須驗證 -80°C 或更低溫度的密封性

                
- **CO₂ ingress（乾冰運輸）：**CO₂ 可穿透某些彈性體，影響冷凍乾燥製品的頭空間組成

                
- **Relaxation over time（彈性體鬆弛）：**長效期產品（5-10年）需評估彈性體在儲存壓力下的蠕變特性

            

        

        

            

#### 練習思考 Practice Questions

            

                
1. 您正在開發一個凍乾 (lyophilized) 蛋白質製品，儲存於 -20°C，目標效期 3 年。請列出 CCI 開發研究應優先評估的前五個考量因素，並說明理由。

                
2. 若供應商提供兩個「相同規格」的彈性體批次，CCI 驗證是否還需要分別測試？為什麼？

            

        

    

    7.7 (Cont.) General Considerations for CCI Evaluation (doc p132-p133)

    

        

## 原文內容 Original Text

        

Once development work has been completed, the following are general considerations for inclusion in CCI evaluations:

        

            
- **Multiple primary component-batch combinations** — To account for batch-to-batch component variability, validation samples should consider multiple (e.g., three) unique component-batch combinations from each supplier where each combination of components consists of a unique pairing (e.g., stopper batch "A" with vial batch "A," stopper batch "B" with vial batch "A," stopper batch "B" with vial batch "B").

            
- **Alternate component suppliers/sources** — If multiple suppliers/sources are used for a single component, where an "identical" version of that component exists, CCI testing using components from each supplier/source should be considered. This approach is commonly applicable to components using identical dimensional specifications and material types. In these cases, the vendor must first affirm that they have qualified their fabrication processes. The supplier's qualification of components is a complex and separate exercise because, depending on the technology chosen, the supplier must be shown to qualify different fabrication lines on which they might produce the same component, for example:
                

                    
    - Glass forming equipment

                    
    - Needle insertion equipment

                    
    - Open mills, mixers, molds, and presses for polymers

                    
    - Crimp seals aluminum forming and assembly with either polymers or flip-off tops

                

            

            
- **Preparation** — The impact of preparation processes that precede the filling operation (e.g., cleaning, sterilization) needs to be evaluated. These may be at the vendors, in the case of RTU components, at the filling site, or both, in the case of ready-to-sterilize (RTS) components.

            
- **Closing process** — The aseptic filling line intended for routine production of the final package configuration should be used to generate the validation test samples. Process parameters impacting closure integrity should be identified prior to initiating CCI activities, with the intended production parameters used to generate validation test samples. Where a parameter is variable or has a range, the range should be supported by validation testing. For example, for vials, the capper testing should consider performing CCI testing at high, medium, and low application-force settings when variable forces may be applied during production setup and operation.

            
- **Manufacturing conditions** — Test samples should represent the complete sequence of the final commercial process, including component cleaning and sterilization. In addition, terminally sterilized products would require test samples to be processed through the entire terminal-sterilization operation before testing.

            
- **Storage conditions and shelf life** — CCI validation should consider the intended storage conditions of filled product containers, which are typically supported by development activities. All manufacturing conditions, including storage intervals where filled containers are held for a predefined period prior to final sealing operations, should be incorporated into the CCI validation study.

            
- **Packaging and secondary assembly** — CCI and the impact of closure characteristics should be considered for additional processing steps following primary container-sealing and can include technical assessment or direct testing. Typically, the impact from the labeling and packaging of vials does not require additional CCI testing; however, the secondary assembly of plunger rod or safety devices and their incorporation into the final device delivery system can present risks requiring additional CCI evaluation.

            
- **Shipping and transport** — Evidence that a container-closure system maintains integrity throughout shipping and distribution is expected. This can be achieved by either testing a container-closure system that has undergone actual or simulated shipping, or by providing robust evidence within a validation assessment that builds on the knowledge from development and CCI-validation activities and focuses on failure modes specific to shipping and transport. If shipping-and-transport CCI-testing is executed, it is typically a separate study from the filling-line CCI validation.

            
- **Vial-stopper and syringes** — These do not typically benefit from additional CCI testing following shipping and transport if worst-case conditions have already been characterized in development and are demonstrated to be comparable or worse than the conditions experienced during shipment, for example:
                

                    
    - Worst-case pressures via tests (e.g., helium leak, dye ingress, vacuum decay)

                    
    - Plunger-movement characterization studies for syringes

                    
    - Maintenance of headspace on cold storage

                    
    - Resistance of CO2 ingress from dry-ice exposure

                

            

        

    

    

        

## 導師解析 Tutorial Commentary

        

            

#### 核心概念解析 Key Concepts

            

**CCI 驗證的九大評估面向：**

            

                
1. **多批次組合：**最少三個獨特批次配對，涵蓋批間變異

                
2. **多供應商：**「相同規格」不等於「相同 CCI」，各供應商必須分別測試

                
3. **前處理 (Preparation)：**RTU vs RTS 組件的清潔和滅菌方式影響 CCI

                
4. **密封製程：**高/中/低壓力設定均需 CCI 驗證，覆蓋操作範圍

                
5. **製造條件：**必須複製完整商業製程順序，包含終端滅菌

                
6. **儲存條件與效期：**包含充填後中間儲存的時間窗口

                
7. **二次組裝：**活塞桿、安全裝置組裝可能影響 CCI

                
8. **運輸：**模擬或實際運輸測試，通常為獨立研究

                
9. **小瓶/注射器：**若開發研究已涵蓋最壞條件，可不再重複運輸 CCI

            

        

        

            

#### 公式與計算 Formula

            

```

CCI 驗證批次組合規劃（以小瓶+塞為例）：

最少組合數 = 供應商數(塞) × 供應商數(瓶) × 3批次
例：2家塞供應商 × 1家瓶供應商 × 3批次
= 6組獨特配對

壓蓋力測試矩陣（關閉製程CPP）：
     低力 | 中力 | 高力
批次A  CCI  CCI   CCI
批次B  CCI  CCI   CCI
批次C  CCI  CCI   CCI
→ 9個測試條件點
            
```

        

        

            

#### 重點提示 Key Notes

            

**「供應商資質」與「CCI 驗證」是分開的兩件事：**

            

即使供應商已完成其製造設備的資質確認 (Supplier Qualification)，填充方仍需進行自身的 CCI 驗證。原因：供應商確認的是「製造出符合規格的組件」，填充方驗證的是「這些組件與自身充填設備和製程組合後，能否維持密封完整性」——這是完全不同的驗證目標。

            

監管機構（FDA、EMA）期望看到兩者分別的文件，不可合併。

        

        

            

#### 實務應用 Practical Application

            

**CDMO 情境：**您的客戶帶來一個新的凍乾抗體藥品（-80°C 儲存，3年效期，附注射安全裝置），計劃使用兩家小瓶供應商（各2個批次）和一家彈性體供應商（3個批次）。請初步規劃 CCI 驗證矩陣：

            

                
- 批次配對：2瓶供應商 × 3塞批次 = 6組

                
- 壓蓋力：高/中/低 × 6組 = 18個製程條件

                
- 額外評估：-80°C 冷藏 CCI、運輸模擬（獨立研究）、安全裝置組裝後 CCI

                
- 儲存時間點：初始、6個月、12個月、24個月、36個月（效期全覆蓋）

            

            

這個矩陣雖然龐大，但缺少任何一環都可能在 FDA/EMA 審查時被要求補充研究，延誤上市時程。

        

        

            

#### 練習思考 Practice Questions

            

                
1. 「最終商業製程的完整順序」具體包含哪些步驟？對凍乾製品而言，CCI 取樣時間點應在凍乾之前、之後，還是兩者都需要？

                
2. 若您的 PFS 在運輸模擬測試後出現部分 CCI 失敗，但充填線上驗證全部通過，下一步您會採取什麼行動？

                
3. 「小瓶/注射器若開發研究已涵蓋最壞條件，可省略運輸 CCI 測試」——您認為什麼情況下會使開發研究的 worst-case 不足以覆蓋實際運輸條件？

            

        

    

    

### 本節重點回顧 Section Summary (7.5+, doc p126-p133)

    

        
- **彈性體放置缺陷管控三層防線：**來料檢驗（尺寸公差與塗層）、製程中驗證參數執行、成品視覺與 CCI 批次測試，三者缺一不可

        
- **機械封蓋設計選擇：**注射用小瓶幾乎只用 Flip-off 設計；壓蓋站產生大量微粒，必須以 mousehole 物理隔離保護充填區，Grade A 氣流為最低要求

        
- **卡匣碟封的雙重要求：**彈性體與鋁封蓋一體化 → 封蓋整組必須預先滅菌 + 壓蓋設備必須位於無菌邊界內，且氣流設計必須確保微粒不逆流回充填站

        
- **巢式容器整批壓蓋風險：**需驗證每支容器（特別是邊角位置）均達到足夠的密封壓力，確保全批 CCI 均一性

        
- **CCI 驗證兩階段框架：**開發研究（探索 worst-case）→ 製程確認（實際設備與參數）；九大評估面向涵蓋多批次組合、多供應商、前處理、密封製程、儲存、運輸、二次組裝

        
- **決策層級貫穿全節：**無菌保證 (CCI = Sterility Assurance 的核心保障) 始終優先於商業彈性，任何密封系統設計簡化都不能以犧牲 CCI 為代價

    

⇧

## Topic 8: Operational 操作考量 (p134-p152)

# Section 8A: Operational Considerations Including Interventions (8.0–8.3)

    

第八章A部分：包含人工干預的操作考量（8.0–8.3）

    

PDA Manufacturing Technology Guide No. 1 | doc p134 - p140

    

### 本章學習目標

    

        
- 理解微生物風險管控在無菌充填操作中的核心地位，以及為何每一個干預動作都必須以降低污染風險為前提

        
- 掌握RABS與隔離器在產線設定（Line Setup）流程上的關鍵差異，包含Grade A環境建立的時序邏輯

        
- 了解直接產品接觸零件、間接產品接觸零件、非接觸零件的分類意義，及其對無菌保護策略的影響

        
- 掌握Section 8.2中無菌干預的一般性考量，包含SOP要求、人員資格確認與空氣流動可視化研究

        
- 理解濾膜更換（Filter Change）在不同系統設計下的不同處置方式，及其對批次完整性的影響

    

8.0 Microbiological Risks for System Operation — 系統操作的微生物風險

    

        

## 原文內容 Original Text

        

Contamination control is the primary objective in aseptic filling. In Section 1.0, it was highlighted that the goal of producing a sterile product must remain the target in all design decisions and trade-offs. Successful operation of an aseptic filling system cannot be achieved without considering and mitigating microbiological risks and operating with good aseptic technique.

        

As a consequence, during design when looking ahead to the operation of any filling line, consideration should be given to the types of interventions that will be required to accomplish the fill. Interventions should be minimized or eliminated by proper design and effective risk assessments of the entire filling system including personnel and material flows, and changeover complexity.

        

The aseptic system design should be adapted to ensure effective microbiological control during all phases of the operation for both inherent and corrective interventions that are required after the risk assessment and mitigation are successfully concluded.

    

    

        

## 導師解析 Tutorial Commentary

        

            

#### 核心概念解析 Key Concepts

            

**Inherent Interventions（固有干預）：**在正常操作中本來就預期會發生的干預，例如定期的填充針頭位置調整、容器卡頓清除等。這些在設計階段即可預見。

            

**Corrective Interventions（矯正性干預）：**因設備異常或操作偏差而臨時發生的干預，例如機器突發故障需要開門修復。這類干預風險更高，因為未被完全預見。

            

**Aseptic Technique（無菌操作技術）：**一套涵蓋人員行為、動作方式、環境交互的操作規範，用以確保在操作過程中不引入污染。這不只是技術問題，更是行為規範。

        

        

            

#### 比喻說明 Analogy

            

把無菌充填生產線想像成一場外科手術。手術中每一個動作——開刀前的消毒、遞交器械的方式、縫合前的確認——都是「干預」。手術室的設計本身（動線、氣流、燈光位置）就是為了讓這些干預發生時風險最低。Section 8.0 的核心訊息就是：**設計的目的是讓未來的操作干預次數最少、風險最低。**

        

        

            

#### 重點提示 Key Notes

            

本節明確宣告：「污染控制是無菌充填的首要目標」——這與決策層次結構完全一致：無菌保證 (Sterility Assurance) 永遠排第一。

            

干預的最佳策略不是「發生了再處理」，而是「透過設計讓它不發生」。監管機構（FDA、EU GMP Annex 1）都強調要在設計階段就識別和減少干預。

        

        

            

#### 練習思考 Practice Questions

            

                
1. 為什麼固有干預（Inherent Interventions）比矯正性干預（Corrective Interventions）在風險管理上更容易處理？

                
2. 如果一條產線的設計需要非常頻繁的干預才能完成充填，這代表設計上出了什麼問題？

            

        

    

8.1 Microbiological Considerations for Aseptic Manipulations Associated with Line Setup — 產線設定中的微生物考量

    

        

## 原文內容 Original Text

        

Line setup (LSU) is an important part of the filling process because of the extent of operator interaction and potential to introduce contamination. Line setup can only occur after line clearance from the prior campaign or batch is complete. Parts to be sterilized out-of-place will have been removed at the conclusion of the campaign or batch. Those parts are subject to cleaning, pre-assembly (if any), and off-line sterilization in appropriate wraps and bags and are then staged for setup. The next step is preparation of the stationary parts of the filling line for setup.

        

            Note: Since campaigns may also include setup during the campaign (between batches) this will be addressed in Section 8.1.2 as it has some additional considerations.
        

        

For isolators, preparation includes surface cleaning (and often manual disinfection) of the barrier and non-contact surfaces of the filling and closing machine prior to installation of the sterilized parts under unidirectional airflow within the barrier. This will be followed by closing the barrier and an automated 6-log sporicidal biodecontamination process (e.g., VPHP) that will be applied to establish Grade A conditions. Importantly, **Grade A is established after the sterilized parts are installed** and this approach is in variance to RABS.

        

For RABS, Grade A conditions need to be established via a combination of cleaning and sporicidal 6-log high-level disinfection **before** sterilized parts are installed. In RABS, following this preparation stage the filling line will be ready for starting the aseptic line setup ahead of aseptic filling operations.

        

The detailed steps for setup in both isolators and RABS are described below (see Section 8.1.1), however some definitions are required to ensure common understanding of the detailed steps. The parts to be installed during the setup stage can be divided into three groups:

        

            
- **Non-product contact parts** include format parts such as feed screws, star wheels, container transport mechanisms that make no direct contact with sterile products to be filled.

            
- **Indirect product contact parts** include parts such as vibratory feeders and feed bowls which touch the sterile primary packaging components and therefore represent a risk of indirectly transferring contamination to the sterile product.

            
- **Product contact parts** include parts such as fluid pathway, filling needles and other surfaces which are in direct contact with the sterile product and any direct contact gas overlay parts.

        

        

Some non-product contact parts may be removed, cleaned, returned to the line and disinfected in place with the rest of the stationary parts of the equipment and the barrier rather than being sterilized off-line.

        

Both direct and indirect product contact parts have the potential to compromise product sterility, quality, and patient safety so precautions should always be taken to protect any part in these two groups from particle and microbial contamination. Therefore, when preparing these parts off-line prior to setup, care must be taken in their washing and sterilization. The parts must be dried and wrapped or bagged after cleaning before sterilization. The wraps must remain intact until the time of their installation as it is a vital part of their protection as they are transferred from the preparations area to the filling line.

    

    

        

## 導師解析 Tutorial Commentary

        

            

#### 核心概念解析 Key Concepts

            

**Line Setup (LSU，產線設定)：**在每次批次或活動開始前，將已滅菌的零件安裝到充填機上的過程。這是污染引入風險最高的操作階段之一，因為有最多的人員互動。

            

**VPHP（汽化過氧化氫）：**用於隔離器生物去污的標準方法。達到6-log孢子殺滅效果是Grade A條件建立的關鍵指標。

            

**三類零件分類：**

            

                
- 非接觸零件 — 最低風險，可就地消毒

                
- 間接接觸零件 — 中等風險，觸碰滅菌包材

                
- 直接接觸零件 — 最高風險，直接接觸無菌產品

            

        

        

            

#### 比喻說明 Analogy

            

想像你要幫病人準備手術器械。手術刀（直接接觸）、用來遞手術刀的夾子（間接接觸）、手術台本身的金屬框架（非接觸），三類物品需要不同程度的滅菌保護。手術刀的無菌包裝必須「直到最後一秒才打開」——這正是原文所說的「wraps must remain intact until the time of their installation」的精神。

        

        

            

#### 重點提示 Key Notes — RABS vs. 隔離器的關鍵時序差異

            

這是一個常被考試或稽查問到的關鍵差異：

            

                
- **RABS：**先建立 Grade A（清潔+消毒），*然後*再安裝已滅菌零件

                
- **隔離器：**先安裝已滅菌零件，*然後*關門執行 VPHP，Grade A 是在零件安裝後才建立的

            

            

這個時序差異影響了哪些零件需要在哪個階段受到保護。在隔離器中，間接接觸零件可以在開門設定時就安裝，但要保留保護覆蓋物直到 VPHP 完成後才移除。

        

        

            

#### 實務應用 Practical Application

            

在CDMO的實際操作中，Line Setup 的時間直接影響產線效率與排程。如果一條線在每次批次之間需要進行複雜的設定，這不只是微生物風險問題，也是商業競爭力問題。設計上選擇更多預先滅菌組件（Single-Use Systems）可以縮短設定時間，但要注意VPHP相容性（Section 8.1.3會提到包材不透氣性問題）。

        

        

            

#### 練習思考 Practice Questions

            

                
1. 為什麼在隔離器的開門設定階段，員工需要穿著比Grade C背景要求更高的防護裝備？

                
2. 如果一個間接接觸零件的保護包裝在搬運過程中破損，應該如何處理？請從無菌保證的角度思考。

            

        

    

8.1.1 Detailed Steps of Line Setup in RABS and Isolators — RABS與隔離器產線設定詳細步驟

    

        

## 原文內容 Original Text

        

Depending on the barrier technology for aseptic processing, RABS or Isolators, the parts will be subject to different steps. All steps for line setup should be risk assessed in order to identify the risk mitigations and control measures that will best ensure the sterility of the critical components and should be included within the CCS. All setup activities (both open and closed door) should follow the general requirements for the performance of aseptic interventions (see Section 8.2).

        

**The aseptic line setup in a RABS includes the following sequence of steps:**

        

Open-door line setup (Grade B background):

        

            
- Cleaning and disinfection of non-product contact parts, stationary filling machine parts, and barrier, to establish Grade A conditions

            
- EM initiated for Grade A conditions

            
- Installation of sterilized indirect product contact parts on the disinfected machine base

            
- Installation of the sterilized direct product contact parts

        

        

To the extent possible, consideration should be given to protecting the direct product contact parts by transferring and installing them using closed transfer technologies (e.g., RTP) and closed-door interventions rather than open-door. At a minimum, protective sheaths may be used for critical parts such as needles, which can be left in place until the barrier door is closed.

        

**The aseptic line setup in an isolator includes the following sequence of steps:**

        

Open-door line setup (Grade C background) with isolator HVAC active:

        

            
- Cleaning and disinfection of non-product contact parts, stationary filling machine parts, and barrier prior to establishing Grade A conditions

            
- Installation of sterilized indirect product contact parts on the disinfected machine base leaving protective wraps in place over critical surfaces for as long as possible (even considering removal only after the door is closed)

            
- Closure of the barrier door

        

        

Closed-door line setup:

        

            
- Biodecontamination of the filling line (e.g., VPHP) to establish Grade A conditions

            
- EM initiated for Grade A conditions

            
- Installation of the sterilized direct product contact parts

        

        

Although the background classification for isolators is commonly Grade C, enhanced gowning is typically employed for those employees conducting the open-door setup. Including but not limited to goggles or face shield, hoods, sterile sleeves and sterile gloves.

        

To the extent possible, consideration should be given to protecting the indirect product contact parts by preventing their exposure to the background environment during open-door setup by making use of closed transfer systems or by retaining protective covers as long as possible. For this reason, the removal of final covers for these parts may occur immediately before door closure, immediately after door closure, or even after biodecontamination.

        

The approach to the removal of these covers will also affect how the biodecontamination cycle is validated (e.g., timing of cover removal if applicable, permissible bioburden on parts before VPHP exposure of indirect product contact parts to VPHP, aeration time for residuals with or without cover) and should be included as a standard procedure to be followed within APS (13).

        

Regulators have emphasized the importance of understanding the environmental conditions within the isolator and the cleanroom during open door activities. As a consequence, EM may be initiated during the open-door phases of setup. In addition, air flow visualization studies are commonly performed during the initial qualification of the isolator to ensure that there is no entrained air from the surrounding environment entering the isolator during the activities of setup.

        

Fully closed (during operation) isolators are permitted to be installed within Grade D backgrounds rather than Grade C. The risks associated with indirect product contact parts and the coordination of the removal of their covers becomes even more critical when considering the associated risks with a Grade D background environment.

    

    

        

## 導師解析 Tutorial Commentary

        

            

#### 核心概念解析 Key Concepts

            

**RTP（Rapid Transfer Port，快速傳遞口）：**一種允許在不破壞屏障完整性的情況下，將物料傳入隔離器或RABS的密封傳輸裝置。使用RTP可以在不開門的情況下引入滅菌零件，是降低干預風險的重要設計手段。

            

**EM（Environmental Monitoring，環境監測）：**Grade A條件建立後即開始的微生物與粒子監測。監測結果是驗證環境控制有效性的直接證據。

            

**Airflow Visualization Study（空氣流動可視化研究）：**使用煙霧或示蹤粒子來視覺化氣流模式，確認開門操作時沒有低級別環境的空氣流入高級別區域。

        

        

            

#### 設定步驟對比表 Setup Step Comparison

            

```

RABS 設定步驟（Grade B 背景）：
Step 1: 清潔 + 消毒（建立Grade A）
Step 2: EM 啟動
Step 3: 安裝間接接觸零件
Step 4: 安裝直接接觸零件
            ↓
Grade A 先建立，再安裝零件

隔離器設定步驟（Grade C 背景）：
Step 1: 清潔 + 消毒（基礎處理）
Step 2: 安裝間接接觸零件（保留保護罩）
Step 3: 關門
Step 4: VPHP 生物去污（建立Grade A）
Step 5: EM 啟動
Step 6: 安裝直接接觸零件
            ↓
零件先安裝，再透過VPHP建立Grade A
```

        

        

            

#### 重點提示 Key Notes

            

**保護罩移除時機影響驗證設計：**這是一個細節但非常重要的點。如果間接接觸零件的保護罩在VPHP之前移除，那麼VPHP就需要確保對這些裸露表面達到6-log效果；如果保護罩在VPHP之後才移除，那麼驗證需要確認VPHP能滲透到覆蓋物下方——或者設計成覆蓋物本身不阻礙VPHP到達關鍵表面。這個決定要在SOP中明確規定，並在APS中重現。

            

**Grade D背景的額外風險：**允許在Grade D背景安裝全封閉隔離器是一種靈活性，但這意味著開門設定期間周圍環境的污染風險更高，對間接接觸零件的保護要求更嚴格。

        

        

            

#### 比喻說明 Analogy

            

RABS就像在一個已消毒的無塵室中組裝精密儀器——房間先準備好，再放工具進去。隔離器則像在太空站外進行艙外活動：先把零件帶進氣閘艙（開門設定），關好艙門，再完成加壓消毒（VPHP），最後才能進入核心艙進行安裝（直接接觸零件安裝）。不同的系統，有不同的氣閘邏輯。

        

        

            

#### 實務應用 Practical Application

            

在CDMO的客戶審計中，稽查員常會問：「你們的Line Setup SOP是否涵蓋了每一個零件類別的保護措施？是否在APS中被重現？」因此，將三類零件的保護邏輯完整寫入SOP，並確保APS設計能涵蓋最壞情況（worst-case）的設定活動，是稽查準備的關鍵。

        

        

            

#### 練習思考 Practice Questions

            

                
1. 如果隔離器安裝在Grade D背景，在開門設定期間，哪些額外的控制措施可以降低間接接觸零件的污染風險？

                
2. 空氣流動可視化研究（AVS）在隔離器的Line Setup中扮演什麼角色？它需要在什麼時間點執行？

            

        

    

8.1.2 Additional Considerations for Line Setup within a Campaign — 活動內批次間產線設定的額外考量

    

        

## 原文內容 Original Text

        

Within a campaign, limited line setup may occur between batches (i.e., to change container type, to establish a new fluid pathway, etc.) (see Section 4.1 for additional details on campaign requirements).

        

Care must be taken to ensure that Grade A conditions are maintained and that the interventions are limited to the essential activities, in order to preserve the aseptic environment. Risk assessments should be performed for all intended activities, and they should be included within the CCS to ensure that the appropriate controls are implemented.

        

Some general principles for line setup between batches within a campaign include:

        

            
- All setup activities should follow the general requirements for the performance of aseptic interventions (see Section 8.2).

            
- All setup activities must be included in an appropriately designed APS.

            
- Where possible, any parts that are to be exchanged should be brought within the barrier using closed transfer mechanisms (e.g., RTP) or should be present within the barrier from the beginning of the campaign (e.g., second fluid pathway).

            
- When using RABS, setup should be performed using closed door interventions.

            
- When using RABS and open door interventions are unavoidable, consideration should be given to what disinfection or biodecontamination is appropriate prior to resumption of aseptic operations.

            
- When extensive setup is required, consideration should be given to terminating the campaign; recent advances in technology including rapid biodecontamination within isolators, for example, make it possible to turn around a line within a shorter period of time.

        

    

    

        

## 導師解析 Tutorial Commentary

        

            

#### 核心概念解析 Key Concepts

            

**Campaign（活動/連續生產活動）：**在相同的無菌環境條件下，連續生產多個批次的操作模式。批次間的設定變更（如換容器規格或換液路）是活動中最高風險的時刻之一。

            

**Second Fluid Pathway（第二液路）：**預先在活動開始時就將備用液路放置在屏障內，使批次間換液路時不需要開門引入新零件。這是一種「預先準備、減少干預」的設計思路。

            

**Rapid Biodecontamination（快速生物去污）：**現代隔離器技術的進步使VPHP週期可以縮短，讓「終止活動、完整重新設定」的時間成本降低，使這個選項更具可行性。

        

        

            

#### 重點提示 Key Notes

            

**「終止活動」有時比「繼續設定」更安全：**當批次間需要大量設定工作時，繼續在現有活動框架內進行設定可能帶來更高的微生物污染風險。此時終止活動、重新進行完整的產線設定，雖然時間成本較高，但能提供更確定的無菌保證。這是一個典型的「無菌保證 > 商業效率」的決策場景。

            

任何批次間的設定活動都必須納入APS的設計中，包含最壞情況的模擬。如果設定活動未被APS涵蓋，監管機構會認為該活動的無菌保證未被充分驗證。

        

        

            

#### 比喻說明 Analogy

            

想像F1賽車的進站換胎：如果只是換四條輪胎，進站15秒搞定；但如果還要換懸吊系統，可能就需要考慮是否直接退出比賽重新準備。批次間的產線設定也是同理：小幅調整可以在活動中進行，但若涉及大幅改動，「重新來過」有時反而是更安全、更有效率的選擇。

        

        

            

#### 練習思考 Practice Questions

            

                
1. 在一個RABS系統中，批次間需要更換容器規格（從1mL玻璃瓶換成5mL玻璃瓶）。應優先考慮哪些方式來完成這個設定，同時維持Grade A條件？

                
2. 什麼條件下，你會建議終止活動（terminate the campaign）而不是繼續進行批次間設定？請列出至少三個判斷標準。

            

        

    

8.1.3 Other Considerations for Line Setup — 產線設定的其他考量

    

        

## 原文內容 Original Text

        

When making use of Single Use Systems (SUS), and they are part of the load for the biodecontamination cycle, care should be taken to ensure that the packaging is impermeable to the biodecontamination agent (e.g., VPHP) to prevent absorption that might be harmful to products (14).

        

See PDA PtC No.12: Restricted Access Barrier Systems for additional information with regard to the design and operation of RABS (4). In particular, a UDAF should be present above doors to protect the environment during any open-door activity such as line setup.

        

CFD for airflow design within the barrier (both RABS and isolators) and surrounding environment, and airflow visualization for the intervention activities, are essential to demonstrate that airflow turbulence is minimized.

    

    

        

## 導師解析 Tutorial Commentary

        

            

#### 核心概念解析 Key Concepts

            

**SUS（Single Use Systems，一次性使用系統）與VPHP相容性：**一次性組件的包材（通常為PE/PP類塑料袋）在VPHP環境中可能吸收過氧化氫蒸氣。若吸收量過高，釋放到產品中可能造成藥物降解或安全疑慮。因此，確認SUS包材的VPHP不透性是驗證的必要部分。

            

**UDAF（Unidirectional Airflow，單向氣流）：**門上方的UDAF設計確保在開門操作時，氣流方向是從高潔淨區向外吹，而非從外部流入，從而保護無菌環境不被破壞。

            

**CFD（Computational Fluid Dynamics，計算流體動力學）：**透過電腦模擬預測氣流行為，用於在設計階段驗證屏障內外的氣流模式是否符合無菌保護要求。

        

        

            

#### 重點提示 Key Notes

            

SUS的VPHP相容性是一個容易被忽略的細節，但在實際稽查中曾被標記為缺失（Finding）。如果你的設施使用隔離器且採用SUS組件，必須確認：（1）SUS的包材對VPHP不透，或（2）SUS在VPHP循環之前已從隔離器中移出，或（3）有充分的吸附量數據證明殘留量在安全範圍內。

        

        

            

#### 練習思考 Practice Questions

            

                
1. 如果你的隔離器使用的SUS包材對VPHP有輕微滲透性，你有哪些技術選項可以管理這個風險？

                
2. CFD模擬的結果為何需要通過實體的空氣流動可視化研究（AVS）來確認，而不能單獨依賴電腦模擬？

            

        

    

8.2 General Considerations Regarding Aseptic Interventions — 無菌干預的一般性考量

    

        

## 原文內容 Original Text

        

            
- Quality risk management tools should be employed to define the risk level for each planned intervention, including the intervention detection, mitigations, and controls (e.g., EM, personnel monitoring, sterility samples). Key elements to assess include:
                

                    
    - Personnel (number and positioning of)

                    
    - Duration of the intervention

                    
    - Complexity of the required actions during the intervention

                    
    - Proximity and handling or manipulation of sterile parts

                    
    - Risks due to potential occluded surfaces

                

            

            
- All aseptic interventions should be defined in a SOP that defines:
                

                    
    - Whether the intervention is via glove port, remote manipulator, open door, or other mechanism (open doors are to be avoided whenever possible)

                    
    - Glove checks (for tears, pinholes) and glove sanitization that may be required pre- and post-intervention

                    
    - Procedures to be followed for performance of the intervention to ensure that air flow disruptions are minimized, including if witnessing of the intervention performance is required

                    
    - Tools to be used to protect product-contact components, both direct and indirect, and the required disinfection (pre- and post-intervention) or disposal of those tools

                    
    - Any required line-clearance activities based on identified risks due to the intervention procedure and zone of exposure

                    
    - Disinfection or cleaning and sterilization required post-intervention

                    
    - Documentation requirements for the intervention

                    
    - Any requirement to segregate materials or an appropriate decision-making framework for that decision, for example, quarantine status for a portion of the batch or renumbering of a portion of the batch until review and approvals are gained

                

            

            
- At the conclusion of the fill, EM samples are collected for direct and indirect product-contact parts which should represent any interventions performed; tools used during interventions should also be considered as sampling sites. All sampling should follow a risk-based approach.

            
- SOPs should be demonstrated in an airflow visualization study (AVS) to prove that turbulence is avoided, and that air does not move from an area of lower classification to higher classification when following the correct procedures during such activities as open-door setup in an isolator

            
- Each intervention should be qualified for use and included in an appropriately designed aseptic process simulation (APS)

            
- Personnel should be trained in the intervention SOP and qualified to perform the intervention

        

        

Additional detail on setup, specifically, and interventions, more generally, may be found in industry guidance on aseptic practices (3, 15).

    

    

        

## 導師解析 Tutorial Commentary

        

            

#### 核心概念解析 Key Concepts

            

**Intervention SOP 的八大要素：**本節列出了一份完整無菌干預SOP必須涵蓋的內容。這不只是合規要求，更是操作人員在每次干預前的行動指南：

            

                
- 干預方式（手套口、遠端操縱器、開門）

                
- 手套檢查與消毒程序

                
- 干預過程的操作步驟（含目擊者要求）

                
- 工具保護與後處理

                
- 產線清場活動

                
- 干預後消毒/滅菌要求

                
- 文件記錄要求

                
- 物料隔離與批次決策框架

            

            

**Quarantine Status（隔離狀態）：**如果干預後存在無法立即排除的污染風險，相關批次部分可能需要進入隔離狀態，待品質審查和批准後才能繼續處置。

        

        

            

#### 比喻說明 Analogy

            

想像醫院急診室的外科手術突發狀況處理：如果手術中需要臨時增加一個步驟（相當於干預），外科醫師不能隨意決定怎麼做，而必須遵循既定的操作程序（SOP）。手術後要記錄發生了什麼（文件）、評估影響（EM 結果）、必要時隔離病人觀察（quarantine）。無菌干預的管理邏輯與此完全一致。

        

        

            

#### 重點提示 Key Notes

            

**干預的五大風險評估維度：**QRM工具在評估每個干預風險時，必須考量：人員（數量與位置）、持續時間、動作複雜性、與無菌零件的距離/接觸程度、被遮蔽表面（occluded surfaces）的風險。

            

**被遮蔽表面（Occluded Surfaces）**是一個特別值得注意的概念：干預工具或操作者的手臂可能會遮擋EM的視線，導致沉降碟或浮游菌採樣無法代表真實污染狀況。這也是為什麼AVS研究需要針對每個具體的干預動作設計。

            

**APS中必須涵蓋每一個干預：**如果一個干預活動沒有被APS設計所涵蓋，它在監管角度就等同於「未經驗證的活動」，無論它在實際生產中執行了多少次。

        

        

            

#### 干預風險評分框架 Intervention Risk Scoring

            

```

干預風險層級判斷（概念模型）：

高風險干預（需最嚴格控制）：
  - 開門干預 (Open Door)
  - 長時間操作 (>2分鐘)
  - 距離直接接觸零件很近
  - 多人參與、動作複雜
  - 存在大量遮蔽表面

中風險干預：
  - 手套口干預 (Glove Port)
  - 短時間操作
  - 操作間接接觸零件

低風險干預：
  - 遠端操縱器 (Remote Manipulator)
  - 操作非接觸零件
  - 全程在屏障外完成

→ 風險層級決定：
   EM加強要求 / 批次隔離決策 / APS 設計複雜度
```

        

        

            

#### 實務應用 Practical Application

            

在CDMO環境中，客戶產品可能有不同的干預需求。例如高黏度產品更容易造成填充針堵塞，需要更頻繁的矯正性干預。作為CDMO，必須確保這些產品特有的干預活動在合同談判前就已被識別，並且有對應的SOP和APS設計，否則在商業生產後才發現缺乏驗證依據，將導致批次放行困難或監管問題。

        

        

            

#### 練習思考 Practice Questions

            

                
1. 一個填充員在執行開門干預（修復卡瓶）後，應該立即採取哪些動作？請根據Section 8.2的SOP要素列出清單。

                
2. 如果某次干預後，直接接觸零件附近的EM結果顯示陽性，你的批次決策框架應該考慮哪些因素？

                
3. 為什麼每個干預都需要「目擊」（witnessing）？這在品質體系中扮演什麼角色？

            

        

    

8.3 Microbiological Considerations for Filter Changes — 濾膜更換的微生物考量

    

        

## 原文內容 Original Text

        

The sterilizing filter represents a sterile boundary for the fluid pathway. Filter changes should be avoided, when possible, and handled with care when unavoidable. To avoid filter changes, firms will sometimes install more than one filtration manifold in a parallel arrangement, so that switching from one fluid path/filter to another can be accomplished without intervention. Alternatively, installing more than one filter in a series can permit the removal and replacement of the upstream filter with less risk to the downstream sterile barrier (see Section 11.0 for additional discussion on filter configurations).

        

When filter changes are unavoidable, the system design will influence the requirements for the filter-change activity. Two examples of system designs that represent the extremes of the design considerations include:

        

            
- Aseptic filling lines with the filter outside of the Grade A environment within a stainless-steel (SS) housing

            
- Aseptic filling lines that employ presterilized components (e.g., filters, tubing, gaskets, clamps, flush bags) that are aseptically assembled in a Grade A environment

        

        

For filling systems that are SIP, when the filter is in a SS housing outside of the Grade A environment, changing the filter-set requires that the sterile fluid path be opened and exposed to a lower-grade environment (e.g., Grade C for isolators and Grade B for RABS filling lines). Opening and exposing the fluid path to a lower-grade environment can lead to microbiological contamination of the product pathway.

        

Therefore, when configured in this manner, a filter change will necessitate that filling be stopped and the batch be split into two identified portions (e.g., before and after the filter replacement) with separate batch numbers. After removing the original filter, the fluid pathway must be cleaned in place. The new filter is then installed, sterilized in place, and subjected to pre-use integrity testing and flushing before filling can be resumed. To mitigate any risk of microbial contamination of the product, a CIP/SIP process is required (see Section 11.0 for filter placement within the fluid pathway and additional information on PUPSIT).

        

Configurations that offer improved SA to filters located outside the Grade A environment include gamma-irradiated filters that are connected via intrinsic sterile-connection devices or filters that are introduced through a canister port.

        

For filling lines employing presterilized components that are aseptically assembled in a Grade A environment, the product transfer is completed by an intrinsic sterile connector or an aseptic connection. In this case, the aseptic connection can be uncoupled and the transfer port closed. Within the Grade A environment, the entire filter-set can be replaced and reinstalled with a replacement presterilized filter-set passed in through a RTP or by using a spare stored in the environment. After reassembly, pre-use integrity

        

            [Text continues on doc p141 / Section 8B — pre-use integrity testing completion of the filter change procedure for presterilized assemblies]
        

    

    

        

## 導師解析 Tutorial Commentary

        

            

#### 核心概念解析 Key Concepts

            

**Sterilizing Filter（除菌過濾器）作為無菌邊界：**在無菌流體路徑中，除菌過濾器是最後一道把關，確保藥液進入充填系統時是無菌的。任何濾膜更換活動都會暫時「打開」這道邊界，因此風險極高。

            

**並聯過濾歧管（Parallel Filtration Manifold）：**預先安裝兩組平行的過濾系統，當一組需要更換時，直接切換到另一組，無需開放無菌流體路徑。這是避免濾膜更換風險的最佳設計策略。

            

**串聯過濾（Series Configuration）：**兩個濾膜前後串聯。更換上游濾膜時，下游濾膜仍然維持無菌邊界，相對安全。

            

**批次分割（Batch Split）：**當不得不進行濾膜更換時，更換前後的產品必須分成兩個識別批次，因為它們經歷了不同的過濾歷史，在品質審查上需要分開評估。

        

        

            

#### 濾膜更換情境對比 Filter Change Scenario Comparison

            

```

情境一：SS外殼，Grade A外，SIP系統

更換程序：
1. 停止充填
2. 批次分割（前後段分開批號）
3. 移除舊濾膜
4. CIP（就地清洗流體路徑）
5. 安裝新濾膜
6. SIP（就地滅菌）
7. PUPSIT（使用前完整性測試）
8. 沖洗
9. 恢復充填
風險：高（流體路徑暴露於較低級別環境）
---
情境二：預滅菌組件，Grade A內無菌組裝

更換程序：
1. 斷開無菌連接器（轉接口關閉）
2. 透過RTP引入備用預滅菌濾膜組
3. 在Grade A內重新組裝
4. PUPSIT
5. 恢復充填
風險：低（全程在Grade A環境內完成）
```

        

        

            

#### 重點提示 Key Notes

            

**PUPSIT（Pre-Use Post-Sterilization Integrity Test，使用前滅菌後完整性測試）：**每次濾膜更換後，在開始充填之前，必須對新安裝的濾膜進行完整性測試，確認其無泄漏、無缺陷。EU GMP Annex 1對PUPSIT有明確要求。這是無菌保證第一的體現——即使濾膜是全新的、已滅菌的，仍需在使用前驗證其完整性。

            

**Gamma輻照濾膜 + 固有無菌連接器：**這種組合是SS外殼設計的改良選項，透過固有無菌連接（不需要在潔淨室環境中進行人工連接）來降低污染風險，同時避免需要進行CIP/SIP。

        

        

            

#### 比喻說明 Analogy

            

除菌過濾器就像城市的自來水淨化站最後一道過濾網。如果你需要更換這個過濾網，最安全的做法是讓水先流向備用管路（並聯設計），而不是直接斷水、換網、再通水。如果非換不可，你需要：斷水→清管→換網→消毒→測試→才能通水。每一步都不能省略，否則可能讓未淨化的水直接進入用戶管道。批次分割就像記錄「這杯水是換網前裝的，那杯是換網後裝的」，以備查驗。

        

        

            

                無菌保證 (Sterility Assurance) — 第一優先
            

            

▼

            

                產品 CQAs — 批次分割保護產品品質評估完整性
            

            

▼

            

                商業彈性 — 並聯/預滅菌組件設計提升效率
            

        

        

            

#### 實務應用 Practical Application

            

在CDMO商業提案中，當客戶詢問「如果一批20,000瓶的生產中途需要換濾膜，會發生什麼？」你應該能清楚說明：（1）這會導致批次分割，（2）需要執行CIP/SIP，（3）需要PUPSIT，（4）整個換膜過程可能需要數小時，這段時間產品在等待，（5）兩個批次部分需要分開審查放行。這些都是客戶需要在計畫排程和成本估算中考慮的因素。預滅菌組件系統雖然初始成本較高，但可以大幅減少這些操作複雜性。

        

        

            

#### 練習思考 Practice Questions

            

                
1. 為什麼在SS外殼設計中，濾膜更換必然導致批次分割？能否在不分割批次的情況下更換濾膜？請解釋原因。

                
2. 比較並聯過濾歧管和串聯過濾的設計，各自在哪些場景下更適用？各有什麼限制？

                
3. 在預滅菌組件系統中，濾膜更換後的PUPSIT如何執行？這與SS外殼系統的PUPSIT有何不同？

            

        

    

    

### 本節重點回顧 Section Summary (8.0–8.3)

    

        
- **8.0：**污染控制是無菌充填的首要目標。干預應透過設計最小化，且必須區分固有干預與矯正性干預，在設計階段預先規劃。

        
- **8.1：**Line Setup 是污染風險最高的操作階段。RABS先建立Grade A再安裝零件；隔離器先安裝零件後關門再執行VPHP建立Grade A——這個時序差異是核心考點。

        
- **8.1（零件分類）：**直接/間接/非接觸零件三類分法，決定了保護策略的層級。直接接觸零件須保護最嚴，包裝完整性直到安裝前一刻都不能破壞。

        
- **8.1.2：**活動內的批次間設定是高風險活動，所有設定步驟必須納入APS；在廣泛設定需求下，終止活動重新設定有時是更安全的選擇。

        
- **8.1.3：**SUS與隔離器VPHP並用時，需確認包材的VPHP不透性；UDAF和CFD/AVS是屏障設計和干預驗證的必要工具。

        
- **8.2：**每一個干預都必須有SOP、經過QRM評估、納入APS、完成人員訓練與資格確認。干預後的EM採樣要代表干預本身的影響範圍。

        
- **8.3：**除菌過濾器是流體路徑的無菌邊界。優先設計避免換膜（並聯/串聯）；不得不換時，SS外殼系統需批次分割+CIP/SIP+PUPSIT；預滅菌組件系統在Grade A內無菌組裝，風險較低，但PUPSIT仍為必要步驟。

    

⇧

# Section 8B: Operational Considerations — Interventions & Recovery (8.4–8.9)

    

操作考量：無菌干預、機械故障與環境監測 (8.4–8.9)

    

PDA Manufacturing Technology Guide No. 1 | doc p141 – p147

    

### 本章學習目標

    

        
- 掌握充填針損壞時的三種處置選項，以及預組裝流體路徑如何降低更換風險

        
- 理解破損或堵塞初級包裝材料的無菌干預原則，包括 AVS 與 APS 的設計要求

        
- 區分元件自動傳遞與手動傳遞的微生物風險差異，以及各層次包裝去除的標準

        
- 了解分選系統的滅菌、生物去污與矽油殘留等管理要點

        
- 掌握機械干預四大分類及其相應的風險管理原則，理解何時必須停止批次

        
- 理解環境監測 (EM) 的事件驅動與時間驅動設計，以及樣品全生命週期管控的重要性

    

8.4 Microbiological Considerations for Aseptic Manipulations Associated with Filling Needle Adjustment, Repair, and Replacement

    

        

## 原文內容 Original Text

        

If a liquid filling needle is damaged, there are three options from which to choose:

        

            
- Turn off the needle

            
- Repair or adjust the needle

            
- Replace the needle

        

        

The first option does not require aseptic manipulation, as it can typically be accomplished through the
        control system and so does not pose any microbiological risk. Regarding repairing or replacing the
        needle, the general considerations for performing interventions identified in Section 8.2 would apply.
        The filling needle is one of the most critical locations for an intervention due to its position
        immediately above the open patient-dose.

        

When designing the intervention for replacing the needle, whether any portion of the
        sterile fluid pathway will also be changed at the same time should be considered. A
        preassembled sterile fluid pathway may be less risky to replace than one component of the
        pathway alone. In some cases, replacing a single component may risk leaks or drips from improper
        connections, or it may cause greater environmental exposure to the fluid path, whereas a preassembled
        pathway may reduce those risks.

        

In the case of powder filling that makes use of powder dosing-needles, turning off or repairing
        needles is typically not possible, and full replacement would be required. For liquid needles,
        repair/replacement is one of the highest risk interventions and should not be undertaken lightly.

    

    

        

## 導師解析 Tutorial Commentary

        

            

#### 核心概念解析 Key Concepts

            

**充填針損壞的三選項決策：**

            

                
- **關閉針頭 (Turn off)：**透過控制系統完成，無需進入 Grade A，零微生物風險。這是首選。

                
- **修復／調整 (Repair/Adjust)：**需要無菌干預，必須符合 Section 8.2 一般干預原則，風險中等。

                
- **更換針頭 (Replace)：**液體充填中最高風險干預之一——針頭正好位於開放患者劑量容器正上方，直接暴露無菌空間。

            

            

粉末充填的粉末劑量針 (powder dosing-needle) 無法關閉或修復，只能完全更換，管理難度更高。

        

        

            

#### 比喻說明 Analogy

            

想像外科醫生在開胸手術進行中途需要更換手術刀：直接換一把刀（更換單一元件）vs. 換整組無菌手術包（預組裝流體路徑）。後者雖然動作較大，但接頭都已預先確認，減少現場失誤的機率。充填針的預組裝流體路徑就是這個邏輯——預先組裝、預先驗證，臨場更換時風險更低。

        

        

            

#### 重點提示 Key Notes

            

**更換時的關鍵判斷：**設計更換干預程序時，必須同時考量是否連同部分無菌流體路徑一起更換。單獨更換一個元件可能導致：

            

                
- 接頭不當造成漏液或滴液

                
- 流體路徑更長時間暴露於環境

            

            

預組裝路徑雖然表面上「換的更多」，但整體無菌保證反而更高。決策原則：**無菌保證 > 操作便利性**。

        

        

            

#### 練習思考 Practice Questions

            

                
1. 一支充填針在生產中途彎曲但未斷裂，你的操作員建議直接就地調整。在允許此干預之前，你需要確認哪些前提條件？

                
2. 為何粉末充填針的管理比液體充填針更具挑戰性？從 APS 設計的角度說明。

            

        

    

8.5 Microbiological Considerations for Aseptic Manipulations Related to Broken or Blocked Primary-Packaging Materials

    

        

## 原文內容 Original Text

        

The general considerations for aseptic interventions outlined in Section 8.2 should be followed for
        the removal of blocked or broken primary-packaging materials. Such interventions are considered
        corrective interventions that should be included in the AVS and included within an appropriate
        APS study design. The AVS would be designed to demonstrate that the corrective intervention
        minimizes airflow disruption and does not have the potential to add contamination. The intervention
        should be considered for inclusion in the APS design at a frequency representative of the rate of
        occurrence in routine production.

        

The intervention should only be performed while using sterilized tools such as forceps. The tools
        should be placed at any location along the filling line where this intervention is likely to occur.

        

The intervention should be reduced to the actions necessary to keep the line running, resulting in
        shorter duration interventions that are generally of lower risk. For example, minimizing actions
        commonly means that only when debris from a broken container can possibly cause contamination or
        malfunction of the line should that debris be fully removed. Similarly, actions below the working
        height should be avoided. For example, should materials fall to the machine base plate, they would
        commonly remain there until the conclusion of the filling operation unless they posed a risk of
        malfunction.

        

An intervention risk assessment should describe each required intervention and its associated risks and
        define the required controls. The intervention and controls should be included in the
        CCS (Contamination Control Strategy).

    

    

        

## 導師解析 Tutorial Commentary

        

            

#### 核心概念解析 Key Concepts

            

**矯正性干預 (Corrective Intervention)：**指在生產過程中，為應對突發狀況（如容器破裂、堵塞）而執行的無菌操作。與預防性干預不同，矯正性干預的特性是：

            

                
- 必須預先納入 AVS（Airflow Visualization Study，氣流可視化研究），驗證干預不造成氣流紊亂

                
- 必須納入 APS（Aseptic Process Simulation，無菌製程模擬），以代表性頻率演練

                
- 必須納入 CCS（污染控制策略），作為正式管控措施

            

        

        

            

#### 比喻說明 Analogy

            

想像消防員在受控建築火災演習中：演習設計要模擬真實火災的發生頻率與位置，不能只練「最簡單的狀況」。無菌充填的 APS 設計也是同樣道理——破損容器的模擬頻率，必須反映實際生產中的發生率，而非象徵性地演練一次。

        

        

            

#### 重點提示 Key Notes

            

**「最小化行動原則」是關鍵：**

            

                
- 干預時間越短，微生物污染風險越低

                
- 掉落到機台底部的碎片，除非造成機台故障風險，否則應留到批次結束再處理——這是刻意設計的風險判斷，不是疏失

                
- **工作高度以下的動作應避免**——低於工作面的操作更難維持無菌技術，且容易干擾層流氣流

            

            

核心邏輯：每一秒在 Grade A 的「額外動作」都是風險，能不做就不做。

        

        

            

#### 實務應用 Practical Application

            

在 CDMO 環境中，處理破損容器的 SOP 應包含：預先放置滅菌鑷子的位置清單、APS 演練頻率規劃（參考歷史破損率），以及 CCS 中的干預風險評估章節。監管機構查核時，常要求確認 APS 的干預場景是否充分代表實際生產。

        

    

8.6 Microbiological Considerations for Aseptic Manipulations Associated with Supply of Components

    

        

## 原文內容 Original Text

        

Automated transfer of components to the aseptic filling line is preferred to reduce microbiological
        risk. An automated system is repeatable, can be biodecontaminated, and can be validated. Depending
        on the primary-packaging materials used, different automated solutions may be required (e.g.,
        e-beam, depyrogenation tunnel, RTP transfer, no-touch transfer). All interventions in a Grade A
        environment linked to the automated transfer of materials should be designed and performed taking into
        account the general rules for aseptic manipulations (see Section 8.2). The supply of components
        should be included in a representative manner within both the AVS and APS. Transfer technologies are
        further discussed in Sections 9.0 and 10.0.

        

Manual transfer of components is only possible in cleanroom conditions where the transfer occurs
        from a Grade B environment to the Grade A environment. As the components transition through
        the cleanroom classifications, successive layers of sterilized wrapping are removed. Special attention
        is required to avoid contamination of the outer surfaces of the inner bag at each transition. The
        second-to-last bag should be removed, using aseptic techniques under unidirectional airflow, when
        transferring the materials from Grade B to Grade A. The layers of removed wrapping materials should
        be prevented from contacting surfaces within the Grade A space. The final bag should only be
        removed within the Grade A environment.

        

When using a mousehole, RTP, or other equipment doors for transfers, dynamic airflow pattern
        studies in the AVS should prove that the transfer of materials to the inside of the barrier does not
        result in turbulence inside the barrier or result in airborne contamination transfer. In the case of a
        mousehole or door (such as those that may be opened to restock elastomers), it is important to
        demonstrate that there is no ingress of air from Grade B into Grade A. In both cases, the addition of
        components from a bag to a hopper should be executed considering the general rules for aseptic
        manipulations (see Section 8.2). The transfer and addition of components should be demonstrated in a
        representative manner and frequency within an appropriately designed APS.

    

    

        

## 導師解析 Tutorial Commentary

        

            

#### 核心概念解析 Key Concepts

            

**元件傳遞的技術層級（由低風險到高風險）：**

            

                
- **No-touch transfer (無接觸傳遞)：**全自動，最低風險

                
- **RTP (Rapid Transfer Port，快速傳遞口)：**密封對接傳遞，可防止 Grade B 空氣進入 Grade A

                
- **Depyrogenation tunnel (去熱原隧道)：**適用玻璃瓶等耐高溫材料

                
- **E-beam：**電子束滅菌，適用塑膠容器

                
- **Mousehole 手動傳遞：**最高風險，需 AVS 驗證不造成氣流逆向

            

            

自動化系統的三大優勢：可重複性 (repeatable)、可生物去污 (biodecontaminated)、可驗證 (validated)。

        

        

            

#### 比喻說明 Analogy

            

手動傳遞元件的「逐層去袋」原則，就像剝橙子：每進入一個更潔淨的區域，去掉一層皮，但必須確保去皮過程中不污染裡面那層。最內層只能在 Grade A 環境（最潔淨的地方）才能打開。如果在 Grade B 就剝開最內層，等於把「保護外皮」帶入了清潔室，反而污染內容物表面。

        

        

            

#### 重點提示 Key Notes

            

**Mousehole 與 RTP 的 AVS 驗證要求：**監管機構特別關注這個環節。使用 Mousehole 或門傳遞時，AVS 必須證明：

            

                
- 屏障內部不產生氣流紊亂 (no turbulence inside barrier)

                
- 沒有空氣從 Grade B 進入 Grade A (no ingress from B to A)

            

            

EU GMP Annex 1 明確要求傳遞過程的氣流動態研究必須記錄在案，且 APS 必須以代表性頻率模擬補料過程。

        

        

            

#### 練習思考 Practice Questions

            

                
1. 一個 CDMO 客戶的產品使用矽化橡皮塞，目前採用 Mousehole 手動補料。你會建議升級到 RTP 或自動化系統嗎？需要哪些資料支持這個決策？

                
2. 手動傳遞時，「最後一層袋子必須在 Grade A 才能去除」的理由是什麼？如果在 Grade B 去除會有什麼風險？

            

        

    

8.7 Microbiological Considerations for Aseptic Manipulations Associated with Sorting Systems for Components

    

        

## 原文內容 Original Text

        

Sorting systems are each independently machined (custom made), so there can be small geometric
        differences between each sorting system. Characterizing and qualifying each
        stoppering-set is recommended to define optimal settings, as this will reduce the requirement for
        fine-tuning during both the LSU (Line Set-Up) and the aseptic filling operation.

        

Sorting systems should be designed to be handled and assembled by touching only the external
        surfaces (e.g., outside of the feeder bowl) avoiding any manipulation in the portion that is in contact
        with components. Sorting systems should be controlled (e.g., using kitting procedures or through
        the use of ID numbers) to ensure that all required parts are used together consistently. Checks should
        be performed at the start of a batch or campaign to optimize the setup and adjustment prior to the
        start of fill. Any fine-tuning after setup should focus on optimization of machine parameters that do
        not require an aseptic intervention. Any aseptic interventions required should apply the general
        considerations regarding aseptic interventions (see Section 8.2). The intervention actions associated
        with initial setup and fine-tuning should be demonstrated through both AVS and APS.

        

Sorting systems are indirect product-contact parts; consequently, they should be sterilized before
        use. When transporting and installing the sorting systems, especially the large and often-awkward
        feed bowls, protective covers are recommended to avoid recontamination after sterilization
        during LSU (see Section 8.1). In the case of isolators, several approaches have been acceptable to
        regulators and have been justified through risk assessment and validation. For some facilities, the
        outermost protective bag (of the sterile sorting bowl) will be removed prior to biodecontamination,
        but a protective cap will stay in place over the opening of the stopper bowl to maintain the
        sterility of the interior surfaces until the isolator is biodecontaminated. After the end of aeration an
        intervention will be performed using a glove, tool, external manipulator, or robot to remove and
        discard the protective cap. For other facilities, the cap is removed just before or just after the door
        is closed, but before the biodecontamination is initiated so that the internal surfaces of the sorting
        bowl are also fully exposed to the biodecontamination. The approach to be taken should be established
        through risk assessment and included in the CCS (12). The PDA Points to Consider for the Aseptic
        Processing of Sterile Pharmaceutical Products in Isolators may be referenced for additional approaches
        and details about the risks (16).

        

Biodecontamination effectiveness can be affected by any residues that remain on surfaces after
        cleaning (and sterilization). For sorting systems which are used with siliconized components, special
        care should be taken to remove any residual silicone oil from surfaces during cleaning before
        sterilization as it may inhibit effective biodecontamination.

    

    

        

## 導師解析 Tutorial Commentary

        

            

#### 核心概念解析 Key Concepts

            

**分選系統 (Sorting System) 的特殊性：**分選系統（如振動碗、進料碗）是客製化加工品，每套之間存在細微幾何差異。因此：

            

                
- 每套 stoppering-set 必須個別定性 (characterize) 並確效 (qualify)

                
- 使用 Kitting 程序或 ID 編號確保配套零件始終一起使用，避免混用導致效能差異

                
- 批次開始前的設定調整應盡量完成，減少填充中途的無菌干預需求

            

            

關鍵原則：**設定優化優先於生產中調整**，因為生產中調整 = 無菌干預 = 風險。

        

        

            

#### 比喻說明 Analogy

            

隔離器中分選系統的防護帽管理，就像賽車手的安全帽裝備：「先戴上帽子進賽車（先保護無菌內表面），等進入安全的密閉環境後再取下防護面罩（生物去污後再移除防護帽）」。兩種方式（去污前移除 vs. 去污後移除）各有支持者，關鍵是必須透過風險評估說明哪種方式在你的設施中更有效，並納入 CCS 書面化。

        

        

            

#### 重點提示 Key Notes

            

**矽油殘留 (Residual Silicone Oil) — 常被忽略的風險：**

            

矽化橡皮塞（siliconized stoppers）在分選碗中運行後，會在內表面留下矽油。矽油是一種疏水性物質，可以：

            

                
- 阻擋氣態過氧化氫 (VHP) 或其他生物去污劑接觸表面

                
- 顯著降低生物去污效果，使孢子殺滅數據 (sporicidal log reduction) 不達標

            

            

因此清潔步驟必須包含矽油去除的確認，且應在滅菌前完成。這是 FDA 483 觀察常見項目之一。

        

        

            

#### 練習思考 Practice Questions

            

                
1. 你的設施使用隔離器，分選碗目前的做法是「在生物去污前移除防護帽」。如果審計員詢問這個選擇的依據，你如何回答？需要準備哪些文件？

                
2. 為什麼 Kitting 程序對分選系統特別重要？如果不同批次混用了不同套的零件，可能發生什麼問題？

            

        

    

8.8 Microbiological Considerations for Mechanical Interventions

    

        

## 原文內容 Original Text

        

Mechanical interventions to repair or replace parts fall into one of four categories:

        

            
1. Sterilized or disinfected mechanical components within the cleanroom environment for which
            failures have been anticipated

            
2. Disinfected mechanical components within the cleanroom environment for which failures have
            not been anticipated

            
3. Mechanical components that are not disinfected due to being occluded (and, therefore, not
            disinfected during preparation of the line)

            
4. Equipment located in enclosed mechanical cabinets, also known as technical areas or
            gray zones

        

        

The microbiological risk of each of these four categories is directly related to the ability to perform
        the intervention in an aseptic manner, while minimizing airflow disruptions and without risk of
        compromising the aseptic condition of the equipment, personnel gowning, or the environment. While
        Categories 2 and 3 are far less frequent, and perhaps entirely unanticipated and rare, they should not
        be executed without risk assessment (including risk assessment of the means for execution of the
        intervention), and approval of the risk by the quality unit. If risk is high or not acceptable, then
        steps should be performed to reduce the risk or to eliminate the intervention. If the activity cannot be
        eliminated or the risk reduced to an acceptable level, then the activity should not be allowed to be
        performed.

        

Category 4 (also subject to risk assessment) should rarely, if ever, be permitted from the cleanroom
        without discontinuing the batch. Some of the specific risks associated with all four categories are
        described below.

        

**Category 1:** The first category, sterilized or disinfected mechanical components, involves
        interventions that were anticipated, risk-assessed, and followed the standard practices for
        interventions, including the performance of the intervention under both AVS and APS. These are
        standard corrective interventions that must be documented within the batch record and executed by
        personnel who have been qualified in the performance of that or similar interventions (see Section 8.2
        for standard intervention practices).

        

**Category 2:** The second category, disinfected mechanical components, can generally be manipulated
        during aseptic operations. If the specific intervention was not included in a procedure and challenged
        during AVS and APS a risk-based decision should be made by operations and the quality unit to
        allow the intervention, stop the aseptic process, and/or to address it as a deviation, which may result
        in additional investigation, actions, and the potential loss of the portion of the batch that follows the
        required intervention. For this reason, it is important to have procedures that plan for and address
        unexpected interventions. Planning for unexpected interventions must include appropriate Quality
        Assurance involvement in risk assessment and decision-making at the time the mechanical failure
        occurs. Considerations for improved detection may include additional supervision or oversight and
        sampling (e.g., risk-based EM samples collected after the conclusion of the fill to represent the
        surfaces associated with the intervention, sterility samples). Also included in the plans for the
        unexpected intervention are stringent requirements to isolate and quarantine portions of the batch
        that are associated with or that follow the performance of the intervention.

        

**Category 3:** For equipment in the third category, where a surface is potentially occluded during
        surface biodecontamination (e.g., a nut or a bolt in a difficult-to-reach area) but there is a known
        risk of needing access to the surface during interventions in the filling process, the risk should be
        assessed and the approach for accessing this area should be considered as part of any potential
        interventions. Some firms may disinfect this area with a sporicidal disinfectant prior to LSU
        (during open-door phases of the setup) in order to reduce the risk of exposing this occluded surface
        during any potential interventions. The exposure of this surface, however, and the manual disinfection
        should be considered as part of the original qualification of the line, and all intended actions should
        be included in the appropriate AVS and APS. The ability to perform this activity in a manner that is
        appropriate to prevent microbiological risk should be considered on a case-by-case basis and
        pre-approved by the quality unit if it is determined that the intervention should proceed.

        

**Category 4:** Opening of technical areas of the filling line that are not biodecontaminated or
        disinfected is not allowed during aseptic processing with one exception. A technical area that is
        accessed from a service area that is isolated from the cleanroom that the filling line is installed in
        can be allowed during aseptic processing. Should a repair or replacement require access to an area
        that is only accessible from the cleanroom, the fill needs to be suspended, and a
        line clearance should be conducted in the affected zones. Technical measures should be taken to
        restrict the scope of the impact to the cleanroom and isolator or RABS. Even with these technical
        measures, such access will require disinfection of the portion of the equipment, isolator, or cleanroom
        impacted by the opening. Depending on the extent of the exposure to the nondisinfected zone and the
        possible pressure differentials experienced after the work is complete, the cleanroom may require more
        than one successive cleaning and disinfection event. Equipment will also need to be recleaned and
        resterilized prior to restarting. For many products, such an interruption could cause product
        hold times to be exceeded or would represent such a high sterility-assurance risk that the filling
        operation is discontinued, and the remaining product is rejected, filled via a re-setup of the line, or
        reprocessed (if permissible and justified by site SOPs and by product license).

    

    

        

## 導師解析 Tutorial Commentary

        

            

#### 核心概念解析 Key Concepts — 四類機械干預風險框架

            
                
                    
                    
                    
                    
                
| 類別 | 特徵 | 風險等級 | 管理要求 |
| --- | --- | --- | --- |
                
                    ****
                    
                    
                    
                
| 1 | 已預期、已滅菌/消毒的元件 | 低-中 | 納入 AVS + APS，批次記錄 |
                
                    ****
                    
                    
                    
                
| 2 | 已消毒但未預期的干預 | 中-高 | 即時 QA 介入，批次隔離，可能偏差 |
                
                    ****
                    
                    
                    
                
| 3 | 被遮蔽、未消毒表面 | 高 | 個案審查，QA 預批准，孢子劑預處理 |
                
                    ****
                    
                    
                    
                
| 4 | 技術區域／灰區 | 極高 | 原則上必須停止批次 |
            

        

        

            

#### 比喻說明 Analogy

            

這四類就像醫院手術室的緊急情況分級：

            

                
- **類別 1：**備用無菌手術器械已就緒，直接更換，有標準流程

                
- **類別 2：**需要一個沒有預先備好的工具——必須緊急召開會議決定是否繼續

                
- **類別 3：**要碰到消毒時沒有照到的角落——需要個案評估

                
- **類別 4：**需要打開手術室的牆壁維修管線——手術必須暫停，病人先轉移

            

        

        

            

#### 重點提示 Key Notes — Category 4 的嚴重後果

            

技術區域（Gray Zone）開啟是無菌充填中最嚴重的中斷事件：

            

                
- 必須停止充填，執行 Line Clearance

                
- 整個受影響區域需重新清潔與消毒（可能需要多次）

                
- 設備需重新清洗與滅菌 (reclean + resterilize)

                
- 剩餘產品可能因超出 hold time 或無菌保證風險而被拒批

            

            

**商業影響：**對於短保存期的生物製劑，這意味著整批報廢。這正是為何 Category 4 干預在設計充填線時就應該被工程控制消除——無菌保證永遠優先於批次救回。

        

        

            

#### 風險決策框架 Decision Framework

            

```

機械故障發生
    ↓
Q1: 元件是否已滅菌/消毒？
    ↓ YES → Q2: 干預是否預先納入 AVS + APS？
               ↓ YES → 類別 1：執行標準干預程序
               ↓ NO  → 類別 2：即時 QA 介入 + 風險評估
    ↓ NO  → Q3: 表面是否被遮蔽（occluded）？
               ↓ YES → 類別 3：個案評估 + QA 預批准
               ↓ NO  → 類別 4（技術區域）：停止批次

決策原則：
無菌保證 > 批次救回 > 生產效率
            
```

        

        

            

#### 練習思考 Practice Questions

            

                
1. 一個充填機的皮帶在生產中途斷裂，更換皮帶時需要觸碰到一個平常被面板遮蔽、清潔時無法消毒的螺絲。這屬於哪個類別？你下一步怎麼做？

                
2. Category 2 的干預為什麼必須包含「隔離干預後的批次部分」？這個隔離的目的是什麼？

            

        

    

8.9 Microbiological Considerations for Aseptic Manipulations Related to Environmental Monitoring

    

        

## 原文內容 Original Text

        

Environmental Monitoring (EM) includes viable particulate-monitoring (e.g., settle plates,
        volumetric air, swab, and contact plates for surface, gloves, and gowns) and total
        particulate-monitoring (e.g., particles greater than or equal to 0.5 µm and 5 µm). Risk-based EM
        should be undertaken for the full duration of critical processing, including LSU (17). Manually
        manipulated EM techniques or activities taking place in Grade A and B spaces prior to or during the
        aseptic process are interventions and should follow recommendations associated with intervention
        design and qualification. New techniques such as biofluorescent particle counting offer a
        non-invasive method to measure airborne viable particles and should be considered as an alternative
        to conventional monitoring when seeking a less invasive method.

        

Total particulate EM sampling should be continuous throughout the entire operation. The EM
        microbiological sampling plan is both event-driven and time-driven, meaning the EM sampling
        plan is designed to measure across the full duration of the aseptic operation. Samples, like settle
        plates and volumetric air samples, are taken for specific intervals throughout the operation
        (time-driven), whereas other microbiological samples, like contact plates and swabs, are taken to
        represent the monitoring of specific events (event-driven). Examples of event-driven monitoring
        include samples collected during setup, aseptic interventions, exit of personnel after shift, end of the
        batch, and/or line-changeover during a campaign. The sampling sites and critical control points should
        be justified and included in the CCS.

        

Personnel represent the greatest risk to microbiological control during aseptic processing. EM is
        conducted by people; therefore, it follows that people are the greatest risk to both the environment
        during the sampling activities and to the integrity of EM samples. In addition, the introduction of
        growth-promoting media into the aseptic environment for the purpose of sampling represents a
        risk that growth-promoting residues are left behind if sampling sites are not appropriately cleaned
        after sampling.

        

Therefore, the design of the viable monitoring program should ensure controls for the full lifecycle
        of the EM samples (plates and swabs) to ensure the validity of the results, including:

        

            
- Media supplier management

            
- Receipt

            
- Quality control of incoming media (including identity, general condition and appearance, growth
            promotion, sterility check, and expiration dating)

            
- Handling and storage prior to use

            
- Use in aseptic operations:
                

                    
    - Transport into cleanrooms (and removal of outer wrapping/layers)

                    
    - Sampling aseptic techniques and minimized sample-handling within the cleanroom

                    
    - Closing of plates and swabs to maintain integrity after sampling

                    
    - Cleaning and disinfection after sampling (of gloves and surfaces)

                

            

            
- Reconciliation, labeling, and chain of custody

            
- Transportation to incubators (including any taping, bagging, or wrapping to protect samples)

            
- Incubation, reading (with confirmation of results), and subculture (if any)

            
- Identification and specification

            
- Handling of any discrepancies

        

        

Risk assessment tools should be used to define the controls to be put in place for the end-to-end
        chain of custody for all phases of the plate- or swab-handling process, with specific focus of
        reducing the following contamination risks during the process:

        

            
- Handling and labeling of media prior to sampling

            
- Sample collection by EM sampling personnel

            
- Handling, labeling, and transportation following sample collection

            
- Laboratory handling for incubation and reading post-monitoring

        

        

Detailed procedures, training, and qualification of personnel are essential to ensure that these
        technique-driven handling procedures (especially during the exposure of the samples in the cleanroom)
        are well practiced and performed effectively by each person assigned to a role in handling EM samples.

        

SOPs should be established to define the processes to be followed for atypical events including
        desiccated plates, cracked plates, dropped plates, nonviable particulate matter on plates, and
        viable growth (which should be atypical in Grade A and B). These SOPs should include
        documentation containing example pictures of the impacted plates and details on how to handle
        atypical plates. A deviation, out-of-limits, or equivalent laboratory investigation should be raised to
        initiate the examination of any abnormal result. The impacted plates should be retained until
        completion of the investigation (18).

    

    

        

## 導師解析 Tutorial Commentary

        

            

#### 核心概念解析 Key Concepts

            

**EM 的雙重性質：**

            

環境監測 (Environmental Monitoring, EM) 本身是一個矛盾體——它是用來**驗證**環境是否無菌的工具，但執行 EM 的人員和培養基本身，就是**污染環境的潛在來源**。

            

**時間驅動 vs. 事件驅動：**

            

                
- **時間驅動 (time-driven)：**沉降板 (settle plates)、體積空氣采樣 (volumetric air) — 按時間間隔採集，反映整體趨勢

                
- **事件驅動 (event-driven)：**接觸板 (contact plates)、棉拭 (swabs) — 對應特定事件，如干預後、人員更換班次後、批次結束後

            

            

總顆粒監測 (total particulate) 應全程連續進行。

        

        

            

#### 比喻說明 Analogy

            

EM 樣品的全生命週期管控，就像法庭上的物證保管鏈 (chain of custody)：從採樣到判決（微生物鑑定），每一個環節都要有記錄，任何斷點都可能使結果不被採信。培養基的供應商、入庫品質管控、冷鏈保存、潔淨室操作技術、培養條件、讀板方式——每一步都必須有 SOP 和訓練記錄，否則即使培養結果正常，也無法證明這個結果是可信的。

        

        

            

#### 重點提示 Key Notes

            

**「培養基本身帶來污染風險」的監管視角：**

            

沉降板含有促生長培養基 (growth-promoting media)，放入 Grade A 環境後：

            

                
- 如果採樣後培養基殘留未清潔，會成為後續微生物的營養來源

                
- 採樣人員本身就是最大的污染風險——EM 人員進入 Grade A 的行為本身就是一次干預，必須像其他干預一樣設計與確效

            

            

**新技術：**生物螢光顆粒計數 (biofluorescent particle counting) 可以非侵入性地即時偵測活性顆粒，是傳統沉降板的潛在替代方案。EU GMP Annex 1 (2022) 已開始提及此類新興技術。

        

        

            

#### 實務應用 Practical Application

            

在 CDMO 的 EM 程序審計中，查核人員最常問的問題包括：

            

                
- 培養基的生長促進測試 (growth promotion test) 是否每批都執行？

                
- 掉落的沉降板如何處理？SOP 是否包含照片說明？

                
- 事件驅動的採樣位點（如干預後）是否與 CCS 一致？

                
- EM 人員的技術確效記錄是否齊全？

            

            

Grade A 出現任何有活性生長的結果，應立即啟動偏差調查，保留培養板至調查完成。

        

        

            

#### 練習思考 Practice Questions

            

                
1. 一個 EM 採樣人員在採集沉降板時不小心讓板子接觸到了 Grade A 表面，然後繼續完成採樣。這個事件如何記錄和評估？採樣結果是否仍然有效？

                
2. 為什麼 EM 採樣行為本身被視為「干預」？這對 APS 設計有什麼影響？

            

        

    

    

### 本節重點回顧 Section Summary (8.4–8.9)

    

        
- **充填針管理 (8.4)：**液體充填針的修復或更換是最高風險干預之一；預組裝流體路徑可降低更換風險；粉末充填針只能完全更換。

        
- **破損容器處置 (8.5)：**所有矯正性干預必須納入 AVS 和 APS，以代表性頻率模擬；遵循「最小化行動」原則，工作高度以下的動作應避免。

        
- **元件供應 (8.6)：**自動化傳遞優先；手動傳遞必須逐層去袋，最後一層只能在 Grade A 去除；Mousehole/RTP 必須有 AVS 氣流驗證。

        
- **分選系統 (8.7)：**每套 stoppering-set 個別確效；使用 Kitting 管理；矽油殘留可抑制生物去污效果，清潔時必須完全去除。

        
- **機械干預四分類 (8.8)：**類別 1 標準執行；類別 2-3 需即時 QA 風險評估；類別 4（技術區域）原則上必須停止批次；無菌保證永遠優先於批次救回。

        
- **環境監測 (8.9)：**EM 兼具「監測工具」與「污染風險」的雙重性；採樣計畫結合時間驅動與事件驅動；培養基的全生命週期需嚴格管控；EM 人員本身是最大的污染風險源。

    

⇧

# Section 8C: Component Introduction — RTU vs. On-Site Treatment

    

元件導入方式：即用型 vs. 現場前處理的決策框架

    

PDA Manufacturing Technology Guide No. 1 | p147 - p152

    
    

        

決策優先順序 — Decision Hierarchy

        

            

#1 無菌保證 Sterility Assurance

            

→

            

#2 產品CQAs Patient Safety

            

→

            

#3 商業彈性 Business & Flexibility

        

    

    
    

        

### 本章學習目標

        

            
- 理解大批量與小批量生產對元件處理方式選擇的影響

            
- 掌握 RTU（即用型）元件的各種引入機制（NTT、氫過氧化物、E-Beam）

            
- 比較現場前處理與 RTU 的優缺點（污染控制、加工速率、驗證、微粒風險）

            
- 了解嵌套式元件（nested components）的特殊處理考量

        

    

    
    

        

### 本節涵蓋範圍 Section 9.0 — 9.1.1.7

        

            9.0 Overview
            9.1.1 RTU vs. On-Site
            9.1.1.1 Large Batch
            9.1.1.2 Specialty Components
            9.1.1.3 Small Batch
            9.1.1.4 RTS Considerations
            9.1.1.5 COC & Plastics
            9.1.1.6 RTU Transfer Mechanisms
            9.1.1.7 Comparison Table
        

    

    
    
    
    

        

            

9.0

            

                

## Component and Filling Supply Handling — Overview

                

元件與填充供料處理概論

            

        

        

            

                

                    

Original Text (English)

                    

PDA has published several technical reports that deal with the handling of components and supplies for aseptic filling. Section 9.0 defines the various methods for preparing and handling components and filling supplies. Section 10.0 discusses the mechanisms for getting materials to the point of the aseptic fill.

                    

**9.1 Considerations for Component Handling and Impact on System Design**

                    

The most important considerations:

                    

                        
- Utilizing methods of introduction that will minimize inherent interventions

                        
- Protecting the filling operation from viable and total particulate and other contamination

                        
- Minimizing disruption of unidirectional airflow

                    

                    

Key considerations for component selection:

                    

                        
- Type of primary containers (vials, ampoules, cartridges, syringes, bags) and materials of construction (glass, cyclic olefin copolymer, plastic)

                        
- Pretreatment needed (e.g., siliconization)

                        
- Packaging, sterilization, and pretreatment methods to facilitate handling

                    

                

                

                    

中文解析 Commentary

                    

                        

#### 核心三原則：元件導入的設計思維

                        

PDA 在本節揭示元件處理的三個核心原則，順序即反映優先等級：

                        

                            
- **最小化固有干預（Inherent Interventions）**：每次人工干預都是引入污染的機會。設計系統時應先問「能否自動化或消除此步驟？」

                            
- **保護填充操作免受微粒/微生物污染**：可存活微粒（viable particulate）= 微生物；總微粒（total particulate）= 所有粒子。兩者均須管控。

                            
- **維持單向氣流（Unidirectional Airflow）**：RABS/Isolator 內的 ISO 5 環境依靠穩定的單向層流，元件引入路徑必須不干擾氣流。

                        

                    

                    

                        

#### 比喻：外科手術室的無菌場域

                        

想像開刀房的無菌台——每一件手術器械進入無菌場域都要有「不破壞無菌屏障」的方式（拆包裝、遞送技術）。無菌填充線的元件導入邏輯完全相同：進入前必須確認乾淨，進入時必須不帶入汙染。

                    

                    

                        

#### 矽化（Siliconization）是什麼？

                        

針筒（syringe barrel）內壁需塗覆矽油，以確保活塞推力均勻、藥液滑順推出。這是預處理（pretreatment）的典型例子——若元件未矽化，直接使用會影響劑量準確性，衝擊 CQA #2（產品品質）。

                    

                    

                        

#### 思考題

                        

為什麼「最小化干預」被列為首要考量，而不是「成本最低」？結合決策優先順序 (#1 無菌保證) 回答。

                    

                

            

        

    

    
    
    
    

        

            

9.1.1

            

                

## Ready-To-Sterilize or Ready-to-Use Versus In-Line or On-Site Pretreatment

                

即用型（RTU/RTS）與現場前處理的選擇框架

            

        

        

            

                

                    

Original Text (English)

                    

Key considerations: batch size, available processing time, and overall complexity required.

                    

For RTU (Ready-To-Use): integrity of components in supplier packaging must be maintained during transit.

                    

For in-line/on-site: engineering controls ensure integrity as components are conveyed.

                

                

                    

中文解析 Commentary

                    

                        

#### RTU vs. RTS vs. On-Site — 三種模式定義

                        

                            
- **RTU（Ready-To-Use，即用型）**：由供應商完成清洗、矽化、滅菌，以雙層包裝密封出貨，工廠直接引入無菌區使用。

                            
- **RTS（Ready-To-Sterilize，備滅菌型）**：供應商完成清洗但未滅菌，工廠需在現場進行去熱原（depyrogenation）後使用。

                            
- **On-Site / In-Line（現場前處理）**：元件以原始（未處理）狀態進廠，工廠自行清洗、去熱原、矽化。

                        

                    

                    

                        

#### 選擇框架：三個關鍵變數

                        

```
選擇方式 = f(批量大小, 可用加工時間, 處理複雜度)

批量大    → On-Site 往往更具經濟性
批量小    → RTU 避免設備投資攤提不足
複雜元件  → RTU 轉移驗證挑戰 vs. On-Site 製程控制挑戰
時間緊迫  → RTU 交期確定性較高
```

                    

                    

                        

#### RTU 的隱形風險：運輸完整性

                        

RTU 元件由供應商滅菌後以雙層袋包裝出貨。**運輸過程中的任何包裝破損都會讓已滅菌元件失效**（無菌保證 #1 失敗）。因此 RTU 採購合約必須明確規範：運輸條件、包裝完整性驗收標準、破損處理 SOP。

                    

                

            

        

    

    
    
    
    

        

            

9.1.1.1

            

                

## Large Batch Production

                

大批量生產的元件處理策略

            

        

        

            

                

                    

Original Text (English)

                    

In large batch glass production, primary containers are commonly supplied untreated due to economics. In-house pretreatment requires a glass washer and depyrogenation tunnel (or oven).

                    

Break-even analysis should consider fully absorbed labor, facility costs, equipment life cycle, energy, and reject costs.

                    

Wide-spread adoption of RTU/RTS has reduced supply costs for common sizes.

                

                

                    

中文解析 Commentary

                    

                        

#### 大批量生產的邏輯：攤提設備成本

                        

大批量生產（例如每批 100,000 支以上的 vial）時，自建玻璃清洗機（glass washer）＋去熱原隧道（depyrogenation tunnel）的固定成本可以被大量元件攤提，每支 vial 的處理成本遠低於向供應商購買 RTU 版本的溢價。

                        

然而 RTU/RTS 的普及（尤其是常見規格如 2R、6R、10R vial）已大幅壓縮兩者價差，使得損益平衡點（break-even point）上移。

                    

                    

                        

#### 完整損益平衡分析的要素

                        

```
On-Site 總成本 =
  人力成本（fully absorbed labor）
  + 廠房設施分攤（facility costs）
  + 設備生命週期成本（equipment lifecycle）
  + 能源消耗（energy — 去熱原隧道耗電量高）
  + 不良品損耗（reject costs — 玻璃破損、粒子）
  + 驗證/再驗證成本（validation）

RTU 總成本 =
  元件採購單價 × 批量
  + 物流 & 倉儲成本
  + 供應商稽核成本（SA verification）
```

                        

真正的損益平衡必須比較上述**完整吸收成本（fully absorbed cost）**，而非僅比較元件單價。

                    

                    

                        

#### CDMO 應用場景

                        

作為 CDMO，同一條填充線可能本週生產客戶 A 的大批量 vial（適合 On-Site），下週換線生產客戶 B 的小批量 syringe（適合 RTU）。這就是為什麼 CDMO 的設備佈局必須保留兩種模式的彈性，而非固定選擇一種。

                    

                

            

        

    

    
    
    
    

        

            

9.1.1.2

            

                

## Specialty Components with Complex Pretreatment, Assembly, or Orientation

                

特殊元件：複雜前處理、組裝或方向性需求

            

        

        

            

                

                    

Original Text (English)

                    

Complex syringe barrels require: on-line siliconization, gluing of staked needles, assembly of luer tips, needle shield. Orientation requirements during filling make nested tubs/nests the industry norm regardless of batch size.

                    

Advantages of nested containers:

                    

                        
- Reduction of container-to-container contact

                        
- Fewer glass-to-glass defects (scuffing, cracks, chips)

                    

                    

Delidding operation generates particles — positioned upstream and separate from filler. Various technologies including robotics.

                

                

                    

中文解析 Commentary

                    

                        

#### 嵌套式包裝（Nested Tubs/Nests）— 為什麼是業界標準？

                        

預填充針筒（Pre-filled Syringe, PFS）、卡匣（cartridge）在填充時需要精確的方向定位（開口朝上、鍼頭朝下等）。嵌套式設計（每支針筒固定在塑膠巢格內，多個巢格堆疊於圓形托盤）可以：

                        

                            
- 確保每支容器方向一致，機器無需額外定向步驟

                            
- 消除容器間碰撞 → 減少玻璃破損（chips）、刮痕（scuffing）

                            
- 減少因玻璃碎屑產生的微粒，直接保護 CQA #2

                        

                    

                    

                        

#### 比喻：雞蛋盒的設計邏輯

                        

雞蛋盒讓每顆蛋固定在獨立隔間，防止運輸中的碰撞破損。嵌套式容器（nested containers）的原理完全相同——只不過它保護的是藥品容器，而破損的代價是微粒污染或無菌失敗，後果遠比雞蛋破掉嚴重。

                    

                    

                        

#### 開蓋作業（Delidding）的微粒風險

                        

嵌套托盤進入無菌區前，外層蓋板需被移除（delidding）。這個機械動作會產生微粒。**因此 delidding station 必須設置在填充機上游、且與填充點保持足夠距離或隔離**，避免微粒飄移至填充區。這是無菌保證 #1 的直接實踐。

                    

                    

                        

#### 思考題

                        

若針筒採用嵌套式 RTU 包裝，delidding 站應設在 Isolator 內還是外？引入點（introduction point）的設計如何影響 contamination control strategy（CCS）？

                    

                

            

        

    

    
    
    
    

        

            

9.1.1.3

            

                

## Small Batch Production

                

小批量生產的元件處理策略

            

        

        

            

                

                    

Original Text (English)

                    

RTU glass vials are well-suited for small batches.

                    

Complex containers (syringe barrel + needle + needle-shield) require gamma sterilization pretreatment even for small batches.

                    

Economics should be evaluated case-by-case.

                

                

                    

中文解析 Commentary

                    

                        

#### 小批量的經濟邏輯：避免設備閒置

                        

小批量（如臨床試驗用藥，500–5,000 支）時，自建玻璃清洗線的設備成本與 OQ/PQ 驗證成本無法攤提，RTU vial 雖單價較高，但整體 TCO（Total Cost of Ownership）反而更低。

                        

複雜元件如 PFS（預填充針筒套件）即使批量小，因為需要 gamma 滅菌，在現場無法自行執行，必然走 RTU 路線。

                    

                    

                        

#### 比喻：外送 vs. 自煮

                        

只煮一人份的晚餐（小批量）——叫外送（RTU）比自己買菜、洗碗（on-site）更划算。但若是辦桌 100 人（大批量），自己準備才有規模效益。元件處理的決策邏輯與此完全一致。

                    

                    

                        

#### CDMO 應用：Phase I/II 臨床批次

                        

CDMO 接受客戶的 Phase I 臨床批次時，幾乎不可能自建去熱原隧道只為幾千支 vial 服務。此時 RTU vial 是標準選擇，且需要在技術協議（Technical Agreement）中明確規定供應商的無菌保證（Sterility Assurance Level, SAL）要求及批次放行文件。

                    

                

            

        

    

    
    
    
    

        

            

9.1.1.4

            

                

## Considerations for Ready-to-Sterilize (RTS)

                

備滅菌型容器的特殊注意事項

            

        

        

            

                

                    

Original Text (English)

                    

RTS containers are introduced before the depyrogenation step. The loading section must be designed to protect from particle contamination.

                    

Sterilization in ovens is being discontinued due to contamination risks from manual operations.

                

                

                    

中文解析 Commentary

                    

                        

#### RTS 的引入點設計

                        

RTS 容器在去熱原（depyrogenation）之前引入，此時容器尚未滅菌，引入點（loading section）必須：

                        

                            
- 設置在無菌核心區之外，以免未處理容器污染已建立的無菌環境

                            
- 具備防微粒設計（如局部 ISO 7 或 ISO 8 環境）

                            
- 容器從 loading 到進入隧道的輸送路徑必須有汙染控制措施

                        

                    

                    

                        

#### 烤箱滅菌（Oven Sterilization）的淘汰趨勢

                        

傳統批次式烤箱（batch oven）需要人工裝載和卸載操作，這些手動步驟是重大污染風險。業界趨勢是改用連續式去熱原隧道（depyrogenation tunnel），消除人工介入，直接符合**「最小化干預」**的首要原則（無菌保證 #1）。這說明即使是成熟技術，當它衝突於首要決策原則時，也應被淘汰。

                    

                    

                        

#### 思考題

                        

若 RTS loading section 發生微粒污染事件，污染路徑可能從何而來？需要哪些工程控制（engineering controls）來防範？

                    

                

            

        

    

    
    
    
    

        

            

9.1.1.5

            

                

## Cyclic Olefin Copolymer (COC) and Plastics

                

環烯烴共聚物與塑膠容器的特殊考量

            

        

        

            

                

                    

Original Text (English)

                    

RTU is most common for COC/plastics. Sterilization by gamma irradiation or EtO (ethylene oxide) — typically performed by external suppliers.

                    

COC containers scratch easily — nested processing lowers damage risk.

                

                

                    

中文解析 Commentary

                    

                        

#### COC（環烯烴共聚物）— 為什麼必走 RTU？

                        

COC（Cyclic Olefin Copolymer，環烯烴共聚物）是近年常用的高透明塑膠容器材質（如 Daikyo CZ vial、Crystal Zenith syringe）。它無法耐受去熱原隧道的高溫（300°C+），因此：

                        

                            
- 滅菌必須用 gamma 輻射或環氧乙烷（EtO），由外部專業供應商執行

                            
- 工廠無法自行前處理 → **只能選擇 RTU**

                            
- COC 表面易刮傷 → 嵌套式包裝不僅保護方向性，更保護表面完整性（影響 CQA：外觀、相容性）

                        

                    

                    

                        

#### 比喻：LCD 螢幕 vs. 鋼化玻璃

                        

COC 就像 LCD 螢幕面板——功能優異但不耐刮。你不會把它和其他零件散裝在一個箱子裡搖晃運輸。嵌套包裝就是那個保護泡棉——每個面板都有自己的固定位置，互不接觸。

                    

                    

                        

#### EtO vs. Gamma — 供應商滅菌方式的選擇影響

                        

EtO（環氧乙烷）滅菌後有殘留問題，需要充分脫氣（degassing）。Gamma 輻射滅菌無殘留但可能引起某些塑膠變色或降解。選擇滅菌方式時需與容器供應商共同確認相容性，並納入供應商品質協議（Quality Agreement）。這關係到 CQA #2（容器完整性、相容性）。

                    

                

            

        

    

    
    
    
    

        

            

9.1.1.6

            

                

## Transfer of RTU Primary Containers — Mechanisms of Aseptic Transfer

                

RTU 元件的無菌轉移機制

            

        

        

            

                

                    

Original Text (English)

                    

Mechanisms of aseptic transfer:

                    

                        
- No-touch transfer (NTT) — automatic or semiautomatic outer-bag and inner-bag removal; introduces tub or tray into barrier

                        
- Conveyor or transfer equipment with automatic external biodecontamination (hydrogen peroxide, e-beam, ultraviolet light, pulsed light)

                        
- Sterile-container transfer through beta-port bag, container, or transfer isolator provided by supplier

                    

                

                

                    

中文解析 Commentary

                    

                        

#### 三種 RTU 無菌轉移機制詳解

                        

**1. NTT（No-Touch Transfer，無觸碰轉移）**

                        

利用自動或半自動設備逐層剝除外袋（outer bag）和內袋（inner bag），將嵌套托盤（tub）直接引入 RABS/Isolator。全程無人手觸碰無菌表面，是目前最受監管機構認可的引入方式。

                        

**2. 生物去汙（Biodecontamination）轉移**

                        

容器包裝外表面通過自動去汙通道，以下列方式殺滅表面微生物：

                        

                            
- **H₂O₂（過氧化氫蒸氣，VHP）**：接觸時間較長，有氧化殘留風險

                            
- **E-Beam（電子束）**：速度快，無殘留，但設備初始資本高

                            
- UV / Pulsed Light：輔助技術，通常結合其他方式

                        

                        

**3. Beta-port / Transfer Isolator**

                        

供應商以 beta-port 袋或專用轉移隔離器出貨，工廠透過 alpha-beta 接口將容器無縫轉入生產隔離器，全程零大氣接觸。適用於最高無菌等級要求的場景。

                    

                    

                        

#### 比喻：太空站的艙門對接系統

                        

Alpha-Beta port 就像太空站的對接艙口——兩端分別連接「外部世界的容器」和「已建立無菌環境的艙內」，開門時兩側同時維持密封，物品在轉移過程中從未暴露於外部環境。這是物理屏障最徹底的轉移方式。

                    

                    

                        

#### CDMO 應用：引入方式對 CCS 的影響

                        

選擇 NTT vs. H₂O₂ vs. E-Beam 不只是設備選型，更直接定義了 Contamination Control Strategy（CCS）文件的引入點章節。監管機構在 PAI（Pre-Approval Inspection）時會追問：「你的引入機制如何確保 6-log 以上的生物負載降低？」必須有對應的驗證數據（qualification data）支撐。

                    

                

            

        

    

    
    
    
    

        

            

9.1.1.7

            

                

## Advantages and Disadvantages of the Various Approaches

                

各種引入方式的優劣比較

            

        

        

            
            

                

                    

Original Text (English)

                    

**Table 9.1.1.7-1:** Considerations for In-Line Treated Versus RTU Containers

                    

The table below compares four approaches across six key dimensions: Contamination Control, Processing Rate, Validation, Particulate Risk, Residuals Risk, and Cost.

                

                

                    

中文解析 Commentary

                    

                        

#### 如何解讀比較表

                        

PDA 以六個維度比較四種方案。在閱讀時，始終以決策優先順序過濾：

                        

                            
- **#1 無菌保證**：看「污染控制」與「微粒風險」兩欄

                            
- **#2 產品 CQAs**：看「殘留風險」欄（殘留物影響產品品質）

                            
- **#3 商業彈性**：最後才看「成本」與「加工速率」欄

                        

                    

                

            

            
            

                
                    
                        
                              

                              

                              

                              

                              

                        
| Consideration考量維度 | In-Line / On-Site Treatment現場前處理 | RTU with NTTRTU + 無觸碰轉移 | RTU with H₂O₂ BiodecontaminationRTU + 過氧化氫去汙 | RTU with E-Beam BiodecontaminationRTU + 電子束去汙 |
| --- | --- | --- | --- | --- |
                    
                    
                        
                            ****  

                              

                              

                              

                              

                        
| Contamination Control污染控制 | All parameters known on-site; controls needed for processing, cleaning, equipment所有參數可自行掌控，但需管控清洗/設備等多環節 | Reduced risk with automatic handling; inspection required for supplier SA controls; CCS must address introduction point + EM自動處理降低風險；需查核供應商 SA；CCS 須涵蓋引入點 + 環境監測 | Simplified due to in-line management現場管理使污染控制較為簡化 | Simplified due to in-line management現場管理使污染控制較為簡化 |
                        
                            ****  

                              

                              

                              

                              

                        
| Processing Rate加工速率 | Correlated to component introduction rate; can use multiple tunnels取決於元件引入速率；可並聯多條去熱原隧道 | Correlated to component introduction rate取決於元件引入速率 | Correlated to batch cycle; slower than E-Beam按批次週期，速率低於 E-Beam | Correlated to batch cycle; higher speed than H₂O₂按批次週期，速率高於 H₂O₂ |
                        
                            ****  

                              

                              

                              

                              

                        
| Validation驗證需求 | Qualification / validation required; well-understood processes需資格確認與製程驗證；技術成熟易理解 | Simpler validation — no on-site qualification of washer, tunnel, VPHP, or E-Beam驗證較簡單，無需自行確認清洗機、隧道等 | In-line biodecontamination requires qualification; easy to demonstrate 6-log reduction需就現場去汙設備執行資格確認；6-log 滅菌效果易驗證 | Requires qualification; easy 6-log reduction demonstration需資格確認；6-log 效果易驗證 |
                        
                            ****  

                              

                              

                              

                              

                        
| Particulate Risk微粒風險 | Potential glass-to-glass contact depending on conveyance method視輸送方式而定，可能發生玻璃間接觸產生碎屑 | No glass-to-glass contact無玻璃間接觸 | No glass-to-glass contact無玻璃間接觸 | No glass-to-glass contact無玻璃間接觸 |
                        
                            ****  

                              

                              

                              

                              

                        
| Residuals Risk殘留風險 | None無 | None無 | Risk of oxidizing residuals (H₂O₂)氧化性殘留物風險（過氧化氫） | Risk of free radicals or ozone自由基或臭氧殘留風險 |
                        
                            ****  

                              

                              

                              

                              

                        
| Cost成本 | Lower primary packaging cost包裝材料成本較低 | More expensive primary packaging (additional processing steps from supplier)包裝成本較高（供應商額外加工步驟） | Less expensive than NTT; more than fully on-site低於 NTT；高於純現場處理 | Less expensive than NTT; more than fully on-site; initial capital costs high低於 NTT；高於純現場處理；初始設備資本高 |
                    
                

            

            
            

                

                    

Key Takeaways from Table 9.1.1.7-1

                    

                        
- All RTU methods eliminate glass-to-glass contact, reducing particulate risk versus in-line treatment

                        
- NTT has the simplest validation burden but highest packaging cost

                        
- H₂O₂ and E-Beam introduce residuals risks that require product compatibility testing

                        
- In-line/on-site offers the lowest packaging cost but requires qualification of washer, depyrogenation tunnel, and associated systems

                        
- E-Beam outperforms H₂O₂ on speed; H₂O⁮ has lower capital cost than E-Beam

                    

                

                

                    

中文解析 Commentary

                    

                        

#### 殘留物風險 — 為什麼是 CQA #2 問題？

                        

H₂O₂（過氧化氫）殘留在容器內會與藥品中的蛋白質、胺基酸發生氧化反應，導致藥物降解（degradation）或效價下降（potency loss）。E-Beam 產生的自由基或臭氧同樣可能影響藥品穩定性。

                        

因此採用這兩種方式時，**必須進行容器殘留物測試（residual testing）並訂定可接受限度（acceptance criteria）**，這直接關係到 CQA #2（患者安全）。

                    

                    

                        

#### 選擇矩陣：依優先順序快速判斷

                        

```
Step 1 — 無菌保證 (#1)
  問：哪種方式最能排除微生物引入風險？
  → 全部 RTU 優於 On-Site（NTT 無 biodecontamination 殘留）

Step 2 — 產品 CQAs (#2)
  問：殘留物是否影響藥品穩定性？
  → 若是生物製劑（蛋白質）：避免 H₂O₂
  → 若是小分子：H₂O₂ 和 E-Beam 通常可接受（需測試）

Step 3 — 商業彈性 (#3)
  問：批量、速率、資本預算？
  → 大批量高速：E-Beam 或 On-Site（多隧道）
  → 小批量：NTT RTU（降低驗證負擔）
  → 資本受限：H₂O₂（資本低於 E-Beam）
```

                    

                    

                        

#### CDMO 應用：技術評估工具

                        

當客戶詢問「你們的填充線用什麼方式引入元件？」，正確回答不是列舉設備名稱，而是能解釋：（1）為什麼選這個方式（決策依據）、（2）如何確保 SA（驗證文件）、（3）殘留物測試結果（CQA 保護）。這三點構成監管機構期望看到的完整 CCS 論述。

                    

                

            

        

    

    
    
    
    

        

### Section 8C 總結 — Key Takeaways

        

            

                

核心決策邏輯

                

                    
- 批量大小是 RTU vs. On-Site 的首要篩選變數，但完整損益平衡須含驗證、設備生命週期成本

                    
- 複雜元件（PFS）和 COC 容器幾乎必然走 RTU 路線，不論批量大小

                    
- 烤箱滅菌因人工介入風險而逐步被淘汰，隧道式去熱原是主流

                    
- RTU 引入機制中，NTT 驗證最簡單；H₂O₂/E-Beam 需處理殘留物相容性

                

            

            

                

決策優先順序應用

                

                    
- **#1 無菌保證：**RTU 消除 glass-to-glass 微粒；NTT 消除 biodecontamination 殘留——選擇取決於哪個風險在你的製程中更難控制

                    
- **#2 產品 CQAs：**生物製劑避免 H₂O⁮ 殘留；殘留測試必須完整

                    
- **#3 商業彈性：**CDMO 的多品種多批量特性要求保留多種引入方式的彈性，而非固定單一選擇

                

            

        

        

            PDA Manufacturing Technology Guide No. 1 | Section 8C | p147–p152 | 製作日期：2026-03-15
        

    

⇧

## Topic 9: Component Intro 元件導入 (p152-p161)

# Section 9: Component Introduction and Handling

    

元件導入與處理

    

PDA Manufacturing Technology Guide No. 1 | doc p152 - p161

    

### 本章學習目標

    

        
- 理解初級容器（玻璃/聚合物）進入無菌充填線的四種主要途徑，及其驗證與汙染風險差異

        
- 掌握密封件（stoppers/plungers）的各種形式（On-Site、RTS、RTU）及其在成本、操作複雜度和無菌保證之間的取捨

        
- 了解元件在分類、給料、定向、插入過程中的顆粒風險控制要點

        
- 熟悉捲封蓋（crimp seals）在RABS與隔離器中的不同滅菌要求，以及過濾器導入的多種方式

    

9.0 / 9.1 Component Introduction — Primary Containers

    

        

## 原文內容 Original Text

        

### 9.0 Component Introduction

        

Section 9.0 covers the introduction of components needed to supply the aseptic filling line, including primary packaging (containers and closures) and any other items that need to be transferred into the barrier system (e.g., filters). The mechanistic aspects of material transfer are addressed in Section 10.0.

        

### 9.1 Primary Container Considerations

        

There are numerous considerations for the supply of containers to a filling line. The primary containers covered in this guide include glass vials, cartridges, and syringes, as well as polymer containers. These containers need to be of the highest quality with specific dimensional attributes and Critical Quality Attributes (CQAs) that will allow them to be used in the system for which they have been designed. Chapter 6.0 provides detailed information on the CQAs as they relate to the container–closure integrity.

        

### 9.1.1 Condition of Containers Upon Presentation to the Line

        

The condition of the primary containers at the time of introduction to the filling line is a critical step and can have long-lasting impact on the final product quality. The manner in which they are introduced impacts the level of risk and the design of the filling line. For glass containers and polymer containers, there are four methods of introduction:

        

            
- In-line and On-Site Treatment — Cleaning and depyrogenation of glass containers through a washing machine and depyrogenation tunnel, or washing and sterilization of polymer containers through a washing machine and oven/autoclave.

            
- Ready to Use (RTU) with No-Touch Transfer (NTT) — Presterilized containers supplied by a vendor that are introduced via a semi- or fully-automated debagging process in a controlled environment, without direct human contact with the sterile surfaces.

            
- RTU with External Biodecontamination — Hydrogen Peroxide — Presterilized containers introduced via a vaporized hydrogen peroxide (VPHP) biodecontamination process at the point of entry into the barrier.

            
- RTU with External Biodecontamination — E-Beam — Presterilized containers introduced via electron beam (E-Beam) surface biodecontamination at the point of entry into the barrier.

        

        

The choice of method depends on the type of container (glass vs. polymer), the batch size, the containment technology (RABS vs. isolator), and the manufacturer's overall Contamination Control Strategy (CCS). Table 9.1.1.7 (pages 152–154) provides a detailed comparison of these four methods across multiple considerations.

    

    

        

## 導師解析 Tutorial Commentary

        

            

#### 核心概念解析 Key Concepts

            

**元件導入 (Component Introduction):** 無菌充填線的「進料」問題。本章聚焦三類元件：初級容器（玻璃/聚合物）、密封件（stoppers/plungers/caps）、以及過濾器。每一類都有不同的滅菌與傳遞策略，但共同的核心原則是：進入Grade A環境前必須達到無菌且符合CQA要求。

            

**四種容器導入途徑分類邏輯：**

            

                
- **On-Site Treatment** — 廠內自行清洗+去熱原/滅菌，成本最低但設備投資最大

                
- **RTU + NTT** — 廠商提供預滅菌品，自動化去袋導入，無人手觸碰無菌面

                
- **RTU + VPHP** — 預滅菌品在進入隔離器/RABS前經過氣態過氧化氫除菌

                
- **RTU + E-Beam** — 電子束即時表面除菌，適合大批量但設施成本高

            

        

        

            

#### 比喻說明 Analogy

            

想像你要把食材送進一個「超潔淨廚房」（Grade A）。你有四個選擇：(1) 自己在旁邊廚房洗乾淨再送進去；(2) 訂購已洗好包裝的食材，用機器人自動解包送入；(3) 在廚房入口用蒸氣消毒食材表面再送入；(4) 在入口用高強度電磁波掃描除菌再送入。方法不同，風險點也不同，沒有絕對最好，只有最符合你批量和設施設計的選擇。

        

        

            

#### 重點提示 Key Notes

            

容器導入時機的品質影響是「長尾效應」——導入步驟的一個小失誤（如顆粒污染、玻璃碎屑），可能在最終產品檢驗時才被發現，屆時已完成後續所有製造步驟。因此 EU GMP Annex 1 對元件的CCS要求格外嚴格，CDMO在為客戶設計引入方案時，必須從風險評估（QRM）角度出發，而非單純以成本最低為導向。

            

**決策層級提醒：** 無菌保證 > 產品CQA > 商業成本。當RTU方案的成本高於On-Site處理時，若RTU能提供更可靠的無菌保證，仍應優先選擇RTU。

        

        

            

#### 練習思考 Practice Questions

            

                
1. 一家CDMO正在為一個小批量孤兒藥（每批200瓶）選擇容器導入方式。On-Site Treatment和RTU+NTT哪個更合適？理由為何？

                
2. 為什麼RTU+E-Beam方案更適合大批量生產？與RTU+NTT相比，它的主要額外成本來源是什麼？

            

        

    

Table 9.1.1.7 — Comparison of Container Introduction Methods (p152–p154)

    

        

## 原文內容 Original Text

        

*Table 9.1.1.7: Considerations for Introduction of Primary Packaging Components to the Filling Line*

        

        
            
                
                
                
                
                
            
| Consideration | In-Line and On-Site Treatment | RTU with No-Touch Transfer (NTT) | RTU with External Biodecontamination — Hydrogen Peroxide | RTU with External Biodecontamination — E-Beam |
| --- | --- | --- | --- | --- |
            
                ****
                
                
                
                
            
| Validation | Qualification and validation required for processing. Well-understood processes. | Simpler validation (e.g., no on-site qualification of washer and tunnel, VPHP, or E-Beam). Easy to validate process, ability to demonstrate a clear 6-log reduction in resistant microorganisms. | In-line biodecontamination requires qualification. Easy to validate process, ability to demonstrate a clear 6-log reduction in resistant microorganisms. | In-line biodecontamination requires qualification. Easy to validate process, ability to demonstrate a clear 6-log reduction in resistant microorganism. |
            
                ****
                
                
                
                
            
| Particulate Risk | Potential for glass-to-glass contact depending upon conveyance mechanism. | No glass-to-glass contact. | No glass-to-glass contact. | No glass-to-glass contact. |
            
                ****
                
                
                
                
            
| Residuals Risk | None | None | Risk of oxidizing residuals. | Risk of free radicals or ozone residuals. |
            
                ****
                
                
                
                
            
| Cost of Components | Lower cost of primary packaging compared to RTU. | Primary packaging more expensive, as vendor has additional processing steps. | Less expensive primary packaging than NTT, as single-bag RTU may be sufficient but are more expensive than fully on-site processed components. | Less expensive primary packaging than NTT as single-bag RTU may be sufficient but is more expensive than fully on-site processed components. Initial capital costs may be high. |
            
                ****
                
                
                
                
            
| Optimal Batch Sizes | Large where economies-of-scale can be applied to costs of on-site sterilization. Less economical for small batches of components. | Both large and small batches are optimal. Constraints may be enforced by supplier. | Small batches where the economics favor the increased cost of the components with the elimination of supporting processes (e.g., washing, depyrogenation). | Large batches favored to offset the additional facility and equipment costs (both initial capital expenditure and ongoing operating expenditures due to E-beam emitter maintenance). |
            
                ****
                
                
                
                
            
| Facility Design | More unit operations, additional equipment and utilities required. Smaller overall footprint than on-site and E-Beam options. | Simpler line with fewer unit process operations, less equipment, and fewer additional utilities. Waste material management required for protective packaging removed at point of component introduction. Possible greater cost for additional containment and second debagger, if needed. | In-line biodecontamination increases line complexity. Smaller overall footprint than on-site and E-Beam options. In-line biodecontamination requires additional utilities. | In-line biodecontamination increases line complexity and may impact building construction, thereby increasing the cost of component supply (favoring larger-scale batches). In-line biodecontamination requires additional utilities. |
            
                ****
                
                
                
                
            
| Transfer Classifications | Often directly connected to Grade A (or may transfer from B to A with SteriBags). | Grade transfer C to B and B to A for RABS, or from B/C outside isolator to A with only removal of layers of wrapping. | Grade transfer from C to A with surface biodecontamination. | Grade transfer from C to A with surface biodecontamination. |
            
                ****
                
                
                
                
            
| Nesting Capable? | Generally not | Yes | Yes | Yes |
            
                ****
                
                
                
                
            
| Other Considerations | None | More complexity to demonstrate there is no adverse impact to Grade A at mouseholes within the qualification of the NTT. | None | Radiation protection required to protect operators from X-rays along with Health and Safety officers for the process. |
        

        

    

    

        

## 導師解析 Tutorial Commentary

        

            

#### 核心概念解析 Key Concepts

            

**殘留物風險 (Residuals Risk):** VPHP除菌會在容器表面留下微量氧化性殘留物（過氧化氫），對某些蛋白質藥物可能造成氧化降解。E-Beam則可能產生自由基或臭氧殘留。On-Site和NTT方式無此風險。選擇除菌方式時，必須確認與產品的相容性。

            

**等級轉換 (Grade Transfer):** On-Site直接從Grade A出口接入充填線；RTU+NTT需要C→B→A的多層去袋；VPHP/E-Beam可從C直接到A，中間以除菌步驟替代隔離區域。等級轉換次數越少，人為干預風險越低。

        

        

            

#### 決策矩陣 Decision Framework

            

```

批量大小      小批量        中批量        大批量
玻璃容器  RTU+NTT      RTU+NTT       On-Site 或
          首選         或 On-Site     E-Beam
聚合物     RTU+NTT      RTU+VPHP      RTU+E-Beam
容器       首選         合適          可考慮

嵌套需求(nesting) → 排除 On-Site
殘留物敏感藥物   → 排除 VPHP / E-Beam
輻射防護成本高   → E-Beam 僅大批量才划算
            
```

        

        

            

#### 重點提示 Key Notes

            

**「Mousehole」驗證難點：** NTT系統的傳送帶必須穿過RABS/隔離器壁（稱為mousehole），必須證明這個開口在整個NTT操作過程中不會破壞Grade A的單向氣流。這是NTT驗證中最具挑戰性的部分，也是許多設施在引入NTT時遇到挫折的根源。

            

**嵌套容器(nesting)的商業意義：** 能夠嵌套意味著可以在更小的包裝體積中放入更多容器（如巢狀預填充注射器），大幅降低儲運成本。On-Site方式因傳送帶形式無法支援嵌套，是其商業靈活性的一大劣勢。

        

        

            

#### 練習思考 Practice Questions

            

                
1. 某CDMO客戶的蛋白質藥物對氧化極度敏感。在考慮容器導入方式時，哪些選項應立即排除？剩餘選項中如何做最終決策？

                
2. E-Beam方案需要輻射防護措施，這對廠房設計和人員管理意味著什麼？為什麼說E-Beam「僅適合大批量」？

            

        

    

9.1.1.8 Considerations for Closures (p154–p155)

    

        

## 原文內容 Original Text

        

### 9.1.1.8 Considerations for Closures

        

Closures of all types must be of suitable cleanliness (e.g., low particulate levels) and sterile for use in the Grade A environment. As with primary containers, the decision must be made either to provide Ready to Use (RTU), Ready-to-Sterilize (RTS) components, or to clean and sterilize closures on-site.

        

There are several types of closure systems that are in use, the most common of which are:

        

            
- **Vial stoppers** – Designed to be placed within the neck of the vial, they can be of different sizes and shapes that may be fully or partially inserted (e.g., liquid vs. lyophilized). From a functional standpoint, the stopper needs to ensure a tight fit with respect to permeation and entrainment (e.g., product loss, gas exchange, microbiological contamination) at all temperatures the vial and stopper will encounter throughout shelf life and use periods (e.g., freeze-drying, freezing, refrigeration, room temperature). For multi-dose containers, the stoppers need to be self-sealing to withstand multiple punctures.

            
- **Snap closures** – May be an integrated part of the container that are, for example, intended for special low-temperature applications. They are designed for tight sealing even under conditions of ultra-low-temperature freezing and through multiple freeze–thaw cycles.

            
- **Cartridge disc seals** – Include both a rubber disc (potentially composed of two different elastomers) and a crimp seal. For proper function, they need to ensure a tight fit when pressurized from inside while maintaining self-sealing properties when cartridges comprise a multi-dose container. With cartridge disc seals, the potential for particulate release is higher compared to other elastomers due to the integrated crimp seal that is applied near the filler.

            
- **Cartridge and syringe plungers** – Incorporate an elastomer on the end of a rigid plunger rod. The elastomeric end should ensure both a tight fit against the walls of the cartridge or syringe barrel, as well as low shear to ensure geometrical displacement with the application of low force during dose delivery.

            
- **Syringe-needle elastomer** – In addition to ensuring a microbiological barrier, this elastomer must be permeable to gases, such as EtO, used for sterilizing the syringe barrel.

        

        

In-house sterilization can be performed with automatic stopper-processing systems that clean, siliconize (when required), dry, and sterilize or through semiautomatic systems that use a wash/siliconize/dry process followed by separate processing in an autoclave. These processes require the firm to possess good knowledge of siliconization, as well as particulate, sterility, and endotoxin control.

        

Integrated container–closure systems, such as snap closures on polymer containers, are a more recent innovation for aseptically-filled products. Like elastomeric closures, the essential quality attributes of cleanliness (including particulate level) and sterility apply. Due to the polymeric materials of construction, these are typically supplied RTU after being gamma-irradiated.

    

    

        

## 導師解析 Tutorial Commentary

        

            

#### 核心概念解析 Key Concepts — 五種密封件類型

            

**Vial Stopper（西林瓶膠塞）:** 最常見。需在整個儲存週期（含凍乾、冷凍、室溫）保持氣密。多劑量瓶需可自我密封（self-sealing）以承受多次穿刺。

            

**Snap Closure（卡扣密封）:** 整合於聚合物容器，專為超低溫（-80°C）設計，可承受多次凍融。通常gamma輻射後以RTU形式供應。

            

**Cartridge Disc Seal（卡匣碟型密封）:** 橡膠碟+捲封的組合，顆粒釋放風險比其他彈性體高，因為捲封部位靠近充填口。

            

**Plunger（推桿/活塞）:** 需同時滿足氣密性和低推動力（low actuation force），是注射器/卡匣的關鍵元件。

            

**Syringe Needle Elastomer（針頭彈性體）:** 必須對EtO（環氧乙烷）氣體具滲透性，因為滅菌針筒時EtO需穿透此材料。這是材料選擇的特殊要求。

        

        

            

#### 重點提示 Key Notes

            

**矽化（Siliconization）的關鍵性：** 矽化是用矽油塗覆橡膠密封件內表面，目的是降低推桿阻力、防止膠塞黏連、改善給料流動性。但矽油本身是潛在的顆粒來源，矽油過多也可能影響產品相容性。矽化的均勻性和用量控制是廠內處理中最需要Know-How的步驟，也是許多CDMO選擇RTU而非On-Site處理的根本原因。

            

**Snap Closure的成長趨勢：** 隨著生物製劑超低溫儲存（cell gene therapy等）需求增加，snap closure的應用正快速增長。這類元件通常由polyolefin等聚合物製成，以gamma輻射滅菌後RTU供應，廠方完全不需要自行處理滅菌。

        

        

            

#### 練習思考 Practice Questions

            

                
1. 一個客戶要求凍乾製劑（lyophilized product）用的西林瓶膠塞，在選擇stopper時，什麼是最關鍵的功能性要求？

                
2. 為什麼cartridge disc seal的顆粒風險高於其他彈性體密封件？這對IPC策略有什麼影響？

            

        

    

9.1.2 Condition of Closures Upon Presentation to the Line + Table 9.1.2-1 (p155–p158)

    

        

## 原文內容 Original Text

        

### 9.1.2 Condition of Closures Upon Presentation to the Line

        

Whether performed in-house or at a vendor site, multiple factors must be considered with regard to the condition of the elastomers and closures when they emerge from pretreatment steps (e.g., washing, sterilization). In all cases, the pretreatment processes and post-treatment handling (e.g., packaging operations, quantity per package, weight per package) must be designed to:

        

            
- Reduce the incidence of one closure being stuck to or entwined with another

            
- Prevent deformation (e.g., prevention of deformation of the aluminum portion of combination seals, prevention of deformation of the plunger through twisting or bending, or deformation of the ribs that would affect plunger alignment during insertion or during deployment at dosing)

            
- Prevent dissociation of combination seals (e.g., dissociation of disc seals, where a crimp seal is found without an elastomer, an elastomer is found without the crimp seal, or where their positions are inverted)

            
- Prevent damage to integrated caps to minimize the risk of breakage at the attachment point (e.g., snap closures)

            
- Ensure dryness (e.g., for moisture-sensitive products, for lyophile elastomers)

        

        

Automatic stoppering systems often provide discharge and connection through a Rapid Transfer Port (RTP) to the Grade A environment. In the case of treatment with an autoclave step, this can be accomplished with a RTP or through a bag-transfer system under Grade A air supply when supplying a RABS that is not equipped with RTP technology. Lift technology may need to be considered in the footprint of the filling line to elevate the elastomers to the hoppers that will feed the components to the closure station.

        

When procuring RTU or RTS components, strong collaboration between the supplier and the end user is required to guarantee the necessary quality. The advantages and disadvantages of on-site treatment versus RTS or RTU elastomers are highlighted in Table 9.1.2-1.

        

### Table 9.1.2-1: Considerations for On-Site Treatment Versus Ready-to-Sterilize or Ready to Use Elastomers

        

        
            
                
                
                
            
| Option | Potential Advantages | Potential Disadvantages |
| --- | --- | --- |
            
                ****
                
- 

                
- 
- 
- 
- 
- 
- 
- 

            
| On-Site Treatment | Slightly lower cost of elastomers compared to RTU siliconization | Requires knowledge of elastomer particle control, siliconization, sterilization, and endotoxin control                         Requires more unit operations than RTU, resulting in greater equipment expense and larger layout                         Requires greater utility consumption                         Requires secondary packaging in SteriBags or RTP pressure-containers for transfer to filling line                         Often requires heavy-duty lifting systems requiring significant footprint                         Requires qualification and process validation                         Less economical approach for small batches |
            
                ****
                
- 
- 
- 
- 
- 

                
- 
- 
- 

            
| Ready-to-Sterilize (RTS) Utilizing a Rapid Transfer Port (RTP) with RABS or Isolator | Fewer unit operations as no stopper-washer required                         Simpler validation (no qualification or process validation of a stopper-washer)                         Reduced contamination risk                         Fewer required utilities                         Easier process for autoclaving cycle due to larger breathing surface | More expensive, as elastomer supplier has additional processing steps and provides beta port for mating with site alpha port                         Elastomer supplier must maintain close communication for bag specifications and controls to support sterilization process control                         Risk of particulate contamination can still be present if transfer to a SteriBag or a component processing system is required at the receiving site |
            
                ****
                
- 
- 
- 
- 

                
- 
- 
- 

            
| Ready-to-Sterilize (RTS) Utilizing SteriBags with RABS | Fewer unit operations as no stopper-washer is required                         Simpler validation                         Fewer utilities required                         Simpler process for autoclaving cycle due to larger breathing surface | Elastomer supplier must maintain close communication for bag specifications and controls                         Complex process with multiple points of risk for opening SteriBags (e.g., transport, peeling, spraying, opening, feeding)                         Potential risk of contamination transfer during opening of the SteriBag |
            
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

            
| Ready to Use (RTU) with RABS or Isolator | Fewer unit operations as no stopper-washer or autoclave required for elastomers                         Simpler validation (no qualification or process validation of a stopper-washer or an autoclave cycle)                         Reduced contamination risk when using RTP transfer                         Fewer utilities required | More expensive as elastomer supplier has additional processing steps and provides beta port for mating with site alpha port or multiple layers of SteriBags                         Complex process with multiple points of risk for opening SteriBags                         Potential risk of contamination transfer during opening of SteriBags                         May have prolonged development times for specialty components that are not always available in RTU format                         Limited components per bag |
        

        

    

    

        

## 導師解析 Tutorial Commentary

        

            

#### 核心概念解析 Key Concepts

            

**RTS vs RTU 的本質差異：**

            

                
- **RTS (Ready-to-Sterilize，待滅菌即用型)：** 廠商已完成清洗和矽化，以特殊包裝（beta port容器或SteriBag）交貨，由使用方廠內進行最終高壓滅菌後才能使用。

                
- **RTU (Ready-to-Use，即用型)：** 廠商已完成所有處理（含最終滅菌），使用方直接開袋使用，不需要任何額外滅菌步驟。

            

            

**RTP（快速傳遞口）:** alpha port固定在RABS/隔離器壁，beta port在元件容器上，兩者對接後不暴露內容物於外部環境。是目前最優先選擇的無菌元件傳遞方式（詳見Section 10.0）。

        

        

            

#### 比喻說明 Analogy

            

想像在醫院手術室補充手術器械。On-Site就像醫院自己洗碗機+高壓釜消毒，需要知識和設備；RTS像是廠商送來「洗好但尚未消毒」的器械，醫院自行高壓滅菌；RTU則像是「已滅菌無菌包裝」直接開袋使用。越往RTU走，使用方的複雜度越低，但對供應商品質管控的依賴越高，採購成本也越高。SteriBag就像是多層無菌袋，拆袋過程本身就是一個風險控制步驟。

        

        

            

#### 重點提示 Key Notes

            

**「Lift Technology」常被忽略：** 滅菌後的膠塞在SteriBag或壓力容器中，需要被舉升到充填線上方的料斗（hopper）高度，方能靠重力給料。這個「升降系統」往往佔用大量地板面積，在廠房設計階段就必須預留，否則事後改造代價極高。CDMO在設計廠房時應特別注意充填線與密封件給料系統的垂直空間需求。

            

**RTU的開發周期風險：** 特殊規格密封件（非標準尺寸或特殊彈性體配方）可能沒有現成的RTU產品，開發RTU版本可能需要6-18個月。對CDMO而言，在接受客戶委託時必須確認其密封件規格是否有RTU供應選項，否則上市時程可能受阻。

        

        

            

#### 實務應用 Practical Application

            

一個CDMO同時承接三個項目：(A) 大批量標準西林瓶生物製劑；(B) 小批量孤兒藥預填充注射器；(C) 凍乾製劑快速開發專案（上市時限緊）。

            

                
- 項目A：考慮On-Site處理（規模效益）或RTS+RTP（降低知識要求）

                
- 項目B：RTU首選（小批量不划算on-site，注射器plunger需精確矽化）

                
- 項目C：RTU首選（省去on-site驗證時間，加快上市）——但需確認凍乾用stopper有RTU供應

            

        

    

9.1.3 Sorting/Supply at Filler and Closing (or Partial-Closing) Stations (p158–p159)

    

        

## 原文內容 Original Text

        

### 9.1.3 Sorting/Supply at Filler and Closing (or Partial-Closing) Stations

        

Bulk components like plastic containers (such as droptainers for ophthalmics) and elastomers are supplied to the filling line in large volume to reduce the frequency of replenishment. Regardless of the type of container–closure and the number of stations required for their insertion, the use of bulk-supplied components commonly requires a sorting device(s) that orients the component in the correct position for filling or insertion. In addition, a bulk hopper may periodically feed components to the sorting station to avoid frequent human intervention. Consideration should be given to the needed size of the bulk hoppers to plan for the overall size of the batch and the number of packages of components that will be required. The hopper may be sized to limit the number of times the replenishment operation will be required.

        

Although feeding by gravity is preferable, gravity-feeding is commonly augmented with vibratory functions to ensure that the components flow easily from the hopper to the sorting station. The sorting station may also make use of vibratory feeding to assist with separation and orientation functions. Vibration, gravity, and/or vacuum may also be used at the point of insertion. Care should be taken to measure and control the particulate at these important equipment locations as the vibration and friction of moving components can generate or loosen particulate. In addition, care should be taken to ensure that the supply, sorting, orientation, and insertion mechanisms do not damage components in any way. Handling and point-of-insertion delivery (as well as all intended pretreatment steps) should be demonstrated during validation, as closure damage may result in the loss of performance of sealing surfaces or loss of performance of components, such as plungers.

        

Specialty preparations, such as some suspensions, may require glass or stainless-steel beads to be inserted within the primary container. While the beads are not closures, the operations required for the insertion of these components are similar in that they typically include vibratory feed, gravity, and vacuum. Therefore, the same considerations as those described for supply and feeding of closures would apply.

        

Airflow studies within the Grade A environment should demonstrate controlled unidirectional airflow during the intermittent (or continuous) vibratory episodes at the equipment locations. This requirement would also apply to other locations that are subject to accumulation (e.g., turntables, bi-flow tables, loader unloaders) that might result in intermittent container-on-container contact and generate particulate.

    

    

        

## 導師解析 Tutorial Commentary

        

            

#### 核心概念解析 Key Concepts

            

**給料系統三要素：**

            

                
- **Bulk Hopper（料斗）：** 儲存大量元件（膠塞/瓶蓋），靠重力持續向分類站給料，減少人工補料頻率。料斗容量要根據批量大小設計，目標是讓單次充填批次中人工干預次數最少化。

                
- **Sorting Device（分類定向裝置）：** 讓元件以正確方向（例如膠塞朝上）進入插塞站。通常使用震動盤（vibratory bowl feeder）或線性振動器。

                
- **Point of Insertion（插入點）：** 真空吸附常用於此步驟，確保元件在充填/插塞時精確就位。

            

            

**Glass/SS Beads（懸浮劑用玻璃珠/不鏽鋼珠）：** 某些懸浮型製劑需要在容器內放入攪拌珠，以便患者使用前搖晃均勻。其插入方式與膠塞類似（振動、重力、真空），適用同樣的顆粒控制和氣流驗證要求。

        

        

            

#### 重點提示 Key Notes

            

**振動是顆粒的頭號產生源：** 震動給料雖然是讓元件流動的必要手段，但振動導致橡膠/玻璃表面相互摩擦，是Grade A內顆粒的主要來源之一。EU GMP Annex 1要求必須在振動操作期間（包括間歇性振動）驗證單向氣流的維持。許多廠房在APS（無菌製程模擬）和環境監測異常中，振動相關位點往往是問題熱點。

            

**料斗尺寸的商業計算：** 料斗太小 → 補料頻繁 → 人工干預增加 → 污染風險升高；料斗太大 → 膠塞在高溫/振動環境中長時間暴露 → 品質風險。需要在批量、生產速度和干預風險之間找到平衡點。

        

        

            

#### 比喻說明 Analogy

            

想像自動販賣機的理念：零食（膠塞）放在料斗，靠重力+震動流向螺旋道（sorting），最後用精確機構（vacuum）把它推到正確位置（插塞）。差異在於：這台「自動販賣機」在手術室等級的環境裡運作，每一次震動都可能產生落塵，必須有單向氣流持續帶走這些顆粒。驗證這套系統的重點，就是在最惡劣的運作條件下（最大振動頻率、料斗最滿時）証明氣流仍維持單向流動。

        

        

            

#### 練習思考 Practice Questions

            

                
1. 充填線在批次中途補充膠塞料斗時，這個補料動作需要記錄在批次記錄中嗎？從EU GMP Annex 1的角度，這個操作有什麼需要特別注意的？

                
2. 如果你發現APS（無菌製程模擬）中，膠塞給料區的環境監測數據偏高，你會優先採取什麼調查步驟？

            

        

    

9.1.4 Crimp Seals and Caps (p159)

    

        

## 原文內容 Original Text

        

### 9.1.4 Crimp Seals and Caps

        

Sterilized crimp seals and caps are required in isolators where the capper is within the Grade A environment of the isolator. Sterilized crimp seals and caps are not mandatory for most conventional operations (e.g., RABS), but can be prepared as either sterile or nonsterile, according to the site Contamination Control Strategy (CCS). When upgraded to a sterile state, the intent is to provide additional protection of the closure and capping environment.

        

For applications that make use of RTPs (e.g., isolators, some RABS), caps can be fed into a polymer or stainless-steel transport container (with or without sterility). Special care must be taken to prevent damage or deformation of the seals/caps when handling them in bulk; therefore, a RTP with a soft-sided transfer bag is not typically recommended.

    

    

        

## 導師解析 Tutorial Commentary

        

            

#### 核心概念解析 Key Concepts

            

**鋁捲封蓋（Crimp Seal）的滅菌要求差異：**

            

                
- **隔離器（Isolator）：** 壓封機（capper）位於隔離器Grade A環境內，捲封蓋必須滅菌後才能導入。原因：隔離器的CCS依賴全封閉無菌狀態，任何未滅菌元件進入都會破壞這個前提。

                
- **RABS：** 壓封機通常在RABS外部（Grade B/C），捲封蓋不強制要求滅菌，但可根據廠方CCS選擇性滅菌以提供額外保護。

            

            

**不建議軟袋（soft-sided bag）裝捲封蓋的原因：** 鋁蓋質地硬，在軟袋中因裝填和搬運的衝擊容易變形（deform），變形的捲封蓋可能在壓封時無法形成良好密封，導致CCI（容器密封完整性）失效。

        

        

            

#### 重點提示 Key Notes

            

**CCS驅動選擇：** EU GMP Annex 1強調整廠的污染控制策略（CCS）必須是一個整體性的文件，涵蓋所有元件的潔淨等級和滅菌狀態。捲封蓋是否需要滅菌，不是各線單獨決定的，而是CCS分析（包括FMEA/風險評估）的結論。CDMO為多個客戶同時生產時，不同客戶的產品可能對捲封蓋有不同的CCS要求，必須在批量記錄和SOP中清楚區分。

        

        

            

#### 練習思考 Practice Questions

            

                
1. 一條RABS充填線上同時生產兩種產品：一個是高風險免疫抑制劑，另一個是普通維生素注射液。在制定捲封蓋的CCS時，這兩個產品應該使用同樣的標準嗎？如何在CCS中記錄這種差異化決策？

                
2. 為什麼隔離器需要滅菌捲封蓋，而RABS不強制要求？從無菌保證的設計哲學角度解釋。

            

        

    

9.1.5 Considerations for Filters (p159–p160)

    

        

## 原文內容 Original Text

        

### 9.1.5 Considerations for Filters

        

For certain operations (e.g., nitrogen-gassing, vacuum-filling, product sterile-filtration), filter cartridges might need to be transferred into the barrier (see Section 11.0). There are different ways to introduce filters:

        

            
- Transfer via RTP container as a preassembled autoclaved configuration

            
- Transfer via RTP container/bag for aseptic installation within the barrier

            
- Transfer via RTP as a preassembled, presterilized, gamma-irradiated system

            
- Transfer of the autoclaved filter enclosed within a SteriBag as an autoclaved, preassembled configuration

            
- Transfer of the autoclaved filter enclosed within a SteriBag for aseptic installation within the barrier

        

        

Filters can also be installed as nonsterile components during line setup but then would need to undergo a CIP/SIP cycle and external biodecontamination after installation before use.

    

    

        

## 導師解析 Tutorial Commentary

        

            

#### 核心概念解析 Key Concepts

            

**過濾器導入的六種方式：**

            

                
- **RTP + 預組裝高壓滅菌：** 過濾器在隔離器外組裝並高壓滅菌，裝入RTP容器後對接導入。最常見且風險最低的方式。

                
- **RTP + 無菌安裝：** 未組裝的過濾器元件透過RTP進入隔離器，在Grade A內部完成無菌組裝。需要更高的無菌操作技能。

                
- **RTP + Gamma輻射預滅菌：** 單次性過濾系統，出廠即滅菌，透過RTP導入。常用於一次性使用（SU）充填系統。

                
- **SteriBag + 預組裝高壓滅菌：** 類似第一種，但用SteriBag代替RTP容器。適用於無RTP設備的RABS。

                
- **SteriBag + 無菌安裝：** 元件在SteriBag中，導入後在Grade A內組裝。

                
- **非無菌導入 + CIP/SIP：** 過濾器以非無菌狀態安裝在充填線上，安裝後整條管路進行就地清洗（CIP）和就地滅菌（SIP），再進行外部生物除菌。適用於多次性過濾系統的大批量生產。

            

        

        

            

#### 比喻說明 Analogy

            

把過濾器想成手術中要植入體內的醫療器械。有些醫院自己在手術前高壓消毒（廠內高壓滅菌），有些直接用廠商出廠時就已用gamma輻射滅菌的免洗型（SU gamma），有些則是先送入手術室（隔離器），再由外科醫生戴手套在無菌環境中組裝（無菌安裝）。最後一種（非無菌裝置後CIP/SIP）就像是先把器械放進去，再用消毒液沖洗整個腔室，適合大批量但步驟最繁瑣。

        

        

            

#### 重點提示 Key Notes

            

**過濾器導入方式與PUPSIT的連動：** 無論過濾器如何導入，按照 EU GMP Annex 1 的要求，產品除菌過濾後的過濾器必須進行PUPSIT（使用前滅菌後完整性測試）。過濾器的導入方式影響PUPSIT測試的時機和操作便利性——預組裝並滅菌的過濾器系統可在線外完成完整性測試，再以確認完整性的狀態導入，降低在線測試的複雜度。

            

**CIP/SIP方式的驗證挑戰：** 非無菌導入後CIP/SIP，每次安裝後的SIP循環效果必須透過生物指示劑（BI）或等效方法驗證。這種方式增加了製程步驟和驗證負擔，但對多次性SU替換成本高的大型過濾系統而言，仍具有成本效益。

        

        

            

#### 練習思考 Practice Questions

            

                
1. 一條配備隔離器的新充填線，計畫使用一次性過濾系統。你會建議哪種過濾器導入方式？說明理由，並指出該方式在驗證上的關鍵要求。

                
2. CDMO同時運行RABS和隔離器兩種充填平台。為什麼RABS平台更可能採用「SteriBag + 預組裝高壓滅菌」方式，而隔離器平台更可能採用「RTP + gamma輻射預滅菌」方式？

            

        

    

    

### 本節重點回顧 Section Summary

    

        
- **四種容器導入方式**（On-Site、RTU+NTT、RTU+VPHP、RTU+E-Beam）各有其最佳應用場景：批量大小、殘留物風險、廠房設計都是關鍵決策因子，沒有普適最優解

        
- **五種密封件類型**（vial stopper、snap closure、cartridge disc seal、plunger、syringe-needle elastomer）各有其獨特CQA要求；矽化知識和顆粒控制是廠內自行處理（On-Site）的核心Know-How

        
- **On-Site vs RTS vs RTU** 的取捨不只是成本問題：RTS需要廠商緊密協作管控滅菌條件；RTU需要特殊規格產品有供應，且每袋容量有限；兩者都因減少廠內單元操作而降低驗證負擔

        
- **給料系統的顆粒風險**：震動是Grade A內顆粒的主要來源，氣流驗證必須在最惡劣振動條件下進行；料斗容量設計需平衡補料頻率與元件在環境中的暴露時間

        
- **捲封蓋滅菌要求**：隔離器內封蓋必須滅菌（因CCS完全封閉設計），RABS非強制但可納入CCS；不建議軟袋傳遞鋁蓋（易變形影響CCI）

        
- **過濾器導入六種方式**：從RTP預組裝滅菌到非無菌安裝後CIP/SIP，選擇依據是設備類型（RABS/隔離器）、SU或多次性、以及PUPSIT測試的操作需求

        
- **決策層級再確認**：所有元件導入策略的最終評判標準 — 無菌保證 > 產品CQA > 商業成本與靈活性

    

⇧

## Topic 10: Sterilization 滅菌準備 (p161-p167)

# Section 10: Material Transfer System Design — Conveyance, Docking & Sterilization

    

物料傳送系統設計：輸送、對接與滅菌策略

    

PDA Manufacturing Technology Guide No. 1 | p161 - p167

    
    

        

#### 決策優先順序 Decision Hierarchy

        

            

1

            

**無菌保證 Sterility Assurance** — 所有傳送設計的最高原則

        

        

            

2

            

**產品關鍵品質屬性 Product CQAs** — 病患安全不妥協

        

        

            

3

            

**商業與彈性 Business & Flexibility** — 在前兩者確保後再優化

        

    

    
    

        

### 本章學習目標

        

            
- 區分物料傳送的兩大類別：輸送（Conveyance）與對接（Docking）

            
- 理解 RTP（快速傳送口）的 alpha-beta port 設計與「ring of concern」風險

            
- 掌握玻璃器皿輸送的挑戰與引導輸送機制的重要性

            
- 了解不同滅菌方式（氫過氧化物、蒸汽、乾熱）與物料傳送的整合設計

            
- 認識 Section 11.0 無菌過濾流程設計的引導要點

        

    

    
    

        

            

10.0

            

                

## Material Transfer System Design — Overview

                

物料傳送系統設計總論

            

        

        

            

                

                    

### 10.0 Material Transfer System Design

                    

Section 9.0 addressed the various methods of preparing and handling materials. Section 10.0 addresses the mechanistic aspects of material transfer. When considering the mechanisms to introduce sterile or depyrogenated components to a filling system, they can be divided into two categories: conveyance or docking.

                

                

                    

### 中文解析

                    

                        

#### 兩大傳送類別定義

                        

第 9.0 節講「如何準備與處理物料」，第 10.0 節則聚焦「物料如何實際進入充填系統的機械方式」。所有方式分為兩類：

                        

                            
- **Conveyance（輸送）**：物料透過輸送帶等機構連續移動進入系統

                            
- **Docking（對接）**：容器或設備直接與 RABS/Isolator 壁面對接後傳入

                        

                    

                    

                        

#### 生活比喻

                        

想像一家醫院手術室的物料進入方式：輸送就像廚房的輸送帶把餐盤送到手術室外的走廊；對接則像「氣密傳遞艙」——物品放入外箱後，和手術室的密封口直接接合，不讓外部空氣進入。

                    

                

            

        

    

    
    

        

            

10.1

            

                

## Conveyance for Material Transfer

                

輸送機制的物料傳送

            

        

        

            

                

                    

### 10.1 Conveyance for Material Transfer

                    

Conveyors are the traditional mechanism of movement through a filling system. Conveyors permit the direct connection from one piece of equipment to another. An example is a tunnel conveyor exit across a dead plate to the filling-system accumulator-table or filling conveyor.

                    

NTT systems (automatic or semiautomatic outer-bag and inner-bag removal that introduces a presterilized tub or tray within the barrier) generally fall within the conveyor category since after robotic entry, the tub or tray may be subjected to conventional conveyance or complete robotic movement.

                    

Conveyance systems are typically used for components.

                

                

                    

### 中文解析

                    

                        

#### 輸送（Conveyance）的核心機制

                        

傳統的輸送帶系統讓設備之間可以直接相連，物料在受控環境中連續流動。典型應用：

                        

                            
- **除熱原隧道爐（Depyrogenation Tunnel）** 出口 → 死板（dead plate）→ 積料台（accumulator table）→ 充填輸送帶

                            
- **NTT（Nest & Tub Technology）系統**：機器人拆除外袋/內袋後，預先滅菌的巢式托盤（tub/tray）以輸送或全機器人方式傳送進入屏障

                        

                        

輸送方式主要用於**零組件（components）**，如小瓶、針管等。

                    

                    

                        

#### NTT 系統比喻

                        

NTT 就像外賣的「層層包裝剝除」：最外層紙袋（outer bag）→ 機器人撕掉；內層保潔袋（inner bag）→ 再撕掉；最裡面的針管巢式托盤已是無菌的，直接送進隔離器。每層包裝就是一層汙染屏障。

                    

                    

                        

#### CDMO 應用思考

                        

若您的產線同時生產預填充針筒（PFS）與玻璃小瓶（vial），NTT 系統對 PFS 特別適合，因為針管已在托盤中整齊排列。但 vial 線若使用散裝充填，則仍依賴傳統隧道爐輸送帶。您的設施兩種模式都需要嗎？早期設計時就要考慮。

                    

                

            

        

    

    
    

        

            

10.2

            

                

## Docking for Material Transfer

                

對接機制的物料傳送

            

        

        

            

                

                    

### 10.2 Docking for Material Transfer

                    

Docking is the process of connecting a bag, cannister, or other transport element (e.g., transport isolator) to a RABS or isolator wall. Direct connection of equipment discharge-doors (autoclaves, ovens, lyophilizers) through the walls of a RABS or isolator also falls into this category.

                    

Both direct-equipment connection and canister-connection commonly require an isolator or RABS glove with a tool or robotic system to perform unloading/discharge intervention.

                    

Reducing manual interventions is an important step in reducing contamination risk at all points of entry. When designing docking interfaces, consideration should be given to end-to-end mechanisms of transfer for each component, especially for critical-product-contact or indirect-product-contact materials. For example, when using an RTP to deliver stoppers or caps to feed bowls, avoiding disruption of unidirectional airflow can be extremely difficult.

                    

When operations are performed manually using isolator or RABS gloves, ensure glove location and length is suitable. For isolators, glove positions must permit gloves to be extended (without overlap) to perform biodecontamination, while not obstructing other isolator elements.

                

                

                    

### 中文解析

                    

                        

#### 對接（Docking）的定義與範圍

                        

對接是指將運輸容器（袋、罐）或設備排放門，直接連接到 RABS/Isolator 壁面上的過程：

                        

                            
- 高壓蒸汽滅菌釜（Autoclave）的排放門 → 直接對接到 Isolator

                            
- 乾熱箱（Oven）排放門 → Isolator 壁

                            
- 凍乾機（Lyophilizer）排放門 → Isolator 壁

                            
- RTP 罐（canister）→ Alpha port → Isolator 壁

                        

                        

無論哪種對接，通常都需要手套操作或機器人系統來完成卸料。

                    

                    

                        

#### 重要警示：減少手動介入

                        

每一個進入點（point of entry）都是潛在的汙染風險。設計原則：

                        

                            
- 盡量減少手動介入次數 → 降低汙染風險

                            
- 設計時要思考每種物料的端到端傳送路徑（end-to-end）

                            
- RTP 送入塞子（stoppers）或蓋子（caps）時，幾乎不可能不干擾單向氣流（UDAF）——這是設計挑戰，須特別規劃

                        

                    

                    

                        

#### 手套位置設計比喻

                        

Isolator 的手套位置就像在透明壓克力箱裡工作：手套太短搆不到目標，太長則和相鄰手套重疊；而在做生物去汙（H₂O₂ 噴霧）時，手套必須「展開」讓汽相能覆蓋整個手套表面——設計師必須把這三種狀態（工作、展開、不干擾其他元件）同時考慮。

                    

                

            

            
            

                

                    

### RTP and Docking Technology Details

                    

RTP canisters and ported bags are established docking technologies. Each container is equipped with a beta port matched to an alpha port on the filling enclosure. These mating surfaces prevent nonsterile external surfaces from being exposed to components or the filling zone.

                    

Despite this, if surfaces are not carefully handled and routinely disinfected/biodecontaminated/sterilized, a "ring of concern" exists at the juncture of mating surfaces.

                    

Transport containers or bags must be filled, pretreated, transported, and then attached; therefore limited in size and weight. Contents (components, tools, small equipment parts) positioned loosely for ease of removal — when containers are connected and rotated, components may shift. Suppliers have proprietary alpha-beta port connection designs that may not be compatible with fixed mounting surfaces already installed — highlights importance of coordinating with component suppliers early.

                    

Transport containers are flexible in terms of size, load, and positioning — can be used for components (glassware, stoppers), consumables (tubing sets, filtration apparatus), or equipment (tools, fill pumps, chutes). When using hydrogen peroxide to biodecontaminate transport containers that include product-contacting materials, care must be taken to ensure residual hydrogen peroxide does not degrade the product through oxidation.

                

                

                    

### 中文解析

                    

                        

#### RTP（Rapid Transfer Port）Alpha-Beta Port 設計

                        

RTP 是無菌傳送的核心技術。其原理：

                        

                            
- **Alpha port**：固定在 Isolator/RABS 壁面上的接口（固定側）

                            
- **Beta port**：裝在運輸罐（canister）上的接口（可移動側）

                            
- 兩者咬合時，各自外表面相互覆蓋，理論上不暴露非無菌面給充填區

                        

                        

但「理論上」不等於「實際上安全」——接合面的縫隙（"ring of concern"）仍是風險熱點。

                    

                    

                        

#### 「Ring of Concern」風險區

                        

Alpha-beta port 接合處的環形縫隙是汙染最可能潛伏的地方。即使設計上已防止非無菌面直接暴露，若不定期消毒/生物去汙，此縫隙仍可能藏菌。

                        

**操作要求**：每次對接前後，alpha 和 beta port 的環形面必須按照 SOP 進行消毒或生物去汙（H₂O₂ 擦拭或噴霧）。

                    

                    

                        

#### 供應商相容性：早期溝通的重要性

                        

Alpha-beta port 是各廠商的**專有設計（proprietary）**，A 廠的 beta port 不一定能對接 B 廠的 alpha port。若設施已裝好固定的 alpha port 才發現與供應商的罐子不相容，改裝成本極高。

                        

**原則**：在設施設計階段就與零組件供應商確認接口規格，避免日後返工。

                    

                    

                        

#### H₂O₂ 殘留與產品氧化風險

                        

用氫過氧化物（Hydrogen Peroxide, H₂O₂）對含有產品接觸材料的運輸容器進行生物去汙時，若殘留量過高，H₂O₂ 的強氧化性會降解藥品——尤其是蛋白質藥物、抗氧化劑敏感製劑。

                        

**決策優先順序提醒**：無菌保證（去汙）vs. 產品 CQA（防氧化），兩者都是優先項，必須透過製程驗證找到安全的殘留上限。

                    

                    

                        

#### 理解確認問題

                        

為什麼設計 RTP 對接介面時，即使 alpha-beta port 已理論上防止非無菌面暴露，仍需要定期消毒？「ring of concern」的風險來源是什麼？

                    

                

            

        

    

    
    

        

            

10.3

            

                

## Conveyance Considerations for Glassware

                

玻璃器皿輸送的注意事項

            

        

        

            

                

                    

### 10.3 Conveyance Considerations for Glassware

                    

For nested components, conveyance system handles the tub or removes the nest and conveys it alone. Tubs and nests are molded plastic components — highly dimensionally reproducible, few challenges.

                    

Individual glass components that are individually and directly conveyed may present greater challenges. Variations in glass dimensions may result in containers that are unstable on the conveyor or fit inconsistently within feed screws, star wheels, walking beams, or combs. Primary containers may topple at transition points — requires downed- or fallen-container sensors or rejection stations.

                    

Guided conveyance (feed screws, star wheels, combs, pucks, fitted guiderails) are better at precision placement under fill-needles than components fed through back-pressure. This is especially important for small-neck openings or small barrels where centered targeting prevents:

                    

                        
- Chips on sealing surface from needle contact

                        
- Bent needles

                        
- Overspray on necks/sides

                    

                    

Many filling systems use a combination of back-pressure in some areas with guided containers under filling needles and stoppering positions. Areas with back-pressure or accumulation devices may increase scuffing risk on container exteriors — can result in cosmetic defects or particulate formation.

                

                

                    

### 中文解析

                    

                        

#### 巢式（Nested）vs. 散裝（Bulk）玻璃器皿輸送

                        

**巢式塑料托盤（tub/nest）**：注塑成型，尺寸高度一致，輸送挑戰少。適合 PFS、卡匣（cartridge）。

                        

**散裝玻璃小瓶（bulk vials）**：玻璃吹製有公差，尺寸略有差異。散裝直接輸送時可能：

                        

                            
- 在輸送帶上不穩定

                            
- 進不了送瓶螺桿（feed screw）或星輪（star wheel）

                            
- 在轉換點（transition point）倒瓶

                        

                        

需要設置「倒瓶偵測器」或「拒絕站」，防止倒瓶進入充填位置。

                    

                    

                        

#### 引導輸送（Guided Conveyance）的重要性

                        

引導輸送機制（feed screw, star wheel, comb, puck, guiderail）的優勢：

                        

                            
- **精確定位**：充填針與瓶口完全對中，防止針頭偏移

                            
- **防止玻屑**：針頭不偏移，不碰撞密封面（sealing surface），不產生玻璃碎屑

                            
- **防止針頭彎曲**：對中準確，避免針頭受側向力

                            
- **防止溢噴**：充填液不噴到瓶頸/瓶身外側

                        

                        

小瓶口（small neck）或小桶徑（small barrel）的容器，對精準度要求更高。

                    

                    

                        

#### 背壓積料（Back-Pressure）的風險

                        

背壓積料區讓瓶子互相擠壓以維持連續送瓶流，但這會造成：

                        

                            
- **外觀缺陷（cosmetic defects）**：瓶身刮傷（scuffing）

                            
- **微粒污染（particulate formation）**：玻璃表面摩擦產生的微小玻璃顆粒進入產品

                        

                        

最佳實務：在充填針與加塞位置使用引導機構，其餘區域才用背壓輸送——混合式設計。

                    

                    

                        

#### CDMO 應用思考

                        

您的 aseptic fill-finish 線若同時承接 2mL vial 和 100mL vial，兩者的引導機構（feed screw 間距、star wheel 規格）完全不同，換線時需要更換機械部件。這直接影響換線時間（changeover time）和設備靈活性——是業務彈性（商業考量）與生產效率之間的平衡。

                    

                

            

        

    

    
    

        

            

10.4

            

                

## Disinfection, Biodecontamination, and Sterilization Associated with Material Transfer

                

物料傳送相關的消毒、生物去汙與滅菌

            

        

        

            

                

                    

### 10.4 Disinfection, Biodecontamination, and Sterilization

                    

The more elements associated with the transport system, the greater the risk for cleaning/disinfection/sterilization. In isolators with hydrogen peroxide, surface biodecontamination is easily addressed. On conventional lines without vapor-phase biodecontamination, disinfection (nonproduct-contact parts) or sterilization (direct and indirect product-contact parts) may be required.

                    

When designing hydrogen peroxide cycles for filling zone, ensure hot and cold spots are minimized and consistent distribution is maintained (especially in motors, cooling coils, autoclave/oven doors, tunnel cooling zones, lyophilization surfaces). Residuals must be brought to safe levels before product exposure.

                    

Tunnels directly discharge to filling line, but glass containers must traverse a cooling zone at safe temperature. The tunnel's cooling zone must be periodically biodecontaminated (by heating for conventional lines, vapor-phase for isolators).

                

                

                    

### 中文解析

                    

                        

#### 三個層次的微生物控制

                        

PDA 在此明確區分三個等級（重要！考試/稽查常見）：

                        

                            
- **Disinfection（消毒）**：用於非產品接觸零件，殺滅大部分微生物但不一定滅孢子

                            
- **Biodecontamination（生物去汙）**：用 H₂O₂ 等汽相試劑，達到 6-log 孢子殺滅，適用於 Isolator 表面

                            
- **Sterilization（滅菌）**：用於直接/間接產品接觸零件，達到 SAL 10⁻⁶

                        

                    

                    

                        

#### H₂O₂ 冷熱點問題

                        

設計 H₂O₂ 去汙循環時，需確保 Isolator 內部沒有：

                        

                            
- **冷點（cold spots）**：H₂O₂ 蒸汽提前冷凝成液體，去汙效果不均

                            
- **熱點（hot spots）**：如馬達散熱面，H₂O₂ 太快揮發，局部暴露不足

                        

                        

特別危險的部位：馬達、冷卻盤管、高壓釜/烘箱排放門、隧道爐冷卻區、凍乾機表面。

                    

                    

                        

#### 隧道爐冷卻區的比喻

                        

除熱原隧道爐的冷卻區就像「剛出爐的麵包要放在通風架上冷卻」——玻璃瓶在 300°C+ 高溫中完成除熱原後，必須在冷卻區降到可接受溫度才能進充填機。但冷卻區本身需要定期生物去汙，否則這段「降溫走廊」反而成為再汙染的風險點。

                    

                

            

            
            

                

                    

### Steam, Dry-Heat, and Specialized Sterilization

                    

Steam sterilization in autoclaves applies to both direct and indirect product-contact parts. When autoclave is not directly connected to filling enclosure, parts require wrapping before transport. Those parts can be introduced to enclosure prior to hydrogen-peroxide cycle. Sterilization by SIP (Sterilization-in-Place) especially applies for direct product-contact parts (pumps, needles) and clean media supply (WFI, nitrogen).

                    

Dry-heat ovens are batch processors. Many polymers cannot handle high temperatures of dry heat. Sterile wraps are not an option for dry-heat materials. Three options for dry-heat-processed materials:

                    

                        
1. Transport containers with dry-heat-capable alpha-beta ports

                        
2. Metal trays (fallen into disfavor)

                        
3. Direct connection of oven to filling enclosure

                    

                    

Penetration into filling enclosures = points of potential contamination ingress. Utility penetrations, glove ports, alpha-ports for docking, door-hatch seals should be checked routinely. "Ring of concern" for alpha and beta ports should be carefully disinfected or biodecontaminated.

                    

Specialized sterilization processes (E-Beam, X-ray, EtO, gamma irradiation) and depyrogenation processes are also possible as off-line processes.

                

                

                    

### 中文解析

                    

                        

#### 蒸汽滅菌（Steam / SIP）的應用場景

                        

                            
- **高壓釜（Autoclave）**：直接或間接產品接觸零件，未直接連接充填室時需包裝後傳入

                            
- **SIP（就地滅菌）**：泵頭、充填針、WFI/氮氣管路——這些無法拆下送去滅菌的部件，在位置上直接通蒸汽完成滅菌

                        

                        

SIP 是現代無菌充填的核心技術，減少了拆裝、傳送、再汙染風險。

                    

                    

                        

#### 乾熱滅菌（Dry-Heat Oven）的三個出路

                        

乾熱箱通常用於玻璃、金屬（不怕高溫）的除熱原，但高溫（250°C+）限制了後續傳送選項：

                        

                            
- **選項 1：耐高溫 alpha-beta port 運輸罐** — 最靈活，但成本高，需確認材質耐受性

                            
- **選項 2：金屬托盤** — 已漸失青睞（fallen into disfavor），因後續傳送仍有汙染風險

                            
- **選項 3：乾熱箱直接對接充填室** — 最安全，無中間傳送步驟，但設備布局複雜

                        

                        

**決策優先順序**：無菌保證 > 商業彈性。選項 3 雖最貴，卻最安全。

                    

                    

                        

#### 所有穿牆點都是風險點

                        

每一個穿透充填室壁面的位置都是潛在的汙染進入點：

                        

                            
- 公用管路穿孔（utility penetrations）— 水、氣、電

                            
- 手套接口（glove ports）

                            
- Alpha-port 對接口

                            
- 艙門密封（door-hatch seals）

                        

                        

所有這些位置必須納入定期檢查計畫，且 alpha/beta port 的「ring of concern」需在每次使用前後確認消毒狀態。

                    

                    

                        

#### CDMO 應用思考

                        

您的充填線若使用 E-Beam 預滅菌的一次性耗材（single-use tubing sets, filters），這些物品透過 RTP 對接進入 Isolator 的設計，就比每次都要拆包、傳入後再跑 H₂O₂ 循環的傳統方式更安全、更快速。這正是選擇 RTP 的商業理由（Business #3），但前提是 RTP 設計本身能確保無菌保證（Sterility Assurance #1）。

                    

                

            

        

    

    
    

        

            

11.0

            

                

## Sterile Filtration and Filling System Considerations (Introduction)

                

無菌過濾與充填系統考量（引言）

            

        

        

            

                

                    

### 11.0 Sterile Filtration and Filling System Considerations

                    

There is no one filling path that will work for every process. Key points to consider in designing a fluid-pathway configuration:

                    

                        
- Product attributes

                        
- Product transfer mechanism (overpressure vs. pumping)

                        
- Selection and type of filter housing (capsule vs. cartridge)

                        
- Number of filters and installation (parallel for redundancies)

                        
- Duration of fill vs. sterile-hold period

                        
- Sterilization methodology (gamma-irradiated SU, autoclave, SIP connection)

                        
- Filter position (inside or outside barrier)

                        
- Integrity testing in place

                        
- PUPSIT implementation considerations

                        
- Fluid-path design (integration with filler and sterilization of fluid path)

                        
- Other filtration requirements (vessel-vent filters, inert-gas point-of-use filters, exhaust filtration for DPs)

                    

                

                

                    

### 中文解析

                    

                        

#### 第 11.0 節前瞻：「沒有萬用充填路徑」

                        

PDA 開門見山說：**不存在適合所有產品的單一流體路徑設計**。每個製程都必須根據 11 個維度獨立評估：

                        

                            
- **產品屬性**（黏度、pH、對材質的相容性）

                            
- **傳送方式**（氮氣加壓輸送 vs. 幫浦）

                            
- **過濾器類型**（膠囊型 capsule vs. 筒型 cartridge）

                            
- **冗餘設計**（並聯過濾器以防單點失效）

                            
- **充填時間 vs. 無菌保持時間**（bioburden 的累積風險）

                            
- **滅菌方式**（伽瑪預滅菌一次性 vs. 高壓釜 vs. SIP）

                        

                    

                    

                        

#### PUPSIT — 關鍵監管要求

                        

**PUPSIT（Pre-Use Post-Sterilization Integrity Test，使用前滅菌後完整性測試）**：

                        

                            
- EMA 已強制要求

                            
- FDA 在 Annex 1 更新後也越來越重視

                            
- 目的：確認過濾器在滅菌後、充填前仍完整，排除滅菌過程造成的隱性破損

                            
- 設計含義：過濾器位置和管路設計必須能支援 PUPSIT 操作，而不破壞無菌完整性

                        

                    

                    

                        

#### 理解確認問題

                        

若您的產品是高黏度生物製劑（例如 100 cP 以上），為什麼「加壓輸送（overpressure）」可能不適合，而應選擇幫浦輸送？這個選擇如何影響後續的流體路徑設計和過濾器選型？

                    

                

            

        

    

    
    

        

## Section 10 總結 — 物料傳送系統設計的核心原則

        

            

                

#### 兩大傳送類別

                

                    
- Conveyance（輸送）：輸送帶、NTT 系統，適合零組件連續傳送

                    
- Docking（對接）：RTP、設備排放門直接對接，適合已滅菌批次傳送

                    
- 兩者各有應用場景，現代充填線常混合使用

                

            

            

                

#### 關鍵風險點

                

                    
- Alpha-beta port 的「Ring of Concern」必須定期消毒

                    
- H₂O₂ 殘留可能氧化降解藥品

                    
- 玻璃散裝輸送的倒瓶與刮傷風險

                    
- 所有穿牆點都是汙染進入的潛在路徑

                    
- 供應商接口規格不相容（早期協調至關重要）

                

            

            

                

#### 決策優先順序應用

                

                    
- #1 無菌保證：所有傳送設計以最小化汙染為首要

                    
- #2 產品 CQA：H₂O₂ 殘留管理、防玻屑微粒、PUPSIT

                    
- #3 商業彈性：靈活的 RTP 設計、換線效率、設備共用

                    
- 乾熱箱選項：直接對接 > 耐熱罐 > 金屬托盤（安全性排序）

                

            

        

    

⇧

## Topic 11: Sterile Fluid Path 無菌液體路徑 (p167-p181)

# Section 11A: Sterile Fluid Pathway Design (11.0–11.7)

    

無菌液體流路設計：過濾器選型、傳輸模式與滅菌策略

    

PDA Manufacturing Technology Guide No. 1 | doc p167 - p174

    

### 本章學習目標

    

        
- 理解無菌液體流路（Sterile Fluid Pathway）的整體設計邏輯，以及為何每一個設計決策都以無菌保證（Sterility Assurance）為最高優先。

        
- 掌握兩種主要產品傳輸方式（過壓法 Overpressure 與泵送法 Pumping）的差異與風險，並能依產品特性選擇適當組態。

        
- 熟悉卡匣式過濾器（Cartridge Filter）與膠囊式過濾器（Capsule Filter）的特性差異，以及其與 SUS 系統的搭配邏輯。

        
- 了解灌裝持續時間對過濾系統設計的影響，包括生物負荷增殖風險（bioburden replication）與過濾器「穿透生長」（grow-through）風險。

        
- 掌握過濾器就地滅菌（SIP）、高壓滅菌釜（autoclave）、伽瑪輻射等不同滅菌方式對系統設計的影響。

    

11.0–11.2 概述：無菌流路設計的核心驅動因素 | Overview & Filtration Design Drivers

    

        

## 原文內容 Original Text

        

### 11.0 Introduction (context from preceding page)

        

The sterile fluid pathway encompasses the entire route that product travels from the bulk formulation vessel, through the sterilizing filter, and to the point of fill. Every design decision along this pathway must be evaluated through the lens of Sterility Assurance (SA).

        

### 11.1 Filtration Overview

        

The filterability of the product, including such attributes as viscosity and likelihood of product blocking or blinding the filter, will drive the need to consider whether parallel filter trains or in-line prefilters are needed to provide redundancy and prevent blockage during the filling operation.

        

The hazardous nature of the product is another consideration for filtration, whether it is highly potent, sensitizing, or toxic. Containment and decontamination considerations should be included in the design of filtration manifolds so that waste associated with PUPSIT or filter-flush at the beginning of processing is handled in a way that does not risk the employees, the environment, or the outside of any filled containers.

    

    

        

## 導師解析 Tutorial Commentary

        

            

#### 核心概念解析 Key Concepts

            

**無菌液體流路（Sterile Fluid Pathway）：**指從調配桶（formulation vessel）開始，經過除菌過濾器（sterilizing filter），一路延伸到灌裝點（point of fill）的完整管路系統。這段路徑上的每一個接頭、每一個閥門、每一截管線，都是潛在的汙染風險點。

            

**可過濾性（Filterability）：**不是所有液體都能輕鬆通過 0.22 µm 除菌濾膜。高黏度、含蛋白質聚集體、或大分子產品容易堵塞（blocking/blinding）濾膜，此時必須設計備援路徑（parallel filter trains）或前置預過濾器（in-line prefilters）。

        

        

            

#### 比喻說明 Analogy

            

想像一條城市供水管線：水廠（調配桶）→ 淨水過濾器（除菌過濾器）→ 各家各戶（灌裝點）。若水源混濁（高蛋白產品），一個過濾器很快就會堵塞，所以工程師會設計雙線並聯，讓其中一條清洗時另一條繼續供水。這就是 parallel filter train 的設計邏輯。

        

        

            

#### 重點提示 Key Notes

            

**高毒性產品的特殊義務：**PUPSIT 完整性測試或濾器沖洗（filter flush）所產生的廢液，必須有專屬廢液收集系統（biocontainment bag、waste system）。若沒有妥善設計，高效能藥（HPAPI）廢液可能汙染環境或員工，這不只是 GMP 問題，更是職業安全問題。設計流路時，廢液動線 = 正常產品動線同等重要。

        

        

            

#### 練習思考 Practice Questions

            

                
1. 若某單株抗體（mAb）在 37°C 下靜置 2 小時後開始出現聚集（aggregation），會對過濾器設計產生什麼影響？你會建議哪些設計對策？

                
2. PUPSIT 廢液為何需要特別的廢液管理設計？CDMO 在承接高毒性藥物時，這個設計細節應在何時討論？

            

        

    

11.3 產品傳輸方式與其對系統設計的影響 | Product Transfer Modalities and Influence on System Design

    

        

## 原文內容 Original Text

        

The two primary methods to get product from a vessel through the filter-manifold, either to another vessel or directly to the filler, are overpressure and pumping.

        

Overpressure is provided by the application of a sterile gas (either clean, compressed air or an inert gas such as nitrogen) in the headspace of the pressure vessel. The increase in pressure in the headspace forces the product through the bottom outlet of the vessel and through the transfer lines. The pressure can be controlled to either continuously or intermittently feed the product.

        

Pumping is the application of a mechanical transfer of the fluid in the transfer line. The pump can be product-contacting (e.g., rotary lobe, centrifugal) or non-product-contacting (e.g., peristaltic). Care must be taken to ensure that, with either transfer mechanism, the pressure and any pulsation of the liquids does not harm the filter membrane or create shear stress on the product that can result in the formation of particulate or harm-filterable suspensions for example.

        

Configurations for transfer can include presterilized intermediate vessels (also known as surge vessels) in conjunction with a manifold, or the transfer can be made directly to the filler manifold without an intermediate vessel. The filler manifold assists in securing a stable flow of product to the filling pumps and needles by providing a small upstream reservoir or widening of the fluid pathway.

        

### Table 11.3-1 Transfer System Design Influences on Filtration Risks

        

        
            
                
                
                
                
                
            
| Method of Transfer | Filter from Formulation Vessel | Sterile Intermediate Vessel | Filler Manifold | Considerations |
| --- | --- | --- | --- | --- |
            
                
                
                
                
                
            
| Overpressure | Yes | No | Yes | Consider pressure drop across the filter membrane, as filling system controls the rate of transfer for time-pressure filling systems. Under certain conditions, if stable pressure on the dosing system cannot be maintained, the dosing accuracy could be affected. |
            
                
                
                
                
                
            
| Overpressure | Yes | Yes | Yes | Rate of transfer controlled by filtration operation alone; limited risk for pressure drop. |
            
                
                
                
                
                
            
| Pump | Yes | No | Yes | Start/stop of the pump should be considered relative to the risk to the filter membrane, as the pump will need to be interlocked with the filler. Under certain conditions, if stable pressure on the dosing system cannot be maintained, the dosing accuracy could be affected. |
            
                
                
                
                
                
            
| Pump | Yes | Yes | Yes | Rate of transfer controlled by the filtration operation alone to the intermediate vessel; offers less risk of start/stop to the filter membrane. |
        

        

    

    

        

## 導師解析 Tutorial Commentary

        

            

#### 核心概念解析 Key Concepts

            

**過壓傳輸（Overpressure）：**以無菌氣體（壓縮空氣或氮氣）在桶槽頂部加壓，將液體從底部推出。優點是無機械接觸產品的風險；缺點是壓力控制複雜，若壓力不穩定，直接影響時間壓力充填系統（Time-Pressure）的劑量精度。

            

**泵送傳輸（Pumping）：**機械式驅動液體移動。蠕動泵（peristaltic）不接觸產品，但有脈動；旋轉葉片泵（rotary lobe）直接接觸產品，可能產生剪切力（shear stress）損傷蛋白質分子。

            

**緩衝桶（Surge Vessel / Sterile Intermediate Vessel）：**位於過濾器下游、灌裝歧管上游的中間儲存器。它的存在讓過濾操作速度可以獨立控制，大幅降低過濾器被泵送啟停衝擊的風險。

        

        

            

#### 比喻說明 Analogy

            

想像廚房的熱水供應：「過壓法」如同水塔靠重力供水——穩定但壓力受水位影響；「泵送法」如同電動加壓泵——流量可控但有脈動。中間的緩衝桶就像熱水器的儲水槽，讓你在洗澡（灌裝）時不必擔心水塔水位變化（過濾速度）影響水壓（灌裝精度）。有了緩衝槽，兩端操作彼此解耦（decoupled），更容易各自優化。

        

        

            

#### 重點提示 Key Notes

            

**Table 11.3-1 的關鍵洞察：**有無「無菌中間桶」是設計複雜度的分水嶺。沒有中間桶時，過濾與灌裝耦合在一起，任何一端的速率波動都會互相影響（壓力drop、劑量精度）；加入中間桶後，兩個單元操作解耦，各自獨立控制，風險大幅降低——但代價是需要更多空間、更多驗證。這是典型的「設計複雜度換取操作穩定性」的工程取捨。

        

        

            

#### 實務應用 Practical Application

            

CDMO 承接一個 mAb 產品，批量 200L，預計灌裝時間 8 小時，採用時間壓力充填系統（TP filler）。你的工程師提議使用「過壓 + 直接到灌裝歧管（無中間桶）」節省空間。請問：這個設計在長時間灌裝中，過濾端壓力隨著桶槽液位下降時會發生什麼？你會如何修改設計？

        

    

11.4 過濾器選型與對系統設計的影響 | Filter Selection and Influences on System Design

    

        

## 原文內容 Original Text

        

The two primary filter types are cartridge filters and capsule filters.

        

Cartridge filters are filter membranes installed within a filter housing that is part of the equipment. O-rings at the bottom of the filter create the seal with the equipment housing. Cartridge filters can be either sterilized out of place in an autoclave or SIP on a rigid piping system, and then integrity-tested in place (see Section 11.9).

        

Capsule filters are supplied with a molded-polymer housing that is an integral part of the supplied filter. The housing, which is pressure-rated, is equipped with connectors and test connections that can be clamped directly to existing stainless-steel transfer lines, creating a continuous pathway that can be CIP, SIP, or assembled and autoclaved. The capsule filter is then integrity-tested according to the PUPSIT justification (see Section 11.9). The selection of the type of filter to be used is driven in part by the complexity of connections and complexity of the equipment for the filtration-unit operation. Capsule filters are more highly integrated with the fluid pathway and are considered the filter of choice for SUS.

        

The materials of construction of the transfer lines, filter, and filter-housing should be evaluated for compatibility with the product to prevent the risk, for example, API or preservative adsorption, oxidation, or exposure to free radicals. When any of these conditions are unavoidable, consideration should be given to the flush quantities required to standardize the product homogeneity (e.g., through binding to available sites). This flush quantity must be proven through validation, and the line length and filter surface area must be tightly controlled and standardized by procedure.

    

    

        

## 導師解析 Tutorial Commentary

        

            

#### 核心概念解析 Key Concepts

            

**卡匣式過濾器（Cartridge Filter）：**濾膜安裝在設備自帶的金屬外殼（filter housing）內，以 O-ring 密封。可就地高壓滅菌（SIP）或移出高壓釜處理後裝回。適用於不鏽鋼固定管路系統，耐久性高，長期使用成本較低。

            

**膠囊式過濾器（Capsule Filter）：**濾膜與聚合物外殼一體成型，直接夾接（clamp）到管路上。免裝殼、免 O-ring，特別適合一次性使用系統（SUS）。在無菌製造的 SUS 趨勢下，capsule filter 是主流選擇。

            

**相容性（Compatibility）與吸附（Adsorption）：**某些 API（尤其小分子或帶電性蛋白質）會被濾膜或管材吸附，導致實際灌裝濃度低於標示。解決方案是設計「預沖洗體積」（flush quantity），用產品本身先佔據吸附位點（saturation），之後正式生產的產品濃度才能符合規格。這個預沖洗量必須經過驗證，並納入廢棄量（discard）計算。

        

        

            

#### 重點提示 Key Notes

            

**「SUS 的過濾器首選」有重要含義：**Capsule filter 在 SUS 系統中的主導地位不只是方便性問題——它代表整個流路（transfer line + filter + connectors）可以作為一個預組裝、預滅菌的系統整批引入無菌區，大幅減少組裝步驟和人為操作的汙染風險。這是 Sterility Assurance 邏輯的直接體現。

        

        

            

#### 公式與計算思維 Formula Thinking

            

```

預沖洗體積驗證邏輯：

產品損失量 = 管路容積 × 吸附係數 + 過濾器保留體積

驗證要求：
  1. 確定最小沖洗量 → 使出口濃度達到目標規格
  2. 鎖定管路長度上限（過長 = 吸附位點增多）
  3. 鎖定過濾面積（過大 = 保留體積增大）
  4. 沖洗量寫入 SOP，偏差即觸發調查

管路設計黃金原則：越短越好，越細越好（在滿足流量前提下）
            
```

        

        

            

#### 練習思考 Practice Questions

            

                
1. 某 CDMO 使用不鏽鋼管路搭配 capsule filter 充填眼科製劑，發現第一批次灌裝初期的濃度偏低約 8%，後段回歸正常。原因最可能是什麼？如何在設計階段預防？

                
2. 為何 capsule filter 被稱為「SUS 的首選」？從無菌保證的角度解釋。

            

        

    

11.5 過濾器組態替代方案 | Filter Configuration Alternatives

    

        

## 原文內容 Original Text

        

A wide variety of filter configurations are possible. The product attributes will drive the selection of the filter configuration, as will considerations for risk mitigation associated with SA.

        

One common approach is the installation of a bioburden-reduction filter placed upstream of the sterilizing filter. In some cases, two sterilizing filters can be placed in a series; this ensures that, if the downstream filter fails an integrity test, the upstream filter may be tested for integrity. If the upstream filter passes, then the batch disposition is not compromised.

        

Another common configuration is the installation of two parallel fluid pathways, each with a sterilizing filter in place. In this redundant parallel configuration, the process would proceed through the first pathway, with pressure being monitored throughout, until a pressure rise is observed across the membrane. When that pressure rise is observed, the fluid pathway is switched to the secondary pathway. This approach is often used when working with products that are likely to block the filter due to particulate or product deposition that blocks the filter's pores (e.g., large molecules, proteinaceous, long filtration times due to large batches or prolonged filling operations).

        

            "Legacy configurations that employ the removal of a prefilter during processing, rather than employing a redundant filtration manifold, should be assessed for compliance; breaking into a transfer line and filtration manifold after integrity-testing presents a significant risk (see Section 11.9)."
        

    

    

        

## 導師解析 Tutorial Commentary

        

            

#### 核心概念解析 Key Concepts

            

**三種主要過濾器組態：**

            

                
- **串聯（Series）：**生物負荷減量濾器 + 除菌濾器，或雙重除菌濾器串聯。後者的好處是若下游濾器完整性測試失敗，可測試上游濾器來救批（batch salvage）。

                
- **並聯備援（Redundant Parallel）：**兩條流路各帶一個除菌濾器。當第一條因差壓升高（堵塞）時，切換到第二條繼續灌裝，不需停機。適合蛋白質藥物、大批量產品。

                
- **預過濾（Bioburden Reduction）：**在除菌濾器前加一個孔徑較大（0.45 µm）的預濾器，延長主濾器壽命。

            

        

        

            

#### 重點提示 Key Notes

            

**舊式做法的法規風險（Legacy Configurations）：**有些老廠的做法是在生產中途把堵塞的預過濾器拆掉換新，再繼續生產。但 EU GMP Annex 1 的精神明確反對這種做法——在完整性測試後重新打開管路（break into the manifold），等同引入新的汙染風險。FDA 和 EU 在查廠時會特別審視這類設計。CDMO 若有類似舊設計，應主動規劃升級，不要等到查廠才發現問題。

        

        

            

#### 比喻說明 Analogy

            

並聯備援過濾就像高速公路的雙線道收費站：當第一條通道（過濾器）發生車陣（差壓升高），立刻切換到第二條通道，全程不需關閉高速公路（停止灌裝）。而串聯雙重除菌濾器則像護照查驗後再過海關——兩道關卡都通過，才算真正放行，同時提供了「如果海關（下游濾器）失效，護照查驗（上游濾器）還可補救」的安全網。

        

        

            

#### 練習思考 Practice Questions

            

                
1. 一個 500L 批次的蛋白質藥物，預計灌裝 10 小時，歷史上有多次濾器提前堵塞的紀錄。你會推薦何種過濾器組態？請說明選擇邏輯。

                
2. 為什麼在完整性測試後「打開管路更換預過濾器」被視為顯著風險？從 SA 決策邏輯說明。

            

        

    

11.6 灌裝持續時間對過濾系統配置的影響 | Duration of Fill and Impact on Filtration System Layout

    

        

## 原文內容 Original Text

        

When considering the configuration for the fluid path and whether to make use of a sterile holding vessel, the duration of the filling process and the likely duration of the filtration process should be taken into account. The duration of the filtration is an important parameter in the initial qualification of the filter membrane and one that will require requalification should the filtration time be changed over the life of the product (26).

        

Two failure modes are possible if the filling process is prolonged. First, as the bulk product is held during presterilization, the bioburden may replicate in the nonsterile bulk intermediate vessel and, as a result, present a challenge to the sterilizing filter. Second, there is a risk of "grow through" for the filter, where microorganisms on the upstream side of the filter can divide and multiply, grow through the membrane, and breach the intended sterile barrier of the filter membrane.

        

Consequently, if the filling process is prolonged, thereby prolonging the filtration process, consideration should be given to using a sterile transfer vessel so the filtration can be accomplished more quickly. This approach will require additional space for the placement of the sterile vessel. The presterilized intermediate vessel must be held under positive pressure after sterilization and throughout the filling operation. In addition, the sterile intermediate vessel will require a sterilizing vent-filter during the transfer process, which will also require an integrity test at the conclusion of the filling process.

        

The sterile hold-time for the bulk must be validated as part of the manufacturing process. Other possible consequences of prolonged filling operations include blocking of the sterilizing filter, as discussed in Section 11.5.

        

For direct filtration without a bulk intermediate vessel, slow and fast fill-speeds must be validated to ensure that the filtration parameters (e.g., maximum and minimum flow rate, differential pressure) can be maintained while supplying the filler with consistent product flow.

        

            "Aseptic filling operations are expected to have point-of-use filtration, regardless of the filling system design, when permitted by the product and filler attributes (see Section 11.11)."
        

    

    

        

## 導師解析 Tutorial Commentary

        

            

#### 核心概念解析 Key Concepts

            

**兩種延長灌裝時間的失效模式（Failure Modes）：**

            

                
- **生物負荷增殖（Bioburden Replication）：**非無菌調配桶中的微生物在長時間靜置中大量繁殖，超過除菌過濾器的攔截能力（LRV 設計上限）。這是過濾前端的風險。

                
- **「穿透生長」（Grow-Through）：**濾膜上游的微生物在長時間過濾中，透過細胞分裂逐步穿越 0.22 µm 濾膜進入無菌側。這是 EU Annex 1 特別關注的隱患，也是為何「過濾時間」必須是驗證的關鍵參數之一。

            

            

**無菌保留時間（Sterile Hold-Time）：**產品完成除菌過濾後，在無菌狀態下可以靜置的最長時間，必須透過微生物挑戰試驗（bioburden challenge）驗證。

        

        

            

#### 比喻說明 Analogy

            

「穿透生長」好比在一道細沙網（濾膜）前放著一群螞蟻（微生物）。若只是短暫靠近，螞蟻無法通過；但若讓牠們在網前停留很久，牠們持續分裂、增殖、尋找縫隙，最終可能繁殖出能穿越的路徑。這就是為什麼「過濾時間上限」必須被驗證鎖定，且不能隨意延長生產時程。

        

        

            

#### 重點提示 Key Notes

            

**使用無菌中間桶的設計代價與收益：**快速完成過濾（filtration 先過完到無菌桶）→ 消除兩種時間相關失效模式 → 之後慢慢灌裝即可。代價：需要更多潔淨室空間放桶槽，桶槽本身需要 SIP/autoclave 驗證，排氣口的通氣過濾器（vent filter）也需要 PUPSIT 和完整性測試。這是一個「用空間和複雜度換取無菌保證」的典型工程決策。

            

**灌裝速度驗證的雙邊要求：**速度太慢 → 過濾時間過長（grow-through 風險）；速度太快 → 差壓過高（filter membrane 損傷風險）。因此最小速度和最大速度都必須驗證，不能只驗證一端。

        

        

            

#### 練習思考 Practice Questions

            

                
1. 你的產品批次 300L，歷史灌裝時間約 12 小時。過濾驗證報告中的「最大過濾時間」設定為 6 小時。你該如何修改製程設計來符合這個限制，同時不影響灌裝時間？

                
2. 「無菌中間桶必須在整個灌裝過程中維持正壓」——這個要求的目的是什麼？若正壓喪失，風險是什麼？

            

        

    

11.7 過濾器與過濾管路的滅菌方式 | Sterilization of the Filter and Filter Train

    

        

## 原文內容 Original Text

        

When selecting a sterilizing filter, there are multiple options for ensuring the sterility of the filter and its associated transfer lines. Filters can be gamma-irradiated SU, or they can be sterilized on site, either through an autoclave load or SIP cycles.

        

For optimal SA, all connections required for the filter should be made prior to the sterilization step, especially on the downstream side; as an alternative, intrinsic sterile connection-devices should be considered to reduce the risk of sterility breaches during assembly. These approaches would require coordination with the filter supplier to ensure that the needed connections can be supplied if the filter will arrive RTU (Ready-to-Use). For on-site filter assembly, there may be more flexibility in the connectors used, as bioburden-controlled assembly can be implemented prior to the sterilization step.

        

The mechanism of transfer to the line should be considered, as it will determine whether the filtration apparatus requires special packaging, such as double- or triple-bagging for introduction to the filling area, or whether a RTP (Rapid Transfer Port) system or other advanced protective measures will be used (see Section 9.0 and Section 10.0 for the transfer of materials and components).

        

The method of sterilization should also be evaluated for impact on the product. For example, when using gamma-irradiation, the formation of free radicals may result in the need to reject the first quantity of filtered product as a precautionary measure (see Section 12.0 for information on discard considerations).

    

    

        

## 導師解析 Tutorial Commentary

        

            

#### 核心概念解析 Key Concepts

            

**三種過濾器滅菌方式比較：**

            

                
- **伽瑪輻射 SU（Gamma-irradiated SU）：**供應商完成滅菌後 RTU 供應，最方便，但需注意自由基（free radicals）殘留可能氧化產品——通常需丟棄最初過濾的產品（initial discard），參見 Section 12.0。

                
- **高壓滅菌釜（Autoclave）：**移出高壓釜蒸汽滅菌。適合 capsule filter；整套組裝好後一起高壓，無需 SIP 管路。靈活性高，但搬運和引入過程需要雙層或三層袋保護（double/triple bagging）或 RTP 傳遞。

                
- **就地滅菌（SIP）：**管路固定安裝，蒸汽直接通入管路和過濾器滅菌。需要管路設計支援（排水、蒸汽入口、冷凝水排放）。適合不鏽鋼固定管路的卡匣式過濾器。

            

            

**連接前滅菌（Pre-sterilization connection）：**SA 最優策略是在滅菌前完成所有接口的連接（尤其是下游側），避免滅菌後再接管而引入汙染風險。RTU 供應的過濾器組件需與供應商協調，確保預連接規格符合廠端需求。

        

        

            

#### 重點提示 Key Notes

            

**伽瑪輻射的自由基問題：**聚合物材質在伽瑪照射後會產生自由基，這些自由基可在產品過濾初期溶入液體，導致氧化降解（特別危害含氧敏感性 API 的生物製劑）。行業實務是規定初始過濾的前 X 升產品丟棄，此「丟棄量」必須經過驗證，並在批次記錄中記錄。這直接影響批次的物料損耗計算（yield）。

            

**引入方式決定包裝要求：**高壓釜滅菌後的組件若需經由人員手動帶入 Grade A 區，需要三層袋（triple bagging），每層在不同潔淨等級環境中去除一層。若有 RTP 系統，則可以單層包裝快速引入，大幅降低汙染風險並提升效率——這是設備投資影響操作流程 SA 的典型案例。

        

        

            

#### 比喻說明 Analogy

            

過濾器的滅菌與引入就像手術器械的準備流程：高壓蒸汽滅菌（SIP）像院內中央消毒室處理不鏽鋼器械——固定設備、在地完成；伽瑪輻射 SU 則像使用一次性無菌手術包——開封即用但需注意材料的輻射後效應（自由基）；雙層袋引入就像手術器械從消毒室送到手術台途中的多層保護——每進入一個更潔淨的環境，就去掉一層外袋。

        

        

            

#### 練習思考 Practice Questions

            

                
1. 你的 CDMO 新建一條 SUS 灌裝線，客戶要求使用伽瑪輻射 RTU capsule filter 組件。為避免自由基對蛋白質藥物的影響，你在流路設計和批次操作 SOP 中應如何規劃？

                
2. 「滅菌前完成所有連接」（pre-sterilization connection）的原則，對 CDMO 承接新產品的工程設計時間表有何影響？你需要與過濾器供應商提前討論哪些事項？

            

        

    

    

### 本節重點回顧 Section Summary (11.0–11.7)

    

        
- **設計決策的核心邏輯：**無菌液體流路的每一個設計選擇（過濾器類型、傳輸方式、有無中間桶、滅菌方法）都應首先從「無菌保證」出發，商業便利性和操作靈活性次之。

        
- **傳輸方式的取捨：**過壓法簡單但壓力不穩定可能影響劑量精度；泵送法流量可控但有剪切力和啟停衝擊風險；無菌中間桶解耦過濾與灌裝，大幅降低互相干擾，但增加空間與驗證需求。

        
- **過濾器選型的現代趨勢：**Capsule filter 是 SUS 系統的首選，因其高度整合、易於預組裝、預滅菌，符合 EU Annex 1 精神；卡匣式過濾器適合固定不鏽鋼管路的長期高產能設施。

        
- **「穿透生長」是隱形風險：**灌裝時間越長，過濾時間越長，微生物穿透濾膜的可能性就越高。過濾時間必須是驗證的關鍵參數，超時即觸發偏差調查。

        
- **滅菌方法影響產品安全：**伽瑪輻射雖然便利，但自由基問題必須在設計階段納入「初始丟棄量」的驗證；滅菌前完成所有連接是 SA 最佳實務，RTU 和 RTP 是現代無菌製造的重要工具。

    

⇧

# Section 11B: Sterile Fluid Pathway — Filtration & Special Cases (11.8–11.12)

    

無菌液體路徑 — 過濾設計風險、特殊產品與粉末過濾

    

PDA Manufacturing Technology Guide No. 1 | doc p175 - p181

    

### 本章學習目標

    

        
- 理解不同充填技術（RPP、DP、TP、PP）各自的過濾風險點，包含回流、脈動與壓降問題

        
- 掌握 manifold（集流管）設計對無菌保證的影響，包含 dead-leg、排氣與 SIP 設計要求

        
- 了解無法過濾產品（懸浮液、細胞治療）的控制策略，以及「製程即產品」的核心理念

        
- 熟悉粉末充填系統（VPPF、AF）的過濾需求，包含壓縮空氣、真空、惰性氣體與除塵過濾

        
- 能依決策層級（無菌保證 → CQAs → 商業彈性）評估各種過濾設計選項的優先順序

    

11.8 (cont.) Fluid Pathway Design Risk by Liquid Filler Type — Manifold Considerations

    

        

## 原文內容 Original Text

        

For rolling DPs, the pump itself may cause some pulsation (depending on design and size), which presents a higher risk to the filter membrane. Increasing the distance between the filter and the pump may dampen this effect.

        

For RPPs, there is a risk of back-flow through the filter if the volume (e.g., manifold or reservoir) between the pump and the filter is inadequate.

        

Having a manifold (header) upstream of the filling heads (e.g., filling pumps for RPP or DP, pinch valves in TP filling systems, rotors in PP filling systems) is a common design feature. When the filter is positioned to provide point-of-use filtration, a small dead-leg can be formed between the filter and the end of the manifold. This dead-leg can create a risk when performing such activities as filter-flushing at the beginning of the filling operation. The dead-leg provides some uncertainty about whether the full volume of the waste solution has been expelled from the system.

        

For RPP and TP filling systems, including a mechanism that vents air from the filling system should be considered. For example, air removal is beneficial at startup, as the manifold first fills, or when there are interventions that introduce air to the system. If the manifold can be positioned below the filling pumps, this positioning may reduce or eliminate the need for a separate venting mechanism, if air can escape through the filling heads.

        

Design of the manifold should be carefully considered to ensure that it can be appropriately sterilized and assembled in the fluid pathway in an aseptic manner, especially when introducing the manifold through a RTP for assembly. If it is subject to SIP, the manifold represents a widening of the line and a transition to multiple filling systems, so it is imperative to ensure that an adequate mechanism for complete air removal during sterilization is present.

        

        
            Table 11.10-1 Fluid Pathway Design Risk by Liquid Filler Type
            
                
                    
                    
                    
                    
                    
                
| Considerations | Rotary Piston Pump (RPP) | Diaphragm Pump (DP) | Time Pressure (TP) | Peristaltic Pump |
| --- | --- | --- | --- | --- |
            
            
                
                    ****
                    
                
| Filtration | Point of Use Requirement |
                
                    ****
                    
                    
                    
                    
                
| Operation Risks | Back-flow caused by idle stroke | Consider pulsation risk on filter membrane due to pump operation | Pressure-drop through the filter when not using a sterile receiver | None |
                
                    ****
                    
                
| Design Risk for Manifold | Avoid dead-leg at the end of the manifold. Ensure manifold is designed for either aseptic assembly or SIP with appropriate maintenance of sterile pathway. |
                
                    ****
                    
                
| Design Risk for Venting | Consider design to vent air out of the filling system. |
            
        

        

        

In addition to these considerations for in-line filtration to liquid filling systems, other filters may be in place along the fluid pathway, including:

        

            
- Vessel vent filters (not required for SU bags)

            
- Inert-gas point-of-use filters

            
- Manifold/filling-head venting system filters (as applicable)

        

        

Integrity-testing will be required for each of these additional process filters. That integrity-testing will commonly be performed off-line as these are hydrophobic filters that would commonly be tested with alcohol.

    

    

        

## 導師解析 Tutorial Commentary

        

            

#### 核心概念解析 Key Concepts

            

**Manifold / Dead-leg（集流管／盲管）：**集流管是將單一濾後液體分配給多個充填針頭的管路。當過濾器安裝在集流管末端進行「使用點過濾（point-of-use filtration）」時，過濾器與集流管尾端之間可能形成「盲管（dead-leg）」——一小段流體無法完全沖洗乾淨的區域。

            

盲管的危害：沖洗過濾器時，盲管內的廢液（如完整性測試用酒精或沖洗水）可能無法完全排出，導致殘留稀釋產品或帶入雜質。

            

**RPP 回流風險（Back-flow）：**RPP 的活塞在空回程（idle stroke）時會短暫產生負壓，若濾器上游容積不足，可能引發液體逆流穿過濾膜，對膜造成反向壓力傷害。

            

**DP 脈動風險（Pulsation）：**滾動膜片泵的輸出具有週期性脈動特性，若過濾器距離泵太近，重複的壓力波衝擊會加速濾膜疲勞，增加破損風險。

        

        

            

#### 比喻說明 Analogy

            

想像你用蓮蓬頭洗澡，蓮蓬頭本體就是集流管，熱水器是幫浦，中間的濾水器是除菌過濾器。若濾水器裝在離蓮蓬頭很近的位置，但蓮蓬頭底座形成一個小彎角（dead-leg），每次沖洗開始時，那個彎角裡的舊水——可能是前次殘留的清洗液——就不一定完全跑出來。

            

RPP 的回流就像水泵停止時水管裡的水往回流——若沒有足夠緩衝容積（如蓄水桶），逆流就會衝擊濾膜。DP 的脈動則像心跳——規律的壓力波若沒有適當緩衝，長期下來會讓濾膜「心臟衰竭」。

        

        

            

#### 重點提示 Key Notes

            

**決策層級提醒：**集流管設計必須優先確保無菌保證（Sterility Assurance，SA）——dead-leg 若導致沖洗不完全，不只是產品稀釋問題，更是微生物滋生的潛在風險點，直接違反第一優先。

            

**SIP 設計陷阱：**集流管在 SIP（就地滅菌）時代表管路從單一管變成多分支結構，蒸氣必須能穿透每個分支末端。若排氣點設計不當，某些死角可能永遠達不到滅菌溫度，造成冷點（cold spot）——這是 SIP 驗證最常見的失敗原因之一。

            

**疏水性過濾器（Hydrophobic Filter）完整性測試：**排氣過濾器、惰性氣體過濾器等疏水性過濾器，不能用水壓法（bubble point / diffusion）直接測試，需改用酒精潤濕後離線測試，操作上比親水性過濾器複雜。

        

        

            

#### 練習思考 Practice Questions

            

                
1. 若你的充填系統採用 RPP 搭配 point-of-use 過濾器，且集流管設計產生了明顯的 dead-leg，你會優先採取哪些設計修正？

                
2. 為什麼 TP 系統在沒有「無菌接收器（sterile receiver）」的情況下，過濾器壓降是一個特別需要關注的風險？

                
3. 在 CDMO 承接新客戶產品時，若設備已固定而集流管存在輕微 dead-leg，你會如何在製程驗證中量化並控制這個風險？

            

        

    

11.11 Considerations Regarding Products that are Not Filterable

    

        

## 原文內容 Original Text

        

Some products cannot be sterile-filtered, for example, some suspension products and cell therapy products where the particle size of the suspension or cells exceeds the porosity rating of the filter. Terminal sterilization should always be the first choice for the preparation of sterile products. However, where neither terminal sterilization nor sterile filtration are possible due to the composition and attributes of the product, a control strategy must be in place.

        

The product and process control strategy must address the steps taken to ensure the sterility of each ingredient/component of the product, including the potential for filtration of each prior to introduction to the unfilterable component, and to ensure that the procedures used to bring the various ingredients/components together provide the highest possible SA.

        

Minimizing the length of the fluid pathway and ensuring its integrity after sterilization are essential elements to success for these products. A risk assessment is recommended to support the robustness of the overall control strategy for SA.

        

            "In these cases, the process is the product; that is, the combination of all the sterile inputs provides the assurance of sterility for the final product. Hence, each must be separately assured."
        

    

    

        

## 導師解析 Tutorial Commentary

        

            

#### 核心概念解析 Key Concepts

            

**不可過濾產品（Non-Filterable Products）：**當產品的有效成分本身就是「大顆粒」時（例如懸浮顆粒、活細胞、病毒載體、脂質奈米粒），0.22 µm 的除菌過濾器不僅擋不住細菌，更會將產品本身截留——過濾即等於破壞產品。

            

典型例子：
                

                    
- 懸浮注射液（如胰島素晶體懸浮液、疫苗佐劑懸浮液）

                    
- 細胞治療產品（CAR-T、幹細胞）

                    
- 大型病毒載體（AAV 基因治療）

                

            

            

**「製程即產品」（The Process is the Product）：**由於最終產品無法滅菌或過濾，唯一能保證無菌性的方式就是確保每一個輸入原料、每一個製程步驟、每一個接觸表面都是無菌的。最終無菌性等於所有無菌輸入的總和。

        

        

            

#### 比喻說明 Analogy

            

傳統注射液的生產就像煮好一鍋湯後，用細篩子過濾去掉所有雜質再裝瓶——最後的篩濾動作是最後一道安全網。

            

但細胞治療就像你做的「湯料」本身就是你要保留的珍貴食材（活細胞）——你不能用篩子，因為篩子會把食材全部擋下來。所以你必須確保每一個食材從採購開始就是乾淨的、每一個鍋具都是消毒的、整個廚房都是無菌室等級的。你沒有最後的安全網，你的「廚房流程」本身就是唯一的保障。

        

        

            

#### 重點提示 Key Notes

            

**決策層級應用：**對於不可過濾產品，「無菌保證（SA）永遠第一」這條規則的挑戰最大——因為你既不能依賴終端滅菌，也不能依賴除菌過濾。此時風險評估（QRM）不是選項，而是強制要求。EU GMP Annex 1 明確要求這類產品必須有更嚴格的污染控制策略（CCS）。

            

**最小化液體路徑長度：**路徑越長，暴露風險越高——每一個接頭、閥門、管路都是潛在的污染點。設計原則是「愈短愈好、愈少接頭愈好」。

            

**各原料分別保證無菌：**每一個可以過濾的輔料，應在加入不可過濾成分之前先進行過濾。混合後就不能再過濾了，所以混合前的各成分無菌保證是關鍵。

        

        

            

#### 實務應用 Practical Application

            

在 CDMO 接受細胞治療或基因治療客戶時，首要評估點是：是否具備足夠的隔離器（Isolator）或 RABS 設施？因為這類產品的無菌路徑要求甚至高於一般小分子藥物，任何一個環境暴露點都可能造成批次報廢。

            

CDMO 商業模式影響：接受此類產品意味著接受「批次報廢風險極高」的業務，合約中的批次失敗責任歸屬、風險分擔條款必須事先明確協商。

        

    

11.12 Filtration Associated with Powder Filling

    

        

## 原文內容 Original Text

        

Although there is no filtration associated with a product in powder-filling, filtration is associated with:

        

            
- Powder delivery and handling

            
- Inerting

            
- Drying after cleaning

            
- Exhaust and dust collection

        

        

For vacuum pressure powder fillers (VPPF), point-of-use filtration is used for the clean compressed air and the vacuum. The filters are installed between the utility source (e.g., vacuum, dosing air, purge air) and the mechanical backplate or the pneumatic rotary joint. (For fillers designed for dosing needles, there is one filter per air or vacuum pathway.) The filter assembly is installed as part of the aseptic setup of the filling system.

        

For both VPPF and auger fillers (AF), an inert gas or clean compressed air may also be introduced to assist with powder flow within the hopper. For both VPPF and AF, if the product requires protection from oxygen, a filtered inerting-gas is also used during the filling operation.

        

For AF, no clean compressed air or vacuum is associated with the filling operation; however, filtered clean compressed air is associated with drying the powder pathway after cleaning. If CIP is associated with the bulk-hopper component of the VPPF filler, the bulk hopper would also be subject to drying with filtered clean compressed air. (VPPF dosing-system elements, other than the bulk hopper, are not capable of CIP and, therefore, will not have clean compressed air for system drying.)

        

All filter usage for VPPF and AF described here make use of a sterilizing-grade hydrophobic filter with a nominal pore size of 0.22 µm. These filters are typically procured as sterile, gamma-irradiated capsule filters, although autoclavable options may also be used. All piping downstream of the filter should be capable of sterilization. All filters should be subject to integrity-testing, and the integrity-test results should be considered in the batch disposition process.

        

Either filler type may make use of dust collection, which would use HEPA-filtered exhaust at the point of collection. These filters are generally located within a gray space to facilitate change-out of the filter and emptying of the reservoir outside the cleanroom environment; however, cleanroom models do exist. Dust-collection systems may also employ a bag-in–bag-out configuration for potent compounds that require containment. These HEPA filters are intended for containment rather than microbiological control; therefore, the frequency of integrity-testing is at the discretion of the manufacturer based on application, system design (e.g., location of the filter), and risk.

    

    

        

## 導師解析 Tutorial Commentary

        

            

#### 核心概念解析 Key Concepts

            

**粉末充填的過濾邏輯：**粉末充填的產品本身（藥粉）不需要過濾——它已是固態無菌粉末。但所有「接觸」或「影響」粉末的氣體（壓縮空氣、真空、惰性氣體）都必須通過滅菌級過濾器，因為這些氣體可能是微生物汙染的載體。

            

**VPPF 的過濾點：**每一條氣路（dosing air、purge air、vacuum）都需要一個獨立的 0.22 µm 疏水性過濾器，安裝在氣源與機械背板或旋轉氣動接頭之間。一台多針頭 VPPF 因此可能有數十個需要管理的氣體過濾器。

            

**Bag-in / Bag-out（袋入袋出）：**高活性化合物（高毒性、高效能藥物）的除塵系統，過濾器本身可能帶有大量藥粉，更換時具有操作人員暴露風險。Bag-in/bag-out 設計讓操作員在不接觸汙染過濾器的情況下完成更換——先裝入新過濾器的袋，再將舊過濾器袋密封取出。

        

        

            

#### 粉末充填過濾器管理總覽

            

```

過濾器類型          適用範圍              孔徑     完整性測試
─────────────────────────────────────────────────────
VPPF 氣體過濾器    dosing/purge air     0.22 µm  必須（批次記錄）
VPPF 真空過濾器    vacuum pathway       0.22 µm  必須（批次記錄）
惰性氣體過濾器     N₂ inerting          0.22 µm  必須（批次記錄）
清洗乾燥空氣過濾器 AF/VPPF CIP drying  0.22 µm  必須（批次記錄）
HEPA 除塵過濾器    exhaust/containment  HEPA     製造商自訂頻率
─────────────────────────────────────────────────────
所有過濾器：滅菌級疏水性（gamma-irradiated capsule 或滅菌釜型）
HEPA 過濾器：以containment 為主，非微生物管控，測試頻率較彈性
            
```

        

        

            

#### 比喻說明 Analogy

            

粉末充填的氣體過濾就像手術室的空調系統——手術刀本身是無菌的，但如果手術室的送風系統帶有細菌，傷口一樣會被感染。VPPF 的藥粉是「手術刀」（已無菌），壓縮空氣和真空是「送風系統」，若不過濾，就算藥粉本身是無菌的，充填過程中也可能被氣體汙染。

            

HEPA 除塵過濾器則更像廠房排氣道的過濾網——不是要確保空氣無菌，而是要確保強效藥粉塵不外洩傷害操作員。目的不同，管理方式也不同。

        

        

            

#### 重點提示 Key Notes

            

**完整性測試與批次放行：**所有 0.22 µm 氣體過濾器的完整性測試結果必須納入「批次放行（batch disposition）」考量——這與液體充填的除菌過濾器要求一致，是法規強制要求，不可省略。

            

**AF 的 CIP 限制：**只有 VPPF 的 bulk hopper 可以 CIP；VPPF 的 dosing system 元件（計量部分）不能 CIP，因此也不需要乾燥用壓縮空氣過濾器。AF 本身充填操作不需要氣體，但清洗後乾燥時需要。這個差異影響設備資格確認（OQ/PQ）的測試範圍。

            

**HEPA 過濾器的彈性：**HEPA 除塵過濾器的完整性測試頻率由製造商依風險自訂（基於位置、應用、系統設計），這與無菌製程中的除菌過濾器（每批必測）形成明顯對比——反映「containment vs. sterility」兩種不同管控目的。

        

        

            

#### 練習思考 Practice Questions

            

                
1. 一台 16 針頭的 VPPF，每個充填路徑有 dosing air、purge air 和 vacuum 三條氣路，請問這台設備最少需要管理幾個 0.22 µm 過濾器？這些過濾器的完整性測試如何整合到批次記錄？

                
2. 客戶要求用 AF 充填一種對氧氣敏感的強效抗癌藥粉，請說明需要哪些額外的過濾考量，以及 bag-in/bag-out 設計的必要性如何評估？

                
3. HEPA 除塵過濾器的完整性測試頻率「由製造商自訂」——你認為在設計 CDMO 的 SOP 時，應採用什麼準則來決定這個頻率？

            

        

    

Table 11.10-1 — 總結解析：各充填技術的液體路徑設計風險

    

        

## 風險彙整 Risk Summary

        

Table 11.10-1 將四種主要液體充填技術的關鍵設計風險做了橫向比較，是設備選型和製程設計的重要參考工具。以下是原文表格的完整中文對照說明：

        

        
            
                
                    
                    
                    
                    
                    
                
| 考量項目 | RPP（旋轉活塞泵） | DP（滾動膜片泵） | TP（時間壓力充填） | PP（蠕動泵） |
| --- | --- | --- | --- | --- |
            
            
                
                    ****
                    
                
| 過濾要求 | 四種技術均需 Point-of-Use 使用點過濾 |
                
                    ****
                    
                    
                    
                    
                
| 操作風險 | 空回程造成回流（back-flow）風險 | 泵操作的脈動對濾膜造成風險 | 未使用無菌接收器時過濾器壓降問題 | 無特別操作風險 |
                
                    ****
                    
                
| 集流管設計風險 | 避免集流管末端形成 dead-leg；集流管必須設計為無菌組裝或 SIP 並確保無菌路徑完整性 |
                
                    ****
                    
                
| 排氣設計風險 | 需考慮充填系統的排氣設計以排除空氣 |
            
        

        

        

注意：PP 在操作風險欄為「None」，因為蠕動泵的管路是封閉系統，液體由外部擠壓管路驅動，不存在回流或脈動問題。但集流管和排氣的共同設計要求仍適用。

    

    

        

## 導師解析 Tutorial Commentary

        

            

#### 核心概念解析 — 四種技術的本質差異

            

**PP（蠕動泵）為何沒有操作風險？**蠕動泵透過外部滾輪擠壓管路來輸送液體，液體路徑完全封閉在管路內，回流幾乎不可能發生，也不會產生破壞性脈動。這也是 PP 在無菌充填中廣泛使用的原因之一。

            

**TP（時間壓力充填）的壓降問題：**TP 系統利用氣體壓力將產品從壓力罐推出，過濾器安裝在出口處時，濾器的阻力（壓降）會影響充填精度——因為充填量是由壓力×時間決定的，若壓降不穩定（如濾膜逐漸堵塞），充填量就會漂移。

        

        

            

#### 重點提示 — 決策層級應用

            

當 CDMO 為新客戶選擇充填設備時，Table 11.10-1 就是風險矩陣的輸入依據：

            

                
- **高價值懸浮液產品** → RPP 的 back-flow 風險尤其危險（懸浮顆粒可能卡在濾膜），需要更大的緩衝容積設計

                
- **蛋白質藥物（剪切力敏感）** → DP 的脈動可能損傷蛋白質結構，需要評估緩衝距離或改用 PP/TP

                
- **精密小容量充填（<0.5 mL）** → TP 的壓降管理是劑量控制的關鍵，必須納入製程設計

            

            

所有這些風險評估都服從同一個決策層級：**無菌保證 > CQAs > 商業考量**。

        

        

            

#### 實務應用 Practical Application

            

在 CDMO 製程轉移（technology transfer）評估中，客戶若將產品從單一充填機技術轉移到不同技術（如從 RPP 換為 TP），Table 11.10-1 可作為風險評估的結構化框架：

            

                
1. 識別新技術帶入的新風險（如 TP 的壓降問題）

                
2. 確認集流管和排氣設計需要重新驗證

                
3. 評估現有完整性測試方案是否足夠覆蓋新設計

            

            

這個評估應在技術轉移協議（Technical Transfer Agreement）中明文記錄，並觸發設備確認（IQ/OQ/PQ）的重新執行。

        

    

    

### 本節重點回顧 Section Summary (11.8–11.12)

    

        
- **過濾器位置與集流管設計：**Point-of-use 過濾器雖然提供最佳的無菌保護，但若設計不當會產生 dead-leg，影響沖洗完整性；集流管的 SIP 設計必須確保每個分支都有足夠的排氣點，避免冷點。

        
- **各技術的操作風險差異：**RPP 有回流風險（需足夠緩衝容積）、DP 有脈動風險（需保持濾器距離）、TP 有壓降管理需求，PP 無特別操作風險——這些差異直接影響設備選型和製程驗證策略。

        
- **不可過濾產品的核心哲學：**當終端滅菌和除菌過濾都不可用時，「製程即產品（the process is the product）」——每個輸入成分必須個別保證無菌，液體路徑必須最短化，並強制進行風險評估（QRM）支撐控制策略。

        
- **粉末充填的氣體過濾：**雖然藥粉本身不需過濾，但所有接觸藥粉的氣體（壓縮空氣、真空、惰性氣體）均需 0.22 µm 滅菌級疏水性過濾，完整性測試結果必須納入批次放行；HEPA 除塵過濾器服務於 containment 而非無菌目的，測試頻率由製造商依風險決定。

        
- **決策層級貫穿全節：**無論是 dead-leg 風險、不可過濾產品的控制策略，還是粉末過濾器的完整性測試要求，所有設計和驗證決策均以「無菌保證 > 產品 CQAs > 商業彈性」為最高準則。

    

⇧

## Topic 12: Batch Setup 批次設置與丟棄 (p181-p189)

# Section 12: Discard Strategies & End-of-Fill Operations

    

丟棄策略與批次結束操作：從嵌套元件到填充尾聲的品質控制

    

PDA Manufacturing Technology Guide No. 1 | p181 - p189

    
    

        

本章決策優先序 Decision Hierarchy

        

            

1

Sterility Assurance 無菌保證 — 每一個丟棄決策的最高原則

            

2

Product CQAs 產品關鍵品質屬性 — 均勻性、含量、相容性

            

3

Business & Flexibility 商業彈性 — 最小化廢棄量、提升效率

        

    

    
    

        

### 本章學習目標

        

            
- 理解嵌套容器（nested components）填充時的丟棄決策：單支 vs. 整盤

            
- 掌握批次尾段（end of fill）常見填充失準原因及處置程序

            
- 比較四種液體充填技術在各類丟棄事件中的相對風險

            
- 了解無菌填充單元操作結束時的完整作業程序（EM、盤點、殘液、危害品 WIP、線路清場、文件）

        

    

    
    

        

### 本節內容索引

        

            12.5 End-of-Fill Discards
            12.6 Nested Components
            Table 12.6-1 Risk Matrix
            12.7 Miscellaneous Discards
            13.0 End-of-Fill Operations
            13.1 EM Completion
            13.2 Unused Containers
            13.3 Batch Samples
            13.4 Residual Product
            13.5 Hazardous Products
            13.6 Line Clearance
            13.7 Documentation
            13.8 Batch Reports
        

    

    
    
    
    

        

            

12.5

            

                

## Discard Strategies Associated with Conclusion of Fill

                

批次尾段填充失準的原因與丟棄策略

            

        

        

            

                

                    

Original Text — PDA Guide No.1 p181

                    

At the end of the aseptic fill-unit operation, as bulk product volume decreases, fillers can encounter a loss of fill accuracy. This may be due to:

                    

                        
- Low levels in the filling manifold / intermediate vessel

                        
- Foam or air introduced while the final volume of product is pumped or pressurized through the filter or transferred from the bulk vessel

                        
- Loss of homogeneity due to loss of recirculation or mixing capability from low volumes, especially for suspension products

                    

                    

Fillers may receive automated signals from the manifold or intermediate vessel to start and stop transfer from the bulk vessel. When the alarm is triggered due to lack of available bulk (low or low-low-level alarm), the filler is directed to begin shut down or initiate line clearance or empty mode. For high-value products, the shutdown may occur in stages — individual filling paths shut down progressively.

                    

The same technology used to permit refilling during priming can also be employed at end of fill. End-of-fill procedures must be included in the validation of the process.

                

                

                    

中文解析 Commentary

                    

                        

#### 核心概念：批次尾段為何容易失準？

                        

**填充尾段（end of fill）**是整個批次最脆弱的時段。三大失準原因：

                        

                            
- **液位不足**：manifold（分配歧管）或中間容器液位過低，泵浦抽不到足夠液體

                            
- **泡沫/空氣夾帶**：最後批量液體通過過濾器時，氣泡混入填充路徑

                            
- **均勻性喪失**：懸浮劑（suspension）在液量極少時，循環攪拌不足，粒子沉降，導致含量不均

                        

                    

                    

                        

#### 生活比喻：倒洗手乳到最後

                        

就像瓶裝洗手乳快用完時，壓一次出來的量忽多忽少，有時還夾帶空氣。填充機遇到的問題完全相同——液量不足時，計量精度就會失控。

                    

                    

                        

#### 關鍵提示：高價值產品要「分段關機」

                        

對於高價值產品（如生物製劑、稀有原料藥），不是一次性全線停機，而是**逐一關閉各條填充路徑**（progressive shutdown），讓每一支幫浦盡量使用完剩餘液量，最大化產品回收率。這是 Priority 3（商業彈性），但前提是不違反 Priority 1 的無菌保證。

                    

                    

                        

#### CDMO 應用思考

                        

你的 SOP 是否明確規範了「批次尾段」的觸發條件（low-level alarm 的設定值）？對懸浮劑（如胰島素晶體製劑）的尾段處理是否有獨立程序？End-of-fill 的驗證是否納入製程驗證範疇？

                    

                

            

        

    

    
    
    
    

        

            

12.6

            

                

## Discard Strategies Associated with Nested Components

                

嵌套容器的丟棄決策：單支 vs. 整盤

            

        

        

            

                

                    

Original Text — PDA Guide No.1 p181-182

                    

Filling syringes nested in tubs poses discard challenges when dose-control performance fails on an individual filling-needle position. Discarding the affected doses is the minimum action required. Two approaches:

                    

                        
1. **Discard individual syringes** from a failing pump/needle — significantly more complicated; requires robotic verification (reject marking/tracking or physical segregation) or four-eyes principle (independent verification step)

                        
2. **Discard the full tub** — more conservative and simpler from standpoint of quality system and documentation

                    

                    

**Note:** Some filling technologies do not easily permit deactivation of a single filling station; especially true in nested configurations. Reset of entire line may be more appropriate should a fault occur in a single filling station.

                    

Filling lines that permit return of units for re-dosing or which employ re-stoppering technology can reduce the number of discards.

                

                

                    

中文解析 Commentary

                    

                        

#### 核心概念：嵌套容器（Nested Components）的丟棄兩難

                        

**Nested syringes in tubs**（嵌套注射器裝盤）是預填式注射器的主流包裝形式。一個 tub 通常容納數十支注射器，共用同一層無菌屏障（tub lid）。當某一根填充針（filling needle）出現劑量失控時，問題來了：

                        

                            
- **方案 A — 僅棄失效支**：精準、省料，但需機器人驗證或雙人確認（four-eyes principle），文件複雜度高

                            
- **方案 B — 棄整盤**：保守，成本高，但品質系統負擔最小，文件清晰

                        

                        

在 Priority 1（無菌保證）下，方案 B 是最安全的預設選擇。

                    

                    

                        

#### 生活比喻：雞蛋盒中的壞蛋

                        

一盒12顆蛋，其中一顆懷疑有裂縫。你可以：(A) 仔細逐顆確認，只丟那一顆；或 (B) 整盒退掉。在製藥的世界裡，（A）需要機器人或雙人驗證，文件量驚人；（B）雖然浪費，但最不容易出錯。

                    

                    

                        

#### 關鍵提示：並非所有設備都支援單站關閉

                        

部分嵌套填充設備在設計上**無法獨立停用單一填充站**，一旦某站故障，只能全線重置。這代表整盤丟棄的情況比想像中更常見。選購設備時應評估此功能；驗證方案必須覆蓋「單站停用」的處理程序。

                    

                    

                        

#### 思考問題

                        

若你的產品是昂貴的單株抗體（mAb），以嵌套 PFS 形式灌裝，第 3 站填充針出現重量偏低警示。在決定棄單支或棄整盤之前，你需要確認哪些資訊？（提示：設備能力、追溯能力、品質系統要求）

                    

                

            

        

    

    
    
    
    

        

            

12.6-1

            

                

## Table 12.6-1: Common Discard Events & Liquid Filling Technology Risk Matrix

                

常見丟棄事件與各液體充填技術之相對風險比較

            

        

        

            
            

                

                    

Original Text — Notes on Table 12.6-1

                    

The table below compares risk levels across four liquid filling technologies for five common discard event categories. Risk levels are highly variable depending on selected materials and system design. Minimizing distances always results in lower risk.

                    

Technologies compared:

                    

                        
- **PP** — Peristaltic Pump (蠕動泵浦)

                        
- **RPP** — Rotary Piston Pump (旋轉活塞泵浦)

                        
- **TP** — Time Pressure (時間壓力系統)

                        
- **DP** — Diaphragm Pump (隔膜泵浦)

                    

                

                

                    

中文解析 Commentary

                    

                        

#### 閱讀此表的方式

                        

每一列代表一類丟棄風險場景；每一欄代表一種填充技術。風險等級以顏色標示：高風險 中風險 低風險 視設計而定。

                        

重點是：**沒有任何一種技術在所有面向都是低風險的**。選型時必須針對你的產品特性（懸浮劑？高氧敏感？長接觸路徑？）進行風險矩陣分析。

                    

                    

                        

#### 風險矩陣決策框架

                        

```
丟棄風險評估 = f(技術類型, 物料相容性, 管路長度, 是否有反饋機制)

關鍵原則：
  - 管路越短 → 風險越低（適用氧化、吸附、均勻性）
  - 有反饋機制 → 劑量控制風險降低
  - 介入在隔離器外 → 無菌丟棄風險降低
```

                    

                

            

            
            

                
                    
                        
                              

                              

                              

                              

                              

                        
| Discard Consideration丟棄考量 | PP蠕動泵浦 | RPP旋轉活塞泵浦 | TP時間壓力 | DP隔膜泵浦 |
| --- | --- | --- | --- | --- |
                    
                    
                        
                            ****  

                            
                              

                            
                              

                        
| Priming, loss of dose control, or end-of-fill discards                                 預充、劑量失控或批次尾段丟棄 | 視重量控制機制而定 | 高風險個別活塞無反饋機制（除非特別設計） | 視機制而定 | 視機制而定雷射活塞控制系統可降低風險 |
                        
                            ****  

                              

                              

                              

                              

                        
| Discards for pump interventions                                 幫浦介入引起的丟棄 | 低風險介入在隔離器外時 | 高風險介入通常在填充隔離器內部 | 低風險在隔離器外時；隔離器內則高風險 | 低風險在隔離器外時；隔離器內則高風險 |
                        
                            ****  

                              

                              

                              

                              

                        
| Discards due to homogeneity loss in suspensions                                 懸浮劑均勻性喪失 | 高風險管路長，段落多，材質混雜 | 低風險有再循環設計時 | 低風險有再循環設計時 | 中風險視再循環機制而定 |
                        
                            ****  

                              

                              

                              

                              

                        
| Discards due to absorption or leachables                                 吸附或浸出物引起的丟棄 | 高風險管路長且多段，材質種類多 | 低風險管路短，幫浦在隔離器內 | 低風險管路保持短時 | 中風險隔膜+管路雙接觸面；外掛式管路可能較長 |
                        
                            ****  

                              

                              

                              

                              

                        
| Discards due to oxidation                                 氧化引起的丟棄 | 高風險大量管路帶來高氧氣暴露面積 | 低風險管路極短 | 中風險視類型與管路長度而定 | 中風險視類型與管路長度而定 |
                    
                

            

            
            

                

                    

**Notes:** Risk levels are highly variable depending on selected materials and system design. Minimizing distances always results in lower risk.

                

                

                    

                        

#### 表格總結：PP 風險最高、RPP 介入風險最高

                        

**蠕動泵浦（PP）**在吸附、氧化、懸浮均勻性三項均是高風險，因管路長度是最大弱點。**旋轉活塞泵浦（RPP）**在介入操作上風險最高，因介入點通常在填充隔離器內部。**縮短接觸路徑**是所有技術降低風險的共通法則。

                    

                

            

        

    

    
    
    
    

        

            

12.7

            

                

## Miscellaneous Discard Strategies while Operating

                

其他操作中的丟棄情況：感測器與拒絕站

            

        

        

            

                

                    

Original Text — PDA Guide No.1 p183

                    

Rejections may occur for other reasons not directly related to filler operation:

                    

                        
- Raised stopper/plunger placement detection — 推塞/活塞位置異常偵測

                        
- Missing stopper/plunger — 缺塞/缺活塞

                        
- Fallen components — 元件落地

                        
- Bad crimp seals/closures (at capper) — 壓蓋異常

                    

                    

These sensors and rejection stations should be integrated into the filling conveyance system and tested during qualification.

                

                

                    

中文解析 Commentary

                    

                        

#### 核心概念：非填充機本身造成的廢棄

                        

本節討論的拒絕（rejection）不是劑量問題，而是**容器/封閉系統完整性**問題。任何一項缺失都可能危害無菌保證（Priority 1）或患者安全（Priority 2）：

                        

                            
- 推塞位置偏高 → 可能漏液、污染

                            
- 缺推塞 → 無菌屏障失效

                            
- 元件落地 → 污染風險，需追溯

                            
- 壓蓋不良 → 封閉完整性失敗

                        

                    

                    

                        

#### 關鍵提示：感測器必須納入驗證

                        

這些感測器與拒絕站必須在**設備確效（qualification）**中進行測試，包括：感測靈敏度確認、拒絕位置的物理驗證、與批次記錄的整合。如果感測器本身在確效時未通過測試，則所有依賴該感測器的拒絕決策都存在合規風險。

                    

                    

                        

#### CDMO 應用思考

                        

你的填充線上，「元件落地」的 SOP 是否清楚定義了追溯範圍？落地事件發生後，需要追溯多少支前後的容器？是否有自動標記機制，還是依賴人工判斷？

                    

                

            

        

    

    
    
    
    

        

            

13.0

            

                

## Considerations for the End of the Aseptic Fill Unit Operation

                

無菌填充單元操作結束的整體考量

            

        

        

            

                

                    

Original Text — PDA Guide No.1 p183-184

                    

After completion of filling, elements to consider for orderly completion:

                    

                        
- For single-batch production: entire line disassembled for cleaning and sterilization after batch

                        
- For campaign production: more limited interventions before resuming for next batch

                    

                    

Activities and sequence for end of aseptic fill-unit operation:

                    

                        
- Completion of EM (Environmental Monitoring)

                        
- Handling of remaining unused containers and closures

                        
- Collecting, off-line labeling and accounting for batch samples

                        
- Handling of residual product

                        
- Washing in place of containment barrier (for hazardous/potent products)

                        
- Line clearance activities

                        
- Close-out of documentation (rejects, line losses, samples, finished goods)

                        
- Assessing equipment batch reports and audit trails

                    

                

                

                    

中文解析 Commentary

                    

                        

#### 核心概念：單批次 vs. 連續批次（Campaign）的差異

                        

批次結束的操作強度，取決於生產模式：

                        

                            
- **單批次生產**：批次結束後，全線拆卸清洗、滅菌，下一批從零開始。操作最徹底，但時間成本最高。

                            
- **連續批次（Campaign）**：同一產品連續生產多批，批次間介入最小化，主要處理取樣、廢棄物、文件，不需全線拆解。風險管理聚焦於交叉污染防止。

                        

                    

                    

                        

#### 生活比喻：餐廳打烊 vs. 翻桌

                        

單批次生產像餐廳打烊：洗碗、清場、備料全部重來。Campaign 生產像快速翻桌：清掉餐盤、補充食材，新客人馬上入座。兩者對清潔深度的要求完全不同。

                    

                    

                        

#### 批次結束作業八步驟（順序關鍵）

                        

```
步驟順序（不可任意調換）：
  1. 完成環境監控（EM）採樣
  2. 處理未用完的容器與封蓋
  3. 收集並標記批次樣品
  4. 處理殘餘產品
  5. 危害品 WIP（如適用）
  6. 線路清場（Line Clearance）
  7. 關閉文件（對帳、核實）
  8. 審閱設備批次報告與稽核軌跡
```

                    

                

            

        

    

    
    
    
    

        

            

13.1

            

                

## Completion of Environmental Monitoring at End of Aseptic Fill

                

批次結束時的環境監控完成程序

            

        

        

            

                

                    

Original Text — PDA Guide No.1 p184

                    

EM (total particle and viable sampling) must continue until all filled containers are fully closed, sealed, and have exited the filling line. In campaign production, EM must continue through changeover activities.

                    

Surface EM is typically conducted at end of aseptic fill for critical product-contact surfaces (filling needles, feed bowls in sorting systems). These samples should be collected **before significant disassembly activities**. However, some stoppers must be removed from sorting systems before sampling bowl — requires careful sequencing preplanned in SOPs for each specific filling-line design.

                    

If used media plates have accumulated within the barrier, they need to be removed and reconciled for laboratory submission. Exit monitoring for cleanroom personnel conducted when personnel leave the environment.

                

                

                    

中文解析 Commentary

                    

                        

#### 核心概念：EM 的終點界定

                        

EM 的採樣時間點常被誤解。正確定義：

                        

                            
- **空氣粒子 + 活菌採樣**：必須延續到**所有容器完全封閉並離開填充線**為止

                            
- **表面採樣**：應在重大拆卸前完成，特別是填充針和給料碗

                            
- **Campaign 生產**：EM 必須延伸到批次切換作業（changeover）期間，不可中斷

                        

                    

                    

                        

#### 關鍵提示：EM 採樣順序必須事先規劃於 SOP

                        

有些填充線設計上，在採樣給料碗（feed bowl）之前，必須先移除部分推塞。這產生一個矛盾：移除推塞本身就是一個干擾步驟。解決方案是：**在 SOP 中預先規劃每條填充線專屬的 EM 採樣順序**，確保不因採樣而污染待測表面，也不讓拆解動作覆蓋微生物證據。

                    

                    

                        

#### CDMO 應用思考

                        

你的填充線 SOP 中，是否針對每條線（Line A、B、C...）各自制定了獨立的 EM 採樣順序圖？如果目前是共用一份通用 SOP，這是一個需要改進的合規風險點。

                    

                

            

        

    

    
    
    
    

        

            

13.2

            

                

## Handling of Unused Containers and Closures at End of Aseptic Fill

                

批次結束時未用完容器與封閉元件的處理

            

        

        

            

                

                    

Original Text — PDA Guide No.1 p184-185

                    

Unused containers can often be emptied by conveying to end of line. Closures/components removed from sorters and hoppers (may require vacuum cleaners or specialty tools). Care must be taken to ensure complete line clearance to avoid mix-up. EM sequencing imperative.

                    

Consideration should also be given to serialization — the process of assigning a unique serial number to each saleable product unit. If serialization identity is conferred at point-of-fill, the serialization system should be subjected to orderly shutdown. Empty containers conveyed down the line should **not** be assigned serial numbers.

                

                

                    

中文解析 Commentary

                    

                        

#### 核心概念：未使用容器的清除邏輯

                        

批次結束後，填充線上的空容器必須全數清除，防止混批（mix-up）。主要方式：

                        

                            
- **空瓶/空針**：通過輸送帶送至線尾集中清除

                            
- **推塞、壓蓋等小元件**：從分選機（sorter）和料斗（hopper）移除，可能需要真空清除器

                        

                        

所有操作必須與 EM 採樣順序協調，不能破壞已採樣表面。

                    

                    

                        

#### 關鍵提示：序列化（Serialization）與空容器的衝突

                        

若序列化（賦予唯一序號）是在**填充點**進行，則線路清場時空容器經過時，必須確保序列化系統已正常關機，否則空容器會被賦予序號，流入追溯系統，造成後續嚴重的帳目混亂。序列化系統的關機程序本身必須納入 SOP 並經過驗證。

                    

                

            

        

    

    
    
    
    

        

            

13.3

            

                

## Handling of Batch Samples at End of Aseptic Fill

                

批次樣品的收集、標記與遞送

            

        

        

            

                

                    

Original Text — PDA Guide No.1 p185

                    

Any batch samples (filled containers, bulk samples) remaining within the line need to be submitted to laboratory with appropriate labels. Samples with sensitivity (temperature, light) may have been stored in local controlled environments. At end of aseptic fill: ensure all samples are collected, accounted for, and submitted. Batch samples included in reconciliation section of batch record.

                

                

                    

中文解析 Commentary

                    

                        

#### 核心概念：樣品管理是帳務閉環的一部分

                        

批次樣品不只是「留樣」，更是批次**物料平衡（reconciliation）**的一部分。批次記錄中必須記錄：取樣支數、標記是否正確、是否有溫度/光照敏感樣品需特殊保存，以及樣品遞交至實驗室的時間與紀錄。任何未能對帳的樣品都可能導致批次審查問題。

                    

                    

                        

#### 生活比喻：銀行點鈔

                        

就像銀行每日結帳前的點鈔程序——每一張鈔票（每一支樣品）都必須有去向，不能有不明損失。批次樣品遞交實驗室就是這個「點鈔」動作。

                    

                

            

        

    

    
    
    
    

        

            

13.4

            

                

## Handling of Residual Product at End of Aseptic Fill

                

殘餘產品的處理與產率計算

            

        

        

            

                

                    

Original Text — PDA Guide No.1 p185-186

                    

A small amount of residual product will remain in bulk vessels, transfer lines, filtration apparatus, and filler at conclusion of batch. Batch record should include methodology for calculating this waste for accountability and yield purposes.

                    

Considerations for handling residual product:

                    

                        
- Running filler up to point of dry-cycling to purge fill lines before disconnection while rejecting final containers

                        
- Breaking connections, draining liquid product through low points or evacuating powder product

                        
- Controlling potential for drips (or powder) and controlling excess product

                    

                    

If product is potent or toxic: additional controls such as flushing parts to avoid drips or sending excess product to waste treatment (chemical or heat inactivation).

                

                

                    

中文解析 Commentary

                    

                        

#### 核心概念：殘液是物料平衡的合法損耗

                        

每批填充結束後，以下位置必然殘留產品：

                        

                            
- bulk vessel（原料容器）底部

                            
- 轉移管路（transfer lines）

                            
- 過濾裝置

                            
- 填充機頭

                        

                        

這些殘留是工程限制，不可避免，但必須有**系統性的計算方法**記錄在批次記錄中，作為收率（yield）計算依據。殘液過多可能是工程或操作問題的信號。

                    

                    

                        

#### 生活比喻：洗髮精瓶底

                        

洗髮精倒完還有一點點留在瓶底，加水稀釋再用是常識。製藥的「殘液」是同樣的物理限制，不同之處在於必須精確記錄、計算，並根據產品特性決定是回收、廢棄，還是進行無害化處理。

                    

                    

                        

#### 關鍵提示：毒性/高活性產品需特殊廢棄程序

                        

對於高毒性或高活性產品（如細胞毒素、OEB 4/5 級化合物），殘液和沖洗液必須導入**廢棄物處理系統**（化學滅活或熱處理），不可直接排放。這些程序必須有專屬 SOP 並納入員工職業暴露保護計劃。

                    

                    

                        

#### 思考問題

                        

你目前批次記錄中，殘液的計算方式是固定常數（固定損耗比例）還是每批實際測量？哪種方式對批次審查的說服力更強？若批次間殘液量突然增加，代表什麼工程信號？

                    

                

            

        

    

    
    
    
    

        

            

13.5

            

                

## End of Aseptic Fill for Potent or Hazardous Products

                

高活性或危害品填充的結束程序：WIP 與去污

            

        

        

            

                

                    

Original Text — PDA Guide No.1 p186-187

                    

After processing potent or hazardous products, a wash-in-place (WIP) cycle must be performed before the containment barrier can be opened. WIP may be used to:

                    

                        
- Knock down aerosols or dust

                        
- Dilute active ingredients

                        
- Flush active ingredients to drain or waste treatment

                        
- Inactivate the active ingredient (where water/chemical agents/temperature capable of inactivation)

                    

                    

WIP is performed using automated spray balls and/or spray wands through glove ports. Takes place within the zone where product exposure is possible (from below HEPA filters down to air returns). **HEPA filters cannot be wetted** — care must be taken.

                    

For biologically active materials (Biosafety Level rated), WIP inactivation process (liquid and/or gas) must be sufficiently rigorous. VPHP (Vaporized Hydrogen Peroxide) has been successfully used for inactivation of biohazardous materials.

                    

**Note:** Filling lines for potent/hazardous products often employ separate external container washing unit operation. May occur in-line immediately after capping or as off-line process. When working with nested containers, common to denest containers for adequate coverage of all external surfaces — but **nests themselves must also be treated or disposed of**.

                

                

                    

中文解析 Commentary

                    

                        

#### 核心概念：WIP（就地清洗）是開門前的強制步驟

                        

**Wash-in-Place（WIP，就地清洗）**是危害品填充隔離器在批次結束後、開門前的必要步驟。目的是降低操作員暴露風險。WIP 的四大功能：

                        

                            
- 沉降氣溶膠與粉塵

                            
- 稀釋活性成分濃度

                            
- 將活性成分沖入廢水處理系統

                            
- 化學或熱滅活（視活性成分特性）

                        

                    

                    

                        

#### 關鍵提示：HEPA 過濾器不能淋濕

                        

WIP 噴灑範圍是從 HEPA 過濾器**下方**到回風口。HEPA 濾紙一旦被水浸濕，結構受損，過濾效率大幅下降，且難以乾燥。噴球（spray ball）的設計和安裝位置必須確保水霧不會接觸 HEPA 過濾器。這個細節必須在設備驗收時確認。

                    

                    

                        

#### VPHP vs. 液態 WIP：生物危害品去污比較

                        

```
生物安全等級（BSL）材料的去污方案：

液態 WIP：
  優點 — 快速、成本低、設備普及
  適用 — 化學藥物、可液態滅活的生物材料
  限制 — 對孢子或強耐性微生物效果不足

VPHP（汽化過氧化氫）：
  優點 — 穿透力強、無殘留（分解為水和氧）
  適用 — BSL-rated 生物材料、廣譜滅活
  限制 — 周期時間較長、需 VPHP 發生器設備
```

                    

                    

                        

#### CDMO 應用思考

                        

若未來你們承接 ADC（抗體藥物複合體）或細胞毒素類高活性產品，你的填充隔離器是否已配備 WIP 系統？噴球覆蓋率有無驗證？廢水去向是否符合環保法規？嵌套容器的去巢（denest）作業有無獨立 SOP？

                    

                

            

        

    

    
    
    
    

        

            

13.6

            

                

## Line Clearance at End of Aseptic Fill

                

線路清場：防混批的關鍵管控措施

            

        

        

            

                

                    

Original Text — PDA Guide No.1 p187

                    

Line clearance = inspection of line to ensure no product, containers, or components were missed during clearing.

                    

Purposes:

                    

                        
- Preventing mix-up of materials batch to batch

                        
- Ensuring all samples are captured and accounted for

                        
- Ensuring all rejects are captured and accounted for

                    

                    

Line clearance may be performed more than once. Operators often conduct initial clearance to ensure all batch-related materials are captured, then formal line-clearance check activity with independent double-check by Quality Assurance.

                

                

                    

中文解析 Commentary

                    

                        

#### 核心概念：線路清場（Line Clearance）的三大目的

                        

Line Clearance 不只是「打掃」，是一個**帳目稽核動作**，確保：

                        

                            
- 不同批次的物料不會混在一起（防混批 = Priority 2 患者安全）

                            
- 所有取樣已完整回收，未遺留在線上

                            
- 所有拒絕品（rejects）已計入，無法流入合格品庫存

                        

                    

                    

                        

#### 生活比喻：學校考試收卷

                        

監考老師收卷時，不只是把卷子堆起來，還要確認每個座位都交了卷（對應：所有容器都被清場）、沒有試卷混入其他班（對應：防混批），收完後助教再確認一次（對應：QA 獨立雙重確認）。

                    

                    

                        

#### 關鍵提示：兩階段清場 + QA 雙重確認

                        

標準做法是**兩輪確認**：

                        

                            
1. **操作員初步清場**：確保物料全數清除

                            
2. **QA 獨立複查**：正式線路清場確認，需記錄在批次記錄

                        

                        

若只有一輪（操作員自己確認），在法規層面是不足夠的。QA 的參與和獨立性是關鍵。

                    

                

            

        

    

    
    
    
    

        

            

13.7

            

                

## Close-Out of Documentation at End of Aseptic Fill

                

批次文件結案：物料平衡與 ERP 系統應用

            

        

        

            

                

                    

Original Text — PDA Guide No.1 p187-188

                    

Master batch record should capture: usage quantities, usage statistics, percentage yield, and reconciliation. Many item types to record: inventoried materials, rejects and line losses, samples, labels, packaging materials, finished goods.

                    

When requirement is for inventory control or business/process optimization, an Enterprise Resource Planning (ERP) System may be used in place of master batch record. Most important reason to collect and record data: **account for all materials to prevent mix-up**.

                

                

                    

中文解析 Commentary

                    

                        

#### 核心概念：物料平衡（Reconciliation）的項目清單

                        

批次記錄結案必須對以下所有項目進行帳目平衡：

                        

                            
- 投入原料與包材使用量

                            
- 拒絕品（rejects）與線路損耗（line losses）

                            
- 取樣數量

                            
- 標籤使用量（含報廢量）

                            
- 包裝材料

                            
- 完成品（finished goods）數量

                        

                        

投入量 = 完成品 + 拒絕品 + 取樣 + 殘留 + 線路損耗。任何超出可接受範圍的偏差都需調查。

                    

                    

                        

#### 收率計算公式

                        

```
批次收率（Batch Yield）：

  理論收率 = 投料量 / 單位容量

  實際收率（%）= (完成品數量 / 理論收率) × 100%

  物料平衡：
  投料 = 合格品 + 樣品 + 拒絕品 + 殘液 + 線路損耗

  可接受收率範圍：需在產品主批記錄中預設上下限
  超出範圍 → 必須啟動偏差調查（Deviation Investigation）
```

                    

                    

                        

#### 關鍵提示：ERP 不能取代批次記錄的法規功能

                        

ERP 系統（如 SAP）可以協助庫存管理和業務優化，但從 GMP 法規角度，**批次記錄（Batch Record）是法規要求的主文件**，ERP 只是輔助工具。若公司選擇以 ERP 作為主要記錄工具，必須確保其符合 21 CFR Part 11（電子記錄/電子簽章）的要求。

                    

                

            

        

    

    
    
    
    

        

            

13.8

            

                

## Assessment of Batch Reports and Audit Trails at End of Aseptic Fill

                

設備批次報告與稽核軌跡的審閱

            

        

        

            

                

                    

Original Text — PDA Guide No.1 p188-189

                    

Batch record review includes printouts or electronic records from:

                    

                        
- Washers, tunnels, autoclaves, ovens

                        
- CIP/SIP systems

                        
- Biodecontamination units (hydrogen peroxide)

                        
- Fillers

                        
- Lyophilizers (凍乾機)

                        
- Cappers

                        
- Exterior vial washers

                        
- Terminal sterilizers

                        
- Packaging equipment (including serialization system)

                    

                    

Also reviewed: EM (total particulate, temperature, relative-humidity monitoring), utility monitoring through building automation systems, isolator control systems, EM systems.

                    

Not only process parameters but also alarms and alarm acknowledgement. Audit trails evaluated to demonstrate:

                    

                        
- No inappropriate adjustments were made

                        
- All personnel interacting with system were qualified and permitted

                    

                

                

                    

中文解析 Commentary

                    

                        

#### 核心概念：批次記錄審閱的設備清單

                        

一個完整無菌填充批次的記錄審閱，涵蓋從容器處理到最終包裝的**全鏈設備**：

                        

                            
- 洗瓶機、去熱原隧道、滅菌鍋、乾熱烘箱

                            
- CIP（就地清洗）/ SIP（就地滅菌）系統

                            
- 生物去污系統（H₂O₂）

                            
- 填充機、凍乾機、壓蓋機、外瓶清洗機、末端滅菌機

                            
- 包裝設備（含序列化系統）

                        

                    

                    

                        

#### 關鍵提示：警報 + 警報確認 = 稽核軌跡核心

                        

現代法規稽查（FDA、EMA）已高度重視**稽核軌跡（Audit Trail）**中的警報記錄。審閱重點不只是製程參數是否在範圍內，更要確認：

                        

                            
- 警報是否被適當確認（acknowledged）？

                            
- 有無不當的參數修改？

                            
- 所有操作人員是否有資格並獲授權？

                        

                        

若稽核軌跡顯示未授權的參數調整，即使最終產品看似合格，批次放行仍可能面臨嚴重挑戰。

                    

                    

                        

#### 稽核軌跡審閱重點框架

                        

```
稽核軌跡（Audit Trail）應確認三件事：

  1. 完整性（Integrity）
     - 所有製程步驟均有記錄？
     - 沒有數據刪除或空白？

  2. 合規性（Compliance）
     - 參數均在規格範圍內？
     - 警報均有適當確認和處置？

  3. 授權（Authorization）
     - 每位操作人員的 user ID 均有授權記錄？
     - 沒有未授權的數據修改？

  → 任一項不符合 = 潛在偏差，需要調查
```

                    

                    

                        

#### CDMO 應用思考

                        

你目前的批次審閱流程中，是否有獨立的稽核軌跡審閱步驟？填充機的電子批次記錄（eBR）是否符合 21 CFR Part 11？QA 在審閱警報確認記錄時，是否有明確的可接受標準（哪些警報可以確認後繼續，哪些必須啟動偏差）？

                    

                

            

        

    

    
    
    
    

        

## 本章重點總結 Section Summary

        

            

                

### 丟棄策略要點（Sections 12.5–12.7）

                

                    
- 批次尾段的三大失準原因：液位不足、氣泡夾帶、懸浮均勻性喪失

                    
- 嵌套容器丟棄兩選項：棄單支（需機器人/雙人驗證）vs. 棄整盤（保守但簡單）

                    
- 四種填充技術的風險側重不同：PP 管路長 = 吸附/氧化高風險；RPP 介入在隔離器內 = 無菌風險高

                    
- 縮短接觸路徑是所有技術降低風險的共通法則

                    
- 感測器與拒絕站必須納入設備確效測試

                

            

            

                

### 批次結束作業要點（Sections 13.0–13.8）

                

                    
- 八步驟有嚴格順序，EM 採樣必須最優先且不可因拆解而受干擾

                    
- 序列化系統關機程序必須確保空容器不被賦號

                    
- 殘液計算方法必須記錄在批次記錄中以支持物料平衡

                    
- 危害品 WIP 是開門前強制步驟；HEPA 過濾器不能淋濕

                    
- 線路清場需兩輪：操作員初步 + QA 獨立複查

                    
- 稽核軌跡審閱重點：警報確認記錄 + 未授權操作排除

                

            

        

        

            

### 決策優先序再確認 Decision Hierarchy Reinforcement

            

                

**1. 無菌保證** — 每一個丟棄決策的底線；EM 不可中斷

                

**2. 產品 CQAs** — 均勻性、含量、浸出物均影響患者安全

                

**3. 商業彈性** — 高價值產品分段關機、Campaign 生產最小化介入

            

        

    

⇧

## Topic 13: APS / Media Fill 無菌模擬 (p189-p195)

# Section 13: Aseptic Process Simulation (Media Fill)

    

無菌製程模擬（培養基灌充）— 充填系統與環境整合設計

    

PDA Manufacturing Technology Guide No. 1 | doc p189 - p195

    

### 本章學習目標

    

        
- 理解屏障系統（Barrier System）在無菌充填中的核心角色：將操作人員與產品完全分離

        
- 區分 Isolator（隔離器）、cRABS（密閉限制進出屏障系統）、oRABS（開放限制進出屏障系統）三類系統的設計原理與管控等級

        
- 掌握 Table 14.2-1 比較表中各屬性的監管意義與 CDMO 選型考量

        
- 應用決策層次：無菌保證 > 產品 CQA > 商業靈活性，評估屏障選型的風險與效益

        
- 了解無菌製程模擬（APS）在各屏障類型中的要求差異

    

    14.0 Filling System and Environmental Considerations — Overview

    

        

## 原文內容 Original Text

        

Aseptic processing is expected to take place in a manner that separates personnel from the process, which is commonly accomplished by providing a barrier to attain separation. A barrier is a physical partition that separates the aseptic processing area (Grade A) from the background environment, protecting it from the environment and the people working in it.

        

Further, most regulatory authorities consider standard aseptic cleanrooms, those that do not include controlled separation of operators and product filling, legacy systems that require improvements. Risk assessments and risk mitigations to continue operations until full barrier-technology upgrades are in place are recommended to be undertaken in consultation with the appropriate regulatory partners.

        

For additional detail beyond what this section provides on the design of cleanrooms, isolators and RABS, see the following references:

        

            
- ISO 14644 Cleanrooms and Associated Controlled Environments

            
- ISO 13408-6 Aseptic Processing of Healthcare Products Part 6 – Isolator Systems

            
- PDA Technical Report No. 34: Design and Validation of Isolator Systems for the Manufacturing and Testing of Health Care Products

            
- PDA Points to Consider for the Aseptic Processing of Sterile Pharmaceutical Products in Isolators

            
- PDA Points to Consider No. 12 Restricted Access Barrier Systems (RABS)

        

    

    

        

## 導師解析 Tutorial Commentary

        

            

#### 核心概念解析 Key Concepts

            

**Barrier（屏障）:** 將 Grade A 無菌充填區域與外部環境（含操作人員）物理隔離的結構。這是現代無菌充填的基礎設計原則。

            

**Legacy System（舊式系統）:** 指未設置屏障、操作人員直接在開放潔淨室中作業的傳統設計。監管機構明確將此視為需要改善的過時系統。

            

**Grade A（A級）:** 無菌操作的最高潔淨等級，要求非活性微粒 ≥0.5μm ≤3,520 顆/m³（靜態），活性微粒幾乎不允許存在。

        

        

            

#### 比喻說明 Analogy

            

想像手術室裡的外科手術：外科醫師不能直接用裸手接觸患者的開放傷口，必須戴手套、穿無菌手術衣，並在嚴格消毒的環境中操作。

            

無菌充填的屏障系統就像手術室的「隔離措施」——人員永遠在屏障外操作，產品在屏障內被保護，兩者之間的物理隔離是無菌保證的第一道防線。

            

舊式潔淨室（Legacy System）就像「沒有手術服的手術室」——規則嚴格，但人員近身接觸的風險依然存在，監管機構已明確要求升級。

        

        

            

#### 重點提示 Key Notes

            

**監管明確立場：**「大多數監管機構」將無屏障的傳統潔淨室定位為 legacy system（過時系統），需要升級。這不只是建議，而是帶有監管壓力的明確方向。

            

**升級期間的策略：**在完成屏障技術升級之前，應與監管機構協商風險評估與緩解措施，不能無限期拖延升級計畫。

            

**決策層次提醒：**無菌保證（Sterility Assurance）永遠排第一。屏障系統的存在本身就是為了優先保護無菌性，而非操作方便性。

        

        

            

#### 練習思考 Practice Questions

            

                
1. 您所在的設施目前使用哪種屏障系統？如果還在使用傳統潔淨室（無屏障），下一步的升級路徑是什麼？

                
2. 為什麼監管機構要特別強調「人員與充填過程的分離」？哪些污染風險是屏障系統能有效控制的？

                
3. PDA TR34 和 EU GMP Annex 1 對於屏障系統的要求有哪些核心交集？

            

        

    

    14.1 Types of Barrier Systems for Aseptic Operations

    

        

## 原文內容 Original Text

        

The two barrier systems primarily used by the pharmaceutical and biopharmaceutical industry that provide the required separation between operators and aseptic operations in Grade A environments are:

        

            
- Isolators

            
- Restricted Access Barrier Systems (RABS)

        

        

Isolators are either fully closed or partially open to allow the ingress and egress of components and finished goods; they are characterized largely by their ability to withstand automated biodecontamination cycles usually with a vapor phase, gaseous, or aerosolized agents (e.g., hydrogen peroxide). In contrast, RABS provide a rigid-wall enclosure that cannot always be fully sealed. RABS are disinfected mainly with liquid disinfectants and/or sporicides applied to surfaces, though some closed RABS can support automated biodecontamination (e.g., using hydrogen peroxide in vapor phase) with or without the same treatment for the surrounding cleanroom environment.

        

Both isolators and RABS may provide access to the enclosed equipment and process through glove ports and make use of RTPs (Rapid Transfer Ports) to introduce equipment, components, monitoring, and cleanroom supplies. Likewise, the sterile fluid pathway may be introduced through a transfer port or intrinsic sterile connection device at the barrier boundary. See Section 9.0 and Section 10.0 for more information on various transfer mechanisms, their operations, and controls. See Section 11.0 for more information on sterile fluid pathways.

        

Both isolators and RABS have doors; however, how and when they are used differs. For the isolator, the door is opened only at the beginning of the setup and, again, at the end of the aseptic fill-unit operation or, if multiple batches can be manufactured, at the end of the campaign. After the initial setup and cleaning are performed, the isolator is closed and biodecontaminated before use.

        

RABS, on the other hand, must be fully disinfected prior to setup, and any further opening of the RABS doors, including setup, constitutes an intervention. Any ingress or egress after disinfection must be protected by overhead unidirectional airflow that covers the region of the open door to prevent contamination of the Grade A environment. Consequently, intense design activities should be undertaken to minimize the number and types of open-door interventions that will be required within a RABS. The intent is to limit open-door interventions to the absolute minimum (see Section 8.2). Highly detailed procedures must govern those open-door interventions (and indeed all interventions) due to the potential disruption of the unidirectional airflow and the proximity of the operator to the critical aseptic zone. See Section 8.0, PDA Points to Consider No.1: Aseptic Processing (Revised 2023) and PDA Points to Consider No 12: Restricted Access Barrier Systems (2025) for additional details on critical interventions and for working within RABS, respectively.

    

    

        

## 導師解析 Tutorial Commentary

        

            

#### 核心概念解析 Key Concepts

            

**Isolator（隔離器）:** 能承受自動化生物去污（Automated Biodecontamination）循環的密閉屏障，通常使用氣相過氧化氫（VHP）滅菌。門只在批次開始設置和結束時打開，期間完全封閉。

            

**RABS（限制進出屏障系統）:** 剛性壁面圍封，主要以液態消毒劑/殺芽孢劑消毒表面。密閉性不如 Isolator，任何開門動作均構成干預事件（Intervention）。

            

**Glove Port（手套口）:** 固定在屏障壁上的手套-袖套組合，讓操作人員在不破壞屏障完整性的前提下進行屏障內操作。

            

**RTP（快速傳遞口）:** 允許物料（零件、監測設備、耗材）在不暴露 Grade A 環境的情況下進出屏障的專用傳遞裝置。

            

**Biodecontamination（生物去污）:** 使用化學試劑（如 VHP）對封閉空間進行滅菌級別的微生物去除，與一般消毒（disinfection）不同，達到的微生物滅殺水平更高。

        

        

            

#### 比喻說明 Analogy

            

**Isolator vs. RABS = 太空站 vs. 無塵室手術帳篷**

            

**Isolator** 像太空站：完全密封、自給自足的環境，人員透過固定手套口操作，進出物料必須經過氣閘（Airlock）。啟動前用 VHP 徹底滅菌，一旦投入使用就不開門。安全性最高，但建置成本最貴。

            

**RABS** 像無塵室裡的外科手術帳篷：提供物理屏障和向下氣流保護，但帳篷本身並非完全密封。每次開門都是風險事件，需要單向氣流覆蓋保護，SOP 必須極度詳細。

            

結論：Isolator 是「主動防禦」，RABS 是「被動防禦加強版」。監管趨勢明確偏好 Isolator。

        

        

            

#### 重點提示 Key Notes

            

**RABS 開門 = 干預事件：**這是關鍵監管觀念。RABS 一旦完成消毒，任何開門動作（包含設置階段）都必須被記錄為干預，並受到嚴格 SOP 管控。這直接影響 APS（無菌製程模擬）設計——APS 中必須模擬所有預期的干預類型。

            

**設計即預防：**文件強調應在設計階段就最小化 RABS 開門干預的次數和類型。這是工程預防勝於事後補救的體現——把干預風險設計出去，而不是靠 SOP 補救。

            

**單向氣流保護：**RABS 開門時，必須有頂部單向氣流（Unidirectional Airflow, UDF）覆蓋開門區域。這是保護 Grade A 環境的最後一道防線。

        

        

            

#### 實務應用 Practical Application

            

**CDMO 選型考量：**當客戶要求更高無菌保證水平（如 RNA 疫苗、高敏感生物製品），Isolator 是唯一選擇；對於小批次多產品切換（如臨床早期階段），cRABS 提供較好的清潔靈活性；oRABS 則通常是舊有設施的升級過渡選項。

            

**APS 設計連結：**屏障類型直接決定 APS 的模擬範圍。使用 RABS 時，APS 必須包含所有預期的開門干預場景。使用 Isolator 時，APS 重點在於 VHP 生物去污驗證和手套口完整性。

            

**歐盟 GMP Annex 1 (2022) 立場：**明確偏好 Isolator，並要求使用 RABS 或傳統潔淨室的廠商提供充分的風險評估理由。

        

        

            

#### 練習思考 Practice Questions

            

                
1. Isolator 和 RABS 在生物去污方法上的根本差異是什麼？各自對 APS 設計有什麼影響？

                
2. 為什麼 RABS 中的開門動作必須被視為干預事件？若不記錄，會有什麼監管風險？

                
3. 一家 CDMO 同時承接臨床一期和商業化批次，應如何選擇屏障技術？請說明你的決策邏輯。

            

        

    

    14.2 Design Considerations for the Integration of the Filling System with the Environment

    

        

## 原文內容 Original Text

        

RABS have historically been designed in two configurations—open (oRABS) and closed (cRABS)—although engineering innovations have often blurred the lines between them as each design has improved to enhance controls and operation.

        

Traditionally, oRABS use HEPA-filtered unidirectional airflow flowing down through the process, within the barrier, before the air is returned to the cleanroom low-wall returns for recirculation. Thus, the enclosure is neither sealed to the equipment nor to the cleanroom. The oRABS have been commonly employed as an effective improvement to conventional cleanrooms previously without barriers.

        

The cRABS, in contrast, is a positive-pressure system that provides a process enclosure with integrated HEPA-filtered fan units that provide filtered unidirectional airflow down through the process with integrated low-level returns within the equipment base. One common use for cRABS is the handling of potent products. Both oRABS and cRABS are placed within a Grade B (or better) environment as the interior of the barrier may be exposed to the external environment during processing which, in the case of oRABS, is an incomplete barrier. There are many variations of RABS that can borrow features from isolators to improve the capabilities of any specific barrier.

        

Regardless of the type of barrier employed, airflow visualization studies (i.e., smoke studies) must be performed as part of the equipment qualification. In addition, CFD (Computational Fluid Dynamics) can be of great help during the design phase to understand airflow within and around the barrier and to confirm that, by design, the airflow is unidirectional with minimal turbulence and minimal potential to introduce contamination at all equipment and product surfaces. As stated in Section 8.2, open-door interventions performed on RABS during the aseptic process, where product or product contact surfaces are exposed, presents a high level of risk to sterile product and should be avoided.

        

The type of barrier selected, whether isolator, oRABS, or cRABS, will drive very different design decisions and cleanroom operating principles. Depending on which barrier design is selected, specific design elements that should be considered include:

        

            
- Room conditions

            
- Room and equipment finish

            
- Air handling (room and equipment)

            
- Transfer mechanisms for materials:
                

                    
    - Equipment format parts

                    
    - Sterile fluid pathway (e.g., tubing, sterilizing filters and PUPSIT connections, needles, fill pumps)

                    
    - Supporting equipment and consumables (e.g., forceps, sterile wipes, environmental monitoring equipment, contact and settle plates)

                    
    - Primary packaging materials (e.g., containers, closures)

                    
    - Product and associated vessels

                

            

            
- Use of cleaning, disinfection (or biodecontamination for closed systems), and SIP

        

        

Table 14.2-1 provides a comparison of the key design features and control attributes for isolators, cRABS, and oRABS. In all cases, the company's CCS (Contamination Control Strategy) should identify the controls needed and the monitoring for both the isolator and its surrounding environment.

    

    

        

## 導師解析 Tutorial Commentary

        

            

#### 核心概念解析 Key Concepts

            

**oRABS（開放型 RABS）:** 空氣循環回到潔淨室低牆回風，屏障本身對設備和潔淨室均非密封。需要 Grade B 背景環境。是傳統潔淨室升級的最常見第一步。

            

**cRABS（密閉型 RABS）:** 正壓系統，內建 HEPA 過濾風機和低位回風，氣流在屏障內循環而非流向潔淨室。密閉性優於 oRABS，亦需 Grade B 背景環境。適合高活性產品（OEB 高）處理。

            

**Airflow Visualization Study（氣流可視化研究/煙霧研究）:** 使用煙霧粒子驗證屏障內氣流是否真正為單向流、有無渦流或逆流。是設備確效（Equipment Qualification）的必要項目。

            

**CFD（計算流體動力學）:** 在設計階段用電腦模擬氣流行為，預測潛在問題，比物理煙霧測試更早介入，節省後期修改成本。

            

**CCS（污染控制策略）:** EU GMP Annex 1 要求的整體污染控制框架，明確定義各屏障類型所需的管控措施和環境監測要求。

        

        

            

#### 比喻說明 Analogy

            

**oRABS vs. cRABS = 開頂帳篷 vs. 密封充氣帳篷**

            

**oRABS** 像一個四面有牆但頂部有開口的帳篷——空氣從頂部 HEPA 進入，流過工作區後從低牆開口流回潔淨室。如果外部環境（Grade B 潔淨室）有問題，理論上會影響到屏障內部。

            

**cRABS** 像一個全密封的充氣帳篷，有自己的內部氣循環系統——空氣在帳篷內循環，不依賴外部潔淨室氣流。但帳篷本身不像 Isolator 那樣能承受 VHP 生物去污（除非特殊設計）。

            

**Smoke Study** = 在帳篷內點燃一支煙，看煙霧是否按設計方向流動，有沒有打轉或逆流。

        

        

            

#### 重點提示 Key Notes

            

**背景環境要求關鍵差異：**Isolator 的背景環境可以低至 Grade C（開放型）或 Grade D（密閉型）；RABS（無論 open 或 closed）則必須在 Grade B 環境中操作。這直接影響潔淨室的建置和運行成本。

            

**高活性產品（Potent Products）注意：**cRABS 特別適合高活性產品充填，因為正壓密閉系統能提供操作人員防護。但仍需評估廢氣處理（Exhaust Filtration）——Isolator 可完全密封廢氣，RABS 通常無法。

            

**設計轉移機制是核心挑戰：**無論選哪種屏障，物料的進出（零件、無菌流體管路、容器密封件、耗材）都需要嚴格設計的轉移機制。這是屏障完整性最容易被破壞的環節。

            

**CCS 必須涵蓋屏障內外：**CCS 不只管屏障內的 Grade A 環境，還必須涵蓋背景環境（Grade B/C/D）的監測和控制。屏障內外的控制是一個完整體系。

        

        

            

#### 設計評估框架 Design Decision Framework

            

```

選型決策矩陣：

          Isolator     cRABS        oRABS
背景環境   Grade C/D   Grade B      Grade B
生物去污   VHP (自動)  視設計而定   液態消毒劑
操作人員防護  最高      高           中
建置成本   最高        中           最低
換批靈活性  低          中           高
APS 複雜度  中          高           最高
法規偏好度  最優        次之         最低

決策原則：
1. 無菌保證要求高 → Isolator
2. 高活性產品 → cRABS 或 Isolator
3. 多品項小批次 → 評估 cRABS 清潔靈活性
4. 舊設施升級過渡 → oRABS 作為起步
```

        

        

            

#### 練習思考 Practice Questions

            

                
1. oRABS 和 cRABS 在氣流設計上的根本差異是什麼？各自對背景環境的要求為何相同？

                
2. 為什麼設計階段要先做 CFD 模擬，再做 Smoke Study？兩者能互相替代嗎？

                
3. 一個使用 oRABS 的設施，其 CCS 應如何確保背景環境（Grade B）的污染控制足夠支撐屏障完整性？

            

        

    

    Table 14.2-1: Comparison of Control and Design Elements for Isolators and Restricted Access Barrier Systems

    

        

## 原文內容 Original Text

        

            
                
                    
                        
                        
                        
                        
                    
| Attribute | Isolator | Closed RABS (cRABS) | Open RABS (oRABS) |
| --- | --- | --- | --- |
                
                
                    
                    
                        
                    
| Barrier Design Intent |
                    
                        
                        
                        
                        
                    
| Product Protection | Yes | Yes | Yes |
                    
                        
                        
                        
                        
                    
| Containment for Operator Protection and/or Contamination Control | Yes | Yes (although degree of protection depends on design specifics; cRABS offer improved protection compared to oRABS) | No |
                    
                    
                        
                    
| Control Elements for Barrier and Surrounding Environment |
                    
                        
                          

                        
                        
                    
| Background (Exterior) Environment | Open isolators: at least Grade CClosed isolators: at least Grade D | Grade B | Grade B |
                    
                        
                        
                        
                        
                    
| Control of Differential Pressure from Barrier to Room | Yes, inside isolator to immediate surrounding environment (e.g., minimal fluctuation between isolator and environment and notification/warning) | Some designs, if adequately closed from surroundings | No, open barrier prevents this |
                    
                        
                        
                        
                        
                    
| Differential Pressure Across HEPA Filters | Yes | Yes | Yes (No, if HEPA is part of room fan units, i.e., passive oRABS) |
                    
                        
                        
                        
                        
                    
| Zone Pressure Cascade (within the Same Grade) | Maintained and measured between different zones within the same Grade A space (e.g., from filling zone to tunnel-discharge zone) | Pressure cascade possible, measurement should be defined by criticality | Airflow regulation is the only means for creating a pressure cascade (e.g., with depyrogenation tunnel, by setting overspill vent surface area), but pressure differential is not actively controlled. |
                    
                        
                        
                        
                        
                    
| Control of Temperature and Humidity | Yes, separate controls possible within barrier and surrounding environment | Yes, but might be indistinguishable from surrounding environment | Yes, but is indistinguishable from surrounding environment |
                    
                        
                        
                        
                        
                    
| EM Systems (viable and total particle) Through All Phases from Setup to Batch Completion | Yes | Yes | Yes |
                    
                    
                        
                    
| Qualification Elements |
                    
                        
                        
                        
                        
                    
| Airflow Visualization Studies | Yes, may include open door (as during setup) and recovery | Yes, will include open door to represent setup and recovery | Yes, will include open door to represent setups, intervention, and recovery |
                    
                        
                        
                        
                        
                    
| Aseptic Process Simulation | Yes | Yes | Yes |
                    
                    
                        
                    
| Maintenance/Periodic Testing Elements |
                    
                        
                        
                        
                        
                    
| Maintenance of Glove Ports/Integrity Testing Before and at End of Aseptic Fill-Unit Operation or Campaign | Yes | Yes | Yes |
                    
                        
                        
                        
                        
                    
| Chamber Integrity/Gas Tightness (Predecontamination Leak Test) | Yes | Maybe (depends on design) | No |
                    
                    
                        
                    
| Design Elements for Barrier and Surrounding Environment |
                    
                        
                        
                        
                        
                    
| Materials of Construction | Chemically resistant and low particulate; must be resistant to surface biodecontamination agents (e.g., hydrogen peroxide) | Chemically resistant and low particulate | Chemically resistant and low particulate |
                    
                        
                        
                        
                        
                    
| Geometry/Design of Exterior | Appropriate for use within Grade C or Grade D environment (e.g., surface finish, coved corners, sloped, drainable); interfaces with other equipment should not have gaps; interfaces should be able to be biodecontaminated | Appropriate for use within Grade B environment (e.g., surface finish, coved corners, sloped, drainable) | Appropriate for use within Grade B environment (e.g., surface finish, coved corners, sloped, drainable) |
                    
                        
                        
                        
                        
                    
| Number and Positioning of Gloves | Yes, ensure that gloves do not disrupt airflow; ensure that gloves can be extended for biodecontamination | Yes, ensure that gloves do not disrupt airflow; gloves will be removed for autoclaving unless the system undergoes automatic biodecontamination, in which case, they must be able to be fully extended | Yes, ensure that gloves do not disrupt airflow; gloves will be removed for autoclaving unless the system undergoes automatic biodecontamination with the surrounding environment, in which case, they must be able to be fully extended |
                    
                        
                        
                        
                        
                    
| Mechanisms of Transfer | Critical to ensure that all control elements can be managed through transitions due to change from Grade A to Grade C | Important to ensure transitions due to change from Grade A to Grade B | Important to ensure transitions due to change from Grade A to Grade B |
                    
                        
                        
                        
                        
                    
| Suitability of Containment/Safety (e.g., Filtration of Exhaust) | Yes | Maybe (depends on design) | No |
                    
                        
                        
                        
                        
                    
| Equipment Base | Sealed and gas-tight/liquid-tight, coved corners to enhance cleanability | Sealed and gas-tight/liquid-tight (depends on design), coved corners to enhance cleanability | Protected to facilitate disinfection to enhance cleanability, with coved corners for cleanability |
                    
                        
                        
                        
                        
                    
| Design of Piping Transiting Grades | Critical (Grade A to Grade C common) | Less Critical (Grade A to Grade B) | Less Critical (Grade A to Grade B) |
                    
                        
                        
                        
                        
                    
| Exercise of Mechanical Components | Necessary during surface biodecontamination to have all equipment moving | Jog feature, disinfection position to make surfaces available for disinfection; if conducting gas-phase, disinfection will require automated exercise to keep equipment moving | Jog feature or disinfection position to make surfaces available for disinfection; if conducting gas-phase, biodecontamination of both oRABS and surrounding environment will require automated exercise to keep equipment moving |
                
            

        

    

    

        

## 導師解析 Tutorial Commentary

        

            

#### 核心概念解析 Key Concepts — 表格解讀

            

Table 14.2-1 是本章最核心的參考工具，涵蓋五大類屬性比較：

            

                
- **屏障設計意圖（Barrier Design Intent）:** 三類系統均可保護產品；只有 Isolator 和 cRABS 能同時提供操作人員防護（containment），oRABS 無法。

                
- **管控要素（Control Elements）:** Isolator 對溫濕度、壓差的獨立控制能力最強；oRABS 幾乎無法獨立於背景環境控制。

                
- **確效要求（Qualification Elements）:** APS 為三類系統共同強制要求；氣流可視化研究均必須包含開門場景，但 oRABS 需模擬最多情境（設置、干預、恢復）。

                
- **維護週期測試（Maintenance/Periodic Testing）:** 手套口完整性測試為三類系統均要求；腔體氣密性（Leak Test）僅 Isolator 強制要求，cRABS 視設計而定，oRABS 不適用。

                
- **設計要素（Design Elements）:** Isolator 的材料選擇、管路穿越設計、廢氣過濾均為最嚴格要求。

            

        

        

            

#### 重點提示 Key Notes — 表格中的關鍵差異

            

**背景環境等級差異決定潔淨室建置成本：**

            

                
- Isolator（密閉型）：背景只需 Grade D → 潔淨室建置成本最低

                
- Isolator（開放型）：背景需 Grade C

                
- RABS（無論 open 或 closed）：背景必須 Grade B → 潔淨室成本最高

            

            

這意味著：雖然 Isolator 設備本身最貴，但因背景環境要求低，整體 TCO（總擁有成本）在長期高產量生產中可能反而最低。

            

**廢氣過濾（Exhaust Filtration）的操作人員安全意涵：**Isolator 強制要求廢氣過濾，適合高活性（OEB 4/5）產品。oRABS 完全無法提供，cRABS 依設計而定。這是高危產品充填選型的決定性因素。

            

**管路穿越等級設計（Piping Transiting Grades）：**Isolator 因背景環境為 Grade C，從 Grade A 穿越到 Grade C 的管路設計「Critical」；RABS 因背景為 Grade B，穿越等差較小，設計挑戰相對低。

        

        

            

#### APS 要求比較 APS Requirements by Barrier Type

            

```

Isolator APS 重點：
  - 模擬 VHP 生物去污後首批充填
  - 手套口操作場景（介入）
  - 開門設置恢復場景
  - 批次間/活動（campaign）間的連續模擬

cRABS APS 重點：
  - 所有預期開門干預場景
  - 消毒位置（Disinfection Position）覆蓋驗證
  - 氣相生物去污後的設備移動（Jog Feature）

oRABS APS 重點：
  - 設置、所有干預、恢復三大類場景
  - 最多的開門干預模擬數量
  - 每次干預後的環境恢復驗證
  - 潔淨室（Grade B）的狀態確認

共同要求：
  - APS = Yes（三類皆強制）
  - 手套口完整性測試 = Yes（三類皆要求）
  - 氣流可視化研究 = Yes（三類皆要求）
```

        

        

            

#### 實務應用 Practical Application

            

**CDMO 採購新充填線時的屏障選型流程：**

            

                
1. **確認產品組合：**是否包含高活性/毒性產品？→ 若是，需 Isolator 或 cRABS（exhaust filtration）

                
2. **確認批次模式：**單一長期商業化？→ Isolator TCO 最優。多品項小批次？→ cRABS 清潔靈活性更高。

                
3. **評估現有潔淨室等級：**現有 Grade B 背景 → RABS 可立即適配；需新建 → Isolator 背景要求較低可節省建設成本。

                
4. **評估監管市場：**目標市場包含歐盟 → Annex 1 偏好 Isolator，需有充分 RABS 使用理由。

                
5. **APS 規劃：**選定屏障後，規劃 APS 涵蓋的干預清單，確保所有高風險操作均被模擬驗證。

            

        

        

            

#### 練習思考 Practice Questions

            

                
1. 從 Table 14.2-1 中，找出三個在 Isolator 和 oRABS 之間差異最大的屬性，並解釋為什麼這些差異對無菌保證（Sterility Assurance）最為關鍵。

                
2. 為什麼 oRABS 不能提供操作人員防護（Containment）？這對充填高活性細胞毒性藥物（如某些抗腫瘤藥）的 CDMO 意味著什麼？

                
3. 「Jog Feature（點動功能）」在 cRABS 和 oRABS 的消毒過程中有何作用？如果沒有此功能，會產生什麼消毒死角風險？

                
4. Isolator 的腔體氣密性測試（Leak Test）在生物去污前進行的意義是什麼？若洩漏，VHP 去污是否仍然有效？

            

        

    

    

### 本節重點回顧 Section Summary

    

        
- **屏障是無菌充填的基礎：**物理隔離人員與產品是現代無菌製造的核心要求，監管機構已明確要求所有無屏障舊式系統（Legacy System）必須升級。

        
- **三類屏障的技術層次：**Isolator（隔離器）> cRABS（密閉型 RABS）> oRABS（開放型 RABS），無菌保證等級依次遞減，但靈活性和初始成本依次遞增。

        
- **背景環境要求決定整體 TCO：**Isolator（密閉型）背景只需 Grade D，長期看潔淨室運行成本最低；RABS 系統背景必須 Grade B，潔淨室要求最嚴格。

        
- **RABS 中每次開門 = 干預事件：**必須有 SOP 管控、氣流保護、記錄文件，並在 APS 中模擬。這是 RABS 操作管理最核心的挑戰。

        
- **APS 為三類屏障系統共同強制要求：**但模擬範疇因屏障類型而異，oRABS 需涵蓋最多開門干預場景，Isolator 重點在生物去污驗證和手套口完整性。

        
- **CCS 必須整體規劃：**污染控制策略（CCS）需同時涵蓋屏障內（Grade A）和背景環境，兩者是相互依存的整體控制系統。

        
- **決策層次始終適用：**無菌保證 > 產品 CQA > 商業靈活性。屏障系統選型和 APS 設計的每一個決策，都必須以無菌保證為最優先考量。

    

⇧

## Topic 14-15: Powder & Auger 粉末/螺旋充填 (p196-p205)

# Section 14–15: Powder Filling Overview & Auger Filling Systems

    

第14–15節：粉末充填概論與螺旋式充填系統

    

PDA Manufacturing Technology Guide No. 1 | doc p196 - p205

    

### 本章學習目標

    

        
- 理解無菌操作所需公用設施的種類、設計要求與風險管控原則

        
- 掌握粉末充填技術的兩大主流系統（真空壓力粉末充填器 VPPF 與螺旋式充填器 AF）的核心原理與差異

        
- 能夠根據產品特性、劑量範圍與容器類型，評估適合的充填技術

        
- 了解 VPPF 的劑量設計、無菌保證挑戰、設置複雜性及生命週期成本考量

    

14.0 — Utility Considerations for Aseptic Operations (公用設施考量)

    

        

## 原文內容 Original Text

        

### 15.0 Utility Considerations for Aseptic Operations

        

Numerous utilities other than HVAC, light, and electricity may be required to support an aseptic filling operation. In general, utilities should not be present in the cleanroom, unless it is unavoidable, and they have been integrated into the design of the equipment and cleanroom. Consideration should always be given to the integrity of the containment of any utility that is not sanitary, where leakage would be considered a contaminant. If utilities are required to be present, care should be taken to minimize the impact of the utilities on the environment and process.

        

The required utilities may include:

        

            
- Clean compressed air

            
- Vacuum, especially for rolling DPs and vacuum powder fillers

            
- Exhaust, venting, and/or dust collection

            
- Other compressed gases (e.g., nitrogen)

            
- Water for injection or purified water

            
- CIP solutions (supply and return)

            
- Clean steam and condensate for SIP

            
- Heating and cooling transfer fluids (e.g., cooling water)

            
- Hydraulics

        

        

Of these, the direct-product-contact utilities and those that come in contact with direct-product-contact equipment (e.g., CIP, SIP, nitrogen) are the most critical. The ASME standard BPE-2024 (Revision of ASME BPE-2022): Bioprocessing Equipment and EU GMP Annex 1: Manufacture of Sterile Medicinal Products provide design and operational considerations for their piping design and installation, respectively. Some considerations for the installation and supply of utilities are among the elements addressed in Table 14.3-1, such as:

        

            
- Design of piping transiting grades

            
- Materials of construction

            
- Surface finish

            
- Sanitary piping standards

            
- Geometry, routing, and slope

            
- Gas-tightness connections required for isolators

        

        

The materials of construction and surface finish should be suitable to a cleanroom environment, including being nonadsorptive, low particulate-shedding, and able to withstand exposure to disinfectants of the exposed surfaces on a routine basis. Piping should make use of sanitary connections (to reduce crevices) or welded connections (preferred). Routing should be designed to minimize pressure drops or line constrictions, by limiting the number of bends, while also entering the Grade A environment in a position that minimizes disruption to airflow. Slope should be considered to ensure that piping is free-draining.

    

    

        

## 導師解析 Tutorial Commentary

        

            

#### 核心概念解析 Key Concepts

            

**公用設施 (Utilities)：**在無菌充填 (Aseptic Filling) 環境中，「公用設施」不只是水電，而是指一切支援充填機台運作的工程系統——包含無菌空氣、真空、氮氣、CIP 溶液、SIP 蒸汽等。

            

**直接接觸產品的公用設施 (Direct-Product-Contact Utilities)：**如氮氣覆蓋、CIP/SIP 蒸汽，其品質直接影響產品無菌保證 (Sterility Assurance)，屬於最高優先管控項目。

            

**材質要求：**不吸附 (nonadsorptive)、低產塵 (low particulate-shedding)、耐消毒劑——這三點是 EU GMP Annex 1 和 ASME BPE 的共同底線。

        

        

            

#### 比喻說明 Analogy

            

想像無菌充填區就像一間手術室中的廚房——每一條水管、氣管、電線都必須是「外科手術級別」的潔淨。一般廚房水管漏水只是濕地板；手術室裡的管線滲漏可能直接污染手術野，後果完全不同。

            

正因如此，指引要求：能不進無菌區的管線就不要進去；非進不可的，接頭要用衛生級 (sanitary) 或焊接 (welded)，絕不能用普通螺紋接頭。

        

        

            

#### 重點提示 Key Notes

            

**設計原則的優先順序：**公用設施設計要遵循決策層級——**無菌保證 > 產品 CQA > 商業考量**。一條漏水的 CIP 管線不是「維修問題」，而是「污染風險事件」，可能導致批次報廢。

            

**焊接優先 (Welded preferred)：**衛生級接頭雖可用，但在隔離器 (Isolator) 敏感區域，焊接接頭抗熱膨脹收縮的能力更強，連接器鬆動的機率更低，是指引明確推薦的選擇。

        

        

            

#### 練習思考 Practice Questions

            

                
1. 為什麼指引說公用設施「原則上不應進入無菌區」？列舉兩種必須進入時的風險控制措施。

                
2. 氮氣覆蓋屬於「直接接觸產品的公用設施」嗎？為什麼？對無菌保證有什麼影響？

            

        

    

14.1 — Operational Considerations for Utilities (公用設施操作考量)

    

        

## 原文內容 Original Text

        

### 15.1 Operational Considerations for Utilities Supplied to Aseptic Filling Systems

        

Operational considerations for supplied utilities include:

        

            
- Point-of-use filtration

            
- Capability of cleaning and disinfection of supply lines

            
- Sampling for routine monitoring

        

        

The use of clean compressed air, other compressed gases, exhaust, and dust collection may require sterile filtration (nominal pore size <0.22 µm). The placement of the filters should be carefully considered to ensure appropriate access for integrity-testing and replacement. Ideally, these operations should take place away from the Grade A environment to reduce the risk of contamination in the critical zone. In some cases (e.g., exhaust and dust collection), placement within a gray space entirely outside of all cleanroom areas will enable the safe exchange of filters without the risk of product contamination. The mechanisms by which the ducts and piping lead to the filters, however, must be kept clean and sanitary; this should be included in the design and assessed regularly.

        

Similarly, most supplied utilities will require some ability to collect samples at the point of use. The position of the sampling ports should be carefully designed to provide access without disrupting the Grade A space, while also ensuring that the samples will represent the quality of the utility as it is delivered to the process.

        

Water always brings the risk of microbiological proliferation. While it may be a risk-mitigating measure to have CIP/SIP capability for a filler, to avoid the need for aseptic assembly, the presence of the associated utilities within the cleanroom remains a significant risk to be managed. Frequent checking to ensure that points of use are not leaking and are in good repair are warranted. The thermal expansion and contraction of piping that occurs during cycles or disinfection of these systems should also be considered as it may result in a loosening of connectors as they expand and contract with the heating and cooling. Therefore, the verification of tightness of the sanitary connectors should be part of routine system-status checks. Welded connections should be sought in sensitive zones of the cleanroom to reduce this risk.

    

    

        

## 導師解析 Tutorial Commentary

        

            

#### 核心概念解析 Key Concepts

            

**使用點過濾 (Point-of-Use Filtration)：**即在公用設施進入製程的「最後一道」安裝過濾器，通常為 ≤0.22 µm 除菌濾膜。這是防止公用設施帶入微生物的最後屏障。

            

**採樣口 (Sampling Ports)：**要設計在能代表「實際送達製程品質」的位置，同時不能因採樣動作干擾 Grade A 環境——這是典型的「可操作性 vs. 代表性」設計衝突，需要在工程設計階段就解決。

        

        

            

#### 比喻說明 Analogy

            

公用設施過濾器的位置選擇，就像廚房的抽油煙機過濾網——你希望過濾網在容易更換的地方，而不是藏在牆壁深處。無菌充填的邏輯相同：濾膜更換是一種干預，干預點離 Grade A 越遠，污染風險就越低。

            

灰色區域 (Gray space) 外換濾膜 = 在廚房外面換排風過濾網，完全不影響手術室裡的操作。

        

        

            

#### 重點提示 Key Notes

            

**熱膨脹是隱形風險：**CIP/SIP 循環涉及高溫蒸汽和冷卻，管線反覆熱脹冷縮，衛生級接頭 (sanitary clamps) 可能逐漸鬆動。這種鬆動不一定立即漏水，但已形成微生物滋生的「縫隙」。因此，例行系統狀態確認 (routine system-status check) 必須包含接頭扭力檢查，不能僅靠肉眼觀察。

            

**水 = 最大的微生物風險：**即使是純水注射 (WFI)，一旦停滯在管線死角，也可能在幾小時內形成生物膜 (biofilm)。這是為什麼 WFI 迴路要保持循環流動、溫度 ≥ 70°C 的原因。

        

        

            

#### 練習思考 Practice Questions

            

                
1. 如果你是 CDMO 的工程師，設計壓縮空氣除菌過濾器的安裝位置時，你會優先考慮哪些因素？

                
2. 熱膨脹導致接頭鬆動這個風險，應該放在 CCS 的哪個層次管控（預防 / 偵測 / 應對）？

            

        

    

15.0 — Filling Systems for Powder Filling: Overview (粉末充填系統概論)

    

        

## 原文內容 Original Text

        

### 16.0 Filling Systems for Powder Filling

        

Parts 1, 2, and 3 of the PDA Manufacturing Technology Guide No.1: Aseptic Filling, Engineering and Operation have addressed both liquid-filling technologies and general topics concerning aseptic-filling operations. **Part 4** focuses on the aseptic filling of powders.

        

### 16.1 Common Elements Between Aseptic Powder and Liquid Filling

        

To properly consider the requirements for the aseptic filling of powders, many of the general topics already addressed also apply to powders, as listed in Table 16.1-1.

        

        
            
| Applicable PDA Manufacturing Technology Guide No. 1 Sections |
| --- |
            
| Introduction and Scope for Aseptic Filling |
            
| Glossary and Acronyms |
            
| Section 1.0 Aseptic Filling System Design Elements |
            
| Section 4.1 Continuous Filling/Campaign Filling Versus Batch Filling |
            
| Section 4.2 Changeover Functionality |
            
| Section 4.10 Enhancing Functionality with Robotics |
            
| Section 5.0 Designs for Dose Control Systems |
            
| Section 6.0 Special Considerations for Advanced Container–Closure Design and Implementation |
            
| Section 7.0 Closures and Closing System Design |
            
| Section 7.7 Requirements for Effective Container–Closure Integrity and Validation |
            
| Section 8.1 Microbiological Considerations for Aseptic Manipulations Associated with Line Setup |
            
| Section 8.2 General Considerations Regarding Aseptic Interventions |
            
| Section 8.3 Microbiological Considerations for Filter Changes |
            
| Section 8.5 Microbiological Considerations for Aseptic Manipulations Related to Broken or Blocked Primary Packaging Materials |
            
| Section 8.6 Microbiological Considerations for Aseptic Manipulations Associated with Supply of Components |
            
| Section 8.7 Microbiological Considerations for Aseptic Manipulations Associated with Sorting Systems for Components |
            
| Section 8.8 Microbiological Considerations for Mechanical Interventions |
            
| Section 8.9 Microbiological Considerations for Aseptic Manipulations Related to Environmental Monitoring |
            
| Section 9.0 Component and Filling Supply Handling Considerations |
            
| Section 10.0 Material Transfer System Design |
            
| Section 11.0 Sterile Filtration and Filling System Considerations (Section 11.12 specifically addresses filters used in powder-filling) |
            
| Section 13.0 Considerations for the End of the Aseptic Fill Unit Operation |
            
| Section 14.0 Filling System and Environmental Considerations |
            
| Section 15.0 Utility Considerations for Aseptic Operations |
        

        

        

In the case of sterile powder-filling, there are two main technologies available: AF systems (Auger Filler) and VPPF (Vacuum Pressure Powder Filler). These systems are different from both technology and complexity standpoints.

        

            
- The **AF** is based on the concept of mechanical movement of the powder; in some systems, transfer may be facilitated by vibration.

            
- The **VPPF** enables filling through the mechanical flow of powder by means of vacuum and air pressure. It is a volumetric filler at its core, where a correctly sized chamber is filled with powder (using vacuum) and dispensed. The VPPF does not require vacuum or pressurized air for the dosing mechanism itself, but relies on the mechanical transfer of the powder in the dosing disc.

        

        

Both methods are strongly influenced by the characteristics of the sterile powder to be filled. In some cases, this influence is such that only one of the two technologies is suitable for a specific type of sterile powder or fill-weight range. There are many filling system characteristics to keep in mind when choosing the filling system that best matches each product's needs.

    

    

        

## 導師解析 Tutorial Commentary

        

            

#### 核心概念解析 Key Concepts

            

**粉末充填技術的兩大系統：**

            

                
- **AF 螺旋式充填器 (Auger Filler)：**利用螺旋旋轉的機械力推動粉末，不需要真空或氣壓。好比廚房的絞肉機——靠螺旋轉動輸送材料。

                
- **VPPF 真空壓力粉末充填器 (Vacuum Pressure Powder Filler)：**利用真空將粉末吸入計量腔體，再用乾燥空氣將其推出到容器。好比注射器——吸進去再打出來。

            

            

這兩種技術的核心差異在於：**機械力 vs. 氣壓/真空**，這一點決定了它們各自的優勢和限制。

        

        

            

#### 比喻說明 Analogy

            

選擇粉末充填技術，就像選擇廚房工具：

            

                
- **AF（螺旋式）= 麵條機：**用機械旋轉擠出，適合黏性、纖維狀材料；容易清洗，也可以「就地清洗」（CIP）。

                
- **VPPF（真空壓力）= 計量匙 + 吹氣：**先用真空壓實粉末成「塊」，再用氣壓吹入瓶中；適合鬆散的結晶粉末，但換格式成本高。

            

            

沒有哪一種廚房工具適合所有食材——粉末充填也一樣，技術選擇必須先了解「你的粉末是什麼個性」。

        

        

            

#### 重點提示 Key Notes

            

**粉末充填 ≠ 液體充填的簡化版：**本章特別強調，粉末充填沿用了液體充填的大量通用規範（如無菌干預、組件引入、容器密封），但粉末本身的物性（流動性、靜電、粒徑分布、含水量）對充填精準度和設備選擇的影響遠比液體複雜。

            

**交叉引用的重要性：**表 16.1-1 所列的 15 個相關章節，提醒我們粉末充填不是孤立的單元操作，它嵌入在整個無菌製造體系中。任何一個環節的設計不當都會影響最終的無菌保證。

        

        

            

#### 練習思考 Practice Questions

            

                
1. 為什麼粉末充填需要引用第 8 節「無菌干預的微生物考量」這麼多子章節？這說明粉末充填的哪個特性？

                
2. 在 CDMO 的商業環境下，如果一個客戶同時有三種粉末產品，你會如何開始評估選擇 AF 還是 VPPF？

            

        

    

15.1 — VPPF Technology: Design & Operation (真空壓力粉末充填器：設計與操作)

    

        

## 原文內容 Original Text

        

### 16.2 Aseptic Filling Technologies: Vacuum Pressure Powder Filling (VPPF)

        

Powder is loaded in the upper feeding-hopper, then moved to the lower hopper, which feeds the dosing disc. The dosing disc is fitted with radial chambers housing the dosing pistons. The powder is drawn into the dosing chamber or port from the lower hopper, via constant vacuum, and densified into a slug during disc rotation. In its lowest position, above the container opening, the disc discharges the powder into the container by means of dry sterile air. After dosing, the chamber that discharged the powder is cleaned by sterile air jets, with dust control applied to exhaust any residual powder.

        

The filling dose is governed by:

        

            
- The overall volume (the dosing cylinder depth and cylinder diameter)

            
- The vacuum negative-pressure (which compacts the powder)

            
- The number of doses delivered into the same container

        

        

As the dosing disc rotates, the vacuum and pressure are transferred to the dosing disc via a mechanical backplate and/or rotary pneumatic joint. This mechanism on the rear side of the dosing disc provides the vacuum and pressure to each dosing chamber at the relevant position.

        

### 16.2.1 VPPF: Design Configurations

        

There are alternative designs to the standard configuration that include:

        

            
- **Dosing drum:** Essentially a dosing wheel with two lanes, feeding two containers at the same time. Likely to have twenty-four cavities (twelve per lane), versus twelve in a standard dosing disc.

            
- **Filling needles:** The dosing needle draws powder from a reservoir positioned below the needle. The needle is mounted vertically and may be moved vertically, enabling it to dispense powder just above or into the opening of the container.

        

        

There are some filler designs that permit assembly of the dosing wheels, connections to the hopper, and utility connections on a single plate — a super plate or chassis — in a Grade C environment. This super plate permits the entire assembly to be sterilized in an assembled state. The assembled plate can then be brought to the aseptic zone, where it takes only one or two aseptic connections to install the filler. This approach requires specialized trolleys and continuous unidirectional Grade A zoning from the autoclave unload section to the line.

        

### 16.2.2 VPPF: Setup

        

VPPF is a high-precision dosing system. Accuracy of dosing is mainly impacted by the physical characteristics of the powder and the environment. If the powder particle-size varies, agitation in the dosing hopper(s) is an essential means of ensuring consistent powder flow. The following factors can all affect flow characteristics and accuracy over time:

        

            
- Particle-size distribution

            
- Powder moisture content

            
- Humidity and temperature of the environment

            
- Airflow

        

        

Each dosing chamber has a dosing filter (e.g., sintered stainless steel, nylon), and it is essential to ensure that there is no plugging of the filters over the course of the filling operation. Statistical weight-check is a must for all filling operations; however, an in-line 100% weighing system is a highly recommended upgrade. Some filler models offer automatic dosing chamber adjustments to address trends in weights.

    

    

        

## 導師解析 Tutorial Commentary

        

            

#### 核心概念解析 Key Concepts

            

**VPPF 的劑量決定三要素：**

            

                
- **腔體體積**（缸徑 × 缸深）= 物理容積上限

                
- **真空壓力**= 決定粉末壓實密度（密度越高，同等體積裝入越多質量）

                
- **投料次數**（同一容器填幾次）= 允許靈活調整劑量，但每次增加都是一次額外的干預機會

            

            

這三個變量相互牽制，任何一個受環境影響（如濕度影響粉末流動性），都會影響最終充填重量。

        

        

            

#### 比喻說明 Analogy

            

**超級底盤 (Super Plate) = F1 賽車快速換胎策略的粉末版：**傳統做法是把每個零件單獨帶進無菌區再逐件組裝，每一個接觸步驟都是污染機會。Super Plate 的思路是：「在乾淨的廠房先把所有零件裝好、滅菌好，然後整個系統一次推進去，只做最後兩個連接。」大幅減少了無菌干預的次數和複雜度。

        

        

            

#### 公式與計算 Formula

            

```

VPPF 劑量影響因子：

填充重量 (Fill Weight) ≈ f(腔體體積, 真空壓力, 粉末密度, 溫濕度)

精度通常範圍：~2% to 5% RSD
（依充填劑量和粉末特性而定）

超過趨勢 → 自動調整計量活塞長度
（100% in-line 稱重系統回饋控制）
            
```

        

        

            

#### 重點提示 Key Notes

            

**計量濾膜堵塞是 VPPF 的最大操作風險之一：**每個腔體內都有燒結不鏽鋼或尼龍濾膜，一旦堵塞，真空無法正常抽入粉末，該腔體的充填量就會偏低甚至無法充填。濾膜材質的選擇（孔徑、透氣量）需在可行性研究 (feasibility study) 階段針對每種產品最佳化。

            

**環境條件是 CPP：**充填間的溫度、濕度和氣流都是 VPPF 的關鍵製程參數 (CPP)，因為它們直接影響粉末流動性，進而影響充填精度。這在驗證設計時必須納入。

        

        

            

#### 練習思考 Practice Questions

            

                
1. 一個新產品的充填重量目標是 500 mg，但粉末密度受溫濕度影響很大。你會優先建議採購哪種重量管控系統（統計抽樣 vs. 100% 稱重）？理由是什麼？

                
2. Super Plate 設計的主要好處是減少無菌干預，但它的前提條件是什麼（需要哪些設施支援）？

            

        

    

15.2 — VPPF Container Compatibility & Sterility Assurance (容器相容性與無菌保證)

    

        

## 原文內容 Original Text

        

### 16.2.4 VPPF: Filling Container Compatibility

        

VPPF systems can be used with a variety of container types, depending on the selected filler design. Table 16.2.4-1 depicts typical containers and their applicability to the various VPPF system designs.

        

        
            
                
                
                
                
                
                
                
            
| VPPF Type | Vial | Cartridge | Syringe | Ampoule | Bag | Inhalers |
| --- | --- | --- | --- | --- | --- | --- |
            
                
                
                
                
                
                
                
            
| Dosing Disc | Yes | No | No | No | Yes* | No |
            
                
                
                
                
                
                
                
            
| Dosing Drum | Yes | No | No | No | Yes* | Yes (and blisters) |
            
                
                
                
                
                
                
                
            
| Dosing Needle | Yes | Yes | Yes | Yes | Yes* | Yes (manual units) |
        

        

        

*Bag shape is specifically designed to configure the bag mouth to be suitable to the chosen technology.

        

When working with nested components (such as syringes or cartridges), VPPF fillers are adapted to either provide robotics (e.g., XY table) to dose from a dosing needle to each position within the nest, or to de-nest the components, fill them, and then re-nest the components. Care should be taken with the approach for the IPC weight check, as these approaches may restrict the ability to perform 100% net-weight capabilities.

        

### 16.2.5 VPPF Sterility Assurance (Microbial and Total Particles)

        

The dosing disc transports the powder slugs at approximately 10–20 rpm from the powder hopper to the point of product delivery. The dosing disc is shrouded from the aseptic environment as it rotates by a dust collector, which prevents stray powder from escaping to the environment. At the point of dosing, there is a small (1–2 mm) gap between the filler and the mouth of the container. This gap accommodates container dimension variation and enables weigh cells to register tare and gross weight.

        

VPPF does **not** permit CIP/SIP except for the bulk-feed portion of the filler. The dosing disc, drum, and needle are cleaned and sterilized off-line and require aseptic assembly within a downflow booth. For isolators, mounting can be performed after external biodecontamination of packages (e.g., VHP surface biodecontamination) or after aseptic transfer through an alpha-beta port.

        

During the assembly and setup phases, EM (Environmental Monitoring) must be conducted. Regulatory expectations require constant monitoring for both viable and total particulate. Due to the nature of powder, particulate may interfere with monitoring, requiring positioning of probes at a height above typical working height for liquid filling. Firms should defend and document the location of the probes. If powder has an inhibitory effect on media, special EM materials must be used.

        

Microbiological plates must be positioned at the critical points. As powder fillers tend to be **wider than liquid fillers**, the ergonomics for microbiological plate placement should be verified as part of the initial qualification. Monitoring positions should be included as part of the filler design (e.g., during mock-up).

    

    

        

## 導師解析 Tutorial Commentary

        

            

#### 核心概念解析 Key Concepts

            

**計量針設計 (Dosing Needle) 的靈活性：**從容器相容性表格可以看出，計量針是 VPPF 三種設計中唯一能填充卡匣 (Cartridge)、針筒 (Syringe)、安瓿 (Ampoule) 的設計。對 CDMO 而言，計量針設計提供最大的容器靈活性，是多品項平台的優先考量。

            

**無菌保證的挑戰：VPPF 不能做 CIP/SIP：**這是 VPPF 最重要的無菌保證限制。計量盤、計量鼓、計量針必須離線清洗滅菌後，再以無菌方式組裝進設備。每一個組裝步驟都是潛在的污染機會，必須在 SOP 中詳細描述並納入 APS 驗證。

        

        

            

#### 比喻說明 Analogy

            

**VPPF 的無菌組裝就像外科手術的器械擺台：**外科醫師不會自己清洗手術刀——器械護士在消毒室滅菌好，再用無菌技術逐件傳遞到手術台。VPPF 的計量盤也一樣，必須在 downflow booth（相當於手術台）裡以無菌技術組裝，每一個接觸點都要符合無菌操作規範。

            

這就是為什麼 VPPF 的設置 (setup) 複雜度高——操作人員的無菌技術訓練至關重要。

        

        

            

#### 重點提示 Key Notes

            

**粉末干擾環境監測是 VPPF 特有的挑戰：**粉末充填時，飛散的粉塵粒子可能觸發粒子計數器 (particle counter) 的假陽性警報。監測探頭的位置必須比液體充填更高，同時要在驗證報告中明確說明並為此決策辯護 (defend and document)。這不是「可以省略」的步驟，而是法規明確要求的文件化義務。

            

**1–2 mm 的間隙是必要設計：**這個小間隙看似微不足道，但它的存在是為了容納容器尺寸公差和稱重單元的運作需求。對無菌保證而言，這個間隙意味著充填點在技術上是「開放的」，因此充填區必須維持持續的 Grade A 層流保護。

        

        

            

#### 練習思考 Practice Questions

            

                
1. 如果一個客戶的產品是吸入劑 (inhaler)，你會建議選擇 VPPF 的哪種設計？為什麼？

                
2. 粉末充填的環境監測 (EM) 探頭位置必須「higher than liquid filling」——請解釋這背後的科學邏輯，並說明你如何在 APS 中驗證這個決策的合理性。

            

        

    

15.3 — VPPF: Efficiency, Costs & System Complexity (效率、成本與設置複雜性)

    

        

## 原文內容 Original Text

        

### 16.2.6 VPPF Efficiency and Impact on Risk

        

VPPF speed (containers per minute) is quite fast and can be increased with a filler that employs multiple dosing lanes and fill heads for larger doses. The use of multiple fill heads will require additional aseptic interventions during setup.

        

### 16.2.7 VPPF Costs: Initial and Ongoing

        

If multiple fill-weights are required, VPPF encounters additional costs for different formats and discs. Lifecycle costs for VPPF consumables include filters and O-rings for the filter and pistons. Other wear parts are those typical of any filling machine (e.g., bushings, bearings, seals). VPPF uses clean compressed air and vacuum, supplied via house utilities or through localized generation.

        

The mechanical backplate and/or pneumatic rotary joint behind the dosing disc may be a point of friction during rotation. Over time, this rotational mechanism may need replacement, generally after multiple millions of cycles.

        

### 16.2.8 VPPF System Complexity: Setup, Handling, and Changeover

        

VPPFs are systems with **high complexity during the setup phase**. Setup can be lengthy, but by implementing ergonomic features and installation aids, the setup could potentially be reduced.

        

Assembly activities for the hoppers can be performed in a Grade C area with subsequent sterilization. For the dosing discs, drum, and needle, the parts are typically sterilized and then aseptically assembled in a downflow booth to install O-rings and pistons (unless working with a super plate design where assembly precedes sterilization).

        

There may be rare cases where a dosing disc chamber plugs or a screen is breached during an operation. Changing the dosing disc during the operation is **not recommended** as this is a significant intervention. Changing the dosing disc would require:

        

            
- Availability of a second, sterilized disc within the cleanroom or isolator

            
- Clearance of the line

            
- Performance of the intervention (with all required EM samples)

            
- Restandardization of fill weights

        

        

Risk assessments for this operation should be performed and mitigation actions considered (e.g., reducing batch duration, optimizing powder and airflow characteristics). Testing during filling system feasibility should ideally uncover such a risk before registration.

        

At the time of changeover, all product-contact pieces (e.g., hoppers, discs, feed pipes) must be manually disassembled prior to cleaning. After cleaning, there are two options:

        

            
- Sterilize the pieces in an autoclave, then assemble in the aseptic area

            
- Use the super plate concept (assemble in Grade C, sterilize in autoclave assembled, then transport to the line for mounting)

        

        

Once setup is complete, system handling (governed by procedures) is quite easy. Modern systems are provided with 100% weight checks and with automatic adjustment of the dosing-piston lengths to maintain weight(s) within specified limits.

    

    

        

## 導師解析 Tutorial Commentary

        

            

#### 核心概念解析 Key Concepts

            

**VPPF 的「設置複雜、運行簡單」特性：**這是 VPPF 系統的重要特徵——設置 (setup) 阶段高度複雜（需要無菌組裝），但一旦設置完成且啟動運行後，現代系統可以自動調整計量活塞長度，以 100% 稱重回饋維持充填重量精度，操作員干預需求極低。

            

**總擁有成本 (TCO) 考量：**VPPF 的主要持續成本來源：濾膜、O-Ring、活塞（消耗品）+ 不同劑量的格式盤（Format Parts）。旋轉氣壓接頭在數百萬次循環後需更換——這是一個容易被忽視的長期維護成本。

        

        

            

#### 公式與計算 Formula

            

```

VPPF TCO 成本組成：

初始資本支出 (CapEx)：
  設備本體 + 格式盤（每個劑量規格一套）
  + Super Plate 轉運小車（如適用）

持續運營成本 (OpEx)：
  - 消耗品：濾膜、O-Ring、活塞
  - 公用設施：壓縮空氣 + 真空
  - 維護：軸承、皮帶、密封件
  - 長期：旋轉氣壓接頭（數百萬次循環後）

格式更換成本：
  每個新的充填重量 = 新一套計量盤 / 格式零件
  → CDMO 多品項平台的隱性成本累積
            
```

        

        

            

#### 重點提示 Key Notes

            

**計量腔堵塞不是可以「停下來換個盤」的小事：**換計量盤是一個重大無菌干預，需要有第二個已滅菌的計量盤在潔淨室/隔離器內待命，換盤後還需要重新標準化充填重量，整個過程要採集所有 EM 樣品。這意味著：**預防堵塞遠比應對堵塞更重要**——在可行性研究階段就要用目標產品測試濾膜選擇和粉末流動性。

            

**增加充填頭數量 = 速度提升 + 設置風險增加：**這是效率與無菌保證的典型取捨。每增加一個充填頭，就多一套需要無菌組裝的計量組件。決策層級要求：先確認無菌保證的可行性，再考慮速度需求。

        

        

            

#### 實務應用 Practical Application

            

假設你是一家 CDMO 的工程總監，客戶要求在現有液體充填線上增加粉末充填能力，且產品有三個不同的充填重量（50 mg、200 mg、500 mg）。基於本節內容：

            

                
- VPPF 需要為每個充填重量準備一套格式盤 → 三套計量盤的資本投入

                
- 每次格式切換需要完整的無菌拆裝 → 評估 Super Plate 是否可行

                
- 50 mg 小劑量產品若有毒性 → VPPF 需確認離線清洗方案的可行性（見 §16.2.12）

                
- 結論：VPPF 適合充填重量範圍廣、但格式切換頻率不高的產品組合

            

        

    

    

### 本節重點回顧 Section Summary

    

        
- **公用設施設計原則：**能不進無菌區就不進；必須進的，優先焊接接頭，並定期驗證連接完整性。直接接觸產品的公用設施（氮氣、CIP/SIP）是最高風險管控重點，遵循 EU GMP Annex 1 和 ASME BPE 設計。

        
- **粉末充填的兩大技術：**AF（螺旋式，機械力傳輸，可 CIP/SIP）vs. VPPF（真空壓力，體積定量，需離線滅菌後無菌組裝）——技術選擇由產品粉末特性、劑量範圍和 SA 要求共同決定，無絕對優劣。

        
- **VPPF 的核心特徵：**劑量由腔體體積 + 真空壓力 + 投料次數決定；環境條件（溫濕度、氣流）是 CPP；計量濾膜堵塞是主要操作風險；無法 CIP/SIP 是最大的無菌保證挑戰；設置複雜但運行自動化程度高。

        
- **決策層級再確認：**所有技術選擇和操作設計，都必須以**無菌保證 (SA) > 產品 CQA > 商業效益**的順序評估。計量盤堵塞時「能不能繼續生產」的問題，答案必須從 SA 角度出發，而非產能壓力。

    

↑

## Topic 16: Vacuum Powder 真空粉末充填 (p205-p210)

# Section 16: Vacuum Pressure Powder Filling

    

真空壓力粉末充填技術

    

PDA Manufacturing Technology Guide No. 1 | doc p205 - p210

    

### 本章學習目標

    

        
- 理解真空壓力粉末充填機（VPPF）的工作原理，包含劑量盤、真空吸取與氣壓排出的完整充填循環

        
- 評估 VPPF 在設置複雜度上的挑戰，以及 super plate 概念如何降低無菌干預風險

        
- 分析 VPPF 的效率、成本、CIP/SIP 限制、維護需求，並能與螺旋充填機（AF）進行有意義的比較

        
- 掌握 VPPF 與 AF 在高毒性產品、容器相容性與無菌保證上的差異，應用決策層級做出設備選型判斷

    

    

### 本節內容架構

    

        16.2.6 效率與風險
        16.2.7 成本
        16.2.8 系統複雜度
        16.2.9 維護與老化
        16.2.10 一次性 vs 可重複使用
        16.2.11 CIP/SIP
        16.2.12 高毒性產品
        16.2.13 優缺點總覽
        16.3 螺旋粉末充填（AF）
        16.3.1 AF 設置
        16.3.2 AF 產品特性相容性
        16.3.3 AF 容器相容性
        16.3.4 AF 無菌保證
        16.3.5 AF 效率
        16.3.6 AF 成本
        16.3.7 AF 複雜度與換產
    

16.2.6 Vacuum Pressure Powder Filler Efficiency and Impact on Risk

    

        

## 原文內容 Original Text

        

VPPF speed (containers per minute) is quite fast and can be increased with a filler that employs multiple dosing lanes and fill heads for larger doses. The use of multiple fill heads will require additional aseptic interventions during setup.

    

    

        

## 導師解析 Tutorial Commentary

        

            

#### 核心概念解析 Key Concepts

            

**VPPF（Vacuum Pressure Powder Filler，真空壓力粉末充填機）**的速度優勢來自劑量盤（dosing disc）的旋轉設計：每轉一圈就完成一輪充填循環。配備多條充填道（dosing lanes）與多個充填頭（fill heads），整體產能可顯著提升，某些配置可達每分鐘數百個容器。

            

**無菌干預（aseptic intervention）**：指在無菌環境中需要人員介入的操作。充填頭數量越多，設置時需要的無菌組裝步驟越多，每一個步驟都是潛在的微生物污染機會。

        

        

            

#### 比喻說明 Analogy

            

想像一台有多個出水口的咖啡機：出水口越多，同時可以沖泡的咖啡越多，但每次啟動前需要確認每個出水口都清潔且正確安裝。若一個出水口沒裝好，整批咖啡都可能受到污染。VPPF 的多充填頭邏輯完全相同——速度換來的是更多的設置複雜度與無菌保證挑戰。

        

        

            

#### 重點提示 Key Notes

            

決策層級提醒：無菌保證（Sterility Assurance）永遠是第一優先。評估「增加充填頭提升產能」時，必須先問：增加的無菌干預是否已在 APS（Aseptic Process Simulation，無菌製程模擬）中被充分驗證？若不能確認，產能提升的商業效益必須讓步於無菌保證的要求。

        

        

            

#### 練習思考 Practice Questions

            

                
1. 若 VPPF 配備兩條充填道，APS 的設計應如何調整，確保所有充填頭的無菌干預都被涵蓋？

                
2. 在 CDMO 環境中，客戶要求最大化產能，但現有設備只有單充填頭。你會如何建議客戶在產能與無菌風險之間取得平衡？

            

        

    

16.2.7 Vacuum Pressure Powder Filler Costs: Initial and Ongoing

    

        

## 原文內容 Original Text

        

If multiple fill-weights are required, VPPF encounters additional costs for different formats and discs. Lifecycle costs for VPPF consumables include filters and O-rings for the filter and pistons. Other wear parts are those typical of any filling machine (e.g., bushings, bearings, seals). VPPF uses clean compressed air and vacuum. These can be supplied via house utilities or through localized generation. These systems will also potentially have consumables (e.g., filters, desiccant dryers).

        

The mechanical backplate and/or pneumatic rotary joint that is behind the dosing disc may be a point of friction during the rotation of the dosing disc. Therefore, over time, this rotational mechanism may need replacement, generally after multiple millions of cycles.

    

    

        

## 導師解析 Tutorial Commentary

        

            

#### 核心概念解析 Key Concepts

            

**格式件（format parts）與劑量盤（dosing discs）**：VPPF 以劑量盤決定充填劑量——不同劑量需要不同孔徑的劑量盤。若一台設備需要支援多個充填規格（如 50 mg、200 mg、500 mg），就需要購置對應的劑量盤套件，這是初始投資的重要成本項目。

            

**消耗品（consumables）**：過濾器（filters）、O 型環（O-rings）、活塞（pistons）是 VPPF 的主要耗材，需定期更換。壓縮空氣與真空系統（若使用本地產生方式）也有乾燥劑（desiccant）等耗材成本。

            

**氣動旋轉接頭（pneumatic rotary joint）**：這是劑量盤背面的旋轉接口，長時間旋轉摩擦後需要更換。使用壽命通常在數百萬次循環以上，屬於長週期計劃性維護項目。

        

        

            

#### 公式與計算 Formula — TCO 框架

            

```

VPPF 總擁有成本（TCO）組成：

初始成本：
  設備本體
+ 劑量盤套件（每種充填規格一套）
+ 壓縮空氣 / 真空系統（若本地化設置）
+ 隔離器或 RABS 整合工程費用

年度持續成本：
  過濾器更換費用
+ O 型環 / 活塞耗材
+ 壓縮空氣系統乾燥劑
+ 軸承、軸套、皮帶更換

低頻大件更換（按週期計）：
+ 氣動旋轉接頭（數百萬次循環後）
+ 驗證 / 再確效費用（格式更換後）
            
```

        

        

            

#### 比喻說明 Analogy

            

這就像買一台高階印表機：設備本身的價格只是起點。每種紙張規格需要不同的進紙模組（劑量盤套件），墨匣（O 型環）定期更換，印表頭（氣動旋轉接頭）在數百萬次列印後也需更換。評估時必須把整個生命週期的耗材成本都算進去，而不只是看設備標牌價。

        

        

            

#### 實務應用 Practical Application

            

在 CDMO 業務中，客戶常問：「這台設備能填我們三種規格（50 mg、250 mg、800 mg）嗎？」正確回答不只是技術上的「能」，而是要告知客戶：每種規格需要對應的劑量盤，設備切換（changeover）需要拆裝、清洗、重新校正充填重量，這些成本與時間都應反映在報價與交期計畫中。

        

        

            

#### 練習思考 Practice Questions

            

                
1. 若 VPPF 每年需更換 12 組 O 型環（每組 $500），以及每 5 年更換一次氣動旋轉接頭（$15,000），請計算 10 年的耗材總成本。

                
2. 客戶決定安裝本地化壓縮空氣產生系統而非使用公用系統，這對 TCO 有何影響？有哪些隱性成本需要考量？

            

        

    

16.2.8 Vacuum Pressure Powder Filler System Complexity: Setup, Handling, and Changeover

    

        

## 原文內容 Original Text

        

VPPFs are systems with a high complexity during the setup phase. Setup can be lengthy, but by implementing ergonomic features and installation aids, the setup could potentially be reduced. Assembly activities for the hoppers can be performed in a Grade C area with subsequent sterilization. For the dosing discs, drum, and needle, the parts are typically sterilized and then aseptically assembled in a downflow booth to install O-rings and pistons (unless working with a super plate design where assembly precedes sterilization followed by transport for mounting).

        

There may be rare cases where a dosing disc chamber plugs or a screen is breached during an operation. The typical mechanism to handle this would be to reject the containers associated with that chamber (on 100% weight-check equipment). Changing the dosing disc (due to plugged chambers or breaches) during the operation is not recommended as this is a significant intervention. Changing the dosing disc would require the availability of a second, sterilized disc within the cleanroom or isolator, clearance of the line, performance of the intervention (with all required EM samples), and restandardization of fill weights. Risk assessments for this operation should be performed and mitigation actions should be considered (e.g., reducing the duration of filling for each batch to reduce the chance of a plugged filter, optimizing powder and airflow characteristics to reduce the likelihood of a plug). Testing during filling system feasibility should ideally uncover such a risk so that appropriate controls (or filler type) can be implemented before registration of the process. Some filler designs, where individual dosing stations can be shut off after starting the run, make the need to perform such an unusual action less likely (e.g., dosing needles).

        

At the time of changeover, all the product-contact pieces (e.g., hoppers, discs, feed pipes) must be manually disassembled prior to being cleaned. After cleaning activities, there are two options:

        

            
- Sterilize the pieces in an autoclave and then assemble everything in the aseptic area

            
- Use the super plate concept (i.e., assemble the machine in a Class C environment and then sterilize it in an autoclave assembled, and later transport to the line for mounting)

        

        

If using the latter approach, after the sterilization, the super plate can be directly connected to the system in the aseptic area without prolonged or intricate manual interventions.

        

Once the setup is complete, system handling (governed by procedures) is quite easy. Modern systems are provided with 100% weight checks and with automatic adjustment of the dosing-piston lengths to maintain weight(s) within specified limits.

    

    

        

## 導師解析 Tutorial Commentary

        

            

#### 核心概念解析 Key Concepts

            

**超級板設計（super plate design）**：這是 VPPF 設置複雜度管理的重要創新。傳統方式是將零件滅菌後，在無菌區（Grade A）逐一組裝，操作時間長且干預風險高。Super plate 的概念是：先在 Grade C 環境完整組裝整個充填模組，再整體放入滅菌釜（autoclave）滅菌，最後以整體方式運送並掛載到充填線。在無菌區只需完成一個連接動作，大幅減少干預的複雜度與污染風險。

            

**劑量盤堵塞（plugged chamber）**：劑量盤上的孔道是粉末通道。若粉末顆粒過大、吸濕或靜電聚集，可能造成堵塞，導致某腔室無法正常充填。搭配 100% 重量檢測可自動剔除受影響的容器，而不需要停線更換劑量盤。

            

**自動活塞調整**：現代 VPPF 結合 100% 重量感測器，可即時自動調整活塞行程（piston stroke）以補償充填重量漂移，這是 CPP（Critical Process Parameter，關鍵製程參數）的閉迴路控制。

        

        

            

#### 比喻說明 Analogy

            

傳統無菌組裝就像「先消毒每一塊積木，再在手術室裡一塊一塊拼起來」——每個動作都是風險。Super plate 則是「先在普通房間把積木全部拼好，再整體放入高壓消毒鍋，拼好的成品再推進手術室直接插上使用」——只有最後一個連接步驟在高風險環境中完成。設計哲學是：最小化在無菌環境中的操作步驟。

        

        

            

#### 重點提示 Key Notes

            

**劑量盤運行中更換是重大干預（significant intervention）**：文件明確不建議在充填中途更換劑量盤。原因：需要備用的已滅菌劑量盤在場、需要清空充填線、需要完整 EM 取樣，以及重新校正充填重量。如此繁複的步驟不僅耗時，更帶來極高的無菌保證風險。正確的預防策略是在可行性評估（feasibility study）階段就充分測試粉末特性，選擇合適的設備設計。

            

**Super plate 的 Grade A 要求**：若採用 super plate 設計，從滅菌釜卸載面到充填線的整條運輸路徑，必須維持在 Grade A 潔淨度下——這對廠房動線與空間規劃有直接影響，是廠房設計階段必須提前考慮的因素。

        

        

            

#### 實務應用 Practical Application

            

評估採購 VPPF 時，應向設備商確認：是否支援 super plate 設計？若支援，充填線需預留什麼連接介面？滅菌釜到充填線的運輸路徑需符合什麼潔淨度要求？這些問題的答案直接影響廠房設計方案與 GMP 合規成本，應在廠房規劃早期（conceptual design 階段）就納入考量。

        

        

            

#### 練習思考 Practice Questions

            

                
1. 比較「傳統無菌組裝」與「super plate 概念」，各自的主要無菌保證風險點在哪裡？

                
2. 若充填過程中偵測到某個充填腔室出現劑量不足，搭配 100% 重量檢測設備，操作員的處置流程應該是什麼？

                
3. 「縮短每批次充填時長以減少劑量盤堵塞機率」這個緩解措施，對生產效率與商業效益有何影響？如何在風險評估中呈現這個 trade-off？

            

        

    

16.2.9 Vacuum Pressure Pump Filler Maintenance and Aging through the Product Lifecycle

    

        

## 原文內容 Original Text

        

Maintenance requirements for VPPF are typical of any mechanical system with moving parts. Bearings, bushings, and belts may all require replacement. Self-lubrication is a design requirement for product-contact parts. If there are dust boots around any mechanical cams or shafts, the boots may need to be inspected for integrity and replaced as necessary. The manufacturer's recommendations on maintenance intervals and requirements should be observed.

    

    

        

## 導師解析 Tutorial Commentary

        

            

#### 核心概念解析 Key Concepts

            

**自潤滑設計（self-lubrication）**：接觸產品的機械零件不能使用外部潤滑劑（如油脂），因為潤滑劑可能污染無菌粉末產品。VPPF 的產品接觸件必須使用自潤滑材料（如 PTFE、特殊工程塑膠）或乾式軸承。

            

**防塵套（dust boots）**：覆蓋在機械凸輪或軸桿上的彈性防護套，防止粉末微粒侵入機械部件，同時防止潤滑劑從機械部件洩漏到充填環境。若 dust boot 破損，粉末可能進入機械件導致磨損加速，或機油洩漏污染產品環境。

        

        

            

#### 比喻說明 Analogy

            

VPPF 的維護就像汽車定期保養：你不會等到引擎壞掉才換機油，而是按里程數提前更換。VPPF 以「充填循環次數」為里程表，每達到設備商建議的循環次數，就執行對應的 PM（Preventive Maintenance，預防性維護）項目。越依照計劃執行 PM，越能避免設備在批次充填中途故障，導致整批產品報廢。

        

        

            

#### 重點提示 Key Notes

            

VPPF 的維護哲學是計劃性預防維護，而非被動式故障維修。重要提醒：每次 PM 後，若更換了接觸粉末的零件，可能需要重新確認充填性能（re-qualification of fill weights）。這是影響生產計劃的關鍵因素——在 CDMO 的生產排程中，必須提前預留 PM 視窗與可能的再確效時間，才能避免對客戶交期造成衝擊。

        

        

            

#### 練習思考 Practice Questions

            

                
1. 若 VPPF 的 dust boot 在充填進行中發生破損，操作員應如何處置？此事件應如何記錄（偏差報告？還是日常記錄？）？

                
2. 設計 VPPF PM 計劃時，哪些資訊是必要的？（提示：考量零件設計壽命、設備充填速度、年產批次數）

            

        

    

16.2.10 Vacuum Pressure Pump Filler Strategy: Single-Use Versus Reusable

    

        

## 原文內容 Original Text

        

VPPF is typically cost-prohibitive as a SUS due to the complexity and precision necessary in the dosing discs. As a consequence, SUS do not exist, and cleaning validation is necessary.

    

    

        

## 導師解析 Tutorial Commentary

        

            

#### 核心概念解析 Key Concepts

            

**SUS（Single-Use System，一次性使用系統）**：指每次使用後即丟棄的設備組件，無需清洗與滅菌驗證。在液體充填領域，SU 管路、泵頭等已相當普及。然而 VPPF 的劑量盤需要極高精度加工，製造成本高昂，無法以一次性材料經濟地實現。

            

**清潔驗證（cleaning validation）**：VPPF 由於沒有 SUS 選項，所有接觸產品的部件（劑量盤、料斗、進料管道）在每批次使用後必須進行清洗，且需要通過清潔驗證，證明清洗程序能有效去除前一批次的殘留物，達到規定的殘留限量。

        

        

            

#### 重點提示 Key Notes

            

清潔驗證的合規要求是 VPPF 的重要限制。在 CDMO 多客戶共用設備的場景中，每引入一個新產品，或每更改清洗流程，都可能需要重新執行清潔驗證——這是顯著的時間與法規合規投入。對比 AF 系統，AF 可實現 CIP/SIP，清潔驗證的負擔相對較低（雖然仍然需要）。這是在設備選型時必須納入評估的合規成本因素。

        

        

            

#### 比喻說明 Analogy

            

SUS 就像外食使用的免洗餐具——用完丟掉，不需要洗碗。VPPF 的劑量盤則像精密的手術器械——每次使用後必須嚴格清洗消毒，且需要有書面紀錄證明清洗有效。越精密的器械，清洗程序越複雜，驗證要求也越高。

        

        

            

#### 練習思考 Practice Questions

            

                
1. 若 CDMO 的 VPPF 需要同時支援兩個不同客戶的藥品充填，清潔驗證的設計應考量哪些因素（提示：交叉污染、殘留限量 MACO 計算）？

                
2. 從 TCO 的角度，清潔驗證的一次性投入與持續維護成本，應如何在多年服務合約中分攤？

            

        

    

16.2.11 Vacuum Pressure Pump Filler Clean-In-Place/Sterilize-In-Place

    

        

## 原文內容 Original Text

        

CIP/SIP is only possible for the bulk-feed components of the system. The parts that cannot be subjected to CIP/SIP must be disassembled and cleaned, either manually or in a parts washer (filters are commonly cleaned in ultrasonic baths), followed by sterilization. Employing CIP/SIP for a portion of the system will increase the costs and complexity related to the implementation of utilities, steam traps, drains, thermocouples, additional valving, and validation.

    

    

        

## 導師解析 Tutorial Commentary

        

            

#### 核心概念解析 Key Concepts

            

**CIP（Clean-In-Place，就地清洗）/ SIP（Sterilize-In-Place，就地滅菌）**：無需拆解設備即可完成清洗與滅菌的系統。CIP/SIP 的優點是減少人員干預（降低污染風險）、縮短準備時間、提高效率。

            

**VPPF 的 CIP/SIP 限制**：只有進料料斗（bulk-feed hopper）等上游組件可以設計為 CIP/SIP 相容。劑量盤、活塞等精密充填件因結構複雜，必須拆下後以人工清洗（或零件清洗機、超音波清洗槽）清潔，再滅菌後重新組裝。

            

**超音波清洗（ultrasonic bath）**：利用高頻超音波在液體中產生的微氣泡爆破（cavitation），有效清除精密零件表面的殘留粉末，常用於過濾器的清洗。

        

        

            

#### 比喻說明 Analogy

            

想像廚房的自動洗碗機：鍋子和大碗可以直接放進洗碗機（類比 CIP），但精密的刀具和特殊餐具必須手洗（類比劑量盤的人工清洗）。VPPF 的 CIP/SIP 只覆蓋「大碗」部分，最需要精密清洗的「刀具」反而需要最複雜的人工處理，這是這個技術的先天限制。

        

        

            

#### 重點提示 Key Notes

            

CIP/SIP 系統的建置本身也是成本：需要蒸汽疏水閥（steam traps）、排水管、熱電偶（thermocouples）、額外閥門，以及完整的驗證（包含溫度分佈研究與清洗效果驗證）。因此，「局部 CIP/SIP」並非免費的優化——它帶來的工程複雜度與驗證負擔，必須與它節省的清洗時間相互權衡，才能判斷是否值得投資。

        

        

            

#### 練習思考 Practice Questions

            

                
1. 若 VPPF 的進料料斗設計為 CIP/SIP，而劑量盤必須人工清洗，在換產（changeover）計劃中如何統籌安排這兩個並行的清洗路徑？

                
2. 對比 AF（螺旋充填機）的完整 CIP/SIP 能力，VPPF 部分 CIP/SIP 設計在高毒性產品應用上的合規風險是什麼？

            

        

    

16.2.12 Use of Vacuum Pressure Powder Filler with Potent or Toxic Products

    

        

## 原文內容 Original Text

        

VPPF technology requires cleaning and sterilization off-line. Therefore, it may not be ideal for highly potent or toxic applications, although it may be acceptable if the equipment and environment can be rinsed in place (with or without partial disassembly) prior to opening the isolator or RABS. The rinsed parts are then bagged and removed for full cleaning and sterilization.

        

The mechanism of dose delivery through air pressure has the possibility of increasing the risk of product exposure to the filling environment for any excessively dusty product. Dust collection at the point of fill may reduce this risk. Filling-needle designs that insert the needle into the opening of the container at the point of delivery can also reduce the risk of product exposure to the environment. If the product is granular in nature, it is typically less dusty and, in addition, less air pressure is required to deliver the slug, regardless of the dosing-wheel design.

        

If there is a very small dose, as is typical of potent products, even with very motile powders, the risk of dust exposure is lessened.

    

    

        

## 導師解析 Tutorial Commentary

        

            

#### 核心概念解析 Key Concepts

            

**高效能藥物（highly potent compounds）**：指具有極低 OEL（Occupational Exposure Limit，職業暴露限值）的活性成分，通常 OEL < 10 μg/m³ 或更低（如細胞毒性藥物）。充填這類產品時，一旦粉末揚散到環境中，會對操作人員構成嚴重健康風險。

            

**氣壓充填與揚塵風險**：VPPF 以壓縮空氣將粉末從劑量盤推入容器——這個氣流有可能將粉末微粒揚散到充填區域。特別是對於流動性高（motile）或體積密度低（low bulk density）的細粉，揚塵問題更為顯著。

            

**就地沖洗（rinsing in place）**：在開啟隔離器（isolator）或 RABS 前，先用溶劑或水對設備表面進行沖洗，降低拆解時的暴露風險，之後再將零件袋封取出進行完整清洗。

        

        

            

#### 重點提示 Key Notes

            

決策層級在此清晰呈現：  

            1. 無菌保證（Sterility Assurance）：VPPF 的離線清洗需求帶來干預風險  

            2. 產品 CQA（Critical Quality Attribute）：揚塵可能導致充填量不準確  

            3. 商業需求：客戶可能指定 VPPF 技術  
  

            當產品為高毒性粉末時，VPPF 的氣壓充填機制引入了操作員暴露風險，這是一個「設備設計影響員工安全」的典型案例。應在風險評估中明確評估並記錄 VPPF 是否為適合的充填技術，或是否應優先考慮 AF。

        

        

            

#### 比喻說明 Analogy

            

想像用吹風機把粉末吹入瓶子——粉末越細、越輕，就越容易被氣流帶到瓶子外面。VPPF 的氣壓充填就像這個場景的精密版。若充填的是像麵粉一樣的細粉，就有揚塵問題；若充填的是像沙糖一樣的顆粒，則揚塵少得多，所需氣壓也更小。這個物理特性直接影響高毒性粉末充填時的風險等級。

        

        

            

#### 實務應用 Practical Application

            

在 CDMO 評估是否接受一個新的高毒性粉末充填項目時，技術評估應包含：(1) 產品 OEL 等級；(2) 粉末物理特性（粒徑、流動性、體積密度）；(3) 現有 VPPF 設備是否有充填針頭插入設計與粉塵收集裝置；(4) 是否需要負壓隔離器（negative pressure isolator）作為額外保護層。這些評估結果應記錄在 CMC 技術可行性報告中，作為接案決策的依據。

        

        

            

#### 練習思考 Practice Questions

            

                
1. 若充填產品的 OEL 為 1 μg/m³（高活性），你會建議使用 VPPF 還是 AF？說明你的理由及需要哪些額外的工程控制措施。

                
2. 「充填針頭插入容器開口的設計」如何減少揚塵風險？這個設計對充填速度（pieces per minute）有何影響？

                
3. 為何顆粒狀（granular）產品在 VPPF 充填時揚塵風險比細粉低？這與粉末物理特性中的哪些 CQA 相關？

            

        

    

16.2.13 Vacuum Pressure Powder Filler Benefits and Risks

    

        

## 原文內容 Original Text

        

Filler designs are highly varied and, depending on the features included with the specific filler, the capabilities may vary. Listed in Table 16.2.13-1 are some generalized features and ranges that may be considered when contrasting the VPPF technology to AF.

        

**Table 16.2.13-1 Benefits and Risks of Vacuum Pressure Powder Filler**

        

        
            
                
                
            
| Benefits | Risks |
| --- | --- |
            
                
                
            
| Large range of fill weights (~2.0 mg to 1000 mg) | CIP and SIP only available for bulk-feed system |
            
                
                
            
| Large range of possible container types can be filled | Complexity in aseptic assembly unless making use of the super plate concept |
            
                
                
            
| Accuracy in dosing-weight depends on fill weight and powder characteristics; typical ranges may include ~2% to 5% | If using super plate technology, Grade A zoning must be available from the unload side of the autoclave and throughout the filling line, ideally with minimal transport distances |
            
                
                
            
| Production rates of up to 400 pieces per minute with two lanes and two wheels | Possibility of leaving residual powder in the bulk hoppers (reducing % yield) |
            
                
                
            
| Available both for RABS and isolator installations | May require powder-handling know-how for products that have challenging characteristics |
            
                
                
            
| Low maintenance | May not be well-suited to isolators with a limited opening to introduce and perform aseptic setup |
        

        

    

    

        

## 導師解析 Tutorial Commentary

        

            

#### 核心概念解析 Key Concepts

            

**充填重量範圍（~2.0 mg to 1000 mg）**：VPPF 的劑量盤設計可以覆蓋從極小劑量（2 mg，適合高效能藥物）到中等劑量（1000 mg）的廣泛範圍，這是相對於其他充填技術的重要優勢。

            

**充填精度（~2% to 5% RSD）**：精度受充填重量與粉末特性影響——劑量越小、粉末流動性越差，精度越難控制。2% 是理想狀況（流動性好、顆粒均一），5% 是較困難的粉末特性下的典型值。這個精度範圍需與產品的 CQA 充填重量規格相對照，才能判斷是否符合要求。

            

**殘餘粉末損失**：充填結束後，料斗中可能殘留無法充填的粉末。對於昂貴的原料藥（API），殘餘損失直接影響批次良率（% yield），是重要的商業考量。

        

        

            

#### 公式與計算 Formula — 充填精度評估

            

```

充填精度指標：

RSD (Relative Standard Deviation) =
  (標準差 / 平均充填重量) × 100%

VPPF 典型範圍：
  良好粉末（流動性佳、顆粒均一）：~2% RSD
  困難粉末（細粉、吸濕性強）：~5% RSD

判斷標準：
  產品規格（Specification）的充填重量允差
  必須 > 設備的充填 RSD × 3σ
  才能確保製程能力指數 Cpk ≥ 1.33
            
```

        

        

            

#### 重點提示 Key Notes

            

此表格是 VPPF 與 AF 技術選型評估的核心參考。關鍵洞察：VPPF 的最大優勢是速度（400 pcs/min）與充填重量範圍寬廣；最大弱點是 CIP/SIP 僅覆蓋部分系統，以及複雜的無菌組裝需求。若產品具有困難的粉末特性（如高黏性、易結塊），應在可行性評估（feasibility study）階段就充分測試，避免在商業化生產後才發現設備不適合。

        

        

            

#### 實務應用 Practical Application

            

在 CDMO 技術評估報告中，這個優缺點表格應成為設備選型決策文件的核心章節。建議格式：針對每個風險項目，說明客戶產品是否受影響，以及計畫採取的緩解措施（如超級板設計緩解組裝複雜度、粉塵收集裝置緩解揚塵風險）。這樣的文件既是技術評估，也是合規文件，可以在 FDA 或 EMA 視察時支持你的技術選型決策。

        

        

            

#### 練習思考 Practice Questions

            

                
1. 若客戶的產品充填重量規格為 200 mg ± 10 mg（允差 ±5%），VPPF 在最差情況下（5% RSD）能否滿足此規格？請用 Cpk 計算驗證你的答案。

                
2. 「低維護（Low maintenance）」被列為 VPPF 的優點，但前面章節又提到軸承、皮帶、氣動旋轉接頭的更換需求，如何理解這兩者的關係？

                
3. 若隔離器（isolator）的傳遞口（RTP）尺寸有限，為何這可能影響 VPPF 的無菌設置操作？有哪些工程解決方案？

            

        

    

16.3 Aseptic Filling Technologies: Auger Powder Filling

    

        

## 原文內容 Original Text

        

AF technology is illustrated in Figure 16.3-1.

        

Figure 16.3-1 Typical Auger Powder Filler  
*[Figure referenced in source — not available in extracted text]*

        

In an AF system, powder is loaded in an upper feeding hopper, then transferred to a lower hopper equipped with dosing augers suitable to fill the powder inside the containers. See Section 18.0 for a discussion on the transfer of product from bulk containers to the filler hopper.

        

The lower hopper, as well as upper hopper, is designed with a proper mixing system necessary to ensure homogeneity and the proper powder flow to the auger. The design of the mixing system improves yield through the consumption of the majority of the bulk product with only small losses. The system needs to be equipped with a proper venting system within the hopper, which vents locally, to avoid back-pressure (due to powder attributes such as stickiness or adhesion) and ensure a proper dosing performance. The filling dosing is governed by the auger diameter (i.e., screw external diameter) and by the number of auger rotations performed within the same container.

        

AFs are a strong option for containment applications for highly potent or toxic products due to the use of mechanical transfer of the powder, rather than compressed air, and the ability to clean and sterilize the equipment in place.

    

    

        

## 導師解析 Tutorial Commentary

        

            

#### 核心概念解析 Key Concepts

            

**螺旋充填機（Auger Filler，AF）**：以螺旋桿（auger/screw）的機械旋轉帶動粉末，精確計量並充填進容器。與 VPPF 的氣壓充填不同，AF 是純機械式輸送，沒有氣流擾動，適合容易揚塵或高毒性的粉末產品。

            

**充填劑量決定因素**：AF 的充填量由兩個參數決定：(1) 螺旋桿直徑（決定每轉一圈輸送的粉末體積）；(2) 旋轉圈數（決定總充填量）。這兩個參數構成了 AF 最核心的 CPP（關鍵製程參數）。

            

**排氣系統（venting system）**：料斗中的排氣口設計至關重要——充填時粉末進入容器會排出容器內的空氣，若沒有適當的排氣設計，料斗內的背壓（back-pressure）會干擾粉末流動，導致充填重量不穩定。

        

        

            

#### 比喻說明 Analogy

            

AF 就像廚師用義大利麵機把麵團推出成麵條——靠的是機械螺旋的推力，而不是吹氣。轉幾圈就出幾段麵條（充填幾克的粉末），非常精確、可控，而且不會把麵粉揚到空氣中。對比 VPPF 是「用氣流把粉末吹進容器」，AF 是「用螺旋把粉末壓進容器」，前者揚塵風險高，後者幾乎沒有揚塵。

        

        

            

#### 重點提示 Key Notes

            

AF 能夠 CIP/SIP 的根本原因：AF 的管道系統（料斗、螺旋管）全程密閉，流體（清洗液、蒸汽）可以在不拆解的情況下通過整個流路，完成清洗與滅菌。這與 VPPF 的劑量盤設計形成鮮明對比——VPPF 的劑量盤是圓形旋轉件，無法形成密封的 CIP/SIP 流路。這個根本性的機械設計差異，決定了兩種技術在 CIP/SIP 能力上的本質不同。

        

        

            

#### 練習思考 Practice Questions

            

                
1. 若 AF 充填頭（dosing auger）的直徑增大，充填量會如何變化？若要維持同樣的充填量，旋轉圈數應如何調整？

                
2. 為何 AF 特別適合「密閉充填」（containment）應用？從粉末輸送機制的角度解釋。

            

        

    

16.3.1 Auger Powder Filler Setup

    

        

## 原文內容 Original Text

        

AF is high-precision dosing system. Accuracy of dosing is mainly impacted by the physical characteristics of the powder and the environment. If the powder particle-size varies, agitation in the dosing hopper(s) is an essential means of ensuring continuous powder flow to the auger. Particle-size distribution, powder moisture content, humidity, temperature of the environment, and airflow can all affect flow characteristics and accuracy over time. Dose control is performed by managing the number of rotations of the auger. Statistical weight check is a must for all filling operations; however, an in-line 100% weighing system is a highly recommended upgrade. Adjustments to the auger rotation is possible with some filler models to address trends in weights.

    

    

        

## 導師解析 Tutorial Commentary

        

            

#### 核心概念解析 Key Concepts

            

**影響 AF 充填精度的環境因素**：粉末的充填精度不只是設備本身的問題，環境條件同樣關鍵：

            

                
- **濕度（humidity）**：粉末吸濕後流動性改變，充填量可能漂移

                
- **溫度（temperature）**：影響粉末體積密度（bulk density）

                
- **氣流（airflow）**：HVAC 的送風方向可能干擾料斗中的粉末分佈

                
- **粒徑分佈（particle-size distribution）**：批次間粒徑變異會導致充填量不一致

            

            

**攪拌（agitation）**：料斗中的攪拌機構確保粉末不結塊、持續均勻流動到螺旋桿，是維持充填精度一致性的關鍵設計。

        

        

            

#### 重點提示 Key Notes

            

IPC（In-Process Control，製程中管控）的強度選擇反映了品質風險管理（QRM）的思維：統計抽樣（statistical weight check）是最低要求，能偵測重大漂移；100% 重量檢測（in-line 100% weighing）則能偵測每一個容器的偏差，提供最完整的品質保證。文件明確建議：即使不是強制要求，100% 重量檢測也是「強烈推薦的升級（highly recommended upgrade）」。這個立場體現了決策層級——產品 CQA（充填重量）的保護優先於設備成本的節省。

        

        

            

#### 比喻說明 Analogy

            

想像一家糕餅店用機器分裝餅乾：若每塊餅乾的重量都需要精確符合標示，最好的方法是每一塊都過磅（100% 重量檢測），而不是每 10 塊才量一次（統計抽樣）。對藥廠來說，充填重量直接影響患者拿到的劑量，差異更是生死攸關，因此 100% 重量檢測是最符合患者安全優先的設計選擇。

        

        

            

#### 練習思考 Practice Questions

            

                
1. 若 AF 充填過程中偵測到充填重量有下降趨勢（trending low），操作員應首先檢查哪些可能原因？（提示：環境、粉末、設備三個面向）

                
2. 統計抽樣與 100% 重量檢測在法規合規（ICH Q10、GMP）上各自的依據是什麼？哪種方式更易於在 QMS 中辯護？

            

        

    

16.3.2 Auger Powder Filler Product Characteristic Compatibility

    

        

## 原文內容 Original Text

        

There are a wide variety of product characteristics that can impact filler design. A combined table of the common attributes to consider with various filling technologies (both VPPF and AF) is included in Section 17.0.

    

    

        

## 導師解析 Tutorial Commentary

        

            

#### 重點提示 Key Notes

            

本小節是一個明確的交叉引用，指向 Section 17.0 中的綜合比較表格。這提示我們：PDA Guide No. 1 的架構設計是先分別介紹各技術（Section 14-16），然後在 Section 17 進行系統性的產品特性 vs. 充填技術相容性比較。若你正在做技術選型評估，Section 17 的表格是核心參考工具——在完成本節學習後，應接著研讀 Section 17 來完整掌握粉末充填技術的全貌。

        

        

            

#### 練習思考 Practice Questions

            

                
1. 在進入 Section 17 的比較表格之前，你能預測哪些粉末特性（CQA）對 AF 和 VPPF 的影響是相同的，哪些是不同的？

            

        

    

16.3.3 Auger Powder Filler Filling Container Compatibility

    

        

## 原文內容 Original Text

        

Auger systems can be used with a variety of container types, depending on the selected filler design. Table 16.3.3-1 depicts typical containers and their applicability to the various AF system designs.

        

**Table 16.3.3-1 Filling Container Compatibility with Auger Filler Designs**

        

        
            
                
                
                
                
                
                
                
            
| Auger Filler Type | Vial | Cartridge | Syringe | Ampoule | Bag | Inhalers |
| --- | --- | --- | --- | --- | --- | --- |
            
                
                
                
                
                
                
                
            
| Auger Filler with Scroll Feeder | Yes | Yes1 | Yes1 | No | Yes2 | No Current Known Applications |
            
                
                
                
                
                
                
                
            
| Auger Filler with Vibration Feeder | Yes | Yes1 | Yes1 | No | Yes2 | No Current Known Applications |
        

        

        

            1Will require a dosing mechanism that enters the mouth of the container; neck diameter minimally 5 mm; more successful with larger openings  

            2Bag shape is specifically designed at the mouth for the technology
        

        

When working with nested components, such as syringes or cartridges (see Section 9.0 and Section 10.0 for the introduction of components), AF fillers are adapted to either provide robotics (e.g., XY table) to dose from the fixed filling-mechanism to each position within the nest, or to denest the components, fill them, and then renest the components. When considering nested components, care should be taken with the approach for the IPC weight check, as these approaches may restrict the ability to perform 100% net weight capabilities.

    

    

        

## 導師解析 Tutorial Commentary

        

            

#### 核心概念解析 Key Concepts

            

**捲軸進料器（Scroll Feeder）vs 振動進料器（Vibration Feeder）**：這是 AF 的兩種粉末進料設計。捲軸進料器以旋轉捲軸推動粉末；振動進料器以微振動帶動粉末流動。兩種設計的容器相容性相同，選擇通常取決於粉末特性（流動性、顆粒大小）。

            

**巢式組件（nested components）**：注射器（syringe）或卡式瓶（cartridge）在充填前通常以「巢式」托架方式排列，多支容器固定在同一個托架上。AF 充填巢式組件有兩種方式：(1) 機械手臂移動 XY 工作台，讓固定的充填頭對應到每個容器位置；(2) 將容器從巢式托架取出（denest）、充填後再放回（renest）。

            

**頸部直徑限制（minimum neck diameter 5 mm）**：AF 的充填頭（螺旋管道）需要進入容器開口，因此容器頸部尺寸是硬性限制。安瓿（ampoule）因頸部極細且需要火封，AF 技術不適用。

        

        

            

#### 重點提示 Key Notes

            

巢式充填對 IPC 重量檢測的影響：使用 XY 工作台時，充填頭在容器間移動，每次充填後不易立即進行單支淨重（net weight）檢測，因為容器仍在巢式托架上，重量感測器難以準確量測個別容器的淨重。這意味著某些巢式充填設計可能只能做到統計抽樣，而無法實現 100% 重量檢測——這是影響劑量 CQA 保證能力的重要考量，選型時必須與客戶的品質要求對照確認。

        

        

            

#### 比喻說明 Analogy

            

巢式充填的 XY 機械手臂就像辦公室的印表機打孔機：印表機位置固定，是紙張（充填容器）移動到印表機下方定位，完成每一個動作。若容器太多（大巢式托架），機械手臂移動時間就成為限制效率的因素，這也是為什麼效率（16.3.5節）是設計時需要特別考量的面向。

        

        

            

#### 練習思考 Practice Questions

            

                
1. 客戶要求使用 AF 充填 1 mL 預填充注射器（pre-filled syringe），頸部直徑 6 mm。請評估此應用的可行性，並列出你會進一步確認的技術參數。

                
2. 若選擇「取出（denest）-充填-放回（renest）」的方式處理巢式注射器，這個流程在無菌保證上帶來哪些額外考量？

            

        

    

16.3.4 Auger Powder Filler Sterility Assurance (Microbial and Total Particles)

    

        

## 原文內容 Original Text

        

The AF is mainly a closed system as all components can be subjected to CIP/SIP and the product is not exposed up to the point of product delivery. At the point of discharge into the container, there is a small (1-2 mm) gap between the filler and the mouth of the container. The gap is necessary to accommodate differences in container dimensions and to enable weigh cells (with net-weight fillers) to properly register the tare and gross weight of the container. For some filler designs, the auger may be capable of descending past the plane of the opening to enter the container, reducing the possibility that powder would escape during the dosing cycle.

        

Due to the presence of possible multi-axial screws and mixer, AF systems normally do not allow an aseptic installation, which is why this system is recommended to include a proper CIP/SIP capability. The entire procedure must be validated.

        

Due to the shape and design of the system, the cleaning and sterilization needs to consider the different shapes and passages, and it must be designed to guarantee proper cleaning, drying, and sterilization of the whole system. Both the inside and the outside of the auger-dosing tube need to be properly cleaned.

        

Microbiological plates must be positioned at the critical points during the filling operation. As powder fillers tend to be wider than liquid fillers, the ergonomics for microbiological plate placement should be verified as part of the initial qualification to avoid the risk of contamination during placement. Monitoring positions should be included as part of the filler design (e.g., during mock-up) to ensure effective ergonomics.

    

    

        

## 導師解析 Tutorial Commentary

        

            

#### 核心概念解析 Key Concepts

            

**1-2 mm 間隙（gap）的設計矛盾**：這個微小間隙是 AF 無菌保證的核心挑戰。間隙存在的原因是：(1) 容器尺寸公差（tolerance）：不同批次的容器高度有細微差異，充填頭不能緊壓瓶口否則可能損壞容器；(2) 淨重檢測：重量感測器需要充填頭與容器之間沒有機械接觸，才能準確量測。然而這 1-2 mm 的開放空間，就是粉末可能逸散到充填環境的唯一路徑。

            

**AF 不允許無菌安裝的原因**：AF 的多軸螺旋桿與攪拌機構（multi-axial screws and mixer）結構複雜，無法在無菌區域以人工方式完成無菌組裝——零件太多、太複雜，無法像 VPPF 的 super plate 那樣整體滅菌後再掛載。因此 AF 的唯一可行路徑是 CIP/SIP。

            

**螺旋管道的清洗挑戰**：螺旋桿的內部（粉末通道）與外部（與料斗接觸的面）都需要清洗，且螺旋槽的形狀複雜，容易積粉。CIP/SIP 的設計必須確保清洗液能完整覆蓋所有表面，包含螺旋槽的死角。

        

        

            

#### 重點提示 Key Notes

            

環境監測（EM）位置設計是粉末充填的特有挑戰：粉末充填機比液體充填機寬，操作人員難以在不引入污染風險的情況下伸手放置微生物監測板（microbiological plates）。EU GMP Annex 1 要求持續監測充填關鍵區域，因此 EM 探頭的位置必須在設備設計初期（mock-up 階段）就規劃好，並在廠房驗收測試（FAT/SAT）中驗證放置的可行性。這是設備採購合約中必須明確要求廠商配合的設計條件。

        

        

            

#### 比喻說明 Analogy

            

AF 的密閉系統就像封閉式輸送帶，粉末在管道內移動，直到最後「出口」（1-2 mm 間隙）才接觸到外部環境。這個設計讓整個充填過程的污染暴露面積最小化——只有那最後的 1-2 mm 是「開放」的。對比 VPPF 的劑量盤充填，粉末在盤上是開放暴露的。從無菌保證的角度，AF 的密閉設計在充填過程中本身就是一個更優的污染控制策略。

        

        

            

#### 實務應用 Practical Application

            

在廠房設計階段，與 AF 設備商討論 EM 整合時，關鍵問題是：(1) 設備是否預留了 EM 感測器的安裝位置？(2) 感測器高度是否需要比液體充填機高（以避免粉末揚塵干擾）？(3) 微生物監測板的放置是否可以在不觸碰充填區域的情況下完成？這些問題若在設備安裝後才發現，改造成本將非常高昂，應在 FAT（Factory Acceptance Test）前就確認。

        

        

            

#### 練習思考 Practice Questions

            

                
1. AF 的 CIP/SIP 驗證應包含哪些關鍵測試項目？（提示：清潔效果（TOC/conductivity）、乾燥效果（水分檢測）、滅菌效果（溫度分佈研究））

                
2. 為何粉末充填機的 EM 探頭可能需要安裝在比液體充填機更高的位置？這個調整對 EU GMP Annex 1 的合規性有何影響？

                
3. 「充填頭插入容器開口（descending past the plane of the opening）」設計的優缺點是什麼？它對容器頸部尺寸的要求有何影響？

            

        

    

16.3.5 Auger Powder Filling Efficiency and Impact on Risk

    

        

## 原文內容 Original Text

        

AF speed (containers per minute) is quite fast and can be increased with a filling system that is equipped with multiple lanes and augers.

        

The CIP/SIP unit should be properly designed to consider eventual multiple-dosing points if that is anticipated for future production. The end user should specify the proper requirements for the intended CIP/SIP controls in case of a split-fill system, if any.

    

    

        

## 導師解析 Tutorial Commentary

        

            

#### 核心概念解析 Key Concepts

            

**多道充填（multiple lanes）**：AF 同樣可以配備多個螺旋充填頭以提升產能。每增加一個充填道，CIP/SIP 系統也需要對應覆蓋，確保每個充填頭的清洗與滅菌效果都通過驗證。

            

**分割充填系統（split-fill system）**：某些產品需要將兩種成分分批充填（如藥粉與賦形劑分開充填），在這種配置下，CIP/SIP 的管路設計需要覆蓋所有充填點，並確保清洗順序與流路符合 GMP 要求。

        

        

            

#### 重點提示 Key Notes

            

CIP/SIP 設計的「未來適應性（scalability）」是一個常被忽視但非常重要的規劃面向：若在設備採購時只考慮現有的充填道數量，未來業務擴展需要增加充填道時，原有的 CIP/SIP 系統可能無法覆蓋新增的充填點，需要昂貴的改造工程。建議在採購合約中明確要求設備商提供「X 條充填道的 CIP/SIP 擴充方案」，即使第一期只啟用較少的充填道。

        

        

            

#### 練習思考 Practice Questions

            

                
1. 若 AF 計劃未來從 2 條充填道擴充到 4 條充填道，CIP/SIP 系統的哪些組件可能需要升級（提示：管路、閥門、流量控制）？

                
2. 分割充填（split-fill）的 CIP/SIP 驗證，與標準單一充填的 CIP/SIP 驗證，在設計上有哪些額外複雜度？

            

        

    

16.3.6 Auger Powder Filling Costs: Initial and Ongoing

    

        

## 原文內容 Original Text

        

Implementation of AF systems should consider the additional costs associated with the presence of a CIP/SIP system. CIP/SIP is highly recommended due to the extreme difficulty in aseptic assembly.

        

If multiple fill-weights are required, AF will incur costs for different format parts and augers.

        

Lifecycle costs are negligible because the AF has few disposable items (due, in part, to the CIP/SIP, which makes SU parts unnecessary) or consumable items.

    

    

        

## 導師解析 Tutorial Commentary

        

            

#### 核心概念解析 Key Concepts

            

**CIP/SIP 系統的額外初始成本**：AF 的 CIP/SIP 需要配套的蒸汽供應、純水（WFI）供應、熱電偶、蒸汽疏水閥、排水管道及相應的驗證工作。這些系統成本不包含在設備本體報價中，但可能與設備本身同等量級。在廠房預算規劃中，AF 的「全套」初始成本 = 設備 + CIP/SIP 基礎設施。

            

**AF 格式件（format parts）**：不同充填重量需要不同直徑的螺旋桿（auger），以及對應的料斗出口與充填頭尺寸。與 VPPF 的劑量盤一樣，多格式需求會增加初始的格式件採購成本。

            

**低耗材成本**：AF 因為 CIP/SIP 取代了一次性耗材（不需要 VPPF 那樣大量的 O 型環、活塞、過濾器），且機械結構相對簡單，持續耗材成本非常低。這使 AF 的 TCO 模型呈現「前重後輕」——初始投入高（設備 + CIP/SIP），但後續持續成本低。

        

        

            

#### 公式與計算 Formula — VPPF vs AF 成本比較框架

            

```

TCO 比較（10年視角，概念性）：

               VPPF        AF
初始設備       中等         中等
CIP/SIP基礎設施 低           高（*關鍵差異）
格式件         高（多規格）  高（多規格）
年度耗材       中等         低
維護工時       中等         低
清潔驗證       高           中等（CIP/SIP覆蓋更多）
總10年TCO      中等         初始高，長期低

* AF 的 CIP/SIP 基礎設施初始成本高，
  但後期節省的耗材與人工成本可彌補差距
            
```

        

        

            

#### 比喻說明 Analogy

            

AF 就像買電動車：前期購買成本（設備 + CIP/SIP 基礎設施）比傳統燃油車（VPPF）高，但後期的「油錢」（耗材費用）幾乎為零。長期使用下來，電動車的 TCO 往往更划算。這個邏輯在高產量、長期運行的商業化生產廠房中尤為成立。

        

        

            

#### 練習思考 Practice Questions

            

                
1. 若你需要向管理層報告 VPPF vs AF 的設備選型建議，你會建立一個幾年的 TCO 模型？哪些輸入變數對最終選擇影響最大？

                
2. 「CIP/SIP 使 SU 零件不必要」這個說法是否完全正確？AF 中是否有任何情況仍需考慮 SU 組件？

            

        

    

16.3.7 Auger Powder Filler System Complexity: Setup, Handling, and Changeover

    

        

## 原文內容 Original Text

        

AFs are systems with low complexity during the setup phase as the vast majority of the assembly is completed prior to CIP/SIP of the system. Only the connection with the powder-supply system needs to be properly designed and managed according to technology specifications (e.g., bin, keg, bag).

        

Once the setup is completed, the system adjustment, if any, is governed by the machine. Modern systems are provided with 100% weight checks and with automatic adjustment of the dosing auger rotation to maintain weight(s) within specified limits.

    

    

        

## 導師解析 Tutorial Commentary

        

            

#### 核心概念解析 Key Concepts

            

**AF 低設置複雜度的原因**：AF 的絕大多數組裝工作在 CIP/SIP 之前就已完成——系統在 Grade C（或更低）環境中組裝好，完整執行 CIP/SIP 滅菌，然後只需連接粉末供料系統即可啟動充填。對比 VPPF 需要在無菌環境中逐一安裝活塞、O 型環，AF 的設置流程顯著簡化，無菌干預風險大幅降低。

            

**自動螺旋旋轉調整**：與 VPPF 的活塞長度自動調整類似，現代 AF 系統通過 100% 重量回饋，自動調整螺旋桿的旋轉圈數，維持充填重量在規格範圍內——這是 AF 的閉迴路 CPP 控制。

            

**粉末供料系統連接**：AF 的唯一設置關鍵點是與散裝粉末供料系統（bin、keg 或袋子）的接口設計。這個連接必須符合粉末品質要求（避免污染）與無菌要求（若在無菌區連接），是設置程序（SOP）中需要嚴格規範的步驟。

        

        

            

#### 比喻說明 Analogy

            

AF 的設置就像即食咖啡機：整台機器（HEPA 過濾器、加熱系統、沖泡機構）在出廠前就完整安裝好，使用者只需要接上水源（連接粉末供料系統）就可以開始使用。對比 VPPF 設置就像每次使用前都要重新安裝咖啡機的每個零件——AF 的概念簡化了使用者需要在無菌環境中完成的工作。

        

        

            

#### 重點提示 Key Notes

            

AF vs VPPF 設置複雜度的本質差異：VPPF 的複雜度在「設置階段（無菌干預多）」；AF 的複雜度在「CIP/SIP 系統設計與驗證階段（基礎設施要求高）」。兩者都有複雜度，只是複雜度的位置不同。VPPF 的複雜度是每次批次生產都重複的操作複雜度；AF 的複雜度是一次性的工程複雜度（設計 + 驗證）。從生產運營的角度，AF 的「一次性工程投入換取長期操作簡化」模式，更符合商業化生產的效率需求。

        

        

            

#### 實務應用 Practical Application

            

在 CDMO 評估高頻率、多規格的粉末充填業務時，AF 的低設置複雜度意味著：換產（changeover）時間短、操作員培訓成本低、批次間設置失誤風險低。這些因素對於 CDMO 的運營效率與客戶交期承諾都有正面影響，應在業務開發報告中量化呈現（例如：AF 換產時間 vs VPPF 換產時間的對比）。

        

        

            

#### 練習思考 Practice Questions

            

                
1. AF 完成 CIP/SIP 後，與粉末供料系統（如 IBC bin）的連接操作，在無菌保證上需要注意哪些事項？連接介面的設計應符合哪些 GMP 要求？

                
2. 若 AF 需要在同一天充填兩個不同配方的批次（換產），完整的換產流程包含哪些步驟？每個步驟的關鍵控制點是什麼？

                
3. 「自動調整螺旋旋轉圈數」的功能屬於 CPP 的自動控制，這個功能是否需要在工藝驗證（process validation）中進行驗證？如何設計驗證研究？

            

        

    

    

### 本節重點回顧 Section Summary

    

        
- **VPPF 速度優勢明顯（最高 400 pcs/min）**，但多充填頭設計帶來更多無菌干預需求，設置複雜度高。Super plate 概念是降低無菌組裝風險的關鍵創新，但需要廠房提供 Grade A 運輸路徑。

        
- **VPPF 的 CIP/SIP 只覆蓋進料料斗**，劑量盤等精密件必須離線清洗。這是 VPPF 在多產品共用設備環境下清潔驗證負擔較重的根本原因。

        
- **VPPF 對高毒性產品適用性有限**：氣壓充填機制在處理細粉時可能產生揚塵，需要額外的工程控制（粉塵收集、充填針頭插入設計）；離線清洗也增加暴露風險。

        
- **AF 完整 CIP/SIP 能力是其核心優勢**：設置複雜度低（CIP/SIP 前完成組裝），無菌干預最小化；密閉系統設計使其成為高毒性產品充填的首選技術。

        
- **AF 的 1-2 mm 充填間隙**是無菌保證的固有挑戰，充填針頭插入設計可緩解此風險；環境監測位置規劃必須在設備設計初期（mock-up 階段）就確認。

        
- **決策層級貫穿全節**：無菌保證（Sterility Assurance）永遠優先——無論是 VPPF 的 super plate 選擇、AF 的 CIP/SIP 投資，還是高毒性產品的技術選型，都必須先確保最高等級的無菌保證，再考量產品 CQA 與商業效率。

## Topic 17-19: Powder Func & Dose 粉末功能與劑量 (p210-p221)

# Section 17–19: Powder Filling — Functionality, Dose Control & Operations

    

粉末充填：產品功能相容性、劑量管控與操作棄料策略

    

PDA Manufacturing Technology Guide No. 1 | doc p210 – p221

    

### 本章學習目標

    

        
- 掌握影響粉末充填技術選擇的七大產品特性，以及 VPPF 與 AF 各自的適用條件。

        
- 理解粉末批量傳送（Bulk Transfer）方式對充填機設計的影響，以及含量均一性管控的關鍵。

        
- 說明粉末充填各階段（開機 / 充填中 / 劑量管控 / 填畢 / 其他）的棄料策略與風險控制方法。

        
- 將決策層次（無菌保證 > 產品 CQA > 商業彈性）應用於粉末充填技術的日常操作決策。

    

    

### 章節架構

    

        17.0 Product Characteristics Compatibility
        17.1 Influence of Product Attributes
        18.0 Effect of Powder Transfer
        19.0 Discard Strategies Overview
        19.1 Startup & Priming
        19.2 Filling & Interventions
        19.3 Dose Control
        19.4 Conclusion of Fill
        19.5 Other Rejection Considerations
    

17.0 Product Characteristics Compatibility for Vacuum Pressure Powder Filler and Auger Powder Filler Technologies

    

        

## 原文內容 Original Text

        

With all powder filling, the attributes of the powder influence the powder-handling and flow characteristics, which will drive the selection of the technology. The attributes to be considered include:

        

            
- Density (tap and bulk)

            
- Particle size

            
- Porosity and particle surface area

            
- Angle of repose (flowability)

            
- Friction effects and temperature sensitivity

            
- Electrostatic charge

            
- Hygroscopicity

        

        

Section 17.1 explores powder attributes and their influence on the selection and design of a powder filling system.

    

    

        

## 導師解析 Tutorial Commentary

        

            

#### 核心概念解析 Key Concepts

            

**粉末物理特性七要素：**這七個屬性並非獨立存在，而是同時影響粉末在充填機中的行為。密度（Density）決定每次充填的體積量，流動性（Angle of Repose，休止角，即粉末堆積時與水平面形成的角度）決定粉末能否順暢移動，靜電荷（Electrostatic Charge）則直接影響劑量準確度與粉末是否會附著在瓶頸。

            

**技術選擇邏輯：**粉末屬性不一定決定「哪種機器能用」，但往往決定「哪種機器更划算、更穩定」。

        

        

            

#### 比喻說明 Analogy

            

選擇充填技術就像選烹飪工具：液體用量杯，但粉末（麵粉、糖、鹽）卻各有不同特性。麵粉容易結塊（hygroscopic），鹽流動性好（free-flowing），糖容易產生靜電。廚師要根據食材特性選工具，粉末充填工程師也是一樣的邏輯。

        

        

            

#### 練習思考 Practice Questions

            

                
1. 如果你的產品是高吸濕性（hygroscopic）粉末，在 VPPF 與 AF 之間，哪個技術在環境控制上要求更嚴格？為什麼？

                
2. 一個充填工程師在面對靜電荷嚴重的產品時，最優先應確認充填系統的哪個設計特徵？

            

        

    

17.1 Influence of Product Attributes on Selected Powder Filling Technology

    

        

## 原文內容 Original Text

        

During product and process development, the attributes of the powder should be tested to confirm its handling characteristics and to establish the critical process parameters and machine setup (e.g., mesh sizing and material for VPPF or auger selection for AF) that will be required for successful filling. While the powder characteristics may not limit the selection of the filling technology, the restrictions on certain process parameters, such as speed of filling, may make one technology more favorable than another. Often, equipment suppliers can perform this testing for the company if the equipment is not available within the development department to confirm the appropriate equipment settings.

        

The selection of the container and its neck size are more critical for powder filling than for liquid filling. The centering of the container is essential to the delivery of the powder to the container. The size of the neck opening will impact the quantity of powder that can be dosed with each rotation for VPPF. For both VPPF and AF, a small neck opening may affect the speed at which the machine can be operated. The neck opening does not necessarily impact the selection of the specific filling technology, although with very small neck openings, such as ampoules, there may be some practical limits for each technology.

        

Table 17.1-1 evaluates the attributes of the product, one aspect at a time, with each filling technology. In reality, however, the powder has aspects of each attribute simultaneously, and the best technology will be the most suitable compromise for all characteristics. In practice, it is not always possible to determine the appropriate technology from a list of attributes; often, testing the powder with the selected technologies is the best way to determine handling and behavior. Finally, cost, flexibility, fill speed, containment considerations, and availability of the technology within the factory may also be deciding factors.

        
        

            
                Table 17.1-1 Product and Filling Operation Characteristics Versus Filler Design
                
                    
                        
                        
                        
                    
| Consideration | Vacuum Pressure Powder Filler (VPPF) | Auger Powder Filler (AF) |
| --- | --- | --- |
                
                
                    
                        ****
                        
                        
                    
| Density (tap and bulk) & Porosity / Particle Surface Area | Independent of powder-flow characteristics. High-porosity products will result in good control with effective formation of the plug with the vacuum. However, high porosity will result in less-dense plugs, which may reduce the quantity of product that it is possible to dose with a single shot. | Largely independent of powder-flow characteristics; particularly suitable for free-flowing powder. There are no limits as to the number of rotations that can be performed to compensate for high-porosity powders to deliver the needed dose. |
                    
                        ****
                        
                        
                    
| Angle of Repose (flowability) | Independent of powder-flow characteristics, although filling-needle technology is best suited for free-flowing powders. Initial charge to the hopper may be a challenge and may require vibratory feeder. | Largely independent of powder-flow characteristics; particularly suitable for free-flowing powder. Initial charge to the hopper may be a challenge and may require vibratory feeder. |
                    
                        ****
                        
                        
                    
| Friction Effects | Mixing is the only source of consistent friction; therefore, VPPF does not typically encounter higher temperatures from high-friction products. | Friction effects can be higher (due to both mixing and movement of the auger) and can potentially result in slightly elevated temperatures, which may represent concerns for thermosensitive products. |
                    
                        ****
                        
                        
                    
| Hygroscopicity | Ensure that relative humidity of compressed air (or nitrogen) is controlled for hygroscopic powders. Environmental controls to manage relative humidity are critical. | No compressed air is typically in contact with the powder during the transfer of the powder. Environmental controls to manage relative humidity are critical. |
                    
                        ****
                        
                        
                    
| Electrostatic Control | Electrostatic control is critical for VPPF dosing accuracy linked to proper plug formation and release; risk will be that powder gets on the neck of the container. Can be equipped with electrostatic control at the point of fill. | Electrostatic control is less challenging for auger as the delivery is directly to the container opening. Can be equipped with electrostatic control at the point of fill. |
                    
                        ****
                        
                        
                    
| High Potency/Toxicity | Requires off-line cleaning and sterilization, which may represent a risk. Improved containment possible. | Capable of CIP/SIP. Improved containment possible. |
                    
                        ****
                        
                        
                    
| Speed | Tied to weight of fill. Higher number of fill stations will enable higher speeds for large fill-weights that require more shots per container. Machine footprint, the number of connections, and the number or rate of bulk-container connections will be rate-limiting. | Tied to weight of fill. Higher number of fill stations will enable higher speeds for large fill-weights. Machine footprint, the number of connections, and the number or rate of bulk-container connections will be rate-limiting. |
                    
                        ****
                        
                        
                    
| Weight of Fill | Large weights will require multiple "shots" during the filling. Typically, 1 cc is the largest single shot with current technology, with an approximate 0.050 cc as the effective minimum single shot. | Large weights will require a number of rotations of the auger. Auger size can be modified to support different fill weights (a single machine can accommodate several auger sizes). |
                    
                        ****
                        
                        
                    
| Weight Control | Highly accurate weight control. With very small weights of powder, off-line weight check is required (see Section 5.0) and accuracy may be more variable. | With very small weights of powder, off-line weight check is required (see Section 5.0) and accuracy may be more variable. |
                    
                        ****
                        
                        
                    
| Powder Overspray on Neck of Container | May occur if the powder is not well compressed or doesn't form a plug. Needle-dosing systems are a specialty adaptation for small-neck containers and for precision-dosing that will also prevent overspray. | Less likely to occur as the auger is within the mouth of the container. |
                
            

        

    

    

        

## 導師解析 Tutorial Commentary

        

            

#### 核心概念解析 Key Concepts

            

**關鍵洞察：屬性不決定技術，但決定成本與穩定性。**書中明確指出：粉末屬性通常不會「排除」某種技術，而是讓其中一種在特定情境下「更有優勢」。這意味著 CDMO 在技術選擇時，應同時評估產品屬性、設備可用性、充填速度需求與含毒性考量，再做最終決定。

            

**容器頸口尺寸（Neck Size）：**粉末充填中，頸口大小比液體充填更關鍵。頸口太小會限制每次充填量（VPPF）或充填速度（兩者皆然）。安瓿瓶（ampoule）因頸口極窄，可能對兩種技術都有實際限制。

        

        

            

#### 重點提示 Key Notes

            

**靜電荷 vs 吸濕性 — 兩個最常見的充填失敗根本原因：**

            

                
- **VPPF 靜電風險：**靜電會干擾真空塞（plug）的形成與釋放，導致劑量不準，且粉末可能沾附瓶頸，影響密封。

                
- **AF 摩擦熱風險：**螺旋推進（auger）產生的摩擦力比 VPPF 高，對熱敏感（thermosensitive）產品（如凍乾粉末前的預充填）是潛在問題。

                
- **兩者共同：**高吸濕性產品都需要嚴格的相對濕度環境控制，差異在於 VPPF 還需控制壓縮空氣或氮氣的濕度。

            

        

        

            

#### 比喻說明 Analogy

            

VPPF vs AF 的技術選擇，就像在餐廳選調味料分裝方式：VPPF 像用量測杯靠真空吸附固定體積分裝（精準但對粉末壓縮性要求高），AF 像用螺旋給料機（screw feeder）以旋轉圈數控制量（靈活但會產生摩擦熱）。最好的分裝方式取決於你在分裝的是鹽（流動性好）還是玉米澱粉（易結塊）。

        

        

            

#### 公式與計算 Formula

            

```

VPPF 單次充填範圍：
  最大單次劑量 ≈ 1 cc（約 1 mL體積）
  最小有效單次劑量 ≈ 0.050 cc

AF 大劑量策略：
  多次旋轉（Multiple rotations）× 每轉充填量 = 目標劑量
  旋轉圈數可依密度變化動態調整

含毒性產品選擇優先考量：
  AF（支援CIP/SIP）> VPPF（需離線清洗，增加曝露風險）
            
```

        

        

            

#### 練習思考 Practice Questions

            

                
1. 一個新產品的粉末具高靜電荷且對溫度敏感，在不考慮其他因素的情況下，VPPF 和 AF 各有什麼風險？你會如何評估？

                
2. 高毒性（highly potent）粉末產品在 CDMO 評估充填技術時，為什麼 AF 的 CIP/SIP 能力是「決策層次第一優先」的體現？

            

        

    

18.0 Effect of Powder Transfer on Technology Selection

    

        

## 原文內容 Original Text

        

Powder transfer from the bulk source to the powder filler will influence the filler design. There are several types of bulk containers that can be used for drug product, including bags and kegs. Typically, bags or kegs are loaded and connected manually; therefore, when considering machine speed, the rate of replenishment and duration of reconnection should also be considered.

        

Split valve connections will require that the hopper receiving the product from the bag or keg be placed in the Grade A environment to maintain the connection in an aseptic state. Intrinsic sterile connection devices may permit the charge-point to be located in a lower grade. During disconnection, either connector type might have exposed product on the surfaces, so containment should be considered for highly potent or toxic products. A risk analysis should be performed to determine the microbiological and containment needs for the product.

        

Powder transfer can be accomplished by gravity or with augmented feeding, such as vibratory feeders or positive displacement with compressed air. There are practical limitations for gravity-fed powders with regard to the distance that can be traversed. With augmented feed systems the distances can be extended, but it is still best to keep the distance as short as possible. In some factories, the manufacturing process and facility layout may dictate the position and distance that the bulk powder needs to travel, which will mandate feeder augmentation.

        

Minimization of the transfer distances will also help to ensure that segregation of powders (i.e., separation of powders by particle size, possibly resulting in the separation of one molecule from another within the transfer) does not occur. The filler designs incorporate mixers, which also help to ensure homogeneity of the powders at the point of fill. Homogeneity and content uniformity are important measures that will be tested during the process validation and as part of routine batch Quality Control.

    

    

        

## 導師解析 Tutorial Commentary

        

            

#### 核心概念解析 Key Concepts

            

**粉末傳送（Powder Transfer）對設計的三個衝擊點：**

            

                
- **連接點分類等級（Grade）：**Split valve 需在 Grade A 環境連接；具內建無菌連接裝置（Intrinsic Sterile Connection Device）者可允許在較低等級完成，直接影響廠房佈局成本。

                
- **傳送距離：**距離越長，粉末偏析（segregation）風險越高，混合均一性（content uniformity）越難保證。最好的設計是「讓粉末走最短的路」。

                
- **補料速度（Replenishment Rate）：**換桶/換袋的頻率和時間會影響整線產能（throughput），在評估充填速度時必須一併計入。

            

        

        

            

#### 重點提示 Key Notes

            

**粉末偏析（Powder Segregation）是含量均一性最大隱形敵人：**當混合粉末（blend）在管道中傳送時，不同粒徑的粒子會因重力、振動或氣流而分離。粒子大的往外沉，細粉往中心聚集，最終導致每個瓶子中的活性成分比例不一致——這直接影響患者劑量，屬於 CQA 層級問題。充填機內建的攪拌器（mixer）是最後一道防線。

        

        

            

#### 比喻說明 Analogy

            

粉末偏析就像搖晃一盒麥片：大片穀物往上跑，細小碎屑沉到底部。如果你每次只從底部取用，每碗的口感（成分比例）都不一樣。粉末充填系統中的 mixer 就是用來「重新搖均」的機制，但最根本的解法是讓粉末走最短的路，減少被「晃動」的機會。

        

        

            

#### 實務應用 Practical Application

            

CDMO 在承接新粉末充填專案時，廠房佈局評估應包含：① 粉末來源桶（keg/bag）的放置位置與充填機料斗（hopper）的垂直距離，② 連接裝置類型（split valve 或無菌連接器）對潔淨室等級的需求，③ 批量大小對補料頻率的影響（補料越頻繁 = 停機風險越高 = 棄料越多）。這三點直接影響項目報價和風險矩陣。

        

    

19.0 Discard Strategies for Aseptic Filling of Powders — Overview

    

        

## 原文內容 Original Text

        

The selection of a filling technology and its specific system design can influence the discard strategies that are employed for such line events as startup, priming, line stoppages, interventions, and end of the aseptic fill-unit operation. Products that are very expensive or limited in availability will be impacted disproportionately by systems that have high discard requirements. Therefore, careful consideration of the system design and the integration of the filling technology with the filling enclosure or isolator is warranted.

        

VPPF and AF are selected based on the attributes of the powder to be filled, the required fill weight, and the opening of the container. Both VPPF and AF will encounter some need to reject containers during the process. In many cases, the cause of rejection is the same for both technologies. The various points within the process at which rejection might occur are included in Sections 19.1–19.5.

    

    

        

## 導師解析 Tutorial Commentary

        

            

#### 核心概念解析 Key Concepts

            

**棄料策略（Discard Strategy）是 CDMO 報價的隱藏成本：**對於高價藥物（如孤兒藥、生物製劑）或原料極稀缺的產品，每瓶棄料的成本可能從數百到數萬美元不等。設計審查（Design Review）階段必須量化預估棄料率，並作為技術選擇的決策因素之一。這是「商業與彈性」層次但影響 CQA 的重要考量。

        

        

            

#### 重點提示 Key Notes

            

Section 19.0 強調：充填系統與隔離器/RABS 的整合設計，直接決定棄料量。這不是單純的設備問題，而是設施、設備、製程三者協同設計的結果。在 CMO 報價時，「棄料率」是量化風險的關鍵指標，與產品批量大小和藥物成本直接掛鉤。

        

    

19.1 Discard Strategies at Startup and Priming

    

        

## 原文內容 Original Text

        

During powder-filler setup, standardizing the dose and priming the filler are necessary actions; however, both of these actions can result in rejections. Taking the following steps during setup may help avoid rejections or minimize their number during the priming and dose-standardization steps:

        

            
- Adjust the conveyance mechanism to ensure the proper centering of the container under the dosing station

            
- Ensure that the correct distance of the dose delivery system from the container is established

            
- Adjust the agitator type (should be part of system design) and speed to ensure homogeneous delivery of the powder for powder blends

        

        

Startup rejection may also occur as a consequence of the risk that the initial product has been degraded due to exposure to conditions that would adversely impact the product. To avoid or minimize rejections, an inert gas overlay (for products that are oxygen-sensitive) should be established and any product that was exposed to air during the priming should be eliminated.

        

For VPPF, during setup, the piston depth may be set with a fixture or gauge which will expedite the process of establishing the weight within the specified range. As standardizing the dose is undertaken, the piston is adjusted to change the volume of the dosing chamber. Typically, a progressive increase in the depth of piston-movement occurs to adjust the dose. For some piston and filter designs, the potential exists for powder to be retained between the piston-filter OD and the dosing-chamber ID, which may create difficulties in reducing piston depth.

        

For AF, the dose is adjusted by changing the number of rotations of the auger. Some fillers are equipped with a 100% net-weight filling, which will minimize priming rejects due to an underfilled or inaccurate dose.

        

During process validation, careful evaluation of content uniformity (for powder blends) and fill accuracy should be performed. Once established, the process parameters that deliver these CQAs should be carefully defined in SOPs and batch records.

    

    

        

## 導師解析 Tutorial Commentary

        

            

#### 核心概念解析 Key Concepts

            

**開機棄料（Startup/Priming Rejects）的兩個根本原因：**

            

                
- **機械未穩定（dose not standardized）：**VPPF 靠調整活塞深度（piston depth）來標定劑量體積；AF 靠調整旋轉圈數。兩者都需要幾個充填循環才能達到穩定輸出。

                
- **產品品質受損（degraded product）：**開機過程中若氧氣敏感產品暴露於空氣，即使重量正確也必須棄料。惰性氣體覆蓋（nitrogen overlay）必須在充填開始前就建立。

            

        

        

            

#### 重點提示 Key Notes

            

**VPPF 活塞深度調整的機械陷阱：**如果粉末卡在活塞濾網外徑（filter OD）與充填腔內徑（dosing-chamber ID）之間，縮小活塞行程（減少劑量）可能變得困難。這是 VPPF 設備選型時需確認的設計細節——好的設計應避免此類粉末滯留空間。

            

**100% 淨重充填（Net-Weight Filling）的戰略價值：**配備 100% 淨重量測的充填機可大幅減少開機棄料，對高成本產品尤其重要。這是設備採購時值得額外投資的功能。

        

        

            

#### 練習思考 Practice Questions

            

                
1. 假設你的產品是氧氣敏感的抗生素粉末，在 SOP 中，氮氣覆蓋的建立應在哪個步驟之前完成？這在 VPPF 和 AF 的操作序列上有什麼差異嗎？

                
2. 為什麼製程驗證中含量均一性（Content Uniformity）的評估，對於粉末混合物（powder blend）比單一成分粉末更為關鍵？

            

        

    

19.2 Discard Strategies at Filling and Interventions

    

        

## 原文內容 Original Text

        

Changes in powder attributes during the run could also result in dosing inaccuracies due to changes in the dynamics of flow, for example, the powder becoming gummy or sticky due to environmental conditions, the presence of an undissipated electrostatic charge, or an increase in density due to an increase in fines, particularly at the end of bulk containers.

        

Modern filling lines are equipped with adequate environmental controls (i.e., humidity, temperature, deionization technology), making environmental and electrostatic failure modes less likely. However, care should be taken to ensure that the filling system operation does not increase the temperature of the powder (e.g., due to friction forces).

        

Electrostatic build-up may not be associated with the powder or filler itself but is often due to dry conditions and the conveyance of glassware. Electrostatics, if left undissipated, can affect dust on the container neck and closure surfaces, can affect the environment, and can affect the weigh-cell accuracy.

        

For powder-density changes on VPPF, once cavity sizes are set, an increase in density will require a reduction in dose size (which may be automatic on some models). During setup, the potential exists for powder to be retained between the piston-filter OD and the dosing chamber ID, which may create difficulties in reducing piston depth with some piston–filter designs. For AF, changes in product density may require an adjustment to the number of rotations of the auger to adjust the fill weight (may be an automatic function with some models).

        

As with liquid filling, during powder-filling operations, interruptions in the filling operation that result in stoppage on the line (e.g., gaps in component supply, interventions, breaks) or other unforeseen events (e.g., particle excursion, loss of temperature in the tunnel resulting in an equipment stoppage, jams or collisions at the capper) may result in rejections.

        

When interventions occur during powder-filling, the powder, or the powder-filler itself is not generally impacted detrimentally. If the intervention requires an open door, such as might occur within a RABS, consideration should be given to ensuring that the environment surrounding the RABS is also well-controlled to avoid any powder characteristic changes. If the product requires inert gas overlay (e.g., nitrogen), the overlay must be maintained through any intervention or stoppage, or it will require rejection of containers and filled unsealed units that have potentially been exposed to air.

        

With some systems, an automated clearance mode is available that will stop the infeed to the filler and reject all containers within the conveyor system in front of the filler. With legacy systems, the rejection may be entirely manual, and care must be taken to perform the intervention, picking up each rejected container with a sterile tool and following appropriate aseptic techniques, while taking care not to cause any spills.

        

If there are filled, fully sealed containers within the line's clearance zone, the decision to reject or keep those containers must be based on an appropriate risk assessment and documented in intervention SOPs at the site.

        

For oxygen-sensitive products, an inert gas overlay (e.g., nitrogen) may need to be established to purge air from the headspace of the container. When analyzing container headspace at the conclusion of filling, containers with too much oxygen in the headspace may need to be rejected. Any failure in the inert-gas headspace controls during the filling operation (e.g., when the filler is shut down) will result in rejections during the processing.

        

If there is powder at the neck of the container during filling (e.g., due to inaccurate fill-targeting into the container opening or uncontrolled electrostatic charge), the powder may cause a poor seal around the elastomer, which can result in an ingress of oxygen during the shelf life of the product. Powder at the necks of containers may be difficult to observe during initial visual inspection due to the crimp seal. Therefore, additional controls should be put in place for targeting delivery of the powder to the container-opening during setup, and electrostatic control should be part of the standard environmental controls. The filling process should be verified intermittently to ensure continued dust control at the neck. Headspace analysis may be used for nitrogen-flooded containers to ensure that the closure is integral, thereby demonstrating an effective seal between elastomer and neck without interference due to the presence of powder.

    

    

        

## 導師解析 Tutorial Commentary

        

            

#### 核心概念解析 Key Concepts

            

**充填中棄料的三大觸發因素：**

            

                
- **粉末特性動態變化：**批量末端細粉增加 → 密度升高 → VPPF/AF 劑量偏重。現代設備可自動補償，但老舊設備需人工介入。

                
- **靜電荷（Electrostatic Build-up）：**靜電不僅影響劑量準確性，還會讓粉末吸附在瓶頸和塞子上，破壞彈性體密封，導致長期儲存中氧氣滲入——這是一個隱藏的 CQA 失效風險，在目視檢查時可能完全看不出來。

                
- **線體停機（Line Stoppages）：**氮氣覆蓋中斷 = 所有暴露容器必須棄料。這是氧氣敏感產品在干預（intervention）中最高優先的管控點。

            

        

        

            

#### 重點提示 Key Notes

            

**瓶頸粉末（Powder at Neck）是無菌保證的隱性威脅：**粉末卡在瓶頸 → 彈性體（stopper/elastomer）無法完全貼合玻璃 → 氧氣長期滲入 → 藥品降解。這在加蓋後目視幾乎不可見。Headspace 氧氣分析是唯一能驗證密封完整性的方法。決策層次：無菌保證 #1——此情況即屬此類。

            

**自動清除模式（Automated Clearance Mode）vs 人工清除：**現代設備的自動清除減少了人員在 Grade A 環境中的干預時間，直接降低無菌風險。採購設備時，自動清除功能應列為規格要求，尤其是高頻干預產品。

        

        

            

#### 練習思考 Practice Questions

            

                
1. 一批抗生素粉末充填過程中，充填機因外部原因停機 20 分鐘。你的 SOP 應如何定義：哪些容器保留、哪些棄料？需要什麼文件支持？

                
2. 若氮氣 headspace 分析顯示某些容器氧氣含量偏高，但目視檢查看不出粉末在瓶頸，你會如何溯源問題根因（root cause）？

            

        

    

19.3 Discard Strategies at Dose Control

    

        

## 原文內容 Original Text

        

For net-weight fillers, rejection should be automatic and demonstrated during the qualification of the equipment to determine that the correct containers have been rejected. As with liquid filling, if the weight-check function is statistical (intermittent), the segregation and rejection will need to occur beginning at the last confirmed correct-weight check (see Section 5.0).

        

One of the key reasons that dosing becomes inaccurate for VPPF is blinding of the screen, which affects both powder compression and powder expulsion. Another, less-frequent reason could be screen breakage. (Screens should be changed as part of routine preventive maintenance and inspected regularly after cleaning to verify screen integrity.) Either condition can result in rejections during the run due to inaccurate dosing.

        

AF primarily encounters dosing inaccuracies when the conditions of the powder change during the run. Both the VPPF and AF are available with net-weight models that enable automatic adjustments to keep the weights within preset weight limits throughout the run. For some AF fillers, the weight adjustment may be capable of occurring dynamically for each dose, whereas the VPPF will react to a trend in weights over several cycles.

    

    

        

## 導師解析 Tutorial Commentary

        

            

#### 核心概念解析 Key Concepts

            

**VPPF 劑量失準的特有風險：濾網堵塞（Screen Blinding）：**VPPF 利用真空吸附粉末透過濾網形成充填塞（plug）。若濾網被細粉堵塞（blinding），粉末無法被正確壓縮或推出，導致劑量不準。濾網是 VPPF 的關鍵耗材，必須納入預防性維護計畫（PM）並在每次清洗後確認完整性。

            

**AF 的動態劑量調整（Dynamic Weight Adjustment）：**先進 AF 可在每一劑後立即根據淨重量測結果調整下一劑的旋轉圈數，反應速度遠快於 VPPF（VPPF 需要幾個循環的趨勢才能觸發調整）。

        

        

            

#### 重點提示 Key Notes

            

**統計 IPC vs 100% 淨重量測——棄料範圍的關鍵差異：**統計抽樣（intermittent）發現超重/欠重時，必須從「上一次確認合格的量測點」開始回溯棄料，可能導致大量合格品被一起棄料。100% 淨重量測（net-weight）則可精確識別並自動棄料單個問題容器，大幅降低損失。對高價粉末產品，100% 淨重量測的設備溢價往往在第一批就能回收。

        

        

            

#### 練習思考 Practice Questions

            

                
1. VPPF 的濾網應在何時更換？哪些清洗後的檢查步驟可以預防充填中的突發棄料？

                
2. 若你的充填機採用統計 IPC（每 10 個量一次），在充填 500 個容器後發現第 480 個重量不合格，你必須棄料哪個範圍？

            

        

    

19.4 Discard Strategies at Conclusion of Fill

    

        

## 原文內容 Original Text

        

At the end of the filling process, as powder levels start to drop in the hopper, dosing may become inconsistent. Proper hopper design is essential to minimize residual powder waste and to maintain filling accuracy for as long as possible. It is important during development of the filling process parameters that the level at which this occurs is noted and defined (measurable). Shutting down when this level is reached must become a normal part of the operation and must be defined in the site SOPs or batch record.

        

For net-weight fillers, there may be an option to continue to fill until the rejection level becomes too high to be practicable and compliant. The company must establish procedures to handle the end of fill consistently to ensure that only good-quality containers are produced (see Section 13.0).

        

Table 19.4-1 summarizes common discard events and the specific risks represented by primary powder-filling technologies.

        
        

            
                Table 19.4-1 Common Discard Events and Their Impact Based on Powder-Filling Technology
                
                    
                        
                        
                        
                    
| Considerations | Vacuum-Pressure Powder Filler (VPPF) | Auger Powder Filler (AF) |
| --- | --- | --- |
                
                
                    
                        ****
                        
                        
                    
| Priming, loss of dose control | Dependent on powder attributes and airflow management (including filter selection) | Dependent on powder attributes and flow characteristics |
                    
                        ****
                        
                        
                    
| End-of-process dose accuracy when powder levels are low | Dependent on hopper and agitator design; some risk for end of aseptic-fill-unit operation when powder levels are low unless controlled by net-weight surveillance | Dependent on hopper and agitator design; some risk for end of aseptic-fill-unit operation when powder levels are low and back-pressure on the auger is reduced unless controlled by net-weight surveillance |
                    
                        ****
                        
                        
                    
| Powder discard at end of process | Dependent on hopper and agitator design; very efficient (i.e., little waste) for low-weight fills or low fill speeds | Dependent on hopper and agitator design; the requirement for back-pressure on the auger may result in more losses |
                    
                        ****
                        
                        
                    
| Risk to dose control based on dose size | Broad range of fill-weight capability; highly effective for low fill weights | Broad range of fill-weight capability |
                    
                        ****
                        
                        
                    
| Filler interventions | Broken or blocked screens can present a risk, although proper selection to pair the filter with the powder attributes will mitigate risk | No special concerns for interventions |
                
            

        

    

    

        

## 導師解析 Tutorial Commentary

        

            

#### 核心概念解析 Key Concepts

            

**料斗底部效應（Hopper End-of-Fill Effect）：**當料斗（hopper）內粉末量減少，粉末床（powder bed）的重量壓力降低，對 VPPF 的真空充填和對 AF 的螺旋背壓（back-pressure）都會產生影響，導致劑量開始不穩定。「定義可量測的停機液位」是製程開發的必要輸出，必須記錄在批次記錄（batch record）中。

            

**VPPF vs AF 在填畢廢料上的差異：**VPPF 對小劑量充填廢料極低（料斗可被清空至很小量）；AF 因螺旋需要一定背壓才能精確輸送，料斗需保留更多殘餘量，因此 AF 在填畢廢棄的粉末量相對較多。

        

        

            

#### 重點提示 Key Notes

            

**Table 19.4-1 的關鍵啟示：**VPPF 的主要風險在「濾網」（blinding/breakage），而 AF 在填畢階段因背壓不足可能導致更多粉末殘留浪費。對高成本藥物，應在設備評估時計算每批次的預估粉末廢棄量，並納入 TCO（總擁有成本）分析。

        

        

            

#### 實務應用 Practical Application

            

製程驗證（Process Validation）中，填畢停機液位（shutdown level）的確認方法：在三批驗證批次中，分別記錄料斗達到某液位後劑量變異係數（CV%）的變化趨勢，找出 CV% 開始超出規格（specification）的臨界點，將此液位定義為強制停機液位，並寫入 SOP。這是讓批次記錄「能說話」的關鍵資料。

        

    

19.5 Other Rejection Considerations

    

        

## 原文內容 Original Text

        

Rejections along the filling line may occur for other reasons that may not be directly related to the operation of the filler, for example:

        

            
- Raised stopper or plunger placement detection

            
- Missing stopper or plunger

            
- Fallen components

            
- Bad crimp seals or closures (at capper)

        

        

These sensors and rejection stations should be integrated into the filling conveyance system and tested during qualification to ensure that detection and rejection timing is appropriately integrated.

    

    

        

## 導師解析 Tutorial Commentary

        

            

#### 核心概念解析 Key Concepts

            

**線體整合性棄料（Line-Integrated Rejections）：**這類棄料與充填機本身無關，而是由下游工站的感測器觸發——塞子位置異常、壓蓋不良等。這些感測器必須在設備確效（Qualification）時驗證：在已知缺陷容器通過時，系統必須 100% 偵測並棄料到正確位置（timing 正確）。

        

        

            

#### 重點提示 Key Notes

            

**「Bad Crimp Seals」是密封完整性的最後防線：**壓蓋不良（bad crimp）的瓶子，即使粉末充填完全正確，也代表容器-密封系統（Container-Closure System, CCS）已失效。這是無菌保證的最終關鍵控制點。壓蓋後的 100% 目視檢查或線上視覺系統，加上定期破壞性試驗（crimp pull-off force），是標準的確效策略。

        

        

            

#### 練習思考 Practice Questions

            

                
1. 在充填線確效（IQ/OQ/PQ）中，如何驗證「壓蓋不良偵測感測器」的拒料時序（rejection timing）是正確的？什麼是可接受的偵測率？

                
2. 一個瓶子被感測器偵測為「塞子浮起（raised stopper）」，但目視看起來正常，你應該如何處理？這個決定應記錄在哪裡？

            

        

    

    

### 本節重點回顧 Section Summary (Sec 17–19)

    

        
- **Sec 17.0–17.1：**粉末物理特性（密度、流動性、靜電荷、吸濕性等七要素）共同決定充填技術選擇的最佳妥協點；Table 17.1-1 是 VPPF vs AF 全方位比較的系統化工具。實驗測試（powder testing with actual equipment）是理論分析之外不可或缺的驗證步驟。

        
- **Sec 18.0：**粉末批量傳送（bag/keg transfer）的連接方式影響潔淨室等級需求；傳送距離越長、偏析風險越高；含量均一性（content uniformity）是製程驗證與批次放行 QC 的核心量測指標。

        
- **Sec 19.1–19.5：**粉末充填的棄料觸發點橫跨五個階段：開機/充填中/劑量管控/填畢/其他線體事件。100% 淨重量測與自動清除模式是現代設備降低棄料的關鍵功能；靜電管控和氮氣頭空保護是氧氣敏感產品的雙重防線；決策層次貫穿全節——無菌保證永遠優先。

    

⇧

## Topic 21: Case Studies 案例研究 (p225-p267)

# Section 21A: Case Studies in Aseptic Filling System Design (Part 1)

    

無菌充填系統設計案例研究（第一部分）

    

PDA Manufacturing Technology Guide No. 1 | doc p225 - p246

    

### 本章學習目標

    

        
- 理解如何將產品特性（黏度、氧敏感性、剪切敏感性、起泡性）直接轉化為充填設備設計要求

        
- 掌握小容量針劑（Case 1：預充填注射器）與大容量針劑（Case 2：瓶裝液體）的設計差異與決策邏輯

        
- 學習如何透過結構化的需求矩陣，系統性比較 PP、RPP、TP、DP 四種充填技術的適用性

        
- 了解生產規模（批次大小、活動策略、IPC 選擇）如何影響充填線設計與年產量估算

    

21.1 Case 1: Small Volume Parenteral — Liquid in a Syringe (預充填注射器案例)

    

        

## 原文內容 Original Text

        

Specifications for Case 1 are detailed below:

        

            
- Product: monoclonal antibody

            
- Filling Volume: 0.5 mL

            
- Container / Closure System: prefilled syringe (PFS); 1 mL long

            
- Dosing System: to be determined

        

        

### 21.1.1 Case 1: Product Characteristics

        

Table 21.1.1-1 provides details on product characteristic considerations. Refer to Section 1.0 and Section 4.0 for additional information.

        

        
            
                
                
                
            
| Attribute | Determination | Design Implication |
| --- | --- | --- |
            
                
            
| Pharmaceutical Characteristics |
            
                
                
                
            
| Highly Potent | No | None; although containment for toxicity is not required, a decision has been made to fill within an isolator to provide enhanced sterility assurance (SA) |
            
                
                
                
            
| Toxic | No |  |
            
                
                
                
            
| OEL / OEB level | No classification |  |
            
                
            
| Product Biological or Physicochemical Requirements |
            
                
                
                
            
| Temperature-sensitive | No | Filled under ambient conditions |
            
                
                
                
            
| Oxygen-sensitive | Yes | Inert gas introduction must be considered; bubble/air-gap size between plunger and liquid is not critical, therefore vacuum stoppering is not necessary |
            
                
                
                
            
| Light-sensitive | Yes | Isolator lighting has to have compatible spectrum |
            
                
                
                
            
| Metal-sensitive | No | None; no restrictions on product-contact materials of construction |
            
                
                
                
            
| Silicone-sensitive | No | None; no restrictions on polymers and tubing |
            
                
            
| Chemical-physical Properties |
            
                
                
                
            
| Viscosity | Water-like, 1–2 mPa-s | None; no restriction on filling technology based on viscosity |
            
                
                
                
            
| Surface Tension | Less than Water | No significant concern for dripping; cylindrical needles acceptable |
            
                
                
                
            
| Solution or Suspension | Solution | No active agitation or recirculation required |
            
                
                
                
            
| Flammable or Explosive | No | None; NEMA/ATEX cabinetry not required |
            
                
                
                
            
| Shear-sensitive | Yes | To be verified for future products; different dosing systems could be utilized if future products are not shear-sensitive |
            
                
                
                
            
| Foaming Tendency | Yes | Filling curve (e.g., start, stop, acceleration) to be carefully designed; level of filling start, filling end, and careful needle movement must be incorporated to prevent foam generation |
        

        

    

    

        

## 導師解析 Tutorial Commentary

        

            

#### 核心概念解析 — 產品特性驅動設計決策

            

Case 1 的關鍵設計驅動因素有三個：

            

                
- **氧敏感性 (Oxygen-sensitive)：**必須在充填關閉站導入惰性氣體（氮氣），以維護產品品質。這直接影響充填機的站點設計。

                
- **剪切敏感性 (Shear-sensitive)：**單株抗體 (monoclonal antibody, mAb) 蛋白質結構脆弱，高剪切力會造成蛋白質變性，直接排除旋轉活塞泵 (RPP) 的選用。

                
- **起泡性 (Foaming Tendency)：**要求充填曲線（加速、停止控制）精心設計，並採用潛針充填 (diving needle)，防止泡沫污染。

            

            

**注意：**雖然本產品非高毒性，但廠商主動選擇隔離器 (isolator)，理由是「提升無菌保證」——這正是決策層級 #1 無菌保證 (Sterility Assurance) 優先於商業考量的示範。

        

        

            

#### 比喻說明

            

想像你在煮一道很容易起泡的湯（比如豆漿）。你不能大火猛衝——必須用小火慢加熱，鍋緣輕輕倒入，避免攪拌過度。充填單株抗體也是同樣的道理：充填針的下降速度、充填起始位置、停止曲線都必須像廚師一樣精細控制，才能避免起泡和蛋白質損傷。

        

        

            

#### 練習思考 Practice Questions

            

                
1. 為什麼「非高毒性」的產品，廠商仍選擇隔離器而非 RABS？這個決策反映了哪個設計優先級？

                
2. 如果未來要在同一條線上充填不耐剪切的不同 mAb，旋轉活塞泵是否可行？請說明理由。

            

        

    

21.1.2 Case 1: Container–Closure Characteristics (容器密封系統特性)

    

        

## 原文內容 Original Text

        

Table 21.1.2-1 provides details on container-closure characteristic considerations. Refer to Section 1.0, Section 6.0 and Section 7.0 for additional information.

        

        
            
                
                
                
            
| Attribute | Determination | Design Implication |
| --- | --- | --- |
            
                
            
| Pharmaceutical Primary–Packaging Characteristics |
            
                
                
                
            
| Syringe (type, dimensions) | 1 mL long RNS, small round flange, Supplier Name, Drawing #123 | Details inform equipment designers of the needed filling height and filling controls for the specific syringe design |
            
                
                
                
            
| Stopper (type, dimension, weight) | Plunger 1 mL long, standard silicone, Supplier Name, Drawing #456 | Details inform equipment designers of the requirement for the sorting-system bowl and tracks |
            
                
                
                
            
| Tub (type, drawing, dimension) | Tub Height 97 mm, Supplier Name, Drawing #789 | Details inform equipment designers of the details of the conveyance system |
            
                
                
                
            
| Nest (type, drawing, dimension) | 160, 1 mL long, lengthwise, Supplier Name, Drawing #101 | Details inform equipment designers of the number of fill lanes, any X/Y movement needed for the fill heads and the nest-handling |
            
                
                
                
            
| Tub Wrapping Details | Polypropylene Bag, Tyvek Lid, Tyvek Liner, Supplier Name, Spec. Sheet: 567 | Details of number of bags, bag folding, material types, and method of affixing lid dictate details of removal and disposal, including needed robotics and location of removal |
            
                
                
                
            
| Assembly Drawing | Supplier Name Drawing #112 | Details inform equipment supplier of assembled dimensional requirements; e.g., whether position of the plunger is critical, whether an air bubble is permissible |
            
                
                
                
            
| Components (stacked dimensional tolerances) | Supplier Name Drawing #134 | Details inform equipment supplier of assembled dimensional requirements and the needed tolerance flexibility |
            
                
                
                
            
| Inherent-Component CCI | To be confirmed by Development Report 12345 | Ensures a container system can provide the appropriate level of tightness for the intended application |
            
                
                
                
            
| Plunger Insertion Depth and Critical Bubble-size | Bubble/air-gap size between plunger and liquid is not critical | Shipping studies must support sterility at maximum bubble/air-gap size |
            
                
                
                
            
| Headspace Maintenance for Inert-gas Overlay | Yes | Need to consider if 100% of containers must be analyzed on-line for headspace |
            
                
                
                
            
| Cold-storage Performance | Yes, product stored cold; not temperature-sensitive during filling | Ambient filling is acceptable; cold storage required at desired storage and shipping temperatures |
        

        

    

    

        

## 導師解析 Tutorial Commentary

        

            

#### 核心概念 — 巢式預充填系統的設計細節

            

Case 1 採用巢式 (nested) 預充填注射器，每個設計細節都牽動充填機的特定子系統：

            

                
- **Nest 規格（160 支 / 盤）：**直接決定充填頭的排列數量（fill lanes）及 X/Y 方向的運動需求。

                
- **Tub 高度（97 mm）：**影響蓋膜 (lid) 與內襯 (liner) 的移除站設計，甚至決定是否需要機器人手臂。

                
- **容器密封完整性 (CCI)：**必須在開發階段即確認，確保整個運輸鏈（包括冷藏）維持無菌密封。

            

            

頂空維護 (Headspace Maintenance) 需求直接引發一個設計問題：是否需要 100% 線上頂空檢測？這將影響充填速率與設備選型。

        

        

            

#### 重點提示 — 供應商圖號的重要性

            

表格中大量引用「Supplier Name, Drawing #XXX」，這不是形式主義。每個圖號代表精確的尺寸公差，直接影響分料碗 (sorting bowl)、軌道、插柱站的設計。CDMO 在早期就要鎖定這些資料——後期更改供應商或規格，可能導致整個充填機需要重新改裝。

        

        

            

#### 練習思考 Practice Questions

            

                
1. 如果廠商決定改用 200 支 / 盤的 nest，會對充填機設計產生哪些影響？

                
2. 「氣泡大小不重要」的判斷依據是什麼？什麼情況下氣泡大小會變成關鍵設計參數？

            

        

    

21.1.3 Case 1: Specific Filling Requirements — Headspace & Deaeration (充填頭空間與除氣要求)

    

        

## 原文內容 Original Text

        

Table 21.1.3-1 provides guidance on specific filling requirement considerations. Refer to Section 2.0 and Section 7.0 for additional information.

        

        
            
                
                
                
            
| Consideration | Determination | Design Implication |
| --- | --- | --- |
            
                
                
                
            
| What inert gas will be used? | Nitrogen | Utility to be available; location to be determined based on subsequent answers |
            
                
            
| When will gas be applied? |
            
                
                
                
            
| Pre-gassing | No | Inert gas to be located at plunger-insertion station |
            
                
                
            
| Gassing during filling | No |
            
                
                
            
| Post-fill gassing | No |
            
                
                
            
| Gassing during closing | Yes |
            
                
            
| Will vacuum be applied? |
            
                
                
                
            
| For removal of bubble at tip at initiation of filling | No | Size of bubble at tip not critical for this application |
            
                
                
                
            
| For deaeration during filling | No | Although product has foaming tendency, this can be adequately controlled through fill curve adjustments |
            
                
                
                
            
| For removal of air in headspace before inert-gas purge | Yes | Assists in air removal at the point of adding the inert gas |
            
                
            
| How will Stopper-Setting be performed? |
            
                
                
                
            
| Vent tube for stopper-setting (with gassing)? | Yes | Gas bubble/air-gap size not critical, and plunger material is robust (no tendency to wrinkle) |
            
                
                
                
            
| Vacuum stopper-setting with short vent tube? | No | No wrinkling tendency; vacuum short-vent tube not required (Note: future use of plastic syringes with silicone-free stopper may make this important) |
            
                
                
                
            
| Vacuum stopper-setting with long vent tube? | No | Stopper position not so deep; not a large volume of gas to be removed |
            
                
                
                
            
| Vacuum bell? | No | Product is low viscosity, so a vacuum bell is not called for |
        

        

    

    

        

## 導師解析 Tutorial Commentary

        

            

#### 核心概念 — 氮氣充入時機的設計邏輯

            

惰性氣體（氮氣）的施加時機是一個「越晚越好」的設計原則：

            

                
- **在關閉站施加（gassing during closing）：**這是本案例的選擇。氮氣在插柱瞬間充入頂空，排除最後一段空氣，效果最直接。

                
- **充填前或充填中施加：**適用於對氧極度敏感的產品（如某些脂質體），但會增加設備複雜度及氮氣消耗。

            

            

「充填前先抽真空排氣，再充入氮氣」的組合設計（本案即如此），是業界針對氧敏感注射器最常見的解決方案。

        

        

            

#### 重點提示 — 未來彈性的前瞻設計

            

文中特別注記：「未來若改用矽膠游離塞塞 (silicone-free stopper) 的塑膠注射器，真空短通氣管可能變得重要。」這是 Guide 全書一貫的精神——設計當下的需求，同時為未來留下升級空間，避免日後因設備限制喪失產品多樣性。

        

        

            

#### 練習思考 Practice Questions

            

                
1. 如果同一條線未來要充填一個對氧「極度」敏感（<0.1% O₂）的產品，目前「gassing during closing only」的設計是否足夠？需要增加哪些站點？

            

        

    

21.1.4 Case 1: Multi-container / Multi-volume / Multi-product Flexibility (多容器／多體積／多產品彈性)

    

        

## 原文內容 Original Text

        

Table 21.1.4-1 provides guidance regarding multi-container/multi-volume/multi-product filling requirements. Refer to Section 1.0, Section 2.0 and Section 5.0 for additional information.

        

        
            
                
                
                
            
| Attribute | Determination | Design Implication |
| --- | --- | --- |
            
                
            
| Additional Containers, Closures, and Sizes to be Filled on the Same Line |
            
                
                
                
            
| 1–3 mL Syringe | 3 mL Luer Lock, round flange, Drawing #123 | Tub and nest configuration should also be known to fully understand change-part needs (e.g., conveyance, tub height, number of filling lanes needed) |
            
                
                
                
            
| 1 mL-long Plunger, coated | Drawing #456 | No impact to current design if coating is compatible with closure sorting-system and if number of ribs and dimensions are consistent |
            
                
                
                
            
| 1–3 mL Plunger, coated | Drawing #789 | Evaluation of dimensional differences in parts on sorting-system change parts and insertion station required |
            
                
            
| Additional Fill Volume / Product Requirements |
            
                
                
                
            
| 1 mL-long syringe, 0.2 mL fill | mAb | Fill volumes to be considered for selected filling technology; product attributes should be assessed to determine if additional controls are required (e.g., viscosity, foam, shear-force-sensitivity, oxygen-sensitivity, light-sensitivity, metal-sensitivity) |
            
                
                
            
| 1 mL-long syringe, 1 mL fill | Peptide |
            
                
                
            
| 1–3 mL, 1 mL fill | Product uncertain |
            
                
                
            
| 1–3 mL, 3 mL fill | NaCl |
            
                
            
| Required Level of Flexibility (Base Case: 1 mL-Long Nested Glass Syringes) |
            
                
                
                
            
| Container Flexibility | Nested, precapped cartridges possible in future | When using only nested, glassware washer and depyrogenation tunnels are not needed. Sensor filling may be required for cartridges (see Section 5.0). Adding cartridges could result in need for sensor-filling or application of vacuum |
            
                
                
                
            
| Container Material Flexibility | Plastic syringes possible in future | Filling line should be provided with deionization capabilities for reducing static charge. Differences in tub height might influence lid and lid-liner removal station. Vacuum might be needed for setting the plunger in plastic syringes |
            
                
                
                
            
| Alternative Sizes | 2.25 mL and 5 mL syringes in future | Ensure format parts consider the range of sizes to be filled and whether format parts will be sourced with the initial purchase or only when needed |
            
                
                
                
            
| Filling Technology Flexibility | Identify need based on intended range of activities | With some systems, it may be possible to add a different filling technology on the same machine-base (e.g., RPP with PP as alternate). Design can be more complex than a single system; knowledge that this will be a future requirement is critical to initial filling line and isolator/RABS design |
        

        

    

    

        

## 導師解析 Tutorial Commentary

        

            

#### 核心概念 — CDMO 平台設計的彈性思維

            

對 CDMO 而言，單一產品設計的充填線幾乎沒有商業意義。Case 1 展示了「多產品平台設計」的系統性思考：

            

                
- **容器彈性：**從玻璃注射器到塑膠注射器，再到卡匣式容器——每一個變化都可能要求新的去靜電裝置、真空插柱能力或感測充填 (sensor filling)。

                
- **充填體積彈性：**0.2 mL（底端能力）到 3 mL，跨越 15 倍的體積範圍，不是每種泵都能優雅應對。

                
- **充填技術彈性：**同一機台底座 (machine base) 能否容納不同泵型（如 RPP + PP 並存），必須在初始設計時就決定——事後追加幾乎等於重建。

            

        

        

            

#### 比喻說明

            

這就像餐廳設計廚房：你現在只做義大利麵，但你已知三年後要加入壽司和烤肉。如果從一開始就預留了煤氣管線位置、排風管道、冷藏分區，未來擴展只需要安裝設備；若沒有預留，則需要打牆重裝——成本是原來的十倍。CDMO 的充填線設計也是如此。

        

        

            

#### 練習思考 Practice Questions

            

                
1. 若未來要在這條線上充填 0.2 mL 的 mAb，哪種充填技術最適合？為什麼 DP（滾動膜片泵）可能被排除？

                
2. 從「巢式玻璃注射器」改為「塑膠注射器」時，設計上需要增加哪兩項主要能力？

            

        

    

21.1.5 Case 1: Anticipated Batch Sizes and Operating Practices (批次規模與生產操作規劃)

    

        

## 原文內容 Original Text

        

Table 21.1.5-1 outlines typical batch parameters to consider. Refer to Section 1.0 and Section 5.0 for additional information.

        

        
            
                
                
                
            
| Attribute | Determination | Design Implication |
| --- | --- | --- |
            
                
            
| Batch Sizes |
            
                
                
                
            
| 100-liter Batch Size | 500,000 syringes at 0.2 mL fill volume; 100,000 syringes at 1.0 mL fill; 33,300 syringes at 3.0 mL fill | 50,000 syringes per lane maximum each batch if using a 10-lane filler (number of cycles needed to assess potential wear-part effects) |
            
                
                
                
            
| 500-liter Batch Size | 2.5 MM syringes at 0.2 mL fill; 500,000 syringes at 1.0 mL fill; 166,700 syringes at 3.0 mL fill | 250,000 syringes per lane maximum each batch if using a 10-lane filler. Filler will need to be capable of long, stable run times; if using PP or DP, tubing/diaphragm longevity may be an issue |
            
                
            
| Campaign Criteria |
            
                
                
                
            
| Campaign Strategy | Yes, 5 batch maximum per campaign | Consider maximum number of batches per week; consider system longevity and whether same primary packaging will be used for all 5 batches |
            
                
                
                
            
| Length of Campaign | 10 days | At line speed and batch size, this represents 5 batches with flexibility for normal downtime and change of fluid path between batches |
            
                
                
                
            
| Filling-path Management | Replace filling-path with each batch | Filling-path must be fully disposable or be CIP/SIP-capable |
            
                
                
                
            
| Container–Closure Management | Required to sterilize indirect product-contact parts before each campaign | Product utilizes the same container–closure and can be filled in the same campaign; between batches, no changeover required |
            
                
                
                
            
| Environmental Monitoring (EM) | To be performed on each batch within the campaign | Adequate EM materials must be located inside the filling line at the start of the campaign or be able to be transferred within the line between batches (e.g., RTP canister) |
            
                
                
                
            
| Interventions | APS must be designed to include representative number and type of interventions during the campaign | Filling machine must be designed to limit interventions; any intervention must utilize good aseptic technique |
            
                
                
                
            
| Holding Times | Length of campaign must accommodate standard disruptions | Consideration should be given to bulk hold times to ensure they support the campaign strategy |
            
                
                
                
            
| Batch Failure Mode | Recovery time after loss of batch to be kept to minimum | Filling system should be designed to minimize loss upon line repreparation and provide redundancy for backup product supply |
            
                
                
                
            
| APS Strategy for Campaigns | Must comply with all guidelines (EU GMP Annex 1, FDA Aseptic Processing) | Machine build must comply with the desired campaign strategy |
            
                
            
| Operating Criteria |
            
                
                
                
            
| 100% IPC for Dose Weight | No | In nested fillers, 100% IPC drastically reduces the fill rate (100s per hour rather than 100s per minute for non-100% IPC fills). A suitable frequency must be determined for statistical IPC. For expensive products, 100% IPC may be more valuable at conserving product than the gains from higher-speed filling |
            
                
                
                
            
| Staffing Level | 24/7 | Verify whether maximum processing time per batch will be accommodated in a single day and number of batches per week possible with changeover |
            
                
                
                
            
| Shutdown Allowances | Two planned two-week shutdowns: Winter and Summer | Verify whether selected technology maintenance and recalibration can be accommodated in planned shutdowns. Consider duration for technology transfer, APS, etc. |
            
                
                
                
            
| Changeover Time | 32 hours between campaigns; 4 hours between batches within a campaign | Use these values to determine annualized throughput on the line. Ensure changeover time accounts for emptying bulk, clearing line, closing batch documentation, addressing changeover of fluid pathway, filter-path integrity-testing, closeout of EM samples |
            
                
                
                
            
| % Yield Expected | 98% Yield; 2% Scrap | 2–4% scrap is typical, inclusive of all rejection causes (filter flush, filler priming, end of aseptic-fill unit operation, intervention clearance) |
            
                
                
                
            
| % Line Efficiency | 85% Desired | 75% minimum target; more than 80% is possible but each additional percentage-point requires significant effort. Often less about equipment design and more about operator expertise on setup |
            
                
                
                
            
| % Facility Efficiency | 70–80% | Amount includes needed maintenance, recalibration, shutdowns for facility maintenance, and APS |
        

        

    

    

        

## 導師解析 Tutorial Commentary

        

            

#### 公式與計算 — 年產量估算框架

            

```

年可用工時 = 365 天 × 24 h × 設備效率 (70-80%)
           ≈ 365 × 24 × 0.75 = 6,570 小時

每批充填時間 = 批次充填數量 ÷ 充填速率
活動間換線 = 32 小時
批次間換線 = 4 小時

以 1 mL fill, 10-lane filler 為例：
100 L 批次 = 100,000 支注射器
若充填速率 = 400 支/min → 約 4.2 小時/批

5 批活動 = 5 × 4.2h 充填
           + 4h × 4 批次間換線
           + 32h 活動換線
           ≈ 85 小時 / 活動
            
```

            

年產量估算需整合以上所有參數，任何單項假設（如良率、線效率、換線時間）的變動都會顯著影響年批次數。

        

        

            

#### 重點提示 — 100% IPC vs. 統計 IPC 的取捨

            

Guide 明確指出：巢式充填機若要做 100% IPC（每支都稱重），充填速率會從「分鐘計百支」掉到「小時計百支」——差距達 100 倍以上。然而，對於高價值 mAb 產品，100% IPC 保護的產品損耗節省，可能超過速度損失的機會成本。決策本質是 **產品 CQA（藥品完整性）vs. 商業效率**，決策層級 #2 vs. #3。

        

        

            

#### 練習思考 Practice Questions

            

                
1. 若選用蠕動泵 (PP) 並執行 500 L 批次（2.5 百萬支注射器），管路磨損 (hose wear) 為何成為關鍵考量？你會如何在設計中緩解這個問題？

                
2. 「線效率 85%」主要靠什麼實現——設備自動化，還是操作員技能？Guide 的觀點是什麼？

            

        

    

21.1.6 Case 1: Comparison of Requirements to Filling System Capabilities (充填技術比較矩陣)

    

        

## 原文內容 Original Text

        

Now that some of the preliminary design requirements for the product and its intended packaging have been defined, the requirements can be compared to the filling-system capabilities and attributes as described in Section 2.0. Comparison of the filling system-capabilities to the product needs, for this example, leads to the following evaluative matrix.

        

        
            
                
                
                
                
                
            
| Product Requirements | Peristaltic Pump (PP) | Rotary Piston Pump (RPP) | Time Pressure (TP) | Diaphragm Pump (DP) |
| --- | --- | --- | --- | --- |
            
                
                
                
                
                
            
| Filling Range (0.2 mL future fill-volume) | ✓ At lower end of capability | ✓ | ✓ | ~ Marginal (lower end) |
            
                
                
                
                
                
            
| Viscosity Range (low viscosity) | ✓ | ✓ | ✓ | ✓ |
            
                
                
                
                
                
            
| Product Compatibility (shear-sensitive proteins) | ✓ | ✗ Not ideal for shear-sensitive | ✓ | ✓ |
            
                
                
                
                
                
            
| Diving Needle Capable (to reduce foaming) | ✓ | ✓ | ✓ | ✓ |
            
                
                
                
                
                
            
| Dynamic Fill Curve (to reduce foaming) | ✓ | ✓ | ~ Less flexibility due to pressure control at vessel | ✓ |
            
                
                
                
                
                
            
| Range of Fill Volumes | ✓ May require different pump heads for wide ranges | ✓ Requires different pump-sets | ✓ Generally requires different orifices | ✓ Requires different fluid pathway |
            
                
                
                
                
                
            
| Drip Control | ~ True suck-back not available; rapid pinch-valve may suffice | ✓ | ✓ | ✓ |
            
                
                
                
                
                
            
| Vacuum to Reduce Bubble at Tip (future for cartridges) | ~ Vacuum with PP technology not typical | ✓ | ~ Vacuum with TP not typical | ✓ |
            
                
                
                
                
                
            
| Dosing Accuracy / Stability Across Run | ~ Statistical IPC required | ✓ Statistical IPC recommended; very stable | ~ Statistical IPC required | ~ Statistical IPC required |
            
                
                
                
                
                
            
| Single-Use (SU) Fluid Pathway | ✓ | ~ Rare but possible due to pump expense | ✓ | ~ Possible but may be expensive |
            
                
                
                
                
                
            
| CIP/SIP Execution | ~ Rare; often SU instead | ✓ | ✓ | ✓ |
            
                
                
                
                
                
            
| Stability Over Long Batches / Cycles | ~ Hose-wear a detriment | ✓ | ~ Single-point hose-wear at pinch-point | ~ Diaphragm wear after excessive operation |
            
                
                
                
                
                
            
| Campaign Compatibility | ~ Hose wear must be considered | ✓ Filling equipment can be replaced | ~ Single-point hose-wear must be considered | ~ Diaphragm-wear must be considered |
            
                
                
                
                
                
            
| Speed of Setup / Changeover | ✓ Requires aseptic setup or CIP/SIP | ✓ Requires aseptic setup or CIP/SIP | ✓ CIP/SIP; fluid path reduced vs. RPP | ✓ CIP/SIP or single-use (fastest changeover) |
            
                
                
                
                
                
            
| Nested Syringes Compatible | ✓ | ✓ | ✓ | ✓ |
            
                
                
                
                
                
            
| Sensor-Filling Compatible (future for cartridges) | ✗ Not generally compatible with nest fillers | ✗ Not generally compatible with nest fillers | ✗ Not generally compatible with nest fillers | ✗ Not generally compatible with nest fillers |
        

        

        

            "Based on the above chart, the product characteristics make PP, TP, and DP the leading candidates as shear-sensitivity of the product may preclude RPP. PP, TP, and DP are well-matched. Decision-making may come down to whether smaller volume fills will be required in the future (ruling out DP, which is at the lower end of its capability at around 0.2 mL), or whether single-use (SU) technology (favoring PP and DP) or CIP/SIP are preferred (favoring TP and DP). If the foaming with the product is severe and SU technology is the desire, then PP will be the strongest contender, as long as the number of cycles between tubing changeout is managed."
        

        

### 21.1.7 Other Design Elements for Consideration

        

There are a number of other design decisions that will impact the layout and operation of the filling line, such as:

        

            
- Operator Interface with the line (Section 8.0)

            
- Supply of Components (Section 9.0 and Section 10.0)

            
- Product Filtration, including location of filters, required number of filter elements, integrity testing pre- and post-filling (Section 11.0)

            
- Filling Environment and Utilities (Section 14.0 and Section 15.0)

        

        

Generally, these decisions should be made as part of the filling-line specification process as they may affect costs and can influence placement of equipment; however, these are generally less of a direct impact on the selection of the filling technology itself.

    

    

        

## 導師解析 Tutorial Commentary

        

            

#### 核心概念 — 矩陣決策法的實際應用

            

本節最重要的學習是「如何用需求矩陣做充填技術決策」。Guide 的結論邏輯：

            

                
1. **RPP 首先被排除：**剪切敏感性是非談判性紅線，直接淘汰。

                
2. **DP 條件性排除：**若未來 0.2 mL 小劑量是必要需求，DP 在其能力下限，風險較高。

                
3. **PP vs. TP 的最終競爭：**
                    

                        
    - 若偏好 SU 流路 + 嚴重起泡 → PP 最優

                        
    - 若偏好 CIP/SIP + 精準充填穩定性 → TP 最優

                        
    - DP 作為 SU 替代也有競爭力，但體積彈性較弱

                    

                

            

            

這就是決策層級的實踐：無菌保證 (SA) 驅動選擇隔離器；產品 CQA（剪切敏感）驅動排除 RPP；商業彈性（SU vs. CIP/SIP）才決定 PP / TP / DP 的最終選擇。

        

        

            

#### 比喻說明

            

這就像選購廚房主刀：第一步先排除不適合食材的刀型（比如剔骨刀不適合切薄片），第二步在剩下的候選刀中，根據你的使用習慣（慣用日式還是西式、用多久換一次）做最終決定。充填泵的選擇邏輯完全相同——先用產品 CQA 砍掉不相容的選項，再用商業需求做最終比選。

        

        

            

#### 練習思考 Practice Questions

            

                
1. 本案最終選定 PP、TP、DP 為候選，若你是 CDMO 的技術總監，你會選哪一個？請從「5 批活動 × 500 L 批次」的磨損和 SU 成本角度給出理由。

                
2. 「感測充填（sensor filling）與巢式充填機不兼容」這個限制，對未來添加卡匣式容器的計畫有何影響？

            

        

    

21.2 Case 2: Large Volume Parenteral — Liquid in a Bottle (大容量瓶裝液體案例)

    

        

## 原文內容 Original Text

        

Specifications for Case 2 are detailed below:

        

            
- Product: blood-plasma protein product

            
- Filling Volume: 250 mL

            
- Container / Closure System: Bottle 250 mL

            
- Dosing System: to be determined

        

        

### 21.2.1 Case 2: Product Characteristics

        

Table 21.2.1-1 provides details on product characteristic considerations. Refer to Section 1.0, Section 3.0 and Section 4.0 for additional information.

        

        
            
                
                
                
            
| Attribute | Determination | Design Implication |
| --- | --- | --- |
            
                
            
| Pharmaceutical Characteristics |
            
                
                
                
            
| Highly Potent | No | None; no firm decision has been made to fill in an isolator (preferred) or on a conventional RABS filling line; therefore, both possibilities will be explored |
            
                
                
                
            
| Toxic | No |  |
            
                
                
                
            
| OEL / OEB Level | No classification |  |
            
                
            
| Product Biological or Physicochemical Requirements |
            
                
                
                
            
| Temperature-sensitive | No | Filled under ambient conditions |
            
                
                
                
            
| Oxygen-sensitive | Yes | Inert gas introduction must be considered at stoppering |
            
                
                
                
            
| Light-sensitive | No | None; no restrictions on lighting |
            
                
                
                
            
| Metal-sensitive | No | None; no restrictions on product-contact materials of construction |
            
                
                
                
            
| Silicone-sensitive | No | None; no restrictions on polymers and tubing |
            
                
            
| Chemical-physical Properties |
            
                
                
                
            
| Viscosity | 25 mPa-s | None; not high enough to create an issue with selected technologies |
            
                
                
                
            
| Surface Tension | Less than Water | No concern for dripping; cylindrical needles acceptable |
            
                
                
                
            
| Solution or Suspension | Solution | No active agitation or recirculation required |
            
                
                
                
            
| Flammable or Explosive | No | None; NEMA/ATEX cabinetry not required |
            
                
                
                
            
| Shear-Sensitive | Yes | To be verified for future products; different dosing systems could be utilized if future products are not shear sensitive |
            
                
                
                
            
| Foaming Tendency | Yes | Filling curve (e.g., start, stop, acceleration) to be carefully designed; level of filling start, filling end, and careful needle movement must be incorporated to prevent foam generation |
        

        

    

    

        

## 導師解析 Tutorial Commentary

        

            

#### 核心概念 — Case 1 vs. Case 2 的關鍵差異

            

Case 2 與 Case 1 有兩個決定性的結構差異：

            

                
- **容器類型：**從巢式預充填注射器 (nested PFS) 改為傳統散裝瓶 (bulk bottle)，需要玻璃瓶清洗機 + 去熱原隧道 (depyrogenation tunnel)，整個容器供應邏輯完全不同。

                
- **充填體積：**從 0.5 mL 跳到 250 mL，放大 500 倍。這不僅影響泵型選擇（需要更高流量），也影響充填曲線設計與針頭直徑。

                
- **環境選擇未定：**Case 1 明確選擇隔離器；Case 2 的隔離器 vs. RABS 還在評估。這是商業決策（成本考量）進入設計流程的時機，但前提是兩者都能滿足無菌保證。

            

            

相同點：同樣氧敏感、同樣剪切敏感、同樣有起泡傾向——血漿蛋白與 mAb 在物理化學行為上有諸多共通之處。

        

        

            

#### 重點提示 — 黏度 25 mPa-s 的設計意義

            

Case 2 的黏度（25 mPa-s）遠高於 Case 1 的水狀液體（1-2 mPa-s），但 Guide 明確指出「還不足以限制技術選擇」。通常黏度超過 100-200 mPa-s，充填技術才會受到顯著影響（如需要加熱系統或特殊泵型）。此處教導我們：黏度是設計篩選的連續變數，不是非黑即白的開關。

        

        

            

#### 練習思考 Practice Questions

            

                
1. Case 2 的充填體積是 Case 1 的 500 倍，但充填速率不一定要是 500 倍——為什麼？大容量充填在哪些方面反而讓設計「更簡單」？

                
2. 為什麼 Case 2 的充填環境（隔離器 vs. RABS）還未決定，但 Case 1 已確定使用隔離器？這個差異說明了什麼設計邏輯？

            

        

    

21.2.2–21.2.3 Case 2: Container–Closure Characteristics & Specific Filling Requirements

    

        

## 原文內容 Original Text

        

### 21.2.2 Case 2: Container–Closure Characteristics

        

Table 21.2.2-1 provides details on container-closure characteristic considerations.

        

        
            
                
                
                
            
| Attribute | Determination | Design Implication |
| --- | --- | --- |
            
                
            
| Pharmaceutical Primary Packaging Characteristics |
            
                
                
                
            
| Container (vial type, dimensions) | 250 mL, ISO 8536-1, D=68 mm, H=125 mm, weight 170 g, Supplier Name, Drawing #123 | Details inform equipment designers of the needed filling height and filling controls for the specific container design |
            
                
                
                
            
| Stopper (type, drawing, dimension) | 32 mm infusion stopper (liquid stopper), Supplier Name, Drawing #456 | Details inform equipment designers of the requirement for the sorting-system bowl and tracks |
            
                
                
                
            
| Tub / Nest / Tub Wrapping | N/A | Will use traditional bulk line that will receive glass that is washed and depyrogenated in-line |
            
                
                
                
            
| Assembly Drawing | Not Required | Not required if individual component drawings are provided |
            
                
                
                
            
| Components (stacked dimensional tolerances) | Supplier Name, Drawing #789 | Details inform equipment supplier of assembled dimensional requirements and tolerance flexibility. Will also identify tolerances associated with roundness control |
            
                
                
                
            
| Inherent-Component CCI | To be confirmed by Development Report 12345 | Ensures correct stopper and cap fit; cap cannot be rotated after crimping; crimping results in no damage to neck of container |
            
                
                
                
            
| Crimp Seal Specifications | 32 mm Flip Seal, aluminum skirt length = 13 mm, Supplier Name, Drawing #101 | For crimp seal, may also determine placement and variability permitted in crimp-seal ink or laser jet labeling to ensure fit and legibility |
            
                
                
                
            
| Intended Capping Force or Residual Seal Force | To be confirmed by Development Report 121212 | After parameter-setting, on-line evaluation through visual inspection and manual control. CCI test confirmed for each batch |
            
                
                
                
            
| Multi-puncture Closures | N/A — SU product | None |
            
                
                
                
            
| Plunger Insertion Depth / Critical Bubble-size | N/A for vials/bottles | None |
            
                
                
                
            
| Headspace Maintenance for Inert-gas Overlay | Yes | Need to consider if 100% of containers must be analyzed on-line for headspace |
            
                
                
                
            
| Cold-storage Performance | No | None |
        

        

        

### 21.2.3 Case 2: Specific Filling Requirements

        

Table 21.2.3-1 provides guidance on specific filling requirement considerations. See Section 2.0 and Section 7.0 for additional information.

        

        
            
                
                
                
            
| Consideration | Determination | Design Implication |
| --- | --- | --- |
            
                
                
                
            
| What inert gas will be used? | Nitrogen | Utility to be available; location to be determined based on subsequent answers |
            
                
            
| When will gas be applied? |
            
                
                
                
            
| Pre-gassing | No | Inert gas to be located at stopper-insertion station; specification <4% O₂ in headspace |
            
                
                
            
| Gassing During Filling | No |
            
                
                
            
| Post-fill Gassing | No |
            
                
                
            
| Gassing During Closing | Yes |
            
                
            
| Will vacuum be applied? |
            
                
                
                
            
| For removal of bubble at tip | N/A for vials/bottles | None |
            
                
                
                
            
| For deaeration during filling | No | Although product has foaming tendency, this can be adequately controlled through fill curve adjustments |
            
                
                
                
            
| For removal of air in headspace before inert-gas purge | Yes | Assists in air removal at the point of adding the inert gas |
            
                
                
                
            
| Will vacuum insertion or mechanical insertion be used for stopper-setting? | Mechanical | Mechanical stopper-insertion is sufficient for the designated stopper and container; development reports from line trials must demonstrate that there is limited risk of pop-off of the stoppers after insertion |
        

        

    

    

        

## 導師解析 Tutorial Commentary

        

            

#### 核心概念 — 散裝線 vs. 巢式線的容器供應差異

            

Case 2 使用傳統散裝玻璃瓶 (bulk glass bottle)，沒有 Tub/Nest 系統。這意味著：

            

                
- 需要在線洗瓶機 (in-line washer) 和去熱原隧道 (depyrogenation tunnel)，設備占地更大。

                
- 玻璃瓶的圓度公差 (roundness control) 是關鍵——圓度不佳的瓶子在傳送帶上容易卡住或傾倒，影響線效率。

                
- 軋蓋規格（32 mm Flip Seal，鋁裙長 13 mm）直接決定軋蓋機的壓力設定和線上視覺检查的合格標準。

            

            

頂空氧含量規格（<4% O₂）是具體的 CQA 目標，設備設計必須確保能穩定達成這個指標。

        

        

            

#### 重點提示 — 機械插塞 vs. 真空插塞的選擇

            

Case 2 選擇機械插塞 (mechanical stopper-insertion)，理由是：250 mL 大瓶的瓶口夠大（32 mm），插塞力學上不需要真空輔助。但文中要求開發報告證明插塞後不會因壓力彈起 (pop-off)——這是品質風險管理 (QRM) 在關閉操作中的具體體現。相比之下，Case 1 的注射器選用通氣管 (vent tube) 插塞，是因為注射器管徑小，真空不必要但通氣管可輔助排氣。

        

        

            

#### 比喻說明

            

想像你在裝瓶紅酒：250 mL 的大瓶子（Case 2）可以直接機械壓蓋，軟木塞靠機械力穩穩壓入；但細長的注射器（Case 1）像在幫針筒裝蓋，空間狹小，需要借助通氣管讓空氣排出，才能順利到位。容器幾何形狀決定了關閉方式。

        

        

            

#### 練習思考 Practice Questions

            

                
1. Case 2 的頂空規格是 <4% O₂。如果你是設備驗收工程師，你會設計哪些測試來證明這個規格能被穩定達成？

                
2. Case 2 不需要冷藏設計，但 Case 1 需要。這個差異如何影響廠房佈局（clean room 與倉儲銜接）的設計？

            

        

    

    

### 本節重點回顧 Section 21A Summary

    

        
- **結構化需求矩陣是核心工具：**Guide 透過「產品特性 → 容器密封 → 充填要求 → 批次規模 → 技術比較」的五步驟框架，系統性地將產品知識轉化為設備設計決策。

        
- **決策層級貫穿每個案例：**無菌保證 (SA) 驅動了 Case 1 選擇隔離器的決定（即使產品非高毒性）；產品 CQA（剪切敏感性）排除了 RPP；商業需求（SU vs. CIP/SIP）才決定最終泵型選擇。

        
- **Case 1 vs. Case 2 的設計分歧點：**容器格式（巢式 vs. 散裝）、充填體積（0.5 mL vs. 250 mL）、插塞方式（通氣管 vs. 機械），以及充填環境選擇（已確定 vs. 待評估），揭示了不同產品形態如何導向截然不同的設備設計路徑。

        
- **前瞻彈性是 CDMO 的生命線：**從多體積、多容器、多產品的彈性規劃，到填充技術的可擴展性，Guide 反覆強調：初始設計時不考慮未來的決策，日後將以數倍代價彌補。

        
- **具體操作指標的實務意義：**98% 良率、85% 線效率、70-80% 設備效率、32 小時活動換線——這些數字不是口號，是年度產量計算的基礎，也是 CDMO 對客戶交貨承諾的底層假設。

    

⇧

# Section 21B: Case Studies in Aseptic Filling System Design (Part 2)

    

第21B節：無菌充填系統設計案例研究（下篇）— Case 2 完整分析

    

PDA Manufacturing Technology Guide No. 1 | doc p247 - p267

    

### 本章學習目標

    

        
- 理解多容器／多規格／多產品充填線的需求如何轉化為設備設計規格

        
- 掌握批次大小、生產節拍（Campaign）與充填技術耐久性之間的關聯

        
- 能夠使用能力比較矩陣（Capability Comparison Matrix）評選最適合的充填技術

        
- 建立產線效率（Line Efficiency）、設施效率（Facility Efficiency）與年產量目標的計算思維

    

    21.2.4 Case 2: Requirements for Multi-container / Multi-volume / Multi-product Filling

    

        

## 原文內容 Original Text

        

Table 21.2.4-1 provides guidance regarding multi-container/multi-volume/multi-product filling requirements. Refer to Section 1.0 and Section 2.0 for additional information.

        

**Table 21.2.4-1 Case 2: Requirements for Multi-container/Multi-volume/Multi-product Filling**

        

        
            
                
                
                
            
| Attribute | Determination | Design Implication |
| --- | --- | --- |
            
                ****
                  
  
  

                
            
| Additional containers, closures, and sizes to be filled on the same line | 50 IL — Supplier Name, Drawing #123                     250 IL — Supplier Name, Drawing #456                     500 IL — Supplier Name, Drawing #789                     32 mm Lyophilization Stopper — Drawing #101 | Dimensions should be fully understood in order to design appropriate conveyance flexibility and change parts (e.g., feed screws, star wheels, walking rakes/beams). Evaluation of dimensional differences in parts on sorting-system change-parts and insertion station required. |
            
                ****
                  
  
  
  

                
            
| Additional fill volume / product requirements | 50 mL — Freeze-dried blood plasma protein                     70 mL — Blood plasma protein solution                     200 mL Fill                     250 mL Fill                     500 mL Fill | Fill volumes to be considered for selected filling technology, including whether change-parts will be required for the various volumetric differences. Product attributes for each product are identical, therefore, no additional sensitivities (e.g., shear, oxygen, metal) are to be considered. |
            
                ****
                
                
            
| Container Flexibility (Required level of flexibility for future products) | Bulk production with on-line washing and depyrogenation | Bulk-container handling will require glassware washer and tunnel, which will affect line footprint. No anticipated future need for ready to use (RTU) glassware. |
            
                ****
                
                
            
| Container Material Flexibility | All foreseen containers to be glass | No anticipated adaptations due to materials of construction foreseen. |
            
                ****
                
                  
  

            
| Alternative Sizes | Range from 50 IL to 500 IL | Ensure that format parts consider the range of sizes (diameters, height) to be filled and whether the format parts will be sourced with the initial purchase, or only when needed.All vials indicated are molded glass infusion bottles (IL). If tubing vials (R) or injection vials (H) were to be filled in the future, additional format parts would be required due to different weights, diameters/tolerances, different stopper-setting requirements, and differences in neck/shoulder for crimp sealing. Extreme variability in glass components could also affect line speeds at the extreme sizes. |
            
                ****
                
                  
  

            
| Filling Technology Flexibility | Identify need based on intended range of filling activities and product types | With some systems, it may be possible to add a different filling technology on the same machine base if required for different products and/or different packaging configurations (e.g., rotary piston pumps with peristaltic pumps as the alternate filler when needed). While design with alternate filling technologies can be more complex than a single system, the knowledge that this will be a future requirement is a critical element to the initial filling line and isolator or RABS design.With the elements of this case, the similarity of the product, containers, and closures signal that a separate technology will not be needed unless there is a plan for a future product not described here. |
        

        

    

    

        

## 導師解析 Tutorial Commentary

        

            

#### 核心概念解析 Key Concepts

            

**Change Parts（換型零件）:** 充填線上因容器規格不同而需更換的機械元件，包含送瓶螺桿（feed screws）、星輪（star wheels）、步進梁（walking beams）等。每換一種規格，就需要一套對應的 change parts。

            

**IL / R / H 玻璃瓶分類:** IL = 模製輸液瓶（Infusion bottle, molded glass），R = 管製小瓶（tubing vial），H = 管製注射瓶。三種瓶型的重量、直徑公差、頸肩尺寸均不同，若混用則需重新驗證 change parts。

            

**Line Footprint（產線佔地）:** 整條產線的物理空間需求。本案例因使用 bulk 容器（需洗瓶機 + 除熱原隧道），footprint 遠大於使用 RTU 預洗容器的產線。

        

        

            

#### 比喻說明 Analogy

            

想像一家餐廳同時服務 50mL 的濃縮湯品與 500mL 的大碗料理 — 廚房的鍋具、分裝設備、托盤尺寸全部不同。若餐廳一開始沒設計好「換鍋系統」，之後每次換菜單就要大改廚房。本案例中的 change parts 設計，就是預先為所有菜單尺寸準備好對應的廚具。

        

        

            

#### 重點提示 Key Notes

            

**決策層級提醒：**填充技術彈性是「業務靈活性」需求（第三優先），但若未在初期設計中納入，日後新增填充技術可能需要重新驗證整條充填線 — 代價遠高於預先規劃。  
因此：**在設計鎖定前，務必確認未來5年的產品管線是否需要不同的充填技術。**

        

        

            

#### 練習思考 Practice Questions

            

                
1. 若日後新增 tubing vial (R型)，哪些 change parts 需要重新設計？為什麼 molded glass 和 tubing glass 的公差差異會影響充填線速？

                
2. 本案例選擇 bulk 洗瓶而非 RTU，對設施 footprint 和驗證工作量各有何影響？

            

        

    

    21.2.5 Case 2: Anticipated Batch Sizes and Operating Practices

    

        

## 原文內容 Original Text

        

Table 21.2.5-1 outlines typical batch parameters to consider. Refer to Section 1.0, Section 3.0, and Section 4.0 for additional information.

        

**Table 21.2.5-1 Case 2: Anticipated Batch Sizes and Operating Practices**

        

        
            
                
                
                
            
| Attribute | Determination | Design Implication |
| --- | --- | --- |
            
                ****
                
                
            
| Batch Sizes |  |  |
            
                
                  

                  
  
  
  

            
| 1,000-liter Batch Size | 250 mL fill (initial): 10,000 units/batch50–500 mL (future): 20,000 to 4,000 units/batch | Note that the depyrogenation tunnel will likely be rate-limiting for the line speed for this size glassware regardless of filler design; therefore, increasing the number of fill heads may not increase the line output.1,000 to 25,000 vials per lane maximum each batch if using a 4-lane filler (the number of cycles is needed to assess potential wear-part effects on the filling pathway).For the smallest batch sizes with the larger fill volumes, the filler may have one or more station turned off. Since all stations will not be required to operate in order to match maximum tunnel line-speed, turning off one or more fill heads will conserve product and reduce line losses. Alternatively, two stations may each be used to provide half the fill volume to the container — enabling the use of smaller filling needles, which can reduce dripping. |
            
                
                  

                
            
| 4,000-liter Batch Size | 250 mL fill (initial): 40,000 units/batch50–500 mL (future): 80,000 to 8,000 units/batch | For the smallest batch sizes with the larger fill volumes, the filler may have one or more station turned off. |
            
                
                  

                
            
| 5,000-liter Batch Size | 250 mL fill (initial): 50,000 units/batch50–500 mL (future): 100,000 to 10,000 units/batch | Filling system will need to be capable of long, stable run times; if using PP or DP, tubing/diaphragm longevity may be an issue for the largest batch sizes. |
            
                ****
                
                
            
| Campaign Strategy | Yes — multiple batches campaigned to reduce changeover time | Ensure that changeover time makes sense for small batch sizes that are planned. Use of campaigns may drive the determination towards isolators for greater sterility assurance (rather than RABS). |
            
                ****
                
                
            
| Length of Campaign | 5 days | At the predicted line speeds and batch size, this represents 2–3 batches per day with 3–4 filling days. |
            
                ****
                
                
            
| Filling Path Management | Complete changeover between batches | Filling-path must be fully disposable or be CIP/SIP capable; duration of typical CIP/SIP cycle to be assessed to determine if it is compatible with required line throughput. If not, disposable will be required. |
            
                ****
                
                
            
| Container–Closure Management | Required to sterilize indirect product-contact parts before each campaign | Between batches, no changeover is required. If automated adjustable rakes are available, different container sizes may be accommodated. |
            
                ****
                
                
            
| Environmental Monitoring (EM) | To be performed on each batch of the campaign | Adequate EM materials must be located inside of the filling line at the start of the campaign or be able to be transferred within the line between batches (e.g., rapid transfer chamber or RTP canister). |
            
                ****
                
                
            
| Interventions | APS must be designed to include a representative (and possibly bracketed) number and type of interventions during the campaign | Filling machine must be designed to limit interventions and should limit any interventions that would require line clearance. Any intervention must be designed to utilize good aseptic technique. |
            
                ****
                
                
            
| Holding Times | Hold times to consider intended operation of 16/5 to permit hold-over nonoperational shift | Bulk hold times should ensure that batches are available on demand after any possible delays are incurred on changeover between batches or normal process upsets, as well as for the hold times during the normal operational cadence of 16 working hours per day. |
            
                ****
                
                
            
| Batch Failure Mode | Recovery time after loss of batch to be kept to a minimum | The filling system (and product-supply tubing/lines) should be designed both to minimize loss upon line repreparation, as well as provide redundancy for backup product supply. |
            
                ****
                
                
            
| APS Strategy for Campaigns | Must comply with all guidelines (EU GMP Annex 1, FDA Aseptic Processing) | Machine build must comply with the desired campaign strategy. |
            
                ****
                
                
            
| 100% IPC for Dose Weight | Yes | Due to cost of product, constant final dosing (see Section 5.0) is preferred. 100% IPC will also make it possible to conserve more vials from priming and end of the aseptic fill-unit operation as well. |
        

        

        

**Operating Criteria (and their influence on batch throughput)**

        

        
            
                
                
                
            
| Attribute | Determination | Design Implication |
| --- | --- | --- |
            
                ****
                
                
            
| Staffing Level | 16/5 (16 hours/day, 5 days/week) | Verify whether the number of batches produced per week, including changeover time, will meet production targets at intended bulk/filled-unit volumes. |
            
                ****
                
                
            
| Shutdown Allowances | Two planned two-week shutdowns: Winter and Summer | Verify whether the selected technology maintenance and re-calibration can be accommodated in the planned shutdowns. Also consider the likely duration for technology transfer for new products, execution of APS, etc. |
            
                ****
                
                
            
| Changeover Time | 32 hours between campaigns; 4 hours between batches within a campaign | With the time between batches for a campaign, ensure that this time accounts for: emptying the bulk, clearing the line, closing the batch documentation, addressing any needed changeover, changeover of the fluid-pathway, filter-path integrity testing, closeout of EM samples, etc. All tasks should be accounted for and considered in this time as this will influence the possible number of batches within the campaign period. |
            
                ****
                
                
            
| % Yield Expected | 98% Yield / 2% Scrap | 2–4% scrap typical experience inclusive of all rejection causes (e.g., filter flush, filler priming, end of aseptic filling-unit operation, intervention clearance). |
            
                ****
                
                
            
| % Line Efficiency | 85% Desired | 75% minimum target; more than 80% is possible, but each additional percentage-point requires significant effort to achieve. This parameter is often less about the equipment design and more on the expertise of the operators on setup, as well as appropriate sensors and detection to improve the operational efficiency without down-time. Interruptions during small batches will have an outsized influence on this parameter. |
            
                ****
                
                
            
| % Facility Efficiency | 70–80% | Amount includes needed maintenance, recalibration, shutdowns for facility maintenance, APS. |
        

        

    

    

        

## 導師解析 Tutorial Commentary

        

            

#### 核心概念解析 Key Concepts

            

**Campaign Strategy（生產節拍策略）:** 將多批次連續填充，批次間只做小幅換型，而非每次完整 changeover。優點是大幅縮短停機時間；代價是無菌風險累積更長，因此傾向選用隔離器（Isolator）而非 RABS。

            

**Rate-Limiting Step（速率限制步驟）:** 本案例的除熱原隧道（depyrogenation tunnel）是瓶頸 — 即使增加充填頭數量，整體線速也無法提升，因為隧道的輸送速度才是關鍵限制。這是典型的「木桶效應」。

        

        

            

#### 效率計算框架 Efficiency Calculation

            

```

年可用工時 = 365天 × 16hr/天 × (5/7天/週)
           ≈ 4,160 小時/年

扣除停機 (Facility Efficiency 75%):
可用生產時間 ≈ 4,160 × 0.75 = 3,120 小時

線效率 85% → 實際充填時間 ≈ 3,120 × 0.85
           ≈ 2,652 小時/年

yield 98% → 有效產出 = 充填量 × 0.98

實務啟示：每提升1%線效率，
相當於多出約26小時有效充填時間/年。
            
```

        

        

            

#### 重點提示 Key Notes

            

**Campaign 期間 EM 管理是關鍵：**每批結束時需完成 EM 樣本，但 EM 材料必須在充填線啟動前備妥於隔離器/RABS 內部，或透過 RTP 傳入。這是操作計劃的細節，卻是 APS 設計的重要組成部分。

            

**Filling Path 策略決定 4 小時換批是否可行：**若使用 CIP/SIP，需確認 CIP/SIP 週期時間 < 4 小時（含所有文件和完整性測試）；若不可行，應在設計初期改用一次性流路（single-use pathway）。

        

    

    21.2.6 Case 2: Comparison of Requirements to Filling System Capabilities

    

        

## 原文內容 Original Text

        

Now that some of the preliminary design requirements for the product and its intended packaging have been defined, the requirements can be compared to the filling system capabilities and attributes as described in Section 2.0. Comparison of the filling system capabilities to the product needs for this example leads to the following evaluative matrix in Table 21.2.6-1. Refer to Section 2.0 and Section 4.0 for additional information.

        

**Table 21.2.6-1 Case 2: Comparison of Requirements to Filling System Capabilities**

        

*Legend: filled circle = available or acceptable | empty/noted = not available or not acceptable*

        

        
            
                
                
                
                
                
            
| Product Requirements | Peristaltic Pump (PP) | Rotary Piston Pump (RPP) | Time Pressure (TP) | Diaphragm Pump (DP) |
| --- | --- | --- | --- | --- |
            
                ****
                
                
                
                
            
| Filling Range | OK | pump size prohibitive for the largest volumes; would require multi-stroke operation | OK | pump size prohibitive for the largest volumes; would require multi-stroke operation |
            
                ****
                
                
                
                
            
| Viscosity Range (low viscosity for this product) | OK | OK | OK | OK |
            
                ****
                
                
                
                
            
| Product Compatibility (proteins) | not ideal for shear-sensitive products | OK | OK | OK |
            
                ****
                
                
                
                
            
| Diving Needle Capable to Reduce Foaming | OK | OK | OK | OK |
            
                ****
                
                
                
                
            
| Dynamic Fill Curve (start/stop, acceleration) to Reduce Foaming | OK | OK | less flexibility for dynamic fill curve due to pressure control at vessel | OK |
            
                ****
                
                
                
                
            
| Range of Fill Volumes | will require different pump heads for wide ranges of fill volumes | requires different pump sets for different fill volumes | will require different orifices and fluid pathway to maintain accuracy across the range | OK |
            
                ****
                
                
                
                
            
| Drip Control | OK | OK | viscosity higher than water will reduce likelihood to drip, and rapid closure of pinch-valve is likely to be sufficient | OK |
            
                ****
                
                
                
                
            
| Dosing Accuracy | OK | very accurate, but volume of fill contraindicates this technology | OK | OK |
            
                ****
                
                
                
                
            
| Dosing Accuracy Stability Across Run | 100% IPC planned; dosing accuracy very stable | statistical IPC adequate | 100% IPC planned | 100% IPC planned |
            
                ****
                
                
                
                
            
| Single-Use (SU) Fluid Pathway | OK | rare (but possible) due to pump expense | OK | possible but may be expensive |
            
                ****
                
                
                
                
            
| CIP/SIP Execution | rare (but possible); often SU instead | OK | OK | OK |
            
                ****
                
                
                
                
            
| Stability Over Long Batches / Number of Cycles | hose wear a detriment, but relatively modest batch sizes make this suitable | hose wear at pinch point a minor consideration; processor required for varying head pressure | OK | diaphragm wear can be a minor consideration but usually only after excessive operation |
            
                ****
                
                
                
                
            
| Campaign Compatibility | hose wear must be considered | filling equipment can be replaced | single-point hose-wear must be considered | diaphragm-wear must be considered |
            
                ****
                
                
                
                
            
| Execution Outside Isolator or RABS | OK | OK | OK | OK |
            
                ****
                
                
                
                
            
| Speed of Setup / Changeover | OK | requires aseptic setup or CIP/SIP | requires aseptic setup or CIP/SIP, but fluid path is reduced compared to RPP | requires aseptic setup, CIP/SIP, or SU (which is the fastest changeover) |
        

        

        

Based on the above chart, the product characteristics make PP and TP the leading candidates, as planned fill volumes and shear-sensitivity of the product may preclude RPP (both volume and shear) and DP (volume alone).

        

PP and TP are well-matched. Decision-making may come down to whether SU technology (favoring PP) or CIP/SIP (favoring TP) are preferred. That decision may be driven by the changeover time with each, as the modest batch sizes will result in frequent changeover of the fluid pathway within the campaigns. If the foaming with the product is severe and SU technology is the desire, then PP will be the strongest contender if the cost of SU is not prohibitive based on the planned number of batches.

    

    

        

## 導師解析 Tutorial Commentary

        

            

#### 核心概念解析 Key Concepts

            

**能力比較矩陣的使用邏輯：**這張矩陣不是要找「完美的技術」，而是系統性地淘汰不符合條件的選項。本案例中：

            

                
- **RPP 被淘汰** — 大體積（250–500 mL）下泵尺寸受限，且對蛋白質的剪切風險不可接受

                
- **DP 被淘汰** — 同樣受大體積限制

                
- **PP vs TP** — 勝負在 SU 偏好 vs CIP/SIP 偏好，由商業決策定奪

            

            

決策層級：無菌保證優先 > 產品 CQA（剪切敏感）> 商業靈活性（SU 成本）

        

        

            

#### 比喻說明 Analogy

            

這張矩陣就像在餐廳選廚具：你有四種料理設備（PP/RPP/TP/DP），但菜單（蛋白質大體積充填）對廚具有明確要求。不是每種廚具都能做大鍋料理，也不是每種都對食材夠溫和。矩陣幫你逐項打分數，最終兩款廚具並列第一，最後的抉擇取決於你的廚房清潔策略（洗碗機 vs 拋棄式容器）。

        

        

            

#### 重點提示 Key Notes

            

**PP vs TP 的最終決策因素：**

            

                
- 若產品起泡嚴重 + 偏好 SU → **選 PP**（但需計算 SU 成本 × 年批次數）

                
- 若 changeover 時間緊（4小時批次間隔）且 CIP/SIP 可在時間內完成 → **選 TP**

                
- 若 campaign 橫跨 5 天且磨耗是風險 → PP 的軟管磨耗需要更嚴格的監測計劃

            

            

這是本指南最核心的示範：**沒有唯一正確答案，只有基於數據的最佳選擇。**

        

        

            

#### 練習思考 Practice Questions

            

                
1. 若你是 CDMO 的技術轉移工程師，客戶的原料藥批次成本極高（每批 $2M），100% IPC 對 PP 的意義是什麼？選 PP 還是 TP 時，這個因素如何影響決策？

                
2. 若 campaign 長達 5 天，PP 的軟管磨耗如何在 APS 中體現？應如何設計監測計劃？

            

        

    

    21.2.7 Case 2: Other Design Elements for Consideration

    

        

## 原文內容 Original Text

        

There are a number of other design decisions that will impact the layout and operation of the filling line, such as:

        

            
- Operator Interface with the line (Section 8.0)

            
- Supply of Components (Section 9.0 and Section 10.0)

            
- Product Filtration, including location of filters, required number of filter elements, integrity-testing pre- and post-filling (Section 11.0)

            
- Filling Environment and Utilities (Section 14.0 and Section 15.0)

        

        

Generally, these decisions should be made as part of the filling-line specification process as they may affect costs and can influence placement of equipment; however, these are generally less of a direct impact on the selection of the filling technology itself.

    

    

        

## 導師解析 Tutorial Commentary

        

            

#### 重點提示 Key Notes

            

本節是 Case 2 的收尾，提醒讀者：充填技術選型完成後，仍有一系列「週邊設計決策」需要完成，包含操作員介面、零組件供應、過濾器位置與完整性測試，以及廠務設施。

            

這些決策雖然不直接決定充填技術，但會影響：設備佔地、CAPEX、操作風險，以及最終的 URS（使用需求規格書）內容。建議在充填技術確定後，立即啟動這些週邊設計的討論。

        

        

            

#### 核心概念解析 Key Concepts

            

**設計決策的優先順序：**

            

                
1. **充填技術選型** — 本 Case Study 的核心（21.2.1–21.2.6）

                
2. **週邊系統設計** — 本節所列（操作員介面、組件供應、過濾、廠務）

                
3. **空間佈局與成本估算** — 基於前兩項完成後進行

            

            

以上流程確保最重要的決策（無菌保證 > CQA）先定，再逐層往下設計，避免因佈局或成本倒逼技術選型。

        

    

    22.0 Relevant Vendor and Supplier Resources (Back Matter)

    

        

## 原文內容 Original Text

        

The following paid advertisements are presented to the reader as potential supplemental resources which may aid in execution or fulfillment of the concepts, material, and information presented herein.

        

            The inclusion of these resources does not imply any endorsement or preference on part of PDA or the authors of this technical document.
        

        

**Featured Vendors (p259–p262):**

        

            

### Bausch+Ströbel — GENEX System

            

*"Pharmaceutical production of the future — Maximum safety and highest quality through gloveless aseptic production."*

            

GENEX is a groundbreaking machine concept designed specifically for small and medium batch production. The fully automated GENEX filling and packaging system utilizes robot technology, automating size changes and environmental monitoring while ensuring full compliance with GMP regulations.

            

**GENEX Key Features:**

            

                
- Scale out

                
- Zero Reject Principle

                
- Next Level Hygienic Design

                
- GMP / ANNEX 1 Conforming machine design

                
- Eliminate Human Intervention

                
- Short decontamination cycle

                
- Processing Various Packaging Materials

                
- Integrated System

            

            

*Bausch+Ströbel | 74532 Ilshofen, Germany*

        

        

            

### groninger — Filling and Closing Solutions

            

*"Filling and closing of liquid pharmaceuticals from small batch to high speed."*

            

groninger is a globally recognized leader in the design and manufacture of advanced filling and closing equipment for the pharmaceutical industry. They offer a comprehensive portfolio ranging from highly customized equipment to standardized line concepts for series production.

            

*www.groninger-group.com*

        

        

            

### IMA Pharma — Injecta 36 with Detecta & Nebula

            

*"Single Detection. Single Rejection. High-speed advanced robotic processing for Ready-To-Use components."*

            

The Injecta 36 system pairs with Detecta (high-speed inspection unit with robotic accuracy for plunger presence checking) and Nebula (high-speed decontamination tunnel) for RTU component processing at the highest speeds.

            

*ima.it/pharma*

        

        

            

### OPTIMA pharma — Turnkey Integrated Solutions

            

*"Your home for turnkey — Fully integrated solutions from one partner: Sterile filling, containment and freeze-drying."*

            

                
- Flexible filling of vials, syringes and cartridges

                
- Smart solutions for liquid, viscous and high-potent products

                
- Different dosing / combi-dosing systems according to product requirements

                
- Technologies for maximum product yield and minimizing product loss

                
- Options for different product path handling: CIP/SIP, single-use, autoclavable

                
- Decades of experience in aseptic and sterile filling

            

            

*OPTIMA pharma GmbH | Schwaebisch Hall, Germany | www.optima-packaging.com/pharma*

        

        

**About PDA Technical Documents (p264)**

        

PDA Technical Documents are global consensus documents, prepared by member-driven Teams comprised of content experts, including scientists and engineers working in the pharmaceutical/biopharmaceutical industry, regulatory authorities and academia. The viewpoints and strategies presented in this document are those of the authors as independent subject matter experts and do not necessarily represent the policies and practices of their respective companies.

        

**Special Acknowledgement:** PDA and the authors would like to thank *groninger & co. gmbh* for their generous contribution of multiple images for use in this Manufacturing Technology Guide.

    

    

        

## 導師解析 Tutorial Commentary

        

            

#### 核心概念解析 Key Concepts

            

**廠商資源章節的性質：**第22節是付費廣告（paid advertisements）收錄於 PDA 技術指南末尾，PDA 明確聲明「不代表認可或偏好」。對讀者而言，這一節的實際價值是：了解當前市場上有哪些主要設備供應商，以及它們各自強調的技術方向。

            

值得注意的是，這四家廠商（Bausch+Ströbel、groninger、IMA、OPTIMA）均是歐洲主流無菌充填設備製造商，反映了歐洲在高端藥機領域的主導地位。

        

        

            

#### 重點提示 Key Notes — 技術趨勢觀察

            

**GENEX（Bausch+Ströbel）的核心命題：**"Gloveless Aseptic Production" — 無手套無菌生產。手套口（glove port）歷來是 RABS/Isolator 最大的污染風險點之一（參見 EU GMP Annex 1 干預管理要求）。機器人自動化取代手動干預，是下一代無菌充填線的核心趨勢。

            

**IMA Detecta 的「Single Rejection」概念：**傳統視覺系統在偵測缺陷後，可能拒絕整個批次或多個單位；Single Rejection 代表機器人精確只排除單一缺陷單位，大幅提升良率。這呼應本指南第5節中 100% IPC 對高價值產品的重要性。

        

        

            

#### 比喻說明 Analogy

            

這些廠商廣告就像汽車雜誌末尾的廠商名錄 — 不是評測，但能讓你快速掌握市場格局。當你未來要寫 RFQ（詢價單）或 URS（使用需求規格書）時，這些廠商名稱就是你的第一輪「詢盤清單」。

        

    

    

### 本節重點回顧 Section 21B Summary

    

        
- **多容器/多規格設計（21.2.4）：**設計初期必須鎖定所有容器規格、change parts 清單、以及未來是否可能新增不同玻璃瓶型（IL/R/H），否則後期增加任何新規格都需要重新驗證。

        
- **批次參數與生產節拍（21.2.5）：**除熱原隧道是大瓶型的速率限制瓶頸；campaign 策略傾向使用隔離器；批次間 4 小時 changeover 必須涵蓋所有任務（CIP/SIP、完整性測試、EM 清點、文件）。

        
- **效率三層結構：**Line Efficiency（85%目標）× Facility Efficiency（70-80%）× Yield（98%），三者共同決定年實際產出 — 每個百分點都需要顯著投入才能改善。

        
- **技術選型結論（21.2.6）：**RPP 與 DP 因大體積/蛋白質剪切問題被排除；PP 與 TP 並列最優，最終選擇取決於 SU 偏好（PP）或 CIP/SIP 偏好（TP），由 campaign 换批時間與 SU 成本共同決定。

        
- **決策層級永遠成立：**Sterility Assurance > Product CQAs > Business Flexibility — 本案例中，campaign 驅動隔離器選型（SA優先），剪切敏感性排除 RPP（CQA優先），SU vs CIP/SIP 是最後才考慮的商業決策。

    

⇧