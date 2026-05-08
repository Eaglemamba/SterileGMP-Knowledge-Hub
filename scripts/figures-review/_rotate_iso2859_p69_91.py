"""Rotate ISO-2859-1 fig-p69-1 .. fig-p91-1 by 180 degrees in place.

These are Annex sampling tables that Phase 1 rotation pass missed.
Confirmed via visual inspection: p68 correct, p69+ upside-down.
"""
from pathlib import Path
from PIL import Image

ROOT = Path(__file__).resolve().parents[2]
BASE = ROOT / "ISO" / "ISO-2859-1"

count = 0
for page in range(69, 92):  # 69..91 inclusive
    name = f"fig-p{page}-1.png"
    for sub in ("figures", "figures-thumb"):
        p = BASE / sub / name
        if not p.exists():
            print(f"MISSING: {p}")
            continue
        try:
            im = Image.open(p)
            rotated = im.rotate(180, expand=True)
            rotated.save(p)
            count += 1
            print(f"rotated {sub}/{name} ({im.size[0]}x{im.size[1]})")
        except Exception as e:
            print(f"ERROR {p}: {e}")

print(f"\nDone. Rotated {count} files.")
