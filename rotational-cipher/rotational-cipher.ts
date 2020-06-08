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

      // Uppercase letters
      if (
        code >= RotationalCipher.UPPERCASE_A_CODE &&
        code <= RotationalCipher.UPPERCASE_Z_CODE
      ) {
        return String.fromCharCode(
          ((code - RotationalCipher.UPPERCASE_A_CODE + rotations) % 26) +
            RotationalCipher.UPPERCASE_A_CODE,
        );
        // Lowercase letters
      } else if (
        code >= RotationalCipher.LOWERCASE_A_CODE &&
        code <= RotationalCipher.LOWERCASE_Z_CODE
      ) {
        return String.fromCharCode(
          ((code - RotationalCipher.LOWERCASE_A_CODE + rotations) % 26) +
            RotationalCipher.LOWERCASE_A_CODE,
        );
      }
    }

    return char;
  }
}
