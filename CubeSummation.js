/*Write a function cubeSum(n, m) that will calculate a sum of cubes of numbers in a given range, starting 
from the smaller (but not including it) to the larger (including). The first argument is not necessarily the 
larger number.

If both numbers are the same, then the range is empty and the result should be 0.

Examples:

cubeSum(2,3); // => 3^3 = 27
cubeSum(3,2); // => 3^3 = 27
cubeSum(0,4); // => 1^3+2^3+3^3+4^3 = 100
cubeSum(17, 14); // => 15^3+16^3+17^3 = 12384
cubeSum(9, 9); // => 0*/

function cubeSum(n, m) {
    let sumOfCubes = 0;
    let biggest = 0;
    let smallest = 0;

    if (n > m) {
        biggest = n;
        smallest = m;
    } else {
        biggest = m;
        smallest = n;
    }

    if (n == m) {
        return sumOfCubes;
    } else {
        for (let i = smallest + 1; i <= biggest; i++) {
            sumOfCubes += Math.pow(i, 3);
        }

        return sumOfCubes;
    }
}

console.log(cubeSum(17, 14));