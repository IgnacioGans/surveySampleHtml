$(document).ready(function () {
  // Handle form submission
  $("#surveyForm").submit(function (event) {
    event.preventDefault();

    // Get form values
    const name = $("#name").val();
    const email = $("#email").val();
    const age = $("#age").val();
    const gender = $("#gender").val();
    const country = $("#country").val();
    const language = $("#language").val();
    const feedback = $("#feedback").val();

    // Send survey data to Google Apps Script
    sendDataToGoogleScript(name, email, age, gender, country, language, feedback);

    // Display survey results
    showSurveyResults(name, email, age, gender, country, language, feedback);
  });
});

function sendDataToGoogleScript(name, email, age, gender, country, language, feedback) {
  

  const scriptUrl = "https://script.google.com/macros/s/AKfycbw7aEaxsBjjfEKJxcIKVwDDR3nvvPIkZB0KF_yRJjFH9oWKDrF2eDkg5au-u5hj-ug/exec"; // Replace with your Google Apps Script URL
  const formData = {
    name: name,
    email: email,
    age: age,
    gender: gender,
    country: country,
    language: language,
    feedback: feedback,
  };

  // Make a POST request to the Google Apps Script URL
  $.ajax({
    url: scriptUrl,
    type: "post",
    data: formData,
    success: function (response) {
      console.log("Data sent to Google Spreadsheet successfully:", response);
    },
    error: function (xhr, status, error) {
      console.error("Error sending data to Google Spreadsheet:", error);
    },
  });
}

function showSurveyResults(name, age, language) {
  const resultsDiv = $("<div>", {
    class: "results",
    html: `<p>Name: ${name}</p><p>Age: ${age}</p><p>Favorite Programming Language: ${language}</p>`
  });

  // Hide the form
  $("#surveyForm").hide();

  // Append the results to the container
  $(".container").append(resultsDiv);
}