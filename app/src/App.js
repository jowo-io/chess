import { useState } from "react";
import "./App.css";
import IMAGES from "./assets/index.js";
import { fenCodeToBoard, boardToFenCode } from "./fenConverter.js";

//let fenCode = "8/8/8/8/8/8/8/8";
let fenCode =
  "rnmgbraqkcjbgmnr/pppppppppppppppp/16/16/16/16/16/16/16/16/16/RNMGBRAQKCJBGMNR/PPPPPPPPPPPPPPPP";
// let board = fenCodeToBoard(fenCode);
// console.log(board);

const pieceTypes = {
  r: IMAGES.blackRook,
  n: IMAGES.blackKnight,
  b: IMAGES.blackBishop,
  q: IMAGES.blackQueen,
  k: IMAGES.blackKing,
  p: IMAGES.blackPawn,
  m: IMAGES.blackMoon,
  g: IMAGES.blackGrave,
  j: IMAGES.blackJester,
  a: IMAGES.blackArchbishop,
  c: IMAGES.blackChancellor,
  o: IMAGES.blackRose,
  R: IMAGES.whiteRook,
  N: IMAGES.whiteKnight,
  B: IMAGES.whiteBishop,
  Q: IMAGES.whiteQueen,
  K: IMAGES.whiteKing,
  P: IMAGES.whitePawn,
  M: IMAGES.whiteMoon,
  G: IMAGES.whiteGrave,
  J: IMAGES.whiteJester,
  A: IMAGES.whiteArchbishop,
  C: IMAGES.whiteChancellor,
  O: IMAGES.whiteRose,
};

function updateBoard(board, activePiece, rowIndex, columnIndex) {
  let movedPiece = board[activePiece[0]][activePiece[1]];
  board[activePiece[0]][activePiece[1]] = 0;
  board[rowIndex][columnIndex] = movedPiece;
  return board;
}

function changeTurn(turn) {
  if (turn === "White") {
    return "Black";
  } else {
    return "White";
  }
}

function App() {
  const [activePiece, setActivePiece] = useState(null);
  const [board, setBoard] = useState(fenCodeToBoard(fenCode));
  const [turn, setTurn] = useState("White");

  //Functions for displaying board
  function renderPiece(piece) {
    if (piece !== 0) {
      return <img src={pieceTypes[piece]} alt="" />;
    }
  }
  function iterateRows(row, rowIndex) {
    function iterateColumns(piece, columnIndex) {
      function dragSquare(event) {
        console.log("dragged");
      }
      function clickSquare(event) {
        //
        if (
          piece !== null &&
          activePiece !== null &&
          (rowIndex !== activePiece[0] || columnIndex !== activePiece[1])
        ) {
          setBoard(updateBoard(board, activePiece, rowIndex, columnIndex));
          setTurn(changeTurn(turn));
          setActivePiece(null); //this doesn't work here for some reason
        }
        //deselect square
        if (
          activePiece !== null &&
          rowIndex === activePiece[0] &&
          columnIndex === activePiece[1]
        ) {
          setActivePiece(null);
          //displays active square
        } else if (
          //sets active square, if piece is correct color and not empty
          ((activePiece !== null || piece !== 0) &&
            turn === "White" &&
            piece === piece.toString().toUpperCase()) ||
          (turn === "Black" && piece === piece.toString().toLowerCase())
        ) {
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
        <div
          className={selectedClass}
          onClick={clickSquare}
          ondragstart={dragSquare}
        >
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
      <h1>Chess Board</h1>
      <p>{turn} to move </p>
      <div className="chessboard">{iterateBoard(board)}</div>
      <p>FEN code is {boardToFenCode(board)}</p>
    </div>
  );
}

export default App;
