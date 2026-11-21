# Method note -- SCS3.2

## 1. What I set out to do
I set out to lock down external Drive sharing, enforce 2-step verification and basic mobile device rules, test backup restores, and safely offboard the practice user without deleting their account.

## 2. What I did, in order
I logged every planned change before clicking, restricted external sharing, removed public link sharing on customer-list.csv, set up the Shared Drive, enrolled 2-step verification, exported Takeout data, transferred file ownership, suspended and later reactivated the practice user, and logged four restore drills.

## 3. What went wrong, and how I fixed it
The Drive audit log took several minutes to show the ownership transfer event and the AI policy draft suggested Vault features not included in this edition; I waited for log propagation before exporting and corrected the policy against the real Admin Console.

## 4. How long it took, against the plan
The console configuration, exports, and documentation took about 75 minutes compared to the planned 90 minutes, leaving time to verify all four restore scenarios.

## 5. One lesson for the next person
Always export Takeout data and transfer Drive ownership before suspending an account, and suspend rather than delete so audit logs and recovery windows stay intact.

## 6. What I might be wrong about in this client's data, and how I would find out
I might be wrong about whether any external supplier still relies on a legacy 'Anyone with the link' spreadsheet or how long tax records must be kept, and I would find out by reviewing the Drive audit log for external views and confirming statutory retention rules with the business owner.
