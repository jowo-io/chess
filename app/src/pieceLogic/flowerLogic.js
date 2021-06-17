import { isTakeable } from "../utils";

function flowerLogic({ selectedSquare, boardArray, turn }, patternArray) {
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
      isTakeable(boardArray[currentXCoords][currentYCoords], turn)
    ) {
      legalSquareArray.push([currentXCoords, currentYCoords]);
    }
  }
  return legalSquareArray;
}
export default flowerLogic;
