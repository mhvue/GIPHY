//array of strings 
var topics = ["taylorswift",  "Beyonce", "Celine Dione", "Christina Aguilera", "Katy Perry", "Lady Gaga", "Brittney Spears", "Rhianna", 
"Ariana Grande","Adele"];

singerButtons();
//creating buttons for each singer above
function singerButtons () {
    $(".singerButtons").empty();

    for (var i = 0; i < topics.length; i++) {
        var buttons = $("<button>").addClass("femaleArtist").attr("data-name", topics[i]).text(topics[i]);
        
        $(".singerButtons").append(buttons);

        //console.log(topics[i]);
        }
       
};

//have get the value of the strings from the array tied to button click  

//setting up my api with gifphy  
var API= "0LXaBTUDz62eiqycLJFendA0KcZxuHfR"
var queryURL= "https://api.giphy.com/v1/gifs/search?api_key=" + API
 + "&q="+ topics[0]+ "&limit=10&offset=0&rating=G&lang=en";


//create a on click event in which it will "read" from array when user selects a button
//for ajax to call it 

$(".femaleArtist").on("click", function () {
    $(this).val()
        console.log($(this.val()));
    
    //console.log("click");
    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function(response) {
        //console.log(response.data[0].images);
        console.log(response);

       // for(var j =0; j < response.data.length; j++) {

            //testing for index at 0 
           // var taylorGifURL = response.data[j].images.fixed_height.url;
           // var taylorGif = $("<img>").attr("src", taylorGifURL);
            //$(".giphsHere").append(taylorGif);
    
       // }
    });
    

});




