/*Create a function which checks a number for three different properties.

is the number prime?
is the number even?
is the number a multiple of 10?
Each should return either true or false, which should be given as an array. Remark: The Haskell variant 
uses data Property.

Examples
numberProperty(7)  // ==> [true,  false, false] 
numberProperty(10) // ==> [false, true,  true] 
The number will always be an integer, either positive or negative. Note that negative numbers cannot 
be primes, but they can be multiples of 10:*/

function isPrimeFunction(number) {
    for (let i = 2; i < number; i++)
        if (number % i === 0) return false;
    return number > 1;
}

function isEvenFunction(number) {
    return number % 2 === 0;
}

function isMultipleOf10Function(number) {
    return number % 10 === 0;
}

function numberProperty(n) {
    let isPrime = false;
    let isEven = false;
    let isMultipleOF10 = false;

    if (isPrimeFunction(n)) {
        isPrime = true;
    }
    if (isEvenFunction(n)) {
        isEven = true;
    }
    if (isMultipleOf10Function(n)) {
        isMultipleOF10 = true;
    }

    return [isPrime, isEven, isMultipleOF10];
};

console.log(numberProperty(2));