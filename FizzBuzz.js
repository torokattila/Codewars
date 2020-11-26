/*Return an array containing the numbers from 1 to N, where N is the parametered value. N will never 
be less than 1 (in C#, N might be less than 1).*/

function fizzbuzz(n) {
    let resultArray = [];

    for (let i = 1; i <= n; i++) {
        resultArray.push(i);
    }

    return resultArray.map(number => {
        if (number % 3 === 0 && number % 5 === 0) {
            number = 'FizzBuzz';
        } else if (number % 3 === 0) {
            number = 'Fizz';
        } else if (number % 5 === 0) {
            number = 'Buzz';
        }

        return number;
    });
}

console.log(fizzbuzz(10));