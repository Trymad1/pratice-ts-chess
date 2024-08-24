import { Color } from "../Color.js";
import { Bishop } from "./Bishop.js";
import { King } from "./King.js";
import { Knight } from "./Knight.js";
import { Pawn } from "./Pawn.js";
import { Piece, PieceType } from "./Piece.js";
import { Queen } from "./Queen.js";
import { Rook } from "./Rook.js";

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