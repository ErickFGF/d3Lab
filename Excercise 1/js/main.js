var svg = d3.select("#chart-area").append("svg")

	.attr("width", 1200)

	.attr("height", 800);

var circle = svg.append("circle")

	.attr("cx", 100)

	.attr("cy", 250)

	.attr("r", 125)

	.attr("fill", "purple");

var rect = svg.append("rect")

	.attr("x", 75)

	.attr("y", 225)

	.attr("width", 50)

	.attr("height", 50)

	.attr("fill","yellow");

