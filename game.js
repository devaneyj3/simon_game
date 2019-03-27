
let buttonColors = ["red", "blue", "green", "yellow"];

let gamePattern = [];


function nextSequence() {
  let randomNumber = Math.floor(Math.random(3) * 4);

  let randomColorChoser = buttonColors[randomNumber];
   
  gamePattern.push(randomColorChoser);

}

nextSequence();