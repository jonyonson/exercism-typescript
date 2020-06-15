type Dna = 'A' | 'C' | 'G' | 'T';

class NucleotideCount {
  static nucleotideCounts(dna: string) {
    this.throwIfDNASequenceIsInvalid(dna);

    const nucleotideCount: { [key in Dna]: number } = {
      A: 0,
      C: 0,
      G: 0,
      T: 0,
    };

    for (const strand of dna) {
      nucleotideCount[strand as Dna]++;
    }

    return nucleotideCount;
  }

  private static throwIfDNASequenceIsInvalid(dna: string) {
    if (!/^$|^[ACGT]+$/.test(dna)) {
      throw new Error('Invalid nucleotide in strand');
    }
  }
}

export default NucleotideCount;
