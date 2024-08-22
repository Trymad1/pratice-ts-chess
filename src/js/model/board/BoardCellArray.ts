import { Color } from "../Color";
import { Point } from "../Point";
import { Piece } from "../piece/Piece";
import { Board } from "./Board";
import { Cell } from "./Cell";

export class BoardCellArray implements Board {

  private readonly width: number;
  private readonly height: number;  
  private readonly cellArr: readonly Cell[][];
  private readonly pieceIdDictionary: {[key: number]: Piece} 

  public constructor(width: number, height: number) {
    this.width = width;
    this.height = height;
    this.cellArr = this.initCellArray();
    this.pieceIdDictionary = {};
  }

  private initCellArray(): Cell[][] {
    const newCellArr: Cell[][] = [];
    let color: Color = Color.BLACK;
    const changeColor = () => {
      if(color == Color.WHITE) {
        color = Color.BLACK;
      } else {
        color = Color.WHITE;
      }
    } 

    for(let i: number = 0; i < this.height; i++) {
      changeColor();
      for(let j: number = 0; i < this.width; i++) {
        newCellArr[j][i] = new Cell(color, new Point(i,j));
        changeColor();
      }
    }

    return newCellArr;
  }

  getWidth(): number {
    return this.width;
  }

  getHeight(): number {
    return this.height;
  }

  getCell(point: Point): Cell {
    return this.cellArr[point.getY()][point.getX()];
  }

  // pieces not copy, maybe change it later if necessary
  copy(): Board {
    const copyBoard: Board = new BoardCellArray(this.width, this.height);

    for (let i = 0; i < this.height; i++) {
      const row = this.cellArr[i];
      
      for(let j = 0; j < this.width; j++) {
        const point: Point = new Point(j, i);
        const currCell: Cell = this.getCell(point);
        if(!currCell.isEmpty()) {
          copyBoard.getCell(point).setPiece(currCell.getPiece()!)
        }
      }
    }

    return copyBoard;
  }
}