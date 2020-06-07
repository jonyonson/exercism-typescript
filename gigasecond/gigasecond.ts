class Gigasecond {
  currentDate: Date;

  constructor(date: Date) {
    this.currentDate = date;
  }

  date(): Date {
    return new Date(this.currentDate.valueOf() + 1_000_000_000_000);
  }
}

export default Gigasecond;
