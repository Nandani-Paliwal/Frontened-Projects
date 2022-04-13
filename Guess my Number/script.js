"use strict";

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let displayMessage = function(message){
  document.querySelector('.message').textContent = message;
}
let displayNumber = function(number){
  document.querySelector('.number').textContent = number;
}

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  console.log(typeof guess);

  if (!guess) {
    //when there is no input
    displayMessage("⛔ No number!");
  }
  //When player wins
  else if (guess === secretNumber) {
    displayMessage("🎉 Correct Number!");

    displayNumber(secretNumber);

    document.querySelector("body").style.backgroundColor = "#60b347";

    document.querySelector(".number").style.opacity = '1';

    //  document.querySelector('.number').style.width = '15rem';
    document.querySelector(".highscore").textContent = score;
  }
  //when guess is wrong
  else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? "⚠️ Too high " : "⚠️ Too Low ");
      score = score - 1;
      document.querySelector(".score").textContent = score;
    } else {
      displayMessage("😥 You lost the game");
    }
  }
});

document.querySelector(".again").addEventListener("click", function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;

 displayMessage("Start guessing...")
  document.querySelector(".score").textContent = score;
  displayNumber('?');
  document.querySelector(".guess").value = "";
  document.querySelector("body").style.backgroundColor = "#222";
});
