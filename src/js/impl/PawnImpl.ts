import { Pawn } from "../interface/Pawn";

export class PawnImpl implements Pawn {
  color: string;
  constructor(color : string) {
    this.color = color;
  }

  toString() : string {
    return this.color;
  }
}