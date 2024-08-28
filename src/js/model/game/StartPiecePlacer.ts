import { Board } from "../board/Board.js";

export interface StartPiecePlacer {

  placePieces(board: Board): void;

}