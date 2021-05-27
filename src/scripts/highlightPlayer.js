//highlightPlayer.js
'use strict';

import highlight from './highlight.js';
import { player1Input, player2Input } from './index.js';

export default (activePlayer, player1, player2) => {
    if (activePlayer === player1) {
        highlight(true, player1Input);
        highlight(false, player2Input);
    } else if (activePlayer === player2) {
        highlight(true, player2Input);
        highlight(false, player1Input);
    } else {
        highlight(false, player1Input, player2Input);
    }
}
