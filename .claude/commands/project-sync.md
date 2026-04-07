# /project-sync

You are a project consistency auditor for the SterileGMP Knowledge Hub. Run all steps below in order. For each step, report PASS or list specific issues found. After reporting, fix any issues you found directly — do not ask for confirmation on straightforward updates.

---

## Step 1 — Parse ground truth from reports.json

Run this and capture the output:

```bash
python3 -c "
import json, collections
d = json.load(open('reports.json'))
src = collections.Counter()
total = 0
for k, v in d['reports'].items():
    if v.get('section_map'):
        parts = v.get('source','').split()
        s = parts[0] if parts else k
        src[s] += 1
        total += 1
print('=== Complete documents by source ===')
for k, v in sorted(src.items()): print(f'  {k}: {v}')
print(f'  TOTAL: {total}')
"
```

This is the authoritative count. All other files must agree with it.

---

## Step 2 — ROADMAP.md sync

Read `docs/ROADMAP.md` and check:

1. **"Last updated" line** — does the date match today (or the most recent push date)?
2. **"Current Status at a Glance" table** — do the counts match Step 1 output?
3. **Per-source rows in Layer 1 Completion Summary** — do they match Step 1?
4. **Active Priorities** — are they still the right next actions, or has something been completed?
5. **Phase task tables** — any tasks completed since last update that haven't been ticked off?

If any mismatch → edit `docs/ROADMAP.md` to correct it. Only change what's wrong; do not rewrite stable sections.

---

## Step 3 — knowledge/INDEX.md sync

Run this to list all knowledge MDs:

```bash
find knowledge/ -name "*.md" ! -name "INDEX.md" ! -name "INDEX-router.md" ! -name "INDEX-verbose.md" | sort
```

For each file found, verify it has a routing entry in `knowledge/INDEX.md`. Look for the filename in the Quick Topic Routing Guide table and in the document blocks.

Report any knowledge MDs missing from INDEX.md. If found, add the missing entries.

---

## Step 4 — Folder structure integrity

Run this to list all document folders:

```bash
for dir in PDA ISPE FDA ICH USP ISO PICS; do
  [ -d "$dir" ] && find "$dir" -maxdepth 1 -mindepth 1 -type d | sort
done
```

Then cross-check: every folder listed should have a matching entry in `reports.json` with a `folder` field pointing to it. 

Also check: every `reports.json` entry with a `folder` field should have a corresponding directory on disk.

Report any orphaned folders (on disk but not in reports.json) or ghost entries (in reports.json but no folder on disk).

---

## Step 5 — CLAUDE.md freshness

Read `CLAUDE.md` and check:

1. **Naming Conventions section** — does it cover all source orgs currently in use? Check against the source orgs in Step 1.
2. **File Structure Convention diagram** — does it reflect the current actual folder structure?
3. **Known Pitfalls** — are there any new pitfalls from recent sessions that should be documented?

Report any gaps. Only update CLAUDE.md if there is a clear, specific addition needed.

---

## Step 6 — Expert Knowledge Base status

Check `knowledge/EXPERT/` directory:

```bash
ls knowledge/EXPERT/ 2>/dev/null || echo "Directory does not exist yet"
```

Compare files found against the 9-file plan in `docs/ROADMAP.md` Expert Knowledge Base Status table. Update the Status column (⬜ / 🔄 / ✅) for any files that now exist or are in progress.

---

## Output format

After all steps, output a summary:

```
=== /project-sync results ===

Step 1 — Ground truth:    [total] docs complete ([breakdown by source])
Step 2 — ROADMAP.md:      PASS / [N issues fixed]
Step 3 — INDEX.md:        PASS / [N missing entries added]
Step 4 — Folder integrity: PASS / [N issues found]
Step 5 — CLAUDE.md:       PASS / [N additions made]
Step 6 — Expert KB:       [N/9 files exist]

Files changed: [list any files actually edited]
```

If all steps pass with no changes needed, output: `All project files in sync. No changes needed.`
