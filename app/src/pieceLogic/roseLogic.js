import { isOpposite, sumArray } from "../utils";
import { EMPTY_SQUARE } from "../constants";
import get from "lodash.get";

function roseLogic({ selectedPiece, selectedSquare, boardArray }, shiftArray) {
  const permutationArray = [
    [1, 1, true],
    [1, -1, true],
    [-1, 1, true],
    [-1, -1, true],
    [1, 1, false],
    [1, -1, false],
    [-1, 1, false],
    [-1, -1, false],
  ];
  let legalSquareArray = [];
  let currentSquare = selectedSquare;
  for (let j = 0; j < permutationArray.length; j++) {
    currentSquare = selectedSquare;
    for (let i = 0; i < shiftArray.length; i++) {
      currentSquare = sumArray(
        currentSquare,
        shiftArray[i],
        permutationArray[j][0],
        permutationArray[j][1],
        permutationArray[j][2]
      );
      if (
        currentSquare[0] < 0 ||
        currentSquare[0] > boardArray.length - 1 ||
        currentSquare[1] < 0 ||
        currentSquare[1] > boardArray.length - 1
      ) {
        break;
      } else {
        if (
          get(boardArray, [currentSquare[0], currentSquare[1]]) === EMPTY_SQUARE
        ) {
          legalSquareArray.push([currentSquare[0], currentSquare[1]]);
        } else if (
          isOpposite(
            get(boardArray, [currentSquare[0], currentSquare[1]]),
            selectedPiece.colour
          )
        ) {
          legalSquareArray.push([currentSquare[0], currentSquare[1], true]);
          break;
        } else {
          break;
        }
      }
    }
  }

  return legalSquareArray;
}

export default roseLogic;
