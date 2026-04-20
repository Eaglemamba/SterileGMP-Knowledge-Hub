"""Merge shard outputs into figures-manifest.json.

- Loads all shard-N-output.json that exist (missing = skip; those docs stay unchanged).
- Removes matching figures from manifest.
- Sorts remaining entries in each doc by (type: Figure<Table, number ascending).

Run: python scripts/figures-review/_merge.py
"""
import json, re, pathlib, sys

ROOT = pathlib.Path(__file__).resolve().parents[2]
MANIFEST = ROOT / 'figures-manifest.json'
BACKUP = ROOT / 'figures-manifest.backup.json'
REVIEW_DIR = ROOT / 'scripts' / 'figures-review'

def sort_key(entry):
    label = str(entry.get('label', '')).replace('\xa0', ' ').strip()
    m = re.match(r'^(Figure|Table)\s+(.+?)\s*$', label, re.I)
    if not m:
        return (9, 9999, entry.get('page', 0), label)
    type_rank = 0 if m.group(1).lower() == 'figure' else 1
    rest = m.group(2).strip(' .')
    parts = re.split(r'[.\-]', rest)
    parsed = []
    for p in parts:
        p = p.strip()
        if p.isdigit():
            parsed.append((0, int(p), ''))
        else:
            parsed.append((1, 0, p))
    # Pad to 4 segments for uniform tuple length
    while len(parsed) < 4:
        parsed.append((2, 0, ''))
    return (type_rank,) + tuple(parsed[:4]) + (entry.get('page', 0),)

def main():
    # Always start from backup so the op is idempotent
    if not BACKUP.exists():
        print(f"ERROR: backup not found at {BACKUP}", file=sys.stderr)
        sys.exit(1)
    manifest = json.loads(BACKUP.read_text(encoding='utf-8'))

    # Load all shard outputs present
    remove_set = {}  # doc -> set(file)
    shards_loaded = []
    for sp in sorted(REVIEW_DIR.glob('shard-*-output.json')):
        data = json.loads(sp.read_text(encoding='utf-8'))
        shards_loaded.append((sp.name, data.get('shard'), data.get('reviewed', 0), len(data.get('to_remove', []))))
        for entry in data.get('to_remove', []):
            remove_set.setdefault(entry['doc'], set()).add(entry['file'])

    # Apply removals and sort
    total_removed = 0
    for doc, d in manifest.items():
        figs = d.get('figures', [])
        remove_files = remove_set.get(doc, set())
        kept = [f for f in figs if f.get('file') not in remove_files]
        removed_here = len(figs) - len(kept)
        total_removed += removed_here
        # Sort by (type, number ascending, page fallback)
        kept.sort(key=sort_key)
        d['figures'] = kept
        d['total'] = len(kept)

    # Write new manifest
    MANIFEST.write_text(json.dumps(manifest, ensure_ascii=False, indent=2), encoding='utf-8')

    print("Shard outputs loaded:")
    for name, sh, rev, fakes in shards_loaded:
        print(f"  {name}: shard={sh}, reviewed={rev}, fakes={fakes}")
    print(f"\nTotal fake removals applied: {total_removed}")
    orig_total = sum(len(d.get('figures', [])) for d in json.loads(BACKUP.read_text(encoding='utf-8')).values())
    new_total = sum(len(d.get('figures', [])) for d in manifest.values())
    print(f"Manifest items: {orig_total} -> {new_total}")

if __name__ == '__main__':
    main()
