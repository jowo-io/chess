import './App.css';
import IMAGES from './assets/index.js'
import fenCodeToBoard from './fenConverter.js'

let fenCode = '3b4/R3P3/2kPR1n1/P1p1n3/4K1p1/2Nr4/5p2/1b6'
let board=fenCodeToBoard(fenCode)

const pieceTypes = {
  'r': IMAGES.blackRook,
  'n': IMAGES.blackKnight,
  'b': IMAGES.blackBishop,
  'q': IMAGES.blackQueen,
  'k': IMAGES.blackKing,
  'p': IMAGES.blackPawn,
  'R': IMAGES.whiteRook,
  'N': IMAGES.whiteKnight,
  'B': IMAGES.whiteBishop,
  'Q': IMAGES.whiteQueen,
  'K': IMAGES.whiteKing,
  'P': IMAGES.whitePawn,
};

//Functions for displaying board
function renderPiece(piece) {
        if (piece !== 0){
          return (
            <img src={pieceTypes[piece]} alt="" />
          )
        }
}
function iteratePieces(piece) {
  return (
    <div>
      {renderPiece(piece)}
    </div>
  );
}
function iterateRows(row) {
  return (
    <div>
      {row.map(iteratePieces)}
    </div>
  );
}
function iterateBoard(board) {
  return board.map(iterateRows)
}

function App() {
  return (
    <div className="App">
      <h1>Chess Board!</h1>
      <div class="chessboard">
        {iterateBoard(board)}
      </div>
      <p>FEN code is {fenCode} w KQkq</p>
    </div>
  );
}

export default App;
