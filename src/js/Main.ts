import { Point } from "./model/Point.js";
import { Board } from "./model/board/Board.js";
import { BoardCellArray } from "./model/board/BoardCellArray.js";
import { Cell } from "./model/board/Cell.js";
import { DefaultStartPiecePlacer } from "./model/game/DefaultStartPiecePlacer.js";
import { StartPiecePlacer } from "./model/game/StartPiecePlacer.js";
import { Piece } from "./model/piece/Piece.js";
import { BoardViewStorage } from "./model/view/BoardViewStorage.js";

// code for test, change in future

function testDisplay(board: Board, storage: BoardViewStorage) {
  for(let i = 0; i < 8; i++) {
    for(let j = 0; j < 8; j++) {
      const cell: Cell = board.getCell(new Point(j,i));
      const piece: Piece | null = cell.getPiece();

      const cellDiv = document.createElement("div");
      const boardDiv = document.querySelector(".board");
      cellDiv.className = `cell ${cell.getColor()}`;
      boardDiv?.appendChild(cellDiv);

      if(piece != null) {
        const pieceDiv = document.createElement("div");
        pieceDiv.className = `piece ${piece.getColor()}`;
        pieceDiv.innerHTML = storage.getImageUrl(piece.getType()).toString();
        cellDiv.appendChild(pieceDiv);
      }

    }
  } 
}

let board: Board = new BoardCellArray(8,8);
let startPiece: StartPiecePlacer = new DefaultStartPiecePlacer();
startPiece.placePieces(board);
testDisplay(board, new BoardViewStorage());

