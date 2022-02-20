/*You are given a string of numbers between 0-9. Find the average of these numbers and return it as a 
floored whole number (ie: no decimal places) written out as a string. Eg:

"zero nine five two" -> "four"

If the string is empty or includes a number greater than 9, return "n/a"*/

function averageString(str) {
    if (str === '') return 'n/a';

    const numbers = {
        zero: 0,
        one: 1,
        two: 2,
        three: 3,
        four: 4,
        five: 5,
        six: 6,
        seven: 7,
        eight: 8,
        nine: 9,
    };
    const words = str.split(' ');
    const length = words.length;

    const numbersFromWords = words.map((word) => {
        return numbers[word];
    });

    if (numbersFromWords.includes(undefined)) return 'n/a';
    const average =
        numbersFromWords.reduce((accum, current) => accum + current) / length;

    let result = '';

    for (let [key, value] of Object.entries(numbers)) {
        if (Math.floor(average) === value) {
            result = key;
        }
    }

    return result;
}

console.log(averageString('four six two three'));
