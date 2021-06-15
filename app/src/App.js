import "./App.css";
import { useState } from "react";
import IMAGES from "./assets/index";
import { fenToBoard, boardToFen } from "./fenCodeHandler";
import genLegalSquareArray from "./pieceLogic/genLegalSquares";
import {
  checkDragOrClick,
  checkSquareMatch,
  changeBoardArray,
  changeTurn /*, genEnPassantArray*/,
  getSquareClass,
} from "./utils";
import MovingPiece from "./components/MovingPiece";

let fenCode = "rnbqkbnr/pppppppp/r7/8/8/R7/PPPPPPPP/RNBQKBNR";

let timeoutId = null;
let mouseStartX = null;
let mouseStartY = null;
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
  const [isMouseDrag, setIsMouseDrag] = useState(false);
  const [legalSquareArray, setLegalSquareArray] = useState([]);

  function Board(props) {
    return props.boardArray.map((row, index) => {
      return <Row row={row} currentRow={index} />;
    });
  }

  // enPassantArray = genEnPassantArray(boardArray)
  function Row({ row, currentRow }) {
    function Column({ currentPiece, currentColumn }) {
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
        isMouseDrag &&
        selectedSquare &&
        checkSquareMatch(currentRow, currentColumn, selectedSquare);

      return (
        <div
          className={squareClass}
          onMouseMove={(event) => {
            mouseCurrentX = event.clientX;
            mouseCurrentY = event.clientY;
            if (
              checkDragOrClick(
                mouseCurrentX,
                mouseStartX,
                mouseCurrentY,
                mouseStartY
              ) &&
              isMouseDown
            ) {
              if (!isMouseDrag) {
                clickSquare();
              }
              setIsMouseDrag(true);
            }
          }}
          onMouseUp={(event) => {
            clearTimeout(timeoutId);
            timeoutId = null;
            setIsMouseDrag(false);
            setIsMouseDown(false);
            setSelectedSquare(null);
            if (isMouseDown) {
              if (isMouseDrag) {
                clickSquare();
                console.log("square stop drag", { currentRow, currentColumn });
              } else {
                clickSquare();
              }
            }
          }}
          onMouseDown={(event) => {
            setIsMouseDown(true);
            mouseStartX = event.clientX;
            mouseStartY = event.clientY;
            timeoutId = setTimeout(() => {
              clickSquare();
              setIsMouseDrag(true);
            }, 150);
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
    return (
      <div>
        {row.map((piece, index) => {
          return <Column currentPiece={piece} currentColumn={index} />;
        })}
      </div>
    );
  }
  // boardArray.map((row, index) => {
  //   return <Row row={row} currentRow={index} />;
  // })

  return (
    <div className="App">
      <p>{turn} to move</p>
      <p>is mouse dragging: {isMouseDrag ? "true" : "false"}</p>
      <p>is mouse down: {isMouseDown ? "true" : "false"}</p>
      {isMouseDrag && <MovingPiece x={mousePos[0]} y={mousePos[1]} />}
      <div
        className="chessboard"
        onMouseMove={(event) => {
          setMousePos([event.clientX, event.clientY]);
        }}
        onMouseLeave={(event) => {
          console.log("stop drag mouse left");
          clearTimeout(timeoutId);
          timeoutId = null;
          setSelectedSquare(null);
          setIsMouseDrag(false);
          setIsMouseDown(false);
        }}
      >
        <Board boardArray={boardArray} />
      </div>
    </div>
  );
}

export default App;
