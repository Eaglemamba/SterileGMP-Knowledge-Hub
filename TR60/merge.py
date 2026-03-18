#!/usr/bin/env python3
"""TR60 Educational Material Merger"""
import os, sys
sys.path.insert(0, os.path.join(os.path.dirname(os.path.abspath(__file__)), '..'))
from merge_engine import run_merge

SECTION_MAP = [
    (["section-00-intro-glossary.html"],
     "sec0", "0", "Introduction & Glossary", "導論與術語", "p1-p10"),
    (["section-01a-process-design.html", "section-01b-process-design.html"],
     "sec1", "1", "Process Design (Stage 1)", "製程設計（第一階段）", "p11-p38"),
    (["section-02a-perf-qual.html", "section-02b1-ppq-design.html", "section-02b2-ppq-report.html"],
     "sec2", "2", "Performance Qualification (Stage 2)", "效能確認（第二階段）", "p39-p66"),
    (["section-03a-cpv.html", "section-03b-cpv.html"],
     "sec3", "3", "Continued Process Verification (Stage 3)", "持續製程確認（第三階段）", "p67-p83"),
    (["section-04a-enabling.html", "section-04b-enabling.html"],
     "sec4", "4", "Enabling Systems & Technology", "賦能系統與技術", "p84-p110"),
    (["section-05-references.html"],
     "sec5", "5", "References", "參考文獻", "p111-p120"),
    (["section-06-appendix-examples.html"],
     "sec6", "A1a", "Practical Examples", "實務範例", "p121-p135"),
    (["section-07a-appendix-stats.html", "section-07b-appendix-charts.html"],
     "sec7", "A1b-II", "Statistical Methods & Control Charts", "統計方法與管制圖", "p136-p155"),
]

if __name__ == '__main__':
    run_merge(
        section_map=SECTION_MAP,
        report_title_en="PDA Technical Report No. 60 (Revised 2026)",
        report_subtitle_en="Process Validation: A Lifecycle Approach",
        report_subtitle_zh="製程驗證：生命週期方法 完整教學版",
        output_filename="TR60-Complete.html",
        footer_text="PDA Technical Report No. 60 (Revised 2026): Process Validation: A Lifecycle Approach",
        chapter_label="Section",
        base_dir=os.path.dirname(os.path.abspath(__file__)),
    )
