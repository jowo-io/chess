import lineLogic from "./lineLogic";
import flowerLogic from "./flowerLogic";
import pawnLogic from "./pawnLogic";
import roseLogic from "./roseLogic";
import castlingLogic from "./castlingLogic";
import { PIECES } from "../constants";
import get from "lodash.get";

function genLegalSquares(selectedSquare, boardArray, turn) {
  let selectedPiece = get(boardArray, [selectedSquare[0], selectedSquare[1]]);
  let legalSquareArray = [];
  let args = { selectedPiece, selectedSquare, boardArray };
  //
  //main board logic below
  switch (true) {
    case selectedPiece.piece === PIECES.ROOK:
      legalSquareArray = lineLogic(args, 0, 1).concat(
        lineLogic(args, 0, -1),
        lineLogic(args, 1, 0),
        lineLogic(args, -1, 0)
      );
      break;
    case selectedPiece.piece === PIECES.BISHOP:
      legalSquareArray = lineLogic(args, 1, 1).concat(
        lineLogic(args, 1, -1),
        lineLogic(args, -1, 1),
        lineLogic(args, -1, -1)
      );
      break;
    case selectedPiece.piece === PIECES.QUEEN:
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
    case selectedPiece.piece === PIECES.KNIGHT:
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
    case selectedPiece.piece === PIECES.KING:
      legalSquareArray = flowerLogic(args, [
        [0, 1],
        [0, -1],
        [1, 0],
        [-1, 0],
        [1, 1],
        [1, -1],
        [-1, 1],
        [-1, -1],
      ]).concat(castlingLogic(args));
      break;
    case selectedPiece.piece === PIECES.PAWN:
      legalSquareArray = pawnLogic(args);
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
    case selectedPiece.piece === PIECES.CHANCELLOR:
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
    case selectedPiece.piece === PIECES.MOON:
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
    case selectedPiece.piece === PIECES.GRAVE:
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
    case selectedPiece.piece === PIECES.JESTER:
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
    case selectedPiece.piece === PIECES.ROSE:
      legalSquareArray = roseLogic(args, [
        [1, 2],
        [-1, 2],
        [-2, 1],
        [-2, -1],
        [-1, -2],
        [1, -2],
        [2, -1],
      ]).concat(
        roseLogic(args, [
          [1, 2],
          [2, 1],
          [2, -1],
          [1, -2],
          [-1, -2],
          [-2, -1],
          [-2, 1],
        ])
      );
      break;
    default:
  }
  return legalSquareArray;
}

export default genLegalSquares;
