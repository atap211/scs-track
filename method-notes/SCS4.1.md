# Method note -- SCS4.1

## 1. What I set out to do
Practise diagnosing network faults bottom-up using the six-rung ladder, two-layer addressing (Windows and Ubuntu-SCS), router hardening, and printer address checks for SCS4.1.

## 2. What I did, in order
Checked my two-layer addresses with net-look and ipconfig /all, tested reachability to gateway 10.10.51.1, cleaned out bulk-copied images from ~/scs/evidence/scs4.1, and committed/pushed the SCS4.1 starter files to my track repo.

## 3. How I checked it worked
Verified Windows had IPv4 10.10.51.117/24 with gateway 10.10.51.1, confirmed ping 10.10.51.1 returned 4/4 replies in 3-4 ms, and ran check-scs4.1 to record receipts and git push status.

## 4. What went wrong and what I did about it
A wildcard cp copied unrelated images into ~/scs/evidence/scs4.1, and browser requests to 10.10.51.1 showed ERR_CONNECTION_REFUSED; I removed the unrelated files, tested ping and HTTPS, and checked with the SA/trainer while still needing a password-free router screenshot, completed logs, and a fault-card round.

## 5. What I would do differently next time
Copy only the specific router screenshot file after checking it for passwords, verify my paper log entries and "nothing" steps before committing, and check with the SA/trainer early when a gateway refuses browser connections.

## 6. What I might be wrong about, and how I would find out
I might be misreading why 10.10.51.1 refused browser connections despite answering ping—such as a different admin address/port or station setup—and I would find out by checking with the SA or trainer and verifying on the station router or demo setup.
