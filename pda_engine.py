#!/usr/bin/env python3
"""
pda_engine.py — Unified PDA Technical Report processing engine
===============================================================
Replaces: merge_engine.py (library), new_report.py, regenerate_knowledge.py,
          and per-report merge.py files.

Each report is defined by a config.json in its folder (no more per-report .py).

Usage:
    python pda_engine.py scaffold TRXX             # Create new report folder + config.json
    python pda_engine.py md TRXX                   # Generate knowledge MD from source text
    python pda_engine.py md --all                   # Regenerate all knowledge MDs from source
    python pda_engine.py merge TRXX                # Merge HTML sections → Complete.html + MD
    python pda_engine.py merge --all               # Merge all reports

MD-first workflow (recommended for new reports):
    1. pda_engine.py scaffold TRXX
    2. Extract PDF text → TRXX/source/
    3. pda_engine.py md TRXX                        # structured English MD, review hierarchy
    4. Generate bilingual HTML sections (Claude agents)
    5. pda_engine.py merge TRXX                     # merge HTML + refresh MD from source
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

    sections_dir = REPO_ROOT / report_id / "sections"
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
    source_dir = REPO_ROOT / report_id / "source"

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
    # Separate full-text files from section files
    full_text = [f for f in txt_files if "full-text" in f.name.lower()]
    section_files = [f for f in txt_files if "full-text" not in f.name.lower()]

    # Prefer section files (they're pre-split); fall back to full-text
    files_to_read = section_files if section_files else full_text

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

    for txt_file in files_to_read:
        with open(txt_file, "r", encoding="utf-8") as f:
            raw_lines = f.readlines()

        skip_raw_table = False  # reset at each source file boundary

        # Build list of HTML tables available for this source file
        # Match by filename pattern: sec01a-text.txt → section-01a-*.html
        src_stem = txt_file.stem.replace('-text', '')  # e.g., "sec01a"
        file_html_tables = []
        for fn, tbls in tables_by_file.items():
            # Normalize: "section-01a-process-design.html" → check if "01a" is in it
            fn_parts = fn.replace('section-', '').split('-')
            src_parts = src_stem.replace('sec', '')
            if src_parts and src_parts in fn:
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
                UNIT_WORDS = {'L', 'PSI', 'PSIG', 'KG', 'ML', 'MM', 'CM', 'HR', 'MIN'}
                not_unit = first_word not in UNIT_WORDS and not re.match(r'^[A-Z][a-z]*/[A-Za-z²³]+$', first_word)
                # Reasonable length
                not_long = len(stripped) < 150

                if (
                    has_dot
                    and first_part > 0
                    and starts_upper
                    and not_paren
                    and not_toc
                    and not_unit
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

    KNOWLEDGE_DIR.mkdir(exist_ok=True)

    output_stem = config["output_filename"].replace(".html", "")
    md_path = KNOWLEDGE_DIR / f"{output_stem}.md"

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
# SCAFFOLD
# ============================================================

def cmd_scaffold(args):
    report_id = args.report_id
    report_dir = REPO_ROOT / report_id

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
            "source": f"PDA {report_id}",
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
        print(f"  [OK] Added '{report_id}' skeleton to reports.json")

    print(f"\n[SUCCESS] Scaffold created: {report_dir}/")
    print(f"\nNext steps:")
    print(f"  1. Edit reports.json → fill in '{report_id}' entry (title, sections, tags, colors)")
    print(f"  2. Extract PDF text → {report_id}/source/")
    print(f"  3. python pda_engine.py md {report_id}       # generate knowledge MD, review hierarchy")
    print(f"  4. Generate bilingual HTML sections (Claude agents)")
    print(f"  5. python pda_engine.py merge {report_id}    # merge HTML + refresh MD")
    print(f"  6. Update knowledge/INDEX.md")


# ============================================================
# MD COMMAND
# ============================================================

def cmd_md(args):
    if args.all:
        reports = find_all_reports()
        if not reports:
            print("[WARNING] No reports with config.json found.")
            return
        print(f"Generating knowledge MDs for {len(reports)} reports...\n")
        for rid in reports:
            print(f"--- {rid} ---")
            config = load_config(rid)
            generate_md_from_source(rid, config)
        print("\nDone!")
    else:
        if not args.report_id:
            print("[ERROR] Specify a report ID or use --all")
            sys.exit(1)
        config = load_config(args.report_id)
        generate_md_from_source(args.report_id, config)


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
        base_dir=str(REPO_ROOT / report_id),
    )
    # Overwrite the HTML-stripped MD with source-text MD if source files exist
    source_dir = REPO_ROOT / report_id / "source"
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
        description="PDA Technical Report processing engine",
        formatter_class=argparse.RawDescriptionHelpFormatter,
        epilog=__doc__,
    )
    sub = parser.add_subparsers(dest="command")

    # scaffold
    p_scaffold = sub.add_parser("scaffold", help="Create new report folder + config.json")
    p_scaffold.add_argument("report_id", help="Report folder name (e.g., TR70)")

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
