export class Coordinates {
  private x : number;
  private y : number;

  public constructor() {
    this.x = 0;
    this.y = 0;
  }

  public constuctor(x : number, y : number) {
    this.x = x;
    this.y = y;
  }

  public getX() : number {
    return this.x;
  }

  public getY() : number {
    return this.y;
  }

  public setX(x : number) : void {
    this.x = x;
  }

  public setY(y : number) : void {
    this.y = y;
  }
  
  public setCoordinates(coord : Coordinates) {
    this.x = coord.getX();
    this.y = coord.getY();
  }
}