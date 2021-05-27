import { Player, player1, player2 } from './classPlayer';
import { gameFieldDiv } from './index';
// const gameFieldDiv = document.querySelector('#game-field');

const cellArray = [];

const addSignToArr = (cellNum, sign) => {
  if (!cellArray[cellNum - 1]) {
    cellArray[cellNum - 1] = sign;
  }
};

const addSignToCell = (e, cellNum, sign) => {
  if (!cellArray[cellNum - 1]) {
    e.target.textContent = `${sign}`;
  }
};

export const resetCellArray = () => {
  cellArray.length = 0;
};

export const resetField = () => {
  const NodesArray = [...gameFieldDiv.childNodes];
  NodesArray.forEach((node) => {
    node.innerHTML = '';
  });
};

export const gameFieldHandler = (e) => {
  const sign = Player.active.sign;
  const cellNumber = e.target.dataset.cell;

  addSignToCell(e, cellNumber, sign);
  addSignToArr(cellNumber, sign);

  Player.toggleActive(player1, player2);
};
