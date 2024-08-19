export enum Color {
  WHITE, BLACK
}

export class ColorUtil {

  public static getColorName(color: Color): string {
    switch (color) {
      case Color.WHITE:
        return "white";
      case Color.BLACK:
        return "black";
      default:
        return "unknown";
    }
  }
}