function pawnLogic({ selectedSquare, boardArray, turn }, enPassantArray) {
  let turnDirection = 0;
  //set direction pawn moves
  if (turn === "White") {
    turnDirection = 1;
  } else {
    turnDirection = -1;
  }
  //pawn can always move one forward if nothing is in front
  let flowerArray = [];
  // this if statement only works for pawn moving 2 forward
  if (boardArray[selectedSquare[0] - turnDirection][selectedSquare[1]] === 0) {
    flowerArray.push([0, turnDirection]);
  }
  if (
    enPassantArray[selectedSquare[0]][selectedSquare[1]] === 1 &&
    boardArray[selectedSquare[0] - turnDirection][selectedSquare[1]] === 0
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
  return flowerArray;
}

export default pawnLogic;
