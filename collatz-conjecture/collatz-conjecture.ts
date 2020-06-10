class CollatzConjecture {
  static steps(n: number): number {
    if (n <= 0) throw new Error('Only positive numbers are allowed');

    let count = 0;
    while (n > 1) {
      if (n % 2 === 0) {
        n /= 2;
      } else {
        n = n * 3 + 1;
      }

      count++;
    }

    return count;
  }
}

export default CollatzConjecture;
