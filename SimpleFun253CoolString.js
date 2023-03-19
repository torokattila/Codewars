/*
Let's call a string cool if it is formed only by Latin letters and no two lowercase and 
no two uppercase letters are in adjacent positions. Given a string, check if it is cool.

Input/Output
[input] string s

A string that contains uppercase letters, lowercase letters numbers and spaces.

1 ≤ s.length ≤ 20.

[output] a boolean value

true if s is cool, false otherwise.

Example
For s = "aQwFdA", the output should be true

For s = "aBC", the output should be false;

For s = "AaA", the output should be true;

For s = "q q", the output should be false.
*/

function isLowerCase(char) {
  return char === char.toLowerCase();
}

function isUpperCase(char) {
  return char === char.toUpperCase();
}

function coolString(s) {
  const latinPattern = /^[a-zA-Z]+$/;
  const withoutSpaces = s.replace(/ /g, '');

  if (!latinPattern.test(withoutSpaces)) return false;

  let result = true;

  for (let i = 0; i < withoutSpaces.length; i++) {
    const current = withoutSpaces[i];
    const previous = withoutSpaces[i - 1];

    if (
      i > 0 &&
      ((isLowerCase(current) && isLowerCase(previous)) ||
        (isUpperCase(current) && isUpperCase(previous)))
    ) {
      result = false;
    }
  }

  return result;
}

console.log(coolString('aQwFdA'));
console.log(coolString('aBC'));
console.log(coolString('AaA'));
console.log(coolString('q q2'));
