/*Your task is to create a function called sum_arrays() in Python or addArrays in Javascript, 
which takes two arrays consisting of integers, and returns the sum of those two arrays.*/

function addArrays(array1, array2) {
    if (array1.length == 0 && array2.length == 0) {
        return [];
    } else if (array1.length == 0) {
        return array2;
    } else if (array2.length == 0) {
        return array1;
    }

    const stringArray1 = array1.map(String).join('');
    const stringArray2 = array2.map(String).join('');
    const twoArraySum = (parseInt(stringArray1) + parseInt(stringArray2)).toString().split('');

    if (twoArraySum[0] == '-') {
        twoArraySum[0] = twoArraySum[0] + twoArraySum[1];
        twoArraySum.splice(1, 1)
    }

    return twoArraySum.map(number => {
        return parseInt(number);
    });
}

console.log(addArrays([3, 2, 9], [1, 2]));