/*
Your job is to group the words in anagrams.

What is an anagram ?
star and tsar are anagram of each other because you can rearrange the letters for star to obtain tsar.

Example
A typical test could be :

// input
groupAnagrams(["tsar", "rat", "tar", "star", "tars", "cheese"]);

// output
[
  ["tsar", "star", "tars"],
  ["rat", "tar"],
  ["cheese"]
]
Helpers
The method assertSimilarUnsorted has been preloaded for you in the Solution Sandbox only to compare to arrays without relying on the sorting of the elements.

assertSimilarUnsorted([[1,2], [3]], [[3], [1,2]]); // returns true
*/

function groupAnagrams(words) {
  let anagrams = {};
  const result = [];

  for (let word of words) {
    const sortedLetters = [...word].sort().join('');

    anagrams[sortedLetters] = anagrams[sortedLetters] || [];

    anagrams[sortedLetters].push(word);
  }

  for (let key in anagrams) {
    result.push(anagrams[key]);
  }

  return result;
}

console.log(groupAnagrams(['tsar', 'rat', 'tar', 'star', 'tars', 'cheese']));
