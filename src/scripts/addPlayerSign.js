// addPlayerSign.js
'use strict';

export default (firstTurnPlayer, player1, player2) => {
    if (firstTurnPlayer === player1) {
        player1.sign = 'x';
        player2.sign ='o';
    } else {
        player2.sign = 'x';
        player1.sign = 'o';
    }
}
