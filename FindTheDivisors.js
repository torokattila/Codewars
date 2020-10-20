/*Create a function named divisors/Divisors that takes an integer n > 1 and returns an array with all 
of the integer's divisors(except for 1 and the number itself), from smallest to largest. 
If the number is prime return the string '(integer) is prime' (null in C#) (use Either String a 
in Haskell and Result<Vec<u32>, String> in Rust).*/

function divisors(integer) {
    let resultArray = [];

    if (isPrime(integer)) {
        return `${integer} is prime`;
    } else {
        for (let i = 0; i < integer; i++) {
            if (i !== 1 && i !== integer && integer % i === 0) {
                resultArray.push(i);
            }
        }
    }

    return resultArray;
};

function isPrime(number) {
    for (let i = 2; i < number; i++) 
        if (number % i === 0) return false;
    return number > 1;
}

console.log(divisors(13))