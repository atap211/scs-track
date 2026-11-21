# Method Note -- SCS3.5

1. I started by writing a one-page specification on paper and having a trainer initial and date it before opening any AI tool or sending a prompt.
2. I made a separate copy of the spreadsheet with made-up test rows so the client's real sheet remained completely untouched and no private data entered the prompt.
3. After receiving the draft script, I read every single line of code and wrote what each line does in my own words in the reading log before running it.
4. I worked out the expected answers for two standard test cases and an edge case by hand on paper before executing the script on the test copy.
5. I checked the permissions dialogue against the spec to ensure the script only requested access to spreadsheets and no unnecessary Google services.
6. What I might be wrong about is assuming all dates and status labels in the owner's real sheet are formatted cleanly without text dates or extra columns beyond row 1000; I would find out by inspecting the structure and data types of the owner's real RECORD and DASHBOARD tabs with the owner before running it on production data.
