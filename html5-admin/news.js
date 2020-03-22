
var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=coronavirus&api-key=JYwtkfx6a3Ws8JzbSi0QWBfJNAymWxen";

$.ajax({url: queryURL, method: "GET"})
    .done(function(response){
        console.log(response.response.docs);

    });

    //$("button").on("click", function() {
        // Grabbing and storing the data-aritcle property value from the button
        //var article = $(this).attr("data-article");
  
        // Constructing a queryURL using the search name
        //var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=coronavirus&api-key=JYwtkfx6a3Ws8JzbSi0QWBfJNAymWxen";
  
        // Performing an AJAX request with the queryURL
        $.ajax({
          url: queryURL,
          method: "GET"
        })
          // After data comes back from the request
          .then(function(response) {
            //console.log(queryURL);
  
            console.log(response);
            // storing the data from the AJAX request in the results variable
            var results = response.response.docs;
  
            // Looping through each result item
            for (var i = 0; i < results.length; i++) {
  
              // Creating and storing a div tag
              var articleDiv = $("<div>");
  
              // Creating a paragraph tag with the result item's url
              var p = $("<p>").text("Web Link: " + results[i].web_url);
  
              // Appending the paragraph tag to the articleDiv
              articleDiv.append(p);
              
  
              // Prependng the articleDiv to the HTML page in the "#card-block" div
              $("#card-block").prepend(articleDiv);
            };
          




      });
