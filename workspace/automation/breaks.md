# The nine breaks -- SCS3.5

| # | Break | Cannot happen because ... (line) | Found -- patched at (line, commit) |
|---|---|---|---|
| 1 | The header row counted | Cannot happen because line 6 starts reading at row 12 (`A12:C15`) and line 34 starts reading at row 2 (`A2:F1000`), skipping row 1 headers | |
| 2 | The wrong tab | Cannot happen because lines 5, 9, 28, and 62 select exact tabs by name (`DASHBOARD`, `REMINDEERS`, `RECORD`, `MONTHLY REPORT`) and lines 30-31 throw an error if `RECORD` is missing | |
| 3 | The number read as text | Cannot happen because lines 55 and 59 wrap cell values in `Number(row[5] || 0)` and `Number(row[3] || 0)` before summing | |
| 4 | The boundary | Cannot happen because line 17 checks `if (lowStockItems.length > 0)` before calling `setValues` on line 18, preventing an empty-range crash when 0 rows match | |
| 5 | The overwrite | Cannot happen because lines 13 and 68 call `clearContents()` on the output tabs before writing fresh headers and rows at lines 15 and 70 | |
| 6 | The invented piece | Verified by executing `checkStock()`, `generateMonthlyReport()`, and `testMonthlyReportSheet()` in the Apps Script editor run log on the test copy (lines 3, 26, 78) | |
| 7 | The silent assumption | Cannot happen because line 47 verifies `date instanceof Date && !isNaN(date.getTime())` and line 50 normalizes text with `String(row[2]).trim().toUpperCase()` | |
| 8 | The trigger that runs too often | Manual execution from the Apps Script editor (no `onEdit` or `everyMinutes` trigger configured; daily time-driven trigger only if scheduled) | |
| 9 | The confident wrong answer | Caught and verified by Test 2 and the Edge case in `test-log.md` against hand-calculated totals on lines 36-37 and 48-49 | |
