import { Color } from "../Color.js";
import { Point } from "../Point.js";
import { Piece } from "../piece/Piece.js";
import { Cell } from "./Cell.js";

export interface Board {

  getWidth(): number;

  getHeight(): number;
  
  getCell(point: Point): Cell;

  getAllCells(): Cell[];

  inBorder(point: Point): boolean;

}