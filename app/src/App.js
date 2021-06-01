import "./App.css";
import { useState } from "react";
import IMAGES from "./assets/index.js";
import { fenToBoard, boardToFen } from "./fenCodeHandler.js";
import genLegalSquareArray from "./pieceLogic/genLegalSquares";

let fenCode = "rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR";

const PIECE_TYPES = {
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

function renderPiece(currentPiece) {
  if (currentPiece !== 0) {
    return <img src={PIECE_TYPES[currentPiece]} alt="" />;
  }
}

function checkSquareMatch(row, col, square) {
  if (row === square[0] && col === square[1]) {
    return true;
  }
  return false;
}

function changeBoardArray(
  boardArray,
  selectedSquare,
  currentRow,
  currentColumn
) {
  const movedPiece = boardArray[selectedSquare[0]][selectedSquare[1]];
  boardArray[selectedSquare[0]][selectedSquare[1]] = 0;
  boardArray[currentRow][currentColumn] = movedPiece;
  return boardArray;
}

function changeTurn(turn) {
  if (turn === "White") {
    return "Black";
  } else {
    return "White";
  }
}

function genEnPassantArray(boardArray) {
  let enPassantArray = [[], []];
  for (let i = 0; i < boardArray[0].length; i++) {
    enPassantArray[0].push(0);
    enPassantArray[1].push(0);
  }
  return enPassantArray;
}

function App() {
  const [boardArray, setBoardArray] = useState(fenToBoard(fenCode));
  const [castlingArray, setCastlingArray] = useState([true, true, true, true]);
  const [enPassantArray, setEnPassantArray] = useState(
    genEnPassantArray(boardArray)
  );
  const [turn, setTurn] = useState("White");
  const [selectedSquare, setSelectedSquare] = useState(null);
  const [legalSquareArray, setLegalSquareArray] = useState([]);

  function genBoard(boardArray) {
    return boardArray.map(iterateRows);
  }

  function iterateRows(row, currentRow) {
    function iterateColumns(currentPiece, currentColumn) {
      function clickSquare(event) {
        // on click square, either select correct coloured piece, deselct piece, or move piece to legal square
        //select piece
        if (
          selectedSquare === null &&
          ((turn === "White" &&
            currentPiece === currentPiece.toString().toUpperCase()) ||
            (turn === "Black" &&
              currentPiece === currentPiece.toString().toLowerCase()))
        ) {
          setSelectedSquare([currentRow, currentColumn]);
          setLegalSquareArray(genLegalSquareArray());
        } else if (selectedSquare !== null) {
          //deselct piece
          if (checkSquareMatch(currentRow, currentColumn, selectedSquare)) {
            setSelectedSquare(null);
          }
          //move piece
          if (
            currentPiece !== null &&
            legalSquareArray.find((value) =>
              checkSquareMatch(currentRow, currentColumn, value)
            )
          ) {
            setBoardArray(
              changeBoardArray(
                boardArray,
                selectedSquare,
                currentRow,
                currentColumn
              )
            );
            setTurn(changeTurn(turn));
            setSelectedSquare(null);
          }
        }
      }
      //displaying active square/ legal square
      let squareClass = "";
      if (selectedSquare !== null) {
        if (
          legalSquareArray.find((value) =>
            checkSquareMatch(currentRow, currentColumn, value)
          )
        ) {
          squareClass = "legalSquare";
        }
        if (checkSquareMatch(currentRow, currentColumn, selectedSquare)) {
          squareClass = "selectedSquare";
        }
      }

      return (
        <div className={squareClass} onClick={clickSquare}>
          {renderPiece(currentPiece)}
        </div>
      );
    }
    return <div>{row.map(iterateColumns)}</div>;
  }

  return (
    <div className="App">
      <p>{turn} to move</p>
      <div className="chessboard">{genBoard(boardArray)}</div>
    </div>
  );
}

export default App;
