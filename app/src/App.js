import { useState } from "react";
import "./App.css";
import IMAGES from "./assets/index.js";
import { fenCodeToBoard, boardToFenCode } from "./fenConverter.js";

//let fenCode = "8/8/8/8/8/8/8/8";
let fenCode = "rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR";
// let board = fenCodeToBoard(fenCode);
// console.log(board);

const pieceTypes = {
  r: IMAGES.blackRook,
  n: IMAGES.blackKnight,
  b: IMAGES.blackBishop,
  q: IMAGES.blackQueen,
  k: IMAGES.blackKing,
  p: IMAGES.blackPawn,
  R: IMAGES.whiteRook,
  N: IMAGES.whiteKnight,
  B: IMAGES.whiteBishop,
  Q: IMAGES.whiteQueen,
  K: IMAGES.whiteKing,
  P: IMAGES.whitePawn,
};

function updateBoard(board, activePiece, rowIndex, columnIndex) {
  const newBoard = board;
  console.log(activePiece[0], activePiece[1], rowIndex, columnIndex);
  for (let i in board) return newBoard;
}

function App() {
  const [activePiece, setActivePiece] = useState(null);
  const [board, setBoard] = useState(fenCodeToBoard(fenCode));

  //Functions for displaying board
  function renderPiece(piece) {
    if (piece !== 0) {
      return <img src={pieceTypes[piece]} alt="" />;
    }
  }
  function iterateRows(row, rowIndex) {
    function iterateColumns(piece, columnIndex) {
      function clickSquare(event) {
        if (piece === 0) {
          if (activePiece !== null) {
            setBoard(updateBoard(board, activePiece, rowIndex, columnIndex));
          }
          return;
        }

        if (
          activePiece !== null &&
          rowIndex === activePiece[0] &&
          columnIndex === activePiece[1]
        ) {
          setActivePiece(null);
        } else {
          setActivePiece([rowIndex, columnIndex]);
        }
      }
      let selectedClass = "";
      if (
        activePiece !== null &&
        rowIndex === activePiece[0] &&
        columnIndex === activePiece[1]
      ) {
        selectedClass = "selectedSquare";
      }
      return (
        <div className={selectedClass} onClick={clickSquare}>
          {renderPiece(piece, rowIndex, columnIndex)}
        </div>
      );
    }
    return <div>{row.map(iterateColumns)}</div>;
  }
  function iterateBoard(board) {
    return board.map(iterateRows);
  }

  return (
    <div className="App">
      <h1>Chess Board! {activePiece}</h1>
      <div className="chessboard">{iterateBoard(board)}</div>
      <p>FEN code is {fenCode} w KQkq</p>
    </div>
  );
}

export default App;
