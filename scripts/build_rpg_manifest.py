#!/usr/bin/env python3
"""Build rpg/manifest.json — the document index used by rpg/rpg.js.

Reads reports.json and the merged output pages, and records for each document:
key, output path, file stem, titles, source group, tags, page count, the
chapter-section ids as they appear in the page (DOM order), the top-level
sections from section_map, whether the page is an empty shell, and how many
in-page questions each section has in rpg/quiz/<key>.json (null if no bank).
It also lists the image files present in rpg/assets/ so the front end only
requests images that exist.

Usage (from the repo root):
    python scripts/build_rpg_manifest.py
    python scripts/build_rpg_manifest.py --check   # exit 1 if manifest is stale

Both modes also lint the question banks: an explanation that still names an
option letter ("B 錯在…") stops that question's options from shuffling in
rpg.js (mixOpts). The rule is read from rpg.js (LETTER / LETTER_NAME), so the
two never drift. Warnings only; quote the option text instead.

The output is deterministic (no timestamps) so re-running produces no diff.
"""
import json
import os
import re
import sys

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
OUT_PATH = os.path.join(ROOT, 'rpg', 'manifest.json')
QUIZ_DIR = os.path.join(ROOT, 'rpg', 'quiz')
ASSET_DIR = os.path.join(ROOT, 'rpg', 'assets')

SECTION_RE = re.compile(r'<section\b[^>]*\bclass="[^"]*\bchapter-section\b[^"]*"[^>]*>')
ID_RE = re.compile(r'\bid="([^"]+)"')


def page_count(pages):
    """'p1-p267' -> 267, '7 pages' -> 7, anything else -> None."""
    if not pages:
        return None
    m = re.fullmatch(r'\s*p(\d+)\s*-\s*p(\d+)\s*', pages)
    if m:
        return max(1, int(m.group(2)) - int(m.group(1)) + 1)
    m = re.fullmatch(r'\s*(\d+)\s*pages?\s*', pages)
    if m:
        return int(m.group(1))
    return None


# Card label: the document's own number as people cite it (USP〈71〉, EP 2.6.1, ISO 14644, PDA TR13 ...).
FDA_CODES = {
    'FDA-Aseptic': 'FDA Aseptic Guidance 2004',
    'FDA-CCIT': 'FDA CCIT Guidance 2008',
    'FDA-ComboProd-CGMP': 'FDA Combination CGMP 2017',
    'FDA-ComboProd-HF': 'FDA Combination HF 2016',
    'FDA-ContainerClosure': 'FDA Container Closure 1999',
    'FDA-GlassVial': 'FDA Glass Vial & Stopper 2024',
    'FDA-ParametricRelease': 'FDA Parametric Release 2010',
    'FDA-ProcessInspection': 'FDA CPGM 7356.002A',
    'FDA-ProcessVal': 'FDA Process Validation 2011',
    'FDA-21CFR-211': '21 CFR 210/211',
    'FDA-21CFR-820': '21 CFR 820',
    'FDA-21CFR-Biologics': '21 CFR 600–680',
    'FDA-21CFR-Part11': '21 CFR Part 11',
    'FDA-21CFR-Part312': '21 CFR Part 312',
    'FDA-21CFR-Part4': '21 CFR Part 4',
}
ISPE_CODES = {
    'ISPE-Vol3': 'ISPE Baseline Vol.3', 'ISPE-Vol4': 'ISPE Baseline Vol.4', 'ISPE-Vol5': 'ISPE Baseline Vol.5',
    'ISPE-Vol6': 'ISPE Baseline Vol.6', 'ISPE-Vol7': 'ISPE Baseline Vol.7', 'ISPE-GAMP5': 'ISPE GAMP 5',
    'ISPE-HVAC': 'ISPE GPG HVAC', 'ISPE-CTC': 'ISPE GPG Temp. Mapping', 'ISPE-IT': 'ISPE GAMP GPG IT',
    'ISPE-ProcessGas': 'ISPE GPG Process Gases', 'ISPE-QC': 'ISPE-PDA Quality Culture', 'ISPE-SUT': 'ISPE GPG SUT',
    'ISPE-Sampling': 'ISPE GPG Sampling', 'ISPE-TechTransfer': 'ISPE GPG Tech Transfer',
}


def doc_code(key, r, group):
    src = (r.get('source') or '').strip()
    if group == 'USP':                                   # USP 〈1229.1〉 -> USP〈1229.1〉
        m = re.search(r'[〈⟨<]\s*([0-9.]+)\s*[〉⟩>]', src) or re.search(r'USP-([0-9-]+)', key)
        return 'USP〈' + m.group(1).replace('-', '.') + '〉' if m else src
    if group == 'PHEUR':                                 # Ph.Eur. 2.6.1 -> EP 2.6.1
        m = re.search(r'(\d+(?:\.\d+)+)', src)
        return 'EP ' + m.group(1) if m else src
    if group == 'ISO':                                   # ISO-10993-1 -> ISO 10993-1, ISO-TR-24971 -> ISO/TR 24971
        if key.startswith('ISO-TR-'):
            return 'ISO/TR ' + key[len('ISO-TR-'):]
        return 'ISO ' + key[len('ISO-'):]
    if group == 'PICS':
        m = re.match(r'PICS-Annex(\d+)$', key)
        if m:
            return 'PIC/S Annex ' + m.group(1)
        if key == 'PICS-PE011':
            return 'PIC/S PE 011'
        return src
    if group == 'FDA':
        return FDA_CODES.get(key, src)
    if group == 'ISPE':
        return ISPE_CODES.get(key, src)
    if group == 'ICH':                                   # ICH Q9(R1)
        return src or key.replace('-', ' ')
    if group == 'PDA':                                   # PDA TR13-2, PDA PtC-1
        return src or ('PDA ' + key)
    return src or key


def section_ids(html_path):
    """Ids of every .chapter-section in document order (matches the page's own
    querySelectorAll('.chapter-section'), which drives sgk_progress_*)."""
    if not os.path.exists(html_path):
        return []
    with open(html_path, 'r', encoding='utf-8') as f:
        html = f.read()
    ids = []
    for tag in SECTION_RE.findall(html):
        m = ID_RE.search(tag)
        if m:
            ids.append(m.group(1))
    return ids


def quiz_sections(key, valid_ids):
    """{section id: question count} from rpg/quiz/<key>.json, or None."""
    path = os.path.join(QUIZ_DIR, key + '.json')
    if not os.path.exists(path):
        return None
    with open(path, 'r', encoding='utf-8') as f:
        bank = json.load(f)
    counts = {}
    for q in bank.get('questions', []):
        sec = q.get('section')
        if sec not in valid_ids:
            raise SystemExit(f'rpg/quiz/{key}.json: question {q.get("id")} has unknown section {sec!r}')
        counts[sec] = counts.get(sec, 0) + 1
    return counts or None


def build():
    with open(os.path.join(ROOT, 'reports.json'), 'r', encoding='utf-8') as f:
        reports = json.load(f)['reports']

    docs = {}
    for key, r in reports.items():
        fname = r.get('output_filename')
        smap = r.get('section_map') or []
        if not (r.get('date') and fname and smap and (r.get('title') or r.get('titleZh'))):
            continue  # same filter as index.html loadData()
        folder = r.get('folder') or key
        rel = f'{folder}/output/{fname}'
        dom_ids = section_ids(os.path.join(ROOT, *rel.split('/')))
        dom_set = set(dom_ids)

        top = []
        for s in smap:
            if isinstance(s, dict):
                sid, num = s.get('id'), s.get('num')
                en, zh = s.get('label_en') or '', s.get('label_zh') or ''
            else:  # legacy tuple/list: (files, id, num, label_en, label_zh, pages)
                sid, num, en, zh = s[1], s[2], s[3], s[4]
            if sid in dom_set:
                top.append({'id': sid, 'num': str(num), 'en': en, 'zh': zh})

        color = r.get('source_color') or {}
        docs[key] = {
            'file': rel,
            'stem': fname[:-5] if fname.endswith('.html') else fname,
            'title': r.get('title') or r.get('report_title_en') or key,
            'titleZh': r.get('titleZh') or '',
            'group': folder.split('/')[0],
            'short': color.get('short') or key,
            'code': doc_code(key, r, folder.split('/')[0]),
            'bar': color.get('bar') or '#64748b',
            'tags': r.get('tags') or [],
            'pages': page_count(r.get('pages')),
            'dom': dom_ids,
            'top': top,
            'shell': len(dom_ids) == 0,
            'quiz': quiz_sections(key, {t['id'] for t in top}),
        }

    assets = []
    if os.path.isdir(ASSET_DIR):
        assets = sorted(f for f in os.listdir(ASSET_DIR) if f.lower().endswith(('.webp', '.png', '.svg')))
    return {'version': 1, 'assets': assets, 'docs': docs}


def js_regex(src, name):
    m = re.search(r'var ' + name + r' = /(.+)/([gi]*);', src)
    flags = re.ASCII | (re.I if 'i' in m.group(2) else 0)   # ASCII: JS \b and \s match like this
    return re.compile(m.group(1).replace('\\/', '/'), flags)


def lint_letters():
    """Questions whose explanation names an option letter (so mixOpts keeps their order)."""
    with open(os.path.join(ROOT, 'rpg', 'rpg.js'), 'r', encoding='utf-8') as f:
        src = f.read()
    letter, opt_ref, name = js_regex(src, 'LETTER'), js_regex(src, 'OPT_REF'), js_regex(src, 'LETTER_NAME')
    hits = []
    for fn in sorted(os.listdir(QUIZ_DIR)):
        if not fn.endswith('.json'):
            continue
        with open(os.path.join(QUIZ_DIR, fn), 'r', encoding='utf-8') as f:
            qs = json.load(f).get('questions', [])
        for q in qs:
            opts = ' '.join((q.get('options') or {}).values())
            if opt_ref.search(opts) or letter.search(opts):
                continue   # options themselves name a letter / 以上皆是: order must stay, nothing to fix
            exp = name.sub(' ', q.get('explanation') or '')
            m = letter.search(exp)
            if m:
                hits.append(f'  rpg/quiz/{fn} id {q.get("id")}: ...{exp[max(0, m.start() - 15):m.end() + 15]}...')
    if hits:
        print(f'Note: {len(hits)} explanation(s) name an option letter, so those questions will not shuffle '
              '(quote the option text instead of "B 錯在…"):')
        print('\n'.join(hits))


def main():
    lint_letters()
    manifest = build()
    text = json.dumps(manifest, ensure_ascii=False, separators=(',', ':'), sort_keys=True) + '\n'
    docs = manifest['docs']
    shells = sorted(k for k, d in docs.items() if d['shell'])
    banks = sorted(k for k, d in docs.items() if d['quiz'])

    if '--check' in sys.argv:
        current = ''
        if os.path.exists(OUT_PATH):
            with open(OUT_PATH, 'r', encoding='utf-8') as f:
                current = f.read()
        if current != text:
            print('rpg/manifest.json is stale — run: python scripts/build_rpg_manifest.py')
            sys.exit(1)
        print('rpg/manifest.json is up to date')
        return

    os.makedirs(os.path.dirname(OUT_PATH), exist_ok=True)
    with open(OUT_PATH, 'w', encoding='utf-8', newline='\n') as f:
        f.write(text)
    print(f'Wrote rpg/manifest.json: {len(docs)} documents, {len(text) / 1024:.1f} KB')
    print(f'  sections (DOM): {sum(len(d["dom"]) for d in docs.values())}, '
          f'top-level: {sum(len(d["top"]) for d in docs.values())}')
    print(f'  shell pages ({len(shells)}): {", ".join(shells) or "-"}')
    print(f'  question banks ({len(banks)}): {", ".join(banks) or "-"}')


if __name__ == '__main__':
    main()
