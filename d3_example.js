// This script requires d3.js >= 5.0

// -------------------- Settings --------------------
var margin = {top: 20, right: 20, bottom: 50, left: 50}
  , width = 600 - margin.left - margin.right
  , height = 200 - margin.top - margin.bottom;


// -------------------- Create Chart --------------------
// Get the chart and set its size.
var chart = d3.select(".chart")
  .attr("width", width + margin.left + margin.right)
  .attr("height", height + margin.top + margin.bottom)
  .append("g")
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");


// -------------------- Create Scales --------------------
// Create a y-scale to map continuous data values to pixel values.
var y = d3.scaleLinear()
  /* Set the range of the y-axis from height to 0.
   * 
   * The range is in terms of pixels on our web page, NOT the data.
   * The domain is in terms of the data; see below.
   *
   * The scale maps the domain (data) onto the range (web page pixels).
   */
  .range([height, 0]);

// Create an x-scale to map discrete data values to pixel values.
var x = d3.scaleBand()
  .range([0, width])
  .padding(0.2)
  .round(0.1);


// -------------------- Load Data --------------------
function convertCols(d) {
  // This function converts the second column of data to a number by adding
  // nothing.
  d.value = +d.value;

  return d;
}


d3.csv("/data.csv", convertCols).then(function(data) {
  // This section runs after the data is loaded.

  // -------------------- Create Axes --------------------
  // Set the domain of the y-scale from 0 to maximum value in data.
  y.domain([0, d3.max(data, function(d) { return d.value; })]);
  // Set the domain of the x-scale to the names.
  var names = data.map(function(d) { return d.name; });
  x.domain(names);

  var xAxis = d3.axisBottom(x);
  chart.append("g")
    .attr("class", "x axis")
    .attr("transform", "translate(0," + height + ")")
    .call(xAxis);

  chart.append("text")
    .attr("y", height + margin.top + margin.bottom / 3)
    .attr("x", width / 2)
    .style("text-anchor", "middle")
    .text("Name");

  var yAxis = d3.axisLeft(y);
  chart.append("g")
    .attr("class", "y axis")
    .call(yAxis);
  
  chart.append("text")
    .attr("transform", "rotate(-90)")
    .attr("y", 0 - margin.left / 2)
    .attr("x", 0 - (height / 2))
    .text("Value")

  // -------------------- Create Bars --------------------
  /* The code below uses a D3 idiom called a "join".
   *
   * The idea is to "bind" a tag to each row in a data set. The twist is that
   * the tags and the rows don't have to exist (yet).
   *
   * In the code, we first select the tags we want to create. Yes, you read
   * that correctly.
   *
   * Next, we use `.data()` to join these (imaginary) tags to the rows of our
   * data set. This separates the tags and rows into three sets:
   *   1. exit   - Tags that aren't bound to a row.
   *   2. enter  - Rows that aren't bound to a tag.
   *   3. update - Bound (row, tag) pairs.
   *
   * Every row is in the enter set. The exit and update sets are empty because
   * there are no tags yet.
   *
   * We can get the enter set with `.enter()`, and any subsequent methods are
   * repeated for each row. This lets us create the tag for each row.
   * 
   * More details at https://bost.ocks.org/mike/join/
   */

  // Get the array of imaginary tags.
  var bar = chart.selectAll("rect");

  // Join the imaginary tags to the rows in the data set.
  bar.data(data)
    // Get the rows that aren't bound to tags.
    .enter()
    // For each row, append a <rect> tag to the chart.
    .append("rect")
      .attr("class", "bar")
      .attr("x", function(d) { return x(d.name); })
      .attr("y", function(d) { return y(d.value); })
      .attr("height", function(d) { return height - y(d.value); })
      .attr("width", x.bandwidth());
})


// This section runs WHILE the data is loading.
// So it usually isn't what you want.
