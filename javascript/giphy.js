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
//have get the value of the strings from the array tied to button click  

//create a on click event in which it will "read" from array when user selects a button
//for ajax to call it 

$(".femaleArtistButton").one("click", function () {
    var femaleArtist= $(this).attr("data-name");
   // console.log(femaleArtist);
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

        //still GIF
           var gifStill = response.data[j].images.fixed_height_still.url;
           var gifStillHolder=$("<img>").attr("src", gifStill).attr("data-gif", "still").addClass("gif");
           
        //rating in P tag
           var pRatings = $("<p>").text("Rating: " + response.data[j].rating);
           // console.log(pRatings);
           //testing for index at 0 
          $(".giphsHere").prepend(pRatings, gifStillHolder);

        //GIF animated
           var femaleArtistGif = response.data[j].images.fixed_height.url;
           var femaleArtistGifHolder = $("<img>").attr("src", femaleArtistGif).attr("data-gif2","animate").addClass("gif")
           


           $(".gif").one("click", function() {
            //console.log("click");
               var stillAttrImg =$(this).attr("data-gif");
              // var gifsAction=$(".giphsHere").prepend(pRatings, femaleArtistGifHolder);

               var animateImg= femaleArtistGifHolder.attr("data-gif2");
                console.log(stillAttrImg);
               console.log(animateImg);
            //     
            if (stillAttrImg === "still") {
                $(this).attr("src", femaleArtistGif).prepend(pRatings, femaleArtistGifHolder);
                console.log("hi");
            };
        });

        //if gif select via click the picture = animate 
    

    }});
});
//pics are constantly appending per press of each button. need to fix that



