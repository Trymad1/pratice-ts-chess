import { Color } from "../Color.js";
import { Point } from "../Point.js";
import { King } from "../piece/King.js";
import { Piece } from "../piece/Piece.js";

export class PieceSet {

  private points: Map<Point, Piece>;
  private white: Piece[];
  private black: Piece[];
  private whiteKing: King;
  private blackKing: King;

  constructor(points: Map<Point, Piece>, white: Piece[], black: Piece[], whiteKing: King, blackKing: King) {
    this.points = points;
    this.white = white;
    this.black = black;
    this.whiteKing = whiteKing;
    this.blackKing = blackKing;
  }

  public getPiecePoints(): Map<Point, Piece> {
    return this.points;
  }
  
  public getPieces(color: Color): Piece[] {
    if(color == Color.WHITE) return this.white;
    else return this.black;
  }

  public getKing(color: Color): King {
    if(color == Color.WHITE) return this.whiteKing;
    else return this.blackKing;
  }
}

export class PieceSetBuilder {

  private points: Map<Point, Piece> = new Map();
  private white: Piece[] = [];
  private black: Piece[] = [];
  private whiteKing: King | null  = null;
  private blackKing: King | null = null;

  addPiece(point: Point, piece: Piece) {
    this.points.set(point, piece);
    this.getPieceArr(piece.getColor()).push(piece);
    if(piece instanceof King) this.setKing(piece);
  }

  build(): PieceSet {
    const pieceSet: PieceSet = new PieceSet(this.points, this.white, this.black, this.whiteKing!, this.blackKing!);

    this.points = new Map();
    this.white = [];
    this.black = [];
    this.whiteKing = null;
    this.blackKing = null;

    return pieceSet;
  }

  private getPieceArr(color: Color): Piece[] {
    if(color == Color.BLACK) return this.black;
    else return this.white;
  }

  private setKing(king: King) {
    if(king.getColor() == Color.BLACK) this.blackKing = king;
    else this.whiteKing = king;
  }
}