function disariumNumber(n) {
    let digits = n.toString().split('');
    let poweredArray = [];

    for (let i = 0; i < digits.length; i++) {
        poweredArray.push(Math.pow(digits[i], i + 1));
    }

    const sum = poweredArray.reduce((acc, curr) => {
        return acc + curr;
    })

    return sum == n ? "Disarium !!" : "Not !!";
}

console.log(disariumNumber(89));