#!/usr/bin/env python3
"""
PDA Manufacturing Technology Guide No. 1 — Educational Material Merger
=======================================================================
Combines individual section HTML files into a single TopNav document.

Usage:
    cd pda-guide-no1/
    python3 merge.py
"""

import os
import re

# ============================================================
# CONFIGURATION — PDA Guide No. 1: Aseptic Filling (2025)
# ============================================================

# Each entry: (list_of_files, nav_id, nav_num, nav_label_en, nav_label_zh, page_range)
SECTION_MAP = [
    (["section-00-intro-glossary.html"],
     "sec0", "0", "Intro & Glossary", "導論與術語", "p1-p7"),

    (["section-01a-design.html",
      "section-01b-design.html"],
     "sec1", "1", "Design Elements", "設計要素", "p8-p25"),

    (["section-02a1-filling-pp.html",
      "section-02a2-filling-pp.html"],
     "sec2a", "2A", "Peristaltic Pump", "蠕動泵", "p26-p41"),

    (["section-02b-filling-rpp.html"],
     "sec2b", "2B", "Rotary Piston Pump", "旋轉活塞泵", "p42-p53"),

    (["section-02c-filling-tp-dp.html"],
     "sec2c", "2C", "TP & DP + Needle", "時壓/膜片+針頭", "p54-p70"),

    (["section-04a1-functionality.html",
      "section-04a2-functionality.html"],
     "sec4a", "4A", "Functionality I", "功能性 (上)", "p71-p86"),

    (["section-04b1-functionality.html",
      "section-04b2-functionality.html"],
     "sec4b", "4B", "Functionality II", "功能性 (下)", "p87-p100"),

    (["section-05a-dose-control.html",
      "section-05b-dose-control.html"],
     "sec5", "5", "Dose Control", "劑量管控", "p101-p114"),

    (["section-06-container-closure.html"],
     "sec6", "6", "Container-Closure", "容器封閉系統", "p114-p118"),

    (["section-07a-closing-systems.html",
      "section-07b-closing-systems.html"],
     "sec7", "7", "Closing Systems", "封閉系統", "p118-p133"),

    (["section-08a-operational.html",
      "section-08b-operational.html",
      "section-08c-operational.html"],
     "sec8", "8", "Operational", "操作考量", "p134-p152"),

    (["section-09-component-intro.html"],
     "sec9", "9", "Component Intro", "元件導入", "p152-p161"),

    (["section-10-sterilization.html"],
     "sec10", "10", "Sterilization", "滅菌準備", "p161-p167"),

    (["section-11a-sterile-fluid.html",
      "section-11b-sterile-fluid.html"],
     "sec11", "11", "Sterile Fluid Path", "無菌液體路徑", "p167-p181"),

    (["section-12-batch-setup.html"],
     "sec12", "12", "Batch Setup", "批次設置與丟棄", "p181-p189"),

    (["section-13-aps.html"],
     "sec13", "13", "APS / Media Fill", "無菌模擬", "p189-p195"),

    (["section-14-15-powder-auger.html"],
     "sec14", "14-15", "Powder & Auger", "粉末/螺旋充填", "p196-p205"),

    (["section-16-vacuum-filling.html"],
     "sec16", "16", "Vacuum Powder", "真空粉末充填", "p205-p210"),

    (["section-17-18-powder-func-dose.html"],
     "sec17", "17-19", "Powder Func & Dose", "粉末功能與劑量", "p210-p221"),

    (["section-21a-case-studies.html",
      "section-21b-case-studies.html"],
     "sec21", "21", "Case Studies", "案例研究", "p225-p267"),
]


# ============================================================
# BODY CONTENT EXTRACTOR
# ============================================================

def extract_body_content(html_content: str) -> str:
    """Extract content between body tags, stripping header/style/wrappers."""
    body_match = re.search(r'<body[^>]*>(.*?)</body>', html_content, re.DOTALL)
    if not body_match:
        return html_content

    body_content = body_match.group(1).strip()

    # Remove the top header div
    body_content = re.sub(
        r'<div\s+class="header">.*?</div>\s*',
        '', body_content, count=1, flags=re.DOTALL
    )

    # Remove top-header (alternative class name)
    body_content = re.sub(
        r'<div\s+class="top-header">.*?</div>\s*',
        '', body_content, count=1, flags=re.DOTALL
    )

    # Remove footer
    body_content = re.sub(
        r'<footer[^>]*>.*?</footer>', '', body_content, flags=re.DOTALL
    )
    body_content = re.sub(
        r'<div\s+class="main-footer"[^>]*>.*?</div>\s*',
        '', body_content, flags=re.DOTALL
    )

    # Remove back-to-top button (each section has one; merged doc has its own)
    body_content = re.sub(
        r'<button[^>]*class="back-to-top"[^>]*>.*?</button>',
        '', body_content, flags=re.DOTALL
    )

    # Remove inline scroll scripts (merged doc has its own)
    body_content = re.sub(
        r'<script>.*?</script>',
        '', body_content, flags=re.DOTALL
    )

    # Remove outer main-container div tags (keep inner content)
    body_content = re.sub(
        r'<div\s+class="main-container"[^>]*>', '', body_content
    )
    body_content = re.sub(
        r'<div\s+class="main-content"[^>]*>', '', body_content
    )
    # Remove the matching closing comment
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
    base_dir = os.path.dirname(os.path.abspath(__file__))
    sections_dir = os.path.join(base_dir, 'sections')
    css_path = os.path.join(base_dir, '..', 'template.css')
    output_dir = os.path.join(base_dir, 'output')
    output_path = os.path.join(output_dir, 'Guide-No1-Complete.html')

    print("=" * 60)
    print("PDA Guide No. 1 — Educational Material Merger")
    print("=" * 60)

    css_content = load_css(css_path)
    print(f"[INFO] CSS loaded: {len(css_content)} chars")

    available_nav_ids = set()
    chapter_sections = []
    missing_sections = []

    for files, nav_id, nav_num, label_en, label_zh, pages in SECTION_MAP:
        combined_content = []
        all_found = True

        for filename in files:
            filepath = os.path.join(sections_dir, filename)
            if os.path.exists(filepath):
                with open(filepath, 'r', encoding='utf-8') as f:
                    html = f.read()
                body = extract_body_content(html)
                combined_content.append(body)
                print(f"  [OK] {filename} ({len(body):,} chars)")
            else:
                print(f"  [MISSING] {filename}")
                all_found = False
                missing_sections.append(filename)

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
    <title>PDA Manufacturing Technology Guide No. 1 — Aseptic Filling, Engineering, and Operation (2025)</title>
    <style>
{css_content}
    </style>
</head>
<body>

    <header class="top-header">
        <div class="header-brand">
            <h1>PDA Manufacturing Technology Guide No. 1 (2025)</h1>
            <p class="subtitle">Aseptic Filling, Engineering, and Operation | 無菌充填工程與操作 完整教學版</p>
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
        <p>PDA Manufacturing Technology Guide No. 1 (2025): Aseptic Filling, Engineering, and Operation</p>
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

        // Nav scroll arrows
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
                    // Scroll active item into view within nav
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
        for f in missing_sections:
            print(f"    - {f}")
    print("=" * 60)


if __name__ == '__main__':
    merge()
