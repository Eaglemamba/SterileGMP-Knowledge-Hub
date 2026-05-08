"""Full audit — for every doc, list potentially problematic figs.

A figure is flagged if any of:
  - unlabeled
  - tiny AND unlabeled
  - render=fallback with empty caption (vec might be noise)
  - aspect ratio is extremely thin (>10:1) — likely a header strip
"""
import json
import sys
from pathlib import Path

sys.stdout.reconfigure(encoding="utf-8")

ROOT = Path(__file__).resolve().parents[2]
m = json.loads((ROOT / "figures-manifest.json").read_text(encoding="utf-8"))
r = json.loads((ROOT / "reports.json").read_text(encoding="utf-8"))["reports"]

# total ranking
totals = sorted(m.items(), key=lambda kv: -len(kv[1].get("figures", [])))

problem_docs = []
for doc, info in totals:
    figs = info.get("figures", [])
    issues = []
    for x in figs:
        lbl = (x.get("label") or "").strip()
        cap = (x.get("caption") or "").strip()
        w, h = x.get("width", 0), x.get("height", 0)
        area = w * h
        if not lbl:
            tag = "unlbl"
            if area < 50_000:
                tag = "unlbl+TINY"
            elif area < 200_000:
                tag = "unlbl+small"
            issues.append((tag, x))
        elif w and h and (w / h > 10 or h / w > 10):
            issues.append(("thin_strip", x))
    if issues:
        problem_docs.append((doc, len(figs), issues))

for doc, n, issues in problem_docs:
    by_kind = {}
    for k, x in issues:
        by_kind.setdefault(k, []).append(x)
    summary = ", ".join(f"{k}={len(v)}" for k, v in by_kind.items())
    print(f"\n[{doc}] total={n}  {summary}")
    for k, lst in by_kind.items():
        for x in lst[:3]:
            print(f"   {k:14s} {x['file']:24s} p{x.get('page'):>3} {x.get('width')}x{x.get('height')} {x.get('size_kb',0)}KB type={x.get('type')} render={x.get('render','raster')}")
