function iterateRows(row) {
  row.forEach(iteratePieces)
}

function iteratePieces(piece) {
  console.log(piece)
}

function iterateBoard(board) {
  board.forEach(iterateRows)
}

let board = [
  [0, 1, 0, 0],
  [0, 0, 0, 0],
  [0, 0, 0, 0],
  [0, 1, 0, 0]
];

iterateBoard(board);
