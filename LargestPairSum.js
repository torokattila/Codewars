function largestPairSum(numbers) {
  let sum = 0;

  if (numbers === null || numbers.length === 0) {
    sum = null;
  } else {
    numbers.sort((a, b) => {
        return a - b;
    });

    sum = numbers[numbers.length - 1] + numbers[numbers.length - 2];
  }

  return sum;
}

console.log(largestPairSum([10, 14, 2, 23, 19]));