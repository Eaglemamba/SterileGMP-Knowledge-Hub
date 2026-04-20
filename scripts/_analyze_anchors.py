"""
Per-file broken-anchor triage: list broken hrefs alongside ALL existing
section-level ids in the same file, so you can eyeball the naming
mismatch pattern and decide typo vs missing section.
"""
import re
from pathlib import Path
from urllib.parse import unquote

from bs4 import BeautifulSoup

REPO = Path(__file__).parent
SOURCES = ['FDA', 'ICH', 'ISO', 'ISPE', 'PDA', 'PHEUR', 'PICS', 'USP']

# IDs that look like section anchors — prefixes commonly used for nav targets
SECTION_ID_PREFIX = re.compile(r'^(sec|section|ch|chapter|clause|cl|app|appendix|part|s[-_]?\d|\d)', re.IGNORECASE)


def classify_ids(all_ids):
    section = []
    other = []
    for i in sorted(all_ids):
        if SECTION_ID_PREFIX.match(i):
            section.append(i)
        else:
            other.append(i)
    return section, other


def analyze_file(path: Path):
    raw = path.read_text(encoding='utf-8')
    soup = BeautifulSoup(raw, 'html.parser')
    all_ids = {el.get('id') for el in soup.find_all(id=True) if el.get('id')}
    broken = []
    for a in soup.find_all('a', href=True):
        href = a['href']
        if not href.startswith('#') or len(href) <= 1:
            continue
        target = unquote(href[1:])
        if target in all_ids:
            continue
        link_text = ' '.join(a.get_text().split())[:80]
        broken.append((href, target, link_text))
    if not broken:
        return None
    section_ids, other_ids = classify_ids(all_ids)
    return {
        'broken': broken,
        'section_ids': section_ids,
        'other_ids_count': len(other_ids),
        'total_ids': len(all_ids),
    }


def main():
    targets = []
    for src in SOURCES:
        root = REPO / src
        if not root.exists():
            continue
        targets.extend(root.rglob('output/*-Complete.html'))

    lines = ['# Broken-Anchor Triage (per file)', '']
    total_broken = 0
    files_with_broken = 0
    for f in sorted(targets):
        result = analyze_file(f)
        if not result:
            continue
        files_with_broken += 1
        total_broken += len(result['broken'])
        rel = f.relative_to(REPO).as_posix()
        lines.append(f'## `{rel}`')
        lines.append('')
        lines.append(f'- Broken hrefs: **{len(result["broken"])}**')
        lines.append(f'- Section-like ids present ({len(result["section_ids"])}): '
                     + (', '.join(f'`{i}`' for i in result['section_ids']) or '_(none)_'))
        lines.append(f'- Other ids in file: {result["other_ids_count"]}')
        lines.append('')
        lines.append('| href | link text |')
        lines.append('|------|-----------|')
        for href, _target, text in result['broken']:
            lines.append(f'| `{href}` | {text} |')
        lines.append('')

    lines.insert(1, f'- Files with broken anchors: **{files_with_broken}**')
    lines.insert(2, f'- Total broken: **{total_broken}**')
    lines.insert(3, '')
    out = REPO / '_anchor_analysis.md'
    out.write_text('\n'.join(lines), encoding='utf-8')
    print(f'Wrote {out}')
    print(f'files={files_with_broken} total_broken={total_broken}')


if __name__ == '__main__':
    main()
