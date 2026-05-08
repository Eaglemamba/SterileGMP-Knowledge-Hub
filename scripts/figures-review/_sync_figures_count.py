"""Sync reports.json figures_count from current manifest counts."""
import json
from pathlib import Path

ROOT = Path(__file__).resolve().parents[2]
m = json.loads((ROOT / "figures-manifest.json").read_text(encoding="utf-8"))
rj_path = ROOT / "reports.json"
rj = json.loads(rj_path.read_text(encoding="utf-8"))

changes = 0
for doc, info in rj["reports"].items():
    if doc not in m:
        continue
    figs = m[doc].get("figures", [])
    fig_count = sum(1 for f in figs if f.get("type") == "figure")
    tab_count = sum(1 for f in figs if f.get("type") == "table")
    old_fig = info.get("figures_count", info.get("figures", 0))
    old_tab = info.get("tables_count", 0)
    if old_fig != fig_count or old_tab != tab_count:
        info["figures_count"] = fig_count
        info["tables_count"] = tab_count
        print(f"{doc}: figs {old_fig}→{fig_count}, tabs {old_tab}→{tab_count}")
        changes += 1

if changes:
    rj_path.write_text(json.dumps(rj, indent=2, ensure_ascii=False), encoding="utf-8")
    print(f"\nSynced {changes} reports.")
else:
    print("No changes.")
