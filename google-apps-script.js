/* eslint-disable */
/**
 * Google Apps Script for FruitMatch game sheet integration.
 * 
 * Instructions:
 * 1. Open your Google Sheet: https://docs.google.com/spreadsheets/d/1lQ_uzrvjADejsXde4PorqXkP03F93dEUcwNNa3Rn14w/edit
 * 2. Go to Extensions > Apps Script.
 * 3. Delete any code in the editor and paste this code.
 * 4. Click Save (disk icon).
 * 5. Click "Deploy" (top right) > "New deployment".
 * 6. Click the gear icon next to "Select type" and select "Web app".
 * 7. Set options:
 *    - Description: "FruitMatch Score Tracker"
 *    - Execute as: "Me" (your email)
 *    - Who has access: "Anyone" (crucial, so the game client can submit scores without Google login)
 * 8. Click "Deploy". Authorize permissions if prompted (Go to Advanced > Go to FruitMatch (unsafe) > Allow).
 * 9. Copy the generated "Web app URL" (ends with `/exec`).
 * 10. Paste this URL in the game Lobby config or set it in your `.env.local` as `NEXT_PUBLIC_SHEET_API_URL`.
 * 
 * IMPORTANT: If you update this script, you MUST create a NEW deployment or select "Manage deployments" 
 * and edit the active deployment to select the new version so changes take effect!
 */

function doPost(e) {
  var headers = {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "POST, GET, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type"
  };

  try {
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    
    if (sheet.getLastRow() === 0) {
      sheet.appendRow(["timestamp", "finishtime", "name"]);
    }
    
    var data = JSON.parse(e.postData.contents);
    
    var timestamp = data.timestamp || new Date().toLocaleString("ko-KR");
    var finishtime = data.finishtime;
    var name = data.name;
    
    if (!name || !finishtime) {
      throw new Error("Missing required fields: name and finishtime");
    }
    
    sheet.appendRow([timestamp, finishtime, name]);
    
    return ContentService.createTextOutput(JSON.stringify({ status: "success", data: { timestamp: timestamp, finishtime: finishtime, name: name } }))
      .setMimeType(ContentService.MimeType.JSON)
      .setHeaders(headers);
  } catch (error) {
    return ContentService.createTextOutput(JSON.stringify({ status: "error", message: error.toString() }))
      .setMimeType(ContentService.MimeType.JSON)
      .setHeaders(headers);
  }
}

// GET request to fetch Top 3 leaderboard
function doGet(e) {
  var headers = {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "POST, GET, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type"
  };
  
  try {
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    var rows = sheet.getDataRange().getValues();
    
    if (rows.length <= 1) {
      return ContentService.createTextOutput(JSON.stringify({ status: "success", data: [] }))
        .setMimeType(ContentService.MimeType.JSON)
        .setHeaders(headers);
    }
    
    var header = rows[0];
    var data = [];
    
    for (var i = 1; i < rows.length; i++) {
      var row = rows[i];
      var item = {};
      for (var j = 0; j < header.length; j++) {
        item[header[j]] = row[j];
      }
      data.push(item);
    }
    
    // Convert finishtime format "MM:SS.CC" to milliseconds to compare
    function timeToMs(timeStr) {
      if (!timeStr) return Infinity;
      var parts = timeStr.split(':');
      if (parts.length < 2) return Infinity;
      var min = parseInt(parts[0], 10);
      var rest = parts[1].split('.');
      var sec = parseInt(rest[0], 10);
      var ms = rest.length > 1 ? parseInt(rest[1], 10) * 10 : 0;
      return (min * 60 + sec) * 1000 + ms;
    }
    
    // Sort ascending (lowest time first)
    data.sort(function(a, b) {
      return timeToMs(a.finishtime) - timeToMs(b.finishtime);
    });
    
    // Filter out rows with invalid data
    var filteredData = data.filter(function(item) {
      return item.name && item.finishtime && item.finishtime.indexOf(':') !== -1;
    });
    
    // Get Top 3
    var top3 = filteredData.slice(0, 3);
    
    return ContentService.createTextOutput(JSON.stringify({ status: "success", data: top3 }))
      .setMimeType(ContentService.MimeType.JSON)
      .setHeaders(headers);
  } catch (error) {
    return ContentService.createTextOutput(JSON.stringify({ status: "error", message: error.toString() }))
      .setMimeType(ContentService.MimeType.JSON)
      .setHeaders(headers);
  }
}

// Handle CORS Pre-flight Options request
function doOptions(e) {
  var headers = {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "POST, GET, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type"
  };
  return ContentService.createTextOutput("")
    .setMimeType(ContentService.MimeType.TEXT)
    .setHeaders(headers);
}
