/*
Find the length of the longest substring in the given string s that is the same in reverse.

As an example, if the input was “I like racecars that go fast”, the substring (racecar) length would be 7.

If the length of the input string is 0, the return value must be 0.

Example:
"a" -> 1 
"aab" -> 2  
"abcde" -> 1
"zzbaabcd" -> 4
"" -> 0
*/

function reversedString(string, start, length) {
  return [...string.substr(start, length)].reverse().join('');
}

function longestPalindrome(s) {
  const lowerCaseS = s.toLowerCase();
  let result = '';

  for (let i = 0; i < lowerCaseS.length; i++) {
    for (let j = 1; j <= lowerCaseS.length - i; j++) {
      if (lowerCaseS.substr(i, j) === reversedString(lowerCaseS, i, j)) {
        if (j > result.length) {
          result = lowerCaseS.substr(i, j);
        }
      }
    }
  }

  return result.length;
}

console.log(longestPalindrome('a'));
console.log(longestPalindrome('aa'));
console.log(longestPalindrome('baa'));
console.log(longestPalindrome('aab'));
console.log(longestPalindrome('zyabyz'));
console.log(longestPalindrome('baabcd'));
console.log(longestPalindrome('baablkj12345432133d'));
