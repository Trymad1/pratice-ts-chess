import { Color } from "../Color";
import { Piece } from "./Piece";

export class Knight extends Piece {

  constructor(color: Color, img: String) {
    super(color, img, Piece.KNIGHT_STR);
  }
}