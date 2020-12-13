/*Write a function called median() that takes an array of integers as an argument and returns the 
median of those integers.*/

function median(array) {
    array = array.sort((a, b) => a - b);
    let median = [];

    if (array.length == 1) {
        median[0] = array[0] 
    } else if (array.length % 2 == 0) {
        for (let i = 0; i < array.length; i++) {
            if (i == array.length / 2) {
                median.push(array[i - 1]);
                median.push(array[i]);
            }
        }
    } else if (array.length % 2 != 0) {
        for (let i = 0; i < array.length; i++) {
            if (i == Math.floor(array.length / 2)) {
                median.push(array[i]);
            }
        }
    }

    return median.length == 1 || array.length == 1 ? median[0] : parseFloat((median.reduce((accum, current) => accum + current) / median.length).toFixed(1));
}

console.log(median([ 3, 2, 1 ]));