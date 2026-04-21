import json
from pathlib import Path
r = json.loads(Path('C:/Users/david.kuo/SterileGMP-Knowledge-Hub/reports.json').read_text(encoding='utf-8'))
for k in r['reports']:
    if k in ('TR91', 'TR80', 'TR84'):
        print(f'{k}: folder={r["reports"][k].get("folder")}')
