## Stack
Node.js v22.22.1 CLI utilities and Google Apps Script back-office scripts for small-business stock and sales workflows.
Uses built-in Node modules (`fs`, `node:test`, `node:assert`) and container-bound Google Sheets `SpreadsheetApp` with no external npm packages.

## Tests
`node --test workspace/stock-tools/reorder.test.js`

## Never
- Never hardcode API keys, tokens, or credentials in source files or paste them into AI prompts; use environment variables instead.
- Never trust `parseInt` on blank CSV cells or strict `<` comparisons without testing boundary equality (`<=`) and empty strings.
- Never split CSV rows with `line.split(",")` when fields can contain quoted commas, or pass unencoded strings into URL query parameters.
- Never assume Node 21+ APIs (`Object.groupBy`) or non-existent built-in functions (`fetchWithRetry`) exist without checking `node --version` and official docs.

## Skills
- `skills/four-checks-audit/SKILL.md`: Weekly four-checks audit procedure for AI-generated Node.js and Google Apps Script code.
