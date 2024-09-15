import { Color } from "../Color.js";
import { Point } from "../Point.js";
import { Board } from "../board/Board.js";
import { Cell } from "../board/Cell.js";
import { Piece, PieceType } from "./Piece.js";

export class King extends Piece {
  
  constructor(color: Color) {
    super(color, PieceType.KING);
  }

  public getAvailableCellToMove(board: Board, pieceCell: Cell): Cell[] {
    const currentPoint: Point = this.getCell()!.getPoint();
    const pointArr: Point[] = []

    pointArr.push(new Point(currentPoint.getX() - 1, currentPoint.getY() - 1));
    pointArr.push(new Point(currentPoint.getX() + 1, currentPoint.getY() + 1));
    pointArr.push(new Point(currentPoint.getX() - 1, currentPoint.getY() + 1));
    pointArr.push(new Point(currentPoint.getX() + 1, currentPoint.getY() - 1));

    pointArr.push(new Point(currentPoint.getX() + 1, currentPoint.getY() - 0));
    pointArr.push(new Point(currentPoint.getX() - 1, currentPoint.getY() - 0));
    pointArr.push(new Point(currentPoint.getX() + 0, currentPoint.getY() - 1));
    pointArr.push(new Point(currentPoint.getX() + 0, currentPoint.getY() + 1));

    
    return pointArr
    .filter(board.inBorder, board)
    .map(board.getCell, board)
    .filter(cell => 
      (!cell.isEmpty() && cell.getPiece()!.getColor() != this.getColor()) || cell.isEmpty())
    }

}