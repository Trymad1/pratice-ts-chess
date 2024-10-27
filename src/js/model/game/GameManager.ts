import { Color } from "../Color.js";
import { Board } from "../board/Board.js";
import { BoardCellArray } from "../board/BoardCellArray.js";
import { Cell } from "../board/Cell.js";
import { King } from "../piece/King.js";
import { Piece } from "../piece/Piece.js";
import { DefaultPiecePlacer } from "./DefaultPiecePlacer.js";
import { PieceMoveValidator } from "./PieceMoveValidator.js";
import { PiecePlacer } from "./PiecePlacer.js";
import { PieceSet } from "./PieceSet.js";

export class GameManager {

  private board: Board;
  private piecePlacer: PiecePlacer;
  private pieceSet: PieceSet;
  private moveValidator: PieceMoveValidator;

  // depending on the game mode create board and piece placer, 
  // impl in future, now always default chess
  constructor(board: Board) {
    this.board = board
    this.piecePlacer = new DefaultPiecePlacer();
    this.pieceSet = this.piecePlacer.generatePieces();
    this.moveValidator = new PieceMoveValidator(this.board, this.pieceSet);

    this.piecePlacer.placePieces(this.pieceSet, this.board);
  };

  public getBoard(): Board {
    return this.board;
  }

  private getKing(color: Color): King {
    return this.pieceSet.getKing(color);
  }

  public getValidMoves(piece: Piece): Cell[] {
    const enemyColor: Color = piece.getColor() == Color.BLACK ? Color.WHITE : Color.BLACK; // fix hardcode
    return this.moveValidator.getValidatedMove(piece, this.pieceSet.getPieces(enemyColor));
  }

  public eatenPiece(piece: Piece | null) { // delete in future
    if(piece == null) return;
    const color: Color = piece!.getColor();
    const index = this.pieceSet.getPieces(color).indexOf(piece!);
    this.pieceSet.getPieces(color).splice(index, 1);
  }
}

export enum GameMode {
  DEFAULT_CHESS
}