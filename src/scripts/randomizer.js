// randomizer.js
'use strict';

import { player1, player2 } from './classPlayer';

export default (numberOfPlayers) => {
    const rnd = Math.floor(Math.random() * numberOfPlayers) + 1;
        if (rnd === 1) {
            return player1;
        } else {
            return player2;
        }
}
