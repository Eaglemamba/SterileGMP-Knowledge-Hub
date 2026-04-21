"""Fix image rotations flagged by caption audit.

Reads caption-audit-summary.json, finds violations with notes indicating
a specific rotation (180° or 90°), then applies the inverse rotation
with PIL in place. Also rotates the matching thumbnail if present.

Usage:
    python _fix_rotations.py --deg 180          # fix 180° rotations only
    python _fix_rotations.py --deg 90           # interactive 90° (not implemented)
    python _fix_rotations.py --dry-run          # report only
"""
import json
import re
import sys
from pathlib import Path
from PIL import Image

ROOT = Path(__file__).resolve().parents[2]
SUMMARY = ROOT / 'scripts' / 'figures-review' / 'caption-audit-summary.json'
REPORTS = ROOT / 'reports.json'

deg_arg = 180
dry_run = False
for a in sys.argv[1:]:
    if a.startswith('--deg'):
        deg_arg = int(a.split('=')[-1]) if '=' in a else int(sys.argv[sys.argv.index(a)+1])
    if a == '--dry-run':
        dry_run = True

summary = json.loads(SUMMARY.read_text(encoding='utf-8'))
reports = json.loads(REPORTS.read_text(encoding='utf-8')).get('reports', {})

# Target 180 degree issues: note contains "180", "upside", "invert"
def is_180(note):
    n = (note or '').lower()
    return '180' in n or 'upside' in n or 'invert' in n

def is_90(note, pos):
    n = (note or '').lower()
    if is_180(n):
        return False
    return ('90' in n or 'rotated' in n or 'vertical' in n or pos == 'rotated')

targets = []
for v in summary['violations']:
    doc = v.get('doc')
    if not doc:
        continue
    note = v.get('notes') or ''
    pos = v.get('caption_position', '')
    if deg_arg == 180 and is_180(note):
        targets.append(v)
    elif deg_arg == 90 and is_90(note, pos):
        targets.append(v)

print(f'Target rotation: {deg_arg}°')
print(f'Candidates found: {len(targets)}')

fixed = 0
for v in targets:
    doc = v['doc']
    file = v['file']
    folder = reports.get(doc, {}).get('folder', doc)
    base = ROOT / folder
    for sub in ['figures', 'figures-thumb']:
        p = base / sub / file
        if not p.exists():
            continue
        if dry_run:
            print(f'  [dry] would rotate {sub}/{file} ({doc})')
            continue
        im = Image.open(p)
        rotated = im.rotate(deg_arg, expand=True)
        rotated.save(p)
        print(f'  rotated {sub}/{file} ({doc}) {im.size} -> {rotated.size}')
    fixed += 1

print(f'\nProcessed: {fixed} entries')
