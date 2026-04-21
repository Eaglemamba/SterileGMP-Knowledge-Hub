"""Merge all caption-shard-*-output.json into a single consolidated report.

- Aggregates per-doc violation counts
- Classifies each violation by notes keywords (rotation vs mislabel vs missing caption)
- Writes caption-audit-summary.json for review
"""
import json
import re
from pathlib import Path

ROOT = Path(__file__).resolve().parents[2]
REVIEW = ROOT / 'scripts' / 'figures-review'

shards = sorted(REVIEW.glob('caption-shard-*-output.json'))
assert len(shards) == 32, f'expected 32 shards, got {len(shards)}'

all_results = []
shard_summaries = []
for sp in shards:
    d = json.loads(sp.read_text(encoding='utf-8'))
    shard_summaries.append({
        'shard': d.get('shard'),
        'total': d.get('total'),
        'ok': d.get('ok'),
        'wrong': d.get('wrong'),
    })
    for r in d.get('results', []):
        all_results.append(r)

total = len(all_results)
wrong = [r for r in all_results if not r.get('convention_ok', True)]

# Classify violations by notes keyword
def classify(r):
    note = (r.get('notes') or '').lower()
    pos = r.get('caption_position', '')
    if '180' in note or 'upside' in note or 'invert' in note:
        return 'rotated_180'
    if '90' in note or 'rotated' in note or pos == 'rotated' or 'vertical' in note:
        return 'rotated_90'
    if 'mislabel' in note or 'actually' in note or 'mis-label' in note or 'type=' in note:
        return 'manifest_mislabel'
    if 'no caption' in note or 'missing' in note or 'not visible' in note or 'not captured' in note or 'no visible' in note:
        return 'missing_caption_crop'
    if 'footer' in note or 'running' in note:
        return 'running_footer'
    if 'at bottom on table' in note or 'at top on figure' in note or 'bottom instead' in note or 'wrong position' in note:
        return 'caption_position_wrong'
    if 'offset' in note or 'bbox' in note or 'clip' in note or 'sits at the bottom' in note:
        return 'crop_offset'
    return 'other'

for r in wrong:
    r['_category'] = classify(r)

# Group by doc + category
by_doc = {}
for r in wrong:
    doc = r.get('doc')
    by_doc.setdefault(doc, []).append(r)

category_counts = {}
for r in wrong:
    category_counts[r['_category']] = category_counts.get(r['_category'], 0) + 1

summary = {
    'shard_summaries': shard_summaries,
    'total_items': total,
    'total_ok': total - len(wrong),
    'total_wrong': len(wrong),
    'wrong_by_doc': {doc: {
        'count': len(items),
        'files': [f"{r.get('file')} [{r.get('type')}] {r.get('label')} (p{r.get('page')}) — {r.get('notes','')}" for r in items],
        'categories': list({r['_category'] for r in items}),
    } for doc, items in sorted(by_doc.items(), key=lambda kv: -len(kv[1]))},
    'category_counts': dict(sorted(category_counts.items(), key=lambda kv: -kv[1])),
    'violations': wrong,
}

out = REVIEW / 'caption-audit-summary.json'
out.write_text(json.dumps(summary, ensure_ascii=False, indent=2), encoding='utf-8')

print(f'Total items audited: {total}')
print(f'OK:    {total - len(wrong)} ({(total-len(wrong))/total*100:.1f}%)')
print(f'Wrong: {len(wrong)} ({len(wrong)/total*100:.1f}%)')
print()
print('By category:')
for cat, n in summary['category_counts'].items():
    print(f'  {cat:25s} {n}')
print()
print('Top 15 docs by violation count:')
for doc, info in list(summary['wrong_by_doc'].items())[:15]:
    print(f'  {doc:25s} {info["count"]:3d}   categories: {info["categories"]}')
print()
print(f'Summary written to {out.name}')
