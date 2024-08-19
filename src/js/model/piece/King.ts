import { Color } from "../Color";
import { Piece } from "./Piece";

export class King extends Piece {
  
  constructor(color: Color) {
    super(color, Piece.KING_STR);
  }
}