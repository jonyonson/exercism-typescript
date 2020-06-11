export default class Pangram {
  readonly sentence: string;
  private readonly ALPHABET_LENGTH: number = 26;

  constructor(sentence: string) {
    this.sentence = sentence;
  }

  private isLetterInAlphabet = (char: string): boolean => /[a-z]/gi.test(char);

  isPangram(): boolean {
    const characters = [...this.sentence.toLowerCase()].filter((c) =>
      this.isLetterInAlphabet(c),
    );

    const usedLetters = new Set(characters);

    return usedLetters.size === this.ALPHABET_LENGTH;
  }
}
