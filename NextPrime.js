/*Get the next prime number!

You will get a numbern (>= 0) and your task is to find the next prime number.

Make sure to optimize your code: there will numbers tested up to about 10^12.

Examples
5   =>  7
12  =>  13*/

const isPrimeNum = (num) => {
  let sqrtNum = Math.floor(Math.sqrt(num));
  let isPrime = num !== 1;

  for (let i = 2; i < sqrtNum + 1; i++) {
    if (num % i === 0) {
      isPrime = false;
      break;
    }
  }

  return isPrime;
}

function nextPrime(n){
  while (!isPrimeNum(++n)) {
  }
  return n;
}

console.log(nextPrime(5));