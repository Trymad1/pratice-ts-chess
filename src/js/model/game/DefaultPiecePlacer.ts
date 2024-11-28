import { Color } from "../Color.js";
import { Point } from "../Point.js";
import { Board } from "../board/Board.js";
import { Piece, PieceType } from "../piece/Piece.js";
import { PieceFactory } from "../piece/PieceFactory.js";
import { PiecePlacer } from "./PiecePlacer.js";
import { PieceSet, PieceSetBuilder } from "./PieceSet.js";

export class DefaultPiecePlacer implements PiecePlacer {

  pieceSetBuilder: PieceSetBuilder;

  constructor() {
    this.pieceSetBuilder = new PieceSetBuilder();
  }

  placePieces(pieceSet: PieceSet, board: Board): void {
    pieceSet.getPiecePoints().forEach((piece, point) => {
      board.getCell(point).setPiece(piece);
    })
  }

  generatePieces(): PieceSet {

    this.placePawns();
    this.placeRocks();
    this.placeBishops();
    this.placeKings();
    this.placeKnights();
    this.placeQueens();
    
    return this.pieceSetBuilder.build();
  }

  private placePawns(): void {
    for(let i = 0; i < 8; i++) {
      this.pieceSetBuilder.addPiece(new Point(i, 1), PieceFactory.createPiece(PieceType.PAWN, Color.BLACK));
      this.pieceSetBuilder.addPiece(new Point(i, 6), PieceFactory.createPiece(PieceType.PAWN, Color.WHITE));
    }
  }

  private placeRocks(): void {
    for(let i = 0; i < 9; i += 7) {
      this.pieceSetBuilder.addPiece(new Point(i, 0), PieceFactory.createPiece(PieceType.ROOK, Color.BLACK));
      this.pieceSetBuilder.addPiece(new Point(i, 7), PieceFactory.createPiece(PieceType.ROOK, Color.WHITE))
    }
  }

  private placeKnights(): void {
    for(let i = 1; i < 7; i += 5) {
      this.pieceSetBuilder.addPiece(new Point(i, 0), PieceFactory.createPiece(PieceType.KNIGHT, Color.BLACK));
      this.pieceSetBuilder.addPiece(new Point(i, 7), PieceFactory.createPiece(PieceType.KNIGHT, Color.WHITE));
    }
  }

  private placeBishops(): void {
    for(let i = 2; i < 6; i += 3) {
      this.pieceSetBuilder.addPiece(new Point(i, 0), PieceFactory.createPiece(PieceType.BISHOP, Color.BLACK));
      this.pieceSetBuilder.addPiece(new Point(i, 7), PieceFactory.createPiece(PieceType.BISHOP, Color.WHITE));
    }
  }

  private placeQueens(): void {
    this.pieceSetBuilder.addPiece(new Point(3, 0), PieceFactory.createPiece(PieceType.QUEEN, Color.BLACK));
    this.pieceSetBuilder.addPiece(new Point(3, 7), PieceFactory.createPiece(PieceType.QUEEN, Color.WHITE));
  }

  private placeKings(): void {
    this.pieceSetBuilder.addPiece(new Point(4, 0), PieceFactory.createPiece(PieceType.KING, Color.BLACK));
    this.pieceSetBuilder.addPiece(new Point(4, 7), PieceFactory.createPiece(PieceType.KING, Color.WHITE));
  }
} 