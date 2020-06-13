type Protein =
  | 'Methionine'
  | 'Phenylalanine'
  | 'Serine'
  | 'Leucine'
  | 'Tyrosine'
  | 'Cysteine'
  | 'Tryptophan';

type Codon =
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
  | 'UGG'
  | 'UAA'
  | 'UAG'
  | 'UGA';

type RelaseFactorProtein = 'STOP';
const releaseFactorProtein: RelaseFactorProtein = 'STOP';

const codonToProtein: { [K in Codon]: Protein | RelaseFactorProtein } = {
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
  UAA: releaseFactorProtein,
  UAG: releaseFactorProtein,
  UGA: releaseFactorProtein,
};

const stopCodons = ['UAA', 'UAG', 'UGA'];

class ProteinTranslation {
  private static validCodons = Object.keys(codonToProtein).concat(stopCodons);

  static proteins(rnaSequence: string): Protein[] {
    const codons = this.codons(rnaSequence);
    const proteins: Protein[] = [];

    for (const codon of codons) {
      if (stopCodons.includes(codon)) break;
      const protein = codonToProtein[codon];
      proteins.push(protein as Protein);
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
}

export default ProteinTranslation;
