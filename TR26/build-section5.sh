#!/bin/bash
# Build script for Section 5 HTML - assembles from parts
OUTDIR="/Users/kuoli-hung/PDA_Technical-Report-Knowledge/TR26/sections"
PARTDIR="/Users/kuoli-hung/PDA_Technical-Report-Knowledge/TR26/parts5"
OUTFILE="$OUTDIR/section-05-filtration-process.html"

mkdir -p "$PARTDIR"

# Concatenate all parts in order
cat "$PARTDIR"/part-*.html > "$OUTFILE"

echo "Built $OUTFILE"
wc -c "$OUTFILE"
