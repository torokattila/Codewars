/*We define the middle of the array arr as follows:

if arr contains an odd number of elements, its middle is the element whose index number is the same when counting 
from the beginning of the array and from its end;

if arr contains an even number of elements, its middle is the sum of the two elements whose index numbers when 
counting from the beginning and from the end of the array differ by one.

An array is called smooth if its first and its last elements are equal to one another and to the middle. Given an array arr, 
determine if it is smooth or not.

Example
For arr = [7, 2, 2, 5, 10, 7], the output should be true

The first and the last elements of arr are equal to 7, and its middle also equals 2 + 5 = 7. Thus, the array is smooth and the output is true.

For arr = [-5, -5, 10], the output should be false

The first and middle elements are equal to -5, but the last element equals 10. Thus, arr is not smooth and the output is false.

Input/Output
[input] integer array arr

The given array.

Constraints: 2 ≤ arr.length ≤ 103, -103 ≤ arr[i] ≤ 103.

[output] a boolean value

true if arr is smooth, false otherwise.
*/

function isSmooth(arr) {
    if (arr.length === 2) return false;
    const first = arr[0];
    const last = arr[arr.length - 1];
    const middlePoint = Math.floor(arr.length / 2);
    let middleItem =
        arr.length % 2 === 0
            ? [arr[middlePoint - 1], arr[middlePoint]]
            : arr[middlePoint];

    if (middleItem.length === 2) {
        middleItem = middleItem.reduce((accum, current) => accum + current);
    }

    return [...new Set([first, last, middleItem])].length === 1;
}

console.log(isSmooth([7, 2, 2, 5, 10, 7]));
console.log(isSmooth([-12, 34, 40, -5, -12, 4, 0, 0, -12]));
console.log(isSmooth([-5, -5, 10]));
console.log(isSmooth([4, 2]));
