"""Rollback partial Phase 3 extracts: remove vec-p*-figure-*.png files and entries."""
import json
from pathlib import Path

ROOT = Path(__file__).resolve().parents[2]
MANIFEST = ROOT / 'figures-manifest.json'
FIGS_DIR = ROOT / 'PDA' / 'TR80' / 'figures'

manifest = json.loads(MANIFEST.read_text(encoding='utf-8'))
entries = manifest['TR80']['figures']
before = len(entries)
kept = []
for e in entries:
    fname = e.get('file', '')
    if e.get('render') == 'fallback-phase3':
        p = FIGS_DIR / fname
        if p.exists():
            p.unlink()
            print(f'  deleted {fname}')
        continue
    kept.append(e)
manifest['TR80']['figures'] = kept
MANIFEST.write_text(json.dumps(manifest, ensure_ascii=False, indent=2), encoding='utf-8')
print(f'rolled back {before - len(kept)} entries; TR80 now {len(kept)}')
