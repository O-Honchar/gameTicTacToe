// classPlayer
'use strict';

export default class {
    // static active = '';

    constructor (name) {
        this._name = name;
        this._score = 0;
        this._sign = '';
    }

    static setActive(value) {
        this.active = value;
    }

    static toggleActive() {
        this.active = this.active === 'player1' ? 'player2' : 'player1';
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