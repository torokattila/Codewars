/*Sexy primes are pairs of two primes that are 6 apart. In this kata, your job is to complete the 
function sexy_prime(x, y) which returns true if x & y are sexy, false otherwise.*/

function isPrime(number) {
    for (let i = 2; i < number; i++) {
        if (number % i === 0) {
            return false;
        }
    }
    return number > 1;
}

function sexy_prime(x, y){
    return isPrime(x) && isPrime(y) && (x - y == 6 || y - x == 6);
}

console.log(sexy_prime(5, 11));