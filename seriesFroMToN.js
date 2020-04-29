'use strict';

function generateIntegers(m, n) {
  let resultArray = [];

  for (let i = m; i <= n; i++) {
      resultArray.push(i);
  }

  return resultArray;
}

console.log(generateIntegers(2, 5));
