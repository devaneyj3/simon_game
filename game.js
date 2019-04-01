
var buttonColours = ["red", "blue", "green", "yellow"];

var gamePattern = [];
var userClickedPattern = [];

var started = false;
var level = 0;

var playerOneScore = 0;
var playerTwoScore = 0;

var playerOneHighScore = 0;
var playerTwoHighScore = 0;

$("#level-title").text("Click the button below to start the game");

$("#start").text("Click here to start");




$("#submitName").click(function() {

  var playerOne = ($("#playerOne").val());
  var playerTwo = ($("#playerTwo").val());
  $("#playerOneName").text(playerOne);
  $("#playerTwoName").text(playerTwo);
  $(".players").hide()

  showScores();
})

$("#start").click(function() {
  if (!started) {
    $("#level-title").text("Level " + level);
    nextSequence();
    started = true;
  }
});


$(".btn").click(function() {

  var userChosenColour = $(this).attr("id");
  userClickedPattern.push(userChosenColour);

  playSound(userChosenColour);
  animatePress(userChosenColour);

  checkAnswer(userClickedPattern.length-1);
});


function checkAnswer(currentLevel) {

    if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) {

      console.log("success");
          playerOneScore+=1000;
          updateHighScore();

      if (userClickedPattern.length === gamePattern.length){
        setTimeout(function () {
          nextSequence();
        }, 1000);
      }
      showScores();

    } else {

      console.log("wrong");

      playSound("wrong");

      $("body").addClass("game-over");
      setTimeout(function () {
        $("body").removeClass("game-over");
      }, 200);

      $("#level-title").text("Game Over, Click button to Restart");

      startOver();
    }

}

function nextSequence() {

  userClickedPattern = [];
  level++;


  $("#level-title").text("Level " + level);

  var randomNumber = Math.floor(Math.random() * 4);
  var randomChosenColour = buttonColours[randomNumber];
  gamePattern.push(randomChosenColour);

  $("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);
  playSound(randomChosenColour);
}

function playSound(name) {
  var audio = new Audio("sounds/" + name + ".mp3");
  audio.play();
}

function animatePress(currentColor) {
  $("#" + currentColor).addClass("pressed");
  setTimeout(function () {
    $("#" + currentColor).removeClass("pressed");
  }, 100);
}

//1. Create a new function called startOver().
function startOver() {

  //3. Inside this function, you'll need to reset the values of level, gamePattern and started variables.
  level = 0;
  playerOneScore = 0;
  playerTwoScore = 0
  gamePattern = [];
  started = false;
  showScores();
}

//show the players scores
function showScores() {
  $("#playerOneScore").text("Score");
  $("#playerTwoScore").text("Score");

  $(".playerOneScore").text(playerOneScore);
  $(".playerTwoScore").text(playerTwoScore);  

  $("#playerOneHighScore").text("High Score");
  $("#playerTwoHighScore").text("High Score");

  $(".playerOneHighScore").text(playerOneHighScore);
  $(".playerTwoHignScore").text(playerTwoHighScore);
}

function updateHighScore() {
  if(playerOneScore > playerOneHighScore)
    {
      playerOneHighScore = playerOneScore;
    }
}