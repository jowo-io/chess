import "./App.css";
import { useState } from "react";
import genLegalSquareArray from "./pieceLogic/genLegalSquares";
import { changeTurn, checkSquareMatch, checkIsTakeable } from "./utils";
import MovingPiece from "./components/MovingPiece";
import Board from "./components/Board";
import { genBoardArray, updateBoardArray } from "./utils/boardArrayManager";
import { COLOURS } from "./constants";

// let fenCode =
//   "r1r5k6r/pppp12/16/16/16/16/16/16/16/16/16/16/16/8O7/PPPP12/R1R5K6R";
//"rnmgboaqkcjbgmnr/pppppppppppppppp/16/16/16/16/16/16/16/16/16/16/16/8O7/PPPPPPPPPPPPPPPP/RNMGBOAQKCJBGMNR";
let fenCode = "rnbqkbnr/pppppppp/8/8/3Q4/8/PPPPPPPP/RNBQKBNR";

let mouseCurrentX = null;
let mouseCurrentY = null;
let castlingArray = [true, true, true, true];

function App() {
  const [mousePos, setMousePos] = useState([0, 0]);
  const [turn, setTurn] = useState(COLOURS.WHITE);
  const [selectedSquare, setSelectedSquare] = useState(null);
  const [isMouseDown, setIsMouseDown] = useState(false);
  const [legalSquareArray, setLegalSquareArray] = useState([]);
  const [boardArray, setBoardArray] = useState(genBoardArray(fenCode));
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
    } else if (wasMouseDown && !checkIsTakeable(currentPiece, turn)) {
      setSelectedSquare([currentRow, currentColumn]);
      setLegalSquareArray(
        genLegalSquareArray([currentRow, currentColumn], boardArray, turn)
      );
    } else if (
      selectedSquare &&
      legalSquareArray.find((value) =>
        checkSquareMatch(currentRow, currentColumn, value)
      )
    ) {
      //update castling array
      // setCastlingArray(
      //   updateCastlingArray(
      //     boardArray,
      //     selectedSquare,
      //     currentRow,
      //     currentColumn,
      //     castlingArray
      //   )
      // );
      // //update enPassant array
      // setEnPassantArray(
      //   updateEnPassantArray(
      //     boardArray,
      //     selectedSquare,
      //     currentRow,
      //     currentColumn,
      //     enPassantArray
      //   )
      // );
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
    </div>
  );
}

export default App;
