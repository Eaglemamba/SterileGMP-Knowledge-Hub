import sys, io
sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding='utf-8')
import fitz
PDF = r'Raw pdfs\TR-74-2026-Reprocessing-and-Reworking-of-Biologicals.pdf'
d = fitz.open(PDF)
print(f'Pages: {len(d)}')
# TOC pages
for p in range(7):
    page = d[p]
    txt = page.get_text()
    print(f'\n=== p{p+1} (chars {len(txt)}) ===')
    print(txt[:1500])
d.close()
