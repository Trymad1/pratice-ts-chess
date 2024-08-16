import { Point } from "../Point";
import { Board } from "../board/Board";
import { Piece } from "../piece/Piece";

export interface Step {

  getMovedPiece() : Piece;

  getPointToMove() : Point;

  getFenPosition() : string;

  getCurrentBoard() : Board; 
}