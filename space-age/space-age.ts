export default class SpaceAge {
  seconds: number;
  secondsInYear: number;

  constructor(seconds: number) {
    this.seconds = seconds;
    this.secondsInYear = 31557600;
  }

  onEarth(): number {
    return this.formatYears(1);
  }

  onMercury(): number {
    return this.formatYears(0.2408467);
  }

  onVenus(): number {
    return this.formatYears(0.61519726);
  }

  onMars(): number {
    return this.formatYears(1.8808158);
  }

  onJupiter(): number {
    return this.formatYears(11.862615);
  }

  onSaturn(): number {
    return this.formatYears(29.447498);
  }

  onUranus(): number {
    return this.formatYears(84.016846);
  }

  onNeptune(): number {
    return this.formatYears(164.79132);
  }

  private formatYears(orbitsPerEartYear: number): number {
    const years = this.seconds / (this.secondsInYear * orbitsPerEartYear);
    return +years.toFixed(2);
  }
}
