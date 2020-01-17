$(document).ready(function() {


//array of strings 
var topics = ["Taylor Swift",  "Beyonce", "Kelly Clarkson", "Christina Aguilera", "Katy Perry", "Lady Gaga", "Brittney Spears", "Rhianna", 
"Ariana Grande","Adele"];


//creating buttons for each singer in array 
function singerButtons () {
    $(".singerButtons").empty();

    for (var i = 0; i < topics.length; i++) {
        var buttons = $("<button>");
        buttons.addClass("femaleArtistButton");
        buttons.attr("data-name", topics[i]);
        buttons.text(topics[i]);
        
        $(".singerButtons").append(buttons);

        //console.log(topics[i]);
        }
       
};
singerButtons();
gettingGifs();

function gettingGifs () { 
$(".femaleArtistButton").on("click", function () {
    var femaleArtist = $(this).attr("data-name");
    console.log(femaleArtist);
    //console.log("click");

    //setting up my api with gifphy  
    var API = "0LXaBTUDz62eiqycLJFendA0KcZxuHfR";
    var queryURL = "https://api.giphy.com/v1/gifs/search?api_key=" + API
        + "&q=" + femaleArtist + "&limit=10&offset=0&rating=G&lang=en";

 
    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function(response) {
        //console.log(response.data[0].images);
       console.log(response);

        for (var j = 0; j < response.data.length; j++) {

            // still GIF 
            var gifStill = response.data[j].images.fixed_height_still.url;

            //animated GIF
            var femaleArtistGif = response.data[j].images.fixed_height.url;

            //getting the ratings 
            var getRatings = response.data[j].rating;


            var gifsHolder = $("<img>");
            gifsHolder.attr("src", gifStill);
            gifsHolder.attr("data-still", gifStill);
            gifsHolder.attr("data-animate", femaleArtistGif);
            gifsHolder.addClass("gifImg");
            gifsHolder.attr("data-state", "still"); // b/c this is how image shows 1st when user clicks on button


            //displaying  the the still and ratings on HTML
            $(".giphsHere").prepend(gifsHolder);
            //console.log(gifsHolder);
            var pRatings = $("<h3 id='ratingsText'>").text("Rating: " + getRatings);
            $(".giphsHere").prepend(pRatings, gifsHolder)

        };//closure for loop

    //$(".giphsHere").empty();

    $(".gifImg").on("click", function () {
         //console.log("click");
         var stillAttrImg = $(this).attr("data-state");
        // console.log(stillAttrImg);

        //this if/else is allowing the "animated" effect by a click 
        if (stillAttrImg === "still") {
         $(this).attr("src", $(this).attr("data-animate"));//change the src to this img by grabbing the attr with "data-animate" of SAME img
         $(this).attr("data-state", "animate"); //update the state to animate..attr is animate now 
            //console.log($(this));
        }
        else {
            $(this).attr("src", $(this).attr("data-still"));
            $(this).attr("data-state", "still")
        }

     });//closure for click on .gifImg

    });//closure for ajax/.then function 
    
});//closure for on click on femaleArtistButton

};//closure for gettingGifs func

//Next to make form that will take user input and add to topics array 
$("#submitButton").on("click", function() {
    event.preventDefault();

    var userFemaleArtist = $("#femaleSingers-input").val(); //we are getting the text from search bar 
   // console.log(userFemaleArtist);
  
    topics.push(userFemaleArtist);

    singerButtons();

    gettingGifs();


    // if (userFemaleArtist ===  {
    //     alert("double");
    // }

     // empty textbox 
     $("#femaleSingers-input").val("");
});



//console.log(topics); //checking topics array if userFemaleArtist added 

//TO DO 
//make it so we don't keep previous gifs clicked 

//write if for duplicates as we don't want that 

//get gifs to line next to each other 

});//closure for doc.ready