/*Given an array of ints, return the index such that the sum of the elements to the right of that index 
equals the sum of the elements to the left of that index. If there is no such index, return -1. If there is 
more than one such index, return the left-most index.

For example:

peak([1,2,3,5,3,2,1]) = 3, because the sum of the elements at indexes 0,1,2 == sum of elements at 
indexes 4,5,6. We don't sum index 3.
peak([1,12,3,3,6,3,1]) = 2
peak([10,20,30,40]) = -1
--For Haskell
peak [1,12,3,3,6,3,1] == Just 2
peak [10,20,30,40]  == Nothing 
The special case of an array of zeros (for instance [0,0,0,0]) will not be tested.*/

function peak(arr) {
    let resultIndex = -1;

    for (let i = 0; i < arr.length; i++) {
        let leftSum = 0;
        let rightSum = 0;

        for (let j = i + 1; j < arr.length; j++) {
            rightSum += arr[j];
        }

        for (let j = i - 1; j >= 0; j--) {
            leftSum += arr[j];
        }

        if (leftSum == rightSum) {
            resultIndex = i;
        }
    }

    return resultIndex;
}

console.log(peak([10,20,30,40]));