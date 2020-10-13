function strong(n) {
    let sum = 1;
    let digits = n.toString().split('');
    let factorialsArray = [];

    for (let i = 0; i < digits.length; i++) {
        sum = 1;
        for (let j = 2; j <= digits[i]; j++) {
            sum *= j;
        }
        factorialsArray.push(sum);
    }

    const summedFactorials = factorialsArray.reduce((acc, curr) => {
        return acc + curr;
    });

    return summedFactorials == n ? "STRONG!!!!" : "Not Strong !!";
}

console.log(strong(145))