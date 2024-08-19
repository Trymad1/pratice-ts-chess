import { Point } from "../Point";
import { Piece } from "../piece/Piece";
import { Board } from "./Board";

export class BoardCellArray implements Board {

  private readonly width;
  private readonly height;  

  public constructor(width : number, height : number) {
    this.width = width;
    this.height = height;
  }

  getWidth(): number {
    return this.width;
  }

  getHeight(): number {
    return this.height;
  }

  getPiece(point: Point): Piece | null {
    throw new Error("Method not implemented.");
  }

  isCellEmpty(point: Point): boolean {
    throw new Error("Method not implemented.");
  }

  clearCell(point: Point): void {
    throw new Error("Method not implemented.");
  }

  setPiece(point: Point) {
    throw new Error("Method not implemented.");
  }

  copy(): Board {
    throw new Error("Method not implemented.");
  }

  toString(): string[][] {
    throw new Error("Method not implemented.");
  }
}