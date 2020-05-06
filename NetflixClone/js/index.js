/*function movieRequest() {
    let httpRequest =  new XMLHttpRequest(); 
    httpRequest.open("GET","http://www.omdbapi.com/?apikey=80eb4b4&t=A-star-is-born",false); 
    httpRequest.send(null); 
    let repText = httpRequest.responseText; 
     let json_obj = JSON.parse(repText); 
     if (json_obj.Response == "False") {  
         console.log("There was an error.");
     } else { 
         console.log(json_obj.Poster); 
         document.querySelector("#result").style.background = `url(${json_obj.Poster})`;
    
     }
 }

 
var API_URL = "http://www.omdbapi.com/?apikey=80eb4b4&t=A-star-is-born";
 function jsonMovie () { 
     $.getJSON(API_URL,function(movie){  
       console.log(movie.Poster); 
   
     })
   }

   window.onload = async () => {
            await movieRequest()
        }
*/


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

    if($type == "all") $type = ['movie', 'series'];

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
