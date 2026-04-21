"""Build TR80 validation input list: file + current label + path."""
import json
import sys
import io
sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding='utf-8')
from pathlib import Path

ROOT = Path(__file__).resolve().parents[2]
m = json.loads((ROOT / 'figures-manifest.json').read_text(encoding='utf-8'))
entries = m.get('TR80', {}).get('figures', [])
folder = ROOT / 'PDA' / 'TR80'
out = []
for e in entries:
    fname = e.get('file')
    thumb = folder / 'figures-thumb' / fname
    orig = folder / 'figures' / fname
    path = thumb if thumb.exists() else orig
    out.append({
        'file': fname,
        'page': e.get('page'),
        'type': e.get('type'),
        'label': e.get('label'),
        'caption': e.get('caption',''),
        'path': str(path).replace('\\','/'),
    })
print(json.dumps({'doc':'TR80','count':len(out),'items':out}, ensure_ascii=False, indent=2))
