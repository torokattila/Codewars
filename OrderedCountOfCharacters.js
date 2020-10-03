var orderedCount = function (text) {
    let charMap = new Map();
    const count = 0;
    for (const key of text) {
        charMap.set(key, count);
    }

    for (const key of text) {
        let count = charMap.get(key);
        charMap.set(key, count + 1);
    }

    let resultObject = [];

    for (const [key, value] of charMap) {
        resultObject.push([key, value])
    }

    return resultObject;
}

console.log(orderedCount("233312"));