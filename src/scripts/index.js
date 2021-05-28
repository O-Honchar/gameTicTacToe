'use strict';

import './../styles/main.scss';

import { Player, player1, player2 } from './classPlayer.js';
import checkFirstTurn from './randomizer.js';
import addPlayerSign from './addPlayerSign.js';
import highlightPlayer from './highlightPlayer.js';
import displayScore from './displayScore.js';
import { resetCellArray, resetField, gameFieldHandler } from './gameField.js';
import * as displayResults from './displayResults.js';

export const gameFieldDiv = document.querySelector('#game-field');
export const player1Input = document.querySelector('#player1');
export const player2Input = document.querySelector('#player2');
export const player1Score = document.querySelector('#player1Score');
export const player2Score = document.querySelector('#player2Score');
export const results = document.querySelector('#results');

const numberOfPlayers = 2;
const start = document.querySelector('#start');
const reset = document.querySelector('#reset');

function player1InputHandler() {
  player1.name = player1Input.value.trim();
}

function player2InputHandler() {
  player2.name = player2Input.value.trim();
}

function startHandler() {
  const firstTurnPlayer = checkFirstTurn(numberOfPlayers);
  Player.setActive(firstTurnPlayer);
  addPlayerSign(firstTurnPlayer, player1, player2);
  highlightPlayer(Player.active, player1, player2);
  resetCellArray();
  resetField();
  displayResults.reset();
}

function resetHandler() {
  Player.setActive({});
  player1.resetScore();
  player2.resetScore();
  highlightPlayer(Player.active, player1, player2);
  displayScore();
  resetCellArray();
  resetField();
  displayResults.reset();
}

gameFieldDiv.addEventListener('click', gameFieldHandler);
player1Input.addEventListener('change', player1InputHandler);
player2Input.addEventListener('change', player2InputHandler);
start.addEventListener('click', startHandler);
reset.addEventListener('click', resetHandler);
