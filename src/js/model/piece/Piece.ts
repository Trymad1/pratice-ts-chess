import { Color } from "../Color.js";
import { Board } from "../board/Board.js";
import { Cell } from "../board/Cell.js";
import { v4 as uuidv4 } from 'uuid';
export enum PieceType {
  PAWN = "pawn", 
  KNIGHT = "knight", 
  BISHOP = "bishop", 
  ROOK = "rook", 
  QUEEN = "queen", 
  KING = "king"
}

export abstract class Piece {

  private color: Color;
  private pieceType: PieceType;
  private cell: Cell | null;
  private readonly uuid: string;

  public constructor(color: Color, pieceType: PieceType) {
    this.color = color;
    this.pieceType = pieceType;
    this.cell = null;
    this.uuid = uuidv4();
  }

  public abstract getAvailableCellToMove(board: Board, pieceCell: Cell): Cell[];

  // TODO think about how piece get allowed point and pieces for attack, and what is returns.
  // public abstract getAllowedPoints(piecePoint : Point);

  public getColor(): Color {
    return this.color;
  }

  public getType(): PieceType {
    return this.pieceType;
  }

  public setCell(cell: Cell | null) {
    this.cell = cell;
  }

  public getCell(): Cell | null {
    return this.cell;
  } 

  public getId(): string {
    return this.uuid;
  }
  
  public move(targetCell: Cell) {
    if(!targetCell.isEmpty()) {
      if(targetCell.getPiece()?.getColor() == this.getColor()) {
        console.log('not enemy piece error');
        return;
      } else {
        targetCell.getPiece()
      }
    }
  }
}
