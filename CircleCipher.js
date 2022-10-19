/*Imagine circle
then split into the length of string parts
for example we want to encode "codewars"
split into eight becasue codewars has eight chars
add letters
remove circle
read it left to right
output is csordaew

decoding is almost same

take csordaew return codewars
*/

function encode(s) {
  if (!s.length) return '';
  let result = s[0];

  [...s].forEach((char, index) => {
    if (index > 0 && result.length < s.length) {
      result += s[s.length - index] + s[index];
    }
  });

  return s.length % 2 === 0 ? result.slice(0, -1) : result;
}

function decode(s) {
  if (!s.length) return '';
  let result = '';
  let sChars = [...s];

  [...s].forEach((char, index) => {
    if (index % 2 === 0) {
      result += char;
      sChars[index] = '';
    }
  });

  sChars
    .filter((char) => char !== '')
    .reverse()
    .forEach((char, index) => {
      result += char;
    });

  return result;
}

// console.log(encode('codewars'));
// console.log(encode('white'));
// console.log(encode('Assert'));

console.log(decode('csordaew'));
console.log(decode('wehti'));
console.log(decode('Atsrse'));
