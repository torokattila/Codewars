/*We need a function prime_bef_aft() that gives the largest prime below a certain given value n,

befPrime or bef_prime (depending on the language),

and the smallest prime larger than this value,

aftPrime/aft_prime (depending on the language).

The result should be output in a list like the following:

primeBefAft == [befPrime, aftPrime]
If n is a prime number it will give two primes, n will not be included in the result.

Let's see some cases:

primeBefAft(100) == [97, 101]

primeBefAft(97) == [89, 101]

primeBefAft(101) == [97, 103]
Range for the random tests: 1000 <= n <= 200000*/

const isPrime = (number) => {
    for (let i = 2; i < number; i++) {
        if (number % i === 0) return false;
    }

    return number > 1;
};

function primeBefAft(num) {
    let copyNumForBefore = num;
    let copyNumForAfter = num;

    while (!isPrime(--copyNumForBefore)) {}
    while (!isPrime(++copyNumForAfter)) {}

    return [copyNumForBefore, copyNumForAfter];
}

console.log(primeBefAft(97));
