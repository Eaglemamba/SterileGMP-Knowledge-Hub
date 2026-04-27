import json
from pathlib import Path
RJ = Path(r'C:\Users\david.kuo\SterileGMP-Knowledge-Hub\reports.json')
d = json.loads(RJ.read_text(encoding='utf-8'))
tc = d['tagClasses']

new_classes = {
    'Biologicals': 'bg-emerald-50 text-emerald-700 border border-emerald-200 font-semibold',
    'Reprocessing': 'bg-amber-50 text-amber-700',
    'Reworking': 'bg-amber-50 text-amber-700',
    'Quality Risk Management': 'bg-orange-50 text-orange-700',
    'Post-Approval Change': 'bg-purple-50 text-purple-700',
    'FMEA': 'bg-rose-50 text-rose-700',
    'AEX Chromatography': 'bg-cyan-50 text-cyan-700',
}
for k, v in new_classes.items():
    tc[k] = v

RJ.write_text(json.dumps(d, ensure_ascii=False, indent=2), encoding='utf-8')
print('Updated tagClasses:')
for k in new_classes:
    print(f'  {k}: {tc[k]}')
