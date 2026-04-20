"""One-shot CSS patcher for section-title alignment/bold fix.

Scans all *-Complete.html files and replaces the embedded `.section-title,
.section-divider { ... }` CSS block with the updated version that adds
padding-left/right (1.5rem) for alignment with .left-column content and
guarantees font-weight: 700.

Safe to re-run (idempotent via string compare).
"""
import re
from pathlib import Path

ROOT = Path(__file__).parent

NEW_BLOCK_BOTH = """.section-title,
.section-divider {
    font-size: 1.1rem;
    color: var(--primary-blue);
    margin: 1.5rem 0 1rem;
    padding: 0 1.5rem 0.5rem 1.5rem;
    border-bottom: 2px solid #e2e8f0;
    font-weight: 700;
}"""

NEW_BLOCK_SOLO = (
    ".section-title { font-size: 1.1rem; color: var(--primary-blue); "
    "margin: 1.5rem 0 1rem; padding: 0 1.5rem 0.5rem 1.5rem; "
    "border-bottom: 2px solid #e2e8f0; font-weight: 700; }"
)

PATTERN_BOTH = re.compile(
    r"\.section-title,\s*\.section-divider\s*\{[^}]*\}",
    re.DOTALL,
)
PATTERN_SOLO = re.compile(
    r"\.section-title\s*\{[^}]*\}",
    re.DOTALL,
)


def patch(path: Path) -> str:
    text = path.read_text(encoding="utf-8")
    if NEW_BLOCK_BOTH in text or NEW_BLOCK_SOLO in text:
        return "SKIP (already up-to-date)"
    new_text, count = PATTERN_BOTH.subn(NEW_BLOCK_BOTH, text, count=1)
    if count == 0:
        new_text, count = PATTERN_SOLO.subn(NEW_BLOCK_SOLO, text, count=1)
    if count == 0:
        return "NO_MATCH"
    path.write_text(new_text, encoding="utf-8")
    return "PATCHED"


def main():
    files = sorted(ROOT.glob("**/*-Complete.html"))
    results = {"PATCHED": 0, "SKIP (already up-to-date)": 0, "NO_MATCH": 0}
    no_match_files = []
    for f in files:
        r = patch(f)
        results[r] = results.get(r, 0) + 1
        if r == "NO_MATCH":
            no_match_files.append(str(f.relative_to(ROOT)))
    print(f"Total files scanned: {len(files)}")
    for k, v in results.items():
        print(f"  {k}: {v}")
    if no_match_files:
        print("\nFiles with no matching CSS block (manual review needed):")
        for p in no_match_files:
            print(f"  - {p}")


if __name__ == "__main__":
    main()
