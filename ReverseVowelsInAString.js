/*
Kata url: https://www.codewars.com/kata/585db3e8eec141ce9a00008f
In this kata, your goal is to write a function which will reverse the vowels in a string. Any characters which are not vowels should remain in their original position. Here are some examples:

"Hello!" => "Holle!"
"Tomatoes" => "Temotaos"
"Reverse Vowels In A String" => "RivArsI Vewols en e Streng"
For simplicity, you can treat the letter y as a consonant, not a vowel.

Good luck!
*/

function reverseVowels(str) {
  const vowelPattern = /[aeiouAEIOU]/;
  const vowelIndices = [];
  let vowels = [];
  const strCopy = [...str];

  [...str].forEach((char, index) => {
    if (vowelPattern.test(char)) {
      vowelIndices.push(index);
      vowels.push(char);
    }
  });

  vowels = vowels.reverse();

  vowels.forEach((char, index) => {
    strCopy[vowelIndices[index]] = char;
  });

  return strCopy.join('');
}

console.log(reverseVowels('Hello!'));
console.log(reverseVowels('Temotaos'));
console.log(reverseVowels('Reverse Vowels In A String'));
