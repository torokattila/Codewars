'use strict';

function halvingSum(n) {
    let sum = n;

    while(n > 0) {
        n = Math.floor(n/2);
        sum += n;
    }

    return sum;
}

console.log(halvingSum(25));
