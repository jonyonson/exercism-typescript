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

    // for (let i = 0; i < codons.length; i++) {
    //   if (stopCodons.includes(codons[i])) break;
    //   const protein = codonToProtein[codons[i]];
    //   proteins.push(protein);
    // }

    for (const codon of codons) {
      if (stopCodons.includes(codon)) break;
      const protein = codonToProtein[codon];
      proteins.push(protein);
    }

    return proteins;
  }

  private static codons(rna: string): string[] {
    const codons: string[] = [];

    for (let i = 0; i < rna.length; i += 3) {
      const codon = [...rna].slice(i, i + 3).join('');
      codons.push(codon);
    }

    return codons;
  }
}

export default ProteinTranslation;
