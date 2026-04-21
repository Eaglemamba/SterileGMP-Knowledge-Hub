"""Apply TR80 Phase 1 fixes: delete fakes + duplicates, update labels.

Reads decisions from tr80-validate-output.json and applies them to
figures-manifest.json + removes files from PDA/TR80/figures/ and
PDA/TR80/figures-thumb/ (if exists).

Backs up manifest to figures-manifest.pre-tr80-phase1.json.
"""
import json
from pathlib import Path

ROOT = Path(__file__).resolve().parents[2]
MANIFEST = ROOT / 'figures-manifest.json'
BACKUP = ROOT / 'figures-manifest.pre-tr80-phase1.json'
VALIDATE = ROOT / 'scripts' / 'figures-review' / 'tr80-validate-output.json'
TR80_DIR = ROOT / 'PDA' / 'TR80'

v = json.loads(VALIDATE.read_text(encoding='utf-8'))
manifest = json.loads(MANIFEST.read_text(encoding='utf-8'))
BACKUP.write_text(json.dumps(manifest, ensure_ascii=False, indent=2), encoding='utf-8')
print(f'backup -> {BACKUP.name}')

entries = manifest['TR80']['figures']
print(f'TR80 before: {len(entries)}')

to_delete = set()
for f in v['fakes']:
    to_delete.add(f['file'])
for d in v['duplicates']:
    to_delete.add(d['delete'])

# Build label map
label_fixes = {lc['file']: lc['new'] for lc in v['label_corrections']}

# Special case: tbl-p54-1 needs type=figure too
type_fixes = {'tbl-p54-1.png': 'figure'}

new_entries = []
removed = 0
label_updates = 0
type_updates = 0
for e in entries:
    fname = e.get('file')
    if fname in to_delete:
        removed += 1
        for sub in ['figures', 'figures-thumb']:
            p = TR80_DIR / sub / fname
            if p.exists():
                p.unlink()
                print(f'  deleted {sub}/{fname}')
        # also try matching .jpeg variant
        jpeg = fname.rsplit('.', 1)[0] + '.jpeg'
        for sub in ['figures', 'figures-thumb']:
            p = TR80_DIR / sub / jpeg
            if p.exists():
                p.unlink()
                print(f'  deleted {sub}/{jpeg}')
        continue
    if fname in label_fixes:
        old = e.get('label')
        e['label'] = label_fixes[fname]
        label_updates += 1
        print(f'  label {fname}: {old!r} -> {label_fixes[fname]!r}')
    if fname in type_fixes:
        old_t = e.get('type')
        e['type'] = type_fixes[fname]
        type_updates += 1
        print(f'  type  {fname}: {old_t!r} -> {type_fixes[fname]!r}')
    new_entries.append(e)

manifest['TR80']['figures'] = new_entries
MANIFEST.write_text(json.dumps(manifest, ensure_ascii=False, indent=2), encoding='utf-8')

print(f'\nSummary:')
print(f'  removed entries/files: {removed}')
print(f'  label updates:         {label_updates}')
print(f'  type updates:          {type_updates}')
print(f'  TR80 after: {len(new_entries)}')
