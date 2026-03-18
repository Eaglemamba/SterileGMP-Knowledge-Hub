#!/usr/bin/env python3
"""TR22 Educational Material Merger"""
import os, sys
sys.path.insert(0, os.path.join(os.path.dirname(os.path.abspath(__file__)), '..'))
from merge_engine import run_merge

SECTION_MAP = [
    (["section-00-intro-glossary.html"],
     "sec0", "0", "Introduction & Glossary", "導論與術語", "p1-p8"),
    (["section-01-aps-concepts.html"],
     "sec1", "1", "APS Concepts & Principles", "APS概念與原則", "p9-p13"),
    (["section-02a-aps-overview.html", "section-02b-aps-overview.html"],
     "sec2", "2", "APS Overview & Design", "APS概述與設計", "p14-p37"),
    (["section-03-documentation.html"],
     "sec3", "3", "Documentation & EM", "文件與環境監控", "p38-p43"),
    (["section-04a-elements.html", "section-04b-elements.html"],
     "sec4", "4", "Elements of APS", "APS要素", "p44-p57"),
    (["section-05-personnel-acceptance.html"],
     "sec5", "5", "Personnel & Acceptance", "人員與判定標準", "p58-p66"),
    (["section-06-lyoph-refs.html"],
     "sec6", "6", "Lyophilization & References", "凍乾與參考文獻", "p66-p70"),
    (["section-07-appendix-media-sequence.html"],
     "sec7", "A1-2", "Media & Performance Sequence", "培養基與效能序列", "p71-p80"),
    (["section-08a-appendix-examples.html", "section-08b-appendix-examples.html"],
     "sec8", "A3", "Risk Assessment Examples", "風險評估範例", "p81-p115"),
]

if __name__ == '__main__':
    run_merge(
        section_map=SECTION_MAP,
        report_title_en="PDA Technical Report No. 22 (Revised 2025)",
        report_subtitle_en="Process Simulation for Aseptically Filled Products",
        report_subtitle_zh="無菌充填產品製程模擬 完整教學版",
        output_filename="TR22-Complete.html",
        footer_text="PDA Technical Report No. 22 (Revised 2025): Process Simulation for Aseptically Filled Products",
        chapter_label="Section",
        base_dir=os.path.dirname(os.path.abspath(__file__)),
    )
