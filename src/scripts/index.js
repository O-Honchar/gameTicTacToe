'use strict';

import './../styles/main.scss';
import Player from './classPlayer';
import checkFirstTurn from './randomizer.js'
// import random from './randomize';

const player1Input = document.querySelector('#player1');
const player2Input = document.querySelector('#player2');
const player1 = new Player(player1Input.placeholder.trim());
const player2 = new Player(player2Input.placeholder.trim());
const start = document.querySelector('#start');
const min = 1;
const max = 2;

function player1InputHandler() {
    player1.name = player1Input.value.trim();
    console.log('player1: ', player1);
}

function player2InputHandler() {
    player2.name = player2Input.value.trim();
    console.log('player2: ', player2);
}

function startHandler() {
    checkFirstTurn(min, max);    
}

player1Input.addEventListener('change', player1InputHandler);
player2Input.addEventListener('change', player2InputHandler);
start.addEventListener('click', startHandler);