function rookLogic(selectedSquare, boardArray, turn) {
  let legalSquareArray = []
  //checks along x-axis to right
  for(let i = (selectedSquare[1] + 1); i < boardArray[selectedSquare[0]].length; i++){
    let currentPiece = boardArray[selectedSquare[0]][i]
    if (currentPiece === 0) {
      legalSquareArray.push([selectedSquare[0], i]);
    }else if ((currentPiece !== currentPiece.toLowerCase() && turn === "Black") || (currentPiece === currentPiece.toLowerCase() && turn === "White")) {
      legalSquareArray.push([selectedSquare[0], i]);
      break;
    }else {break;}
  }
  for(let i = (selectedSquare[1] - 1); i > -1; i--){
    console.log(i)
    let currentPiece = boardArray[selectedSquare[0]][i]
    if (currentPiece === 0) {
      legalSquareArray.push([selectedSquare[0], i]);
    }else if ((currentPiece !== currentPiece.toLowerCase() && turn === "Black") || (currentPiece === currentPiece.toLowerCase() && turn === "White")) {
      legalSquareArray.push([selectedSquare[0], i]);
      break;
    }else {break;}
  }
  return legalSquareArray
}

export default rookLogic;
