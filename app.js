
var sightings = dataSet;

// Select the submit button
var submit = d3.select("#submit");

submit.on("click", function() {

  // Prevent the page from refreshing
  d3.event.preventDefault();

  // Select the input element and get the raw HTML node
  var inputElement = d3.select("#s-form-input");

  // Get the value property of the input element
  var inputValue = inputElement.property("value");

    
//   /////////////////INSERTING TABLE DATA

var filteredData = sightings.filter(sight => sight.datetime === inputValue);

console.log(filteredData);

// // // Get a reference to the table body
var tbody = d3.select("tbody");

// Console.log the weather data from data.js
// console.log(dataSet);

// dataSet = filteredData.slice(0, 10);
dataSet = filteredData;


// Use d3 to update each cell's text with
// report values 
dataSet.forEach(function(Report) {
  // console.log(Report);
  var row = tbody.append("tr");
  Object.entries(Report).forEach(function([key, value]) {
    // console.log(key, value);
    // Append a cell to the row for each value
    // in the report object
    var cell = row.append("td");
    cell.text(value);
  });
});


});
