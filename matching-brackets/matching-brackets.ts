const openToClosingBrackets = {
  '[': ']',
  '{': '}',
  '(': ')',
} as const;

type LeftBracket = keyof typeof openToClosingBrackets;
type RightBracket = typeof openToClosingBrackets[LeftBracket];
type Bracket = LeftBracket | RightBracket;

class MatchingBrackets {
  constructor(private string: string) {
    this.string = string;
  }

  isPaired(): boolean {
    const stack: Bracket[] = [];

    for (const char of this.string) {
      if (this.isLeftBracket(char)) {
        stack.push(openToClosingBrackets[char]);
      } else if (this.isRightBracket(char)) {
        if (stack.length === 0 || char !== stack.pop()) {
          return false;
        }
      }
    }

    return stack.length === 0;
  }

  private isLeftBracket(char: string): char is LeftBracket {
    return char in openToClosingBrackets;
  }

  private isRightBracket(char: string): char is RightBracket {
    return Object.values(openToClosingBrackets).includes(char as RightBracket);
  }
}

export default MatchingBrackets;
