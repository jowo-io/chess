import { COLOURS } from "../constants";

export function checkSquareMatch(row, col, square) {
  if (row === square[0] && col === square[1]) {
    return true;
  }
  return false;
}

export function isOpposite(piece, turn) {
  if (
    (piece !== piece.toLowerCase() && turn === COLOURS.BLACK) ||
    (piece === piece.toLowerCase() && turn === COLOURS.WHITE)
  ) {
    return true;
  } else {
    return false;
  }
}
export function sumArray(array1, array2, multiply1, multiply2, isFlip) {
  if (isFlip) {
    return [
      array1[0] + multiply1 * array2[1],
      array1[1] + multiply2 * array2[0],
    ];
  } else {
    return [
      array1[0] + multiply1 * array2[0],
      array1[1] + multiply2 * array2[1],
    ];
  }
}

export function checkSquareMatchTemp(row, col, square) {
  if (row === square[0] && col === square[1] && square[2]) {
    return true;
  }
  return false;
}

export function checkIsTakeable(currentPiece, turn) {
  return (
    !currentPiece ||
    (currentPiece.colour === COLOURS.WHITE && turn === COLOURS.BLACK) ||
    (currentPiece.colour === COLOURS.BLACK && turn === COLOURS.WHITE)
  );
}

export function turnToTurnDirection(turn) {
  if (turn === COLOURS.WHITE) {
    return 1;
  } else {
    return -1;
  }
}

export function changeTurn(turn) {
  if (turn === COLOURS.WHITE) {
    return COLOURS.BLACK;
  } else {
    return COLOURS.WHITE;
  }
}

export function getSquareInfo(
  selectedSquare,
  legalSquareArray,
  currentRow,
  currentColumn
) {
  let className = "";
  let isTakeable = false;
  let isLegal = false;
  let isCheck = false;
  let isSelected = false;

  if (selectedSquare !== null) {
    if (
      legalSquareArray.find((value) =>
        checkSquareMatch(currentRow, currentColumn, value)
      )
    ) {
      if (
        legalSquareArray.find((value) =>
          checkSquareMatchTemp(currentRow, currentColumn, value)
        )
      ) {
        isTakeable = true;
      } else {
        isLegal = true;
      }
    }
    if (checkSquareMatch(currentRow, currentColumn, selectedSquare)) {
      className = "selectedSquare";
      isSelected = true;
    }
  }

  return {
    className,
    isTakeable,
    isLegal,
    isCheck,
    isSelected,
  };
}
