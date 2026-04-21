"""Delete TR80 vec-p24-1.png fake entry (body text mis-matched as Figure 6.2-1)."""
import json
from pathlib import Path

ROOT = Path(__file__).resolve().parents[2]
MANIFEST = ROOT / 'figures-manifest.json'

manifest = json.loads(MANIFEST.read_text(encoding='utf-8'))
entries = manifest.get('TR80', {}).get('figures', [])
before = len(entries)
manifest['TR80']['figures'] = [e for e in entries if e.get('file') != 'vec-p24-1.png']
after = len(manifest['TR80']['figures'])

for sub in ['figures', 'figures-thumb']:
    p = ROOT / 'PDA' / 'TR80' / sub / 'vec-p24-1.png'
    if p.exists():
        p.unlink()
        print(f'deleted {p}')

MANIFEST.write_text(json.dumps(manifest, ensure_ascii=False, indent=2), encoding='utf-8')
print(f'manifest TR80: {before} -> {after}')
