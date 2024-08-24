import { Point } from "../Point.js";
import { Board } from "../board/Board.js";
import { Piece } from "../piece/Piece.js";

export interface Step {

  getMovedPiece(): Piece;

  getPointToMove(): Point;

  getCurrentBoard(): Board; 
}