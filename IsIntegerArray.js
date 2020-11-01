/*returns true / True if every element in an array is an integer or a float with no decimals.
returns true / True if array is empty.
returns false / False for every other input.*/

function isIntArray(arr) {
    let result = true;

    if (arr) {
        arr.forEach(item => {
            if (isNaN(item) || item == undefined || item == null || item % 1 != 0 || typeof item == 'string') {
                result = false;
            }
        })
    } else {
        result = false;
    }

    return result;
}

console.log(isIntArray([null]));