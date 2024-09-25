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

export class MoveBuilder {
  
  public constructor() { };

  private movedPieceField!: Piece;
  private targetCellField!: Cell;
  private startCellField!: Cell;
  private eatenPieceField: Piece | null = null;


  public movedPiece(piece: Piece): MoveBuilder {
    this.movedPieceField = piece;
    return this;
  }

  public targetCell(cell: Cell): MoveBuilder {
    this.targetCellField = cell;
    return this;
  }

  public startCell(cell: Cell): MoveBuilder {
    this.startCellField = cell;
    return this;
  }

  public eatenPiece(piece: Piece): MoveBuilder {
    this.eatenPieceField = piece;
    return this;
  }

  public build(): Move {
    return new MoveImpl(
      this.movedPieceField, 
      this.targetCellField, 
      this.startCellField, 
      this.eatenPieceField
    )
  }
 }