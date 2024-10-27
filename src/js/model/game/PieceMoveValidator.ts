import { Color } from "../Color.js";
import { Board } from "../board/Board.js";
import { Cell } from "../board/Cell.js";
import { King } from "../piece/King";
import { Piece } from "../piece/Piece.js";
import { Move } from "./Move.js";
import { MoveBuilder } from "./MoveImpl.js";
import { PieceSet } from "./PieceSet";

export class PieceMoveValidator {
  
  private board: Board;
  private pieceSet: PieceSet;
  private lastSimulatedMove: Move | null;
  private moveBuilder: MoveBuilder;

  public constructor(board: Board, pieceSet: PieceSet) {
    this.board = board;
    this.pieceSet = pieceSet;
  }
  
  private getAttackedCells(pieces: Piece[]): Set<Cell> {
    const attackedCells: Set<Cell> = new Set();
    pieces.forEach(piece => {
      const cells: Cell[] = piece.getAvailableCellToMove(this.board);
      cells.forEach(cell => attackedCells.add(cell));
    });

    return attackedCells;
  }

  getValidatedMove(piece: Piece, enemyPieces: Piece[]): Cell[] {
    const moves = piece.getAvailableCellToMove(this.board);
    const validatedCell: Cell[] = [];
    const pieceKing = this.pieceSet.getKing(piece.getColor());
    moves.forEach(cell => {
      const move: Move = this.simulateMove(piece, cell);
      const eatenPiece: Piece | null = move.getEatenPiece();
      if(eatenPiece != null) {
        const index: number  = enemyPieces.indexOf(eatenPiece);
        enemyPieces.splice(index);
      }

      if(!this.isInCheck(piece, enemyPieces)) {
        validatedCell.push(cell);
      }

      this.undoSimulateMove();
    })

    return validatedCell;
  }

  isInCheck(king: King, enemyPieces: Piece[]): boolean {
    const attackedCells: Set<Cell> = this.getAttackedCells(enemyPieces);
    return attackedCells.has(king.getCell()!);
  }

  private simulateMove(piece: Piece, target: Cell): Move {
    if(this.lastSimulatedMove != null) this.undoSimulateMove();
    const startPieceCell: Cell = piece.getCell()!;
    const eatenPiece: Piece | null = piece.move(target);
    const move = this.moveBuilder
    .eatenPiece(eatenPiece)
    .movedPiece(piece)
    .startCell(startPieceCell)
    .targetCell(target)
    .build();

    this.lastSimulatedMove = move;
    return move;
  }

  private undoSimulateMove(): void {
    if(this.lastSimulatedMove == null) return;
    const move = this.lastSimulatedMove!;
    move.getMovedPiece().move(move.getStartCell());
    if(move.getEatenPiece != null) {
      move.getEatenPiece()!.move(move.getTargetCell());
    }
  }
} 