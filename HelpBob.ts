/*
Bob is a lazy man.

He needs you to create a method that can determine how many letters (both uppercase and lowercase ASCII letters) and digits are in a given string.

Example:

"hel2!lo" --> 6

"wicked .. !" --> 6

"!?..A" --> 1
*/

export function countLettersAndDigits(input: string): number {
  const letterAndNumberPattern = /^[a-zA-Z0-9]+$/;
  let count = 0;

  for (const char of input) {
    if (letterAndNumberPattern.test(char)) count++;
  }

  return count;
}

console.log(countLettersAndDigits('hel2!lo'));
console.log(countLettersAndDigits('n!!ice!!123'));
console.log(countLettersAndDigits('1'));
console.log(countLettersAndDigits('?'));
