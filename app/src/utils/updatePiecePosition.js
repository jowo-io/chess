import get from "lodash.get";
import set from "lodash.set";
import { EMPTY_SQUARE, PIECES, PAWN_DIRECTION } from "../constants";
import { checkIsTakeable } from "../utils";

function updatePiecePosition({
  newBoardArray,
  selectedSquare,
  currentRow,
  currentColumn,
  turn,
  movedPiece,
}) {
  set(newBoardArray, [selectedSquare[0], selectedSquare[1]], EMPTY_SQUARE);
  set(newBoardArray, [currentRow, currentColumn], movedPiece);
  //need execption for enPassant
  if (movedPiece.piece === PIECES.PAWN) {
    for (
      let i = currentRow;
      i < newBoardArray.length && i > -1;
      i = i + PAWN_DIRECTION[turn]
    ) {
      if (
        get(newBoardArray, [i, currentColumn], {}).piece === PIECES.PAWN &&
        checkIsTakeable(newBoardArray[i][currentColumn], turn)
      ) {
        newBoardArray[i][currentColumn] = EMPTY_SQUARE;
      }
    }
  }
  return newBoardArray;
}

export default updatePiecePosition;
