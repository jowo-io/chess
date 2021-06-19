import { turnToTurnDirection, isTakeable } from "../utils";

//make it not flower array
function pawnLogic({ selectedSquare, boardArray, turn }, enPassantArray) {
  //set direction pawn moves
  const turnDirection = turnToTurnDirection(turn);
  //pawn can always move one forward if nothing is in front
  let legalSquareArray = [];
  // move forward one
  if (boardArray[selectedSquare[0] - turnDirection][selectedSquare[1]] === 0) {
    legalSquareArray.push([
      selectedSquare[0] - turnDirection,
      selectedSquare[1],
    ]);
  }
  if (enPassantArray[selectedSquare[0]][selectedSquare[1]] === 1) {
    let halfWay = null;
    if (turn === "White") {
      halfWay = Math.floor(boardArray.length / 2) - 1;
    } else {
      halfWay = Math.floor(boardArray.length / 2);
    }
    // first big move
    for (
      let i = selectedSquare[0] - 2 * turnDirection;
      i !== halfWay;
      i = i - turnDirection
    ) {
      if (boardArray[i][selectedSquare[1]] === 0) {
        legalSquareArray.push([i, selectedSquare[1]]);
      } else {
        break;
      }
    }
  }
  // check if enPassant possible
  if (selectedSquare[0] < boardArray.length - 3 && selectedSquare[0] > 2) {
    for (
      let j = selectedSquare[0];
      j < boardArray.length && j > -1;
      j = j + turnDirection
    ) {
      if (enPassantArray[j][selectedSquare[1] - 1] === 3) {
        legalSquareArray.push([
          selectedSquare[0] - turnDirection,
          selectedSquare[1] - 1,
        ]);
        break;
      }
      if (enPassantArray[j][selectedSquare[1] + 1] === 3) {
        legalSquareArray.push([
          selectedSquare[0] - turnDirection,
          selectedSquare[1] + 1,
        ]);
        break;
      }
    }
  }
  //check if take diagnol
  if (
    boardArray[selectedSquare[0] - turnDirection][selectedSquare[1] + 1] !==
      0 &&
    isTakeable(
      boardArray[selectedSquare[0] - turnDirection][selectedSquare[1] + 1],
      turn
    )
  ) {
    legalSquareArray.push([
      selectedSquare[0] - turnDirection,
      selectedSquare[1] + 1,
    ]);
  }

  if (
    boardArray[selectedSquare[0] - turnDirection][selectedSquare[1] - 1] !==
      0 &&
    isTakeable(
      boardArray[selectedSquare[0] - turnDirection][selectedSquare[1] - 1],
      turn
    )
  ) {
    legalSquareArray.push([
      selectedSquare[0] - turnDirection,
      selectedSquare[1] - 1,
    ]);
  }

  return legalSquareArray;
}

export default pawnLogic;