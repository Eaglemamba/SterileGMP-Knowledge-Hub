#!/usr/bin/env python3
"""Validate English quiz overlays rpg/quiz/en/<KEY>.json against rpg/quiz/<KEY>.json.

Overlay format: {"doc_key": KEY, "lang": "en", "questions": [{"id", "topic", "question",
"options": {same letters}, "explanation", "reference"?}]}. The answer letter, section and
scoring always come from the Chinese bank; the overlay carries text only.

Usage: python3 scripts/check_quiz_en.py [KEY ...]   (no args = every overlay present)
Exit 1 on any error.
"""
import json, os, re, sys

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
QZ = os.path.join(ROOT, 'rpg', 'quiz')
CJK = re.compile(r'[　-〿㐀-鿿＀-￯]')
LETTER_REF = re.compile(r'\b(?:option|choice|answer|choices|options)\s*\(?[A-E]\)?(?![A-Za-z])|\([A-E]\)|\b[A-E]\s+is (?:wrong|incorrect|correct|right)\b', re.I)


def check(key):
    errs = []
    zh = json.load(open(os.path.join(QZ, key + '.json'), encoding='utf-8'))
    p = os.path.join(QZ, 'en', key + '.json')
    try:
        en = json.load(open(p, encoding='utf-8'))
    except Exception as e:
        return ['%s: cannot read overlay: %s' % (key, e)]
    zq = {q['id']: q for q in zh['questions']}
    eq = {}
    for q in en.get('questions', []):
        if q.get('id') in eq: errs.append('%s #%s: duplicate id' % (key, q.get('id')))
        eq[q.get('id')] = q
    missing = sorted(set(zq) - set(eq), key=str)
    extra = sorted(set(eq) - set(zq), key=str)
    if missing: errs.append('%s: missing ids %s' % (key, missing[:20]))
    if extra: errs.append('%s: unknown ids %s' % (key, extra[:20]))
    for i, q in eq.items():
        z = zq.get(i)
        if not z: continue
        tag = '%s #%s' % (key, i)
        for f in ('topic', 'question', 'explanation'):
            v = q.get(f)
            if not isinstance(v, str) or not v.strip(): errs.append('%s: empty %s' % (tag, f))
            elif CJK.search(v): errs.append('%s: CJK in %s: %r' % (tag, f, CJK.search(v).group()))
        o = q.get('options') or {}
        if sorted(o) != sorted(z['options']): errs.append('%s: option letters %s != %s' % (tag, sorted(o), sorted(z['options'])))
        for k, v in o.items():
            if not isinstance(v, str) or not v.strip(): errs.append('%s: empty option %s' % (tag, k))
            elif CJK.search(v): errs.append('%s: CJK in option %s' % (tag, k))
        if q.get('reference') and CJK.search(q['reference']): errs.append('%s: CJK in reference' % tag)
        m = LETTER_REF.search(q.get('explanation') or '')
        if m: errs.append('%s: explanation names an option letter (%r); quote the option text instead' % (tag, m.group()))
    return errs


def main(argv):
    keys = argv or sorted(f[:-5] for f in os.listdir(os.path.join(QZ, 'en')) if f.endswith('.json'))
    errs = []
    for k in keys: errs += check(k)
    for e in errs: print(e)
    total = sum(len(json.load(open(os.path.join(QZ, f), encoding='utf-8'))['questions']) for f in os.listdir(QZ) if f.endswith('.json'))
    done = len([f for f in os.listdir(os.path.join(QZ, 'en')) if f.endswith('.json')])
    print('%d overlay(s) checked, %d error(s); %d/%d banks have an overlay (%d questions total)' % (len(keys), len(errs), done, len([f for f in os.listdir(QZ) if f.endswith('.json')]), total))
    return 1 if errs else 0


if __name__ == '__main__':
    sys.exit(main(sys.argv[1:]))
