import './App.css';
import IMAGES from './assets/index.js'
import splitBoard from './fenConverter.js'

let fenCode = 'rnbqkbnr/pp1ppppp/8/2p5/4P3/5N2/PPPP1PPP/RNBQKB1R'
let board=splitBoard(fenCode)

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
      <p>FEN code is {fenCode}</p>
    </div>
  );
}

export default App;
