// type Allergen =
//   | 'eggs'
//   | 'peanuts'
//   | 'shellfish'
//   | 'strawberries'
//   | 'tomatoes'
//   | 'chocolate'
//   | 'pollen'
//   | 'cats';

const bitmask: { [key: string]: number } = {
  eggs: 1,
  peanuts: 2,
  shellfish: 4,
  strawberries: 8,
  tomatoes: 16,
  chocolate: 32,
  pollen: 64,
  cats: 128,
};

class Allergies {
  readonly score: number;
  private readonly allergens = Object.entries(bitmask);

  constructor(score: number) {
    this.score = score;
  }

  allergicTo(allergen: string): boolean {
    return Boolean(this.score & bitmask[allergen]);
  }

  // list(): Allergen[] {}
  list(): string[] {
    return this.allergens
      .filter(([, flag]) => this.score & flag)
      .map(([allergen]) => allergen);
  }
}

export default Allergies;
