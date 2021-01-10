/*The year of 2013 is the first year after the old 1987 with only distinct digits.

Now your task is to solve the following problem: given a year number, find the minimum year number which is 
strictly larger than the given one and has only distinct digits.

Input/Output
[input] integer year

1000 ≤ year ≤ 9000

[output] an integer

the minimum year number that is strictly larger than the input number year and all its digits are distinct.*/

function hasDistinctDigits(number) {
    let occurrences = {};
    const allValuesAreOne = (number) => number == 1;
    let valuesArray = [];

    number.toString().split('').forEach(character => {
        return occurrences[character] ? occurrences[character]++ : occurrences[character] = 1;
    });

    for (const [key, value] of Object.entries(occurrences)) {
        valuesArray.push(value);
    }

    return valuesArray.every(allValuesAreOne);
}

function distinctDigitYear(year) {
    let resultNumber = 0;

    for (let i = year + 1; i < 9000; i++) {
        let currentNumberStringChars = i.toString();

        if (hasDistinctDigits(parseInt(currentNumberStringChars))) {
            resultNumber = i;
            break;
        }
    }

    return resultNumber;
}

console.log(distinctDigitYear(2013));