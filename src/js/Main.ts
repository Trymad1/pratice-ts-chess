import { Board } from "./model/board/Board.js";
import { BoardCellArray } from "./model/board/BoardCellArray.js";
import { DefaultStartPiecePlacer } from "./model/game/DefaultStartPiecePlacer.js";
import { StartPiecePlacer } from "./model/game/StartPiecePlacer.js";
import { BoardViewController } from "./model/view/BoardViewController.js";

// code for test, change in future

const boardViewController: BoardViewController = new BoardViewController(document.querySelector('.board')!);
const startPiecePlacer: StartPiecePlacer = new DefaultStartPiecePlacer();
const board: Board = new BoardCellArray(8,8);

startPiecePlacer.placePieces(board);
boardViewController.setBoard(board);
boardViewController.initBoardDiv();

