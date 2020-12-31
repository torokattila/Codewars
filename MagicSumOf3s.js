/*The magic sum of 3s is calculated on an array by summing up odd numbers which include the digit 3. 
Write a function magic_sum which accepts an array of integers and returns the sum.*/

function containsThree(number) {
    let result = false;
    numberChars = number.toString().split('');

    numberChars.forEach(character => {
        if (character == '3') {
            result = true;
        }
    });

    return result;
}

function magicSum(numbers) {
    let sum = 0;

    if (numbers == null || !Array.isArray(numbers)) {
        return sum;
    } else
        numbers.forEach(number => {
            if (containsThree(number) && number % 2 != 0) {
                sum += number;
            }
        });

    return sum;
}

console.log(magicSum(33));