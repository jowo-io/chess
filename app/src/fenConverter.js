export function fenCodeToBoard(fen) {
  let fenRows = fen.split("/");
  let board = [];
  for (let i = 0; i < fenRows.length; i++) {
    let row = [];
    var countNumber = "";
    for (let j = 0; j < fenRows[i].length; j++) {
      if (!isNaN(fenRows[i][j])) {
        countNumber += fenRows[i][j];
      } else {
        console.log(countNumber);
        if (countNumber !== "") {
          for (let k = 0; k < parseInt(countNumber); k++) {
            console.log("?");
            row.push(0);
          }
        }
        row.push(fenRows[i][j]);
      }
    }
    if (countNumber !== "") {
      for (let k = 0; k < parseInt(countNumber); k++) {
        console.log("?");
        row.push(0);
      }
    }
    board.push(row);
  }
  console.log(board);
  return board;
}

export function boardToFenCode(board) {
  var fen = "";
  var count = 0;
  for (let i in board) {
    for (let j in board[i]) {
      if (board[i][j] === 0) {
        count += 1;
      } else {
        if (count !== 0) fen += count;
        fen += board[i][j];
        count = 0;
      }
    }
    if (count !== 0) fen += count;
    count = 0;
    fen += "/";
  }
  return fen.substring(0, fen.length - 1);
}
