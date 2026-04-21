"""Fix 90° rotated images identified by Group A caption-audit verification.

Directions determined by inline vision check:
- CW = rotate 90° clockwise (PIL rotate(-90)) — text currently reads bottom-to-top
- CCW = rotate 90° counter-clockwise (PIL rotate(90)) — text currently reads top-to-bottom
- FP = false positive, do not modify
"""
from pathlib import Path
from PIL import Image

ROOT = Path(__file__).resolve().parents[2]

# (source_folder, file, direction)
JOBS = [
    ('PDA/TR70',         'vec-p42-1.png', 'CW'),
    ('FDA/FDA-Aseptic',  'tbl-p6-1.png',  'CW'),
    ('ISO/ISO-13408',    'fig-p56-1.png', 'CW'),
    ('ISO/ISO-14644',    'tbl-p26-1.png', 'CW'),
    ('ISO/ISO-15223-2',  'vec-p12-1.png', 'CW'),
]

for folder, fname, direction in JOBS:
    angle = -90 if direction == 'CW' else (90 if direction == 'CCW' else 0)
    if angle == 0:
        continue
    for sub in ['figures', 'figures-thumb']:
        p = ROOT / folder / sub / fname
        if not p.exists():
            continue
        im = Image.open(p)
        rot = im.rotate(angle, expand=True)
        rot.save(p)
        print(f'  rotated {direction:3s} {folder}/{sub}/{fname} {im.size} -> {rot.size}')

print('\nFalse positives (NOT modified):')
print('  PDA/TR26/figures/fig-p77-1.png    — caption horizontal at bottom; Step 1/2/3 labels intentionally rotated as column brackets')
print('  ISO/ISO-13408/figures/fig-p59-1.png — Annex D page, main content (Table D.1) is horizontal and readable; marginal page headers rotated by original landscape layout')
