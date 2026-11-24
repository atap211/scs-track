# Cost Card -- SCS3.6

Every AI use today, costed on a paid tier.  A figure from the tool's usage page is evidence; an
estimate says it is one.  Write dates as YYYY-MM-DD.

Tool and tier: Gemini in Chrome (free tier; costed against Gemini 2.5 Flash paid API rate as reference)
Price, from the tier's own page, with the date read: Free tier = 0 KSh; Gemini API pricing page (ai.google.dev/pricing, read 2026-11-24): $0.15 / 1M input tokens (~19.50 KSh) and $0.60 / 1M output tokens (~78.00 KSh) at ~130 KSh/USD.

| Use today | Tokens in | Tokens out | Where the figure came from (usage page or estimate) | Cost (KSh) |
|---|---|---|---|---|
| The patch prompt(s) | 850 | 220 | Estimate (1 short function prompt + diff response; free tier shows no usage page) | 0.00 (est. 0.03 KSh paid) |
| The agent run | 1,400 | 450 | Estimate (rules file + `reorder.js` + `reorder.test.js` scoped run) | 0.00 (est. 0.06 KSh paid) |
| Anything else | 1,200 | 600 | Estimate (reviewing audit & skill structure) | 0.00 (est. 0.07 KSh paid) |
| Day total | 3,450 | 1,270 | Estimate (free tier web session) | 0.00 (est. 0.16 KSh paid) |

Where the cost goes (the rates sheet line, or my own pocket, and for how long): Absorbed in my own pocket during training on free tier; for a live client automation using a metered API key, recurring token cost goes on the client's monthly maintenance line item on the rates sheet (with a hard monthly spend cap) for the life of the automation.
If the skill or the agent job ran every week for the client, a month would cost: 4 runs/month × ~1,850 tokens/run = ~7,400 tokens/month, which costs ~0.25 KSh/month on Gemini 2.5 Flash API rates (or 0 KSh within a flat subscription ceiling).
