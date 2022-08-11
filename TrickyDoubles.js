/*Examples of a double number include:

44
77
3333
8787
100100
In the example 8787, the number 87 is doubled (appears twice).

trickyDoubles(15)   // should return 30
trickyDoubles(100)  // should return 200
trickyDoubles(4343) // should return 4343
*/

const isDouble = (num) => {
  const stringNum = `${num}`;
  const firstHalf = stringNum.slice(0, stringNum.length / 2);
  const secondHalf = stringNum.slice(stringNum.length / 2);

  return firstHalf === secondHalf;
};

const trickyDoubles = (n) => {
  return isDouble(n) ? n : n * 2;
};

console.log(trickyDoubles(15));
console.log(trickyDoubles(100));
console.log(trickyDoubles(4343));
console.log(trickyDoubles(100100));
