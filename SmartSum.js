/*Your task is to write a function, smartSum, that returns the sum of an arbitrary number of arguments. 
But be careful, some of your arguments can be arrays of numbers or nested arrays.

smartSum(1,2,3,[4,5],6); // returns 21
smartSum(1,2,[[3,4],5],6); // returns 21*/

function smartSum() {
    const params = [...arguments];
    let result = 0;

    for (let i = 0; i < params.length; i++) {
        if (Array.isArray(params[i])) {
            result += smartSum(...params[i]);
        } else {
            result += params[i];
        }
    }

    return result;
}

console.log(smartSum(1, 2, [[3, 4], 5], 6));
