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
  private cellAttackMap: Map<Cell, Piece[]>;
  private kingsDictionary: { [key: string]: Piece} = { }

  // depending on the game mode create board and piece placer, 
  // impl in future, now always default chess
  constructor(gamemode: GameMode = GameMode.DEFAULT_CHESS) {
    this.board = new BoardCellArray(8,8);
    this.piecePlacer = new DefaultPiecePlacer();
    this.cellAttackMap = new Map<Cell, Piece[]>();

    const pieceMap: Map<Point, Piece> = this.piecePlacer.generatePieces();
    this.piecePlacer.placePieces(pieceMap, this.board);
    this.board.getAllCells().forEach(cell => {
      this.cellAttackMap.set(cell, []);
    });

    pieceMap.forEach(piece => {
      const validCells: Cell[] = piece.getAvailableCellToMove(this.board);
      validCells.forEach(cell => {
        this.cellAttackMap.get(cell)!.push(piece);
      })
      
      if(piece instanceof King) {
        this.kingsDictionary[piece.getColor()] = piece;
      }
    })
  };

  public getBoard(): Board {
    return this.board;
  }

  public getValidMoves(piece: Piece): Cell[] {
    return piece.getAvailableCellToMove(this.board);
  }
}

export enum GameMode {
  DEFAULT_CHESS
}