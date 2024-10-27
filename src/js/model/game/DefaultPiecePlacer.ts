import { Color } from "../Color.js";
import { Point } from "../Point.js";
import { Board } from "../board/Board.js";
import { Piece, PieceType } from "../piece/Piece.js";
import { PieceFactory } from "../piece/PieceFactory.js";
import { PiecePlacer } from "./PiecePlacer.js";

export class DefaultPiecePlacer implements PiecePlacer {

  placePieces(pieceMap: Map<Point, Piece>, board: Board): void {
    pieceMap.forEach((piece, point) => {
      board.getCell(point).setPiece(piece);
    })
  }

  generatePieces(): Map<Point, Piece> {
    const pieceMap = new Map<Point,Piece>();

    this.placePawns(pieceMap);
    this.placeRocks(pieceMap);
    this.placeBishops(pieceMap);
    this.placeKings(pieceMap);
    this.placeKnights(pieceMap);
    this.placeQueens(pieceMap);
    
    return pieceMap;
  }

  private placePawns(pieceMap: Map<Point, Piece>): void {
    for(let i = 0; i < 8; i++) {
      pieceMap.set(new Point(i, 1), PieceFactory.createPiece(PieceType.PAWN, Color.BLACK));
      pieceMap.set(new Point(i, 6), PieceFactory.createPiece(PieceType.PAWN, Color.WHITE));
    }
  }

  private placeRocks(pieceMap: Map<Point, Piece>): void {
    for(let i = 0; i < 9; i += 7) {
      pieceMap.set(new Point(i, 0), PieceFactory.createPiece(PieceType.ROOK, Color.BLACK));
      pieceMap.set(new Point(i, 7), PieceFactory.createPiece(PieceType.ROOK, Color.WHITE))
    }
  }

  private placeKnights(pieceMap: Map<Point, Piece>): void {
    for(let i = 1; i < 7; i += 5) {
      pieceMap.set(new Point(i, 0), PieceFactory.createPiece(PieceType.KNIGHT, Color.BLACK));
      pieceMap.set(new Point(i, 7), PieceFactory.createPiece(PieceType.KNIGHT, Color.WHITE));
    }
  }

  private placeBishops(pieceMap: Map<Point, Piece>): void {
    for(let i = 2; i < 6; i += 3) {
      pieceMap.set(new Point(i, 0), PieceFactory.createPiece(PieceType.BISHOP, Color.BLACK));
      pieceMap.set(new Point(i, 7), PieceFactory.createPiece(PieceType.BISHOP, Color.WHITE));
    }
  }

  private placeQueens(pieceMap: Map<Point, Piece>): void {
    pieceMap.set(new Point(3, 0), PieceFactory.createPiece(PieceType.QUEEN, Color.BLACK));
    pieceMap.set(new Point(3, 7), PieceFactory.createPiece(PieceType.QUEEN, Color.WHITE));
  }

  private placeKings(pieceMap: Map<Point, Piece>): void {
    pieceMap.set(new Point(4, 0), PieceFactory.createPiece(PieceType.KING, Color.BLACK));
    pieceMap.set(new Point(4, 7), PieceFactory.createPiece(PieceType.KING, Color.WHITE));
  }
} 