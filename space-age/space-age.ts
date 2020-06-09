export default class SpaceAge {
  seconds: number;
  secondsInYear: number;

  constructor(seconds: number) {
    this.seconds = seconds;
    this.secondsInYear = 31557600;
  }

  onEarth(): number {}

  onMercury(): number {}

  onVenus(): number {}

  onMars(): number {}

  onJupiter(): number {}

  onSaturn(): number {}

  onUranus(): number {}

  onNeptune(): number {}

  private formatYears(): number {}
}
