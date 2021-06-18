import { turnToTurnDirection } from "../utils";

function pawnLogic({ selectedSquare, boardArray, turn }, enPassantArray) {
  //set direction pawn moves
  const turnDirection = turnToTurnDirection(turn);
  //pawn can always move one forward if nothing is in front
  let flowerArray = [];
  // this if statement only works for pawn moving 2 forward
  if (boardArray[selectedSquare[0] - turnDirection][selectedSquare[1]] === 0) {
    flowerArray.push([0, turnDirection]);
  }
  if (
    enPassantArray[selectedSquare[0]][selectedSquare[1]] === 1 &&
    boardArray[selectedSquare[0] - turnDirection][selectedSquare[1]] === 0 &&
    boardArray[selectedSquare[0] - 2 * turnDirection][selectedSquare[1]] === 0
  ) {
    flowerArray.push([0, 2 * turnDirection]);
  }
  if (
    boardArray[selectedSquare[0] - turnDirection][selectedSquare[1] - 1] !== 0
  ) {
    flowerArray.push([1, turnDirection]);
  }
  if (
    boardArray[selectedSquare[0] - turnDirection][selectedSquare[1] + 1] !== 0
  ) {
    flowerArray.push([-1, turnDirection]);
  }
  if (enPassantArray[selectedSquare[0]][selectedSquare[1] + 1] === 3) {
    flowerArray.push([-1, turnDirection]);
  }
  if (enPassantArray[selectedSquare[0]][selectedSquare[1] - 1] === 3) {
    flowerArray.push([1, turnDirection]);
  }
  return flowerArray;
}

export default pawnLogic;
