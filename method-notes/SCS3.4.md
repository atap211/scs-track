# Method Note — SCS3.4 Sheets as a Back Office

1. Separating raw data entry (`Records`), reference lists (`Lists`), and summary metrics (`Dashboard`) prevents accidental formula overwrites during daily operations.
2. Applying strict data validation (`Reject the input`) at the column level keeps downstream `SUMIFS` and `COUNTIFS` calculations accurate without manual cleanup.
3. Using open-ended column references (`Records!D:D`) ensures new transactions entered by the owner are automatically included in dashboard totals.
4. Logging every hand-check calculation against live sheet formulas exposes edge-case filtering mismatches early.
5. Keeping client figures and exports in an isolated evidence folder protects business privacy while allowing build documentation to remain public.
6. What I might be wrong about: assuming the owner will consistently use dropdowns on mobile; I can verify this by reviewing Version History after their first week of live entries.
