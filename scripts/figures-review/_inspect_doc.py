"""Per-doc inspection — pass doc id as arg.
Shows: caption distribution, size buckets, sample tiny + unlabeled file paths.
"""
import json
import sys
from collections import Counter
from pathlib import Path

sys.stdout.reconfigure(encoding="utf-8")

ROOT = Path(__file__).resolve().parents[2]
doc = sys.argv[1] if len(sys.argv) > 1 else "TR43"

m = json.loads((ROOT / "figures-manifest.json").read_text(encoding="utf-8"))
r = json.loads((ROOT / "reports.json").read_text(encoding="utf-8"))["reports"]

if doc not in m:
    print(f"{doc} not in manifest")
    sys.exit(1)

folder = r.get(doc, {}).get("folder", doc)
figs = m[doc].get("figures", [])
print(f"\n=== {doc} ({folder}) — {len(figs)} entries ===")
print(f"  figures: {sum(1 for x in figs if x.get('type')=='figure')}")
print(f"  tables : {sum(1 for x in figs if x.get('type')=='table')}")
print(f"  unlabeled: {sum(1 for x in figs if not (x.get('label') or '').strip())}")

# size buckets
b = Counter()
for x in figs:
    a = x.get("width", 0) * x.get("height", 0)
    if a < 50_000: b["<50k"] += 1
    elif a < 200_000: b["50k-200k"] += 1
    elif a < 1_000_000: b["200k-1M"] += 1
    else: b[">1M"] += 1
print("  size buckets (px area):", dict(b))

# render type distribution
rt = Counter(x.get("render", "raster") for x in figs)
print("  render types:", dict(rt))

# top pages with most figures
pg = Counter(x.get("page") for x in figs)
print(f"  top pages: {pg.most_common(5)}")

# sample unlabeled tiny
unlbl_tiny = [x for x in figs if not (x.get("label") or "").strip() and x.get("width", 0) * x.get("height", 0) < 200_000]
print(f"\n  Sample unlabeled+tiny ({len(unlbl_tiny)} total):")
for x in unlbl_tiny[:8]:
    print(f"    {x['file']:24s} p{x['page']:>3} {x['width']:>4}x{x['height']:<4} {x.get('size_kb',0):>5}KB type={x.get('type')} render={x.get('render','raster')}")

# sample unlabeled large
unlbl_big = [x for x in figs if not (x.get("label") or "").strip() and x.get("width", 0) * x.get("height", 0) >= 200_000]
print(f"\n  Sample unlabeled+large ({len(unlbl_big)} total):")
for x in unlbl_big[:5]:
    cap = (x.get("caption") or "").replace("\n", " ")[:50]
    print(f"    {x['file']:24s} p{x['page']:>3} {x['width']:>4}x{x['height']:<4} {x.get('size_kb',0):>5}KB cap='{cap}'")
