# PDA Manufacturing Technology Guide No. 1 — Educational Material Generator
# Aseptic Filling, Engineering, and Operation (2025)

## MISSION

You are creating bilingual educational materials for **PDA Manufacturing Technology Guide No. 1: Aseptic Filling, Engineering, and Operation (2025)**. Transform dense technical pharmaceutical content into accessible learning resources for CDMO professionals.

For full HTML template structure, CSS class rules, language rules, teaching approach, and commentary box requirements, refer to the master `../PROMPT.md`.

---

## SECTION ASSIGNMENT MAP (Track progress here)

```
[x] Section 0   — Introduction & Glossary           | doc p1-p7    | sec00-intro-glossary.txt
[ ] Section 1A  — Design Elements (p8-p16)          | doc p8-p16   | sec01a-design-p8-p16.txt
[ ] Section 1B  — Design Elements (p17-p25)         | doc p17-p25  | sec01b-design-p17-p25.txt
[ ] Section 2A1 — Liquid Filling: 2.0+2.1 PP (p26-p33) | sec02a1-filling-pp-p26-p33.txt
[ ] Section 2A2 — Liquid Filling: 2.1 PP cont (p34-p41) | sec02a2-filling-pp-p34-p41.txt
[ ] Section 2B  — Liquid Filling: 2.2 RPP          | doc p42-p53  | sec02b-filling-rpp.txt
[ ] Section 2C  — Liquid Filling: 2.3 TP + 2.4 DP  | doc p54-p69  | sec02c-filling-tp.txt + sec02d-filling-dp.txt
[ ] Section 3   — Needle Design                     | doc p69-p70  | sec03-needle-design.txt (combine with 1B or 2C)
[ ] Section 4A1 — Functionality (p71-p80)           | doc p71-p80  | sec04a1-func-p71-p80.txt
[ ] Section 4A2 — Functionality (p81-p86)           | doc p81-p86  | sec04a2-func-p81-p86.txt
[ ] Section 4B1 — Functionality (p87-p93)           | doc p87-p93  | sec04b1-func-p87-p93.txt
[ ] Section 4B2 — Functionality (p94-p100)          | doc p94-p100 | sec04b2-func-p94-p100.txt
[ ] Section 5A  — Dose Control (p101-p107)          | doc p101-p107 | sec05a-dose-p101-p107.txt
[ ] Section 5B  — Dose Control (p108-p114)          | doc p108-p114 | sec05b-dose-p108-p114.txt
[ ] Section 6   — Container-Closure Systems         | doc p114-p118 | sec06-container-closure.txt
[ ] Section 7A  — Closing Systems (p118-p125)       | doc p118-p125 | sec07a-closing-p118-p125.txt
[ ] Section 7B  — Closing Systems (p126-p133)       | doc p126-p133 | sec07b-closing-p126-p133.txt
[ ] Section 8A  — Operational (p134-p140)           | doc p134-p140 | sec08a-ops-p134-p140.txt
[ ] Section 8B  — Operational (p141-p147)           | doc p141-p147 | sec08b-ops-p141-p147.txt
[ ] Section 8C  — Operational (p148-p152)           | doc p148-p152 | sec08c-ops-p148-p152.txt
[ ] Section 9   — Component Introduction            | doc p152-p161 | sec09-component-intro.txt
[ ] Section 10  — Sterilization & Preparation       | doc p161-p167 | sec10-sterilization.txt
[ ] Section 11A — Sterile Fluid Pathway (p167-p174) | sec11a-fluid-p167-p174.txt
[ ] Section 11B — Sterile Fluid Pathway (p175-p181) | sec11b-fluid-p175-p181.txt
[ ] Section 12  — Batch Setup & Discard             | doc p181-p189 | sec12-batch-setup.txt
[ ] Section 13  — Aseptic Process Simulation        | doc p189-p195 | sec13-aps.txt
[ ] Section 14  — Powder Filling Overview           | doc p196-p198 | sec14-powder-overview.txt (combine with 15)
[ ] Section 15  — Auger Filling                     | doc p198-p205 | sec15-auger-filling.txt
[ ] Section 16  — Vacuum Filling                    | doc p205-p210 | sec16-vacuum-filling.txt
[ ] Section 17  — Powder Functionality              | doc p210-p216 | sec17-powder-func.txt
[ ] Section 18  — Powder Dose Control               | doc p216-p220 | sec18-powder-dose.txt
[ ] Section 19  — Powder Operational                | doc p220-p221 | sec19-powder-operational.txt (tiny)
[—] Section 20  — References                       | SKIP (no commentary needed)
[ ] Section 21A — Case Studies (p225-p246)          | sec21a-cases-p225-p246.txt
[ ] Section 21B — Case Studies (p247+)              | sec21b-cases-p247-p267.txt
```

---

## TOKEN ESTIMATION (Per Agent)

| Source Chars | Est. Input Tokens | Est. Total w/ Output | Status |
|---|---|---|---|
| <15K | <5K | ~50K | Safe |
| 15-22K | 5-7K | 70-90K | Safe |
| 22-28K | 7-8K | 90-120K | OK |
| 28-35K | 8-10K | 120-160K | Tight — monitor |
| >35K | >10K | >160K | SPLIT required |

---

## FILE NAMING CONVENTION

Output files go to `pda-guide-no1/sections/`:
```
section-00-intro-glossary.html
section-01a-design.html
section-01b-design.html
section-02a1-filling-pp.html
section-02a2-filling-pp.html
section-02b-filling-rpp.html
section-02c-filling-tp-dp.html
section-03-needle.html          (if processed separately)
section-04a1-functionality.html
section-04a2-functionality.html
section-04b1-functionality.html
section-04b2-functionality.html
section-05a-dose-control.html
section-05b-dose-control.html
section-06-container-closure.html
section-07a-closing-systems.html
section-07b-closing-systems.html
section-08a-operational.html
section-08b-operational.html
section-08c-operational.html
section-09-component-intro.html
section-10-sterilization.html
section-11a-sterile-fluid.html
section-11b-sterile-fluid.html
section-12-batch-setup.html
section-13-aps.html
section-14-15-powder-auger.html
section-16-vacuum-filling.html
section-17-18-powder-func-dose.html
section-19-powder-ops.html
section-21a-case-studies.html
section-21b-case-studies.html
```

---

## GUIDE NO.1-SPECIFIC DECISION HIERARCHY

```
1. Sterility Assurance (無菌保證)         ← ALWAYS #1
      ▼
2. Product CQAs (產品關鍵品質屬性)        ← Patient safety
      ▼
3. Business & Flexibility (商業與彈性)     ← Operational needs
```

This hierarchy appears throughout Guide No.1 — reinforce it in every section.

---

## SOURCE PDF INFO

- PDF: `../Raw pdfs/PDA-Tech-Guide-No1-Aseptic-Filling-2025.pdf` (281 PDF pages)
- Offset: PDF page = doc page + 14 (e.g., doc p1 = PDF p15)
- Pre-extracted text files: `pda-guide-no1/source/*.txt`
- Shared CSS: `../template.css`
