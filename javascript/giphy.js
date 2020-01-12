//array of strings 
var topics = ["taylorswift",  "Beyonce", "Celine Dione", "Christina Aguilera", "Katy Perry", "Lady Gaga", "Brittney Spears", "Rhianna", 
"Ariana Grande","Adele"];


//creating buttons for each singer above
function singerButtons () {
    $(".singerButtons").empty();

    for (var i = 0; i < topics.length; i++) {
        var buttons = $("<button>").addClass("femaleArtist").attr("data-name", topics[i]).text(topics[i]);
        
        $(".singerButtons").append(buttons);

        //console.log(topics[i]);
        }
       
};
singerButtons();
//have get the value of the strings from the array tied to button click  


//create a on click event in which it will "read" from array when user selects a button
//for ajax to call it 

$(".femaleArtist").on("click", function () {
    var femaleArtist= $(this).attr("data-name");
   // console.log(femaleArtist);
    //console.log("click");

//setting up my api with gifphy  
var API= "0LXaBTUDz62eiqycLJFendA0KcZxuHfR"
var queryURL= "https://api.giphy.com/v1/gifs/search?api_key=" + API
 + "&q="+ femaleArtist+ "&limit=10&offset=0&rating=G&lang=en";

 
    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function(response) {
        //console.log(response.data[0].images);
       // console.log(response);

       for(var j =0; j < response.data.length; j++) {

            //testing for index at 0 
          var femaleArtistGifURL = response.data[j].images.fixed_height.url;
           var femaleArtisitGif = $("<img>").attr("src", femaleArtistGifURL);
           $(".giphsHere").append(femaleArtisitGif);
    
       }
    });
    

});




