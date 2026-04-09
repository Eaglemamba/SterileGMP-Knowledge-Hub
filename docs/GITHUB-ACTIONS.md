# GitHub Actions — Automation Setup

設定日期：2026-04-09

---

## 概覽

本 repo 設有 3 個 GitHub Actions workflow，自動化處理文件流程中的機械步驟，讓 Claude Code session 專注在雙語 HTML 生成。

```
你 push PDF → Actions 生成 MD → 你用 Claude 生成 HTML sections → Actions merge + deploy
```

---

## Workflow 一覽

| 檔案 | 名稱 | 觸發條件 |
|---|---|---|
| `validate-json.yml` | Validate JSON | push `reports.json` 或 `tag-classes.json` |
| `auto-md.yml` | Generate Knowledge MD | push `Raw pdfs/`、push `gmp_engine.py`、每天 07:00 TWN |
| `auto-merge-deploy.yml` | Merge HTML and Deploy | push `**/sections/`、每天 07:00 TWN、手動 |

---

## 各 Workflow 詳細說明

### 1. Validate JSON（`validate-json.yml`）

**觸發**：每次 push `reports.json` 或 `tag-classes.json`

**做什麼**：
- 用 `python -m json.tool` 驗證 JSON 語法
- 任何語法錯誤（漏逗號、括號不對）立即在 GitHub 通知

**為什麼重要**：`reports.json` 是整個系統的單一資料來源（dashboard、merge engine 都依賴它），語法錯誤會讓整個系統壞掉。

---

### 2. Generate Knowledge MD（`auto-md.yml`）

**觸發**：
- Push 新 PDF 到 `Raw pdfs/`
- Push 更新的 `gmp_engine.py`
- 每天台灣時間早上 7 點（cron: `0 23 * * *` UTC）

**做什麼**：
1. 安裝 `pymupdf4llm`
2. 執行 `python gmp_engine.py md --all`
   - 對 `PDF_FILES` dict 中有對應的 report，直接從 PDF 提取 → 生成英文 MD
   - 對沒有 PDF mapping 的 report，從 `source/*.txt` fallback
3. 移動已處理的 PDF 到 `Raw pdfs/processed/`
   - 條件：PDF 存在於 `Raw pdfs/` **且** 對應的 `knowledge/*.md` 已成功生成
   - 保護機制：MD 生成失敗的 PDF 不會被移動，下次 cron 會再試
4. Commit `knowledge/` 和 `Raw pdfs/` 回 repo

**注意**：此步驟完全不需要 Claude API，純 Python + pymupdf4llm。

---

### 3. Merge HTML and Deploy（`auto-merge-deploy.yml`）

**觸發**：
- Push `**/sections/**`（Claude 生成完 HTML sections 後）
- 每天台灣時間早上 7 點（cron: `0 23 * * *` UTC）
- 手動觸發（可指定 report ID）

**做什麼**：

| 觸發方式 | merge 行為 |
|---|---|
| Push sections/ | 自動偵測哪個 report 的 sections 有變動，只 merge 那份 |
| cron 定時 | 執行 `merge --all`，重新合併所有已有 sections 的 report |
| 手動指定 | 執行 `merge <report_id>` |

執行後：
- Commit 合併結果回 repo（`output/*-Complete.html`、`knowledge/` 更新）
- Deploy 到 GitHub Pages（`gh-pages` branch）

**GitHub Pages 網址**：`https://eaglemamba.github.io/SterileGMP-Knowledge-Hub/`

---

## 完整自動化流程

```
[你] push PDF 到 Raw pdfs/
        ↓
[Actions] gmp_engine.py md --all
→ 生成 knowledge/*/XXX-Complete.md
→ 移動 PDF 到 Raw pdfs/processed/
→ commit 回 repo
        ↓
[你] git pull，Claude Code session
→ Claude 讀 MD，生成雙語 HTML sections
→ push sections/*.html
        ↓
[Actions] 偵測到 sections/ 變動
→ gmp_engine.py merge <report_id>
→ 生成 output/*-Complete.html
→ Deploy 到 GitHub Pages
→ commit 回 repo
```

---

## 手動仍需操作的步驟

以下步驟無法自動化，仍需在 Claude Code session 中完成：

1. **雙語 HTML sections 生成** — Claude 讀 MD → 產生 `sections/*.html`
2. **reports.json 填寫** — 新 report 的 metadata、section_map
3. **knowledge/INDEX.md 更新** — 新 report 的索引條目
4. **瀏覽器驗證** — 確認 index.html、Complete.html 正確顯示

---

## 費用

- 本 repo 為**公開 repo**，GitHub Actions 執行時間**完全免費、無上限**
- 不使用 Anthropic API，無 token 費用

---

## 常見問題

**Q：cron 每天跑 merge --all，但沒有新 sections，會有問題嗎？**
A：不會。workflow 結尾有 `git diff --staged --quiet || git commit`，沒有變動就不產生空 commit。

**Q：PDF 移到 processed/ 後，下次 md --all 還會重新處理嗎？**
A：不會。`generate_md_from_pdf()` 讀的是 `Raw pdfs/`，processed/ 裡的 PDF 不在搜尋路徑。

**Q：新 report 的 PDF 沒有加進 `PDF_FILES` dict，會怎樣？**
A：engine fallback 到讀 `source/*.txt`。若該資料夾也沒有 txt，會印 WARNING 但不中斷。PDF 也不會被移動（因為 MD 沒有生成）。
