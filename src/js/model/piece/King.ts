import { Color } from "../Color.js";
import { Piece, PieceType } from "./Piece.js";

export class King extends Piece {
  
  constructor(color: Color) {
    super(color, PieceType.KING);
  }
}