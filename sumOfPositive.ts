export function positiveSum(arr: number[]): number {
  let sum: number = 0;
  
  arr.forEach(function (item) {
    if (item > 0) {
        sum += item;
    }
  });

  return sum;
}

console.log(positiveSum([1,-4,7,12]));
