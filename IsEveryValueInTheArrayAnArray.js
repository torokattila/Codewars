/*Is every value in the array an array?

This should only test the second array dimension of the array. The values of the nested arrays don't have 
to be arrays.*/

const arrCheck = value => {
    let result = true;

    for (let i = 0; i < value.length; i++) {
        if (!Array.isArray(value[i])) {
            result = false;
        }
    }

    return result;
}

console.log(arrCheck([[],{}]));