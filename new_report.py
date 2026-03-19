#!/usr/bin/env python3
"""
new_report.py — Scaffold a new PDA Technical Report folder
===========================================================
Creates the standard folder structure and a pre-filled merge.py
for a new report, ready for section HTML files to be dropped in.

Usage:
    python3 new_report.py

Then fill in the prompts and the script will create:
    <REPORT_ID>/
    ├── sections/          # Drop section-XX-name.html files here
    ├── source/            # Drop extracted .txt files here
    ├── output/            # merge.py writes here automatically
    └── merge.py           # Pre-filled with your SECTION_MAP placeholder

Example:
    python3 new_report.py
    Report folder name (e.g. TR01, PtC-16): TR70
    Report full title EN: Lyophilization of Parenteral Products
    Report subtitle ZH:   凍乾注射劑 完整教學版
    Source type (TR / PtC / Guide): TR
    Source short name (for index.html, e.g. PDA TR70): PDA TR70
    Footer citation: PDA Technical Report No. 70: Lyophilization of Parenteral Products
"""

import os
import sys

BASE_DIR = os.path.dirname(os.path.abspath(__file__))

MERGE_PY_TEMPLATE = '''#!/usr/bin/env python3
"""
{report_id} Educational Material Merger
Usage:
    cd {report_id}/
    python3 merge.py
"""

import os
import sys
sys.path.insert(0, os.path.join(os.path.dirname(os.path.abspath(__file__)), '..'))
from merge_engine import run_merge

# ============================================================
# CONFIGURATION — {report_id}: {title_en}
# ============================================================

# Each entry: (list_of_files, nav_id, nav_num, nav_label_en, nav_label_zh, page_range)
# IMPORTANT: If a section might generate >1000 lines of HTML, split into a/b parts
SECTION_MAP = [
    # Example entries — replace with actual sections:
    # (["section-00-intro.html"],
    #  "sec0", "0", "Introduction", "導論", "p1-p5"),

    # (["section-01-topic.html"],
    #  "sec1", "1", "Topic One", "第一章", "p6-p15"),

    # (["section-02a-topic.html", "section-02b-topic.html"],
    #  "sec2", "2", "Topic Two (split)", "第二章（分段）", "p16-p30"),
]


if __name__ == '__main__':
    run_merge(
        section_map=SECTION_MAP,
        report_title_en="{title_en}",
        report_subtitle_en="{subtitle_en}",
        report_subtitle_zh="{subtitle_zh}",
        output_filename="{output_filename}",
        footer_text="{footer_text}",
        chapter_label="{chapter_label}",
        base_dir=os.path.dirname(os.path.abspath(__file__)),
    )
'''


def prompt(label: str, default: str = "") -> str:
    if default:
        val = input(f"  {label} [{default}]: ").strip()
        return val if val else default
    val = input(f"  {label}: ").strip()
    if not val:
        print(f"  [ERROR] {label} is required.")
        sys.exit(1)
    return val


def main():
    print("=" * 60)
    print("New PDA Report Scaffold")
    print("=" * 60)

    report_id = prompt("Report folder name (e.g. TR70, PtC-16)")
    title_en = prompt("Report full title EN (e.g. PDA Technical Report No. 70)")
    subtitle_en = prompt("Report subtitle EN (e.g. Lyophilization of Parenteral Products)")
    subtitle_zh = prompt("Report subtitle ZH (e.g. 凍乾注射劑 完整教學版)")
    chapter_label = prompt("Chapter label", default="Section")
    footer_text = prompt("Footer citation text", default=f"{title_en}: {subtitle_en}")
    output_filename = prompt("Output filename", default=f"{report_id}-Complete.html")

    # Create folder structure
    report_dir = os.path.join(BASE_DIR, report_id)
    for sub in ['sections', 'source', 'output']:
        os.makedirs(os.path.join(report_dir, sub), exist_ok=True)

    # Write merge.py
    merge_py_content = MERGE_PY_TEMPLATE.format(
        report_id=report_id,
        title_en=title_en,
        subtitle_en=subtitle_en,
        subtitle_zh=subtitle_zh,
        chapter_label=chapter_label,
        footer_text=footer_text,
        output_filename=output_filename,
    )
    merge_py_path = os.path.join(report_dir, 'merge.py')
    with open(merge_py_path, 'w', encoding='utf-8') as f:
        f.write(merge_py_content)

    print("\n" + "=" * 60)
    print(f"[SUCCESS] Scaffold created: {report_dir}/")
    print(f"  sections/  — drop section HTML files here")
    print(f"  source/    — drop extracted .txt files here")
    print(f"  output/    — merge.py writes {output_filename} here")
    print(f"  merge.py   — edit SECTION_MAP, then run: python3 {report_id}/merge.py")
    print("=" * 60)
    print("\nNext steps:")
    print(f"  1. Extract PDF text → {report_id}/source/")
    print(f"  2. Generate section HTMLs → {report_id}/sections/")
    print(f"  3. Edit SECTION_MAP in {report_id}/merge.py")
    print(f"  4. Run: python3 {report_id}/merge.py")
    print(f"     (auto-generates HTML + knowledge/{output_filename.replace('.html', '.md')})")
    print(f"  5. Update index.html with new document card")
    print(f"  6. Update knowledge/INDEX.md:")
    print(f"       - Add report block (topics, key terms, sections)")
    print(f"       - Add row to Quick Topic Routing Guide")
    print(f"       - Add to Cross-Report Topics where relevant")
    print("=" * 60)


if __name__ == '__main__':
    main()
