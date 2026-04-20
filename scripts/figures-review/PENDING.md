# Figures Review — Pending Work

**Status as of 2026-04-20 14:18**

## Completed shards (merged into manifest)

| Shard | Docs | Reviewed | Fakes |
|-------|------|----------|-------|
| 2 | 18 | 339 | 53 |
| 3 | 20 | 339 | 56 |
| 4 | 20 | 339 | 66 |
| 5 | 19 | 338 | 75 |
| 6 | 18 | 338 | 113 |
| 8 | 19 | 338 | 97 |
| **Sub-total** | 114 | 2,031 | **460** |

**Manifest state**: 3063 → 2603 items. Backup at `figures-manifest.backup.json`.

## Pending shards (NOT YET REVIEWED — originals kept in manifest)

| Shard | Docs | Items | Status |
|-------|------|-------|--------|
| 1 | TR43 | 694 | Agent still running since 13:55, no output yet |
| 7 | TR60, ISPE-TechTransfer, TR91 + 16 more | 338 | Rate-limited twice; retry scheduled 14:36 |

## Retry instructions

- Shard 7: use `shard-7-input-v2.json` (thumb paths baked in).
- Shard 8: use `shard-8-input-v2.json`.
- Shard 1: if it fails, rebuild with thumbnails via `_prep_shard_v2.py` (to be created) then relaunch.

## Post-completion steps

1. Run `scripts/figures-review/_merge.py` with all 8 shards present → writes `figures-manifest.json`.
2. Delete the now-orphaned PNG files listed in the combined `to_remove` (or keep on disk as safety — manifest removal hides them from gallery).
3. Re-merge each affected doc's `*-Complete.html` via `python gmp_engine.py merge <ID>` if section files reference removed images (unlikely — sections don't embed vec-*.png).
