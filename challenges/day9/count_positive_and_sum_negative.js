function countPositivesSumNegatives(input) {
    if( input === null || input.length === 0) return [];
    const negative = input.filter(number => number < 0);
    const sumOfNegative = negative.reduce((occ,curr) => occ + curr,0);
    const countPositive = input.filter(number => number > 0).length;
    return [countPositive,sumOfNegative];
  }