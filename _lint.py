"""
Audit all */output/*-Complete.html files for content bugs.

Checks:
  1. Double-encoded HTML entities (&amp;xxx;)
  2. Broken internal anchors (href="#X" where no element has id="X")
  3. Missing image files (<img src=...> resolves to non-existent file)
  4. Orphan template markers ({{...}}, ${...}, __PLACEHOLDER__)
  5. Duplicate id attributes

Writes `_audit_report.md` to repo root.
"""
import re
import sys
from collections import defaultdict, Counter
from pathlib import Path
from datetime import date

from bs4 import BeautifulSoup

REPO = Path(__file__).parent
SOURCES = ['FDA', 'ICH', 'ISO', 'ISPE', 'PDA', 'PHEUR', 'PICS', 'USP']

# Check 1: double-encoded entities — any &amp;<word>;
DOUBLE_ENC_RE = re.compile(r'&amp;([a-zA-Z][a-zA-Z0-9]+);')

# Check 4: orphan template markers — only outside <script> / <style> blocks
#   We strip those before running this check.
TEMPLATE_RE = re.compile(r'(\{\{[^}]{1,100}\}\}|\$\{[^}]{1,100}\}|__[A-Z][A-Z0-9_]{2,39}__)')


def line_of(text: str, idx: int) -> int:
    return text.count('\n', 0, idx) + 1


def strip_script_style(html: str) -> str:
    """Replace <script>..</script> and <style>..</style> contents with blanks
    (preserving byte offsets for accurate line numbers)."""
    def blank(m):
        return m.group(0)[0] + ' ' * (len(m.group(0)) - 2) + m.group(0)[-1]
    # Preserve offset by replacing inner text with spaces but keep tags
    def replace_inner(match):
        full = match.group(0)
        open_tag = match.group(1)
        close_tag = match.group(3)
        inner = match.group(2)
        return open_tag + (' ' * len(inner)) + close_tag
    pat = re.compile(r'(<(?:script|style)[^>]*>)(.*?)(</(?:script|style)>)',
                     re.IGNORECASE | re.DOTALL)
    return pat.sub(replace_inner, html)


def check_file(path: Path):
    """Return list of (category, line, message) tuples."""
    issues = []
    try:
        raw = path.read_text(encoding='utf-8')
    except Exception as e:
        issues.append(('read-error', 0, f'{type(e).__name__}: {e}'))
        return issues

    # Check 1: double-encoded entities
    for m in DOUBLE_ENC_RE.finditer(raw):
        issues.append(('double-encoded-entity', line_of(raw, m.start()),
                       f'&amp;{m.group(1)}; (line may contain multiple)'))

    # Check 4: orphan template markers — on content with script/style blanked
    content = strip_script_style(raw)
    for m in TEMPLATE_RE.finditer(content):
        issues.append(('orphan-template', line_of(raw, m.start()),
                       f'{m.group(0)!r}'))

    # Parse once for remaining structural checks
    try:
        soup = BeautifulSoup(raw, 'html.parser')
    except Exception as e:
        issues.append(('parse-error', 0, f'{type(e).__name__}: {e}'))
        return issues

    # Check 2: broken internal anchors
    all_ids = {el.get('id') for el in soup.find_all(id=True)}
    all_ids.discard(None)
    for a in soup.find_all('a', href=True):
        href = a['href']
        if href.startswith('#') and len(href) > 1:
            target = href[1:]
            if target not in all_ids:
                issues.append(('broken-anchor', 0,
                               f'href="{href}" (link text: {a.get_text()[:40]!r})'))

    # Check 3: missing image files
    base_dir = path.parent
    for img in soup.find_all('img', src=True):
        src = img['src'].strip()
        if not src or src.startswith(('http://', 'https://', 'data:', '//')):
            continue
        # Resolve relative path
        candidate = (base_dir / src).resolve()
        if not candidate.exists():
            issues.append(('missing-image', 0,
                           f'src="{src}" (resolved: not found)'))

    # Check 5: duplicate id attributes
    id_counter = Counter()
    for el in soup.find_all(id=True):
        id_counter[el['id']] += 1
    for id_val, count in id_counter.items():
        if count > 1:
            issues.append(('duplicate-id', 0,
                           f'id="{id_val}" appears {count}x'))

    return issues


def main():
    targets = []
    for src in SOURCES:
        root = REPO / src
        if root.exists():
            targets.extend(root.rglob('output/*-Complete.html'))

    print(f'Scanning {len(targets)} Complete.html files...', file=sys.stderr)

    per_file = {}
    by_category = defaultdict(list)
    for f in sorted(targets):
        rel = f.relative_to(REPO).as_posix()
        issues = check_file(f)
        if issues:
            per_file[rel] = issues
            for cat, line, msg in issues:
                by_category[cat].append((rel, line, msg))

    # Write report
    out = REPO / '_audit_report.md'
    lines = []
    lines.append(f'# Complete.html Audit Report')
    lines.append('')
    lines.append(f'- Generated: {date.today().isoformat()}')
    lines.append(f'- Files scanned: {len(targets)}')
    lines.append(f'- Files with issues: {len(per_file)}')
    lines.append(f'- Total issues: {sum(len(v) for v in per_file.values())}')
    lines.append('')

    # Category summary
    lines.append('## Issues by Category')
    lines.append('')
    lines.append('| Category | Count | Files |')
    lines.append('|----------|-------|-------|')
    for cat in sorted(by_category, key=lambda c: -len(by_category[c])):
        items = by_category[cat]
        affected = len({x[0] for x in items})
        lines.append(f'| {cat} | {len(items)} | {affected} |')
    lines.append('')

    # Per-file summary (sorted by issue count desc)
    lines.append('## Files Ranked by Issue Count')
    lines.append('')
    lines.append('| File | Issues |')
    lines.append('|------|--------|')
    for rel, issues in sorted(per_file.items(), key=lambda kv: -len(kv[1])):
        cats = Counter(i[0] for i in issues)
        cat_str = ', '.join(f'{c}:{n}' for c, n in cats.most_common())
        lines.append(f'| `{rel}` | {len(issues)} ({cat_str}) |')
    lines.append('')

    # Detail by category (cap per category to keep report readable)
    DETAIL_CAP = 50
    for cat in sorted(by_category, key=lambda c: -len(by_category[c])):
        items = by_category[cat]
        lines.append(f'## Detail: {cat} ({len(items)})')
        lines.append('')
        # De-duplicate by (file, message) so repeated lines collapse
        seen = set()
        shown = 0
        for rel, line, msg in items:
            key = (rel, msg)
            if key in seen:
                continue
            seen.add(key)
            loc = f'L{line}' if line else ''
            lines.append(f'- `{rel}` {loc} — {msg}')
            shown += 1
            if shown >= DETAIL_CAP:
                remaining = len({(r, m) for r, _, m in items} - seen)
                if remaining:
                    lines.append(f'- … ({remaining} more distinct items truncated)')
                break
        lines.append('')

    out.write_text('\n'.join(lines), encoding='utf-8')
    print(f'Wrote {out}', file=sys.stderr)
    print(f'Files with issues: {len(per_file)}, total issues: '
          f'{sum(len(v) for v in per_file.values())}', file=sys.stderr)


if __name__ == '__main__':
    main()
