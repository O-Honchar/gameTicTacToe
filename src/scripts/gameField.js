import { Player, player1, player2 } from './classPlayer';
import { gameFieldDiv } from './index';
import displayScore from './displayScore';
import highlight from './highlight';
import highlightPlayer from './highlightPlayer.js';
import * as displayResults from './displayResults';

const cellArray = [];
const cellArrayLength = 9,
  gameFieldSideLength = 3,
  gameFieldSideDoubleLength = 6,
  rightTopItemNumber = 2,
  centralItemNumber = 4;
let movesNumber = 0;

const addSignToArr = (cellNum, sign) => {
  cellArray[cellNum - 1] = sign;
};

const addSignToCell = (e, sign) => {
  e.target.textContent = `${sign}`;
};

export const resetCellArray = () => {
  cellArray.length = 0;
};

export const resetField = () => {
  const NodesArray = [...gameFieldDiv.childNodes];
  NodesArray.forEach((node) => {
    node.innerHTML = '';
    highlight(false, node);
  });
};

const victoryHandler = () => {
  Player.active.increaseScore();
  gameFieldDiv.removeEventListener('click', gameFieldHandler);
  displayScore();
  displayResults.winning();
  movesNumber = 0;
};

const checkHorizontalVictory = () => {
  for (let i = 0; i < cellArrayLength; i = i + gameFieldSideLength) {
    if (
      cellArray[i] === cellArray[i + 1] &&
      cellArray[i + 1] === cellArray[i + rightTopItemNumber] &&
      cellArray[i]
    ) {
      const NodesArray = [...gameFieldDiv.childNodes];
      highlight(
        true,
        NodesArray[i],
        NodesArray[i + 1],
        NodesArray[i + rightTopItemNumber]
      );
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
      const NodesArray = [...gameFieldDiv.childNodes];
      highlight(
        true,
        NodesArray[i],
        NodesArray[i + gameFieldSideLength],
        NodesArray[i + gameFieldSideDoubleLength]
      );
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
    const NodesArray = [...gameFieldDiv.childNodes];
    highlight(
      true,
      NodesArray[0],
      NodesArray[centralItemNumber],
      NodesArray[cellArrayLength - 1]
    );
    victoryHandler();
  }
};
const checkSecondDiagonalVictory = () => {
  if (
    cellArray[rightTopItemNumber] === cellArray[centralItemNumber] &&
    cellArray[rightTopItemNumber] === cellArray[gameFieldSideDoubleLength] &&
    cellArray[rightTopItemNumber]
  ) {
    const NodesArray = [...gameFieldDiv.childNodes];
    highlight(
      true,
      NodesArray[rightTopItemNumber],
      NodesArray[centralItemNumber],
      NodesArray[gameFieldSideDoubleLength]
    );
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
  const cellNumber = e.target.dataset.cell;
  const cellDataFromArray = cellArray[cellNumber - 1];
  const checkIsItDataCell = e.target.hasAttribute('data-cell');

  if (checkIsItDataCell && !cellDataFromArray) {
    const sign = Player.active.sign;
    addSignToCell(e, sign);
    addSignToArr(cellNumber, sign);
    movesNumber++;
    checkResult();
    Player.toggleActive(player1, player2);
    highlightPlayer(Player.active, player1, player2);
  }
};
