export default class Raindrops {
  convert(number: number): string {
    let sounds = '';

    if (number % 3 === 0) sounds += 'Pling';
    if (number % 5 === 0) sounds += 'Plang';
    if (number % 7 === 0) sounds += 'Plong';

    return sounds ? sounds : number.toString();
  }
}
