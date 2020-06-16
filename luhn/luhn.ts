class Luhn {
  static valid(string: string): boolean {
    return this.passesLuhnTest(string.trim());
  }

  static passesLuhnTest(string: string) {
    if (this.isInvalidInput(string)) return false;
    const everyOtherDoubled = this.doubleEveryOther(string);
    const sum = this.sumAllDigits(everyOtherDoubled);

    return this.isDivisibleBy10(sum);
  }

  static doubleEveryOther(string: string): string {
    string = string.replace(/\s/g, '');
    return [...string]
      .map((char, i) => {
        if ((string.length - i) % 2 === 0) {
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

  static sumAllDigits(string: string): number {
    return [...string].reduce((acc, cv) => acc + Number(cv), 0);
  }

  static isInvalidInput(string: string): boolean {
    return string.length <= 1 || !/^[0-9 ]+$/.test(string);
  }
}

export default Luhn;
