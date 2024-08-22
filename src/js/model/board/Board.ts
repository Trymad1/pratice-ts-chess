import { Point } from "../Point";
import { Piece } from "../piece/Piece";

export interface Board {

  getWidth(): number;

  getHeight(): number;
  
  getPiece(point: Point): Piece | null;

  getPieceById(id: number) : Piece | null;

  isCellEmpty(point: Point): boolean;

  clearCell(point: Point): void;

  setPiece(point: Point, piece: Piece): void;

  copy(): Board;

  toString(): string[][];
}