#!/usr/bin/env python3
"""Merge script for FDA-Aseptic 2004 guidance."""
import os, sys
sys.path.insert(0, os.path.join(os.path.dirname(os.path.abspath(__file__)), '..', '..'))
from merge_engine import run_merge

SECTION_MAP = [
    (
        ['section-01-intro-background-scope.html'],
        'sec01', '01', 'Introduction, Background & Scope',
        '導論、背景與範圍', 'pp. 1–7'
    ),
    (
        ['section-02-buildings-facilities.html'],
        'sec02', '02', 'Buildings & Facilities',
        '廠房與設施', 'pp. 4–11'
    ),
    (
        ['section-03-personnel-components-endotoxin.html'],
        'sec03', '03', 'Personnel, Components & Endotoxin Control',
        '人員、組件與內毒素管制', 'pp. 12–23'
    ),
    (
        ['section-04-validation-aseptic-sterilization.html'],
        'sec04', '04', 'Time Limitations & Validation',
        '時間限制與確效', 'pp. 20–30'
    ),
    (
        ['section-05-laboratory-controls.html'],
        'sec05', '05', 'Laboratory Controls',
        '實驗室管制', 'pp. 31–36'
    ),
    (
        ['section-06-sterility-testing-batch-records.html'],
        'sec06', '06', 'Sterility Testing & Batch Record Review',
        '無菌檢驗與批次記錄', 'pp. 37–43'
    ),
    (
        ['section-07-appendices-references-glossary.html'],
        'sec07', '07', 'Appendices, References & Glossary',
        '附錄、參考文獻與詞彙表', 'pp. 44–57'
    ),
]

if __name__ == '__main__':
    run_merge(
        section_map=SECTION_MAP,
        report_title_en='FDA Guidance for Industry',
        report_subtitle_en='Sterile Drug Products by Aseptic Processing — CGMP (2004)',
        report_subtitle_zh='無菌製程藥品 CGMP 指引',
        output_filename='FDA-Aseptic-Complete.html',
        footer_text='FDA Guidance for Industry: Sterile Drug Products Produced by Aseptic Processing — Current Good Manufacturing Practice (September 2004)',
        chapter_label='Section',
        base_dir=os.path.dirname(os.path.abspath(__file__)),
    )
