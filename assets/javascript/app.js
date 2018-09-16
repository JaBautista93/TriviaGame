//This section holds variables
var Document;
var TotalScore = 0;
var win = 0;
var loss = 0;
var finalTotal;
var randNum;
var RandNum2;
var buttonNumber;
var status;

//wins and losses
$("#win").text(win);
$("#loss").text(loss);
//$("#TotalScore").text(TotalScore)



//iniate Game
reset();
//adds the wins
function Winner() {
  alert("You Beat the 4 Gummy Horseman!");
  win++;
  $("#win").text(win);
  TotalScore = 0;
  reset();
}
//addes the losses
function Loser() {
  alert("You have Diabetes!");
  loss++;
  $("#loss").text(loss);
  TotalScore = 0;
  reset();
}
//game reset
function reset() {
  RandNum = Math.floor(Math.random() * 102 + 19);
  $("#randNum").text(RandNum);
  console.log(RandNum);
  buttonNumber = Math.floor(Math.random() * 12 + 1);
  console.log(buttonNumber);
  $("#btnClose1").val(buttonNumber);

  buttonNumber = Math.floor(Math.random() * 12 + 1);
  console.log(buttonNumber);
  $("#btnClose2").val(buttonNumber);

  buttonNumber = Math.floor(Math.random() * 12 + 1);
  console.log(buttonNumber);
  $("#btnClose3").val(buttonNumber);

  buttonNumber = Math.floor(Math.random() * 12 + 1);
  console.log(buttonNumber);
  $("#btnClose4").val(buttonNumber);
}
//This through my code off...thought I had to reset both functions but no...Keeping for learning purposes
$(".button button").on("click", function() {
  TotalScore += parseInt($(this).val());
  console.log(TotalScore);
  $("#TotalScore").text(TotalScore);
  if (TotalScore === RandNum) {
    $("#status").html(" You are a salty sugar killer - Nice Win!");
    Winner();
  } else if (TotalScore > RandNum) {
    $("#status").html(" You need an insulin shot! - You lost ");
    Loser();
  }
});

//}

//});
