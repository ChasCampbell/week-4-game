 <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
 $(document).ready(function() {
    /*
    // Create the fruit images on the index page.
    function fruitLoader() {
    var targetDiv = document.getElementById("#fruits");
    var# fruitImage = document.createElement("img src=images/Apple.jpg");
    $(targetDiv).append(#fruitImage);
    $(#fruitImage).attr({
     "class","media-object",
     "id","#Apple",
     "height",80,
     "width",80,
     "alt","Apple"
     "margin","5px",
     "display","float-left,"
    }
    });

    var targetDiv = document.getElementById("#fruits");
    var# fruitImage = document.createElement("img src=images/Lemon.jpg");
    $(targetDiv).append(#fruitImage);
    $(#fruitImage).attr({
     "class","media-object",
     "id","#lemon",
     "height",80,
     "width",80,
     "alt","Lemon",
     "margin","5px",
     "display","float-left,"
    }
    });

    var targetDiv = document.getElementById("#fruits");
    var# fruitImage = document.createElement("img src=images/Grape.jpg");
    $(targetDiv).append(#fruitImage);
    $(#fruitImage).attr({
     "class","media-object",
     "id","#Grape",
     "height",80,
     "width",80,
     "alt","Grape",
     "margin","5px",
     "display","float-left,}
    });

    var targetDiv = document.getElementById("#fruits");
    var# fruitImage = document.createElement("img src=images/Strawberry.jpg");
    $(targetDiv).append(#fruitImage);
    $(#fruitImage).attr({
     "class","media-object",
     "id","#Strawberry",
     "height",80,
     "width",80,
     "alt","Strawberry",
     "margin",
     "5px",
     "display",
     "float-left,"
    }
    });
  */
    // Create a random target from 19 to 120 for the computer choice.
    var randyNumber;

    function pointSetter() {
     randyNumber = Math.floor(Math.random() * 102) + 19;
    }
    document.getElementById("random-number").innerHTML = randyNumber;
    // Create the display for the target.
    var loadDiv = document.getElementById(".random-number");
    var target = document.createElement("h3");
    $(loadDiv).append(target);
    $("h3").css("innerHTML", "score");
    // Create a random number from 1 to 12 for each of fruits.
    function pointSetter() {
     function appleValue() {
      var fruitPointsA = Math.floor(Math.random() * 12) + 1;
     };

     function lemonValue() {
      var fruitPointsL = Math.floor(Math.random() * 12) + 1;
     };

     function grapeValue() {
      var fruitPointsG = Math.floor(Math.random() * 12) + 1;
     };

     function strawberryValue() {
      var fruitPointsS = Math.floor(Math.random() * 12) + 1;
     };
    };
    // Create a score keeper to show the player's score.
    var score = 0;
    //Create a counter to record the number of wins.
    var wins = 0;
    //Create a counter to record the player's losses.
    var losses = 0;
    //Initialize the fruit values.
    pointSetter();
    // Create a listener to detect a button click for each fruit.
    // Add the value to the score.
    //If = target - add 1 to win counter and restart at top.
    for (i = 0; i < 5; i++) {
     fruity = (apple, lemon, grape, strawberry);
     fruityValue = (appleValue, lemonValue, grapeValue, strawberryValue);
     $("fruity").on("click", function() {
      score = score + "fruityValue";
      console.log(score)
     });
    }
    //Check the score against the target.
    if (score === randyNumber) {
     //If = target - add 1 to win counter and restart at top.
     wins === wins++;
     clear();
    }
    else if (score > randyNumber) {
     //If > target - add 1 to loss counter.
     losses === losses++;
     clear();
    }
    /* 

                        // This time we increase the counter by *10* each time the user clicks.
                        counter += 10;

                        // We then output the new counter value each time the crystal is clicked.
                        alert("Your new score is: " + counter);

                        document.getElementById("myBtn").onclick = function() { myFunction() 
                        };


    
                      imageLoad("Apple",apple;height(200),width(200),src=images/apple.icns, alt="apple");
                        var targetDiv = document.getElementById("fruits");
                        var AppleImage = document.createElement("img");
                        targetDiv.appendChild(fruitImage);
                        AppleImage.setAttribute("id", "apple");
 
        $("#random-button ").on("click ", function()
           // ... and then dump the random number into our random-number div. $("#random-number ").text(random); $("#number-to-guess ").text(targetNumber); var counter = 0;
           // Now for the hard part. Creating multiple crystals each with their own unique number value. // We begin by expanding our array to include four options. var numberOptions = [10, 5, 3, 7]; // Next we create a for loop to create crystals for every
            numberOption.for(var i = 0; i <
            numberOptions.length; i++) { // For each iteration, we will create an imageCrystal var imageCrystal=$ ( "<img>"); // First each crystal will be given the class ".crystal-image". // This will allow the CSS to take effect.imageCrystal.addClass("crystal-image");
    // Each imageCrystal will be given a src link to the crystal image imageCrystal.attr( "src", "http://cdn.playbuzz.com/cdn/35910209-2844-45c0-b099-f4d82878d54f/00261fda-4062-4096-81fd-8cf96b9034e8.jpg"); // Each imageCrystal will be given a data attribute
    called data-crystalValue. // This data attribute will be set equal to the array value. imageCrystal.attr( "data-crystalvalue", numberOptions[i]); // Lastly, each crystal image (with all it classes and attributes) will get added to the page.$("#crystals").append(imageCrystal);
     // This time, our click event applies to every single crystal on the page. Not just one. $( ".crystal-image").on( "click", function() { // Determining the crystal 's value requires us to extract the value from the data attribute. // Using the $(this)
    keyword specifies that we should be extracting the crystal value of the clicked crystal. // Using the .attr("data-crystalvalue") allows us to grab the value out of the "data-crystalvalue" attribute. // Since attributes on HTML elements are strings,
    we must convert it to an integer before adding to the counter // Here we created a counter, we'll be using this to track the user's total. var counter = 0; $(".crystal-image").on("click", function() { // Each time the user clicks the crystal the counter
    goes up by 1. counter += 1; // We then output the number of times the crystal is clicked. alert("You clicked this crystal " + counter + " times!"); var crystalValue = ($(this).attr("data-crystalvalue")); crystalValue = parseInt(crystalValue); // We
    then add the crystalValue to the user's "counter" which is a global variable. // Every click, from every crystal adds to the global counter. counter +=c rystalValue; // All of the same game win-lose logic applies. So the rest remains unchanged.alert("New
    score: " + counter); if (counter === t argetNumber) { alert("You win!"); } else if (counter >= targetNumber) { alert("You lose!!"); } }); 
   
    <img id="apple" src=images/apple.icns alt="apple">
    <img id="lemon" src=images/lemon.icns alt="lemon ">
    <img id="grape" src=images/grape.icns alt="grape">
    <img id=s "trawberry" src=images/strawberry.icns alt="strawberry ">
   
      var target = document.createElement("h3");
   var countw = document.createElement("h4");
   var countl = document.createElement("h4");
   $(loadDiv).append(target);
   
   
   // Create the four scoring fruits.
   var fruitList=(apple, lemon, grape, strawberry);
   function imageLoad(fruitImage, fruits) {
    var targetDiv = document.getElementById("#fruits");
    var #fruitImage = document.createElement("img");
    $(targetDiv).append(#fruitImage);
    $(#fruitImage).attr({ "class": "media-object", "id": "#fruits", "height": 200, "width": 200, "alt": "Apple", "src": "images/apple.icns" });
    $("#fruits").append(apple, lemon, grape, strawberry);
   
   
   "height","200",
   "width", "200",
   "alt", "Apple",
   "src", "images/apple.jpg" });
   var loadDiv = document.getElementById(".random-number");

   imageLoad(apple.icns, "Apple");
   imageLoad(lemon.icns, "Lemon");
   imageLoad(grape.icns, "Grape");
   imageLoad(strawberry.icns, "Strawberry");
   
   */
 