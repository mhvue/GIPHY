$(document).ready(function() {

//array of strings 
var topics = ["Taylor Swift",  "Beyonce", "Kelly Clarkson", "Christina Aguilera", "Katy Perry", "Lady Gaga", "Brittney Spears", "Rhianna", 
"Ariana Grande","Adele"];

//creating buttons for each singer in array 
function singerButtons () {
    $(".singerButtons").empty();

    for (var i = 0; i < topics.length; i++) {
        var buttons = $("<button>").addClass("femaleArtistButton").attr("data-name", topics[i]).text(topics[i]);
        $(".singerButtons").append(buttons);
        }
       
};

function gettingGifs () { 
$(".femaleArtistButton").on("click", function () {
    var femaleArtist = $(this).attr("data-name");
    
    //setting up my api with gifphy  
    var API = "0LXaBTUDz62eiqycLJFendA0KcZxuHfR";
    var queryURL = "https://api.giphy.com/v1/gifs/search?api_key=" + API
        + "&q=" + femaleArtist + "&limit=10&offset=0&rating=G&lang=en";

    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function(response) {
        for (var j = 0; j < response.data.length; j++) {

            // still GIF 
            var gifStill = response.data[j].images.fixed_height_still.url;
            //animated GIF
            var femaleArtistGif = response.data[j].images.fixed_height.url;
            //getting the ratings 
            var getRatings = response.data[j].rating;

            var gifsHolder = $("<img>").attr("src", gifStill).attr("data-still", gifStill).attr("data-animate", femaleArtistGif).addClass("gifImg").attr("data-state", "still");
             // data-state b/c this is how image shows 1st when user clicks on button

            //displaying  the the still and ratings on HTML
           // $(".giphsHere").prepend(gifsHolder);
            
            var getRatings = $("<h3 id='ratingsText'>").text("Rating: " + getRatings.toUpperCase());
            $(".giphsHere").prepend(getRatings, gifsHolder)
        };//closure for loop

        $(".gifImg").on("click", function () {
            var stillAttrImg = $(this).attr("data-state");
        
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
    $(".giphsHere").empty();//this needs to be here to allow div to empty before adding more gifs
});//closure for on click on femaleArtistButton
};//closure for gettingGifs func

function formEmpty() {
    $("#femaleSingers-input").css("background-color", "yellow");
}

singerButtons();
gettingGifs();

//Next to make form that will take user input and add to topics array 
$("#submitButton").on("click", function(event) {
    event.preventDefault();
    var userFemaleArtist = $("#femaleSingers-input").val(); //we are getting the text from search bar 

    //informing user of duplicate entries
    for (var i = 0; i < topics.length; i++) {
        if(userFemaleArtist == topics[i]) {
            $("#femaleSingers-input").val(""); 
            return alert("duplciate! Already entered. Try again.")
        }
    }

    if(userFemaleArtist == "") {
        formEmpty();
    }

   else{
    $("#femaleSingers-input").css("background-color", "white");
    topics.push(userFemaleArtist);
    singerButtons();
    gettingGifs();
     $("#femaleSingers-input").val(""); 

    }
    
     
});

});//closure for doc.ready