export default class RotationalCipher {
  private static readonly UPPERCASE_A_CODE = 'A'.charCodeAt(0);
  private static readonly UPPERCASE_Z_CODE = 'Z'.charCodeAt(0);
  private static readonly LOWERCASE_A_CODE = 'a'.charCodeAt(0);
  private static readonly LOWERCASE_Z_CODE = 'z'.charCodeAt(0);

  static rotate(text: string, rotations: number): string {
    return [...text]
      .map((char) => RotationalCipher.encrypt(char, rotations))
      .join('');
  }

  private static encrypt(char: string, rotations: number): string {
    if (char.match(/[a-z]/i)) {
      const code = char.charCodeAt(0);
      let upperBounds, lowerBounds;

      // Uppercase letter
      if (code < RotationalCipher.LOWERCASE_A_CODE) {
        upperBounds = RotationalCipher.UPPERCASE_Z_CODE;
        lowerBounds = RotationalCipher.UPPERCASE_A_CODE;
      } else {
        // Lowercase letter
        upperBounds = RotationalCipher.LOWERCASE_Z_CODE;
        lowerBounds = RotationalCipher.LOWERCASE_A_CODE;
      }

      if (code >= lowerBounds && code <= upperBounds) {
        return String.fromCharCode(
          ((code - lowerBounds + rotations) % 26) + lowerBounds,
        );
      }
    }

    return char;
  }
}
