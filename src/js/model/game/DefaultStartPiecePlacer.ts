import { Color } from "../Color.js";
import { Point } from "../Point.js";
import { Board } from "../board/Board.js";
import { PieceType } from "../piece/Piece.js";
import { PieceFactory } from "../piece/PieceFactory.js";
import { StartPiecePlacer } from "./StartPiecePlacer.js";

// fix bug if boardSice not 8x8
export class DefaultStartPiecePlacer implements StartPiecePlacer {

  placePieces(board: Board): void {
    this.placePawns(board);
    this.placeRocks(board);
    this.placeBishops(board);
    this.placeQueens(board);
    this.placeKnights(board);
    this.placeKings(board);
  }

  private placePawns(board: Board): void {
    for(let i = 0; i < 8; i++) {
      board.getCell(new Point(i, 1)).setPiece(PieceFactory.createPiece(PieceType.PAWN, Color.BLACK));
      board.getCell(new Point(i, 6)).setPiece(PieceFactory.createPiece(PieceType.PAWN, Color.WHITE));
    }
  }

  private placeRocks(board: Board): void {
    for(let i = 0; i < 9; i += 7) {
      board.getCell(new Point(i, 0)).setPiece(PieceFactory.createPiece(PieceType.ROOK, Color.BLACK));
      board.getCell(new Point(i, 7)).setPiece(PieceFactory.createPiece(PieceType.ROOK, Color.WHITE))
    }
  }

  private placeKnights(board: Board): void {
    for(let i = 1; i < 7; i += 5) {
      board.getCell(new Point(i, 0)).setPiece(PieceFactory.createPiece(PieceType.KNIGHT, Color.BLACK));
      board.getCell(new Point(i, 7)).setPiece(PieceFactory.createPiece(PieceType.KNIGHT, Color.WHITE));
    }
  }

  private placeBishops(board: Board): void {
    for(let i = 2; i < 6; i += 3) {
      board.getCell(new Point(i, 0)).setPiece(PieceFactory.createPiece(PieceType.BISHOP, Color.BLACK));
      board.getCell(new Point(i, 7)).setPiece(PieceFactory.createPiece(PieceType.BISHOP, Color.WHITE));
    }
  }

  private placeQueens(board: Board): void {
    board.getCell(new Point(3, 0)).setPiece(PieceFactory.createPiece(PieceType.QUEEN, Color.BLACK));
    board.getCell(new Point(3, 7)).setPiece(PieceFactory.createPiece(PieceType.QUEEN, Color.WHITE));
  }

  private placeKings(board: Board): void {
    board.getCell(new Point(4, 0)).setPiece(PieceFactory.createPiece(PieceType.KING, Color.BLACK));
    board.getCell(new Point(4, 7)).setPiece(PieceFactory.createPiece(PieceType.KING, Color.WHITE));
  }
} 