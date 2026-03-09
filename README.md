# PDA Educational Material Generator - Claude Code Kit

## Quick Start

### 1. Setup
```bash
# Place your PDF in source/
cp PDA-Tech-Guide-No1-Aseptic-Filling-2025.pdf source/

# Place extracted figure images in figures/
# Naming: fig-{section}.{subsection}-{number}.png
# Example: fig-1.1-1.png, fig-2.1.2-2.png
```

### 2. Run with Claude Code
```bash
# Open Claude Code in this directory
claude

# Then tell Claude Code:
# "Read PROMPT.md and process all sections of the PDA guide.
#  Start with section 1, create each HTML file, save to sections/,
#  then run merge.py when all sections are complete."
```

### 3. Process a single section
```bash
# Tell Claude Code:
# "Read PROMPT.md. Process only Section 5 (Dose Control, p101-p114).
#  Check figures/ for any fig-5.* images. Save to sections/section-05-dose.html"
```

### 4. Merge into final document
```bash
python3 merge.py
# Output: output/PDA-Guide-Complete.html
```

### 5. Merge with custom paths
```bash
python3 merge.py --sections-dir ./sections --css ./template.css --output ./output/PDA-Guide-Complete.html
```

## File Overview

| File | Purpose |
|------|---------|
| `PROMPT.md` | Master instructions - Claude Code reads this first |
| `template.css` | Shared CSS stylesheet (18KB) |
| `merge.py` | Combines section HTMLs into TopNav document |
| `sections/` | Individual section HTML output directory |
| `figures/` | Place extracted figure images here |
| `source/` | Place the PDA PDF here |
| `output/` | Final merged HTML output |

## Figure Naming Convention

```
fig-{major}.{minor}-{number}.png

Examples:
  fig-1.1-1.png     -> Figure 1.1-1 (Phase-Appropriate Approach)
  fig-2.1.2-2.png   -> Figure 2.1.2-2 (External Tubing Wear)
  fig-5.2-1.png     -> Figure 5.2-1 (Statistical IPC)
  fig-7.3.2-1.png   -> Figure 7.3.2-1 (Elastomer Insertion Methods)
```
