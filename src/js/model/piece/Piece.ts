import { Color, ColorUtil } from "../Color";
import { Point } from "../Point";

export enum PieceType {
  PAWN = "pawn", 
  KNIGHT = "knight", 
  BISHOP = "bishop", 
  ROOK = "rook", 
  QUEEN = "queen", 
  KING = "king"
}

export abstract class Piece {

  public static readonly PAWN_STR: string = "p"
  public static readonly KNIGHT_STR: string = "n"
  public static readonly BISHOP_STR: string = "b"
  public static readonly ROOK_STR: string = "r"
  public static readonly QUEEN_STR: string = "q"
  public static readonly KING_STR: string = "k"

  private color: Color;
  private pieceStr: string;
  private pieceType: PieceType;

  public constructor(color: Color, pieceStr: string, pieceType: PieceType) {
    this.color = color;
    this.pieceStr = pieceStr;
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

  public toString(): string {
    return this.pieceStr;
  }
}
