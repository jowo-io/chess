function roseLogic({ selectedSquare, boardArray, turn }) {
  function isOpposite(piece) {
    if (
      (piece !== piece.toLowerCase() && turn === "Black") ||
      (piece === piece.toLowerCase() && turn === "White")
    ) {
      return true;
    } else {
      return false;
    }
  }
  let flowerArray = [];
  const roseMoveset = {
    // 1,2: [[0,4],[3,3]],
    // 2,1: [[3,3],[4,0]]
  };

  return roseMoveset;
}

export default roseLogic;
