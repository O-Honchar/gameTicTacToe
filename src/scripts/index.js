'use strict';

import './../styles/main.scss';

import { Player, player1, player2 } from './classPlayer.js';
import checkFirstTurn from './randomizer.js';
import addPlayerSign from './addPlayerSign.js';
import highlightPlayer from './highlightPlayer.js';
import { resetCellArray, resetField, gameFieldHandler } from './gameField.js';

export const gameFieldDiv = document.querySelector('#game-field');
export const player1Input = document.querySelector('#player1');
export const player2Input = document.querySelector('#player2');
const start = document.querySelector('#start');
const reset = document.querySelector('#reset');

function player1InputHandler() {
  player1.name = player1Input.value.trim();
  console.log('player1: ', player1);
}

function player2InputHandler() {
  player2.name = player2Input.value.trim();
  console.log('player2: ', player2);
}

function startHandler() {
  const firstTurnPlayer = checkFirstTurn();
  Player.setActive(firstTurnPlayer);
  addPlayerSign(firstTurnPlayer, player1, player2);
  highlightPlayer(Player.active, player1, player2);
}

function resetHandler() {
  Player.setActive({});
  player1.resetScore();
  player2.resetScore();
  highlightPlayer(Player.active, player1, player2);
  resetCellArray();
  resetField();
  gameFieldDiv.removeEventListener('click', gameFieldHandler);
}

gameFieldDiv.addEventListener('click', gameFieldHandler);
player1Input.addEventListener('change', player1InputHandler);
player2Input.addEventListener('change', player2InputHandler);
start.addEventListener('click', startHandler);
reset.addEventListener('click', resetHandler);
