const colorToResistanceValue = {
  black: 0,
  brown: 1,
  red: 2,
  orange: 3,
  yellow: 4,
  green: 5,
  blue: 6,
  violet: 7,
  grey: 8,
  white: 9,
};

type Color = keyof typeof colorToResistanceValue;

export class ResistorColor {
  private bands: Color[];

  constructor(bands: Color[]) {
    this.bands = bands;

    if (bands.length < 2) {
      throw 'At least two colors need to be present';
    }
  }

  value(): number {
    const [color1, color2] = this.bands;
    return colorToResistanceValue[color1] * 10 + colorToResistanceValue[color2];
  }
}
