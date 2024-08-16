import { Color } from "../Color";
import { Piece } from "../piece/Piece";

export class Cell {

  private piece : Piece | null;
  private color : Color;

  public constructor(color : Color) {
    this.piece = null;
    this.color = color;
  }

  public getColor() : Color {
    return this.color;
  }

  public setColor(color : Color) : void {
    this.color = color;
  }

  public isEmpty() : boolean {
    return this.piece == null ? true : false;
  }

  public getPiece() : Piece | null {
    return this.piece
  }

  public removePiece() : Piece | null {
    let currentPiece : Piece | null = this.piece;
    this.piece = null;
    return currentPiece;
  }

  public setPiece(piece : Piece) : Piece | null {
    let currentPiece : Piece | null = this.piece;
    this.piece = piece;
    return currentPiece;
  }

  public toString() : string {
    return this.piece == null ? "*" : this.piece.toString();
  }
}