# Figures Review — COMPLETE

**Final status 2026-04-20 16:15**

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
