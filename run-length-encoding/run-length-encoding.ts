export default class RunLengthEncoding {
  static encode(str: string): string {
    return str.replace(/([\w\s])\1*/g, (match) => {
      return match.length > 1 ? match.length + match[0] : match[0];
    });
  }

  static decode(str: string): string {
    return str.replace(/(\d+)(\w|\s)/g, (_match, p1, p2) => {
      return new Array(+p1 + 1).join(p2);
    });
  }
}
