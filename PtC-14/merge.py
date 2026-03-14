#!/usr/bin/env python3
"""
PDA Points to Consider No. 14 — Educational Material Merger
============================================================
Usage:
    cd PtC-14/
    python3 merge.py
"""

import os
import re

# ============================================================
# CONFIGURATION — PtC-14: Manufacturing of ATMPs – Facility Design
# ============================================================

SECTION_MAP = [
    (["section-00-intro-abbrev.html"],
     "sec0", "0", "Intro & Abbreviations", "導論與縮寫", "p6-p9"),

    (["section-01-risk-management.html"],
     "sec1", "1", "Risk Management", "風險管理", "p10-p14"),

    (["section-02-facilities.html"],
     "sec2", "2", "Facilities", "設施設計", "p15-p24"),

    (["section-03-utilities.html"],
     "sec3", "3", "Utilities", "公用設施", "p25-p28"),

    (["section-04a-process-equipment.html", "section-04b-process-equipment.html"],
     "sec4", "4", "Process Equipment", "製程設備", "p29-p41"),

    (["section-05-supplementary.html"],
     "sec5", "5", "Supplementary Info", "補充技術資訊", "p42-p55"),
]


def extract_body_content(html_content: str) -> str:
    body_match = re.search(r'<body[^>]*>(.*?)</body>', html_content, re.DOTALL)
    if not body_match:
        return html_content
    body_content = body_match.group(1).strip()
    body_content = re.sub(r'<div\s+class="header">.*?</div>\s*', '', body_content, count=1, flags=re.DOTALL)
    body_content = re.sub(r'<footer[^>]*>.*?</footer>', '', body_content, flags=re.DOTALL)
    body_content = re.sub(r'<div\s+class="main-container"[^>]*>', '', body_content)
    body_content = re.sub(r'</div>\s*<!--\s*end\s+main-container\s*-->', '', body_content)
    return body_content.strip()


def load_css(css_path: str) -> str:
    if os.path.exists(css_path):
        with open(css_path, 'r', encoding='utf-8') as f:
            return f.read()
    print(f"[WARNING] CSS not found: {css_path}")
    return ""


def build_nav_html(available: set) -> str:
    items = []
    for _, nav_id, nav_num, label_en, _, _ in SECTION_MAP:
        if nav_id in available:
            items.append(
                f'            <a href="#{nav_id}" class="nav-item" data-section="{nav_id}">\n'
                f'                <span class="nav-num">{nav_num}</span>\n'
                f'                <span class="nav-label">{label_en}</span>\n'
                f'            </a>'
            )
    return '\n'.join(items)


def merge():
    base_dir = os.path.dirname(os.path.abspath(__file__))
    sections_dir = os.path.join(base_dir, 'sections')
    css_path = os.path.join(base_dir, '..', 'template.css')
    output_dir = os.path.join(base_dir, 'output')
    output_path = os.path.join(output_dir, 'PtC-14-Complete.html')

    print("=" * 60)
    print("PDA PtC-14 Educational Material Merger")
    print("=" * 60)

    css_content = load_css(css_path)
    print(f"[INFO] CSS loaded: {len(css_content)} chars")

    available_nav_ids = set()
    chapter_sections = []
    missing_sections = []

    for files, nav_id, nav_num, label_en, label_zh, pages in SECTION_MAP:
        combined_content = []
        for filename in files:
            filepath = os.path.join(sections_dir, filename)
            if os.path.exists(filepath):
                with open(filepath, 'r', encoding='utf-8') as f:
                    html = f.read()
                body = extract_body_content(html)
                combined_content.append(body)
                print(f"  [OK] {filename} ({len(body)} chars)")
            else:
                print(f"  [MISSING] {filename}")
                missing_sections.append(filename)

        if not combined_content:
            print(f"  [SKIP] Section {nav_num} — no files found")
            continue

        available_nav_ids.add(nav_id)
        page_info = f" | {pages}" if pages else ""

        chapter_html = f'''
    <!-- ========== Topic {nav_num}: {label_en} ========== -->
    <section class="chapter-section" id="{nav_id}">
        <div class="chapter-divider">
            <div class="chapter-badge">{nav_num}</div>
            <div class="chapter-info">
                <h2>Topic {nav_num}: {label_en}</h2>
                <p>{label_zh}{page_info}</p>
            </div>
        </div>
        <div class="chapter-body">
            {''.join(combined_content)}
        </div>
    </section>
'''
        chapter_sections.append(chapter_html)

    nav_html = build_nav_html(available_nav_ids)

    final_html = f'''<!DOCTYPE html>
<html lang="zh-TW">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>PDA Points to Consider No. 14 — Manufacturing of ATMPs: Facility Design (2025)</title>
    <style>
{css_content}
    </style>
</head>
<body>

    <header class="top-header">
        <div class="header-brand">
            <h1>PDA Points to Consider No. 14 (2025)</h1>
            <p class="subtitle">Manufacturing of ATMPs – Facility Design (Part 1) | ATMP製造設施設計 完整教學版</p>
        </div>
    </header>

    <nav class="top-nav" id="topNav">
        <button class="nav-scroll-btn hidden" id="navScrollLeft">&#8249;</button>
        <div class="nav-container" id="navContainer">
{nav_html}
        </div>
        <button class="nav-scroll-btn" id="navScrollRight">&#8250;</button>
    </nav>

<main class="main-content">
{''.join(chapter_sections)}
</main>

    <footer class="main-footer">
        <p>PDA Points to Consider No. 14 (2025): Manufacturing of ATMPs – Facility Design</p>
        <p>Educational Material — 教學用途 | 本文件僅供學習參考</p>
        <p>Generated by Claude Code Automation Pipeline</p>
    </footer>

    <button class="back-to-top" id="backToTop" onclick="window.scrollTo({{top:0,behavior:'smooth'}})">&#8679;</button>

    <script>
    document.addEventListener('DOMContentLoaded', function() {{
        const sections = document.querySelectorAll('.chapter-section');
        const navItems = document.querySelectorAll('.nav-item');
        const backToTop = document.getElementById('backToTop');
        const navContainer = document.getElementById('navContainer');
        const btnLeft = document.getElementById('navScrollLeft');
        const btnRight = document.getElementById('navScrollRight');

        function updateNavArrows() {{
            btnLeft.classList.toggle('hidden', navContainer.scrollLeft <= 0);
            btnRight.classList.toggle('hidden',
                navContainer.scrollLeft + navContainer.clientWidth >= navContainer.scrollWidth - 1);
        }}
        btnLeft.addEventListener('click', function() {{
            navContainer.scrollBy({{ left: -300, behavior: 'smooth' }});
        }});
        btnRight.addEventListener('click', function() {{
            navContainer.scrollBy({{ left: 300, behavior: 'smooth' }});
        }});
        navContainer.addEventListener('scroll', updateNavArrows);
        updateNavArrows();

        window.addEventListener('scroll', function() {{
            if (window.scrollY > 300) {{
                backToTop.classList.add('visible');
            }} else {{
                backToTop.classList.remove('visible');
            }}

            let current = '';
            sections.forEach(function(section) {{
                const sectionTop = section.offsetTop - 100;
                if (window.scrollY >= sectionTop) {{
                    current = section.getAttribute('id');
                }}
            }});

            navItems.forEach(function(item) {{
                item.classList.remove('active');
                if (item.getAttribute('data-section') === current) {{
                    item.classList.add('active');
                    item.scrollIntoView({{ block: 'nearest', inline: 'nearest' }});
                }}
            }});
        }});
    }});
    </script>

</body>
</html>'''

    os.makedirs(output_dir, exist_ok=True)
    with open(output_path, 'w', encoding='utf-8') as f:
        f.write(final_html)

    size_mb = os.path.getsize(output_path) / (1024 * 1024)
    print("\n" + "=" * 60)
    print(f"[SUCCESS] Merged document created!")
    print(f"  Output: {output_path}")
    print(f"  Size: {size_mb:.2f} MB")
    print(f"  Sections included: {len(chapter_sections)}")
    if missing_sections:
        print(f"\n  [WARNING] Missing files ({len(missing_sections)}):")
        for s in missing_sections:
            print(f"    - {s}")
    print("=" * 60)


if __name__ == '__main__':
    merge()
