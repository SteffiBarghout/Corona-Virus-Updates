//First pull all of the country codes out of the api
// Take that object of country codes, loop through that,
//pass each country code into the country detail api
//Retrieve the numbers for each country
//For a map need latitude and longitude coordinates for each country

$(document).ready(function () {

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

  google.charts.load('current', {
    'packages': ['geochart'],
    // Note: you will need to get a mapsApiKey for your project.
    // See: https://developers.google.com/chart/interactive/docs/basic_load_libs#load-settings
    'mapsApiKey': 'AIzaSyD-9tSrke72PouQMnMX-a7eZSW0jkFMBWY'
  });
  google.charts.setOnLoadCallback(drawRegionsMap);

  function drawRegionsMap() {
    var data = google.visualization.arrayToDataTable([
      ['Country', 'Confirmed Cases'],
      ['Germany', 200],
      ['United States', 300],
      ['Brazil', 400],
      ['Canada', 500],
      ['France', 600],
      ['RU', 700]
    ]);

    var options = {};

    var chart = new google.visualization.GeoChart(document.getElementById('map'));

    chart.draw(data, options);
  }








  // var settings = {
  //   "async": true,
  //   "crossDomain": true,
  //   "url": "https://covid-19-coronavirus-statistics.p.rapidapi.com/v1/stats",
  //   "method": "GET",
  //   "headers": {
  //     "x-rapidapi-host": "covid-19-coronavirus-statistics.p.rapidapi.com",
  //     "x-rapidapi-key": "4381c57930msh694a7e68dd2eadfp128a63jsnce13771cc897"
  //   }
  // }

  // $.ajax(settings).done(function (response) {
  //   console.log(response);
  //   let dataArray = [["Country", "confirmed", "deaths"]];
  //   let data = response.data.covid19Stats;
  //   for (let i = 0; i < response.data.covid19Stats.length; i++) {
  //     let deathRecovered = data[i].deaths + "-" + data[i].recovered;
  //     dataArray.push([data[i].country, data[i].confirmed, data[i].deaths])
  //   }
  //   google.charts.load('current', {
  //     'packages': ['geochart'],
  //     // Note: you will need to get a mapsApiKey for your project.
  //     // See: https://developers.google.com/chart/interactive/docs/basic_load_libs#load-settings
  //     'mapsApiKey': 'AIzaSyD-9tSrke72PouQMnMX-a7eZSW0jkFMBWY'
  //   });
  //   google.charts.setOnLoadCallback(drawRegionsMap);

  //   function drawRegionsMap() {
  //     var mapData = google.visualization.arrayToDataTable(dataArray);

  //     var options = {
  //       sizeAxis: { minValue: 0, maxValue: 100 },
  //       colorAxis: { colors: ['#ffffff', '#ff7f7f', '#ff6666', '#ff4c4c', '#ff3232', '#ff1919', '#ff0000'], values: [0, 10, 100, 500, 1000, 10000, 100000] }
  //     };

  //     var chart = new google.visualization.GeoChart(document.getElementById('map'));

  //     chart.draw(mapData, options);
  //   }
  // });


});
