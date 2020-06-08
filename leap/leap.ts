function makeNumeric(n: number) {
  return {
    isDivisibleBy: (divisor: number): boolean => n % divisor === 0,
  };
}

function isLeapYear(n: number): boolean {
  let year = makeNumeric(n);

  return (
    year.isDivisibleBy(4) &&
    (!year.isDivisibleBy(100) || year.isDivisibleBy(400))
  );
}

export default isLeapYear;

// function isLeapYear(year: number): boolean {
//   return year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0);
// }
