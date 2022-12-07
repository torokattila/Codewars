/*
Given a list of unique words. Find all pairs of distinct indices (i, j) in the given list so that the concatenation of the two words, 
i.e. words[i] + words[j] is a palindrome.

Examples:

["bat", "tab", "cat"] # [[0, 1], [1, 0]]
["dog", "cow", "tap", "god", "pat"] # [[0, 3], [2, 4], [3, 0], [4, 2]]
["abcd", "dcba", "lls", "s", "sssll"] # [[0, 1], [1, 0], [2, 4], [3, 2]]
Non-string inputs should be converted to strings.

Return an array of arrays containing pairs of distinct indices that form palindromes. 
Pairs should be returned in the order they appear in the original list.
*/

const isPalindrome = (str) => {
  let length = str.length;

  for (let i = 0; i < length / 2; i++) {
    if (str[i] !== str[length - i - 1]) return false;
  }

  return true;
};

const palindromePairs = (words) => {
  const pairs = [];

  for (let i = 0; i < words.length; i++) {
    for (let j = 0; j < words.length; j++) {
      if (i !== j) {
        let check = `${words[i]}${words[j]}`;

        if (isPalindrome(check)) {
          pairs.push([i, j]);
        }
      }
    }
  }

  return pairs;
};

console.log(palindromePairs(['bat', 'tab', 'cat']));
console.log(palindromePairs(['dog', 'cow', 'tap', 'god', 'pat']));
console.log(palindromePairs(['abcd', 'dcba', 'lls', 's', 'sssll']));
