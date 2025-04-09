var svg = d3.select("#chart-area").append("svg")

	.attr("width", 400)

	.attr("height", 400);

var data = [25, 20, 15, 10, 5];


var rect0 = svg.append("rect")

	.attr("x", 360)

	.attr("y", data[0])

	.attr("width", 40)

	.attr("height", 50)

	.attr("fill","blue");

var rect1 = svg.append("rect")

	.attr("x", 0)

	.attr("y", data[1])

	.attr("width", 40)

	.attr("height", 50)

	.attr("fill","red");

var rect2 = svg.append("rect")

	.attr("x", 50)

	.attr("y", data[2])

	.attr("width", 40)

	.attr("height", 50)

	.attr("fill","purple");

var rect3 = svg.append("rect")

	.attr("x", 200)

	.attr("y", data[3])

	.attr("width", 40)

	.attr("height", 50)

	.attr("fill","green");

var rect4 = svg.append("rect")

	.attr("x", 300)

	.attr("y", data[4])

	.attr("width", 40)

	.attr("height", 50)

	.attr("fill","red");