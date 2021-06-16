import "./App.css";
import { useState } from "react";
import IMAGES from "./assets/index";
import { fenToBoard, boardToFen } from "./fenCodeHandler";
import genLegalSquareArray from "./pieceLogic/genLegalSquares";
import {
  checkSquareMatch,
  changeBoardArray,
  changeTurn /*, genEnPassantArray*/,
  getSquareClass,
} from "./utils";
import MovingPiece from "./components/MovingPiece";

let fenCode = "rnbqkbnr/pppppppp/r7/8/8/R7/PPPPPPPP/RNBQKBNR";

let mouseCurrentX = null;
let mouseCurrentY = null;

// let enPassantArray = [];
let castlingArray = [true, true, true, true];

function App() {
  const [boardArray, setBoardArray] = useState(fenToBoard(fenCode));
  const [mousePos, setMousePos] = useState([0, 0]);
  const [turn, setTurn] = useState("White");
  const [selectedSquare, setSelectedSquare] = useState(null);
  const [isMouseDown, setIsMouseDown] = useState(false);
  // const [isMouseDrag, setIsMouseDrag] = useState(false);
  const [legalSquareArray, setLegalSquareArray] = useState([]);

  function Board(props) {
    return props.boardArray.map((row, index) => {
      return <Row row={row} currentRow={index} />;
    });
  }

  function Column({ currentPiece, currentColumn, currentRow }) {
    function clickSquare() {
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

    const squareClass = getSquareClass(
      selectedSquare,
      legalSquareArray,
      currentRow,
      currentColumn
    );

    const currentSquareDragMatch =
      selectedSquare &&
      checkSquareMatch(currentRow, currentColumn, selectedSquare);

    return (
      <div
        className={squareClass}
        onMouseMove={(event) => {
          mouseCurrentX = event.clientX;
          mouseCurrentY = event.clientY;
        }}
        onMouseUp={(event) => {
          setIsMouseDown(false);
          clickSquare();
        }}
        onMouseDown={(event) => {
          setIsMouseDown(true);
          clickSquare();
          event.stopPropagation();
          event.preventDefault();
        }}
      >
        {currentPiece !== 0 && !currentSquareDragMatch ? (
          <img src={IMAGES[currentPiece]} alt="" />
        ) : (
          <img className="opaque" src={IMAGES[currentPiece]} alt="" />
        )}
      </div>
    );
  }

  // enPassantArray = genEnPassantArray(boardArray)
  function Row({ row, currentRow }) {
    return (
      <div>
        {row.map((piece, index) => {
          return (
            <Column
              currentPiece={piece}
              currentColumn={index}
              currentRow={currentRow}
            />
          );
        })}
      </div>
    );
  }
  //need something here, ie selectedPiece vs dragging
  return (
    <div className="App">
      <p>{turn} to move</p>
      <p>is mouse down: {isMouseDown ? "true" : "false"}</p>
      {isMouseDown && <MovingPiece x={mousePos[0]} y={mousePos[1]} />}
      <div
        className="chessboard"
        onMouseMove={(event) => {
          setMousePos([event.clientX, event.clientY]);
        }}
        onMouseLeave={(event) => {
          console.log("stop drag mouse left");
          setSelectedSquare(null);
          setIsMouseDown(false);
        }}
      >
        <Board boardArray={boardArray} />
      </div>
      <p>Fen Code:d {boardToFen(boardArray)}</p>
    </div>
  );
}

export default App;
