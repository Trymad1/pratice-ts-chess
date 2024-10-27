import { Point } from "../Point";
import { Board } from "../board/Board";
import { Piece } from "../piece/Piece";

export class PieceMoveValidator {
  
  private board: Board;

  public constructor(board: Board, pieceSet: Map<Point, Piece> | null = null) {
    this.board = board;
  }
} 