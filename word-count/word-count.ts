type WordMap = Map<string, number>;
export default class Words {
  public count(words: string): WordMap {
    let counter = new Map<string, number>();
    words
      .toLowerCase()
      .trim()
      .split(/\s+/)
      .forEach((word) => {
        counter.set(word, (counter.get(word) || 0) + 1);
      });
    return counter;
  }
}
