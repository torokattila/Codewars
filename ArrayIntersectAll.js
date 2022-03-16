/*Write a function intersect that takes any number of arguments. 
The function must return an array containing all the values that is present in every argument given to the function.

All arguments given will be arrays.
The first argument determines the order of the returned values.
Return an empty array for empty result set.
Example

var a = ['dog', 'bar', 'foo'];
var b = ['foo', 'bar', 'cat'];
var c = ['gin', 'bar', 'foo'];

intersect(a, b, c); // ['bar', 'foo']*/

const intersection = (firstArray, secondArray) => {
    const result = [];

    for (let i = 0; i < firstArray.length; i++) {
        if (secondArray.includes(firstArray[i])) {
            result.push(firstArray[i]);
        }
    }

    return result;
};

var intersect = function () {
    const args = [...arguments];
    if (args.length === 0) return [];
    let result = args[0].slice();

    for (let i = 1; i < args.length; i++) {
        result = intersection(result, args[i]);
    }

    return result;
};

var a = ['dog', 'bar', 'foo'];
var b = ['foo', 'bar', 'cat'];
var c = ['gin', 'bar', 'foo'];

console.log(intersect(a, b, c));
