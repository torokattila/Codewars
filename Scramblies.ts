/*
Scramblies

Complete the function scramble(str1, str2) that returns true if a portion of str1 
characters can be rearranged to match str2, otherwise returns false.

Notes:
Only lower case letters will be used (a-z). No punctuation or digits will be included.
Performance needs to be considered.

Examples:
scramble('rkqodlw', 'world') ==> True
scramble('cedewaraaossoqqyt', 'codewars') ==> True
scramble('katas', 'steak') ==> False
*/

export function scramble(str1: string, str2: string): boolean {
  if (str2.length > str1.length) return false;

  const charCount: Map<string, number> = new Map();

  for (const char of str1) {
    charCount.set(char, (charCount.get(char) || 0) + 1);
  }

  for (const char of str2) {
    const count = charCount.get(char);

    if (!count || count <= 0) {
      return false;
    }

    charCount.set(char, count - 1);
  }

  return true;
}

console.log(scramble('rkqodlw', 'world'));
console.log(scramble('cedewaraaossoqqyt', 'codewars'));
console.log(scramble('katas', 'steak'));
