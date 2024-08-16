import { Color } from "../Color";
import { Piece } from "./Piece";

export class King extends Piece {

  constructor(color : Color, img : String) {
    super(color, img, Piece.KING_STR);
  }
}