import { Player } from './classPlayer';

export default (e) => {
  const cellNumber = e.target.dataset.cell;
  e.target.textContent = 'X';
  console.log(cellNumber);
  console.log(Player.active);
};
