type CodonWithTranslation = keyof typeof codonToProtein;
type Protein = typeof codonToProtein[CodonWithTranslation];
type StopCodon = 'UAA' | 'UAG' | 'UGA';
type Codon = StopCodon | CodonWithTranslation;

const codonToProtein = {
  AUG: 'Methionine',
  UUU: 'Phenylalanine',
  UUC: 'Phenylalanine',
  UUA: 'Leucine',
  UUG: 'Leucine',
  UCU: 'Serine',
  UCC: 'Serine',
  UCA: 'Serine',
  UCG: 'Serine',
  UAU: 'Tyrosine',
  UAC: 'Tyrosine',
  UGU: 'Cysteine',
  UGC: 'Cysteine',
  UGG: 'Tryptophan',
} as const;

const stopCodons: StopCodon[] = ['UAA', 'UAG', 'UGA'];

class ProteinTranslation {
  private static validCodons = Object.keys(codonToProtein).concat(stopCodons);

  static proteins(rnaSequence: string): Protein[] {
    const codons = this.codons(rnaSequence);
    const proteins: Protein[] = [];

    for (const codon of codons) {
      if (this.isStopCodon(codon)) break;
      if (this.isCodonWithTranslation(codon)) {
        const protein = codonToProtein[codon];
        proteins.push(protein);
      }
    }

    return proteins;
  }

  private static codons(rna: string): Codon[] {
    const maybeCodons: string[] = rna.match(/.{3}/g) || [];
    let codons = maybeCodons.map((a) => this.assertCodons(a));
    return codons;
  }

  private static assertCodons(s: string): Codon {
    if (!this.validCodons.includes(s)) {
      throw new Error('Invalid RNA Sequence');
    } else {
      return s as Codon;
    }
  }

  private static isStopCodon(c: Codon): c is StopCodon {
    return stopCodons.includes(c as StopCodon);
  }

  private static isCodonWithTranslation(s: string): s is CodonWithTranslation {
    return s in codonToProtein;
  }
}

export default ProteinTranslation;
