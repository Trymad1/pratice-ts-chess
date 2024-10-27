import { Board } from "../board/Board.js";
import { Cell } from "../board/Cell.js";
import { Piece, PieceType } from "../piece/Piece.js";
import { PieceViewFactory } from "./PieceViewFactory.js";
import { Point } from "../Point.js";
import { Color } from "../Color.js";
import { DefaultSvgPieceViewFactory } from "./DefaultSvgPieceViewFactory.js";
import { GameManager } from "../game/GameManager.js";

export class DivBoardView {

  private pieceViewFactory: PieceViewFactory;
  private board: Board;
  private boardDiv: HTMLDivElement;
  private cellHook: { [key: string] : Cell } = { };
  private pieceHook: {[key: string] : Piece} = { } 
  private cellDivHook: { [key: string] : HTMLDivElement } = { };
  private pieceDivHook: {[key: string] : HTMLDivElement } = { };
  
  private gameManagerTest: GameManager;

  public constructor(boardDiv: HTMLDivElement, board: Board) {
    this.pieceViewFactory = new DefaultSvgPieceViewFactory();
    this.board = board;
    this.boardDiv = boardDiv;
    
    this.gameManagerTest = new GameManager(board);
  }

  setPieceViewFactory(factory: PieceViewFactory): void {
    this.pieceViewFactory = factory;
  }

  setBoard(board: Board) {
    this.board = board;
  }

  setBoardDiv(div: HTMLDivElement) {
    this.boardDiv = div;
  }

  initBoardDiv() { // TODO test init
    
    const pieceColorOnBoard: Color[] = [];

    this.board.getAllCells().forEach(cell => {
      const piece: Piece | null = cell.getPiece();

      const cellDiv: HTMLDivElement = this.createCellDiv(cell);
      this.boardDiv.appendChild(cellDiv);

      if(piece != null) {
        const pieceColor = piece.getColor();
        if(!pieceColorOnBoard.includes(pieceColor)) pieceColorOnBoard.push(pieceColor);
        const pieceDiv: HTMLDivElement = this.createPieceDiv(piece);
        cellDiv.appendChild(pieceDiv);
      }
    });

    let styleSheet: HTMLStyleElement | null = document.getElementById('dynamicPieceStyle') as HTMLStyleElement;

    if (!styleSheet) {
        styleSheet = document.createElement('style');
        styleSheet.id = 'dynamicPieceStyles';
        document.head.appendChild(styleSheet);
    }

    const styleSheetContent: string = pieceColorOnBoard.map(piece => this.createPieceStyle(piece)).join(" ");
    styleSheet.textContent = styleSheetContent;
  }

  private createPieceStyle(color: Color): string {
    const pieceStyle = this.pieceViewFactory.getStyle(color);
    return `.piece.${color} { ${pieceStyle} }`
  }

  private createCellDiv(cell: Cell): HTMLDivElement {
    const cellDiv = document.createElement("div");
    const cellId: string = cell.getId();
    cellDiv.className = `cell ${cell.getColor()}`;
    cellDiv.id = cellId;
    this.addEventListenersToCellDiv(cellDiv);
    this.cellHook[cellId] = cell;
    this.cellDivHook[cellId] = cellDiv;
    return cellDiv;
  }

  
  private isCellEmpty(cellDiv: HTMLDivElement): boolean{
    return !cellDiv.hasChildNodes();
  }

  private takedPiece: HTMLDivElement | null = null;
  private availableCells: Cell[] = [];

  private addEventListenersToCellDiv(cellDiv: HTMLDivElement) {
    cellDiv.addEventListener('click', () => {
      if(this.takedPiece == null) return;
      if(this.availableCells.includes(this.cellHook[cellDiv.id])) {
        this.movePieceToCell(this.takedPiece, cellDiv);

        //maybe need refactor in future, board manipulates on separate class
        let eaten: Piece | null = this.pieceHook[this.takedPiece.id].move(this.cellHook[cellDiv.id]) 
        this.gameManagerTest.eatenPiece(eaten);

      } 
      this.takedPiece = null;
      this.clearAvailablePoints();
    }, true);
  }

  private addEventListenersToPieceDiv(pieceDiv: HTMLDivElement) {
    pieceDiv.addEventListener('click', () => {
      if(this.takedPiece != null) return;
      this.takedPiece = pieceDiv;
      this.selectAvailableCells(pieceDiv);
    })
  }

  public movePieceToCell(pieceDiv: HTMLDivElement, cellDiv: HTMLDivElement): HTMLDivElement | null {
    this.getCellFromPiece(pieceDiv)?.removeChild(pieceDiv);
    const pieceFromTargetDiv: HTMLDivElement | null = this.getPieceFromCell(cellDiv)
    if(pieceFromTargetDiv != null) {
      cellDiv.removeChild(pieceFromTargetDiv);
    }
    cellDiv.appendChild(pieceDiv);
    return pieceFromTargetDiv;
  }

  private selectAvailableCells(pieceDiv: HTMLDivElement): void {
    if(this.availableCells.length > 0) {
      this.clearAvailablePoints();
    }

    const piece: Piece = this.pieceHook[this.takedPiece!.id];
    const cellDiv: HTMLDivElement | null = this.getCellFromPiece(pieceDiv);
    if(cellDiv === null) return; // if piece eat another piece, this listener dont need to work.
    const cell: Cell = this.cellHook[this.getCellFromPiece(pieceDiv)!.id];
    this.availableCells = this.gameManagerTest.getValidMoves(piece);
    this.availableCells.forEach(cell => {
      const cellDiv = this.cellDivHook[cell.getId()];
      cellDiv.classList.add('canmove');
      this.availableCells.push(cell);
    });
  }

  private clearAvailablePoints(): void {
    this.availableCells.forEach(cell => {
      const cellDiv = this.cellDivHook[cell.getId()];
      cellDiv.classList.remove('canmove');
    })
    this.availableCells = [];
  }

  private getPieceFromCell(cellDiv: HTMLDivElement): HTMLDivElement | null {
    return cellDiv.firstElementChild as HTMLDivElement;
  }

  private getCellFromPiece(pieceDiv: HTMLDivElement): HTMLDivElement | null {
    return pieceDiv.parentElement as HTMLDivElement;
  }

  private createPieceDiv(piece: Piece): HTMLDivElement {
    const pieceDiv = document.createElement("div");
    const className = `piece ${piece.getColor()}`
    const pieceId = piece.getId();
    pieceDiv.className = className;
    pieceDiv.id = pieceId;
    pieceDiv.innerHTML = this.pieceViewFactory.getImage(piece.getType(), piece.getColor());
    this.pieceHook[pieceId] = piece;
    this.pieceDivHook[pieceId] = pieceDiv;
    this.addEventListenersToPieceDiv(pieceDiv);
    return pieceDiv;
  }
}