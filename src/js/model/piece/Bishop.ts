import { Color } from "../Color";
import { Piece } from "./Piece";

export class Bishop extends Piece {
  
  constructor(color: Color) {
    super(color, Piece.BISHOP_STR);
  }
}