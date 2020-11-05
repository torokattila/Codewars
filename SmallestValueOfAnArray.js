/*Write a function that can return the smallest value of an array or the index of that value. 
The function's 2nd parameter will tell whether it should return the value or the index.*/

function min(arr, toReturn) {
    const min = Math.min.apply(null, arr);

    return toReturn == 'index' ? arr.indexOf(min) : min;
}

console.log(min([1, 2, 3, 4, 5], 'value'));