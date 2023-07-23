$(document).ready(function () {
    // Handle form submission
    $("#surveyForm").submit(function (event) {
      event.preventDefault();
  
      // Get form values
      const name = $("#name").val();
      const age = $("#age").val();
      const language = $("#language").val();
  
      // Display survey results
      showSurveyResults(name, age, language);
    });
  });
  
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
  