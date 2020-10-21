function multiplyAndFilter(array, multiplier) {
    let resultArray = [];

    array.forEach(number => {
        if (typeof number === 'number') {
            resultArray.push(number * multiplier);
        }
    })

    return resultArray;
}

console.log(multiplyAndFilter([1, null, function(){}, 2.5, 'string', 10, undefined, {}, []], 3));