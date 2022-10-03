/*
Turn a given number (an integer > 0, < 1000) into the equivalent English words. 
For the purposes of this kata, no hyphen is needed in numbers 21-99.

Examples:

wordify(1) == "one"
wordify(12) == "twelve"
wordify(17) == "seventeen"
wordify(56) == "fifty six"
wordify(90) == "ninety"
wordify(326) == "three hundred twenty six"
*/

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

function convertMillions(num) {
  if (num >= 1000000) {
    return [
      convertMillions(Math.floor(num / 1000000)),
      'million',
      convertThousands(num % 1000000),
    ].join(' ');
  } else {
    return convertThousands(num);
  }
}

function convertThousands(num) {
  if (num >= 1000) {
    return [
      convertHundreds(Math.floor(num / 1000)),
      'thousand',
      convertHundreds(num % 1000),
    ].join(' ');
  } else {
    return convertHundreds(num);
  }
}

function convertHundreds(num) {
  if (num > 99) {
    return convertTens(num % 100)
      ? [ones[Math.floor(num / 100)], 'hundred', convertTens(num % 100)].join(
          ' '
        )
      : [ones[Math.floor(num / 100)], 'hundred'].join(' ');
  } else {
    return convertTens(num);
  }
}

function convertTens(num) {
  if (num < 10) {
    return ones[num];
  } else if (num >= 10 && num < 20) {
    return teens[num - 10];
  } else {
    return ones[num % 10]
      ? [tens[Math.floor(num / 10)], ones[num % 10]].join(' ')
      : tens[Math.floor(num / 10)];
  }
}

function wordify(n) {
  if (n === 0) return 'zero';

  return convertMillions(n);
}

console.log(wordify(1));
console.log(wordify(12));
console.log(wordify(17));
console.log(wordify(56));
console.log(wordify(90));
console.log(wordify(326));
console.log(wordify(100));
