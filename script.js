'use strict';
// Define secret number, Score and High score variables
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

// Display message quesry selector function
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

// Score function query selector
const scoreFunc = function (scores) {
  document.querySelector('.score').textContent = scores;
};

// Game function
const playGame = function () {
  const guess = Number(document.querySelector('.guess').value);
  // When no input
  if (!guess) {
    displayMessage('🛑 No number!');
  }
  // When player wins
  else if (guess === secretNumber) {
    displayMessage('Correct Number 🥳');

    document.querySelector('.number').textContent = secretNumber;

    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';

    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
    document.querySelector('.check').style.display = 'none';
  }
  //  When guess is wrong
  else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? '📈 Too High' : '📉 Too Low');
      score--;
      scoreFunc(score);
    } else {
      displayMessage('💥 You lost the game!');
      scoreFunc(0);
    }
  }
};

document.querySelector('.check').addEventListener('click', playGame);

// Play again (Reset Game) function
const playAgain = function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';

  document.querySelector('.number').textContent = '?';

  displayMessage('Start guessing...');
  scoreFunc(score);
  document.querySelector('.guess').value = '';
  document.querySelector('.check').style.display = 'block';
};

document.querySelector('.again').addEventListener('click', playAgain);
