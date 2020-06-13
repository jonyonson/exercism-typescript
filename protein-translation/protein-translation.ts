type Protein =
  | 'Methionine'
  | 'Phenylalanine'
  | 'Serine'
  | 'Leucine'
  | 'Tyrosine'
  | 'Cysteine'
  | 'Tryptophan';

type StopCodon = 'UAA' | 'UAG' | 'UGA';
type Codon = StopCodon | CodonWithTranslation;

type CodonWithTranslation =
  | 'AUG'
  | 'UUU'
  | 'UUC'
  | 'UUA'
  | 'UUG'
  | 'UCU'
  | 'UCC'
  | 'UCA'
  | 'UCG'
  | 'UAU'
  | 'UAC'
  | 'UGU'
  | 'UGC'
  | 'UGG';

const codonToProtein: { [K in CodonWithTranslation]: Protein } = {
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
};

// type CodonWithTranslation = keyof typeof codonToProtein;

const stopCodons = ['UAA', 'UAG', 'UGA'];

class ProteinTranslation {
  private static validCodons = Object.keys(codonToProtein).concat(stopCodons);

  static proteins(rnaSequence: string): Protein[] {
    const codons = this.codons(rnaSequence);
    const proteins: Protein[] = [];

    for (const codon of codons) {
      if (stopCodons.includes(codon)) break;
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

  private static isCodonWithTranslation(s: string): s is CodonWithTranslation {
    const re = /^(AUG|UUU|UUC|UUA|UUG|UCU|UCC|UCA|UCG|UAU|UAC|UGU|UGC|UGG)$/;
    return re.test(s);
  }
}

export default ProteinTranslation;
