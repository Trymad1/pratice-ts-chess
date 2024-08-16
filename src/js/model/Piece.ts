import { Color } from "./Color";
import { Point } from "./Point";

export abstract class Piece {

  private color : Color;
  private img : String;
  private point : Point;

  public constructor(color : Color, img : String) {
    this.color = color;
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

  public toString() : Color {
    return this.color;
  }
}