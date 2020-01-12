//array of strings 
var topics = ["taylorswift",  "Beyonce", "Celine Dione", "Christina Aguilera", "Katy Perry", "Lady Gaga", "Brittney Spears", "Rhianna", 
"Ariana Grande","Adele"];

singerButtons();
//creating buttons for each singer above
function singerButtons () {
    $(".singerButtons").empty();

    for (var i = 0; i < topics.length; i++) {
        var buttons = $("<button>" + "<br>").addClass("femaleArtist").attr("data-name", topics[i]).text(topics[i]);
        
        $(".singerButtons").append(buttons);

        //console.log(topics[i]);
        }
       
};



var API= "0LXaBTUDz62eiqycLJFendA0KcZxuHfR"
var queryURL= "https://api.giphy.com/v1/gifs/search?api_key=" + API
 + "&q="+ topics[0]+ "&limit=10&offset=0&rating=G&lang=en";


//create a on click event to pick an item from array for ajax to call

$.ajax({
    url: queryURL,
    method: "GET"
}).then(function(response) {
    console.log(response);
});


