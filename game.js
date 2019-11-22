var buttonColours = ["red", "blue", "green", "yellow"];

var gamePattern = [];
var userClickedPattern = [];

var started = false;
var level = 0;

var playerOneScore = 0;
var playerTwoScore = 0;

var playerOneHighScore = 0;
var playerTwoHighScore = 0;

var levelHeading = $(".level-title");
var start = $(".start");

var playerOneNameField = localStorage.getItem("NamePlayerOne");
var playerTwoNameField = localStorage.getItem("NamePlayerTwo");

$(levelHeading).text("Click the button below to start the game");

$(start).text("Start");
showScores();

$(start).click(function() {
  if (!started) {
    $(levelHeading).text("Level " + level);
    nextSequence();
    started = true;
  }
});


$(".button").click(function() {

  var userChosenColour = $(this).attr("id");
  userClickedPattern.push(userChosenColour);
  console.log(userClickedPattern);
  playSound(userChosenColour);
  animatePress(userChosenColour);

  checkAnswer(userClickedPattern.length - 1);
});


function checkAnswer(currentLevel) {

  if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) {

    playerOneScore += 1000;
    updateHighScore();

    if (userClickedPattern.length === gamePattern.length) {
      setTimeout(function() {
        nextSequence();
      }, 1000);
    }
    showScores();

  } else {

    playSound("wrong");

    $("body").addClass("game-over");
    setTimeout(function() {
      $("body").removeClass("game-over");
    }, 200);

    $(levelHeading).text("Game Over, Click button to Restart");

    $(".finishedLevel").html("<br><p>You finished on level " + level + "</p>");

    startOver();
  }

}

//increments level and chooses Math class to pick random pattern
function nextSequence() {

  userClickedPattern = [];
  level++;


  $(levelHeading).text("Level " + level);

  var randomNumber = Math.floor(Math.random() * 4);
  var randomChosenColour = buttonColours[randomNumber];
  gamePattern.push(randomChosenColour);
  console.log(gamePattern);

  $("." + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);
  playSound(randomChosenColour);
}

function playSound(name) {
  var audio = new Audio("sounds/" + name + ".mp3");
  audio.play();

}

//Once user presses a button, animated that button
function animatePress(currentColor) {
  $("." + currentColor).addClass("pressed");
  setTimeout(function() {
    $("." + currentColor).removeClass("pressed");
  }, 100);
}

//Resets everything
function startOver() {
  level = 0;
  playerOneScore = 0;
  playerTwoScore = 0;
  gamePattern = [];
  started = false;
  showScores();
}

//show the players scores

function showScores() {
  if (playerTwoNameField) {
    twoPlayers();
    
  } else if (playerOneNameField) {
    onePlayer();
  }
}

function updateHighScore() {
  if (playerOneScore > playerOneHighScore) {
    playerOneHighScore = playerOneScore;
  }
}

function twoPlayers(){
  $(".playerOneName").text(playerOneNameField);
  $(".playerOneScore").text(playerOneScore);
  $(".playerOneHighScore").text(playerOneHighScore);

  $(".playerTwoName").text(playerTwoNameField);
  $(".playerTwoScore").text(playerTwoScore);
  $(".playerTwoHighScore").text(playerTwoHighScore);
}

function onePlayer() {
  $(".playerOneName").text(playerOneNameField);
  $(".playerOneScore").text(playerOneScore);
  $(".playerOneHighScore").text(playerOneHighScore);
}