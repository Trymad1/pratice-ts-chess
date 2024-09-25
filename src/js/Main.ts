import { Board } from "./model/board/Board.js";
import { BoardCellArray } from "./model/board/BoardCellArray.js";
import { DefaultPiecePlacer } from "./model/game/DefaultPiecePlacer.js";
import { PiecePlacer } from "./model/game/PiecePlacer.js";
import { DivBoardView } from "./model/view/DivBoardView.js";

// code for test, change in future

const board: Board = new BoardCellArray(8,8);
const boardViewController: DivBoardView = 
  new DivBoardView(document.querySelector('.board')!, board);
const startPiecePlacer: PiecePlacer = new DefaultPiecePlacer();

startPiecePlacer.placePieces(startPiecePlacer.generatePieces(), board);
boardViewController.initBoardDiv();

