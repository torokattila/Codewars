/*Your task is to find the nearest square number, nearest_sq(n), of a positive integer n.*/

const isSquare = (num) => num > 0 && Math.sqrt(num) % 1 === 0;

function nearestSq(n) {
    if (n === 1) return 1;
    let nextSmallerSquare = n - 1;
    let nextBiggerSquare = n + 1;

    while (!isSquare(nextSmallerSquare)) {
        nextSmallerSquare--;
    }

    while (!isSquare(nextBiggerSquare)) {
        nextBiggerSquare++;
    }

    const diffBetweenSmallerAndN = n - nextSmallerSquare;
    const diffBetweenBiggerAndN = nextBiggerSquare - n;

    return diffBetweenBiggerAndN < diffBetweenSmallerAndN
        ? nextBiggerSquare
        : nextSmallerSquare;
}

console.log(nearestSq(9999));
