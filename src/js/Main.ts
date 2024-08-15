import { PawnImpl } from "./impl/PawnImpl";
import { Pawn } from "./interface/Pawn";

let pawn : Pawn = new PawnImpl("test");
console.log(pawn.toString());