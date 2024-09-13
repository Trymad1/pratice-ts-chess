import { Color } from "../Color.js";
import { Board } from "../board/Board.js";
import { Cell } from "../board/Cell.js";

export enum PieceType {
  PAWN = "pawn", 
  KNIGHT = "knight", 
  BISHOP = "bishop", 
  ROOK = "rook", 
  QUEEN = "queen", 
  KING = "king"
}

// проверка всех возможных ходов фигур
// король под шахом?

export abstract class Piece {

  private color: Color;
  private pieceType: PieceType;
  private cell: Cell | null;
  private readonly uuid: string;

  public constructor(color: Color, pieceType: PieceType) {
    this.color = color;
    this.pieceType = pieceType;
    this.cell = null;
    this.uuid = this.generateId();
  }

  private generateId(): string {
    const timestamp = Date.now().toString(36);
    const randomString = Math.random().toString(36).substr(2, 9);
    return `${timestamp}-${randomString}`;
  }

  public abstract getAvailableCellToMove(board: Board, pieceCell: Cell): Cell[];

  public getColor(): Color {
    return this.color;
  }

  public getType(): PieceType {
    return this.pieceType;
  }

  public setCell(cell: Cell | null) {
    this.cell = cell;
  }

  public getCell(): Cell | null {
    return this.cell;
  } 

  public getId(): string {
    return this.uuid;
  }

  public move(targetCell: Cell) : Piece | null {
    const anotherPiece: Piece | null = targetCell.setPiece(this);
    return anotherPiece;
  }
}
