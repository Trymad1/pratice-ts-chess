import { Color } from "../Color.js";

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

  public constructor(color: Color, pieceType: PieceType) {
    this.color = color;
    this.pieceType = pieceType;
  }

  // TODO think about how piece get allowed point and pieces for attack, and what is returns.
  // public abstract getAllowedPoints(piecePoint : Point);

  public getColor(): Color {
    return this.color;
  }

  public getType(): PieceType {
    return this.pieceType;
  }
}
