"""One-off fix: ISO-15223-1 tbl-p18-1.png was extracted upside-down (180°).
Rotates the image in place in figures/ and figures-thumb/ if present."""
from pathlib import Path
from PIL import Image

root = Path(__file__).resolve().parents[2] / 'ISO' / 'ISO-15223-1'
for sub in ['figures', 'figures-thumb']:
    p = root / sub / 'tbl-p18-1.png'
    if p.exists():
        im = Image.open(p)
        rotated = im.rotate(180, expand=True)
        rotated.save(p)
        print(f'rotated {p} ({im.size} -> {rotated.size})')
    else:
        print(f'skip {p} (missing)')
