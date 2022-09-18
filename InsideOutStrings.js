/*You are given a string of words (x), for each word within the string you need to turn the word 'inside out'. 
By this I mean the internal letters will move out, and the external letters move toward the centre.

If the word is even length, all letters will move. If the length is odd, you are expected to leave the 'middle' letter of the word where it is.

An example should clarify:

'taxi' would become 'atix' 'taxis' would become 'atxsi'
*/

function turnInsideOut(word) {
  const half = word.length / 2;
  const isEvenLength = word.length % 2 === 0;
  const middleChar = !isEvenLength ? word.substring(half, half + 1) : '';
  const firstHalf = [...word.substring(0, half)].reverse().join('');
  const secondHalf = isEvenLength
    ? [...word.substring(half, word.length)].reverse().join('')
    : [...word.substring(half + 1, word.length)].reverse().join('');

  return `${firstHalf}${middleChar}${secondHalf}`;
}

function insideOut(x) {
  return x
    .split(' ')
    .map((word) => turnInsideOut(word))
    .join(' ');
}

console.log(insideOut('man i need a taxi up to ubud'));
console.log(insideOut('what time are we climbing up the volcano'));
console.log(insideOut('take me to semynak'));
