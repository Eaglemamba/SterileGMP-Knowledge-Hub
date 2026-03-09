#!/usr/bin/env python3
"""
PDA Educational Material Merger
================================
Combines individual section HTML files into a single TopNav document.

Usage:
    python3 merge.py
    python3 merge.py --sections-dir ./sections --output ./output/PDA-Guide-Complete.html
    python3 merge.py --css ./template.css
"""

import os
import re
import argparse
from pathlib import Path
from html.parser import HTMLParser


# ============================================================
# CONFIGURATION
# ============================================================

SECTION_MAP = [
    # (file_pattern, nav_id, nav_num, nav_label_en, nav_label_zh, page_range)
    ("section-00", "intro",  "0",  "Introduction",     "導論與術語表",   "p1-p7"),
    ("section-01", "sec1",   "1",  "Design Elements",  "設計要素",       "p8-p28"),
    ("section-02", "sec2",   "2",  "Technologies",     "充填技術",       "p29-p62"),
    ("section-03", "sec3",   "3",  "Needle Designs",   "針頭設計",       "p63-p69"),
    ("section-04", "sec4",   "4",  "Functionality",    "系統功能",       "p70-p100"),
    ("section-05", "sec5",   "5",  "Dose Control",     "劑量控制",       "p101-p114"),
    ("section-06", "sec6",   "6",  "Container-Closure","容器密封",       "p115-p117"),
    ("section-07", "sec7",   "7",  "Closing Systems",  "封蓋系統",       "p118-p128"),
    ("section-08", "sec8",   "8",  "Interventions",    "介入操作",       "p129-p148"),
    ("section-09", "sec9",   "9",  "Components",       "組件導入",       "p149-p158"),
    ("section-10", "sec10",  "10", "Sterilization",    "滅菌系統",       "p159-p167"),
    ("section-11", "sec11",  "11", "Fluid Pathway",    "流體路徑",       "p168-p178"),
    ("section-12", "sec12",  "12", "Operations",       "營運操作",       "p179-p190"),
    ("section-13", "sec13",  "13", "APS / Media Fills","無菌模擬",       "p191-p198"),
    ("section-14", "sec14",  "14", "Env. Monitoring",  "環境監控",       "p199-p204"),
    ("section-15", "sec15",  "15", "Contamination",    "污染控制",       "p205-p208"),
    ("section-16", "sec16",  "16", "Supplier Mgmt",    "供應商管理",     "p209-p211"),
    ("section-17", "sec17",  "17", "Validation",       "驗證",           "p212-p214"),
    ("section-18", "sec18",  "18", "Maintenance",      "維護保養",       "p215-p217"),
    ("section-19", "sec19",  "19", "Powder Filling",   "粉末充填",       "p218-p221"),
    ("section-20", "sec20",  "20", "References",       "參考文獻",       "p222-p225"),
    ("section-21", "sec21",  "21", "Case Studies",     "案例研究",       "p226-p240"),
    ("section-22", "sec22",  "22", "Vendors",          "廠商資源",       "p241-p250"),
]


# ============================================================
# BODY CONTENT EXTRACTOR
# ============================================================

def extract_body_content(html_content: str) -> str:
    """
    Extract content between the header and footer of a section HTML.
    Strips <html>, <head>, <style>, <body> wrappers and the section header/footer.
    Returns the inner content suitable for embedding in a chapter-section.
    """
    # Strategy 1: Extract content between <div class="main-container"> tags
    match = re.search(
        r'<div\s+class="main-container"[^>]*>(.*?)</div>\s*(?:<footer|</body>|$)',
        html_content,
        re.DOTALL
    )
    if match:
        return match.group(1).strip()
    
    # Strategy 2: Extract everything inside <body> minus header and footer
    body_match = re.search(r'<body[^>]*>(.*?)</body>', html_content, re.DOTALL)
    if not body_match:
        # Strategy 3: If no body tags, try to find content between header and footer
        return html_content
    
    body_content = body_match.group(1).strip()
    
    # Remove the header div
    body_content = re.sub(
        r'<div\s+class="header">.*?</div>\s*',
        '',
        body_content,
        count=1,
        flags=re.DOTALL
    )
    
    # Remove footer
    body_content = re.sub(
        r'<footer[^>]*>.*?</footer>',
        '',
        body_content,
        flags=re.DOTALL
    )
    
    # Remove outer main-container wrapper if present
    body_content = re.sub(
        r'^\s*<div\s+class="main-container"[^>]*>\s*',
        '',
        body_content
    )
    body_content = re.sub(
        r'\s*</div>\s*$',
        '',
        body_content
    )
    
    return body_content.strip()


def extract_section_title(html_content: str) -> tuple:
    """Extract the English title and Chinese subtitle from the section header."""
    h1_match = re.search(r'<h1[^>]*>(.*?)</h1>', html_content)
    subtitle_match = re.search(r'class="subtitle"[^>]*>(.*?)</div>', html_content)
    
    en_title = h1_match.group(1).strip() if h1_match else "Untitled Section"
    zh_title = subtitle_match.group(1).strip() if subtitle_match else ""
    
    return en_title, zh_title


# ============================================================
# MERGE ENGINE
# ============================================================

def find_section_files(sections_dir: str) -> dict:
    """Find and map section files to their identifiers."""
    section_files = {}
    for entry in sorted(os.listdir(sections_dir)):
        if entry.endswith('.html'):
            filepath = os.path.join(sections_dir, entry)
            for pattern, nav_id, *_ in SECTION_MAP:
                if entry.startswith(pattern):
                    section_files[pattern] = filepath
                    break
    return section_files


def load_css(css_path: str) -> str:
    """Load the shared CSS template."""
    if os.path.exists(css_path):
        with open(css_path, 'r', encoding='utf-8') as f:
            return f.read()
    print(f"[WARNING] CSS file not found: {css_path}")
    return "/* CSS not found - using defaults */"


def build_nav_html(available_sections: set) -> str:
    """Generate the top navigation bar HTML."""
    nav_items = []
    for pattern, nav_id, nav_num, label_en, label_zh, pages in SECTION_MAP:
        if pattern in available_sections:
            nav_items.append(
                f'            <a href="#{nav_id}" class="nav-item" data-section="{nav_id}">\n'
                f'                <span class="nav-num">{nav_num}</span>\n'
                f'                <span class="nav-label">{label_en}</span>\n'
                f'            </a>'
            )
    return '\n'.join(nav_items)


def build_chapter_section(pattern: str, html_content: str) -> str:
    """Wrap section content in the chapter-section structure."""
    # Find the matching section config
    config = None
    for entry in SECTION_MAP:
        if entry[0] == pattern:
            config = entry
            break
    
    if not config:
        return f"<!-- Unknown section: {pattern} -->"
    
    _, nav_id, nav_num, label_en, label_zh, pages = config
    
    # Extract body content (strip header/footer/css)
    body_content = extract_body_content(html_content)
    
    return f'''
    <!-- ========== Chapter {nav_num}: {label_en} ========== -->
    <section class="chapter-section" id="{nav_id}">
        <div class="chapter-divider">
            <div class="chapter-badge">{nav_num}</div>
            <div class="chapter-info">
                <h2>Section {nav_num}: {label_en}</h2>
                <p>{label_zh} | {pages}</p>
            </div>
        </div>
        <div class="chapter-body">
            {body_content}
        </div>
    </section>
'''


def merge(sections_dir: str, css_path: str, output_path: str):
    """Main merge function."""
    
    print("=" * 60)
    print("PDA Educational Material Merger")
    print("=" * 60)
    
    # 1. Find available section files
    section_files = find_section_files(sections_dir)
    print(f"\n[INFO] Found {len(section_files)} section files:")
    for pattern, filepath in sorted(section_files.items()):
        print(f"  - {os.path.basename(filepath)}")
    
    if not section_files:
        print("\n[ERROR] No section files found! Check the sections directory.")
        return
    
    # 2. Load CSS
    css_content = load_css(css_path)
    print(f"\n[INFO] CSS loaded: {len(css_content)} characters")
    
    # 3. Build navigation
    nav_html = build_nav_html(set(section_files.keys()))
    
    # 4. Build chapter sections
    chapter_sections = []
    for pattern, nav_id, *_ in SECTION_MAP:
        if pattern in section_files:
            filepath = section_files[pattern]
            print(f"\n[PROCESSING] {os.path.basename(filepath)}...")
            with open(filepath, 'r', encoding='utf-8') as f:
                html_content = f.read()
            
            chapter_html = build_chapter_section(pattern, html_content)
            chapter_sections.append(chapter_html)
            print(f"  -> Extracted {len(chapter_html)} characters")
    
    # 5. Assemble final document
    final_html = f'''<!DOCTYPE html>
<html lang="zh-TW">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>PDA Guide No.1 Aseptic Filling - 完整教學文件 (2025)</title>
    <style>
{css_content}
    </style>
</head>
<body>

    <header class="top-header">
        <div class="header-brand">
            <h1>PDA Manufacturing Technology Guide No. 1</h1>
            <p class="subtitle">Aseptic Filling, Engineering & Operation (2025) | 無菌充填技術指引 完整教學版</p>
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
        <p>PDA Manufacturing Technology Guide No. 1: Aseptic Filling, Engineering & Operation (2025)</p>
        <p>Educational Material - 教學用途 | 本文件僅供學習參考</p>
        <p>Generated by Claude Code Automation Pipeline</p>
    </footer>

    <button class="back-to-top" id="backToTop" onclick="window.scrollTo({{top:0,behavior:'smooth'}})">&#8593;</button>

    <script>
    // Sticky navigation highlighting
    document.addEventListener('DOMContentLoaded', function() {{
        const sections = document.querySelectorAll('.chapter-section');
        const navItems = document.querySelectorAll('.nav-item');
        const backToTop = document.getElementById('backToTop');
        
        // Back to top visibility
        window.addEventListener('scroll', function() {{
            if (window.scrollY > 300) {{
                backToTop.classList.add('visible');
            }} else {{
                backToTop.classList.remove('visible');
            }}
            
            // Highlight active nav item
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

    # 6. Write output
    os.makedirs(os.path.dirname(output_path), exist_ok=True)
    with open(output_path, 'w', encoding='utf-8') as f:
        f.write(final_html)
    
    file_size_mb = os.path.getsize(output_path) / (1024 * 1024)
    
    print("\n" + "=" * 60)
    print(f"[SUCCESS] Merged document created!")
    print(f"  Output: {output_path}")
    print(f"  Size: {file_size_mb:.2f} MB")
    print(f"  Sections: {len(chapter_sections)}")
    print("=" * 60)


# ============================================================
# CLI
# ============================================================

def main():
    parser = argparse.ArgumentParser(
        description="Merge PDA educational section HTMLs into a single TopNav document"
    )
    parser.add_argument(
        '--sections-dir', '-s',
        default='./sections',
        help='Directory containing section HTML files (default: ./sections)'
    )
    parser.add_argument(
        '--css', '-c',
        default='./template.css',
        help='Path to shared CSS file (default: ./template.css)'
    )
    parser.add_argument(
        '--output', '-o',
        default='./output/PDA-Guide-Complete.html',
        help='Output file path (default: ./output/PDA-Guide-Complete.html)'
    )
    
    args = parser.parse_args()
    merge(args.sections_dir, args.css, args.output)


if __name__ == '__main__':
    main()
