/*In this kata, you'll be given an integer of range 0 <= x <= 99 and have to return that number spelt out in English. 
A few examples:

nameThatNumber(4)   // returns "four"
nameThatNumber(19)  // returns "nineteen"
nameThatNumber(99)  // returns "ninety nine"
Words should be separated by only spaces and not hyphens. No need to validate parameters, 
they will always be in the range [0, 99]. Make sure that the returned String has no leading of trailing spaces. Good luck!*/

const BELOW_TEN = [
    'zero',
    'one',
    'two',
    'three',
    'four',
    'five',
    'six',
    'seven',
    'eight',
    'nine',
];
const BETWEEN_TEN_AND_TWENTY = [
    'ten',
    'eleven',
    'twelve',
    'thirteen',
    'fourteen',
    'fifteen',
    'sixteen',
    'seventeen',
    'eighteen',
    'nineteen',
];
const TENS = [
    'twenty',
    'thirty',
    'forty',
    'fifty',
    'sixty',
    'seventy',
    'eighty',
    'ninety',
];

function nameThatNumber(num) {
    if (num < 10) return BELOW_TEN[num];
    if (num >= 10 && num < 20) return BETWEEN_TEN_AND_TWENTY[num % 10];
    if (num >= 20 && num % 10 === 0) return TENS[num / 10 - 2];
    if (num >= 20 && num % 10 !== 0)
        return `${TENS[Math.floor(num / 10) - 2]} ${BELOW_TEN[num % 10]}`;
}

console.log(nameThatNumber(26));
