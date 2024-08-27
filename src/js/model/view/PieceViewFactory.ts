import { Color } from "../Color";
import { PieceType } from "../piece/Piece";

export interface PieceViewFactory {

  getImage(pieceType: PieceType, color: Color): string;

  getStyle(pieceType: PieceType, color: Color): Record<string, string>;

}