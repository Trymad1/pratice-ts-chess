import { Board } from "../board/Board.js";
import { BoardCellArray } from "../board/BoardCellArray.js";
import { Cell } from "../board/Cell.js";
import { Piece, PieceType } from "../piece/Piece.js";
import { DefaultSvgPieceViewFactory } from "./DefaultSvgPieceViewFactory.js";
import { PieceViewFactory } from "./PieceViewFactory.js";
import { Point } from "../Point.js";
import { Color } from "../Color.js";

export class BoardViewController {

  private pieceViewFactory: PieceViewFactory;
  private board: Board;
  private boardDiv: HTMLDivElement;

  public constructor(boardDiv: HTMLDivElement) {
    this.pieceViewFactory = new DefaultSvgPieceViewFactory();
    this.board = new BoardCellArray(8, 8); // TODO hardcode, change to init default board another way
    this.boardDiv = boardDiv;
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

    for(let i = 0; i < 8; i++) {
      for(let j = 0; j < 8; j++) {
        const cell: Cell = this.board.getCell(new Point(j,i));
        const piece: Piece | null = cell.getPiece();

        const cellDiv: HTMLDivElement = this.createCellDiv(cell);
        this.boardDiv.appendChild(cellDiv);
  
        if(piece != null) {
          const pieceColor = piece.getColor();
          if(!pieceColorOnBoard.includes(pieceColor)) pieceColorOnBoard.push(pieceColor);
          const pieceDiv: HTMLDivElement = this.createPieceDiv(piece);
          cellDiv.appendChild(pieceDiv);
        }
      }
    }

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
    cellDiv.className = `cell ${cell.getColor()}`;
    this.addEventListenersToCellDiv(cellDiv);
    return cellDiv;
  }

  private takedPiece: HTMLDivElement | null = null;

  private isCellEmpty(cellDiv: HTMLDivElement): boolean{
    return !cellDiv.hasChildNodes();
  }

  private addEventListenersToCellDiv(cellDiv: HTMLDivElement) {
    cellDiv.addEventListener('click', () => {
      if(this.takedPiece == null) {
        this.takedPiece = this.getPieceFromCell(cellDiv);
      } else {
        if(!this.isCellEmpty(cellDiv)) {
          this.takedPiece = null;
          return;
        }
        const parentChild = this.takedPiece?.parentElement;
        parentChild?.removeChild(this.takedPiece!);
        cellDiv.appendChild(this.takedPiece!);
        this.takedPiece = null;
      }
    });
  }

    // TODO test 
  //   cellDiv.addEventListener('mouseup', () => {
  //     console.log('down start')
  //     if(this.takedPiece == null) {
  //       console.log('taked piece null')
  //       return;
  //     }
  //     if(this.isCellEmpty(cellDiv)) {
  //       const previousCell: HTMLDivElement = this.takedPiece.parentElement as HTMLDivElement;
  //       previousCell.removeChild(this.takedPiece);
  //       cellDiv.appendChild(this.takedPiece);
  //       this.takedPiece = null;
  //     } else {
  //       this.takedPiece = null;
  //     }
  //     console.log('down end')
  //   })
  // }


  private getPieceFromCell(cellDiv: HTMLDivElement): HTMLDivElement | null {
    return cellDiv.firstElementChild as HTMLDivElement;
  }


  private createPieceDiv(piece: Piece): HTMLDivElement {
    const pieceDiv = document.createElement("div");
    const className = `piece ${piece.getColor()}`
    pieceDiv.className = className;
    pieceDiv.innerHTML = this.pieceViewFactory.getImage(piece.getType(), piece.getColor());
    return pieceDiv;
  }
}