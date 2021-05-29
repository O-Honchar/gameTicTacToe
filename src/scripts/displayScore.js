// displayScore.js
'use strict';

import { player1Score, player2Score } from './index.js';
import { player1, player2 } from './classPlayer.js';

export default () => {
  player1Score.innerHTML = player1.score;
  player2Score.innerHTML = player2.score;
};
