import cloneDeep from "lodash.clonedeep";
import get from "lodash.get";
import set from "lodash.set";
import {
  fenInitialStateMap,
  EMPTY_SQUARE,
  PIECES,
  PAWN_DIRECTION,
} from "../constants";
import { turnToTurnDirection, checkIsTakeable } from "../utils";

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
            row.push(EMPTY_SQUARE);
          }
          countNumber = "";
        }
        const fen = fenRows[i][j];
        const initialState = fenInitialStateMap[fen];
        row.push({
          fen: initialState.fen,
          piece: initialState.piece,
          colour: initialState.colour,
          isCastleable: initialState.isCastleable,
          enpassantable: initialState.enpassantable,
        });
      }
    }
    if (countNumber !== "") {
      for (let k = 0; k < parseInt(countNumber); k++) {
        row.push(EMPTY_SQUARE);
      }
    }
    board.push(row);
  }
  console.log(board);
  logBoard(board);
  return board;
}

export function updateBoardArray(
  boardArray,
  selectedSquare,
  currentRow,
  currentColumn,
  turn
) {
  const newBoardArray = cloneDeep(boardArray);
  const movedPiece = newBoardArray[selectedSquare[0]][selectedSquare[1]];
  set(newBoardArray, [selectedSquare[0], selectedSquare[1]], EMPTY_SQUARE);
  set(newBoardArray, [currentRow, currentColumn], movedPiece);
  //need execption for enPassant
  if (movedPiece.piece === PIECES.PAWN) {
    for (
      let i = currentRow;
      i < newBoardArray.length && i > -1;
      i = i + PAWN_DIRECTION[turn]
    ) {
      if (
        get(newBoardArray, [i, currentColumn], {}).piece === PIECES.PAWN &&
        checkIsTakeable(newBoardArray[i][currentColumn], turn)
      ) {
        newBoardArray[i][currentColumn] = EMPTY_SQUARE;
      }
    }
  }
  return newBoardArray;
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
