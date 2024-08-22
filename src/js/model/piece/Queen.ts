import { Color } from "../Color";
import { Piece, PieceType } from "./Piece";

export class Queen extends Piece {
  
  constructor(color: Color,) {
    super(color, PieceType.QUEEN);
  }
}