/*Given an array/list [] of n integers , find maximum triplet sum in the array Without duplications .*/

function maxTriSum(numbers) {
    let uniqueSet = new Set();

    numbers = numbers.sort((a, b) => { return b - a });
    numbers.forEach(number => {
        uniqueSet.add(number);
    });

    const triplet = Array.from(uniqueSet).slice(0, 3);

    return triplet.reduce((accum, current) => accum + current);
}

console.log(maxTriSum([3,2,6,8,2,3]))