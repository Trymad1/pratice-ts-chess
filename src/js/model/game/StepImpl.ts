import { Point } from "../Point.js";
import { Board } from "../board/Board.js";
import { Piece } from "../piece/Piece.js";
import { Step } from "./Step.js";

export class StepImpl implements Step {

  private readonly movedPiece: Piece;
  private readonly pointToMove: Point;
  private readonly currentBoard: Board;

  constructor(movedPiece: Piece, pointToMove: Point, board: Board) {
    this.movedPiece = movedPiece;
    this.pointToMove = pointToMove;
    this.currentBoard = board;
  }

  public getMovedPiece(): Piece {
    return this.movedPiece;
  }

  public getPointToMove(): Point {
    return this.pointToMove;
  }

  public getCurrentBoard(): Board {
    return this.currentBoard;
  }
  
}