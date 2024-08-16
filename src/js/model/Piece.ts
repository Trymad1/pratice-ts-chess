import { Point } from "./Point";

export abstract class Piece {

  private pieceStr : String;
  private img : String;
  private point : Point;

  public constructor(pieceStr : String, img : String) {
    this.pieceStr = pieceStr;
    this.img = img;
    this.point = new Point();
  }

  // TODO think about how piece get allowed point and pieces for attack, and what is returns.
  public abstract getAllowedPoints();

  public copyPoint(point : Point) {
    this.point.setPoint(point);
  }

  public getImage() : String {
    return this.img;
  }

  public toString() : String {
    return this.pieceStr;
  }
}