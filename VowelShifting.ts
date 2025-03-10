/*
Vowel Shifting

You get a text and have to shift the vowels by n positions to the right. (Negative value for n should shift to the left.)

Position means the vowel's position if taken as one item in a list of all vowels within the string.

A shift by 1 would mean, that every vowel shifts to the place of the next vowel.

Shifting over the edges of the text should continue at the other edge.

Vowels are "aeiou" / "AEIOU".

If text is null or empty, then simply return back the original text.

Example:
text = "This is a test!"
n = 1
output = "Thes is i tast!"

text = "This is a test!"
n = 3
output = "This as e tist!"
*/

export function vowelShift(text: string | null, n: number): string | null {
  if (!text) return text;

  const vowels = 'aeiouAEIOU';
  const textArray = [...text];

  // extract vowels with their original positions
  const vowelPositions: number[] = [];
  const vowelChars: string[] = [];

  for (let i = 0; i < textArray.length; i++) {
    const char = textArray[i];

    if (vowels.includes(char)) {
      vowelPositions.push(i);
      vowelChars.push(char);
    }
  }

  if (!vowelChars.length) return text; // no vowels to shift

  // normalize shift: ensure we don't do redundant cycles
  n = ((n % vowelChars.length) + vowelChars.length) % vowelChars.length;

  // shift the vowels using slicing
  const shiftedVowels = [...vowelChars.slice(-n), ...vowelChars.slice(0, -n)];

  // place the shifted vowels back into their positions
  vowelPositions.forEach((pos, index) => {
    textArray[pos] = shiftedVowels[index];
  });

  return textArray.join('');
}

console.log(vowelShift('This is a test!', 1));
console.log(vowelShift('This is a test!', 3));
