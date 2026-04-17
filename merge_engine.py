#!/usr/bin/env python3
"""
merge_engine.py — Shared merge library for SterileGMP Knowledge Hub
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
from html.parser import HTMLParser
from urllib.parse import unquote


# ============================================================
# BODY CONTENT EXTRACTOR
# ============================================================

def extract_body_content(html_content: str) -> str:
    """Extract content between body tags, stripping header/style/wrappers/chrome."""
    body_match = re.search(r'<body[^>]*>(.*?)</body>', html_content, re.DOTALL)
    if not body_match:
        return html_content
    body_content = body_match.group(1).strip()
    # Per-section header (div or header tag, may carry id="top" or other attrs)
    body_content = re.sub(
        r'<(?:div|header)\s+[^>]*class="header"[^>]*>.*?</(?:div|header)>\s*',
        '', body_content, count=1, flags=re.DOTALL
    )
    body_content = re.sub(r'<footer[^>]*>.*?</footer>', '', body_content, flags=re.DOTALL)
    body_content = re.sub(r'<div\s+class="main-container"[^>]*>', '', body_content)
    body_content = re.sub(r'</div>\s*<!--\s*end\s+main-container\s*-->', '', body_content)
    # Per-section back-to-top button (merge_engine emits one at document level — strip per-section copies)
    body_content = re.sub(
        r'<button\s+[^>]*id="backToTop"[^>]*>.*?</button>\s*',
        '', body_content, flags=re.DOTALL
    )
    # Per-section topNav chrome (merge_engine emits one set at document level).
    # Matches <nav id="topNav"> AND <nav class="top-nav">; may contain navContainer/navLeft/navRight/navScrollLeft/navScrollRight inside.
    body_content = re.sub(
        r'<nav\s+[^>]*(?:id="topNav"|class="top-nav")[^>]*>.*?</nav>\s*',
        '', body_content, flags=re.DOTALL
    )
    # Any per-section <script> blocks (merge_engine emits STANDARD_JS at document level)
    body_content = re.sub(r'<script[^>]*>.*?</script>\s*', '', body_content, flags=re.DOTALL)
    # Stray per-section TOC wrapper with id="toc" (author in-section TOC — drop its colliding id)
    body_content = re.sub(
        r'(<div\s+[^>]*?)\s+id="toc"',
        r'\1', body_content
    )
    return body_content.strip()


# ============================================================
# ID PREFIX REWRITER
# ============================================================

def _sanitize_prefix(raw: str) -> str:
    """Turn a filename or arbitrary string into a safe HTML id fragment."""
    stem = raw.rsplit('.', 1)[0]
    return re.sub(r'[^a-zA-Z0-9]+', '-', stem).strip('-')


def rewrite_ids_with_prefix(body: str, prefix: str) -> str:
    """Prefix every `id="X"` in `body` with `{prefix}-` and rewrite any local
    `href="#X"` that targets a renamed id accordingly.

    Rationale: per-section files authored independently often declare the same
    generic ids (summary, intro, topic-c, sec1, ...). When merged into a single
    *-Complete.html, duplicate ids break `getElementById`-based anchor jumps
    (browser resolves to the first match — wrong chapter). Namespacing ids per
    source file guarantees uniqueness. External hrefs that target chapter
    wrapper ids (added by run_merge() AFTER this pass) or cross-section ids
    not declared in this body stay untouched — rename_map only contains ids
    actually rewritten in this body pass.
    """
    if 'id=' not in body or not prefix:
        return body
    rename_map: dict[str, str] = {}

    def _replace_id(m: re.Match) -> str:
        old = m.group(1)
        if not old:
            return m.group(0)
        new = f'{prefix}-{old}'
        rename_map[old] = new
        return f'id="{new}"'

    body = re.sub(r'\bid="([^"]*)"', _replace_id, body)
    if not rename_map:
        return body

    def _replace_href(m: re.Match) -> str:
        target = unquote(m.group(1))
        if target in rename_map:
            return f'href="#{rename_map[target]}"'
        return m.group(0)

    body = re.sub(r'href="#([^"]+)"', _replace_href, body)
    return body


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

        // Reading progress — high-water mark (furthest section reached, never goes back)
        const _pKey = 'sgk_progress_' + location.pathname.split('/').pop().replace('.html','');
        let _saveTimer = null;
        let _current = '';
        let _maxIdx = -1;

        // Init: restore existing max index from storage
        (function() {
            try {
                var ex = JSON.parse(localStorage.getItem(_pKey) || 'null');
                if (ex && ex.maxId) {
                    sections.forEach(function(s, i) {
                        if (s.getAttribute('id') === ex.maxId) _maxIdx = i;
                    });
                }
            } catch(e) {}
        })();

        function _saveProgress() {
            if (!_current) return;
            var curIdx = -1;
            sections.forEach(function(s, i) {
                if (s.getAttribute('id') === _current) curIdx = i;
            });
            if (curIdx > _maxIdx) _maxIdx = curIdx; // only advance
            var maxSec = sections[_maxIdx];
            if (!maxSec) return;
            var maxId = maxSec.getAttribute('id');
            var maxNav = document.querySelector('.nav-item[data-section="' + maxId + '"]');
            var isComplete = _maxIdx >= sections.length - 1;
            try {
                localStorage.setItem(_pKey, JSON.stringify({
                    id:       maxId,
                    maxId:    maxId,
                    label:    maxNav ? (maxNav.querySelector('.nav-label')||{}).textContent||'' : '',
                    num:      maxNav ? (maxNav.querySelector('.nav-num')||{}).textContent||'' : '',
                    complete: isComplete,
                    ts:       Date.now()
                }));
            } catch(e) {}
        }

        // Restore progress: honor URL hash first, then jump to furthest section reached
        function _restoreProgress() {
            var targetId = location.hash ? location.hash.substring(1) : null;
            if (!targetId) {
                try {
                    var saved = JSON.parse(localStorage.getItem(_pKey) || 'null');
                    if (saved && saved.id) targetId = saved.id;
                } catch(e) {}
            }
            if (targetId) {
                var el = document.getElementById(targetId);
                if (el) {
                    setTimeout(function() { el.scrollIntoView({ behavior: 'smooth' }); }, 300);
                }
            }
        }
        _restoreProgress();

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

            _current = '';
            sections.forEach(function(section) {
                var sectionTop = section.offsetTop - 100;
                if (window.scrollY >= sectionTop) {
                    _current = section.getAttribute('id');
                }
            });

            navItems.forEach(function(item) {
                item.classList.remove('active');
                if (item.getAttribute('data-section') === _current) {
                    item.classList.add('active');
                    item.scrollIntoView({ block: 'nearest', inline: 'nearest' });
                }
            });

            clearTimeout(_saveTimer);
            _saveTimer = setTimeout(_saveProgress, 500);
        });
    });
    </script>"""


# ============================================================
# HTML → MARKDOWN CONVERTER
# ============================================================

class _HtmlToMd(HTMLParser):
    """Minimal HTML-to-Markdown converter (no external deps).

    Strategy: strip <style>/<script>/<head> blocks via regex before parsing,
    then walk tags to convert headings, lists, tables, inline marks.
    """

    # Void elements never have a closing tag — do NOT push onto depth stack
    VOID_TAGS = {'area', 'base', 'br', 'col', 'embed', 'hr', 'img',
                 'input', 'link', 'meta', 'param', 'source', 'track', 'wbr'}

    BLOCK_TAGS = {'p', 'div', 'section', 'article', 'blockquote',
                  'header', 'footer', 'main', 'nav', 'aside', 'figure',
                  'figcaption', 'address', 'details', 'summary'}
    LIST_TAGS = {'ul', 'ol'}

    def __init__(self):
        super().__init__()
        self.result = []
        self._in_list = []            # stack: 'ul' or 'ol'
        self._list_counter = []
        self._in_td = False
        self._td_buf = []
        self._table_row = []
        self._table_header_done = False

    # ---- helpers ----

    def _emit(self, text):
        if text:
            self.result.append(text)

    def _nl(self, n=1):
        combined = ''.join(self.result)
        trailing = len(combined) - len(combined.rstrip('\n'))
        needed = n - trailing
        if needed > 0:
            self.result.append('\n' * needed)

    # ---- HTMLParser callbacks ----

    def handle_starttag(self, tag, attrs):
        if tag in ('h1', 'h2', 'h3', 'h4', 'h5', 'h6'):
            self._nl(2)
            self._emit('#' * int(tag[1]) + ' ')

        elif tag == 'li':
            self._nl(1)
            if self._in_list and self._in_list[-1] == 'ol':
                self._list_counter[-1] += 1
                indent = '    ' * (len(self._in_list) - 1)
                self._emit(f'{indent}{self._list_counter[-1]}. ')
            else:
                indent = '    ' * (len(self._in_list) - 1)
                self._emit(f'{indent}- ')

        elif tag in self.LIST_TAGS:
            self._in_list.append(tag)
            self._list_counter.append(0)
            self._nl(1)

        elif tag == 'tr':
            self._table_row = []

        elif tag in ('td', 'th'):
            self._in_td = True
            self._td_buf = []

        elif tag == 'br':
            self._emit('  \n')

        elif tag == 'hr':
            self._nl(2)
            self._emit('---')
            self._nl(2)

        elif tag in ('strong', 'b'):
            self._emit('**')

        elif tag in ('em', 'i'):
            self._emit('*')

        elif tag == 'code':
            self._emit('`')

        elif tag == 'pre':
            self._nl(2)
            self._emit('```\n')

        elif tag in self.BLOCK_TAGS:
            self._nl(2)

    def handle_endtag(self, tag):
        if tag in ('h1', 'h2', 'h3', 'h4', 'h5', 'h6'):
            self._nl(2)

        elif tag == 'li':
            self._nl(1)

        elif tag in self.LIST_TAGS:
            if self._in_list:
                self._in_list.pop()
                self._list_counter.pop()
            self._nl(2)

        elif tag in ('td', 'th'):
            cell_text = ''.join(self._td_buf).strip().replace('\n', ' ')
            self._table_row.append(cell_text)
            self._in_td = False
            self._td_buf = []

        elif tag == 'tr':
            if self._table_row:
                self._nl(1)
                self._emit('| ' + ' | '.join(self._table_row) + ' |')
                if not self._table_header_done:
                    self._nl(1)
                    self._emit('| ' + ' | '.join(['---'] * len(self._table_row)) + ' |')
                    self._table_header_done = True

        elif tag == 'table':
            self._table_header_done = False
            self._nl(2)

        elif tag in ('strong', 'b'):
            self._emit('**')

        elif tag in ('em', 'i'):
            self._emit('*')

        elif tag == 'code':
            self._emit('`')

        elif tag == 'pre':
            self._nl(1)
            self._emit('```')
            self._nl(2)

        elif tag in self.BLOCK_TAGS:
            self._nl(2)

    def handle_data(self, data):
        if self._in_td:
            self._td_buf.append(data)
        else:
            self._emit(data)

    def handle_entityref(self, name):
        entities = {'amp': '&', 'lt': '<', 'gt': '>', 'nbsp': ' ',
                    'quot': '"', 'apos': "'"}
        char = entities.get(name, f'&{name};')
        if self._in_td:
            self._td_buf.append(char)
        else:
            self._emit(char)

    def handle_charref(self, name):
        try:
            char = chr(int(name[1:], 16) if name.startswith('x') else int(name))
        except Exception:
            char = ''
        if self._in_td:
            self._td_buf.append(char)
        else:
            self._emit(char)


def html_to_markdown(html: str) -> str:
    """Convert an HTML string to clean Markdown, preserving headings.

    Strips <style>, <script>, and <head> blocks with regex first,
    then walks the remaining tags for conversion.
    """
    # Strip style/script/head blocks entirely (avoids void-element depth bugs)
    html = re.sub(r'<style[^>]*>.*?</style>', '', html, flags=re.DOTALL | re.IGNORECASE)
    html = re.sub(r'<script[^>]*>.*?</script>', '', html, flags=re.DOTALL | re.IGNORECASE)
    html = re.sub(r'<head[^>]*>.*?</head>', '', html, flags=re.DOTALL | re.IGNORECASE)

    parser = _HtmlToMd()
    parser.feed(html)
    md = ''.join(parser.result)
    # Collapse 3+ consecutive blank lines to 2
    md = re.sub(r'\n{3,}', '\n\n', md)
    return md.strip()


def _filter_original_only(md: str) -> str:
    """Remove tutorial commentary blocks and all Chinese text, keeping only
    original PDA English content.

    1. Headings containing REMOVE keywords → drop heading + all content until
       a heading of strictly lesser depth.
    2. Headings matching STRIP_LABEL_ONLY → drop heading line, keep content.
    3. Lines that are purely CJK / whitespace / punctuation → drop.
    4. Strip Chinese from mixed-language heading lines.
    """
    # Keywords that identify tutorial-only headings (Chinese and English variants)
    REMOVE_KEYWORDS = (
        # Chinese
        '導師解析', '本章學習目標', '本節目錄', '本節內容索引',
        '本節內容導覽', '本節重點回顧', '核心概念解析', '核心概念',
        '比喻說明', '重點提示', '重點警示', '練習思考', '實務應用',
        '法規背景', '圖表解讀', '圖表索引', '範圍解析',
        # English variants used in some sections
        'Tutorial Commentary', 'Core Concepts', 'Key Concepts',
        'Analogy', 'Key Notes', 'Critical Warning', 'Practice Questions',
        'Practical Application', 'Learning Objectives', 'Section Contents',
        'Regulatory Context', 'Scope Analysis', 'Table Analysis',
    )
    # Heading labels to silently drop (content beneath is kept)
    STRIP_LABEL_ONLY = ('原文內容 Original Text', 'Original Text',)

    # Regex matching CJK Unified Ideographs + common CJK punctuation
    CJK_RE = re.compile(
        r'[\u4e00-\u9fff\u3400-\u4dbf\uf900-\ufaff'
        r'\u3000-\u303f\uff00-\uffef\u2e80-\u2eff\u2f00-\u2fdf]'
    )
    def _has_cjk(line: str) -> bool:
        """Return True if line contains any CJK characters."""
        return bool(CJK_RE.search(line))

    lines = md.split('\n')
    result = []
    skip_until_depth = None

    for line in lines:
        m = re.match(r'^(#{1,6}) ', line)

        if skip_until_depth is not None:
            if m and len(m.group(1)) < skip_until_depth:
                skip_until_depth = None
            else:
                continue

        if m:
            depth = len(m.group(1))
            text = line[depth + 1:].strip()

            if any(kw in text for kw in REMOVE_KEYWORDS):
                skip_until_depth = depth
                continue

            if any(text.startswith(label) for label in STRIP_LABEL_ONLY):
                continue

            # Strip CJK from mixed headings (e.g. "# Section 3: How Filters Work 濾膜原理")
            cleaned = CJK_RE.sub('', text).strip()
            cleaned = re.sub(r'\s{2,}', ' ', cleaned)  # collapse double spaces
            line = '#' * depth + ' ' + cleaned

        # Handle lines with CJK characters
        if _has_cjk(line):
            # For pipe-table rows, strip CJK from each cell instead of dropping
            if line.strip().startswith('|'):
                cleaned_line = CJK_RE.sub('', line)
                cleaned_line = re.sub(r'\s{2,}', ' ', cleaned_line)
                # Only keep if there's meaningful content left after stripping
                if cleaned_line.replace('|', '').replace('-', '').strip():
                    result.append(cleaned_line)
            # Drop non-table lines with CJK entirely
            continue

        result.append(line)

    md = '\n'.join(result)
    md = re.sub(r'\n{3,}', '\n\n', md)
    return md.strip()


# ============================================================
# MARKDOWN GENERATOR
# ============================================================

def generate_markdown(
    section_map: list,
    report_title_en: str,
    report_subtitle_en: str,
    report_subtitle_zh: str,
    output_filename: str,
    chapter_label: str,
    base_dir: str,
):
    """
    Generate a clean Markdown version of a merged report for chatbot use.
    Output is written to <repo_root>/knowledge/<stem>.md
    where <stem> is output_filename with .html replaced by .md.
    """
    sections_dir = os.path.join(base_dir, 'sections')
    repo_root = os.path.join(base_dir, '..')
    knowledge_dir = os.path.join(repo_root, 'knowledge')
    os.makedirs(knowledge_dir, exist_ok=True)

    md_filename = output_filename.replace('.html', '.md')
    md_path = os.path.join(knowledge_dir, md_filename)

    lines = []
    lines.append(f'# {report_title_en}: {report_subtitle_en}')
    lines.append('')  # no Chinese subtitle

    for files, nav_id, nav_num, label_en, label_zh, pages in section_map:
        section_parts = []
        for filename in files:
            filepath = os.path.join(sections_dir, filename)
            if not os.path.exists(filepath):
                continue
            with open(filepath, 'r', encoding='utf-8') as f:
                html = f.read()
            section_parts.append(_filter_original_only(html_to_markdown(html)))

        if not section_parts:
            continue

        page_info = f' ({pages})' if pages else ''
        # English only — no label_zh in knowledge MD
        lines.append(f'\n## {chapter_label} {nav_num}: {label_en}{page_info}\n')
        lines.append('\n\n'.join(section_parts))

    md_content = '\n'.join(lines)
    # Final cleanup: collapse excess blank lines
    md_content = re.sub(r'\n{3,}', '\n\n', md_content)

    with open(md_path, 'w', encoding='utf-8') as f:
        f.write(md_content)

    size_kb = os.path.getsize(md_path) / 1024
    print(f"  [MD] {md_filename} → knowledge/ ({size_kb:.1f} KB)")
    return md_path


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
    # template.css lives at repo root. base_dir may be 1 or 2 levels deep
    # (e.g. PDA/TR26 → ../template.css works; ISPE/ISPE-Vol5 → ../../template.css needed).
    # Walk up the tree until template.css is found (max 3 levels).
    _search = base_dir
    css_path = None
    for _ in range(3):
        _search = os.path.dirname(_search)
        _candidate = os.path.join(_search, 'template.css')
        if os.path.exists(_candidate):
            css_path = _candidate
            break
    if css_path is None:
        css_path = os.path.join(base_dir, '..', 'template.css')  # fallback (original)
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
                # Namespace all ids to this file's stem so generic ids like
                # "summary", "intro", "topic-c" don't collide across sections.
                # Wrapper <section id="{nav_id}"> is added AFTER this pass so
                # top-nav href="#{nav_id}" still resolves correctly.
                body = rewrite_ids_with_prefix(body, _sanitize_prefix(filename))
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
        <p>SterileGMP Knowledge Hub — 僅供學習參考</p>
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

    # Auto-generate Markdown for chatbot use
    generate_markdown(
        section_map=section_map,
        report_title_en=report_title_en,
        report_subtitle_en=report_subtitle_en,
        report_subtitle_zh=report_subtitle_zh,
        output_filename=output_filename,
        chapter_label=chapter_label,
        base_dir=base_dir,
    )
    print("=" * 60)
