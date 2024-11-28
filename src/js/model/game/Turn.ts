import { Move } from "./Move";

export interface Turn {

  getTurnNumber(): number;

  getMoves(): Move[];

  addMove(move: Move): void;

  removeLastMove(): void;
}