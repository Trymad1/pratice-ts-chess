import { Color } from "../Color";
import { Piece } from "./Piece";

export class Queen extends Piece {

  constructor(color : Color, img : String) {
    super(color, img, Piece.QUEEN_STR);
  }
}