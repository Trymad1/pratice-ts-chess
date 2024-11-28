import { Cell } from "../board/Cell.js";
import { Piece } from "../piece/Piece.js";

export interface Move {

  getMovedPiece(): Piece;

  getStartCell(): Cell;

  getTargetCell(): Cell;

  getEatenPiece(): Piece | null;

}
