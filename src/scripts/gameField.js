import { Player, player1, player2 } from './classPlayer';

export default (e) => {
  // const cellNumber = e.target.dataset.cell;
  console.log(Player.active);
  e.target.textContent = `${Player.active.sign}`;
  // console.log(cellNumber);

  Player.toggleActive(player1, player2);
};
