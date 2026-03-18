#!/usr/bin/env python3
"""TR66 Educational Material Merger"""
import os, sys
sys.path.insert(0, os.path.join(os.path.dirname(os.path.abspath(__file__)), '..'))
from merge_engine import run_merge

SECTION_MAP = [
    (["section-00-intro-glossary.html"],
     "sec0", "0", "Introduction & Glossary", "導論與術語", "p1-p3"),
    (["section-01-sus-strategy.html"],
     "sec1", "1", "SUS Manufacturing Strategy", "SUS製造策略", "p4-p14"),
    (["section-02a-sus-tech.html", "section-02b-sus-tech.html"],
     "sec2", "2", "SUS Technologies", "SUS技術與整合", "p15-p39"),
    (["section-03a-quality.html", "section-03b-quality.html"],
     "sec3", "3", "Quality Considerations", "品質考量", "p40-p60"),
    (["section-04-business.html"],
     "sec4", "4", "Business Drivers", "商業驅動因素", "p61-p69"),
    (["section-05a-implementation.html", "section-05b-implementation.html", "section-05c-implementation.html"],
     "sec5", "5", "Implementation Framework", "實施框架", "p70-p107"),
    (["section-06-appendix-urs.html"],
     "sec6", "A1", "Appendix: URS Example", "附錄：URS範例", "p108-p120"),
    (["section-07-appendix-pep.html"],
     "sec7", "A2", "Appendix: PEP Example", "附錄：PEP範例", "p121-p134"),
    (["section-08-appendix-refs.html"],
     "sec8", "A3", "Appendix: Training & Refs", "附錄：訓練與參考", "p135-p145"),
]

if __name__ == '__main__':
    run_merge(
        section_map=SECTION_MAP,
        report_title_en="PDA Technical Report No. 66 (2014)",
        report_subtitle_en="Application of Single-Use Systems in Pharmaceutical Manufacturing",
        report_subtitle_zh="一次性使用系統在藥品製造中的應用 完整教學版",
        output_filename="TR66-Complete.html",
        footer_text="PDA Technical Report No. 66 (2014): Application of Single-Use Systems in Pharmaceutical Manufacturing",
        chapter_label="Section",
        base_dir=os.path.dirname(os.path.abspath(__file__)),
    )
