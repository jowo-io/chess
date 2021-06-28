import PIECE_IMAGES from "../constants/pieceImages";
import { checkSquareMatch, getSquareInfo } from "../utils";
import movableHighlight from "../assets/movableHighlight.png";
import takeableHighlight from "../assets/takeableHighlight.png";

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
  const { className, isTakeable, isLegal, isCheck, isSelected } = getSquareInfo(
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
      className={className}
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
      <div className="squareHighlight">
        {isTakeable && <img src={takeableHighlight} />}
        {isLegal && <img src={movableHighlight} />}
      </div>
      {currentPiece !== 0 && !currentSquareDragMatch ? (
        <img src={PIECE_IMAGES[currentPiece]} alt="" />
      ) : (
        <img className="opaque" src={PIECE_IMAGES[currentPiece]} alt="" />
      )}
    </div>
  );
}

export default Column;
