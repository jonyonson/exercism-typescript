type Dna = 'A' | 'C' | 'G' | 'T';

class NucleotideCount {
  static nucleotideCounts(dna: string) {
    this.isValidDNA(dna);

    const nucleotideCount: { [key in Dna]: number } = {
      A: 0,
      C: 0,
      G: 0,
      T: 0,
    };

    for (let i = 0; i < dna.length; i++) {
      nucleotideCount[dna[i] as Dna]++;
    }

    return nucleotideCount;
  }

  private static isValidDNA(dna: string) {
    if (!/^$|^[ACGT]+$/.test(dna)) {
      throw new Error('Invalid nucleotide in strand');
    }
  }
}

export default NucleotideCount;
