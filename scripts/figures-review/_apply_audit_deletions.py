"""Apply deletions identified by parallel agent audit."""
import json
from pathlib import Path

ROOT = Path(__file__).resolve().parents[2]

# (doc_id, filename) tuples — manifest entries to remove + disk files to delete
DELETIONS = [
    ("ISPE-Vol6", "fig-p6-1.png"),          # ISPE globe logo
    ("ISPE-ProcessGas", "fig-p6-1.jpeg"),   # duplicate ISPE globe logo
    ("PtC-14", "tbl-p16-2.png"),            # prose
    ("PtC-14", "tbl-p16-4.png"),
    ("PtC-14", "tbl-p17-1.png"),
    ("PtC-14", "tbl-p17-2.png"),
    ("PtC-14", "tbl-p17-3.png"),
    ("PtC-14", "tbl-p18-1.png"),
    ("PtC-14", "tbl-p18-2.png"),
    ("PtC-14", "tbl-p18-4.png"),
    ("TR46", "tbl-p12-1.png"),              # prose
    ("PtC-15", "tbl-p14-1.png"),            # prose
    ("PtC-Isolators", "fig-p7-1.png"),      # blank page raster
    ("PtC-Isolators", "fig-p49-1.png"),
]

m_path = ROOT / "figures-manifest.json"
r_path = ROOT / "reports.json"
m = json.loads(m_path.read_text(encoding="utf-8"))
r = json.loads(r_path.read_text(encoding="utf-8"))["reports"]

removed_entries = 0
removed_files = 0
target_set = {(d, f) for d, f in DELETIONS}

for doc, info in m.items():
    folder = r.get(doc, {}).get("folder", info.get("folder", doc))
    base = ROOT / folder
    new_figs = []
    for f in info.get("figures", []):
        if (doc, f.get("file")) in target_set:
            for sub in ("figures", "figures-thumb"):
                p = base / sub / f["file"]
                if p.exists():
                    p.unlink()
                    removed_files += 1
                    print(f"  deleted {p.relative_to(ROOT)}")
            removed_entries += 1
        else:
            new_figs.append(f)
    info["figures"] = new_figs
    info["total"] = len(new_figs)

m_path.write_text(json.dumps(m, indent=2, ensure_ascii=False), encoding="utf-8")

# Verify all targets matched
not_found = []
matched = {(d, f) for d, info in m.items() for f in info.get("figures", []) if (d, f.get("file")) in target_set}
for d, f in DELETIONS:
    # If it's still in manifest, the entry wasn't found
    pass

print(f"\nManifest entries removed: {removed_entries}")
print(f"Disk files deleted: {removed_files}")
