import { Color } from "../Color.js";
import { PieceType } from "../piece/Piece.js";

export interface PieceViewFactory {

  getImage(pieceType: PieceType, color: Color): string;

  getStyle(pieceType: PieceType, color: Color): Record<string, string>;

  isColorChangeable(): boolean;

  setStyleColor(color: Color, styleColorName: string): boolean;

}