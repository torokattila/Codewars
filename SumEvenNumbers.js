//Write a function named sumEvenNumbers, taking a sequence of numbers as single parameter. Your function must return the sum of the even values of this sequence.

function sumEvenNumbers(input) {

    return input.filter(item => {
        return item % 2 == 0;
    }).reduce((accum, current) => {
        return accum + current;
    });
}

console.log(sumEvenNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
