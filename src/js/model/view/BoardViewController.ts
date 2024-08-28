import { DefaultSvgPieceViewFactory } from "./DefaultSvgPieceViewFactory.js";
import { PieceViewFactory } from "./PieceViewFactory.js";

export class BoardViewController {

  private pieceViewFactory: PieceViewFactory;

  public constructor() {
    this.pieceViewFactory = new DefaultSvgPieceViewFactory();
  }

}