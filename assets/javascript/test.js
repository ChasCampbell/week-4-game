<script>// Create a random target from 19 to 120 for the computer choice.
document.getElementById("hdr").innerHTML = "randyNumber";
</script>

/*      var randyNumber;

            function pointSetter() {
              randyNumber = Math.floor(Math.random() * 102) + 19;
            }
            document.getElementById("random-number").innerHTML = "randyNumber";

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
*/
