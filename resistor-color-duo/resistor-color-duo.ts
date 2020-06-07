type Color =
  | 'black'
  | 'brown'
  | 'red'
  | 'orange'
  | 'yellow'
  | 'green'
  | 'blue'
  | 'violet'
  | 'grey'
  | 'white';

const colorValue = {
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

export class ResistorColor {
  private bands: Color[];

  constructor(bands: Color[]) {
    this.bands = bands;

    if (bands.length < 2) {
      throw 'At least two colors need to be present';
    }
  }

  value(): number {
    return colorValue[this.bands[0]] * 10 + colorValue[this.bands[1]];
  }
}
