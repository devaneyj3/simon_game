//jshint esversion: 6

//Variables 
let playerOneButton = document.getElementById('playerOneButton');
let playerTwoButton = document.getElementById('playerTwoButton');
let playerOneInput = document.getElementById('playerOne');
let playerTwoInput = document.getElementById('playerTwo');
let submitNameBtn = document.querySelector('.submitName');

playerOneInput.style.display = 'none';
playerTwoInput.style.display = 'none';
submitNameBtn.style.display = 'none';

playerOneButton.addEventListener('click', () => {
    playerOneInput.style.display = 'block';
    submitNameBtn.style.display = 'block';
});

playerTwoButton.addEventListener('click', () => {
  playerOneInput.style.display = 'block';
  playerTwoInput.style.display = 'block';
  submitNameBtn.style.display = 'block';
});

submitNameBtn.addEventListener('click', () => {

  let playerOneValue = playerOneInput.value;
  let playerTwoValue = playerTwo.value;

  localStorage.setItem("NamePlayerOne", playerOneValue);
  localStorage.setItem("NamePlayerTwo", playerTwoValue);

});
