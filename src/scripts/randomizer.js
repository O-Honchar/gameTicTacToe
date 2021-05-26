// randomizer.js
'use strict';

import { player1, player2 } from './classPlayer';

export default (min = 1, max = 2) => {
    const rnd = Math.floor(Math.random() * (max - min + 1) ) + min;
        if (rnd === 1) {
            return player1;
        } else {
            return player2;
        }
}
