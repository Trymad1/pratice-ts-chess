import { Board } from "./model/board/Board.js";
import { BoardCellArray } from "./model/board/BoardCellArray.js";
import { DefaultStartPiecePlacer } from "./model/game/DefaultStartPiecePlacer.js";
import { StartPiecePlacer } from "./model/game/StartPiecePlacer.js";
import { BoardViewController } from "./model/view/BoardViewController.js";

// code for test, change in future

const board: Board = new BoardCellArray(8,8);
const boardViewController: BoardViewController = 
  new BoardViewController(document.querySelector('.board')!, board);
const startPiecePlacer: StartPiecePlacer = new DefaultStartPiecePlacer();

startPiecePlacer.placePieces(board);
boardViewController.initBoardDiv();

