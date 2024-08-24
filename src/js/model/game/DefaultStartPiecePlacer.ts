import { Color } from "../Color";
import { Point } from "../Point";
import { Board } from "../board/Board";
import { PieceType } from "../piece/Piece";
import { PieceFactory } from "../piece/PieceFactory";
import { StartPiecePlacer } from "./StartPiecePlacer";

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
      board.getCell(new Point(1, i)).setPiece(PieceFactory.createPiece(PieceType.PAWN, Color.BLACK));
      board.getCell(new Point(6, i)).setPiece(PieceFactory.createPiece(PieceType.PAWN, Color.WHITE));
    }
  }

  private placeRocks(board: Board): void {
    for(let i = 0; i < 8; i += 6) {
      board.getCell(new Point(0, i)).setPiece(PieceFactory.createPiece(PieceType.ROOK, Color.BLACK));
      board.getCell(new Point(7, i)).setPiece(PieceFactory.createPiece(PieceType.ROOK, Color.WHITE))
    }
  }

  private placeKnights(board: Board): void {
    for(let i = 1; i < 7; i += 5) {
      board.getCell(new Point(0, i)).setPiece(PieceFactory.createPiece(PieceType.KNIGHT, Color.BLACK));
      board.getCell(new Point(7, i)).setPiece(PieceFactory.createPiece(PieceType.KNIGHT, Color.WHITE));
    }
  }

  private placeBishops(board: Board): void {
    for(let i = 2; i < 6; i += 3) {
      board.getCell(new Point(0, i)).setPiece(PieceFactory.createPiece(PieceType.BISHOP, Color.BLACK));
      board.getCell(new Point(7, i)).setPiece(PieceFactory.createPiece(PieceType.BISHOP, Color.WHITE));
    }
  }

  private placeQueens(board: Board): void {
    board.getCell(new Point(0, 3)).setPiece(PieceFactory.createPiece(PieceType.QUEEN, Color.BLACK));
    board.getCell(new Point(7, 3)).setPiece(PieceFactory.createPiece(PieceType.QUEEN, Color.WHITE));
  }

  private placeKings(board: Board): void {
    board.getCell(new Point(0, 4)).setPiece(PieceFactory.createPiece(PieceType.KING, Color.BLACK));
    board.getCell(new Point(7, 4)).setPiece(PieceFactory.createPiece(PieceType.KING, Color.WHITE));
  }
} 