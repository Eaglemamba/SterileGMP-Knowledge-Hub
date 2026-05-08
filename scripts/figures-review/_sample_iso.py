"""Sample tiny + first unlabeled figs across suspect ISO docs."""
import json
import sys
from pathlib import Path

sys.stdout.reconfigure(encoding="utf-8")

ROOT = Path(__file__).resolve().parents[2]
m = json.loads((ROOT / "figures-manifest.json").read_text(encoding="utf-8"))
r = json.loads((ROOT / "reports.json").read_text(encoding="utf-8"))["reports"]

for d in ["ISO-15394", "ISO-9001", "ISO-14644", "ISO-TR-24971", "ISO-2859-1"]:
    folder = r[d]["folder"]
    figs = [f for f in m[d]["figures"] if f.get("type") == "figure"]
    tiny = [f for f in figs if f.get("width", 0) * f.get("height", 0) < 200_000]
    unlbl = [f for f in figs if not (f.get("label") or "").strip()]
    print(f"\n=== {d} ({folder}) figs={len(figs)} tiny={len(tiny)} unlabeled={len(unlbl)} ===")
    for f in tiny[:8]:
        cap = (f.get("caption") or "").replace("\n", " ")[:60]
        lbl = (f.get("label") or "").strip()
        print(f"  TINY  {f['file']:20s} p{f['page']:>3} {f['width']}x{f['height']} {f.get('size_kb',0)}KB  lbl='{lbl}'  cap='{cap}'")
    if unlbl and not tiny:
        for f in unlbl[:5]:
            cap = (f.get("caption") or "").replace("\n", " ")[:60]
            print(f"  UNLBL {f['file']:20s} p{f['page']:>3} {f['width']}x{f['height']} {f.get('size_kb',0)}KB  cap='{cap}'")
