/*After calling the function findSum() with any number of non-negative integer arguments, it should return 
the sum of all those arguments. If no arguments are given, the function should return 0, if negative arguments 
are given, it should return -1.

eg

findSum(1,2,3,4); // returns 10 
findSum(1,-2);    // returns -1 
findSum();        // returns 0 */

function containsNegativeValue(array) {
    let result = false;

    array.forEach(item => {
        if (item < 0) {
            result = true;
        }
    });

    return result;
}

function findSum() {
    const args = Array.from(arguments);

    return args == 0 ? 0 : containsNegativeValue(args) ? -1 : args.reduce((accum, current) => {
        return accum + current;
    });
}

console.log(findSum(1, 2, 3, 4));