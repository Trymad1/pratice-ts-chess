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
  }

  public initCellArray(): void {
    const array: Cell[][] = [];
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