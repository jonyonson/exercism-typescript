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
  | 'UCC'
  | 'UCA'
  | 'UCG'
  | 'UAU'
  | 'UAC'
  | 'UGU'
  | 'UGC'
  | 'UGG'
  | 'UAA'
  | 'UGA'
  | 'UAG';

const codonToProtein: { [key: string]: Protein } = {
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

const stopCodons = ['UAA', 'UAG', 'UGA'];

class ProteinTranslation {
  static proteins(rnaSequence: string): Protein[] {
    const codons = this.codons(rnaSequence);
    const proteins: Protein[] = [];

    for (const codon of codons) {
      if (stopCodons.includes(codon)) break;
      const protein = codonToProtein[codon];
      proteins.push(protein);
    }

    return proteins;
  }

  private static codons(rna: string): Codon[] | [] {
    const codons: Codon[] | [] = rna.match(/.{3}/g) ?? [];

    return codons;
  }
}

export default ProteinTranslation;
