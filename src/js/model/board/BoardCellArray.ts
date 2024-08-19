import { Point } from "../Point";
import { Piece } from "../piece/Piece";
import { Board } from "./Board";
import { Cell } from "./Cell";

export class BoardCellArray implements Board {

  private readonly width: number;
  private readonly height: number;  
  private readonly cellArr: readonly Cell[][];

  public constructor(width: number, height: number) {
    this.width = width;
    this.height = height;
    this.cellArr = this.initCellArray();
  }

  private initCellArray(): Cell[][] {
    return Array.from({ length: this.height }, () => 
      Array.from({ length: this.width }, () => new Cell())
    );
  }

  getWidth(): number {
    return this.width;
  }

  getHeight(): number {
    return this.height;
  }

  getPiece(point: Point): Piece | null {
    return this.cellArr[point.getY()][point.getX()].getPiece();
  }

  isCellEmpty(point: Point): boolean {
    return this.cellArr[point.getY()][point.getX()].isEmpty();
  }

  clearCell(point: Point): void {
    this.cellArr[point.getY()][point.getX()].removePiece();
  }

  setPiece(point: Point, piece: Piece) {
    this.cellArr[point.getY()][point.getX()].setPiece(piece);
  }

  copy(): Board {
    throw new Error("Method not implemented.");
  }

  toString(): string[][] {
    return this.cellArr.map( row => 
      row.map(cell => cell.toString()));
  }
}