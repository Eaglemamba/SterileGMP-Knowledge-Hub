import json, pathlib, sys
root = pathlib.Path(__file__).resolve().parents[2]
b = json.loads((root/'figures-manifest.backup.json').read_text(encoding='utf-8'))
m = json.loads((root/'figures-manifest.json').read_text(encoding='utf-8'))
sys.stdout.reconfigure(encoding='utf-8')
for doc in ['TR90', 'ISPE-GAMP5']:
    print(f"=== {doc} BEFORE (backup) ===")
    for f in b[doc]['figures'][:10]:
        print(f"  p{f['page']:<4} [{f['type']:5s}] {f['label']:<22s} {f['file']}")
    print(f"--- {doc} AFTER ---")
    for f in m[doc]['figures'][:10]:
        print(f"  p{f['page']:<4} [{f['type']:5s}] {f['label']:<22s} {f['file']}")
    print()
