type Planet =
  | 'earth'
  | 'mercury'
  | 'venus'
  | 'mars'
  | 'jupiter'
  | 'saturn'
  | 'uranus'
  | 'neptune';

const orbitsPerEarthYear: { [key in Planet]: number } = {
  earth: 1,
  mercury: 0.2408467,
  venus: 0.61519726,
  mars: 1.8808158,
  jupiter: 11.862615,
  saturn: 29.447498,
  uranus: 84.016846,
  neptune: 164.79132,
};

export default class SpaceAge {
  readonly seconds: number;
  private static readonly secondsInAnEarthYear: number = 31557600;

  constructor(seconds: number) {
    this.seconds = seconds;
  }

  onEarth = (): number => this.formatYears('earth');
  onMercury = (): number => this.formatYears('mercury');
  onVenus = (): number => this.formatYears('venus');
  onMars = (): number => this.formatYears('mars');
  onJupiter = (): number => this.formatYears('jupiter');
  onSaturn = (): number => this.formatYears('saturn');
  onUranus = (): number => this.formatYears('uranus');
  onNeptune = (): number => this.formatYears('neptune');

  private formatYears(planet: Planet): number {
    const years =
      this.seconds /
      (SpaceAge.secondsInAnEarthYear * orbitsPerEarthYear[planet]);

    return Number(years.toFixed(2));
  }
}
