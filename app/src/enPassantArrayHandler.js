// 0 - not a pawn, 1 - never moved pawn, 2 - moved but not en Passanably, 3 - moved last turn

export function genEnPassantArray(boardArray) {
  let enPassantArray = [];
  for (let i = 0; i < boardArray.length; i++) {
    let row = [];
    for (let j = 0; j < boardArray.length; j++) {
      if (boardArray[i][j] === "p" || boardArray[i][j] === "P") {
        row.push(1);
      } else {
        row.push(0);
      }
    }
    enPassantArray.push(row);
  }
  return enPassantArray;
}

export function updateEnPassantArray(
  boardArray,
  selectedSquare,
  currentRow,
  currentColumn,
  enPassantArray
) {
  for (let i = 0; i < enPassantArray.length; i++) {
    for (let j = 0; j < enPassantArray.length; j++) {
      if (enPassantArray[i][j] === 3) {
        enPassantArray[i][j] = 2;
      }
    }
  }
  if (boardArray[selectedSquare[0]][selectedSquare[1]].toLowerCase() === "p") {
    //two senarious either was big first move or wasnt
    if (Math.abs(selectedSquare[0] - currentRow) > 1) {
      enPassantArray[selectedSquare[0]][selectedSquare[1]] = 0;
      enPassantArray[currentRow][currentColumn] = 3;
    } else {
      enPassantArray[selectedSquare[0]][selectedSquare[1]] = 0;
      enPassantArray[currentRow][currentColumn] = 2;
    }
  }
  console.log(enPassantArray);
  return enPassantArray;
}
