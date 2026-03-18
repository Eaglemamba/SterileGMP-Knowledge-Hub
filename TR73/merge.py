#!/usr/bin/env python3
"""
TR73 Educational Material Merger (Partial: p81-109)
Usage:
    cd TR73/
    python3 merge.py
"""

import os
import sys
sys.path.insert(0, os.path.join(os.path.dirname(os.path.abspath(__file__)), '..'))
from merge_engine import run_merge

# ============================================================
# CONFIGURATION — TR73: Prefilled Syringes (Partial p81-109)
# Covers Sections 12 (CCI cont.), 13 (Manufacturing), 14 (Compatibility), Appendices
# ============================================================

SECTION_MAP = [
    (["section-12-cci.html"],
     "sec12", "12", "Container Closure Integrity", "容器密封完整性", "p74-p76"),

    (["section-13a-manufacturing.html", "section-13b-manufacturing.html"],
     "sec13", "13", "Manufacturing Requirements", "製造要求", "p77-p86"),

    (["section-14a-compatibility.html", "section-14b-compatibility.html"],
     "sec14", "14", "Drug Product Compatibility", "藥品相容性", "p87-p95"),

    (["section-15-appendices.html"],
     "sec15", "15-18", "Appendices", "附錄", "p96-p102"),
]


if __name__ == '__main__':
    run_merge(
        section_map=SECTION_MAP,
        report_title_en="PDA Technical Report No. 73 (2015)",
        report_subtitle_en="Prefilled Syringes (Sections 12-18, p81-109)",
        report_subtitle_zh="預充填注射器 完整教學版（第12-18章）",
        output_filename="TR73-Complete.html",
        footer_text="PDA Technical Report No. 73 (2015): Prefilled Syringe User Requirements for Biotechnology Applications (Partial: p81-109)",
        chapter_label="Section",
        base_dir=os.path.dirname(os.path.abspath(__file__)),
    )
