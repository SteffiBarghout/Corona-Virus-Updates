var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=coronavirus&api-key=JYwtkfx6a3Ws8JzbSi0QWBfJNAymWxen";

/*$.ajax({url: queryURL, method: "GET"})
    .then(function(response){
        console.log(response.response.docs);
*/

function updatePage(NYTData) {

  console.log(NYTData.response.docs.length);
  // Loop through and build elements for the defined number of articles
  for (var i = 0; i < NYTData.response.docs.length; i++) {
    // Get specific article info for current index
    var article = NYTData.response.docs[i];
    console.log(article);
    var newsDiv = $('<div>');
    // var abstract = $('<p>');
    // abstract.html(article.abstract);
    var link = $('<a>');
    link.attr('href', article.web_url);
    // newsDiv.append(abstract);
    link.text(article.abstract);
    newsDiv.append(link);
     $('#nytarticles').append(newsDiv);
    

  }

}
$.ajax({
  url: queryURL,
  method: "GET"
}).then(updatePage);