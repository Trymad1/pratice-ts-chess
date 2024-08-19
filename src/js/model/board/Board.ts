import { Point } from "../Point";
import { Piece } from "../piece/Piece";
import { Cell } from "./Cell";

export interface Board {

  getWidth(): number;

  getHeight(): number;
  
  getPiece(point: Point): Piece | null;

  isCellEmpty(point: Point): boolean;

  clearCell(point: Point): void;

  setPiece(point: Point, piece: Piece): void;

  copy(): Board;

  toString(): string[][];
}