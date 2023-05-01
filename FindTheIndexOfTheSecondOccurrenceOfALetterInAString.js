/*
In this kata, you need to write a function that takes a string and a letter as input and then returns the index of the 
second occurrence of that letter in the string. If there is no such letter in the string, then the function should return -1. 
If the letter occurs only once in the string, then -1 should also be returned.

Examples:

secondSymbol('Hello world!!!','l')  --> 3
secondSymbol('Hello world!!!', 'A') --> -1
*/

function secondSymbol(s, symbol) {
  const indices = [];

  [...s].forEach((char, index) => {
    if (char === symbol) {
      indices.push(index);
    }
  });

  if (!indices.length || indices.length === 1) return -1;

  return indices[1];
}

console.log(secondSymbol('Hello world!!!', 'l'));
console.log(secondSymbol('Hello world!!!', 'o'));
console.log(secondSymbol('Hello world!!!', 'A'));
console.log(secondSymbol('', 'q'));
console.log(secondSymbol('Hello', '!'));
