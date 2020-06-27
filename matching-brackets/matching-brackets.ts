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
        const lastOpen = this.leftBrackets.pop();
        if (lastOpen && !this.matchingBrackets(lastOpen, char)) return false;
      }
    }
    return this.leftBrackets.length === 0;
  }

  private matchingBrackets(
    leftBracket: LeftBracket,
    rightBracket: RightBracket,
  ): boolean {
    return rightBracket === openToClosingBrackets[leftBracket];
  }

  private isLeftBracket(char: string): char is LeftBracket {
    return char in openToClosingBrackets;
  }

  private isRightBracket(char: string): char is RightBracket {
    return Object.values(openToClosingBrackets).includes(char as RightBracket);
  }
}

export default MatchingBrackets;
