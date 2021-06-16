export function checkSquareMatch(row, col, square) {
  if (row === square[0] && col === square[1]) {
    return true;
  }
  return false;
}

export function changeBoardArray(
  boardArray,
  selectedSquare,
  currentRow,
  currentColumn
) {
  const movedPiece = boardArray[selectedSquare[0]][selectedSquare[1]];
  boardArray[selectedSquare[0]][selectedSquare[1]] = 0;
  boardArray[currentRow][currentColumn] = movedPiece;
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

export function isTakeable(currentPiece, turn) {
  if (
    (currentPiece !== currentPiece.toLowerCase() && turn === "Black") ||
    (currentPiece === currentPiece.toLowerCase() && turn === "White")
  ) {
    return true;
  } else {
    return false;
  }
}
// export function genEnPassantArray(boardArray) {
//   let enPassantArray = [[], []];
//   for (let i = 0; i < boardArray[0].length; i++) {
//     enPassantArray[0].push(0);
//     enPassantArray[1].push(0);
//   }
//   return enPassantArray;
// }
