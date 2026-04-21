"""Find which docs the 9 None-doc violations belong to by scanning manifest."""
import json
import sys
import io
sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding='utf-8')
from pathlib import Path

ROOT = Path(__file__).resolve().parents[2]
manifest = json.loads((ROOT / 'figures-manifest.json').read_text(encoding='utf-8'))

targets = ['tbl-p41-1.png', 'tbl-p41-2.png', 'tbl-p42-2.png', 'tbl-p43-2.png',
           'tbl-p43-3.png', 'tbl-p44-2.png', 'tbl-p45-1.png',
           'tbl-p26-1.png', 'tbl-p26-4.png']

for doc, d in manifest.items():
    for e in d.get('figures', []):
        if e.get('file') in targets:
            print(f"{doc:20s} {e.get('file'):15s} type={e.get('type'):6s} label={e.get('label')} page={e.get('page')}")
