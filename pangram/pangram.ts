export default class Pangram {
  readonly sentence: string;

  constructor(sentence: string) {
    this.sentence = sentence;
  }

  isPangram(): boolean {
    const usedLetters = new Set();

    for (const char of this.sentence) {
      if (this.isLetterInAlphabet(char)) {
        usedLetters.add(char.toLowerCase());
      }
    }

    return usedLetters.size === 26;
  }

  isLetterInAlphabet(char: string): boolean {
    return /[a-z]/gi.test(char);
  }
}
