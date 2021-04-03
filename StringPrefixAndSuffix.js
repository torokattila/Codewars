/*In this Kata, you will be given a string and your task will be to return the length of the longest 
prefix that is also a suffix. A prefix is the start of a string while the suffix is the end of a string. 
For instance, the prefixes of the string "abcd" are ["a","ab","abc"]. The suffixes are ["bcd", "cd", "d"]. 
You should not overlap the prefix and suffix.

for example:
solve("abcd") = 0, because no prefix == suffix. 
solve("abcda") = 1, because the longest prefix which == suffix is "a".
solve("abcdabc") = 3. Longest prefix which == suffix is "abc".
solve("aaaa") = 2. Longest prefix which == suffix is "aa". You should not overlap the prefix and suffix
solve("aa") = 1. You should not overlap the prefix and suffix.
solve("a") = 0. You should not overlap the prefix and suffix.
All strings will be lowercase and string lengths are 1 <= length <= 500*/

function solve(s) {
    let prefixArray = [];
    let suffixArray = [];

    for (let i = 0; i < s.length; i++) {
        prefixArray.push(s.slice(0, i));
        suffixArray.push(s.slice(-i))
    }
  
    const sameElementsArray = prefixArray.filter(item => {
        return suffixArray.includes(item) && item.length <= s.length / 2;
    });

    return sameElementsArray.length > 0 ? sameElementsArray.sort((a, b) => b.length - a.length)[0].length : 0;
}

console.log(solve('abcdabc'));