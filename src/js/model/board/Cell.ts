import { Color } from "../Color.js";
import { Point } from "../Point.js";
import { Piece } from "../piece/Piece.js";

export class Cell {

  private piece: Piece | null;
  private readonly point: Point;
  private readonly color: Color;

  public constructor(color: Color, point: Point) {
    this.piece = null;
    this.point = point;
    this.color = color;
  }

  public isEmpty(): boolean {
    return this.piece == null ? true : false;
  }

  public getPiece(): Piece | null {
    return this.piece
  }

  public removePiece(): Piece | null {
    let currentPiece : Piece | null = this.piece;
    this.piece = null;
    return currentPiece;
  }

  public setPiece(piece: Piece) : Piece | null {
    let currentPiece : Piece | null = this.piece;
    this.piece = piece;
    return currentPiece;
  }

  public getPoint(): Point {
    return this.point;
  }

  public getColor(): Color {
    return this.color;
  }

}