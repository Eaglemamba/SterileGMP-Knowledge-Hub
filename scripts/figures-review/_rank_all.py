"""Rank every doc by figures+tables and report unlabeled / tiny stats."""
import json
import sys
from pathlib import Path

sys.stdout.reconfigure(encoding="utf-8")

ROOT = Path(__file__).resolve().parents[2]
m = json.loads((ROOT / "figures-manifest.json").read_text(encoding="utf-8"))

rows = []
for doc, info in m.items():
    figs = info.get("figures", [])
    f = sum(1 for x in figs if x.get("type") == "figure")
    t = sum(1 for x in figs if x.get("type") == "table")
    unlbl = sum(1 for x in figs if not (x.get("label") or "").strip())
    tiny = sum(1 for x in figs if x.get("width", 0) * x.get("height", 0) < 200_000)
    rows.append((f + t, doc, f, t, unlbl, tiny))

rows.sort(reverse=True)
print(f"{'rank':>4} {'doc':<22} {'total':>6} {'figs':>5} {'tabs':>5} {'unlbl':>5} {'tiny':>5}")
print("-" * 70)
for i, (tot, d, f, t, u, ti) in enumerate(rows, 1):
    print(f"{i:>4} {d:<22} {tot:>6} {f:>5} {t:>5} {u:>5} {ti:>5}")
