import { Color, ColorUtil } from "../Color";
import { Point } from "../Point";

export abstract class Piece {

  public static readonly PAWN_STR: string = "p"
  public static readonly KNIGHT_STR: string = "n"
  public static readonly BISHOP_STR: string = "b"
  public static readonly ROOK_STR: string = "r"
  public static readonly QUEEN_STR: string = "q"
  public static readonly KING_STR: string = "k"

  private color: Color;
  private pieceStr: string;

  public constructor(color: Color, pieceStr: string) {
    this.color = color;
    this.pieceStr = pieceStr;
  }

  // TODO think about how piece get allowed point and pieces for attack, and what is returns.
  // public abstract getAllowedPoints(piecePoint : Point);

  public getColor(): Color {
    return this.color;
  }
  public toString(): string {
    return this.pieceStr;
  }
}