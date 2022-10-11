/*
In this Kata, you will be given a string that may have mixed uppercase and lowercase letters and your 
task is to convert that string to either lowercase only or uppercase only based on:

make as few changes as possible.
if the string contains equal number of uppercase and lowercase letters, convert the string to lowercase.
For example:

solve("coDe") = "code". Lowercase characters > uppercase. Change only the "D" to lowercase.
solve("CODe") = "CODE". Uppercase characters > lowecase. Change only the "e" to uppercase.
solve("coDE") = "code". Upper == lowercase. Change all to lowercase.
*/

function solve(s) {
  let uppercaseCounter = 0;
  let lowercaseCounter = 0;

  [...s].forEach((char) => {
    if (char.toLowerCase() === char) lowercaseCounter++;
    if (char.toUpperCase() === char) uppercaseCounter++;
  });

  return uppercaseCounter > lowercaseCounter
    ? s.toUpperCase()
    : s.toLowerCase();
}

console.log(solve('code'));
console.log(solve('CODe'));
console.log(solve('COde'));
console.log(solve('Code'));
