function multiples(m, n) {
    let resultArray = [];

    for (let i = 1; i <= m; i++) {
        resultArray.push(i * n);
    }

    return resultArray;
}

console.log(multiples(3, 5));