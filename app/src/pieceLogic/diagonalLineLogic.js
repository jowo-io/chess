import { isTakeable } from "../utils";

function diagonalLineLogic(
  { selectedSquare, boardArray, turn },
  horizontalCount,
  verticalCount
) {
  let legalSquareArray = [];
  for (
    let x = selectedSquare[1] + horizontalCount,
      y = selectedSquare[0] + verticalCount;
    x < boardArray.length && x > -1 && y < boardArray.length && y > -1;
    x = x + horizontalCount, y = y + verticalCount
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

export default diagonalLineLogic;