/*
Simple, given a string of words, return the length of the shortest word(s).

String will never be empty and you do not need to account for different data types.
*/

function findShort(s) {
  return s.split(' ').sort((a, b) => a.length - b.length)[0].length;
}

console.log(findShort('bitcoin take over the world maybe who knows perhaps'));
console.log(
  findShort(
    'turns out random test cases are easier than writing out basic ones'
  )
);
console.log(findShort("Let's travel abroad shall we"));
