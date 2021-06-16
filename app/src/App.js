import "./App.css";
import { useState } from "react";
import { fenToBoard, boardToFen } from "./fenCodeHandler";
import genLegalSquareArray from "./pieceLogic/genLegalSquares";
import { changeBoardArray, changeTurn, checkSquareMatch } from "./utils";
import MovingPiece from "./components/MovingPiece";
import Board from "./components/Board";

let fenCode = "rnbqkbnr/pppppppp/r7/8/8/R7/PPPPPPPP/RNBQKBNR";

let mouseCurrentX = null;
let mouseCurrentY = null;
let castlingArray = [true, true, true, true];

function App() {
  const [boardArray, setBoardArray] = useState(fenToBoard(fenCode));
  const [mousePos, setMousePos] = useState([0, 0]);
  const [turn, setTurn] = useState("White");
  const [selectedSquare, setSelectedSquare] = useState(null);
  const [isMouseDown, setIsMouseDown] = useState(false);
  const [legalSquareArray, setLegalSquareArray] = useState([]);

  // enPassantArray = genEnPassantArray(boardArray)

  function clickSquare({ currentPiece, currentRow, currentColumn }) {
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
      setLegalSquareArray(
        genLegalSquareArray(
          [currentRow, currentColumn],
          boardArray,
          turn,
          [] /*enPassantArray*/,
          castlingArray
        )
      );
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

  //need something here, ie selectedPiece vs dragging
  return (
    <div className="App">
      <p>{turn} to move</p>
      <p>is mouse down: {isMouseDown ? "true" : "false"}</p>
      {isMouseDown && selectedSquare && (
        <MovingPiece
          x={mousePos[0]}
          y={mousePos[1]}
          selectedSquare={selectedSquare}
          boardArray={boardArray}
        />
      )}
      <div
        className="chessboard"
        onMouseMove={(event) => {
          setMousePos([event.clientX, event.clientY]);
        }}
        onMouseLeave={(event) => {
          setSelectedSquare(null);
          setIsMouseDown(false);
        }}
      >
        <Board
          boardArray={boardArray}
          selectedSquare={selectedSquare}
          turn={turn}
          boardArray={boardArray}
          legalSquareArray={legalSquareArray}
          onMouseMove={({ clientX, clientY }) => {
            mouseCurrentX = clientX;
            mouseCurrentY = clientY;
          }}
          onMouseUp={(args) => {
            setIsMouseDown(false);
            clickSquare(args);
          }}
          onMouseDown={(args) => {
            setIsMouseDown(true);
            clickSquare(args);
          }}
        />
      </div>
      <p>Fen Code:d {boardToFen(boardArray)}</p>
    </div>
  );
}

export default App;
