function transform(old: {
  [key: string]: string[];
}): { [key: string]: number } {
  const transformedData: { [key: string]: number } = {};

  Object.entries(old).forEach(([points, letters]) => {
    letters.forEach((letter) => {
      transformedData[letter.toLowerCase()] = Number(points);
    });
  });

  return transformedData;
}

export default transform;
