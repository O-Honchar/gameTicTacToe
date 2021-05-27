import { Player, player1, player2 } from './classPlayer';

const cellArray = [];

export const addSignToArr = (cellNum, sign) => {
  if (!cellArray[cellNum - 1]) {
    cellArray[cellNum - 1] = sign;
  }
};

export const addSignToCell = (e, cellNum, sign) => {
  if (!cellArray[cellNum - 1]) {
    e.target.textContent = `${sign}`;
  }
};

export const resetCellArray = () => {
  cellArray.length = 0;
};

export const gameFieldHandler = (e) => {
  const sign = Player.active.sign;
  const cellNumber = e.target.dataset.cell;

  addSignToCell(e, cellNumber, sign);
  addSignToArr(cellNumber, sign);

  Player.toggleActive(player1, player2);
};
