/*
Ninety Nine Thousand Nine Hundred Ninety Nine

Write a method that takes a number and returns a string of that number in English.
Your method should be able to handle any number between 0 and 99999. If the given number is 
outside of that range or not an integer, the method should return an empty string.

Examples
0      -->  "zero"
27     -->  "twenty seven"
100    -->  "one hundred"
7012   -->  "seven thousand twelve"
99205  -->  "ninety nine thousand two hundred five"
*/

export function numberToEnglish(x: number): string {
  if (!Number.isInteger(x) || x < 0 || x > 99999) return '';

  if (x === 0) return 'zero';

  const ones = [
    '',
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
  const teens = [
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
  const tens = [
    '',
    '',
    'twenty',
    'thirty',
    'forty',
    'fifty',
    'sixty',
    'seventy',
    'eighty',
    'ninety',
  ];

  const convertTwoDigits = (num: number): string => {
    if (num === 0) return '';
    if (num < 10) return ones[num];
    if (num < 20) return teens[num - 10];

    const tensDigit = Math.floor(num / 10);
    const onesDigit = num % 10;

    return onesDigit === 0
      ? tens[tensDigit]
      : `${tens[tensDigit]} ${ones[onesDigit]}`;
  };

  const convertThreeDigits = (num: number): string => {
    if (num === 0) return '';

    const hundreds = Math.floor(num / 100);
    const remainder = num % 100;

    let result = '';

    if (hundreds > 0) {
      result = `${ones[hundreds]} hundred`;
    }

    if (remainder > 0) {
      result += result
        ? ` ${convertTwoDigits(remainder)}`
        : convertTwoDigits(remainder);
    }

    return result;
  };

  const thousands = Math.floor(x / 1000);
  const remainder = x % 1000;
  let result = '';

  if (thousands > 0) {
    result = `${convertTwoDigits(thousands)} thousand`;
  }

  if (remainder > 0) {
    result += result
      ? ` ${convertThreeDigits(remainder)}`
      : convertThreeDigits(remainder);
  }

  return result;
}

console.log(numberToEnglish(0));
console.log(numberToEnglish(27));
console.log(numberToEnglish(100));
console.log(numberToEnglish(7012));
console.log(numberToEnglish(99205));
