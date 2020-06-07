function sum(numbers: number[]) {
  return numbers.reduce((acc, cv) => acc + Math.pow(cv, numbers.length), 0);
}

export default class ArmstrongNumbers {
  static isArmstrongNumber(number: number): boolean {
    const digits = [...number.toString()].map((x) => Number(x));
    return sum(digits) === number;
  }
}
