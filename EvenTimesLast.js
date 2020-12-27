/*Given an array of integers, return the sum of all the integers that have an even index, multiplied by the integer at the last index.

If the array is empty, you should return 0.*/

function evenLast(numbers) {

    if (numbers.length == 0) {
        return 0;
    } else {
        const lastIndexNumber = numbers[numbers.length - 1];
        let sum = 0;
        let evenIndexedNumbersArray = [];

        for (let i = 0; i < numbers.length; i++) {
            if (i % 2 == 0) {
                evenIndexedNumbersArray.push(numbers[i]);
            }
        }

        evenIndexedNumbersArray.forEach(number => {
            sum += number * lastIndexNumber;
        });

        return sum;
    }
}

console.log(evenLast([2, 3, 4, 5]));