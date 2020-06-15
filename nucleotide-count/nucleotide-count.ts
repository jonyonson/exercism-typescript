type DNA = 'A' | 'C' | 'G' | 'T';

class NucleotideCount {
  static nucleotideCounts(dna: string) {
    const nucleotideCount: { [key in DNA]: number } = {
      A: 0,
      C: 0,
      G: 0,
      T: 0,
    };

    [...dna].forEach((strand) => {
      if (this.isDNA(strand)) {
        nucleotideCount[strand]++;
      } else {
        throw new Error('Invalid nucleotide in strand');
      }
    });

    return nucleotideCount;
  }

  private static isDNA(s: string): s is DNA {
    return /^$|^[ACGT]+$/.test(s);
  }
}

export default NucleotideCount;
