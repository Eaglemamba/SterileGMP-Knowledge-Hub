"""Fix manifest type mislabels flagged by caption audit.

9 entries in TR80 + TR84 were extracted as type="table" but the image content
is actually a figure (software screenshot or flowchart with "Figure X.Y" caption).
Updates both `type` and `label` in figures-manifest.json.

Backs up the current manifest to figures-manifest.pre-mislabel-fix.json before writing.
"""
import json
from pathlib import Path

ROOT = Path(__file__).resolve().parents[2]
MANIFEST = ROOT / 'figures-manifest.json'
BACKUP = ROOT / 'figures-manifest.pre-mislabel-fix.json'

FIXES = {
    'TR80': {
        'tbl-p41-1.png': 'Figure 6.3.9.1-1',
        'tbl-p41-2.png': 'Figure 6.3.9.1-2',
        'tbl-p42-2.png': 'Figure 6.3.9.4-1',
        'tbl-p43-2.png': 'Figure 6.3.9.5-1',
        'tbl-p43-3.png': 'Figure 6.3.9.6-1',
        'tbl-p44-2.png': 'Figure 6.3.9.7-1',
        'tbl-p45-1.png': 'Figure 6.3.10.2-1',
    },
    'TR84': {
        'tbl-p26-1.png': 'Figure 4.5.1-1',
        'tbl-p26-4.png': 'Figure 4.5.1-2',
    },
}

manifest = json.loads(MANIFEST.read_text(encoding='utf-8'))
BACKUP.write_text(json.dumps(manifest, ensure_ascii=False, indent=2), encoding='utf-8')
print(f'backup: {BACKUP.name}')

fixed = 0
for doc, fixmap in FIXES.items():
    entries = manifest.get(doc, {}).get('figures', [])
    for e in entries:
        fname = e.get('file')
        if fname in fixmap:
            old_type = e.get('type')
            old_label = e.get('label')
            e['type'] = 'figure'
            e['label'] = fixmap[fname]
            fixed += 1
            print(f'  {doc}/{fname}: type {old_type}->figure, label {old_label!r}->{fixmap[fname]!r}')

MANIFEST.write_text(json.dumps(manifest, ensure_ascii=False, indent=2), encoding='utf-8')
print(f'\nfixed: {fixed} entries')
