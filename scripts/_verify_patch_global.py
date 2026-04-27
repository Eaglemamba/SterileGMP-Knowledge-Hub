"""Global before/after stats across all 134 reports."""
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

agg = {
    'table': {'shared': 0, 'grew': 0, 'shrank': 0, 'avg_dh': 0.0, 'max_dh': 0, 'sum_dh': 0, 'top_grow': []},
    'figure': {'shared': 0, 'grew': 0, 'shrank': 0, 'avg_dh': 0.0, 'max_dh': 0, 'sum_dh': 0, 'top_grow': []},
}
report_summary = []

for rid in sorted(set(old) & set(new)):
    o = old[rid].get('figures', []) if isinstance(old[rid], dict) else []
    n = new[rid].get('figures', []) if isinstance(new[rid], dict) else []
    o_by = {f['file']: f for f in o}
    n_by = {f['file']: f for f in n}
    shared = set(o_by) & set(n_by)
    r_tbl_grow = 0
    r_fig_grow = 0
    for fn in shared:
        e_o = o_by[fn]
        e_n = n_by[fn]
        typ = e_n.get('type')
        if typ != e_o.get('type'):
            continue
        if typ not in ('table', 'figure'):
            continue
        dh = e_n.get('height', 0) - e_o.get('height', 0)
        agg[typ]['shared'] += 1
        agg[typ]['sum_dh'] += dh
        if dh > 5:
            agg[typ]['grew'] += 1
            if typ == 'table':
                r_tbl_grow += 1
            else:
                r_fig_grow += 1
        elif dh < -5:
            agg[typ]['shrank'] += 1
        if dh > agg[typ]['max_dh']:
            agg[typ]['max_dh'] = dh
        agg[typ]['top_grow'].append((dh, rid, fn))
    report_summary.append((rid, r_tbl_grow, r_fig_grow))

print('=== GLOBAL PATCH VERIFICATION (134 reports) ===\n')
for typ, label in (('table', 'TABLES'), ('figure', 'FIGURES')):
    a = agg[typ]
    if a['shared'] == 0:
        continue
    a['avg_dh'] = a['sum_dh'] / a['shared']
    pct = 100 * a['grew'] / a['shared']
    print(f'{label} (shared {a["shared"]} entries)')
    print(f'  grew (>5px):    {a["grew"]:>5} ({pct:.1f}%)')
    print(f'  shrank (<-5px): {a["shrank"]:>5}')
    print(f'  unchanged:      {a["shared"] - a["grew"] - a["shrank"]:>5}')
    print(f'  avg height delta: {a["avg_dh"]:+.1f}px')
    print(f'  max height delta: {a["max_dh"]:+}px')
    a['top_grow'].sort(reverse=True)
    print(f'  top 5 growers:')
    for dh, rid, fn in a['top_grow'][:5]:
        print(f'    +{dh:>4}px  {rid:<22} {fn}')
    print()

print('Reports with most table-growth:')
for rid, t, f in sorted(report_summary, key=lambda r: -r[1])[:10]:
    print(f'  {rid:<22} tables grew: {t:>3}, figures grew: {f:>3}')
print()
print('Reports with most figure-growth:')
for rid, t, f in sorted(report_summary, key=lambda r: -r[2])[:10]:
    print(f'  {rid:<22} tables grew: {t:>3}, figures grew: {f:>3}')
