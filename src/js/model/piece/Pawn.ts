import { Color } from "../Color.js";
import { Point } from "../Point.js";
import { Board } from "../board/Board.js";
import { Cell } from "../board/Cell.js";
import { Piece, PieceType } from "./Piece.js";

export class Pawn extends Piece {

  private isMoved: boolean = false;

  constructor(color: Color) {
    super(color, PieceType.PAWN);
  }
  
  public getAvailableCellToMove(board: Board): Cell[] {
    const boardWidth = board.getWidth();
    const boardHeight = board.getHeight();
    const availableCells: Cell[] = [];
    const cellPoint: Point = this.getCell()!.getPoint();
    const directionY: number = this.getColor() == Color.WHITE ? -1 : 1;
    
    for(let i: number = cellPoint.getX() - 1; i < cellPoint.getX() + 2; i += 2) {
      const point: Point = new Point(i, cellPoint.getY() + directionY);
      console.log(point.getX() + " " + point.getY());
      if(!board.inBorder(point)) {
        continue;
      }

      const cell: Cell = board.getCell(point);
      if(!cell.isEmpty() && cell.getPiece()?.getColor() != this.getColor()) {
        availableCells.push(cell);
      }
    }

    let numberOfSteps = 1;
    if(!this.isMoved) {
      numberOfSteps++;
      this.isMoved = !this.isMoved;
    }

    for(let i: number = 1; i < 1 + numberOfSteps; i += 1) {
      const point = new Point(cellPoint.getX(), cellPoint.getY() + (directionY * i));
      if(!board.inBorder(point) || !board.getCell(point).isEmpty()) break;
      availableCells.push(board.getCell(point));
    }

    return availableCells;
  }

}