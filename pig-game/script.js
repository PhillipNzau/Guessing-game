'use strict';

// Selecting elements
const currentPlayer0El = document.querySelector('.player--0')
const currentPlayer1El = document.querySelector('.player--1')
const score0El = document.querySelector('#score--0')
const score1El = document.getElementById('score--1')
const current0El = document.getElementById('current--0')
const current1El = document.getElementById('current--1')

const diceEl = document.querySelector('.dice')
const btnNew = document.querySelector('.btn--new')
const btnRoll = document.querySelector('.btn--roll')
const btnHold = document.querySelector('.btn--hold')

let scores, currentScore, activePlayer, playing


// Initialize game 
const init = function () {
    scores = [0, 0]
    currentScore = 0
    activePlayer = 0
    playing = true


    // Starting condition
    score0El.textContent = 0
    score1El.textContent = 0
    diceEl.classList.add('hidden')

    current0El.textContent = currentScore
    current1El.textContent = currentScore

    currentPlayer0El.classList.remove('player--winner')
    currentPlayer1El.classList.remove('player--winner')


    // TOGGLE checks if it has that class and removes it if it does
    currentPlayer0El.classList.add('player--active')
    currentPlayer1El.classList.remove('player--active')
}

init()

// Switch function
const switchPlayer = function () {
    // Switch to next player
    document.getElementById(`current--${activePlayer}`).textContent = 0
    currentScore = 0

    // TOGGLE checks if it has that class and removes it if it does
    currentPlayer0El.classList.toggle('player--active')
    currentPlayer1El.classList.toggle('player--active')

    activePlayer = activePlayer === 0 ? 1 : 0
}


// Rolling dice function
btnRoll.addEventListener('click', function () {
    if (playing) {
        // 1. Generate random dice roll
        const dice = Math.trunc(Math.random() * 6) + 1

        // 2. Display dice
        diceEl.classList.remove('hidden')
        diceEl.src = `dice-${dice}.png`


        // 3. Check for rolled 1: if true ,switch to next player
        if (dice !== 1) {
            // Add dice to next player
            currentScore += dice
            document.getElementById(`current--${activePlayer}`).textContent = currentScore

        } else {
            // Switch player
            switchPlayer()
        }
    }
})

// Holding the score function
btnHold.addEventListener('click', function () {
    if (playing) {
        scores[activePlayer] += currentScore
        // 1. Add current score to active playerscores
        if (scores[activePlayer] >= 100) {
            playing = false
            diceEl.classList.add('hidden')
            document.getElementById(`score--${activePlayer}`).textContent = scores[activePlayer]
            document.querySelector(`.player--${activePlayer}`).classList.add('player--winner')
            document.querySelector(`.player--${activePlayer}`).classList.remove('player--active')


        }
        // Switching to the other player 
        else {
            // Switch player
            document.getElementById(`score--${activePlayer}`).textContent = scores[activePlayer]
            switchPlayer()
        }
    }
})

// Reset the game
btnNew.addEventListener('click', init)
