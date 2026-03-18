#!/usr/bin/env python3
"""PtC-12 Educational Material Merger"""
import os, sys
sys.path.insert(0, os.path.join(os.path.dirname(os.path.abspath(__file__)), '..'))
from merge_engine import run_merge

SECTION_MAP = [
    (["section-00-intro-glossary.html"],
     "sec0", "0", "Introduction & Glossary", "導論與術語", "p1-p7"),
    (["section-01a-rabs-design.html", "section-01b-rabs-design.html"],
     "sec1", "1", "RABS Design", "RABS設計", "p8-p33"),
    (["section-02-physical-environment.html"],
     "sec2", "2", "Physical Environment", "物理環境", "p34-p40"),
    (["section-03-personnel.html"],
     "sec3", "3", "Personnel", "人員", "p41-p47"),
    (["section-04-glove-integrity.html"],
     "sec4", "4", "Glove Integrity", "手套完整性", "p48-p59"),
    (["section-05-environmental-monitoring.html"],
     "sec5", "5", "Environmental Monitoring", "環境監控", "p60-p72"),
    (["section-06-material-transport.html"],
     "sec6", "6", "Material Transport", "物料傳輸", "p73-p83"),
    (["section-07-cycle-development.html"],
     "sec7", "7", "Cycle Development", "週期開發", "p84-p89"),
    (["section-08-aps.html"],
     "sec8", "8", "Aseptic Process Simulation", "無菌製程模擬", "p90-p94"),
    (["section-09-best-practices.html"],
     "sec9", "9", "Best Practices & References", "最佳實務與參考", "p95-p115"),
]

if __name__ == '__main__':
    run_merge(
        section_map=SECTION_MAP,
        report_title_en="PDA Points to Consider No. 12 (2025)",
        report_subtitle_en="Restricted Access Barrier Systems",
        report_subtitle_zh="限制進出屏障系統 完整教學版",
        output_filename="PtC-12-Complete.html",
        footer_text="PDA Points to Consider No. 12 (2025): Restricted Access Barrier Systems",
        chapter_label="Topic",
        base_dir=os.path.dirname(os.path.abspath(__file__)),
    )
