import { Color } from "../Color";
import { Piece, PieceType } from "./Piece";

export class Bishop extends Piece {
  
  constructor(color: Color) {
    super(color, PieceType.BISHOP);
  }
}