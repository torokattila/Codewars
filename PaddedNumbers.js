function solution(value) {
    let newArray = new Array(5);
    let characterArray = value.toString().split('');

    for (let i = 0; i < characterArray.length; i++) {
        newArray.push(characterArray[i]);
    }

    for (let i = 0; i < newArray.length; i++) {
        if (isNaN(newArray[i])) {
            newArray[i] = '0';
        }
    }

    let newArrayString = newArray.join('');

    return 'Value is ' + newArrayString.substring(newArray.length - 5);
}

console.log(solution(5));