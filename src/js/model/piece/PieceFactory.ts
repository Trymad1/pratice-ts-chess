import { Color } from "../Color";
import { Bishop } from "./Bishop";
import { King } from "./King";
import { Knight } from "./Knight";
import { Pawn } from "./Pawn";
import { Piece, PieceType } from "./Piece";
import { Queen } from "./Queen";
import { Rook } from "./Rook";

type Constructor<T> = new (...args: any[]) => T;

export class PieceFactory {
  
  private static readonly pieceDictionary: { [key: string]: Constructor<Piece>} = {
    "pawn" : Pawn,
    "knight" : Knight,
    "bishop" : Bishop,
    "rook" : Rook,
    "queen" : Queen,
    "king" : King
  }

  public static createPiece(pieceType: PieceType, color: Color): Piece {
    return new this.pieceDictionary[pieceType](color);
  }

}