/*var APIKey = "8C8UISNGQZSOTMZ9";

var queryURL = "https://www.alphavantage.co/query?" +
    "function=TIME_SERIES_INTRADAY&symbol=MSFT&interval=5min&apikey=" + APIKey;

$.ajax({
    url: queryURL,
    method: "GET"
})

.then(function(respons) {

    console.log(queryURL);

    console.log(response);

    $(".information").text("<h1>" + response.name + " Information<h/1>");
    $(".symbol").text("Symbol: " + response.symbol);
    $(".lastrefreshed").text("Last Refreshed: " + response.last.refreshed);
    $(".timezone").text("Timezone: " + response.timezone);

    console.log("Information: " + response.information);
    console.log("Symbol: " + response.symbol);
    console.log("Last Refreshed: " + response.last.refreshed);
    console.log("Timezone: " + response.timezone);
});*/
var url = 'https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=MSFT&interval=1min&apikey=8C8UISNGQZSOTMZ9';

$.ajax({
    url: url,
    dataType: 'json',
    contentType: "application/json",
    success: function(data) {
        console.log(data);
    }
});
$(document).ready(function() {
    $("#stockIndicator").show();
    doAjax(url);

    $('.ajaxtrigger').click(function() {
        $("#stockIndicator").show();
        doAjax(url);
        return false;
    });
    //Function to add commas to numbers for volume
    function numberWithCommas(x) {
        return x.toString().replace(/\B(?=(?:\d{3})+(?!|d))/g, ",");
    }

    function doAjax(url) {
        $.ajax({
            url: url,
            dataType: 'json',
            contentType: "application/json",
            success: function(data) {
                var s = data.query.results;
                if (s) {
                    if (s.quote.Change > 0) {
                        $('#stockChange').css({ 'color': 'green' });
                        $('#stockChangePercent').css({ 'color': 'green' });
                    } else {
                        $('#stockChange').css({ 'color': 'red' });
                        $('#stockChangePercent').css({ 'color': 'red' });
                    }
                    console.log('s is' + s);

                    $('#stockSymbol').html(s.quote.symbol);
                    $('#stockAsk').html(s.quote.LastTradePriceOnly);
                    $('#stockChange').html(s.quote.Change);
                    $('#stockChangePercent').html(s.quote.ChangeinPercent);
                    $('#stockVolume').html(numberWithCommas(s.quote.Volume));
                    $('#stockAvgVolume').html(numberWithCommas(s.quote.AverageDailyVolume));
                    $('#stockRange').html(s.quote.YearRange);

                    $("#stockIndicator").hide();
                } else {
                    var errormsg = '<p>Error: Could not load page.</p>';
                    $("#stockIndicator").show();
                    $("#stockIndicator").html(errormsg);
                }
            }
        });
    }
});
$("#run-search").on("click", function(event) {
    event.preventDefault();
    clear();
    var url = buildurl();
    $.ajax({
        url: url,
        method: "GET"
    }).then(updatePage);
});