#!/usr/bin/env python3
"""TR73-2 Educational Material Merger"""
import os, sys
sys.path.insert(0, os.path.join(os.path.dirname(os.path.abspath(__file__)), '..'))
from merge_engine import run_merge

SECTION_MAP = [
    (["section-00-intro-glossary.html"],
     "sec0", "0", "Introduction & Glossary", "導論與術語", "p1-p5"),
    (["section-01-regulatory.html"],
     "sec1", "1", "Regulatory Background", "法規背景", "p5-p6"),
    (["section-02-submission.html"],
     "sec2", "2", "Submission File Content", "送件文件內容", "p6-p15"),
    (["section-03a-gsprs.html", "section-03b-gsprs.html"],
     "sec3", "3", "GSPRs & Requirements", "GSPRs與要求", "p15-p32"),
    (["section-04-references.html"],
     "sec4", "4", "References", "參考文獻", "p33"),
]

if __name__ == '__main__':
    run_merge(
        section_map=SECTION_MAP,
        report_title_en="PDA Technical Report No. 73-2 (2024)",
        report_subtitle_en="Application of MDR Annex I Requirements for Staked Needle Systems",
        report_subtitle_zh="固定式針頭注射器之MDR附錄I要求應用 完整教學版",
        output_filename="TR73-2-Complete.html",
        footer_text="PDA Technical Report No. 73-2 (2024): Application of Medical Device Regulation Annex I Requirements for Staked Needle Systems",
        chapter_label="Section",
        base_dir=os.path.dirname(os.path.abspath(__file__)),
    )
