/*In this exercise, you will have to create a function named tiyFizzBuzz. 
This function will take on a string parameter and will return that string with some characters replaced, 
depending on the value:

If a letter is a upper case consonants, replace that character with "Iron".
If a letter is a lower case consonants or a non-alpha character, do nothing to that character
If a letter is a upper case vowel, replace that character with "Iron Yard".
If a letter is a lower case vowel, replace that character with "Yard".
Ready?
*/

function tiyFizzBuzz(sentence) {
  console.log(sentence);
  let result = '';
  const sentenceChars = [...sentence];
  const upperCaseVowel = /[AEIOU]/;
  const lowerCaseVowel = /[aeiou]/;
  const uppercaseConsonant = /[QWRTZPSDFGHJKLMNBVCX]/;

  sentenceChars.forEach((char, index) => {
    if (uppercaseConsonant.test(char)) {
      result += 'Iron';
    } else if (upperCaseVowel.test(char)) {
      result += 'Iron Yard';
    } else if (lowerCaseVowel.test(char)) {
      result += 'Yard';
    } else {
      result += char;
    }
  });

  return result;
}

console.log(tiyFizzBuzz('Hello WORLD!'));
