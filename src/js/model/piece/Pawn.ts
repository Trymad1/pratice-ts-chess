import { Color } from "../Color.js";
import { Point } from "../Point.js";
import { Board } from "../board/Board.js";
import { Cell } from "../board/Cell.js";
import { Piece, PieceType } from "./Piece.js";

export class Pawn extends Piece {

  
  constructor(color: Color) {
    super(color, PieceType.PAWN);
  }
  
  public getAvailableCellToMove(board: Board, pieceCell: Cell): Cell[] {
    const boardWidth = board.getWidth();
    const boardHeight = board.getHeight();
    const availableCells: Cell[] = [];
    const cellPoint: Point = pieceCell.getPoint();
    
    for(let i = cellPoint.getX() - 1; i < cellPoint.getX() + 2 && cellPoint.getY() != boardHeight - 1; i + 2) {
      if(i < 0 || i >= boardWidth) continue;
      const cell = board.getCell(new Point(i, cellPoint.getY() + 1));
      if(!cell.isEmpty()) availableCells.push(cell);
    }

    for(let i = cellPoint.getY() + 1; i < boardHeight - 1; i++) {
      const nextCell = board.getCell(new Point(cellPoint.getX(), i));
      if(nextCell.isEmpty()) {
        availableCells.push(nextCell);
      }
    }

    return availableCells;
  }

}