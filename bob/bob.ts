class Bob {
  hey(message: string): string {
    message = message.trim();

    if (this.isEmptyMessage(message)) return 'Fine. Be that way!';

    if (this.isYellingQuestion(message))
      return "Calm down, I know what I'm doing!";

    if (this.isQuestion(message)) return 'Sure.';

    if (this.isYelling(message)) return 'Whoa, chill out!';

    return 'Whatever.';
  }

  private isEmptyMessage(message: string): boolean {
    return message === '';
  }

  private isQuestion(message: string): boolean {
    return message.endsWith('?');
  }

  private isYelling(message: string): boolean {
    return message.toUpperCase() === message && !!message.match(/[a-z]/i);
  }

  private isYellingQuestion(message: string): boolean {
    return this.isYelling(message) && this.isQuestion(message);
  }
}

export default Bob;
