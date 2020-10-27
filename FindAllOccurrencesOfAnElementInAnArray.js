/*Given an array (a list in Python) of integers and an integer n, find all occurrences of 
n in the given array and return another array containing all the index positions of n in the given array.*/

const findAll = (array, n) => {
    let resultArray = [];

    for (let i = 0; i < array.length; i++) {
        if (array[i] == n) {
            resultArray.push(i);
        }
    }

    return resultArray;
}

console.log(findAll([6, 9, 3, 4, 3, 82, 11], 3));