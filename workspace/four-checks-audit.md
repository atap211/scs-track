# Four-Checks Audit

Run all four on every AI-built piece before a client sees it.  Write what you found, not what you hoped.
'Clean' is allowed only with the evidence beside it: the command you ran and what it printed, or the
page you read and the date you read it.  One section per piece; add a new piece at the bottom each time.

## Piece 1: the stock tool (workspace/stock-tools)

### Auth
Looked for: Hardcoded API keys, secrets in URLs, unencrypted HTTP endpoints, and secrets committed in git history.
Found: `send-sms.js` hardcoded `SMS_API_KEY` in plain text, appended `?key=` to an unencrypted `http://` URL, printed it in `--dry-run`, and committed it in `58dd65c`. Removed by hand on `main` and replaced with `process.env.SMS_API_KEY`.
Evidence: `git grep -n "SMS_API_KEY" workspace/stock-tools/` printed `workspace/stock-tools/send-sms.js:9:const SMS_API_KEY = "LLDEMO-SMS-5c1e9a07d2b84f63";` (before manual removal).

### Edge cases
Ugly inputs, written before trying them:
1. Blank `In stock` cell (`Cement 50 kg,,20,bags`) -> should reorder (`0 <= 20`).
2. Quoted comma in item name (`"Nails, 3 inch",Hardware wholesaler,4,10,kg`) -> should reorder (`4 <= 10`).
3. Boundary equality (`grinding discs 115 mm,Gas and welding supplier,20,20,pieces`) -> README says "at or below", should reorder (`20 <= 20`).
4. Lower-case apostrophe (`ng'ombe salt lick`) -> should capitalize cleanly without capitalizing after `'`.
5. Ampersand in item name (`Nuts & bolts M10`) -> must be URL-encoded in SMS query string.
Found:
- `reorder.js:23` uses `<` instead of `<=` and `parseInt("", 10)` yields `NaN`, dropping `Cement 50 kg` and `grinding discs 115 mm`.
- `reorder.js:13` splits on `line.split(",")`, shifting columns on `"Nails, 3 inch"` so `In stock` becomes `" 3 inch"` (`NaN`) and drops the row.
- `reorder.js:33` (`/\b\w/g`) turns `ng'ombe` into `Ng'Ombe`.
- `send-sms.js:14` concatenates raw `text` without `encodeURIComponent`, breaking the query string at `&` in `Nuts & bolts M10`.
Evidence: `node workspace/stock-tools/reorder.js workspace/stock-tools/stock-export.csv` printed only 4 items (Welding rods, ng'ombe salt lick, Nuts & bolts, Oxygen refill) instead of 7.

### Wrong versions
Looked for: Node.js APIs that disagree with `README.md` ("Works on any Node") compared against `node --version` (`v22.22.1`).
Found: `reorder.js:28` uses `Object.groupBy(list, (r) => r.Supplier)`, which requires Node 21+ (fails on Node 18/20 LTS), contradicting `README.md`.
Evidence: `grep -n "Object.groupBy" workspace/stock-tools/reorder.js` printed `28:  return Object.groupBy(list, (r) => r.Supplier);` while `node --version` is `v22.22.1`.

### Invented libraries
Looked for: Non-existent imports or methods in Node built-in modules (`node:http`, `fs`, `node:test`, `node:assert`).
Found: `send-sms.js:5` imports `const { fetchWithRetry } = require("node:http");` — `fetchWithRetry` does not exist in Node's `node:http` module.
Evidence: `node workspace/stock-tools/send-sms.js workspace/stock-tools/stock-export.csv` exited with `TypeError: fetchWithRetry is not a function`.

The one to fix first, and why: `reorderList` and `parseCsv` in `reorder.js` — silently dropping 3 of 7 reorder items causes stockouts of cement, nails, and grinding discs, costing the shop owner direct sales.

## Piece 2: my own SCS3.5 script

### Auth
Looked for: Hardcoded API keys, webhook secrets, or credentials in `~/scs/evidence/scs3.5/reference-reminder-defended-original.gs`.
Found: Clean — uses `SpreadsheetApp.getActiveSpreadsheet()` with container-bound permissions and no hardcoded keys or external URLs.
Evidence: `grep -En "key|token|secret|password|http" ~/scs/evidence/scs3.5/reference-reminder-defended-original.gs` returned no matches (2026-11-24).

### Edge cases
Ugly inputs, written before trying them:
1. Stock items added below row 15 on `DASHBOARD` (or sales past row 1000 on `RECORD`).
2. Lowercase or trailing-space status (`"reorder"` or `"REORDER "`) in column C of `DASHBOARD`.
3. Running the monthly report in a different month than October 2026 (`reportMonth = 9`).
Found:
- `checkStock()` hardcodes `dashboard.getRange("A12:C15")` and strict `row[2] === "REORDER"`, missing rows past row 15 or un-trimmed/lowercase status strings; also misspells the output sheet `"REMINDEERS"`.
- `generateMonthlyReport()` hardcodes `reportMonth = 9` and `reportYear = 2026`, so it will not report November 2026 without editing code.
Evidence: Read `~/scs/evidence/scs3.5/reference-reminder-defended-original.gs` lines 4, 6, 7, 32-33 on 2026-11-24.

### Wrong versions
Looked for: Deprecated Rhino-only Apps Script APIs or unsupported JS syntax in Google Apps Script V8 runtime.
Found: Clean — uses standard ES6/V8 syntax (`const`, arrow functions, `Array.filter`, `Array.reduce`, `Number()`) supported in Apps Script V8.
Evidence: Read `~/scs/evidence/scs3.5/reference-reminder-defended-original.gs` lines 1-85 on 2026-11-24; no Rhino-only calls present.

### Invented libraries
Looked for: Non-existent Google Apps Script services or methods.
Found: Clean — uses only documented `SpreadsheetApp` (`getActiveSpreadsheet`, `getSheetByName`, `insertSheet`, `getRange`, `getValues`, `setValues`, `clearContents`, `flush`) and `Logger.log`.
Evidence: Read `~/scs/evidence/scs3.5/reference-reminder-defended-original.gs` lines 1-85 on 2026-11-24.

What I will do about what I found (a fix on the sheet copy, SCS3.5's test log, or 'clean'): On a copy of the sheet (never the client's live sheet), I will update `checkStock()` to normalize `String(row[2]).trim().toUpperCase() === "REORDER"`, read dynamically down to `getLastRow()`, and fix the `"REMINDEERS"` tab name typo, and document the test run in SCS3.5's test log.
