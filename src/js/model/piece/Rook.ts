import { Color } from "../Color.js";
import { Point } from "../Point.js";
import { Board } from "../board/Board.js";
import { Cell } from "../board/Cell.js";
import { Piece, PieceType } from "./Piece.js";

export class Rook extends Piece {
  
  constructor(color: Color) {
    super(color, PieceType.ROOK);
  }
  
  public getAvailableCellToMove(board: Board, pieceCell: Cell): Cell[] {
    return [...this.getAvailablePointInDirection(0, 1, board),
      ...this.getAvailablePointInDirection(0, -1, board),
      ...this.getAvailablePointInDirection(1, 0, board),
      ...this.getAvailablePointInDirection(-1, 0, board)
    ];  
  }

  private getAvailablePointInDirection(xchange: number, ychange: number, board: Board): Cell[] {
    const cellArr: Cell[] = [];
    const point: Point = this.getCell()!.getPoint();
    point.addToX(xchange);
    point.addToY(ychange);

    while(board.inBorder(point)) {
      const currentCell = board.getCell(point);
      cellArr.push(currentCell);
      if(!currentCell.isEmpty()) {
        if(currentCell.getPiece()?.getColor() == this.getColor()) cellArr.pop();
        break;
      }
      point.addToX(xchange);
      point.addToY(ychange);
    }

    return cellArr;
  }
}