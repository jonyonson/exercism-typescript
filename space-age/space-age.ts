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

  onEarth = (): number => this.formatAge('earth');
  onMercury = (): number => this.formatAge('mercury');
  onVenus = (): number => this.formatAge('venus');
  onMars = (): number => this.formatAge('mars');
  onJupiter = (): number => this.formatAge('jupiter');
  onSaturn = (): number => this.formatAge('saturn');
  onUranus = (): number => this.formatAge('uranus');
  onNeptune = (): number => this.formatAge('neptune');

  private formatAge(planet: Planet): number {
    const years =
      this.seconds /
      (SpaceAge.secondsInAnEarthYear * orbitsPerEarthYear[planet]);

    return Number(years.toFixed(2));
  }
}
