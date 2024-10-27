import { Color } from "../Color.js";
import { Board } from "../board/Board.js";
import { BoardCellArray } from "../board/BoardCellArray.js";
import { Cell } from "../board/Cell.js";
import { King } from "../piece/King.js";
import { Piece } from "../piece/Piece.js";
import { DefaultPiecePlacer } from "./DefaultPiecePlacer.js";
import { PiecePlacer } from "./PiecePlacer.js";
import { PieceSet } from "./PieceSet.js";

export class GameManager {

  private board: Board;
  private piecePlacer: PiecePlacer;
  private pieceSet: PieceSet;

  // depending on the game mode create board and piece placer, 
  // impl in future, now always default chess
  constructor(gamemode: GameMode = GameMode.DEFAULT_CHESS) {
    this.board = new BoardCellArray(8,8);
    this.piecePlacer = new DefaultPiecePlacer();

    const pieceSet: PieceSet = this.piecePlacer.generatePieces();
    this.piecePlacer.placePieces(pieceSet, this.board);
  };

  public getBoard(): Board {
    return this.board;
  }

  private getKing(color: Color): King {
    return this.pieceSet.getKing(color);
  }

  public getValidMoves(piece: Piece): Cell[] {
    return piece.getAvailableCellToMove(this.board);
  }
}

export enum GameMode {
  DEFAULT_CHESS
}