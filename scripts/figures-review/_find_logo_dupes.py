"""Detect figures that are duplicate logos / page-headers / decorative noise.

Approach: hash each figure file's bytes; within each document, any image whose
MD5 appears 3+ times is almost certainly a repeating logo / header / footer
graphic — not a real figure.  Only candidates without a `label` are flagged
(real labelled figures with the same hash would be a different problem).

Usage:
    python _find_logo_dupes.py            # just report
    python _find_logo_dupes.py --apply    # delete files + manifest entries
"""
import json
import sys
from collections import defaultdict
from pathlib import Path
from PIL import Image

ROOT = Path(__file__).resolve().parents[2]
MANIFEST = ROOT / "figures-manifest.json"
REPORTS = ROOT / "reports.json"

apply = "--apply" in sys.argv
# Real content rarely repeats 10+ visually-identical times in one doc.
# Headers / logos / footers easily exceed this on a 50+ page doc.
min_occurrences = 10
hamming_threshold = 4    # tighter — only near-identical bytes

manifest = json.loads(MANIFEST.read_text(encoding="utf-8"))
reports = json.loads(REPORTS.read_text(encoding="utf-8")).get("reports", {})


def dhash(p: Path, size: int = 8) -> int | None:
    """Difference hash — 64-bit perceptual hash."""
    try:
        im = Image.open(p)
        if im.mode == "CMYK":
            im = im.convert("RGB")
        im = im.convert("L").resize((size + 1, size), Image.LANCZOS)
    except Exception:
        return None
    pixels = im.load()
    h = 0
    for y in range(size):
        for x in range(size):
            h = (h << 1) | (1 if pixels[x, y] > pixels[x + 1, y] else 0)
    return h


def hamming(a: int, b: int) -> int:
    return bin(a ^ b).count("1")


def cluster(items: list[tuple]) -> list[list[tuple]]:
    """Greedy clustering by hamming distance.

    items: [(figure_dict, hash_int), ...]
    """
    clusters: list[list[tuple]] = []
    for fig, h in items:
        placed = False
        for c in clusters:
            if hamming(h, c[0][1]) <= hamming_threshold:
                c.append((fig, h))
                placed = True
                break
        if not placed:
            clusters.append([(fig, h)])
    return clusters


targets = []  # (doc, file, cluster_size)
for doc, info in manifest.items():
    folder = reports.get(doc, {}).get("folder", info.get("folder", doc))
    base = ROOT / folder / "figures"
    if not base.is_dir():
        continue
    candidates = []
    for f in info.get("figures", []):
        if f.get("type") != "figure":
            continue
        if (f.get("label") or "").strip():
            continue
        p = base / f["file"]
        if not p.exists():
            continue
        h = dhash(p)
        if h is None:
            continue
        candidates.append((f, h))
    if not candidates:
        continue
    for c in cluster(candidates):
        if len(c) >= min_occurrences:
            for fig, _h in c:
                targets.append((doc, fig["file"], len(c)))

print(f"Logo-duplicate candidates (no-label, identical hash >={min_occurrences}x): {len(targets)}\n")

# Group by doc
from collections import Counter
by_doc = Counter(t[0] for t in targets)
for d, n in by_doc.most_common(20):
    print(f"  {n:4d}  {d}")

if not apply:
    print("\n(report only — pass --apply to delete)")
    sys.exit(0)

# Apply deletion
target_set = {(t[0], t[1]) for t in targets}
deleted_files = removed_entries = 0
for doc, info in manifest.items():
    folder = reports.get(doc, {}).get("folder", info.get("folder", doc))
    base = ROOT / folder
    new_figs = []
    for f in info.get("figures", []):
        if (doc, f.get("file")) in target_set:
            for sub in ("figures", "figures-thumb"):
                p = base / sub / f["file"]
                if p.exists():
                    p.unlink()
                    deleted_files += 1
            removed_entries += 1
        else:
            new_figs.append(f)
    info["figures"] = new_figs
    info["total"] = len(new_figs)

MANIFEST.write_text(
    json.dumps(manifest, indent=2, ensure_ascii=False),
    encoding="utf-8",
)
print(f"\nRemoved {removed_entries} manifest entries, deleted {deleted_files} files.")
