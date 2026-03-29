# PDA Technical Report Knowledge — Project Rules

## Post-Completion Checklist

When a PDA Technical Report is fully processed (all sections generated, merged, and verified in browser), you MUST complete these steps before committing:

### 1. Update `index.html` — Document Card (ONE card per report)

Add ONE entry to the `documents` array for the entire report (not per-section):

```javascript
// Example:
{ date:"2026-03-14", title:"PDA TR26: Sterilizing Filtration of Liquids", titleZh:"液體除菌過濾",
  source:"PDA TR26", tags:["Filtration","Validation","Integrity Test","Sterilization","QbD"],
  summary:"完整8章+3附錄：濾膜原理、確效、製程設計...（1-2 sentence Chinese summary of full report）",
  sections:11, pages:"p1-p73", figures:0, file:"TR26/output/TR26-Complete.html" },
```

Key fields:
- `date` — date the report was completed
- `title` — format: `"PDA TRXX: [Full English Title]"`
- `source` — short form: `"PDA TRXX"` (matches sourceColors key)
- `tags` — 4-6 top-level technical tags covering the whole report
- `summary` — Traditional Chinese summary of the entire report scope
- `sections` — total number of chapters/sections in the merged document
- `pages` — page range of the source PDF
- `file` — path to the merged TopNav HTML (e.g., `TR26/output/TR26-Complete.html`)

### 2. Update `index.html` — Source Colors

Add a new entry to `sourceColors` for the new report's color theme:

```javascript
const sourceColors = {
    "PDA Guide No.1": { bg:"#dbeafe", text:"#1e40af", bar:"#3b82f6", short:"Guide No.1" },
    "PDA TR26": { bg:"#d1fae5", text:"#065f46", bar:"#10b981", short:"TR26" },
    // new report here — pick a distinct color pair...
};
```

### 3. Update `index.html` — Tag Classes

Add any new tags to the `tagCls` object that don't already exist:

```javascript
// Example new tags for a filtration report:
"Filtration":"bg-green-50 text-green-600",
"Integrity Test":"bg-green-50 text-green-600",
"Bacterial Retention":"bg-green-50 text-green-600",
```

### 4. Dashboard Stats Auto-Update

The following stats are computed dynamically from the `documents` array — no manual update needed:
- Reports count, Sections count, Figures count, Sources count, Linked count
- Category bar proportions, Last updated date

### 5. Update `knowledge/INDEX.md`

Add an entry for the new report to THREE places in `knowledge/INDEX.md`:

1. **New report block** — copy the format of an existing entry, fill in:
   - File name, report name, pages, section count
   - "Covers questions about" — list 6–10 specific question types
   - "Key terms" — 10–15 technical terms users might search for
   - "Sections" — list the section titles

2. **Quick Topic Routing Guide table** — add a row with English + Chinese keywords → file name

3. **Cross-Report Topics** — if the new report overlaps with existing topics (e.g., APS, E&L, EM),
   add it to the relevant rows with appropriate ★ rating. If it introduces a new cross-report topic,
   add a new row.

### 6. Verify Before Commit

- [ ] Open `index.html` in browser — confirm new cards appear
- [ ] Confirm search works for new report content
- [ ] Confirm filter buttons include the new source
- [ ] Confirm stats numbers are correct
- [ ] Confirm "Open" button links to the correct file
- [ ] Confirm `knowledge/<TRXX>-Complete.md` was generated (check file exists and is > 100KB)
- [ ] Confirm `knowledge/INDEX.md` has been updated with the new report

## Naming Conventions

- Report folders: `TR26/`, `TR01/`, etc.
- Section files: `section-XX-short-name.html`
- Split sections: `section-XXa-name.html`, `section-XXb-name.html`
- Merged output: `TRXX-Complete.html`
- Source text: `section-X.0-text.txt`

## TopNav Scroll Arrow Rule

All merged documents use scroll arrow buttons (‹ ›) in the top nav. Required whenever a report has
more than ~8 sections, as tabs overflow the viewport.

**template.css** must have:
- `.top-nav`: `display: flex; align-items: stretch;`
- `.nav-container`: `justify-content: flex-start; scrollbar-width: none;` (NO `justify-content: center`)
- `.nav-scroll-btn` and `.nav-scroll-btn.hidden` styles defined

**Each merge.py** must include:
- Scroll arrow buttons wrapping the nav container (left/right `nav-scroll-btn`)
- `updateNavArrows()` — toggles `.hidden` on left/right buttons based on scroll position
- Click handlers on both buttons (`scrollBy ±300px`)
- `navContainer.addEventListener('scroll', updateNavArrows)`
- `item.scrollIntoView({ block:'nearest', inline:'nearest' })` when active item changes

Copy the nav HTML and JS from `pda-guide-no1/merge.py` as the reference template.

---

## Quick Start — Adding a New Report

```bash
# 1. Scaffold the folder structure
python3 new_report.py

# 2. Extract PDF text
python3 extract_pdf.py "Raw pdfs/TRXX.pdf" TRXX/source/

# 3. Generate section HTMLs (one agent per section, parallel dispatch)
#    Use PROMPT.md template. For sections likely >1000 lines, plan A/B split upfront.

# 4. Merge — auto-generates BOTH the HTML and knowledge/TRXX-Complete.md
python3 TRXX/merge.py

# 5. Update index.html (document card, sourceColors, tagCls)

# 6. Update knowledge/INDEX.md (new report block + routing table row + cross-report topics)

# 7. Verify in browser, then commit + push
git add TRXX/ index.html knowledge/ && git commit -m "Add TRXX: [title]"
```

For new merge.py files, use `merge_engine.py` via import — see its docstring for usage.
The MD file is generated automatically by `run_merge()` — no extra step needed.

---

## Known Pitfalls

### 32K Output Token Limit
Claude agents have a 32,000 output token limit per response. Sections covering 20+ pages of dense
technical content often exceed this. **Plan A/B splits upfront** for any source text file over ~800 lines.
Name them: `section-04a-name.html`, `section-04b-name.html`.
Update SECTION_MAP to pass both files in the same list entry:
```python
(["section-04a-name.html", "section-04b-name.html"], "sec4", "4", "Label", "中文", "p29-p41"),
```

### Nav Overflow (justify-content: center)
If `.nav-container` has `justify-content: center`, overflow is clipped symmetrically — users cannot
reach leftmost tabs. Always use `justify-content: flex-start` + scroll arrows (see TopNav Scroll Arrow Rule).

### index.html "docs/" Prefix Bug
Never prefix file paths with `docs/`. The `file` field must be relative to repo root:
- Correct: `"TR26/output/TR26-Complete.html"`
- Wrong: `"docs/TR26/output/TR26-Complete.html"`

### merge_engine.py Import Path
When a report's `merge.py` imports from `merge_engine.py`, add the parent directory to sys.path:
```python
import sys
sys.path.insert(0, os.path.join(os.path.dirname(os.path.abspath(__file__)), '..'))
from merge_engine import run_merge
```

### Older Reports — Manual MD Regeneration
Four reports (`pda-guide-no1`, `TR26`, `PtC-14`, `PtC-15`) use custom `merge.py` files that don't
call `merge_engine.run_merge()`, so they do **not** auto-generate `knowledge/*.md`.
To regenerate, use `merge_engine.generate_markdown()` — exec the report's `merge.py` up to the
`if __name__` block to load its `SECTION_MAP`, then call `generate_markdown()` with the report metadata.
Consider migrating these to `merge_engine.run_merge()` when making other changes.
