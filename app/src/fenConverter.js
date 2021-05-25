function splitBoard(fen) {
  let fen2 = fen.split('/')
  console.log(fen2)
  let board = []
  for(const i in fen2){
    let row=[]
    for(const j in fen2[i]){
      if (!isNaN(fen2[i][j])) {
        for (let step = 0; step < fen2[i][j]; step++){
          row.push(0)
        }
      } else {
        row.push(fen2[i][j])
      }
    }
    board.push(row)
  }
  return(board)
}

export default splitBoard
