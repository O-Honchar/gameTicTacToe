'use strict';

import './../styles/main.scss';
import Player from './classPlayer';
// import random from './randomize';

const player1 = new Player('Vasya');
console.log('player1: ', player1);

player1.increaseScore();
player1.increaseScore();
player1.resetScore();
console.log('player1: ', player1);
