#!/usr/bin/env python3
"""
TR26 Educational Material Merger
=================================
Combines individual section HTML files into a single TopNav document.

Usage:
    cd TR26/
    python3 merge.py
"""

import os
import re

# ============================================================
# CONFIGURATION — TR26 Sterilizing Filtration of Liquids
# ============================================================

# Each entry: (list_of_files, nav_id, nav_num, nav_label_en, nav_label_zh, page_range)
SECTION_MAP = [
    (["section-01-introduction.html"],
     "sec1", "1", "Introduction", "導論", "p1-p5"),

    (["section-02-glossary.html"],
     "sec2", "2", "Glossary", "術語表", "p6-p10"),

    (["section-03-how-filters-work.html"],
     "sec3", "3", "How Filters Work", "濾膜原理", "p11-p16"),

    (["section-04-filter-qualification.html"],
     "sec4", "4", "Filter Qualification", "濾膜確效", "p17-p22"),

    (["section-05a-filtration-process.html",
      "section-05b-filtration-process.html"],
     "sec5", "5", "Process Design", "製程設計", "p23-p38"),

    (["section-06a-validation-testing.html",
      "section-06b1-validation-testing.html",
      "section-06b2-validation-testing.html"],
     "sec6", "6", "Validation", "驗證測試", "p39-p55"),

    (["section-07-integrity-testing.html"],
     "sec7", "7", "Integrity Testing", "完整性測試", "p56-p70"),

    (["section-08-sterilization-of-filters.html"],
     "sec8", "8", "Sterilization", "濾膜滅菌", "p71-p73"),

    (["section-10-appendix-diffusion.html"],
     "sec10", "A1", "Appendix I", "附錄一：擴散", ""),

    (["section-11-appendix-integrity-methods.html"],
     "sec11", "A2", "Appendix II", "附錄二：完整性方法", ""),

    (["section-12-appendix-troubleshooting.html"],
     "sec12", "A3", "Appendix III", "附錄三：疑難排解", ""),
]


# ============================================================
# BODY CONTENT EXTRACTOR
# ============================================================

def extract_body_content(html_content: str) -> str:
    """Extract content between body tags, stripping header/style/wrappers."""
    # Extract body
    body_match = re.search(r'<body[^>]*>(.*?)</body>', html_content, re.DOTALL)
    if not body_match:
        return html_content

    body_content = body_match.group(1).strip()

    # Remove the header div
    body_content = re.sub(
        r'<div\s+class="header">.*?</div>\s*',
        '', body_content, count=1, flags=re.DOTALL
    )

    # Remove learning-objectives (keep it — it's part of content)
    # Actually keep it, just remove the outer .header

    # Remove footer
    body_content = re.sub(
        r'<footer[^>]*>.*?</footer>', '', body_content, flags=re.DOTALL
    )

    # Remove outer main-container div tags (keep inner content)
    body_content = re.sub(
        r'<div\s+class="main-container"[^>]*>', '', body_content
    )
    # Remove the matching closing </div> at the end
    body_content = re.sub(
        r'</div>\s*<!--\s*end\s+main-container\s*-->', '', body_content
    )

    return body_content.strip()


# ============================================================
# MERGE ENGINE
# ============================================================

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
    sections_dir = os.path.join(os.path.dirname(__file__), 'sections')
    css_path = os.path.join(os.path.dirname(__file__), '..', 'template.css')
    output_dir = os.path.join(os.path.dirname(__file__), 'output')
    output_path = os.path.join(output_dir, 'TR26-Complete.html')

    print("=" * 60)
    print("TR26 Educational Material Merger")
    print("=" * 60)

    css_content = load_css(css_path)
    print(f"[INFO] CSS loaded: {len(css_content)} chars")

    available_nav_ids = set()
    chapter_sections = []

    for files, nav_id, nav_num, label_en, label_zh, pages in SECTION_MAP:
        # Collect content from all files for this section
        combined_content = []
        all_found = True

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
                all_found = False

        if not combined_content:
            print(f"  [SKIP] Section {nav_num} — no files found")
            continue

        available_nav_ids.add(nav_id)
        page_info = f" | {pages}" if pages else ""

        chapter_html = f'''
    <!-- ========== Chapter {nav_num}: {label_en} ========== -->
    <section class="chapter-section" id="{nav_id}">
        <div class="chapter-divider">
            <div class="chapter-badge">{nav_num}</div>
            <div class="chapter-info">
                <h2>Section {nav_num}: {label_en}</h2>
                <p>{label_zh}{page_info}</p>
            </div>
        </div>
        <div class="chapter-body">
            {''.join(combined_content)}
        </div>
    </section>
'''
        chapter_sections.append(chapter_html)

    # Build navigation
    nav_html = build_nav_html(available_nav_ids)

    # Assemble final document
    final_html = f'''<!DOCTYPE html>
<html lang="zh-TW">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>PDA TR26 - Sterilizing Filtration of Liquids - 完整教學文件 (Revised 2025)</title>
    <style>
{css_content}
    </style>
</head>
<body>

    <header class="top-header">
        <div class="header-brand">
            <h1>PDA Technical Report No. 26 (Revised 2025)</h1>
            <p class="subtitle">Sterilizing Filtration of Liquids | 液體除菌過濾 完整教學版</p>
        </div>
    </header>

    <nav class="top-nav" id="topNav">
        <div class="nav-container">
{nav_html}
        </div>
    </nav>

<main class="main-content">
{''.join(chapter_sections)}
</main>

    <footer class="main-footer">
        <p>PDA Technical Report No. 26 (Revised 2025): Sterilizing Filtration of Liquids</p>
        <p>Educational Material - 教學用途 | 本文件僅供學習參考</p>
        <p>Generated by Claude Code Automation Pipeline</p>
    </footer>

    <button class="back-to-top" id="backToTop" onclick="window.scrollTo({{top:0,behavior:'smooth'}})">&#8593;</button>

    <script>
    document.addEventListener('DOMContentLoaded', function() {{
        const sections = document.querySelectorAll('.chapter-section');
        const navItems = document.querySelectorAll('.nav-item');
        const backToTop = document.getElementById('backToTop');

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
    print(f"  Sections: {len(chapter_sections)}")
    print("=" * 60)


if __name__ == '__main__':
    merge()
