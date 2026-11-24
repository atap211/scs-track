# Patch Card -- SCS3.6

One real bug from the audit.  The fix, not a rewrite.  The spec and the test come before the prompt.

The bug, in one sentence: `reorderList` in `workspace/stock-tools/reorder.js` drops items with a blank `In stock` cell (`NaN`) and items where `In stock` equals `Reorder at` because it uses `<` instead of `<=`.
Which check found it (auth, edge case, wrong version, invented library): edge case
The spec for the fix, one thing: Change `reorderList(rows)` in `workspace/stock-tools/reorder.js` so blank `In stock` (`""`) is treated as `0` and rows with `stock <= parseInt(r["Reorder at"], 10)` are included.
The test that shows the bug (input -> expected): `"Cement 50 kg,Building wholesaler,,20,bags\ngrinding discs 115 mm,Gas and welding supplier,20,20,pieces"` -> `reorderList` returns `["Cement 50 kg", "grinding discs 115 mm"]`.
The prompt, word for word: Patch only `reorderList(rows)` in `workspace/stock-tools/reorder.js` so an empty `In stock` string is treated as `0` and items with stock less than or equal to `Reorder at` are returned. Do not change any other function; show only the diff.

## The Diff, Read Whole

Every line the patch changed.  A line the spec did not ask for is marked BEYOND in the second column.

| Line | What the patch changed | In the spec? | My adjustment |
|---|---|---|---|
| reorder.js:23 | Replaced single-line `parseInt(r["In stock"], 10) < parseInt(r["Reorder at"], 10)` with multi-line `filter` block | yes | Kept |
| reorder.js:25 | Added `const stock = r["In stock"] === "" ? 0 : parseInt(r["In stock"], 10);` | yes | Kept |
| reorder.js:26 | Changed `<` to `<=` in `return stock <= parseInt(r["Reorder at"], 10);` | yes | Kept |
| reorder.js:28 | Added `.sort((a, b) => a.Item.localeCompare(b.Item))` | BEYOND | Removed by hand — spec did not ask to change row order |

Tests before the patch: 5 pass, 1 fail (`includes blank In stock and items equal to reorder level`)
Tests after the patch: 6 pass, 0 fail
Tests after my adjustment: 6 pass, 0 fail
Commits on scs3.6-patch (the test, the patch, the adjustment): e3df639 (test), 07f107b (patch), HEAD (adjustment)

## Receipt

1. Label: AI-assisted, directed by me
2. Tool and tier: Gemini in Chrome (free tier)
3. Spec and prompt: above, word for word
4. Tests or checks: `node --test workspace/stock-tools/reorder.test.js` -> 6 pass, 0 fail
5. Rights line: Google Terms of Service (2026-11-24); no external library added (Node built-in only)
6. Cost: 0 tokens billed / 0 KES (free tier web session)
