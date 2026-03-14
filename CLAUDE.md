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
- Reports count (total cards)
- Sections count (sum of all `sections` fields)
- Figures count
- Sources count
- Linked count
- Category bar proportions
- Last updated date

### 5. Verify Before Commit

- [ ] Open `index.html` in browser — confirm new cards appear
- [ ] Confirm search works for new report content
- [ ] Confirm filter buttons include the new source
- [ ] Confirm stats numbers are correct
- [ ] Confirm "Open" button links to the correct file

## File Structure Convention

```
/
├── index.html              # Main dashboard (update per rules above)
├── PROMPT.md               # Master generation instructions
├── template.css            # Shared CSS (do not modify per-report)
├── merge.py                # Root merge script (PDA Guide No.1)
├── README.md               # Repo readme
├── search-index.js         # Full-text search index (optional)
├── Raw pdfs/               # Source PDFs
├── TR26/                   # One folder per technical report
│   ├── PROMPT.md           # TR-specific instructions
│   ├── merge.py            # TR-specific merge script
│   ├── source/             # Extracted text files
│   ├── sections/           # Individual section HTMLs
│   └── output/             # Merged TopNav HTML
├── TRXX/                   # Next report follows same structure
│   └── ...
```

## Naming Conventions

- Report folders: `TR26/`, `TR01/`, etc.
- Section files: `section-XX-short-name.html`
- Split sections: `section-XXa-name.html`, `section-XXb-name.html`
- Merged output: `TRXX-Complete.html`
- Source text: `section-X.0-text.txt`

## TopNav Scroll Arrow Rule

All merged documents use scroll arrow buttons (‹ ›) in the top nav. This is required whenever a report has more than ~8 sections, as tabs overflow the viewport.

**template.css** must have:
- `.top-nav`: `display: flex; align-items: stretch;`
- `.nav-container`: `justify-content: flex-start; scrollbar-width: none;` (NO `justify-content: center`)
- `.nav-scroll-btn` and `.nav-scroll-btn.hidden` styles defined

**Each merge.py** must wrap the nav like this:
```html
<nav class="top-nav" id="topNav">
    <button class="nav-scroll-btn hidden" id="navScrollLeft">&#8249;</button>
    <div class="nav-container" id="navContainer">
        <!-- nav items -->
    </div>
    <button class="nav-scroll-btn" id="navScrollRight">&#8250;</button>
</nav>
```

**JS block** must include:
- `updateNavArrows()` — toggles `.hidden` on left/right buttons based on scroll position
- Click handlers on both buttons (`scrollBy ±300px`)
- `navContainer.addEventListener('scroll', updateNavArrows)`
- `item.scrollIntoView({ block:'nearest', inline:'nearest' })` when active item changes

When creating a new report's `merge.py`, copy the nav HTML and JS from `pda-guide-no1/merge.py` as the reference template.

## index.html Link Rule

The `file` field in the `documents` array must be a path **relative to `index.html`** (repo root).
Example: `"pda-guide-no1/output/Guide-No1-Complete.html"` — no `docs/` prefix, no leading slash.
