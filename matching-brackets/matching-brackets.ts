const openToClosingBrackets = {
  '[': ']',
  '{': '}',
  '(': ')',
} as const;

type LeftBracket = keyof typeof openToClosingBrackets;
type RightBracket = typeof openToClosingBrackets[LeftBracket];
type Bracket = LeftBracket | RightBracket;

class MatchingBrackets {
  private readonly leftBrackets: LeftBracket[];
  private readonly rightBrackets: RightBracket[];

  constructor(private string: string) {
    this.string = string;
    this.leftBrackets = ['[', '{', '('];
    this.rightBrackets = [']', '}', ')'];
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
    console.log(stack);

    return stack.length > 0 ? false : true;
  }

  private isLeftBracket(char: string): char is LeftBracket {
    return this.leftBrackets.includes(char as LeftBracket);
  }

  private isRightBracket(char: string): char is RightBracket {
    return this.rightBrackets.includes(char as RightBracket);
  }
}

export default MatchingBrackets;
