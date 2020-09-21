function sumOfN(n) {
    let term = 0;
    let resultArray = [];

    for (let i = 0; i <= Math.abs(n); i++) {
        if (n < 0) {
            term += i*(-1);
        } else {
            term += i;
        }
        resultArray.push(term);
    }

    return resultArray;
};

console.log(sumOfN(6));