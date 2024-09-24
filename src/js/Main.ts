import { Board } from "./model/board/Board.js";
import { BoardCellArray } from "./model/board/BoardCellArray.js";
import { DefaultStartPiecePlacer } from "./model/game/DefaultStartPiecePlacer.js";
import { StartPiecePlacer } from "./model/game/StartPiecePlacer.js";
import { DivBoardView } from "./model/view/DivBoardView.js";

// code for test, change in future

const board: Board = new BoardCellArray(8,8);
const boardViewController: DivBoardView = 
  new DivBoardView(document.querySelector('.board')!, board);
const startPiecePlacer: StartPiecePlacer = new DefaultStartPiecePlacer();

startPiecePlacer.placePieces(board);
boardViewController.initBoardDiv();

