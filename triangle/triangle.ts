type TriangleType = 'equilateral' | 'isosceles' | 'scalene';

export default class Triangle {
  sides: number[];

  constructor(...sides: number[]) {
    this.sides = sides;
  }

  kind(): TriangleType {
    const sortedSides = this.sides.sort((a, b) => a - b);
    // Throw if any sides are less than or equal to 0
    if (sortedSides[0] <= 0) {
      throw new Error('The length of all sides have to be greater than 0');
    }
    // Throw if the sum of any two sides are less than the third
    if (sortedSides[0] + sortedSides[1] < sortedSides[2]) {
      throw new Error(
        'The sum of the lengths of any two sides must be greater than or equal to the length of the third side.',
      );
    }

    let triangle: TriangleType;

    if (this.sides.every((side) => side === this.sides[0])) {
      triangle = 'equilateral';
    } else if (
      sortedSides[0] == sortedSides[1] ||
      sortedSides[1] == sortedSides[2]
    ) {
      triangle = 'isosceles';
    } else {
      triangle = 'scalene';
    }

    return triangle;
  }
}
