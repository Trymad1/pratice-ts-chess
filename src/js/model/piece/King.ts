import { Color } from "../Color";
import { Piece, PieceType } from "./Piece";

export class King extends Piece {
  
  constructor(color: Color) {
    super(color, PieceType.KING);
  }
}