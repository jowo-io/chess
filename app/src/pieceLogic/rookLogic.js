import { isTakeable } from "../utils";

function rookLogic(selectedSquare, boardArray, turn) {
  let legalSquareArray = [];
  //checks along x-axis to right
  for (
    let x = selectedSquare[1] + 1;
    x < boardArray[selectedSquare[0]].length;
    x++
  ) {
    let currentPiece = boardArray[selectedSquare[0]][x];
    if (currentPiece === 0) {
      legalSquareArray.push([selectedSquare[0], x]);
    } else if (isTakeable(currentPiece, turn)) {
      legalSquareArray.push([selectedSquare[0], x]);
      break;
    } else {
      break;
    }
  }
  //checks along x-axis to left
  for (let x = selectedSquare[1] - 1; x > -1; x--) {
    let currentPiece = boardArray[selectedSquare[0]][x];
    if (currentPiece === 0) {
      legalSquareArray.push([selectedSquare[0], x]);
    } else if (isTakeable(currentPiece, turn)) {
      legalSquareArray.push([selectedSquare[0], x]);
      break;
    } else {
      break;
    }
  }
  //checks up along y-axis
  for (let y = selectedSquare[0] - 1; y > -1; y--) {
    let currentPiece = boardArray[y][selectedSquare[1]];
    if (currentPiece === 0) {
      legalSquareArray.push([y, selectedSquare[1]]);
    } else if (isTakeable(currentPiece, turn)) {
      legalSquareArray.push([y, selectedSquare[1]]);
      break;
    } else {
      break;
    }
  }
  //checks down along y-axis
  for (let y = selectedSquare[0] + 1; y < boardArray.length; y++) {
    let currentPiece = boardArray[y][selectedSquare[1]];
    if (currentPiece === 0) {
      legalSquareArray.push([y, selectedSquare[1]]);
    } else if (isTakeable(currentPiece, turn)) {
      legalSquareArray.push([y, selectedSquare[1]]);
      break;
    } else {
      break;
    }
  }

  return legalSquareArray;
}

export default rookLogic;
