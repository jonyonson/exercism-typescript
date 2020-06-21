export default class ComplexNumber {
  readonly real: number;
  readonly imag: number;

  constructor(real: number, imag: number) {
    this.real = real;
    this.imag = imag;
  }

  add(complexNum: ComplexNumber): ComplexNumber {
    return new ComplexNumber(
      this.real + complexNum.real,
      this.imag + complexNum.imag,
    );
  }

  sub(complexNum: ComplexNumber): ComplexNumber {
    return new ComplexNumber(
      this.real - complexNum.real,
      this.imag - complexNum.imag,
    );
  }

  mul(complexNum: ComplexNumber): ComplexNumber {
    return new ComplexNumber(
      this.real * complexNum.real - this.imag * complexNum.imag,
      this.real * complexNum.imag + this.imag * complexNum.real,
    );
  }

  div(complexNum: ComplexNumber): ComplexNumber {
    const divisor = complexNum.real ** 2 + complexNum.imag ** 2;
    return new ComplexNumber(
      (this.real * complexNum.real + this.imag * complexNum.imag) / divisor,
      (this.imag * complexNum.real - this.real * complexNum.imag) / divisor,
    );
  }

  get abs(): number {
    return Math.sqrt(this.real ** 2 + this.imag ** 2);
  }

  get conj(): ComplexNumber {
    return new ComplexNumber(this.real, 0 - this.imag);
  }

  get exp(): ComplexNumber {
    return new ComplexNumber(
      Math.exp(this.real) * Math.cos(this.imag),
      Math.exp(this.real) * Math.sin(this.imag),
    );
  }
}
