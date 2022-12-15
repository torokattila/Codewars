/*
We need a function count_sel() that receives an array or list of integers (positive and negative) 
and may give us the following information in the order and structure presented bellow:

[(1), (2), (3), [[(4)], 5]]

(1) - Total amount of received integers.

(2) - Total amount of different values the array has.

(3) - Total amount of values that occur only once.

(4) and (5) both in a list

(4) - It is (or they are) the element(s) that has (or have) the maximum occurrence. If there are more than one, 
the elements should be sorted (by their value obviously)

(5) - Maximum occurrence of the integer(s)

Let's see some cases

____ count_sel([-3, -2, -1, 3, 4, -5, -5, 5, -1, -5]) ----> [10, 7, 5, [[-5], 3]]

(1) - The list has ten elements (10 numbers)

(2) - We have seven different values: -5, -3, -2, -1, 3, 4, 5 (7 values)

(3) - The numbers that occur only once: -3, -2, 3, 4, 5 (5 values)

(4) and (5) - The number -5 occurs three times (3 occurrences)

____ count_sel([4, 4, 2, -3, 1, 4, 3, 2, 0, -5, 2, -2, -2, -5]) ----> [14, 8, 4, [[2, 4], 3]]
*/

function countSel(lst) {
  const receivedInts = lst.length;
  const differentValues = [...new Set(lst)].length;
  const occurrences = {};

  lst.forEach((item) => {
    occurrences[item] ? occurrences[item]++ : (occurrences[item] = 1);
  });
  const sortedOccurrences = Object.entries(occurrences).sort(
    (a, b) => b[1] - a[1]
  );
  const occurOnlyOnce = sortedOccurrences.filter(
    (item) => item[1] === 1
  ).length;
  const maxOccurrences = sortedOccurrences.length
    ? sortedOccurrences
        .filter((item) => item[1] === sortedOccurrences[0][1])
        .sort((a, b) => Number(a[0] - Number(b[0])))
    : [];
  const maxNumbers = maxOccurrences.map((item) => Number(item[0]));
  const maxOccurrence = maxOccurrences[0][1];

  return [
    receivedInts,
    differentValues,
    occurOnlyOnce,
    [maxNumbers, maxOccurrence],
  ];
}

console.log(countSel([-3, -2, -1, 3, 4, -5, -5, 5, -1, -5]));
console.log(countSel([5, -1, 1, -1, -2, 5, 0, -2, -5, 3]));
console.log(countSel([-2, 4, 4, -2, -2, -1, 3, 5, -5, 5]));
console.log(countSel([4, 4, 2, -3, 1, 4, 3, 2, 0, -5, 2, -2, -2, -5]));
