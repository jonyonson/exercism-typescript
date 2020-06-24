type Collection = (string | number)[];

function accumulate(
  collection: Collection,
  accumulator: (x: any) => any,
): Collection {
  return collection.map(accumulator);
}

export default accumulate;
