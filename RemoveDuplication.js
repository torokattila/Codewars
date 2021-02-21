/*Write a function that accepts an array of number as parameter, and it returns array after removing all 
duplicated numbers.

Example removeDuplication([1,2,3,2,4,6,2,6,7]) Output [1,3,4,7].

Here 2,6 are duplicated in array, so we should remove all numbers that are duplicated. 
The output will be 1,3,4,7 after removing 2,6.

Input : [1,2,1,2,1,1,2,2] , Output : [].

Input : [2,5,6,7,5,2,6] , Output: [7].*/

function removeDuplication(arr) {
    let duplicates = {};
    let duplicatesArray = [];

    arr.forEach(item => {
        return duplicates[item] ? duplicates[item]++ : duplicates[item] = 1;
    });

    for (const [key, value] of Object.entries(duplicates)) {
        if (value > 1) {
            duplicatesArray.push(parseInt(key));
        }
    }

    duplicatesArray.forEach(number => {
        arr = arr.filter(originalNum => originalNum != number);
    });

    return arr;
}

console.log(removeDuplication([2, 5, 6, 7, 5, 2, 6]));
