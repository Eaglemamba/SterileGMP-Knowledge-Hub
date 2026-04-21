"""Re-extract 9 missing TR80 figures by searching PDF for caption labels.

For each missing Figure X.Y label:
1. Search all pages for the exact text
2. When found on a page, locate the caption bbox
3. Render the region ABOVE the caption (figure convention) as a new image
4. Save to PDA/TR80/figures/ with naming vec-p{page}-extra-{idx}.png
5. Update figures-manifest.json

Uses PyMuPDF (fitz). Mirrors the logic from gmp_engine.py Pass 3 fallback.
"""
import json
import re
import sys
import io
from pathlib import Path
sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding='utf-8')

import fitz

ROOT = Path(__file__).resolve().parents[2]
PDF = ROOT / 'Raw pdfs' / 'processed' / 'PDA_TR80_Data Integrity Management System for Pharmaceutical Laboratories.pdf'
MANIFEST = ROOT / 'figures-manifest.json'
TR80_DIR = ROOT / 'PDA' / 'TR80'
FIGS_DIR = TR80_DIR / 'figures'

# Missing labels to locate
MISSING = [
    'Figure 5.2.2-1',
    'Figure 6.3-1',
    'Figure 6.3.5-1',
    'Figure 6.3.7-5b',
    'Figure 6.3.7-6a',
    'Figure 6.3.9-1',
    'Figure 6.3.9.4-2',
    'Figure 6.3.10.1-1',
    'Figure 6.3.10.2-2',
]

ZOOM = 2.0
MARGIN = 30

SKIP_FIRST = 10  # skip TOC pages

def find_caption_bbox(page, label):
    """Find the bbox of a caption-line starting with the given label.
    Returns (bbox, caption_text) or (None, None).

    Rejects TOC lines (contain '......' or end with a page number like ' 37').
    """
    text_page = page.get_textpage()
    blocks = page.get_text('dict', textpage=text_page)['blocks']
    label_norm = label.replace(' ', '').lower()
    for b in blocks:
        if b['type'] != 0:
            continue
        for line in b['lines']:
            line_text = ''.join(span['text'] for span in line['spans'])
            line_norm = line_text.replace(' ', '').lower()
            if not line_norm.startswith(label_norm):
                continue
            nxt = line_norm[len(label_norm):len(label_norm)+1]
            if nxt and nxt.isdigit():
                continue  # label prefix of longer label (e.g. "Figure 6.3" within "Figure 6.3.5-1")
            # Reject TOC-style lines
            stripped = line_text.strip()
            if '......' in stripped or '.  .' in stripped:
                continue
            # TOC ends with page number after many dots
            if re.search(r'\.\s*\d{1,3}$', stripped):
                continue
            return tuple(line['bbox']), stripped
    return None, None

manifest = json.loads(MANIFEST.read_text(encoding='utf-8'))
entries = manifest['TR80']['figures']
before = len(entries)

doc = fitz.open(str(PDF))
print(f'TR80 PDF: {len(doc)} pages')

added = []
for label in MISSING:
    found_page = None
    found_bbox = None
    found_caption = None
    for page_num in range(SKIP_FIRST, len(doc)):
        page = doc[page_num]
        bbox, cap = find_caption_bbox(page, label)
        if bbox:
            # Prefer pages where the caption is near the bottom of a figure
            # (i.e., y-position > 30% of page height — excludes TOC/body refs)
            ph = page.rect.height
            if bbox[1] / ph < 0.15:
                continue  # TOC / header reference
            found_page = page_num
            found_bbox = bbox
            found_caption = cap
            break
    if not found_page is not None:
        pass
    if found_page is None:
        print(f'  NOT FOUND: {label}')
        continue
    page = doc[found_page]
    pw, ph = page.rect.width, page.rect.height

    # Figure: render region above the caption
    # Upper bound: previous "Figure X.Y" or "Table X.Y" caption on page, else page top
    upper_bound = MARGIN
    # Scan page text to find any earlier caption line y-bottom above found_bbox
    tp = page.get_textpage()
    blocks = page.get_text('dict', textpage=tp)['blocks']
    cap_re = re.compile(r'^\s*(Figure|Table)\s+\d', re.IGNORECASE)
    for b in blocks:
        if b['type'] != 0:
            continue
        for line in b['lines']:
            line_text = ''.join(s['text'] for s in line['spans']).strip()
            if cap_re.match(line_text):
                y_bot = line['bbox'][3]
                if y_bot < found_bbox[1] - 5:
                    upper_bound = max(upper_bound, y_bot + 5)

    clip = fitz.Rect(
        MARGIN, max(0, upper_bound),
        pw - MARGIN, min(ph, found_bbox[3] + 5),
    )
    if clip.height < 40:
        print(f'  SKIP (clip too small): {label} p{found_page+1}')
        continue

    mat = fitz.Matrix(ZOOM, ZOOM)
    try:
        pix = page.get_pixmap(matrix=mat, clip=clip)
    except Exception as e:
        print(f'  FAIL render {label}: {e}')
        continue

    # File name: use label to derive, fallback to vec-p{p}-extra-{idx}
    safe_label = label.replace(' ', '-').replace('.', '-').lower()
    fname = f'vec-p{found_page+1}-{safe_label}.png'
    out_path = FIGS_DIR / fname
    pix.save(str(out_path))

    entry = {
        'file': fname,
        'page': found_page + 1,
        'width': pix.width,
        'height': pix.height,
        'size_kb': round(out_path.stat().st_size / 1024, 1),
        'type': 'figure',
        'label': label,
        'caption': found_caption or '',
        'render': 'fallback-phase3',
    }
    entries.append(entry)
    added.append((label, fname, found_page + 1))
    print(f'  ADDED: {label} -> {fname} (p{found_page+1}, {pix.width}x{pix.height})')

doc.close()
# Resort entries by label for consistency — but leave that to another step
manifest['TR80']['figures'] = entries
MANIFEST.write_text(json.dumps(manifest, ensure_ascii=False, indent=2), encoding='utf-8')

print(f'\nSummary:')
print(f'  TR80 before: {before}')
print(f'  added:       {len(added)}')
print(f'  TR80 after:  {len(entries)}')
