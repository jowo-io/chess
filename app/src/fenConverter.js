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
  return "hello";
}
