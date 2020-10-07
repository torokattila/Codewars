function solution(pairs) {
    let resultString = '';

    for (const [key, value] of Object.entries(pairs)) {
        resultString += key + ' = ' + value + ',';
    }

    return resultString.slice(0, -1);
}

console.log(solution({ a: 1, b: '2' }));