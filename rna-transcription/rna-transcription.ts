type DNA = 'G' | 'C' | 'T' | 'A';
type RNA = 'C' | 'G' | 'A' | 'U';

class Transcriptor {
  private dnaToRna: { [key in DNA]: RNA } = {
    G: 'C',
    C: 'G',
    T: 'A',
    A: 'U',
  };

  toRna(dna_strand: string): string {
    return [...dna_strand]
      .map((nucleotide) => this.transcribe(nucleotide))
      .join('');
  }

  private isDNA(nucleotide: string): nucleotide is DNA {
    return nucleotide in this.dnaToRna;
  }

  private transcribe(nucleotide: string): RNA {
    if (!this.isDNA(nucleotide)) {
      throw new Error('Invalid input DNA.');
    }

    return this.dnaToRna[nucleotide];
  }
}

export default Transcriptor;
