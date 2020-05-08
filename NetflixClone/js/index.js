$(document).ready(function(){

    $("#loading").hide();

    $type   = ['movie', 'series'];
    $search = "";


    $('#search_field').on('keyup', function(){
        $search = $(this).val();

        search($search);
    });

    $(".type").click(function(){
        if($(this).is(":checked")){
            $type = $(this).val();
            
            search($search);
        }
    })

});

function search($search){
    $("#movies").html("");

    if($search.length >= 3){
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

const getMovie = (movieTitle, movies) => {
    return fetch(`https://www.omdbapi.com/?t=${movieTitle}&apikey=4a858268`)
      .then(response => {
        return response.json();
      })
      .then(data => {
        return data;
      })
      .catch(error => {
        console.warn(error);
      });
  };

  const favMovies = [
    "Batman: The Dark Knight Returns",
    "The Fast and the Furious",
    "The Bourne Ultimatum",
    "The Bourne Identity",
    "Cars",
    'batwoman',
    'nancy%20drew',
    'the%20flash',
    'black%20lightning',
    'arrow',
    'supergirl',
    'titans',
    'riverdale',
    'lucifer'
  ];

  const movies = [];
  let output = "";

  
  console.log(output);

  getMovie(favMovies[0])
    .then(movie => movies.push(movie))
    .then(() => getMovie(favMovies[1]))
    .then(movie => movies.push(movie))
    .then(() => getMovie(favMovies[2]))
    .then(movie => movies.push(movie))
    .then(() => getMovie(favMovies[3]))
    .then(movie => movies.push(movie))
    .then(() => getMovie(favMovies[4]))
    .then(movie => movies.push(movie))
     .then(() => getMovie(favMovies[5]))
    .then(movie => movies.push(movie))
        .then(() => getMovie(favMovies[6]))
    .then(movie => movies.push(movie))
        .then(() => getMovie(favMovies[7]))
    .then(movie => movies.push(movie))
        .then(() => getMovie(favMovies[8]))
    .then(movie => movies.push(movie))
        .then(() => getMovie(favMovies[9]))
    .then(movie => movies.push(movie))
        .then(() => getMovie(favMovies[10]))
    .then(movie => movies.push(movie))
  
    .then(() => {
      console.log(movies);

      const listContainer = document.querySelector(".films");

      movies.forEach(movie => {
        const markup = 
           `<div class="movie col-md-2">
                            <div class="card-body">
                              <img src=${movie.Poster}> </img>
                            </div>
                    </div>
                
        `;

        listContainer.innerHTML += markup;
      });
    })