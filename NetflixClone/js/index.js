$(document).ready(function(){

    $("#loading").hide();

    $type   = ['series'];
    $search = "";

    $('#search_field').on('keyup', function(){
        $search = $(this).val();

        search($search);
    });
});

function search($search){
    $("#movies").html("");

    if($search.length >= 3 ){
        $("#loading").fadeIn();

        setTimeout(function(){
            getMovies($search);
        }, 2000);
    } else{
        $("#movies").html("");
    }
}
    
function getMovies(search){
    axios.get('https://www.omdbapi.com', {
        params: {
            apikey: "4a858268",
            s: search,
            type: $type,
        }
    })
    .then((response) => {
        $movies = response.data.Search;
        $html   = "";
      
        $.each($movies, (index, movie) => {

            $html += `<div class="movie col-md-2">
                            <div class="card-body">
                                <img src="${ movie.Poster }">
                            </div>
                    </div>
                  `;
        });
        $("#movies").html($html);
    });
    $("#loading").hide();
}



  /*latest series start*/
let API_key = "4a858268";
let titles = [   
"quantico",
"daredevil",
"Supernatural",
"game-of-thrones",
"south-park",
"sense8",
"teen-wolf",
"one-punch-man",
'batwoman',
"shadowhunters",
'arrow',
'supergirl',
'titans',
'riverdale',
'lucifer'];
  
  var posterContainer = document.getElementById("posters");
  
  
  async function loadMovies(ImdbID) {
      var response = await fetch("http://www.omdbapi.com/?t=" + ImdbID+ "&apikey="+ API_key);
      var informations = await response.json();
      return informations;
  }
  
  async function getInformations() {
      var seriesContainer = document.querySelector(".films");
      seriesContainer.innerHTML = "";
  
      titles.forEach(title => {
          loadMovies(title).then(movie => getPosters(movie, seriesContainer));
      })
  }
  
  function selected(imageId) {
      sessionStorage.setItem("title", imageId)
  }
  
  async function getPosters(movie, seriesContainer) {
      seriesContainer.innerHTML += `
      <div class="movie col-md-4 col-lg-3">
      <div class="card-body">
      <a href="details.html"><img id= poster src = ${movie.Poster} 
      alt = ${movie.Title} onclick="selected(this.alt)"><a>
      <p class="title">${movie.Title}</p>
      </div>
</div>
`;
  }
  
  function getDetails() {
      var serie = sessionStorage.getItem("title")
      posterContainer.innerHTML = ""
      loadMovies(serie).then(x => createPoster(x))
  }
  
  function createPoster(movie) {
      posterContainer.innerHTML += ` <div id="title"> <h1> ${movie.Title}</h1> </div>
      <div id="poster"> <img src= ${movie.Poster}> </div>
      <p>Seasons: ${movie.totalSeasons}
      <div id="plot"><p>Plot: ${movie.Plot} </div>
      <div id="rating"> <p>Rating: ${movie.imdbRating}<p>
      <p>Vote: ${movie.imdbVotes}
     `
  }
/*latest serie end*/





 /*watch again start*/
  var posterContainer = document.getElementById("posters");
  
  
  async function loadMovies(ImdbID) {
      var response = await fetch("http://www.omdbapi.com/?t=" + ImdbID+ "&apikey="+ API_key);
      var informations = await response.json();
      return informations;
  }
  
  async function getInformation() {
      var seriesContainer = document.querySelector(".films2");
      seriesContainer.innerHTML = "";
  
      titles.forEach(title => {
          loadMovies(title).then(movie => getPosters(movie, seriesContainer));
      })
  }
  
  function selected(imageId) {
      sessionStorage.setItem("title", imageId)
  }
  
  async function getPosters(movie, seriesContainer) {
      seriesContainer.innerHTML += `
      <div class="movie col-md-4 col-lg-3">
      <div class="card-body">
      <a href="details.html"><img id= poster src = ${movie.Poster} 
      alt = ${movie.Title} onclick="selected(this.alt)"><a>
      <p class="title">${movie.Title}</p>
      </div>
</div>
`;
  }
  
  function getDetails() {
      var serie = sessionStorage.getItem("title")
      posterContainer.innerHTML = ""
      loadMovies(serie).then(x => createPoster(x))
  }
  
  function createPoster(movie) {
      posterContainer.innerHTML += ` <div id="title"> <h1> ${movie.Title}</h1> </div>
      <div id="poster"> <img src= ${movie.Poster}> </div>
     <div id="season"> <p>Seasons: ${movie.totalSeasons}</div>
      <div id="plot"><p>Plot: ${movie.Plot} </div>
      <div id="rating"> <p>Rating: ${movie.imdbRating}<p>
     `
  }
 /*watch again end*/





  /* new releases section start*/
  var posterContainer = document.getElementById("posters");
  
  
  async function loadMovies(ImdbID) {
      var response = await fetch("http://www.omdbapi.com/?t=" + ImdbID+"&apikey="+ API_key);
      var informations = await response.json();
      return informations;
  }
  
  async function getInformation2() {
      var seriesContainer = document.querySelector(".films3");
      seriesContainer.innerHTML = "";
  
      titles.forEach(title => {
          loadMovies(title).then(movie => getPosters(movie, seriesContainer));
      })
  }
  
  function selected(imageId) {
      sessionStorage.setItem("title", imageId)
  }
  
  async function getPosters(movie, seriesContainer) {
      seriesContainer.innerHTML += `
      <div class="movie col-md-4 col-lg-3">
      <div class="card-body">
      <a href="details.html"><img id= poster src = ${movie.Poster} 
      alt = ${movie.Title} onclick="selected(this.alt)"><a>
      <p class="title">${movie.Title}</p>
      </div>
</div>
`;
  }
  
  function getDetails() {
      var serie = sessionStorage.getItem("title")
      posterContainer.innerHTML = ""
      loadMovies(serie).then(x => createPoster(x))
  }
  
  function createPoster(movie) {
      posterContainer.innerHTML += ` <div id="title"> <h1> ${movie.Title}</h1> </div>
      <div id="poster"> <img src= ${movie.Poster}> </div>
      <p>Seasons: ${movie.totalSeasons}
      <div id="plot"><p>Plot: ${movie.Plot} </div>
      <div id="rating"> <p>Rating: ${movie.imdbRating}<p>
      <p>Vote: ${movie.imdbVotes}
     `
  }
  /*new realeses section end*/