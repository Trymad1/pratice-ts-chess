import { Color } from "../Color";
import { Piece } from "./Piece";

export class Bishop extends Piece {

  constructor(color: Color, img: String) {
    super(color, img, Piece.BISHOP_STR);
  }
}