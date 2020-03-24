$(document).ready(function () {
    let countryArray = [];
    let categoryArray = ["confirmed", "deaths", "recovered"];
    let dataIntermediate;
    let newdataIntermediate = [];


    var settings = {
        "async": true,
        "crossDomain": true,
        "url": "https://covid-19-coronavirus-statistics.p.rapidapi.com/v1/stats",
        "method": "GET",
        "headers": {
            "x-rapidapi-host": "covid-19-coronavirus-statistics.p.rapidapi.com",
            "x-rapidapi-key": "4381c57930msh694a7e68dd2eadfp128a63jsnce13771cc897"
        }
    }

    $.ajax(settings).done(function (response) {
        console.log(response);
        let data = response.data.covid19Stats;
        for (let i = 0; i < data.length; i++) {
            if (!countryArray.includes(data[i].country)) {
                countryArray.push(data[i].country)
            }

        }
        dataIntermediate = categoryArray.map(function (c) {
            return data.map(function (d) {
                return {
                    x: d.country, y: d[c]
                };
            });
        });

        slicedData1 = dataIntermediate[0].slice(0, 5);
        slicedData2 = dataIntermediate[1].slice(0, 5);
        slicedData3 = dataIntermediate[2].slice(0, 5);
        newdataIntermediate.push(slicedData1, slicedData2, slicedData3);
        console.log(newdataIntermediate);
        barGraph();
        console.log(response);
    })

    console.log(dataIntermediate);

    function barGraph() {
        var margin = { top: 20, right: 50, bottom: 30, left: 0 },
            width = 350 - margin.left - margin.right,
            height = 300 - margin.top - margin.bottom;

        var x = d3.scale.ordinal()
            .rangeRoundBands([0, width], .35);

        var y = d3.scale.linear()
            .rangeRound([height, 0]);

        var color = d3.scale.category20();

        var xAxis = d3.svg.axis()
            .scale(x)
            .orient("bottom");

        var svg = d3.select("#chart").append("svg")
            .attr("width", width + margin.left + margin.right)
            .attr("height", height + margin.top + margin.bottom)
            .append("g")
            .attr("transform", "translate(" + margin.left + "," + margin.top + ")");


        var dataStackLayout = d3.layout.stack()(newdataIntermediate);

        x.domain(dataStackLayout[0].map(function (d) {
            return d.x;
        }));

        y.domain([0,
            d3.max(dataStackLayout[dataStackLayout.length - 1],
                function (d) { return d.y0 + d.y; })
        ])
            .nice();

        var layer = svg.selectAll(".stack")
            .data(dataStackLayout)
            .enter().append("g")
            .attr("class", "stack")
            .style("fill", function (d, i) {
                return color(i);
            });

        layer.selectAll("rect")
            .data(function (d) {
                return d;
            })
            .enter().append("rect")
            .attr("x", function (d) {
                return x(d.x);
            })
            .attr("y", function (d) {
                return y(d.y + d.y0);
            })
            .attr("height", function (d) {
                return y(d.y0) - y(d.y + d.y0);
            })
            .attr("width", x.rangeBand());

        svg.append("g")
            .attr("class", "axis")
            .attr("transform", "translate(0," + height + ")")
            .call(xAxis);
    }

});
