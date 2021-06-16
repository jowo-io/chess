import rookLogic from "./rookLogic";
import bishopLogic from "./bishopLogic";
import queenLogic from "./queenLogic";
import flowerLogic from "./flowerLogic";

function genLegalSquares(
  selectedSquare,
  boardArray,
  turn,
  enPassantArray,
  castlingArray
) {
  let selectedPiece = boardArray[selectedSquare[0]][
    selectedSquare[1]
  ].toLowerCase();
  //selectedSquare 0 = y pos, selectedSquare 1 = x pos
  let legalSquareArray = [];
  switch (true) {
    case selectedPiece === "r":
      legalSquareArray = rookLogic(selectedSquare, boardArray, turn);
      break;
    case selectedPiece === "b":
      legalSquareArray = bishopLogic(selectedSquare, boardArray, turn);
      break;
    case selectedPiece === "q":
      legalSquareArray = queenLogic(selectedSquare, boardArray, turn);
      break;
    case selectedPiece === "n":
      legalSquareArray = flowerLogic(selectedSquare, boardArray, turn, [
        [1, 2],
        [-1, 2],
        [1, -2],
        [-1, -2],
        [2, 1],
        [-2, 1],
        [2, -1],
        [-2, -1],
      ]);
      break;
    case selectedPiece === "k":
      legalSquareArray = flowerLogic(selectedSquare, boardArray, turn, [
        [0, 1],
        [0, -1],
        [1, 0],
        [-1, 0],
        [1, 1],
        [1, -1],
        [-1, 1],
        [-1, -1],
      ]);
      break;
    default:
      legalSquareArray = [
        [5, 3],
        [2, 2],
      ];
  }
  return legalSquareArray;
}

export default genLegalSquares;
