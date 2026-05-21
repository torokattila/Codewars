/*
Ordered Count of Characters (7 kyu)

Count the number of occurrences of each character and return it as a (list of tuples) in order of appearance. 
For empty output return (an empty list).

Consult the solution set-up for the exact data structure implementation depending on your language.

Example:

orderedCount("abracadabra") == [['a', 5], ['b', 2], ['r', 2], ['c', 1], ['d', 1]]
*/

export function orderedCount(text: string): [string, number][] {
  const charCount: Map<string, number> = new Map();

  for (const char of text) {
    const currentCount = charCount.get(char) ?? 0;
    charCount.set(char, currentCount + 1);
  }

  return Array.from(charCount.entries());
}

console.log(orderedCount('abracadabra'));
console.log(orderedCount('Code Wars'));
console.log(orderedCount('233312'));
