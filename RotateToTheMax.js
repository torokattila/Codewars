/*Given a number, return the maximum value by rearranging its digits.*/

const rotateToMax = n => {
    const nChars = n.toString().split('');
    const sortedNCharsIntArray = nChars.map(number => parseInt(number)).sort((a, b) => b - a);

    return parseInt(sortedNCharsIntArray.map(number => number.toString()).join(''));
}

console.log(rotateToMax(10543));