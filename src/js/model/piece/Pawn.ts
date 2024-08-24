import { Color } from "../Color.js";
import { Piece, PieceType } from "./Piece.js";

export class Pawn extends Piece {
  
  constructor(color: Color) {
    super(color, PieceType.PAWN);
  }

}