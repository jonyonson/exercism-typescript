type Collection = (string | number)[];

function accumulate(
  collection: Collection,
  accumulator: (n: any) => any,
): Collection {
  const results: Collection = [];
  collection.forEach((v) => results.push(accumulator(v)));

  return results;
}

export default accumulate;
