/*Wilson primes satisfy the following condition. Let P represent a prime number.

Then ((P-1)! + 1) / (P * P) should give a whole number.

Your task is to create a function that returns true if the given number is a Wilson prime.*/

const isPrime = (number) => {
    for (let i = 2; i < number; i++) {
        if (number % i === 0) {
            return false;
        }
    }

    return number > 1;
};

const factorial = (number) => {
    return number === 0 ? 1 : number * factorial(number - 1);
};

function amIWilson(p) {
    if (!isPrime(p)) return false;

    return Number.isInteger((factorial(p - 1) + 1) / (p * p));
}

console.log(amIWilson(5));
console.log(amIWilson(9));
console.log(amIWilson(6));
