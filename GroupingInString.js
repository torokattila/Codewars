/*
In this kata you have to find whether same elements of the string are grouped together.

Example

Input	Output
112233	true
11223311	false

Explanation
In first example same elements are grouped together: (11)(22)(33), hence it should return true
In the second example there are two different groups of 1's: (11)2233(11), hence it should return false
*/

const isConsecutive = (str) => {
  const letters = [...str];

  const groups = letters.reduce((acc, char) => {
    if (
      acc.length === 0 ||
      char !== acc[acc.length - 1][acc[acc.length - 1].length - 1]
    ) {
      acc.push([char]);
    } else {
      acc[acc.length - 1].push(char);
    }

    return acc;
  }, []);

  const occurrences = {};

  groups.forEach((group) => {
    return occurrences[group] ? occurrences[group]++ : (occurrences[group] = 1);
  });

  return !Object.values(occurrences).some((num) => num > 1);
};

console.log(isConsecutive('112200'));
console.log(isConsecutive('1222334556667'));
console.log(isConsecutive('001234400522'));
