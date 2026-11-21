# Admin Change Log — SCS3.1

Date: 2026-11-17
Sandbox admin sign-in: atap@example.org
My unit: /Trainees/atap
Naming convention: first.last

| # | Ticket | Logged at | What I am about to change (console path) | Who or what it affects | Why | How I checked it | Audit log |
|---|---|---|---|---|---|---|---|
| 1 | 1 New starter | 10:50 | Admin console > Directory > Users > Add new user | amina.okello | New starter needs a workspace account for daily reception work; extra privileges risk unauthorized admin changes; decided by shop manager | Verified active account in Directory > Users and tested user sign-in in private window | 10:51 |
| 2 | 2 Groups | 10:55 | Admin console > Directory > Groups > Create group | front-desk@example.org | Reception staff need a shared group address for scheduling and notices; wider group access exposes internal finance mail; decided by shop manager | Checked group membership list and confirmed delivery settings in Directory > Groups | 10:56 |
| 3 | 3 Units | 11:00 | Admin console > Directory > Organizational units > Create organizational unit | /Trainees/atap/Staff/Front Desk | Front desk needs separate service policies from back-office staff; keeping them in Staff gives unnecessary app access; decided by owner | Confirmed amina.okello sits in Front Desk OU and checked restricted service from user sign-in | 11:01 |
| 4 | 4 Delegated role | 11:05 | Admin console > Account > Admin roles > Assign users | david.kiprop (Accountant) | Accountant needs limited directory visibility to verify staff billing records; super-admin access risks full domain takeover; decided by owner | Tested three admin screens as accountant to verify exact permission boundaries | 11:06 |
| 5 | 5 Rollback | 11:10 | Admin console > Account > Admin roles > Unassign users | david.kiprop (Accountant) | Temporary delegated role must be revoked once audit check finishes; leaving active admin rights increases insider risk; decided by owner | Refreshed Admin roles list and confirmed accountant lost admin console access | 11:11 |
| 6 | 5 Reversal | 11:15 | Admin console > Account > Admin roles > Assign users | david.kiprop (Accountant) | Reversing row 5 rollback using only the change-log record to verify recovery procedure; wrong scope grants excessive privileges; decided by trainer drill | Verified role reappeared under Admin roles and matched row 4 configuration | 11:16 |

## SCS3.2 -- sharing, security, backups, offboarding (2026-11-18)

Practice OU only.  Every row written before the click; the check column filled after it.

| # | Time | What I am about to change (console path) | Who or what it affects | Why, in one line | How I checked it | Undo |
|---|---|---|---|---|---|---|
