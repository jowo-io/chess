import IMAGES from "../assets/index";
import { checkSquareMatch, getSquareClass } from "../utils";

function Column({
  currentPiece,
  currentColumn,
  currentRow,
  selectedSquare,
  turn,
  boardArray,
  legalSquareArray,
  onMouseMove,
  onMouseUp,
  onMouseDown,
}) {
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
        onMouseMove({
          clientX: event.clientX,
          clientY: event.clientY,
        });
      }}
      onMouseUp={(event) => {
        onMouseUp({ currentPiece, currentRow, currentColumn });
      }}
      onMouseDown={(event) => {
        onMouseDown({ currentPiece, currentRow, currentColumn });
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

export default Column;
