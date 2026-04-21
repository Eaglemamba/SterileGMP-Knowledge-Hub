"""Build per-shard input files for the full caption-placement audit.

Reads figures-manifest.json and reports.json, resolves each entry's
image path (thumbnail preferred), then splits into N shards sized to
fit within an agent's vision budget.
"""
import json
from pathlib import Path

ROOT = Path(__file__).resolve().parents[2]
MANIFEST = ROOT / 'figures-manifest.json'
REPORTS = ROOT / 'reports.json'
OUTDIR = ROOT / 'scripts' / 'figures-review'

SHARD_SIZE = 80  # ~80 images per shard -> ~32 shards (fits vision context)

manifest = json.loads(MANIFEST.read_text(encoding='utf-8'))
reports = json.loads(REPORTS.read_text(encoding='utf-8')).get('reports', {})

# Build flat list of {doc, folder, file, type, label, page, path}
items = []
missing = 0
for doc, d in manifest.items():
    folder = reports.get(doc, {}).get('folder', doc)
    base = ROOT / folder
    for e in d.get('figures', []):
        fname = e.get('file')
        if not fname:
            continue
        thumb = base / 'figures-thumb' / fname
        orig = base / 'figures' / fname
        path = thumb if thumb.exists() else orig
        if not path.exists():
            missing += 1
            continue
        # Use thumbnail when available AND thumbnail is smaller
        use_thumb = thumb.exists()
        items.append({
            'doc': doc,
            'file': fname,
            'type': e.get('type'),
            'label': e.get('label'),
            'page': e.get('page'),
            'render': e.get('render'),
            'path': str(path).replace('\\', '/'),
            'used_thumb': use_thumb,
        })

print(f'Total items: {len(items)} (missing files: {missing})')

# Shard
shards = [items[i:i+SHARD_SIZE] for i in range(0, len(items), SHARD_SIZE)]
print(f'Shards: {len(shards)} (size ~{SHARD_SIZE})')

for i, chunk in enumerate(shards, 1):
    p = OUTDIR / f'caption-shard-{i:02d}-input.json'
    p.write_text(json.dumps({'shard': i, 'count': len(chunk), 'items': chunk},
                            ensure_ascii=False, indent=2), encoding='utf-8')
    print(f'wrote {p.name} ({len(chunk)})')
