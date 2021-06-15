import rookLogic from "./rookLogic";

function genLegalSquares(selectedSquare, boardArray, turn, enPassantArray, castlingArray) {
  let selectedPiece = boardArray[selectedSquare[0]][selectedSquare[1]].toLowerCase()
  let legalSquareArray = []
  switch (true) {
    case selectedPiece === "r":
        legalSquareArray = rookLogic(selectedSquare, boardArray, turn);
        break;
    default:
        legalSquareArray = [[5,3],[2,2],[3,2]]
  }
  return legalSquareArray
}

export default genLegalSquares;
