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

  // pieces not copy, maybe change it later if necessary
  copy(): Board {
    const copyBoard: Board = new BoardCellArray(this.width, this.height);

    for (let i = 0; i < this.height; i++) {
      const row = this.cellArr[i];
      
      for(let j = 0; j < this.width; j++) {
        const point: Point = new Point(j, i);
        if(!this.isCellEmpty(point)) {
          copyBoard.setPiece(point, this.getPiece(point)!);
        }
      }
    }

    return copyBoard;
  }

  toString(): string[][] {
    return this.cellArr.map( row => 
      row.map(cell => cell.toString()));
  }
}