'use strict';

// Selecting Elements
const score0El = document.getElementById('score--0')
const score1El = document.getElementById('score--1')
const diceEl = document.querySelector('.dice')
const btnNew = document.querySelector('.btn--new')
const btnRoll = document.querySelector('.btn--roll')
const btnHold = document.querySelector('.btn--hold')

// Starting Conditions
score0El.textContent = 0
score1El.textContent = 0
diceEl.hidden = true

// Rolling Dice Functionality 
btnRoll.addEventListener('click', function() {
  // generate a random dice roll
  const dice = Math.trunc(Math.random() * 6) + 1
  // display dice
  diceEl.hidden = false
  //check for rolled 1; if true switch to next player
})