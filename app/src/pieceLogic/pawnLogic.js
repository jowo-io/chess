import { turnToTurnDirection, checkIsTakeable } from "../utils";
import get from "lodash.get";
import { PAWN_STATES, EMPTY_SQUARE, COLOURS } from "../constants";
//a cluttered mess
function pawnLogic({ selectedPiece, selectedSquare, boardArray }) {
  //set direction pawn moves
  const turnDirection = turnToTurnDirection(selectedPiece.colour);
  //pawn can always move one forward if nothing is in front
  let legalSquareArray = [];
  // move forward one
  if (
    get(boardArray, [selectedSquare[0] - turnDirection, selectedSquare[1]]) ===
    EMPTY_SQUARE
  ) {
    legalSquareArray.push([
      selectedSquare[0] - turnDirection,
      selectedSquare[1],
      false,
    ]);
  }
  if (
    get(boardArray, [selectedSquare[0], selectedSquare[1]]).enpassantable ===
    PAWN_STATES.CAN_LEAP
  ) {
    let halfWay = 0;
    if (selectedPiece.colour === COLOURS.BLACK) {
      halfWay = Math.floor(boardArray.length / 2);
    } else {
      halfWay = Math.floor(boardArray.length / 2) - 1;
    }
    for (
      let i = selectedSquare[0] - 1 * turnDirection;
      i !== halfWay;
      i = i - turnDirection
    ) {
      console.log("i:", i);
      if (get(boardArray, [i, selectedSquare[1]]) === EMPTY_SQUARE) {
        legalSquareArray.push([i, selectedSquare[1]]);
      } else {
        break;
      }
    }
  }
  // check if enPassant possible doesn't work atm
  if (selectedSquare[0] < boardArray.length - 3 && selectedSquare[0] > 2) {
    for (
      let j = selectedSquare[0];
      j < boardArray.length && j > -1;
      j = j + turnDirection
    ) {
      if (
        get(boardArray, [j, selectedSquare[1] - 1]) === PAWN_STATES.JUST_LEAPED
      ) {
        legalSquareArray.push([
          selectedSquare[0] - turnDirection,
          selectedSquare[1] - 1,
          true,
        ]);
        break;
      }
      if (
        get(boardArray, [j, selectedSquare[1] + 1]) === PAWN_STATES.JUST_LEAPED
      ) {
        legalSquareArray.push([
          selectedSquare[0] - turnDirection,
          selectedSquare[1] + 1,
          true,
        ]);
        break;
      }
    }
  }
  //check if take diagnol
  if (
    get(boardArray, [
      selectedSquare[0] - turnDirection,
      selectedSquare[1] + 1,
    ]) !== EMPTY_SQUARE &&
    checkIsTakeable(
      get(boardArray, [
        selectedSquare[0] - turnDirection,
        selectedSquare[1] + 1,
      ]),
      selectedPiece.colour
    )
  ) {
    legalSquareArray.push([
      selectedSquare[0] - turnDirection,
      selectedSquare[1] + 1,
      true,
    ]);
  }

  if (
    boardArray[selectedSquare[0] - turnDirection][selectedSquare[1] - 1] &&
    boardArray[selectedSquare[0] - turnDirection][selectedSquare[1] - 1] !==
      0 &&
    checkIsTakeable(
      boardArray[selectedSquare[0] - turnDirection][selectedSquare[1] - 1],
      selectedPiece.colour
    )
  ) {
    legalSquareArray.push([
      selectedSquare[0] - turnDirection,
      selectedSquare[1] - 1,
      true,
    ]);
  }

  return legalSquareArray;
}

export default pawnLogic;
