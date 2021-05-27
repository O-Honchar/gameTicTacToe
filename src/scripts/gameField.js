import { Player, player1, player2 } from './classPlayer';

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

// const resetCellArray = () => {
//   cellArray.length = 0;
// };

export default (e) => {
  const sign = Player.active.sign;
  const cellNumber = e.target.dataset.cell;

  addSignToCell(e, cellNumber, sign);
  addSignToArr(cellNumber, sign);
  console.log(cellArray);

  Player.toggleActive(player1, player2);
};
