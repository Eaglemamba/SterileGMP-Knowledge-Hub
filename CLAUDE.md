# PDA Technical Report Knowledge — Project Rules

## Post-Completion Checklist

When a PDA Technical Report is fully processed (all sections generated, merged, and verified in browser), you MUST complete these steps before committing:

### 1. Update `index.html` — Document Cards

Add entries to the `documents` array for each section of the new report:

```javascript
// Example for TR26:
{ date:"2026-03-14", title:"Section 1: Introduction", titleZh:"導論",
  source:"PDA TR26 Sterilizing Filtration (2025)", tags:["Filtration","Overview"],
  summary:"...", lines:XXX, pages:"pX-pX", figures:0, file:"TR26/output/TR26-Complete.html" },
```

Key fields:
- `date` — date the section was completed
- `source` — use consistent naming: `"PDA TRXX [Short Title] (Year)"`
- `tags` — relevant technical tags for search/filter
- `summary` — 1-line Traditional Chinese summary
- `lines` — approximate line count of the HTML
- `file` — path relative to `docs/` (or direct path to the merged output)

### 2. Update `index.html` — Source Colors

Add a new entry to `sourceColors` for the new report's color theme:

```javascript
const sourceColors = {
    "PDA Guide No.1 Aseptic Filling (2025)": { bg:"#dbeafe", text:"#1e40af", bar:"#3b82f6", short:"PDA Guide No.1" },
    "PDA TR26 Sterilizing Filtration (2025)": { bg:"#d1fae5", text:"#065f46", bar:"#10b981", short:"TR26" },
    // new report here...
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
- Total Documents count
- Total Lines
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
