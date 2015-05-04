var svgWidth = parseInt(d3.select(".plp").style("width")) - 30, //minus padding for bootstrap
  svgHeight = 100;

var svgs = d3.selectAll(".plp")
  .append("svg")
  .attr({
    "class": "center-block",
    "width": svgWidth,
    "height": svgHeight
  });

var makeLine = d3.svg.line()
    .x(function(d) { return d.x; })
    .y(function(d) { return d.y; });

var vectorData = {
  "point": [ {"x": svgWidth / 2, "y": svgHeight / 2}],
  "line": [
    {"x": svgWidth / 4, "y": svgHeight / 2},
    {"x": svgWidth  * 3 / 4, "y": svgHeight / 2}
  ],
  "polygon": [
    {"x": svgWidth / 4, "y": svgHeight / 4},
    {"x": svgWidth  * 3 / 4, "y": svgHeight / 2},
    {"x": svgWidth / 2, "y": svgHeight * 3 / 4},
    {"x": svgWidth / 4, "y": svgHeight * 3 / 4}
  ]
};

svgs.append("path")
  .data(d3.entries(vectorData))
  .attr({
    "stroke": "#000",
    "stroke-width": 3,
    "fill": "#afdaff",
    "d": function(d) { return d.key === "polygon" ?
      makeLine(d.value) + "Z" : makeLine(d.value); }
  });

svgs.selectAll("circle")
  .data(function(d, i) {
    return d3.values(vectorData)[i];
  })
  .enter().append("circle")
  .attr({
    "r": 5,
    "cx": function(d) { console.log(d); return d.x; },
    "cy": function(d) { return d.y; }
  });
