import { Color } from "../Color";
import { Piece } from "./Piece";

export class Pawn extends Piece {

  constructor(color : Color, img : String) {
    super(color, img, Piece.PAWN_STR);
  }
}