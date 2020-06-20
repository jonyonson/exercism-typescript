function accumulate(
  array: (string | number)[],
  accumulator: (x: any) => any,
): (string | number)[] {
  return array.map(accumulator);
}

export default accumulate;
