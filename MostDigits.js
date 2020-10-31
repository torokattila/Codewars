/*Find the number with the most digits.

If two numbers in the argument array have the same number of digits, return the first one in the array.*/

function findLongest(array) {
    const stringArray = array.map(item => {
        return item.toString();
    });
    let result;
    var length = 0;

    for (let i = 0; i < stringArray.length; i++) {
        if (stringArray[i].length > length) {
            var length = stringArray[i].length;
            result = stringArray[i];
        }
    }

    return parseInt(result);
}

console.log(findLongest([8, 900, 500]));