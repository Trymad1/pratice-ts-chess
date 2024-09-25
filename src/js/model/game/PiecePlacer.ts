import { Point } from "../Point.js";
import { Board } from "../board/Board.js";
import { Piece } from "../piece/Piece.js";

export interface PiecePlacer {

  generatePieces(): Map<Point, Piece>;

  placePieces(pieceMap: Map<Point, Piece>, board: Board): void;

}