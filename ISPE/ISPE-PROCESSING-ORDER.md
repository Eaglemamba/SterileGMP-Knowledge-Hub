# ISPE Document Processing Order

This file records the recommended processing order for generating bilingual educational HTML from ISPE source PDFs. Order is based on relevance to sterile pharmaceutical manufacturing, query frequency, and cross-reference with existing PDA content.

Last updated: 2026-03-31

---

## Processing Queue

| Priority | Folder | Document | PDF Size | Status | Notes |
|----------|--------|----------|----------|--------|-------|
| **1** | `ISPE-Vol5` | ISPE Baseline Vol.5: Commissioning & Qualification (2nd Ed.) | 6 MB | ✅ Complete | English original + Chinese translation in source/. Start here — most queried C&Q reference in pharma. Bridges PDA TR60. |
| **2** | `ISPE-Vol3` | ISPE Baseline Vol.3: Sterile Manufacturing Facilities | 10 MB | ⬜ Planned | Core facility design guide. Most directly aligned with Hub's sterile manufacturing focus. 2 PDFs in source (2011 version + main). |
| **3** | `ISPE-HVAC` | ISPE GPG: Heating, Ventilation and Air Conditioning | 11 MB | ⬜ Planned | Critical for Grade A/B/C/D cleanroom design. Only dedicated HVAC guide in the Hub. |
| **4** | `ISPE-Vol4` | ISPE Baseline Vol.4: Water & Steam Systems | 5 MB | ⬜ Planned | WFI/PW/PS utility systems. Lightweight, high practical relevance. |
| **5** | `ISPE-Vol7` | ISPE Baseline Vol.7: Risk-Based Manufacture | 12 MB | ⬜ Planned | Risk management foundation. Bridges PDA TR90 (CCS). |
| **6** | `ISPE-SUT` | ISPE GPG: Single-Use Technology | 10 MB | ⬜ Planned | Directly bridges existing PDA TR66. Users will cross-reference. |
| **7** | `ISPE-GAMP5` | ISPE GAMP 5 (1st Ed.) | 5 MB | ⬜ Planned | ⚠️ Only 1st edition available — current standard is 2nd Ed. (2022). Upgrade when 2nd Ed. is obtained. |
| **8** | `ISPE-Vol6` | ISPE Baseline Vol.6: Biopharmaceutical Manufacturing Facilities | 11 MB | ⬜ Planned | Bridges PDA PtC-14 (ATMP). Important for biologics/cell therapy facilities. |
| **9** | `ISPE-GEP` | ISPE Good Engineering Practice | 8 MB | ⬜ Planned | GEP framework. Foundational but lower query frequency. |
| **10** | `ISPE-CTC` | ISPE GPG CTC: Mapping and Monitoring | 4 MB | ⬜ Planned | Temperature monitoring. Bridges PDA TR39 / TR46. |
| **11** | `ISPE-TechTransfer` | ISPE GPG Technology Transfer (3rd Ed.) | 4 MB | ⬜ Planned | Bridges PDA TR91 (Post-Approval Change Management). |
| **12** | `ISPE-Sampling` | ISPE GPG Sampling: Water, Steam & Process Gases | 4 MB | ⬜ Planned | Sampling procedures for utilities. |
| **13** | `ISPE-ProcessGas` | ISPE Process Gases | 6 MB | ⬜ Planned | Process gas systems. |
| **14** | `ISPE-QualityCulture` | ISPE-PDA Quality Culture Guide | 1 MB | ⬜ Planned | Lightweight management guide. |
| **15** | `ISPE-IT` | ISPE IT Infrastructure: Control and Compliance | 1 MB | ⬜ Planned | IT compliance. Lightweight. |

---

## Status Legend

| Symbol | Meaning |
|--------|---------|
| 🔄 In Progress | Currently being processed |
| ✅ Complete | All sections generated, merged, verified |
| ⬜ Planned | Queued, not started |
| ⚠️ Flag | Requires attention (e.g., outdated edition) |

---

## Processing Workflow (per document)

1. `python gmp_engine.py scaffold ISPE-XXX --source ISPE` ← already done for all 15
2. Edit `reports.json` — fill in title, tags, colors (green family), section_map
3. Extract PDF text → `ISPE/ISPE-XXX/source/` (use pdftotext or PyMuPDF)
4. Generate bilingual HTML sections using PROMPT.md template
5. `python gmp_engine.py merge ISPE-XXX`
6. Update `knowledge/INDEX.md` — add block with `ISPE/ISPE-XXX-Complete.md` header
7. Move source PDF to `Raw pdfs/processed/` (optional — keep in source/ for reference)
8. Verify in browser → commit + push

```bash
git add ISPE/ISPE-XXX/ reports.json knowledge/ && git commit -m "Add ISPE-XXX: [title]"
```

---

## Source Color: ISPE Green Family

```json
"source_color": {
  "bg": "#1a3a2a",
  "text": "#27ae60",
  "bar": "#2ecc71",
  "short": "ISPE"
}
```

---

## Notes

- **ISPE-Vol5** has two PDFs: English original (`ISPE volume 5 Commissioning & Qualification 2nd Edition(正).pdf`) and a Chinese translation (`ISPE Baseline Guide vol5 2nd edition C and Q translated by 426.pdf`). Use Chinese translation as a reference aid for generating Chinese commentary — do not use it as primary source.
- **ISPE-Vol3** has two PDFs: the main Baseline Vol.3 and a 2011 version (`ISPE Sterile product manufacturing facilities_2011.pdf`). Use the main version; 2011 version is for historical reference.
- **ISPE-GAMP5**: Only 1st edition available. 2nd edition (2022) is the current industry standard — prioritise obtaining it before processing.
