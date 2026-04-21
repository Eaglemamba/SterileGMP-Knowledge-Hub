import json
import sys
import io
sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding='utf-8')
from pathlib import Path

ROOT = Path(__file__).resolve().parents[2]
m = json.loads((ROOT / 'figures-manifest.json').read_text(encoding='utf-8'))
entries = m.get('TR80', {}).get('figures', [])
print(f'TR80 total entries: {len(entries)}')
print()
for e in entries:
    label = e.get('label') or ''
    if '6.2' in label or '6.2.1' in label or 'p27' in e.get('file','') or 'p28' in e.get('file','') or 'p29' in e.get('file',''):
        print(f"  file={e.get('file')} page={e.get('page')} type={e.get('type')} label={label} caption={(e.get('caption') or '')[:80]}")
print()
print('--- All TR80 entries labeled 6.x ---')
for e in entries:
    label = e.get('label') or ''
    if label.startswith('Figure 6') or label.startswith('Table 6'):
        print(f"  {e.get('file'):20s} p{e.get('page'):3}  [{e.get('type')}] {label}")
