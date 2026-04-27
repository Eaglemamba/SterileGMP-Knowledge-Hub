import json
d = json.load(open(r'C:\Users\david.kuo\SterileGMP-Knowledge-Hub\reports.json', encoding='utf-8'))
tc = d.get('tagClasses', {})
print(f'tagClasses entries: {len(tc)}')
print('Sample first 12:')
for i, (k, v) in enumerate(list(tc.items())[:12]):
    print(f'  {k!r} -> {v!r}')
print()
print('TR74 tag mappings:')
for t in ['Biologicals','Reprocessing','Reworking','Quality Risk Management','Post-Approval Change','FMEA','AEX Chromatography','Filtration']:
    val = tc.get(t, 'MISSING')
    print(f'  {t}: {val}')
