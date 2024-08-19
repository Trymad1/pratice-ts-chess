import { Color } from "../Color";
import { Piece } from "../piece/Piece";

export class Cell {

  private piece: Piece | null;

  public constructor() {
    this.piece = null;
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

  public toString(): string {
    return this.piece == null ? "*" : this.piece.toString();
  }
}