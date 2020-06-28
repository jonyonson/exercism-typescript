const TOTAL_NUMBER_OF_NAMES =
  26 * // A-Z
  26 * // A-Z
  10 * // 0-9
  10 * // 0-9
  10; // 0-9

export class RobotFactory {
  private static usedNames = new Set();

  static addName(name: string): void {
    this.usedNames.add(name);
  }

  static hasName(name: string): boolean {
    this.checkNameAvailability();
    return this.usedNames.has(name);
  }

  static releaseNames(): void {
    this.usedNames.clear();
  }

  static assignName(): string {
    let randomName = this.generateRandomName();
    while (this.hasName(randomName)) {
      randomName = this.generateRandomName();
    }
    this.addName(randomName);

    return randomName;
  }

  private static checkNameAvailability(): void {
    if (this.usedNames.size === TOTAL_NUMBER_OF_NAMES) {
      throw new Error('The factory is full. No names available');
    }
  }

  private static generateRandomName(): string {
    return (
      this.generateUppercaseLetter() +
      this.generateUppercaseLetter() +
      this.generateRandomDigit() +
      this.generateRandomDigit() +
      this.generateRandomDigit()
    );
  }

  private static generateUppercaseLetter(): string {
    const A_CHARCODE = 65;
    const Z_CHARCODE = 90;
    const charCode =
      Math.floor(Math.random() * (Z_CHARCODE - A_CHARCODE + 1)) + A_CHARCODE;

    return String.fromCharCode(charCode);
  }

  private static generateRandomDigit(): string {
    return Math.floor(Math.random() * 10).toString();
  }
}

export default class RobotName {
  private _name: string;

  constructor() {
    this._name = RobotFactory.assignName();
  }

  get name(): string {
    return this._name;
  }

  resetName(): void {
    this._name = RobotFactory.assignName();
  }
}
