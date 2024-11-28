import { Move } from "./Move";
import { Turn } from "./Turn";

export class TurnImpl implements Turn {

  private turnNumber: number;
  private moves: Move[];

  public constructor (turnNumber: number) {
    this.turnNumber = turnNumber;
    this.moves = [];
  }

  getTurnNumber(): number {
    return this.turnNumber;
  }

  getMoves(): Move[] {
    return this.moves.slice();
  }

  addMove(move: Move): void {
    this.moves.push(move);
  }

  removeLastMove(): void {
    this.moves.pop();
  }
}