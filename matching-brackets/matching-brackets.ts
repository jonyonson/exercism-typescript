const openToClosingBrackets = {
  '[': ']',
  '{': '}',
  '(': ')',
} as const;

type LeftBracket = keyof typeof openToClosingBrackets;
type RightBracket = typeof openToClosingBrackets[LeftBracket];
type Bracket = LeftBracket | RightBracket;

class MatchingBrackets {
  private unclosedBrackets: Bracket[] = [];

  constructor(private stringWithBrackets: string) {
    this.stringWithBrackets = stringWithBrackets;
    this.unclosedBrackets = [];
  }

  isPaired(): boolean {
    for (const char of this.stringWithBrackets) {
      if (this.isLeftBracket(char)) {
        this.unclosedBrackets.push(char);
      } else if (
        this.isRightBracket(char) &&
        this.closesPreviousBracket(char)
      ) {
        return false;
      }
    }
    return this.unclosedBrackets.length === 0;
  }

  private closesPreviousBracket(char: RightBracket): boolean {
    const previousLeftBracket = this.unclosedBrackets.pop();
    return this.unclosedBrackets.length
      ? false
      : char !== openToClosingBrackets[previousLeftBracket as LeftBracket];
  }

  private isLeftBracket(char: string): char is LeftBracket {
    return char in openToClosingBrackets;
  }

  private isRightBracket(char: string): char is RightBracket {
    return Object.values(openToClosingBrackets).includes(char as RightBracket);
  }
}

export default MatchingBrackets;
