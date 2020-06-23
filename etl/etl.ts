type LegacyData = { [key: string]: string[] };
type TransformedData = { [key: string]: number };

function transform(old: LegacyData): TransformedData {
  const transformedData: TransformedData = {};

  Object.entries(old).forEach(([points, letters]) => {
    letters.forEach((letter) => {
      transformedData[letter.toLowerCase()] = Number(points);
    });
  });

  return transformedData;
}

export default transform;
