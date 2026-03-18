#!/usr/bin/env python3
"""
TR90 Educational Material Merger
Usage:
    cd TR90/
    python3 merge.py
"""

import os
import sys
sys.path.insert(0, os.path.join(os.path.dirname(os.path.abspath(__file__)), '..'))
from merge_engine import run_merge

# ============================================================
# CONFIGURATION — TR90: Contamination Control Strategy Development
# ============================================================

SECTION_MAP = [
    (["section-00-intro-glossary.html"],
     "sec0", "0", "Introduction & Glossary", "導論與術語", "p1-p3"),

    (["section-01-ccs-elements.html"],
     "sec1", "1", "Elements of CCS", "CCS要素", "p3-p6"),

    (["section-02a-process-design.html", "section-02b-process-design.html"],
     "sec2", "2", "Process Design & Monitoring", "製程設計與監控", "p7-p15"),

    (["section-03-facilities.html"],
     "sec3", "3", "Facilities & Utilities", "設施與公用系統", "p16-p19"),

    (["section-04-raw-materials.html"],
     "sec4", "4", "Raw Materials", "原料", "p20-p23"),

    (["section-05-environmental.html"],
     "sec5", "5", "Environmental Control", "環境管控", "p23-p26"),

    (["section-06-personnel.html"],
     "sec6", "6", "Personnel Training", "人員訓練", "p26-p30"),

    (["section-07-equipment.html"],
     "sec7", "7", "Equipment Design", "設備設計", "p30-p34"),

    (["section-08-containers.html"],
     "sec8", "8", "Containers & Closures", "容器與密封", "p34-p37"),

    (["section-09-quality-systems.html"],
     "sec9", "9", "Quality Systems", "品質系統", "p38-p41"),

    (["section-10-governance.html"],
     "sec10", "10", "CCS Governance", "CCS治理", "p42-p43"),

    (["section-11-references.html"],
     "sec11", "11", "References & Guidance", "參考文獻", "p43-p46"),

    (["section-12a-appendix-practical.html"],
     "sec12", "A1", "Practical Considerations", "實務考量", "p46-p51"),

    (["section-12b-appendix-excursions.html"],
     "sec13", "A2", "Microbial Excursions", "微生物偏差", "p51-p57"),

    (["section-12c-appendix-cases.html"],
     "sec14", "A3-5", "Case Studies & Templates", "案例與範本", "p57-p65"),
]


if __name__ == '__main__':
    run_merge(
        section_map=SECTION_MAP,
        report_title_en="PDA Technical Report No. 90 (2023)",
        report_subtitle_en="Contamination Control Strategy Development in Pharmaceutical Manufacturing",
        report_subtitle_zh="藥品製造污染控制策略開發 完整教學版",
        output_filename="TR90-Complete.html",
        footer_text="PDA Technical Report No. 90 (2023): Contamination Control Strategy Development in Pharmaceutical Manufacturing",
        chapter_label="Section",
        base_dir=os.path.dirname(os.path.abspath(__file__)),
    )
