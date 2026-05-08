"""Clean false-positive tables extracted by `gmp_engine.py extract-figs`.

Targets fallback-rendered (`render: fallback`) table entries whose caption
looks like body-text fragments (e.g. starts with lowercase, ends mid-sentence,
caption is just `continued)` or empty closing punctuation).  These are caused
by the now-fixed `CAPTION_RE.search` bug that matched inline `"Table X.Y"`
references in paragraphs.

Removes:
  1. The PNG file from `<source>/<doc>/figures/<file>` and `figures-thumb/<file>`
  2. The manifest entry from `figures-manifest.json`

Backs up manifest to `figures-manifest.pre-fp-cleanup.json` first.

Usage:
    python _clean_fp_tables.py --dry-run     # report only
    python _clean_fp_tables.py               # apply
"""
import json
import re
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parents[2]
MANIFEST = ROOT / "figures-manifest.json"
REPORTS = ROOT / "reports.json"
BACKUP = ROOT / "figures-manifest.pre-fp-cleanup.json"

dry_run = "--dry-run" in sys.argv

manifest = json.loads(MANIFEST.read_text(encoding="utf-8"))
reports = json.loads(REPORTS.read_text(encoding="utf-8")).get("reports", {})


PROSE_STARTERS = (
    "this ", "these ", "the ", "in ", "as ", "for ", "based ",
    "comparability ", "current ", "summary of ", "values ", "data ",
    "results ", "approval ", "all ", "any ", "an ",
)


def looks_like_text_fragment(label: str, cap: str) -> tuple[bool, str]:
    """Return (is_fragment, reason)."""
    cap = (cap or "").strip()
    label = (label or "").strip()

    # Pass 1: caption-side signals
    if cap:
        if cap[0].islower():
            return True, "starts_lowercase"
        if cap.lower() in ("continued)", "(continued)", "continued"):
            return True, "continued_only"
        if cap.startswith((", ", ". ", "; ", ": ", "-", "—")):
            return True, "starts_with_punct"
        if cap in (").", "].", "}."):
            return True, "closing_punct_only"

    # Pass 2: label ends with `.` => in-text reference style
    # ("Table 12-5." inside body text, not "Table 12-5 — Title")
    # Real captions almost never have a period directly after the number.
    if label.endswith(".") and not label.endswith("..."):
        # Strong signal it's an in-text mention
        if not cap:
            return True, "label_period_no_caption"
        # Caption that looks like a sentence
        cap_lower = cap.lower()
        if any(cap_lower.startswith(p) for p in PROSE_STARTERS):
            return True, "label_period_prose_caption"
        # Long caption without title-like trailing puncutation, likely prose
        if len(cap) > 50 and " " in cap and not cap.endswith((".", ")", "]")):
            return True, "label_period_truncated_prose"

    return False, ""


targets = []
for doc, info in manifest.items():
    figs = info.get("figures", [])
    for f in figs:
        if f.get("type") != "table":
            continue
        if f.get("render") != "fallback":
            continue
        cap = f.get("caption") or ""
        lbl = f.get("label") or ""
        is_fp, reason = looks_like_text_fragment(lbl, cap)
        if is_fp:
            targets.append((doc, f, reason))

print(f"Total fallback-table false positives detected: {len(targets)}\n")

# Group by reason
from collections import Counter
reasons = Counter(t[2] for t in targets)
for r, n in reasons.most_common():
    print(f"  {r:25s} {n}")
print()

# Show by doc
by_doc = Counter(t[0] for t in targets)
print("Top docs:")
for d, n in by_doc.most_common(15):
    print(f"  {n:3d}  {d}")
print()

if dry_run:
    print("(dry-run — no changes applied)")
    print("\nSample entries to be removed:")
    for doc, f, reason in targets[:10]:
        cap_disp = (f.get("caption") or "")[:80]
        print(f"  {doc}/{f['file']}  [{reason}]  cap={cap_disp!r}")
    sys.exit(0)

# Backup manifest
BACKUP.write_text(json.dumps(manifest, indent=2, ensure_ascii=False), encoding="utf-8")
print(f"Backed up manifest -> {BACKUP.name}")

# Delete files and remove entries
deleted_files = 0
removed_entries = 0
target_set = {(t[0], t[1]["file"]) for t in targets}

for doc, info in manifest.items():
    folder = reports.get(doc, {}).get("folder", info.get("folder", doc))
    base = ROOT / folder
    new_figs = []
    for f in info.get("figures", []):
        key = (doc, f.get("file"))
        if key in target_set:
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
print(f"\nRemoved {removed_entries} manifest entries, deleted {deleted_files} PNG files.")
print(f"Manifest written -> {MANIFEST.name}")
