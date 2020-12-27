/*You are given two arrays arr1 and arr2, where arr2 always contains integers.

Write the function find_array(arr1, arr2) such that:

For arr1 = ['a', 'a', 'a', 'a', 'a'], arr2 = [2, 4] find_array returns ['a', 'a']

For arr1 = [0, 1, 5, 2, 1, 8, 9, 1, 5], arr2 = [1, 4, 7] find_array returns [1, 1, 1]

For arr1 = [0, 3, 4], arr2 = [2, 6] find_array returns [4]

For arr1=["a","b","c","d"] , arr2=[2,2,2], find_array returns ["c","c","c"]

For arr1=["a","b","c","d"], arr2=[3,0,2] find_array returns ["d","a","c"]

If either arr1 or arr2 is empty, you should return an empty arr (empty list in python, empty vector in c++). Note for c++ use std::vector arr1, arr2.*/

function findArray(arr1, arr2) {
    if (arr1.length == 0 || arr2.length == 0) {
        return [];
    } else {
        let resultArray = [];

        arr2.forEach(number => {
            resultArray.push(arr1[number]);
        });

        for (let i = 0; i < resultArray.length; i++) {
            if (resultArray[i] == null) {
                resultArray.splice(resultArray.indexOf(resultArray[i]), 1);
            }
        }

        return resultArray;
    }
}

console.log(findArray([0, 3, 4], [2, 6]));