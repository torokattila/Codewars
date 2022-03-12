/*Your task is to take a given range and return an array of the prime numbers in that range.

You will write a function with the following parameters:

start is the integer from which your range starts. (inclusive)

end is the integer at which your range ends. (inclusive)

If the range does not contain any prime numbers return null.

Examples:

primes(5, 7)  // [5, 7]
primes(8, 9)  // null
primes(1, 10) // [2, 3, 5, 7]*/

const isPrime = (number) => {
    for (let i = 2; i < number; i++) {
        if (number % i === 0) return false;
    }

    return number > 1;
};

const primes = (start, end) => {
    const result = [];

    for (let i = start; i <= end; i++) {
        if (isPrime(i)) result.push(i);
    }

    return result.length === 0 ? null : result;
};

console.log(primes(8, 9));
