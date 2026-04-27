import json
d = json.load(open(r'C:\Users\david.kuo\SterileGMP-Knowledge-Hub\reports.json', encoding='utf-8'))
for rid in ['TR43', 'TR73', 'TR60', 'TR80', 'TR91', 'TR74']:
    e = d['reports'].get(rid, {})
    fig = e.get('figures')
    fc = e.get('figures_count')
    print(f'{rid}: figures={fig!r}, figures_count={fc!r}')
