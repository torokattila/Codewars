/*Given an array containing only integers, add all the elements and return the binary equivalent of that sum.

If the array contains any non-integer element (e.g. an object, a float, a string and so on), return false.

Note: The sum of an empty array is zero.

arr2bin([1,2]) == '11'
arr2bin([1,2,'a']) == false*/

function areAllNumbers(array) {
    let result = true;

    array.forEach(item => {
        if (typeof item != 'number') {
            result = false;
        }
    });

    return result;
}

function arr2bin(arr) {
    if (!areAllNumbers(arr)) return false;

    return arr.length > 0 ? arr.reduce((accum, current) => accum + current).toString(2) : '0';
}

console.log(arr2bin([1,10,100,1000]));