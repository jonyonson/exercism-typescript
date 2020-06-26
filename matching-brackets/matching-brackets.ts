const openToClosingBrackets = {
  '[': ']',
  '{': '}',
  '(': ')',
} as const;

type LeftBracket = keyof typeof openToClosingBrackets;
type RightBracket = typeof openToClosingBrackets[LeftBracket];

class MatchingBrackets {
  private leftBrackets: LeftBracket[] = [];

  constructor(private sentence: string) {
    this.sentence = sentence;
  }

  isPaired(): boolean {
    for (const char of this.sentence) {
      if (this.isLeftBracket(char)) {
        this.leftBrackets.push(char);
      } else if (this.isRightBracket(char)) {
        if (!this.matchesLeftBracket(char)) return false;
      }
    }
    return this.leftBrackets.length === 0;
  }

  private matchesLeftBracket(char: RightBracket): boolean {
    if (this.leftBrackets.length === 0) return false;
    const previousLeftBracket = this.leftBrackets.pop();

    return char === openToClosingBrackets[previousLeftBracket as LeftBracket];
  }

  private isLeftBracket(char: string): char is LeftBracket {
    return char in openToClosingBrackets;
  }

  private isRightBracket(char: string): char is RightBracket {
    return Object.values(openToClosingBrackets).includes(char as RightBracket);
  }
}

export default MatchingBrackets;
