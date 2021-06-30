// 0 - not a king/rook, 1 - king never moved, 2 - rook never moved or taken,

export function updateCastlingArray(
  boardArray,
  selectedSquare,
  currentRow,
  currentColumn,
  castlingArray
) {
  function settingZeros(movedRow, movedColumn, isKing) {
    if (castlingArray[movedRow][movedColumn] !== 0) {
      if (isKing) {
        for (let i = 0; i < castlingArray.length; i++) {
          castlingArray[movedRow][i] = 0;
        }
      } else {
        castlingArray[movedRow][movedColumn] = 0;
      }
    }
  }
  if (
    boardArray[selectedSquare[0]][selectedSquare[1]] === "k" ||
    boardArray[selectedSquare[0]][selectedSquare[1]] === "K"
  ) {
    settingZeros(currentRow, currentColumn, true);
  } else {
    if (
      boardArray[selectedSquare[0]][selectedSquare[1]] === "r" ||
      boardArray[selectedSquare[0]][selectedSquare[1]] === "R"
    ) {
      settingZeros(selectedSquare[0], selectedSquare[1], false);
    }
    if (
      boardArray[currentRow][currentColumn] === "r" ||
      boardArray[currentRow][currentColumn] === "R"
    ) {
      settingZeros(currentRow, currentColumn, false);
    }
  }
  console.log(castlingArray);
  return castlingArray;
}
