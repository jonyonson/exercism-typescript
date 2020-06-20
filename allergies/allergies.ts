const bitmask = {
  eggs: 1,
  peanuts: 2,
  shellfish: 4,
  strawberries: 8,
  tomatoes: 16,
  chocolate: 32,
  pollen: 64,
  cats: 128,
};

type Allergen = keyof typeof bitmask;

class Allergies {
  readonly score: number;
  private readonly allergens = Object.keys(bitmask) as Allergen[];

  constructor(score: number) {
    this.score = score;
  }

  allergicTo(allergen: Allergen): boolean {
    return Boolean(this.score & bitmask[allergen]);
  }

  list(): Allergen[] {
    return this.allergens.filter((allergen) => this.allergicTo(allergen));
  }
}

export default Allergies;
