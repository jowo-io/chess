import { isTakeable } from "../utils";

function bishopLogic(selectedSquare, boardArray, turn) {
  let legalSquareArray = [];
  //down and right
  for (
    let x = selectedSquare[1] + 1, y = selectedSquare[0] + 1;
    x < boardArray[selectedSquare[0]].length && y < boardArray.length;
    x++, y++
  ) {
    let currentPiece = boardArray[y][x];
    if (currentPiece === 0) {
      legalSquareArray.push([y, x]);
    } else if (isTakeable(currentPiece, turn)) {
      legalSquareArray.push([y, x]);
      break;
    } else {
      break;
    }
  }
  //down and left
  for (
    let x = selectedSquare[1] - 1, y = selectedSquare[0] + 1;
    x > -1 && y < boardArray.length;
    x--, y++
  ) {
    let currentPiece = boardArray[y][x];
    if (currentPiece === 0) {
      legalSquareArray.push([y, x]);
    } else if (isTakeable(currentPiece, turn)) {
      legalSquareArray.push([y, x]);
      break;
    } else {
      break;
    }
  }
  //up right
  for (
    let x = selectedSquare[1] + 1, y = selectedSquare[0] - 1;
    x < boardArray[selectedSquare[0]].length && y > -1;
    x++, y--
  ) {
    let currentPiece = boardArray[y][x];
    if (currentPiece === 0) {
      legalSquareArray.push([y, x]);
    } else if (isTakeable(currentPiece, turn)) {
      legalSquareArray.push([y, x]);
      break;
    } else {
      break;
    }
  }
  //up left
  for (
    let x = selectedSquare[1] - 1, y = selectedSquare[0] - 1;
    x > -1 && y > -1;
    x--, y--
  ) {
    let currentPiece = boardArray[y][x];
    if (currentPiece === 0) {
      legalSquareArray.push([y, x]);
    } else if (isTakeable(currentPiece, turn)) {
      legalSquareArray.push([y, x]);
      break;
    } else {
      break;
    }
  }
  return legalSquareArray;
}

export default bishopLogic;
