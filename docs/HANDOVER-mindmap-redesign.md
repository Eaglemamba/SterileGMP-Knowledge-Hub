# Handover: Mind Map Redesign

**Branch:** `claude/improve-mind-map-structure-vJGMe`  
**Date:** 2026-04-13  
**Status:** Phase 1 complete, Phase 2 pending

---

## What was requested

The user asked to improve the mind map (`mindmap.html`) "By Topic" view in three ways:

1. **Use all tags from `reports.json`** to create finer-grained subcategories instead of the previous 10 broad clusters
2. **Add cross-connection lines** between related topic clusters so the map shows real knowledge relationships, not just a flat tree
3. **Make nodes collapsible** — click to expand/collapse branches, and **leaf nodes should open the actual HTML document**

## What was completed (Phase 1)

### Commit `3a8a3ea`: D3 network graph with cross-connections

Two files changed (+500 lines):

#### `gmp-curriculum-data.js`

- Added `topicNetworkDef` object (line ~579) with:
  - **10 topic clusters**, each containing **3–6 subtopics** (51 total)
  - Every subtopic maps to specific tags from `reports.json` `tagClasses`
  - **20 cross-links** defining relationships between clusters (e.g., `aseptic ↔ sterilization: "Sterility Assurance"`)
- Added `buildTopicNetwork(reports)` function that counts documents per subtopic by matching report tags
- Updated `module.exports` to include the new exports

#### `mindmap.html`

- Replaced the "By Topic" markmap tree with a **D3.js radial network graph**
- Hub node at center → 10 cluster nodes on a ring → 51 subtopic nodes on an outer ring
- **20 curved dashed arcs** between clusters showing cross-connections
- **Hover** on a cluster: highlights its cross-links, dims unrelated nodes, shows relationship labels
- **Click** on any node: dark tooltip listing all matching documents with title and source
- Zoom/pan with mouse wheel and drag
- Responsive resize handler
- "By Department" and "By Source" views remain unchanged (still use markmap)

### Cluster → Subtopic mapping summary

| Cluster | Subtopics | Doc count |
|---|---|---|
| Aseptic Processing | Process Simulation, Barrier Systems, Filling Operations, Contamination Control, Personnel & Gowning | 25 |
| Sterilization & Filtration | Moist Heat, Dry Heat, Sterilizing Filtration, Chemical/Gas/Radiation | 37 |
| Container Closure | Primary Containers, Closures & Seals, CCI Testing, E&L, Single-Use, Packaging | 38 |
| Quality & Risk | Quality Mgmt, Risk Mgmt, Process Validation, Deviation & CAPA, Change Control, Data Integrity | 96 |
| Environmental Monitoring | EM Programs, Cleanroom Classification, Bioburden Control, Cleaning & Disinfection | 27 |
| Testing Methods | Endotoxin & Pyrogen, Particulate, Microbial, Analytical, Pharmacopoeia | 33 |
| Facilities & Utilities | Facility Design, HVAC, Water Systems, Process Gases, Equipment, C&Q | 11 |
| Advanced Therapies | Cell & Gene Therapy, Viral Vectors, Biosafety, Biologics, Lyophilization | 12 |
| Regulatory | Framework, ICH, Medical Devices, Supply Chain & GDP, Tech Transfer, Inspections | 39 |
| Emerging Tech | Digital & AI, Computerized Systems, Mobile/Modular, Continuous Mfg | 6 |

### Cross-links (20 total)

```
aseptic ↔ sterilization    Sterility Assurance
aseptic ↔ containers       Filling & Sealing
aseptic ↔ em               Cleanroom Monitoring
aseptic ↔ facilities       Aseptic Facility Design
aseptic ↔ atmp             ATMP Aseptic Manufacturing
aseptic ↔ emerging         Single-Use & Automation
sterilization ↔ em         Bioburden → SAL
sterilization ↔ facilities Sterilization Equipment
sterilization ↔ testing    Sterility Assurance Testing
containers ↔ testing       CCI & E&L Testing
containers ↔ regulatory    Packaging Regulations
quality ↔ em               Risk-Based CCS
quality ↔ regulatory       Compliance Framework
quality ↔ emerging         CSV & Data Integrity
em ↔ testing               Microbial Test Methods
em ↔ facilities            HVAC & Cleanroom Design
atmp ↔ facilities          Biosafety Lab Design
atmp ↔ regulatory          ATMP Regulations
testing ↔ regulatory       Compendial Standards
facilities ↔ quality       C&Q Lifecycle
```

---

## What remains (Phase 2) — not yet implemented

The user's follow-up request added two features that are **not yet built**:

### 1. Collapsible expand/collapse tree behavior

Currently all nodes render at once (static radial layout). The user wants a **collapsible mind map**:

- **Initial state:** Hub + 10 cluster nodes visible (subtopics hidden)
- **Click cluster:** Expand/collapse its subtopics with animation
- **Click subtopic:** Show document list (tooltip or expand further)
- Tree re-layouts on expand/collapse (clusters shift to accommodate)

**Recommended approach:** Replace the fixed radial layout in `renderTopicNetwork()` with a D3 collapsible radial tree:

```javascript
// Key pattern:
const tree = d3.tree().size([2 * Math.PI, R]);
const root = d3.hierarchy(treeData);

// Collapse initially
root.children.forEach(d => { d._children = d.children; d.children = null; });

function update(source) {
  tree(root);  // re-layout
  // D3 general update pattern: enter/update/exit with transitions
  // Nodes slide from parent position on enter, back to parent on exit
  // Links animate with d3.linkRadial()
  // Cross-links recalculate after each layout change
}

// Click handler toggles d.children ↔ d._children, then calls update(d)
```

Key considerations:
- Use `d3.linkRadial().angle(d => d.x).radius(d => d.y)` for tree edge curves
- Project node positions with `project(angle, radius)` → Cartesian for smooth animation
- Cross-links must redraw after each expand/collapse (cluster positions shift)
- Transition duration: ~500–600ms for smooth feel
- Store `d.x0, d.y0` after each update for next transition's origin

### 2. Leaf document nodes open HTML files

When clicking the deepest node (a specific document), it should open the report's HTML file:

```javascript
// Build link URL from reports.json:
const r = reports[docKey];
const url = `${r.folder}/output/${r.output_filename}`;
// e.g., "PDA/TR26/output/TR26-Complete.html"

// On click:
window.open(url, '_blank');
```

**Two design options for document nodes:**

- **Option A (tree leaf nodes):** Documents are actual tree nodes at depth 3. Click opens HTML. Drawback: subtopics like "Process Validation" have 52 documents — very crowded.
- **Option B (tooltip with links):** Click subtopic → tooltip shows scrollable doc list, each doc is a clickable link. Keeps tree at max 2 levels. **Recommended for UX.**

If using Option B, the tooltip already exists (`#networkTooltip`) — just make each `.tt-doc` a clickable `<a>` instead of a `<span>`:

```javascript
// In populateTooltip(), change:
div.innerHTML = `<span class="tt-src">${d.source}</span><span class="tt-doc-title">${d.title}</span>`;
// To:
const r = reports[d.key];
const link = (r && r.folder && r.output_filename) ? `${r.folder}/output/${r.output_filename}` : null;
if (link) {
  div.innerHTML = `<span class="tt-src">${d.source}</span><a href="${link}" target="_blank" style="color:#93c5fd;text-decoration:none;font-size:11px">${d.title}</a>`;
} else {
  div.innerHTML = `<span class="tt-src">${d.source}</span><span class="tt-doc-title">${d.title}</span>`;
}
```

---

## File map

| File | What it does | What to change for Phase 2 |
|---|---|---|
| `gmp-curriculum-data.js` | Data: clusters, subtopics, tags, cross-links, `buildTopicNetwork()` | May need to pass `folder`/`output_filename` into doc objects |
| `mindmap.html` | Rendering: D3 network graph, markmap views, tooltip, legend | **Rewrite `renderTopicNetwork()`** to use collapsible tree pattern |
| `reports.json` | Source of truth for tags, folder paths, output filenames | No changes needed |

## How to test

```bash
# Serve locally (any static server):
python3 -m http.server 8080
# Open http://localhost:8080/mindmap.html
# Click "By Topic" tab
# Verify: 10 cluster nodes + 51 subtopics + 20 cross-link arcs
# Hover a cluster → cross-links highlight
# Click a node → tooltip shows documents
```

## Notes

- The old `topicClusters` array (line ~450 in `gmp-curriculum-data.js`) and `generateTopicMarkdown()` function still exist but are no longer used by the topic view. They can be removed once Phase 2 is stable.
- The "By Department" and "By Source" views are untouched — they still use markmap.
- Mobile: zoom/pan works via touch. Hover highlights are desktop-only (acceptable).
