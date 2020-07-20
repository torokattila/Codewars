function modifiedSum(a, n) {
    let sumOfNumbers = 0;
    let sumOfPows = 0;

    a.forEach((item) => {
        sumOfNumbers += item;
        sumOfPows += Math.pow(item, n);
    });

    return sumOfPows - sumOfNumbers;
}

console.log(modifiedSum([1, 2, 3], 3));