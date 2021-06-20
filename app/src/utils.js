export function checkSquareMatch(row, col, square) {
  if (row === square[0] && col === square[1]) {
    return true;
  }
  return false;
}

export function isTakeable(currentPiece, turn) {
  if (currentPiece === 0) {
    return true;
  } else if (
    (currentPiece !== currentPiece.toLowerCase() && turn === "Black") ||
    (currentPiece === currentPiece.toLowerCase() && turn === "White")
  ) {
    return true;
  } else {
    return false;
  }
}
export function turnToTurnDirection(turn) {
  let turnDirection = null;
  if (turn === "White") {
    turnDirection = 1;
  } else {
    turnDirection = -1;
  }
  return turnDirection;
}

export function updateBoardArray(
  boardArray,
  selectedSquare,
  currentRow,
  currentColumn,
  turn
) {
  const movedPiece = boardArray[selectedSquare[0]][selectedSquare[1]];
  boardArray[selectedSquare[0]][selectedSquare[1]] = 0;
  boardArray[currentRow][currentColumn] = movedPiece;
  //need execption for enPassant
  const turnDirection = turnToTurnDirection(turn);
  if (movedPiece.toLowerCase() === "p") {
    for (
      let i = currentRow;
      i < boardArray.length && i > -1;
      i = i + turnDirection
    ) {
      if (
        (boardArray[i][currentColumn] === "p" ||
          boardArray[i][currentColumn] === "P") &&
        isTakeable(boardArray[i][currentColumn], turn)
      ) {
        boardArray[i][currentColumn] = 0;
      }
    }
  }
  return boardArray;
}

export function changeTurn(turn) {
  if (turn === "White") {
    return "Black";
  } else {
    return "White";
  }
}

export function getSquareClass(
  selectedSquare,
  legalSquareArray,
  currentRow,
  currentColumn
) {
  if (selectedSquare !== null) {
    if (
      legalSquareArray.find((value) =>
        checkSquareMatch(currentRow, currentColumn, value)
      )
    ) {
      return "legalSquare";
    }
    if (checkSquareMatch(currentRow, currentColumn, selectedSquare)) {
      return "selectedSquare";
    }
  }
  return "";
}

export function getValueFrom3dArray(x, y, array) {
  try {
    return array[x][y];
  } catch (error) {
    console.error(error);
    return null;
  }
}
