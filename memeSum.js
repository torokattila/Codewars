function add(num1, num2) {
    let firstNumberString = num1.toString();
    let secondNumberString = num2.toString();
    let firstNumberArray = [];
    let secondNumberArray = [];
    let finalSumArray = [];

    for (let i = 0; i < firstNumberString.length; i++) {
        firstNumberArray.push(parseInt(firstNumberString.charAt(i)));
    }

    for (let i = 0; i < secondNumberString.length; i++) {
        secondNumberArray.push(parseInt(secondNumberString.charAt(i)));
    }

    firstNumberArray = firstNumberArray.reverse();
    secondNumberArray = secondNumberArray.reverse();

    if (firstNumberArray.length > secondNumberArray.length) {
        for (let i = 0; i < firstNumberArray.length; i++) {
            finalSumArray.push(firstNumberArray[i] + secondNumberArray[i])
        }
        finalSumArray.pop();
        finalSumArray.push(firstNumberArray[firstNumberArray.length - 1])
    } else if (secondNumberArray.length > firstNumberArray.length) {
        for (let i = 0; i < secondNumberArray.length; i++) {
            finalSumArray.push(firstNumberArray[i] + secondNumberArray[i])
        }
        finalSumArray.pop();
        finalSumArray.push(secondNumberArray[secondNumberArray.length - 1])
    } else {
        for (let i = 0; i < firstNumberArray.length; i++) {
            finalSumArray.push(firstNumberArray[i] + secondNumberArray[i])
        }
    }

    return parseInt(finalSumArray.reverse().join(''));
}

console.log(add(2, 11));