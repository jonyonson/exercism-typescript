class RobotName {
  name: string;
  private usedNames: Set<string>;

  constructor() {
    this.usedNames = new Set();
    this.name = this.generateRandomName();
  }

  resetName(): void {
    this.name = this.generateRandomName();
  }

  private generateRandomName(): string {
    const randomName = this.generatePrefix() + this.generateSuffix();
    if (this.usedNames.has(randomName)) {
      return this.generateRandomName();
    } else {
      this.usedNames.add(randomName);
    }

    return randomName;
  }

  private generatePrefix(): string {
    return this.generateUppercaseLetter() + this.generateUppercaseLetter();
  }

  private generateSuffix(): string {
    return (
      this.generateRandomDigit() +
      this.generateRandomDigit() +
      this.generateRandomDigit()
    );
  }

  private generateUppercaseLetter(): string {
    const A_CHARCODE = 65;
    const Z_CHARCODE = 90;
    const charCode =
      Math.floor(Math.random() * (Z_CHARCODE - A_CHARCODE + 1)) + A_CHARCODE;

    return String.fromCharCode(charCode);
  }

  private generateRandomDigit(): string {
    return Math.floor(Math.random() * 10).toString();
  }
}

export default RobotName;
