function accumulate<T>(collection: T[], accumulator: (item: T) => T): T[] {
  const results: T[] = [];
  collection.forEach((v) => results.push(accumulator(v)));

  return results;
}

export default accumulate;
