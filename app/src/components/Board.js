import Row from "./Row";

function Board({
  boardArray,
  currentPiece,
  selectedSquare,
  turn,
  legalSquareArray,
  onMouseMove,
  onMouseUp,
  onMouseDown,
}) {
  return boardArray.map((rowArray, index) => {
    return (
      <Row
        rowArray={rowArray}
        currentRow={index}
        selectedSquare={selectedSquare}
        turn={turn}
        boardArray={boardArray}
        legalSquareArray={legalSquareArray}
        onMouseMove={onMouseMove}
        onMouseUp={onMouseUp}
        onMouseDown={onMouseDown}
        key={index}
      />
    );
  });
}
export default Board;
