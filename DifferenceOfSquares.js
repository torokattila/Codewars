/*Find the difference between the sum of the squares of the first n natural numbers (1 <= n <= 100) and 
the square of their sum.*/

function differenceOfSquares(n) {
    let squareSumOfNumbers = 0;
    let sumOfSquares = 0;

    for (let i = 1; i <= n; i++) {
        squareSumOfNumbers += i;
        sumOfSquares += Math.pow(i, 2);
    }

    squareSumOfNumbers = Math.pow(squareSumOfNumbers, 2);

    return squareSumOfNumbers - sumOfSquares;
}

console.log(differenceOfSquares(10))