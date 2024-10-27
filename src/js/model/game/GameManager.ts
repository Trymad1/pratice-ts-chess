import { Color } from "../Color.js";
import { Point } from "../Point.js";
import { Board } from "../board/Board.js";
import { BoardCellArray } from "../board/BoardCellArray.js";
import { Cell } from "../board/Cell.js";
import { King } from "../piece/King.js";
import { Piece } from "../piece/Piece.js";
import { DefaultPiecePlacer } from "./DefaultPiecePlacer.js";
import { PiecePlacer } from "./PiecePlacer.js";

export class GameManager {

  private board: Board;
  private piecePlacer: PiecePlacer;
  private blackKing: King;
  private whiteKing: King;

  // depending on the game mode create board and piece placer, 
  // impl in future, now always default chess
  constructor(gamemode: GameMode = GameMode.DEFAULT_CHESS) {
    this.board = new BoardCellArray(8,8);
    this.piecePlacer = new DefaultPiecePlacer();

    const pieceMap: Map<Point, Piece> = this.piecePlacer.generatePieces();
    this.piecePlacer.placePieces(pieceMap, this.board);
    this.blackKing = this.board.getCell(new Point(4, 0)).getPiece()!;
    this.whiteKing = this.board.getCell(new Point(7, 4)).getPiece()!;
  };

  public getBoard(): Board {
    return this.board;
  }

  // Crappy code, change the logic of getting a king in the future
  public getKing(color: Color): King {
    if(color == Color.BLACK) return  this.blackKing;
    else return this.whiteKing;
  }

  public getValidMoves(piece: Piece): Cell[] {
    return piece.getAvailableCellToMove(this.board);
  }
}

export enum GameMode {
  DEFAULT_CHESS
}