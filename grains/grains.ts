export default class Grains {
  static square(num: number): number {
    this.assertValidSquare(num);
    return Math.pow(2, num - 1);
  }

  static total(): number {
    return Math.pow(2, 64) - 1;
  }

  static assertValidSquare(num: number): void {
    if (num > 64 || num < 1) throw new Error('Not a valid square');
  }
}
