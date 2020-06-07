export default class ArmstrongNumbers {
  static isArmstrongNumber(num: number): boolean {
    const digits = num
      .toString()
      .split('')
      .map((x) => Number(x));

    const sum = digits.reduce((acc, cv) => {
      return acc + Math.pow(cv, digits.length);
    }, 0);

    return sum === num;
  }
}
