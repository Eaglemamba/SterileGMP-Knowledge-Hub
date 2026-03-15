#!/usr/bin/env python3
"""
merge_engine.py — Shared merge library for PDA Technical Report Knowledge
=========================================================================
Import this module in any report's merge.py to avoid code duplication.

Usage in a report's merge.py:
    from merge_engine import extract_body_content, load_css, build_nav_html, run_merge

    SECTION_MAP = [...]
    if __name__ == '__main__':
        run_merge(
            section_map=SECTION_MAP,
            report_title_en="PDA TR26 (Revised 2025)",
            report_subtitle_en="Sterilizing Filtration of Liquids",
            report_subtitle_zh="液體除菌過濾 完整教學版",
            output_filename="TR26-Complete.html",
            footer_text="PDA Technical Report No. 26 (Revised 2025): Sterilizing Filtration of Liquids",
            chapter_label="Section",
        )
"""

import os
import re


# ============================================================
# BODY CONTENT EXTRACTOR
# ============================================================

def extract_body_content(html_content: str) -> str:
    """Extract content between body tags, stripping header/style/wrappers."""
    body_match = re.search(r'<body[^>]*>(.*?)</body>', html_content, re.DOTALL)
    if not body_match:
        return html_content
    body_content = body_match.group(1).strip()
    body_content = re.sub(
        r'<div\s+class="header">.*?</div>\s*',
        '', body_content, count=1, flags=re.DOTALL
    )
    body_content = re.sub(r'<footer[^>]*>.*?</footer>', '', body_content, flags=re.DOTALL)
    body_content = re.sub(r'<div\s+class="main-container"[^>]*>', '', body_content)
    body_content = re.sub(r'</div>\s*<!--\s*end\s+main-container\s*-->', '', body_content)
    return body_content.strip()


# ============================================================
# CSS LOADER
# ============================================================

def load_css(css_path: str) -> str:
    if os.path.exists(css_path):
        with open(css_path, 'r', encoding='utf-8') as f:
            return f.read()
    print(f"[WARNING] CSS not found: {css_path}")
    return ""


# ============================================================
# NAV HTML BUILDER
# ============================================================

def build_nav_html(section_map: list, available: set) -> str:
    """Build nav items HTML from section_map, only for available sections."""
    items = []
    for _, nav_id, nav_num, label_en, _, _ in section_map:
        if nav_id in available:
            items.append(
                f'            <a href="#{nav_id}" class="nav-item" data-section="{nav_id}">\n'
                f'                <span class="nav-num">{nav_num}</span>\n'
                f'                <span class="nav-label">{label_en}</span>\n'
                f'            </a>'
            )
    return '\n'.join(items)


# ============================================================
# STANDARD JS BLOCK
# ============================================================

STANDARD_JS = """    <script>
    document.addEventListener('DOMContentLoaded', function() {
        const sections = document.querySelectorAll('.chapter-section');
        const navItems = document.querySelectorAll('.nav-item');
        const backToTop = document.getElementById('backToTop');
        const navContainer = document.getElementById('navContainer');
        const btnLeft = document.getElementById('navScrollLeft');
        const btnRight = document.getElementById('navScrollRight');

        function updateNavArrows() {
            btnLeft.classList.toggle('hidden', navContainer.scrollLeft <= 0);
            btnRight.classList.toggle('hidden',
                navContainer.scrollLeft + navContainer.clientWidth >= navContainer.scrollWidth - 1);
        }
        btnLeft.addEventListener('click', function() {
            navContainer.scrollBy({ left: -300, behavior: 'smooth' });
        });
        btnRight.addEventListener('click', function() {
            navContainer.scrollBy({ left: 300, behavior: 'smooth' });
        });
        navContainer.addEventListener('scroll', updateNavArrows);
        updateNavArrows();

        window.addEventListener('scroll', function() {
            if (window.scrollY > 300) {
                backToTop.classList.add('visible');
            } else {
                backToTop.classList.remove('visible');
            }

            let current = '';
            sections.forEach(function(section) {
                const sectionTop = section.offsetTop - 100;
                if (window.scrollY >= sectionTop) {
                    current = section.getAttribute('id');
                }
            });

            navItems.forEach(function(item) {
                item.classList.remove('active');
                if (item.getAttribute('data-section') === current) {
                    item.classList.add('active');
                    item.scrollIntoView({ block: 'nearest', inline: 'nearest' });
                }
            });
        });
    });
    </script>"""


# ============================================================
# MERGE ENGINE
# ============================================================

def run_merge(
    section_map: list,
    report_title_en: str,
    report_subtitle_en: str,
    report_subtitle_zh: str,
    output_filename: str,
    footer_text: str,
    chapter_label: str = "Section",
    base_dir: str = None,
):
    """
    Run the full merge pipeline.

    Args:
        section_map: List of tuples (files, nav_id, nav_num, label_en, label_zh, pages)
        report_title_en: Title shown in the header <h1>
        report_subtitle_en: English subtitle shown in header <p>
        report_subtitle_zh: Chinese subtitle appended to English
        output_filename: e.g. "TR26-Complete.html"
        footer_text: Full citation line in the footer
        chapter_label: "Section" or "Topic" (default: Section)
        base_dir: Absolute path of the calling script's directory. Pass
                  os.path.dirname(os.path.abspath(__file__)) from the caller.
    """
    if base_dir is None:
        raise ValueError("base_dir must be provided. Pass os.path.dirname(os.path.abspath(__file__))")

    sections_dir = os.path.join(base_dir, 'sections')
    css_path = os.path.join(base_dir, '..', 'template.css')
    output_dir = os.path.join(base_dir, 'output')
    output_path = os.path.join(output_dir, output_filename)

    print("=" * 60)
    print(f"Merging: {output_filename}")
    print("=" * 60)

    css_content = load_css(css_path)
    print(f"[INFO] CSS loaded: {len(css_content)} chars")

    available_nav_ids = set()
    chapter_sections = []
    missing_files = []

    for files, nav_id, nav_num, label_en, label_zh, pages in section_map:
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
                missing_files.append(filename)

        if not combined_content:
            print(f"  [SKIP] {chapter_label} {nav_num} — no files found")
            continue

        available_nav_ids.add(nav_id)
        page_info = f" | {pages}" if pages else ""

        chapter_html = f'''
    <!-- ========== {chapter_label} {nav_num}: {label_en} ========== -->
    <section class="chapter-section" id="{nav_id}">
        <div class="chapter-divider">
            <div class="chapter-badge">{nav_num}</div>
            <div class="chapter-info">
                <h2>{chapter_label} {nav_num}: {label_en}</h2>
                <p>{label_zh}{page_info}</p>
            </div>
        </div>
        <div class="chapter-body">
            {''.join(combined_content)}
        </div>
    </section>
'''
        chapter_sections.append(chapter_html)

    nav_html = build_nav_html(section_map, available_nav_ids)

    final_html = f'''<!DOCTYPE html>
<html lang="zh-TW">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>{report_title_en} - {report_subtitle_en}</title>
    <style>
{css_content}
    </style>
</head>
<body>

    <header class="top-header">
        <div class="header-brand">
            <h1>{report_title_en}</h1>
            <p class="subtitle">{report_subtitle_en} | {report_subtitle_zh}</p>
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
        <p>{footer_text}</p>
        <p>Educational Material — 教學用途 | 本文件僅供學習參考</p>
        <p>Generated by Claude Code Automation Pipeline</p>
    </footer>

    <button class="back-to-top" id="backToTop" onclick="window.scrollTo({{top:0,behavior:'smooth'}})">&#8679;</button>

{STANDARD_JS}

</body>
</html>'''

    os.makedirs(output_dir, exist_ok=True)
    with open(output_path, 'w', encoding='utf-8') as f:
        f.write(final_html)

    size_mb = os.path.getsize(output_path) / (1024 * 1024)
    print("\n" + "=" * 60)
    print(f"[SUCCESS] {output_filename}")
    print(f"  Output: {output_path}")
    print(f"  Size: {size_mb:.2f} MB")
    print(f"  Sections: {len(chapter_sections)}")
    if missing_files:
        print(f"\n  [WARNING] Missing files ({len(missing_files)}):")
        for s in missing_files:
            print(f"    - {s}")
    print("=" * 60)
