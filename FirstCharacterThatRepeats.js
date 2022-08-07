/*Find the first character that repeats in a String and return that character.

firstDup('tweet') => 't'
firstDup('like') => undefined
This is not the same as finding the character that repeats first. 
In that case, an input of 'tweet' would yield 'e'.

Another example:

In 'translator' you should return 't', not 'a'.

v      v  
translator
  ^   ^
While second 'a' appears before second 't', the first 't' is before the first 'a'.
*/

function firstDup(s) {
  const charCollection = {};

  [...s].forEach((char, index) => {
    if (!charCollection[char]) {
      charCollection[char] = {
        count: 1,
        firstOccurrence: index,
      };
    } else {
      charCollection[char].count++;
    }
  });

  const collectionArray = Object.entries(charCollection);
  const sortedCollection = collectionArray.sort((a, b) => {
    if (a[1].count === b[1].count) {
      if (a[1].firstOccurrence < b[1].firstOccurrence) return -1;
      if (a[1].firstOccurrence > b[1].firstOccurrence) return 1;
      return 0;
    } else {
      return b[1].count - a[1].count;
    }
  });

  return sortedCollection[0][1].count === 1
    ? undefined
    : sortedCollection[0][0];
}

console.log(firstDup('tweet'));
console.log(firstDup('like'));
console.log(firstDup('translator'));
