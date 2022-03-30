/*For "x", determine how many positive integers less than or equal to "x" are odd but not prime. 
Assume "x" is an integer between 1 and 10000.

Example: 5 has three odd numbers (1,3,5) and only the number 1 is not prime, so the answer is 1

Example: 10 has five odd numbers (1,3,5,7,9) and only 1 and 9 are not prime, so the answer is 2*/

const isPrime = (number) => {
    for (let i = 2; i < number; i++) {
        if (number % i === 0) return false;
    }

    return number > 1;
};

function oddNotPrime(n) {
    let counter = 0;

    for (let i = n; i >= 0; i--) {
        if (!isPrime(i) && i % 2 !== 0) counter++;
    }

    return counter;
}

console.log(oddNotPrime(5));
console.log(oddNotPrime(10));
console.log(oddNotPrime(99));
console.log(oddNotPrime(9));
