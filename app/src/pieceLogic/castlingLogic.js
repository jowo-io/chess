import get from "lodash.get";
import { PIECES } from "../constants";

function castlingLogic({ selectedSquare, boardArray, turn }) {
  let legalSquareArray = [];
  function countToRook(turnDirection) {
    for (
      let i = selectedSquare[1] + turnDirection;
      -1 < i && i < boardArray.length;
      i = i + turnDirection
    ) {
      if (get(boardArray, [selectedSquare[0], i, "isCastleable"])) {
        //king moves to exact centre or centre plus one away from starting pos
        console.log("castleable");
        if (((selectedSquare[1] + i) / 2) % 1 === 0) {
          legalSquareArray.push([
            selectedSquare[0],
            (selectedSquare[1] + i) / 2,
          ]);
        } else {
          legalSquareArray.push([
            selectedSquare[0],
            Math.floor((selectedSquare[1] + i) / 2) + 1,
          ]);
        }

        break;
      } else if (
        get(boardArray, [selectedSquare[0], i, "piece"]) !== PIECES.EMPTY
      ) {
        break;
      }
    }
  }
  console.log(get(boardArray, [selectedSquare[0], selectedSquare[1]]));
  if (get(boardArray, [selectedSquare[0], selectedSquare[1]], "isCastleable")) {
    countToRook(1);
    countToRook(-1);
  }

  return legalSquareArray;
}

export default castlingLogic;
