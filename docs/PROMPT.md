# SterileGMP Knowledge Hub — Bilingual Educational Material Generator

## MISSION

You are creating bilingual educational materials for a specific **GMP guideline document** (PDA, ISPE, FDA, PIC/S, ISO, etc.). Transform dense technical pharmaceutical content into accessible learning resources for CDMO professionals.

---

## PROJECT STRUCTURE

```
/project
  /source/
    PDA-Tech-Guide-No1-Aseptic-Filling-2025.pdf    # Source PDF
  /figures/
    fig-1.1-1.png       # Uploaded figure images
    fig-2.1-2.png       # Named: fig-{section}-{number}.png
    ...
  /sections/
    section-00-intro.html         # Individual section outputs
    section-01-design.html
    section-02-technologies.html
    ...
  /output/
    PDA-Guide-Complete.html       # Final merged document
  template.css                    # Shared CSS (DO NOT MODIFY)
  merge.py                        # Assembly script
  PROMPT.md                       # This file
```

---

## PROCESSING WORKFLOW

### Step 1: Identify the Section
Read the section assignment. Each section has:
- **Section number** (e.g., 1.1)
- **Page range** in the PDF (e.g., p8-p15)
- **Associated figures** (e.g., fig-1.1-1.png)

### Step 2: Extract Content from PDF
- Read the PDF pages for the assigned section
- Capture ALL original text faithfully
- Note all tables, figures, and cross-references
- Identify key terms that need highlighting

### Step 3: Create the HTML File
- Use the HTML template structure below
- Left column: complete original English content
- Right column: Traditional Chinese commentary with educational elements
- Embed any figures as base64 images
- Use `<link rel="stylesheet" href="../../../template.css">` — do NOT paste CSS inline

### Step 4: Save and Verify
- Save to `/sections/section-XX-name.html`
- Verify the file opens correctly in a browser
- Check that all figures render properly

---

## HTML TEMPLATE STRUCTURE

Every section file MUST follow this exact structure:

```html
<!DOCTYPE html>
<html lang="zh-TW">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>PDA Guide - Section X.X: [Title]</title>
    <link rel="stylesheet" href="../../../template.css">
</head>
<body>

<!-- SECTION HEADER -->
<div class="header">
    <h1>Section X.X [English Title]</h1>
    <div class="subtitle">[Chinese Title]</div>
    <div class="page-info">PDA Manufacturing Technology Guide No. 1 | p[start] - p[end]</div>
</div>

<!-- LEARNING OBJECTIVES -->
<div class="learning-objectives">
    <h3>本章學習目標</h3>
    <ul>
        <li>[Objective 1 in Traditional Chinese]</li>
        <li>[Objective 2]</li>
        <li>[Objective 3]</li>
        <li>[Objective 4]</li>
    </ul>
</div>

<!-- CONTENT SECTIONS - Repeat for each subsection -->
<!-- IMPORTANT: Section titles MUST be bilingual and bold -->
<div class="section-title"><strong>X.X [English Subsection Title] [中文標題]</strong></div>

<div class="two-column">
    <div class="left-column">
        <h2>原文內容 Original Text</h2>
        <!-- Original English content with key terms highlighted -->
        <p>Text with <span class="key-term">highlighted terms</span>...</p>
        
        <!-- For important quotes -->
        <div class="quote-box">
            "Important quote from the text..."
        </div>
        
        <!-- For figures -->
        <div class="figure-container">
            <img src="data:image/png;base64,..." alt="Figure X.X-X: Description" 
                 style="max-width:100%; border-radius:8px; border:1px solid #e2e8f0;">
            <p class="figure-caption" style="text-align:center; font-size:0.85rem; color:#4a5568; margin-top:0.5rem;">
                Figure X.X-X: [Caption]
            </p>
        </div>
        
    </div>
    
    <div class="right-column">
        <h2>導師解析 Tutorial Commentary</h2>
        
        <!-- 1. Key Concept Definition (Green box) -->
        <div class="concept-box">
            <h4>核心概念解析 Key Concepts</h4>
            <p><strong>Term (中文翻譯):</strong> Explanation in Traditional Chinese...</p>
        </div>
        
        <!-- 2. Analogy (Yellow box) -->
        <div class="analogy-box">
            <h4>比喻說明 Analogy</h4>
            <p>Everyday analogy in Traditional Chinese...</p>
        </div>
        
        <!-- 3. Key Note (Orange box) -->
        <div class="note-box">
            <h4>重點提示 Key Notes</h4>
            <p>Important insight in Traditional Chinese...</p>
        </div>
        
        <!-- 4. Formula (Purple box) - when relevant -->
        <div class="formula-box">
            <h4>公式與計算 Formula</h4>
            <pre>
Formula or calculation...
            </pre>
        </div>
        
        <!-- 5. Application Box -->
        <div class="practice-box" style="border-style:solid; background:linear-gradient(135deg, #f0fdf4 0%, #dcfce7 100%); border-color:#22c55e;">
            <h4>實務應用 Practical Application</h4>
            <p>CDMO business scenario in Traditional Chinese...</p>
        </div>
        
        <!-- 6. Practice Questions (Blue dashed box) -->
        <div class="practice-box">
            <h4>練習思考 Practice Questions</h4>
            <ol>
                <li>Question 1 in Traditional Chinese?</li>
                <li>Question 2?</li>
            </ol>
        </div>
        
        <!-- For figure commentary -->
        <div class="note-box">
            <h4>圖表解讀 Figure Analysis</h4>
            <p>Detailed explanation of the figure in Traditional Chinese...</p>
        </div>
    </div>
</div>

<!-- FULL-WIDTH TABLES — placed OUTSIDE two-column to preserve bicolumn layout -->
<!-- Tables wider than half-page MUST go here, not inside left-column -->
<div class="full-width-table" style="margin: 1rem 0;">
    <h3 style="font-weight:600; color:var(--primary-blue); margin-bottom:0.5rem;">Table X.X-X: [Table Title]</h3>
    <div style="overflow-x:auto;">
        <table>
            <thead>
                <tr><th>Column 1</th><th>Column 2</th><th>Column 3</th></tr>
            </thead>
            <tbody>
                <tr><td>Data</td><td>Data</td><td>Data</td></tr>
            </tbody>
        </table>
    </div>
</div>

<!-- SECTION SUMMARY -->
<div class="learning-objectives" style="background: linear-gradient(135deg, #fef3c7 0%, #fde68a 100%);">
    <h3>本節重點回顧 Section Summary</h3>
    <ul>
        <li>[Key takeaway 1 in Traditional Chinese]</li>
        <li>[Key takeaway 2]</li>
        <li>[Key takeaway 3]</li>
    </ul>
</div>

</body>
</html>
```

---

## CONTENT CREATION RULES

### Language Rules (CRITICAL - READ CAREFULLY)
1. **ALL explanatory text** must be in Traditional Chinese (繁體中文)
2. **Technical terms** in English with Chinese in parentheses on first occurrence:
   - First occurrence: `Aseptic Filling (無菌充填)`
   - Subsequent: can use either form
3. **Acronyms** always stay in English: FDA, GMP, CQA, ICH, SU, CIP, SIP, RABS, PUPSIT
4. **Original content** (left column) stays in English exactly as written in the PDF
5. **NEVER use Simplified Chinese** - always use 繁體中文
6. **Do NOT translate** the left column content - it must remain in original English

### Teaching Approach
- **Tone**: Warm, Socratic, like a private tutor (導師) coaching one-on-one
- **Explain WHY** things matter, not just WHAT they are
- **Connect** to broader pharmaceutical strategy and CDMO business implications
- **Include** business/financial implications when relevant
- **Show** how CMC/manufacturing decisions impact clinical/commercial success
- **Use concrete numbers** and calculations whenever available in the source

### Commentary Box Types (use ALL relevant types per subsection)

| Box Type | CSS Class | Color | Purpose |
|----------|-----------|-------|---------|
| Key Concepts | `.concept-box` | Green | Define terms, explain core ideas |
| Analogy | `.analogy-box` | Yellow | Everyday comparisons (restaurants, concerts, factories) |
| Key Notes | `.note-box` or `.key-note` | Orange | Critical warnings, insights, regulatory emphasis |
| Formula | `.formula-box` | Purple | Calculations, formulas, metrics, cost models |
| Practice | `.practice-box` | Blue dashed | Comprehension questions |
| Application | custom `.practice-box` | Green solid | Real-world CDMO scenarios |

### Commentary Depth Requirements
For each subsection (e.g., 1.1, 2.1), include AT MINIMUM:
- 1x concept definition box (Green)
- 1x analogy box (Yellow)
- 1x key note box (Orange)
- 1x practice question box (Blue)
- Optional: formula box (Purple), application box (Green solid) as relevant

### Figure Handling (IMPORTANT)
1. Read the figure image from `/figures/fig-X.X-X.png`
2. Convert to base64 using Python:
   ```python
   import base64
   with open('figures/fig-1.1-1.png', 'rb') as f:
       b64 = base64.b64encode(f.read()).decode('utf-8')
   ```
3. Embed in HTML: `<img src="data:image/png;base64,{b64}" ...>`
4. Place the figure in the **left column** with proper caption
5. Add a **圖表解讀 (Figure Analysis)** box in the **right column** explaining the figure
6. Figure analysis should explain:
   - What the figure shows overall
   - Key elements and their relationships
   - Why this matters for practitioners
   - How to apply the concept in practice

### Table Handling
- Reproduce original tables faithfully in HTML `<table>` format
- The CSS handles styling (th backgrounds, alternating rows, borders)
- For complex tables, add a commentary box explaining key takeaways
- If a table is too wide, consider splitting or adding horizontal scroll:
  ```html
  <div style="overflow-x:auto;">
      <table>...</table>
  </div>
  ```

### Key Term Highlighting
In the left column, wrap important terms: `<span class="key-term">term</span>`

Prioritize highlighting:
- Terms being defined for the first time
- Technical concepts critical to understanding the section
- Terms referenced in regulatory documents (EU GMP Annex 1, FDA guidance)
- Terms that appear in the glossary
- Cross-references to other sections

---

## SECTION ASSIGNMENT MAP

Each document's section checklist is stored in its own folder:
`<SOURCE>/<REPORT_ID>/SECTIONS.md`

Create this file when scaffolding a new report. Do not put document-specific section maps here.

---

## TOKEN ESTIMATION & AGENT DISPATCH PLANNING

Before processing a new document, estimate token consumption per section to plan parallel agent dispatch within the 200K context window.

### Estimation Formula

```
Source content chars × 0.3 = input tokens (approximate)
Total tokens per section ≈ fixed overhead (20K) + (source pages × 15K)

Fixed overhead includes: PROMPT.md instructions + template.css + HTML template structure
Variable cost: bilingual commentary generates 3-5x more text than original
```

### Estimation Reference (from TR26 actual measurement)

| Source Pages | Source Chars | Est. Input Tokens | Est. Total Tokens | Fits in 200K? |
|---|---|---|---|---|
| 1-3 pages | <10K | <3K | ~30-50K | Yes, combine with neighbors |
| 4-5 pages | 10-15K | 3-5K | ~60-80K | Yes, can combine |
| 10-12 pages | 20-35K | 6-10K | ~100-140K | Yes, solo |
| 15-17 pages | 40-55K | 12-16K | ~160-180K | Tight — solo only |
| 18+ pages | 55K+ | 16K+ | ~190K+ | Must split into sub-sections |

### Agent Dispatch Rules

1. **First**: Extract all section texts from PDF and measure char counts
2. **Then**: Group sections so each agent's total stays under ~160K tokens (safe margin)
3. **Small sections** (1-5 pages): combine 2-4 into one agent
4. **Medium sections** (6-12 pages): solo or pair with one small section
5. **Large sections** (13-17 pages): always solo
6. **Extra-large sections** (18+ pages): split into sub-sections across multiple agents
7. **Skip** reference-only sections (no commentary needed)
8. **Dispatch all agents simultaneously** for maximum parallelism

---

## DECISION HIERARCHY (Reinforce in every section)

When making design or content choices, this priority always applies:

```
1. Sterility Assurance (無菌保證)         ← ALWAYS #1
      ▼
2. Product CQAs (產品關鍵品質屬性)        ← Patient safety
      ▼  
3. Business & Flexibility (商業與彈性)     ← Operational needs
```

When upper and lower priorities conflict, upper ALWAYS wins.

---

## STANDARD ANALOGIES REFERENCE

Use these proven analogies consistently. Add new ones as needed but keep this list as the canonical reference.

| Concept | Analogy |
|---------|---------|
| Aseptic filling | 手術室中準備食物 (preparing food in an operating room) |
| Terminal sterilization | 微波爐重新加熱 (reheating in microwave) |
| Container-closure system | 餐廳的餐具選擇 (restaurant dinnerware selection) |
| Single-use components | 免洗餐具 vs 瓷器 (disposable vs porcelain) |
| Changeover | F1 賽車進站換胎 (F1 pit stop tire change) |
| 100% IPC | 有倒車雷達的車 (car with parking sensors) |
| Statistical IPC | 只能目測停車距離 (estimating parking distance by eye) |
| CIP/SIP | 洗碗機+高壓消毒 (dishwasher + autoclave) |
| Isolator vs RABS | 太空站 vs 無塵室 (space station vs clean room) |
| TCO | 買車的全生命週期成本 (total car ownership cost) |
| Phase-appropriate approach | 學生到職場的成長 (student growing into professional) |
| Filling pump selection | 選擇廚房設備 (choosing kitchen equipment) |
| Contamination Control Strategy | 醫院的感染管控計畫 (hospital infection control plan) |
| PUPSIT | 出門前檢查瓦斯 (checking gas before leaving home) |
| Quarantine buffer | 機場安檢等候區 (airport security holding area) |

---

## STANDARD TERMINOLOGY TABLE

Use these Chinese translations consistently across ALL sections:

| English Term | 繁體中文 |
|-------------|---------|
| Aseptic Filling | 無菌充填 |
| Sterility Assurance | 無菌保證 |
| Critical Quality Attribute (CQA) | 關鍵品質屬性 |
| Critical Process Parameter (CPP) | 關鍵製程參數 |
| Container-Closure System | 容器密封系統 |
| Single-Use (SU) | 一次性使用 |
| Clean-In-Place (CIP) | 就地清洗 |
| Sterilize-In-Place (SIP) | 就地滅菌 |
| In-Process Control (IPC) | 製程中管控 |
| Peristaltic Pump (PP) | 蠕動泵 |
| Rotary Piston Pump (RPP) | 旋轉活塞泵 |
| Time Pressure (TP) | 時間壓力充填 |
| Rolling Diaphragm Pump (DP) | 滾動膜片泵 |
| Restricted Access Barrier System (RABS) | 限制進出屏障系統 |
| Isolator | 隔離器 |
| Contamination Control Strategy (CCS) | 污染控制策略 |
| Total Cost of Ownership (TCO) | 總擁有成本 |
| Ready-to-Use (RTU) | 即用型 |
| Rapid Transfer Port (RTP) | 快速傳遞口 |
| Aseptic Process Simulation (APS) | 無菌製程模擬 |
| Pre-Use Post-Sterilization Integrity Test (PUPSIT) | 使用前滅菌後完整性測試 |
| Good Documentation Practice (GDocP) | 良好文件管理規範 |
| Quality Risk Management (QRM) | 品質風險管理 |

---

## EXECUTION COMMANDS FOR CLAUDE CODE

### MD-first workflow (recommended):
```bash
# 1. Scaffold + extract PDF text
python gmp_engine.py scaffold TRXX
# Edit reports.json with report metadata + section_map
# Extract PDF text → TRXX/source/

# 2. Generate knowledge MD — review hierarchy before HTML generation
python gmp_engine.py md TRXX

# 3. Process sections into bilingual HTML
claude "Read PROMPT.md for full instructions. Process Section X.X (Title, pN-pM) from TRXX/source/section-X.0-text.txt. Copy full CSS from template.css into the HTML style tag. Save output to TRXX/sections/section-XX-name.html"

# 4. Merge all completed sections
python gmp_engine.py merge TRXX

# 5. Verify output
open TRXX/output/TRXX-Complete.html
```

---

## QUALITY CHECKLIST (Verify for EVERY section before saving)

- [ ] All original text is complete and faithful (no paragraphs skipped)
- [ ] All key terms are highlighted with `<span class="key-term">`
- [ ] All figures embedded as base64 and render correctly
- [ ] All tables properly formatted in HTML
- [ ] Right column has minimum required commentary boxes per subsection
- [ ] All commentary is in Traditional Chinese (繁體中文), NOT Simplified
- [ ] Technical terms follow `English (中文)` format on first occurrence
- [ ] Analogies are relatable everyday examples
- [ ] Practice questions test understanding, not mere memorization
- [ ] File opens and renders correctly in browser
- [ ] CSS is complete (full template.css pasted into `<style>` tag)
- [ ] No broken images or missing content
- [ ] Cross-references to other sections are noted in commentary
- [ ] Decision hierarchy is reinforced where relevant
