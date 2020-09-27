function diffBig2(arr) {
    const biggestNumber = Math.max.apply(null, arr);
    arr.splice(arr.indexOf(biggestNumber), 1);
    const secondBiggestNumber = Math.max.apply(null, arr);

    return biggestNumber - secondBiggestNumber;
}

console.log(diffBig2([10, 5, 2]));