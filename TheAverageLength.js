/*Given an array of strings of the same letter type. Return a new array, which will differ in that the length 
of each element is equal to the average length of the elements of the previous array.

A few examples:

['u', 'y'] =>  ['u', 'y'] // average length is 1
['aa', 'bbb', 'cccc'] => ['aaa', 'bbb', 'ccc'] // average length is 3
['aa', 'bb', 'ddd', 'eee'] => ['aaa', 'bbb', 'ddd', 'eee'] // average length is 2.5 round up to 3
If the average length is not an integer, use Math.round().
The input array's length > 1*/

function averageLength(array) {
    let arrayElementsLengthSum = 0;
    let resultArray = [];

    array.forEach(item => {
        arrayElementsLengthSum += item.length;
    });

    let averageLengthOfArray = Math.round(arrayElementsLengthSum / array.length);

    for (let i = 0; i < array.length; i++) {

        if (array[i].length > averageLengthOfArray) {
            array[i] = array[i].slice(0, averageLengthOfArray);
        } else if (array[i].length != averageLengthOfArray) {
            array[i] += array[i].charAt(0).repeat(averageLengthOfArray - array[i].length);
        }

        resultArray.push(array[i]);
    }

    return resultArray;
}

console.log(averageLength(['aa', 'bbb', 'cccc']));