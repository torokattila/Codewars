"use strict";

export function getSum(a: number, b: number): number {
  let sum: number = 0;

  if (a === b) {
    sum = a;
  } else {
    if (b < 0) {
        for (let i: number = b; i <= a; i++) {
            sum += i;
        }
    } else {
        for (let j: number = a; j <= b; j++) {
            sum += j;
        }
    }
  }

  return sum;
}

console.log(getSum(-1, 2));
