//Questions, this contains all my questions
var TriviaQuestions = [
  {
    question: "What year did France gift the United States with the statue of Libery?",
    response: ["1908", "1808", "1886", "1888"],
    answer: "1886"
  },
  {
    question: "Which of these bridges connects Manhattan to Brooklyn?",
    response: ["Manhattan", "Brooklyn", "Verrazano", "Goethals"],
    answer: "Brooklyn"
  },
  {
    question: "Which building did Frank Lloyd Wright Design?",
    response: ["30 Rockefeller Place", "Woolworth Building", "Flatiron Building", "Solomon R. Guggenheim Museum"],
    answer: "Solomon R. Guggenheim Museum"
  },
  
];

// //This section holds variables
var Document;
var TotalWin = 0;
var CorrectAns = 0;
var WrongAns = 0;
var randomIndex = " ";
//var randQuestion;

//iniate Game
$("#initiate-game").on("click", game);
//console.log(game)

 //Game Code
   function game() {
    //In order to change the index to an array we need to convert it
    var randomIndex = getRandomInt(0, (question.length-1))
    document.getElementById("randQuestion").innerHTML = randomIndex;
    
    //this should display question
      console.log(answerArray)
    // $.each(randQuestion, function(key, value){
    //   $("#randQuestion").append(Key + ": " + value + '<br>');
    // }
    // )}
}





// //Timer Code
// function countdown() {
//   //This starts each round giving you 25 seconds
//   console.log("game initiated");
//   var counter = 25;
//   document.getElementById("timer").innerHTML = counter;
//   //this is your count down
//   var timer = setInterval(function() {
//     counter -= 1;
//     document.getElementById("timer").innerHTML = counter;
//     //this is your rule
//     if (counter === 0) {
//       clearInterval(countdown);
//       countdown();
//     }
//     else {
//     var randQuestion = Math.floor(Math.random() * TriviaQuestions.length);
//     document.getElementById("randQuestion").innerHTML = question;
//     console.log(randQuestion);
//     }
//   }, 1000);

 
//console.log(randomIndex);

//Need to make a reset() fucntion
//reset()

//css display attr (display none or hidden),
// //adds the wins
// function Winner() {
//   alert("You Beat the 4 Gummy Horseman!");
//   win++;
//   $("#win").text(win);
//   TotalScore = 0;
//   reset();
// }
// //addes the losses
// function Loser() {
//   alert("You have Diabetes!");
//   loss++;
//   $("#loss").text(loss);
//   TotalScore = 0;
//   reset();
// }

// //wins and losses
// $("#win").text(win);
// $("#loss").text(loss);
// //$("#TotalScore").text(TotalScore)

// //game reset
// function reset() {
//   RandNum = Math.floor(Math.random() * 102 + 19);
//   $("#randNum").text(RandNum);
//   console.log(RandNum);
//   buttonNumber = Math.floor(Math.random() * 12 + 1);
//   console.log(buttonNumber);
//   $("#btnClose1").val(buttonNumber);

//   buttonNumber = Math.floor(Math.random() * 12 + 1);
//   console.log(buttonNumber);
//   $("#btnClose2").val(buttonNumber);

//   buttonNumber = Math.floor(Math.random() * 12 + 1);
//   console.log(buttonNumber);
//   $("#btnClose3").val(buttonNumber);

//   buttonNumber = Math.floor(Math.random() * 12 + 1);
//   console.log(buttonNumber);
//   $("#btnClose4").val(buttonNumber);
// }
// //This through my code off...thought I had to reset both functions but no...Keeping for learning purposes
// $(".button button").on("click", function() {
//   TotalScore += parseInt($(this).val());
//   console.log(TotalScore);
//   $("#TotalScore").text(TotalScore);
//   if (TotalScore === RandNum) {
//     $("#status").html(" You are a salty sugar killer - Nice Win!");
//     Winner();
//   } else if (TotalScore > RandNum) {
//     $("#status").html(" You need an insulin shot! - You lost ");
//     Loser();
//   }
// });

// //}

// //});
