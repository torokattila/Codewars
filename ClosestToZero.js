/*Simply find the closest value to zero from the list. Notice that there are negatives in the list.

List is always not empty and contains only integers. Return None if it is not possible to define only one of such values. 
And of course, we are expecting 0 as closest value to zero.

Examples:

[2, 4, -1, -3]  => -1
[5, 2, -2]      => None
[5, 2, 2]       => 2
[13, 0, -6]     => 0
*/

function closest(arr) {
  if (arr.includes(0)) return 0;
  const uniqueArr = [...new Set(arr)];
  const differences = {};

  uniqueArr.forEach((num) => {
    differences[num] = Math.abs(0 - num);
  });

  const sortedDifferences = Object.entries(differences).sort(
    (a, b) => a[1] - b[1]
  );
  const firstItemKey = Number(sortedDifferences[0][0]);
  const firstItemValue = sortedDifferences[0][1];
  const secondItemKey = Number(sortedDifferences[1][0]);
  const secondItemValue = sortedDifferences[1][1];

  return firstItemKey === secondItemKey * -1 &&
    firstItemValue === secondItemValue
    ? null
    : firstItemKey;
}

console.log(closest([2, 4, -1, -3]));
console.log(closest([5, 2, -2]));
console.log(closest([5, 2, 2]));
console.log(closest([13, 0, -6]));
