import { Color } from "../Color";
import { Piece, PieceType } from "./Piece";

export class Knight extends Piece {
  
  constructor(color: Color) {
    super(color, Piece.KNIGHT_STR, PieceType.KNIGHT);
  }
}