import IMAGES from "../assets/index";
function MovingPiece(props) {
  return (
    <div className="movingPiece" style={{ left: props.x, top: props.y }}>
      <img src={IMAGES.r} alt="" />
    </div>
  );
}

export default MovingPiece;
