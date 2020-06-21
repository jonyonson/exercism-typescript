export default class Anagram {
  private readonly word: string;

  constructor(word: string) {
    this.word = word;
  }

  matches(...words: string[]): string[] {
    const anagrams = [];
    for (const word of words) {
      if (this.isAnagram(word)) anagrams.push(word);
    }

    return anagrams;
  }

  private isAnagram(word: string): boolean {
    if (this.word.toUpperCase() === word.toUpperCase()) return false;

    return this.regularize(word) === this.regularize(this.word);
  }

  private regularize(word: string): string {
    return word.toLowerCase().split('').sort().join('').trim();
  }
}
