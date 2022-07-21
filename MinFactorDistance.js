/*Write a function named minDistance/MinDistance that returns the smallest distance between 
two factors of a number,the input will be number greater than one.

example:

number=13013 has factors 
[1,7,11,13,13013]

minDistance(number) return 2 //13-11
*/

const getFactors = (num) => {
    const factors = [];

    for (let i = 1; i <= num; i++) {
        if (num % i === 0) factors.push(i);
    }

    return factors;
};

function minDistance(n) {
    const factors = getFactors(n);
    const distances = [];

    for (let i = 0; i < factors.length; i++) {
        const current = factors[i];
        const previous = factors[i - 1];

        if (i > 0) distances.push(current - previous);
    }

    return Math.min(...distances);
}

console.log(minDistance(8));
console.log(minDistance(25));
console.log(minDistance(13013));
console.log(minDistance(218683));
