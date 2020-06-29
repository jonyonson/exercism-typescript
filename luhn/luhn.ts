class Luhn {
  static valid(digitSequence: string): boolean {
    if (this.isInvalidInput(digitSequence)) return false;
    const everyOtherDoubled = this.doubleEveryOtherDigit(digitSequence);
    const sum = this.sum(everyOtherDoubled);

    return this.isDivisibleBy10(sum);
  }

  static doubleEveryOtherDigit(sequence: string): string {
    sequence = sequence.replace(/\s/g, '');
    return [...sequence]
      .map((char, i) => {
        if ((sequence.length - i) % 2 === 0) {
          let doubled = Number(char) * 2;
          if (doubled > 9) doubled -= 9;

          return doubled;
        }

        return char;
      })
      .join('');
  }

  static isDivisibleBy10(sum: number): boolean {
    return sum % 10 == 0;
  }

  static sum(digits: string): number {
    return [...digits].reduce((acc, cv) => acc + Number(cv), 0);
  }

  static isInvalidInput(input: string): boolean {
    return input.length <= 1 || !/^[0-9 ]+$/.test(input);
  }
}

export default Luhn;
