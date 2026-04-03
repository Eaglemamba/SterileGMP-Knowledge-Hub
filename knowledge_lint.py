#!/usr/bin/env python3
"""Knowledge Lint — Level 1 Structural Check for HTML doc files.

Scans HTML files for required dashboard meta tags, validates formats,
and outputs a lint-report.md.

Usage:
    python knowledge_lint.py ./docs
    python knowledge_lint.py ./docs --output ./docs/lint-report.md
"""

import os
import re
import sys
import glob
from datetime import date

# ---------------------------------------------------------------------------
# Configuration
# ---------------------------------------------------------------------------

REQUIRED_META = [
    "doc-date",
    "doc-title",
    "doc-source",
    "doc-tags",
    "doc-rating",
    "doc-summary",
    "doc-file",
]

STANDARD_CATEGORIES = {
    "Anthropic-Docs",
    "Anthropic-Eng",
    "Agent",
    "Tool",
    "LLM",
    "Prompt",
    "Framework",
    "Analysis",
    "Automation",
    "Security",
    "Content",
    "API",
    "Research",
}

DATE_RE = re.compile(r"^\d{4}-\d{2}-\d{2}$")
FILENAME_RE = re.compile(r"^\d{4}-\d{2}-\d{2}_[a-z0-9]+(?:-[a-z0-9]+)*\.html$")
META_RE = re.compile(
    r'<meta\s+name=["\']([^"\']+)["\']\s+content=["\']([^"\']*)["\']',
    re.IGNORECASE,
)

# ---------------------------------------------------------------------------
# Helpers
# ---------------------------------------------------------------------------


def extract_meta(filepath):
    """Return dict of meta name -> content from an HTML file."""
    meta = {}
    with open(filepath, "r", encoding="utf-8", errors="replace") as fh:
        # Only scan the first 5 KB (meta tags live in <head>)
        head = fh.read(5120)
    for m in META_RE.finditer(head):
        meta[m.group(1)] = m.group(2)
    return meta


def load_index_refs(index_path):
    """Return set of .html filenames referenced in index.md."""
    refs = set()
    if not os.path.isfile(index_path):
        return refs
    html_ref_re = re.compile(r'[\(/]?([A-Za-z0-9_-]+\.html)')
    with open(index_path, "r", encoding="utf-8", errors="replace") as fh:
        for line in fh:
            for m in html_ref_re.finditer(line):
                refs.add(m.group(1))
    return refs


# ---------------------------------------------------------------------------
# Checks
# ---------------------------------------------------------------------------


def check_required_meta(filename, meta):
    """Check 1 — all required meta tags present."""
    issues = []
    for tag in REQUIRED_META:
        if tag not in meta:
            issues.append(f"MISSING_META: {filename} missing {tag}")
    return issues


def check_date_format(filename, meta):
    """Check 2 — doc-date matches YYYY-MM-DD."""
    val = meta.get("doc-date")
    if val is not None and not DATE_RE.match(val):
        return [f'BAD_DATE: {filename} has doc-date="{val}"']
    return []


def check_tags(filename, meta):
    """Check 3 — every tag in doc-tags must be a standard category."""
    val = meta.get("doc-tags")
    if val is None:
        return []
    issues = []
    for tag in val.split(","):
        tag = tag.strip()
        if tag and tag not in STANDARD_CATEGORIES:
            issues.append(f'INVALID_TAG: {filename} has unknown tag "{tag}"')
    return issues


def check_rating(filename, meta):
    """Check 4 — doc-rating between 1.0 and 5.0."""
    val = meta.get("doc-rating")
    if val is None:
        return []
    try:
        r = float(val)
        if r < 1.0 or r > 5.0:
            raise ValueError
    except ValueError:
        return [f'BAD_RATING: {filename} has doc-rating="{val}"']
    return []


def check_file_match(filename, meta):
    """Check 5 — doc-file must equal actual filename."""
    val = meta.get("doc-file")
    if val is None:
        return []
    if val != filename:
        return [f'FILENAME_MISMATCH: {filename} has doc-file="{val}"']
    return []


def check_file_format(filename, meta):
    """Check 6 — doc-file matches YYYY-MM-DD_slug.html pattern."""
    val = meta.get("doc-file")
    if val is None:
        return []
    if not FILENAME_RE.match(val):
        return [f'BAD_FILENAME: {filename} has doc-file="{val}"']
    return []


def check_index_coverage(html_files, index_refs, docs_dir):
    """Check 7 — cross-reference HTML files vs index.md."""
    issues = []
    html_names = {os.path.basename(f) for f in html_files}
    for name in sorted(html_names):
        if name not in index_refs:
            issues.append(f"NOT_IN_INDEX: {name} exists but not referenced in index.md")
    for ref in sorted(index_refs):
        if ref not in html_names and not os.path.isfile(os.path.join(docs_dir, ref)):
            issues.append(f'DEAD_LINK: index.md references "{ref}" but file not found')
    return issues


# ---------------------------------------------------------------------------
# Report generation
# ---------------------------------------------------------------------------

CHECK_NAMES = [
    "Required Meta Tags",
    "doc-date Format",
    "doc-tags Validation",
    "doc-rating Range",
    "doc-file Match",
    "doc-file Format",
    "Index Coverage",
]


def generate_report(docs_dir, output_path=None):
    """Run all Level 1 checks and write lint-report.md."""
    if output_path is None:
        output_path = os.path.join(docs_dir, "lint-report.md")

    # Collect HTML files
    html_files = sorted(glob.glob(os.path.join(docs_dir, "**", "*.html"), recursive=True))
    if not html_files:
        print(f"No HTML files found in {docs_dir}")
        # Write an empty report
        with open(output_path, "w", encoding="utf-8") as fh:
            fh.write(f"# Knowledge Lint Report\n- Run date: {date.today()}\n"
                      f"- Files scanned: 0\n- Issues found: 0\n\nNo HTML files found.\n")
        return output_path, 0, 0

    # Check for index.md
    index_path = os.path.join(docs_dir, "index.md")
    index_refs = load_index_refs(index_path)
    has_index = os.path.isfile(index_path)

    # Run checks per file
    file_issues = {}  # filename -> list of flags
    counters = {name: {"pass": 0, "fail": 0} for name in CHECK_NAMES}

    for fpath in html_files:
        fname = os.path.basename(fpath)
        meta = extract_meta(fpath)
        issues = []

        # Check 1
        c1 = check_required_meta(fname, meta)
        issues.extend(c1)
        counters["Required Meta Tags"]["fail" if c1 else "pass"] += 1

        # Check 2
        c2 = check_date_format(fname, meta)
        issues.extend(c2)
        counters["doc-date Format"]["fail" if c2 else "pass"] += 1

        # Check 3
        c3 = check_tags(fname, meta)
        issues.extend(c3)
        counters["doc-tags Validation"]["fail" if c3 else "pass"] += 1

        # Check 4
        c4 = check_rating(fname, meta)
        issues.extend(c4)
        counters["doc-rating Range"]["fail" if c4 else "pass"] += 1

        # Check 5
        c5 = check_file_match(fname, meta)
        issues.extend(c5)
        counters["doc-file Match"]["fail" if c5 else "pass"] += 1

        # Check 6
        c6 = check_file_format(fname, meta)
        issues.extend(c6)
        counters["doc-file Format"]["fail" if c6 else "pass"] += 1

        if issues:
            file_issues[fname] = issues

    # Check 7 — index coverage
    if has_index:
        c7 = check_index_coverage(html_files, index_refs, docs_dir)
        idx_html_names = {os.path.basename(f) for f in html_files}
        in_index_count = sum(1 for n in idx_html_names if n in index_refs)
        counters["Index Coverage"]["pass"] = in_index_count
        counters["Index Coverage"]["fail"] = len(idx_html_names) - in_index_count + \
            sum(1 for i in c7 if i.startswith("DEAD_LINK"))
        for issue in c7:
            # Group under a pseudo filename
            key = issue.split(":")[0]
            fname_match = re.search(r":\s*(\S+\.html)", issue) or re.search(r'"([^"]+)"', issue)
            gkey = fname_match.group(1) if fname_match else "index.md"
            file_issues.setdefault(gkey, []).append(issue)
    else:
        counters["Index Coverage"]["pass"] = "N/A"
        counters["Index Coverage"]["fail"] = "N/A"

    total_issues = sum(len(v) for v in file_issues.values())
    clean_files = sorted(set(os.path.basename(f) for f in html_files) - set(file_issues.keys()))

    # Build report
    lines = []
    lines.append("# Knowledge Lint Report")
    lines.append(f"- Run date: {date.today()}")
    lines.append(f"- Files scanned: {len(html_files)}")
    lines.append(f"- Issues found: {total_issues}")
    lines.append("")
    lines.append("## Summary")
    lines.append("| Check | Pass | Fail |")
    lines.append("|-------|------|------|")
    for name in CHECK_NAMES:
        p = counters[name]["pass"]
        f = counters[name]["fail"]
        lines.append(f"| {name} | {p} | {f} |")
    lines.append("")

    # Issues grouped by filename
    lines.append("## Issues")
    if file_issues:
        for fname in sorted(file_issues.keys()):
            lines.append(f"\n### {fname}")
            for issue in file_issues[fname]:
                lines.append(f"- {issue}")
    else:
        lines.append("\nNo issues found.")
    lines.append("")

    # Clean files
    lines.append("## Clean Files")
    if clean_files:
        for f in clean_files:
            lines.append(f"- {f}")
    else:
        lines.append("No files passed all checks.")
    lines.append("")

    report_text = "\n".join(lines)

    with open(output_path, "w", encoding="utf-8") as fh:
        fh.write(report_text)

    # Terminal summary
    print(f"\n{'='*60}")
    print(f"Knowledge Lint Report — Level 1")
    print(f"{'='*60}")
    print(f"  Directory : {docs_dir}")
    print(f"  Files     : {len(html_files)}")
    print(f"  Issues    : {total_issues}")
    print(f"  Clean     : {len(clean_files)}")
    print(f"  Report    : {output_path}")
    print(f"{'='*60}")
    for name in CHECK_NAMES:
        p = counters[name]["pass"]
        f = counters[name]["fail"]
        print(f"  {name:25s}  Pass={p}  Fail={f}")
    print(f"{'='*60}\n")

    return output_path, len(html_files), total_issues


# ---------------------------------------------------------------------------
# CLI
# ---------------------------------------------------------------------------

if __name__ == "__main__":
    if len(sys.argv) < 2:
        print("Usage: python knowledge_lint.py <docs_directory> [--output <path>]")
        sys.exit(1)

    docs = sys.argv[1]
    output = None
    if "--output" in sys.argv:
        idx = sys.argv.index("--output")
        if idx + 1 < len(sys.argv):
            output = sys.argv[idx + 1]

    if not os.path.isdir(docs):
        print(f"Error: {docs} is not a directory")
        sys.exit(1)

    generate_report(docs, output)
