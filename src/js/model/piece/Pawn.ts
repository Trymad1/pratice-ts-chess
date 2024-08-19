import { Color } from "../Color";
import { Piece } from "./Piece";

export class Pawn extends Piece {
  
  constructor(color: Color) {
    super(color, Piece.PAWN_STR);
  }

}