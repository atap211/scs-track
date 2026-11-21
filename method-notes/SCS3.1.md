# Method note -- SCS3.1

## 1. What I set out to do
I set out to configure users, groups, organizational units, and least-privilege admin roles while logging every action before clicking.

## 2. What I did, in order
I created the new starter account, set up the reception group and Front Desk OU, tested delegated accountant permissions, and practiced a role rollback and reversal.

## 3. What went wrong, and how I fixed it
Initially the change log lacked audit timestamps and the reference access map had empty role assignments; I reconciled every row against the audit log and scoped each job to least privilege.

## 4. How long it took, against the plan
The core configuration and verification took about 45 minutes compared to the planned 60 minutes, leaving extra time to review the access map.

## 5. One lesson for the next person
Always write the change-log row and verify the target OU before clicking save, because groups control resource access while OUs control service policies.

## 6. What I might be wrong about, and how I would find out
I might be wrong about whether a delegated role needs additional read privileges for cross-team reporting, and I would find out by testing the exact workflow from that user's sign-in screen.
