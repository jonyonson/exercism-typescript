class Hamming {
  compute(strandA: string, strandB: string): number {
    this.assertValidLengths(strandA, strandB);

    let distance = 0;
    for (const i in [...strandA]) {
      if (strandA[i] !== strandB[i]) {
        distance++;
      }
    }

    return distance;
  }

  private assertValidLengths(a: string, b: string): void {
    if (a.length !== b.length) {
      throw new Error('DNA strands must be of equal length.');
    }
  }
}

export default Hamming;
