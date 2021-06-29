import "./App.css";
import { useState } from "react";
import { fenToBoard, boardToFen } from "./fenCodeHandler";
import genLegalSquareArray from "./pieceLogic/genLegalSquares";
import {
  genEnPassantArray,
  updateEnPassantArray,
} from "./enPassantArrayHandler";
import {
  genCastlingArray,
  updateCastlingArray,
} from "./castlingArrayHandler.js";
import {
  updateBoardArray,
  changeTurn,
  checkSquareMatch,
  isTakeable,
} from "./utils";
import MovingPiece from "./components/MovingPiece";
import Board from "./components/Board";

let fenCode = "r1r5k6r/16/16/16/16/16/16/16/16/16/16/16/16/8O7/16/R1R5K6R";
//"rnmgboaqkcjbgmnr/pppppppppppppppp/16/16/16/16/16/16/16/16/16/16/16/8O7/PPPPPPPPPPPPPPPP/RNMGBOAQKCJBGMNR";
// let fenCode = "rnbqkbnr/pppppppp/8/8/3Q4/8/PPPPPPPP/RNBQKBNR";

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
  const [enPassantArray, setEnPassantArray] = useState(
    genEnPassantArray(boardArray)
  );
  const [castlingArray, setCastlingArray] = useState(
    genCastlingArray(boardArray)
  );
  function clickSquare(
    { currentPiece, currentRow, currentColumn },
    wasMouseDown
  ) {
    if (
      selectedSquare &&
      checkSquareMatch(currentRow, currentColumn, selectedSquare) &&
      wasMouseDown
    ) {
      setSelectedSquare(null);
    } else if (wasMouseDown && !isTakeable(currentPiece, turn)) {
      setSelectedSquare([currentRow, currentColumn]);
      setLegalSquareArray(
        genLegalSquareArray(
          [currentRow, currentColumn],
          boardArray,
          turn,
          enPassantArray,
          castlingArray
        )
      );
      //move piece
    } else if (
      selectedSquare &&
      legalSquareArray.find((value) =>
        checkSquareMatch(currentRow, currentColumn, value)
      )
    ) {
      //update castling array
      if (
        boardArray[selectedSquare[0]][selectedSquare[1]] === "k" ||
        boardArray[selectedSquare[0]][selectedSquare[1]] === "K"
      ) {
        setCastlingArray(
          updateCastlingArray(
            selectedSquare[0],
            selectedSquare[1],
            true,
            castlingArray
          )
        );
      } else {
        if (
          boardArray[selectedSquare[0]][selectedSquare[1]] === "r" ||
          boardArray[selectedSquare[0]][selectedSquare[1]] === "R"
        ) {
          setCastlingArray(
            updateCastlingArray(
              selectedSquare[0],
              selectedSquare[1],
              false,
              castlingArray
            )
          );
        }
        if (
          boardArray[currentRow][currentColumn] === "r" ||
          boardArray[currentRow][currentColumn] === "R"
        ) {
          setCastlingArray(
            updateCastlingArray(currentRow, currentColumn, false, castlingArray)
          );
        }
      }
      //update enPassant array
      setEnPassantArray(
        updateEnPassantArray(
          boardArray,
          selectedSquare,
          currentRow,
          currentColumn,
          enPassantArray
        )
      );
      //update board
      setBoardArray(
        updateBoardArray(
          boardArray,
          selectedSquare,
          currentRow,
          currentColumn,
          turn
        )
      );
      //swap turn
      setTurn(changeTurn(turn));
      //deselect square
      setSelectedSquare(null);
    }
  }

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
          legalSquareArray={legalSquareArray}
          onMouseMove={({ clientX, clientY }) => {
            mouseCurrentX = clientX;
            mouseCurrentY = clientY;
          }}
          onMouseUp={(args) => {
            setIsMouseDown(false);
            clickSquare(args, false);
          }}
          onMouseDown={(args) => {
            setIsMouseDown(true);
            clickSquare(args, true);
          }}
        />
      </div>
      <p>Fen Code: {boardToFen(boardArray)}</p>
    </div>
  );
}

export default App;
