# AI receipt log -- SCS3.5

Label: AI-assisted, directed by atap
Tool: Gemini
Spec initialled on (YYYY-MM-DD): 2026-11-21
First prompt sent on (YYYY-MM-DD HH:MM): 2026-11-21 10:00

## The one prompt, word for word
Write Google Apps Script functions on Google Sheets for an inventory and sales workbook with a comment on every line. First, create checkStock() to read DASHBOARD range A12:C15, filter rows where column C is REORDER, and write ITEM, CURRENT STOCK, and STATUS into a REMINDEERS sheet. Second, create generateMonthlyReport() to read RECORD range A2:F1000, filter valid Date rows in October 2026 where column C is OUT, sum column F for TOTAL SALES and column D for UNITS SOLD, and write the result to MONTHLY REPORT.

## What came back, and what I changed by hand
The tool returned the script functions. I reviewed every line in the reading log and applied a hand patch in commit cde87cc to fix a line issue before testing.

## Iteration -- only if the draft missed a line of the spec (which line)

## The debug move -- one real error: the message pasted whole, what my trace said first, what the tool said
