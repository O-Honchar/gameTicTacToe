'use strict';

import './../styles/main.scss';

import { gameFieldHandler } from './gameField';
import { Player, player1, player2 } from './classPlayer';
import checkFirstTurn from './randomizer.js';
import addPlayerSign from './addPlayerSign.js';
import highlightPlayer from './highlightPlayer.js'
// import random from './randomize';

export const gameFieldDiv = document.querySelector('#game-field');
export const player1Input = document.querySelector('#player1');
export const player2Input = document.querySelector('#player2');
const start = document.querySelector('#start');

export default function returnGameFieldDiv() {
  return gameFieldDiv;
}

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
  // console.log('firstTurnPlayer: ', firstTurnPlayer);
  Player.setActive(firstTurnPlayer);
  addPlayerSign(firstTurnPlayer, player1, player2);
  highlightPlayer(Player.active, player1, player2);
  // console.log('Player.active: ', Player.active);
  // Player.toggleActive(player1, player2);
  // console.log('Player.toggleActive: ', Player.active);
}

gameFieldDiv.addEventListener('click', gameFieldHandler);
player1Input.addEventListener('change', player1InputHandler);
player2Input.addEventListener('change', player2InputHandler);
start.addEventListener('click', startHandler);
