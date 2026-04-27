"""Extract TR74 source text per section into PDA/TR74/source/section-X.0-text.txt."""
import sys, io, re
sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding='utf-8')
from pathlib import Path
import fitz

ROOT = Path(r'C:\Users\david.kuo\SterileGMP-Knowledge-Hub')
PDF = ROOT / 'Raw pdfs' / 'TR-74-2026-Reprocessing-and-Reworking-of-Biologicals.pdf'
SRC = ROOT / 'PDA' / 'TR74' / 'source'
SRC.mkdir(parents=True, exist_ok=True)

OFFSET = 7  # logical p1 = physical p8

# Logical page ranges per section
SECTIONS = [
    ('section-1.0-text.txt', 'Section 1: Introduction',           1, 2),
    ('section-2.0-text.txt', 'Section 2: Glossary',               3, 6),
    ('section-3.0-text.txt', 'Section 3: Reprocessing Considerations', 7, 22),
    ('section-4.0-text.txt', 'Section 4: Regulatory Framework',   23, 29),
    ('section-5.0-text.txt', 'Section 5: Introduction to Reworking', 30, 54),
    ('section-6.0-text.txt', 'Section 6: Appendix I — AEX Case Study', 55, 74),
    ('section-7.0-text.txt', 'Section 7: Appendix II — Filtration Cases', 75, 77),
    ('section-8.0-text.txt', 'Section 8: References',             78, 93),
]

DROP_RE = re.compile(r'Licensed to Kuo, Li-Hung/Amaran Biotechnology, Inc\.: Copying and Distribution Prohibited\.')

doc = fitz.open(str(PDF))
total_phys = len(doc)
print(f'TR74 PDF: {total_phys} physical pages')
print(f'Offset: logical p1 = physical p{OFFSET + 1}\n')

for fname, title, lstart, lend in SECTIONS:
    pstart = lstart + OFFSET   # 1-based physical
    pend = lend + OFFSET
    pend = min(pend, total_phys)
    chunks = [f'# {title}', f'# Logical pages: p{lstart}-p{lend} (physical {pstart}-{pend})', '']
    for p in range(pstart - 1, pend):
        if p < 0 or p >= total_phys:
            continue
        page = doc[p]
        txt = page.get_text()
        txt = DROP_RE.sub('', txt)
        chunks.append(f'\n----- Page {p - OFFSET} -----\n')
        chunks.append(txt.strip())
    out = '\n'.join(chunks).strip() + '\n'
    out_path = SRC / fname
    out_path.write_text(out, encoding='utf-8')
    line_count = out.count('\n') + 1
    char_count = len(out)
    print(f'  {fname}: {line_count:>5} lines, {char_count:>6} chars  ({title})')

doc.close()
print(f'\nSource files written to {SRC}')
