// randomizer.js
'use strict';

export default (min, max) => {
    const rnd = Math.floor(Math.random() * (max - min + 1) ) + min;
        return `player${rnd}`;
}