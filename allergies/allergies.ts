const allergenToValue = {
  eggs: 1,
  peanuts: 2,
  shellfish: 4,
  strawberries: 8,
  tomatoes: 16,
  chocolate: 32,
  pollen: 64,
  cats: 128,
};

type Allergen = keyof typeof allergenToValue;

class Allergies {
  readonly score: number;
  private static allergens = Object.keys(allergenToValue) as Allergen[];

  constructor(score: number) {
    this.score = score;
  }

  allergicTo(allergen: Allergen): boolean {
    return Boolean(this.score & allergenToValue[allergen]);
  }

  list(): Allergen[] {
    return Allergies.allergens.filter((allergen) => this.allergicTo(allergen));
  }
}

export default Allergies;
