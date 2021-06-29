// 0 - not a king/rook, 1 - king never moved, 2 - rook never moved or taken,

export function genCastlingArray(boardArray) {
  let castlingArray = [];
  for (let i = 0; i < boardArray.length; i++) {
    let row = [];
    for (let j = 0; j < boardArray.length; j++) {
      if (boardArray[i][j] === "k" || boardArray[i][j] === "K") {
        row.push(1);
      } else if (boardArray[i][j] === "r" || boardArray[i][j] === "R") {
        row.push(2);
      } else {
        row.push(0);
      }
    }
    castlingArray.push(row);
  }
  return castlingArray;
}

export function updateCastlingArray(
  movedRow,
  movedColumn,
  isKing,
  castlingArray
) {
  if (castlingArray[movedRow][movedColumn] !== 0) {
    if (isKing) {
      for (let i = 0; i < castlingArray.length; i++) {
        castlingArray[movedRow][i] = 0;
      }
    } else {
      castlingArray[movedRow][movedColumn] = 0;
    }
  }
  return castlingArray;
}
