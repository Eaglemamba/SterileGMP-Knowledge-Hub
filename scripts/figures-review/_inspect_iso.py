"""Quick inspection of ISO no-label figures for noise patterns."""
import json
from pathlib import Path
from PIL import Image

def dhash(p, size=8):
    try:
        im = Image.open(p)
        if im.mode == "CMYK":
            im = im.convert("RGB")
        im = im.convert("L").resize((size+1, size), Image.LANCZOS)
    except Exception:
        return None
    px = im.load()
    h = 0
    for y in range(size):
        for x in range(size):
            h = (h << 1) | (1 if px[x, y] > px[x+1, y] else 0)
    return h

def ham(a, b):
    return bin(a ^ b).count("1")


m = json.load(open("figures-manifest.json", encoding="utf-8"))
r = json.load(open("reports.json", encoding="utf-8"))["reports"]

for doc in ["ISO-13408", "ISO-2859-1", "ISO-15223-1"]:
    folder = r[doc]["folder"]
    base = Path(folder) / "figures"
    cands = []
    sizes = []
    for f in m[doc]["figures"]:
        if f.get("type") != "figure" or (f.get("label") or "").strip():
            continue
        p = base / f["file"]
        if not p.exists():
            continue
        h = dhash(p)
        if h is None:
            continue
        cands.append((f, h))
        sizes.append(f)

    clusters = []
    for f, h in cands:
        placed = False
        for c in clusters:
            if ham(h, c[0][1]) <= 4:
                c.append((f, h))
                placed = True
                break
        if not placed:
            clusters.append([(f, h)])

    print(f"\n=== {doc} ({len(cands)} unlabeled figures) ===")
    big = sorted([c for c in clusters if len(c) >= 3], key=lambda x: -len(x))
    print(f"Clusters >=3: {len(big)}")
    for c in big[:5]:
        files = [fig["file"] for fig, _ in c[:6]]
        print(f"  ({len(c)}): {files}")

    tiny = [f for f in sizes if f["width"] * f["height"] < 200000]
    print(f"Tiny (area <200k px): {len(tiny)}")
    for f in tiny[:8]:
        sz = f.get("size_kb", 0)
        print(f"  {f['file']:18s} p{f['page']:>3} {f['width']}x{f['height']} {sz}KB")
