'use strict';

// Selecting Elements
const score0El = document.getElementById('score--0')
const score1El = document.getElementById('score--1')
const currentScore0El = document.getElementById('curent--0')
const currentScore1El = document.getElementById('current--1')
const diceEl = document.querySelector('.dice')
const btnNew = document.querySelector('.btn--new')
const btnRoll = document.querySelector('.btn--roll')
const btnHold = document.querySelector('.btn--hold')

// Starting Conditions
score0El.textContent = 0
score1El.textContent = 0
diceEl.hidden = true

let currentScore = 0 

// Rolling Dice Functionality 
btnRoll.addEventListener('click', function() {
  // generate a random dice roll
  const dice = Math.trunc(Math.random() * 6) + 1
  console.log(dice)
  // display dice
  diceEl.hidden = false
  diceEl.src = `dice-${dice}.png`
  //check for rolled 1; if true switch to next player
  if (dice != 1) {
    currentScore += dice
  } else {

  }
})