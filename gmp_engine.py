#!/usr/bin/env python3
"""
gmp_engine.py — Unified GMP document processing engine
=======================================================
Supports all guideline sources: PDA, ISPE, FDA, PIC/S, ISO, ECA, USP.

Each report is defined by an entry in reports.json with a `folder` field.

Usage:
    python gmp_engine.py scaffold TRXX             # Create new report folder
    python gmp_engine.py scaffold ISPE-Vol5 --source ISPE
    python gmp_engine.py md TRXX                   # Generate knowledge MD from source text
    python gmp_engine.py md --all                  # Regenerate all knowledge MDs
    python gmp_engine.py merge TRXX                # Merge HTML sections → Complete.html + MD
    python gmp_engine.py merge --all               # Merge all reports

Workflow:
    1. gmp_engine.py scaffold ID [--source SOURCE]
    2. Extract PDF text → <SOURCE>/ID/source/
    3. gmp_engine.py md ID                          # structured English MD
    4. Generate bilingual HTML sections (Claude agents)
    5. gmp_engine.py merge ID                       # merge HTML + refresh MD from source
"""

import argparse
import json
import os
import re
import sys
from pathlib import Path

REPO_ROOT = Path(__file__).parent.resolve()
KNOWLEDGE_DIR = REPO_ROOT / "knowledge"
TEMPLATE_CSS = REPO_ROOT / "template.css"


def _report_dir(report_id: str, config: dict):
    """Return absolute folder path for a report (respects config['folder'])."""
    return REPO_ROOT / config.get("folder", report_id)


def _knowledge_subdir(config: dict):
    """Return knowledge/<SOURCE>/ path based on config's folder field."""
    folder = config.get("folder", "")
    source = folder.split("/")[0] if "/" in folder else "PDA"
    subdir = REPO_ROOT / "knowledge" / source
    subdir.mkdir(parents=True, exist_ok=True)
    return subdir

# Import merge functions from merge_engine (still used for HTML merging)
sys.path.insert(0, str(REPO_ROOT))
from merge_engine import (
    extract_body_content,
    load_css,
    build_nav_html,
    run_merge,
    STANDARD_JS,
)


# ============================================================
# CONFIG LOADER — reads from reports.json (single source of truth)
# ============================================================

REPORTS_JSON = REPO_ROOT / "reports.json"


def _load_all_reports() -> dict:
    """Load reports.json and return the 'reports' dict."""
    if not REPORTS_JSON.exists():
        print(f"[ERROR] {REPORTS_JSON} not found.")
        sys.exit(1)
    with open(REPORTS_JSON, "r", encoding="utf-8") as f:
        data = json.load(f)
    return data.get("reports", {})


def load_config(report_id: str) -> dict:
    """Load config for a single report from reports.json."""
    all_reports = _load_all_reports()
    if report_id not in all_reports:
        print(f"[ERROR] '{report_id}' not found in reports.json.")
        print(f"  Available: {', '.join(all_reports.keys())}")
        sys.exit(1)
    return all_reports[report_id]


def config_to_section_map(config: dict) -> list:
    """Convert section_map from JSON to the tuple format merge_engine expects."""
    result = []
    for s in config["section_map"]:
        result.append((
            s["files"],
            s["id"],
            s["num"],
            s["label_en"],
            s.get("label_zh", ""),
            s.get("pages", ""),
        ))
    return result


def find_all_reports() -> list[str]:
    """Return all report IDs from reports.json."""
    return list(_load_all_reports().keys())


# ============================================================
# MD FROM SOURCE TEXT (new approach)
# ============================================================

# Lines matching these patterns are PDF artifacts (headers, footers, license)
PDF_NOISE_PATTERNS = [
    # License/copyright lines
    re.compile(r'^Licensed to .+: Copying and Distribution Prohibited'),
    re.compile(r'©\s*\d{4}\s+Parenteral\s*Drug\s*Association'),
    re.compile(r'Copying and Distribution Prohibited'),
    re.compile(r'^\s*PDA\s+J\s+Pharm\s+Sci'),
    # Page header/footer: "Technical Report No. XX" or "NN Technical Report No. XX"
    re.compile(r'^\d*\s*Technical Report No\.\s*\d+'),
    re.compile(r'^Technical Report No\.\s*\d+'),
    # Points to Consider header/footer
    re.compile(r'^Points to Consider No\.\s*\d+\s*$'),
    re.compile(r'^Points to Consider.*Copying and Distribution'),
    # Standalone page numbers (1-3 digits alone on a line)
    re.compile(r'^\d{1,3}\s*$'),
    # Common PDF running headers: "NN © YYYY PDA" or just the report short name
    re.compile(r'^\d+\s+©\s*\d{4}'),
    re.compile(r'^PDA Manufacturing Technology Guide'),
    # ISPE header/footer patterns
    re.compile(r'^ISPE Baseline®?\s+Guide:?\s*$'),
    re.compile(r'^Sterile Product Manufacturing Facilities\s*$'),
    re.compile(r'^Page\s+\d+\s*$'),
]

# Heading patterns in PDA source text: "3.0 Title", "3.1.2 Subtitle", "Appendix I: Title"
HEADING_RE = re.compile(
    r'^(\d+(?:\.\d+)*)\s+(.+)$'
)
APPENDIX_RE = re.compile(
    r'^(Appendix\s+[A-Z0-9]+(?:\.\d+)?)[:\s]+(.+)$', re.IGNORECASE
)
TABLE_HEADING_RE = re.compile(
    r'^(Table\s+\d+[\.\d]*[-–]\d+\S*)\s*(.*)$'
)
FIGURE_HEADING_RE = re.compile(
    r'^(Figure\s+\d+[\.\d]*[-–]\d+)\s+(.+)$'
)


def _heading_depth(section_num: str) -> int:
    """Determine MD heading depth from section number.

    1.0 → ## (depth 2, since # is reserved for report title)
    1.1 → ### (depth 3)
    1.1.1 → #### (depth 4)
    """
    parts = section_num.strip('.').split('.')
    # Top-level sections (1.0, 2.0) → ##
    # Sub-sections (1.1, 2.3) → ###
    # Sub-sub (1.1.1) → ####
    depth = len(parts)
    if len(parts) >= 2 and parts[-1] == '0':
        depth -= 1  # treat X.0 same as X
    return min(depth + 1, 5)  # +1 because # is report title; cap at #####


def _is_noise(line: str) -> bool:
    """Check if line is a PDF artifact that should be stripped."""
    stripped = line.strip()
    if not stripped:
        return False
    for pattern in PDF_NOISE_PATTERNS:
        if pattern.search(stripped):
            return True
    return False


def _extract_tables_from_html(report_id: str, config: dict) -> dict:
    """Extract properly formatted MD tables from HTML section files.

    Returns two dicts:
    - labeled: table_number_key → cleaned pipe-table block
    - by_file: filename → list of cleaned pipe-table blocks (in order)
    Combined into one dict with labeled keys taking priority.
    """
    from merge_engine import html_to_markdown

    sections_dir = _report_dir(report_id, config) / "sections"
    if not sections_dir.exists():
        return {}, {}

    CJK_RE = re.compile(
        r'[\u4e00-\u9fff\u3400-\u4dbf\uf900-\ufaff'
        r'\u3000-\u303f\uff00-\uffef\u2e80-\u2eff\u2f00-\u2fdf]'
    )

    def _clean_table(rows):
        """Strip CJK and empty lines from table rows."""
        clean = []
        for l in rows:
            l = CJK_RE.sub('', l)
            l = re.sub(r'\s{2,}', ' ', l).strip()
            if l and (l.startswith('|') or l.startswith('**')):
                clean.append(l)
        return clean

    labeled = {}    # "table 3.3-1" → pipe block
    by_file = {}    # filename → [pipe block, pipe block, ...]

    section_map = config.get("section_map", [])

    for entry in section_map:
        for filename in entry["files"]:
            filepath = sections_dir / filename
            if not filepath.exists():
                continue
            with open(filepath, "r", encoding="utf-8") as f:
                html = f.read()

            # Strip style/script/head
            html_clean = re.sub(r'<style[^>]*>.*?</style>', '', html, flags=re.DOTALL | re.IGNORECASE)
            html_clean = re.sub(r'<script[^>]*>.*?</script>', '', html_clean, flags=re.DOTALL | re.IGNORECASE)
            html_clean = re.sub(r'<head[^>]*>.*?</head>', '', html_clean, flags=re.DOTALL | re.IGNORECASE)

            md = html_to_markdown(html_clean)
            md_lines = md.split('\n')
            file_tables = []

            i = 0
            while i < len(md_lines):
                line = md_lines[i]

                if line.strip().startswith('|'):
                    # Look backward for a table title
                    table_title = ""
                    for back in range(1, 6):
                        if i - back >= 0:
                            prev = md_lines[i - back].strip()
                            tm = re.match(r'^#{0,4}\s*\*{0,2}(Table\s+\d+[\.\d]*[-–]\d+\S*)\s*(.*?)[\*]*$', prev)
                            if tm:
                                table_title = (tm.group(1) + ' ' + (tm.group(2) or '')).strip()
                                break

                    # Collect all pipe rows
                    table_rows = []
                    while i < len(md_lines):
                        if md_lines[i].strip().startswith('|'):
                            table_rows.append(md_lines[i])
                            i += 1
                        elif md_lines[i].strip() == '':
                            i += 1  # skip blank lines within table
                        else:
                            break

                    if len(table_rows) >= 2:  # at least header + separator
                        if table_title:
                            block_lines = [f"**{table_title}**"] + table_rows
                        else:
                            block_lines = table_rows

                        cleaned = _clean_table(block_lines)
                        if len([l for l in cleaned if l.startswith('|')]) >= 2:
                            block = '\n'.join(cleaned)
                            file_tables.append(block)

                            if table_title:
                                # Extract just the table number for matching
                                tn = re.match(r'(table\s+\d+[\.\d]*[-–]\d+\S*)', table_title, re.I)
                                if tn:
                                    labeled[tn.group(1).lower().strip()] = block
                else:
                    i += 1

            if file_tables:
                by_file[filename] = file_tables

    return labeled, by_file


def source_to_markdown(
    report_id: str,
    config: dict,
) -> str:
    """Generate structured Markdown from source/*.txt files.

    Reads all source text files in order, detects heading hierarchy,
    strips PDF noise, and produces clean English-only Markdown.
    Tables are extracted from HTML sections (which have proper structure)
    and spliced into the source-text MD at matching table title locations.
    """
    source_dir = _report_dir(report_id, config) / "source"

    # Extract properly formatted tables from HTML sections
    labeled_tables, tables_by_file = _extract_tables_from_html(report_id, config)
    total_tables = len(labeled_tables) + sum(len(v) for v in tables_by_file.values())
    if total_tables:
        print(f"  [INFO] Extracted {len(labeled_tables)} labeled + {total_tables - len(labeled_tables)} unlabeled tables from HTML")
    # Track which unlabeled tables have been used (per file)
    file_table_idx = {fn: 0 for fn in tables_by_file}

    title = f"{config['report_title_en']}: {config['report_subtitle_en']}"
    lines = [f"# {title}", ""]

    # Collect all source files, sorted
    txt_files = sorted(source_dir.glob("*.txt"))
    # Separate: section-* (finest split) > chapter-* > full-text
    full_text = [f for f in txt_files if "full-text" in f.name.lower()]
    section_files = [f for f in txt_files if f.name.startswith("section-")]
    chapter_files = [f for f in txt_files if f.name.startswith("chapter-")]

    # Prefer section files (finest split); fall back to chapter, then full-text
    files_to_read = section_files if section_files else (chapter_files if chapter_files else full_text)

    if not files_to_read:
        print(f"  [WARNING] No source text files found in {source_dir}")
        return ""

    # skip_raw_table is set per source file — see inner loop

    # Build a flat list of all HTML tables in order for sequential matching
    all_html_tables = []
    for entry in config.get("section_map", []):
        for fn in entry["files"]:
            if fn in tables_by_file:
                all_html_tables.extend(tables_by_file[fn])
    html_table_cursor = 0  # next unlabeled table to use

    # Regex to detect garbled math Unicode from PDF extraction
    # Mathematical Italic/Bold chars in U+1D400-U+1D7FF range
    MATH_UNICODE_RE = re.compile(r'[\U0001d400-\U0001d7ff]')

    # Pre-build HTML-stripped content per HTML file for equation fallback
    from merge_engine import html_to_markdown, _filter_original_only
    html_fallback_by_file = {}
    sections_html_dir = _report_dir(report_id, config) / "sections"
    if sections_html_dir.exists():
        for entry in config.get("section_map", []):
            for fn in entry["files"]:
                fp = sections_html_dir / fn
                if fp.exists():
                    with open(fp, "r", encoding="utf-8") as f:
                        html = f.read()
                    html_fallback_by_file[fn] = _filter_original_only(html_to_markdown(html))

    # Regex for split headings: number alone on a line (e.g., "3.1\t" or "3.1")
    SPLIT_HEADING_NUM_RE = re.compile(r'^(\d+(?:\.\d+)*)\s*$')
    # Bare chapter number without dot (e.g., "3\t Process Equipment")
    BARE_CHAPTER_RE = re.compile(r'^(\d+)\s+([A-Z].+)$')

    for txt_file in files_to_read:
        with open(txt_file, "r", encoding="utf-8") as f:
            raw_lines = f.readlines()
            raw_content = ''.join(raw_lines)

        # Pre-process: merge split headings where number and title are on
        # separate lines (common in ISPE PDF extractions).
        # Pattern: "3.1\t\n" followed by "Introduction\n" → "3.1 Introduction\n"
        merged_lines = []
        i = 0
        first_content_seen = False
        while i < len(raw_lines):
            line = raw_lines[i].rstrip()
            m = SPLIT_HEADING_NUM_RE.match(line.strip())
            # Match dotted numbers (3.1, 5.2.1) anywhere in file
            is_dotted = m and '.' in m.group(1) and int(m.group(1).split('.')[0]) > 0
            # Bare chapter numbers (1-20) only at the very start of the file
            is_bare_ch = m and '.' not in m.group(1) and 0 < int(m.group(1)) <= 20 and not first_content_seen
            if m and (is_dotted or is_bare_ch):
                # Look ahead for title on next non-blank line
                j = i + 1
                while j < len(raw_lines) and not raw_lines[j].strip():
                    j += 1
                if j < len(raw_lines):
                    next_line = raw_lines[j].strip()
                    # Title should start with uppercase, be short, and not a sentence
                    if (next_line and re.match(r'[A-Z]', next_line) and len(next_line) < 100
                            and not re.search(r'\.\s+[a-z]', next_line) and not next_line.endswith('.')):
                        num = m.group(1) if is_dotted else f"{m.group(1)}.0"
                        merged_lines.append(f"{num} {next_line}\n")
                        first_content_seen = True
                        i = j + 1
                        continue
            # Also handle bare chapter numbers: "3\t Process Equipment" → "3.0 Process Equipment"
            # Only at the very start of the file (first non-blank content line)
            bm = BARE_CHAPTER_RE.match(line.strip())
            if (bm and not first_content_seen and 0 < int(bm.group(1)) <= 20
                    and len(bm.group(2).strip()) < 80
                    and not re.search(r'\.\s+[a-z]', bm.group(2))
                    and not bm.group(2).strip().endswith('.')
                    and '\t' in line):
                merged_lines.append(f"{bm.group(1)}.0 {bm.group(2).strip()}\n")
                first_content_seen = True
                i += 1
                continue
            if line.strip() and not _is_noise(line):
                first_content_seen = True
            merged_lines.append(raw_lines[i])
            i += 1
        raw_lines = merged_lines
        raw_content = ''.join(raw_lines)

        skip_raw_table = False  # reset at each source file boundary

        # Check if this source file has garbled math Unicode
        # If so, use HTML-stripped content instead of source text
        if MATH_UNICODE_RE.search(raw_content):
            # Extract section number from source filename
            # Handles: sec01a-text.txt → "01a", section-10.0-text.txt → "10"
            src_stem = txt_file.stem.replace('-text', '')
            num_match = re.search(r'(\d+[a-z]?)', src_stem)
            src_num = num_match.group(1) if num_match else ''
            used_fallback = False
            for fn, html_md in html_fallback_by_file.items():
                # Match: section-10-appendix-diffusion.html contains "10"
                fn_num = re.search(r'section-(\d+[a-z]?)', fn)
                fn_num_str = fn_num.group(1) if fn_num else ''
                if src_num and fn_num_str and src_num == fn_num_str:
                    print(f"  [INFO] Using HTML fallback for {txt_file.name} (contains equations)")
                    lines.append("")
                    lines.append(html_md)
                    lines.append("")
                    used_fallback = True
                    break
            if used_fallback:
                continue  # skip normal source-text processing for this file

        # Build list of HTML tables available for this source file
        src_stem = txt_file.stem.replace('-text', '')
        num_match = re.search(r'(\d+[a-z]?)', src_stem)
        src_num = num_match.group(1) if num_match else ''
        file_html_tables = []
        for fn, tbls in tables_by_file.items():
            fn_num = re.search(r'section-(\d+[a-z]?)', fn)
            fn_num_str = fn_num.group(1) if fn_num else ''
            if src_num and fn_num_str and src_num == fn_num_str:
                file_html_tables.extend(tbls)
        file_table_cursor = 0

        for raw_line in raw_lines:
            line = raw_line.rstrip()

            # Skip PDF noise
            if _is_noise(line):
                continue

            stripped = line.strip()

            # If we're skipping raw table data after an HTML table splice,
            # check if we've reached normal content again.
            # Raw table data = short fragmented lines (cell values, column headers).
            # Real content = section headings, table captions, figure captions,
            # footnotes, or paragraph text (multiple sentences).
            if skip_raw_table:
                # Always resume on structural elements
                is_heading = bool(HEADING_RE.match(stripped)) and '.' in stripped
                is_table_caption = bool(TABLE_HEADING_RE.match(stripped))
                is_figure_caption = bool(FIGURE_HEADING_RE.match(stripped))
                is_appendix = bool(APPENDIX_RE.match(stripped))
                is_footnote = stripped.startswith('*') and len(stripped) > 20

                if is_heading or is_table_caption or is_figure_caption or is_appendix or is_footnote:
                    skip_raw_table = False
                elif stripped:
                    # A real paragraph has multiple sentences or is very long
                    # Table fragments are typically <60 chars with no periods
                    has_sentences = '. ' in stripped and len(stripped) > 60
                    is_very_long = len(stripped) > 120
                    if has_sentences or is_very_long:
                        skip_raw_table = False
                    else:
                        continue  # skip — still looks like table fragment
                else:
                    continue  # skip blank lines in skip mode

            # Detect section headings — must start with a structured section
            # number (e.g., "3.0", "6.6.1") followed by a capitalized title.
            #
            # REJECT these false positives:
            #   - Bare decimals: "0.2 µm", "0.45 μm"
            #   - Parenthetical refs: "5.4.1 for additional information)."
            #   - Units/values: "10 L/min", "35 L", "15 PSIG"
            #   - Footnotes: "1 The PIC/S GMP...", "1 Author's note:"
            #   - TOC lines with dots: "Table 3.3-1 Example ... 15"
            #   - Sentences (lowercase after first few words)
            m = HEADING_RE.match(stripped)
            if m:
                sec_num = m.group(1)
                sec_title = m.group(2).strip()
                first_part = int(sec_num.split('.')[0])
                # Must have at least one dot (e.g., "1.0", "3.1") — bare "1", "10" are not headings
                has_dot = '.' in sec_num
                # Title must start with uppercase letter
                starts_upper = bool(re.match(r'[A-Z]', sec_title))
                # Not a parenthetical cross-reference
                not_paren = not sec_title.endswith(')')
                # Not a TOC entry (contains "..." or trailing page number)
                not_toc = '...' not in stripped and not re.search(r'\.\s*\d+\s*$', stripped)
                # Not a unit/value line (title is just a unit like "L/min", "PSI", "PSIG", "L")
                # Units are typically short (1-5 chars), all caps or with / symbol
                first_word = sec_title.split()[0] if sec_title else ''
                UNIT_WORDS = {'L', 'PSI', 'PSIG', 'KG', 'ML', 'MM', 'CM', 'HR', 'MIN',
                              'Pa', 'kPa', 'mbar', 'CFR'}
                not_unit = first_word not in UNIT_WORDS and not re.match(r'^[A-Z][a-z]*/[A-Za-z²³]+$', first_word)
                # Reject lines that look like sentences (footnotes, body text)
                not_sentence = not re.search(r'\.\s+[a-z]', sec_title) and not sec_title.endswith('.')
                # Reasonable length
                not_long = len(stripped) < 150

                if (
                    has_dot
                    and first_part > 0
                    and starts_upper
                    and not_paren
                    and not_toc
                    and not_unit
                    and not_sentence
                    and not_long
                ):
                    depth = _heading_depth(sec_num)
                    lines.append("")
                    lines.append(f"{'#' * depth} {sec_num} {sec_title}")
                    lines.append("")
                    continue

            # Detect appendix headings — but not cross-references like
            # "Appendix III: presents example cases..."
            m = APPENDIX_RE.match(stripped)
            if (
                m
                and '...' not in stripped
                and not re.search(r'\b(presents|provides|lists|shows|describes|see)\b', m.group(2), re.I)
                and len(stripped) < 120
            ):
                lines.append("")
                lines.append(f"## {m.group(1)}: {m.group(2).strip()}")
                lines.append("")
                continue

            # Detect table caption lines — splice in HTML table if available
            m = TABLE_HEADING_RE.match(stripped)
            if m and '...' not in stripped:
                title_text = m.group(2).strip() if m.group(2) else ''
                # Reject sentences about tables ("Table X provides examples...")
                is_sentence = bool(re.search(r'\b(provides|lists|shows|presents|describes|outlines|summarizes|contains|delineates)\b', title_text, re.I))
                if not is_sentence:
                    # Try to find matching HTML table by table number
                    table_num = re.match(r'(table\s+\d+[\.\d]*[-–]\d+\S*)', stripped, re.I)
                    table_num_key = table_num.group(1).lower().strip() if table_num else ''
                    matched_table = None
                    # 1. Try labeled match by table number key
                    if table_num_key and table_num_key in labeled_tables:
                        matched_table = labeled_tables[table_num_key]
                    # 2. Search all HTML tables for content match
                    if not matched_table and table_num_key:
                        for tbl in all_html_tables:
                            if table_num_key in tbl.lower():
                                matched_table = tbl
                                break
                    # 3. Fall back to next table from this source file's HTML
                    if not matched_table and file_table_cursor < len(file_html_tables):
                        matched_table = file_html_tables[file_table_cursor]
                        file_table_cursor += 1
                    if matched_table:
                        lines.append("")
                        lines.append(matched_table)
                        lines.append("")
                        skip_raw_table = True  # suppress raw text version
                    else:
                        lines.append("")
                        lines.append(f"**{stripped}**")
                        lines.append("")
                    continue

            m = FIGURE_HEADING_RE.match(stripped)
            if m and '...' not in stripped:
                lines.append("")
                lines.append(f"*[{stripped}]*")
                lines.append("")
                continue

            # Regular text
            lines.append(line)

    md = "\n".join(lines)
    # Collapse 3+ blank lines to 2
    md = re.sub(r"\n{3,}", "\n\n", md)
    return md.strip()


def generate_md_from_source(report_id: str, config: dict = None) -> Path:
    """Generate knowledge MD from source text and write to knowledge/ folder."""
    if config is None:
        config = load_config(report_id)

    knowledge_dir = _knowledge_subdir(config)

    output_stem = config["output_filename"].replace(".html", "")
    md_path = knowledge_dir / f"{output_stem}.md"

    md_content = source_to_markdown(report_id, config)
    if not md_content:
        print(f"  [SKIP] No content generated for {report_id}")
        return None

    with open(md_path, "w", encoding="utf-8") as f:
        f.write(md_content)

    size_kb = md_path.stat().st_size / 1024
    print(f"  [MD] {md_path.name} → knowledge/ ({size_kb:.1f} KB)")
    return md_path


# ============================================================
# PDF-BASED MD GENERATION (highest quality)
# ============================================================

# Map report IDs to PDF filenames in Raw pdfs/
PDF_FILES = {
    "pda-guide-no1": "PDA-Tech-Guide-No1-Aseptic-Filling-2025.pdf",
    "TR26": "PDA_TR26-2025-Sterilizing-Filtration-of-Liquids.pdf",
    "PtC-14": "PDA_PtC-14-Manufacturing-of-ATMPs\u2013Facility-Design-2025.pdf",
    "PtC-15": "PDA_PtC-15-Mobile-Manufacturing-2025.pdf",
    "TR52": "PDA_TR52_Guidance for Good Distribution Practices (GDPs) for the Pharmaceutical Supply Chain.pdf",
    "TR73": "PDA_TR73_Prefilled Syringe p81-109_1.pdf",
    "TR90": "PDA_TR90_CCS development in pharmaceutical manufacturing.pdf",
    "PtC-12": "PDA Point to Consider-12-Restricted-Access-Barrier-Systems_2025.pdf",
    "TR22": "PDA TR22-2025-Process-Simulation-for-Aseptically-Filled-Products.pdf",
    "TR66": "PDA_TR66_Application of single-use systems in pharma manufacturing_2014.pdf",
    "TR73-2": "PDA_TR73-2_2024_Application of medical device regulation Annex 1 requirements for staked needle systems.pdf",
    "TR60": "TR-60-2026-Process-Validation-LifeCycle-Approach.pdf",
}

# PDF noise patterns for cleanup
_PDF_CLEAN_PATTERNS = [
    re.compile(r'^Licensed to .+Copying and Distribution Prohibited.*$', re.M),
    re.compile(r'^\d*\s*\*\*Technical Report No\. \d+.*Parenteral Drug Association.*$', re.M),
    re.compile(r'^\*\*Technical Report No\. \d+.*Parenteral Drug Association.*$', re.M),
    re.compile(r'^Technical Report No\. \d+.*Parenteral Drug Association.*$', re.M),
    re.compile(r'^\d*\s*\*\*Points to Consider No\. \d+\*\*.*Parenteral Drug Association.*$', re.M),
    re.compile(r'^Points to Consider No\. \d+\s*$', re.M),
    re.compile(r'^\d*\s*PDA Manufacturing Technology Guide No\. 1.*Parenteral Drug Association.*$', re.M),
]


def _replace_math_unicode(content: str) -> str:
    """Replace Mathematical Italic/Bold Unicode chars with ASCII equivalents."""
    def _replace(m):
        c = ord(m.group())
        # Bold uppercase A-Z: U+1D400-U+1D419
        if 0x1D400 <= c <= 0x1D419:
            return chr(c - 0x1D400 + ord('A'))
        # Bold lowercase a-z: U+1D41A-U+1D433
        if 0x1D41A <= c <= 0x1D433:
            return chr(c - 0x1D41A + ord('a'))
        # Italic uppercase A-Z: U+1D434-U+1D44D
        if 0x1D434 <= c <= 0x1D44D:
            return chr(c - 0x1D434 + ord('A'))
        # Italic lowercase a-z: U+1D44E-U+1D467
        if 0x1D44E <= c <= 0x1D467:
            return chr(c - 0x1D44E + ord('a'))
        # Greek letters
        greek = {
            0x1D6FC: 'alpha', 0x1D6FD: 'beta', 0x1D6FE: 'gamma',
            0x1D6FF: 'delta', 0x1D700: 'epsilon', 0x1D701: 'zeta',
            0x1D702: 'eta', 0x1D703: 'theta', 0x1D704: 'iota',
            0x1D705: 'kappa', 0x1D706: 'lambda', 0x1D707: 'mu',
            0x1D708: 'nu', 0x1D709: 'xi', 0x1D70B: 'pi',
            0x1D70C: 'rho', 0x1D70E: 'sigma', 0x1D70F: 'tau',
            0x1D711: 'phi', 0x1D712: 'chi', 0x1D713: 'psi',
            0x1D714: 'omega',
        }
        return greek.get(c, '?')
    return re.sub(r'[\U0001d400-\U0001d7ff]', _replace, content)


def generate_md_from_pdf(report_id: str, config: dict = None) -> Path:
    """Generate knowledge MD directly from the original PDF.

    Uses pymupdf4llm for high-quality extraction with proper:
    - Table formatting (pipe tables)
    - Heading hierarchy
    - Equation variable definitions
    Then cleans PDF artifacts and math Unicode.
    """
    if config is None:
        config = load_config(report_id)

    pdf_filename = PDF_FILES.get(report_id)
    if not pdf_filename:
        print(f"  [ERROR] No PDF mapping for {report_id}")
        return None

    # Check both locations for PDFs
    pdf_path = REPO_ROOT / "Raw pdfs" / pdf_filename
    if not pdf_path.exists():
        pdf_path = REPO_ROOT / pdf_filename
    if not pdf_path.exists():
        print(f"  [ERROR] PDF not found: {pdf_filename}")
        return None

    import pymupdf4llm

    print(f"  [PDF] Extracting {pdf_filename}...")
    raw_md = pymupdf4llm.to_markdown(str(pdf_path))

    # --- Clean PDF noise ---
    content = raw_md
    for pattern in _PDF_CLEAN_PATTERNS:
        content = pattern.sub('', content)

    # Strip standalone page numbers (digit-only lines)
    content = re.sub(r'^\d{1,3}\s*$', '', content, flags=re.M)

    # --- Strip frontmatter (TOC, authors, etc.) ---
    # Find the first real content section heading
    first_section = re.search(
        r'^#{1,3}\s+1\.0\s|^1\.0\s+Introduction|^#{1,3}\s+1\.0\s+Introduction',
        content, re.M
    )
    if first_section:
        title = f"# {config['report_title_en']}: {config['report_subtitle_en']}"
        content = title + "\n\n" + content[first_section.start():]

    # --- Fix math Unicode ---
    content = _replace_math_unicode(content)

    # --- Strip CJK (shouldn't be any but safety) ---
    CJK_RE = re.compile(
        r'[\u4e00-\u9fff\u3400-\u4dbf\uf900-\ufaff'
        r'\u3000-\u303f\uff00-\uffef\u2e80-\u2eff\u2f00-\u2fdf]'
    )
    content = CJK_RE.sub('', content)

    # --- Detect section headings and normalize to ## / ### ---
    # pymupdf4llm extracts section headings as ##### or plain text.
    # Normalize: "##### 1.0 Introduction" or "1.0 Introduction" → "## 1.0 Introduction"
    UNIT_WORDS = {'L', 'PSI', 'PSIG', 'KG', 'ML', 'MM', 'CM', 'HR', 'MIN'}
    result_lines = []
    for line in content.split('\n'):
        stripped = line.strip()
        # Strip any existing # prefix to get raw text
        raw = re.sub(r'^#{1,6}\s+', '', stripped)
        # Match section number pattern
        m = re.match(r'^(\d+(?:\.\d+)*)\s+([A-Z].+)$', raw)
        if (
            m
            and '.' in m.group(1)
            and len(raw) < 150
            and int(m.group(1).split('.')[0]) > 0
            and not re.search(r'\.\s*\d+\s*$', raw)  # not TOC
            and '...' not in raw
            and m.group(2).split()[0] not in UNIT_WORDS
        ):
            sec_num = m.group(1)
            sec_title = m.group(2).strip()
            parts = sec_num.strip('.').split('.')
            depth = len(parts)
            if len(parts) >= 2 and parts[-1] == '0':
                depth -= 1
            if depth <= 1:
                result_lines.append(f"## {sec_num} {sec_title}")
            elif depth == 2:
                result_lines.append(f"### {sec_num} {sec_title}")
            else:
                result_lines.append(f"**{sec_num} {sec_title}**")
            continue

        # Detect "Appendix X: Title"
        am = re.match(r'^#{0,6}\s*(Appendix\s+[A-Z0-9]+(?:\.\d+)?)[:\s]+([A-Z].+)$', stripped, re.I)
        if am and '...' not in stripped and len(stripped) < 120:
            result_lines.append(f"## {am.group(1)}: {am.group(2).strip()}")
            continue

        # Convert remaining #### / ##### to bold (not section headings)
        m_h4 = re.match(r'^#{4,}\s+(.+)$', stripped)
        if m_h4:
            result_lines.append(f"**{m_h4.group(1)}**")
            continue

        result_lines.append(line)
    content = '\n'.join(result_lines)

    # --- Collapse blank lines ---
    content = re.sub(r'\n{3,}', '\n\n', content)
    content = content.strip()

    # --- Write output ---
    knowledge_dir = _knowledge_subdir(config)
    output_stem = config["output_filename"].replace(".html", "")
    md_path = knowledge_dir / f"{output_stem}.md"

    with open(md_path, "w", encoding="utf-8") as f:
        f.write(content)

    # --- Stats ---
    pipe_rows = sum(1 for l in content.split('\n') if l.strip().startswith('|'))
    math_remaining = len(re.compile(r'[\U0001d400-\U0001d7ff]').findall(content))
    size_kb = md_path.stat().st_size / 1024
    print(f"  [MD] {md_path.name} → knowledge/ ({size_kb:.1f} KB, {pipe_rows} table rows, {math_remaining} math chars, source={knowledge_dir.name})")
    return md_path


# ============================================================
# SCAFFOLD
# ============================================================

def cmd_scaffold(args):
    report_id = args.report_id
    source = (getattr(args, "source", None) or "PDA").upper()
    folder = f"{source}/{report_id}"
    report_dir = REPO_ROOT / folder

    for sub in ["sections", "source", "output"]:
        (report_dir / sub).mkdir(parents=True, exist_ok=True)

    # Add skeleton entry to reports.json
    with open(REPORTS_JSON, "r", encoding="utf-8") as f:
        data = json.load(f)

    if report_id in data.get("reports", {}):
        print(f"[WARNING] '{report_id}' already exists in reports.json — skipping JSON update.")
    else:
        skeleton = {
            "report_title_en": "",
            "report_subtitle_en": "",
            "report_subtitle_zh": "",
            "output_filename": f"{report_id}-Complete.html",
            "footer_text": "",
            "chapter_label": "Section",
            "date": "",
            "title": "",
            "titleZh": "",
            "folder": folder,
            "source": f"{source} {report_id}",
            "source_color": {"bg": "#f1f5f9", "text": "#475569", "bar": "#6b7280", "short": report_id},
            "tags": [],
            "summary": "",
            "pages": "",
            "figures": 0,
            "section_map": [
                {"files": ["section-00-intro.html"], "id": "sec0", "num": "0", "label_en": "Introduction", "label_zh": "", "pages": "p1-p5"}
            ],
        }
        data.setdefault("reports", {})[report_id] = skeleton
        with open(REPORTS_JSON, "w", encoding="utf-8") as f:
            json.dump(data, f, indent=2, ensure_ascii=False)
        print(f"  [OK] Added '{report_id}' skeleton to reports.json (folder: {folder})")

    print(f"\n[SUCCESS] Scaffold created: {report_dir}/")
    print(f"\nNext steps:")
    print(f"  1. Edit reports.json → fill in '{report_id}' entry (title, sections, tags, colors)")
    print(f"  2. Extract PDF text → {report_id}/source/")
    print(f"  3. python gmp_engine.py md {report_id}       # generate knowledge MD, review hierarchy")
    print(f"  4. Generate bilingual HTML sections (Claude agents)")
    print(f"  5. python gmp_engine.py merge {report_id}    # merge HTML + refresh MD")
    print(f"  6. Update knowledge/INDEX.md")


# ============================================================
# MD COMMAND
# ============================================================

def _generate_md_for_report(report_id: str, config: dict):
    """Generate MD for one report: try PDF first, fall back to source text."""
    if report_id in PDF_FILES:
        result = generate_md_from_pdf(report_id, config)
        if result:
            return
    # Fallback to source text approach
    generate_md_from_source(report_id, config)


def cmd_md(args):
    if args.all:
        reports = find_all_reports()
        if not reports:
            print("[WARNING] No reports in reports.json.")
            return
        print(f"Generating knowledge MDs for {len(reports)} reports...\n")
        for rid in reports:
            print(f"\n--- {rid} ---")
            config = load_config(rid)
            _generate_md_for_report(rid, config)
        print("\nDone!")
    else:
        if not args.report_id:
            print("[ERROR] Specify a report ID or use --all")
            sys.exit(1)
        config = load_config(args.report_id)
        _generate_md_for_report(args.report_id, config)


# ============================================================
# MERGE COMMAND
# ============================================================

def _merge_one(report_id: str, config: dict):
    """Merge HTML for one report, then regenerate MD from source text if available."""
    section_map = config_to_section_map(config)
    run_merge(
        section_map=section_map,
        report_title_en=config["report_title_en"],
        report_subtitle_en=config["report_subtitle_en"],
        report_subtitle_zh=config.get("report_subtitle_zh", ""),
        output_filename=config["output_filename"],
        footer_text=config.get("footer_text", ""),
        chapter_label=config.get("chapter_label", "Section"),
        base_dir=str(_report_dir(report_id, config)),
    )
    # Overwrite the HTML-stripped MD with source-text MD if source files exist
    source_dir = _report_dir(report_id, config) / "source"
    txt_files = list(source_dir.glob("*.txt")) if source_dir.exists() else []
    if txt_files:
        print("  [MD] Regenerating from source text (overriding HTML-stripped version)...")
        generate_md_from_source(report_id, config)


def cmd_merge(args):
    if args.all:
        reports = find_all_reports()
        for rid in reports:
            print(f"\n{'='*60}")
            print(f"Merging: {rid}")
            config = load_config(rid)
            _merge_one(rid, config)
    else:
        if not args.report_id:
            print("[ERROR] Specify a report ID or use --all")
            sys.exit(1)
        config = load_config(args.report_id)
        _merge_one(args.report_id, config)


# ============================================================
# MAIN
# ============================================================

def main():
    parser = argparse.ArgumentParser(
        description="SterileGMP Knowledge Hub — document processing engine",
        formatter_class=argparse.RawDescriptionHelpFormatter,
        epilog=__doc__,
    )
    sub = parser.add_subparsers(dest="command")

    # scaffold
    p_scaffold = sub.add_parser("scaffold", help="Create new report folder + config.json")
    p_scaffold.add_argument("report_id", help="Report folder name (e.g., TR70, ISPE-Vol5)")
    p_scaffold.add_argument("--source", default="PDA", help="Source prefix: PDA (default), ISPE, FDA, etc.")

    # md
    p_md = sub.add_parser("md", help="Generate knowledge MD from source text")
    p_md.add_argument("report_id", nargs="?", help="Report folder name")
    p_md.add_argument("--all", action="store_true", help="Regenerate all reports")

    # merge
    p_merge = sub.add_parser("merge", help="Merge HTML sections into Complete.html + MD")
    p_merge.add_argument("report_id", nargs="?", help="Report folder name")
    p_merge.add_argument("--all", action="store_true", help="Merge all reports")

    args = parser.parse_args()

    if args.command == "scaffold":
        cmd_scaffold(args)
    elif args.command == "md":
        cmd_md(args)
    elif args.command == "merge":
        cmd_merge(args)
    else:
        parser.print_help()


if __name__ == "__main__":
    main()
