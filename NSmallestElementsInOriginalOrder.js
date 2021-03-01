/*Your task is to write a function that does just what the title suggests (so, fair warning, be aware that you 
    are not getting out of it just throwing a lame bas sorting method there) with an array/list/vector of
    integers and the expected number n of smallest elements to return.

Also:

the number of elements to be returned cannot be higher than the array/list/vector length;
elements can be duplicated;
in case of duplicates, just return them according to the original order (see third example for more clarity).
Same examples and more in the test cases:

firstNSmallest([1,2,3,4,5],3) === [1,2,3] //well, not technically ===, but you get what I mean
firstNSmallest([5,4,3,2,1],3) === [3,2,1]
firstNSmallest([1,2,3,4,1],3) === [1,2,1]
firstNSmallest([1,2,3,-4,0],3) === [1,-4,0]
firstNSmallest([1,2,3,4,5],0) === []*/

function firstNSmallest(array, n) {
    let arrayCopy = [...array];
    let sortedArrayCopy = arrayCopy.sort((a, b) => a - b);
    let resultArray = [];
    let smallestElements = [];

    for (let i = 0; i < sortedArrayCopy.length && i < n; i++) {
        smallestElements.push(sortedArrayCopy[i]);
    }
    console.log(smallestElements);
    for (let i = 0; i < array.length; i++) {
        const originalNumber = array[i];

        if (smallestElements.indexOf(originalNumber) !== -1) {
            resultArray.push(originalNumber);
            smallestElements.splice(smallestElements.indexOf(originalNumber), 1);
        }
    }

    return resultArray;
}

console.log(firstNSmallest([1, 2, 3, 4, 1], 3));