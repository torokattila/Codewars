/*You are writing a function that takes two sets of arguments of arbitrary length. 
The return value will be the sum of the values of all of the arguments.

The function should contain at least 1 argument per set.

calculate(1)(1) // should return 2
calculate(1,1)(1) // should return 3
calculate(1,1)(1,-1) // should return 2
calculate(2,4)(3,7,1) // should return 17*/

function calculate(...first) {
    return function (...second) {
        return (
            first.reduce((accum, current) => accum + current) +
            second.reduce((accum, current) => accum + current)
        );
    };
}

// console.log([1, -1].reduce((a, c) => a + c));

console.log(calculate(1, 1)(1, -1));
