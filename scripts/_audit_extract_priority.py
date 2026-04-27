import json
m = json.load(open(r'C:\Users\david.kuo\SterileGMP-Knowledge-Hub\figures-manifest.json', encoding='utf-8'))
rows = []
for rid, body in m.items():
    figs = body.get('figures', []) if isinstance(body, dict) else []
    n_fig = sum(1 for f in figs if f.get('type') == 'figure')
    n_tbl = sum(1 for f in figs if f.get('type') == 'table')
    n_fb  = sum(1 for f in figs if f.get('render') == 'fallback')
    rows.append((rid, n_fig, n_tbl, n_fb, n_fig + n_tbl))
rows.sort(key=lambda r: r[4], reverse=True)
print('Report                 Figs  Tbls Fallbk  Total')
print('-' * 54)
for r in rows[:30]:
    print(f'{r[0]:<22} {r[1]:>5} {r[2]:>5} {r[3]:>6} {r[4]:>6}')
print('---')
print(f'Reports w/ figures+tables: {sum(1 for r in rows if r[4] > 0)}')
print(f'Reports w/ tables (>=1):   {sum(1 for r in rows if r[2] > 0)}')
print(f'Reports w/ tables (>=5):   {sum(1 for r in rows if r[2] >= 5)}')
print(f'Reports w/ figures (>=10): {sum(1 for r in rows if r[1] >= 10)}')
