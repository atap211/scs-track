// AI-assisted, directed by atap -- the FS5a label, the same words as the receipt log.
function checkStock(){
  const ss =SpreadsheetApp.getActiveSpreadsheet();
  const dashboard = ss.getSheetByName("DASHBOARD");
  const StockData =dashboard.getRange("A12:C15").getValues();

  const lowStockItems =StockData.filter ( row => row[2] === "REORDER")
  let remindeers =ss.getSheetByName("REMINDEERS");
  if (!remindeers) {
   remindeers = ss.insertSheet ("REMINDEERS");  
  }
  remindeers.clearContents();

remindeers.getRange("A1:C1").setValues ([["ITEM", "CURRENT STOCK", "STATUS"]]
);
if (lowStockItems.length > 0){
  remindeers.getRange( 2, 1, lowStockItems.length, 3).
  setValues(lowStockItems);
}
}




function generateMonthlyReport() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  const record = ss.getSheetByName("RECORD");

  if (!record) {
    throw new Error("RECORD sheet was not found. Check the sheet name.");
  }

  const data = record.getRange("A2:F1000").getValues();

  const reportMonth = 9;
  const reportYear = 2026;

  const monthName = new Date(reportYear, reportMonth)
    .toLocaleDateString("en", { month: "long" });

  const monthLabel = `${monthName} ${reportYear}`;

  const monthlySales = data.filter(row => {
    const date = row[0];

    return date instanceof Date &&
      !isNaN(date.getTime()) &&
      date.getMonth() === reportMonth &&
      date.getFullYear() === reportYear &&
      String(row[2]).trim().toUpperCase() === "OUT";
  });

  const totalSales = monthlySales.reduce(
    (sum, row) => sum + Number(row[5] || 0), 0
  );

  const unitsSold = monthlySales.reduce(
    (sum, row) => sum + Number(row[3] || 0), 0
  );

  let report = ss.getSheetByName("MONTHLY REPORT");

  if (!report) {
    report = ss.insertSheet("MONTHLY REPORT");
  }

  report.clearContents();

  report.getRange("A1:C2").setValues([
    ["REPORT MONTH", "TOTAL SALES", "UNITS SOLD"],
    [monthLabel, totalSales, unitsSold]
  ]);
}



function testMonthlyReportSheet() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();

  if (!ss) {
    throw new Error("No active spreadsheet found.");
  }

  let report = ss.getSheetByName("MONTHLY REPORT");

  if (!report) {
    report = ss.insertSheet("MONTHLY REPORT");
  }

  report.getRange("A1").setValue("MONTHLY REPORT IS WORKING");

  SpreadsheetApp.flush();

  Logger.log("SPREADSHEET NAME: " + ss.getName());
  Logger.log("SPREADSHEET URL: " + ss.getUrl());
  Logger.log("SHEET NAMES: " +
    ss.getSheets().map(sheet => sheet.getName()).join(", "));
}



