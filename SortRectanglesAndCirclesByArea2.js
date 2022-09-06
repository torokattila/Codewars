/*In this kata you will be given a sequence of the dimensions of rectangles 
( sequence with width and length ) and circles ( radius - just a number ).
Your task is to return a new sequence of dimensions, sorted ascending by area.

For example,

const array = [ [4.23, 6.43], 1.23, 3.444, [1.342, 3.212] ]; // [ rectangle, circle, circle, rectangle ]
sortByArea(array) => [ [ 1.342, 3.212 ], 1.23, [ 4.23, 6.43 ], 3.444 ]
*/

function sortByArea(array) {
  const areasObj = {};

  array.forEach((item, index) => {
    if (Array.isArray(item)) {
      areasObj[index] = {
        item,
        area: item.reduce((accum, current) => accum * current),
      };
    } else {
      areasObj[index] = {
        item,
        area: item * item * Math.PI,
      };
    }
  });

  return Object.entries(areasObj)
    .sort((a, b) => a[1].area - b[1].area)
    .map((shape) => shape[1].item);
}

console.log(sortByArea([[4.23, 6.43], 1.23, 3.444, [1.342, 3.212]]));
