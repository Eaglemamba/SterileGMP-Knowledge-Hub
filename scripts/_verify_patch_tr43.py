"""Compare TR43 manifest entries before/after patch.

Uses `git show HEAD:figures-manifest.json` for the baseline and the current
working-tree manifest for the patched output.
"""
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

import sys
RID = sys.argv[1] if len(sys.argv) > 1 else 'TR43'
old_t43 = old[RID]['figures']
new_t43 = new[RID]['figures']

# Index by file name
old_by_file = {f['file']: f for f in old_t43}
new_by_file = {f['file']: f for f in new_t43}

shared = set(old_by_file) & set(new_by_file)
only_old = set(old_by_file) - set(new_by_file)
only_new = set(new_by_file) - set(old_by_file)

# Stats by type
def stats(items, type_filter):
    hs = []
    sizes = []
    for fn in items:
        e_old = old_by_file[fn]
        e_new = new_by_file[fn]
        if e_new.get('type') != type_filter:
            continue
        if e_old.get('type') != type_filter:
            continue
        hs.append((e_new['height'] - e_old['height'], e_new['height'], e_old['height']))
        sizes.append((e_new['size_kb'] - e_old['size_kb'], e_new['size_kb'], e_old['size_kb']))
    return hs, sizes

print(f'=== {RID} patch verification ===')
print(f'Old entries: {len(old_t43)}, New entries: {len(new_t43)}')
print(f'Shared:   {len(shared)}')
print(f'Only old: {len(only_old)}')
print(f'Only new: {len(only_new)}')

for typ in ('table', 'figure'):
    hs, sizes = stats(shared, typ)
    if not hs:
        print(f'\nNo shared {typ} entries')
        continue
    grew_h = sum(1 for d, _, _ in hs if d > 5)
    shrank_h = sum(1 for d, _, _ in hs if d < -5)
    same_h = len(hs) - grew_h - shrank_h
    avg_dh = sum(d for d, _, _ in hs) / len(hs)
    grew_kb = sum(1 for d, _, _ in sizes if d > 1)
    shrank_kb = sum(1 for d, _, _ in sizes if d < -1)
    avg_dkb = sum(d for d, _, _ in sizes) / len(sizes)
    print(f'\n{typ.upper()} ({len(hs)} entries)')
    print(f'  height: grew={grew_h}, shrank={shrank_h}, same={same_h}, avg_delta={avg_dh:+.1f}px')
    print(f'  size:   grew={grew_kb}, shrank={shrank_kb}, avg_delta={avg_dkb:+.2f}kb')
    # Show top 5 biggest growers
    sorted_h = sorted([(d, fn) for (d, _, _), fn in zip(hs, [f for f in shared
                                                             if old_by_file[f].get('type') == typ
                                                             and new_by_file[f].get('type') == typ])],
                      reverse=True)
    print(f'  top 5 height growers:')
    for d, fn in sorted_h[:5]:
        print(f'    +{d:>4}px  {fn}')

if only_new:
    print(f'\nNew-only files (sample 10): {sorted(only_new)[:10]}')
if only_old:
    print(f'Removed files (sample 10):  {sorted(only_old)[:10]}')
