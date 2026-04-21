"""Query unresolved violations to plan next fix pass."""
import json
from pathlib import Path

ROOT = Path(__file__).resolve().parents[2]
s = json.loads((ROOT / 'scripts' / 'figures-review' / 'caption-audit-summary.json').read_text(encoding='utf-8'))

# 1. None-doc items (suspected TR80/TR84 mislabels)
none_items = [v for v in s['violations'] if not v.get('doc')]
print(f'None-doc items: {len(none_items)}')
for v in none_items:
    print(f"  file={v.get('file')} type={v.get('type')} label={v.get('label')} pos={v.get('caption_position')} notes={(v.get('notes') or '')[:100]}")

print()
# 2. By filename search
for keyword in ['tbl-p41', 'tbl-p42', 'tbl-p43', 'tbl-p44', 'tbl-p45', 'tbl-p26']:
    hits = [v for v in s['violations'] if keyword in (v.get('file') or '')]
    if hits:
        print(f'{keyword} matches: {len(hits)}')
        for v in hits:
            print(f"  doc={v.get('doc')} file={v.get('file')} notes={(v.get('notes') or '')[:80]}")

print()
# 3. TR91 full notes
tr91 = [v for v in s['violations'] if v.get('doc') == 'TR91']
print(f'TR91 all violations with full fields:')
for v in tr91[:3]:
    print(json.dumps(v, ensure_ascii=False, indent=2))
