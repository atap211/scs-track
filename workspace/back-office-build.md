# Back Office Build Notes — SCS3.4

## Overkill test
1. **Daily transaction volume:** Less than 30 stock movements and sales per day, easily handled on one device.
2. **Concurrent editors:** Single shopkeeper recording entries; no multi-user database locking needed.
3. **Data structure:** Flat table of stock ins, stock outs, and item reference list fits a 3-tab spreadsheet.
4. **Budget and connectivity:** Owner already uses Google Sheets on their phone/laptop at zero software cost.
5. **Maintenance:** Owner can update reorder levels in Lists without hiring a developer.

Verdict: Sheets. Pattern: inventory. Because: Daily kiosk stock and sales volume is low, requires one primary operator, and tracks simple stock-in/stock-out balances without needing a full POS database.

## Validation
| Column | Rule | Garbage typed | Refused? |
|---|---|---|---|
| Item | Dropdown from Lists | Unknown Soda | Yes |
| Date | Is valid date | 2026-99-99 | Yes |
| Quantity | Greater than 0 | -5 | Yes |

## Protection
| Range | Who can edit | Warning or restriction | Entry columns still open? |
|---|---|---|---|
| Dashboard!A1:Z50 | Owner only | Restricted | Yes, Records entry columns remain open |

## AI receipts
| The ask (headings only) | The formula | What I changed | Hand check (log row) |
|---|---|---|---|
| No AI used | None | None | Verified by hand |

## Break the books
| Attack | What I said would happen | What happened | Held or fix |
|---|---|---|---|
| 1. Type an unlisted item name in Records | Validation rule rejects the input | Input rejected immediately | Held |
| 2. Enter a negative or zero quantity | Number validation blocks entry | Input rejected immediately | Held |
| 3. Enter text in the Date column | Date validation blocks entry | Input rejected immediately | Held |
| 4. Edit a formula cell on Dashboard as another user | Protected range prevents editing | Edit blocked by sheet protection | Held |
| 5. Add a new transaction row at the bottom of Records | Open column ranges (Records!D:D) include the new row | Dashboard totals updated automatically | Held |
| 6. Delete a reference item currently in use | Dropdown flags invalid entry on existing row | Restored item in Lists and documented rule | Held |
| 7. Overwrite a past transaction instead of adding a row | Version history tracks changes; ledger rule requires a reversal row | Reverted overwrite and logged adjustment row | Held |
