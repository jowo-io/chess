import { checkIsTakeable } from "../utils";
import { EMPTY_SQUARE } from "../constants";
import get from "lodash.get";

function flowerLogic(
  { selectedPiece, selectedSquare, boardArray },
  patternArray
) {
  let legalSquareArray = [];
  for (let i = 0; i < patternArray.length; i++) {
    // do it by setting x pos and y pos for each thign and testign if within range
    let currentXCoords = selectedSquare[0] - patternArray[i][1];
    let currentYCoords = selectedSquare[1] - patternArray[i][0];
    if (
      currentXCoords > -1 &&
      currentXCoords < boardArray.length &&
      currentYCoords > -1 &&
      currentYCoords < boardArray.length &&
      checkIsTakeable(
        boardArray[currentXCoords][currentYCoords],
        selectedPiece.colour
      )
    ) {
      if (get(boardArray, [currentXCoords, currentYCoords]) === EMPTY_SQUARE) {
        legalSquareArray.push([currentXCoords, currentYCoords, false]);
      } else {
        legalSquareArray.push([currentXCoords, currentYCoords, true]);
      }
    }
  }
  return legalSquareArray;
}
export default flowerLogic;
