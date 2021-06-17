import parrallelLineLogic from "./parrallelLineLogic";
import diagonalLineLogic from "./diagonalLineLogic";
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
  let legalSquareArray = [];
  let args = { selectedSquare, boardArray, turn };
  //main board logic below
  switch (true) {
    case selectedPiece === "r":
      legalSquareArray = parrallelLineLogic(args, 1, true).concat(
        parrallelLineLogic(args, -1, true),
        parrallelLineLogic(args, 1, false),
        parrallelLineLogic(args, -1, false)
      );
      break;
    case selectedPiece === "b":
      legalSquareArray = diagonalLineLogic(args, 1, 1).concat(
        diagonalLineLogic(args, 1, -1),
        diagonalLineLogic(args, -1, 1),
        diagonalLineLogic(args, -1, -1)
      );
      break;
    case selectedPiece === "q":
      legalSquareArray = parrallelLineLogic(args, 1, true).concat(
        parrallelLineLogic(args, -1, true),
        parrallelLineLogic(args, 1, false),
        parrallelLineLogic(args, -1, false),
        diagonalLineLogic(args, 1, 1),
        diagonalLineLogic(args, 1, -1),
        diagonalLineLogic(args, -1, 1),
        diagonalLineLogic(args, -1, -1)
      );
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
      legalSquareArray = flowerLogic(selectedSquare, boardArray, turn, [
        [0, 1],
        [0, 2],
        [0, -1],
        [0, -2],
      ]);
  }
  return legalSquareArray;
}

export default genLegalSquares;
