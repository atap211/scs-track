# Access map -- the reference shop (an invented business) -- SCS3.1

Who should have which access, and why?  One row per person, or per identical job.
Groups are people; units are settings; every person is in one unit and many groups.
Why: the three questions in one line -- what the job needs, what goes wrong with more, who decided.
This map is of an invented business and may be committed.  Your client's map never comes here:
it lives in the client folder (Clients, in your Windows SCS folder).

| Person (job) | What the job needs | OU | Groups | Admin role | Why (one line) |
|---|---|---|---|---|---|
| The owner | Full business ownership, billing control, and emergency recovery access | /Management | all-staff@example.org, leadership@example.org | super-admin | Needs full domain and billing authority as business owner; sharing super-admin risks irreversible account lockout; decided by owner |
| The accountant (a sandbox user, ticket 4) | Payroll spreadsheets, supplier invoices, and tax records | /Finance | all-staff@example.org, finance@example.org | none | Needs access to financial ledgers and invoices only; admin or workshop access risks payroll leaks or setting changes; decided by owner |
| The shop manager | Staff rotas, inventory logs, and customer escalations | /Operations | all-staff@example.org, managers@example.org | Groups Admin | Needs to manage team mailing lists and daily operations; super-admin access risks accidental billing or security changes; decided by owner |
| Counter staff (four) | Point-of-sale shared drive, booking calendar, and customer inquiries | /Front Desk | all-staff@example.org, reception@example.org | none | Needs customer booking calendar and order intake sheets; access to finance or admin settings risks data exposure; decided by shop manager |
| The new starter (a sandbox user, ticket 1) | Basic email, reception handbook, and supervised counter calendar | /Front Desk | all-staff@example.org, reception@example.org | none | Needs basic communication and reception calendar during probation; broader access risks unapproved edits to shop records; decided by shop manager |
| Welders (three) | Job fabrication specs, safety checklists, and workshop schedules | /Workshop | all-staff@example.org, fabrication@example.org | none | Needs technical drawings and safety logs for floor production; finance or admin access is unrelated and risks accidental edits; decided by shop manager |
| Drivers (two) | Delivery manifests, route sheets, and dispatch updates | /Logistics | all-staff@example.org, dispatch@example.org | none | Needs daily delivery routes and dispatch notifications only; access to customer billing or admin tools risks data leaks; decided by shop manager |
| Me (the admin) | Day-to-day user onboarding, password resets, and OU policy setup | /IT | all-staff@example.org, it-support@example.org | User Management Admin | Needs delegated user and OU controls to administer accounts safely; holding super-admin daily increases blast radius of mistakes; decided by owner |

## The partner's cold read

Partner: Verified in SGL.  One person with more than the job needs, or "none" and why: none -- every role is scoped to least privilege and only the owner holds super-admin.
