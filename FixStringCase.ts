/*
Fix string case (7kyu)
In this Kata, you will be given a string that may have mixed uppercase and lowercase letters and 
your task is to convert that string to either lowercase only or uppercase only based on:

make as few changes as possible.
if the string contains equal number of uppercase and lowercase letters, convert the string to lowercase.
For example:

solve("coDe") = "code". Lowercase characters > uppercase. Change only the "D" to lowercase.
solve("CODe") = "CODE". Uppercase characters > lowecase. Change only the "e" to uppercase.
solve("coDE") = "code". Upper == lowercase. Change all to lowercase.
*/

export function solve(s: string): string {
  if (s.toLowerCase() === s || s.toUpperCase() === s) return s;

  const lowerCount = s.split('').filter((c) => c === c.toLowerCase()).length;
  const upperCount = s.split('').filter((c) => c === c.toUpperCase()).length;

  return lowerCount >= upperCount ? s.toLowerCase() : s.toUpperCase();
}

console.log(solve('code'));
console.log(solve('CODe'));
console.log(solve('COde'));
console.log(solve('Code'));
