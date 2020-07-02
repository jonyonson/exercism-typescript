function accumulate<T1, T2>(
  collection: T1[],
  accumulator: (item: T1) => T2,
): T2[] {
  const results: T2[] = [];
  collection.forEach((v) => results.push(accumulator(v)));

  return results;
}

export default accumulate;
