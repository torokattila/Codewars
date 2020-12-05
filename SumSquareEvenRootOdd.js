/*Complete the function that takes a list of numbers (nums), as the only argument to the function. 
Take each number in the list and square it if it is even, or square root the number if it is odd. 
Take this new list and return the sum of it, rounded to two decimal places.*/

const sumSquareEvenRootOdd = ns => {
    let modifiedNumbers = [];

    ns.forEach(number => {
        if (number % 2 == 0) {
            number = Math.pow(number, 2);
        } else if (number % 2 != 0) {
            number = Math.sqrt(number)
        }

        modifiedNumbers.push(number);
    });

    return parseFloat(modifiedNumbers.reduce((accum, current) => accum + current).toFixed(2));
};

console.log(sumSquareEvenRootOdd([4, 5, 7, 8, 1, 2, 3, 0]));