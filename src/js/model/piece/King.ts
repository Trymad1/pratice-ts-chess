import { Color } from "../Color.js";
import { Point } from "../Point.js";
import { Board } from "../board/Board.js";
import { Cell } from "../board/Cell.js";
import { Piece, PieceType } from "./Piece.js";

export class King extends Piece {
  public getAvailableCellToMove(board: Board, pieceCell: Cell): Cell[] {
    throw new Error("Method not implemented.");
  }
  
  constructor(color: Color) {
    super(color, PieceType.KING);
  }

}