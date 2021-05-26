const gameFieldDiv = document.querySelector('#game-field');

const gameFieldDivHandler = (e) => {
  const cellNumber = e.target.dataset.cell;
  e.target.textContent = 'X';
  console.log(cellNumber);
};

gameFieldDiv.addEventListener('click', gameFieldDivHandler);

export default gameFieldDivHandler;
