class Squares {
  sumOfSquares: number;
  squareOfSum: number;
  difference: number;

  constructor(num: number) {
    const sum = (num * (num + 1)) / 2;
    this.sumOfSquares = (sum * (2 * num + 1)) / 3;
    this.squareOfSum = sum * sum;
    this.difference = this.squareOfSum - this.sumOfSquares;
  }
}

export default Squares;
