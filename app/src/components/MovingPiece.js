import PIECE_IMAGES from "../constants/pieceImages";
import { getValueFrom3dArray } from "../utils";

function MovingPiece({ x, y, selectedSquare, boardArray }) {
  const piece = getValueFrom3dArray(
    selectedSquare[0],
    selectedSquare[1],
    boardArray
  );
  return (
    <div className="movingPiece" style={{ left: x, top: y }}>
      <img src={PIECE_IMAGES[piece]} alt="" />
    </div>
  );
}

export default MovingPiece;
