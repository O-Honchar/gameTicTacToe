import { Player, player1, player2 } from './classPlayer';
import { gameFieldDiv } from './index';
import displayScore from './displayScore';
import * as displayResults from './displayResults';

const cellArray = [];
const cellArrayLength = 9,
  gameFieldSideLength = 3,
  gameFieldSideDoubleLength = 6,
  rightTopItemNumber = 2,
  centralItemNumber = 4;
let movesNumber = 0;

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

const victoryHandler = () => {
  console.log(
    `Player ${Player.active.name} win! His sign is ${Player.active.sign}`
  );
  Player.active.increaseScore();
  console.log(Player.active.score);
  displayScore();
  displayResults.winning();
};

const checkHorizontalVictory = () => {
  for (let i = 0; i < cellArrayLength; i = i + gameFieldSideLength) {
    if (
      cellArray[i] === cellArray[i + 1] &&
      cellArray[i + 1] === cellArray[i + rightTopItemNumber] &&
      cellArray[i]
    ) {
      console.log(`we find victory on row # ${i / gameFieldSideLength}`);
      victoryHandler();
      break;
    }
  }
};
const checkVerticalVictory = () => {
  for (let i = 0; i < gameFieldSideLength; i++) {
    if (
      cellArray[i] === cellArray[i + gameFieldSideLength] &&
      cellArray[i + gameFieldSideLength] ===
        cellArray[i + gameFieldSideDoubleLength] &&
      cellArray[i]
    ) {
      console.log(`we find victory on col # ${i}`);
      victoryHandler();
      break;
    }
  }
};
const checkFirstDiagonalVictory = () => {
  if (
    cellArray[0] === cellArray[centralItemNumber] &&
    cellArray[0] === cellArray[cellArrayLength - 1] &&
    cellArray[0]
  ) {
    console.log(`we find victory on diag # lt-rb`);
    victoryHandler();
  }
};
const checkSecondDiagonalVictory = () => {
  if (
    cellArray[rightTopItemNumber] === cellArray[centralItemNumber] &&
    cellArray[rightTopItemNumber] === cellArray[gameFieldSideDoubleLength] &&
    cellArray[rightTopItemNumber]
  ) {
    console.log(`we find victory on diag # rt-lb`);
    victoryHandler();
  }
};
const checkDraw = () => {
  if (movesNumber === cellArrayLength) {
    displayResults.draw();
  }
};

const checkResult = () => {
  checkHorizontalVictory();
  checkVerticalVictory();
  checkFirstDiagonalVictory();
  checkSecondDiagonalVictory();
  checkDraw();
};

export const gameFieldHandler = (e) => {
  const sign = Player.active.sign;
  const cellNumber = e.target.dataset.cell;
  addSignToCell(e, cellNumber, sign);
  addSignToArr(cellNumber, sign);
  movesNumber++;
  checkResult();
  Player.toggleActive(player1, player2);
};
