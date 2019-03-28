let buttonColours = ["red", "blue", "green", "yellow"];

let gamePattern = [];

let userClickedPattern = [];

$(".btn").click(function() {

    let userChosenColor = $(this).attr("id");
    userClickedPattern.push(userChosenColor);
    playSound(userChosenColor);
    animatePress(userChosenColor);
});

function nextSequence() {
    var randomNumber = Math.floor(Math.random() * 4);

    let randomColourChoser = buttonColours[randomNumber];

    gamePattern.push(randomColourChoser);

  $("#" + randomColourChoser).fadeIn(100).fadeOut(100).fadeIn(100);

  playSound(randomColourChoser);
  animatePress(randomColourChoser);
}

function playSound(name) {
    
    let audio = new Audio("sounds/" + name + ".mp3");
    audio.play();
    
}

function animatePress(currentColor) {

    $("." + currentColor).addClass("pressed");

    setTimeout( function() {
        $("." + currentColor).removeClass("pressed");
    }, 100);
}

nextSequence();
