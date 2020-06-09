type TriangleType = 'equilateral' | 'isosceles' | 'scalene';

export default class Triangle {
  sides: number[];

  constructor(...sides: number[]) {
    this.sides = sides;
  }

  private checkTriangleInequality(): void {
    const [side1, side2, side3] = this.sides.sort((a, b) => a - b);
    if (side1 + side2 < side3) {
      throw new Error(
        'The sum of the lengths of any two sides must be greater than or equal to the length of the third side.',
      );
    }
  }

  private checkForValidLengths(): void {
    if (!this.sides.every((side) => side > 0)) {
      throw new Error('The length of all sides have to be greater than 0');
    }
  }

  private matchingSides(): number {
    const set = new Set(this.sides);
    let _matchingSides = 0;
    if (set.size === 2) _matchingSides = 2;
    if (set.size === 1) _matchingSides = 3;

    return _matchingSides;
  }

  kind(): TriangleType {
    this.checkTriangleInequality();
    this.checkForValidLengths();

    let triangle: TriangleType;

    if (this.matchingSides() === 3) {
      triangle = 'equilateral';
    } else if (this.matchingSides() === 2) {
      triangle = 'isosceles';
    } else {
      triangle = 'scalene';
    }

    return triangle;
  }
}
