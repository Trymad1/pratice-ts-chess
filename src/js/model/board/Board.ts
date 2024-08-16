import { Piece } from "../piece/Piece";
import { Cell } from "./Cell";

export interface Board {

  getWidth() : number;

  getHeight() : number;
  
  getPiece(x : number, y : number) : Piece | null;

  isCellEmpty(x : number, y : number) : boolean;

  clearCell(x : number, y : number) : void;

  setPiece(x : number, y : number);

  copy() : Board;

  toString() : string[][];
}