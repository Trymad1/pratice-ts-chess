import { Piece } from "../piece/Piece";
import { Cell } from "./Cell";

export interface Board {

  getWidth() : number;

  getHeight() : number;

  getPiece(position : string) : Piece | null;
  
  getPiece(x : number, y : number) : Piece | null;

  isCellEmpty(position : string) : boolean;

  isCellEmpty(x : number, y : number) : boolean;

  clearCell(position : string) : void;

  clearCell(x : number, y : number) : void;

  setPiece(position : string) : void;

  setPiece(x : number, y : number);

  copy() : Board;

  toString() : string[][];
}