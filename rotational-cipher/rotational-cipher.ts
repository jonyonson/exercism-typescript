function encrypt(char: string, rotations: number): string {
  const code = char.charCodeAt(0);
  let newCode = code + rotations;

  const CAPITAL_A = 'A'.charCodeAt(0);
  const CAPITAL_Z = 'Z'.charCodeAt(0);
  const LOWER_A = 'a'.charCodeAt(0);
  const LOWER_Z = 'z'.charCodeAt(0);

  if (code >= CAPITAL_A && code <= CAPITAL_Z) {
    if (newCode > CAPITAL_Z) {
      newCode = CAPITAL_A - 1 + newCode - CAPITAL_Z;
    }
  } else if (code >= LOWER_A && code <= LOWER_Z) {
    if (newCode > LOWER_Z) {
      newCode = LOWER_A - 1 + newCode - LOWER_Z;
    }
  } else {
    return char;
  }

  return String.fromCharCode(newCode);
}

export default class RotationalCipher {
  static rotate(text: string, rotations: number): string {
    return [...text].map((char) => encrypt(char, rotations)).join('');
  }
}
