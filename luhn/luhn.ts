class Luhn {
  static valid(idNumber: string): boolean {
    if (this.isInvalidInput(idNumber)) return false;
    const everyOtherDoubled = this.doubleEveryOther(idNumber);
    const sum = this.sum(everyOtherDoubled);

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

  static sum(string: string): number {
    return [...string].reduce((acc, cv) => acc + Number(cv), 0);
  }

  static isInvalidInput(string: string): boolean {
    return string.length <= 1 || !/^[0-9 ]+$/.test(string);
  }
}

export default Luhn;
