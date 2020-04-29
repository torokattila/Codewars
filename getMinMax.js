'use strict';

function getMinMax(arr) {
    let min = arr[0];
    let max = arr[0];
    let resultArray = [];


    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < min) {
            min = arr[i];
        }
        if (arr[i] > max) {
            max = arr[i];
        }
    }


    resultArray.push(min);
    resultArray.push(max);
    return resultArray;
};


console.log(getMinMax([1]));
