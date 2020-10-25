function minimumSteps(numbers, value) {
  numbers = numbers.sort((a, b) => a - b);

  let sum = 0;
  let counter = 0;
  let tempSum = 0;
  
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];

    if (sum <= value) {
        tempSum += numbers[i];
        counter++;
    }
  }

  if (tempSum == value) {
      return counter - 1;
  } else {
      return counter;
  }
}

console.log(minimumSteps([ 4, 6, 3 ], 7))
