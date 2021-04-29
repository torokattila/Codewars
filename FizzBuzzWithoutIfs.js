/*You need to implement a function that applies the standard fizz buzz test:

If a number is divisible by 3, return Fizz
If it is divisible by 5, return Buzz
If it is divisible by both 3 and 5, return FizzBuzz
If it is not divisible by 3 or 5, return the number itself
However, when making the function, you cannot use if (meaning else is also not an option).

Input
A number will always be provided
The number provided will always be positive and an integer*/

const fizzBuzz = n => {
    return n % 3 == 0 && n % 5 == 0 ? 'FizzBuzz' : n % 5 == 0 ? 'Buzz' : n % 3 == 0 ? 'Fizz' : n;
};