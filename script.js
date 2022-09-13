'use strict';

// Selecting Elements
const player0El = document.querySelector('.player--0')
const player1El = document.querySelector('.player--1')
const score0El = document.getElementById('score--0')
const score1El = document.getElementById('score--1')
const currentScore0El = document.getElementById('current--0')
const currentScore1El = document.getElementById('current--1')
const diceEl = document.querySelector('.dice')
const btnNew = document.querySelector('.btn--new')
const btnRoll = document.querySelector('.btn--roll')
const btnHold = document.querySelector('.btn--hold')

// Starting Conditions
let scores, currentScore, activePlayer, playing

// Init
const init = function () {
  scores = [0, 0];
  currentScore = 0; 
  activePlayer = 0;
  playing = true;

  score0El.textContent = 0;
  score1El.textContent = 0;
  currentScore0El.textContent = 0;
  currentScore1El.textContent = 0;

  diceEl.hidden = true

  player0El.classList.remove('player--winner')
  player1El.classList.remove('player--winner')
  player0El.classList.add('player--active')
  player1El.classList.remove('player--active')
}

init()
// fucntions
const switchPlayer = function () {
  document.getElementById(`current--${activePlayer}`).textContent = 0
    activePlayer = activePlayer === 0 ? 1 : 0
    currentScore = 0
    player0El.classList.toggle('player--active')
    player1El.classList.toggle('player--active')
}


// Rolling Dice Functionality 
btnRoll.addEventListener('click', function() {
  // generate a random dice roll
  if (playing) {
    const dice = Math.trunc(Math.random() * 6) + 1
    // display dice
    diceEl.hidden = false
    diceEl.src = `dice-${dice}.png`
    //check for rolled 1; if true switch to next player
    if (dice != 1) {
      currentScore += dice
      document.getElementById(`current--${activePlayer}`).textContent = currentScore
    } else {
      switchPlayer()
    }
  }
})

// Event Listeners

btnHold.addEventListener('click', function () {
  // add current score to active player
  if (playing) {
    scores[activePlayer] += currentScore;
  
    // check if player score is >= 100
    document.getElementById(`score--${activePlayer}`).textContent = scores[activePlayer]
    // finish game 
    if (scores[activePlayer] >= 20) {
      playing = false
      diceEl.hidden = true
      document.querySelector(`.player--${activePlayer}`).classList.add('player--winner')
      document.querySelector(`.player--${activePlayer}`).classList.remove('player--active')
    } else {
      switchPlayer()
    }
    // switch to the next player
  }
})

btnNew.addEventListener('click', init)