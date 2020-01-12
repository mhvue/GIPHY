//array of strings 
var topics = ["Taylor Swift",  "Beyonce", "Celine Dione", "Christina Aguilera", "Katy Perry", "Lady Gaga", "Brittney Spears", "Rhianna", 
"Ariana Grande","Adele"];

singerButtons();
//creating buttons for each singer above
function singerButtons () {
    $(".singerButtons").empty();

    for (var i = 0; i < topics.length; i++) {
        var buttons = $("<button>" + "<br>").addClass("femaleArtist").attr("data-name", topics[i]).text(topics[i]);
        
       // $(".singerButtons").html(" ");
        $(".singerButtons").append(buttons);

        //console.log(topics[i]);
        }
       
};

