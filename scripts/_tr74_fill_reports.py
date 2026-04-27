"""Fill TR74 entry in reports.json with metadata + 7-section section_map (A/B for 5, 6)."""
import json
from pathlib import Path

ROOT = Path(r'C:\Users\david.kuo\SterileGMP-Knowledge-Hub')
RJ = ROOT / 'reports.json'

data = json.loads(RJ.read_text(encoding='utf-8'))
TR74 = {
    "report_title_en": "PDA Technical Report No. 74 (Revised 2026)",
    "report_subtitle_en": "Reprocessing and Reworking of Biologicals",
    "report_subtitle_zh": "生物製劑的再處理與返工 完整教學版",
    "output_filename": "TR74-Complete.html",
    "footer_text": "PDA Technical Report No. 74 (Revised 2026): Reprocessing and Reworking of Biologicals",
    "chapter_label": "Section",
    "date": "2026-04-27",
    "title": "PDA TR74: Reprocessing and Reworking of Biologicals (Revised 2026)",
    "titleZh": "PDA TR74:生物製劑的再處理與返工",
    "source": "PDA TR74",
    "source_color": {
        "bg": "#1e3a5f",
        "text": "#3498db",
        "bar": "#3498db",
        "short": "TR74"
    },
    "tags": [
        "Biologicals",
        "Reprocessing",
        "Reworking",
        "Quality Risk Management",
        "Post-Approval Change",
        "FMEA",
        "AEX Chromatography",
        "Filtration"
    ],
    "summary": "TR74 (2026修訂版) 系統性闡述生物製劑再處理 (reprocessing) 與返工 (reworking) 的決策框架、法規定位、品質風險評估、變更控制與案例研究。涵蓋主動/被動取向、CMC 變更分類、Risk Knowledge Infinity Cycle、AEX 層析再處理 FMEA 範例與過濾再過濾案例，共7個章節含附錄。",
    "pages": "p1-p77",
    "figures": 0,
    "section_map": [
        {
            "files": ["section-01-introduction.html"],
            "id": "sec1",
            "num": "1",
            "label_en": "Introduction",
            "label_zh": "導論",
            "pages": "p1-p2"
        },
        {
            "files": ["section-02-glossary.html"],
            "id": "sec2",
            "num": "2",
            "label_en": "Glossary and Abbreviations",
            "label_zh": "術語與縮寫",
            "pages": "p3-p6"
        },
        {
            "files": ["section-03-reprocessing-considerations.html"],
            "id": "sec3",
            "num": "3",
            "label_en": "Reprocessing Considerations",
            "label_zh": "再處理考量",
            "pages": "p7-p22"
        },
        {
            "files": ["section-04-regulatory.html"],
            "id": "sec4",
            "num": "4",
            "label_en": "Regulatory Framework",
            "label_zh": "法規架構",
            "pages": "p23-p29"
        },
        {
            "files": ["section-05a-reworking.html", "section-05b-reworking.html"],
            "id": "sec5",
            "num": "5",
            "label_en": "Introduction to Reworking",
            "label_zh": "返工概論",
            "pages": "p30-p54"
        },
        {
            "files": ["section-06a-aex-case-study.html", "section-06b-aex-case-study.html"],
            "id": "sec6",
            "num": "6",
            "label_en": "Appendix I: AEX Reprocessing Case Study",
            "label_zh": "附錄一:陰離子交換層析再處理案例",
            "pages": "p55-p74"
        },
        {
            "files": ["section-07-filtration-cases.html"],
            "id": "sec7",
            "num": "7",
            "label_en": "Appendix II: Filtration Case Studies",
            "label_zh": "附錄二:過濾再過濾案例",
            "pages": "p75-p77"
        }
    ]
}

# Preserve scaffold default ordering — replace existing TR74 entry
data['reports']['TR74'] = TR74

# Ensure new tags exist in tagClasses
new_tags = ["Biologicals", "Reworking", "Post-Approval Change", "AEX Chromatography"]
existing_tag_classes = data.get('tagClasses', {})
# Don't pollute — only add if missing entirely
for t in new_tags:
    if t not in existing_tag_classes:
        existing_tag_classes[t] = "tag-default"
data['tagClasses'] = existing_tag_classes

RJ.write_text(json.dumps(data, ensure_ascii=False, indent=2), encoding='utf-8')
print('TR74 entry written to reports.json with 7 sections (5/6 split A/B).')
print(f'Total sections in section_map: {len(TR74["section_map"])}')
print(f'Total HTML files expected: {sum(len(s["files"]) for s in TR74["section_map"])}')
