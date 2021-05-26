// classPlayer
'use strict';

export class Player {
    // static active = '';

    constructor (name) {
        this._name = name;
        this._score = 0;
        this._sign = '';
    }

    static setActive(instance) {
        this.active = instance;
    }

    static toggleActive(instance1, instance2) {
        this.active = this.active === instance1 ? instance2 : instance1;
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

export const player1 = new Player('Player-1');
export const player2 = new Player('Player-2');
