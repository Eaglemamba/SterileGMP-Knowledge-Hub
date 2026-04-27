"""Count figures that exceeded the 60pt extension cap, plus shrunken tables."""
import json
import subprocess
from pathlib import Path

ROOT = Path(r'C:\Users\david.kuo\SterileGMP-Knowledge-Hub')
old_raw = subprocess.check_output(
    ['git', '-C', str(ROOT), 'show', 'HEAD:figures-manifest.json'],
    encoding='utf-8',
)
old = json.loads(old_raw)
new = json.loads((ROOT / 'figures-manifest.json').read_text(encoding='utf-8'))

over = []
shrank_tables = []
for rid in sorted(set(old) & set(new)):
    o = old[rid].get('figures', []) if isinstance(old[rid], dict) else []
    n = new[rid].get('figures', []) if isinstance(new[rid], dict) else []
    o_by = {f['file']: f for f in o}
    n_by = {f['file']: f for f in n}
    for fn in set(o_by) & set(n_by):
        e_o = o_by[fn]
        e_n = n_by[fn]
        if e_o.get('type') != e_n.get('type'):
            continue
        dh = e_n.get('height', 0) - e_o.get('height', 0)
        if e_n.get('type') == 'figure' and dh > 120:
            over.append((dh, rid, fn))
        if e_n.get('type') == 'table' and dh < -5:
            shrank_tables.append((dh, rid, fn))

over.sort(reverse=True)
shrank_tables.sort()

print(f'Figures over-extended (>120px = >60pt at 2x zoom): {len(over)}')
print('Top 15:')
for dh, rid, fn in over[:15]:
    print(f'  +{dh:>5}px  {rid:<22} {fn}')

print(f'\nTables that shrank: {len(shrank_tables)}')
for dh, rid, fn in shrank_tables[:15]:
    print(f'  {dh:>5}px  {rid:<22} {fn}')

# Reports needing re-extraction
affected = sorted(set(rid for _, rid, _ in over))
print(f'\nReports with over-extended figures (need re-run): {len(affected)}')
for rid in affected:
    cnt = sum(1 for _, r, _ in over if r == rid)
    print(f'  {rid}: {cnt}')
