import { Point } from "../Point.js";
import { Board } from "../board/Board.js";
import { Piece } from "../piece/Piece.js";
import { PieceSet } from "./PieceSet.js";

export interface PiecePlacer {

  generatePieces(): PieceSet;

  placePieces(pieceSet: PieceSet, board: Board): void;

}