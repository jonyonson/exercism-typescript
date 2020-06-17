type Range = [number, number];

export default class RotationalCipher {
  private static readonly ALPHABET_LENGTH: number;
  private static readonly LETTER_RANGES: Range[] = [
    ['A'.charCodeAt(0), 'Z'.charCodeAt(0)],
    ['a'.charCodeAt(0), 'z'.charCodeAt(0)],
  ];

  static rotate(text: string, rotations: number): string {
    return [...text]
      .map((char) => RotationalCipher.encrypt(char, rotations))
      .join('');
  }

  private static encrypt(char: string, rotations: number): string {
    if (char.match(/[a-z]/i)) {
      const code = char.charCodeAt(0);
      let [lowerBounds, upperBounds] = RotationalCipher.getBounds(code);

      if (code >= lowerBounds && code <= upperBounds) {
        return String.fromCharCode(
          ((code - lowerBounds + rotations) % 26) + lowerBounds,
        );
      }
    }

    return char;
  }

  private static getBounds(code: number): Range {
    let range = this.LETTER_RANGES.find((r: Range) => {
      return r[0] <= code && r[1] >= code;
    });

    return range as Range;
  }
}
