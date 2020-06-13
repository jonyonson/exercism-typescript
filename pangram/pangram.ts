export default class Pangram {
  readonly sentence: string;
  private readonly ALPHABET_LENGTH = 26;

  constructor(sentence: string) {
    this.sentence = sentence;
  }

  isPangram(): boolean {
    const letters = this.sentence.toLowerCase().replace(/[^a-z]/g, '');
    const usedLetters = new Set(letters);

    return usedLetters.size === this.ALPHABET_LENGTH;
  }
}
