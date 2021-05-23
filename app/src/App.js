import './App.css';
import blackRook from './assets/blackRook.png'

const pieceTypes = {
  BLACK_ROOK: 1,
};

function renderPiece(piece) {
  switch(piece){
    case pieceTypes.BLACK_ROOK:
      return (
        <img src={blackRook} alt="Black Rook" />
      );
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

let board = [
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 1, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 1, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
];

function App() {
  return (
    <div className="App">
      <h1>Chess Board!</h1>
      <div class="chessboard">
        {iterateBoard(board)}
      </div>
    </div>
  );
}

export default App;
