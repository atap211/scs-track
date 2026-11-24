1. Read before running: auditing `workspace/stock-tools` revealed 3 dropped reorder rows, a hardcoded API key, `Object.groupBy` version mismatch, and an invented `fetchWithRetry` import despite all 5 stock tests passing.
2. Removed `SMS_API_KEY` by hand on `main` before creating any branches or using AI tools, replacing it with `process.env.SMS_API_KEY`.
3. Wrote a failing edge-case test on `scs3.6-patch` first, prompted for a single-function patch to `reorderList`, and removed an unrequested `.sort()` line marked `BEYOND`.
4. Created `GEMINI.md` at the repo root with Stack, Tests, and four audit-derived Never rules, plus a weekly `four-checks-audit` skill in `skills/four-checks-audit/SKILL.md`.
5. Kept all client data out of the public repo and scoped the agent run on its own `scs3.6-agent` branch with a `--no-ff` merge.
6. Least careful check on my own patch: Edge cases — I did not test whitespace-only `In stock` (`"   "`) or non-numeric strings (`"N/A"`), which a test passing `"Cement 50 kg,Building wholesaler,   ,20,bags"` to `reorderList` would catch.
