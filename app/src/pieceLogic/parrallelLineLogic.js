import { isTakeable } from "../utils";

// could be done alot nicer with rethink
function parrallelLineLogic(
  { selectedSquare, boardArray, turn },
  countVal,
  isHorizontal
) {
  let legalSquareArray = [];
  if (isHorizontal) {
    for (
      let x = selectedSquare[1] + countVal;
      x < boardArray.length && x > -1;
      x = x + countVal
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
  } else {
    //for vertical logic
    for (
      let y = selectedSquare[0] + countVal;
      y < boardArray.length && y > -1;
      y = y + countVal
    ) {
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
  }

  return legalSquareArray;
}

export default parrallelLineLogic;
