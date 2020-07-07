function sumTwoSmallestNumbers(numbers) {

    numbers.sort((a, b) => {return a - b});

    return numbers[0] + numbers[1];
}

console.log(sumTwoSmallestNumbers([19, 5, 42, 2, 77]));