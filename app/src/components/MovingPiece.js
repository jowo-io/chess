import IMAGES from "../assets/index";
import { getValueFrom3dArray } from "../utils";

function MovingPiece({ x, y, selectedSquare, boardArray }) {
  const piece = getValueFrom3dArray(
    selectedSquare[0],
    selectedSquare[1],
    boardArray
  );
  return (
    <div className="movingPiece" style={{ left: x, top: y }}>
      <img src={IMAGES[piece]} alt="" />
    </div>
  );
}

export default MovingPiece;
