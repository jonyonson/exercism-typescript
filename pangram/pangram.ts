export default class Pangram {
  readonly sentence: string;
  private readonly ALPHABET_LENGTH: number = 26;

  constructor(sentence: string) {
    this.sentence = sentence;
  }

  isPangram(): boolean {
    const characters = this.sentence.toLowerCase().replace(/[^a-z]/g, '');
    const usedLetters = new Set(characters);

    return usedLetters.size === this.ALPHABET_LENGTH;
  }
}
