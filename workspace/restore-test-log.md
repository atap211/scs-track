# Restore test log -- the practice business (2026-11-21)

A backup nobody has restored from is a hope.  'It worked' is not an entry: say what did not come back,
or what you checked to be sure nothing is missing.

| # | Restore | What I deleted or suspended | How I restored it | How long | What came back | What did not come back |
|---|---|---|---|---|---|---|
| 1 | The suspended user, restored whole | Suspended practice user account amina.okello in Directory > Users | Admin console > Directory > Users > amina.okello > Reactivate user | 2 minutes | Account status, group memberships, OU placement, and sign-in access all returned | Active browser sessions and previously revoked OAuth app tokens did not restore automatically |
| 2 | A file from the shared drive's trash | Deleted price-list.csv from the Client Operations Shared Drive | Opened Shared Drive > Trash > selected price-list.csv > Restore | 1 minute | File contents, version history, and Shared Drive folder permissions returned intact | Previous direct share link notifications were not re-sent to members |
| 3 | A user's deleted file, restored by the admin | Permanently emptied invoice-0042.csv from practice user's Drive trash | Admin console > Directory > Users > amina.okello > Restore data (last 25 days) | 4 minutes | File returned to the user's My Drive root folder with original CSV rows intact | Original folder path and prior collaborator sharing permissions did not come back |
| 4 | One file from the export | Extracted delivery-rota-draft.csv and quote-draft-school-gates.csv from Takeout zip | Opened Takeout archive in File Explorer, extracted Drive CSVs, and verified rows in spreadsheet | 3 minutes | All rows, columns, and text values in delivery-rota-draft.csv opened cleanly | Google Drive sharing permissions, comments, and version history are not included in Takeout CSV exports |
