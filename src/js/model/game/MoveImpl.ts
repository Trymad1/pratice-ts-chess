import { Point } from "../Point.js";
import { Board } from "../board/Board.js";
import { Cell } from "../board/Cell.js";
import { Piece } from "../piece/Piece.js";
import { Move } from "./Move.js";

export class MoveImpl implements Move {

  private readonly movedPiece: Piece;
  private readonly targetCell: Cell;
  private readonly startCell: Cell;
  private readonly eatenPiece: Piece | null;

  constructor(movedPiece: Piece, targetCell: Cell, startCell: Cell, eatenPiece: Piece | null) {
    this.movedPiece = movedPiece;
    this.targetCell = targetCell;
    this.startCell = startCell;
    this.eatenPiece = eatenPiece;
  }

  getMovedPiece(): Piece {
    return this.movedPiece;
  }

  getEatenPiece(): Piece | null {
    return this.eatenPiece;
  }

  getStartCell(): Cell {
    return this.startCell;
  }

  getTargetCell(): Cell {
    return this.targetCell;
  }

}