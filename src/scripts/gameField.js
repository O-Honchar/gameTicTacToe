import { Player, player1, player2 } from './classPlayer';
import { gameFieldDiv } from './index';

const cellArray = [];
const cellArrayLength = 9,
  gameFieldSideLength = 3;
cellArray.length = cellArrayLength;

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
  for (let i = 0; i < cellArrayLength; i++) {
    cellArray.push(i);
  }
};

export const resetField = () => {
  const NodesArray = [...gameFieldDiv.childNodes];
  NodesArray.forEach((node) => {
    node.innerHTML = '';
  });
};

const checkResult = () => {
  // ================== horizontally
  for (let i = 0; i < cellArrayLength; i = i + gameFieldSideLength) {
    if (
      cellArray[i] === cellArray[i + 1] &&
      cellArray[i + 1] === cellArray[i + 2] &&
      cellArray[i] === cellArray[i + 2] &&
      cellArray[i]
    ) {
      console.log(`we find victory on row # ${i / gameFieldSideLength}`);
      console.log(
        `Player ${Player.active.name} win! His sign is ${Player.active.sign}`
      );
      break;
    }
  }

  // ================== vertically
  console.log('========================');
  for (let i = 0; i < gameFieldSideLength; i++) {
    if (
      cellArray[i] === cellArray[i + 3] &&
      cellArray[i + 3] === cellArray[i + 6] &&
      cellArray[i] === cellArray[i + 6] &&
      cellArray[i]
    ) {
      console.log(`we find victory on col # ${i}`);
      console.log(
        `Player ${Player.active.name} win! His sign is ${Player.active.sign}`
      );
      break;
    }
  }

  // ================== diagonally

  console.log(cellArray);
};

export const gameFieldHandler = (e) => {
  const sign = Player.active.sign;
  const cellNumber = e.target.dataset.cell;

  addSignToCell(e, cellNumber, sign);
  addSignToArr(cellNumber, sign);
  checkResult();
  Player.toggleActive(player1, player2);
};
