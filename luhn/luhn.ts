class Luhn {
  static valid(sequence: string): boolean {
    if (this.isInvalidInput(sequence)) return false;
    const digits = this.digits(sequence);
    const everyOtherDoubled = this.doubleEveryOtherDigit(digits);
    const sum = this.sum(everyOtherDoubled);

    return this.isDivisibleBy10(sum);
  }

  static doubleEveryOtherDigit(digits: number[]): number[] {
    // sequence = sequence.replace(/\s/g, '');
    // return [...sequence]
    return digits.map((d, i) => {
      if ((digits.length - i) % 2 === 0) {
        let doubled = d * 2;
        if (doubled > 9) doubled -= 9;
        return doubled;
      }
      return d;
    });
  }

  static isDivisibleBy10(sum: number): boolean {
    return sum % 10 == 0;
  }

  static sum(digits: number[]): number {
    return [...digits].reduce((acc, cv) => acc + cv, 0);
  }

  static isInvalidInput(input: string): boolean {
    return input.trim().length <= 1 || !/^[0-9 ]+$/.test(input);
  }

  static digits(sequence: string): number[] {
    sequence = sequence.replace(/\s/g, '');
    return [...sequence].map((c) => Number(c));
  }
}

export default Luhn;
