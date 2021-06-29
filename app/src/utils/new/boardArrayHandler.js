import { FEN_TO_PIECE_MAP } from "../../constants";

export function genBoardArray(fenCode) {
  let fenRows = fenCode.split("/");
  let board = [];
  for (let i = 0; i < fenRows.length; i++) {
    let row = [];
    var countNumber = 0;
    for (let j = 0; j < fenRows[i].length; j++) {
      if (!isNaN(fenRows[i][j])) {
        countNumber += fenRows[i][j];
      } else {
        if (countNumber !== "") {
          for (let k = 0; k < parseInt(countNumber); k++) {
            row.push(0);
          }
          countNumber = "";
        }
        const fen = fenRows[i][j];
        const pieceData = FEN_TO_PIECE_MAP[fen];
        row.push({
          fen: pieceData.FEN,
          piece: pieceData.PIECE,
          colour: pieceData.COLOUR,
          castleable: pieceData.CASTLEABLE,
          enpassantable: pieceData.ENPASSANTABLE,
        });
      }
    }
    if (countNumber !== "") {
      for (let k = 0; k < parseInt(countNumber); k++) {
        row.push(0);
      }
    }
    board.push(row);
  }
  console.log(board);
  logBoard(board);
  return board;
}

function logBoard(board) {
  board.forEach((row, rowIndex) => {
    const values = [];
    const styles = [];
    row.forEach((piece, pieceIndex) => {
      const background =
        (rowIndex % 2 === 0 && pieceIndex % 2 === 1) ||
        (rowIndex % 2 === 1 && pieceIndex % 2 === 0)
          ? "Chocolate"
          : "SandyBrown";
      const color = piece.colour === "WHITE" ? "white" : "black";
      values.push(piece ? `%c ${piece.fen} ` : "%c   ");
      styles.push(
        piece
          ? `font-weight: bold; background: ${background}; color: ${color}`
          : `background: ${background};`
      );
    });
    console.log(values.join(""), ...styles);
  });
}
