import { isTakeable } from "../utils";

function knightStyleLogic(selectedSquare, boardArray, turn, patternArray) {
  let legalSquareArray = [[5, 2]];
  for (let i; i > patternArray.length; i++) {
    let currentPiece = null;
    try {
      currentPiece =
        boardArray[selectedSquare[1] - patternArray[i][1]][
          selectedSquare[0] - patternArray[i][0]
        ];
    } finally {
      currentPiece = null;
    }
    if (currentPiece) {
      console.log(currentPiece);
    } else {
      console.log("null");
    }
  }
  return legalSquareArray;
}
export default knightStyleLogic;
