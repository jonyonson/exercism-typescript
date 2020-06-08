const dnaToRna: { [key: string]: string } = {
  G: 'C',
  C: 'G',
  T: 'A',
  A: 'U',
};

type DNA = keyof typeof dnaToRna;

class Transcriptor {
  toRna(dna_strand: string): string {
    return [...dna_strand].map((dna): string => this.transcribe(dna)).join('');
  }

  private transcribe(dna: DNA): string {
    const rna = dnaToRna[dna];
    if (!rna) throw new Error('Invalid input DNA.');
    return rna;
  }
}

export default Transcriptor;
