import { Point } from "../Point";
import { Piece } from "../piece/Piece";
import { Cell } from "./Cell";

export interface Board {

  getWidth(): number;

  getHeight(): number;
  
  getCell(point: Point): Cell;

  copy(): Board;

}