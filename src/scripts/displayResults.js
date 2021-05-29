// displayResults.js
'use strict';

import { results } from './index.js';
import { Player } from './classPlayer.js';

export const winning = () => {
    results.innerHTML = `${Player.active.name} wins! His sign is ${Player.active.sign}.`;
}

export const draw = () => {
    results.innerHTML = 'Draw! Try again.';
}

export const reset = () => {
    while(results.firstChild) {
        results.removeChild(results.firstChild);
    }
};
