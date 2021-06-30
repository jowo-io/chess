import { checkIsTakeable } from "../utils";
import get from "lodash.get";
import { EMPTY_SQUARE } from "../constants";

function lineLogic(
  { selectedPiece, selectedSquare, boardArray },
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
    let currentPiece = get(boardArray, [y, x]);
    if (currentPiece === EMPTY_SQUARE) {
      legalSquareArray.push([y, x, false]);
    } else if (checkIsTakeable(currentPiece, selectedPiece.colour)) {
      legalSquareArray.push([y, x, true]);
      break;
    } else {
      break;
    }
  }
  return legalSquareArray;
}

export default lineLogic;
