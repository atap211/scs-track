# Four-Checks Audit

## When to use
Use every week before deploying or handing over any AI-generated or modified script (Node.js CLI tool or Google Apps Script) to a client.

## Steps
1. Search for hardcoded secrets (`git grep -En "key|token|secret|password|http"`), verify environment variables are used, and remove any exposed keys by hand.
2. List ugly edge-case inputs on paper first (blank cells, quoted commas, boundary `=` values, apostrophes, `&` characters) and run the script against them.
3. Compare every modern JS/Node method against `node --version` and official documentation to catch version mismatches.
4. Check every `require(...)` or service call against official docs to confirm no invented libraries or methods exist.
5. Record every finding with its exact command and output evidence line in `workspace/four-checks-audit.md`.

## How you know it worked
Every check in the audit file has a real command or line-number evidence beside it, zero secrets appear in `git grep`, and all edge-case tests pass.

Ran: 2026-11-24 — Ran the 5-step audit on `workspace/stock-tools` and `~/scs/evidence/scs3.5/reference-reminder-defended-original.gs`; caught hardcoded `SMS_API_KEY`, 3 dropped reorder rows (`Cement 50 kg`, `Nails, 3 inch`, `grinding discs 115 mm`), `Object.groupBy` Node 21 requirement, and invented `node:http` `fetchWithRetry`.
