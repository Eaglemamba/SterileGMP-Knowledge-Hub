#!/usr/bin/env python3
"""English overlay helper for section files.

  python3 scripts/i18n_sections.py extract <KEY>   # create/refresh <report>/sections-en/*.json
  python3 scripts/i18n_sections.py check <KEY>     # report untranslated, stale or malformed blocks

extract keeps existing translations, adds new Chinese blocks with "en": "" and
drops blocks whose Chinese no longer exists in the section file.
"""
import json, re, sys
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
sys.path.insert(0, str(ROOT))
from merge_engine import extract_i18n_blocks, _CJK_RE  # noqa: E402

TAG = re.compile(r'<(/?)([a-zA-Z0-9]+)')


def report_dir(key):
    r = json.load(open(ROOT / 'reports.json', encoding='utf-8'))['reports'][key]
    return ROOT / (r.get('folder') or key), r


def section_files(r):
    return [f for s in r['section_map'] for f in s['files']]


def extract(key):
    d, r = report_dir(key)
    (d / 'sections-en').mkdir(exist_ok=True)
    for f in section_files(r):
        blocks = extract_i18n_blocks((d / 'sections' / f).read_text(encoding='utf-8'))
        out = d / 'sections-en' / (Path(f).stem + '.json')
        old = {}
        if out.exists():
            old = {b['zh']: b.get('en', '') for b in json.load(open(out, encoding='utf-8'))['blocks']}
        data = {'source': f, 'blocks': [{'zh': z, 'en': old.get(z, '')} for z in blocks]}
        out.write_text(json.dumps(data, ensure_ascii=False, indent=1) + '\n', encoding='utf-8')
        print(f'{out.relative_to(ROOT)}: {len(blocks)} blocks, {sum(1 for b in data["blocks"] if not b["en"])} untranslated')


def check(key):
    d, r = report_dir(key)
    bad = 0
    for f in section_files(r):
        blocks = extract_i18n_blocks((d / 'sections' / f).read_text(encoding='utf-8'))
        p = d / 'sections-en' / (Path(f).stem + '.json')
        tr = {b['zh']: b.get('en', '') for b in json.load(open(p, encoding='utf-8'))['blocks']} if p.exists() else {}
        missing = [z for z in blocks if not tr.get(z)]
        stale = [z for z in tr if z not in set(blocks)]
        cjk = [z for z in blocks if tr.get(z) and _CJK_RE.search(tr[z])]
        tags = [z for z in blocks if tr.get(z) and sorted(TAG.findall(z)) != sorted(TAG.findall(tr[z]))]
        print(f'{f}: {len(blocks)} blocks | untranslated {len(missing)} | stale {len(stale)} | '
              f'Chinese left in English {len(cjk)} | tag mismatch {len(tags)}')
        for label, items in (('untranslated', missing), ('stale', stale), ('chinese-left', cjk), ('tag-mismatch', tags)):
            for z in items[:5]:
                print(f'   [{label}] {z[:90]}')
        bad += len(missing) + len(stale) + len(cjk) + len(tags)
    return 1 if bad else 0


if __name__ == '__main__':
    if len(sys.argv) != 3 or sys.argv[1] not in ('extract', 'check'):
        sys.exit(__doc__)
    sys.exit(extract(sys.argv[2]) if sys.argv[1] == 'extract' else check(sys.argv[2]))
