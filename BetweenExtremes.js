//Given an array of numbers, return the difference between the largest and smallest values.

function betweenExtremes(numbers) {
    const maximum = Math.max.apply(null, numbers);
    const minimum = Math.min.apply(null, numbers);

    return maximum - minimum;
}

console.log(betweenExtremes([21, 34, 54, 43, 26, 12]));
