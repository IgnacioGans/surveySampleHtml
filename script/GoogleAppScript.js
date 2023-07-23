function doPost(e) {
    var data = e.parameter; // Get the form data from the request
  
    // Process the data and save it to the Google Spreadsheet
  
    // Set the response headers to allow CORS
    var headers = {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*' // Allow requests from any origin (change this to your specific domain if needed)
    };
    // Create the response object with status code 200 and the CORS headers
    var response = {
      statusCode: 200,
      headers: headers,
      data: 'Data received successfully' // You can customize the response message as needed
    };
    var spreadsheetId = "survey1234567890"; // Replace with the ID of your Google Spreadsheet
    var sheetName = "TestSurvey"; // Replace with the name of the sheet in your Google Spreadsheet
  
    // Get form data from the request parameters
    var data = JSON.parse(e.postData.contents);
  
    // Open the Google Spreadsheet and get the sheet
    var spreadsheet = SpreadsheetApp.openById(spreadsheetId);
    var sheet = spreadsheet.getSheetByName(sheetName);
  
    // Append the form data to the sheet
    sheet.appendRow([
      data.name,
      data.email,
      data.age,
      data.gender,
      data.country,
      data.language,
      data.feedback,
      new Date(), // Timestamp
    ]);
  
    // Return a response
    return ContentService.createTextOutput(JSON.stringify(response)).setMimeType(ContentService.MimeType.JSON);
  }
  