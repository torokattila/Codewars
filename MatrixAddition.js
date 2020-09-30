function matrixAddition(a, b) {
    let resultArray = new Array(a.length);

    for (let i = 0; i < a.length; i++) {
        resultArray[i] = new Array(a.length);
        for (let j = 0; j < a.length; j++) {
            resultArray[i][j] = a[i][j] + b[i][j];
        }
    }

    return resultArray;
}

console.log(matrixAddition([
    [1, 2, 3],
    [3, 2, 1],
    [1, 1, 1]], [

    [2, 2, 1],
    [3, 2, 3],
    [1, 1, 3]]));