import { checkIsTakeable } from "../utils";
import get from "lodash.get";
import set from "lodash.set";
import { PIECES, MOVE_STATES } from "../constants";

function lineLogic(
  { selectedPiece, selectedSquare, newBoardArray },
  horizontalCount,
  verticalCount
) {
  for (
    let x = selectedSquare[1] + horizontalCount,
      y = selectedSquare[0] + verticalCount;
    x < newBoardArray.length && x > -1 && y < newBoardArray.length && y > -1;
    x = x + horizontalCount, y = y + verticalCount
  ) {
    let currentPiece = get(newBoardArray, [y, x]);
    if (currentPiece.piece === PIECES.EMPTY) {
      set(newBoardArray, [y, x, "moveState"], MOVE_STATES.LEGAL_EMPTY);
    } else if (checkIsTakeable(currentPiece, selectedPiece.colour)) {
      set(newBoardArray, [y, x, "moveState"], MOVE_STATES.LEGAL_TAKING);
      break;
    } else {
      break;
    }
  }
}

export default lineLogic;
