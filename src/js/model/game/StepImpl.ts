import { Point } from "../Point";
import { Board } from "../board/Board";
import { Piece } from "../piece/Piece";
import { Step } from "./Step";

export class StepImpl implements Step {

  private movedPiece : Piece;
  private pointToMoveStr : string;
  private pointToMove : Point;
  private currentBoard : Board;

  constructor(movedPiece : Piece, pointToMove : Point, board : Board) {
    this.movedPiece = movedPiece;
    this.pointToMove = this.pointToMove;
    this.currentBoard = board;
  }

  getMovedPiece(): Piece {
    throw new Error("Method not implemented.");
  }
  getPointToMove(): Point {
    throw new Error("Method not implemented.");
  }
  getFenPosition(): string {
    throw new Error("Method not implemented.");
  }
  getCurrentBoard(): Board {
    throw new Error("Method not implemented.");
  }
}