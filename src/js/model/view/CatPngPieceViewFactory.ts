import { Color } from "../Color";
import { PieceType } from "../piece/Piece";
import { PieceViewFactory } from "./PieceViewFactory";

export class CatPngPieceViewFactory implements PieceViewFactory {

  private readonly PAWN_PNG: string = 'pawn';
  private readonly QUEEN_PNG: string = 'queen';
  private readonly KING_PNG: string = 'king';
  private readonly ROOK_PNG: string = 'rook';
  private readonly BISHOP_PNG: string = 'bishop';
  private readonly KNIGHT_PNG: string = 'knight';

  private readonly PATH_TO_IMG: string = '../img/meow/'

  private readonly pieceDictionary: { [key: string]: string} = {
    "pawn" : this.PAWN_PNG,
    "knight" : this.KNIGHT_PNG,
    "bishop" : this.BISHOP_PNG,
    "rook" : this.ROOK_PNG,
    "queen" : this.QUEEN_PNG,
    "king" : this.KING_PNG
  }

  getImage(pieceType: PieceType, color: Color): string {
    return `<img src='${this.PATH_TO_IMG}${this.pieceDictionary[pieceType]}_${color}.png'>`
  }
  getStyle(color: Color): string {
    return "background-color: transparent;";
  }
  isColorChangeable(): boolean {
    throw new Error("Method not implemented.");
  }
  setStyleColor(color: Color, styleColorName: string): boolean {
    throw new Error("Method not implemented.");
  }

}