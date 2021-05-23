import './App.css';

function App() {
  function iterateRows(row) {
    row.forEach(iteratePieces)
  }

  function iteratePieces(piece) {
    console.log(piece)
  }

  function iterateBoard(board) {
    board.forEach(iterateRows)
  }

  let board = [
    [0, 1, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 1, 0, 0]
  ];

  iterateBoard(board);
  
  return (
    <div className="App">
      <h1>Chess Board!</h1>
      <div class="chessboard">
        <div>
            <div></div><div></div><div></div><div></div><div><img src="/images/blackRook.png" alt=""/></div><div></div><div></div><div></div>
        </div>
        <div>
            <div></div><div><img src="/images/blackQueen.png" alt=""/></div><div></div><div></div><div></div><div></div><div></div><div></div>
        </div>
        <div>
            <div></div><div></div><div></div><div></div><div></div><div></div><div><img src="/images/whitePawn.png" alt=""/></div><div></div>
        </div>
        <div>
            <div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div>
        </div>
        <div>
            <div></div><div></div><div><img src="/images/whiteBishop.png" alt=""/></div><div></div><div></div><div></div><div></div><div></div>
        </div>
        <div>
            <div></div><div></div><div><img src="/images/whiteKing.png" alt=""/></div><div></div><div></div><div><img src="/images/blackKnight.png" alt=""/></div><div></div><div></div>
        </div>
        <div>
            <div><img src="/images/whiteRook.png" alt=""/></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div>
        </div>
        <div>
            <div></div><div></div><div></div><div><img src="/images/blackKing.png" alt=""/></div><div></div><div></div><div></div><div></div>
        </div>
      </div>
    </div>
  );
}

export default App;
