var svg = d3.select("#chart-area").append("svg")

	.attr("width", 400)

	.attr("height", 400);

d3.csv("data/ages.csv").then((data)=> {

	console.log(data);

});

d3.tsv("data/ages.tsv").then((data)=> {

	console.log(data);

});

d3.json("data/ages.json").then((data)=> {

	console.log(data);

});

d3.json("data/ages.json").then((data)=> {

	data.forEach((d)=>{

		d.age = +d.age;
		if(d.age>10){
			svg.append("circle")

				.attr("cx", d.age*20)

				.attr("cy", 250)

				.attr("r", 20)

				.attr("fill", "red")

				.attr("opacity", 0.5);

		} else {

			svg.append("circle")

				.attr("cx", d.age*20)

				.attr("cy", 250)

				.attr("r", 20)

				.attr("fill", "blue")

				.attr("opacity", 0.25);
		}
		
		

	});

	console.log(data);

});

