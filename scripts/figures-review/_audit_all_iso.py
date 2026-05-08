"""Audit every ISO doc in the manifest.

For each ISO doc:
  - total figure count, total table count
  - count of unlabeled figures (potential noise)
  - count of small/tiny figures
  - first/last few unlabeled file names so we can sample for noise + rotation
"""
import json
from pathlib import Path

ROOT = Path(__file__).resolve().parents[2]
m = json.loads((ROOT / "figures-manifest.json").read_text(encoding="utf-8"))
r = json.loads((ROOT / "reports.json").read_text(encoding="utf-8")).get("reports", {})

iso_docs = sorted(d for d in m if d.startswith("ISO"))

print(f"{'doc':<18} {'figs':>5} {'tabs':>5} {'unlbl':>5} {'tiny':>5}  sample-unlabeled")
print("-" * 100)
for d in iso_docs:
    figs = [f for f in m[d].get("figures", []) if f.get("type") == "figure"]
    tabs = [f for f in m[d].get("figures", []) if f.get("type") == "table"]
    unlbl = [f for f in figs if not (f.get("label") or "").strip()]
    tiny = [f for f in figs if f.get("width", 0) * f.get("height", 0) < 200_000]
    sample = ", ".join(f["file"] for f in unlbl[:3])
    print(f"{d:<18} {len(figs):>5} {len(tabs):>5} {len(unlbl):>5} {len(tiny):>5}  {sample}")
