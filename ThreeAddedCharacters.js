/*
Given two strings, the first being a random string and the second being the same as the first, 
but with three added characters somewhere in the string (three same characters),

Write a function that returns the added character

E.g
string1 = "hello"
string2 = "aaahello"

// => 'a'
The above is just an example; the characters could be anywhere in the string and string2 is actually shuffled.

Another example
string1 = "abcde"
string2 = "2db2a2ec"

// => '2'
Note that the added character could also exist in the original string

string1 = "aabbcc"
string2 = "aacccbbcc"

// => 'c'
You can assume that string2 will aways be larger than string1, and there will always be three added characters in string2.

Write the function addedChar() that takes two strings and return the added character as described above.
*/

function addedChar(s1, s2) {
  const s1CharOccurrences = {};
  const s2CharOccurrences = {};
  let result = undefined;

  [...s1].forEach((char) => {
    return s1CharOccurrences[char]
      ? s1CharOccurrences[char]++
      : (s1CharOccurrences[char] = 1);
  });

  [...s2].forEach((char) => {
    return s2CharOccurrences[char]
      ? s2CharOccurrences[char]++
      : (s2CharOccurrences[char] = 1);
  });

  for (const [key, value] of Object.entries(s2CharOccurrences)) {
    if (
      (s1CharOccurrences.hasOwnProperty(key) &&
        value - 3 === s1CharOccurrences[key]) ||
      !s1CharOccurrences.hasOwnProperty(key)
    ) {
      result = key;
    }
  }

  return result;
}

console.log(addedChar('hello', 'aaahello'));
console.log(addedChar('abcde', '2db2a2ec'));
console.log(addedChar('aabbcc', 'aacccbbcc'));
