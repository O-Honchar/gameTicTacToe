'use strict';

import './../styles/main.scss';
import {Player, player1, player2} from './classPlayer';
// import checkFirstTurn from './randomizer.js'
// import random from './randomize';

const player1Input = document.querySelector('#player1');
const player2Input = document.querySelector('#player2');

function player1InputHandler() {
    player1.name = player1Input.value.trim();
    console.log('player1: ', player1);
}

function player2InputHandler() {
    player2.name = player2Input.value.trim();
    console.log('player2: ', player2);
}

player1Input.addEventListener('change', player1InputHandler);
player2Input.addEventListener('change', player2InputHandler);
