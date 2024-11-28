import { Color } from "../Color.js";
import { Point } from "../Point.js";
import { Board } from "../board/Board.js";
import { Cell } from "../board/Cell.js";
import { Piece, PieceType } from "./Piece.js";

export class Knight extends Piece {
  
  constructor(color: Color) {
    super(color, PieceType.KNIGHT);
  }

  //fix cringe hardcode
  public getAvailableCellToMove(board: Board): Cell[] {
    const currentPoint: Point = this.getCell()!.getPoint();
    const pointArr: Point[] = []
    pointArr.push(new Point(currentPoint.getX() - 2, currentPoint.getY() - 1));
    pointArr.push(new Point(currentPoint.getX() - 1, currentPoint.getY() - 2));
    pointArr.push(new Point(currentPoint.getX() - 2, currentPoint.getY() + 1));
    pointArr.push(new Point(currentPoint.getX() - 1, currentPoint.getY() + 2));

    pointArr.push(new Point(currentPoint.getX() + 2, currentPoint.getY() - 1));
    pointArr.push(new Point(currentPoint.getX() + 1, currentPoint.getY() - 2));
    pointArr.push(new Point(currentPoint.getX() + 2, currentPoint.getY() + 1));
    pointArr.push(new Point(currentPoint.getX() + 1, currentPoint.getY() + 2));
    
    return pointArr
    .filter(board.inBorder, board)
    .map(board.getCell, board)
    .filter(cell => 
      (!cell.isEmpty() && cell.getPiece()!.getColor() != this.getColor()) || cell.isEmpty())
    }
}