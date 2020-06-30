type Classification = 'perfect' | 'abundant' | 'deficient';

export default class PerfectNumbers {
  static classify(number: number): Classification {
    this.assertNaturalNumber(number);

    const factors = this.factors(number);
    const aliquotSum = this.aliquotSum(factors);

    if (aliquotSum > number) {
      return 'abundant';
    } else if (aliquotSum < number) {
      return 'deficient';
    } else {
      return 'perfect';
    }
  }

  private static factors(n: number): number[] {
    const sequence = Array.from({ length: n }, (_, i) => i + 1);
    return sequence.filter((i) => n % i === 0 && i !== n);
  }

  private static aliquotSum(numbers: number[]): number {
    return numbers.reduce((acc, cv) => acc + cv, 0);
  }

  private static assertNaturalNumber(number: number): void {
    if (number < 1) {
      throw new Error('Classification is only possible for natural numbers.');
    }
  }
}
