export default class Anagram {
  private readonly word: string;

  constructor(word: string) {
    this.word = word;
  }

  matches(...words: string[]): string[] {
    return words.filter((w) => this.isAnagram(w));
  }

  private isAnagram(w: string): boolean {
    if (this.isExactMatch(w)) return false;
    return this.normalize(w) === this.normalize(this.word);
  }

  private normalize(word: string): string {
    return [...word.toLowerCase()].sort().join('').trim();
  }

  private isExactMatch(w: string): boolean {
    return this.word.toLowerCase() === w.toLowerCase();
  }
}
