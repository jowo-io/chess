function castlingLogic({ selectedSquare, boardArray, turn }, castlingArray) {
  let legalSquareArray = [];
  // function countToRook(turnDirection) {
  //   for (
  //     let i = selectedSquare[1] + turnDirection;
  //     -1 < i && i < boardArray.length;
  //     i = i + turnDirection
  //   ) {
  //     if (castlingArray[selectedSquare[0]][i] === 2) {
  //       console.log("castleable");
  //       break;
  //     } else if (boardArray[selectedSquare[0]][i] !== 0) {
  //       break;
  //     }
  //   }
  // }
  //
  // if (castlingArray[selectedSquare[0]][selectedSquare[1]] === 1) {
  //   countToRook(1);
  //   countToRook(-1);
  // }

  return legalSquareArray;
}

export default castlingLogic;
