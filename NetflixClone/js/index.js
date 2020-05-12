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

/*most watched section start*/

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
    "the-100",
     "Stranger Things",
      "Supernatural",
    "game-of-thrones",
    "The Bourne Identity",
    "the-walking-dead",
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
        .then(() => getMovie(favMovies[11]))
    .then(movie => movies.push(movie))
        .then(() => getMovie(favMovies[12]))
    .then(movie => movies.push(movie))
        .then(() => getMovie(favMovies[13]))
    .then(movie => movies.push(movie))
        .then(() => getMovie(favMovies[14]))
    .then(movie => movies.push(movie))
  
    .then(() => {
      console.log(movies);

      const listContainer = document.querySelector(".films");

      movies.forEach(movie => {
        const markup = 
           `<div class="movie col-md-4 col-lg-3 col-sm-12">
                            <div class="card-body">
                              <img src=${movie.Poster}> </img>
                            </div>
                    </div>
                
        `;

        listContainer.innerHTML += markup;
      });
    })
/*most watched section end*/





/*watch again section start*/
const getMovies2 = (movieTitle, movies) => {
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


   const favMovies2 = [
    "shadowhunters",
  "black-clover",
  "the-big-bang-theory",
  "vikings",
  "westworld",
  "quantico",
  "daredevil",
  "prison-break",
  "mr-robot",
  "rick-and-morty",
  "one-punch-man",
  "teen-wolf",
  "brooklyn-nine-nine",
  'lucifer'
];



const posters = [];
let output2 = "";


console.log(output2);


getMovies2(favMovies2[0])
  .then(poster => posters.push(poster))
  .then(() => getMovie(favMovies2[1]))
  .then(poster=> posters.push(poster))
  .then(() => getMovie(favMovies2[2]))
  .then(poster => posters.push(poster))
  .then(() => getMovie(favMovies2[3]))
  .then(poster=> posters.push(poster))
  .then(() => getMovie(favMovies2[4]))
  .then(poster => posters.push(poster))
   .then(() => getMovie(favMovies2[5]))
  .then(poster => posters.push(poster))
      .then(() => getMovie(favMovies2[6]))
  .then(poster => posters.push(poster))
      .then(() => getMovie(favMovies2[7]))
  .then(poster => posters.push(poster))
      .then(() => getMovie(favMovies2[8]))
  .then(poster => posters.push(poster))
      .then(() => getMovie(favMovies2[9]))
  .then(poster=> posters.push(poster))
      .then(() => getMovie(favMovies2[10]))
  .then(poster => posters.push(poster))
      .then(() => getMovie(favMovies2[11]))
  .then(poster => posters.push(poster))
      .then(() => getMovie(favMovies2[12]))
  .then(poster => posters.push(poster))
      .then(() => getMovie(favMovies2[13]))
  .then(poster => posters.push(poster))
      .then(() => getMovie(favMovies2[14]))
  .then(poster => posters.push(poster))

  .then(() => {
    console.log(posters);

    const listContainer2 = document.querySelector(".films2");

    posters.forEach(poster => {
      const markup2 = 
         `<div class="movie col-md-4 col-lg-3 col-sm-12">
                          <div class="card-body">
                            <img src=${poster.Poster}> </img>
                          </div>
                  </div>
              
      `;

      listContainer2.innerHTML += markup2;
    });
  })
/*watch again section end*/




const getMovies3 = (movieTitle, movies) => {
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


   const favMovies3 = [
  "once-upon-a-time",
  "the-good-doctor",
  "orange-is-the-new-black",
  "the-magicians",
  "limitless",
  "young-sheldon",
  "narcos",
  "modern-family",
  "peaky-blinders",
  "american-horror-story",
  "the-witcher",
  "south-park",
  "sense8",
  "pretty-little-liars"
];



const posters2 = [];
let output3 = "";


console.log(output3);


getMovies3(favMovies3[0])
  .then(poster => posters2.push(poster))
  .then(() => getMovie(favMovies3[1]))
  .then(poster=> posters2.push(poster))
  .then(() => getMovie(favMovies3[2]))
  .then(poster => posters2.push(poster))
  .then(() => getMovie(favMovies3[3]))
  .then(poster=> posters2.push(poster))
  .then(() => getMovie(favMovies3[4]))
  .then(poster => posters2.push(poster))
   .then(() => getMovie(favMovies3[5]))
  .then(poster => posters2.push(poster))
      .then(() => getMovie(favMovies3[6]))
  .then(poster => posters2.push(poster))
      .then(() => getMovie(favMovies3[7]))
  .then(poster => posters2.push(poster))
      .then(() => getMovie(favMovies3[8]))
  .then(poster => posters2.push(poster))
      .then(() => getMovie(favMovies3[9]))
  .then(poster=> posters2.push(poster))
      .then(() => getMovie(favMovies3[10]))
  .then(poster => posters2.push(poster))
      .then(() => getMovie(favMovies3[11]))
  .then(poster => posters2.push(poster))
      .then(() => getMovie(favMovies3[12]))
  .then(poster => posters2.push(poster))
      .then(() => getMovie(favMovies3[13]))
  .then(poster => posters2.push(poster))
      .then(() => getMovie(favMovies3[14]))
  .then(poster => posters2.push(poster))

  .then(() => {
    console.log(posters2);

    const listContainer3 = document.querySelector(".films3");

    posters2.forEach(poster => {
      const markup3 = 
         `<div class="movie col-md-4 col-lg-3">
                          <div class="card-body">
                            <img src=${poster.Poster}> </img>
                          </div>
                  </div>
              
      `;

      listContainer3.innerHTML += markup3;
    });
  })