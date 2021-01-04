//action for button click on 'View Highscores'


//Timer components

//Link timer element in header
var timer = document.getElementById("timer");

//Function for timer
function timeScore() {
   let initialTime = 100;
   let remainingTime = setInterval(function() {
      timer.textContent = "Score: " + initialTime;
      initialTime--;

      //Penalty for incorrect answer
      if (isCorrect === false) {
         remainingTime = remainingTime - 10;
      }

      if (remainingTime === 0 && quizComplete === false) {
         //Do something exciting to let them know they lost
      }
      else if (remainingTime > 0 && quizComplete === true) {
         //Break function to stop countdown and set remainingTime as the score
         break;
      }

   }, 1000);
}

//Quiz content
   //Questions
   var q1 = "";
   var q2 = "";
   var q3 = "";

   //Answer options
   var a1 = [a, b, c, d];
   var a2 = [a, b, c, d];
   var a3 = [a, b, c, d];

