var APIKey = "8C8UISNGQZSOTMZ9";

var queryURL = "https://www.alphavantage.co/query?" +
    "function=TIME_SERIES_INTRADAY&symbol=MSFT&interval=5min&apikey=" + APIKey;

$.ajax({
    url: queryURL,
    method: "GET"
})

.then(function(data) {

    var response = data["Meta Data"];

    console.log(queryURL);

    console.log(response);

    $(".information").text(" Information: " + response["1. Information"]);
    $(".symbol").text("Symbol: " + response["2. Symbol"]);
    $(".lastrefreshed").text("Last Refreshed: " + response["3. Last Refreshed"]);
    $(".timezone").text("Timezone: " + response["6. Time Zone"]);

    console.log("Information: " + response["1. Information"]);
    console.log("Symbol: " + response["2. Symbol"]);
    console.log("Last Refreshed: " + response["3. Last Refreshed"]);
    console.log("Timezone: " + response["6. Time Zone"]);
});

/*var url = 'https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=MSFT&interval=1min&apikey=8C8UISNGQZSOTMZ9';

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
                var s = data..results;
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
});*/