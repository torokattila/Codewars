/*
Your job here is to write a function (keepOrder in JS/CoffeeScript, 
keep_order in Ruby/Crystal/Python, keeporder in Julia), which takes a sorted array ary and a value val, 
and returns the lowest index where you could insert val to maintain the sorted-ness of the array. 
The input array will always be sorted in ascending order. It may contain duplicates.

Do not modify the input.

Some examples:
keepOrder([1, 2, 3, 4, 7], 5) //=> 4
                      ^(index 4)
keepOrder([1, 2, 3, 4, 7], 0) //=> 0
          ^(index 0)
keepOrder([1, 1, 2, 2, 2], 2) //=> 2
                ^(index 2)
*/

function keepOrder(ary, val) {
  if (!ary.length) return 0;

  let foundIndex = null;

  ary.forEach((item, index) => {
    const current = ary[index];
    const previous = ary[index - 1];

    if (index > 0 && val > previous && val <= current) {
      foundIndex = index;
    }
  });

  const isValueSmallerOrEqualToFirstNumber = !foundIndex && val <= ary[0];
  const isValueBiggerThanLastNumber = !foundIndex && val > ary[ary.length - 1];

  return isValueSmallerOrEqualToFirstNumber
    ? 0
    : isValueBiggerThanLastNumber
    ? ary.length
    : foundIndex;
}

console.log(keepOrder([1, 2, 3, 4, 7], 5));
console.log(keepOrder([1, 2, 3, 4, 7], 0));
console.log(keepOrder([1, 1, 2, 2, 2], 2));
console.log(keepOrder([1, 2, 3, 4], 5));
console.log(keepOrder([1, 2, 3, 4], -1));
console.log(keepOrder([1, 2, 3, 4], 2));
console.log(keepOrder([1, 2, 3, 4], 0));
console.log(keepOrder([1, 2, 3, 4], 1));
console.log(keepOrder([1, 2, 3, 4], 2));
console.log(keepOrder([1, 2, 3, 4], 3));
