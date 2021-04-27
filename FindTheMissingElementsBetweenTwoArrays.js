/*Given two integer arrays where the second array is a shuffled duplicate of the first array with one 
element missing, find the missing element.

Please note, there may be duplicates in the arrays, so checking if a numerical value exists in one and not 
the other is not a valid solution.

find_missing([1, 2, 2, 3], [1, 2, 3]) => 2
find_missing([6, 1, 3, 6, 8, 2], [3, 6, 6, 1, 2]) => 8
The first array will always have at least one element.*/

function findMissing(arr1, arr2) {
    const sortedArr1 = arr1.sort((a, b) => a - b);
    const sortedArr2 = arr2.sort((a, b) => a - b);
    let sortedArr1Occurrences = {};
    let sortedArr2Occurrences = {};
    let missingNumber = 0;

    sortedArr1.forEach(number => {
        return sortedArr1Occurrences[number] ? sortedArr1Occurrences[number]++ : sortedArr1Occurrences[number] = 1;
    });

    sortedArr2.forEach(number => {
        return sortedArr2Occurrences[number] ? sortedArr2Occurrences[number]++ : sortedArr2Occurrences[number] = 1;
    });

    for (const [key, value] of Object.entries(sortedArr1Occurrences)) {
        if (!sortedArr2Occurrences[key] || sortedArr2Occurrences[key] != value) {
            missingNumber = parseInt(key);
        }
    }

    return missingNumber;
}

console.log(findMissing([4, 3, 3, 61, 8, 8], [8, 61, 8, 3, 4]));
