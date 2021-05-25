// classPlayer
'use strict';

export default class {
    constructor (name) {
        this._name = name;
        this._score = 0;
        this._sign = '';
    }

    get name() {
        return this._name;
    }

    get score() {
        return this._score;
    }

    get sign() {
        return this._sign;
    }

    set name(newName) {
        this._name = newName;
    }

    set sign(newSign) {
        this._sign = newSign;
    }

    increaseScore() {
        this._score++;
    }

    resetScore() {
        this._score = 0;
    }
}