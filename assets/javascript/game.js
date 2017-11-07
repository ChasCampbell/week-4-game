$(document).ready(function() {

    // Create the display for the target.
    var loadDiv = document.getElementById(".random-number");
    var target = document.createElement("h3");

    // Create a random target from 19 to 120 for the computer choice.
    var randyNumber;

    // Create the fruit images on the index page.
    // Start with an object;
    var fruitImgObj = {
        apple: "src=images/Apple.jpg",
        grape: "src=images/Grape.jpg",
        lemon: "src=images/Lemon.jpg",
        strawberry: "src=images/Strawberry.jpg",
    };

    // Create a score keeper to show the player's score.
    var score = 0;

    //Create a counter to record the number of wins.
    var wins = 0;

    //Create a counter to record the player's losses.
    var losses = 0;

    $(loadDiv).append(target);
    $("h3").css("innerHTML", "0");

    function init() {

        randyNumber = Math.floor(Math.random() * 102) + 19;
        var rand = randyNumber.toString();
        document.getElementById("ptarget").innerHTML = rand;

    }

    init();
    reset();

    //Initialize the fruit values (and use to reset them on a win or loss).
    // Create a random number from 1 to 12 for each of the fruits.
    function reset(fruitPointsValue) {
        var appleValue = 0;
        var lemonValue = 0;
        var grapeValue = 0;
        var strawberryValue = 0;
        var fruitPointsValueArray = [appleValue, lemonValue, grapeValue, strawberryValue];
        for (i = 1; i < 5; i++) {
            fruitPointsValue = Math.floor(Math.random() * 12);
        }


        // THIS IS WHERE WE PLAY THE GAME
        // Create a listener to detect a button click.
        // Add the  correct fruit value to the score.

        $("apple").on("click", function() {
            score = score + appleValue;
        });
        $("lemon").on("click", function() {
            score = score + lemonValue;
        });
        $("grape").on("click", function() {
            score = score + grapeValue;
        });
        $("strawberry").on("click", function() {
            score = score + strawberryValue;
        });
        // document.getElementById("Score").innerHTML = "score";

        //If = target - add 1 to win counter and restart at top.
        //Check the score against the target.
        if (score === randyNumber) {
            //If = target - add 1 to win counter and restart at top.
            wins === wins++;
            document.getElementById("wins").innerHTML = wins;

        }
        else if (score > randyNumber) {

            //If > target - add 1 to loss counter.
            losses === losses++;
            document.getElementById("losses").innerHTML = losses;

        }

        function clear() {
            score = 0;
        }
        clear();
        init();
    }
});
/* 
    //Import the fruit pictures. Did not get this to work.   
    for (i = 1; i < 5; i++) {
        alert(i);
        var fruitNameArrayj = ["apple", "lemon", "grape", "strawberry"];
        var fruit = fruitNameArray[i];
        var fruitImageSrc = fruitImgObj.fruit;
        targetDiv = document.getElementById("panel-body");
        fruitImageName = document.createElement("img");
        $(fruitImageName).append(fruitImage);
        $(fruitImageName).attr({
            "src": fruitImageSource,
            "class": "media-object",
            "id": "#apple",
            "height": 80,
            "width": 80,
            "alt": "Apple",
            "margin": "5px",
            "display": "float-left"
        });
    }
*/
