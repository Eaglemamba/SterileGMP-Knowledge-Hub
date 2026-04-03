#!/usr/bin/env python3
"""Knowledge Lint — Structural & consistency validator for SterileGMP Knowledge Hub.

Reads reports.json (single source of truth) and validates:
  Level 1 (automated): required fields, date format, tags, output files,
                        section files, knowledge MDs, INDEX.md coverage.

Usage:
    python knowledge_lint.py                       # default: repo root
    python knowledge_lint.py /path/to/repo
    python knowledge_lint.py . --output report.md
"""

import json
import os
import re
import sys
from datetime import date

# ---------------------------------------------------------------------------
# Configuration
# ---------------------------------------------------------------------------

REQUIRED_FIELDS = [
    "report_title_en",
    "report_subtitle_en",
    "report_subtitle_zh",
    "output_filename",
    "footer_text",
    "chapter_label",
    "date",
    "title",
    "titleZh",
    "source",
    "source_color",
    "tags",
    "summary",
    "pages",
    "section_map",
    "folder",
]

SOURCE_COLOR_FIELDS = ["bg", "text", "bar", "short"]

DATE_RE = re.compile(r"^\d{4}-\d{2}-\d{2}$")
PAGES_RE = re.compile(r"^p\d+[-–]p\d+$")

# Source prefixes expected per org
SOURCE_PREFIXES = {
    "PDA": "PDA",
    "ISPE": "ISPE",
    "FDA": "FDA",
    "PICS": "PIC/S",
    "ICH": "ICH",
    "ISO": "ISO",
    "USP": "USP",
}

# ---------------------------------------------------------------------------
# Helpers
# ---------------------------------------------------------------------------


def load_reports(repo_root):
    path = os.path.join(repo_root, "reports.json")
    with open(path, "r", encoding="utf-8") as fh:
        data = json.load(fh)
    return data


def load_index_md(repo_root):
    """Return set of knowledge MD filenames referenced in INDEX.md."""
    path = os.path.join(repo_root, "knowledge", "INDEX.md")
    refs = set()
    if not os.path.isfile(path):
        return refs, False
    with open(path, "r", encoding="utf-8") as fh:
        content = fh.read()
    # Match ## PDA/TR26-Complete.md style headers and inline refs
    for m in re.finditer(r"([A-Za-z0-9_/-]+\.md)", content):
        refs.add(m.group(1))
    return refs, True


# ---------------------------------------------------------------------------
# Level 1 Checks
# ---------------------------------------------------------------------------


def check_required_fields(report_id, report):
    """Check 1: Required fields present in reports.json entry."""
    issues = []
    for field in REQUIRED_FIELDS:
        if field not in report:
            issues.append(f"MISSING_FIELD: {report_id} missing \"{field}\" in reports.json")
    return issues


def check_date_format(report_id, report):
    """Check 2: date field matches YYYY-MM-DD."""
    val = report.get("date", "")
    if val and not DATE_RE.match(val):
        return [f'BAD_DATE: {report_id} has date="{val}"']
    return []


def check_tags_in_tagclasses(report_id, report, tag_classes):
    """Check 3: Every tag in report must exist in tagClasses."""
    issues = []
    for tag in report.get("tags", []):
        if tag not in tag_classes:
            issues.append(f'TAG_NOT_IN_CLASSES: {report_id} uses tag "{tag}" not defined in tagClasses')
    return issues


def check_source_color(report_id, report):
    """Check 4: source_color has required sub-fields."""
    sc = report.get("source_color")
    if sc is None:
        return []
    issues = []
    for f in SOURCE_COLOR_FIELDS:
        if f not in sc:
            issues.append(f'MISSING_SOURCE_COLOR: {report_id} source_color missing "{f}"')
    return issues


def check_output_file_exists(report_id, report, repo_root):
    """Check 5: The merged output HTML file exists on disk."""
    folder = report.get("folder", "")
    fname = report.get("output_filename", "")
    if not folder or not fname:
        return []
    path = os.path.join(repo_root, folder, "output", fname)
    if not os.path.isfile(path):
        return [f'MISSING_OUTPUT: {report_id} output file not found: {folder}/output/{fname}']
    return []


def check_section_files_exist(report_id, report, repo_root):
    """Check 6: Every file in section_map exists in sections/ folder."""
    folder = report.get("folder", "")
    issues = []
    for sec in report.get("section_map", []):
        for f in sec.get("files", []):
            path = os.path.join(repo_root, folder, "sections", f)
            if not os.path.isfile(path):
                issues.append(f'MISSING_SECTION: {report_id} section file not found: {folder}/sections/{f}')
    return issues


def check_section_map_fields(report_id, report):
    """Check 7: Each section_map entry has required sub-fields."""
    issues = []
    for i, sec in enumerate(report.get("section_map", [])):
        for f in ["files", "id", "num", "label_en", "label_zh"]:
            if f not in sec:
                issues.append(f'SECTION_MAP_FIELD: {report_id} section_map[{i}] missing "{f}"')
        if not sec.get("files"):
            issues.append(f'EMPTY_SECTION_FILES: {report_id} section_map[{i}] has empty files list')
    return issues


def check_knowledge_md_exists(report_id, report, repo_root):
    """Check 8: Corresponding knowledge MD file exists."""
    folder = report.get("folder", "")
    fname = report.get("output_filename", "")
    if not folder or not fname:
        return []
    # knowledge/<ORG>/<ID>-Complete.md
    org = folder.split("/")[0] if "/" in folder else folder
    md_name = fname.replace(".html", ".md")
    path = os.path.join(repo_root, "knowledge", org, md_name)
    if not os.path.isfile(path):
        return [f'MISSING_KNOWLEDGE_MD: {report_id} expected knowledge/{org}/{md_name}']
    return []


def check_index_md_coverage(report_id, report, index_refs):
    """Check 9: Report's knowledge MD is referenced in INDEX.md."""
    folder = report.get("folder", "")
    fname = report.get("output_filename", "")
    if not folder or not fname:
        return []
    org = folder.split("/")[0] if "/" in folder else folder
    md_name = fname.replace(".html", ".md")
    ref_path = f"{org}/{md_name}"
    if ref_path not in index_refs:
        return [f'NOT_IN_INDEX: {report_id} ({ref_path}) not referenced in knowledge/INDEX.md']
    return []


def check_folder_consistency(report_id, report):
    """Check 10: folder value is consistent with source org."""
    folder = report.get("folder", "")
    source = report.get("source", "")
    if not folder:
        return []
    org = folder.split("/")[0]
    expected_prefix = SOURCE_PREFIXES.get(org)
    if expected_prefix and source and not source.startswith(expected_prefix):
        return [f'FOLDER_SOURCE_MISMATCH: {report_id} folder starts with "{org}" but source="{source}"']
    return []


def check_pages_format(report_id, report):
    """Check 11: pages field matches pN-pN format."""
    val = report.get("pages", "")
    if val and not PAGES_RE.match(val):
        return [f'BAD_PAGES: {report_id} has pages="{val}"']
    return []


# ---------------------------------------------------------------------------
# Report generation
# ---------------------------------------------------------------------------

CHECK_NAMES = [
    "Required Fields",
    "Date Format",
    "Tags in tagClasses",
    "Source Color Fields",
    "Output File Exists",
    "Section Files Exist",
    "Section Map Fields",
    "Knowledge MD Exists",
    "INDEX.md Coverage",
    "Folder-Source Consistency",
    "Pages Format",
]


def run_lint(repo_root, output_path=None):
    """Run all Level 1 checks and write lint-report.md."""
    if output_path is None:
        output_path = os.path.join(repo_root, "lint-report.md")

    data = load_reports(repo_root)
    reports = data.get("reports", {})
    tag_classes = data.get("tagClasses", {})
    index_refs, has_index = load_index_md(repo_root)

    if not reports:
        print("No reports found in reports.json")
        with open(output_path, "w", encoding="utf-8") as fh:
            fh.write(f"# Knowledge Lint Report\n- Run date: {date.today()}\n"
                      "- Reports scanned: 0\n- Issues found: 0\n\nNo reports found.\n")
        return output_path, 0, 0

    # Run checks per report
    report_issues = {}  # report_id -> list of flags
    counters = {name: {"pass": 0, "fail": 0} for name in CHECK_NAMES}

    checks = [
        ("Required Fields", lambda rid, r: check_required_fields(rid, r)),
        ("Date Format", lambda rid, r: check_date_format(rid, r)),
        ("Tags in tagClasses", lambda rid, r: check_tags_in_tagclasses(rid, r, tag_classes)),
        ("Source Color Fields", lambda rid, r: check_source_color(rid, r)),
        ("Output File Exists", lambda rid, r: check_output_file_exists(rid, r, repo_root)),
        ("Section Files Exist", lambda rid, r: check_section_files_exist(rid, r, repo_root)),
        ("Section Map Fields", lambda rid, r: check_section_map_fields(rid, r)),
        ("Knowledge MD Exists", lambda rid, r: check_knowledge_md_exists(rid, r, repo_root)),
        ("INDEX.md Coverage", lambda rid, r: check_index_md_coverage(rid, r, index_refs) if has_index else []),
        ("Folder-Source Consistency", lambda rid, r: check_folder_consistency(rid, r)),
        ("Pages Format", lambda rid, r: check_pages_format(rid, r)),
    ]

    for rid in sorted(reports.keys()):
        r = reports[rid]
        issues = []
        for check_name, check_fn in checks:
            result = check_fn(rid, r)
            issues.extend(result)
            counters[check_name]["fail" if result else "pass"] += 1
        if issues:
            report_issues[rid] = issues

    # Orphan tagClasses check (tags defined but never used)
    all_used_tags = set()
    for r in reports.values():
        all_used_tags.update(r.get("tags", []))
    orphan_tags = sorted(set(tag_classes.keys()) - all_used_tags)

    total_issues = sum(len(v) for v in report_issues.values())
    clean_reports = sorted(set(reports.keys()) - set(report_issues.keys()))

    # Build report
    lines = []
    lines.append("# Knowledge Lint Report")
    lines.append(f"- Run date: {date.today()}")
    lines.append(f"- Reports scanned: {len(reports)}")
    lines.append(f"- Dashboard files (Complete.html): {sum(1 for r in reports.values() if os.path.isfile(os.path.join(repo_root, r.get('folder',''), 'output', r.get('output_filename',''))))}")
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

    # Orphan tags
    if orphan_tags:
        lines.append("## Orphan tagClasses (defined but never used by any report)")
        for t in orphan_tags:
            lines.append(f"- `{t}`")
        lines.append("")

    # Unused tags (used but not in tagClasses)
    undefined_tags = sorted(all_used_tags - set(tag_classes.keys()))
    if undefined_tags:
        lines.append("## Undefined Tags (used by reports but missing from tagClasses)")
        for t in undefined_tags:
            # find which reports use it
            users = [rid for rid, r in reports.items() if t in r.get("tags", [])]
            lines.append(f"- `{t}` — used by: {', '.join(sorted(users))}")
        lines.append("")

    # Issues grouped by report
    lines.append("## Issues")
    if report_issues:
        for rid in sorted(report_issues.keys()):
            lines.append(f"\n### {rid}")
            for issue in report_issues[rid]:
                lines.append(f"- {issue}")
    else:
        lines.append("\nNo issues found.")
    lines.append("")

    # Clean reports
    lines.append("## Clean Reports")
    if clean_reports:
        for r in clean_reports:
            lines.append(f"- {r}")
    else:
        lines.append("No reports passed all checks.")
    lines.append("")

    report_text = "\n".join(lines)

    with open(output_path, "w", encoding="utf-8") as fh:
        fh.write(report_text)

    # Terminal summary
    print(f"\n{'='*60}")
    print("Knowledge Lint Report — Level 1")
    print(f"{'='*60}")
    print(f"  Repo root : {repo_root}")
    print(f"  Reports   : {len(reports)}")
    print(f"  Issues    : {total_issues}")
    print(f"  Clean     : {len(clean_reports)}")
    print(f"  Report at : {output_path}")
    print(f"{'='*60}")
    for name in CHECK_NAMES:
        p = counters[name]["pass"]
        f = counters[name]["fail"]
        print(f"  {name:30s}  Pass={p:<4}  Fail={f}")
    if orphan_tags:
        print(f"  {'Orphan tagClasses':30s}  {len(orphan_tags)} unused")
    if undefined_tags:
        print(f"  {'Undefined Tags':30s}  {len(undefined_tags)} missing from tagClasses")
    print(f"{'='*60}\n")

    return output_path, len(reports), total_issues


# ---------------------------------------------------------------------------
# CLI
# ---------------------------------------------------------------------------

if __name__ == "__main__":
    repo = sys.argv[1] if len(sys.argv) > 1 else "."
    output = None
    if "--output" in sys.argv:
        idx = sys.argv.index("--output")
        if idx + 1 < len(sys.argv):
            output = sys.argv[idx + 1]

    if not os.path.isdir(repo):
        print(f"Error: {repo} is not a directory")
        sys.exit(1)
    if not os.path.isfile(os.path.join(repo, "reports.json")):
        print(f"Error: {repo}/reports.json not found")
        sys.exit(1)

    run_lint(repo, output)
