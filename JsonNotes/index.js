function movieRequest() {
   let httpRequest =  new XMLHttpRequest(); // Istantanciate a new request.
   httpRequest.open("GET","http://www.omdbapi.com/?apikey=80eb4b4&t=A-star-is-born",false); // In the constructor, ( METHOD, URL, ASYNC)
   httpRequest.send(null);  // The request is a GET one, so I don't need to pass a body.
   let repText = httpRequest.responseText;  // I pass the response as a text..
    let json_obj = JSON.parse(repText);  // ..and I order it in a dicitonary. 
    if (json_obj.Response == "False") {  //Now I'm going to check if in the response KEY, (parola in grassetto del dizionario), c'è stato un errore.
        console.log("There was an error.");
    } else { // o se è true.
        console.log("Request went good, here's the plot."); //Se è true lo comunico all'utente, e a me stessa.
        console.log(json_obj.Plot); //Printo il plot, o quello che mi serve.
    }
}

function jqueryMovieRequest() {
    var API_URL = "http://www.omdbapi.com/?apikey=80eb4b4&t=A-star-is-born"; // I save the API URL since this is a costant.

}