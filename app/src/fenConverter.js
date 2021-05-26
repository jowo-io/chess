export function fenCodeToBoard(fen) {
  let fenRows = fen.split("/");
  let board = [];
  for (let i in fenRows) {
    let row = [];
    for (let j in fenRows[i]) {
      if (!isNaN(fenRows[i][j])) {
        for (let step = 0; step < fenRows[i][j]; step++) {
          row.push(0);
        }
      } else {
        row.push(fenRows[i][j]);
      }
    }
    board.push(row);
  }
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
