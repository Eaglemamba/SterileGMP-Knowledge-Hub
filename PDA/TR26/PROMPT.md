# PDA Technical Report No. 26 - Educational Material Generator
# Sterilizing Filtration of Liquids (Revised 2025)

## MISSION

You are creating bilingual educational materials for **PDA TR26: Sterilizing Filtration of Liquids**. Transform dense technical pharmaceutical content into accessible learning resources for CDMO professionals.

For full HTML template structure, CSS class rules, language rules, teaching approach, and commentary box requirements, refer to the master `../PROMPT.md`.

---

## TOKEN ESTIMATION & DISPATCH PLANNING

### Per-Section Token Budget

Context window limit: **200K tokens per agent**. Each section's total cost = fixed overhead + variable content cost.

| Component | Estimated Tokens |
|-----------|-----------------|
| Fixed overhead (prompt + CSS + instructions) | ~20K |
| Source content input | ~0.3 tokens per char |
| Output HTML (bilingual commentary generates ~4x source) | ~1.2 tokens per char of source |
| **Total per section** | **~20K + (1.5 × source chars × 0.3)** |

### TR26 Section Token Estimates

| Section | Pages | Source Chars | Input Tokens | Est. Total (with output) | Fits 200K? |
|---------|-------|-------------|-------------|-------------------------|------------|
| 1.0 Introduction | 1 | 3,365 | ~1K | ~30K | Yes |
| 2.0 Glossary | 5 | 11,232 | ~3.4K | ~70K | Yes |
| 3.0 How Filters Work | 4 | 11,917 | ~3.6K | ~60K | Yes (done) |
| 4.0 Filter Qualification | 12 | 22,674 | ~6.8K | ~120K | Yes |
| 5.0 Filtration Process | 16 | 42,634 | ~12.8K | ~170K | Yes (tight) |
| 6.0 Validation Testing | 17 | 49,024 | ~14.7K | ~180K | Yes (tight) |
| 7.0 Integrity Testing | 15 | 39,959 | ~12K | ~160K | Yes |
| 8.0 Sterilization | 3 | 10,881 | ~3.3K | ~40K | Yes |
| 9.0 References | 4 | — | — | — | Skip (no HTML) |
| 10-12 Appendices | 15 | 26,376 | ~7.9K | ~130K | Yes |

### Dispatch Plan (Parallel Agents)

Group sections to maximize parallelism while staying within 200K per agent:

| Agent | Sections | Combined Source | Est. Total Tokens |
|-------|----------|----------------|-------------------|
| Agent 1 | 1.0 + 2.0 + 3.0 | 26,514 chars | ~140K |
| Agent 2 | 4.0 | 22,674 chars | ~120K |
| Agent 3 | 5.0 | 42,634 chars | ~170K |
| Agent 4 | 6.0 | 49,024 chars | ~180K |
| Agent 5 | 7.0 + 8.0 | 50,840 chars | ~180K |
| Agent 6 | 10.0-12.0 (Appendices) | 26,376 chars | ~130K |

**Rule**: If estimated total > 180K, split into sub-sections. Never exceed 200K.

---

## SECTION ASSIGNMENT MAP

```
[x] Section 3.0 - How Filters Work                              | p7-p10   | DONE
[ ] Section 1.0 - Introduction & Purpose/Scope                  | p1
[ ] Section 2.0 - Glossary & Abbreviations                      | p2-p6
[ ] Section 4.0 - Filter Qualification, Design & Characterization | p11-p22
[ ] Section 5.0 - Filtration Process Design, Usage & Handling    | p23-p38
[ ] Section 6.0 - Product & Process-Specific Validation Testing  | p39-p55
[ ] Section 7.0 - Integrity Testing                              | p56-p70
[ ] Section 8.0 - Sterilization of Filters                      | p71-p73
[—] Section 9.0 - References                                    | SKIP
[ ] Section 10.0 - Appendix I: Diffusive Flow Theory            | p78-p80
[ ] Section 11.0 - Appendix II: Integrity Test Methods           | p81-p87
[ ] Section 12.0 - Appendix III: Troubleshooting Guide           | p88-p91
```

---

## TR26-SPECIFIC TERMINOLOGY

Use these Chinese translations consistently:

| English Term | 繁體中文 |
|-------------|---------|
| Sterilizing Filtration | 除菌過濾 |
| Sterilizing-Grade Filter | 除菌級濾膜 |
| Sterilizing Filter | 除菌濾膜 |
| Pore Size Rating | 孔徑評級 |
| Bacterial Retention | 細菌截留 |
| Size Exclusion | 尺寸排除 |
| Adsorptive Sequestration | 吸附截留 |
| Integrity Test | 完整性測試 |
| Bubble Point | 泡點 |
| Diffusive Flow | 擴散流量 |
| Pressure Hold/Decay | 壓力保持/衰減 |
| PUPSIT (Pre-Use Post-Sterilization Integrity Test) | 使用前滅菌後完整性測試 |
| Extractables | 可萃取物 |
| Leachables | 可溶出物 |
| Bioburden | 生物負荷 |
| Brevundimonas diminuta | 短小單胞菌 |
| ASTM F838 | ASTM F838（細菌截留標準測試） |
| Filter Qualification | 濾膜資格確認 |
| Process Validation | 製程驗證 |
| Design Space | 設計空間 |
| Critical Quality Attribute (CQA) | 關鍵品質屬性 |
| Critical Process Parameter (CPP) | 關鍵製程參數 |
| Single-Use System (SUS) | 一次性使用系統 |

---

## TR26-SPECIFIC ANALOGIES

| Concept | Analogy |
|---------|---------|
| Filter membrane structure | 海綿迷宮 (sponge maze) — not a simple sieve |
| Size exclusion vs adsorptive sequestration | 安檢門 vs 便衣警察 (security gate vs undercover police) |
| ASTM F838 test | 駕照考試 (driver's license test) — qualifies you, but real-world driving needs validation |
| 0.2 um pore rating | 大學文憑 (university diploma) — graduated, but can they do the specific job? |
| Integrity testing | 出門前檢查瓦斯 (checking gas before leaving home) |
| Bubble point test | 吹氣球找漏洞 (blowing up a balloon to find leaks) |
| Pre-filtration bioburden | 機場安檢前的行李X光 (luggage X-ray before airport security) |
| Filter validation | 新員工試用期 (new employee probation period) |
| Redundant filtration | 雙重安全帶 (double safety belt) |
| Extractables vs leachables | 泡茶時茶葉釋出物 vs 實際喝到的 (tea leaf extractables vs what you actually drink) |

---

## DECISION HIERARCHY (Reinforce in every section)

```
1. Sterile Filtrate Assurance (無菌濾液保證)    ← ALWAYS #1
      ▼
2. Product Quality / CQAs (產品品質/關鍵品質屬性) ← Patient safety
      ▼
3. Process Robustness (製程穩健性)              ← Operational reliability
      ▼
4. Business & Efficiency (商業與效率)           ← Cost optimization
```

---

## SOURCE FILES

Pre-extracted section texts are in `TR26/source/`:
- `section-10-text.txt` — Section 1.0
- `section-20-text.txt` — Section 2.0
- `section-30-text.txt` — Section 3.0
- `section-40-text.txt` — Section 4.0
- `section-50-text.txt` — Section 5.0
- `section-60-text.txt` — Section 6.0
- `section-70-text.txt` — Section 7.0
- `section-80-text.txt` — Section 8.0
- `section-100-text.txt` — Sections 10.0-12.0 (Appendices)
