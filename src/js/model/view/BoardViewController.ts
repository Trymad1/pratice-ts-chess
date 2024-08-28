import { Board } from "../board/Board.js";
import { BoardCellArray } from "../board/BoardCellArray.js";
import { Cell } from "../board/Cell.js";
import { Piece, PieceType } from "../piece/Piece.js";
import { DefaultSvgPieceViewFactory } from "./DefaultSvgPieceViewFactory.js";
import { PieceViewFactory } from "./PieceViewFactory.js";
import { Point } from "../Point.js";

export class BoardViewController {

  private pieceViewFactory: PieceViewFactory;
  private board: Board;

  public constructor() {
    this.pieceViewFactory = new DefaultSvgPieceViewFactory();
    this.board = new BoardCellArray(8, 8); // TODO hardcode, change to init default board another way
  }

  setPieceViewFactory(factory: PieceViewFactory): void {
    this.pieceViewFactory = factory;
  }

  setBoard(board: Board) {
    this.board = board;
  }

  initBoardDiv() { // TODO test init
    for(let i = 0; i < 8; i++) {
      for(let j = 0; j < 8; j++) {
        const cell: Cell = this.board.getCell(new Point(j,i));
        const piece: Piece | null = cell.getPiece();
  
        const cellDiv = document.createElement("div");
        const boardDiv = document.querySelector(".board");
        cellDiv.className = `cell ${cell.getColor()}`;
        boardDiv?.appendChild(cellDiv);
  
        if(piece != null) {
          const pieceDiv = document.createElement("div");
          pieceDiv.className = `piece ${piece.getColor()}`;
          pieceDiv.innerHTML = this.pieceViewFactory.getImage(piece.getType(), piece.getColor());
          cellDiv.appendChild(pieceDiv);
        }
      }
    } 
  }
}