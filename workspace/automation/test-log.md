# Test log -- SCS3.5

| Case | Input rows (made up) | Expected (by hand, before the run) | Actual (after the run) | Pass or fail | Patch (line, commit) |
|---|---|---|---|---|---|
| Test 1 | DASHBOARD A12:C15 with 2 REORDER rows and 2 OK rows | REMINDEERS tab lists only the 2 REORDER rows under headers | REMINDEERS tab listed the 2 REORDER rows under headers | pass | - |
| Test 2 | RECORD rows in October 2026 with type OUT (qty 5, total 500; qty 3, total 300) and 1 IN row | MONTHLY REPORT shows October 2026, TOTAL SALES 800, UNITS SOLD 8 | MONTHLY REPORT showed October 2026, TOTAL SALES 800, UNITS SOLD 8 | pass | - |
| Edge case | DASHBOARD A12:C15 with zero REORDER rows; RECORD with blank dates and non-October dates | REMINDEERS shows headers only without error; MONTHLY REPORT shows 0 sales and 0 units | REMINDEERS showed headers only; MONTHLY REPORT showed 0 sales and 0 units | pass | - |
| Second edge case (optional, SGL menu) | | | | | |
| Partner as a careless owner | | | | | |
| Re-run in front of the trainer | | | | | |
