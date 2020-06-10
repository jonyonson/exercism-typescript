const orbitsPerEarthYear = {
  earth: 1,
  mercury: 0.2408467,
  venus: 0.61519726,
  mars: 1.8808158,
  jupiter: 11.862615,
  saturn: 29.447498,
  uranus: 84.016846,
  neptune: 164.79132,
};

type Planet = keyof typeof orbitsPerEarthYear;

export default class SpaceAge {
  readonly seconds: number;
  private static readonly secondsInAnEarthYear: number = 31557600;

  constructor(seconds: number) {
    this.seconds = seconds;
  }

  onEarth(): number {
    const { earth } = orbitsPerEarthYear;
    return this.formatYears(earth);
  }

  onMercury(): number {
    const { mercury } = orbitsPerEarthYear;
    return this.formatYears(mercury);
  }

  onVenus(): number {
    const { venus } = orbitsPerEarthYear;
    return this.formatYears(venus);
  }

  onMars(): number {
    const { mars } = orbitsPerEarthYear;
    return this.formatYears(mars);
  }

  onJupiter(): number {
    const { jupiter } = orbitsPerEarthYear;
    return this.formatYears(jupiter);
  }

  onSaturn(): number {
    const { saturn } = orbitsPerEarthYear;
    return this.formatYears(saturn);
  }

  onUranus(): number {
    const { uranus } = orbitsPerEarthYear;
    return this.formatYears(uranus);
  }

  onNeptune(): number {
    const { neptune } = orbitsPerEarthYear;
    return this.formatYears(neptune);
  }

  private formatYears(orbitsPerEarthYear: number): number {
    const years =
      this.seconds / (SpaceAge.secondsInAnEarthYear * orbitsPerEarthYear);
    return Number(years.toFixed(2));
  }
}
