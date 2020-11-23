/*Given an array, find the duplicates in that array, and return a new array of those duplicates. 
The elements of the returned array should appear in the order when they first appeared as duplicates.

Note: numbers and their corresponding string representations should not be treated as duplicates 
(i.e., "1" != 1).*/

function duplicates(arr) {
    return arr.reduce(function (acc, element, index, array) {
        if (array.indexOf(element) !== index && acc.indexOf(element) < 0) acc.push(element); return acc;
    }, []);
}

console.log(duplicates([1, 2, 4, 4, 3, 3, 1, 5, 3, "5"]));