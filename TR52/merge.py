#!/usr/bin/env python3
"""
TR52 Educational Material Merger
Usage:
    cd TR52/
    python3 merge.py
"""

import os
import sys
sys.path.insert(0, os.path.join(os.path.dirname(os.path.abspath(__file__)), '..'))
from merge_engine import run_merge

# ============================================================
# CONFIGURATION — TR52: Guidance for Good Distribution Practices
# ============================================================

SECTION_MAP = [
    (["section-00-intro-glossary.html"],
     "sec0", "0", "Introduction & Glossary", "導論與術語", "p1-p3"),

    (["section-01-stability.html"],
     "sec1", "1", "Stability", "穩定性", "p4-p5"),

    (["section-02-distribution-control.html"],
     "sec2", "2", "Distribution Control", "配銷管控", "p5-p10"),

    (["section-03-performance-partner.html"],
     "sec3", "3", "Performance & Partner Mgmt", "績效與夥伴管理", "p10-p12"),

    (["section-04a-gdp-checklist.html", "section-04b-gdp-checklist.html"],
     "sec4", "4", "GDP Checklist", "GDP查核表", "p13-p31"),

    (["section-05-references.html"],
     "sec5", "5", "References", "參考文獻", "p31"),
]


if __name__ == '__main__':
    run_merge(
        section_map=SECTION_MAP,
        report_title_en="PDA Technical Report No. 52 (2011)",
        report_subtitle_en="Guidance for Good Distribution Practices (GDPs) for the Pharmaceutical Supply Chain",
        report_subtitle_zh="藥品供應鏈良好配銷規範指引 完整教學版",
        output_filename="TR52-Complete.html",
        footer_text="PDA Technical Report No. 52 (2011): Guidance for Good Distribution Practices (GDPs) for the Pharmaceutical Supply Chain",
        chapter_label="Section",
        base_dir=os.path.dirname(os.path.abspath(__file__)),
    )
