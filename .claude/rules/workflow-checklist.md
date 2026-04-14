# Workflow Checklists

## Post-Completion Checklist

When any document is fully processed (all sections generated, merged, and verified in browser):

### 1. Update `reports.json` (SINGLE source of truth)

Add a new report entry to the `reports` object:

```json
{
  "TRXX": {
    "report_title_en": "PDA Technical Report No. XX (Year)",
    "report_subtitle_en": "Full English Subtitle",
    "report_subtitle_zh": "中文副標題 完整教學版",
    "output_filename": "TRXX-Complete.html",
    "footer_text": "PDA Technical Report No. XX (Year): Full English Subtitle",
    "chapter_label": "Section",
    "date": "2026-03-20",
    "title": "PDA TRXX: Short Dashboard Title",
    "titleZh": "中文標題",
    "source": "PDA TRXX",
    "source_color": { "bg": "#...", "text": "#...", "bar": "#...", "short": "TRXX" },
    "tags": ["Tag1", "Tag2", "Tag3"],
    "summary": "中文摘要（1-2句）",
    "pages": "p1-p100",
    "figures": 0,
    "section_map": [
      { "files": ["section-00-intro.html"], "id": "sec0", "num": "0", "label_en": "Introduction", "label_zh": "導論", "pages": "p1-p5" }
    ]
  }
}
```

Also add any new tags to `tagClasses` in the same file if they don't already exist.

### 2. Update `knowledge/INDEX.md` (three places)

1. **New report block** — file name, pages, section count, 6–10 question types, 10–15 key terms, section titles
2. **Quick Topic Routing Guide table** — new row with English + Chinese keywords → file name
3. **Cross-Report Topics** — add to relevant rows with ★ rating, or add new row

### 2b. Update `knowledge/INDEX-router.md`

Not auto-updated with INDEX.md — must be done manually:
- Identify which Topic Router category (Aseptic, Barriers, EM, Contamination, Facility, Validation, Containers, Risk/Data, etc.)
- Add row only if this document is ★★★ or ★★ for a topic (skip ★)
- Add new synonyms to Synonym Table if new terminology introduced

> `INDEX-verbose.md` is a legacy file — do NOT update it.

### 3. Move Source PDF to Processed

```bash
mv "Raw pdfs/PDA_TRXX_....pdf" "Raw pdfs/processed/"
```

### 4. Update `docs/ROADMAP.md` (BEFORE commit, not after)

This step is mandatory when adding new documents. Do not defer to post-push.

- [ ] "Last updated" line → today's date + new count
- [ ] "Current Status at a Glance" table → recount Layer 1 documents
- [ ] Layer 1 Completion Summary table → update source row count + description
- [ ] Estimated Target table (bottom) → update current count
- [ ] Phase tasks → tick off completed items
- [ ] Active Priorities → remove completed items or mark done
- [ ] Coverage by Domain → add new documents to relevant domain rows
- [ ] Remaining Layer 1 Additions → mark completed items as done
- [ ] Any mention of "N documents" in the file → grep for old count, replace all

### 5. Verify Before Commit

- [ ] Open `index.html` in browser — confirm new card appears
- [ ] Confirm search works for new report content
- [ ] Confirm filter buttons include the new source
- [ ] Confirm stats numbers are correct
- [ ] Confirm "Open" button links to the correct file
- [ ] Confirm `knowledge/<SOURCE>/<ID>-Complete.md` is English-only (no Chinese)
- [ ] Confirm `knowledge/INDEX.md` has been updated

---

## After Every `git push` — Project File Sync

**Fastest path: run `/project-sync`** — covers items 1, 2, and 5 automatically.
`/project-sync` does NOT cover items 2b, 3, or 4 — verify those manually.

### Manual checklist (if not using /project-sync)

#### 1. `docs/ROADMAP.md`
- [ ] "Last updated" → today + what changed
- [ ] "Current Status at a Glance" table → recount from `reports.json`
- [ ] Per-source counts → recount from `reports.json`
- [ ] Active Priorities → re-order if needed
- [ ] Phase tasks → tick off completed

```bash
python3 -c "
import json, collections
d = json.load(open('reports.json'))
src = collections.Counter()
for k, v in d['reports'].items():
    if v.get('section_map'):
        s = v.get('source','').split()[0]
        src[s] += 1
for k,v in sorted(src.items()): print(f'{k}: {v}')
print('Total:', sum(src.values()))
"
```

#### 2. `knowledge/INDEX.md` — when new knowledge MDs added
- [ ] New report block, routing table row, cross-report topics

#### 2b. `knowledge/INDEX-router.md` — when new knowledge MDs added
- [ ] Add router rows for ★★★/★★ sources only

#### 3. `CLAUDE.md` — when workflow changes
- [ ] New source org added → update naming-conventions.md + color note
- [ ] New folder type → update file structure in naming-conventions.md
- [ ] New pitfall → add to pitfalls.md

#### 4. `docs/PROMPT.md` — when generation approach changes
- [ ] Section generation instructions still match current HTML structure
- [ ] New source org needs color/header template

#### 5. Folder structure integrity
- [ ] `reports.json` `folder` field matches actual path for affected reports
- [ ] `index.html` Open button links still resolve

Do NOT rewrite entire files — only update sections where actual changes occurred.
