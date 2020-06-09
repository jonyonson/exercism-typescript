type TriangleType = 'equilateral' | 'isosceles' | 'scalene';

export default class Triangle {
  sides: number[];

  constructor(...sides: number[]) {
    this.sides = sides;
  }

  private checkForValidTriangle(): void {
    const [side1, side2, side3] = this.sides.sort((a, b) => a - b);
    // Throw if any sides are less than or equal to 0
    if (side1 <= 0) {
      throw new Error('The length of all sides have to be greater than 0');
    }
    // Throw if the sum of any two sides are less than the third
    if (side1 + side2 < side3) {
      throw new Error(
        'The sum of the lengths of any two sides must be greater than or equal to the length of the third side.',
      );
    }
  }

  kind(): TriangleType {
    this.checkForValidTriangle();

    let triangle: TriangleType;
    const [side1, side2, side3] = this.sides;

    if (side1 === side2 && side2 === side3) {
      triangle = 'equilateral';
    } else if (side1 === side2 || side1 === side3 || side2 === side3) {
      triangle = 'isosceles';
    } else {
      triangle = 'scalene';
    }

    return triangle;
  }
}
