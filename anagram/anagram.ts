export default class Anagram {
  private readonly word: string;

  constructor(word: string) {
    this.word = word;
  }

  matches(...words: string[]): string[] {
    const anagrams: string[] = [];

    words.forEach((word) => {
      if (this.isAnagram(word)) {
        anagrams.push(word);
      }
    });

    return anagrams;
  }

  private isAnagram(w: string): boolean {
    if (this.word.toLowerCase() === w.toLowerCase()) {
      return false;
    }

    return this.regularize(w) === this.regularize(this.word);
  }

  private regularize(word: string): string {
    return [...word.toLowerCase()].sort().join('').trim();
  }
}
