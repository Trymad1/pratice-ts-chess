import { Color } from "../Color";
import { Piece, PieceType } from "./Piece";

export class Rook extends Piece {
  
  constructor(color: Color) {
    super(color, PieceType.ROOK);
  }
}