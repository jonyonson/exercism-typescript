type Protein =
  | 'Methionine'
  | 'Phenylalanine'
  | 'Serine'
  | 'Leucine'
  | 'Tyrosine'
  | 'Cysteine'
  | 'Tryptophan';

const codonToProtein: { [key: string]: Protein | 'STOP' } = {
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
  UAA: 'STOP',
  UAG: 'STOP',
  UGA: 'STOP',
};

class ProteinTranslation {
  static proteins(rnaSequence: string): Protein[] {
    const proteins: Protein[] = [];
    for (let i = 0; i < rnaSequence.length; i += 3) {
      const codon = rnaSequence
        .split('')
        .slice(i, i + 3)
        .join('');

      const protein = codonToProtein[codon];
      if (protein === 'STOP') break;

      proteins.push(protein);
    }

    return proteins;
  }
}

export default ProteinTranslation;
