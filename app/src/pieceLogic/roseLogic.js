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
  if (isOpposite(boardArray[selectedSquare[0] + 1][selectedSquare[1] + 2])) {
    flowerArray.push([1, 2]);
  } else if (boardArray[selectedSquare[0] + 1][selectedSquare[1] + 2] === 0) {
    flowerArray.push([1, 2]);
  }

  return flowerArray;
}

export default roseLogic;
