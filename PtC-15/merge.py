#!/usr/bin/env python3
"""
PDA Points to Consider No. 15 — Educational Material Merger
============================================================
Usage:
    cd PtC-15/
    python3 merge.py
"""

import os
import re

# ============================================================
# CONFIGURATION — PtC-15: Mobile Manufacturing
# ============================================================

SECTION_MAP = [
    (["section-00-intro-glossary.html"],
     "sec0", "0", "Intro & Glossary", "導論與術語", "p1-p4"),

    (["section-01-technology.html"],
     "sec1", "1", "Technology", "技術考量", "p5-p9"),

    (["section-02-03-regulatory-implementation.html"],
     "sec2", "2-3", "Regulatory & Implementation", "法規與實施", "p10-p16"),
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
    output_path = os.path.join(output_dir, 'PtC-15-Complete.html')

    print("=" * 60)
    print("PDA PtC-15 Educational Material Merger")
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
    <title>PDA Points to Consider No. 15 — Mobile Manufacturing (2025)</title>
    <style>
{css_content}
    </style>
</head>
<body>

    <header class="top-header">
        <div class="header-brand">
            <h1>PDA Points to Consider No. 15 (2025)</h1>
            <p class="subtitle">Mobile Manufacturing | 移動式製造 完整教學版</p>
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
        <p>PDA Points to Consider No. 15 (2025): Mobile Manufacturing</p>
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
