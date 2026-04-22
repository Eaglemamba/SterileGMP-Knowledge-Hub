# Figures Review — COMPLETE

**Final status 2026-04-22** — full corpus audit complete (see Gap-Fill Audit section below)

**Prior milestone 2026-04-20 16:15**

## All 8 shards complete

| Shard | Docs | Reviewed | Fakes |
|-------|------|----------|-------|
| 1a (TR43 first half, pages 18-125) | 1 | 347 | 0 |
| 1b (TR43 second half, pages 126-195) | 1 | 347 | 0 |
| 2 | 18 | 339 | 53 |
| 3 | 20 | 339 | 56 |
| 4 | 20 | 339 | 66 |
| 5 | 19 | 338 | 75 |
| 6 | 18 | 338 | 113 |
| 7 | 19 | 338 | 43 |
| 8 | 19 | 338 | 98 |
| **Total** | **135** | **3,063** | **504** |

**Manifest: 3063 → 2559 items** (−504 fakes, −16.5%)

**Backup:** `figures-manifest.backup.json`

## Notes

- TR43 (PDA Glass Defect Lexicon) — entire 694-item set is legitimate (photos, schematics, defect-catalog table strips). 0 fakes.
- PtC-Isolators — all 66 original "figures" were blank pages with PDA logo watermark; all removed.
- ISPE-GAMP5 had highest fake rate among the smaller docs (24 fakes).
- Fakes are overwhelmingly `vec-*.png` fallback renders — the PDF extractor's fallback pass captured prose regions when it couldn't find a real image for a caption label.

## Post-completion

- Each doc's figures sorted by (type: figure < table, label number ascending).
- Gallery UI (figures-gallery.html) is entirely driven by manifest order — changes take effect immediately.
- No HTML section files need modification; sections did not embed vec-*.png.
- The orphaned PNG files remain on disk (safe). To delete them, compare `backup` vs current manifest and `rm` files not listed.

---

## Gap-Fill Audit (2026-04-22)

Three-phase pipeline (Vision validate + body-ref diff + PDF re-extract) run
across all 134 manifest docs, ranked by entry count:

| Range | Docs | Missing | Added | Notes |
|-------|------|---------|-------|-------|
| Top 50 | 48 | 55 | 55 | skip TR43, pda-guide-no1 |
| 51-100 | 50 | 21 | 18 | 2 legitimate not-found + 1 table-row edge |
| 101-134 | 34 | 0 | 0 | long tail clean |
| **Total** | **132** | **76** | **73** | 96% recovery |

**Commits:** `73d9be17` (TR80 POC) · `049a127e` (top-50) · `d9fb306f` (51-100) · `58354ae9` (PNG stage)

**Manifest: 2559 → 2632 entries** (+73).

### Residual not-found (by design)

- **TR80 Figure 6.3.5-1** — prose reference only, no PDF caption
- **PtC-11 Figure 1.3-1** — prose reference only, no PDF caption
- **PtC-12 Figure 1.1-3 "cRABS"** — caption in table-row block (strict detector rejects lowercase-starter after label to filter prose refs)
- **PtC-12 Figure 1.10-1** — caption in multi-line table block (detector caps blocks at 3 lines to avoid prose false positives)

Relaxing either filter would reintroduce prose false positives; the 4 residuals are accepted as a deliberate precision/recall trade-off.

### Inputs/artifacts (untracked, local-only)

- `_audit_top50.py` — pipeline, `--input <json> --dry-run --doc <id>`
- `_pdf_overrides.json` — explicit PDF name mapping (e.g. PtC-12 → "Point to Consider-12-...")
- `top50-docs.json` / `ranks51-100-docs.json` / `ranks101-end-docs.json` — pre-computed doc lists per rank range
