/*Your job is to write a function which increments a string, to create a new string.

If the string already ends with a number, the number should be incremented by 1.
If the string does not end with a number. the number 1 should be appended to the new string.
Examples:

foo -> foo1

foobar23 -> foobar24

foo0042 -> foo0043

foo9 -> foo10

foo099 -> foo100

Attention: If the number has leading zeros the amount of digits should be considered.*/

function incrementString(strng) {
    if (strng.length === 0) return '1';
    const numberPattern = /[0-9]/;
    if (!numberPattern.test(strng[strng.length - 1])) return `${strng}1`;
    if (/^\d+$/.test(strng)) {
        const diff = strng.length - `${Number(strng) + 1}`.length;

        if (diff < 0) {
            return `${++strng}`;
        } else {
            return `${'0'.repeat(diff)}${++strng}`;
        }
    }
    const lettersAndNumbers = strng.match(/[a-z]+|[^a-z]+/gi);
    const letters = lettersAndNumbers[0];
    let numbers = lettersAndNumbers[1];

    const incrementedValue =
        letters.substr(0, strng.indexOf(numbers)) + ++numbers;
    const differenceBetweenIncrementedAndStrnLength =
        strng.length - incrementedValue.length;

    if (differenceBetweenIncrementedAndStrnLength < 0) {
        return letters + letters.substr(0, strng.indexOf(numbers)) + numbers;
    } else {
        return (
            letters +
            letters.substr(0, strng.indexOf(numbers)) +
            '0'.repeat(strng.length - incrementedValue.length) +
            numbers
        );
    }
}

console.log(incrementString('1'));
