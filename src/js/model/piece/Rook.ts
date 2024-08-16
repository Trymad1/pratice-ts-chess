import { Color } from "../Color";
import { Piece } from "./Piece";

export class Rook extends Piece {

  constructor(color : Color, img : String) {
    super(color, img, Piece.ROOK_STR);
  }
}