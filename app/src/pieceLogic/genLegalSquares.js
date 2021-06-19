import lineLogic from "./lineLogic";
import flowerLogic from "./flowerLogic";
import pawnLogic from "./pawnLogic";

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
      legalSquareArray = lineLogic(args, 0, 1).concat(
        lineLogic(args, 0, -1),
        lineLogic(args, 1, 0),
        lineLogic(args, -1, 0)
      );
      break;
    case selectedPiece === "b":
      legalSquareArray = lineLogic(args, 1, 1).concat(
        lineLogic(args, 1, -1),
        lineLogic(args, -1, 1),
        lineLogic(args, -1, -1)
      );
      break;
    case selectedPiece === "q":
      legalSquareArray = lineLogic(args, 0, 1).concat(
        lineLogic(args, 0, -1),
        lineLogic(args, 1, 0),
        lineLogic(args, -1, 0),
        lineLogic(args, 1, 1),
        lineLogic(args, 1, -1),
        lineLogic(args, -1, 1),
        lineLogic(args, -1, -1)
      );
      break;
    case selectedPiece === "n":
      legalSquareArray = flowerLogic(args, [
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
      legalSquareArray = flowerLogic(args, [
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
    case selectedPiece === "p":
      legalSquareArray = pawnLogic(args, enPassantArray);
      break;
    case selectedPiece === "a":
      legalSquareArray = lineLogic(args, 1, 1).concat(
        lineLogic(args, 1, -1),
        lineLogic(args, -1, 1),
        lineLogic(args, -1, -1),
        flowerLogic(args, [
          [1, 2],
          [-1, 2],
          [1, -2],
          [-1, -2],
          [2, 1],
          [-2, 1],
          [2, -1],
          [-2, -1],
        ])
      );
      break;
    case selectedPiece === "c":
      legalSquareArray = lineLogic(args, 0, 1).concat(
        lineLogic(args, 0, -1),
        lineLogic(args, 1, 0),
        lineLogic(args, -1, 0),
        flowerLogic(args, [
          [1, 2],
          [-1, 2],
          [1, -2],
          [-1, -2],
          [2, 1],
          [-2, 1],
          [2, -1],
          [-2, -1],
        ])
      );
      break;

    case selectedPiece === "m":
      legalSquareArray = flowerLogic(args, [
        [0, 2],
        [0, -2],
        [2, 0],
        [-2, 0],
        [1, 1],
        [1, -1],
        [-1, 1],
        [-1, -1],
      ]);
      break;
    case selectedPiece === "g":
      legalSquareArray = flowerLogic(args, [
        [0, 1],
        [0, -1],
        [1, 0],
        [-1, 0],
        [1, 1],
        [1, -1],
        [-1, 1],
        [-1, -1],
        [2, 2],
        [-2, 2],
        [2, -2],
        [-2, -2],
      ]);
      break;
    case selectedPiece === "j":
      legalSquareArray = flowerLogic(args, [
        [1, 2],
        [2, 1],
        [1, 3],
        [2, 3],
        [3, 2],
        [3, 1],
        [3, 2],
        [-1, -2],
        [-2, -1],
        [-1, -3],
        [-2, -3],
        [-3, -2],
        [-3, -1],
        [-3, -2],
        [-2, 1],
        [-1, 2],
        [-1, 3],
        [-2, 3],
        [-3, 2],
        [-3, 1],
        [-3, 2],
        [1, -2],
        [2, -1],
        [1, -3],
        [2, -3],
        [3, -2],
        [3, -1],
        [3, -2],
      ]);
      break;
  }
  return legalSquareArray;
}

export default genLegalSquares;
