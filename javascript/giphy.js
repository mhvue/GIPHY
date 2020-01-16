
//array of strings 
var topics = ["Taylor Swift",  "Beyonce", "Celine Dione", "Christina Aguilera", "Katy Perry", "Lady Gaga", "Brittney Spears", "Rhianna", 
"Ariana Grande","Adele"];


//creating buttons for each singer in array 
function singerButtons () {
    $(".singerButtons").empty();

    for (var i = 0; i < topics.length; i++) {
        var buttons = $("<button>").addClass("femaleArtistButton").attr("data-name", topics[i]).text(topics[i]);
        
        $(".singerButtons").append(buttons);

        //console.log(topics[i]);
        }
       
};
singerButtons();


$(".femaleArtistButton").one("click", function () {
    var femaleArtist= $(this).attr("data-name");
    console.log(femaleArtist);
    //console.log("click");

//setting up my api with gifphy  
var API= "0LXaBTUDz62eiqycLJFendA0KcZxuHfR";
var queryURL= "https://api.giphy.com/v1/gifs/search?api_key=" + API
 + "&q="+ femaleArtist+ "&limit=10&offset=0&rating=G&lang=en";

 
    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function(response) {
        //console.log(response.data[0].images);
       console.log(response);

       for(var j =0; j < response.data.length; j++) {

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
        gifsHolder.attr("data-state", "still"); //this is how image shows 1st when user clicks on button


        //displaying  the the still and ratings
        $(".giphsHere").prepend(gifsHolder);
        //console.log(gifsHolder);
        var pRatings= $("<p>").text("Rating: " + getRatings);
        $(".giphsHere").prepend(pRatings, gifsHolder)
    
    };//closure for loop

        $(".gifImg").on("click", function () {
            console.log("click");
            var stillAttrImg = $(this).attr("data-state");
            console.log(stillAttrImg);

            //     
            if (stillAttrImg === "still") {
                $(this).attr("src", $(this).attr("data-animate"));//change the src to this same pics attr with "data-animate"
                $(this).attr("data-state", "animate"); //update this state to animate..attr to animate now 
        
            };
        });

       
    

    });
});
//pics are constantly appending per press of each button. need to fix

