type Dna = 'A' | 'C' | 'G' | 'T';

class NucleotideCount {
  static nucleotideCounts(dna: string) {
    const nucleotideCount = { A: 0, C: 0, G: 0, T: 0 };
    for (let i = 0; i < dna.length; i++) {
      nucleotideCount[dna[i] as Dna]++;
    }

    return nucleotideCount;
  }
}

export default NucleotideCount;
