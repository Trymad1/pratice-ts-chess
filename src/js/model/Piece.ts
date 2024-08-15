import { Coordinates } from "./Coordinates";

export abstract class Piece {

  private pieceStr : String;
  private img : String;
  private coord : Coordinates;

  public constructor(pieceStr : String, img : String) {
    this.pieceStr = pieceStr;
    this.img = img;
    this.coord = new Coordinates();
  }

  // TODO think about how piece get allowed point and pieces for attack, and what is returns.
  public abstract getAllowedCoord();

  public copyCoordinates(coord : Coordinates) {
    this.coord.setCoordinates(coord);
  }

  public getImage() : String {
    return this.img;
  }

  public toString() : String {
    return this.pieceStr;
  }
}