import { Color } from "../Color.js";
import { Piece, PieceType } from "./Piece.js";

export class Knight extends Piece {
  
  constructor(color: Color) {
    super(color, PieceType.KNIGHT);
  }
}